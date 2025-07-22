---
source-hash: b39da87cb283fc3373cd7fc8ea9c535845d2da42231bb2b94d76bc577ea35ed4
sidebar_position: 1
title: Buscar todo
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>

## Resumen {#overview}

**Buscar** es una herramienta útil para encontrar ubicaciones rápidamente. Puedes usar la función de búsqueda para encontrar una ubicación por dirección, coordenadas, puntos de interés (POI) o búsquedas anteriores. La búsqueda por [Dirección](#search-address) te permite introducir la dirección para obtener una ubicación exacta. La búsqueda por [Coordenadas](#search-coordinates) funciona con coordenadas geográficas como latitud y longitud. Con la búsqueda de [POI](#search-poi) puedes buscar lugares cercanos en categorías específicas, como cafeterías, hoteles o gasolineras. El [Historial](#search-history) de búsqueda guarda las búsquedas anteriores para un acceso rápido a los lugares encontrados previamente. La función de búsqueda facilita la planificación de viajes, la navegación por terrenos desconocidos y la búsqueda de POI cercanos.

## Cómo usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Lista de POI de búsqueda Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista de POI de búsqueda iOS](@site/static/img/search/poi_list_1_ios.png)

</TabItem>

</Tabs>

Debes seguir uno de los pasos para iniciar tu búsqueda:

- Toca el [botón de búsqueda](../widgets/map-buttons.md#search) en la pantalla de la aplicación del mapa e introduce tu consulta.

- Ve al *Menú principal → Buscar → introduce tu consulta de búsqueda*.

- Al prepararte para iniciar una ruta, toca [*Navegación → Establecer destino → Campo de búsqueda*](../navigation/setup/route-navigation.md#set-target-point) *→ consulta de búsqueda*.

Información importante:

- ***Se requieren mapas vectoriales sin conexión descargados para buscar con OsmAnd***.

- Inicialmente, **la búsqueda se basa en los datos ubicados en el mapa en el área visible de la pantalla del dispositivo**, pero si no se encuentra nada allí, OsmAnd ofrece aumentar el radio de búsqueda.

### Consultas básicas {#basic-queries}

***Lista de consultas***:

- Coordenadas en todos los formatos disponibles.
- Dirección:
    - Calle, número de casa;
    - Ciudad, calle;
    - Intersecciones de calles;
    - Ciudad;
    - Datos TIGER;
    - Código postal, número de casa;
    - Código postal, calle, número de casa.
- Buscar POI por nombre y por categoría con filtros adicionales.
- Buscar rutas OSM por nombre y por categoría con filtros adicionales.
- Buscar por picos y volcanes más prominentes.
- Buscar por Favoritos y Puntos de ruta.
- Buscar iconos por nombres de subcategorías de POI.
- Buscar por pistas.
- Buscar por lugares de negocios y nombres de marcas.
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

OsmAnd ordena automáticamente los resultados de búsqueda según tres criterios principales:

1. **Consultas coincidentes**: los resultados que contienen coincidencias exactas o parciales con las palabras que introdujiste se muestran más arriba.

2. **Tipo de objeto**: al ordenar por nombre, las ciudades y las calles tienen prioridad sobre los POI al mostrar los resultados.

3. **Distancia**: cuando los resultados tienen criterios de coincidencia y tipos de objeto similares, los resultados más cercanos a la ubicación actual del usuario se muestran primero.

***Por ejemplo***, una consulta de búsqueda de *oficina de correos* mostrará primero las oficinas de correos más cercanas, incluso si hay otros elementos con nombres similares a mayor distancia.

***Limitaciones actuales:***

- No hay una configuración manual para cambiar el orden de clasificación de los resultados de búsqueda.
- El proceso de clasificación es **gestionado automáticamente** por OsmAnd, basándose en los criterios mencionados anteriormente.
- En los casos en que los resultados de búsqueda son demasiado amplios, OsmAnd puede **limitar los resultados mostrados** a aquellos con la mayor precisión de coincidencia de palabras.

### Búsqueda de texto completo {#full-text-search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Búsqueda de favoritos Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de favoritos iOS](@site/static/img/search/favorite_search_ios.png)

</TabItem>

</Tabs>

Puedes encontrar la ubicación requerida en el mapa de la lista de puntos que aparecen a medida que introduces una consulta.

1. Empieza a escribir el nombre o la dirección en la barra de búsqueda.

2. A medida que escribes, la lista muestra los puntos más cercanos a la consulta, aproximadamente en este orden:
    - Categorías de POI
    - Favoritos, POI, Rutas y Puntos de ruta
    - Pistas
    - Direcciones
    - Mapas para descargar

3. Si introduces un [nombre de marca](../search/search-poi.md#how-to-use), la lista comenzará con los resultados por este nombre, ordenados por la distancia más cercana.

:::note Limitaciones de los datos TIGER en las búsquedas de direcciones
OsmAnd ha integrado [**datos TIGER**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) en los mapas de EE. UU. para proporcionar información sobre las direcciones de EE. UU. El conjunto de datos TIGER se basa en **rangos** y no contiene números de casa precisos, por lo que algunas direcciones pueden faltar o ser inexactas.
:::

### Búsqueda en el mapa {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Búsqueda de POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd te permite buscar puntos mostrados en un mapa en la pantalla de tu dispositivo. Para ello:

- Utiliza [una de las formas](#how-to-use) para acceder a la herramienta de búsqueda.
- Empieza a escribir el nombre o la dirección en el cuadro de búsqueda.
- Aparecerá un cuadro con el botón *Mostrar en el mapa* debajo del campo de entrada de búsqueda.
- Toca este botón para ir al mapa.
- Puedes seguir escribiendo tu consulta en la parte superior de la pantalla.

### Buscar cerca {#search-nearby}

![Buscar Android](@site/static/img/search/search_all_near_location_andr.png)

Puedes usar la búsqueda en las cercanías de una ubicación específica. Para ello, selecciona el punto requerido [de la lista en el menú de búsqueda](#full-text-search) o selecciónalo directamente en el mapa. En el [menú contextual del mapa](../map/map-context-menu.md#actions), selecciona *Acciones → Buscar cerca*.

## Buscar dirección {#search-address}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Buscar Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

**Buscar dirección** utiliza datos de OpenStreetMap. Este tipo de búsqueda te permite encontrar la ubicación y la dirección a una dirección específica de una lista ya ordenada. Lee más en el artículo [Buscar dirección](./search-address.md).

## Historial de búsqueda {#search-history}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Historial de búsqueda](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historial de búsqueda](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Puedes usar el **Historial de búsqueda** para buscar de nuevo lugares, direcciones o lugares visitados con frecuencia sin tener que introducir la consulta de nuevo. Puedes encontrar más detalles en el artículo [Historial de búsqueda](./search-history.md).

## Buscar POI {#search-poi}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Buscar categorías de POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar categorías de POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

La **Búsqueda de POI** es una lista, ordenada por categoría, con la que puedes encontrar fácilmente lugares y servicios cerca de tu ubicación actual o de un área seleccionada en el mapa.

- La [búsqueda personalizada de POI](./search-poi.md#custom-poi-search) te permite combinar diferentes categorías de POI para simplificar y personalizar tu búsqueda.
Por ejemplo, si necesitas encontrar varios tipos de servicios en una determinada zona o en un determinado tramo de una ruta.

- OsmAnd proporciona una [búsqueda en línea](./search-poi.md#online-search) que funciona en tiempo real, lo que te da acceso rápido a los resultados de búsqueda.
Es conveniente usarla cuando los mapas de la región no están disponibles, pero se requiere una conexión a Internet constante y estable.

- Lee el artículo [Buscar POI](./search-poi.md) para obtener más información.

## Buscar coordenadas {#search-coordinates}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Buscar coordenadas Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar coordenadas iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

La búsqueda de coordenadas proporciona una ubicación precisa. Puedes introducir coordenadas precisas obtenidas, por ejemplo, de otras fuentes como un mapa, un dispositivo GPS o servicios en línea, lo que es particularmente útil cuando se trata de lugares que no tienen una dirección exacta. Para obtener más información, consulta el artículo [Buscar coordenadas](./search-coordinates.md).

## Artículos relacionados {#related-articles}

- [Buscar dirección](./search-address.md)
- [Historial de búsqueda](./search-history.md)
- [Buscar POI](./search-poi.md)
- [Buscar coordenadas](./search-coordinates.md)

> *Última actualización: abril de 2025*