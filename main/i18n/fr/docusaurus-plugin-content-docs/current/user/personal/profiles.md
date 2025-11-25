---
source-hash: d9a27c2bdd5ed4f508328eaa6bfd395073b20a8a1d1c00b711b20ebafd3bd9a9
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

## Aperçu {#overview}

OsmAnd propose une variété de profils par défaut adaptés à différentes activités, notamment la conduite, le cyclisme, la marche et des activités plus spécialisées comme le ski et la navigation de plaisance. Ces profils sont conçus pour améliorer votre expérience de navigation en fonction de l'activité que vous pratiquez. Chaque profil comprend des options configurables, vous permettant d'ajuster les paramètres et d'intégrer des plugins supplémentaires pour correspondre à vos préférences.

- Certains profils, tels que *Skiing* et *Bateau*, disposent de **fonctionnalités supplémentaires** qui ne deviennent disponibles que lorsque les plugins correspondants sont activés.

     - Les plugins peuvent être activés en naviguant vers *Menu → Plugins → Ski map view* ou *Nautical map view*.
     - L'activation des plugins dote les profils des fonctionnalités essentielles pour répondre aux exigences spécifiques de ces activités.

- Il est important de noter que certains profils, tels que **Camion**, **Moto**, **Cyclomoteur**, **Train**, **Avion**, **Bateau** et **Équitation**, ne sont pas activés par défaut.

     - Pour accéder à ces profils et les utiliser, vous devez les activer manuellement dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - Cette méthode permet de maintenir une liste de profils organisée et pertinente en n'activant que ceux requis pour des activités spécifiques.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Parcourir la carte ou tout autre profil)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Paramètres des profils Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Paramètres des profils iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Configuration du profil {#profile-configuration}

:::caution Application des paramètres à un profil spécifique uniquement
Tous les paramètres s'appliquent exclusivement au profil d'application actuellement sélectionné.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres des profils Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Paramètres des profils Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres des profils iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

Cette section contient tous les paramètres relatifs à l'apparence, aux options de navigation, à l'affichage de la carte, au menu des paramètres et à l'écran du profil.


### Sauvegarde cloud gratuite {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Fonctions du dossier Favoris Android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Actions des favoris iOS](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

OsmAnd vous permet de [sauvegarder](../personal/osmand-cloud.md#osmand-start) les paramètres de votre profil d'application sur OsmAnd Cloud, garantissant que vos configurations sont stockées en toute sécurité et facilement restaurées sur les versions Android, iOS et Web. Cette fonctionnalité de sauvegarde protège vos paramètres en cas de panne de l'appareil ou de réinstallation de l'application. Vous pouvez bénéficier de ce plan spécial en utilisant [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).  

Vous devez avoir un compte [OsmAnd Cloud](../personal/osmand-cloud.md#login) pour utiliser la *Sauvegarde gratuite des paramètres*. Si vous avez un abonnement *OsmAnd Pro* ou un compte *OsmAnd Cloud* actif, la bannière promotionnelle ne sera pas affichée.


## Paramètres généraux {#general-settings}

Cette section contient les paramètres pour le thème de l'application et le bouton de la boussole, les unités et formats des données de la carte et du profil, les périphériques d'entrée externes, et de nombreux autres paramètres pour créer la configuration optimale pour le profil que vous avez choisi.

### Apparence {#appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Apparence des paramètres généraux des profils Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Apparence des paramètres généraux des profils iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Permet de définir un thème de jour et de nuit pour l'application, qui peut être appliqué à un seul profil ou à tous à la fois. Cette option ne modifie pas les paramètres du [mode carte](../map/vector-maps.md#map-mode).
  - *Thème <Translate android="true" ids="dark_theme"/>*
  - *Thème <Translate android="true" ids="light_theme"/>*
  - *<Translate android="true" ids="system_default_theme"/>*  
      Applique le thème du système. Par défaut, et pour tous les nouveaux utilisateurs, le style de la carte correspond au thème clair ou sombre sélectionné dans les paramètres système de votre appareil.
- **<Translate android="true" ids="rotate_map_to"/>**. Permet de choisir [le mode d'orientation de la carte](../map/interact-with-map.md#map-orientation-modes) pour le profil sélectionné.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Définit et verrouille la position de l'écran dans l'application OsmAnd. Cette fonctionnalité n'est pas prise en charge sur iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_portrait_inverted"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_landscape_inverted"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*  

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Android uniquement*). Ouvre le menu de contrôle de l'écran, où vous pouvez sélectionner des options pour l'écran de l'appareil pendant la navigation afin d'économiser la consommation de la batterie de l'appareil.  


### Unités et formats {#units--formats}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres généraux des profils Unités et formats Android](@site/static/img/personal/profiles/units_formats_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres généraux des profils Unités et formats iOS](@site/static/img/personal/profiles/units_formats_ios.png)

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
| **<Translate android="true" ids="driving_region"/>** | <Translate android="true" ids="shared_string_automatic"/> | <ul><li>Selon l'emplacement de l'appareil</li></ul> |
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
| **Unités d'altitude** | <ul><li><Translate android="true" ids="shared_string_meters"/></li><li><Translate android="true" ids="shared_string_feet"/></li></ul> | 1 m / 3,28 ft |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Exemple : 50.12333° 19.93233° (Lat Long) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Exemple : 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Exemple : 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zone Northing Easting) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Exemple : 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Exemple :  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) représente une zone de 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (version Android uniquement) | Exemple : 2 215 227.87, 830 915.9 ([Système de coordonnées suisse](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (version Android uniquement) | Exemple : 4 215 227.87, 1 830 915.9 ([Système de coordonnées suisse](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).))) |
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
| **<Translate android="true" ids="unit_of_volume"/>** | <Translate android="true" ids="litres"/> | Europe, Aisa, Amérique latine, Canada, Japon, Inde, Australie |
|  | <Translate android="true" ids="imperial_gallons"/> | Royaume-Uni et similaires |
|  | <Translate android="true" ids="us_gallons"/> | États-Unis |
|  |  |  |
| **<Translate android="true" ids="shared_string_temperature"/>**| <Translate android="true" ids="system_default_theme"/> |  |
|  | <Translate android="true" ids="weather_temperature_celsius"/> |  |
|  | <Translate android="true" ids="weather_temperature_fahrenheit"/> |  |
|  |  |  |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *Pour des mesures précises*, choisissez comment les informations de distance sont affichées dans les widgets de navigation, comme la distance jusqu'à un point, le prochain virage ou une voie spécifique. |
|          | <Translate android="true" ids="round_up"/> | *Pour une meilleure lisibilité*, les nombres affichés dans les widgets de navigation (distance jusqu'à un point, prochain virage ou voie) seront arrondis à la baisse pour avoir moins de chiffres. <br/> Par exemple : 3672 m *→* 3,6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


### Autre {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Autres paramètres généraux des profils Android](@site/static/img/personal/profiles/other_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Autres paramètres généraux des profils iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)  

</TabItem>

</Tabs>

La section **Autre** fournit des paramètres de profil supplémentaires pour personnaliser l'interface et les commandes d'entrée d'OsmAnd. Ces paramètres vous permettent de configurer des appareils externes, d'ajuster les préférences d'animation et de basculer en mode plein écran.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – Connectez des contrôleurs externes tels que *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*, *<Translate ios="true" ids="sett_generic_ext_input"/>*, ou *<Translate android="true" ids="sett_parrot_ext_input"/>* pour utiliser OsmAnd avec des boutons physiques.

- **<Translate android="true" ids="position_animation"/>** / **Animer sa propre position** – L'icône de [position](../map/interact-with-map.md#my-location-and-zoom) s'anime à chaque point GPS reçu (une fois par seconde). Un léger retard dans son mouvement peut être perceptible, en particulier lors de déplacements rapides ou de fluctuations du signal GPS. Vous pouvez ajuster cet effet en utilisant le paramètre *Temps de prédiction* (Android uniquement) : des valeurs plus élevées augmentent la fluidité mais ajoutent du retard, des valeurs plus faibles réduisent le retard mais peuvent rendre le mouvement moins fluide.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*Android uniquement*) – Activez ou désactivez la possibilité d'utiliser les boutons de volume de votre appareil pour [zoomer](../map/interact-with-map.md#my-location-and-zoom) sur la carte.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*Android uniquement*) – Lisse la rotation de la carte avec un [mouvement progressif](https://en.wikipedia.org/wiki/Kalman_filter), réduisant les changements de position brusques. Cela introduit un petit délai (*moins d'une seconde*).

<!-- - [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*Android only*) – Uses your device’s [magnetic sensor](https://en.wikipedia.org/wiki/Kalman_filter) to stabilize map rotation, reducing abrupt changes. This also introduces a slight delay.-->

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*Android uniquement*) – Appuyez sur un espace vide de la carte pour masquer les boutons de contrôle et les widgets, maximisant la visibilité de la carte.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#remove-animations) (*Android uniquement*) – Désactivez les animations en mode navigation pour des transitions d'écran plus rapides.



## Paramètres de navigation {#navigation-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Paramètres de navigation iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

Pour un aperçu détaillé des options de navigation, consultez l'article [Paramètres de navigation](../navigation/guidance/navigation-settings.md), qui explique comment configurer OsmAnd pour une expérience de navigation optimale.

- [Type de navigation](../navigation/guidance/navigation-settings.md#navigation-type) - Choisissez le mode de navigation approprié en fonction de votre méthode de déplacement et de la disponibilité d'Internet.

- [Paramètres de l'itinéraire](../navigation/guidance/navigation-settings.md#route-parameters) - Définissez comment OsmAnd calcule les itinéraires, y compris les préférences pour éviter certaines routes ou sélectionner des types d'itinéraires.

- [Alertes à l'écran](../navigation/guidance/navigation-settings.md#screen-alerts) - Activez le *Widget d'alertes* pour afficher des notifications en temps réel pour les limitations de vitesse, les virages et autres conditions routières importantes.

- [Instructions vocales](../navigation/guidance/navigation-settings.md#voice-prompts) - Activez le guidage audio pour recevoir des instructions de navigation parlées en conduisant ou en marchant le long d'un itinéraire sélectionné.

- [Paramètres du véhicule](../navigation/guidance/navigation-settings.md#vehicle-parameters) – Configurez les paramètres spécifiques au véhicule tels que la vitesse maximale et la hauteur du véhicule pour garantir un itinéraire précis et éviter les routes à accès restreint.

- [Personnaliser la ligne de l'itinéraire](../navigation/guidance/navigation-settings.md#customize-route-line) – Ajustez la couleur, la largeur et le style de la ligne de l'itinéraire affichée sur la carte pour une meilleure visibilité pendant la navigation.

- [Carte pendant la navigation](../navigation/guidance/navigation-settings.md#map-during-navigation) – Affichez le positionnement en temps réel sur la carte, suivez la progression le long de l'itinéraire et améliorez l'orientation à l'aide de points de repère.

- [Guidage détaillé de la trace](../navigation/guidance/navigation-settings.md) – Améliorez la navigation virage par virage en alignant votre itinéraire sur les routes cartographiées. Paramètres disponibles : *Demander à chaque fois* ou *Toujours*.

:::info
Il n'y a pas de paramètres de navigation dans le profil *Parcourir la carte*.  
:::


## Configurer la carte {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Configurer la carte*

![Paramètres de configuration de la carte des profils Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

![Paramètres de configuration de la carte des profils iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

Le menu [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) vous permet de personnaliser les paramètres d'affichage de la carte pour le profil sélectionné, permettant une meilleure visualisation des éléments clés de la carte.  

Avec ce menu, vous pouvez :

- **Mettre en évidence les éléments importants de la carte**, y compris les [points favoris](../personal/favorites.md), les [marqueurs de navigation](../personal/markers.md), ou les [Points d'Intérêt](../map/point-layers-on-map.md#points-of-interest-pois) spéciaux sur la carte.

- **Afficher des itinéraires spécifiques et des fichiers GPX**, y compris des traces de tiers pour la navigation ou l'analyse.

- **Superposer des couches de carte supplémentaires**, telles que des [informations de terrain](../plugins/topography.md), des **images satellites**, ou d'autres [cartes raster](../map/raster-maps.md) disponibles.

- **Activer la visualisation des transports en commun**, montrant les [itinéraires et arrêts](../map/public-transport.md) pour une meilleure planification de voyage.

- **Ajuster l'apparence de la carte** en sélectionnant un [style de carte](../map/vector-maps.md#default-map-styles) différent pour répondre à vos besoins.


## Configurer l'écran {#configure-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- Allez à : *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  
- Allez à : *Menu → Paramètres → Profil de l'app → Configurer l'écran*

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

Le [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) est un menu qui vous permet de configurer les widgets pour le profil sélectionné à afficher sur la carte. Sur cet écran, vous pouvez activer et configurer les widgets [d'information](../widgets/info-widgets.md) et de [navigation](../widgets/nav-widgets.md), ainsi que d'autres éléments.


## Apparence du profil {#profile-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Apparence des profils](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Apparence des profils](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

Les paramètres **Apparence du profil** vous permettent de personnaliser le nom et la représentation visuelle de votre profil. Vous pouvez également modifier l'apparence de [Ma position](#my-location-appearance) ici. Bien que le *nom du profil* doive être unique, les *icônes* et les *couleurs* peuvent être les mêmes pour différents profils. Ces modifications seront appliquées dans diverses parties de l'application, comme le menu de [Préparation de l'itinéraire](../navigation/setup/route-navigation.md).


## Apparence de Ma position {#my-location-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Apparence de Ma position](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Apparence de Ma position](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

Les paramètres **Apparence de Ma position** vous permettent de personnaliser la façon dont votre position est affichée sur la carte, que ce soit à l'arrêt ou en mouvement. Le mouvement est détecté par le système d'exploitation lorsque la vitesse de l'appareil est **supérieure à zéro**.

### Angle de vue et rayon de localisation {#view-angle-and-location-radius}

Vous pouvez personnaliser les éléments visuels liés à votre position et les appliquer séparément ou ensemble pour les positions **À l'arrêt** et **Navigation**. Pour les modes 2D et 3D, l'*Angle de vue* et le *Rayon de localisation* sont affichés dans la même couleur sélectionnée pour le [profil de navigation](#profile-appearance), directement sous l'icône [Ma position](../map/interact-with-map.md#my-location-and-zoom).

- **<Translate android="true" ids="view_angle"/>** – Affiche une zone en **forme de cône** indiquant la direction dans laquelle vous faites face actuellement.  
- **<Translate android="true" ids="location_radius"/>** – Affiche une **zone circulaire** autour de votre icône, représentant la précision de votre position actuelle.


### Icônes 3D personnalisées {#custom-3d-icons}

Pour une expérience plus personnalisée, vous pouvez créer et ajouter des **icônes 3D personnalisées** à OsmAnd.  

***Comment ajouter une icône de localisation 3D personnalisée :***

1. **Créez un modèle 3D**. Concevez votre icône aux formats [MTL et OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file).

2. **Intégrez le modèle dans OsmAnd :**  
   - Développez un [plugin personnalisé](../plugins/custom.md) en utilisant l'[exemple de plugin](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf) fourni.  
   - Placez vos fichiers d'icônes 3D dans les chemins suivants :  

     `..osmand/models/icon_folder_name/custom_3d_file.mtl`  
     `..osmand/models/icon_folder_name/custom_3d_file.obj`

   - Alternativement, copiez les fichiers **MTL et OBJ** directement dans le dossier OsmAnd en utilisant la même structure de répertoires.  

### Modes d'orientation de la carte {#map-orientation-modes-my-location}

Vous pouvez contrôler le comportement de l'icône **Ma position** en utilisant différents [modes d'orientation de la carte](../widgets/map-buttons.md#compass).  

- Si l'icône de localisation **bouge ou tourne** à l'arrêt, passez du **Mode Direction du mouvement** ([Rotation de la carte par relèvement](../map/interact-with-map.md#rotate-map-by-bearing)) à un autre mode.  
- Ajustez les paramètres supplémentaires dans *Menu → Paramètres → Profils de l'app → Apparence du profil → Options*.
- Apprenez-en plus sur le suivi du relèvement et de la direction dans la section [Widget de relèvement](../widgets/nav-widgets#bearing-widget).  


## Personnalisation de l'interface utilisateur {#ui-customization}

<InfoAndroidOnly />

:::note Pour les plugins non utilisés
Pour masquer tous les paramètres de contrôle des [plugins](../plugins/index.md#configure-plugin) non utilisés, désactivez-les.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Personnalisation de l'interface utilisateur du profil Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

Avec la fonction de personnalisation de l'interface utilisateur, vous pouvez ajuster le nombre d'éléments dans des actions telles que le [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android), [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) et les [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md). Des informations sur le nombre d'éléments ajoutés par rapport à tous les éléments possibles se trouvent sous le titre de chaque fonctionnalité.


### Tiroir {#drawer}

![Tiroir du profil Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  ![Réinitialisation du profil Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)  

- **Principaux éléments visibles** - Dans la section *Personnaliser l'interface utilisateur*, vous pouvez *réorganiser, masquer et restaurer* les éléments du [Tiroir](../start-with/main-menu.md#customize-advanced-use-of-android) pour correspondre à vos préférences.

- **<Translate android="true" ids="reset_to_default"/>** - Restaure la *liste originale des éléments* dans le tiroir, annulant instantanément toutes les personnalisations.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Vous permet de copier la *disposition du tiroir* d'un autre profil OsmAnd pour maintenir une configuration cohérente entre les profils.

### Configuration de la carte {#configuring-the-map}

![Menu Configurer la carte du profil Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Menu Configurer la carte du profil Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Menu Configurer la carte** - Dans la section *Personnaliser l'interface utilisateur*, vous pouvez *réorganiser ou masquer des éléments* du menu [Configurer la carte](../map/configure-map-menu.md), permettant un accès rapide aux paramètres fréquemment utilisés.

- **<Translate android="true" ids="reset_to_default"/>** - Restaure la *liste d'éléments originale* dans le menu Configurer la carte, supprimant toutes les modifications.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Copie la *disposition du menu Configurer la carte* d'un autre profil OsmAnd.


### Actions du menu contextuel {#context-menu-actions}

![Menu contextuel du profil Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)  ![Réinitialisation du menu Configurer la carte du profil Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Menu contextuel de la carte** - Dans la section Personnaliser l'interface utilisateur, vous pouvez réorganiser ou masquer des éléments dans le [menu contextuel de la carte](../map/map-context-menu.md) pour optimiser l'accès aux fonctionnalités fréquemment utilisées.

- **<Translate android="true" ids="reset_to_default"/>** – Restaure la *liste d'éléments par défaut* dans le menu contextuel de la carte, annulant instantanément toutes les modifications.

- **<Translate android="true" ids="copy_from_other_profile"/>** – Copie la *disposition du menu contextuel* d'un autre profil OsmAnd pour maintenir la cohérence entre les différents profils.


## Paramètres des plugins {#plugin-settings}

:::caution Accès aux paramètres des plugins
Pour accéder aux paramètres du plugin, vous devez d'abord [**activer le plugin**](../plugins/index.md#enable--disable) dans la *section Plugins du menu principal*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*  

![Plugins des paramètres du profil Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Plugins des paramètres du profil iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

Les plugins débloquent des fonctionnalités supplémentaires de l'application et peuvent être [payants ou gratuits](../plugins/index.md#purchase). Certains plugins ont leurs propres [paramètres](../plugins/index.md#plugin-settings), d'autres non. OsmAnd vous donne la possibilité de configurer les plugins pour chaque profil séparément.


- **Enregistrement de trajet**. Cet élément ouvre les [paramètres d'enregistrement de trajet](../plugins/trip-recording.md#recording-settings) pour le profil sélectionné, où vous pouvez choisir n'importe quel paramètre pour enregistrer vos trajets.

- **Météo**. Les couches de carte interactives [Météo](../plugins/weather.md#weather-settings) vous permettent de surveiller la température, la pression atmosphérique, la couverture nuageuse, la vitesse du vent et les précipitations dans votre ville ou tout autre endroit sur une carte mondiale.

- **Notes audio / vidéo** (*Android uniquement*). Cet élément ouvre les [paramètres du plugin audio-vidéo](../plugins/audio-video-notes.md#plugin-settings) pour le profil sélectionné. Le plugin *Notes audio/vidéo* étend les fonctionnalités d'OsmAnd en vous permettant de créer vos notes sous divers formats tels que photo, vidéo ou audio et de les associer à une localisation géographique ou à votre position actuelle.  

- **Édition OpenStreetMap**. Cet élément ouvre les [paramètres du plugin d'édition OpenStreetMap](../plugins/osm-editing.md#settings) pour le profil sélectionné. Avec OsmAnd et le plugin d'édition OSM, vous pouvez contribuer à OpenStreetMap.org en créant ou en modifiant des POI, en ajoutant ou en commentant des notes, et en téléchargeant des traces GPX enregistrées.

- **Capteurs externes**. Lorsque vous appuyez sur un élément dans la section *Paramètres des plugins*, les [paramètres des capteurs externes](../plugins/external-sensors.md#sensor-settings) pour le profil sélectionné sont ouverts. Le plugin Capteurs externes vous permet de lire et d'enregistrer des données provenant de capteurs externes sans fil et de les afficher à l'aide de widgets dans l'application OsmAnd.

- **Accessibilité** (*Android uniquement*). Cet élément ouvre les [paramètres du plugin Accessibilité](../plugins/accessibility.md#plugin-settings) pour le profil sélectionné. Les paramètres du plugin Accessibilité vous permettent de personnaliser l'application selon vos besoins. Tous les paramètres concernent le processus de navigation et sont définis individuellement pour chaque profil.

- **Développement OsmAnd**. Ce menu ouvre les [paramètres du plugin de développement OsmAnd](../plugins/development.md#plugin-settings), où vous pouvez configurer l'application OsmAnd à des fins de test ou explorer les fonctionnalités à venir. Ces paramètres sont destinés aux développeurs et ne sont pas nécessaires pour une utilisation normale de l'application.  

  > ***La modification des paramètres du plugin de développement OsmAnd affecte tous les profils.***

- **Wikipedia** (iOS uniquement). Ce menu ouvre les *[paramètres du plugin Wikipedia](../plugins/wikipedia.md#wikipedia-settings)*. Vous pouvez sélectionner la langue dans laquelle les articles seront affichés et choisir de télécharger ou non les images de Wikipedia. Avoir Wikipedia lors de votre voyage améliore votre expérience en fournissant des informations sur les lieux que vous visitez. Il fonctionne hors ligne et affiche les articles Wikipedia pertinents directement sur la carte en relation avec les points d'intérêt.

- **Métrique du véhicule**. Ce menu ouvre les *[paramètres du plugin Métriques du véhicule](../plugins/vehicle-metrics.md#scanner-settings)*. Il vous permet de connecter un scanner OBD-II à OsmAnd.

- **Suivi de navire AIS** (Android uniquement). Ce menu ouvre les *[paramètres du plugin de suivi de navire AIS](../plugins/ais-tracker.md#plugin-settings)*. Ce plugin vous permet de connecter un traqueur AIS à OsmAnd.



## Actions {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres des actions des profils Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres des actions des profils iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)  

</TabItem>

</Tabs>

Actions avec le profil sélectionné :  

- [Exporter le profil](https://osmand.net/docs/user/personal/import-export#export) - Exporter tous les paramètres du profil sélectionné au format OSF.

- **Copier depuis un autre profil** - Copie tous les paramètres d'un autre profil existant dans votre application OsmAnd.

- **Réinitialiser par défaut** - Ramène tous les paramètres à leur état initial.

- **Supprimer le profil** :
    - Cette action n'est disponible que pour *Android* et uniquement pour un *profil personnalisé*.
    - Les profils par défaut ne peuvent pas être supprimés.
    - Pour ajouter un profil, allez à *Menu → Paramètres → Profils de l'app → + Nouveau profil*.


## Articles connexes {#related-articles}

- [Gérer les traces](../personal/tracks/manage-tracks.md#import--export-track)
- [Historique de recherche](../search/search-history.md#export-and-share)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)