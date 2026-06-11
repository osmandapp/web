---
source-hash: 99f4f132ee5c0b6fd48949f2e16d91c53267fa3ebef0498549f074e425034b5d
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';  


# Android 5.4 {#android-54}



## Participar do Beta {#join-beta}

O OsmAnd lança várias compilações Prontas para Uso diariamente, permitindo que você acompanhe novos recursos e participe do processo de tradução do OsmAnd. Você pode participar dos testes da versão beta do OsmAnd usando o Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## O que há de novo {#whats-new}

- **[Favoritos](https://osmand.net/docs/user/personal/favorites)** aprimorados com suporte a anexos de mídia (fotos, áudio e vídeo) e integração melhorada de notas de áudio/vídeo.
- **[Widgets de navegação](https://osmand.net/docs/user/widgets/nav-widgets)** aprimorados com tamanho mais flexível e adaptação de layout em diferentes densidades e orientações de tela.
- Legenda do mapa adicionada em **[Configurar mapa](https://osmand.net/docs/user/map/configure-map-menu)** para melhor compreensão dos tipos de rotas e elementos do mapa.
- Filtragem de rotas e controle visual aprimorados em **[Configurar mapa](https://osmand.net/docs/user/map/configure-map-menu)**, incluindo classificações e prioridades de rotas.
- Análise de trilhas aprimorada com novos tipos de gráficos e dados mais detalhados, como superfície, tipo de estrada e inclinação.
- Gerenciamento de trilhas aprimorado com visualizações e organização melhorada em **[Meus Lugares](https://osmand.net/docs/user/personal/myplaces)**.
- Backup automático e sincronização mais confiável de dados do usuário no **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)**, incluindo **[Pastas Inteligentes](https://osmand.net/docs/user/personal/tracks/smart-folder)**.
- Melhorias iniciais na navegação náutica com aprimoramentos no AIS e parâmetros e widgets de navegação adicionais.
- Experiência aprimorada no **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** com busca e controles de navegação melhorados.
- Adicionada a capacidade de interagir com o mapa no **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)**, incluindo a seleção direta de pontos.
- **[Widget de elevação](https://osmand.net/docs/user/widgets/nav-widgets#elevation-widget)** redesenhado com informações mais detalhadas sobre a elevação da rota.

<!--
- New experimental **[Astronomy plugin](https://osmand.net/docs/user/plugins/astronomy)** with an astronomical overlay showing the paths of the Sun, planets and stars.
- Improved **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** section with clearer backup, version history and automatic backup settings.
- Updated **[Configure map](https://osmand.net/docs/user/map/configure-map-menu)** options with a clearer legend and improved filters for hiking, cycling and MTB routes.
- New and redesigned elevation and navigation widgets with elevation profiles, uphill/downhill metrics and average grade.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** improvements with extended widget support and better OBD II integration.
- More flexible **[widget and map button layout](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, especially in landscape mode.
- Enhanced Favorites management in **[My Places](https://osmand.net/docs/user/personal/myplaces)**.
- Smarter track organization with Smart Folders and clearer summary statistics.
- Advanced route and track analysis.
- Improved accessibility features, including more flexible audio and haptic navigation feedback.
- Initial groundwork for smartwatch integration for navigation and trip recording data.
-->


## Correções de bugs {#bug-fixes}

- Corrigido um [problema](https://github.com/osmandapp/OsmAnd/issues/16507) em que as propriedades dos favoritos (cor, ícone, forma) não eram atualizadas ao alterar seu grupo.
- Corrigidas [direções de saída incorretas](https://github.com/osmandapp/OsmAnd/issues/23104) mostradas em rotatórias no Android Auto.
- Corrigidos valores imprecisos de [subida e descida](https://github.com/osmandapp/OsmAnd/issues/20624) nos widgets de elevação.
- Evitado que [favoritos ocultos](https://github.com/osmandapp/OsmAnd/issues/24689) reaparecessem no mapa ao adicionar waypoints de trilha a uma pasta.
- Resolvidas [inconsistências entre gráficos](https://github.com/osmandapp/OsmAnd/issues/24712) na tela Detalhes.
- Resolvido um [problema](https://github.com/osmandapp/OsmAnd/issues/24791) em que pastas de Favoritos desafixadas apareciam fixadas novamente após reiniciar o aplicativo.

<!--
- Improved stability of **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** sync and backup, reducing conflicts and ensuring widgets and settings restore correctly across devices.
- Fixed incorrect uphill/downhill values in elevation widgets and improved accuracy of ascent/descent calculations in route analysis.
- Improved **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** navigation behaviour, including correct exit directions at roundabouts and proper placement of on-screen tools such as the radius ruler.
- Fixed several issues related to **[Accessibility](https://osmand.net/docs/user/plugins/accessibility)** mode, including navigation announcements and interaction with certain map tools.
- General interface and performance fixes across map rendering, widget display and configuration screens.
-->