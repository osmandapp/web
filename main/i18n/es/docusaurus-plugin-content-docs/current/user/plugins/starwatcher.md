---
source-hash: 8fd560586badacfe8252875585749d24294632dc3ef28a49749d309541421b7a
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
2. Use **Menú → Mapa estelar** para abrir la pantalla dedicada con el cielo estrellado, ajustes y controles de tiempo
3. Seleccione **hora y fecha** usando los deslizadores o botones en la pantalla del Mapa estelar
4. Ajuste **visibilidad y transparencia** en los ajustes del menú "Mapa estelar".

El plugin funciona con ambos motores de renderizado de mapa, pero ofrece el mejor rendimiento en modo OpenGL.

## Pantalla de mapa estelar

**Ir a:** *Plugin habilitado → Menú → Mapa estelar* 

![Pantalla de mapa estelar](@site/static/img/plugins/starwatcher/view.png)

La pantalla dedicada de **Mapa estelar** muestra un domo celeste interactivo con estrellas, constelaciones, planetas, trayectorias del Sol y la Luna. En la parte inferior hay una **barra de herramientas** con deslizadores de tiempo/fecha, botones de día y conmutadores rápidos para capas como la línea del horizonte o etiquetas.


- La pantalla renderiza el hemisferio completo del cielo sobre su ubicación, alineado con la dirección de la brújula
- Toque los objetos celestes para obtener detalles como magnitud, horas de salida/puesta o trayectorias



## Información de objetos celestes

Toque cualquier **estrella, planeta, constelación o Sol/Luna** en la pantalla de **Mapa estelar** o en la **superposición del mapa** para ver información detallada.

![Ventana emergente de información del objeto](@site/static/img/plugins/starwatcher/object-info.png)

**Datos mostrados:**
- **Azimut**: Dirección desde el Norte (0°-360°) donde aparece el objeto en el cielo
- **Altitud**: Altura sobre el horizonte (0° en el horizonte, 90° en el cenit)
- **Magnitud**: Escala de brillo (-26 para el Sol hasta +6 para estrellas tenues; menor = más brillante)
- **Horas de salida/puesta**: Cuándo el objeto sale por encima/se pone por debajo del horizonte
- **Distancia** (planetas): Distancia promedio desde la Tierra en UA/km

**Integración con Wikipedia**: Toque **"Wikipedia"** en la ventana emergente de información para abrir la página del objeto en su navegador (por ejemplo, Sirius, Orión, Venus). Funciona sin conexión para datos en caché, en línea para artículos completos.

**Presione prolongadamente** los objetos celestes para **fijarlos** como marcadores en el mapa con actualizaciones de posición en vivo, o **compartir** coordenadas para observación de estrellas en grupo.

Esta función ayuda a identificar objetos en el cielo real, planificar observaciones y aprender hechos de astronomía directamente desde OsmAnd.


## Búsqueda de estrellas en AR (Modo cámara)

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


## Ajustes de Star Watcher

*Menú principal → Plugins → Mapa estelar → Botón ⚙️*

Elija las capas y objetos visibles

### Capas de estrellas

Todos los datos astronómicos aparecen como superposiciones en el mapa, visibles en escalas de zoom 5-15. Las capas proyectan la esfera celeste en el mapa plano.

| Capa | Descripción |
|-------|-------------|
| Estrellas | Estrellas brillantes (hasta magnitud 4-6) con etiquetas y líneas de constelaciones |
| Constelaciones | Conecta estrellas en patrones familiares como Orión o la Osa Mayor |
| Planetas | Posiciones y trayectorias diarias para Mercurio-Venus-Marte-Júpiter-Saturno (iconos de colores) |
| Sol y Luna | Arcos que muestran horas de salida/puesta y fase de iluminación |
| Horizonte | Línea que separa el cielo visible del suelo, con direcciones cardinales |


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)