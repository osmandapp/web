---
source-hash: fe9500be3570d2dbf08995ee5614eb89cd647a44f0360730e48015dced34c738
sidebar_position: 7
sidebar_label: Tracks Analyzer
title: Tracks Analyzer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## Przegląd {#overview}

**Tracks Analyzer** to narzędzie internetowe, które pomaga analizować powtarzające się segmenty ścieżek między wybranymi punktami na mapie. Skanuje Twoje ścieżki i znajduje wszystkie segmenty przechodzące przez wybrane lokalizacje, umożliwiając porównanie prędkości, wysokości, dystansu i czasu w wielu aktywnościach.

## Jak używać {#how-to-use}

Po otwarciu Tracks Analyzer (pokazanego jako ikona klucza), narzędzie otwiera się z widokiem mapy i pustym stanem. Stąd możesz wybrać, które ścieżki będą uwzględnione w analizie za pomocą panelu **Wybierz ścieżki**. Analyzer pozwala pracować ze wszystkimi dostępnymi ścieżkami lub ograniczyć analizę do określonych folderów.

Aby rozpocząć analizę, ustaw jeden lub dwa punkty bezpośrednio na mapie. Kliknij prawym przyciskiem myszy w żądanej lokalizacji i wybierz **Punkt A / Punkt B** z menu kontekstowego. Analyzer następnie wyszukuje segmenty ścieżek przechodzące przez wybrany punkt lub między dwoma punktami.

![Analizator ścieżek](@site/static/img/web/web_analyzer_select.png) ![Analizator ścieżek](@site/static/img/web/web_analyzer_points.png)

## Sortowanie i widoczne parametry {#sorting-and-visible-parameters}

Po znalezieniu pasujących segmentów przez analyzer, wyniki są wyświetlane jako lista. Lista może być reorderowana za pomocą opcji **Sortuj**, co zmienia sposób wyświetlania segmentów. Ponadto przycisk **Pola** otwiera panel Widocznych parametrów, gdzie możesz kontrolować, które parametry analizy są wyświetlane dla każdego segmentu. Możesz wyświetlić wszystkie dostępne parametry lub wybrać tylko te istotne dla Twojej analizy.

Dostępne parametry są pogrupowane według typu:

**Prędkość**
- Maks. prędkość
- Średnia prędkość
- Min. prędkość

**Wysokość**
- Maks. wysokość
- Średnia wysokość
- Min. wysokość

**Pod górę / Z górki**

**Data i czas**
- Data
- Czas rozpoczęcia
- Czas zakończenia
- Zakres czasu
- Czas trwania
- Czas w ruchu

**Długość**

![Analizator ścieżek](@site/static/img/web/web_analyzer_sort.png) ![Analizator ścieżek](@site/static/img/web/web_analyzer_fields.png)

## Analiza danych {#data-analysis}

Każdy pasujący segment jest wyświetlany w liście wyników po lewej stronie. Dla każdego segmentu wyświetlany jest zestaw obliczonych parametrów, w zależności od włączonych Widocznych parametrów.

Każdy segment ma również menu z trzema kropkami (⋮) z następującymi akcjami:
- Otwórz ścieżkę — otwiera pełną ścieżkę związaną z wybranym segmentem.
- Ukryj ścieżkę / Pokaż ścieżkę — kontroluje, czy ścieżka jest wyświetlana na mapie.
- Wyklucz — usuwa segment z aktualnych wyników analizy.

![Analizator ścieżek](@site/static/img/web/web_analyzer_menu.png)

### Wykresy {#graphs}

Pod mapą analyzer wyświetla wykres, który wizualizuje wybrane segmenty. Wykres przedstawia dane tylko dla segmentów znalezionych między wybranymi punktami, a nie dla całych ścieżek.

Wykres obsługuje przełączanie między różnymi typami danych:
- Wysokość.
- Spadek.
- Prędkość.
Tylko jeden typ danych jest wyświetlany na raz, a zmiana go natychmiast aktualizuje wykres.

Gdy obecnych jest wiele segmentów, wykres pokazuje dane dla kilku segmentów jednocześnie. Selekctor nad wykresem pozwala wybrać, ile wykresów segmentów jest wyświetlanych na raz oraz przełączać między nimi.

![Analizator ścieżek](@site/static/img/web/web_analyzer_altitude.png) ![Analizator ścieżek](@site/static/img/web/web_analyzer_tracks.png)

## Powiązane artykuły {#related-articles}

- [Tracks](../web/web-tracks.md)
- [Manage Tracks](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)