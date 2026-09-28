---
source-hash: 5c0ec057fd60df8e67edea1ef3d5a69cce84edf9177789c1998911043f2d9f81
sidebar_position: 1
sidebar_label: Wprowadzenie
title: Wprowadzenie do planera internetowego
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

**Planer internetowy**, znany również jako [**Portal map OsmAnd**](https://osmand.net/map), to rozszerzenie oparte na przeglądarce aplikacji mobilnej OsmAnd. Umożliwia użytkownikom przeglądanie globalnych map, planowanie tras, symulowanie nawigacji, zarządzanie danymi osobistymi oraz dostęp do zsynchronizowanych treści z ich urządzeń za pośrednictwem chmury.

Zaprojektowany jako wieloplatformowy towarzysz aplikacji OsmAnd na Androida i iOS, Portal internetowy pomaga użytkownikom planować wycieczki, analizować ślady, przeglądać ukształtowanie terenu i zarządzać plikami za pomocą dowolnej przeglądarki na komputerze stacjonarnym lub tablecie — bez konieczności instalowania aplikacji.

OsmAnd Web jest ściśle zintegrowany z usługą **OsmAnd Cloud**, która umożliwia synchronizację ulubionych, śladów i kopii zapasowych między urządzeniami i platformami. Użytkownicy z kontami **OsmAnd Start** (bezpłatne) lub **OsmAnd Pro** (płatne) mogą w pełni wykorzystać ten ekosystem, synchronizując dane między urządzeniami mobilnymi a wersją internetową. Szczegółowe porównanie funkcji *Start* i *Pro* znajdziesz w sekcji [Dostęp w ramach subskrypcji](#subscription-accesses) poniżej.

> **Uwaga:** Nawet bez logowania lub weryfikacji konta możesz nadal korzystać z kilku podstawowych funkcji Portalu map internetowych, w tym: [Trasa nawigacyjna](./web-navigation.md), [Planer trasy](./planner.md), [Nakładki pogodowe](./web-weather.md), oraz [Ustawienia](./web-map.md#settings).


## Kluczowe funkcje {#key-features}

Portal internetowy oferuje następujące główne możliwości pracy z mapami i danymi osobistymi w przeglądarce: 

- [Mapa](./web-map.md) o globalnym zasięgu i wysokiej jakości danych wektorowych.
- [Planowanie trasy](./planner.md) z wykorzystaniem profili pieszego, samochodowego, rowerowego i innych.
- [Nawigacja](./web-navigation.md) z instrukcjami krok po kroku.
- [Wyszukiwanie](./web-search.md) i [odkrywanie](./web-search.md#explore) popularnych miejsc w pobliżu.
- Wyświetlanie [Ulubionych](./web-map.md#favorites), [Śladów](./web-map.md#tracks), i [POI](./web-map.md#poi-overlay) na mapie.
- [Nakładki pogodowe](./web-weather.md): wiatr, temperatura i ciśnienie.
- [Warstwy terenu](./web-map.md#terrain): cieniowanie wzgórz, stoki i widok wysokości.
- [Analizator śladów](./web-tracks-analyzer.md) dla profili wysokości i prędkości.
- Pełny dostęp do zsynchronizowanych danych za pośrednictwem [OsmAnd Cloud](./web-cloud#cloud-sync).
- Obsługa importu/eksportu plików (GPX: ślady, ulubione).
- Bezproblemowa integracja z **OsmAnd Pro** i **OsmAnd Start**.

### Dostęp w ramach subskrypcji {#subscription-accesses}

![Konto internetowe](@site/static/img/web/web_start.png) ![Konto internetowe](@site/static/img/web/web_pro.png)

Portal map internetowych obsługuje kilka poziomów dostępu: bez logowania, z OsmAnd Start oraz z OsmAnd Pro. Poniższa tabela podsumowuje, które funkcje są dostępne na każdym poziomie, abyś mógł szybko zobaczyć, co już masz, a co staje się dostępne po założeniu konta lub uaktualnieniu. Ten przegląd ma pomóc Ci zdecydować, czy w ogóle potrzebujesz konta i jeśli tak, to która opcja najlepiej odpowiada sposobowi, w jaki korzystasz z OsmAnd.

| Funkcja | Dostępne w |
|--------|--------------|
| [Trasa nawigacyjna](./web-navigation.md) | Bez logowania |
| [Planer trasy](./planner.md) | Bez logowania |
| [Nakładki pogodowe](./web-weather.md) | Bez logowania |
| [Ustawienia](./web-map.md#settings) | Bez logowania |
| [Konfiguracja menu mapy](./web-map.md#configure-map-menu) ([POI](./web-map.md#poi-overlay), [Ulubione](./web-map.md#favorites), [Ślady](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) lub [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Konfiguracja menu mapy](./web-map.md#configure-map-menu) ([Teren](./web-map.md#terrain))| [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Synchronizacja OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) lub [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Wyszukiwanie w sieci, popularne miejsca](./web-search.md) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) lub [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Foldery śladów i warstwa](./web-tracks.md) | [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |


## Jak zacząć {#how-to-start}

Aby uzyskać dostęp do pełnych funkcji Portalu map internetowych OsmAnd, musisz zalogować się na konto OsmAnd Cloud.

- Jeśli masz już subskrypcję [**OsmAnd Pro**](../personal/osmand-cloud.md#login) lub chcesz utworzyć bezpłatne konto [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), wykonaj następujące kroki:

1. Przejdź do [**Portalu map OsmAnd**](https://osmand.net/map).
2. Otwórz menu **Konto**:
   - **Zaloguj się**: Wprowadź adres e-mail powiązany z subskrypcją Pro lub Start, lub
   - **Utwórz konto**: Zarejestruj się, aby uzyskać bezpłatne konto OsmAnd Start. Szczegółowy przewodnik krok po kroku po tworzeniu nowego konta znajdziesz w artykule [Konto OsmAnd](./web-cloud).

![Konto internetowe](@site/static/img/web/web_account.png)


## Powiązane artykuły {#related-articles}

- [Pierwsze kroki](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Zakupy internetowe](../purchases/web.md)
- [Zakupy międzyplatformowe](../purchases/cross.md)