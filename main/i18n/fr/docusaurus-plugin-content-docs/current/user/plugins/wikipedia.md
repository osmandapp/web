---
source-hash: 2f914f4ecf9df9f98177dd069c3c143806b2827059231c6238393af7c70a080d
sidebar_position: 18
title:  Wikipédia
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



## Aperçu {#overview}

:::info Fonctionnalité payante
Le plugin Wikipédia est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.  
:::

Avoir Wikipédia pendant votre voyage vous aide à en apprendre davantage sur les lieux que vous visitez. Il est disponible hors ligne et affiche les Lieux populaires (Android) / articles Wikipédia (iOS) liés aux points d'intérêt directement sur la carte.  

Le plugin Wikipédia est une fonctionnalité distincte qui peut être activée/désactivée selon les besoins. Une fois activé, il vous permet de télécharger les données Wikipédia [téléchargées](../personal/maps-resources#downloads-menu) pour chaque région géographique. La carte dispose de deux types de connaissances téléchargées depuis Wikipédia : des informations brèves et un article complet.  


Les informations brèves sont fournies par les POI Wikipédia (une abréviation pour "[point d'intérêt](../map/point-layers-on-map.md)"). Si l'option Wikipédia est activée dans le menu, un POI Wikipédia apparaît sur la carte. Lorsque vous appuyez sur un point d'intérêt, il se développe pour fournir de brèves informations de Wikipédia, ainsi que la possibilité d'ouvrir un article complet. Le POI Wikipédia, ainsi que les articles connexes, sont disponibles hors ligne. Vous pouvez les lire selon vos besoins, changer de langue et rechercher d'autres informations sur Wikipédia.  


[Wikipédia](https://en.wikipedia.org/wiki/Wikipedia) est une encyclopédie en ligne gratuite, multilingue et collaborative ouverte, créée et maintenue par une communauté de rédacteurs bénévoles utilisant un système d'édition basé sur un wiki.  

&nbsp;  
![Wikipédia](@site/static/img/map/map-wikipedia.png)


## Paramètres de configuration requis {#required-setup-parameters}

Pour afficher les données Wikipédia sur la carte, vous devez effectuer les réglages suivants :

1. [Acheter](../plugins/index.md#purchase) et [Activer](../plugins/index.md#enable--disable) le plugin Wikipédia dans la section Plugins du *Menu principal*.
2. Télécharger les [paquets Wikipédia](#download-wikipedia-packages) pour les régions requises.  
3. Afficher les [POI Wikipédia](#display-wikipedia-on-the-map) sur la carte pour le profil requis.  
4. Configurer les [langues](#set-preferred-language) préférées pour la lecture des articles.


## Télécharger les paquets Wikipédia {#download-wikipedia-packages}

Les données Wikipédia sont disponibles pour chaque région géographique. Si elles sont chargées pour une région et pas pour une autre, dans le premier cas, vous pouvez travailler avec les informations Wikipédia en visualisant la région sur une carte, et dans l'autre cas, la région n'aura aucune information Wikipédia. Une fois chargées, les données Wikipédia deviennent disponibles en général, ainsi que hors ligne.

Pour télécharger les données Wikipédia d'une région, allez dans les [paquets disponibles au téléchargement dans le *Menu principal*](../start-with/download-maps.md#downloading-maps), trouvez la région souhaitée et ouvrez-la. Les données Wikipédia se trouveront parmi les autres paquets.

Vous pouvez ouvrir les données Wikipédia à télécharger par région comme suit :

1. **Android**. Allez à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Allez à : *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Sélectionnez la région requise. Une fois la région ouverte, les données Wikipédia se trouveront parmi les autres paquets.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Pour voir quelles données ont déjà été téléchargées, allez dans *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![Télécharger Wikipédia sur Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Pour voir quelles données ont déjà été téléchargées, allez dans *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*  

![Télécharger Wikipédia sur iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Afficher Wikipédia sur la carte {#display-wikipedia-on-the-map}

En chargeant les données Wikipédia pour les régions requises, vous pouvez contrôler la visibilité de ces données sur la carte. La visibilité est contrôlée par les [Lieux populaires (Wikipédia)](../map/point-layers-on-map.md#-wikipedia) **pour Android** / les [POI Wikipédia](../map/point-layers-on-map.md#-wikipedia) **pour iOS**, qui peuvent être affichés ou masqués pour toutes les régions téléchargées par un certain [profil](../personal/profiles.md), par exemple, un profil pour la conduite, un profil pour le cyclisme, un autre profil pour afficher les transports en commun, et d'autres.  

Pour afficher ou masquer les POI Wikipédia, sélectionnez d'abord un profil, puis activez/désactivez l'option **Wikipédia**.

Pour afficher/masquer les POI Wikipédia, procédez comme suit :

1. Allez à : 

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#overview) 

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Sélectionnez un profil, et cherchez la section *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* des paramètres dans le menu.  
3. Activez *<Translate android="true" ids="poi_osmwiki"/>* **pour Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **pour iOS**.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI Wikipédia sur Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Wikipédia sur iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Rechercher sur Wikipédia {#search-wikipedia}

Avec les données Wikipédia téléchargées, quel que soit le mode de visibilité des [POI Wikipédia](../map/point-layers-on-map.md#-wikipedia) sur la carte, il est possible de [rechercher](../search/search-poi.md) n'importe quelle information de Wikipédia.

Lorsque vous appuyez sur le bouton Rechercher, un panneau supplémentaire apparaît vous permettant de [rechercher](../search/index.md) dans tout le texte et/ou dans une catégorie spécifique. Dans le premier cas, les résultats de la recherche afficheront les POI Wikipédia avec les articles Wikipédia correspondants parmi d'autres types d'informations. Dans le cas d'une [recherche par catégorie Wikipédia](../search/search-poi.md#poi-search-by-categories), les résultats de la recherche n'afficheront que les informations Wikipédia, triées par l'emplacement le plus proche de la zone de la carte actuellement affichée à l'écran.  

- Dans la version **Android**, vous pouvez ouvrir la [Recherche](../search/index.md) en appuyant sur l'*icône de recherche* dans le coin supérieur gauche de l'écran et/ou en appuyant sur l'*option de recherche* dans le menu.
- Dans la version **iOS**, pour ouvrir la [Recherche](../search/index.md), l'icône de recherche se trouve dans le coin supérieur gauche de l'écran.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia search on Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia search on iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- Pour rechercher par [catégorie](../search/search-poi.md#poi-search-by-categories) Wikipédia, sélectionnez : *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Catégorie Wikipédia sur Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Catégorie Wikipédia sur iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Si nécessaire, appuyez sur l'option **Afficher Wikipédia sur la carte** en haut du panneau de recherche et les résultats de la recherche de la catégorie Wikipédia apparaîtront sur la carte.  


## Article Wikipédia {#wikipedia-article}

Pour ouvrir l'article Wikipédia :

1. Activez la [couche de POI Wikipédia](../map/point-layers-on-map.md#-wikipedia) pour un profil spécifié.
2. Appuyez sur un POI sur la carte.
3. Dans le [menu contextuel](../map/map-context-menu.md) d'un POI, appuyez sur *Détails* (ou faites simplement glisser le *menu contextuel* vers le haut) pour afficher un résumé de l'article Wikipédia choisi.
4. Si vous appuyez sur ce texte (pour la version iOS), vous serez redirigé vers l'article Wikipédia hors ligne.
5. Utilisez le bouton *Lire l'article* ou *Lire l'article complet* pour ouvrir la version complète de l'article Wikipédia.



<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI Wikipédia français en anglais](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Wikipédia français en anglais sur iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Paramètres de Wikipédia {#wikipedia-settings}

Vous pouvez [définir la ou les langues](#set-preferred-language) dans lesquelles vous préférez lire les [articles](#wikipedia-article) et également configurer les [options de téléchargement des images](#download-images) pour chaque [profil](../personal/profiles.md).

### Définir la langue préférée {#set-preferred-language}

Dans les versions **Android** et **iOS** de l'application OsmAnd, vous pouvez définir votre ou vos langues préférées pour l'affichage des articles Wikipédia en utilisant le menu *Configurer la carte*. Si vous sélectionnez plus d'une langue, les articles *Wikipédia* sur la carte seront affichés dans l'une d'entre elles. Allez à :

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Sélectionnez le profil souhaité et dans la section *<Translate android="true" ids="shared_string_show"/>*, choisissez *<Translate android="true" ids="poi_osmwiki"/>* pour Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* pour iOS.  
3. Désactivez l'option *<Translate android="true" ids="shared_string_all_languages"/>*.  
4. Sélectionnez une ou plusieurs langues spécifiques dans la liste qui s'ouvre.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Définir une langue préférée sur Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Définir une langue préférée sur iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
Dans la version **iOS**, vous pouvez également définir la langue préférée pour les articles Wikipédia en utilisant :  

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Changer de langue dans l'article {#switch-languages-inside-the-article}

Si l'*article Wikipédia* est disponible dans différentes langues, vous pouvez changer de langue pendant la lecture. Après avoir appuyé sur l'icône correspondante dans le coin supérieur droit de l'écran, des options vous seront proposées.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Changer de langue pour un article spécifique](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Changer de langue pour un article spécifique](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Télécharger les images {#download-images}

Vous pouvez choisir de télécharger ou non les images de Wikipédia sur votre appareil à l'intérieur de l'*article Wikipédia* :

- **Android**. Ouvrez *[Article Wikipédia](#display-wikipedia-on-the-map) → &#8942; → Options*
- **iOS**. Ouvrez *[Article Wikipédia](#display-wikipedia-on-the-map) → Icône Image*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Changer d'images](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Changer d'images](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

Dans la version **iOS** de l'application, vous pouvez également accéder aux options de téléchargement d'images via les *paramètres du plugin Wikipédia* :

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Changer d'images](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres généraux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)