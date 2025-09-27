---
source-hash: 4cb7c9084c7789ea96d9afde0dedc4fd456fd2ec20405b46d983a36f733ea01e
sidebar_position: 8
title:  Mapas en línea
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

Los mapas en línea de OsmAnd son una amplia adición a la base de datos de OpenStreetMap ya presente en la aplicación. Con este complemento, puede agregar capas a su mapa con información de una fuente diferente, comenzando con la vista de satélite o rutas de senderismo y terminando con datos muy específicos, como la ubicación de las bocas de incendio. También puede cambiar la fuente principal del mapa de mapas vectoriales a teselas en línea.


## Parámetros de configuración requeridos {#required-setup-parameters}

La capacidad de usar mapas en línea se habilita automáticamente en la versión iOS de OsmAnd. Para mostrar mapas en línea en Android, debe realizar los siguientes ajustes:

1. [Habilitar](../plugins/index.md#enable--disable) el complemento **Mapas en línea** en *Menú principal → Complementos → Mapas en línea*.
2. Realice los ajustes necesarios en la sección [Fuente del mapa](../map/raster-maps.md#select-raster-maps) del menú Configurar mapa.
3. Establezca el mapa *Fuente del mapa*, *Superposición* y *Subcapa*. Seleccione su proveedor de mapas satelitales preferido.
4. Descargue el [mapa en línea](#how-to-prepare-raster-maps) seleccionado si es necesario.


## Usar mapas ráster en el dispositivo {#use-raster-maps-on-device}

Puede encontrar información detallada sobre la visualización y personalización de mapas ráster en el artículo [Mapas ráster](../map/raster-maps.md). Cómo usar:

1. [Seleccione](../map/raster-maps.md#select-raster-maps) el mapa ráster como capa *Principal*, *Subcapa* o *Superposición*.
    - [Cambie](../map/raster-maps.md#how-to-use-raster-maps) los parámetros de la capa (transparencia).

2. [Prepare / copie](../map/raster-maps.md#preparecopy-raster-maps-to-device) mapas ráster en el dispositivo.
    - [Añadir nueva fuente de mapa ráster en línea](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Añadir URL mágica](../map/raster-maps.md#magic-url-to-install-map-source) para instalar la fuente del mapa.

3. [Gestionar](../map/raster-maps.md#manage-raster-maps) mapas ráster.
    - [Descargar / actualizar teselas](../map/raster-maps.md#download--update-tiles).
    - [Cambiar](../map/raster-maps.md#change-raster-map-parameters) los parámetros del mapa ráster.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configurar subcapa / superposición Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configurar subcapa / superposición iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Cómo preparar mapas ráster {#how-to-prepare-raster-maps}

:::info
Artículo principal para preparar mapas [lea aquí](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

A pesar de que el complemento se llama *Mapas en línea*, también puede usar los mapas sin conexión a Internet. Solo necesita guardar las partes de los mapas (a menudo llamadas teselas) para usarlas más tarde. Para hacerlo, descargue una herramienta específica [Map Creator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) desarrollada por el equipo de OsmAnd.

Seleccione el área que necesita descargar, haga clic en el área de precarga, luego establezca los niveles de zoom más pequeños y más grandes que desea mostrar y descargue las teselas.
Para la <b>versión de Android</b>, puede copiarlos en la carpeta <i>osmand/tiles/*tipo_de_tesela*</i> de su teléfono. También deberá abrir <i>Configurar mapa-. Capa de superposición</i> y elegir las teselas en línea de OsmAnd.

Para la <b>versión de iOS</b>, puede elegir el archivo SQ Lite en su teléfono (cualquier mensajero o dropbox), OsmAnd sugerirá agregarlo. También deberá abrir <i>Mapa → Superposición / Subcapa o Tipo de mapa</i> y elegir la nueva fuente de mapa.

Cómo agregar un archivo SQ Lite en la versión de Android e iOS de OsmAnd puede leerlo en el <a href="https://anygis.ru/Web/Html/Osmand_en"><b>proyecto Anygis</b></a>.


Las teselas en línea pueden ser útiles cuando solo necesita una pequeña sección del mapa o un tipo específico de él para usar en un área limitada, pero no quiere descargar toda la región. Pueden ser útiles en un sinfín de situaciones.

![Mapas en línea](@site/static/img/plugins/online-maps/map_creator.jpg)

![Mapas en línea](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

1. Los mapas en línea no aparecen en el menú Fuente del mapa:  
  
    - Verifique que el complemento Mapas en línea esté habilitado: *Menú → Complementos → Mapas en línea*.  
    - Asegúrese de tener una conexión a Internet activa para acceder a las imágenes de satélite.  
    - Verifique si el mapa en línea seleccionado está descargado o requiere [ajustes adicionales](../map/raster-maps.md#select-raster-maps).