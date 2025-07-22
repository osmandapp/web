---
source-hash: 6b2c4fa700522da26fcad9168c57a7b9f010154747f3253c53cdd3c3067262a8
sidebar_position: 7
title: Favoris
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

La fonction **Favoris** d'OsmAnd vous permet de créer des signets (notes) sur la carte. Ces points favoris sont affichés par défaut sous forme d'étoiles jaunes, mais vous pouvez les personnaliser entièrement avec différentes couleurs, formes et icônes. Les favoris sont regroupés dans une couche de carte dédiée, qui devient visible à partir du *6ème niveau de zoom*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites introduction android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites introduction ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>

## Point favori {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Les favoris font partie d'une couche de carte spéciale, et vous pouvez les [afficher ou les masquer](../map/point-layers-on-map.md#favorites) ainsi que leurs [noms](../map/point-layers-on-map.md#favorite-and-poi-names) sur la carte. Taper sur un point favori ouvre le [menu contextuel](../map/map-context-menu.md#favorites--track-points-from-the-group), vous permettant de voir les détails et de [modifier ou supprimer](../map/map-context-menu.md#add--edit-favorite) le point.

### Créer {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorite add description Android](@site/static/img/personal/favorite_add_descr_android.png) ![Favorite group Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png) ![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Pour ajouter un point favori :

1. Sélectionnez un [POI](../map/point-layers-on-map.md#points-of-interest-pois) ou une structure sur la carte.
   Appui court pour un POI ou appui long pour un point de carte général.
2. Sélectionnez [Ajouter (☆)](../map/map-context-menu.md#add--edit-favorite) dans le menu contextuel de la carte.

Lors de l'ajout d'un point à partir de données OSM, les informations POI pertinentes sont automatiquement incluses. Vous pouvez également créer un favori en [appuyant longuement](../map/map-context-menu.md#select-any-point-long-tap) sur n'importe quel emplacement de la carte.

***Champs pour un point favori :***

- **Nom** — Un nom unique au sein du groupe (*Obligatoire*).
- **Adresse** et **Description** (*Facultatif*).
- **Groupe** — Sélectionnez un [groupe de favoris](#manage-favorites) existant ou créez-en un nouveau.
- **Personnalisation visuelle** — L'icône, la couleur, la forme peuvent correspondre à l'[apparence par défaut du groupe](#change-group-appearance) ou être personnalisées individuellement.

### Modifier / Remplacer / Supprimer {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite edit iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Pour modifier un point favori :

1. [Appuyez](../map/map-context-menu.md#select-an-object-single-tap) sur le favori sur la carte ou allez dans [Mes favoris](#manage-favorites).
2. Choisissez **Modifier le favori** dans le [*menu contextuel de la carte*](../map/map-context-menu.md#add--edit-favorite).

***Options disponibles :***

- **Modifier les détails** — Nom, icône, groupe, adresse et description.
- **Remplacer l'emplacement** — Remplace un autre point par celui-ci. Utile pour mettre à jour un point spécifique (par exemple, *Ma voiture garée*) ou en créer un nouveau.
- **Supprimer** — Supprime le favori à l'aide de l'option de suppression, accessible via le menu Modifier ou via le bouton de suppression sur Android.

### Icônes de favoris {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

Une large gamme d'icônes pour les POI et les points de cheminement est disponible dans OsmAnd. Vous pouvez :

- Sélectionner une icône dans la liste des [catégories de POI](../search/search-poi.md#categories-and-their-filters).
- Trouver une icône appropriée à l'aide de l'[option de recherche](../search/search-all.md#how-to-use).

### Favoris spéciaux (personnels) {#special-favorites-personal}

Le *dossier Personnel* contient des points spéciaux comme **<Translate android="true" ids="favorite_home_category"/>** et **<Translate android="true" ids="work_button"/>**, souvent utilisés dans la [navigation](../navigation/setup/route-navigation.md#select-starting-point). Ce dossier n'a pas de *menu à trois points*, et ses paramètres ne peuvent pas être modifiés.

## Gérer les favoris {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

La section **Mes favoris** vous permet de :

- [Rechercher](#order--sorting--search) des favoris ou des groupes spécifiques.
- [Opérations en bloc](#bulk-edit--delete) — Renommer, déplacer ou supprimer plusieurs favoris à la fois.

### Ordre / Tri / Recherche {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Tri** — Les dossiers et points favoris sont triés par ordre alphabétique, le [dossier personnel](../personal/favorites.md#special-favorites-personal) étant en haut.
- **Recherche** — Utilisez la [recherche globale](../search/search-all.md) pour trouver des favoris par nom. Les favoris sont triés par distance par rapport au centre de la carte.

### Modifier / Supprimer en bloc {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png) ![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Pour gérer plusieurs favoris, appuyez sur l'icône **Supprimer** (*icône de corbeille sur Android*) ou sur le bouton **Modifier** (*icône de crayon sur iOS*).
2. Sélectionnez des favoris individuels ou des dossiers entiers pour les opérations en bloc.
3. **Options disponibles** — *Supprimer* pour Android et iOS, *Déplacer vers un groupe de favoris*, *Partager* et *Changer de couleur* pour iOS.

<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->

### Actions de groupe de favoris {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *Menu à trois points → Changer l'apparence par défaut*

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *Appui long sur le dossier → Apparence par défaut*

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Utilisez le ***menu à trois points*** (*Android*) à côté de chaque dossier et l'***appui long*** (*iOS*) sur le dossier pour gérer les groupes de favoris :

- **<Translate android="true" ids="shared_string_rename"/>** — Utilisez cette option pour changer le nom du dossier sélectionné.

- **<Translate android="true" ids="change_default_appearance"/>** — Personnalisez l'apparence des points favoris dans le dossier sur la carte en changeant leurs icônes, couleurs ou étiquettes.

- **<Translate android="true" ids="shared_string_show_on_map"/>** ou **Masquer sur la carte** — Activez ou désactivez cette option pour afficher ou masquer les points favoris du dossier sur la carte.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** ou **Supprimer des marqueurs de carte** (*Android uniquement*) — Ajoutez tous les points favoris d'un dossier à la *liste des marqueurs de carte* ou supprimez-les si nécessaire pour une référence facile.

- **<Translate android="true" ids="shared_string_share"/>** — Partagez les points favoris du dossier en les exportant sous forme de fichier *Favorites.gpx*, ce qui facilite le transfert ou la sauvegarde de vos données.

- **<Translate android="true" ids="shared_string_delete"/>** — Supprimez définitivement le dossier de favoris sélectionné et tous les points qu'il contient.

Plus de détails dans l'article [Mes lieux](../personal/myplaces.md#favorites).

### Changer l'apparence du groupe {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Paramètres de *changement d'apparence du groupe* :

- **Icône, couleur, forme** — Définissez un style par défaut pour tous les favoris d'un groupe.
- **Cohérence** — Les nouveaux favoris ajoutés au groupe héritent automatiquement de l'apparence par défaut.
- **Personnalisation** — Remplacez les paramètres par défaut pour les points existants dans le dossier, les nouveaux favoris uniquement, ou appliquez-les à tous.

## Exporter / Importer {#export--import}

OsmAnd fournit plusieurs méthodes pour [sauvegarder](./import-export.md) et [restaurer](./import-export.md#import) les favoris :

- **Emplacements de sauvegarde** — Stockage local, [OsmAnd Cloud](../personal/osmand-cloud.md) (uniquement avec un [abonnement OsmAnd Pro ou OsmAnd Start](../purchases/index.md)), ou applications de messagerie instantanée.

- **Format de fichier** — Les favoris sont enregistrés sous forme de fichiers `.gpx` (favorites.gpx).

### Sauvegarde gratuite dans le cloud {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

La [sauvegarde gratuite des favoris](../personal/osmand-cloud.md#osmand-start) est un plan d'achat spécial qui vous permet de sauvegarder vos points favoris (emplacements) pour les versions **Android, iOS** ou **Web** de l'application OsmAnd et de les restaurer depuis OsmAnd Cloud. Ce plan est disponible pour les utilisateurs d'[OsmAnd Free ou Maps+](../purchases/index.md).

La *sauvegarde gratuite des favoris* offre ces avantages :

- **Aucun paiement n'est requis**. Utilisez la fonction de sauvegarde sans acheter d'abonnements payants.
- **Enregistrer les points favoris**. Enregistrez régulièrement vos points favoris dans OsmAnd pour éviter de les perdre en cas de panne de votre appareil ou de suppression de l'application.
- **Transférer les points favoris**. Importez vos points favoris sur un nouvel appareil avec la fonction *Sauvegarde gratuite des favoris* si vous utilisez OsmAnd sur plusieurs appareils.

#### Comment créer une sauvegarde {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Vous avez besoin d'un compte OsmAnd Cloud pour utiliser la fonction *Sauvegarde gratuite des paramètres*. Si vous avez un compte dans *OsmAnd Pro* ou un compte *OsmAnd Cloud* actif, vous ne verrez pas la bannière de promotion.

- *Bannière de sauvegarde gratuite des favoris*. Appuyez sur cette bannière pour lancer le processus de sauvegarde.
- *Terminez l'étape d'inscription* si vous n'avez pas de compte OsmAnd Cloud en suivant les instructions du [guide d'inscription](../personal/osmand-cloud.md#login).
- *Accédez au menu Achats OsmAnd* (*Menu → Paramètres → Achats*).
- *[Pack OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Sélectionnez cette option pour accéder à la fonction de sauvegarde gratuite des paramètres.
- *Créez une sauvegarde* de vos paramètres.

### Tous les favoris {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)

</TabItem>

</Tabs>

Vous pouvez exporter et importer vos favoris à l'aide des boutons spéciaux situés en bas de l'écran Favoris. Un [fichier .gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) peut être envoyé à Dropbox, par e-mail, via des messageries et d'autres applications installées sur votre appareil qui prennent en charge cette fonctionnalité.

- Bouton **Importer** (*Android*) / **Importer un favori** (*iOS*). Vous permet d'importer des points favoris (*favorites.gpx*) sous forme de points de cheminement à partir d'un fichier *GPX* (un format de données GPS courant) depuis le stockage de votre appareil.
- Bouton **Partager** (*Android*) / **Exporter un favori** (*iOS*). Vous permet d'exporter (partager) tous vos favoris sous forme de fichier *favorites.gpx*.

### Groupe de favoris {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_1_ios.png) ![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Appuyez sur le **menu à trois points** (*Android*) ou sur le bouton **Modifier** (*icône de crayon sur iOS*) ou **appuyez longuement** sur le dossier (*iOS*) du dossier de favoris sélectionné.
- Choisissez le bouton **Partager** pour envoyer le fichier *Favorites.gpx* à la mémoire de votre appareil ou le partager via des applications de messagerie.

### Sauvegarde automatique des favoris {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *Android → data → net.osmand → files → backup*

![Favorites backup export Android](@site/static/img/personal/favorites_backup_export_andr.png) ![Favorites autobackup android](@site/static/img/personal/favorites_autobackup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *Fichiers → Sur mon iPhone → OsmAnd Maps → favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

OsmAnd crée un **fichier de sauvegarde** chaque fois que les favoris sont modifiés.

- **Android** : les sauvegardes sont stockées dans *Android → data → net.osmand → files → backup*. Utilisez un gestionnaire de fichiers tiers pour y accéder.

- **iOS** : les fichiers se trouvent dans *Fichiers → Sur mon iPhone → OsmAnd Maps → favourites_backup*.

**Exportation manuelle de la sauvegarde**

- Allez à *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Exportez le fichier `.osf` vers le stockage local, les services cloud, ou partagez-le directement.

:::caution
Dans les dernières versions d'***Android***, l'accès aux répertoires système est limité. Cependant, après avoir extrait le fichier de favoris de l'archive, il reste possible de le transférer vers des messageries ou des services cloud, etc.
:::

### Favoris dans le fichier GPX {#favorites-in-gpx-file}

Toutes les informations sur un favori sont stockées et décrites à l'aide de balises. Lors de la création d'un point favori, vous pouvez écrire votre propre [description](#favorite-point) ou utiliser les informations des données de [point d'intérêt (POI)](../map/point-layers-on-map.md#points-of-interest-pois) OSM à partir desquelles votre point a été créé. Les points favoris, les POI et les points de cheminement utilisent les mêmes **balises** pour stocker les informations et sont enregistrés au **format de fichier GPX**.

```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```

## Articles connexes {#related-articles}

- [Gérer les tracés](../personal/tracks/manage-tracks.md#import--export-track)
- [Historique de recherche](../search/search-history.md#export-and-share)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)

> *Dernière mise à jour : avril 2025*