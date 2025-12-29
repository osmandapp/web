---
source-hash: ece3e6010ee14839c5fe53b38593cda3c765a31a9395566df04b16ce2b73c3b4
sidebar_position: 5
sidebar_label: Tracks
title: Tracks
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

Le Planificateur Web vous offre un moyen simple de travailler avec vos données personnelles directement dans le navigateur. Après vous être connecté, vous pouvez ouvrir vos traces, les ajuster, en créer de nouvelles ou télécharger des fichiers depuis votre ordinateur. 

Toutes les modifications sont automatiquement synchronisées via [OsmAnd Cloud](../personal/osmand-cloud.md), de sorte que tout ce que vous mettez à jour sur le web apparaît sur vos appareils, et tout ce que vous créez sur votre téléphone s'affiche ici également. Cela facilite les transitions entre les plateformes et maintient vos données cohérentes où que vous utilisiez OsmAnd.


## Comment l'utiliser {#how-to-use}

C'est une fonctionnalité payante <ProFeature/>. Pour l'utiliser, connectez-vous à votre compte OsmAnd Pro.

![Connexion aux traces](@site/static/img/web/track_login.png) ![Connexion aux traces](@site/static/img/web/track_login_2.png)

La section Traces contient tous les outils et actions liés aux traces. Les options suivantes sont disponibles :

- Afficher les traces depuis [OsmAnd Cloud](#cloud-tracks).
- Ajouter des traces sur la carte (dossier **Visible sur la carte**).
- Consulter toutes les informations sur les traces et le graphique
- Modifier les traces et les ajouter au Cloud.
- Télécharger et supprimer les traces.
- Créer de nouveaux dossiers ou les supprimer.
- Télécharger les dossiers sous forme de collection OSF ou OBF.


## Visible sur la carte {#visible-on-the-map}

La vue **Visible sur la carte** liste toutes les traces actuellement affichées sur la carte. Toute trace peut être ajoutée à cette liste depuis le panneau principal des Traces en utilisant l'option **⋮ → Rendre la trace visible**.

Les traces visibles sur la carte sont surlignées en bleu, tandis que les traces actuellement masquées apparaissent en gris. Un interrupteur à côté de chaque trace vous permet de l'afficher ou de la masquer rapidement. Le bouton **Masquer tout** désactive toutes les traces visibles en une seule fois.

Sous la liste principale, la section **Récemment visible** affiche les traces qui ont été montrées sur la carte précédemment. Cela facilite la réactivation d'une trace sans avoir à la rechercher à nouveau dans vos dossiers ou dans OsmAnd Cloud.

![Visible sur la carte](@site/static/img/web/visible_new.png) ![Visible sur la carte](@site/static/img/web/visible_new_2.png)


## Menu du dossier de traces {#track-folder-menu}

![Menu du dossier de traces](@site/static/img/web/collection_new.png)

Cliquez sur le bouton à trois points (⋮) pour ouvrir le menu *Dossier de traces*. Depuis ici, vous pouvez :

 - Télécharger au format OSF.
 - Télécharger au format Collection OBF. Exporter le dossier au format binaire OsmAnd, en choisissant soit un [fichier OBF](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) soit un [OBF de voyage](https://osmand.net/blog/routes#generated-travel-routes).
      -  **Fichier OBF**. Vous pouvez télécharger une carte OBF hors ligne et l'ouvrir avec OsmAnd sur votre appareil. Cela convient pour afficher un grand nombre de traces sur la carte.
      -  **OBF de voyage**. Vous pouvez également importer une carte de traces sous forme de livre de voyage, ce qui vous permet de sélectionner des traces individuelles sur la carte et de les utiliser comme des fichiers GPX normaux. Un livre de voyage prend également en charge des fonctionnalités telles que l'affichage des traces sous forme de points, le filtrage des traces par type d'activité et le filtrage des points de passage.
 - Renommer. Ouvre une boîte de dialogue où vous pouvez saisir un nouveau nom pour le dossier sélectionné. La modification est synchronisée avec OsmAnd Cloud et apparaîtra sur tous les appareils connectés.
 - Supprimer. Ouvre une boîte de dialogue de confirmation. La suppression d'un dossier le supprime définitivement ainsi que toutes les traces qu'il contient. Cette action est également synchronisée via OsmAnd Cloud.

![Menu du dossier de traces](@site/static/img/web/collection_rename.png) ![Menu du dossier de traces](@site/static/img/web/collection_delete.png)


## Traces cloud {#cloud-tracks}

Les traces GPX que vous avez dans [OsmAnd Cloud](../personal/osmand-cloud.md) seront disponibles pour l'affichage et la modification après connexion. Uniquement pour les utilisateurs **Pro** <ProFeature/> et pour les utilisateurs [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) (qui peuvent télécharger leurs données même après l'expiration de leur abonnement Pro).

Les fonctionnalités suivantes sont disponibles après avoir choisi une trace cloud :

![Modification GPX cloud OsmAnd Web](@site/static/img/web/cloud_track.png)

- Écrans d'information :
  - *Informations* - affichage des données de la trace.
  - *Altitude* - graphique d'altitude.
  - *Vitesse* - graphique de vitesse.
  - *Pente* - graphique de pente.
  - *Paramètres* - liste des profils de navigation pour l'outil *Créer un itinéraire*.
  - *Virages* - une liste générée d'instructions de virage approximatives basée sur la géométrie de la trace.
  - *Type de route* - divise la trace en segments par classification de route .
  - *Surface* - montre les types de surfaces de trace le long de l'itinéraire.
  - *Fluidité* - affiche la fluidité des segments basée sur les étiquettes OSM .

![Modification GPX cloud OsmAnd Web](@site/static/img/web/cloud_track_turns.png) ![Modification GPX cloud OsmAnd Web](@site/static/img/web/cloud_track_details.png)

- Boutons d'action :
  - *Modifier la trace* - ajout de la trace cloud en local pour modification (bouton _Modifier localement_ sur le panneau).
  - *Télécharger GPX* - télécharge la trace sur le PC.
  - *Recalculer* Altitude (Satellite) - affiche le graphique d'altitude de la trace sélectionnée.
  - *Supprimer la trace* - supprime la trace.
  - *Fermer la trace* - ferme la trace.


## Articles connexes {#related-articles}

- [Gérer les traces](../personal/tracks/manage-tracks.md)
- [Analyseur de traces](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)