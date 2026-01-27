---
source-hash: 369df83f8be5a3b6691d0197bb0f13c18822041d0ff5344d4ae6bb2462efa39d
sidebar_position: 5
---

import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Routeringsconfiguratie - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml is een configuratiebestand dat meerdere routeringsprofielen opslaat. Elk profiel is onafhankelijk en heeft alleen het basis OsmAnd-profiel als referentie, daarom is het niet mogelijk om een hiërarchie van profielen te creëren en moet u alle regelgedeelten kopiëren. Elk is volledig configureerbaar via routing.xml, wat betekent dat er geen constanten in de code zijn en alle straffen worden berekend met behulp van deze configuratie.

In de applicatie kunt u meerdere aangepaste routing.xml-bestanden en profielen gebruiken. U kunt deze selecteren in Instellingen -> Profiel -> Navigatie-instellingen -> Routeringsinstellingen.

Controleer de documentatie in routing.xml:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Andere voorbeelden https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Straffen voor hoogtedata {#penalties-of-elevation-data}


Afhankelijk van [de geselecteerde modus (Minder heuvelachtig, Vlak, Heuvelachtig) van fietsroutering](../../user/navigation/routing/bicycle-based-routing.md) en de fysieke helling (%) van de weg, wordt een straf berekend op basis van het hoogteverschil toegevoegd aan elke horizontale meter.

De 1:2 straf wijst een kostenfactor van 2.0 toe aan een 3% helling. Gevolglik wordt een 1 km opwaarts segment (kosten 2.0) gelijk gewogen aan een 2 km vlak segment, maar krijgt het de voorkeur boven enige vlakke omweg die meer dan 2 km bedraagt.

**Tabellen en grafieken van straffen voor fietsroutering:**

|                  **Optie**                 |**Helling:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|
|**_Uitgeschakeld/Elk_** (de kortste maar zwaarste)|            |  -  |   -  |  -  |   -  |   -  |   -   |
|**_Vlak_** (de langste maar makkelijkste)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            
|**_Minder heuvelachtig_** (standaard, gebalanceerd)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |     
|**_Heuvelachtig_** (moeilijker)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 | 

<img src={require('@site/static/img/technical/bicycle_incline.png').default} alt="Grafiek Fiets Helling" />


|                  **Optie**                 |**Daling:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|------|------|------|------------|
|**_Uitgeschakeld/Elk_** (de kortste maar zwaarste)|            |   -  |   -  |   -  |     -      |
|**_Vlak_** (de langste maar makkelijkste)            |            | 1:6.4| 1:25 | 1:25 | onmogelijk |
|**_Minder heuvelachtig_** (standaard, gebalanceerd)         |            | 1:6.4| 1:25 | 1:25 | onmogelijk |
|**_Heuvelachtig_** (moeilijker)                 |            | 1:6.4| 1:25 | 1:25 | onmogelijk |

<img src={require('@site/static/img/technical/bicycle_decline.png').default} alt="Grafiek Fiets Daling" />

<!--
|                  **Option**                 |**Incline:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Decline:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Disabled/Any_** (the shortest but hardest)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Less hilly_** (default, balanced)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Flat_** (the longest but easy)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Hilly_** (more difficult)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | impossible |
-->


Afhankelijk van [de geselecteerde modus (Minder heuvelachtig, Vlak, Heuvelachtig) van voetgangersroutering](../../user/navigation/routing/pedestrian-routing.md) en de fysieke helling (%) van de weg, wordt een straf berekend op basis van het hoogteverschil toegevoegd aan elke horizontale meter.

**Tabellen en grafieken van straffen voor voetgangersroutering:**

|                  **Optie**                 | **Helling:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | 
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|
|**_Uitgeschakeld/Elk_** (de kortste maar zwaarste)|              |  -  |  -  |  -  |   -  |   -  |   -   |
|**_Vlak_** (de langste maar makkelijkste)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |      
|**_Minder heuvelachtig_** (standaard, gebalanceerd)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |  
|**_Heuvelachtig_** (moeilijker)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |

<img src={require('@site/static/img/technical/pedestrian_incline.png').default} alt="Grafiek Voetganger Helling" />

|                  **Optie**                 | **Daling:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|------|------|------|-------|
|**_Uitgeschakeld/Elk_** (de kortste maar zwaarste)|              |  -  |   -  |   -  |   -  |   -   |
|**_Vlak_** (de langste maar makkelijkste)            |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Minder heuvelachtig_** (standaard, gebalanceerd)         |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Heuvelachtig_** (moeilijker)                 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |

<img src={require('@site/static/img/technical/pedestrian_decline.png').default} alt="Grafiek Voetganger Daling" />

<!--
|                  **Option**                 | **Incline:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Decline:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Disabled/Any_** (the shortest but hardest)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Less hilly_** (default, balanced)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Flat_** (the longest but easy)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Hilly_** (more difficult)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |
-->