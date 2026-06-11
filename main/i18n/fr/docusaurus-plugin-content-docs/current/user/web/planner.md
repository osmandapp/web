---
source-hash: fe4113db0ceca0de38082d9504ed29de109b51547823235ea2036e5b59e91998
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

To create a navigation route, follow these steps :

- **Clic droit** sur la carte pour ajouter des points de cheminement :

  - *Naviguer depuis*. Définir le point de départ.
  - *Naviguer vers*. Définir la destination.
  - *Naviguer via*. Ajouter des points intermédiaires si nécessaire.

- After setting the start and end points, the route will be displayed on the map.

- In the **Route** block :

  - Move the start and end points if needed.
  - Edit the waypoints and choose the desired route type (e.g., car, bicycle, walking).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Select the appropriate **Route Profile** for different navigation options.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Click on the orange circles along the route to view detailed navigation instructions.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- To share the route, copy the URL. Example : [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Créer un nouvel itinéraire {#create-new-route}

Il existe deux façons de démarrer un nouvel itinéraire dans Planifier un itinéraire. La première option consiste à le faire directement depuis la carte : clic droit n'importe où sur la carte et sélectionnez **Créer un nouvel itinéraire**. La seconde option est depuis le panneau de gauche : cliquez sur le bouton **Créer une trace**.

Une fois l'itinéraire créé, ajoutez des points directement sur la carte. Chaque clic place le point suivant, et le planificateur construit l'itinéraire entre les points.

![OsmAnd Web Create New Route](@site/static/img/web/create_new_route_1.png)

### Importer une trace {#import-track}

Si vous avez déjà un fichier de trace, vous pouvez l'importer dans Planifier un itinéraire et continuer à y travailler dans le Planificateur Web. Cliquez sur le bouton **Importer une trace** et sélectionnez un fichier GPX depuis votre ordinateur. Après le téléchargement, la trace apparaît dans votre liste locale et s'ouvre dans le planificateur, afin que vous puissiez la consulter sur la carte et procéder à l'édition et à la gestion dans les panneaux de trace.

### Fichiers locaux {#local-files}

Tous les itinéraires et traces que vous créez ou importez dans Planifier un itinéraire sont ajoutés à la liste Locale dans le panneau de gauche. Cela facilite la gestion de plusieurs fichiers GPX en un seul endroit et le passage d'un à l'autre lors de la planification.

Chaque élément de la liste dispose d'un interrupteur qui vous permet d'afficher ou de masquer rapidement la trace sur la carte. Sélectionnez une trace dans la liste pour l'ouvrir dans le planificateur et continuer à y travailler. 

![OsmAnd Web Create New Route](@site/static/img/web/local_files.png)


## Gérer une trace {#manage-track}

Lorsque vous créez ou importez un itinéraire dans Planifier un itinéraire, un panneau de trace vertical s'ouvre. Ce panneau vous permet de changer le profil de routage et de gérer l'itinéraire.

Cliquez sur le contrôle de profil pour ouvrir la boîte de dialogue **Changer de profil**. Sélectionnez le profil requis (par exemple, Voiture, Vélo ou Piéton), puis choisissez comment l'appliquer : *Segments suivants* applique le profil uniquement aux nouvelles parties ajoutées à partir de ce point, tandis que *Tous les segments* recalcule l'ensemble de l'itinéraire avec le profil sélectionné.

Depuis le panneau de trace, vous pouvez également **Supprimer** la trace de votre liste locale.

Dans le [panneau Aperçu](#overview-panel), vous pouvez **Enregistrer sur le Cloud** pour conserver l'itinéraire pour une utilisation ultérieure et **Télécharger** en tant que fichier GPX.

![OsmAnd Web Manage Track](@site/static/img/web/manage_track_2_new.png) ![OsmAnd Web Manage Track](@site/static/img/web/change_profile.png)


## Panneaux de détails de trace {#track-details-panels}

Le menu de trace locale comprend trois panneaux : **Aperçu**, **Trace** et **Points**. Utilisez-les pour afficher les informations de la trace et gérer les points d'itinéraire et les points de cheminement.

### Panneau Aperçu {#overview-panel}

Le panneau Aperçu résume la trace sélectionnée et affiche les données clés sur l'itinéraire et l'altitude. Il inclut un aperçu rapide des statistiques de l'itinéraire, ainsi que des graphiques et une analyse supplémentaire de la trace basée sur les données de carte disponibles.

La section de résumé affiche :

- Points — le nombre de points d'itinéraire utilisés pour construire l'itinéraire.
- Distance — la longueur totale de l'itinéraire.
- Montée / descente — la montée totale et la descente totale le long de l'itinéraire.
- Altitude (min/moy/max) — les statistiques d'altitude pour l'itinéraire.
- Si les données d'altitude sont manquantes ou doivent être mises à jour, utilisez Altitude (Satellite) → recalculer pour reconstruire l'altitude en utilisant les données satellite (lorsqu'elles sont disponibles).

Sous le résumé, le panneau fournit des graphiques :

- Altitude — un profil d'altitude de l'itinéraire.
- Pente — un graphique de pente montrant les changements de gradient le long de la trace.
- Vitesse — un graphique de vitesse le long de la trace.

Vous pouvez activer ou désactiver les options suivantes :

- Afficher les points de trace — affiche les points de trace sur la carte.
- Afficher les points de cheminement — affiche les points de cheminement sur la carte.

Pour des détails supplémentaires sur la trace, ouvrez les sections d'analyse :

- Type de route — divise la trace en segments par classification de route.
- Surface — affiche les types de surface le long de l'itinéraire basés sur les données OSM.
- Fluidité — affiche la fluidité des segments basée sur les étiquettes OSM.

![OsmAnd Web Info Panel](@site/static/img/web/overview_panel.png) 

### Panneau Trace {#track-panel}

Le panneau Trace affiche la liste des points d'itinéraire utilisés pour construire la trace. Utilisez-le pour examiner et modifier la structure de l'itinéraire : glissez les points pour les réorganiser, supprimez des points à l'aide de l'icône de suppression, ou utilisez Effacer les points pour supprimer tous les points et recommencer.

![OsmAnd Web Track Panel](@site/static/img/web/track_panel_new.png)

### Panneau Points {#points-panel}

Le panneau Points est utilisé pour afficher et gérer les points de cheminement pour la trace sélectionnée. Les points de cheminement peuvent être ajoutés depuis le menu contextuel de la carte — clic droit sur la carte et choisissez l'option pour **Ajouter un point de cheminement**, puis remplissez les détails du point de cheminement (tels que le nom, l'icône et la couleur) et enregistrez-le.

L'édition des points de cheminement utilise la même interface que [l'édition des favoris](../web/web-favorites.md#edit-favorites). Vous pouvez modifier les propriétés des points de cheminement telles que le nom, l'adresse, la description, l'icône, la couleur et la forme à l'aide du panneau d'édition unifié. L'apparence sélectionnée est prévisualisée à la fois dans le panneau d'édition et directement sur la carte.

Dans la liste des Points de cheminement, vous pouvez contrôler si les points de cheminement sont affichés sur la carte et supprimer des points de cheminement individuels si nécessaire. Pour supprimer tous les points de cheminement de la trace en une seule fois, utilisez *Effacer tous les points de cheminement*.

![OsmAnd Web Waypoints Panel](@site/static/img/web/points_panel_new.png)


## Articles connexes {#related-articles}

- [Planifier un itinéraire](../plan-route/create-route.md)
- [Guides de voyage](../plan-route/travel-guides.md)
- [Navigation](../web/web-navigation.md)