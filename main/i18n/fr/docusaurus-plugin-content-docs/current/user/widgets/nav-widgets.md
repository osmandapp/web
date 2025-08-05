---
source-hash: cf00228b0959bc2aae53ebe181345d3b69c04b3d0d42a49a8ed5ebc376ca2673
sidebar_position: 4
title:  Widgets de navigation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Aperçu {#overview}

Les widgets de navigation sont activés pendant la navigation pour afficher des informations telles que la distance, l'heure d'arrivée ou de départ, les prochains virages, le relèvement, le nom de la rue actuelle, les informations sur les voies, la vitesse maximale, les alertes d'approche, les POI et les points de cheminement.

![Widgets de navigation tous](@site/static/img/widgets/navigational_widgets_all.png)


## Navigation active et passive {#active-and-passive-navigation}

Les widgets de navigation dans OsmAnd sont conçus pour améliorer les modes de navigation **active** et **passive**. Ces widgets fournissent des informations précieuses telles que les directions d'itinéraire, les détails de la route et les limites de vitesse, en fonction du **profil de navigation** sélectionné.

#### Navigation active {#active-navigation}

- **Exigences :**
  - Définir une **destination**.
  - Calculer l'**itinéraire** à l'aide de la fonction *Itinéraire*.
  - **Démarrer** la navigation (le guidage vocal est facultatif).
  - Disponible uniquement lors du déplacement le long de l'itinéraire.

- **Widgets pris en charge :**
  - Tous les **widgets de navigation** sont disponibles.

- **Avantages clés :**
  - Fournit des **instructions virage par virage**, un **guidage de voie** et une **ETA**.
  - Assure des mises à jour précises et dynamiques pendant le trajet.

#### Navigation passive {#passive-navigation}

- **Comment ça marche :**
  - Aucune destination n'est nécessaire.
  - Fonctionne automatiquement lorsque vous sélectionnez un **profil de navigation** (par exemple, *Conduite*, *Cyclisme*).

- **Fonctionnalité :**
  - Tente de déterminer la route que vous suivez à l'aide des données GPS.
  - Affiche les **informations routières de base**, telles que le [nom de la rue](#street-name), les [informations sur les voies](#lanes), la [vitesse maximale](#speed-limit).

- **Limitations :**
  - Certaines fonctionnalités avancées peuvent ne pas fonctionner correctement sans destination définie.
  - Les informations fournies peuvent ne pas toujours être **précises**, en particulier sur les réseaux routiers complexes.

> **REMARQUE.** *Gardez à l'esprit que le profil **Parcourir la carte** ne prend pas en charge les widgets de navigation dans l'un ou l'autre mode. Passez à un **profil de navigation** pertinent pour activer ces fonctionnalités.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Widget d'élévation {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> Ce widget n'est disponible qu'avec la fonctionnalité Pro pour les <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">abonnés OsmAnd Pro</a>.

:::

Le widget d'élévation affiche un graphique avec l'élévation et la pente de votre itinéraire de navigation, ainsi que votre position actuelle sur ce graphique avec l'altitude et la pente actuelles. Le graphique est tracé sur deux axes. L'axe des X représente la distance de votre itinéraire. L'axe des Y représente l'altitude, la valeur dépend du relief, et la pente est affichée en pourcentage.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Widget d'élévation](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interactions avec le graphique {#interactions-with-the-graph}

- *Zoom avant/arrière*. Par défaut, le graphique affiche l'itinéraire depuis la position actuelle jusqu'à 10 km. Vous pouvez utiliser le [mouvement à deux doigts](../map/interact-with-map#gestures) pour zoomer et dézoomer afin d'obtenir une vue plus détaillée des changements d'altitude sur votre itinéraire. Vous pouvez également déplacer le graphique vers la droite, vers l'avant sur l'itinéraire et vers l'arrière jusqu'à la position actuelle.
- *Placer un point sur le graphique*. Si vous souhaitez voir l'altitude et la valeur du degré à un point particulier de votre itinéraire, vous pouvez appuyer n'importe où sur le graphique et un pointeur avec les valeurs apparaîtra.


#### Contenu {#whats-in}

Lorsque vous sélectionnez un itinéraire et appuyez sur le bouton **Démarrer**, la carte s'ouvre avec votre position actuelle, l'itinéraire et le widget en bas de l'écran. Le widget contient le graphique et des informations sur la *montée*, la *descente*, la *pente*, la distance, l'altitude et l'angle de pente. Vous pouvez sélectionner l'*échelle optimale* et voir tous les obstacles possibles sur votre itinéraire.

- Toutes les valeurs sont indiquées soit pour l'ensemble de l'itinéraire, soit uniquement pour l'intervalle sélectionné en ajustant l'échelle du graphique.
- Lisez la [licence pour les données DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) utilisées par OsmAnd pour la détection du terrain.

| |
|:------------|
| ***Épingle de localisation*** |
| Votre ***position actuelle*** sur le graphique comprend une icône de localisation, l'élévation et la valeur en pourcentage de la pente. Le côté droit du widget contient l'élévation et le gradient les plus élevés, la valeur moyenne pour ceux-ci, et la valeur la plus basse sur la section sélectionnée de l'itinéraire visible sur le graphique. |
| ![point](@site/static/img/widgets/sch_1-1.png)|
| ***Informations supplémentaires*** |
| Le côté droit du widget contient des données sur l'altitude et la pente les plus élevées, la valeur moyenne pour les deux, et l'altitude et la pente les plus basses sur la section d'itinéraire sélectionnée visible sur le graphique. |
| ![data](@site/static/img/widgets/sch_1-2.png)|
|Les valeurs de ***montée*** et de ***descente*** sont les sommes des distances de votre point de localisation à la fin du graphique visible. S'il n'y a pas de point de localisation sur le graphique, c'est la somme de l'ensemble du graphique visible à l'écran (cela peut arriver lorsque vous modifiez l'échelle et que la localisation sort du graphique).|
| **Montée** – affiche la somme de toutes les distances avec une altitude croissante de votre point de localisation à la fin du graphique visible ou pour la section sélectionnée de l'itinéraire sans le point de localisation visible à l'écran. |
| ![schéma de montée](@site/static/img/widgets/sch_uphill_1.png) ![schéma de montée](@site/static/img/widgets/sch_uphill_2.png)|
| **Descente** – affiche la somme de toutes les distances avec une altitude décroissante de votre point de localisation à la fin du graphique visible ou pour la section sélectionnée de l'itinéraire sans le point de localisation visible à l'écran.|
| ![schéma de descente](@site/static/img/widgets/sch_downhill_1.png) ![schéma de descente](@site/static/img/widgets/sch_downhill_2.png)|
|La ***pente*** est le rapport du chemin à l'horizontale, où zéro indique l'horizontalité et le nombre de degrés indique un degré de pente plus élevé ou plus raide.|
| **Pente** – affiche la pente maximale de la route en pourcentage de votre point de localisation à la fin du graphique visible ou pour la section sélectionnée de l'itinéraire sans le point de localisation visible à l'écran. |
|![schéma de pente](@site/static/img/widgets/sch_grade_1.png) ![schéma de pente](@site/static/img/widgets/sch_grade_2.png)|


## Widget de relèvement {#bearing-widget}

Le relèvement est la direction vers une cible en dehors de votre véhicule, telle qu'une destination ou un point d'origine. Un relèvement peut être *relatif* (selon votre cap) ou *magnétique* (selon la boussole). Par exemple, un relèvement magnétique de 180° est la direction vers le sud, et un relèvement relatif de 180° est directement derrière vous. Les points cardinaux sont les quatre directions principales de la boussole. Ce sont le Nord (*N* - 0° ou 360°), l'Est (*E* - 90°), le Sud (*S* - 180°) et l'Ouest (*O* - 270°).

![Widget d'enregistrement de trajet](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget d'enregistrement de trajet](@site/static/img/widgets/bearing_widget.png) ![Widget d'enregistrement de trajet](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget d'enregistrement de trajet](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="shared_string_bearing"/>* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate ios="true" ids="shared_string_bearing"/>* |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | **Android :** Vous pouvez modifier le format d'affichage des données pour les unités angulaires : *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
| | **iOS :** Vous pouvez modifier le format d'affichage des données pour les unités angulaires : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |


#### Comment ça marche {#how-it-works}

Pour afficher le relèvement, un **point cible** doit être sélectionné. Si un point de **destination** (ou le **premier point intermédiaire**, s'il y en a un) est sélectionné pour la navigation, il sera utilisé comme point cible. Sinon, le **marqueur sélectionné le plus haut** sera utilisé.

- Le [relèvement relatif](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) est l'angle entre votre direction de mouvement vers l'avant et le point cible. La **direction de mouvement vers l'avant** est soit la **direction de votre mouvement** obtenue à partir des capteurs GPS, soit si vous êtes debout **où vous avez pointé votre appareil** (c'est-à-dire l'orientation de votre appareil selon sa boussole magnétique). Exemple : Un objet avec un relèvement relatif de 0° est directement devant vous et un objet avec un relèvement relatif de 180° est directement derrière vous. Le **relèvement relatif** est l'angle entre votre direction vers l'avant et le point cible.

- Le [relèvement magnétique](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) est l'angle horaire (horizontal) entre le nord magnétique et le point cible observé depuis votre position. Vous devez suivre cette valeur de boussole magnétique pour atteindre votre cible. Exemple : Si le **relèvement magnétique** est affiché comme 0° M, vous devez vous déplacer strictement vers le nord magnétique pour atteindre le point cible.

- Le [relèvement vrai](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) est exprimé comme l'angle horizontal entre le méridien géographique et une ligne sur Terre. Plus précisément, le **relèvement vrai d'un point** est l'angle mesuré en degrés dans le sens des aiguilles d'une montre à partir de la ligne du Nord Vrai. Le logiciel OsmAnd vous montrera le relèvement vrai et le cap dans notre interface conviviale, ce qui vous permettra de prendre la bonne décision rapidement.

### Navigation le long de la loxodromie {#navigation-along-the-rhumb-line}

- **Relèvement relatif**. Si vous vous en tenez à un relèvement relatif de 0 degré et que vous avancez, vous arriverez au point de destination, mais pas par l'itinéraire le plus court ( [Loxodromie](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Relèvement magnétique**. Si vous alignez la boussole de votre bateau/véhicule avec la valeur du widget et que vous avancez, vous arriverez à votre destination, mais pas par l'itinéraire le plus court ( [Loxodromie](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Widget de relèvement magnétique relatif](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- En appuyant : Bascule entre le relèvement relatif ou le relèvement magnétique (avec "M") -->


## Points de navigation {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

Le groupe de widgets *Point de navigation* affiche la distance restante jusqu'à votre destination, le point intermédiaire, l'heure d'arrivée au point intermédiaire ou le temps de trajet pour l'itinéraire calculé, et l'heure d'arrivée estimée.

### Informations sur l'itinéraire {#route-information}


![Widget de destination](@site/static/img/widgets/route_information_widget.png)

Le widget *Informations sur l'itinéraire* fournit des données en temps réel sur l'itinéraire de navigation en cours et un moyen rapide [de gérer un itinéraire actif](../navigation/setup/route-navigation.md#start--stop-navigation). Il permet de suivre les détails clés de l'itinéraire et vous permet d'arrêter ou de reprendre la session de navigation en cours avec une interaction minimale.

**Informations affichées :**

- **Heure d'arrivée estimée (ETA)**. Affiche l'heure d'arrivée prévue à la destination finale.
- **Temps de trajet restant**. Affiche le temps estimé restant pour atteindre la destination.
- **Distance jusqu'à la destination**. Indique la distance totale restante jusqu'à la destination finale et les distances jusqu'aux points intermédiaires.

**Menu des paramètres** :

- Sélectionnez une **Vue par défaut** pour prioriser l'une des valeurs suivantes : *Heure d'arrivée estimée*, *Temps restant*, *Distance*.
- Dans **Priorité d'affichage**, choisissez entre *Destination en premier (par défaut)* ou *Intermédiaire en premier* pour prioriser les informations d'itinéraire les plus pertinentes.

> REMARQUE : Le widget n'est visible que pendant la navigation.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Ajouter un widget → <Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Ajouter un widget → Informations sur l'itinéraire* |
| En appuyant | Appuyez sur le bouton avec la flèche pour ouvrir le [panneau Démarrer/Arrêter la navigation](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Distance jusqu'à la destination {#distance-to-destination}

![Widget de destination](@site/static/img/widgets/destination_widget.png)

Le widget affiche la distance restante jusqu'au dernier point de destination lors du suivi d'un itinéraire calculé.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| En appuyant | Déplace la carte vers le point de destination. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |

### Distance jusqu'à l'intermédiaire {#distance-to-intermediate}

![Widget de destination intermédiaire](@site/static/img/widgets/intermediate_destination_widget.png)

Le widget affiche la distance jusqu'au premier point intermédiaire le long de l'itinéraire calculé. Après avoir passé les points intermédiaires, l'espace sera mis à jour vers le point intermédiaire suivant. S'il n'y a pas de points intermédiaires, le widget n'est pas affiché.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| En appuyant | **Un point intermédiaire** - déplace la carte vers le point intermédiaire. <br /> **Deux points intermédiaires ou plus** - ouvre le menu de la liste des destinations. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |

### Temps jusqu'à l'intermédiaire {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget Heure d'arrivée Temps restant](@site/static/img/widgets/arrival_time_widget_android.png) ![Widget Heure d'arrivée Temps restant](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget Heure d'arrivée Temps restant](@site/static/img/widgets/arrival_time_widget_ios.png) ![Widget Heure d'arrivée Temps restant](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

Le widget affiche l'*Heure d'arrivée* ou le *Temps restant* jusqu'au premier point intermédiaire. Pendant la navigation, l'heure est constamment mise à jour, et dès qu'un point intermédiaire est passé, l'heure sera mise à jour vers le prochain point de cheminement. Par exemple, si vous arrêtez la navigation, le *Temps restant* restera inchangé et l'*Heure d'arrivée* sera égale au *Temps restant* plus l'*Heure actuelle*.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| En appuyant | Bascule entre l'*Heure d'arrivée* et le *Temps restant* et inversement. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


### Temps jusqu'à la destination {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget Heure d'arrivée et heure intermédiaire](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget Heure d'arrivée et heure intermédiaire](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Le widget affiche l'*Heure d'arrivée* ou le *Temps restant* jusqu'au dernier point de destination. L'heure est constamment mise à jour pendant la navigation et est égale au temps d'itinéraire depuis votre position actuelle.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| En appuyant | Bascule entre l'*Heure d'arrivée* et le *Temps restant* et inversement. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


## Limite de vitesse {#speed-limit}

![Widget de limite de vitesse](@site/static/img/widgets/speed_limit_widget_2.png)

Le widget *Limite de vitesse* affiche la limite de vitesse actuelle basée sur les données cartographiques de votre itinéraire.

- Les données proviennent du [projet OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Le widget fonctionne en modes de navigation passif et actif.
- Si les données de limite de vitesse ne sont pas disponibles pour une route ou une zone spécifique, *le widget n'apparaîtra pas*.

> REMARQUE : Assurez-vous que vos [cartes sont à jour](../personal/maps-resources.md#updates) et que vous avez téléchargé toutes les données régionales nécessaires pour accéder aux dernières informations sur les limites de vitesse.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_max_speed"/>* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_max_speed"/>* |
| En appuyant | Pas de changements |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


## Manœuvres d'itinéraire {#route-maneuvers}

![Widget des prochains virages](@site/static/img/widgets/next_turns_widget.png)

Cet ensemble de widgets de navigation est activé pendant la navigation et affiche des informations sur la distance jusqu'à la prochaine manœuvre.

| | |
|:------------|:------------|
| Activer | **Android :** *Menu → Configurer l'écran → Panneau gauche/droit → Ajouter un widget → Manœuvres d'itinéraire → Prochain virage, Prochain virage (petit), Deuxième prochain virage* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Panneau gauche/droit → Ajouter un widget → Manœuvres d'itinéraire → Prochain virage, Prochain virage (petit), Deuxième prochain virage* |
| En appuyant | Si les [invites vocales](../navigation/guidance/voice-navigation.md) sont activées, la prochaine manœuvre et la distance jusqu'à celle-ci sont prononcées. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


### Prochain virage {#next-turn}

![Widget des prochains virages](@site/static/img/widgets/next_turns_widgets_andr.png)

Les widgets *Manœuvres d'itinéraire* contiennent des informations sur :

- **Prochain virage** - le prochain virage avec une grande flèche représentant la manœuvre et avec des données sur la distance jusqu'à celle-ci.
- **Prochain virage (petit)** - le prochain virage avec une petite flèche représentant la manœuvre et avec des données de distance à côté de la flèche.
- **Deuxième prochain virage** - le prochain virage après le premier virage, qui est activé s'il est à portée d'approche.

| | |
|:------------|:------------|
| Activer | **Android :** *Menu → Configurer l'écran → Panneau gauche/droit → Ajouter un widget → Prochain virage, Prochain virage (petit), Deuxième prochain virage* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Panneau gauche/droit → Ajouter un widget → Prochain virage, Prochain virage (petit), Deuxième prochain virage* |
| En appuyant | Si les [invites vocales](../navigation/guidance/voice-navigation.md) sont activées, la prochaine manœuvre et la distance jusqu'à celle-ci sont prononcées. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


### Invites de couleur pour le prochain virage {#color-prompts-for-next-turn}

Ce tableau indique le temps approximatif jusqu'à l'activation des invites et l'indication de couleur correspondante des flèches pour effectuer la manœuvre. Pour plus d'informations, consultez la [documentation technique](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) ou l'article [Invites vocales](../navigation/guidance/voice-navigation.md).

| Couleur | ~ Temps de déclenchement | Distance | Type d'invite |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Vert | 5 secondes | Proche | Tourner maintenant |
| 🟡 Jaune | 20 secondes | Approche | Tourner dans `x` m |
| ⚪ Gris | > 100 secondes | Lointain | Préparer à tourner |


## Voies {#lanes}

![Widgets de voies](@site/static/img/widgets/lanes_widget.png)

Le widget **Voies** met en évidence la voie actuelle lorsque la navigation est active et affiche la disposition des voies pour la route réelle lorsque la navigation est passive. Les données proviennent du [projet OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="route_guidance"/> → Ajouter un widget → <Translate android="true" ids="show_lanes"/>* |
| | **iOS :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Ajouter un widget → <Translate android="true" ids="show_lanes"/>* |
| En appuyant | Pas de changements |

### Invites de couleur pour les voies {#color-prompts-for-lanes}

Affiche un widget par paramètres de temps d'approche. La couleur de la voie est associée aux [invites vocales](../navigation/guidance/voice-navigation.md) et au temps restant pour effectuer la manœuvre.

| Couleur | ~ Temps de déclenchement | Distance | Type d'invite |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Vert | 5 secondes | Proche | [Tourner maintenant](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 Jaune | 20 secondes | Approche | [Tourner dans X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |


## Guidage d'itinéraire {#route-guidance}

<InfoAndroidOnly />

![widget de guidage d'itinéraire](@site/static/img/widgets/route_guidence_widgets_andr.png)

Fournit un guidage d'itinéraire en temps réel, y compris la distance jusqu'au prochain virage, le nom de la route, le nom de la rue actuelle et les informations sur les voies. Les widgets sont actifs pendant la navigation.

Les widgets *Guidage d'itinéraire* contiennent des informations sur :

- [Voies](#lanes) - affiche l'emplacement actuel des voies routières et met en évidence celles sur lesquelles vous devez rouler.
- **Prochain virage** - le prochain virage avec une grande flèche représentant la manœuvre et avec des données sur la distance jusqu'à celle-ci.
- **Deuxième prochain virage** est le prochain virage après le premier virage, qui est activé s'il est à portée d'approche.

| | |
|:------------|:------------|
| Activer | **Android :** *Menu → Configurer l'écran → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Ajouter un widget → Voie, Prochain virage, Deuxième prochain virage* |
| En appuyant | **Prochain virage** : Si les [invites vocales](../navigation/guidance/voice-navigation.md) sont activées, la prochaine manœuvre et la distance jusqu'à celle-ci sont prononcées. <br/> **Voie** : Pas de changements. |
| Appui long | **Prochain virage** : Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) <br/> **Voie** : Pas de changements. |


## Widget d'alerte {#alert-widget}

![Widgets d'informations d'alerte](@site/static/img/widgets/alert_information_widget.png)

Le **widget d'alerte** combine plusieurs types d'alertes qui sont affichées dans le coin inférieur gauche pendant que vous naviguez.

- Vous avez la possibilité d'activer et de désactiver des alertes telles que *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* et *<Translate android="true" ids="show_tunnels"/>*. Les autres alertes sont actives par défaut si le widget est activé.

- Pour le type d'alerte *Limite de vitesse*, vous pouvez ajuster la valeur <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) dans les paramètres d'invite vocale pour mieux correspondre à la vitesse du véhicule et à la vitesse GPS.

- La plupart des alertes sont affichées à l'écran et annoncées par invite vocale pendant 15 secondes, ainsi que le temps de déclenchement pour passer un point de cheminement, un point favori ou un POI. En savoir plus [ici](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Activer | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
| | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Types d'alerte {#alert-types}

Les types d'alerte ont une conception visuelle différente, qui dépend de la **<Translate android="true" ids="driving_region"/>** et peut être configurée via *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd ne vise pas à représenter des panneaux de signalisation 100 % identiques, mais souligne certaines similitudes.

| | | |
|:------------|:------------|:------------|
| Nom | Description | Icône |
| *<Translate android="true" ids="show_traffic_warnings"/>* | Le [calmement du trafic](https://en.wikipedia.org/wiki/Traffic_calming) utilise la conception physique et d'autres mesures pour améliorer la sécurité des automobilistes, des piétons et des cyclistes. | ![Widgets d'alerte de calmement du trafic](@site/static/img/widgets/warnings_traffic_calming.png) ![Widgets d'alerte de calmement du trafic aux États-Unis](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | Un [passage piéton](https://en.wikipedia.org/wiki/Pedestrian_crossing) (principalement en anglais britannique) ou un passage clouté est un endroit désigné pour que les piétons traversent une route, une rue ou une avenue. OsmAnd affiche l'alerte du passage piéton non contrôlé. | ![Widgets d'alerte de calmement du trafic](@site/static/img/widgets/warnings_pedestrian.png) ![Widgets d'alerte de calmement du trafic aux États-Unis](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | Dans la plupart des pays, les [limites de vitesse routières](https://en.wikipedia.org/wiki/Speed_limit) fixent la vitesse maximale, moyenne ou minimale légale à laquelle les véhicules routiers peuvent circuler sur un tronçon de route donné. Dans OsmAnd, l'alerte est affichée lorsque vous dépassez la vitesse. Vous pouvez définir les paramètres de dépassement de vitesse (0, 5, 10.. km/h). ![Widgets d'alerte de vitesse excessive](@site/static/img/widgets/ex_warning_speed.png) | ![Widgets d'alerte de limite de vitesse](@site/static/img/widgets/warnings_limit.png) ![Widgets d'alerte de limite de vitesse au Canada](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Widgets d'alerte de limite de vitesse aux États-Unis](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Un tunnel est un passage souterrain, passant sous une montagne, une rivière ou une zone urbaine congestionnée. Dans OsmAnd, l'alerte *Tunnels* contient des informations sur la longueur du tunnel. Si vous êtes dans un tunnel, elle affiche la distance jusqu'à la fin du tunnel. ![Widgets d'alerte de tunnel excessive](@site/static/img/widgets/ex_warning_tunnel.png) | ![Widgets d'alerte de tunnel](@site/static/img/widgets/warnings_tunnel.png) ![Widgets d'alerte de tunnel aux États-Unis](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | Les [caméras de contrôle du trafic](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) et les [radars](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) enregistrent les infractions routières, y compris les excès de vitesse, les feux rouges grillés et d'autres types de comportements illégaux. <br />**REMARQUE :** Les alertes de radars sont interdites ou illégales dans certains pays. Pour [supprimer complètement les radars](../personal/global-settings.md#legal) d'OsmAnd, allez dans le menu principal *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>* | ![Widgets d'alerte de calmement du trafic](@site/static/img/widgets/warnings_speed_camera.png) |
| *<Translate android="true" ids="traffic_warning_stop"/>* | Un [panneau stop](https://en.wikipedia.org/wiki/Stop_sign) est un panneau de signalisation conçu pour avertir les conducteurs qu'ils doivent s'arrêter complètement et s'assurer que l'intersection est dégagée de véhicules et de piétons avant de continuer après le panneau. | ![Widgets d'alerte stop](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Cet avertissement signifie qu'il y a un [passage à niveau](https://en.wikipedia.org/wiki/Crossbuck) devant. | ![Widgets d'alerte de chemins de fer](@site/static/img/widgets/warnings_railways.png) ![Widgets d'alerte de chemins de fer au Canada](@site/static/img/widgets/warnings_railways_ca.png) ![Widgets d'alerte de chemins de fer aux États-Unis](@site/static/img/widgets/warnings_railways_us.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Cet avertissement indique qu'un contrôle frontalier est à venir.| ![Widgets d'alerte de contrôle frontalier](@site/static/img/widgets/warnings_border_control.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | Les [symboles de danger ou symboles d'avertissement](https://en.wikipedia.org/wiki/Hazard_symbol) sont des symboles reconnaissables conçus pour avertir des matériaux, lieux ou objets dangereux, y compris les courants électriques, les poisons et la radioactivité. | ![Widgets d'alerte de danger](@site/static/img/widgets/warnings_hazard.png) ![Widgets d'alerte de danger aux États-Unis](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Cet avertissement indique qu'un péage pour une route à péage est à venir. ![Widgets de péage d'alerte](@site/static/img/widgets/ex_toll_booth.png) | ![Widgets de limite de vitesse d'alerte](@site/static/img/widgets/warnings_limit.png) |


## Nom de la rue {#street-name}

Le widget Nom de la rue affiche **le nom de la rue actuelle** avec une flèche droite, ou **le nom de la prochaine rue** avec la manœuvre à effectuer. Le nom de la rue se compose généralement d'un panneau d'autoroute, d'un [nom](https://wiki.openstreetmap.org/wiki/Key:name), d'une [référence](https://wiki.openstreetmap.org/wiki/Key:ref), d'une [référence internationale](https://wiki.openstreetmap.org/wiki/Key:int_ref) et d'une [destination](https://wiki.openstreetmap.org/wiki/Key:destination). Le passage du nom de la rue actuelle au nom de la prochaine rue se produit lorsque vous approchez de l'endroit où vous souhaitez effectuer la manœuvre (~20 secondes), similaire à l'invite vocale [Tourner dans X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Lorsque vous roulez sur une rue ou une autoroute, le widget affiche le nom ou la désignation de la rue (route) actuelle avec une flèche bleue.

  ![Widget POI du nom de la rue_2](@site/static/img/widgets/street_name_widget_2.png)

- Lorsque vous changez de direction, le widget affiche le schéma de la manœuvre et le nom (désignation) de la rue (route) vers laquelle vous devez tourner.

  ![Widget POI du nom de la rue](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Ajouter un widget → <Translate android="true" ids="map_widget_top_text"/>* |
| | **iOS :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Ajouter un widget → <Translate android="true" ids="map_widget_top_text"/>* |
| En appuyant | Pas de changements |


## Approche des POI / Favoris {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Approche des POI/Favoris Android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Approche des POI/Favoris iOS](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

Le widget **Approche des POI/Favoris/Points de cheminement** est combiné avec [Nom de la rue](#street-name) et affiche l'approche et le passage des points d'intérêt, des points de cheminement de la trace suivie et des favoris le long de l'itinéraire.

Il affiche le **nom**, l'**icône du point** et 2 **distances** :

- La **distance d'itinéraire** (en haut) affiche la distance à parcourir en suivant l'itinéraire.
- La **distance de déviation** est une distance en ligne droite du point d'itinéraire le plus proche au point lui-même.

**iOS** - En plus de la distance jusqu'au point de cheminement le plus proche, le côté (gauche ou droit) de l'itinéraire sur lequel se trouve le point de cheminement est également affiché.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu"/> → Démarrer la navigation → bouton crayon* |
| En appuyant | Pas de changements |


## Articles connexes {#related-articles}

- [Configurer l'écran](./configure-screen.md)
- [Boutons de la carte](./map-buttons.md)
- [Widgets d'information](./info-widgets.md)
- [Widgets de navigation](./nav-widgets.md)
- [Règle de rayon et règle](./radius-ruler.md)
- [Widgets de marqueurs](./markers.md)
- [Action rapide](./quick-action.md)

> *Dernière mise à jour : avril 2025*