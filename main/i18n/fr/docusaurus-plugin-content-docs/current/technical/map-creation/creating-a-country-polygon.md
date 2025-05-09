---
source-hash: 9d065c065c0e87a1e9538359d1a97dceaf1aad6dcb8f336a848ebfd40da3e26c 
title: Créer un polygone de pays
versions: '*'
---
**_Cet article doit être révisé_**

Cet article décrit comment créer un poly(gone) pour un pays manquant dans geofabrik.de et comment ajouter ce polygone au serveur de génération de cartes d'OsmAnd.

## Introduction

OsmAnd est livré avec de nombreuses cartes pour de nombreux pays. La plupart des cartes sont créées à partir de cartes de "données brutes" téléchargées depuis [geofabrik.de](http://download.geofabrik.de). Geofabrik fournit gratuitement ces cartes de données brutes à tout le monde et propose des services et produits (commerciaux) basés sur ces cartes.

Geofabrik.de a pour stratégie de fournir des cartes pour les pays demandés par un grand nombre d'utilisateurs ou par leurs clients. Cela signifie que certaines cartes n'apparaissent jamais sur geofabrik car il n'y a tout simplement pas assez de demandes (ou aucune), comme certains pays exotiques tels que les Seychelles ou le Burundi, etc.

## Processus serveur
En raison de cette décision stratégique de geofabrik, OsmAnd a une option pour générer des cartes pour ces pays et les outils [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-development.zip) et [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) sont utilisés à cette fin. Pour OsmAndMapCreator, il s'agit d'un processus en trois étapes :
- OsmAndMapCreator a besoin d'un polygone qui entoure la frontière extérieure du pays.
- OsmAndMapCreator a besoin de la "carte de données brutes" du niveau supérieur suivant incorporant ce pays. Pour le Burundi, cela signifie qu'OsmAndMapCreator a besoin de la carte de l'Afrique. Pour la Rhénanie-du-Nord-Westphalie, cela signifie qu'OsmAndMapCreator a besoin de la carte de l'Allemagne.
- [Osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) créera une carte de "données brutes" à partir du polygone en extrayant les données cartographiques de la carte "parente".
- OsmAndMapCreator créera une carte OsmAnd obf basée sur la carte de "données brutes" intermédiaire générée par osmconvert.

## Actions nécessaires
Selon la complexité du polygone (généré), cette chaîne complète d'actions peut prendre de 10 minutes à 2 heures au total.

### 1. Obtenir la relation OpenStreetMap de Nominatim
- Allez sur [nominatim.openstreetmap.org](https://nominatim.openstreetmap.org/)
- Remplissez le nom de votre pays
- Une fois trouvé, cliquez sur le lien "(details)"
- Dans Détails, faites défiler jusqu'à "OSM: relation " et notez ou copiez le numéro d'ID de la relation.

### 2. Générer le polygone
- Allez sur [polygons.openstreetmap.fr](http://polygons.openstreetmap.fr/)
- Remplissez (ou collez) le numéro d'ID de la "OSM: relation " que vous avez récupéré de Nominatim pour le pays souhaité dans le champ "Id of relation".
- Cela créera un polygone par défaut, composé de 250 à 3500 nœuds (NPoints). Le polygone lui-même se trouve dans la colonne "poly".
- En cas de plus de 350 nœuds, vous devrez simplifier le polygone. Plus le polygone est simple, plus la carte du pays peut être créée rapidement (bien sûr, cela dépend du contenu).

### 3. Simplifier le polygone
Le nombre de points de nœud (NPoints) doit être aussi faible que possible pour une création de carte la plus rapide possible par OsmAndMapCreator. Comme mentionné : En cas de plus de 350 points de nœud, essayez de les réduire en "jouant" avec la variable X (selon mon expérience, les autres n'ont pas vraiment d'importance).
- En cas de plus de 350 nœuds, essayez de les réduire en "jouant" avec la variable X (selon mon expérience, les autres n'ont pas vraiment d'importance).
- Parfois, vous obtenez d'excellents résultats (90 NPoints, 200 NPoints, 270 NPoints) et vous avez terminé cette étape. Parfois, vous ne pouvez tout simplement pas descendre en dessous de 450 NPoints environ. Dans ce cas, vous devez appliquer d'autres étapes manuelles.
- Enregistrez votre polygone final dans un fichier. Utilisez le nom par défaut correct, comme france.poly. Respectez les caractères minuscules.

### 4. Modification et simplification supplémentaires du polygone
- Ouvrez JOSM (téléchargez si nécessaire) et ouvrez le fichier de polygone que vous avez créé (avez-vous fait une copie/sauvegarde du polygone original que vous avez enregistré ?).
- Ajoutez un arrière-plan à partir du menu "Images" et sélectionnez l'arrière-plan par défaut "OpenStreetMap (Mapnik)".
- Supprimez manuellement les points de nœud si possible. \*Note :\* Gardez le polygone aussi près que possible de la frontière. Vous avez besoin d'un certain chevauchement, mais essayez de le maintenir en dessous de 2 à 5 kilomètres. Le chevauchement dans les pays sera généré deux fois pour chaque pays. Moins de chevauchement signifie moins de temps de rendu et moins d'erreurs de rendu. Sur les côtes et autour des îles, essayez de garder plus de distance (20 kilomètres). C'est largement accepté et la mer est de toute façon "vide".
- Lorsque vous avez fait de votre mieux, vous pouvez enregistrer le polygone mis à jour et corrigé. Comme dit : essayez d'obtenir le moins de points de nœud possible, mais parfois une frontière de pays est si compliquée que vous avez simplement besoin de plus de points de nœud pour la décrire et pour garder le polygone aussi près que possible de la frontière : qu'il en soit ainsi.
- **Ne téléchargez pas le polygone sur OSM**. JOSM vous demandera de télécharger votre travail sur OpenStreetMap. Ne le faites pas pour ces polygones, sauf si vous savez exactement ce que vous faites. Presque tous les pays du monde sont déjà parfaitement couverts dans OpenStreetMap (sinon nominatim ne pourrait pas vous donner les détails sur le pays, et polygons.openstreetmap.fr ne pourrait pas générer le polygone basé sur l'ID de relation OSM).

### 5. Ajout du poly(gone) au serveur OsmAnd

Pour pouvoir faire cela, vous devez vous enregistrer en tant qu'utilisateur.

Pour rendre la génération de cartes possible, deux étapes sont nécessaires :
- Ajout du polygone à la section des données cartographiques
- Ajout du pays au fichier de données utilisé pour générer les cartes OsmAnd obf.

Ajout du polygone à la section des données cartographiques
- Allez à l'adresse web du serveur de développement OsmAnd à [https://github.com/osmandapp/](https://github.com/osmandapp/ "https://github.com/osmandapp/")
- Sélectionnez la section OsmAnd-misc.
- Sélectionnez "fork" pour créer votre propre dépôt personnel.
- Créez un nouveau fichier et copiez vos données poly à l'intérieur. Enregistrez le fichier.
- Créez une demande de tirage (pull request).

Ajouter la création de carte à la liste de lots
- Allez à l'adresse web du serveur de développement OsmAnd à [github.com/osmandapp](https://github.com/osmandapp/)
- Sélectionnez la section OsmAnd-tools.
- Sélectionnez "fork" pour créer votre propre dépôt personnel.
- Dans votre dépôt personnel, allez dans le dossier obf-generation/regions.
- Sélectionnez le fichier indexes.xml et cliquez sur modifier.
- Ajoutez votre pays à l'emplacement pertinent et enregistrez le fichier.
- Créez une demande de tirage (pull request).

## Créer vos propres cartes personnelles à partir d'un polygone

Vous pouvez créer par exemple des polygones à partir de pays, de comtés/provinces/états, de régions et de villes.

Supposons que votre fille aille à Paris pour quelques jours avec une amie. Elle n'est pas intéressée par la navigation, la marche ou le vélo (sauf si absolument nécessaire), mais elle veut savoir où elle se trouve, où aller et où trouver les lieux intéressants (POIs). De plus, elle a un petit téléphone (CPU bas de gamme, peu de mémoire) et une petite carte SD (remplie de musique). La carte doit donc être aussi petite que possible : à la fois pour le stockage et pour les performances. Vous pouvez bien sûr télécharger la carte de france\_ile-de-france.obf contenant Paris, mais vous pouvez également générer une carte de Paris "sur mesure".
- Laissez votre fille télécharger OsmAnd, ou mieux encore : laissez-la acheter OsmAnd+.
- Obtenez l'ID de relation OSM pour Paris auprès de Nominatim.
- Obtenez le polygone (simplifié) pour l'ID de Paris auprès de polygons.openstreetmap.fr.
- Téléchargez ou compilez [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert).
- Téléchargez la carte de "données brutes" d'Île-de-France depuis geofabrik.de.
- Créez une carte de données brutes de Paris à partir de la carte d'Île-de-France et du polygone de Paris comme suit :
<pre>
$ osmconvert ile-de-france.osm.pbf -B=paris.poly --out-pbf > Paris.osm.pbf
</pre>
- Téléchargez l'application OsmAndMapCreator depuis [download.osmand.net/latest-night-build/](http://download.osmand.net/latest-night-build/ "https://download.osmand.net/latest-night-build/").
- Créez votre carte OsmAnd obf à partir des données cartographiques Paris.osm.pbf à l'aide d'OsmAndMapCreator.

