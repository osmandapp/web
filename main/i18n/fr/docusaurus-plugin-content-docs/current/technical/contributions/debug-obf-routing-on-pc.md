---
sidebar_position: 5
---

# Déboguer le routage OBF sur un PC


- allez sur [https://osmand.net](https://osmand.net "https://osmand.net") et téléchargez [OsmandMapCreator.zip](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip "http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip") à partir du lien sur le côté droit de l'écran, puis décompressez-le,
- copiez le fichier OBF de votre téléphone ou tablette dans ce dossier,
- démarrez OsmandMapCreator via le fichier bat ou sh,
- assurez-vous d'avoir une connexion Internet afin que mapcreator puisse télécharger les tuiles de carte, vérifiez tous les menus et paramètres dans mapcreator,
- définissez le répertoire de travail de mapcreator sur le dossier où se trouvent mapcreator lui-même et le fichier OBF.
- déplacez et zoomez la carte à l'endroit où vous avez des problèmes de routage et qui est couvert par le fichier OBF mentionné,
- faites des clics droits sur la carte pour définir les points de départ et d'arrivée et les différents moteurs de routage

Trouver le nom du lieu auquel une rue est associée dans les cartes OBF hors ligne
- Ayez un framework Java installé sur votre ordinateur de bureau.
- Téléchargez OsmAndMapCreator, par exemple depuis [download.osmand.net/releases](https://download.osmand.net/releases/) et décompressez-le sur votre PC.
- Prenez n'importe quel fichier de carte avec l'extension OBF et placez-le dans le même dossier où se trouvent tous les fichiers de mapcreator.
- Démarrez OsmAndMapCreator sur votre PC en exécutant `OsmAndMapCreator.bat` ou `OsmAndMapCreator.sh`
- Assurez-vous d'avoir un accès Internet sur votre PC, et que les paramètres de Mapcreator sont tels que les tuiles sont téléchargées lorsque vous faites glisser et zoomez la carte jusqu'à l'endroit où se trouve votre problème.
- Si vous avez zoomé sur votre zone, faites un clic droit avec la souris sur la carte et choisissez "afficher l'adresse" dans le menu contextuel.
- Normalement, tous les noms de rue devraient maintenant être affichés à partir du fichier OBF, ainsi que le nom du lieu auquel chaque rue est associée dans la recherche hors ligne d'OsmAnd.

-- source-hash: blake2s: 6a949aef99a936158bf3e97f9352bb4696f96c1a031b136a31e621ff280aa2f6 --
