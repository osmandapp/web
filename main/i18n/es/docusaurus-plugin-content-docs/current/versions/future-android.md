---
source-hash: 2da53a8aa242bb195e58636b6ecf74b3bda942f80025c592da823faa4061ce50
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


# Android 5.5 {#android-55}



## Unirse a la versión beta {#join-beta}

OsmAnd lanza varias compilaciones listas para usar diariamente, lo que le permite rastrear nuevas funciones y participar en el proceso de traducción de OsmAnd. Puede participar en las pruebas de la versión beta de OsmAnd usando Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Novedades {#whats-new}

- La **[búsqueda espacial](https://osmand.net/blog/offline-search-video)** está activada de forma predeterminada, con una clasificación más precisa, sinónimos y sugerencias de corrección para palabras mal escritas.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** es gratuito para todos los usuarios y obtiene [sugerencias a partir de destinos recientes](https://osmand.net/docs/user/navigation/auto-car#dashboard-suggestions), [Viaje libre](https://osmand.net/docs/user/navigation/auto-car#destination-points) automático durante la conducción y compatibilidad con [Google Assistant y Gemini](https://osmand.net/docs/user/navigation/auto-car#voice-control).
- La **[versión gratuita](https://osmand.net/docs/user/purchases/android#free-and-paid-features)** incluye todos los mapas de una región.
- Nuevo **plugin Panoramax** con imágenes a nivel de calle como capa del mapa, filtradas por colaborador, fecha y tipo.
- **[Sombras del sol](https://osmand.net/docs/user/plugins/topography#sun-position)** realistas proyectadas por edificios 3D y terreno, y **[sombras del terreno](https://osmand.net/docs/user/plugins/topography#terrain-shadows-android)** ajustables para el Relieve 3D.
- Biblioteca multimedia en **[Mis lugares](https://osmand.net/docs/user/personal/myplaces)** que reúne en un solo lugar tus fotos, vídeos y notas de audio.
- Líneas discontinuas y punteadas en la **[apariencia de pistas](https://osmand.net/docs/user/map/tracks/appearance#track-appearance-settings)**, también disponibles como apariencia predeterminada de una carpeta.
- Nuevos ajustes de velocidad de viaje con un rango de velocidad para el cálculo de la ruta y una hora de llegada basada en tu velocidad real en los **[parámetros del vehículo](https://osmand.net/docs/user/navigation/guidance/vehicle-parameters#default-speed)**.
- Nueva **[Acción rápida](https://osmand.net/docs/user/widgets/quick-action#my-places)** para mostrar u ocultar una o varias pistas con un solo toque.
- Las etiquetas de las **[curvas de nivel](https://osmand.net/docs/user/plugins/topography#contour-lines)** pueden orientarse cuesta arriba, como en los mapas topográficos en papel.
- Compatibilidad con medidores de potencia BLE en **[Sensores externos](https://osmand.net/docs/user/plugins/external-sensors#pair-new-sensor)**.

<!--
- Navigation settings included in route links.
- The trip recording "Notification" option is renamed to "Start from notification" to make clear it only adds a start button.
-->


## Corrección de errores {#bug-fixes}

- Se ha corregido un [problema](https://github.com/osmandapp/OsmAnd/issues/24228) por el que al vaciar la papelera de OsmAnd Cloud se restauraban datos eliminados.
- Se han corregido los [avisos de recálculo de ruta](https://github.com/osmandapp/OsmAnd/issues/25544) que no coincidían con la desviación real de la ruta.
- Se ha corregido la [brújula apuntando 180° en dirección contraria](https://github.com/osmandapp/OsmAnd/issues/26147) en orientación vertical invertida.
- Se han restaurado las [paradas con velocidad cero](https://github.com/osmandapp/OsmAnd/issues/26351) en los gráficos de velocidad.
- Se ha resuelto que el [botón Iniciar desaparecía](https://github.com/osmandapp/OsmAnd/issues/26305) en la grabación de viaje con una fuente o un tamaño de pantalla grandes.
- Se ha impedido que la [apariencia de la pista](https://github.com/osmandapp/OsmAnd/issues/25686) quedara sin aplicar tras la sincronización con la nube.
- Se han recuperado los [símbolos OSMC](https://github.com/osmandapp/OsmAnd/issues/26148) en la lista ¿Qué hay aquí? que se abre al tocar escudos de ruta superpuestos.
- Se han actualizado los [horarios de los eclipses solares](https://github.com/osmandapp/OsmAnd/issues/25830) para mostrar la hora local en lugar de la mundial.

<!--
- Fixed the parking position marker not showing when Favorites are hidden.
- Fixed imported Favorites going to the wrong folder.
-->