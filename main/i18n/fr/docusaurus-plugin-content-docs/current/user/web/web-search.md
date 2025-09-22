---
source-hash: 552b7ab98cb47cfebc8836a696e65629cc7df57f4c5ef8f5c2339517189845a0
sidebar_position: 6
sidebar_label:  Recherche
title: Recherche sur le site web
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

Le **menu Recherche** est accessible depuis le panneau latéral ou le **coin gauche 🔍** de la carte. Il contient :

- [Barre de recherche](#search-bar). Saisissez des mots-clés pour rechercher des lieux ou des points d'intérêt spécifiques.  
- [Section Catégories](#categories). Parcourez les options classées par catégories pour faciliter la recherche de POI.  
- [Section Explorer](#explore). Découvrez des lieux et des zones d'intérêt à proximité avec des photos.

![Menu Recherche](@site/static/img/web/search.png)


## Barre de recherche {#search-bar}

Cliquez sur le **bouton 🔍** pour lancer la recherche. Saisissez une requête dans la **ligne de recherche** et cliquez sur un POI pour ouvrir le [**menu contextuel du POI**](#explore-poi-data), où vous pouvez consulter les informations des balises.

Si vous recherchez par **nom de catégorie**, le premier résultat affichera la catégorie de ce POI. Si vous cliquez sur une catégorie de POI, la fenêtre [**Recherche par catégories**](#categories) s'ouvre.

![Menu contextuel du POI](@site/static/img/web/context_menu_poi.png)


Cliquer sur le POI choisi sur la carte ou dans la liste de résultats ouvre le **menu contextuel du POI**. Ce menu fournit les données et liens suivants :

- **Nom et icône**. Affiche le nom et l'icône du POI.  
- **Bouton ★ (*Ajouter aux favoris*)**. Permet d'enregistrer le POI choisi comme [favori](../web/web-userdata.mdx#add--edit-favorite).  
- **Bouton 🔍**. Déplace la carte vers l'emplacement du POI.  
- **Distance et direction**. Affiche la distance et la direction depuis votre position jusqu'au POI choisi.  
- **Emplacement**. Affiche les coordonnées du POI.  
- **Photos en ligne**. Fournit des données Wikimedia relatives au POI, si disponibles. Cliquez sur *Afficher tout* pour ouvrir la [Galerie de photos](#photo-gallery).
- **Données de l'objet**. Inclut des détails tels que les contacts, les liens vers les réseaux sociaux, les liens Wikipedia, les descriptions, les inscriptions, etc.  
- **ID OSM**. L'identifiant OpenStreetMap du POI.  
- **Coordonnées**. Cliquer sur les coordonnées permet de les copier.

![Menu contextuel du POI](@site/static/img/web/context_menu_poi_1.png)

## Catégories {#categories}

Vous pouvez choisir et afficher une catégorie de POI sur la carte dans le **menu Catégories** :

- Sélectionnez parmi les **6 catégories les plus populaires**.  
- Ou cliquez sur **Afficher tout** pour ouvrir la liste complète des catégories de POI.

![Catégories de POI](@site/static/img/web/categories_poi.png)

Cliquer sur le POI sélectionné sur la carte ou dans la liste de résultats ouvre le **menu contextuel du POI**. Ce menu fournit les données et liens suivants :

- **Nom et icône**. Affiche le nom et l'icône du POI.  
- **Bouton ★ (*Ajouter aux favoris*)**. Permet d'enregistrer le POI choisi comme [favori](../web/web-userdata.mdx#add--edit-favorite).  
- **Bouton 🔍**. Déplace la carte vers l'emplacement du POI.  
- **Distance et direction**. Affiche la distance et la direction depuis votre position jusqu'au POI choisi.  
- **Emplacement**. Affiche les coordonnées du POI.  
- **Photos en ligne**. Fournit des données Wikimedia relatives au POI, si disponibles. Cliquez sur *Afficher tout* pour ouvrir la [Galerie de photos](#photo-gallery).
- **Données de l'objet**. Inclut des détails tels que les contacts, les liens vers les réseaux sociaux, les liens Wikipedia, les descriptions, les inscriptions, etc.  
- **ID OSM**. L'identifiant OpenStreetMap du POI.  
- **Coordonnées**. Cliquer sur les coordonnées permet de les copier.

![Menu contextuel du POI](@site/static/img/web/categories_poi_1.png)


## Explorer {#explore}

La section **Explorer** du menu Recherche facilite la recherche de lieux et l'affichage des points d'intérêt (POI) avec leurs photos (source [Wikidata](https://www.wikidata.org/)) directement sur la carte.


Pour commencer :

1. Cliquez sur l'**icône 🔍** pour ouvrir l'onglet de recherche, qui affiche les catégories de POI populaires et le menu **Explorer** en dessous.  
2. Les données d'**Explorer** s'afficheront automatiquement sur la carte.  
3. Sélectionnez **"Afficher tout"** dans la section Explorer pour ouvrir la liste complète des catégories avec le bouton ***Filtrer*** en haut.  

   ![Menu Explorer](@site/static/img/web/explore.png)

4. Appuyer sur le bouton ***Filtrer*** ouvre le menu des catégories pour "Explorer". Pour affiner votre recherche, ouvrez le menu des catégories et sélectionnez les éléments qui vous intéressent.  

   ![Menu Explorer](@site/static/img/web/explore_cat.png)

### Données du POI d'Explorer {#explore-poi-data}

Cliquer sur un POI avec image ouvre un nouveau menu contextuel qui inclut :

- **Nom et balise du POI**. Affiche le nom et la balise générale du POI.  
- **Bouton 🔍**. Déplace la carte vers l'emplacement du POI.  
- **Distance et direction**. Affiche la distance et la direction depuis votre position jusqu'au POI choisi.  
- **Emplacement**. Affiche les coordonnées du POI.  
- **Description**. Fournit des informations supplémentaires sur le POI.  
- **Photos en ligne**. Affiche les données Wikimedia relatives au POI, si disponibles. Cliquez sur *Afficher tout* pour ouvrir la [Galerie de photos](#photo-gallery).  
- **Données de l'objet**. Inclut des détails tels que les contacts, les liens vers les réseaux sociaux, les liens Wikipedia, etc.  
- **ID OSM**. Affiche l'identifiant OpenStreetMap du POI.  
- **Coordonnées**. En cliquant sur les coordonnées, vous pouvez les copier.

![Menu Explorer](@site/static/img/web/poi_context.png)

### Galerie de photos {#photo-gallery}

Si vous cliquez sur ***Afficher tout*** dans la section **Photos en ligne** du menu contextuel, la *Galerie de photos* du POI sélectionné s'ouvre.  
Dans la *Galerie de photos*, vous pouvez faire défiler toutes les photos du POI.  

Chaque photo contient :

- **Date**. La date à laquelle la photo a été prise ou téléchargée.  
- **Auteur**. Le nom de l'auteur de la photo.  
- **Informations sur la licence**. Détails sur les droits d'utilisation de la photo.  
- **Description**. Informations supplémentaires sur la photo.

![Galerie de photos](@site/static/img/web/poi_photo.png)