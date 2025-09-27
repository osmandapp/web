---
source-hash: d91382fd90471c35f09518fffca8df6e01494de94a597a6b8006d0c7f62c249d
sidebar_position: 3
sidebar_label: Mapa
title: Mapa global en el sitio web
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
El sitio *[osmand.net/map](https://osmand.net/map/)* está actualmente en desarrollo y prueba.
**Por lo tanto, el diseño y el funcionamiento de algunas funciones del sitio pueden ser diferentes de los descritos en este artículo.**

Hemos creado el [Tema de discusión](https://github.com/osmandapp/OsmAnd/discussions/16567) en nuestro GitHub para que puedas dejar tus comentarios allí.
:::


## Resumen {#overview}

El mapa web de OsmAnd es un mapa global basado en datos de [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Permite a los usuarios ver sus propios datos, como tracks y favoritos, crear rutas de navegación para cualquier perfil y acceder a funciones adicionales como el tiempo, tracks GPX públicos, PDI e imágenes de Wikimedia. Explora y personaliza tu experiencia con los datos directamente en tu navegador.

![OsmAnd Web todo](@site/static/img/web/web_map_all.png)


## Menú contextual del mapa {#map-context-menu}

Para abrirlo, haz clic derecho en cualquier parte del mapa. Este menú incluye las siguientes acciones:

- **Dónde estoy** – Encuentra rápidamente tu ubicación actual en el mapa. Esta función muestra las direcciones más cercanas al punto seleccionado en el mapa.
- **Abrir tiempo** – Accede al [Menú del tiempo](#weather-on-the-web) para ver los detalles meteorológicos.
- **Crear nueva ruta** – Abre la herramienta [*Planificar una ruta*](../web/planner.md#navigation-route) con la ubicación seleccionada como punto de partida o de destino.
- **Añadir Favorito** – Te permite crear y guardar un [favorito](../web/web-userdata.mdx#add--edit-favorite) en cualquier punto del mapa para un acceso fácil.
- **Direcciones desde** – Establece el punto seleccionado como la [ubicación de inicio](../web/planner.md#navigation-route) para la navegación.
- **Direcciones a** – Establece el punto seleccionado como el [destino para la navegación](../web/planner.md#navigation-route).
- **Copiar coordenadas** – Copia las coordenadas del punto seleccionado para uso externo.
- **Añadir marcador** – Coloca un marcador para señalar una ubicación en el mapa. ([Ejemplo](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Mostrar regiones** – Muestra las regiones asociadas con la ubicación seleccionada.

![Menú contextual del mapa](@site/static/img/web/map_context_menu.png)


## El tiempo en la web {#weather-on-the-web}

La web de OsmAnd proporciona información meteorológica de dos fuentes de pronóstico:

- **GFS (predeterminado)**
- **ECMWF**

Para cambiar entre estas fuentes de pronóstico, haz clic en el **botón del paraguas** en el menú del Tiempo.

***Características del menú del tiempo:***

- **Datos meteorológicos actuales**: Muestra tus coordenadas junto con los siguientes datos:

  - Temperatura.
  - Precipitación.
  - Viento.
  - Presión del aire.
  - Cobertura de nubes.

- **Ajuste de tiempo**: Modifica la fecha y la hora usando la **herramienta de tiempo** en el menú del Tiempo para ver el tiempo en un momento específico.

***Capas meteorológicas en el mapa:***

- Usa el **botón de capas** para seleccionar y habilitar capas meteorológicas como:

  - Temperatura.
  - Presión.
  - Viento.
  - Cobertura de nubes.
  - Precipitación.

***Visualización de pronósticos:***

- Los pronósticos meteorológicos están disponibles para el pronóstico de **7 días**.
- Las actualizaciones del pronóstico se proporcionan en **pasos de 3 horas** para obtener información detallada.

Para acceder o personalizar estas funciones, utiliza los menús en el lado izquierdo o derecho de la interfaz.

  ![OsmAnd Web Tiempo](@site/static/img/web/web_weather.png)

***Pronóstico de 7 días***:

Haz clic en los datos del pronóstico en el menú para ver el **pronóstico de 7 días** para tu ubicación. El pronóstico está disponible en:

- **Formato de gráfico**
- **Formato de lista**

  ![OsmAnd Web Tiempo](@site/static/img/web/web_7day.png)


## Menú Configurar mapa {#configure-map-menu}

El menú Configurar mapa te permite gestionar los ajustes de visualización de los datos del mapa, como las capas de PDI, Favoritos, tracks y terreno. Por favor, inicia sesión en tu cuenta de OsmAnd para usar esta sección del menú.

Para abrir este menú, haz clic en el botón en la **esquina superior izquierda** o accede a él a través del **Menú**.

- [Superposición de PDI...](#poi-overlay-section). Te permite elegir y mostrar las categorías de PDI necesarias en el mapa.
- [Favoritos](#favorites-section). Activa o desactiva la visualización de favoritos en el mapa.
- [Tracks](#tracks-section). Contiene los tracks GPX visibles en el mapa.
- [Terreno](#terrain-section). Activa o desactiva el esquema de color del terreno en el mapa.

![Menú de PDI](@site/static/img/web/configure_map_web.png)


### Sección de superposición de PDI {#poi-overlay-section}

Para mostrar PDI en el mapa:

*Menú Configurar mapa → Superposición de PDI...*. Aquí puedes elegir las categorías que se mostrarán en el mapa.

Alternativamente, puedes usar la [**sección de Búsqueda**](web-search.md) para encontrar el lugar deseado.

![Menú de PDI](@site/static/img/web/poi_menu.png)


### Sección de Favoritos {#favorites-section}

Con un solo clic, puedes activar o desactivar los favoritos en el mapa. Sin embargo, solo se mostrarán los favoritos con la opción [**Mostrar en el mapa activada**](../web/web-userdata.mdx#favorites-on-the-web).


### Sección de Tracks {#tracks-section}

Esta sección contiene una lista de tus [**tracks GPX visibles en el mapa**](../web/web-userdata.mdx#visible-on-the-map) y tracks **Visibles recientemente**.

- Puedes activar o desactivar los tracks directamente.
- Activa o desactiva los tracks desde la lista de **Visibles recientemente**.

Cada track tiene un **Menú contextual** (accesible a través del botón ⋮) con los siguientes comandos:

- **Ocultar track**: Oculta el track actualmente visible del mapa.
- **Hacer visible el track**: Muestra un track de la lista de Visibles recientemente en el mapa.
- **Renombrar**: Te permite renombrar el track para una identificación más fácil.
- **Duplicar**: Crea una copia del track.
- **Descargar**: Guarda el track en tu dispositivo local.
- **Eliminar**: Elimina el track permanentemente de la lista.

![Menú Configurar mapa Tracks](@site/static/img/web/configure_map_track.png)


### Sección de Terreno {#terrain-section}

La sección **Terreno** es una función de pago <ProFeature/>. Para usar esta función, primero debes iniciar sesión en tu cuenta de OsmAnd Pro.

En esta sección, puedes:

- Elegir un **esquema de color** para el terreno:
  - **Sombreado**
  - **Pendiente**
  - **Altura**
- Ajustar la visibilidad de la capa de terreno seleccionada de **0% a 100%**.

![Menú Configurar mapa Terreno](@site/static/img/web/configure_map_terrain.png)


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

Para un uso fácil del servicio web de OsmAnd (y la aplicación), puedes aprovechar los enlaces directos. Estas son URL especiales que te permiten transferir datos de ubicación e incluir detalles sobre marcadores, tracks, tiempo y más.

Estas URL se pueden copiar y compartir utilizando cualquier medio compatible con tu dispositivo y son compatibles con las versiones de OsmAnd para Android e iOS.

1. **URL con un marcador en el mapa:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Crear Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL sin un marcador en el mapa:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Crear Track](@site/static/img/plan-route/web_url_without.png)

3. **URL con navegación:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Crear Track](@site/static/img/plan-route/web_url_track.png)

Dependiendo de los parámetros especificados, las cadenas de URL pueden contener:

- **latitude**: valor de latitud como un número.
- **longitude**: valor de longitud como un número.
- **start-finish**: coordenadas para la navegación.
- **profile**: perfil de navegación (p. ej., coche, bicicleta).
- **zoom**: nivel de zoom.

4. **Tiempo**&nbsp; – &nbsp;`osmand.net/map/weather`

***Por ejemplo***, puedes acceder directamente a la página del tiempo con coordenadas especificadas:
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Cuenta**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Configurar mapa**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Tracks**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Favoritos**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Ajustes**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Planificar una ruta**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Enlace directo a la [**página Explorar**](https://osmand.net/docs/user/web/web-search#explore) actual&nbsp; - &nbsp;`osmand.net/map/search`