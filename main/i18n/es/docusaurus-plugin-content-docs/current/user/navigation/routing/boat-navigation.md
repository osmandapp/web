---
source-hash: 89f0bd9a9dfbfdb2158d837c90031efd8ceeca297a50647bb295c32585e91830
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

Las rutas para embarcaciones pueden ser una herramienta valiosa para cualquiera que disfrute de la navegación en canales, ríos o vías navegables. Debido a la falta de la mayoría de las vías navegables en los datos de OpenStreetMap, la ruta para embarcaciones *no se recomienda* para la **navegación en aguas abiertas**, se sugiere usar **[Directo a un punto](#direct-to-point-routing-for-boat)** en su lugar. Con las líneas de contorno de profundidad habilitadas, puede ayudarte a mantenerte seguro en el agua evitando peligros como aguas poco profundas, rocas u otros obstáculos.
El motor de rutas para embarcaciones de OsmAnd también tiene en cuenta las características de las vías navegables y de las propias embarcaciones.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pantalla de navegación para embarcaciones Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pantalla de navegación para embarcaciones iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Parámetros de ruta - Embarcación {#route-parameters---boat}

:::note
Por defecto, el *perfil de embarcación* está desactivado. Para usar este perfil para el enrutamiento, debes activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Las rutas para embarcaciones se pueden configurar según tus necesidades en la sección [Parámetros de ruta](../../navigation/guidance/navigation-settings.md#route-parameters) de la configuración de Navegación.

Normalmente, las *rutas para embarcaciones* se utilizan con el perfil de embarcación (el último habilitado junto con el [complemento Náutico](../../plugins/nautical-charts.md)). Sin embargo, es posible utilizar las rutas para embarcaciones con otros perfiles también, y se pueden emplear diferentes [tipos de rutas](#other-routing-types-for-boat) en el perfil de embarcación.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configuración de rutas para embarcaciones Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración de rutas para embarcaciones iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Permite usar arroyos y desagües para la navegación en embarcaciones. Habilitar esta opción puede ser útil para embarcaciones pequeñas como canoas, kayaks, balsas, botes de remos. | Los [arroyos](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) son vías fluviales de formación natural que son demasiado estrechas para ser llamadas ríos. Los [desagües](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) son vías fluviales artificiales, típicamente revestidas de hormigón o similar, utilizadas para transportar agua superflua como aguas pluviales o descargas grises. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Activar esta opción permite usar vías fluviales intermitentes para navegar en embarcaciones. | La etiqueta [Intermitente](https://wiki.openstreetmap.org/wiki/Key:intermittent) se usa para indicar que una vía fluvial no contiene agua permanentemente. |

:::note Navegación y limitaciones del agua

1. El perfil de embarcación está diseñado para rutas a lo largo de ríos, lagos y otras vías fluviales. Admite etiquetas de OSM como:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, etc.

2. El perfil de embarcación **no admite rutas de ferry (`route=ferry`)**. Esto significa que las rutas de ferry, incluso si están presentes en el mapa, **no se utilizarán** al calcular las rutas de embarcación.

3. Para seguir una línea de ferry manualmente:

    - Utiliza la herramienta [Planificar una ruta](../../plan-route/create-route.md) y coloca los puntos de referencia manualmente.
    - Utiliza el perfil de coche, que admite rutas de ferry.

:::

## Otros tipos de rutas para embarcaciones {#other-routing-types-for-boat}

El tipo de [ruta para embarcaciones](#route-parameters---boat) es un algoritmo de ruta predeterminado para el perfil de embarcación. Aunque puedes elegir otro tipo de ruta, que también sea adecuado para la navegación en embarcaciones:

- [Ruta directa a un punto para embarcaciones](./boat-navigation.md#direct-to-point-routing-for-boat)
- [Ruta en línea recta para embarcaciones](./boat-navigation.md#straight-line-routing-for-boat)

Es importante tener en cuenta que los tipos de rutas *Directa a un punto* y *Línea recta* solo deben usarse en aguas abiertas donde no haya obstáculos o peligros para la navegación. Si estás navegando en una vía fluvial con un canal o ruta específica, debes usar el tipo de ruta para embarcaciones en OsmAnd, que te guiará a través de los canales de navegación correctos y evitará áreas poco profundas u otros peligros.

Estos tipos de rutas para el perfil de embarcación se pueden activar siguiendo la siguiente ruta: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> u otro) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.

### Ruta directa a un punto para embarcaciones {#direct-to-point-routing-for-boat}

:::note
Al usar los tipos de navegación Directo a un punto y Embarcación, necesitarás [datos de contornos de profundidad](../../plugins/nautical-charts.md#nautical-map-style), que se pueden habilitar y configurar en *Configurar mapa*.
:::

El [tipo de ruta directa a un punto](./direct-to-point-routing.md) se puede usar con el perfil de embarcación cuando se desea navegar en aguas abiertas sin seguir una ruta o vía fluvial específica. Este tipo de ruta permite establecer un punto de destino y OsmAnd calculará una ruta directa a ese punto desde la ubicación actual. Este tipo de ruta no considera las características de la embarcación, como las velocidades mínima y máxima, la altura y la anchura. La ruta no se recalculará en caso de desviación.

![Tipo de navegación directa a un punto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

### Ruta en línea recta para embarcaciones {#straight-line-routing-for-boat}

El [tipo de ruta en línea recta](./straight-line-routing) se puede usar con el perfil de embarcación cuando se desea navegar en aguas abiertas, pero se prefiere seguir una línea recta en lugar de una ruta curva hasta el punto de destino. Esto puede ser útil al navegar hacia un punto distante, que es visible en el horizonte, por ejemplo.

![Tipo de navegación en línea recta Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)

## Otras configuraciones de ruta {#other-routing-settings}

- El algoritmo de enrutamiento también puede considerar limitaciones temporales especificadas en OpenStreetMap. Esto se puede hacer usando la opción *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Ten en cuenta que en algunos casos, la información de OSM puede estar desactualizada.

- En la [*sección Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puedes habilitar y ajustar las opciones de recalcular ruta.

- En la [*sección Desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puedes probar nuevas funciones de enrutamiento que actualmente están en fase de prueba. Ten en cuenta que estas configuraciones solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

- La configuración *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* en la versión *iOS* de OsmAnd se encuentra en *Configuración de navegación → Parámetros de ruta* (para *Android*, en *Parámetros del vehículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Esta configuración se utiliza en carreteras desconocidas sin límites de velocidad. Esto suele ocurrir al navegar por una pista o una ruta en línea. Debe configurarse de acuerdo con los parámetros de tu vehículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Configurar correctamente los ajustes te ayudará a evitar problemas al crear una ruta. Puedes seleccionar la ruta más adecuada según el tipo de vehículo y las restricciones de la carretera, así como calcular el tiempo de viaje.

> *Última actualización: mayo de 2025*