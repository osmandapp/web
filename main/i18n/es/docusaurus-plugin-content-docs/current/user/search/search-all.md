---
source-hash: 69c1d2be2f285262958a4bf0b6a3a213aea2bb370e81719084db8dc1847bb1c0
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

**Búsqueda** es una herramienta útil para encontrar ubicaciones rápidamente. Puede usar Búsqueda para encontrar una ubicación por dirección, coordenadas, puntos de interés (PDI), o búsquedas anteriores. La búsqueda de [Dirección](#search-address) le permite introducir la dirección que desea para obtener una ubicación exacta. La búsqueda de [Coordenadas](#search-coordinates) funciona con coordenadas geográficas como latitud y longitud. Con la búsqueda de [PDI](#search-poi) puede buscar lugares cercanos en categorías específicas, como cafeterías, hoteles o gasolineras. La pestaña [Explorar](#search-explore) resalta lugares populares cercanos y proporciona acceso rápido a ubicaciones visitadas recientemente. La [Historial](#search-history-ios) de búsqueda guarda las búsquedas pasadas. La función de búsqueda facilita la planificación de viajes, la navegación por terrenos desconocidos y la búsqueda de PDI cercanos.


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
- Búsqueda por Favoritos y Waypoints.
- Búsqueda de iconos por nombres de subcategorías de PDI.
- Búsqueda por tracks.
- Búsqueda por locales comerciales y nombres de marcas.
- Búsqueda en línea (Nominatim).
- Búsqueda de URL (Google y OsmAnd).
- Historial de búsqueda.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Ordenar resultados de búsqueda {#sorting-search-results}

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


### Búsqueda de texto completo {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda de favoritos Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de favoritos iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Puede encontrar la ubicación requerida en el mapa a partir de la lista de puntos que aparecen a medida que introduce una consulta.

1. Comience a escribir el nombre o la dirección en la barra de búsqueda.

2. A medida que escribe, la lista muestra los puntos más cercanos a la consulta, aproximadamente en este orden:
    - Categorías de PDI
    - Favoritos, PDI, Rutas y Waypoints
    - Tracks
    - Direcciones
    - Mapas para descargar

3. Si introduce un [nombre de marca](../search/search-poi.md#how-to-use), la lista comenzará con los resultados por este nombre, ordenados por la distancia más cercana.

:::note Limitaciones de los datos TIGER en las búsquedas de direcciones
OsmAnd ha integrado los [**datos TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) en los mapas de EE. UU. para proporcionar información sobre las direcciones de EE. UU. El conjunto de datos TIGER se basa en **rangos** y no contiene números de casa precisos, por lo que algunas direcciones pueden faltar o ser inexactas.
:::


### Buscar en el mapa {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Buscar PDI Android](@site/static/img/search/poi_overlay_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Buscar PDI iOS](@site/static/img/search/poi_overlay_ios_new.png)

</TabItem>

</Tabs>

OsmAnd le permite buscar puntos que se muestran en un mapa en la pantalla de su dispositivo. Para hacer esto:

- Utilice [una de las formas](#how-to-use) para acceder a la herramienta de Búsqueda.
- Comience a escribir el nombre o la dirección en el cuadro de búsqueda.
- Aparecerá un cuadro con el botón *Mostrar en el mapa* debajo del campo de entrada de búsqueda.
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

<InfoAndroidOnly/>

![Búsqueda Explorar](@site/static/img/search/explore_search_android.png)

La pestaña **Explorar** en la herramienta de Búsqueda le ayuda a descubrir rápidamente lugares cerca de su ubicación actual y acceder a elementos abiertos recientemente. Contiene dos secciones principales:  
- Lugares populares cercanos – una lista desplazable de lugares emblemáticos y atracciones conocidas cerca de su ubicación. Cada elemento puede incluir el nombre del lugar, su categoría, distancia y dirección, y una imagen de vista previa si está disponible. Toque *Mostrar todo* para abrir la lista completa o *Mostrar en el mapa* para mostrar estos lugares en el mapa.
- Visitados recientemente – una lista de lugares, tracks u otros objetos que ha abierto recientemente. Esto le permite regresar rápidamente a ubicaciones vistas anteriormente.

Para más detalles, consulte [aquí](../map/popular_places.md#explore-in-search).

## Historial de búsqueda (iOS) {#search-history-ios}

![Búsqueda en el historial](@site/static/img/search/history_search_ios.png)

Puede usar el **Historial de búsqueda** para buscar de nuevo lugares, direcciones o lugares visitados con frecuencia encontrados anteriormente sin volver a introducir la consulta. Se pueden encontrar más detalles en el artículo [Historial de búsqueda](./search-history.md).


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
- [Historial de búsqueda](./search-history.md)
- [Búsqueda de PDI](./search-poi.md)
- [Búsqueda de coordenadas](./search-coordinates.md)
- [Lugares populares](../map/popular_places.md)