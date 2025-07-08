---
source-hash: 9a57e167f8c6266f28b4788f50b92e7a169d7f2af0bccb7d225582142c315b68
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Konfiguracja routingu - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml to plik konfiguracyjny, który przechowuje wiele profili routingu. Każdy profil jest niezależny i ma tylko podstawowy profil OsmAnd jako odniesienie, dlatego nie jest możliwe stworzenie hierarchii profili i trzeba będzie skopiować wszystkie sekcje reguł. Każda z nich jest w pełni konfigurowalna za pomocą routing.xml, co oznacza, że w kodzie nie ma żadnych stałych, a wszystkie kary są obliczane przy użyciu tej konfiguracji.

W aplikacji można używać wielu niestandardowych plików routing.xml i profili, które można wybrać w Ustawieniach -> Profil -> Ustawienia nawigacji -> Ustawienia routingu.

Proszę sprawdzić dokumentację w routing.xml:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Inne przykłady https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Kary za dane wysokościowe {#penalties-of-elevation-data}


W zależności od [wybranego trybu (Mniej pagórkowaty, Płaski, Pagórkowaty) routingu rowerowego](../../user/navigation/routing/bicycle-based-routing.md) i fizycznego nachylenia (%) drogi, do każdego metra poziomego dodawana jest kara obliczona na podstawie różnicy wysokości.

Wyjaśnienie podane jako 3% 1:2 oznacza, że trasa o płaskim odcinku 2 km będzie preferowana nad trasą o nachyleniu 3% na 1 km, chociaż trasa o nachyleniu 3% na 1 km będzie preferowana nad trasą płaską 2,5 km.

**Tabela kar dla routingu rowerowego:**

|                  **Opcja**                  |**Nachylenie:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Spadek:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Wyłączone/Dowolne_** (najkrótsza, ale najtrudniejsza)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Mniej pagórkowata_** (domyślna, zrównoważona)|            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | niemożliwe |
|**_Płaska_** (najdłuższa, ale łatwa)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | niemożliwe |
|**_Pagórkowata_** (trudniejsza)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | niemożliwe |


W zależności od [wybranego trybu (Mniej pagórkowaty, Płaski, Pagórkowaty) routingu pieszego](../../user/navigation/routing/pedestrian-routing.md) i fizycznego nachylenia (%) drogi, do każdego metra poziomego dodawana jest kara obliczona na podstawie różnicy wysokości.

**Tabela kar dla routingu pieszego:**

|                  **Opcja**                  | **Nachylenie:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Spadek:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Wyłączone/Dowolne_** (najkrótsza, ale najtrudniejsza)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Mniej pagórkowata_** (domyślna, zrównoważona)|              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Płaska_** (najdłuższa, ale łatwa)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Pagórkowata_** (trudniejsza)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |