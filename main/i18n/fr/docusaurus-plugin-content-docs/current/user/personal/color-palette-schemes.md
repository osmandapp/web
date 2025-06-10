---
source-hash: ead970e0da14ac537b4760d0b7fd64970b6d1adfce611ce55ab0742f34c9c591
sidebar_position: 5
title:  Jeux de couleurs
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

:::info Fonctionnalité payante

Les jeux de couleurs sont utilisés dans le cadre des fonctionnalités payantes [Maps+](../purchases/index.md) et Pro <ProFeature />.

:::

Les jeux de couleurs sont utilisés pour la [colorisation des itinéraires](#routes), le [terrain de la carte](#terrain) et la [carte météo](#weather). Ils constituent une partie distincte des informations qui peuvent être exportées, importées et modifiées pour changer le jeu de couleurs de la carte et la visualisation des données.

Les données de la palette de couleurs sont disponibles dans le menu [*Cartes et ressources*](../personal/maps-resources.md#local).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Menu → Cartes et ressources → Local → Couleurs*

![Palettes](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *Menu → Cartes et ressources → Local → Couleurs*

![Color palette](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Types de jeux {#scheme-types}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Palettes](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Color palette](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Terrain {#terrain}

Les fichiers de terrain (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) définissent 3 [visualisations de terrain](../plugins/topography.md#hillshade-slope-and-altitude-layers) : *Ombrage, Pente* et *Altitude*. Pour chaque type, vous pouvez avoir plusieurs palettes, par exemple, la *pente d'avalanche* est fournie par défaut.

### Itinéraires {#routes}

Les visualisations de dégradé de ligne utilisent des fichiers de palette (`route_<type_name>_<palette_name>.txt`) pour colorer les traces GPX et les itinéraires :

- Pour les [itinéraires](../navigation/guidance/map-during-navigation.md#color) : *Vitesse, Pente* et *Altitude*.
- Pour les [traces GPX](../map/tracks/index.md#color) : *Vitesse, Pente* et *Altitude, ou informations provenant de capteurs externes*.

### Météo {#weather}

Les fichiers de palette météo (`weather_<type_name>.txt`) définissent la visualisation des [couches météo](../plugins/weather.md#weather-layers).

### Couleurs {#colors}

La palette de couleurs (`user_palette_default.txt`) est simplement utilisée pour les couleurs prédéfinies à attribuer aux [Favoris](./favorites.md), [Traces](./tracks/).


## Légende de la palette {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="couleur"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="couleur"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="couleur"/></td>
    </tr>
</table>


La légende offre un moyen simple de visualiser et de comprendre les différentes marques sur la carte. De nouvelles palettes de couleurs ont été ajoutées pour afficher la [**vitesse** des traces](../map/tracks/index.md#color), le [**type de ligne** des itinéraires](../navigation/guidance/map-during-navigation.md#color), l'[**altitude et la pente** du terrain](../plugins/topography.md#default-color-scheme), et toutes les palettes de couleurs des [**couches météo**](../plugins/weather.md#weather-layers).


## Modifier le fichier de palette {#edit-palette-file}

Vous pouvez modifier les palettes pour personnaliser l'apparence des cartes et des itinéraires. Vos propres fichiers de palette de couleurs peuvent être ajoutés à OsmAnd à l'aide de l'[outil d'importation/exportation](./import-export.md).

- *Itinéraires* : `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Terrain* : `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Météo* : `weather_<type_name>.txt`.
- *Couleur* : `user_palette_default.txt`.

Chaque ligne représente une valeur numérique (pour la palette de couleurs, c'est un index) et une couleur RVB. Par exemple :

```xml
# Fichier TXT nommé *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 degrés RGBA {#0---90-degree-rgba}
0,46,185,0,191
# jaune {#yellow-}
100,255,222,2,227
# rouge {#red}
200,255,1,1,255
# violet {#violet}
220,130,1,255,255

```

Après avoir déplacé ce fichier TXT vers *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, une nouvelle palette apparaîtra dans le menu Jeu de couleurs.


## En savoir plus {#read-more}

### Actions rapides {#quick-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Ajouter une action → Topographie → Changer le jeu de couleurs du terrain*

![Color Scheme](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Ajouter une action → Topographie → Changer le jeu de couleurs du terrain*

![Color palette](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Action rapide** pour changer la palette du terrain. Ajout de la possibilité de basculer entre les jeux de couleurs du terrain, similaire au basculement entre les couches. Cela peut être fait à l'aide de l'[outil Actions rapides](../widgets/quick-action.md#configure-map).


### Importer / Exporter les couleurs {#import--export-colors}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

Vous pouvez importer et exporter toutes les palettes de couleurs par défaut et personnalisées disponibles à l'aide de l'outil de restauration et de sauvegarde de fichiers d'OsmAnd.

- Ouvrez le *Menu* principal, *Paramètres*, faites défiler jusqu'à la section **Importation/exportation** (*Android*) ou **Sauvegarde locale** (*iOS*), et sélectionnez l'action requise.
- Sélectionnez un ou plusieurs éléments dans la liste *Couleur* ou l'option *Tout sélectionner*.
- Tous les fichiers exportés sont enregistrés au format `.osf`.
- Si la taille des données sélectionnées est importante, il faudra un certain temps à l'application pour préparer le fichier `.osf`.
- Consultez l'article [*Importation / Exportation*](../personal/import-export.md) pour plus d'informations détaillées.


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Dernière mise à jour : janvier 2025*