---
title: Créer un guide de voyage personnalisé
versions: '*'
---

import Translate from '@site/src/components/Translate.js';


**_Cet article doit être révisé_**

À l'aide d'OsmAnd [MapCreator](../../versions/map-creator.md), vous pouvez créer votre propre [guide de voyage](../../user/plan-route/travel-guides.md) personnalisé unique en son genre. Vous pouvez utiliser du texte provenant de n'importe quelle source (de Wikipédia au blog de votre ami) comme base pour un guide et le faire correspondre à la trace GPX.

### Préparer les fichiers

Enregistrez votre trace avec l'extension *[.GPX](../osmand-file-formats/osmand-gpx.md)* et le fichier texte au format *.html*. Pour créer votre *guide de voyage* personnalisé avec succès, les noms du fichier GPX et du fichier html doivent être identiques. Par exemple, *Milan.gpx* et *Milan.html*.
Les traces GPX peuvent être téléchargées depuis Internet ou vous pouvez en créer une [à l'aide d'OsmAnd](../../user/plan-route/create-route.md) ou de tout autre outil de création de GPX (Brouter, ou un outil similaire).
Ajoutez les points que vous souhaitez visiter à votre itinéraire, puis enregistrez cet itinéraire en tant que trace GPX.

Le choix de la source du texte de votre guide vous appartient entièrement. Il peut s'agir d'un article de blog de voyage, d'une page Wikipédia, etc. Copiez simplement le texte, puis collez-le dans un éditeur de texte et enregistrez-le avec une extension *.html*. Assurez-vous que le nom de la trace GPX et du fichier HTML sont identiques.

### Lancer l'outil

Téléchargez la dernière version d'[OsmAnd MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) et extrayez les fichiers de l'archive.

:::note
Comment utiliser cet outil est décrit dans l'article [Créer des cartes raster et vectorielles hors ligne vous-même](./create-offline-maps-yourself.md#osmandmapcreator).
:::

Démarrez votre console et ouvrez le dossier MapCreator.

Exemple : `cd /home/user/OsmAndMapCreator-main/`

Pour *Linux*, exécutez ./utilites.sh (pour *Windows* : fichier utilities.bat) travel-guide-creator.

Lorsque vous êtes invité à fournir le chemin, veuillez coller le chemin du dossier où vous avez préparé vos fichiers.

Exemple : `cd /home/user/MyCustomGuides/`

Nous ne recommandons pas de placer vos fichiers dans le dossier *OsmAnd MapCreator* lui-même. Veuillez consulter le fichier *Read me* pour les commandes étape par étape.

### Importer les fichiers

Votre fichier devrait être créé en quelques secondes. Par défaut, il sera nommé *travel_guide.sqlite*, mais vous pouvez le renommer comme vous le souhaitez. Assurez-vous de l'enregistrer avec l'extension de fichier *sqlite*. Par exemple, *Milan_weekend_tour.sqlite*. Après cela, veuillez le transférer sur votre appareil. Plus précisément, dans le dossier où sont stockés les guides de voyage OsmAnd. Vous pouvez vérifier le chemin de ce dossier dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*. Veuillez copier le fichier à cet endroit à l'aide de n'importe quel gestionnaire de fichiers mobile ou en connectant votre téléphone à l'ordinateur. Redémarrez l'application.

### Utiliser votre guide

Après avoir démarré l'application, accédez au menu *[Guides de voyage](../../user/plan-route/travel-guides.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*). Utilisez la recherche pour afficher les nouveaux articles.

-- source-hash: blake2s: 346688d99dd1a403908cdfe9ebddc651c126512fa9cca03eb6717a20e178207e --
