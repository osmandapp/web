---
source-hash: ae22b6cd7849daf3b25f0a644bcdf63cfd6f3e48185e0d277a59873ba978a352
sidebar_position: 1
title: Preparación de la ruta
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


## Descripción general {#overview}

La función **Preparación de la ruta** en OsmAnd proporciona orientación de navegación paso a paso para varios [tipos de rutas](./../routing/osmand-routing.md#routing-types), incluyendo [conducción](./../routing/car-based-routing.md), [caminata](./../routing/pedestrian-routing.md), ciclismo, [equitación](./../routing/horse-routing.md) y [esquí](./../routing/ski-routing.md). Los usuarios pueden personalizar la configuración de navegación, añadir destinos y optimizar las rutas para mayor eficiencia.

:::tip

- La **navegación sin conexión** está activada por defecto. Sin embargo, también puedes utilizar [motores de enrutamiento en línea](./../routing/online-routing.md).

- **OsmAnd requiere permiso** para acceder a la [ubicación precisa](../../start-with/first-steps.md#permission-to-access-the-location) para una navegación precisa. Habilítalo en la configuración del dispositivo si es necesario.

:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Pantalla de navegación Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Pantalla de navegación Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pantalla de navegación iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Pantalla de navegación iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Establecer destinos {#set-destinations}

**Paso 1: Descargar mapas.**

Antes de utilizar la navegación sin conexión, asegúrate de que los [mapas necesarios estén descargados](../../start-with/download-maps.md). Ve a *Menú → Mapas y recursos → Descargar mapas* para instalar mapas para tu región.

**Paso 2: Configurar perfiles de navegación.**

[Configura los perfiles](../../personal/profiles.md) que pretendes utilizar:

- Establece los [parámetros del vehículo](../guidance/navigation-settings.md#size-parameters) (*importante para conductores de camiones*), selecciona el [tipo de motor](../guidance/navigation-settings.md#fuel-used-by-motor) (*opcional*).

- Configura la [apariencia de la línea de ruta](../guidance/map-during-navigation#route-line-appearance) (*opcional*, disponible para usuarios Pro ([Android](../../purchases/android.md#pro-features-pro-features) / [iOS](../../purchases/ios.md#pro-features-pro-features))).

- Configura las [indicaciones de voz](../guidance/voice-navigation.md).

**Paso 3: Establecer destinos.**

1. Abre el [*Menú de navegación*](#navigation-menu):

    - Especifica el [punto de destino](#set-target-point).
    - Espera a que se calcule la ruta. Después de eso, podrás obtener información adicional sobre tu ruta en la sección *[Detalles](./route-details.md#overview)*.
    - Puedes cambiar entre diferentes [tipos de enrutamiento](./../routing/osmand-routing.md#routing-types) (perfiles) para obtener el mejor resultado.
    - Añade [destinos intermedios](#intermediate-destinations) (opcional).
    - También puedes cambiar el punto de partida de la [ubicación actual](../../map/interact-with-map#my-location-and-zoom) a la requerida.

2. Se pueden utilizar [*ajustes de navegación*](#settings) adicionales dependiendo de tus propósitos (puedes configurar qué carreteras evitar o preferir, ahorrar combustible o elegir la ruta más rápida, etc.).

3. [Inicia](#start--stop-navigation) la navegación o primero [simula la navegación](#simulated-navigation) (con esta función puedes probar tu ruta antes de recorrerla).

4. Mientras estás en la ruta, puedes [*Pausar/Reanudar*](#pause--resume-navigation) la navegación y [*Detenerla*](#start--stop-navigation).


:::note

**No se puede construir la ruta cuando *[Mapa en línea](../../map/raster-maps.md#select-raster-maps)* está seleccionado como fuente del mapa.**

:::


### Menú de navegación {#navigation-menu}

Hay 3 formas de acceder al menú de navegación:

- El [*botón de navegación*](../../widgets/map-buttons.md#directions) en la pantalla del mapa.  
- *Dirección a/desde* en un [*menú contextual del mapa*](../../map/map-context-menu.md#directions-to--from).  
- Sección de navegación en el [*Menú principal*](../../start-with/main-menu.md)  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de navegación Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de navegación iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)  

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Establecer ubicación inicial (por defecto: [*Mi ubicación actual*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - Usar para [establecer tu punto de destino](#set-target-point).
- **Añadir** &nbsp;&#43; - Insertar [puntos intermedios](../../widgets/nav-widgets.md#distance-to-intermediate) a lo largo de la ruta.
- **Intercambiar** &nbsp;&#8595;&#8593; - Invertir los puntos de *Inicio* y *Fin*.
- **Botón de sonido** - Silenciar las [indicaciones de voz](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [Ajustar](#settings) preferencias de ruta y restricciones de carretera.

Establece tu destino en el *Menú de navegación* usando:

- Puntos favoritos especiales [Casa / Trabajo](#use-home-or-work-points).
- Ruta anterior o [Historial](../../personal/global-settings.md#history).
- El botón **Cancelar** te lleva de vuelta a la pantalla principal.
- El [botón de inicio](#start--stop-navigation) inicia la navegación una vez que el cálculo de la ruta ha finalizado.
  
### Seleccionar punto de partida {#select-starting-point}

En cuanto al punto de partida, puedes elegir tu ubicación actual, la ubicación de un [punto favorito](../../map/point-layers-on-map.md#favorites), seleccionar un punto en el mapa o usar la [Búsqueda](../../search/index.md). También puedes establecer un punto de partida en el [menú contextual del mapa](../../map/map-context-menu.md) seleccionando la función [Direcciones desde](../../map/map-context-menu.md#directions-to--from).  


### Establecer punto de destino {#set-target-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de navegación Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Menú de navegación iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

Lo más importante para iniciar la navegación es determinar tu destino. El punto de destino se puede encontrar utilizando la función de [*Búsqueda*](../../search/index.md#overview), o simplemente en un mapa. También puedes establecer el punto de destino en el [*Menú de navegación*](#navigation-menu):  

- **<Translate android="true" ids="search_button"/>** - Abre [el menú de búsqueda](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Abre el [menú de búsqueda de direcciones](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Abre el mapa para elegir un punto de destino tocando en el mapa.
- **<Translate android="true" ids="shared_string_favorites"/>** - Permite usar [Favoritos](../../personal/favorites.md) como destino.
- **<Translate android="true" ids="shared_string_markers"/>** - Permite elegir uno de los [Marcadores de mapa](../../personal/markers.md) como punto de destino.
- **Intercambiar punto de inicio y destino** &nbsp;&#8595;&#8593; - Permite intercambiar los puntos de *Inicio* y *Fin*.


### Destinos intermedios {#intermediate-destinations}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navegación intermedia Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Navegación intermedia Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navegación intermedia iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navegación intermedia iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - permite abrir la lista de puntos de destino para realizar cambios.
- **&nbsp;&#8592;** - se mueve a la pantalla del menú de navegación.
- **&nbsp;&#10005;** - permite eliminar un punto de destino de la lista de puntos.
- **&nbsp;&#61;** - permite cambiar el orden de los puntos en la lista de puntos.
- *&nbsp;&#43; Añadir* - abre el menú contextual *Añadir intermedio*.
- *&nbsp;&#9776; Borrar todo* - permite borrar todos los puntos intermedios.

Si eliges **Ordenar** (*Android*) u **Opciones** (*iOS*) en la lista de destinos, accederás a opciones especiales para ajustar el orden de navegación a los puntos intermedios.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navegación intermedia Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navegación intermedia iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

En este menú puedes encontrar opciones adicionales para gestionar los puntos de destino:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - OsmAnd ofrecerá la ruta más corta entre todos tus destinos, sin embargo, el orden de la visita se puede editar. El punto de partida y el destino final no se cambiarán.

- **<Translate android="true" ids="switch_start_finish"/>** - El punto de partida y el destino final se intercambiarán.

- **<Translate android="true" ids="reverse_all_points"/>** (*Solo Android*) - Todos los puntos se colocarán en dirección inversa.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Puedes añadir destinos intermedios desde este menú.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Todos los destinos intermedios se eliminarán del mapa.

### Usar puntos de inicio o trabajo {#use-home-or-work-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoritos especiales Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritos especiales iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

Las pestañas **Casa** y **Trabajo** (o [Puntos especiales](../../personal/favorites.md#special-favorites-personal) para Favoritos) se pueden usar para establecer rápidamente puntos de destino en el menú de navegación. Si no has introducido las direcciones de los Favoritos especiales, estas celdas permanecerán vacías. Si tocas este campo, se te pedirá que crees estos PDI.  


### Historial de rutas anteriores {#history-of-previous-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ruta anterior Android](@site/static/img/navigation/route/previous_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Ruta anterior iOS](@site/static/img/navigation/route/previous_ios.png)  

</TabItem>

</Tabs>

Si la grabación del [Historial de navegación](../../personal/global-settings.md#history) está habilitada, puedes usar las rutas o destinos anteriores de la lista del historial para la navegación. Esta opción puede ser útil para un acceso rápido a rutas de uso frecuente. Los elementos de la lista del historial se ordenan por uso más reciente, comenzando por el más nuevo.  

:::note

- Cuando el [registro de datos del historial](../../personal/global-settings.md#history-options) está deshabilitado, no se te pedirá que uses rutas anteriores para la navegación.
- Puedes eliminar algunos o todos los registros del historial sobre tus rutas anteriores. Esto se puede hacer en la pestaña *[Historial de navegación](../../personal/global-settings.md#history-options)* de la opción Historial (*Menú → Ajustes → Ajustes de OsmAnd → Historial*).

:::


## Iniciar / Detener navegación {#start--stop-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pantalla de navegación iniciar Android](@site/static/img/navigation/route/navigation_start_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Pantalla de navegación iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Una vez seleccionados los puntos de inicio y fin, la aplicación creará una ruta entre ellos utilizando un perfil activo. El [perfil de la aplicación](../../personal/profiles.md) y el conjunto de [widgets](../../widgets/index.md) solo cambiarán una vez que toques el botón *Iniciar* de la navegación.

- **Toca Iniciar** para comenzar la navegación.
- [Pausa](#pause--resume-navigation) la navegación cuando tomes un descanso. (*Solo Android*)
- **Detén** la navegación seleccionando **Detener** (*Android*) o **Cancelar** (*iOS*).

:::note Detalles de la ruta
Información adicional sobre la ruta creada, como la altitud, las instrucciones paso a paso, la herramienta de análisis y otras, se pueden encontrar en la sección [**Detalles**](../setup/route-details.md).
:::

### Recálculo de ruta {#route-recalculation}

La ruta se puede recalcular automáticamente en caso de desviación de la misma. Puedes cambiar los parámetros del recálculo en la [configuración de navegación](../guidance/navigation-settings.md#recalculate-route). También puedes deshabilitar la notificación sobre el recálculo de ruta en la configuración de las [indicaciones de voz](../guidance/voice-navigation.md#voice-settings).

### Pausar / Reanudar navegación {#pause--resume-navigation}

<InfoAndroidOnly/>

Si deseas detenerte para un descanso y desviarte de la ruta por un corto tiempo, puedes usar la función *Pausar/Reanudar* navegación para pausar las indicaciones de voz y detener el recálculo de la ruta.  
Esta opción está disponible en la versión de Android de la aplicación en la *[lista de notificaciones](../guidance/voice-navigation.md#text-notifications)* o desde el *[menú de acciones rápidas](../../widgets/quick-action.md)*.

![Pantalla de notificación Android](@site/static/img/navigation/route/navigation_pause_android.png)

Para reanudar la navegación:

- Utiliza el mensaje de OsmAnd en la barra de notificaciones.
- Utiliza el *menú de acciones rápidas* o el diálogo que aparece al tocar el *[botón de navegación](../../widgets/map-buttons.md#directions)* (ver captura de pantalla).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Reanudar navegación Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reanudar navegación iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Cuando **tocas el botón de Navegación** mientras estás en tu ruta, la navegación **no se detiene y las indicaciones de voz continúan**, aunque las opciones propuestas Reanudar o Iniciar pueden ser confusas.
:::


### Consejos para ahorrar energía {#power-saving-tips}

La navegación utiliza GPS y procesamiento en segundo plano, lo que puede agotar la batería. Para optimizar el uso de energía:

- **Apaga la pantalla** mientras confías en las indicaciones de voz.  
- Habilita el [control de pantalla](../guidance/voice-navigation.md#screen-control) (*solo Android*) en *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## Ajustes {#settings}

![Preparación de ruta Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Ajustes de navegación {#navigation-settings}

Para acceder a la configuración de navegación, sigue uno de los pasos a continuación:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.  
- *Botón de navegación → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.  
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
No hay ajustes de navegación en el perfil *Explorar mapa*.  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación de perfiles iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** determina cómo se calculan las rutas. Por ejemplo, tu perfil de bicicleta tiene un tipo de navegación Ciclismo, que establece las reglas de enrutamiento. Puedes importar estas reglas (como archivo routing.xml) en OsmAnd. Más información sobre el enrutamiento se puede leer en nuestra página de [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing).&nbsp;  

- &nbsp;**<Translate android="true" ids="route_parameters"/>** controla qué parámetros se utilizarán durante el enrutamiento (este es el proceso de selección de una ruta para la navegación).

Por favor, lee sobre los parámetros de ruta para el tipo de navegación correspondiente.

Cómo configurar el [tipo de enrutamiento](../routing/osmand-routing.md#routing-types) y los [parámetros de ruta](../guidance/navigation-settings.md#route-parameters) puedes leerlo en el [artículo de configuración de navegación](../guidance/navigation-settings.md) o en artículos sobre tipos específicos de enrutamiento en la [sección de parámetros de ruta](../routing/osmand-routing.md#routing-types).  


### Navegación simulada {#simulated-navigation}

La herramienta de **navegación simulada** te permite previsualizar una ruta antes de viajar. Esto ayuda con la planificación, la familiarización y la prueba del sistema de navegación de OsmAnd.

#### Iniciar / Detener simulación {#start--stop-simulation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Simular navegación Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Simular navegación iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Cuando se construye una ruta de navegación, puedes comenzar a simular la navegación usando la opción **<Translate android="true" ids="simulate_navigation"/>**.  

- En el [Menú de navegación](#navigation-menu) ve a *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Activa el interruptor para habilitar la opción.
- Toca el botón [Iniciar](#start--stop-navigation) navegación para iniciar la simulación.
- Para [Detener](#start--stop-navigation) la simulación de navegación, toca **Detener** (*Android*) o **Cancelar** (*iOS*).


#### Modo de velocidad {#speed-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simular navegación Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simular navegación iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Acelera la simulación en caminos rectos, disminuyendo la velocidad en intersecciones.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Funciona a una velocidad fija.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **En tramos rectos** de la carretera, la velocidad se acercará a la velocidad máxima permitida.
    - **En intersecciones**, el simulador reducirá la velocidad.
    - **Se aplicarán penalizaciones adicionales** en semáforos, señales de stop y otros obstáculos similares.


## Mapas faltantes o no sincronizados {#maps-missing-or-not-synchronized}

Para construir una ruta, todos los **mapas necesarios** deben descargarse y tener la misma fecha de lanzamiento. Tenga en cuenta que en algunas situaciones el mensaje de mapas faltantes podría estar oculto en el menú de preparación de ruta. Si sube el menú de navegación, verá las posibles razones por las que su ruta no pudo calcularse.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mensaje sin mapas al construir navegación Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Mensaje sin mapas al construir navegación iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### Mapas requeridos {#required-maps}

En el cuadro de diálogo de mapas requeridos verás sugerencias de mapas para descargar o actualizar. La lista de mapas utilizados podría no ser precisa, ya que calcula una ruta muy básica; para obtener la lista precisa de mapas, puedes hacer clic en **Calcular en línea**. Si seleccionas **Usar mapas descargados**, el cálculo de la ruta intentará usar los mapas ya descargados y omitirá el mensaje de advertencia.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mensaje sin mapas al construir navegación Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mensaje sin mapas al construir navegación iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Problemas comunes y soluciones {#common-issues-and-solutions}

1. [Las posibles causas del cálculo lento de la ruta.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [Qué hacer si la longitud de la ruta excede los 250 kilómetros.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [Qué hacer si la ruta sugerida parece incorrecta.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Cómo resolver la situación cuando la navegación no es posible debido a la falta de mapas necesarios.](#maps-missing-or-not-synchronized)

Para obtener más pasos de solución de problemas, consulta [problemas de navegación](../../troubleshooting/navigation.md).


## Artículos relacionados {#related-articles}

- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Detalles de la ruta](./route-details.md)
- [Navegación por pista](./gpx-navigation.md)
- [Navegación por marcadores](./markers-navigation.md)
- [Ajustes de navegación](../guidance/navigation-settings.md)
- [Pantalla del mapa durante la navegación](../guidance/map-during-navigation.md)
- [Indicaciones de voz / Notificaciones](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última actualización: Febrero de 2025*