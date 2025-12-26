---
source-hash: 4d9f5039ab11085fb01ba9a87295b0709bf9134ac4123b410ba74a735353f314
sidebar_position: 5
title:  Enrutamiento de Transporte Público
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Overview {#overview}

La navegación de transporte público en la aplicación OsmAnd le permite calcular las rutas utilizando el transporte público, lo que sin duda le ayudará a moverse más rápido por la "jungla de asfalto".

Los datos sobre las rutas de transporte público se toman del proyecto [OpenStreetMap](http://openstreetmap.org/). OsmAnd utiliza el [esquema PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) para la navegación. OsmAnd admite las siguientes rutas de OpenStreetMap para la navegación: *bus*, *trolleybus*, *share_taxi*, *funicular*, *subway*, *light_rail*, *monorail*, *train*, *tram*, *ferry*. La velocidad predeterminada para cada tipo de vehículo se configura en [Routing xml](../../../technical/build-osmand/routing.md) y se utiliza para encontrar las rutas más rápidas.

:::note
El enrutamiento de transporte público está en fase de pruebas. Por ahora, puede crear y ver su ruta sin la función de navegación completa.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navegación transporte público Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Navegación transporte público iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## How to Use {#how-to-use}

Para comenzar a navegar por la ciudad en transporte público, use [el botón de navegación](../../widgets/map-buttons.md#directions) en la pantalla del mapa o seleccione la opción de navegación en el *Menú principal*.  

**1.** Debe elegir el *perfil de navegación de Transporte público*, los puntos de inicio y de destino.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rutas de navegación de transporte público Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Rutas de navegación de transporte público iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd ofrece opciones de ruta con tiempos de caminata y rutas de transporte público con información de la ruta: tiempo, distancia, transbordo y rutas públicas. Debe desplazarse por la pantalla de navegación para seleccionar la opción requerida.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trayecto de navegación de transporte público Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Trayecto de navegación de transporte público iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Puede ver todas las sugerencias de rutas posibles en el mapa usando el botón *Mostrar en el mapa*. Deslice el dedo por las pantallas para ver la siguiente opción de ruta.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalles de navegación de transporte público Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Detalles de navegación de transporte público iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Toque el botón "Detalles" para abrir una descripción de la ruta seleccionada con todas las paradas y transbordos.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de paradas de navegación de transporte público Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Lista de paradas de navegación de transporte público iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>

## Public Transport Types {#public-transport-types}

Puede buscar rutas de transporte público bien curadas según sus preferencias y elegir evitar:

- Autobuses (y trolebuses)
- Metro
- Trenes
- Tranvías
- Ferries
- Taxi compartido

Por defecto, OsmAnd busca rutas que incluyan todos los tipos de transporte público compatibles.

## Alternative Routes {#alternative-routes}

Las rutas alternativas son secciones de una ruta que son atendidas por diferentes servicios de transporte y comparten el mismo camino y paradas.

Diferentes servicios de transporte pueden usar números de ruta (refs) diferentes o incluso diferentes tipos de transporte.

La interfaz de usuario muestra las rutas alternativas como insignias de color con sus refs.

## Performance and Results {#performance-and-results}

**Perfil de Transporte Público -> Configuración -> Configuración de navegación -> Parámetros de ruta**

1. **Número máximo de cambios de transporte**.

El rendimiento y el consumo de memoria del enrutador de Transporte Público dependen de la profundidad de búsqueda.

El parámetro más importante que afecta esta profundidad es el **Número máximo de cambios de transporte**.

Usamos **2** como valor predeterminado, que parece óptimo para las redes modernas de transporte público.

Si encuentra bajo rendimiento o errores de memoria insuficiente, pruebe disminuyendo este valor.

Si está en una ciudad pequeña o viaja rutas cortas, un valor de **1** puede funcionar mejor.
<!--
There are two more parameters that help you choose the best routes.

2. **Display N best routes** (specify the number of best routes to display)

By default, OsmAnd displays the **10** best routes (including alternative routes).

You can decrease or increase this limit, or even display all routes.

Note: displaying unlimited routes might slow down your device.

Possible values: 0 (show all), 5, 10 (default), 15, 100
-->

## Data and Guideline {#data-and-guideline}

OsmAnd utiliza un nuevo esquema de transporte público, también llamado Public Transport Version 2 (PTv2) para el algoritmo de navegación de Transporte Público de OsmAnd.

- Puede verificar su transporte público [aquí](http://tools.geofabrik.de/osmi/).
- Una guía para construir o ajustar rutas de transporte público está disponible en nuestro [blog](https://osmand.net/blog/guideline-pt).
- La presentación [2019: Navegación de Transporte Público usando OpenStreetMap por OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).