---
source-hash: f3cf0ead71b0f41a189bc744f46669b62911117c225598bf57a98dd7d9c20d89
sidebar_position: 3
title:  Widgets d'information
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Aperçu {#overview}

Les widgets d'information vous donnent un accès rapide à des données importantes. Il peut s'agir de données sur la vitesse, la météo, la position de stationnement, des données de capteurs externes, et bien plus encore. Les widgets peuvent être configurés selon vos besoins spécifiques, en activant leur visibilité sur l'écran de l'application ou en les désactivant si nécessaire.

![Widgets d'information](@site/static/img/widgets/informational_widgets_all.png)


## Widgets d'altitude   {#altitude-widgets}

Les widgets d'altitude affichent la hauteur au-dessus du niveau de la mer de la géolocalisation actuelle et l'élévation du centre de la carte.  


### Altitude : Position actuelle   {#altitude-current-location}
  
:::note  Télécharger la correction d'altitude mondiale
Sur certains appareils Android, l'altitude peut s'afficher de manière inexacte. Pour résoudre ce problème, téléchargez une carte avec correction d'altitude.

- Allez à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Pour plus de détails, visitez [Cartes et ressources](../personal/maps-resources.md#downloads-menu).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget d'altitude Android](@site/static/img/widgets/altitude_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget d'altitude iOS](@site/static/img/widgets/altitude_widget_ios.png)  

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Activer |  **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| Par appui | Pas de changement |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menu → Paramètres → Profils d'application → Paramètres généraux → Unités et formats → Unités de longueur* |  


### Élévation : Centre de la carte {#elevation-map-center}

:::info Fonctionnalité payante
&nbsp;<ProFeature/> Pour accéder à l'utilisation du widget *Élévation : centre de la carte*, abonnez-vous à OsmAnd Pro pour [Android](../purchases/android.md#pro-features) ou [iOS](../purchases/ios.md#pro-features).  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget d'élévation Android](@site/static/img/widgets/elevation_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget d'élévation iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

Vous pouvez utiliser le widget pour connaître l'élévation du centre actuel de la carte au-dessus du niveau de la mer. Une [carte de terrain (Relief et Pente)](../plugins/topography.md#download-maps) de la zone requise est nécessaire pour afficher les informations dans le widget **Élévation : centre de la carte**.  

| | |
|:------------|:------------|
| Activer |  **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| Par appui | Pas de changement |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menu → Paramètres → Profils d'application → Paramètres généraux → Unités et formats → Unités de longueur* |


## Heure actuelle {#current-time}

![Widget de l'heure actuelle](@site/static/img/widgets/current_time_widget.png)

Ce widget affiche l'heure actuelle de votre appareil.  

| | |
|:------------|:------------|
| Activer |  **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_plain_time"/>* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_plain_time"/>* |
| Par appui | Pas de changement |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | Les paramètres de l'appareil configurent l'heure et le format. |


## Vitesse actuelle {#current-speed}

![Widget de vitesse](@site/static/img/widgets/current_speed_widget.png)  

Le widget affiche la vitesse actuelle détectée par le capteur GPS.  

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_current_speed"/>* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_current_speed"/>* |
| Par appui  | Pas de changement |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Vitesse moyenne {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de vitesse moyenne Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de vitesse moyenne iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>  

Le widget **Vitesse moyenne** calcule et affiche votre vitesse moyenne sur un intervalle de temps sélectionné sans nécessiter de navigation ou d'enregistrement de trace. Il est utile pour surveiller le respect de la vitesse sur les autoroutes ou pour suivre la vitesse moyenne pendant les dernières minutes de vélo.

1. ***Configuration du widget.***  
   Pour ajuster les paramètres, appuyez sur le bouton **Paramètres** (*Android*) ou sur le **champ du widget** (*iOS*). Les options disponibles incluent :

2. ***Intervalle de temps.***

   - La vitesse moyenne est calculée sur la base de l'intervalle de temps sélectionné, qui peut aller de **15 secondes à 60 minutes**.  

   - Le calcul est basé sur les données GPS en utilisant la formule :  
   `Vitesse moyenne = MOYENNE(LOCALISATION_GPS.vitesse)`.

3. ***Prendre en compte les arrêts.***

   **Activé** — Si la vitesse enregistrée est inférieure à 1 unité par heure, elle est ignorée, ce qui évite des baisses inutiles de la vitesse moyenne lors d'arrêts aux feux de circulation ou de courtes pauses.  

   **Désactivé** — Les arrêts sont inclus dans le calcul, ce qui signifie que de longues pauses réduiront la vitesse moyenne globale.

4. ***Réinitialiser la vitesse moyenne.***
   Vous pouvez réinitialiser le calcul de la vitesse moyenne de deux manières :

   - Appuyez longuement sur le widget pour ouvrir le [menu contextuel](../widgets/configure-screen.md#widget-context-menu), et sélectionnez *Réinitialiser la vitesse moyenne*.
   - Ouvrez les *paramètres du widget* via le [menu Configurer l'écran](../widgets/configure-screen.md#widget-settings) et sélectionnez l'option de réinitialisation.

Après la réinitialisation, la vitesse moyenne est recalculée à partir des nouvelles données GPS. Cette fonctionnalité est utile pour la surveillance de la vitesse en temps réel, comme le suivi de la vitesse dans les zones avec des **radars de vitesse moyenne**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Vitesse moyenne](@site/static/img/widgets/average_speed_widget_4.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de vitesse moyenne](@site/static/img/widgets/average_speed_widget_ios_1.png)  ![Widgets de vitesse moyenne](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Activer |  **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_average_speed"/>* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_average_speed"/>* |
| Par appui | Pas de changement |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu). <br/> Peut être utilisé pour réinitialiser la vitesse moyenne. |


## Finesse {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Widgets| Widgets à l'écran|
|:--------|:---------|
|![Finesse](@site/static/img/widgets/glide_ratio_3.png)|![Finesse](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widgets| Widgets à l'écran|
|:--------|:---------|
|![Finesse](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Finesse](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>  

Les widgets [simples](../widgets/configure-screen.md#widget-panels) de *Finesse* fournissent des informations précieuses sur la finesse pour aider à prendre des décisions éclairées lors de la planification de routes aériennes. Le widget *Finesse* dans OsmAnd vous aide à évaluer l'efficacité de votre descente ou de votre montée lors de la navigation vers un emplacement spécifique (position d'un [marqueur](../personal/markers.md) sur la carte). Il calcule la finesse comme le rapport de la distance à la différence d'altitude entre votre position actuelle et votre destination prévue. Vous pouvez en savoir plus à ce sujet [ici](https://fr.wikipedia.org/wiki/Finesse_(a%C3%A9rodynamique)).


**Utilisation des widgets :**

- *Planification de vols de plaine.* Pour les pilotes de vol à voile, le widget *Finesse vers la cible* devient un outil indispensable lors de la planification et de l'exécution de vols de plaine. Les pilotes peuvent estimer jusqu'où ils peuvent voler vers leur cible compte tenu des conditions actuelles et de la finesse requise.
- *Optimiser les montées et les descentes.* La finesse moyenne permet aux pilotes d'optimiser les montées et les descentes en fonction des conditions actuelles. Les pilotes peuvent choisir le moment optimal pour les montées afin de maximiser le temps de vol, ou pour les descentes afin d'atteindre un point cible.
- *Réagir aux conditions changeantes.* Le widget fournit des mises à jour continues de la finesse, permettant aux pilotes de réagir instantanément aux changements des conditions atmosphériques ou des itinéraires. Ils peuvent ajuster leur plan de vol pour garantir la sécurité et l'efficacité.
- *Utilisation maximale de la distance horizontale.* Connaître la finesse permet aux pilotes de maximiser l'utilisation de la distance horizontale pour se déplacer vers la cible, ce qui est particulièrement important lors de la planification de longs vols.
- *Réduction des risques*. Le widget *Finesse vers la cible* aide les pilotes à éviter les situations où atteindre la cible devient impossible en raison d'une finesse insuffisante. Cela contribue à réduire les risques et à améliorer la sécurité des vols.


**Valeurs positives et négatives :**

- Les **valeurs positives** indiquent que votre destination est à une altitude inférieure à votre position actuelle, nécessitant une descente.
- Les **valeurs négatives** indiquent que votre destination est à une altitude plus élevée, nécessitant une montée. Par exemple, "-90:1" signifie qu'après avoir parcouru une distance de 90 kilomètres, vous devez monter de 1 kilomètre pour atteindre votre destination.


**Arrondi/Formatage :**

- Valeur **≤ 0.1** :  
  - "0.05" est affiché comme "0".
- Valeur **> 0.1 et < 100** :  
  - par exemple, "50.7643" est affiché comme "50.8:1".
- Valeur **> 100 :**  
  - "102.35" est affiché comme "102:1."


### Finesse vers la cible {#glide-ratio-to-target}

- **Finesse vers la cible** indique la finesse exacte requise pour atteindre le point cible.
- **Élévation de la cible** indique l'élévation du point cible. Le [marqueur de carte](../personal/markers.md) doit être utilisé comme point cible.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → Finesse* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → Finesse* |
| Par appui | Change *Finesse vers la cible* ou *Élévation de la cible*  |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


### Finesse moyenne {#average-glide-ratio}

- **Finesse moyenne** indique la finesse moyenne pour un intervalle de temps spécifié.
- **Vitesse verticale moyenne** indique la vitesse à laquelle un objet monte ou descend sur une période donnée. Seuls les premier et dernier points de l'intervalle de temps sont pris en compte pour l'évaluation. Vous pouvez définir l'intervalle de temps pour ce widget de 15 secondes à 60 minutes. Vous devez utiliser le [marqueur de carte](../personal/markers.md) comme point cible.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → Finesse* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → Finesse* |
| Par appui | Change *Finesse moyenne* ou *Vitesse verticale moyenne*  |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


## Niveau de la batterie {#battery-level}

![Widget de niveau de batterie](@site/static/img/widgets/battery_level_widget.png)  

Le widget **Niveau de la batterie** affiche le pourcentage de batterie de votre appareil directement sur l'écran de la carte et se met à jour automatiquement au moins une fois par minute.

- **iOS 17 et versions ultérieures** — En raison de **restrictions de confidentialité**, le niveau de la batterie n'est disponible que par incréments de 5 % (par exemple, 35 %, 60 % ou 85 %). Il s'agit d'une limitation système imposée par Apple.

- Appareils **Android** — Le widget affiche le pourcentage exact de la batterie tel que rapporté par le système, sans arrondi.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_battery"/>* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_battery"/>* |
| Par appui | Pas de changement |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


## Widget Coordonnées {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget Coordonnées Android](@site/static/img/widgets/coordinates_widget_1.png) ![Widget Coordonnées Android](@site/static/img/widgets/coordinates_widget_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget Coordonnées iOS](@site/static/img/widgets/coordinates_widget_ios_2.png)  

</TabItem>

</Tabs>

OsmAnd propose deux types de widgets de coordonnées :

- **Coordonnées : centre de la carte** - affiche les coordonnées géographiques du centre actuel de la carte.
- **Coordonnées : position actuelle** - affiche les coordonnées géographiques de la géolocalisation actuelle.

Les widgets de coordonnées sont affichés en haut de l'écran. Les icônes avec un fond vert indiquent la latitude et la longitude du point au centre de la partie visible de la carte, et celles avec un fond bleu indiquent les coordonnées de votre position actuelle. Des informations sur les *formats de coordonnées* pris en charge se trouvent dans l'*[article sur la recherche de coordonnées](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
|   | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| Par appui | Copie les coordonnées dans le presse-papiers. |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) ou <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## Infos GPS   {#gps-info}

<InfoAndroidOnly />

![Widget Infos GPS Android](@site/static/img/widgets/gps_info_widget.png)

Le widget d'information GPS (Global Positioning System) indique le nombre de satellites que l'appareil détecte et utilise actuellement. Vous pouvez l'utiliser pour vérifier l'état du GPS en cas de signal faible.  

Vous pouvez réinitialiser le cache GPS actuel via :
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.  

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_gps_info"/>* |  
| Par appui | Ouvre le menu d'état du GPS avec des outils tiers pour configurer l'appareil GPS embarqué. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


## Position du soleil {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de lever et coucher du soleil](@site/static/img/widgets/sun_position.png) ![Widgets de lever et coucher du soleil](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de lever et coucher du soleil](@site/static/img/widgets/sun_position_4_ios.png) ![Widgets de lever et coucher du soleil](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>  

Les widgets de position du soleil indiquent les heures du prochain lever et coucher de soleil pour le centre de la carte. Lorsqu'on appuie dessus, ils affichent le temps restant jusqu'au lever ou coucher de soleil prévu. Dans les deux cas, l'heure est basée sur l'heure configurée de votre appareil.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
|   |  **iOS** : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| Par appui | Bascule entre le temps restant et l'heure du prochain lever/coucher de soleil. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


## Règle de rayon {#radius-ruler}

:::note  
Vous pouvez lire une description plus détaillée ici : **[Règle de rayon et Règle](../widgets/radius-ruler)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Écran de la règle de rayon](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Règle de rayon"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Règle de rayon"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Règle de rayon"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

Le widget Règle de rayon indique la distance entre votre position et le point central de la Règle de rayon. Le rayon du premier cercle est égal à [l'échelle de la carte](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS** : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| Par appui | Change l'état du widget entre les modes échelle noire, niveaux de gris et invisible. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |


## Compteur de vitesse {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Compteur de vitesse](@site/static/img/widgets/speedometer_1_andr.png)   ![Compteur de vitesse](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Compteur de vitesse](@site/static/img/widgets/speedometer_1_ios.png)   ![Compteur de vitesse](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

Le **widget Compteur de vitesse** est un affichage graphique de la vitesse actuelle du véhicule basé sur les *données reçues du GPS*. Il vous permet de surveiller en temps réel la conformité entre votre vitesse et la limite de vitesse autorisée. La limite de vitesse autorisée est fournie par les [données OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) pour une section de route particulière et le paramètre de [tolérance de limite de vitesse](../navigation/guidance/voice-navigation.md#speed-limit) d'OsmAnd.  

- Dans les *paramètres du compteur de vitesse*, vous pouvez sélectionner la taille (**Hauteur**) du widget sur l'écran de l'application comme *Petite*, *Moyenne* ou *Grande*.
- Vous pouvez spécifier quand recevoir un **avertissement de limite de vitesse**, en sélectionnant *Toujours* ou *En cas de dépassement*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Compteur de vitesse"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Compteur de vitesse"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
|        | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Compteur de vitesse* |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>*  |


## Widgets des extensions {#plugin-widgets}

Ces widgets sont activés et fonctionnent en combinaison avec leurs extensions correspondantes.


### Widgets d'enregistrement de trajet   {#trip-recording-widgets}

:::note  
Vous pouvez lire une description plus détaillée ici : **[Extension <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![widget_enregistrement_trajet](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![widget_enregistrement_trajet](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

Les widgets d'enregistrement de trajet se réfèrent à l'[extension <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md#widgets). Vous pouvez utiliser les widgets pour afficher de brèves informations sur l'enregistrement de la trace à l'écran. Telles que *Distance*, *Durée*, *Montée* et *Descente*.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_monitoring"/>* |
|   |  **iOS** : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_monitoring"/>* |
| Par appui | Démarre/Arrête l'enregistrement de la trace ou Affiche le graphique. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


### Widgets de capteurs externes {#external-sensors-widgets}

:::note
Pour ajouter des widgets de capteurs externes à l'écran de la carte, activez l'extension [Capteurs externes](../plugins/external-sensors.md) d'OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widgets de capteurs externes Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de capteurs externes iOS](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Les widgets se réfèrent à l'[extension Capteurs externes](../plugins/external-sensors.md#widgets). Vous pouvez les utiliser pour afficher de brèves informations de vos capteurs externes, telles que : **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Android uniquement*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** et **<Translate android="true" ids="external_device_characteristic_temperature"/>**. Vous pouvez également sélectionner le **niveau de batterie** des capteurs BLE connectés pour qu'il soit affiché directement dans le widget.  

- Pour ajouter un widget — [activez](../plugins/index.md#enable--disable) l'extension Capteurs externes d'OsmAnd.

- Pour ajouter des capteurs, sélectionnez l'une des options :
  - Allez à *Menu → Extensions → Capteurs externes → Paramètres → Appairer un nouveau capteur*.
  - Allez à *Menu → Configurer l'écran → Choisissez un panneau → Ajouter un widget → Capteurs externes → Choisir un capteur → Paramètres → Appairer un nouveau capteur*.

- Ajoutez des widgets même si aucun capteur externe n'est connecté.

- **Tous les widgets ajoutés sont visibles** même si aucun capteur externe n'est connecté.

- Utilisez l'[extension Enregistrement de trajet](../plugins/trip-recording.md#recording-settings) pour enregistrer les données des capteurs.

- Lisez comment choisir quel capteur (du même type) afficher dans le widget [ici](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| Par appui | Pas de changement (*Android*) / Bascule le mode entre les données du capteur et le niveau de la batterie (*iOS*). |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


### Widgets de métriques du véhicule {#vehicle-metrics-widgets}


:::note
Pour ajouter des widgets de métriques du véhicule à l'écran de la carte, activez l'extension [Métrique du véhicule](../plugins/vehicle-metrics.md) d'OsmAnd.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widgets de métriques du véhicule Android](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de métriques du véhicule iOS](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>


Les widgets appartiennent à l'[extension Métriques du véhicule](../plugins/vehicle-metrics.md#widgets). Vous pouvez les utiliser pour afficher des informations provenant d'un scanner OBD-II connecté, telles que (*13 métriques*) : **Température d'admission**,&nbsp; **Température ambiante**,&nbsp; **Température du liquide de refroidissement**,&nbsp; **Température de l'huile moteur**,&nbsp; **Régime moteur** (*gratuit*),&nbsp; **Durée de fonctionnement du moteur**,&nbsp; **Charge calculée du moteur**,&nbsp; **Pression du carburant**,&nbsp; **Consommation de carburant**,&nbsp; **Carburant restant**,&nbsp; **Niveau de la batterie**,&nbsp; **Vitesse du véhicule** (*gratuit*), et **Position de l'accélérateur**.  

- Pour ajouter des widgets de métriques du véhicule à l'écran de la carte, [activez](../plugins/index.md#enable--disable) l'**extension Métriques du véhicule**.
- Vous pouvez ajouter des widgets même si aucun scanner OBD-II n'est connecté.
- Tous les widgets ajoutés sont visibles, qu'un scanner OBD-II soit connecté ou non.
- Pour modifier un widget, appuyez sur le widget ajouté au panneau, puis sur *Paramètres*, ou directement sur l'*icône Paramètres* dans le champ du widget.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget →  <Translate android="true" ids="obd_widget_group"/>* |
|  | **iOS :** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget →  <Translate ios="true" ids="obd_plugin_name"/>* |
| Par appui | Pas de changement |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


### Widgets Météo {#weather-widgets}

:::note
Pour ajouter des widgets Météo à l'écran de la carte, activez l'extension [Météo](../plugins/weather.md) d'OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget Météo Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget Météo iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>  

Les widgets météo affichent les informations météorologiques actuelles pour un point central sur la carte. Ils sont automatiquement activés à l'écran lorsqu'ils sont consultés avec l'extension (*Menu → Météo*), et vous pouvez choisir ceux à mettre sur l'écran d'accueil pour un usage quotidien (*Menu → Personnaliser l'écran*). Vous pouvez en savoir plus à ce sujet dans l'article [Extension Météo](../plugins/weather.md).

- **Température**. <Translate android="true" ids="temperature_widget_desc"/>
- **Pression atmosphérique**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Vent**. <Translate android="true" ids="wind_widget_desc"/>
- **Nuages**. <Translate android="true" ids="clouds_widget_desc"/>
- **Précipitations**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="shared_string_weather"/>* |
|   |  **iOS** : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="shared_string_weather"/>* |  
| Par appui | Affiche dans une boîte de dialogue la date et l'heure auxquelles les informations météorologiques sont pertinentes. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menu → Extensions → Météo → Paramètres* ou *Menu → Paramètres → Profil d'application → Météo* |  


### Widget de stationnement {#parking-widget}

:::note
Pour ajouter des widgets de stationnement à l'écran de la carte, activez l'extension [Position de stationnement](../plugins/parking.md) d'OsmAnd.
:::  

![Widget de stationnement](@site/static/img/plugins/parking/parking_widget.png)  

Le widget de l'extension Stationnement indique la distance entre le centre de l'écran et l'emplacement de stationnement. Pour définir une place de stationnement sur la carte, zoomez au niveau requis, puis appuyez longuement sur l'endroit sur la carte pour ouvrir le menu contextuel. Suivez [ces paramètres](../plugins/parking.md#set-a-spot).  

**Note :** Le widget de stationnement n'apparaîtra que si une position de stationnement a été ajoutée à la carte. Sans position de stationnement enregistrée, le widget ne sera pas visible.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_parking"/>* |
|   |  **iOS** : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="parking_place"/>* |
| Par appui | Déplace la vue de la carte vers la position de stationnement. |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Widget Mapillary {#mapillary-widget}

:::note  
Pour ajouter le widget Mapillary à l'écran de la carte, activez l'extension [Mapillary](../plugins/mapillary.md) d'OsmAnd.  
:::  

![Widget Mapillary](@site/static/img/widgets/mapillary_widget.png)

Il s'agit d'un widget de l'extension Mapillary qui offre un accès rapide à l'application Mapillary, vous permettant d'ajouter des [*images au niveau de la rue*](../plugins/mapillary.md#enable-layer). Le widget est ajouté à la carte automatiquement lorsque l'extension est activée.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="mapillary"/>* |
|   |  **iOS** : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="mapillary"/>* |
| Par appui | Ouvre l'application [Mapillary](https://www.mapillary.com/). |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget de notes audio/vidéo {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Pour ajouter des widgets de notes audio/vidéo à l'écran de la carte, activez l'extension [Notes audio/vidéo](../plugins/audio-video-notes.md) d'OsmAnd.
:::

![Widget de notes audio-vidéo](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

Ce sont des widgets de l'extension Notes audio/vidéo qui permettent un accès rapide pour démarrer/arrêter la prise de notes audio, vidéo ou photo.  

Vous pouvez configurer quelle action est sélectionnée par défaut :

- *Sur demande*. État par défaut. La boîte de dialogue de sélection d'action est affichée à chaque fois.
- *Enregistrer audio* - enregistre une note audio.
- *Enregistrer vidéo* - vous permet d'enregistrer une vidéo.
- *Prendre une photo* - vous permet de prendre une photo.  

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_av_notes"/>*  |
| Par appui | Démarre / arrête la prise d'une note  |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget Tracker {#tracker-widget}

<InfoAndroidOnly />

:::note
Pour ajouter le widget Tracker à l'écran de la carte, activez l'extension [OsmAnd Tracker](../plugins/osmand-tracker.md).
:::  

Pour que l'extension et le widget fonctionnent, vous devez installer [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) depuis Google Play ou d'autres sources.  

Ce widget de l'extension OsmAnd Tracker est utilisé pour accéder rapidement à l'application OsmAnd Tracker et partager vos informations de localisation avec d'autres utilisateurs. L'application envoie des messages de *Localisation en direct* aux discussions sélectionnées pendant un certain temps, affiche une liste de contacts et de groupes, et vérifie les discussions pour les messages avec votre localisation, qui sont ensuite affichés sur une carte dans OsmAnd.  

![Widget Tracker](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="tracker_item"/>* |
| Par appui | Ouvre l'application OsmAnd Online GPS Tracker. |


### Widgets pour développeurs {#developer-widgets}

:::note
Pour ajouter des widgets pour développeurs à l'écran de la carte, activez l'extension [Développement OsmAnd](../plugins/development.md).
:::

Les **widgets pour développeurs** fournissent des informations sur la [vitesse de rendu de la carte](../plugins/development.md#map-rendering-fps-widget) et les paramètres de position de la caméra virtuelle, y compris le [niveau de zoom](../plugins/development.md#zoom-level), la [distance](../plugins/development.md#distance-to-target) au centre de la carte, l'[élévation de la caméra](../plugins/development.md#camera-elevation) et l'[angle d'inclinaison](../plugins/development.md#camera-tilt).  

#### IPS du rendu de la carte {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget IPS Android](@site/static/img/widgets/fps_widgets_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget IPS iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

Le [widget IPS du rendu de la carte](../plugins/development.md#map-rendering-fps-widget) affiche la vitesse de rendu de la carte et de ses éléments, mesurée en images par seconde (IPS). Une valeur IPS plus élevée indique un rendu plus rapide et des performances visuelles plus fluides.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_rendering_fps"/>* |
|   |  **iOS** : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| Par appui | Pas de changement |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


#### Widgets de la caméra {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de position de la caméra](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de position de la caméra 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

Les **widgets de la caméra** vous permettent de surveiller l'alignement entre la carte OsmAnd et la surface de la terre.

- [Inclinaison de la caméra](../plugins/development.md#camera-tilt). Affiche l'angle d'inclinaison de la caméra en mode perspective. La valeur par défaut est de 90° (pas d'inclinaison).
- [Élévation de la caméra](../plugins/development.md#camera-elevation). Indique l'élévation de la caméra au-dessus du niveau de la surface.
- [Niveau de zoom](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Distance de la caméra à la cible](../plugins/development.md#distance-to-target). Mesure la distance entre la caméra et l'emplacement cible sur la carte.

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="developer_widgets"/>* |
|   |  **iOS** : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisissez un panneau → Ajouter un widget → <Translate ios="true" ids="developer_widgets"/>* |
| Par appui | Bascule entre les modes (*Niveau de zoom*) / Pas de changement (*Autres*) |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


#### RAM disponible {#available-ram}

<InfoAndroidOnly />

![RAM disponible](@site/static/img/widgets/available_RAM_2_andr.png)

Le widget **RAM disponible** est un outil pour surveiller l'utilisation de la mémoire de votre appareil par rapport à OsmAnd. Il fournit des données détaillées pour aider à optimiser les performances de l'application.

- **RAM disponible pour l'application.** Affiche la quantité de RAM disponible pour OsmAnd sans causer de problèmes de performance.

- **Utilisation de la RAM par l'application** — Indique la consommation actuelle de RAM par OsmAnd.

- **RAM totale de l'application** — Indique la mémoire totale allouée à OsmAnd, y compris la mémoire utilisée et disponible.

> **NOTE**. *La *RAM totale disponible* peut varier en fonction des processus en arrière-plan et des autres applications en cours d'exécution sur votre appareil. Ces valeurs sont dynamiques et offrent un moyen de suivre et de gérer l'utilisation de la mémoire pour des performances OsmAnd constantes et efficaces.*

| | |
|:------------|:------------|
| Activer | **Android :** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisissez un panneau → Ajouter un widget → <Translate android="true" ids="developer_widgets"/> → *RAM disponible* |
| Par appui | Pas de changement |
| Appui long | Ouvre le [menu contextuel du widget](../widgets/configure-screen.md#widget-context-menu) |


## Articles connexes {#related-articles}

- [Configurer l'écran](./configure-screen.md)
- [Boutons de la carte](./map-buttons.md)
- [Widgets de navigation](./nav-widgets.md)
- [Règle de rayon et Règle](./radius-ruler.md)
- [Widgets de marqueurs](./markers.md)
- [Action rapide](./quick-action.md)