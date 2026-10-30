---
source-hash: e36caad58f36cfd88f8d8bd575e69fdf2d3e8f63a1d4a934dba6e473f1b95388
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

OsmAnd trie automatiquement les résultats de recherche, de sorte que les résultats proches et plus pertinents apparaissent en haut de la liste. Sur Android, vous pouvez modifier l'ordre avec la puce de tri en haut de la liste des résultats. La puce affiche l'option sélectionnée. Appuyez dessus et choisissez l'une des options suivantes dans le menu *Trier par* :
- *Pertinence* — Trie les résultats en fonction de leur correspondance avec votre requête.
- *Le plus proche* — Trie les résultats par distance, les résultats les plus proches étant affichés en premier.

Également sur Android, des puces avec des types d'objets, tels que *Ville*, *Bourg*, *Rue* ou *Code postal*, apparaissent au-dessus des résultats. Appuyez sur une puce pour afficher uniquement les résultats de ce type. Pour en savoir plus, consultez [Trier les résultats de recherche](./search-all.md#sorting-search-results).

Sur Android, lorsque le centre de la carte est à plus de 50 m de votre position et que la carte ne suit pas votre position, la recherche s'effectue autour du centre de la carte, et le champ de recherche affiche *Rechercher à N km*. Lorsque le centre de la carte est à plus de 70 km de votre position, une puce avec la zone de recherche, *Centre de la carte* ou *Ma position*, apparaît à côté de la puce de tri. Appuyez dessus pour choisir où effectuer la recherche. Pour en savoir plus, consultez [Rechercher autour](./search-all.md#search-around).

OsmAnd offre plusieurs moyens d'accéder à l'*outil de recherche* où se trouve la section **Recherche d'adresse**.

- Le [bouton Recherche](../widgets/map-buttons.md#search) est toujours affiché sur la carte, et un appui dessus vous amènera à l'[écran général de l'outil](#full-text-search), où vous pouvez trouver l'onglet *Adresse*.
- Allez au *Menu principal d'Android → Recherche → onglet Adresse*.
- Lors de la préparation d'un itinéraire, appuyez sur *Navigation → Définir la destination → Champ de recherche*.  


## Onglet Adresse {#address-tab}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche Android](@site/static/img/search/search_address_2_andr.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche iOS](@site/static/img/search/street_search_ios.webp)  

</TabItem>

</Tabs>

L'onglet *Adresse* contient des boutons pour différentes façons de rechercher par adresse. Chaque bouton ouvre une liste d'options suggérées parmi lesquelles choisir :

- [**Rechercher une rue dans &lt;ville&gt;**](#select-street) (*Android*) / **Sélectionner une rue dans &lt;ville&gt;** (*iOS*) — Apparaît si vous avez déjà recherché une ville. La dernière ville recherchée est déjà définie, il vous suffit donc de saisir le nom de la rue et de la choisir parmi les rues suggérées.
- [**Spécifier d'abord la ville/bourg/localité**](#select-city) (*Android*) / **Sélectionner la ville** (*iOS*) — Toujours disponible. Ouvre immédiatement une liste de villes, bourgs et villages, triés par nom. La liste se réduit au fur et à mesure que vous saisissez du texte.
- [**Recherche par code postal**](#postcode-search) — Toujours disponible. Bascule le champ de recherche vers la saisie du code postal. La liste reste vide jusqu'à ce que vous saisissiez au moins un caractère, puis les résultats correspondants apparaissent.
- [**Recherche par coordonnées**](#coordinates-search) — Toujours disponible. Ouvre l'écran de saisie des coordonnées.

La liste **Villes les plus proches** s'affiche sous les boutons et montre jusqu'à 15 villes et bourgs autour de l'emplacement de recherche, votre position ou le centre de la carte. Chaque élément affiche le nom, son type, *Ville* ou *Bourg*, ainsi que la distance et la direction depuis l'emplacement de recherche. Sur Android, la région est également indiquée.

## Recherche plein texte {#full-text-search}

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

Lorsque une requête peut faire référence à la fois à une adresse et à un POI, OsmAnd priorise automatiquement l'interprétation la plus pertinente en fonction du contexte, de la distance et de l'importance de l'objet.

**NOTE :** La recherche d'adresse ne fonctionne que dans les cartes téléchargées. Les résultats de recherche sont basés sur :
- les cartes installées sur votre appareil ;
- [la zone visible de la carte](./search-all.md#how-to-use) ;
- votre position actuelle. 

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
| Double numéro de maison + rue | 243/11 Husova |
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

Cependant, les requêtes très courtes ou générales (par exemple, « Apple ») peuvent renvoyer un mélange d'adresses et de POI, y compris une marque, un nom de rue ou une localité portant le même nom. Pour améliorer la précision, essayez d'ajouter plus de détails tels que le nom de la ville, la rue ou le nom du POI.

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


## Sélectionner la ville {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche de ville Android](@site/static/img/search/town_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche de ville iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

Cette méthode de recherche facilite la recherche d'emplacements spécifiques au sein d'une localité sélectionnée, offrant un moyen pratique de trouver des adresses avec précision et rapidité. Vous pouvez commencer à rechercher l'adresse souhaitée en déterminant la localité.

- Pour ce faire, appuyez sur **Spécifier d'abord la ville/bourg/localité** (Android) ou **Sélectionner la ville** (iOS).
- Dans la liste qui s'ouvre, sélectionnez la localité requise. [Ici](#full-text-search) est décrit l'ordre dans lequel les requêtes de recherche sont affichées et quelles informations sont disponibles pour chaque élément.
- Sur Android, appuyez sur la puce de tri pour choisir *Pertinence* ou *Le plus proche*. Lorsque le centre de la carte est à plus de 70 km de votre position, utilisez la puce de zone de recherche pour choisir entre *Centre de la carte* et *Ma position*. Des puces avec les types de localités trouvés dans les résultats, tels que *Ville*, *Bourg* ou *Village*, apparaissent au-dessus de la liste. Appuyez sur une puce pour afficher uniquement les résultats de ce type.
- Sur l'écran suivant, vous pouvez soit continuer à affiner l'adresse, soit afficher la localité sur la carte. Sur iOS, appuyez sur *Afficher sur la carte* sous le champ de saisie de la recherche. Sur Android, appuyez sur le bouton *Afficher sur la carte*, le bouton flottant en bas à droite.
- Pour préciser votre recherche, vous pouvez saisir tout ou partie du nom de la ville, du bourg ou du village où se trouve l'adresse que vous recherchez. Cela vous permet de restreindre votre recherche et d'obtenir une liste plus précise.
- Appuyer sur le dernier élément de l'adresse, le numéro de maison ou le nom de l'intersection, ouvre le [menu contextuel de la carte](../map/map-context-menu.md#select-an-object-single-tap) de l'objet.  

:::note Clé & Valeur
*Recherche de ville / bourg / village* par [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Résultat* : affichage de tous les objets portant ce nom.
:::


## Sélectionner la rue {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche de rue Android](@site/static/img/search/street_search.webp) ![Recherche de rue Android](@site/static/img/search/street_search_1.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche de rue iOS](@site/static/img/search/address_street_search_3_ios.png) ![Recherche de rue Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

La recherche de rue est effectuée dans la dernière ville que vous avez recherchée. Son nom est affiché sur le bouton, vous pouvez donc commencer directement par la rue.

- Pour utiliser ce type de recherche, appuyez sur **Rechercher une rue dans &lt;ville&gt;** (*Android*) ou **Sélectionner une rue dans &lt;ville&gt;** (*iOS*).
- Le nom de la ville est déjà saisi dans le champ de recherche, et la liste de ses rues s'ouvre immédiatement. Dans le champ de recherche à côté du nom de la ville, vous pouvez commencer à saisir le nom de la rue et la liste s'affinera, vous donnant les résultats les plus appropriés.
- Sur Android, appuyez sur la puce de tri pour choisir *Pertinence* ou *Le plus proche*. Lorsque le centre de la carte est à plus de 70 km de votre position, utilisez la puce de zone de recherche pour choisir entre *Centre de la carte* et *Ma position*. Des puces avec les types d'objets trouvés dans les résultats, tels que *Rue* ou *Bâtiment*, apparaissent au-dessus de la liste. Appuyez sur une puce pour afficher uniquement les résultats de ce type.
- Sélectionnez une rue pour ouvrir la liste de ses bâtiments. Sélectionnez le numéro de maison requis pour ouvrir le [menu contextuel de la carte](../map/map-context-menu.md#select-an-object-single-tap) de l'adresse.
- Pour les autres éléments, la recherche de rue est la même que dans [Sélectionner la ville](#select-city).

:::note Clé & Valeur
*Recherche de rues* par [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Résultat* : toutes les rues portant ce nom sont affichées.
:::


## Recherche par code postal {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche par code postal Android](@site/static/img/search/postcode_android.webp)

Appuyez sur **Recherche par code postal** dans l'onglet *Adresse*. La liste reste vide jusqu'à ce que vous commenciez à saisir du texte. Saisissez le code postal, même un seul chiffre, et l'application propose une liste des codes postaux correspondants.

- Appuyez sur la puce de tri pour choisir *Pertinence* ou *Le plus proche*. Lorsque le centre de la carte est à plus de 70 km de votre position, utilisez la puce de zone de recherche pour choisir entre *Centre de la carte* et *Ma position*. Appuyez sur la puce *Code postal* pour afficher uniquement les codes postaux dans la liste.
- Sélectionnez le code postal requis. La liste des rues avec ce code postal s'ouvre, et le code postal reste dans le champ de recherche.
- Pour affiner l'adresse, sélectionnez une rue puis le numéro de maison. Cela ouvre le [menu contextuel de la carte](../map/map-context-menu.md#select-an-object-single-tap) de l'adresse.
- Pour voir le code postal lui-même sur la carte, appuyez sur le bouton *Afficher sur la carte*, le bouton flottant en bas à droite. La carte s'ouvre avec le [menu contextuel](../map/map-context-menu.md#select-an-object-single-tap) du code postal.

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche par code postal iOS](@site/static/img/search/postcode_ios.png)

**Pour utiliser la *recherche par code postal*, il vous suffit de saisir le numéro**, qui peut même ne comporter qu'un seul chiffre, et l'application propose une liste des codes postaux pertinents disponibles.

- Sélectionnez le code requis et appuyez dessus.
- Vous pouvez utiliser la fonction *Afficher le *numéro de code postal* sur la carte*. Cela ouvre un [menu contextuel de la carte](../map/map-context-menu.md#select-an-object-single-tap) avec le code postal sélectionné sans aucune information supplémentaire sur l'emplacement.
- Vous pouvez affiner votre recherche par ce code en sélectionnant d'abord la rue requise dans la liste, puis le numéro.

</TabItem>

</Tabs>

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
- [Explorer la recherche](./search-history.md)
- [Rechercher des POI](./search-poi.md)
- [Recherche par coordonnées](./search-coordinates.md)