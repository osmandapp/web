---
source-hash: 3057ab836ad9930847a69d2d7861832dfef9678fdc1d8f87d5e96ad65d09220e
sidebar_position: 6
---

# Estilo de representación de mapas - .render.xml {#map-rendering-style---renderxml}


En caso de que quieras modificar el estilo de representación predeterminado, debes consultar la [definición en GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml). Encontrarás todo tipo de estilos en este [enlace](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles), así que si vas a crear tu propio estilo, puedes encontrar el ejemplo más sencillo.

En caso de que decidas crear tu propio estilo de representación personalizado, es posible que necesites crear [tus propios mapas](../map-creation/create-offline-maps-yourself.md#custom-vector-map-tags) para añadir la visualización de características personalizadas.

## Secciones de estilo de mapa {#map-style-sections}

El archivo de estilo de mapa consta de varias secciones.

| Sección | Descripción |
|---------|-------------|
| **Encabezado** | Consta de `name` (nombre del estilo), `defaultColor` (el color predeterminado del mapa puede ser anulado por el atributo defaultColor) y `depends` (hereda todas las propiedades del estilo padre). |
| **Parámetros** | Definido como `<renderingProperty>` tiene `attr` que se utilizará en el estilo como nombre de parámetro y `name`, `description` se mostrará al usuario. |
| **Atributos** y **constantes** | Definido como `<renderingAttribute>` y como `<renderingConstant>` permite reutilizar los mismos bloques de estilos de representación para diferentes objetos de mapa | 
| Sección **Orden** | Definida como un bloque [`<order>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L2876). Cada objeto de mapa se busca en la sección de orden para determinar si se representará como punto, línea o polígono (`objectType`) y en qué `order` debe mostrarse. **Parámetros de búsqueda** (entrada): `tag`, `value`, `zoom`, `point` (verdadero o falso), `area` (tipo osm), `cycle` (el punto de inicio y fin son los mismos). **Resultado de búsqueda** (salida): `objectType` (punto = 1, línea = 2, polígono = 3), `order` (0-255). El orden de representación se define como: polígonos, sombras de línea, líneas, puntos. Si el `order` es el mismo para los polígonos, entonces los polígonos se muestran del más grande al más pequeño. Nota: los polígonos no deben superponerse parcialmente, de lo contrario el comportamiento no está definido. |
| Sección **Texto** | Definida como un bloque [`<text>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L3811). Cada objeto de mapa mostrado se busca para determinar si debe mostrar el texto y cómo debe mostrarse. **Parámetros de búsqueda** (entrada): `tag`, `value`, `zoom`, `nameTag` (se verifica cada etiqueta de texto). **Resultado de búsqueda** (salida): `textOnPath`, `textMinDistance` (margen entre los mismos textos, es decir, nombres de carreteras, referencias), `textSize`, `textColor`, `textHaloRadius`, `textOrder`, `textDy`, `textBold`, `nameTag2` (nombre extra entre paréntesis si está presente), `textShield` (fondo alrededor del texto), `icon` (icono en lugar de texto), `textItalic`, `textWrapWidth`, `intersectionMargin` (margen extra para no superponer texto). |
| Sección **Punto** | Definida como un bloque [`<point>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#6467). Cada objeto de mapa de punto mostrado (definido en la sección `order`) se busca en esta sección para determinar cómo debe mostrarse. **Parámetros de búsqueda** (entrada): `tag`, `value`, `zoom`, `e`. **Resultado de búsqueda** (salida): `shield` (escudo de icono), `icon`, `iconVisibleSize` (espacio extra para no saturar los iconos), `iconOrder`, `intersectionSizeFactor`. |
| Sección **Polígono** | Definida como un bloque [`<polygon>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#8580). Cada objeto de mapa de polígono mostrado (definido en la sección `order`) se busca en esta sección para determinar cómo debe mostrarse. **Parámetros de búsqueda** (entrada): `tag`, `value`, `zoom`. **Resultado de búsqueda** (salida): `color` (color para rellenar el polígono), `shader` (rellenar polígono con el mismo icono), `color_2, color_N` (color del trazo alrededor del polígono), `strokeWidth_2` (ancho del trazo), `pathEffect_2`, `cap_2`. |
| Sección **Línea** | Definida como un bloque [`<line>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#9535). Cada objeto de mapa de línea mostrado (definido en la sección `order`) se busca en esta sección para determinar cómo debe mostrarse. Un objeto de línea puede representarse como múltiples líneas combinadas hasta -2 capas por debajo y hasta 7 capas por encima. **Parámetros de búsqueda** (entrada): `tag`, `value`, `zoom`, `nameTag` (se verifica cada etiqueta de texto). **Resultado de búsqueda** (salida): `color, color_*` (color del trazo alrededor del polígono), `strokeWidth, strokeWidth_*` (ancho del trazo), `pathEffect, pathEffect_*` (efecto de ruta), `cap, cap_*` (BUTT, ROUND, SQUARE), `pathIcon`, `pathIconStep`, `shadowRadius` (sombra alrededor de la línea). |


## Selectores de características del mapa {#map-feature-selectors}
Para determinar qué atributos deben recuperarse del estilo de renderizado, se completa el siguiente procedimiento de búsqueda:
- Encuentra el `<case>` más interno que corresponda a los parámetros de entrada de búsqueda `tag/value/zoom`, es decir, para `highway=primary` - se encontrará `<case tag="highway" value="primary">`.
- Todos los elementos internos de `<case>` se aplican secuencialmente en profundidad y se recopilan los parámetros de salida.
 - `<case><apply output="1"/><apply_if zoom="15" output="2"> <case>` - la salida será 2 en caso de `zoom=15` y la salida será 1 en caso contrario.    
- Se comprueba si `<case>` forma parte de algún `<switch>` y, si es así, también se evaluarán todos los `apply` y `apply_if` de ese switch.

Reglas de evaluación:
- En cada 'case', `apply_if`, `switch`, `apply` se comprueban los atributos de entrada para que coincidan (evalúen a verdadero), de lo contrario la sección se omite y los atributos de salida no se recopilan.
- Todas las reglas se evalúan secuencialmente y los parámetros de salida pueden ser anulados por las siguientes reglas.
- `additional=?` es un atributo de entrada especial que comprueba etiquetas adicionales del objeto.
- Los parámetros de estilo de mapa son también parámetros de búsqueda de entrada junto a `tag/value/zoom`.
    - Ejemplo: `<apply_if nightMode="false" streetLightingNight="false" shield="street_lamp_lit_no_shield"/>`. Parámetros de entrada: nightMode, streetLightingNight; parámetros de salida - shield.


## Atributos (especiales) y constantes {#attributes-special--constants}
Las constantes de renderizado y los atributos de renderizado son intercambiables y pueden usarse para simplificar el estilo de renderizado y evitar copiar/pegar valores o bloques de código. En caso de que un atributo como `color` sea un valor único, se **prefiere** usar una **constante de renderizado** porque acelera enormemente el rendimiento del estilo de renderizado. 

Las constantes de renderizado solo se pueden usar con un valor dado: `<renderingConstant name="motorwayShadowRadius" value="1.6"/>` y más tarde en los selectores de características como `<apply_if shadowRadius="$motorwayShadowRadius"/>`. 

Los atributos de renderizado pueden tener una estructura incrustada con selectores adicionales y generar uno de los siguientes atributos (`attrColorValue`, `attrBoolValue`, `attrFloatValue`, `attrIntValue`, `attrStringValue`). Ejemplo:
```
    <renderingAttribute name="motorroadShadowColor">
		<case attrColorValue="#5f5fff"/>
	</renderingAttribute>
    .....
    <case showAccess="true" additional="motorroad=yes" attrColorValue="$motorroadShadowColor"/>
```    

### Atributos especiales {#special-attributes}

Los atributos especiales son `<renderingAttribute>` que no son utilizados por los selectores, sino directamente por el código para consultar una característica específica que se dibuja en la aplicación, como una ruta de navegación, una regla, una pista gpx, etc.


| Atributo especial | Descripción |
|-------------------|-------------|
| `measureDistanceLine` | Renderizado de línea para la función Planificar Ruta | 
| `markerGuideline`, `markerPlanRouteline` | Renderizado de líneas a los marcadores |
| `route` | Renderizado de una ruta de navegación | 
| `gpx` | Renderizado de una pista GPX |
| `publicTransportLine` | Renderizado de una ruta de navegación de transporte público | 
| `walkingRouteLine` | Renderizado de una navegación de transporte público: ruta peatonal entre paradas | 
| `rulerLineFont`, `rulerLine`, `rulerCircleAlt`, `rulerCircle` | Cómo renderizar el widget de regla de radio y medir la distancia al tocar | 
|||
| `defaultColor` | Color predeterminado para rellenar el mapa (cambia el modo día/noche) |
| `shadowRendering` | Interno cómo renderizar sombras con Skia |
||| 
| `routeInfo_*` | Ejemplo: `routeInfo_surface`, `routeInfo_roadClass` producen clases de carreteras para mostrar en la leyenda de la ruta. | 
|||
| `polygonMinSizeToDisplay` | Internos cómo renderizar líneas pequeñas y polígonos pequeños | 
| `roadDensityZoomTile` | Internos cómo renderizar líneas pequeñas y polígonos pequeños |
| `roadsDensityLimitPerTile` | Internos cómo renderizar líneas pequeñas y polígonos pequeños |
| `defaultSymbolPathSpacing` | Internos cómo renderizar líneas pequeñas y polígonos pequeños |
| `defaultBlockPathSpacing` | Internos cómo renderizar líneas pequeñas y polígonos pequeños |
| `globalPathPadding` | Internos cómo renderizar líneas pequeñas y polígonos pequeños |
|||
| `debugTextDisplayBBox` | Atributos para depurar la representación y el posicionamiento del texto | 
| `debugTextDisplayShieldBBox` | Atributos para depurar la representación y el posicionamiento del texto |
| `debugTextDoNotFindIntersections` | Atributos para depurar la representación y el posicionamiento del texto |
| `debugTextDoNotFindIntersectionsSameName` | Atributos para depurar la representación y el posicionamiento del texto |
| `debugTextDisplayShortRoadNames` | Atributos para depurar la representación y el posicionamiento del texto |

## Parámetros de estilo de mapa {#map-style-parameters}

Los parámetros de estilo de mapa permiten combinar múltiples estilos de renderizado dentro de una definición de archivo, es decir, no es necesario tener un archivo 'my_custom_style_night_mode.render.xml' separado, es posible definir un parámetro como `night_mode` (habilitado por defecto) y personalizar ciertas reglas (como colores) usando este parámetro. Más tarde, en la interfaz de usuario, es posible cambiar fácilmente ese parámetro y tener un estilo de mapa diferente en OsmAnd.

Aquí hay una definición del parámetro `baseAppMode`. `possibleValues` son los valores que se mostrarán en la interfaz de usuario de OsmAnd, `category` ayuda a determinar a qué categoría de interfaz de usuario pertenece esta propiedad.
```
<renderingProperty attr="baseAppMode" name="Modo de renderizado predeterminado" description="Optimización del mapa para el perfil de usuario respectivo basado en el perfil base (padre)"
		type="string" possibleValues="default, car, bicycle, pedestrian, public_transport, boat, ski"/>
```

Más tarde, en el estilo de selección, puede especificar cuándo se puede aplicar este selector, es decir, para qué modo de aplicación especificado por el usuario.
```
<renderingAttribute name="roadsDensityLimitPerTile">
		<!-- Número de carreteras a mostrar por baldosa -->
		<case moreDetailed="true" attrIntValue="55"/>
		<case baseAppMode="pedestrian" attrIntValue="40"/>
		<case baseAppMode="bicycle" attrIntValue="40"/>
		<case attrIntValue="60"/>
	</renderingAttribute>
```

Así que si el usuario selecciona `moreDetailed=true` entonces el valor de salida para la densidad será `55` y si `baseAppMode=pedestrian` (otro parámetro) será `40`, de lo contrario 60.