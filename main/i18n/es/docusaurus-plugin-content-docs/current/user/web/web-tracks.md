---
source-hash: ece3e6010ee14839c5fe53b38593cda3c765a31a9395566df04b16ce2b73c3b4
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

![Inicio de sesión en pistas](@site/static/img/web/track_login.png) ![Inicio de sesión en pistas](@site/static/img/web/track_login_2.png)

La sección de Pistas contiene todas las herramientas y acciones relacionadas con las pistas. Las siguientes opciones están disponibles:

- Mostrar pistas de [OsmAnd Cloud](#cloud-tracks).
- Agregar pistas en el mapa (carpeta **Visible en el mapa**).
- Ver toda la información de las pistas y el gráfico
- Modificar pistas y agregarlas a la Nube.
- Descargar y eliminar pistas.
- Crear nuevas carpetas o eliminarlas.
- Descargar carpetas como colección OSF u OBF.


## Visible en el mapa {#visible-on-the-map}

La vista **Visible en el mapa** enumera todas las pistas que se muestran actualmente en el mapa. Cualquier pista se puede agregar a esta lista desde el panel principal de Pistas usando la opción **⋮ → Hacer visible la pista**.

Las pistas que son visibles en el mapa se resaltan en azul, mientras que las pistas que están actualmente ocultas aparecen en gris. Un interruptor junto a cada pista te permite mostrarla o ocultarla rápidamente. El botón **Ocultar todo** desactiva todas las pistas visibles de una vez.

Debajo de la lista principal, la sección **Recientemente visible** muestra pistas que se mostraron en el mapa anteriormente. Esto facilita volver a activar una pista sin buscarla nuevamente en tus carpetas o en OsmAnd Cloud.

![Visible en el mapa](@site/static/img/web/visible_new.png) ![Visible en el mapa](@site/static/img/web/visible_new_2.png)


## Menú de carpeta de pistas {#track-folder-menu}

![Menú de carpeta de pistas](@site/static/img/web/collection_new.png)

Haz clic en el botón de tres puntos (⋮) para abrir el menú de *Carpeta de pistas*. Desde aquí, puedes:

 - Descargar como OSF.
 - Descargar como Colección OBF. Exporta la carpeta en formato binario de OsmAnd, eligiendo un [archivo OBF](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) o un [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **Archivo OBF**. Puedes descargar un mapa OBF sin conexión y abrirlo con OsmAnd en tu dispositivo. Es adecuado para mostrar un gran número de pistas en el mapa.
      -  **Travel OBF**. También puedes importar un mapa de pistas como un libro de viajes, lo que te permite seleccionar pistas individuales en el mapa y usarlas como archivos GPX normales. Un libro de viajes también admite funciones como mostrar pistas como puntos, filtrar pistas por tipo de actividad y filtrar puntos de ruta.
 - Renombrar. Abre un diálogo donde puedes ingresar un nuevo nombre para la carpeta seleccionada. El cambio se sincroniza con OsmAnd Cloud y aparecerá en todos los dispositivos conectados.
 - Eliminar. Abre un diálogo de confirmación. Eliminar una carpeta la elimina permanentemente junto con todas las pistas que contiene. Esta acción también se sincroniza a través de OsmAnd Cloud.

![Menú de carpeta de pistas](@site/static/img/web/collection_rename.png) ![Menú de carpeta de pistas](@site/static/img/web/collection_delete.png)


## Pistas en la nube {#cloud-tracks}

Las pistas GPX que tienes en [OsmAnd Cloud](../personal/osmand-cloud.md) estarán disponibles para mostrar y editar después de iniciar sesión. Solo para usuarios **Pro** <ProFeature/> y para usuarios de [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) (que pueden descargar sus datos incluso después de que su suscripción Pro haya expirado).

Las siguientes funciones están disponibles después de seleccionar una pista en la nube:

![Edición de GPX en la nube de OsmAnd Web](@site/static/img/web/cloud_track.png)

- Pantallas de información:
  - *Información* - muestra los datos de la pista.
  - *Elevación* - gráfico de elevación.
  - *Velocidad* - gráfico de velocidad.
  - *Pendiente* - gráfico de pendiente.
  - *Configuración* - lista de perfiles de navegación para la herramienta *Crear ruta*.
  - *Giros* - una lista generada de instrucciones de giro aproximadas basada en la geometría de la pista.
  - *Tipo de carretera* - divide la pista en segmentos por clasificación de carretera.
  - *Superficie* - muestra los tipos de superficies de la pista a lo largo de la ruta.
  - *Suavidad* - muestra la suavidad de los segmentos basada en etiquetas OSM.

![Edición de GPX en la nube de OsmAnd Web](@site/static/img/web/cloud_track_turns.png) ![Edición de GPX en la nube de OsmAnd Web](@site/static/img/web/cloud_track_details.png)

- Botones de acción:
  - *Editar pista* - agregar pista en la nube a local para editar (botón _Editar localmente_ en el panel).
  - *Descargar GPX* - descarga la pista a la PC.
  - *Recalcular* Elevación (Satélite) - muestra el gráfico de elevación de la pista seleccionada.
  - *Eliminar pista* - elimina la pista.
  - *Cerrar pista* - cierra la pista.


## Artículos relacionados {#related-articles}

- [Administrar pistas](../personal/tracks/manage-tracks.md)
- [Analizador de pistas](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)