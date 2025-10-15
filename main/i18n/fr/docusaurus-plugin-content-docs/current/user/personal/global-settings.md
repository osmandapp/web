---
source-hash: e0b9c6c498f2c53828251f254bb330363192ffddb65ff4939e882c99b223b771
sidebar_position: 3
title:  Paramètres généraux
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

**Les paramètres généraux** sont les [paramètres](../personal/profiles.md) généraux pour tous les profils dans l'application OsmAnd. Ce sont les paramètres de base du système OsmAnd, et toute modification apportée affectera l'ensemble de l'application.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Paramètres généraux des profils Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Paramètres généraux des profils Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Paramètres généraux des profils iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Général {#general}

Cette section contient les paramètres de base d'OsmAnd, tels que la sélection d'un [profil](#default-profile) lors du chargement de l'application, la sélection du [moteur de rendu](#map-rendering-engine) et du [dossier](#data-storage-folder) où les données seront enregistrées.  


### Profil par défaut {#default-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres généraux Profil par défaut Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres généraux Profil par défaut iOS](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd utilise le profil par défaut, *Parcourir la carte*, comme premier profil pour les nouveaux utilisateurs, et si ce profil a été sélectionné par vous, il sera utilisé à chaque redémarrage de l'application. Vous pouvez sélectionner n'importe quel profil dans la liste par défaut, y compris *Dernier utilisé* et *Parcourir la carte*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Permet de sélectionner le profil qui a été utilisé en dernier.
- **<Translate android="true" ids="settings_preset"/>**. Vous sélectionnez le profil à utiliser au démarrage d'OsmAnd. Il peut être modifié dans les [paramètres](../personal/profiles.md) de l'application.  


### Profil CarPlay {#carplay-profile}

:::caution iOS UNIQUEMENT
Cette fonctionnalité est disponible pour la version iOS de l'application OsmAnd.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![Profil CarPlay iOS](@site/static/img/personal/profiles/CarPlay_ios.png)  

Le [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) est utilisé lors de la connexion au [logiciel CarPlay](https://support.apple.com/fr-fr/HT205634) de votre véhicule et vous aide à tirer le meilleur parti de la version optimisée de l'application OsmAnd en utilisant les systèmes audio et vidéo pour afficher les données sur votre téléphone.


### Dossier de stockage des données {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Paramètres de stockage des profils Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **La mémoire de l'appareil** indique l'espace libre restant sur votre appareil. Appuyez sur un champ pour accéder au menu [*Cartes et ressources*](../personal/maps-resources.md#maps--resources), où vous pouvez afficher et gérer des informations détaillées sur vos données OsmAnd.

2. Dans le **<Translate android="true" ids="change_data_storage_folder"/>**, vous pouvez sélectionner un dossier pour enregistrer les données OsmAnd sur votre appareil.  

    - *Mémoire interne de l'application*. Seule l'application OsmAnd a accès à ses données et aucune des applications externes.
    - *Mémoire partagée*. N'est plus disponible.
    - *Stockage externe 1*. Seule l'application OsmAnd y a accès, ainsi que les applications d'administration et l'USB.
    - *Stockage multi-utilisateurs*. Seule l'application OsmAnd y a accès, mais il est partagé entre plusieurs utilisateurs Android.
    - *Spécifié manuellement*. Dépend du chemin d'accès.

:::note Android 12+ (changer de dossier de stockage)
De nouvelles directives d'accès au stockage ont été mises en œuvre dans les versions 11-12 d'Android. Consultez la section [**Dépannage**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) pour plus de détails.
:::

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *Appareil iOS → Réglages → Général → Stockage de l'iPhone → OsmAnd Maps*  

![Paramètres généraux stockage iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

Les fichiers OsmAnd sont visibles dans l'application [*Fichiers*](https://apps.apple.com/fr/app/fichiers/id1232058109). Vous pouvez accéder à tous les fichiers OsmAnd : [traces](../personal/tracks/manage-tracks.md), [favoris](../personal/favorites.md), [cartes](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xml](../../technical/build-osmand/routing.md). Pour ce faire, suivez le chemin suivant :  

Allez à : *Fichiers → Sur mon iPhone → OsmAnd Maps*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![Fichiers dans iOS](@site/static/img/personal/profiles/files-1.png) ![Fichiers dans iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Moteur de rendu de la carte {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (Android uniquement)*

![Paramètres généraux moteur de rendu Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- Dans la version **Android** de l'application, vous pouvez basculer entre le rendu de carte Version 1, initialement implémenté dans l'application OsmAnd, et la Version 2, qui utilise l'interface de programmation OpenGL (Open Graphics Library) pour le rendu d'objets graphiques en deux et trois dimensions.

- La version **iOS** utilise uniquement OpenGL pour le rendu de la carte.


| Fonctionnalités | Version 1 | Version 2 (OpenGL) |
|:---|:--- |:--- |
| Multiplateforme | Non utilisé dans la version iOS. | Convient aux deux versions. |
| Dépendant du GPU / CPU | Recommandé pour les appareils peu performants ou obsolètes. | Moteur de rendu puissant. <br /> Uniquement disponible pour [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) et les versions ultérieures, et en mode test pour [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| Mode 3D | Il est possible de visualiser la carte en 2D, et vous pouvez modifier l'angle de vue pour obtenir une [vue 3D](../widgets/map-buttons.md#3d-mode). | Vous pouvez visualiser la carte en 2D et en [3D](../widgets/map-buttons.md#3d-mode). |
| Affichage de la carte | La carte entière est rendue comme un ensemble de tuiles, et les marqueurs, les lignes et le texte sont déjà à l'intérieur de ces tuiles. | D'abord, l'ensemble du paquet de tuiles est rendu, puis les symboles disponibles sont appliqués à la carte, [couche par couche](../../technical/algorithms/map-rendering-layers.md). |
| Superposition / sous-couche de symboles transparents | Prend en charge tous les paramètres. | Ne prend pas en charge une couche raster au-dessus du texte vectoriel. |
| [Terrain 3D](../map/raster-maps.md#3d-relief) | Non pris en charge. | Cette fonctionnalité visualise le terrain sur la carte en ajoutant des informations d'altitude à une carte 2D normale, ce qui crée un effet 3D et de profondeur. |
| [Traces 3D](../map/tracks/appearance.md) | Non pris en charge. | Cette fonctionnalité vous permet d'afficher les traces par altitude au-dessus du niveau de la mer. |
| [Carte en ligne](../plugins/online-map.md) | Ne prend pas en charge l'affichage des lignes de contour si la source de la carte est une carte en tuiles en ligne. | Lorsque la source de la carte est une carte en ligne, les cartes 3D sont également utilisées, et l'affichage des lignes de contour sur la carte est pris en charge. |
| [Plugin Météo](../plugins/weather.md) | Vous ne pouvez pas utiliser ce plugin. | Pratique à utiliser avec le plugin. |  

L'image pour la vue 3D de la carte est chargée tuile par tuile, puis tous les symboles. La vitesse de rendu de la carte dépend du nombre d'objets graphiques 2D et 3D qu'elle contient, et directement des performances de votre matériel. Par conséquent, la Version 2 (OpenGL) ne peut pas être utilisée sur des appareils peu performants.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendu"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendu"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendu"/></td>
    </tr>
</table>


## Confidentialité et sécurité {#privacy-and-security}

OsmAnd vous permet de choisir de *[partager votre activité dans l'application](#analytics)* et vos [identifiants](#identifiers) (*Android uniquement*), de modifier votre *[historique](#history)* et d'utiliser un *[proxy](#proxy)* (*Android uniquement*) de votre choix.  

:::note
Plus d'informations peuvent être trouvées dans la [*Politique de confidentialité et de sécurité d'OsmAnd*](../../legal/privacy-policy.md)
:::

### Analyses {#analytics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![Paramètres généraux Analyses Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Paramètres généraux Envoyer des données anonymes iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

Le paramètre **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) ou **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) vous permet de choisir de fournir ou non des données anonymes sur les *Cartes téléchargées* et les *Écrans visités* (*Android*).  

:::note
Les données sur votre emplacement ou les lieux que vous consultez sur la carte ne sont pas collectées.
:::  

### Identifiants {#identifiers}

<InfoAndroidOnly />

*Menu → Paramètres → Paramètres OsmAnd → Confidentialité et sécurité → Identifiants*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

Un **UUID** (*Identifiant unique d'utilisateur*) est généré pour chaque installation de l'application OsmAnd et envoyé aux serveurs lors du chargement de la carte.

- Un UUID aléatoire est utilisé pour télécharger des cartes hors ligne depuis les serveurs OsmAnd afin de contrôler l'utilisation rationnelle des ressources du serveur, de prédire l'utilisation du trafic et de fournir des rapports mensuels généraux sur les téléchargements de cartes.
- L'UUID change tous les 3 mois.  
- À partir de la version 4.3 d'OsmAnd, vous pouvez désactiver la collecte de données utilisateur lors de l'utilisation de l'application OsmAnd. L'UUID ne sera alors envoyé avec aucune demande de téléchargement.  
- Vous pouvez lire plus d'informations dans les [Conditions d'utilisation (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Historique {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Paramètres généraux Historique Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Paramètres généraux Historique Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Paramètres généraux Historique iOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Paramètres généraux Historique iOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

L'application enregistre l'historique des données précédemment saisies (historique) dans les catégories suivantes : [Recherche](../search/search-history.md), [Navigation](../navigation/setup/route-navigation.md#history-of-previous-routes), [Marqueurs de carte](../personal/markers.md#history). À l'aide du commutateur sur l'onglet approprié, vous pouvez *Activer / Désactiver* l'enregistrement pour certaines catégories d'entrées. Vous pouvez également [gérer](#history) (afficher, supprimer et partager) les données précédemment enregistrées.  

- ***Sauvegarder en tant que fichier*** (*Android*) ou ***Exporter*** (*iOS*) est utilisé pour créer [un fichier de sauvegarde](../personal/import-export.md#export) de votre historique.
- ***Effacer tout l'historique*** (*Android*) ou ***Supprimer tout l'historique*** (*iOS*) est utilisé pour supprimer toutes les entrées de l'historique enregistrées jusqu'au moment de la suppression.

<br/>

**Partager et supprimer l'historique.**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres généraux Historique Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Paramètres généraux Historique iOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Paramètres généraux Historique iOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Vous pouvez supprimer un ou plusieurs éléments de la liste de l'historique ou les partager sous forme de fichier (pour accéder à ces fonctions *sous iOS*, appuyez sur le bouton ***Modifier***).  
- Pour supprimer ou exporter plusieurs enregistrements simultanément, cochez les cases à côté des enregistrements requis et appuyez sur les boutons **Exporter** ou **Supprimer**.  


### Proxy {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![Paramètres généraux Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

Le paramètre **<Translate android="true" ids="proxy_pref_title"/>** vous permet de configurer un [proxy HTTP](https://fr.wikipedia.org/wiki/Serveur_proxy) pour toutes les requêtes réseau. Vous pouvez définir l'*Hôte du proxy* et le *Port du proxy*.  


## Autre {#other}

Dans cette section des paramètres d'OsmAnd, vous pouvez configurer les notifications que vous recevez, le service de localisation et la manière dont les paramètres de votre application sont enregistrés.

### Boîtes de dialogue et notifications {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres généraux notifications Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres généraux Boîtes de dialogue iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

Le paramètre **<Translate android="true" ids="dialogs_and_notifications_title"/>** vous permet d'activer/désactiver les pop-ups, les boîtes de dialogue et les notifications.  

- *Message de démarrage* inclut des promotions, des quiz, des événements, et plus encore.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) supprime l'affichage des réductions de l'application et des messages d'événements locaux spéciaux.
- La [*boîte de dialogue de téléchargement de carte*](../start-with/download-maps.md#download) vous informe que des cartes spécifiques peuvent être téléchargées.


### Source de localisation {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*Android uniquement*)

![Sauvegarde automatique](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd vous offre un choix de services pour déterminer votre position. Il est recommandé de lire plus d'informations sur l'[autorisation de localisation](../start-with/first-steps.md#permission-to-access-the-location) et le [Dépannage](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) pour cette section.

***Android***:

- Vous pouvez choisir quels services *Google Play* ou *API Android* OsmAnd utilisera pour déterminer votre position. Cela peut être utile pour les appareils sans *Services Google Play* ou en cas de données de localisation ou d'altitude inexactes lors de l'enregistrement de traces.
- OsmAnd reçoit des données des ressources *Fournisseurs de localisation fusionnés de Google* et *Fournisseurs GPS et réseau d'Android*. Vous pouvez changer la **<Translate android="true" id="location_source" />** dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- Le système iOS utilise l'*API iOS* pour déterminer la localisation.  
- Tous les paramètres de localisation d'OsmAnd se trouvent dans les réglages de l'appareil iOS : *Réglages → OsmAnd Maps → Position*  
- Confidentialité des services de localisation : *Réglages → Confidentialité → Service de localisation*


### Sauvegarde automatique {#auto-backup}

<InfoAndroidOnly />

![Paramètres généraux notifications Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android ou OsmAnd Cloud peuvent enregistrer vos données et les paramètres de l'application.

- Par défaut, vos *paramètres OsmAnd* et les marqueurs de carte [*Favoris*](../personal/favorites.md#automatic-favorites-backup) sont automatiquement sauvegardés par le système Android. Cela vous permet de les restaurer sur de nouveaux appareils ou après avoir réinstallé l'application.

- Veuillez noter que la taille de la sauvegarde est limitée à *25 Mo*.

- Pour trouver les fichiers de sauvegarde, utilisez une application de gestion de fichiers tierce.  
    *NOTE : Vous pouvez trouver les fichiers de sauvegarde à l'aide du gestionnaire de fichiers Android : Android → data → net.osmand → files → backup, mais sachez que dans les versions récentes d'Android, l'accès aux répertoires système est limité.*  

**Si vous utilisez [*OsmAnd Cloud*](../personal/osmand-cloud.md), il est recommandé de désactiver cette option de sauvegarde par défaut pour éviter toute confusion lors de la réinstallation.**


## Légal {#legal}

OsmAnd peut vous [avertir des radars](../navigation/guidance/navigation-settings.md#screen-alerts), mais seulement si les lois de votre pays le permettent.


### Désinstaller les radars {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Paramètres généraux Radars Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![Paramètres généraux Radars Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Paramètres généraux Radars iOS](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![Paramètres généraux Radars iOS](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Ce paramètre vous permet d'activer ou de désactiver les POI avec des radars, vous devez redémarrer l'application OsmAnd pour que les modifications prennent effet.
  
Dans certains pays ou régions, l'utilisation d'applications d'avertissement de radars est illégale. Vous devez faire un choix en fonction des lois de votre pays. Sélectionnez **Garder actif**, et vous recevrez des alertes et des notifications de radars. Sélectionnez **Désinstaller** et toutes les données relatives aux radars, telles que les avertissements, les notifications et les POI, seront supprimées jusqu'à ce que vous réinstalliez complètement OsmAnd.  

Lisez à propos des alertes pour les radars sur votre itinéraire dans l'article Widgets de navigation dans la section *[Widget d'alerte](../widgets/nav-widgets.md#alert-widget)*.


## Articles connexes {#related-articles}

- [Profils (Paramètres)](./profiles.md)
- [Importer / Exporter](../personal/import-export.md)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)

### Dépannage {#troubleshooting}

- **Android 12+ (changer de dossier de stockage)**. De nouvelles directives d'accès au stockage ont été mises en œuvre dans les versions 11-12 d'Android. Ces changements affectent particulièrement le stockage des cartes sur les cartes SD, entraînant des performances d'accès aux fichiers considérablement plus lentes et des limitations d'accès plus strictes aux dossiers des cartes SD sur Android 11 et 12. Pour savoir comment résoudre ce problème, consultez la section [**Dépannage**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Source de localisation pour les problèmes d'altitude**. Google Play a modifié sa politique et, pour s'y conformer, OsmAnd, à partir de la version 3.9, doit utiliser les services Google Play pour obtenir des corrections de localisation lorsqu'il fonctionne en arrière-plan. Lisez plus d'informations dans la section [Dépannage](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).