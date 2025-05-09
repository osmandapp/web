---
sidebar_position: 2
title: Naviguer par trace
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

L'option *Navigation par trace* (GPX) vous permet de suivre un itinéraire ou une trace prédéfinie sur une carte. Elle peut être particulièrement utile pour les activités de plein air telles que la randonnée, le cyclisme ou la conduite tout-terrain, où un itinéraire planifié améliore la sécurité et l'efficacité. Si vous voyagez en groupe organisé, cette fonction vous aide, ainsi que chaque membre du groupe, à disposer des mêmes informations d'itinéraire que les autres.

L'option *Navigation par trace* peut également être utilisée dans la vie de tous les jours. Vous pouvez utiliser une [trace enregistrée](../../plugins/trip-recording.md) précédemment ou [créer une trace](../../personal/tracks/manage-tracks.md#create-a-track) et la partager avec votre famille ou vos amis au lieu de leur expliquer l'itinéraire. Vous pouvez également utiliser les [itinéraires sur la carte OsmAnd](../../../../blog/routes/) pour la navigation. La manière de les mettre en évidence sur la carte et la signification de leurs couleurs sont décrites dans la section [Itinéraires](../../map/vector-maps.md#routes) de l'article *Cartes vectorielles*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Écran de navigation par trace Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Écran de navigation par trace iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Sélectionner la trace

Avant d'utiliser l'option *Navigation par trace*, vous devez [afficher la trace sur la carte](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd prend en charge la trace en tant que ligne (**Géométrie**) et la trace en tant qu'itinéraire (**Itinéraire**) ou une combinaison des deux (**OsmAnd** par [Planifier un itinéraire](../../plan-route/create-route.md)). Si vous avez une trace sous forme de collection de **Points de passage**, vous pouvez utiliser la [Navigation par marqueurs](./markers-navigation.md).


- Une trace **Géométrie** aura une navigation très basique par défaut et ne fournira pas de virages précis, de noms de rues et de voies de virage. Pour obtenir les informations manquantes, vous devez utiliser l'outil [Attacher aux routes](#attacher-aux-routes).

- Une trace **Itinéraire** calculera l'itinéraire entre les points d'itinéraire par le profil sélectionné. En gros, tous les points d'itinéraire seront considérés comme des points intermédiaires. Si votre itinéraire comprend > 50 points, il est très probable qu'il s'agisse d'une trace **Géométrie** mal configurée.

- Une trace **OsmAnd** se compose à la fois de parties géométriques et d'itinéraire, et elle est adaptée pour fournir exactement les mêmes indications que la navigation par défaut. Ces traces sont produites par [Planifier un itinéraire](../../plan-route/create-route.md) ou la [version Web](../../plan-route/web.md). Il est possible de réenregistrer cette trace en trace **Géométrie** uniquement sous forme [**Simplifiée**](../../plan-route/create-route.md#save-route) pour être utilisée dans des programmes tiers.


### Démarrer la navigation GPX

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Sélectionner la trace pour naviguer Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Sélectionner la trace pour naviguer Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sélectionner la trace pour naviguer iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Sélectionner la trace pour naviguer iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

La navigation sur une trace peut être lancée à l'aide du bouton d'action rapide dans le [menu contextuel de la trace](../../map/tracks/track-context-menu.md#quick-actions) (ouvert en sélectionnant l'une des [traces mises en évidence](./route-navigation.md#history-of-previous-routes) sur la carte, ou en appuyant sur un fichier de trace dans la section [Mes lieux](../../personal/myplaces.md) du *Menu principal*) ou à partir du menu de navigation, qui s'ouvre en appuyant sur :

- [*Bouton de navigation*](../../widgets/map-buttons.md#directions) sur l'écran de la carte.
- *Section Navigation* dans le *Menu principal* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- Dans le [*Menu de navigation*](./route-navigation.md#navigation-menu), allez à *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### Choisir les segments

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Segments Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segments iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Pour la navigation, si la trace sélectionnée se compose de plusieurs segments ou traces, vous pouvez sélectionner soit un segment spécifique, soit le fichier de trace GPX entier. Lors de l'[**importation**](../../personal/tracks/manage-tracks.md#import), vous pouvez choisir de l'enregistrer dans un seul fichier ou dans plusieurs fichiers.


### Options de suivi de trace

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Écran de navigation par trace Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *iOS* *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Écran de navigation par trace iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Modifier** (*icône crayon* à côté du nom de la trace) — Ouvre la trace dans l'outil [*Planifier un itinéraire*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Sélectionner un autre fichier GPX pour la navigation.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Si ce paramètre est activé, la direction du mouvement le long de la trace est inversée.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Configure l'[attachement d'une trace aux routes](#attacher-aux-routes).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Vous pouvez sélectionner comment naviguer de ma position à la trace :
vers le *<Translate android="true" ids="start_of_the_track"/>* ou vers le *<Translate android="true" ids="nearest_point"/>* sur la trace.
- Choisir le **Type de navigation** pour le premier et le dernier segment : soit construire une [*ligne droite*](../routing/straight-line-routing.md), soit utiliser le [*type de routage*](../routing/osmand-routing.md#routing-types) du profil actuel.


### Attacher aux routes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Attacher aux routes 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Attacher aux routes 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

La fonction **Attacher aux routes** aligne votre trace avec la route la plus proche pour une expérience de navigation plus précise. Disponible dans le menu [Suivre la trace](#follow-track-options), cette fonction garantit que votre itinéraire suit le réseau routier approprié en fonction du *profil de navigation* sélectionné et de la **distance seuil**. Cela améliore à la fois les [détails de l'itinéraire](../setup/route-details.md) et les [instructions vocales](#guidance) pendant la navigation.

***Comment ça marche :***

- OsmAnd fait correspondre chaque point de trace à la **route la plus proche** dans la **distance seuil** définie (par défaut : **50 mètres**).
- La **distance seuil** définit la distance maximale autorisée entre un point de trace GPS et une route pour l'attachement.
- **Réattachement automatique** — Lors du changement de **profils de navigation**, OsmAnd réattache automatiquement la trace aux routes qui conviennent au nouveau profil.
- Pour les grandes traces avec de nombreux points, le processus d'attachement peut prendre un peu plus de temps. Vous verrez un **indicateur de progression** (*ligne d'état orange*) indiquant l'état de l'attachement.
- Une fois l'attachement terminé, appuyez sur **Appliquer** pour utiliser la trace modifiée pour la navigation.

#### Attachement automatique aux routes

OsmAnd attache automatiquement les itinéraires aux routes lors de l'utilisation de l'outil **Planifier un itinéraire** :

- Les **points de passage** s'alignent automatiquement sur la route disponible la plus proche (*sauf pour le [Routage en ligne droite](../../navigation/routing/straight-line-routing.md) et le [Routage direct vers un point](../../navigation/routing/direct-to-point-routing.md)*).
- Si aucune route n'est détectée (par exemple, dans des environnements hors route), l'itinéraire suivra des **segments en ligne droite**.
- Vous pouvez **ajuster manuellement** l'itinéraire en faisant glisser les points de passage vers différents endroits.

Par défaut, la fonction **Attacher aux routes** s'exécute **automatiquement** lorsqu'une trace est sélectionnée pour la navigation. Vous pouvez modifier ce paramètre si nécessaire. Pour plus de détails, reportez-vous à [Guidage détaillé de la trace](../guidance/navigation-settings.md#detailed-track-guidance) dans l'article *Paramètres de navigation*.


## Points

### Point de départ / d'arrivée

Vous pouvez spécifier un point de départ et d'arrivée pour un itinéraire autre que le départ/arrivée spécifié dans le fichier GPX. Il suffit de le modifier de la même manière que pour la [Navigation](../setup/route-navigation.md#select-starting-point).

Dans le menu [Suivre la trace](#follow-track-options), vous pouvez choisir si vous souhaitez naviguer de votre position actuelle au point de départ de la trace ou au point le plus proche sur la trace GPX. Vous pouvez également choisir le [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) qui sera utilisé pour le segment de début et de fin de votre itinéraire.

### Points de passage

Si la trace comporte des points de passage, vous pouvez utiliser [Afficher le long de la route](../guidance/map-during-navigation.md#show-points-along-the-route) et [Guidage vocal](../guidance/voice-navigation.md#voice-settings) pour être informé des points d'intérêt. Vous pouvez ajouter des **Points de passage** à une trace existante via le **[Menu contextuel](../../map/map-context-menu.md#-add--edit--track-waypoint)**, la trace doit être visible sur la carte.

### Points intermédiaires

Lors de la préparation ou de la navigation d'une trace GPX, vous ne pouvez pas ajouter de lieux intermédiaires par lesquels vous prévoyez de passer dans cette trace. Vous ne pouvez attribuer que des points de départ et d'arrivée en plus de la trace ou du segment que vous prévoyez de suivre.

## Guidage

La *Navigation par trace GPX* contient les mêmes [instructions vocales](../guidance/voice-navigation.md) que la navigation par itinéraire. Cependant, certains virages ou ronds-points peuvent ne pas être interprétés correctement car il n'y a pas d'informations sur les intersections de routes dans le GPX, sauf pour les fichiers GPX créés par OsmAnd. Pour éliminer ces problèmes, vous devez utiliser la fonction [**Attacher aux routes**](#attacher-aux-routes).

Pendant la navigation, vous pouvez utiliser diverses options telles que le zoom avant ou arrière, le panoramique de la carte ou le changement de style de carte. Si vous déviez de la trace, OsmAnd recalculera automatiquement l'itinéraire pour vous ramener sur la trace. Vous pouvez également ajuster la vitesse de la trace et définir des alertes sonores pour les points d'approche ou les déviations de l'itinéraire.


## Articles connexes

- [Paramètres d'itinéraire](../routing/osmand-routing.md#routing-types)
- [Préparation de l'itinéraire](./route-navigation.md)
- [Détails de l'itinéraire](./route-details.md)
- [Navigation par marqueurs](./markers-navigation.md)
- [Paramètres de navigation](../guidance/navigation-settings.md)
- [Écran de la carte pendant la navigation](../guidance/map-during-navigation.md)
- [Invites vocales / Notifications](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Cet article a été mis à jour pour la dernière fois en avril 2025*

-- source-hash: blake2s: 19e2ac84ed94aeb607ddf5704cc2d8ed50aa84d0ea068f65bfada38f8b46b935 --
