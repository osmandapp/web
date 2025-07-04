---
source-hash: 7021923c986f2cd60c51183c1396e4c59265f7a68edc042e4249ee005d069bf9
sidebar_position: 0
title: Acerca del enrutamiento de OsmAnd
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

El enrutamiento offline de OsmAnd se basa en datos de OpenStreetMap y ofrece una variedad de rutas para diferentes propósitos. Esta es una lista de tipos de enrutamiento predefinidos que podrían ampliarse. Las reglas de navegación están contenidas en el archivo [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) y se utilizan para el enrutamiento offline. El tipo de ruta cambia automáticamente cuando cambias tu perfil.

## Tipos de enrutamiento {#routing-types}

Los siguientes perfiles con sus tipos de enrutamiento están preestablecidos en OsmAnd: *Conducción, Ciclismo, Caminata, Camión, Motocicleta, Ciclomotor, Transporte público, Barco, Avión, Esquí, Tren, Equitación*. Además de estos, puedes crear tus propios perfiles con reglas de enrutamiento específicas o [modificar el algoritmo de enrutamiento de OsmAnd](../routing/osmand-routing.md#customize-offline-routing).

:::note

- Los perfiles de [**Camión, Motocicleta, Ciclomotor, Tren, Avión, Barco y Equitación**](./osmand-routing.md) están desactivados por defecto. Para usar estos perfiles, debes activarlos en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- El tipo de navegación [**Directo a punto**](./direct-to-point-routing.md) no tiene su propio perfil y se puede usar con cualquiera que esté habilitado.

- El enrutamiento offline de OsmAnd se puede **configurar modificando el [archivo .xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. Para obtener más información, consulta el artículo [*Personalizar el enrutamiento offline*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Categoría | Descripción | Nota |
|:------------|:---------------|:---------------|
| *Enrutamiento offline de OsmAnd* | El mecanismo de enrutamiento offline de OsmAnd utiliza mapas predescargados como fuente de datos para el cálculo de rutas. | Tipos de navegación: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md), [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Ciclomotor](./moped-routing.md), [Motocicleta](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Camión](car-based-routing#route-parameters---truck), [Tren](./train-routing.md). |
| *Enrutamiento directo a punto* | También utiliza mapas offline y proporciona un enrutamiento en línea recta (o navegación *punto a punto*). | Tipos de navegación: *[Línea recta](./straight-line-routing.md)*, *[Directo a punto](./direct-to-point-routing.md)*. |
| [*BRouter* *(offline)*](./brouter.md) | Enrutamiento offline proporcionado por la [aplicación BRouter](https://brouter.de/). | Disponible solo para **Android**. La descripción completa se puede leer [aquí](./brouter.md). |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | El enrutamiento online construye la ruta utilizando recursos de servidores online a través de la conexión a Internet. | Disponible solo para **Android**. Puedes configurar el [enrutamiento online](./online-routing.md) para construir una ruta desde varios motores de enrutamiento online como [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), GPX genérico. |

- *[Enrutamiento de coche (Camión, Motocicleta)](./car-based-routing.md)* - OsmAnd proporciona instrucciones de conducción para conductores de coches, camiones y motocicletas.
- *[Enrutamiento de bicicleta (MTB)](./bicycle-based-routing.md)* - El enrutamiento de bicicleta proporciona indicaciones de navegación específicamente para ciclistas y entusiastas del MTB. También puede ser utilizado por conductores de ciclomotores (scooters).
- *[Enrutamiento peatonal](./pedestrian-routing.md)* - se puede utilizar no solo para caminar por la ciudad, sino también durante excursiones de senderismo.
- *[Enrutamiento de ciclomotor](./moped-routing.md)* - se basa en el enrutamiento de bicicleta, aunque tiene sus propias características.
- *[Enrutamiento de transporte público](./public-transport-navigation.md)* - puede ayudarte mientras viajas por la ciudad.
- *[Enrutamiento a caballo](./horse-routing.md)* - proporciona a los jinetes las herramientas que necesitan para planificar y disfrutar de sus actividades de equitación.
- *[Enrutamiento de esquí](./ski-routing.md)* - permite a los usuarios planificar y navegar por rutas de esquí y otras actividades de deportes de invierno utilizando la aplicación móvil OsmAnd.
- *[Enrutamiento de tren](./train-routing.md)* - ofrece la oportunidad de utilizar las vías férreas para la navegación.
- *[Enrutamiento de barco](./boat-navigation.md)* - se puede utilizar para construir una ruta en ríos, canales, pequeños lagos y en mar abierto, pero solo cuando las vías navegables están marcadas en OpenStreetMap.
- *[Enrutamiento en línea recta](./straight-line-routing.md)* - proporciona un enrutamiento en línea recta (o navegación "punto a punto") que se recalcula cuando tu ubicación cambia.
- *[Enrutamiento directo a punto](./direct-to-point-routing.md)* - proporciona un enrutamiento en línea recta (o navegación "punto a punto") que se mantiene estable durante toda la navegación, a diferencia del enrutamiento en **línea recta** (el recálculo de ruta está deshabilitado).

## Personalizar el enrutamiento offline {#customize-offline-routing}

También puedes crear tu **propio archivo routing.xml** o modificar el **routing.xml** predeterminado y usarlo para la navegación (solo para usuarios avanzados de OsmAnd).

- Copia el archivo [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) en tu dispositivo. Lee atentamente la [información de ayuda](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25). Como ejemplo, consulta el archivo [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) del usuario de OsmAnd.
- Después de realizar los cambios, el nuevo archivo *routing.xml* se puede agregar a OsmAnd tocándolo y seleccionando abrirlo en la aplicación OsmAnd.
- Selecciona el [tipo de navegación](../../navigation/guidance/navigation-settings.md#navigation-type) modificado para tu perfil.

Puedes encontrar más información sobre esta función en la [*Documentación técnica*](../../../technical/osmand-file-formats/osmand-routing-xml.md) y en la [*página de GitHub de OsmAnd*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).

## Evitar carreteras específicas {#avoid-specific-roads}

:::caution
La función de evitar carreteras es global y afecta a todos los **[tipos de enrutamiento](#routing-types)**, excepto el *[enrutamiento online](../routing/online-routing.md)* y *[BRouter](../routing/brouter.md)*.
:::

Hay dos formas posibles de elegir qué carreteras evitar al calcular una ruta:

- Selecciona el tipo de carretera en la sección [Parámetros de ruta](../guidance/navigation-settings.md#route-parameters) de la [Configuración de navegación](../guidance/navigation-settings.md). La descripción de esta configuración se proporciona en los artículos sobre la configuración de [tipos de enrutamiento](#routing-types). Como ejemplo, consulta la descripción del tipo de enrutamiento [Coche / Camión / Motocicleta](../routing/car-based-routing.md#route-parameters---car).
- También puedes seleccionar carreteras específicas que no se utilizarán para el enrutamiento utilizando la opción *[Evitar carreteras](../../map/map-context-menu.md#avoid-road)* a través del *menú contextual del mapa* o utilizando el *[menú Evitar carreteras](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- La carretera debe estar marcada con el zoom máximo, ya que OsmAnd puede interpretar erróneamente el toque y bloquear, por ejemplo, el lado incorrecto de una carretera de dos carriles o una acera.
- La función Evitar carreteras específicas funciona incorrectamente con la opción [Navegación por pista](../setup/gpx-navigation.md) y no afecta a la [navegación simplificada de marcadores](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Menú Evitar carreteras {#avoid-roads-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ve a: *Botón de navegación → Ajustes → Evitar carreteras...*

![Menú Evitar carreteras Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *Botón de navegación → Ajustes → Evitar carreteras*

![Menú Evitar carreteras iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

En este menú, puedes cancelar la selección anterior de la carretera que debe evitarse. Para ello, toca una cruz (Android) o un **"-"** rojo opuesto a la carretera que deseas utilizar para el cálculo de la ruta.

Usando la opción *Seleccionar en el mapa* puedes seguir marcando carreteras como no válidas para el enrutamiento en el mapa de OsmAnd.

Cuando seleccionas una carretera para evitar usando el *menú contextual del mapa* o el *menú Evitar carreteras*, la lista de carreteras se mostrará encima de la pantalla del mapa.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Lista de carreteras a evitar en el mapa Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista de carreteras a evitar en el mapa iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>

## Exportar / Importar {#export--import}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Exportar carretera a evitar en el mapa Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Exportar carretera a evitar en el mapa Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Exportar carretera a evitar en el mapa iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Exportar carretera a evitar en el mapa iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Dependiendo de la configuración de tu dispositivo y las aplicaciones disponibles, toda tu lista de carreteras a evitar o solo una de ellas puede ser [exportada](../../personal/import-export.md#export) como un archivo `.osf` a diferentes ubicaciones. Selecciona las carreteras que deseas exportar en la lista sugerida.

Puedes [importar](../../personal/import-export.md#import) carreteras a evitar durante el cálculo de la ruta desde otras fuentes en formato de archivo `.osf`. También se puede hacer usando la *opción Importar* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). Puedes elegir importar todos los datos o solo algunas carreteras a evitar (marcando una carretera con una marca en la lista).

<Tabs groupId="operating-systems">

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

La opción *Considerar limitaciones temporales* permite tener en cuenta las restricciones temporales de la carretera al calcular las rutas. Estas pueden incluir cosas como obras en la carretera o cierres de carreteras por alguna razón (un accidente, reparaciones de carreteras, desastres naturales). Habilitar esta opción puede ayudarte a evitar desvíos o retrasos inesperados. Ten en cuenta que a veces esta información puede estar desactualizada.
En OpenStreetMap, esta información suele estar marcada con la etiqueta [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).

## Sección de desarrollo {#development-section}

La **sección de desarrollo** de la configuración de *Parámetros de ruta* (*Menú → Ajustes → perfil de la aplicación → Ajustes de navegación → Parámetros de ruta → Desarrollo*) solo es visible cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado. Incluye configuraciones como *Tipo de enrutamiento (Android) / Algoritmo de enrutamiento (iOS), Aproximación GPX (solo Android), Autozoom y datos de OsmAnd Live (solo Android)*. Lee el artículo [Ajustes de navegación](../../navigation/guidance/navigation-settings.md#development-settings) para una descripción detallada.

> *Última actualización: julio de 2024*