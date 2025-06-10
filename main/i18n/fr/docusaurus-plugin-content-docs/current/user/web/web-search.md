---
source-hash: 576b2a6ec144f65d9bbd387b7ce25523a8a81f929e1a4c17b8d400a8c97827dd
sidebar_position: 6
sidebar_label: Search
title: Rechercher sur le site Web
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


<InfoIncompleteArticle/>


## Aperçu {#overview}

Le **menu de recherche** est accessible depuis le panneau latéral ou le **coin gauche 🔍** de la carte. Il contient :

- [Barre de recherche](#search-bar). Saisissez des mots-clés pour rechercher des lieux spécifiques ou des points d'intérêt.
- [Section Catégories](#categories). Parcourez les options catégorisées pour faciliter les recherches de points d'intérêt.
- [Section Explorer](#explore). Découvrez les lieux et les zones d'intérêt à proximité avec des photos.

![Menu de recherche](@site/static/img/web/search.png)


## Barre de recherche {#search-bar}

Cliquez sur le **bouton 🔍** pour lancer la recherche. Saisissez une requête dans la **ligne de recherche** et cliquez sur un point d'intérêt pour ouvrir le [**menu contextuel du point d'intérêt**](#explore-poi-data), où vous pouvez afficher les informations des balises.

Si vous recherchez par **nom de catégorie**, le premier résultat affichera la catégorie de ce point d'intérêt. Si vous cliquez sur une catégorie de point d'intérêt, la fenêtre [**Recherche par catégories**](#categories) s'ouvre.

![Menu contextuel du point d'intérêt](@site/static/img/web/context_menu_poi.png)


Cliquez sur le point d'intérêt choisi sur la carte ou dans la liste des résultats pour ouvrir le **menu contextuel du point d'intérêt**. Ce menu fournit les données et liens suivants :

- **Nom et icône**. Affiche le nom et l'icône du point d'intérêt.
- **Bouton ★ (*Ajouter aux favoris*)**. Vous permet d'enregistrer le point d'intérêt choisi comme [favori](../web/web-userdata.mdx#add--edit-favorite).
- **Bouton 🔍**. Déplace la carte vers l'emplacement du point d'intérêt.
- **Distance et direction**. Affiche la distance et la direction de votre emplacement au point d'intérêt choisi.
- **Emplacement**. Affiche les coordonnées du point d'intérêt.
- **Photos en ligne**. Fournit les données Wikimedia relatives au point d'intérêt, si disponibles. Cliquez sur *Afficher tout* pour ouvrir la [Galerie de photos](#photo-gallery).
- **Données de l'objet**. Comprend des détails tels que les contacts, les liens vers les réseaux sociaux, les liens Wikipedia, les descriptions, les inscriptions, etc.
- **ID OSM**. L'ID OpenStreetMap du point d'intérêt.
- **Coordonnées**. En cliquant sur les coordonnées, vous pouvez les copier.

![Menu contextuel du point d'intérêt](@site/static/img/web/context_menu_poi_1.png)

## Catégories {#categories}

Vous pouvez choisir et afficher une catégorie de point d'intérêt sur la carte dans le **menu Catégories** :

- Sélectionnez parmi les **6 catégories les plus populaires**.
- Ou cliquez sur **Afficher tout** pour ouvrir la liste complète des catégories de points d'intérêt.

![Catégories de points d'intérêt](@site/static/img/web/categories_poi.png)

Cliquez sur le point d'intérêt sélectionné sur la carte ou dans la liste des résultats pour ouvrir le **menu contextuel du point d'intérêt**. Ce menu fournit les données et liens suivants :

- **Nom et icône**. Affiche le nom et l'icône du point d'intérêt.
- **Bouton ★ (*Ajouter aux favoris*)**. Vous permet d'enregistrer le point d'intérêt choisi comme [favori](../web/web-userdata.mdx#add--edit-favorite).
- **Bouton 🔍**. Déplace la carte vers l'emplacement du point d'intérêt.
- **Distance et direction**. Affiche la distance et la direction de votre emplacement au point d'intérêt choisi.
- **Emplacement**. Affiche les coordonnées du point d'intérêt.
- **Photos en ligne**. Fournit les données Wikimedia relatives au point d'intérêt, si disponibles. Cliquez sur *Afficher tout* pour ouvrir la [Galerie de photos](#photo-gallery).
- **Données de l'objet**. Comprend des détails tels que les contacts, les liens vers les réseaux sociaux, les liens Wikipedia, les descriptions, les inscriptions, etc.
- **ID OSM**. L'ID OpenStreetMap du point d'intérêt.
- **Coordonnées**. En cliquant sur les coordonnées, vous pouvez les copier.

![Menu contextuel du point d'intérêt](@site/static/img/web/categories_poi_1.png)


## Explorer {#explore}

La section **Explorer** du menu de recherche facilite la recherche de lieux et l'affichage de points d'intérêt (POI) avec leurs photos ([source Wikidata](https://www.wikidata.org/)) directement sur la carte.


Pour commencer :

1. Cliquez sur l'**icône 🔍** pour ouvrir l'onglet de recherche, qui affiche les catégories de points d'intérêt populaires et le menu **Explorer** ci-dessous.
2. Les données **Explorer** seront automatiquement affichées sur la carte.
3. Sélectionnez **"Afficher tout"** dans la section Explorer pour ouvrir la liste complète des catégories avec le bouton ***Filtrer*** en haut.

   ![Menu Explorer](@site/static/img/web/explore.png)

4. Appuyer sur le ***bouton Filtrer*** ouvre le menu Catégories pour "Explorer". Pour affiner votre recherche, ouvrez le menu Catégories et sélectionnez les éléments qui vous intéressent.

   ![Menu Explorer](@site/static/img/web/explore_cat.png)

### Explorer les données des points d'intérêt {#explore-poi-data}

Cliquer sur un point d'intérêt image ouvre un nouveau menu contextuel qui comprend :

- **Nom et balise du point d'intérêt**. Affiche le nom et la balise générale du point d'intérêt.
- **Bouton 🔍**. Déplace la carte vers l'emplacement du point d'intérêt.
- **Distance et direction**. Affiche la distance et la direction de votre emplacement au point d'intérêt choisi.
- **Emplacement**. Affiche les coordonnées du point d'intérêt.
- **Description**. Fournit des informations supplémentaires sur le point d'intérêt.
- **Photos en ligne**. Affiche les données Wikimedia relatives au point d'intérêt, si disponibles. Cliquez sur *Afficher tout* pour ouvrir la [Galerie de photos](#photo-gallery).
- **Données de l'objet**. Comprend des détails tels que les contacts, les liens vers les réseaux sociaux, les liens Wikipedia, etc.
- **ID OSM**. Affiche l'ID OpenStreetMap du point d'intérêt.
- **Coordonnées**. En cliquant sur les coordonnées, vous pouvez les copier.

![Menu Explorer](@site/static/img/web/poi_context.png)

### Galerie de photos {#photo-gallery}

Si vous cliquez sur ***Afficher tout*** dans la section **Photos en ligne** du menu contextuel, la *Galerie de photos* du point d'intérêt sélectionné s'ouvre.
Dans la *Galerie de photos*, vous pouvez faire défiler toutes les photos du point d'intérêt.

Chaque photo contient :

- **Date**. La date à laquelle la photo a été prise ou téléchargée.
- **Auteur**. Le nom de l'auteur de la photo.
- **Informations sur la licence**. Détails sur les droits d'utilisation de la photo.
- **Description**. Informations supplémentaires sur la photo.

![Galerie de photos](@site/static/img/web/poi_photo.png)


> *Dernière mise à jour : janvier 2025*