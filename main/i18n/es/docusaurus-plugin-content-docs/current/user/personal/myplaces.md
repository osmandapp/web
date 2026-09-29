---
source-hash: d5de9c3084442f355b9b6536f2e73e330ece35ee360363e944195eaf5ddfe9fb
sidebar_position: 6
title:  Mis lugares
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## Resumen {#overview}

**Mis lugares** es el centro neurálgico de la aplicación OsmAnd para gestionar y personalizar todos los datos personales. Puede utilizar esta sección para organizar [Puntos favoritos](#favorites) marcados como importantes o visitados con frecuencia. La pestaña [Tracks](#tracks) le permite ver, importar, grabar y crear archivos GPX para ayudarle a mantener un historial detallado de sus rutas y viajes. También puede gestionar sus [Ediciones de OpenStreetMap](#openstreetmap-edits), facilitando la contribución a las mejoras y actualizaciones de los mapas. El plugin [Notas de audio/vídeo](#audiovideo-notes) y los widgets permiten a los usuarios de Android crear y guardar notas multimedia relacionadas con ubicaciones específicas, añadiendo contexto a sus viajes. En iOS, Mis lugares también proporciona acceso a las [Guías de viaje](#travel-guides) marcadas como favoritas, lo que le permite organizar y abrir rápidamente el contenido de viaje guardado.

## Menú Mis lugares {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places android](@site/static/img/personal/my_places_android_new.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places ios](@site/static/img/personal/my_places_ios_2.png)  ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.webp)

</TabItem>

</Tabs>

Mis lugares está organizado por categorías. Seleccione una pestaña para gestionar los datos correspondientes.

**Nota:** Todos los datos almacenados en el menú *Mis lugares* se pueden mover utilizando un formato especial `.osf` a través de las aplicaciones de su dispositivo. Este proceso simplifica el guardado y la transferencia de datos entre dispositivos y le permite compartirlos con otros usuarios de OsmAnd. 

### Favoritos {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.webp)

</TabItem>

</Tabs>

**Favoritos** le permiten marcar lugares importantes o visitados con frecuencia. Estos puntos favoritos se organizan en carpetas y se pueden personalizar con diferentes colores, formas e iconos. Puede navegar rápidamente a cualquier lugar favorito a través del menú **Mis lugares** sin necesidad de buscarlo repetidamente.

Para obtener instrucciones completas, consulte el artículo [Favoritos](../personal/favorites.md).

### Tracks {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.webp)

</TabItem>

</Tabs>

**Tracks** ofrece potentes herramientas para grabar, crear y gestionar rutas dentro de OsmAnd. Se pueden utilizar para la [navegación](../navigation/setup/gpx-navigation.md), la [grabación de viajes](../plugins/trip-recording.md) o la [integración](../personal/tracks/manage-tracks.md#import) de archivos GPX externos.

Para obtener una guía completa, consulte el artículo [Gestionar Tracks](../personal/tracks/manage-tracks.md).

### Ediciones de OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm_ios.webp)

</TabItem>

</Tabs>

La función **Ediciones de OpenStreetMap** de OsmAnd le permite contribuir a la comunidad cartográfica mundial añadiendo, modificando o comentando datos de mapas.

Consulte el [plugin de edición OSM](../plugins/osm-editing.md) para obtener instrucciones paso a paso.

### Notas de audio/vídeo {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

El **plugin de Notas de audio/vídeo** le permite crear notas multimedia vinculadas a ubicaciones específicas del mapa. Estas notas se almacenan en **Mis lugares** en la **Pestaña Notas A/V**.

Para obtener más información, visite la página del [plugin de Notas de audio/vídeo](../plugins/audio-video-notes.md).

### Guías de viaje (iOS) {#travel-guides}

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_travel_guides"/>*

![Travel Guides iOS](@site/static/img/plan-route/travel_guides_ios.webp)

La sección **Viajes** contiene guías de viaje y artículos marcados como favoritos guardados para acceso sin conexión. Puede abrir, organizar y gestionar rápidamente su contenido de viaje guardado desde Mis lugares. La sección Viajes solo se muestra cuando se ha marcado como favorito más de una guía de viaje.

Para obtener información detallada, consulte el artículo [Guías de viaje](../plan-route/travel-guides.md).

## Artículos relacionados {#related-articles}

- [Gestionar Tracks](../personal/tracks/manage-tracks.md#import--export-track)
- [Favoritos](../personal/favorites.md)
- [Edición de OpenStreetMap](../plugins/osm-editing.md)
- [Notas de audio/vídeo](../plugins/audio-video-notes.md)
- [Guías de viaje](../plan-route/travel-guides.md)
- [Historial de búsqueda](../search/search-history.md#export-and-share)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)