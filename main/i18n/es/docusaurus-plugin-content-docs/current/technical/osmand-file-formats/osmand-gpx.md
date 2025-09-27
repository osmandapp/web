---
source-hash: cd85b9f943b1bca0b2953a02a698885ade5850557c59dcce8a6611b292a2962a
sidebar_position: 2
---

# GPX de OsmAnd {#osmand-gpx}

## Introducción {#introduction}

GPX (Formato de Intercambio GPS) es un estándar basado en XML ampliamente utilizado para almacenar datos GPS, incluyendo trazas, rutas y waypoints. OsmAnd soporta el formato GPX para importar, exportar y personalizar datos GPS para la navegación, permitiendo tanto a usuarios principiantes como avanzados optimizar su experiencia.

#### ¿Qué hace único al GPX de OsmAnd? {#what-makes-osmand-gpx-unique}

OsmAnd extiende el formato estándar GPX 1.1 introduciendo su propio espacio de nombres XML personalizado `osmand:`. Este espacio de nombres permite almacenar datos adicionales como:

- Ajustes visuales de la traza (color, ancho, flechas).
- Agrupación de waypoints e iconos.
- Atributos detallados de la ruta, incluyendo rutas calculadas y tipos de actividad.

#### ¿Qué aprenderá en esta guía? {#what-will-you-learn-in-this-guide}

Este artículo proporciona una visión general completa de la estructura de archivos GPX y sus características en OsmAnd. Aprenderá:

1. Cómo personalizar trazas y waypoints usando etiquetas GPX.
2. Funciones avanzadas como descripciones HTML, datos de sensores y tipos de actividad.
3. Cómo exportar rutas calculadas y preservar su funcionalidad completa.
4. Convertir archivos GPX al formato OBF para un almacenamiento optimizado y capacidades de búsqueda avanzadas.

#### Resumen de la estructura GPX {#gpx-structure-overview}

Los archivos GPX en OsmAnd organizan los datos jerárquicamente en los siguientes elementos:

- `<gpx>` - el elemento raíz del archivo.
- `<trk>` - representa trazas, que contienen:
  - `<trkseg>` - segmentos de la traza, que se dividen a su vez en `<trkpt>` (puntos de la traza).
- `<rte>` - representa rutas, incluyendo waypoints y puntos clave.
- `<wpt>` - representa waypoints individuales.


## Personalización de la traza {#track-customization}

### Parámetros de apariencia de la traza {#track-appearance-parameters}

Esta sección describe cómo OsmAnd muestra las trazas en el mapa y las opciones de personalización disponibles para ajustar su apariencia. Los parámetros descritos a continuación se aplican dentro de la etiqueta `<gpx>` y afectan a todas las trazas incluidas en un archivo GPX.

| Nombre de la etiqueta | Descripción / Valores |
|:----------------------------------------|:---------|
| `<color>`                                 | - Define el color de la línea de la traza en el mapa.  <br/>  - *String:* Código de color HEX `#RRGGBB` o `#AARRGGBB` |
| `<width>`                                 | - Especifica el ancho de la línea de la traza. <br/>  - *String:* `“thin”`, `“medium"`, `“bold”` (definido por el atributo `“currentTrackWidth”`), o entero (1-24) |
| `<show_arrows>`                           | - Habilita o deshabilita las flechas de dirección a lo largo de la traza. <br/> - *Bool:* `"true"` / `"false"` |
| `<show_start_finish>`                     | - Muestra u oculta los marcadores de inicio y fin de la traza. <br/> - *Bool:* `"true"` / `"false"` |
| `<split_type>`                            | - Especifica el tipo de segmentación para la traza. <br/> - *String:* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>`                        | - Establece el intervalo para la segmentación de la traza según el tipo seleccionado. <br/> - *Double:* Entero (metros para `"distance"`, segundos para `"time"`) |
| `<line_3d_visualization_by_type>`         | - Especifica el tipo de visualización 3D para la traza. <br/> - *String:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - Define el tipo de color de la pared para la visualización 3D. <br/> - *String:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>`   | - Establece la posición de la visualización 3D en relación con la traza. <br/> - *String:* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>`           | - Multiplicador para escalar el valor del atributo `line_3d_visualization_by_type`. <br/> - *Float:* Predeterminado: 1.0 |
| `<elevation_meters>`                      | - Especifica una elevación fija en metros para `"fixed_height"` en `<line_3d_visualization_by_type>`. <br/> - *Float:* Predeterminado: `1000` |
| `<coloring_type>`                         | - Determina el método de coloreado para la traza. <br/> - *String:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>`                         | - Especifica el esquema de color para la traza. <br/> - *String:* `"default"` / [esquemas definidos por el usuario](/docs/user/personal/color-palette-schemes) |

***Ejemplo:***

```xml
<gpx version="1.1" creator="OsmAnd~ 5.0.0" xmlns="https://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx" xmlns:gpxtpx="https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 https://www.topografix.com/GPX/1/1/gpx.xsd">
...
  <extensions>
    <osmand:color>#4e4eff</osmand:color>
    <osmand:width>bold</osmand:width>
    <osmand:show_arrows>true</osmand:show_arrows>
    <osmand:split_type>distance</osmand:split_type>
    <osmand:split_interval>2000.0</osmand:split_interval>
  </extensions>
</gpx>
```

### Etiqueta 'coloring_type' {#tag-coloringtype}

La etiqueta `<coloring_type>` en OsmAnd permite a los usuarios personalizar el coloreado de la traza basándose en atributos de datos específicos, proporcionando una forma visual de interpretar información clave a lo largo de la traza.

| Tipo | Descripción | Caso de uso |
|:-----------------------|:--------|:--------|
| `<solid>`                | Toda la traza se muestra con un único color sólido especificado por la etiqueta `color`. | Usar cuando se necesita un color uniforme para una visibilidad clara. |
| `<speed>`                | La traza se colorea en un gradiente basado en los valores de velocidad en cada punto de la traza (`<trkpt>`). Las velocidades más altas se representan con colores distintos. | Ideal para actividades como ciclismo o conducción para visualizar cambios de velocidad. |
| `<altitude>`             | La traza se colorea según los datos de elevación en cada `<trkpt>`. Se aplica un gradiente que indica diferentes rangos de altitud. | Útil para rutas de senderismo o montaña para resaltar los cambios de altitud. |
| `<slope>`                | La traza se colorea en función de la inclinación/declinación entre puntos de traza consecutivos. Los gradientes positivos indican pendientes ascendentes, mientras que los gradientes negativos indican pendientes descendentes. | Adecuado para ciclistas o senderistas que analizan la dificultad de la traza. |
| `<routeInfo_roadClass>`  | Colorea los segmentos de la traza según la clasificación de carreteras de OpenStreetMap (OSM) (p. ej., autopista, calle residencial). | Ayuda a distinguir entre diferentes tipos de carreteras al seguir una ruta. |
| `<routeInfo_surface>`    | Colorea los segmentos de la traza según el tipo de superficie de OSM (p. ej., pavimentado, grava, tierra). | Útil para determinar las condiciones de la traza durante actividades como el todoterreno. |
| `<routeInfo_smoothness>` | Colorea la traza según las clasificaciones de suavidad de OSM, indicando la rugosidad o suavidad del camino (p. ej., excelente, malo). | Útil para evaluar la navegabilidad de la traza para vehículos específicos. |

### Etiquetas GPX en la interfaz de usuario {#gpx-tags-in-ui}

Las etiquetas de extensiones GPX se muestran en la parte inferior del menú contextual de la Traza.
Se listan tanto las `<extensions>` de `<metadata>` como las de `<gpx>`.
Las etiquetas de apariencia se excluyen del listado.
Soportado desde OsmAnd Android 5.0.

## Personalización de waypoints {#waypoints-customization}

Esta sección explica cómo OsmAnd permite la personalización de waypoints en archivos GPX mediante el uso de iconos, colores y agrupación.

### Iconos de waypoints {#waypoint-icons}

Las siguientes etiquetas controlan la apariencia de los iconos de los waypoints en OsmAnd:

| Etiqueta GPX | Predeterminado | Propósito |
|:-------------|:----------|:-----------|
| `<icon>`       | *(ninguno)* | Especifica el icono para el waypoint (p. ej., `historic_castle`). |
| `<color>`      | `"red"`     | Establece el color del icono usando un código HEX (p. ej., `#FF0000`) o un nombre de color (p. ej., `"blue"`). |
| `<background>` | `"circle"`  | Define la forma del fondo del icono. Valores posibles: `"circle"`, `"square"`, `"octagon"`. |

***Ejemplo:***

```xml
<wpt lat="52.5163" lon="13.3779">
  <name>Brandenburg Gate</name>
  <extensions>
    <osmand:color>#FF5020</osmand:color>
    <osmand:icon>city_gate</osmand:icon>
    <osmand:background>square</osmand:background>
  </extensions>
</wpt>
```

### Grupos de waypoints {#waypoint-groups}

Los waypoints en OsmAnd se pueden clasificar en grupos según su tipo. Esta agrupación permite al usuario organizar múltiples waypoints en categorías específicas, mejorando la claridad y la legibilidad del mapa.

- **Definición del grupo de puntos.** La etiqueta `<type>` dentro del elemento `<wpt>` especifica el grupo del punto (p. ej., `"castle"`, `"aqueduct"`).
- **Configuración del grupo.** La extensión `<osmand:points_groups>` en el elemento `<gpx>` define la configuración para cada grupo, incluyendo el `name`, `color`, `icon` y `background` para todos los waypoints de ese grupo.

***Ejemplo:***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <name>Look up to see the water</name>
    <type>aqueduct</type>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <name>Beware of ghosts</name>
    <type>castle</type>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <name>The house of Beetlejuice</name>
    <type>castle</type>
  </wpt>
  <extensions>
    <osmand:points_groups>
      <group name="castle" color="#FF0000" icon="historic_castle" background="circle"/>
      <group name="aqueduct" color="#0000FF" icon="bridge_structure_arch" background="circle"/>
    </osmand:points_groups>
  </extensions>
</gpx>
```


## Funciones avanzadas de GPX {#advanced-gpx-features}

### Tipo de actividad {#activity-type}

A partir de la [versión 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities) de OsmAnd, puede clasificar sus trazas por tipo de actividad para un análisis posterior y organización en carpetas.

La lista de tipos de actividad soportados está disponible en el archivo [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json). Cada actividad se identifica por su `ID` único y se almacena dentro de las extensiones `<metadata>` del archivo GPX.


***Ejemplo:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### HTML en descripciones {#html-in-descriptions}

Se pueden usar etiquetas HTML dentro de las etiquetas `<desc>` en los elementos `<metadata>` o `<wpt>` para proporcionar descripciones formateadas para trazas o waypoints.

Para evitar conflictos con la sintaxis XML, reemplace los caracteres especiales de la siguiente manera:

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***Ejemplo:***

```xml
<metadata>
  <desc>
    &lt;p&gt;
        The first paragraph will be displayed as &lt;b&gt;brief&lt;/b&gt; description.
        HTML tags are stripped in brief descriptions.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Second paragraph&lt;/h3&gt;
        &lt;b&gt;Hello, world!&lt;/b&gt;&lt;br/&gt;
        &lt;img src="..."/&gt;&lt;br/&gt;
        &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
        &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***Notas importantes:***

- OsmAnd elimina todas las etiquetas HTML al generar descripciones breves, dejando solo texto plano.
- Puede usar etiquetas como `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>` y más para la personalización.


### Etiqueta Link {#link-tag}

Use la etiqueta `<link>` para asociar URLs con metadatos, información del autor o waypoints en archivos GPX de OsmAnd. Esta etiqueta también puede mostrar una imagen cuando la URL apunta a un archivo de imagen.

***Ejemplos (Enlace de metadatos con imagen):***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>OsmAnd Logo</text>
  </link>
</metadata>
```

***Ejemplos (Enlace de waypoint con imagen):***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### Etiquetas de datos de sensores {#sensor-data-tags}

Puede enriquecer sus trazas con datos de sensores de fitness, como monitores de frecuencia cardíaca o sensores de temperatura. OsmAnd utiliza el esquema [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd) de Garmin para almacenar estos datos, haciéndolos compatibles con plataformas como **Strava** y **Garmin Basecamp**.

*Etiquetas de datos de sensores soportadas:*

- **hr** - frecuencia cardíaca (en latidos por minuto).
- **cad** - cadencia de bicicleta (en revoluciones por minuto).
- **atemp** - temperatura ambiente (en grados Celsius).
- **power** - potencia de salida de la bicicleta (en vatios).

***Ejemplo:***

```xml
<extensions>
  <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>145</gpxtpx:hr>
    <gpxtpx:cad>80</gpxtpx:cad>
    <gpxtpx:atemp>22</gpxtpx:atemp>
    <gpxtpx:power>250</gpxtpx:power>
  </gpxtpx:TrackPointExtension>
</extensions>
```

### Detalles de los puntos de la traza {#track-point-details}

Cada `<trkpt>` (punto de la traza) en el archivo GPX puede incluir atributos adicionales para capturar datos como velocidad, rumbo y elevación.

*Atributos soportados:*

- **speed** - velocidad en el punto de la traza (en metros por segundo).
- **heading** - dirección del movimiento (0-359 grados).
- **ele** - elevación sobre el nivel del mar (en metros).
- **time** - marca de tiempo para el punto de la traza.

***Ejemplo:***

```xml
  <trkpt lat="52.397799" lon="4.575998">
    <ele>203</ele>
    <time>2019-05-08T10:36:43Z</time>
    <hdop>3</hdop>
    <extensions>
      <heading>273</heading>
      <speed>5.02</speed>
    </extensions>
  </trkpt>
```



## Ruta(s) calculada(s) {#calculated-routes}

En **OsmAnd** puede calcular una ruta y guardar todos los datos en GPX, de modo que más tarde todas las funciones de navegación estarán disponibles como si se ejecutara una navegación GPX. Así, el gpx de **OsmAnd** contendrá segmentos de ruta, giros, nombres de carreteras, tipos de carreteras, restricciones, etc. La ruta se puede restaurar completamente como si acabara de ser construida, incluso en ausencia de los mapas sin conexión correspondientes.

Un archivo gpx puede contener varias rutas. Cada una de ellas está contenida en un segmento específico bajo **trkseg** / **extensions**. Un archivo gpx se guarda de esta forma al exportar una ruta construida o al guardar una traza que consta de varios segmentos separados a través de la funcionalidad [**Planificar una ruta**](../../user/plan-route/create-route.md).

[**Planificar una ruta**](../../user/plan-route/create-route.md) también añade uno (o varios, según el número de segmentos/trazas separados que contenga) bloques **rte** al archivo gpx, que contienen los puntos clave de la ruta (**rtept**).

#### Estructura Gpx: {#gpx-structure}

```xml
<trk>
  <trkseg>
    // Lista de puntos del segmento. El orden de los puntos corresponde al orden y la longitud de los segmentos de la ruta (<route><segment length="x" ... />).
    // El valor del atributo "length" corresponde al número de puntos en este segmento de la ruta.
    <trkpt ... ></trkpt>
    <extensions>
      // Lista de segmentos de la ruta
      <route>
        <segment ... />
      </route>
      // Propiedades de los segmentos incluidos en la ruta.
      // Estos datos se toman de los mapas sin conexión durante la construcción inicial de una ruta.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// Lista de puntos intermedios de la ruta. Si hay varias rutas, el orden de la lista rte coincide con el orden de los segmentos de la ruta.
<rte>
  <rtept ... />
    // Para las rutas construidas con "Planificar ruta", se guardan los parámetros de los puntos clave.
    // Si rtept no es el primero ni el último, antes de él (con el mismo idx) habrá un trkpt con los mismos datos.
    <extensions>
      // Tipo de perfil de ruta para el siguiente segmento (coche, bicicleta, peatón, etc.).
      <profile>...</profile>
      // El índice del punto en el segmento gpx que corresponde al primer punto de la ruta calculada para este segmento.
      // Si rtept no es el primero ni el último, antes de él (con el mismo idx) habrá un trkpt con los mismos datos.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Propiedades importantes: {#important-properties}

* El **trkpt_idx** del primer **rtept** en un **trkseg** es 0. Por lo tanto, si hay dos **trkseg**s, habrá dos **rtept**s con **trkpt_idx** = 0.
* El **trkpt_idx** del último **rtept** en un **trkseg** es igual al número de **trkpt**s en el **trkseg** menos 1. Por ejemplo, si un **trkseg** tiene 12 **trkpt**s, el **trkpt_idx** del último **rtept** debería ser 11.
* Los **segmentos** de ruta vecinos se superponen: el final del **segmento** anterior y el inicio del siguiente **segmento** es el mismo **trkpt**.
* Hay una excepción cuando los **segmentos** de ruta vecinos no se superponen (no comparten el mismo **trkpt**). Ocurre cuando hay un **rtept** "entre" los **segmentos** de ruta. El final del **segmento** de ruta anterior es un **trkpt**, y el inicio del siguiente **segmento** de ruta es otro **rtept**. Pero estos dos **trkpt**s son totalmente iguales en latitud, longitud y otros parámetros.
* La superposición de **segmentos** de ruta se puede detectar a través de **length** y **startTrkptIdx** (este último se usa solo para facilitar la lectura humana):
  - Si la suma de **startTrkptIdx** y **length** del **segmento** de ruta anterior es igual al **startTrkptIdx** del siguiente **segmento** de ruta, los **segmentos** de ruta no se superponen.
  - Si la suma es menor en uno, entonces los **segmentos** de ruta se superponen.
* Puede haber **segmentos** de ruta rectos. Se marcan con **id="-1"**. Pueden aparecer en dos casos:
  - Es una ruta multiperfil y el usuario seleccionó una línea recta.
  - El usuario colocó un **rtept** demasiado lejos de la carretera más cercana, por lo que OsmAnd trazó una línea recta entre el **rtept** y la carretera.
* trkpts = length - (segments - 1) + (rtepts - 2), donde:
  - trkpts - cantidad de **trkpt**s dentro de **trkseg**
  - length - suma de todas las **length**s de los **segmentos** de ruta dentro de **trkseg**
  - segments - cantidad de **segmentos** de ruta dentro de **trkseg**
  - rtepts - cantidad de **rtept**s que pertenecen a **trkseg**

#### Ejemplo: {#example}

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Fri 06 Nov 2020</name>
  </metadata>
  <trk>
    <name>Fri 06 Nov 2020</name>
    <trkseg>
      <trkpt lat="52.3639849" lon="4.8900533">
        <ele>0.801</ele>
      </trkpt>
      <trkpt lat="52.3636917" lon="4.8922849">
        <ele>0.998</ele>
      </trkpt>
      <trkpt lat="52.3636885" lon="4.892309">
        <ele>1</ele>
      </trkpt>
      <trkpt lat="52.3636426" lon="4.8922902">
        <ele>0.963</ele>
      </trkpt>
      <trkpt lat="52.356564" lon="4.8922607">
        <ele>0.899</ele>
      </trkpt>

      ....

      <extensions>
        <route>
          <segment id="7372058" length="3" segmentTime="178.44" speed="1.11" turnType="C" types="0,1,2,3,4,5,6" names="57" />
          <segment id="334164679" length="5" segmentTime="86.11" speed="1.11" turnType="TR" turnAngle="91.88" types="7,8,0,9,10,11,12,13,6" pointTypes=";;14,15;16,17,18;" names="58" />
          <segment id="334603581" length="6" segmentTime="75.5" speed="1.11" types="19,20,21,7,8,0,22,9,10,11,12,13,23,6" pointTypes=";14;16,24;16,24;14;" names="58" />
          <segment id="446707354" length="3" segmentTime="8.32" speed="1.11" turnType="TSLL" turnAngle="-25.44" types="19,25,21,7,8,22,9,1,11,12,13,6" names="58" />
          ...
        </route>
        <types>
          <type t="lit" v="yes" />
          <type t="oneway" v="yes" />
          <type t="highway" v="unclassified" />
          <type t="surface" v="paving_stones" />
          <type t="maxspeed" v="30" />
          ...
        </types>
      </extensions>
    </trkseg>
  </trk>

  <rte>
    <rtept lat="52.3639945" lon="4.8900532">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>0</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3612797" lon="4.8911677">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>24</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.356996" lon="4.8912071">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>89</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3542374" lon="4.8947024">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>121</trkpt_idx>
      </extensions>
    </rtept>
  </rte>
</gpx>
```

## Colecciones GPX en OBF {#gpx-collections-in-obf}

OsmAnd le permite convertir múltiples archivos GPX en un único archivo OBF. Esto permite el almacenamiento de miles de trazas GPX en un formato compacto y optimizado, manteniendo características como iconos de mapa especiales, personalización de la apariencia de la traza y funcionalidad de búsqueda. Esto evita el límite de archivos GPX grandes locales que típicamente no pueden manejar más de 500 K puntos en total, sin embargo, algunas características de las trazas GPX podrían faltar en comparación con la visualización del archivo OBF.

Pasos para convertir GPX a OBF:

- Inicie sesión en [Mapa Web de OsmAnd](https://osmand.net/map) *→ Trazas → Seleccione una carpeta → *Menú* (⋮) *→ Descargar como colección OBF*

- El archivo `<.obf>` resultante se puede importar en OsmAnd (requiere OsmAnd Android 5.0+).


### Estilo de línea de la traza {#track-line-style}

Personalice las líneas de la traza con las siguientes etiquetas:

| Etiqueta GPX | Predeterminado | Propósito |
|:--------------------------|:--------|:---------|
| `<name>`                  | *(ninguno)* | Nombre que se muestra sobre la línea de la traza. |
| `color`                   | `red`   | Color primario (HEX o texto). |
| `colour`, `displaycolor`  | *(ninguno)* | Formas alternativas de anular `color`. |
| `shield_waycolor`         | *(ninguno)* | Anulación para el `color` de la línea de la traza del escudo. |
| `translucent_line_colors` | `no`    | Establecer en `yes` para colores semitransparentes. |
| `width`                   | `thin`  | Ancho de línea: `"thin"`, `"medium"`, `"bold"`, `"1-24"`, o `"roadstyle"` |

**Colores soportados:** black, blue, brown, darkyellow, gray, green, lightblue, lightgreen, orange, purple, red, white, yellow.

***Ejemplo:***

```xml
<gpx>
  <metadata>
    <name>
      Track name located in Metadata
    </name>
  </metadata>
  <trk>
    ...
  </trk>
  <extensions>
    <osmand:color>yellow</osmand:color>
    <osmand:width>roadstyle</osmand:width>
    <osmand:translucent_line_colors>yes</osmand:translucent_line_colors>
  </extensions>
</gpx>
```

### Escudos de línea de la traza {#track-line-shields}

Los escudos son iconos o símbolos que se muestran a lo largo de la línea de la traza. OsmAnd soporta escudos de [estilo de símbolo OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol), que pueden incluir:

- Icono de fondo - la forma principal (p. ej., círculo o cuadrado).
- Iconos de primer plano - hasta dos símbolos más pequeños superpuestos sobre el fondo.
- Texto - descripciones cortas o identificadores, derivados de las etiquetas `shield_text` o `ref`.

Si no se definen propiedades de escudo, OsmAnd utiliza un escudo amarillo de tamaño automático para la traza.

***Etiquetas para escudos:***

| Etiqueta GPX | Propósito |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg`        | Define el icono de fondo para el escudo. |
| `shield_fg`        | Especifica el primer icono de primer plano (p. ej., una flecha o un punto). |
| `shield_fg_2`      | Especifica el segundo icono de primer plano (opcional). |
| `shield_text`      | Establece el texto corto que se mostrará sobre el escudo (p. ej., ref de ruta). |
| `shield_textcolor` | Determina el color del texto del escudo (opcional). |
| `shield_waycolor`  | Anula el color estándar de la traza para la línea del escudo (opcional). |
| `ref`              | Se utiliza como texto de respaldo si no se proporciona `shield_text`. |

***Ejemplo:***

```xml
<gpx>
  <trk>
    <name>Sample Route</name>
  </trk>
  <extensions>
    <osmand:shield_text>ABC</osmand:shield_text>
    <osmand:shield_fg>osmc_red_dot</osmand:shield_fg>
    <osmand:shield_bg>osmc_white_bg</osmand:shield_bg>
    <osmand:shield_waycolor>red</osmand:shield_waycolor>
    <osmand:shield_textcolor>black</osmand:shield_textcolor>
  </extensions>
</gpx>
```

### Visualización de waypoints {#waypoints-display}

Los iconos de los waypoints se pueden personalizar con las siguientes etiquetas:

| Etiqueta GPX | Predeterminado | Propósito |
|:-------------|:---------|:---------------------------------------------------|
| `icon`       | *(ninguno)* | Especifica el icono para el waypoint (usa iconos estándar del editor de waypoints de OsmAnd). |
| `color`      | `red`    | Establece el color del icono usando un código HEX (p. ej., `#ffaa00`) o un nombre de color soportado (opciones limitadas). |
| `background` | `circle` | Define la forma del icono. Valores soportados: `circle`, `square`, `octagon`. |

***Comportamiento de las formas de `background`:***

- `circle` - muestra el icono con un fondo circular.
- `square` - muestra el icono con un fondo cuadrado, que por defecto es rojo si no se especifica ningún color.
- `octagon` - se trata como un fondo circular en OsmAnd.

**Colores soportados para** `background=circle`: blue, gray, green, lightblue, lightgreen, orange, purple, yellow.

***Mejoras con elementos adicionales:***

- Puede añadir descripciones formateadas a los waypoints usando [código HTML](#html-in-descriptions). Esto le permite incluir texto con estilo, enlaces o incluso imágenes.
- Los waypoints pueden mostrar imágenes enlazadas usando [Enlace como Imagen](#link-tag).

***Ejemplo:***

```xml
<wpt lat="3.1415926" lon="42">
  <name>PI</name>
  <extensions>
    <osmand:icon>historic_archaeological_site</osmand:icon>
    <osmand:background>circle</osmand:background>
    <osmand:color>#ffaa00</osmand:color>
  </extensions>
</wpt>
```


### Búsqueda por nombre y referencias {#search-by-name-and-refs}

Las trazas y los waypoints se pueden localizar utilizando una variedad de etiquetas GPX.

| Etiqueta GPX | Ubicación | Propósito |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>`      | `<metadata>`           | El nombre principal de la traza GPX. |
| `ref`         | `<extensions>` de GPX  | Un identificador corto, a menudo derivado de la etiqueta `ref` de OSM. |
| `shield_text` | `<extensions>` de GPX  | Texto que se muestra en los escudos (también se puede usar con `ref`). |
| `name_-_lang` | `<extensions>` de GPX/WPT | `name:lang` localizado (p. ej., `name_-_en` para inglés, reemplace `:` -> `_-_`) |
| `<name>`      | `<wpt>`                | El nombre del waypoint. |

***Ejemplo:***

```xml
<gpx>
  <metadata>
    <name>Xemxija Heritage Trail</name>
  </metadata>
  <extensions>
    <osmand:ref>XHT</osmand:ref>
  </extensions>
  <wpt lat="35.948477" lon="14.3806796">
    <name>Il-Mighba Rumana</name>
    <extensions>
      <osmand:name_-_en>The Roman Apiary</osmand:name_-_en>
    </extensions>
  </wpt>
</gpx>
```

### Búsqueda por tipo de actividad {#search-by-activity-type}

OsmAnd organiza las trazas en archivos OBF en **Grupos de Actividad** y **Tipos de Actividad**. Estas clasificaciones le ayudan a filtrar trazas como PDI o a crear filtros de búsqueda basados en actividades.

Cómo funcionan los tipos de actividad:

- Los tipos y grupos de actividad se determinan utilizando el `"id"` y las `"tags"` del archivo [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json).
- OsmAnd utiliza las etiquetas `osmand:activity` o `osmand:route` para clasificar las actividades en los archivos GPX.


| Etiqueta GPX | Ubicación | Propósito |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Etiqueta principal de OsmAnd para almacenar el tipo de Actividad (ID). |
| `osmand:route`    | `<extensions>` de GPX | Forma alternativa de OSM para definir el tipo de Actividad. |


***Ejemplos de organización de trazas por tipo de actividad:***

1. Esto clasificará la traza bajo el grupo **Motociclismo** con el tipo **Motociclismo Todoterreno (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. Esto organizará la traza bajo el grupo **Ciclismo** con el tipo **Ciclismo de Montaña**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Etiquetas de información de búsqueda {#search-information-tags}

Los archivos OBF generan y almacenan automáticamente estadísticas y análisis críticos de la traza.

| Etiqueta OBF | Propósito |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance`                            | Distancia total cubierta por todos los segmentos de la traza. |
| `start_ele`, `ele_graph`              | Datos de elevación del GPX, empaquetados en un array binario compacto. |
| `min_ele`, `avg_ele`, `max_ele`       | Análisis de elevación mínima, media y máxima. |
| `diff_ele_up`, `diff_ele_down`        | Ganancia y pérdida total de elevación a lo largo de la traza. |
| `max_speed`, `avg_speed`, `min_speed` | Análisis de velocidad de la traza, incluyendo velocidad máxima, media y mínima. |
| `time_span`, `time_span_no_gaps`      | Tiempo total de la traza, con y sin tener en cuenta los huecos. |
| `time_moving`, `time_moving_no_gaps`  | Tiempo total en movimiento, con y sin tener en cuenta los huecos. |

### Etiquetas internas {#internal-tags}

Algunas etiquetas GPX se utilizan o almacenan indirectamente en los archivos OBF. Consulte [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java) para obtener detalles sobre la implementación.

| Etiqueta OBF | Propósito |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id`                   | Un identificador único para el archivo GPX, que vincula los datos del Mapa y del PDI (formato: `/[A-Z]+[0-9]+/` p. ej. `OSM12345`). |
| `route_type`                 | Identificador del grupo de actividad (`id`) derivado de `poi/activities.json` |
| `route_activity_type`        | Identificador del tipo de actividad (dentro del grupo) (`id`) derivado de `poi/activities.json` |
| `name`, `ref`, `description` | Atributos localizables y buscables (`lang="true"` en los tipos de PDI) |
| `filename`                   | El nombre del archivo GPX original utilizado para generar esta traza. |
| `track_color`                | Color de la traza en la sección del mapa derivado de `shield_waycolor`, `color`, `colour`, o `displaycolor` |
| `extensions_extra_tags`      | Etiquetas extra arbitrarias para `<gpx><extensions>` en formato JSON. |
| `metadata_extra_tags`        | Etiquetas extra arbitrarias para `<metadata><extensions>` en formato JSON. |
| `wpt_extra_tags`             | Etiquetas extra arbitrarias para waypoints `<wpt><extensions>` en formato JSON. |
| `route_track_point`          | Los waypoints del archivo GPX utilizan este tipo en los datos de PDI. |
| `route_bbox_radius`          | Especifica el radio predeterminado para buscar partes de la traza dentro de la sección de PDI |
| `route_shortlink_tiles`      | Especifica una lista separada por comas de teselas de OSM Shortlink para acelerar la lectura de datos de geometría (opcional) |
| `route_segment_index`        | Especifica un número ordinal del segmento de geometría que está vinculado a este punto (opcional) |
| `route_name`                 | El nombre de la ruta, utilizado por el `searchPoiByName` interno (obsoleto) |