---
source-hash: 4555734ace3e7132cbe343a64b51b8a14b9f7d50262e566f5b87185e156e7f36
sidebar_position: 5
title:  Rutas de transporte público
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';




## Descripción general {#overview}

La navegación de transporte público en la aplicación OsmAnd te permite elaborar rutas utilizando el transporte público, lo que sin duda te ayudará a moverte por la "jungla de cemento" más rápido.

Los datos sobre las rutas de transporte público se toman del proyecto [OpenStreetMap](http://openstreetmap.org/). OsmAnd utiliza el [esquema PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) para la navegación. OsmAnd admite las siguientes rutas de OpenStreetMap para la navegación: *autobús*, *trolebús*, *taxi compartido*, *funicular*, *metro*, *tren ligero*, *monorraíl*, *tren*, *tranvía*, *ferry*. La velocidad predeterminada para cada tipo de vehículo está configurada en [Routing xml](../../../technical/build-osmand/routing.md) y se utiliza para encontrar las rutas más rápidas.

:::note
La ruta de transporte público está en fase de prueba. Por ahora, puedes construir y ver tu ruta sin la función de navegación completa.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navegación transporte público Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Navegación transporte público iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Cómo usar {#how-to-use}

Para empezar a navegar por la ciudad en transporte público, utiliza [el botón de navegación](../../widgets/map-buttons.md#directions) en la pantalla del mapa o selecciona la opción de navegación en el *Menú principal*.  

**1.** Debes elegir el *perfil de navegación de transporte público*, los puntos de inicio y destino.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Rutas de navegación de transporte público Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Rutas de navegación de transporte público iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd ofrece opciones de ruta con tiempos de caminata y rutas de transporte público con información de ruta: tiempo, distancia, transbordo y rutas públicas. Debes desplazarte por la pantalla de navegación para seleccionar la opción requerida.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ruta de navegación de transporte público Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ruta de navegación de transporte público iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Puedes ver todas las sugerencias de ruta posibles en el mapa usando el botón *Mostrar en el mapa*. Desliza las pantallas para ver la siguiente opción de ruta.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Detalles de navegación de transporte público Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Detalles de navegación de transporte público iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Toca el botón "Detalles" para abrir una descripción de la ruta seleccionada con todas las paradas y transbordos.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Lista de paradas de transporte público Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Lista de paradas de transporte público iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Datos y directrices {#data-and-guideline}

OsmAnd utiliza un nuevo esquema de transporte público, también llamado Public Transport Version 2 (PTv2) para el algoritmo de navegación de transporte público de OsmAnd.

- Puedes consultar tu transporte público [aquí](http://tools.geofabrik.de/osmi/).
- Una guía para construir o ajustar rutas de transporte público está disponible en nuestro [blog](https://osmand.net/blog/guideline-pt).
- La presentación [2019: Navegación de transporte público usando OpenStreetMap por OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).

> *Última actualización: junio de 2024.*