---
source-hash: a52737232a71758590dfdb7cfbb68622999fbec373babd2b56b429093731d394
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

<!--
<InfoIncompleteArticle/>
-->

## Przegląd {#overview}

**Planer internetowy**, znany również jako [**Portal map OsmAnd**](https://osmand.net/map), to rozszerzenie oparte na przeglądarce aplikacji mobilnej OsmAnd. Umożliwia użytkownikom przeglądanie globalnych map, planowanie tras, symulowanie nawigacji, zarządzanie danymi osobistymi oraz dostęp do zsynchronizowanych treści z ich urządzeń za pośrednictwem chmury.

Zaprojektowany jako wieloplatformowy towarzysz aplikacji OsmAnd na Androida i iOS, Portal internetowy pomaga użytkownikom planować wycieczki, analizować ślady, przeglądać ukształtowanie terenu i zarządzać plikami za pomocą dowolnej przeglądarki na komputerze stacjonarnym lub tablecie — bez konieczności instalowania aplikacji.

OsmAnd Web jest ściśle zintegrowany z usługą **OsmAnd Cloud**, która umożliwia synchronizację ulubionych, śladów i kopii zapasowych między urządzeniami i platformami. Użytkownicy z kontami **OsmAnd Start** (bezpłatne) lub **OsmAnd Pro** (płatne) mogą w pełni wykorzystać ten ekosystem, synchronizując dane między urządzeniami mobilnymi a wersją internetową. Szczegółowe porównanie funkcji *Start* i *Pro* znajdziesz w sekcji [Dostęp w ramach subskrypcji](#subscription-accesses) poniżej.

> **Uwaga:** Nawet bez logowania lub weryfikacji konta możesz nadal korzystać z kilku podstawowych funkcji Portalu map internetowych, w tym: [Trasy nawigacyjne](./planner.md), [Planer trasy](./planner.md), [Nakładki pogodowe](./web-map.md#weather-on-the-web) oraz [Ustawienia](#settings).

<!--
After the structure of this section is approved, some links should be updated.
-->

## Kluczowe funkcje {#key-features}

Portal internetowy oferuje następujące główne możliwości pracy z mapami i danymi osobistymi w przeglądarce: 

- [Mapa](./web-map.md) o globalnym zasięgu i wysokiej jakości danych wektorowych.
- [Planowanie trasy](./planner.md) z wykorzystaniem profili pieszego, samochodowego, rowerowego i innych.
- [Podgląd nawigacji](./planner.md) z instrukcjami krok po kroku.
- [Wyszukiwanie](./web-search.md) i [odkrywanie](./web-search.md#explore) popularnych miejsc w pobliżu.
- Wyświetlanie [Ulubionych](./web-map.md#favorites), [Śladów](./web-map.md#tracks) i [POI](./web-map.md#poi-overlay) na mapie.
- [Nakładki pogodowe](./web-weather.md): wiatr, temperatura i ciśnienie.
- [Warstwy terenu](./web-map.md#terrain): cieniowanie wzgórz, stoki i widok wysokości.
- [Analizator śladów](./web-tracks-analyzer.md) dla profili wysokości i prędkości.
- Pełny dostęp do zsynchronizowanych danych za pośrednictwem [OsmAnd Cloud](./web-cloud#cloud-sync).
- Obsługa importu/eksportu plików (GPX: ślady, ulubione).
- Bezproblemowa integracja z **OsmAnd Pro** i **OsmAnd Start**.

<!--
After the structure of this section is approved, some links should be updated.
-->


### Dostęp w ramach subskrypcji {#subscription-accesses}

![Konto internetowe](@site/static/img/web/web_start.png) ![Konto internetowe](@site/static/img/web/web_pro.png)

Portal map internetowych obsługuje kilka poziomów dostępu: bez logowania, z OsmAnd Start oraz z OsmAnd Pro. Poniższa tabela podsumowuje, które funkcje są dostępne na każdym poziomie, abyś mógł szybko zobaczyć, co już masz, a co staje się dostępne po założeniu konta lub uaktualnieniu. Ten przegląd ma pomóc Ci zdecydować, czy w ogóle potrzebujesz konta i jeśli tak, to która opcja najlepiej odpowiada sposobowi, w jaki korzystasz z OsmAnd.

| Funkcja | Dostępne w |
|--------|--------------|
| [Trasa nawigacyjna](./planner.md) | Bez logowania |
| [Planer trasy](./planner.md) | Bez logowania |
| [Nakładki pogodowe](./web-weather.md) | Bez logowania |
| [Ustawienia](./web-map.md#settings) | Bez logowania |
| [Konfiguracja menu mapy](./web-map.md#configure-map-menu) ([POI](./web-map.md#poi-overlay), [Ulubione](./web-map.md#favorites), [Ślady](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/blog/start) lub <ProFeature/> |
| [Konfiguracja menu mapy](./web-map.md#configure-map-menu) ([Teren](./web-map.md#terrain))| <ProFeature/> |
| [Synchronizacja OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/blog/start) lub <ProFeature/> |
| [Wyszukiwanie w sieci, popularne miejsca](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) lub <ProFeature/> |
| [Foldery śladów i warstwa](./web-tracks.md) | <ProFeature/> |

<!--
After the structure of this section is approved, some links should be updated.
-->


## Jak zacząć {#how-to-start}

Aby uzyskać dostęp do pełnych funkcji Portalu map internetowych OsmAnd, musisz zalogować się na konto OsmAnd Cloud.

- Jeśli masz już subskrypcję [**OsmAnd Pro**](../personal/osmand-cloud.md#login) lub chcesz utworzyć bezpłatne konto [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), wykonaj następujące kroki:

1. Przejdź do [**Portalu map OsmAnd**](https://osmand.net/map).
2. Otwórz menu **Konto**:
   - **Zaloguj się**: Wprowadź adres e-mail powiązany z subskrypcją Pro lub Start, lub
   - **Utwórz konto**: Zarejestruj się, aby uzyskać bezpłatne konto OsmAnd Start. Szczegółowy przewodnik krok po kroku po tworzeniu nowego konta znajdziesz w artykule [Konto OsmAnd](./web-cloud).

![Konto internetowe](@site/static/img/web/web_account.png)

<!--

## Settings {#settings}

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)

### OsmAnd Cloud {#osmand-cloud}

![Web Cloud](@site/static/img/web/web_without_acc.png) ![Web Cloud](@site/static/img/web/web_with_acc.png)

In the Web Map Portal, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. [OsmAnd Cloud](./web-cloud) connects the web map with your cloud backups so that you can manage data synchronized from your Android or iOS devices directly in the browser.

**Changes** option shows a chronological list of files stored in your OsmAnd Cloud account. Items are grouped by month and include the file name, the type of change (for example, added, modified or deleted), the time of the last update and the device that created it. For each entry, you can open the three-dot menu and choose *Download* to save the selected file to your computer, or *Delete*.

**Trash** option contains files that were deleted from OsmAnd Cloud. The list is also grouped by month and shows when each file was removed and from which device. Use the three-dot menu next to a file to *Download* a copy, *Restore from trash* (return the file to OsmAnd Cloud so it becomes available again in your data), or *Delete immediately* to remove it permanently. This helps prevent accidental data loss while still letting you free up cloud storage when you are sure a file is no longer needed. You can also clear all deleted items at once by clicking the Trash icon in the Trash panel header. This opens the **Empty trash** dialog, where you confirm deletion to permanently remove all files from Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

-->


## Powiązane artykuły {#related-articles}

- [Pierwsze kroki](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Zakupy internetowe](../purchases/web.md)
- [Zakupy międzyplatformowe](../purchases/cross.md)