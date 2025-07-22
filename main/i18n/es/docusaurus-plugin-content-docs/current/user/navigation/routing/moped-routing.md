---
source-hash: f3ae7502efc866393db44fa06909a99ed7ca0f9aec1864d654e84235132cb2f5
sidebar_position: 4
title:  Rutas para ciclomotores
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



## Descripción general {#overview}

La *ruta para ciclomotores* permite a los conductores construir una ruta óptima (la más rápida), teniendo en cuenta las características específicas de la conducción de un vehículo como un ciclomotor o una scooter. El proceso de enrutamiento considera varios factores para un movimiento seguro, cómodo y legal en carreteras o carriles bici.

:::note
Por defecto, el *perfil de ciclomotor* está desactivado. Para utilizar este perfil para el enrutamiento, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Parámetros de ruta - Ciclomotor {#route-parameters---moped}

El *enrutamiento de ciclomotores* se puede configurar según sus necesidades en la sección [Parámetros de ruta](../guidance/navigation-settings.md#route-parameters) de la configuración de navegación.

La configuración de enrutamiento del ciclomotor es muy sencilla y consta de unas pocas opciones.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configuración de enrutamiento de ciclomotores Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración de enrutamiento de ciclomotores iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleccione las carreteras que desea evitar durante la navegación. </summary>![Evitar carreteras Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | Puede [seleccionar una carretera en el mapa](../../map/map-context-menu/#avoid-road) o elegir el(los) tipo(s) de carretera de la lista: <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo de transporte acuático que transporta vehículos a través de cuerpos de agua)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Las restricciones de acceso privado se ignorarán al calcular la ruta. | La etiqueta *[privado](https://wiki.openstreetmap.org/wiki/Key:access)* se utiliza en OSM para describir las restricciones de uso de carreteras y otras rutas de transporte, así como edificios, entradas, servicios y entidades de ocio. |


## Otras configuraciones de enrutamiento {#other-routing-settings}

- El algoritmo de enrutamiento también puede considerar las limitaciones temporales especificadas en OpenStreetMap. Esto se puede hacer utilizando la opción *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Tenga en cuenta que en algunos casos, la información de OSM puede estar desactualizada.

- En la sección [*Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puede habilitar y ajustar las opciones de recálculo de ruta.

- En la sección [*Desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puede probar nuevas funciones de enrutamiento que actualmente se encuentran en fase de prueba. Tenga en cuenta que estas configuraciones solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

- La configuración *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* en la versión *iOS* de OsmAnd se encuentra en *Configuración de navegación → Parámetros de ruta* (para *Android*, en *Parámetros del vehículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Esta configuración se utiliza en carreteras desconocidas sin límites de velocidad. Esto ocurre con mayor frecuencia al navegar por una pista o una ruta en línea. Debe configurarse de acuerdo con los parámetros de su vehículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuración adecuada de los ajustes le ayudará a evitar problemas al crear una ruta. Puede seleccionar la ruta más adecuada según el tipo de vehículo y las restricciones de la carretera, así como calcular el tiempo de viaje.

> *Última actualización: junio de 2024*