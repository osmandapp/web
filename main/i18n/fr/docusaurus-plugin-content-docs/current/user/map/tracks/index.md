---
source-hash: 6aec601164666a3a81eb5d95bdecc9963a7c4f7ddbac1cea35f42845786713b8
title: Tracks
sidebar_position: 2
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

OsmAnd dispose de nombreuses fonctionnalités puissantes pour afficher divers itinéraires sur la carte. Les itinéraires peuvent être créés dans le cadre de la navigation, via la fonction Planifier un itinéraire, importés sous forme de traces GPX, enregistrés via le plugin Enregistrement de trajet, ou parcourus et sélectionnés à partir des données OpenStreetMap.

## Types de traces {#types-of-tracks}

[Traces (GPX)](#display-tracks-on-the-map) - trajet enregistré ou planifié, sauvegardé au [format GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Ce type d'itinéraire peut être importé d'une source externe, créé dans l'application ou enregistré par vous. Un fichier GPX peut contenir un, deux ou trois des types de données suivants :

- Trace sous forme de ligne (***Géométrie***). Le fichier contient un tableau de points ```<trkpt>```, chaque point ayant une localisation et des attributs optionnels tels que l'heure, la vitesse, l'altitude, etc. Ces traces sont affichées sur la carte sous forme de lignes pleines.
- Trace sous forme d'itinéraire (***Itinéraire***). Le fichier contient un tableau de points ```<rtept>```, chaque point étant décrit comme un point intermédiaire de l'itinéraire. La connexion des points au sein d'un itinéraire dépend de la manière dont ils doivent être liés, soit comme de petits segments d'itinéraire, soit par une ligne droite. Ces traces sont affichées sur la carte sous forme de lignes pointillées.
- Points de cheminement (***Points***). Le fichier contient des points ```<wpt>``` avec des attributs. Les points de cheminement sont affichés sur la carte sous forme de points circulaires. Vous pouvez les toucher pour obtenir des informations supplémentaires.

OsmAnd peut créer des traces avec 1 à 3 combinaisons. [Planifier un itinéraire](../../plan-route/create-route.md) crée une trace avec ***Géométrie*** et ***Itinéraire*** ; si vous l'enregistrez en tant que ***Trace simplifiée***, seule la ***Géométrie*** sera conservée. [L'enregistrement de trace](../../plugins/trip-recording.md#new-track-recording) ne crée que la ***Géométrie***, mais vous pouvez également y ajouter des ***Points*** via le menu contextuel.

## Afficher les traces sur la carte {#display-tracks-on-the-map}

Vous pouvez gérer la visibilité des traces en choisissant celles à afficher ou à masquer à partir de plusieurs menus : le [menu Mes lieux](#my-places), le [menu Configurer la carte](#configure-map) et le [menu contextuel de la trace](#track-context-menu). Cette flexibilité vous permet de basculer rapidement entre différentes traces, garantissant que seules les traces pertinentes sont visibles sur votre carte à tout moment.

### Configurer la carte {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Configurer les traces de la carte Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png) ![Configurer les traces de la carte Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Configurer les traces de la carte iOS](@site/static/img/personal/tracks/follow_track_1_ios.png) ![Configurer les traces de la carte iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

L'option *Configurer la carte* vous permet de gérer rapidement l'affichage de toutes les traces récemment affichées, en vous permettant de basculer la visibilité pour un groupe de traces. Le tri des traces suit l'ordre configuré dans l'onglet *Mes lieux → Traces*. Vous pouvez accéder au [Menu des traces](../../personal/tracks/manage-tracks.md#track-menu) en appuyant longuement sur un élément de trace. De plus, dans ce menu, vous pouvez modifier l'apparence de plusieurs traces sélectionnées simultanément.

### Mes lieux {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Mes lieux avec traces sur Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → appui long sur la trace GPX choisie → Afficher sur la carte*

![Menu contextuel d'une trace sur iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

Dans [Mes lieux *→* onglet Traces](../../personal/tracks/manage-tracks.md#manage-tracks) pour afficher la trace sur la carte, vous devez :

- *Android* - appuyez sur le *menu à trois points* dans le champ de la trace requise.
- *iOS* - appuyez longuement sur la trace requise dans la liste.

### Menu contextuel de la trace {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aperçu du menu contextuel de la trace Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aperçu du menu contextuel de la trace iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Lorsque vous sélectionnez une trace sur la carte ou ouvrez le [menu contextuel de la trace](./track-context-menu.md) après avoir enregistré ou importé une trace, vous pouvez contrôler sa visibilité sur la carte. Utilisez simplement les boutons *Afficher* ou *Masquer* pour afficher ou supprimer la trace de la vue de la carte.

## Analyser la trace sur la carte {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *Appuyez sur la trace → Onglet Trace → <Translate android="true" ids="analyze_on_map"/>*

![Menu de la trace, analyser sur la carte Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png) ![Menu de la trace, analyser sur la carte, distance Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *Appuyez sur la trace → Onglet Trace → <Translate ios="true" ids="analyze_on_map"/>*

![Menu de la trace, analyser sur la carte](@site/static/img/personal/tracks/track_analyze_ios.png) ![Menu de la trace, analyser sur la carte](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Cet outil fournit une analyse détaillée des données de la [trace](../../map/tracks/track-context-menu.md#options) à l'aide de graphiques et de cartes.

- Les **données du graphique (axe Y)** affichent : *Altitude*, *Pente*, *Vitesse*, [*Données du capteur externe*](../../plugins/external-sensors.md), et des combinaisons de jusqu'à deux options si elles sont contenues dans les données de la trace.
- La **dimension du graphique (axe X)** représente : *Distance*, *Temps* et *Heure de la journée*.
- **Interaction toucher/glisser**. Touchez un graphique pour afficher des informations sur un point spécifique de la trace. Glisser sur le graphique met en évidence l'emplacement approprié sur la carte et affiche les détails dans la barre d'informations.
- **Mise à l'échelle**. Utilisez un [geste à deux doigts](../../map/interact-with-map.md#gestures) pour mettre à l'échelle le graphique pour une visualisation plus détaillée.

### Suivre ma position {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de la trace, analyser sur la carte 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Menu de la trace, analyser sur la carte 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de la trace, analyser sur la carte](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png) ![Menu de la trace, analyser sur la carte](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Appuyez sur le bouton [Ma position](../../map/interact-with-map.md#my-location-and-zoom) pour synchroniser la vue de la carte et le graphique avec votre position.

- L'**échelle du graphique** reste la même, et la **barre d'informations** est fixée à 1/4 sur le côté gauche.
- Au fur et à mesure que vous vous déplacez, le **graphique glissera** de gauche à droite, affichant des informations en avance sur votre trace.
- Aucun autre widget n'est affiché sur cet écran.
- Cette fonctionnalité est utile pour la randonnée et le cyclisme lorsque vous naviguez sur la trace.

## Articles connexes {#related-articles}

- [Apparence de la trace](./appearance.md)
- [Menu contextuel de la trace](./track-context-menu.md)
- [Naviguer par trace](../../navigation/setup/gpx-navigation.md)
- [Routes sur la carte](https://docs.osmand.net/blog/routes) article de blog
- [Configurer la carte](../../map/configure-map-menu.md)
- [Traces GPX](../../personal/tracks/index.md)
- [Planifier un itinéraire](../../plan-route/index.md)
- [Enregistrement de trajet](../../plugins/trip-recording.md)

> *Dernière mise à jour : novembre 2024*