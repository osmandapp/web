---
source-hash: 61247292af1aa1532bdbb133f67761a221b4967bdccb328e710358ccdfd2084c
sidebar_position: 2
title: Gérer les traces
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

Toutes les traces dans OsmAnd sont stockées dans un onglet de *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd traite le fichier de trace au [format GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), mais les formats [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) et [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) peuvent être importés et convertis en GPX. Pour en savoir plus sur les différents types de traces, consultez l'article [Traces sur la carte](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Gérer les traces Vue d'ensemble Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gérer les traces Vue d'ensemble iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Créer une trace {#create-a-track}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Planifier un itinéraire modifier-trace-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planifier un itinéraire modifier-trace-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Vous pouvez ajouter des traces dans OsmAnd de la manière suivante :

1. **[Importer](./manage-tracks.md#import--export-track)** une trace depuis une source externe.
2. Créer une nouvelle trace dans l'application à l'aide de l'outil **[Planifier un itinéraire](../../plan-route/create-route.md)**.
3. Enregistrer une trace dans l'application à l'aide du plugin **[Enregistrement de trajet](../../plugins/trip-recording.md)**.
4. Saisir plusieurs points par coordonnées et les enregistrer en tant que trace à l'aide de l'outil **[Saisie de coordonnées](../../plan-route/coordinate-input.md)**.
5. Vous pouvez également ajouter des **points de passage** à une nouvelle trace via le **[Menu contextuel](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint)**.


## Gérer les traces {#manage-tracks}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> onglet*

![Mes lieux avec des traces dans Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> onglet*

![Mes lieux avec des traces dans iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Toutes les traces jamais enregistrées, créées ou importées sont automatiquement affichées dans le dossier [Mes lieux](../../personal/myplaces.md) dans l'onglet *Traces*. Elles sont organisées par dossier ou affichées dans une liste en dessous.


### Menu des traces {#track-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> onglet*

![Mes lieux avec des traces dans Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> onglet*

![Menu contextuel d'une trace dans iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Chaque trace, comme les dossiers, dispose d'un menu, vous permettant de gérer les traces efficacement. Voici comment y accéder :

- *Android* - appuyez sur le *menu à trois points* dans le champ de la trace.
- *iOS* - appuyez longuement sur la trace requise dans la liste.

Le menu propose les actions suivantes :

- **Afficher/Masquer sur la carte** — Affiche ou masque les traces sélectionnées sur la carte, représentant visuellement leur emplacement.

- [Ouvrir](../../map/tracks/index.md#configure-map) (*iOS*) — Ce paramètre est disponible dans le menu Configurer la carte. Situé dans le *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, il vous permet d'accéder au [menu contextuel de la trace sélectionnée](../../map/tracks/track-context-menu.md) lorsque vous appuyez dessus.

- **Apparence** (*iOS*) — Personnalisez l'[apparence des traces](../../map/tracks/appearance.md) selon vos préférences.

- **Navigation** (*iOS*) — Lance la [navigation](../../navigation/setup/gpx-navigation.md) le long de la trace sélectionnée.

- **Analyser sur la carte** (*Android*) / **Analyser** (*iOS*) — Ouvre l'outil [Analyser sur la carte](../../navigation/setup/route-details.md#analyze-on-map) dans les détails de l'itinéraire pour une analyse plus approfondie.

- **Partager** — Permet de partager la trace sélectionnée avec d'autres.

- **Télécharger les modifications sur OSM** (*iOS*) — [Téléchargez les modifications](../../plugins/osm-editing.md#gps-track) que vous avez apportées à la trace directement sur *OpenStreetMap*.

- **Modifier** (*iOS*) — Utilisez l'outil [Planifier un itinéraire](../../plan-route/create-route.md#modify-gpx-track) pour modifier les traces.

- **Dupliquer** (*iOS*) — Crée une copie de la trace sélectionnée.

- **Renommer** — Change le nom de la trace sélectionnée pour une meilleure organisation.

- **Déplacer** — Vous permet de déplacer la trace sélectionnée vers un autre dossier.

- **Exporter** (*Android*) — Naviguez vers *Menu → Paramètres → Onglet Actions* pour exporter toutes les traces d'un dossier.

- **Supprimer** — Supprime définitivement la trace sélectionnée qui n'est plus nécessaire.


### Rechercher {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Fonction de recherche de traces dans Mes lieux Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Fonction de recherche de traces dans Mes lieux iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Appuyez sur le bouton &#x1F50D; en haut de l'écran de l'appareil pour ouvrir le menu de tri de la liste des traces.  

Disponible :

- Recherche par nom de trace.
- [Trier par](#sort-by) pour une meilleure recherche si vous ne vous souvenez pas du titre.
- [Filtrer](./smart-folder.md#search-filter) (*Android uniquement*) si vous avez besoin des caractéristiques spécifiques de la trace.


### Mode de sélection {#selection-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Fonction de tri des traces dans Mes lieux Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mes lieux traces iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

L'élément de menu **Sélectionner** offre des options pour gérer les dossiers et les traces. Cette fonctionnalité vous permet de sélectionner plusieurs traces ou dossiers de traces. Vous pouvez également sélectionner toutes les traces et tous les dossiers en appuyant sur le bouton spécial **Tout sélectionner**.

Une fois que vous avez fait votre choix, les étapes suivantes sont fournies :  

- **Afficher sur la carte** — Avec cette fonctionnalité, vous pouvez afficher les traces sélectionnées sur la carte pour mieux comprendre leur emplacement et leur relation les unes par rapport aux autres.

- **Partager** (*Android*) / **Exporter** (*iOS*) — Si vous souhaitez partager des données sélectionnées avec d'autres utilisateurs ou les enregistrer sur un service cloud, la fonction *Partager/Exporter* vous permet d'envoyer des traces et des dossiers en utilisant différentes méthodes de partage.

- **Télécharger sur OpenStreetMap** — Vous pouvez soumettre les traces sélectionnées à OpenStreetMap, contribuant ainsi au développement et à l'amélioration des données.

- **Déplacer** — Vous pouvez organiser vos données en déplaçant les traces et les dossiers sélectionnés vers d'autres dossiers.

- [Changer d'activité](../../map/tracks/track-context-menu.md#track-information-activity) — Cette action vous permet de changer le type d'activité, par exemple en *Voiture*, *Sport mécanique d'aventure*, *Randonnée* ou autres, pour la trace sélectionnée.

- [Changer l'apparence](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Cette option vous permet de personnaliser l'apparence des traces sélectionnées, les rendant plus visibles et reconnaissables sur la carte.

- **Supprimer** — Si les traces ou les dossiers sélectionnés ne sont plus nécessaires, la fonction Supprimer vous permet de les supprimer, l'application offrant des options de confirmation pour éviter toute suppression accidentelle.


### Trier par {#sort-by}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Fonction de tri des traces dans Mes lieux Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Fonction de tri des traces dans Mes lieux iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd offre un moyen facile de trier vos traces, vous aidant à gérer une grande collection ou à trouver rapidement des fonctionnalités spécifiques. Pour accéder au menu de tri, appuyez sur **Trier par** en haut de la liste des traces.

***Options de tri :***

- **Le plus proche** — Affiche les traces les plus proches de votre position actuelle.

- **Dernière modification** — Affiche les traces triées par leur date de modification la plus récente.

- **Nom : A - Z** — Organise les traces par ordre alphabétique de A à Z.

- **Nom : Z - A** — Organise les traces par ordre alphabétique de Z à A.

- **Date la plus récente en premier** — Liste les traces par date de création, la plus récente en haut.

- **Date la plus ancienne en premier** — Liste les traces par date de création, la plus ancienne en haut.

- **Distance la plus longue en premier** — Affiche les traces triées par longueur, la plus longue en haut.

- **Distance la plus courte en premier** — Affiche les traces triées par longueur, la plus courte en haut.

- **Durée la plus longue en premier** — Trie les traces par durée, plaçant la plus longue en haut.

- **Durée la plus courte en premier** — Trie les traces par durée, plaçant la plus courte en haut.

#### Tri des sous-dossiers {#sorting-subfolders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Fonction de tri des traces dans Mes lieux Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Fonction de tri des traces dans Mes lieux iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Si vous souhaitez trier les [sous-dossiers](#folder-actions), accédez au menu à trois points dans le dossier sélectionné et choisissez les [options](#sort-by) requises.  

L'option de tri sélectionnée est appliquée non seulement au sous-dossier actuel, mais également à tous les dossiers imbriqués et à toutes les traces à tous les niveaux. Cela garantit une structure cohérente pour vos données enregistrées.


## Dossier de traces {#track-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![importer plusieurs traces](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contextuel d'une trace dans iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Le menu du dossier de traces vous permet de visualiser, renommer, exporter et gérer les dossiers.

Comment ouvrir le menu du dossier :

- *Android* - appuyez sur le *menu à trois points* dans le champ du dossier.
- *iOS* - appuyez longuement sur le champ du dossier.

***Actions avec un dossier :***

- **Nom** — Affiche le nom du dossier, la date de création et le nombre de traces qu'il contient.

- **Afficher toutes les traces sur la carte** (*Android uniquement*) — Affiche toutes les traces du dossier sur la carte —  
    *REMARQUE : S'il y a beaucoup de traces, cela peut entraîner le blocage de l'appareil.*

- **Modifier le nom** (*Android*) / **Renommer** (*iOS*) — Vous permet de renommer le dossier.

- [Modifier l'apparence par défaut](../../map/tracks/appearance.md) (*Android*) / **Apparence** (*iOS*) — Modifie l'apparence d'affichage de toutes les traces du dossier.

- [Exporter](../../personal/import-export.md) — Ouvre l'onglet *Menu → Paramètres → Actions* pour exporter toutes les traces du dossier en tant que fichier [`.osf`](../../personal/import-export.md#export).

- [Déplacer](#track-folder) — Vous permet de déplacer le dossier vers un autre dossier existant ou d'en créer un nouveau.

- [Supprimer le dossier](#delete-folder) — Supprime le dossier après confirmation.  
    ***REMARQUE : Cette action est irréversible.***


### Statistiques du dossier {#folder-statistics}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> onglet*

![Mes lieux avec des traces dans Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> onglet*

![Mes lieux avec des traces dans iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

En bas de la liste dans l'onglet *Traces*, et en dessous de la liste des traces **dans chacun de vos dossiers**, se trouve une section d'informations qui vous permet de visualiser les statistiques récapitulatives globales des traces dans le dossier sélectionné. Toutes les valeurs sont affichées dans les [unités](../../personal/profiles.md#units--formats) que vous avez sélectionnées.

- *Nombre de **traces** dans le dossier* — Affiche le nombre de traces contenues dans le dossier sélectionné.

- *Somme totale des* **distances** — La longueur totale de toutes les traces dans le dossier sélectionné, mesurée dans les unités que vous avez sélectionnées, est affichée.

- *Somme des* **montées** — Les données indiquent l'élévation verticale totale de toutes les traces dans le dossier sélectionné.

- *Somme des* **descentes** — Ce paramètre est la somme des descentes verticales sur toutes les traces du dossier sélectionné.

- *Somme de la* **durée** *du temps* — Affiche le temps total nécessaire pour parcourir toutes les traces du dossier sélectionné.

- *Taille totale des fichiers téléchargés en Mo* — La taille totale des fichiers téléchargés en mégaoctets indique l'espace que toutes les traces du dossier sélectionné occupent sur votre appareil.


### Actions du dossier {#folder-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Fonction de tri des traces dans Mes lieux Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Mes lieux traces iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Les actions dans le dossier vous aident à organiser, trier et importer des traces, afin de structurer vos données de navigation.  

Comment ouvrir les actions du dossier :

- Ouvrez l'onglet Traces dans Mes lieux.
- Naviguez vers le dossier que vous souhaitez gérer.
- Appuyez sur le *menu à trois points* dans le coin supérieur droit pour ouvrir le menu des actions du dossier.

***Actions dans le menu du dossier :***

- [Sélectionner](#selection-mode) — Appuyez sur les dossiers et les traces requis pour appliquer des actions à partir du menu en *mode sélection*.

- [Trier les sous-dossiers](#sort-by) — Applique un ordre de tri (par exemple, par nom, par date) à tous les sous-dossiers et traces à chaque niveau.

- [Ajouter un dossier intelligent](../tracks/smart-folder.md#how-to-create-smart-folder) — Trie automatiquement les itinéraires et les traces en fonction des critères que vous définissez.

- [Importer](#import) — Télécharge des fichiers GPX ou d'autres fichiers de traces depuis votre appareil vers OsmAnd pour une utilisation hors ligne.

- **Ajouter un nouveau dossier** — Pour organiser vos itinéraires et traces en catégories logiques, placez-les dans différents dossiers. Cela aide à structurer vos informations de navigation.


### Supprimer le dossier {#delete-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> onglet*

![Mes lieux avec des traces dans Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> onglet*

![Menu contextuel d'une trace dans iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Vous pouvez supprimer un dossier avec toutes les traces qu'il contient. Pour ce faire :

- Appuyez sur le *menu à trois points* dans le champ du dossier à supprimer.
- En bas du menu, trouvez l'option **Supprimer le dossier**.
- ***REMARQUE : Cette action est irréversible.***


## Importer / Exporter une trace {#import--export-track}

### Importer {#import}

L'outil d'importation vous permet d'ajouter des traces à partir de fichiers externes pour la navigation et l'analyse hors ligne. Méthodes d'importation de traces :

1. **Importation directe de fichiers :**

    - Appuyez sur un fichier GPX, KML ou KMZ à partir d'applications de messagerie, d'e-mails, de Google Drive ou de gestionnaires de fichiers.
    - Sélectionnez Ouvrir dans OsmAnd lorsque vous y êtes invité.
    - La trace importée est enregistrée dans le dossier **Import** dans *Mes lieux*.
    - Étapes : Appuyez sur le fichier GPX → Ouvrir dans OsmAnd.

2. **Importation via le menu *Mes lieux* :**

    - Ouvrez le *menu Mes lieux → Traces*.
    - Sélectionnez le fichier GPX à importer.

    *Options supplémentaires :*

    - **Fichiers GPX à trace unique** - importez la trace entière directement.
    - **Fichiers GPX à traces multiples** - choisissez d'importer le fichier GPX unique ou de sélectionner des traces spécifiques.

***REMARQUE :*** *Les traces ajoutées manuellement au dossier OsmAnd sur votre appareil sont automatiquement importées sans redémarrer l'application.*  


### Exporter {#export}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![importer plusieurs traces](@site/static/img/personal/tracks/import_multitrack.png) ![importer plusieurs traces](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Exporter | Importer |
|:------------|:---------------|
| ![importer plusieurs traces](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Exporter </summary> ![importer plusieurs traces](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![importer plusieurs traces](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Exporter </summary> ![importer plusieurs traces](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

<!--
<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_1.png').default} alt="gpx"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_2.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_3.png').default} alt="gpx"/></td>
    </tr>
</table>
-->

</TabItem>

</Tabs>

Il existe plusieurs façons d'exporter un ou plusieurs fichiers de traces vers n'importe quel messager, e-mail, gestionnaire de fichiers ou application.  

1. Par le [*menu contextuel de la trace → Partager*](../../map/tracks/track-context-menu.md#options).

2. Par le *menu Mes lieux → Traces → Menu Dossier / Trace* :

    - Pour [**exporter une seule trace**](#track-menu), sélectionnez le menu de la trace.
    - Pour [**exporter plusieurs traces**](#track-folder), sélectionnez le menu du dossier requis.

3. Par le [fichier de sauvegarde local](../../personal/import-export.md#export-to-file). Exportation de traces GPX sous forme de fichiers `.osf`.


## Articles connexes {#related-articles}

- [Afficher la trace sur la carte](../../map/tracks/index.md)
- [Analyser sur la carte](../../map/tracks/index.md#analyze-track-on-map)
- [Menu contextuel de la trace](../../map/tracks/track-context-menu.md)
- [Navigation par trace](../../navigation/setup/gpx-navigation.md)
- [Enregistrement de trajet](../../plugins/trip-recording.md)

> *Dernière mise à jour : avril 2025*