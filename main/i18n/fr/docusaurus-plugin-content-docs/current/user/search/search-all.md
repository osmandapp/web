---
source-hash: b39da87cb283fc3373cd7fc8ea9c535845d2da42231bb2b94d76bc577ea35ed4
sidebar_position: 1
title:  Rechercher tout
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



<InfoIncompleteArticle/>


## Vue d'ensemble {#overview}

La **recherche** est un outil utile pour trouver rapidement des lieux. Vous pouvez utiliser la recherche pour trouver un lieu par adresse, coordonnées, points d'intérêt (POI) ou recherches précédentes. La [recherche d'adresse](#search-address) vous permet de saisir l'adresse pour obtenir un emplacement exact. La [recherche de coordonnées](#search-coordinates) fonctionne avec des coordonnées géographiques telles que la latitude et la longitude. Avec la [recherche de POI](#search-poi), vous pouvez rechercher des lieux à proximité dans des catégories spécifiques, telles que des cafés, des hôtels ou des stations-service. L'[historique de recherche](#search-history) enregistre les recherches passées pour un accès rapide aux lieux précédemment trouvés. La fonction de recherche facilite la planification de voyages, la navigation en terrain inconnu et la recherche de POI à proximité.


## Comment utiliser {#how-to-use}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search POI list Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI list iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Vous devez suivre l'une des étapes pour lancer votre recherche :

- Appuyez sur le [bouton de recherche](../widgets/map-buttons.md#search) sur l'écran de l'application cartographique et saisissez votre requête.

- Allez dans le *Menu principal → Rechercher → saisissez votre requête de recherche*.

- Lorsque vous vous préparez à démarrer un itinéraire, appuyez sur [*Navigation → Définir la destination → Champ de recherche*](../navigation/setup/route-navigation.md#set-target-point) *→ requête de recherche*.  


Informations importantes :

- ***Des cartes vectorielles hors ligne téléchargées sont nécessaires pour rechercher avec OsmAnd***.

- Initialement, **la recherche est basée sur les données situées sur la carte dans la zone visible de l'écran de l'appareil**, mais si rien n'y est trouvé, OsmAnd propose d'augmenter le rayon de recherche.  

### Requêtes de base {#basic-queries}

***Liste des requêtes* :**

- Coordonnées tous les formats disponibles.
- Adresse :
    - Rue, numéro de maison ;
    - Ville, rue ;
    - Intersections de rues ;
    - Ville ;
    - Données TIGER ;
    - Code postal, numéro de maison ;
    - Code postal, rue, numéro de maison.
- Rechercher des POI par nom et par catégorie avec des filtres supplémentaires.
- Rechercher des itinéraires OSM par nom et par catégorie avec des filtres supplémentaires.
- Rechercher les sommets et volcans les plus importants.
- Rechercher par favoris et points de cheminement.
- Rechercher des icônes par noms de sous-catégories de POI.
- Rechercher par traces.
- Rechercher par lieux d'affaires et noms de marques.
- Recherche en ligne (Nominatim).
- Recherche d'URL (Google et OsmAnd).
- Historique de recherche.

<!--
***Formats pris en charge* :**  

***Les balises*** peuvent être utilisées comme requête de recherche. Elles se composent d'***une clé et d'une valeur***, par exemple :
*addr:street=StreetName*.  
Pour éviter toute confusion, la clé ou la valeur est parfois entourée de guillemets : **key="value" ou "key"="value"**. Les guillemets et le signe égal ne font pas partie du contenu de la balise.
-->

### Tri des résultats de recherche {#sorting-search-results}

OsmAnd trie automatiquement les résultats de recherche selon trois critères principaux :

1. **Correspondance des requêtes** — Les résultats contenant des correspondances exactes ou partielles avec les mots que vous avez saisis sont affichés plus haut.

2. **Type d'objet** - Lors du tri par nom, les villes et les rues sont prioritaires sur les POI lors de l'affichage des résultats.

3. **Distance** - Lorsque les résultats ont des critères de correspondance et des types d'objets similaires, les résultats les plus proches de la position actuelle de l'utilisateur sont affichés en premier.

***Par exemple***, une requête de recherche *bureau de poste* affichera d'abord les bureaux de poste les plus proches, même s'il existe d'autres éléments avec des noms similaires à une plus grande distance.  

***Limitations actuelles :***

- Il n'y a pas de réglage manuel pour modifier l'ordre de tri des résultats de recherche.
- Le processus de tri est **géré automatiquement** par OsmAnd, en fonction des critères énumérés ci-dessus.
- Dans les cas où les résultats de recherche sont trop larges, OsmAnd peut **limiter les résultats affichés** à ceux ayant la plus grande précision de correspondance de mots.


### Recherche en texte intégral {#full-text-search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Favorite search Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite search iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Vous pouvez trouver l'emplacement requis sur la carte à partir de la liste des points qui apparaissent au fur et à mesure que vous saisissez une requête.

1. Commencez à saisir le nom ou l'adresse dans la barre de recherche.

2. Au fur et à mesure que vous tapez, la liste affiche les points les plus proches de la requête, dans cet ordre approximatif :
    - Catégories de POI
    - Favoris, POI, itinéraires et points de cheminement
    - Traces
    - Adresses
    - Cartes à télécharger

3. Si vous saisissez un [nom de marque](../search/search-poi.md#how-to-use), la liste commencera par les résultats de ce nom, triés par distance la plus proche.

:::note Limitations des données TIGER dans les recherches d'adresses
OsmAnd a intégré les [**données TIGER**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) dans les cartes des États-Unis pour fournir des informations sur les adresses aux États-Unis. L'ensemble de données TIGER est **basé sur des plages** et ne contient pas de numéros de maison précis, de sorte que certaines adresses peuvent être manquantes ou inexactes.
:::


### Rechercher sur la carte {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Search POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd vous permet de rechercher des points affichés sur une carte sur l'écran de votre appareil. Pour ce faire :

- Utilisez [l'une des méthodes](#how-to-use) pour accéder à l'outil de recherche.
- Commencez à saisir le nom ou l'adresse dans le champ de recherche.
- Une boîte avec le bouton *Afficher sur la carte* apparaîtra sous le champ de saisie de la recherche.
- Appuyez sur ce bouton pour accéder à la carte.
- Vous pouvez continuer à saisir votre requête en haut de l'écran.


### Rechercher à proximité {#search-nearby}

![Search Android](@site/static/img/search/search_all_near_location_andr.png)

Vous pouvez utiliser la recherche à proximité d'un lieu spécifique. Pour ce faire, sélectionnez le point requis [dans la liste du menu de recherche](#full-text-search) ou sélectionnez-le directement sur la carte. Dans le [menu contextuel de la carte](../map/map-context-menu.md#actions), sélectionnez *Actions → Rechercher à proximité*.


## Rechercher une adresse {#search-address}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

La **recherche d'adresse** utilise les données OpenStreetMap. Ce type de recherche vous permet de trouver l'emplacement et la direction d'une adresse spécifique à partir d'une liste déjà triée. Pour en savoir plus, consultez l'article [Rechercher une adresse](./search-address.md).


## Historique de recherche {#search-history}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Vous pouvez utiliser l'**historique de recherche** pour rechercher à nouveau des lieux, des adresses ou des lieux fréquemment visités précédemment trouvés sans saisir à nouveau la requête. Vous trouverez plus de détails dans l'article [Historique de recherche](./search-history.md).


## Rechercher des POI {#search-poi}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

La **recherche de POI** est une liste, triée par catégorie, avec laquelle vous pouvez facilement trouver des lieux et des services près de votre position actuelle ou d'une zone sélectionnée sur la carte.

- La [recherche de POI personnalisée](./search-poi.md#custom-poi-search) vous permet de combiner différentes catégories de POI pour simplifier et personnaliser votre recherche.  
Par exemple, si vous devez trouver plusieurs types de services dans une certaine zone ou sur une certaine section d'un itinéraire.

- OsmAnd propose une [recherche en ligne](./search-poi.md#online-search) qui fonctionne en temps réel, vous donnant un accès rapide aux résultats de recherche.  
Il est pratique à utiliser lorsque les cartes de la région ne sont pas disponibles, mais une connexion Internet constante et stable est requise.

- Lisez l'article [Rechercher des POI](./search-poi.md) pour plus d'informations.


## Rechercher des coordonnées {#search-coordinates}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

La recherche de coordonnées fournit un emplacement précis. Vous pouvez saisir des coordonnées précises obtenues, par exemple, à partir d'autres sources telles qu'une carte, un appareil GPS ou des services en ligne, ce qui est particulièrement utile lorsqu'il s'agit de lieux qui n'ont pas d'adresse exacte. Pour plus d'informations, consultez l'article [Rechercher des coordonnées](./search-coordinates.md).


## Articles connexes {#related-articles}

- [Rechercher une adresse](./search-address.md)
- [Historique de recherche](./search-history.md)
- [Rechercher des POI](./search-poi.md)
- [Rechercher des coordonnées](./search-coordinates.md)

> *Dernière mise à jour : avril 2025*