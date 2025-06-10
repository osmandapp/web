---
source-hash: b74e034d907048857594823cf149189c003eb875c25da16719cff9a3addc6202
sidebar_position: 2
title:  Télécharger des cartes
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

Le téléchargement de cartes dans l'application OsmAnd est une étape clé pour assurer le bon fonctionnement et l'utilisation de la navigation hors ligne. Sans cartes hors ligne, l'application ne peut pas fonctionner pleinement. Le téléchargement de cartes vous donne accès à des cartes de différentes régions, vous permettant de naviguer sans connexion Internet.

Vous avez deux *principales* façons de télécharger des cartes : **1)** [afficher la liste des régions dans le *Menu principal*](#maps-and-resources), ou **2)** [sélectionner la région requise directement sur la carte](#select-on-the-map). Cela vous donne la flexibilité de sélectionner les régions que vous souhaitez et garantit que les cartes correspondront à vos projets.

Bien qu'OsmAnd prenne en charge les cartes [Vectorielles](../map/vector-maps.md) et [Raster](../map/raster-maps.md), il est recommandé de commencer à travailler avec des cartes vectorielles hors ligne. Ce type de carte (en savoir plus sur les [types de cartes OsmAnd](../personal/maps-resources.md#map-types) ici) garantit le fonctionnement fiable de toutes les fonctions clés de l'application, y compris la [Recherche](../search/index.md), la [Navigation](../navigation/index.md) et le [Menu contextuel](../map/map-context-menu.md). Ceci est particulièrement important si vos voyages incluent des déplacements dans des endroits éloignés ou des lieux avec un accès Internet limité.


## Télécharger {#download}

Commencez à charger des cartes à partir de l'[écran de configuration initiale](#initial-setup-screen), ou allez dans le *menu latéral* principal *→* [Cartes et ressources](#maps-and-resources) et sélectionnez les cartes requises dans la liste générale, ou [sélectionnez une région](#select-on-the-map) directement sur la carte en appuyant sur la région dont vous avez besoin.


### Écran de configuration initiale {#initial-setup-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Télécharger la carte Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Télécharger la carte iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Lors du premier lancement de l'application, vous êtes invité à télécharger une carte adaptée à votre position actuelle, déterminée par votre connexion Internet. Cette étape est facultative, vous permettant de sauter le téléchargement et de passer directement à l'interface des cartes locales pour votre région.

Si vous utilisez un VPN, OsmAnd peut suggérer une carte basée sur la localisation virtuelle du VPN. Dans de tels cas, vous pouvez sélectionner manuellement une carte qui correspond mieux à votre région géographique réelle.


#### Menu à trois points {#three-dot-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Télécharger la carte Android](@site/static/img/steps/start_screen_first_screen_location_andr.png) ![Télécharger la carte iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Télécharger la carte Android](@site/static/img/steps/start_screen_first_screen_location_ios.png) ![Télécharger la carte iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Menu de localisation :**

- *Sélectionner une autre région.* Ouvre le menu [Télécharger des cartes](#maps-and-resources).
- *Nous permettre de déterminer votre position.* [Demande l'autorisation](../start-with/first-steps.md#permission-to-access-the-location) d'accéder à la position et de trouver la carte requise à l'aide de ces données.

**Autre menu :**

- *Restaurer depuis OsmAnd Cloud.* Ouvre l'écran principal ou l'écran de connexion d'[OsmAnd Cloud](../personal/osmand-cloud.md). Ceci est utile si vous avez réinstallé l'application ou si vous souhaitez restaurer l'expérience utilisateur précédente sans resélectionner les régions et les paramètres.
- *Restaurer depuis un fichier.* Ouvre le gestionnaire de fichiers de l'appareil pour sélectionner et importer un fichier `.osf`.


### Cartes et ressources {#maps-and-resources}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menu de téléchargement de carte général Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu de téléchargement de carte général iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

L'écran [Cartes et ressources](../personal/maps-resources.md) donne accès aux sections suivantes :

- [Téléchargements](../personal/maps-resources.md#downloads). Offre une sélection complète de [types de cartes OsmAnd](../personal/maps-resources.md#map-types).
- [Local](../personal/maps-resources.md#local). Affiche toutes les données cartographiques actuellement stockées sur votre appareil, y compris les ressources personnalisées et importées.
- [Mises à jour](../personal/maps-resources.md#updates). Vous permet d'actualiser les cartes chaque mois pour maintenir vos données à jour.

#### Téléchargement de cartes {#downloading-maps}

Pour télécharger un type de carte spécifique pour un pays ou une région :

- Naviguez vers le dossier de la région requise, comme l'Afrique, l'Europe ou un autre continent.
- Sélectionnez votre pays ou région préféré dans la liste.
- Sur l'écran suivant, examinez et choisissez parmi les types de cartes disponibles pour cette zone.

Vous pouvez trouver des informations sur d'autres types de cartes dans la section [Téléchargements](../personal/maps-resources.md#downloads) de l'article **Cartes**.

### Options de la carte du monde {#world-map-options}

OsmAnd inclut deux options de carte du monde :

1. **Mini carte du monde** (préinstallée). Une carte légère qui permet une navigation de base et donne un aperçu du monde.
2. **Carte du monde détaillée** (téléchargeable). Une carte mondiale présentant les principales villes, routes, rivières et autres caractéristiques géographiques.

***Notes importantes :***

- La **carte du monde détaillée ne remplace pas les cartes de pays ou de régions individuelles.** Elle est utile pour un aperçu mais ne contient pas le même niveau de détail que les cartes régionales.
- Si vous avez besoin d'une navigation détaillée, **téléchargez manuellement les cartes de pays ou de régions spécifiques** via *Menu → Cartes et ressources → Télécharger des cartes.*
- Les utilisateurs avec **OsmAnd Pro ou Maps+** peuvent télécharger un **nombre illimité de cartes** mais doivent toujours télécharger chaque région séparément.
- **Il n'y a pas d'option unique pour télécharger toutes les cartes du monde en une seule fois.**


### Sélectionner sur la carte {#select-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Un court appui sur la carte du monde permet de télécharger la carte de la région](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Un court appui sur la carte du monde permet de télécharger la carte de la région](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Une façon de télécharger une carte est de dézoomer sur la carte du monde et d'appuyer brièvement pour sélectionner une région à télécharger. Cette zone sera surlignée en jaune, et un panneau apparaîtra en bas avec le nom de la région et une suggestion de la télécharger ou de sélectionner d'autres cartes.

:::tip Couleur de la carte
Sur le petit écran, la carte sélectionnée pour le téléchargement sera surlignée en jaune, les cartes déjà téléchargées seront surlignées en vert et les cartes désactivées seront surlignées en orange. Les cartes **désactivées** sont ignorées pour accélérer le programme si vous avez beaucoup de cartes chargées.
:::

### Recherche {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Fonction de recherche pour télécharger la carte Android](@site/static/img/settings/search_download_map_3_andr.png) ![Fonction de recherche pour télécharger la carte Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Fonction de recherche pour télécharger la carte iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Fonction de recherche pour télécharger la carte iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

La recherche permet de trouver facilement une carte ou une région spécifique, offrant un moyen pratique et rapide de télécharger les données dont vous avez besoin. Vous pouvez trouver et télécharger la carte à l'aide de la [fonction de recherche](../search/index.md).

- Lancez une recherche en saisissant le nom d'un pays ou d'une région dans le champ de recherche. Sélectionnez ensuite la carte requise dans la liste qui apparaît.
- Les cartes disponibles au téléchargement sont affichées en gris avec une icône de téléchargement, les cartes téléchargées ont une couleur verte et un bouton de menu.
- Appuyez sur le nom du résultat requis et la liste des cartes régionales s'ouvrira.
- Sélectionnez les [types de cartes](../personal/maps-resources.md#map-types) : *Carte standard, Carte routière uniquement, Courbes de niveau, Wikipédia*.

> *Dernière mise à jour : janvier 2025*