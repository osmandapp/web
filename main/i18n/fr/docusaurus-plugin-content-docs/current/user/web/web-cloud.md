---
source-hash: a869782aa735dab23fcbaeec7b7c95203ee66ac9003a203ce92de965424802d9
sidebar_position: 2
sidebar_label:  Compte
title: Compte OsmAnd
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

La connexion avec un compte OsmAnd transforme le [Planificateur Web OsmAnd](https://osmand.net/map) d'un simple visualiseur de cartes en votre espace de travail personnel. Le même compte que vous utilisez dans l'application mobile connecte le site web à vos données et achats OsmAnd Cloud, afin que vous puissiez accéder à votre contenu sauvegardé et à vos abonnements en un seul endroit sur le web.


## Autorisation {#authorization}

### Inscription {#sign-up}

Pour accéder aux fonctionnalités d'OsmAnd Web, vous devez créer un compte. Utilisez le processus d'inscription :

- Allez sur le [**Portail de Cartes OsmAnd**](https://osmand.net/map).
- Ouvrez le menu **Compte**.
- Sélectionnez **Créer un nouveau compte**. La boîte de dialogue Créer un nouveau compte s'ouvre.
- Dans le champ **E-mail**, saisissez l'adresse e-mail que vous souhaitez utiliser pour votre compte OsmAnd et cliquez sur **Continuer**.
- Un code de vérification est envoyé à cette adresse e-mail. Vérifiez votre boîte de réception (et le dossier spam si nécessaire).
- Dans la boîte de dialogue suivante, saisissez le Code de vérification et cliquez sur **Continuer** pour confirmer votre e-mail. Si vous n'avez pas reçu le code, utilisez le lien **Je n'ai pas reçu de code de vérification** et suivez les instructions.

Après la vérification du code, votre compte web est créé et vous êtes connecté automatiquement.

![Web Sign Up](@site/static/img/web/web_sign_up.png) ![Web Sign Up](@site/static/img/web/web_ver_code.png)


### Connexion {#login}

Si vous avez déjà un compte OsmAnd, vous pouvez vous connecter sur le [**Portail de Cartes OsmAnd**](https://osmand.net/map) avec le même e-mail et mot de passe. Allez dans le menu **Compte** et choisissez l'option **Se connecter**. Dans la boîte de dialogue qui s'ouvre, saisissez l'adresse e-mail liée à votre compte OsmAnd, tapez votre mot de passe, et sélectionnez **Continuer**. Après une connexion réussie, le panneau Compte OsmAnd s'ouvre et vous pouvez travailler avec vos données, achats et paramètres.


## Gestion du compte {#managing-account}

### Mes données {#my-data}

Vous pouvez télécharger les sauvegardes qui ont été créées et synchronisées depuis votre appareil mobile via **OsmAnd Cloud**.  
Allez à : *Menu Général → Compte → Mes données (OsmAnd Cloud) → Tout télécharger*

Cette section affiche :

- Le nombre de fichiers stockés dans votre cloud.
- Le volume total de stockage utilisé.
- L'espace de stockage cloud disponible.

> 💡 Seules les sauvegardes créées sur des appareils où **OsmAnd Cloud** est activé apparaîtront ici.

Si vous souhaitez sauvegarder une copie de toutes vos données, utilisez **Tout télécharger**. Cela ouvre une boîte de dialogue où vous pouvez :

- Sélectionner les données à exporter (par exemple, *Mes lieux, Paramètres, Ressources, Cartes*),
- Choisir le format d'exportation (*ZIP ou OSF*).
- Voir une estimation de la taille et du temps de téléchargement.

Cliquez sur **Télécharger la sauvegarde** pour démarrer l'exportation et sauvegarder l'archive sur votre ordinateur.

![Web Account](@site/static/img/web/web_download_all.png)

### Paiements et achats {#payments-and-purchases}

Cette section affiche tous les produits et abonnements liés à votre compte OsmAnd. Pour l'ouvrir,  
Allez à : *Menu Général → Compte → Paiements et Achats*

Ici, vous pouvez voir une liste de tous les achats associés à votre e-mail :
- Plans gratuits et payants (tels qu'OsmAnd Start ou OsmAnd Pro).
- Produits uniques (par ex. Maps+ ou éditions spéciales).
- Abonnements qui se renouvellent mensuellement ou annuellement.

Pour chaque élément, la liste montre :
- Nom du produit et icône.
- Type – abonnement mensuel, abonnement annuel ou paiement unique.
- Statut – *Actif, Expiré ou Annulé*.
- Informations sur la date.

Si vous cliquez sur un produit dans la liste, la page de détails s'ouvre. Là, vous pouvez voir où le produit a été acheté (*Google Play, Apple App Store, Huawei AppGallery, Amazon* ou *OsmAnd Web*) et trouver un lien ou des instructions sur la façon de gérer ou d'annuler l'abonnement dans le magasin correspondant. Si le produit a été acheté sur OsmAnd Web (FastSpring), la page de détails affiche un lien **Gérer l'abonnement** qui ouvre le portail de gestion de compte FastSpring, où vous pouvez mettre à jour votre méthode de paiement, annuler ou réactiver l'abonnement, changer le plan, ou télécharger des factures.

S'il n'y a aucun achat lié à votre compte pour le moment, cette section affiche un état vide avec le message **Vous n'avez aucun achat** et un bouton **En savoir plus** qui mène à une page avec les plans OsmAnd disponibles et les options de mise à niveau.

Pour plus de détails sur l'utilisation de vos achats sur différentes plateformes, lisez l'article sur [l'accès multiplateforme](../purchases/cross.md).

![Web Account](@site/static/img/web/web_purchases.png)

### Synchronisation Cloud {#cloud-sync}

La Synchronisation Cloud vous permet d'accéder aux données que vous avez synchronisées vers OsmAnd Cloud directement sur le [Portail Web de Cartes](https://osmand.net/map/). Une fois connecté avec votre compte OsmAnd Start ou OsmAnd Pro, le site web affiche les Favoris, Pistes et fichiers de sauvegarde que vous avez précédemment synchronisés depuis votre application mobile. C'est une façon simple de visualiser votre contenu cloud sur un écran plus grand et de télécharger vos sauvegardes quand vous en avez besoin.

Ces éléments deviennent visibles dans le menu juste après vous être connecté sur le site web. Pour mettre à jour ces informations, vous devez synchroniser vos données depuis vos appareils en utilisant l'action [Synchroniser maintenant](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) dans l'application mobile.

La disponibilité de la Synchronisation Cloud dépend du type de votre compte :
- OsmAnd Start – synchronise [Favoris](../web/web-favorites.md) et les affiche sur le web.
- OsmAnd Pro – synchronise [Pistes](../web/web-tracks.md), Favoris, et [Sauvegardes](#my-data), et débloque l'accès complet au web aux données cloud.

![Web Track](@site/static/img/web/web_track_start.png) ![Web Track](@site/static/img/web/web_track_pro.png)

### OsmAnd Cloud {#osmand-cloud}

Lorsque vous êtes connecté, la section OsmAnd Cloud apparaît dans Menu → Paramètres et inclut Modifications et Corbeille.

L'option **Modifications** affiche une liste chronologique des fichiers stockés dans votre compte OsmAnd Cloud. Les éléments sont regroupés par mois et incluent le nom du fichier, le type de modification (par exemple, ajouté, modifié ou supprimé), l'heure de la dernière mise à jour et l'appareil qui l'a créée. Pour chaque entrée, vous pouvez ouvrir le menu à trois points et choisir *Télécharger* pour sauvegarder le fichier sélectionné sur votre ordinateur, ou *Supprimer*.

L'option **Corbeille** contient les fichiers qui ont été supprimés d'OsmAnd Cloud. La liste est également regroupée par mois et montre quand chaque fichier a été supprimé et depuis quel appareil. Utilisez le menu à trois points à côté d'un fichier pour *Télécharger* une copie, *Restaurer de la corbeille* (retourner le fichier à OsmAnd Cloud pour qu'il redevienne disponible dans vos données), ou *Supprimer immédiatement* pour le supprimer définitivement. Cela aide à prévenir la perte accidentelle de données tout en vous permettant de libérer de l'espace de stockage cloud lorsque vous êtes sûr qu'un fichier n'est plus nécessaire. Vous pouvez également vider tous les éléments supprimés en une fois en cliquant sur l'icône Corbeille dans l'en-tête du panneau Corbeille. Cela ouvre la boîte de dialogue **Vider la corbeille**, où vous confirmez la suppression pour supprimer définitivement tous les fichiers de la Corbeille.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)


## Dépannage {#troubleshooting}

### Réinitialiser le mot de passe {#reset-password}

Si vous ne vous souvenez pas de votre mot de passe, utilisez le lien **Je n'ai pas de mot de passe ou je l'ai oublié** dans la boîte de dialogue de connexion. Cela ouvre le panneau **Changer ou réinitialiser le mot de passe**. Saisissez l'adresse e-mail que vous avez utilisée pour créer votre compte et cliquez sur **Continuer**. Un message avec un code de vérification est envoyé à cet e-mail. Sur l'écran suivant, saisissez le code de vérification et votre nouveau mot de passe, puis sélectionnez **Continuer** pour confirmer. Lorsque le code est accepté, votre mot de passe est mis à jour et vous pouvez vous connecter à OsmAnd Web avec les nouveaux identifiants.

![Web Account](@site/static/img/web/web_password.png)

### Changer l'adresse e-mail {#change-email-address}

Pour mettre à jour votre adresse e-mail,
Allez à *Menu Général → Compte → E-mail → ⋮ → Changer l'e-mail*

La boîte de dialogue Changer l'e-mail apparaît. Un code de vérification est envoyé à l'adresse e-mail actuelle. Saisissez ce code dans le champ **Code de l'ancien e-mail**, spécifiez la nouvelle adresse dans **Nouvel e-mail**, puis sélectionnez **Suivant**. Pour des raisons de sécurité, un message de confirmation est envoyé à votre nouvelle adresse e-mail vous informant que l'e-mail du compte a été mis à jour.

![Web Account](@site/static/img/web/web_email_new.png)

### Déconnexion et suppression du compte {#logout-and-delete}

![Web Account](@site/static/img/web/web_logout_new.png)

Le panneau Compte OsmAnd contient des contrôles pour mettre fin à la session web actuelle et supprimer définitivement le compte.

Pour vous déconnecter, ouvrez Compte OsmAnd et utilisez le bouton **Déconnexion** dans le coin supérieur droit du panneau (icône avec une flèche sortant d'un carré). La sélection de Déconnexion ferme le panneau du compte et met fin à la session active sur le site web.

Pour supprimer un compte, sélectionnez **Supprimer le compte** en bas du panneau Compte OsmAnd. Une boîte de dialogue de confirmation apparaît avec le message *« Êtes-vous sûr de vouloir faire cela ? »* et une brève explication que toutes les données et détails du compte seront supprimés d'OsmAnd Cloud et que les appareils secondaires perdront l'accès aux fonctionnalités payantes. Un code de vérification est envoyé à l'adresse e-mail du compte. Saisissez le code dans le champ Code de l'e-mail et choisissez **SUPPRIMER CE COMPTE** pour compléter le processus. Cette opération est permanente et ne peut pas être annulée.

![Web Account](@site/static/img/web/web_delete.png)

<!--
## OsmAnd Pro and OsmAnd Start Sync {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** is a [cross-platform](../troubleshooting/setup.md#initial-setup) paid subscription. 
- **OsmAnd Start** is a [free OsmAnd Cloud registration](https://osmand.net/blog/start).

The cross-platform capability allows you to use OsmAnd Pro on all platforms *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. To do this you need to:

1. Subscribe to **OsmAnd Pro**. Read more about how to do this for [Android here](../purchases/android.md#how-to-buy), and for [iOS here](../purchases/ios.md#how-to-buy).
2. How to create **OsmAnd Start** account read more [here](https://osmand.net/blog/start#how-to-create-an-account).
3. Register your [Pro or Start account](/docs/user/personal/osmand-cloud/#cross-platform) on the OsmAnd server inside OsmAnd app.
4. The registered email will be your login to activate OsmAnd Pro on the web platform. At first, time needed to choose a password for future entering the web portal (please, use the instruction on the web portal).


- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)  

- Your data, such as tracks (OsmAnd Pro) and favorites(OsmAnd Pro and OsmAnd Start), will appear in the menu after you log in. They are available for display on the map. But you need [to sync this data](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) from your devices.

![View OsmAnd Web data](@site/static/img/web/web_data.png)  

- To *DOWNLOAD BACKUP* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. On the login field you can see files info (total files number, total files size, cloud storage used) and account info (subscription type, start time and expire time of your subscription).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)  

Choose needed files for downloading, `.zip` or `.osf` format of downloaded files and click *DOWNLOAD BACKUP* button:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)  

There is also a button to *logout* of the account.  

- *LOGOUT*, *DELETE YOUR ACCOUNT* or *Change email* you find on the login field too. For opening *DELETE YOUR ACCOUNT* or *Change email* you need to click *Dangerous area*.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)  


## Cloud data {#cloud-data}

[Tracks and Favorites](web-map.md#tracks).

## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->

## Articles associés {#related-articles}

- [Introduction](./web-overview.md)
- [Achats multiplateforme](../purchases/cross.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)