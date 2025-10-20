---
source-hash: 677964c6e30a8d9596ffa45395cb1cc593266a07fbfb2b36d1a6384a00432d7d
sidebar_position: 2
title:  Recherche d'adresse
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

## Aperçu {#overview}

*La recherche d'adresse OsmAnd* est basée sur les données OpenStreetMap et vous permet de trouver l'emplacement et les directions vers une adresse spécifique à partir d'une liste déjà triée, ainsi que de rechercher par code postal ou coordonnées. Cet outil vous permet de trouver les adresses requises en quelques appuis, ce qui réduit le temps de recherche et vous aide si vous ne vous souvenez pas de l'adresse exacte.  

OsmAnd offre plusieurs moyens d'accéder à l'*outil de recherche* où se trouve la section **Recherche d'adresse**.

- Le [bouton Recherche](../widgets/map-buttons.md#search) est toujours affiché sur la carte, et un appui dessus vous amènera à l'[écran général de l'outil](#full-text-search), où vous pouvez trouver l'onglet *Adresse*.
- Allez au *Menu principal d'Android → Recherche → onglet Adresse*.
- Lors de la préparation d'un itinéraire, appuyez sur *Navigation → Définir la destination → Champ de recherche*.  


## Recherche plein texte {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

La recherche par adresse simplifie le processus de recherche et de navigation, garantit la précision et la convivialité, et réduit le temps nécessaire pour trouver la bonne adresse.  

- **Pour utiliser la fonction de recherche d'adresse,** vous devez d'abord [télécharger une carte](../start-with/download-maps.md) de la zone requise.
- **La recherche est basée sur les données situées dans la zone visible de la carte** sur l'écran de l'appareil. Si vous ne trouvez rien, OsmAnd propose d'augmenter le rayon de recherche.
- Les informations d'adresse dans OsmAnd contiennent toutes les [clés de balises OSM](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Liste des requêtes de recherche :

**1.** L'**ordre** des éléments dans la liste :

- **Trié par nom**. La sélection de *Spécifier d'abord la ville/bourg/localité* (Android) ou *Sélectionner la ville* (iOS) affichera une liste qui commence par les éléments sans nom, le cas échéant, puis les noms numériques suivis des noms par lettres.
- **Ordre numérique croissant**. Dans la liste de recherche suivante, les numéros de maison sont affichés par ordre croissant, après avoir saisi la ville et la rue.

**2.** Chaque champ de la liste de recherche d'adresse contient des **informations** telles que :

- Une icône qui identifie le type de localité.
- Une partie d'une adresse, un numéro postal ou une zone de coordonnées.
- La distance depuis votre position actuelle ou depuis le centre-ville.
- Des informations supplémentaires, telles que le quartier de la ville.


### Recherche d'adresse aux États-Unis et données TIGER {#us-address-search-and-tiger-data}

OsmAnd prend en charge la recherche d'adresses à l'aide des données OpenStreetMap, mais aux États-Unis, les résultats de la recherche d'adresses peuvent être incomplets en raison de l'utilisation des [données TIGER](https://wiki.openstreetmap.org/wiki/TIGER).  

- **Les données TIGER fournissent des plages d'adresses, pas des emplacements exacts**, ce qui signifie que certains numéros de maison peuvent ne pas être reconnus.
- **Si une adresse n'est pas trouvée**, essayez de rechercher *par nom de rue* au lieu d'un numéro de maison spécifique.
- Utilisez des *identifiants de localisation alternatifs*, tels que des points de repère à proximité ou des codes ZIP, pour affiner vos résultats de recherche.  


### Formats pris en charge {#supported-formats}

Consultez l'article [Rechercher tout](./search-all.md#basic-queries) pour une liste des requêtes disponibles et des formats de recherche pris en charge.


## Sélectionner la ville {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche de ville Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche de ville iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Villes les plus proches**  
    Ceci **affiche une petite liste de villes autour de votre position** ou de la localité que vous avez spécifiée pour *Sélectionner la rue* ou *Sélectionner la ville*. Chaque champ contient une icône correspondant à la taille de la ville, le nom de la ville, la distance entre vous et son centre, et pour Android la direction de la boussole.

Cette méthode de recherche facilite la recherche d'emplacements spécifiques au sein d'une localité sélectionnée, offrant un moyen pratique de trouver des adresses avec précision et rapidité. Vous pouvez commencer à rechercher l'adresse souhaitée en déterminant la localité.

- Pour ce faire, appuyez sur **Spécifier d'abord la ville/bourg/localité** (Android) ou **Sélectionner la ville** (iOS).
- Dans la liste qui s'ouvre, sélectionnez la localité requise. [Ici](#full-text-search) est décrit l'ordre dans lequel les requêtes de recherche sont affichées et quelles informations sont disponibles pour chaque élément.
- Sur l'écran suivant, vous pouvez soit continuer à affiner l'adresse, soit sélectionner le bouton *Afficher sur la carte* sous le champ de saisie de la recherche.
- Pour préciser votre recherche, vous pouvez saisir tout ou partie du nom de la ville, du bourg ou du village où se trouve l'adresse que vous recherchez. Cela vous permet de restreindre votre recherche et d'obtenir une liste plus précise.
- Appuyer sur le dernier élément de l'adresse, le numéro de maison ou le nom de l'intersection, ouvre le [menu contextuel de la carte](../map/map-context-menu.md#select-an-object-single-tap) de l'objet.  

**La recherche par ville offre les avantages suivants :**

- *Commodité*. Permet de sélectionner rapidement la ville requise dans la liste, et de spécifier une certaine rue, maison ou intersection dans la ville sélectionnée sans avoir à saisir l'adresse complète. Cela permet de gagner du temps et de simplifier le processus de recherche du bon endroit.
- *Précision.* Vous pouvez sélectionner une ville et une rue parmi les options disponibles, évitant ainsi les erreurs lors de la saisie manuelle d'une adresse.
- *Filtrage.* La possibilité de sélectionner une maison spécifique dans la liste facilite la navigation précise vers l'emplacement requis, surtout lorsque l'adresse exacte est inconnue.  

:::note Clé & Valeur
*Recherche de ville / bourg / village* par [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Résultat* : affichage de tous les objets portant ce nom.
:::


## Sélectionner la rue {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche de rue Android](@site/static/img/search/street_search.png) ![Recherche de rue Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche de rue iOS](@site/static/img/search/address_street_search_3_ios.png) ![Recherche de rue Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

La recherche de rue est effectuée dans la localité où vous vous trouvez, ou où vous avez cherché auparavant, ou qui se trouve au centre de la carte visible sur l'écran de l'application.

- Pour utiliser ce type de recherche, appuyez sur **Rechercher une rue** (*Android*) ou **Sélectionner une rue** (*iOS*).
- Dans le champ de recherche à côté du nom de la ville, vous pouvez commencer à taper le nom de la rue et la liste s'affinera, vous donnant les résultats les plus appropriés.
- Pour les autres éléments, la recherche de rue est la même que dans [Sélectionner la ville](#select-city).

:::note Clé & Valeur
*Recherche de rues* par [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Résultat* : toutes les rues portant ce nom sont affichées.
:::


## Recherche par code postal {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche par code postal Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche par code postal iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Pour utiliser la *recherche par code postal*, il vous suffit de saisir le numéro**, qui peut même ne comporter qu'un seul chiffre, et l'application propose une liste des codes postaux pertinents disponibles.

- Sélectionnez le code requis et appuyez dessus.
- Vous pouvez utiliser la fonction *Afficher le *numéro de code postal* sur la carte*. Cela ouvre un [menu contextuel de la carte](../map/map-context-menu.md#select-an-object-single-tap) avec le code postal sélectionné sans aucune information supplémentaire sur l'emplacement.
- Vous pouvez affiner votre recherche par ce code en sélectionnant d'abord la rue requise dans la liste, puis le numéro.

**La recherche par code postal peut être utile dans les cas suivants :**

- *Trouver des adresses*. Lorsque vous entrez un code postal, OsmAnd identifie la zone correspondante et suggère des adresses dans cette zone. Ceci est particulièrement utile si vous connaissez le code postal mais ne connaissez pas l'adresse exacte.
- *Précision de la navigation*. Dans les cas où l'adresse n'est pas certaine, ou lorsque le nom de la rue peut être répété dans différentes zones, l'utilisation d'un code postal peut fournir le meilleur itinéraire vers une adresse donnée.
- *Commodité et rapidité*. La recherche par code postal vous permet de trouver rapidement des informations, surtout si vous connaissez le code postal mais n'êtes pas sûr de l'adresse. Au lieu de saisir l'adresse complète, vous pouvez simplement saisir le code et obtenir des résultats pertinents.  

:::note
Pour plus d'informations, lisez les **[données sur les codes postaux du Royaume-Uni](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Recherche par coordonnées {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche par coordonnées Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche par coordonnées iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**La recherche par coordonnées**](../search/search-coordinates.md) vous permet de spécifier des coordonnées géographiques, telles que la latitude et la longitude, pour trouver un emplacement spécifique. Elle fournit des emplacements précis sur une carte dans différents [formats de coordonnées](../search/search-coordinates.md#coordinate-format) et vous permet d'obtenir des informations connexes. Cette fonction peut être utile lorsque vous n'avez pas d'adresse ou de nom exact d'un lieu, et peut faciliter la planification de voyages et la navigation dans des lieux inconnus.  


## Articles connexes {#related-articles}

- [Rechercher tout](./search-all.md)
- [Historique de recherche](./search-history.md)
- [Rechercher des POI](./search-poi.md)
- [Recherche par coordonnées](./search-coordinates.md)