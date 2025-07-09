---
source-hash: 4861815642f39190c1d87fb62206d4b05c6eea3b5d2af97e4dcef2e6834f466c
sidebar_position: 5
sidebar_label: Planifier un itinéraire
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

Le planificateur d'itinéraire web OsmAnd vous permet de créer des itinéraires de navigation, de planifier des tracés et de gérer des fichiers locaux directement depuis votre navigateur. Cet outil web est utile pour créer des itinéraires de voyage détaillés que vous pouvez synchroniser avec votre application ou partager avec d'autres.


## Itinéraire de navigation {#navigation-route}

Pour créer un itinéraire de navigation, suivez ces étapes :

- **Cliquez avec le bouton droit** sur la carte pour ajouter des points de cheminement :

  - *Naviguer depuis*. Définissez le point de départ.
  - *Naviguer vers*. Définissez la destination.
  - *Naviguer via*. Ajoutez des points intermédiaires si nécessaire.

- Après avoir défini les points de début et de fin, l'itinéraire s'affiche sur la carte.

- Dans le bloc **Itinéraire** :

  - Déplacez les points de début et de fin si nécessaire.
  - Modifiez les points de cheminement et choisissez le type d'itinéraire souhaité (par exemple, voiture, vélo, marche).

  ![Créer un itinéraire web OsmAnd](@site/static/img/web/navigation.png)

- Sélectionnez le **profil d'itinéraire** approprié pour les différentes options de navigation.

  ![Créer un itinéraire web OsmAnd](@site/static/img/web/profile_type.png)

- Cliquez sur les cercles orange le long de l'itinéraire pour afficher les instructions de navigation détaillées.

  ![Créer un itinéraire web OsmAnd](@site/static/img/web/nav_instr.png)

- Pour partager l'itinéraire, copiez l'URL. Exemple : [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Créer un tracé et des fichiers locaux {#create-track-and-local-files}

L'outil [**Planifier un itinéraire**](../plan-route/create-route.md) d'OsmAnd Web vous permet de créer et de modifier des tracés de manière similaire à l'application mobile. Voici comment créer et gérer des tracés :


***Créer un nouvel itinéraire :***

- *Cliquez avec le bouton droit* sur la carte et sélectionnez **Créer un nouvel itinéraire**.
- Vous pouvez également utiliser le bouton **Créer un tracé** dans le menu *Local* (situé à droite avec les boutons *Crayon* et *Télécharger*).


***Gérer les tracés :***

- **Sélectionner le profil de navigation**. Choisissez un profil (par exemple, randonnée, conduite) pour des sections d'itinéraire spécifiques (*Nouveaux segments*) ou pour l'itinéraire entier (*Tous les segments*).
- **Ajouter des points de cheminement**. Cliquez sur la carte pour ajouter de nouveaux points.
- **Enregistrer l'itinéraire**. Enregistrez votre itinéraire pour une utilisation future.
- **Afficher les détails de l'itinéraire**. Accédez aux informations détaillées du tracé, y compris la longueur, la durée et le terrain.
  ![Créer un tracé web OsmAnd](@site/static/img/web/create_route.png)


***Importer et créer des tracés :***

- **Importer un tracé**. Vous pouvez télécharger n'importe quel fichier GPX dans la section **Local** en visitant [osmand.net/map](https://osmand.net/map).
- **Créer un tracé**. Créez manuellement un nouveau tracé en sélectionnant des points de cheminement.
  ![Créer un tracé web OsmAnd](@site/static/img/web/create_route_2.png)


***Actions et informations sur les tracés locaux :***

Le menu **Tracé local** propose trois panneaux d'édition : **Info**, **Tracé** et **Points de cheminement**.

**Panneau Info** :

- *Enregistrer dans le cloud*. Enregistrez votre tracé dans OsmAnd Cloud pour y accéder sur plusieurs appareils.
- *Ajouter une description*. Ajoutez des notes sur le tracé.
- *Renommer*. Modifiez le nom du tracé.
- *Recalculer*. Ajoutez ou mettez à jour les données d'altitude.
- *Altitude*. Affichez le profil d'altitude.
- *Graphique de vitesse*. Affichez les données de vitesse sur le tracé.
- *Graphique de pente*. Affichez les changements de pente le long de l'itinéraire.
- *Détails de la route*. Affichez des informations détaillées telles que le type de route, la surface et la pente.
- *Télécharger le fichier GPX*. Exportez le tracé au format GPX ([fonctionnalité Pro](../purchases/index.md)).
- *Fermer le tracé*. Fermez la vue d'édition du tracé.
- *Supprimer le tracé*. Supprimez définitivement le tracé.
  ![Créer un tracé web OsmAnd](@site/static/img/web/create_route_3.png)

**Panneau Tracé** :

- Affichez et modifiez les points du tracé.
- Réorganisez ou supprimez des points si nécessaire.

**Panneau Points de cheminement** :

- Affichez et gérez les points de cheminement du tracé.
- Activez ou désactivez la visibilité des points de cheminement sur la carte.
- Supprimez les points de cheminement individuellement si nécessaire.

**Panneau Virages** :

- Affichez des informations détaillées sur les virages le long du tracé.

  ![Créer un tracé web OsmAnd](@site/static/img/web/create_route_1.png)


***Fonctionnalités supplémentaires :***

- **Synchroniser avec l'application**. Enregistrez les itinéraires dans OsmAnd Cloud et accédez-y sur votre application mobile.
- **Profils d'itinéraire personnalisés**. Ajustez les profils pour s'adapter à différentes activités, telles que le cyclisme ou la randonnée.
- **Itinéraires partageables**. Copiez et partagez les URL d'itinéraire pour une planification collaborative.

> *Dernière mise à jour : janvier 2025*