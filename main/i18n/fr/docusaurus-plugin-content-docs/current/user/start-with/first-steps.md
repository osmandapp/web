---
source-hash: 0cd7fc222e201abda3ee41c3278fe75817181ab14d975d85f25fdb51e7498eae
sidebar_position: 1
title: Premiers pas
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';




## Aperçu {#overview}

Bienvenue sur OsmAnd (OpenStreetMap Automated Navigation Directions) !

Découvrez comment télécharger des cartes, configurer l'application, utiliser la carte et créer un itinéraire, démarrer la navigation et rechercher des points d'intérêt. Familiarisez-vous avec les points clés de la politique de confidentialité d'OsmAnd et les autorisations requises.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation hors ligne Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation hors ligne iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## Installer OsmAnd {#install-osmand}

OsmAnd est une application mobile de cartes et de navigation disponible pour **Android** et **iOS**. Vous pouvez la télécharger depuis les marchés les plus populaires.

**Marchés Android** : [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand) et [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS** : [App Store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[En savoir plus](../purchases/index.md) sur les versions et les achats d'OsmAnd.


## Bienvenue sur OsmAnd {#welcome-to-osmand}

Nous visons à créer une application cartographique entièrement fonctionnelle qui peut être utilisée à diverses fins, hors ligne et en ligne. L'application possède de nombreuses fonctionnalités, vous n'aurez donc pas à basculer entre différentes applications, et tout sera à portée de main.

- Visualisez une carte mondiale avec de nombreux détails affichés dans [différents styles de carte](../map/vector-maps.md).
- Affichez, [recherchez](../search/search-poi.md) et enregistrez divers [points d'intérêt](../map/point-layers-on-map.md).
- [Planifiez un itinéraire](../plan-route/create-route.md) en voiture, à vélo, à pied et combinez-les en itinéraires multimodaux.
- Démarrez la [navigation vocale](../navigation/guidance/voice-navigation.md) lorsque vous allumez et éteignez l'écran.
- Rendez votre voyage touristique riche avec [Wikipédia](../plugins/wikipedia.md) et [Wikivoyage](../plan-route/travel-guides.md) hors ligne.
- Personnalisez entièrement la façon dont [la carte est affichée](../map/configure-map-menu.md) et quels [widgets](../widgets/index.md) y sont affichés.
- Naviguez [par itinéraire](../navigation/setup/route-navigation.md), [par une trace donnée](../navigation/setup/gpx-navigation.md), [par transports en commun](../navigation/routing/public-transport-navigation.md) et [hors-piste](../navigation/setup/markers-navigation.md).
- Tout fonctionne **hors ligne**.
- Et n'oubliez pas de contribuer à [OpenStreetMap](https://www.openstreetmap.org/) avec le [plugin d'édition OSM](../plugins/osm-editing.md).


## Guide des actions {#actions-guide}

### Autorisation d'accès à la localisation {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Localisation précise Android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Localisation précise iOS](@site/static/img/steps/first_start_ios.png) ![Localisation précise iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Nous vous recommandons d'accorder à OsmAnd l'autorisation de recevoir des informations sur la localisation précise de votre appareil. Nous ne collectons, n'utilisons ni ne partageons vos informations privées, l'accès à la géolocalisation précise est donc nécessaire pour le bon fonctionnement hors ligne de la recherche, de la navigation et des autres fonctions d'OsmAnd.


### Comment télécharger des cartes {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Afficher sur la carte](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Afficher sur la carte](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

L'application OsmAnd fonctionne avec différents types de cartes, mais elle ne peut fonctionner pleinement qu'avec des cartes hors ligne téléchargées. Ainsi, après l'écran *<Translate android="true" ids="get_started"/>*, vous êtes invité à [*télécharger la carte*](../start-with/download-maps.md#initial-setup-screen) de votre région. Vous pouvez choisir une autre région, restaurer depuis [OsmAnd Cloud](../personal/osmand-cloud.md), ou ignorer cette étape et télécharger les cartes plus tard.
Pour les autres options de téléchargement de cartes disponibles, consultez l'[article Télécharger des cartes](../start-with/download-maps.md).

:::note Commencer à travailler avec des cartes hors ligne
OsmAnd ne peut pas fonctionner correctement sans cartes hors ligne téléchargées. Bien que l'application prenne en charge les cartes [Vectorielles](../map/vector-maps.md) et [Raster](../map/raster-maps.md), il est fortement recommandé de commencer à travailler avec des cartes vectorielles hors ligne pour que toutes les fonctions telles que la [Recherche](../search/index.md), la [Navigation](../navigation/index.md) et le [Menu contextuel](../map/map-context-menu.md) fonctionnent correctement.
:::


### Comment télécharger des cartes pour le monde entier {#how-download-maps-for-the-whole-world}

Bien qu'OsmAnd vous permette de télécharger des cartes pour toutes les régions disponibles, il n'existe pas de package unique pour télécharger le monde entier en une seule fois. Au lieu de cela, vous pouvez télécharger des cartes de pays ou de régions individuelles en fonction de vos besoins.

***Points clés :***

- **OsmAnd Pro** et **Maps+** offrent des **téléchargements de cartes illimités**, mais vous devez toujours télécharger les cartes une région à la fois.
- **Limitations de stockage.** Assurez-vous que votre appareil dispose de suffisamment d'espace avant de télécharger plusieurs régions.
- **Mises à jour automatiques.** Une fois téléchargées, les cartes peuvent être mises à jour via *Menu → Cartes & Ressources → Mises à jour.*


### Comment changer la langue de l'application {#how-to-change-app-language}

L'option *Langue d'affichage* est utilisée pour changer la langue de toute l'application, y compris les invites contextuelles, le texte interne, les messages, et plus encore. Jusqu'à Android 12, OsmAnd vous permet de personnaliser la langue d'affichage selon vos préférences directement dans l'application. À partir d'Android 13 et sur les appareils iOS, la langue d'affichage ne peut être modifiée que dans les paramètres système (voir comment modifier les préférences linguistiques par application dans [Android](https://developer.android.com/guide/topics/resources/app-languages) et [iOS](https://developer.apple.com/news/?id=u2cfuj88)).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *Paramètres → Applications → OsmAnd → Langue*

![Langue des paramètres généraux Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *Paramètres → OsmAnd Maps → Langue*

![Langue des paramètres généraux iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Pas d'option pour définir les langues de l'application
Sur certains appareils Android (Xiaomi avec MIUI 14), il n'y a pas d'option pour définir les langues de l'application individuellement dans les paramètres système, de sorte que la langue d'OsmAnd ne peut être modifiée qu'avec la langue de l'ensemble du système. Vous pouvez consulter la discussion sur [GitHub](https://github.com/osmandapp/OsmAnd/issues/16990) pour plus d'informations.
:::


### Comment gérer vos paramètres {#how-to-manage-your-settings}

Vous pouvez gérer les paramètres de l'application en tant que [paramètres globaux](../personal/global-settings.md) ou en tant que [configuration de profil](../personal/profiles.md) via le [menu principal](../start-with/main-menu.md). L'application est livrée avec une liste prédéfinie de profils qui peuvent être modifiés ultérieurement. Chaque profil peut être considéré comme une application cartographique personnalisée à des fins spécifiques. Par défaut, les profils ne servent que de modes de navigation différents.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gérer le profil Android](@site/static/img/settings/manage_profile_android.png) ![Configurer le profil Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gérer le profil iOS](@site/static/img/settings/manage_profile_ios.png) ![Configurer le profil iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[En savoir plus](../personal/global-settings.md) sur les paramètres globaux.
[En savoir plus](../personal/profiles.md) sur les paramètres de profil.


### Comment configurer les plugins {#how-to-configure-plugins}

Les [plugins](../plugins/index.md#configure-plugin) étendent considérablement les fonctionnalités de l'application. Presque tous les plugins ont leurs propres [actions de carte](../map/map-context-menu.md), [couches de carte](../map/configure-map-menu.md), [téléchargements de carte](../start-with/download-maps.md) et [paramètres](../plugins/#plugin-settings).

Vous pouvez activer/désactiver les plugins via [Menu principal](../start-with/main-menu.md) → [Plugins](../plugins/index.md#configure-plugin).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Activer les plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Exemple de plugin Android](@site/static/img/settings/plugin_example_android.png)

Pour activer/désactiver les plugins, allez dans :
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> → &#65049; → Activer

</TabItem>

<TabItem value="ios" label="iOS">

![Activer les plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Exemple de plugin iOS](@site/static/img/settings/plugin_example_ios.png)

Pour activer/désactiver les plugins, allez dans :
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[En savoir plus](../plugins/index.md#configure-plugin) sur les plugins OsmAnd.


### Comment utiliser une carte {#how-to-use-a-map}

La carte est un élément central d'OsmAnd, et il est important de savoir [comment l'utiliser](../map/interact-with-map.md) (gestes, boutons, etc.). Vous pouvez [configurer la carte](../map/configure-map-menu.md) selon vos besoins : [changer le style de la carte](../map/configure-map-menu.md#map-style-parameters), configurer différentes [couches de carte](../map/configure-map-menu.md#map-layers) telles que les favoris, les POI, les transports en commun, les traces, les courbes de niveau, l'ombrage et autres.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurer la carte Android](@site/static/img/settings/configure_map_menu_android.png) ![Exemple de configuration de carte Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurer la carte iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Exemple de configuration de carte iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[En savoir plus](../map/configure-map-menu.md) sur la configuration de la carte.


### Comment configurer l'écran {#how-to-configure-screen}

[Configurer l'écran](../widgets/configure-screen.md) vous permet d'activer les widgets [d'information](../widgets/info-widgets.md) (altitude, vitesse, heure actuelle, etc.) et [de navigation](../widgets/nav-widgets.md) (destination, cap, heure d'arrivée, etc.), l'[action rapide](../widgets/quick-action.md) et d'autres éléments qui seront affichés sur la carte.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurer l'écran Android](@site/static/img/widgets/configure_screen_android.png) ![Exemple de configuration d'écran Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurer l'écran iOS](@site/static/img/settings/configure_screen_ios.png) ![Exemple de configuration d'écran iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[En savoir plus](../widgets/configure-screen.md) sur la configuration de l'écran.


### Comment ajouter des données personnelles aux cartes {#how-to-add-personal-data-to-maps}

OsmAnd vous permet de faire diverses marques sur la carte pour vos besoins personnels. Par exemple, les [points favoris](../personal/favorites.md) - points personnels avec nom, icône et catégorie, les [marqueurs](../personal/markers.md) - points rapidement ajoutés comme cible, les [notes audio/vidéo](../plugins/audio-video-notes.md) - notes multimédia enregistrées à un point spécifique, les [traces](../personal/tracks/manage-tracks.md) - traces et circuits enregistrés et importés.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajouter des données personnelles Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajouter des données personnelles iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[En savoir plus](../map/point-layers-on-map.md) sur les points sur la carte.


### Comment parcourir et trouver un point d'intérêt {#how-to-browse--find-point-of-interest}

Les [points d'intérêt (POI)](../map/point-layers-on-map.md#points-of-interest-pois) sont des commodités qui peuvent être recherchées ou mises en évidence sur la carte. Ils représentent des lieux intéressants ou utiles et sont distribués dans le cadre des [cartes vectorielles](../map/vector-maps.md). Vous pouvez les utiliser pour [afficher sur la carte](../map/point-layers-on-map.md#points-of-interest-pois), [naviguer](../navigation/index.md) et [rechercher](../search/search-poi.md) les points d'intérêt sur la carte.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sélection multiple de POI](@site/static/img/map/multiple_selection_android.png) ![Rechercher et afficher les POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sélection multiple de POI](@site/static/img/settings/multiple_selection_iOS.png) ![Rechercher et afficher les POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[En savoir plus](../search/search-poi.md) sur la recherche de POI.


### Comment planifier un itinéraire {#how-to-plan-a-route}

[Planifier un itinéraire](../plan-route/create-route.md) est un outil puissant qui vous permet de créer un voyage, de modifier une trace existante et de mesurer une distance sur place. Vous pouvez rapidement placer des points intermédiaires et les relier par diverses lignes de navigation (vélo, piéton, ligne droite, etc.). Les résultats peuvent être enregistrés dans un fichier GPX, afin de pouvoir être [partagés](../personal/tracks/index.md) ou [utilisés par la navigation](../navigation/setup/gpx-navigation.md) ultérieurement.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire Android](@site/static/img/settings/plan_route_android.png) ![Graphique de planification d'itinéraire Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[En savoir plus](../plan-route/create-route.md) sur la fonction de planification d'itinéraire.


### Comment rechercher par adresse {#how-to-search-by-address}

OsmAnd offre de nombreuses capacités de recherche, y compris la recherche d'adresses. Par défaut, il utilise les [données OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) et devrait être capable de trouver toutes les adresses à l'aide de la saisie de recherche rapide. Vous pouvez également [rechercher](../search/search-address.md) par ville, rue, code postal et coordonnées.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche d'adresse Android](@site/static/img/settings/address_search_android.png) ![Résultat de recherche Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche d'adresse iOS](@site/static/img/settings/address_search_ios.png) ![Résultat de recherche iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Vous devez télécharger la carte avant de rechercher une adresse. De plus, si votre position actuelle est trop éloignée de l'adresse que vous recherchez, vous devrez peut-être augmenter le rayon de recherche.
:::

[En savoir plus](../search/search-address.md) sur la recherche d'adresses.


### Comment démarrer la navigation {#how-to-start-navigation}

La [navigation](../navigation/index.md) vous fournit un guidage étape par étape vers votre destination en affichant l'itinéraire, en offrant des instructions virage par virage, des informations routières supplémentaires sur la surface, la fluidité, etc., et un guidage vocal facultatif.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Démarrer la navigation Android](@site/static/img/settings/start_navigation_android.png) ![Graphique d'itinéraire Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Démarrer la navigation iOS](@site/static/img/settings/start_navigation_ios.png) ![Graphique d'itinéraire iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[En savoir plus](../navigation/index.md) sur la navigation.


### Comment enregistrer votre voyage {#how-to-record-your-trip}

L'[enregistrement de voyage](../plugins/trip-recording.md) est un outil spécial, intégré sous forme de plugin OsmAnd, qui vous permet d'enregistrer tous les mouvements sur une trace à l'aide du GPS de l'appareil.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Enregistrement de voyage Android](@site/static/img/settings/trip_recording_android.png) ![Aperçu de l'enregistrement de voyage Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Démarrer l'enregistrement de voyage iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Menu d'enregistrement de voyage iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[En savoir plus](../plugins/trip-recording.md) sur l'enregistrement de voyage.


### Comment modifier les cartes {#how-to-edit-maps}

OsmAnd est alimenté par les données [OpenStreetMap](https://www.openstreetmap.org/). Les cartes sont créées par des contributeurs bénévoles, elles peuvent donc avoir plus ou moins de détails selon le travail effectué sur une certaine partie de la carte. Tout le monde peut s'inscrire en tant que contributeur et ajouter ou modifier des cartes OSM. OsmAnd fournit un plugin d'édition qui aide à améliorer OpenStreetMap.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Note OSM Android](@site/static/img/settings/osm_note_android.png) ![Créer un POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Note OSM iOS](@site/static/img/settings/osm_note_ios.png) ![Créer un POI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[En savoir plus](../plugins/osm-editing.md) sur l'édition OSM.


### Comment fermer l'application {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Il existe deux variantes disponibles pour fermer OsmAnd.

1. Fermez une application en la faisant glisser vers le haut et hors de l'écran. Pour une liste verticale d'applications, faites glisser vers la gauche ou la droite.

2. Vous devrez peut-être effectuer les étapes suivantes avant de le faire, sinon OsmAnd continuera à s'exécuter en arrière-plan :
    - [Annuler la navigation](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Arrêter le téléchargement et la mise à jour des cartes](../start-with/download-maps.md)
    - [Arrêter l'enregistrement du trajet](../plugins/trip-recording.md#create-new-track)
    - [Arrêter l'enregistrement de notes audio/vidéo](../plugins/audio-video-notes.md)

3. Fonction *Forcer l'arrêt* :
    - Appuyez longuement sur l'icône *OsmAnd → bouton **i** → Forcer l'arrêt*.
    - Ouvrez les paramètres et appuyez sur *Applications & notifications → OsmAnd → Forcer l'arrêt*.

</TabItem>

<TabItem value="ios" label="iOS">

Fermez une application en la faisant glisser vers le haut et hors de l'écran. Pour une liste verticale d'applications, faites glisser vers la gauche ou la droite.

Vous devrez peut-être effectuer les étapes suivantes avant de le faire, sinon OsmAnd continuera à s'exécuter en arrière-plan :

- [Annuler la navigation](../navigation/setup/route-navigation.md)
- [Arrêter le téléchargement et la mise à jour des cartes](../start-with/download-maps.md)
- [Arrêter l'enregistrement du trajet](../plugins/trip-recording.md#create-new-track)
- [Arrêter l'enregistrement de notes audio/vidéo](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Raccourcis d'application {#app-shortcuts}

<InfoAndroidOnly/>

Les [raccourcis d'application](https://support.google.com/android/answer/9450271) sont disponibles pour l'icône OsmAnd. Il suffit d'appuyer longuement sur l'icône OsmAnd sur l'écran de votre appareil pour ouvrir le menu des raccourcis d'application. Ici, vous pouvez appuyer brièvement pour sélectionner les actions suivantes : *Naviguer vers la maison*, *Naviguer vers le travail*, *Démarrer l'enregistrement*, *Rechercher*, *Mes lieux*, *Naviguer vers*. Un appui long sur une action vous permet d'ajouter une nouvelle icône d'action à l'écran de votre appareil.

Appuyez sur une icône d'action pour démarrer immédiatement l'application avec l'action sélectionnée.

![Raccourcis](@site/static/img/steps/shortcuts_3_andr.png) ![Raccourcis](@site/static/img/steps/shortcuts_4_andr.png)


## Aide hors ligne {#offline-help}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran de l'aide hors ligne Android](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

Dans le *menu Aide*, vous trouverez des articles de notre site [www.osmand.net/docs](https://osmand.net/docs/intro/). Après le téléchargement initial (connexion Internet requise), les articles d'aide sont disponibles hors ligne.
La première sous-section, *Aide hors ligne*, contient les articles les **plus consultés** (ou populaires) parmi nos utilisateurs. Les sections **Guide de l'utilisateur** et **Dépannage** ont la même structure que sur le site Web.
Dans le *menu Aide*, vous trouverez également des liens utiles vers les réseaux sociaux d'OsmAnd, des informations sur la version de votre application, les notes de version et les contacts d'assistance. Via l'aide, vous pouvez également envoyer des [journaux logcat et de plantage](../troubleshooting/crash-logs.md#crash-and-logcat-logs).

### Menu {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran de l'aide hors ligne Android](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>

- **Envoyer le journal de plantage** (*pour Android*). Permet aux utilisateurs d'envoyer des rapports de plantage d'application aux développeurs, aidant à l'identification et à la résolution des problèmes.
- **Envoyer le journal logcat** (*pour Android*). Offre aux utilisateurs la possibilité d'envoyer des journaux détaillés de plantage d'application aux développeurs, facilitant une analyse et un dépannage plus approfondis.
- **Envoyer le journal** (*pour iOS*). Remplit une fonction similaire à la fonction *Envoyer le journal de plantage* pour Android, permettant aux utilisateurs d'appareils iOS de signaler les plantages d'application aux développeurs à des fins de débogage.
- **Copier la version de build**. Permet aux utilisateurs de communiquer rapidement et précisément la version actuelle de l'application aux développeurs lors du signalement de problèmes, simplifiant le processus de diagnostic et de résolution.


### Les plus consultés {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran de l'aide hors ligne Android](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Les articles les plus consultés par nos utilisateurs font référence aux articles de l'application ou du site qui ont généré le plus de vues ou d'interactions utilisateur. Cette métrique permet d'identifier le contenu particulièrement intéressant ou utile pour vos utilisateurs. Elle peut fournir des informations précieuses sur les préférences et les intérêts des utilisateurs, permettant aux développeurs et aux créateurs de contenu d'adapter le contenu futur pour mieux répondre aux besoins du public. De plus, la mise en évidence des articles populaires peut aider les nouveaux utilisateurs à trouver des ressources précieuses au sein de l'application.


### Guide de l'utilisateur {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran de l'aide hors ligne Android](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

La section **Guide de l'utilisateur** du menu Aide est un manuel complet qui suit la structure du site Web OsmAnd, garantissant la cohérence des informations et la facilité de navigation entre les plateformes. Grâce à l'aide, vous pouvez facilement naviguer de l'application vers le site Web, en trouvant le même contenu organisé de manière familière. Cette cohérence améliore la convivialité en fournissant une ressource d'assistance unique pour trouver rapidement des réponses aux questions et résoudre les problèmes.


### Dépannage {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran de l'aide hors ligne Android](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Solutions et astuces pour résoudre les problèmes courants. Si vous avez une question spécifique, veuillez consulter le [Dépannage](../troubleshooting/index.md) pour obtenir une réponse.

- [Configuration](../troubleshooting/setup.md). Lors de la configuration d'une application, ce sont les problèmes qui surviennent le plus souvent.
- [Cartes et données](../troubleshooting/maps-data.md). Problèmes liés aux cartes, à la recherche et au reste des données.
- [Navigation](../troubleshooting/navigation.md). Les problèmes les plus courants qui surviennent en mode navigation.
- [Enregistrement de trace](../troubleshooting/track-recording-issues.md). Problèmes courants liés à l'enregistrement de trace tels que les bruits, les lacunes et les inexactitudes.
- [Général](../troubleshooting/general.md). Problèmes courants associés aux diverses fonctionnalités d'OsmAnd.
- [Journaux de plantage](../troubleshooting/crash-logs.md). Comment envoyer les journaux de plantage à l'équipe OsmAnd.
- [Android Auto](../troubleshooting/android_auto.md) (*uniquement pour Android*). Problèmes de navigation automatique.

### Contactez-nous {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran de l'aide hors ligne Android](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Vous permet de poser des questions ou de faire des suggestions.

### Signaler des problèmes {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran de l'aide hors ligne Android](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Ouvrir un problème sur GitHub**. [Version Android GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [Version iOS GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues) : posez des questions, signalez des bugs et proposez des fonctionnalités.
- **Envoyer le journal de plantage** (*pour Android*). Contient uniquement des informations sur les plantages.
- [Envoyer le journal logcat](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Envoyer le journal](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Fichier journal détaillé.

### À propos d'OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran de l'aide hors ligne Android](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

Vous pouvez en apprendre davantage sur notre équipe, voir la version actuelle de l'application et les nouveautés, et télécharger la version bêta de l'application.


## Confidentialité {#privacy}

Il s'agit d'une application [open source](https://github.com/osmandapp/osmand), sans publicité ni traqueurs, axée sur la confidentialité. Pour préserver au maximum la confidentialité, OsmAnd propose des cartes hors ligne en premier lieu, de sorte qu'aucune interaction ou information géographique ne soit divulguée depuis votre appareil. Nous sommes très attentifs aux données collectées et aux données transférées par le réseau, vous pouvez en savoir plus dans notre [politique de confidentialité](https://osmand.net/help-online/privacy-policy).


## Autorisations {#permissions}

OsmAnd n'a aucune autorisation requise sur la version iOS / Android.

**Essentiel** :

- **Internet**. Téléchargement initial / mise à jour des cartes hors ligne. Peut également être nécessaire pour accéder aux fonctionnalités en ligne telles que [Imagerie au niveau de la rue](../map/point-layers-on-map.md#-street-level-imagery), [Photos en ligne](../map/map-context-menu.md#online-photos) ou [Cartes en ligne](../map/raster-maps.md).
- **GPS** / **Réseau GSM**. Déterminez votre position, suivez-vous en mode navigation et enregistrez votre trajet (facultatif). Cette autorisation est demandée lorsque vous cliquez sur le [bouton ma position](../widgets/map-buttons.md#my-location-and-zoom) ou lorsque vous [démarrez la navigation](../navigation/setup/route-navigation.md#start--stop-navigation).

**Facultatif** :

- **Enregistrement appareil photo/voix** (*Android*). Uniquement utilisé par les [notes audio/vidéo](../plugins/audio-video-notes.md). Cette fonctionnalité est intégrée sous forme de plugin et est désactivée par défaut. Elle vous permet de créer rapidement des notes audio/vidéo liées à la position pendant un voyage.


> *Dernière mise à jour : janvier 2025*