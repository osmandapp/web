---
source-hash: da8767bf5368b88ca2820e7585237507258e046e1e07f73d6fe233dc66687628
sidebar_position: 1
title:  Configuración
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
    - Puedes [descargar y abrir el archivo](../navigation/setup/gpx-navigation.md) usando un navegador de archivos o un servicio en la nube como Dropbox, y seleccionar OsmAnd como la aplicación de destino.
    - Alternativamente, coloca el archivo en la carpeta de inicio de OsmAnd: `osmand/tracks/(subcarpeta_opcional)/tu_archivo.gpx`.

- **iOS**
    - Para abrir [un archivo GPX en OsmAnd](../navigation/setup/gpx-navigation.md), simplemente descárgalo y elige OsmAnd como la aplicación para abrirlo. El archivo estará disponible para su uso dentro de la aplicación.

### Las curvas de nivel o los sombreados no aparecen {#contour-lines-or-hillshades-do-not-show-up}

Lee más sobre el [plugin de Topografía](../plugins/topography.md).


## Cómo habilitar las fuentes del sistema (Android) {#how-to-enable-system-fonts-android}

A partir de la versión 4.9 de Android, OsmAnd integra la fuente del sistema de tu dispositivo en la interfaz de la aplicación, optimizando su diseño al eliminar el uso de fuentes mixtas. La fuente del sistema se aplica automáticamente a todos los elementos de la interfaz de usuario.

- OsmAnd utiliza la fuente del sistema predeterminada de tu dispositivo en todos los elementos de la interfaz de usuario.
- El cambio a la fuente del sistema es automático. No necesitas configurar ningún ajuste en la aplicación para esta función.
- Esta función no afecta las fuentes que se muestran en el mapa.


## OsmAnd 4.4 (iOS) {#osmand-44-ios}

OsmAnd 4.4 para dispositivos iOS no está disponible para versiones de iOS anteriores a iOS 15.

Esto significa que para instalar OsmAnd 4.4 necesitas actualizar tu sistema operativo al menos a iOS 15 o una versión más reciente.


<!--
## Storage on an SD card (Android) {#storage-on-an-sd-card-android}

:::note
When you *turn on a USB drive to share files* with a computer or disconnect the SD card through system settings, the external drive is disconnected from the device and all applications running on the external drive are **immediately terminated**. You can [read more here](https://developer.android.com/guide/topics/data/install-location).
:::

### To move the OsmAnd home (maps) folder to an external SD card: {#to-move-the-osmand-home-maps-folder-to-an-external-sd-card}

-   Go to *Settings (on the start screen) →  OsmAnd Settings → Data storage folder*
-   Change the value to a path pointing to the external SD card, on many
    Android systems may contain `/storage/extSdCard` or similar.
    Please note that some versions of Android strictly limit your choice
    of which path will be write-accessible for apps.
-   You are then asked if the contents of the OsmAnd data folder should be moved from
    internal memory to the external SD card.
    You may also perform this manually using a built-in file manager app on the device or via
    connecting the device to a computer as external storage and performing the move from there.


### How do I use my SD card with OsmAnd under Android 4.4+ and 5 {#how-do-i-use-my-sd-card-with-osmand-under-android-44-and-5}

If you update your Android to version 4.4.x, you will experience a known
Android issue with the `WRITE_EXTERNAL_STORAGE` permission: Android has
changed the rules so that from now on no application can write to the
external SD card anywhere outside its new standard folder
`Android/data/[PACKAGE-NAME]`. If OsmAnd was installed before updating
your device to Android 4.4.x, it will continue to work (read-only) with
the old, non-standard osmand folder, but won't be able to update any map
and other files there.

Solutions:

-   Move OsmAnd's data folder osmand to the internal storage. \
     **Drawback:** Internal storage can be rather small.
-   Move OsmAnd's data folder osmand into its standard SD folder, \
    for OsmAnd+ : `(extSdCard)/Android/data/net.osmand.plus/files` \
    for OsmAnd : `(extSdCard)/Android/data/net.osmand/files` \
     **Caution:** Whenever you uninstall OsmAnd now, all your data will
    be erased as well! (Unless you unmount your SD card, or rename the
    net.osmand(.plus) folder before de-installation.)

If you manually want to perform the necessary copies/moves, either use a
PC to perform this action on the SD card, or on the device itself use
the file manager tool **which came pre-installed with your Android**
(only these methods will have the necessary write permission). All copy operations
may also be invoked in OsmAnd itself via `Menu/Settings/General/Data
storage folder` but the copy operations may take a long time or result in
errors (e.g. if the SD card is too full).
-->


## Copiar paquete de mapas ráster creado en PC {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Importar sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Importar sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)  

</TabItem>

</Tabs>

Los paquetes de mapas se pueden guardar en dos formatos: [SQLite y Metainfo](https://osmand.net/docs/user/map/raster-maps). Después de crear tu paquete de mapas, sigue estos pasos para moverlo a OsmAnd:

- **Para Android**. Accede al almacenamiento de tu dispositivo y copia el(los) archivo(s) de tu PC a la carpeta `BASE_OSMAND_STORAGE/tiles_`. Alternativamente, puedes descargar el archivo de tu correo electrónico, la nube o un mensajero, y abrirlo con la aplicación OsmAnd. El paquete de mapas se añadirá automáticamente a tu lista de mapas en línea.

- **Para iOS**. Descarga el archivo de iTunes o un mensajero, luego ábrelo con la aplicación OsmAnd. El paquete de mapas se añadirá automáticamente a tu lista de mapas en línea.