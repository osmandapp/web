---
source-hash: c8b722b01f6bc574c9ee9bfcf1cc77381d108fa84cf86bde7d86f0c7c73845d6
sidebar_position: 18
title:  Plugins
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

Les plugins étendent considérablement les fonctionnalités d'OsmAnd. Chacun est conçu pour répondre à une tâche ou un cas d'utilisation spécifique, comme l'enregistrement d'un trajet, l'accès hors ligne à des articles Wikipédia, la visualisation de données de terrain ou la fourniture d'une vue au niveau de la rue.

Les plugins peuvent être internes, activés dans l'application OsmAnd, ou externes, des programmes installés séparément. Les plugins tiers fonctionnent via l'API OsmAnd et peuvent accéder aux données OsmAnd.


## Configurer un plugin {#configure-plugin}

Pour accéder aux fonctionnalités d'un plugin, il faut d'abord l'[activer](#enable--disable), et certains plugins nécessitent un [achat](#purchase) avant utilisation. Ensuite, dans certains cas, une couche de carte spécifique doit être activée, ou un profil utilisateur doit être [configuré](#plugin-settings).


### Activer / Désactiver {#enable--disable}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Activer*

![Activer les plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Exemple de plugin Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Activer les plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Exemple de plugin iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Achat {#purchase}

La plupart des plugins sont disponibles gratuitement, seuls les plugins de la liste ci-dessous nécessitent l'achat d'une licence [OsmAnd+ ou OsmAnd Pro](../purchases/index.md) pour être utilisés :

- [Topographie](../plugins/topography.md)
- [Relief 3D](../plugins/topography.md#3d-relief) (fonctionnalité du plugin Topographie)
- [Wikipédia](../plugins/wikipedia.md)
- [Vue carte nautique](../plugins/nautical-charts.md)
- [Météo](../plugins/weather.md)

Des informations détaillées sur l'achat de l'application se trouvent dans la section [Achat](../purchases/).

### Fonctionnalités des plugins {#plugin-features}

Les plugins OsmAnd peuvent augmenter ces groupes de fonctionnalités : **Couches**, **Widgets**, **Actions du menu contextuel**, **Actions du tiroir**, **Style de carte**, **Source de carte**, **Profil**.

🤖 *- uniquement pour la version Android d'OsmAnd.*

| Nom du plugin | Fonctionnalités |
|:------------|:-------|
| [Wikipédia](#wikipedia) | [Couche de carte](../plugins/wikipedia.md#download-wikipedia-packages), [Menu contextuel](../plugins/wikipedia.md#wikipedia-languages) |
| [Cartes en ligne](#online-maps) |[Couche de carte](../plugins/online-map.md#configure-map-source) |
| [Enregistrement de trajet](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Profil](../plugins/trip-recording.md#profile-settings) |
| [Topographie](#topography) | [Couche de carte](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [Relief 3D](#topography) 🤖  | [Couche de carte](../plugins/topography.md#3d-relief) |
| [Météo](../plugins/weather.md) | [Couche de carte](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Écran](../plugins/weather.md#configure-screen) |
| [Vue carte nautique](#nautical-map-view) | [Style de carte](../plugins/nautical-charts.md#nautical-map-style), [Profil](../plugins/nautical-charts.md#nautical-options)  |
| [Vue carte de ski](#ski-map-view) | [Style de carte](../plugins/ski-maps.md#set-winter-style), [Profil](../plugins/ski-maps.md#skiing-profile) |
|[Notes audio/vidéo](#audiovideo-notes) 🤖  | [Couche de carte](../plugins/audio-video-notes.md#show-all-on-the-map), [Menu contextuel](../plugins/audio-video-notes.md#create), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[Édition OpenStreetMap](#openstreetmap-editing)| [Couche de carte](../plugins/osm-editing.md#how-to-use) |
|[Position de stationnement](#parking-position) | [Menu contextuel](../plugins/parking.md#set-a-point), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Couche de carte](../plugins/mapillary.md#map-layer), [Menu contextuel](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[Capteurs externes](#external-sensors) 🤖  | [Widget](../plugins/external-sensors.md#widgets) |
|[Accessibilité](#accessibility) 🤖  | [Paramètres personnalisés](../plugins/accessibility.md#plugin-settings) |
| [Développement OsmAnd](#osmand-development) | [Paramètres personnalisés](../plugins/development.md#plugin-settings) |
| [OsmAnd Tracker](#osmand-tracker) 🤖  | [Couche de carte](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#osmand-tracker-widget), [Menu contextuel](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [Suivi de navires AIS](#ais-vessel-tracker) 🤖  |  [Paramètres personnalisés](../plugins/ais-tracker.md#plugin-settings) |


### Paramètres des plugins {#plugin-settings}

:::caution NOTE
Seuls le plugin de développement OsmAnd et le plugin d'édition OSM modifient les paramètres pour tous les profils. Les autres plugins sont configurés pour chaque profil séparément.
:::

La plupart des plugins fournissent des paramètres spécifiques au profil ou globaux, accessibles via :

- *Menu principal → Plugins → Nom du plugin → Paramètres (&#x2699 pour iOS)* ou
- *Menu principal → Paramètres → Profil → [Paramètres des plugins](../personal/profiles.md#plugin-settings)*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Paramètres plugin Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Paramètres plugin Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres plugin iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Paramètres plugin iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

Les plugins suivants proposent leurs propres paramètres :

🤖 *- uniquement pour la version Android d'OsmAnd.*

| Nom du plugin | Paramètres |
|:------------|:-------|
| [Enregistrement de trajet](#trip-recording) | Configurer les [modes de fonctionnement](../plugins/trip-recording.md#recording-parameters) de l'enregistrement de trajet |
| [Météo](#weather) | Configurer les unités de mesure pour l'affichage des événements météorologiques |
|[Notes audio/vidéo](#audiovideo-notes) 🤖  | Sélectionner le [format vidéo, la durée de stockage, etc.](../plugins/audio-video-notes.md#plugin-settings) |
|[Édition OpenStreetMap](#openstreetmap-editing)| Spécifier le [login](../plugins/osm-editing.md#plugin-settings) de l'utilisateur |
|  [Capteurs externes](#external-sensors) 🤖  | Se connecter à un appareil externe [Paramètres](../plugins/external-sensors.md#settings) |
|  [Accessibilité](#accessibility) 🤖  | Les [Paramètres](../plugins/accessibility.md#plugin-settings) vous permettent d'utiliser les [fonctionnalités d'accessibilité Android](https://www.android.com/accessibility/) dans OsmAnd. |
| [Développement OsmAnd](#osmand-development) | Les [paramètres du plugin](../plugins/development.md#plugin-settings) vous permettent d'activer des fonctionnalités spéciales pour les développeurs ou les utilisateurs expérimentés |
|  [OsmAnd Tracker](#osmand-tracker) 🤖  | Tous les paramètres sont configurables dans une application séparée |
| [Suivi de navires AIS](#ais-vessel-tracker) | Les [paramètres du plugin](../plugins/ais-tracker.md#plugin-settings) vous permettent d'activer des paramètres spéciaux |

### Actions des plugins {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *en utilisant cette option, les paramètres du plugin peuvent être réinitialisés aux valeurs par défaut*.
**<Translate android="true" ids="copy_from_other_profile"/>** - *les paramètres du plugin peuvent être copiés depuis un autre profil*.


## Liste des plugins {#plugins-list}


### [Wikipédia](./wikipedia.md) {#wikipedia}

Avoir Wikipédia pendant votre voyage vous aide à en apprendre davantage sur les lieux que vous visitez. Il est disponible hors ligne et affiche les articles Wikipédia liés aux points d'intérêt directement sur la carte.

### [Cartes en ligne](./online-map.md) {#online-maps}

Les cartes en ligne OsmAnd sont un ajout étendu à la base de données OpenStreetMap déjà présente dans l'application. Avec ce plugin, vous pouvez ajouter des couches à votre carte avec des informations provenant de diverses sources.

### [Enregistrement de trajet](./trip-recording.md) {#trip-recording}

Pour raconter où vous êtes allé, les données GPS, telles que la latitude et la longitude de votre position, peuvent être enregistrées et stockées dans un fichier, puis réutilisées, améliorées, enrichies de points de passage, fournies pour la navigation, partagées avec des amis, etc.

### [Topographie](./topography.md) {#topography}

Les informations topographiques, telles que les courbes de niveau, l'ombrage, la pente, le relief 3D, aident à faire une évaluation visuelle du relief en voyant l'élévation, le relief, les extrêmes, la raideur, les points de même hauteur, etc.

### [Vue carte nautique](./nautical-charts.md) {#nautical-map-view}

La vue carte nautique fournit une représentation graphique détaillée des océans, des mers, des zones côtières et des rivières pour vous aider à naviguer sur l'eau, à voir les routes de trafic populaires, les obstacles dans la voie navigable, les ports, les mouillages et autres références essentielles.

### [Vue carte de ski](./ski-maps.md) {#ski-map-view}

La vue carte de ski affiche les couleurs hivernales et les pistes de descente ou de ski de fond, ainsi que les téléphériques, les télésièges, les installations et services à proximité, ce qui est utile pour naviguer dans des destinations telles que les zones de loisirs, les stations de ski et les parcs de terrain.

### [Notes audio/vidéo](./audio-video-notes.md) {#audiovideo-notes}

Créez des notes audio/vidéo pour référence future, par exemple pour vous souvenir d'un événement, d'une scène ou d'une interaction. Les notes audio/vidéo créées sont disponibles dans *Mes lieux* ainsi que sur la carte en tant que couche individuelle d'histoires et de pensées créées par l'utilisateur et liées à une géolocalisation. Uniquement pour Android.

### [Position de stationnement](./parking.md) {#parking-position}

Définissez un point sur la carte où votre voiture est garée dans la rue et informez votre calendrier de la fin du temps de stationnement. Cela vous permettra de suivre plus facilement l'heure et l'emplacement de votre voiture.

### [Édition OpenStreetMap](./osm-editing.md) {#openstreetmap-editing}

Le plugin d'édition OpenStreetMap vous permet de contribuer à OpenStreetMap, une communauté mondiale créant une carte complète du monde et fournissant des données open source à jour et accessibles au public.

### [Mapillary](./mapillary.md) {#mapillary}

Visualisez des vues au niveau de la rue de vos itinéraires ou points d'intérêt, fournies par [Mapillary](https://www.mapillary.com/) (une connexion Internet est requise).

### [Accessibilité](./accessibility.md) {#accessibility}

Le plugin Accessibilité rend les fonctionnalités d'accessibilité de l'appareil directement disponibles dans OsmAnd. Uniquement pour Android.

### [Capteurs externes](./external-sensors.md) {#external-sensors}

Connectez des capteurs externes pour afficher leurs données dans OsmAnd et stocker les informations dans les enregistrements de trace.

### [Métriques du véhicule](./vehicle-metrics.md) {#vehicle-metrics}

Connectez un scanner OBD-II pour afficher les données du véhicule dans OsmAnd et stocker les informations dans les enregistrements de trace.

### [Météo](./weather.md) {#weather}

Affiche les prévisions horaires pour la journée en cours et pour les 7 jours à venir.

### [Développement OsmAnd](./development.md) {#osmand-development}

Le plugin de développement OsmAnd s'adresse aux développeurs et aux utilisateurs expérimentés. Il vous permet de simuler des itinéraires de navigation, de vérifier les performances de rendu de l'écran, etc.

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker vous aide à voir où se trouvent vos contacts sur la carte dans OsmAnd. Uniquement pour Android.

### [Suivi de navires AIS](./ais-tracker.md) {#ais-vessel-tracker}

Affiche les positions AIS et les informations sur les navires environnants. Les données AIS sont reçues via le réseau depuis un récepteur AIS externe.

## [Créer un plugin personnalisé](./custom.md) {#create-a-custom-plugin}

Vous pouvez créer votre propre plugin en suivant l'article *Package personnalisé*.


_______

> *Cet article a été mis à jour pour la dernière fois en mars 2025*