---
source-hash: 369df83f8be5a3b6691d0197bb0f13c18822041d0ff5344d4ae6bb2462efa39d
sidebar_position: 5
---

import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Routing-Konfiguration - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml ist eine Konfigurationsdatei, die mehrere Routing-Profile speichert. Jedes Profil ist unabhängig und hat nur das Basis-OsmAnd-Profil als Referenz, weshalb es nicht möglich ist, eine Profilhierarchie zu erstellen, und Sie alle Regelabschnitte kopieren müssen. Jeder ist vollständig über routing.xml konfigurierbar, das heißt, es gibt keine Konstanten im Code und alle Strafen werden anhand dieser Konfiguration berechnet.

In der Anwendung können Sie mehrere benutzerdefinierte routing.xml-Dateien und Profile verwenden. Sie können diese unter Einstellungen -> Profil -> Navigationseinstellungen -> Routing-Einstellungen auswählen.

Bitte überprüfen Sie die Dokumentation in routing.xml:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Weitere Beispiele https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Strafen bei Höhendaten {#penalties-of-elevation-data}


Abhängig vom [ausgewählten Modus (Weniger hügelig, Flach, Hügelig) des fahrrad-basierten Routings](../../user/navigation/routing/bicycle-based-routing.md) und der physischen Steigung (%) der Straße wird für jeden horizontalen Meter eine Strafe basierend auf der Höhendifferenz hinzugefügt.

Die 1:2-Strafe weist einem 3%-Anstieg einen Kostenfaktor von 2,0 zu. Folglich wird ein 1 km langer Anstiegsabschnitt (Kosten 2,0) gleich gewichtet wie ein 2 km langer flacher Abschnitt, wird aber gegenüber jedem flachen Umweg, der 2 km übersteigt, bevorzugt.

**Tabellen und Diagramme der Strafen für Fahrrad-Routing:**

|                  **Option**                 |**Anstieg:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|
|**_Deaktiviert/Beliebig_** (kürzeste, aber härteste)|            |  -  |   -  |  -  |   -  |   -  |   -   |
|**_Flach_** (längste, aber einfachste)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            
|**_Weniger hügelig_** (Standard, ausgewogen)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |     
|**_Hügelig_** (schwieriger)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 | 

<img src={require('@site/static/img/technical/bicycle_incline.png').default} alt="Diagramm Fahrrad-Anstieg" />


|                  **Option**                 |**Abstieg:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|------|------|------|------------|
|**_Deaktiviert/Beliebig_** (kürzeste, aber härteste)|            |   -  |   -  |   -  |     -      |
|**_Flach_** (längste, aber einfachste)            |            | 1:6.4| 1:25 | 1:25 | unmöglich |
|**_Weniger hügelig_** (Standard, ausgewogen)         |            | 1:6.4| 1:25 | 1:25 | unmöglich |
|**_Hügelig_** (schwieriger)                 |            | 1:6.4| 1:25 | 1:25 | unmöglich |

<img src={require('@site/static/img/technical/bicycle_decline.png').default} alt="Diagramm Fahrrad-Abstieg" />

<!--
|                  **Option**                 |**Anstieg:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Abstieg:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Deaktiviert/Beliebig_** (kürzeste, aber härteste)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Weniger hügelig_** (Standard, ausgewogen)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | unmöglich |
|**_Flach_** (längste, aber einfachste)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | unmöglich |
|**_Hügelig_** (schwieriger)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | unmöglich |
-->


Abhängig vom [ausgewählten Modus (Weniger hügelig, Flach, Hügelig) des Fußgänger-Routings](../../user/navigation/routing/pedestrian-routing.md) und der physischen Steigung (%) der Straße wird für jeden horizontalen Meter eine Strafe basierend auf der Höhendifferenz hinzugefügt.

**Tabellen und Diagramme der Strafen für Fußgänger-Routing:**

|                  **Option**                 | **Anstieg:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | 
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|
|**_Deaktiviert/Beliebig_** (kürzeste, aber härteste)|              |  -  |  -  |  -  |   -  |   -  |   -   |
|**_Flach_** (längste, aber einfachste)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |      
|**_Weniger hügelig_** (Standard, ausgewogen)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |  
|**_Hügelig_** (schwieriger)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |

<img src={require('@site/static/img/technical/pedestrian_incline.png').default} alt="Diagramm Fußgänger-Anstieg" />

|                  **Option**                 | **Abstieg:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|------|------|------|-------|
|**_Deaktiviert/Beliebig_** (kürzeste, aber härteste)|              |  -  |   -  |   -  |   -  |   -   |
|**_Flach_** (längste, aber einfachste)            |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Weniger hügelig_** (Standard, ausgewogen)         |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Hügelig_** (schwieriger)                 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |

<img src={require('@site/static/img/technical/pedestrian_decline.png').default} alt="Diagramm Fußgänger-Abstieg" />

<!--
|                  **Option**                 | **Anstieg:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Abstieg:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Deaktiviert/Beliebig_** (kürzeste, aber härteste)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Weniger hügelig_** (Standard, ausgewogen)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Flach_** (längste, aber einfachste)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Hügelig_** (schwieriger)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |
-->