---
source-hash: 9a57e167f8c6266f28b4788f50b92e7a169d7f2af0bccb7d225582142c315b68
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

Uitleg gegeven als 3% 1:2 betekent dat een route met een vlakke 2 km de voorkeur krijgt boven een route met 3% 1 km, hoewel een route met 3% 1 km de voorkeur krijgt boven een route met een vlakke 2,5 km.

**Tabel met straffen voor fietsroutering:**

|                  **Optie**                 |**Helling:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Daling:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Uitgeschakeld/Elk_** (de kortste maar zwaarste)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Minder heuvelachtig_** (standaard, gebalanceerd)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | onmogelijk |
|**_Vlak_** (de langste maar makkelijkste)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | onmogelijk |
|**_Heuvelachtig_** (moeilijker)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | onmogelijk |


Afhankelijk van [de geselecteerde modus (Minder heuvelachtig, Vlak, Heuvelachtig) van voetgangersroutering](../../user/navigation/routing/pedestrian-routing.md) en de fysieke helling (%) van de weg, wordt een straf berekend op basis van het hoogteverschil toegevoegd aan elke horizontale meter.

**Tabel met straffen voor voetgangersroutering:**

|                  **Optie**                 | **Helling:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Daling:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Uitgeschakeld/Elk_** (de kortste maar zwaarste)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Minder heuvelachtig_** (standaard, gebalanceerd)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Vlak_** (de langste maar makkelijkste)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Heuvelachtig_** (moeilijker)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |