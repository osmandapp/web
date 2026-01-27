---
source-hash: efbd8cb409a1e8ef85e36e19d96eeb7a90fa212c810385f1ad6562e2e09d6d40
sidebar_position: 9
sidebar_label:  Planificar Ruta
title: Planificar Ruta en el Sitio Web
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
-->


## Resumen {#overview}

El Planificador de Rutas Web de OsmAnd le permite crear rutas de navegación, planificar pistas y gestionar archivos locales directamente desde su navegador. Esta herramienta web es útil para crear rutas de viaje detalladas que puede sincronizar con su aplicación o compartir con otros.


<!--
## Navigation Route {#navigation-route}

To create a navigation route, follow these steps:

- **Right-click** on the map to add waypoints:

  - *Navigate from*. Set the starting point.
  - *Navigate to*. Set the destination.
  - *Navigate via*. Add intermediate points if needed.

- After setting the start and end points, the route will be displayed on the map.

- In the **Route** block:

  - Move the start and end points if needed.
  - Edit the waypoints and choose the desired route type (e.g., car, bicycle, walking).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Select the appropriate **Route Profile** for different navigation options.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Click on the orange circles along the route to view detailed navigation instructions.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- To share the route, copy the URL. Example: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Crear Nueva Ruta {#create-new-route}

Hay dos formas de iniciar una nueva ruta en Planificar ruta. La primera opción es directamente desde el mapa: haga clic con el botón derecho en cualquier lugar del mapa y seleccione **Crear nueva ruta**. La segunda opción es desde el panel izquierdo: haga clic en el botón **Crear pista**.

Una vez creada la ruta, añada puntos directamente en el mapa. Cada clic coloca el siguiente punto y el planificador construye la ruta entre los puntos.

![OsmAnd Web Crear Nueva Ruta](@site/static/img/web/create_new_route.png)

### Importar Pista {#import-track}

Si ya tiene un archivo de pista, puede importarlo en Planificar ruta y continuar trabajando con él en el Planificador Web. Haga clic en el botón **Importar pista** y seleccione un archivo GPX de su ordenador. Después de la carga, la pista aparece en su lista local y se abre en el planificador, para que pueda revisarla en el mapa y proceder con la edición y gestión en los paneles de pista.

### Archivos Locales {#local-files}

Todas las rutas y pistas que cree o importe en Planificar ruta se añaden a la lista Local en el panel izquierdo. Esto facilita mantener varios archivos GPX en un solo lugar y cambiar entre ellos mientras planifica.

Cada elemento de la lista tiene un interruptor que le permite mostrar u ocultar rápidamente la pista en el mapa. Seleccione una pista de la lista para abrirla en el planificador y continuar trabajando con ella. 

![OsmAnd Web Crear Nueva Ruta](@site/static/img/web/local_files.png)


## Gestionar Pista {#manage-track}

Cuando cree o importe una ruta en Planificar ruta, se abre un panel de pista vertical. Utilice este panel para cambiar el perfil de enrutamiento y gestionar la ruta. Haga clic en el control de perfil para abrir el diálogo **Cambiar perfil**, seleccione el perfil que necesite (por ejemplo, Coche, Bicicleta o Peatón) y elija cómo aplicarlo: *Siguientes segmentos* aplica el perfil solo a las nuevas partes añadidas a partir de este punto, mientras que *Todos los segmentos* recalcula toda la ruta con el perfil seleccionado.

Desde el panel de pista también puede realizar acciones comunes de archivo. Puede **Guardar en la Nube** para conservar la ruta para uso posterior, **Descargar GPX** para exportarla como archivo, **Cerrar pista** para detener su edición o **Eliminar pista** para quitarla de su lista local. Estas acciones también están disponibles desde los controles correspondientes en el [Panel de Información](#info-panel).

![OsmAnd Web Gestionar Pista](@site/static/img/web/manage_track_new.png) ![OsmAnd Web Gestionar Pista](@site/static/img/web/change_profile.png)


## Paneles de Detalles de Pista {#track-details-panels}

El menú de pista local incluye tres paneles: **Información**, **Pista** y **Puntos de ruta**. Úselos para ver información de la pista y gestionar puntos de ruta y puntos intermedios.

### Panel de Información {#info-panel}

El Panel de Información resume la pista seleccionada y muestra datos clave de ruta y elevación. Incluye una visión general rápida de las estadísticas de la ruta, además de gráficos y análisis adicionales de la pista basados en los datos de mapa disponibles.

La sección de resumen muestra:

- Puntos — el número de puntos de ruta utilizados para construir la ruta.
- Distancia — la longitud total de la ruta.
- Subida / bajada — ascenso total y descenso total a lo largo de la ruta.
- Elevación (mín/prom/max) — estadísticas de elevación para la ruta.
- Si faltan datos de elevación o necesitan actualizarse, utilice Elevación (Satélite) → recalcular para reconstruir la elevación utilizando datos satelitales (cuando estén disponibles).

Debajo del resumen, el panel proporciona gráficos:

- Elevación — un perfil de elevación de la ruta.
- Pendiente — un gráfico de pendiente que muestra los cambios de gradiente a lo largo de la pista.

Para detalles adicionales de la pista, abra las secciones de análisis:

- Superficie — muestra los tipos de superficie a lo largo de la ruta basados en datos OSM.
- Suavidad — muestra la suavidad de los segmentos basada en etiquetas OSM.

Las acciones comunes de pista como guardar, descargar, cerrar y eliminar también están disponibles en este panel.

![OsmAnd Web Panel de Información](@site/static/img/web/info_panel.png) ![OsmAnd Web Gestionar Pista](@site/static/img/web/info_panel_2.png)

### Panel de Pista {#track-panel}

El Panel de Pista muestra la lista de puntos de ruta utilizados para construir la pista. Úselo para revisar y editar la estructura de la ruta: arrastre puntos para reordenarlos, elimine puntos utilizando el icono de eliminar o utilice Limpiar puntos para eliminar todos los puntos y empezar de nuevo.

![OsmAnd Web Panel de Pista](@site/static/img/web/track_panel.png)

### Panel de Puntos de Ruta {#waypoints-panel}

El Panel de Puntos de Ruta se utiliza para ver y gestionar puntos de ruta para la pista seleccionada. Los puntos de ruta se pueden añadir desde el menú contextual del mapa — haga clic con el botón derecho en el mapa y elija la opción para **Añadir punto de ruta**, luego complete los detalles del punto de ruta (como nombre, icono y color) y guárdelo.

En la lista de Puntos de Ruta, puede controlar si los puntos de ruta se muestran en el mapa y eliminar puntos de ruta individuales cuando sea necesario. Para eliminar todos los puntos de ruta de la pista a la vez, utilice *Limpiar todos los puntos de ruta*.

![OsmAnd Web Panel de Puntos de Ruta](@site/static/img/web/waypoints_panel.png)


## Artículos Relacionados {#related-articles}

- [Planificar una Ruta](../plan-route/create-route.md)
- [Guías de Viaje](../plan-route/travel-guides.md)
- [Navegación](../web/web-navigation.md)