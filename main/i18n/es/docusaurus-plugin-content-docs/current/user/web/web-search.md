---
source-hash: e8f044473acdc81152b6ac5081df28b86a07fd654cf5ea4de38da7f569d022b7
sidebar_position: 10
sidebar_label:  Búsqueda
title: Búsqueda en el sitio web
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

<!--
<InfoIncompleteArticle/>
-->


## Resumen {#overview}

El **menú de Búsqueda** se puede acceder desde el panel lateral o desde el icono de Búsqueda 🔍 en el mapa. Contiene:

- [Barra de búsqueda](#search-bar). Introduce palabras clave para buscar ubicaciones o puntos de interés específicos.  
- [Sección de Categorías](#categories). Navega a través de opciones categorizadas para búsquedas de PDI más fáciles.  
- [Sección Explorar](#explore). Ver PDI populares para el centro actual del mapa y explorar lugares con fotos en el mapa.

![Menú de búsqueda](@site/static/img/web/search.png)

## Opciones de búsqueda {#search-options}

### Barra de búsqueda {#search-bar}

Usa la **Barra de búsqueda** para encontrar lugares o puntos de interés específicos por nombre. Haz clic en el icono de Búsqueda, introduce tu consulta y selecciona un resultado de la lista. Seleccionar un PDI abre el [Menú contextual de PDI](#poi-context-menu), donde puedes ver detalles y usar acciones rápidas.

Si buscas por un nombre de categoría, el primer resultado puede mostrar la categoría de PDI correspondiente. Haz clic en la categoría para abrir la vista de [búsqueda por Categorías](#categories).

![Opciones de búsqueda](@site/static/img/web/search_bar.png)

### Categorías {#categories}

Usa **Categorías** para navegar por PDI por tipo y mostrarlos en el mapa. El menú muestra seis categorías populares para un acceso rápido. Si necesitas más opciones, haz clic en Mostrar todo para abrir la lista completa de 18 categorías disponibles. Seleccionar una categoría muestra los PDI coincidentes en el mapa; seleccionar un PDI abre el [Menú contextual de PDI](#poi-context-menu).

![Opciones de búsqueda](@site/static/img/web/search_categories.png)

### Explorar {#explore}

La sección **Explorar** muestra [lugares populares](https://osmand.net/docs/user/map/popular_places) con fotos directamente en el mapa. Crea una lista de PDI para el centro actual del mapa (ordenados por popularidad) y muestra los mismos lugares como marcadores de fotos en el mapa. Las imágenes de vista previa e información de PDI se basan en Wikidata/Wikimedia y fuentes relacionadas cuando están disponibles.

Abre la pestaña de Búsqueda para acceder a Explorar: los resultados de Explorar se muestran en el mapa automáticamente. Usa Mostrar todo para abrir la lista completa de categorías de Explorar. Puedes refinar lo que aparece en la lista y en el mapa usando Filtro, que abre el menú de categorías de Explorar. Seleccionar un PDI de la lista o en el mapa abre el [Menú contextual de PDI](#poi-context-menu).

![Opciones de búsqueda](@site/static/img/web/search_explore.png) ![Opciones de búsqueda](@site/static/img/web/explore_filters.png)

## Menú contextual de PDI {#poi-context-menu}

No importa qué opción de búsqueda uses (Barra de búsqueda, Categorías o Explorar), seleccionar un PDI en el mapa o en la lista de resultados abre el Menú contextual de PDI. El menú contextual es el lugar principal para ver información de PDI y realizar acciones comunes. Combina detalles de PDI (como ubicación y datos relacionados) con acciones rápidas (por ejemplo, guardar, compartir o iniciar navegación).

### Detalles de PDI {#poi-details}

El **Menú contextual de PDI** muestra información clave sobre el lugar seleccionado y proporciona enlaces basados en los datos disponibles de OSM y Wikimedia/Wikidata:
- **Nombre e icono** — muestra el nombre del PDI y su icono.
- **Distancia y dirección** — muestra la distancia y la dirección al PDI.
- **Ubicación** — muestra las coordenadas del PDI.
- **Horario de apertura** — muestra las horas de apertura analizadas de [datos de OSM](https://wiki.openstreetmap.org/wiki/Key:opening_hours). El estado actual se muestra dinámicamente dependiendo de la hora actual (por ejemplo, *Abierto ahora*, *Cerrado* o *Abre a las 10:00*), y el horario completo se muestra a continuación.
- **Descripción** — proporciona información adicional sobre el PDI cuando está disponible (por ejemplo, de Wikipedia).
- **Fotos en línea** — muestra fotos de Wikimedia relacionadas con el PDI cuando están disponibles. Selecciona Mostrar todo para abrir la Galería de fotos. Selecciona una foto para abrirla en la galería (modo Abrir foto).
- **Datos del objeto** — información adicional de PDI, incluyendo etiquetas de OSM y otros detalles como contactos, enlaces sociales, enlaces a Wikipedia y Wikivoyage, descripciones e inscripciones (cuando están disponibles).
- **ID de OSM** — el identificador de OpenStreetMap del PDI.
- **Coordenadas** — selecciona las coordenadas para copiarlas.

![Menú contextual de PDI](@site/static/img/web/poi_context_menu_new.png)

### Acciones de PDI {#poi-actions}

El **Menú contextual de PDI** incluye botones de acción para tareas comunes. Usa estas acciones rápidas para guardar un lugar, compartirlo o iniciar la planificación de rutas y navegación:
- **Añadir a Favoritos** — guarda el PDI en tus [Favoritos](../web/web-favorites.md#favorites-actions).
- **Compartir** — genera un enlace compartible que abre el PDI directamente en OsmAnd Web. El enlace incluye el nombre del PDI, tipo y coordenadas (pin).
- **Direcciones desde** — establece el PDI seleccionado como punto de inicio y abre el panel de rutas para que puedas elegir un destino y perfil.
- **Navegación** — establece el PDI seleccionado como punto de destino para la [navegación](../web/web-navigation.md#start-a-route).

<!--
Click the **🔍 button** to start the search. Enter a query in the **Search Line** and click on POI to open the [**POI Context Menu**](#explore-poi-data), where you can view the tags information.

If you search by **Category name**, the first result will display the category of that POI.  If you click on a POI category, the [**Categories Search**](#categories) window opens.

![Context Menu POI](@site/static/img/web/context_menu_poi.png)


Click the chosen POI on the map or in the result list opens the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#favorites-actions).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/context_menu_poi_1.png)

## Categories {#categories}

You can choose and display one POI category on the map in the **Categories Menu**:

- Select from the **6 most popular categories**.  
- Or click **Show All** to open the full list of POI categories.

![Categories POI](@site/static/img/web/categories_poi.png)

Click the selected  POI on the map or in the results list to open the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#favorites-actions).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/categories_poi_1.png)


## Explore {#explore}

The **Explore** section in the Search menu makes it easier to find places and view points of interest (POIs) with their photos ([Wikidata source](https://www.wikidata.org/)) directly on the map.


To get started:

1. Click the **🔍 icon** to open the search tab, which displays popular POI categories and the **Explore** menu below.  
2. The **Explore** data will automatically be displayed on the map.  
3. Select **"Show All"** in the Explore section to open the full categories list with the ***Filter*** button at the top.  

   ![Explore menu](@site/static/img/web/explore.png)

4. Pressing the ***Filter* button** opens the Categories menu for "Explore." To refine your search, open the Categories menu and select the items you are interested in.  

   ![Explore menu](@site/static/img/web/explore_cat.png)

### Explore POI data {#explore-poi-data}

Clicking on an image POI opens a new context menu that includes:

- **Name and POI Tag**. Displays the name and general tag of the POI.  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Description**. Provides additional information about the POI.  
- **Online Photos**. Displays Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).  
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, etc.  
- **OSM ID**. Displays the OpenStreetMap ID of the POI.  
- **Coordinates**. By clicking on the coordinates, you can copy them.

![Explore menu](@site/static/img/web/poi_context.png)
-->

### Galería de fotos {#photo-gallery}

Haz clic en ***Mostrar todo*** en la sección **Fotos en línea** del Menú contextual de PDI para abrir la *Galería de fotos* del PDI seleccionado. La galería te permite navegar por todas las fotos disponibles. Haz clic en una foto para abrirla en una vista más grande (modo Abrir foto). Usa Atrás para volver al Menú contextual de PDI.

Los detalles de la foto incluyen:
- **Fecha**. La fecha en que se tomó o subió la foto.  
- **Autor**. El nombre del autor de la foto.  
- **Información de licencia**. Detalles sobre los derechos de uso de la foto.  
- **Descripción**. Información adicional sobre la foto.

![Galería de fotos](@site/static/img/web/poi_photo.png)


## Artículos relacionados {#related-articles}

- [Buscar todo](../search/search-all.md)
- [Buscar PDI](../search/search-poi.md)
- [Mapa](../web/web-map.md)