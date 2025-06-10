---
source-hash: 9a57e167f8c6266f28b4788f50b92e7a169d7f2af0bccb7d225582142c315b68
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Configuration du routage - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml est un fichier de configuration qui stocke plusieurs profils de routage. Chaque profil est indépendant et n'a que le profil de base OsmAnd comme référence, c'est pourquoi il n'est pas possible de créer une hiérarchie de profils et vous devrez copier toutes les sections de règles. Chacune est entièrement configurable via routing.xml, ce qui signifie qu'il n'y a pas de constantes dans le code et que toutes les pénalités sont calculées à l'aide de cette configuration.

Dans l'application, vous pouvez utiliser plusieurs fichiers routing.xml personnalisés et profils que vous pouvez sélectionner dans Paramètres -> Profil -> Paramètres de navigation -> Paramètres de routage.

Veuillez consulter la documentation dans routing.xml :

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Autres exemples https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Pénalités des données d'altitude {#penalties-of-elevation-data}


Selon [le mode sélectionné (Moins vallonné, Plat, Vallonné) du routage à vélo](../../user/navigation/routing/bicycle-based-routing.md) et la pente physique (%) de la route, une pénalité calculée à partir de la différence de hauteur est ajoutée à chaque mètre horizontal.

L'explication donnée comme 3% 1:2 signifie qu'un itinéraire plat de 2 km sera préféré à un itinéraire de 3% 1 km, bien qu'un itinéraire de 3% 1 km sera préféré à un itinéraire plat de 2,5 km.

**Tableau des pénalités pour le routage à vélo :**

|                  **Option**                 |**Inclinaison :**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Déclinaison :**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Désactivé/Tout_** (le plus court mais le plus difficile)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Moins vallonné_** (par défaut, équilibré)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Plat_** (le plus long mais facile)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Vallonné_** (plus difficile)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | impossible |


Selon [le mode sélectionné (Moins vallonné, Plat, Vallonné) du routage piéton](../../user/navigation/routing/pedestrian-routing.md) et la pente physique (%) de la route, une pénalité calculée à partir de la différence de hauteur est ajoutée à chaque mètre horizontal.

**Tableau des pénalités pour le routage piéton :**

|                  **Option**                 | **Inclinaison :** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Déclinaison :** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Désactivé/Tout_** (le plus court mais le plus difficile)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Moins vallonné_** (par défaut, équilibré)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Plat_** (le plus long mais facile)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Vallonné_** (plus difficile)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |