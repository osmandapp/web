---
source-hash: 767578704635d01030c776c1a29804d758e70785b56523fd818befdf7a58df10
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

# iOS 5.5 {#ios-55}

## Unirse a la versión beta {#join-beta}

Las compilaciones beta de iOS (TestFlight) suelen proporcionarse semanalmente (después de una demostración de Sprint del equipo). No contienen descripciones y pueden tener versiones continuas. Se asume que son estables y están listas para usar.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Unirse a TestFlight</a>
</div>

<br/>


## Novedades {#whats-new}

- **[CarPlay](https://osmand.net/docs/user/navigation/car-play)** es gratuito para todos los usuarios y obtiene nuevos [ajustes](https://osmand.net/docs/user/navigation/car-play#settings) de orientación del mapa y frecuencia de fotogramas, con Inicio disponible con un toque desde el menú Navegación.
- La **[versión gratuita](https://osmand.net/docs/user/purchases/ios#free-and-paid-features)** incluye todos los mapas de una región.
- Nuevos **[formatos de coordenadas](https://osmand.net/docs/user/search/search-coordinates#customize-coordinate-format)**, incluidos los sistemas EPSG, el localizador Maidenhead y la cuadrícula suiza, con un formato principal y una lista de formatos preferidos.
- **[Diseños de widgets](https://osmand.net/docs/user/widgets/configure-screen#single-and-separate-layouts)** separados para vertical y horizontal, además de paneles superior e inferior **[anchos o compactos](https://osmand.net/docs/user/widgets/configure-screen#panels-layout)**.
- **[Apariencia del panel de widgets](https://osmand.net/docs/user/widgets/configure-screen#widget-panel-appearance)** personalizable con tamaño de widgets, iconos y colores de texto y de fondo.
- Nuevo ajuste **[Mantener la pantalla encendida](https://osmand.net/docs/user/personal/profiles#appearance)** para cada perfil: seguir el tiempo de espera del sistema, mantener la pantalla encendida solo durante la navegación o mantenerla siempre encendida.
- Las etiquetas de las **[curvas de nivel](https://osmand.net/docs/user/plugins/topography#contour-lines)** pueden orientarse cuesta arriba, como en los mapas topográficos en papel.
- Ajustes de apariencia completos al **[modificar varios Favoritos](https://osmand.net/docs/user/personal/favorites#bulk-edit--delete)** a la vez.
- Los **[destinos intermedios](https://osmand.net/docs/user/navigation/setup/route-details#turn-by-turn-information)** aparecen en los detalles de la ruta con su número, nombre, y la distancia y el tiempo desde el inicio.


## Corrección de errores {#bug-fixes}

- Se corrigió un [problema](https://github.com/osmandapp/OsmAnd-iOS/issues/5696) por el que al vaciar la papelera de OsmAnd Cloud se restauraban mapas y Favoritos eliminados.
- Se corrigió que la [elevación cayera a 0](https://github.com/osmandapp/OsmAnd-iOS/issues/5526) en pistas grabadas en segundo plano.
- Se resolvieron los [conflictos de sincronización de OsmAnd Cloud](https://github.com/osmandapp/OsmAnd-iOS/issues/5463) tras actualizar mapas en varios dispositivos.
- Se impidió que [Favoritos de carpetas ocultas](https://github.com/osmandapp/OsmAnd-iOS/issues/5558) aparecieran en los resultados de búsqueda.
- Se corrigió que [Planificar una ruta se cerrara](https://github.com/osmandapp/OsmAnd-iOS/issues/5947) al tocar una pista en el mapa.
- Se corrigió el [tiempo de viaje a pie](https://github.com/osmandapp/OsmAnd-iOS/issues/5787) mostrado para rutas en coche tras Adjuntar a carreteras.
- Se corrigió que los [waypoints añadidos a la pista en grabación](https://github.com/osmandapp/OsmAnd-iOS/issues/5893) no respondieran a los toques.
- Se evitó que el [icono de waypoint parpadeara](https://github.com/osmandapp/OsmAnd-iOS/issues/2764) durante la grabación de pistas.

<!--
- Fixed map updates for mappers with Devanagari and Eastern Arabic numerals.
- Fixed the map zooming out when you add a Quick Action while moving.
- Fixed KML import creating an empty track.
-->