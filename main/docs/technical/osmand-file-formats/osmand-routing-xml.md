---
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Routing Configuration - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml is a configuration file that stores multiple routing profiles. Each profile is independent and has only base OsmAnd profile as a reference that's why it's not possible to create a hierarchy of profiles and you will need to copy all rule sections. Each is fully configurable via routing.xml, it means there is no any constants in the code and all penalties are calculated using this configuration.

In the application you can use multiple custom routing.xml files and profiles you can select them in Settings -> Profile -> Navigation Settings -> Routing Settings.

Please check the documentation inside routing.xml:
- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Other examples https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Penalties of Elevation data {#penalties-of-elevation-data}

Depending on [the selected mode (Less hilly, Flat, Hilly)](../../user/navigation/routing/bicycle-based-routing#penalties-of-elevation-data#penalties-of-elevation-data) and the physical slope (%) of thse road, a penalty calculated from the height difference is added to each horizontal metre.

Explaination given as 3% 1:2 means that route with flat 2 km will be preferred over route with 3% 1 km though 3% 1km route will be preferred over route flat 2.5 km.

**Table of penalties bicycle routing:** 

|                  **Option**                 |**Incline:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Decline:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Disabled/Any_** (the shortest but hardest)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Less hilly_** (default, balanced)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Flat_** (the longest but easy)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Hilly_** (more difficult)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | impossible |


Depending on [the selected mode (Less hilly, Flat, Hilly)](../../user/navigation/routing/pedestrian-routing.md) and the physical slope (%) of the road, a penalty calculated from the height difference is added to each horizontal metre.

**Table of penalties pedestrian routing:** 

|                  **Option**                 | **Incline:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Decline:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Disabled/Any_** (the shortest but hardest)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Less hilly_** (default, balanced)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Flat_** (the longest but easy)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Hilly_** (more difficult)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |


