---
source-hash: d5de9c3084442f355b9b6536f2e73e330ece35ee360363e944195eaf5ddfe9fb
sidebar_position: 6
title:  Mes Lieux
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

**Mes Lieux** est le hub central de l'application OsmAnd pour gérer et personnaliser toutes les données personnelles. Vous pouvez utiliser cette section pour organiser les [points favoris](#favorites) marqués comme importants ou fréquemment visités. L'onglet [Traces](#tracks) vous permet de visualiser, importer, enregistrer et créer des fichiers GPX pour vous aider à conserver un historique détaillé de vos itinéraires et voyages. Vous pouvez également gérer vos [Modifications OpenStreetMap](#openstreetmap-edits), ce qui facilite la contribution aux améliorations et mises à jour de la carte. Le plugin et les widgets [Notes Audio / Vidéo](#audiovideo-notes) permettent aux utilisateurs Android de créer et d'enregistrer des notes multimédias liées à des lieux spécifiques, ajoutant du contexte à leurs voyages. Sur iOS, Mes Lieux donne également accès aux [Guides de voyage](#travel-guides) mis en signet, vous permettant d'organiser et d'ouvrir rapidement le contenu de voyage enregistré.

## Menu Mes Lieux {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places android](@site/static/img/personal/my_places_android_new.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places ios](@site/static/img/personal/my_places_ios_2.png)  ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.webp)

</TabItem>

</Tabs>

Mes Lieux est organisé par catégories. Sélectionnez un onglet pour gérer les données correspondantes.

**Note :** Toutes les données stockées dans le menu *Mes Lieux* peuvent être déplacées en utilisant un format spécial `.osf` via les applications de votre appareil. Ce processus simplifie la sauvegarde et le transfert de données entre les appareils et vous permet de les partager avec d'autres utilisateurs d'OsmAnd. 

### Favoris {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.webp)

</TabItem>

</Tabs>

**Les favoris** vous permettent de marquer des lieux importants ou fréquemment visités. Ces points favoris sont organisés en dossiers et peuvent être personnalisés avec différentes couleurs, formes et icônes. Vous pouvez naviguer rapidement vers n'importe quel lieu favori via le menu **Mes Lieux** sans avoir à le rechercher à plusieurs reprises.

Pour des instructions complètes, consultez l'article [Favoris](../personal/favorites.md).

### Traces {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.webp)

</TabItem>

</Tabs>

**Les traces** offrent des outils puissants pour enregistrer, créer et gérer des itinéraires dans OsmAnd. Elles peuvent être utilisées pour la [navigation](../navigation/setup/gpx-navigation.md), l'[enregistrement de trajets](../plugins/trip-recording.md) ou l'[intégration](../personal/tracks/manage-tracks.md#import) de fichiers GPX externes.

Pour un guide complet, consultez l'article [Gérer les traces](../personal/tracks/manage-tracks.md).

### Modifications OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm_ios.webp)

</TabItem>

</Tabs>

La fonctionnalité **Modifications OpenStreetMap** d'OsmAnd vous permet de contribuer à la communauté cartographique mondiale en ajoutant, modifiant ou commentant des données cartographiques.

Consultez le [plugin d'édition OSM](../plugins/osm-editing.md) pour des instructions étape par étape.

### Notes Audio/Vidéo {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

Le **plugin Notes Audio/Vidéo** vous permet de créer des notes multimédias liées à des emplacements spécifiques sur la carte. Ces notes sont stockées dans **Mes Lieux** sous l'**onglet Notes A/V**.

Pour plus d'informations, visitez la page du [plugin Notes Audio/Vidéo](../plugins/audio-video-notes.md).

### Guides de voyage (iOS) {#travel-guides}

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_travel_guides"/>*

![Travel Guides iOS](@site/static/img/plan-route/travel_guides_ios.webp)

La section **Voyage** contient les guides de voyage et articles mis en signet enregistrés pour un accès hors ligne. Vous pouvez rapidement ouvrir, organiser et gérer votre contenu de voyage enregistré depuis Mes Lieux. La section Voyage n'est affichée que lorsqu'au moins deux guides de voyage ont été mis en signet.

Pour des informations détaillées, consultez l'article [Guides de voyage](../plan-route/travel-guides.md).

## Articles Connexes {#related-articles}

- [Gérer les traces](../personal/tracks/manage-tracks.md#import--export-track)
- [Favoris](../personal/favorites.md)
- [Édition OpenStreetMap](../plugins/osm-editing.md)
- [Notes Audio/Vidéo](../plugins/audio-video-notes.md)
- [Guides de voyage](../plan-route/travel-guides.md)
- [Historique de recherche](../search/search-history.md#export-and-share)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)