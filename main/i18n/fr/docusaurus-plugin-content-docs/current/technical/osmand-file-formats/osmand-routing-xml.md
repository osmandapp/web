---
source-hash: 9afa560ce6ed0b0665c95e8b2678271fffd2ed0ebc1b27d11e54025ded55b5ca 
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Configuration du routage - .routing.xml

<IncompleteArticle/>

Routing.xml est un fichier de configuration qui stocke plusieurs profils de routage. Chaque profil est indépendant et n'a que le profil OsmAnd de base comme référence, c'est pourquoi il n'est pas possible de créer une hiérarchie de profils et vous devrez copier toutes les sections de règles. Chacune est entièrement configurable via routing.xml, ce qui signifie qu'il n'y a pas de constantes dans le code et que toutes les pénalités sont calculées à l'aide de cette configuration.

Dans l'application, vous pouvez utiliser plusieurs fichiers routing.xml personnalisés et profils que vous pouvez sélectionner dans Paramètres -> Profil -> Paramètres de navigation -> Paramètres de routage.

Veuillez consulter la documentation dans routing.xml :
- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Autres exemples https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Pénalités des données d'élévation

Selon [le mode sélectionné (Moins vallonné, Plat, Vallonné)](../../user/navigation/routing/bicycle-based-routing.md/#penalties-of-elevation-data#penalties-of-elevation-data) et la pente physique (%) de la route, une pénalité calculée à partir de la différence de hauteur est ajoutée à chaque mètre horizontal.

L'explication donnée comme 3% 1:2 signifie qu'un itinéraire plat de 2 km sera préféré à un itinéraire de 3% 1 km, bien qu'un itinéraire de 3% 1 km sera préféré à un itinéraire plat de 2,5 km.

**Tableau des pénalités pour le routage à vélo :**

|                  **Option**                 |**Inclinaison :**| <1% | <3%  | <7% | <13% | <25% | >=25% |**Déclinaison :**| <17% | <35% | <60% | >=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Désactivé/Quelconque_** (le plus court mais le plus difficile)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Moins vallonné_** (par défaut, équilibré)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Plat_** (le plus long mais facile)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Vallonné_** (plus difficile)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | impossible |


Selon [le mode sélectionné (Moins vallonné, Plat, Vallonné)](../../user/navigation/routing/pedestrian-routing.md) et la pente physique (%) de la route, une pénalité calculée à partir de la différence de hauteur est ajoutée à chaque mètre horizontal.

**Tableau des pénalités pour le routage piéton :**

|                  **Option**                 | **Inclinaison :** | <1% | <3% | <7% | <13% | <25% | >=25% | **Déclinaison :** | <9% | <17% | <35% | <60% | >=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Désactivé/Quelconque_** (le plus court mais le plus difficile)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Moins vallonné_** (par défaut, équilibré)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Plat_** (le plus long mais facile)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Vallonné_** (plus difficile)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |

