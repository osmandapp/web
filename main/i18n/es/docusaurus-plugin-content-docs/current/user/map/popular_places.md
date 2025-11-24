---
source-hash: 729e2be1334766fc7bf3aecc088333d8c9184af20c6e90fa4a5b8a7ab28df7b2
sidebar_position: 8
title: Lugares populares
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

<InfoIncompleteArticle/>


## Resumen {#overview}

La función **Lugares populares** de OsmAnd destaca puntos de referencia y atracciones notables utilizando datos abiertos estructurados de [Wikidata](https://www.wikidata.org) y [Wikipedia](https://www.wikipedia.org/). Ayuda a los usuarios a explorar destinos conocidos con descripciones multilingües y fotos.

Cada lugar incluido en esta función está vinculado a un **ID de Wikidata**, lo que permite a OsmAnd mostrar nombres verificados, imágenes de vista previa y enlaces a artículos de Wikipedia. Esta herramienta **no** muestra todos los puntos de OpenStreetMap (OSM). Se limita a los PDI con referencias de Wikidata.

Actualmente, la base de datos seleccionada incluye aproximadamente **50.000 a 150.000 lugares mejor valorados** en todo el mundo, seleccionados entre más de **1 millón** de objetos de Wikidata + OSM.

:::note
*Esta es la primera versión de la función Lugares populares. Los comentarios son bienvenidos en [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lugares populares](@site/static/img/map/popular_places/popular_places.png) ![Lugares populares](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Fuentes de datos

**Los Lugares populares** se basan en contenido estructurado de [Wikidata](https://www.wikidata.org) y [Wikipedia](https://www.wikipedia.org/).

Solo se muestran los PDI con un **ID de Wikidata** vinculado. Estos ID conectan los objetos del mapa con nombres, descripciones e imágenes verificados.

Puede ver el enlace de Wikidata directamente en el [Menú contextual del mapa](../map/map-context-menu.md). Al tocar la etiqueta de Wikidata se abre la página completa del objeto en el sitio web de Wikidata.

Aprenda a encontrar un ID de Wikidata: [Wikipedia: Encontrar un ID de Wikidata](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Cómo usar {#how-to-use}

<InfoAndroidOnly/>

La función **Lugares populares** incluye tanto una lista seleccionada de puntos de referencia cercanos como una capa de PDI basados en Wikipedia en el mapa.

Hay dos formas principales de acceder a esta función:

- **Versión gratuita**  
  Acceda a través de [Búsqueda](#explore-in-search) para explorar lugares cercanos en una vista de lista.  
  *<Translate android="true" ids="android_button_seq"/>*. Ir a: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Versiones de pago** *(Maps+ y OsmAnd Pro)*  
  Active la superposición visual en [Configurar mapa](#enable-layer).  
  *<Translate android="true" ids="android_button_seq"/>*. Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  En este modo, los PDI populares aparecen directamente en el mapa con vistas previas en miniatura y contenido de Wikipedia.

  Puede cambiar entre fuentes de Wikipedia **en línea** y **fuera de línea** en la configuración de la superposición. Obtenga más información en [Activar capa](#enable-layer).


## Explorar en Búsqueda {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Modo Explorar](@site/static/img/map/popular_places/popular_places_search.png)  
![Modo Explorar](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

La sección **<Translate android="true" ids="popular_places_nearby"/>** muestra una lista desplazable de los puntos de referencia mejor valorados cerca de su ubicación actual. Cada elemento incluye:

- Nombre del lugar.
- Descripción breve.
- Etiqueta de categoría de PDI.
- Distancia y dirección.
- Imagen en miniatura (si está disponible).

Toque **Mostrar todo** para ver la lista completa, o **Mostrar en el mapa** para mostrar todos los PDI de la lista en el mapa.

Al tocar cualquier lugar se abre el [menú contextual de PDI](./map-context-menu.md), donde puede previsualizar fotos y acceder al [contenido de Wikipedia](../plugins/wikipedia.md) relacionado.

:::tip
El modo Explorar basado en la búsqueda funciona **solo en línea** en la versión gratuita.  
Para usarlo **fuera de línea**, necesita una suscripción a [Maps+ u OsmAnd Pro](../purchases/android.md) y haber descargado los [mapas de Wikipedia](../plugins/wikipedia.md).
:::


## Activar capa {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Menú de lugares populares](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

La función **Lugares populares (Wikipedia)** está disponible en el [menú Configurar mapa](./configure-map-menu.md). Para mostrar lugares populares directamente en el mapa, active la capa de PDI con datos de Wikipedia utilizando imágenes de Wikidata.

Antes de usar esta función:

- Asegúrese de que el [Plugin de Wikipedia](../plugins/wikipedia.md) esté activado.
- Descargue los datos de Wikipedia para su región si desea usarlos sin conexión.

### Opciones de capa

Una vez activada, las siguientes opciones estarán disponibles:

- **<Translate android="true" ids="poi_osmwiki"/>** – Activa/desactiva los PDI de Wikipedia en el mapa.

- **Fuente de PDI** – Cambiar entre:
  - *Modo sin conexión* (los artículos de Wikipedia deben estar descargados).
  - Modo *Solo en línea* (utiliza datos e imágenes en tiempo real).

- **<Translate android="true" ids="shared_string_language"/>** – Seleccione el idioma para las descripciones de Wikipedia.

- **<Translate android="true" ids="show_image_previews"/>** – Muestra miniaturas de imágenes de Wikidata junto a los PDI.

Al tocar un PDI en el mapa se abre el [menú contextual de PDI](./map-context-menu.md), donde puede ver [fotos en línea](#online-photos) y acceder a los [artículos de Wikipedia](../plugins/wikipedia.md) vinculados.


## Fotos en línea {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú contextual de Fotos en línea Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú contextual de Fotos en línea iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Esta es una sección dentro del [menú contextual de PDI](./map-context-menu.md) que muestra una vista previa de la foto del Lugar Popular (Wikipedia) seleccionado. Puede desplazarse horizontalmente para navegar por las fotos disponibles, o tocar cualquier imagen para abrirla en [modo de pantalla completa](#gallery).

Las imágenes vistas en línea se almacenan en caché automáticamente para acceso sin conexión. Las fotos en caché muestran una pequeña insignia de modo sin conexión en la esquina. La cuadrícula de vista previa se adapta al tamaño de la pantalla en iPadOS y macOS, asegurando un diseño de imagen cómodo en pantallas más grandes. OsmAnd también evita activar solicitudes de red repetidas cuando se cierra la sección de Fotos en línea, y cancela solicitudes anteriores al cambiar rápidamente entre diferentes PDI.

Obtenga más información sobre las opciones adicionales en las secciones [Acciones](#actions) y [Galería](#gallery).


<!-- 

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.  
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### Acciones {#actions}

En el menú contextual del mapa Cómo acceder:

- Toque el botón **Mostrar todo** (Android) / **Ver todo** (iOS) para abrir la [galería](#gallery) en modo de pantalla completa, donde puede deslizar a través de todas las fotos disponibles para la ubicación seleccionada.

- Toque cualquier foto para verla en [pantalla completa](#gallery) y acceder a las acciones disponibles:  
  **Compartir**, **Detalles**, **Abrir en el navegador** y **Descargar**.

**Nota:** Descargar guarda la imagen en el almacenamiento del dispositivo para uso sin conexión permanente, mientras que las fotos en caché se almacenan automáticamente y están disponibles sin conexión solo dentro de la aplicación.


### Galería {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú de la galería – Android](@site/static/img/map/gallery_menu_android.png)
![Menú de la galería – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú de la galería – iOS](@site/static/img/map/gallery_menu_ios.png)
![Menú de la galería – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


El **Menú de la galería** puede mostrar hasta **100 imágenes** relacionadas con el punto de interés seleccionado. Puede deslizar a través de todas las fotos disponibles. Al tocar una foto se abre brevemente una vista detallada que muestra: *Nombre*, *Fecha de adición*, *Autor*, *Licencia*.  

En iOS, iPadOS y macOS, puede navegar por las fotos utilizando las teclas del teclado (←/→ para moverse entre imágenes, Enter/Space para abrir).

También puede realizar las siguientes acciones en cada foto:

- **Compartir**  
  Comparta la imagen seleccionada utilizando cualquier aplicación compatible instalada en su dispositivo (por ejemplo, mensajería, correo electrónico o redes sociales). El contenido compartido incluye la imagen y su enlace de origen (si está disponible).

- **Detalles**  
  Abre una vista detallada que muestra metadatos sobre la imagen, incluyendo: *Nombre*, *Fecha de adición*, *Autor*, *Licencia*, *Fuente* y *Enlace directo*

- **Abrir en el navegador**  
  Abre la página de origen de la imagen (generalmente en [Wikimedia Commons](https://commons.wikimedia.org/)) en su navegador predeterminado. Esto le permite ver la imagen completa, la información de licencia y el contenido relacionado.

- **Descargar**  
  Guarda la imagen en el almacenamiento de su dispositivo. La imagen descargada se puede encontrar en la carpeta de descargas predeterminada de su dispositivo y se puede acceder a ella sin conexión.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

La versión de Android no incluye un menú adicional para las acciones de las fotos.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - Opciones del menú contextual](@site/static/img/map/gallery_menu_ios_3.png)

En **iOS**, una pulsación larga en una foto abre un menú contextual con acciones adicionales:

- **Detalles**  
- **Abrir en el navegador**  
- **Descargar**

**Botones**:

- El botón **Compartir** le permite compartir rápidamente la imagen seleccionada.  
- El **menú de tres puntos** proporciona acceso a acciones adicionales, como ver detalles, abrir la fuente en un navegador o descargar la imagen.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Android – Vista de detalles](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Vista de detalles](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

La pantalla **Detalles** proporciona metadatos completos para la foto seleccionada, incluyendo: *Nombre*, *Fecha de adición*, *Autor*, *Licencia*, *Fuente* y *Enlace directo*


## Artículos relacionados

- [Menú contextual del mapa](./map-context-menu.md)
- [Configurar mapa](./configure-map-menu.md)
- [Buscar PDI](../search/search-poi.md)
- [Plugin de Wikipedia](../plugins/wikipedia.md)





<!--
### Online Photos 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.  

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap.

#### Gallery Menu 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_3.png) 

</TabItem>

</Tabs>



On iOS, long tapping on any photo opens an additional menu with actions such as *Details*, *Open in browser*, and *Download*.

Buttons:

- The **Share** button allows you to share the selected item.  
- The **Three dots** button opens a menu with options like *Details*, *Open in browser*, and *Download*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->