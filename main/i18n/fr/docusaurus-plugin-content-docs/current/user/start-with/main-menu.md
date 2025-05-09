---
sidebar_position: 3
title: Menu principal
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Aperçu

Le **Menu principal** est une liste primaire d'options disponibles dans l'application. Il permet un accès rapide à la configuration du profil, aux paramètres globaux, à la recherche, aux données personnelles, à la navigation et à d'autres fonctionnalités.

L'icône du [Menu principal](../widgets/map-buttons.md#main-menu) '&#8801;' est située dans le coin inférieur gauche de l'écran Carte. En mode navigation, ce bouton n'est pas visible par défaut. Il apparaît après un court appui sur la carte.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu principal Android](@site/static/img/menu/main_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu principal iOS](@site/static/img/menu/main_menu_ios.png)

</TabItem>

</Tabs>


## Menu principal (Menu latéral)

### Fonctionnalités

- [Marqueurs de carte](../personal/markers.md) est un outil qui permet de marquer un lieu sur la carte.
- [Mes lieux](../personal/myplaces.md) est un menu qui inclut par défaut les Favoris et les traces et peut en outre inclure les [Notes A/V](../plugins/audio-video-notes.md) et les [Modifications OSM](../plugins/osm-editing.md) (si ces plugins sont activés).
- [Recherche](../search/index.md) (Android) est un outil qui vous permet de trouver le lieu ou l'objet qui existe sur la carte.
- Le bouton [Itinéraires](../widgets/map-buttons.md#directions) permet de créer un itinéraire et de démarrer la navigation.
- [Configurer la carte](../map/configure-map-menu.md) est un menu qui permet de configurer l'affichage de la carte.
- [Télécharger des cartes](../start-with/download-maps.md) est un menu qui contient tous les fichiers qui peuvent être téléchargés.
- [Guides de voyage (Bêta)](../plan-route/travel-guides.md) (*Android*) est un outil qui permet d'utiliser le guide Wikivoyage pour votre voyage.
- [Planifier un itinéraire](../plan-route/create-route.md) est un outil qui vous permet de mesurer les distances sur la carte, de créer des traces GPX ou d'ajouter de nouveaux segments à des traces existantes.
- [* Enregistrement de trajet](../plugins/trip-recording.md) (*Android*) est un outil qui permet d'enregistrer tous les mouvements dans une trace à l'aide du GPS du téléphone.

### Paramètres

- [Configurer l'écran](../widgets/configure-screen.md) est un menu qui permet de configurer l'affichage des widgets sur la carte.
- [Plugins](../plugins/index.md#configure-a-plugin) est une liste de fonctionnalités supplémentaires et de paramètres avancés.
- [Paramètres](../personal/global-settings.md) est un menu qui permet de configurer les principaux paramètres de l'application.
- [Aide](./first-steps.md#offline-help) fournit un accès rapide à votre guide, des informations sur la version de l'application et permet de contacter rapidement l'équipe de développement.

### Profil actif (Android)

Le *Menu principal* permet un accès rapide pour changer et [personnaliser le profil](../personal/profiles.md). Le but principal des profils est d'avoir une apparence et une sensation différentes de l'application pour la navigation. Cependant, vous pouvez l'utiliser pour personnaliser l'écran et les widgets et changer de profil à des fins d'affichage différentes. Tous les [paramètres](../personal/profiles.md) sont configurés séparément pour chaque profil.

![profile_menu](@site/static/img/menu/profile_menu.png)

Dans ce menu, vous pouvez **changer** le profil actif, **configurer** (modifier les paramètres) pour le profil actif ou **gérer** tous les profils de l'application.


### Personnaliser (Utilisation avancée d'Android)

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> →  &#65049; → Activer*.  

![Drawer menu items ](@site/static/img/settings/drawer_menu_correct.png)  

- Ce menu vous permet de modifier l'ordre, de masquer ou d'afficher des éléments du [Tiroir](../personal/profiles.md#drawer), de copier une liste d'éléments d'un autre profil et de réinitialiser les paramètres par défaut.  

- Le bouton *Moins* supprime un élément du *Menu principal* dans le tiroir et le déplace vers la section *Masqué*. Le bouton *Déplacer* modifie la position de l'élément sélectionné dans la liste.  

- Les éléments déplacés vers la section *Masqué* ne sont pas affichés dans le menu du Tiroir, mais toutes les options, paramètres ou plugins de cette liste continuent de fonctionner. Vous pouvez restaurer les éléments en appuyant sur le bouton vert à gauche de leurs noms.  
    ![Drawer menu hidden items ](@site/static/img/settings/drawer_menu_hidden_items.png)

> *Cet article a été mis à jour pour la dernière fois en juillet 2022*

-- source-hash: blake2s: a29650de82a89ec22c40a084beb888ce4118499172a22d048ef34587cea9c288 --
