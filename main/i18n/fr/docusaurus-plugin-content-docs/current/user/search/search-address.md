---
source-hash: cc7b11b19f0261ab3f9cc12de149c6d268cdaa50b3a828cc60f5dd3ebe0ce868
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

## Aperçu {#overview}

*La recherche d'adresse OsmAnd* est basée sur les données OpenStreetMap et vous permet de trouver l'emplacement et les directions vers une adresse spécifique à partir d'une liste déjà triée, ainsi que de rechercher par code postal ou coordonnées. Cet outil vous permet de trouver les adresses requises en quelques appuis, ce qui réduit le temps de recherche et vous aide si vous ne vous souvenez pas de l'adresse exacte.

La recherche d'adresse fonctionne hors ligne en utilisant les cartes téléchargées. Assurez-vous que la carte de la région dans laquelle vous effectuez la recherche est installée. Les résultats dépendent des données d'adresse disponibles dans OpenStreetMap.

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

<!--
Search by Address simplifies the search and navigation process, ensures accuracy and usability, and reduces the time it takes to find the right address.  

- **To use the Search Address function,** you have to [download a map](../start-with/download-maps.md) of the required area first.
- **The search is based on the data located in the visible area of the map** on the device screen. If you do not find anything, OsmAnd offers to increase the search radius.
- The address information in OsmAnd contains all [OSM tag keys](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Search query list:

**1.** The **order** of items in the list:

- **Ordered by name**. Selecting *First specify city/town/locality* (Android) or *Select city* (iOS) will display a list that starts with unnamed items, if any, then numeric names followed by the names by letters.
- **Ascending numerical order**. In the next search list, the house numbers are displayed in ascending order, after entering the city and street.

**2.** Each field in the Address Search list contains **information** such as:

- An icon that identifies the type of locality.
- Part of an address, postal number, or coordinate area.
- Distance from your current location or from the city center.
- Additional information, such as the city's district.
-->
OsmAnd prend en charge la recherche d'adresse en texte intégral. Cela signifie que vous pouvez saisir une adresse directement dans le champ de recherche au lieu de sélectionner ville → rue → numéro de maison étape par étape. Le moteur de recherche essaie de reconnaître les composants d'adresse tels que :
- ville ;
- rue ;
- numéro de maison ;
- code postal ;
- nom de lieu.

Vous n'avez pas besoin de les saisir dans un ordre strict. **Exemples de requêtes** :

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

Si l'adresse complète n'est pas trouvée, OsmAnd essaie automatiquement des requêtes simplifiées (par exemple en supprimant les mots supplémentaires) pour améliorer les chances de trouver l'emplacement.

**NOTE :** La recherche d'adresse ne fonctionne que dans les cartes téléchargées. Les résultats de recherche sont basés sur :
- les cartes installées sur votre appareil ;
- la zone visible de la carte ;
- votre position actuelle. 

Si rien n'est trouvé, OsmAnd peut suggérer d'augmenter le rayon de recherche.

### Recherche d'adresse aux États-Unis et données TIGER {#us-address-search-and-tiger-data}

OsmAnd prend en charge la recherche d'adresses à l'aide des données OpenStreetMap, mais aux États-Unis, les résultats de la recherche d'adresses peuvent être incomplets en raison de l'utilisation des [données TIGER](https://wiki.openstreetmap.org/wiki/TIGER).  

- **Les données TIGER fournissent des plages d'adresses, pas des emplacements exacts**, ce qui signifie que certains numéros de maison peuvent ne pas être reconnus.
- **Si une adresse n'est pas trouvée**, essayez de rechercher *par nom de rue* au lieu d'un numéro de maison spécifique.
- Utilisez des *identifiants de localisation alternatifs*, tels que des points de repère à proximité ou des codes ZIP, pour affiner vos résultats de recherche.  

### Formats pris en charge {#supported-formats}

OsmAnd prend en charge plusieurs formats d'adresse courants. Vous pouvez saisir les adresses dans différents ordres en fonction de la manière dont vous connaissez l'adresse.

| Format d'adresse | Exemples de requêtes |
|---|---|
| Numéro de maison + rue | 221B Baker Street<br />10 Downing Street |
| Rue + numéro de maison | Baker Street 221B<br />Main Street 101 |
| Ville + rue + numéro de maison | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| Intersections de rues | Broadway & Wall Street<br />Main Street and High Street |
| Nom de ville | Berlin<br />Vienne<br />San Francisco |
| Code postal + adresse | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### Astuces de recherche {#search-tips}

La recherche d'adresse dans OsmAnd est tolérante aux différents formats de saisie. Vous pouvez essayer :
- de changer l'ordre des mots ;
- de supprimer les informations supplémentaires ;
- de rechercher uniquement par nom de rue.

Le moteur de recherche tolère également les variations courantes dans le formatage des adresses, telles que différents ordres de mots, différences d'orthographe, abréviations ou formats de numéros de maison. Le tableau ci-dessous montre des variations de recherche typiques qui peuvent encore renvoyer la même adresse.

| Variation de recherche | Exemples de requêtes | Discussion associée |
|---|---|---|
| Variations de nom de rue | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [Discussion](https://github.com/osmandapp/OsmAnd/issues/23709) |
| Ignorer les espaces dans les noms | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [Discussion](https://github.com/osmandapp/OsmAnd/issues/13783) |
| Numéros de maison avec suffixes de lettre | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [Discussion](https://github.com/osmandapp/OsmAnd/issues/23320) |
| Abréviations de rue | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [Discussion](https://github.com/osmandapp/OsmAnd/issues/4923) |
| Adresse complète vs adresse simplifiée | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [Discussion](https://github.com/osmandapp/OsmAnd/issues/19004) |
| Format d'adresse américain | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [Discussion](https://github.com/osmandapp/OsmAnd/issues/6824) |
| Abréviations d'État américain | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [Discussion](https://github.com/osmandapp/OsmAnd/issues/6824) |

<!--
**Examples**: Instead of `221B Baker Street London United Kingdom` try `221B Baker Street` or `Baker Street 221B`.

OsmAnd may also ignore additional information such as country or region if the address can already be identified.

Postal addresses copied from websites may include additional information such as company names, ZIP codes, or apartment numbers. If search does not return results, try entering only the street name, house number, and city.

Search is also tolerant to minor differences in spelling, such as spaces, hyphens, or common abbreviations in street names. **For example**:

`Weberstrasse`  
`Weber strasse`  
`Weber-strasse`

House numbers with letter suffixes can also be written in different formats:

`30B`  
`30b`  
`30-B`  
`30-b`

These variations may still return the same address.
-->


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

<!--
**Searching by city offers the following benefits:**

- *Convenience*. Allows you to quickly select the required city from the list, and specify a certain street, house or intersection in the selected city without having to enter the full address. This saves time and simplifies the process of finding the right place.
- *Precision.* You can select a city and street from the available options, avoiding errors when manually entering an address.
- *Filtering.* The ability to select a specific house from the list makes it easier to accurately navigate to the required location, especially when the exact address is unknown.
--> 

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

- Le nom de la rue existe dans plusieurs villes.
- Vous connaissez le code postal mais pas l'adresse exacte.

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