---
source-hash: 7021923c986f2cd60c51183c1396e4c59265f7a68edc042e4249ee005d069bf9
sidebar_position: 0
title:  À propos du routage OsmAnd
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Aperçu {#overview}

Le routage hors ligne d’OsmAnd est basé sur les données OpenStreetMap et propose une variété d’itinéraires pour différents usages. Il s’agit d’une liste de types de routage prédéfinis qui peuvent être étendus. Les règles de navigation sont contenues dans le fichier [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) et sont utilisées pour le routage hors ligne. Le type d’itinéraire change automatiquement lorsque vous changez de profil.


## Types de routage {#routing-types}

Les profils suivants avec leurs types de routage sont prédéfinis dans OsmAnd : *Voiture, Vélo, Marche, Camion, Moto, Cyclomoteur, Transport en commun, Bateau, Avion, Ski, Train, Équitation*. En plus de ceux-ci, vous pouvez créer vos propres profils avec des règles de routage spécifiques ou [modifier l’algorithme de routage OsmAnd](../routing/osmand-routing.md#customize-offline-routing).

:::note

- Les profils [**Camion, Moto, Cyclomoteur, Train, Avion, Bateau et Équitation**](./osmand-routing.md) sont désactivés par défaut. Pour utiliser ces profils, vous devez les activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- Le type de navigation [**Direct vers un point**](./direct-to-point-routing.md) n’a pas son propre profil et peut être utilisé avec n’importe quel profil activé.

- Le routage hors ligne d’OsmAnd peut être **configuré en modifiant le [fichier .xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. Pour plus d’informations, consultez l’article [*Personnaliser le routage hors ligne*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Catégorie | Description | Remarque |
|:------------|:---------------|:---------------|
| *Routage hors ligne OsmAnd*  | Le mécanisme de routage hors ligne d’OsmAnd utilise les cartes pré-téléchargées comme source de données pour le calcul d’itinéraire. | Types de navigation : [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md),  [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Cyclomoteur](./moped-routing.md), [Moto](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Camion](car-based-routing#route-parameters---truck), [Train](./train-routing.md).            |
| *Routage direct vers un point* | Utilise également les cartes hors ligne et fournit un routage en ligne droite (ou navigation *point à point*).  | Types de navigation : *[Ligne droite](./straight-line-routing.md)*,  *[Direct vers un point](./direct-to-point-routing.md)*.  |
| [*BRouter* *(hors ligne)*](./brouter.md)  | Routage hors ligne fourni par l’[application BRouter](https://brouter.de/).  | Disponible pour **Android uniquement**. Lisez la description complète [ici](./brouter.md).   |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | Le routage en ligne construit l’itinéraire en utilisant les ressources des serveurs en ligne via une connexion Internet. | Disponible pour **Android uniquement**. Vous pouvez configurer le [routage en ligne](./online-routing.md) pour construire un itinéraire à partir de divers moteurs de routage en ligne tels que [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), GPX générique.  |

- *[Routage voiture (Camion, Moto)](./car-based-routing.md)* - OsmAnd fournit des instructions de conduite pour les conducteurs de voitures, camions et motos.
- *[Routage vélo (VTT)](./bicycle-based-routing.md)* - Le routage vélo fournit des indications de navigation spécifiquement pour les cyclistes et les passionnés de VTT. Il peut également être utilisé par les conducteurs de cyclomoteurs (scooters).
- *[Routage piéton](./pedestrian-routing.md)* - peut être utilisé non seulement pour se promener en ville, mais aussi lors de randonnées.
- *[Routage cyclomoteur](./moped-routing.md)* - est basé sur le routage vélo, bien qu’il ait ses propres spécificités.
- *[Routage transport en commun](./public-transport-navigation.md)* - peut vous aider lors de vos déplacements en ville.
- *[Routage équestre](./horse-routing.md)* - fournit aux cavaliers les outils dont ils ont besoin pour planifier et profiter de leurs activités équestres.
- *[Routage ski](./ski-routing.md)* - permet aux utilisateurs de planifier et de naviguer lors de randonnées à ski et d’autres activités de sports d’hiver à l’aide de l’application mobile OsmAnd.
- *[Routage train](./train-routing.md)* - offre la possibilité d’utiliser les voies ferrées pour la navigation.
- *[Routage bateau](./boat-navigation.md)* - peut être utilisé pour construire un itinéraire sur les rivières, les canaux, les petits lacs et en pleine mer, mais uniquement lorsque les voies navigables sont marquées dans OpenStreetMap.
- *[Routage ligne droite](./straight-line-routing.md)* - fournit un routage en ligne droite (ou navigation "point à point") qui est recalculé lorsque votre position change.
- *[Routage direct vers un point](./direct-to-point-routing.md)* - fournit un routage en ligne droite (ou navigation "point à point") qui reste stable pendant toute la navigation, contrairement au routage **Ligne droite** (le recalcul d’itinéraire est désactivé).


## Personnaliser le routage hors ligne {#customize-offline-routing}

Vous pouvez également créer votre **propre fichier routing.xml** ou modifier le fichier **routing.xml** par défaut et l’utiliser pour la navigation (uniquement pour les utilisateurs avancés d’OsmAnd).

- Copiez le fichier [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) sur votre appareil. Lisez attentivement les [informations d’aide](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25). À titre d’exemple, consultez le fichier [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) d’un utilisateur d’OsmAnd.
- Après avoir effectué les modifications, le nouveau fichier *routing.xml* peut être ajouté à OsmAnd en appuyant dessus et en sélectionnant l’option pour l’ouvrir dans l’application OsmAnd.
- Sélectionnez le [type de navigation](../../navigation/guidance/navigation-settings.md#navigation-type) modifié pour votre profil.

Plus d’informations sur cette fonctionnalité peuvent être trouvées dans la [*documentation technique*](../../../technical/osmand-file-formats/osmand-routing-xml.md) et sur la [*page GitHub d’OsmAnd*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).


## Éviter des routes spécifiques {#avoid-specific-roads}

:::caution
La fonction Éviter les routes est globale et affecte tous les **[Types de routage](#routing-types)**, à l’exception du *[Routage en ligne](../routing/online-routing.md)* et de *[BRouter](../routing/brouter.md)*.
:::

Il existe deux façons possibles de choisir les routes à éviter lors du calcul d’un itinéraire :

- Sélectionnez le type de route dans la section [Paramètres d’itinéraire](../guidance/navigation-settings.md#route-parameters) des [Paramètres de navigation](../guidance/navigation-settings.md). La description de ce paramètre est fournie dans les articles sur les paramètres des [Types de routage](#routing-types). À titre d’exemple, consultez la description du type de routage [Voiture / Camion / Moto](../routing/car-based-routing.md#route-parameters---car).
- Vous pouvez également sélectionner des routes spécifiques qui ne seront pas utilisées pour le routage en utilisant l’option *[Éviter les routes](../../map/map-context-menu.md#avoid-road)* via le *menu contextuel de la carte* ou en utilisant le *[menu Éviter les routes](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- La route doit être marquée au zoom maximum, car OsmAnd peut mal interpréter le toucher et bloquer, par exemple, le mauvais côté d’une route à deux chaussées ou un trottoir.
- La fonction Éviter les routes spécifiques fonctionne incorrectement avec l’option [Navigation par trace](../setup/gpx-navigation.md) et n’a pas d’impact sur la [navigation simplifiée par marqueurs](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Menu Éviter les routes {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *Bouton Navigation → Paramètres → Éviter les routes...*

![Avoid road menu Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *Bouton Navigation → Paramètres → Éviter les routes*

![Avoid road menu iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

Dans ce menu, vous pouvez annuler la sélection précédente de la route à éviter. Pour ce faire, appuyez sur une croix (Android) ou sur un **"-"** rouge en face de la route que vous souhaitez utiliser pour le calcul d’itinéraire.

En utilisant l’option *Sélectionner sur la carte*, vous pouvez continuer à marquer les routes comme invalides pour le routage sur la carte OsmAnd.

Lorsque vous sélectionnez une route à éviter à l’aide du *menu contextuel de la carte* ou du *menu Éviter les routes*, la liste des routes s’affiche au-dessus de l’écran de la carte.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Avoid road on the map list Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avoid road on the map list iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Exporter / Importer {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Avoid road on the map export Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Avoid road on the map export Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Avoid road on the map export iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Avoid road on the map export iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Selon les paramètres de votre appareil et les applications disponibles, votre liste complète de routes à éviter ou seulement l’une d’entre elles peut être [exportée](../../personal/import-export.md#export) au format `.osf` vers différents emplacements. Sélectionnez les routes que vous souhaitez exporter dans la liste suggérée.

Vous pouvez [importer](../../personal/import-export.md#import) des routes à éviter lors du calcul d’itinéraire à partir d’autres sources au format de fichier `.osf`. Cela peut également être fait en utilisant l’option *Importer* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). Vous pouvez choisir d’importer toutes les données ou seulement quelques routes à éviter (en marquant une route avec une coche dans la liste).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Avoid road on the map import Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avoid road on the map import iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
La manière la plus pratique de synchroniser les routes à éviter entre vos appareils est d’utiliser [OsmAnd Cloud](../../personal/osmand-cloud.md) (abonnement Pro requis).
:::


## Tenir compte des limitations temporaires {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

L’option *Tenir compte des limitations temporaires* permet de prendre en compte les restrictions routières temporaires lors du calcul des itinéraires. Celles-ci peuvent inclure des éléments tels que des travaux routiers ou des fermetures de routes pour une raison quelconque (un accident, des réparations routières, des catastrophes naturelles). L’activation de cette option peut vous aider à éviter des détours ou des retards inattendus. Veuillez noter que ces informations peuvent parfois être obsolètes.
Dans OpenStreetMap, ces informations sont généralement marquées avec la balise [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).


## Section Développement {#development-section}

La **section Développement** des paramètres *Paramètres d’itinéraire* (*Menu → Paramètres → profil d’application → Paramètres de navigation → Paramètres d’itinéraire → Développement*) n’est visible que lorsque le [plugin Développement OsmAnd](../../plugins/development.md) est activé. Elle comprend des paramètres tels que *Type de routage (Android) / Algorithme de routage (iOS), Approximation GPX (Android uniquement), Autozoom et données OsmAnd Live (Android uniquement)*. Lisez l’article [Paramètres de navigation](../../navigation/guidance/navigation-settings.md#development-settings) pour une description détaillée.


> *Dernière mise à jour : Juillet 2024*