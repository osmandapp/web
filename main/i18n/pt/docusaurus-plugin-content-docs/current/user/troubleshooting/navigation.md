---
source-hash: 4279e8b0f36e69d2e860ec2e48cb3a48d0b171f309dc5569b62b8e5d94ae87fa
sidebar_position: 3
title: Navegação
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Cálculo de Rotas {#route-calculation}

### O cálculo da rota é lento {#route-calculation-is-slow}

*Android*. O OsmAnd usa dois **mecanismos de roteamento offline** diferentes: um *mecanismo baseado em Java* e um *mecanismo Nativo (C++)*.

- O *mecanismo baseado em Java* é usado no [Modo de Segurança](../plugins/development.md#safe), mas é aproximadamente 10 vezes mais lento que o mecanismo nativo. Ele também possui limitações de memória rigorosas, o que pode levar a erros como *Memória insuficiente para calcular*. Se você encontrar esse problema, navegue até *Plugins → Desenvolvimento do OsmAnd → Configurações →* [*Modo de Segurança*](../plugins/development.md#safe) e certifique-se de que esta opção esteja desativada.
- O *mecanismo Nativo (C++)* oferece melhor desempenho, mas sua eficiência depende da memória e da capacidade do processador do seu dispositivo. Geralmente, o roteamento nativo funciona bem para rotas com menos de 300 km, com tempos de cálculo de rota variando de 15 segundos a 4 minutos. Se o processo demorar mais de 4 minutos, é aconselhável parar, pois o aplicativo pode travar.


### Como calcular rotas com mais de 250 km? {#how-to-calculate-routes-longer-than-250km}

1. Se o aplicativo não mostrar uma rota após 7-8 minutos de tempo de cálculo, considere [colocar pontos de passagem](../navigation/setup/route-navigation.md#route-recalculation) (escolha, por exemplo, locais em autoestradas). 3-4 pontos de passagem serão suficientes para calcular rotas de até 1000 km.

2. Para dispositivos de ponta, você pode aumentar a memória para até 512 MB ou 1024 MB - [Dispositivos com memória alocada](../plugins/development.md#memory-allocated-for-routing).

3. Para a versão Android, você pode criar um Perfil de Navegação com roteamento Online ou de Terceiros (BRouter). Leia mais sobre isso [aqui](../navigation/routing/brouter.md).

### Cálculo de rotas de 50 km para pedestres {#calculation-of-50-km-routes-for-pedestrians}

Se você estiver usando o perfil **Caminhada** no OsmAnd, o aplicativo pode travar ao calcular rotas com mais de 50 km. Esse problema ocorre especificamente quando o [**Roteamento Padrão A***](../navigation/guidance/navigation-settings.md#development-settings) está selecionado nas configurações de navegação. Vários fatores podem contribuir para esse problema:

- O comprimento da rota excede 50 km.
- O número de pontos diretos na rota é maior que 1 milhão.
- Você está usando um dispositivo móvel para calcular a rota, o que não é recomendado para rotas desse comprimento. Considere usar a versão web para melhor desempenho.

Para evitar travamentos com rotas de distâncias semelhantes, você pode querer mudar para outros tipos de perfil, como **Bicicleta**.


## A Rota Calculada Não Parece Correta {#the-calculated-route-does-not-seem-correct}

Para rastrear problemas com rotas erradas ou subótimas, abra uma nova postagem em [Github discussions](https://github.com/osmandapp/OsmAnd/discussions) ou [Github issue](https://github.com/osmandapp/Osmand/issues) e especifique o mais detalhadamente possível as seguintes informações:

- Qual versão do OsmAnd você está usando, em qual dispositivo?
- Você usa os mapas offline oferecidos no aplicativo OsmAnd para download, ou mapas online (tile / raster)?
- Se você usa mapas offline, diga-nos o nome exato do arquivo de mapa onde ocorre o problema de roteamento e sua data de edição.
- Diga-nos se você usou o roteamento offline integrado do OsmAnd ou qualquer provedor de roteamento online como YOURS, OpenRouteService ou OSRM.
- Qual perfil de roteamento está escolhido no aplicativo OsmAnd (carro, bicicleta ou pedestre)?
- Por favor, especifique o mais exatamente possível o ponto de partida e o ponto final da sua rota. Se possível, diga-nos o nome da cidade e o nome da rua para cada um. Um [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) de openstreetmap.org também pode ser útil.
- Diga-nos o seu roteamento esperado e como o OsmAnd roteia.

## Informações da Estrada {#road-information}

### OsmAnd mostra apenas alguns radares de velocidade {#osmand-only-shows-some-speed-cams}

Devido aos dados geográficos retirados do projeto OpenStreetMap, existem atualmente dois métodos de integração de radares de velocidade nos dados brutos do OSM:

- Um ponto (chamado "nó" na terminologia OSM) de um caminho é marcado com "highway=speed_camera", veja a wiki OSM em [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Um grupo de elementos de dados OSM são unidos em uma chamada "relação" que contém mais elementos do que um único nó para descrever a direção coberta pelo radar de velocidade. Veja [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Atualmente, o OsmAnd só pode usar os elementos que consistem em um único nó. A análise de relações virá em uma versão futura.


## Navegação por Voz {#voice-navigation}

### Por que devo usar uma voz TTS em vez de uma voz gravada? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

As vozes de **Text-to-Speech (TTS)** geram avisos falados dinamicamente, permitindo que pronunciem nomes de ruas, nomes de lugares e números de rodovias. Em contraste, as **vozes gravadas** são limitadas a frases pré-gravadas e não podem pronunciar nomes ou números específicos.

*Vantagens do TTS sobre vozes gravadas:*

- Pronuncia nomes de ruas e informações dinâmicas.
- Regularmente atualizado com novos recursos.
- Oferece maior flexibilidade para navegação.

Para usar o TTS no OsmAnd, seu dispositivo deve ter um **mecanismo TTS** instalado. Muitos dispositivos vêm com um mecanismo TTS pré-instalado, mas outros podem ser instalados manualmente, se necessário. [Lista de mecanismos e idiomas TTS suportados para Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Para instruções detalhadas sobre como configurar e ajustar os avisos de voz, consulte: [Guia de Configuração de Navegação por Voz](../navigation/guidance/voice-navigation.md).

### O TTS não funciona corretamente? Siga estas etapas para corrigi-lo {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

Problemas com **Text-to-Speech (TTS)** geralmente estão relacionados às **configurações do sistema Android**, e não ao próprio aplicativo OsmAnd.

1. Certifique-se de que um mecanismo TTS esteja instalado.

    - Abra *Configurações do Dispositivo → Idioma e Entrada → Opções de Texto para Fala*.
    - Verifique se um **mecanismo TTS** está instalado (por exemplo, Google TTS, Samsung TTS, Pico).
    - Se nenhum mecanismo estiver instalado, selecione *"Instalar mais..."* e baixe um compatível.
    - [Lista de mecanismos e idiomas TTS suportados.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Verifique as configurações de idioma do TTS.

    - Selecione o idioma que deseja usar em *Configurações do Android → Opções de Texto para Fala*.
    - Toque em *"Ouvir um exemplo"* para testar se o mecanismo TTS está funcionando.
    - Se você não ouvir nada, atualize ou reinstale o mecanismo TTS.

3. Ajuste as configurações de navegação por voz do OsmAnd.

    - Abra *OsmAnd → Menu → Configurar Perfil → Configurações de Navegação → Avisos de Voz*.
    - Selecione um *Idioma → TTS* compatível.
    - Teste os avisos de voz navegando para *Menu → Plugins → Ativar Desenvolvimento do OsmAnd → Configurações → Testar Avisos de Voz*.

#### Etapas Adicionais {#additional-steps}

- *Atualizar Google TTS*. Abra a Google Play Store, procure por **Google Text-to-Speech** e atualize-o.
- *Simular Navegação*. Toque em *Botão de Navegação → Configurações → Simular Navegação* para verificar se a orientação por voz é reproduzida.
- *Reinstalar OsmAnd*:
   - **Fazer backup das configurações:** *Menu → Configurações → Exportar para Arquivo*.
   - Desinstale o OsmAnd e, em seguida, reinstale-o da loja de aplicativos.
   - Restaurar configurações: *Menu → Configurações → Importar Arquivo*.

Para solução de problemas adicionais, visite:

- [Guia de Navegação por Voz](../navigation/guidance/voice-navigation.md)
- [Importar/Exportar Configurações](../personal/import-export.md)


## Outros {#other}

### A navegação para quando a tela está desligada {#navigation-stops-while-screen-is-off}

- [O mesmo problema](../troubleshooting/track-recording-issues.md#the-system-may-kill-background-apps-to-save-power) com gravação de trilhas em segundo plano.