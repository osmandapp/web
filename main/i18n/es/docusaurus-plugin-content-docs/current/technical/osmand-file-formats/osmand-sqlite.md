---
source-hash: 777e1b6ae34dee89414b4c08be679e9d019b5045cbf293b733879b6dfb3cd8db
sidebar_position: 9
---

# Formato SQLite de Mosaicos - .sqlite {#tiles-sqlite-format---sqlite}



El formato SQLite utilizado en OsmAnd se basa en el formato SQLite "BigPlanet" soportado por MOBAC. En OsmAnd, añadimos una serie de tablas que extienden el formato:

|Tabla|Columna|Especificación y Propósito|
|:----|:-----|:---------------|
|"info"|"url"|Cadena. Plantilla de URL para descargar mosaicos con zoom ≣ `{z}` ≣ `{0}`, `{x}` ≣ `{1}`, `{y}` ≣ `{2}`, nombre del servidor ≣ `{rnd}`|
||"randoms"|Cadena. Los nombres de los espejos del servidor. Separados por comas. Uno de estos valores reemplazará aleatoriamente el marcador de posición `{rdn}` en el campo "url".|
||"referer"|Cadena. HTTP Referer. Tal como se utiliza para la descarga.|
||"rule"|Cadena. Plantilla soportada: 1 (igual que vacío), wms_tile, yandex_traffic. Añade algoritmos específicos sobre cómo se descargarán los mosaicos. wms_tile utiliza un servidor proxy como whoots.mapwarper.net para tratar con fuentes WMS.|
||"useragent"|Cadena. HTTP User Agent. Tal como se utiliza para la descarga.|
||"minzoom"|Entero. Nivel de zoom mínimo. Entero respectivo. (También invertido en el caso de BigPlanet).|
||"maxzoom"|Entero. Nivel de zoom máximo. Entero respectivo. (También invertido en el caso de BigPlanet).|
||"ellipsoid"|Entero 0 o 1. 1 para Mercator Elíptico (mosaicos de Yandex). 0 para Mercator Web Esférico regular (OSM, Google Maps).|
||"inverted\_y"|Entero 0 o 1. 1 para número de mosaico Y invertido (mosaicos de Nakarte.me).|
||"timecolumn"|Cadena "yes" o "no". Una tabla de mosaicos con una columna "time" indica cuándo se recuperó cada mosaico.|
||"expireminutes"|Entero. Especifica si los mosaicos caducarán después del número de minutos dado. Seguirían mostrándose, pero también se volverían a descargar.|
||"tilenumbering"|Cadena "" o "BigPlanet". Si es "BigPlanet", el zoom se invertirá y se calculará como z = 17 - zoom.|
||"tilesize"|Entero. Vacío o 256 o 512, opcional, se utiliza para describir el tamaño del mosaico.|
|"tiles"|"x", "y", "z"|Entero. Indica las coordenadas Mercator del mosaico. Tenga en cuenta que el zoom podría invertirse para el caso de BigPlanet.|
||"image"|Blob de bytes de imagen.|
||"time"|Entero. Marca de tiempo cuando se descargó la imagen.|

Este formato también es utilizado por los archivos de sombreado y pendiente distribuidos por la aplicación OsmAnd.

La clase que soporta esto es SQLiteTileSource en o cerca de [https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36).