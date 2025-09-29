---
source-hash: 46a1886051c86f82be8c7760e97112a93aa73290d7f57d40189238af7d9e4f39
sidebar_position: 4
title:  Navegación para ciclomotor
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Resumen {#overview}

*La navegación para ciclomotor* permite a los conductores construir una ruta óptima (la más rápida), teniendo en cuenta las especificidades de la conducción de un vehículo como un ciclomotor o scooter. El proceso de enrutamiento considera varios factores para un desplazamiento seguro, cómodo y legal en carreteras o carriles bici.

:::note
Por defecto, el *Perfil de ciclomotor* está desactivado. Para usar este perfil para la navegación, necesita activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Parámetros de ruta - Ciclomotor {#route-parameters---moped}

*La navegación para ciclomotor* se puede configurar según sus necesidades en la sección [Parámetros de ruta](../guidance/navigation-settings.md#route-parameters) de los Ajustes de navegación.

Los ajustes de enrutamiento del ciclomotor son muy simples y constan de solo unas pocas opciones.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de navegación para ciclomotor Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación para ciclomotor iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleccione las carreteras que desea evitar durante la navegación.  </summary>![Evitar carreteras Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | Puede [seleccionar una carretera en el mapa](../../map/map-context-menu/#avoid-road) o elegir tipo(s) de carretera de la lista:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo de transporte acuático que transporta vehículos a través de cuerpos de agua)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Las restricciones de acceso privado se ignorarán al calcular la ruta.  | La etiqueta *[private](https://wiki.openstreetmap.org/wiki/Key:access)* se usa en OSM para describir restricciones en el uso de autopistas y otras rutas de transporte, así como edificios, entradas, servicios y entidades de ocio.   |