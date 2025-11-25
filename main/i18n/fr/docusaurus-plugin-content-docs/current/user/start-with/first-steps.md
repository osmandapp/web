---
source-hash: 22db732c5f66852486fa2129937bfba2c697d211dccbcef555621bf176facb12
sidebar_position: 1
title:  Premiers Pas
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

Bienvenue dans OsmAnd (OpenStreetMap Automated Navigation Directions) !  

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

OsmAnd est une application mobile de cartographie et de navigation disponible pour **Android** et **iOS**. Vous pouvez la télécharger depuis les marchés les plus populaires.

**Marchés Android** : [Google play store](https://play.google.com/store/apps/details?id=net.osmand) et [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS** : [App store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[En savoir plus](../purchases/index.md) sur les versions et les achats d'OsmAnd.  


## Bienvenue dans OsmAnd {#welcome-to-osmand}

Notre objectif est de créer une application cartographique entièrement fonctionnelle qui peut être utilisée à diverses fins, hors ligne et en ligne. L'application possède de nombreuses fonctionnalités, vous n'aurez donc pas à basculer entre différentes applications, et tout sera à portée de main.

- Visualisez une carte du monde entier avec de nombreux détails affichés dans [différents styles de carte](../map/vector-maps.md).
- Affichez, [recherchez](../search/search-poi.md) et enregistrez divers [Points d'intérêt](../map/point-layers-on-map.md).
- [Planifiez un itinéraire](../plan-route/create-route.md) en voiture, à vélo, à pied et combinez-les en itinéraires multimodaux.
- Démarrez la [navigation à guidage vocal](../navigation/guidance/voice-navigation.md) lorsque vous allumez et éteignez l'écran.
- Enrichissez votre voyage touristique avec [Wikipedia](../plugins/wikipedia.md) et [Wikivoyage](../plan-route/travel-guides.md) hors ligne.
- Personnalisez entièrement la manière dont [la carte est affichée](../map/configure-map-menu.md) et les [widgets](../widgets/index.md) qui y sont affichés.
- Naviguez [par itinéraire](../navigation/setup/route-navigation.md), [par une trace donnée](../navigation/setup/gpx-navigation.md), [en transports en commun](../navigation/routing/public-transport-navigation.md) et [hors route](../navigation/setup/markers-navigation.md).
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

Nous vous recommandons d'autoriser OsmAnd à recevoir des informations sur la localisation précise de votre appareil. Nous ne collectons, n'utilisons ni ne partageons vos informations privées, l'accès à la géolocalisation précise est donc nécessaire pour le bon fonctionnement hors ligne de la recherche, de la navigation et des autres fonctions d'OsmAnd.  


### Comment télécharger des cartes {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Afficher sur la carte](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Afficher sur la carte](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

L'application OsmAnd fonctionne avec différents types de cartes, mais elle ne peut fonctionner pleinement qu'avec des cartes hors ligne téléchargées. Ainsi, après l'écran *<Translate android="true" ids="get_started"/>*, il vous est proposé de [*télécharger la carte*](../start-with/download-maps.md#initial-setup-screen) de votre région. Vous pouvez choisir une autre région, restaurer depuis [OsmAnd Cloud](../personal/osmand-cloud.md), ou ignorer cette étape et télécharger les cartes plus tard.  
Pour les autres options de téléchargement de cartes disponibles, consultez l'article [Télécharger des cartes](../start-with/download-maps.md).

:::note Commencer à travailler avec les cartes hors ligne
OsmAnd ne peut pas fonctionner correctement sans cartes hors ligne téléchargées. Bien que l'application prenne en charge les cartes [vectorielles](../map/vector-maps.md) et [raster](../map/raster-maps.md), il est fortement recommandé de commencer à travailler avec des cartes vectorielles hors ligne pour que toutes les fonctions telles que la [Recherche](../search/index.md), la [Navigation](../navigation/index.md) et le [Menu contextuel](../map/map-context-menu.md) fonctionnent correctement.
:::


### Comment télécharger les cartes du monde entier {#how-download-maps-for-the-whole-world}

Bien qu'OsmAnd vous permette de télécharger des cartes pour toutes les régions disponibles, il n'existe pas de paquet unique pour télécharger le monde entier en une seule fois. Au lieu de cela, vous pouvez télécharger des cartes de pays ou de régions individuelles en fonction de vos besoins.

***Points clés :***

- **OsmAnd Pro** et **Maps+** offrent des **téléchargements de cartes illimités**, mais vous devez toujours télécharger les cartes une région à la fois.
- **Limites de stockage.** Assurez-vous que votre appareil dispose de suffisamment d'espace avant de télécharger plusieurs régions.
- **Mises à jour automatiques.** Une fois téléchargées, les cartes peuvent être mises à jour via *Menu → Cartes et ressources → Mises à jour*.


### Comment changer la langue de l'application {#how-to-change-app-language}

L'option *Langue d'affichage* est utilisée pour changer la langue de toute l'application, y compris les invites contextuelles, le texte interne, les messages, etc. Jusqu'à Android 12, OsmAnd vous permet de personnaliser la langue d'affichage selon vos préférences directement dans l'application. À partir d'Android 13 et sur les appareils iOS, la langue d'affichage ne peut être modifiée que dans les paramètres système (voir comment modifier les préférences linguistiques par application sous [Android](https://developer.android.com/guide/topics/resources/app-languages) et [iOS](https://developer.apple.com/news/?id=u2cfuj88)).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *Paramètres → Applications → OsmAnd → Langue*

![Paramètres généraux Langue Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *Réglages → OsmAnd Maps → Langue*

![Paramètres généraux Langue iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Aucune option pour définir les langues de l'application
Sur certains appareils Android (Xiaomi avec Muiu 14), il n'y a pas d'option pour définir les langues des applications individuellement dans les paramètres système, donc la langue d'OsmAnd ne peut être changée qu'avec la langue de l'ensemble du système. Vous pouvez consulter la [discussion sur GitHub](https://github.com/osmandapp/OsmAnd/issues/16990) pour plus d'informations.
:::


### Comment gérer vos paramètres {#how-to-manage-your-settings}

Vous pouvez gérer les paramètres de l'application en tant que [Paramètres globaux](../personal/global-settings.md) ou en tant que [Configuration de profil](../personal/profiles.md) via le [Menu principal](../start-with/main-menu.md). L'application est livrée avec une liste prédéfinie de profils qui peuvent être modifiés ultérieurement. Chaque profil peut être considéré comme une application cartographique personnalisée à des fins spécifiques. Par défaut, les profils ne servent que de modes de navigation différents.

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

Les [plugins](../plugins/index.md#configure-plugin) étendent considérablement les fonctionnalités de l'application. Presque tous les plugins ont leurs propres [Actions sur la carte](../map/map-context-menu.md), [Couches de carte](../map/configure-map-menu.md), [Téléchargements de cartes](../start-with/download-maps.md) et [Paramètres](../plugins/#plugin-settings).  

Vous pouvez activer/désactiver les plugins via le [Menu principal](../start-with/main-menu.md) → [Plugins](../plugins/index.md#configure-plugin).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Activer les plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Exemple de plugin Android](@site/static/img/settings/plugin_example_android.png)

Pour activer/désactiver les plugins, allez dans :
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Activer

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

[Configurer l'écran](../widgets/configure-screen.md) vous permet d'activer des widgets [d'information](../widgets/info-widgets.md) (altitude, vitesse, heure actuelle, etc.) et de [navigation](../widgets/nav-widgets.md) (destination, relèvement, heure d'arrivée, etc.), l'[action rapide](../widgets/quick-action.md) et d'autres éléments qui seront affichés sur la carte.

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

OsmAnd vous permet de faire diverses marques sur la carte pour vos besoins personnels. Par exemple, les [points favoris](../personal/favorites.md) - des points personnels avec nom, icône et catégorie, les [marqueurs](../personal/markers.md) - des points rapidement ajoutés comme cible, les [notes audio/vidéo](../plugins/audio-video-notes.md) - des notes multimédias enregistrées à un point spécifique, les [traces](../personal/tracks/manage-tracks.md) - des traces et des circuits enregistrés et importés.

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

Les [Points d'intérêt (POI)](../map/point-layers-on-map.md#points-of-interest-pois) sont des commodités qui peuvent être recherchées ou mises en évidence sur la carte. Ils représentent des lieux intéressants ou utiles et sont distribués dans le cadre des [cartes vectorielles](../map/vector-maps.md). Vous pouvez les utiliser pour les [afficher sur la carte](../map/point-layers-on-map.md#points-of-interest-pois), [naviguer](../navigation/index.md) et [rechercher](../search/search-poi.md) les points d'intérêt sur la carte.

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

[Planifier un itinéraire](../plan-route/create-route.md) est un outil puissant qui vous permet de créer un voyage, de modifier une trace existante et de mesurer une distance sur place. Vous pouvez rapidement placer des points intermédiaires et les relier par diverses lignes de navigation (vélo, piéton, ligne droite, etc.). Les résultats peuvent être enregistrés dans un fichier GPX, afin qu'il puisse être [partagé](../personal/tracks/index.md) ou [utilisé pour la navigation](../navigation/setup/gpx-navigation.md) plus tard.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planifier un itinéraire Android](@site/static/img/settings/plan_route_android.png) ![Graphique d'itinéraire Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[En savoir plus](../plan-route/create-route.md) sur la fonctionnalité de planification d'itinéraire.


### Comment rechercher par adresse {#how-to-search-by-address}

OsmAnd offre de nombreuses capacités de recherche, y compris la recherche d'adresse. Par défaut, il utilise les [données OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) et devrait être capable de trouver toutes les adresses en utilisant la saisie de recherche rapide. Vous pouvez également [rechercher](../search/search-address.md) par ville, rue, code postal et coordonnées.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Recherche d'adresse Android](@site/static/img/settings/address_search_android.png) ![Résultat de recherche Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche d'adresse iOS](@site/static/img/settings/address_search_ios.png) ![Résultat de recherche iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Vous devez télécharger la carte avant d'y rechercher une adresse. De plus, si votre emplacement actuel est trop éloigné de l'adresse que vous recherchez, vous devrez peut-être augmenter le rayon de recherche.
:::

[En savoir plus](../search/search-address.md) sur la recherche d'adresse.


### Comment démarrer la navigation {#how-to-start-navigation}

La [navigation](../navigation/index.md) vous fournit un guidage étape par étape jusqu'à votre destination en affichant l'itinéraire, en offrant des instructions virage par virage, des informations routières supplémentaires sur la surface, la fluidité, etc., et un guidage vocal optionnel.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Démarrer la navigation Android](@site/static/img/settings/start_navigation_android.png) ![Graphique d'itinéraire Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Démarrer la navigation iOS](@site/static/img/settings/start_navigation_ios.png) ![Graphique d'itinéraire iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[En savoir plus](../navigation/index.md) sur la navigation.


### Comment enregistrer votre trajet {#how-to-record-your-trip}

L'[enregistrement de trajet](../plugins/trip-recording.md) est un outil spécial fourni sous forme de plugin OsmAnd qui vous permet d'enregistrer tous les mouvements sur une trace en utilisant le GPS de l'appareil.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Enregistrement de trajet Android](@site/static/img/settings/trip_recording_android.png) ![Aperçu de l'enregistrement de trajet Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Démarrer l'enregistrement de trajet iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Menu d'enregistrement de trajet iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[En savoir plus](../plugins/trip-recording.md) sur l'enregistrement de trajet.


### Comment modifier les cartes {#how-to-edit-maps}

OsmAnd est alimenté par les données d'[OpenStreetMap](https://www.openstreetmap.org/). Les cartes sont créées par des contributeurs bénévoles, elles peuvent donc avoir plus ou moins de détails en fonction du travail effectué sur une certaine partie de la carte. Tout le monde peut s'inscrire en tant que contributeur et ajouter ou modifier des cartes OSM. OsmAnd fournit un plugin d'édition qui aide à améliorer OpenStreetMap.

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

1. Fermez une application en la balayant vers le haut et hors de l'écran. Pour une liste verticale d'applications, balayez vers la gauche ou la droite.  

2. Vous devrez peut-être effectuer les étapes suivantes avant de le faire, sinon OsmAnd s'exécutera en arrière-plan :
    - [Annuler la navigation](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Arrêter le téléchargement et la mise à jour des cartes](../start-with/download-maps.md)
    - [Arrêter l'enregistrement du trajet](../plugins/trip-recording.md#new-track-recording)
    - [Arrêter l'enregistrement de notes audio/vidéo](../plugins/audio-video-notes.md)

3. Fonction *Forcer l'arrêt* :
    - Appui long sur l'icône *OsmAnd → bouton **i** → Forcer l'arrêt*.
    - Ouvrez les paramètres et appuyez sur *Applications et notifications → OsmAnd → Forcer l'arrêt*.

</TabItem>

<TabItem value="ios" label="iOS">

Fermez une application en la balayant vers le haut et hors de l'écran. Pour une liste verticale d'applications, balayez vers la gauche ou la droite.  

Vous devrez peut-être effectuer les étapes suivantes avant de le faire, sinon OsmAnd s'exécutera en arrière-plan :

- [Annuler la navigation](../navigation/setup/route-navigation.md)
- [Arrêter le téléchargement et la mise à jour des cartes](../start-with/download-maps.md)
- [Arrêter l'enregistrement du trajet](../plugins/trip-recording.md#new-track-recording)
- [Arrêter l'enregistrement de notes audio/vidéo](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Raccourcis de l'application {#app-shortcuts}

<InfoAndroidOnly/>

Les [raccourcis d'application](https://support.google.com/android/answer/9450271) sont disponibles pour l'icône OsmAnd. Il suffit d'appuyer longuement sur l'icône OsmAnd sur l'écran de votre appareil pour ouvrir le menu des raccourcis de l'application. Ici, vous pouvez appuyer brièvement pour sélectionner les actions suivantes : *Naviguer vers Domicile*, *Naviguer vers Travail*, *Démarrer l'enregistrement*, *Rechercher*, *Mes lieux*, *Naviguer vers*. Un appui long sur une action vous permet d'ajouter une nouvelle icône d'action à l'écran de votre appareil.

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

Dans le *menu Aide*, vous pouvez trouver des articles de notre site [www.osmand.net/docs](https://osmand.net/docs/intro/). Après le téléchargement initial (connexion Internet requise), les articles d'aide sont disponibles hors ligne.  
La première sous-section, *Aide hors ligne*, contient les **articles les plus consultés** (ou populaires) parmi nos utilisateurs. Ces articles sont affichés dans la langue définie pour l'application, si cette langue est prise en charge sur notre site de documentation. Les langues prises en charge incluent actuellement : *<Translate android="true" ids="lang_en"/>, <Translate android="true" ids="lang_ar"/>, <Translate android="true" ids="lang_de"/>, <Translate android="true" ids="lang_es"/>, <Translate android="true" ids="lang_fr"/>, <Translate android="true" ids="lang_it"/>, <Translate android="true" ids="lang_nl"/>, <Translate android="true" ids="lang_pl"/>, <Translate android="true" ids="lang_pt"/>, <Translate android="true" ids="lang_tr"/>*, et *<Translate android="true" ids="lang_uk"/>*. Si vous changez la langue de l'application, veuillez redémarrer OsmAnd pour que la documentation s'ouvre dans la langue sélectionnée. Lorsque une traduction n'est pas disponible, la version anglaise de la page sera affichée automatiquement. Les sections **Guide de l'utilisateur** et **Dépannage** ont la même structure que sur le site web.  
Dans le *menu Aide*, vous pouvez également trouver des liens utiles vers les réseaux sociaux d'OsmAnd, des informations sur la version de votre application, les notes de version et les contacts du support. Via l'Aide, vous pouvez également envoyer des [journaux logcat et de crash](../troubleshooting/crash-logs.md#crash-and-logcat-logs).  

### Menu {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran du menu d'aide hors ligne Android](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>  

- **Envoyer le journal de crash** (*pour Android*). Permet aux utilisateurs d'envoyer des rapports de plantage de l'application aux développeurs, aidant à l'identification et à la résolution des problèmes.
- **Envoyer le journal logcat** (*pour Android*). Donne aux utilisateurs la possibilité d'envoyer des journaux détaillés des plantages de l'application aux développeurs, facilitant une analyse et un dépannage plus approfondis.
- **Envoyer le journal** (*pour iOS*). Remplit une fonction similaire à la fonctionnalité *Envoyer le journal de crash* pour Android, permettant aux utilisateurs sur les appareils iOS de signaler les plantages de l'application aux développeurs à des fins de débogage.
- **Copier la version de la build**. Permet aux utilisateurs de communiquer rapidement et précisément la version actuelle de l'application aux développeurs lors du signalement de problèmes, simplifiant le processus de diagnostic et de résolution.


### Les plus consultés {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran de l'aide hors ligne Android](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Les articles les plus consultés par nos utilisateurs font référence aux articles dans l'application ou sur le site qui ont recueilli le plus de vues ou d'interactions utilisateur. Cette métrique aide à identifier le contenu qui est particulièrement intéressant ou utile pour vos utilisateurs. Elle peut fournir des informations précieuses sur les préférences et les intérêts des utilisateurs, permettant aux développeurs et aux créateurs de contenu d'adapter le contenu futur pour mieux répondre aux besoins du public. De plus, mettre en évidence les articles populaires peut aider les nouveaux utilisateurs à trouver des ressources précieuses dans l'application.


### Guide de l'utilisateur {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran de l'aide hors ligne Android](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

La section **Guide de l'utilisateur** du menu Aide est un manuel complet qui suit la structure du site web d'OsmAnd, garantissant la cohérence des informations et la facilité de navigation sur toutes les plateformes. En utilisant l'Aide, vous pouvez facilement naviguer de l'application au site web, en trouvant le même contenu organisé de manière familière. Cette cohérence améliore l'utilisabilité en fournissant une ressource de support unique pour trouver rapidement des réponses aux questions et résoudre les problèmes.


### Dépannage {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capture d'écran de l'aide hors ligne Android](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Solutions et conseils pour résoudre les problèmes courants. Si vous avez une question spécifique, veuillez consulter la section [Dépannage](../troubleshooting/index.md) pour obtenir une réponse.

- [Configuration](../troubleshooting/setup.md). Lors de la configuration d'une application, ce sont les problèmes qui surviennent le plus souvent.
- [Cartes et données](../troubleshooting/maps-data.md). Problèmes liés aux cartes, à la recherche et au reste des données.
- [Navigation](../troubleshooting/navigation.md). Les problèmes les plus courants qui se produisent en mode navigation.
- [Enregistrement de trace](../troubleshooting/track-recording-issues.md). Problèmes courants liés à l'enregistrement de trace tels que les bruits, les lacunes et les imprécisions.
- [Général](../troubleshooting/general.md). Problèmes courants associés à diverses fonctionnalités d'OsmAnd.
- [Journaux de crash](../troubleshooting/crash-logs.md). Comment envoyer des journaux de crash à l'équipe OsmAnd.
- [Android Auto](../troubleshooting/android_auto.md) (*uniquement pour Android*). Problèmes de navigation automatique.

### Nous contacter {#contact-us}

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

- **Ouvrir un ticket sur GitHub**. [GitHub de la version Android](https://github.com/osmandapp/OsmAnd-Issues/issues), [GitHub de la version iOS](https://github.com/osmandapp/OsmAnd-iOS/issues) : posez des questions, signalez des bogues et proposez des fonctionnalités.
- **Envoyer le journal de crash** (*pour Android*). Contient uniquement des informations sur les plantages.
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

C'est une application [open source](https://github.com/osmandapp/osmand), sans publicité / sans traqueur et axée sur la confidentialité. Pour préserver une confidentialité maximale, OsmAnd propose en premier lieu des cartes hors ligne, de sorte qu'aucune interaction ou information géographique ne fuite de votre appareil. Nous sommes très attentifs aux données collectées et transférées par le réseau, vous pouvez en lire plus dans notre [Politique de confidentialité](https://osmand.net/help-online/privacy-policy).  


## Autorisations {#permissions}

OsmAnd n'a aucune autorisation requise sur la version iOS / Android.

**Essentielles** :

- **Internet**. Téléchargement initial / mise à jour des cartes hors ligne. Peut également être nécessaire pour accéder à des fonctionnalités en ligne telles que l'[imagerie au niveau de la rue](../map/point-layers-on-map.md#-street-level-imagery), les [photos en ligne](../map/map-context-menu.md#online-photos) ou les [cartes en ligne](../map/raster-maps.md).
- **GPS** / **Réseau GSM**. Déterminer votre position, vous suivre en mode navigation et enregistrer votre trajet (facultatif). Cette autorisation est demandée lorsque vous cliquez sur le [bouton Ma position](../widgets/map-buttons.md#my-location-and-zoom) ou lorsque vous [démarrez la navigation](../navigation/setup/route-navigation.md#start--stop-navigation).

**Facultatives** :

- **Caméra/enregistrement vocal** (*Android*). Uniquement utilisé par les [notes audio/vidéo](../plugins/audio-video-notes.md). Cette fonctionnalité est fournie sous forme de plugin et est désactivée par défaut. Elle vous permet de créer rapidement des notes audio/vidéo liées à un emplacement pendant un trajet.