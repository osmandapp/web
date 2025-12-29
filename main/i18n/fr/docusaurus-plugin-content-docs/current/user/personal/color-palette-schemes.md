---
source-hash: eb8c4b71007a1c4cfc8c26176511dd3bfc888cd65317d684c37297ecbb8d4fc3
sidebar_position: 5
title:  Schémas de couleurs
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

:::info Fonctionnalité payante

Les schémas de couleurs font partie des fonctionnalités payantes [Maps+](../purchases/index.md) et Pro <ProFeature />.  

:::

Les schémas de couleurs sont utilisés pour la [coloration des traces et itinéraires](#tracks-routes), le [terrain de la carte](#terrain) et la [carte météo](#weather), et représentent une partie distincte des informations qui peuvent être exportées, importées et modifiées pour changer le schéma de couleurs de la carte et la visualisation des données.

Les données de la palette de couleurs sont disponibles dans le menu [*Cartes et ressources*](../personal/maps-resources.md#local-menu).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *Menu → Cartes et ressources → Local → Couleurs*

![Palettes](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *Menu → Cartes et ressources → Local → Couleurs*

![Palette de couleurs](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Types de schémas {#scheme-types}

### Terrain {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Palettes](@site/static/img/personal/color-schemes/palette_new.png) ![Palettes](@site/static/img/personal/color-schemes/palette_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Palette de couleurs](@site/static/img/personal/color-schemes/palette_ios.png) ![Palette de couleurs](@site/static/img/personal/color-schemes/palette_ios_2.png)

</TabItem>

</Tabs>

Les fichiers de terrain (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) définissent 3 [visualisations de terrain](../plugins/topography.md#hillshade-slope-and-altitude-layers) : *Ombrage, Pente* et *Altitude*. Pour chaque type, vous pouvez avoir plusieurs palettes, par exemple, la *pente d'avalanche* est fournie par défaut. Consultez l'article [Topographie](../plugins/topography.md#default-color-scheme) pour plus de détails.

### Traces et itinéraires {#tracks-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Palettes](@site/static/img/personal/color-schemes/track_palette_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Palette de couleurs](@site/static/img/personal/color-schemes/track_palette_ios.png) 

</TabItem>

</Tabs>

Les visualisations de dégradé de ligne utilisent des fichiers de palette (`route_<type_name>_<palette_name>.txt`) pour colorer les traces GPX et les itinéraires :

- Pour les [itinéraires](../navigation/guidance/map-during-navigation.md#color) : *Vitesse (`route_speed_default.txt`), Pente (`route_slope_default.txt`)* et *Élévation (Altitude) (`route_elevation_default.txt`)*.
- Pour les [traces GPX](../map/tracks/appearance#track-colors-in-gpx-files) : *Vitesse, Pente, Vitesse max (`route_maxspeed_default.txt`)* et *Élévation (Altitude)*, ou informations provenant de *capteurs externes*.

### Favoris et points de cheminement {#favorites-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Palettes](@site/static/img/personal/color-schemes/favorites_palette_android.png) ![Palettes](@site/static/img/personal/color-schemes/favorites_palette_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Palette de couleurs](@site/static/img/personal/color-schemes/favorites_palette_ios.png) 

</TabItem>

</Tabs>

La palette `user_palette_default.txt` est utilisée pour les couleurs prédéfinies assignées aux [favoris](./favorites.md#edit--replace--delete) et aux [points de cheminement](https://osmand.net/docs/user/navigation/setup/gpx-navigation#waypoints).

### Météo {#weather}

Les fichiers de palette météo (`weather_cloud.txt`, `weather_precip.txt`, `weather_pressure.txt`, `weather_temperature.txt`, `weather_wind.txt`) définissent la visualisation pour les [couches météo](../plugins/weather.md#weather-layers).


## Paramètres {#settings}

### Modifier la palette {#palette-modify}

Vous pouvez modifier les palettes pour personnaliser l'apparence des cartes et des itinéraires. Vos propres fichiers de palette de couleurs peuvent être ajoutés à OsmAnd en utilisant l'outil d'[import/export](./import-export.md).

- *Traces et itinéraires* : `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_maxspeed_default.txt`, `route_elevation_default.txt`.
- *Terrain* : `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Météo* : `weather_<type_name>.txt`.
- *Favoris et points de cheminement* : `user_palette_default.txt`.

Chaque ligne représente une valeur numérique (pour la palette de couleurs, c'est un index) et une couleur RVB. Par exemple :

```xml
# TXT file named *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 degree RGBA {#0---90-degree-rgba}
0,46,185,0,191
# yellow  {#yellow-}
100,255,222,2,227
# red {#red}
200,255,1,1,255
# violet {#violet}
220,130,1,255,255

```

Après avoir déplacé ce fichier TXT vers *..Android/data/net.osmand/files/color-palette/height_altitude_0-200.txt*, une nouvelle palette apparaîtra dans le menu Schéma de couleurs.

### Importer / Exporter {#import--export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Exportation des actions de profil Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Sauvegarde locale Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Exportation des actions de profil iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Exportation des actions de profil iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

Vous pouvez importer et exporter toutes les palettes de couleurs par défaut et personnalisées disponibles en utilisant l'outil de restauration et de sauvegarde de fichiers d'OsmAnd.

- Ouvrez le *Menu* principal, *Paramètres*, faites défiler jusqu'à la section **Importer/exporter** (*Android*) ou **Sauvegarde locale** (*iOS*), et sélectionnez l'action requise.
- Sélectionnez un ou plusieurs éléments de la liste *Couleur* ou l'option *Tout sélectionner*.
- Tous les fichiers exportés sont enregistrés au format `.osf`.
- Si la taille de vos données sélectionnées est importante, l'application mettra un certain temps à préparer le fichier `.osf`.
- Consultez l'article [*Importer / Exporter*](../personal/import-export.md) pour des informations plus détaillées.

### Légende {#palette}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="couleur"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="couleur"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="couleur"/></td>
    </tr>
</table>


La légende offre un moyen simple de visualiser et de comprendre les différentes marques sur la carte. De nouvelles palettes de couleurs ont été ajoutées pour afficher la [**vitesse** pour les traces](../map/tracks/appearance#track-colors-in-gpx-files), le [**type de ligne** pour les itinéraires](../navigation/guidance/map-during-navigation.md#color), l'[**altitude et la pente** pour le terrain](../plugins/topography.md#default-color-scheme), et toutes les palettes de couleurs des [**couches météo**](../plugins/weather.md#weather-layers).

La légende est générée automatiquement en fonction de la palette sélectionnée et affiche les étapes de dégradé avec les unités appropriées (par exemple, km/h pour la vitesse, % pour la pente, ou mètres pour l'altitude).

### Actions rapides {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Ajouter une action → <Translate ios="true" ids="configure_map"/> → Changer le schéma de couleurs du terrain*

![Schéma de couleurs](@site/static/img/personal/color-schemes/color_scheme_new.png) ![Schéma de couleurs](@site/static/img/personal/color-schemes/color_scheme_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> → &nbsp;  "**＋**"  &nbsp; → <Translate ios="true" ids="add_button"/> → Ajouter une action → <Translate ios="true" ids="configure_map"/> → Changer le schéma de couleurs du terrain*

![Palette de couleurs](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new.png) ![Palette de couleurs](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new_2.png)

</TabItem>

</Tabs>

**Action rapide** pour changer la palette pour le [Terrain](../../user/plugins/topography.md#modify-color-scheme). Ajout de la possibilité de basculer entre les schémas de couleurs du terrain, de manière similaire au basculement entre les couches. Cela peut être fait en utilisant l'outil [Actions rapides](../widgets/quick-action.md#configure-map).  

Lors de la configuration de cette action, vous pouvez sélectionner une ou plusieurs palettes de couleurs de terrain. Si plusieurs palettes sont sélectionnées, chaque appui sur le bouton cyclera à travers les palettes choisies. Vous pouvez également activer ou désactiver la boîte de dialogue intermédiaire pour afficher la liste complète des palettes ou basculer entre elles silencieusement dans un ordre prédéfini.


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres généraux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)