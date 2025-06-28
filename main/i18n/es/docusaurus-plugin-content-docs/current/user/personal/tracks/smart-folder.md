---
source-hash: 52104063be1e1f495b5c9faaaa8cd1c009b92fb4dccba395827634a48aa85dd8
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

La función **Carpeta inteligente** proporciona potentes herramientas para organizar y gestionar sus rutas. Una de las características clave es la capacidad de filtrar archivos en la *pestaña Rutas* del menú *Mis lugares* según criterios como la duración, la longitud o la velocidad.

Esta función le permite encontrar rápidamente rutas específicas que coincidan con sus requisitos. Los resultados filtrados se pueden guardar como una **Carpeta inteligente**, lo que ofrece un acceso cómodo a colecciones de rutas actualizadas dinámicamente.


## Filtro de búsqueda {#search-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> pestaña*

![Rutas de Mis lugares](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![Rutas de Mis lugares](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Cómo aplicar un filtro:***

- Toque el icono *Buscar*, luego toque *Filtrar* en la fila [*Ordenar por*](./manage-tracks.md#sort-by).

- **Elija la configuración de filtro requerida** para refinar la búsqueda de rutas.

- Toque **Mostrar** en la esquina inferior derecha para ver los resultados filtrados. El número de rutas coincidentes aparece entre paréntesis.

- **Para borrar** todos los filtros activos, toque **Restablecer todo**.

- **Para guardar** el conjunto de filtros actual como una nueva **Carpeta inteligente**, toque el icono de guardar en la esquina superior derecha de la pantalla.


### Filtros disponibles {#available-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Rutas de Mis lugares](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rutas de Mis lugares](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Nombre** — Busque rutas por título. Introduzca un nombre completo o parcial para mostrar las rutas coincidentes.
- **Carpeta** — Seleccione una o más carpetas para filtrar las rutas por su ubicación de almacenamiento.
- **Duración** — Filtre las rutas por su duración registrada, estableciendo un rango en horas y minutos.
- **Tiempo en movimiento** — Especifique el rango de tiempo en movimiento durante la grabación.
- **Longitud** — Establezca un rango específico en kilómetros o millas para encontrar rutas de una longitud particular.
- **Velocidad media** — Filtre las rutas por [velocidad media](../../widgets/info-widgets.md#average-speed).
- **Grupo de datos del sensor.**
    Aplique filtros basados en datos de sensores externos, incluyendo:
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
- **Velocidad máxima** — Seleccione rutas con rangos de velocidad máxima específicos.
- **Cuesta arriba** y **Cuesta abajo** — Filtre las rutas según los cambios de elevación positivos o negativos.
- **Altitud media** y **Altitud máxima** — Encuentre rutas con datos de altitud media o máxima específicos.
- **Fecha de creación** — Filtre las rutas creadas dentro de un rango de fechas particular.
- **Ciudades más cercanas** — Muestre las rutas que pasan cerca de las ciudades o localidades seleccionadas.
- **Tipo de actividad** (*Solo Android*) — Filtre las rutas según el tipo de [actividades](../../map/tracks/track-context-menu.md#track-information-activity) registradas en el archivo GPX (por ejemplo, ciclismo, senderismo).
- **País** — Filtre las rutas por el país o la región donde se grabaron.
- **Color** y **Ancho** — Seleccione rutas por color asignado o ancho de línea.
- **Otros** — Filtros adicionales para características especiales:
    - *Visible en el mapa*. Muestra solo las rutas que se muestran en el mapa.
    - *Con puntos de interés*. Muestra las rutas que contienen puntos de interés específicos.


## Carpeta inteligente {#smart-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Función de ordenación de rutas de Mis lugares Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rutas de Mis lugares](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Una **Carpeta inteligente** es una colección dinámica de rutas que se actualiza automáticamente según criterios de filtro específicos. Ofrece herramientas avanzadas para organizar, buscar y gestionar rutas de forma eficiente.

***Beneficios de las carpetas inteligentes:***

1. **Organización automatizada.**
    Incluye automáticamente las rutas que coinciden con reglas predefinidas, como la fecha de creación o el rango de duración.
2. **Filtrado y búsqueda.**
    Permite búsquedas rápidas dentro de las rutas utilizando filtros avanzados y palabras clave.
3. **Actualización dinámica.**
    Actualiza automáticamente el contenido para mostrar las últimas rutas que coinciden con los criterios.
4. **Personalizar reglas.**
    Cree colecciones de rutas personalizadas definiendo reglas de filtro personalizadas.


### Cómo crear una carpeta inteligente {#how-to-create-smart-folder}

Para crear una **Carpeta inteligente**, siga estos pasos:

1. Toque el icono del ***menú de tres puntos*** en la pestaña *Rutas* del menú *Mis lugares*.

2. Seleccione **Añadir carpeta inteligente** en el menú desplegable.

3. Configure los ajustes:
   - **Nombre de la carpeta**. Introduzca un nombre para identificar la carpeta.
   - Especifique los **parámetros del filtro de rutas**. Aplique los filtros necesarios utilizando las opciones de [Filtro](#available-filters) disponibles.

4. **Guarde** los ajustes.
    - Toque **Mostrar** para previsualizar las rutas.
    - Seleccione el botón **Guardar** para finalizar la *Carpeta inteligente*.

La **Carpeta inteligente** recién creada actualizará automáticamente su contenido con las rutas que coincidan con los criterios seleccionados.


### Gestión de carpetas inteligentes {#managing-smart-folders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mis lugares Gestión de carpetas inteligentes Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![Mis lugares Gestión de carpetas inteligentes Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mis lugares Gestión de carpetas inteligentes iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![Mis lugares Gestión de carpetas inteligentes iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

La **Carpeta inteligente** se muestra con un icono único en la lista de carpetas de la pestaña Rutas. Para gestionar la carpeta, toque el *menú de tres puntos* junto a ella (*Android*) y *mantenga pulsado* (*iOS*) o abra la carpeta y utilice el icono de la esquina superior derecha.

***Acciones disponibles:***

- **Detalles** — Vea la lista completa de rutas contenidas en la carpeta.

- **Mostrar todas las rutas en el mapa** (*Solo Android*) — Muestra todas las rutas de la carpeta en el mapa.
    *NOTA: La carga de muchas rutas puede afectar el rendimiento.*

- **Editar nombre** (*Android*) / **Renombrar** (*iOS*) — Cambie el nombre de la carpeta para facilitar su identificación.

- **Actualizar** — Actualice manualmente el contenido de la carpeta para asegurarse de que incluye las últimas rutas.

- **Cambiar apariencia predeterminada** (*Android*) — Cambia la apariencia de visualización de todas las rutas de la carpeta.

- **Editar filtro** — Modifique la configuración del filtro de rutas para la Carpeta inteligente actual. Consulte [Filtro de búsqueda](#search-filter) para obtener más detalles.

- **Exportar** — Exporte todas las rutas de la Carpeta inteligente a través de la función [Importar/Exportar](../../personal/import-export.md). Será redirigido a *Menú → Ajustes → Pestaña Acciones*.

- **Eliminar carpeta** — Elimine la Carpeta inteligente sin eliminar sus rutas.
    *ADVERTENCIA: Esta acción es irreversible y se le pedirá una confirmación.*

- **Mover** (*iOS*) — Le permite mover la carpeta a otra carpeta existente o crear una nueva.

- **Seleccionar** — Utilice el [Modo de selección](./manage-tracks.md#selection-mode) para acciones de ruta específicas dentro de la carpeta.


## Artículos relacionados {#related-articles}

- [Mostrar ruta en el mapa](../../map/tracks/index.md)
- [Analizar en el mapa](../../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual de rutas](../../map/tracks/track-context-menu.md)
- [Navegación por ruta](../../navigation/setup/gpx-navigation.md)
- [Grabación de viajes](../../plugins/trip-recording.md)

> *Última actualización: marzo de 2025*