---
source-hash: 88e4f7fd45f03ba362eef617efece8cbb32eac46a5e30d86a6db12675354fa56
sidebar_position: 1
title: Configuración
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Configuración inicial {#initial-setup}

### Cómo recuperar datos {#how-to-recover-data}

Para evitar la pérdida de datos, asegúrate de que tus datos personales, rutas y mapas estén respaldados. OsmAnd ofrece opciones para exportar tus datos a varios formatos. En caso de pérdida de datos o cambio de dispositivo, sigue [estos pasos](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss) para restaurar tus datos desde una copia de seguridad.

### Cómo transferir Favoritos y Rutas a un nuevo dispositivo {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- El método más sencillo es exportar un perfil con los datos necesarios: *Menú → Ajustes → Exportar →* selecciona los datos que deseas exportar.
- Alternativamente, puedes hacer una copia de seguridad de todos tus datos del dispositivo anterior copiando la carpeta ubicada en *Ajustes → Ajustes de OsmAnd → Carpeta de almacenamiento de datos* (ruta predeterminada: `Android/data/net.osmand.plus`). Luego, pega el contenido de esta carpeta en la carpeta de almacenamiento de datos de tu nuevo dispositivo.

## Importar archivos {#import-files}

### Tengo un archivo GPX, ¿cómo lo importo a OsmAnd? {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **Android**
    - Puedes [descargar y abrir el archivo](../navigation/setup/gpx-navigation.md) usando un explorador de archivos o un servicio en la nube como Dropbox, y seleccionar OsmAnd como la aplicación de destino.
    - Alternativamente, coloca el archivo en la carpeta principal de OsmAnd: `osmand/tracks/(subcarpeta_opcional)/tu_archivo.gpx`.

- **iOS**
    - Para abrir [un archivo GPX en OsmAnd](../navigation/setup/gpx-navigation.md), simplemente descárgalo y elige OsmAnd como la aplicación para abrirlo. El archivo estará entonces disponible para su uso dentro de la aplicación.

### Las líneas de contorno o los sombreados no aparecen {#contour-lines-or-hillshades-do-not-show-up}

Lee más sobre el [plugin de Topografía](../plugins/topography.md).

## Cómo habilitar las fuentes del sistema (Android) {#how-to-enable-system-fonts-android}

A partir de la versión 4.9 de Android, OsmAnd integra la fuente del sistema de tu dispositivo en la interfaz de la aplicación, optimizando su diseño al eliminar el uso de fuentes mixtas. La fuente del sistema se aplica automáticamente a todos los elementos de la interfaz de usuario.

- OsmAnd utiliza la fuente del sistema predeterminada de tu dispositivo en todos los elementos de la interfaz de usuario.
- El cambio a la fuente del sistema es automático. No necesitas configurar ningún ajuste en la aplicación para esta función.
- Esta función no afecta las fuentes que se muestran en el mapa.

## OsmAnd 4.4 (iOS) {#osmand-44-ios}

OsmAnd 4.4 para dispositivos iOS no está disponible para versiones de iOS anteriores a iOS 15.

Esto significa que para instalar OsmAnd 4.4 necesitas actualizar tu sistema operativo a al menos iOS 15 o una versión más reciente.

<!--
## Almacenamiento en una tarjeta SD (Android) {#storage-on-an-sd-card-android}

:::note
Cuando *activas una unidad USB para compartir archivos* con un ordenador o desconectas la tarjeta SD a través de la configuración del sistema, la unidad externa se desconecta del dispositivo y todas las aplicaciones que se ejecutan en la unidad externa se **terminan inmediatamente**. Puedes [leer más aquí](https://developer.android.com/guide/topics/data/install-location).
:::

### Para mover la carpeta principal de OsmAnd (mapas) a una tarjeta SD externa: {#to-move-the-osmand-home-maps-folder-to-an-external-sd-card}

-   Ve a *Ajustes (en la pantalla de inicio) → Ajustes de OsmAnd → Carpeta de almacenamiento de datos*
-   Cambia el valor a una ruta que apunte a la tarjeta SD externa, en muchos
    sistemas Android puede contener `/storage/extSdCard` o similar.
    Ten en cuenta que algunas versiones de Android limitan estrictamente tu elección
    de qué ruta será accesible para escritura para las aplicaciones.
-   Luego se te preguntará si el contenido de la carpeta de datos de OsmAnd debe moverse de
    la memoria interna a la tarjeta SD externa.
    También puedes realizar esto manualmente usando una aplicación de administrador de archivos incorporada en el dispositivo o
    conectando el dispositivo a un ordenador como almacenamiento externo y realizando el movimiento desde allí.


### ¿Cómo uso mi tarjeta SD con OsmAnd en Android 4.4+ y 5? {#how-do-i-use-my-sd-card-with-osmand-under-android-44-and-5}

Si actualizas tu Android a la versión 4.4.x, experimentarás un problema
conocido de Android con el permiso `WRITE_EXTERNAL_STORAGE`: Android ha
cambiado las reglas de modo que a partir de ahora ninguna aplicación puede escribir en la
tarjeta SD externa en ningún lugar fuera de su nueva carpeta estándar
`Android/data/[PACKAGE-NAME]`. Si OsmAnd se instaló antes de actualizar
tu dispositivo a Android 4.4.x, seguirá funcionando (solo lectura) con
la antigua carpeta osmand no estándar, pero no podrá actualizar ningún mapa
y otros archivos allí.

Soluciones:

-   Mueve la carpeta de datos de OsmAnd osmand al almacenamiento interno. \
     **Desventaja:** El almacenamiento interno puede ser bastante pequeño.
-   Mueve la carpeta de datos de OsmAnd osmand a su carpeta SD estándar, \
    para OsmAnd+ : `(extSdCard)/Android/data/net.osmand.plus/files` \
    para OsmAnd : `(extSdCard)/Android/data/net.osmand/files` \
     **Precaución:** ¡Cada vez que desinstales OsmAnd ahora, todos tus datos serán
    borrados también! (A menos que desmontes tu tarjeta SD, o renombres la
    carpeta net.osmand(.plus) antes de la desinstalación).

Si deseas realizar manualmente las copias/movimientos necesarios, utiliza un
PC para realizar esta acción en la tarjeta SD, o en el propio dispositivo utiliza
la herramienta de administrador de archivos **que venía preinstalada con tu Android**
(solo estos métodos tendrán el permiso de escritura necesario). Todas las operaciones de copia
también se pueden invocar en el propio OsmAnd a través de `Menú/Ajustes/General/Carpeta de
almacenamiento de datos`, pero las operaciones de copia pueden tardar mucho tiempo o resultar en
errores (por ejemplo, si la tarjeta SD está demasiado llena).
-->

## Copiar paquete de mapas ráster creado en PC {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Importar sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Importar sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)

</TabItem>

</Tabs>

Los paquetes de mapas se pueden guardar en dos formatos: [SQLite y Metainfo](https://osmand.net/docs/user/map/raster-maps). Después de crear tu paquete de mapas, sigue estos pasos para moverlo a OsmAnd:

- **Para Android**. Accede al almacenamiento de tu dispositivo y copia el(los) archivo(s) de tu PC a la carpeta `BASE_OSMAND_STORAGE/tiles_`. Alternativamente, puedes descargar el archivo de tu correo electrónico, la nube o un mensajero, y abrirlo con la aplicación OsmAnd. El paquete de mapas se añadirá automáticamente a tu lista de mapas en línea.

- **Para iOS**. Descarga el archivo de iTunes o de un mensajero, luego ábrelo con la aplicación OsmAnd. El paquete de mapas se añadirá automáticamente a tu lista de mapas en línea.