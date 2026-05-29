---
source-hash: 6e85a9c0cfb7a2e0e5b6f8f90f9b17a7da6b19a01478b0e05bd7a83438517602
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

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_1_new.png)

Après s'être inscrit à un [**OsmAnd Pro**](../personal/osmand-cloud.md#login) et pour [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), vos Favoris dans le Planificateur Web sont organisés en dossiers. Chaque dossier regroupe les lieux enregistrés et propose un ensemble d'actions disponibles depuis le menu des Favoris. 
Les actions suivantes sont disponibles :

- *Afficher sur la carte* - afficher les points de favoris du dossier choisi sur la carte.
- *Épingler le dossier* - épingler un dossier en haut de la liste des Favoris pour un accès rapide. Les dossiers épinglés sont séparés des autres dossiers. Pour retirer un dossier de la section supérieure, sélectionnez *Désépingler le dossier*. Le dossier Personnel est épinglé par défaut.
- *Renommer* - nom et description du dossier de favoris.
- *Partager* - ouvre les options de partage. Vous pouvez choisir qui peut accéder à ce dossier.
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

La vue Détails fournit les informations associées au lieu sélectionné et dépend des données disponibles pour ce favori spécifique. Au minimum, elle inclut l'emplacement sur la carte et ses coordonnées géographiques. Pour les lieux liés à des objets OpenStreetMap ou à des sources enrichies, des métadonnées supplémentaires peuvent être affichées, telles que des noms, des catégories, des identifiants ou des liens de référence (par exemple, Wikipedia ou des liens Wikidata). 

![Web Favorites Details](@site/static/img/web/favorites_details.png)


## Actions des Favoris {#favorites-actions}

[Pour ajouter](../personal/favorites.md#manage-favorites) un nouveau point de favori, cliquez avec le bouton droit sur l'écran. 

Pour modifier un favori existant, cliquez sur le point de favori soit directement sur la carte, soit sélectionnez-le depuis un dossier de favoris. Cela ouvre le panneau Détails, où l'action Modifier est disponible. La modification peut également être démarrée depuis le menu à trois points (⋮) à côté du favori dans la liste des Favoris.

Le panneau de modification d'un favori permet de modifier les principales propriétés d'un favori, y compris son nom, son adresse, sa description, son dossier, son icône, sa couleur et sa forme. L'apparence sélectionnée est prévisualisée à la fois dans le panneau de modification et directement sur la carte.

### Modifier les Favoris {#edit-favorites}

Le champ **Adresse** prend en charge la détection automatique d'adresse basée sur l'emplacement sélectionné sur la carte. Le champ peut apparaître dans plusieurs états :

- Recherche en cours... — affiché pendant que l'adresse est déterminée automatiquement.
- Champ vide — affiché après avoir effacé l'adresse. Dans cet état, le bouton de localisation peut être utilisé pour détecter à nouveau l'adresse automatiquement.
- Champ rempli — affiche soit l'adresse détectée automatiquement, soit le texte saisi manuellement.

Le champ d'adresse inclut également des actions rapides pour effacer ou restaurer l'adresse détectée.

La section **Description** permet d'ajouter des notes ou des informations supplémentaires au favori. La sélection de Ajouter des notes ouvre l'éditeur de description dans un panneau secondaire. Si une description a déjà été ajoutée, un court aperçu est affiché dans le panneau principal et est limité à deux lignes de texte. L'éditeur de description prend en charge le formatage de texte enrichi et conserve automatiquement les modifications lors du retour au panneau précédent.

Les favoris peuvent être organisés en dossiers pour une gestion plus facile et un accès rapide. La sélection de l'élément **Dossier** ouvre un panneau secondaire où les dossiers disponibles peuvent être sélectionnés. Le dossier précédemment utilisé est sélectionné automatiquement par défaut. Chaque dossier affiche également le nombre de points de favoris qu'il contient.

De nouveaux dossiers peuvent être créés directement depuis le panneau de sélection des dossiers. La sélection du bouton Ajouter un dossier ouvre une boîte de dialogue dans laquelle vous pouvez saisir le nom du dossier et choisir son emplacement dans la liste des Favoris.

La boîte de dialogue inclut également une section Avancé, où les paramètres d'apparence par défaut du dossier peuvent être configurés. Ces paramètres incluent la couleur, l'icône et la forme par défaut qui seront automatiquement appliquées aux points de favoris ajoutés à ce dossier.

![Web Edit Folder](@site/static/img/web/edit_folder.png)

### Apparence {#appearance}

La section **Apparence** permet de personnaliser l'affichage du favori sur la carte. Les propriétés suivantes sont disponibles : icône, couleur, forme et icône. 

La sélection de **Icône** ouvre un panneau secondaire avec des groupes d'icônes classés par catégories.

- Les icônes sont regroupées par catégories.
- Les icônes récemment utilisées sont affichées en premier.
- L'icône actuellement sélectionnée est mise en surbrillance.
- L'aperçu utilise la forme et la couleur sélectionnées.

La sélection de **Couleur** ouvre le panneau de la palette de couleurs.

- La palette contient des couleurs prédéfinies et définies par l'utilisateur.
- Des couleurs personnalisées peuvent être ajoutées à l'aide du sélecteur de couleurs.
- Les couleurs peuvent être modifiées, dupliquées ou supprimées via le menu contextuel.
- Les nouvelles couleurs ajoutées sont enregistrées dans la palette utilisateur et restent disponibles ultérieurement.

L'option **Forme** définit la forme d'arrière-plan utilisée pour le marqueur de favori. Les formes suivantes sont disponibles : cercle, carré et octogone.

L'aperçu de l'apparence est mis à jour immédiatement à la fois dans le panneau de modification et sur la carte lors du changement de l'icône, de la couleur ou de la forme.

![Web Edit Appearance](@site/static/img/web/edit_icon.png)

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