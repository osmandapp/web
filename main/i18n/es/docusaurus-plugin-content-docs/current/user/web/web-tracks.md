---
source-hash: 2e0e202dc914399cfc04af97a092ae9d40cd89a34b4ce41472d2869d9810d626
sidebar_position: 5
sidebar_label: Pistas
title: Pistas
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

El Planificador Web te ofrece una forma sencilla de trabajar con tus datos personales directamente en el navegador. Después de iniciar sesión, puedes abrir tus pistas, ajustarlas, crear nuevas o cargar archivos desde tu computadora. 

Todos los cambios se sincronizan automáticamente a través de [OsmAnd Cloud](../personal/osmand-cloud.md), por lo que cualquier actualización que realices en la web aparecerá en tus dispositivos, y cualquier cosa que crees en tu teléfono también se mostrará aquí. Esto facilita el cambio entre plataformas y mantener tus datos consistentes dondequiera que uses OsmAnd.


## Cómo usar {#how-to-use}

Es una función de pago <ProFeature/>. Para usarla, inicia sesión en tu cuenta de OsmAnd Pro.

![Track login](@site/static/img/web/track_login.png) ![Track login](@site/static/img/web/track_login_2.png)

La sección de Pistas contiene todas las herramientas y acciones relacionadas con las pistas. Las siguientes opciones están disponibles:

- Mostrar pistas de [OsmAnd Cloud](#cloud-tracks).
- Agregar pistas en el mapa (carpeta **Visible en el mapa**).
- Ver toda la información de las pistas y el gráfico
- Modificar pistas y agregarlas a la Nube.
- Descargar y eliminar pistas.
- Crear nuevas carpetas o eliminarlas.
- Descargar carpetas como colección OSF u OBF.


## Visible en el mapa {#visible-on-the-map}

La vista **Visible en el mapa** enumera todas las pistas que se muestran actualmente en el mapa. Cualquier pista se puede agregar a esta lista desde el panel principal de Pistas usando la opción **⋮ → Hacer la pista visible**.

Las pistas que son visibles en el mapa se resaltan en azul, mientras que las pistas que están actualmente ocultas aparecen en gris. Un interruptor junto a cada pista te permite mostrarla o ocultarla rápidamente. El botón **Hide all** desactiva todas las pistas visibles de una vez.

Debajo de la lista principal, la sección **Recently visible** muestra pistas que se mostraron en el mapa anteriormente. Esto facilita volver a activar una pista sin buscarla nuevamente en tus carpetas o en OsmAnd Cloud.

![Visible on the map](@site/static/img/web/visible_new.png) ![Visible on the map](@site/static/img/web/visible_new_2.png)


## Menú de carpeta de pistas {#track-folder-menu}

![Track folder menu](@site/static/img/web/collection_new.png)

Haz clic en el botón de tres puntos (⋮) para abrir el menú de *Carpeta de pistas*. Desde aquí, puedes:

 - Descargar como OSF.
 - Descargar como Colección OBF. Exporta la carpeta en Formato Binario de OsmAnd, eligiendo un [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) o un [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **OBF file**. Puedes descargar un mapa OBF sin conexión y abrirlo con OsmAnd en tu dispositivo. Es adecuado para mostrar un gran número de pistas en el mapa.
      -  **Travel OBF**. También puedes importar un mapa de pistas como un libro de viajes, lo que te permite seleccionar pistas individuales en el mapa y usarlas como archivos GPX normales. Un libro de viajes también admite funciones como mostrar pistas como puntos, filtrar pistas por tipo de actividad y filtrar waypoints.
 - Renombrar. Abre un diálogo donde puedes ingresar un nuevo nombre para la carpeta seleccionada. El cambio se sincroniza con OsmAnd Cloud y aparecerá en todos los dispositivos conectados.
 - Eliminar. Abre un diálogo de confirmación. Eliminar una carpeta la elimina permanentemente junto con todas las pistas que contiene. Esta acción también se sincroniza a través de OsmAnd Cloud.

![Track folder menu](@site/static/img/web/collection_rename.png) ![Track folder menu](@site/static/img/web/collection_delete.png)


## Pistas en la nube {#cloud-tracks}

Las pistas GPX que tienes en [OsmAnd Cloud](../personal/osmand-cloud.md) estarán disponibles para mostrar y editar después de iniciar sesión. Solo para usuarios **Pro** <ProFeature/> y para usuarios de [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) (que pueden descargar sus datos incluso después de que su suscripción Pro haya expirado).

Las siguientes funciones están disponibles después de elegir una pista en la nube:
- *Information* - mostrando los datos de la pista.
- *Elevation* - gráfico de elevación.
- *Speed* - gráfico de velocidad.
- *Slope* - gráfico de pendiente.
- *Recalculate Elevation (Satellite)* - recalcula los valores de elevación para la pista seleccionada y los muestra en el gráfico de elevación.
- *Road type* - divide la pista en segmentos por clasificación de carretera.
- *Surface* - muestra los tipos de superficies de la pista a lo largo de la ruta.
- *Smoothness* - muestra la suavidad de los segmentos basada en etiquetas OSM.

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_new.png) ![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_details_new.png)


## Artículos relacionados {#related-articles}

- [Manage Tracks](../personal/tracks/manage-tracks.md)
- [Tracks Analyzer](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)