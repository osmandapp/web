---
source-hash: e36caad58f36cfd88f8d8bd575e69fdf2d3e8f63a1d4a934dba6e473f1b95388
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

*OsmAnd Búsqueda por Dirección* se basa en datos de OpenStreetMap y le permite encontrar la ubicación y las indicaciones para llegar a una dirección específica de una lista ya ordenada, así como buscar por código postal o coordenadas. Esta herramienta le permite encontrar las direcciones requeridas en unos pocos toques, lo que reduce el tiempo de búsqueda y ayuda en caso de que no recuerde la dirección exacta.

La búsqueda de direcciones funciona sin conexión utilizando mapas descargados. Asegúrese de que el mapa de la región en la que está buscando esté instalado. Los resultados dependen de los datos de direcciones disponibles en OpenStreetMap.

OsmAnd ordena automáticamente los resultados de búsqueda, por lo que los resultados cercanos y más relevantes aparecen más arriba en la lista. En Android, puede cambiar el orden con el chip de ordenación en la parte superior de la lista de resultados. El chip muestra la opción seleccionada. Tóquelo y elija una de las siguientes opciones en el menú *Ordenar por*:
- *Relevancia* — Ordena los resultados según su coincidencia con su consulta.
- *Más cercano* — Ordena los resultados por distancia, mostrando primero los más cercanos.

Además, en Android, aparecen chips con tipos de objetos, como *Pueblo*, *Ciudad*, *Calle* o *Código postal*, encima de los resultados. Toque un chip para mostrar solo los resultados de ese tipo. Lea más en [Ordenar resultados de búsqueda](./search-all.md#sorting-search-results).

En Android, cuando el centro del mapa está a más de 50 m de su ubicación y el mapa no sigue su posición, la búsqueda se realiza alrededor del centro del mapa, y el campo de búsqueda muestra *Buscar a N km de distancia*. Cuando el centro del mapa está a más de 70 km de su ubicación, aparece un chip con el área de búsqueda, *Centro del mapa* o *Mi ubicación*, junto al chip de ordenación. Tóquelo para elegir dónde buscar. Lea más en [Buscar alrededor](./search-all.md#search-around).

OsmAnd proporciona varias formas de llegar a la herramienta de *Búsqueda*, donde se encuentra la sección **Búsqueda de Dirección**.

- El [botón de Búsqueda](../widgets/map-buttons.md#search) siempre se muestra en el mapa, y al tocarlo le llevará a la [pantalla general](#full-text-search) de la herramienta, donde puede encontrar la pestaña *Dirección*.
- Vaya al *Menú* principal de Android → *Búsqueda* → pestaña *Dirección*.
- Al prepararse para iniciar una ruta, toque *Navegación* → *Establecer destino* → Campo de *Búsqueda*.  


## Pestaña Dirección {#address-tab}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda Android](@site/static/img/search/search_address_2_andr.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda iOS](@site/static/img/search/street_search_ios.webp)  

</TabItem>

</Tabs>

La pestaña *Dirección* contiene botones para diferentes formas de buscar por dirección. Cada botón abre una lista de opciones sugeridas para elegir:

- [**Buscar calle en &lt;ciudad&gt;**](#select-street) (*Android*) / **Seleccionar calle en &lt;ciudad&gt;** (*iOS*) — Aparece si ha buscado una ciudad anteriormente. La última ciudad buscada ya está establecida, por lo que solo necesita escribir el nombre de la calle y elegirla de las calles sugeridas.
- [**Primero especificar ciudad/pueblo/localidad**](#select-city) (*Android*) / **Seleccionar ciudad** (*iOS*) — Siempre disponible. Abre inmediatamente una lista de ciudades, pueblos y aldeas, ordenada por nombre. La lista se reduce a medida que escribe.
- [**Búsqueda por código postal**](#postcode-search) — Siempre disponible. Cambia el campo de búsqueda a la entrada de código postal. La lista permanece vacía hasta que escriba al menos un carácter, luego aparecen los resultados coincidentes.
- [**Búsqueda por coordenadas**](#coordinates-search) — Siempre disponible. Abre la pantalla de entrada de coordenadas.

La lista **Ciudades más cercanas** se muestra debajo de los botones y muestra hasta 15 ciudades y pueblos alrededor de la ubicación de búsqueda, su posición o el centro del mapa. Cada elemento muestra el nombre, su tipo, *Ciudad* o *Pueblo*, y la distancia y dirección desde la ubicación de búsqueda. En Android, también se muestra la región.

## Búsqueda de texto completo {#full-text-search}

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

Cuando una consulta pueda referirse tanto a una dirección como a un PDI, OsmAnd prioriza automáticamente la interpretación más relevante en función del contexto, la distancia y la importancia del objeto.

**NOTA:** La búsqueda de direcciones funciona solo dentro de los mapas descargados. Los resultados de búsqueda se basan en:
- mapas instalados en su dispositivo;
- [el área visible del mapa](./search-all.md#how-to-use);
- su ubicación actual. 

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
| Número de casa dual + calle | 243/11 Husova |
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

Sin embargo, las consultas muy cortas o generales (por ejemplo, “Apple”) pueden devolver una mezcla de direcciones y PDIs, incluyendo una marca, nombre de calle o localidad con el mismo nombre. Para mejorar la precisión, intente agregar más detalles como el nombre de la ciudad, la calle o el nombre del PDI.

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


## Seleccionar Ciudad {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda de Calle Android](@site/static/img/search/town_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de Calle iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

Esta forma de búsqueda facilita la localización de lugares específicos dentro de una localidad seleccionada, proporcionando una forma cómoda de encontrar direcciones con precisión y rapidez. Puede empezar a buscar la dirección deseada determinando la localidad.

- Para ello, toque **Primero especificar ciudad/pueblo/localidad** (Android) o **Seleccionar ciudad** (iOS).
- En la lista que se abre, seleccione la localidad requerida. [Aquí](#full-text-search) se describe el orden en que se muestran las consultas de búsqueda y qué información está disponible sobre cada elemento.
- En Android, toque el chip de ordenación para elegir *Relevancia* o *Más cercano*. Cuando el centro del mapa está a más de 70 km de su ubicación, utilice el chip de área de búsqueda para elegir entre *Centro del mapa* y *Mi ubicación*. Los chips con tipos de localidad encontrados en los resultados, como *Ciudad*, *Pueblo* o *Aldea*, aparecen encima de la lista. Toque un chip para mostrar solo los resultados de ese tipo.
- En la siguiente pantalla, puede continuar refinando la dirección o mostrar la localidad en el mapa. En iOS, toque *Mostrar en el mapa* debajo del campo de búsqueda. En Android, toque el botón *Mostrar en el mapa*, el botón flotante en la esquina inferior derecha.
- Para especificar su búsqueda, puede introducir todo o sólo parte del nombre de la ciudad, pueblo o aldea donde se encuentra la dirección que busca. Esto le permite acotar la búsqueda y obtener una lista más precisa.
- Al tocar el último elemento de la dirección, el número de la casa o el nombre de la intersección, se abre el [menú contextual del mapa](../map/map-context-menu.md#select-an-object-single-tap) del objeto.  

:::note Clave y Valor
*Búsqueda de Ciudad / Pueblo / Aldea* por [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Resultado*: se muestran todos los objetos con este nombre.
:::


## Seleccionar Calle {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda de Calle Android](@site/static/img/search/street_search.webp) ![Búsqueda de Calle Android](@site/static/img/search/street_search_1.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de Calle iOS](@site/static/img/search/address_street_search_3_ios.png) ![Búsqueda de Calle iOS](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

La búsqueda de calles se realiza en la última ciudad que buscó. Su nombre se muestra en el botón, por lo que puede empezar directamente con la calle.

- Para utilizar este tipo de búsqueda, toque **Buscar calle en &lt;ciudad&gt;** (*Android*) o **Seleccionar calle en &lt;ciudad&gt;** (*iOS*).
- El nombre de la ciudad ya está introducido en el campo de búsqueda, y la lista de sus calles se abre inmediatamente. En el campo de búsqueda junto al nombre de la ciudad, puede empezar a escribir el nombre de la calle y la lista se irá refinando, ofreciéndole los resultados más apropiados.
- En Android, toque el chip de ordenación para elegir *Relevancia* o *Más cercano*. Cuando el centro del mapa está a más de 70 km de su ubicación, utilice el chip de área de búsqueda para elegir entre *Centro del mapa* y *Mi ubicación*. Los chips con tipos de objetos encontrados en los resultados, como *Calle* o *Edificio*, aparecen encima de la lista. Toque un chip para mostrar solo los resultados de ese tipo.
- Seleccione una calle para abrir la lista de sus edificios. Seleccione el número de casa requerido para abrir el [menú contextual del mapa](../map/map-context-menu.md#select-an-object-single-tap) de la dirección.
- En otros aspectos, la búsqueda de calles es la misma que en [Seleccionar Ciudad](#select-city).

:::note Clave y Valor
*Búsqueda de calles* por [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Resultado*: se muestran todas las calles con este nombre.
:::


## Búsqueda por Código Postal {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda por Código Postal Android](@site/static/img/search/postcode_android.webp)

Toque **Búsqueda por código postal** en la pestaña *Dirección*. La lista permanece vacía hasta que empiece a escribir. Introduzca el código postal, incluso un solo dígito, y la aplicación ofrece una lista de códigos postales coincidentes.

- Toque el chip de ordenación para elegir *Relevancia* o *Más cercano*. Cuando el centro del mapa está a más de 70 km de su ubicación, utilice el chip de área de búsqueda para elegir entre *Centro del mapa* y *Mi ubicación*. Toque el chip *Código postal* para mostrar solo los códigos postales en la lista.
- Seleccione el código postal requerido. Se abre la lista de calles con este código postal, y el código postal permanece en el campo de búsqueda.
- Para refinar la dirección, seleccione una calle y luego el número de casa. Esto abre el [menú contextual del mapa](../map/map-context-menu.md#select-an-object-single-tap) de la dirección.
- Para ver el propio código postal en el mapa, toque el botón *Mostrar en el mapa*, el botón flotante en la esquina inferior derecha. El mapa se abre con el [menú contextual](../map/map-context-menu.md#select-an-object-single-tap) del código postal.

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda por Código Postal iOS](@site/static/img/search/postcode_ios.png)

**Para utilizar la *Búsqueda por código postal*, sólo tiene que introducir el número**, que puede constar incluso de un solo dígito, y la aplicación le ofrecerá una lista de los códigos postales pertinentes disponibles.

- Seleccione el código requerido y tóquelo.
- Puede utilizar la función *Mostrar &lt;código postal&gt; en el mapa*. Esto abre un [menú contextual del mapa](../map/map-context-menu.md#select-an-object-single-tap) con el código postal seleccionado sin ninguna información adicional sobre la ubicación.
- Puede refinar su búsqueda por este código seleccionando primero la calle requerida de la lista y luego el número.

</TabItem>

</Tabs>

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
- [Explorar búsqueda](./search-history.md)
- [Buscar PDI](./search-poi.md)
- [Buscar por Coordenadas](./search-coordinates.md)