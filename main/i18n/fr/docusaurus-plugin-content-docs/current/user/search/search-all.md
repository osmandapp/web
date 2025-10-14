---
source-hash: f302135b5464569dccff1ff6830993eddf7ac34c3c389eaa1f26348d90713c54
sidebar_position: 1
title:  Recherche globale
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

La **Recherche** est un outil utile pour trouver rapidement des lieux. Vous pouvez utiliser la Recherche pour trouver un lieu par adresse, coordonnées, points d'intérêt (POI) ou recherches précédentes. La [Recherche d'adresse](#search-address) vous permet de saisir l'adresse souhaitée pour obtenir un emplacement exact. La recherche par [Coordonnées](#search-coordinates) fonctionne avec des coordonnées géographiques telles que la latitude et la longitude. Avec la recherche de [POI](#search-poi), vous pouvez rechercher des lieux à proximité dans des catégories spécifiques, comme les cafés, les hôtels ou les stations-service. La recherche dans l'[Historique](#search-history) enregistre les recherches passées pour un accès rapide aux lieux précédemment trouvés. La fonction de recherche facilite la planification de voyages, la navigation en terrain inconnu et la recherche de POI à proximité.


## Comment utiliser {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Liste de recherche de POI Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Liste de recherche de POI iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Vous devez suivre l'une des étapes pour commencer votre recherche :

- Appuyez sur le [bouton Recherche](../widgets/map-buttons.md#search) sur l'écran de l'application de carte et saisissez votre requête.

- Allez dans le *Menu → Recherche → saisissez votre requête de recherche*.

- Lors de la préparation d'un itinéraire, appuyez sur [*Navigation → Définir la destination → Champ de recherche*](../navigation/setup/route-navigation.md#set-target-point) *→ requête de recherche*.  


Informations importantes :

- ***Des cartes vectorielles hors ligne téléchargées sont nécessaires pour effectuer une recherche avec OsmAnd***.

- Initialement, **la recherche est basée sur les données situées sur la carte dans la zone visible de l'écran de l'appareil**, mais si rien n'est trouvé, OsmAnd propose d'augmenter le rayon de recherche.  

### Requêtes de base {#basic-queries}

***Liste des requêtes*:**

- Coordonnées dans tous les formats disponibles.
- Adresse :
    - Rue, Numéro de maison ;
    - Ville, Rue ;
    - Intersections de rues ;
    - Ville ;
    - Données Tiger ;
    - Code postal, Numéro de maison ;
    - Code postal, Rue, Numéro de maison.
- Recherche de POI par nom et par catégorie avec des filtres supplémentaires.
- Recherche d'itinéraires OSM par nom et par catégorie avec des filtres supplémentaires.
- Recherche par les sommets et volcans les plus importants.
- Recherche par Favoris et Points de cheminement.
- Recherche d'icônes par noms de sous-catégories de POI.
- Recherche par traces.
- Recherche par lieux d'affaires et noms de marques.
- Recherche en ligne (Nominatim).
- Recherche par URL (Google et OsmAnd).
- Historique de recherche.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Tri des résultats de recherche {#sorting-search-results}

OsmAnd trie automatiquement les résultats de recherche selon trois critères principaux :

1. **Correspondance des requêtes** — Les résultats contenant des correspondances exactes ou partielles avec les mots que vous avez saisis sont affichés plus haut.

2. **Type d'objet** - Lors du tri par nom, les villes et les rues sont prioritaires sur les POI dans l'affichage des résultats.

3. **Distance** - Lorsque les résultats ont des critères de correspondance et des types d'objets similaires, les résultats les plus proches de l'emplacement actuel de l'utilisateur sont affichés en premier.

***Par exemple***, une requête de recherche *bureau de poste* affichera d'abord les bureaux de poste les plus proches, même s'il existe d'autres éléments avec des noms similaires à une plus grande distance.  

***Limitations actuelles :***

- Il n'y a pas de réglage manuel pour changer l'ordre de tri des résultats de recherche.
- Le processus de tri est **géré automatiquement** par OsmAnd, sur la base des critères énumérés ci-dessus.
- Dans les cas où les résultats de recherche sont trop larges, OsmAnd peut **limiter les résultats affichés** à ceux ayant la plus grande précision de correspondance de mots.


### Recherche en texte intégral {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche de favoris Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche de favoris iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Vous pouvez trouver l'emplacement requis sur la carte à partir de la liste de points qui apparaît au fur et à mesure que vous saisissez une requête.

1. Commencez à taper le nom ou l'adresse dans la barre de recherche.

2. Au fur et à mesure que vous tapez, la liste affiche les points les plus proches de la requête, dans cet ordre approximatif :
    - Catégories de POI
    - Favoris, POI, Itinéraires et Points de cheminement
    - Traces
    - Adresses
    - Cartes à télécharger

3. Si vous saisissez un [nom de marque](../search/search-poi.md#how-to-use), la liste commencera par les résultats portant ce nom, triés par distance la plus proche.

:::note Limitations des données TIGER dans la recherche d'adresses
OsmAnd a intégré les [**données TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) dans les cartes des États-Unis pour fournir des informations sur les adresses américaines. L'ensemble de données TIGER est **basé sur des plages** et ne contient pas de numéros de maison précis, de sorte que certaines adresses peuvent être manquantes ou inexactes.
:::


### Recherche sur la carte {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche de POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Recherche de POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd vous permet de rechercher des points affichés sur une carte sur l'écran de votre appareil. Pour ce faire :

- Utilisez [l'une des méthodes](#how-to-use) pour accéder à l'outil de recherche.
- Commencez à taper le nom ou l'adresse dans le champ de recherche.
- Une boîte avec le bouton *Afficher sur la carte* apparaîtra sous le champ de saisie de la recherche.
- Appuyez sur ce bouton pour accéder à la carte.
- Vous pouvez continuer à taper votre requête en haut de l'écran.


### Recherche à proximité {#search-nearby}

![Recherche Android](@site/static/img/search/search_all_near_location_andr.png)

Vous pouvez utiliser la recherche à proximité d'un emplacement spécifique. Pour ce faire, sélectionnez le point requis [dans la liste du menu de recherche](#full-text-search) ou sélectionnez-le directement sur la carte. Dans le [menu contextuel de la carte](../map/map-context-menu.md#actions), sélectionnez *Actions → Rechercher à proximité*.


## Recherche d'adresse {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

La **Recherche d'adresse** utilise les données d'OpenStreetMap. Ce type de recherche vous permet de trouver l'emplacement et la direction d'une adresse spécifique à partir d'une liste déjà triée. Pour en savoir plus, consultez l'article [Recherche d'adresse](./search-address.md).


## Historique de recherche {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historique de recherche](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historique de recherche](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Vous pouvez utiliser l'**Historique de recherche** pour rechercher à nouveau des lieux, des adresses ou des endroits fréquemment visités précédemment trouvés sans avoir à saisir à nouveau la requête.. Plus de détails peuvent être trouvés dans l'article [Historique de recherche](./search-history.md).


## Recherche de POI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche de POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche de POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

La **Recherche de POI** est une liste, triée par catégorie, avec laquelle vous pouvez facilement trouver des lieux et des services près de votre emplacement actuel ou d'une zone sélectionnée sur la carte.

- La [recherche de POI personnalisée](./search-poi.md#customize-poi-search) vous permet de combiner différentes catégories de POI pour simplifier et personnaliser votre recherche.  
Par exemple, si vous avez besoin de trouver plusieurs types de services dans une certaine zone ou sur une certaine section d'un itinéraire.

- OsmAnd propose une [recherche en ligne](./search-poi.md#online-search) qui fonctionne en temps réel, vous donnant un accès rapide aux résultats de recherche.  
Il est pratique à utiliser lorsque les cartes de la région ne sont pas disponibles, mais une connexion Internet constante et stable est requise.

- Lisez l'article [Recherche de POI](./search-poi.md) pour plus d'informations.


## Recherche par coordonnées {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche par coordonnées Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche par coordonnées iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

La recherche par coordonnées fournit un emplacement précis. Vous pouvez saisir des coordonnées précises obtenues, par exemple, à partir d'autres sources telles qu'une carte, un appareil GPS ou des services en ligne, ce qui est particulièrement utile lorsqu'il s'agit de lieux qui n'ont pas d'adresse exacte. Pour plus d'informations, consultez l'article [Recherche par coordonnées](./search-coordinates.md).


## Articles connexes {#related-articles}

- [Recherche d'adresse](./search-address.md)
- [Historique de recherche](./search-history.md)
- [Recherche de POI](./search-poi.md)
- [Recherche par coordonnées](./search-coordinates.md)