---
source-hash: bdb9eac116a28f1d5dfc284cdfe30f108124a7c87fbf05c077f70e32504f6445
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

<!--
<InfoIncompleteArticle/>


:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::
-->


## Resumen {#overview}

El mapa web de OsmAnd es un mapa global basado en datos de [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Permite a los usuarios ver sus propios datos, como tracks y favoritos, crear rutas de navegación para cualquier perfil y acceder a funciones adicionales como el tiempo, tracks GPX públicos, PDI e imágenes de Wikimedia. Explora y personaliza tu experiencia con los datos directamente en tu navegador.

![OsmAnd Web todo](@site/static/img/web/web_map_all.png)


## Menú contextual del mapa {#map-context-menu}

Para abrirlo, haz clic derecho en cualquier parte del mapa. Este menú incluye las siguientes acciones:

- **Dónde estoy** – Encuentra rápidamente tu ubicación actual en el mapa. Esta función muestra las direcciones más cercanas al punto seleccionado en el mapa.
- **Abrir tiempo** – Accede al [Menú del tiempo](#weather-on-the-web) para ver los detalles meteorológicos.
- **Crear nueva ruta** – Abre la herramienta [*Planificar una ruta*](../web/planner.md#navigation-route) con la ubicación seleccionada como punto de partida o de destino.
- **Añadir Favorito** – Te permite crear y guardar un [favorito](../web/web-favorites.md#add--edit-favorite) en cualquier punto del mapa para un acceso fácil.
- **Direcciones desde** – Establece el punto seleccionado como la [ubicación de inicio](../web/planner.md#navigation-route) para la navegación.
- **Direcciones a** – Establece el punto seleccionado como el [destino para la navegación](../web/planner.md#navigation-route).
- **Copiar coordenadas** – Copia las coordenadas del punto seleccionado para uso externo.
- **Mostrar regiones** – Muestra las regiones asociadas con la ubicación seleccionada.

<!--
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))

![Map Context menu](@site/static/img/web/map_context_menu.png)

Add pin option will be added back once it becomes available again.
-->

![Menú contextual del mapa](@site/static/img/web/map_context_menu_new.png)


## Menú Configurar mapa {#configure-map-menu}

El menú Configurar mapa te permite gestionar los ajustes de visualización de los datos del mapa, como las capas de PDI, Favoritos, tracks y terreno. Este menú está disponible después de que inicies sesión en tu cuenta de OsmAnd. Para abrirlo, haz clic en el botón en la **esquina superior izquierda** o accede a él a través del **Menú**.

- [Superposición de PDI...](#poi-overlay). Te permite elegir y mostrar las categorías de PDI necesarias en el mapa.
- [Favoritos](#favorites). Activa o desactiva la visualización de favoritos en el mapa.
- [Tracks](#tracks). Contiene los tracks GPX visibles en el mapa.  
- [Terreno](#terrain). Activa o desactiva el esquema de color del terreno en el mapa.

![Menú de PDI](@site/static/img/web/configure_map_web.png)


### Superposición de PDI {#poi-overlay}

La función de superposición de PDI te permite mostrar Puntos de Interés (PDI) en el mapa por categorías seleccionadas. Esto es útil cuando quieres explorar lugares directamente en el mapa.

Para abrir la superposición: *Menú Configurar mapa → Superposición de PDI*... La lista de superposición contiene 18 categorías. Puedes habilitar una categoría o habilitar múltiples categorías en cualquier combinación. Cuando al menos una categoría está habilitada, la superposición proporciona una acción **Deseleccionar todo** para borrar la selección de una vez.

**Nota:** Si estás buscando un lugar específico, también puedes usar la [**sección de Búsqueda**](web-search.md) en el mapa.

Una vez que se muestran los PDI, seleccionar un marcador de PDI en el mapa abre su panel de detalles que muestra la información disponible para ese objeto. Dependiendo del PDI, puede incluir: nombre del lugar y tipo, dirección, campos de contacto, identificadores relacionados con OSM y coordenadas, enlaces de referencia (Wikipedia, Wikidata), cuando estén presentes. 

Para los PDI que tienen fotos en línea, el panel de detalles muestra un bloque de Fotos en línea con miniaturas. Mostrar todo abre una vista de galería con la lista completa de fotos. En el visor de fotos, OsmAnd Web muestra los metadatos de la foto cuando están disponibles, incluyendo: fecha, autor, licencia y descripción.

En el panel de detalles de PDI, hay acciones rápidas disponibles desde los botones de acción:
- *Añadir a Favoritos* — guarda el PDI en tus Favoritos.
- *Compartir* — genera un enlace compartible que abre el PDI directamente en OsmAnd Web. El enlace incluye el nombre del PDI, tipo y coordenadas (pin).
- *Direcciones desde* — establece el PDI seleccionado como punto de inicio y abre el panel de Ruta para que puedas elegir un destino y perfil.
- *Navegación* — establece el PDI seleccionado como punto de destino para la navegación.

![Menú de PDI](@site/static/img/web/poi_categories.png) ![Menú de PDI](@site/static/img/web/poi_photo_new.png)


### Favoritos {#favorites}

Con un solo clic, puedes activar o desactivar los favoritos en el mapa. Sin embargo, solo se mostrarán los favoritos con la opción [**Mostrar en el mapa activada**](../web/web-favorites.md#manage-favorites).


### Tracks {#tracks}

Esta sección contiene una lista de tus [**tracks GPX visibles en el mapa**](../web/web-tracks.md#visible-on-the-map) y tracks **Visibles recientemente**.

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


### Terreno {#terrain}

La sección **Terreno** es una función de pago <ProFeature/>. Para usar esta función, primero debes iniciar sesión en tu cuenta de OsmAnd Pro.

En esta sección, puedes:

- Elegir un **esquema de color** para el terreno:
  - **Sombreado**
  - **Pendiente**
  - **Altura**
- Ajustar la visibilidad de la capa de terreno seleccionada de **0% a 100%**.

![Menú Configurar mapa Terreno](@site/static/img/web/configure_map_terrain.png)


## Ajustes {#settings}

En el Planificador Web, los *Ajustes generales* (Idioma de visualización, Unidades de longitud, Unidad de velocidad) están disponibles para todos los usuarios, independientemente de si has iniciado sesión o no. Una vez que inicies sesión con tu cuenta de OsmAnd, aparece una sección adicional de OsmAnd Cloud en el panel de Ajustes. Puedes leer sobre OsmAnd Cloud [aquí](./web-cloud.md).

### Idioma {#language}

Para cambiar el idioma de la interfaz:

*Ve a: Menú → ⚙ Ajustes → Idioma de visualización*

![Idioma web](@site/static/img/web/web_language.png)

### Unidades {#units}

*Ve a: Menú → ⚙ Ajustes → Unidades de longitud*  
*Ve a: Menú → ⚙ Ajustes → Unidad de velocidad*

Puedes elegir qué unidades se utilizan para mostrar la distancia, la elevación y la velocidad en el mapa, en los detalles de la ruta y en las herramientas de medición. Esto te ayuda a mantener OsmAnd consistente con tus hábitos habituales o estándares regionales.

La opción **Unidades de longitud** define cómo se muestran la distancia horizontal y la elevación:
- Kilómetros/metros.
- Millas/pies.
- Millas/metros.
- Millas/yardas.
- Millas náuticas/metros.
- Millas náuticas/pies. 

Por ejemplo, una distancia de 10 km se mostrará como aproximadamente 6,21 mi si eliges una de las opciones Millas/..., o como aproximadamente 5,40 nmi cuando se selecciona Millas náuticas/...

La opción **Unidad de velocidad** controla cómo se muestran la velocidad actual y los límites de velocidad:
- Kilómetros por hora.
- Millas por hora.
- Metros por segundo.
- Minutos por milla.
- Minutos por kilómetro.
- Millas náuticas por hora (nudos). 

Por ejemplo, una velocidad de 90 km/h corresponde a 25 m/s o aproximadamente 55,92 mph.

![Unidades web](@site/static/img/web/web_units_len.png) ![Unidades web](@site/static/img/web/web_units_spe.png)


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

11. Enlace directo a la página [**Explorar**](https://osmand.net/docs/user/web/web-search#explore) actual&nbsp; - &nbsp;`osmand.net/map/search`


## Artículos relacionados {#related-articles}

- [Menú contextual del mapa](../map/map-context-menu.md)
- [Cuenta de OsmAnd](./web-cloud.md)
- [Tracks](./web-tracks.md)
- [Favoritos](./web-favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)