---
source-hash: ce111fb817b2af0088b93bd35afbad62eef0423d2fce1d657ea681ee62d5388b
title:  Tracés
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

OsmAnd dispose de nombreuses fonctionnalités puissantes pour afficher divers itinéraires sur la carte. Les itinéraires peuvent être construits dans le cadre de la navigation, créés via Planifier un itinéraire, importés en tant que tracés GPX, enregistrés via le plugin Enregistrement de trajet, ou parcourus et sélectionnés à partir des données OpenStreetMap.


## Types de tracés {#types-of-tracks}

[Tracés (GPX)](#display-tracks-on-the-map) - trajet enregistré ou planifié enregistré au [format GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Ce type d'itinéraire peut être importé d'une source externe, créé dans l'application ou enregistré par vous. Un fichier GPX peut contenir l'un des 3 types de données différents, ou tous :

- Tracé sous forme de ligne (***Géométrie***). Le fichier contient un tableau de points ```<trkpt>```, chaque point ayant la position et éventuellement l'heure, la vitesse, l'altitude et d'autres attributs. Ces tracés sont affichés sur la carte sous forme de lignes continues.
- Tracé sous forme d'itinéraire (***Itinéraire***). Le fichier contient un tableau de points ```<rtept>```, chaque point étant décrit comme un point intermédiaire de l'itinéraire. Cela dépend de la manière dont les points d'un itinéraire doivent être connectés, soit sous forme de petits segments d'itinéraire, soit via une ligne droite. Ces tracés sont affichés sur la carte sous forme de lignes pointillées.
- Points de passage (***Points***). Le fichier contient des points ```<wpt>``` avec des attributs. Les points de passage sont affichés sous forme de points circulaires sur la carte. Vous pouvez les toucher pour obtenir des informations supplémentaires.

OsmAnd peut créer des tracés avec 1 à 3 combinaisons. [Planifier un itinéraire](../../plan-route/create-route.md) crée un tracé avec ***Géométrie*** et ***Itinéraire***, si vous l'enregistrez en tant que ***Tracé simplifié***, seule la ***Géométrie*** sera conservée. [Enregistrer un tracé](../../plugins/trip-recording.md#new-track-recording) crée uniquement la ***Géométrie***, mais vous pouvez également y ajouter des ***Points*** via le menu contextuel.


## Afficher les tracés sur la carte {#display-tracks-on-the-map}

Vous pouvez gérer la visibilité des tracés en choisissant ceux à afficher ou à masquer à partir de plusieurs menus : le [menu Mes lieux](#my-places), le [menu Configurer la carte](#configure-map) et le [menu contextuel du tracé](#track-context-menu). Cette flexibilité vous permet de basculer rapidement entre différents tracés, garantissant que seuls les tracés pertinents sont visibles sur votre carte à tout moment.

### Configurer la carte {#configure-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Configurer les tracés de carte Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Configurer les tracés de carte Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Configurer les tracés de carte iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Configurer les tracés de carte iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

L'option *Configurer la carte* vous permet de gérer rapidement l'affichage de tous les tracés récemment affichés, vous permettant de basculer la visibilité pour un groupe de tracés. Le tri des tracés suit l'ordre configuré dans l'onglet *Mes lieux → Tracés*. Vous pouvez accéder au [Menu Tracé](../../personal/tracks/manage-tracks.md#track-menu) en appuyant longuement sur un élément de tracé. De plus, dans ce menu, vous pouvez modifier l'apparence de plusieurs tracés sélectionnés simultanément.

### Mes lieux {#my-places}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Mes lieux avec des tracés dans Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → appuyer longuement sur le tracé GPX choisi → Afficher sur la carte*

![Menu contextuel d'un tracé dans iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

Dans [Mes lieux *→* onglet Tracés](../../personal/tracks/manage-tracks.md#manage-tracks) pour afficher le tracé sur la carte, vous devez :

- *Android* - appuyer sur le *menu à trois points* dans le champ du tracé requis.
- *iOS* - appuyer longuement sur le tracé requis dans la liste.


### Menu contextuel du tracé {#track-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Aperçu du menu contextuel du tracé Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aperçu du menu contextuel du tracé iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Lorsque vous sélectionnez un tracé sur la carte ou ouvrez le [menu contextuel du tracé](./track-context-menu.md) après avoir enregistré ou importé un tracé, vous pouvez contrôler sa visibilité sur la carte. Utilisez simplement les boutons *Afficher* ou *Masquer* pour afficher ou supprimer le tracé de la vue de la carte.


## Analyser le tracé sur la carte {#analyze-track-on-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Appuyer sur le tracé → Onglet Tracé → <Translate android="true" ids="analyze_on_map"/>*  

![Menu tracé analyser sur la carte Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Menu tracé analyser sur la carte distance Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *Appuyer sur le tracé → Onglet Tracé → <Translate ios="true" ids="analyze_on_map"/>*  

![Menu tracé analyser sur la carte](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Menu tracé analyser sur la carte ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Cet outil fournit une analyse détaillée des données du [tracé](../../map/tracks/track-context-menu.md#options) à l'aide de graphiques et de cartes.

- Les **données du graphique (axe Y)** affichent : *Altitude*, *Pente*, *Vitesse*, [*Données de capteur externe*](../../plugins/external-sensors.md), et des combinaisons de jusqu'à deux options si elles sont contenues dans les données du tracé.
- La **dimension du graphique (axe X)** représente : *Distance*, *Temps* et *Heure de la journée*.
- **Interaction par toucher/glisser**. Touchez un graphique pour afficher des informations sur un point spécifique du tracé. Glisser sur le graphique met en évidence l'emplacement approprié sur la carte et affiche les détails dans la barre d'informations.
- **Mise à l'échelle**. Utilisez un [geste à deux doigts](../../map/interact-with-map.md#gestures) pour mettre à l'échelle le graphique pour une visualisation plus détaillée.


### Suivre ma position {#follow-my-location}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu tracé analyser sur la carte 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Menu tracé analyser sur la carte 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu tracé analyser sur la carte](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Menu tracé analyser sur la carte ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Appuyez sur le bouton [Ma position](../../map/interact-with-map.md#my-location-and-zoom) pour synchroniser la vue de la carte et le graphique avec votre position.

- L'**échelle du graphique** reste la même, et la **barre d'informations** est fixée à 1/4 sur le côté gauche.
- Lorsque vous vous déplacez, le **graphique glissera** de gauche à droite, affichant des informations devant votre tracé.
- Aucun autre widget n'est affiché sur cet écran.
- Cette fonctionnalité est utile pour la randonnée et le cyclisme lorsque vous naviguez sur le tracé.  


## Articles connexes {#related-articles}

- [Apparence du tracé](./appearance.md)
- [Menu contextuel du tracé](./track-context-menu.md)
- [Naviguer par tracé](../../navigation/setup/gpx-navigation.md)
- [Routes sur la carte](https://docs.osmand.net/blog/routes) article de blog
- [Configurer la carte](../../map/configure-map-menu.md)  
- [Tracés GPX](../../personal/tracks/index.md)  
- [Planifier un itinéraire](../../plan-route/index.md)  
- [Enregistrement de trajet](../../plugins/trip-recording.md)

> *Cet article a été mis à jour pour la dernière fois en novembre 2024*