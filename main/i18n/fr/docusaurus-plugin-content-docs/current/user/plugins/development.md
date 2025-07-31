---
source-hash: 32e4659b9165cb30c26907433bd60d7e450043c64b5dd1d074dd139baf41e938
sidebar_position: 10
title: Développement OsmAnd
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




## Vue d'ensemble {#overview}

Les fonctions de test de l'application sont regroupées dans le plugin de développement OsmAnd. Utilisez-les à vos risques et périls.

Le plugin de développement OsmAnd vous permet d'essayer de nouvelles fonctionnalités de l'application ou de configurer OsmAnd pour des tests : simuler des itinéraires de navigation, vérifier les performances de rendu de l'écran, etc. Le plugin est conçu pour les *développeurs et les utilisateurs expérimentés* et n'est pas nécessaire pour l'utilisation quotidienne de l'application.


## Paramètres de configuration requis {#required-setup-parameters}

Pour activer les fonctionnalités spéciales pour les développeurs et les testeurs :

1. [Activez](../plugins/index.md#enable--disable) le plugin de développement OsmAnd dans la section Plugins du *Menu principal*.
2. Effectuez les réglages nécessaires dans le [menu Paramètres](#plugin-settings) du plugin.
3. Activez les **widgets développeur** si nécessaire.


## Paramètres du plugin {#plugin-settings}

:::info info
Les paramètres du plugin de développement OsmAnd sont globaux et s'appliquent à tous les profils.
:::

Utilisez l'un des chemins suivants pour ouvrir les paramètres du plugin :

- *Menu principal → Plugins → Développement OsmAnd → Paramètres*.
- *Menu principal → [Paramètres globaux](../personal/global-settings.md) → Profil → Paramètres du plugin de développement OsmAnd*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Développement Paramètres Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Développement Paramètres 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Développement Paramètres iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Terrain {#terrain}

- **Utiliser le format raster [SQLIte](../../technical/osmand-file-formats/osmand-sqlite) pour l'ombrage et la pente** (*Android*). Charge les cartes raster de l'ancien format.


### Dépannage {#troubleshotting}

- **Simuler votre position** (*Android* / *iOS*). [Simulez](#gpx-track-simulation) l'emplacement et le mouvement à l'aide d'une trace GPX.
- **Mode d'économie de batterie** (*Android* / *iOS*). Ce paramètre réduit [le taux de rafraîchissement de l'écran](#map-rendering-fps-widget) de 20 images par seconde pour aider à économiser la batterie lors de l'utilisation des applications.
- **Utiliser les icônes de position de localisation 3D** (*iOS*). Vous permet de sélectionner une icône 3D pour l'[icône Ma position](../personal/profiles.md#my-location-appearance).
- **Simuler les données OBD** (*Android*). Permet la simulation de l'utilisation du [scanner OBD](./vehicle-metrics.md).
- **Informations de débogage des performances** (*Android*). Affiche les performances de rendu et de navigation.
- **Désactiver les couches de carte** (*Android*). Désactive toutes les couches de carte sur la carte vectorielle (redémarrage requis).
- **Tampon Logcat** (*Android*). Vérifiez et partagez les journaux détaillés de l'application.
- **Afficher le toast sur la touche pressée** (*Android*). Affiche un message sur la touche.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Le relèvement est la direction de la boussole de votre position actuelle à votre destination prévue. Affecte l'*[enregistrement de trace](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. Le cap est la direction de la boussole de votre position actuelle vers le nord vrai. Cette option est activée par défaut. Affecte l'*[enregistrement de trace](../plugins/trip-recording.md)*.


### Test d'application {#application-testing}

:::caution Android uniquement
:::

- **Simuler le premier démarrage de l'application**. Définit le drapeau indiquant le premier démarrage de l'application, conserve tous les autres paramètres inchangés.
- **Tester les invites vocales**. Sélectionnez une voix et testez en jouant des annonces.
- **Barre d'état transparente**. La carte devient visible sous la barre d'état.
- **Afficher la bannière de la version gratuite**. Affiche la bannière de la version gratuite même dans la version payante.
- **Afficher les informations de débogage**. Affiche des informations graphiques sur le placement de chaque texte sur la carte.
- **Autoriser l'affichage en haut**. Permet aux textes de la carte d'être affichés les uns sur les autres.


### Algorithmes internes {#internal-algorithms}

:::caution Android uniquement
:::

- **Mode sécurisé**. Exécute l'application en mode sécurisé (plus lent).


### Paramètres de mémoire {#memory-settings}

:::caution Android uniquement
:::

- L'option **Mémoire allouée pour le routage** vous permet de déterminer la quantité de mémoire allouée pour le calcul des longs itinéraires. Vous pouvez utiliser cette option si le [routage standard A*](../navigation/guidance/navigation-settings.md#development-settings) est sélectionné dans les *paramètres de navigation*.

***Calcul des itinéraires extra-longs :***

- Une allocation de mémoire plus élevée peut avoir un impact sur les performances des autres applications.
- [Calcul des itinéraires de 50 km pour les piétons](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Informations et statistiques {#info-and-statistics}

:::caution Android uniquement
:::

- **Mémoire allouée**. Affiche la mémoire système allouée à l'application OsmAnd.
- **Mémoire native totale**. Affiche la quantité totale de mémoire native allouée à l'application, y compris la mémoire proportionnelle.
- **Informations A-GPS**. Indique la dernière fois que les données A-GPS ont été téléchargées.
- **Informations jour/nuit**. Indique les heures de lever et de coucher du soleil d'aujourd'hui.
- **Statistiques énergétiques (moyenne 1 / 5 / 15 minutes)**. Affiche le niveau de batterie par minute (%) et la consommation d'énergie moyenne (mAh) sur des intervalles de 1, 5 et 15 minutes.
- **Statistiques de rendu (moyenne 1 / 5 / 15 minutes)**. Affiche les statistiques de rendu, y compris les FPS sur les 1 000 dernières images, le CPU (tuiles), le CPU (temps d'inactivité) et le CPU (veille) en moyenne sur des intervalles de 1, 5 et 15 minutes.

**Bouton :**

- **Réinitialiser les paramètres du plugin aux valeurs par défaut**. Réinitialise tous les paramètres du plugin à leurs valeurs par défaut.

![Développement Paramètres Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Widget FPS de rendu de carte {#map-rendering-fps-widget}

:::info Important
Les widgets développeur OsmAnd ne peuvent être ajoutés à l'écran que lorsque le plugin de développement OsmAnd est activé.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Widget de développement fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Widget de développement fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Widget de développement iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

Le [Widget FPS](../widgets/info-widgets.md#map-rendering-fps) indique la vitesse à laquelle la carte et les éléments de la carte sont affichés et rafraîchis. La valeur numérique est indiquée en images par seconde (FPS).


## Widgets de position de la caméra {#camera-position-widgets}

:::info Important
Les widgets développeur OsmAnd ne peuvent être ajoutés à l'écran que lorsque le plugin de développement OsmAnd est activé.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Widgets de position de la caméra 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Widgets de position de la caméra 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Widgets de position de la caméra 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Widgets de position de la caméra 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

Vous pouvez utiliser les [widgets de position de la caméra](../widgets/info-widgets.md#camera-widgets) pour donner à la carte OsmAnd un aspect réaliste et correspondre aux photos de la Terre prises à la fois d'en haut et de l'espace.


### Inclinaison de la caméra {#camera-tilt}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget d'inclinaison de la caméra Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Widget d'inclinaison de la caméra Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget d'inclinaison de la caméra iOS 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Widget d'inclinaison de la caméra iOS 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

Le widget d'inclinaison de la caméra affiche l'inclinaison entre le vecteur de vue central de la caméra (observateur) et un sol plat imaginaire de la Terre. La valeur par défaut est de 90 degrés (pas d'inclinaison).

:::note
L'inclinaison de la caméra est modifiée en déplaçant la caméra (observateur) tandis que le point central sur la carte (que nous regardons) reste le même. La distance à celui-ci (en fait, le zoom) ne change pas.
En même temps, en raison du mouvement imaginaire de l'observateur, la distance de la caméra à la surface change.
:::


### Élévation de la caméra {#camera-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget d'élévation de la caméra Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Widget d'élévation de la caméra Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget d'élévation de la caméra iOS 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Widget d'élévation de la caméra iOS 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

Le widget d'élévation de la caméra affiche l'élévation de la caméra au-dessus du niveau de la surface. L'élévation de la caméra est indiquée en mètres / kilomètres.


### Niveau de zoom {#zoom-level}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de niveau de zoom Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Widget de niveau de zoom Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de niveau de zoom iOS 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Widget de niveau de zoom iOS 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

Le widget a deux vues qui sont commutées en le touchant :

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Affiche le niveau de zoom actuel de la carte.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Affiche le rapport actuel entre une distance sur une carte et la distance correspondante sur la Terre. Exemples : "1 : 3 000", "1 : 3,3 M" "1 : 340 K".

:::note

- Le niveau de zoom initial (0) est le niveau auquel toute la surface de la Terre (la carte complète) est affichée à l'écran, et sa taille est de 256 par 256 pixels.
- Chaque niveau de zoom suivant réduit la distance imaginaire au sol d'environ 2 fois.

:::

### Distance à la cible {#distance-to-target}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de distance à la cible 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Widget de distance à la cible 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de distance à la cible 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Widget de distance à la cible 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

Le widget Distance de la caméra à la cible affiche la distance entre la caméra (observateur) et le centre de la carte. Cette distance est affichée en mètres / kilomètres.


### Comparaison avec une imagerie satellite {#comparison-with-a-satellite-imagery}

![Comparaison](@site/static/img/plugins/development/comparison.png)

Une comparaison de la carte OsmAnd et de la surface de la Terre révèle les schémas suivants :

- La distorsion maximale est observée à de grands zooms (zoom 6-7 pour une inclinaison de la caméra de 90 degrés).
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


## Widget RAM disponible {#available-ram-widget}

Ce widget est conçu spécifiquement pour vous lorsque vous utilisez OsmAnd afin de fournir une interaction plus pratique et informative avec la RAM disponible sur votre appareil. Il vous permet de surveiller facilement et rapidement la RAM disponible, ce qui est particulièrement utile lorsque vous utilisez OsmAnd pour la navigation. Pour en savoir plus sur le widget, consultez l'article [Widgets d'information](../widgets/info-widgets.md#available-ram).


## Simulation de trace GPX {#gpx-track-simulation}

OsmAnd offre la possibilité de simuler l'emplacement et le mouvement de votre appareil à l'aide d'une trace GPX. Pour cela, utilisez l'option *<Translate android="true" ids="simulate_location_by_gpx"/>* dans les [paramètres](#plugin-settings) du plugin de développement OsmAnd :

- Appuyez sur *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- Sélectionnez une trace pour simuler l'emplacement et le mouvement de l'appareil.
- Sélectionnez la vitesse de simulation du mouvement.
- Appuyez sur le bouton Démarrer.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres de développement Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Paramètres de développement Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de développement iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Paramètres de développement iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Après avoir lancé la simulation, vous verrez sur l'écran principal de l'application que le repère de navigation se déplace selon la trace GPX. Appuyez sur le [bouton ma position](../map/interact-with-map#my-location-and-zoom) pour synchroniser *Ma position* (géolocalisation simulée de l'appareil) avec le centre de la carte.
Pour arrêter la simulation du mouvement de votre appareil, retournez aux [paramètres](#plugin-settings) de développement OsmAnd et appuyez sur **arrêter** dans l'option **simuler votre position**.

- *<Translate android="true" ids="simulate_location_by_gpx"/>* est également accessible via le **[menu d'action rapide](../widgets/quick-action.md#navigation)**.
- La vitesse de déplacement de la position pendant la simulation peut être réglée égale à la vitesse enregistrée (1), ou plus rapide (x2, x3, x4).
- Vous pouvez également simuler un mouvement le long d'une trace GPX à partir du [menu de navigation](../navigation/setup/route-navigation.md#simulated-navigation) sans activer le plugin de développement OsmAnd. Dans ce cas, votre position ne sera pas synchronisée avec la trace.


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Dernière mise à jour : mai 2023*