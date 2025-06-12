---
source-hash: b53d59fe9eea1205645cb096e0a18766e1c4aa8cb5c9cbb49cd73ff14655af86
title: Comment inspecter un fichier binaire obf
versions: '*'
---

**_Cet article doit être révisé_**

Si vous souhaitez inspecter le contenu d'un fichier obf, vous devez télécharger [OsmAndMapCreator](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). Vous y trouverez une application console Inspector (.sh, .bat). Cette application console possède des paramètres optionnels [-vmap, -vaddress, -vtransport] et un paramètre obligatoire (fichier obf d'entrée). En spécifiant les paramètres optionnels, vous pouvez tracer toutes les informations du fichier obf (attention : cela peut être énorme !).

Exemple et étape par étape pour les utilisateurs de Windows :
- Avoir Java Runtime Environment installé
- Télécharger ou copier n'importe quelle carte hors ligne Osmand de votre appareil vers votre PC, placer ce fichier obf idéalement dans le dossier contenant tous les fichiers Mapcreator décompressés
- Ouvrir l'invite de commande Windows (par exemple, en appuyant sur la touche Windows et "r", puis en entrant cmd et en appuyant sur Entrée)
- Aller dans le dossier où vous avez décompressé Osmand-Mapcreator par la commande cd et le nom du dossier
- Taper `dir` pour voir si vous êtes dans le bon dossier avec le fichier inspector.bat
- Taper `inspector -h` pour voir un texte d'aide
- Taper `inspector -vaddress name_of_your_map.obf \>output.csv`
- Si vous obtenez une erreur de console Java concernant un manque de mémoire ou similaire, éditer le fichier inspector.bat en augmentant le nombre au paramètre -Xmx512M (ou similaire) étape par étape à une valeur plus élevée
- Essayer de charger ce fichier texte CSV (éventuellement très volumineux) dans n'importe quel éditeur ou programme capable de charger de très gros fichiers, comme Notepad++ ... ou essayer une importation dans n'importe quel programme de feuille de calcul comme Excel ou LibreOffice calc (choisir TAB comme séparateur de champs)
- Utiliser n'importe quelle fonction de recherche pour trouver des noms de lieux ou des noms de rues