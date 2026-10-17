# Firmware Comunitário Centauri Carbon 2

[English](README.md) · **Português (BR)**

> Este fork adiciona português do Brasil ao código-fonte; os binários já publicados pelo projeto original não incluem a tradução. Em uma versão recompilada do aplicativo, selecione **Português (BR)** em **Configurações → Aparência**. Uma atualização do aplicativo original substitui a versão traduzida até que o suporte a pt-BR seja integrado ao projeto original.

Firmware comunitário, controle local da impressora e ferramentas de compilação reproduzível para a **ELEGOO Centauri Carbon 2**, mantidos por **Neme77**.

> Projeto comunitário independente. Não é afiliado, endossado nem apoiado pela ELEGOO.

<p align="center"><strong>Controle local · Canvas · Sincronização com OrcaSlicer · Dez idiomas no aplicativo · Seis temas</strong></p>

<p align="center">
  <a href="docs/FIRST_RUN.md">Primeira instalação</a> · <a href="docs/ORCASLICER.md">OrcaSlicer e Canvas</a> · <a href="docs/SCREENSHOTS.md">Capturas de tela</a> · <a href="docs/CONTRIBUTORS.md">Créditos da comunidade</a>
</p>

<p align="center">
  <img src="docs/images/cc2-control/dashboard-light.png" alt="CC2 Control 1.2.3: câmera ao vivo, controles da impressora e monitoramento térmico" width="1200">
</p>

## Comece aqui / Guias

| Guia | Inglês | Italiano |
| --- | --- | --- |
| Primeira instalação, IP da impressora e código de acesso LAN | [Configuração inicial](docs/FIRST_RUN.md) | [Prima installazione](docs/FIRST_RUN.it.md) |
| Conexão com OrcaSlicer, envio de arquivos e sincronização de filamentos do Canvas | [Guia do OrcaSlicer](docs/ORCASLICER.md) | [Guida OrcaSlicer](docs/ORCASLICER.it.md) |
| Firmware completo mais recente e recursos mantidos | [Registro de alterações](CHANGELOG.md#community-firmware-v441--cc2-control-1210--2026-10-14) | [Novità della release](CHANGELOG.md#community-firmware-v441--cc2-control-1210--2026-10-14) |

## V4.4.1 — firmware completo com CC2 Control 1.2.10

**[Baixe o firmware completo V4.4.1](https://github.com/Neme77/centauri-carbon-2-community/releases/tag/V4.4.1)** — lançado em **14 de outubro de 2026**, baseado na versão qualificada **ELEGOO CC2 02.01.01.07**.

**Para novos usuários: uma instalação do firmware inclui o CC2 Control 1.2.10, suas correções qualificadas e o atualizador assinado completo em Configurações.** Não é necessário instalar um segundo pacote de aplicativo pelo computador. O callback nativo e os patches de firmware continuam incluídos; o Canvas permanece no MQTT. PR103/114 e o Canvas UDS experimental completo continuam excluídos.

<p align="center">
  <a href="https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4.1/CC2_V4_4_1_STOCK_20261014_205610_dd82af94.zip.sig"><img alt="Baixar firmware completo V4.4.1" src="https://img.shields.io/badge/Download-Firmware%20V4.4.1-00b8d9?style=for-the-badge"></a>
  <a href="https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4.1/CC2-Builder-V4.4.1-Source.zip"><img alt="Baixar compilador do código-fonte V4.4.1" src="https://img.shields.io/badge/Builder-V4.4.1%20Source-f59e0b?style=for-the-badge"></a>
  <a href="https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4.1/SHA256SUMS.txt"><img alt="Baixar somas de verificação SHA-256" src="https://img.shields.io/badge/Verify-SHA--256-22c55e?style=for-the-badge"></a>
</p>

| Download | Finalidade |
| --- | --- |
| [Firmware V4.4.1 completo e assinado](https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4.1/CC2_V4_4_1_STOCK_20261014_205610_dd82af94.zip.sig) | Instalação offline por USB na impressora; inclui a base compatível, o CC2 Control 1.2.10 e ferramentas auxiliares do atualizador. Mantenha o arquivo `.zip.sig` intacto. |
| [Compilador público do código-fonte](https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4.1/CC2-Builder-V4.4.1-Source.zip) | Kit para compilar no computador somente a partir do código-fonte; os arquivos oficiais do fornecedor, as ferramentas qualificadas e as chaves privadas de assinatura/AES permanecem externos. Este ZIP não é firmware para a impressora. |
| [SHA256SUMS.txt](https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4.1/SHA256SUMS.txt) | Somas de verificação desses arquivos exatos da versão. |

[Primeira instalação em inglês](docs/FIRST_RUN.md) · [Prima installazione in italiano](docs/FIRST_RUN.it.md). Quem já usa V4.4 pode instalar somente a atualização do aplicativo abaixo; não é necessário restaurar as configurações de fábrica. Mantenha o canal do aplicativo compatível com V4.4: **4.4.1 é a versão completa do firmware, enquanto 4.4 é sua família de compatibilidade**. O visor da impressora continua indicando a versão base 02.01.01.07.

**Autorização para atualizar o aplicativo:** verificar se há atualizações não exige o código LAN. Baixar/enviar e instalar exige confirmação com o código LAN configurado na impressora, exibido em **Configurações → Somente LAN**, mesmo quando o CC2 Control já está conectado. Esse código é diferente da senha SSH. [Explicação em inglês](docs/UPDATE_CC2.md#why-the-lan-code-is-required) · [Spiegazione italiana](docs/UPDATE_CC2.it.md#perché-viene-richiesto-il-codice-lan). As atualizações nunca são instaladas sem supervisão; o painel atualiza o CC2 Control, enquanto o firmware completo usa o procedimento por USB.

A imagem R3 exata passou pela compilação assinada e pelo teste de instalação/conexão/Canvas/preservação de perfis/reinicialização do mantenedor. Os sete trabalhos de CI passaram. Os relatos anteriores de testes beta com impressões prolongadas continuam descritos abaixo; eles não representam um novo teste de 40 horas desta imagem exata. Integração: [PR126](https://github.com/Neme77/centauri-carbon-2-community/pull/126); os PRs e colaboradores do aplicativo recebem crédito abaixo.

**Italiano:** la V4.4.1 offre ai nuovi utenti un unico firmware con CC2 Control 1.2.10, fix e updater già integrati. Per gli update successivi basta il pannello e la conferma con il codice LAN. Chi usa già la V4.4 può scegliere l'aggiornamento della sola applicazione. Non serve ripristinare la stampante.

## CC2 Control 1.2.14 — atualização estável validada na impressora

**[Baixar CC2 Control 1.2.14](https://github.com/Neme77/centauri-carbon-2-community/releases/tag/CC2-Control-1.2.14-V4.4)** · [Guia de atualização em inglês](docs/UPDATE_CC2.md) · [Guida italiana](docs/UPDATE_CC2.it.md).

**Somente Community Firmware V4.4 / V4.4.1. Não instale na V4.3 nem no firmware original da ELEGOO.** Atualiza o aplicativo e mantém o firmware e o ambiente de execução do callback instalados. As preferências e os perfis existentes são mantidos.

| Melhoria | Resultado |
| --- | --- |
| Exclusão de objetos | Ordem espacial da frente para trás e da esquerda para a direita, nomes legíveis e cópias numeradas; os identificadores originais do G-code permanecem separados dos nomes exibidos. Trata as coordenadas codificadas como texto pela ELEGOO e limpa os objetos de impressões concluídas. |
| Estado do Canvas | Diferencia slots vazios, filamento presente mas descarregado do cabeçote, filamento carregado e transições. As ações só ficam disponíveis quando aplicáveis. |
| Câmera e ventiladores | A visualização ao vivo persistente mantém o tamanho original; os controles deslizantes dos ventiladores podem ser arrastados corretamente e os valores numéricos continuam sendo aplicados com Enter. |
| Fluxo das placas | Crie uma placa antes da primeira malha, selecione-a para calibração e mantenha o destino ao trocar de aba. Perfis não calibrados não podem ser montados. |
| Detalhes da malha | Identificações dos lados A/B para default/default1, calibração de 30 a 110 °C e data da medição com hora exata e fuso horário. |
| Idiomas e atualizações | Nove idiomas, incluindo espanhol, húngaro revisado e pontuação localizada nas atualizações. |

Abra **Configurações → Atualizações → Estável → Verificar atualizações**. Informe o código LAN configurado, baixe e verifique o pacote e confirme a instalação em seguida. Pause a visualização ao vivo e use uma impressora conectada e ociosa, com bico/mesa a no máximo 50 °C e alvos dos aquecedores em zero. Não é necessário restaurar as configurações de fábrica. O código LAN fica no visor em **Configurações → Somente LAN** e é diferente da senha SSH. Sem o painel atualizador, use o ZIP de instalação pelo computador da versão; o envio pelo painel aceita o arquivo `.cc2update` assinado.

**Validado na impressora do mantenedor:** Canvas, geometria da câmera, controles do ventilador com mouse, espanhol, pontuação localizada, rótulos A/B, exclusão de objetos e o novo fluxo de placas/calibração. Os testes nativos, do navegador e ARM passaram; o pacote assinado publicado é idêntico ao candidato testado. Este não é um novo teste de impressão de longa duração.

**Créditos:** espanhol por **[asiersan](https://github.com/asiersan)** ([#130](https://github.com/Neme77/centauri-carbon-2-community/pull/130), integração #133); ajustes de húngaro por **[pezso92](https://github.com/pezso92)** ([#129](https://github.com/Neme77/centauri-carbon-2-community/pull/129), integração #132); pontuação localizada por **[Surfoo](https://github.com/Surfoo)** ([#128](https://github.com/Neme77/centauri-carbon-2-community/pull/128), integração #135). A construção avançada de malhas usa como base o **#104 de beanbo**. Agradecimentos especiais a **[DamiBFryta](https://www.reddit.com/user/DamiBFryta/)**, nosso primeiro testador beta, por sua confiabilidade, opiniões imparciais e disponibilidade constante. Obrigado a todos os testadores beta pelos relatos e testes na impressora; [créditos completos](docs/CONTRIBUTORS.md).

**Compatibilidade da biblioteca:** aplicativos antigos que exigem temperatura mínima de 40 °C não conseguem ler medições criadas entre 30 e 39 °C e podem descartar perfis não calibrados ao salvar. Faça backup da biblioteca de placas antes de voltar para um aplicativo mais antigo. A ejeção experimental do Canvas, o Canvas UDS contínuo e a reinicialização do serviço da webcam estão excluídos.

**Italiano:** la 1.2.14 aggiorna esclusivamente CC2 Control su V4.4/V4.4.1. Include esclusione oggetti corretta, stato Canvas, dimensioni del live, cursori ventole, lingue e gestione piatti migliorata. Si possono creare profili prima della prima mesh, calibrare da 30 °C e cambiare scheda senza perdere la destinazione. Installazione dal pannello con codice LAN e conferma separata; firmware e callback restano invariati.

## Atualização anterior do aplicativo — CC2 Control 1.2.10

**[Baixar CC2 Control 1.2.10](https://github.com/Neme77/centauri-carbon-2-community/releases/tag/CC2-Control-1.2.10-V4.4)** · [Guia de instalação em inglês](docs/UPDATE_CC2.md) · [Guida italiana](docs/UPDATE_CC2.it.md).

**Somente Community Firmware V4.4. V4.3 e o firmware original da ELEGOO não são compatíveis.** Esta atualização atualiza o CC2 Control e preserva o firmware instalado e o ambiente de execução do callback. O Canvas permanece no MQTT; o Canvas UDS contínuo e PR103/114 continuam excluídos.

| Novidade na atualização do aplicativo | O que você recebe |
| --- | --- |
| Oito idiomas | Húngaro (Magyar) se junta a inglês, italiano, francês, chinês, russo, polonês e tcheco. |
| Malha avançada da mesa | Medições por temperatura da mesa e bico, correções Z do bico, estabilização térmica configurável e calibração protegida. |
| Arquivos e histórico | Espaço disponível no armazenamento interno/USB montado; 15 itens por página com filtros e ordenação. |
| Câmera ao vivo persistente | Ative em Configurações → Aparência: depois de iniciar, o mesmo fluxo continua durante a navegação e em páginas ocultas/minimizadas. Pausar, desativar, fechar a página e transferir o controle do visualizador ainda interrompem o fluxo. Recarregar a página não inicia o vídeo automaticamente. |
| Correções de metadados do Canvas e dos arquivos | Inícios com alimentação externa limpam mapeamentos antigos; inícios multicoloridos calibrados enviam o mapa completo. As estimativas do Orca leem as temperaturas reais da mesa e o total de filamento entre ferramentas. |
| Atualizações em Configurações | Consulte o índice assinado do GitHub, baixe e verifique atualizações compatíveis e confirme a instalação separadamente. Também é possível enviar um pacote local assinado. |
| Configuração da impressão | Limpar a notificação de análise de arquivo remove seu ícone de fechar, para que uma caixa vazia não sobreponha a janela do Canvas. |

**Primeira atualização a partir do CC2 Control incluído na V4.4:** extraia `CC2-Control-1.2.10-Multiplatform-Update.zip` no computador e execute `Install-Windows.cmd` ou o instalador para Linux/macOS. Isso ativa Configurações → Atualizações. **Já tem o painel atualizador?** Verifique o canal Estável pelo painel ou envie o arquivo `.cc2update` da versão. Use uma impressora conectada, ociosa e fria, com os alvos dos aquecedores em zero. Não é necessário restaurar as configurações de fábrica; configurações de LAN, materiais, preferências, placas/bicos e estoque de carretéis são mantidos.

**Confirmado na impressora V4.4 do mantenedor:** instalação pelo computador, atualização local assinada, download do GitHub com certificado verificado, atualização online completa pelo painel, reinicialização, preservação do Canvas/configurações e correção da janela de impressão. Os testes automáticos de host/ARM, sanitizadores, navegador e compilador passaram. Os relatos de impressão longa da campanha beta mais ampla estão descritos abaixo; eles não representam um novo teste prolongado desta atualização exata. A reversão após falha forçada tem cobertura no host, mas não foi provocada deliberadamente na impressora.

### PRs incluídos e agradecimentos

| PR mesclado | Melhoria incluída | Contribuição original / integração |
| --- | --- | --- |
| [#104](https://github.com/Neme77/centauri-carbon-2-community/pull/104) | Medições de malha por temperatura/bico e calibração com estabilização térmica | beanbo |
| [#115](https://github.com/Neme77/centauri-carbon-2-community/pull/115), [#116](https://github.com/Neme77/centauri-carbon-2-community/pull/116) | Tradução húngara e integração no pacote/navegador | pezso92; integração de Neme77 |
| [#117](https://github.com/Neme77/centauri-carbon-2-community/pull/117) | Instalador do aplicativo exclusivo para V4.4, verificações de compatibilidade, backup e restauração | Neme77 |
| [#118](https://github.com/Neme77/centauri-carbon-2-community/pull/118) | Espaço de armazenamento disponível e páginas de 15 itens no Gerenciador de arquivos/Histórico | Neme77 |
| [#119](https://github.com/Neme77/centauri-carbon-2-community/pull/119) | Limpeza da tabela do Canvas na alimentação externa e mapeamento multicolorido calibrado completo | beanbo |
| [#120](https://github.com/Neme77/centauri-carbon-2-community/pull/120) | Temperaturas corretas da mesa no G-code do Orca e estimativas de filamento para várias ferramentas | Neme77, com relatos dos testadores beta |
| [#121](https://github.com/Neme77/centauri-carbon-2-community/pull/121) | Opção para manter a câmera entre páginas e em páginas ocultas/minimizadas | Neme77, preservando a coordenação do visualizador de beanbo |
| [#124](https://github.com/Neme77/centauri-carbon-2-community/pull/124) | Atualizações do GitHub assinadas em Configurações e notificação de análise do Canvas limpa | Neme77 |

Agradecimentos especiais a **[pezso92](https://github.com/pezso92)** pelo húngaro e a **[beanbo](https://github.com/beanbo)** pela malha avançada e pelas correções do Canvas. Também agradecemos a **[Surfoo](https://github.com/Surfoo)** pela base da interface/localização/testes, a **[efiten](https://github.com/efiten)** pela sincronização do Canvas com o Orca e a **[Skcycos](https://github.com/Skcycos)** pelo chinês. A autoria original é mantida por meio dos PRs de integração. Obrigado a **DamiBFryta**, nosso primeiro testador beta, e a Barry Green, Michael Husbyn, Jiří Heider, James Morriss Hill, Brian Mcmillion e a todos que ofereceram tempo, impressoras e comentários detalhados. [Créditos completos da comunidade](docs/CONTRIBUTORS.md).

## Firmware completo anterior — V4.4

**[O Community Firmware V4.4](https://github.com/Neme77/centauri-carbon-2-community/releases/tag/V4.4) está oficialmente disponível**, com CC2 Control 1.2.3 e a base oficial CC2 02.01.01.07. Lançado em **13 de outubro de 2026** com firmware completo testado, compilador público do código-fonte e somas de verificação.

| Destaque da V4.4 | O que muda para o usuário |
| --- | --- |
| Nova base oficial e correções de conexão | Patches de firmware portados, reconexão LAN/WAN e comandos nativos de luz com confirmação do estado no visor. |
| Painel de controle | Cartões alinhados, campos de porcentagem dos ventiladores aplicados com Enter, ferramentas PID/Input Shaper protegidas e ações rápidas de calibração. |
| Perfis de material | Nomes como **PLA MATTE** são aceitos; um menu temático exibe predefinições de pré-aquecimento sem comprimir os nomes em uma fileira de botões. Selecionar uma predefinição preenche os campos; **Aplicar temperaturas** inicia o aquecimento. |
| Canvas | Redefinição confirmada dos quatro registros de filamento; slots vazios ficam esmaecidos sem cor. A telemetria do Canvas via MQTT e a sincronização de filamentos do Orca continuam compatíveis. |
| Câmera | A visualização ao vivo continua durante a rolagem; controles de aba oculta, navegação e propriedade do visualizador continuam ativos. |
| Idiomas | Inglês, italiano, francês, chinês simplificado, russo, **polonês e tcheco**. |

O ambiente de execução de callback O0, o deslocamento Z protegido em tempo real, o estoque de carretéis, a biblioteca de placas, as ferramentas de malha, o histórico/timelapse, o envio/download de arquivos e a compatibilidade com Panda Breath são mantidos. PR103/104 e a variante experimental com Canvas UDS completo não estão incluídos no firmware V4.4 publicado.

## Resultados de impressões longas e patch de callback

A campanha beta comunitária trouxe resultados promissores: **sessões de impressão de 40 horas sem travamentos relatados** e **mais de 20 testes longos confirmados**. Os comentários dos testadores também ajudaram a resolver problemas menores na interface e na integração com a impressora.

| Evidência | Resultado |
| --- | --- |
| Sessões longas na impressora | Impressões de 40 horas e mais de 20 testes longos relatados pelo mantenedor e por testadores beta, sem travamentos relatados nessas sessões. |
| Validação automática | Testes no host, verificações de compilação/teste ARM, sanitizadores de endereço/comportamento indefinido e de threads, verificações da interface web, testes do compilador e fixtures do reator passaram no PR de preparação da versão. |
| Ambiente de execução do callback | Limpeza O0 qualificada de referências de callback concluídas, temporizadores e tarefas que aguardam conclusão, portada para o novo executável da impressora com impressão digital verificada. |

O **patch de callback é uma parte central deste trabalho**: ele trata referências retidas no reator para que solicitações concluídas não mantenham vivos os objetos correspondentes nessas estruturas. Os caminhos de limpeza e exceção foram qualificados, e a adaptação para 4.4 preserva o mesmo princípio nos novos endereços do executável. Durante o ciclo beta, a impressora recuperou memória disponível após atividade e concluiu impressões prolongadas sem os travamentos relatados que estávamos investigando.

Esses são resultados positivos de integração, e não uma medição controlada que atribui cada mudança de memória ao patch de callback. O ambiente de execução trata da retenção no reator; os buffers da câmera, caches e outras alocações do fornecedor têm ciclos de vida próprios. [Leia sobre o mecanismo de callback e as evidências de validação](docs/CALLBACK_RUNTIME.md).

**Pacotes da versão:** a versão V4.4 fornece firmware completo e seu compilador. O novo aplicativo CC2 Control está incluído nesse firmware compatível; **não há suporte para instalá-lo separadamente na V4.3**. O atualizador do aplicativo exclusivo para V4.4, lançado separadamente, já está disponível. As futuras atualizações do aplicativo estão planejadas em duas variantes identificadas claramente: o caminho atual do Canvas via MQTT e um caminho experimental do Canvas via UDS, cada um com compatibilidade de firmware explícita e resultados de validação separados.

## Downloads anteriores — V4.4

<p align="center">
  <a href="https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4/CC2_V4_4_STOCK_20261013_001035_414d6629.zip.sig"><img alt="Baixar firmware completo V4.4" src="https://img.shields.io/badge/Download-Firmware%20V4.4-00b8d9?style=for-the-badge"></a>
  <a href="https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4/CC2-Builder-V4.4-Source.zip"><img alt="Baixar compilador do código-fonte V4.4" src="https://img.shields.io/badge/Builder-V4.4%20Source-f59e0b?style=for-the-badge"></a>
  <a href="https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4/SHA256SUMS.txt"><img alt="Baixar somas de verificação SHA-256" src="https://img.shields.io/badge/Verify-SHA--256-22c55e?style=for-the-badge"></a>
</p>

| Download | Finalidade |
| --- | --- |
| [Firmware V4.4 completo e assinado](https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4/CC2_V4_4_STOCK_20261013_001035_414d6629.zip.sig) | Instale ou atualize o Community Firmware completo, incluindo a base compatível e o CC2 Control 1.2.3. |
| [Compilador público do código-fonte V4.4](https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4/CC2-Builder-V4.4-Source.zip) | Compile localmente; o firmware oficial qualificado, a biblioteca do fornecedor, as ferramentas locais e o material privado de assinatura/AES permanecem externos. Leia PUBLIC-BUILDER.txt e o [guia de compilação](docs/BUILD.md). |
| [SHA256SUMS.txt](https://github.com/Neme77/centauri-carbon-2-community/releases/download/V4.4/SHA256SUMS.txt) | Verifique os dois downloads da versão. |
| [Notas da versão e todos os arquivos](https://github.com/Neme77/centauri-carbon-2-community/releases/tag/V4.4) | Recursos, evidências do callback, validação, instalação e agradecimentos. |

Os arquivos de firmware completo acima mantêm o CC2 Control 1.2.3 e suas somas de verificação originais. Depois de instalar/configurar a V4.4, use a atualização separada do **aplicativo 1.2.11** acima para obter os recursos mais recentes. A V4.3 não é compatível. Não é necessário restaurar as configurações de fábrica.

## Firmware original da ELEGOO

[Baixar CC2 02.01.01.07 original](https://public.suchmeme.nl/cc2-02.01.01.07-1cbee81a985601d1944cea50773793ba-release-abroad.zip.sig) · [Notas para voltar ao firmware original](docs/FIRST_RUN.md#return-to-original-elegoo-firmware) · [Istruzioni in italiano](docs/FIRST_RUN.it.md#tornare-al-firmware-originale-elegoo).

O pacote hospedado externamente corresponde exatamente à base oficial V4.4: SHA-256 `278a0606a072ae432e9bf2d4f0157acba4570d1c85dbc768c359fef53ac5f406`. **A ELEGOO bloqueia a instalação de versões antigas do firmware.** Este é o pacote original da mesma versão 02.01.01.07, não uma ferramenta de downgrade. O mantenedor confirmou que conseguiu voltar da V4.4 para este firmware original da mesma versão na impressora. Restaurar as configurações de fábrica não substitui o firmware.

<details>
<summary>Versões anteriores e downloads históricos</summary>

- [Pré-lançamento experimental V4.3](https://github.com/Neme77/centauri-carbon-2-community/releases/tag/V4.3), com CC2 Control 1.2.0 e a primeira integração do callback.
- [Community Firmware V4.2-R5](https://github.com/Neme77/centauri-carbon-2-community/releases/tag/V4.2-R5).
- [CC2 Control 1.1.31fix](https://github.com/Neme77/centauri-carbon-2-community/releases/tag/CC2-Control-1.1.31fix), um atualizador independente histórico para a compatibilidade de firmware documentada.

Essas versões mantêm seus arquivos, somas de verificação e registros de validação originais. Elas não são os downloads atuais da V4.4.

</details>

## Acesso SSH

Usuário SSH: **`root`**. Use sua senha SSH; a referência de acesso padrão está documentada nos guias de instalação abaixo. Essa senha é diferente do código de acesso LAN. [Referência SSH em inglês](docs/FIRST_RUN.md#ssh-access-reference) · [Riferimento SSH in italiano](docs/FIRST_RUN.it.md#riferimento-per-laccesso-ssh).

## Alterou o código de acesso LAN da impressora?

**Por que as atualizações pedem o código LAN:** consultar a lista de atualizações não exige o código. Baixar/enviar um pacote e instalá-lo exige confirmação separada com o código configurado nesta impressora, mesmo quando o CC2 Control já está conectado. Consulte-o no visor em **Configurações → Somente LAN**; ele é diferente da senha SSH. [Explicação em inglês](docs/UPDATE_CC2.md#why-the-lan-code-is-required) · [Spiegazione italiana](docs/UPDATE_CC2.it.md#perché-viene-richiesto-il-codice-lan).

Abra `http://PRINTER-IP:8081`, acesse **Configurações → Conexão**, informe o novo código e escolha **Alterar / Revalidar**; depois confirme. Isso salva o código e reinicia o serviço CC2 Control; não é necessário usar uma etapa separada de “Salvar alterações” para o código LAN.

Leia sobre a [configuração inicial e recuperação do código LAN](docs/FIRST_RUN.md#if-the-lan-code-changes) ou [prima configurazione e codice LAN](docs/FIRST_RUN.it.md#se-cambia-il-codice-lan). A recuperação avançada por SSH continua documentada em [Instalação](docs/INSTALL.md#recovery-if-the-old-code-blocks-configuration-access).

## Recursos

| Área | O que você pode fazer |
| --- | --- |
| Painel e ajuste da impressão | Acompanhe temperaturas, ventiladores, progresso da impressão e movimento ao vivo; ajuste a **velocidade de impressão (25–200%)** e o **fluxo de extrusão (50–150%)** durante uma impressão ativa ou pausada, com telemetria recente. |
| Gerenciador de arquivos | Navegue no armazenamento interno e USB, busque e ordene arquivos, confira miniaturas dos modelos e metadados de impressão, envie G-code, **baixe G-code para o computador**, exclua arquivos e inicie uma impressão protegida. |
| Canvas e continuidade da impressão | Veja os quatro slots de material, cores e predefinições; selecione, carregue ou descarregue um carretel; ative o **Reabastecimento automático** para a impressora continuar usando outro slot com o mesmo filamento quando um carretel acabar. |
| Carretéis | Mantenha um estoque de filamentos que registra qual carretel está em cada slot do Canvas ou no suporte externo e contabiliza o que a impressora realmente extruda. Ao inserir filamento em um slot, o sistema pergunta qual carretel é; quando ele acaba, o estoque é zerado; as pesagens corrigem a quantidade, e a janela de impressão avisa quando o carretel tem menos filamento que o necessário para o arquivo. Desativado até ser ligado. |
| Janela de impressão e timelapse | Escolha o mapeamento dos slots de filamento e o lado da mesa antes de imprimir, use uma malha salva ou uma inicialização calibrada e **ative a gravação de timelapse para aquela impressão**. |
| Histórico | Consulte trabalhos registrados pela impressora, incluindo hora de início, duração e resultado; baixe vídeos timelapse prontos e renderize quadros gravados em um vídeo enquanto a impressora estiver ociosa. Exclua registros individuais ou limpe registros carregados de impressões concluídas com confirmação; os arquivos G-code são preservados. |
| Câmera | Inicie a visualização ao vivo quando quiser, tire fotos e abra o visualizador em outra janela. O CC2 coordena o controle da câmera entre páginas e janelas e libera o visualizador quando ele é fechado; o serviço de câmera do fornecedor continua ativo. Na V4.4, rolar a página para longe do cartão da câmera não interrompe o fluxo. |
| Controle da impressora | Faça o referenciamento e mova eixos, defina alvos do bico e da mesa, use predefinições de temperatura de material, controle ventiladores e luzes, extrude filamento e ajuste o deslocamento Z da sessão em tempo real. A V4.4 acrescenta campos numéricos para ventiladores e o seletor temático de pré-aquecimento. |
| Nivelamento da mesa | Veja a malha em 2D ou 3D interativo, inspecione valores e perfis salvos, escolha o lado A/B, use sondagem adaptativa e meça o ajuste dos quatro parafusos com a célula de carga do bico. |
| Ações rápidas e segurança | Configure atalhos no painel com retorno real do estado das luzes; use a exclusão de objetos, um console protegido e a parada de emergência global. Ações de desligamento dos aquecedores exigem telemetria recente indicando estado ocioso. |
| Estado e conexão da impressora | Veja subestados nativos da máquina e mensagens de recusa; obtenha telemetria por sessões UDS persistentes, descubra automaticamente o número de série da impressora usando as credenciais LAN salvas e revalide um código LAN alterado. |
| Fatiador e integrações | O envio pelo OrcaSlicer, a interface Device UI e a sincronização de filamento do Canvas pelo Moonraker-agent usam a porta **8081**. A ponte de compatibilidade separada e somente de leitura do Panda Breath usa a porta **7125**. |
| Interface | Use inglês, italiano, francês, chinês simplificado, russo, polonês ou tcheco; escolha os temas Light, Dark, Dracula, Nord, Monokai ou Solarized Light; salve preferências de aparência e recolha o menu de navegação. |

## Contribuições da comunidade

Agradecemos sinceramente aos colaboradores cujo código, ideias, traduções e validações ajudaram a construir o CC2 Control. **A V4.4 mantém o trabalho realizado ao longo de toda a história do projeto**; os créditos respeitam a autoria original, inclusive nas contribuições integradas por um PR posterior do mantenedor.

| Colaborador | Contribuições incluídas no projeto |
| --- | --- |
| **[@Surfoo](https://github.com/Surfoo)** | Reformulação completa da interface, melhorias na página Control e em celulares/tablets; tradução francesa e localização JSON; CI, sanitizadores e testes rápidos ARM; correções de slots no envio, entradas byte a byte, visibilidade do código LAN e ferramentas de versão/lançamento. PRs selecionados: [#24](https://github.com/Neme77/centauri-carbon-2-community/pull/24), [#15](https://github.com/Neme77/centauri-carbon-2-community/pull/15), [#19](https://github.com/Neme77/centauri-carbon-2-community/pull/19), [#50](https://github.com/Neme77/centauri-carbon-2-community/pull/50). |
| **[@beanbo](https://github.com/beanbo)** | Estoque de carretéis, biblioteca original de placas, inscrições UDS persistentes, estados/recusas da impressora, reabastecimento automático do Canvas, transferência da câmera, histórico, melhorias no envio, liberação dos motores em repouso e tradução russa. PRs selecionados: [#97](https://github.com/Neme77/centauri-carbon-2-community/pull/97), [#83](https://github.com/Neme77/centauri-carbon-2-community/pull/83) → [#89](https://github.com/Neme77/centauri-carbon-2-community/pull/89), [#88](https://github.com/Neme77/centauri-carbon-2-community/pull/88), [#67](https://github.com/Neme77/centauri-carbon-2-community/pull/67). |
| **[@efiten](https://github.com/efiten)** | Proposta original para sincronização de filamento OrcaSlicer/Canvas, análise e validação na impressora: [#8](https://github.com/Neme77/centauri-carbon-2-community/pull/8), integrada por meio do [#12](https://github.com/Neme77/centauri-carbon-2-community/pull/12). |
| **[@Skcycos](https://github.com/Skcycos)** | Tradução da interface para chinês simplificado: [#26](https://github.com/Neme77/centauri-carbon-2-community/pull/26). |

**Tradução húngara:** agradecemos a **[@pezso92](https://github.com/pezso92)** pela interface completa em húngaro (**Magyar**), todas as 879 entradas de origem e os placeholders preservados no [#115](https://github.com/Neme77/centauri-carbon-2-community/pull/115). A integração do mantenedor mantém os commits originais e adiciona a inclusão no compilador e testes de idioma. O húngaro está incluído no CC2 Control 1.2.10; o firmware completo V4.4 original ainda inclui sete idiomas.

Nosso reconhecimento especial a **Surfoo** por reformular a interface e suas bases de desenvolvimento, e a **beanbo** pelas amplas melhorias na impressão diária e na integração com a impressora. Agradecemos a todos os colaboradores pelo cuidado, tempo e dedicação por trás desses avanços.

Também agradecemos a **[@sauadhi](https://github.com/sauadhi)** pelo trabalho completo de ejeção de filamento do Canvas no [#103](https://github.com/Neme77/centauri-carbon-2-community/pull/103), que continua excluído junto com o PR114. O trabalho avançado de malha/calibração de **beanbo**, no [#104](https://github.com/Neme77/centauri-carbon-2-community/pull/104), foi integrado e está incluído no CC2 Control 1.2.10. Os arquivos originais do firmware completo V4.4 permanecem inalterados e não contêm essa extensão.

**[@Neme77](https://github.com/Neme77)** mantém o projeto, desenvolve e integra correções do firmware/controle, coordena a validação de hardware e prepara os arquivos de lançamento. A integração recente inclui alterações de Control/Canvas, traduções para polonês/tcheco e a adaptação para a nova base de firmware ([#107](https://github.com/Neme77/centauri-carbon-2-community/pull/107), [#108](https://github.com/Neme77/centauri-carbon-2-community/pull/108), [#109](https://github.com/Neme77/centauri-carbon-2-community/pull/109), [#110](https://github.com/Neme77/centauri-carbon-2-community/pull/110)).

Consulte [os créditos detalhados dos colaboradores e os PRs originais](docs/CONTRIBUTORS.md).

### Testadores beta

Agradecimentos especiais a **DamiBFryta**, nosso primeiro testador beta, por sua confiabilidade, imparcialidade e disponibilidade durante todo o desenvolvimento.

Também agradecemos sinceramente a **Barry Green**, **Michael Husbyn**, **[Jiří Heider](https://www.facebook.com/heiderakcze)**, **James Morriss Hill** e **Brian Mcmillion**, além de **todos os demais testadores beta que não foram citados aqui**. Ao oferecerem seu tempo e suas impressoras, realizarem sessões de impressão longas e fornecerem comentários pacientes e precisos, ajudaram a identificar problemas e melhorar a estabilidade desta versão.

## Organização do código-fonte

| Caminho | Conteúdo |
| --- | --- |
| [`cc2-control/`](cc2-control/) | Backend C, interface web, scripts, testes e notas de protocolo |
| [`builder/current/`](builder/current/) | Lógica atual de compilação do firmware e testes no host |
| [`docs/`](docs/) | Documentação de instalação, arquitetura, compilação e testes |
| [`CHANGELOG.md`](CHANGELOG.md) | Histórico de alterações visíveis ao usuário |
| [`AGENTS.md`](AGENTS.md) | Regras do repositório para colaboradores e agentes de programação |

As versões históricas são preservadas por meio de tags Git, lançamentos do GitHub e histórico do Git, em vez de documentos paralelos específicos por versão na branch `main`.

## Documentação

- [Primeira instalação e código de acesso LAN](docs/FIRST_RUN.md) / [Italiano](docs/FIRST_RUN.it.md)
- [OrcaSlicer e sincronização do Canvas](docs/ORCASLICER.md) / [Italiano](docs/ORCASLICER.it.md)
- [Instalação e recuperação avançada](docs/INSTALL.md)
- [Compilação e reprodução](docs/BUILD.md)
- [Arquitetura](docs/ARCHITECTURE.md)
- [CC2 Control](docs/CC2_CONTROL.md)
- [Código-fonte e componentes de terceiros](docs/SOURCE.md)
- [Testes](docs/TESTING.md)
- [Créditos dos colaboradores](docs/CONTRIBUTORS.md)
- [Como contribuir](CONTRIBUTING.md)

## Prévia da interface

Capturas da impressora real do **CC2 Control 1.2.3**, fornecidas em 13 de outubro de 2026 para o candidato à versão V4.4. Abra a [galeria completa de capturas](docs/SCREENSHOTS.md) para ver as onze telas em tamanho real.

### Painel

A imagem inicial mostra o painel no tema Light, com câmera ao vivo, ações rápidas, estado da impressão e histórico de temperaturas. [Veja em tamanho real](docs/images/cc2-control/dashboard-light.png).

### Painel de controle e Canvas

O painel Control inclui campos numéricos para ventiladores, aplicados com Enter, e um menu de pré-aquecimento que aceita nomes como PLA MATTE. O Canvas mostra os slots vazios sem cor de filamento e oferece Redefinir filamentos.

<table>
  <tr><td align="center"><strong>Control e predefinições de pré-aquecimento</strong></td><td align="center"><strong>Canvas e redefinição de filamentos</strong></td></tr>
  <tr><td><a href="docs/images/cc2-control/control-presets.png"><img src="docs/images/cc2-control/control-presets.png" alt="Painel Control com predefinição PLA MATTE, campos de ventilador e deslocamento Z ao vivo"></a></td><td><a href="docs/images/cc2-control/canvas.png"><img src="docs/images/cc2-control/canvas.png" alt="Quatro slots do Canvas, slots vazios esmaecidos e redefinição de filamentos"></a></td></tr>
</table>

### Malha da mesa e estoque de carretéis

Inspeção interativa da malha e acompanhamento opcional do estoque de filamentos.

<table>
  <tr><td align="center"><strong>Malha 3D da mesa</strong></td><td align="center"><strong>Estoque de carretéis</strong></td></tr>
  <tr><td><a href="docs/images/cc2-control/bed-mesh.png"><img src="docs/images/cc2-control/bed-mesh.png" alt="Malha 3D interativa da mesa, perfis salvos e estatísticas de altura"></a></td><td><a href="docs/images/cc2-control/spools.png"><img src="docs/images/cc2-control/spools.png" alt="Estoque de carretéis e controles opcionais de rastreamento"></a></td></tr>
</table>

A [galeria completa](docs/SCREENSHOTS.md) também mostra PID/Input Shaper e perfis de material, a página Job, arquivos G-code e prévias de modelos, o console protegido, verificações de integração e os seis temas.

## Desenvolvimento com assistência de IA

Este projeto usa ferramentas de desenvolvimento com assistência de IA no fluxo de trabalho, inclusive para revisão de código, refatoração, depuração, documentação e algumas tarefas de geração de código.

Uma parte substancial do código é escrita e mantida diretamente pelo mantenedor do projeto. As decisões de arquitetura, a engenharia reversa, os testes de hardware, a validação na impressora e a aprovação das versões são feitos pelo mantenedor e pelos testadores da comunidade.

As alterações assistidas por IA são revisadas e validadas antes de serem incluídas em uma versão.

## Licença e avisos

O código do projeto é disponibilizado sob GPL-3.0-only quando os colaboradores têm direito de licenciá-lo. O firmware do fornecedor e os componentes de terceiros mantêm seus próprios termos. Consulte [`LICENSE`](LICENSE) e [`NOTICE.md`](NOTICE.md).
