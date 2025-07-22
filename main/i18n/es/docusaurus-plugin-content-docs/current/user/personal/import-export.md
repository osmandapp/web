---
source-hash: 449ba8486f8036d2bbad4837dd278ab4b240f56f3282ba8c8550a0e6a1d7cc6b
sidebar_position: 10
title: Importar / Exportar
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Descripción general {#overview}

Las herramientas de **Importación** y **Exportación** en OsmAnd te permiten gestionar tus datos. Puedes mover tus perfiles, favoritos, rutas y otras configuraciones usando un formato especial a través de las aplicaciones en tu dispositivo. Este proceso simplifica el guardado y la transferencia de datos entre dispositivos y te permite compartirlos con otros usuarios de OsmAnd.

:::note Tamaño grande
*Si el tamaño de los datos seleccionados es significativo, la aplicación tardará en preparar el archivo `.osf`.*
:::


## Exportar / Importar datos {#export--import-data}

Las funciones de *Importar* y *Exportar* te permiten guardar datos de **archivos** `.osf` generados o usar [fuentes en línea](../map/raster-maps.md), lo que posibilita restaurar la información después de una reinstalación.

**Tipos de datos** disponibles para importar/exportar:

- **Configuración:**
        [Perfiles](../personal/profiles.md#actions), &nbsp;[Configuración general de OsmAnd](../personal/global-settings.md), &nbsp;[Colores](../personal/color-palette-schemes.md), &nbsp;[Acción rápida](../widgets/quick-action.md), &nbsp;[Tipo de PDI](../map/point-layers-on-map.md#poi-types), &nbsp;[Evitar carretera](../map/map-context-menu.md#avoid-road).
- **Mis lugares:**
        [Favoritos](../personal/favorites.md#export--import), &nbsp;[Rutas](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[Notas OSM*, *Ediciones OSM](../plugins/osm-editing.md#create--modify-poi), &nbsp;[Notas A/V](../plugins/audio-video-notes.md), &nbsp;[Marcadores de mapa](../personal/markers.md), &nbsp;[Historial de marcadores*, *Historial de búsqueda*, *Historial de navegación](../personal/global-settings.md#history), &nbsp;*Itinerario*.
- **Recursos:**
        [Estilo de renderizado](../map/vector-maps.md#custom-map-style), &nbsp;[Rutas](../navigation/routing/osmand-routing.md), &nbsp;[Motores de enrutamiento en línea](../navigation/routing/online-routing.md), &nbsp;[Fuentes de mapas*, *Mapas estándar/sin conexión](../map/raster-maps.md), &nbsp;[Mapas de Wikipedia y Viajes](../plan-route/travel-guides.md), &nbsp;[Mapas náuticos](../plugins/nautical-charts.md), &nbsp;[Mapas de carreteras](../map/vector-maps.md#road-style), &nbsp;[Mapas de topografía](../plugins/topography.md), &nbsp;[Indicaciones de voz (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Indicaciones de voz (grabadas)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Copia de seguridad de favoritos](../personal/favorites.md#automatic-favorites-backup).


### Exportar {#export}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Acciones de perfiles Exportar Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Copia de seguridad local Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Acciones de perfiles Exportar iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png) ![Acciones de perfiles Exportar iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Todos los datos que hayas configurado y creado pueden exportarse usando el ***menú Exportar***. El menú consta de tres grupos: **Configuración**, **Mis lugares** y **Recursos**, que contienen todas las carpetas de archivos disponibles. Puedes seleccionar los archivos que deseas exportar en cada carpeta, uno a la vez o todos a la vez. **Todos los archivos exportados se guardan en formato `.osf`**.


### Importar {#import}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*

| |
| --- | --- | --- |
| ![Acciones de perfiles Importar Android](@site/static/img/personal/profiles/profile_actions_import_android.png) | ![Acciones de perfiles Importar 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) | ![Acciones de perfiles Importar 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*

| |
| --- | --- | --- |
| ![Acciones de perfiles Importar iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) | ![Acciones de perfiles Importar 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) | ![Acciones de perfiles Importar 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) |

</TabItem>

</Tabs>

Abre y restaura archivos `.osf`. Toca el archivo en el administrador de archivos del dispositivo o usa el botón de acción.

- *Algunos elementos ya existen*. Puedes usar esta función para guardar ambos archivos o reemplazarlos todos.
- *Reiniciar*. Después de importar los archivos, la aplicación debe reiniciarse.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) es el recurso alternativo que necesitas para guardar tu configuración personal y los datos de la aplicación. Puedes usar estos datos en cualquier dispositivo disponible para instalar la aplicación OsmAnd o al usar la aplicación de escritorio. Cualquier cambio que realices se puede sincronizar.


## Prevención de pérdida de datos {#preventing-data-loss}

En las versiones de *Android* e *iOS* de OsmAnd, si **desinstalas** completamente la aplicación o seleccionas **Borrar datos** en tu dispositivo en la información de la aplicación del menú de Configuración, la carpeta de datos también se eliminará del administrador de archivos del dispositivo. Si no tomas precauciones, esto resultará en la **pérdida de todos los mapas descargados para datos de OsmAnd, todos los Favoritos guardados, rutas GPX, indicaciones de voz (TTS) y [otros datos](#export--import-data).**

Hay dos formas de guardar tus datos antes de reinstalar la aplicación OsmAnd:

- Usa [OsmAnd Cloud](#osmand-cloud). Puedes hacer una copia de seguridad de tus datos usando las funciones de OsmAnd como [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), como una versión gratuita, o [OsmAnd Pro](../purchases/index.md), una suscripción de pago con más funciones.
- [Exporta el archivo OSF](#export) con tus datos. Copia el archivo `.osf` a una carpeta en tu dispositivo o en OsmAnd Cloud. Después de reinstalar OsmAnd, [importa este archivo `.osf`](#import) a la aplicación OsmAnd.


## Artículos relacionados {#related-articles}

- [Perfiles (Configuración)](./profiles.md)
- [Gestionar rutas](../personal/tracks/manage-tracks.md#import--export-track)
- [Historial de búsqueda](../search/search-history.md#export-and-share)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

1. Cómo transferir Favoritos y Rutas a un nuevo dispositivo. [(verificar)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. Tengo un archivo GPX, ¿cómo lo importo a OsmAnd? [(verificar)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Eliminación de datos del mapa después de la actualización de la aplicación (si se selecciona "Almacenamiento multiusuario 1"). [(verificar)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)

> *Última actualización: enero de 2025*