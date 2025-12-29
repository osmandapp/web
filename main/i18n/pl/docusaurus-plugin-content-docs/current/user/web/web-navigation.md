---
source-hash: b7357e6a51f940ace21ac3c4ebf732361180dc9c7f5720e449fa9f0856db537a
sidebar_position: 8
sidebar_label:  Navigation
title: Navigation on the Web
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

Użyj **Navigation on the Web**, aby utworzyć trasę na mapie i podglądać wskazówki skręt po skręcie. Oblicza trasę dla wybranego trybu podróży, pokazuje oczekiwaną odległość i czas oraz umożliwia sprawdzenie zmian wysokości i nadchodzących skrętów. Możesz dostosować trasę w ustawieniach nawigacji (na przykład, zezwalając lub unikając określonych typów dróg lub używając parametrów pojazdu) i używać wielu punktów trasy, gdy jest to potrzebne.


## Rozpoczęcie trasy {#start-a-route}

W stanie pustym Nawigacja prosi o dodanie punktów trasy: *Kliknij na mapie, aby ustawić punkty Startu i Celu*.

Punkty trasy można podać z panelu Trasy. Gdy wybierzesz **Ustaw punkt startowy** lub **Ustaw cel**, pole pokazuje sugestie, takie jak *Aktualna lokalizacja* i wcześniej używane punkty z historii. Możesz usunąć zapisane sugestie za pomocą *Wyczyść historię*.

Nawigacja podąża za prostym przepływem: pierwszy punkt staje się Startem, a następny punkt staje się Cel. Jak tylko oba punkty zostaną ustawione, trasa jest obliczana i wyświetlana na mapie.

![Nawigacja w sieci](@site/static/img/web/navigation_start.png)

### Zarządzanie punktami trasy {#manage-route-points}

Możesz rozszerzyć trasę poza Start → Cel, dodając punkty pośrednie. Użyj przycisku plus (+) obok listy punktów, aby dodać punkt pośredni (nowy punkt jest wstawiany powyżej Celu). Punkty pośrednie można usunąć za pomocą przycisku minus (–).

Zamień Start i Cel — zamienia Start i Cel, zachowując punkty pośrednie bez zmian. Działanie jest oznaczone ikoną pokazującą dwie strzałki w przeciwnych kierunkach.

![Nawigacja w sieci](@site/static/img/web/navigation_points.png)


## Profil routingu {#routing-profile}

Na górze panelu Trasy możesz wybrać profil routingu dla swojej trasy. Zestaw powszechnie używanych profili jest pokazany jako cztery ikony. Aby uzyskać dostęp do więcej opcji, otwórz menu z trzema kropkami obok ikon profili. Rozwija pełną listę dostępnych profili.

Gdy przełączysz profil, Nawigacja aktualizuje trasę, aby dopasować ją do wybranego trybu podróży.

![Nawigacja w sieci](@site/static/img/web/navigation_profile.png)


## Ustawienia nawigacji {#navigation-settings}

Aby dostosować sposób obliczania tras, otwórz Ustawienia za pomocą ikony koła zębatego w panelu Trasy. Ustawienia są pogrupowane w sekcje, które możesz rozwijać/zmniejszać. Zestaw sekcji i opcji zależy od wybranego profilu routingu, więc zobaczysz różne parametry dla różnych trybów podróży.

Typowe sekcje obejmują:

- **Ogólne** — opcje specyficzne dla profilu (na przykład, w profilu samochodowym możesz zobaczyć przełączniki takie jak *Sposób oszczędny paliwa* i *Dostawa towarów*).
- **Zezwól** — opcje, które zezwalają na określone typy dróg lub ścieżek podczas routingu.
- **Unikaj** — opcje, które wykluczają określone typy dróg lub sytuacje z trasy (na przykład, unikanie dróg płatnych, promów, autostrad, tuneli itp.).
- **[Parametry pojazdu](../navigation/guidance/vehicle-parameters.md)** — dostępne dla profili opartych na pojazdach. Umożliwia określenie ograniczeń pojazdu (takich jak wymiary/waga), co może wpływać na routing na ograniczonych drogach.

![Nawigacja w sieci](@site/static/img/web/navigation_settings.png) ![Nawigacja w sieci](@site/static/img/web/navigation_settings_2.png)


## Dołączanie śladu {#attaching-track}

Blok **Dołącz do dróg** umożliwia użycie istniejącego śladu GPX jako podstawy do nawigacji. OsmAnd Web dopasowuje ślad do pobliskich dróg, aby zapewnić wskazówki skręt po skręcie.

Gdy klikniesz Wybierz ślad, przeglądarka otwiera selektor plików, w którym możesz wybrać plik .gpx z komputera. Po wybraniu śladu:
- Ślad jest wyświetlany na mapie i używany do obliczania trasy.
- Podsumowanie trasy (odległość i czas) jest pokazane w panelu Trasy.
- Wybrany plik pojawia się pod Wybrany ślad (z nazwą pliku śladu).
- Możesz usunąć dołączony ślad za pomocą przycisku minus (–) obok Wybranego śladu.


## Szczegóły trasy {#route-details}

![Nawigacja w sieci](@site/static/img/web/navigation_info.png) ![Nawigacja w sieci](@site/static/img/web/navigation_turns.png)

Gdy trasa jest obliczana, panel pokazuje podstawowe podsumowanie (odległość, czas, podjazdy/zjazdy) i przycisk **Szczegóły**. Użyj Szczegółów, aby otworzyć widok trasy z dwoma kartami: Info i Skręty.

Info podsumowuje trasę i dane wysokościowe:
- **Punkty** — liczba punktów trasy użytych do zbudowania trasy.
- **Trasa** — odległość i czas.
- **Podjazdy/Zjazdy** — całkowity wzniesienie i zejście.
- **Wysokość (min/śred/max)** — statystyki wysokości dla trasy.
- **Wysokość (Satelita)** — Przelicz ponownie, aby odbudować wysokość za pomocą danych satelitarnych (jeśli dostępne).

Poniżej podsumowania wykres wysokości pomaga zbadać profil trasy. Możesz przełączać Wysokość i Spadki oraz używać suwaka pod wykresem, aby skupić się na określonej części trasy.

Użyj Skrętów do wskazówek skręt po skręcie. Trasa jest również oznaczona pomarańczowymi okręgami wzdłuż linii. Kliknij okrąg, aby otworzyć wyskakujące okienko z odpowiednią instrukcją nawigacyjną. Wyskakujące okienko może również zawierać:
- Unikaj — unika tego konkretnego odcinka.
- ID drogi — link do podstawowego sposobu OSM dla tej części trasy.

Możesz dostosować trasę bezpośrednio na mapie, przeciągając znaczniki trasy w inne miejsce. Gdy klikniesz i przeciągniesz znacznik na inną drogę (lub w pobliskie miejsce) i puścisz:
- OsmAnd Web przelicza trasę, aby przechodziła przez nową pozycję.
- Przeniesiony znacznik jest konwertowany na nowy punkt pośredni.
- Nowy punkt pośredni pojawia się w panelu Trasy jako dodatkowy punkt wstawiony powyżej Celu, a podsumowanie trasy jest odpowiednio aktualizowane.
- Możesz zarządzać dodanym punktem via w taki sam sposób jak innymi [punktami pośrednimi](#manage-route-points).

![Nawigacja w sieci](@site/static/img/web/navigation_on_map.png)

### Pobieranie i zapisywanie {#download-and-save}

Użyj *Pobierz*, aby wyeksportować trasę jako ślad. Okno dialogowe pobierania oferuje dwie opcje:
Pełne dane śladu — zawiera pełne dane, w tym instrukcje nawigacyjne.
Uproszczony ślad — lżejsza wersja, bardziej odpowiednia do użycia z innymi aplikacjami.

Możesz zapisać trasę jako ślad za pomocą *Zapisz w chmurze / Prześlij do OsmAnd Cloud*. Otwiera to okno dialogowe, w którym możesz potwierdzić zapisanie w śladach chmurowych, edytować Nazwę, opcjonalnie wybrać Folder, a następnie Zapisz lub Anuluj.

### Udostępnianie trasy {#share-a-route}

Aby udostępnić trasę, skopiuj URL. Przykład: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Powiązane artykuły {#related-articles}

- [Przygotowanie trasy](../navigation/setup/route-navigation.md)
- [Ustawienia nawigacji](../navigation/guidance/navigation-settings.md)
- [Parametry pojazdu](../navigation/guidance/vehicle-parameters.md)
- [Planuj trasę](../web/planner.md)