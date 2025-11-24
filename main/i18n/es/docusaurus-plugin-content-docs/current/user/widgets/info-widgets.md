---
source-hash: d316c6a306b18280040c2135391d01c55aa7a43411c22e487755810c163d4cb6

sidebar_position: 3
title:  Widgets informativos
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

Los widgets informativos le proporcionan un acceso rápido a datos importantes. Pueden ser datos sobre la velocidad, el tiempo, la posición de aparcamiento, datos de sensores externos y mucho más. Los widgets pueden configurarse según sus necesidades específicas, permitiendo su visibilidad en la pantalla de la aplicación o desactivándolos si es necesario.

![Widgets informativos](@site/static/img/widgets/informational_widgets_all.png)


## Widgets de altitud {#altitude-widgets}

Los widgets de altitud muestran la altura sobre el nivel del mar de la geolocalización actual y la elevación del centro del mapa.


### Altitud: Ubicación actual {#altitude-current-location}
  
:::note Descargar corrección de altitud mundial
En algunos dispositivos Android, la altitud puede mostrarse de forma imprecisa. Para resolver este problema, descargue un mapa con corrección de altitud.

- Vaya a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Para más detalles, visite [Mapas y Recursos](../personal/maps-resources.md#downloads-menu).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de altitud Android](@site/static/img/widgets/altitude_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de altitud iOS](@site/static/img/widgets/altitude_widget_ios.png)  

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menú → Ajustes → Perfiles de la aplicación → Ajustes generales → Unidades y formatos → Unidades de longitud* |  


### Elevación: Centro del mapa {#elevation-map-center}

:::info Función de pago
&nbsp;<ProFeature/> Para acceder al uso del widget *Elevación: centro del mapa*, suscríbase a OsmAnd Pro para [Android](../purchases/android.md#pro-features) o [iOS](../purchases/ios.md#pro-features).  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de elevación Android](@site/static/img/widgets/elevation_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de elevación iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

Puede utilizar el widget para conocer la elevación del centro del mapa actual sobre el nivel del mar. Se necesita un [Mapa de terreno (relieve y pendiente)](../plugins/topography.md#download-maps) de la zona requerida para mostrar la información en el **widget Elevación: centro del mapa**.  

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menú → Ajustes → Perfiles de la aplicación → Ajustes generales → Unidades y formatos → Unidades de longitud* |


## Hora actual {#current-time}

![Widget de hora actual](@site/static/img/widgets/current_time_widget.png)

Este widget muestra la hora actual tomada de su dispositivo.  

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_plain_time"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_plain_time"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | Los ajustes del dispositivo configuran la Hora y el Formato. |


## Velocidad actual {#current-speed}

![Widget de velocidad](@site/static/img/widgets/current_speed_widget.png)  

El widget muestra la velocidad actual detectada por el sensor GPS.  

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_current_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_current_speed"/>* |
| Al tocar  | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Velocidad media {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de velocidad media Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de velocidad media iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>  

El widget **Velocidad media** calcula y muestra su velocidad media durante un intervalo de tiempo seleccionado sin necesidad de navegación ni de grabación de la ruta. Es útil para controlar el cumplimiento de la velocidad en autopistas o para seguir la velocidad media durante los últimos minutos de ciclismo.

1. ***Configuración del widget.***  
   Para ajustar la configuración, toque el botón **Ajustes** (*Android*) o el **campo del widget** (*iOS*). Las opciones disponibles incluyen:

2. ***Intervalo de tiempo.***

   - La velocidad media se calcula en función del intervalo de tiempo seleccionado, que puede oscilar entre **15 segundos y 60 minutos**.  

   - El cálculo se basa en los datos del GPS utilizando la fórmula:  
   `Velocidad media = PROMEDIO(GPS_LOCATION.speed)`.

3. ***Tener en cuenta las paradas.***

   **Activado** — Si la velocidad registrada es inferior a 1 unidad por hora, se ignora, evitando caídas innecesarias de la velocidad media al detenerse en semáforos o hacer pausas cortas.  

   **Desactivado** — Las paradas se incluyen en el cálculo, lo que significa que las pausas largas reducirán la velocidad media general.

4. ***Restablecer la velocidad media.***
   Puede restablecer el cálculo de la velocidad media de dos maneras:

   - Mantenga pulsado el widget para abrir el [Menú contextual](../widgets/configure-screen.md#widget-context-menu) y seleccione *Restablecer velocidad media*.
   - Abra los *ajustes del widget* a través del [menú Configurar pantalla](../widgets/configure-screen.md#widget-settings) y seleccione la opción de restablecimiento.

Tras el restablecimiento, la velocidad media se recalcula a partir de los nuevos datos del GPS. Esta función es útil para el control de la velocidad en tiempo real, como el seguimiento de la velocidad en zonas con **cámaras de control de velocidad media**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Velocidad media](@site/static/img/widgets/average_speed_widget_4.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de velocidad media](@site/static/img/widgets/average_speed_widget_ios_1.png)  ![Widgets de velocidad media](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_average_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_average_speed"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu). <br/> Puede utilizarse para restablecer la velocidad media. |


## Ratio de planeo {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Widgets| Widgets en la pantalla|
|:--------|:---------|
|![Ratio de planeo](@site/static/img/widgets/glide_ratio_3.png)|![Ratio de planeo](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widgets| Widgets en la pantalla|
|:--------|:---------|
|![Ratio de planeo](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Ratio de planeo](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>  

Los widgets [simples](../widgets/configure-screen.md#widget-panels) de *Ratio de planeo* proporcionan información valiosa sobre el ratio de planeo para ayudar a tomar decisiones informadas al planificar rutas aéreas. El widget *Ratio de planeo* en OsmAnd le ayuda a evaluar la eficiencia de su descenso o ascenso al navegar a una ubicación específica (posición del [marcador](../personal/markers.md) en el mapa). Calcula el ratio de planeo como la relación entre la distancia y la diferencia de altitud entre su posición actual y su destino previsto. Puede leer más sobre esto [aquí](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).


**Uso de los widgets:**

- *Planificación de vuelos de planeo.* Para los pilotos de planeo, el widget *Ratio de planeo al objetivo* se convierte en una herramienta indispensable a la hora de planificar y ejecutar vuelos de planeo. Los pilotos pueden estimar hasta dónde pueden volar hasta su objetivo dadas las condiciones actuales y el ratio de planeo requerido.
- *Optimizar ascensos y descensos.* El ratio de planeo medio permite a los pilotos optimizar los ascensos y descensos en función de las condiciones actuales. Los pilotos pueden elegir el momento óptimo para los ascensos para maximizar el tiempo de vuelo, o para los descensos para alcanzar un punto objetivo.
- *Reaccionar a las condiciones cambiantes.* El widget proporciona actualizaciones continuas del ratio de planeo, lo que permite a los pilotos reaccionar instantáneamente a los cambios en las condiciones atmosféricas o en las rutas. Pueden ajustar su plan de vuelo para garantizar la seguridad y la eficiencia.
- *Máximo aprovechamiento de la distancia horizontal.* Conocer el ratio de planeo permite a los pilotos maximizar el uso de la distancia horizontal para desplazarse hasta el objetivo, lo que es especialmente importante al planificar vuelos largos.
- *Reducción de riesgos*. El widget *Ratio de planeo al objetivo* ayuda a los pilotos a evitar situaciones en las que alcanzar el objetivo se vuelve imposible debido a un ratio de planeo insuficiente. Esto ayuda a reducir los riesgos y a mejorar la seguridad del vuelo.


**Valores positivos y negativos:**

- **Valores positivos** indican que su destino se encuentra a una altitud inferior a su posición actual, lo que requiere un descenso.
- **Valores negativos** indican que su destino se encuentra a una altitud superior, lo que requiere un ascenso. Por ejemplo, "-90:1" significa que después de recorrer una distancia de 90 kilómetros, necesita ascender 1 kilómetro para alcanzar su destino.


**Redondeo/Formato:**

- Valor **≤ 0.1**:  
  - "0.05" se muestra como "0".
- Valor **> 0.1 y < 100**:  
  - por ejemplo, "50.7643" se muestra como "50.8:1".
- Valor **> 100:**  
  - "102.35" se muestra como "102:1."


### Ratio de planeo al objetivo {#glide-ratio-to-target}

- **Ratio de planeo al objetivo** muestra el ratio de planeo exacto requerido para alcanzar el punto objetivo.
- **Elevación del objetivo** muestra la elevación del punto objetivo. El [Marcador de mapa](../personal/markers.md) debe utilizarse como punto objetivo.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → Ratio de planeo* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → Ratio de planeo* |
| Al tocar | Cambia *Ratio de planeo al objetivo* o *Elevación del objetivo*  |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


### Ratio de planeo medio {#average-glide-ratio}

- **Ratio de planeo medio** muestra el ratio de planeo medio para un intervalo de tiempo especificado.
- **Velocidad vertical media** indica la velocidad a la que un objeto asciende o desciende durante un tiempo. Para la evaluación sólo se consideran el primer y el último punto del intervalo de tiempo. Puede establecer el intervalo de tiempo para este widget de 15 segundos a 60 minutos. Debe utilizar el [Marcador de mapa](../personal/markers.md) como punto objetivo.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → Ratio de planeo* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → Ratio de planeo* |
| Al tocar | Cambia *Ratio de planeo medio* o *Velocidad vertical media*  |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


## Nivel de batería {#battery-level}

![Widget de nivel de batería](@site/static/img/widgets/battery_level_widget.png)  

El widget **Nivel de batería** muestra el porcentaje de batería de su dispositivo directamente en la pantalla del mapa y se actualiza automáticamente al menos una vez por minuto.

- **iOS 17 y posteriores** — Debido a **restricciones de privacidad**, los datos del nivel de batería solo están disponibles en incrementos del 5% (por ejemplo, 35%, 60% u 85%). Se trata de una limitación del sistema impuesta por Apple.

- Dispositivos **Android** — El widget muestra el porcentaje exacto de batería comunicado por el sistema, sin redondeo.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_battery"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_battery"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


## Widget de coordenadas {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de coordenadas Android](@site/static/img/widgets/coordinates_widget_1.png) ![Widget de coordenadas Android](@site/static/img/widgets/coordinates_widget_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de coordenadas iOS](@site/static/img/widgets/coordinates_widget_ios_2.png)  

</TabItem>

</Tabs>

OsmAnd ofrece dos tipos de widgets de coordenadas:

- **Coordenadas: centro del mapa** - muestra las coordenadas geográficas del centro del mapa actual.
- **Coordenadas: ubicación actual** - muestra las coordenadas geográficas de la geolocalización actual.

Los widgets de coordenadas se muestran en la parte superior de la pantalla. Los iconos con fondo verde muestran la latitud y longitud del punto en el centro de la parte visible del mapa, y los que tienen fondo azul muestran las coordenadas de su ubicación actual. La información sobre los *Formatos de coordenadas* admitidos se puede encontrar en el *[artículo de búsqueda de coordenadas](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| Al tocar | Copia las coordenadas en el portapapeles. |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) o <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## Información GPS {#gps-info}

<InfoAndroidOnly />

![Widget de información GPS de Android](@site/static/img/widgets/gps_info_widget.png)

El widget de información del GPS (Sistema de Posicionamiento Global) muestra el número de satélites que el dispositivo está detectando y utilizando actualmente. Puede utilizarlo para comprobar el estado del GPS en caso de mala señal.  

Puede restablecer la caché GPS actual a través de:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.  

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_gps_info"/>* |  
| Al tocar | Abre el menú de estado del GPS con herramientas de terceros para configurar el dispositivo GPS de a bordo. |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


## Posición del sol {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de atardecer y amanecer](@site/static/img/widgets/sun_position.png) ![Widgets de atardecer y amanecer](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de atardecer y amanecer](@site/static/img/widgets/sun_position_4_ios.png) ![Widgets de atardecer y amanecer](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>  

Los widgets de posición del sol muestran las próximas horas de salida y puesta del sol para el centro del mapa. Al tocarlos, muestran el tiempo restante hasta la puesta o salida del sol prevista. En ambos casos, la hora se basa en la hora configurada de su dispositivo.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
| |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| Al tocar | Cambia entre el tiempo restante y la hora de la próxima salida/puesta del sol. |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


## Regla de radio {#radius-ruler}

:::note  
Puede leer una descripción más detallada aquí: **[Regla de radio y Regla](../widgets/radius-ruler)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pantalla de regla de radio](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Regla de radio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Regla de radio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Regla de radio"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

El widget Regla de radio muestra la distancia entre su ubicación y el punto central de la Regla de radio. El radio del primer círculo es igual a [la escala del mapa](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="radius_ruler_item"/>* |
| |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| Al tocar | Cambia el estado del widget entre los modos de escala negra, escala de grises e invisible. |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |


## Velocímetro {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Velocímetro](@site/static/img/widgets/speedometer_1_andr.png)   ![Velocímetro](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Velocímetro](@site/static/img/widgets/speedometer_1_ios.png)   ![Velocímetro](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

El **widget Velocímetro** es una representación gráfica de la velocidad actual del vehículo basada en los *datos recibidos del GPS*. Le permite controlar en tiempo real la correspondencia entre su velocidad y el límite de velocidad permitido. El límite de velocidad permitido lo proporcionan los [datos de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) para un tramo de carretera concreto y el ajuste de [Tolerancia de límite de velocidad](../navigation/guidance/voice-navigation.md#speed-limit) de OsmAnd.  

- En los *Ajustes del velocímetro*, puede seleccionar el tamaño (**Altura**) del widget en la pantalla de la aplicación como *Pequeño*, *Mediano* o *Grande*.
- Puede especificar cuándo recibir una **Advertencia de límite de velocidad,** seleccionando *Siempre* o *Cuando se exceda*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Velocímetro"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Velocímetro"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
|        | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Velocímetro* |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>*  |


## Widgets de complementos {#plugin-widgets}

Estos widgets se activan y funcionan en combinación con sus correspondientes complementos.


### Widgets de grabación de viaje {#trip-recording-widgets}

:::note  
Puede leer una descripción más detallada aquí: **[complemento <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![widget_grabación_viaje](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![widget_grabación_viaje](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

Los widgets de grabación de viaje se refieren al [complemento <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md#widgets). Puede utilizar los widgets para ver en la pantalla información breve sobre la grabación de la ruta. Como *Distancia*, *Duración*, *Ascenso*, *Descenso*, *Velocidad máxima* y *Pendiente media* (los dos últimos solo disponibles en Android).

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_monitoring"/>* |
| |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_monitoring"/>* |
| Al tocar | Inicia/detiene la grabación de la ruta o ve el gráfico. |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widgets de sensores externos {#external-sensors-widgets}

:::note
Para añadir widgets de Sensores Externos a la pantalla del mapa, active el [complemento Sensores externos](../plugins/external-sensors.md) de OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widgets de sensores externos Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de sensores externos iOS](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Los widgets se refieren al [complemento Sensores externos](../plugins/external-sensors.md#widgets). Puede utilizarlos para ver información breve de sus sensores externos, como: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*solo Android*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** y **<Translate android="true" ids="external_device_characteristic_temperature"/>**. También puede seleccionar que el **nivel de batería** de los sensores BLE conectados se muestre directamente en el widget.  

- Para añadir el widget — [active](../plugins/index.md#enable--disable) el complemento Sensores Externos de OsmAnd.

- Para añadir sensores, seleccione una de las opciones:
  - Vaya a *Menú → Complementos → Sensores externos → Ajustes → Emparejar nuevo sensor*.
  - Vaya a *Menú → Configurar pantalla → Elija un panel → Añadir widget → Sensores externos → Elija sensor → Ajustes → Emparejar nuevo sensor*.

- Añada widgets aunque no haya ningún sensor externo conectado.

- **Todos los widgets añadidos son visibles** aunque no haya ningún sensor externo conectado.

- Utilice el [complemento Grabación de viaje](../plugins/trip-recording.md#recording-settings) para registrar los datos de los sensores.

- Lea sobre cómo elegir qué sensor (del mismo tipo) mostrar en el widget [aquí](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| Al tocar | Sin cambios (*Android*) / Cambia el modo entre Datos del sensor y Nivel de batería (*iOS*). |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widgets de métricas del vehículo {#vehicle-metrics-widgets}


:::note
Para añadir Widgets de Métricas del Vehículo a la pantalla del mapa, active el [complemento Métricas del vehículo](../plugins/vehicle-metrics.md) de OsmAnd.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widgets de métricas del vehículo Android](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de métricas del vehículo iOS](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>


Los widgets pertenecen al [complemento Métricas del vehículo](../plugins/vehicle-metrics.md#widgets). Puede utilizarlos para ver información de un escáner OBD-II conectado, como (*14 métricas*): **Temperatura de admisión**,&nbsp; **Temperatura ambiente**,&nbsp; **Temperatura del refrigerante**,&nbsp; **Temperatura del aceite del motor**,&nbsp; **Velocidad del motor** (*gratis*),&nbsp; **Tiempo de funcionamiento del motor**,&nbsp; **Carga calculada del motor**,&nbsp; **Presión del combustible**,&nbsp; **Consumo de combustible**,&nbsp; **Combustible restante**,&nbsp; **Nivel de batería**,&nbsp; **Voltaje del adaptador**,&nbsp; **Velocidad del vehículo** (*gratis*), y **Posición del acelerador**.  

- Para añadir widgets de métricas del vehículo a la pantalla del mapa, [active](../plugins/index.md#enable--disable) el **complemento Métricas del vehículo**.
- Puede añadir widgets aunque no haya ningún escáner OBD-II conectado.
- Todos los widgets añadidos son visibles tanto si hay un escáner OBD-II conectado como si no.
- Para editar un widget, toque el widget añadido al panel, luego toque *Ajustes*, o toque directamente el *icono de Ajustes* en el campo del widget.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget →  <Translate android="true" ids="obd_widget_group"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget →  <Translate ios="true" ids="obd_plugin_name"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widgets del tiempo {#weather-widgets}

:::note
Para añadir widgets del Tiempo a la pantalla del mapa, active el [complemento Tiempo](../plugins/weather.md) de OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget del tiempo Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget del tiempo iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>  

Los widgets del tiempo muestran la información meteorológica actual para un punto central del mapa. Se activan automáticamente en la pantalla cuando se visualizan con el complemento (*Menú → Tiempo*), y puede elegir cuáles poner en la pantalla de inicio para el uso diario (*Menú → Personalizar pantalla*). Puede leer más sobre esto en el artículo [complemento Tiempo](../plugins/weather.md).

- **Temperatura**. <Translate android="true" ids="temperature_widget_desc"/>
- **Presión del aire**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Viento**. <Translate android="true" ids="wind_widget_desc"/>
- **Nube**. <Translate android="true" ids="clouds_widget_desc"/>
- **Precipitación**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="shared_string_weather"/>* |
| |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="shared_string_weather"/>* |  
| Al tocar | Muestra en un cuadro de diálogo emergente la fecha y hora en que la información meteorológica es relevante. |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menú → Complementos → Tiempo → Ajustes* o *Menú → Ajustes → Perfil de la aplicación → Tiempo* |  


### Widget de aparcamiento {#parking-widget}

:::note
Para añadir widgets de Aparcamiento a la pantalla del mapa, active el [complemento Posición de aparcamiento](../plugins/parking.md) de OsmAnd.
:::  

![Widget de aparcamiento](@site/static/img/plugins/parking/parking_widget.png)  

El widget del complemento Aparcamiento muestra la distancia desde el centro de la pantalla hasta la ubicación del aparcamiento. Para establecer una plaza de aparcamiento en el mapa, amplíe hasta el nivel requerido y, a continuación, mantenga pulsado el lugar en el mapa para abrir el menú contextual. Siga [estos ajustes](../plugins/parking.md#set-a-spot).  

**Nota:** El widget de aparcamiento solo aparecerá si se ha añadido una posición de aparcamiento al mapa. Sin una posición de aparcamiento guardada, el widget no será visible.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_parking"/>* |
| |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="parking_place"/>* |
| Al tocar | Mueve la vista del mapa a la posición de aparcamiento. |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Widget de Mapillary {#mapillary-widget}

:::note  
Para añadir el widget de Mapillary a la pantalla del mapa, active el [complemento Mapillary](../plugins/mapillary.md) de OsmAnd.  
:::  

![Widget de Mapillary](@site/static/img/widgets/mapillary_widget.png)

Este es un widget del complemento Mapillary que proporciona acceso rápido a la aplicación Mapillary, que le permite añadir [*imágenes a nivel de calle*](../plugins/mapillary.md#enable-layer). El widget se añade al mapa automáticamente cuando se activa el complemento.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="mapillary"/>* |
| |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="mapillary"/>* |
| Al tocar | Abre la aplicación [Mapillary](https://www.mapillary.com/). |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget de notas de audio/vídeo {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Para añadir widgets de Notas de audio/vídeo a la pantalla del mapa, active el [complemento Notas de audio/vídeo](../plugins/audio-video-notes.md) de OsmAnd.
:::

![Widget de notas de audio y vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

Estos son widgets del complemento Notas de audio/vídeo que proporcionan acceso rápido para iniciar/detener la toma de notas de audio, vídeo o fotos.  

Puede configurar qué acción se selecciona por defecto:

- *A petición*. Estado por defecto. Cada vez se muestra el diálogo de selección de acción.
- *Grabar audio* - graba una nota de audio.
- *Grabar vídeo* - le permite grabar un vídeo.
- *Hacer una foto* - le permite hacer una foto.  

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_av_notes"/>*  |
| Al tocar | Inicia / detiene la toma de una nota  |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget de seguimiento {#tracker-widget}

<InfoAndroidOnly />

:::note
Para añadir el widget de Seguimiento a la pantalla del mapa, active el [complemento OsmAnd Tracker](../plugins/osmand-tracker.md).
:::  

Para que el complemento y el widget funcionen, necesita instalar [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) desde Google Play u otras fuentes.  

Este widget del complemento OsmAnd Tracker se utiliza para acceder rápidamente a la aplicación OsmAnd Tracker y compartir su información de ubicación con otros usuarios. La aplicación envía mensajes de *Ubicación en vivo* a los chats seleccionados dentro de un tiempo determinado, muestra una lista de contactos y grupos, y comprueba los chats en busca de mensajes con su ubicación, que luego se muestran en un mapa en OsmAnd.  

![Widget de seguimiento](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="tracker_item"/>* |
| Al tocar | Abre la aplicación OsmAnd Online GPS Tracker. |


### Widgets de desarrollador {#developer-widgets}

:::note
Para añadir widgets de Desarrollador a la pantalla del mapa, active el [complemento de desarrollo de OsmAnd](../plugins/development.md).
:::

Los **widgets de desarrollador** proporcionan información sobre la [velocidad de renderizado del mapa](../plugins/development.md#map-rendering-fps-widget) y los parámetros de posición de la cámara virtual, incluyendo el [nivel de zoom](../plugins/development.md#zoom-level), la [distancia](../plugins/development.md#distance-to-target) al centro del mapa, la [elevación de la cámara](../plugins/development.md#camera-elevation) y el [ángulo de inclinación](../plugins/development.md#camera-tilt).  

#### FPS de renderizado de mapa {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget FPS Android](@site/static/img/widgets/fps_widgets_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget FPS iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

El [widget de FPS de renderizado de mapa](../plugins/development.md#map-rendering-fps-widget) muestra la velocidad de renderizado del mapa y sus elementos, medida en fotogramas por segundo (FPS). Un valor de FPS más alto indica un renderizado más rápido y un rendimiento visual más fluido.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_rendering_fps"/>* |
| |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


#### Widgets de cámara {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de posición de cámara](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de posición de cámara 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

Los **widgets de cámara** le permiten supervisar la alineación entre el mapa de OsmAnd y la superficie terrestre.

- [Inclinación de la cámara](../plugins/development.md#camera-tilt). Muestra el ángulo de inclinación de la cámara en modo perspectiva. El valor por defecto es 90° (sin inclinación).
- [Elevación de la cámara](../plugins/development.md#camera-elevation). Indica la elevación de la cámara sobre el nivel de la superficie.
- [Nivel de zoom](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Distancia de la cámara al objetivo](../plugins/development.md#distance-to-target). Mide la distancia entre la cámara y la ubicación del objetivo en el mapa.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="developer_widgets"/>* |
| |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="developer_widgets"/>* |
| Al tocar | Cambia entre modos (*Nivel de zoom*)  / Sin cambios (*Otros*) |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


#### RAM disponible {#available-ram}

<InfoAndroidOnly />

![Widget de RAM disponible](@site/static/img/widgets/available_RAM_2_andr.png)

El widget **RAM disponible** es una herramienta para supervisar el uso de la memoria de su dispositivo en relación con OsmAnd. Proporciona datos detallados para ayudar a optimizar el rendimiento de la aplicación.

- **RAM de la aplicación disponible.** Muestra la cantidad de RAM disponible para que OsmAnd la utilice sin causar problemas de rendimiento.

- **Uso de RAM de la aplicación** — Muestra el consumo actual de RAM por parte de OsmAnd.

- **RAM total de la aplicación** — Indica la memoria total asignada a OsmAnd, incluyendo tanto la memoria utilizada como la disponible.

> **NOTA**. *La *RAM total disponible* puede variar dependiendo de los procesos en segundo plano y de otras aplicaciones que se ejecuten en su dispositivo. Estos valores son dinámicos y ofrecen una forma de seguir y gestionar el uso de la memoria para un rendimiento consistente y eficiente de OsmAnd.*

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="developer_widgets"/> → *RAM disponible* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


## Artículos relacionados {#related-articles}

- [Configurar pantalla](./configure-screen.md)
- [Botones del mapa](./map-buttons.md)
- [Widgets de navegación](./nav-widgets.md)
- [Regla de radio y Regla](./radius-ruler.md)
- [Widgets de marcadores](./markers.md)
- [Acción rápida](./quick-action.md)