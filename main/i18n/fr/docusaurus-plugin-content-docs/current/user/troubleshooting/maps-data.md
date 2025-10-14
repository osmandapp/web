---
source-hash: 9b16ea12c0c7101ef5114041d96220299980dab0bb8a9a0697c20ff869c09d8b
sidebar_position: 4
title:  Cartes & Données
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Cartes {#maps}

### Pourquoi OsmAnd ne propose-t-il pas l'accès à Google Maps ? {#why-does-osmand-not-offer-access-to-google-maps}

OsmAnd est conçu pour prendre en charge OpenStreetMap (OSM) et privilégie cette voie autant que possible. De plus, des restrictions de licence ne permettent pas à OsmAnd d'être distribué avec les données de Google Maps.

### Chargement lent des cartes sur Android 11, 12 (carte SD) {#maps-slowly-loading-on-android-11-12-sd-card}

En raison des nouvelles [règles d'accès au stockage introduites dans Android 11 et 12](https://www.androidauthority.com/android-12-privacy-features-1225859/), les utilisateurs peuvent rencontrer des performances plus lentes lors de l'accès aux cartes stockées sur des cartes SD. Ces changements peuvent également entraîner des restrictions de visibilité et d'accès aux fichiers dans les dossiers de la carte SD. De plus amples discussions et informations techniques sont disponibles sur les liens suivants : [discussion Reddit](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

Pour le moment, les solutions suivantes sont disponibles :

#### 1. Migrer le dossier de stockage des données OsmAnd vers la « Mémoire interne de l'application » {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- Vous pouvez changer le dossier de stockage en sélectionnant l'option ***Mémoire interne de l'application*** dans *Menu → Paramètres → Paramètres OsmAnd → Dossier de stockage des données*.

- Cependant, sachez que la mémoire interne est souvent limitée. Pour contourner ce problème, vous pouvez déplacer les fichiers importants vers la mémoire interne tout en conservant les cartes rarement utilisées sur la carte SD. Utilisez un gestionnaire de fichiers pour transférer manuellement ces fichiers si nécessaire.

L'équipe de développement recherche activement des solutions plus efficaces pour améliorer les performances de la carte SD dans le cadre des nouvelles politiques de stockage d'Android.

#### 2. Utiliser le dossier « Download » de la carte SD {#2-use-the-sd-cards-download-folder}

Vous pouvez essayer de résoudre le problème de chargement lent des cartes en spécifiant le dossier **Download** de la carte SD pour le stockage OsmAnd sous *Menu → Paramètres → Paramètres OsmAnd → Dossier de stockage des données → Spécifié manuellement*. Les chemins suivants sont possibles :

- ***/storage/XXXX-XXXX/Download/osmand***  
   Ce chemin peut provoquer des erreurs lors de l'accès à plusieurs fichiers. Par exemple, vous pourrez peut-être télécharger la carte du monde, mais d'autres régions pourraient ne pas apparaître.

- ***/storage/XXXX-XXXX/Download***  
   Ce chemin devrait fonctionner de manière cohérente pour le téléchargement de cartes et d'autres données. Cependant, notez qu'OsmAnd ne reconnaîtra pas les fichiers écrits dans ce dossier par d'autres applications ou programmes (par exemple, SasPlanet). Pour plus de détails, consultez [ce guide](../../technical/map-creation/create-offline-maps-yourself.md).

"XXXX-XXXX" représente le numéro d'identification unique de votre carte SD, qui peut parfois être trouvé dans le chemin du dossier sous les options *Stockage externe 2* ou localisé à l'aide d'autres méthodes. Plus de recherches et de détails sur cette solution sont disponibles [ici](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744).

#### 3. Option de stockage « Média » {#3-media-storage-option}

Si les solutions précédentes ne fonctionnent pas ou semblent limitées, vous pouvez essayer d'utiliser l'option de stockage « Média » pour résoudre les problèmes de chargement lent des cartes ou d'accès au stockage. Cette méthode permet de sélectionner un dossier accessible pour OsmAnd et d'autres applications, ce qui est particulièrement utile pour le stockage externe ou amovible.

### Choisir un dossier de stockage de données OsmAnd « généralement accessible » en utilisant le stockage « Média » {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android est devenu plus strict avec les autorisations de stockage, limitant souvent l'accès aux dossiers spécifiques aux applications, en particulier avec les nouvelles installations ou les mises à niveau du système. Le stockage de données par défaut d'OsmAnd peut être restreint, le rendant invisible pour d'autres applications ou même pour les gestionnaires de fichiers. De nombreux utilisateurs souhaitent stocker des cartes et des données dans un stockage externe accessible pour la sauvegarde, la synchronisation ou la gestion manuelle des fichiers.

Cependant, OsmAnd n'a pas l'autorisation *Accès à tous les fichiers* (en raison des restrictions de Google), ce qui limite le choix des dossiers. Une solution de contournement consiste à utiliser le dossier de stockage « Média », auquel Android accorde généralement un accès en lecture/écriture plus large. Pour ce faire :

- Allez dans *Paramètres d'OsmAnd → Paramètres OsmAnd → Dossier de stockage des données* et examinez les zones de stockage disponibles. Utilisez l'indicateur d'espace libre pour identifier le stockage cible, souvent étiqueté *Stockage externe 2*.
- Notez le chemin d'accès actuel du dossier, qui pourrait ressembler à */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Passez à l'option *Spécifié manuellement* et modifiez le chemin vers un dossier accessible aux médias. Sur de nombreux systèmes, changer */Android/data/* en */media/* (par exemple, ***/storage/xxxx-xxxx/media***) fonctionne. Certains systèmes peuvent nécessiter des modifications de chemin différentes.

Un chemin correct ne provoquera aucune erreur d'autorisation d'écriture de la part d'OsmAnd. Avant d'effectuer ces modifications, assurez-vous qu'OsmAnd dispose des autorisations de stockage appropriées, y compris l'autorisation de stockage « Média », dans les paramètres **Applications** d'Android. Dans les versions plus récentes d'Android, ces autorisations peuvent se trouver dans des menus avancés ou cachés.

### Suppression des données cartographiques après la mise à jour de l'application (si « Stockage multi-utilisateurs 1 » est sélectionné) {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

Dans la version Android d'OsmAnd, la sélection de *Stockage multi-utilisateurs 1* comme emplacement de stockage peut entraîner la suppression de toutes les [cartes locales](../personal/maps-resources.md#local-menu) chaque fois que l'application est mise à jour automatiquement, par exemple de la version 4.1.9 à 4.1.10, 4.1.11, ou ultérieure (**Android 11, 12**). Ce problème est documenté sur [Github](https://github.com/osmandapp/OsmAnd/issues/13404).

Pour éviter de perdre vos données cartographiques lors des mises à jour, envisagez ces solutions :

1. *Sauvegardez vos fichiers*. Avant de mettre à jour OsmAnd, faites une [sauvegarde](../personal/import-export.md) des cartes stockées dans *..Android/obb/net.osmand*. Après la mise à jour, restaurez les fichiers avant de lancer l'application OsmAnd mise à jour.

2. *Changez le chemin de stockage*. Déplacez le dossier OsmAnd vers un emplacement accessible en écriture par toutes les applications (par exemple, serveur FTP Wi-Fi, X-plore, ou via un câble USB vers un PC). Changez le chemin du dossier de :
   - /storage/emulated/0/Android/**obb**/net.osmand
   à
   - /storage/emulated/0/Android/**media**/net.osmand.


### Pas de rendu de carte pour les appareils Google Pixel {#no-maps-rendering-for-google-pixel-devices}

Pour les versions Android 4.2 d'OsmAnd, [le rendu de la carte peut échouer](https://github.com/osmandapp/OsmAnd/issues/15045) sur les appareils Google Pixel, laissant les utilisateurs avec un écran blanc vierge au lieu d'une carte.

Pour résoudre ce problème, passez au rendu OpenGL :

- Naviguez vers *Menu OsmAnd → Paramètres → Paramètres OsmAnd → Moteur de rendu de la carte → Version 2 (OpenGL)*.
- Redémarrez OsmAnd pour appliquer les changements.


### Résoudre le rendu lent des cartes dans OsmAnd {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Pour résoudre le problème de rendu lent des cartes, en particulier lors de l'utilisation de cartes vectorielles hors ligne, les étapes suivantes doivent être suivies :

1. **Désactivez les fonctionnalités de carte inutiles.** Désactivez le relief 3D, les lignes de contour, l'ombrage du relief et les pentes, qui peuvent augmenter considérablement la puissance de traitement nécessaire pour rendre les cartes. Vous pouvez le faire dans *Menu → Configurer la carte*.

2. **Simplifiez les détails de la carte.** Masquez les éléments moins critiques comme les frontières, les POI, les notes OSM, les couches météo, les détails supplémentaires (*Menu → Configurer la carte → Rendu de la carte*) pour rationaliser l'affichage de la carte et améliorer la vitesse.

3. **Limitez le nombre de POI affichés.** N'affichez que les POI principaux ou limitez les catégories affichées pendant la navigation, ce qui peut aider à accélérer le rendu de la carte. Accédez à ces paramètres dans *Menu → Navigation → Paramètres*.

4. **Ajustez le grossissement de la carte.** Le paramètre de grossissement de la carte pourrait être un facteur clé du ralentissement de la carte. Réglez le grossissement à 100% en appuyant longuement sur le bouton **"+"** ou **"-"** sur l'écran de la carte pour optimiser l'affichage.

5. **Désactivez le zoom automatique.** Le zoom automatique peut entraîner un redessin fréquent de la carte pendant la navigation, provoquant des retards. Désactivez le zoom automatique dans *Menu → Paramètres → Profil → Paramètres de navigation → [Carte pendant la navigation](../navigation/guidance/map-during-navigation.md)*.

6. **Utilisez uniquement les cartes hors ligne.** Les cartes en ligne, surtout lorsqu'elles ne sont pas téléchargées à l'avance, peuvent ralentir le chargement de la carte. Passez à l'utilisation exclusive de cartes hors ligne pour des performances plus fluides.

Ces changements devraient réduire le temps nécessaire pour rendre les cartes, en particulier pendant la navigation. Pour des options de configuration plus détaillées, consultez le [Guide des paramètres de la carte](https://osmand.net/docs/user/map/interact-with-map.md#settings).


## Lignes de contour {#contour-lines}

### Est-il possible d'afficher les lignes de contour en pieds au lieu de mètres ? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Oui, les lignes de contour peuvent être affichées en pieds au lieu de mètres. Avant de télécharger les données des lignes de contour, choisissez entre Pieds ou Mètres : [en savoir plus ici](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Les lignes de contour, les données d'altitude ou le relief 3D ne s'affichent pas {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Vérifiez si les données de la bonne région ont été téléchargées. Allez dans ***Menu → Cartes & ressources → Téléchargements → Votre région***. [Comment télécharger des cartes](../start-with/first-steps.md#how-to-download-maps).
- Vérifiez que le [plugin](../plugins/topography.md#required-setup-parameters) est activé et visible dans ***Menu → Plugins → Topographie***.
- Vérifiez que les éléments de la section Topographie sont activés dans ***Menu → Configurer la carte → Topographie → Lignes de contour / Terrain / Relief 3D***.
- Vérifiez vos achats : [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Mettez à jour l'application vers la dernière version.
- Supprimez et retéléchargez les cartes requises pour vous assurer qu'il n'y a pas de fichiers corrompus.
- Redémarrez OsmAnd pour rafraîchir les paramètres et les données.


## Recherche {#search}

### La recherche d'adresse structurée (ville *→* rue *→* maison) ne trouve pas la maison {#structured-city--street--house-address-search-doesnt-find-the-house}

Si vous essayez de rechercher un lieu en utilisant la structure *Ville → Rue → Numéro de maison* et qu'aucun résultat n'est retourné, considérez les conseils et les causes potentielles suivants :

> **Conseil** : Essayez une recherche en texte intégral sans spécifier la ville, car l'adresse peut être répertoriée sous une autre ville.

**Problèmes potentiels :**

- **Maison manquante**. La maison pourrait ne pas être répertoriée sur OpenStreetMap, ou elle pourrait être présente mais sans numéros attribués. Vous pouvez le vérifier avec un exemple [ici](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).

- **Nom de rue incorrect**. Le nom de la rue associé à la maison pourrait être incorrect dans OpenStreetMap. Vérifiez l'étiquette `addr:street` pour vous assurer que le nom de la rue correspond exactement à celui des informations d'étiquetage de la rue.

- **Problème avec Nominatim**. La maison peut être présente dans OpenStreetMap mais non trouvée via Nominatim (le moteur de recherche utilisé par OpenStreetMap). Vous pouvez en apprendre davantage sur la manière de résoudre les problèmes liés aux adresses [ici](https://wiki.openstreetmap.org/wiki/Addresses).

- **Problème possible dans OsmAnd**. Si la maison est présente dans Nominatim mais n'est toujours pas trouvée dans OsmAnd, le problème pourrait être spécifique à OsmAnd. Vous pouvez contribuer à résoudre ce problème en enquêtant davantage. Plus de détails peuvent être trouvés dans cet [article technique](../../technical/algorithms/trace-address-search-issues.md).


## Traces et points {#tracks-and-points}

### Comment marquer différents endroits sur la carte {#how-to-mark-different-places-on-the-map}

Vous pouvez laisser des notes et marquer des lieux sur la carte sous diverses formes, chacune servant des objectifs différents :

- *[Favoris](../personal/favorites.md)*. Ce sont des points permanents sur la carte auxquels vous pouvez ajouter des descriptions. Pour créer un favori, faites un *appui long → appuyez sur Ajouter*. Les favoris sont parfaits pour marquer les endroits que vous visitez fréquemment ou que vous souhaitez sauvegarder pour une référence future.

- *[Marqueurs](../personal/markers.md)*. Les marqueurs sont des points temporaires, souvent utilisés pour la navigation ou la planification. Ils peuvent indiquer la distance depuis votre position actuelle ou un autre point, et peuvent être retirés rapidement lorsqu'ils ne sont plus nécessaires. Pour ajouter un marqueur, faites un *appui long → appuyez sur Marqueur*.

- *[Points de passage](../map/tracks/index.md#types-of-tracks)*. Les points de passage sont placés le long des itinéraires que vous créez, vous aidant à marquer des arrêts spécifiques ou des lieux le long de votre trajet. Vous pouvez également ajouter des descriptions à ces points. Pour ajouter un point de passage, faites un *appui long sur la carte → Itinéraire → ajouter comme étape intermédiaire*.

- *[Notes audio/vidéo](../plugins/audio-video-notes.md)*. Ces notes vous permettent de joindre des fichiers audio, vidéo ou photo à des emplacements spécifiques sur la carte. Pour les activer, activez le plugin Notes audio/vidéo dans *Menu OsmAnd → Plugins*. Pour en ajouter une, faites un *appui long → Actions → choisissez le fichier requis à joindre*.

- *[Notes OSM](../plugins/osm-editing.md#create--modify-osm-note)*. Ce sont des rapports que vous pouvez créer pour signaler des erreurs ou des informations manquantes sur OpenStreetMap. Activez le plugin d'édition OSM dans le *Menu OsmAnd → Plugins*. Pour ajouter une note OSM, faites un *appui long → Actions → Ajouter une note OSM*.

- *[POI (Points d'Intérêt)](../map/point-layers-on-map.md#points-of-interest-pois)*. Ce sont des points prédéfinis provenant de la source de données d'OpenStreetMap, tels que des restaurants, des parcs ou des monuments. Vous pouvez afficher les POI en activant la couche POI dans le menu *Configurer la carte* ou en sélectionnant une catégorie.

- *[Recherche](../search/index.md)*. Vous pouvez également utiliser la fonction de recherche pour trouver et marquer des lieux sur la carte.