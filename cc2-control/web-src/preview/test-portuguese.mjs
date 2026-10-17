import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'
import { fixture, launchOptions, root } from './fixture.mjs'

const labels = JSON.parse(await readFile(path.join(root, 'public/locales/pt-BR.json'), 'utf8'))
const source = JSON.parse(await readFile(path.join(root, 'public/locales/en.json'), 'utf8'))
assert.deepEqual(Object.keys(labels).sort(), Object.keys(source).sort(), 'Portuguese must cover every source key')
const demo = await fixture()
const browser = await chromium.launch(launchOptions)
const errors = []
const watchErrors = page => page.on('pageerror', e => errors.push(e.message))
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
  watchErrors(page)
  await page.goto(demo.url + '#settings')
  await page.getByRole('tab').nth(2).click()
  const language = page.locator('main select:has(option[value="pt-BR"])')
  assert.equal(await language.locator('option[value="pt-BR"]').textContent(), 'Português (BR)')
  await language.selectOption('pt-BR')
  await page.waitForFunction(() => document.documentElement.lang === 'pt-BR')
  assert.equal(await page.evaluate(() => window.__CC2_PREVIEW.preferences.language), 'pt-BR')
  assert.equal(await page.evaluate(() => localStorage.getItem('cc2-language')), 'pt-BR')
  await page.reload()
  await page.waitForFunction(() => document.documentElement.lang === 'pt-BR')
  for (const tab of ['control', 'canvas', 'settings']) {
    await page.evaluate(t => { location.hash = '#' + t }, tab)
    await page.waitForTimeout(300)
    if (tab === 'control') {
      await page.getByRole('heading', { name: labels['common.control'], exact: true }).waitFor()
      assert.equal(await page.locator('.cc2-fans input[type=number]').count(), 3)
    }
    if (tab === 'canvas') {
      await page.getByRole('button', { name: labels['canvas.reset_all'], exact: true }).click()
      await page.getByText(labels['canvas.reset_all_confirm'], { exact: true }).waitFor()
      await page.getByRole('button', { name: labels['common.cancel'], exact: true }).click()
      assert.equal((await page.evaluate(() => window.__CC2_PREVIEW.commands)).length, 0)
    }
    for (const width of [1440, 768, 390]) {
      await page.setViewportSize({ width, height: 1000 })
      await page.waitForTimeout(100)
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `pt-BR/${tab}/${width} overflow`)
    }
    await page.setViewportSize({ width: 1440, height: 1000 })
  }
  // Changing another preference must retain the saved regional language.
  await page.goto(demo.url + '#settings')
  await page.getByRole('tab').nth(2).click()
  await page.locator('main select:has(option[value="dracula"])').selectOption('dracula')
  await page.reload()
  await page.waitForFunction(() => document.documentElement.lang === 'pt-BR')
  assert.equal(await page.evaluate(() => window.__CC2_PREVIEW.preferences.language), 'pt-BR')
  // Explicit selection of another language still takes precedence over browser detection.
  await page.getByRole('tab').nth(2).click()
  await language.selectOption('en')
  await page.waitForFunction(() => document.documentElement.lang === 'en')
  await page.reload()
  await page.waitForFunction(() => document.documentElement.lang === 'en')
  for (const [languages, expected] of [
    [['pt-BR'], 'pt-BR'],
    [['pt-br'], 'pt-BR'],
    [['pt'], 'pt-BR'],
    [['pt-PT'], 'pt-BR'],
    [['de-DE', 'pt-BR', 'en'], 'pt-BR'],
    [['fr-CA', 'pt-BR'], 'fr'],
    [['es-MX'], 'es'],
    [['de-DE'], 'en'],
  ]) {
    const context = await browser.newContext()
    await context.addInitScript(langs => {
      Object.defineProperty(navigator, 'languages', { get: () => langs })
      localStorage.setItem('cc2-fixture-preferences', '{"language":""}')
    }, languages)
    const automatic = await context.newPage()
    watchErrors(automatic)
    await automatic.goto(demo.url + '#control')
    await automatic.waitForFunction(code => document.documentElement.lang === code, expected)
    if (expected === 'pt-BR')
      await automatic.getByRole('heading', { name: labels['common.control'], exact: true }).waitFor()
    await context.close()
  }
  assert.deepEqual(errors, [])
  console.log('PASS: complete pt-BR locale, selection, persistence, theme independence, regional detection, translated confirmation and responsive layouts')
} finally {
  await browser.close()
  await demo.cleanup()
}
