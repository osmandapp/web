---
source-hash: e574b157e1460483991973a8f0aa82032a697bf0c8250d5dbada1a787ff155e0
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

Les widgets de navigation sont activés pendant la navigation pour afficher des informations telles que la distance, l'heure d'arrivée ou le temps restant, les prochains virages, le relèvement, le nom de la rue actuelle, les informations sur les voies, la vitesse maximale, les alertes d'approche, les POI et les points de cheminement.

![Navigational widgets all](@site/static/img/widgets/navigational_widgets_all.png)


## Navigation active et passive {#active-and-passive-navigation}

Les widgets de navigation dans OsmAnd sont conçus pour améliorer les modes de navigation **actif** et **passif**. Ces widgets fournissent des informations précieuses telles que les directions de l'itinéraire, les détails de la route et les limitations de vitesse, en fonction du **profil de navigation** sélectionné.

#### Navigation active {#active-navigation}

- **Exigences :**
  - Définir une **destination**.
  - Calculer l'**itinéraire** en utilisant la fonction *Itinéraire*.
  - **Démarrer** la navigation (le guidage vocal est facultatif).
  - Disponible uniquement lors du déplacement le long de l'itinéraire.

- **Widgets pris en charge :**
  - Tous les **widgets de navigation** sont disponibles.

- **Avantages clés :**
  - Fournit des **instructions virage par virage**, un **guidage sur les voies** et une **heure d'arrivée estimée (ETA)**.
  - Assure des mises à jour précises et dynamiques pendant le trajet.

#### Navigation passive {#passive-navigation}

- **Comment ça marche :**
  - Aucune destination n'est nécessaire.
  - Fonctionne automatiquement lorsque vous sélectionnez un **profil de navigation** (par exemple, *Conduite*, *Vélo*).

- **Fonctionnalité :**
  - Tente de déterminer la route que vous suivez à l'aide des données GPS.
  - Affiche des **informations de base sur la route**, telles que le [nom de la rue](#street-name), les [informations sur les voies](#lanes), la [vitesse maximale](#speed-limit).

- **Limitations :**
  - Certaines fonctionnalités avancées peuvent ne pas fonctionner correctement sans une destination définie.
  - Les informations fournies peuvent ne pas toujours être **précises**, en particulier sur les réseaux routiers complexes.

> **NOTE.** *Gardez à l'esprit que le profil **Parcourir la carte** ne prend pas en charge les widgets de navigation dans aucun des deux modes. Passez à un **profil de navigation** pertinent pour activer ces fonctionnalités.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Widget d'altitude {#elevation-widget}

<InfoAndroidOnly/>  

:::note
  
<ProFeature/> Ce widget ne peut être utilisé qu'avec la fonctionnalité Pro pour les <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">abonnés OsmAnd Pro</a>.

:::

Le widget d'altitude affiche un graphique avec l'altitude et la pente de votre itinéraire de navigation et votre position actuelle sur ce graphique avec l'altitude et la pente actuelles. Le graphique est tracé sur deux axes. L'axe des X représente la distance de votre itinéraire. L'axe des Y représente l'altitude, la valeur dépend du relief, et la pente est affichée en pourcentage.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Elevation widget](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interactions avec le graphique {#interactions-with-the-graph}

- *Zoom avant/arrière*. Par défaut, le graphique montre l'itinéraire depuis la position actuelle jusqu'à 10 km en avant. Vous pouvez utiliser le [mouvement à deux doigts](../map/interact-with-map.md#gestures) pour zoomer avant et arrière pour une vue plus détaillée des changements d'altitude sur votre itinéraire. Vous pouvez également déplacer le graphique vers la droite, en avant sur l'itinéraire, et en arrière jusqu'à la position actuelle.
- *Placer un point sur le graphique*. Si vous voulez voir l'altitude et la valeur en degrés à un point particulier en avant sur votre itinéraire, vous pouvez toucher n'importe où sur le graphique et un pointeur avec les valeurs apparaîtra.


#### Contenu {#whats-in}

Lorsque vous sélectionnez un itinéraire et appuyez sur le bouton **Démarrer**, la carte s'ouvre avec votre position actuelle, l'itinéraire et le widget en bas de l'écran. Le widget contient le graphique et des informations sur la *Montée*, la *Descente*, la *Pente*, la distance, l'altitude et l'angle de la pente. Vous pouvez sélectionner l'*échelle optimale* et voir tous les obstacles possibles sur votre itinéraire.

- Toutes les valeurs sont indiquées soit pour l'ensemble de l'itinéraire, soit uniquement pour l'intervalle sélectionné en mettant le graphique à l'échelle.
- Lisez à propos de la [licence pour les données MNE](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) utilisées par OsmAnd pour déterminer l'altitude.

|  |
|:------------|
| ***Épingle de localisation*** |
| Votre ***Position actuelle*** sur le graphique inclut une icône de localisation, l'altitude et la valeur en pourcentage de la pente. Le côté droit du widget contient l'altitude et le gradient les plus élevés, leur valeur moyenne et la valeur la plus basse sur la section de l'itinéraire sélectionnée visible sur le graphique. |
| ![point](@site/static/img/widgets/sch_1-1.png)|
| ***Informations supplémentaires*** |
| Le côté droit du widget contient des données sur l'altitude et la pente les plus élevées, la valeur moyenne pour les deux, et l'altitude et la pente les plus basses sur la section de l'itinéraire sélectionnée visible sur le graphique. |
|  ![data](@site/static/img/widgets/sch_1-2.png)|
|Les valeurs de ***Montée*** et ***Descente*** sont les sommes des distances depuis votre point de localisation jusqu'à la fin du graphique visible. S'il n'y a pas de point de localisation sur le graphique, alors c'est la somme de tout le graphique visible à l'écran (cela peut se produire lorsque vous changez l'échelle et que la localisation sort du graphique).|
| **Montée** – montre la somme de toutes les distances avec une altitude croissante depuis votre point de localisation jusqu'à la fin du graphique visible ou pour la section de l'itinéraire sélectionnée sans le point de localisation visible à l'écran. |
| ![uphill scheme](@site/static/img/widgets/sch_uphill_1.png) ![uphill scheme](@site/static/img/widgets/sch_uphill_2.png)|  
| **Descente** – montre la somme de toutes les distances avec une altitude décroissante depuis votre point de localisation jusqu'à la fin du graphique visible ou pour la section de l'itinéraire sélectionnée sans le point de localisation visible à l'écran.|
| ![downhill scheme](@site/static/img/widgets/sch_downhill_1.png) ![downhill scheme](@site/static/img/widgets/sch_downhill_2.png)|  
|***Pente*** est le rapport du chemin à l'horizontale, où zéro indique l'horizontalité et le nombre de degrés indique un degré de pente plus élevé ou plus raide.|
| **Pente** – montre la pente maximale de la route en pourcentage depuis votre point de localisation jusqu'à la fin du graphique visible ou pour la section de l'itinéraire sélectionnée sans le point de localisation visible à l'écran. |
|![grade scheme](@site/static/img/widgets/sch_grade_1.png) ![grade scheme](@site/static/img/widgets/sch_grade_2.png)|


## Widget de relèvement {#bearing-widget}
  
Le relèvement est la direction vers une cible en dehors de votre véhicule, comme une destination ou un point d'origine. Un relèvement peut être *Relatif* (selon votre cap) ou *Magnétique* (selon la boussole). Par exemple, un relèvement magnétique de 180° est la direction vers le sud, et un relèvement relatif de 180° est directement derrière vous. Les points cardinaux sont les quatre directions principales de la boussole. Ce sont le Nord (*N* - 0° ou 360°), l'Est (*E* - 90°), le Sud (*S* - 180°) et l'Ouest (*O* - 270°).

![Trip recording widget](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trip recording widget](@site/static/img/widgets/bearing_widget.png) ![Trip recording widget](@site/static/img/widgets/bearing_widget_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Trip recording widget](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>  → Choisir un panneau → Ajouter un widget →  <Translate ios="true" ids="shared_string_bearing"/>* |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | **Android :** Vous pouvez changer le format d'affichage des données pour les unités angulaires : *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS :** Vous pouvez changer le format d'affichage des données pour les unités angulaires : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |  


#### Comment ça marche {#how-it-works}

Pour afficher le relèvement, un **point cible** doit être sélectionné. Si un point de **destination** (ou le **premier point intermédiaire**, s'il y en a un) est sélectionné pour la navigation, il sera utilisé comme point cible. Sinon, le **marqueur sélectionné le plus haut** sera utilisé.

- Le [relèvement relatif](https://fr.wikipedia.org/wiki/Gisement_(navigation)) est l'angle entre votre direction de mouvement vers l'avant et le point cible. La **direction de mouvement vers l'avant** est soit la **direction de votre mouvement** obtenue à partir des capteurs GPS, soit, si vous êtes à l'arrêt, **la direction vers laquelle vous avez pointé votre appareil** (c'est-à-dire l'orientation de votre appareil selon sa boussole magnétique). Exemple : Un objet avec un relèvement relatif de 0° est directement devant vous et un objet avec un relèvement relatif de 180° est directement derrière vous. Le **relèvement relatif** est l'angle entre votre direction vers l'avant et le point cible.

- Le [relèvement magnétique](https://fr.wikipedia.org/wiki/Gisement_(navigation)#Rel%C3%A8vement_magn%C3%A9tique) est l'angle (horizontal) dans le sens des aiguilles d'une montre entre le nord magnétique et le point cible observé depuis votre position. Vous devez suivre cette valeur de boussole magnétique pour atteindre votre cible. Exemple : Si le **relèvement magnétique** est affiché comme 0° M, vous devez vous déplacer strictement vers le nord magnétique pour atteindre le point cible.

- Le [relèvement vrai](https://fr.wikipedia.org/wiki/Gisement_(navigation)#Utilisations) est exprimé comme l'angle horizontal entre le méridien géographique et une ligne sur la Terre. Spécifiquement, le **relèvement vrai d'un point** est l'angle mesuré en degrés dans le sens des aiguilles d'une montre à partir de la ligne du Nord vrai. Le logiciel OsmAnd vous montrera le relèvement vrai et le cap dans notre interface conviviale, vous facilitant la prise de décision précoce.

### Navigation le long de la loxodromie {#navigation-along-the-rhumb-line}

- **Relèvement relatif**. Si vous vous en tenez à un relèvement relatif de 0 degré et avancez, vous arriverez au point de destination, mais pas par le chemin le plus court ([Loxodromie](https://fr.wikipedia.org/wiki/Loxodromie)).
- **Relèvement magnétique**. Si vous alignez la boussole de votre bateau/véhicule avec la valeur du widget et que vous vous dirigez vers l'avant, vous arriverez à votre destination, mais pas par le chemin le plus court ([Loxodromie](https://fr.wikipedia.org/wiki/Loxodromie)).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Points de navigation {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

Le groupe de widgets *Point de navigation* affiche la distance restante jusqu'à votre destination, le point intermédiaire, l'heure d'arrivée au point intermédiaire ou le temps de trajet pour l'itinéraire calculé, et l'heure d'arrivée estimée.

### Informations sur l'itinéraire {#route-information}


![Destination widget](@site/static/img/widgets/route_information_widget.png)  

Le widget *Informations sur l'itinéraire* fournit des données en temps réel sur l'itinéraire de navigation en cours et un moyen rapide de [gérer un itinéraire actif](../navigation/setup/route-navigation.md#start--stop-navigation). Il aide à suivre les détails clés de l'itinéraire et vous permet d'arrêter ou de reprendre la session de navigation actuelle avec une interaction minimale.

**Informations affichées :**

- **Heure d'arrivée estimée (ETA)**. Affiche l'heure d'arrivée prévue à la destination finale.
- **Temps de trajet restant**. Affiche le temps estimé restant pour atteindre la destination.
- **Distance jusqu'à la destination**. Indique la distance totale restante jusqu'à la destination finale et les distances jusqu'aux points intermédiaires.

**Menu des paramètres** :

- Sélectionnez une **Vue par défaut** pour prioriser l'une des valeurs suivantes : *Heure d'arrivée estimée*, *Temps restant*, *Distance*.
- Dans **Priorité d'affichage**, sélectionnez entre *Destination en premier (par défaut)* ou *Intermédiaire en premier* pour prioriser les informations d'itinéraire les plus pertinentes.

> NOTE : Le widget n'est visible que pendant la navigation.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Ajouter un widget →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Ajouter un widget  →Informations sur l'itinéraire* |
| Par appui | Appuyez sur le bouton avec la flèche pour ouvrir le panneau [Démarrer/Arrêter la navigation](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Distance jusqu'à la destination {#distance-to-destination}

![Destination widget](@site/static/img/widgets/destination_widget.png)  

Le widget affiche la distance restante jusqu'au dernier point de destination en suivant un itinéraire calculé.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Par appui | Déplace la carte vers le point de destination. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |

### Distance jusqu'à l'intermédiaire {#distance-to-intermediate}

![Intermediate destination widget](@site/static/img/widgets/intermediate_destination_widget.png)

Le widget affiche la distance jusqu'au premier point intermédiaire le long de l'itinéraire calculé. Après avoir passé les points intermédiaires, l'espace sera mis à jour pour le prochain point intermédiaire. S'il n'y a pas de points intermédiaires, le widget n'est pas affiché.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Par appui | **Un point intermédiaire** - déplace la carte vers le point intermédiaire. <br /> **Deux points intermédiaires ou plus** - ouvre le menu de la liste des destinations. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |

### Temps jusqu'à l'intermédiaire {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_android.png)  ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_ios.png)  ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_ios.png)  

</TabItem>

</Tabs>  

Le widget affiche l'*Heure d'arrivée* ou le *Temps restant* jusqu'au premier point intermédiaire. Pendant la navigation, le temps est constamment mis à jour, et dès qu'un point intermédiaire est passé, le temps sera mis à jour pour le prochain point de cheminement. Par exemple, si vous arrêtez la navigation, le *Temps restant* restera inchangé et l'*Heure d'arrivée* sera égale au *Temps restant* plus l'*Heure actuelle*.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget →  <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Par appui | Bascule entre *Heure d'arrivée* et *Temps restant* et inversement. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


### Temps jusqu'à la destination {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Le widget affiche l'*Heure d'arrivée* ou le *Temps restant* jusqu'au dernier point de destination. Le temps est constamment mis à jour pendant la navigation et est égal au temps de l'itinéraire depuis votre position actuelle.

| | |
|:------------|:------------|
| Activer |  **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Par appui | Bascule entre *Heure d'arrivée* et *Temps restant* et inversement. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |  


## Limitation de vitesse {#speed-limit}

![Speed limit widget](@site/static/img/widgets/speed_limit_widget_2.png)

Le widget *Limitation de vitesse* affiche la limitation de vitesse actuelle en fonction des données cartographiques de votre itinéraire.

- Les données sont extraites du [projet OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Le widget fonctionne en mode de navigation passive et active.
- Si les données de limitation de vitesse ne sont pas disponibles pour une route ou une zone spécifique, *le widget n'apparaîtra pas*.

> NOTE : Assurez-vous que vos [cartes sont à jour](../personal/maps-resources.md#updates) et que vous avez téléchargé toutes les données régionales nécessaires pour accéder aux dernières informations sur les limitations de vitesse.

| |  |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Par appui | Pas de changement |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


## Guidage d'itinéraire {#route-guidance}


![Next turns widget](@site/static/img/widgets/next_turns_widget.png)

Fournit un guidage d'itinéraire en temps réel, y compris la distance jusqu'au prochain virage, le nom de la route, le nom de la rue actuelle et les informations sur les voies. Les widgets sont actifs pendant la navigation.

Les widgets de *Guidage d'itinéraire* contiennent des informations sur :

- [Voies](#lanes) - montre l'emplacement actuel des voies de circulation et met en évidence celles sur lesquelles vous devez conduire. (uniquement pour les _panneaux Haut / Bas_)
- [Prochain virage](#next-turn) - le prochain virage avec une grande flèche représentant la manœuvre et avec des données sur la distance jusqu'à celui-ci.
- [Prochain virage (petit)](#next-turn) - le prochain virage avec une petite flèche représentant la manœuvre et avec des données de distance à côté de la flèche. (uniquement pour les _panneaux Gauche / Droite_)
- [Deuxième prochain virage](#next-turn) - le virage suivant après le premier virage, qui est activé s'il se trouve à une distance d'approche.

| | |
|:------------|:------------|
| Activer      | **Android :** *Menu → Configurer l'écran →  Panneau Gauche / Droite / Haut / Bas → Guidage d'itinéraire → Ajouter un widget → Voie, Prochain virage, Deuxième prochain virage*  |
|      | **iOS :** *Menu → Configurer l'écran →  Panneau Gauche / Droite / Haut / Bas → Guidage d'itinéraire → Ajouter un widget → Voie, Prochain virage, Deuxième prochain virage*   |
| Par appui  | **Prochain virage** : Si les [instructions vocales](../navigation/guidance/voice-navigation.md) sont activées, la prochaine manœuvre et la distance jusqu'à celle-ci sont prononcées. <br/> **Voie** : Pas de changement. |
| Appui long    | **Prochain virage** : Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) <br/> **Voies** : Pas de changement. |


### Prochain virage {#next-turn}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![route guidence widget](@site/static/img/widgets/route_guidence_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Approach POIs/Favorites ios](@site/static/img/widgets/route_guidence_widgets_ios.png)

</TabItem>

</Tabs>

- **Prochain virage** - le prochain virage avec une grande flèche représentant la manœuvre et avec des données sur la distance jusqu'à celui-ci.
- **Prochain virage (petit)** - le prochain virage avec une petite flèche représentant la manœuvre et avec des données de distance à côté de la flèche. (uniquement pour le _panneau Gauche / Droite_)
- **Deuxième prochain virage** - le virage suivant après le premier virage, qui est activé s'il se trouve à une distance d'approche.

### Indications de couleur pour le prochain virage {#color-prompts-for-next-turn}

Ce tableau montre le temps approximatif jusqu'à l'activation des indications et l'indication de couleur correspondante des flèches pour effectuer la manœuvre. Pour plus d'informations, consultez la [documentation technique](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) ou l'article [Instructions vocales](../navigation/guidance/voice-navigation.md).

| Couleur   | ~ Temps de déclenchement | Distance   | Type d'indication |
| :-------- | :----------------------- | :--------- | :---------------- |
| 🟢 Vert   | 5 secondes               | Proche     | Tournez maintenant |
| 🟡 Jaune  | 20 secondes              | Approche   | Tournez dans `x` m |
| ⚪ Gris   | > 100 secondes           | Éloigné    | Préparez-vous à tourner |


### Voies {#lanes}

![Lanes widgets](@site/static/img/widgets/lanes_widget.png)

Le widget **Voies** met en évidence la voie actuelle lorsque la navigation est active et affiche la disposition des voies pour la route réelle lorsque la navigation est passive. Ce widget est disponible uniquement pour les panneaux Haut et Bas. Les données sont extraites du [projet OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

### Indications de couleur pour les voies {#color-prompts-for-lanes}

Affiche un widget selon les paramètres de temps d'approche. La couleur de la voie est associée aux [instructions vocales](../navigation/guidance/voice-navigation.md) et au temps restant pour effectuer la manœuvre.

| Couleur   | ~ Temps de déclenchement | Distance    | Type d'indication |
| :-------- | :----------------------- | :---------- | :---------- |
| 🟢 Vert   | 5 secondes               | Proche      | [Tournez maintenant](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
| 🟡 Jaune  | 20 secondes              | Approche    | [Tournez dans X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |



## Widget d'alerte {#alert-widget}

![Alert information widgets](@site/static/img/widgets/alert_information_widget.png)

Le **widget d'alerte** combine plusieurs types d'alertes qui sont affichées dans le coin inférieur gauche pendant que vous naviguez.

- Vous avez la possibilité d'activer et de désactiver des alertes telles que *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* et *<Translate android="true" ids="show_tunnels"/>*. Les autres alertes sont actives par défaut si le widget est activé.

- Pour le type d'alerte *Limitation de vitesse*, vous pouvez ajuster la valeur de <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) dans les paramètres des instructions vocales pour mieux correspondre à la vitesse du véhicule et à la vitesse GPS.

- La plupart des alertes sont affichées à l'écran et annoncées par une instruction vocale pendant 15 secondes, ainsi que le temps de déclenchement pour passer un point de cheminement, un point favori ou un POI. En savoir plus [ici](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Activer | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Types d'alertes {#alert-types}

Les types d'alertes ont un design visuel différent, qui dépend de la **<Translate android="true" ids="driving_region"/>** et peut être configuré via *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd ne vise pas à représenter des panneaux de signalisation 100% identiques mais signale certaines similitudes.

| | | |
|:------------|:------------|:------------|
| Nom | Description | Icône |
| *<Translate android="true" ids="show_traffic_warnings"/>* | La [modération de la circulation](https://fr.wikipedia.org/wiki/Mod%C3%A9ration_de_la_circulation) utilise des aménagements physiques et d'autres mesures pour améliorer la sécurité des automobilistes, des piétons et des cyclistes. | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_traffic_calming.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | Un [passage piéton](https://fr.wikipedia.org/wiki/Passage_pi%C3%A9ton) est un endroit désigné pour que les piétons traversent une route, une rue ou une avenue. OsmAnd affiche l'alerte du passage piéton non contrôlé.  | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_pedestrian.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | Dans la plupart des pays, les [limitations de vitesse routière](https://fr.wikipedia.org/wiki/Limitation_de_vitesse) fixent la vitesse maximale, moyenne ou minimale légale à laquelle les véhicules routiers peuvent circuler sur un tronçon de route donné. Dans OsmAnd, l'alerte est affichée lorsque vous dépassez la vitesse. Vous pouvez définir les paramètres de dépassement de vitesse (0, 5, 10.. km/h). ![Alert ex_speed widgets](@site/static/img/widgets/ex_warning_speed.png)  | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) ![Alert speed_limit_ca widgets](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Alert speed_limit_us widgets](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Un tunnel est un passage souterrain, passant sous une montagne, une rivière ou une zone urbaine congestionnée. Dans OsmAnd, l'alerte *Tunnels* contient des informations sur la longueur du tunnel. Si vous êtes dans un tunnel, elle indique la distance jusqu'à la fin du tunnel.   ![Alert ex_tunnel widgets](@site/static/img/widgets/ex_warning_tunnel.png)  | ![Alert warnings_tunnel widgets](@site/static/img/widgets/warnings_tunnel.png)  ![Alert warnings_tunnel_us widgets](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | Les [radars de contrôle routier](https://fr.wikipedia.org/wiki/Radar_automatique_en_France) et les [radars de vitesse](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) enregistrent les infractions au code de la route, y compris les excès de vitesse, le non-respect des feux rouges et d'autres types de comportements illégaux. <br />**NOTE :** Les alertes de radars de vitesse sont interdites ou illégales dans certains pays. Pour [supprimer complètement les radars de vitesse](../personal/global-settings.md#legal) d'OsmAnd, allez dans le menu principal *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | Un [panneau stop](https://fr.wikipedia.org/wiki/Panneau_stop) est un panneau de signalisation conçu pour notifier aux conducteurs qu'ils doivent s'arrêter complètement et s'assurer que l'intersection est dégagée de véhicules et de piétons avant de continuer au-delà du panneau.  | ![Alert stop widgets](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Cet avertissement signifie qu'il y a un [passage à niveau](https://fr.wikipedia.org/wiki/Passage_%C3%A0_niveau) devant. | ![Alert warnings_railways widgets](@site/static/img/widgets/warnings_railways.png) ![Alert warnings_railways_ca widgets](@site/static/img/widgets/warnings_railways_ca.png)  ![Alert warnings_railways_us widgets](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Cet avertissement indique qu'un contrôle frontalier est à venir.| ![Alert border control widgets](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | Les [symboles de danger ou symboles d'avertissement](https://fr.wikipedia.org/wiki/Symbole_de_danger) sont des symboles reconnaissables conçus pour avertir des matières, des lieux ou des objets dangereux, y compris les courants électriques, les poisons et la radioactivité. | ![Alert warnings_hazard widgets](@site/static/img/widgets/warnings_hazard.png)  ![Alert warnings_hazard_us widgets](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Cet avertissement indique qu'un péage pour une route à péage est à venir.   ![Alert toll_booth widgets](@site/static/img/widgets/ex_toll_booth.png) | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) |


## Nom de la rue {#street-name}

Le widget Nom de la rue affiche **le nom de la rue actuelle** avec une flèche droite, ou **le nom de la prochaine rue** avec la manœuvre à effectuer. Le nom de la rue se compose généralement d'un écusson routier, d'un [nom](https://wiki.openstreetmap.org/wiki/Key:name), d'une [réf](https://wiki.openstreetmap.org/wiki/Key:ref), d'une [réf internationale](https://wiki.openstreetmap.org/wiki/Key:int_ref), et d'une [destination](https://wiki.openstreetmap.org/wiki/Key:destination).

Dans les **Paramètres** du widget, vous pouvez choisir d'afficher toujours **le nom de la rue actuelle** et de l'utiliser avec le widget [**Prochain virage**](#next-turn). Si vous activez **Informations sur le prochain virage**, le basculement entre le nom de la rue actuelle et le nom de la prochaine rue se produit lorsque vous approchez de l'endroit où vous voulez effectuer la manœuvre (~20 secondes), de la même manière que l'instruction vocale [Tournez dans X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Lorsque vous conduisez le long d'une rue ou d'une autoroute, le widget affiche le nom ou la désignation de la rue (route) actuelle avec une flèche bleue.

  ![Street name POIs widget_2](@site/static/img/widgets/street_name_widget_2.png)

- Lorsque vous changez de direction, le widget affiche le schéma de la manœuvre et le nom (désignation) de la rue (route) vers laquelle vous devez tourner.

  ![Street name POIs widget](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Ajouter un widget → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **iOS :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Ajouter un widget → <Translate android="true" ids="map_widget_top_text"/>* |
| Par appui | Pas de changement |


## Approche des POI / Favoris {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Approach POIs/Favorites android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Approach POIs/Favorites ios](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

Le widget **Approche des POI/Favoris/Points de cheminement** est combiné avec le [Nom de la rue](#street-name) et affiche les points d'intérêt, les points de cheminement de la trace suivie et les favoris approchant et passés le long de l'itinéraire.

Il affiche le **nom**, l'**icône du point**, et 2 **distances** :

- La **distance sur l'itinéraire** (en haut) affiche la distance à parcourir en suivant l'itinéraire.
- La **distance de déviation** est une distance en ligne droite du point de l'itinéraire le plus proche au point lui-même.

**iOS** - En plus de la distance jusqu'au prochain point de cheminement, le côté (gauche ou droit) de l'itinéraire sur lequel se trouve le point de cheminement est également affiché.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu"/> → Démarrer la navigation → bouton crayon* |
| Par appui | Pas de changement |


## Articles connexes {#related-articles}

- [Configurer l'écran](./configure-screen.md)
- [Boutons de la carte](./map-buttons.md)
- [Widgets d'information](./info-widgets.md)
- [Widgets de navigation](./nav-widgets.md)
- [Règle-rayon et Règle](./radius-ruler.md)
- [Widgets de marqueurs](./markers.md)
- [Action rapide](./quick-action.md)