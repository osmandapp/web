---
source-hash: 6b2c4fa700522da26fcad9168c57a7b9f010154747f3253c53cdd3c3067262a8
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



## Descripción general {#overview}

La función **Favoritos** de OsmAnd te permite crear marcadores (notas) en el mapa. Estos puntos favoritos se muestran como estrellas amarillas por defecto, pero puedes personalizarlos completamente con diferentes colores, formas e iconos. Los favoritos se agrupan en una capa de mapa dedicada, que se hace visible a partir del *nivel de zoom 6*.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Favorites introduction android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites introduction ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Punto favorito {#favorite-point}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Los favoritos forman parte de una capa de mapa especial, y puedes [mostrarlos u ocultarlos](../map/point-layers-on-map.md#favorites) junto con sus [nombres](../map/point-layers-on-map.md#favorite-and-poi-names) en el mapa. Al tocar un punto favorito, se abre el [menú contextual](../map/map-context-menu.md#favorites--track-points-from-the-group), lo que te permite ver los detalles y [editar o eliminar](../map/map-context-menu.md#add--edit-favorite) el punto.


### Crear {#create}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Favorite add description Android](@site/static/img/personal/favorite_add_descr_android.png) ![Favorite group Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png) ![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Para añadir un punto favorito:

1. Selecciona un [PDI](../map/point-layers-on-map.md#points-of-interest-pois) o una estructura en el mapa.
    Pulsa brevemente para un PDI o pulsa prolongadamente para un punto de mapa general.
2. Selecciona [Añadir (☆)](../map/map-context-menu.md#add--edit-favorite) en el menú contextual del mapa.

Al añadir un punto de datos de OSM, la información relevante del PDI se incluye automáticamente. También puedes crear un favorito [pulsando prolongadamente](../map/map-context-menu.md#select-any-point-long-tap) cualquier ubicación del mapa.

***Campos para un punto favorito:***

- **Nombre** — Un nombre único dentro del grupo (*Obligatorio*).
- **Dirección** y **Descripción** (*Opcional*).
- **Grupo** — Selecciona de un [grupo de favoritos](#manage-favorites) existente o crea uno nuevo.
- **Personalización visual** — Icono, color, forma pueden coincidir con la [apariencia predeterminada del grupo](#change-group-appearance) o personalizarse individualmente.


### Editar / Reemplazar / Eliminar {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite edit iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Para modificar un punto favorito:

1. [Pulsa](../map/map-context-menu.md#select-an-object-single-tap) el favorito en el mapa o ve a [Mis favoritos](#manage-favorites).
2. Elige **Editar favorito** en el [*menú contextual del mapa*](../map/map-context-menu.md#add--edit-favorite).

***Opciones disponibles:***

- **Editar detalles** — Nombre, icono, grupo, dirección y descripción.
- **Reemplazar ubicación** — Reemplazar otro punto con este. Útil para actualizar un punto específico (por ejemplo, *Mi coche aparcado*) o crear uno nuevo.
- **Eliminar** — Eliminar el favorito usando la opción de eliminar, accesible a través del menú Editar o mediante el botón de eliminar en Android.


### Iconos de favoritos {#favorite-icons}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

Una amplia gama de iconos para PDI y puntos de ruta está disponible en OsmAnd. Puedes:

- Seleccionar un icono de la lista de [categorías de PDI](../search/search-poi.md#categories-and-their-filters).
- Encontrar un icono adecuado usando la [opción de búsqueda](../search/search-all.md#how-to-use).


### Favoritos especiales (personales) {#special-favorites-personal}

La *carpeta Personal* contiene puntos especiales como **<Translate android="true" ids="favorite_home_category"/>** y **<Translate android="true" ids="work_button"/>**, a menudo utilizados en la [navegación](../navigation/setup/route-navigation.md#select-starting-point). Esta carpeta no tiene un *menú de tres puntos*, y sus parámetros no se pueden cambiar.


## Administrar favoritos {#manage-favorites}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

La sección **Mis favoritos** te permite:

- [Buscar](#order--sorting--search) favoritos o grupos específicos.
- [Operaciones masivas](#bulk-edit--delete) — Renombrar, mover o eliminar varios favoritos a la vez.

### Ordenar / Clasificar / Buscar {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Clasificación** — Las carpetas y puntos favoritos se clasifican alfabéticamente, con la [carpeta personal](../personal/favorites.md#special-favorites-personal) en la parte superior.
- **Búsqueda** — Utiliza la [búsqueda global](../search/search-all.md) para encontrar favoritos por nombre. Los favoritos se clasifican por distancia desde el centro del mapa.


### Edición/eliminación masiva {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png) ![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Para gestionar varios favoritos, toca el icono **Eliminar** (*icono de papelera en Android*) o el botón **Editar** (*icono de lápiz en iOS*).
2. Selecciona favoritos individuales o carpetas enteras para operaciones masivas.
3. **Opciones disponibles** — *Eliminar* para Android e iOS, *Mover a un grupo de favoritos*, *Compartir* y *Cambiar color* para iOS.

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


### Acciones de grupo de favoritos {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Ve a: *Menú de tres puntos → Cambiar apariencia predeterminada*

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *Mantén pulsada la carpeta → Apariencia predeterminada*

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Usa el ***Menú de tres puntos*** (*Android*) junto a cada carpeta y la ***pulsación prolongada*** (*iOS*) en la carpeta para gestionar grupos de favoritos:

- **<Translate android="true" ids="shared_string_rename"/>** — Usa esta opción para cambiar el nombre de la carpeta seleccionada.

- **<Translate android="true" ids="change_default_appearance"/>** — Personaliza cómo aparecen los puntos favoritos de la carpeta en el mapa cambiando sus iconos, colores o etiquetas.

- **<Translate android="true" ids="shared_string_show_on_map"/>** o **Ocultar en el mapa** — Alterna esta opción para mostrar u ocultar los puntos favoritos de la carpeta en el mapa.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** o **Eliminar de los marcadores del mapa** (*solo Android*) — Añade todos los puntos favoritos de una carpeta a la *lista de marcadores del mapa* o elimínalos según sea necesario para una fácil referencia.

- **<Translate android="true" ids="shared_string_share"/>** — Comparte los puntos favoritos de la carpeta exportándolos como un archivo *Favorites.gpx*, lo que facilita la transferencia o copia de seguridad de tus datos.

- **<Translate android="true" ids="shared_string_delete"/>** — Elimina permanentemente la carpeta de favoritos seleccionada y todos los puntos que contiene.

Más detalles en el artículo [Mis lugares](../personal/myplaces.md#favorites).



### Cambiar la apariencia del grupo {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Configuración de *Cambiar apariencia del grupo*:

- **Icono, color, forma** — Establece un estilo predeterminado para todos los favoritos de un grupo.
- **Coherencia** — Los nuevos favoritos añadidos al grupo heredan automáticamente la apariencia predeterminada.
- **Personalización** — Anula la configuración predeterminada para los puntos existentes en la carpeta, solo para los nuevos favoritos o aplica a todos.


## Exportar / Importar {#export--import}

OsmAnd proporciona varios métodos para [hacer copias de seguridad](./import-export.md) y [restaurar](./import-export.md#import) favoritos:

- **Ubicaciones de copia de seguridad** — Almacenamiento local, [OsmAnd Cloud](../personal/osmand-cloud.md) (solo con [suscripción a OsmAnd Pro o OsmAnd Start](../purchases/index.md)), o aplicaciones de mensajería instantánea.

- **Formato de archivo** — Los favoritos se guardan como archivos `.gpx` (favorites.gpx).


### Copia de seguridad gratuita en la nube {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

La [Copia de seguridad gratuita de favoritos](../personal/osmand-cloud.md#osmand-start) es un plan de compra especial que te permite hacer una copia de seguridad de tus puntos favoritos (ubicaciones) para las versiones de **Android, iOS** o **Web** en la aplicación OsmAnd y restaurarlos desde OsmAnd Cloud. Este plan está disponible para usuarios de [OsmAnd Free o Maps+](../purchases/index.md).

La *Copia de seguridad gratuita de favoritos* ofrece estos beneficios:

- **No se requiere pago**. Usa la función de copia de seguridad sin comprar suscripciones de pago.
- **Guarda puntos favoritos**. Guarda regularmente tus puntos favoritos en OsmAnd para evitar perderlos si tu dispositivo falla o la aplicación se elimina.
- **Transfiere puntos favoritos**. Importa tus puntos favoritos a un nuevo dispositivo con la función *Copia de seguridad gratuita de favoritos* si usas OsmAnd en varios dispositivos.


#### Cómo crear una copia de seguridad {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Necesitas una cuenta de OsmAnd Cloud para usar la función *Copia de seguridad gratuita de la configuración*. Si tienes una cuenta en *OsmAnd Pro* o una cuenta activa en *OsmAnd Cloud*, no verás el banner de promoción.

- *Banner de copia de seguridad gratuita de favoritos*. Toca este banner para iniciar el proceso de copia de seguridad.
- *Completa el paso de registro* si no tienes una cuenta de OsmAnd Cloud siguiendo las instrucciones de la [guía de registro](../personal/osmand-cloud.md#login).
- *Navega al menú Compras de OsmAnd* (*Menú → Ajustes → Compras*).
- *[Paquete OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Selecciona esta opción para acceder a la función de Copia de seguridad gratuita de la configuración.
- *Crea una copia de seguridad* de tu configuración.


### Todos los favoritos {#all-favorites}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)

</TabItem>

</Tabs>

Puedes exportar e importar tus favoritos usando los botones especiales en la parte inferior de la pantalla de Favoritos. Un [archivo .gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) se puede enviar a Dropbox, correo electrónico, mensajeros y otras aplicaciones instaladas en tu dispositivo que admitan esta función.

- Botón **Importar** (*Android*) / **Importar favorito** (*iOS*). Te permite importar puntos favoritos (*favorites.gpx*) como puntos de ruta desde un archivo *GPX* (un formato común de datos GPS) desde el almacenamiento de tu dispositivo.
- Botón **Compartir** (*Android*) / **Exportar favorito** (*iOS*). Te permite exportar (compartir) todos tus favoritos como un archivo *favorites.gpx*.


### Grupo de favoritos {#favorite-group}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_1_ios.png) ![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Toca el **Menú de tres puntos** (*Android*) o el botón **Editar** (*icono de lápiz en iOS*) o **mantén pulsada** la carpeta (*iOS*) de la carpeta de favoritos seleccionada.
- Elige el botón **Compartir** para enviar el archivo *Favorites.gpx* a la memoria de tu dispositivo o compartirlo a través de aplicaciones de mensajería.


### Copia de seguridad automática de favoritos {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Ve a: *Android → data → net.osmand → files → backup*

![Favorites backup export Android](@site/static/img/personal/favorites_backup_export_andr.png) ![Favorites autobackup android](@site/static/img/personal/favorites_autobackup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *Archivos → En mi iPhone → Mapas de OsmAnd → favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

OsmAnd crea un **archivo de copia de seguridad** cada vez que se editan los favoritos.

- **Android**: Las copias de seguridad se almacenan en *Android → data → net.osmand → files → backup*. Usa un gestor de archivos de terceros para acceder a ellas.

- **iOS**: Los archivos se encuentran en *Archivos → En mi iPhone → Mapas de OsmAnd → favourites_backup*.

**Exportación manual de la copia de seguridad**

- Ve a *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Exporta el archivo `.osf` al almacenamiento local, servicios en la nube o compártelo directamente.

:::caution
En las últimas versiones de ***Android***, el acceso a los directorios del sistema está limitado. Sin embargo, después de extraer el archivo de favoritos del archivo, sigue siendo posible reenviarlo a mensajeros o servicios en la nube, etc.
:::


### Favoritos en archivo GPX {#favorites-in-gpx-file}

Toda la información sobre un Favorito se almacena y describe mediante etiquetas. Al crear un punto Favorito, puedes escribir tu propia [descripción](#favorite-point) o usar información de los datos de [punto de interés (PDI)](../map/point-layers-on-map.md#points-of-interest-pois) de OSM a partir de los cuales se creó tu punto. Los puntos favoritos, los PDI y los puntos de ruta utilizan las mismas **etiquetas** para almacenar información y se guardan en **formato de archivo GPX**.

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

## Artículos relacionados {#related-articles}

- [Administrar pistas](../personal/tracks/manage-tracks.md#import--export-track)
- [Historial de búsqueda](../search/search-history.md#export-and-share)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)

> *Última actualización: abril de 2025*