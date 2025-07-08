---
source-hash: 777e1b6ae34dee89414b4c08be679e9d019b5045cbf293b733879b6dfb3cd8db
sidebar_position: 9
---

# Formato Tiles SQLite - .sqlite {#tiles-sqlite-format---sqlite}



Il formato SQLIte utilizzato in OsmAnd si basa sul formato SQLite "BigPlanet" supportato da MOBAC. In OsmAnd aggiungiamo una serie di tabelle che estendono il formato:

|Tabella|Colonna|Specifiche e Scopo|
|:----|:-----|:---------------|
|"info"|"url"|Stringa. Modello URL per scaricare i tiles con zoom ≣ `{z}` ≣ `{0}`, `{x}` ≣ `{1}`, `{y}` ≣ `{2}`, nome server ≣ `{rnd}`|
||"randoms"|Stringa. I nomi dei mirror del server. Separati da virgola. Uno di questi valori sostituirà casualmente il placeholder `{rdn}` nel campo "url".|
||"referer"|Stringa. HTTP Referer. Utilizzato per il download.|
||"rule"|Stringa. Modello supportato: 1 (come vuoto), wms_tile, yandex_traffic. Aggiunge algoritmi specifici per il download dei tiles. wms_tile utilizza un server proxy come whoots.mapwarper.net per gestire le sorgenti WMS|
||"useragent"|Stringa. HTTP User Agent. Utilizzato per il download.|
||"minzoom"|Intero. Livello di zoom minimo. Intero corrispondente. (Anche invertito nel caso di BigPlanet).|
||"maxzoom"|Intero. Livello di zoom massimo. Intero corrispondente. (Anche invertito nel caso di BigPlanet).|
||"ellipsoid"|Intero 0 o 1. 1 per Mercatore Ellittico (tiles Yandex). 0 per Mercatore Web Sferico regolare (OSM, Google maps)|
||"inverted\_y"|Intero 0 o 1. 1 per numero di tile Y invertito (tiles Nakarte.me).|
||"timecolumn"|Stringa "yes" o "no". Una tabella tiles con una colonna "time" indica quando ogni tile è stato recuperato.|
||"expireminutes"|Intero. Specifica se i tiles devono scadere dopo il numero di minuti indicato. Verranno comunque visualizzati, ma anche scaricati nuovamente.|
||"tilenumbering"|Stringa "" o "BigPlanet". Se "BigPlanet", lo zoom verrà invertito e calcolato come z = 17 - zoom.|
||"tilesize"| Intero. Vuoto o 256 o 512, opzionale, viene utilizzato per descrivere la dimensione del tile|
|"tiles"|"x", "y", "z"|Intero. Indica le coordinate Mercatore del tile. Si noti che lo zoom potrebbe essere invertito per il caso BigPlanet.|
||"image"|Blob di byte dell'immagine.|
||"time"|Intero. Timestamp di quando l'immagine è stata scaricata.|

Questo formato è utilizzato anche dai file Hillshade e Slope distribuiti dall'applicazione OsmAnd.

La classe che supporta questo è SQLiteTileSource in o vicino a [https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36).