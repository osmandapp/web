---
source-hash: 0000cb42245d9871184d8009b30a97fd6f15555a6510bbbd8d52edde2e10f458
sidebar_position: 7
title:  Favoritos
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

**Favoritos** es una función de OsmAnd que le permite crear marcadores (notas) en el mapa. Estos puntos favoritos se muestran como estrellas amarillas por defecto, pero puede personalizarlos completamente con diferentes colores, formas e iconos. Los favoritos se agrupan en una capa de mapa dedicada, que se hace visible a partir del *nivel de zoom 6*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Introducción a Favoritos android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Introducción a Favoritos ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Punto Favorito {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capa de Favoritos Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Capa de Favoritos iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Los favoritos son parte de una capa de mapa especial, y puede [mostrarlos u ocultarlos](../map/point-layers-on-map.md#favorites) junto con sus [nombres](../map/point-layers-on-map.md#favorite-and-poi-names) en el mapa. Tocar un punto favorito abre el [Menú contextual](../map/map-context-menu.md#favorites--track-points-from-the-group), permitiéndole ver detalles y [editar o eliminar](../map/map-context-menu.md#add--edit-favorite) el punto.


### Crear {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Añadir descripción de Favorito Android](@site/static/img/personal/favorite_add_descr_android.png)  ![Grupo de Favorito Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Añadir descripción de Favorito iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![Grupo de Favorito iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Para añadir un punto favorito:

1. Seleccione un [PDI](../map/point-layers-on-map.md#points-of-interest-pois) o una estructura en el mapa.  
    Toque corto para un PDI o toque largo para un punto general del mapa.
2. Seleccione [Añadir (☆)](../map/map-context-menu.md#add--edit-favorite) en el menú contextual del mapa.

Al añadir un punto a partir de datos de OSM, la información relevante del PDI se incluye automáticamente. También puede crear un favorito [haciendo un toque largo](../map/map-context-menu.md#select-any-point-long-tap) en cualquier lugar del mapa.

***Campos para un punto Favorito:***

- **Nombre** — Un nombre único dentro del grupo (*Requerido*).
- **Dirección** y **Descripción** (*Opcional*).
- **Grupo** — Seleccione de un [grupo de Favoritos](#manage-favorites) existente o cree uno nuevo. En Android, también puede seleccionar una subcarpeta dentro de un grupo o crear una nueva. Las carpetas anidadas se muestran con su ruta completa (por ejemplo, *Viajes* / *Italia* / *Roma*).
- **Personalización visual** — El icono, color y forma pueden coincidir con la [apariencia del grupo](#change-group-appearance) por defecto o ser personalizados individualmente.
- **Multimedia** (*Solo Android*) — Adjunte fotos, vídeos, grabaciones de audio o imágenes de su Galería o Archivos.

**NOTA:** Si la capa de Favoritos está desactivada en [Configurar mapa](../map/configure-map-menu), al añadir un nuevo punto favorito se activa automáticamente la capa para que el favorito recién añadido sea visible en el mapa.


### Editar / Reemplazar / Eliminar {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Editar Favorito Android](@site/static/img/personal/favorite_edit_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Editar Favorito iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Para modificar un punto favorito:

1. [Toque](../map/map-context-menu.md#select-an-object-single-tap) el favorito en el mapa o vaya a [Mis Favoritos](#manage-favorites).
2. Elija **Editar favorito** en el [*menú contextual del mapa*](../map/map-context-menu.md#add--edit-favorite).

***Opciones disponibles:***

- **Editar detalles** — Nombre, icono, grupo, dirección, descripción y multimedia adjunto.
- **Reemplazar ubicación** — Reemplaza otro punto con este. Útil para actualizar un punto específico (p. ej., *Mi coche aparcado*) o crear uno nuevo.
- **Eliminar** — Elimina el favorito usando la opción de eliminar, accesible a través del menú Editar o mediante el botón de eliminar en Android.


### Iconos de Favoritos {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Mis lugares favoritos android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![mis_lugares_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

En OsmAnd hay disponible una amplia gama de iconos para PDI y waypoints. Puede:

- Seleccionar un icono de la lista de [categorías de PDI](../search/search-poi.md#categories-and-their-filters).
- Encontrar un icono adecuado utilizando la [opción de búsqueda](../search/search-all.md#how-to-use).


### Favoritos Especiales (Personal) {#special-favorites-personal}

La *carpeta Personal* contiene puntos especiales como **<Translate android="true" ids="favorite_home_category"/>** y **<Translate android="true" ids="work_button"/>**, a menudo utilizados en la [navegación](../navigation/setup/route-navigation.md#select-start-point). Esta carpeta no tiene un *menú de tres puntos*, y sus parámetros no se pueden cambiar.


### Multimedia (Solo Android) {#media}

![Multimedia](@site/static/img/personal/media_actions.webp) ![Multimedia](@site/static/img/personal/media_menu.webp)

La sección Multimedia le permite adjuntar fotos, vídeos, grabaciones de audio e imágenes a un punto favorito. Puede añadir multimedia al crear un favorito o más tarde desde la pantalla Editar favorito. Para adjuntar multimedia, toque *Añadir* en la sección Multimedia y elija una de las opciones disponibles:
- **Tomar una foto** — Capture una nueva foto con la cámara del dispositivo.
- **Tomar una nota de vídeo** — Grabe un nuevo vídeo.
- **Tomar una nota de audio** — Grabe una nota de audio.
- **Elegir de la Galería** — Seleccione una imagen existente de su dispositivo.
- **Elegir de Archivos** — Seleccione una imagen del sistema de archivos.

Una vez adjuntado el multimedia, aparece en la tarjeta Multimedia del menú contextual del favorito. La misma tarjeta Multimedia también está disponible para [Puntos de ruta](../map/tracks/track-context-menu.md#points--waypoints).

La tarjeta Multimedia muestra vistas previas de los elementos adjuntos. Los elementos mostrados siguen el orden de clasificación seleccionado. Toque *Mostrar todo* para abrir la galería completa. La galería muestra todo el multimedia adjunto al favorito seleccionado.

Toque cualquier elemento para abrirlo a pantalla completa. Las fotos y vídeos se pueden ver directamente, mientras que las grabaciones de audio incluyen controles de reproducción.


## Gestionar Favoritos {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Mis lugares favoritos android](@site/static/img/personal/my_places_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![mis_lugares_ios](@site/static/img/personal/my_places_ios_new.png)

</TabItem>

</Tabs>

La sección **Favoritos** le permite:

- [Buscar](#order--sorting--search) favoritos o grupos específicos. En iOS, los grupos de favoritos (carpetas) se organizan en tres secciones: **Fijados**, **Visibles** y **Ocultos**. Las secciones vacías no se muestran.
- [Operaciones masivas](#bulk-edit--delete) — Compartir, mover o eliminar múltiples favoritos a la vez.

### Orden / Clasificación / Búsqueda {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoritos android](@site/static/img/personal/favorites_points_sorting.webp) ![Favoritos android](@site/static/img/personal/favorites_folders_sorting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritos iOS](@site/static/img/personal/favorites_points_sorting_ios.webp) ![Favoritos iOS](@site/static/img/personal/favorites_folders_sorting.webp)
</TabItem>

</Tabs>

- **Clasificación** — Las carpetas y puntos de favoritos se pueden ordenar utilizando las opciones de clasificación disponibles en el menú de la lista. Para los puntos favoritos, las siguientes opciones están disponibles: *Nombre A – Z*, *Nombre Z – A*, *Última modificación*, *Más cercano a la ubicación actual*, *Más cercano al centro del mapa*, *Fecha más reciente primero* y *Fecha más antigua primero*. Para las carpetas de favoritos, las siguientes opciones están disponibles: *Nombre A – Z*, *Nombre Z – A*, *Última modificación*, *Fecha más reciente primero* y *Fecha más antigua primero*. Por defecto, los elementos se ordenan por Nombre A – Z. Las carpetas fijadas siempre se muestran en la parte superior de la lista. Están separadas visualmente del resto de las carpetas por un divisor. 
- **Búsqueda** — Utilice la [Búsqueda global](../search/search-all.md) para encontrar favoritos por nombre. Los favoritos se ordenan por distancia desde el centro del mapa. Para buscar puntos favoritos desde la lista de Favoritos en la pestaña Mis lugares, toque el icono *Buscar* (lupa).

### Edición / Eliminación Masiva {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Acciones de favoritos android](@site/static/img/personal/favorites_group_actions.png) ![Acción de eliminar favoritos android](@site/static/img/personal/favorites_actions.png)

Para gestionar múltiples favoritos o carpetas, active el *Modo de selección*. Puede abrir el Modo de selección de dos maneras:
- Toque el *menú de tres puntos* en la esquina superior derecha y elija *Seleccionar*.
- Haga un toque largo en un punto favorito o carpeta.

Cuando el Modo de selección está activado, aparecen casillas de verificación junto a los elementos en la lista. Seleccione los favoritos o carpetas requeridos tocando las casillas de verificación. Para seleccionar todos los elementos en la lista, toque el icono Seleccionar todo en la esquina superior derecha.

Las acciones disponibles dependen del tipo de elemento seleccionado. Cuando se seleccionan carpetas, están disponibles las siguientes acciones:
- **Compartir** — Exportar las carpetas seleccionadas como un archivo GPX de Favoritos.
- **Eliminar** — Eliminar las carpetas seleccionadas.

Cuando se seleccionan puntos favoritos, están disponibles las siguientes acciones:
- **Mover** — Mover los favoritos seleccionados a otra carpeta.
- **Añadir a marcadores del mapa** — Añadir los puntos seleccionados a la lista de Marcadores del mapa.
- **Añadir a pista** — Añadir los puntos seleccionados a una pista.
- **Añadir a navegación** — Iniciar la navegación al punto seleccionado.
- **Eliminar** — Eliminar los favoritos seleccionados.

</TabItem>

<TabItem value="ios" label="iOS">

![Acciones de favoritos ios](@site/static/img/personal/favorites_actions_folders.webp) ![Acciones de favoritos ios](@site/static/img/personal/favorites_actions_points.webp)

Para gestionar múltiples puntos favoritos o carpetas, active el *Modo de selección* tocando el *menú de tres puntos* en la esquina superior derecha y eligiendo *Seleccionar*. Cuando el Modo de selección está activado, aparecen casillas de verificación junto a los elementos en la lista. Seleccione los puntos favoritos o carpetas requeridos tocando las casillas de verificación. Para seleccionar todos los elementos en la lista, toque el icono Seleccionar todo en la esquina superior derecha.

Las acciones disponibles para los puntos favoritos seleccionados son las siguientes:

- **Compartir** — Exportar los puntos seleccionados como un archivo Favorites.gpx.
- **Mover** — Mover los puntos favoritos seleccionados a otra carpeta.
- **Cambiar apariencia** — Cambiar la apariencia de los puntos favoritos seleccionados.
- **Añadir a marcadores del mapa** — Añadir los puntos seleccionados a la lista de Marcadores del mapa.
- **Añadir a pista** — Añadir los puntos seleccionados a una pista.
- **Añadir a navegación** — Añadir los puntos seleccionados a la navegación.
- **Eliminar** — Eliminar los puntos favoritos seleccionados.

Para las carpetas seleccionadas, están disponibles las mismas acciones, con las siguientes opciones adicionales:

- **Mostrar en el mapa** / **Ocultar en el mapa** — Mostrar u ocultar los puntos favoritos de las carpetas seleccionadas en el mapa.
- **Fijar** / **Desfijar carpeta** — Fijar o desfijar las carpetas seleccionadas.

</TabItem>

</Tabs>

<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Acciones de Grupo de Favoritos {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funciones de la carpeta de favoritos android](@site/static/img/personal/favorites_folder_functions.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Acciones de favoritos ios](@site/static/img/personal/favorite_add_new_group_2_ios.webp)

</TabItem>

</Tabs>

En Android, utilice el ***Menú de tres puntos*** junto a cada carpeta para gestionar grupos de favoritos. En iOS, utilice la ***pulsación larga*** en la carpeta para gestionar grupos de favoritos: 

- **<Translate android="true" ids="shared_string_show_on_map"/>** / **Ocultar en el mapa** — Active esta opción para mostrar u ocultar los puntos favoritos de la carpeta en el mapa.
- **<Translate android="true" ids="pin_folder"/>** — Fije la carpeta seleccionada para mantenerla en la parte superior de la lista de favoritos para un acceso más rápido.
- **<Translate android="true" ids="shared_string_rename"/>** — Use esta opción para cambiar el nombre de la carpeta seleccionada.
- [<Translate android="true" ids="change_default_appearance"/>](#change-group-appearance) — Personalice cómo aparecen los puntos favoritos de la carpeta en el mapa cambiando sus iconos, colores o etiquetas.
- **<Translate android="true" ids="shared_string_share"/>** — Comparta los puntos favoritos de la carpeta exportándolos como un archivo *Favorites.gpx*, lo que facilita la transferencia o la copia de seguridad de sus datos.
- **<Translate android="true" ids="shared_string_move"/>** — Mueva la carpeta seleccionada, incluidos todos los puntos favoritos y las subcarpetas anidadas, a otra carpeta. La carpeta actual y sus subcarpetas no pueden seleccionarse como destino.
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** / **Eliminar de los marcadores del mapa** — Añada todos los puntos favoritos de la carpeta a la *lista de Marcadores del mapa* o elimínelos según sea necesario para una fácil referencia.
- **<Translate android="true" ids="add_to_a_track"/>** — Añada todos los puntos favoritos de la carpeta seleccionada a una pista. Esto abre la pantalla de selección de pistas donde puede elegir o crear una pista.
- **Añadir a navegación** (*Solo iOS*) — Añada todos los puntos favoritos de la carpeta seleccionada a la navegación.
- **<Translate android="true" ids="shared_string_delete"/>** — Elimine permanentemente la carpeta de favoritos seleccionada y todos los puntos que contiene.

### Cambiar Apariencia del Grupo {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *Menú de tres puntos → Cambiar apariencia predeterminada*

![Funciones de la carpeta de favoritos android](@site/static/img/personal/favorite_change_appearance_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *Pulsación larga en la carpeta → Apariencia predeterminada*

![Acciones de favoritos ios](@site/static/img/personal/favorite_add_new_group_3_ios.webp)

</TabItem>

</Tabs>

La opción **Cambiar Apariencia del Grupo** le permite establecer un estilo predeterminado para todos los favoritos en una carpeta. Puede ajustar los siguientes parámetros:

- **Icono** — Elija un icono de las categorías disponibles.
- **Color** — Seleccione un color sólido para resaltar los favoritos.
- **Forma** — Elija una forma de marcador (círculo, cuadrado, octágono).

Si los favoritos en una carpeta ya tienen iconos, colores o formas diferentes, se muestra el *Estado original*. Esto significa que cada favorito mantiene su estilo actual a menos que seleccione uno nuevo. Al guardar, también se le pedirá que elija cómo se deben aplicar los cambios:

- **Aplicar solo a puntos nuevos** — Los favoritos existentes permanecen sin cambios; los nuevos favoritos heredarán la apariencia predeterminada.
- **Aplicar a puntos existentes** — Actualice solo los favoritos que ya están en la carpeta.
- **Aplicar a todos los puntos** — Aplique el nuevo estilo tanto a los favoritos existentes como a los futuros.

Esta flexibilidad le permite estandarizar la apariencia de una carpeta o mantener personalizaciones únicas mientras establece valores predeterminados para puntos nuevos.


## Exportar / Importar {#export--import}

OsmAnd proporciona varios métodos para [hacer una copia de seguridad](./import-export.md) y [restaurar](./import-export.md#import) los favoritos:

- **Ubicaciones de copia de seguridad** — Almacenamiento local, [OsmAnd Cloud](../personal/osmand-cloud.md) (solo con [suscripción a OsmAnd Pro o OsmAnd Start](../purchases/index.md)), o aplicaciones de mensajería instantánea.

- **Formato de archivo** — Los favoritos se guardan como archivos `.gpx` (favorites.gpx). Utilice el formato `.osf` para hacer una copia de seguridad de los favoritos con su multimedia adjunto. Al importar la copia de seguridad se restauran tanto los puntos favoritos como su multimedia asociado.


### Copia de Seguridad Gratuita en la Nube {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funciones de la carpeta de favoritos android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![Acciones de favoritos ios](@site/static/img/personal/favorites_free_backup_2_ios.webp)

</TabItem>

</Tabs>

La [Copia de Seguridad Gratuita de Favoritos](../personal/osmand-cloud.md#osmand-start) es un plan de compra especial que le permite hacer una copia de seguridad de sus puntos favoritos (ubicaciones) para las versiones de **Android, iOS** o **Web** en la aplicación OsmAnd y restaurarlos desde OsmAnd Cloud. Este plan está disponible para los usuarios de [OsmAnd Free o Maps+](../purchases/index.md).  

*La Copia de Seguridad Gratuita de Favoritos* ofrece estos beneficios:

- **No se requiere pago**. Use la función de copia de seguridad sin comprar suscripciones de pago.
- **Guardar puntos favoritos**. Guarde regularmente sus puntos favoritos en OsmAnd para evitar perderlos si su dispositivo se bloquea o la aplicación se elimina.
- **Transferir puntos favoritos**. Importe sus puntos favoritos a un nuevo dispositivo con la función *Copia de Seguridad Gratuita de Favoritos* si usa OsmAnd en varios dispositivos.  


### Cómo Crear una Copia de Seguridad {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funciones de la carpeta de favoritos android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![Acciones de favoritos ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Necesita una cuenta de OsmAnd Cloud para usar la función *Copia de Seguridad Gratuita de Ajustes*. Si tiene una cuenta en *OsmAnd Pro* o una cuenta activa en *OsmAnd Cloud*, no verá el banner de promoción.  

- *Banner de Copia de Seguridad Gratuita de Favoritos*. Toque este banner para iniciar el proceso de copia de seguridad.
- *Complete el paso de registro* si no tiene una cuenta de OsmAnd Cloud siguiendo las instrucciones de la [guía de registro](../personal/osmand-cloud.md#login).
- *Navegue al menú de Compras de OsmAnd* (*Menú → Ajustes → Compras*).
- *[Paquete OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Seleccione esta opción para acceder a la función de Copia de Seguridad Gratuita de Ajustes.
- *Cree una copia de seguridad* de sus ajustes.

<!--
### All Favorites {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

You can export and import your favorites using the special buttons at the bottom of the Favorites screen. A [.gpx file](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) can be sent to Dropbox, email, messengers, and other applications installed on your device that support this feature.

- **Import** button (*Android*) / **Import favorite** (*iOS*). Allows you to import favorite points (*favorites.gpx*) as waypoints from a *GPX* file (a common GPS data format) from your device's storage.
- **Share** button (*Android*) / **Export favorite** (*iOS*). Allows you to export (share) all your favorites as a *favorites.gpx* file.
-->

### Grupo de Favoritos {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funciones de la carpeta de favoritos android](@site/static/img/personal/favorites_folder_functions_2_andr.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Acciones de favoritos ios](@site/static/img/personal/favorites_actions_1_ios.webp) 
</TabItem>

</Tabs>

- Para compartir varias carpetas de favoritos, active el [Modo de selección](#bulk-edit--delete), seleccione las carpetas requeridas y toque *Compartir*.
- Para compartir una sola carpeta de favoritos, toque el Menú de tres puntos (*Android*) o mantenga pulsada la carpeta (*iOS*), seleccione *Compartir* para enviar el archivo Favorites.gpx a la memoria de su dispositivo o compartirlo a través de aplicaciones de mensajería. En Android, si la carpeta contiene multimedia adjunto, aparece una hoja inferior de Compartir. Puede elegir:
    - *Solo puntos* — Comparta los puntos favoritos de la carpeta como un archivo GPX.
    - *Puntos y multimedia* — Comparta los puntos favoritos y el multimedia adjunto como un archivo OSF.


### Copia de Seguridad Automática de Favoritos {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *Android → data → net.osmand → files → backup*

![Exportación de copia de seguridad de favoritos Android](@site/static/img/personal/favorites_backup_export_andr.png)  ![Copia de seguridad automática de favoritos android](@site/static/img/personal/favorites_autobackup_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *Archivos → En mi iPhone → OsmAnd Maps → favourites_backup*

![Copia de seguridad automática de favoritos ios](@site/static/img/personal/favorites_autobackup.png)  

</TabItem>

</Tabs>

OsmAnd crea un **archivo de copia de seguridad** cada vez que se editan los favoritos.

- **Android**: Las copias de seguridad se almacenan en *Android → data → net.osmand → files → backup*. Use un gestor de archivos de terceros para acceder a ellas.

- **iOS**: Los archivos se encuentran en *Archivos → En mi iPhone → OsmAnd Maps → favourites_backup*.

**Exportación manual de copia de seguridad**  

- Ir a *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Exporte el archivo `.osf` al almacenamiento local, servicios en la nube o compártalo directamente.

:::caution
En las últimas versiones de ***Android***, el acceso a los directorios del sistema está limitado. Sin embargo, después de extraer el archivo de favoritos del archivo, sigue siendo posible reenviarlo a mensajeros o servicios en la nube, etc.  
:::


### Favoritos en Archivo GPX {#favorites-in-gpx-file}

Toda la información sobre un Favorito se almacena y describe mediante etiquetas. Al crear un punto Favorito, puede escribir su propia [descripción](#favorite-point) o usar información de los datos del [punto de interés (PDI)](../map/point-layers-on-map.md#points-of-interest-pois) de OSM desde el cual se creó su punto. Los puntos Favoritos, PDI y Waypoints usan las mismas **etiquetas** para almacenar información y se guardan en **formato de archivo GPX**.

Los favoritos también pueden contener referencias al multimedia adjunto mediante elementos `<link>` estándar de GPX. 


```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```  


## Artículos Relacionados {#related-articles}

- [Gestionar Tracks](../personal/tracks/manage-tracks.md#import--export-track)
- [Historial de Búsqueda](../search/search-history.md#export-and-share)
- [Esquemas de Paleta de Colores](../personal/color-palette-schemes.md)