---
source-hash: 1ca5ebf392132069b1b5beabb8bfe492c629807a3258b756d15d406a2613de59
sidebar_position: 10
title:  Ruta en línea recta (Aeronave)
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


## Resumen {#overview}

A diferencia de los algoritmos de enrutamiento tradicionales que utilizan carreteras, senderos o rutas predefinidas, el enrutamiento en línea recta calcula la distancia más corta entre dos puntos del mapa como una línea recta. Esta función puede ser útil para los excursionistas activos que deseen desviarse de los senderos o explorar zonas remotas en las que las rutas tradicionales pueden no estar disponibles. Para los pilotos de aeronaves ligeras y los capitanes de barco, el uso del *tipo de ruta en línea recta* puede ser muy útil para la navegación.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- El enrutamiento en *Línea recta* no tiene en cuenta los obstáculos o barreras que puedan existir en el terreno, como montañas, ríos o bosques densos.
- No proporciona ninguna información sobre la calidad del terreno, el nivel de dificultad de la ruta ni ningún otro factor relevante que pueda afectar a la seguridad o viabilidad de la ruta (la sección [Detalles de la ruta](../setup/route-details.md) está vacía).

![Straight-line Navigation type Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Parámetros de ruta - Línea recta {#route-parameters---straight-line}

:::note
La ruta en línea recta está vinculada al *Perfil de aeronave*. Por defecto, este perfil está desactivado. Para utilizar este perfil para el enrutamiento, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

El enrutamiento en *Línea recta* se puede configurar según sus necesidades en la sección [Parámetros de ruta](../guidance/navigation-settings.md#route-parameters) de los ajustes de Navegación.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straight line routing settings Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straight line routing settings iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Straight line recalculation Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | Cuando el ángulo entre la ruta calculada y la geolocalización real es superior al establecido por usted, se construirá el camino más corto desde su posición actual hasta la ruta calculada. En otras palabras, OsmAnd calculará un segmento de ruta adicional a la ruta calculada previamente. |