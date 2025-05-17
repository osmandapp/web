---
source-hash: acf4421089ab770b6155394df2880ea7c681f8a0b45bc55cd5a1e06aae2dd81f 
sidebar_position: 1
title:  Planifier un itinéraire
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


## Aperçu

L'outil **Planifier un itinéraire** (*Menu → Planifier un itinéraire*) est une fonctionnalité puissante de l'application OsmAnd qui vous permet de [créer de nouveaux itinéraires](#créer-un-nouvel-itinéraire) sous forme de traces GPX, de [modifier et d'ajouter de nouveaux segments](#segments) à des traces déjà enregistrées, de [mesurer des distances](#mesure-de-distance) sur la carte et de [joindre des segments de trace](#joindre-la-trace-aux-routes) à la route la plus proche disponible en utilisant différents profils de navigation. La fonctionnalité est conçue pour fonctionner en *mode hors ligne*.

Un itinéraire se compose d'un ensemble de segments entre des points spécifiés. Les segments peuvent être des lignes droites ou des itinéraires adaptés au profil sélectionné. L'itinéraire peut être enregistré au format GPX pour une importation, une modification et une [navigation](../navigation/setup/gpx-navigation.md) ultérieures.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Principaux cas d'utilisation

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Plan a route android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Plan a route ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Créer un nouvel itinéraire

Pour créer une nouvelle trace au format GPX, utilisez la fonction principale de l'outil *Planifier un itinéraire*. La pré-création d'un itinéraire présente de nombreux avantages, contrairement à l'enregistrement de la trace actuelle avec le *[plugin d'enregistrement de trajet](../plugins/trip-recording.md)*. Vous pouvez [ajouter](#ajout-de-points) autant de points que vous le souhaitez à l'itinéraire, les [supprimer et les déplacer](#menu-contextuel-des-points), modifier les types d'itinéraire par [segments](#itinéraire-entre-les-points) et obtenir des [informations détaillées sur l'itinéraire](#graphique).  

Par défaut, le type de routage correspondra au profil précédemment sélectionné. Appuyez sur l'icône de routage pour sélectionner la manière dont l'application doit calculer le segment pour connecter les points. Le profil disponible doit être configuré [séparément](../navigation/routing/osmand-routing.md#routing-types).  

Vous pouvez **zoomer et dézoomer** pour faciliter le placement des points lors de la création ou de la modification d'une trace. Lorsque vous **dézoomez**, les points de la trace deviennent invisibles pour une meilleure vue de toute la longueur de la trace et de la carte dans son ensemble. Seuls le dernier point ajouté et le pointeur pour ajouter le point suivant restent visibles.


### Modifier une trace GPX existante

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

L'outil *Planifier un itinéraire* permet de modifier une trace GPX existante ainsi qu'une [trace importée](../personal/tracks/manage-tracks.md#import). Cependant, si vous devez exclure un grand nombre de points en fonction de critères génériques, [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) pourrait être un outil plus approprié.


### Mesure de distance

![Plan a route android](@site/static/img/plan-route/plan_route_lines_andr.png)  

*Planifier un itinéraire* est un moyen rapide et facile de mesurer la distance entre les points.

- Sélectionnez la méthode de planification d'itinéraire *Ligne droite*. Une ligne pointillée sera tracée entre les points.
- [Ajoutez](#ajout-de-points) le premier point sur la carte à partir duquel la ligne sera tracée.
- Déplacez la carte pour déterminer la distance et l'azimut. Les informations seront affichées dans un champ avec une liste de points sous la carte.

:::note
La *Ligne droite* est nécessaire et sera utilisée pour les zones non couvertes par les données de routage, telles que les zones hors route et hors piste.
:::


### Obtenir des données d'altitude

<InfoAndroidOnly />

![Plan a route android](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

Si les [données d'altitude](../map/tracks/track-context-menu.md#calculating-missing-elevation) sont manquantes dans une trace existante, il est possible de les ajouter en utilisant les outils suivants :

- [Utiliser les routes à proximité](#joindre-la-trace-aux-routes). Ce mode utilise les cartes hors ligne pour trouver les routes les plus proches afin de construire une trace, de sorte que les données d'altitude seront récupérées à partir des routes jointes. La géométrie de la trace peut être ajustée.  
- [Utiliser les cartes de terrain](../map/tracks/track-context-menu.md#calculating-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Le mode calcule l'altitude en fonction des données de la carte de terrain (3D). La différence entre les altitudes enregistrées par votre appareil peut être utilisée pour la correction d'altitude. La géométrie de la trace reste inchangée.


### Joindre la trace aux routes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

Le paramètre **Joindre aux routes** permet de joindre une trace enregistrée ou importée aux routes des cartes hors ligne OsmAnd pour obtenir des informations supplémentaires :

- Informations de virage correctes pour la [navigation par trace](../navigation/setup/gpx-navigation.md#how-to-follow-the-track) (en particulier aux ronds-points).
- Noms de rues et informations sur les voies.
- Données d'altitude.
- [Attributs de route](../navigation/setup/route-details.md#road-attributes).

Vous pouvez sélectionner une [valeur seuil](../navigation/setup/gpx-navigation.md#attach-to-the-roads) pour la distance à laquelle les points de trace simplifiés peuvent se trouver par rapport aux points de trace d'origine.

:::note Icône de profil non spécifié
Si vous sélectionnez une trace et que l'icône de profil ***non spécifié*** ("?") s'affiche à côté de l'icône *Paramètres*, appuyez dessus pour choisir si vous souhaitez joindre la trace aux routes ou simplement connecter les points avec une ligne droite et la traiter comme une trace enregistrée.
:::


## Points et segments

### Ajout de points

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>  

Pour mesurer une distance ou planifier un trajet, ajoutez des points à l'emplacement du *Pointeur* un par un et appuyez sur le bouton *Ajouter un point*. En accédant à la **liste des points** ci-dessous, vous pouvez réorganiser les points, les supprimer ou accéder à un [menu contextuel de point](#menu-contextuel-des-points) spécifique.

:::note
Vous pouvez également **Annuler**/**Rétablir** chaque action que vous avez effectuée dans la planification d'itinéraire.
:::
  
### Itinéraire entre les points

Les points ajoutés dans l'éditeur peuvent être connectés sous forme de ligne droite ou d'itinéraire entre les points d'un profil sélectionné. L'*itinéraire entre les points* est accessible de plusieurs manières :

1. Depuis le menu *Options* *→* *Itinéraire entre les points*.
2. Appuyez sur l'*icône de profil* dans le coin inférieur gauche de l'écran de la carte. Pas sur l'icône supérieure, cela ouvrira le menu Configurer la carte.
3. Dans le *[Menu contextuel des points](#menu-contextuel-des-points) → Modifier le type d'itinéraire avant/après*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Plan a route android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Plan a route ios](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

Vous pouvez modifier l'itinéraire entre 2 points spécifiques ou entre plusieurs points :

- *Trace entière*. La trace entière sera recalculée en utilisant le profil sélectionné.
- *Segment suivant*. Seul le segment suivant sera recalculé en utilisant le profil sélectionné.  
- *Modifier le type d'itinéraire avant/après le point*. Dans le *menu contextuel des points*, vous pouvez modifier la façon dont l'itinéraire est calculé pour la section allant de ce point au point le plus proche ou au point d'extrémité. Le paramètre fournit des informations sur la distance de ce point au début ou à la fin de l'itinéraire, ou au point suivant/précédent.
- *Recalculer les itinéraires*. Vous pouvez utiliser le recalcul d'itinéraire sans changer le type de profil. L'icône de profil affichée sur l'itinéraire planifié dans l'outil ne changera pas, mais le type d'itinéraire correspondra à celui sélectionné. Vous pourriez en avoir besoin pour trouver des itinéraires alternatifs.  

### Segments

Un segment de trace est une collection de points connectés sans **lacunes**. Dans un outil de planification d'itinéraire, il est possible :

- De fusionner des segments : l'option [Joindre les segments](#menu-contextuel-des-points) supprime l'écart avec les segments précédemment séparés.
- De diviser ou de créer de nouvelles sections de trace non connectées. Pour en créer une, utilisez l'option [Démarrer un nouveau segment](#menu-contextuel-des-points) ou sélectionnez la fonction [Diviser](#menu-contextuel-des-points) dans le menu contextuel des points.

### Menu contextuel des points

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Chaque point de votre itinéraire a son menu contextuel. Il affiche le *numéro de séquence* du point, la *distance depuis le début de l'itinéraire*, la fonction pour le déplacer sur la carte et le supprimer, et un ensemble d'actions avec les sections de l'itinéraire avant et après ce point. Pour modifier, appuyez sur le point requis dans la [liste des points](#ajout-de-points) ou directement sur la carte.

- ***Informations sur le point***. Le nombre de points dans la liste. La distance au premier point est basée sur le type de routage défini, la distance peut changer lors du recalcul vers le nouveau type si le paramètre *Itinéraire entre les points* est modifié.  

- ***<Translate ios="true" ids="move_point"/>***. Vous permet de modifier la position d'un point sur la carte. Déplacez la carte à l'aide de gestes pour modifier l'emplacement du point. L'indicateur de point sera au centre de la partie visible de la carte.  

- ***<Translate ios="true" ids="add_point_after"/>***. Déplacez la carte pour ajouter un point après le point sélectionné. Vous pouvez ajouter autant de points que nécessaire jusqu'à ce que vous appuyiez sur Annuler ou Appliquer.  

- ***<Translate ios="true" ids="add_point_before"/>***. Déplacez la carte pour ajouter autant de points que nécessaire après le point sélectionné sur le segment entre ce point et le suivant.  

- ***<Translate ios="true" ids="trim_before"/>***. Vous pouvez couper toute la section de l'itinéraire, les points et les segments, de son début au point sélectionné. La distance à couper est indiquée sous le nom de l'option.  

- ***<Translate ios="true" ids="trim_after"/>***. Vous pouvez couper un itinéraire, des points et des segments, du dernier point ajouté au point sélectionné. La distance à couper est indiquée sous le nom de l'option.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Permet de diviser l'itinéraire avant le point sélectionné en segments séparés et non connectés.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Permet de diviser l'itinéraire après le point sélectionné en segments séparés et non connectés.  

- ***<Translate ios="true" ids="join_segments"/>***. Le dernier point sur l'un des segments divisés et le suivant dans la liste des points sur l'autre segment ont ce paramètre de connexion.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. Vous pouvez modifier le type de routage configuré pour un profil disponible, entre les points du segment précédent, ou pour tous les segments du début de l'itinéraire au point sélectionné.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. Vous pouvez modifier le type de routage entre les points du segment suivant, ou pour tous les segments du point sélectionné au dernier point ajouté.  

- ***<Translate ios="true" ids="delete_point"/>***. Supprime le point sélectionné de l'itinéraire. Similaire à la suppression d'un point dans une liste.

### Itinéraires multimodaux

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

En utilisant l'outil *Planifier un itinéraire* et l'option [Itinéraire entre les points](#itinéraire-entre-les-points), vous pouvez créer des itinéraires multimodaux où, par exemple, la première partie peut être un itinéraire *cycliste*, la deuxième partie un itinéraire en *ligne droite* puis un itinéraire *piéton*. Notez que la navigation sur les itinéraires multimodaux n'est pas disponible, vous devez donc sélectionner l'un des profils les plus appropriés pour pouvoir suivre les instructions détaillées.


## Éditeur

### Enregistrer l'itinéraire

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


Après [avoir ajouté](#ajout-de-points) au moins un point à la carte, vous pouvez utiliser l'option d'enregistrement. Toutes les traces enregistrées dans *Planifier un itinéraire* se trouvent dans le *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

Il existe quatre façons d'enregistrer :

- ***Enregistrement rapide***. Le bouton supérieur droit ***Terminé*** / ***Enregistrer*** (pour les traces existantes) permet d'enregistrer rapidement les modifications et de quitter l'outil *Planifier un itinéraire*. Le nom est généré en fonction de la date actuelle.
- ***Enregistrer les modifications*** dans le [menu Options](#options) vous permet d'enregistrer les modifications dans un fichier et de continuer à planifier l'itinéraire.
- ***Enregistrer comme nouvelle trace*** dans le [menu Options](#options) ouvre une boîte de dialogue où vous spécifiez le nom de la trace et le dossier où l'itinéraire sera enregistré.
- ***Ajouter les modifications à une trace***. Joint une trace créée en tant que [segment séparé](#segments) à une autre trace existante. Les modifications apportées à une trace sélectionnée *ne peuvent pas être annulées*.

:::note Option de trace simplifiée
Lors de l'enregistrement d'une nouvelle trace, vous pouvez sélectionner l'option de trace ***Simplifiée*** pour rendre la trace compatible avec d'autres applications tierces. Techniquement, la trace sera enregistrée sans instructions d'itinéraire en tant que trace purement géométrique.
:::

### Options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#itinéraire-entre-les-points). Affiche le profil d'application sélectionné (par défaut, une ligne droite). Appuyer sur cette action équivaut à appuyer sur le bouton *Profil*, qui ouvre le [menu des profils](../personal/profiles.md) de l'application.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) ou **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Dessine de nouveaux segments d'itinéraire qui ne se connectent pas au segment précédent.
- [<Translate android="true" ids="shared_string_save_changes"/>](#enregistrer-l'itinéraire). S'il s'agit d'une nouvelle trace sans lien avec une trace existante, le menu *Enregistrer comme nouvelle trace* s'ouvre. Lorsque vous ajoutez de nouveaux segments à une trace ouverte ou importée, la notification d'enregistrement du fichier GPS dans le stockage apparaît, après quoi vous pouvez continuer à créer le segment suivant.
- [<Translate android="true" ids="save_as_new_track"/>](#enregistrer-l'itinéraire). Enregistre votre itinéraire comme une trace GPX.
- [<Translate android="true" ids="add_to_a_track"/>](#enregistrer-l'itinéraire). Ajoute votre itinéraire à une trace de votre dossier de traces et enregistre la nouvelle trace.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Démarre la navigation de votre position au point d'arrivée en utilisant un itinéraire tracé.
- **<Translate android="true" ids="reverse_route"/>**. Vous échangez le point de *Départ* de l'itinéraire et le dernier point ajouté. Les paramètres des segments d'itinéraire ne changent pas lorsque l'inversion est appliquée.
- [<Translate android="true" ids="attach_to_the_roads"/>](#joindre-la-trace-aux-routes). Crée un itinéraire approximatif. Chaque point de la trace est mis en correspondance avec la route autorisée la plus proche sur la carte selon le profil sélectionné et la distance seuil.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (Android uniquement). Vous pouvez filtrer les points d'itinéraire qui ne correspondent pas au type de routage sélectionné, supprimer les données inutiles ou corriger les données inexactes. Le filtre GPS ne fonctionnera que si le type de routage est spécifié comme *Ligne droite*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#obtenir-des-données-d'altitude) (*Android uniquement*). Cette option n'est affichée dans le menu que si aucune donnée d'altitude n'est disponible. Avec cette [option](#obtenir-des-données-d'altitude), vous pouvez calculer l'altitude en utilisant les *données de la carte de terrain* ou utiliser les données des cartes téléchargées pour trouver les *routes à proximité*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Il archive complètement toutes vos actions. Un "artefact" reste sur la carte - les lignes pointillées de l'itinéraire qui vient d'être effacé. Il disparaît lors de l'ajout de nouveaux points. Vous pouvez annuler la fonction Effacer tout avec le bouton Retour. La fonctionnalité n'affecte pas les parties inchangées des itinéraires ouverts dans l'outil.

### Graphique

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Pendant la planification de l'itinéraire, le [graphique](../navigation/setup/route-details.md#elevation-graph) affiche les informations d'altitude et de pourcentage de pente de l'itinéraire, et vous pouvez appuyer n'importe où sur le graphique pour afficher un pointeur avec des données particulières.  

- Pour **Android**, le graphique est affiché dans l'onglet *Graphique* lors de la création ou de l'ouverture d'une trace, et lors de la [Navigation](../navigation/setup/gpx-navigation.md) à l'aide de *Planifier un itinéraire*.
- Pour **iOS**, le graphique n'est disponible que via le menu *[Options](#options) → Navigation*.

Lors du calcul d'un itinéraire pour la navigation dans *Planifier un itinéraire*, vous pouvez trouver des informations supplémentaires sur la trace telles que les [informations d'altitude](../navigation/setup/route-details.md#elevation-info) et les [attributs de route](../navigation/setup/route-details.md#road-attributes), et utiliser l'outil [Analyser sur la carte](../navigation/setup/route-details.md#analyse-on-map). Appuyez sur le bouton *Détails* sous le graphique.  


## Articles connexes

- [Afficher la trace sur la carte](../map/tracks/index.md)
- [Analyser sur la carte](../map/tracks/index.md#analyze-track-on-map)
- [Menu contextuel de la trace](../map/tracks/track-context-menu.md)
- [Navigation par trace](../navigation/setup/gpx-navigation.md)
- [Enregistrement de trajet](../plugins/trip-recording.md)

> *Cet article a été mis à jour pour la dernière fois en janvier 2025*

