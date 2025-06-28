---
source-hash: f4b2b293ad51358460be21f120eea4ead0ba855b2536fc69c26f9eb724fe95d1
sidebar_position: 2
---

# GPX de OsmAnd {#osmand-gpx}

## Introducción {#introduction}

GPX (GPS Exchange Format) es un estándar basado en XML ampliamente utilizado para almacenar datos GPS, incluyendo tracks, rutas y waypoints. OsmAnd es compatible con el formato GPX para importar, exportar y personalizar datos GPS para la navegación, lo que permite tanto a usuarios principiantes como avanzados optimizar su experiencia.

#### ¿Qué hace que el GPX de OsmAnd sea único? {#what-makes-osmand-gpx-unique}

OsmAnd extiende el formato estándar GPX 1.1 introduciendo su propio espacio de nombres XML `osmand:`. Este espacio de nombres permite almacenar datos adicionales como:

- Configuración visual del track (color, ancho, flechas).
- Agrupación e iconos de waypoints.
- Atributos detallados de la ruta, incluyendo rutas calculadas y tipos de actividad.

#### ¿Qué aprenderá en esta guía? {#what-will-you-learn-in-this-guide}

Este artículo proporciona una visión general completa de la estructura y características del archivo GPX en OsmAnd. Aprenderá:

1. Cómo personalizar tracks y waypoints usando etiquetas GPX.
2. Funciones avanzadas como descripciones HTML, datos de sensores y tipos de actividad.
3. Cómo exportar rutas calculadas y preservar su funcionalidad completa.
4. Convertir archivos GPX a formato OBF para un almacenamiento optimizado y capacidades de búsqueda avanzadas.

#### Descripción general de la estructura GPX {#gpx-structure-overview}

Los archivos GPX en OsmAnd organizan los datos jerárquicamente en los siguientes elementos:

- `<gpx>` - el elemento raíz del archivo.
- `<trk>` - representa tracks, que contienen:
  - `<trkseg>` - segmentos del track, que se dividen además en `<trkpt>` (puntos del track).
- `<rte>` - representa rutas, incluyendo waypoints y puntos clave.
- `<wpt>` - representa waypoints individuales.

## Personalización de tracks {#track-customization}

### Parámetros de apariencia del track {#track-appearance-parameters}

Esta sección describe cómo OsmAnd muestra los tracks en el mapa y las opciones de personalización disponibles para ajustar su apariencia. Los parámetros descritos a continuación se aplican dentro de la etiqueta `<gpx>` y afectan a todos los tracks incluidos en un archivo GPX.

| Nombre de la etiqueta | Descripción / Valores |
|:----------------------------------------|:---------|
| `<color>` | - Define el color de la línea del track en el mapa. <br/> - *Cadena:* Código de color HEX `#RRGGBB` o `#AARRGGBB` |
| `<width>` | - Especifica el ancho de la línea del track. <br/> - *Cadena:* `“thin”`, `“medium"`, `“bold”` (definido por el atributo `“currentTrackWidth”`), o entero (1-24) |
| `<show_arrows>` | - Habilita o deshabilita las flechas de dirección a lo largo del track. <br/> - *Booleano:* `"true"` / `"false"` |
| `<show_start_finish>` | - Muestra u oculta los marcadores para el inicio y el final del track. <br/> - *Booleano:* `"true"` / `"false"` |
| `<split_type>` | - Especifica el tipo de segmentación para el track. <br/> - *Cadena:* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>` | - Establece el intervalo para la segmentación del track según el tipo seleccionado. <br/> - *Doble:* Entero (metros para `"distance"`, segundos para `"time"`) |
| `<line_3d_visualization_by_type>` | - Especifica el tipo de visualización 3D para el track. <br/> - *Cadena:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - Define el tipo de color de pared para la visualización 3D. <br/> - *Cadena:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>` | - Establece la posición de la visualización 3D en relación con el track. <br/> - *Cadena:* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>` | - Multiplicador para escalar el valor del atributo `line_3d_visualization_by_type`. <br/> - *Flotante:* Predeterminado: 1.0 |
| `<elevation_meters>` | - Especifica una elevación fija en metros para `"fixed_height"` en `<line_3d_visualization_by_type>`. <br/> - *Flotante:* Predeterminado: `1000` |
| `<coloring_type>` | - Determina el método de coloración para el track. <br/> - *Cadena:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>` | - Especifica el esquema de color para el track. <br/> - *Cadena:* `"default"` / [esquemas definidos por el usuario](/docs/user/personal/color-palette-schemes) |

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

La etiqueta `<coloring_type>` en OsmAnd permite a los usuarios personalizar el color del track basándose en atributos de datos específicos, proporcionando una forma visual de interpretar información clave a lo largo del track.

| Tipo | Descripción | Caso de uso |
|:-----------------------|:--------|:--------|
| `<solid>` | El track completo se muestra con un solo color sólido especificado por la etiqueta `color`. | Usar cuando se necesita un color uniforme para una visibilidad clara. |
| `<speed>` | El track se colorea con un gradiente basado en los valores de velocidad en cada punto del track (`<trkpt>`). Las velocidades más altas se representan con colores distintos. | Ideal para actividades como ciclismo o conducción para visualizar cambios de velocidad. |
| `<altitude>` | El track se colorea según los datos de elevación en cada `<trkpt>`. Se aplica un gradiente, indicando diferentes rangos de altitud. | Útil para rutas de senderismo o montaña para resaltar cambios de altitud. |
| `<slope>` | El track se colorea según la inclinación/declive entre puntos de track consecutivos. Los gradientes positivos indican pendientes ascendentes, mientras que los gradientes negativos indican pendientes descendentes. | Adecuado para ciclistas o excursionistas que analizan la dificultad del track. |
| `<routeInfo_roadClass>` | Colorea los segmentos del track según la clasificación de carreteras de OpenStreetMap (OSM) (por ejemplo, autopista, calle residencial). | Ayuda a distinguir entre diferentes tipos de carreteras al seguir una ruta. |
| `<routeInfo_surface>` | Colorea los segmentos del track según el tipo de superficie de OSM (por ejemplo, pavimentado, grava, tierra). | Útil para determinar las condiciones del track durante actividades como el todoterreno. |
| `<routeInfo_smoothness>` | Colorea el track según las clasificaciones de suavidad de OSM, indicando la rugosidad o suavidad del camino (por ejemplo, excelente, malo). | Útil para evaluar la navegabilidad del track para vehículos específicos. |

### Etiquetas GPX en la interfaz de usuario {#gpx-tags-in-ui}

Las etiquetas de extensión GPX se muestran en la parte inferior del menú contextual del track.
Se listan tanto `<metadata>` como `<gpx>` `<extensions>`.
Las etiquetas de apariencia se excluyen del listado.
Soportado desde OsmAnd Android 5.0.

## Personalización de waypoints {#waypoints-customization}

Esta sección explica cómo OsmAnd permite la personalización de waypoints en archivos GPX utilizando iconos, colores y agrupaciones.

### Iconos de waypoints {#waypoint-icons}

Las siguientes etiquetas controlan la apariencia de los iconos de waypoints en OsmAnd:

| Etiqueta GPX | Predeterminado | Propósito |
|:-------------|:----------|:-----------|
| `<icon>` | *(ninguno)* | Especifica el icono para el waypoint (por ejemplo, `historic_castle`). |
| `<color>` | `"red"` | Establece el color del icono usando un código HEX (por ejemplo, `#FF0000`) o un nombre de color (por ejemplo, `"blue"`). |
| `<background>` | `"circle"` | Define la forma de fondo del icono. Valores posibles: `"circle"`, `"square"`, `"octagon"`. |

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

Los waypoints en OsmAnd se pueden clasificar en grupos según su tipo. Esta agrupación permite al usuario organizar múltiples waypoints bajo categorías específicas, mejorando la claridad y la legibilidad del mapa.

- **Definición del grupo de puntos.** La etiqueta `<type>` dentro del elemento `<wpt>` especifica el grupo del punto (por ejemplo, `"castle"`, `"aqueduct"`).
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

A partir de OsmAnd [versión 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities), puede clasificar sus tracks por tipo de actividad para un análisis y organización posteriores en carpetas.

La lista de tipos de actividad admitidos está disponible en el archivo [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json). Cada actividad se identifica por su `ID` único y se almacena dentro de las extensiones `<metadata>` del archivo GPX.

***Ejemplo:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### HTML en descripciones {#html-in-descriptions}

Las etiquetas HTML se pueden usar dentro de las etiquetas `<desc>` en los elementos `<metadata>` o `<wpt>` para proporcionar descripciones formateadas para tracks o waypoints.

Para evitar conflictos con la sintaxis XML, reemplace los caracteres especiales de la siguiente manera:

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***Ejemplo:***

```xml
<metadata>
  <desc>
    &lt;p&gt;
        El primer párrafo se mostrará como descripción &lt;b&gt;breve&lt;/b&gt;.
        Las etiquetas HTML se eliminan en las descripciones breves.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Segundo párrafo&lt;/h3&gt;
        &lt;b&gt;¡Hola, mundo!&lt;/b&gt;&lt;br/&gt;
        &lt;img src="..."/&gt;&lt;br/&gt;
        &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
        &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***Notas importantes:***

- OsmAnd elimina todas las etiquetas HTML al generar descripciones breves, dejando texto sin formato.
- Puede usar etiquetas como `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>` y más para personalizar.

### Etiqueta de enlace {#link-tag}

Utilice la etiqueta `<link>` para asociar URL con metadatos, información del autor o waypoints en archivos GPX de OsmAnd. Esta etiqueta también puede mostrar una imagen cuando la URL apunta a un archivo de imagen.

***Ejemplos (enlace de metadatos con imagen):***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>OsmAnd Logo</text>
  </link>
</metadata>
```

***Ejemplos (enlace de waypoint con imagen):***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### Etiquetas de datos de sensores {#sensor-data-tags}

Puede enriquecer sus tracks con datos de sensores de fitness, como monitores de frecuencia cardíaca o sensores de temperatura. OsmAnd utiliza el esquema [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd) de Garmin para almacenar estos datos, haciéndolos compatibles con plataformas como **Strava** y **Garmin Basecamp**.

*Etiquetas de datos de sensores admitidas:*

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

### Detalles del punto de track {#track-point-details}

Cada `<trkpt>` (punto de track) en el archivo GPX puede incluir atributos adicionales para capturar datos como velocidad, rumbo y elevación.

*Atributos admitidos:*

- **speed** - velocidad en el punto de track (en metros por segundo).
- **heading** - dirección del movimiento (0-359 grados).
- **ele** - elevación sobre el nivel del mar (en metros).
- **time** - marca de tiempo para el punto de track.

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

## Rutas calculadas {#calculated-routes}

En **OsmAnd** puedes calcular una ruta y guardar todos los datos en GPX, de modo que más tarde todas las funciones de navegación estarán disponibles como navegación GPX en ejecución, por lo que el GPX de **OsmAnd** contendrá segmentos de ruta, giros, nombres de carreteras, tipos de carreteras, restricciones, etc. La ruta se puede restaurar completamente como si acabara de construirse, incluso en ausencia de los respectivos mapas sin conexión.

Un archivo gpx puede contener varias rutas. Cada una de ellas está contenida en un segmento específico bajo **trkseg** / **extensions**. Un archivo gpx se guarda en este formato al exportar una ruta construida o al guardar un track que consta de varios segmentos separados a través de la funcionalidad [**Planificar una ruta**](../../user/plan-route/create-route.md).

[**Planificar una ruta**](../../user/plan-route/create-route.md) también añade uno (o varios, de acuerdo con el número de segmentos/tracks separados contenidos) bloques **rte** al archivo gpx, que contienen puntos clave de la ruta (**rtept**).

#### Estructura Gpx: {#gpx-structure}

```xml
<trk>
  <trkseg>
    // Lista de puntos de segmento. El orden de los puntos corresponde al orden y la longitud de los segmentos de la ruta (<route><segment length="x" ... />).
    // El valor del atributo "length" corresponde al número de puntos en este segmento de la ruta.
    <trkpt ... ></trkpt>
    <extensions>
      // Lista de segmentos de ruta
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
    // Si rtept no es el primero ni el último, antes de él (con el mismo idx) trkpt tendrá los mismos datos.
    <extensions>
      // Tipo de perfil de ruta para el siguiente segmento (coche, bicicleta, peatón, etc.).
      <profile>...</profile>
      // El índice del punto en el segmento gpx que corresponde al primer punto de la ruta calculada para este segmento.
      // Si rtept no es el primero ni el último, antes de él (con el mismo idx) trkpt tendrá los mismos datos.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Propiedades importantes: {#important-properties}

* **trkpt_idx** del primer **rtept** en **trkseg** es 0. Por lo tanto, si hay dos **trkseg**s, habrá dos **rtept**s con **trkpt_idx** = 0
* **trkpt_idx** del último **rtept** en **trkseg** es igual al número de **trkpt**s en **trkseg** menos 1. Por ejemplo, si **trkseg** tiene 12 **trkpt**s, **trkpt_idx** del último **rtept** debe ser 11
* Los **segmentos** de ruta vecinos se superponen: el final del **segmento** anterior y el inicio del **segmento** siguiente son el mismo **trkpt**.
* Hay una excepción cuando los **segmentos** de ruta vecinos no se superponen (no comparten el mismo **trkpt**). Esto ocurre cuando hay un **rtept** "entre" los **segmentos** de ruta. El final del **segmento** de ruta anterior es un **trkpt**, y el inicio del **segmento** de ruta siguiente es otro **rtept**. Pero estos dos **trkpt**s son totalmente iguales en lat, lon y otros parámetros.
* La superposición de **segmentos** de ruta se puede detectar a través de **length** y **startTrkptIdx** (este último se usa solo para la comodidad de la lectura humana):
  - Si la suma de **startTrkptIdx** y **length** del **segmento** de ruta anterior es igual a **startTrkptIdx** del **segmento** de ruta siguiente, los **segmentos** de ruta no se superponen
  - Si la suma es menor en uno, entonces los **segmentos** de ruta se superponen
* Puede haber **segmentos** de ruta rectos. Se marcan con **id="-1"**. Pueden aparecer en dos casos:
  - Es una ruta multiprofil y el usuario seleccionó una línea recta
  - El usuario colocó el **rtept** demasiado lejos de la carretera más cercana, por lo que osmand hizo una línea recta entre el **rtept** y la carretera
* trkpts = length - (segments - 1) + (rtepts - 2), donde:
  - trkpts - cantidad de **trkpt**s dentro de **trkseg**
  - length - suma de todas las **length**s de los **segmentos** de ruta dentro de **trkseg**
  - segments - cantidad de **segmentos** de ruta dentro de **trkseg**
  - rtepts - cantidad de **rtept**s propiedad de **trkseg**

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
      <trkpt lat="52.363564" lon="4.8922607">
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

OsmAnd le permite convertir múltiples archivos GPX en un solo archivo OBF. Esto permite el almacenamiento de miles de tracks GPX en un formato compacto y optimizado, manteniendo características como iconos de mapa especiales, personalización de la apariencia del track y funcionalidad de búsqueda. Esto evita un límite de archivos GPX locales grandes que normalmente no pueden manejar más de 500 K puntos en total, sin embargo, algunas características de los tracks GPX pueden faltar en comparación con la visualización del archivo OBF.

Pasos para convertir GPX a OBF:

- Inicie sesión en [OsmAnd Web Map](https://osmand.net/map) *→ Tracks → Seleccione una carpeta → *Menú* (⋮) *→ Descargar como colección OBF*

- El archivo `<.obf>` resultante se puede importar en OsmAnd (requiere OsmAnd Android 5.0+).

### Estilo de línea de track {#track-line-style}

Personalice las líneas de track con las siguientes etiquetas:

| Etiqueta GPX | Predeterminado | Propósito |
|:--------------------------|:--------|:---------|
| `<name>` | *(ninguno)* | Nombre que se muestra sobre la línea del track. |
| `color` | `red` | Color principal (HEX o texto). |
| `colour`, `displaycolor` | *(ninguno)* | Formas alternativas de anular `color`. |
| `shield_waycolor` | *(ninguno)* | Anulación para el `color` de la línea del track del escudo. |
| `translucent_line_colors` | `no` | Establecer en `yes` para colores semitransparentes. |
| `width` | `thin` | Ancho de línea: `"thin"`, `"medium"`, `"bold"`, `"1-24"`, o `"roadstyle"` |

**Colores admitidos:** black, blue, brown, darkyellow, gray, green, lightblue, lightgreen, orange, purple, red, white, yellow.

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

### Escudos de línea de track {#track-line-shields}

Los escudos son iconos o símbolos que se muestran a lo largo de la línea del track. OsmAnd admite escudos de [estilo de símbolo OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol), que pueden incluir:

- Icono de fondo: la forma principal (por ejemplo, círculo o cuadrado).
- Iconos de primer plano: hasta dos símbolos más pequeños superpuestos al fondo.
- Texto: descripciones o identificadores cortos, derivados de las etiquetas `shield_text` o `ref`.

Si no se definen propiedades de escudo, OsmAnd utiliza un escudo amarillo de tamaño automático para el track.

***Etiquetas para escudos:***

| Etiqueta GPX | Propósito |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg` | Define el icono de fondo para el escudo. |
| `shield_fg` | Especifica el primer icono de primer plano (por ejemplo, una flecha o un punto). |
| `shield_fg_2` | Especifica el segundo icono de primer plano (opcional). |
| `shield_text` | Establece el texto corto que se mostrará sobre el escudo (por ejemplo, referencia de ruta). |
| `shield_textcolor` | Determina el color del texto del escudo (opcional). |
| `shield_waycolor` | Anula el color de track estándar para la línea del escudo (opcional). |
| `ref` | Se utiliza como texto de respaldo si no se proporciona `shield_text`. |

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
| `icon` | *(ninguno)* | Especifica el icono para el waypoint (utiliza los iconos estándar del editor de waypoints de OsmAnd). |
| `color` | `red` | Establece el color del icono usando un código HEX (por ejemplo, `#ffaa00`) o un nombre de color compatible (opciones limitadas). |
| `background` | `circle` | Define la forma del icono. Valores admitidos: `circle`, `square`, `octagon`. |

***Comportamiento de las formas de `background`:***

- `circle` - muestra el icono con un fondo circular.
- `square` - muestra el icono con un fondo cuadrado, por defecto rojo si no se especifica ningún color.
- `octagon` - tratado como un fondo circular en OsmAnd.

**Colores admitidos para** `background=circle`: blue, gray, green, lightblue, lightgreen, orange, purple, yellow.

***Mejoras con elementos adicionales:***

- Puede agregar descripciones formateadas a los waypoints usando [código HTML](#html-in-descriptions). Esto le permite incluir texto con estilo, enlaces o incluso imágenes.
- Los waypoints pueden mostrar imágenes vinculadas usando [Link-as-Image](#link-tag).

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

Los tracks y waypoints se pueden localizar utilizando una variedad de etiquetas GPX.

| Etiqueta GPX | Ubicación | Propósito |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>` | `<metadata>` | El nombre principal del track GPX. |
| `ref` | GPX `<extensions>` | Un identificador corto, a menudo derivado de la etiqueta `ref` de OSM. |
| `shield_text` | GPX `<extensions>` | Texto que se muestra en los escudos (también se puede usar con `ref`). |
| `name_-_lang` | GPX/WPT `<extensions>` | `name:lang` localizado (por ejemplo, `name_-_en` para inglés, reemplace `:` -> `_-_`) |
| `<name>` | `<wpt>` | El nombre del waypoint. |

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

OsmAnd organiza los tracks en archivos OBF en **Grupos de actividad** y **Tipos de actividad**. Estas clasificaciones le ayudan a filtrar tracks como PDI o a crear filtros de búsqueda basados en actividades.

Cómo funcionan los tipos de actividad:

- Los tipos y grupos de actividad se determinan utilizando el `"id"` y las `"tags"` del archivo [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json).
- OsmAnd utiliza las etiquetas `osmand:activity` o `osmand:route` para clasificar las actividades en los archivos GPX.

| Etiqueta GPX | Ubicación | Propósito |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Etiqueta principal de OsmAnd para almacenar el tipo de actividad (ID). |
| `osmand:route` | GPX `<extensions>` | Forma alternativa de OSM para definir el tipo de actividad. |

***Ejemplos de organización de tracks por tipo de actividad:***

1. Esto clasificará el track en el grupo **Motociclismo** con el tipo **Motociclismo todoterreno (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. Esto organizará el track en el grupo **Ciclismo** con el tipo **Ciclismo de montaña**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Etiquetas de información de búsqueda {#search-information-tags}

Los archivos OBF generan y almacenan automáticamente estadísticas y análisis críticos del track.

| Etiqueta OBF | Propósito |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance` | Distancia total cubierta por todos los segmentos del track. |
| `start_ele`, `ele_graph` | Datos de elevación de GPX, envueltos en una matriz binaria compacta. |
| `min_ele`, `avg_ele`, `max_ele` | Análisis de elevación mínima, promedio y máxima. |
| `diff_ele_up`, `diff_ele_down` | Ganancia y pérdida total de elevación a lo largo del track. |
| `max_speed`, `avg_speed`, `min_speed` | Análisis de velocidad del track, incluyendo velocidad máxima, promedio y mínima. |
| `time_span`, `time_span_no_gaps` | Tiempo total del track, con y sin tener en cuenta las pausas. |
| `time_moving`, `time_moving_no_gaps` | Tiempo total en movimiento, con y sin tener en cuenta las pausas. |

### Etiquetas internas {#internal-tags}

Algunas etiquetas GPX se utilizan o almacenan indirectamente en archivos OBF. Consulte [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java) para obtener detalles sobre la implementación.

| Etiqueta OBF | Propósito |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id` | Un identificador único para el archivo GPX, que vincula datos de mapa y PDI (formato: `/[A-Z]+[0-9]+/` por ejemplo, `OSM12345`). |
| `route_type` | Identificador de grupo de actividad (`id`) derivado de `poi/activities.json` |
| `route_activity_type` | Tipo de actividad (dentro del grupo) identificador (`id`) derivado de `poi/activities.json` |
| `name`, `ref`, `description` | Atributos localizables y buscables (`lang="true"` en tipos de PDI) |
| `filename` | El nombre del archivo GPX original utilizado para generar este track. |
| `track_color` | Color del track de la sección del mapa derivado de `shield_waycolor`, `color`, `colour` o `displaycolor` |
| `extensions_extra_tags` | Etiquetas extra arbitrarias para `<gpx><extensions>` en formato JSON. |
| `metadata_extra_tags` | Etiquetas extra arbitrarias para `<metadata><extensions>` en formato JSON. |
| `wpt_extra_tags` | Etiquetas extra arbitrarias para waypoints `<wpt><extensions>` en formato JSON. |
| `route_track_point` | Los waypoints del archivo GPX utilizan este tipo en los datos de PDI. |
| `route_bbox_radius` | Especifica el radio predeterminado para buscar partes del track dentro de la sección PDI |
| `route_shortlink_tiles` | Especifica una lista separada por comas de teselas de enlace corto de OSM para acelerar la lectura de datos de geometría (opcional) |
| `route_segment_index` | Especifica un número ordinal del segmento de geometría que está vinculado a este punto (opcional) |
| `route_name` | El nombre de la ruta, utilizado por `searchPoiByName` interno (obsoleto) |

> *Última actualización: marzo de 2025*