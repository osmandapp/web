---
source-hash: 7c1cfba29519bc920e59ee85875b29e11b28becce28f84022cd2961167ea4775 
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


## Aperçu

La fonction **Dossier intelligent** offre des outils puissants pour organiser et gérer vos traces. L'une des principales fonctionnalités est la possibilité de filtrer les fichiers dans l'*onglet Traces* du menu *Mes lieux* en fonction de critères tels que la durée, la longueur ou la vitesse.

Cette fonctionnalité vous permet de trouver rapidement des traces spécifiques qui correspondent à vos besoins. Les résultats filtrés peuvent être enregistrés sous forme de **Dossier intelligent**, offrant un accès pratique à des collections de traces mises à jour dynamiquement.


## Filtre de recherche

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> onglet*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> onglet*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Comment appliquer un filtre :***

- Appuyez sur l'icône *Rechercher*, puis sur *Filtre* dans la ligne [*Trier par*](./manage-tracks.md#sort-by).

- **Choisissez les paramètres de filtre requis** pour affiner votre recherche de traces.

- Appuyez sur **Afficher** dans le coin inférieur droit pour voir les résultats filtrés. Le nombre de traces correspondantes apparaît entre parenthèses.

- **Pour effacer** tous les filtres actifs, appuyez sur **Réinitialiser tout**.

- **Pour enregistrer** l'ensemble de filtres actuel en tant que nouveau **Dossier intelligent**, appuyez sur l'icône d'enregistrement dans le coin supérieur droit de l'écran.


### Filtres disponibles

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Nom** — Rechercher des traces par titre. Entrez un nom complet ou partiel pour afficher les traces correspondantes.
- **Dossier** — Sélectionnez un ou plusieurs dossiers pour filtrer les traces par leur emplacement de stockage.
- **Durée** — Filtrer les traces par leur durée enregistrée, en définissant une plage en heures et minutes.
- **Temps en mouvement** — Spécifiez la plage de temps passée en mouvement pendant l'enregistrement.
- **Longueur** — Définissez une plage spécifique en kilomètres ou en miles pour trouver des traces d'une longueur particulière.
- **Vitesse moyenne** — Filtrer les traces par [vitesse moyenne](../../widgets/info-widgets.md#average-speed).
- **Groupe de données de capteur.**
    Appliquer des filtres basés sur les données de capteurs externes, notamment :
    - Vitesse du capteur, moyenne.
    - Vitesse du capteur, max.
    - Fréquence cardiaque, moyenne.
    - Fréquence cardiaque, max.
    - Cadence de vélo, moyenne.
    - Cadence de vélo, max.
    - Puissance de vélo, moyenne.
    - Puissance de vélo, max.
    - Température, moyenne.
    - Température, max.
- **Vitesse max** — Sélectionnez les traces avec des plages de vitesse maximale spécifiques.
- **Montée** et **Descente** — Filtrer les traces en fonction des changements d'altitude positifs ou négatifs.
- **Altitude moyenne** et **Altitude max** — Trouver des traces avec des données d'altitude moyenne ou maximale spécifiques.
- **Date de création** — Filtrer les traces créées dans une plage de dates particulière.
- **Villes les plus proches** — Afficher les traces passant près des villes ou localités sélectionnées.
- **Type d'activité** (*Android uniquement*) — Filtrer les traces en fonction du type d'[activités](../../map/tracks/track-context-menu.md#track-information-activity) enregistré dans le fichier GPX (par exemple, cyclisme, randonnée).
- **Pays** — Filtrer les traces par le pays ou la région où elles ont été enregistrées.
- **Couleur** et **Largeur** — Sélectionnez les traces par couleur ou largeur de ligne attribuée.
- **Autres** — Filtres supplémentaires pour des caractéristiques spéciales :
    - *Visible sur la carte*. Affiche uniquement les traces affichées sur la carte.
    - *Avec points de passage*. Affiche les traces contenant des points de passage spécifiques.


## Dossier intelligent

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

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


### Comment créer un Dossier intelligent

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


### Gestion des Dossiers intelligents

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places Managing Smart Folders Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![My places Managing Smart Foldersn Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places Managing Smart Folders iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![My places Managing Smart Foldersn iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

Le **Dossier intelligent** est affiché avec une icône unique dans la liste des dossiers de l'onglet Traces. Pour gérer le dossier, appuyez sur le *menu à trois points* à côté de celui-ci (*Android*) et *appuyez longuement* (*iOS*) ou ouvrez le dossier et utilisez l'icône dans le coin supérieur droit.

***Actions disponibles :***

- **Détails** — Afficher la liste complète des traces contenues dans le dossier.

- **Afficher toutes les traces sur la carte** (*Android uniquement*) — Afficher toutes les traces du dossier sur la carte.
    *NOTE : Le chargement de nombreuses traces peut affecter les performances.*

- **Modifier le nom** (*Android*) / **Renommer** (*iOS*) — Modifier le nom du dossier pour une identification plus facile.

- **Actualiser** — Mettre à jour manuellement le contenu du dossier pour s'assurer qu'il inclut les dernières traces.

- **Modifier l'apparence par défaut** (*Android*) — Modifie l'apparence d'affichage de toutes les traces du dossier.

- **Modifier le filtre** — Modifier les paramètres de filtre de trace pour le Dossier intelligent actuel. Voir [Filtre de recherche](#search-filter) pour plus de détails.

- **Exporter** — Exporter toutes les traces du Dossier intelligent via la fonction [Importer/Exporter](../../personal/import-export.md). Vous serez redirigé vers *Menu → Paramètres → Onglet Actions*.

- **Supprimer le dossier** — Supprimer le Dossier intelligent sans supprimer ses traces.
    *AVERTISSEMENT : Cette action est irréversible et demandera une confirmation.*

- **Déplacer** (*iOS*) — Vous permet de déplacer le dossier vers un autre dossier existant ou d'en créer un nouveau.

- **Sélectionner** — Utiliser le [Mode de sélection](./manage-tracks.md#selection-mode) pour des actions spécifiques sur les traces dans le dossier.


## Articles connexes

- [Afficher la trace sur la carte](../../map/tracks/index.md)
- [Analyser sur la carte](../../map/tracks/index.md#analyze-track-on-map)
- [Menu contextuel de la trace](../../map/tracks/track-context-menu.md)
- [Navigation par trace](../../navigation/setup/gpx-navigation.md)
- [Enregistrement de trajet](../../plugins/trip-recording.md)

> *Cet article a été mis à jour pour la dernière fois en mars 2025*

