---
source-hash: 8126842666c1b2fbd00d6cdb9fb5d9a688401ea2ca74976ccf168038defc6772
sidebar_position: 5
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

<InfoIncompleteArticle/>


## Aperçu {#overview}

Le planificateur d'itinéraires web d'OsmAnd vous permet de créer des itinéraires de navigation, de planifier des traces et de gérer des fichiers locaux directement depuis votre navigateur. Cet outil web est utile pour créer des itinéraires de voyage détaillés que vous pouvez synchroniser avec votre application ou partager avec d'autres.


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


## Créer une trace et des fichiers locaux {#create-track-and-local-files}

L'outil [**Planifier un itinéraire**](../plan-route/create-route.md) d'OsmAnd Web vous permet de créer et de modifier des traces de la même manière que dans l'application mobile. Voici comment vous pouvez créer et gérer des traces :


***Création d'un nouvel itinéraire :***

- *Clic droit* sur la carte et sélectionnez **Créer un nouvel itinéraire**.
- Alternativement, utilisez le bouton **Créer une trace** dans le menu *Local* (situé sur le côté droit avec les boutons *Crayon* et *Télécharger*).


***Gestion des traces :***

- **Sélectionner le profil de navigation**. Choisissez un profil (par exemple, randonnée, conduite) pour des sections d'itinéraire spécifiques (*Nouveaux segments*) ou pour l'ensemble de l'itinéraire (*Tous les segments*).
- **Ajouter des points de cheminement**. Cliquez sur la carte pour ajouter de nouveaux points.
- **Enregistrer l'itinéraire**. Enregistrez votre itinéraire pour une utilisation future.
- **Afficher les détails de l'itinéraire**. Accédez aux informations détaillées de la trace, y compris la longueur, la durée et le terrain.
  ![Créer une trace web OsmAnd](@site/static/img/web/create_route.png)


***Importation et création de traces :***

- **Importer une trace**. Vous pouvez télécharger n'importe quel fichier GPX dans la section **Local** en visitant [osmand.net/map](https://osmand.net/map).
- **Créer une trace**. Créez manuellement une nouvelle trace en sélectionnant des points de cheminement.
  ![Créer une trace web OsmAnd](@site/static/img/web/create_route_2.png)


***Actions et informations sur la trace locale :***

Le menu **Trace locale** propose trois panneaux pour l'édition : **Infos**, **Trace** et **Points de cheminement**.

**Panneau Infos** :

- *Enregistrer sur le Cloud*. Enregistrez votre trace sur OsmAnd Cloud pour y accéder sur tous vos appareils.
- *Ajouter une description*. Ajoutez des notes sur la trace.
- *Renommer*. Changez le nom de la trace.
- *Recalculer*. Ajoutez ou mettez à jour les données d'altitude.
- *Altitude*. Affichez le profil d'altitude.
- *Graphique de vitesse*. Affichez les données de vitesse le long de la trace.
- *Graphique de pente*. Affichez les changements de pente le long de l'itinéraire.  
- *Détails de la route*. Affichez des informations détaillées telles que le type de route, la surface et la pente.
- *Télécharger en GPX*. Exportez la trace en tant que fichier GPX ([Fonctionnalité Pro](../purchases/index.md)).
- *Fermer la trace*. Fermez la vue d'édition de la trace.
- *Supprimer la trace*. Supprimez définitivement la trace.
  ![Créer une trace web OsmAnd](@site/static/img/web/create_route_3.png)

**Panneau Trace** :

- Affichez et modifiez les points de la trace.
- Réorganisez ou supprimez des points selon vos besoins.

**Panneau Points de cheminement** :

- Affichez et gérez les points de cheminement de la trace.
- Activez ou désactivez la visibilité des points de cheminement sur la carte.
- Supprimez les points de cheminement individuellement si nécessaire.

**Panneau Virages** :

- Affichez des informations détaillées sur les virages le long de la trace.

  ![Créer une trace web OsmAnd](@site/static/img/web/create_route_1.png)


***Fonctionnalités supplémentaires :***

- **Synchronisation avec l'application**. Enregistrez les itinéraires sur OsmAnd Cloud et accédez-y sur votre application mobile.
- **Profils d'itinéraire personnalisés**. Ajustez les profils pour les adapter à différentes activités, comme le vélo ou la randonnée.
- **Itinéraires partageables**. Copiez et partagez les URL des itinéraires pour une planification collaborative.