---
source-hash: f73eef279fd6e1edf89b0ae21f1ad4a085ed951e11e56fc824bdfb9a1adae66b
sidebar_position: 3
title: Dossier intelligent (Filtre)
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

La fonctionnalité **Dossier intelligent** fournit des outils puissants pour organiser et gérer vos traces. L'une des fonctionnalités clés est la possibilité de filtrer les fichiers dans l'onglet *Traces* du menu *Mes lieux* en fonction de critères tels que la durée, la longueur ou la vitesse.  

Cette fonctionnalité vous permet de trouver rapidement des traces spécifiques qui correspondent à vos exigences. Les résultats filtrés peuvent être enregistrés en tant que **Dossier intelligent**, offrant un accès pratique à des collections de traces mises à jour dynamiquement.


## Filtre de recherche {#search-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : onglet *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![Traces de Mes lieux](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : onglet *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Traces de Mes lieux](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Comment appliquer un filtre :***

- Appuyez sur l'icône *Rechercher*, puis sur *Filtre* dans la ligne [*Trier par*](./manage-tracks.md#sort-by).

- **Choisissez les paramètres de filtre requis** pour affiner votre recherche de traces.

- Appuyez sur **Afficher** dans le coin inférieur droit pour voir les résultats filtrés. Le nombre de traces correspondantes apparaît entre crochets.

- **Pour effacer** tous les filtres actifs, appuyez sur **Réinitialiser tout**.

- **Pour enregistrer** l'ensemble de filtres actuel comme un nouveau **Dossier intelligent**, appuyez sur l'icône de sauvegarde dans le coin supérieur droit de l'écran.


### Filtres disponibles {#available-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Traces de Mes lieux](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Traces de Mes lieux](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Nom** — Rechercher des traces par titre. Entrez un nom complet ou partiel pour afficher les traces correspondantes.
- **Dossier** — Sélectionnez un ou plusieurs dossiers pour filtrer les traces par leur emplacement de stockage.
- **Durée** — Filtrez les traces par leur durée d'enregistrement, en définissant une plage en heures et minutes.
- **Temps en mouvement** — Spécifiez la plage de temps passée en mouvement pendant l'enregistrement.
- **Longueur** — Définissez une plage spécifique en kilomètres ou en miles pour trouver des traces d'une longueur particulière.
- **Vitesse moyenne** — Filtrez les traces par [vitesse moyenne](../../widgets/info-widgets.md#average-speed).
- **Groupe de données de capteur.**  
    Appliquez des filtres basés sur les données de capteurs externes, y compris :
    - Vitesse du capteur, moyenne.
    - Vitesse du capteur, max.
    - Fréquence cardiaque, moyenne.
    - Fréquence cardiaque, max.
    - Cadence de bicyclette, moyenne.
    - Cadence de bicyclette, max.
    - Puissance de bicyclette, moyenne.
    - Puissance de bicyclette, max.
    - Température, moyenne.
    - Température, max.
- **Vitesse maximale** — Sélectionnez des traces avec des plages de vitesse maximale spécifiques.
- **Montée** et **Descente** — Filtrez les traces en fonction des changements d'altitude positifs ou négatifs.
- **Altitude moyenne** et **Altitude maximale** — Trouvez des traces avec des données d'altitude moyenne ou maximale spécifiques.
- **Date de création** — Filtrez les traces créées dans une plage de dates particulière.
- **Villes les plus proches** — Affichez les traces passant à proximité de villes ou de localités sélectionnées.
- **Type d'activité** — Filtrez les traces en fonction du type d'[activités](../../map/tracks/track-context-menu.md#ttrack-activity-type) enregistré dans le fichier GPX (par exemple, vélo, randonnée).
- **Pays** — Filtrez les traces par le pays ou la région où elles ont été enregistrées.
- **Couleur** et **Largeur** — Sélectionnez les traces par couleur ou largeur de ligne attribuée.
- **Autre** — Filtres supplémentaires pour des caractéristiques spéciales :
    - *Visible sur la carte*. Affiche uniquement les traces affichées sur la carte.
    - *Avec des points de cheminement*. Affiche les traces contenant des points de cheminement spécifiques.


## Dossier intelligent {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Fonction de tri des traces de Mes lieux Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Traces de Mes lieux](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Un **Dossier intelligent** est une collection dynamique de traces automatiquement mise à jour en fonction de critères de filtre spécifiques. Il offre des outils avancés pour organiser, rechercher et gérer efficacement les traces.  

***Avantages des Dossiers intelligents :***

1. **Organisation automatisée.**  
    Inclut automatiquement les traces qui correspondent à des règles prédéfinies, telles que la date de création ou la plage de durée.
2. **Filtrage et recherche.**  
    Permet des recherches rapides dans les traces à l'aide de filtres avancés et de mots-clés.
3. **Actualisation dynamique.**  
    Actualise automatiquement le contenu pour afficher les dernières traces correspondant aux critères.
4. **Personnaliser les règles.**  
    Créez des collections de traces personnalisées en définissant des règles de filtre personnalisées.


### Comment créer un Dossier intelligent {#how-to-create-smart-folder}

Pour créer un **Dossier intelligent**, suivez ces étapes :

1. Appuyez sur l'icône du ***menu à trois points*** dans l'onglet *Traces* du menu *Mes lieux*.

2. Sélectionnez **Ajouter un dossier intelligent** dans le menu déroulant.

3. Configurez les paramètres :
   - **Nommez le dossier**. Entrez un nom pour identifier le dossier.
   - Spécifiez les **paramètres de filtre de trace**. Appliquez les filtres requis en utilisant les options de [Filtre](#available-filters) disponibles.

4. **Enregistrez** les paramètres.
    - Appuyez sur **Afficher** pour prévisualiser les traces.
    - Sélectionnez le bouton **Enregistrer** pour finaliser le *Dossier intelligent*.

Le **Dossier intelligent** nouvellement créé mettra automatiquement à jour son contenu avec les traces qui correspondent aux critères sélectionnés.


### Gérer les Dossiers intelligents {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places Managing Smart Folders Android](@site/static/img/personal/tracks/smart_folder_1_andr.png) ![My places Managing Smart Folders Android](@site/static/img/personal/tracks/smart_folder_2_andr.png)

Le **Dossier intelligent** est affiché avec une icône unique dans la liste des dossiers de l'onglet Traces. Pour gérer le dossier, appuyez sur le *menu à trois points* à côté de celui-ci pour accéder aux actions disponibles :

- **<Translate android="true" ids="shared_string_details"/>** — Affichez la liste complète des traces contenues dans le dossier.
- **<Translate android="true" ids="show_all_tracks_on_the_map"/>** — Affichez toutes les traces du dossier sur la carte.  
    *NOTE : Le chargement de nombreuses traces peut affecter les performances.*
- **<Translate android="true" ids="shared_string_rename"/>** — Changez le nom du dossier pour une identification plus facile.
- **<Translate android="true" ids="shared_string_refresh"/>** — Mettez à jour manuellement le contenu du dossier pour vous assurer qu'il inclut les dernières traces.
- **<Translate android="true" ids="edit_filter"/>** — Modifiez les paramètres de filtre de trace pour le Dossier intelligent actuel. Voir [Filtre de recherche](#search-filter) pour plus de détails.
- **<Translate android="true" ids="shared_string_export"/>** — Exportez toutes les traces du Dossier intelligent via la fonctionnalité [Importer/Exporter](../../personal/import-export.md). Vous serez redirigé vers *Menu → Paramètres → onglet Actions*.
- **<Translate android="true" ids="delete_folder"/>** — Supprimez le Dossier intelligent sans supprimer ses traces.  
    *AVERTISSEMENT : Cette action est irréversible et affichera un message de confirmation.*

Vous pouvez également ouvrir le dossier et appuyer sur le *menu à trois points* dans le *coin supérieur droit* pour accéder à des actions supplémentaires :

- **<Translate android="true" ids="shared_string_select"/>** — Utilisez le [Mode de sélection](./manage-tracks.md#selection-mode) pour des actions spécifiques sur les traces dans le dossier.
- **<Translate android="true" ids="organize_by"/>** — Organisez automatiquement les traces dans le Dossier intelligent en groupes en fonction d'un paramètre sélectionné. Sélectionnez *None* pour afficher toutes les traces sous forme de liste unique, correspondant à la vue par défaut du Dossier intelligent. Les types de regroupement disponibles incluent *Général*, *Date & heure*, *Emplacement*, *Vitesse*, *Altitude & élévation*, et *Données de capteur*. 

Certains paramètres de regroupement ne sont disponibles qu'avec un abonnement OsmAnd Pro. Les paramètres gratuits incluent *Activité*, *Année de création*, et *Ville la plus proche*. Tous les autres paramètres sont marqués avec une étiquette <ProFeature/>.

Pour les paramètres numériques (tels que la distance, la durée, la vitesse ou l'altitude), un dialogue *Définir la taille de l'étape* est disponible. Utilisez le curseur pour définir les plages de valeurs pour le regroupement.

Pour les paramètres PRO, vous pouvez prévisualiser la configuration de regroupement (par exemple, ouvrir le sélecteur de taille d'étape et voir comment les traces sont regroupées), mais l'application de ces modifications nécessite un abonnement actif. Si vous sélectionnez un paramètre PRO ou appuyez sur le bouton Déverrouiller, l'écran Choisir un plan s'ouvrira. Le regroupement précédemment appliqué reste visible même si l'abonnement expire, mais la modification ou l'application d'un nouveau regroupement basé sur PRO nécessite un abonnement actif.

Une fois qu'un paramètre de regroupement est sélectionné, les traces sont affichées sous forme de groupes. Chaque groupe affiche son nom, son icône et le nombre de traces qu'il contient. Appuyez sur un groupe pour ouvrir la liste des traces de ce groupe. Les groupes vides ne sont pas affichés. Les résultats groupés peuvent être triés par ordre alphabétique (A–Z ou Z–A) ou, pour les paramètres numériques, par valeurs les plus élevées ou les plus basses. Appuyez longuement sur un groupe pour afficher toutes les traces du groupe sur la carte ou exporter toutes les traces du groupe.

</TabItem>

<TabItem value="ios" label="iOS">

![My places Managing Smart Folders iOS](@site/static/img/personal/tracks/smart_folder_new_ios.png) ![My places Managing Smart Foldersn iOS](@site/static/img/personal/tracks/smart_folder_new1_ios.png)

Le **Dossier intelligent** est affiché avec une icône unique dans la liste des dossiers de l'onglet Traces. Pour gérer le dossier, effectuez un *appui long* sur le nom du dossier pour accéder aux actions disponibles :

- **<Translate ios="true" ids="shared_string_rename"/>** — Changez le nom du dossier pour une identification plus facile.
- **<Translate ios="true" ids="shared_string_export"/>** — Exportez toutes les traces du Dossier intelligent via la fonctionnalité [Importer/Exporter](../../personal/import-export.md). Vous serez redirigé vers *Menu → Paramètres → onglet Actions*.
- **<Translate ios="true" ids="shared_string_move"/>** — Vous permet de déplacer le dossier vers un autre dossier existant ou d'en créer un nouveau.
- **<Translate ios="true" ids="shared_string_delete"/>** — Supprimez le Dossier intelligent sans supprimer ses traces.  
    *AVERTISSEMENT : Cette action est irréversible et affichera un message de confirmation.*

Vous pouvez également ouvrir le dossier et appuyer sur l'icône dans le *coin supérieur droit* pour accéder à des actions supplémentaires :

- **<Translate ios="true" ids="shared_string_select"/>** — Utilisez le [Mode de sélection](./manage-tracks.md#selection-mode) pour des actions spécifiques sur les traces dans le dossier.
- **<Translate ios="true" ids="shared_string_refresh"/>** — Mettez à jour manuellement le contenu du dossier pour vous assurer qu'il inclut les dernières traces.
- **<Translate ios="true" ids="edit_filter"/>** — Modifiez les paramètres de filtre de trace pour le Dossier intelligent actuel. Voir [Filtre de recherche](#search-filter) pour plus de détails.
- **Organize by** — Organisez automatiquement les traces dans le Dossier intelligent en groupes en fonction d'un paramètre sélectionné. Sélectionnez *None* pour afficher toutes les traces sous forme de liste unique, correspondant à la vue par défaut du Dossier intelligent. Les types de regroupement disponibles incluent *Général*, *Date & heure*, *Emplacement*, *Vitesse*, *Altitude & élévation*, et *Données de capteur*. 

Certains paramètres de regroupement ne sont disponibles qu'avec un abonnement OsmAnd Pro. Les paramètres gratuits incluent *Activité*, *Année de création*, et *Ville la plus proche*. Tous les autres paramètres sont marqués avec une étiquette <ProFeature/>.

Pour les paramètres numériques (tels que la distance, la durée, la vitesse ou l'altitude), un dialogue *Définir la taille de l'étape* est disponible. Utilisez le curseur pour définir les plages de valeurs pour le regroupement.

Pour les paramètres PRO, vous pouvez prévisualiser la configuration de regroupement (par exemple, ouvrir le sélecteur de taille d'étape et voir comment les traces sont regroupées), mais l'application de ces modifications nécessite un abonnement actif. Si vous sélectionnez un paramètre PRO ou appuyez sur le bouton Déverrouiller, l'écran Choisir un plan s'ouvrira. Le regroupement précédemment appliqué reste visible même si l'abonnement expire, mais la modification ou l'application d'un nouveau regroupement basé sur PRO nécessite un abonnement actif.

Une fois qu'un paramètre de regroupement est sélectionné, les traces sont affichées sous forme de groupes. Chaque groupe affiche son nom, son icône et le nombre de traces qu'il contient. Appuyez sur un groupe pour ouvrir la liste des traces de ce groupe. Les groupes vides ne sont pas affichés. Les résultats groupés peuvent être triés par ordre alphabétique (A–Z ou Z–A) ou, pour les paramètres numériques, par valeurs les plus élevées ou les plus basses. Appuyez longuement sur un groupe pour afficher toutes les traces du groupe sur la carte ou exporter toutes les traces du groupe.

</TabItem>

</Tabs>

<!--
The **Smart folder** is displayed with a unique icon in the folder list in the Tracks tab. To manage the folder, tap the *three-dot menu* next to it (*Android*) and *long tap* (*iOS*) or open the folder and use the icon in the top-right corner.

***Available Actions:***

- **Details** — View the complete list of tracks contained in the folder.

- **Show all tracks on the map** (*Android only*) — Display all folder tracks on the map.  
    *NOTE: Loading many tracks may affect performance.*

- **Edit name** (*Android*) / **Rename** (*iOS*) — Change the folder name for easier identification.

- **Refresh** — Manually update the folder's content to ensure it includes the latest tracks.

- **Change default appearance** (*Android*) — Changes the display appearance of all tracks in the folder.

- **Edit filter** — Modify the track filter settings for the current Smart Folder. See [Search Filter](#search-filter) for details.

- **Export** — Export all tracks in the Smart Folder via the [Import/Export](../../personal/import-export.md) feature. You will be redirected to *Menu → Settings → Actions tab*.

- **Delete folder** — Remove the Smart Folder without deleting its tracks.  
    *WARNING: This action is irreversible and will prompt a confirmation message.*

- **Move** (*iOS*) — Allows you to move the folder to another existing folder or create a new one.

- **Select** — Use [Selection Mode](./manage-tracks.md#selection-mode) for specific track actions within the folder.
-->

## Articles connexes {#related-articles}

- [Afficher la trace sur la carte](../../map/tracks/index.md)
- [Analyser sur la carte](../../map/tracks/index.md#analyze-track-on-map)
- [Menu contextuel de la trace](../../map/tracks/track-context-menu.md)
- [Navigation par trace](../../navigation/setup/gpx-navigation.md)
- [Enregistrement de trajet](../../plugins/trip-recording.md)