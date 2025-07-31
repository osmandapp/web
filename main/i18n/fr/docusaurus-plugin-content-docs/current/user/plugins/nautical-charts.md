---
source-hash: b955b527f4a6288fa803d731df2f410db4fb91c6a6b0ec46ae14193d525bf995
sidebar_position: 7
title: Vue carte nautique
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Vue d'ensemble {#overview}

:::info Fonction payante
Le plugin Vue carte nautique est une [fonction payante](../purchases/index.md) de l'application OsmAnd.
:::

La vue carte nautique est une représentation graphique détaillée des océans, des mers, des zones côtières et des rivières qui vous aide à naviguer sur l'eau et à connaître les routes populaires, les obstacles sur votre voie navigable, les ports les plus proches, les mouillages et d'autres points de repère importants.

Une carte nautique est une carte topographique très détaillée qui aide les skippers à naviguer sur un navire sur un parcours sélectionné sur l'eau. Elle est similaire à une carte routière pour ceux qui voyagent en voiture. Souvent appelée « *carte marine* » pour des raisons historiques, c'est une représentation graphique détaillée des océans, des mers, des zones côtières et des rivières.

Les cartes nautiques sont importantes pour les marins professionnels et les amateurs qui louent un bateau pour naviguer sur les canaux de la ville. Les cartes leur fournissent diverses informations telles que les routes de navigation, les feux de navigation, les zones dangereuses, les zones où il est autorisé ou interdit de naviguer ou de s'amarrer, etc.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cartes nautiques](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cartes nautiques](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Pourquoi le thème nautique est important {#why-the-nautical-theme-matters}

Tous les marins professionnels sont tenus d'avoir des cartes nautiques officielles sur leurs navires. Ces cartes sont publiées par des agences autorisées et sont assez chères. Les agences investissent massivement pour maintenir les cartes à jour. Elles publient des mises à jour régulières des cartes, mais comme il faut du temps pour vérifier les informations et traiter les mises à jour, les cartes nautiques ne sont jamais complètement à jour.

Basées sur les données [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), les cartes nautiques OsmAnd sont créées par les personnes qui les utilisent. Chaque utilisateur de carte peut contribuer à la carte en ajoutant des informations qu'il juge importantes et utiles pour lui-même, rendant ainsi la carte plus détaillée et précise, idéale pour l'orientation ou la planification d'itinéraires.


## Paramètres de configuration requis {#required-setup-parameters}

La configuration suivante permet d'afficher la carte nautique à l'écran :

1. [Achetez](../plugins/index.md#purchase) et [activez](../plugins/index.md#enable--disable) le plugin de vue carte nautique.
2. [Téléchargez](#download-nautical-maps) les cartes nautiques.
3. Définissez le [style de carte](#set-nautical-map-style) nautique pour le [profil](../personal/profiles.md) requis.


### Définir le style de carte nautique {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*

![Type de carte nautique sur Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*

![Type de carte nautique sur iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Utilisez la [Légende de la carte](../../user/map-legend/nautical-map.md) pour toute référence à ce qui est affiché sur la carte nautique. Elle explique les éléments symboliques d'une carte nautique et sert de référence pour vous aider à naviguer en cas de doute. En définissant le style de carte nautique, vous pouvez obtenir la meilleure vue des données nautiques téléchargées et affichées.

Pour changer le style de carte actuel en Nautique, vous devez effectuer les réglages suivants :

1. Sélectionnez le [profil](../personal/profiles.md) requis.
2. Ouvrez [Configurer la carte](../map/configure-map-menu.md).
3. Faites défiler jusqu'à Style de carte, ouvrez-le et cochez **Nautique**.


### Télécharger les cartes nautiques {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Vue des cartes du plugin nautique Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![Vue des cartes du plugin nautique iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Pour une présentation optimale, les cartes peuvent être adaptées aux besoins actuels : des marques et des symboles peuvent être ajoutés avec des points de profondeur et, si nécessaire, des courbes de niveau. D'autre part, les cartes standard avec des informations sur les eaux intérieures, côtières et proches du rivage pour une région particulière peuvent être un bon complément aux informations sur les voies navigables sur une carte nautique.

Lorsque vous [téléchargez](../start-with/download-maps.md) une carte nautique, plus de détails liés à la navigation en *bateau* apparaissent sur la carte. Certains types de [cartes nautiques](../start-with/download-maps.md#type-of-maps) contiennent des détails tels que :

- **Marques et symboles nautiques.**
Les marques et symboles contiennent toutes les marques de navigation nautiques pour la navigation intérieure et côtière. Connaître ces marques vous aidera à prédire l'emplacement des rochers, des obstructions, des mouillages, des bouées, des courants, des eaux profondes et peu profondes, et des côtés du chenal, quelle que soit la direction, etc. Les marques et symboles sont téléchargés une seule fois pour le monde entier.

- **Points de profondeur.**
Les données nautiques des paquets de points de profondeur sont représentées par des chiffres affichés sur l'eau qui indiquent la profondeur la moins profonde à un endroit particulier. Les points de profondeur sont disponibles pour chaque hémisphère et certaines régions.

- **Courbes de niveau de profondeur.**
Les paquets de courbes de niveau de profondeur vous permettent de définir des zones de profondeur égale. Ils sont destinés à visualiser les changements de relief sous la surface de l'eau. Les courbes de niveau de profondeur peuvent être téléchargées pour certaines zones, puis désactivées si vous n'en avez pas besoin.

:::info Nombres de profondeur
Tous les nombres de profondeur sur les cartes nautiques sont indiqués en mètres.
:::


### Désactiver le style de carte nautique {#disable-nautical-map-style}

Pour supprimer Nautique et afficher l'une des cartes conventionnelles d'OsmAnd, effectuez l'une des opérations suivantes :

- Désactivez le plugin Nautique.
- Changez le style de carte pour autre chose que *Nautique*.

:::info NOTE
La désactivation du plugin Nautique ne supprime pas les données nautiques chargées, donc même si vous changez la méthode de rendu de nautique à toute autre méthode lorsque les données nautiques sont téléchargées, elles restent visibles sur la carte.
:::


## Profil nautique {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Courbes de niveau de profondeur nautiques sur Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Courbes de niveau de profondeur sur iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

La carte nautique peut être incluse dans n'importe quel profil. Cependant, elle est la plus précieuse dans le [profil Bateau](../personal/profiles.md) et surtout dans la [navigation en bateau](../navigation/routing/boat-navigation.md).


## Style de carte nautique {#nautical-map-style}

Le plugin Nautique dans OsmAnd étend les styles de carte de la couche vectorielle avec le style de carte Nautique. Il vous permet d'afficher les données cartographiques selon les règles de la carte Nautique, par exemple : zones jaunes pour la terre et les hauts-fonds, zones bleu clair pour les eaux peu profondes, etc. Pour plus d'informations, consultez la [Légende de la carte](../../user/map-legend/nautical-map.md).


### Points de profondeur {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cartes nautiques](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cartes nautiques](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Les [paquets](../start-with/download-maps.md#type-of-maps) de points de profondeur sont disponibles pour l'Europe, l'hémisphère nord et l'hémisphère sud et sont informatifs. Les points de profondeur indiquent les changements de topographie sous la surface de l'eau, indiquant la profondeur la moins profonde. Ceci est nécessaire pour la navigation en *bateau*. Après le téléchargement, vous devez activer les [courbes de niveau de profondeur](#depth-contours) pour les afficher sur la carte.


### Courbes de niveau de profondeur {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![Courbes de niveau de profondeur nautiques sur Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Courbes de niveau de profondeur sur iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Lorsqu'une carte nautique est affichée à l'écran, vous pouvez ajuster ce que vous voyez :

- Afficher ou masquer les *courbes de niveau de profondeur*.
- Définir le niveau de détail des informations sur le fond marin : [*Largeur de ligne* et *Schéma de couleurs de ligne*](../map/vector-maps.md#-nautical-depth).

:::info NOTE
Vous pouvez aider l'application OsmAnd à augmenter la base de données des courbes de niveau de profondeur en ajoutant vos informations à l'aide d'[OpenSeaMap](https://map.openseamap.org/)
:::


### Détails du fond marin {#seabed-details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*

![Détails du fond marin](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Détails du fond marin](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Les données du fond marin contiennent des informations sur la végétation et les matériaux de surface généraux tels que les roches, les coquillages, le gravier, le corail, le limon, etc. En raison de la classification internationale des données du fond marin, il existe des options pour afficher ces détails sur une carte : *simple*, *catégorie*, *tout* ou *omettre*. Utilisez la [légende de la carte de la zone du fond marin](../map-legend/nautical-map.md#seabed-area) pour plus d'informations.

- **Simple** (*pour la version Android*) - affiche les symboles de balises maritimes conformément à la référence INT-1, indiquant la nature de la surface du fond marin.
- **Catégorie** - en plus du symbole de balise maritime, affiche également l'étiquette de balise maritime pertinente, indiquant le matériau naturel, ou la catégorie d'algues et d'herbes marines.
- **Tout** - en plus du symbole de balise maritime, de l'étiquette ou de la catégorie, affiche également des qualifications telles que fin, collant, grossier, etc. Pour les herbes marines et les algues, affiche les données marquées avec les étiquettes *taxon* et *genre*.
- **Omettre** - n'affiche pas les détails du fond marin.

:::info NOTE
Pour plus de détails sur la classification des détails de surface et les options de rendu, reportez-vous au [wiki seamark d'OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::


## Articles connexes {#related-articles}

- [Importation / Exportation](../personal/import-export.md)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)

> *Dernière mise à jour : juin 2023*