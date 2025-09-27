---
source-hash: 677964c6e30a8d9596ffa45395cb1cc593266a07fbfb2b36d1a6384a00432d7d
sidebar_position: 2
title:  Búsqueda de Dirección
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

*Búsqueda por Dirección de OsmAnd* se basa en datos de OpenStreetMap y le permite encontrar la ubicación y las indicaciones para llegar a una dirección específica de una lista ya ordenada, así como buscar por código postal o coordenadas. Esta herramienta le permite encontrar las direcciones requeridas en unos pocos toques, lo que reduce el tiempo de búsqueda y ayuda en caso de que no recuerde la dirección exacta.

OsmAnd proporciona varias formas de llegar a la herramienta de *Búsqueda*, donde se encuentra la sección **Búsqueda de Dirección**.

- El [botón de Búsqueda](../widgets/map-buttons.md#search) siempre se muestra en el mapa, y al tocarlo le llevará a la [pantalla general](#full-text-search) de la herramienta, donde puede encontrar la pestaña *Dirección*.
- Vaya al *Menú* principal de Android → *Búsqueda* → pestaña *Dirección*.
- Al prepararse para iniciar una ruta, toque *Navegación* → *Establecer destino* → Campo de *Búsqueda*.


## Búsqueda de texto completo {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

La búsqueda por dirección simplifica el proceso de búsqueda y navegación, garantiza la precisión y la usabilidad, y reduce el tiempo que se tarda en encontrar la dirección correcta.

- **Para utilizar la función de Búsqueda de Dirección,** primero debe [descargar un mapa](../start-with/download-maps.md) del área requerida.
- **La búsqueda se basa en los datos ubicados en el área visible del mapa** en la pantalla del dispositivo. Si no encuentra nada, OsmAnd ofrece aumentar el radio de búsqueda.
- La información de la dirección en OsmAnd contiene todas las [claves de etiquetas de OSM](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Lista de consultas de búsqueda:

**1.** El **orden** de los elementos en la lista:

- **Ordenado por nombre**. Al seleccionar *Primero especificar ciudad/pueblo/localidad* (Android) o *Seleccionar ciudad* (iOS) se mostrará una lista que comienza con elementos sin nombre, si los hay, luego nombres numéricos seguidos de los nombres por letras.
- **Orden numérico ascendente**. En la siguiente lista de búsqueda, los números de las casas se muestran en orden ascendente, después de introducir la ciudad y la calle.

**2.** Cada campo en la lista de Búsqueda de Dirección contiene **información** como:

- Un icono que identifica el tipo de localidad.
- Parte de una dirección, número postal o área de coordenadas.
- Distancia desde su ubicación actual o desde el centro de la ciudad.
- Información adicional, como el distrito de la ciudad.


### Búsqueda de direcciones en EE. UU. y datos TIGER {#us-address-search-and-tiger-data}

OsmAnd admite la búsqueda de direcciones utilizando datos de OpenStreetMap, pero en los Estados Unidos, los resultados de la búsqueda de direcciones pueden ser incompletos debido al uso de [datos TIGER](https://wiki.openstreetmap.org/wiki/TIGER).

- **Los datos TIGER proporcionan rangos de direcciones, no ubicaciones exactas**, esto significa que algunos números de casa pueden no ser reconocidos.
- **Si no se encuentra una dirección**, intente buscar *por nombre de calle* en lugar de un número de casa específico.
- Use *identificadores de ubicación alternativos*, como puntos de referencia cercanos o códigos postales, para refinar los resultados de su búsqueda.


### Formatos admitidos {#supported-formats}

Consulte el artículo [Buscar todo](./search-all.md#basic-queries) para obtener una lista de las consultas disponibles y los formatos de búsqueda admitidos.


## Seleccionar Ciudad {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda de Calle Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de Calle iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Ciudades más cercanas**  
    Esto **muestra una pequeña lista de ciudades alrededor de su ubicación** o la localidad que especificó para *Seleccionar calle* o *Seleccionar ciudad*. Cada campo contiene un icono correspondiente al tamaño de la ciudad, el nombre de la ciudad, la distancia desde usted hasta su centro y, para Android, la dirección de la brújula.

Esta forma de búsqueda facilita la localización de lugares específicos dentro de una localidad seleccionada, proporcionando una forma cómoda de encontrar direcciones con precisión y rapidez. Puede empezar a buscar la dirección deseada determinando la localidad.

- Para ello, toque **Primero especificar ciudad/pueblo/localidad** (Android) o **Seleccionar ciudad** (iOS).
- En la lista que se abre, seleccione la localidad requerida. [Aquí](#full-text-search) se describe el orden en que se muestran las consultas de búsqueda y qué información está disponible sobre cada elemento.
- En la siguiente pantalla, puede continuar refinando la dirección o seleccionar el botón *Mostrar en el mapa* debajo del campo de entrada de búsqueda.
- Para especificar su búsqueda, puede introducir todo o sólo parte del nombre de la ciudad, pueblo o aldea donde se encuentra la dirección que busca. Esto le permite acotar la búsqueda y obtener una lista más precisa.
- Al tocar el último elemento de la dirección, el número de la casa o el nombre de la intersección, se abre el [menú contextual del mapa](../map/map-context-menu.md#select-an-object-single-tap) del objeto.

**La búsqueda por ciudad ofrece las siguientes ventajas:**

- *Comodidad*. Permite seleccionar rápidamente la ciudad deseada de la lista, y especificar una determinada calle, casa o intersección en la ciudad seleccionada sin tener que introducir la dirección completa. Esto ahorra tiempo y simplifica el proceso de encontrar el lugar adecuado.
- *Precisión.* Puede seleccionar una ciudad y una calle de las opciones disponibles, evitando errores al introducir manualmente una dirección.
- *Filtrado.* La posibilidad de seleccionar una casa específica de la lista facilita la navegación precisa hasta el lugar deseado, especialmente cuando se desconoce la dirección exacta.

:::note Clave y Valor
*Búsqueda de Ciudad / Pueblo / Aldea* por [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Resultado*: se muestran todos los objetos con este nombre.
:::


## Seleccionar Calle {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda de Calle Android](@site/static/img/search/street_search.png) ![Búsqueda de Calle Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de Calle iOS](@site/static/img/search/address_street_search_3_ios.png) ![Búsqueda de Calle Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

La búsqueda de calles se realiza en la localidad en la que se encuentra, o en la que buscó antes, o que está en el centro del mapa visible en la pantalla de la aplicación.

- Para utilizar este tipo de búsqueda, toque **Buscar Calle** (*Android*) o **Seleccionar Calle** (*iOS*).
- En el campo de búsqueda junto al nombre de la ciudad, puede empezar a escribir el nombre de la calle y la lista se irá refinando, ofreciéndole los resultados más apropiados.
- En otros aspectos, la búsqueda de calles es la misma que en [Seleccionar Ciudad](#select-city).

:::note Clave y Valor
*Búsqueda de calles* por [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Resultado*: se muestran todas las calles con este nombre.
:::


## Búsqueda por Código Postal {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda por Código Postal Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda por Código Postal iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Para utilizar la *Búsqueda por código postal*, sólo tiene que introducir el número**, que puede constar incluso de un solo dígito, y la aplicación le ofrecerá una lista de los códigos postales pertinentes disponibles.

- Seleccione el código requerido y tóquelo.
- Puede utilizar la función *Mostrar *número de código postal* en el mapa*. Esto abre un [menú contextual del mapa](../map/map-context-menu.md#select-an-object-single-tap) con el código postal seleccionado sin ninguna información adicional sobre la ubicación.
- Puede refinar su búsqueda por este código seleccionando primero la calle requerida de la lista y luego el número.

**La búsqueda por código postal puede ser útil en los siguientes casos:**

- *Encontrar direcciones*. Cuando introduce un código postal, OsmAnd identifica el área correspondiente y sugiere direcciones en esa área. Esto es especialmente útil si conoce el código postal pero no la dirección exacta.
- *Precisión de la navegación*. En los casos en que la dirección no es segura, o en los que el nombre de la calle puede repetirse en diferentes zonas, el uso de un código postal puede proporcionar la mejor ruta a una dirección determinada.
- *Comodidad y rapidez*. La búsqueda por código postal permite encontrar información rápidamente, sobre todo si se conoce el código postal pero no se está seguro de la dirección. En lugar de introducir la dirección completa, puede introducir sólo el código y obtener resultados relevantes.

:::note
Para más información, lea los **[datos de códigos postales del Reino Unido](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Búsqueda por Coordenadas {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda por Coordenadas Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda por Coordenadas iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

La [**Búsqueda por Coordenadas**](../search/search-coordinates.md) le permite especificar coordenadas geográficas, como latitud y longitud, para encontrar una ubicación específica. Proporciona ubicaciones precisas en un mapa en diferentes [formatos de coordenadas](../search/search-coordinates.md#coordinate-format) y le permite obtener información relacionada. Esta función puede ser útil cuando no se tiene una dirección o el nombre exacto de un lugar, y puede facilitar la planificación de viajes y la navegación en lugares desconocidos.


## Artículos Relacionados {#related-articles}

- [Buscar todo](./search-all.md)
- [Historial de búsqueda](./search-history.md)
- [Búsqueda de PDI](./search-poi.md)
- [Búsqueda por Coordenadas](./search-coordinates.md)