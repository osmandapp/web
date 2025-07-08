---
source-hash: 9a57e167f8c6266f28b4788f50b92e7a169d7f2af0bccb7d225582142c315b68
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Configurazione del percorso - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml è un file di configurazione che memorizza più profili di routing. Ogni profilo è indipendente e ha solo il profilo base di OsmAnd come riferimento, per questo motivo non è possibile creare una gerarchia di profili e sarà necessario copiare tutte le sezioni delle regole. Ognuna è completamente configurabile tramite routing.xml, il che significa che non ci sono costanti nel codice e tutte le penalità sono calcolate utilizzando questa configurazione.

Nell'applicazione è possibile utilizzare più file routing.xml personalizzati e profili che è possibile selezionare in Impostazioni -> Profilo -> Impostazioni di navigazione -> Impostazioni di routing.

Si prega di controllare la documentazione all'interno di routing.xml:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Altri esempi https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Penalità dei dati di elevazione {#penalties-of-elevation-data}


A seconda della [modalità selezionata (Meno collinoso, Pianeggiante, Collinoso) del routing basato sulla bicicletta](../../user/navigation/routing/bicycle-based-routing.md) e della pendenza fisica (%) della strada, viene aggiunta una penalità calcolata dalla differenza di altezza a ogni metro orizzontale.

La spiegazione data come 3% 1:2 significa che un percorso pianeggiante di 2 km sarà preferito rispetto a un percorso con pendenza del 3% di 1 km, anche se un percorso con pendenza del 3% di 1 km sarà preferito rispetto a un percorso pianeggiante di 2,5 km.

**Tabella delle penalità per il routing in bicicletta:**

|                  **Opzione**                 |**Inclinazione:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Declino:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Disabilitato/Qualsiasi_** (il più breve ma il più difficile)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Meno collinoso_** (predefinito, bilanciato)|            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | impossibile |
|**_Pianeggiante_** (il più lungo ma facile)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | impossibile |
|**_Collinoso_** (più difficile)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | impossibile |


A seconda della [modalità selezionata (Meno collinoso, Pianeggiante, Collinoso) del routing pedonale](../../user/navigation/routing/pedestrian-routing.md) e della pendenza fisica (%) della strada, viene aggiunta una penalità calcolata dalla differenza di altezza a ogni metro orizzontale.

**Tabella delle penalità per il routing pedonale:**

|                  **Opzione**                 | **Inclinazione:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Declino:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Disabilitato/Qualsiasi_** (il più breve ma il più difficile)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Meno collinoso_** (predefinito, bilanciato)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Pianeggiante_** (il più lungo ma facile)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Collinoso_** (più difficile)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |