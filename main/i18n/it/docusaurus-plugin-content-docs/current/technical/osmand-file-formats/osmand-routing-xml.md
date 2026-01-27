---
source-hash: 369df83f8be5a3b6691d0197bb0f13c18822041d0ff5344d4ae6bb2462efa39d
sidebar_position: 5
---

import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Configurazione del percorso - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml è un file di configurazione che memorizza più profili di routing. Ogni profilo è indipendente e ha solo il profilo base di OsmAnd come riferimento, per questo motivo non è possibile creare una gerarchia di profili e sarà necessario copiare tutte le sezioni delle regole. Ognuna è completamente configurabile tramite routing.xml, il che significa che non ci sono costanti nel codice e tutte le penalità sono calcolate utilizzando questa configurazione.

Nell'applicazione è possibile utilizzare più file routing.xml personalizzati e profili che è possibile selezionare in Impostazioni -> Profilo -> Impostazioni di navigazione -> Impostazioni di routing.

Si prega di controllare la documentazione all'interno di routing.xml:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Other examples https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Penalità dei dati di elevazione {#penalties-of-elevation-data}


A seconda della [modalità selezionata (Meno collinoso, Pianeggiante, Collinoso) del routing basato sulla bicicletta](../../user/navigation/routing/bicycle-based-routing.md) e della pendenza fisica (%) della strada, viene aggiunta una penalità calcolata dalla differenza di altezza a ogni metro orizzontale.

La penalità 1:2 assegna un fattore di costo di 2.0 a un'inclinazione del 3%. Di conseguenza, un segmento in salita di 1 km (costo 2.0) è equiparato a un segmento pianeggiante di 2 km, ma è preferito rispetto a qualsiasi deviazione pianeggiante che supera i 2 km.

**Tabelle e grafici delle penalità per il routing in bicicletta:**

|                  **Option**                 |**Incline:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|
|**_Disabled/Any_** (the shortest but hardest)|            |  -  |   -  |  -  |   -  |   -  |   -   |
|**_Flat_** (the longest but easy)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            
|**_Less hilly_** (default, balanced)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |     
|**_Hilly_** (more difficult)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 | 

<img src={require('@site/static/img/technical/bicycle_incline.png').default} alt="Grafico Inclinazione Bicicletta" />


|                  **Option**                 |**Decline:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|------|------|------|------------|
|**_Disabled/Any_** (the shortest but hardest)|            |   -  |   -  |   -  |     -      |
|**_Flat_** (the longest but easy)            |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Less hilly_** (default, balanced)         |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Hilly_** (more difficult)                 |            | 1:6.4| 1:25 | 1:25 | impossible |

<img src={require('@site/static/img/technical/bicycle_decline.png').default} alt="Grafico Declino Bicicletta" />

<!--
|                  **Option**                 |**Incline:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Decline:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Disabled/Any_** (the shortest but hardest)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Less hilly_** (default, balanced)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Flat_** (the longest but easy)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Hilly_** (more difficult)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | impossible |
-->


A seconda della [modalità selezionata (Meno collinoso, Pianeggiante, Collinoso) del routing pedonale](../../user/navigation/routing/pedestrian-routing.md) e della pendenza fisica (%) della strada, viene aggiunta una penalità calcolata dalla differenza di altezza a ogni metro orizzontale.

**Tabelle e grafici delle penalità per il routing pedonale:**

|                  **Option**                 | **Incline:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | 
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|
|**_Disabled/Any_** (the shortest but hardest)|              |  -  |  -  |  -  |   -  |   -  |   -   |
|**_Flat_** (the longest but easy)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |      
|**_Less hilly_** (default, balanced)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |  
|**_Hilly_** (more difficult)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |

<img src={require('@site/static/img/technical/pedestrian_incline.png').default} alt="Grafico Inclinazione Pedonale" />

|                  **Option**                 | **Decline:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|------|------|------|-------|
|**_Disabled/Any_** (the shortest but hardest)|              |  -  |   -  |   -  |   -  |   -   |
|**_Flat_** (the longest but easy)            |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Less hilly_** (default, balanced)         |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Hilly_** (more difficult)                 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |

<img src={require('@site/static/img/technical/pedestrian_decline.png').default} alt="Grafico Declino Pedonale" />

<!--
|                  **Option**                 | **Incline:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Decline:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Disabled/Any_** (the shortest but hardest)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Less hilly_** (default, balanced)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Flat_** (the longest but easy)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Hilly_** (more difficult)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |
-->