---
source-hash: b0e4660605b0cdfdfcfc653e1f8929974cb654b66c0c55fbc588b89e37d05091
sidebar_position: 3
title:  Historia wyszukiwania
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Przegląd {#overview}

*Historia wyszukiwania* to zapis wszystkich wyszukiwań i lokalizacji, które zostały wprowadzone lub wyszukane w aplikacji w okresie jej użytkowania. Narzędzie to pozwala na łatwe odnalezienie i dostęp do wcześniej wyszukiwanych lokalizacji, co ułatwia nawigację i oszczędza czas.

OsmAnd zapewnia kilka sposobów przeglądania historii wyszukiwania.

- Przycisk [Szukaj](../widgets/map-buttons.md#search) jest zawsze wyświetlany na mapie, a jego dotknięcie przeniesie Cię do [ekranu ogólnego](#how-to-use) narzędzia.
- Przejdź do głównego *Menu Androida → Szukaj → zakładka Historia*.
- Przygotowując się do rozpoczęcia trasy, dotknij *Nawigacja → Ustaw cel → Pole wyszukiwania*.
- Blok informacyjny w menu nawigacyjnym [przygotowania trasy](../navigation/setup/route-navigation.md#navigation-menu) wyświetla listę ostatnich punktów docelowych, które również są częścią historii wyszukiwania.
- Historia wyszukiwania jest dostępna w [Android Auto](../navigation/auto-car.md#search) i [CarPlay](../navigation/car-play.md#search).


## Jak używać {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historia wyszukiwania](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historia wyszukiwania](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Historia wyszukiwania służy do dostarczania istotnych informacji o poprzednich działaniach.

- *Ponowne wyszukiwanie*. Możesz użyć historii wyszukiwania, aby ponownie wyszukać wcześniej wyszukiwane miejsca lub adresy bez konieczności ponownego wprowadzania zapytania.

- *Szybki dostęp do często odwiedzanych miejsc*. Jeśli często odwiedzasz określone miejsca, takie jak dom, praca lub ulubione miejsca, Historia wyszukiwania zapisuje te miejsca, zapewniając szybki dostęp do nich.

- *Śledzenie poprzednich podróży*. Historia wyszukiwania może być przydatna do śledzenia poprzednich podróży i tras. Możesz śledzić trasy, które przebyłeś wcześniej, lub [planować następną trasę](../plan-route/create-route.md) na podstawie poprzednich.

- *Wyszukiwanie miejsc w określonym okresie*. W aplikacji na Androida należy użyć długiego dotknięcia, a następnie znaleźć miesiąc, w którym odbyła się podróż, wyjść z menu usuwania i ustawić nazwę w polu wyszukiwania. W aplikacji na iOS lista historii wyszukiwania jest już podzielona na bloki według miesięcy.

- *Usuwanie wpisów*. Historia wyszukiwania zapewnia możliwość [usuwania](#delete) poprzednich wpisów, co może być przydatne dla zachowania poufności lub utrzymania porządku w historii.


## Elementy historii {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historia wyszukiwania](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historia wyszukiwania](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Każde pole na liście Historii wyszukiwania zawiera niektóre z **informacji** dostępnych dla aplikacji.

- Ikona identyfikująca typ lub kategorię znalezionego obiektu.
- Nazwa obiektu, lokalizacja, adres lub typ zapytania. W przypadku śladów wyświetlane są informacje o odległości, liczbie punktów trasy i czasie.
- Odległość od bieżącej lokalizacji do punktu i kierunek według kompasu.


### Kolejność elementów {#order-of-items}

- **Ostatnie elementy**. Najnowsze żądania lub lokalizacje są wyświetlane na górze listy. Umożliwia to szybki dostęp do ostatnio używanych elementów.
- **Porządek chronologiczny**. Elementy na liście Historii wyszukiwania są ułożone w porządku chronologicznym, zaczynając od najstarszych lub najwcześniejszych wpisów, a kończąc na najnowszych. Stare elementy stopniowo przesuwają się w dół listy w miarę dodawania nowych wpisów, chyba że stare elementy w historii wyszukiwania zostały użyte, w którym to przypadku zostaną przeniesione na górę listy.
- W systemie iOS lista jest sortowana według miesięcy.

### Typy obiektów {#type-of-objects}

Na listę Historii wyszukiwania trafiają następujące **typy obiektów**:

- **Lokalizacje**. Może to być adres, nazwa firmy, numer trasy, współrzędne, znaczniki, użyteczne miejsca publiczne (POI), notatki OSM lub miejsca, które dotknięto na mapie.
- **Ślady i punkty trasy**. Lista zawiera utworzone, zarejestrowane lub pobrane ślady, które były używane na poprzednich trasach, oraz punkty trasy, jeśli nawigowano do nich osobno.


## Akcje {#actions}

W narzędziu Historia wyszukiwania można [usunąć](#delete) niepotrzebne zapytania, wszystkie naraz lub pojedynczo. Możesz użyć [eksportu](#export-and-share) historii. Aplikacja na Androida zapewnia dodatkową akcję [udostępniania](#share-android) elementów wyszukiwania jako plik [GPX](../../technical/osmand-file-formats/osmand-gpx.md).

Możesz **wyłączyć lub włączyć** wyświetlanie całej historii wyszukiwania. W takim przypadku zapytania nie są usuwane z urządzenia. W systemie Android przełącznik znajduje się na głównym ekranie narzędzia w [zakładce Historia](#overview). W systemie iOS znajduje się on w *Menu → Ustawienia → Ustawienia OsmAnd → Historia → Historia wyszukiwania*.


### Usuwanie {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Usuwanie historii wyszukiwania](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Usuwanie historii wyszukiwania](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Po dłuższym korzystaniu z OsmAnd lista *Historii wyszukiwania* może stać się zbyt długa, więc usunięcie zapytań wyszukiwania pomaga ją wyczyścić. Możesz usunąć zapytania, które nie są już istotne lub których nie zamierzasz już używać w przyszłości, co ułatwia przeszukiwanie listy, zwłaszcza gdy trzeba szybko znaleźć określone zapytania.

Należy **długo dotknąć dowolnego elementu zapytania na liście**, aby otworzyć ekran usuwania.

- *Zaznacz lub odznacz losowe elementy* - dotknij wymaganego elementu na liście.
- *Wybierz okres dostępny do usunięcia*, taki jak dzień, ostatnie 7 dni lub miesiąc - zaznacz pole z podtytułem na liście.
- *Możesz usunąć całą historię* za jednym razem, dotykając przycisku *Zaznacz wszystko* u dołu ekranu.
- *Menu → Ustawienia → Ustawienia OsmAnd → Historia → Akcje*. Ta sekcja zawiera przycisk **Usuń całą historię**.


### Eksport i udostępnianie {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Ustawienia ogólne Historia Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Ustawienia ogólne Historia iOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Dostępnych jest kilka opcji eksportu historii wyszukiwania. Wszystkie pliki są eksportowane w formacie `.osf` (OsmAnd settings File).

1. *Menu → Ustawienia → Ustawienia OsmAnd → Historia → Historia wyszukiwania*.
    Eksport jest dostępny za pomocą menu ustawień OsmAnd. W przypadku Androida przejście tą ścieżką prowadzi do ekranu usuwania, na którym dostępne jest [Udostępnianie historii](#share-android). W przypadku systemu iOS można wybrać poszczególne elementy lub całą historię na ekranie, a po dotknięciu przycisku *Eksportuj* przejść do menu *Lokalna kopia zapasowa*.

2. *Menu → Ustawienia → Ustawienia OsmAnd → Historia → Akcje → Kopia zapasowa jako plik* (Android).
    *Menu → Ustawienia → Ustawienia OsmAnd → Historia → Akcje → Eksportuj* (iOS).
    Dotknięcie tych elementów przenosi do menu *Import/Eksport* (Android) lub *Lokalna kopia zapasowa* (iOS). Rozwiń listę *Moje miejsca* i znajdź *Historię wyszukiwania*. Wszystkie zapytania są eksportowane od razu w jednym pliku.

3. *Menu → Ustawienia → Import/Eksport → Eksportuj do pliku* (Android).
    *Menu → Ustawienia → Lokalna kopia zapasowa → Kopia zapasowa jako plik* (iOS).
    Więcej szczegółów można przeczytać w artykule [Import/Eksport](../personal/import-export.md#export).

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    Możesz użyć Chmury do tworzenia kopii zapasowych historii wyszukiwania. W menu *Zmiany lokalne* lub *Ustawienia → Kopia zapasowa danych → Moje miejsca → Historia wyszukiwania*.

![Ustawienia historii](@site/static/img/search/history_search_share_andr.png)

Eksportowanie elementów lub całej historii wyszukiwania może być przydatne w następujących przypadkach:

- *Kopia zapasowa*. Możesz utworzyć kopię zapasową historii wyszukiwania, aby zapisać informacje przed ich usunięciem i przywrócić je w razie potrzeby.
- *Przenoszenie na inne urządzenie*. Zmieniając urządzenia, można użyć funkcji eksportu lub Chmury, aby przenieść historię wyszukiwania na nowe urządzenie bez konieczności ponownego wyszukiwania i wprowadzania danych.
- *Analiza i przetwarzanie danych*. Możesz wyeksportować historię wyszukiwania w celu analizy danych lub użyć jej w innych aplikacjach.
- [Udostępnij](#share-android) historię wyszukiwania innym użytkownikom OsmAnd.


### Udostępnij (Android) {#share-android}

![Ustawienia historii](@site/static/img/search/history_search_share_andr.png)

Kroki udostępniania elementów historii wyszukiwania są podobne do [eksportu](#export-and-share), z tą różnicą, że eksportujesz całą historię naraz jako plik [osf](../../technical/osmand-file-formats/osmand-osf.md), podczas gdy możesz udostępniać pojedyncze wybrane pliki w formacie gpx.

Na ekranie [usuwania](#delete) wybierz wymagane elementy z listy Historii wyszukiwania. W prawym górnym rogu ekranu znajduje się ikona wskazująca udostępnianie. Wybierz dostępną aplikację lub akcję z listy, aby udostępnić.


## Powiązane artykuły {#related-articles}

- [Wyszukaj wszystko](./search-all.md)
- [Wyszukaj adres](./search-address.md)
- [Wyszukaj UŻY](./search-poi.md)
- [Wyszukaj współrzędne](./search-coordinates.md)