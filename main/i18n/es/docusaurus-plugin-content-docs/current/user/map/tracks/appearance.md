---
source-hash: 03b2d3f6e375b05230f448cf1908a173e0c48d07ed9e09a8337b5c05c7d6208d
sidebar_position: 5
title:  Apariencia de la pista
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

La función **Apariencia de la pista** permite a los usuarios personalizar cómo se muestran las pistas en el mapa. Esto incluye ajustar el color, el ancho, los indicadores de dirección y otros elementos visuales. Personalizar la apariencia de la pista ayuda a diferenciar múltiples pistas, resaltar rutas específicas y mejorar la legibilidad del mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Resumen de Apariencia de la pista Android](@site/static/img/map/track-appear-and-1.png)  ![Menú de pista Apariencia Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de pista Apariencia iOS](@site/static/img/map/track_appearence_1_ios.png) ![Menú de pista Apariencia iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Acceso al menú {#access-to-the-menu}

Puede modificar la apariencia de la pista utilizando uno de los siguientes métodos:

- **Desde Mis Lugares**. Abra *Menú → Mis Lugares → Pistas*, seleccione una pista, toque el *icono de Apariencia* en el [menú contextual de la pista](../../map/tracks/track-context-menu.md#overview).
- **Desde el mapa**. Toque una pista directamente en el mapa, luego toque el *icono de Apariencia* en la sección *Resumen*.
- **Desde la grabación de la pista**. Modifique la apariencia de la pista que se está grabando actualmente a través del [menú contextual de grabación de pista](../../plugins/trip-recording.md#current-track-recording).  
- **Desde el menú Configurar mapa**. Vaya a *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* para las pistas mostradas.


## Ajustes de apariencia de la pista {#track-appearance-settings}

### Color {#color}

:::tip purchases
Algunos ajustes solo se pueden usar con *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> e <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Funciones gratuitas y de pago.
:::

![Apariencia](@site/static/img/map/appearance_color_andr.png) ![Menú contextual de coloreado iOS](@site/static/img/map/colorisation_ios.png)

Puede establecer el color de la pista manualmente o usar la **visualización de datos basada en colores** (p. ej., velocidad, altitud, pendiente). Si una pista carece de ciertos datos, OsmAnd muestra las secciones faltantes en gris.

**Opciones de color disponibles:**

- **Ajustes gratuitos**: color *<Translate android="true" ids="track_coloring_solid"/>*, *<Translate android="true" ids="shared_string_speed"/>* (si se grabó) y *<Translate android="true" ids="altitude"/>* (si se grabó).   
- [Función Pro](../../purchases/index.md): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

En iOS, la lista de **Coloreado** se abre como un menú contextual. Los elementos pueden aparecer en tres estados: 
1. <Translate ios="true" ids="shared_string_enabled"/>. Se puede aplicar a la pista actual.
2. <Translate ios="true" ids="weather_update_disabled"/>. A la pista le faltan los datos requeridos.
3. PRO. Disponible para la pista actual pero requiere una suscripción; al tocar se abre la pantalla [<Translate ios="true" ids="purchase_dialog_title"/>](https://osmand.net/docs/user/purchases/ios).

Para más detalles sobre la personalización de la apariencia de la línea de ruta, consulte [Pantalla de mapa durante la navegación](../../navigation/guidance/map-during-navigation.md#color) y sobre la selección y creación de un color personalizado, consulte [Esquemas de color](../../personal/color-palette-schemes.md#routes).


### Ancho {#width}

![Menú de pista Apariencia Grosor de pista Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Apariencia de la pista](@site/static/img/map/track_appearance_width_andr.png)  

Puede personalizar la apariencia de la pista en varios menús de la aplicación:

- [*Pista → Apariencia*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Ajustes de navegación → Personalizar línea de ruta*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Mis lugares → Pestaña Pistas → cualquier carpeta → Apariencia predeterminada*](../../personal/tracks/manage-tracks.md#track-folder).

Ajuste el ancho de la pista para mejorar la visibilidad en el mapa.

- **Opciones preestablecidas**: **Fino, Medio,** y **Grueso**.

- **Ancho personalizado**: Ajustable de 1 a 24 px usando un deslizador.

- **Ancho basado en el perfil**: Se puede establecer a través de *Ajustes de navegación → [Personalizar línea de ruta](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Intervalo de división {#split-interval}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de pista Apariencia Intervalo de división Android](@site/static/img/map/split_interval_android.png)  ![Intervalo de división Android](@site/static/img/map/split_interval_2_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Menú de pista Apariencia Intervalo de división](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Intervalo de división](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

</TabItem>

</Tabs>

Seleccione si desea dividir la pista en intervalos por **distancia**, **tiempo**, o **subida/bajada** (Android), o por **distancia** o **tiempo** (iOS). Para ver estadísticas detalladas por intervalo, consulte [Analizar por intervalos](../../map/tracks/track-context-menu.md#analyze-by-intervals) (solo Android).


### Flechas de dirección {#direction-arrows}

![Menú de pista Apariencia flechas de dirección Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Añade **marcadores de flecha** a lo largo de la pista para indicar la dirección del movimiento.

### Iconos de inicio y fin {#start-and-finish-icons}

![Menú de pista Apariencia iconos de inicio y fin Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Le permite seleccionar si desea mostrar los **iconos de inicio y fin** para los segmentos de la pista.

### Unir huecos {#join-gaps}

Conecta **segmentos de pista** que se interrumpieron por pérdida de GPS o una pausa en la grabación. La función **<Translate android="true" ids="join_segments"/>** (*Android*) o **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) le permite conectar estos huecos en la pista GPX seleccionada usando líneas rectas.

### Restablecer al original {#reset-to-original}

Restaura todos los **ajustes de apariencia de la pista** a sus valores predeterminados.


## Pista 3D {#3d-track}

:::info Paid feature
**Pista 3D** es una función de pago de **OsmAnd Pro** para [iOS](../../purchases/ios.md#pro-features) y [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de pista Apariencia visualización 3D](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de pista Apariencia visualización 3D](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

La función **Pista 3D** genera una visualización tridimensional integrando datos de elevación en pistas 2D estándar. Esta funcionalidad crea una representación con profundidad mejorada, permitiendo un análisis preciso de la pista en relación con el terreno. Al incorporar detalles de elevación, la pista 3D ofrece una vista más completa de la topografía y el contexto geográfico de la ruta.

### Ajustes de la pista 3D {#3d-track-settings}

**Altura de la pared**  
Puede visualizar una pista 3D por altitud y otros datos disponibles dentro de la pista, o por altitud fija.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Altitud*, &nbsp;*Velocidad*, &nbsp;*Altura fija*. Datos del sensor 3D: &nbsp;*Frecuencia cardíaca*, &nbsp;*Cadencia de la bicicleta*, &nbsp;*Potencia de la bicicleta*, &nbsp;*Temperatura*, &nbsp;*Velocidad de la bicicleta*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Si se visualiza por *Altitud* o *Velocidad*, puede escalar los datos 3D para obtener una visualización más prominente para la pista 3D en el rango de *Ninguno* a *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. Si se visualiza por *Altura fija*, establezca la altura fija para la pista 3D definiendo su elevación en el mapa en el rango de *Ninguno* a *2000 m*.

- Puede combinarlo con [Relieve 3D](../../plugins/topography.md#3d-relief). Si la fuente de los datos 3D no es la altitud, la representación 3D será una combinación de la altitud del relieve y los datos seleccionados, como la velocidad o la frecuencia cardíaca.

**<Translate android="true" ids="wall_color"/>**  
Personaliza el **color de la pista 3D** usando gradientes o visualización basada en datos.  
Las opciones incluyen: *Ninguno*, &nbsp;*Sólido*, &nbsp;*Gradiente descendente*, &nbsp;*Gradiente ascendente*, &nbsp;*Altitud*, &nbsp;*Pendiente*, &nbsp;*Velocidad*.

**<Translate android="true" ids="track_line"/>**  
Añade una [línea resaltada](#color) en la parte superior o inferior de la pista 3D.  
Las opciones incluyen: *Superior*, &nbsp;*Inferior*, &nbsp;*Superior e inferior*.

> **NOTA**: *La versión de **Android** de la aplicación requiere que el motor de renderizado de mapas [Versión 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) esté habilitado para usar la visualización de pistas 3D.*


### Casos de uso {#use-cases}

La función de pista 3D es muy beneficiosa para actividades como el parapente, donde visualizar su trayectoria de vuelo puede ofrecer una visión más profunda. Al renderizar la pista en 3D, puede aprovechar funciones como **Altura de la pared** y **Color de la pared** para extraer información visual valiosa para el análisis.

1. **Visualizar por velocidad con 3D**.  
    Un caso de uso común es utilizar pistas 3D para visualizar las variaciones de velocidad. Esto le permite identificar secciones específicas de la pista donde disminuyó o aumentó la velocidad.  

    Con el Color de la pared basado en la Pendiente, puede observar cómo el terreno, particularmente las colinas e inclinaciones, afectaron su velocidad. Esta combinación de visualización de velocidad y pendiente proporciona una comprensión detallada del rendimiento a lo largo de la actividad.

2. **Visualizar por sensor cardíaco con Relieve 3D**.  
    Otra aplicación interesante es combinar los datos del sensor de frecuencia cardíaca con mapas de relieve 3D. Esto le permite mapear las fluctuaciones de la frecuencia cardíaca directamente sobre el terreno, dándole una vista completa de cómo los cambios de altitud pueden haber influido en su esfuerzo físico.  

    La función de relieve 3D, que exagera la altitud, funciona independientemente de la vista de la pista 3D. Se pueden ajustar dos parámetros de exageración vertical para comprender mejor la correlación entre la frecuencia cardíaca y la elevación del terreno.

3. **Visualizar la altura de la pista y la línea de color de la pendiente en una vista de tierra plana.**  
    Al visualizar datos de altitud, se recomienda usar una vista de tierra plana para evitar problemas como errores de GPS, que podrían hacer que secciones de la pista aparezcan bajo tierra.  

    En este escenario, los cambios de pendiente se pueden visualizar por separado a lo largo de la línea de la pista, mientras que el Color de la pared se utiliza para representar la altitud. Este método asegura que, incluso con posibles imprecisiones en los datos, siga recibiendo una visualización clara y precisa de la pendiente y la elevación.

## Cambiar la apariencia de varias pistas {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Apariencia Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Apariencia Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cambiar apariencia](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Cambiar apariencia](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

La pestaña [Pistas](../../personal/tracks/manage-tracks.md) muestra automáticamente todas las pistas grabadas, creadas o importadas. Se organizan por carpeta o se muestran como una lista debajo de ellas.  

Modifique la apariencia de varias pistas en *Mis Lugares → Pistas*:

- **Cambiar apariencia predeterminada** (solo Android) - Permite configurar ajustes predeterminados que se aplicarán una vez que se añada una pista a la [carpeta](../../personal/tracks/manage-tracks.md#track-folder).
- **Restablecer al original** - Restaura los ajustes individuales de la pista.

- [Modo de selección](../../personal/tracks/manage-tracks.md#selection-mode) - Cambia la apariencia de pistas específicas en la carpeta seleccionada o en toda la lista en la pestaña Pistas.
    - Seleccione el *menú de tres puntos* en la esquina superior derecha de la pestaña Pistas y toque *Seleccionar*.
    - Luego toque el *menú de tres puntos* en la parte superior de la pantalla y seleccione *Cambiar apariencia*.  

Opciones de personalización de apariencia masiva:

- **Flechas de dirección** - Añade [indicadores de movimiento](#direction-arrows).  
    Estados: *Inalterado*, &nbsp;*Original*, &nbsp;*Activado*, &nbsp;*Desactivado*.

- **Mostrar iconos de inicio y fin** - [Muestra marcadores](#start-and-finish-icons) para los puntos de inicio y fin de la pista.  
    Estados: *Inalterado*, &nbsp;*Original*, &nbsp;*Activado*, &nbsp;*Desactivado*.

- **Color** – Aplique un [coloreado](#color) manual o basado en datos.

- **Ancho** – Ajuste el [ancho de la línea de la pista](#width) usando preajustes o manualmente.

- **Intervalo de división** – [Establecer intervalo](#split-interval) para marcadores de distancia / tiempo.  
    Estados: *Inalterado*, &nbsp;*Original*, &nbsp;*Seleccionar*: *Tiempo* o *Distancia*.

Original e inalterado:

- **Original** - Restaura los parámetros originales del archivo de la pista.

- **Inalterado** - Mantiene los ajustes actuales durante la sesión de edición.


## Colores de pista en archivos GPX {#track-colors-in-gpx-files}

OsmAnd admite **colores de pista personalizados** en archivos GPX utilizando la etiqueta `<osmand:color>` dentro de la sección `<extensions>` de un elemento `<trk>`. Esto permite a los usuarios definir colores para pistas individuales, mejorando la diferenciación visual cuando se muestran varias pistas en el mapa.

Para especificar un color para una pista, use el siguiente formato:  

```xml
<trk>
  <name>Example Track</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- La etiqueta `<osmand:color>` acepta **códigos de color hexadecimales** (p. ej., `#FF0000` para rojo).
- Si existen varias pistas en un archivo GPX, cada pista puede tener su propia etiqueta `<osmand:color>`.


**Comportamiento en OsmAnd:**

1. **Asignación de color predeterminada**:  

    - Cuando una **pista GPX se importa como una sola pista** (opción ***Importar como una pista***), a toda la pista se le asigna el **color GPX predeterminado** (rojo).  
    - En OsmAnd **4.9.10 y posteriores**, este problema se ha resuelto: los colores de las pistas individuales ahora se conservan al importar.

2. **Visualización de un solo color para pistas fusionadas:**  

    - Si las pistas se **fusionan** usando ***Unir Segmentos***, la pista resultante se trata como **una pista continua con un solo segmento**.
    - La representación multicolor **no es compatible** con pistas fusionadas.
    - La pista fusionada se mostrará usando el **color principal del GPX** (predeterminado: rojo), incluso si los segmentos de pista individuales originalmente tenían colores diferentes.

3. **Prioridad de los ajustes de apariencia:**  

    - OsmAnd actualmente admite **ajustes de color y ancho solo para toda la pista**.
    - Estos ajustes de apariencia se almacenan en las **extensiones GPX de nivel superior**.
    - Si se **establece un color o ancho en el nivel superior** (ya sea en el archivo GPX o manualmente en OsmAnd), este ajuste tendrá prioridad sobre los colores asignados a los segmentos de pista individuales.

**Solución para pistas multicolor:**

- Para preservar los **colores individuales para múltiples pistas**, **importe las pistas por separado** en lugar de fusionarlas.

- Ajuste los colores de la pista manualmente en **Ajustes de apariencia de la pista**:

  - Abra la pista en OsmAnd.
  - Toque la pista para abrir el **Menú Contextual**.
  - Seleccione **Apariencia**.
  - Elija el color preferido.

- Esto asegura que cada pista conserve su **representación de color prevista**, incluso si el archivo GPX originalmente contenía múltiples segmentos con diferentes colores.


## Artículos relacionados {#related-articles}

- [Menú contextual del mapa](../map-context-menu.md)
- [Configurar mapa](../configure-map-menu.md)
- [Puntos en el mapa](../point-layers-on-map.md)
- [Pistas](../tracks/index.md)
- [Menú contextual de pistas](../tracks/track-context-menu.md)
- [Grabación de viaje](../../plugins/trip-recording.md)