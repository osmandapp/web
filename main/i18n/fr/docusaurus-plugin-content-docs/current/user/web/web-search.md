---
source-hash: cd5ee4063d6f696a2707a1c3427de7ad82005454c2015da463bd27c2e760db67
sidebar_position: 10
sidebar_label: Recherche
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


## Aperçu {#overview}

Le **menu Recherche** est accessible depuis le panneau latéral ou depuis l'icône de recherche 🔍 sur la carte. Il contient :

- [Barre de recherche](#search-bar). Saisissez des mots-clés pour rechercher des lieux spécifiques, des points d'intérêt, des favoris ou des traces.  
- [Section Catégories](#categories). Parcourez les options classées par catégories pour faciliter les recherches de POI.  
- [Section Explorer](#explore). Consultez les POI populaires pour le centre actuel de la carte et explorez des lieux avec des photos sur la carte.

![Menu Recherche](@site/static/img/web/search.png)

## Options de recherche {#search-options}

### Barre de recherche {#search-bar}

Utilisez la **Barre de recherche** pour trouver des lieux spécifiques, des points d'intérêt, des [favoris](../web/web-favorites.md) et des [traces](../web/web-tracks.md) par nom. Cliquez sur l'icône de recherche, saisissez votre requête et sélectionnez un résultat dans la liste. Sélectionner un POI ouvre le [Menu contextuel du POI](#poi-context-menu), tandis que la sélection d'un favori ou d'une trace ouvre ses détails, où vous pouvez consulter les informations et utiliser des actions rapides.

Si vous recherchez par nom de catégorie, le premier résultat peut afficher la catégorie de POI correspondante. Cliquez sur la catégorie pour ouvrir la vue [Recherche par catégories](#categories).

![Options de recherche](@site/static/img/web/search_bar.png)

### Catégories {#categories}

Utilisez **Catégories** pour parcourir les POI par type et les afficher sur la carte. Le menu affiche six catégories populaires pour un accès rapide. Si vous avez besoin de plus d'options, cliquez sur Afficher tout pour ouvrir la liste complète de 18 catégories disponibles. Sélectionner une catégorie affiche les POI correspondants sur la carte ; sélectionner un POI ouvre le [Menu contextuel du POI](#poi-context-menu).

![Options de recherche](@site/static/img/web/search_categories.png)

### Explorer {#explore}

La section **Explorer** affiche des [lieux populaires](https://osmand.net/docs/user/map/popular_places) avec des photos directement sur la carte. Elle crée une liste de POI pour le centre actuel de la carte (triés par popularité) et affiche les mêmes lieux sous forme de marqueurs photo sur la carte. Les images d'aperçu et les informations POI sont basées sur Wikidata/Wikimedia et des sources connexes lorsque disponibles.

Ouvrez l'onglet Recherche pour accéder à Explorer — les résultats Explorer s'affichent automatiquement sur la carte. Utilisez Afficher tout pour ouvrir la liste complète des catégories Explorer. Vous pouvez affiner ce qui apparaît dans la liste et sur la carte en utilisant Filtrer, qui ouvre le menu des catégories Explorer. Sélectionner un POI dans la liste ou sur la carte ouvre le [Menu contextuel du POI](#poi-context-menu).

![Options de recherche](@site/static/img/web/search_explore.png) ![Options de recherche](@site/static/img/web/explore_filters.png)

## Menu contextuel du POI {#poi-context-menu}

Peu importe l'option de recherche utilisée (Barre de recherche, Catégories ou Explorer), sélectionner un POI sur la carte ou dans la liste de résultats ouvre le Menu contextuel du POI. Le menu contextuel est l'endroit principal pour consulter les informations POI et effectuer des actions courantes. Il combine les détails POI (tels que l'emplacement et les données associées) avec des actions rapides (par exemple, sauvegarder, partager ou démarrer la navigation).

### Détails du POI {#poi-details}

Le **Menu contextuel du POI** affiche les informations clés sur le lieu sélectionné et fournit des liens basés sur les données OSM et Wikimedia/Wikidata disponibles :
- **Nom et icône** — affiche le nom du POI et son icône.
- **Distance et direction** — affiche la distance et la direction vers le POI.
- **Emplacement** — affiche les coordonnées du POI.
- **Horaires d'ouverture** — affiche les horaires d'ouverture analysés à partir des [données OSM](https://wiki.openstreetmap.org/wiki/Key:opening_hours). Le statut actuel est affiché dynamiquement en fonction de l'heure actuelle (par exemple, *Ouvert maintenant*, *Fermé* ou *Ouvre à 10:00*), et l'horaire complet est affiché ci-dessous.
- **Description** — fournit des informations supplémentaires sur le POI lorsque disponibles (par exemple, de Wikipedia).
- **Photos en ligne** — affiche les photos Wikimedia relatives au POI lorsque disponibles. Sélectionnez Afficher tout pour ouvrir la Galerie de photos. Sélectionnez une photo pour l'ouvrir dans la galerie (mode Ouvrir photo).
- **Données de l'objet** — informations supplémentaires sur le POI, incluant les balises OSM et d'autres détails tels que les contacts, les liens sociaux, les liens Wikipedia et Wikivoyage, les descriptions et les inscriptions (lorsque disponibles).
- **ID OSM** — l'identifiant OpenStreetMap du POI.
- **Coordonnées** — sélectionnez les coordonnées pour les copier.

![Menu contextuel du POI](@site/static/img/web/poi_context_menu_new.png)

### Actions du POI {#poi-actions}

Le **Menu contextuel du POI** inclut des boutons d'action pour les tâches courantes. Utilisez ces actions rapides pour sauvegarder un lieu, le partager ou démarrer la planification d'itinéraire et la navigation :
- **Ajouter aux favoris** — sauvegarde le POI dans vos [Favoris](../web/web-favorites.md#favorites-actions).
- **Partager** — génère un lien partageable qui ouvre directement le POI dans OsmAnd Web. Le lien inclut le nom du POI, le type et les coordonnées (épingle).
- **Directions depuis** — définit le POI sélectionné comme point de départ et ouvre le panneau d'itinéraire pour que vous puissiez choisir une destination et un profil.
- **Navigation** — définit le POI sélectionné comme point de destination pour la [navigation](../web/web-navigation.md#start-a-route).

### Galerie de photos {#photo-gallery}

Cliquez sur ***Afficher tout*** dans la section **Photos en ligne** du Menu contextuel du POI pour ouvrir la *Galerie de photos* du POI sélectionné. La galerie vous permet de parcourir toutes les photos disponibles. Cliquez sur une photo pour l'ouvrir dans une vue agrandie (mode Ouvrir photo). Utilisez Retour pour revenir au Menu contextuel du POI.

Les détails de la photo incluent :
- **Date**. La date à laquelle la photo a été prise ou téléchargée.  
- **Auteur**. Le nom de l'auteur de la photo.  
- **Informations sur la licence**. Détails sur les droits d'utilisation de la photo.  
- **Description**. Informations supplémentaires sur la photo.

![Galerie de photos](@site/static/img/web/poi_photo.png)


## Articles associés {#related-articles}

- [Rechercher tout](../search/search-all.md)
- [Rechercher POI](../search/search-poi.md)
- [Carte](../web/web-map.md)