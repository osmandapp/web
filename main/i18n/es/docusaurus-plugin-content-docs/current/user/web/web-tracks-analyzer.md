---
source-hash: fe9500be3570d2dbf08995ee5614eb89cd647a44f0360730e48015dced34c738
sidebar_position: 7
sidebar_label: Tracks Analyzer
title: Tracks Analyzer
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

**Analizador de pistas** es una herramienta web que ayuda a analizar segmentos de pistas repetidos entre puntos seleccionados en el mapa. Escanea tus pistas y encuentra todos los segmentos que pasan por la(s) ubicación(es) elegida(s), permitiéndote comparar velocidad, elevación, distancia y tiempo en múltiples actividades.

## Cómo usar {#how-to-use}

Después de abrir el Analizador de pistas (mostrado como una llave inglesa), la herramienta se abre con una vista de mapa y un estado vacío. Desde aquí, puedes elegir qué pistas se incluirán en el análisis usando el panel **Seleccionar pistas**. El analizador permite trabajar con todas las pistas disponibles o limitar el análisis a carpetas específicas.

Para iniciar el análisis, establece uno o dos puntos directamente en el mapa. Haz clic derecho en la ubicación deseada y selecciona **Punto A / Punto B** del menú contextual. El analizador luego busca segmentos de pistas que pasen por el punto seleccionado o entre los dos puntos.

![Analizador de pistas](@site/static/img/web/web_analyzer_select.png) ![Analizador de pistas](@site/static/img/web/web_analyzer_points.png)


## Ordenación y parámetros visibles {#sorting-and-visible-parameters}
Después de que el analizador encuentre segmentos coincidentes, los resultados se muestran como una lista. La lista se puede reordenar usando la opción **Ordenar**, que cambia cómo se listan los segmentos. Además, el botón **Campos** abre el panel de Parámetros visibles, donde puedes controlar qué parámetros de análisis se muestran para cada segmento. Puedes mostrar todos los parámetros disponibles o seleccionar solo aquellos relevantes para tu análisis.

Los parámetros disponibles están agrupados por tipo:

**Velocidad**
- Vel. máx.
- Vel. media
- Vel. mín.

**Altitud**
- Alt. máx.
- Alt. media
- Alt. mín.

**Subida / Bajada**

**Fecha y hora**
- Fecha
- Hora de inicio
- Hora de fin
- Período de tiempo
- Duración
- Tiempo en movimiento

**Longitud**

![Analizador de pistas](@site/static/img/web/web_analyzer_sort.png) ![Analizador de pistas](@site/static/img/web/web_analyzer_fields.png)

## Análisis de datos {#data-analysis}

Cada segmento coincidente se muestra en la lista de resultados a la izquierda. Para cada segmento, se muestra un conjunto de parámetros calculados, dependiendo de qué Parámetros visibles estén habilitados.

Cada segmento también tiene un menú de tres puntos (⋮) con las siguientes acciones:
- Abrir pista — abre la pista completa relacionada con el segmento seleccionado.
- Ocultar pista / Hacer visible la pista — controla si la pista se muestra en el mapa.
- Excluir — elimina el segmento de los resultados actuales del análisis.

![Analizador de pistas](@site/static/img/web/web_analyzer_menu.png)

### Gráficos {#graphs}

Debajo del mapa, el analizador muestra un gráfico que visualiza los segmentos seleccionados. El gráfico representa datos solo para los segmentos encontrados entre los puntos seleccionados, no para las pistas completas.

El gráfico soporta cambiar entre diferentes tipos de datos:
- Altitud.
- Pendiente.
- Velocidad.
Solo se muestra un tipo de dato a la vez, y cambiarlo actualiza el gráfico inmediatamente.

Cuando hay múltiples segmentos, el gráfico muestra datos para varios segmentos simultáneamente. Un selector encima del gráfico te permite elegir cuántos gráficos de segmentos se muestran a la vez y cambiar entre ellos.

![Analizador de pistas](@site/static/img/web/web_analyzer_altitude.png) ![Analizador de pistas](@site/static/img/web/web_analyzer_tracks.png)

## Artículos relacionados {#related-articles}

- [Pistas](../web/web-tracks.md)
- [Administrar pistas](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)