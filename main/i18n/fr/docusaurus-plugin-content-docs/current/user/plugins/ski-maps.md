---
source-hash: f14066ee1c93315ba000b7389de0d0c6a42230c90308779a1b3a10e9a16d1fc7
sidebar_position: 13
title:  Vue Carte de ski
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

Le plugin Vue Carte de ski d'OsmAnd affiche les pistes célèbres et populaires, les domaines skiables officiellement approuvés et les cartes des pistes de la plupart des stations de ski. Les cartes des pistes [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) sont la source de données pour les cartes de ski OsmAnd. Combinant des cartes vectorielles avec des cartes raster, la carte de ski OsmAnd est très précise et sera utile pour les moniteurs, les grimpeurs et les amateurs de sports d'hiver.

La carte de ski OsmAnd fait partie des cartes vectorielles et ne nécessite pas de téléchargements supplémentaires. Elle est désactivée par défaut. La carte de ski OsmAnd est l'un des [Styles de carte](../map/vector-maps.md) qui offre des fonctionnalités supplémentaires en mettant en évidence certains objets et en rendant d'autres moins visibles.

Deux profils sont présentés ci-dessous : celui de gauche est pour le ski et celui de droite est pour la conduite. Le profil Ski met en évidence les pistes, les voies aériennes, les couleurs d'hiver et tous les objets cartographiques utiles pour naviguer dans le domaine skiable.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cartes de ski sous Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Pas de cartes de ski sous Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cartes de ski sous iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Pas de cartes de ski sous iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Paramètres de configuration requis {#required-setup-parameters}

Le paramètre suivant permet d'afficher la carte de ski OsmAnd à l'écran :

1. Activez le [plugin Vue Carte de ski](../plugins/index.md#enable--disable).
2. Définissez le [style de carte Hiver et ski](#set-winter-and-ski-map-style) pour le [profil](../personal/profiles.md) requis.
3. Si nécessaire, [combinez les cartes](#combine-maps).


### Définir le style de carte Hiver et ski {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*

![Activer le style Hiver sous Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Style de carte du plugin Cartes de ski sous Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*

![Activer le style Hiver sous iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Style de carte du plugin Cartes de ski sous iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Le style de carte Hiver et ski met en évidence les pistes, les itinéraires de ski de randonnée, les pistes de luge et les informations relatives à l'hiver et au ski. Pour afficher le style sur la carte, vous devez effectuer les réglages suivants :

1. Sélectionnez le [profil](../personal/profiles.md) requis.
2. Ouvrez [Configurer la carte](../map/configure-map-menu.md).
3. Faites défiler jusqu'à Style de carte/Type de carte, ouvrez-le et cochez **Hiver et ski**.

:::tip configurations
Le profil Ski est conçu pour être utilisé en combinaison avec les styles Hiver et ski. Cependant, le type de navigation pour chaque profil spécifique peut être modifié et défini individuellement, de sorte que la configuration finale du profil, du style de carte et de la navigation dépend entièrement de vos réglages.
:::


### Combiner les cartes {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pas de combinaison de cartes sous Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![Avec combinaison de cartes sous Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pas de combinaison de cartes sous iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![Avec combinaison de cartes sous iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

La [carte vectorielle](../map/vector-maps.md) avec le [style de carte Hiver et ski](../map/vector-maps.md#winter-and-ski) inclus peut être complétée par des [courbes de niveau](../plugins/topography.md#show-contour-linesterrain) et un [ombrage](../plugins/topography.md#hillshade-map). Voici deux exemples. Les pistes sur la carte vectorielle par défaut sont affichées à gauche, et les pistes sur la carte vectorielle combinée avec la carte raster *Courbes de niveau* et *Ombrage* sont affichées à droite. Dans le second cas, la carte affiche plus de données d'altitude pour aider à estimer la difficulté, le risque et la distance.


### Désactiver le style de carte de ski {#disable-ski-map-style}

Si vous préférez supprimer les pistes et les couleurs d'hiver de la carte, ou si la saison de ski est terminée, effectuez l'une des opérations suivantes :

- Décochez le style de carte [Hiver et ski](#set-winter-and-ski-map-style) pour le profil requis.
- Changez le [profil Ski](../personal/profiles.md) pour tout autre profil.
- Désactivez le [plugin Vue Carte de ski](../plugins/index.md#enable--disable).


:::info désinstaller le plugin
Le plugin Vue Carte de ski est une application distincte, et la désactivation de son affichage ne le supprime pas. Si vous devez le désinstaller, accédez aux paramètres Android en utilisant *Ouvrir les paramètres* dans le menu du plugin.
:::


## Profil Ski {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Courbes de profondeur nautiques sous Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Courbes de profondeur sous iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Les styles de carte Hiver et ski peuvent être activés dans n'importe quel profil. Mais il est le plus utile dans le [profil Ski](../personal/profiles.md), où il est défini par défaut. Le profil Ski est très confortable pour la [navigation à ski](../navigation/routing/ski-routing.md).


## Style de carte de ski {#ski-map-style}

Utilisez la [légende de la carte de ski](../../user/map-legend/ski-map.md) pour toute référence. Elle permet d'identifier les types de pistes sur la carte, ainsi que les types de voies aériennes et d'autres caractéristiques qui peuvent être lues sur la carte.

En lisant la carte, vous pouvez connaître les détails qui sont importants pour vous, tels que la difficulté d'une piste particulière, le type de piste, si le damage est effectué et si la piste est éclairée la nuit.

Les options décrites ici sont disponibles dans la [navigation à ski](../navigation/setup/route-navigation.md). La **navigation à ski** définit les options d'itinéraire individuelles, qui s'appliquent uniquement au ski.


:::info style de rendu
La carte de ski OsmAnd est construite comme l'un des styles de rendu, qui détermine quels objets afficher sur la carte et l'apparence des objets. Tous les styles de rendu sont décrits dans le fichier [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). Pour les règles qui définissent la structure interne du fichier XML, consultez la [documentation sur le rendu](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Pistes par difficulté {#pistes-by-difficulty}

| Couleur | Description |
| --- | --- |
| ![Piste débutant](@site/static/img/plugins/ski-maps/1c_green_1.png) | Vert - Piste débutant |
| ![Pistes faciles](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Bleu - Pistes faciles |
| ![Pistes intermédiaires](@site/static/img/plugins/ski-maps/3c_red_1.png) | Rouge - Pistes intermédiaires |
| ![Difficulté avancée](@site/static/img/plugins/ski-maps/4c_black_1.png) | Gris - Pistes de difficulté avancée |
| ![Difficulté expert](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Jaune - Pistes de difficulté expert |

La difficulté des traces est généralement indiquée par des couleurs spécifiques. Les couleurs peuvent être différentes selon les pays et les stations. Voici quelques directives pratiques.

:::tip guidance
Pour des conseils plus spécifiques sur chaque type de difficulté de piste, consultez la [référence de difficulté de piste OSM](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) ou toute autre source qui prend également en compte les pentes, les obstacles et les dangers.
:::


### Piste par types {#piste-by-types}

Les pistes diffèrent par leur type. Un type représente différentes caractéristiques pour une piste afin de répondre aux exigences de différentes activités liées à l'hiver : ski alpin, patinage classique, snowboard, luge, ski de randonnée, ski de randonnée, ski de bosses, ski nocturne, etc. Comprendre le [type de piste](https://wiki.openstreetmap.org/wiki/Key:piste:type) sur la carte aide à construire un itinéraire de navigation optimal.

- **Piste de ski de descente/alpin.**
Utilisé pour la navigation à ski. Ce [type de piste](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) a une direction et une difficulté, et le plus souvent il est entouré par les limites du domaine skiable. Lorsqu'une piste de descente est sélectionnée pour la navigation à ski, la direction de la piste est prise en considération. Si les points de départ et de destination sont établis à l'opposé de la direction de la piste, la navigation se fait le long de la voie aérienne la plus proche.

- **Piste de ski nordique/arrière-pays.**
Également utilisé pour la navigation à ski. Ce [type de piste](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) n'a pas de difficulté, peut ou non avoir une direction, et le plus souvent il dépasse les limites du domaine skiable. Lors de la navigation le long de ce type de pistes, les points de départ et de destination peuvent souvent être inversés.

- **Piste de ski de randonnée.**
Souvent utilisé par les skieurs pour une montée nordique et une descente en descente. La difficulté d'une piste de ski de randonnée est souvent marquée par la couleur respective. La navigation à ski peut construire un itinéraire le long de ce type de piste, ce qui vous permet de combiner les types de pistes.

- **Autre piste de ski.**
Les types de pistes tels que les *sentiers de randonnée* ou les *pistes de luge* peuvent être utilisés pour les profils de ski ou de randonnée.


### Pistes damées {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Activer le damage sous Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Damage affiché sous Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Activer le damage sous iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Damage affiché sous iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Pour vérifier sur la carte si une piste particulière est damée, vous devez activer l'option **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** dans la liste **<Translate android="true" ids="rendering_category_details"/>** ouverte depuis le menu [Configurer la carte](../map/configure-map-menu.md).
Des machines spéciales damment les pistes pour les préparer à l'activité appropriée, comme le patinage classique, le patinage sur glace, et autres. La même piste peut être damée différemment dans différentes zones.

### Itinéraires de pistes de ski {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Itinéraires désactivés sous Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Itinéraires activés sous Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Itinéraires désactivés sous iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Itinéraires activés sous iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Pour savoir sur quelles pistes en dehors du domaine skiable vous pouvez naviguer, vous devez activer l'option **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** dans la liste **<Translate android="true" ids="rendering_category_routes"/>**, ouverte depuis le menu [Configurer la carte](../map/configure-map-menu.md).

Avec le profil Ski, la navigation à ski et le [style de carte Hiver et ski](../map/vector-maps.md#winter-and-ski) activés, les itinéraires des [pistes de ski](../map/vector-maps.md#routes) affichent tous les types de pistes que la navigation à ski peut utiliser pour construire des itinéraires de navigation. Ces itinéraires de pistes de ski, s'ils sont activés, sont délimités par la couleur violette, principalement en dehors des limites du domaine skiable.


### Nuit et éclairage {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Activer le mode Nuit et l'éclairage sous Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Nuit et éclairage sous Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Activer le mode Nuit et l'éclairage sous iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Nuit et éclairage sous iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

Le style **Hiver et ski** peut être utilisé avec le [mode Nuit ou Lever/coucher du soleil](../map/vector-maps.md#map-mode). Un choix confortable pour ceux qui préfèrent les couleurs sombres, ou assombrir l'écran la nuit, ainsi que pour ceux qui pratiquent le ski nocturne. En plus du mode Nuit, les cartes de ski OsmAnd peuvent également montrer quelles pistes sont éclairées avec l'option [Éclairage public](../map/vector-maps.md#details).

Ces deux options se trouvent dans le menu [Configurer la carte](../map/configure-map-menu.md).

- Pour activer l'option ***Mode Nuit***, faites défiler la liste :
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*

- Pour activer l'option ***Éclairage public***, ouvrez la liste **<Translate android="true" ids="rendering_category_details"/>** et activez l'option :
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Dernière mise à jour : Décembre 2024*