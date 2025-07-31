---
source-hash: 56be876b022a30d0407570ad16f12bc16882efb9fa70f60e3ef8e9dfb7079aa7
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


## Descripción general {#overview}

OsmAnd ofrece una variedad de perfiles predeterminados adaptados a diferentes actividades, como conducir, andar en bicicleta, caminar y actividades más especializadas como esquiar y navegar. Estos perfiles están diseñados para mejorar tu experiencia de navegación según la actividad en la que te encuentres. Cada perfil incluye opciones configurables, lo que te permite ajustar la configuración e incorporar complementos adicionales para que coincidan con tus preferencias.

- Ciertos perfiles, como *Esquí* y *Barco*, tienen **características adicionales** que solo están disponibles cuando se habilitan los complementos correspondientes.

     - Los complementos se pueden activar navegando a *Menú → Complementos → Vista de mapa de esquí* o *Vista de mapa náutico*.
     - La habilitación de los complementos proporciona a los perfiles las características esenciales para satisfacer los requisitos específicos de estas actividades.

- Es importante tener en cuenta que algunos perfiles, como **Camión**, **Motocicleta**, **Ciclomotor**, **Tren**, **Avión**, **Barco** y **Equitación**, no están activados por defecto.

     - Para acceder y utilizar estos perfiles, debes habilitarlos manualmente en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - Este método ayuda a mantener una lista organizada y relevante de perfiles al activar solo aquellos necesarios para actividades específicas.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Explorar mapa o cualquier otro perfil)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Configuración de perfiles {#profile-configuration}

:::caution Aplicar ajustes solo a un perfil específico
Todos los ajustes se aplican exclusivamente al perfil de aplicación actualmente seleccionado.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

Esta sección contiene todos los ajustes relacionados con la apariencia, las opciones de navegación, la visualización del mapa, el menú de ajustes y la pantalla de perfil.


### Copia de seguridad gratuita en la nube {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Favorites folder functions android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Favorites actions ios](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

OsmAnd te permite [hacer una copia de seguridad](../personal/osmand-cloud.md#osmand-start) de la configuración de tu perfil de aplicación en OsmAnd Cloud, asegurando que tus configuraciones se almacenen de forma segura y se restauren fácilmente en las versiones de Android, iOS y Web. Esta función de copia de seguridad protege tus configuraciones en caso de fallo del dispositivo o reinstalación de la aplicación. Puedes beneficiarte de este plan especial utilizando [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).

Debes tener una cuenta de [OsmAnd Cloud](../personal/osmand-cloud.md#login) para usar la *Copia de seguridad de ajustes gratuita*. Si tienes una suscripción a *OsmAnd Pro* o una cuenta activa de *OsmAnd Cloud*, el banner de promoción no se mostrará.


## Ajustes generales {#general-settings}

Esta sección contiene ajustes para el tema de la aplicación y el botón de la brújula, las unidades y formatos de datos del mapa y del perfil, los dispositivos de entrada externos y muchos otros ajustes para crear la configuración óptima para el perfil elegido.

### Apariencia {#appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Te permite establecer un tema diurno y nocturno para la aplicación, que se puede aplicar a un perfil o a todos a la vez. Esta opción no cambia la configuración del [modo de mapa](../map/vector-maps.md#map-mode).
  - *<Translate android="true" ids="dark_theme"/>*
  - *<Translate android="true" ids="light_theme"/>*
  - *<Translate android="true" ids="system_default_theme"/>*  
      Aplica el tema del sistema. Por defecto, y para todos los nuevos usuarios, el estilo del mapa corresponde al tema claro u oscuro seleccionado en la configuración del sistema de tu dispositivo.
- **<Translate android="true" ids="rotate_map_to"/>**. Te permite elegir el [modo de orientación del mapa](../map/interact-with-map.md#map-orientation-modes) para el perfil seleccionado.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Establece y bloquea la posición de la pantalla en la aplicación OsmAnd. Esta función no es compatible con iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*  

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Solo Android*). Abre el menú de control de pantalla, donde puedes seleccionar opciones para la pantalla del dispositivo mientras navegas para ahorrar batería del dispositivo.


### Unidades y formatos {#units--formats}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/profiles_units_formats_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/profile_unitsformats_3_ios.png)

</TabItem>

</Tabs>

En la sección **Unidades y Formatos**, puedes ajustar las unidades de medida y los formatos para que se adapten a tus preferencias personales y estándares regionales, asegurando que todos los datos se muestren de forma cómoda y familiar.


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
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0.54 nmi / 3280.84 ft / 1000 m |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Ejemplo: 50.12333° 19.93233° (Lat Long) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Ejemplo: 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Ejemplo: 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zona Norte Este) . [<Translate android="true" ids="utm_format_descr"/>](https://es.wikipedia.org/wiki/Sistema_de_coordenadas_universal_transversal_de_Mercator) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Ejemplo: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://es.wikipedia.org/wiki/Sistema_de_referencia_de_cuadr%C3%ADcula_militar)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Ejemplo:  9F2X4WFJ+7W ([Código de ubicación abierto](https://es.wikipedia.org/wiki/Open_Location_Code) representa un área de 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (Solo versión Android) | Ejemplo: 2 215 227.87, 830 915.9 ([Sistema de coordenadas suizo](https://es.wikipedia.org/wiki/Sistema_de_coordenadas_suizo#:~:text=El%20sistema%20de%20coordenadas%20suizo%20(o,Oficina%20Federal%20de%20Topograf%C3%ADa%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (Solo versión Android) | Ejemplo: 4 215 227.87, 1 830 915.9 ([Sistema de coordenadas suizo](https://es.wikipedia.org/wiki/Sistema_de_coordenadas_suizo#:~:text=El%20sistema%20de%20coordenadas%20suizo%20(o,Oficina%20Federal%20de%20Topograf%C3%ADa%20(Swisstopo).))) |
|  |  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*Android*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| Grados 180° | Todos los valores angulares tienen lecturas de 0° a 180° y de 0° a -180°.  |
|          | Grados 360° | Todos los valores angulares tienen lecturas de 0° a 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | Todos los valores angulares tienen [valor en milirradianes](https://es.wikipedia.org/wiki/Milirradi%C3%A1n).  |
|  |  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*Android*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 nudos |
|  |  |  |
| **<Translate android="true" ids="unit_of_volume"/>** | <Translate android="true" ids="litres"/> | Europa, Asia, América Latina, Canadá, Japón, India, Australia |
|  | <Translate android="true" ids="imperial_gallons"/> | Reino Unido y similares |
|  | <Translate android="true" ids="us_gallons"/> | Estados Unidos |
|  |  |  |
| **<Translate android="true" ids="shared_string_temperature"/>** (*Solo Android*)| <Translate android="true" ids="system_default_theme"/> |  |
|  | <Translate android="true" ids="weather_temperature_celsius"/> |  |
|  | <Translate android="true" ids="weather_temperature_fahrenheit"/> |  |
|  |  |  |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *Para mediciones precisas*, elige cómo se muestra la información de distancia en los widgets de navegación, como la distancia a un punto, el siguiente giro o un carril específico. |
|          | <Translate android="true" ids="round_up"/> | *Para una mejor legibilidad*, los números que se muestran en los widgets de navegación (distancia a un punto, siguiente giro o carril) se redondearán para tener menos dígitos. <br/> Por ejemplo: 3672 m *→* 3.6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


### Otros {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_general_settings_other_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Profiles General Settings Other iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)

</TabItem>

</Tabs>

La sección **Otros** proporciona ajustes de perfil adicionales para personalizar la interfaz y los controles de entrada de OsmAnd. Estos ajustes te permiten configurar dispositivos externos, ajustar las preferencias de animación y alternar el modo de pantalla completa.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – Conecta controladores externos como *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*, *<Translate ios="true" ids="sett_generic_ext_input"/>*, o *<Translate android="true" ids="sett_parrot_ext_input"/>* para operar OsmAnd usando botones físicos.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*Solo Android*) – Habilita o deshabilita la capacidad de usar los botones de volumen de tu dispositivo para [acercar y alejar](../map/interact-with-map.md#my-location-and-zoom) el mapa.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*Solo Android*) – Suaviza la rotación del mapa con [movimiento gradual](https://es.wikipedia.org/wiki/Filtro_de_Kalman), reduciendo los cambios bruscos de posición. Esto introduce un pequeño retraso (*menos de 1 segundo*).

- [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*Solo Android*) – Utiliza el [sensor magnético](https://es.wikipedia.org/wiki/Filtro_de_Kalman) de tu dispositivo para estabilizar la rotación del mapa, reduciendo los cambios bruscos. Esto también introduce un ligero retraso.

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*Solo Android*) – Toca un espacio vacío en el mapa para ocultar los botones de control y los widgets, maximizando la visibilidad del mapa.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (*Solo Android*) – Deshabilita las animaciones en el modo de navegación para transiciones de pantalla más rápidas.

- **<Translate android="true" ids="position_animation"/>** (*Solo Android*) – El icono de [posición](../map/interact-with-map.md#my-location-and-zoom) se anima con cada punto GPS recibido (una vez por segundo). Puede notarse un ligero retraso en su movimiento, especialmente durante movimientos rápidos o fluctuaciones de la señal GPS. Puedes ajustar este efecto usando la configuración de *Tiempo de predicción*: valores más altos aumentan la suavidad pero añaden retraso, valores más bajos reducen el retraso pero pueden hacer que el movimiento sea menos suave.


## Ajustes de navegación {#navigation-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

Para una descripción detallada de las opciones de navegación, consulta el artículo [Ajustes de navegación](../navigation/guidance/navigation-settings.md), que explica cómo configurar OsmAnd para una experiencia de navegación óptima.

- [Tipo de navegación](../navigation/guidance/navigation-settings.md#navigation-type) - Elige el modo de navegación apropiado según tu método de viaje y la disponibilidad de internet.

- [Parámetros de ruta](../navigation/guidance/navigation-settings.md#route-parameters) - Define cómo OsmAnd calcula las rutas, incluyendo preferencias para evitar ciertas carreteras o seleccionar tipos de ruta.

- [Alertas en pantalla](../navigation/guidance/navigation-settings.md#screen-alerts) - Habilita el *Widget de alertas* para mostrar notificaciones en tiempo real de límites de velocidad, giros y otras condiciones importantes de la carretera.

- [Indicaciones de voz](../navigation/guidance/navigation-settings.md#voice-prompts) - Habilita la guía de audio para recibir instrucciones de navegación habladas mientras conduces o caminas por una ruta seleccionada.

- [Parámetros del vehículo](../navigation/guidance/navigation-settings.md#vehicle-parameters) – Configura los ajustes específicos del vehículo, como la velocidad máxima y la altura del vehículo, para garantizar un enrutamiento preciso y evitar carreteras restringidas.

- [Personalizar línea de ruta](../navigation/guidance/navigation-settings.md#customize-route-line) – Ajusta el color, el ancho y el estilo de la línea de ruta que se muestra en el mapa para una mejor visibilidad durante la navegación.

- [Mapa durante la navegación](../navigation/guidance/navigation-settings.md#map-during-navigation) – Visualiza el posicionamiento en tiempo real en el mapa, sigue el progreso a lo largo de la ruta y mejora la orientación utilizando puntos de referencia.

- [Guía detallada de la ruta](../navigation/guidance/navigation-settings.md) – Mejora la navegación paso a paso alineando tu ruta con las carreteras mapeadas. Ajustes disponibles: *Preguntar siempre* o *Siempre*.

:::info
No hay ajustes de navegación en el perfil *Explorar mapa*.
:::


## Configurar mapa {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Configurar mapa*

![Profiles Configure map Settings Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

![Profiles Configure map Settings iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

El menú [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) te permite personalizar la configuración de visualización del mapa para el perfil seleccionado, lo que permite una mejor visualización de los elementos clave del mapa.

Con este menú, puedes:

- **Resaltar elementos importantes del mapa**, incluidos [Puntos favoritos](../personal/favorites.md), [Marcadores de navegación](../personal/markers.md) o [Puntos de interés](../map/point-layers-on-map.md#points-of-interest-pois) especiales en el mapa.

- **Mostrar rutas específicas y archivos GPX**, incluidas pistas de terceros para navegación o análisis.

- **Superponer capas de mapa adicionales**, como [información del terreno](../plugins/topography.md), **imágenes satelitales** u otros [mapas ráster](../map/raster-maps.md) disponibles.

- **Habilitar la visualización del transporte público**, mostrando [rutas y paradas](../map/public-transport.md) para una mejor planificación del viaje.

- **Ajustar la apariencia del mapa** seleccionando un [estilo de mapa](../map/vector-maps.md#default-map-styles) diferente para que coincida con tus necesidades.


## Configurar pantalla {#configure-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*
- Ir a: *Menú → Ajustes → Perfil de la aplicación → Configurar pantalla*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

El [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) es un menú que te permite configurar los widgets para el perfil seleccionado que se mostrarán en el mapa. En esta pantalla, puedes habilitar y configurar widgets [informativos](../widgets/info-widgets.md) y [de navegación](../widgets/nav-widgets.md), así como otros elementos.


## Apariencia del perfil {#profile-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

Los ajustes de **Apariencia del perfil** te permiten personalizar el nombre y la representación visual de tu perfil. También puedes modificar la apariencia de [Mi ubicación](#my-location-appearance) aquí. Si bien el *nombre del perfil* debe ser único, los *iconos* y *colores* pueden ser los mismos en diferentes perfiles. Estos cambios se aplicarán en varias partes de la aplicación, como el menú de [Preparación de ruta](../navigation/setup/route-navigation.md).


### Apariencia de mi ubicación {#my-location-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![My location Appearance](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![My location Appearance](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

Los ajustes de **Apariencia de mi ubicación** te permiten personalizar cómo se muestra tu ubicación en el mapa, tanto cuando estás parado como en movimiento. El movimiento es detectado por el sistema operativo cuando la velocidad del dispositivo es **mayor que cero**.

#### 1. Ángulo de visión y radio de ubicación {#1-view-angle-and-location-radius}

Puedes personalizar los elementos visuales relacionados con tu ubicación y aplicarlos por separado o juntos para las posiciones **En reposo** y **Navegación**. Tanto para los modos 2D como 3D, el *Ángulo de visión* y el *Radio de ubicación* se muestran en el mismo color seleccionado para el [perfil de navegación](#profile-appearance), directamente debajo del icono [Mi ubicación](../map/interact-with-map.md#my-location-and-zoom).

- **<Translate android="true" ids="view_angle"/>** – Muestra un área **en forma de cono** que indica la dirección en la que te encuentras actualmente.
- **<Translate android="true" ids="location_radius"/>** – Muestra un **área circular** alrededor de tu icono, que representa la precisión de tu ubicación actual.


#### 2. Iconos 3D personalizados {#2-custom-3d-icons}

Para una experiencia más personalizada, puedes crear y añadir **iconos 3D personalizados** a OsmAnd.

***Cómo añadir un icono de ubicación 3D personalizado:***

1. **Crea un modelo 3D**. Diseña tu icono en [formatos MTL y OBJ](https://es.wikipedia.org/wiki/Wavefront_.obj).

2. **Integra el modelo en OsmAnd:**
   - Desarrolla un [complemento personalizado](../plugins/custom.md) utilizando el [ejemplo de complemento](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf) proporcionado.
   - Coloca tus archivos de icono 3D en las siguientes rutas:

     `..osmand/models/nombre_carpeta_icono/archivo_3d_personalizado.mtl`
     `..osmand/models/nombre_carpeta_icono/archivo_3d_personalizado.obj`

   - Alternativamente, copia los **archivos MTL y OBJ** directamente en la carpeta de OsmAnd usando la misma estructura de directorios.

#### 3. Modos de orientación del mapa {#3-map-orientation-modes}

Puedes controlar cómo se comporta el icono de **Mi ubicación** utilizando diferentes [modos de orientación del mapa](../widgets/map-buttons.md#compass).

- Si el icono de ubicación **se tambalea o gira** mientras está parado, cambia del **Modo de dirección de movimiento** ([Rotar mapa por rumbo](../map/interact-with-map.md#rotate-map-by-bearing)) a otro modo.
- Ajusta la configuración adicional en *Menú → Ajustes → Perfiles de la aplicación → Apariencia del perfil → Opciones*.
- Obtén más información sobre el rumbo y el seguimiento de la dirección en la sección [Widget de rumbo](../widgets/nav-widgets#bearing-widget).


## Personalización de la interfaz de usuario {#ui-customization}

<InfoAndroidOnly />

:::note Para complementos no utilizados
Para ocultar todos los parámetros de control de los [complementos](../plugins/index.md#configure-plugin) no utilizados, desactívalos.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)

Con la función de personalización de la interfaz de usuario, puedes ajustar el número de elementos en acciones como [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android), [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) y [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md). La información sobre el número de elementos añadidos de todos los elementos posibles se puede encontrar debajo del título de cada función.


### Cajón {#drawer}

![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)

- **Elementos principales visibles** - En la sección *Personalizar UI*, puedes *reordenar, ocultar y restaurar* elementos del [Cajón](../start-with/main-menu.md#customize-advanced-use-of-android) para que coincidan con tus preferencias.

- **<Translate android="true" ids="reset_to_default"/>** - Restaura la *lista original de elementos* en el cajón, deshaciendo instantáneamente cualquier personalización.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Te permite copiar el *diseño del cajón* de otro perfil de OsmAnd para mantener una configuración consistente en todos los perfiles.

### Configuración del mapa {#configuring-the-map}

![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Menú de configuración del mapa** - En la sección *Personalizar UI*, puedes *reordenar u ocultar elementos* del [menú de configuración del mapa](../map/configure-map-menu.md), lo que permite un acceso rápido a la configuración de uso frecuente.

- **<Translate android="true" ids="reset_to_default"/>** - Restaura la *lista de elementos original* en el menú de configuración del mapa, eliminando cualquier cambio.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Copia el *diseño del menú de configuración del mapa* de otro perfil de OsmAnd.


### Acciones del menú contextual {#context-menu-actions}

![Profile Context menu Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)  ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Menú contextual del mapa** - En la sección Personalizar UI, puedes reordenar u ocultar elementos en el [menú contextual del mapa](../map/map-context-menu.md) para optimizar el acceso a las funciones de uso frecuente.

- **<Translate android="true" ids="reset_to_default"/>** – Restaura la *lista de elementos predeterminada* en el menú contextual del mapa, revirtiendo instantáneamente cualquier modificación.

- **<Translate android="true" ids="copy_from_other_profile"/>** – Copia la *disposición del menú contextual* de otro perfil de OsmAnd para mantener la coherencia entre los diferentes perfiles.


## Ajustes de complementos {#plugin-settings}

:::caution Acceso a la configuración del complemento
Para acceder a la configuración del complemento, primero debes [**habilitar el complemento**](../plugins/index.md#enable--disable) en la *sección de complementos del menú principal*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*  

![Profile Settings Plugins Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Profile Settings Plugins iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

Los complementos desbloquean funciones adicionales de la aplicación y pueden ser [de pago o gratuitos](../plugins/index.md#purchase). Algunos complementos tienen sus propios [ajustes](../plugins/index.md#plugin-settings), otros no. OsmAnd te da la posibilidad de configurar los complementos para cada perfil por separado.


- **Grabación de viajes**. Este elemento abre los [ajustes de grabación de viajes](../plugins/trip-recording.md#recording-settings) para el perfil seleccionado, donde puedes elegir cualquier parámetro para grabar tus viajes.

- **Clima**. Las capas interactivas del mapa de [Clima](../plugins/weather.md#weather-settings) te permiten monitorear la temperatura, la presión del aire, la nubosidad, la velocidad del viento y la precipitación en tu ciudad o en cualquier otra ubicación en un mapa global.

- **Notas de audio/video** (*Solo Android*). Este elemento abre los [ajustes del complemento de audio/video](../plugins/audio-video-notes.md#plugin-settings) para el perfil seleccionado. El complemento *Notas de audio/video* amplía la funcionalidad de OsmAnd al permitirte crear tus notas en varios formatos, como foto, video o audio, y asociarlas con una ubicación geográfica o la ubicación actual.

- **Edición de OpenStreetMap**. Este elemento abre los [ajustes del complemento de edición de OpenStreetMap](../plugins/osm-editing.md#settings) para el perfil seleccionado. Con OsmAnd y el complemento de edición de OSM, puedes contribuir a OpenStreetMap.org creando o modificando POI, añadiendo o comentando notas, y subiendo pistas GPX grabadas.

- **Sensores externos**. Al tocar un elemento en la sección *Ajustes del complemento*, se abren los [ajustes de los sensores externos](../plugins/external-sensors.md#sensors-settings) para el perfil seleccionado. El complemento Sensores externos te permite leer y registrar datos de sensores externos inalámbricos y mostrarlos usando widgets en la aplicación OsmAnd.

- **Accesibilidad** (*Solo Android*). Este elemento abre los [ajustes del complemento de Accesibilidad](../plugins/accessibility.md#plugin-settings) para el perfil seleccionado. Los ajustes del complemento de Accesibilidad te permiten personalizar la aplicación según tus necesidades. Todos los ajustes se relacionan con el proceso de navegación y se configuran individualmente para cada perfil.

- **Desarrollo de OsmAnd**. Este menú abre los [ajustes del complemento de desarrollo de OsmAnd](../plugins/development.md#plugin-settings), donde puedes configurar la aplicación OsmAnd para fines de prueba o explorar las próximas funciones. Estos ajustes están destinados a desarrolladores y no son necesarios para el uso normal de la aplicación.

  > ***Cambiar la configuración del complemento de desarrollo de OsmAnd afecta a todos los perfiles.***

- **Wikipedia**. Este menú abre los *[ajustes del complemento de Wikipedia](../plugins/wikipedia.md#wikipedia-settings)*. Puedes seleccionar el idioma en el que se mostrarán los artículos y elegir si deseas descargar imágenes de Wikipedia. Tener Wikipedia en tu viaje mejora tu experiencia al proporcionar información sobre los lugares que visitas. Funciona sin conexión y muestra artículos relevantes de Wikipedia directamente en el mapa relacionados con puntos de interés.


## Acciones {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)

</TabItem>

</Tabs>

Acciones con el perfil seleccionado:

- [Exportar perfil](https://osmand.net/docs/user/personal/import-export#export) - Exporta todos los ajustes del perfil seleccionado en formato OSF.

- **Copiar de otro perfil** - Copia todos los ajustes de otro perfil existente en tu aplicación OsmAnd.

- **Restablecer a valores predeterminados** - Devuelve todos los ajustes al estado inicial.

- **Eliminar perfil**:
    - Esta acción solo está disponible para *Android* y solo para un *perfil personalizado*.
    - Los perfiles predeterminados no se pueden eliminar.
    - Para añadir un perfil, ve a *Menú → Ajustes → Perfiles de la aplicación → + Nuevo perfil*.


## Artículos relacionados {#related-articles}

- [Gestionar pistas](../personal/tracks/manage-tracks.md#import--export-track)
- [Historial de búsqueda](../search/search-history.md#export-and-share)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)

> *Última actualización: Febrero de 2025*