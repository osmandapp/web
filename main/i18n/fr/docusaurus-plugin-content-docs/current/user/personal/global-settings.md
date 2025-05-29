---
source-hash: 3dc80d47d56339f3dcd63ac184ca7d66dff86666dcc29b69beb1322effd4a594
sidebar_position: 3
title:  Paramètres globaux
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



## Vue d'ensemble {#overview}

Les **paramètres globaux** sont des [paramètres](../personal/profiles.md) généraux pour tous les profils de l'application OsmAnd. Ce sont les paramètres de base du système OsmAnd, et toute modification apportée affectera l'ensemble de l'application.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Général {#general}

Cette section contient les paramètres de base d'OsmAnd, tels que la sélection d'un [profil](#default-profile) lors du chargement de l'application, la sélection du [moteur de rendu](#map-rendering-engine) et du [dossier](#data-storage-folder) où les données seront enregistrées.  


### Profil par défaut {#default-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd utilise le profil par défaut, *Parcourir la carte*, comme premier profil pour les nouveaux utilisateurs, et si ce profil a été sélectionné par vous, il sera utilisé à chaque redémarrage de l'application. Vous pouvez sélectionner n'importe quel profil dans la liste par défaut, y compris *Dernier utilisé* et *Parcourir la carte*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Permet de sélectionner le profil qui a été utilisé en dernier.
- **<Translate android="true" ids="settings_preset"/>**. Vous sélectionnez le profil à utiliser au démarrage d'OsmAnd. Il peut être modifié dans les [paramètres](../personal/profiles.md) de l'application.  


### Profil CarPlay {#carplay-profile}

:::caution iOS SEULEMENT
Cette fonctionnalité est disponible pour la version iOS de l'application OsmAnd.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)  

Le [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) est utilisé lorsque vous êtes connecté au [logiciel CarPlay](https://support.apple.com/en-gb/HT205634) de votre véhicule et vous aide à tirer le meilleur parti de la version optimisée de l'application OsmAnd en utilisant les systèmes audio et vidéo pour afficher les données sur votre téléphone.


### Dossier de stockage des données {#data-storage-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Profiles Storage Settings Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **Mémoire de l'appareil** indique l'espace libre restant sur votre appareil. Appuyez sur un champ pour accéder au menu [*Cartes et ressources*](../personal/maps-resources.md#maps-and-resources), où vous pouvez afficher et gérer des informations détaillées sur vos données OsmAnd.

2. Dans le **<Translate android="true" ids="change_data_storage_folder"/>**, vous pouvez sélectionner un dossier pour enregistrer les données OsmAnd sur votre appareil.  

    - *Mémoire interne de l'application*. Seule l'application OsmAnd a accès à ses données et aucune des applications externes.
    - *Mémoire partagée*. N'est plus disponible.
    - *Stockage externe 1*. Seule 1 application OsmAnd a accès et les applications Admin et USB.
    - *Stockage multi-utilisateur*. Seule 1 application OsmAnd a accès, mais elle est partagée entre plusieurs utilisateurs Android.
    - *Spécifié manuellement*. Dépend du chemin.

:::note Android 12+ (changer de dossier de stockage)
De nouvelles directives d'accès au stockage ont été mises en œuvre dans les versions Android 11-12. Voir la section [**Dépannage**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) pour plus de détails.
:::

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *Appareil iOS → Réglages → Général → Stockage iPhone → OsmAnd Maps*  

![General Settings storage iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

Les fichiers OsmAnd sont visibles dans l'application [*Fichiers*](https://apps.apple.com/us/app/files/id1232058109). Vous pouvez accéder à tous les fichiers OsmAnd : [traces](../personal/tracks/manage-tracks.md), [favoris](../personal/favorites.md), [cartes](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Pour ce faire, suivez le chemin suivant :  

Aller à : *Fichiers → Sur mon iPhone → OsmAnd Maps*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![General Settings storage iOS](@site/static/img/personal/profiles/files-1.png) ![General Settings storage iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Moteur de rendu de carte {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (Android uniquement)*

![General Settings engine rendering Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- Dans la version **Android** de l'application, vous pouvez basculer entre le rendu de carte Version 1, implémenté à l'origine dans l'application OsmAnd, et la Version 2, qui utilise l'interface de programmation OpenGL (Open Graphics Library) pour le rendu d'objets graphiques bidimensionnels et tridimensionnels.

- La version **iOS** utilise uniquement OpenGL pour le rendu de carte.


| Fonctionnalités | Version 1 | Version 2 (OpenGL) |
|:---|:--- |:--- |
| Multiplateforme | Non utilisé dans la version iOS. | Convient aux deux versions. |
| Dépendance GPU / CPU | Recommandé pour les appareils peu performants ou obsolètes. | Moteur de rendu puissant. <br /> Uniquement disponible pour [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) et les versions ultérieures, et en mode test pour [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| Mode 3D | Il est possible de visualiser la carte en 2D, et vous pouvez modifier l'angle de vue pour obtenir une [vue 3D](../widgets/map-buttons.md#3d-mode). | Vous pouvez visualiser la carte en 2D et en [3D](../widgets/map-buttons.md#3d-mode). |
| Affichage de la carte | La carte entière est rendue sous forme d'un ensemble de tuiles, et les marqueurs, les lignes et le texte sont déjà à l'intérieur de ces tuiles. | Tout d'abord, l'ensemble des tuiles est rendu, puis les symboles disponibles sont appliqués à la carte, [couche par couche](../../technical/algorithms/map-rendering-layers.md). |
| Superposition / sous-couche de symboles transparents | Prend en charge tous les paramètres. | Il ne prend pas en charge une couche raster au-dessus du texte vectoriel. |
| [Terrain 3D](../map/raster-maps.md#3d-relief) | Non pris en charge. | Cette fonctionnalité visualise le terrain sur la carte en ajoutant des informations d'altitude à une carte 2D normale, ce qui crée un effet 3D et de profondeur. |
| [Traces 3D](../map/tracks/appearance.md) | Non pris en charge. | Cette fonctionnalité vous permet d'afficher les traces par altitude au-dessus du niveau de la mer. |
| [Carte en ligne](../plugins/online-map.md) | Il ne prend pas en charge l'affichage des courbes de niveau si la source de la carte est une carte de tuiles en ligne. | Lorsque la source de la carte est une carte en ligne, les cartes 3D sont également utilisées, et l'affichage des courbes de niveau sur la carte est pris en charge. |
| [Plugin Météo](../plugins/weather.md) | Vous ne pouvez pas utiliser ce plugin. | Pratique à utiliser avec le plugin. |  

L'image pour la vue 3D de la carte est chargée tuile par tuile, puis tous les symboles. La vitesse de rendu de la carte dépend du nombre d'objets graphiques 2D et 3D sur celle-ci, et directement des performances de votre matériel. Par conséquent, la Version 2 (OpenGL) ne peut pas être utilisée sur des appareils peu performants.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table>


## Confidentialité et sécurité {#privacy-and-security}

OsmAnd vous permet de choisir de [partager votre activité dans l'application](#analytics) et vos [identifiants](#identifiers) (*Android uniquement*), la possibilité de modifier votre [historique](#history) et d'utiliser un [proxy](#proxy) (*Android uniquement*) de votre choix.  

:::note
Plus d'informations peuvent être trouvées dans la [*Politique de confidentialité et de sécurité d'OsmAnd*](../../legal/privacy-policy.md)
:::

### Analyse {#analytics}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![General Settings Analytics Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![General Settings Send anonymous data iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

Le paramètre **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) ou **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) vous permet de choisir de fournir des données anonymes sur les *Cartes téléchargées* et les *Écrans visités* (*Android*).  

:::note
Les données sur votre position ou les lieux que vous consultez sur la carte ne sont pas collectées.
:::  

### Identifiants {#identifiers}

<InfoAndroidOnly />

*Menu → Paramètres → Paramètres OsmAnd → Confidentialité et sécurité → Identifiants*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

Un **UUID** (*Unique User Identifier*) est généré pour chaque installation de l'application OsmAnd et envoyé aux serveurs lors du chargement de la carte.

- Un UUID aléatoire est utilisé pour télécharger des cartes hors ligne depuis les serveurs OsmAnd afin de contrôler l'utilisation rationnelle des ressources du serveur, de prévoir l'utilisation du trafic et de fournir des rapports mensuels généraux sur les téléchargements de cartes.
- L'UUID change tous les 3 mois.  
- À partir de la version 4.3 d'OsmAnd, vous pouvez désactiver la collecte de données utilisateur lors de l'utilisation de l'application OsmAnd. L'UUID ne sera alors pas envoyé avec les demandes de téléchargement.  
- Vous pouvez lire plus d'informations dans les [Conditions d'utilisation (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Historique {#history}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

L'application enregistre l'historique des données précédemment saisies (historique) dans les catégories suivantes : [Recherche](../search/search-history.md), [Navigation](../navigation/setup/route-navigation.md#history-of-previous-routes), [Marqueurs de carte](../personal/markers.md#history). À l'aide du commutateur sur l'onglet approprié, vous pouvez *Activer / Désactiver* la journalisation pour certaines catégories d'entrées. Vous pouvez également [gérer](#history) (afficher, supprimer et partager) les données précédemment enregistrées.  

- ***Sauvegarder en tant que fichier*** (*Android*) ou ***Exporter*** (*iOS*) est utilisé pour créer [un fichier de sauvegarde](../personal/import-export.md#export) de votre historique.
- ***Effacer tout l'historique*** (*Android*) ou ***Supprimer tout l'historique*** (*iOS*) est utilisé pour supprimer toutes les entrées d'historique enregistrées jusqu'au moment de la suppression.

<br/>

**Partager et supprimer l'historique.**

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Vous pouvez supprimer un ou plusieurs éléments de la liste de l'historique ou les partager sous forme de fichier (pour accéder à ces fonctions *sous iOS*, appuyez sur le bouton ***Modifier***).  
- Pour supprimer ou exporter plusieurs enregistrements simultanément, cochez les cases à côté des enregistrements requis et appuyez sur les boutons **Exporter** ou **Supprimer**.  


### Proxy {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![General Settings Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

Le paramètre **<Translate android="true" ids="proxy_pref_title"/>** vous permet de configurer un [proxy HTTP](https://en.wikipedia.org/wiki/Proxy_server) pour toutes les requêtes réseau. Vous pouvez définir l'*Hôte proxy* et le *Port proxy*.  


## Autre {#other}

Dans cette section des paramètres OsmAnd, vous pouvez configurer les notifications que vous recevez, le service de localisation et la manière dont les paramètres de votre application sont enregistrés.

### Dialogues et notifications {#dialogs-and-notifications}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![General Settings notifications Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![General Settings Dialogs iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

Le paramètre **<Translate android="true" ids="dialogs_and_notifications_title"/>** vous permet d'activer/désactiver les pop-ups, les dialogues et les notifications.  

- *Message de démarrage* comprend les promotions, les quiz, les événements, etc.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) supprime l'affichage des réductions d'applications et des messages d'événements locaux spéciaux.
- [*Dialogue de téléchargement de carte*](../start-with/download-maps.md#download) vous informe que des cartes spécifiques peuvent être téléchargées.


### Source de localisation {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*Android uniquement*)

![Auto-backup](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd vous offre un choix de services pour déterminer votre position. Il est recommandé de lire plus d'informations sur la [Permission de localisation](../start-with/first-steps.md#permission-to-access-the-location) et le [Dépannage](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) pour cette section.

***Android*** :

- Vous pouvez choisir les services *Google Play* ou *Android API* qu'OsmAnd utilisera pour déterminer votre position. Cela peut être utile pour les appareils sans *Google Play Services* ou en cas de données de position ou d'altitude inexactes lors de l'enregistrement de traces.
- OsmAnd reçoit des données des ressources *Google Fused Location Providers* et *Android GPS and Network Providers*. Vous pouvez changer la **<Translate android="true" id="location_source" />** dans : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS*** :

- Le système iOS utilise l'*iOS API* pour déterminer la position.  
- Tous les paramètres de localisation OsmAnd se trouvent dans les paramètres de l'appareil iOS : *Réglages → OsmAnd maps → Localisation*  
- Confidentialité des services de localisation : *Réglages → Confidentialité → Services de localisation*


### Sauvegarde automatique {#auto-backup}

<InfoAndroidOnly />

![General Settings notifications Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android ou OsmAnd Cloud peuvent enregistrer vos données et les paramètres de votre application.

- Par défaut, vos *paramètres OsmAnd* et les marqueurs de carte [*Favoris*](../personal/favorites.md#automatic-favorites-backup) sont automatiquement sauvegardés par le système Android. Cela vous permet de les restaurer sur de nouveaux appareils ou après avoir réinstallé l'application.

- Veuillez noter que la taille de la sauvegarde est limitée à *25 Mo*.

- Pour trouver les fichiers de sauvegarde, utilisez une application de gestion de fichiers tierce.  
    *NOTE : Vous pouvez trouver les fichiers de sauvegarde à l'aide du gestionnaire de fichiers Android : Android → data → net.osmand → files → backup, mais sachez que dans les versions récentes d'Android, l'accès aux répertoires système est limité.*  

**Si vous utilisez [*OsmAnd Cloud*](../personal/osmand-cloud.md), il est recommandé de désactiver cette option de sauvegarde par défaut pour éviter toute confusion lors de la réinstallation.**


## Légal {#legal}

OsmAnd peut vous [avertir des radars](../navigation/guidance/navigation-settings.md#screen-alerts), mais uniquement si les lois de votre pays le permettent.


### Désinstaller les radars {#uninstall-speed-cameras}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Ce paramètre vous permet d'activer ou de désactiver les POI avec des radars, vous devez redémarrer l'application OsmAnd pour que les modifications prennent effet.
  
Dans certains pays ou régions, l'utilisation d'applications d'avertissement de radar est illégale. Vous devez faire un choix en fonction des lois de votre pays. Sélectionnez **Garder actif**, et vous recevrez des alertes et des notifications de radar. Sélectionnez **Désinstaller** et toutes les données liées aux radars, telles que les avertissements, les notifications et les POI, seront supprimées jusqu'à ce que vous réinstalliez complètement OsmAnd.  

Lisez les alertes de radar sur votre itinéraire dans l'article Widgets de navigation dans la section *[Widget d'alerte](../widgets/nav-widgets.md#alert-widget)*.


## Articles connexes {#related-articles}

- [Profils (Paramètres)](./profiles.md)
- [Importation / Exportation](../personal/import-export.md)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)

### Dépannage {#troubleshooting}

- **Android 12+ (changer de dossier de stockage)**. De nouvelles directives d'accès au stockage ont été mises en œuvre dans les versions Android 11-12. Ces changements affectent particulièrement le stockage des cartes sur les cartes SD, entraînant des performances d'accès aux fichiers considérablement plus lentes et des limitations d'accès plus strictes aux dossiers des cartes SD sur Android 11 et 12. Pour savoir comment résoudre ce problème, consultez la section [**Dépannage**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Source de localisation pour les problèmes d'altitude**. Google Play a modifié sa politique, et pour s'y conformer, OsmAnd, à partir de la version 3.9, doit utiliser les services Google Play pour obtenir des corrections de localisation en arrière-plan. Lisez plus d'informations dans la section [Dépannage](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).

> *Cet article a été mis à jour pour la dernière fois en novembre 2024*