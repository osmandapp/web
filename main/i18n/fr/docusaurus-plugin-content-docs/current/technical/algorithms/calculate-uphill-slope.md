---
source-hash: 79437fa335c7e570154c352565a3730cec6e83971c121281d5269e90cf824811
sidebar_position: 5
---

# Calcul de la montée / descente / pente {#calculation-of-uphill--downhill--slope}

OsmAnd utilise différents algorithmes pour calculer la **pente** et la **montée** en se basant sur les données satellites SRTM intégrées dans les cartes hors ligne et sur les traces GPX enregistrées.

L'objectif principal du calcul de la **montée** est de fournir des informations pertinentes sur la quantité d'**énergie supplémentaire** dépensée en montant. Évidemment, cela dépend de multiples facteurs tels que le véhicule ou le mode de transport, la surface, le poids de la personne et d'autres.
Ainsi, en fin de compte, la **montée** devrait être un paramètre pris en compte par le routage basé sur l'altitude, afin de produire un routage économe en énergie.

L'objectif principal du calcul de la **pente** est d'avoir une indication visuelle des routes escarpées à éviter.


## Montée / Descente {#uphill--downhill}

Il y a beaucoup de problèmes pour calculer la **montée** car il n'y a pas de norme et parce que cela dépend du mode de transport et de nombreux autres paramètres, il est difficile de fournir un contrôle raisonnable à l'utilisateur sans que ce soit trop compliqué. Habituellement, la montée est comparée à d'autres programmes, mais il n'y a aucun programme qui ait une norme d'or.

OsmAnd utilise un algorithme en 3 étapes :

- Filtrer les données bruitées.
- Trouver les extremums locaux (minimums et maximums).
- Calculer la somme des différences entre min et max.

Certaines traces contiennent beaucoup de données bruitées qui doivent être filtrées en premier. Pour l'instant, nous appliquons le filtrage à toutes les traces, mais pour les traces préparées telles que celles construites par l'outil Planifier un itinéraire, l'outil Navigation ou après correction SRTM, le filtrage ne devrait avoir aucun effet.


### Filtrer la pente à 70 % {#filter-70-slope}

Le filtrage est basé sur la recherche de **points extrêmes** qui sont significativement plus hauts ou plus bas qu'un point voisin à gauche et un point voisin à droite sur le graphique.
Ces **points extrêmes** sont exclus du calcul ultérieur. Le ```seuil``` est une [pente de 70 %](https://github.com/osmandapp/OsmAnd-java/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L11) - [code](https://github.com/osmandapp/OsmAnd-java/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L72).

**Exemple 1**. (tous les points sont espacés de 10 m), altitude - [5, 3, 10, 3, 5]. 10 est un point extrême : car 10 > 3 (pente de 70 %).

**Exemple 2**. (tous les points sont espacés de 10 m), altitude - [5, 3, 10, 13, 15]. 10 n'est pas un point extrême : car 10 > 3 mais 10 < 13, c'est donc un pic local.

### Filtrer les points sautants {#filter-jumping-points}

Les points qui représentent des collines locales ```/\``` sont filtrés, ce qui entraîne le problème que le point le plus haut et le point le plus bas seront toujours filtrés, mais cela permet de gérer les traces bruitées où l'enregistrement n'était pas fréquent, de sorte que la première vérification avec une pente extrême ne fonctionne pas. Référence au [code](https://github.com/osmandapp/OsmAnd-java/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L49).

**Exemple 1**. Altitude - [5, 3, 10, 3, 5] -> [5, 5].

**Exemple 2**. Altitude - [5, 6, 10, 7, 5] -> [5, 6, 7, 5].

**Exemple 3**. Altitude - [5, 2, 3, 4, 5] -> [5, 3, 4, 5].


### Recherche des extremums {#finding-extremums}

Pour trouver les extremums, l'algorithme [Ramer-Douglas-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) est utilisé. Il n'est pas absolument bon pour trouver exactement les extremums sur un graphique aléatoire, mais dans le calcul de l'altitude, il évite beaucoup de petits pics aléatoires qui pourraient se produire pendant une longue montée et quelques courtes descentes imperceptibles entre les deux.

Le but principal de l'algorithme est de trouver le nombre minimum de lignes droites qui pourraient représenter le graphique d'altitude. Le ```seuil``` est de **[7 mètres](https://github.com/osmandapp/OsmAnd-java/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationDiffsCalculator.java#L13)**. Ainsi, tous les pics supérieurs à 7 mètres de différence seront détectés sur des surfaces planes et ne seront pas détectés s'ils sont inférieurs.

Les extremums sont affichés sur le graphique sous forme de points bleus avec le plugin de développement OsmAnd activé.

**Exemple 1**. Altitude - [0, 0, 10, 0, 0]. L'**extremum** est 10.

**Exemple 2**. Altitude - [0, 1, 5, 4, -3, -2, -1, 0]. **Aucun extremum** - tous inférieurs à 7 mètres de différence.


### Calcul de la montée / descente entre les extremums {#calculate-uphill--downhill-between-extremums}

Par exemple, si vous avez une trace simple qui monte et descend, vous n'avez qu'un seul maximum sur votre chemin, donc la
  ```
  Différence d'altitude de départ = <altitude de départ> - <altitude de l'extremum> :
  Différence d'altitude de fin = <altitude de l'extremum> - <altitude de fin> : si positive - **montée**, si négative - **descente**
  ```

1. Si *Différence d'altitude de départ* > 0
  - **montée** = *différence d'altitude de départ*
  - **descente** = *différence d'altitude de fin*

2. Si *Différence d'altitude de fin* > 0
  - **montée** = *différence d'altitude de fin*
  - **descente** = *différence d'altitude de départ*


Plus d'exemples seront ajoutés.


## Correction d'altitude SRTM {#altitude-srtm-correction}

Il existe 2 alternatives possibles à utiliser dans OsmAnd pour obtenir une correction d'altitude.

1. Ouvrez la trace dans OsmAnd Android et trouvez, *Modifier la trace → Options → Correction d'altitude*
1.1 **En ligne** traitera la trace via le serveur et les données OsmAnd.
1.2 **Hors ligne** traitera la trace sur l'appareil si les fichiers geotifs 3D sont téléchargés.
2. Ouvrez le site web https://osmand.net/map et téléchargez la trace pour voir l'altitude SRTM.


## Pente {#slope}

Le graphique vert est calculé différemment de la montée / descente et peut présenter de légères variations. En théorie, dans tous les **extremums**, le graphique vert devrait **traverser la ligne 0**, bien que tous les points de pente 0 soient des extremums.

Pour calculer la pente, l'ensemble des données est divisé en étapes égales de 20 mètres. Pour chaque point de cette grille, l'altitude moyenne autour du point (rayon de 10 mètres) est calculée. Ensuite, la dérivée discrète est calculée en utilisant la [différence finie centrée](https://en.wikipedia.org/wiki/Finite_difference).