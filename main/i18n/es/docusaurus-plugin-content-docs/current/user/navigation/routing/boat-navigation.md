---
source-hash: 69c9152b46bd602e4e14ecd9e4b32486e697cb14ccb9d69f550affbb8ed29cd6
sidebar_position: 8
title:  Navegación en barco
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

La navegación en barco puede ser una herramienta valiosa para cualquiera que disfrute de la navegación a vela o en bote por canales, ríos o vías navegables. Debido a la falta de la mayoría de las vías navegables en los datos de OpenStreetMap, el enrutamiento en barco *no se recomienda* para la **navegación en aguas abiertas**, se sugiere usar **[Directo a un punto](#direct-to-point-routing-for-boat)** en su lugar. Con las líneas de contorno de profundidad habilitadas, puede ayudarle a mantenerse seguro en el agua evitando peligros como aguas poco profundas, rocas u otros obstáculos.  
El motor de enrutamiento en barco de OsmAnd también tiene en cuenta las características de las vías fluviales y de los propios barcos.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pantalla de navegación en barco Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Pantalla de navegación en barco iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)  

</TabItem>

</Tabs>  

## Parámetros de ruta - Barco {#route-parameters---boat}

:::note
Por defecto, el perfil *Barco* está desactivado. Para usar este perfil para el enrutamiento, necesita activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

El enrutamiento en barco se puede configurar según sus necesidades en la sección [Parámetros de ruta](../../navigation/guidance/navigation-settings.md#route-parameters) de los ajustes de Navegación.  

Normalmente, el *enrutamiento en barco* se utiliza con el perfil de barco (el último habilitado junto con el [complemento Náutico](../../plugins/nautical-charts.md)).  Sin embargo, es posible usar el enrutamiento en barco con otros perfiles también, y diferentes [tipos de enrutamiento](#other-routing-types-for-boat) también se pueden emplear en el perfil de barco.  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Ajustes de enrutamiento en barco Android](@site/static/img/navigation/routing/boat_route_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de enrutamiento en barco iOS](@site/static/img/navigation/routing/boat_route_ios.png)  

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Le permite usar arroyos y desagües para la navegación en barco. Habilitar esta opción puede ser útil para barcos pequeños como canoas, kayaks, balsas, botes de remos. |  [Arroyos](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) son cursos de agua de formación natural que son demasiado estrechos para ser llamados río. [Desagües](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) son cursos de agua artificiales, típicamente revestidos de hormigón o similar, utilizados para transportar agua superflua como agua de tormenta o descarga de aguas grises.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* |  Activar esta opción le permite usar vías fluviales intermitentes para navegar en barco.   | La etiqueta [Intermitente](https://wiki.openstreetmap.org/wiki/Key:intermittent) se usa para indicar que una vía fluvial no contiene agua permanentemente.  |
| *Permitir ferris* | Habilita el enrutamiento a través de rutas de ferry. | Usa `route=ferry` donde esté presente en OSM. No se requieren nuevos mapas. |

:::note Navegación acuática y limitaciones

1. El perfil de Barco está diseñado para el enrutamiento a lo largo de ríos, lagos y otras vías fluviales. Soporta etiquetas de OSM como:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, etc.

2. El perfil de Barco también soporta **rutas de ferry (`route=ferry`)** cuando la opción **Permitir ferris** está habilitada. Esto significa que si las rutas de ferry están presentes en el mapa, se utilizarán al calcular las rutas en barco.

3. Si no hay vías fluviales o rutas de ferry adecuadas mapeadas en OSM, el motor de enrutamiento puede no ser capaz de construir una ruta adecuada. En tales casos, puede usar la herramienta Planificar una ruta y colocar puntos de ruta manualmente.

:::

## Otros tipos de enrutamiento para barco {#other-routing-types-for-boat}

El tipo de [enrutamiento en barco](#route-parameters---boat) es un algoritmo de enrutamiento predeterminado para el perfil de Barco. Aunque puede elegir otro tipo de enrutamiento, que también es adecuado para la navegación en barco:  

 - [Enrutamiento directo a un punto para barco](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Enrutamiento en línea recta para barco](./boat-navigation.md#straight-line-routing-for-boat)

Es importante tener en cuenta que los tipos de enrutamiento *Directo a un punto* y *Línea recta* solo deben usarse en aguas abiertas donde no haya obstáculos o peligros para la navegación. Si está navegando en una vía fluvial con un canal o ruta específica, debe usar el tipo de enrutamiento en barco en OsmAnd, que lo guiará a través de los canales de navegación correctos y evitará áreas poco profundas u otros peligros.  

Estos tipos de enrutamiento para el perfil de barco se pueden activar usando la siguiente ruta: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> u otro) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Enrutamiento directo a un punto para barco {#direct-to-point-routing-for-boat}

:::note
Al usar los tipos de navegación Directo a un punto y Barco, necesitará [datos de contornos de profundidad](../../plugins/nautical-charts.md#nautical-map-style), que se pueden habilitar y configurar en *Configurar mapa*.
:::

El [tipo de enrutamiento directo a un punto](./direct-to-point-routing.md) se puede usar con el perfil de barco cuando desea navegar su barco en aguas abiertas sin seguir ninguna ruta o vía fluvial específica. Este tipo de enrutamiento le permite establecer un punto de destino y OsmAnd calculará una ruta directa a ese punto desde su ubicación actual. Este tipo de enrutamiento no considera las características de su barco, como las velocidades mínima y máxima, la altura y la anchura. Su ruta no se recalculará en caso de desviación.

![Tipo de navegación directo a un punto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Enrutamiento en línea recta para barco {#straight-line-routing-for-boat}

El [tipo de enrutamiento en línea recta](./straight-line-routing) se puede usar con el perfil de barco cuando desea navegar su barco en aguas abiertas pero prefiere seguir una línea recta en lugar de una ruta curva hacia su punto de destino. Esto puede ser útil al navegar hacia un punto distante, que es visible en el horizonte, por ejemplo.

![Tipo de navegación en línea recta Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)