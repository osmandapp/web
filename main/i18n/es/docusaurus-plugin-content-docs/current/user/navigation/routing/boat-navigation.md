---
source-hash: 11f96851fe0f021db695918bd99476a396fc4a1e4d35dc2c02f19b4d9f965751
sidebar_position: 8
title:  Rutas para embarcaciones
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Generalidades {#overview}

El enrutamiento de embarcaciones puede ser una herramienta valiosa para cualquiera que disfrute de la navegación en barco o vela por canales, ríos o vías navegables. Debido a la falta de la mayoría de las vías navegables en los datos de OpenStreetMap, el enrutamiento de embarcaciones *no se recomienda* para la **navegación en aguas abiertas**, se sugiere usar **[Directo a punto](#direct-to-point-routing-for-boat)** en su lugar. Con las líneas de contorno de profundidad habilitadas, puede ayudarle a mantenerse seguro en el agua evitando peligros como aguas poco profundas, rocas u otros obstáculos.
El motor de enrutamiento de embarcaciones de OsmAnd también tiene en cuenta las características de las vías navegables y de las propias embarcaciones.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pantalla de navegación de embarcaciones Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pantalla de navegación de embarcaciones iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Parámetros de ruta - Embarcación {#route-parameters---boat}

:::note
Por defecto, el *perfil de embarcación* está desactivado. Para usar este perfil para el enrutamiento, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

El enrutamiento de embarcaciones se puede configurar según sus necesidades en la sección [Parámetros de ruta](../../navigation/guidance/navigation-settings.md#route-parameters) de la configuración de navegación.

Normalmente, el *enrutamiento de embarcaciones* se utiliza con el perfil de embarcación (el último habilitado junto con el [complemento Náutico](../../plugins/nautical-charts.md)). Sin embargo, es posible usar el enrutamiento de embarcaciones con otros perfiles también, y diferentes [tipos de enrutamiento](#other-routing-types-for-boat) también se pueden emplear en el perfil de embarcación.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Configuración de enrutamiento de embarcaciones Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración de enrutamiento de embarcaciones iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Permite usar arroyos y desagües para la navegación en barco. Habilitar esta opción puede ser útil para embarcaciones pequeñas como canoas, kayaks, balsas, botes de remos. | [Arroyos](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) son vías fluviales de formación natural que son demasiado estrechas para ser llamadas río. [Desagües](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) son vías fluviales artificiales, típicamente revestidas de hormigón o similar, utilizadas para transportar agua superflua como aguas pluviales o descargas de aguas grises.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Activar esta opción permite usar vías fluviales intermitentes para navegar en barco. | La etiqueta [Intermitente](https://wiki.openstreetmap.org/wiki/Key:intermittent) se usa para indicar que una vía fluvial no contiene agua permanentemente. |


:::note Navegación y Limitación del Agua

1. El perfil de embarcación está diseñado para el enrutamiento a lo largo de ríos, lagos y otras vías fluviales. Admite etiquetas OSM como:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, etc.

2. El perfil de embarcación **no admite rutas de ferry (`route=ferry`)**. Esto significa que las rutas de ferry, incluso si están presentes en el mapa, **no se utilizarán** al calcular las rutas de embarcación.

3. Para seguir una línea de ferry manualmente:

    - Utilice la herramienta [Planificar una ruta](../../plan-route/create-route.md) y coloque los puntos de paso manualmente.
    - Utilice el perfil de coche, que admite rutas de ferry

:::

## Otros tipos de enrutamiento para embarcaciones {#other-routing-types-for-boat}

El tipo de [enrutamiento de embarcaciones](#route-parameters---boat) es un algoritmo de enrutamiento predeterminado para el perfil de embarcaciones. Aunque puede elegir otro tipo de enrutamiento, que también sea adecuado para la navegación de embarcaciones:

 - [Enrutamiento directo a punto para embarcaciones](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Enrutamiento en línea recta para embarcaciones](./boat-navigation.md#straight-line-routing-for-boat)

Es importante tener en cuenta que los tipos de enrutamiento *Directo a punto* y *Línea recta* solo deben usarse en aguas abiertas donde no haya obstáculos o peligros para la navegación. Si está navegando en una vía fluvial con un canal o ruta específica, debe usar el tipo de enrutamiento de embarcaciones en OsmAnd, que lo guiará a través de los canales de navegación correctos y evitará áreas poco profundas u otros peligros.

Estos tipos de enrutamiento para el perfil de embarcación se pueden activar siguiendo la siguiente ruta: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> u otro) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Enrutamiento directo a punto para embarcaciones {#direct-to-point-routing-for-boat}

:::note
Al usar los tipos de navegación Directo a punto y Embarcación, necesitará [datos de contornos de profundidad](../../plugins/nautical-charts.md#nautical-map-style), que se pueden habilitar y configurar en *Configurar mapa*.
:::

El [tipo de enrutamiento directo a punto](./direct-to-point-routing.md) se puede usar con el perfil de embarcación cuando desea navegar su embarcación en aguas abiertas sin seguir ninguna ruta o vía fluvial específica. Este tipo de enrutamiento le permite establecer un punto de destino y OsmAnd calculará una ruta directa a ese punto desde su ubicación actual. Este tipo de enrutamiento no considera las características de su embarcación, como las velocidades mínima y máxima, la altura y el ancho. Su ruta no se recalculará en caso de desviación.

![Tipo de navegación directo a punto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Enrutamiento en línea recta para embarcaciones {#straight-line-routing-for-boat}

El [tipo de enrutamiento en línea recta](./straight-line-routing) se puede usar con el perfil de embarcación cuando desea navegar su embarcación en aguas abiertas pero prefiere seguir una línea recta en lugar de una ruta curva hasta su punto de destino. Esto puede ser útil al navegar a un punto distante, que es visible en el horizonte, por ejemplo.

![Tipo de navegación en línea recta Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)


## Otras configuraciones de enrutamiento {#other-routing-settings}

- El algoritmo de enrutamiento también puede considerar las limitaciones temporales especificadas en OpenStreetMap. Esto se puede hacer usando la opción *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Tenga en cuenta que en algunos casos, la información de OSM puede estar desactualizada.

- En la sección [*Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puede habilitar y ajustar las opciones de recálculo de ruta.

- En la [*sección de desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puede probar nuevas funciones de enrutamiento que actualmente se encuentran en fase de prueba. Tenga en cuenta que estas configuraciones solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

- La configuración *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* en la versión *iOS* de OsmAnd se encuentra en *Configuración de navegación → Parámetros de ruta* (para *Android*, en *Parámetros del vehículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Esta configuración se utiliza en carreteras desconocidas sin límites de velocidad. Esto suele ocurrir al navegar por una pista o una ruta en línea. Debe configurarse de acuerdo con los parámetros de su vehículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuración adecuada de los ajustes le ayudará a evitar problemas al crear una ruta. Puede seleccionar la ruta más adecuada según el tipo de vehículo y las restricciones de la carretera, así como calcular el tiempo de viaje.

> *Última actualización: mayo de 2025*