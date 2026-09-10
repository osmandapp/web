---
source-hash: cfeff8f8f57fbdb014fad35d6ada3afdf1bf6cd5443cc3e69f77460144202dd0
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


## Aperçu {#overview}

L'outil **Planifier un itinéraire** (*Menu → Planifier un itinéraire*) est une fonctionnalité puissante de l'application OsmAnd qui vous permet de [créer de nouveaux itinéraires](#create-new-route) sous forme de traces GPX, de [modifier et d'ajouter de nouveaux segments](#segments) à des traces déjà enregistrées, de [mesurer des distances](#distance-measurement) sur la carte, et d'[attacher des segments de trace](#attach-track-to-roads) à la route disponible la plus proche en utilisant différents profils de navigation. La fonctionnalité est conçue pour fonctionner en *mode hors ligne*.

Un itinéraire se compose d'un ensemble de segments entre des points spécifiés. Les segments peuvent être des lignes droites ou des itinéraires adaptés au profil sélectionné. L'itinéraire peut être enregistré au format GPX pour une importation, une modification et une [navigation](../navigation/setup/gpx-navigation.md) ultérieures.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire ios](@site/static/img/plan-route/plan_route_overview_ios.webp)

</TabItem>

</Tabs>


## Principaux cas d'utilisation {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Planifier un itinéraire android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Planifier un itinéraire ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Créer un nouvel itinéraire {#create-new-route}

Pour créer une nouvelle trace au format GPX, utilisez la fonction principale de l'outil *Planifier un itinéraire*. La pré-création d'un itinéraire présente de nombreux avantages, contrairement à l'enregistrement de la trace actuelle avec le *[plugin Enregistrement de trajet](../plugins/trip-recording.md)*. Vous pouvez [ajouter](#adding-points) autant de points que vous le souhaitez à l'itinéraire, les [supprimer et les déplacer](#point-context-menu), changer les types d'itinéraire par [segments](#route-between-points), et obtenir des [informations détaillées sur l'itinéraire](#graph--analyze).  

Par défaut, le type de routage correspondra au profil précédemment sélectionné. Appuyez sur l'icône de routage pour sélectionner comment l'application doit calculer le segment pour connecter les points. Le profil disponible doit être configuré [séparément](../navigation/routing/osmand-routing.md#routing-types).  

Vous pouvez **zoomer et dézoomer** pour faciliter le placement des points lors de la création ou de la modification d'une trace. Lorsque vous **dézoomez**, les points de la trace deviennent invisibles pour une meilleure vue de toute la longueur de la trace et de la carte dans son ensemble. Seuls le dernier point ajouté et le pointeur pour l'ajout du point suivant restent visibles.


### Modifier une trace GPX existante {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

L'outil *Planifier un itinéraire* permet de modifier une trace GPX existante ainsi qu'une [trace importée](../personal/tracks/manage-tracks.md#import). Cependant, si vous devez exclure un grand nombre de points sur la base de critères génériques, le [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) pourrait être un outil plus approprié.


### Mesure de distance {#distance-measurement}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire android](@site/static/img/plan-route/plan_route_lines_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire iOS](@site/static/img/plan-route/plan_route_lines_ios.webp)

</TabItem>

</Tabs>  

*Planifier un itinéraire* est un moyen rapide et facile de mesurer la distance entre des points.

- Sélectionnez la méthode de planification d'itinéraire *Ligne droite*. Une ligne pointillée sera tracée entre les points.
- [Ajoutez](#adding-points) le premier point sur la carte à partir duquel la ligne sera tracée.
- Déplacez la carte pour déterminer la distance et l'azimut. L'information sera affichée dans un champ avec une liste de points sous la carte.

:::note
La *Ligne droite* est nécessaire et sera utilisée pour les zones non couvertes par les données de routage, telles que les zones hors route et hors piste.
:::


### Obtenir les données d'altitude {#get-elevation-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire android](@site/static/img/plan-route/plan_route_graph_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire iOS](@site/static/img/plan-route/plan_route_graph_ios.webp)

</TabItem>

</Tabs> 

Si les [données d'altitude](../map/tracks/track-context-menu.md#calculate-missing-elevation) sont manquantes dans une trace existante, il est possible de les ajouter en utilisant les outils suivants :

- [Utiliser les routes à proximité](#attach-track-to-roads). Ce mode utilise les cartes hors ligne pour trouver les routes les plus proches afin de construire une trace, de sorte que les données d'altitude seront récupérées à partir des routes attachées. La géométrie de la trace peut être ajustée.  
- [Utiliser les cartes de terrain](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Ce mode calcule l'altitude en se basant sur les données des cartes de terrain (3D). La différence entre les altitudes enregistrées par votre appareil peut être utilisée pour la correction de l'altitude.  La géométrie de la trace reste inchangée.

:::note

**Correction d'altitude en ligne** (basée sur le serveur) a été supprimée dans les versions récentes d'OsmAnd et n'est plus disponible.  
Pour les versions antérieures, elle était dépréciée et peu fiable.  
Utilisez plutôt les options hors ligne : attacher aux routes ou cartes de terrain (Pro).  

:::

### Attacher la trace aux routes {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire attacher-route-android](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire attacher-route-ios](@site/static/img/plan-route/plan_route-snap_ios.webp) ![Planifier un itinéraire attacher-route-ios](@site/static/img/plan-route/plan_route-snap_ios_2.webp)

</TabItem>

</Tabs>  

Le paramètre **Attacher aux routes** permet d'attacher une trace enregistrée ou importée aux routes des cartes hors ligne d'OsmAnd pour obtenir des informations supplémentaires :

- Informations de virage correctes pour la [Navigation par trace](../navigation/setup/gpx-navigation.md#follow-track-options) (surtout aux ronds-points).
- Noms de rues et informations sur les voies.
- Données d'altitude.
- [Attributs de la route](../navigation/setup/route-details.md#road-attributes).
- Profil d'altitude mis à jour basé sur la géométrie de la route.
- Recalcul possible de la géométrie de la trace (simplification ou ajustement des points au réseau routier).

Lorsque une trace est attachée aux routes, les paramètres suivants peuvent changer car la géométrie et l'altitude de la trace sont recalculées : *Distance, Montée / Descente, Vitesse moyenne (et le graphique de vitesse), Vitesse maximale, Temps en mouvement*, et *Durée*. Ces valeurs peuvent différer de la trace GPX originale si l'altitude ou la géométrie basée sur la route recalculée s'écarte significativement des données GPS enregistrées.

Vous pouvez sélectionner une [valeur de seuil](../navigation/setup/gpx-navigation.md#attach-to-the-roads) pour la distance maximale entre les points de la trace simplifiée et les points de la trace originale.

:::note Icône de profil non spécifié
Si vous sélectionnez une trace et que l'icône de profil ***non spécifié*** ("?") s'affiche à côté de l'icône *Paramètres*, appuyez dessus pour choisir d'attacher la trace aux routes ou de simplement connecter les points avec une ligne droite et de la traiter comme une trace enregistrée.
:::

<!--
### Add Route Points to Navigation from GPX {#add-route-points-to-navigation-from-gpx}

If you import a GPX file containing a route (with `<rtept>` elements), OsmAnd will display the route on the map but will not automatically convert the route points into a turn-by-turn navigation list.

To generate navigation instructions:

1. Open the GPX file from *My Places → Tracks*.
2. Tap the track to open it.
3. Tap the point menu (⋮) and choose **Add to Navigation**.
4. OsmAnd will convert the route points into a full navigation route with instructions.

> **NOTE:** *You may still use [Attach to roads](#attach-track-to-roads) to adjust geometry before converting to navigation.*
-->


## Points et segments {#points--segments}

### Ajout de points {#adding-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire android](@site/static/img/plan-route/plan_route_points_list_andr.png) ![Planifier un itinéraire Favoris android](@site/static/img/plan-route/plan_route_favorites_and.png)

Pour mesurer une distance ou planifier un trajet, ajoutez des points à l'emplacement du *Pointeur* un par un et appuyez sur le bouton *Ajouter*. En accédant à la **liste des points** ci-dessous, vous pouvez réorganiser les points, les supprimer ou accéder à un [menu contextuel de point](#point-context-menu) spécifique.

Vous pouvez également ajouter un point intermédiaire directement depuis la carte en appuyant sur un POI ou un Favori pour ouvrir son menu contextuel, puis en appuyant sur *AJOUTER UN POINT*. Dans ce mode, les menus contextuels pour les objets non-points ne sont pas affichés. Lorsque vous ajoutez un POI/Favori, son nom est conservé comme nom du point de l'itinéraire ; si vous déplacez ultérieurement ce point sur la carte, le nom est réinitialisé.

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire ios](@site/static/img/plan-route/plan_route_points_list_ios.webp)

Pour mesurer une distance ou planifier un trajet, ajoutez des points à l'emplacement du *Pointeur* un par un et appuyez sur le bouton *Route +*. En accédant à la **liste des points** ci-dessous, vous pouvez réorganiser les points, les supprimer ou accéder à un [menu contextuel de point](#point-context-menu) spécifique.

</TabItem>

</Tabs>  

:::note
Vous pouvez également **Annuler**/**Rétablir** chaque action que vous avez effectuée dans la planification d'itinéraire.
:::

### Ajout de points de cheminement (iOS uniquement) {#adding-waypoints}

![Planifier un itinéraire ios](@site/static/img/plan-route/adding_poi_ios.webp) ![Planifier un itinéraire ios](@site/static/img/plan-route/adding_poi_2_ios.webp)

L'onglet POI permet d'ajouter et de gérer des points de cheminement lors de la planification d'un itinéraire.

Pour ajouter un point de cheminement, sélectionnez un emplacement sur la carte et appuyez sur le bouton *+ POI*. L'écran Point de cheminement s'ouvre, où vous pouvez saisir un nom, une description et une adresse, sélectionner un groupe et personnaliser l'icône, la couleur et la forme. Vous pouvez sélectionner un groupe existant ou appuyer sur *Ajouter un groupe* pour en créer un nouveau.

L'onglet POI affiche les points ajoutés regroupés par dossiers. Chaque groupe affiche son nom et le nombre de points qu'il contient. Pour chaque groupe, appuyez sur le menu à trois points pour accéder aux actions du groupe :
- **Renommer** — modifier le nom du groupe.
- **Modifier l'apparence** — modifier l'apparence du groupe.
- **Trier** — modifier l'ordre des points dans le groupe.
- **Supprimer** — supprimer le groupe.

Le menu Trier propose les options suivantes : *Dernière modification*, *Nom A–Z*, *Nom Z–A*, *Date la plus récente en premier* et *Date la plus ancienne en premier*.

Appuyez sur un point dans un groupe pour ouvrir son menu contextuel. Vous pouvez :
- **Modifier** — ouvrir l'écran Modifier le point de cheminement.
- **Supprimer** — supprimer le point du groupe.
  
### Itinéraire entre les points {#route-between-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Planifier un itinéraire android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

Les points ajoutés dans l'éditeur peuvent être connectés par une ligne droite ou comme un itinéraire entre les points d'un profil sélectionné. *Itinéraire entre les points* est accessible de plusieurs manières :

1. Depuis le menu *Options* *→* *Itinéraire entre les points*.
2. Appuyez sur l'*icône de profil* dans le coin inférieur gauche de l'écran de la carte. Pas sur l'icône du haut, qui ouvrira le menu Configurer la carte.
3. Dans le *[Menu contextuel du point](#point-context-menu) → Changer le type d'itinéraire avant/après*.  

Vous pouvez changer l'itinéraire entre 2 points spécifiques ou entre plusieurs points :

- *Trace entière*. La trace entière sera recalculée en utilisant le profil sélectionné.
- *Segment suivant*. Seul le segment suivant sera recalculé en utilisant le profil sélectionné.  
- *Changer le Type d'Itinéraire Avant/Après le Point*. Dans le *menu contextuel du point*, vous pouvez changer la manière dont l'itinéraire est calculé pour la section de ce point au point le plus proche ou au point extrême. Le paramètre fournit des informations sur la distance de ce point au début ou à la fin de l'itinéraire, ou au point suivant/précédent.
- *Recalculer les itinéraires*. Vous pouvez utiliser le recalcul d'itinéraire sans changer le type de profil. L'icône de profil affichée sur l'itinéraire planifié dans l'outil ne changera pas, mais le type d'itinéraire correspondra à celui sélectionné. Vous pourriez en avoir besoin pour trouver des itinéraires alternatifs.  

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire ios](@site/static/img/plan-route/route_between_points_ios.webp) ![Planifier un itinéraire ios](@site/static/img/plan-route/settings_tab_ios.webp)

Les points ajoutés peuvent être connectés par une ligne droite ou un itinéraire calculé à l'aide d'un profil de routage sélectionné. Le menu Itinéraire entre les points permet d'afficher et de modifier le type de routage et les paramètres des segments et sections d'itinéraire.

Vous pouvez ouvrir Itinéraire entre les points en appuyant sur le bouton *Itinéraire entre les points*, qui affiche l'icône du profil de routage actuellement sélectionné, ou depuis un menu [Segment](#segments) ou Section.

Dans l'onglet Type d'itinéraire, vous pouvez sélectionner un profil de routage pour le segment ou la section sélectionné. La ligne droite est disponible comme première option, suivie des profils de routage disponibles.

Lorsqu'un itinéraire ne contient qu'un seul type de routage, la vue simple Itinéraire entre les points est affichée. Lorsqu'un itinéraire contient plusieurs types de routage, la vue complexe affiche tous les segments et sections, vous permettant de sélectionner la partie de l'itinéraire à modifier.

Vous pouvez également :
- **Démarrer un nouveau segment** — créer un nouveau segment et continuer à ajouter des points d'itinéraire. Le nouveau segment utilise le même type d'itinéraire que l'actuel.
- **Modifier pour toute la trace** — sélectionner un type de routage à appliquer à l'ensemble de la trace.

Dans l'onglet Paramètres, vous pouvez sélectionner des paramètres de routage prédéfinis pour le type d'itinéraire sélectionné.

</TabItem>

</Tabs>


### Segments {#segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Un segment de trace est un ensemble de points connectés sans **interruption**. Dans l'outil de planification d'itinéraire, il est possible :

- De fusionner des segments : l'option [Joindre les segments](#point-context-menu) supprime l'interruption entre des segments précédemment séparés.
- De diviser ou de créer de nouvelles sections de trace non connectées. Pour en créer une, utilisez l'option [Démarrer un nouveau segment](#point-context-menu) ou sélectionnez la fonction [Diviser](#point-context-menu) dans le menu contextuel du point.

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire ios](@site/static/img/plan-route/segment_menu.webp) ![Planifier un itinéraire ios](@site/static/img/plan-route/section_menu.webp)

Un itinéraire peut contenir un ou plusieurs segments. Un segment peut utiliser un seul type d'itinéraire ou contenir plusieurs sections avec différents types d'itinéraire.

Dans l'onglet Itinéraire, chaque segment est affiché avec son type d'itinéraire et sa distance. Lorsqu'un segment contient plusieurs sections, chaque section affiche son type d'itinéraire et sa distance.

Vous pouvez gérer un segment à l'aide de son menu à trois points :
- **Modifier le type d'itinéraire** — disponible pour un segment avec un seul type d'itinéraire. Ouvre Itinéraire entre les points, où vous pouvez sélectionner un type d'itinéraire différent.
- **Définir un seul type d'itinéraire** — disponible lorsqu'un segment contient plusieurs sections avec différents types d'itinéraire. Ouvre Itinéraire entre les points, où vous pouvez appliquer un seul type d'itinéraire au segment.
- **Trier** — réorganiser manuellement les points d'itinéraire ou utiliser Trier porte-à-porte pour les réorganiser afin de minimiser la distance totale de déplacement.
- **Enregistrer sous…** — enregistrer le segment comme un fichier séparé.
- **Supprimer le segment** — supprimer le segment.

Pour créer un nouveau segment non connecté, appuyez sur *Démarrer un nouveau segment* en bas de l'onglet Itinéraire.

Un segment peut être divisé en [sections](#multimodal-routes) lorsque différents types d'itinéraire sont utilisés pour différentes parties du segment. Chaque section affiche son type d'itinéraire et sa distance.

Appuyez sur le menu à trois points d'une section pour :
- **Modifier le type d'itinéraire** — ouvrir Itinéraire entre les points et sélectionner un autre type d'itinéraire.
- **Trier** — accéder aux options de tri disponibles.
- **Supprimer la section** — supprimer la section.

</TabItem>

</Tabs>


### Menu contextuel du point {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire ios](@site/static/img/plan-route/plan_route_points_menu_ios.webp)

</TabItem>

</Tabs>

Chaque point de votre itinéraire a son propre menu contextuel. Il affiche le *numéro de séquence* du point, la *distance depuis le début de l'itinéraire*, la fonction pour le déplacer sur la carte et le supprimer, ainsi qu'un ensemble d'actions avec les sections de l'itinéraire avant et après ce point. Pour modifier, appuyez sur le point requis dans la [liste des points](#adding-points) ou directement sur la carte.

- ***Information sur le point***. Le nombre de points dans la liste. La distance jusqu'au premier point est basée sur le type de routage défini ; la distance peut changer lors d'un recalcul vers un nouveau type si le paramètre *Itinéraire entre les points* est modifié.  

- ***<Translate ios="true" ids="move_point"/>***. Permet de changer la position d'un point sur la carte. Déplacez la carte en utilisant des gestes pour changer l'emplacement du point. L'indicateur de point sera au centre de la partie visible de la carte.  

- ***<Translate ios="true" ids="add_point_after"/>***. Déplacez la carte pour ajouter un point après le point sélectionné. Vous pouvez ajouter autant de points que nécessaire jusqu'à ce que vous appuyiez sur Annuler ou Appliquer.  

- ***<Translate ios="true" ids="add_point_before"/>***. Déplacez la carte pour ajouter autant de points que nécessaire après le point sélectionné sur le segment entre ce point et le suivant.  

- ***<Translate ios="true" ids="trim_before"/>***. Vous pouvez couper toute la section de l'itinéraire, points et segments, de son début jusqu'au point sélectionné. La distance à couper est indiquée sous le nom de l'option.  

- ***<Translate ios="true" ids="trim_after"/>***. Vous pouvez couper un itinéraire, des points et des segments, du dernier point ajouté jusqu'au point sélectionné. La distance à couper est indiquée sous le nom de l'option.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Permet de diviser l'itinéraire avant le point sélectionné en segments séparés et non connectés.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Permet de diviser l'itinéraire après le point sélectionné en segments séparés et non connectés.  

- ***<Translate ios="true" ids="join_segments"/>***. Le dernier point sur l'un des segments divisés et le suivant dans la liste des points sur l'autre segment ont ce paramètre de connexion.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. Vous pouvez changer le type de routage configuré pour un profil disponible, entre les points du segment précédent, ou pour tous les segments du début de l'itinéraire jusqu'au point sélectionné.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. Vous pouvez changer le type de routage entre les points du segment suivant, ou pour tous les segments du point sélectionné jusqu'au dernier point ajouté.  

- ***<Translate ios="true" ids="delete_point"/>***. Supprime le point sélectionné de l'itinéraire. Similaire à la suppression d'un point dans une liste.

### Itinéraires multimodaux {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire ligne de route android](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire écran ios](@site/static/img/plan-route/plan-route-routeline-ios.webp)

</TabItem>

</Tabs>

En utilisant l'outil *Planifier un itinéraire* et l'option [Itinéraire entre les points](#route-between-points), vous pouvez créer des itinéraires multimodaux où, par exemple, la première partie peut être un itinéraire à *vélo*, la deuxième partie une *ligne droite* et ensuite une partie *piétonne*. Notez que la navigation sur les itinéraires multimodaux n'est pas disponible, vous devez donc sélectionner l'un des profils les plus appropriés pour pouvoir suivre les instructions virage par virage.


## Éditeur {#editor}

### Enregistrer l'itinéraire {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

Après avoir [ajouté](#adding-points) au moins un point sur la carte, vous pouvez utiliser l'option d'enregistrement. Toutes les traces enregistrées dans *Planifier un itinéraire* se trouvent dans le menu principal *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

Il y a quatre façons d'enregistrer :

- ***Enregistrement rapide***. Le bouton en haut à droite ***Terminé*** (pour les traces existantes) permet d'enregistrer rapidement les modifications et de quitter l'outil *Planifier un itinéraire*. Le nom est généré en fonction de la date actuelle.
- ***Enregistrer les modifications*** dans le [menu Options](#options) vous permet d'enregistrer les modifications dans un fichier et de continuer à planifier l'itinéraire.
- ***Enregistrer comme nouvelle trace*** dans le [menu Options](#options) ouvre une boîte de dialogue où vous spécifiez le nom de la trace et le dossier où l'itinéraire sera enregistré.
- ***Ajouter les modifications à une trace***. Attache une trace créée comme un [segment séparé](#segments) à une autre trace existante. Les modifications apportées à une trace sélectionnée *ne peuvent pas être annulées*.

Lors de l'enregistrement, la trace hérite du type d'activité du profil de routage utilisé pour la planification. L'activité est enregistrée dans les métadonnées de la trace et est préservée après l'exportation ou l'importation du fichier GPX.

:::note Option de trace simplifiée
Lors de l'enregistrement d'une nouvelle trace, vous pouvez sélectionner l'option de trace ***Simplifiée*** pour rendre la trace compatible avec d'autres applications tierces. Techniquement, la trace sera enregistrée sans instructions d'itinéraire, comme une trace purement géométrique.
:::

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire ios](@site/static/img/plan-route/plan_route_save_changes_ios.webp)

Après avoir [ajouté](#adding-points) au moins un point sur la carte, vous pouvez utiliser l'option d'enregistrement. Toutes les traces enregistrées dans *Planifier un itinéraire* se trouvent dans le menu principal *<Translate ios="true" ids="shared_string_menu"/> → <Translate ios="true" ids="shared_string_my_places"/> →* *[<Translate ios="true" ids="shared_string_gpx_tracks"/>](../personal/tracks/manage-tracks.md)*.

Pour un nouvel itinéraire, appuyez sur *Enregistrer* dans la barre d'outils supérieure pour enregistrer la trace actuelle. Vous pouvez également utiliser *Enregistrer sous…* depuis le menu Options pour saisir un nom de fichier et enregistrer l'itinéraire.

Lorsque vous modifiez une trace existante, *Enregistrer* sauvegarde les modifications actuelles. Vous pouvez également utiliser les options suivantes :
- **Enregistrer sous…** — enregistre la trace avec un nouveau nom de fichier.
- **Enregistrer en tant que copie** — enregistre un duplicata de la trace.
- **Ajouter à une trace existante** — ajoute l'itinéraire planifié comme un segment séparé à une trace existante.

Lors de l'enregistrement, la trace hérite du type d'activité du profil de routage utilisé pour la planification. L'activité est enregistrée dans les métadonnées de la trace et est préservée après l'exportation ou l'importation du fichier GPX.

</TabItem>

</Tabs>  


### Options {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire options android](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Affiche le profil d'application sélectionné (par défaut, une ligne droite). Appuyer sur cette action est identique à appuyer sur le bouton *Profil*, qui ouvre le [menu des profils](../personal/profiles.md) de l'application.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) ou **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Dessine de nouveaux segments d'itinéraire qui ne se connectent pas au segment précédent.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). S'il s'agit d'une nouvelle trace sans lien avec une trace existante, le menu *Enregistrer comme nouvelle trace* s'ouvre. Lorsque vous ajoutez de nouveaux segments à une trace ouverte ou importée, la notification de l'enregistrement du fichier GPS dans le stockage apparaît, après quoi vous pouvez continuer à créer le segment suivant.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Enregistre votre itinéraire comme une trace GPX.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Ajoutez votre itinéraire à une trace de votre dossier de traces et enregistrez la nouvelle trace.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Démarre la navigation depuis votre position jusqu'au point d'arrivée en utilisant un itinéraire tracé.
- **<Translate android="true" ids="reverse_route"/>**. Vous échangez le point de *Départ* de l'itinéraire et le dernier point ajouté. Les paramètres des segments de l'itinéraire ne changent pas lorsque l'inversion est appliquée.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Crée un itinéraire approximatif. Chaque point de la trace est associé à la route autorisée la plus proche sur la carte en fonction du profil sélectionné et de la distance seuil.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (Android uniquement). Vous pouvez filtrer les points d'itinéraire qui ne correspondent pas au type de routage sélectionné, supprimer des données inutiles ou corriger des données inexactes. Le filtre GPS ne fonctionnera que si le type de routage est spécifié comme *Ligne droite*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*Android uniquement*). Cette option n'est affichée dans le menu que si aucune donnée d'altitude n'est disponible. Avec cette [option](#get-elevation-data), vous pouvez calculer l'altitude en utilisant les *données de la carte de terrain* ou utiliser les données des cartes téléchargées pour trouver les *routes à proximité*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Archive complètement toutes vos actions. Un "artefact" reste sur la carte - les lignes pointillées de l'itinéraire qui vient d'être effacé. Il disparaît lors de l'ajout de nouveaux points. Vous pouvez annuler la fonction Effacer tout avec le bouton Annuler l'action. La fonction n'affecte pas les parties non modifiées des itinéraires ouverts dans l'outil.

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire options ios](@site/static/img/plan-route/plan_route_menu_options_ios.webp)

Appuyez sur le menu à trois points dans la barre d'outils supérieure pour ouvrir le menu *Options*. Les actions disponibles dépendent de la création d'un nouvel itinéraire ou de la modification d'une trace existante.

- **Enregistrer sous…** — enregistrer l'itinéraire avec un nouveau nom de fichier. Disponible pour les nouveaux itinéraires et les traces modifiées.
- **Enregistrer en tant que copie** — enregistrer un duplicata d'une trace existante. Disponible lors de la modification d'une trace existante.
- **Ajouter à une trace existante** — ajouter l'itinéraire planifié comme un segment séparé à une trace existante.
- **Modifier l'ordre des segments** — modifier l'ordre des segments d'itinéraire.
- **Inverser l'itinéraire** — inverser la direction de l'itinéraire.
- **Navigation** — fermer Planifier un itinéraire et démarrer la navigation à l'aide de l'itinéraire planifié.
- **Effacer tous les points** — supprimer tous les points de l'itinéraire planifié.

</TabItem>

</Tabs>


### Graphique / Analyser {#graph--analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire android](@site/static/img/plan-route/plan_route_graph_5_new_andr.png)

Pendant la planification de l'itinéraire, le [graphique](../navigation/setup/route-details.md#elevation-graph) affiche des informations sur l'altitude de l'itinéraire et le pourcentage de pente. De plus, vous pouvez appuyer n'importe où sur le graphique pour afficher un pointeur avec des données particulières.  

Le graphique est affiché dans l'onglet *Graphique* lors de la création ou de l'ouverture d'une trace, et lors de la [Navigation](../navigation/setup/gpx-navigation.md) en utilisant *Planifier un itinéraire*.

Lors du calcul d'un itinéraire pour la navigation dans *Planifier un itinéraire*, vous pouvez trouver des informations supplémentaires sur la trace telles que les [informations sur l'altitude](../navigation/setup/route-details.md#elevation-info) et les [attributs de la route](../navigation/setup/route-details.md#road-attributes), et utiliser l'outil [Analyser sur la carte](../navigation/setup/route-details.md#analyze-on-map). Appuyez sur le bouton *Détails* sous le graphique.  

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire attacher-route-ios](@site/static/img/plan-route/plan_route_analyze_ios.webp) ![Planifier un itinéraire attacher-route-ios](@site/static/img/plan-route/plan_route_analyze_ios_2.webp)

La section Aperçu affiche un graphique basé sur l'axe sélectionné. Utilisez les commandes de sélection d'axe pour choisir les données affichées sur le graphique. *Recalculer l'altitude* permet de recalculer les données d'altitude si nécessaire. Si les données d'altitude ne sont pas disponibles, l'onglet Analyser affiche Aucun donnée d'altitude. Le message explique qu'OsmAnd peut récupérer les données d'altitude à partir des routes à proximité ou des cartes de terrain. Appuyez sur *Obtenir les données d'altitude* pour calculer les données d'altitude. Pour plus d'informations, consultez la section [Obtenir les données d'altitude](#get-elevation-data).

La section Statistiques de l'aperçu affiche *Montée*, *Descente*, *Plage d'altitude*, *Vitesse moyenne*, *Vitesse max.* et *Temps en mouvement*. Un tiret `–` s'affiche lorsque les données ne sont pas disponibles. Par exemple, la vitesse et le temps en mouvement peuvent ne pas être disponibles pour les itinéraires planifiés.

Les sections Types de route, Pente, Surface et Régularité affichent les caractéristiques correspondantes de l'itinéraire. Appuyez sur une section pour la développer et afficher des informations détaillées dans la légende.

</TabItem>

</Tabs>


## Articles connexes {#related-articles}

- [Afficher la trace sur la carte](../map/tracks/index.md)
- [Analyser sur la carte](../map/tracks/index.md#analyze-track-on-map)
- [Menu contextuel de la trace](../map/tracks/track-context-menu.md)
- [Navigation par trace](../navigation/setup/gpx-navigation.md)
- [Enregistrement de trajet](../plugins/trip-recording.md)