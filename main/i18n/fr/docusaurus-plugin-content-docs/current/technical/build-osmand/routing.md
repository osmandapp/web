---
source-hash: 25c29183922ffa0df481d5ee27894c6a7f4653e20a70b824ecbc3791edaafed7
sidebar_position: 3
---

# Personnaliser le moteur de routage {#customize-routing-engine}

Dans certains cas, vous pourriez vouloir étendre ou ajuster l'expérience de routage d'OsmAnd, afin de pouvoir ajouter des paramètres supplémentaires, ajouter des barrières supplémentaires ou modifier certaines pénalités. Veuillez jeter un œil à [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml). Le routage d'OsmAnd utilise un algorithme A* bidirectionnel basé sur le temps le plus rapide (= distance/(speed*priority) + penalties) . C'est un format assez simple. Il est divisé en 7 sections (groupes d'évaluation) :

* access (1 allow, -1 not allow)
* speed (number that presents speed in kmh)
* priority (number between 0 and 1) - a multiplier to the speed and it is still bound to maxSpeed, so minimum (speed * multiplier, maxSpeed) will be used for A*
* oneway (1, -1 or 0) - used to clarify access based on direction of the movement
* penalty_transition (penalty in seconds) - used to define penalty when user goes from high class road to low class road. For example, motorway - 10, trunk - 15, if user goes from motorway to trunk penalty will be 5 seconds (=10 - 15). This penalty will be used by A* algorithm. There is no penalty if user goes from motorway to trunk and there is no penalty if route continues from motorway to motorway.
* obstacle (penalty in seconds) - defines penalty which is to the routing time
* obstacle_time (penalty in seconds) - defines penalty which is displayed to the user but it is not considered by routing engine i.e. obstacle_time - 2 hours, obstacle - 1 minute, on the shortest route engine will find a route using 1 minute obstacle but user will see that route time is 2 hours.

Pour tester [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml), vous pouvez utiliser [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). Pour tester routing.xml sur l'appareil, vous pouvez simplement remplacer le fichier routing.xml par défaut dans le dossier racine d'OsmAnd avec la carte SD.