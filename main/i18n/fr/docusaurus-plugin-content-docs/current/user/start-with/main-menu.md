---
source-hash: 912ad78d69a9d46cc8391bc3f8411dc7ce9423498430a6854908948053c3f739
sidebar_position: 3
title:  Menu principal
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




## Aperçu {#overview}

Le **Menu principal** est une liste primaire d'options disponibles dans l'application. Il fournit un accès rapide à la configuration du profil, aux paramètres généraux, à la recherche, aux données personnelles, à la navigation et à d'autres fonctionnalités.

L'icône du [Menu principal](../widgets/map-buttons.md#main-menu) '&#8801;' est située dans le coin inférieur gauche de l'écran de la carte. En mode navigation, ce bouton n'est pas visible par défaut. Il apparaît après une courte pression sur la carte.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu principal Android](@site/static/img/menu/main_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu principal iOS](@site/static/img/menu/main_menu_ios.png)

</TabItem>

</Tabs>


## Menu principal (Menu latéral) {#main-menu-side-menu}

### Fonctionnalités {#features}

- Les [Marqueurs de carte](../personal/markers.md) sont un outil qui permet de marquer un lieu sur la carte.
- [Mes lieux](../personal/myplaces.md) est un menu qui inclut par défaut les Favoris et les traces et peut en plus inclure des [Notes A/V](../plugins/audio-video-notes.md) et des [Éditions OSM](../plugins/osm-editing.md) (si ces plugins sont activés).
- La [Recherche](../search/index.md) (Android) est un outil qui vous permet de trouver le lieu ou l'objet qui existe sur la carte.
- Le bouton [Itinéraire](../widgets/map-buttons.md#directions) permet de créer un itinéraire et de démarrer la navigation.
- [Configurer la carte](../map/configure-map-menu.md) est un menu qui permet de configurer l'affichage de la carte.
- [Télécharger des cartes](../start-with/download-maps.md) est un menu qui contient tous les fichiers qui peuvent être téléchargés.
- Les [Guides de voyage (Bêta)](../plan-route/travel-guides.md) (*Android*) sont un outil qui permet d'utiliser le guide Wikivoyage pour votre voyage.
- [Planifier un itinéraire](../plan-route/create-route.md) est un outil qui vous permet de mesurer des distances sur la carte, de créer des traces GPX ou d'ajouter de nouveaux segments à des traces existantes.
- [* Enregistrement de trajet](../plugins/trip-recording.md) (*Android*) est un outil qui permet d'enregistrer tous les déplacements dans une trace en utilisant le GPS du téléphone.

### Paramètres {#settings}

- [Configurer l'écran](../widgets/configure-screen.md) est un menu qui permet de configurer l'affichage des widgets sur la carte.
- [Plugins](../plugins/index.md#configure-plugin) est une liste de fonctionnalités supplémentaires et de paramètres avancés.
- [Paramètres](../personal/global-settings.md) est un menu qui permet de configurer les principaux paramètres de l'application.
- [Aide](./first-steps.md#offline-help) fournit un accès rapide à votre guide, des informations sur la version de l'application et permet de contacter rapidement l'équipe de développement.

### Profil actif (Android) {#active-profile-android}

Le *Menu principal* offre un accès rapide pour changer et [personnaliser le profil](../personal/profiles.md). L'objectif principal des profils est d'avoir une apparence et une convivialité différentes de l'application pour la navigation. Vous pouvez cependant l'utiliser pour personnaliser l'écran et les widgets et changer de profil pour différents objectifs d'affichage. Tous les [paramètres](../personal/profiles.md) sont configurés séparément pour chaque profil.

![menu_profil](@site/static/img/menu/profile_menu.png)

Dans ce menu, vous pouvez **changer** de profil actif, **configurer** (modifier les paramètres) le profil actif ou **gérer** tous les profils de l'application.


### Personnaliser (Utilisation avancée d'Android) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> → &#65049; → Activer*.

![Éléments du menu latéral](@site/static/img/settings/drawer_menu_correct.png)

- Ce menu vous permet de changer l'ordre, de masquer ou d'afficher des éléments du [Menu latéral](../personal/profiles.md#drawer), de copier une liste d'éléments d'un autre profil et de réinitialiser les paramètres par défaut.

- Le bouton *Moins* supprime un élément du *Menu principal* dans le menu latéral et le déplace vers la section *Masqués*. Le bouton *Déplacer* change la position de l'élément sélectionné dans la liste.

- Les éléments déplacés vers la section *Masqués* ne sont pas affichés dans le menu latéral, mais toutes les options, paramètres ou plugins de cette liste continuent de fonctionner. Vous pouvez restaurer les éléments en appuyant sur le bouton vert à gauche de leur nom.
    ![Éléments masqués du menu latéral](@site/static/img/settings/drawer_menu_hidden_items.png)