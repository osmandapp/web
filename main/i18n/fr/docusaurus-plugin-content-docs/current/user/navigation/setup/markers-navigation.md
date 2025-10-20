---
source-hash: 18d9873a363946b476ae9c98d895b7afc2dcac45571f524bfe437e0a7bba8153
sidebar_position: 3
title:  Naviguer par marqueurs
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

## Aperçu {#overview}

Les [marqueurs de carte](../../personal/markers.md) sont des points sur la carte marqués par des drapeaux. Ils peuvent être utilisés à diverses fins, comme pour indiquer un lieu que vous souhaitez visiter, un point d'intérêt que vous voulez mémoriser, ou pour créer un itinéraire personnalisé.

Ils peuvent être particulièrement utiles pour les randonneurs, les cyclistes, ou toute personne explorant une nouvelle région qui souhaite marquer des lieux intéressants ou des points de référence sur la carte. La principale différence avec les [points favoris](../../personal/favorites.md) est que les marqueurs sont plus rapides à créer car ils ne nécessitent pas de nom.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marqueur de navigation Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Marqueur de navigation iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Utiliser les marqueurs dans la navigation {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![Différence navigation par marqueur Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Différence navigation par marqueur Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Différence navigation par marqueur iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Différence navigation par marqueur iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

Les *marqueurs de carte* peuvent servir de [destinations](./route-navigation#set-destinations) lors de la construction d'un itinéraire. Ils sont particulièrement pratiques lorsque vous devez définir un itinéraire avec des points intermédiaires.

Cependant, les *marqueurs de carte* offrent également diverses fonctionnalités telles que des [widgets](../../widgets/markers.md), la direction des mouvements, des lignes sur la carte, de sorte que vous pouvez utiliser ces outils pour la navigation sans construire une ligne d'itinéraire et sans entrer dans une navigation complète avec guidage vocal.

Si vous avez besoin d'une navigation simple de point à point affichée sous forme de lignes droites, vous pouvez construire et trier une ***Liste d'itinéraire*** composée de marqueurs comme points intermédiaires et utiliser des widgets pour une navigation simple.


### Recommandations {#recommendations}

Voici des étapes simples recommandées pour *Naviguer par marqueurs* :

1. Créez des marqueurs. Trouvez le ou les objets souhaités sur la carte, appuyez dessus et choisissez le *[bouton Marqueur](../../personal/markers.md#add--edit-markers)* dans le *[menu contextuel de la carte](../../map/map-context-menu.md#add--edit-marker)*. Vous pouvez également créer des marqueurs à partir de [favoris](#add-group-of-favorite) ou de [traces GPX](#add-group-of-track-waypoints).
2. [*Triez les marqueurs*](#sort-markers) dans l'ordre de passage que vous préférez.
3. Personnalisez la *vue des marqueurs de carte* si vous souhaitez utiliser les marqueurs sans démarrer la navigation. Activez les options **Flèches sur la carte** et **Ligne de direction** dans la section *[Apparence](../../personal/markers.md#appearance-on-the-map)* du *[menu des marqueurs de carte](../../personal/markers.md#actions)*.
4. Ajoutez des *[widgets de marqueurs](../../personal/markers.md#markers)* dans le *[menu Configurer l'écran](../../widgets/configure-screen.md)* (facultatif).
5. [*Marquez comme passés*](#pass-markers) les marqueurs déjà visités ou restaurez-les depuis l'historique si vous souhaitez les passer à nouveau.

:::note
Lorsque les options **Flèches sur la carte** et **Ligne de direction** sont activées dans la section *Apparence* du [menu des marqueurs de carte](../../personal/markers.md#appearance-on-the-map), vous verrez une flèche ou une ligne en pointillés sur la carte. La flèche indique la direction du marqueur actif lorsqu'il est en dehors de l'écran de carte actuel. La ligne de direction est dessinée lorsque votre géolocalisation et le marqueur sont tous deux sur le même écran.  
:::


## Liste d'itinéraire {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Liste de marqueurs Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Liste de marqueurs iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


La liste d'itinéraire représente une liste ordonnée de marqueurs *franchissables* qui sont visibles sur la carte. Vous pouvez ajouter et supprimer des points un par un ou le faire en lot en utilisant un [fichier GPX](#add-group-of-track-waypoints) préparé à l'avance ou un [groupe de favoris](#add-group-of-favorite). Pour des compétitions locales ou des aventures, il peut être utile de créer une liste de points à partir de coordonnées en utilisant l'[outil de saisie de coordonnées](../../plan-route/coordinate-input.md).


### Ajouter des marqueurs uniques {#add-single-markers}

Les *marqueurs* peuvent être ajoutés ou supprimés de la carte par un simple appui sur l'écran à l'emplacement souhaité. Vous devez ensuite suivre les instructions de l'article sur le *[menu contextuel de la carte](../../map/map-context-menu.md#add--edit-marker)*.  


### Ajouter un groupe de favoris {#add-group-of-favorite}

<InfoAndroidOnly />

![Favoris vers marqueurs 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favoris vers marqueurs 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Vous pouvez créer des *marqueurs de carte* à partir de *[Favoris](../../personal/favorites.md)* en utilisant :

- Le *[menu des groupes de favoris](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→My Favorites)*.
- L'icône &#128681; dans le menu de la page des favoris *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→My Favorites→&#128681;)*.
- L'option **'+'** (ajouter) dans l'*[onglet Groupes](../../personal/markers.md#marker-groups)* du menu des marqueurs de carte *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.  


### Ajouter un groupe de points de cheminement de trace {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX vers marqueurs 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Les traces GPX avec des points de cheminement peuvent être utilisées comme *marqueurs de carte* et rapidement désactivées :

- Utilisez l'option **'+'** (ajouter) dans l'*[onglet Groupes](../../personal/markers.md#marker-groups)* du menu des marqueurs de carte *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Activez l'interrupteur près de la trace dans l'*[onglet Groupes](../../personal/markers.md#marker-groups)* du menu des marqueurs de carte *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Seules les traces avec des points de cheminement peuvent être ajoutées à la *liste des marqueurs de carte*. La trace que vous avez l'intention d'ajouter doit également être visible (active) sur la carte.
:::

![GPX vers marqueurs 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX vers marqueurs 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Vous pouvez également créer des *marqueurs* à partir d'une trace avec des points de cheminement en utilisant le *[menu contextuel de la trace](../../map/tracks/track-context-menu.md#points--waypoints)* : *Appuyez sur une trace visible sur la carte → dans le menu contextuel de la trace, choisissez Points → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Trier les marqueurs {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Trier les marqueurs dans une liste Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trier les marqueurs dans une liste iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

En appuyant sur le coin gauche (*Android*) ou le coin droit (*iOS*) d'un onglet de *marqueur de carte* dans la *[liste des marqueurs de carte](../../personal/markers.md#itinerary-list)* et en le déplaçant vers le haut ou vers le bas, vous pouvez changer son ordre dans la *liste de navigation* (en déplaçant une carte de marqueur, vous verrez une ligne indiquant où le marqueur sera placé).

Dans la version Android de l'application OsmAnd, il existe d'autres options de tri pour les *marqueurs de carte* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Sort by* or *Plan a route*).


### Trier par attributs {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Tri alternatif des marqueurs Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Tri alternatif des marqueurs Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Vous pouvez trier les *marqueurs* par :

- **Nom** (*alphabétiquement*) — Si les marqueurs ont des noms descriptifs, cela peut être un moyen utile de trouver rapidement le marqueur que vous recherchez.
- **Distance** (*le plus proche ou le plus éloigné en premier*) - Cette option triera les marqueurs par leur distance par rapport à votre position actuelle.
- **Date** (*récemment ou il y a longtemps*) - Cela triera les marqueurs par la date à laquelle ils ont été ajoutés. Si vous avez ajouté de nombreux marqueurs au fil du temps, cela peut être un moyen utile de voir lesquels sont les plus récents.


### Réorganiser avec l'outil Planifier un itinéraire {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Tri alternatif des marqueurs Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Tri alternatif des marqueurs Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

En utilisant la fonctionnalité de l'outil Planifier un itinéraire dans la liste des marqueurs, vous pouvez trier les *marqueurs* *Porte-à-porte*, les mettre dans l'ordre inverse ou créer un *Aller-retour*. Si vous appuyez sur l'option *Navigation*, les *marqueurs* seront utilisés comme [destinations intermédiaires](../setup/route-navigation.md#intermediate-destinations).


## Passer les marqueurs {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Passer un marqueur Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Passer un marqueur Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Passer un marqueur iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Passer un marqueur iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Un *marqueur* peut être marqué comme passé (*Android*) ou ignoré (*iOS*).

- Via le *[menu contextuel de la carte](../../map/map-context-menu.md#add--edit-marker)*.  
- Lorsque vous vous approchez d'un *marqueur* à une distance inférieure à 40 mètres (*Android*) ou 50 mètres (*iOS*), un interrupteur dans la barre des *[widgets de marqueurs](../../widgets/markers.md#top-bar-widget)* devient actif.  

Après avoir passé un *marqueur*, il est déplacé vers le dossier [Historique](../../personal/markers.md#history), d'où il peut être restauré si nécessaire. Le marqueur suivant dans la [liste](#itinerary-list) devient actif. Selon vos [paramètres](#use-markers-in-navigation), vous pouvez être guidé vers lui par une flèche ou une ligne en pointillés.


## Articles connexes {#related-articles}

- [À propos des marqueurs de carte](../../personal/markers.md).
- [Widget Marqueur](../../widgets/markers.md).  
__
- [Paramètres d'itinéraire](../routing/osmand-routing.md#routing-types)
- [Préparation de l'itinéraire](./route-navigation.md)
- [Détails de l'itinéraire](./route-details.md)
- [Navigation par trace](./gpx-navigation.md)
- [Paramètres de navigation](../guidance/navigation-settings.md)
- [Écran de la carte pendant la navigation](../guidance/map-during-navigation.md)
- [Instructions vocales / Notifications](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)