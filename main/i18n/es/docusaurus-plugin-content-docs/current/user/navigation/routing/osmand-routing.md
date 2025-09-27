---
source-hash: 7c8272dbf6899f4214dddc8dd2957ce245f83752b109660a6880724a955deb10
sidebar_position: 0
title:  Acerca del enrutamiento de OsmAnd
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

El enrutamiento sin conexión de OsmAnd se basa en datos de OpenStreetMap y proporciona una variedad de rutas para diferentes propósitos. Esta es una lista de tipos de enrutamiento predefinidos que se pueden ampliar. Las reglas de navegación están contenidas en el archivo [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) y se utilizan para el enrutamiento sin conexión. El tipo de ruta cambia automáticamente cuando cambias tu perfil.


## Tipos de enrutamiento {#routing-types}

Los siguientes perfiles con sus tipos de enrutamiento están preestablecidos en OsmAnd: *Conducción, Ciclismo, Caminar, Camión, Motocicleta, Ciclomotor, Transporte público, Barco, Avión, Esquí, Tren, Equitación*. Además de estos, puedes crear tus propios perfiles con reglas de enrutamiento específicas o [modificar el algoritmo de enrutamiento de OsmAnd](../routing/osmand-routing.md#customize-offline-routing).

:::note

- Los perfiles de [**Camión, Motocicleta, Ciclomotor, Tren, Avión, Barco y Equitación**](./osmand-routing.md) están desactivados por defecto. Para usar estos perfiles, necesitas activarlos en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- El tipo de navegación [**Directo al punto**](./direct-to-point-routing.md) no tiene su propio perfil y se puede usar con cualquiera que esté habilitado.

- El enrutamiento sin conexión de OsmAnd se puede **configurar modificando el [archivo .xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. Para más información, consulta el artículo [*Personalizar enrutamiento sin conexión*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Categoría | Descripción | Nota |
|:------------|:---------------|:---------------|
| *Enrutamiento sin conexión de OsmAnd* | El mecanismo de enrutamiento sin conexión de OsmAnd utiliza mapas predescargados como fuente de datos para el cálculo de la ruta. | Tipos de navegación: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md), [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Ciclomotor](./moped-routing.md), [Motocicleta](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Camión](car-based-routing#route-parameters---truck), [Tren](./train-routing.md). |
| *Enrutamiento directo al punto* | También utiliza mapas sin conexión y proporciona un enrutamiento en línea recta (o navegación *punto a punto*). | Tipos de navegación: *[Línea recta](./straight-line-routing.md)*, *[Directo al punto](./direct-to-point-routing.md)*. |
| [*BRouter* *(sin conexión)*](./brouter.md) | Enrutamiento sin conexión proporcionado por la [aplicación BRouter](https://brouter.de/). | Disponible **solo para Android**. Lea la descripción completa [aquí](./brouter.md). |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | El enrutamiento en línea construye la ruta utilizando recursos de servidores en línea a través de la conexión a Internet. | Disponible **solo para Android**. Puedes configurar el [enrutamiento en línea](./online-routing.md) para construir una ruta desde varios motores de enrutamiento en línea como [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), GPX genérico. |

- *[Enrutamiento para coche (Camión, Motocicleta)](./car-based-routing.md)* - OsmAnd proporciona instrucciones de conducción para conductores de coches, camiones y motocicletas.
- *[Enrutamiento para bicicleta (MTB)](./bicycle-based-routing.md)* - El enrutamiento para bicicleta proporciona indicaciones de navegación específicas para ciclistas y entusiastas de la BTT. También puede ser utilizado por conductores de ciclomotores (scooters).
- *[Enrutamiento peatonal](./pedestrian-routing.md)* - se puede usar no solo para caminar por la ciudad, sino también durante excursiones de senderismo.
- *[Enrutamiento para ciclomotor](./moped-routing.md)* - se basa en el enrutamiento para bicicleta, aunque tiene sus propias características.
- *[Enrutamiento de transporte público](./public-transport-navigation.md)* - puede ayudarte mientras viajas por la ciudad.
- *[Enrutamiento ecuestre](./horse-routing.md)* - proporciona a los jinetes las herramientas que necesitan para planificar y disfrutar de sus actividades de equitación.
- *[Enrutamiento de esquí](./ski-routing.md)* - permite a los usuarios planificar y navegar rutas de esquí y otras actividades de deportes de invierno utilizando la aplicación móvil OsmAnd.
- *[Enrutamiento de tren](./train-routing.md)* - ofrece la oportunidad de utilizar las vías del tren para la navegación.
- *[Enrutamiento en barco](./boat-navigation.md)* - se puede utilizar para construir una ruta en ríos, canales, lagos pequeños y en mar abierto, pero solo cuando las vías navegables están marcadas en OpenStreetMap.
- *[Enrutamiento en línea recta](./straight-line-routing.md)* - proporciona un enrutamiento en línea recta (o navegación "punto a punto") que se recalcula cuando cambia tu ubicación.
- *[Enrutamiento directo al punto](./direct-to-point-routing.md)* - proporciona un enrutamiento en línea recta (o navegación "punto a punto") que se mantiene estable durante toda la navegación, a diferencia del enrutamiento en **Línea recta** (el recálculo de la ruta está deshabilitado).


## Personalizar enrutamiento sin conexión {#customize-offline-routing}

También puedes crear tu **propio archivo routing.xml** o modificar el **routing.xml** predeterminado y usarlo para la navegación (solo para usuarios avanzados de OsmAnd).

- Copia el archivo [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) a tu dispositivo. Lee la [información de Ayuda](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) cuidadosamente. Como ejemplo, mira el archivo [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) del usuario de OsmAnd.
- Después de realizar los cambios, el nuevo archivo *routing.xml* se puede agregar a OsmAnd tocándolo y seleccionando abrirlo en la aplicación OsmAnd.
- Selecciona el [Tipo de navegación](../../navigation/guidance/navigation-settings.md#navigation-type) modificado para tu perfil.

Puedes encontrar más información sobre esta función en la [*Documentación técnica*](../../../technical/osmand-file-formats/osmand-routing-xml.md) y en la [*página de GitHub de OsmAnd*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).


## Evitar carreteras específicas {#avoid-specific-roads}

:::caution
La función de evitar carreteras es global y afecta a todos los **[Tipos de enrutamiento](#routing-types)** excepto al *[Enrutamiento en línea](../routing/online-routing.md)* y a *[BRouter](../routing/brouter.md)*.
:::

Hay dos formas posibles de elegir qué carreteras evitar al calcular una ruta:

- Selecciona el tipo de carretera en la sección [Parámetros de ruta](../guidance/navigation-settings.md#route-parameters) de los [Ajustes de navegación](../guidance/navigation-settings.md). La descripción de este ajuste se proporciona en los artículos sobre los ajustes de los [Tipos de enrutamiento](#routing-types). Como ejemplo, consulta la descripción del tipo de enrutamiento [Coche / Camión / Motocicleta](../routing/car-based-routing.md#route-parameters---car).
- También puedes seleccionar carreteras específicas que no se utilizarán para el enrutamiento utilizando la opción *[Evitar carretera](../../map/map-context-menu.md#avoid-road)* a través del *menú contextual del mapa* o utilizando el *[Menú Evitar carreteras](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- La carretera debe marcarse con el zoom máximo, ya que OsmAnd puede malinterpretar el toque y bloquear, por ejemplo, el lado incorrecto de una carretera de dos calzadas o una acera.
- La función Evitar carreteras específicas funciona incorrectamente con la opción [Navegación por track](../setup/gpx-navigation.md) y no afecta a la [Navegación por marcadores](../setup/markers-navigation.md#use-markers-in-navigation) simplificada.

:::

### Menú Evitar carreteras {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *Botón de navegación → Ajustes → Evitar carreteras...*

![Menú Evitar carretera Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *Botón de navegación → Ajustes → Evitar carreteras*

![Menú Evitar carretera iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

En este menú, puedes cancelar la selección previa de la carretera que debe evitarse. Para ello, toca una cruz (Android) o un **"-"** rojo frente a la carretera que pretendes utilizar para el cálculo de la ruta.

Usando la opción *Seleccionar en el mapa* puedes continuar marcando carreteras como no válidas para el enrutamiento en el mapa de OsmAnd.

Cuando seleccionas una carretera a evitar usando el *menú contextual del mapa* o el *Menú Evitar carreteras*, la lista de carreteras se mostrará sobre la pantalla del mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de carreteras a evitar en el mapa Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista de carreteras a evitar en el mapa iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Exportar / Importar {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Exportar carretera a evitar en el mapa Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Exportar carretera a evitar en el mapa Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Exportar carretera a evitar en el mapa iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Exportar carretera a evitar en el mapa iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Dependiendo de la configuración de tu dispositivo y de las aplicaciones disponibles, tu lista completa de carreteras a evitar o solo una de ellas se puede [exportar](../../personal/import-export.md#export) como un archivo `.osf` a diferentes ubicaciones. Selecciona las carreteras que deseas exportar en la lista sugerida.

Puedes [importar](../../personal/import-export.md#import) carreteras a evitar durante el cálculo de la ruta desde otras fuentes en formato de archivo `.osf`. Además, se puede hacer usando la *opción Importar* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). Puedes elegir importar todos los datos o solo algunas carreteras a evitar (marcando una carretera con una marca en la lista).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Importar carretera a evitar en el mapa Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Importar carretera a evitar en el mapa iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
La forma más conveniente de sincronizar las carreteras a evitar entre tus dispositivos es usar [OsmAnd Cloud](../../personal/osmand-cloud.md) (se requiere suscripción Pro).
:::


## Considerar limitaciones temporales {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

La opción *Considerar limitaciones temporales* permite tener en cuenta las restricciones temporales de las carreteras al calcular las rutas. Pueden incluir cosas como obras en la carretera o cierres de carreteras por alguna razón (un accidente, reparaciones de la carretera, desastres naturales). Habilitar esta opción puede ayudarte a evitar desvíos o retrasos inesperados. Ten en cuenta que a veces esta información puede estar desactualizada.
En OpenStreetMap, esta información suele estar marcada con la etiqueta [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).


## Sección de desarrollo {#development-section}

La **Sección de desarrollo** de los ajustes de *Parámetros de ruta* (*Menú → Ajustes → perfil de la aplicación → Ajustes de navegación → Parámetros de ruta → Desarrollo*) solo es visible cuando el [plugin de desarrollo de OsmAnd](../../plugins/development.md) está habilitado. Incluye ajustes como *Tipo de enrutamiento (Android) / Algoritmo de enrutamiento (iOS), Aproximación GPX (solo Android), Autozoom y Datos de actualizaciones en vivo (solo Android)*. Lee el artículo [Ajustes de navegación](../../navigation/guidance/navigation-settings.md#development-settings) para una descripción detallada.