---
source-hash: cbed8959bdf8985ec20e474f00773eeda1334dfea7ce3c5a54eb702f18fa6ee2
sidebar_position: 3
title: Carpeta Inteligente (Filtro)
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

La función **Carpeta Inteligente** proporciona potentes herramientas para organizar y gestionar sus pistas. Una de las características clave es la capacidad de filtrar archivos en la *pestaña Pistas* del menú *Mis Lugares* basándose en criterios como la duración, la longitud o la velocidad.  

Esta función le permite encontrar rápidamente pistas específicas que coincidan con sus requisitos. Los resultados filtrados se pueden guardar como una **Carpeta Inteligente**, ofreciendo un acceso conveniente a colecciones de pistas actualizadas dinámicamente.


## Filtro de Búsqueda {#search-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *pestaña <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![Pistas de Mis lugares](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *pestaña <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Pistas de Mis lugares](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Cómo aplicar un filtro:***

- Pulse el icono *Buscar* y, a continuación, pulse *Filtro* en la fila [*Ordenar por*](./manage-tracks.md#sort-by).

- **Elija los ajustes de filtro necesarios** para refinar su búsqueda de pistas.

- Pulse **Mostrar** en la esquina inferior derecha para ver los resultados filtrados. El número de pistas coincidentes aparece entre paréntesis.

- **Para borrar** todos los filtros activos, pulse **Restablecer todo**.

- **Para guardar** el conjunto de filtros actual como una nueva **Carpeta Inteligente**, pulse el icono de guardar en la esquina superior derecha de la pantalla.


### Filtros Disponibles {#available-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pistas de Mis lugares](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pistas de Mis lugares](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Nombre** — Buscar pistas por título. Introduzca un nombre completo o parcial para mostrar las pistas coincidentes.
- **Carpeta** — Seleccione una o más carpetas para filtrar las pistas por su ubicación de almacenamiento.
- **Duración** — Filtrar pistas por su duración grabada, estableciendo un rango en horas y minutos.
- **Tiempo en movimiento** — Especifique el rango de tiempo en movimiento durante la grabación.
- **Longitud** — Establezca un rango específico en kilómetros o millas para encontrar pistas de una longitud particular.
- **Velocidad media** — Filtrar pistas por [velocidad media](../../widgets/info-widgets.md#average-speed).
- **Grupo de datos del sensor.**  
    Aplicar filtros basados en datos de sensores externos, incluyendo:
    - Velocidad del sensor, media.
    - Velocidad del sensor, máx.
    - Frecuencia cardíaca, media.
    - Frecuencia cardíaca, máx.
    - Cadencia de bicicleta, media.
    - Cadencia de bicicleta, máx.
    - Potencia de bicicleta, media.
    - Potencia de bicicleta, máx.
    - Temperatura, media.
    - Temperatura, máx.
- **Velocidad máxima** — Seleccionar pistas con rangos de velocidad máxima específicos.
- **Ascenso** y **Descenso** — Filtrar pistas basadas en cambios de elevación positivos o negativos.
- **Altitud media** y **Altitud máxima** — Encontrar pistas con datos de altitud media o máxima específicos.
- **Fecha de creación** — Filtrar pistas creadas dentro de un rango de fechas particular.
- **Ciudades más cercanas** — Mostrar pistas que pasan cerca de ciudades o localidades seleccionadas.
- **Tipo de actividad** — Filtrar pistas basadas en el tipo de [actividades](../../map/tracks/track-context-menu.md#ttrack-activity-type) registradas en el archivo GPX (p. ej., ciclismo, senderismo).
- **País** — Filtrar pistas por el país o región donde fueron grabadas.
- **Color** y **Ancho** — Seleccionar pistas por color o ancho de línea asignado.
- **Otro** — Filtros adicionales para características especiales:
    - *Visible en el mapa*. Muestra solo las pistas que se muestran en el mapa.
    - *Con Waypoints*. Muestra pistas que contienen waypoints específicos.


## Carpeta Inteligente {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Función de ordenación de pistas de Mis lugares Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pistas de Mis lugares](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Una **Carpeta Inteligente** es una colección dinámica de pistas que se actualiza automáticamente en función de criterios de filtro específicos. Ofrece herramientas avanzadas para organizar, buscar y gestionar pistas de forma eficiente.  

***Beneficios de las Carpetas Inteligentes:***

1. **Organización automatizada.**  
    Incluye automáticamente las pistas que coincidan con reglas predefinidas, como la fecha de creación o el rango de duración.
2. **Filtrado y búsqueda.**  
    Permite búsquedas rápidas dentro de las pistas utilizando filtros avanzados y palabras clave.
3. **Actualización dinámica.**  
    Actualiza automáticamente el contenido para mostrar las últimas pistas que coincidan con los criterios.
4. **Personalizar reglas.**  
    Cree colecciones de pistas personalizadas definiendo reglas de filtro personalizadas.


### Cómo Crear una Carpeta Inteligente {#how-to-create-smart-folder}

Para crear una **Carpeta Inteligente**, siga estos pasos:

1. Pulse el icono del ***menú de tres puntos*** en la pestaña *Pistas* del menú *Mis Lugares*.

2. Seleccione **Añadir carpeta inteligente** en el menú desplegable.

3. Configure los ajustes:
   - **Nombre la carpeta**. Introduzca un nombre para identificar la carpeta.
   - Especifique los **parámetros de filtro de pista**. Aplique los filtros necesarios utilizando las opciones de [Filtro](#available-filters) disponibles.

4. **Guarde** los ajustes.
    - Pulse **Mostrar** para previsualizar las pistas.
    - Seleccione el botón **Guardar** para finalizar la *Carpeta Inteligente*.

La **Carpeta Inteligente** recién creada actualizará automáticamente su contenido con las pistas que coincidan con los criterios seleccionados.


### Gestión de Carpetas Inteligentes {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gestión de Carpetas Inteligentes en Mis lugares Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![Gestión de Carpetas Inteligentes en Mis lugares Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr_new.png)

La **Carpeta inteligente** se muestra con un icono único en la lista de carpetas de la pestaña Pistas. Para gestionar la carpeta, pulse el *menú de tres puntos* junto a ella para acceder a las acciones disponibles:

- **Detalles** — Ver la lista completa de pistas contenidas en la carpeta.
- **Mostrar todas las pistas en el mapa** — Muestra todas las pistas de la carpeta en el mapa.  
    *NOTA: La carga de muchas pistas puede afectar al rendimiento.*
- **Renombrar** — Cambia el nombre de la carpeta para facilitar su identificación.
- **Actualizar** — Actualiza manualmente el contenido de la carpeta para asegurarse de que incluye las últimas pistas.
- **Editar filtro** — Modifica la configuración del filtro de pistas para la Carpeta Inteligente actual. Consulte [Filtro de búsqueda](#search-filter) para más detalles.
- **Exportar** — Exporta todas las pistas de la Carpeta Inteligente a través de la función [Importar/Exportar](../../personal/import-export.md). Será redirigido a *Menú → Ajustes → pestaña Acciones*.
- **Eliminar carpeta** — Elimina la Carpeta Inteligente sin eliminar sus pistas.  
    *ADVERTENCIA: Esta acción es irreversible y le pedirá un mensaje de confirmación.*

También puede abrir la carpeta y pulsar el *menú de tres puntos* en la *esquina superior derecha* para acceder a acciones adicionales:

- **Seleccionar** — Utilice el [Modo de selección](./manage-tracks.md#selection-mode) para acciones específicas de pistas dentro de la carpeta.
- **Organizar por** — Organiza automáticamente las pistas en la Carpeta Inteligente en grupos basados en un parámetro seleccionado. Los tipos de agrupación disponibles incluyen *General*, *Fecha y hora*, *Ubicación*, *Velocidad*, *Altitud y elevación* y *Datos del sensor*. 

Algunos parámetros de agrupación solo están disponibles con una suscripción a OsmAnd Pro. Los parámetros gratuitos incluyen *Actividad*, *Año de creación* y *Ciudad más cercana*. Todos los demás parámetros están marcados con una etiqueta <ProFeature/>.

Para parámetros numéricos (como distancia, duración, velocidad o altitud), hay disponible un diálogo *Establecer tamaño de paso*. Utilice el control deslizante para definir rangos de valores para la agrupación.

Para parámetros PRO, puede previsualizar la configuración de agrupación (por ejemplo, abrir el selector de tamaño de paso y ver cómo se agrupan las pistas), pero aplicar estos cambios requiere una suscripción activa. Si selecciona un parámetro PRO o pulsa el botón Desbloquear, se abrirá la pantalla Elegir plan. La agrupación aplicada previamente permanece visible incluso si la suscripción caduca, pero editar o aplicar una nueva agrupación basada en PRO requiere una suscripción activa.

</TabItem>

<TabItem value="ios" label="iOS">

![Gestión de Carpetas Inteligentes en Mis lugares iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![Gestión de Carpetas Inteligentes en Mis lugares iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios_new.png)

La **Carpeta inteligente** se muestra con un icono único en la lista de carpetas de la pestaña Pistas. Para gestionar la carpeta, realice una *pulsación larga* en el nombre de la carpeta para acceder a las acciones disponibles:

- **Renombrar**— Cambia el nombre de la carpeta para facilitar su identificación.
- **Exportar** — Exporta todas las pistas de la Carpeta Inteligente a través de la función [Importar/Exportar](../../personal/import-export.md). Será redirigido a *Menú → Ajustes → pestaña Acciones*.
- **Mover** — Le permite mover la carpeta a otra carpeta existente o crear una nueva.
- **Eliminar** — Elimina la Carpeta Inteligente sin eliminar sus pistas.  
    *ADVERTENCIA: Esta acción es irreversible y le pedirá un mensaje de confirmación.*

También puede abrir la carpeta y pulsar el icono en la *esquina superior derecha* para acceder a acciones adicionales:

- **Seleccionar** — Utilice el [Modo de selección](./manage-tracks.md#selection-mode) para acciones específicas de pistas dentro de la carpeta.
- **Actualizar** — Actualiza manualmente el contenido de la carpeta para asegurarse de que incluye las últimas pistas.
- **Editar filtro** — Modifica la configuración del filtro de pistas para la Carpeta Inteligente actual. Consulte [Filtro de búsqueda](#search-filter) para más detalles.

</TabItem>

</Tabs>

<!--
The **Smart folder** is displayed with a unique icon in the folder list in the Tracks tab. To manage the folder, tap the *three-dot menu* next to it (*Android*) and *long tap* (*iOS*) or open the folder and use the icon in the top-right corner.

***Available Actions:***

- **Details** — View the complete list of tracks contained in the folder.

- **Show all tracks on the map** (*Android only*) — Display all folder tracks on the map.  
    *NOTE: Loading many tracks may affect performance.*

- **Edit name** (*Android*) / **Rename** (*iOS*) — Change the folder name for easier identification.

- **Refresh** — Manually update the folder's content to ensure it includes the latest tracks.

- **Change default appearance** (*Android*) — Changes the display appearance of all tracks in the folder.

- **Edit filter** — Modify the track filter settings for the current Smart Folder. See [Search Filter](#search-filter) for details.

- **Export** — Export all tracks in the Smart Folder via the [Import/Export](../../personal/import-export.md) feature. You will be redirected to *Menu → Settings → Actions tab*.

- **Delete folder** — Remove the Smart Folder without deleting its tracks.  
    *WARNING: This action is irreversible and will prompt a confirmation message.*

- **Move** (*iOS*) — Allows you to move the folder to another existing folder or create a new one.

- **Select** — Use [Selection Mode](./manage-tracks.md#selection-mode) for specific track actions within the folder.
-->

## Artículos Relacionados {#related-articles}

- [Mostrar pista en el mapa](../../map/tracks/index.md)
- [Analizar en el mapa](../../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual de la pista](../../map/tracks/track-context-menu.md)
- [Navegación por pista](../../navigation/setup/gpx-navigation.md)
- [Grabación de viaje](../../plugins/trip-recording.md)