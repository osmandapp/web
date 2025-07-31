---
source-hash: 13f229400445a81db544afbadce1fb85746267eecddcd8299384d384de2a58b5
sidebar_position: 3
title: Historial de búsqueda
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Descripción general {#overview}

El *Historial de búsqueda* es un registro de todas las búsquedas y ubicaciones que has introducido o buscado en la aplicación durante el período de uso. Esta herramienta te permite encontrar y acceder fácilmente a ubicaciones buscadas previamente, lo que facilita la navegación y te ahorra tiempo.

OsmAnd ofrece varias formas de ver tu historial de búsqueda.

- El [botón de búsqueda](../widgets/map-buttons.md#search) siempre se muestra en el mapa, y al tocarlo, te llevará a la [pantalla general](#how-to-use) de la herramienta.
- Ve al *Menú* principal de Android → *Buscar* → *Pestaña Historial*.
- Al prepararte para iniciar una ruta, toca *Navegación* → *Establecer destino* → *Campo de búsqueda*.
- El bloque de información en el menú de navegación de [preparación de ruta](../navigation/setup/route-navigation.md#navigation-menu) muestra una lista de los puntos de destino recientes, que también forman parte del historial de búsqueda.
- El historial de búsqueda está disponible en [Android Auto](../navigation/auto-car.md#search) y [CarPlay](../navigation/car-play.md#search).


## Cómo usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historial de búsqueda](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historial de búsqueda](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

El historial de búsqueda sirve para proporcionar información relevante sobre tus acciones anteriores.

- *Volver a buscar*. Puedes usar el historial de búsqueda para buscar de nuevo lugares o direcciones buscadas previamente sin tener que volver a introducir la consulta.

- *Acceso rápido a lugares visitados con frecuencia*. Si visitas ciertos lugares con frecuencia, como tu casa, el trabajo o tus lugares favoritos, el Historial de búsqueda guarda esos lugares, proporcionando un acceso rápido a ellos.

- *Seguimiento de viajes anteriores*. El historial de búsqueda puede ser útil para seguir viajes y rutas anteriores. Puedes seguir rutas que hayas tomado antes, o [planificar tu próxima ruta](../plan-route/create-route.md) basándote en las anteriores.

- *Buscar lugares durante un cierto período de tiempo*. Para la aplicación de Android, debes usar una pulsación larga, luego encontrar el mes en el que realizaste el viaje, salir del menú de eliminación y establecer el nombre en el campo de búsqueda. Para la aplicación de iOS, la lista del historial de búsqueda ya está dividida en bloques por mes.

- *Eliminar entradas*. El Historial de búsqueda permite [eliminar](#delete) entradas anteriores, lo que puede ser útil para la confidencialidad o para mantener tu historial organizado.


## Elementos del historial {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historial de búsqueda](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historial de búsqueda](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Cada campo de la lista del Historial de búsqueda contiene parte de la **información** disponible para la aplicación.

- Un icono que identifica el tipo o categoría del objeto encontrado.
- El nombre del objeto, la ubicación, la dirección o la consulta de tipo. Para las rutas, se muestra información sobre la distancia, el número de puntos de referencia y el tiempo.
- Distancia desde tu ubicación actual hasta el punto y dirección por brújula.


### Orden de los elementos {#order-of-items}

- **Elementos recientes**. Las solicitudes o ubicaciones más recientes se muestran en la parte superior de la lista. Esto permite un acceso rápido a los elementos utilizados recientemente.
- **Orden cronológico**. Los elementos de la lista del Historial de búsqueda se organizan en orden cronológico, comenzando por las entradas más antiguas y terminando por las más recientes. Los elementos antiguos se desplazan gradualmente hacia abajo en la lista a medida que se añaden nuevas entradas, a menos que se hayan utilizado elementos antiguos del historial de búsqueda, en cuyo caso se moverán a la parte superior de la lista.
- En iOS, la lista se ordena por mes.

### Tipo de objetos {#type-of-objects}

Los siguientes **tipos de objetos** entran en la lista del Historial de búsqueda:

- **Ubicaciones**. Puede ser una dirección, un nombre de empresa, un número de ruta, coordenadas, marcadores, puntos de interés, notas de OSM o lugares en los que hayas tocado el mapa.
- **Rutas y puntos de referencia**. La lista incluye las rutas que creaste, grabaste o descargaste que usaste en rutas anteriores, y los puntos de referencia si navegaste a ellos por separado.


## Acciones {#actions}

En la herramienta Historial de búsqueda, puedes [eliminar](#delete) consultas innecesarias, todas a la vez o por elementos individuales. Puedes usar la [exportación](#export-and-share) del historial. La aplicación de Android proporciona una acción adicional de [compartir](#share-android) elementos de búsqueda como un archivo [GPX](../../technical/osmand-file-formats/osmand-gpx.md).

Puedes **desactivar o activar** la visualización de todo el historial de búsqueda. En este caso, las consultas no se eliminan del dispositivo. En Android, el interruptor se encuentra en la pantalla principal de la herramienta en la [pestaña Historial](#overview). En iOS, se encuentra en *Menú → Ajustes → Ajustes de OsmAnd → Historial → Historial de búsqueda*.


### Eliminar {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Eliminar historial de búsqueda](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Eliminar historial de búsqueda](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Después de usar OsmAnd durante mucho tiempo, la lista del *Historial de búsqueda* puede volverse demasiado larga, por lo que eliminar las consultas de búsqueda ayuda a limpiar la lista. Puedes eliminar las consultas que ya no son relevantes o que ya no tienes intención de usar en el futuro, lo que facilita la búsqueda en la lista, especialmente cuando necesitas encontrar rápidamente consultas de búsqueda específicas.

Debes **mantener pulsado cualquiera de los elementos de consulta de la lista** para abrir la pantalla de eliminación.

- *Seleccionar o deseleccionar elementos aleatorios*: toca el elemento deseado en la lista.
- *Seleccionar el período disponible para eliminar*, como día, últimos 7 días o mes: marca la casilla con el subtítulo en la lista.
- *Puedes eliminar todo el historial* a la vez tocando el botón *Seleccionar todo* en la parte inferior de la pantalla.
- *Menú → Ajustes → Ajustes de OsmAnd → Historial → Acciones*. Esta sección contiene el botón **Eliminar todo el historial**.


### Exportar y compartir {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Historial de configuración general de Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Historial de configuración general de iOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Hay varias opciones disponibles para exportar el historial de búsqueda. Todos los archivos se exportan en formato `.osf` (archivo de configuración de OsmAnd).

1. *Menú → Ajustes → Ajustes de OsmAnd → Historial → Historial de búsqueda*.
    La exportación está disponible a través del menú de configuración de OsmAnd. Para Android, seguir esta ruta te lleva a la pantalla de eliminación, donde está disponible [Compartir historial](#share-android). En el caso de iOS, puedes seleccionar elementos individuales o todo el historial en la pantalla, y después de tocar el botón *Exportar*, ir al menú *Copia de seguridad local*.

2. *Menú → Ajustes → Ajustes de OsmAnd → Historial → Acciones → Copia de seguridad como archivo* (Android).
    *Menú → Ajustes → Ajustes de OsmAnd → Historial → Acciones → Exportar* (iOS).
    Al tocar estos elementos, se accede al menú *Importar/Exportar* (Android) o *Copia de seguridad local* (iOS). Expande la lista *Mis lugares* y busca *Historial de búsqueda*. Todas las consultas se exportan en un solo archivo a la vez.

3. *Menú → Ajustes → Importar/Exportar → Exportar a archivo* (Android).
    *Menú → Ajustes → Copia de seguridad local → Copia de seguridad como archivo* (iOS).
    Puedes leer más detalles en el artículo [Importar/Exportar](../personal/import-export.md#export).

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    Puedes usar la Nube para hacer una copia de seguridad de tu historial de búsqueda. En el menú *Cambios locales* o *Ajustes → Copia de seguridad de datos → Mis lugares → Historial de búsqueda*.

![Historial de configuración](@site/static/img/search/history_search_share_andr.png)

La exportación de elementos o de todo el historial de búsqueda puede ser útil en los siguientes casos:

- *Copia de seguridad*. Puedes hacer una copia de seguridad de tu historial de búsqueda para guardar la información antes de eliminarla y restaurarla si es necesario.
- *Transferencia a otro dispositivo*. Cuando cambias de dispositivo, puedes usar la función de exportación o la Nube para transferir tu historial de búsqueda a un nuevo dispositivo sin tener que buscar e introducir datos de nuevo.
- *Analizar y procesar datos*. Puedes exportar tu historial de búsqueda para el análisis de datos o usarlo en otras aplicaciones.
- [Compartir](#share-android) el historial de búsqueda con otros usuarios de OsmAnd.


#### Compartir (Android) {#share-android}

![Historial de configuración](@site/static/img/search/history_search_share_andr.png)

Los pasos para compartir elementos del historial de búsqueda son similares a los de [exportar](#export-and-share), con la diferencia de que exportas todo el historial a la vez como un archivo [osf](../../technical/osmand-file-formats/osmand-osf.md), mientras que puedes compartir archivos individuales seleccionados en formato gpx.

En la pantalla [eliminar](#delete), selecciona los elementos deseados de la lista del Historial de búsqueda. En la esquina superior derecha de la pantalla, hay un icono que indica compartir. Selecciona una aplicación o acción disponible en la lista para compartir.


## Artículos relacionados {#related-articles}

- [Buscar todo](./search-all.md)
- [Buscar dirección](./search-address.md)
- [Buscar PDI](./search-poi.md)
- [Buscar coordenadas](./search-coordinates.md)


> *Última actualización: julio de 2024*