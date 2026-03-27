---
source-hash: cc7b11b19f0261ab3f9cc12de149c6d268cdaa50b3a828cc60f5dd3ebe0ce868
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

## Resumen {#overview}

*Búsqueda por Dirección de OsmAnd* se basa en datos de OpenStreetMap y le permite encontrar la ubicación y las indicaciones para llegar a una dirección específica de una lista ya ordenada, así como buscar por código postal o coordenadas. Esta herramienta le permite encontrar las direcciones requeridas en unos pocos toques, lo que reduce el tiempo de búsqueda y ayuda en caso de que no recuerde la dirección exacta.

La búsqueda de direcciones funciona sin conexión utilizando mapas descargados. Asegúrese de que el mapa de la región en la que está buscando esté instalado. Los resultados dependen de los datos de direcciones disponibles en OpenStreetMap.

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

<!--
Search by Address simplifies the search and navigation process, ensures accuracy and usability, and reduces the time it takes to find the right address.  

- **To use the Search Address function,** you have to [download a map](../start-with/download-maps.md) of the required area first.
- **The search is based on the data located in the visible area of the map** on the device screen. If you do not find anything, OsmAnd offers to increase the search radius.
- The address information in OsmAnd contains all [OSM tag keys](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Search query list:

**1.** The **order** of items in the list:

- **Ordered by name**. Selecting *First specify city/town/locality* (Android) or *Select city* (iOS) will display a list that starts with unnamed items, if any, then numeric names followed by the names by letters.
- **Ascending numerical order**. In the next search list, the house numbers are displayed in ascending order, after entering the city and street.

**2.** Each field in the Address Search list contains **information** such as:

- An icon that identifies the type of locality.
- Part of an address, postal number, or coordinate area.
- Distance from your current location or from the city center.
- Additional information, such as the city's district.
-->
OsmAnd admite la búsqueda de direcciones de texto completo. Esto significa que puede escribir una dirección directamente en el campo de búsqueda en lugar de seleccionar ciudad → calle → número de casa paso a paso. El motor de búsqueda intenta reconocer componentes de la dirección como:
- ciudad;
- calle;
- número de casa;
- código postal;
- nombre del lugar.

No necesita introducirlos en un orden estricto. **Ejemplos de consultas**:

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

Si no se encuentra la dirección completa, OsmAnd intenta automáticamente consultas simplificadas (por ejemplo, eliminando palabras extra) para mejorar las posibilidades de encontrar la ubicación.

**NOTA:** La búsqueda de direcciones funciona solo dentro de los mapas descargados. Los resultados de búsqueda se basan en:
- mapas instalados en su dispositivo;
- el área visible del mapa;
- su ubicación actual. 

Si no se encuentra nada, OsmAnd puede sugerir aumentar el radio de búsqueda.

### Búsqueda de direcciones en EE. UU. y datos TIGER {#us-address-search-and-tiger-data}

OsmAnd admite la búsqueda de direcciones utilizando datos de OpenStreetMap, pero en los Estados Unidos, los resultados de la búsqueda de direcciones pueden ser incompletos debido al uso de [datos TIGER](https://wiki.openstreetmap.org/wiki/TIGER).  

- **Los datos TIGER proporcionan rangos de direcciones, no ubicaciones exactas**, esto significa que algunos números de casa pueden no ser reconocidos.
- **Si no se encuentra una dirección**, intente buscar *por nombre de calle* en lugar de un número de casa específico.
- Use *identificadores de ubicación alternativos*, como puntos de referencia cercanos o códigos ZIP, para refinar los resultados de su búsqueda.  

### Formatos admitidos {#supported-formats}

OsmAnd admite varios formatos comunes de direcciones. Puede introducir direcciones en diferentes órdenes dependiendo de cómo conozca la dirección.

| Formato de dirección | Consultas de ejemplo |
|---|---|
| Número de casa + calle | 221B Baker Street<br />10 Downing Street |
| Calle + número de casa | Baker Street 221B<br />Main Street 101 |
| Ciudad + calle + número de casa | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| Intersecciones de calles | Broadway & Wall Street<br />Main Street and High Street |
| Nombre de ciudad | Berlin<br />Vienna<br />San Francisco |
| Código postal + dirección | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### Consejos de búsqueda {#search-tips}

La búsqueda de direcciones en OsmAnd es tolerante a diferentes formatos de entrada. Puede probar:
- cambiar el orden de las palabras;
- eliminar información extra;
- buscar solo por nombre de calle.

El motor de búsqueda también tolera variaciones comunes en el formato de direcciones como diferentes órdenes de palabras, diferencias de ortografía, abreviaturas o formatos de números de casa. La tabla a continuación muestra variaciones típicas de búsqueda que pueden devolver la misma dirección.

| Variación de búsqueda | Consultas de ejemplo | Discusión relacionada |
|---|---|---|
| Variaciones en el nombre de la calle | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [Discusión](https://github.com/osmandapp/OsmAnd/issues/23709) |
| Ignorar espacios en los nombres | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [Discusión](https://github.com/osmandapp/OsmAnd/issues/13783) |
| Números de casa con sufijos de letra | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [Discusión](https://github.com/osmandapp/OsmAnd/issues/23320) |
| Abreviaturas de calle | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [Discusión](https://github.com/osmandapp/OsmAnd/issues/4923) |
| Dirección completa vs dirección simplificada | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [Discusión](https://github.com/osmandapp/OsmAnd/issues/19004) |
| Formato de dirección de EE. UU. | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [Discusión](https://github.com/osmandapp/OsmAnd/issues/6824) |
| Abreviaturas de estados de EE. UU. | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [Discusión](https://github.com/osmandapp/OsmAnd/issues/6824) |

<!--
**Examples**: Instead of `221B Baker Street London United Kingdom` try `221B Baker Street` or `Baker Street 221B`.

OsmAnd may also ignore additional information such as country or region if the address can already be identified.

Postal addresses copied from websites may include additional information such as company names, ZIP codes, or apartment numbers. If search does not return results, try entering only the street name, house number, and city.

Search is also tolerant to minor differences in spelling, such as spaces, hyphens, or common abbreviations in street names. **For example**:

`Weberstrasse`  
`Weber strasse`  
`Weber-strasse`

House numbers with letter suffixes can also be written in different formats:

`30B`  
`30b`  
`30-B`  
`30-b`

These variations may still return the same address.
-->


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

<!--
**Searching by city offers the following benefits:**

- *Convenience*. Allows you to quickly select the required city from the list, and specify a certain street, house or intersection in the selected city without having to enter the full address. This saves time and simplifies the process of finding the right place.
- *Precision.* You can select a city and street from the available options, avoiding errors when manually entering an address.
- *Filtering.* The ability to select a specific house from the list makes it easier to accurately navigate to the required location, especially when the exact address is unknown.
--> 

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

**La búsqueda por código postal puede ser útil cuando:**

- El nombre de la calle existe en varias ciudades.
- Conoce el código postal pero no la dirección exacta.

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