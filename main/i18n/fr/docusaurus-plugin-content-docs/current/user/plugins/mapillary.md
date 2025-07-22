---
source-hash: e46e862bf3423da156a08ba066e94f7d2262dcd693d6bfcdfd87d3e6f3328253
sidebar_position: 6
title:  Mapillary
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

Pour vous déplacer plus rapidement, vous pouvez utiliser dans OsmAnd les vues au niveau de la rue de vos itinéraires ou de vos points d'intérêt fournies par [Mapillary](https://www.mapillary.com/) (une connexion Internet est requise).

La [couche Mapillary](https://www.mapillary.com/) apporte des images au niveau de la rue directement dans l'application OsmAnd, afin que vous puissiez facilement avoir un aperçu des environs de n'importe quel lieu d'intérêt ou le long de l'itinéraire que vous avez planifié. Si des images manquent, vous pouvez les ajouter vous-même, et d'autres peuvent les utiliser. Cette fonctionnalité est née de notre collaboration avec [l'équipe Mapillary](https://www.mapillary.com/about), unissant les avantages des deux applications.


## Paramètres de configuration requis {#required-setup-parameters}

Pour afficher les images au niveau de la rue sur la carte OsmAnd, vous devez effectuer les réglages suivants :

1. Activez le [plugin Mapillary](../plugins/#enable--disable) dans la section *Plugins* du *Menu principal*.
2. Affichez les [images au niveau de la rue](#enable-layer) sur la carte pour le profil requis dans le menu Configurer la carte.


## Couche de carte {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin points on the map Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin points on the map iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

La couche de carte avec les images de rue est affichée sur la carte OsmAnd sous forme de rangées de points verts connectés.

- Les photos des utilisateurs de Mapillary sont attachées à ces points verts.
- Appuyez sur un point vert sur la carte pour ouvrir une photo de vue de rue. Les photos peuvent également être sélectionnées à partir d'une liste dans le [menu contextuel de la carte](#map-context-menu), si disponible.
- Après la sélection, l'écran de l'application est divisé en carte OsmAnd et en images de rue Mapillary.
- Vous pouvez appliquer des [filtres](#data-filtering) pour sélectionner les photos que vous souhaitez afficher sur la carte.


### Activer la couche {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Mapillary plugin images Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Mapillary plugin images iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Pour afficher les images au niveau de la rue de Mapillary sur la carte, vous devez activer cette couche dans le menu [Configurer la carte](../map/configure-map-menu.md) dans la section *Afficher*.

*Pour accéder : <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note Visionneuse de photos Mapillary

- Appuyez sur le bouton *menu à trois points* (&#8285;) pour ouvrir l'image sélectionnée dans l'application [**Mapillary**](https://www.mapillary.com/mobile-apps).
- Appuyez sur la flèche pour passer d'une image à l'autre.
:::


### Filtrage des données {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin filter Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin filter iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Vous pouvez créer un filtre et sélectionner les photos à afficher sur la carte. Par exemple, choisissez d'afficher uniquement les images récentes ou uniquement les images à 360 degrés.

*Pour accéder : <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Cache de tuiles
Si les images sélectionnées ne s'affichent pas, utilisez **Recharger** pour le **Cache de tuiles**.
:::


## Menu contextuel de la carte {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Si le plugin Mapillary est activé, vous pouvez afficher les photos de rues disponibles dans un rayon de 40 mètres autour du point sélectionné sur la carte. Les photos sont ouvertes dans le [menu contextuel de la carte](../map/map-context-menu.md#online-photos).


## Ajouter des photos {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Context menu iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Pour ajouter des photos, vous devez vous inscrire dans l'[application Mapillary](https://www.mapillary.com/mobile-apps). Vous pouvez également ajouter des photos au menu contextuel de la carte en appuyant sur le bouton *Ajouter des photos* dans la section [Photos en ligne](../map/map-context-menu.md#online-photos) du menu contextuel de la carte. L'application Mapillary s'ouvrira alors.


## Widget Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="mapillary"/>*

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png) ![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → <Translate ios="true" ids="mapillary"/>*

![Mapillary plugin Map Context menu iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

Le [widget Mapillary](../widgets/info-widgets.md#mapillary-widget) est utilisé pour accéder rapidement à l'application Mapillary. Le widget est ajouté automatiquement à l'écran principal lorsque le plugin Mapillary est activé. Vous pouvez activer ou désactiver le widget Mapillary et d'autres widgets dans le menu [Configurer l'écran](../widgets/configure-screen.md).


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Dernière mise à jour : octobre 2024*