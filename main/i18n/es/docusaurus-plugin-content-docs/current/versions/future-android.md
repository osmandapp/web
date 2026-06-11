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



## Unirse a la versión beta {#join-beta}

OsmAnd lanza varias compilaciones listas para usar diariamente, lo que le permite rastrear nuevas funciones y participar en el proceso de traducción de OsmAnd. Puede participar en las pruebas de la versión beta de OsmAnd usando Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Novedades {#whats-new}

- **[Favoritos](https://osmand.net/docs/user/personal/favorites)** mejorados con soporte para archivos multimedia adjuntos (fotos, audio y vídeo) y una integración mejorada de las notas de audio/vídeo.
- **[Widgets de navegación](https://osmand.net/docs/user/widgets/nav-widgets)** mejorados con un tamaño más flexible y una adaptación de diseño a diferentes densidades y orientaciones de pantalla.
- Se ha añadido una leyenda del mapa a **[Configurar mapa](https://osmand.net/docs/user/map/configure-map-menu)** para comprender mejor los tipos de rutas y los elementos del mapa.
- Filtrado de rutas y control visual mejorados en **[Configurar mapa](https://osmand.net/docs/user/map/configure-map-menu)**, incluidas las clasificaciones y prioridades de las rutas.
- Análisis de pistas mejorado con nuevos tipos de gráficos y datos más detallados como superficie, tipo de carretera y pendiente.
- Gestión de pistas mejorada con vistas previas y una organización mejorada en **[Mis lugares](https://osmand.net/docs/user/personal/myplaces)**.
- Copia de seguridad automática y sincronización más fiable de los datos de usuario en **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)**, incluidas las **[Carpetas inteligentes](https://osmand.net/docs/user/personal/tracks/smart-folder)**.
- Mejoras iniciales en la navegación náutica con mejoras en AIS y parámetros y widgets de navegación adicionales.
- Experiencia mejorada en **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** con búsqueda y controles de navegación mejorados.
- Se ha añadido la posibilidad de interactuar con el mapa en **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)**, incluida la selección directa de puntos.
- **[Widget de elevación](https://osmand.net/docs/user/widgets/nav-widgets#elevation-widget)** rediseñado con información más detallada sobre la elevación de la ruta.

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


## Corrección de errores {#bug-fixes}

- Se ha corregido un [problema](https://github.com/osmandapp/OsmAnd/issues/16507) por el que las propiedades de los favoritos (color, icono, forma) no se actualizaban al cambiar de grupo.
- Se han corregido las [direcciones de salida incorrectas](https://github.com/osmandapp/OsmAnd/issues/23104) que se mostraban en las rotondas en Android Auto.
- Se han corregido los [valores de subida y bajada inexactos](https://github.com/osmandapp/OsmAnd/issues/20624) en los widgets de elevación.
- Se ha impedido que los [favoritos ocultos](https://github.com/osmandapp/OsmAnd/issues/24689) vuelvan a aparecer en el mapa al añadir waypoints de pista a una carpeta.
- Se han resuelto las [incoherencias entre gráficos](https://github.com/osmandapp/OsmAnd/issues/24712) en la pantalla Detalles.
- Se ha resuelto un [problema](https://github.com/osmandapp/OsmAnd/issues/24791) por el que las carpetas de Favoritos desancladas volvían a aparecer ancladas tras reiniciar la aplicación.

<!--
- Improved stability of **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** sync and backup, reducing conflicts and ensuring widgets and settings restore correctly across devices.
- Fixed incorrect uphill/downhill values in elevation widgets and improved accuracy of ascent/descent calculations in route analysis.
- Improved **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** navigation behaviour, including correct exit directions at roundabouts and proper placement of on-screen tools such as the radius ruler.
- Fixed several issues related to **[Accessibility](https://osmand.net/docs/user/plugins/accessibility)** mode, including navigation announcements and interaction with certain map tools.
- General interface and performance fixes across map rendering, widget display and configuration screens.
-->