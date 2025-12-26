---
source-hash: 6a05b52d6441fb5364abfd03b7da6c66258c7474e0a72a0ee7ea63b645d8011a
sidebar_position: 4
title:  Perfiles (Ajustes)
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

OsmAnd ofrece una variedad de perfiles predeterminados adaptados a diferentes actividades, como conducir, montar en bicicleta, caminar y actividades más especializadas como esquiar y navegar. Estos perfiles están diseñados para mejorar su experiencia de navegación según la actividad que esté realizando. Cada perfil incluye opciones configurables, lo que le permite ajustar la configuración e incorporar plugins adicionales para que coincidan con sus preferencias.

- Ciertos perfiles, como *Esquí* y *Barco*, tienen **características adicionales** que solo están disponibles cuando los plugins correspondientes están habilitados.

     - Los plugins se pueden activar navegando a *Menú → Plugins → Vista de mapa de esquí* o *Vista de mapa náutico*.
     - La activación de los plugins proporciona a los perfiles las características esenciales para cumplir con los requisitos específicos de estas actividades.

- Es importante tener en cuenta que algunos perfiles, como **Camión**, **Motocicleta**, **Ciclomotor**, **Tren**, **Avión**, **Barco** y **Equitación**, no están activados por defecto.

     - Para acceder y utilizar estos perfiles, debe habilitarlos manualmente en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - Este método ayuda a mantener una lista de perfiles organizada y relevante activando solo los necesarios para actividades específicas.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Explorar mapa o cualquier otro perfil)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Ajustes de Perfiles Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Ajustes de Perfiles iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Configuración del Perfil {#profile-configuration}

:::caution Aplicar ajustes solo a un perfil específico
Todos los ajustes se aplican exclusivamente al perfil de la aplicación actualmente seleccionado.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de Perfiles Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Ajustes de Perfiles Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de Perfiles iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

Esta sección contiene todos los ajustes relacionados con la apariencia, las opciones de navegación, la visualización del mapa, el menú de ajustes y la pantalla del perfil.


### Copia de seguridad gratuita en la nube {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Funciones de la carpeta de Favoritos android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Acciones de Favoritos ios](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

OsmAnd le permite [hacer una copia de seguridad](../personal/osmand-cloud.md#osmand-start) de los ajustes de su perfil de aplicación en OsmAnd Cloud, asegurando que sus configuraciones se almacenen de forma segura y se restauren fácilmente en las versiones de Android, iOS y Web. Esta función de copia de seguridad protege sus ajustes en caso de fallo del dispositivo o reinstalación de la aplicación. Puede beneficiarse de este plan especial utilizando [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).  

Debe tener una cuenta de [OsmAnd Cloud](../personal/osmand-cloud.md#login) para utilizar la *Copia de seguridad gratuita de ajustes*. Si tiene una suscripción a *OsmAnd Pro* o una cuenta activa de *OsmAnd Cloud*, el banner de promoción no se mostrará.


## Ajustes Generales {#general-settings}

Esta sección contiene ajustes para el tema de la aplicación y el botón de la brújula, unidades y formatos de datos del mapa y del perfil, dispositivos de entrada externos y muchos otros ajustes para crear la configuración óptima para su perfil elegido.

### Apariencia {#appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Ajustes Generales de Perfiles Apariencia Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Ajustes Generales de Perfiles Apariencia iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Le permite establecer un tema diurno y nocturno para la aplicación, que se puede aplicar a un perfil o a todos a la vez. Esta opción no cambia los ajustes del [modo de mapa](../map/vector-maps.md#map-mode).
  - *Tema <Translate android="true" ids="dark_theme"/>*
  - *Tema <Translate android="true" ids="light_theme"/>*
  - *<Translate android="true" ids="system_default_theme"/>*  
      Aplica el tema del sistema. Por defecto, y para todos los nuevos usuarios, el estilo del mapa corresponde al tema claro u oscuro seleccionado en los ajustes del sistema de su dispositivo.
- **<Translate android="true" ids="rotate_map_to"/>**. Le permite elegir [el modo de orientación del mapa](../map/interact-with-map.md#map-orientation-modes) para el perfil seleccionado.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Establece y bloquea la posición de la pantalla en la aplicación OsmAnd. Esta función no es compatible con iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_portrait_inverted"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_landscape_inverted"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*  

- [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control) (*Solo Android*). Abre el menú de control de pantalla, donde puede seleccionar opciones para la pantalla del dispositivo mientras navega para ahorrar el consumo de batería del dispositivo.  


### Unidades y Formatos {#units--formats}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes Generales de Perfiles Unidades y formatos Android](@site/static/img/personal/profiles/units_formats_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes Generales de Perfiles Unidades y formatos iOS](@site/static/img/personal/profiles/units_formats_ios.png)

</TabItem>

</Tabs>

En la sección **Unidades y Formatos**, puede ajustar las unidades de medida y los formatos para que se ajusten a sus preferencias personales y a los estándares regionales, asegurando que todos los datos se muestren de manera conveniente y familiar.


<!--

<table>
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Format</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4 align="left">**<Translate android="true" ids="driving_region"/>**</td>
            <td rowspan=2 align="left"><Translate android="true" ids="shared_string_automatic"/></td>
            <td align="left">According to the device location.</td>
        </tr>
        <tr>
            <td rowspan=2 align="left"><Translate android="true" ids="driving_region_europe_asia"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/></td>
        </tr>
        <tr>
            <td align="left"><Translate android="true" ids="driving_region_us"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/></td>
        </tr>
    </tbody>
</table>

-->

|  |  |  |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="driving_region"/>** | <Translate android="true" ids="shared_string_automatic"/> | <ul><li>Según la ubicación del dispositivo</li></ul> |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_mi_feet"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_uk"/>  |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_mi_meters"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_india"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|  |  |  |
| **<Translate android="true" ids="unit_of_length"/>** | <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0.62 ml / 3281 ft (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 ya / 0.62 ml (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0.54 nmi / 3280.84 ft / 1000 m<br/>Las unidades de longitud se aplican a los valores de distancia horizontal (p. ej., distancias de conducción/ruta y distancias de maniobra en la navegación).|
|  |  |  |
| **Unidades de altitud** | <ul><li><Translate android="true" ids="shared_string_meters"/></li><li><Translate android="true" ids="shared_string_feet"/></li></ul> | 1 m / 3.28 ft<br/>Las unidades de altitud se aplican a los valores de altitud/elevación y métricas relacionadas (subida/bajada, rango de altitud) en los widgets de Altitud, la información de ruta de Navegación y las estadísticas de Pistas.<br/>Por defecto, las Unidades de altitud están sincronizadas con las Unidades de longitud y se vuelven independientes solo después de que el usuario las cambie manualmente. |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Ejemplo: 50.12333° 19.93233° (Lat Long) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Ejemplo: 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Ejemplo: 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zona Norte Este) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Ejemplo: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Ejemplo:  9F2X4WFJ+7W ([Código de Ubicación Abierto](https://en.wikipedia.org/wiki/Open_Location_Code) representa un área de 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (solo versión de Android) | Ejemplo: 2 215 227.87, 830 915.9 ([Sistema de coordenadas suizo](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (solo versión de Android) | Ejemplo: 4 215 227.87, 1 830 915.9 ([Sistema de coordenadas suizo](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).))) |
|  |  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*Android*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| Grados 180° | Todos los valores angulares tienen lecturas de 0° a 180° y de 0° a -180°.  |
|          | Grados 360° | Todos los valores angulares tienen lecturas de 0° a 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | Todos los valores angulares tienen [valor en miliradianes](https://en.wikipedia.org/wiki/Milliradian).  |
|  |  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*Android*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 25 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 kn |
|  |  |  |
| **<Translate android="true" ids="unit_of_volume"/>** | <Translate android="true" ids="litres"/> | Europa, Asia, América Latina, Canadá, Japón, India, Australia |
|  | <Translate android="true" ids="imperial_gallons"/> | Reino Unido y similares |
|  | <Translate android="true" ids="us_gallons"/> | Estados Unidos |
|  |  |  |
| **<Translate android="true" ids="shared_string_temperature"/>**| <Translate android="true" ids="system_default_theme"/> |  |
|  | <Translate android="true" ids="weather_temperature_celsius"/> |  |
|  | <Translate android="true" ids="weather_temperature_fahrenheit"/> |  |
|  |  |  |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *Para mediciones precisas*, elija cómo se muestra la información de distancia en los widgets de navegación, como la distancia a un punto, el próximo giro o un carril específico. |
|          | <Translate android="true" ids="round_up"/> | *Para una mejor legibilidad*, los números que se muestran en los widgets de navegación (distancia a un punto, próximo giro o carril) se redondearán hacia abajo para tener menos dígitos. <br/> Por ejemplo: 3672 m *→* 3.6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


### Otros {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Ajustes Generales de Perfiles Otros Android](@site/static/img/personal/profiles/other_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Ajustes Generales de Perfiles Otros iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)  

</TabItem>

</Tabs>

La sección **Otros** proporciona ajustes de perfil adicionales para personalizar la interfaz y los controles de entrada de OsmAnd. Estos ajustes le permiten configurar dispositivos externos, ajustar las preferencias de animación y activar el modo de pantalla completa.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – Conecte controladores externos como *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*, *<Translate ios="true" ids="sett_generic_ext_input"/>*, o *<Translate android="true" ids="sett_parrot_ext_input"/>* para operar OsmAnd usando botones físicos.

- **<Translate android="true" ids="position_animation"/>** / **Animar posición propia** – El icono de [posición](../map/interact-with-map.md#my-location-and-zoom) se anima con cada punto GPS recibido (una vez por segundo). Se puede notar un ligero retraso en su movimiento, especialmente durante movimientos rápidos o fluctuaciones de la señal GPS. Puede ajustar este efecto usando el ajuste *Tiempo de predicción* (solo Android): valores más altos aumentan la suavidad pero añaden retraso, valores más bajos reducen el retraso pero pueden hacer que el movimiento sea menos suave.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*Solo Android*) – Habilite o deshabilite la capacidad de usar los botones de volumen de su dispositivo para hacer [zoom](../map/interact-with-map.md#my-location-and-zoom) en el mapa.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*Solo Android*) – Suaviza la rotación del mapa con [movimiento gradual](https://en.wikipedia.org/wiki/Kalman_filter), reduciendo los cambios bruscos de posición. Esto introduce un pequeño retraso (*menos de 1 segundo*).

<!-- - [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*Android only*) – Uses your device’s [magnetic sensor](https://en.wikipedia.org/wiki/Kalman_filter) to stabilize map rotation, reducing abrupt changes. This also introduces a slight delay.-->

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*Solo Android*) – Toque un espacio vacío en el mapa para ocultar los botones de control y los widgets, maximizando la visibilidad del mapa.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#remove-animations) (*Solo Android*) – Deshabilite las animaciones en el modo de navegación para transiciones de pantalla más rápidas.



## Ajustes de Navegación {#navigation-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Ajustes de Navegación iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

Para una descripción detallada de las opciones de navegación, consulte el artículo [Ajustes de Navegación](../navigation/guidance/navigation-settings.md), que explica cómo configurar OsmAnd para una experiencia de navegación óptima.

- [Tipo de navegación](../navigation/guidance/navigation-settings.md#navigation-type) - Elija el modo de navegación apropiado según su método de viaje y la disponibilidad de internet.

- [Parámetros de ruta](../navigation/guidance/navigation-settings.md#route-parameters) - Defina cómo OsmAnd calcula las rutas, incluyendo preferencias para evitar ciertas carreteras o seleccionar tipos de ruta.

- [Alertas en pantalla](../navigation/guidance/navigation-settings.md#screen-alerts) - Habilite el *Widget de Alertas* para mostrar notificaciones en tiempo real sobre límites de velocidad, giros y otras condiciones importantes de la carretera.

- [Indicaciones de voz](../navigation/guidance/navigation-settings.md#voice-prompts) - Habilite la guía de audio para recibir instrucciones de navegación habladas mientras conduce o camina por una ruta seleccionada.

- [Parámetros del vehículo](../navigation/guidance/navigation-settings.md#vehicle-parameters) – Configure ajustes específicos del vehículo como la velocidad máxima y la altura del vehículo para garantizar un enrutamiento preciso y evitar carreteras restringidas.

- [Personalizar línea de ruta](../navigation/guidance/navigation-settings.md#customize-route-line) – Ajuste el color, el ancho y el estilo de la línea de ruta que se muestra en el mapa para una mejor visibilidad durante la navegación.

- [Mapa durante la navegación](../navigation/guidance/navigation-settings.md#map-during-navigation) – Vea el posicionamiento en tiempo real en el mapa, siga el progreso a lo largo de la ruta y mejore la orientación utilizando puntos de referencia.

- [Guía detallada de la pista](../navigation/guidance/navigation-settings.md) – Mejore la navegación giro a giro alineando su ruta con las carreteras mapeadas. Ajustes disponibles: *Preguntar cada vez* o *Siempre*.

:::info
No hay ajustes de navegación en el perfil *Explorar mapa*.  
:::


## Configurar Mapa {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Configurar mapa*

![Ajustes de Configurar mapa de Perfiles Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

![Ajustes de Configurar mapa de Perfiles iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

El menú [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) le permite personalizar los ajustes de visualización del mapa para el perfil seleccionado, permitiendo una mejor visualización de los elementos clave del mapa.  

Con este menú, puede:

- **Resaltar elementos importantes del mapa**, incluyendo [puntos Favoritos](../personal/favorites.md), [marcadores de Navegación](../personal/markers.md), o [Puntos de Interés](../map/point-layers-on-map.md#points-of-interest-pois) especiales en el mapa.

- **Mostrar rutas específicas y archivos GPX**, incluyendo rutas de terceros para navegación o análisis.

- **Superponer capas de mapa adicionales**, como [información del terreno](../plugins/topography.md), **imágenes de satélite**, u otros [mapas ráster](../map/raster-maps.md) disponibles.

- **Habilitar la visualización del transporte público**, mostrando [rutas y paradas](../map/public-transport.md) para una mejor planificación del viaje.

- **Ajustar la apariencia del mapa** seleccionando un [estilo de mapa](../map/vector-maps.md#default-map-styles) diferente para que se ajuste a sus necesidades.


## Configurar Pantalla {#configure-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  
- Ir a: *Menú → Ajustes → Perfil de la aplicación → Configurar pantalla*

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

El [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) es un menú que le permite configurar los widgets para el perfil seleccionado que se mostrarán en el mapa. En esta pantalla, puede habilitar y configurar widgets [Informativos](../widgets/info-widgets.md) y de [Navegación](../widgets/nav-widgets.md), así como otros elementos.


## Apariencia del Perfil {#profile-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Apariencia de Perfiles](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Apariencia de Perfiles](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

Los ajustes de **Apariencia del perfil** le permiten personalizar el nombre y la representación visual de su perfil. También puede modificar la apariencia de [Mi Ubicación](#my-location-appearance) aquí. Mientras que el *nombre del perfil* debe ser único, los *iconos* y *colores* pueden ser los mismos en diferentes perfiles. Estos cambios se aplicarán en varias partes de la aplicación, como el menú de [Preparación de ruta](../navigation/setup/route-navigation.md).


## Apariencia de Mi Ubicación {#my-location-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Apariencia de Mi ubicación](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Apariencia de Mi ubicación](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

Los ajustes de **Apariencia de Mi Ubicación** le permiten personalizar cómo se muestra su ubicación en el mapa, tanto cuando está parado como en movimiento. El movimiento es detectado por el sistema operativo cuando la velocidad del dispositivo es **mayor que cero**.

### Ángulo de Visión y Radio de Ubicación {#view-angle-and-location-radius}

Puede personalizar los elementos visuales relacionados con su ubicación y aplicarlos por separado o juntos para las posiciones de **Reposo** y **Navegación**. Tanto para los modos 2D como 3D, el *Ángulo de visión* y el *Radio de ubicación* se muestran en el mismo color seleccionado para el [perfil de navegación](#profile-appearance), directamente debajo del icono de [Mi Ubicación](../map/interact-with-map.md#my-location-and-zoom).

- **<Translate android="true" ids="view_angle"/>** – Muestra un área en **forma de cono** que indica la dirección en la que está mirando actualmente.  
- **<Translate android="true" ids="location_radius"/>** – Muestra un **área circular** alrededor de su icono, que representa la precisión de su ubicación actual.


### Iconos 3D Personalizados {#custom-3d-icons}

Para una experiencia más personalizada, puede crear y añadir **iconos 3D personalizados** a OsmAnd.  

***Cómo añadir un icono de ubicación 3D personalizado:***

1. **Cree un modelo 3D**. Diseñe su icono en [formatos MTL y OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file).

2. **Integre el modelo en OsmAnd:**  
   - Desarrolle un [plugin personalizado](../plugins/custom.md) utilizando el [ejemplo de plugin](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf) proporcionado.  
   - Coloque sus archivos de icono 3D en las siguientes rutas:  

     `..osmand/models/icon_folder_name/custom_3d_file.mtl`  
     `..osmand/models/icon_folder_name/custom_3d_file.obj`

   - Alternativamente, copie los archivos **MTL y OBJ** directamente en la carpeta de OsmAnd utilizando la misma estructura de directorios.  

### Modos de Orientación del Mapa {#map-orientation-modes-my-location}

Puede controlar cómo se comporta el icono de **Mi Ubicación** utilizando diferentes [modos de orientación del mapa](../widgets/map-buttons.md#compass).  

- Si el icono de ubicación **tiembla o rota** mientras está parado, cambie del **Modo de Dirección de Movimiento** ([Rotar Mapa por Rumbo](../map/interact-with-map.md#rotate-map-by-bearing)) a otro modo.  
- Ajuste configuraciones adicionales en *Menú → Ajustes → Perfiles de la aplicación → Apariencia del perfil → Opciones*.
- Aprenda más sobre el seguimiento de rumbo y dirección en la sección del [Widget de Rumbo](../widgets/nav-widgets#bearing-widget).  


## Personalización de la IU {#ui-customization}

<InfoAndroidOnly />

:::note Para plugins no utilizados
Para ocultar todos los parámetros de control de los [plugins](../plugins/index.md#configure-plugin) no utilizados, desactívelos.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Personalización de la IU del Perfil Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

Con la función de personalización de la IU, puede ajustar el número de elementos en acciones como [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android), [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) y [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md). La información sobre el número de elementos añadidos del total de elementos posibles se puede encontrar bajo el título de cada función.


### Menú lateral {#drawer}

![Menú lateral del Perfil Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  ![Restablecer Perfil Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)  

- **Elementos principales visibles** - En la sección *Personalizar IU*, puede *reordenar, ocultar y restaurar* elementos del [Menú lateral](../start-with/main-menu.md#customize-advanced-use-of-android) para que coincidan con sus preferencias.

- **<Translate android="true" ids="reset_to_default"/>** - Restaura la *lista original de elementos* en el menú lateral, deshaciendo instantáneamente cualquier personalización.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Le permite copiar el *diseño del menú lateral* de otro perfil de OsmAnd para mantener una configuración consistente entre perfiles.

### Configurando el Mapa {#configuring-the-map}

![Menú Configurar mapa del Perfil Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Menú Configurar mapa del Perfil Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Menú Configurar mapa** - En la sección *Personalizar IU*, puede *reordenar u ocultar elementos* del menú [Configurar mapa](../map/configure-map-menu.md), permitiendo un acceso rápido a los ajustes de uso frecuente.

- **<Translate android="true" ids="reset_to_default"/>** - Restaura la *lista original de elementos* en el menú Configurar mapa, eliminando cualquier cambio.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Copia el *diseño del menú Configurar mapa* de otro perfil de OsmAnd.


### Acciones del Menú Contextual {#context-menu-actions}

![Menú contextual del Perfil Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)  ![Restablecer Menú Configurar mapa del Perfil Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Menú contextual del mapa** - En la sección Personalizar IU, puede reordenar u ocultar elementos en el [menú contextual del mapa](../map/map-context-menu.md) para optimizar el acceso a las funciones de uso frecuente.

- **<Translate android="true" ids="reset_to_default"/>** – Restaura la *lista de elementos predeterminada* en el menú contextual del mapa, revirtiendo instantáneamente cualquier modificación.

- **<Translate android="true" ids="copy_from_other_profile"/>** – Copia la *disposición del menú contextual* de otro perfil de OsmAnd para mantener la consistencia entre diferentes perfiles.


## Ajustes de Plugins {#plugin-settings}

:::caution Acceso a los ajustes del plugin
Para acceder a los ajustes del plugin, primero debe [**activar el plugin**](../plugins/index.md#enable--disable) en la *sección de Plugins del menú principal*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*  

![Ajustes de Plugins del Perfil Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Ajustes de Plugins del Perfil iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

Los plugins desbloquean características adicionales de la aplicación y pueden ser [de pago o gratuitos](../plugins/index.md#purchase). Algunos plugins tienen sus propios [ajustes](../plugins/index.md#plugin-settings), otros no. OsmAnd le da la posibilidad de configurar los plugins para cada perfil por separado.


- **Grabación de viaje**. Este elemento abre los [ajustes de grabación de viaje](../plugins/trip-recording.md#recording-settings) para el perfil seleccionado, donde puede elegir cualquier parámetro para grabar sus viajes.

- **Tiempo**. Las capas interactivas del mapa del [Tiempo](../plugins/weather.md#weather-settings) le permiten monitorear la temperatura, la presión del aire, la cobertura de nubes, la velocidad del viento y la precipitación en su ciudad o en cualquier otra ubicación en un mapa global.

- **Notas de Audio / Video** (*Solo Android*). Este elemento abre los [ajustes del plugin de audio-video](../plugins/audio-video-notes.md#plugin-settings) para el perfil seleccionado. El plugin *Notas de Audio/Video* amplía la funcionalidad de OsmAnd permitiéndole crear sus notas en varios formatos como foto, video o audio y asociarlas con una ubicación geográfica o la ubicación actual.  

- **Edición de OpenStreetMap**. Este elemento abre los [ajustes del plugin de edición de OpenStreetMap](../plugins/osm-editing.md#settings) para el perfil seleccionado. Con OsmAnd y el plugin de edición de OSM, puede contribuir a OpenStreetMap.org creando o modificando PDI, añadiendo o comentando notas y subiendo rutas GPX grabadas.

- **Sensores Externos**. Cuando toca un elemento en la sección *Ajustes de Plugins*, se abren los [ajustes de sensores externos](../plugins/external-sensors.md#sensor-settings) para el perfil seleccionado. El plugin de Sensores Externos le permite leer y registrar datos de sensores externos inalámbricos y mostrarlos usando widgets en la aplicación OsmAnd.

- **Accesibilidad** (*Solo Android*). Este elemento abre los [ajustes del plugin de Accesibilidad](../plugins/accessibility.md#plugin-settings) para el perfil seleccionado. Los ajustes del plugin de Accesibilidad le permiten personalizar la aplicación según sus necesidades. Todos los ajustes se relacionan con el proceso de navegación y se establecen individualmente para cada perfil.

- **Desarrollo de OsmAnd**. Este menú abre los [ajustes del plugin de desarrollo de OsmAnd](../plugins/development.md#plugin-settings), donde puede configurar la aplicación OsmAnd para fines de prueba o explorar las próximas características. Estos ajustes están destinados a los desarrolladores y no son necesarios para el uso normal de la aplicación.  

  > ***Cambiar los ajustes del plugin de desarrollo de OsmAnd afecta a todos los perfiles.***

- **Wikipedia** (solo iOS). Este menú abre los *[ajustes del plugin de Wikipedia](../plugins/wikipedia.md#wikipedia-settings)*. Puede seleccionar el idioma en el que se mostrarán los artículos y elegir si desea descargar imágenes de Wikipedia. Tener Wikipedia en su viaje mejora su experiencia al proporcionar información sobre los lugares que visita. Funciona sin conexión y muestra artículos de Wikipedia relevantes directamente en el mapa relacionados con los puntos de interés.

- **Métricas del vehículo**. Este menú abre los *[ajustes del plugin de métricas del vehículo](../plugins/vehicle-metrics.md#scanner-settings)*. Le permite conectar un escáner OBD-II a OsmAnd.

- **Rastreador de embarcaciones AIS** (solo Android). Este menú abre los *[ajustes del plugin de rastreador de embarcaciones AIS](../plugins/ais-tracker.md#plugin-settings)*. Este plugin le permite conectar un rastreador AIS a OsmAnd.



## Acciones {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de Acciones de Perfiles Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de Acciones de Perfiles iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)  

</TabItem>

</Tabs>

Acciones con el perfil seleccionado:  

- [Exportar perfil](https://osmand.net/docs/user/personal/import-export#export) - Exporta todos los ajustes del perfil seleccionado en formato OSF.

- **Copiar de otro perfil** - Copia todos los ajustes de otro perfil existente en su aplicación OsmAnd.

- **Restablecer a los valores predeterminados** - Devuelve todos los ajustes al estado inicial.

- **Eliminar perfil**:
    - Esta acción está disponible solo para *Android* y solo para un *Perfil personalizado*.
    - Los perfiles predeterminados no se pueden eliminar.
    - Para añadir un perfil, vaya a *Menú → Ajustes → Perfiles de la aplicación → + Nuevo perfil*.


## Artículos Relacionados {#related-articles}

- [Gestionar Pistas](../personal/tracks/manage-tracks.md#import--export-track)
- [Historial de Búsqueda](../search/search-history.md#export-and-share)
- [Esquemas de Paleta de Colores](../personal/color-palette-schemes.md)