---
source-hash: ef13b994168cf04dcf98784cf4ef75aea6eb57a3e4db536a0fa48e3617173008
sidebar_position: 6
sidebar_label: Favorites
title: Favorites
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

Les Favoris dans le Planificateur Web vous permettent d'enregistrer et de gérer des lieux importants directement sur la carte. Ils peuvent être utilisés pour marquer des emplacements auxquels vous souhaitez accéder rapidement, les organiser en dossiers et les réutiliser pour la navigation ou la planification d'itinéraires. L'interface web fournit des outils pratiques pour visualiser, modifier et travailler avec les favoris tout en explorant la carte, toutes les mises à jour étant synchronisées de manière fluide dans votre [OsmAnd Cloud](../personal/osmand-cloud.md).


## Gérer les Favoris {#manage-favorites}

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_new.png)

Après avoir enregistré un [**OsmAnd Pro**](../personal/osmand-cloud.md#login) et pour [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), vos Favoris dans le Planificateur Web sont organisés en dossiers. Chaque dossier regroupe les lieux enregistrés et propose un ensemble d'actions disponibles depuis le menu des Favoris. 
Les actions suivantes sont disponibles :

- *Afficher sur la carte* - afficher les points de favoris du dossier choisi sur la carte.
- *Renommer* - nom et description du dossier de favoris.
- *Partager* - ouvre les options de partage. Vous pouvez choisir qui peut accéder à ce dossier :
- *Télécharger* - télécharger le dossier de favoris choisi.
- *Supprimer* - supprimer le dossier de favoris choisi.

### Partager {#share}

La sélection de **Partager** ouvre l'écran de partage, où l'accès à un dossier de Favoris peut être configuré. L'un des modes d'accès suivants peut être sélectionné :
- *Privé*. Seul vous pouvez visualiser le dossier. Passer en mode Privé révoque l'accès pour tous les utilisateurs précédemment approuvés. Une boîte de dialogue de confirmation s'affiche avant que le changement ne soit appliqué.
- *Demande uniquement*. Toute personne disposant du lien peut demander l'accès. Les demandes apparaissent dans la liste En attente, où elles peuvent être approuvées, refusées ou bloquées.
- *Tout le monde*. Toute personne disposant du lien peut visualiser le dossier immédiatement, sans approbation.  
Selon le mode d'accès sélectionné, le bouton **Copier le lien** devient disponible. Le lien peut être partagé pour permettre la visualisation ou pour demander l'accès.

L'écran de partage inclut trois listes d'utilisateurs :
- Approuvés — utilisateurs qui ont actuellement accès au dossier.
- En attente — utilisateurs qui ont demandé l'accès et attendent une approbation ou un refus.
- Bloqués — utilisateurs qui ne sont pas autorisés à accéder ou à demander l'accès.  
Chaque entrée d'utilisateur inclut un menu qui permet de modifier leur statut ou de supprimer l'accès.

Lors de la configuration d'accès, les boîtes de dialogue suivantes peuvent apparaître :
- *Changer l'accès*. Affichée lors du passage du dossier en mode Privé. La boîte de dialogue avertit que tous les accès utilisateur existants seront révoqués avant de confirmer le changement.
- *Demandes d'accès*. Affichée lors de la gestion des utilisateurs dans la liste En attente, permettant d'approuver ou de refuser les demandes d'accès.

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_share.png) ![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_share_2.png)


## Détails des Favoris {#favorites-details} 

La sélection d'un favori ouvre le panneau **Détails**. Ce panneau apparaît lorsque vous cliquez sur un favori directement sur la carte ou que vous le sélectionnez depuis un dossier de favoris.

La vue Détails fournit les informations associées au lieu sélectionné et dépend des données disponibles pour ce favori spécifique. Au minimum, elle inclut l'emplacement sur la carte et ses coordonnées géographiques. Pour les lieux liés à des objets OpenStreetMap ou à des sources enrichies, des métadonnées supplémentaires peuvent être affichées, telles que des noms, des catégories, des identifiants ou des liens de référence (par exemple, [Wikipedia](../plugins/wikipedia.md) ou des liens Wikidata). 

![Web Favorites Details](@site/static/img/web/favorites_details.png)


## Actions des Favoris {#favorites-actions}

### Ajouter / Modifier un Favori {#add--edit-favorite}

[Pour ajouter](../personal/favorites.md#manage-favorites) un nouveau point de favori, cliquez avec le bouton droit sur l'écran. 

Pour modifier un favori existant, cliquez sur le point de favori soit directement sur la carte, soit sélectionnez-le depuis un dossier de favoris. Cela ouvre le panneau Détails, où l'action Modifier est disponible. La modification peut également être démarrée depuis le menu à trois points (⋮) à côté du favori dans la liste des Favoris.

L'interface de modification vous permet de modifier les propriétés principales du favori, telles que son nom, son icône, sa couleur et sa description. La mise en page et les champs disponibles sont cohérents avec l'expérience de modification dans l'[application mobile OsmAnd](../personal/favorites.md#create), offrant un flux de travail familier sur toutes les plateformes.

![OsmAnd Web Favorites add](@site/static/img/web/web_favorites_add.png)


### Autres Actions {#other-actions}

En plus de la modification, chaque favori propose plusieurs autres actions qui peuvent être accessibles depuis le panneau Détails ou depuis le menu à trois points (⋮) dans la liste des Favoris :
- *Supprimer* - supprime définitivement le favori sélectionné. Cette action est disponible à la fois depuis le panneau Détails et depuis le menu à trois points. La suppression affecte le favori sur tous les appareils après synchronisation.
- *Partager* - cette action vous permet de partager un lien direct vers le lieu.
- *Itinéraire depuis* - définit le favori sélectionné comme point de départ pour la planification d'itinéraire. Le panneau Itinéraire s'ouvre automatiquement, vous permettant de choisir une destination et un profil de navigation.
- *Navigation* - définit le favori sélectionné comme point de destination. 


## Articles Connexes {#related-articles}

- [Favoris](../personal/favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Menu contextuel de la carte](../map/map-context-menu.md)
- [Wikipedia](../plugins/wikipedia.md)