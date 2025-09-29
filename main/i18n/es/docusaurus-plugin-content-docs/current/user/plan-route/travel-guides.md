---
source-hash: 4d1fd6f77d3485a33ced776546c65769d6a354be721ca6e2b421c4ef414bb7e8
sidebar_position: 2
title:  Guías de viaje
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

:::info Función de pago
Las Guías de viaje son una [función de pago](../purchases/index.md) de la aplicación OsmAnd.
:::

Las guías de viaje virtuales en OsmAnd ofrecen a los usuarios información valiosa, recomendaciones y consejos. También permiten a los viajeros acceder a información de navegación completa sobre las atracciones en la aplicación.

Las guías de viaje de OsmAnd se basan en datos de [Wikivoyage](https://www.wikivoyage.org/), un proyecto comunitario similar a Wikipedia, donde autores voluntarios crean artículos actualizados.  
La información de Wikivoyage incluye los datos principales sobre un lugar, transporte, atracciones, compras y más.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Vista general de las guías de viaje](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Cómo usar {#how-to-use}

- [Descargar](#download-articles) *Guías de viaje*.
- Explorar [artículos](#browse-articles) sobre un país, región, ciudad, atracción.
    - Alternativamente, [mostrar artículos y/o puntos de las guías de viaje en el mapa](#travel-routes) usando el menú Configurar mapa.
    - Navegar por las atracciones en el mapa, añadirlas a *[Marcadores de mapa](../personal/markers.md#add--edit-markers)* o *[Favoritos](../personal/favorites.md#favorite-group-actions)*.
    - Usando el botón *[Leer completo](#manage-as-gpx-track)*, ir al *[artículo](#travel-article) dentro de *Guías de viaje*.
- [Marcar](#explore-and-bookmark) artículos para leerlos más tarde.
- Elegir [puntos](#points) de los artículos para visitar y añadirlos al mapa de OsmAnd.
- Obtener más información sobre lugares para visitar de los [artículos de Wikipedia](#combine-with-wikipedia) sin conexión.
- [Construir una ruta](../navigation/setup/route-navigation.md#set-destinations) a las atracciones turísticas elegidas o un paseo libre entre puntos.

:::note
Los artículos de *Guías de viaje* se almacenan dentro de OsmAnd como tracks GPX con Waypoints. Después de añadir estos tracks al mapa (ver las secciones *[Puntos](#points)* o *[Rutas de viaje](#travel-routes)* de este artículo), puede gestionarlos a través del menú *[Mis Lugares](../personal/myplaces.md)*.
:::

### Descargar artículos {#download-articles}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Menú de descarga de guías de viaje](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Menú de mapas iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Antes de empezar a usar las guías de viaje, necesita descargarlas a través del [menú Descargar mapas](../start-with/download-maps.md#maps-and-resources) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Los artículos están agrupados por regiones: *África, Asia, Australia y Oceanía, América Central, Europa, América del Norte, Rusia y América del Sur*, por lo que no tiene que descargar libros de viaje para una ciudad o país por separado.  
Al guardar las regiones requeridas en su dispositivo, puede explorar los artículos con OsmAnd incluso cuando está en el extranjero o fuera del alcance de su red móvil.

:::note
Además de guías de países, regiones o ciudades, puede encontrar guías de lugares de películas, libros, juegos de ordenador, lugares de memoria de grandes personajes, etc.
También hay guías especializadas, como la lista de la Red Mundial de Geoparques de la UNESCO o los aeropuertos internacionales más grandes y complejos del mundo.
:::

## Explorar Artículos {#browse-articles}

La pantalla de *Guías de viaje* consta de dos partes generales: un [*campo de búsqueda*](#search) y una lista de *guías de viaje* con dos pestañas: *[<Translate android="true" ids="shared_string_explore"/> y <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Puede cambiar entre ellas con un solo toque en una pestaña.
Cuando abre *Guías de viaje* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd le mostrará artículos sobre lugares interesantes situados cerca de las coordenadas geográficas del centro actual del mapa. Al tocar el elemento de la lista, se abre el [artículo de la Guía de viaje](#travel-article). En la parte inferior de la pantalla hay un interruptor para la *pestaña Marcadores*.  

### Explorar y Marcar {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pantalla principal de guías de viaje](@site/static/img/guides/travel_guides_main_screen_1.png) ![Pantalla principal de guías de viaje 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pantalla principal de guías de viaje](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Pantalla principal de guías de viaje 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

En la pestaña **Explorar** o **<Translate android="true" ids="popular_destinations"/>**, se enumeran los 30 artículos principales sobre destinos adyacentes al centro de la pantalla (fuera de la ubicación). Al tocar un elemento de la lista con un título y una breve descripción del artículo, puede ver el texto completo de ese artículo.  
Si toca el *botón Marcar*, el artículo se guardará para su posterior lectura y estará disponible en la pestaña Marcadores. En la pestaña *Artículos marcados*, los artículos se organizan a medida que se guardan, con los artículos más nuevos en la parte superior.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Abre el [artículo de viaje](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Mueve el artículo seleccionado a <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Elimina el artículo seleccionado de <Translate android="true" ids="saved_articles"/>.

### Búsqueda {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de búsqueda de guías de viaje](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de búsqueda de guías de viaje](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

El campo de búsqueda se encuentra en la parte superior de la pantalla <Translate android="true" ids="shared_string_travel_guides"/>. Si comienza a escribir las primeras letras de un país, ciudad o lugar famoso, aparecerá una lista de artículos debajo del campo de búsqueda. Al tocar el que necesita, puede comenzar a leer.  
Junto a cada resultado de búsqueda se enumeran los 3 idiomas más utilizados en los que se puede leer el artículo seleccionado. Sin embargo, los artículos populares están disponibles en más idiomas que los 3 enumerados.

**Funciones adicionales:**  

- Puede buscar atracciones culturales especiales, como *turismo de Harry Potter*, *Pueblos fantasma*, *Monarquías* y otros.
- Para eliminar el historial de búsqueda, debe usar el [botón <Translate android="true" ids="shared_string_options"/>](#options).

<!-- 
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### Opciones {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de opciones de guías de viaje](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de búsqueda de guías de viaje](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

En este menú, puede personalizar la apariencia de los artículos cuando trabaja sin conexión. NOTA, que las guías de viaje *[descargadas](#download-articles)* no contienen imágenes. Solo aparecen cuando ve los artículos con una conexión a Internet activa.  
En el menú Opciones, puede elegir si desea guardar las imágenes de los artículos vistos para usarlas cuando esté sin conexión. También puede borrar la caché de imágenes existente o eliminar el historial de búsqueda (solo funciona al buscar en *Guías de viaje*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Las imágenes de los artículos se pueden descargar para su uso sin conexión.  
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Borra la caché de imágenes para liberar memoria.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Borra el [historial de búsqueda](#search).

## Artículo de viaje {#travel-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Artículo de guías de viaje](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de búsqueda de guías de viaje](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Puede abrir un artículo desde las opciones sugeridas en la *[pestaña Explorar](#explore-and-bookmark)* o usando la opción *[Buscar](#search)*. Cuando añade atracciones turísticas llamadas *[Puntos](#points)* de un *artículo de Guía de viaje* al mapa de OsmAnd, también puede abrir el artículo usando el botón *Leer completo* en la [sección de descripción](../map/tracks/track-context-menu.md#description-and-info) del waypoint.

Los siguientes controles se encuentran en la parte superior de la pantalla:

- Interruptor para cambiar el idioma del artículo. El idioma se puede seleccionar de las opciones disponibles. El idioma del sistema se usa por defecto.
- Usando el botón &#8942;, puede compartir el artículo con sus amigos. El enlace se abre en la aplicación OsmAnd, el archivo de guías de viaje apropiado debe descargarse en el dispositivo del destinatario o en el sitio de [Wikivoyage](https://www.wikivoyage.org/), si el destinatario no tiene la aplicación OsmAnd o para dispositivos iOS.
- Tocar la barra de navegación abre el *[Menú de navegación de guías de viaje](#navigation-menu)*.

En la parte inferior de la pantalla hay botones como:

- [Contenidos](#table-of-contents). Abre la tabla de contenidos del artículo.
- [Puntos](#points). Muestra las atracciones turísticas relacionadas con el artículo en un mapa.
- [Marcar](#explore-and-bookmark). Permite añadir un artículo a los marcadores para su posterior lectura.  


### Menú de navegación {#navigation-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de contenidos de guías de viaje](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de búsqueda de guías de viaje](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Para pasar de un artículo a otro en los *artículos de la Guía de viaje*, utilice el **Menú de navegación**. Puede acceder a él tocando el campo de dirección sobre la imagen. NOTA, que los artículos en las Guías de viaje se agrupan de la siguiente manera: *Continente → Región → País → Provincia (región) → Ciudad*.
Si toca la flecha en la esquina superior izquierda de la pantalla, irá directamente a la pestaña *Explorar* o *Artículos marcados* (dependiendo de qué pestaña abrió anteriormente).


### Tabla de contenidos {#table-of-contents}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de contenidos de guías de viaje](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de búsqueda de guías de viaje](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

La mayoría de los *artículos de la Guía de viaje* tienen la misma estructura de contenido: *introducción* (imágenes y descripción del sitio turístico) y *capítulos posteriores*.

- &nbsp;*Comprender*. Detalles sobre la cultura y costumbres locales.
- &nbsp;*Llegar*. Detalles sobre cómo llegar a algunos lugares y cuánto costará esta ruta.
- &nbsp;*Ver*. Una lista de atracciones (museos, sitios históricos, etc.) con descripciones completas: precios de las entradas, horarios de apertura, enlaces útiles y números de teléfono.
- &nbsp;*Hacer*. Lugares para pasar el tiempo.
- &nbsp;*Comprar*. Sitios para comprar.
- &nbsp;*Comer*. Establecimientos de restauración (divididos por presupuesto: económico, medio, de lujo).
- &nbsp;*Beber*. Bares y cafeterías.
- &nbsp;*Dormir*. Alojamientos divididos por presupuesto (económico, medio, de lujo).
- &nbsp;*Ir a continuación*. Lugares más cercanos de Wikivoyage.

### Puntos {#points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de puntos de guías de viaje](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Menú de puntos de guías de viaje](@site/static/img/guides/travel_guides_articles_three_dots_point.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de búsqueda de guías de viaje](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Menú de búsqueda de guías de viaje](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

Los *artículos de la Guía de viaje* a menudo contienen atracciones turísticas agrupadas por tema. Al tocar una vez el botón *Puntos* en la parte inferior del *[Artículo](#travel-article)*, todas las atracciones relacionadas con el tema (lugares para comer, opciones de alojamiento, aeropuertos, tiendas, monumentos históricos, etc.) se añadirán al mapa y se podrán *[gestionar como un Track](#manage-as-gpx-track)*.  

Por defecto, los grupos de atracciones están marcados con ciertos iconos: las categorías *Comer y Beber* con un cuchillo y un tenedor en un círculo rojo, *Hacer y Ver* con una cámara en un círculo verde, y otros. Puede gestionar grupos de puntos con &#8942; como una *[carpeta de Waypoints](../map/tracks/track-context-menu.md#points--waypoints)*.  

:::note
Los puntos en los *Artículos de viaje* se refieren a waypoints en un track GPX.  
También puede *[añadir puntos al mapa](#travel-routes)* en el menú *Configurar mapa*. Puede mostrarlos todos o seleccionar una categoría específica.  
:::


## Rutas de viaje {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Una forma alternativa de explorar las *Guías de viaje* es mostrarlas en el mapa usando el menú *Configurar mapa*. Esta función no se aplica a la capacidad proporcionada por OsmAnd para usar Wikivoyage, solo se aplica a los tracks. Puede leer más en nuestro [blog](https://osmand.net/blog/routes#generated-travel-routes).

![Menú de puntos de guías de viaje](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Menú de puntos de guías de viaje](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Rutas de viaje y artículos en el mapa {#travel-routes-and-articles-on-the-map}

![Menú de puntos de guías de viaje](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Menú de puntos de guías de viaje](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)  

Después de habilitar la visualización de *Rutas de viaje* en el menú *Configurar mapa*, aparecerán círculos de diferentes colores en el mapa. Los naranjas representan tracks de ruta, artículos de ruta y algunos waypoints. Toque una ruta, artículo o punto específico y luego toque el botón *Descargar* (&#9047;), y podrá [gestionarlos como un track](#manage-as-gpx-track).

### Guías de viaje personalizadas {#custom-travel-guides}

Le recomendamos que añada nuevos artículos o ediciones a [Wikivoyage](https://en.wikivoyage.org/). Actualizamos las Guías de viaje aproximadamente cada 6 meses, y puede descargar nuevos artículos. También puede crear su propio *Libro de viaje*. Cómo hacerlo se describe en la documentación técnica (ver el artículo *[Crear guía de viaje personalizada](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Gestionar como Track GPX {#manage-as-gpx-track}

![Menú de puntos de guías de viaje 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Menú de puntos de guías de viaje 2](@site/static/img/guides/travel_guides_articles_my_places.png)  

Después de añadir *Guías de viaje* al mapa, los *Artículos de viaje* se pueden guardar como un track GPX y gestionar a través del menú *[Mis lugares](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Se pueden mostrar en el mapa, compartir, renombrar, colocar en otra carpeta, exportar o eliminar.  

- &nbsp;En *[Resumen](../map/tracks/track-context-menu.md#overview)*, puede leer una breve descripción o abrir el [artículo de la Guía de viaje](#travel-article) tocando el botón *Leer completo*. *Editar* le permite corregir el artículo.
- &nbsp;No hay información en la sección *[Track](../map/tracks/track-context-menu.md#altitude--speed-graphs)*, los archivos GPX de las *Guías de viaje* solo contienen waypoints.  
- &nbsp;En *[Puntos](../map/tracks/track-context-menu.md#points--waypoints)* verá carpetas con puntos agrupados por nombre (Comprar, Hacer, Beber, etc.).
- &nbsp;El botón *[Opción](../map/tracks/track-context-menu.md#options)* realiza las mismas funciones que en el track normal.

:::info
Los *Puntos* se almacenan en un [archivo GPX](../../technical/osmand-file-formats/osmand-gpx.md) (un formato comúnmente utilizado para tracks) como [Waypoints](../map/point-layers-on-map.md#track-waypoints). El número de puntos (waypoints) que contiene el track se marca junto al icono &#128681; en el campo del track.  
En el *[menú contextual del track](../map/tracks/track-context-menu.md)* del archivo GPX puede encontrar información general sobre el artículo al que pertenece este track.  
:::

## Combinar con Wikipedia {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combinar guías de viaje con Wikipedia 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Combinar guías de viaje con Wikipedia 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de búsqueda de guías de viaje](@site/static/img/guides/travel_guides_wikipedia_1_ios.png)  ![Menú de búsqueda de guías de viaje](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

En los *artículos de la Guía de viaje* puede encontrar información útil sobre atracciones turísticas (información de contacto, enlaces web, precios, etc.). Muchos artículos tienen un botón *Wikipedia* que permite abrir un *[artículo de Wikipedia](../plugins/wikipedia.md)* (en línea o sin conexión) sobre el lugar de interés.  

En algunos casos, la *[pestaña Marcadores](#explore-and-bookmark)* de OsmAnd le pedirá que descargue la [capa de mapa de Wikipedia](../plugins/wikipedia.md#download-wikipedia-packages) para explorar artículos relacionados sin conexión.

![Descargar Wikipedia para guías de viaje](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info NOTA
El [plugin de Wikipedia](../plugins/wikipedia.md) es una [función de pago](../purchases/index.md) de la aplicación OsmAnd.
:::

## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)