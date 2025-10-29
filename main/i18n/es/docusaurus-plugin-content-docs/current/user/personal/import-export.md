---
source-hash: 1cb3cb625144df1fdde1a89546eb0dd6bf2c4217b3e8431939d976cba2b359fb
sidebar_position: 10
title:  Importar / Exportar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Resumen {#overview}

Las herramientas de **Importar** y **Exportar** en OsmAnd le permiten gestionar sus datos. Puede mover sus perfiles, favoritos, pistas y otros ajustes utilizando un formato especial a través de las aplicaciones de su dispositivo. Este proceso simplifica el guardado y la transferencia de datos entre dispositivos y le permite compartirlos con otros usuarios de OsmAnd.

:::note Tamaño grande
*Si el tamaño de los datos seleccionados es significativo, la aplicación tardará un tiempo en preparar el archivo `.osf`.*
:::


## Exportar / Importar datos {#export--import-data}

*Importar* y *Exportar* le permiten guardar datos de **archivos** `.osf` generados o utilizar [fuentes en línea](../map/raster-maps.md), lo que permite restaurar la información después de la reinstalación.

**Tipos de datos** disponibles para importar/exportar:

- **Ajustes:**  
        [Perfiles](../personal/profiles.md#actions), &nbsp;[OsmAnd/Ajustes generales](../personal/global-settings.md), &nbsp;[Colores](../personal/color-palette-schemes.md), &nbsp;[Acción rápida](../widgets/quick-action.md), &nbsp;[Tipo de PDI](../map/point-layers-on-map.md#poi-types), &nbsp;[Evitar carretera](../map/map-context-menu.md#avoid-road).
- **Mis Lugares:**  
        [Favoritos](../personal/favorites.md#export--import), &nbsp;[Pistas](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[Notas OSM*, *Ediciones OSM](../plugins/osm-editing.md#create--modify-poi), &nbsp;[Notas A/V](../plugins/audio-video-notes.md), &nbsp;[Marcadores de mapa](../personal/markers.md), &nbsp;[Historial de marcadores*, *Historial de búsqueda*, *Historial de navegación](../personal/global-settings.md#history), &nbsp;*Itinerario*.
- **Recursos:**  
        [Estilo de renderizado](../map/vector-maps.md#custom-map-style), &nbsp;[Enrutamiento](../navigation/routing/osmand-routing.md), &nbsp;[Motores de enrutamiento en línea](../navigation/routing/online-routing.md), &nbsp;[Fuentes de mapa*, *Mapas estándar/sin conexión](../map/raster-maps.md), &nbsp;[Mapas de Wikipedia y Viajes](../plan-route/travel-guides.md), &nbsp;[Cartas náuticas](../plugins/nautical-charts.md), &nbsp;[Mapas de carreteras](../map/vector-maps.md#road-style), &nbsp;[Mapas topográficos](../plugins/topography.md), &nbsp;[Instrucciones de voz (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Instrucciones de voz (grabadas)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Copia de seguridad de favoritos](../personal/favorites.md#automatic-favorites-backup).


### Exportar {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Acciones de Perfiles Exportar Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Copia de seguridad local Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Acciones de Perfiles Exportar iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Acciones de Perfiles Exportar iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Todos los datos que ha configurado y creado se pueden exportar utilizando el ***Menú de exportación***. El menú consta de tres grupos: **Ajustes**, **Mis Lugares** y **Recursos**, que contienen todas las carpetas de archivos disponibles. Por ejemplo, en la sección de Recursos, los mapas se agrupan por tipo en *<Translate android="true" ids="standard_maps"/>, <Translate android="true" ids="wikipedia_and_travel_maps"/>, <Translate android="true" ids="nautical_maps"/>*, y *<Translate android="true" ids="topography_maps"/>* para una navegación más fácil y una exportación selectiva. Puede seleccionar los archivos que desea exportar en cada carpeta, uno por uno o todos a la vez. **Todos los archivos exportados se guardan en formato `.osf`**.  


### Importar {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

![Acciones de Perfiles Importar Android](@site/static/img/personal/profiles/profile_actions_import_android.png) ![Acciones de Perfiles Importar 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) 

<!-- ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) -->

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  


![Acciones de Perfiles Importar iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) ![Acciones de Perfiles Importar 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) 
<!--  ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) -->

</TabItem>

</Tabs>

Abre y restaura archivos `.osf`. Toque el archivo en el gestor de archivos del dispositivo o utilice el botón de acción.

- *Algunos elementos ya existen*. Puede utilizar esta función para guardar ambos archivos o reemplazarlos todos.
- *Reiniciar*. Después de importar los archivos, la aplicación debe reiniciarse.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) es el recurso alternativo que necesita para guardar sus ajustes personales y los datos de la aplicación. Puede utilizar estos datos en cualquier dispositivo disponible para instalar la aplicación OsmAnd o al utilizar la aplicación de escritorio. Cualquier cambio que realice se puede sincronizar.


## Prevenir la pérdida de datos {#preventing-data-loss}

En las versiones de *Android* e *iOS* de OsmAnd, si **desinstala** completamente la aplicación o selecciona **Borrar datos** en el menú de Ajustes de información de la aplicación de su dispositivo, la carpeta de datos también se eliminará del gestor de archivos del dispositivo. Si no toma precauciones, esto resultará en la **pérdida de todos los mapas descargados para los datos de OsmAnd, todos los Favoritos guardados, las pistas GPX, las instrucciones de voz (TTS) y [otros datos](#export--import-data).**

Hay dos formas de guardar sus datos antes de reinstalar la aplicación OsmAnd:

- Usar [OsmAnd Cloud](#osmand-cloud). Puede hacer una copia de seguridad de sus datos utilizando las funciones de OsmAnd como [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), como versión gratuita, o [OsmAnd Pro](../purchases/index.md), una suscripción de pago con más funciones.
- [Exportar archivo OSF](#export) con sus datos. Copie el archivo `.osf` a una carpeta en su dispositivo o en OsmAnd Cloud. Después de reinstalar OsmAnd, [importe este archivo `.osf`](#import) a la aplicación OsmAnd.


## Artículos relacionados {#related-articles}

- [Perfiles (Ajustes)](./profiles.md)
- [Gestionar Pistas](../personal/tracks/manage-tracks.md#import--export-track)
- [Historial de búsqueda](../search/search-history.md#export-and-share)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

1. Cómo transferir Favoritos y Pistas a un nuevo dispositivo. [(verificar)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. Tengo un archivo GPX, ¿cómo lo importo a OsmAnd? [(verificar)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Eliminación de datos de mapas después de la actualización de la aplicación (si se selecciona "Almacenamiento multiusuario 1"). [(verificar)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)