---
source-hash: aa3c29fb6cbe9138714a34b48b5eaee74f61c4713d9c46b72e2d28a1d615ca35
sidebar_position: 4
sidebar_label:  Weather
title: Weather on the Web
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

La función de Clima en el Mapa Web de OsmAnd muestra las condiciones climáticas actuales y los datos de pronóstico directamente en el mapa. Proporciona acceso a información meteorológica de múltiples fuentes de pronóstico, admite ajustes de tiempo y permite ver capas meteorológicas como temperatura, viento, presión, cobertura de nubes y precipitación.

Los datos meteorológicos están disponibles sin necesidad de iniciar sesión. La vista de Clima se puede abrir directamente desde la interfaz del mapa haciendo clic en el icono del paraguas en el panel de menú o haciendo clic derecho en el mapa y seleccionando Abrir clima en el menú contextual.


## Fuente de datos {#data-source}

OsmAnd Web proporciona información meteorológica de dos fuentes de pronóstico:

- [**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Sistema de Pronóstico Global)** – la fuente predeterminada operada por NOAA/NWS. Proporciona datos meteorológicos completos, incluyendo capas de temperatura, presión, humedad, viento y nubes.  
- [**ECMWF**](https://www.ecmwf.int/) **(Centro Europeo para Pronósticos Meteorológicos a Medio Plazo)** – una fuente de pronóstico alternativa. Ofrece datos de alta calidad de temperatura, precipitación y presión, pero no proporciona información sobre viento o nubes.  

Para cambiar entre ellas, haga clic en el **botón del paraguas** en el menú de Clima.

![Clima de OsmAnd Web](@site/static/img/web/weather_source.png)


## Menú de clima {#weather-menu}

El **menú de Clima** muestra las condiciones climáticas actuales y los datos de pronóstico para la ubicación seleccionada en el mapa. Combina una vista de resumen, controles de tiempo y capas meteorológicas en un solo panel.

En la parte superior del menú, se muestra el nombre de la ubicación actual, la fecha, la hora y la temperatura del aire. Debajo de esto, un selector de días permite cambiar entre los días de pronóstico dentro del rango disponible.

Se proporciona un control deslizante de tiempo para ajustar el tiempo de pronóstico dentro del día seleccionado. Mover el control deslizante actualiza todos los valores meteorológicos mostrados y las capas del mapa para reflejar el momento elegido.

El menú muestra los siguientes parámetros meteorológicos para la ubicación seleccionada:
- *Temperatura*.
- *Precipitación*.
- *Viento*.
- *Presión atmosférica*.
- *Nubes*.  

Cada valor se actualiza dinámicamente al cambiar el tiempo o la fecha de pronóstico.

En la parte inferior del panel, se muestra información sobre el tiempo de generación de los datos meteorológicos, que indica cuándo se actualizaron por última vez los datos de pronóstico.

![Clima de OsmAnd Web](@site/static/img/web/weather_menu.png)


## Capas de clima {#weather-layers}

Las capas de clima permiten visualizar los datos de pronóstico directamente en el mapa como una superposición. Ayudan a evaluar rápidamente las condiciones meteorológicas en un área más amplia en lugar de ver valores solo para un punto único.

Para abrir el panel de Capas de clima, haga clic en el icono de capas en el menú de Clima. Esto abre una lista de superposiciones meteorológicas disponibles que se pueden habilitar o deshabilitar de forma independiente.

Las siguientes capas de clima están disponibles:
- *Temperatura* — muestra la distribución de la temperatura del aire en el mapa usando un gradiente de color.
- *Precipitación* — muestra la intensidad de la precipitación en el área seleccionada.
- *Viento* — visualiza la velocidad y la dirección del viento.
- *Presión atmosférica* — muestra los patrones de presión atmosférica.
- *Nubes* — muestra la cobertura de nubes.

Todas las capas de clima están sincronizadas con la fecha y hora seleccionadas en el menú de Clima. Cambiar el día de pronóstico o ajustar el control deslizante de tiempo actualiza inmediatamente las superposiciones del mapa para reflejar el momento elegido.

![Clima de OsmAnd Web](@site/static/img/web/weather_layers.png)


## Vista de pronóstico {#forecast-view}

Los pronósticos meteorológicos están disponibles hasta 7 días por adelantado. Los valores de pronóstico se calculan en intervalos de 3 horas, lo que permite examinar los cambios a corto plazo a lo largo de cada día.

El pronóstico de 7 días se muestra usando dos formatos complementarios:
- **Vista de gráfico**. Muestra las tendencias de pronóstico a lo largo del tiempo para el parámetro meteorológico seleccionado. 
- **Vista de lista**. Muestra los valores de pronóstico diarios en un formato de lista estructurado. 

Puede cambiar entre diferentes parámetros meteorológicos usando los iconos en la parte superior del panel de pronóstico. 

![Clima de OsmAnd Web](@site/static/img/web/weather_forecast.png)


## Artículo relacionado {#related-article}

- [Clima](../plugins/weather.md)
- [Introducción](../web/web-overview.md)
- [Mapa](../web/web-map.md)