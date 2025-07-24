---
source-hash: bb881e5f5e3ae59000cd2ff1cbc2577904cfc5eb14f2e1c143e6366ecb6952f1
sidebar_position: 3
title: Carpeta inteligente (Filtro)
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

La función **Carpeta inteligente** proporciona herramientas potentes para organizar y administrar tus rutas. Una de las características clave es la capacidad de filtrar archivos en la *pestaña Rutas* del menú *Mis lugares* según criterios como la duración, la longitud o la velocidad.

Esta función te permite encontrar rápidamente rutas específicas que coincidan con tus requisitos. Los resultados filtrados se pueden guardar como una **Carpeta inteligente**, lo que ofrece un acceso conveniente a colecciones de rutas actualizadas dinámicamente.


## Filtro de búsqueda {#search-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> pestaña*

![Mis lugares rutas](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![Mis lugares rutas](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Cómo aplicar un filtro:***

- Toca el icono *Buscar*, luego toca *Filtrar* en la fila [*Ordenar por*](./manage-tracks.md#sort-by).

- **Elige la configuración de filtro requerida** para refinar tu búsqueda de rutas.

- Toca **Mostrar** en la esquina inferior derecha para ver los resultados filtrados. El número de rutas coincidentes aparece entre paréntesis.

- **Para borrar** todos los filtros activos, toca **Restablecer todo**.

- **Para guardar** el conjunto de filtros actual como una nueva **Carpeta inteligente**, toca el icono de guardar en la esquina superior derecha de la pantalla.


### Filtros disponibles {#available-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mis lugares rutas](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mis lugares rutas](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Nombre** — Busca rutas por título. Introduce un nombre completo o parcial para mostrar las rutas coincidentes.
- **Carpeta** — Selecciona una o más carpetas para filtrar las rutas por su ubicación de almacenamiento.
- **Duración** — Filtra las rutas por su duración registrada, estableciendo un rango en horas y minutos.
- **Tiempo en movimiento** — Especifica el rango de tiempo transcurrido en movimiento durante la grabación.
- **Longitud** — Establece un rango específico en kilómetros o millas para encontrar rutas de una longitud determinada.
- **Velocidad media** — Filtra las rutas por [velocidad media](../../widgets/info-widgets.md#average-speed).
- **Grupo de datos del sensor.**
    Aplica filtros basados en datos de sensores externos, incluyendo:
    - Velocidad del sensor, media.
    - Velocidad del sensor, máxima.
    - Frecuencia cardíaca, media.
    - Frecuencia cardíaca, máxima.
    - Cadencia de bicicleta, media.
    - Cadencia de bicicleta, máxima.
    - Potencia de bicicleta, media.
    - Potencia de bicicleta, máxima.
    - Temperatura, media.
    - Temperatura, máxima.
- **Velocidad máxima** — Selecciona rutas con rangos de velocidad máxima específicos.
- **Subida** y **Bajada** — Filtra las rutas según los cambios de elevación positivos o negativos.
- **Altitud media** y **Altitud máxima** — Encuentra rutas con datos de altitud media o máxima específicos.
- **Fecha de creación** — Filtra las rutas creadas dentro de un rango de fechas determinado.
- **Ciudades cercanas** — Muestra las rutas que pasan cerca de las ciudades o localidades seleccionadas.
- **Tipo de actividad** — Filtra las rutas según el tipo de [actividades](../../map/tracks/track-context-menu.md#track-information-activity) registradas en el archivo GPX (por ejemplo, ciclismo, senderismo).
- **País** — Filtra las rutas por el país o la región donde se grabaron.
- **Color** y **Ancho** — Selecciona rutas por el color o el ancho de línea asignados.
- **Otros** — Filtros adicionales para características especiales:
    - *Visible en el mapa*. Muestra solo las rutas que se muestran en el mapa.
    - *Con puntos de interés*. Muestra las rutas que contienen puntos de interés específicos.


## Carpeta inteligente {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Función de clasificación de rutas de Mis lugares Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mis lugares rutas](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Una **Carpeta inteligente** es una colección dinámica de rutas que se actualiza automáticamente según criterios de filtro específicos. Ofrece herramientas avanzadas para organizar, buscar y administrar rutas de manera eficiente.

***Beneficios de las Carpetas inteligentes:***

1. **Organización automatizada.**
    Incluye automáticamente las rutas que coinciden con reglas predefinidas, como la fecha de creación o el rango de duración.
2. **Filtrado y búsqueda.**
    Permite búsquedas rápidas dentro de las rutas utilizando filtros avanzados y palabras clave.
3. **Actualización dinámica.**
    Actualiza automáticamente el contenido para mostrar las últimas rutas que coinciden con los criterios.
4. **Personalizar reglas.**
    Crea colecciones de rutas personalizadas definiendo reglas de filtro personalizadas.


### Cómo crear una carpeta inteligente {#how-to-create-smart-folder}

Para crear una **Carpeta inteligente**, sigue estos pasos:

1. Toca el icono del ***menú de tres puntos*** en la pestaña *Rutas* del menú *Mis lugares*.

2. Selecciona **Añadir carpeta inteligente** en el menú desplegable.

3. Configura los ajustes:
   - **Nombra la carpeta**. Introduce un nombre para identificar la carpeta.
   - Especifica los **parámetros del filtro de rutas**. Aplica los filtros requeridos utilizando las opciones de [Filtro](#available-filters) disponibles.

4. **Guarda** los ajustes.
    - Toca **Mostrar** para previsualizar las rutas.
    - Selecciona el botón **Guardar** para finalizar la *Carpeta inteligente*.

La **Carpeta inteligente** recién creada actualizará automáticamente su contenido con las rutas que coincidan con los criterios seleccionados.


### Gestión de carpetas inteligentes {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mis lugares Gestión de carpetas inteligentes Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![Mis lugares Gestión de carpetas inteligentes Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mis lugares Gestión de carpetas inteligentes iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![Mis lugares Gestión de carpetas inteligentes iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

La **Carpeta inteligente** se muestra con un icono único en la lista de carpetas de la pestaña Rutas. Para gestionar la carpeta, toca el *menú de tres puntos* junto a ella (*Android*) y *mantén pulsado* (*iOS*) o abre la carpeta y utiliza el icono en la esquina superior derecha.

***Acciones disponibles:***

- **Detalles** — Ver la lista completa de rutas contenidas en la carpeta.

- **Mostrar todas las rutas en el mapa** (*Solo Android*) — Muestra todas las rutas de la carpeta en el mapa.
    *NOTA: Cargar muchas rutas puede afectar el rendimiento.*

- **Editar nombre** (*Android*) / **Renombrar** (*iOS*) — Cambia el nombre de la carpeta para facilitar su identificación.

- **Actualizar** — Actualiza manualmente el contenido de la carpeta para asegurarte de que incluye las últimas rutas.

- **Cambiar apariencia predeterminada** (*Android*) — Cambia la apariencia de visualización de todas las rutas de la carpeta.

- **Editar filtro** — Modifica la configuración del filtro de rutas para la Carpeta inteligente actual. Consulta [Filtro de búsqueda](#search-filter) para obtener más detalles.

- **Exportar** — Exporta todas las rutas de la Carpeta inteligente a través de la función [Importar/Exportar](../../personal/import-export.md). Serás redirigido a *Menú → Ajustes → Pestaña Acciones*.

- **Eliminar carpeta** — Elimina la Carpeta inteligente sin eliminar sus rutas.
    *ADVERTENCIA: Esta acción es irreversible y solicitará un mensaje de confirmación.*

- **Mover** (*iOS*) — Te permite mover la carpeta a otra carpeta existente o crear una nueva.

- **Seleccionar** — Utiliza el [Modo de selección](./manage-tracks.md#selection-mode) para acciones específicas de rutas dentro de la carpeta.


## Artículos relacionados {#related-articles}

- [Mostrar ruta en el mapa](../../map/tracks/index.md)
- [Analizar en el mapa](../../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual de ruta](../../map/tracks/track-context-menu.md)
- [Navegación por ruta](../../navigation/setup/gpx-navigation.md)
- [Grabación de viajes](../../plugins/trip-recording.md)

> *Última actualización: marzo de 2025*