---
source-hash: 5920278abcfe315d7fbfdbeb177097e48bdb3e0b7a6127b1def7c80cbfc2a59a
sidebar_position: 8
title: Lugares Populares
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


## Descripción general {#overview}

La función **Lugares Populares** en OsmAnd destaca puntos de referencia y atracciones notables utilizando datos estructurados abiertos de [Wikidata](https://www.wikidata.org) y [Wikipedia](https://www.wikipedia.org/). Ayuda a los usuarios a explorar destinos conocidos con descripciones multilingües y fotos.

Cada lugar incluido en esta función está vinculado a un **ID de Wikidata**, lo que permite a OsmAnd mostrar nombres verificados, previsualizar imágenes y enlaces a artículos de Wikipedia. Esta herramienta **no** muestra todos los puntos de OpenStreetMap (OSM). Se limita a los PDI con referencias de Wikidata.

Actualmente, la base de datos curada incluye aproximadamente entre **50.000 y 150.000 lugares mejor valorados** a nivel mundial, seleccionados de más de **1 millón** de objetos de Wikidata + OSM.

:::note
*Esta es la primera versión de la función Lugares Populares. Los comentarios son bienvenidos en [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Lugares populares](@site/static/img/map/popular_places/popular_places.png) ![Lugares populares](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Fuentes de datos

Los **Lugares Populares** se basan en contenido estructurado de [Wikidata](https://www.wikidata.org) y [Wikipedia](https://www.wikipedia.org/).

Solo se muestran los PDI con un **ID de Wikidata** vinculado. Estos ID conectan los objetos del mapa con nombres, descripciones e imágenes verificados.

Puedes ver el enlace de Wikidata directamente en el [Menú contextual del mapa](../map/map-context-menu.md). Al tocar la etiqueta de Wikidata, se abre la página completa del objeto en el sitio web de Wikidata.

Aprende a encontrar un ID de Wikidata: [Wikipedia: Cómo encontrar un ID de Wikidata](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Cómo usar {#how-to-use}

<InfoAndroidOnly/>

La función **Lugares Populares** incluye tanto una lista curada de puntos de referencia cercanos como una capa de PDI basados en Wikipedia en el mapa.

Hay dos formas principales de acceder a esta función:

- **Versión gratuita**
  Acceso a través de [Buscar](#explore-in-search) para explorar lugares cercanos en vista de lista.
  *<Translate android="true" ids="android_button_seq"/>*. Ir a: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Versiones de pago** *(Maps+ y OsmAnd Pro)*
  Habilita la superposición visual en [Configurar mapa](#enable-layer).
  *<Translate android="true" ids="android_button_seq"/>*. Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

  En este modo, los PDI populares aparecen directamente en el mapa con vistas previas en miniatura y contenido de Wikipedia.

  Puedes cambiar entre fuentes de Wikipedia **en línea** y **sin conexión** en la configuración de la superposición. Obtén más información en [Habilitar capa](#enable-layer).


## Explorar en Buscar {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Modo Explorar](@site/static/img/map/popular_places/popular_places_search.png)
![Modo Explorar](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

La sección **<Translate android="true" ids="popular_places_nearby"/>** muestra una lista desplazable de los puntos de referencia mejor valorados cerca de tu ubicación actual. Cada elemento incluye:

- Nombre del lugar.
- Breve descripción.
- Etiqueta de categoría de PDI.
- Distancia y dirección.
- Imagen en miniatura (si está disponible).

Toca **Mostrar todo** para ver la lista completa, o **Mostrar en el mapa** para mostrar todos los PDI listados en el mapa.

Al tocar cualquier lugar, se abre el [menú contextual de PDI](./map-context-menu.md), donde puedes previsualizar fotos y acceder a [contenido de Wikipedia](../plugins/wikipedia.md) relacionado.

:::tip
El modo Explorar basado en la búsqueda funciona **solo en línea** en la versión gratuita.
Para usarlo **sin conexión**, necesitas una suscripción a [Maps+ o OsmAnd Pro](../purchases/android.md) y mapas de [Wikipedia](../plugins/wikipedia.md) descargados.
:::


## Habilitar capa {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Menú de lugares populares](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

La función **Lugares Populares (Wikipedia)** está disponible en el [menú Configurar mapa](./configure-map-menu.md). Para mostrar lugares populares directamente en el mapa, habilita la capa de PDI con datos de Wikipedia usando imágenes de Wikidata.

Antes de usar esta función:

- Asegúrate de que el [complemento de Wikipedia](../plugins/wikipedia.md) esté habilitado.
- Descarga datos de Wikipedia para tu región si quieres usarlos sin conexión.

### Opciones de capa

Una vez habilitadas, las siguientes opciones estarán disponibles:

- **<Translate android="true" ids="poi_osmwiki"/>** – Activa/desactiva los PDI de Wikipedia en el mapa.

- **Fuente de PDI** – Cambia entre:
  - *Modo sin conexión* (los artículos de Wikipedia deben descargarse).
  - Modo *Solo en línea* (usa datos e imágenes en vivo).

- **<Translate android="true" ids="shared_string_language"/>** – Selecciona el idioma para las descripciones de Wikipedia.

- **<Translate android="true" ids="show_image_previews"/>** – Muestra miniaturas de imágenes de Wikidata junto a los PDI.

Al tocar un PDI en el mapa, se abre el [menú contextual de PDI](./map-context-menu.md), donde puedes ver [fotos en línea](#online-photos) y acceder a [artículos de Wikipedia](../plugins/wikipedia.md) vinculados.


## Fotos en línea {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menú contextual de fotos en línea Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual de fotos en línea iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Esta es una sección dentro del [menú contextual de PDI](./map-context-menu.md) que muestra una vista previa de la foto del Lugar Popular (Wikipedia) seleccionado. Puedes desplazarte horizontalmente para explorar las fotos disponibles, o tocar cualquier imagen para abrirla en [modo de pantalla completa](#gallery).

Obtén más información sobre las opciones adicionales en la sección [Acciones](#actions) y [Galería](#gallery).


<!--

Cuando tocas un Lugar Popular en el mapa o de la lista, el [menú contextual de PDI](./map-context-menu.md) incluye una sección de **Fotos en línea** con una vista previa horizontal de las imágenes.

- Toca cualquier foto para verla en pantalla completa.
- Desliza para ver más imágenes.

Para más acciones como compartir, ver metadatos o descargar, consulta [Galería](#gallery).

-->

### Acciones {#actions}

En el menú contextual del mapa Cómo acceder:

- Toca el botón **Mostrar todo** (Android) / **Ver todo** (iOS) para abrir la [galería](#gallery) en modo de pantalla completa, donde puedes deslizarte por todas las fotos disponibles para la ubicación seleccionada.

- Toca cualquier foto para verla en [pantalla completa](#gallery) y acceder a las acciones disponibles:
  **Compartir**, **Detalles**, **Abrir en el navegador** y **Descargar**.


### Galería {#gallery}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menú de la galería – Android](@site/static/img/map/gallery_menu_android.png)
![Menú de la galería – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de la galería – iOS](@site/static/img/map/gallery_menu_ios.png)
![Menú de la galería – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


El **Menú de la Galería** puede mostrar hasta **100 imágenes** relacionadas con el punto de interés seleccionado. Puedes deslizarte por todas las fotos disponibles. Al tocar una foto, se abre brevemente una vista detallada que muestra: *Nombre*, *Fecha de adición*, *Autor*, *Licencia*

También puedes realizar las siguientes acciones en cada foto:

- **Compartir**
  Comparte la imagen seleccionada usando cualquier aplicación compatible instalada en tu dispositivo (por ejemplo, mensajería, correo electrónico o redes sociales). El contenido compartido incluye la imagen y su enlace de origen (si está disponible).

- **Detalles**
  Abre una vista detallada que muestra metadatos sobre la imagen, incluyendo: *Nombre*, *Fecha de adición*, *Autor*, *Licencia*, *Fuente* y *Enlace directo*

- **Abrir en el navegador**
  Inicia la página de origen de la imagen (generalmente en [Wikimedia Commons](https://commons.wikimedia.org/)) en tu navegador predeterminado. Esto te permite ver la imagen completa, la información de licencia y el contenido relacionado.

- **Descargar**
  Guarda la imagen en el almacenamiento de tu dispositivo. La imagen descargada se puede encontrar en la carpeta de Descargas predeterminada de tu dispositivo y se puede acceder a ella sin conexión.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

La versión de Android no incluye un menú adicional para acciones de fotos.

</TabItem>

<TabItem value="ios" label="iOS">

![iOS - Opciones del menú contextual](@site/static/img/map/gallery_menu_ios_3.png)

En **iOS**, al mantener pulsada una foto, se abre un menú contextual con acciones adicionales:

- **Detalles**
- **Abrir en el navegador**
- **Descargar**

**Botones**:

- El botón **Compartir** te permite compartir rápidamente la imagen seleccionada.
- El **menú de tres puntos** proporciona acceso a acciones adicionales, incluyendo ver detalles, abrir la fuente en un navegador o descargar la imagen.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Android – Vista de detalles](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS – Vista de detalles](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

La pantalla de **Detalles** proporciona metadatos completos para la foto seleccionada, incluyendo: *Nombre*, *Fecha de adición*, *Autor*, *Licencia*, *Fuente* y *Enlace directo*


## Artículos relacionados

- [Menú contextual del mapa](./map-context-menu.md)
- [Configurar mapa](./configure-map-menu.md)
- [Buscar PDI](../search/search-poi.md)
- [Complemento de Wikipedia](../plugins/wikipedia.md)


> *Última actualización: julio de 2025*


<!--
### Fotos en línea 2

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menú contextual de fotos en línea Android](@site/static/img/map/images_nearby_1_andr.png) ![Imágenes a nivel de calle Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual de fotos en línea iOS](@site/static/img/map/online_photo_ios.png) ![Imágenes a nivel de calle iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Acciones con fotos

Cómo acceder:

- Toca el botón **Mostrar todo** (Android) / **Ver todo** (iOS) para abrir [la galería](#gallery-menu) en modo de pantalla completa. Allí puedes deslizarte por todas las imágenes relacionadas con la ubicación seleccionada.

- Toca una foto para acceder a acciones como *Compartir*, *Detalles*, *Abrir en el navegador* y *Descargar*.

- También puedes [explorar](../map/point-layers-on-map.md#-street-level-imagery) imágenes a nivel de calle en el mapa.

En la sección **Fotos en línea** del menú contextual del mapa, puedes acceder a fotos de objetos de [Wikimedia](https://www.wikimedia.org/), que ofrece archivos multimedia etiquetados con `image` o `wikimedia` de OpenStreetMap.

#### Menú de la galería 2

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menú contextual de fotos en línea Android](@site/static/img/map/gallery_menu_android.png) ![Imágenes a nivel de calle Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual de fotos en línea iOS](@site/static/img/map/gallery_menu_ios.png) ![Imágenes a nivel de calle iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


La galería puede mostrar hasta 100 elementos. Puedes navegar por todas las fotos, y al tocar brevemente cualquier foto, se abrirá para ver detalles adicionales (*Nombre*, *Fecha*, *Autor*, *Licencia*) y realizar varias acciones (*Compartir*, *Detalles*, *Abrir en el navegador* y opciones de *Descarga*).


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual de fotos en línea iOS](@site/static/img/map/gallery_menu_ios_3.png)

</TabItem>

</Tabs>



En iOS, al mantener pulsada cualquier foto, se abre un menú adicional con acciones como *Detalles*, *Abrir en el navegador* y *Descargar*.

Botones:

- El botón **Compartir** te permite compartir el elemento seleccionado.
- El botón de **Tres puntos** abre un menú con opciones como *Detalles*, *Abrir en el navegador* y *Descargar*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menú contextual de fotos en línea Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual de fotos en línea iOS](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>


La pantalla de Detalles proporciona información como el *Nombre*, la *Fecha de adición*, el *Autor*, la *Licencia*, la *Fuente* y el *Enlace* del elemento seleccionado.

-->