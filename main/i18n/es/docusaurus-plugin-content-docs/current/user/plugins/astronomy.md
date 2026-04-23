---
source-hash: 37ed6a71b4e99bf1a605fa8103c14f11df87444fb843f17ab31a7d5ea498a31e
sidebar_position: 3
title:  Astronomy
unlistead: true
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

<InfoAndroidOnly/>

:::info
**Astronomía** está actualmente en **beta**.
:::

## Resumen {#overview}

:::tip Compra
El plugin de Astronomía es una [función de pago](../purchases/index.md).  
:::

El plugin de Astronomía muestra una superposición del cielo con estrellas, constelaciones, el Sol, la Luna y planetas directamente en el mapa. Utiliza un catálogo celeste sin conexión para calcular y mostrar las posiciones actuales y futuras de los objetos celestes. El plugin también permite a los usuarios explorar el cielo nocturno, identificar objetos y planificar observaciones viendo sus trayectorias a través del cielo.

El plugin funciona completamente sin conexión utilizando catálogos de estrellas integrados, lo que permite la exploración del cielo incluso sin una conexión a internet.


## Parámetros de configuración requeridos {#required-setup-parameters}
  
Los siguientes ajustes son necesarios para mostrar la superposición de Astronomía:

1. Habilite el plugin [**Astronomía**](../plugins/index.md#enable--disable) desde la sección de *Plugins* del *Menú principal*
2. Use **<Translate android="true" ids="shared_string_menu,star_map"/>** para abrir la pantalla dedicada con el cielo estrellado, ajustes y controles de tiempo.
3. Seleccione **hora y fecha** usando los controles en la pantalla del Mapa estelar.
4. Ajuste lo que se muestra en el Mapa estelar usando [**<Translate android="true" ids="astro_configure_view"/>**](#configure-view) — por ejemplo, active/desactive objetos visibles y ayudas de renderizado.
5. Toque el botón **Cerrar (X)** en la parte superior de la pantalla del Mapa estelar para salir del Mapa estelar y regresar al mapa de la Tierra.

El plugin funciona con ambos motores de renderizado de mapa, pero ofrece el mejor rendimiento en modo OpenGL.

## Pantalla del mapa estelar {#star-map-screen}

**Ir a:** *Plugin habilitado → <Translate android="true" ids="shared_string_menu,star_map"/>* 

![Star map screen](@site/static/img/plugins/starwatcher/view_new_1.png)

La pantalla dedicada del **Mapa estelar** muestra un domo celeste interactivo con estrellas, constelaciones, planetas, trayectorias del Sol y la Luna. En la parte inferior de la pantalla, puede acceder a los siguientes controles: 
- [**Búsqueda**](#search) — abre la pantalla de Búsqueda donde puede buscar objetos celestes y explorar catálogos y categorías del cielo. 
- **Hora y fecha** — le permite cambiar la fecha y hora para observar el cielo en diferentes momentos del pasado o futuro. Esto es útil para planificar observaciones, rastrear el movimiento de objetos o aprender cómo cambia el cielo con el tiempo. Si establece una fecha/hora personalizada, el chip muestra la fecha y hora completa, y aparece un botón de restablecimiento junto a él para regresar a la hora actual del sistema.
- **<Translate android="true" ids="magnitude_filter"/>** — le permite limitar qué estrellas se muestran según su brillo. Use el deslizador para establecer el valor máximo de magnitud. Los valores más bajos muestran solo las estrellas más brillantes, mientras que los valores más altos revelan estrellas más tenues y objetos de cielo profundo. Esto ayuda a reducir el desorden visual o simular lo que es visible a simple vista.
- [**<Translate android="true" ids="astro_configure_view"/>**](#configure-view) — abre los ajustes de visualización que controlan cómo se muestran los objetos, trayectorias y líneas de referencia en el Mapa estelar.

La pantalla renderiza el hemisferio completo del cielo sobre su ubicación, alineado con la dirección de la brújula. El Mapa estelar se puede rotar manualmente arrastrando la pantalla. La rotación manual del Mapa estelar no afecta la orientación del mapa de la Tierra. El mapa de la Tierra siempre sigue el [modo de orientación del mapa](../map/interact-with-map.md#map-orientation-modes) seleccionado en sus ajustes. Toque los objetos celestes para obtener detalles como magnitud, horas de salida/puesta o trayectorias.

El Mapa estelar también puede alinearse con la orientación de su dispositivo cuando el modo brújula está habilitado. En este modo, el cielo rota según los sensores de acelerómetro y brújula del dispositivo, lo que le permite explorar el cielo moviendo físicamente su teléfono.


## Menú contextual {#context-menu}

![Context Menu](@site/static/img/plugins/starwatcher/context_menu_view.png)

El **Menú contextual** proporciona información detallada sobre los objetos celestes y herramientas para observarlos. Se abre cuando toca un objeto celeste en el Mapa estelar.

Cuando se selecciona un objeto, se resalta en el Mapa estelar con un marcador de círculo rojo. Su movimiento diario también se visualiza mediante un anillo horario (00–23), que muestra dónde aparecerá el objeto en el cielo en cada hora del día local y la dirección de su movimiento.

El Menú contextual aparece en la parte inferior de la pantalla y contiene información del objeto, acciones rápidas y pestañas para explorar la visibilidad del objeto y el horario de observación.

### Información del objeto {#object-information}

![Object Information](@site/static/img/plugins/starwatcher/object_view_new.png) ![Object Information](@site/static/img/plugins/starwatcher/object_view_2.png)

La sección superior del Menú contextual muestra el nombre y la clasificación del objeto. Debajo del nombre, se muestra el tipo de objeto y su constelación o grupo principal. Por ejemplo:
- **Beta Ursae Minoris** — Estrella • Osa Menor
- **<Translate android="true" ids="astro_name_moon"/>** — Satélite • Tierra
- **<Translate android="true" ids="astro_name_jupiter"/>** — Planeta • Sistema solar

Bloques de información rápida muestran parámetros clave de observación:  
- <Translate android="true" ids="astro_rise"/> – la hora en que el objeto sale por encima del horizonte.
- <Translate android="true" ids="astro_set"/> – la hora en que el objeto se pone por debajo del horizonte.
- <Translate android="true" ids="shared_string_azimuth"/> – la dirección del objeto respecto al norte (0°–360°).
- <Translate android="true" ids="altitude"/> – la altura del objeto por encima del horizonte.
- <Translate android="true" ids="shared_string_magnitude"/> – el brillo del objeto tal como se ve desde la Tierra. 

Estos valores se actualizan dinámicamente según la hora seleccionada y la ubicación del usuario.

Debajo de los bloques de información rápida, el menú también puede incluir información adicional y recursos sobre el objeto:
- <Translate android="true" ids="astro_offline_knowledge_base_title"/> – Permite descargar una base de datos extendida con artículos de Wikipedia y catálogos de cielo profundo para uso sin conexión. Después de descargar, la información detallada sobre objetos celestes se puede ver directamente en la aplicación sin una conexión a internet.
- <Translate android="true" ids="read_on_wiki"/> – Abre el artículo de Wikipedia del objeto en el navegador.
- <Translate android="true" ids="astro_designations"/> – Muestra nombres alternativos e identificadores de catálogo para el objeto (por ejemplo, HD, HIP, NGC). Esta sección está disponible para objetos que tienen entradas en catálogos, como estrellas y objetos de cielo profundo. Si el objeto no tiene un nombre común, una de estas designaciones se usa como nombre principal.
- <Translate android="true" ids="online_photos"/> – Muestra fotos disponibles relacionadas con el objeto celeste seleccionado.

### Acciones {#actions}

Debajo de la información del objeto, el Menú contextual proporciona varias acciones para interactuar con el objeto celeste seleccionado:
- **<Translate android="true" ids="shared_string_save"/>** – Agrega el objeto a su lista de Favoritos para un acceso rápido.
- **<Translate android="true" ids="astro_locate"/>** – Centra el objeto seleccionado en el Mapa estelar.
- **<Translate android="true" ids="astro_direction"/>** – Muestra la dirección al objeto en el mapa, ayudándole a orientarse mientras observa el cielo.
- **<Translate android="true" ids="astro_path"/>** – Muestra la trayectoria diaria del objeto a través del cielo, permitiéndole ver cómo se mueve durante el día.

### Gráfico de visibilidad {#visibility-graph}

![Visibility Graph](@site/static/img/plugins/starwatcher/visibility_new.png)

La pestaña **Visibilidad** muestra cómo se mueve el objeto seleccionado a través del cielo durante un período de 24 horas.

El gráfico muestra la altitud del objeto por encima del horizonte con el tiempo.

- El eje horizontal representa el tiempo desde las 12:00 hasta las 12:00 del día siguiente.
- El eje vertical representa la altitud desde −30° hasta +90°.

La curva coloreada muestra la altitud del objeto a lo largo del día.

El fondo del gráfico representa el estado del cielo y cambia dependiendo de la posición del Sol. Esto ayuda a identificar cuándo son posibles las observaciones.

Los colores representan diferentes condiciones del cielo:  
- azul claro — día
- azul más oscuro — crepúsculo
- azul oscuro / negro — noche

El color de la trayectoria del objeto también refleja su altitud:  
- amarillo – alto en el cielo (mejor visibilidad)
- naranja – altitud media
- rojo – cerca del horizonte
- púrpura – por debajo del horizonte (no visible)

Un indicador móvil le permite explorar la posición del objeto en diferentes momentos. Cuando se mueve el indicador, se actualizan la hora actual, la altitud y los valores de azimut. El valor de azimut también incluye la dirección de la brújula correspondiente (por ejemplo, 354° Az (N)).

Debajo del gráfico, se muestran eventos importantes de observación: 
- **<Translate android="true" ids="astro_rise"/>** – cuando el objeto sale por encima del horizonte.
- **<Translate android="true" ids="astro_culmination"/>** – cuando el objeto alcanza su altitud máxima.
- **<Translate android="true" ids="astro_set"/>** – cuando el objeto se pone por debajo del horizonte. Si el objeto nunca sale o nunca se pone, los valores correspondientes se ocultan.

El gráfico se abre con el indicador posicionado en la hora actual del sistema. La ubicación utilizada para los cálculos se muestra debajo del gráfico. La ubicación se muestra como un nombre de ciudad.

### Horario de observación {#actions}

![Observation Schedule](@site/static/img/plugins/starwatcher/schedule_new.png)

La pestaña **Horario** muestra la visibilidad del objeto seleccionado para la semana actual. Cada fila representa un día e incluye:  
- el día de la semana
- la fecha
- hora de salida
- hora de puesta. Si la hora de puesta ocurre al día siguiente, se marca con ⁺¹
- un pequeño gráfico de visibilidad para ese día

El mini gráfico muestra cuándo el objeto es visible durante el día y cómo cambia su altitud. La sección coloreada de la barra representa el período en que el objeto está por encima del horizonte. El mini gráfico representa el rango de tiempo desde las 00:00 hasta las 23:59 para el día seleccionado.

Puede navegar entre semanas usando los botones de flecha en el encabezado del Horario. El botón de calendario le permite regresar a la semana actual.

<!--
## Celestial Object Info {#celestial-object-info}

![Object info popup](@site/static/img/plugins/starwatcher/object-info_new.png)

Tap any **star, planet, constellation, or Sun/Moon** on the **Star map screen** or **map overlay** to view detailed information. Selected object  is highlighted on the Star map by a red circle marker, and its daily motion is visualized by an hour ring (00–23) showing where the object will be at each hour local time and the direction of movement.

**Displayed data:**
- **Azimuth**: Direction from North (0°-360°) where the object appears in the sky
- **Altitude**: Height above horizon (0° at horizon, 90° at zenith)
- **Magnitude**: Brightness scale (-26 for Sun to +6 for faint stars; lower = brighter)
- **Rise/Set times**: When the object rises above/sets below horizon
- **Distance** (planets): Average distance from Earth in AU/km

**Wikipedia integration**: Tap **"Wikipedia"** in the info popup to open the object's page in your browser (e.g. Sirius, Orion, Venus). Works offline for cached data, online for full articles.

**Long-press** celestial objects to **pin** them as map markers with live position updates, or **share** coordinates for group stargazing.

This feature helps identify objects in real sky, plan observations, and learn astronomy facts directly from OsmAnd.
-->

## Búsqueda de estrellas AR (modo cámara) {#ar-star-finding}

**Ir a:** *Plugin habilitado → <Translate android="true" ids="shared_string_menu,star_map"/> → Botón de cámara* 

La capa de **Astronomía** funciona con la **cámara del dispositivo** para habilitar la **observación de estrellas en Realidad Aumentada (AR)**. Apunte la cámara de su teléfono al cielo nocturno real y vea estrellas, planetas, constelaciones, Sol/Luna superpuestos en tiempo real.

**Cómo funciona la búsqueda de estrellas AR:**
- La vista de **cámara en vivo** muestra el cielo real con superposiciones astronómicas transparentes alineadas al horizonte/brújula.
- **Mueva la cámara** para escanear el cielo — los objetos se resaltan cuando aparecen en su campo de visión.
- **Toque los objetos resaltados** para ver azimut, altitud, magnitud, horas de salida/puesta y enlace a Wikipedia.
- Se requiere **calibración de brújula** para una alineación precisa (mueva el teléfono en forma de 8 si es necesario).

El modo AR utiliza sensores del dispositivo (giroscopio, acelerómetro y brújula) para alinear objetos celestes con el cielo real.

**Perfecto para:**
- Identificar estrellas/planetas tenues invisibles a simple vista.
- Localizar constelaciones moviendo el teléfono a través del cielo.
- Navegación en el cielo en tiempo real durante caminatas o acampadas.


## Configurar vista {#configure-view}

![Configure View](@site/static/img/plugins/starwatcher/half_state_new.png) ![Configure View](@site/static/img/plugins/starwatcher/full_state.png)

**<Translate android="true" ids="astro_configure_view"/>** le permite controlar cómo se muestra el Mapa estelar habilitando o deshabilitando modos visuales, objetos y ayudas de renderizado.

Para abrir Configurar vista, toque el botón Configurar vista en la esquina inferior derecha de la pantalla del Mapa estelar. El botón está representado por un icono de estilo capa (formas apiladas), que indica ajustes de visualización y capas. Configurar vista se abre en un *estado medio*, mostrando las opciones principales de visualización. Deslice el panel hacia arriba para expandirlo al *estado completo* y acceder a todos los ajustes disponibles. Para cerrar Configurar vista, deslice el panel hacia abajo una vez para regresar al estado medio, deslice hacia abajo nuevamente para cerrarlo completamente, o toque en cualquier lugar del mapa fuera del panel. También puede tocar el botón Cerrar (X) en la esquina superior derecha del panel.

### Modos y acciones {#modes-and-actions}

![Configure View](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Configure View](@site/static/img/plugins/starwatcher/red_filter_new.png)

Esta sección controla los modos principales de visualización del Mapa estelar.

- **<Translate android="true" ids="map_2d"/> / <Translate android="true" ids="map_3d"/>**. Cambia entre una vista de trayectoria celeste (2D), que muestra el cielo como un domo proyectado con trayectorias de objetos, y una vista de cielo estilo globo (3D) que representa la esfera celeste.
- **<Translate android="true" ids="shared_string_map"/>**. Habilita una vista adicional del mapa de la Tierra mostrada debajo del Mapa estelar, permitiéndole relacionar objetos celestes con sus alrededores geográficos reales.
- **<Translate android="true" ids="red_filter"/>**. Aplica un filtro de color rojo a toda la pantalla para reducir la contaminación lumínica y preservar la visión nocturna durante observaciones en cielos oscuros.

### Objetos visibles {#visible-objects}

![Configure View](@site/static/img/plugins/starwatcher/solar_system.png) ![Configure View](@site/static/img/plugins/starwatcher/constellations.png)

Esta sección le permite elegir qué tipos de objetos celestes se muestran en el Mapa estelar.

| Objeto | Descripción |
|-------|-------------|
| <Translate android="true" ids="astro_solar_system"/> | Muestra el Sol, la Luna y los planetas visibles. |
| <Translate android="true" ids="astro_constellations"/> | Muestra líneas y patrones de constelaciones formados por estrellas. |
| <Translate android="true" ids="astro_stars"/> | Muestra estrellas individuales visibles en el Mapa estelar. |
| <Translate android="true" ids="astro_nebulas"/> | Muestra objetos de nebulosa donde estén disponibles. |
| <Translate android="true" ids="astro_star_clusters"/> | Muestra cúmulos estelares como objetos celestes separados. |
| <Translate android="true" ids="astro_deep_sky"/> | Activa/desactiva objetos de cielo profundo como galaxias, cúmulos de galaxias y agujeros negros. |

### Opciones de visualización personal {#personal-display-options}

Las **opciones de visualización personal** controlan ayudas visuales adicionales relacionadas con el enfoque del usuario y la observación.

| Opción | Descripción |
|-------|-------------|
| <Translate android="true" ids="astro_direction"/> | Muestra un indicador direccional para ayudar a orientar su vista. |
| <Translate android="true" ids="astro_daily_path"/> | Muestra la trayectoria diaria de objetos celestes seleccionados a través del cielo. |
| <Translate android="true" ids="shared_string_favorites"/> | Resalta o muestra objetos marcados como favoritos. |

### Ayudas de renderizado {#rendering-aids}

Las **ayudas de renderizado** agregan líneas de referencia y cuadrículas para ayudar a orientar el Mapa estelar.

| Ayuda | Descripción |
|-------|-------------|
| <Translate android="true" ids="azimuthal_grid"/> | Agrega una cuadrícula basada en azimut para la orientación horizontal del cielo. |
| <Translate android="true" ids="meridian_line"/> | Muestra la línea de meridiano que cruza el cielo de norte a sur. |
| <Translate android="true" ids="equatorial_grid"/> | Muestra la cuadrícula de coordenadas ecuatoriales celestes. |
| <Translate android="true" ids="ecliptic_line"/> | Muestra la línea eclíptica que representa la trayectoria aparente del Sol. |
| <Translate android="true" ids="equator_line"/> | Muestra la proyección ecuatorial de la Tierra en la esfera celeste, ayudando a visualizar la rotación de la Tierra relativa al cielo. |
| <Translate android="true" ids="galactic_line"/> | Muestra el plano de la galaxia Vía Láctea a través del cielo, indicando la dirección principal del disco galáctico. |

<!-- 
## Astronomy Settings

*Main Menu → Plugins → Star map → ⚙️ button*

Choose visible layers and objects

### Star Layers

All astronomical data appears as map overlays, visible at zoom scales 5-15. Layers project the celestial sphere onto the flat map.

| Layer | Description |
|-------|-------------|
| Stars | Bright stars (up to magnitude 4-6) with labels and constellation lines |
| Constellations | Connects stars into familiar patterns like Orion or Big Dipper |
| Planets | Positions and daily paths for Mercury-Venus-Mars-Jupiter-Saturn (colored icons) |
| Sun & Moon | Arcs showing rise/set times and illumination phase |
| Horizon | Line separating visible sky from ground, with cardinal directions |

-->

## Búsqueda {#search}

![Search](@site/static/img/plugins/starwatcher/explore_screen.png)

La función de **Búsqueda** en el plugin de Astronomía le permite encontrar objetos celestes, explorar categorías del cielo y acceder a datos de observación. Para abrir Búsqueda, toque el botón de Búsqueda en el Mapa estelar. Esto abre la pantalla de Búsqueda, que proporciona varias secciones para descubrir y organizar objetos celestes. La pantalla de Búsqueda incluye las siguientes secciones:

**1. Observar ahora**

La sección Observar ahora resalta objetos celestes que son visibles en este momento o esta noche. Esta sección actúa como una herramienta de recomendación, mostrando objetos que son más adecuados para la observación según su ubicación y hora actual.

**2. Categorías**

La sección Categorías le permite explorar objetos por tipo: Sistema solar, Constelaciones, Estrellas, Nebulosas, Cúmulos estelares y Cielo profundo. Cada categoría abre una lista de objetos con información clave: nombre del objeto, tipo o constelación, magnitud (brillo) y hora de salida o puesta (si aplica).

### Ordenación y filtros {#sorting-and-filters}

![Sorting](@site/static/img/plugins/starwatcher/sorting.png) ![Filters](@site/static/img/plugins/starwatcher/filters.png)

Toque la barra de búsqueda para abrir la interfaz completa de búsqueda. Puede refinar los resultados usando opciones de ordenación y filtrado.

Puede ordenar objetos por:  
- Nombre (A–Z o Z–A)
- <Translate android="true" ids="astro_sort_brightest_first"/>
- <Translate android="true" ids="astro_sort_faintest_first"/>
- <Translate android="true" ids="astro_sort_rises_soonest"/>
- <Translate android="true" ids="astro_sort_sets_soonest"/>

Los filtros ayudan a reducir los objetos visibles.

**Visibilidad**  
- <Translate android="true" ids="astro_filter_show_all"/> — muestra todos los objetos
- <Translate android="true" ids="astro_filter_visible_now"/> — objetos actualmente por encima del horizonte
- <Translate android="true" ids="astro_filter_visible_tonight"/> — objetos visibles entre la puesta y la salida del sol

**Filtros adicionales**  
- <Translate android="true" ids="astro_filter_naked_eye"/> — muestra solo objetos con magnitud ≤ 6

**Categorías**  
Puede filtrar resultados por tipo de objeto. Seleccionar categorías específicas desactiva automáticamente la opción Todo.

### Mis datos {#my-data}

![My Data](@site/static/img/plugins/starwatcher/my_data_new.png)

La sección Mis datos contiene objetos con los que el usuario ha interactuado. Esta sección incluye tres listas:

- <Translate android="true" ids="shared_string_favorites"/> — objetos guardados desde el menú contextual.
- <Translate android="true" ids="astro_daily_path"/> — objetos para los que está habilitada la trayectoria de movimiento diaria.
- <Translate android="true" ids="astro_directions"/> — objetos con un indicador de dirección activo en el Mapa estelar.

Seleccionar un elemento abre el menú contextual del objeto.

### Catálogos {#catalogs}

![Catalogs](@site/static/img/plugins/starwatcher/catalogs_new.png)

La sección Catálogos proporciona acceso a los catálogos astronómicos disponibles en el plugin de Astronomía.

Los catálogos contienen grandes colecciones de objetos celestes como estrellas, galaxias, nebulosas y cúmulos estelares. Al abrir un catálogo, se muestra una lista de objetos incluidos en ese catálogo.

## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales](../../user/map/vector-maps.md)