---
source-hash: 369df83f8be5a3b6691d0197bb0f13c18822041d0ff5344d4ae6bb2462efa39d
sidebar_position: 5
---

import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Konfiguracja routingu - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml to plik konfiguracyjny, który przechowuje wiele profili routingu. Każdy profil jest niezależny i ma tylko podstawowy profil OsmAnd jako odniesienie, dlatego nie jest możliwe stworzenie hierarchii profili i trzeba będzie skopiować wszystkie sekcje reguł. Każda z nich jest w pełni konfigurowalna za pomocą routing.xml, co oznacza, że w kodzie nie ma żadnych stałych, a wszystkie kary są obliczane przy użyciu tej konfiguracji.

W aplikacji można używać wielu niestandardowych plików routing.xml i profili, które można wybrać w Ustawieniach -> Profil -> Ustawienia nawigacji -> Ustawienia routingu.

Proszę sprawdzić dokumentację w routing.xml:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Other examples https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Kary za dane wysokościowe {#penalties-of-elevation-data}


W zależności od [wybranego trybu (Mniej pagórkowaty, Płaski, Pagórkowaty) routingu rowerowego](../../user/navigation/routing/bicycle-based-routing.md) i fizycznego nachylenia (%) drogi, kara obliczona na podstawie różnicy wysokości jest dodawana do każdego poziomego metra.

Kara 1:2 przypisuje czynnik kosztu 2.0 do nachylenia 3%. W konsekwencji, segment podjazdu 1 km (koszt 2.0) jest ważony równo z segmentem płaskim 2 km, ale jest preferowany nad jakimkolwiek objazdem płaskim przekraczającym 2 km.

**Tabele i wykresy kar dla routingu rowerowego:**

|                  **Opcja**                  |**Nachylenie:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|
|**_Wyłączone/Dowolne_** (najkrótsza, ale najtrudniejsza)|            |  -  |   -  |  -  |   -  |   -  |   -   |
|**_Płaska_** (najdłuższa, ale łatwa)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            
|**_Mniej pagórkowata_** (domyślna, zrównoważona)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |     
|**_Pagórkowata_** (trudniejsza)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 | 

<img src={require('@site/static/img/technical/bicycle_incline.png').default} alt="Wykres nachylenia rowerowego" />


|                  **Opcja**                 |**Spadek:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|------|------|------|------------|
|**_Wyłączone/Dowolne_** (najkrótsza, ale najtrudniejsza)|            |   -  |   -  |   -  |     -      |
|**_Płaska_** (najdłuższa, ale łatwa)            |            | 1:6.4| 1:25 | 1:25 | niemożliwe |
|**_Mniej pagórkowata_** (domyślna, zrównoważona)         |            | 1:6.4| 1:25 | 1:25 | niemożliwe |
|**_Pagórkowata_** (trudniejsza)                 |            | 1:6.4| 1:25 | 1:25 | niemożliwe |

<img src={require('@site/static/img/technical/bicycle_decline.png').default} alt="Wykres spadku rowerowego" />

<!--
|                  **Option**                 |**Incline:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Decline:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Disabled/Any_** (the shortest but hardest)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Less hilly_** (default, balanced)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Flat_** (the longest but easy)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Hilly_** (more difficult)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | impossible |
-->


W zależności od [wybranego trybu (Mniej pagórkowaty, Płaski, Pagórkowaty) routingu pieszego](../../user/navigation/routing/pedestrian-routing.md) i fizycznego nachylenia (%) drogi, kara obliczona na podstawie różnicy wysokości jest dodawana do każdego poziomego metra.

**Tabele i wykresy kar dla routingu pieszego:**

|                  **Opcja**                 | **Nachylenie:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | 
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|
|**_Wyłączone/Dowolne_** (najkrótsza, ale najtrudniejsza)|              |  -  |  -  |  -  |   -  |   -  |   -   |
|**_Płaska_** (najdłuższa, ale łatwa)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |      
|**_Mniej pagórkowata_** (domyślna, zrównoważona)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |  
|**_Pagórkowata_** (trudniejsza)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |

<img src={require('@site/static/img/technical/pedestrian_incline.png').default} alt="Wykres nachylenia pieszego" />

|                  **Opcja**                 | **Spadek:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|------|------|------|-------|
|**_Wyłączone/Dowolne_** (najkrótsza, ale najtrudniejsza)|              |  -  |   -  |   -  |   -  |   -   |
|**_Płaska_** (najdłuższa, ale łatwa)            |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Mniej pagórkowata_** (domyślna, zrównoważona)         |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Pagórkowata_** (trudniejsza)                 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |

<img src={require('@site/static/img/technical/pedestrian_decline.png').default} alt="Wykres spadku pieszego" />

<!--
|                  **Option**                 | **Incline:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Decline:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Disabled/Any_** (the shortest but hardest)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Less hilly_** (default, balanced)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Flat_** (the longest but easy)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Hilly_** (more difficult)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |
-->