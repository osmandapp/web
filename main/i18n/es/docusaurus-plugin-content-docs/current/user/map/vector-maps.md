---
source-hash: 26ecc10e593a10b425e7d1bc880124a223b29d77fca08040a2c47952e03d4203
sidebar_position: 5
title:  Mapas vectoriales 
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


## Vista general {#overview}

Los mapas vectoriales están pensados para ser utilizados como la fuente de datos de mapa por defecto para OsmAnd, por lo que **necesitas descargarlos en tu dispositivo**. Los mapas vectoriales admiten un gran número de estilos de mapa para diferentes actividades como ciclismo, senderismo, conducción en coche o moto de nieve, y otras.  

Cada estilo de mapa se puede personalizar para resaltar u ocultar objetos específicos, y para cambiar entre los modos diurno y nocturno. Los datos de los mapas vectoriales se pueden aumentar con datos vectoriales y mostrarse en el estilo de mapa por defecto, como la información de *Líneas de contorno*. Puedes *crear tu propio estilo de mapa de OsmAnd* para mostrar la información requerida.

Los mapas vectoriales representan datos espaciales, como carreteras, edificios, puntos y polígonos, utilizando geometría matemática almacenada en formato binario. Cada elemento (nodo, línea o polígono) se define por coordenadas y se renderiza dinámicamente según el nivel de zoom y el estilo de mapa.

Dado que los datos vectoriales no se almacenan como imágenes fijas, su apariencia, incluyendo color, ancho de línea, transparencia o patrón, se puede modificar fácilmente. Este enfoque permite un renderizado eficiente, bajo uso de memoria y escalado suave en cualquier nivel de zoom sin pérdida de calidad.

:::info note
Los polígonos muy pequeños pueden simplificarse o distorsionarse durante la generación de datos de mapa. Los objetos con un área menor a aproximadamente un metro cuadrado podrían no mostrarse. Para una visualización correcta, las características pequeñas deben mapearse como nodos individuales en lugar de polígonos.
:::


## Casos de uso {#use-cases}

Los estilos de mapa personalizables son una de las principales ventajas de OsmAnd. Puedes personalizar la visualización del mapa para adaptarla a ti y a tus aficiones, ajustar la visualización u ocultación de ciertos objetos del mapa, los tamaños y colores de estos objetos, y cambiar la escala de visualización de ciertos objetos.


## Renderizado de mapa {#map-rendering}

### Estilos de mapa {#map-styles}

OsmAnd proporciona varios estilos de mapa vectorial integrados optimizados para diferentes actividades. Además de los estilos predeterminados, puedes crear e instalar tu propio estilo de mapa personalizado basado en reglas de renderizado.

Para una descripción detallada de los estilos disponibles e instrucciones sobre cómo crear estilos personalizados, consulta el artículo [Estilos de mapa](../map/map-styles.md).

### Modo de mapa {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![Modo de mapa](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Modo de mapa](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

El mapa se puede mostrar en un tema claro u oscuro según el modo seleccionado de una lista de opciones. Por defecto y para todos los nuevos usuarios, el [estilo de mapa](#map-styles) se alinea con el tema elegido en la configuración del sistema de tu dispositivo.

- **<Translate android="true" ids="daynight_mode_day"/>**. Siempre muestra el mapa en un tema claro para una visibilidad diurna óptima.

- **<Translate android="true" ids="daynight_mode_night"/>**. Siempre muestra el mapa en un tema oscuro, ideal para condiciones nocturnas o de poca luz.

- **Amanecer / Atardecer**. Transita automáticamente entre los temas diurno y nocturno según las horas locales de amanecer y atardecer, que se detallan en esta pestaña en la aplicación.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Solo Android*). Utiliza el sensor de luz del dispositivo para cambiar automáticamente entre los temas claro y oscuro según los niveles de luz ambiental.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. La visualización del mapa se adapta al tema general de la aplicación, mostrando el modo diurno en el tema claro y el modo nocturno en el tema oscuro. 

### Estilo de carretera {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Configuraciones especiales para carreteras, donde puedes cambiar los colores para que coincidan con el atlas de carreteras o agregar carreteras de alto contraste o contornos audaces para las carreteras.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Estilo predeterminado para autopistas. Mira la [Leyenda del mapa](../map-legend/index.md).  
![Estilo de carretera de mapa predeterminado](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Estilo de atlas de carreteras alemán.  
![Estilo de carretera de mapa alemán](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Estilo de atlas de carreteras americano.  
![Estilo de carretera de mapa americano](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. El alto contraste de las carreteras.  
![Estilo de carretera de mapa de alto contraste](@site/static/img/map/map-road-style-high-contrast.png)
- **Pálido**. Colores menos contrastantes de las carreteras.  
![Estilo de carretera de mapa pálido](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Contorno audaz para las carreteras.  
![Estilo de carretera de mapa con contorno audaz](@site/static/img/map/map-road-style-bold-outline.png)

### Detalles {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">

  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*  

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Muestra polígonos, senderos, puntos y señales en el mapa a bajo zoom. Esto significa que puedes ver más detalles en el mapa con poca ampliación. Ten en cuenta que el renderizado en tu dispositivo puede no ser rápido.  
    ![Parámetro de mapa - Más detallado](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Muestra el tipo de superficie de la carretera. El color de la carretera te ayuda a entender cuál es la superficie de la carretera, como asfalto, hierba o arena. Consulta la [Leyenda del mapa](../map-legend/index.md).  
    ![Parámetro de mapa - Superficie de la carretera](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Indica la calidad de la carretera. Indica la suavidad (pendiente) de la carretera. Qué tan suaves son tus carreteras: buenas, malas, posiblemente terribles, etc. Mira la [Leyenda del mapa](../map-legend/index.md) para determinar la suavidad de tu carretera.  
    ![Parámetro de mapa - Suavidad de la carretera](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**.  Muestra la accesibilidad de la carretera: privada o permitida, solo para emergencias o carretera de peaje. Consulta la [Leyenda del mapa](../map-legend/index.md) para encontrar las carreteras disponibles.  
    ![Parámetro de mapa - Acceso a la carretera](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. La función [Zonas de Bajas Emisiones (ZBE)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) muestra bordes verdes y etiquetas "ZBE" en los mapas para áreas en ciudades donde el acceso está restringido para ciertos vehículos contaminantes. Las ZBE tienen como objetivo mejorar la calidad del aire limitando la entrada a vehículos que cumplen con estándares de emisiones específicos. El uso de esta función ayuda a los usuarios a evitar multas al identificar y navegar alrededor de estas zonas verdes, asegurando el cumplimiento de las regulaciones ambientales locales mientras viajan por los centros de las ciudades.  

    ![Parámetro de mapa - Zonas de bajas emisiones](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Diferentes categorías de edificios, como residenciales, industriales y comerciales, están codificadas por colores. Consulta la [Leyenda del mapa](../map-legend/index.md) para más detalles.  
    ![Parámetro de mapa - Edificios coloreados](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Muestra calles iluminadas y no iluminadas, así como vías subterráneas e iluminadas temporalmente. Consulta la [Leyenda del mapa](../map-legend/index.md) para detalles específicos.  
    ![Parámetro de mapa - Alumbrado público](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Diseñada para mapeadores, esta función muestra referencias, observaciones y comentarios de otros usuarios en el mapa.  
    ![Parámetro de mapa - Asistente de mapa](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Muestra las curvas de nivel de profundidad del mar. Necesitas instalar el [complemento Náutico](../plugins/nautical-charts) y descargar los mapas Náuticos.  
    ![Parámetro de mapa - Curvas de profundidad](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Muestra un borde verde y etiquetas "RN" para el [Territorio de reserva natural](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Resalta las áreas protegidas con un borde verde y la etiqueta "RN" para las zonas de conservación de la vida silvestre.  

    &nbsp;&nbsp;&nbsp;![Parámetro de mapa - Reserva natural](@site/static/img/map/nature-reserve.png)

### Ocultar {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Para mejorar la visibilidad del mapa, es posible que necesites ocultar ciertos objetos. Por ejemplo, puedes ocultar el agua cuando usas los [mapas en línea de Satélite con la capa de Subcapa](../map/raster-maps.md#layers).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Oculta los límites regionales dentro de los países, pero los límites estatales son visibles.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Oculta todos los polígonos de objetos naturales, función especial para la [capa de Subcapa/Superposición](../map/raster-maps.md#layers).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Oculta todos los polígonos de edificios.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Oculta todos los polígonos de agua (mares, lagos, embalses, etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Oculta los números de las casas en el mapa.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Oculta los objetos propuestos - aquellos objetos que están planeados para construcción pero solo tienen un proyecto (carreteras proyectadas, intersecciones, edificios y otros).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Oculta los iconos de PDI del mapa. Sin embargo, las etiquetas de estos PDI seguirán apareciendo en el mapa.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Oculta las etiquetas de PDI del mapa. Sin embargo, los iconos de PDI seguirán apareciendo en el mapa.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Oculta todos los objetos subterráneos, como túneles, pasajes, pisos, etc. Especial para limpiar los mapas de las ciudades de objetos no útiles.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Oculta todos los objetos sobre el suelo. Especial para ver solo objetos subterráneos como túneles, pasajes, etc.

### Transporte {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>  

Al navegar por las ciudades, necesitas una vista más contrastada del transporte público y las paradas. Puedes tocar una parada de transporte público y seleccionar una de las rutas o paradas de la lista. Las rutas de tren también se muestran en esta configuración.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Muestra las paradas de transporte público.  
    ![Paradas de transporte en el mapa](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Muestra las rutas de autobús, trolebús y lanzadera.  
    ![Autobús de transporte en el mapa](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Muestra las rutas de tranvía y tren.  
    ![Tranvía de transporte en el mapa](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Muestra las rutas subterráneas.  
    ![Metro de transporte en el mapa](@site/static/img/map/map-transport-subway.png)


## Renderizado de texto {#text-rendering}

### Lupa del mapa {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Puedes elegir esta configuración manteniendo presionado el botón "+" o "-" en la pantalla o:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Puedes elegir esta configuración manteniendo presionado el botón "+" o "-" en la pantalla o:  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Esta configuración ayuda a cambiar la ampliación del mapa. Es aplicable para mapas ráster y vectoriales. Para los mapas ráster aplica un efecto de ampliación, por lo que las etiquetas de texto se ven más grandes o más pequeñas. Para los mapas vectoriales hace que el mapa se vea más o menos detallado, si lo configuras en un valor bajo, el mapa se verá ruidoso/lento.  

- **75%**  
    ![Lupa del mapa 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**  
    ![Lupa del mapa 200%](@site/static/img/map/map-magnifier-200.png)

### Tamaño del texto {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>  

- **100%**  
    ![Tamaño del texto del mapa 100%](@site/static/img/map/map-text-size-100.png)

- **200%**  
    ![Tamaño del texto del mapa 200%](@site/static/img/map/map-text-size-200.png)

### Idioma del mapa {#map-language}

La opción **Idioma del mapa** configura la ortografía de los nombres en el mapa de OsmAnd para los niveles de zoom del 7 al 20, inclusive. Para los niveles de zoom del 2 al 6, los nombres se muestran en el idioma establecido para OsmAnd en el menú de configuración del sistema (ver sección *[Cómo cambiar el idioma de la aplicación](../start-with/first-steps.md#how-to-change-app-language)*).  

Si los nombres en el mapa no están traducidos al idioma requerido por la comunidad de OSM, puedes usar [nombres transliterados](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) o *<Translate ios="true" ids="translit_names"/>* (iOS) interruptor.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Nombres locales**   
    ![Idioma del mapa nombres locales](@site/static/img/map/map-language-local-names_2.png)

- **Idioma preferido** (ucraniano)   
    ![Idioma del mapa ucraniano](@site/static/img/map/map-language-urkanian_2.png)

- **Usar nombre latino si falta**   
    ![Idioma del mapa transliterado](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Nombres locales**    
    ![Idioma del mapa nombres locales](@site/static/img/map/map-language-local-names_2.png)

- **Idioma preferido** (ucraniano)  
    ![Idioma del mapa ucraniano](@site/static/img/map/map-language-urkanian_2.png)

- **Mostrar nombres locales**  (añade una segunda etiqueta si el nombre local es diferente)  
    ![Idioma del mapa local](@site/static/img/map/map-language-show-local_2.png)

- **Transliterar nombres**    
    ![Idioma del mapa transliterado](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

</Tabs>  

### Fuentes del mapa (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Fuentes del mapa versión Android](@site/static/img/map/map_fonts.png) ![Versión de fuentes del mapa](@site/static/img/map/map_fonts_1.png)

Para mapas en chino simplificado/tradicional, japonés y coreano, pueden aparecer caracteres o símbolos incorrectos (como cuadrados) si tu dispositivo carece de las fuentes necesarias. Este problema ocurre al renderizar nombres locales y se puede resolver descargando las fuentes requeridas a través de OsmAnd.  

Algunos problemas de fuentes relacionados han sido documentados en GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## Renderizado de topografía {#topography-rendering}

### * Líneas de contorno {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Estilo de mapa de líneas de contorno](@site/static/img/map/contour_lines.png)

Las líneas de contorno en OsmAnd se muestran como líneas de elevación en los mapas vectoriales. Para usarlas, primero debes habilitar el [complemento de Topografía](../plugins/topography.md), descargar los datos regionales necesarios y configurar la visualización. Esta función no está habilitada por defecto y requiere una [compra](../purchases/index.md).  

Las líneas de contorno son compatibles con todos los estilos de mapa y se pueden personalizar a través del [menú de Líneas de contorno](../plugins/topography.md#contour-lines). Para más detalles, visita el artículo del [complemento de Topografía](../plugins/topography.md).

### * Profundidad náutica {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Las líneas de contorno de profundidad náutica representan áreas de igual profundidad, ayudando a visualizar los cambios de la topografía submarina. Esta función está disponible en todos los estilos y modos de mapa y se puede ajustar con o sin el complemento de vista de mapa náutico habilitado.  

Para más detalles sobre la vista de mapa náutico, visita la [página del complemento de Mapa Náutico](../plugins/nautical-charts).

### Edificios 3D {#3d-buildings}

<InfoAndroidOnly/> 

![Edificios 3D](@site/static/img/map/3d_buildings_1_new.png) ![Edificios 3D](@site/static/img/map/3d_buildings_2.png) 

La función **Edificios 3D** muestra los edificios como modelos volumétricos 3D en lugar de formas planas. Los edificios se generan a partir de [datos de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Simple_3D_Buildings), utilizando información de altura de etiquetas como `height` y `building:levels` cuando está disponible. Los edificios 3D se muestran solo en niveles de zoom más altos (vista de ciudad/calle), donde se pueden mostrar edificios individuales.  
Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Edificios 3D*  
Usa el interruptor principal para habilitar o deshabilitar el renderizado 3D de edificios. Para ver los edificios en 3D, inclina el mapa colocando dos dedos en la pantalla y deslizando hacia arriba.

Actualmente, esta opción está disponible solo cuando el [complemento de desarrollo de OsmAnd](../plugins/development.md) está habilitado.  
Ir a: *<Translate android="true" ids="shared_string_menu,plugin_settings,debugging_and_development"/>*

Las configuraciones de edificios 3D se dividen en dos grupos: **Apariencia** y **Rendimiento**.

**Apariencia: Color**. Controla el color de los edificios 3D. Cuando tocas Color, OsmAnd abre una pantalla de vista previa separada donde puedes ver el mapa mientras ajustas la configuración.
- **Estilo de mapa** — usa el color predeterminado de edificio del estilo de mapa seleccionado actualmente.
- **Personalizado** — te permite establecer un color de edificio personalizado por separado para el modo Día / Noche.

:::tip Compra
La personalización de color de Edificios 3D es una [función de pago](../purchases/index.md).  
:::

Si no se han comprado colores personalizados, verás un estado vacío con una descripción breve y un botón Obtener. Si Personalizado está disponible, puedes cambiar entre Día y Noche, elegir un color de la paleta (o abrir Todos los colores), luego tocar Aplicar.

**Apariencia: Visibilidad**. Controla la opacidad (transparencia) de los edificios 3D. Usa el control deslizante para establecer la visibilidad como un porcentaje. Valores más bajos hacen que los edificios sean más transparentes y ayudan a que las carreteras/etiquetas sigan siendo legibles. Valores más altos hacen que los edificios se vean más sólidos y visualmente dominantes. Tocar Visibilidad también abre una pantalla de vista previa separada con el control deslizante.

En las pantallas de vista previa (Color / Visibilidad), puedes usar Restablecer a predeterminado desde la barra de la aplicación para restaurar el valor predeterminado.

**Rendimiento: Nivel de detalle**. Controla qué tan detallada es la geometría de los edificios 3D:
- Bajo (predeterminado) — geometría más simple.
- Alto — geometría más detallada.

**Rendimiento: Distancia de vista**. Controla qué tan lejos de la cámara se renderizan los edificios 3D:
- Cerca (predeterminado) — renderiza edificios más cerca de ti.
- Lejos — renderiza edificios desde una distancia mayor.

Ambas opciones de rendimiento usan un interruptor de dos posiciones directamente en la pantalla de configuraciones de edificios 3D.


## Configuraciones adicionales {#additional-settings}

### Mostrar bordes {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Esta función te permite alternar la visibilidad de los bordes de los mapas previamente descargados de la lista de mapas disponibles. Su propósito principal es ayudar a despejar el mapa principal ocultando los contornos de los mapas descargados, lo cual es especialmente útil si tienes muchos mapas instalados.  

Por defecto, los bordes del mapa aparecerán cuando hagas zoom hasta el nivel 7 y desaparecerán en el nivel de zoom 3 e inferiores.

:::tip Color Mostrar bordes de mapas descargados
Cuando la función *Mostrar bordes de mapas descargados* está habilitada, los mapas descargados se colorean de **Verde** tanto en la versión de Android como en la de iOS de OsmAnd.  

En Android, los mapas archivados se muestran en **Naranja**. En iOS, los mapas que se pueden actualizar también se marcan en **Naranja**.
:::

### Cuadrícula de coordenadas {#coordinates-grid}

:::tip Compra
La personalización de color de la Cuadrícula de coordenadas es una [función de pago](../purchases/index.md).  
:::

Ir a: *Menú → Configurar mapa → Mostrar → Cuadrícula de coordenadas*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú de cuadrícula de coordenadas](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>

La función **Cuadrícula de coordenadas** superpone una cuadrícula de referencia en el mapa, permitiéndote visualizar las líneas de latitud y longitud basadas en diferentes sistemas de coordenadas. Esta función es útil para la referencia de ubicación precisa y la navegación geoespacial. 

Puedes configurar las siguientes opciones:
- **Niveles de zoom:** establece los niveles de zoom mínimo y máximo (2 - 22) en los que se muestra la cuadrícula.
- **Posición de las etiquetas:** elige entre *Bordes* (predeterminado) o *Centro* para las etiquetas de la cuadrícula.
- **Color de la cuadrícula:** disponible por separado para el modo Día/Noche. 
- **Formato de coordenadas:** selecciona de varios formatos disponibles (ver lista a continuación).

***Formatos de coordenadas disponibles:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Grados, Minutos, Segundos)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Grados Decimales - formato por defecto de WGS84)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Grados, Minutos Decimales)
- **UTM** (EPSG:6387, Universal Transverse Mercator - sistema de cuadrícula basado en zonas). El nivel de zoom mínimo es 9, solo se muestra una zona UTM a la vez, ya que las zonas están separadas por meridianos cada 6°
- **MGRS** (Sistema de Referencia de Cuadrícula Militar)

Por defecto, la aplicación utiliza el formato de coordenadas seleccionado en los [Ajustes generales](../personal/profiles.md#units--formats), pero puedes cambiarlo directamente en este menú.

[Acción rápida](../widgets/quick-action.md#overview): También puedes agregar un interruptor rápido *Mostrar/Ocultar Cuadrícula de coordenadas* al grupo [Configurar mapa](../widgets/quick-action.md#configure-map) para un acceso rápido.


## Rutas {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Rutas de mapa - rutas de ciclismo](@site/static/img/map/map-routes-cycle-routes.png)  ![Rutas de mapa - red de senderismo](@site/static/img/map/map-routes-hiking-network.png)

Una ruta es un camino predeterminado que debe seguirse para llegar a un destino específico. Una ruta puede optimizarse para diferentes tipos de viaje, como ciclismo, senderismo, carrera, transporte público y otros. Puedes leer más sobre las rutas y sus tipos en el [artículo de Rutas](../map/routes.md).


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../map/interact-with-map.md)
- [Configurar mapa](../map/configure-map-menu.md)
- [Estilos de mapa](../map/map-styles.md)
- [Rutas](../map/routes.md)
- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)