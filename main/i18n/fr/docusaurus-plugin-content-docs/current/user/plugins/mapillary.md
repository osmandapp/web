---
source-hash: c1e40198b8d078b7e3678c0105a5dc91442a1ca2f47b65d03facbd7ca77df64a
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

Pour vous déplacer plus rapidement, dans OsmAnd, vous pouvez utiliser les vues au niveau de la rue de vos itinéraires ou points d'intérêt fournies par [Mapillary](https://www.mapillary.com/) (une connexion Internet est requise).  

[La couche Mapillary](https://www.mapillary.com/) intègre l'imagerie au niveau de la rue directement dans l'application OsmAnd, ce qui vous permet de visualiser facilement les environs de n'importe quel point d'intérêt ou le long de l'itinéraire que vous avez planifié. Si l'imagerie est manquante, vous pouvez l'ajouter vous-même, et d'autres pourront l'utiliser. Cette fonctionnalité est le fruit de notre collaboration avec [l'équipe de Mapillary](https://www.mapillary.com/about), unissant les avantages des deux applications.


## Paramètres de configuration requis {#required-setup-parameters}

Pour afficher les images au niveau de la rue sur la carte OsmAnd, vous devez effectuer les réglages suivants :

1. Activez le [plugin Mapillary](../plugins/#enable--disable) dans la section *Plugins* du *Menu principal*.
2. Affichez l'[Imagerie au niveau de la rue](#enable-layer) sur la carte pour le profil requis dans le menu Configurer la carte.


## Couche de la carte {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Points du plugin Mapillary sur la carte Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Points du plugin Mapillary sur la carte iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

La couche de la carte avec les images de rue est affichée sur la carte OsmAnd sous la forme de rangées de points verts connectés.

- Les photos des utilisateurs de Mapillary sont attachées à ces points verts.
- Appuyez sur un point vert sur la carte pour ouvrir une photo de la vue de la rue. Les photos peuvent également être sélectionnées à partir d'une liste dans le [menu contextuel de la carte](#map-context-menu), si disponible.
- Après la sélection, l'écran de l'application est divisé entre la carte OsmAnd et les images de rue au niveau de la rue de Mapillary.
- Vous pouvez appliquer des [filtres](#data-filtering) pour sélectionner les photos que vous souhaitez afficher sur la carte.


### Activer la couche {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugin Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Images du plugin Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plugin Mapillary iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Images du plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Pour afficher l'imagerie au niveau de la rue de Mapillary sur la carte, vous devez activer cette couche dans le menu [Configurer la carte](../map/configure-map-menu.md) dans la section *Afficher*.  

*Pour y accéder : <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.  

:::note Visionneuse de photos Mapillary

- Appuyez sur le bouton *menu à trois points* (&#8285;) pour ouvrir l'image sélectionnée dans l'application [**Mapillary**](https://www.mapillary.com/mobile-apps).
- Appuyez sur la flèche pour passer d'une image à l'autre.
:::


### Filtrage des données {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Filtre du plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Filtre du plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Vous pouvez créer un filtre et sélectionner les photos à afficher sur la carte. Par exemple, choisissez de n'afficher que les images récentes ou que les images à 360 degrés.  

*Pour y accéder : <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Cache des tuiles
Si les images sélectionnées ne s'affichent pas, utilisez **Recharger** pour le **Cache des tuiles**.
:::


## Menu contextuel de la carte {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu contextuel de la carte du plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contextuel de la carte du plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Si le plugin Mapillary est activé, vous pouvez visualiser les photos des rues disponibles dans un rayon de 40 mètres autour du point sélectionné sur la carte. Les photos s'ouvrent dans le [menu contextuel de la carte](../map/map-context-menu.md#online-photos).


## Ajouter des photos {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu contextuel de la carte du plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contextuel de la carte du plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Pour ajouter des photos, vous devez vous inscrire dans l'[application Mapillary](https://www.mapillary.com/mobile-apps). Vous pouvez également ajouter des photos au menu contextuel de la carte en appuyant sur le bouton *Ajouter des photos* dans la section [Photos en ligne](../map/map-context-menu.md#online-photos) du menu contextuel de la carte. L'application Mapillary s'ouvrira alors.


## Widget Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisissez un panneau → <Translate android="true" ids="mapillary"/>*

![Plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png)  ![Menu contextuel de la carte du plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisissez un panneau → <Translate ios="true" ids="mapillary"/>*

![Menu contextuel de la carte du plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

Le [widget Mapillary](../widgets/info-widgets.md#mapillary-widget) est utilisé pour accéder rapidement à l'application Mapillary. Le widget est ajouté à l'écran principal automatiquement lorsque le plugin Mapillary est activé. Vous pouvez activer ou désactiver le widget Mapillary et d'autres widgets dans le menu [Configurer l'écran](../widgets/configure-screen.md).


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres généraux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)