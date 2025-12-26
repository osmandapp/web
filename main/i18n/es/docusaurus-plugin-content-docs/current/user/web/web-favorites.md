---
source-hash: ef13b994168cf04dcf98784cf4ef75aea6eb57a3e4db536a0fa48e3617173008
sidebar_position: 6
sidebar_label: Favorites
title: Favorites
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

Los favoritos en el Planificador Web te permiten guardar y gestionar lugares importantes directamente en el mapa. Se pueden usar para marcar ubicaciones a las que quieres acceder rápidamente, organizarlos en carpetas y reutilizarlos para navegación o planificación de rutas. La interfaz web proporciona herramientas convenientes para ver, editar y trabajar con favoritos mientras exploras el mapa, con todas las actualizaciones sincronizadas sin problemas en tu [OsmAnd Cloud](../personal/osmand-cloud.md).


## Gestionar favoritos {#manage-favorites}

![Editar favoritos en la nube de OsmAnd Web](@site/static/img/web/favorites_new.png)

Después de registrarte en [**OsmAnd Pro**](../personal/osmand-cloud.md#login) y para [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), tus Favoritos en el Planificador Web están organizados en carpetas. Cada carpeta agrupa lugares guardados y proporciona un conjunto de acciones disponibles desde el menú de Favoritos. 
Las siguientes acciones están disponibles:

- *Mostrar en el mapa* - muestra los puntos de favoritos de la carpeta elegida en el mapa.
- *Renombrar* - nombre y descripción de la carpeta de favoritos.
- *Compartir* - abre las opciones de compartición. Puedes elegir quién puede acceder a esta carpeta:
- *Descargar* - descarga la carpeta de favoritos elegida.
- *Eliminar* - elimina la carpeta de favoritos elegida.

### Compartir {#share}

Al seleccionar **Compartir** se abre la pantalla de compartición, donde se puede configurar el acceso a una carpeta de Favoritos. Se puede seleccionar uno de los siguientes modos de acceso:
- *Privado*. Solo tú puedes ver la carpeta. Cambiar a Privado revoca el acceso para todos los usuarios aprobados previamente. Se muestra un diálogo de confirmación antes de que se aplique el cambio.
- *Solo solicitud*. Cualquiera con el enlace puede solicitar acceso. Las solicitudes aparecen en la lista Pendiente, donde se pueden aprobar, denegar o bloquear.
- *Cualquiera*. Cualquiera con el enlace puede ver la carpeta inmediatamente, sin aprobación.  
Dependiendo del modo de acceso seleccionado, el botón **Copiar enlace** se hace disponible. El enlace se puede compartir para permitir la visualización o solicitar acceso.

La pantalla de compartición incluye tres listas de usuarios:
- Aprobados — usuarios que actualmente tienen acceso a la carpeta.
- Pendientes — usuarios que han solicitado acceso y están esperando aprobación o rechazo.
- Bloqueados — usuarios que no están permitidos acceder o solicitar acceso.  
Cada entrada de usuario incluye un menú que permite cambiar su estado o eliminar el acceso.

Durante la configuración de acceso, pueden aparecer los siguientes diálogos:
- *Cambiar acceso*. Se muestra al cambiar la carpeta a Privado. El diálogo advierte que se revocará el acceso de todos los usuarios existentes antes de confirmar el cambio.
- *Solicitudes de acceso*. Se muestra al gestionar usuarios en la lista Pendiente, permitiendo aprobar o denegar las solicitudes de acceso.

![Compartir favoritos en la nube de OsmAnd Web](@site/static/img/web/favorites_share.png) ![Compartir favoritos en la nube de OsmAnd Web](@site/static/img/web/favorites_share_2.png)


## Detalles de favoritos {#favorites-details} 

Al seleccionar un favorito se abre el panel **Detalles**. Este panel aparece cuando haces clic en un favorito directamente en el mapa o lo seleccionas de una carpeta de favoritos.

La vista de Detalles proporciona información asociada con el lugar seleccionado y depende de los datos disponibles para ese favorito específico. Como mínimo, incluye la ubicación en el mapa y sus coordenadas geográficas. Para lugares vinculados a objetos de OpenStreetMap o fuentes enriquecidas, se pueden mostrar metadatos adicionales, como nombres, categorías, identificadores o enlaces de referencia (por ejemplo, [Wikipedia](../plugins/wikipedia.md) o enlaces de Wikidata). 

![Detalles de favoritos web](@site/static/img/web/favorites_details.png)


## Acciones de favoritos {#favorites-actions}

### Agregar / Editar favorito {#add--edit-favorite}

[Para agregar](../personal/favorites.md#manage-favorites) un nuevo punto de favorito, haz clic derecho en la pantalla. 

Para editar un favorito existente, haz clic en el punto de favorito ya sea directamente en el mapa o selecciónalo de una carpeta de favoritos. Esto abre el panel de Detalles, donde está disponible la acción de Editar. La edición también se puede iniciar desde el menú de tres puntos (⋮) junto al favorito en la lista de Favoritos.

La interfaz de edición te permite modificar las propiedades principales del favorito, como su nombre, icono, color y descripción. El diseño y los campos disponibles son consistentes con la experiencia de edición en la [aplicación móvil de OsmAnd](../personal/favorites.md#create), proporcionando un flujo de trabajo familiar en todas las plataformas.

![Agregar favoritos en OsmAnd Web](@site/static/img/web/web_favorites_add.png)


### Otras acciones {#other-actions}

Además de la edición, cada favorito proporciona varias otras acciones que se pueden acceder desde el panel de Detalles o desde el menú de tres puntos (⋮) en la lista de Favoritos:
- *Eliminar* - elimina el favorito seleccionado de forma permanente. Esta acción está disponible tanto desde el panel de Detalles como desde el menú de tres puntos. La eliminación afecta al favorito en todos los dispositivos después de la sincronización.
- *Compartir* - esta acción te permite compartir un enlace directo al lugar.
- *Direcciones desde* - establece el favorito seleccionado como el punto de inicio para la planificación de rutas. El panel de Ruta se abre automáticamente, permitiéndote elegir un destino y un perfil de navegación.
- *Navegación* - establece el favorito seleccionado como el punto de destino. 


## Artículos relacionados {#related-articles}

- [Favoritos](../personal/favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Menú contextual del mapa](../map/map-context-menu.md)
- [Wikipedia](../plugins/wikipedia.md)