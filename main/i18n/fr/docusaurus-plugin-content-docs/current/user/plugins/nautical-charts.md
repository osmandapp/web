---
source-hash: 7ec189e5ebc7bca3eaaa66be6d97617ba61c06de602535da3e7881dac213769a
sidebar_position: 7
title:  Vue Carte marine
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


## Aperçu {#overview}

:::info Fonctionnalité payante
Le plugin Vue Carte marine est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.
:::

La Vue Carte marine est une représentation graphique détaillée des océans, des mers, des zones côtières et des rivières qui vous aide à naviguer sur l'eau et à connaître les routes populaires, les obstacles sur votre voie navigable, les ports les plus proches, les mouillages et autres points de repère importants.  

Une carte marine est une carte topographique très détaillée qui aide les skippers à naviguer un navire sur un cap choisi sur l'eau. Elle est similaire à une carte routière pour ceux qui voyagent en voiture. Souvent appelée une *'Chart'* pour des raisons historiques, c'est une représentation graphique détaillée des océans, des mers, des zones côtières et des rivières.  

Les cartes marines sont importantes pour les marins professionnels et les amateurs qui louent un bateau pour naviguer sur les canaux de la ville. Les cartes leur fournissent diverses informations telles que les routes de navigation, les feux de navigation, les zones de danger, les zones où il est autorisé ou interdit de naviguer ou d'accoster, etc.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cartes marines](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cartes marines](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Pourquoi le thème nautique est-il important {#why-the-nautical-theme-matters}

Tous les marins professionnels sont tenus d'avoir des cartes marines officielles à bord de leurs navires. Ces cartes sont publiées par des agences autorisées et sont assez chères. Les agences investissent massivement pour maintenir les cartes à jour. Elles publient des mises à jour régulières des cartes, mais comme la vérification des informations et le traitement des mises à jour prennent du temps, les cartes marines ne sont jamais complètement à jour.

Basées sur les données d'[OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), les cartes marines d'OsmAnd sont créées par les personnes qui les utilisent. Chaque utilisateur de la carte peut contribuer à la carte en ajoutant des informations qu'il juge importantes et utiles pour lui-même, rendant ainsi la carte plus détaillée et précise, idéale pour l'orientation ou la planification d'itinéraire.  


## Paramètres de configuration requis {#required-setup-parameters}

La configuration suivante permet d'afficher la carte marine à l'écran :

1. [Acheter](../plugins/index.md#purchase) et [Activer](../plugins/index.md#enable--disable) le plugin Vue Carte marine.  
2. [Télécharger](#download-nautical-maps) les cartes marines.  
3. Définir le style de carte [Nautique](#set-nautical-map-style) pour le [profil](../personal/profiles.md) requis.


### Définir le style de carte Nautique {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*  

![Type de carte marine sur Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*  

![Type de carte marine sur iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Utilisez la [Légende de la carte](../../user/map-legend/nautical-map.md) pour toute référence à ce qui est affiché sur la carte marine. Elle explique les éléments symboliques sur une carte marine et sert de référence pour vous aider à naviguer en cas de doute. En définissant le style de carte Nautique, vous pouvez obtenir la meilleure vue des données nautiques téléchargées et affichées.  

Pour changer le style de carte actuel en Nautique, vous devez effectuer les réglages suivants :  

1. Sélectionnez le [profil](../personal/profiles.md) requis.  
2. Ouvrez [Configurer la carte](../map/configure-map-menu.md).  
3. Faites défiler jusqu'à Style de carte, ouvrez-le et cochez **Nautique**.


### Télécharger les cartes marines {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*  

![Vue des cartes du plugin Nautique sur Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*  

![Vue des cartes du plugin Nautique sur iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Pour une présentation optimale, les cartes peuvent être adaptées aux besoins actuels : des marques et des symboles peuvent être ajoutés avec des points de profondeur et, si nécessaire, des isobathes. D'autre part, les cartes standard avec des informations sur les eaux intérieures, côtières et proches du littoral pour une région particulière peuvent être un bon complément aux informations sur les voies navigables d'une carte marine.  

Lorsque vous [téléchargez](../start-with/download-maps.md) une carte marine, plus de détails liés à la navigation *Bateau* apparaissent sur la carte. Certains types de [cartes marines](../plugins/nautical-charts/#nautical-map-style) contiennent des détails tels que :  

- **Marques et symboles nautiques.**  
    Les marques et symboles contiennent toutes les marques de navigation nautique pour la navigation intérieure et côtière. Connaître ces marques vous aidera à prévoir l'emplacement des rochers, des obstructions, des mouillages, des bouées, des courants, des eaux profondes et peu profondes, et des côtés du chenal, quelle que soit la direction, etc. Les marques et symboles sont téléchargés une seule fois pour le monde entier.

- **Points de profondeur.**  
    Les données nautiques des paquets de points de profondeur sont représentées par des nombres affichés sur l'eau qui indiquent la profondeur la moins profonde à un endroit particulier. Les points de profondeur sont disponibles pour chaque hémisphère et certaines régions.

- **Isobathes.**  
    Les paquets d'isobathes permettent de définir des zones de profondeur égale.  Ils sont destinés à visualiser les changements de relief sous la surface de l'eau. Les isobathes peuvent être téléchargées pour certaines zones, puis désactivées si vous n'en avez pas besoin.

:::info Nombres de profondeur
Tous les nombres de profondeur sur les cartes marines sont indiqués en mètres.
:::


### Désactiver le style de carte Nautique {#disable-nautical-map-style}

Pour supprimer le style Nautique et afficher l'une des cartes conventionnelles d'OsmAnd, effectuez l'une des actions suivantes :

- Désactivez le plugin Nautique.
- Changez le style de carte pour autre chose que *Nautique*.

:::info REMARQUE
La désactivation du plugin Nautique ne supprime pas les données nautiques chargées. Ainsi, même si vous changez la méthode de rendu de nautique à toute autre méthode lorsque les données nautiques sont téléchargées, elles restent visibles sur la carte.  
:::


## Profil nautique {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Isobathes sur Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Isobathes sur iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

La carte marine peut être incluse dans n'importe quel profil. Cependant, elle est plus utile dans le [profil Bateau](../personal/profiles.md) et surtout dans la [navigation Bateau](../navigation/routing/boat-navigation.md).  


## Style de carte Nautique {#nautical-map-style}

Le plugin Nautique dans OsmAnd étend les styles de carte de la couche vectorielle avec le style de carte Nautique. Il vous permet d'afficher les données de la carte selon les règles de la carte marine, par exemple : des zones jaunes pour la terre et les hauts-fonds, des zones bleu clair pour les eaux peu profondes, etc. Pour plus d'informations, consultez la [Légende de la carte](../../user/map-legend/nautical-map.md).  


### Détail du fond marin {#seabed-detail}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*  

![Détails du fond marin](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *Menu → Configurer la carte → Style de carte → Détails → Détail du fond marin*

![Détails du fond marin](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Les données sur le fond marin contiennent des informations sur la végétation et les matériaux de surface généraux tels que les roches, les coquillages, le gravier, le corail, le limon, etc. En raison de la classification internationale des données sur le fond marin, il existe des options pour afficher ces détails sur une carte : *simple*, *catégorie*, *tout* ou *omettre*. Utilisez la [légende de la carte de la zone du fond marin](../map-legend/nautical-map.md#seabed-area) pour plus d'informations.

- **Simple** (*pour la version Android*) - affiche les symboles des amers conformément à la référence INT-1, indiquant la nature de la surface du fond marin.  
- **Catégorie** - en plus du symbole de l'amer, affiche également l'étiquette de l'amer correspondante, indiquant le matériau naturel, ou la catégorie d'algues et d'herbes marines.
- **Tout** - en plus du symbole de l'amer, de l'étiquette ou de la catégorie, affiche également des qualifications telles que fin, collant, grossier, etc. Pour les herbes marines et les algues, affiche les données marquées avec les étiquettes *taxon* et *genus*.  
- **Omettre** - n'affiche pas les détails du fond marin.  

:::info REMARQUE
Pour plus de détails sur la classification des détails de surface et les options de rendu, consultez le [wiki des amers d'OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::

### Détail des feux {#light-detail}

Android Allez à : *Menu → Configurer la carte → Style de carte Nautique → Autres attributs de carte → Détail des feux*

iOS Allez à : *Menu → Configurer la carte → Type de carte Nautique → Détails → Détail des feux*

Cette option affiche le niveau d'informations pour les feux de navigation. Vous pouvez choisir à quel point les caractéristiques des feux apparaissent près de chaque phare ou balise.

- **Simple** – affiche le nom par défaut de l'amer et la caractéristique du feu .
- **Secteurs** – affiche les arcs de secteurs complets et les détails pour tous les secteurs de feu visibles.
- **Secteur 1–5** – affiche les détails pour un numéro de secteur spécifique seulement.
- **Petit** – utilise un format d'étiquette compact pour les caractéristiques des feux.
- **Nom seulement** – affiche uniquement le nom de l'amer sans les données de feu.
- **Omettre** – masque toutes les informations sur les feux.


## Style de carte Marine {#marine-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marine Android](@site/static/img/plugins/nautical-charts/marine_android.png)

Allez à : *Menu* → *Configurer la carte* → *Style de carte* → *Marine*

</TabItem>

<TabItem value="ios" label="iOS">

![Marine iOS](@site/static/img/plugins/nautical-charts/marine_ios.png)

Allez à : *Menu* → *Configurer la carte* → *Type de carte* → *Marine*

</TabItem>

</Tabs>

Ce style ajoute des éléments visuels pour la navigation maritime, y compris les feux de navigation avec les caractéristiques des feux INT-1, qui décrivent le type, la couleur et le rythme d'un signal lumineux (par exemple, s'il clignote, sa couleur et l'intervalle entre les clignotements), et les feux sectoriels colorés qui indiquent la direction et la couleur de la lumière visible depuis la mer.

Dans le style Marine, les secteurs de feu sont affichés autour des phares et des balises : blanc (affiché en jaune sur la carte) indique la direction sûre pour la navigation, rouge marque les zones dangereuses ou restreintes, et vert montre les directions auxiliaires ou latérales.

:::info
Pour afficher ces informations, le plugin Nautique doit être activé, et la carte World Seamarks (ou World_seamarks_2.obf) doit être téléchargée. Les informations ne sont pas destinées à un usage de navigation officiel.
:::


### Attributs de carte {#map-attributes}
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Attributs Android](@site/static/img/plugins/nautical-charts/marine_details_android.png)

Allez à : *Menu* → *Configurer la carte* → *Style de carte Marine* → *Autres attributs de carte*

</TabItem>

<TabItem value="ios" label="iOS">

![Attributs iOS](@site/static/img/plugins/nautical-charts/marine_details_ios.png)

Allez à : *Menu* → *Configurer la carte* → *Type de carte Marine* → *Détails* → *Détail des feux/Détail du fond marin*

Allez à : *Menu* → *Configurer la carte* → *Type de carte Marine* → Choisir d'autres options

</TabItem>

</Tabs>

Après avoir activé le style de carte Marine, vous pouvez affiner les éléments visuels supplémentaires. Ces options vous permettent de contrôler comment les aides à la navigation, les isobathes, les détails du fond marin et les couleurs apparaissent sur la carte.

- **[Détail des feux](../plugins/nautical-charts/#light-detail)**. Définit comment les informations sur les feux des amers sont affichées. Options : **Par défaut** (nom complet avec caractéristiques des feux), *Petit* (format compact), *Nom seulement* (nom du feu seulement), ou *Omettre* (masquer les étiquettes).
- **[Détail du fond marin](../plugins/nautical-charts/#seabed-detail)**. Contrôle le niveau d'informations textuelles sur le fond marin. Options : Simple (infos de base), Catégorie (type de surface), Tout (données complètes), ou Omettre (pas de texte).
- **Couleur de l'eau**. Définit la couleur de base pour les zones d'eau. Options : *Par défaut, Bleu, Blanc*, ou *Gris* — utile pour ajuster la visibilité et le contraste sous différents modes d'éclairage.
- **Couleur des chenaux**. Change la couleur des chenaux et voies de navigation. Options : *Blanc, Plus blanc, Gris, Vert*, ou *Jaune* pour améliorer la lisibilité en fonction de l'arrière-plan de la carte.
- **Style des vasières**. Ajuste la couleur et la texture utilisées pour les vasières. Options : *Vert clair, Vert foncé, Marais*, ou *Vasière* — chacune met en évidence les zones intertidales peu profondes différemment.
- **Marques ENC**. Bascule *Activé/Désactivé*. Lorsque activé, affiche les marques de Carte Électronique de Navigation (ENC) telles que les bouées, les balises et autres aides à la navigation.
- **Style des coquillages**. Définit comment les coquillages ou les caractéristiques de surface du fond apparaissent sur le fond marin. Options : *Gris, Roches, Pierres*, ou *Rouge*, en fonction du style visuel préféré.
- **Isobathes en pointillés**. Bascule *Activé/Désactivé*. Lorsque activé, affiche les lignes d'isobathes en pointillés, améliorant la lisibilité dans les zones denses.
- **Schéma de couleurs de profondeur**. Sélectionne le schéma de couleurs pour les zones de profondeur. Options : *PAPER* (couleurs traditionnelles des cartes papier) ou *ECDIS* (palette standard du système de navigation électronique).
- **Taille des sondes ponctuelles**. Définit la taille de police pour les nombres de sondes ponctuelles (valeurs de profondeur). Options : *Par défaut, 10, 12, 14*, ou *16* — des valeurs plus grandes améliorent la visibilité sur les écrans haute résolution.
- **Distance des sondes ponctuelles**. Contrôle la fréquence d'apparition des sondes de profondeur sur la carte. Options : *Par défaut, 0, 5, 10, 15, 30, 60*, ou *120*, déterminant l'espacement entre les points de profondeur affichés.
- **Isobathe de profondeur de sécurité**. Met en évidence la ligne d'isobathe marquant le seuil de profondeur de sécurité. Options : *Désactivé, 0 m, 1 m, 2 m, 3 m, 4 m, 5 m*, ou *10 m*. Utile pour distinguer les zones de navigation sûres des zones peu profondes.


## Données nautiques supplémentaires {#additional-nautical-data}

### Points de profondeur {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cartes marines](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cartes marines](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Les [paquets](../start-with/download-maps.md#overview) de points de profondeur sont disponibles pour l'Europe, l'hémisphère Nord et l'hémisphère Sud et sont à titre informatif. Les points de profondeur indiquent les changements de topographie sous la surface de l'eau, indiquant la profondeur la moins profonde. Ceci est nécessaire pour la navigation *Bateau*. Après le téléchargement, vous devez activer les [Isobathes](#depth-contours) pour les afficher sur la carte.


### Isobathes {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Allez à : *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*  

![Isobathes sur Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Isobathes sur iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Lorsqu'une carte marine est affichée à l'écran, vous pouvez ajuster ce que vous voyez :

- Afficher ou masquer les *Isobathes*.
- Définir le niveau de détail des informations sur le fond marin : [*Largeur de ligne* et *Schéma de couleurs des lignes*](../map/vector-maps.md#-nautical-depth).

:::info REMARQUE
Vous pouvez aider l'application OsmAnd à enrichir la base de données des isobathes en ajoutant vos informations via [OpenSeaMap](https://map.openseamap.org/)
:::


## Articles connexes {#related-articles}

- [Importer / Exporter](../personal/import-export.md)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)