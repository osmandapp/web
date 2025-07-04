---
source-hash: 1089ba9ce4a9f9d1985bccd4ba5ebfe5e0e35eb8437bb1a83fe1c4859bf5a769
sidebar_position: 10
title: Transporte público
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Descripción general {#overview}

El transporte público es una capa adicional que le permite mostrar rutas y paradas de transporte en el mapa, verificar información detallada sobre ellas y navegar.

## Paradas de transporte (capa) {#transport-stops-layer}

Activar/desactivar la capa de transporte público:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Capa de transporte público Android](@site/static/img/map/pt_layer_android.png) ![Capa de transporte público iOS](@site/static/img/map/pt_layer_ios.png)

Elija entre 1 o más categorías de transporte para mostrar:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[Leer más](../map/vector-maps.md#transport) sobre cómo se muestra el transporte en el mapa.


## Rutas de transporte (menú contextual) {#transport-routes-context-menu}

![Menú de ruta de transporte público Android](@site/static/img/map/pt_routemenu_android.png) ![Menú de ruta de transporte público iOS](@site/static/img/map/pt_routemenu_ios.png)

Para abrir el menú de transporte, puede tocar el icono de transporte. Muestra:

- Escudos de transporte público de colores (**haga clic**)
- [Lista de las rutas](#routes) que paran en esa parada o cerca (dentro de 150 m)
- Nombre de la parada y otros [detalles](#transport-stop-details)

### Detalles de la parada de transporte {#transport-stop-details}

![Detalles del menú de ruta de transporte público Android](@site/static/img/map/pt_routemenu_details_android.png) ![Menú de ruta de transporte público iOS](@site/static/img/map/pt_routemenu_details_ios.png)

La parada de transporte público proporciona detalles adicionales en comparación con el objeto estándar de OpenStreetMap [menú](../map/map-context-menu.md#details):

- Presencia de banco
- Presencia de cubierta
- Accesibilidad para sillas de ruedas
- Nombre del operador

**Nota**: puede filtrar las paradas por ciertos criterios. Por ejemplo, expanda y toque "Banco" / "Sí" y podrá ver la lista de paradas con bancos. También podrían [mostrarse en el mapa](../map/point-layers-on-map.md#points-of-interest-pois).


### Rutas {#routes}

![Rutas de transporte público Android](@site/static/img/map/pt_routes_android.png) ![Rutas de transporte público iOS](@site/static/img/map/pt_routes_ios.png)

Las rutas de transporte son todas las rutas de transporte público que se acercan a través de la parada seleccionada y las rutas cercanas (dentro de 150 m). La información de las rutas se toma de los [datos de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Public_transport) como referencia, nombre, color y tipo.

**Color del escudo**:

- Metro - color de línea propio
- Ferrocarril - marrón
- Autobús y otros - rojo
- Tranvía - azul
- Trolebús - morado

### Explorar ruta {#browse-route}

![Lista de rutas de transporte público Android](@site/static/img/map/pt_route_list_android.png) ![Lista de rutas de transporte público Android](@site/static/img/map/pt_route_list_ios.png)

Puede acceder al menú Explorar ruta **haciendo clic en un escudo** o **seleccionando una ruta** de la lista de rutas. Después de eso, puede navegar entre paradas haciendo clic en '<Translate android="true" ids="shared_string_previous"/>' y '<Translate android="true" ids="shared_string_next"/>'. La información de la parada se actualizará en el menú y la parada se ubicará en el mapa.

Puede ver la lista completa de paradas haciendo clic en <Translate android="true" ids="rendering_category_details"/>. La parada seleccionada actualmente está marcada con un icono de 'ubicación' en la lista de rutas.

> **NOTA**: *Si toca el botón <Translate android="true" ids="get_directions"/>, obtendrá una ruta desde su ubicación actual hasta la estación de transporte público seleccionada.*


## Artículos relacionados {#related-articles}

- [Mapas vectoriales](../map/vector-maps.md)
- [Navegación de transporte público](../navigation/routing/public-transport-navigation.md)

> *Última actualización: agosto de 2022*