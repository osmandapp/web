---
source-hash: f973f145e5f4519df92ee087ead534986bb074b9e858cae169c3d3c6b00b1839
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

<InfoIncompleteArticle/>


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


## Crear Pista y Archivos Locales {#create-track-and-local-files}

La herramienta [**Planificar ruta**](../plan-route/create-route.md) de OsmAnd Web le permite crear y editar pistas de forma similar a la aplicación móvil. A continuación se explica cómo puede crear y gestionar pistas:


***Crear una nueva ruta:***

- *Haga clic con el botón derecho* en el mapa y seleccione **Crear Nueva Ruta**.
- Alternativamente, utilice el botón **Crear Pista** en el menú *Local* (situado en el lado derecho con los botones *Lápiz* y *Subir*).


***Gestionar pistas:***

- **Seleccionar Perfil de Navegación**. Elija un perfil (por ejemplo, senderismo, conducción) para secciones de ruta específicas (*Nuevos segmentos*) o para toda la ruta (*Todos los segmentos*).
- **Añadir Puntos de Ruta**. Haga clic en el mapa para añadir nuevos puntos.
- **Guardar la Ruta**. Guarde su ruta para usarla en el futuro.
- **Ver Detalles de la Ruta**. Acceda a información detallada de la pista, incluyendo longitud, duración y terreno.
  ![Crear Pista Web de OsmAnd](@site/static/img/web/create_route.png)


***Importar y crear pistas:***

- **Importar Pista**. Puede subir cualquier archivo GPX a la sección **Local** visitando [osmand.net/map](https://osmand.net/map).
- **Crear Pista**. Cree manualmente una nueva pista seleccionando puntos de ruta.
  ![Crear Pista Web de OsmAnd](@site/static/img/web/create_route_2.png)


***Acciones e información de la pista local:***

El menú **Pista Local** proporciona tres paneles para la edición: **Info**, **Pista** y **Puntos de ruta**.

**Panel de Información**:

- *Guardar en OsmAnd Cloud*. Guarde su pista en OsmAnd Cloud para acceder a ella desde cualquier dispositivo.
- *Añadir descripción*. Añada notas sobre la pista.
- *Renombrar*. Cambie el nombre de la pista.
- *Recalcular*. Añada o actualice los datos de elevación.
- *Elevación*. Vea el perfil de elevación.
- *Gráfico de velocidad*. Muestre los datos de velocidad a lo largo de la pista.
- *Gráfico de pendiente*. Muestre los cambios de pendiente a lo largo de la ruta.  
- *Detalles de la carretera*. Vea información detallada como el tipo de carretera, la superficie y la inclinación.
- *Descargar GPX*. Exporte la pista como un archivo GPX ([Función Pro](../purchases/index.md)).
- *Cerrar Pista*. Cierre la vista de edición de la pista.
- *Eliminar Pista*. Elimine permanentemente la pista.
  ![Crear Pista Web de OsmAnd](@site/static/img/web/create_route_3.png)

**Panel de Pista**:

- Vea y edite los puntos de la pista.
- Reordene o elimine puntos según sea necesario.

**Panel de Puntos de ruta**:

- Vea y gestione los puntos de ruta de la pista.
- Active o desactive la visibilidad de los puntos de ruta en el mapa.
- Elimine puntos de ruta individualmente si es necesario.

**Panel de Giros**:

- Vea información detallada sobre los giros a lo largo de la pista.

  ![Crear Pista Web de OsmAnd](@site/static/img/web/create_route_1.png)


***Funciones adicionales:***

- **Sincronizar con la aplicación**. Guarde las rutas en OsmAnd Cloud y acceda a ellas en su aplicación móvil.
- **Perfiles de ruta personalizados**. Ajuste los perfiles para adaptarlos a diferentes actividades, como ciclismo o senderismo.
- **Rutas compartibles**. Copie y comparta las URL de las rutas para la planificación colaborativa.