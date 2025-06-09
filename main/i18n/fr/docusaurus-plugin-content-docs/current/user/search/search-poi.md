---
source-hash: e2ad787ed36896b3d30204d8bde96469c50383864d723756d324202a42b8a7c0
sidebar_position: 4
title:  Rechercher des POI
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>


## Vue d'ensemble {#overview}

La fonctionnalité [Point d'intérêt (POI) d'OsmAnd](https://wiki.openstreetmap.org/wiki/Points_of_interest) dans OsmAnd offre précision, visibilité et commodité pour trouver des lieux intéressants, des itinéraires et des services près de votre position actuelle ou d'une zone sélectionnée sur la carte.

La barre de recherche vous permet de saisir des mots-clés liés aux lieux qui vous intéressent. La recherche de POI présente également une liste pratique triée par [catégorie](#poi-search-by-categories) pour vous aider à trouver rapidement ce que vous cherchez, et le [filtre](#save-new-custom-filters) vous permet de sélectionner des caractéristiques spécifiques de POI pour n'afficher que les résultats pertinents.

La [recherche personnalisée](#custom-poi-search) améliore la fonctionnalité de recherche en permettant plusieurs choix de catégories et de sous-catégories. Vous pouvez enregistrer les filtres créés pour une utilisation future, ce qui facilite la localisation rapide des POI qui répondent à des critères ou préférences spécifiques. Pour plus de détails, reportez-vous à la section sur l'enregistrement des filtres personnalisés [ici](#save-new-custom-filters).

OsmAnd propose plusieurs façons d'accéder à l'outil de recherche où se trouve la section **Recherche par catégories**.

- Le [bouton de recherche](../widgets/map-buttons.md#search) est toujours affiché sur la carte, et en appuyant dessus, vous accédez à l'[écran général](#how-to-use) de l'outil, où vous trouverez l'onglet *Catégories*.
- *Android* : Allez dans le *Menu principal → Rechercher → onglet Catégories*.
- Lorsque vous vous préparez à démarrer un itinéraire, appuyez sur [*Navigation → Définir la destination → Champ de recherche → onglet Catégories*](../navigation/setup/route-navigation.md#set-target-point).
- *Android* : Allez dans le *Menu principal → Configurer la carte → Superposition de POI → Rechercher*](../map/point-layers-on-map.md#points-of-interest-pois).


## Comment utiliser {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Tous les types de POI dans OsmAnd se trouvent ici :* [lien gitHub](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Recherche de points d'intérêt (POI) :**
    - Permet de rechercher :
       - des points d'intérêt (POI) proches ou de catégories spécifiques.
       - des [itinéraires OSM](../map/routes.md).
       - des [lieux populaires (Wikipedia)](../map/map-context-menu.md#details).

    - Il est possible de filtrer et de trier les résultats par catégorie, distance ou évaluation.

    - Les résultats de la recherche affichent l'emplacement du POI, ses coordonnées, ses évaluations et ses avis.

- **Rechercher des POI par catégorie directement sur la carte** :
    - Vous devez sélectionner les catégories requises dans la [**liste**](../map/point-layers-on-map.md#points-of-interest-pois) dans *Configurer la carte → Afficher la superposition de POI...* et rechercher par icônes à l'emplacement attendu.

    - *Android* : Vous pouvez commencer à rechercher des POI dans *Menu → Rechercher → Catégories*.

- **Recherche par marque :**
    - Lorsque vous saisissez le nom d'un établissement commercial ou d'une marque (comme Audi, Starbucks ou Aldi), la liste des résultats de recherche est classée par priorité par nom de POI et triée par distance par rapport à l'emplacement correspondant.

    - Le nom de la localité est affiché à côté de chaque résultat de recherche pour vous aider à identifier le bon emplacement parmi d'autres à une distance similaire de vous.

    - Ce type de recherche est pratique si un point de vente au détail est spécialisé dans la vente de biens ou de services d'une seule marque ou si la marque elle-même est mieux connue et plus reconnaissable que le nom ou la catégorie du POI.

    - Pour effectuer une recherche, la balise `brand` et les noms de marque doivent être ajoutés à la description du POI.

    - Exemple de magasin de voitures : *Type de POI* - Concessionnaire automobile, *nom* - Octo Automobile, [***nom de la marque***](https://wiki.openstreetmap.org/wiki/Key:brand) - Audi, BMW, Fiat, Jaguar, Land Rover.

    ![Search POI Android](@site/static/img/search/brand_search_andr.png)


:::note
Pour accomplir certaines de ces tâches (localiser des adresses, des POI), vous devrez disposer du fichier de carte vectorielle hors ligne. Initialement, la recherche est basée sur les données situées sur la carte dans la zone visible de l'écran de l'appareil. Si vous ne trouvez rien, OsmAnd propose d'augmenter le rayon de recherche.
:::


## Recherche de POI par catégories {#poi-search-by-categories}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

L'outil **Recherche par catégories** vous permet de trouver rapidement des objets, des lieux et des itinéraires classés dans différentes catégories. Chaque catégorie possède un ensemble unique de caractéristiques, et cet outil dispose de filtres qui vous permettent d'affiner les résultats de la recherche en sélectionnant différentes valeurs pour des caractéristiques supplémentaires.

Comment ça marche :

- *Sélection de catégorie* - Vous sélectionnez la catégorie qui vous intéresse, comme les restaurants, les hôtels, les magasins, les itinéraires OSM, les lieux populaires de Wikipedia et autres, dans une liste de catégories suggérées.
- *Filtres de caractéristiques* - Après avoir sélectionné une catégorie, l'application affiche des caractéristiques supplémentaires qui peuvent être utilisées pour affiner la recherche. Par exemple, pour la catégorie Restaurants, vous pouvez sélectionner des filtres tels que le type de cuisine (italienne, chinoise, etc.), la fourchette de prix, l'évaluation et la disponibilité du stationnement.
- *Application des filtres* - Vous sélectionnez les valeurs requises dans les filtres, puis l'application applique ces filtres aux résultats de la recherche pour n'afficher que les propriétés qui correspondent aux caractéristiques spécifiées.
- *Affichage des résultats* - Après avoir appliqué les filtres, OsmAnd affiche une liste avec de brèves informations correspondant à la catégorie et aux caractéristiques définies.

Avantages :

- *Personnalisation par l'utilisateur* - Les filtres de fonctionnalités vous permettent de personnaliser les recherches pour répondre à leurs besoins et préférences spécifiques.
- *Résultats affinés* - Les filtres aident à affiner les résultats de la recherche, les rendant plus pertinents et précis.
- *Plusieurs catégories* - La base de données OpenStreetMap dispose d'un ensemble étendu de catégories de POI, vous permettant de trouver des sites de différents types et catégories.

<!--
La recherche de catégorie de POI vous permet de trouver et de sélectionner rapidement des lieux d'intérêt en fonction de vos besoins. C'est un outil pratique pour voyager, trouver des services ou des lieux d'intérêt à proximité, et planifier des itinéraires en fonction des catégories de POI sélectionnées.

OsmAnd commence à trouver les noms et les catégories de POI par les mots saisis. Les premiers résultats seront des catégories, les deuxièmes résultats seront des POI avec des informations supplémentaires, le nom complet, le nom de la catégorie, la direction et la distance du POI, les heures d'ouverture. En appuyant sur la catégorie souhaitée, la liste des POI de cette catégorie s'ouvre.

En appuyant sur le POI choisi dans la liste, le [menu contextuel de la carte](../map/map-context-menu.md#select-an-object-single-tap) du POI s'ouvre.
-->

### Types de filtres {#types-of-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

Avec la fonction **Filtre**, vous pouvez sélectionner les caractéristiques nécessaires et obtenir ainsi une liste contenant uniquement les objets pertinents. Pour utiliser le filtre :

- Sélectionnez la catégorie qui vous intéresse dans la liste des catégories.
- Sur l'écran qui s'ouvre, appuyez sur l'icône qui affiche le filtre. Elle se trouve sous le champ de saisie, à côté de *Afficher sur la carte*.
- Dans le filtre, sélectionnez le type de caractéristiques.

![Search POI Android](@site/static/img/search/search_poi_filter_icon_andr.png)

Un filtre peut être composé d'un grand nombre d'éléments, dont la présence dépend de la catégorie sélectionnée. Chaque catégorie possède un certain nombre de filtres qui lui sont propres, organisés en dossiers par type. Il existe un total de *22 catégories par défaut*. Certaines d'entre elles sont listées ici :

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Hébergement](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) comprend les établissements qui proposent un hébergement temporaire tels que les hôtels, les motels, les auberges de jeunesse, les maisons d'hôtes et les campings. Ces lieux offrent des commodités et des services pour un séjour confortable en voyage.
        Comprend *9* types de filtres : **Réfrigérateur** (a *2* valeurs), **Chauffage** (a *7* valeurs), **Type d'accès Internet** (a *3* valeurs), **Matelas** (a *2* valeurs), **Type de paiement** (plus de *10* valeurs), **Douche** (a *1* valeur), **Fumer** (a *6* valeurs), **Classement par étoiles** (a *10* valeurs), **Accessibilité en fauteuil roulant** (a *4* valeurs), Ouvert maintenant / Ouvert 24h/24 et 7j/7.

 2. **Café et restaurant**. [Café](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) et [restaurants](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) représentent des lieux de restauration.
        Comprend *16* types de filtres : **Table à langer** (a *3* valeurs), **Café** (a *2* valeurs), **Cuisine** (plus de *10* valeurs), **Livraison** (a *1* valeur), **Régime** (a *8* valeurs), **Plat** (plus de *10* valeurs), **Recharge d'eau potable** (a *1* valeur), **Drive-in** (a *1* valeur), **Type d'accès Internet** (a *3* valeurs), **Microbrasserie** (a *1* valeur), **Produits biologiques** (a *2* valeurs), **Places assises à l'extérieur** (a *1* valeur), **Type de paiement** (plus de *10* valeurs), **Fumer** (a *6* valeurs), **À emporter** (a *1* valeur), **Accessibilité en fauteuil roulant** (a *4* valeurs), Ouvert maintenant / Ouvert 24h/24 et 7j/7.

 3. **Station de recharge**. Une [station de recharge](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) est une infrastructure où les propriétaires de véhicules électriques peuvent recharger leurs voitures, motos ou autres véhicules électriques. Ces points fournissent des chargeurs et des connexions appropriées pour fournir de l'énergie aux batteries des véhicules.
        Comprend *35* types de filtres : **Accès vélo** (a *1* valeur), **Accès bus** (a *1* valeur), **Accès poids lourds** (a *5* valeurs), **Accès voiture** (a *1* valeur), **Accès scooter** (a *1* valeur), **Authentification par application** (a *1* valeur), **Authentification par carte à puce** (a *1* valeur), **Authentification sans contact** (a *1* valeur), **Authentification par clé** (a *1* valeur), **Authentification requise** (a *1* valeur), **Authentification par appel téléphonique** (a *1* valeur), **Authentification par message court** (a *1* valeur), **Frais** (a *2* valeurs), **Type d'accès Internet** (a *3* valeurs), **Type d'accès Internet** (a *3* valeurs), **Accessibilité en fauteuil roulant** (a *4* valeurs), Ouvert maintenant / Ouvert 24h/24 et 7j/7, et autres.

 4. **Magasin de proximité et supermarché**. [Magasin de proximité](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) et [supermarché](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) représentent des établissements de vente au détail.
        Comprend *13* types de filtres : **Achat en gros** (a *2* valeurs), **Retrait d'espèces** (a *5* valeurs), **Table à langer** (a *3* valeurs), **Café** (a *2* valeurs), **Livraison** (a *1* valeur), **Régime** (a *8* valeurs), **Glace** (a *1* valeur), **Produits biologiques** (a *2* valeurs), **Type de paiement** (plus de *10* valeurs), **Filtre d'occasion** (a *2* valeurs), **Caisse automatique** (a *2* valeurs), **Accessibilité en fauteuil roulant** (a *4* valeurs), Ouvert maintenant / Ouvert 24h/24 et 7j/7.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Urgence](https://wiki.openstreetmap.org/wiki/Key:emergency) comprend les installations et les lieux associés aux services d'urgence tels que les hôpitaux, les postes de police, les casernes de pompiers et les centres médicaux de premiers secours.
        Ne contient aucun filtre.

 6. **Station-service**. Une [station-service](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), également connue sous le nom de station de remplissage, station d'essence, station-service et garage d'essence. C'est l'établissement de type commerce de détail où les véhicules à moteur peuvent être ravitaillés.
        Comprend *13* types de filtres : **Lavage de voiture** (a *2* valeurs), **Retrait d'espèces** (a *5* valeurs), **Air comprimé** (a *1* valeur), **Type de carburant (avia)** (a plus de *20* valeurs), **Cartes de carburant** (a *5* valeurs), **Type de paiement** (a plus de *20* valeurs), **Caisse automatique** (a *2* valeurs), **Accès motoneige** (a *3* valeurs), **Toilettes** (plus de *1* valeur), **Aspirateur** (a *1* valeur), **Distributeur de carburant automatique** (a *1* valeur), **Accessibilité en fauteuil roulant** (a *4* valeurs), Ouvert maintenant / Ouvert 24h/24 et 7j/7.

 7. **Finance**. [Finance](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) utilisé pour les bureaux d'entreprises du secteur financier.
        Comprend *5* types de filtres.

 8. **Alimentation**. [Alimentation](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) comprend tous les lieux proposant de la nourriture et des boissons.
        Comprend *24* types de filtres.

 9. **Santé**. [Santé](https://wiki.openstreetmap.org/wiki/Healthcare) comprend les services fournis par différents professionnels dans différents types d'établissements.
        Comprend *13* types de filtres.

 10. **Loisirs**. [Loisirs](https://wiki.openstreetmap.org/wiki/Category:Leisure) comprend divers types de lieux et d'installations de divertissement.
        Comprend *15* types de filtres.

 11. **Nautique**. Comprend les POI liés aux types nautiques.
        Ne contient aucun filtre.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Comprend les POI qui sont proches de vous.
        Comprend *216* types de filtres.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Parking](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) comprend les installations utilisées par le public, les clients ou d'autres utilisateurs autorisés pour garer des véhicules tels que des voitures et des camions, communément appelées parking (anglais britannique) ou parking lot (anglais américain).
        Comprend *34* types de filtres.

 14. **Transport personnel**. Tous les [types de véhicules](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) peuvent être en votre possession.
        Comprend *38* types de filtres.

 15. **Lieux populaires (Wikipedia)**. Pour rechercher dans cette catégorie, vous devez télécharger la [carte Wikipedia](../plugins/wikipedia.md#overview) de la région qui vous intéresse.
        Ne contient aucun filtre.

 16. **Accès privé**.
        Comprend *6* types de filtres.

 17. **<Translate android="true" ids="poi_filter_public_transport"/>**. C'est un système de transport conçu pour transporter des personnes à des fins publiques, accessible à tous les résidents et visiteurs d'une ville ou d'une région.
        Comprend *9* types de filtres.

 18. **Itinéraires**. Comprend les [itinéraires OSM](../map/routes.md) pour divers types d'activités.
        Comprend *14* types de filtres : **Point de contrôle**, **Nœud de réseau cyclable**, **Nœud de réseau de randonnée**, **Réseau d'itinéraires (cyclisme)**, **Réseau d'itinéraires (randonnée)**, **Catégorie de point d'itinéraire**, **Sports aériens**, **Cyclisme**, **Conduite**, **À pied**, **Motocyclisme**, **Autres itinéraires**, **Sports nautiques**, **Sports d'hiver**.

 19. **Tourisme**. C'est une activité dans laquelle les gens visitent des lieux ou des sites intéressants pour se familiariser avec eux et profiter de leur beauté, de leur histoire ou de leur signification.
        Comprend *8* types de filtres.

 20. **Sport**. Comprend les zones pour les activités sportives.
        Comprend *11* types de filtres.

 21. **Magasin**. [Magasin](https://wiki.openstreetmap.org/wiki/Key:shop) désigne une variété d'établissements et d'entreprises qui proposent divers biens ou services à la vente, tels que les épiceries, les magasins de vêtements, les magasins d'électronique, et autres.
        Comprend *36* types de filtres.

 22. **Tourisme**. [Tourisme](https://wiki.openstreetmap.org/wiki/Key:tourism) comprend les lieux et les choses d'intérêt spécifique pour les touristes, y compris les lieux à voir, les lieux où séjourner, et les choses et les lieux fournissant des informations et un soutien aux touristes.
        Comprend *32* types de filtres.

 23. **Eau**. Sources d'[eau potable](https://wiki.openstreetmap.org/wiki/Key:drinking_water) créées ou aménagées par l'homme.
        Ne contient aucun filtre.


### Réorganiser les catégories {#rearrange-categories}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

La fonction Réorganiser les catégories vous permet de lister uniquement les catégories dont vous avez besoin et de les organiser dans l'ordre qui vous convient le mieux.

Description et mode d'emploi :

- Initialement, *la liste est triée par ordre alphabétique.* Les catégories créées sont également ajoutées par ordre alphabétique.
- Les modifications apportées à la liste des catégories sont effectuées pour chaque profil séparément.
- Déplacez les catégories en les faisant glisser et en les déposant à la bonne position dans la liste.
- *Pour masquer* les catégories inutiles, appuyez sur l'icône **moins**.
- **Disponible**. Les catégories précédemment *masquées* peuvent être réintégrées dans la liste affichée en appuyant sur l'icône **plus**.
- Utilisez le bouton **Réinitialiser** pour rétablir la liste à l'état prédéfini.
- Les catégories créées avec la [recherche personnalisée](#custom-poi-search) ou les [filtres](#save-new-custom-filters) peuvent être supprimées à l'aide de l'icône **Supprimer**.

![Search POI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)


### Recherche en ligne {#online-search}

<InfoAndroidOnly />

![Search POI Android](@site/static/img/search/search_online_2_andr.png)

La **recherche en ligne** permet de trouver des lieux, des adresses et des points d'intérêt en temps réel. OsmAnd utilise [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), un géocodeur en ligne développé par OpenStreetMap qui traduit les requêtes textuelles des utilisateurs en coordonnées géographiques et inversement ([*exemple*](#example-of-online-search-query)).

La recherche en ligne comprend les fonctionnalités suivantes :

1. **Recherche par lieu** - Vous pouvez saisir le nom d'une ville, d'une rue, d'un quartier ou d'un autre lieu et OsmAnd fournira des résultats correspondant à la requête.
2. **Géocodage** - La recherche en ligne convertit vos requêtes textuelles en coordonnées géographiques, permettant une localisation précise.
3. **Géocodage inverse** - Vous pouvez saisir des coordonnées géographiques et la recherche renverra l'emplacement correspondant sous forme de nom de ville, de nom de rue ou de lieu sur la carte.
4. **Recherche par points d'intérêt** - Permet de rechercher différents points par nom ou par catégorie.

Utilisation de la recherche en ligne :

- La recherche en ligne garantit que les données sont à jour et que les mises à jour sont disponibles, car le service est constamment mis à jour et utilise des sources de données ouvertes.
- Elle offre une large couverture de lieux et d'objets, vous permettant de trouver des lieux d'intérêt dans différentes régions du monde.
- Les recherches en ligne sont en temps réel, offrant un accès rapide aux résultats de la recherche.
- Utile dans les villes et sur les autoroutes avec une bonne couverture Internet.
- La recherche en ligne est pratique si vous n'avez pas de cartes de la région et s'il est impossible de les télécharger.
- *Nécessite une connexion Internet constante et stable.*

![Search POI Android](@site/static/img/search/search_poi_online_increase2_andr.png)

Pour améliorer les résultats, avant d'utiliser l'outil de recherche, zoomez sur la carte pour vous rapprocher de l'endroit où vous devez trouver un lieu spécifique. Et pendant la recherche, vous pouvez **augmenter le rayon de recherche** pour trouver des lieux plus éloignés de votre position. Lors d'une recherche hors ligne, si les résultats requis ne sont pas disponibles, OsmAnd suggère d'utiliser la recherche en ligne.

Vous pouvez trouver des informations sur la navigation en ligne dans l'article [Routage en ligne](../navigation/routing/online-routing.md).

#### Exemple de requête de recherche en ligne {#example-of-online-search-query}

*Nominatim* dans OsmAnd est utilisé comme moteur de recherche pour les données OpenStreetMap, avec lequel vous pouvez rechercher par nom (la recherche par adresse est actuellement désactivée). Chaque résultat a un lien vers une page de détails pour voir quelles données sur l'objet sont stockées dans la base de données.

**Exemple de fichier XML.** Ce fichier XML ne contient aucune information de style associée. L'arborescence du document est affichée dans le [lien](https://nominatim.openstreetmap.org/search?format=xml&addressdetails=0&accept-language=en&q=%D0%9C%D1%96%D0%BD%D1%81%D0%BA+%D0%BD%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96+72+&addressdetails=1&limit=300).


## Recherche de POI personnalisée {#custom-poi-search}

La recherche de POI personnalisée est une fonctionnalité de recherche avancée qui vous permet de trouver des POI de différentes catégories et de les combiner pour une recherche plus précise et personnalisée. Contrairement à la recherche de POI standard, qui est limitée à certaines catégories prédéfinies, la recherche de POI personnalisée offre la flexibilité de sélectionner et de combiner différents types de POI.

Par exemple, vous pouvez rechercher des restaurants et des pharmacies simultanément pour trouver l'endroit le plus proche pour dîner, puis prendre vos médicaments. Ou rechercher la station-service et le service automobile les plus proches lorsque vous avez un problème avec votre voiture.

Cette fonctionnalité est particulièrement utile dans divers cas :

- *Voyage*. En voyage, en utilisant la recherche personnalisée, vous pouvez rapidement trouver différents lieux d'intérêt et les combiner pour créer un itinéraire optimal.
- *Urgences*. Si vous avez besoin de trouver rapidement plusieurs types de services, vous pouvez utiliser une recherche de POI personnalisée pour obtenir toutes les informations dont vous avez besoin.
- *Recherche de services à proximité*. La recherche personnalisée vous permet de combiner différentes catégories de POI pour une recherche facile si vous avez besoin de trouver plusieurs types de services dans un certain quartier ou sur une certaine section de l'itinéraire.

### Filtre de POI personnalisé {#custom-poi-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom search Android](@site/static/img/search/search_custom_filter_andr.png) ![Custom search Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Custom POI iOS](@site/static/img/search/custom_poi_ios.png)   ![Custom POI types iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Custom POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png) ![Custom POI types iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>

Le *filtre de POI personnalisé* comprend des ensembles de catégories de commodités composées de valeurs pertinentes. OsmAnd vous permet de collecter et de combiner les types de POI requis à partir d'une ou plusieurs catégories suggérées.

Pour créer des filtres personnalisés pour trouver des lieux sur la carte, sélectionnez les catégories et sous-catégories pertinentes qui vous intéressent. Vous pouvez [enregistrer](#save-new-custom-filters) ces filtres pour une utilisation ultérieure ou les [modifier](#edit-an-existing-filter) si nécessaire. Alternativement, vous pouvez afficher les données filtrées sans enregistrer en appuyant sur le bouton *Afficher*. Cependant, notez que si vous n'enregistrez pas les filtres, toutes les sélections seront annulées une fois que vous changerez de recherche ou quitterez l'outil de recherche.

- Chaque catégorie de commodité contient une liste de valeurs génériques disponibles pour les types de POI.
- Vous avez la possibilité de les sélectionner ou de les désélectionner individuellement en appuyant sur le champ du type qui vous intéresse.
- *Tout sélectionner* - Pour ce faire, sélectionnez le bouton bascule.
- Affinez la liste en excluant les éléments inutiles - Commencez à taper le nom suggéré dans le champ *Rechercher des types de POI*.

#### Catégories et leurs filtres {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Comprend 25 types : *Allotissements, Atoll, Arrondissement, Ville, Bloc de ville, Pays, Palais de justice, Douanes, Bureau diplomatique, Ferme, Gouvernement, Hameau, Île, Îlot, Habitation isolée, Localité, Quartier, Police, Prison, Quartier, Zone résidentielle, Banlieue, Ville, Hôtel de ville, Village*.

2. **Noël**. Comprend 5 types de filtres :
    *Événement de Noël, Marché de Noël, Pyramide de Noël, Magasin de Noël, Arbre de Noël*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Comprend 16 types : *Allotissements, Atoll, Arrondissement, Ville, Bloc de ville, Pays, Palais de justice, Douanes, Bureau diplomatique, Ferme, Gouvernement, Hameau, Île, Îlot, Habitation isolée, Localité, Quartier, Police, Prison, Quartier, Zone résidentielle, Banlieue, Ville, Hôtel de ville, Village*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Comprend 14 types de filtres.

5. **Infrastructure d'urgence**. Comprend 12 types de filtres.

6. **<Translate android="true" ids="amenity_type_finance"/>**. Comprend 12 types de filtres.

7. **Alimentation**. Comprend 12 types de filtres.

8. **Danger**. Comprend 5 types : *Danger d'avalanche, Danger d'érosion, Danger d'inondation, Danger nucléaire, Route glissante*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Comprend 31 types de filtres.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Comprend 148 types de filtres.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Comprend 121 types de filtres.

12. **<Translate android="true" ids="amenity_type_military"/>**. Comprend 7 types : *Zone dangereuse, Bunker militaire, Base navale militaire, Bureau militaire, Champ de tir militaire, Zone militaire, Site d'explosion nucléaire*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. Comprend 50 types de filtres.

14. **Nautique**. Comprend 41 types de filtres.

15. **<Translate android="true" ids="amenity_type_office"/>**. Comprend 39 types de filtres.

16. **Lieux populaires (Wikipedia)**. Comprend 1 type : *Wikipedia*.

17. **Accès privé**. Ne comprend aucun filtre.

18. **Itinéraires**. Comprend 15 types de filtres.

19. **Service**. Comprend 111 types de filtres.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Comprend 119 types de filtres.

21. **Magasin**. Comprend 156 types de filtres.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Comprend 103 types de filtres.

23. **Transport**. Comprend 97 types de filtres.

24. **Défini par l'utilisateur**. Comprend 1 type : *Autre code postal défini par l'utilisateur*.

<!--
:::note since OsmAnd 5.0 for Android
Disponible pour la recherche :

- Les POI religieux basés sur la balise `amenity=place_of_worship` sont divisés en lieux religieux spécifiques tels que les églises, les mosquées ou les synagogues.
- Les commodités mineures telles que "banc", "banc pour jeunes" (`amenity=bench`) sont disponibles dans la liste des catégories.
:::
-->

### Enregistrer de nouveaux filtres personnalisés {#save-new-custom-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Custom POI save Android](@site/static/img/search/custom_poi_save_android.png) ![Custom POI save Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI save iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Pour **enregistrer** un filtre personnalisé, sélectionnez les types de filtres, puis :

- Appuyez sur le bouton *Afficher* et sélectionnez le bouton *Enregistrer* pour iOS ou le bouton avec l'*icône indiquant l'action d'enregistrement* pour Android.
- Saisissez un nom pour la nouvelle catégorie.
- Votre filtre apparaîtra dans la liste de l'*onglet Catégories* dans l'outil de recherche.

Une autre façon d'**enregistrer** :

- Sélectionnez *[catégorie](#poi-search-by-categories) → [icône de filtre](#types-of-filters) →* sélectionnez les *types* de caractéristiques *→ menu à trois points → Enregistrer le filtre*.


### Modifier un filtre existant {#edit-an-existing-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom POI delete Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Depuis l'écran principal :

- Appuyez sur le bouton *Loupe* dans le coin supérieur gauche de l'écran de l'appareil pour ouvrir le menu *Recherche*.
- Sélectionnez l'onglet *Catégories*.
- Sélectionnez une catégorie personnalisée enregistrée, et l'écran des résultats de recherche apparaît.
- Appuyez sur l'icône *Filtre* à côté de *Afficher sur la carte* pour ouvrir l'écran *Filtres*.
- Appuyez sur le *menu à trois points*.
- Dans le menu déroulant, sélectionnez **Modifier le filtre**.
- Pour enregistrer une recherche de POI personnalisée après modification :
    - Sélectionnez les catégories de POI et les types de filtres pour celles-ci *→* appuyez sur *Afficher → menu à trois points → Enregistrer sous →* saisissez un nouveau nom de filtre ou *enregistrez* les modifications apportées au filtre actuel.


### Supprimer un filtre de POI personnalisé {#delete-custom-poi-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom POI delete Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Vous ne pouvez supprimer que les catégories qui ont été créées à l'aide de filtres ou de la recherche personnalisée.

- Allez dans l'onglet [Catégories](#poi-search-by-categories) et sélectionnez celle requise.
- Dans le champ à côté de *Afficher sur la carte*, appuyez sur l'icône représentant le *filtre*.
- Dans le menu *Filtres*, appuyez sur le *menu à trois points* ( &#8285; ) situé dans le coin supérieur droit de l'écran.
- Sélectionnez **Supprimer le filtre**.
- ***Vous ne pouvez pas annuler la suppression.***


#### Supprimer les catégories personnalisées (iOS) {#delete-custom-categories-ios}

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_3_ios.png)

Une option supplémentaire uniquement pour l'application iOS est **Supprimer les catégories personnalisées**.

- Cet élément se trouve à la fin de la liste de l'onglet *Catégories*.
- Sélectionnez les catégories inutiles une par une ou *Tout sélectionner*.
- Appuyez sur le bouton **Supprimer**.


## Articles connexes {#related-articles}

- [Rechercher tout](./search-all.md)
- [Rechercher une adresse](./search-address.md)
- [Historique de recherche](./search-history.md)
- [Rechercher des coordonnées](./search-coordinates.md)


> *Cet article a été mis à jour pour la dernière fois en mai 2025*