---
source-hash: dde8250578460772829e966968add9c68eaa6a84529c9781ca298152f25ce984
sidebar_position: 3
sidebar_label: Mapa
title: Mapa Global en el Sitio Web
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

:::info
El sitio *[osmand.net/map](https://osmand.net/map/)* se encuentra actualmente en desarrollo y pruebas.
**Por lo tanto, el diseño y el funcionamiento de algunas funciones del sitio pueden diferir de los descritos en este artículo.**

Hemos creado el [tema de discusión](https://github.com/osmandapp/OsmAnd/discussions/16567) en nuestro GitHub para que puedas dejar tus comentarios allí.
:::


## Resumen {#overview}

El mapa web de OsmAnd es un mapa global basado en datos de [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Permite a los usuarios ver sus propios datos, como rutas y favoritos, crear rutas de navegación para cualquier perfil y acceder a funciones adicionales como el tiempo, rutas GPX públicas, PDI e imágenes de Wikimedia. Explora y personaliza tu experiencia de datos directamente en tu navegador.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Menú contextual del mapa {#map-context-menu}

Para abrirlo, haz clic derecho en cualquier parte del mapa. Este menú incluye las siguientes acciones:

- **Dónde estoy** – Encuentra rápidamente tu ubicación actual en el mapa. Esta función muestra las direcciones más cercanas al punto seleccionado en el mapa.
- **Abrir tiempo** – Accede al [menú de Tiempo](#weather-on-the-web) para ver los detalles del tiempo.
- **Crear nueva ruta** – Abre la herramienta [*Planificar una ruta*](../web/planner.md#create-track-and-local) con la ubicación seleccionada como punto de inicio o destino.
- **Añadir favorito** – Permite crear y guardar un [favorito](../web/web-userdata.mdx#add--edit-favorite) en cualquier punto del mapa para facilitar el acceso.
- **Indicaciones desde** – Establece el punto seleccionado como la [ubicación de inicio](../web/planner.md#navigation-route) para la navegación.
- **Indicaciones hasta** – Establece el punto seleccionado como el [destino para la navegación](../web/planner.md#navigation-route).
- **Copiar coordenadas** – Copia las coordenadas del punto seleccionado para uso externo.
- **Añadir marcador** – Coloca un marcador para señalar una ubicación en el mapa. ([Ejemplo](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Mostrar regiones** – Muestra las regiones asociadas con la ubicación seleccionada.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Tiempo en la Web {#weather-on-the-web}

OsmAnd Web proporciona información meteorológica de dos fuentes de pronóstico:

- **GFS (predeterminado)**
- **ECMWF**

Para cambiar entre estas fuentes de pronóstico, haz clic en el **botón del paraguas** en el menú de Tiempo.

***Características del menú de tiempo:***

- **Datos meteorológicos actuales**: Muestra tus coordenadas junto con los siguientes datos:

  - Temperatura.
  - Precipitación.
  - Viento.
  - Presión atmosférica.
  - Nubosidad.

- **Ajuste de hora**: Modifica la fecha y la hora usando la **herramienta de tiempo** en el menú de Tiempo para ver el tiempo en un momento específico.

***Capas meteorológicas en el mapa:***

- Utiliza el **botón de capas** para seleccionar y habilitar capas meteorológicas como:

  - Temperatura.
  - Presión.
  - Viento.
  - Nubosidad.
  - Precipitación.

***Visualización de pronósticos:***

- Los pronósticos meteorológicos están disponibles para el pronóstico de **7 días**.
- Las actualizaciones del pronóstico se proporcionan en **pasos de 3 horas** para obtener información detallada.

Para acceder o personalizar estas funciones, utiliza los menús en el lado izquierdo o derecho de la interfaz.

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***Pronóstico de 7 días***:

Haz clic en los datos del pronóstico en el menú para ver el **pronóstico de 7 días** para tu ubicación. El pronóstico está disponible en:

- **Formato gráfico**
- **Formato de lista**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## Configurar el menú del mapa {#configure-map-menu}

El menú Configurar mapa te permite gestionar la configuración de visualización de los datos del mapa, como las capas de PDI, Favoritos, rutas y terreno. Inicia sesión en tu cuenta de OsmAnd para usar esta sección del menú.

Para abrir este menú, haz clic en el botón en la **esquina superior izquierda** o accede a él a través del **Menú**.

- [Superposición de PDI...](#poi-overlay-section). Te permite elegir y mostrar las categorías de PDI necesarias en el mapa.
- [Favoritos](#favorites-section). Alterna la visualización de favoritos en el mapa.
- [Rutas](#tracks-section). Contiene las rutas GPX visibles en el mapa.
- [Terreno](#terrain-section). Habilita o deshabilita el esquema de color del terreno en el mapa.

![POIs menu](@site/static/img/web/configure_map_web.png)


### Sección de superposición de PDI {#poi-overlay-section}

Para mostrar los PDI en el mapa:

*Menú Configurar mapa → Superposición de PDI...*. Aquí, puedes elegir las categorías para mostrar en el mapa.

Alternativamente, puedes usar la [**sección de Búsqueda**](web-search.md) para encontrar el lugar deseado.

![POIs menu](@site/static/img/web/poi_menu.png)


### Sección de Favoritos {#favorites-section}

Con un solo clic, puedes activar o desactivar los favoritos en el mapa. Sin embargo, solo se mostrarán los favoritos con [**Mostrar en el mapa habilitado**](../web/web-userdata.mdx##favorites-on-the-web).


### Sección de rutas {#tracks-section}

Esta sección contiene una lista de tus [**rutas GPX visibles en el mapa**](../web/web-userdata.mdx#visible-on-the-map) y las rutas **Recientemente visibles**.

- Puedes activar o desactivar las rutas directamente.
- Activar o desactivar rutas de la lista **Recientemente visibles**.

Cada ruta tiene un **Menú contextual** (accesible a través del botón ⋮) con los siguientes comandos:

- **Ocultar ruta**: Oculta la ruta actualmente visible del mapa.
- **Hacer ruta visible**: Muestra una ruta de la lista Recientemente visibles en el mapa.
- **Renombrar**: Te permite renombrar la ruta para una identificación más fácil.
- **Duplicar**: Crea una copia de la ruta.
- **Descargar**: Guarda la ruta en tu dispositivo local.
- **Eliminar**: Elimina la ruta permanentemente de la lista.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Sección de terreno {#terrain-section}

La sección **Terreno** es una función de pago <ProFeature/>. Para usar esta función, primero debes iniciar sesión en tu cuenta OsmAnd Pro.

En esta sección, puedes:

- Elegir un **esquema de color** para el terreno:
  - **Sombreado**
  - **Pendiente**
  - **Altura**
- Ajustar la visibilidad de la capa de terreno seleccionada de **0% a 100%**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## Esquemas de URL {#url-schemes}

Para facilitar el uso del servicio web (y la aplicación) de OsmAnd, puedes aprovechar los enlaces directos. Estas son URL especiales que te permiten transferir datos de ubicación e incluir detalles sobre marcadores, rutas, el tiempo y más.

Estas URL se pueden copiar y compartir utilizando cualquier medio compatible con tu dispositivo y son compatibles con las versiones de Android e iOS de OsmAnd.

1. **URL con un marcador en el mapa:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL sin un marcador en el mapa:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL con navegación:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Dependiendo de los parámetros especificados, las cadenas de URL pueden contener:

- **latitude**: valor de latitud como número.
- **longitude**: valor de longitud como número.
- **start-finish**: coordenadas para la navegación.
- **profile**: perfil de navegación (por ejemplo, coche, bicicleta).
- **zoom**: nivel de zoom.

4. **Tiempo**&nbsp; – &nbsp;`osmand.net/map/weather`

***Por ejemplo***, puedes acceder directamente a la página del tiempo con coordenadas específicas:
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Cuenta**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Configurar mapa**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Rutas**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Favoritos**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Configuración**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Planificar una ruta**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Enlace directo a la [**página Explorar**](https://osmand.net/docs/user/web/web-search#explore) actual&nbsp; - &nbsp;`osmand.net/map/search`


> *Última actualización: enero de 2025*