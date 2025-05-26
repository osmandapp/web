---
source-hash: a98044e33d8b25d364eec99b99719b87377a06477d63a0eeb88141e73f48378f
sidebar_position: 9
title:  Édition OpenStreetMap
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Aperçu {#overview}

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) est une communauté mondiale qui vise à créer une carte géographique détaillée et gratuite du monde et à fournir des données open source à jour à chaque utilisateur. Le plugin d'édition OpenStreetMap vous permet de contribuer à la communauté.

Avec OsmAnd et le plugin d'édition OSM, vous pouvez facilement apporter vos propres informations à OpenStreetMap.org, par exemple pour créer ou modifier des [POI](#create--modify-poi), ajouter ou commenter des [notes](#create--modify-osm-note), et télécharger des [traces](#upload-gps-track) GPX enregistrées.

## Paramètres de configuration requis {#required-setup-parameters}

Pour utiliser le plugin *Édition OpenStreetMap*, vous devez effectuer les réglages suivants :

1. Activer le [Plugin](../plugins/index.md#enable--disable).
2. Configurer l'édition OpenStreetMap dans n'importe quel [profil](../personal/profiles.md).
3. Activer l'affichage des *notes OSM (en ligne)* ou des *modifications OSM* sur la carte dans le [menu Configurer la carte](../map/configure-map-menu.md/).


## Paramètres {#settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

:::note
Les paramètres du plugin sont globaux et s'appliquent à tous les profils.
:::

- [Connexion à OpenStreetMap](#authorization). Connectez-vous pour télécharger les modifications nouvelles ou modifiées. Utilisez la méthode sécurisée *OAuth 2.0* ou [connectez-vous sur le site OSM](https://www.openstreetmap.org/login). Pour iOS, le bouton de la méthode OAuth n'est disponible que pour les utilisateurs avec une version d'iOS prise en charge, 16.4
- **<Translate android="true" ids="offline_edition"/>**. Si ce paramètre est activé, les modifications sont d'abord enregistrées localement (bouton *Enregistrer*) et téléchargées sur demande. Si le paramètre est désactivé, les modifications sont téléchargées immédiatement (bouton *Télécharger*).
- **<Translate android="true" ids="use_dev_url"/>** *(Android uniquement)*. Permet d'activer [dev.openstreetmap.org](https://dev.openstreetmap.org/) au lieu de [openstreetmap.org](http://openstreetmap.org/) pour tester le téléchargement de notes OSM, de POI ou de traces GPS. Lorsque cette option est activée, vous êtes automatiquement déconnecté d'OpenStreetMap.org. Ce paramètre n'est disponible dans la liste que lorsque le *plugin de développement OsmAnd* est activé.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Appuyez dessus pour ouvrir [*Menu → Mes lieux → Modifications OSM*](../personal/myplaces.md). Cet onglet liste vos notes OSM non éditées. Les actions suivantes sont disponibles avec la note : *Télécharger*, *Afficher sur la carte*, *Modifier la note OSM*, *Supprimer*. Les notes téléchargées ou supprimées ne sont plus affichées dans la liste.

:::note
Si vous avez un abonnement [OsmAnd Pro](../purchases/android.md#pro-features), les modifications apportées à OSM apparaîtront sur votre carte OsmAnd dans l'heure qui suit. Assurez-vous que les [mises à jour en direct](../personal/maps-resources.md#osmand-live) sont activées.
:::


### Autorisation {#authorization}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Connectez-vous pour contribuer aux modifications et aux fichiers GPX.

- Allez sur [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) et *connectez-vous* ou *inscrivez-vous*.
- Appuyez sur le champ *Connexion à OpenStreetMap* dans l'application OsmAnd, puis appuyez sur le bouton *Se connecter avec OpenStreetMap*.


### Mises à jour de carte gratuites pour les cartographes {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_andr.png)   ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_ios.png)    ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

Le paramètre <Translate android="true" ids="map_updates_for_mappers"/> vous permet d'activer **[OsmAnd live](../personal/maps-resources.md#free-for-osm-mappers)** si vous êtes un contributeur actif d'OpenStreetMap. De cette façon, vous pouvez bénéficier de mises à jour de carte horaires gratuites, contrairement aux mises à jour mensuelles standard. Les contributeurs actifs d'OpenStreetMap.org peuvent avoir droit à des mises à jour de carte horaires illimitées. Connectez-vous à OpenStreetMap pour vérifier votre éligibilité aux mises à jour de carte mensuelles et horaires illimitées.


### Couche d'édition OSM {#osm-editing-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM editing layer Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![OSM editing layer Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![OSM editing layer iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Vous pouvez activer ou désactiver en tant que couche séparée l'affichage des modifications OSM telles que les *notes OSM* (en ligne), les *modifications OSM*, les *balises Fixme*, les *balises Note*, les *icônes aux faibles zooms*, dans la section [Configurer la carte](../map/configure-map-menu.md) du *Menu principal*.


## Créer / Modifier un POI {#create--modify-poi--}

Le plugin d'édition OpenStreetMap vous permet de créer de nouveaux objets sur la carte appelés [points d'intérêt ou POI](../map/point-layers-on-map.md#points-of-interest-poi). Vous pouvez cartographier un nouveau magasin, un point de repère préféré, un banc ou un abri afin que les gens puissent les trouver.

1. Appuyez sur la carte pour placer un nouveau POI, ou appuyez sur un POI non encore chargé.2. Appuyez sur [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
2. Choisissez [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi), et ajoutez son nom et d'autres informations telles que les heures d'ouverture, le site Web, etc. Lorsque vous sélectionnez un POI non téléchargé, *Créer un POI* devient *Modifier un POI*.
3. Selon le paramètre [Édition hors ligne](#settings), vous pouvez enregistrer les données localement ou les [télécharger](../map/map-context-menu#-upload-poi--osm-note).


### Ajouter des balises {#add-tags}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add POI tag ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

Vous pouvez facilement ajouter des [balises](https://wiki.openstreetmap.org/wiki/Tags) OSM au POI. Lorsque vous entrez plusieurs caractères dans la barre de recherche, le programme suggère des balises possibles.

**Modifications hors ligne.**
Vous pouvez afficher, télécharger sur OSM ou supprimer des POI dans *Mes lieux → Modifications OSM*. Vous pouvez également exporter vos modifications de POI OSM vers un [fichier OSC](https://wiki.openstreetmap.org/wiki/OsmChange) et l'importer dans [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).

### Ajouter des types de POI non pris en charge {#add-unsupported-poi-types}

Dans l'onglet *Avancé*, vous pouvez ajouter des types de POI non pris en charge qui peuvent être utiles pour votre tâche spécifique. Cette option vous permet de saisir manuellement les données du POI, étendant ainsi les fonctionnalités de l'application.

Un exemple de types de POI non pris en charge que vous pouvez ajouter est *amenity=freeshops*. Ce type peut être utile si vous souhaitez marquer des magasins gratuits ou des lieux qui fournissent des produits gratuits.

Pour ajouter des types de POI non pris en charge, suivez ces étapes :

1. Ouvrez l'onglet *Avancé*.
2. Appuyez sur *Type de POI*.
3. Entrez la clé *amenity* et la valeur *freeshops* dans les champs appropriés.
4. Remplissez le reste des données requises pour ce POI.
5. Appuyez sur *Ajouter une balise* pour ajouter le nouveau POI à votre base de données.

N'oubliez pas que lors de l'ajout de types de POI non pris en charge, il est important de s'assurer que les données sont saisies correctement pour garantir le bon fonctionnement de l'application et le traitement ultérieur des informations.


## Créer / Modifier une note OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png)   ![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Pour modifier, commenter ou fermer des notes OSM, activez leur affichage sur la carte dans le [menu Configurer la carte](../map/configure-map-menu.md).

- La fonction Notes OSM vous permet d'ajouter des notes à la carte. Dans ces notes, vous pouvez décrire des erreurs ou écrire sur des informations manquantes dans les données OpenStreetMap. Vous et d'autres utilisateurs pouvez laisser des commentaires sur vos notes.
- Vous pouvez aider d'autres utilisateurs en vérifiant leurs questions ou problèmes, en donnant des commentaires, puis en fermant les notes résolues.
- En savoir plus sur les notes OpenStreetMap [ici](https://wiki.openstreetmap.org/wiki/Notes).

Pour créer une note, vous n'avez pas besoin de vous connecter à OpenStreetMap.org, vous pouvez l'envoyer anonymement.

- Appuyez sur la carte où la nouvelle note OSM doit être placée (ou appuyez sur une note non téléchargée), et sélectionnez [Actions](../map/map-context-menu.md#actions).
- Si vous souhaitez ajouter des informations à une note existante ou à une note non téléchargée, modifier un commentaire ou fermer une note, appuyez sur la note OSM sur la carte et sélectionnez l'[action requise](../map/map-context-menu.md#-comment--close-osm-note).
- Vous pouvez télécharger les modifications dès que vous êtes disponible en ligne. Vous pouvez également annuler les modifications avant qu'elles ne soient téléchargées.

:::info
Les notes OSM téléchargées ne sont pas visibles sur les cartes OsmAnd en mode hors ligne.
:::


## Trace GPS {#gps-track}

Les traces GPS que vous avez enregistrées sont utiles pour :

- **Cartographes**. Les traces peuvent être utilisées pour cartographier toutes sortes de chemins.
- **Navigation**. Sur la base des données du fichier GPX que vous avez téléchargées, les applications de navigation et les appareils spéciaux peuvent calculer des traces.
- **Partager des informations** sur les traces et les itinéraires que vous avez enregistrés sur les [cartes basées sur OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info NOTE
Vos traces seront ajoutées aux [traces OSM](https://www.openstreetmap.org/traces) dans l'heure qui suit, où elles seront disponibles pour vous et d'autres utilisateurs pour les visualiser, les rechercher et les utiliser.
:::


### Télécharger une trace GPS {#upload-gps-track}


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OpenStretMap editing plugin GPX to OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

Pour [télécharger la trace GPS](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), suivez les étapes ci-dessous :

- Trouvez la trace requise dans l'onglet [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).
- Appuyez sur le *menu à trois points* à côté du nom de la trace et sélectionnez *Exporter*.

**Paramètres :**

- **<Translate android="true" ids="shared_string_description"/>**. Permet d'ajouter une description à la trace. La description s'applique à toutes les traces sélectionnées. Si vous ne saisissez rien dans le champ, les noms des traces pour chaque trace distincte sont utilisés comme descriptions.
- **<Translate android="true" ids="gpx_tags_txt"/>**. Cet élément dans la section des paramètres vous permet d'ajouter des balises pour identifier la trace. La balise par défaut est "osmand", vous pouvez saisir des balises supplémentaires séparées par des virgules.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Visibilité de la trace pour les utilisateurs OSM :
   - *Public* signifie que la trace est publiquement disponible et affichée sous forme brute dans vos traces GPS, listes de traces GPS et listes de traces horodatées. Les données transmises via l'API ne sont pas référencées avec votre page de trace. Les horodatages des points de trace ne sont pas disponibles via l'API GPS publique et les points de trace ne sont pas ordonnés chronologiquement.
   - *Identifiable* signifie que la trace sera affichée publiquement dans vos points de trace GPS et listes de traces GPS publiques, ce qui signifie que d'autres utilisateurs pourront télécharger la trace brute et l'associer à votre nom d'utilisateur. Les données de points de trace horodatées publiques de l'API GPS transmises via l'API des points de trace renverront à votre page de trace originale.
   - *Traçable* signifie que la trace n'est pas affichée dans les listes publiques, mais que les points de trace traités avec des horodatages (qui ne peuvent pas être directement liés à vous) sont chargés à partir de l'API GPS publique.
   - *Privé* signifie que la trace n'est pas affichée dans les listes publiques, mais que les points de trace dans un ordre non chronologique sont disponibles via l'API GPS publique sans horodatages.
- **<Translate android="true" ids="login_account"/>** - [Compte OSM](https://www.openstreetmap.org/login).

:::info
Vous pouvez sélectionner plusieurs traces à télécharger sur OSM. Pour ce faire, appuyez sur l'icône *Télécharger sur OpenStreetMap* en bas de l'écran, sélectionnez les traces à l'aide de la case à cocher, appuyez sur *Télécharger*, puis sur *Continuer*.
:::

### Générer un fichier OBF {#generate-obf-file}

Vous pouvez créer un fichier OBF avec [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) si vous avez une grande base de données de traces GPX. Il s'agit d'une collection de traces provenant d'osmand.net avec la balise 'gpsies', d'une collection de traces téléchargées depuis OpenStreetMap ou de votre propre collection.


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Cet article a été mis à jour pour la dernière fois en mai 2024*