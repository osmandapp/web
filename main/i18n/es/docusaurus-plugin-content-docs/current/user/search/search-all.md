---
source-hash: 10cbeafd902c636e09520ab4df9f764d8c01529060c7ee38d4e0bf4ae741b6a2
sidebar_position: 1
title:  Buscar todo
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

<!--
<InfoIncompleteArticle/>
-->

## Resumen {#overview}

**Búsqueda** es una herramienta útil para encontrar ubicaciones rápidamente. Puede usar Búsqueda para encontrar una ubicación por dirección, coordenadas, puntos de interés (PDI), o búsquedas anteriores. La búsqueda de [Dirección](#search-address) le permite introducir la dirección que desea para obtener una ubicación exacta. La búsqueda de [Coordenadas](#search-coordinates) funciona con coordenadas geográficas como latitud y longitud. Con la búsqueda de [PDI](#search-poi) puede buscar lugares cercanos en categorías específicas, como cafeterías, hoteles o gasolineras. La pestaña [Explorar](#search-explore) resalta lugares populares cercanos y proporciona acceso rápido a ubicaciones visitadas recientemente. El [Historial](#search-history) de búsqueda guarda las búsquedas pasadas. La función de búsqueda facilita la planificación de viajes, la navegación por terrenos desconocidos y la búsqueda de PDI cercanos.


## Cómo usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de PDI de búsqueda Android](@site/static/img/search/search_online_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista de PDI de búsqueda iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Debe seguir uno de los pasos para iniciar su búsqueda:

- Toque el [botón de Búsqueda](../widgets/map-buttons.md#search) en la pantalla de la aplicación de mapas e introduzca su consulta.

- Vaya al *Menú principal → Búsqueda → introduzca su consulta de búsqueda*.

- Al prepararse para iniciar una ruta, toque [*Navegación → Establecer destino → Campo de búsqueda*](../navigation/setup/route-navigation.md#set-target-point) *→ consulta de búsqueda*.  


Información importante:

- ***Se requieren mapas vectoriales sin conexión descargados para buscar con OsmAnd***.

- Inicialmente, **la búsqueda se basa en los datos ubicados en el mapa en el área visible de la pantalla del dispositivo**, pero si no se encuentra nada allí, OsmAnd ofrece aumentar el radio de búsqueda.  

### Consultas básicas {#basic-queries}

***Lista de consultas*:**

- Coordenadas en todos los formatos disponibles.
- Dirección:
    - Calle, Número de casa;
    - Ciudad, Calle;
    - Intersecciones de calles;
    - Ciudad;
    - Datos Tiger;
    - Código postal, Número de casa;
    - Código postal, Calle, Número de casa.
- Búsqueda de PDI por nombre y por categoría con filtros adicionales.
- Búsqueda de rutas OSM por nombre y por categoría con filtros adicionales.
- Búsqueda por los picos y volcanes más prominentes.
- Búsqueda por artículos de la Guía de viaje (requiere que se descargue el archivo de guías de viaje correspondiente).
- Búsqueda por Favoritos y Waypoints.
- Búsqueda de iconos por nombres de subcategorías de PDI.
- Búsqueda por tracks.
- Búsqueda por locales comerciales y nombres de marcas.
- Búsqueda en línea (Nominatim).
- Búsqueda de URL (Google y OsmAnd). OsmAnd puede reconocer muchos enlaces compartidos de Google Maps, incluidos los enlaces cortos de `maps.app.goo.gl`.
- Historial de búsqueda.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Ordenar resultados de búsqueda {#sorting-search-results}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de PDI de búsqueda Android](@site/static/img/search/search_sort_by.webp)

OsmAnd ordena automáticamente los resultados de la búsqueda según varios criterios:

1. **Coincidencia de consultas** — Los resultados que contienen coincidencias exactas o parciales con las palabras que introdujo se muestran más arriba.

2. **Relevancia** — Los objetos cuyos nombres coinciden estrechamente con la consulta de búsqueda suelen mostrarse más arriba en los resultados.

3. **Tipo de objeto** — Dependiendo de la consulta, los resultados pueden incluir diferentes tipos de objetos como ciudades, calles, direcciones o PDI.

4. **Distancia** — Cuando los resultados tienen criterios de coincidencia y tipos de objeto similares, los resultados más cercanos a la ubicación actual del usuario se muestran primero.

5. **Importancia** — Los lugares emblemáticos conocidos o lugares referenciados con frecuencia pueden aparecer más arriba en los resultados cuando coinciden estrechamente con la consulta de búsqueda.

También puede cambiar manualmente el orden de clasificación de los resultados de búsqueda mediante la opción de ordenación en la parte superior de la lista de resultados de búsqueda. El chip muestra la opción seleccionada. Toque el chip y seleccione una de las siguientes opciones en el menú *Ordenar por*:
- **Relevancia** — Ordena los resultados de búsqueda por relevancia con respecto a la consulta de búsqueda.
- **Más cercano** — Ordena los resultados de búsqueda por distancia, mostrando primero los resultados más cercanos.

</TabItem>

<TabItem value="ios" label="iOS">

OsmAnd ordena automáticamente los resultados de la búsqueda según varios criterios:

1. **Coincidencia de consultas** — Los resultados que contienen coincidencias exactas o parciales con las palabras que introdujo se muestran más arriba.

2. **Relevancia** — Los objetos cuyos nombres coinciden estrechamente con la consulta de búsqueda suelen mostrarse más arriba en los resultados.

3. **Tipo de objeto** — Dependiendo de la consulta, los resultados pueden incluir diferentes tipos de objetos como ciudades, calles, direcciones o PDI.

4. **Distancia** — Cuando los resultados tienen criterios de coincidencia y tipos de objeto similares, los resultados más cercanos a la ubicación actual del usuario se muestran primero.

5. **Importancia** — Los lugares emblemáticos conocidos o lugares referenciados con frecuencia pueden aparecer más arriba en los resultados cuando coinciden estrechamente con la consulta de búsqueda.

***Por ejemplo***, una consulta de búsqueda *oficina de correos* mostrará primero las oficinas de correos más cercanas, incluso si hay otros elementos con nombres similares a una distancia mayor.  

***Limitaciones actuales:***

- No hay una configuración manual para cambiar el orden de clasificación de los resultados de búsqueda.
- El proceso de clasificación es **gestionado automáticamente** por OsmAnd, basándose en los criterios enumerados anteriormente.
- En los casos en que los resultados de la búsqueda son demasiado amplios, OsmAnd puede **limitar los resultados mostrados** a aquellos con la mayor precisión de coincidencia de palabras.

</TabItem>

</Tabs>


### Búsqueda de texto completo {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda de favoritos Android](@site/static/img/search/favorite_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de favoritos iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Puede encontrar la ubicación requerida en el mapa a partir de la lista de puntos que aparecen a medida que introduce una consulta.

1. Comience a escribir el nombre o la dirección en la barra de búsqueda.

2. A medida que escribe, la lista muestra los resultados que coinciden con su consulta. Los resultados se ordenan tal como se describe en la sección [Ordenar resultados de búsqueda](#sorting-search-results).

3. Al buscar por nombre en Android, OsmAnd muestra chips de tipo de PDI según los tipos representados en los resultados de búsqueda. Toque un chip para filtrar los resultados por el tipo de PDI seleccionado. Puede seleccionar varios tipos de PDI. Una vez seleccionado, un chip se mueve a la primera posición de la lista. Toque de nuevo un chip seleccionado para anular la selección y volver a los resultados de búsqueda completos.

4. Si introduce un [nombre de marca](../search/search-poi.md#how-to-use), la lista comenzará con los resultados por este nombre, ordenados por la distancia más cercana.

5. Los resultados de la búsqueda también pueden incluir un [artículo de la Guía de viaje](../plan-route/travel-guides.md#travel-article). Al tocarlo se abre directamente el artículo, en lugar de mostrar una ubicación en el mapa.

:::note Limitaciones de los datos TIGER en las búsquedas de direcciones
OsmAnd ha integrado los [**datos TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) en los mapas de EE. UU. para proporcionar información sobre las direcciones de EE. UU. El conjunto de datos TIGER se basa en **rangos** y no contiene números de casa precisos, por lo que algunas direcciones pueden faltar o ser inexactas.
:::

### Búsqueda espacial {#spatial-search}

<InfoAndroidOnly/>

![Búsqueda espacial](@site/static/img/search/spatial_search.webp)

La Búsqueda espacial es un motor de búsqueda experimental que tiene en cuenta la ubicación relativa de los objetos entre sí, no solo la coincidencia de sus nombres con la consulta. Ayuda a OsmAnd a interpretar correctamente las consultas que combinan varias partes, como un nombre de lugar y una categoría de PDI.

La Búsqueda espacial está desactivada de forma predeterminada. Para activarla, vaya a los ajustes del [complemento de Desarrollo de OsmAnd](../plugins/development.md#internal-algorithms) y active *Usar búsqueda de texto espacial*. Cuando está activada, la Búsqueda espacial reemplaza al motor de búsqueda estándar para consultas de PDI y direcciones.

Con la Búsqueda espacial puede:
- Buscar un PDI en un lugar específico. Introduzca una categoría y un nombre de lugar en una sola consulta, por ejemplo, Hotel Berlín. El nombre del lugar se utiliza como área de búsqueda y la categoría se busca dentro de él.
- Buscar lugares que coincidan con dos condiciones. Introduzca dos categorías o una categoría y una propiedad, por ejemplo, Combustible Diésel o Café Vegano, para encontrar lugares que cumplan ambas. Una consulta como Combustible McDonald's encuentra gasolineras situadas cerca de un McDonald's. El orden de las palabras importa. La primera palabra establece lo que busca y la segunda lo que debe estar cerca. Por ejemplo, McDonald’s Combustible encuentra restaurantes McDonald’s situados cerca de gasolineras.
- Buscar alrededor de un lugar encontrado. Introduzca una categoría y un nombre de lugar, por ejemplo, *Hotel Berlín*, y luego toque *Hotel cerca de Berlín* en la parte superior de los resultados de búsqueda. El nombre de este lugar se añade al chip [Buscar alrededor](#search-around).
- Utilizar diferentes formatos de nombres de calles y nombres de categorías traducidos en sus consultas.
- Obtener resultados más rápidos al buscar por categorías de PDI populares, como farmacia, aparcamiento o restaurante.

### Buscar alrededor {#search-around}

<InfoAndroidOnly/>

![Buscar alrededor](@site/static/img/search/search_around_berlin.webp)

Cuando el centro del mapa está a más de 50 m de su ubicación y el mapa no sigue su posición, la búsqueda se realiza alrededor del centro del mapa y el campo de búsqueda muestra *Buscar a N km*. Cuando el centro del mapa está a más de 70 km de su ubicación, aparece un chip con el área de búsqueda junto al chip de ordenación. El chip muestra la opción seleccionada. Toque el chip y elija una de las siguientes opciones en el menú *Buscar alrededor*:
- **Centro del mapa** — Busca alrededor del centro actual del mapa. Esta opción está seleccionada de forma predeterminada.
- **Mi ubicación** — Busca alrededor de su ubicación actual.
- **Nombre del lugar** — Busca alrededor de un lugar que haya encontrado con la [Búsqueda espacial](#spatial-search). Por ejemplo, introduzca *Hotel Berlín* y luego toque *Hotel cerca de Berlín* en la parte superior de los resultados de búsqueda. *Berlín* aparece en el chip y se muestran hoteles alrededor de Berlín. Esta opción solo está disponible cuando la Búsqueda espacial está activada. 

### Buscar en el mapa {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Buscar PDI Android](@site/static/img/search/poi_overlay_android_new.png) ![Buscar PDI Android](@site/static/img/search/poi_overlay_android_new.webp)

</TabItem>

<TabItem value="ios" label="iOS">  

![Buscar PDI iOS](@site/static/img/search/poi_overlay_ios_new.png) ![Buscar PDI iOS](@site/static/img/search/poi_overlay_ios_new.webp)

</TabItem>

</Tabs>

OsmAnd le permite buscar puntos que se muestran en un mapa en la pantalla de su dispositivo. Para hacer esto:

- Utilice [una de las formas](#how-to-use) para acceder a la herramienta de Búsqueda.
- Comience a escribir el nombre o la dirección en el cuadro de búsqueda.
- Aparecerá un cuadro con el botón *Mostrar en el mapa* debajo del campo de entrada de búsqueda. En Android, el botón de acción flotante (FAB) *Mostrar en el mapa* aparece en la parte inferior de la pantalla de resultados de búsqueda.
- Toque este botón para ir al mapa.
- Puede continuar escribiendo su consulta en la parte superior de la pantalla.


### Buscar cerca {#search-nearby}

![Búsqueda Android](@site/static/img/search/search_all_near_location_andr_new.png)

Puede utilizar la búsqueda en las proximidades de una ubicación específica. Para ello, seleccione el punto requerido [de la lista en el menú de búsqueda](#full-text-search) o selecciónelo directamente en el mapa. En el [menú contextual del mapa](../map/map-context-menu.md#actions), seleccione *Acciones → Buscar cerca*.


## Búsqueda de dirección {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda Android](@site/static/img/search/search_address_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

La **Búsqueda de dirección** utiliza datos de OpenStreetMap. Este tipo de búsqueda le permite encontrar la ubicación y la dirección a una dirección específica a partir de una lista ya ordenada. Lea más en el artículo [Búsqueda de dirección](./search-address.md).


## Búsqueda Explorar {#search-explore}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda Explorar](@site/static/img/search/explore_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda en el historial](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

En Android, la pestaña **Explorar** en la herramienta de Búsqueda le ayuda a descubrir rápidamente lugares cerca de su ubicación actual y acceder a su historial. En iOS, la pestaña **Historial** le permite buscar de nuevo lugares, direcciones o lugares visitados con frecuencia encontrados anteriormente sin volver a introducir la consulta. Para más información, consulte el artículo [Búsqueda Explorar](./search-history.md).


## Búsqueda de PDI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Buscar PDI Android](@site/static/img/search/search_poi_categoties_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar PDI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

La **Búsqueda de PDI** es una lista, ordenada por categoría, con la que puede encontrar fácilmente lugares y servicios cerca de su ubicación actual o de un área seleccionada en el mapa.

- La [búsqueda personalizada de PDI](./search-poi.md#customize-poi-search) le permite combinar diferentes categorías de PDI para simplificar y personalizar su búsqueda.  
Por ejemplo, si necesita encontrar varios tipos de servicios en un área determinada o en una sección determinada de una ruta.

- OsmAnd proporciona una [búsqueda en línea](./search-poi.md#online-search) que funciona en tiempo real, dándole acceso rápido a los resultados de la búsqueda.  
Es conveniente de usar cuando los mapas de la región no están disponibles, pero se requiere una conexión a Internet constante y estable.

- Lea el artículo [Búsqueda de PDI](./search-poi.md) para obtener más información.


## Búsqueda de coordenadas {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda de coordenadas Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de coordenadas iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

La búsqueda de coordenadas proporciona una ubicación precisa. Puede introducir coordenadas precisas obtenidas, por ejemplo, de otras fuentes como un mapa, un dispositivo GPS o servicios en línea, lo que es particularmente útil cuando se trata de lugares que no tienen una dirección exacta. Para obtener más información, consulte el artículo [Búsqueda de coordenadas](./search-coordinates.md).


## Artículos relacionados {#related-articles}

- [Búsqueda de dirección](./search-address.md)
- [Búsqueda Explorar](./search-history.md)
- [Búsqueda de PDI](./search-poi.md)
- [Búsqueda de coordenadas](./search-coordinates.md)
- [Lugares populares](../map/popular_places.md)