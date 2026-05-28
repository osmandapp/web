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

## Unirse a la versión beta {#join-beta}

Las compilaciones beta de iOS (TestFlight) suelen proporcionarse semanalmente (después de una demostración de Sprint del equipo). No contienen descripciones y pueden tener versiones continuas. Se asume que son estables y están listas para usar.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Unirse a TestFlight</a>
</div>

<br/>


## Novedades {#whats-new}

- Búsqueda actualizada con una nueva pestaña **[Explorar](https://osmand.net/docs/user/map/popular_places#explore-in-search)** que muestra lugares populares cercanos.
- Nuevo **[complemento Astronomía](https://osmand.net/docs/user/plugins/astronomy)** experimental con una superposición astronómica que muestra las trayectorias del Sol, planetas y estrellas.
- Se añadió un **[editor de paletas](https://osmand.net/docs/user/map/tracks/appearance#color-palette-editor)** para crear y personalizar esquemas de color para rutas y terreno.
- Organización más inteligente de pistas con **[carpetas inteligentes](https://osmand.net/docs/user/personal/tracks/smart-folder)** y estadísticas de resumen más claras.
- Diseño más flexible de **[widgets y botones del mapa](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, especialmente en modo horizontal.
- **[Planificar una ruta](https://osmand.net/docs/user/plan-route/create-route)** mejorado con gráfico de elevación, cálculo de elevación sin conexión y parámetros de ruta.
- Se añadieron segmentos de subida, bajada y llanos al **[análisis de pista](https://osmand.net/docs/user/map/tracks/track-context-menu#analyze-by-intervals)**.

<!--
- Modo Última Subida / Última Bajada para **[Widgets de grabación de viaje](https://osmand.net/docs/user/plugins/trip-recording#widgets)**, con cambio entre ascenso/desenso total y último.
- **[Widget de distancia](https://osmand.net/docs/user/plugins/trip-recording#distance-start-stop)** actualizado con modos para distancia total, última distancia de subida/bajada.
- **[Widget de velocidad máxima](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** que muestra la velocidad máxima para todo el viaje o para la sección de subida/bajada más reciente.
- **[Widget de pendiente promedio](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** que muestra la pendiente promedio del último ascenso o descenso.
- Acción rápida *Mostrar pista en el mapa* agregada al grupo de widgets de grabación de viaje.
- Mejoras en la selección de rutas e integración del gráfico de altitud bajo el esquema de renderizado actualizado.
- Widget de gráfico de elevación para navegación, que muestra un perfil compacto a lo largo de rutas o pistas GPX.
- Capa **[Lugares populares](https://osmand.net/docs/user/map/popular_places/)** actualizada con selección de fuente de POI e vistas previas de imágenes opcionales en el mapa.
- Nueva sección Explorar en Búsqueda con “Lugares populares cercanos” y estados mejorados sin conexión/sin datos.
- Resultados de búsqueda de POI mejorados con visualización consistente de ciudades, diseño refinado y miniaturas opcionales.
- Configuraciones de apariencia predeterminadas para carpetas de pistas, permitiendo que las nuevas pistas hereden un estilo de carpeta unificado.
-->


## Corrección de errores {#bug-fixes}

- Se corrigió que las [carpetas inteligentes](https://github.com/osmandapp/OsmAnd-iOS/issues/5358) no se sincronizaran con OsmAnd Cloud ni aparecieran en la exportación de Ajustes.
- Se actualizó el [menú contextual de Wikipedia](https://github.com/osmandapp/OsmAnd-Issues/issues/3215) con un nuevo diseño y se añadieron fotos en línea.
- Se corrigió la ausencia de [nombres de POI](https://github.com/osmandapp/OsmAnd-iOS/issues/5253) en el menú “¿Qué hay aquí?”.
- Se corrigió la apertura de [guías de viaje](https://github.com/osmandapp/OsmAnd-Issues/issues/3212) desde los resultados de búsqueda para mostrar directamente el artículo.
- Se ajustó la posición de la sección [Fotos en línea](https://github.com/osmandapp/OsmAnd-iOS/issues/5336) en el menú contextual de la región.

<!--
- Apertura más rápida de menús contextuales al tocar POIs, Favoritos, pistas y edificios.
- Manejo correcto de POIs basados en relaciones en multipoligonos.
- Corregido el “null” que aparecía en lugar de un nombre de ciudad en los resultados de búsqueda de POI y mejorada la consistencia del fondo en modo nocturno.
- Restaurado el comportamiento táctil para rutas de fitness, correr y canoa con escudos.
-->