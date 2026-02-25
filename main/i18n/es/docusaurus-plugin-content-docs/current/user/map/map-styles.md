---
source-hash: 887e37d512e29933bbd3ee7af217024887ffcc5ac636c9ddc52e7480299a8d1b
sidebar_position: 6
title:  Map Styles (Vector Maps)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Visión general {#overview}

Los estilos de mapa definen cómo se representa los datos de mapa vectorial en OsmAnd. Un estilo controla la apariencia visual de los objetos del mapa como carreteras, edificios, uso del suelo, agua y puntos de interés, incluyendo colores, patrones de líneas y etiquetas.

OsmAnd proporciona varios estilos integrados optimizados para diferentes actividades. Puedes cambiar estilos en el [menú Configurar mapa](./configure-map-menu.md) y ajustar parámetros de estilo. Los estilos de mapa vectorial admiten el cambio entre modos día y noche.

Además de los estilos integrados, OsmAnd admite estilos de mapa personalizados. Los estilos personalizados se basan en reglas de renderizado y se pueden importar, compartir y modificar para resaltar la información que necesitas.


## Estilos de mapa predeterminados {#default-map-styles}

OsmAnd te ofrece muchos estilos de mapa y capas de datos que se ajustan por defecto. Esta sección describe los principales para modos día y noche.

**Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

**iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*

### OsmAnd {#osmand}

![Estilo de mapa OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)  

El estilo de renderizado de mapa estándar de OsmAnd equilibra detalle y simplicidad, lo que lo hace ideal para la exploración urbana y al aire libre. Detalla características de la ciudad como calles, edificios y paradas de transporte mientras simplifica el desorden visual haciendo los mapas más claros.  

Los beneficios clave incluyen mapeo de rutas, calidad de superficie, restricciones de acceso, señalización de carreteras, renderizados de caminos a escala SAC, instalaciones deportivas y detalles topográficos como líneas de contorno.

### Vista de turismo {#touring-view}

![Estilo de mapa Vista de turismo](@site/static/img/map/map-style-touring.png)

Estilo de turismo con alto contraste y máximo detalle. Incluye todas las opciones del estilo predeterminado de OsmAnd mientras muestra tanto detalle como sea posible, en particular carreteras, caminos y otras formas de viajar. Distinción clara de tipos de carreteras en un *atlas de turismo*. Adecuado para día, noche y uso al aire libre.

### UniRS y LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Los estilos UniRS y LightRS son estilos de autor que renderizan la información básica del mapa pero en diferentes esquemas de color.  

- **Estilo UniRS**. Este estilo es una versión modificada del predeterminado para mejorar el contraste para caminos peatonales y de bicicleta. Retiene el esquema de colores clásico de Mapnik.  

    ![Estilo de mapa LightRS](@site/static/img/map/map-style-lightrs.png)

- **Estilo LightRS**. Este es un estilo de conducción simple que presenta un modo nocturno suave. Resalta las carreteras en un color naranja contrastante, atenúa los objetos secundarios del mapa y muestra características topográficas como líneas de contorno.

    ![Estilo de mapa UniRS](@site/static/img/map/map-style-unirs.png)

### Náutico {#nautical}

![Estilo de mapa náutico](@site/static/img/map/map-style-nautical.png)

Este es un estilo de navegación náutica que presenta boyas, faros, rutas fluviales, carriles marítimos, marcas, puertos y marcas náuticas. Lee más en la sección [Estilo de mapa náutico](../plugins/nautical-charts.md#nautical-map-style).

### Marino {#marine}

![Estilo de mapa marino](@site/static/img/map/map-style-marine.png)

Este es un estilo de mapa náutico avanzado con sectores de luz, características completas de faros y otras características marítimas detalladas para una navegación marina realista y precisa. Para más detalles lee la sección [Estilo de mapa marino](../plugins/nautical-charts.md#marine-map-style).

### Invierno y Esquí {#winter-and-ski}

![Estilo de mapa Invierno y Esquí](@site/static/img/map/map-style-winter-ski.png)

Este es un estilo para deportes de esquí que describe las pistas, elevadores y senderos de esquí de fondo, así como oscurece objetos secundarios del mapa. El **estilo Invierno y Esquí** está diseñado para ayudarte con la navegación en deportes de invierno.  

Puedes ver las pendientes de esquí y otros detalles como la dificultad de las pendientes y marcadores de elevadores. Los beneficios clave incluyen la visualización conveniente de pendientes, elevadores y otras características de esquí. Menos de los objetos secundarios distractores del mapa. Lee más en el artículo [Mapas de esquí](../plugins/ski-maps.md).

### Topo {#topo}

![Estilo de mapa Topo](@site/static/img/map/map-style-topo.png)

Este estilo está diseñado para senderismo, acampada y ciclismo en la naturaleza. Presenta carreteras y características naturales contrastantes, diferentes tipos de senderos, opciones extendidas de líneas de contorno y detalles adicionales. Es legible al aire libre. La configuración *Integridad de superficie* te permite distinguir la calidad de la carretera.

### OSM-carto {#osm-carto}

![Estilo de mapa OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Este estilo imita el estilo web predeterminado de [OpenStreetMap](https://www.openstreetmap.org/). El código fuente de la versión web está disponible en [Github](https://github.com/gravitystorm/openstreetmap-carto), el código de OsmAnd está disponible en [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Desierto {#desert}

![Estilo de mapa Desierto](@site/static/img/map/map-style-desert.png)

Diseñado para desiertos y otras regiones escasamente pobladas, ofreciendo información de mapa más detallada.

### Fuera de carretera {#offroad}

![Estilo de mapa Fuera de carretera](@site/static/img/map/map-style-offroad.png)

Diseñado para navegación fuera de carretera, este estilo se basa en el diseño de mapa [Topo](#topo) y funciona bien con imágenes satelitales como fondo. Presenta carreteras principales más delgadas para resaltar caminos, pistas, rutas de bicicleta y otros senderos fuera de carretera, lo que lo hace ideal para explorar rutas sin pavimentar en áreas rurales o remotas.

### Motocicleta de nieve {#snowmobile}

![Estilo de mapa Motocicleta de nieve](@site/static/img/map/map-style-snowmobile.png)

Adaptado para navegación en motocicleta de nieve, este estilo resalta caminos, carreteras y pistas amigables para motocicleta de nieve. Resalta caminos especializados en regiones nevadas, ofreciendo navegación clara a través de terrenos cubiertos de nieve donde las carreteras estándar pueden no estar disponibles. 


## Estilo de mapa personalizado {#custom-map-style}

Si tienes un estilo de mapa personalizado personal o de terceros creado según la [Especificación](../../technical/osmand-file-formats/osmand-rendering-style.md), puedes instalarlo en tu dispositivo de estas maneras:

- Copia el archivo `.render.xml` a tu dispositivo y ábrelo con OsmAnd.
- Usa los [diálogos estándar de importación/exportación](../personal/import-export.md) para exportar o importar estilos de renderizado. Si creas un paquete `.osf`, funciona como un plugin que puedes compartir con otros.
- Después de la instalación, puedes seleccionar el estilo de mapa desde el menú.

También puedes navegar ejemplos de estilos de mapa personalizados creados por otros usuarios. Una lista de estilos comunitarios disponibles públicamente se proporciona [aquí](../troubleshooting/resources.md#map-styles).


## Artículos relacionados {#related-articles}

- [Configurar mapa](../map/configure-map-menu.md)
- [Mapas vectoriales](../map/vector-maps.md)
- [Recursos y personalizaciones](../troubleshooting/resources.md)