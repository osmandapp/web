---
source-hash: a1d35656711a4d2803b5867ef4417c01911d4220b4edb0e5bbacbfaf0c57d72e
sidebar_position: 11
title:  OsmAnd Cloud
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import Poll from '@site/src/components/home/Poll';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Vue d'ensemble {#overview}

:::tip subscribe  
&nbsp;<ProFeature/> Pour accéder à toutes les fonctionnalités d'OsmAnd Cloud, abonnez-vous à **OsmAnd Pro** pour [Android](../purchases/android.md#osmand-pro) ou [iOS](../purchases/ios.md#osmand-pro).  
:::  

:::note cross-platform  
OsmAnd Cloud est un service de stockage cloud indépendant et n'est *pas lié* à une version spécifique de la plateforme Android, iOS ou web.  
:::  

OsmAnd Cloud vous permet de **stocker et de synchroniser les paramètres personnels et les données d'application** sur plusieurs appareils. Vous pouvez accéder à ces données sur n'importe quel appareil sur lequel OsmAnd est installé, y compris l'application de bureau. Toutes les modifications apportées dans l'application peuvent être **synchronisées entre les plateformes**, garantissant un accès transparent à vos données enregistrées.


## Multiplateforme {#cross-platform}

OsmAnd Cloud vous permet de sauvegarder, restaurer et synchroniser vos données sur Android, iOS et la [version web](../web/index.md). Grâce aux capacités multiplateformes, vous pouvez transférer les **paramètres de profil**, les **traces**, les **favoris**, les **modifications/notes OSM**, et plus encore entre les appareils. De plus, la **version web** vous permet de planifier des itinéraires et de les enregistrer pour une utilisation ultérieure sur les appareils connectés.  

OsmAnd prend en charge l'**utilisation multiplateforme** sur *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))* avec les étapes suivantes :

1. **Enregistrez un [compte](#login) sur OsmAnd Cloud** :
 
    1.1 **Abonnez-vous à OsmAnd Pro pour un accès Cloud complet.**  
   En savoir plus sur l'achat pour [Android](../purchases/android.md#how-to-buy) ou [iOS](../purchases/ios.md#how-to-buy).

    2.1 **Utilisez le plan gratuit OsmAnd Start** pour les sauvegardes cloud des favoris, des paramètres et des modifications/notes OSM.  
   La limite de stockage gratuite est de **5 Mo**.

2. **Utilisez l'adresse e-mail enregistrée** comme identifiant pour activer [OsmAnd Pro](../purchases/cross.md), [OsmAnd Maps+](../purchases/cross.md) ou OsmAnd Start sur d'autres plateformes.

:::note  
**OsmAnd Pro** est un abonnement multiplateforme qui inclut toutes les fonctionnalités d'OsmAnd. Vous pouvez l'acheter dans un magasin (par exemple, Google Play, Huawei AppGallery) et l'utiliser également sur **iOS**. Votre **[adresse e-mail enregistrée](#login)** est votre identifiant pour activer OsmAnd Pro [sur toutes les plateformes](../purchases/cross.md). 
:::


## Connexion {#login}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,register_opr_create_new_account"/> / <Translate android="true" ids="register_opr_have_account"/>*  

![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_1.png)  ![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_17.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud"/> → <Translate ios="true" ids="shared_string_get"/> / <Translate ios="true" ids="register_opr_have_account"/>*

![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_first_screen_ios.png)  ![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_2.png)

</TabItem>

</Tabs>

Pour sauvegarder et restaurer des données, vous devez être connecté à votre compte OsmAnd Cloud.  

- Pour vous inscrire ou vous connecter, vous avez besoin d'un abonnement actif [OsmAnd Pro](#cross-platform) ou [OsmAnd Start](#osmand-start). Vous pouvez vérifier l'état de votre abonnement dans l'application OsmAnd :  
  *Menu → Paramètres → Achats*.

- Votre compte Cloud **doit être enregistré sur l'appareil où l'achat a été effectué à l'origine**.

- *Processus de connexion* :  
  - Entrez votre adresse e-mail et appuyez sur **Continuer**.  
  - Un code de vérification sera envoyé à votre adresse e-mail pour confirmation.
  - Lisez [ici](../troubleshooting/purchases_payments.md#verification-code-for-osmand-cloud-not-received) ce qu'il faut faire si vous ne recevez pas de code de vérification.  
  - Utilisez ce compte pour vous connecter à OsmAnd Cloud sur d'autres appareils.

- Si vous avez un abonnement **OsmAnd Pro**, vous pouvez continuer à accéder à votre compte OsmAnd Cloud pendant **une année supplémentaire** après l'expiration de votre abonnement.  

:::tip Dépannage des problèmes de connexion
Si vous rencontrez des problèmes lors de l'inscription :

- Assurez-vous de vous inscrire sur le **même appareil** où l'achat a été effectué.  
- Vérifiez votre **connexion Internet** avant de réessayer.

:::


## OsmAnd Start {#osmand-start}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,purchases"/>*  

![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_1_andr.png)   ![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,purchases"/>*

![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_1_ios.png)   ![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_2_ios.png)  

</TabItem>

</Tabs>  

Le plan **OsmAnd Start** offre un accès gratuit à **OsmAnd Cloud** avec des fonctionnalités de base limitées et 5 Mo de stockage pour stocker et synchroniser vos **Favoris, Paramètres et modifications et notes OpenStreetMap (OSM)**. Ce plan est disponible pour les utilisateurs d'[OsmAnd Free ou Maps+](../purchases/index.md).  

Fonctionnalités incluses dans OsmAnd Start :

- [Sauvegarde gratuite des favoris](../personal/favorites.md#free-cloud-backup) – Stockez les lieux et les itinéraires importants dans vos favoris et accédez-y depuis n'importe quel appareil connecté à OsmAnd Cloud.  
- [Sauvegarde gratuite des paramètres](../personal/profiles.md#free-cloud-backup) – Enregistrez les paramètres de votre application OsmAnd sur OsmAnd Cloud et restaurez-les sur d'autres appareils pour une expérience transparente.  
- [Modifications/Notes OSM](../plugins/osm-editing.md) – Contribuez à OpenStreetMap en créant et en modifiant des données cartographiques, en ajoutant des notes et en enregistrant les modifications directement sur OsmAnd Cloud.

### Comment activer OsmAnd Start {#how-to-activate-osmand-start}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

**Vous avez besoin d'un compte OsmAnd Cloud pour utiliser OsmAnd Start**.

Pour utiliser OsmAnd Start, suivez ces étapes :

- **Inscrivez-vous pour un compte OsmAnd Cloud** - Voir la section [Connexion](#login) pour les instructions.
- Ouvrez *Menu → Paramètres → Achats*.
- Sélectionnez **OsmAnd Start** parmi les options disponibles.
- **Créez une sauvegarde** pour commencer à stocker vos données dans OsmAnd Cloud.

:::note Restrictions d'abonnement
Si vous avez déjà un abonnement **OsmAnd Pro** ou un **compte OsmAnd Cloud actif**, le plan **OsmAnd Start** ne sera pas disponible.
:::


## Dernière synchronisation {#last-sync}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud"/>*  

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_16.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_8-1.png)  

</TabItem>

</Tabs>  

**Dernière synchronisation** est un menu déroulant qui indique depuis combien de temps les données ont été synchronisées pour la dernière fois entre cet appareil et le cloud.

- *Modifications locales*. Affiche le nombre total de modifications locales non téléchargées sur le cloud.
- *Modifications cloud*. Le nombre total de modifications téléchargées sur le cloud depuis d'autres appareils depuis la dernière synchronisation.
- *Conflits*. Le nombre total d'incohérences entre les modifications locales et cloud.
- *Synchroniser maintenant*. Sélectionnez cette option pour synchroniser toutes les sections de données sélectionnées dans le menu [paramètres](#settings) que vous avez modifiées sur cet appareil et dans le cloud.  

**Synchroniser maintenant** combine les boutons *Tout télécharger* et *Tout télécharger* dans le menu Modifications, dans les sections [Local et Cloud](#local-and-cloud). Les **conflits** ne sont pas synchronisés de cette manière.

<!--
#### Syncing GPX Collections {#syncing-gpx-collections}

OsmAnd supports grouping GPX tracks into **collections**, which allows you to organize related tracks under a single label.

When using **OsmAnd Cloud**, GPX collections are:

- Backed up along with your personal data.
- Synchronized across devices.
- Restored with the same **collection structure** (including the name and all associated tracks).

> *This ensures that your route organization is preserved, even after reinstalling the app or switching to a new device.*

To use this feature:

1. Create or assign tracks to a collection via *Menu → My Places → Tracks*.
2. Go to *Menu → Settings → OsmAnd Cloud → Back up data* and enable synchronization.
3. On another device, sign in with the same OsmAnd Cloud account and restore the data.
-->

## Corbeille {#trash}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,help_article_personal_storage_name,shared_string_trash"/>*

![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_1_andr.png)  ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_trash"/>*

![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/trash_ios.png) ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/trash_2_ios.png)

</TabItem>

</Tabs>  

La fonctionnalité **Corbeille** vous permet de visualiser et de gérer les fichiers qui ont été supprimés d'OsmAnd Cloud. Elle est conçue pour éviter la suppression accidentelle de fichiers et la perte irréversible de vos données.

- **Afficher les fichiers**. *Corbeille* liste tous les fichiers précédemment supprimés du dossier *Modifications cloud*. Tous les fichiers contiennent des informations sur la date et l'heure de leur suppression. Ils sont regroupés par mois et triés par ordre des fichiers les plus récemment supprimés aux fichiers les plus anciens restant dans la Corbeille.
- **Vider la corbeille**.  

    ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_3_andr.png)  

    Pour libérer de l'espace de tous les fichiers supprimés du Cloud, vous pouvez utiliser la fonctionnalité *Vider la corbeille*. Elle est disponible dans le *menu à trois points* en haut à droite de l'écran Corbeille. Les fichiers sont supprimés définitivement, sans possibilité de les restaurer.

- **Gestion des fichiers séparés**.  

    ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_4_andr.png)  

    - *<Translate ios="true" ids="restore_from_trash"/>*. Avec cette fonctionnalité, vous pouvez restaurer des fichiers sur OsmAnd Cloud. Après avoir appuyé, le fichier sélectionné est déplacé de la Corbeille dans la section *Modifications* vers le dossier *Cloud*.
    - *<Translate ios="true" ids="download_to_device"/>*. Cette fonctionnalité vous permet de télécharger un fichier sur l'appareil. Si le fichier sélectionné portant le même nom est présent dans le dossier, la boîte de dialogue *Le fichier existe déjà* s'affiche, dans laquelle vous pouvez sélectionner une option d'action : *Remplacer* ou *Conserver les deux*.
    - *<Translate ios="true" ids="shared_string_delete_immediately"/>*. Cette fonctionnalité vous permet de supprimer définitivement le fichier sélectionné sans pouvoir le restaurer. Soyez prudent lorsque vous utilisez cette fonctionnalité car l'opération est irréversible.


## Paramètres {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/deletion_option.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_3-2.png)  

</TabItem>

</Tabs>

Cette section permet de modifier et de gérer votre OsmAnd Cloud.  


### Sélectionner les données à sauvegarder {#select-data-to-back-up}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_3.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_10.png)  

</TabItem>

</Tabs>

Dans ce menu, vous pouvez sélectionner les données et les dossiers à télécharger sur le Cloud :

1. **Paramètres**. Cet onglet inclut tous vos paramètres, tels que les préférences générales, les profils spécifiques, les actions rapides, les POI et les paramètres d'évitement de route.

2. **Mes lieux**. Cet onglet liste les données du [menu Mes lieux](../personal/myplaces), y compris les favoris, les traces, les notes OSM, les marqueurs et d'autres éléments.

3. **Ressources**. Ici, vous pouvez choisir de sauvegarder des ressources telles que les favoris, les informations de routage, les invites vocales et des éléments supplémentaires.

Toutes les [cartes](../start-with/download-maps.md) sont stockées sur l'appareil sur lequel elles ont été précédemment téléchargées. OsmAnd Cloud ne stocke que des informations sur les cartes que vous possédez et la date de leur dernière modification.


### Gérer le stockage {#manage-storage}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_version_history"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_19-1.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,manage_storage"/>*

![Backup data screen iOS](@site/static/img/personal/osmand-cloud/cloud_ios_13.png)  

</TabItem>

</Tabs>  

La section du menu **<Translate android="true" ids="backup_version_history"/>** (Android) / **<Translate ios="true" ids="manage_storage"/>** (iOS) affiche des informations sur la quantité de mémoire utilisée sur les 3,15 gigaoctets dans *Paramètres*, *Mes lieux* et *Ressources*. Vous pouvez supprimer les modifications de types de données séparés d'OsmAnd Cloud, mais dans ce cas, l'action ne peut pas être annulée.  


### Compte {#account}

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_9-1.png)

Cette section contient des informations sur le compte connecté à OsmAnd Cloud et inclut un bouton de déconnexion. Pour sauvegarder ou restaurer des données, vous devrez vous reconnecter.


### Option de suppression {#deletion-option}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_danger_zone"/>*

![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_8.png)   ![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_7.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_danger_zone"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_11.png)   ![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_12.png)

</TabItem>

</Tabs>  

Les actions que vous pouvez effectuer dans la section **Zone de danger** du menu Paramètres sont irréversibles et nécessitent donc une attention particulière.

1. **Supprimer toutes mes données**. Cette option vous permet de supprimer toutes les données précédemment téléchargées sur OsmAnd Cloud, y compris l'historique complet des versions. Veuillez noter qu'une fois supprimées, ces données ne peuvent pas être restaurées.

2. **Supprimer les anciennes versions**. Cette option vous permet de supprimer l'historique des modifications des données précédemment téléchargées. La version actuelle des données sera conservée sur le serveur, mais vous ne pourrez pas revenir aux versions précédentes.

3. **Supprimer le compte**. Pour supprimer un compte, vous devez passer par un processus de vérification. Un mot de passe à usage unique pour confirmation sera envoyé à votre adresse e-mail enregistrée sur OsmAnd Cloud.
    - Toutes les données d'OsmAnd Cloud seront supprimées. Les données sur l'appareil restent intactes.
    - Votre compte et tous les détails du compte seront supprimés.
    - Les appareils secondaires seront déconnectés d'OsmAnd Cloud et perdront l'accès aux fonctionnalités payantes.  

    ![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_deletion_2_andr.png)


## Liste des modifications {#list-of-changes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_11.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_9-1.png)  

</TabItem>

</Tabs>  

Dans la section [Dernière synchronisation](#last-sync) du menu déroulant, appuyez sur n'importe quel élément pour ouvrir la section Modifications. Cette section contient trois onglets affichant toutes les modifications disponibles pour l'édition. Si la liste est vide, aucune modification n'est survenue depuis la dernière synchronisation.

- Chaque élément de la liste **Modifications** inclut la **date et l'heure exacte** de la dernière synchronisation, ainsi que des options pour télécharger ou télécharger instantanément la version correspondante.

- **Le téléchargement des modifications depuis le stockage cloud écrasera les modifications locales**. De même, le téléchargement de données locales supprime les modifications correspondantes de la version cloud.

- Dans chaque onglet, les données sont **triées par type et par ordre alphabétique** pour vous aider à trouver rapidement des éléments spécifiques, en particulier lorsque vous gérez plusieurs fichiers dans OsmAnd Cloud.


### Local et Cloud {#local-and-cloud}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,download_tab_local"/> / <Translate android="true" ids="shared_string_cloud"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,download_tab_local"/> / <Translate ios="true" ids="shared_string_cloud"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_6.png)  

</TabItem>

</Tabs>

- **Local** - Vous pouvez synchroniser toutes les modifications locales qui ne sont pas encore dans le cloud en appuyant sur **Tout télécharger**. Alternativement, vous pouvez télécharger des modifications spécifiques en les sélectionnant dans la liste et en choisissant **Télécharger la version locale**.  

    Les modifications qui sont téléchargées avec succès sur le cloud sont automatiquement supprimées de l'onglet *Modifications → Local* après une période définie.  

- **Cloud** - L'onglet **Cloud** affiche une liste des modifications disponibles pour le téléchargement depuis le stockage cloud. Vous pouvez télécharger toutes les modifications en une seule fois à l'aide du bouton en bas de l'écran ou les télécharger individuellement.  


### Conflits {#conflicts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,cloud_conflicts"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_13-2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,cloud_conflicts"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_7.png)  

</TabItem>

</Tabs>

Un **conflit** se produit lorsque la **version locale** et la **version cloud** d'un fichier ne correspondent pas.  

- Vous pouvez soit **remplacer la version cloud** par les modifications locales, soit **télécharger la version cloud** sur votre appareil.

- Lorsqu'un conflit est résolu, il est automatiquement supprimé de la liste. Le traitement ne prend généralement que quelques instants.

- Appuyer sur un fichier dans le dossier **Conflits** affiche les détails des versions **Locale** et **Cloud**, y compris les heures de dernière modification et de téléchargement.

- Vous pouvez choisir l'une des actions suivantes :  
  - **Télécharger la version locale** – Remplace la version cloud par le fichier local.  
  - **Télécharger la version cloud** – Remplace le fichier local par la version cloud.


<!--
## Action Guides {#action-guides}

- Restore your data after purchases expire.
- It is absolutely crucial that your Cloud account be registered on the device where the purchase was originally made.
- Access for one more year after the subscription ends.

:::tip
If you have problems with the registration of your account:

- Check if you are registering on the device on which the purchase was made.
- You need to have an active Internet connection.

:::  
-->

## Articles connexes {#related-articles}

- [Achats Android](../purchases/android.md)
- [Achats iOS](../purchases/ios.md)
- [Achats multiplateformes](../purchases/cross.md)
- [Cartes et ressources](../personal/maps-resources.md)

> *Dernière mise à jour : mai 2025*