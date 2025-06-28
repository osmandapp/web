---
source-hash: 7bb36bac225a4637bd0fd319dba2e8fd27253ed4e7e1a35a1b7cda4be6a24614
sidebar_position: 9
title:  Ruta directa a un punto (Barco)
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

La ruta directa a un punto en OsmAnd es una característica útil que le permite navegar directamente a un punto específico en el mapa sin tener que seguir una ruta predefinida o una red de carreteras. Esta característica puede ser utilizada por capitanes de barco, entusiastas de actividades al aire libre o por servicios de emergencia durante operaciones de rescate. En general, la ruta directa a un punto es una característica flexible y versátil que puede utilizarse en una variedad de situaciones en las que los métodos de ruta tradicionales pueden no ser apropiados o efectivos.

![Tipo de navegación directa a un punto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Un punto en una línea es un punto virtual cuya distancia al destino es la misma que la distancia desde su ubicación actual, pero no es una proyección de su ubicación actual sobre una línea. Esto facilita la medición del progreso, y puede utilizar la herramienta de medición para obtener la distancia correcta.

## Parámetros de ruta - Directo a un punto {#route-parameters---direct-to-point}

El tipo de ruta *Directa a un punto* no está vinculado a ningún perfil y puede utilizarse con diferentes perfiles.
Este tipo de ruta no considera ningún obstáculo o barrera que pueda estar presente en el terreno, como montañas, ríos o bosques densos. Tampoco proporciona ninguna información sobre la calidad del terreno, el nivel de dificultad de la ruta o cualquier otro factor relevante que pueda afectar la seguridad o viabilidad de la ruta (la sección [Detalles de la ruta](../setup/route-details.md) está vacía).

:::nota
Al utilizar los tipos de navegación Directa a un punto y Barco, necesitará [datos de curvas de nivel de profundidad](../../plugins/nautical-charts.md#nautical-map-style), que pueden habilitarse y configurarse en *Configurar mapa*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → cualquier perfil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Configuración de ruta directa a un punto](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → cualquier perfil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Configuración de ruta directa a un punto iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>

## Otras configuraciones de ruta {#other-routing-settings}

- En la sección [*Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puede habilitar y ajustar las opciones de recálculo de ruta. El valor predeterminado es 0 metros de desviación, lo que significa que la ruta no se recalcula.

- En la sección [*Desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puede probar nuevas características de ruta que actualmente se encuentran en fase de prueba. Tenga en cuenta que estas configuraciones solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

- La configuración *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* en la versión *iOS* de OsmAnd se encuentra en *Configuración de navegación → Parámetros de ruta* (para *Android*, en *Parámetros del vehículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Estas configuraciones también se pueden establecer para la ruta *Directa a un punto*. Se utiliza para calcular el tiempo estimado de llegada.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuración adecuada de los ajustes le ayudará a evitar problemas al crear una ruta. Puede seleccionar la ruta más apropiada según el tipo de vehículo y las restricciones de la carretera, así como calcular el tiempo de viaje.

> *Última actualización: junio de 2024*