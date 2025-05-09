---
sidebar_position: 18
title:  Wikipedia
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


## Aperçu

:::info Fonctionnalité payante
Le plugin Wikipedia est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.
:::

Avoir Wikipedia pendant votre voyage vous aide à en apprendre davantage sur les lieux que vous visitez. Il est disponible hors ligne et affiche les articles Wikipedia liés aux points d'intérêt directement sur la carte.

Le plugin Wikipedia est une fonctionnalité distincte qui peut être activée/désactivée selon les besoins. Une fois activé, il vous permet de télécharger les données Wikipedia [téléchargées](../personal/maps-resources.md#download-maps-maps) pour chaque région géographique. La carte contient deux types de connaissances téléchargées depuis Wikipedia : des informations brèves et un article complet.

Des informations brèves sont fournies par les POI Wikipedia (abréviation de "[point d'intérêt](../map/point-layers-on-map.md)"). Si l'option Wikipedia est activée dans le menu, un POI Wikipedia apparaît sur la carte. Lorsque vous appuyez sur un point d'intérêt, il s'étend pour fournir de brèves informations de Wikipedia, ainsi que la possibilité d'ouvrir un article complet. Le POI Wikipedia, ainsi que les articles associés, sont disponibles hors ligne. Vous pouvez les lire selon vos besoins, changer de langue et rechercher d'autres informations sur Wikipedia.

[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) est une encyclopédie en ligne gratuite, multilingue et collaborative, créée et maintenue par une communauté de rédacteurs bénévoles utilisant un système d'édition basé sur un wiki.

&nbsp;
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Paramètres de configuration requis

Pour afficher les données Wikipedia sur la carte, vous devez effectuer les réglages suivants :

1. [Achetez](../plugins/index.md#purchase) et [activez](../plugins/index.md#enable--disable) le plugin Wikipedia dans la section Plugins du *Menu principal*.
2. Téléchargez les [paquets Wikipedia](#download-wikipedia-packages) pour les régions requises.
3. Affichez les [POI Wikipedia](#display-wikipedia-on-the-map) sur la carte pour le profil requis.
4. Configurez les [langues](#set-preferred-language) préférées pour lire les articles.


## Télécharger les paquets Wikipedia

Les données Wikipedia sont disponibles pour chaque région géographique. Si elles sont chargées pour une région et non pour une autre, dans le premier cas, vous pouvez travailler avec les informations Wikipedia lorsque vous visualisez la région sur une carte, et dans l'autre cas, la région n'aura aucune information Wikipedia. Une fois chargées, les données Wikipedia deviennent disponibles en général, ainsi qu'hors ligne.

Pour télécharger les données Wikipedia pour une région, accédez aux [paquets disponibles au téléchargement dans le *Menu principal*](../start-with/download-maps.md#download---main-menu), trouvez la région souhaitée et ouvrez-la. Les données Wikipedia seront parmi les autres paquets.

Vous pouvez ouvrir les données Wikipedia à télécharger par région comme suit :

1. **Android**. Allez dans : *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Allez dans : *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Sélectionnez la région requise. Une fois la région ouverte, les données Wikipedia seront parmi les autres paquets.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Pour voir quelles données ont déjà été téléchargées, allez dans *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*

![Télécharger Wikipedia sur Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Pour voir quelles données ont déjà été téléchargées, allez dans *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Télécharger Wikipedia sur iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Afficher Wikipedia sur la carte

En chargeant les données Wikipedia pour les régions requises, vous pouvez contrôler la visibilité de ces données sur la carte. La visibilité est contrôlée par les [POI Wikipedia](../map/point-layers-on-map.md#-wikipedia), qui peuvent être affichés ou masqués pour toutes les régions téléchargées par un certain [profil](../personal/profiles.md), par exemple, un profil pour la conduite, un profil pour le cyclisme, un autre profil pour afficher les transports en commun, et d'autres.

Pour afficher ou masquer les POI Wikipedia, sélectionnez d'abord un profil, puis activez/désactivez l'option **Wikipedia**.

Pour afficher/masquer les POI Wikipedia, procédez comme suit :

1. Allez dans : *<Translate android="true" ids="shared_string_menu,configure_map"/>*
2. Sélectionnez un profil et recherchez la section de paramètres *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* dans le menu.
3. Activez *<Translate android="true" ids="shared_string_wikipedia"/>*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI Wikipedia sur Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Wikipedia sur iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Rechercher sur Wikipedia

Avec les données Wikipedia téléchargées, quel que soit le mode de visibilité des [POI Wikipedia](../map/point-layers-on-map.md#-wikipedia) sur la carte, il est possible de [rechercher](../search/search-poi.md) toute information de Wikipedia.

Lorsque vous appuyez sur le bouton Rechercher, un panneau supplémentaire apparaît vous permettant de [rechercher](../search/index.md) dans le texte entier et/ou dans une catégorie spécifique. Dans le premier cas, les résultats de la recherche afficheront les POI Wikipedia avec les articles Wikipedia correspondants parmi d'autres types d'informations. Dans le cas d'une [recherche par catégorie Wikipedia](../search/search-poi.md#poi-search), les résultats de la recherche n'afficheront que les informations Wikipedia, triées par la localisation la plus proche de la zone de la carte actuellement affichée à l'écran.

- Dans la version **Android**, vous pouvez ouvrir [Rechercher](../search/index.md) en appuyant sur l'*icône de recherche* dans le coin supérieur gauche de l'écran et/ou en appuyant sur l'*option de recherche* dans le menu.
- Dans la version **iOS**, pour ouvrir [Rechercher](../search/index.md), l'icône de recherche se trouve dans le coin supérieur gauche de l'écran.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Recherche Wikipedia sur Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recherche Wikipedia sur iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

- Pour rechercher par [catégorie](../search/search-poi.md#poi-search) Wikipedia, sélectionnez : *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Catégorie Wikipedia sur Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Catégorie Wikipedia sur iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Si nécessaire, appuyez sur l'option **Afficher Wikipedia sur la carte** en haut du panneau de recherche et les résultats de la recherche de la catégorie Wikipedia apparaîtront sur la carte.


## Article Wikipedia

Pour ouvrir l'article Wikipedia :

1. Activez la [couche POI Wikipedia](../map/point-layers-on-map.md#-wikipedia) pour un profil spécifié.
2. Appuyez sur le POI sur la carte.
3. Dans le [menu contextuel](../map/map-context-menu.md) d'un POI, appuyez sur *Détails* (ou tirez simplement le *menu contextuel* vers le haut) pour afficher un résumé de l'article Wikipedia choisi.
4. Si vous appuyez sur ce texte, vous serez redirigé vers l'article Wikipedia hors ligne.
5. Pour la version **Android** de l'application OsmAnd, vous pouvez également utiliser les boutons *Lire l'article* ou *Lire l'article complet*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI Wikipedia français en anglais](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Wikipedia français en anglais sur iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Paramètres Wikipedia

Vous pouvez [définir la ou les langues](#set-preferred-language) dans lesquelles vous préférez lire les [articles](#wikipedia-article) et également configurer les [options de téléchargement d'images](#download-images) pour chaque [profil](../personal/profiles.md).

### Définir la langue préférée

Dans les versions **Android** et **iOS** de l'application OsmAnd, vous pouvez définir votre langue (ou vos langues) préférée(s) pour afficher les articles Wikipedia à l'aide du *menu Configurer la carte*. Si vous sélectionnez plus d'une langue, les articles *Wikipedia* sur la carte seront affichés dans l'une d'entre elles. Allez dans :

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Sélectionnez le profil souhaité et dans la section *<Translate android="true" ids="shared_string_show"/>*, choisissez *<Translate android="true" ids="shared_string_wikipedia"/>*.
3. Désactivez l'option *<Translate android="true" ids="shared_string_all_languages"/>*.
4. Sélectionnez la ou les langues spécifiques dans la liste ouverte.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Définir une langue préférée sur Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Définir une langue préférée sur iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
Dans la version **iOS**, vous pouvez également définir la langue préférée pour les articles Wikipedia en utilisant :

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Changer de langue dans l'article

Si l'*article Wikipedia* est disponible en différentes langues, vous pouvez changer de langue pendant la lecture. Après avoir appuyé sur l'icône correspondante dans le coin supérieur droit de l'écran, des options vous seront proposées.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Changer de langue pour un article spécifique](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Changer de langue pour un article spécifique](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png) ![Changer de langue pour un article spécifique](@site/static/img/plugins/wikipedia/switch_languages_ios_2.png)

</TabItem>

</Tabs>


### Télécharger des images

Vous pouvez choisir de télécharger ou non les images de Wikipedia sur votre appareil dans l'*article Wikipedia* :

- **Android**. Ouvrez *[Article Wikipedia](#display-wikipedia-on-the-map) → &#8942; → Options*
- **iOS**. Ouvrez *[Article Wikipedia](#display-wikipedia-on-the-map) → Icône d'image*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Changer d'images](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Changer d'images](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

Dans la version **iOS** de l'application, vous pouvez également accéder aux options de téléchargement d'images en utilisant les *paramètres du plugin Wikipedia* :

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Changer d'images](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Articles connexes

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Cet article a été mis à jour pour la dernière fois en octobre 2024*

-- source-hash: blake2s: 306edf1bf41fb7c4db44d5598054ea29f394ffae9cff522f44b12eac70ed18b4 --
