---
source-hash: e4e558095bec4b84738b88edc8b62c95c94dec6c02803344bb5fccb2d6f00e34
sidebar_position: 17
title:  Tiempo
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

:::info Función de pago
 <ProFeature/> El complemento del Tiempo es una [función de pago](../purchases/index.md) de la aplicación OsmAnd.  
:::

Las capas interactivas del mapa meteorológico en la aplicación OsmAnd le permiten monitorear la temperatura, la presión atmosférica, la cobertura de nubes, la velocidad del viento y la precipitación en su ciudad o en cualquier otro lugar en un mapa global interactivo. El complemento del Tiempo proporciona pronósticos meteorológicos por hora para los próximos 7 días directamente en el mapa de OsmAnd. La información meteorológica también se puede descargar para su uso sin conexión.  

La fuente de datos para el complemento del Tiempo es el [Sistema Global de Predicción](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) operado por el Servicio Meteorológico Nacional de los Estados Unidos (NWS) y el Centro Europeo de Previsiones Meteorológicas a Plazo Medio ([ECMWF](https://www.ecmwf.int/)).  


## Parámetros de configuración requeridos {#required-setup-parameters}

Los siguientes ajustes son *requeridos* para mostrar el Tiempo en el mapa de OsmAnd:

**1.** [Comprar la **suscripción a OsmAnd Pro**](../purchases/).

**2.** [Activar](../plugins/#enable--disable) el complemento del Tiempo en la sección *Complementos* del *Menú principal*.

**3.** [Seleccionar las **unidades de medida**](#weather-settings) para los fenómenos meteorológicos.

**4.** [Mostrar las **capas del Tiempo**](#customize-weather-layers) en el mapa usando el elemento de menú Tiempo en el menú Configurar mapa (recuerde alejar el zoom).

**5.** [Ver el **pronóstico del tiempo**](#weather-forecast-screen) para el área seleccionada (este menú permite que la pantalla principal del mapa de OsmAnd no se sature con capas del tiempo).

**6.** [Descargar](#offline-forecast) el pronóstico del tiempo si planea usarlo sin conexión.

**7.** [Activar los **widgets del Tiempo**](#weather-widgets) si desea ver información meteorológica actualizada a diario.  

:::caution Renderizado requerido
El complemento del Tiempo solo está disponible con el motor de renderizado de mapas [Versión 2](../personal/global-settings/#map-rendering-engine) (OpenGL).  
:::


## Mostrar el Tiempo en el mapa {#display-weather-on-the-map}

### Pantalla de pronóstico del tiempo {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Ir a: *Complemento activado → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Panel de Tiempo Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_new_2.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Ir a: *Complemento activado → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Panel de Tiempo en iOS](@site/static/img/plugins/weather/weather_dashbord_ios_new_2.png)

</TabItem>  

</Tabs>

El menú lateral principal tiene un elemento de menú dedicado al **Tiempo** que proporciona acceso rápido a todas las herramientas meteorológicas. La *pantalla de pronóstico del tiempo* muestra información sobre *temperatura*, *presión atmosférica*, *velocidad del viento*, *cobertura de nubes* y *precipitación*.  

En la parte inferior de la pantalla se encuentra la *barra de herramientas del tiempo*. Puede usar los botones de día y el control deslizante de tiempo para establecer la hora exacta en la que se mostrará el pronóstico del tiempo.

### Fuente de datos {#data-source}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

![Fuente de datos Android](@site/static/img/plugins/weather/weather_source_android.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

![Fuente de datos iOS](@site/static/img/plugins/weather/weather_source_ios.png)

</TabItem>  

</Tabs>

Puede elegir qué proveedor de pronósticos meteorológicos usa OsmAnd para mostrar datos en la pantalla del Tiempo:<br />
<Translate android="true" ids="shared_string_menu,shared_string_weather"/> → ⚙️ → *Elegir Fuente de datos*

Se admiten dos proveedores de pronósticos meteorológicos:

[**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Sistema Global de Predicción)** – la fuente predeterminada operada por NOAA/NWS. Proporciona datos meteorológicos completos, incluidas las capas de temperatura, presión, humedad, viento y nubes.

[**ECMWF**](https://www.ecmwf.int/) **(Centro Europeo de Previsiones Meteorológicas a Plazo Medio)** – una fuente alternativa de pronósticos. Ofrece datos de alta calidad de temperatura, precipitación y presión, pero no proporciona información sobre viento o nubes. Al usar ECMWF, los parámetros no disponibles se muestran como “–” y las capas meteorológicas correspondientes aparecen desactivadas.

Cómo afecta la Fuente de datos a la visualización del Tiempo:
- El mapa, los gráficos, la línea de tiempo y los valores meteorológicos en la pantalla se actualizan inmediatamente después de cambiar la fuente.
- Solo se muestran los parámetros disponibles para el proveedor seleccionado.
- Los widgets del tiempo se actualizan automáticamente para usar la fuente elegida.
- Si previamente descargó un pronóstico meteorológico, OsmAnd usa los datos correspondientes al proveedor seleccionado.
- GFS y ECMWF usan cachés separados. Cambiar la fuente carga o actualiza las teselas meteorológicas relevantes.


### Personalizar capas del tiempo {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Ir a: *Complemento activado → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Panel de Tiempo Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Ir a: *Complemento activado → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Panel de Tiempo en iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>  

</Tabs>

Para mostrar las capas del tiempo en la pantalla del mapa de OsmAnd, debe usar el menú *Configurar mapa*. Vaya al menú, busque el elemento *Tiempo* en la lista (disponible solo cuando el complemento está activado) y púlselo.  

En este menú, puede cambiar la **visibilidad** y los [ajustes](#weather-settings) de cada capa, seleccionar el tipo de líneas de contorno y descargar el [pronóstico del tiempo de 7 días sin conexión](#offline-forecast) (*solo disponible para Android aquí*).


### Ajustes del tiempo {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *Menú principal → Complementos → Tiempo → Ajustes*
- *Menú principal → Ajustes → Perfil → Ajustes de complementos → Tiempo*

![Ajustes del Tiempo Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Ajustes del Tiempo 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Menú principal → Ajustes → Perfil → Complementos → Tiempo*

![Ajustes del Tiempo iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Ajustes del Tiempo iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>  

Es importante decidir en qué unidades de medida le resulta conveniente ver los [datos del Tiempo](#weather-layers) en el mapa y en la sección de [widgets del Tiempo](#weather-widgets) de la pantalla. Puede elegir las unidades de medida apropiadas para cada parámetro o usar los valores predeterminados (*solo iOS*). En la versión para iOS de la aplicación OsmAnd, también puede activar la opción de pronóstico sin conexión para evitar el uso de datos móviles mientras viaja.  

:::note
En la versión para iOS de OsmAnd, puede cambiar las unidades de medida y el nivel de transparencia en el menú que se abre después de una pulsación larga del icono de la capa de mapa requerida.  
:::

### Capas del tiempo {#weather-layers}

Todos los datos meteorológicos se presentan como capas de mapa separadas. Para ver las capas del tiempo en el mapa, debe alejar el zoom, ya que solo están disponibles en escalas de zoom de 2 a 12. Las capas del tiempo utilizan [paletas de colores meteorológicos](../personal/color-palette-schemes.md#weather) para colorear el mapa; estas paletas se pueden [cambiar](../personal/color-palette-schemes.md#edit-palette-file) si es necesario.

| |  
|------------|  
| La **capa de precipitación** muestra información sobre eventos meteorológicos en los que el agua en diferentes estados de agregación cae del cielo al suelo. La precipitación es lluvia, nieve, aguanieve o granizo. La escala de precipitación se gradúa en milímetros (o pulgadas) de agua que cae sobre 1 metro cuadrado en 24 horas. 1 mm de lluvia corresponde a 1 litro de agua por 1 metro cuadrado. |  
|![Esquema de precipitación](@site/static/img/plugins/weather/precipitation.png)|  
| La **temperatura** expresa la percepción cuantitativa de calor y frío. Se mide en grados. En OsmAnd, puede elegir entre la escala Celsius y Fahrenheit. |  
|![Esquema de temperatura](@site/static/img/plugins/weather/temperature.png)|  
| El **viento** es el movimiento del aire causado por el calentamiento desigual de la Tierra por el sol y su propia rotación. Los vientos pueden variar desde una brisa ligera hasta desastres naturales como huracanes y tornados. En OsmAnd, la velocidad del viento se puede mostrar en metros por segundo (m/s), kilómetros por hora (km/h), millas por hora (mph) y nudos (kt). |  
|![Esquema de viento](@site/static/img/plugins/weather/wind.png)|  
| La **cobertura de nubes** es la fracción promedio del cielo cubierta por nubes cuando se observa desde una ubicación particular. Se mide en %. |  
|![Esquema de nubes](@site/static/img/plugins/weather/clouds.png)|  
| La **presión atmosférica** es causada por el peso del aire sobre el punto de medición. Disminuye con el aumento de la elevación. La presión atmosférica se puede mostrar en hectopascales (hPa), milímetros de mercurio (mmHg) y pulgadas de mercurio (inHg). |  
| ![Esquema de presión](@site/static/img/plugins/weather/pressure.png) |  
| La **animación del viento** incluye representaciones dinámicas que muestran la dirección y la velocidad del viento en toda la región. |  
| ![Animación del viento](@site/static/img/plugins/weather/wind_annimation.gif) |  


### Combinar mapas {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combinar capas del Tiempo en Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combinar capas del Tiempo en Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combinar capas del Tiempo en iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combinar capas del Tiempo en iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

Para obtener información meteorológica completa, puede usar las capas del mapa por separado o combinarlas fácilmente. También se pueden agregar isolíneas de un tipo específico a la capa del Tiempo. Simplemente pulse el botón *Capas* o *Isolíneas* en la pantalla.


### Acciones rápidas para capas {#quick-actions-for-layers}

![Capas del Tiempo de Acciones Rápidas](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Para cambiar la visibilidad de las capas del tiempo, puede usar los botones de *Acción rápida* en la pantalla del mapa. Los ajustes generales para mostrar u ocultar capas se pueden encontrar en la sección separada de [Tiempo](#weather-forecast-screen) del *Menú principal*. En el artículo de [Acción rápida](../widgets/quick-action.md#configure-map), encontrará una lista de las capas disponibles para mostrar. Si necesita acceso rápido a esta configuración del mapa, use la herramienta *Botón personalizado*.

- Vaya a [Añadir acción](../widgets/quick-action.md#custom-buttons): *Menú → Configurar pantalla → Botones personalizados → Acción rápida → Añadir acción → Configurar mapa*.
- Añada uno o más botones de Acción Rápida para cambiar la visibilidad de una capa meteorológica en particular.


## Pronóstico sin conexión {#offline-forecast}

### Caché {#cache}

Cuando la pestaña Tiempo está abierta, a menos que se especifique lo contrario, la información meteorológica requerida se descarga de la red. Puede usar el [pronóstico del tiempo](#download-forecast) precargado en sus dispositivos. La información meteorológica se almacena automáticamente en caché después de la descarga y se puede usar sin conexión hasta que el pronóstico expire.  

:::tip
En dispositivos Android, puede verificar cuándo se han descargado los datos meteorológicos pulsando el *widget del Tiempo*. El complemento de Desarrollo de OsmAnd debe estar activado.  
![Fecha de caché del tiempo en Android](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### Descargar pronóstico {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Complemento del Tiempo en Android](@site/static/img/plugins/weather/download_weather_android.png) ![Complemento del Tiempo en Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Complemento del Tiempo en iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Complemento del Tiempo en iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>  

Para cada país, puede descargar el **Pronóstico sin conexión** (hasta 7 días). Cuanto más cerca esté de la fecha actual, más preciso será. Si desea utilizar el pronóstico del tiempo sin conexión, debe descargar los datos meteorológicos con antelación.  

En el menú de descarga de pronósticos, puede obtener información y establecer parámetros para mantener actualizados los datos meteorológicos.  
  
- **Creado** (*Android*) / **Actualizado** (*iOS*). Muestra cuándo se realizó la última actualización.  
- **Próxima actualización** (*iOS*). Cuándo estará disponible la próxima actualización.  
- **Tamaño** (*Android*) / **Tamaño de las actualizaciones** (*iOS*). Muestra el tamaño de todas las actualizaciones.  
- Botón **Actualizar** (*Android*) / **Actualizar ahora** (*iOS*). Cuando está activo, le permite actualizar los datos meteorológicos manualmente sin esperar una actualización automática.  
- **Frecuencia de actualización** (*iOS*). Se puede establecer en 12 horas, 24 horas o semanalmente.  
- *Actualizar solo por Wi-Fi* (*iOS*). Active esta opción si no desea utilizar datos móviles para las descargas.  
- Botón **Eliminar** *papelera* (*Android*) / **Eliminar pronóstico** (*iOS*). Le permite eliminar todos los datos de pronóstico para esta región.
- Botón **Editar** *lápiz* (*Android*). Le permite renombrar el archivo del tiempo.

**Nota:** Algunos países, como EE. UU. y Canadá, usan un solo archivo de Pronóstico sin conexión para todo el país. Esto reduce el número de descargas y simplifica la gestión de datos meteorológicos.

:::info  
Los datos meteorológicos se actualizan cada 6 horas (las 4 actualizaciones de [GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) y 3 de [ECMWF](https://www.ecmwf.int/)) y están disponibles en OsmAnd con un breve retraso, ya que el proceso de cálculo tarda varias horas antes de su publicación (generalmente alrededor de las 07:00 UTC).  
:::


## Widgets del tiempo {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elegir un panel → <Translate android="true" ids="shared_string_weather"/>*

![Widgets del tiempo en Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Widgets del tiempo en Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elegir un panel → <Translate ios="true" ids="shared_string_weather"/>*

![Widgets del tiempo en iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>

Los [widgets del tiempo](../widgets/info-widgets.md#weather-widgets) como Temperatura, Presión del aire, Viento, Nubes y Precipitación muestran los datos meteorológicos actuales para el **punto central en el mapa**.

- Los widgets del tiempo solo se muestran cuando la [pantalla del Tiempo](#weather-forecast-screen) está activada.
- Para activar los widgets del tiempo, seleccione el elemento del Menú principal *Configurar pantalla*, el panel en el que colocarlos y los widgets requeridos de la lista.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)