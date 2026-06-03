---
source-hash: 229c58068a74b06d3fc63b8f92df8a4ca008fa25b9819b9b8d8243b8790942ed
sidebar_position: 5
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

# iOS 5.4 {#ios-54}

## Participar do Beta {#join-beta}

As compilações beta do iOS (TestFlight) geralmente são fornecidas semanalmente (após uma demonstração do Team Sprint). Elas não contêm descrições e podem ter controle de versão contínuo. Presume-se que sejam estáveis e prontas para uso.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Participar do TestFlight</a>
</div>

<br/>


## Novidades {#whats-new}

- Pesquisa atualizada com uma nova aba **[Explorar](https://osmand.net/docs/user/map/popular_places#explore-in-search)** com locais populares próximos.
- Novo **[plug-in de Astronomia](https://osmand.net/docs/user/plugins/astronomy)** experimental com uma sobreposição astronômica mostrando os caminhos do Sol, planetas e estrelas.
- Adicionado um **[editor de paleta](https://osmand.net/docs/user/map/tracks/appearance#color-palette-editor)** para criar e personalizar esquemas de cores para rotas e terreno.
- Organização mais inteligente de trilhas com **[Pastas inteligentes](https://osmand.net/docs/user/personal/tracks/smart-folder)** e estatísticas de resumo mais claras.
- Layout mais flexível de **[widgets e botões do mapa](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, especialmente no modo paisagem.
- **[Planejar uma rota](https://osmand.net/docs/user/plan-route/create-route)** aprimorado com gráfico de elevação, cálculo de elevação offline e parâmetros de rota.
- Adicionados segmentos de subida, descida e plano à **[análise de trilha](https://osmand.net/docs/user/map/tracks/track-context-menu#analyze-by-intervals)**.

<!--
- Last Uphill / Last Downhill mode for **[Trip recording widgets](https://osmand.net/docs/user/plugins/trip-recording#widgets)**, with switching between total and last ascent/descent.
- Updated **[Distance widget](https://osmand.net/docs/user/plugins/trip-recording#distance-start-stop)** with modes for total distance, last uphill/downhill distance.
- **[Max Speed widget](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** showing maximum speed for the whole trip or for the most recent uphill/downhill section.
- **[Average Slope widget](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** showing the average slope of the latest ascent or descent.
- *Show track on map* quick action added to the Trip recording widget group.
- Improvements in route selection and altitude graph integration under the updated rendering scheme.
- Elevation graph widget for navigation, displaying a compact profile along routes or GPX tracks.
- **[Popular places](https://osmand.net/docs/user/map/popular_places/)** layer updated with POI source selection and optional image previews on the map.
- New Explore section in Search with “Popular places nearby” and improved offline/no-data states.
- Enhanced POI search results with consistent city display, refined layout, and optional thumbnails.
- Default appearance settings for track folders, allowing new tracks to inherit a unified folder style.
-->


## Correções de bugs {#bug-fixes}

- Corrigido [Pastas inteligentes](https://github.com/osmandapp/OsmAnd-iOS/issues/5358) não sincronizando com o OsmAnd Cloud ou aparecendo na exportação de Configurações.
- Atualização do [menu de contexto da Wikipédia](https://github.com/osmandapp/OsmAnd-Issues/issues/3215) com um novo design e fotos online adicionadas.
- Corrigido [nomes de POI](https://github.com/osmandapp/OsmAnd-iOS/issues/5253) ausentes no menu “O que há aqui”.
- Corrigida a abertura de [Guias de viagem](https://github.com/osmandapp/OsmAnd-Issues/issues/3212) a partir dos resultados de pesquisa para exibir o artigo diretamente.
- Ajustada a posição da seção [Fotos online](https://github.com/osmandapp/OsmAnd-iOS/issues/5336) no menu de contexto da região.

<!--
- Faster opening of context menus when tapping POIs, Favorites, tracks and buildings.
- Correct handling of relation-based POIs on multipolygons.
- Fixed “null” appearing instead of a city name in POI search results and improved night-mode background consistency.
- Restored tappable behaviour for fitness, running and canoe routes with shields.
-->