---
sidebar_position: 4
title: Planificateur d'itinéraire Web
unlisted: true
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


## Aperçu

:::info
Le site *[osmand.net/map](https://osmand.net/map/)* est actuellement en cours de développement et de test.
**Par conséquent, la présentation et le fonctionnement de certaines fonctions sur le site peuvent être différents de ceux décrits dans cet article.**

Nous avons créé le [thème de discussion](https://github.com/osmandapp/OsmAnd/discussions/16567) sur notre GitHub afin que vous puissiez y laisser vos commentaires.
:::

Les fonctionnalités suivantes sont disponibles pour les utilisateurs de la version gratuite d'OsmAnd et pour les utilisateurs avec la version [Pro](../purchases/android.md#osmand-pro) <ProFeature/> :

| Fonctionnalités | Versions |
|--- |--- |
| [Synchronisation OsmAnd Pro](#osmand-pro-sync) | <ProFeature/> |
| [Météo](#weather) | Gratuit |
| [Tracés](#weather) | <ProFeature/> |
| [Favoris](#farorites-pro) | [Osmand Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Itinéraire de navigation](#navigation-route) | Gratuit |
| [Créer un tracé](#create-track-pro) | Gratuit |


![Vue OsmAnd Web](@site/static/img/web/web.png)


## Synchronisation OsmAnd Pro et OsmAnd Start

- **OsmAnd Pro** est un abonnement payant [multiplateforme](../troubleshooting/setup.md#cross-platform).
- **OsmAnd Start** est une [inscription gratuite à OsmAnd Cloud](https://osmand.net/blog/start).

La capacité multiplateforme vous permet d'utiliser OsmAnd Pro sur toutes les plateformes *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Pour ce faire, vous devez :

1. Vous abonner à *OsmAnd Pro*. Pour en savoir plus sur la procédure pour [Android, cliquez ici](../purchases/android.md#how-to-buy), et pour [iOS, cliquez ici](../purchases/ios.md#how-to-buy).
2. Pour savoir comment créer un compte *OsmAnd Start*, lisez [ici](https://osmand.net/blog/start#how-to-create-an-account).
3. Enregistrer votre [compte Pro ou Start](../troubleshooting/setup.md#cross-platform) sur le serveur OsmAnd dans l'application OsmAnd.
4. L'adresse e-mail enregistrée sera votre identifiant pour activer OsmAnd Pro sur la plateforme web. La première fois, vous devrez choisir un mot de passe pour les futures connexions au portail web (veuillez suivre les instructions sur le portail web).

- Entrez votre *e-mail* et votre *mot de passe* pour [osmand.net/map](https://osmand.net/map/).

![Vue activation OsmAnd Web](@site/static/img/web/web_pro_activation.png)

- Vos données, telles que les tracés (OsmAnd Pro) et les favoris (OsmAnd Pro et OsmAnd Start), apparaîtront dans le menu après votre connexion. Elles sont disponibles pour l'affichage sur la carte. Mais vous devez [synchroniser ces données](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) depuis vos appareils.

![Vue données OsmAnd Web](@site/static/img/web/web_data.png)

- Pour *TÉLÉCHARGER LA SAUVEGARDE* depuis [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), cliquez sur le champ de connexion. Sur le champ de connexion, vous pouvez voir les informations sur les fichiers (nombre total de fichiers, taille totale des fichiers, espace de stockage cloud utilisé) et les informations sur le compte (type d'abonnement, heure de début et heure d'expiration de votre abonnement).

![Vue fichier de sauvegarde OsmAnd Web](@site/static/img/web/web_backup_file.png)

Choisissez les fichiers nécessaires à télécharger, le format `.zip` ou `.osf` des fichiers téléchargés et cliquez sur le bouton *TÉLÉCHARGER LA SAUVEGARDE* :

![Vue fichier de sauvegarde OsmAnd Web](@site/static/img/web/web_backup_file_1.png)

Il y a aussi un bouton pour se *déconnecter* du compte.

- *DÉCONNEXION*, *SUPPRIMER VOTRE COMPTE* ou *Changer d'e-mail* se trouvent également sur le champ de connexion. Pour ouvrir *SUPPRIMER VOTRE COMPTE* ou *Changer d'e-mail*, vous devez cliquer sur *Zone dangereuse*.

![Vue fichier de sauvegarde OsmAnd Web](@site/static/img/web/web_backup_file_2.png)

## Météo

Le [plugin Météo](../plugins/weather.md) est une fonctionnalité payante de l'application OsmAnd. Pour la version web, la Météo est une fonctionnalité gratuite avec les capacités suivantes :

- Activer les couches météo sur la carte : *Température, Pression, Vent, Couverture nuageuse et Précipitations* à l'aide du menu à gauche ou à droite.
- Activer l'affichage des prévisions météo pour la journée ou la semaine (le pas de prévision est de 3 heures).

![Météo OsmAnd Web](@site/static/img/web/web_weather.png)


## Tracés

C'est une fonctionnalité payante <ProFeature/>. Vous devez d'abord vous connecter à votre compte OsmAnd Pro :

![Connexion Tracé](@site/static/img/web/track_loggin.png)

Pour la section Tracés :

- Afficher les tracés depuis [OsmAnd Cloud](#users-tracks-pro).
- Ajouter des tracés sur la carte (dossier *Visible sur la carte*).
- Consulter toutes les informations et le graphique des tracés.
- Modifier les tracés et les ajouter au Cloud.
- Télécharger et supprimer des tracés.
- Créer de nouveaux dossiers ou les supprimer.
- Télécharger des dossiers au format collection `.osf` ou `.obf`.


### Visible sur la carte

Voici une liste des tracés visibles sur la carte.

Activer/désactiver les tracés pour les afficher ou non sur la carte.

![Visible sur la carte](@site/static/img/web/visible.png)


### Menu du dossier de tracés

Cliquez sur le bouton *Trois points* ⋮ pour ouvrir le menu *Dossier de tracés*. Ici, vous pouvez télécharger tous les tracés du dossier choisi sous forme de :

- Télécharger au format OSF
- Télécharger au format collection OBF :
  Vous pouvez obtenir une carte OBF à partir de ces données : [fichier OBF](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) ou [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).

    [fichier OBF](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) :

Vous pouvez télécharger une carte hors ligne OBF (OsmAnd Binary Format) et l'ouvrir avec OsmAnd sur l'appareil, elle convient pour afficher une grande quantité de tracés qui seront visibles sur la carte.

  [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes) :

Vous pouvez également importer une carte de tracés sous forme de carnet de voyage qui vous permettra également de sélectionner un tracé spécifique sur la carte et de l'utiliser comme un GPX normal. Le carnet de voyage prend également en charge des fonctionnalités telles que l'affichage des tracés sous forme de points, le filtrage des tracés par type d'activité et le filtrage des points de passage.

- Renommer le dossier choisi.
- Supprimer le dossier choisi.

![Menu du dossier de tracés](@site/static/img/web/collection.png)

### Tracés Cloud

Les tracés GPX que vous avez dans OsmAnd Cloud seront disponibles pour l'affichage et l'édition après connexion. Uniquement pour les **utilisateurs Pro** <ProFeature/>.

Les fonctionnalités suivantes sont disponibles après avoir choisi un tracé Cloud :

- Écrans d'information :
  - *Information* - affichage des données du tracé.
  - *Altitude* - graphique d'altitude.
  - *Vitesse* - graphique de vitesse.
  - *Pente* - graphique de pente.
  - *Paramètres* - liste des profils de navigation pour l'outil *Créer un itinéraire*.

- Boutons d'action :
  - *Modifier le tracé* - ajout du tracé Cloud en local pour l'édition (bouton *Modifier la localité* sur le panneau).
  - *Télécharger GPX* - télécharge le tracé sur le PC.
  - *Recalculer* l'altitude (Satellite) - affiche le graphique d'altitude du tracé sélectionné.
  - *Supprimer le tracé* - supprime le tracé.
  - *Fermer le tracé* - ferme le tracé.

![Édition GPX Cloud OsmAnd Web](@site/static/img/web/cloud_track.png)


## Favoris

Après avoir enregistré un compte OsmAnd Pro ou OsmAnd Start, vos Favoris sont affichés dans le menu Favoris.
Les actions suivantes sont disponibles :

- *Afficher sur la carte* - afficher les points favoris du dossier choisi sur la carte.
- *Renommer* - nom et description du dossier favori.
- *Télécharger* - télécharger le dossier favori choisi.
- *Supprimer* - supprimer le dossier favori choisi.

![Édition Favoris Cloud OsmAnd Web](@site/static/img/web/favorites.png)

### Ajouter / Modifier un favori

[Pour ajouter](../personal/favorites.md#edit) un nouveau point favori, faites un clic droit sur l'écran. Pour commencer l'édition, cliquez sur le point favori, l'écran du menu d'édition ressemble au [menu de l'application OsmAnd](../personal/favorites.md#create).

![Ajouter Favoris OsmAnd Web](@site/static/img/web/web_favorites_add.png)


<!--
## Style de carte

Dans cette section du menu, vous pouvez changer le style de la carte. Vous pouvez en savoir plus sur la procédure dans l'article [Cartes vectorielles (Styles de carte)](../map/vector-maps.md) pour l'application OsmAnd. Les paramètres de la version web ne sont pas différents.
**Quelques exemples :**

- Style de carte nautique

![Style de carte nautique OsmAnd Web](@site/static/img/web/web_map_style_nautical.png)

- Style de carte topo

![Ajouter Favoris OsmAnd Web](@site/static/img/web/web_map_style_topo.png)
-->

## Itinéraire de navigation

- Pour commencer à construire un itinéraire de navigation, faites un clic droit pour ajouter les points *Naviguer depuis*, *Naviguer vers* et *Naviguer via*.

- Après avoir ajouté les points de départ et d'arrivée, nous obtenons l'itinéraire.

- Dans le bloc Itinéraire, vous pouvez déplacer les points de départ et d'arrivée, les modifier et changer le type d'itinéraire.

![Créer un itinéraire OsmAnd Web](@site/static/img/web/navigation.png)

- choisissez le *Profil d'itinéraire* pour changer le type de routage de navigation :

![Créer un itinéraire OsmAnd Web](@site/static/img/web/profile_type.png)

- cliquez sur les cercles orange sur l'itinéraire de navigation pour voir les instructions :

![Créer un itinéraire OsmAnd Web](@site/static/img/web/nav_instr.png)

- copiez l'URL pour envoyer l'itinéraire de navigation. Exemple : [https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

## Créer un tracé et Local

Une version web de l'outil ["Planifier un itinéraire"](../plan-route/create-route.md), similaire à l'application OsmAnd, est en cours de développement. Pour créer un itinéraire, *clic droit → Créer un nouvel itinéraire*. Ou vous pouvez utiliser le bouton *Créer un tracé* dans le menu *Local* (côté droit : boutons *Crayon* et *Télécharger*).

Ici, vous pouvez sélectionner un profil de navigation pour construire une section de l'itinéraire (Nouveaux segments) ou pour tout l'itinéraire (Tous les segments), ajouter des points de passage, enregistrer l'itinéraire et afficher des informations à son sujet.

![Créer un tracé OsmAnd Web](@site/static/img/web/create_route.png)

Vous pouvez visualiser toutes les actions et afficher les informations du tracé dans la section [Tracés](#tracks) de cet article.

Actions pour Local :

- *Importer un tracé* - tout utilisateur peut télécharger n'importe quel fichier GPX sur [*osmand.net/map*](https://osmand.net/map) dans la section *Local*.
- Créer un tracé.

![Créer un tracé OsmAnd Web](@site/static/img/web/create_route_2.png)

Le menu et l'édition du tracé local comportent 3 panneaux : Info, Tracé, Points de passage, Virages.

Actions et données *Info* :

  - *Enregistrer dans le Cloud*.
  - *Ajouter une description*.
  - *Renommer* un tracé.
  - *Recalculer* - Ajouter des données d'altitude pour le tracé sélectionné.
  - *Altitude* : graphique d'altitude.
  - *Vitesse* : graphique de vitesse.
  - *Pente* : graphique de pente.
  - *Détails de la route* - Type de route, Surface, Pente, Fermeté de la surface, Piste.
  - Bouton *Télécharger GPX* (fonctionnalité Pro).
  - *Fermer le tracé*.
  - *Supprimer le tracé* - Supprimer le tracé.

![Créer un tracé OsmAnd Web](@site/static/img/web/create_route_3.png)


La section *Tracé* contient les points du tracé. Ici, vous pouvez les supprimer ou changer leur ordre.
Le menu *Points de passage* contient les points de passage du tracé. Ici, vous pouvez les afficher ou non sur la carte, et supprimer les points de passage.

Le menu *Virages* contient des informations sur les virages des segments.

![Créer un tracé OsmAnd Web](@site/static/img/web/create_route_1.png)

## POI sur la carte

Cliquez sur le bouton *POI* dans le panneau latéral. Menu *Afficher les POI* : ici, vous pouvez choisir des POI ou rechercher une catégorie de POI pour les afficher sur la carte.

![Menu POI](@site/static/img/web/poi_menu.png)

## Fonction de recherche

Écrivez votre requête pour rechercher et afficher sur la carte. Cliquez sur le cercle pour ouvrir le nom du POI.

![Menu Recherche](@site/static/img/web/search.png)

## Schéma d'URL

Pour une utilisation facile de l'application OsmAnd, vous pouvez profiter des liens directs. Ce sont des URL spéciales qui vous permettent de transférer une position et contiennent des données détaillées sur les épingles et les tracés.

Ces chaînes d'adresse peuvent être copiées et transférées à l'aide de tout moyen de transfert de données pris en charge par votre appareil et utilisées dans les versions Android ou iOS d'OsmAnd.

1. **URL avec une épingle sur la carte :**

    https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

    ![Créer un tracé OsmAnd Web](@site/static/img/plan-route/web_url_pin.png)

2. **URL sans épingle sur la carte :**

    https://osmand.net/map/#9/52.3924/6.3116

    ![Créer un tracé OsmAnd Web](@site/static/img/plan-route/web_url_without.png)

3. **URL avec navigation :**

    https://osmand.net/map/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

    ![Créer un tracé OsmAnd Web](@site/static/img/plan-route/web_url_track.png)

Selon les paramètres spécifiés, les chaînes d'URL peuvent contenir :

- **latitude :** valeur de la latitude sous forme de nombre.
- **longitude :** valeur de la longitude sous forme de nombre.
- **start-finish :** pour la navigation.
- **profile :** pour la navigation.
- **zoom :** niveau de zoom.


## Articles connexes

- [Importer / Exporter](../personal/import-export.md)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)

> *Cet article a été mis à jour pour la dernière fois en janvier 2025*

-- source-hash: blake2s: 51394c351f3579688dc59ca9458a4887b13f594edda773875c3fb7fbe251f2ab --
