---
source-hash: 29769fb3915598de3196c4d9cdc5201f7d25bef715e928571140c195faa82641
sidebar_position: 3
---

# Personnaliser le moteur de routage {#customize-routing-engine}

Dans certains cas, vous pourriez vouloir étendre ou ajuster l'expérience de routage d'OsmAnd, afin de pouvoir ajouter des paramètres supplémentaires, ajouter des obstacles supplémentaires ou modifier certaines pénalités. Veuillez consulter [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml). Le routage OsmAnd utilise un algorithme A* bidirectionnel basé sur le temps le plus rapide (= distance/(vitesse*priorité) + pénalités). C'est un format assez simple. Il est divisé en 7 sections (groupes d'évaluation) :

* access (1 autoriser, -1 ne pas autoriser)
* speed (nombre représentant la vitesse en km/h)
* priority (nombre entre 0 et 1) - un multiplicateur de la vitesse qui est toujours lié à maxSpeed, donc le minimum (vitesse * multiplicateur, maxSpeed) sera utilisé pour A*
* oneway (1, -1 ou 0) - utilisé pour clarifier l'accès en fonction de la direction du mouvement
* penalty_transition (pénalité en secondes) - utilisée pour définir une pénalité lorsque l'utilisateur passe d'une route de classe supérieure à une route de classe inférieure. Par exemple, autoroute - 10, route principale - 15, si l'utilisateur passe d'une autoroute à une route principale, la pénalité sera de 5 secondes (=10 - 15). Cette pénalité sera utilisée par l'algorithme A*. Il n'y a pas de pénalité si l'utilisateur passe d'une autoroute à une route principale et il n'y a pas de pénalité si l'itinéraire continue d'une autoroute à une autoroute.
* obstacle (pénalité en secondes) - définit une pénalité qui s'ajoute au temps de routage
* obstacle_time (pénalité en secondes) - définit une pénalité qui est affichée à l'utilisateur mais qui n'est pas prise en compte par le moteur de routage, c'est-à-dire obstacle_time - 2 heures, obstacle - 1 minute, sur l'itinéraire le plus court, le moteur trouvera un itinéraire en utilisant l'obstacle de 1 minute mais l'utilisateur verra que le temps de l'itinéraire est de 2 heures.

Pour tester [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml), vous pouvez utiliser [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). Pour tester routing.xml sur l'appareil, vous pouvez simplement remplacer le fichier routing.xml par défaut dans le dossier racine d'OsmAnd sur la carte SD.