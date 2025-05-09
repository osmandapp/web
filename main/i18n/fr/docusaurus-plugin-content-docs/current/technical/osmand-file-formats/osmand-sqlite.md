---
sidebar_position: 9
---

# Format SQLite des tuiles - .sqlite

Le format SQLite utilisé dans OsmAnd est basé sur le format SQLite "BigPlanet" tel que pris en charge par MOBAC. Dans OsmAnd, nous ajoutons un certain nombre de tables étendant le format :

|Table|Colonne|Spécification et objectif|
|:----|:-----|:---------------|
|"info"|"url"|Chaîne de caractères. Modèle d'URL pour télécharger des tuiles avec zoom ≣ `{z}` ≣ `{0}`, `{x}` ≣ `{1}`, `{y}` ≣ `{2}`, nom du serveur ≣ `{rnd}`|
||"randoms"|Chaîne de caractères. Les noms des miroirs du serveur. Séparés par des virgules. Une de ces valeurs remplacera aléatoirement l'espace réservé {rdn} dans le champ "url".|
||"referer"|Chaîne de caractères. Référent HTTP. Tel qu'utilisé pour le téléchargement.|
||"rule"|Chaîne de caractères. Modèle pris en charge : 1 (identique à vide), wms_tile, yandex_traffic. Ajoute des algorithmes spécifiques pour le téléchargement des tuiles. wms_tile utilise un serveur proxy tel que whoots.mapwarper.net pour gérer les sources WMS.|
||"useragent"|Chaîne de caractères. Agent utilisateur HTTP. Tel qu'utilisé pour le téléchargement.|
||"minzoom"|Entier. Niveau de zoom minimum. Entier respectif. (Également inversé dans le cas de BigPlanet).|
||"maxzoom"|Entier. Niveau de zoom maximum. Entier respectif. (Également inversé dans le cas de BigPlanet).|
||"ellipsoid"|Entier 0 ou 1. 1 pour Mercator elliptique (tuiles Yandex). 0 pour Mercator Web sphérique régulier (OSM, Google maps).|
||"inverted\_y"|Entier 0 ou 1. 1 pour le numéro de tuile Y inversé (tuiles Nakarte.me).|
||"timecolumn"|Chaîne de caractères "yes" ou "no". Une table de tuiles avec une colonne "time" indique quand chaque tuile a été récupérée.|
||"expireminutes"|Entier. Spécifie si les tuiles doivent expirer après le nombre de minutes donné. Elles seraient toujours affichées, mais également re-téléchargées.|
||"tilenumbering"|Chaîne de caractères "" ou "BigPlanet". Si "BigPlanet", le zoom sera inversé et calculé comme z = 17 - zoom.|
||"tilesize"| Entier. Vide ou 256 ou 512, facultatif, il est utilisé pour décrire la taille de la tuile.|
|"tiles"|"x", "y", "z"|Entier. Indique les coordonnées Mercator de la tuile. Notez que le zoom peut être inversé dans le cas de BigPlanet.|
||"image"|Blob d'octets d'image.|
||"time"|Entier. Horodatage du téléchargement de l'image.|

Ce format est également utilisé par les fichiers Hillshade et Slope distribués par l'application OsmAnd.

La classe prenant en charge cela est SQLiteTileSource à ou près de [https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36).

-- source-hash: blake2s: 3fc1f09bdc2161e550f7558068e535f6d206f31a388e535b86a1710bc8413c06 --
