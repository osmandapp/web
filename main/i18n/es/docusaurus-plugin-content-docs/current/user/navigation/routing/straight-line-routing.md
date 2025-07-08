---
source-hash: 7e3135f97cb0856e50ca46f17778ece558a18d14044f072d10d8739db6285192
sidebar_position: 10
title:  Rutas en línea recta (Aeronaves)
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


## Descripción general {#overview}

A diferencia de los algoritmos de enrutamiento tradicionales que utilizan carreteras, senderos o rutas predefinidas, el enrutamiento en línea recta calcula la distancia más corta entre dos puntos en el mapa como una línea recta. Esta característica puede ser útil para excursionistas activos que desean alejarse de los senderos o explorar áreas remotas donde las rutas tradicionales pueden no estar disponibles. Para pilotos de aeronaves ligeras y capitanes de barcos, usar el *tipo de enrutamiento en línea recta* puede ser muy útil en la navegación.

<!-- ![Ejemplo de navegación en línea recta Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Ejemplo de navegación en línea recta Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png) -->

- El enrutamiento en *línea recta* no considera ningún obstáculo o barrera que pueda estar presente en el terreno, como montañas, ríos o bosques densos.
- No proporciona ninguna información sobre la calidad del terreno, el nivel de dificultad de la ruta o cualquier otro factor relevante que pueda afectar la seguridad o viabilidad de la ruta (la sección [Detalles de la ruta](../setup/route-details.md) está vacía).

![Tipo de navegación en línea recta Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Parámetros de ruta - Línea recta {#route-parameters---straight-line}

:::note
El enrutamiento en línea recta está vinculado al *perfil de aeronave*. Por defecto, este perfil está desactivado. Para usar este perfil para el enrutamiento, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

El enrutamiento en *línea recta* se puede configurar según sus necesidades en la sección [Parámetros de ruta](../guidance/navigation-settings.md#route-parameters) de la configuración de navegación.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configuración de enrutamiento en línea recta Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración de enrutamiento en línea recta iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* | <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/> </summary>![Recálculo en línea recta Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details> | Cuando el ángulo entre la ruta calculada y la geolocalización real es mayor que el que usted estableció, se construirá el camino más corto desde su posición actual hasta la ruta calculada. En otras palabras, OsmAnd calculará un segmento de ruta adicional a la ruta calculada previamente. |


## Otras configuraciones de enrutamiento {#other-routing-settings}

- En la sección [*Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, la distancia a la que se recalculará la ruta para el *enrutamiento en línea recta* se establece en 500 metros por defecto.

- En la sección [*Desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puede probar nuevas características de enrutamiento que actualmente se encuentran en fase de prueba. Tenga en cuenta que estas configuraciones solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

- La configuración *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* en la versión *iOS* de OsmAnd se encuentra en *Configuración de navegación → Parámetros de ruta* (para *Android*, en *Parámetros del vehículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Estas configuraciones también se pueden establecer para el enrutamiento *Directo a punto*. Se utiliza para calcular el tiempo estimado de llegada.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Configurar correctamente los ajustes le ayudará a evitar problemas al crear una ruta. Puede seleccionar la ruta más adecuada según el tipo de vehículo y las restricciones de la carretera, así como calcular el tiempo de viaje.

> *Última actualización: junio de 2024*