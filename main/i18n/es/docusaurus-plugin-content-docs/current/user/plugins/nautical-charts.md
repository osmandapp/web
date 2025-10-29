---
source-hash: 7ec189e5ebc7bca3eaaa66be6d97617ba61c06de602535da3e7881dac213769a
sidebar_position: 7
title:  Vista de mapa náutico
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Resumen {#overview}

:::info Función de pago
El plugin Vista de mapa náutico es una [función de pago](../purchases/index.md) de la aplicación OsmAnd.
:::

La Vista de mapa náutico es una representación gráfica detallada de océanos, mares, zonas costeras y ríos que le ayuda a navegar por el agua y a conocer las rutas populares, los obstáculos en su vía navegable, los puertos más cercanos, los fondeaderos y otros puntos de referencia importantes.

Un mapa náutico es un mapa topográfico muy detallado que ayuda a los patrones a navegar con una embarcación por un rumbo seleccionado en el agua. Es similar a un mapa de carreteras para quienes viajan en coche. A menudo llamado *'Carta'* por razones históricas, es una representación gráfica detallada de los océanos, mares, zonas costeras y ríos.

Los mapas náuticos son importantes para los navegantes profesionales y los aficionados que alquilan un barco para navegar por los canales de la ciudad. Los mapas les proporcionan diversa información, como rutas de navegación, luces de navegación, zonas de peligro, zonas en las que está permitido o prohibido navegar o atracar, etc.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Por qué es importante el tema náutico {#why-the-nautical-theme-matters}

Todos los navegantes profesionales están obligados a llevar mapas náuticos oficiales en sus barcos. Estos mapas son publicados por agencias autorizadas y son bastante caros. Las agencias invierten mucho en mantener los mapas actualizados. Publican actualizaciones periódicas de los mapas, pero como se necesita tiempo para verificar la información y procesar las actualizaciones, los mapas náuticos nunca están completamente al día.

Basados en los datos de [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), los mapas náuticos de OsmAnd son creados por las personas que los utilizan. Cada usuario del mapa puede contribuir al mismo añadiendo la información que considere importante y útil para sí mismo, haciendo así el mapa más detallado y preciso, ideal para la orientación o la planificación de rutas.


## Parámetros de configuración requeridos {#required-setup-parameters}

La siguiente configuración hace que el mapa náutico aparezca en la pantalla:

1. [Comprar](../plugins/index.md#purchase) y [Activar](../plugins/index.md#enable--disable) el plugin Vista de mapa náutico.  
2. [Descargar](#download-nautical-maps) los mapas náuticos.  
3. Establecer el estilo de mapa [Náutico](#set-nautical-map-style) para el [perfil](../personal/profiles.md) requerido.


### Establecer estilo de mapa náutico {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*  

![Tipo de mapa náutico en Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*  

![Tipo de mapa náutico en iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Utilice la [Leyenda del mapa](../../user/map-legend/nautical-map.md) como referencia de lo que se muestra en el mapa náutico. Explica los elementos simbólicos de un mapa náutico y sirve de referencia para ayudarle a navegar en caso de duda. Al establecer el estilo de mapa Náutico, puede obtener la mejor vista de los datos náuticos descargados y mostrados.

Para cambiar el estilo de mapa actual a Náutico, debe realizar los siguientes ajustes:

1. Seleccione el [perfil](../personal/profiles.md) requerido.  
2. Abra [Configurar mapa](../map/configure-map-menu.md).  
3. Desplácese hasta Estilo de mapa, ábralo y marque **Náutico**.


### Descargar mapas náuticos {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*  

![Vista de mapas del plugin náutico en Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*  

![Vista de mapas del plugin náutico en iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Para una presentación óptima, los mapas pueden adaptarse a las necesidades actuales: se pueden añadir marcas y símbolos con puntos de profundidad y, si es necesario, contornos. Por otro lado, los mapas estándar con información sobre aguas interiores, costeras y cercanas a la costa de una región concreta pueden ser un buen complemento a la información sobre vías navegables de un mapa náutico.

Cuando [descarga](../start-with/download-maps.md) un mapa náutico, aparecen en el mapa más detalles relacionados con la navegación en *Barco*. Algunos tipos de [mapas náuticos](../plugins/nautical-charts/#nautical-map-style) contienen detalles como:

- **Marcas y símbolos náuticos.**  
    Las marcas y símbolos contienen todas las marcas de navegación náutica tanto para la navegación interior como para la costera. Conocer estas marcas le ayudará a predecir la ubicación de rocas, obstrucciones, fondeaderos, boyas, corrientes, aguas profundas y someras, y los lados del canal, independientemente de la dirección, etc. Las marcas y símbolos se descargan una vez para todo el mundo.

- **Puntos de profundidad.**  
    Los datos náuticos de los paquetes de puntos de profundidad se representan mediante números que aparecen en el agua e indican la profundidad más somera en un lugar determinado. Los puntos de profundidad están disponibles para cada hemisferio y algunas regiones.

- **Contornos de profundidad.**  
    Los paquetes de contornos de profundidad le permiten definir zonas de igual profundidad. Están pensados para visualizar los cambios de relieve bajo la superficie del agua. Los contornos de profundidad pueden descargarse para determinadas zonas y desactivarse si no se necesitan.

:::info Números de profundidad
Todos los números de profundidad en los Mapas Náuticos se indican en metros.
:::


### Desactivar el estilo de mapa náutico {#disable-nautical-map-style}

Para eliminar Náutico y mostrar uno de los mapas convencionales de OsmAnd, realice una de las siguientes acciones:

- Desactive el plugin Náutico.
- Cambie el estilo del mapa a cualquier otro que no sea *Náutico*.

:::info NOTA
La desactivación del plugin Náutico no elimina los datos náuticos cargados, por lo que aunque cambie el método de renderizado de náutico a cualquier otro método cuando se descargan los datos náuticos, éstos permanecen visibles en el mapa.  
:::


## Perfil náutico {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Contornos de profundidad náuticos en Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Contornos de profundidad en iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

El mapa náutico puede incluirse en cualquier perfil. Sin embargo, es más valioso en el [perfil Barco](../personal/profiles.md) y especialmente en la [navegación en Barco](../navigation/routing/boat-navigation.md).


## Estilo de mapa náutico {#nautical-map-style}

El plugin Náutico de OsmAnd amplía los estilos de mapa de la capa vectorial con el estilo de mapa Náutico. Permite mostrar los datos del mapa según las reglas de los mapas náuticos, por ejemplo: zonas amarillas para tierra y bancos de arena, zonas azul claro para aguas poco profundas, etc. Para más información, consulte [Leyenda del mapa](../../user/map-legend/nautical-map.md).


### Detalle de luces {#light-detail}

Android Vaya a: *Menú → Configurar mapa → Estilo de mapa Náutico → Otros atributos del mapa → Detalle de luces*

iOS Vaya a: *Menú → Configurar mapa → Tipo de mapa Náutico → Detalles → Detalle de luces*

Esta opción muestra el nivel de información para las luces de navegación. Puede elegir cuán detalladas aparecen las características de la luz cerca de cada faro o baliza.

- **Simple** – muestra el nombre predeterminado de la marca marina y la característica de la luz.
- **Sectores** – muestra arcos de sector completos y detalles para todos los sectores de luz visibles.
- **Sector 1–5** – muestra detalles solo para un número de sector específico.
- **Pequeño** – utiliza un formato de etiqueta compacto para las características de la luz.
- **Solo nombre** – muestra solo el nombre de la marca marina sin datos de luz.
- **Omitir** – oculta toda la información de luces.


## Estilo de mapa marino {#marine-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marino en Android](@site/static/img/plugins/nautical-charts/marine_android.png)

Vaya a: *Menú* → *Configurar mapa* → *Estilo de mapa* → *Marino*

</TabItem>

<TabItem value="ios" label="iOS">

![Marino en iOS](@site/static/img/plugins/nautical-charts/marine_ios.png)

Vaya a: *Menú* → *Configurar mapa* → *Tipo de mapa* → *Marino*

</TabItem>

</Tabs>

Este estilo añade elementos visuales para la navegación marítima, incluidas luces de navegación con características de luz INT-1, que describen el tipo, color y ritmo de una señal de luz (por ejemplo, si parpadea, su color y el intervalo entre parpadeos), y luces sectoriales de color que indican la dirección y el color de la luz visible desde el mar.

En el estilo Marino, los sectores de luz se muestran alrededor de faros y balizas: blanco (mostrado en amarillo en el mapa) indica la dirección segura para la navegación, rojo marca áreas peligrosas o restringidas, y verde muestra direcciones auxiliares o laterales.

:::info
Para mostrar esta información, el plugin Náutico debe estar activado y debe descargarse el mapa World Seamarks (o World_seamarks_2.obf). La información no es para uso de navegación oficial.
:::


### Atributos del mapa {#map-attributes}
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Atributos en Android](@site/static/img/plugins/nautical-charts/marine_details_android.png)

Vaya a: *Menú* → *Configurar mapa* → *Estilo de mapa Marino* → *Otros atributos del mapa*

</TabItem>

<TabItem value="ios" label="iOS">

![Atributos en iOS](@site/static/img/plugins/nautical-charts/marine_details_ios.png)

Vaya a: *Menú* → *Configurar mapa* → *Tipo de mapa Marino* → *Detalles* → *Detalle de luces/Detalle del fondo marino*

Vaya a: *Menú* → *Configurar mapa* → *Tipo de mapa Marino* → Elija otras opciones

</TabItem>

</Tabs>

Después de activar el estilo de mapa Marino, puede ajustar con precisión elementos visuales adicionales. Estas opciones le permiten controlar cómo aparecen las ayudas a la navegación, los contornos de profundidad, los detalles del fondo marino y los colores en el mapa.

- **[Detalle de luces](../plugins/nautical-charts/#light-detail)**. Define cómo se muestra la información de luz de las marcas marinas. Opciones: **Predeterminado** (nombre completo con características de luz), *Pequeño* (formato compacto), *Solo nombre* (solo nombre de la luz) o *Omitir* (ocultar etiquetas).
- **[Detalle del fondo marino](../plugins/nautical-charts/#seabed-detail)**. Controla el nivel de información textual sobre el fondo marino. Opciones: Simple (información básica), Categoría (tipo de superficie), Todo (datos completos) o Omitir (sin texto).
- **Color del agua**. Establece el color base para las áreas de agua. Opciones: *Predeterminado, Azul, Blanco* o *Gris* — útil para ajustar la visibilidad y el contraste en diferentes modos de iluminación.
- **Color de la vía de agua**. Cambia el color de las vías de navegación y canales. Opciones: *Blanco, Más blanco, Gris, Verde* o *Amarillo* para mejorar la legibilidad según el fondo del mapa.
- **Estilo de llanura de marea**. Ajusta el color y la textura utilizados para las llanuras de marea. Opciones: *Verde claro, Verde oscuro, Humedal* o *Marea* — cada una resalta de manera diferente las zonas intermareales poco profundas.
- **Marcadores ENC**. Activar/Desactivar. Cuando está activado, muestra marcadores de Carta de Navegación Electrónica (ENC) como boyas, balizas y otras ayudas a la navegación.
- **Estilo de conchas**. Define cómo aparecen las conchas o características de la superficie del fondo en el fondo marino. Opciones: *Gris, Rocas, Piedras* o *Rojo*, dependiendo del estilo visual preferido.
- **Contornos de profundidad discontinuos**. Activar/Desactivar. Cuando está activado, muestra las líneas de contorno de profundidad como discontinuas, mejorando la legibilidad en áreas densas.
- **Esquema de color de profundidad**. Selecciona el esquema de color para las zonas de profundidad. Opciones: *PAPER* (colores tradicionales de cartas en papel) o *ECDIS* (paleta estándar del sistema de navegación electrónica).
- **Tamaño de sondas puntuales**. Establece el tamaño de fuente para los números de sondas puntuales (valores de profundidad). Opciones: *Predeterminado, 10, 12, 14* o *16* — valores más grandes mejoran la visibilidad en pantallas de alta resolución.
- **Distancia de sondas puntuales**. Controla con qué frecuencia aparecen las sondas de profundidad en el mapa. Opciones: *Predeterminado, 0, 5, 10, 15, 30, 60* o *120*, que determina el espaciado entre los puntos de profundidad mostrados.
- **Contorno de profundidad de seguridad**. Resalta la línea de contorno que marca el umbral de profundidad de seguridad. Opciones: *Apagado, 0 m, 1 m, 2 m, 3 m, 4 m, 5 m* o *10 m*. Útil para distinguir áreas de navegación seguras de zonas poco profundas.


## Datos náuticos adicionales {#additional-nautical-data}

### Puntos de profundidad {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Los [paquetes](../start-with/download-maps.md#overview) de puntos de profundidad están disponibles para Europa, el hemisferio norte y el hemisferio sur y son informativos. Los puntos de profundidad indican cambios en la topografía bajo la superficie del agua, indicando la profundidad más somera. Esto es necesario para la navegación en *Barco*. Después de la descarga, es necesario activar los [Contornos de profundidad](#depth-contours) para mostrarlo en el mapa.


### Contornos de profundidad {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*  

![Contornos de profundidad náuticos en Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Contornos de profundidad en iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Cuando se muestra un mapa náutico en la pantalla, puede ajustar lo que ve:

- Mostrar u ocultar los *Contornos de profundidad*.
- Establecer el nivel de detalle de la información del fondo marino: [*Ancho de línea* y *Esquema de color de línea*](../map/vector-maps.md#-nautical-depth).

:::info NOTA
Puede ayudar a la aplicación OsmAnd a aumentar la base de datos de contornos de profundidad añadiendo su información a través de [OpenSeaMap](https://map.openseamap.org/)
:::


## Artículos relacionados {#related-articles}

- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)

### Detalle del fondo marino {#seabed-detail}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*  

![Detalles del fondo marino](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *Menú → Configurar mapa → Estilo de mapa → Detalles → Detalle del fondo marino*

![Detalles del fondo marino](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Los datos del fondo marino contienen información sobre la vegetación y el material general de la superficie, como rocas, conchas, grava, coral, limo, etc. Debido a la clasificación internacional de los datos del fondo marino, existen opciones para mostrar dichos detalles en un mapa: *simple*, *categoría*, *todo* u *omitir*. Utilice la [leyenda del mapa de la zona del fondo marino](../map-legend/nautical-map.md#seabed-area) para obtener más información.

- **Simple** (*para la versión de Android*) - muestra los símbolos de las marcas marinas de acuerdo con la Ref. INT-1, indicando la naturaleza de la superficie del fondo marino.  
- **Categoría** - además del símbolo de la marca marina, también muestra la etiqueta de la marca marina correspondiente, indicando el material natural, o la categoría de algas y pastos marinos.
- **Todo** - además del símbolo, la etiqueta o la categoría de la marca marina, también muestra calificativos como fino, pegajoso, grueso, etc. Para los pastos y las algas marinas, muestra los datos marcados con las etiquetas *taxon* y *genus*.  
- **Omitir** - no muestra detalles del fondo marino.  

:::info NOTA
Para más detalles sobre la clasificación de los detalles de la superficie y las opciones de renderizado, consulte la [wiki de marcas marinas de OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::