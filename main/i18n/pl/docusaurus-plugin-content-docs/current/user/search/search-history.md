---
source-hash: 7a908eb0d049f610343ddbeb81ac84c7f787f549729ffd82f824c9c2f9bd25d6
sidebar_position: 3
title: Historia wyszukiwania
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

*Historia wyszukiwania* to zapis wszystkich wyszukiwań i lokalizacji, które zostały wprowadzone lub wyszukane w aplikacji w okresie użytkowania. To narzędzie pozwala łatwo znaleźć i uzyskać dostęp do wcześniej wyszukiwanych lokalizacji, co ułatwia nawigację i oszczędza czas.

OsmAnd oferuje kilka sposobów przeglądania historii wyszukiwania.

- [Przycisk wyszukiwania](../widgets/map-buttons.md#search) jest zawsze wyświetlany na mapie, a jego dotknięcie przeniesie Cię do [ogólnego ekranu](#how-to-use) narzędzia.
- Przejdź do głównego *Menu* Androida *→ Szukaj → zakładka Historia*.
- Podczas przygotowywania do rozpoczęcia trasy dotknij *Nawigacja → Ustaw cel → Pole wyszukiwania*.
- Blok informacyjny w menu nawigacji [przygotowania trasy](../navigation/setup/route-navigation.md#navigation-menu) wyświetla listę ostatnich punktów docelowych, które również są częścią historii wyszukiwania.
- Historia wyszukiwania jest dostępna w [Android Auto](../navigation/auto-car.md#search) i [CarPlay](../navigation/car-play.md#search).


## Jak używać {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Historia wyszukiwania](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historia wyszukiwania](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Historia wyszukiwania służy do dostarczania odpowiednich informacji o Twoich poprzednich działaniach.

- *Ponowne wyszukiwanie*. Możesz użyć historii wyszukiwania, aby ponownie wyszukać wcześniej wyszukiwane miejsca lub adresy bez konieczności ponownego wprowadzania zapytania.

- *Szybki dostęp do często odwiedzanych miejsc*. Jeśli często odwiedzasz określone miejsca, takie jak dom, praca lub ulubione miejsca, Historia wyszukiwania zapisuje te miejsca, zapewniając szybki dostęp do nich.

- *Śledzenie poprzednich podróży*. Historia wyszukiwania może być przydatna do śledzenia poprzednich podróży i tras. Możesz śledzić trasy, które już przebyłeś, lub [zaplanować następną trasę](../plan-route/create-route.md) na podstawie poprzednich.

- *Wyszukiwanie miejsc w określonym okresie czasu*. W przypadku aplikacji na Androida należy użyć długiego dotknięcia, a następnie znaleźć miesiąc, w którym odbyła się podróż, wyjść z menu usuwania i ustawić nazwę w polu wyszukiwania. W przypadku aplikacji na iOS lista historii wyszukiwania jest już podzielona na bloki według miesiąca.

- *Usuwanie wpisów*. Historia wyszukiwania umożliwia [usuwanie](#delete) poprzednich wpisów, co może być przydatne w celu zachowania poufności lub uporządkowania historii.


## Elementy historii {#history-items}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Historia wyszukiwania](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historia wyszukiwania](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Każde pole na liście Historii wyszukiwania zawiera niektóre z **informacji** dostępnych w aplikacji.

- Ikona identyfikująca typ lub kategorię znalezionego obiektu.
- Nazwa obiektu, lokalizacja, adres lub zapytanie typu. W przypadku ścieżek wyświetlane są informacje o odległości, liczbie punktów trasy i czasie.
- Odległość od bieżącej lokalizacji do punktu i kierunek według kompasu.


### Kolejność elementów {#order-of-items}

- **Ostatnie elementy**. Najnowsze zapytania lub lokalizacje są wyświetlane na górze listy. Umożliwia to szybki dostęp do ostatnio używanych elementów.
- **Kolejność chronologiczna**. Elementy na liście Historii wyszukiwania są ułożone w kolejności chronologicznej, zaczynając od najstarszych lub najwcześniejszych wpisów, a kończąc na najnowszych lub najpóźniejszych. Stare elementy stopniowo przesuwają się w dół listy w miarę dodawania nowych wpisów, chyba że stare elementy w historii wyszukiwania zostały użyte, w którym to przypadku zostaną przeniesione na górę listy.
- W iOS lista jest sortowana według miesiąca.

### Typ obiektów {#type-of-objects}

Następujące **typy obiektów** trafiają na listę Historii wyszukiwania:

- **Lokalizacje**. Może to być adres, nazwa firmy, numer trasy, współrzędne, znaczniki, punkty POI, notatki OSM lub miejsca, które dotknąłeś na mapie.
- **Ślady i punkty trasy**. Lista zawiera ślady, które utworzyłeś, nagrałeś lub pobrałeś, a które były używane w poprzednich trasach, oraz punkty trasy, jeśli nawigowałeś do nich oddzielnie.


## Działania {#actions}

W narzędziu Historia wyszukiwania możesz [usunąć](#delete) niepotrzebne zapytania, wszystkie naraz lub pojedynczo. Możesz użyć [eksportu](#export-and-share) historii. Aplikacja na Androida zapewnia dodatkową funkcję [udostępniania](#share-android) elementów wyszukiwania jako pliku [GPX](../../technical/osmand-file-formats/osmand-gpx.md).

Możesz **wyłączyć lub włączyć** wyświetlanie całej historii wyszukiwania. W takim przypadku zapytania nie są usuwane z urządzenia. W Androidzie przełącznik znajduje się na głównym ekranie narzędzia na [zakładce Historia](#overview). W iOS znajduje się w *Menu → Ustawienia → Ustawienia OsmAnd → Historia → Historia wyszukiwania*.


### Usuń {#delete}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Historia wyszukiwania](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historia wyszukiwania](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Po długim korzystaniu z OsmAnd lista *Historii wyszukiwania* może stać się zbyt długa, więc usunięcie zapytań wyszukiwania pomaga ją wyczyścić. Możesz usunąć zapytania, które nie są już istotne lub których nie zamierzasz używać w przyszłości, co ułatwia przeszukiwanie listy, zwłaszcza gdy trzeba szybko znaleźć konkretne zapytania wyszukiwania.

Aby otworzyć ekran usuwania, należy **długo dotknąć dowolnego elementu zapytania na liście**.

- *Wybierz lub odznacz losowe elementy* - dotknij wymaganego elementu na liście.
- *Wybierz okres dostępny do usunięcia*, taki jak dzień, ostatnie 7 dni lub miesiąc - zaznacz pole z podnagłówkiem na liście.
- *Możesz usunąć całą historię* naraz, dotykając przycisku *Zaznacz wszystko* na dole ekranu.
- *Menu → Ustawienia → Ustawienia OsmAnd → Historia → Działania*. Ta sekcja zawiera przycisk **Usuń całą historię**.


### Eksportuj i udostępnij {#export-and-share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Historia ustawień ogólnych Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Historia ustawień ogólnych iOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Dostępnych jest kilka opcji eksportu historii wyszukiwania. Wszystkie pliki są eksportowane w formacie `.osf` (plik ustawień OsmAnd).

1. *Menu → Ustawienia → Ustawienia OsmAnd → Historia → Historia wyszukiwania*.
Eksport jest dostępny za pomocą menu ustawień OsmAnd. W przypadku Androida, podążanie tą ścieżką prowadzi do ekranu usuwania, gdzie dostępna jest opcja [Udostępnij historię](#share-android). W przypadku iOS, możesz wybrać pojedyncze elementy lub całą historię na ekranie, a po dotknięciu przycisku *Eksportuj* przejść do menu *Lokalna kopia zapasowa*.

2. *Menu → Ustawienia → Import/Eksport → Eksportuj do pliku* (Android).
*Menu → Ustawienia → Lokalna kopia zapasowa → Utwórz kopię zapasową jako plik* (iOS).
Dotknięcie tych elementów przenosi Cię do menu *Import/Eksport* (Android) lub *Lokalna kopia zapasowa* (iOS). Rozwiń listę *Moje miejsca* i znajdź *Historię wyszukiwania*. Wszystkie zapytania są eksportowane w jednym pliku naraz.

3. *Menu → Ustawienia → Import/Eksport → Eksportuj do pliku* (Android).
*Menu → Ustawienia → Lokalna kopia zapasowa → Utwórz kopię zapasową jako plik* (iOS).
Więcej szczegółów można znaleźć w artykule [Import/Eksport](../personal/import-export.md#export).

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
Możesz użyć Chmury do utworzenia kopii zapasowej historii wyszukiwania. W menu *Lokalne zmiany* lub *Ustawienia → Utwórz kopię zapasową danych → Moje miejsca → Historia wyszukiwania*.

![Historia ustawień](@site/static/img/search/history_search_share_andr.png)

Eksportowanie elementów lub całej historii wyszukiwania może być przydatne w następujących przypadkach:

- *Kopia zapasowa*. Możesz utworzyć kopię zapasową historii wyszukiwania, aby zapisać informacje przed ich usunięciem i przywrócić je w razie potrzeby.
- *Przenoszenie na inne urządzenie*. Gdy zmieniasz urządzenia, możesz użyć funkcji eksportu lub Chmury, aby przenieść historię wyszukiwania na nowe urządzenie bez konieczności ponownego wyszukiwania i wprowadzania danych.
- *Analiza i przetwarzanie danych*. Możesz wyeksportować historię wyszukiwania do analizy danych lub użyć jej w innych aplikacjach.
- [Udostępnij](#share-android) historię wyszukiwania innym użytkownikom OsmAnd.


#### Udostępnij (Android) {#share-android}

![Historia ustawień](@site/static/img/search/history_search_share_andr.png)

Kroki udostępniania elementów historii wyszukiwania są podobne do [eksportu](#export-and-share), z tą różnicą, że eksportujesz całą historię naraz jako plik [osf](../../technical/osmand-file-formats/osmand-osf.md), podczas gdy możesz udostępniać pojedyncze wybrane pliki w formacie gpx.

Na ekranie [usuwania](#delete) wybierz wymagane elementy z listy Historii wyszukiwania. W prawym górnym rogu ekranu znajduje się ikona wskazująca udostępnianie. Wybierz dostępną aplikację lub działanie z listy, aby udostępnić.


## Powiązane artykuły {#related-articles}

- [Wyszukaj wszystko](./search-all.md)
- [Wyszukaj adres](./search-address.md)
- [Wyszukaj POI](./search-poi.md)
- [Wyszukaj współrzędne](./search-coordinates.md)


> *Ostatnia aktualizacja: lipiec 2024*