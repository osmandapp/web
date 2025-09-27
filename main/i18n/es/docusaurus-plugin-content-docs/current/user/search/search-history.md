---
source-hash: b0e4660605b0cdfdfcfc653e1f8929974cb654b66c0c55fbc588b89e37d05091
sidebar_position: 3
title:  Historial de búsqueda
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Resumen {#overview}

El *Historial de búsqueda* es un registro de todas las búsquedas y ubicaciones que ha introducido o buscado en la aplicación durante el período de uso. Esta herramienta le permite encontrar y acceder fácilmente a las ubicaciones buscadas anteriormente, lo que facilita la navegación y le ahorra tiempo.

OsmAnd ofrece varias formas de ver su historial de búsqueda.

- El [botón de Búsqueda](../widgets/map-buttons.md#search) se muestra siempre en el mapa, y al pulsarlo accederá a la [pantalla general](#how-to-use) de la herramienta.
- Vaya al *Menú principal de Android → Buscar → pestaña Historial*.
- Cuando se prepare para iniciar una ruta, pulse *Navegación → Establecer destino → Campo de búsqueda*.
- El bloque de información en el menú de navegación de [preparación de ruta](../navigation/setup/route-navigation.md#navigation-menu) muestra una lista de puntos de destino recientes, que también forman parte del historial de búsqueda.
- El historial de búsqueda está disponible en [Android Auto](../navigation/auto-car.md#search) y [CarPlay](../navigation/car-play.md#search).


## Cómo usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda de historial](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de historial](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

El historial de búsqueda sirve para proporcionar información relevante sobre sus acciones anteriores.

- *Volver a buscar*. Puede utilizar el historial de búsqueda para volver a buscar lugares o direcciones buscados anteriormente sin tener que volver a introducir la consulta.

- *Acceso rápido a lugares visitados con frecuencia*. Si visita ciertos lugares con frecuencia, como su casa, el trabajo o sus lugares favoritos, el Historial de búsqueda guarda esos lugares, proporcionando un acceso rápido a ellos.

- *Rastrear viajes anteriores*. El historial de búsqueda puede ser útil para rastrear viajes y rutas anteriores. Puede rastrear las rutas que ha realizado antes, o [planificar su próxima ruta](../plan-route/create-route.md) basándose en las anteriores.

- *Buscar lugares durante un determinado período de tiempo*. Para la aplicación de Android, debe utilizar una pulsación larga, a continuación, encontrar el mes en el que realizó el viaje, salir del menú de eliminación y establecer el nombre en el campo de búsqueda. Para la aplicación de iOS, la lista del historial de búsqueda ya está dividida en bloques por meses.

- *Eliminar entradas*. El Historial de búsqueda ofrece la posibilidad de [eliminar](#delete) entradas anteriores, lo que puede ser útil para la confidencialidad o para mantener el historial organizado.


## Elementos del historial {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda de historial](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de historial](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Cada campo de la lista del Historial de búsqueda contiene parte de la **información** disponible para la aplicación.

- Un icono que identifica el tipo o la categoría del objeto encontrado.
- El nombre del objeto, la ubicación, la dirección o el tipo de consulta. Para los tracks, se muestra información sobre la distancia, el número de waypoints y el tiempo.
- Distancia desde su ubicación actual hasta el punto y dirección por brújula.


### Orden de los elementos {#order-of-items}

- **Elementos recientes**. Las solicitudes o ubicaciones más recientes se muestran en la parte superior de la lista. Esto permite un acceso rápido a los elementos utilizados recientemente.
- **Orden cronológico**. Los elementos de la lista del Historial de búsqueda están ordenados cronológicamente, empezando por las entradas más antiguas o primeras y terminando por las más recientes o últimas. Los elementos antiguos se desplazan gradualmente hacia abajo en la lista a medida que se añaden nuevas entradas, a menos que se hayan utilizado elementos antiguos del historial de búsqueda, en cuyo caso se moverán a la parte superior de la lista.
- En iOS, la lista está ordenada por meses.

### Tipo de objetos {#type-of-objects}

Los siguientes **tipos de objetos** entran en la lista del Historial de búsqueda:

- **Ubicaciones**. Puede ser una dirección, el nombre de una empresa, el número de una ruta, coordenadas, marcadores, puntos de interés, notas de OSM o lugares que haya pulsado en el mapa.
- **Tracks y Waypoints**. La lista incluye los tracks que ha creado, grabado o descargado y que ha utilizado en rutas anteriores, y los waypoints si ha navegado hasta ellos por separado.


## Acciones {#actions}

En la herramienta Historial de búsqueda, puede [eliminar](#delete) las consultas innecesarias, todas a la vez o por elementos individuales. Puede utilizar la [exportación](#export-and-share) del Historial. La aplicación de Android proporciona una acción adicional de [compartir](#share-android) elementos de búsqueda como un archivo [GPX](../../technical/osmand-file-formats/osmand-gpx.md).

Puede **desactivar o activar** la visualización de todo el historial de búsqueda. En este caso, las consultas no se eliminan del dispositivo. En Android, el interruptor se encuentra en la pantalla principal de la herramienta en la [pestaña Historial](#overview). En iOS, se encuentra en *Menú → Ajustes → Ajustes de OsmAnd → Historial → Historial de búsqueda*.


### Eliminar {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Eliminar búsqueda de historial](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Eliminar búsqueda de historial](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Después de usar OsmAnd durante mucho tiempo, la lista del *Historial de búsqueda* puede llegar a ser demasiado larga, por lo que eliminar las consultas de búsqueda ayuda a limpiar la lista. Puede eliminar las consultas que ya no son relevantes o que no tiene intención de utilizar en el futuro, lo que facilita la búsqueda en la lista, especialmente cuando necesita encontrar rápidamente consultas de búsqueda específicas.

Debe **pulsar prolongadamente cualquiera de los elementos de consulta de la lista** para abrir la pantalla Eliminar.

- *Seleccionar o deseleccionar elementos aleatorios* - pulse el elemento deseado en la lista.
- *Seleccione el período disponible para eliminar*, como día, últimos 7 días o mes - marque la casilla con el subtítulo en la lista.
- *Puede eliminar todo el historial* de una vez pulsando el botón *Seleccionar todo* en la parte inferior de la pantalla.
- *Menú → Ajustes → Ajustes de OsmAnd → Historial → Acciones*. Esta sección contiene el botón **Eliminar todo el historial**.


### Exportar y Compartir {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Ajustes generales Historial Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Ajustes generales Historial IOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Existen varias opciones disponibles para exportar el historial de búsqueda. Todos los archivos se exportan en formato `.osf` (OsmAnd settings File).

1. *Menú → Ajustes → Ajustes de OsmAnd → Historial → Historial de búsqueda*.
    La exportación está disponible utilizando el menú de ajustes de OsmAnd. Para Android, seguir esta ruta le lleva a la pantalla de eliminación, donde está disponible [Compartir historial](#share-android). En el caso de iOS, puede seleccionar elementos individuales o todo el historial en la pantalla, y después de pulsar el botón *Exportar*, ir al menú *Copia de seguridad local*.

2. *Menú → Ajustes → Ajustes de OsmAnd → Historial → Acciones → Hacer copia de seguridad como archivo* (Android).
    *Menú → Ajustes → Ajustes de OsmAnd → Historial → Acciones → Exportar* (iOS).
    Al pulsar estos elementos se accede al menú *Importar/Exportar* (Android) o *Copia de seguridad local* (iOS). Expanda la lista *Mis lugares* y busque *Historial de búsqueda*. Todas las consultas se exportan en un solo archivo a la vez.

3. *Menú → Ajustes → Importar/Exportar → Exportar a archivo* (Android).
    *Menú → Ajustes → Copia de seguridad local → Hacer copia de seguridad como archivo* (iOS).
    Puede leer más detalles en el artículo [Importar/Exportar](../personal/import-export.md#export).

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    Puede utilizar la Nube para hacer una copia de seguridad de su historial de búsqueda. En el menú *Cambios locales* o *Ajustes → Copia de seguridad de datos → Mis lugares → Historial de búsqueda*.

![Ajustes Historial](@site/static/img/search/history_search_share_andr.png)

Exportar elementos o todo el historial de búsqueda puede ser útil en los siguientes casos:

- *Copia de seguridad*. Puede hacer una copia de seguridad de su historial de búsqueda para guardar la información antes de eliminarla y restaurarla si es necesario.
- *Transferir a otro dispositivo*. Cuando cambie de dispositivo, puede utilizar la función de exportación o la Nube para transferir su historial de búsqueda a un nuevo dispositivo sin tener que buscar e introducir los datos de nuevo.
- *Analizar y procesar datos*. Puede exportar su historial de búsqueda para analizar datos o utilizarlo en otras aplicaciones.
- [Compartir](#share-android) el historial de búsqueda con otros usuarios de OsmAnd.


### Compartir (Android) {#share-android}

![Ajustes Historial](@site/static/img/search/history_search_share_andr.png)

Los pasos para compartir elementos del historial de búsqueda son similares a los de [exportar](#export-and-share), con la diferencia de que se exporta todo el historial de una vez como un archivo [osf](../../technical/osmand-file-formats/osmand-osf.md), mientras que se pueden compartir archivos individuales seleccionados en formato gpx.

En la pantalla [eliminar](#delete), seleccione los elementos deseados de la lista del Historial de búsqueda. En la esquina superior derecha de la pantalla, hay un icono que indica compartir. Seleccione una aplicación o acción disponible en la lista para compartir.


## Artículos relacionados {#related-articles}

- [Buscar todo](./search-all.md)
- [Buscar dirección](./search-address.md)
- [Buscar PDI](./search-poi.md)
- [Buscar coordenadas](./search-coordinates.md)