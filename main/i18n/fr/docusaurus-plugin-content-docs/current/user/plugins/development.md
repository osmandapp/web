---
sidebar_position: 10
title:  Développement OsmAnd
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

Les fonctions de test de l'application sont regroupées dans le plugin de développement OsmAnd. Utilisez-les à vos risques et périls.

Le plugin de développement OsmAnd vous permet d'essayer de nouvelles fonctionnalités de l'application ou de configurer OsmAnd pour des tests : simuler des itinéraires de navigation, vérifier les performances de rendu de l'écran, etc. Le plugin est conçu pour les *développeurs et les utilisateurs expérimentés* et n'est pas nécessaire pour une utilisation quotidienne de l'application.


## Paramètres de configuration requis

Pour activer les fonctionnalités spéciales pour les développeurs et les testeurs :

1. [Activez](../plugins/index.md#enable--disable) le plugin de développement OsmAnd dans la section Plugins du *Menu principal*.
2. Effectuez les réglages nécessaires dans le [menu Paramètres](#plugin-settings) du plugin.
3. Activez les **widgets développeur** si nécessaire.


## Paramètres du plugin

:::info info
Les paramètres du plugin de développement OsmAnd sont globaux et s'appliquent à tous les profils.
:::

Utilisez l'un des chemins suivants pour ouvrir les paramètres du plugin :

- *Menu principal → Plugins → Développement OsmAnd → Paramètres*.
- *Menu principal → [Paramètres globaux](../personal/global-settings.md) → Profil → Paramètres du plugin de développement OsmAnd*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Terrain

- **Utiliser le format raster [SQLIte](../../technical/osmand-file-formats/osmand-sqlite.md/) pour l'ombrage et la pente** (*Android*). Charger les cartes raster au format ancien.


### Dépannage

- **Simuler votre position** (*Android* / *iOS*). [Simuler](#gpx-track-simulation) la position et le mouvement à l'aide d'une trace GPX.
- **Mode économie de batterie** (*Android* / *iOS*). Ce paramètre réduit [le taux de rafraîchissement de l'écran](#map-rendering-fps-widget) de 20 images par seconde pour aider à économiser la batterie lors de l'utilisation d'applications.
- **Pourcentage d'interpolation de la position** (*Android*). Ajuste la fluidité de l'affichage de votre position sur la carte pendant la navigation. Un pourcentage plus élevé rend les mouvements plus fluides mais peut légèrement retarder la position affichée par rapport à votre position GPS réelle. Un pourcentage plus faible maintient votre position plus précise mais peut entraîner des mouvements de carte plus brusques.
- **Utiliser des icônes de position 3D** (*iOS*). Vous permet de sélectionner une icône 3D pour l'[icône Ma position](../personal/profiles.md#my-location-appearance).
- **Simuler les données OBD** (*Android*). Permet la simulation de l'utilisation d'un [scanner OBD](./vehicle-metrics.md).
- **Informations de débogage des performances** (*Android*). Affiche les performances de rendu et de navigation.
- **Désactiver les couches de carte** (*Android*). Désactive toutes les couches de carte sur la carte vectorielle (redémarrage requis).
- **Buffer Logcat** (*Android*). Vérifier et partager les journaux détaillés de l'application.
- **Afficher le toast sur la touche pressée** (*Android*). Afficher un message sur la touche.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Le relèvement est la direction de la boussole de votre position actuelle vers votre destination prévue. Affecte l'*[enregistrement de trace](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. Le cap est la direction de la boussole de votre position actuelle vers le nord vrai. Cette option est activée par défaut. Affecte l'*[enregistrement de trace](../plugins/trip-recording.md)*.


### Test d'application

:::caution Android only
:::

- **Simuler le premier démarrage de l'application**. Définit le drapeau indiquant le premier démarrage de l'application, conserve tous les autres paramètres inchangés.
- **Tester les invites vocales**. Sélectionnez une voix et testez en lisant les annonces.
- **Barre d'état transparente**. La carte devient visible sous la barre d'état.
- **Afficher la bannière de la version gratuite**. Afficher la bannière de la version gratuite même dans la version payante.
- **Afficher les informations de débogage**. Afficher des informations graphiques sur le placement de chaque texte sur la carte.
- **Autoriser l'affichage en haut**. Permet aux textes de la carte d'être affichés les uns sur les autres.


### Algorithmes internes

:::caution Android only
:::

- **Mode sécurisé**. Exécutez l'application en mode sécurisé (plus lent).


### Paramètres de mémoire

:::caution Android only
:::

- L'option **Mémoire allouée pour le routage** vous permet de déterminer la quantité de mémoire allouée pour le calcul de longs itinéraires. Vous pouvez utiliser cette option si le [routage standard A*](../navigation/guidance/navigation-settings.md#development-settings) est sélectionné dans les *Paramètres de navigation*.

***Calcul d'itinéraires extra-longs :***

- Une allocation de mémoire plus élevée peut avoir un impact sur les performances des autres applications.
- [Calcul d'itinéraires de 50 km pour les piétons](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Infos et statistiques

:::caution Android only
:::

- **Mémoire allouée**. Affiche la mémoire système allouée à l'application OsmAnd.
- **Mémoire native totale**. Affiche la quantité totale de mémoire native allouée à l'application, y compris la mémoire proportionnelle.
- **Infos A-GPS**. Indique la date du dernier téléchargement des données A-GPS.
- **Infos jour/nuit**. Indique les heures de lever et de coucher du soleil aujourd'hui.
- **Statistiques énergétiques (moyenne 1 / 5 / 15 minutes)**. Affiche le niveau de batterie par minute (%) et la consommation d'énergie moyenne (mAh) sur des intervalles de 1, 5 et 15 minutes.
- **Statistiques de rendu (moyenne 1 / 5 / 15 minutes)**. Affiche les statistiques de rendu, y compris les FPS sur les 1k dernières images, le CPU (tuiles), le CPU (temps d'inactivité) et le CPU (veille) en moyenne sur des intervalles de 1, 5 et 15 minutes.

**Bouton :**

- **Réinitialiser les paramètres du plugin aux valeurs par défaut**. Réinitialise tous les paramètres du plugin à leurs valeurs par défaut.

    ![Development Settings Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Widget FPS de rendu de carte

:::info Important
Les widgets développeur OsmAnd ne peuvent être ajoutés à l'écran que lorsque le plugin de développement OsmAnd est activé.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Development widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

Le [Widget FPS](../widgets/info-widgets.md#map-rendering-fps) indique la vitesse à laquelle la carte et les éléments de la carte sont affichés et rafraîchis. La valeur numérique est indiquée en images par seconde (FPS).


## Widgets de position de la caméra

:::info Important
Les widgets développeur OsmAnd ne peuvent être ajoutés à l'écran que lorsque le plugin de développement OsmAnd est activé.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

Vous pouvez utiliser les [widgets de position de la caméra](../widgets/info-widgets.md#camera-widgets) pour donner à la carte OsmAnd un aspect réaliste et correspondre aux photos de la Terre prises à la fois d'en haut et depuis l'espace.


### Inclinaison de la caméra

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Camera tilt widget Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Camera tilt widget Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera tilt widget ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Camera tilt widget ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

Le widget d'inclinaison de la caméra affiche l'inclinaison entre le vecteur de vue central de la caméra (observateur) et un sol plat imaginaire de la terre. La valeur par défaut est de 90 degrés (pas d'inclinaison).

:::note
L'inclinaison de la caméra est modifiée en déplaçant la caméra (observateur) tandis que le point central sur la carte (que nous regardons) reste le même. La distance à celui-ci (en fait, le zoom) ne change pas.
En même temps, en raison du mouvement imaginaire de l'observateur, la distance de la caméra à la surface change.
:::


### Élévation de la caméra

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Camera elevation widget Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Camera elevation widget Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera elevation widget ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Camera elevation widget ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

Le widget d'élévation de la caméra affiche l'élévation de la caméra au-dessus du niveau de la surface. L'élévation de la caméra est indiquée en mètres / kilomètres.


### Niveau de zoom

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Zoom level widget Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Zoom level widget Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoom level widget ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Zoom level widget ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

Le widget a deux vues qui sont commutées en appuyant dessus :

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Affiche le niveau de zoom actuel de la carte.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Affiche le rapport actuel entre une distance sur une carte et la distance correspondante sur la terre. Exemples : "1 : 3 000", "1 : 3,3 M" "1 : 340 K".

:::note

- Le niveau de zoom initial (0) est le niveau auquel toute la surface de la terre (la carte complète) est affichée à l'écran, et sa taille est de 256 par 256 pixels.
- Chaque niveau de zoom suivant réduit la distance imaginaire au sol d'environ 2 fois.

:::

### Distance à la cible

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Distance to target widget 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Distance to target widget 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Distance to target widget 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Distance to target widget 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

Le widget Distance de la caméra à la cible affiche la distance entre la caméra (observateur) et le centre de la carte. Cette distance est affichée en mètres / kilomètres.


### Comparaison avec une imagerie satellite

![Comparison](@site/static/img/plugins/development/comparison.png)

Une comparaison de la carte OsmAnd et de la surface de la terre révèle les schémas suivants :

- La distorsion maximale est observée à de grands zooms (zoom 6-7 pour une inclinaison de caméra de 90 degrés).
- À mesure que l'inclinaison de la caméra diminue (de 90 à 10 degrés), la distorsion de la carte augmente.
- Les distorsions commencent à être observées plus tôt aux hautes latitudes.

Le tableau ci-dessous contient des informations sur l'inclinaison de la caméra et la distance à la cible et le niveau de zoom auquel les distorsions de la carte OsmAnd deviennent visibles. Si la caméra continue de s'éloigner de la cible, la distorsion observée de la carte OsmAnd augmentera.

|Inclinaison (90) |Latitude |Zoom max |Hauteur, km |Distorsion|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Inclinaison (60)** |**Latitude** |**Zoom max** |**Hauteur, km** |**Distorsion**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Inclinaison (45)** |**Latitude** |**Zoom max** |**Hauteur, km** |**Distorsion**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Inclinaison (20)** |**Latitude** |**Zoom max** |**Hauteur, km** |**Distorsion**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## Widget RAM disponible

Ce widget est conçu spécifiquement pour vous lorsque vous utilisez OsmAnd afin de fournir une interaction plus pratique et informative avec la RAM disponible sur votre appareil. Il vous permet de surveiller facilement et rapidement la RAM disponible, ce qui est particulièrement utile lors de l'utilisation d'OsmAnd pour la navigation. En savoir plus sur le widget dans l'article [Widgets d'information](../widgets/info-widgets.md#available-ram).


## Simulation de trace GPX

OsmAnd offre la possibilité de simuler la position et le mouvement de votre appareil à l'aide d'une trace GPX. À ces fins, utilisez l'option *<Translate android="true" ids="simulate_location_by_gpx"/>* dans les [paramètres](#plugin-settings) du plugin de développement OsmAnd :

- Appuyez sur *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- Sélectionnez une trace pour simuler la position et le mouvement de l'appareil.
- Sélectionnez la vitesse de simulation de mouvement.
- Appuyez sur le bouton Démarrer.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Après avoir lancé la simulation, vous verrez sur l'écran principal de l'application que le repère de navigation se déplace selon la trace GPX. Appuyez sur le [bouton ma position](../map/interact-with-map#my-location-and-zoom) pour synchroniser *Ma position* (géolocalisation simulée de l'appareil) avec le centre de la carte.
Pour arrêter la simulation du mouvement de votre appareil, revenez aux [paramètres](#plugin-settings) du plugin de développement OsmAnd et appuyez sur **arrêter** dans l'option **simuler votre position**.

- *<Translate android="true" ids="simulate_location_by_gpx"/>* est également accessible via le **[menu d'action rapide](../widgets/quick-action.md#navigation)**.
- La vitesse de déplacement de la position pendant la simulation peut être réglée égale à la vitesse enregistrée (1), ou plus rapide (x2, x3, x4).
- Vous pouvez également simuler un mouvement le long d'une trace GPX à partir du [menu de navigation](../navigation/setup/route-navigation.md#simulated-navigation) sans activer le plugin de développement OsmAnd. Dans ce cas, votre position ne sera pas synchronisée avec la trace.


## Articles connexes

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Cet article a été mis à jour pour la dernière fois en mai 2023*

-- source-hash: blake2s: 5845aab1bfe508dbab11fafce4027fe1158175acd04b09f86dc6b9443811d834 --
