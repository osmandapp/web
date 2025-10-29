---
source-hash: 2df261c9180b4551af320e1c543ad9f218568286c2606e5a64d23089fbff8bdd
sidebar_position: 1
title:  Ajustes de navegación
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Resumen {#overview}

Para una navegación exitosa, es importante configurar adecuadamente los ajustes apropiados según sus necesidades y cómo viaja: en coche, a pie, a caballo o con esquís. Este artículo describe los parámetros básicos de la ruta, las [Indicaciones de voz](#voice-prompts), las [Alertas en pantalla](#screen-alerts), el [Comportamiento del mapa durante la navegación](#map-during-navigation) y la [Apariencia de las líneas de ruta](#customize-route-line). También detalla los [Ajustes del vehículo](#vehicle-parameters) como la velocidad predeterminada, el tipo de motor para el cálculo de CO2, la capacidad del depósito de combustible y las limitaciones de tamaño/peso. Ajustar estas configuraciones le ayudará a aprovechar al máximo el uso de OsmAnd y alcanzar su objetivo sin demoras innecesarias.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Cómo abrir {#how-to-open}

Esta sección presenta los ajustes de navegación necesarios para calcular y trazar una ruta, que puede establecer para el perfil seleccionado. Este menú incluye ajustes para la [Preparación de la ruta](../setup/route-navigation.md), la [Pantalla del mapa durante la navegación](../guidance/map-during-navigation.md), y lo que establezca en los *Ajustes de navegación* afecta directamente a la visualización de los datos en los [Detalles de la ruta](../setup/route-details.md).

Hay tres formas de acceder al menú de Ajustes de navegación.

- Vaya al *Menú principal → Ajustes*, seleccione el *Perfil* requerido y toque *Ajustes de navegación*.

- Toque el icono de *Navegación* en la pantalla del mapa, luego seleccione el *icono de Ajustes → Ajustes de navegación*.

- Vaya al *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.  

:::info
El perfil predeterminado *Explorar mapa* no tiene ajustes de navegación.  
:::


## Tipo de navegación {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

La navegación es una parte importante de un viaje, y elegir *el tipo correcto* de navegación puede facilitar mucho su trayecto. El tipo de navegación que elija puede depender de cómo viaje y de si tiene conexión a Internet.  

- **Navegación en línea**
    Utiliza principalmente un sistema de enrutamiento especial o un sitio web que permite a la aplicación OsmAnd trazar una ruta basada en información actual y otros factores. Puede leer sobre cómo elegir la mejor ruta en línea en el artículo [Enrutamiento en línea](../routing/online-routing.md). Este tipo de navegación solo está disponible para la *versión de Android* de la aplicación.  

- **Navegación sin conexión**
No requiere acceso a internet y ofrece una selección más amplia de [tipos de navegación](../routing/osmand-routing.md#routing-types) que se pueden utilizar para calcular una ruta. Entre ellos se encuentran *bicicleta, barco, coche, a pie, esquí* y *línea recta*. Actualmente existen 13 tipos básicos de enrutamiento, así como un tipo de enrutamiento externo [BRouter](../routing/brouter.md) que ofrece oportunidades de enrutamiento adicionales.  

El tipo de navegación determina qué reglas se utilizan para calcular las rutas. Si necesita un tipo específico de navegación, puede **importar su propio archivo de enrutamiento *XML* modificado**. Lea más sobre las reglas de enrutamiento en nuestra [página de GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). Y hay un artículo separado sobre el formato XML y cómo usarlo, [Estilo de renderizado de mapa](../../../technical/osmand-file-formats/osmand-rendering-style.md), que puede ayudarle a crear un archivo de ruta.  


## Parámetros de ruta {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** son ajustes que determinan cómo la aplicación calculará una ruta para llegar a un destino, considerando factores como el tipo de transporte, las prioridades de enrutamiento, las condiciones de la ruta, la complejidad de la ruta y las preferencias del usuario.  

Para cada [perfil](../../personal/global-settings.md#default-profile), excepto *Explorar mapa*, OsmAnd selecciona por defecto el [Tipo de navegación](#navigation-type) óptimo y los [parámetros de ruta](../routing/osmand-routing.md#routing-types) relevantes. Sin embargo, puede elegir el tipo que desee y cambiar los parámetros según sus preferencias y las condiciones externas del próximo viaje.  

Todos los parámetros de ruta se describen en detalle en las secciones correspondientes de la documentación:  
*[Enrutamiento para coche (Camión, Motocicleta)](../routing/car-based-routing.md), [Enrutamiento para bicicleta (MTB)](../routing/bicycle-based-routing.md), [Enrutamiento para ciclomotor](../routing/moped-routing.md), [Enrutamiento para peatones](../routing/pedestrian-routing.md), [Enrutamiento para transporte público](../routing/public-transport-navigation.md), [Enrutamiento a caballo](../routing/horse-routing.md), [Enrutamiento para esquí](../routing/ski-routing.md), [Enrutamiento para tren](../routing/train-routing.md), [Enrutamiento para barco](../routing/boat-navigation.md), [Enrutamiento directo al punto](../routing/direct-to-point-routing.md), [Enrutamiento en línea recta](../routing/straight-line-routing.md), [Enrutamiento en línea](../routing/online-routing.md), [Enrutamiento con BRouter](../routing/brouter.md)*.  


### Recalcular ruta {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>  

El parámetro **Cálculo de ruta** cambia automáticamente la ruta calculada cuando se desvía de ella o conduce en la dirección opuesta. En ambos casos, este ajuste le ayuda a mantener su dirección de viaje y llegar a su destino sin perder tiempo buscando manualmente una nueva ruta.  

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> en caso de desviación*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | Si las [Indicaciones de voz](../guidance/voice-navigation.md#voice-settings) están activadas, OsmAnd anuncia que la ruta se está recalculando. |
|  *Recalcular ruta en caso de dirección inversa*  | Su ruta se recalculará si se mueve hacia el punto de partida.  |  Con este ajuste desactivado, el movimiento hacia el punto de partida no se considera una desviación del camino (siempre que siga la ruta calculada).  |


### Ajustes de desarrollo {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *Menú → Ajustes → perfil de la aplicación → Ajustes de navegación → Parámetros de ruta → Desarrollo*

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *Menú → Ajustes → perfil de la aplicación → Ajustes de navegación → Parámetros de ruta → Desarrollo*

![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>  

Los parámetros en la sección **Desarrollo** son principalmente para usuarios avanzados y solo están disponibles cuando el [plugin de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.  

| Parámetro | Descripción |
|:------------|:---------------|
| *Tipo de enrutamiento* (*Android*) / *Algoritmo de enrutamiento* (*iOS*) | <ul><li>**A*** 2-fases (*Android*) / **A*** (*iOS*) añade una fase extra al algoritmo por defecto para mejorar la calidad de la ruta calculada. Esta opción puede ser útil para encontrar rutas en redes de carreteras grandes y complejas, pero el cálculo de la ruta puede tardar más.</li><li>**A* clásico** (*Android*) / **Jerarquías de autopistas** (*iOS*) optimiza la planificación de rutas favoreciendo las carreteras principales y autopistas, minimizando el número de giros y cruces en la ruta. Particularmente efectivo en largas distancias.</li><li>**HH (Highway Hierarchies) x Java** (*Solo Android*) se basa en la implementación de estructuras de datos jerárquicas para optimizar la búsqueda de rutas en un mapa, teniendo en cuenta las restricciones de tiempo de ejecución y el consumo de recursos del dispositivo, y se realiza en la plataforma Java.</li><li>**HH (Highway Hierarchies) x C++** (*Solo Android*) es un algoritmo que utiliza el lenguaje de programación C++ para procesar eficientemente los datos de la red de carreteras y construir rutas óptimas utilizando estructuras de datos jerárquicas. Está optimizado para el procesamiento rápido de grandes cantidades de datos y es particularmente efectivo para navegar en mapas con muchas redes de carreteras.</li></ul> |  
| *Aproximación GPX* (*Solo Android*)  | <ul><li>La aproximación GPX **basada en enrutamiento** en **C++ y Java** utiliza datos de ruta para aproximar las pistas GPS con las rutas de carreteras existentes, lo que mejora la precisión de la pista y reduce su tamaño.</li><li>Las aproximaciones GPX **basadas en geometría** en **C++ y Java** funcionan basándose en principios geométricos para aproximar rápida y precisamente las pistas GPS, permitiendo un procesamiento eficiente de grandes cantidades de datos.</li></ul> |
| *Zoom automático* | <ul><li>**Discreto** le permite hacer zoom en el mapa a un nivel de detalle específico medido en unos pocos pasos discretos.</li><li>**Suave** proporciona un cambio gradual en la escala del mapa con efectos de animación suaves sin tirones ni saltos.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*Solo Android*)  | Use [Actualizaciones en vivo](../../personal/maps-resources.md#live-updates) durante el enrutamiento. Tenga en cuenta que recomendamos usar esta opción solo para fines de prueba.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows using [Live updates](../../personal/maps-resources.md#live-updates) while routing. Note, that we recommend using this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## Indicaciones de voz {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Ajustes de navegación por voz Android](@site/static/img/navigation/voice/voice_promt_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *Botón <Translate ios="true" ids="routing_settings"/> * *(o <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Elegir perfil → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Ajustes de navegación por voz iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

La primera parte del artículo *[Indicaciones de voz / Notificaciones](./voice-navigation.md)* describe cómo configurar las indicaciones de voz en detalle.  

Las instrucciones de audio durante la navegación le ayudan como conductor o peatón a llegar a su destino mientras [navega por una ruta seleccionada](../setup/route-navigation.md). Contienen información sobre giros, direcciones de conducción, señales de tráfico, distancias a su destino y otros factores que pueden afectar su navegación.  

Si selecciona una pista como punto de destino, necesita usar la opción [Ajustar a las carreteras](../setup/gpx-navigation.md#attach-to-the-roads) para que las indicaciones de voz funcionen correctamente.

*Las indicaciones de voz* le permiten concentrarse en la carretera y no distraerse con el mapa o el dispositivo de navegación. También mejoran la seguridad en la conducción, reducen el tiempo necesario para navegar por terrenos desconocidos y pueden ser útiles para diferentes [tipos de rutas](../routing/osmand-routing.md#routing-types).

En la sección **Anunciar**, puede elegir qué tipos de notificaciones deben reproducirse o mostrarse durante la navegación:

- **Direcciones giro a giro** (solo Android) – permite habilitar o deshabilitar las instrucciones de navegación estándar como *“Gire a la izquierda”*, *“Gire a la derecha”* o *“En 200 metros…”*. Cuando la opción está desactivada, no se proporcionan anuncios de giros y nombres de calles, mientras que las notificaciones para puntos de ruta, puntos de usuario y eventos de ruta permanecen activas. Este modo está destinado a actividades como rafting, senderismo o ciclismo a lo largo de pistas pregrabadas, cuando solo se requieren alertas para puntos de ruta añadidos manualmente.
- **Nombres de calles (TTS)** – anuncia los nombres de las calles a lo largo de su ruta.
- **Número de salida** – anuncia el número de salida al conducir por autopistas.
- **Advertencias de tráfico** – proporciona alertas sobre eventos importantes en la carretera como congestiones o restricciones.
- **Pasos de peatones** – le avisa cuando se acerca a pasos de peatones.
- **[Radares de velocidad](https://osmand.net/docs/user/navigation/guidance/voice-navigation#speed-cameras)**  – alerta sobre las ubicaciones de radares de velocidad (donde esté legalmente permitido).
- **Túneles** – le informa cuando entra en un túnel.


## Alertas en pantalla {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>  

El ajuste de navegación **Alerta en pantalla** habilita el [**Widget de Alertas**](../../widgets/nav-widgets.md#alert-widget). *Detalles:*

- Cuando se acerca a uno de los obstáculos soportados en la carretera, aparecen notificaciones en la esquina inferior izquierda del mapa.
- Si configura las [*indicaciones de voz y texto*](../../navigation/guidance/voice-navigation.md) disponibles en la aplicación OsmAnd, tendrá un viaje más cómodo y seguro.
- La apariencia y el momento de las indicaciones dependen de sus ajustes de velocidad. Puede encontrarlos [en el artículo](../../../technical/algorithms/voice-prompt-triggering.md).  
- El comportamiento de las *Alertas en pantalla* también se ve afectado por el ajuste [Mostrar puntos a lo largo de la ruta](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

Puede ***seleccionar qué alertas*** desea ver en la pantalla de la aplicación mientras navega:

- **Límite de velocidad** ([info de OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). En el ajuste de Alertas en pantalla, el *Límite de velocidad* solo se muestra en la pantalla con las *Advertencias de tráfico* activadas. Si desea ver los límites de velocidad durante la navegación sin otras advertencias, use el [widget](../../widgets/nav-widgets.md#speed-limit).
- **Advertencias de tráfico** ([info de OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Puede encontrar información adicional en el artículo [Pantalla del mapa durante la navegación](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Pasos de peatones** ([info de OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Radares de velocidad** ([info de OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Para obtener más información sobre el ajuste de Radares de velocidad en OsmAnd, lea [Tipos de alerta](../../widgets/nav-widgets.md#alert-types) y el artículo *Ajustes globales*, sección [Legal](../../personal/global-settings.md#legal).
- **Túneles** ([info de OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Los tipos de advertencias tienen una apariencia visual diferente, que depende de la región del viaje. OsmAnd no pretende presentar señales de tráfico 100% idénticas, pero señala algunas similitudes.  
:::


## Mapa durante la navegación {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

</TabItem>

</Tabs>

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

El **mapa se utiliza durante la navegación** para determinar su ubicación, planificar su ruta y orientarse en el terreno. Durante la navegación, puede ver el mapa con *centrado automático*, moverlo y *acercar y alejar* para ver el área requerida. El mapa también puede mostrar marcadores que indican puntos de interés, rutas, condiciones climáticas, señales de tráfico y otros objetos para ayudarle a navegar. El mapa se puede actualizar en *tiempo real* y muestra *información actualizada* que puede afectar la planificación de la ruta.

Puede aprender cómo cambia el comportamiento del mapa durante la navegación en el artículo [Pantalla del mapa durante la navegación](../guidance/map-during-navigation.md).  

## Personalizar línea de ruta {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

Con el ajuste **Personalizar línea de ruta**, puede elegir la apariencia de la línea de ruta que será visible en el mapa durante la navegación. Puede seleccionar el *color*, el *ancho de la línea* y la visualización de las *flechas de giro* en ella. Para cada perfil, puede elegir una vista de línea diferente. Todos estos parámetros se describen en detalle en el artículo *Pantalla del mapa durante la navegación* en la sección [Apariencia de la línea de ruta](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Parámetros del vehículo {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Para asegurar que OsmAnd calcule la ruta más óptima, es crucial configurar los parámetros de su vehículo —incluyendo su velocidad, dimensiones, peso y tipo de combustible— lo que permite a la aplicación estimar con precisión el tiempo de viaje, evitar restricciones de carretera y hacer un seguimiento del consumo de combustible, como se explica en nuestra guía completa sobre [Parámetros del vehículo](./vehicle-parameters.md).


## Guía detallada de la pista {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Ajustar a las carreteras 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Ajustes de navegación Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Guía detallada de la pista*

![Ajustes de navegación](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Ajustes de navegación](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

La función **Guía detallada de la pista** mejora la precisión de la navegación de ruta cuando se utilizan **rutas basadas en pistas**. Cuando selecciona una pista como destino, puede habilitar el ajuste [Ajustar a las carreteras](../setup/gpx-navigation.md#attach-to-the-roads) desde el menú [Seguir pista](../setup/gpx-navigation.md#follow-track-options). Esto asegura que la pista se alinee con las carreteras existentes, por lo que la navegación proporcionará instrucciones precisas en rotondas, giros, límites de velocidad, carriles de giro y nombres de calles para las carreteras.

Hay dos opciones para usar la *Guía detallada de la pista*:

- **<Translate android="true" ids="ask_every_time"/>** (*ajustes predeterminados*) – La opción *Ajustar a las carreteras* aparecerá en la sección [Detalles de la ruta](../setup/route-details.md) cada vez que se calcule una ruta basada en una pista. Esto le permite decidir si aplicar el ajuste a la carretera para cada sesión de navegación.

- **<Translate android="true" ids="shared_string_always"/>** – El proceso de ajuste a la carretera se aplicará automáticamente para cada ruta de *navegación por pista* sin requerir confirmación manual.

Para obtener más información sobre el uso de la navegación basada en pistas, visite [Navegación por pista](../setup/gpx-navigation.md).


## Artículos relacionados {#related-articles}

- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Preparación de la ruta](../setup/route-navigation.md)
- [Navegación por pista](../setup/gpx-navigation.md)
- [Navegación por marcadores](../setup/markers-navigation.md)
- [Detalles de la ruta](../setup/route-details.md)
- [Pantalla del mapa durante la navegación](./map-during-navigation.md)
- [Indicaciones de voz / Notificaciones](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)