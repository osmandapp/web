---
source-hash: b9d29f72bcf2d43d5cc26838609d63efd31b5183a4de6ef652bd49117b2c1149
sidebar_position: 7
sidebar_label: Analizator śladów
title: Analizator śladów
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

**Tracks Analyzer** to narzędzie internetowe, które pomaga analizować powtarzające się segmenty ścieżek między wybranymi punktami na mapie. Na przykład możesz użyć go do porównania swoich przejazdów na tym samym podjeździe lub codziennych dojazdów do pracy. Aby korzystać z tej funkcji z własnymi danymi, potrzebujesz konta OsmAnd Pro ze ścieżkami zsynchronizowanymi do OsmAnd Cloud — w przeciwnym razie Twoje ścieżki nie będą dostępne w Planerze internetowym. Skanuje Twoje ścieżki i znajduje wszystkie segmenty przechodzące przez wybrane lokalizacje, umożliwiając porównanie prędkości, wysokości, dystansu i czasu w wielu aktywnościach.

## Jak używać {#how-to-use}

1. [Zaloguj się](./web-cloud.md#login) na swoje konto OsmAnd Pro w Web Map Portal. Twoje ścieżki muszą być zsynchronizowane z [OsmAnd Cloud](./web-cloud.md#cloud-sync).
2. Otwórz *Menu → Analizator śladów* (ikona klucza).
3. W panelu **Wybierz ślady** wybierz **Wszystkie ścieżki** lub tylko potrzebne foldery.
4. Kliknij prawym przyciskiem myszy na mapie i wybierz **Punkt A**. Aby przeanalizować segment między dwoma punktami, ustaw także **Punkt B**.
5. Przejrzyj listę znalezionych segmentów, [posortuj ją i wybierz, które parametry mają być wyświetlane](#sorting-and-visible-parameters).

Z jednym punktem analyzer znajduje segmenty ścieżek przechodzące przez wybraną lokalizację. Z dwoma punktami znajduje i analizuje segmenty między Punktem A a Punktem B.

![Analizator ścieżek](@site/static/img/web/web_analyzer_select.png) ![Analizator ścieżek](@site/static/img/web/web_analyzer_points_new.png)


## Sortowanie i widoczne parametry {#sorting-and-visible-parameters}
Po znalezieniu pasujących segmentów przez analyzer, wyniki są wyświetlane jako lista. Lista może być posortowana za pomocą opcji **Sortuj**, co zmienia sposób wyświetlania segmentów. Ponadto przycisk **Pola** otwiera panel Widocznych parametrów, gdzie możesz kontrolować, które parametry analizy są wyświetlane dla każdego segmentu. Możesz wyświetlić wszystkie dostępne parametry lub wybrać tylko te istotne dla Twojej analizy.

Dostępne parametry obejmują:

- Maks. prędkość, Średnia prędkość i Min. prędkość.
- Maks. wysokość, Średnia wysokość i Min. wysokość.
- Pod górę i Z górki.
- Data.
- Zakres czasu, Czas rozpoczęcia, Czas zakończenia, Czas trwania i Czas w ruchu.
- Długość.

![Analizator ścieżek](@site/static/img/web/web_analyzer_sort.png) ![Analizator ścieżek](@site/static/img/web/web_analyzer_fields.png)

## Analiza danych {#data-analysis}

Każdy pasujący segment jest wyświetlany w liście wyników po lewej stronie. Dla każdego segmentu wyświetlany jest zestaw obliczonych parametrów, w zależności od włączonych Widocznych parametrów.

Każdy segment ma również menu z trzema kropkami (⋮) z następującymi akcjami:
- Otwórz ścieżkę — otwiera pełną ścieżkę związaną z wybranym segmentem.
- Ukryj ślad / Pokaż ślad — kontroluje, czy ścieżka jest wyświetlana na mapie.
- Wyklucz — usuwa segment z aktualnych wyników analizy.

![Analizator ścieżek](@site/static/img/web/web_analyzer_menu.png)

### Wykresy {#graphs}

Pod mapą analyzer wyświetla wykres, który wizualizuje wybrane segmenty. Wykres przedstawia dane tylko dla segmentów znalezionych między wybranymi punktami, a nie dla całych ścieżek.

Wykres obsługuje przełączanie między różnymi typami danych:
- Wysokość.
- Nachylenie.
- Prędkość.
Tylko jeden typ danych jest wyświetlany na raz, a zmiana go natychmiast aktualizuje wykres.

Gdy obecnych jest wiele segmentów, wykres pokazuje dane dla kilku segmentów jednocześnie. Selektor nad wykresem pozwala wybrać, ile wykresów segmentów jest wyświetlanych na raz oraz przełączać między nimi.

![Analizator ścieżek](@site/static/img/web/web_analyzer_altitude.png) ![Analizator ścieżek](@site/static/img/web/web_analyzer_tracks.png)

## Powiązane artykuły {#related-articles}

- [Tracks](../web/web-tracks.md)
- [Manage Tracks](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)