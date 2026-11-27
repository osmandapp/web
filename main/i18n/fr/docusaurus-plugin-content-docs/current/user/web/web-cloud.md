---
source-hash: e69343f9eb21e770166c3f64840279d4909964e16e57f6ff88c67cf26d0d4397
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
- Dans la boîte de dialogue suivante, saisissez le Code de vérification et cliquez sur **Continuer** pour confirmer votre e-mail. Si vous n'avez pas reçu le code, utilisez le lien **Je n'ai pas reçu le code de vérification** et suivez les instructions.

Après la vérification du code, votre compte web est créé et vous êtes connecté automatiquement.

![Inscription web](@site/static/img/web/web_sign_up.png) ![Inscription web](@site/static/img/web/web_ver_code.png)


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

![Compte web](@site/static/img/web/web_download_all.png)

### Paiements et achats {#payments-and-purchases}

Cette section affiche tous les produits et abonnements liés à votre compte OsmAnd. Pour l'ouvrir,  
Allez à : *Menu Général → Compte → Paiements et achats*

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

![Compte web](@site/static/img/web/web_purchases.png)

### Synchronisation Cloud {#cloud-sync}

La Synchronisation Cloud vous permet d'accéder aux données que vous avez synchronisées vers OsmAnd Cloud directement sur le [Portail Web de Cartes](https://osmand.net/map/). Une fois connecté avec votre compte OsmAnd Start ou OsmAnd Pro, le site web affiche les Favoris, Pistes et fichiers de sauvegarde que vous avez précédemment synchronisés depuis votre application mobile. C'est une façon simple de visualiser votre contenu cloud sur un écran plus grand et de télécharger vos sauvegardes quand vous en avez besoin.

Ces éléments deviennent visibles dans le menu juste après vous être connecté sur le site web. Pour mettre à jour ces informations, vous devez synchroniser vos données depuis vos appareils en utilisant l'action [Synchroniser maintenant](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) dans l'application mobile.

La disponibilité de la Synchronisation Cloud dépend du type de votre compte :
- [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) – synchronise [Favoris](../web/web-favorites.md) et les affiche sur le web.
- OsmAnd Pro – synchronise [Pistes](../web/web-tracks.md), Favoris, et [Sauvegardes](#my-data), et débloque l'accès complet au web aux données cloud.

![Trace web](@site/static/img/web/web_track_start.png) ![Trace web](@site/static/img/web/web_track_pro.png)

### OsmAnd Cloud {#osmand-cloud}

Lorsque vous êtes connecté, la section OsmAnd Cloud apparaît dans Menu → Paramètres et inclut Modifications et Corbeille.

L'option **Modifications** affiche une liste chronologique des fichiers stockés dans votre compte OsmAnd Cloud. Les éléments sont regroupés par mois et incluent le nom du fichier, le type de modification (par exemple, ajouté, modifié ou supprimé), l'heure de la dernière mise à jour et l'appareil qui l'a créée. Pour chaque entrée, vous pouvez ouvrir le menu à trois points et choisir *Télécharger* pour sauvegarder le fichier sélectionné sur votre ordinateur, ou *Supprimer*.

L'option **Corbeille** contient les fichiers qui ont été supprimés d'OsmAnd Cloud. La liste est également regroupée par mois et montre quand chaque fichier a été supprimé et depuis quel appareil. Utilisez le menu à trois points à côté d'un fichier pour *Télécharger* une copie, *Restaurer de la corbeille* (retourner le fichier à OsmAnd Cloud pour qu'il redevienne disponible dans vos données), ou *Supprimer immédiatement* pour le supprimer définitivement. Cela aide à prévenir la perte accidentelle de données tout en vous permettant de libérer de l'espace de stockage cloud lorsque vous êtes sûr qu'un fichier n'est plus nécessaire. Vous pouvez également vider tous les éléments supprimés en une fois en cliquant sur l'icône Corbeille dans l'en-tête du panneau Corbeille. Cela ouvre la boîte de dialogue **Vider la corbeille**, où vous confirmez la suppression pour supprimer définitivement tous les fichiers de la Corbeille.

![Cloud web](@site/static/img/web/web_changes.png) ![Cloud web](@site/static/img/web/web_trash.png)

### Applications connectées {#connected-apps}

La section **Applications connectées** vous permet de lier des services externes à votre compte OsmAnd. Actuellement, elle prend en charge l'intégration avec [Garmin Connect™](https://connect.garmin.com/app/), qui permet la synchronisation automatique des activités Garmin. Pour l'ouvrir, allez à : *Carte Web OsmAnd → Compte → Applications connectées*.

L'intégration Garmin Connect est disponible uniquement pour les utilisateurs d'[OsmAnd Pro](https://osmand.net/docs/user/purchases/). Si vous n'avez pas d'abonnement Pro actif, la sélection de l'élément Garmin Connect ouvre la page Tarification.

Pour connecter votre compte Garmin Connect™, cliquez sur **Se connecter**. Vous serez redirigé vers la page d'autorisation Garmin, où vous devrez vous connecter et accorder l'accès à vos données Garmin Connect™. Pendant l'autorisation, vous pouvez activer la synchronisation des activités récentes pour importer des données des 30 derniers jours. Les activités datant de plus de 30 jours ne peuvent pas être importées automatiquement.

Après la connexion, OsmAnd crée un dossier Garmin Connect dédié dans la [section Pistes](./web-tracks.md) et commence à importer automatiquement les activités. Les nouvelles activités enregistrées dans Garmin Connect™ sont ajoutées à ce dossier sans importation manuelle. Le dossier est également synchronisé avec les applications mobiles OsmAnd lorsque [OsmAnd Cloud](../personal/osmand-cloud.md) est activé.

Le menu Garmin Connect contient deux sections : **Mes données** et **Paramètres**. Dans Mes données, vous pouvez voir le nombre d'activités synchronisées, ouvrir la dernière activité récupérée ou ouvrir la page Activités Garmin Connect™ à l'aide du bouton **Voir sur Garmin Connect™**. Dans Paramètres, vous pouvez configurer les types d'activités à synchroniser à l'aide de l'option Activités à synchroniser.

Les activités sont regroupées en catégories telles que Cyclisme, Marche et course, Sports nautiques, et Sports d'hiver et autres. Les types d'activités individuels peuvent être activés ou désactivés. Par défaut, tous les types d'activités pris en charge sont sélectionnés après la connexion.

Pour déconnecter votre compte Garmin Connect™, allez à *Paramètres → Se déconnecter* et confirmez l'action. Les pistes précédemment importées restent dans le dossier Garmin Connect, mais les nouvelles activités ne seront plus synchronisées.

![Garmin Connect](@site/static/img/web/garmin_connect_new.png) ![Garmin Connect](@site/static/img/web/garmin_connect_2_new.png)


## Dépannage {#troubleshooting}

### Réinitialiser le mot de passe {#reset-password}

Si vous ne vous souvenez pas de votre mot de passe, utilisez le lien **Je n'ai pas de mot de passe ou je l'ai oublié** dans la boîte de dialogue de connexion. Cela ouvre le panneau **Changer ou réinitialiser le mot de passe**. Saisissez l'adresse e-mail que vous avez utilisée pour créer votre compte et cliquez sur **Continuer**. Un message avec un code de vérification est envoyé à cet e-mail. Sur l'écran suivant, saisissez le code de vérification et votre nouveau mot de passe, puis sélectionnez **Continuer** pour confirmer. Lorsque le code est accepté, votre mot de passe est mis à jour et vous pouvez vous connecter à OsmAnd Web avec les nouveaux identifiants.

![Compte web](@site/static/img/web/web_password.png)

### Changer l'adresse e-mail {#change-email-address}

Pour mettre à jour votre adresse e-mail,  
Allez à *Menu Général → Compte → E-mail → ⋮ → Changer l'e-mail*

La boîte de dialogue Changer l'e-mail apparaît. Un code de vérification est envoyé à l'adresse e-mail actuelle. Saisissez ce code dans le champ **Code de l'ancien e-mail**, spécifiez la nouvelle adresse dans **Nouvel e-mail**, puis sélectionnez **Suivant**. Un second code de vérification est envoyé à la nouvelle adresse e-mail. Saisissez-le dans le champ **Code du nouvel e-mail** et sélectionnez **Terminer**. Lorsque le code est accepté, le message *E-mail modifié avec succès* apparaît. Pour des raisons de sécurité, une notification est également envoyée à votre ancienne adresse e-mail.

![Compte web](@site/static/img/web/web_email_new.png)

### Déconnexion et suppression du compte {#logout-and-delete}

![Compte web](@site/static/img/web/web_logout_new.png)

Le panneau Compte OsmAnd contient des contrôles pour mettre fin à la session web actuelle et supprimer définitivement le compte.

Pour vous déconnecter, ouvrez Compte OsmAnd et utilisez le bouton **Déconnexion** dans le coin supérieur droit du panneau (icône avec une flèche sortant d'un carré). La sélection de Déconnexion ferme le panneau du compte et met fin à la session active sur le site web.

Pour supprimer un compte, sélectionnez **Supprimer le compte** en bas du panneau Compte OsmAnd. Une boîte de dialogue de confirmation apparaît avec le message *« Êtes-vous sûr de vouloir faire cela ? »* et une brève explication que toutes les données et détails du compte seront supprimés d'OsmAnd Cloud et que les appareils secondaires perdront l'accès aux fonctionnalités payantes. Un code de vérification est envoyé à l'adresse e-mail du compte. Saisissez l'adresse e-mail de votre compte dans le champ **Votre adresse e-mail**. Si le champ est vide ou si l'adresse ne correspond pas au compte avec lequel vous êtes connecté, une erreur apparaît sous le champ et rien n'est envoyé. Saisissez le code dans le champ **Code reçu par e-mail**. Si le code est incorrect, une erreur apparaît sous ce champ. Choisissez **SUPPRIMER LE COMPTE** pour compléter le processus. Cette opération est permanente et ne peut pas être annulée.

![Compte web](@site/static/img/web/web_delete.webp)


## Articles associés {#related-articles}

- [Introduction](./web-overview.md)
- [Achats multiplateforme](../purchases/cross.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Pistes](./web-tracks.md)