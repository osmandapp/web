---
sidebar_position: 4
title:  Profils (Paramètres)
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

## Aperçu

OsmAnd propose une variété de profils par défaut adaptés à différentes activités, notamment la conduite, le cyclisme, la marche et des activités plus spécialisées comme le ski et la navigation de plaisance. Ces profils sont conçus pour améliorer votre expérience de navigation en fonction de l'activité à laquelle vous vous livrez. Chaque profil comprend des options configurables, vous permettant d'ajuster les paramètres et d'incorporer des plugins supplémentaires pour correspondre à vos préférences.

- Certains profils, tels que *Ski* et *Bateau*, disposent de **fonctionnalités supplémentaires** qui ne sont disponibles que lorsque les plugins correspondants sont activés.

     - Les plugins peuvent être activés en naviguant vers *Menu → Plugins → Vue carte de ski* ou *Vue carte nautique*.
     - L'activation des plugins fournit aux profils les fonctionnalités essentielles pour répondre aux exigences spécifiques de ces activités.

- Il est important de noter que certains profils, tels que **Camion**, **Moto**, **Cyclomoteur**, **Train**, **Avion**, **Bateau** et **Équitation**, ne sont pas activés par défaut.

     - Pour accéder et utiliser ces profils, vous devez les activer manuellement dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - Cette méthode permet de maintenir une liste de profils organisée et pertinente en n'activant que ceux requis pour des activités spécifiques.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Parcourir la carte ou tout autre profil)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Configuration du profil

:::caution Application des paramètres à un profil spécifique uniquement
Tous les paramètres s'appliquent exclusivement au profil d'application actuellement sélectionné.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

Cette section contient tous les paramètres liés à l'apparence, aux options de navigation, à l'affichage de la carte, au menu des paramètres et à l'écran du profil.


### Sauvegarde gratuite dans le cloud

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Favorites folder functions android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Favorites actions ios](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

OsmAnd vous permet de [sauvegarder](../personal/osmand-cloud.md#osmand-start) les paramètres de votre profil d'application sur OsmAnd Cloud, garantissant que vos configurations sont stockées en toute sécurité et facilement restaurées sur les versions Android, iOS et Web. Cette fonction de sauvegarde protège vos paramètres en cas de défaillance de l'appareil ou de réinstallation de l'application. Vous pouvez bénéficier de ce plan spécial en utilisant [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).  

Vous devez disposer d'un compte [OsmAnd Cloud](../personal/osmand-cloud.md#login) pour utiliser la *Sauvegarde gratuite des paramètres*. Si vous avez un abonnement *OsmAnd Pro* ou un compte *OsmAnd Cloud* actif, la bannière de promotion ne sera pas affichée.


## Paramètres généraux

Cette section contient les paramètres du thème de l'application et du bouton de la boussole, les unités et formats des données de la carte et du profil, les périphériques d'entrée externes et de nombreux autres paramètres pour créer la configuration optimale pour le profil choisi.

### Apparence

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Vous permet de définir un thème de jour et de nuit pour l'application, qui peut être appliqué à un profil ou à tous en même temps. Cette option ne modifie pas les paramètres du [mode carte](../map/vector-maps.md#map-mode).
  - *Thème <Translate android="true" ids="dark_theme"/>*
  - *Thème <Translate android="true" ids="light_theme"/>*
  - *<Translate android="true" ids="system_default_theme"/>*  
      Applique le thème du système. Par défaut, et pour tous les nouveaux utilisateurs, le style de carte correspond au thème clair ou sombre sélectionné dans les paramètres système de votre appareil.
- **<Translate android="true" ids="rotate_map_to"/>**. Vous permet de choisir [le mode d'orientation de la carte](../map/interact-with-map.md#map-orientation-modes) pour le profil sélectionné.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Définit et verrouille la position de l'écran dans l'application OsmAnd. Cette fonctionnalité n'est pas prise en charge sur iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*  

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Android uniquement*). Ouvre le menu de contrôle de l'écran, où vous pouvez sélectionner des options pour l'écran de l'appareil pendant la navigation afin d'économiser la consommation de la batterie de l'appareil.  


### Unités et formats

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/profiles_units_formats_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/profile_unitsformats_3_ios.png)

</TabItem>

</Tabs>

Dans la section **Unités et formats**, vous pouvez ajuster les unités de mesure et les formats pour les aligner sur vos préférences personnelles et les normes régionales, garantissant que toutes les données sont affichées de manière pratique et familière.


<!--

<table>
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Format</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4 align="left">**<Translate android="true" ids="driving_region"/>**</td>
            <td rowspan=2 align="left"><Translate android="true" ids="shared_string_automatic"/></td>
            <td align="left">According to the device location.</td>
        </tr>
        <tr>
            <td rowspan=2 align="left"><Translate android="true" ids="driving_region_europe_asia"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/></td>
        </tr>
        <tr>
            <td align="left"><Translate android="true" ids="driving_region_us"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/></td>
        </tr>
    </tbody>
</table>

-->

|  |  |  |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="driving_region"/>** | <Translate android="true" ids="shared_string_automatic"/> | <ul><li>Selon la localisation de l'appareil</li></ul> |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_mi_feet"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_uk"/>  |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_mi_meters"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_india"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|  |  |  |
| **<Translate android="true" ids="unit_of_length"/>** | <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0,62 ml / 3281 ft (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0,62 ml / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 ya / 0,62 ml (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0,54 nmi / 3280,84 ft / 1000 m |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Exemple : 50.12333° 19.93233° (Lat Long) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Exemple : 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Exemple : 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zone Northing Easting) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Exemple : 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Exemple :  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) représente une zone de 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (Version Android uniquement) | Exemple : 2 215 227.87, 830 915.9 ([Système de coordonnées suisse](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (Version Android uniquement) | Exemple : 4 215 227.87, 1 830 915.9 ([Système de coordonnées suisse](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).))) |
|  |  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*Android*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| Degrés 180° | Toutes les valeurs angulaires ont des lectures de 0° à 180° et de 0° à -180°.  |
|          | Degrés 360° | Toutes les valeurs angulaires ont des lectures de 0° à 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | Toutes les valeurs angulaires ont une [valeur en milliradians](https://en.wikipedia.org/wiki/Milliradian).  |
|  |  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*Android*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55,92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1,073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0,667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48,59 kn |
|  |  |  |
| **<Translate android="true" ids="unit_of_volume"/>** (*Android uniquement*) | <Translate android="true" ids="litres"/> | Europe, Asie, Amérique latine, Canada, Japon, Inde, Australie |
|  | <Translate android="true" ids="imperial_gallons"/> | Royaume-Uni et similaires |
|  | <Translate android="true" ids="us_gallons"/> | États-Unis |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *Pour des mesures précises*, choisissez comment les informations de distance sont affichées dans les widgets de navigation, tels que la distance à un point, le prochain virage ou une voie spécifique. |
|          | <Translate android="true" ids="round_up"/> | *Pour une meilleure lisibilité*, les nombres affichés dans les widgets de navigation (distance à un point, prochain virage ou voie) seront arrondis à la baisse pour avoir moins de chiffres. <br/> Par exemple : 3672 m *→* 3,6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


### Autres

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_general_settings_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Profiles General Settings Other iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)  

</TabItem>

</Tabs>

La section **Autres** fournit des paramètres de profil supplémentaires pour personnaliser l'interface et les commandes d'entrée d'OsmAnd. Ces paramètres vous permettent de configurer des périphériques externes, d'ajuster les préférences d'animation et d'activer/désactiver le mode plein écran.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – Connectez des contrôleurs externes tels que *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*, *<Translate ios="true" ids="sett_generic_ext_input"/>*, ou *<Translate android="true" ids="sett_parrot_ext_input"/>* pour utiliser OsmAnd à l'aide de boutons physiques.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*Android uniquement*) – Active ou désactive la possibilité d'utiliser les boutons de volume de votre appareil pour [zoomer](../map/interact-with-map.md#my-location-and-zoom) sur la carte.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*Android uniquement*) – Lisse la rotation de la carte avec un [mouvement progressif](https://en.wikipedia.org/wiki/Kalman_filter), réduisant les changements de position soudains. Cela introduit un léger délai (*moins de 1 seconde*).

- [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*Android uniquement*) – Utilise le [capteur magnétique](https://en.wikipedia.org/wiki/Kalman_filter) de votre appareil pour stabiliser la rotation de la carte, réduisant les changements brusques. Cela introduit également un léger délai.

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*Android uniquement*) – Appuyez sur un espace vide de la carte pour masquer les boutons de contrôle et les widgets, maximisant la visibilité de la carte.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (*Android uniquement*) – Désactive les animations en mode navigation pour des transitions d'écran plus rapides.

- **<Translate android="true" ids="animate_my_location"/>** – Permet un panoramique fluide de la carte en mouvement, rendant les mouvements de navigation plus fluides. Cela introduit un délai d'une seconde, provoquant un léger décalage entre le mouvement réel et les mises à jour de la [position](../map/interact-with-map.md#my-location-and-zoom) sur la carte.


## Paramètres de navigation

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

Pour un aperçu détaillé des options de navigation, consultez l'article [Paramètres de navigation](../navigation/guidance/navigation-settings.md), qui explique comment configurer OsmAnd pour une expérience de navigation optimale.

- [Type de navigation](../navigation/guidance/navigation-settings.md#navigation-type) - Choisissez le mode de navigation approprié en fonction de votre méthode de déplacement et de la disponibilité d'Internet.

- [Paramètres d'itinéraire](../navigation/guidance/navigation-settings.md#route-parameters) - Définissez la manière dont OsmAnd calcule les itinéraires, y compris les préférences pour éviter certaines routes ou sélectionner des types d'itinéraires.

- [Alertes d'écran](../navigation/guidance/navigation-settings.md#screen-alerts) - Activez le *Widget d'alertes* pour afficher des notifications en temps réel sur les limites de vitesse, les virages et autres conditions routières importantes.

- [Invites vocales](../navigation/guidance/navigation-settings.md#voice-prompts) - Activez le guidage audio pour recevoir des instructions de navigation vocales pendant que vous conduisez ou marchez le long d'un itinéraire sélectionné.

- [Paramètres du véhicule](../navigation/guidance/navigation-settings.md#vehicle-parameters) – Configurez les paramètres spécifiques au véhicule tels que la vitesse maximale et la hauteur du véhicule pour garantir un routage précis et éviter les routes restreintes.

- [Personnaliser la ligne d'itinéraire](../navigation/guidance/navigation-settings.md#customize-route-line) – Ajustez la couleur, la largeur et le style de la ligne d'itinéraire affichée sur la carte pour une meilleure visibilité pendant la navigation.

- [Carte pendant la navigation](../navigation/guidance/navigation-settings.md#map-during-navigation) – Visualisez le positionnement en temps réel sur la carte, suivez la progression le long de l'itinéraire et améliorez l'orientation à l'aide de points de repère.

- [Guidage détaillé de la piste](../navigation/guidance/navigation-settings.md) – Améliorez la navigation virage par virage en alignant votre itinéraire sur les routes cartographiées. Paramètres disponibles : *Demander à chaque fois* ou *Toujours*.

:::info
Il n'y a pas de paramètres de navigation dans le profil *Parcourir la carte*.  
:::


## Configurer la carte

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Configurer la carte*

![Profiles Configure map Settings Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

![Profiles Configure map Settings iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

Le menu [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) vous permet de personnaliser les paramètres d'affichage de la carte pour le profil sélectionné, permettant une meilleure visualisation des éléments clés de la carte.  

Avec ce menu, vous pouvez :

- **Mettre en évidence les éléments importants de la carte**, y compris les [points favoris](../personal/favorites.md), les [marqueurs de navigation](../personal/markers.md) ou les [points d'intérêt](../map/point-layers-on-map.md#points-of-interest-poi) spéciaux sur la carte.

- **Afficher des itinéraires et des fichiers GPX spécifiques**, y compris des pistes tierces pour la navigation ou l'analyse.

- **Superposer des couches de carte supplémentaires**, telles que les [informations sur le terrain](../plugins/topography.md), les **images satellite** ou d'autres [cartes raster](../map/raster-maps.md) disponibles.

- **Activer la visualisation des transports en commun**, affichant les [itinéraires et les arrêts](../map/public-transport.md) pour une meilleure planification des trajets.

- **Ajuster l'apparence de la carte** en sélectionnant un [style de carte](../map/vector-maps.md#default-map-styles) différent pour répondre à vos besoins.


## Configurer l'écran

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

- Aller à : *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  
- Aller à : *Android* *Menu → Paramètres → Profil de l'application → Configurer l'écran*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *iOS* *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

Le [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) est un menu qui vous permet de configurer les widgets pour le profil sélectionné à afficher sur la carte. Sur cet écran, vous pouvez activer et configurer les widgets [Informationnels](../widgets/info-widgets.md) et [Navigationnels](../widgets/nav-widgets.md), ainsi que d'autres éléments.


## Apparence du profil

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

Les paramètres **Apparence du profil** vous permettent de personnaliser le nom et la représentation visuelle de votre profil. Vous pouvez également modifier l'apparence de [Ma position](#my-location-appearance) ici. Bien que le *nom du profil* doive être unique, les *icônes* et les *couleurs* peuvent être les mêmes pour différents profils. Ces modifications seront appliquées dans diverses parties de l'application, telles que le menu [Préparation de l'itinéraire](../navigation/setup/route-navigation.md).


### Apparence de ma position

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![My location Appearance](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![My location Appearance](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

Les paramètres **Apparence de ma position** vous permettent de personnaliser la façon dont votre position est affichée sur la carte, à la fois lorsque vous êtes immobile et en mouvement. Le mouvement est détecté par le système d'exploitation lorsque la vitesse de l'appareil est **supérieure à zéro**.

#### 1. Angle de vue et rayon de localisation

Vous pouvez personnaliser les éléments visuels liés à votre position et les appliquer séparément ou ensemble pour les positions **Au repos** et **Navigation**. Pour les modes 2D et 3D, l'*Angle de vue* et le *Rayon de localisation* sont affichés dans la même couleur sélectionnée pour le [profil de navigation](#profile-appearance), directement sous l'icône [Ma position](../map/interact-with-map.md#my-location-and-zoom).

- **<Translate android="true" ids="view_angle"/>** – Affiche une zone en **forme de cône** indiquant la direction dans laquelle vous êtes actuellement orienté.  
- **<Translate android="true" ids="location_radius"/>** – Affiche une **zone circulaire** autour de votre icône, représentant la précision de votre position actuelle.


#### 2. Icônes 3D personnalisées

Pour une expérience plus personnalisée, vous pouvez créer et ajouter des **icônes 3D personnalisées** à OsmAnd.  

***Comment ajouter une icône de localisation 3D personnalisée :***

1. **Créer un modèle 3D**. Concevez votre icône aux [formats MTL et OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file).

2. **Intégrer le modèle dans OsmAnd :**  
   - Développez un [plugin personnalisé](../plugins/custom.md) en utilisant l'[exemple de plugin](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf) fourni.  
   - Placez vos fichiers d'icônes 3D dans les chemins suivants :  

     `..osmand/models/nom_du_dossier_d_icone/fichier_3d_personnalise.mtl`  
     `..osmand/models/nom_du_dossier_d_icone/fichier_3d_personnalise.obj`

   - Alternativement, copiez les **fichiers MTL et OBJ** directement dans le dossier OsmAnd en utilisant la même structure de répertoire.  

#### 3. Modes d'orientation de la carte

Vous pouvez contrôler le comportement de l'icône **Ma position** en utilisant différents [modes d'orientation de la carte](../widgets/map-buttons.md#compass).  

- Si l'icône de localisation **tremble ou tourne** lorsque vous êtes immobile, passez du **Mode direction de mouvement** ([Rotation de la carte par relèvement](../map/interact-with-map.md#rotate-map-by-bearing)) à un autre mode.  
- Ajustez les paramètres supplémentaires dans *Menu → Paramètres → Profils d'application → Apparence du profil → Options*.
- Apprenez-en davantage sur le suivi du relèvement et de la direction dans la section [Widget de relèvement](../widgets/nav-widgets#bearing-widget).  


## Personnalisation de l'interface utilisateur

<InfoAndroidOnly />

:::note Pour les plugins inutilisés
Pour masquer tous les paramètres de contrôle des [plugins](../plugins/index.md#configure-a-plugin) inutilisés, désactivez-les.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

Avec la fonction de personnalisation de l'interface utilisateur, vous pouvez ajuster le nombre d'éléments dans des actions telles que [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android), [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) et [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md). Des informations sur le nombre d'éléments ajoutés sur tous les éléments possibles se trouvent sous le titre de chaque fonctionnalité.


### Tiroir

![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)  

- **Éléments principaux visibles** - Dans la section *Personnaliser l'interface utilisateur*, vous pouvez *réorganiser, masquer et restaurer* les éléments du [Tiroir](../start-with/main-menu.md#customize-advanced-use-of-android) pour qu'ils correspondent à vos préférences.

- **<Translate android="true" ids="reset_to_default"/>** - Restaure la *liste originale des éléments* dans le tiroir, annulant instantanément toute personnalisation.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Vous permet de copier la *disposition du tiroir* d'un autre profil OsmAnd pour maintenir une configuration cohérente entre les profils.

### Configuration de la carte

![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Menu Configurer la carte** - Dans la section *Personnaliser l'interface utilisateur*, vous pouvez *réorganiser ou masquer les éléments* du menu [Configurer la carte](../map/configure-map-menu.md), permettant un accès rapide aux paramètres fréquemment utilisés.

- **<Translate android="true" ids="reset_to_default"/>** - Restaure la *liste d'éléments originale* dans le menu Configurer la carte, supprimant toute modification.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Copie la *disposition du menu Configurer la carte* d'un autre profil OsmAnd.


### Actions du menu contextuel

![Profile Context menu Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)  ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Menu contextuel de la carte** - Dans la section Personnaliser l'interface utilisateur, vous pouvez réorganiser ou masquer les éléments du [menu contextuel de la carte](../map/map-context-menu.md) pour optimiser l'accès aux fonctionnalités fréquemment utilisées.

- **<Translate android="true" ids="reset_to_default"/>** – Restaure la *liste d'éléments par défaut* dans le menu contextuel de la carte, annulant instantanément toute modification.

- **<Translate android="true" ids="copy_from_other_profile"/>** – Copie l'*agencement du menu contextuel* d'un autre profil OsmAnd pour maintenir la cohérence entre les différents profils.


## Paramètres des plugins

:::caution Accès aux paramètres des plugins
Pour accéder aux paramètres du plugin, vous devez d'abord [**activer le plugin**](../plugins/index.md#enable--disable) dans la *section Plugins du menu principal*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*  

![Profile Settings Plugins Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Profile Settings Plugins iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

Les plugins débloquent des fonctionnalités supplémentaires de l'application et peuvent être [payants ou gratuits](../plugins/index.md#purchase). Certains plugins ont leurs propres [paramètres](../plugins/index.md#plugin-settings), d'autres non. OsmAnd vous donne la possibilité de configurer les plugins pour chaque profil séparément.


- **Enregistrement de trajet**. Cet élément ouvre les [paramètres d'enregistrement de trajet](../plugins/trip-recording.md#recording-settings) pour le profil sélectionné, où vous pouvez choisir n'importe quel paramètre pour enregistrer vos trajets.

- **Météo**. Les couches de carte interactives [Météo](../plugins/weather.md#weather-settings) vous permettent de surveiller la température, la pression atmosphérique, la couverture nuageuse, la vitesse du vent et les précipitations dans votre ville ou tout autre endroit sur une carte mondiale.

- **Notes audio/vidéo** (*Android uniquement*). Cet élément ouvre les [paramètres du plugin audio-vidéo](../plugins/audio-video-notes.md#plugin-settings) pour le profil sélectionné. Le plugin *Notes audio/vidéo* étend les fonctionnalités d'OsmAnd en vous permettant de créer vos notes dans différents formats tels que photo, vidéo ou audio et de les associer à une localisation géographique ou à la position actuelle.  

- **Édition OpenStreetMap**. Cet élément ouvre les [paramètres du plugin d'édition OpenStreetMap](../plugins/osm-editing.md#settings) pour le profil sélectionné. Avec OsmAnd et le plugin d'édition OSM, vous pouvez contribuer à OpenStreetMap.org en créant ou en modifiant des POI, en ajoutant ou en commentant des notes, et en téléchargeant des pistes GPX enregistrées.

- **Capteurs externes**. Lorsque vous appuyez sur un élément dans la section *Paramètres des plugins*, les [paramètres des capteurs externes](../plugins/external-sensors.md#sensors-settings) pour le profil sélectionné sont ouverts. Le plugin Capteurs externes vous permet de lire et d'enregistrer des données provenant de capteurs externes sans fil et de les afficher à l'aide de widgets dans l'application OsmAnd.

- **Accessibilité** (*Android uniquement*). Cet élément ouvre les [paramètres du plugin Accessibilité](../plugins/accessibility.md#plugin-settings) pour le profil sélectionné. Les paramètres du plugin Accessibilité vous permettent de personnaliser l'application en fonction de vos besoins. Tous les paramètres sont liés au processus de navigation et sont définis individuellement pour chaque profil.

- **Développement OsmAnd**. Ce menu ouvre les [paramètres du plugin de développement OsmAnd](../plugins/development.md#plugin-settings), où vous pouvez configurer l'application OsmAnd à des fins de test ou explorer les fonctionnalités à venir. Ces paramètres sont destinés aux développeurs et ne sont pas nécessaires pour une utilisation normale de l'application.  

  > ***La modification des paramètres du plugin de développement OsmAnd affecte tous les profils.***

- **Wikipedia**. Ce menu ouvre les *[paramètres du plugin Wikipedia](../plugins/wikipedia.md#wikipedia-settings)*. Vous pouvez sélectionner la langue dans laquelle les articles seront affichés et choisir de télécharger ou non les images de Wikipedia. Avoir Wikipedia pendant votre voyage améliore votre expérience en fournissant des informations sur les lieux que vous visitez. Il fonctionne hors ligne et affiche les articles Wikipedia pertinents directement sur la carte liés aux points d'intérêt.


## Actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)  

</TabItem>

</Tabs>

Actions avec le profil sélectionné :  

- [Exporter le profil](https://osmand.net/docs/user/personal/import-export#export) - Exporter tous les paramètres du profil sélectionné au format OSF.

- **Copier depuis un autre profil** - Copie tous les paramètres d'un autre profil existant dans votre application OsmAnd.

- **Réinitialiser aux valeurs par défaut** - Rétablit tous les paramètres à l'état initial.

- **Supprimer le profil** :
    - Cette action n'est disponible que pour *Android* et uniquement pour un *profil personnalisé*.
    - Les profils par défaut ne peuvent pas être supprimés.
    - Pour ajouter un profil, allez dans *Menu → Paramètres → Profils d'application → + Nouveau profil*.


## Articles connexes

- [Gérer les pistes](../personal/tracks/manage-tracks.md#import--export-track)
- [Historique de recherche](../search/search-history.md#export-and-share)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)

> *Cet article a été mis à jour pour la dernière fois en février 2025*

-- source-hash: blake2s: c5d2c74396afa3fc93396962026809b093412269f5e87f0b9dea73e0cd88b9f2 --
