---
source-hash: 13fd1af76a8741fd09464e167ec356fac8a95838f37bb43f0fc4715f11186d0d
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

## Resumen {#overview}

La ruta directa a un punto en OsmAnd es una función útil que le permite navegar directamente a un punto específico en el mapa sin tener que seguir una ruta predefinida o una red de carreteras. Esta función puede ser utilizada por patrones de barco, entusiastas de las actividades al aire libre o por servicios de emergencia durante operaciones de rescate. En general, la ruta directa a un punto es una función flexible y versátil que se puede utilizar en una variedad de situaciones en las que los métodos de enrutamiento tradicionales pueden no ser apropiados o efectivos.

![Tipo de navegación directa a un punto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Un punto en una línea es un punto virtual cuya distancia al destino es la misma que la distancia desde su ubicación actual, pero no es una proyección de su ubicación actual sobre una línea. Esto facilita la medición del progreso, y puede utilizar la herramienta de medición para obtener la distancia correcta.

## Parámetros de ruta - Directa a un punto {#route-parameters---direct-to-point}

El tipo de ruta *Directa a un punto* no está vinculado a ningún perfil y se puede utilizar con diferentes perfiles.
Este tipo de ruta no considera ningún obstáculo o barrera que pueda estar presente en el terreno, como montañas, ríos o bosques densos. Tampoco proporciona ninguna información sobre la calidad del terreno, el nivel de dificultad de la ruta o cualquier otro factor relevante que pueda afectar la seguridad o la viabilidad de la ruta (la sección [Detalles de la ruta](../setup/route-details.md) está vacía).

:::note
Al utilizar los tipos de navegación Directa a un punto y Barco, necesitará [datos de curvas de nivel de profundidad](../../plugins/nautical-charts.md#nautical-map-style), que se pueden activar y configurar en *Configurar mapa*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → cualquier perfil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Ajustes de ruta directa a un punto](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → cualquier perfil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Ajustes de ruta directa a un punto iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>