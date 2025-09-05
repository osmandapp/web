---
source-hash: 777e1b6ae34dee89414b4c08be679e9d019b5045cbf293b733879b6dfb3cd8db
sidebar_position: 9
---

# Tegels SQLite-formaat - .sqlite {#tiles-sqlite-format---sqlite}



Het SQLite-formaat dat in OsmAnd wordt gebruikt, is gebaseerd op de "BigPlanet" SQLite zoals ondersteund door MOBAC. In OsmAnd voegen we een aantal tabellen toe die het formaat uitbreiden:

|Tabel|Kolom|Specificatie en doel|
|:----|:-----|:---------------|
|"info"|"url"|Tekenreeks. URL-sjabloon om tegels te downloaden met zoom ≣ `{z}` ≣ `{0}`, `{x}` ≣ `{1}`, `{y}` ≣ `{2}`, servernaam ≣ `{rnd}`|
||"randoms"|Tekenreeks. De namen van de mirrors van de server. Door komma's gescheiden. Een van deze waarden zal willekeurig de placeholder `{rdn}` in het veld "url" vervangen.|
||"referer"|Tekenreeks. HTTP Referer. Zoals gebruikt voor downloaden.|
||"rule"|Tekenreeks. Ondersteund sjabloon: 1 (hetzelfde als leeg), wms_tile, yandex_traffic. Voegt specifieke algoritmen toe voor het downloaden van tegels. wms_tile gebruikt een proxyserver zoals whoots.mapwarper.net om met WMS-bronnen om te gaan|
||"useragent"|Tekenreeks. HTTP User Agent. Zoals gebruikt voor downloaden.|
||"minzoom"|Integer. Min zoomniveau. Respectievelijk integer. (Ook omgekeerd in het geval van BigPlanet).|
||"maxzoom"|Integer. Max zoomniveau. Respectievelijk integer. (Ook omgekeerd in het geval van BigPlanet).|
||"ellipsoid"|Integer 0 of 1. 1 voor Elliptic Mercator (Yandex-tegels). 0 voor reguliere Spheric Web Mercator (OSM, Google maps)|
||"inverted\_y"|Integer 0 of 1. 1 voor omgekeerd Y-tegelnummer (Nakarte.me-tegels).|
||"timecolumn"|Tekenreeks "yes" of "no". Een tegeltabel met een "time"-kolom geeft aan wanneer elke tegel is opgehaald.|
||"expireminutes"|Integer. Specificeert of tegels na het opgegeven aantal minuten moeten verlopen. Ze zouden nog steeds worden weergegeven, maar ook opnieuw worden gedownload.|
||"tilenumbering"|Tekenreeks "" of "BigPlanet". Als "BigPlanet", wordt de zoom omgekeerd en berekend als z = 17 - zoom.|
||"tilesize"| Integer. Leeg of 256 of 512, optioneel, het wordt gebruikt om de tegelgrootte te beschrijven|
|"tiles"|"x", "y", "z"|Integer. Geeft tegel Mercator-coördinaten aan. Merk op dat de zoom omgekeerd kan zijn voor het BigPlanet-geval.|
||"image"|Blob van afbeeldingsbytes.|
||"time"|Integer. Tijdstempel wanneer de afbeelding is gedownload.|

Dit formaat wordt ook gebruikt door Hillshade- en Slope-bestanden die door de OsmAnd-applicatie worden gedistribueerd.

De klasse die dit ondersteunt is SQLiteTileSource op of nabij [https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36).