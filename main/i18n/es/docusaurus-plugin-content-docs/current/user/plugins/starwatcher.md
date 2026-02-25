---
source-hash: 58426179267520e49fd40594a65a229ede4b84aecbc82387219ff0e5c619428f
sidebar_position: 14
title:  Star Watcher
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

<InfoIncompleteArticle/>

<InfoAndroidOnly/>

:::info
**Star Watcher** se encuentra actualmente en **beta**.
:::

## Resumen {#overview}

El plugin Star Watcher muestra la superposición del cielo estrellado en el mapa con estrellas, constelaciones, Sol, Luna y planetas. Las posiciones y trayectorias del Sol, Luna, planetas y estrellas principales se muestran en el mapa.


## Parámetros de configuración requeridos {#required-setup-parameters}
  
Los siguientes ajustes son necesarios para mostrar la superposición de Star Watcher:

1. Habilite el plugin [**Star Watcher**](../plugins/index.md#enable--disable) desde la sección *Plugins* del *Menú principal*
2. Use **Menú → Mapa estelar** para abrir la pantalla dedicada con el cielo estrellado, ajustes y controles de tiempo.
3. Seleccione **hora y fecha** usando los controles en la pantalla del Mapa estelar.
4. Ajuste lo que se muestra en el Mapa estelar usando [**Configurar vista**](#configure-view) — por ejemplo, active o desactive objetos visibles y ayudas de renderizado.
5. Toque el botón **Cerrar (X)** en la parte superior de la pantalla del Mapa estelar para salir del Mapa estelar y regresar al mapa de la Tierra.

El plugin funciona con ambos motores de renderizado de mapa, pero ofrece el mejor rendimiento en modo OpenGL.

## Pantalla de mapa estelar {#star-map-screen}

**Ir a:** *Plugin habilitado → Menú → Mapa estelar* 

![Pantalla de mapa estelar](@site/static/img/plugins/starwatcher/view_new.png)

La pantalla dedicada de **Mapa estelar** muestra un domo celeste interactivo con estrellas, constelaciones, planetas, trayectorias del Sol y la Luna. En la parte inferior de la pantalla, puede acceder a los siguientes controles: 
- **Búsqueda** — abre un panel de búsqueda con un campo de entrada donde puede escribir el nombre de un objeto. Debajo del campo, hay una lista de objetos sugeridos en orden alfabético. Puede cambiar el orden entre A–Z y Z–A. 
- **Hora y fecha** — le permite cambiar la fecha y hora para observar el cielo en diferentes momentos del pasado o el futuro. Esto es útil para planificar observaciones, rastrear el movimiento de objetos o aprender cómo cambia el cielo con el tiempo. Si establece una fecha/hora personalizada, el chip muestra la fecha y hora completas, y aparece un botón de restablecimiento junto a él para regresar a la hora actual del sistema.
- [**Configurar vista**](#configure-view).

La pantalla renderiza el hemisferio completo del cielo sobre su ubicación, alineado con la dirección de la brújula. El Mapa estelar se puede rotar manualmente. La rotación manual del Mapa estelar no afecta la orientación del mapa de la Tierra. El mapa de la Tierra siempre sigue el [modo de orientación del mapa](../map/interact-with-map.md#map-orientation-modes) seleccionado en sus ajustes. Toque los objetos celestes para obtener detalles como magnitud, horas de salida/puesta o trayectorias.


## Información de objetos celestes {#celestial-object-info}

![Ventana emergente de información del objeto](@site/static/img/plugins/starwatcher/object-info_new.png)

Toque cualquier **estrella, planeta, constelación, o Sol/Luna** en la **pantalla de Mapa estelar** o en la **superposición del mapa** para ver información detallada. El objeto seleccionado se resalta en el Mapa estelar con un marcador de círculo rojo, y su movimiento diario se visualiza con un anillo de horas (00–23) que muestra dónde estará el objeto en cada hora de tiempo local y la dirección del movimiento.

**Datos mostrados:**
- **Azimut**: Dirección desde el Norte (0°-360°) donde aparece el objeto en el cielo
- **Altitud**: Altura sobre el horizonte (0° en el horizonte, 90° en el cenit)
- **Magnitud**: Escala de brillo (-26 para el Sol hasta +6 para estrellas tenues; menor = más brillante)
- **Horas de salida/puesta**: Cuándo el objeto sale por encima/se pone por debajo del horizonte
- **Distancia** (planetas): Distancia promedio desde la Tierra en UA/km

**Integración con Wikipedia**: Toque **"Wikipedia"** en la ventana emergente de información para abrir la página del objeto en su navegador (por ejemplo, Sirius, Orión, Venus). Funciona sin conexión para datos en caché, en línea para artículos completos.

**Presione prolongadamente** los objetos celestes para **fijarlos** como marcadores en el mapa con actualizaciones de posición en vivo, o **compartir** coordenadas para observación de estrellas en grupo.

Esta función ayuda a identificar objetos en el cielo real, planificar observaciones y aprender hechos de astronomía directamente desde OsmAnd.


## Búsqueda de estrellas en AR (Modo cámara) {#ar-star-finding}

**Ir a:** *Plugin habilitado → Menú → Mapa estelar → Botón de cámara* 

La capa de **Star Watcher** funciona con la **cámara del dispositivo** para habilitar la **observación de estrellas en Realidad Aumentada (AR)**. Apunte la cámara de su teléfono al cielo nocturno real y vea estrellas, planetas, constelaciones, Sol/Luna superpuestos en tiempo real.

**Cómo funciona la búsqueda de estrellas en AR:**
- La vista de **cámara en vivo** muestra el cielo real con superposiciones astronómicas transparentes alineadas con el horizonte/brújula
- **Mueva la cámara** para escanear el cielo — los objetos se resaltan cuando aparecen en su campo de visión
- **Toque los objetos resaltados** para ver azimut, altitud, magnitud, horas de salida/puesta y enlace a Wikipedia
- Se requiere **calibración de la brújula** para una alineación precisa (agite el teléfono en forma de 8 si es necesario)

**Perfecto para:**
- Identificar estrellas/planetas tenues invisibles a simple vista
- Localizar constelaciones moviendo el teléfono por el cielo
- Navegación celeste en tiempo real durante caminatas o acampadas


## Configurar vista {#configure-view}

![Configurar vista](@site/static/img/plugins/starwatcher/half_state.png) ![Configurar vista](@site/static/img/plugins/starwatcher/full_state.png)

**Configurar vista** le permite controlar cómo se muestra el Mapa estelar activando o desactivando modos visuales, objetos y ayudas de renderizado.

Para abrir Configurar vista, toque el botón Configurar vista en la esquina inferior derecha de la pantalla del Mapa estelar. El botón está representado por un icono de estilo de capa (formas apiladas), que indica ajustes de visualización y capas. Configurar vista se abre en un *estado Medio*, mostrando las opciones de visualización principales. Deslice el panel hacia arriba para expandirlo al *estado Completo* y acceder a todos los ajustes disponibles. Para cerrar Configurar vista, deslice el panel hacia abajo una vez para regresar al estado Medio, deslice hacia abajo nuevamente para cerrarlo completamente, o toque el botón Cerrar (X) en la esquina superior derecha del panel.

### Modos y acciones {#modes-and-actions}

![Configurar vista](@site/static/img/plugins/starwatcher/view_with_map.png) ![Configurar vista](@site/static/img/plugins/starwatcher/red_filter.png)

Esta sección controla los modos de visualización principales del Mapa estelar.

- **2D / 3D**. Cambia el Mapa estelar entre una vista plana (2D) y una vista similar a un globo (3D).
- **Mapa**. Activa una vista adicional del mapa de la Tierra que se muestra debajo del Mapa estelar, ayudándole a relacionar los objetos celestes con su ubicación geográfica.
- **Filtro rojo**. Aplica un filtro de color rojo a toda la pantalla para reducir la contaminación lumínica y preservar la visión nocturna durante observaciones en cielos oscuros.

### Objetos visibles {#visible-objects}

![Configurar vista](@site/static/img/plugins/starwatcher/solar_system.png) ![Configurar vista](@site/static/img/plugins/starwatcher/constellations.png)

Esta sección le permite elegir qué tipos de objetos celestes se muestran en el Mapa estelar.

| Objeto | Descripción |
|--------|-------------|
| Sistema solar | Muestra el Sol, la Luna y los planetas visibles. |
| Constelaciones | Muestra líneas y patrones de constelaciones formados por estrellas. |
| Estrellas | Muestra estrellas individuales visibles en el Mapa estelar. |
| Nebulosas | Muestra objetos de nebulosas donde estén disponibles. |
| Cúmulos estelares | Muestra cúmulos estelares como objetos celestes separados. |
| Cielo profundo | Activa objetos de cielo profundo como galaxias, cúmulos de galaxias y agujeros negros. |

### Opciones de visualización personal {#personal-display-options}

Las **opciones de visualización personal** controlan ayudas visuales adicionales relacionadas con el enfoque del usuario y la observación.

| Opción | Descripción |
|--------|-------------|
| Dirección | Muestra un indicador direccional para ayudar a orientar su vista. |
| Trayectoria diaria | Muestra la trayectoria diaria de los objetos celestes seleccionados a través del cielo. |
| Favoritos | Resalta o muestra objetos marcados como favoritos. |

### Ayudas de renderizado {#rendering-aids}

Las **ayudas de renderizado** agregan líneas de referencia y cuadrículas para ayudar a orientar el Mapa estelar.

| Ayuda | Descripción |
|-------|-------------|
| Cuadrícula azimutal | Agrega una cuadrícula basada en azimut para la orientación horizontal del cielo. |
| Línea de meridiano | Muestra la línea de meridiano que cruza el cielo de norte a sur. |
| Cuadrícula ecuatorial | Muestra la cuadrícula de coordenadas ecuatoriales celestes. |
| Línea eclíptica | Muestra la línea eclíptica que representa la trayectoria aparente del Sol. |
| Ecuador galáctico | Muestra el plano ecuatorial de la galaxia Vía Láctea. |


<!-- 
## Star Watcher Settings

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


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)