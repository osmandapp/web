---
source-hash: 935cab06de14f7d40135dc91b1f1ba4ea6e4f6419796e6398db2850a17971af3
sidebar_position: 12
title: Tipos de rutas
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Descripción general {#overview}

Las rutas representan diferentes actividades al aire libre utilizando datos de [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Al tocar **el icono de escudo con un número de ruta o bandera de ruta** en el mapa se abrirá un menú contextual que proporciona información adicional sobre la ruta y permite utilizarla como parte de la navegación.

Puede configurar el filtrado de algunos tipos de rutas en el menú [Configurar mapa](../../map/configure-map-menu.md).

## Ciclismo {#cycle}

[Las rutas ciclistas](https://wiki.openstreetmap.org/wiki/Cycle_routes) están presentes en tres tipos: *local* (`lcn`), *regional* (`rcn`), *nacional* (`ncn`), *internacional* (`icn`). Además, las rutas ciclistas pueden formar parte de [redes de nodos](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Puede elegir cómo asignar color a los segmentos de ruta:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Puede encontrar más información en el artículo [Leyenda del mapa](../../map-legend/osmand.md#cycling).


## Bicicleta de montaña {#mountain-bike}

Las rutas MTB tienen un mapeo específico en [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) y pueden seleccionarse por separado de las rutas ciclistas.

- ***<Translate android="true" ids="mtb_scale"/>***.  Muestra los senderos según la escala MTB. Hay más información en el artículo [Leyenda del mapa](../../map-legend/osmand.md#mtb).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Muestra los senderos MTB según la International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Hay más información en el artículo [Leyenda del mapa](../../map-legend/osmand.md#mtb).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

## Senderismo / Caminata {#hiking--walking}

[Las rutas de senderismo](https://wiki.openstreetmap.org/wiki/Walking_Routes) están presentes en tres tipos: *local* (`lwn`), *regional* (`rwn`), *nacional* (`nwn`), *internacional* (`iwn`). Además, las rutas de senderismo pueden formar parte de [redes de nodos](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd no separa las rutas de senderismo y caminata y las combina en 1 grupo. Puede elegir cómo asignar color a los segmentos de ruta:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Colorea las rutas según su [color local](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) individual (si está disponible en OpenStreetMap) y el símbolo del escudo turístico.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Colorea por [afiliación a la red](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Colorea las rutas según el tipo de [red de nodos](https://wiki.openstreetmap.org/wiki/Node_Networks) (internacional, regional o local).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


## Rutas de motocross {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

La función **Rutas de motocross** permite mostrar en el mapa rutas específicas para motocross basadas en la etiqueta `dirtbike:scale`. Esta escala resalta los senderos aptos para motocross, con una superposición de colores que muestra los niveles de dificultad ([Leyenda del mapa](../../map-legend/osmand.md#dirtbike-scale)).  

Puede activar esta función en *Menú → Configurar mapa → Rutas → Rutas de motocross*. El sistema funciona de forma similar a la escala MTB, ofreciendo una representación visual de las rutas adaptadas al motocross; más información sobre la [etiqueta `dirtbike` puede encontrarse aquí](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


## Rutas de escalada {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd admite *zonas de escalada* (`climbing=area`) y *paredes de escalada* (`climbing=crag`), lo que le permite encontrar ubicaciones de [escalada en roca](https://wiki.openstreetmap.org/wiki/Climbing) directamente en el mapa.

- **Zonas de escalada** representan **zonas más grandes** donde existen múltiples rutas de escalada.

- **Paredes de escalada** se refieren a **formaciones rocosas específicas** o paredes aptas para escalar.

- Estas ubicaciones incluyen **atributos detallados** como:

    - *Grado de escalada* (por ejemplo, UIAA, francés, YDS).
    - *Tipo de roca* (por ejemplo, caliza, granito).
    - *Longitud de la ruta* (en metros).
    - *Calidad de la escalada* (sólida, suelta, mixta).
    - *Disponibilidad de libro de cumbres*.

Para activar las ubicaciones de escalada en el mapa, vaya a: *Menú → Configurar mapa → Rutas → Rutas de escalada*.


## Grado de dificultad de senderos de senderismo {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Algunos segmentos de carretera pueden formar parte de muchas rutas, pero pueden colorearse individualmente para representar la dificultad del segmento en zonas montañosas. Actualmente, OsmAnd admite las clasificaciones italiana y suiza, y cada una tiene una lista específica de requisitos de equipo para acceder a este segmento.  

1. [Escala SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Escala CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


## Pistas y rutas de esquí {#ski-slopes-and-routes}

- _Pistas y rutas de esquí_ en el estilo de mapa _Invierno y esquí_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _Pistas y rutas de esquí_ en el estilo de mapa _OsmAnd predeterminado_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

Las pistas y rutas de esquí son un grupo específico de [rutas](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) en OpenStreetMap. Normalmente, estas rutas pueden utilizarse con el estilo de mapa [Invierno y esquí](../../map/map-styles.md#winter-and-ski) con todas las [pistas](https://wiki.openstreetmap.org/wiki/Pistes) visibles. Si está activo otro estilo de mapa, se muestra un banner que sugiere cambiar a [Invierno y esquí](../../map/map-styles.md#winter-and-ski) (*solo Android*) y solo se muestran las pistas. Toque ***Cambiar*** para cambiar el estilo de mapa sin salir de la pantalla actual, o ***Más tarde*** para ocultar el banner.


## Rutas de motos de nieve {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail_new.png)

Las rutas de motos de nieve están mapeadas en [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) como `route=snowmobile`. Se utilizan para el recreo invernal y para conectar zonas remotas durante la temporada de nieve. En OsmAnd, las rutas de motos de nieve son clicables; consulte la sección [Acciones con rutas](./index.md#actions-with-routes).


## Rutas ecuestres {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Las rutas ecuestres](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) se muestran como rutas indicadas por colores con símbolos para la equitación.  


## Deportes de aguas bravas {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Las rutas de aguas bravas](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) se muestran junto con iconos de acceso, zonas de peligro y rápidos cercanos para el [turismo de aguas bravas](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). Consulte [Características de aguas bravas](../../map-legend/osmand.md#whitewater-features) en la Leyenda del mapa para los grados de rápidos, grados de secciones de río y símbolos relacionados.


## Carrera {#running}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Las rutas de carrera](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) en OpenStreetMap se utilizan para rutas de carrera nombradas, numeradas o marcadas de otro modo, principalmente para el atletismo.


## Circuitos de fitness {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

Un [circuito de fitness](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) es un sendero o camino equipado con obstáculos o estaciones a lo largo de su longitud para ejercitar el cuerpo humano y mejorar la salud.  


## Viajes {#travel}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Las rutas de viaje forman parte de archivos personalizados de [Guía de viaje](../../plan-route/travel-guides.md) (`travel.obf`), que pueden generarse a partir de las [rutas del usuario](https://osmand.net/blog/routes#generated-travel-routes) o formar parte de [complementos](../../plugins/index.md) adicionales.  

Puede personalizar la visualización de ciertos ***libros de viaje*** y tipos de ***trayectos***, mostrar trayectos como puntos o ***grupos de puntos*** (por ejemplo, para libros de viaje de Wikiviajes). Obtenga más información sobre [Guías de viaje aquí](../../plan-route/travel-guides.md).


## Artículos relacionados {#related-articles}

- [Configurar mapa](../../map/configure-map-menu.md)
- [Leyenda del mapa](../../map-legend/osmand.md)
- [Rutas](./index.md)