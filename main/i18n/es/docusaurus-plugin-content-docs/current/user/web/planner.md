---
source-hash: 4861815642f39190c1d87fb62206d4b05c6eea3b5d2af97e4dcef2e6834f466c
sidebar_position: 5
sidebar_label: Planificar Ruta
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

El planificador de rutas web de OsmAnd te permite crear rutas de navegación, planificar trayectos y gestionar archivos locales directamente desde tu navegador. Esta herramienta web es útil para crear rutas de viaje detalladas que puedes sincronizar con tu aplicación o compartir con otros.


## Ruta de Navegación {#navigation-route}

Para crear una ruta de navegación, sigue estos pasos:

- Haz **clic derecho** en el mapa para añadir puntos intermedios:

  - *Navegar desde*. Establece el punto de partida.
  - *Navegar hasta*. Establece el destino.
  - *Navegar vía*. Añade puntos intermedios si es necesario.

- Después de establecer los puntos de inicio y fin, la ruta se mostrará en el mapa.

- En el bloque de **Ruta**:

  - Mueve los puntos de inicio y fin si es necesario.
  - Edita los puntos intermedios y elige el tipo de ruta deseado (por ejemplo, coche, bicicleta, a pie).

  ![OsmAnd Web Crear Ruta](@site/static/img/web/navigation.png)

- Selecciona el **Perfil de Ruta** adecuado para las diferentes opciones de navegación.

  ![OsmAnd Web Crear Ruta](@site/static/img/web/profile_type.png)

- Haz clic en los círculos naranjas a lo largo de la ruta para ver instrucciones de navegación detalladas.

  ![OsmAnd Web Crear Ruta](@site/static/img/web/nav_instr.png)

- Para compartir la ruta, copia la URL. Ejemplo: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Crear Trayecto y Archivos Locales {#create-track-and-local-files}

La herramienta [**Planificar ruta**](../plan-route/create-route.md) de OsmAnd Web te permite crear y editar trayectos de forma similar a la aplicación móvil. Así es como puedes crear y gestionar trayectos:


***Crear una nueva ruta:***

- *Haz clic derecho* en el mapa y selecciona **Crear Nueva Ruta**.
- Alternativamente, usa el botón **Crear Trayecto** en el menú *Local* (ubicado en el lado derecho con los botones *Lápiz* y *Subir*).


***Gestionar trayectos:***

- **Seleccionar Perfil de Navegación**. Elige un perfil (por ejemplo, senderismo, conducción) para secciones de ruta específicas (*Nuevos segmentos*) o para toda la ruta (*Todos los segmentos*).
- **Añadir Puntos Intermedios**. Haz clic en el mapa para añadir nuevos puntos.
- **Guardar la Ruta**. Guarda tu ruta para uso futuro.
- **Ver Detalles de la Ruta**. Accede a información detallada del trayecto, incluyendo longitud, duración y terreno.
  ![OsmAnd Web Crear Trayecto](@site/static/img/web/create_route.png)


***Importar y crear trayectos:***

- **Importar Trayecto**. Puedes subir cualquier archivo GPX a la sección **Local** visitando [osmand.net/map](https://osmand.net/map).
- **Crear Trayecto**. Crea manualmente un nuevo trayecto seleccionando puntos intermedios.
  ![OsmAnd Web Crear Trayecto](@site/static/img/web/create_route_2.png)


***Acciones e información de trayectos locales:***

El menú **Trayecto Local** proporciona tres paneles para la edición: **Info**, **Trayecto** y **Puntos intermedios**.

**Panel de Información**:

- *Guardar en la Nube*. Guarda tu trayecto en OsmAnd Cloud para acceder a él desde cualquier dispositivo.
- *Añadir descripción*. Añade notas sobre el trayecto.
- *Renombrar*. Cambia el nombre del trayecto.
- *Recalcular*. Añade o actualiza los datos de elevación.
- *Elevación*. Ver el perfil de elevación.
- *Gráfico de velocidad*. Muestra los datos de velocidad a lo largo del trayecto.
- *Gráfico de pendiente*. Muestra los cambios de pendiente a lo largo de la ruta.
- *Detalles de la carretera*. Ver información detallada como el tipo de carretera, la superficie y la pendiente.
- *Descargar GPX*. Exporta el trayecto como un archivo GPX ([Función Pro](../purchases/index.md)).
- *Cerrar Trayecto*. Cierra la vista de edición del trayecto.
- *Eliminar Trayecto*. Elimina permanentemente el trayecto.
  ![OsmAnd Web Crear Trayecto](@site/static/img/web/create_route_3.png)

**Panel de Trayecto**:

- Ver y editar puntos del trayecto.
- Reordenar o eliminar puntos según sea necesario.

**Panel de Puntos Intermedios**:

- Ver y gestionar los puntos intermedios del trayecto.
- Alternar la visibilidad de los puntos intermedios en el mapa.
- Eliminar puntos intermedios individualmente si es necesario.

**Panel de Giros**:

- Ver información detallada sobre los giros a lo largo del trayecto.

  ![OsmAnd Web Crear Trayecto](@site/static/img/web/create_route_1.png)


***Características adicionales:***

- **Sincronizar con la aplicación**. Guarda rutas en OsmAnd Cloud y accede a ellas en tu aplicación móvil.
- **Perfiles de ruta personalizados**. Ajusta los perfiles para adaptarse a diferentes actividades, como ciclismo o senderismo.
- **Rutas compartibles**. Copia y comparte URLs de rutas para una planificación colaborativa.

> *Última actualización: Enero de 2025*