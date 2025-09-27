---
source-hash: 9dd5ee763287f3119c0713993fca648b887d22a8d882b8564a493486c2574fc5
sidebar_position: 18
title:  Greffons
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

Les greffons étendent considérablement les fonctionnalités d'OsmAnd. Chacun est conçu pour répondre à une tâche ou un cas d'utilisation spécifique, comme l'enregistrement d'un trajet, l'accès à des articles Wikipédia hors ligne, la visualisation de données de terrain ou la fourniture d'une vue au niveau de la rue.

Les greffons peuvent être internes, activés dans l'application OsmAnd, ou externes, des programmes installés séparément. Les greffons tiers fonctionnent via l'API OsmAnd et peuvent accéder aux données d'OsmAnd.


## Configurer un greffon {#configure-plugin}

Pour accéder aux fonctionnalités d'un greffon, il doit d'abord être [activé](#enable--disable), et certains greffons nécessitent un [achat](#purchase) avant utilisation. Ensuite, dans certains cas, un calque de carte spécifique doit être activé, ou un profil utilisateur doit être [configuré](#plugin-settings).


### Activer / Désactiver {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Activer*

![Activer les greffons Android](@site/static/img/settings/plugins_enable_android.png) ![Exemple de greffon Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Activer les greffons iOS](@site/static/img/settings/plugins_enable_ios.png) ![Exemple de greffon iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Achat {#purchase}

La plupart des greffons sont disponibles gratuitement, seuls les greffons de la liste ci-dessous nécessitent l'achat d'une licence [OsmAnd+ ou OsmAnd Pro](../purchases/index.md) pour être utilisés :  

- [Topographie](../plugins/topography.md)
- [Relief 3D](../plugins/topography.md#3d-relief) (fonctionnalité du greffon Topographie)
- [Wikipédia](../plugins/wikipedia.md)
- [Vue carte marine](../plugins/nautical-charts.md)
- [Météo](../plugins/weather.md)

Des informations détaillées sur l'achat de l'application se trouvent dans la section [Achat](../purchases/).

### Fonctionnalités des greffons {#plugin-features}

Les greffons OsmAnd peuvent augmenter ces groupes de fonctionnalités : **Calques**, **Widgets**, **Actions du menu contextuel**, **Actions du tiroir**, **Style de carte**, **Source de carte**, **Profil**.

🤖 *- uniquement pour la version Android d'OsmAnd.*

| Nom du greffon | Fonctionnalités |
|:------------|:-------|
| [Wikipédia](#wikipedia) | [Calque de carte](../plugins/wikipedia.md#download-wikipedia-packages), [Menu contextuel](../plugins/wikipedia.md#wikipedia-settings) |
| [Cartes en ligne](#online-maps) |[Calque de carte](../plugins/online-map.md#how-to-prepare-raster-maps) |
| [Enregistrement de trajet](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Profil](../plugins/trip-recording.md#recording-settings) |
| [Topographie](#topography) | [Calque de carte](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [Relief 3D](#topography) 🤖  | [Calque de carte](../plugins/topography.md#3d-relief) |
| [Météo](../plugins/weather.md) | [Calque de carte](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Écran](../plugins/weather.md#weather-forecast-screen) |
| [Vue carte marine](#nautical-map-view) | [Style de carte](../plugins/nautical-charts.md#nautical-map-style), [Profil](../plugins/nautical-charts.md#nautical-profile)  |
| [Vue carte de ski](#ski-map-view) | [Style de carte](../plugins/ski-maps.md#set-winter-and-ski-map-style), [Profil](../plugins/ski-maps.md#skiing-profile) |
|[Notes audio/vidéo](#audiovideo-notes) 🤖  | [Calque de carte](../plugins/audio-video-notes.md#show-all-on-the-map), [Menu contextuel](../plugins/audio-video-notes.md#create), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[Édition OpenStreetMap](#openstreetmap-editing)| [Calque de carte](../plugins/osm-editing.md#authorization) |
|[Position de stationnement](#parking-position) | [Menu contextuel](../plugins/parking.md#set-a-spot), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Calque de carte](../plugins/mapillary.md#map-layer), [Menu contextuel](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[Capteurs externes](#external-sensors) 🤖  | [Widget](../plugins/external-sensors.md#widgets) |
|[Accessibilité](#accessibility) 🤖  | [Paramètres personnalisés](../plugins/accessibility.md#plugin-settings) |
| [Développement OsmAnd](#osmand-development) | [Paramètres personnalisés](../plugins/development.md#plugin-settings) |
| [OsmAnd Tracker](#osmand-tracker) 🤖  | [Calque de carte](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#tracker-widget), [Menu contextuel](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [Suivi de navires AIS](#ais-vessel-tracker) 🤖  |  [Paramètres personnalisés](../plugins/ais-tracker.md#plugin-settings) |


### Paramètres des greffons {#plugin-settings}

:::caution REMARQUE
Seuls le greffon de développement OsmAnd et le greffon d'édition OSM modifient les paramètres pour tous les profils. Les autres greffons sont configurés séparément pour chaque profil.  
:::

La plupart des greffons fournissent des paramètres de profil spécifiques ou des paramètres globaux, accessibles via :

- *Menu principal → Plugins → Nom du greffon → Paramètres (&#x2699 pour iOS)* ou  
- *Menu principal → Paramètres → Profil → [Paramètres des greffons](../personal/profiles.md#plugin-settings)*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres greffon Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Paramètres greffon Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres greffon iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Paramètres greffon iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

Les greffons suivants fournissent leurs propres paramètres :

🤖 *- uniquement pour la version Android d'OsmAnd.*

| Nom du greffon | Paramètres |
|:------------|:-------|
| [Enregistrement de trajet](#trip-recording) | Configurer les [modes de fonctionnement](../plugins/trip-recording.md#required-setup-parameters) de l'enregistrement de trajet |
| [Météo](#weather) | Configurer les unités de mesure pour l'affichage des événements météorologiques |
|[Notes audio/vidéo](#audiovideo-notes) 🤖  | Sélectionner le [format vidéo, la durée de stockage, etc.](../plugins/audio-video-notes.md#plugin-settings) |
|[Édition OpenStreetMap](#openstreetmap-editing)| Spécifier les [identifiants](../plugins/osm-editing.md#settings) de l'utilisateur  |
|  [Capteurs externes](#external-sensors) 🤖  | Se connecter aux [paramètres](../plugins/external-sensors.md#required-setup-parameters) de l'appareil externe |
|  [Accessibilité](#accessibility) 🤖  | Les [paramètres](../plugins/accessibility.md#plugin-settings) vous permettent d'utiliser les [fonctionnalités d'accessibilité d'Android](https://www.android.com/accessibility/) dans OsmAnd. |
| [Développement OsmAnd](#osmand-development) | Les [paramètres du greffon](../plugins/development.md#plugin-settings) vous permettent d'activer des fonctionnalités spéciales pour les développeurs ou les utilisateurs expérimentés |
|  [OsmAnd Tracker](#osmand-tracker) 🤖  | Tous les paramètres sont configurables dans une application séparée |
| [Suivi de navires AIS](#ais-vessel-tracker) | Les [paramètres du greffon](../plugins/ais-tracker.md#plugin-settings) vous permettent d'activer des paramètres spéciaux |

### Actions du greffon {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *avec cette option, les paramètres du greffon peuvent être réinitialisés à leurs valeurs par défaut*.  
**<Translate android="true" ids="copy_from_other_profile"/>** - *les paramètres du greffon peuvent être copiés depuis un autre profil*.


## Liste des greffons {#plugins-list}


### [Wikipédia](./wikipedia.md) {#wikipedia}

Avoir Wikipédia pendant votre voyage vous aide à en apprendre davantage sur les lieux que vous visitez. Il est disponible hors ligne et affiche les articles Wikipédia liés aux points d'intérêt directement sur la carte.

### [Cartes en ligne](./online-map.md) {#online-maps}

Les cartes en ligne d'OsmAnd sont un complément important à la base de données OpenStreetMap déjà présente dans l'application. Avec ce greffon, vous pouvez ajouter des calques à votre carte avec des informations provenant de diverses sources.  

### [Enregistrement de trajet](./trip-recording.md) {#trip-recording}

Pour raconter l'histoire de vos déplacements, les données GPS, telles que la latitude et la longitude de votre position, peuvent être enregistrées et stockées dans un fichier, puis réutilisées, améliorées, enrichies de points de cheminement, fournies pour la navigation, partagées avec des amis, etc.  

### [Topographie](./topography.md) {#topography}

Les informations topographiques, telles que les courbes de niveau, l'ombrage, la pente, le relief 3D, aident à faire une évaluation visuelle de la configuration du terrain en voyant l'altitude, le relief, les extrêmes, l'inclinaison, les points de même hauteur, etc.  

### [Vue carte marine](./nautical-charts.md) {#nautical-map-view}

La vue carte marine fournit une représentation graphique détaillée des océans, des mers, des zones côtières et des rivières pour vous aider à naviguer sur l'eau, à voir les routes de trafic populaires, les obstacles sur la voie navigable, les ports, les mouillages et autres références essentielles.

### [Vue carte de ski](./ski-maps.md) {#ski-map-view}

La vue carte de ski affiche les couleurs d'hiver et les pistes de ski alpin ou de fond, ainsi que les téléphériques, les télésièges, les installations et les services à proximité, ce qui est utile pour naviguer dans des destinations telles que les zones de loisirs, les stations de ski et les parcs à neige.

### [Notes audio/vidéo](./audio-video-notes.md) {#audiovideo-notes}

Créez des notes audio/vidéo pour référence future, par exemple pour vous souvenir d'un événement, d'une scène ou d'une interaction. Les notes audio/vidéo créées sont disponibles depuis *Mes lieux* ainsi que sur la carte en tant que calque individuel d'histoires et de pensées créées par l'utilisateur et liées à une géolocalisation. Pour Android uniquement.  

### [Position de stationnement](./parking.md) {#parking-position}

Définissez un point sur la carte où votre voiture est laissée dans la rue et informez votre calendrier de la fin du temps de stationnement. Cela vous facilitera le suivi du temps et de l'emplacement de votre voiture.

### [Édition OpenStreetMap](./osm-editing.md) {#openstreetmap-editing}

Le greffon d'édition OpenStreetMap vous permet de contribuer à OpenStreetMap, une communauté mondiale créant une carte complète du monde et fournissant des données open-source à jour et accessibles au public.  

### [Mapillary](./mapillary.md) {#mapillary}

Visualisez des vues au niveau de la rue de vos itinéraires ou de vos lieux d'intérêt, fournies par [Mapillary](https://www.mapillary.com/) (une connexion Internet est requise).  

### [Accessibilité](./accessibility.md) {#accessibility}

Le greffon Accessibilité rend les fonctionnalités d'accessibilité de l'appareil directement disponibles dans OsmAnd. Pour Android uniquement.  

### [Capteurs externes](./external-sensors.md) {#external-sensors}

Connectez des capteurs externes pour afficher leurs données dans OsmAnd et stocker les informations dans les enregistrements de trajet.  

### [Métriques du véhicule](./vehicle-metrics.md) {#vehicle-metrics}

Connectez un scanner OBD-II pour afficher les données du véhicule dans OsmAnd et stocker les informations dans les enregistrements de trajet.  

### [Météo](./weather.md) {#weather}

Affiche les prévisions horaires pour la journée en cours et pour les 7 jours à venir.  

### [Développement OsmAnd](./development.md) {#osmand-development}

Le greffon de développement OsmAnd s'adresse aux développeurs et aux utilisateurs expérimentés. Il vous permet de simuler des itinéraires de navigation, de vérifier les performances de rendu de l'écran, etc.  

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker vous aide à voir où se trouvent vos contacts sur la carte dans OsmAnd. Pour Android uniquement.  

### [Suivi de navires AIS](./ais-tracker.md) {#ais-vessel-tracker}

Affichez les positions AIS et les informations sur les navires environnants. Les données AIS sont reçues via le réseau depuis un récepteur AIS externe.

## [Créer un greffon personnalisé](./custom.md) {#create-a-custom-plugin}

Vous pouvez créer votre propre greffon en suivant l'article *Paquet personnalisé*.


_______