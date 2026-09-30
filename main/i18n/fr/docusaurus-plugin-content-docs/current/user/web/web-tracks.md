---
source-hash: 0f4d43db5e7fc2384dd4ee693e3c1828ad6368d3e9ba5e38ea40ddd156a2c47c
sidebar_position: 5
sidebar_label: Traces
title: Traces
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

Le Planificateur Web vous offre un moyen simple de travailler avec vos données personnelles directement dans le navigateur. Après vous être connecté, vous pouvez ouvrir vos traces, les ajuster, en créer de nouvelles ou importer des fichiers depuis votre ordinateur. 

Toutes les modifications sont automatiquement synchronisées via [OsmAnd Cloud](../personal/osmand-cloud.md) : tout ce que vous mettez à jour sur le web apparaît sur vos appareils, et tout ce que vous créez sur votre téléphone s'affiche également ici. Cela facilite le passage d'une plateforme à l'autre et garde vos données cohérentes partout où vous utilisez OsmAnd.


## Comment l'utiliser {#how-to-use}

C'est une fonctionnalité payante <ProFeature/>. Pour l'utiliser, connectez-vous à votre compte OsmAnd Pro.

![Connexion aux traces](@site/static/img/web/track_login.png) ![Connexion aux traces](@site/static/img/web/track_login_2.png)

La section Traces contient tous les outils et actions liés aux traces. Les options suivantes sont disponibles :

- Afficher les traces depuis [OsmAnd Cloud](#cloud-tracks).
- Ajouter des traces sur la carte (dossier **Visible sur la carte**).
- Consulter les informations et les graphiques d'une trace.
- Modifier des traces et les ajouter au Cloud.
- Télécharger et supprimer des traces.
- Créer de nouveaux dossiers ou les supprimer.
- Télécharger des dossiers sous forme de collection OSF ou OBF.


## Importer des traces {#import-tracks}

Vous pouvez importer des traces GPX dans le Planificateur Web soit en utilisant le bouton Importer, soit en glissant-déposant des fichiers GPX directement sur la carte.

Pour importer une trace par glisser-déposer :
- Ouvrez la section Traces.
- Faites glisser un ou plusieurs fichiers GPX depuis votre ordinateur.
- Déposez les fichiers sur la carte ou sur un dossier de traces spécifique.

Lorsqu'un fichier est glissé au-dessus de la carte, la zone de dépôt disponible est mise en surbrillance. Si vous déposez le fichier directement sur la carte, il est importé dans le dossier Import. Si vous le déposez sur un dossier existant, il est importé dans ce dossier à la place.

Une fois l'importation terminée, la trace apparaît dans la liste des traces, est synchronisée avec [OsmAnd Cloud](../personal/osmand-cloud.md) et devient disponible sur tous les appareils connectés au même compte.

![Glisser-déposer](@site/static/img/web/drag_and_drop.png)


## Visible sur la carte {#visible-on-the-map}

La vue **Visible sur la carte** répertorie toutes les traces actuellement affichées sur la carte. N'importe quelle trace peut être ajoutée à cette liste depuis le panneau principal Traces grâce à l'option **⋮ → Rendre la trace visible**.

Les traces visibles sur la carte sont surlignées en bleu, tandis que les traces actuellement masquées apparaissent en gris. Un interrupteur à côté de chaque trace permet de l'afficher ou de la masquer rapidement. Le bouton **Tout masquer** désactive toutes les traces visibles en une seule fois.

Sous la liste principale, la section **Récemment visibles** affiche les traces qui ont été affichées précédemment sur la carte. Cela permet de réactiver facilement une trace sans avoir à la rechercher à nouveau dans vos dossiers ou dans OsmAnd Cloud.

![Visible sur la carte](@site/static/img/web/visible_new.png) ![Visible sur la carte](@site/static/img/web/visible_new_2.png)


## Menu du dossier de traces {#track-folder-menu}

![Menu du dossier de traces](@site/static/img/web/collection_new.png)

Cliquez sur le bouton à trois points (⋮) pour ouvrir le menu *Dossier de traces*. Vous pouvez alors :

 - Télécharger au format OSF.
 - Télécharger comme collection OBF. Exportez le dossier au format binaire OsmAnd, en choisissant soit un [fichier OBF](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/), soit un [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **Fichier OBF**. Vous pouvez télécharger une carte OBF hors ligne et l'ouvrir avec OsmAnd sur votre appareil. Elle convient pour afficher un grand nombre de traces sur la carte.
      -  **Travel OBF**. Vous pouvez également importer une carte de traces sous forme de guide de voyage (Travel), ce qui vous permet de sélectionner individuellement des traces sur la carte et de les utiliser comme de simples fichiers GPX. Un guide de voyage prend également en charge des fonctions telles que l'affichage des traces sous forme de points, le filtrage des traces par type d'activité et le filtrage des points de cheminement.
 - Renommer. Ouvre une boîte de dialogue où vous pouvez saisir un nouveau nom pour le dossier sélectionné. La modification est synchronisée avec OsmAnd Cloud et apparaîtra sur tous les appareils connectés.
 - Supprimer. Ouvre une boîte de dialogue de confirmation. La suppression d'un dossier l'efface définitivement ainsi que toutes les traces qu'il contient. Cette action est également synchronisée via OsmAnd Cloud.

![Menu du dossier de traces](@site/static/img/web/collection_rename.png) ![Menu du dossier de traces](@site/static/img/web/collection_delete.png)

### Dossiers intelligents {#smart-folders}

Les **Dossiers intelligents** créés sur les appareils mobiles peuvent être synchronisés et consultés dans la version web via OsmAnd Cloud. Pour qu'ils apparaissent sur le web, la synchronisation des [Paramètres d'OsmAnd](../personal/osmand-cloud.md#select-data-to-back-up) doit être activée dans les paramètres du Cloud.  
Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

Les Dossiers intelligents sont actuellement stockés dans les paramètres globaux ; ils ne sont donc envoyés vers le Cloud que lorsque la synchronisation des Paramètres est active. Après avoir créé ou modifié un Dossier intelligent, il est recommandé de lancer une synchronisation manuelle pour mettre à jour les données.

Sur le web, les Dossiers intelligents sont affichés dans la liste des traces avec une icône d'étoile distinctive, ce qui permet de les distinguer facilement des dossiers classiques. Le nom du dossier est synchronisé en premier, tandis que la liste des traces dépend de la façon dont le dossier est configuré sur l'appareil.

Les traces ne sont affichées que si la configuration du Dossier intelligent est prise en charge sur le web. Cela inclut à la fois les [paramètres de filtre](../personal/tracks/smart-folder.md#search-filter) et les [options de regroupement](../personal/tracks/smart-folder.md#managing-smart-folders). Si des paramètres non pris en charge sont utilisés (par exemple, la ville la plus proche), le dossier peut apparaître sans traces. Pour une meilleure compatibilité, utilisez des paramètres courants tels que l'activité, la date, la distance ou la durée.

La synchronisation des Dossiers intelligents peut varier selon la plateforme et la configuration de la synchronisation. Pour des résultats les plus cohérents possible, assurez-vous que la synchronisation du Cloud est activée et à jour sur tous les appareils.

Le menu à trois points (⋮) propose des actions supplémentaires pour le Dossier intelligent. Vous pouvez *Télécharger au format OSF*, *Télécharger comme collection OBF*, *Renommer* ou *Supprimer* le dossier.

![Dossiers intelligents](@site/static/img/web/smart_folder_new.png) ![Dossiers intelligents](@site/static/img/web/smart_folder_menu_new.png)


## Traces du Cloud {#cloud-tracks}

Les traces GPX que vous avez dans [OsmAnd Cloud](../personal/osmand-cloud.md) seront disponibles pour l'affichage et la modification après connexion. Seuls les **utilisateurs Pro** <ProFeature/> peuvent y accéder. Les utilisateurs de [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) peuvent télécharger leurs données du Cloud même après l'expiration de leur abonnement Pro.

Lorsque vous sélectionnez une trace, la carte se centre automatiquement et ajuste le niveau de zoom pour afficher la trace entière dans la zone visible de la carte.

Vous pouvez également utiliser le bouton **Focus** pour masquer tous les autres favoris et traces sur la carte, ce qui facilite la consultation de la trace sélectionnée. Désactivez le mode Focus pour restaurer la visibilité des autres objets de la carte.

Les fonctionnalités suivantes sont disponibles après avoir choisi une trace du cloud :
- *Informations* - affichage des données de la trace.
- *Altitude* - graphique d'altitude.
- *Vitesse* - graphique de vitesse.
- *Pente* - graphique de pente.
- *Recalculer l'altitude (satellite)* - recalcule les valeurs d'altitude de la trace sélectionnée et les affiche sur le graphique d'altitude.
- *Type de route* - découpe la trace en segments selon la classification des routes.
- *Revêtement* - affiche les types de revêtement de la trace le long de l'itinéraire.
- *Régularité* - affiche la régularité des segments d'après les tags OSM.

![Modification GPX dans OsmAnd Web Cloud](@site/static/img/web/cloud_track_new.png) ![Modification GPX dans OsmAnd Web Cloud](@site/static/img/web/cloud_track_details_new.png)


## Articles connexes {#related-articles}

- [Gérer les traces](../personal/tracks/manage-tracks.md)
- [Analyseur de traces](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)