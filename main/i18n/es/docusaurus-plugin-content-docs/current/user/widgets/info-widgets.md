---
source-hash: 27b32890625cf93a03c736a3e9e5b69340ef24cbdda764258f58f7265e15c755
sidebar_position: 3
title: Widgets informativos
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

Los widgets informativos le brindan acceso rápido a datos importantes. Esto puede ser datos sobre velocidad, clima, posición de estacionamiento, datos de sensores externos y mucho más. Los widgets se pueden configurar de acuerdo con sus requisitos específicos, lo que permite su visibilidad en la pantalla de la aplicación o los desactiva si es necesario.

![Widgets informativos](@site/static/img/widgets/informational_widgets_all.png)

## Widgets de altitud {#altitude-widgets}

Los widgets de altitud muestran la altura sobre el nivel del mar de la geolocalización actual y la elevación del centro del mapa.

### Altitud: Ubicación actual {#altitude-current-location}

:::note Descargar corrección de altitud mundial
En algunos dispositivos Android, la altitud puede mostrarse de forma imprecisa. Para resolver este problema, descargue un mapa con corrección de altitud.

- Vaya a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Para obtener más detalles, visite [Mapas y recursos](../personal/maps-resources.md#downloads).
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
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menú → Ajustes → Perfiles de aplicación → Ajustes generales → Unidades y formatos → Unidades de longitud* |

### Elevación: Centro del mapa {#elevation-map-center}

:::info Función de pago
&nbsp;<ProFeature/> Para acceder al widget *Elevación: centro del mapa*, suscríbase a OsmAnd Pro para [Android](../purchases/android.md#pro-features) o [iOS](../purchases/ios.md#pro-features).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de elevación Android](@site/static/img/widgets/elevation_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de elevación iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

Puede usar el widget para averiguar la elevación del centro del mapa actual sobre el nivel del mar. Se necesita un [mapa de terreno (sombreado y pendiente)](../plugins/topography.md#download-maps) del área requerida para mostrar información en el **widget Elevación: centro del mapa**.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menú → Ajustes → Perfiles de aplicación → Ajustes generales → Unidades y formatos → Unidades de longitud* |

## Hora actual {#current-time}

![Widget de hora actual](@site/static/img/widgets/current_time_widget.png)

Este widget muestra la hora actual tomada de su dispositivo.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_plain_time"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="map_widget_plain_time"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | La configuración del dispositivo configura Hora y formato. |

## Velocidad actual {#current-speed}

![Widget de velocidad](@site/static/img/widgets/current_speed_widget.png)

El widget muestra la velocidad actual detectada por el sensor GPS.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_current_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="map_widget_current_speed"/>* |
| Al tocar | Sin cambios |
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

El widget **Velocidad media** calcula y muestra su velocidad media durante un intervalo de tiempo seleccionado sin necesidad de navegación o grabación de rutas. Es útil para controlar el cumplimiento de la velocidad en autopistas o para registrar la velocidad media durante los últimos minutos de ciclismo.

1. ***Configuración del widget.***
   Para ajustar la configuración, toque el botón **Configuración** (*Android*) o el **campo del widget** (*iOS*). Las opciones disponibles incluyen:

2. ***Intervalo de tiempo.***

   - La velocidad media se calcula en función del intervalo de tiempo seleccionado, que puede oscilar entre **15 segundos y 60 minutos**.

   - El cálculo se basa en datos GPS utilizando la fórmula:
   `Velocidad media = MEDIA(GPS_UBICACIÓN.velocidad)`.

3. ***Tener en cuenta las paradas.***

   **Habilitado** — Si la velocidad registrada es inferior a 1 unidad por hora, se ignora, lo que evita caídas innecesarias en la velocidad media al detenerse en semáforos o tomar descansos cortos.

   **Deshabilitado** — Las paradas se incluyen en el cálculo, lo que significa que las pausas largas reducirán la velocidad media general.

4. ***Restablecer velocidad media.***
   Puede restablecer el cálculo de la velocidad media de dos maneras:

   - Mantenga pulsado el widget para abrir el [Menú contextual](../widgets/configure-screen.md#widget-context-menu) y seleccione *Restablecer velocidad media*.
   - Abra la *configuración del widget* a través del [Menú Configurar pantalla](../widgets/configure-screen.md#settings) y seleccione la opción de restablecimiento.

Después de restablecer, la velocidad media se recalcula a partir de los nuevos datos GPS. Esta función es útil para la monitorización de la velocidad en tiempo real, como el seguimiento de la velocidad en áreas con **cámaras de control de velocidad media**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Velocidad media](@site/static/img/widgets/average_speed_widget_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de velocidad media](@site/static/img/widgets/average_speed_widget_ios_1.png) ![Widgets de velocidad media](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_average_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="map_widget_average_speed"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu). <br/> Se puede usar para restablecer la velocidad media. |

## Relación de planeo {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Widgets| Widgets en pantalla|
|:--------|:---------|
|![Relación de planeo](@site/static/img/widgets/glide_ratio_3.png)|![Relación de planeo](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widgets| Widgets en pantalla|
|:--------|:---------|
|![Relación de planeo](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Relación de planeo](@site/static/img/widgets/glide_ratio_widget_ios.png)|

</TabItem>

</Tabs>

El widget [simple](../widgets/configure-screen.md#widgets-for-all-panels) *Relación de planeo* proporciona información valiosa sobre la relación de planeo para ayudar a tomar decisiones informadas al planificar rutas aéreas. El widget *Relación de planeo* en OsmAnd le ayuda a evaluar la eficiencia de su descenso o ascenso al navegar a una ubicación específica (posición del [marcador](../personal/markers.md) en el mapa). Calcula la relación de planeo como la relación entre la distancia y la diferencia de altitud entre su posición actual y su destino previsto. Puede leer más sobre esto [aquí](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).

**Uso de widgets:**

- *Planificación de vuelos de planeo.* Para los pilotos de planeo, el widget *Relación de planeo al objetivo* se convierte en una herramienta indispensable al planificar y ejecutar vuelos de planeo. Los pilotos pueden estimar qué tan lejos pueden volar a su objetivo dadas las condiciones actuales y la relación de planeo requerida.
- *Optimizar ascensos y descensos.* La relación de planeo media permite a los pilotos optimizar ascensos y descensos en función de las condiciones actuales. Los pilotos pueden elegir el momento óptimo para los ascensos para maximizar el tiempo de vuelo, o para los descensos para alcanzar un punto objetivo.
- *Reacción a condiciones cambiantes.* El widget proporciona actualizaciones continuas de la relación de planeo, lo que permite a los pilotos reaccionar instantáneamente a los cambios en las condiciones atmosféricas o las rutas. Pueden ajustar su plan de vuelo para garantizar la seguridad y la eficiencia.
- *Máximo uso de la distancia horizontal.* Conocer la relación de planeo permite a los pilotos maximizar el uso de la distancia horizontal para moverse hacia el objetivo, lo cual es especialmente importante al planificar vuelos largos.
- *Reducción de riesgos*. El widget *Relación de planeo al objetivo* ayuda a los pilotos a evitar situaciones en las que alcanzar el objetivo se vuelve imposible debido a una relación de planeo insuficiente. Esto ayuda a reducir los riesgos y mejorar la seguridad del vuelo.

**Valores positivos y negativos:**

- Los **valores positivos** indican que su destino está a una altitud inferior a su posición actual, lo que requiere un descenso.
- Los **valores negativos** indican que su destino está a una altitud superior, lo que requiere un ascenso. Por ejemplo, "-90:1" significa que después de recorrer una distancia de 90 kilómetros, debe ascender 1 kilómetro para llegar a su destino.

**Redondeo/Formato:**

- Valor **≤ 0.1**:
  - "0.05" se muestra como "0".
- Valor **> 0.1 y < 100**:
  - por ejemplo, "50.7643" se muestra como "50.8:1".
- Valor **> 100:**
  - "102.35" se muestra como "102:1."

### Relación de planeo al objetivo {#glide-ratio-to-target}

- La **relación de planeo al objetivo** muestra la relación de planeo exacta necesaria para alcanzar el punto objetivo.
- La **elevación del objetivo** muestra la elevación del punto objetivo. El [marcador del mapa](../personal/markers.md) debe usarse como punto objetivo.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → Relación de planeo* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → Relación de planeo* |
| Al tocar | Cambia *Relación de planeo al objetivo* o *Elevación del objetivo* |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

### Relación de planeo media {#average-glide-ratio}

- La **relación de planeo media** muestra la relación de planeo media para un intervalo de tiempo especificado.
- La **velocidad vertical media** indica la velocidad a la que un objeto asciende o desciende durante un tiempo. Solo se consideran el primer y el último punto del intervalo de tiempo para la evaluación. Puede establecer el intervalo de tiempo para este widget de 15 segundos a 60 minutos. Debe usar el [marcador del mapa](../personal/markers.md) como punto objetivo.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → Relación de planeo* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → Relación de planeo* |
| Al tocar | Cambia *Relación de planeo media* o *Velocidad vertical media* |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

## Nivel de batería {#battery-level}

![Widget de nivel de batería](@site/static/img/widgets/battery_level_widget.png)

El widget **Nivel de batería** muestra el porcentaje de batería de su dispositivo directamente en la pantalla del mapa y se actualiza automáticamente al menos una vez por minuto.

- **iOS 17 y posteriores** — Debido a las **restricciones de privacidad**, los datos del nivel de batería solo están disponibles en incrementos del 5% (por ejemplo, 35%, 60% u 85%). Esta es una limitación del sistema impuesta por Apple.

- Dispositivos **Android** — El widget muestra el porcentaje exacto de batería según lo informado por el sistema, sin redondeo.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_battery"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="map_widget_battery"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

## Widget de coordenadas {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de coordenadas Android](@site/static/img/widgets/coordinates_widget_1.png) ![Widget de coordenadas Android](@site/static/img/widgets/coordinates_widget_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de coordenadas Android](@site/static/img/widgets/coordinates_widget_ios_2.png)

</TabItem>

</Tabs>

OsmAnd ofrece dos tipos de widgets de coordenadas:

- **Coordenadas: centro del mapa** - muestra las coordenadas geográficas del centro del mapa actual.
- **Coordenadas: ubicación actual** - muestra las coordenadas geográficas de la geolocalización actual.

Los widgets de coordenadas se muestran en la parte superior de la pantalla. Los iconos con fondo verde muestran la latitud y longitud del punto en el centro de la parte visible del mapa, y los de fondo azul muestran las coordenadas de su ubicación actual. Puede encontrar información sobre los *formatos de coordenadas* admitidos en el artículo *[Buscar coordenadas](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| Al tocar | Copia las coordenadas al portapapeles. |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) o <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |

## Información GPS {#gps-info}

<InfoAndroidOnly />

![Widget de información GPS Android](@site/static/img/widgets/gps_info_widget.png)

El widget de información GPS (Sistema de Posicionamiento Global) muestra el número de satélites que el dispositivo está detectando y utilizando actualmente. Puede usarlo para verificar el estado del GPS en caso de una señal deficiente.

Puede restablecer la caché GPS actual a través de:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_gps_info"/>* |
| Al tocar | Abre el menú de estado del GPS con herramientas de terceros para configurar el dispositivo GPS integrado. |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

## Posición del sol {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de puesta y salida del sol](@site/static/img/widgets/sun_position.png) ![Widgets de puesta y salida del sol](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de puesta y salida del sol](@site/static/img/widgets/sun_position_4_ios.png) ![Widgets de puesta y salida del sol](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>

Los widgets de posición del sol muestran las próximas horas de salida y puesta del sol para el centro del mapa. Al tocarlos, muestran el tiempo restante hasta la puesta o salida del sol esperada. En ambos casos, la hora se basa en la hora configurada de su dispositivo.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| Al tocar | Cambiar entre el tiempo restante y la hora de la próxima salida/puesta del sol. |
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
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="radius_ruler_item"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| Al tocar | Cambia el estado del widget entre los modos de escala negra, escala de grises e invisible. |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

## Velocímetro {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Velocímetro](@site/static/img/widgets/speedometer_1_andr.png) ![Velocímetro](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Velocímetro](@site/static/img/widgets/speedometer_1_ios.png) ![Velocímetro](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

El **widget Velocímetro** es una pantalla gráfica de la velocidad actual del vehículo basada en *datos recibidos del GPS*. Le permite monitorear en tiempo real la conformidad entre su velocidad y el límite de velocidad permitido. El límite de velocidad permitido es proporcionado por [datos de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) para una sección de carretera en particular y la configuración de [Tolerancia de límite de velocidad](../navigation/guidance/voice-navigation.md#speed-limit) de OsmAnd.

- En la *configuración del velocímetro*, puede seleccionar el tamaño (**Altura**) del widget en la pantalla de la aplicación como *Pequeño*, *Mediano* o *Grande*.
- Puede especificar cuándo recibir una **advertencia de límite de velocidad**, seleccionando *Siempre* o *Cuando se excede*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Velocímetro"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Velocímetro"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Velocímetro* |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>* |

## Widgets de complementos {#plugin-widgets}

Estos widgets se habilitan y funcionan en combinación con sus complementos correspondientes.

### Widgets de grabación de viaje {#trip-recording-widgets}

:::note
Puede leer una descripción más detallada aquí: **[Complemento <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![widget_grabacion_viaje](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![widget_grabacion_viaje](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

Los widgets de grabación de viaje se refieren al [complemento <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md#widgets). Puede usar los widgets para ver información breve sobre la grabación de la ruta en la pantalla. Como *Distancia*, *Duración*, *Ascenso* y *Descenso*.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_monitoring"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_monitoring"/>* |
| Al tocar | Inicia/detiene la grabación de la ruta o muestra el gráfico. |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

### Widgets de sensores externos {#external-sensors-widgets}

:::note
Para añadir widgets de sensores externos a la pantalla del mapa, habilite el complemento [Sensores externos](../plugins/external-sensors.md) de OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de sensores externos Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![widget_grabacion_viaje](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Los widgets se refieren al [complemento de Sensores externos](../plugins/external-sensors.md#widgets). Puede usarlos para ver información breve de sus sensores externos, como: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*solo Android*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** y **<Translate android="true" ids="external_device_characteristic_temperature"/>**. *En iOS*, también puede seleccionar que el **nivel de batería** de los sensores BLE conectados se muestre directamente en el widget.

- Para añadir el widget, [habilite](../plugins/index.md#enable--disable) el complemento de Sensores externos de OsmAnd.

- Para añadir sensores, seleccione una de las opciones:
  - Vaya a *Menú → Complementos → Sensores externos → Ajustes → Emparejar nuevo sensor*.
  - Vaya a *Menú → Configurar pantalla → Elegir un panel → Añadir widget → Sensores externos → Elegir sensor → Ajustes → Emparejar nuevo sensor*.

- Añada widgets incluso si no hay ningún sensor externo conectado.

- **Todos los widgets añadidos son visibles** incluso si no hay ningún sensor externo conectado.

- Use el [complemento de grabación de viaje](../plugins/trip-recording.md#recording-settings) para grabar datos del sensor.

- Lea cómo elegir qué sensor (del mismo tipo) mostrar en el widget [aquí](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| Al tocar | Sin cambios (*Android*) / Cambia el modo entre datos del sensor y nivel de batería (*iOS*). |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

### Widgets de métricas del vehículo {#vehicle-metrics-widgets}

:::note
Para añadir widgets de métricas del vehículo a la pantalla del mapa, habilite el complemento [Métricas del vehículo](../plugins/vehicle-metrics.md) de OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de métricas del vehículo Android](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de métricas del vehículo Android](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>

Los widgets pertenecen al [complemento de Métricas del vehículo](../plugins/vehicle-metrics.md#widgets). Puede usarlos para ver información de un escáner OBD-II conectado, como (*13 métricas*): **Temperatura de admisión**, **Temperatura ambiente**, **Temperatura del refrigerante**, **Temperatura del aceite del motor**, **Velocidad del motor** (*gratis*), **Tiempo de funcionamiento del motor**, **Carga calculada del motor**, **Presión del combustible**, **Consumo de combustible**, **Combustible restante**, **Nivel de batería**, **Velocidad del vehículo** (*gratis*) y **Posición del acelerador**.

- Para añadir widgets de métricas del vehículo a la pantalla del mapa, [habilite](../plugins/index.md#enable--disable) el **complemento de Métricas del vehículo**.
- Puede añadir widgets incluso si no hay un escáner OBD-II conectado.
- Todos los widgets añadidos son visibles, esté o no conectado un escáner OBD-II.
- Para editar un widget, toque el widget añadido al panel, luego toque *Ajustes*, o toque directamente el *icono de Ajustes* en el campo del widget.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="obd_widget_group"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="obd_plugin_name"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

### Widgets del tiempo {#weather-widgets}

:::note
Para añadir widgets del tiempo a la pantalla del mapa, habilite el complemento [Tiempo](../plugins/weather.md) de OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget del tiempo Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget del tiempo iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>

Los widgets del tiempo muestran información meteorológica actual para un punto central en el mapa. Se habilitan automáticamente en la pantalla cuando se ven con el complemento (*Menú → Tiempo*), y puede elegir cuáles colocar en la pantalla de inicio para uso diario (*Menú → Personalizar pantalla*). Puede leer más sobre esto en el artículo [Complemento del tiempo](../plugins/weather.md).

- **Temperatura**. <Translate android="true" ids="temperature_widget_desc"/>
- **Presión del aire**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Viento**. <Translate android="true" ids="wind_widget_desc"/>
- **Nubes**. <Translate android="true" ids="clouds_widget_desc"/>
- **Precipitación**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="shared_string_weather"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="shared_string_weather"/>* |
| Al tocar | Muestra en un cuadro de diálogo emergente la fecha y la hora en que la información meteorológica es relevante. |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menú → Complementos → Tiempo → Ajustes* o *Menú → Ajustes → Perfil de aplicación → Tiempo* |

### Widget de estacionamiento {#parking-widget}

:::note
Para añadir widgets de estacionamiento a la pantalla del mapa, habilite el complemento [Posición de estacionamiento](../plugins/parking.md) de OsmAnd.
:::

![Widget de estacionamiento](@site/static/img/plugins/parking/parking_widget.png)

El widget del complemento de estacionamiento muestra la distancia desde el centro de la pantalla hasta la ubicación de estacionamiento. Para establecer un lugar de estacionamiento en el mapa, acerque el zoom al nivel requerido, luego mantenga presionado el lugar en el mapa para abrir el menú contextual. Siga [estas configuraciones](../plugins/parking.md#set-a-spot).

**Nota:** El widget de estacionamiento solo aparecerá si se ha añadido una posición de estacionamiento al mapa. Sin una posición de estacionamiento guardada, el widget no será visible.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_parking"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="parking_place"/>* |
| Al tocar | Mueve la vista del mapa a la posición de estacionamiento. |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |

### Widget de Mapillary {#mapillary-widget}

:::note
Para añadir el widget de Mapillary a la pantalla del mapa, habilite el complemento [Mapillary](../plugins/mapillary.md) de OsmAnd.
:::

![Widget de Mapillary](@site/static/img/widgets/mapillary_widget.png)

Este es un widget del complemento de Mapillary que proporciona acceso rápido a la aplicación Mapillary, lo que le permite añadir [*imágenes a nivel de calle*](../plugins/mapillary.md#enable-layer). El widget se añade al mapa automáticamente cuando se habilita el complemento.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="mapillary"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="mapillary"/>* |
| Al tocar | Abre la aplicación [Mapillary](https://www.mapillary.com/). |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

### Widget de notas de audio/vídeo {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Para añadir widgets de notas de audio/vídeo a la pantalla del mapa, habilite el complemento [Notas de audio/vídeo](../plugins/audio-video-notes.md) de OsmAnd.
:::

![Widget de notas de audio-vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

Estos son widgets del complemento de notas de audio/vídeo que proporcionan acceso rápido para iniciar/detener la toma de notas de audio, vídeo o fotos.

Puede configurar qué acción se selecciona por defecto:

- *A petición*. Estado predeterminado. Cada vez se muestra el diálogo de selección de acción.
- *Grabar audio* - graba una nota de audio.
- *Grabar vídeo* - le permite grabar un vídeo.
- *Tomar una foto* - le permite tomar una foto.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_av_notes"/>* |
| Al tocar | Inicia/detiene la toma de una nota |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

### Widget de seguimiento {#tracker-widget}

<InfoAndroidOnly />

:::note
Para añadir el widget de seguimiento a la pantalla del mapa, habilite el complemento [Seguimiento de OsmAnd](../plugins/osmand-tracker.md).
:::

Para que el complemento y el widget funcionen, debe instalar [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) desde Google Play u otras fuentes.

Este widget del complemento OsmAnd Tracker se utiliza para acceder rápidamente a la aplicación OsmAnd Tracker y compartir su información de ubicación con otros usuarios. La aplicación envía mensajes de *Ubicación en vivo* a los chats seleccionados dentro de un cierto tiempo, muestra una lista de contactos y grupos, y verifica los chats en busca de mensajes con su ubicación, que luego se muestran en un mapa en OsmAnd.

![Widget de seguimiento](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="tracker_item"/>* |
| Al tocar | Abre la aplicación OsmAnd Online GPS Tracker. |

### Widgets de desarrollador {#developer-widgets}

:::note
Para añadir widgets de desarrollador a la pantalla del mapa, habilite el complemento [Desarrollo de OsmAnd](../plugins/development.md).
:::

Los **widgets de desarrollador** proporcionan información sobre la [velocidad de renderizado](../plugins/development.md#map-rendering-fps-widget) del mapa y los parámetros de posición de la cámara virtual, incluyendo el [nivel de zoom](../plugins/development.md#zoom-level), la [distancia](../plugins/development.md#distance-to-target) al centro del mapa, la [elevación de la cámara](../plugins/development.md#camera-elevation) y el [ángulo de inclinación](../plugins/development.md#camera-tilt).

#### FPS de renderizado del mapa {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de FPS Android](@site/static/img/widgets/fps_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de FPS iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

El [widget de FPS de renderizado del mapa](../plugins/development.md#map-rendering-fps-widget) muestra la velocidad de renderizado del mapa y sus elementos, medida en fotogramas por segundo (FPS). Un valor de FPS más alto indica un renderizado más rápido y un rendimiento visual más fluido.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_rendering_fps"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

#### Widgets de cámara {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de posición de la cámara](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de posición de la cámara 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

Los **widgets de cámara** le permiten monitorear la alineación entre el mapa de OsmAnd y la superficie terrestre.

- [Inclinación de la cámara](../plugins/development.md#camera-tilt). Muestra el ángulo de inclinación de la cámara en modo perspectiva. El valor predeterminado es 90° (sin inclinación).
- [Elevación de la cámara](../plugins/development.md#camera-elevation). Indica la elevación de la cámara sobre el nivel de la superficie.
- [Nivel de zoom](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Distancia de la cámara al objetivo](../plugins/development.md#distance-to-target). Mide la distancia entre la cámara y la ubicación objetivo en el mapa.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="developer_widgets"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="developer_widgets"/>* |
| Al tocar | Cambiar entre modos (*Nivel de zoom*) / Sin cambios (*Otros*) |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

#### RAM disponible {#available-ram}

<InfoAndroidOnly />

![Widgets de velocidad media](@site/static/img/widgets/available_RAM_2_andr.png)

El widget **RAM disponible** es una herramienta para monitorear el uso de la memoria de su dispositivo en relación con OsmAnd. Proporciona datos detallados para ayudar a optimizar el rendimiento de la aplicación.

- **RAM disponible de la aplicación.** Muestra la cantidad de RAM disponible para que OsmAnd la use sin causar problemas de rendimiento.

- **Uso de RAM de la aplicación** — Muestra el consumo actual de RAM por parte de OsmAnd.

- **RAM total de la aplicación** — Indica la memoria total asignada a OsmAnd, incluyendo la memoria utilizada y disponible.

> **NOTA**. *La *RAM total disponible* puede variar según los procesos en segundo plano y otras aplicaciones que se ejecuten en su dispositivo. Estos valores son dinámicos y ofrecen una forma de rastrear y administrar el uso de la memoria para un rendimiento constante y eficiente de OsmAnd.*

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="developer_widgets"/> → *RAM disponible* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [Menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

## Artículos relacionados {#related-articles}

- [Configurar pantalla](./configure-screen.md)
- [Botones del mapa](./map-buttons.md)
- [Widgets de navegación](./nav-widgets.md)
- [Regla de radio y Regla](./radius-ruler.md)
- [Widgets de marcador](./markers.md)
- [Acción rápida](./quick-action.md)

> *Última actualización: abril de 2025*