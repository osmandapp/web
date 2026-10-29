---
source-hash: 10cbeafd902c636e09520ab4df9f764d8c01529060c7ee38d4e0bf4ae741b6a2
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
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<!--
<InfoIncompleteArticle/>
-->

## Vue d'ensemble {#overview}

**Recherche** est un outil utile pour trouver rapidement des lieux. Vous pouvez utiliser la Recherche pour trouver un lieu par adresse, coordonnées, points d'intérêt (POI) ou recherches précédentes. La recherche [Adresse](#search-address) vous permet de saisir l'adresse souhaitée pour obtenir un emplacement exact. La recherche par [Coordonnées](#search-coordinates) fonctionne avec des coordonnées géographiques telles que la latitude et la longitude. Avec la recherche de [POI](#search-poi), vous pouvez rechercher des lieux à proximité dans des catégories spécifiques, comme les cafés, les hôtels ou les stations-service. L'onglet [Explorer](#search-explore) met en évidence les lieux populaires à proximité et fournit un accès rapide aux emplacements récemment visités. La fonction de recherche facilite la planification de voyages, la navigation en terrain inconnu et la recherche de POI à proximité.


## Comment utiliser {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Liste de recherche de POI Android](@site/static/img/search/search_online_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Liste de recherche de POI iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Vous devez suivre l'une des étapes pour commencer votre recherche :

- Appuyez sur le [bouton Recherche](../widgets/map-buttons.md#search) sur l'écran de l'application de carte et saisissez votre requête.

- Allez dans le menu principal *Menu → Recherche → saisissez votre requête de recherche*.

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
- Recherche par articles du guide de voyage (nécessite le téléchargement du fichier correspondant des guides de voyage).
- Recherche par Favoris et Points de cheminement.
- Recherche d'icônes par noms de sous-catégories de POI.
- Recherche par traces.
- Recherche par lieux d'affaires et noms de marques.
- Recherche en ligne (Nominatim).
- Recherche par URL (Google et OsmAnd). OsmAnd peut reconnaître de nombreux liens Google Maps partagés, y compris les liens courts de `maps.app.goo.gl`.
- Historique de recherche.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Tri des résultats de recherche {#sorting-search-results}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Liste de recherche de POI Android](@site/static/img/search/search_sort_by.webp)

OsmAnd trie automatiquement les résultats de recherche selon plusieurs critères :

1. **Correspondance des requêtes** — Les résultats contenant des correspondances exactes ou partielles avec les mots que vous avez saisis sont affichés plus haut.

2. **Pertinence** — Les objets dont les noms correspondent étroitement à la requête de recherche sont généralement affichés plus haut dans les résultats.

3. **Type d'objet** — Selon la requête, les résultats peuvent inclure différents types d'objets tels que les villes, les rues, les adresses ou les POI.

4. **Distance** — Lorsque les résultats ont des critères de correspondance et des types d'objets similaires, les résultats les plus proches de l'emplacement actuel de l'utilisateur sont affichés en premier.

5. **Importance** — Les landmarks bien connus ou les lieux fréquemment référencés peuvent apparaître plus haut dans les résultats lorsqu'ils correspondent étroitement à la requête de recherche.

Vous pouvez également modifier manuellement l'ordre de tri des résultats de recherche à l'aide de la puce de tri en haut de la liste des résultats de recherche. La puce affiche l'option sélectionnée. Appuyez dessus et choisissez l'une des options suivantes dans le menu *Trier par* :
- **Pertinence** — Trie les résultats de recherche par pertinence par rapport à la requête de recherche.
- **Le plus proche** — Trie les résultats de recherche par distance, en affichant d'abord les résultats les plus proches.

</TabItem>

<TabItem value="ios" label="iOS">

OsmAnd trie automatiquement les résultats de recherche selon plusieurs critères :

1. **Correspondance des requêtes** — Les résultats contenant des correspondances exactes ou partielles avec les mots que vous avez saisis sont affichés plus haut.

2. **Pertinence** — Les objets dont les noms correspondent étroitement à la requête de recherche sont généralement affichés plus haut dans les résultats.

3. **Type d'objet** — Selon la requête, les résultats peuvent inclure différents types d'objets tels que les villes, les rues, les adresses ou les POI.

4. **Distance** — Lorsque les résultats ont des critères de correspondance et des types d'objets similaires, les résultats les plus proches de l'emplacement actuel de l'utilisateur sont affichés en premier.

5. **Importance** — Les landmarks bien connus ou les lieux fréquemment référencés peuvent apparaître plus haut dans les résultats lorsqu'ils correspondent étroitement à la requête de recherche.

***Par exemple***, une requête de recherche *bureau de poste* affichera d'abord les bureaux de poste les plus proches, même s'il existe d'autres éléments avec des noms similaires à une plus grande distance.  

***Limitations actuelles :***

- Il n'y a pas de réglage manuel pour changer l'ordre de tri des résultats de recherche.
- Le processus de tri est **géré automatiquement** par OsmAnd, sur la base des critères énumérés ci-dessus.
- Dans les cas où les résultats de recherche sont trop larges, OsmAnd peut **limiter les résultats affichés** à ceux ayant la plus grande précision de correspondance de mots.

</TabItem>

</Tabs>


### Recherche en texte intégral {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche de favoris Android](@site/static/img/search/favorite_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche de favoris iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Vous pouvez trouver l'emplacement requis sur la carte à partir de la liste de points qui apparaît au fur et à mesure que vous saisissez une requête.

1. Commencez à taper le nom ou l'adresse dans la barre de recherche.

2. Au fur et à mesure que vous tapez, la liste affiche les résultats correspondant à votre requête. Les résultats sont triés comme décrit dans la section [Tri des résultats de recherche](#sorting-search-results).

3. Lors d'une recherche par nom sur Android, OsmAnd affiche des puces de type POI en fonction des types représentés dans les résultats de recherche. Appuyez sur une puce pour filtrer les résultats par le type de POI sélectionné. Vous pouvez sélectionner plusieurs types de POI. Une fois sélectionnée, une puce passe en première position dans la liste. Appuyez à nouveau sur une puce sélectionnée pour la désélectionner et revenir aux résultats de recherche complets.

4. Si vous saisissez un [nom de marque](../search/search-poi.md#how-to-use), la liste commencera par les résultats portant ce nom, triés par distance la plus proche.

5. Les résultats de recherche peuvent également inclure un [article du guide de voyage](../plan-route/travel-guides.md#travel-article). Appuyer dessus ouvre directement l'article, plutôt que d'afficher un emplacement sur la carte.

:::note Limitations des données TIGER dans la recherche d'adresses
OsmAnd a intégré les [**données TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) dans les cartes des États-Unis pour fournir des informations sur les adresses américaines. L'ensemble de données TIGER est **basé sur des plages** et ne contient pas de numéros de maison précis, de sorte que certaines adresses peuvent être manquantes ou inexactes.
:::

### Recherche spatiale {#spatial-search}

<InfoAndroidOnly/>

![Recherche spatiale](@site/static/img/search/spatial_search.webp)

La recherche spatiale est un moteur de recherche expérimental qui prend en compte la position relative des objets les uns par rapport aux autres, et pas seulement la correspondance de leurs noms avec votre requête. Elle aide OsmAnd à interpréter correctement les requêtes combinant plusieurs parties, comme un nom de lieu et une catégorie de POI.

La recherche spatiale est désactivée par défaut. Pour l'activer, allez dans les paramètres du plug-in [Développement OsmAnd](../plugins/development.md#internal-algorithms) et activez *Utiliser la recherche textuelle spatiale*. Une fois activée, la recherche spatiale remplace le moteur de recherche standard pour les requêtes POI et adresse.

Avec la recherche spatiale, vous pouvez :
- Rechercher un POI dans un lieu spécifique. Saisissez une catégorie et un nom de lieu dans une seule requête, par exemple, Hôtel Berlin. Le nom du lieu est utilisé comme zone de recherche, et la catégorie est recherchée à l'intérieur.
- Rechercher des lieux correspondant à deux conditions. Saisissez deux catégories ou une catégorie et une propriété, par exemple, Carburant Diesel ou Café Vegan, pour trouver des lieux correspondant aux deux. Une requête telle que Carburant McDonald's trouve les stations-service situées près d'un McDonald's. L'ordre des mots est important. Le premier mot définit ce que vous recherchez, et le second définit ce qui doit être à proximité. Par exemple, McDonald’s Carburant trouve les restaurants McDonald’s situés près de stations-service.
- Rechercher autour d'un lieu trouvé. Saisissez une catégorie et un nom de lieu, par exemple, *Hôtel Berlin*, puis appuyez sur *Hôtel près de Berlin* en haut des résultats de recherche. Le nom de ce lieu est ajouté à la puce [Rechercher à proximité](#search-around).
- Utiliser différents formats de noms de rue et des noms de catégories traduits dans vos requêtes.
- Obtenir des résultats plus rapides lors de la recherche par catégories de POI populaires, comme pharmacie, parking ou restaurant.

### Recherche à proximité {#search-around}

<InfoAndroidOnly/>

![Recherche à proximité](@site/static/img/search/search_around_berlin.webp)

Lorsque le centre de la carte est à plus de 50 m de votre emplacement et que la carte ne suit pas votre position, la recherche s'effectue autour du centre de la carte, et le champ de recherche affiche *Rechercher à N km*. Lorsque le centre de la carte est à plus de 70 km de votre emplacement, une puce avec la zone de recherche apparaît à côté de la puce de tri. La puce affiche l'option sélectionnée. Appuyez dessus et choisissez l'une des options suivantes dans le menu *Rechercher à proximité* :
- **Centre de la carte** — Recherche autour du centre actuel de la carte. Cette option est sélectionnée par défaut.
- **Mon emplacement** — Recherche autour de votre emplacement actuel.
- **Nom du lieu** — Recherche autour d'un lieu trouvé avec la [Recherche spatiale](#spatial-search). Par exemple, saisissez *Hôtel Berlin*, puis appuyez sur *Hôtel près de Berlin* en haut des résultats de recherche. *Berlin* apparaît sur la puce, et les hôtels autour de Berlin sont affichés. Cette option n'est disponible que lorsque la recherche spatiale est activée. 

### Recherche sur la carte {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche de POI Android](@site/static/img/search/poi_overlay_android_new.png) ![Recherche de POI Android](@site/static/img/search/poi_overlay_android_new.webp)

</TabItem>

<TabItem value="ios" label="iOS">  

![Recherche de POI iOS](@site/static/img/search/poi_overlay_ios_new.png) ![Recherche de POI iOS](@site/static/img/search/poi_overlay_ios_new.webp)

</TabItem>

</Tabs>

OsmAnd vous permet de rechercher des points affichés sur une carte sur l'écran de votre appareil. Pour ce faire :

- Utilisez [l'une des méthodes](#how-to-use) pour accéder à l'outil de recherche.
- Commencez à taper le nom ou l'adresse dans le champ de recherche.
- Une boîte avec le bouton *Afficher sur la carte* apparaîtra sous le champ de saisie de la recherche. Sur Android, le bouton d'action flottant (FAB) *Afficher sur la carte* apparaît en bas de l'écran des résultats de recherche.
- Appuyez sur ce bouton pour accéder à la carte.
- Vous pouvez continuer à taper votre requête en haut de l'écran.


### Recherche à proximité {#search-nearby}

![Recherche Android](@site/static/img/search/search_all_near_location_andr_new.png)

Vous pouvez utiliser la recherche à proximité d'un emplacement spécifique. Pour ce faire, sélectionnez le point requis [dans la liste du menu de recherche](#full-text-search) ou sélectionnez-le directement sur la carte. Dans le [menu contextuel de la carte](../map/map-context-menu.md#actions), sélectionnez *Actions → Rechercher à proximité*.


## Recherche d'adresse {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche Android](@site/static/img/search/search_address_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

La **Recherche d'adresse** utilise les données d'OpenStreetMap. Ce type de recherche vous permet de trouver l'emplacement et la direction d'une adresse spécifique à partir d'une liste déjà triée. Pour en savoir plus, consultez l'article [Recherche d'adresse](./search-address.md).


## Recherche Explorer {#search-explore}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche Explorer](@site/static/img/search/explore_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche Historique](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Sur Android, l'onglet **Explorer** dans l'outil de Recherche vous aide à découvrir rapidement des lieux près de votre emplacement actuel et à accéder à votre historique. Sur iOS, l'onglet **Historique** vous permet de rechercher à nouveau des lieux, des adresses ou des endroits fréquemment visités précédemment trouvés sans avoir à saisir à nouveau la requête. Pour plus d'informations, consultez l'article [Recherche Explorer](./search-history.md).


## Recherche de POI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche de POI Android](@site/static/img/search/search_poi_categoties_andr_new.png)

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
- [Recherche Explorer](./search-history.md)
- [Recherche de POI](./search-poi.md)
- [Recherche par coordonnées](./search-coordinates.md)
- [Lieux populaires](../map/popular_places.md)