---
source-hash: 5be228574247e03992e3e0ddd030d4377aa5bc7c791ba46b7915c2586ebae9b4
sidebar_position: 4
title: Mapas y Datos
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

OsmAnd está diseñado para soportar OpenStreetMap (OSM) y prioriza este camino tanto como sea posible. Además, existen restricciones de licencia que no permiten que OsmAnd se distribuya con datos de Google Maps.

### Mapas cargando lentamente en Android 11, 12 (tarjeta SD) {#maps-slowly-loading-on-android-11-12-sd-card}

Debido a las nuevas [reglas de acceso al almacenamiento introducidas en Android 11 y 12](https://www.androidauthority.com/android-12-privacy-features-1225859/), los usuarios pueden experimentar un rendimiento más lento al acceder a los mapas almacenados en tarjetas SD. Estos cambios también pueden causar restricciones de visibilidad y acceso para los archivos en las carpetas de la tarjeta SD. Se pueden encontrar más discusiones e información técnica en los siguientes enlaces: [discusión de Reddit](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

En este momento, las siguientes soluciones están disponibles:

#### 1. Migrar la carpeta de almacenamiento de datos de OsmAnd a "Memoria interna de la aplicación" {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- Puedes cambiar la carpeta de almacenamiento seleccionando la opción ***Memoria interna de la aplicación*** en *Menú → Ajustes → Ajustes de OsmAnd → Carpeta de almacenamiento de datos*.

- Sin embargo, ten en cuenta que la memoria interna suele ser limitada. Como solución alternativa, puedes mover archivos importantes a la memoria interna mientras mantienes los mapas poco usados en la tarjeta SD. Usa un administrador de archivos para transferir manualmente estos archivos cuando sea necesario.

El equipo de desarrollo está buscando activamente soluciones más eficientes para mejorar el rendimiento de la tarjeta SD bajo las nuevas políticas de almacenamiento de Android.

#### 2. Usar la carpeta "Descargas" de la tarjeta SD {#2-use-the-sd-cards-download-folder}

Puedes intentar resolver el problema de carga lenta de mapas especificando la carpeta **Descargas** de la tarjeta SD para el almacenamiento de OsmAnd en *Menú → Ajustes → Ajustes de OsmAnd → Carpeta de almacenamiento de datos → Especificado manualmente*. Las siguientes rutas son posibles:

- ***/storage/XXXX-XXXX/Download/osmand***
Esta ruta podría causar errores al acceder a varios archivos. Por ejemplo, es posible que puedas descargar el mapa de la Vista General del Mundo, pero otras regiones podrían no aparecer.

- ***/storage/XXXX-XXXX/Download***
Esta ruta debería funcionar de manera consistente para descargar mapas y otros datos. Sin embargo, ten en cuenta que OsmAnd no reconocerá los archivos escritos en esta carpeta por otras aplicaciones o programas (por ejemplo, SasPlanet). Para más detalles, consulta [esta guía](../../technical/map-creation/create-offline-maps-yourself.md).

El "XXXX-XXXX" representa el número de identificación único de tu tarjeta SD, que a veces se puede encontrar en la ruta de la carpeta bajo las opciones de *Almacenamiento externo 2* o se puede localizar usando otros métodos. Más investigación y detalles sobre esta solución están disponibles [aquí](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744).

#### 3. Opción de almacenamiento "Medios" {#3-media-storage-option}

Si las soluciones anteriores no funcionan o parecen limitadas, puedes intentar usar la opción de almacenamiento "Medios" para resolver la carga lenta de mapas o los problemas de acceso al almacenamiento. Este método permite seleccionar una carpeta que sea accesible para OsmAnd y otras aplicaciones, particularmente útil para almacenamiento externo o extraíble.

### Elegir una carpeta de almacenamiento de datos de OsmAnd "generalmente accesible" usando el almacenamiento "Medios" {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android se ha vuelto más estricto con los permisos de almacenamiento, a menudo limitando el acceso a carpetas específicas de la aplicación, especialmente con nuevas instalaciones o actualizaciones del sistema. El almacenamiento de datos predeterminado de OsmAnd puede estar restringido, haciéndolo invisible para otras aplicaciones o incluso para los administradores de archivos. Muchos usuarios desean almacenar mapas y datos en un almacenamiento externo accesible para copias de seguridad, sincronización o gestión manual de archivos.

Sin embargo, OsmAnd no tiene el permiso de *Acceso a todos los archivos* (debido a las restricciones de Google), lo que limita la elección de carpetas. Una solución alternativa es usar la carpeta de almacenamiento "Medios", a la que Android suele otorgar un acceso de lectura/escritura más amplio. Para hacer esto:

- Ve a *Ajustes de OsmAnd → Ajustes de OsmAnd → Carpeta de almacenamiento de datos* y revisa las áreas de almacenamiento disponibles. Usa el indicador de espacio libre para identificar el almacenamiento de destino, a menudo etiquetado como *Almacenamiento externo 2*.
- Anota la ruta de la carpeta actual, que podría verse como */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Cambia a la opción *Especificado manualmente* y modifica la ruta a una carpeta accesible para medios. En muchos sistemas, cambiar */Android/data/* a */media/* (por ejemplo, ***/storage/xxxx-xxxx/media***) funciona. Algunos sistemas pueden requerir diferentes modificaciones de ruta.

Una ruta correcta no le pedirá a OsmAnd ningún error de permiso de escritura. Antes de realizar estos cambios, asegúrate de que OsmAnd tenga los permisos de almacenamiento apropiados, incluido el permiso de almacenamiento "Medios", en la configuración de **Aplicaciones** de Android. En versiones más recientes de Android, estos permisos pueden estar ubicados en menús avanzados u ocultos.

### Eliminación de datos de mapas después de la actualización de la aplicación (si se selecciona "Almacenamiento multiusuario 1") {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

En la versión de Android de OsmAnd, la selección de *Almacenamiento multiusuario 1* como ubicación de almacenamiento puede llevar a la eliminación de todos los [mapas locales](../personal/maps-resources.md#local-maps) cada vez que la aplicación se actualiza automáticamente, como de la versión 4.1.9 a la 4.1.10, 4.1.11 o posterior (**Android 11, 12**). Este problema está documentado en [Github](https://github.com/osmandapp/OsmAnd/issues/13404).

Para evitar la pérdida de datos de tus mapas durante las actualizaciones, considera estas soluciones:

1. *Copia de seguridad de tus archivos*. Antes de actualizar OsmAnd, haz una [copia de seguridad](../personal/import-export.md) de los mapas almacenados en *..Android/obb/net.osmand*. Después de actualizar, restaura los archivos antes de iniciar la aplicación OsmAnd actualizada.

2. *Cambia la ruta de almacenamiento*. Mueve la carpeta de OsmAnd a una ubicación donde todas las aplicaciones puedan escribir (por ejemplo, servidor FTP Wi-Fi, X-plore o mediante un cable USB a una PC). Cambia la ruta de la carpeta de:
   - /storage/emulated/0/Android/**obb**/net.osmand
   a
   - /storage/emulated/0/Android/**media**/net.osmand.


### No se renderizan mapas para dispositivos Google Pixel {#no-maps-rendering-for-google-pixel-devices}

Para las versiones de Android de OsmAnd 4.2, [la renderización de mapas puede fallar](https://github.com/osmandapp/OsmAnd/issues/15045) en dispositivos Google Pixel, dejando a los usuarios con una pantalla blanca en blanco en lugar de un mapa.

Para resolver este problema, cambia a la renderización OpenGL:

- Navega a *Menú de OsmAnd → Ajustes → Ajustes de OsmAnd → Motor de renderización de mapas → Versión 2 (OpenGL)*.
- Reinicia OsmAnd para aplicar los cambios.


### Resolución de la renderización lenta de mapas en OsmAnd {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Para resolver el problema de la renderización lenta de mapas, especialmente al usar mapas vectoriales sin conexión, se deben seguir los siguientes pasos:

1. **Deshabilita las funciones de mapa innecesarias.** Desactiva el relieve 3D, las curvas de nivel, los sombreados de colinas y las pendientes, lo que puede aumentar significativamente la potencia de procesamiento necesaria para renderizar los mapas. Puedes hacerlo en *Menú → Configurar mapa*.

2. **Simplifica los detalles del mapa.** Oculta elementos menos críticos como límites, POI, notas de OSM, capas meteorológicas, detalles adicionales (*Menú → Configurar mapa → Renderización de mapas*) para optimizar la visualización del mapa y mejorar la velocidad.

3. **Limita el número de POI mostrados.** Muestra solo los POI principales o limita las categorías mostradas durante la navegación, lo que puede ayudar a acelerar la renderización del mapa. Accede a estos ajustes en *Menú → Navegación → Ajustes*.

4. **Ajusta el magnificador del mapa.** El ajuste del magnificador del mapa podría ser un factor clave para ralentizar el mapa. Establece el magnificador al 100% manteniendo pulsado el botón **"+"** o **"-"** en la pantalla del mapa para optimizar la visualización.

5. **Deshabilita el auto-zoom.** El auto-zoom puede resultar en un redibujado frecuente del mapa durante la navegación, causando retrasos. Deshabilita el auto-zoom en *Menú → Ajustes → Perfil → Ajustes de navegación → [Mapa durante la navegación](../navigation/guidance/map-during-navigation.md)*.

6. **Usa solo mapas sin conexión.** Los mapas en línea, especialmente cuando no se descargan con antelación, pueden ralentizar la carga del mapa. Cambia a usar solo mapas sin conexión para un rendimiento más fluido.

Estos cambios deberían reducir el tiempo que tarda en renderizar los mapas, especialmente durante la navegación. Para opciones de configuración más detalladas, consulta la [Guía de configuración de mapas](https://osmand.net/docs/user/map/interact-with-map#settings).


## Curvas de nivel {#contour-lines}

### ¿Existe alguna forma de mostrar las curvas de nivel en pies en lugar de metros? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Sí, las curvas de nivel se pueden mostrar en pies en lugar de metros. Antes de descargar los datos de las curvas de nivel, elige entre Pies o Metros: [lee más sobre esto aquí](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Las curvas de nivel, los datos de elevación o el relieve 3D no se muestran {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Verifica si se han descargado los datos de la región correcta. Ve a ***Menú → Mapas y Recursos → Descargas → Tu Región***. [Cómo descargar mapas](../start-with/first-steps.md#how-to-download-maps).
- Comprueba que el [plugin](../plugins/topography.md#required-setup-parameters) esté habilitado y visible en ***Menú → Plugins → Topografía***.
- Comprueba que los elementos de la sección Topografía estén habilitados en ***Menú → Configurar Mapa → Topografía → Curvas de nivel / Terreno / Relieve 3D***.
- Comprueba tus compras: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Actualiza la aplicación a la última versión.
- Elimina y vuelve a descargar los mapas necesarios para asegurarte de que no haya archivos corruptos.
- Reinicia OsmAnd para actualizar la configuración y los datos.


## Búsqueda {#search}

### La búsqueda de direcciones estructurada (ciudad *→* calle *→* casa) no encuentra la casa {#structured-city--street--house-address-search-doesnt-find-the-house}

Si estás intentando buscar una ubicación utilizando la estructura *Ciudad → Calle → Número de casa* y no se devuelven resultados, considera los siguientes consejos y posibles causas:

> **Consejo**: Intenta una búsqueda de texto completo sin especificar la ciudad, ya que la dirección podría estar listada bajo una ciudad diferente.

**Posibles problemas:**

- **Falta la casa**. La casa podría no estar listada en OpenStreetMap, o podría estar presente pero sin números asignados. Puedes verificar esto con un ejemplo [aquí](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).

- **Nombre de calle incorrecto**. El nombre de la calle asociado a la casa podría ser incorrecto en OpenStreetMap. Comprueba la etiqueta `addr:street` para asegurarte de que el nombre de la calle coincide exactamente con el de la información de etiquetado de la calle.

- **Problema con Nominatim**. La casa puede estar presente en OpenStreetMap pero no se encuentra a través de Nominatim (el motor de búsqueda utilizado por OpenStreetMap). Puedes obtener más información sobre cómo solucionar problemas relacionados con direcciones [aquí](https://wiki.openstreetmap.org/wiki/Addresses).

- **Posible problema en OsmAnd**. Si la casa está presente en Nominatim pero aún no se encuentra en OsmAnd, el problema podría ser específico de OsmAnd. Puedes contribuir a resolverlo investigando más a fondo. Se pueden encontrar más detalles en este [artículo técnico](../../technical/algorithms/trace-address-search-issues.md).


## Rutas y Puntos {#tracks-and-points}

### Cómo marcar diferentes lugares en el mapa {#how-to-mark-different-places-on-the-map}

Puedes dejar notas y marcar ubicaciones en el mapa de varias formas, cada una con diferentes propósitos:

- *[Favoritos](../personal/favorites.md)*. Son puntos permanentes en el mapa donde puedes añadir descripciones. Para crear un Favorito, haz un *toque largo → toca Añadir*. Los Favoritos son excelentes para marcar lugares que visitas con frecuencia o que quieres guardar para futuras referencias.

- *[Marcadores](../personal/markers.md)*. Los marcadores son puntos temporales, a menudo utilizados para navegación o planificación. Pueden mostrar la distancia desde tu ubicación actual u otro punto, y se pueden eliminar rápidamente cuando ya no son necesarios. Para añadir un Marcador, haz un *toque largo → toca Marcador*.

- *[Puntos de paso](../map/tracks/index.md#types-of-tracks)*. Los puntos de paso se colocan a lo largo de las rutas que creas, ayudándote a marcar paradas o ubicaciones específicas a lo largo de tu viaje. También puedes añadir descripciones a estos puntos. Para añadir un punto de paso, haz un *toque largo en el mapa → Direcciones → añadir como punto de paso intermedio*.

- *[Notas de audio/vídeo](../plugins/audio-video-notes.md)*. Estas notas te permiten adjuntar archivos de audio, vídeo o fotos a ubicaciones específicas en el mapa. Para habilitarlas, activa el plugin de Notas de audio/vídeo en *Menú de OsmAnd → Plugins*. Para añadir una, haz un *toque largo → Acciones → elige el archivo necesario para adjuntar*.

- *[Notas OSM](../plugins/osm-editing.md#create--modify-osm-note)*. Son informes que puedes crear para resaltar errores o información faltante en OpenStreetMap. Habilita el plugin de edición OSM en el *Menú de OsmAnd → Plugins*. Para añadir una Nota OSM, haz un *toque largo → Acciones → Añadir nota OSM*.

- *[POI (Puntos de Interés)](../map/point-layers-on-map.md#points-of-interest-pois)*. Son puntos predefinidos de la fuente de datos de OpenStreetMap, como restaurantes, parques o puntos de referencia. Puedes ver los POI habilitando la superposición de POI en el menú *Configurar mapa* o seleccionando una categoría.

- *[Buscar](../search/index.md)*. También puedes usar la función de búsqueda para encontrar y marcar lugares en el mapa.