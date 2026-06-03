---
source-hash: 6e85a9c0cfb7a2e0e5b6f8f90f9b17a7da6b19a01478b0e05bd7a83438517602
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

![Editar favoritos en la nube de OsmAnd Web](@site/static/img/web/favorites_1_new.png)

Después de registrarte en [**OsmAnd Pro**](../personal/osmand-cloud.md#login) y para [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), tus Favoritos en el Planificador Web están organizados en carpetas. Cada carpeta agrupa lugares guardados y proporciona un conjunto de acciones disponibles desde el menú de Favoritos. 
Las siguientes acciones están disponibles:

- *Mostrar en el mapa* - muestra los puntos de favoritos de la carpeta elegida en el mapa.
- *Fijar carpeta* - fija una carpeta en la parte superior de la lista de Favoritos para un acceso rápido. Las carpetas fijadas están separadas de las otras carpetas. Para quitar una carpeta de la sección superior, selecciona *Quitar fijación de carpeta*. La carpeta Personal está fijada de forma predeterminada.
- *Renombrar* - nombre y descripción de la carpeta de favoritos.
- *Compartir* - abre las opciones de compartición. Puedes elegir quién puede acceder a esta carpeta.
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

![Editar favoritos en la nube de OsmAnd Web](@site/static/img/web/favorites_share.png) ![Editar favoritos en la nube de OsmAnd Web](@site/static/img/web/favorites_share_2.png)


## Detalles de favoritos {#favorites-details} 

Al seleccionar un favorito se abre el panel **Detalles**. Este panel aparece cuando haces clic en un favorito directamente en el mapa o lo seleccionas de una carpeta de favoritos.

La vista de Detalles proporciona información asociada con el lugar seleccionado y depende de los datos disponibles para ese favorito específico. Como mínimo, incluye la ubicación en el mapa y sus coordenadas geográficas. Para lugares vinculados a objetos de OpenStreetMap o fuentes enriquecidas, se pueden mostrar metadatos adicionales, como nombres, categorías, identificadores o enlaces de referencia (por ejemplo, Wikipedia o enlaces de Wikidata). 

![Detalles de favoritos web](@site/static/img/web/favorites_details.png)


## Acciones de favoritos {#favorites-actions}

[Para agregar](../personal/favorites.md#manage-favorites) un nuevo punto de favorito, haz clic derecho en la pantalla. 

Para editar un favorito existente, haz clic en el punto de favorito ya sea directamente en el mapa o selecciónalo de una carpeta de favoritos. Esto abre el panel de Detalles, donde está disponible la acción de Editar. La edición también se puede iniciar desde el menú de tres puntos (⋮) junto al favorito en la lista de Favoritos.

El panel de edición de favoritos permite cambiar las propiedades principales de un favorito, incluyendo su nombre, dirección, descripción, carpeta, icono, color y forma. La apariencia seleccionada se previsualiza tanto en el panel de edición como directamente en el mapa.

### Editar favoritos {#edit-favorites}

El campo **Dirección** admite la detección automática de dirección según la ubicación seleccionada en el mapa. El campo puede aparecer en varios estados:

- Buscando... — se muestra mientras se determina automáticamente la dirección.
- Campo vacío — se muestra después de borrar la dirección. En este estado, el botón de ubicación se puede usar para detectar la dirección de nuevo automáticamente.
- Campo rellenado — muestra la dirección detectada automáticamente o el texto introducido manualmente.

El campo de dirección también incluye acciones rápidas para borrar o restaurar la dirección detectada.

La sección **Descripción** permite añadir notas o información adicional al favorito. Al seleccionar Añadir notas se abre el editor de descripción en un panel secundario. Si ya se ha añadido una descripción, se muestra una vista previa corta en el panel principal y está limitada a dos líneas de texto. El editor de descripción admite formato de texto enriquecido y conserva automáticamente los cambios al volver al panel anterior.

Los favoritos se pueden organizar en carpetas para facilitar su gestión y acceso rápido. Al seleccionar el elemento **Carpeta** se abre un panel secundario donde se pueden seleccionar las carpetas disponibles. De forma predeterminada, se selecciona automáticamente la carpeta utilizada anteriormente. Cada carpeta también muestra el número de puntos de favoritos que contiene.

Se pueden crear nuevas carpetas directamente desde el panel de selección de carpetas. Al seleccionar el botón Añadir carpeta se abre un diálogo donde puedes introducir el nombre de la carpeta y elegir su ubicación en la lista de Favoritos.

El diálogo también incluye una sección Avanzado, donde se pueden configurar los ajustes de apariencia predeterminados para la carpeta. Estos ajustes incluyen el color, icono y forma predeterminados que se aplicarán automáticamente a los puntos de favoritos añadidos a esta carpeta.

![Editar carpeta web](@site/static/img/web/edit_folder.png)

### Apariencia {#appearance}

La sección **Apariencia** permite personalizar cómo se muestra el favorito en el mapa. Las siguientes propiedades están disponibles: icono, color, forma e icono. 

Al seleccionar **Icono** se abre un panel secundario con grupos de iconos categorizados.

- Los iconos están agrupados por categorías.
- Los iconos usados recientemente se muestran primero.
- El icono seleccionado actualmente está resaltado.
- La vista previa utiliza la forma y el color seleccionados.

Al seleccionar **Color** se abre el panel de paleta de colores.

- La paleta contiene colores predefinidos y definidos por el usuario.
- Se pueden añadir colores personalizados mediante el selector de color.
- Los colores se pueden editar, duplicar o eliminar a través del menú contextual.
- Los colores recién añadidos se guardan en la paleta del usuario y permanecen disponibles posteriormente.

La opción **Forma** define la forma de fondo utilizada para el marcador de favorito.  Las siguientes formas están disponibles: círculo, cuadrado y octágono.

La vista previa de la apariencia se actualiza inmediatamente tanto en el panel de edición como en el mapa al cambiar el icono, el color o la forma.

![Editar apariencia web](@site/static/img/web/edit_icon.png)

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