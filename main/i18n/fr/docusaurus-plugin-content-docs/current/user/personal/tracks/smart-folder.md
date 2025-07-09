---
source-hash: f590f02934d3bbad431f346fc5f01207a37246d4320a4a5025973bb5ff373b63
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

La fonction **Dossier intelligent** offre des outils puissants pour organiser et gérer vos traces. L'une des principales caractéristiques est la possibilité de filtrer les fichiers dans l'onglet *Traces* du menu *Mes lieux* en fonction de critères tels que la durée, la longueur ou la vitesse.

Cette fonction vous permet de trouver rapidement des traces spécifiques qui correspondent à vos besoins. Les résultats filtrés peuvent être enregistrés en tant que **Dossier intelligent**, offrant un accès pratique à des collections de traces mises à jour dynamiquement.

## Filtre de recherche {#search-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> onglet*

![Mes lieux traces](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> onglet*

![Mes lieux traces](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Comment appliquer un filtre :***

- Appuyez sur l'icône *Rechercher*, puis sur *Filtrer* dans la ligne [*Trier par*](./manage-tracks.md#sort-by).

- **Choisissez les paramètres de filtre requis** pour affiner votre recherche de traces.

- Appuyez sur **Afficher** dans le coin inférieur droit pour voir les résultats filtrés. Le nombre de traces correspondantes apparaît entre parenthèses.

- **Pour effacer** tous les filtres actifs, appuyez sur **Réinitialiser tout**.

- **Pour enregistrer** l'ensemble de filtres actuel en tant que nouveau **Dossier intelligent**, appuyez sur l'icône d'enregistrement dans le coin supérieur droit de l'écran.

### Filtres disponibles {#available-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mes lieux traces](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mes lieux traces](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Nom** — Rechercher des traces par titre. Entrez un nom complet ou partiel pour afficher les traces correspondantes.
- **Dossier** — Sélectionnez un ou plusieurs dossiers pour filtrer les traces par leur emplacement de stockage.
- **Durée** — Filtrer les traces par leur durée enregistrée, en définissant une plage en heures et minutes.
- **Temps en mouvement** — Spécifiez la plage de temps passée en mouvement pendant l'enregistrement.
- **Longueur** — Définissez une plage spécifique en kilomètres ou en miles pour trouver des traces d'une longueur particulière.
- **Vitesse moyenne** — Filtrer les traces par [vitesse moyenne](../../widgets/info-widgets.md#average-speed).
- **Groupe de données de capteur.**
    Appliquer des filtres basés sur des données de capteurs externes, y compris :
    - Vitesse du capteur, moyenne.
    - Vitesse du capteur, max.
    - Fréquence cardiaque, moyenne.
    - Fréquence cardiaque, max.
    - Cadence vélo, moyenne.
    - Cadence vélo, max.
    - Puissance vélo, moyenne.
    - Puissance vélo, max.
    - Température, moyenne.
    - Température, max.
- **Vitesse maximale** — Sélectionnez les traces avec des plages de vitesse maximale spécifiques.
- **Montée** et **Descente** — Filtrer les traces en fonction des changements d'élévation positifs ou négatifs.
- **Altitude moyenne** et **Altitude maximale** — Trouver des traces avec des données d'altitude moyenne ou maximale spécifiques.
- **Date de création** — Filtrer les traces créées dans une plage de dates particulière.
- **Villes les plus proches** — Afficher les traces passant près des villes ou localités sélectionnées.
- **Type d'activité** — Filtrer les traces en fonction du type d'[activités](../../map/tracks/track-context-menu.md#track-information-activity) enregistré dans le fichier GPX (par exemple, cyclisme, randonnée).
- **Pays** — Filtrer les traces par le pays ou la région où elles ont été enregistrées.
- **Couleur** et **Largeur** — Sélectionnez les traces par couleur ou largeur de ligne attribuée.
- **Autre** — Filtres supplémentaires pour des caractéristiques spéciales :
    - *Visible sur la carte*. Affiche uniquement les traces affichées sur la carte.
    - *Avec points de passage*. Affiche les traces contenant des points de passage spécifiques.

## Dossier intelligent {#smart-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Fonction de tri des traces de mes lieux Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mes lieux traces](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

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

1. Appuyez sur l'icône ***menu à trois points*** dans l'onglet *Traces* du menu *Mes lieux*.

2. Sélectionnez **Ajouter un dossier intelligent** dans le menu déroulant.

3. Configurez les paramètres :
   - **Nommez le dossier**. Entrez un nom pour identifier le dossier.
   - Spécifiez les **paramètres de filtre de trace**. Appliquez les filtres requis à l'aide des options de [Filtre](#available-filters) disponibles.

4. **Enregistrez** les paramètres.
    - Appuyez sur **Afficher** pour prévisualiser les traces.
    - Sélectionnez le bouton **Enregistrer** pour finaliser le *Dossier intelligent*.

Le **Dossier intelligent** nouvellement créé mettra automatiquement à jour son contenu avec les traces qui correspondent aux critères sélectionnés.

### Gestion des Dossiers intelligents {#managing-smart-folders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mes lieux Gestion des Dossiers intelligents Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![Mes lieux Gestion des Dossiers intelligents Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mes lieux Gestion des Dossiers intelligents iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![Mes lieux Gestion des Dossiers intelligents iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

Le **Dossier intelligent** est affiché avec une icône unique dans la liste des dossiers de l'onglet Traces. Pour gérer le dossier, appuyez sur le *menu à trois points* à côté de celui-ci (*Android*) et *appuyez longuement* (*iOS*) ou ouvrez le dossier et utilisez l'icône dans le coin supérieur droit.

***Actions disponibles :***

- **Détails** — Affichez la liste complète des traces contenues dans le dossier.

- **Afficher toutes les traces sur la carte** (*Android uniquement*) — Affichez toutes les traces du dossier sur la carte.
    *REMARQUE : Le chargement de nombreuses traces peut affecter les performances.*

- **Modifier le nom** (*Android*) / **Renommer** (*iOS*) — Modifiez le nom du dossier pour une identification plus facile.

- **Actualiser** — Mettez à jour manuellement le contenu du dossier pour vous assurer qu'il inclut les dernières traces.

- **Modifier l'apparence par défaut** (*Android*) — Modifie l'apparence d'affichage de toutes les traces du dossier.

- **Modifier le filtre** — Modifiez les paramètres du filtre de trace pour le Dossier intelligent actuel. Voir [Filtre de recherche](#search-filter) pour plus de détails.

- **Exporter** — Exportez toutes les traces du Dossier intelligent via la fonction [Importer/Exporter](../../personal/import-export.md). Vous serez redirigé vers *Menu → Paramètres → Onglet Actions*.

- **Supprimer le dossier** — Supprimez le Dossier intelligent sans supprimer ses traces.
    *AVERTISSEMENT : Cette action est irréversible et entraînera un message de confirmation.*

- **Déplacer** (*iOS*) — Vous permet de déplacer le dossier vers un autre dossier existant ou d'en créer un nouveau.

- **Sélectionner** — Utilisez le [Mode de sélection](./manage-tracks.md#selection-mode) pour des actions de trace spécifiques dans le dossier.

## Articles connexes {#related-articles}

- [Afficher la trace sur la carte](../../map/tracks/index.md)
- [Analyser sur la carte](../../map/tracks/index.md#analyze-track-on-map)
- [Menu contextuel de la trace](../../map/tracks/track-context-menu.md)
- [Navigation par trace](../../navigation/setup/gpx-navigation.md)
- [Enregistrement de trajet](../../plugins/trip-recording.md)

> *Dernière mise à jour : Mars 2025*