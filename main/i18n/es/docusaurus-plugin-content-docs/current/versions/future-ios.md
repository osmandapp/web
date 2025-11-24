---
source-hash: 6e3da3a892310ea06863788deeb421519395989e63957965d0a7324d251adb07
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

# iOS 5.3 {#ios-53}

## Unirse a la versión beta {#join-beta}

Las compilaciones beta de iOS (TestFlight) suelen proporcionarse semanalmente (después de una demostración de Sprint del equipo). No contienen descripciones y pueden tener versiones continuas. Se asume que son estables y están listas para usar.

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Unirse a TestFlight</a>
</div>

<br/>


## Novedades {#whats-new}

- Modo Última Subida / Última Bajada para **[Widgets de grabación de viaje](https://osmand.net/docs/user/plugins/trip-recording#widgets)**, con cambio entre ascenso/desenso total y último.
- **[Widget de distancia](https://osmand.net/docs/user/plugins/trip-recording#distance-start-stop)** actualizado con modos para distancia total, última distancia de subida y última distancia de bajada.
- **[Widget de velocidad máxima](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** que muestra la velocidad máxima para todo el viaje o para la sección de subida/bajada más reciente.
- **[Widget de pendiente promedio](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** que muestra la pendiente promedio del último ascenso o descenso.
- Acción rápida *Mostrar pista en el mapa* agregada al grupo de widgets de grabación de viaje.
- Mejoras en la selección de rutas e integración del gráfico de altitud bajo el esquema de renderizado actualizado.
- Widget de gráfico de elevación para navegación, que muestra un perfil compacto a lo largo de rutas o pistas GPX.
- Capa **[Lugares populares](https://osmand.net/docs/user/map/popular_places/)** actualizada con selección de fuente de POI e vistas previas de imágenes opcionales en el mapa.
- Nueva sección Explorar en Búsqueda con “Lugares populares cercanos” y estados mejorados sin conexión/sin datos.
- Resultados de búsqueda de POI mejorados con visualización consistente de ciudades, diseño refinado, miniaturas opcionales y nombres alternativos más claros.
- Configuraciones de apariencia predeterminadas para carpetas de pistas, permitiendo que las nuevas pistas hereden un estilo de carpeta unificado.


## Corrección de errores {#bug-fixes}

- Apertura más rápida de menús contextuales al tocar POIs, Favoritos, pistas y edificios.
- Manejo correcto de POIs basados en relaciones en multipoligonos.
- Corregido el “null” que aparecía en lugar de un nombre de ciudad en los resultados de búsqueda de POI y mejorada la consistencia del fondo en modo nocturno.
- Restaurado el comportamiento táctil para rutas de fitness, running y canoa con escudos.