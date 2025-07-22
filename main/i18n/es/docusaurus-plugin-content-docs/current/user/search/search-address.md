---
source-hash: 7aa187a96947b5ca65aab12d710ed0867ffb5db9a42f53d9dfb15a99a9107f74
sidebar_position: 2
title: Buscar dirección
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

*OsmAnd Buscar por dirección* se basa en datos de OpenStreetMap y le permite encontrar la ubicación y las direcciones a una dirección específica de una lista ya ordenada, así como buscar por código postal o coordenadas. Esta herramienta le permite encontrar las direcciones requeridas en unos pocos toques, lo que reduce el tiempo de búsqueda y ayuda en caso de que no recuerde la dirección exacta.

OsmAnd ofrece varias formas de acceder a la *herramienta de búsqueda* donde se encuentra la sección **Buscar dirección**.

- El [botón de búsqueda](../widgets/map-buttons.md#search) siempre se muestra en el mapa, y al tocarlo, se le llevará a la [pantalla general](#full-text-search) de la herramienta, donde puede encontrar la pestaña *Dirección*.
- Vaya al *Menú* principal de Android → *Buscar* → pestaña *Dirección*.
- Al prepararse para iniciar una ruta, toque *Navegación* → *Establecer destino* → *Campo de búsqueda*.

## Búsqueda de texto completo {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Buscar Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

La búsqueda por dirección simplifica el proceso de búsqueda y navegación, garantiza la precisión y la usabilidad, y reduce el tiempo que lleva encontrar la dirección correcta.

- **Para usar la función de búsqueda de dirección,** primero debe [descargar un mapa](../start-with/download-maps.md) del área requerida.
- **La búsqueda se basa en los datos ubicados en el área visible del mapa** en la pantalla del dispositivo. Si no encuentra nada, OsmAnd ofrece aumentar el radio de búsqueda.
- La información de la dirección en OsmAnd contiene todas las [claves de etiqueta de OSM](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).

Lista de consultas de búsqueda:

**1.** El **orden** de los elementos en la lista:

- **Ordenado por nombre**. Al seleccionar *Primero especifique ciudad/pueblo/localidad* (Android) o *Seleccionar ciudad* (iOS) se mostrará una lista que comienza con elementos sin nombre, si los hay, luego nombres numéricos seguidos de los nombres por letras.
- **Orden numérico ascendente**. En la siguiente lista de búsqueda, los números de casa se muestran en orden ascendente, después de ingresar la ciudad y la calle.

**2.** Cada campo en la lista de búsqueda de direcciones contiene **información** como:

- Un icono que identifica el tipo de localidad.
- Parte de una dirección, número postal o área de coordenadas.
- Distancia desde su ubicación actual o desde el centro de la ciudad.
- Información adicional, como el distrito de la ciudad.

#### Búsqueda de direcciones en EE. UU. y datos TIGER {#us-address-search-and-tiger-data}

OsmAnd admite búsquedas de direcciones utilizando datos de OpenStreetMap, pero en los Estados Unidos, los resultados de búsqueda de direcciones pueden ser incompletos debido al uso de [datos TIGER](https://wiki.openstreetmap.org/wiki/TIGER).

- **Los datos TIGER proporcionan rangos de direcciones, no ubicaciones exactas**, esto significa que algunos números de casa pueden no ser reconocidos.
- **Si no se encuentra una dirección**, intente buscar *por nombre de calle* en lugar de un número de casa específico.
- Utilice *identificadores de ubicación alternativos*, como puntos de referencia cercanos o códigos postales, para refinar sus resultados de búsqueda.

### Formatos admitidos {#supported-formats}

Consulte el artículo [Buscar todo](./search-all.md#basic-queries) para obtener una lista de las consultas disponibles y los formatos de búsqueda admitidos.

## Seleccionar ciudad {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Buscar calle Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar calle iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Ciudades más cercanas**
Esto **muestra una pequeña lista de ciudades alrededor de su ubicación** o la localidad que especificó para *Seleccionar calle* o *Seleccionar ciudad*. Cada campo contiene un icono correspondiente al tamaño de la ciudad, el nombre de la ciudad, la distancia desde usted hasta su centro y, para Android, la dirección de la brújula.

Esta forma de búsqueda facilita la búsqueda de ubicaciones específicas dentro de una localidad seleccionada, lo que proporciona una forma conveniente de encontrar direcciones de forma precisa y rápida. Puede comenzar a buscar la dirección necesaria determinando la localidad.

- Para ello, toque **Primero especifique ciudad/pueblo/localidad** (Android) o **Seleccionar ciudad** (iOS).
- En la lista que se abre, seleccione la localidad requerida. [Aquí](#full-text-search) se describe el orden en que se muestran las consultas de búsqueda y qué información está disponible sobre cada elemento.
- En la siguiente pantalla, puede continuar refinando la dirección o seleccionar el botón *Mostrar en el mapa* debajo del campo de entrada de búsqueda.
- Para especificar su búsqueda, puede ingresar todo o solo parte del nombre de la ciudad, pueblo o aldea donde se encuentra la dirección que busca. Esto le permite reducir su búsqueda y obtener una lista más precisa.
- Al tocar el último elemento de la dirección, el número de casa o el nombre de la intersección, se abre el [menú contextual del mapa](../map/map-context-menu.md#select-an-object-single-tap) del objeto.

**La búsqueda por ciudad ofrece los siguientes beneficios:**

- *Conveniencia*. Le permite seleccionar rápidamente la ciudad requerida de la lista y especificar una calle, casa o intersección determinada en la ciudad seleccionada sin tener que ingresar la dirección completa. Esto ahorra tiempo y simplifica el proceso de encontrar el lugar correcto.
- *Precisión.* Puede seleccionar una ciudad y una calle de las opciones disponibles, evitando errores al ingresar una dirección manualmente.
- *Filtrado.* La capacidad de seleccionar una casa específica de la lista facilita la navegación precisa a la ubicación requerida, especialmente cuando se desconoce la dirección exacta.

:::note Clave y valor
*Búsqueda de ciudad/pueblo/aldea* por [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Resultado*: mostrando todos los objetos con este nombre.
:::

## Seleccionar calle {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Buscar calle Android](@site/static/img/search/street_search.png) ![Buscar calle Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar calle iOS](@site/static/img/search/address_street_search_3_ios.png) ![Buscar calle Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

La búsqueda de calles se realiza en la localidad donde se encuentra, o donde buscó antes, o que se encuentra en el centro del mapa visible en la pantalla de la aplicación.

- Para usar este tipo de búsqueda, toque **Buscar calle** (*Android*) o **Seleccionar calle** (*iOS*).
- En el campo de búsqueda junto al nombre de la ciudad, puede comenzar a escribir el nombre de la calle y la lista se refinará, dándole los resultados más apropiados.
- En otros elementos, la búsqueda de calles es la misma que en [Seleccionar ciudad](#select-city).

:::note Clave y valor
*Buscar calles* por [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Resultado*: se muestran todas las calles con este nombre.
:::

## Búsqueda por código postal {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Buscar código postal Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar código postal iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Para usar la *búsqueda por código postal*, solo necesita ingresar el número**, que puede consistir incluso en un solo dígito, y la aplicación ofrece una lista de códigos postales relevantes disponibles.

- Seleccione el código requerido y tóquelo.
- Puede usar la función *Mostrar *número de código postal* en el mapa*. Esto abre un [menú contextual del mapa](../map/map-context-menu.md#select-an-object-single-tap) con el código postal seleccionado sin ninguna información adicional sobre la ubicación.
- Puede refinar su búsqueda por este código seleccionando primero la calle requerida de la lista y luego el número.

**La búsqueda por código postal puede ser útil en los siguientes casos:**

- *Encontrar direcciones*. Cuando ingresa un código postal, OsmAnd identifica el área correspondiente y sugiere direcciones en esa área. Esto es especialmente útil si conoce el código postal pero no la dirección exacta.
- *Precisión de navegación*. En los casos en que la dirección no es segura, o donde el nombre de la calle puede repetirse en diferentes áreas, el uso de un código postal puede proporcionar la mejor ruta a una dirección determinada.
- *Conveniencia y velocidad*. La búsqueda por código postal le permite encontrar información rápidamente, especialmente si conoce el código postal pero no está seguro de la dirección. En lugar de ingresar la dirección completa, puede ingresar solo el código y obtener resultados relevantes.

:::note
Para obtener más información, lea los **[datos del código postal del Reino Unido](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::

## Búsqueda de coordenadas {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Buscar coordenadas Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar coordenadas iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

La [**Búsqueda de coordenadas**](../search/search-coordinates.md) le permite especificar coordenadas geográficas, como latitud y longitud, para encontrar una ubicación específica. Proporciona ubicaciones precisas en un mapa en diferentes [formatos de coordenadas](../search/search-coordinates.md#coordinates-search) y le permite obtener información relacionada. Esta función puede ser útil cuando no tiene una dirección o un nombre exacto de una ubicación, y puede facilitar la planificación de viajes y la navegación en lugares desconocidos.

## Artículos relacionados {#related-articles}

- [Buscar todo](./search-all.md)
- [Historial de búsqueda](./search-history.md)
- [Buscar PDI](./search-poi.md)
- [Buscar coordenadas](./search-coordinates.md)

> *Última actualización: julio de 2024*