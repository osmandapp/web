---
source-hash: c674aa26de62610f1442ef441eaa008b20c3b4a69dd7617b13ccd27ccf7f2234
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

![Añadir descripción de Favorito Android](@site/static/img/personal/favorite_add_descr_android.png)  ![Grupo de Favoritos Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Añadir descripción de Favorito iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![Grupo de Favoritos iOS](@site/static/img/personal/favorite_group_ios.png)

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
- **Grupo** — Seleccione de un [grupo de Favoritos](#manage-favorites) existente o cree uno nuevo.
- **Personalización visual** — El icono, color y forma pueden coincidir con la [apariencia del grupo](#change-group-appearance) por defecto o ser personalizados individualmente.


### Editar / Reemplazar / Eliminar {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Editar Favorito Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Editar Favorito iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Para modificar un punto favorito:

1. [Toque](../map/map-context-menu.md#select-an-object-single-tap) el favorito en el mapa o vaya a [Mis Favoritos](#manage-favorites).
2. Elija **Editar favorito** en el [*menú contextual del mapa*](../map/map-context-menu.md#add--edit-favorite).

***Opciones disponibles:***

- **Editar detalles** — Nombre, icono, grupo, dirección y descripción.
- **Reemplazar ubicación** — Reemplaza otro punto con este. Útil para actualizar un punto específico (p. ej., *Mi coche aparcado*) o crear uno nuevo.
- **Eliminar** — Elimina el favorito usando la opción de eliminar, accesible a través del menú Editar o mediante el botón de eliminar en Android.


### Iconos de Favoritos {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Mis lugares favoritos android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![mis_lugares_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

En OsmAnd hay disponible una amplia gama de iconos para PDI y waypoints. Puede:

- Seleccionar un icono de la lista de [categorías de PDI](../search/search-poi.md#categories-and-their-filters).
- Encontrar un icono adecuado utilizando la [opción de búsqueda](../search/search-all.md#how-to-use).


### Favoritos Especiales (Personal) {#special-favorites-personal}

La *carpeta Personal* contiene puntos especiales como **<Translate android="true" ids="favorite_home_category"/>** y **<Translate android="true" ids="work_button"/>**, a menudo utilizados en la [navegación](../navigation/setup/route-navigation.md#select-starting-point). Esta carpeta no tiene un *menú de tres puntos*, y sus parámetros no se pueden cambiar.


## Gestionar Favoritos {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Mis lugares favoritos android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![mis_lugares_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

La sección **Mis Favoritos** le permite:

- [Buscar](#order--sorting--search) favoritos o grupos específicos.
- [Operaciones masivas](#bulk-edit--delete) — Renombrar, mover o eliminar múltiples favoritos a la vez.

### Orden / Clasificación / Búsqueda {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Carpetas de favoritos android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Carpetas de favoritos ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Clasificación** — Las carpetas y puntos de favoritos se ordenan alfabéticamente, con la [carpeta personal](../personal/favorites.md#special-favorites-personal) en la parte superior.
- **Búsqueda** — Utilice la [Búsqueda global](../search/search-all.md) para encontrar favoritos por nombre. Los favoritos se ordenan por distancia desde el centro del mapa.


### Edición / Eliminación Masiva {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Acciones de favoritos android](@site/static/img/personal/favorites_actions_android.png) ![Acción de eliminar favoritos android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Acciones de favoritos ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Para gestionar múltiples favoritos, toque el icono **Eliminar** (*icono de papelera en Android*) o el botón **Editar** (*icono de lápiz en iOS*).
2. Seleccione favoritos individuales o carpetas enteras para operaciones masivas.
3. **Opciones disponibles** — *Eliminar* para Android e iOS, *Mover a un Grupo de Favoritos*, *Compartir* y *Cambiar Color* para iOS.

<!--
### Añadir Favoritos a los Marcadores del Mapa {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Funciones de la carpeta de favoritos android](@site/static/img/personal/favorites_folder_functions_android.png)

Puede añadir o eliminar sus favoritos de la [lista de Marcadores del mapa](../personal/markers.md).
Pulsar el botón &#8942; (**Android**) abre funciones especiales para una carpeta (grupo) de Favoritos elegida.

**Funciones para la carpeta de Favoritos:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** o **<Translate android="true" ids="remove_from_map_markers"/>**.
- Añadir o eliminar todos los puntos Favoritos de una carpeta en la [lista de Marcadores del mapa](../personal/markers.md).
-->


### Acciones de Grupo de Favoritos {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *Menú de tres puntos → Cambiar apariencia predeterminada*

![Funciones de la carpeta de favoritos android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *Pulsación larga en la carpeta → Apariencia predeterminada*

![Acciones de favoritos ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Use el ***Menú de tres puntos*** (*Android*) junto a cada carpeta y la ***pulsación larga*** (*iOS*) en la carpeta para gestionar grupos de favoritos:

- **<Translate android="true" ids="shared_string_rename"/>** — Use esta opción para cambiar el nombre de la carpeta seleccionada.

- **<Translate android="true" ids="change_default_appearance"/>** — Personalice cómo aparecen los puntos favoritos de la carpeta en el mapa cambiando sus iconos, colores o etiquetas.

- **<Translate android="true" ids="shared_string_show_on_map"/>** o **Ocultar en el mapa** — Active esta opción para mostrar u ocultar los puntos favoritos de la carpeta en el mapa.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** o **Eliminar de los marcadores del mapa** (*Solo Android*) — Añada todos los puntos favoritos de la carpeta a la *lista de Marcadores del mapa* o elimínelos según sea necesario para una fácil referencia.

- **<Translate android="true" ids="shared_string_share"/>** — Comparta los puntos favoritos de la carpeta exportándolos como un archivo *Favorites.gpx*, lo que facilita la transferencia o la copia de seguridad de sus datos.

- **<Translate android="true" ids="shared_string_delete"/>** — Elimine permanentemente la carpeta de favoritos seleccionada y todos los puntos que contiene.

Más detalles en el artículo [Mis Lugares](../personal/myplaces.md#favorites).



### Cambiar Apariencia del Grupo {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funciones de la carpeta de favoritos android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Acciones de favoritos ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Ajustes de *Cambiar Apariencia del Grupo*:

- **Icono, color, forma** — Establezca un estilo predeterminado para todos los favoritos de un grupo.
- **Consistencia** — Los nuevos favoritos añadidos al grupo heredan la apariencia predeterminada automáticamente.
- **Personalización** — Sobrescriba la configuración predeterminada para los puntos existentes en la carpeta, solo para los nuevos favoritos, o aplíquela a todos.


## Exportar / Importar {#export--import}

OsmAnd proporciona varios métodos para [hacer una copia de seguridad](./import-export.md) y [restaurar](./import-export.md#import) los favoritos:

- **Ubicaciones de copia de seguridad** — Almacenamiento local, [OsmAnd Cloud](../personal/osmand-cloud.md) (solo con [suscripción a OsmAnd Pro o OsmAnd Start](../purchases/index.md)), o aplicaciones de mensajería instantánea.

- **Formato de archivo** — Los favoritos se guardan como archivos `.gpx` (favorites.gpx).


### Copia de Seguridad Gratuita en la Nube {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funciones de la carpeta de favoritos android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Acciones de favoritos ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

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

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Acciones de favoritos ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Necesita una cuenta de OsmAnd Cloud para usar la función *Copia de Seguridad Gratuita de Ajustes*. Si tiene una cuenta en *OsmAnd Pro* o una cuenta activa en *OsmAnd Cloud*, no verá el banner de promoción.

- *Banner de Copia de Seguridad Gratuita de Favoritos*. Toque este banner para iniciar el proceso de copia de seguridad.
- *Complete el paso de registro* si no tiene una cuenta de OsmAnd Cloud siguiendo las instrucciones de la [guía de registro](../personal/osmand-cloud.md#login).
- *Navegue al menú de Compras de OsmAnd* (*Menú → Ajustes → Compras*).
- *[Paquete OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Seleccione esta opción para acceder a la función de Copia de Seguridad Gratuita de Ajustes.
- *Cree una copia de seguridad* de sus ajustes.


### Todos los Favoritos {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Acciones de favoritos android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Exportar importar favoritos ios](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

Puede exportar e importar sus favoritos utilizando los botones especiales en la parte inferior de la pantalla de Favoritos. Un archivo [.gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) puede ser enviado a Dropbox, correo electrónico, mensajeros y otras aplicaciones instaladas en su dispositivo que soporten esta función.

- Botón **Importar** (*Android*) / **Importar favorito** (*iOS*). Le permite importar puntos favoritos (*favorites.gpx*) como waypoints desde un archivo *GPX* (un formato común de datos GPS) desde el almacenamiento de su dispositivo.
- Botón **Compartir** (*Android*) / **Exportar favorito** (*iOS*). Le permite exportar (compartir) todos sus favoritos como un archivo *favorites.gpx*.


### Grupo de Favoritos {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funciones de la carpeta de favoritos android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Acciones de favoritos ios](@site/static/img/personal/favorites_actions_1_ios.png)   ![Acciones de favoritos ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Toque el **Menú de tres puntos** (*Android*) o el botón **Editar** (*icono de lápiz en iOS*) o haga una **pulsación larga** en la carpeta (*iOS*) de la carpeta de favoritos seleccionada.
- Elija el botón **Compartir** para enviar el archivo *Favorites.gpx* a la memoria de su dispositivo o compartirlo a través de aplicaciones de mensajería.


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