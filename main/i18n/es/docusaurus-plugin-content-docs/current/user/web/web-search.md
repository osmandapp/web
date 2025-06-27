---
source-hash: 576b2a6ec144f65d9bbd387b7ce25523a8a81f929e1a4c17b8d400a8c97827dd
sidebar_position: 6
sidebar_label: Search
title: Buscar en el sitio web
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

<InfoIncompleteArticle/>

## Descripción general {#overview}

Se puede acceder al **menú de búsqueda** desde el panel lateral o la **esquina izquierda 🔍** del mapa. Contiene:

- [Barra de búsqueda](#search-bar). Introduce palabras clave para buscar ubicaciones o puntos de interés específicos.
- [Sección de categorías](#categories). Navega por las opciones categorizadas para facilitar la búsqueda de PDI.
- [Sección Explorar](#explore). Descubre lugares cercanos y áreas de interés con fotos.

![Menú de búsqueda](@site/static/img/web/search.png)

## Barra de búsqueda {#search-bar}

Haz clic en el **botón 🔍** para iniciar la búsqueda. Introduce una consulta en la **línea de búsqueda** y haz clic en el PDI para abrir el [**menú contextual del PDI**](#explore-poi-data), donde podrás ver la información de las etiquetas.

Si buscas por **nombre de categoría**, el primer resultado mostrará la categoría de ese PDI. Si haces clic en una categoría de PDI, se abrirá la ventana de [**Búsqueda de categorías**](#categories).

![Menú contextual PDI](@site/static/img/web/context_menu_poi.png)

Al hacer clic en el PDI elegido en el mapa o en la lista de resultados, se abre el **Menú contextual del PDI**. Este menú proporciona los siguientes datos y enlaces:

- **Nombre e icono**. Muestra el nombre y el icono del PDI.
- **Botón ★ (*Añadir a favoritos*)**. Te permite guardar el PDI elegido como [favorito](../web/web-userdata.mdx#add--edit-favorite).
- **Botón 🔍**. Mueve el mapa a la ubicación del PDI.
- **Distancia y dirección**. Muestra la distancia y la dirección desde tu ubicación hasta el PDI elegido.
- **Ubicación**. Muestra las coordenadas del PDI.
- **Fotos en línea**. Proporciona datos de Wikimedia relacionados con el PDI, si están disponibles. Haz clic en *Mostrar todo* para abrir la [Galería de fotos](#photo-gallery).
- **Datos del objeto**. Incluye detalles como contactos, enlaces a redes sociales, enlaces a Wikipedia, descripciones, inscripciones, etc.
- **ID de OSM**. El ID de OpenStreetMap del PDI.
- **Coordenadas**. Al hacer clic en las coordenadas, puedes copiarlas.

![Menú contextual PDI](@site/static/img/web/context_menu_poi_1.png)

## Categorías {#categories}

Puedes elegir y mostrar una categoría de PDI en el mapa en el **Menú de categorías**:

- Selecciona entre las **6 categorías más populares**.
- O haz clic en **Mostrar todo** para abrir la lista completa de categorías de PDI.

![Categorías PDI](@site/static/img/web/categories_poi.png)

Haz clic en el PDI seleccionado en el mapa o en la lista de resultados para abrir el **Menú contextual del PDI**. Este menú proporciona los siguientes datos y enlaces:

- **Nombre e icono**. Muestra el nombre y el icono del PDI.
- **Botón ★ (*Añadir a favoritos*)**. Te permite guardar el PDI elegido como [favorito](../web/web-userdata.mdx#add--edit-favorite).
- **Botón 🔍**. Mueve el mapa a la ubicación del PDI.
- **Distancia y dirección**. Muestra la distancia y la dirección desde tu ubicación hasta el PDI elegido.
- **Ubicación**. Muestra las coordenadas del PDI.
- **Fotos en línea**. Proporciona datos de Wikimedia relacionados con el PDI, si están disponibles. Haz clic en *Mostrar todo* para abrir la [Galería de fotos](#photo-gallery).
- **Datos del objeto**. Incluye detalles como contactos, enlaces a redes sociales, enlaces a Wikipedia, descripciones, inscripciones, etc.
- **ID de OSM**. El ID de OpenStreetMap del PDI.
- **Coordenadas**. Al hacer clic en las coordenadas, puedes copiarlas.

![Menú contextual PDI](@site/static/img/web/categories_poi_1.png)

## Explorar {#explore}

La sección **Explorar** en el menú de búsqueda facilita la búsqueda de lugares y la visualización de puntos de interés (PDI) con sus fotos ([fuente de Wikidata](https://www.wikidata.org/)) directamente en el mapa.

Para empezar:

1. Haz clic en el **icono 🔍** para abrir la pestaña de búsqueda, que muestra las categorías de PDI populares y el menú **Explorar** a continuación.
2. Los datos de **Explorar** se mostrarán automáticamente en el mapa.
3. Selecciona **"Mostrar todo"** en la sección Explorar para abrir la lista completa de categorías con el botón ***Filtrar*** en la parte superior.

   ![Menú Explorar](@site/static/img/web/explore.png)

4. Al pulsar el ***botón Filtrar*** se abre el menú de categorías para "Explorar". Para refinar tu búsqueda, abre el menú de categorías y selecciona los elementos que te interesen.

   ![Menú Explorar](@site/static/img/web/explore_cat.png)

### Explorar datos de PDI {#explore-poi-data}

Al hacer clic en un PDI de imagen, se abre un nuevo menú contextual que incluye:

- **Nombre y etiqueta de PDI**. Muestra el nombre y la etiqueta general del PDI.
- **Botón 🔍**. Mueve el mapa a la ubicación del PDI.
- **Distancia y dirección**. Muestra la distancia y la dirección desde tu ubicación hasta el PDI elegido.
- **Ubicación**. Muestra las coordenadas del PDI.
- **Descripción**. Proporciona información adicional sobre el PDI.
- **Fotos en línea**. Muestra datos de Wikimedia relacionados con el PDI, si están disponibles. Haz clic en *Mostrar todo* para abrir la [Galería de fotos](#photo-gallery).
- **Datos del objeto**. Incluye detalles como contactos, enlaces a redes sociales, enlaces a Wikipedia, etc.
- **ID de OSM**. Muestra el ID de OpenStreetMap del PDI.
- **Coordenadas**. Al hacer clic en las coordenadas, puedes copiarlas.

![Menú Explorar](@site/static/img/web/poi_context.png)

### Galería de fotos {#photo-gallery}

Si haces clic en ***Mostrar todo*** en la sección **Fotos en línea** del menú contextual, se abre la *Galería de fotos* del PDI seleccionado.
En la *Galería de fotos*, puedes desplazarte por todas las fotos del PDI.

Cada foto contiene:

- **Fecha**. La fecha en que se tomó o subió la foto.
- **Autor**. El nombre del autor de la foto.
- **Información de la licencia**. Detalles sobre los derechos de uso de la foto.
- **Descripción**. Información adicional sobre la foto.

![Galería de fotos](@site/static/img/web/poi_photo.png)

> *Última actualización: enero de 2025*