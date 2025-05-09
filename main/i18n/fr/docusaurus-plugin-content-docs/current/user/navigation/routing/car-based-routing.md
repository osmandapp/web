---
sidebar_position: 2
title:  Itinéraire voiture (Camion, Moto)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Aperçu

Le calcul d'itinéraire pour les voitures est conçu pour aider les conducteurs à naviguer sur les routes de manière efficace, sûre et confortable, en fournissant des indications personnalisées adaptées aux besoins et préférences uniques de chaque conducteur. Des paramètres d'itinéraire appropriés peuvent aider les conducteurs à gagner du temps et du carburant, et à éviter les dangers sur la route. L'itinéraire le plus rapide est proposé par défaut.

:::info
Le mécanisme de calcul d'itinéraire pour les véhicules terrestres motorisés ne diffère que par quelques paramètres. Les paramètres communs sont décrits dans la section [Voiture](#route-parameters---car) de cet article. [Camion](#route-parameters---truck) et [Moto](#route-parameters---motorcycle) ont leurs propres particularités.
:::

Le calcul d'itinéraire peut être configuré selon vos besoins dans la section [Paramètres d'itinéraire](../../navigation/guidance/navigation-settings.md#route-parameters) des paramètres de navigation du profil correspondant (*Conduite, Camion, Moto*).


## Paramètres d'itinéraire - Voiture

Le calcul d'itinéraire pour les voitures est conçu pour aider les conducteurs à trouver les itinéraires les plus efficaces et les plus directs vers leurs destinations. Il prend en compte les restrictions de conduite courantes, telles que les rues à sens unique, les interdictions de tourner, les zones piétonnes, et aide également à éviter les routes qui ne conviennent pas aux voitures, telles que les routes étroites ou les routes avec des limitations de poids.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Paramètres d'itinéraire voiture Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Paramètres d'itinéraire voiture iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Sélectionnez les routes que vous souhaitez éviter pendant la navigation. Vous pouvez soit [sélectionner une route sur la carte](../../map/map-context-menu/#avoid-road), soit choisir des types de routes dans la liste.  </summary>![Éviter les routes Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Éviter de traverser une frontière vers un autre pays).</li><li>Éviter les [routes de glace](https://wiki.openstreetmap.org/wiki/Key:ice_road) (routes saisonnières dans les régions froides qui sont tracées sur de l'eau gelée) et les [guéés](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parties d'une autoroute où un cours d'eau la traverse). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un type de transport par eau, qui transporte des véhicules à travers des étendues d'eau).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (trains transportant des voitures, qui relient deux endroits difficilement accessibles l'un à l'autre par la route).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (convient uniquement aux véhicules 4x4).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Pour le calcul d'itinéraire en voiture, il est supposé que la surface des routes est [pavée](https://wiki.openstreetmap.org/wiki/Key:surface), sauf indication contraire. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Les restrictions d'accès privé seront ignorées lors du calcul de l'itinéraire.  | Le tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* est utilisé dans OSM pour décrire les restrictions d'utilisation des autoroutes et autres voies de transport, ainsi que des bâtiments, des entrées, des commodités et des entités de loisirs.   |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (uniquement&nbsp;voiture) |  <details><summary> Les routes fermées à la livraison de marchandises seront évitées. </summary>![Livraison de marchandises Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Cette option s'applique uniquement aux véhicules transportant des marchandises dont le poids ne dépasse pas 3,5 tonnes. Si le poids de votre véhicule est supérieur à 3,5 tonnes, vous devez utiliser le [profil Camion](#route-parameters---truck).   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Pour calculer un itinéraire économe en carburant, le moteur de calcul d'itinéraire limite la vitesse en interne à 60 km/h, mais cela ne modifie pas l'heure d'arrivée estimée. Ainsi, dans le cas de 2 itinéraires identiques de départ-arrivée, autoroute (120 km/h) et secondaire (60 km/h), l'itinéraire le plus court sera sélectionné. Pour les routes de service dont la limite de vitesse est <60 km/h, l'itinéraire le plus rapide sera sélectionné. |


## Paramètres d'itinéraire - Camion

:::note
Par défaut, le *profil Camion* est désactivé. Pour utiliser ce profil pour le calcul d'itinéraire, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Le calcul d'itinéraire pour les camions est similaire à celui des voitures, mais est conçu spécifiquement pour les conducteurs de grands véhicules commerciaux. Il prend en compte des facteurs supplémentaires tels que les [restrictions de hauteur, de poids et de largeur](../guidance/navigation-settings.md#size-parameters) du véhicule et la possibilité de transporter des matières dangereuses (voir le tableau ci-dessous). Tous les autres paramètres de calcul d'itinéraire sont identiques à ceux du [calcul d'itinéraire pour les voitures](#route-parameters---car).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Paramètres d'itinéraire camion Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Paramètres d'itinéraire camion iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (pour la **région UE**) | <details><summary> Les autorités locales peuvent interdire le transport de matières dangereuses sur certaines routes ou dans certains tunnels. </summary> ![Transport de matières dangereuses Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Lorsqu'elle est activée, le mécanisme de calcul d'itinéraire pour les camions prend en compte le tag OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Vous pouvez choisir l'une des cinq catégories (*A, B, C, D, E*) de matières dangereuses selon les **restrictions de l'UE**. |
| *<Translate android="true" ids="dangerous_goods"/>* (uniquement si la **région USA** est sélectionnée) | <details><summary> Les règles de transport de matières dangereuses aux États-Unis diffèrent de celles de l'UE. Affiché uniquement si la région de conduite est définie sur US. Vous pouvez sélectionner plusieurs classes. </summary> ![Transport de matières dangereuses Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Sélectionnez l'un des types (de 1 à 9) de matières dangereuses selon les [**restrictions des États-Unis**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Le transport de matières dangereuses est interdit sur certaines routes et dans certains tunnels. <ul><li>1. *Explosifs* </li><li> 2. *Gaz* </li><li> 3. *Liquides inflammables* </li><li> 4. *Solides inflammables* </li><li> 5. *Agents oxydants et peroxydes organiques* </li><li> 6. *Substances toxiques et infectieuses* </li><li> 7. *Substances radioactives* </li><li> 8. *Substances corrosives* </li><li> 9. *Divers* </li></ul> |


## Paramètres d'itinéraire - Moto

:::note
Par défaut, le *profil Moto* est désactivé. Pour utiliser ce profil pour le calcul d'itinéraire, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Le calcul d'itinéraire pour les motos est le processus de création d'un itinéraire spécifiquement optimisé pour les voyages en moto. Ce type de calcul d'itinéraire prend en compte les besoins et préférences uniques des motocyclistes, offrant les meilleures conditions de conduite possibles. Les itinéraires sont tracés en tenant compte d'un certain nombre de paramètres tels que le choix du revêtement routier (par exemple, les mauvaises conditions routières peuvent être préférées ou évitées), l'évitement des embouteillages, l'accessibilité des infrastructures ou la sécurité.


## Autres paramètres d'itinéraire

- L'algorithme de calcul d'itinéraire peut également prendre en compte les limitations temporaires spécifiées dans OpenStreetMap. Cela peut être fait en utilisant l'option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul d'itinéraire.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de calcul d'itinéraire qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ce paramètre est utilisé sur les routes inconnues sans limitation de vitesse. C'est le plus souvent le cas lors de la navigation d'une trace ou d'un itinéraire en ligne. Il doit être réglé en fonction des paramètres de votre véhicule.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Cet article a été mis à jour pour la dernière fois en juillet 2024*

-- source-hash: blake2s: f7b57ee8eb4f2ef54440984e7d52d9062f62c56be504b13a6fd2a96118916596 --
