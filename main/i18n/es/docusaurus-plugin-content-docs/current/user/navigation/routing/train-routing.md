---
source-hash: 5622b3c06a619b7597895ee507b9910943c93a7d5ec31ddecd00215481e51e29
sidebar_position: 7
title: Enrutamiento de trenes
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

:::note
Por defecto, el *perfil de tren* está desactivado. Para utilizar este perfil para el enrutamiento, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

El *enrutamiento de trenes* en OsmAnd proporciona a los usuarios la posibilidad de utilizar las líneas ferroviarias para la navegación como si estuvieran conduciendo un tren como un coche. Esta opción puede ser útil, por ejemplo, para el senderismo cuando no hay otras carreteras disponibles. En otros casos es mejor utilizar el *[enrutamiento de transporte público](./public-transport-navigation.md)*.

![Mapa de transporte tranvía](@site/static/img/navigation/routing/train_routing_overview.png)


## Parámetros de ruta - Tren {#route-parameters---train}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configuración de enrutamiento de trenes Android](@site/static/img/navigation/routing/train_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración de enrutamiento de trenes iOS](@site/static/img/navigation/routing/train_routing_ios.png)

</TabItem>

</Tabs>

El *enrutamiento de trenes* se puede configurar según sus necesidades en la sección [Parámetros de ruta](../guidance/navigation-settings.md#route-parameters) de la configuración de navegación.


## Otras configuraciones de enrutamiento {#other-routing-settings}

- El algoritmo de enrutamiento también puede considerar las limitaciones temporales especificadas en OpenStreetMap. Esto se puede hacer utilizando la opción *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Tenga en cuenta que en algunos casos, la información de OSM puede estar desactualizada.

- En la sección [*Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puede habilitar y ajustar las opciones de recálculo de ruta.

- En la [*sección de Desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puede probar nuevas funciones de enrutamiento que actualmente se encuentran en fase de prueba. Tenga en cuenta que estas configuraciones solo están disponibles cuando el [plugin de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

- La configuración *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* en la versión *iOS* de OsmAnd se encuentra en *Configuración de navegación → Parámetros de ruta* (para *Android*, en *Parámetros del vehículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Estas configuraciones también se pueden establecer para el enrutamiento *Directo a punto*. Se utiliza para calcular la hora estimada de llegada.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuración adecuada de los ajustes le ayudará a evitar problemas al crear una ruta. Puede seleccionar la ruta más adecuada según el tipo de vehículo y las restricciones de la carretera, así como calcular el tiempo de viaje.

> *Última actualización: junio de 2024*