---
source-hash: 1b9d749ebb8730c64d4b1fceddc86003dfc6c14c7f5e556129e21a75f245cdc3
sidebar_position: 8
title: Mapas en línea
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Generalidades {#overview}

Los mapas en línea de OsmAnd son una adición extensa a la base de datos de OpenStreetMap ya presente en la aplicación. Con este complemento, puedes añadir capas a tu mapa con información de una fuente diferente, empezando por la vista de satélite o las rutas de senderismo y terminando con datos muy específicos, como la ubicación de hidrantes. También puedes cambiar la fuente principal del mapa de mapas vectoriales a teselas en línea.


## Parámetros de configuración requeridos {#required-setup-parameters}

La capacidad de usar mapas en línea se habilita automáticamente en la versión de iOS de OsmAnd. Para mostrar mapas en línea en Android, debes realizar las siguientes configuraciones:

1. [Habilitar](../plugins/index.md#enable--disable) el complemento **Mapas en línea** en *Menú principal → Complementos → Mapas en línea*.
2. Realiza las configuraciones necesarias en la sección [Fuente del mapa](../map/raster-maps.md#select-raster-maps) del menú Configurar mapa.
3. Establece la *Fuente del mapa*, el *Mapa superpuesto* y el *Mapa subyacente*. Selecciona tu proveedor de mapas satelitales preferido.
4. Descarga el [mapa en línea](#how-to-prepare-raster-maps) seleccionado si es necesario.


## Usar mapas ráster en el dispositivo {#use-raster-maps-on-device}

Puedes encontrar información detallada sobre la visualización y personalización de mapas ráster en el artículo [Mapas ráster](../map/raster-maps.md). Cómo usar:

1. [Selecciona](../map/raster-maps.md#select-raster-maps) el mapa ráster como capa *Principal*, *Subyacente* o *Superpuesta*.
    - [Cambia](../map/raster-maps.md#how-to-use-raster-maps) los parámetros de la capa (transparencia).

2. [Prepara/copia](../map/raster-maps.md#prepare--copy-raster-maps-to-device) los mapas ráster al dispositivo.
    - [Añade una nueva fuente de mapa ráster en línea](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Añade una URL mágica](../map/raster-maps.md#magic-url-to-install-map-source) para instalar la fuente del mapa.

3. [Gestiona](../map/raster-maps.md#manage-raster-maps) los mapas ráster.
    - [Descarga/actualiza teselas](../map/raster-maps.md#download--update-tiles).
    - [Cambia](../map/raster-maps.md#change-raster-map-parameters) los parámetros del mapa ráster.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Ve a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configurar subyacente/superpuesto Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ve a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configurar subyacente/superpuesto iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Cómo preparar mapas ráster {#how-to-prepare-raster-maps}

:::info
Artículo principal para preparar mapas [leer aquí](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

A pesar de que el complemento se llama *Mapas en línea*, también puedes usar los mapas sin conexión a internet. Solo necesitas guardar las partes de los mapas (a menudo llamadas teselas) para usarlas más tarde. Para ello, descarga una [herramienta específica de creación de mapas](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) desarrollada por el equipo de OsmAnd.

Selecciona el área que necesitas descargar, haz clic en Preload area, luego establece los niveles de zoom más pequeño y más grande que deseas mostrar y descarga las teselas.
Para la **versión de Android**, puedes copiarlas a la carpeta *osmand/tiles/*tipo de tesela** de tu teléfono. También deberás abrir *Configurar mapa -> Mapa superpuesto* y elegir las teselas en línea de OsmAnd.

Para la **versión de iOS**, puedes elegir un archivo SQ Lite en tu teléfono (cualquier mensajero o Dropbox), OsmAnd te sugerirá añadirlo. También deberás abrir *Mapa → Superpuesto/Subyacente o Tipo de mapa* y elegir una nueva fuente de mapa.

Cómo añadir un archivo SQ Lite en la versión de Android e iOS de OsmAnd puedes leerlo en el proyecto <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis</b></a>.


Las teselas en línea pueden ser útiles cuando solo necesitas una pequeña sección del mapa o un tipo específico de este para usar en un área limitada, pero no quieres descargar toda la región. Pueden ser útiles en un sinfín de situaciones.

![Mapas en línea](@site/static/img/plugins/online-maps/map_creator.jpg)

![Mapas en línea](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (estilos de mapa)](../../user/map/vector-maps.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

1. Los mapas en línea no aparecen en el menú Fuente del mapa:  
  
    - Verifica que el complemento Mapas en línea esté habilitado: *Menú → Complementos → Mapas en línea*.  
    - Asegúrate de tener una conexión a internet activa para acceder a las imágenes satelitales.  
    - Comprueba si el mapa en línea seleccionado está descargado o requiere [configuraciones adicionales](../map/raster-maps.md#select-raster-maps).

> *Última actualización: enero de 2025*