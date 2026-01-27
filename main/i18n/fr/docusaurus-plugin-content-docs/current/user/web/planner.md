---
source-hash: efbd8cb409a1e8ef85e36e19d96eeb7a90fa212c810385f1ad6562e2e09d6d40
sidebar_position: 9
sidebar_label:  Planifier un itinéraire
title: Planifier un itinéraire sur le site web
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

<!--
<InfoIncompleteArticle/>
-->


## Aperçu {#overview}

Le planificateur d'itinéraires web d'OsmAnd vous permet de créer des itinéraires de navigation, de planifier des traces et de gérer des fichiers locaux directement depuis votre navigateur. Cet outil web est utile pour créer des itinéraires de voyage détaillés que vous pouvez synchroniser avec votre application ou partager avec d'autres.


<!--
## Itinéraire de navigation {#navigation-route}

Pour créer un itinéraire de navigation, suivez ces étapes :

- **Clic droit** sur la carte pour ajouter des points de cheminement :

  - *Naviguer depuis*. Définir le point de départ.
  - *Naviguer vers*. Définir la destination.
  - *Naviguer via*. Ajouter des points intermédiaires si nécessaire.

- Après avoir défini les points de départ et d'arrivée, l'itinéraire s'affichera sur la carte.

- Dans le bloc **Itinéraire** :

  - Déplacez les points de départ et d'arrivée si nécessaire.
  - Modifiez les points de cheminement et choisissez le type d'itinéraire souhaité (par exemple, voiture, vélo, marche).

  ![Créer un itinéraire web OsmAnd](@site/static/img/web/navigation.png)

- Sélectionnez le **Profil d'itinéraire** approprié pour les différentes options de navigation.

  ![Créer un itinéraire web OsmAnd](@site/static/img/web/profile_type.png)

- Cliquez sur les cercles orange le long de l'itinéraire pour afficher les instructions de navigation détaillées.

  ![Créer un itinéraire web OsmAnd](@site/static/img/web/nav_instr.png)

- Pour partager l'itinéraire, copiez l'URL. Exemple : [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Créer un nouvel itinéraire {#create-new-route}

Il existe deux façons de démarrer un nouvel itinéraire dans Planifier un itinéraire. La première option consiste à le faire directement depuis la carte : clic droit n'importe où sur la carte et sélectionnez **Créer un nouvel itinéraire**. La seconde option est depuis le panneau de gauche : cliquez sur le bouton **Créer une trace**.

Une fois l'itinéraire créé, ajoutez des points directement sur la carte. Chaque clic place le point suivant, et le planificateur construit l'itinéraire entre les points.

![Créer un nouvel itinéraire web OsmAnd](@site/static/img/web/create_new_route.png)

### Importer une trace {#import-track}

Si vous avez déjà un fichier de trace, vous pouvez l'importer dans Planifier un itinéraire et continuer à y travailler dans le Planificateur Web. Cliquez sur le bouton **Importer une trace** et sélectionnez un fichier GPX depuis votre ordinateur. Après le téléchargement, la trace apparaît dans votre liste locale et s'ouvre dans le planificateur, afin que vous puissiez la consulter sur la carte et procéder à l'édition et à la gestion dans les panneaux de trace.

### Fichiers locaux {#local-files}

Tous les itinéraires et traces que vous créez ou importez dans Planifier un itinéraire sont ajoutés à la liste Locale dans le panneau de gauche. Cela facilite la gestion de plusieurs fichiers GPX en un seul endroit et le passage d'un à l'autre lors de la planification.

Chaque élément de la liste dispose d'un interrupteur qui vous permet d'afficher ou de masquer rapidement la trace sur la carte. Sélectionnez une trace dans la liste pour l'ouvrir dans le planificateur et continuer à y travailler. 

![Créer un nouvel itinéraire web OsmAnd](@site/static/img/web/local_files.png)


## Gérer une trace {#manage-track}

Lorsque vous créez ou importez un itinéraire dans Planifier un itinéraire, un panneau de trace vertical s'ouvre. Utilisez ce panneau pour changer le profil de routage et gérer l'itinéraire. Cliquez sur le contrôle de profil pour ouvrir la boîte de dialogue **Changer de profil**, sélectionnez le profil dont vous avez besoin (par exemple, Voiture, Vélo ou Piéton), et choisissez comment l'appliquer : *Segments suivants* applique le profil uniquement aux nouvelles parties ajoutées à partir de ce point, tandis que *Tous les segments* recalcule l'ensemble de l'itinéraire avec le profil sélectionné.

Depuis le panneau de trace, vous pouvez également effectuer des actions courantes sur les fichiers. Vous pouvez **Enregistrer sur le Cloud** pour conserver l'itinéraire pour une utilisation ultérieure, **Télécharger GPX** pour l'exporter en tant que fichier, **Fermer la trace** pour arrêter son édition, ou **Supprimer la trace** pour la retirer de votre liste locale. Ces actions sont également disponibles depuis les contrôles correspondants dans le [panneau Infos](#info-panel).

![Gérer une trace web OsmAnd](@site/static/img/web/manage_track_new.png) ![Gérer une trace web OsmAnd](@site/static/img/web/change_profile.png)


## Panneaux de détails de trace {#track-details-panels}

Le menu de trace locale comprend trois panneaux : **Infos**, **Trace** et **Points de cheminement**. Utilisez-les pour afficher les informations de la trace et gérer les points d'itinéraire et les points de cheminement.

### Panneau Infos {#info-panel}

Le panneau Infos résume la trace sélectionnée et affiche les données clés sur l'itinéraire et l'altitude. Il inclut un aperçu rapide des statistiques de l'itinéraire, ainsi que des graphiques et une analyse supplémentaire de la trace basée sur les données de carte disponibles.

La section de résumé affiche :

- Points — le nombre de points d'itinéraire utilisés pour construire l'itinéraire.
- Distance — la longueur totale de l'itinéraire.
- Montée / descente — la montée totale et la descente totale le long de l'itinéraire.
- Altitude (min/moy/max) — les statistiques d'altitude pour l'itinéraire.
- Si les données d'altitude sont manquantes ou doivent être mises à jour, utilisez Altitude (Satellite) → recalculer pour reconstruire l'altitude en utilisant les données satellite (lorsqu'elles sont disponibles).

Sous le résumé, le panneau fournit des graphiques :

- Altitude — un profil d'altitude de l'itinéraire.
- Pente — un graphique de pente montrant les changements de gradient le long de la trace.

Pour des détails supplémentaires sur la trace, ouvrez les sections d'analyse :

- Surface — affiche les types de surface le long de l'itinéraire basés sur les données OSM.
- Fluidité — affiche la fluidité des segments basée sur les étiquettes OSM.

Les actions courantes sur la trace telles que l'enregistrement, le téléchargement, la fermeture et la suppression sont également disponibles dans ce panneau.

![Panneau Infos web OsmAnd](@site/static/img/web/info_panel.png) ![Gérer une trace web OsmAnd](@site/static/img/web/info_panel_2.png)

### Panneau Trace {#track-panel}

Le panneau Trace affiche la liste des points d'itinéraire utilisés pour construire la trace. Utilisez-le pour examiner et modifier la structure de l'itinéraire : glissez les points pour les réorganiser, supprimez des points à l'aide de l'icône de suppression, ou utilisez Effacer les points pour supprimer tous les points et recommencer.

![Panneau Trace web OsmAnd](@site/static/img/web/track_panel.png)

### Panneau Points de cheminement {#waypoints-panel}

Le panneau Points de cheminement est utilisé pour afficher et gérer les points de cheminement pour la trace sélectionnée. Les points de cheminement peuvent être ajoutés depuis le menu contextuel de la carte — clic droit sur la carte et choisissez l'option pour **Ajouter un point de cheminement**, puis remplissez les détails du point de cheminement (tels que le nom, l'icône et la couleur) et enregistrez-le.

Dans la liste des Points de cheminement, vous pouvez contrôler si les points de cheminement sont affichés sur la carte et supprimer des points de cheminement individuels si nécessaire. Pour supprimer tous les points de cheminement de la trace en une seule fois, utilisez *Effacer tous les points de cheminement*.

![Panneau Points de cheminement web OsmAnd](@site/static/img/web/waypoints_panel.png)


## Articles connexes {#related-articles}

- [Planifier un itinéraire](../plan-route/create-route.md)
- [Guides de voyage](../plan-route/travel-guides.md)
- [Navigation](../web/web-navigation.md)