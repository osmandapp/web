---
source-hash: 1f3d617b7cbeec60a46ac2de62365a32fbe7c0b18d256e5efb0c6e968e640f3b
sidebar_position: 4
title:  Mapas y Datos
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Mapas {#maps}

### ¿Por qué OsmAnd no ofrece acceso a Google Maps? {#why-does-osmand-not-offer-access-to-google-maps}

OsmAnd está diseñado para ser compatible con OpenStreetMap (OSM) y prioriza esta vía tanto como es posible. Además, existen restricciones de licencia que no permiten que OsmAnd se distribuya con datos de Google Maps.

### Carga lenta de mapas en Android 11, 12 (tarjeta SD) {#maps-slowly-loading-on-android-11-12-sd-card}

Debido a las nuevas [reglas de acceso al almacenamiento introducidas en Android 11 y 12](https://www.androidauthority.com/android-12-privacy-features-1225859/), los usuarios pueden experimentar un rendimiento más lento al acceder a los mapas almacenados en tarjetas SD. Estos cambios también pueden causar restricciones de visibilidad y acceso a los archivos en las carpetas de la tarjeta SD. Se pueden encontrar más discusiones y detalles técnicos en los siguientes enlaces: [Discusión en Reddit](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

En este momento, las siguientes soluciones están disponibles:

#### 1. Migrar la carpeta de almacenamiento de datos de OsmAnd a la "Memoria interna de la aplicación" {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- Puede cambiar la carpeta de almacenamiento seleccionando la opción ***Memoria interna de la aplicación*** en *Menú → Ajustes → Ajustes de OsmAnd → Carpeta de almacenamiento de datos*.

- Sin embargo, tenga en cuenta que la memoria interna suele ser limitada. Como solución alternativa, puede mover archivos importantes a la memoria interna mientras mantiene los mapas de uso poco frecuente en la tarjeta SD. Utilice un gestor de archivos para transferir manualmente estos archivos cuando sea necesario.

El equipo de desarrollo está buscando activamente soluciones más eficientes para mejorar el rendimiento de la tarjeta SD bajo las nuevas políticas de almacenamiento de Android.

#### 2. Usar la carpeta "Download" de la tarjeta SD {#2-use-the-sd-cards-download-folder}

Puede intentar resolver el problema de la carga lenta de mapas especificando la carpeta **Download** de la tarjeta SD para el almacenamiento de OsmAnd en *Menú → Ajustes → Ajustes de OsmAnd → Carpeta de almacenamiento de datos → Especificada manualmente*. Las siguientes rutas son posibles:

- ***/storage/XXXX-XXXX/Download/osmand***  
   Esta ruta podría causar errores al acceder a múltiples archivos. Por ejemplo, es posible que pueda descargar el mapa general del mundo, pero otras regiones podrían no aparecer.

- ***/storage/XXXX-XXXX/Download***  
   Esta ruta debería funcionar de manera consistente para descargar mapas y otros datos. Sin embargo, tenga en cuenta que OsmAnd no reconocerá los archivos escritos en esta carpeta por otras aplicaciones o programas (por ejemplo, SasPlanet). Para más detalles, consulte [esta guía](../../technical/map-creation/create-offline-maps-yourself.md).

El "XXXX-XXXX" representa el número de identificación único de su tarjeta SD, que a veces se puede encontrar en la ruta de la carpeta en las opciones de *Almacenamiento externo 2* o localizarse mediante otros métodos. Hay más investigación y detalles sobre esta solución disponibles [aquí](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744).

#### 3. Opción de almacenamiento "Multimedia" {#3-media-storage-option}

Si las soluciones anteriores no funcionan o parecen limitadas, puede intentar usar la opción de almacenamiento "Multimedia" para resolver problemas de carga lenta de mapas o de acceso al almacenamiento. Este método permite seleccionar una carpeta que sea accesible para OsmAnd y otras aplicaciones, lo que es particularmente útil para el almacenamiento externo o extraíble.

### Elegir una carpeta de almacenamiento de datos de OsmAnd "Generalmente Accesible" usando el Almacenamiento "Multimedia" {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android se ha vuelto más estricto con los permisos de almacenamiento, limitando a menudo el acceso a carpetas específicas de la aplicación, especialmente con nuevas instalaciones o actualizaciones del sistema. El almacenamiento de datos predeterminado de OsmAnd puede estar restringido, haciéndolo invisible para otras aplicaciones o incluso para los gestores de archivos. Muchos usuarios desean almacenar mapas y datos en un almacenamiento externo accesible para copias de seguridad, sincronización o gestión manual de archivos.

Sin embargo, OsmAnd no tiene el permiso de *Acceso a todos los archivos* (debido a las restricciones de Google), lo que limita la elección de carpetas. Una solución alternativa es usar la carpeta de almacenamiento "Multimedia", a la que Android normalmente concede un acceso de lectura/escritura más amplio. Para hacer esto:

- Vaya a *Ajustes de OsmAnd → Ajustes de OsmAnd → Carpeta de almacenamiento de datos* y revise las áreas de almacenamiento disponibles. Utilice el indicador de espacio libre para identificar el almacenamiento de destino, a menudo etiquetado como *Almacenamiento externo 2*.
- Anote la ruta de la carpeta actual, que podría ser algo como */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Cambie a la opción *Especificada manualmente* y modifique la ruta a una carpeta accesible para medios. En muchos sistemas, cambiar */Android/data/* a */media/* (p. ej., ***/storage/xxxx-xxxx/media***) funciona. Algunos sistemas pueden requerir modificaciones de ruta diferentes.

Una ruta correcta no provocará ningún error de permiso de escritura en OsmAnd. Antes de realizar estos cambios, asegúrese de que OsmAnd tenga los permisos de almacenamiento adecuados, incluido el permiso de almacenamiento "Multimedia", en los ajustes de **Aplicaciones** de Android. En versiones más recientes de Android, estos permisos pueden estar ubicados en menús avanzados u ocultos.

### Eliminación de datos de mapas después de la actualización de la aplicación (si se selecciona "Almacenamiento multiusuario 1") {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

En la versión de Android de OsmAnd, seleccionar *Almacenamiento multiusuario 1* como ubicación de almacenamiento puede provocar la eliminación de todos los [mapas locales](../personal/maps-resources.md#local) cada vez que la aplicación se actualiza automáticamente, como de la versión 4.1.9 a la 4.1.10, 4.1.11 o posterior (**Android 11, 12**). Este problema está documentado en [Github](https://github.com/osmandapp/OsmAnd/issues/13404).

Para evitar perder los datos de sus mapas durante las actualizaciones, considere estas soluciones:

1. *Haga una copia de seguridad de sus archivos*. Antes de actualizar OsmAnd, haga una [copia de seguridad](../personal/import-export.md) de los mapas almacenados en *..Android/obb/net.osmand*. Después de actualizar, restaure los archivos antes de iniciar la aplicación OsmAnd actualizada.

2. *Cambie la ruta de almacenamiento*. Mueva la carpeta de OsmAnd a una ubicación escribible por todas las aplicaciones (p. ej., servidor FTP Wi-Fi, X-plore, o mediante un cable USB a un PC). Cambie la ruta de la carpeta de:
   - /storage/emulated/0/Android/**obb**/net.osmand
   a
   - /storage/emulated/0/Android/**media**/net.osmand.


### No se renderizan los mapas en dispositivos Google Pixel {#no-maps-rendering-for-google-pixel-devices}

En las versiones de OsmAnd 4.2 para Android, [el renderizado de mapas puede fallar](https://github.com/osmandapp/OsmAnd/issues/15045) en dispositivos Google Pixel, dejando a los usuarios con una pantalla blanca en blanco en lugar de un mapa.

Para resolver este problema, cambie al renderizado OpenGL:

- Navegue a *Menú de OsmAnd → Ajustes → Ajustes de OsmAnd → Motor de renderizado de mapas → Versión 2 (OpenGL)*.
- Reinicie OsmAnd para aplicar los cambios.


### Resolver la renderización lenta de mapas en OsmAnd {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Para resolver el problema de la renderización lenta de mapas, especialmente al usar mapas vectoriales sin conexión, se deben seguir los siguientes pasos:

1. **Desactivar características innecesarias del mapa.** Desactive el relieve 3D, las curvas de nivel, las sombras de relieve y las pendientes, que pueden aumentar significativamente la potencia de procesamiento necesaria para renderizar los mapas. Puede hacerlo en *Menú → Configurar mapa*.

2. **Simplificar los detalles del mapa.** Oculte elementos menos críticos como límites, PDI, notas de OSM, capas meteorológicas, detalles adicionales (*Menú → Configurar mapa → Renderizado de mapa*) para agilizar la visualización del mapa y mejorar la velocidad.

3. **Limitar el número de PDI mostrados.** Muestre solo los PDI principales o limite las categorías mostradas durante la navegación, lo que puede ayudar a acelerar la renderización del mapa. Acceda a estos ajustes en *Menú → Navegación → Ajustes*.

4. **Ajustar el magnificador del mapa.** La configuración del magnificador del mapa podría ser un factor clave en la ralentización del mapa. Establezca el magnificador en 100% manteniendo presionado el botón **"+"** o **"-"** en la pantalla del mapa para optimizar la visualización.

5. **Desactivar el zoom automático.** El zoom automático puede resultar en un redibujado frecuente del mapa durante la navegación, causando retrasos. Desactive el zoom automático en *Menú → Ajustes → Perfil → Ajustes de navegación → [Mapa durante la navegación](../navigation/guidance/map-during-navigation.md)*.

6. **Usar solo mapas sin conexión.** Los mapas en línea, especialmente cuando no se descargan con antelación, pueden ralentizar la carga del mapa. Cambie a usar solo mapas sin conexión para un rendimiento más fluido.

Estos cambios deberían reducir el tiempo que se tarda en renderizar los mapas, especialmente durante la navegación. Para opciones de configuración más detalladas, consulte la [Guía de Ajustes del Mapa](https://osmand.net/docs/user/map/interact-with-map.md#settings).


## Curvas de nivel {#contour-lines}

### ¿Hay alguna manera de mostrar las curvas de nivel en pies en lugar de metros? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Sí, las curvas de nivel se pueden mostrar en pies en lugar de metros. Antes de descargar los datos de las curvas de nivel, elija entre Pies o Metros: [lea más sobre ello aquí](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Las curvas de nivel, los datos de elevación o el relieve 3D no se muestran {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Verifique si se han descargado los datos de la región correcta. Vaya a ***Menú → Mapas y recursos → Descargas → Su región***. [Cómo descargar mapas](../start-with/first-steps.md#how-to-download-maps).
- Compruebe que el [complemento](../plugins/topography.md#required-setup-parameters) esté activado y visible en ***Menú → Complementos → Topografía***.
- Compruebe que los elementos de la sección Topografía estén activados en ***Menú → Configurar mapa → Topografía → Curvas de nivel / Terreno / Relieve 3D***.
- Compruebe sus compras: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Actualice la aplicación a la última versión.
- Elimine y vuelva a descargar los mapas necesarios para asegurarse de que no haya archivos corruptos.
- Reinicie OsmAnd para actualizar los ajustes y los datos.


## Búsqueda {#search}

### La búsqueda de direcciones estructurada (ciudad *→* calle *→* casa) no encuentra la casa {#structured-city--street--house-address-search-doesnt-find-the-house}

Si está intentando buscar una ubicación utilizando la estructura *Ciudad → Calle → Número de casa* y no se devuelven resultados, considere los siguientes consejos y posibles causas:

> **Consejo**: Pruebe una búsqueda de texto completo sin especificar la ciudad, ya que la dirección puede estar registrada bajo una ciudad diferente.

**Posibles problemas:**

- **Casa ausente**. Es posible que la casa no esté registrada en OpenStreetMap, o que esté presente pero sin números asignados. Puede verificar esto con un ejemplo [aquí](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).

- **Nombre de calle incorrecto**. El nombre de la calle asociado con la casa podría ser incorrecto en OpenStreetMap. Verifique la etiqueta `addr:street` para asegurarse de que el nombre de la calle coincida exactamente con el de la información de etiquetado de la calle.

- **Problema con Nominatim**. La casa puede estar presente en OpenStreetMap pero no encontrarse a través de Nominatim (el motor de búsqueda utilizado por OpenStreetMap). Puede aprender más sobre cómo solucionar problemas relacionados con direcciones [aquí](https://wiki.openstreetmap.org/wiki/Addresses).

- **Posible problema en OsmAnd**. Si la casa está presente en Nominatim pero aún no se encuentra en OsmAnd, el problema podría ser específico de OsmAnd. Puede contribuir a resolver esto investigando más a fondo. Se pueden encontrar más detalles en este [artículo técnico](../../technical/algorithms/trace-address-search-issues.md).


## Trazas y Puntos {#tracks-and-points}

### Cómo marcar diferentes lugares en el mapa {#how-to-mark-different-places-on-the-map}

Puede dejar notas y marcar ubicaciones en el mapa de varias formas, cada una con diferentes propósitos:

- *[Favoritos](../personal/favorites.md)*. Son puntos permanentes en el mapa donde puede añadir descripciones. Para crear un Favorito, haga una *pulsación larga → pulse Añadir*. Los favoritos son excelentes para marcar lugares que visita con frecuencia o que desea guardar para futuras referencias.

- *[Marcadores](../personal/markers.md)*. Los marcadores son puntos temporales, a menudo utilizados para la navegación o la planificación. Pueden mostrar la distancia desde su ubicación actual u otro punto, y se pueden eliminar rápidamente cuando ya no se necesiten. Para añadir un Marcador, haga una *pulsación larga → pulse Marcador*.

- *[Waypoints](../map/tracks/index.md#types-of-tracks)*. Los waypoints se colocan a lo largo de las rutas que crea, ayudándole a marcar paradas o ubicaciones específicas en su viaje. También puede añadir descripciones a estos puntos. Para añadir un waypoint, haga una *pulsación larga en el mapa → Direcciones → añadir como waypoint intermedio*.

- *[Notas de audio/vídeo](../plugins/audio-video-notes.md)*. Estas notas le permiten adjuntar archivos de audio, vídeo o fotos a ubicaciones específicas en el mapa. Para activarlo, active el complemento Notas de audio/vídeo en *Menú de OsmAnd → Complementos*. Para añadir una, haga una *pulsación larga → Acciones → elija el archivo requerido para adjuntar*.

- *[Notas de OSM](../plugins/osm-editing.md#create--modify-osm-note)*. Son informes que puede crear para resaltar errores o información faltante en OpenStreetMap. Active el complemento de edición de OSM en el *Menú de OsmAnd → Complementos*. Para añadir una Nota de OSM, haga una *pulsación larga → Acciones → Añadir nota de OSM*.

- *[PDI (Puntos de Interés)](../map/point-layers-on-map.md#points-of-interest-pois)*. Son puntos predefinidos de la fuente de datos de OpenStreetMap, como restaurantes, parques o puntos de referencia. Puede ver los PDI activando la capa de PDI en el menú *Configurar mapa* o seleccionando una categoría.

- *[Búsqueda](../search/index.md)*. También puede utilizar la función de búsqueda para encontrar y marcar lugares en el mapa.