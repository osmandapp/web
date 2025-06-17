---
source-hash: 9a57e167f8c6266f28b4788f50b92e7a169d7f2af0bccb7d225582142c315b68
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


Abhängig vom [ausgewählten Modus (weniger hügelig, flach, hügelig) des Fahrrad-Routings](../../user/navigation/routing/bicycle-based-routing.md) und der Steigung (%) der Straße wird für jeden horizontalen Meter eine Strafe basierend auf der Höhendifferenz hinzugefügt.

Die Erläuterung als 3% 1:2 bedeutet, dass eine Strecke mit 2 km flacher bevorzugt wird gegenüber einer Strecke mit 3% 1 km, obwohl eine Strecke mit 3% 1 km bevorzugt wird gegenüber einer Strecke mit 2,5 km flach.

**Tabelle der Strafen Fahrrad-Routing:**

|                  **Option**                 |**Anstieg:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Abstieg:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Deaktiviert/Beliebig_** (kürzeste, aber härteste)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Weniger hügelig_** (Standard, ausgewogen)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | unmöglich |
|**_Flach_** (längste, aber einfachste)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | unmöglich |
|**_Hügelig_** (schwieriger)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | unmöglich |


Abhängig vom [ausgewählten Modus (weniger hügelig, flach, hügelig) des Fußgänger-Routings](../../user/navigation/routing/pedestrian-routing.md) und der Steigung (%) der Straße wird für jeden horizontalen Meter eine Strafe basierend auf der Höhendifferenz hinzugefügt.

**Tabelle der Strafen Fußgänger-Routing:**

|                  **Option**                 | **Anstieg:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Abstieg:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Deaktiviert/Beliebig_** (kürzeste, aber härteste)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Weniger hügelig_** (Standard, ausgewogen)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Flach_** (längste, aber einfachste)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Hügelig_** (schwieriger)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |