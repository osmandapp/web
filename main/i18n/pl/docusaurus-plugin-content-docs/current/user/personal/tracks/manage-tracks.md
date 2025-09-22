---
source-hash: df7c8f53eee21b0eb4dfeaecf53d0c5ae26f02cec322c124641bc379e421196b
sidebar_position: 2
title:  Zarządzaj trasami
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

Wszystkie trasy w OsmAnd są przechowywane w zakładce w *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd przetwarza pliki tras w [formacie GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), ale pliki [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) i [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) mogą być importowane i konwertowane do formatu GPX. Przeczytaj więcej o różnych typach tras w artykule [Trasy na mapie](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przegląd zarządzania trasami Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Przegląd zarządzania trasami iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Tworzenie trasy {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zaplanuj trasę modyfikuj-trasę-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zaplanuj trasę modyfikuj-trasę-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Możesz dodawać trasy w OsmAnd w następujący sposób:

1. **[Zaimportuj](./manage-tracks.md#import--export-track)** trasę z zewnętrznego źródła.
2. Utwórz nową trasę w aplikacji za pomocą narzędzia **[Zaplanuj trasę](../../plan-route/create-route.md)**.
3. Nagraj trasę w aplikacji za pomocą wtyczki **[Nagrywanie podróży](../../plugins/trip-recording.md)**.
4. Wprowadź wiele punktów za pomocą współrzędnych i zapisz je jako trasę, używając narzędzia **[Wprowadzanie współrzędnych](../../plan-route/coordinate-input.md)**.
5. Możesz również dodawać **Punkty trasy** do nowej trasy poprzez **[Menu kontekstowe](../../map/map-context-menu.md#-add--edit-track-waypoint)**.


## Zarządzaj trasami {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *zakładka <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![Moje miejsca z trasami w systemie Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *zakładka <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Moje miejsca z trasami w systemie iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Wszystkie kiedykolwiek nagrane, utworzone lub zaimportowane trasy są automatycznie wyświetlane w folderze [Moje miejsca](../../personal/myplaces.md) w zakładce *Trasy*. Są one uporządkowane według folderów lub wyświetlane na liście pod nimi.


### Menu trasy {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *zakładka <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Moje miejsca z trasami w systemie Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *zakładka <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Menu kontekstowe trasy w systemie iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Każda trasa, podobnie jak foldery, ma menu, które pozwala na efektywne zarządzanie trasami. Oto jak uzyskać do niego dostęp:

- *Android* - dotknij *menu z trzema kropkami* w polu trasy.
- *iOS* - długo naciśnij wymaganą trasę na liście.

Menu udostępnia następujące działania:

- **Pokaż/Ukryj na mapie** — Wyświetla lub ukrywa wybrane trasy na mapie, wizualnie przedstawiając ich lokalizację.

- [Otwórz](../../map/tracks/index.md#configure-map) (*iOS*) — To ustawienie jest dostępne w menu Konfiguruj mapę. Znajduje się w *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>* i pozwala na dostęp do [menu kontekstowego wybranej trasy](../../map/tracks/track-context-menu.md) po jej dotknięciu.

- **Wygląd** (*iOS*) — Dostosuj [wygląd tras](../../map/tracks/appearance.md) do swoich preferencji.

- **Nawigacja** (*iOS*) — Rozpoczyna [nawigację](../../navigation/setup/gpx-navigation.md) wzdłuż wybranej trasy.

- **Analizuj na mapie** (*Android*) / **Analizuj** (*iOS*) — Otwiera narzędzie [Analizuj na mapie](../../navigation/setup/route-details.md#analyze-on-map) w Szczegółach trasy w celu dalszej analizy.

- **Udostępnij** — Umożliwia udostępnianie wybranej trasy innym.

- **Prześlij modyfikacje do OSM** (*iOS*) — [Prześlij zmiany](../../plugins/osm-editing.md#gps-track), które wprowadziłeś w trasie, bezpośrednio do *OpenStreetMap*.

- **Edytuj** (*iOS*) — Użyj narzędzia [Zaplanuj trasę](../../plan-route/create-route.md#modify-existing-gpx-track), aby modyfikować trasy.

- **Duplikuj** (*iOS*) — Tworzy kopię wybranej trasy.

- **Zmień nazwę** — Zmień nazwę wybranej trasy dla lepszej organizacji.

- **Przenieś** — Pozwala na przeniesienie wybranej trasy do innego folderu.

- **Eksportuj** (*Android*) — Przejdź do zakładki *Menu → Ustawienia → Działania*, aby wyeksportować wszystkie trasy z folderu.

- **Usuń** — Trwale usuwa wybraną trasę, która nie jest już potrzebna.


### Wyszukiwanie {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funkcja wyszukiwania tras w Moich miejscach Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Funkcja wyszukiwania tras w Moich miejscach iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Dotknij przycisku &#x1F50D; u góry ekranu urządzenia, aby otworzyć menu sortowania listy tras.  

Dostępne:

- Wyszukiwanie według nazwy trasy.
- [Sortuj według](#sort-by) dla lepszego wyszukiwania, jeśli nie pamiętasz tytułu.
- [Filtruj](./smart-folder.md#search-filter) (*tylko Android*), jeśli potrzebujesz określonych cech trasy.


### Tryb wyboru {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funkcja sortowania tras w Moich miejscach Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasy w Moich miejscach iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

Pozycja menu **Wybierz** udostępnia opcje zarządzania folderami i trasami. Ta funkcja pozwala na wybranie wielu tras lub folderów z trasami. Możesz również zaznaczyć wszystkie trasy i foldery, dotykając specjalnego przycisku **Zaznacz wszystko**.

Po dokonaniu wyboru dostępne są następujące kroki:  

- **Pokaż na mapie** — Dzięki tej funkcji możesz wyświetlić wybrane trasy na mapie, aby lepiej zrozumieć ich lokalizację i wzajemne relacje.

- **Udostępnij** (*Android*) / **Eksportuj** (*iOS*) — Jeśli chcesz udostępnić wybrane dane innym użytkownikom lub zapisać je w usłudze chmurowej, funkcja *Udostępnij/Eksportuj* pozwala na wysyłanie tras i folderów za pomocą różnych metod udostępniania.

- **Prześlij do OpenStreetMap** — Możesz przesłać wybrane trasy do OpenStreetMap, przyczyniając się do rozwoju i ulepszania danych.

- **Przenieś** — Możesz organizować swoje dane, przenosząc wybrane trasy i foldery do innych folderów.

- [Zmień aktywność](../../map/tracks/track-context-menu.md#ttrack-activity-type) — Ta akcja pozwala na zmianę typu aktywności, na przykład na *Samochód*, *Sporty motorowe*, *Wędrówki z plecakiem* lub inne, dla wybranej trasy.

- [Zmień wygląd](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Ta opcja pozwala na dostosowanie wyglądu wybranych tras, czyniąc je bardziej widocznymi i rozpoznawalnymi na mapie.

- **Usuń** — Jeśli wybrane trasy lub foldery nie są już potrzebne, funkcja Usuń pozwala na ich usunięcie, przy czym aplikacja udostępnia opcje potwierdzenia, aby uniknąć przypadkowego usunięcia.


### Sortuj trasy {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funkcja sortowania tras w Moich miejscach Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Funkcja sortowania tras w Moich miejscach iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd oferuje łatwy sposób sortowania tras, pomagając w zarządzaniu dużą kolekcją lub szybkim znajdowaniu określonych funkcji. Aby uzyskać dostęp do menu sortowania, dotknij **Sortuj według** u góry listy tras.

***Opcje sortowania:***

- **Najbliższe** — Pokazuje trasy najbliższe Twojej bieżącej lokalizacji.
- **Ostatnio zmodyfikowane** — Wyświetla trasy posortowane według daty ostatniej modyfikacji.
- **Nazwa: A - Z** — Układa trasy alfabetycznie od A do Z.
- **Nazwa: Z - A** — Układa trasy alfabetycznie od Z do A.
- **Najnowsze najpierw** — Wyświetla trasy według daty utworzenia, z najnowszymi na górze.
- **Najstarsze najpierw** — Wyświetla trasy według daty utworzenia, z najstarszymi na górze.
- **Najdłuższy dystans najpierw** — Wyświetla trasy posortowane według długości, z najdłuższymi na górze.
- **Najkrótszy dystans najpierw** — Wyświetla trasy posortowane według długości, z najkrótszymi na górze.
- **Najdłuższy czas trwania najpierw** — Sortuje trasy według czasu trwania, umieszczając najdłuższe na górze.
- **Najkrótszy czas trwania najpierw** — Sortuje trasy według czasu trwania, umieszczając najkrótsze na górze.

### Sortowanie podfolderów {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funkcja sortowania tras w Moich miejscach Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Funkcja sortowania tras w Moich miejscach iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Jeśli chcesz posortować [podfoldery](#folder-actions), przejdź do menu z trzema kropkami w wybranym folderze i wybierz wymagane [opcje](#sort-by).  

Wybrana opcja sortowania jest stosowana nie tylko do bieżącego podfolderu, ale także do wszystkich zagnieżdżonych folderów i tras na wszystkich poziomach. Zapewnia to spójną strukturę zapisanych danych.


## Folder tras {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Dotknij *menu z trzema kropkami* w polu folderu, aby **otworzyć** menu folderu.

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

> Długo naciśnij pole folderu, aby **otworzyć** menu folderu.

![Menu kontekstowe trasy w systemie iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Menu folderu tras pozwala przeglądać, zmieniać nazwy, eksportować i zarządzać folderami.


***Działania z folderem:***

- **Nazwa** — Wyświetla nazwę folderu, datę utworzenia i liczbę tras, które zawiera.
- **Pokaż wszystkie trasy na mapie** (*tylko Android*) — Wyświetla wszystkie trasy w folderze na mapie. Jeśli jest wiele tras, może to spowodować zawieszenie się urządzenia.
- **Edytuj nazwę** (*Android*) / **Zmień nazwę** (*iOS*) — Pozwala na zmianę nazwy folderu.
- [Zmień domyślny wygląd](../../map/tracks/appearance.md) (*Android*) / **Wygląd** (*iOS*) — Zmienia wygląd wyświetlania wszystkich tras w folderze.
- [Eksportuj](../../personal/import-export.md) — Otwiera zakładkę *Menu → Ustawienia → Działania*, aby wyeksportować wszystkie trasy w folderze jako [plik `.osf`](../../personal/import-export.md#export).
- [Przenieś](#track-folder) — Pozwala na przeniesienie folderu do innego istniejącego folderu lub utworzenie nowego.
- [Usuń folder](#delete-folder) — Usuwa folder po potwierdzeniu. ***Ta akcja jest nieodwracalna.***


### Statystyki folderu {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *zakładka <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/>*

![Moje miejsca z trasami w systemie Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *zakładka <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Moje miejsca z trasami w systemie iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

Na dole listy w zakładce *Trasy* oraz pod listą tras **w każdym z Twoich folderów** znajduje się sekcja informacyjna, która pozwala na przeglądanie ogólnych statystyk podsumowujących dla tras w wybranym folderze. Wszystkie wartości są wyświetlane w wybranych przez Ciebie [jednostkach](../../personal/profiles.md#units--formats).

- *Liczba **Tras** w folderze* — Wyświetla liczbę tras zawartych w wybranym folderze.
- *Całkowita suma* **Dystansów** — Wyświetlana jest całkowita długość wszystkich tras w wybranym folderze, mierzona w wybranych przez Ciebie jednostkach.
- *Suma* **Wzniesień** — Dane wskazują całkowite przewyższenie na wszystkich trasach w wybranym folderze.
- *Suma* **Spadków** — Ten parametr to suma spadków pionowych na wszystkich trasach w wybranym folderze.
- *Suma* **Czasu trwania** — Wyświetla całkowity czas potrzebny na pokonanie wszystkich tras w wybranym folderze.
- *Całkowity **Rozmiar** pobranych plików w MB* — Całkowity rozmiar pobranych plików w megabajtach pokazuje, ile miejsca zajmują wszystkie trasy w wybranym folderze na Twoim urządzeniu.


### Działania w folderze {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Funkcja sortowania tras w Moich miejscach Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Trasy w Moich miejscach iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Działania w folderze pomagają organizować, sortować i importować trasy, aby uporządkować dane nawigacyjne.  

Jak otworzyć działania w folderze:

- Otwórz zakładkę Trasy w Moich miejscach.
- Przejdź do folderu, którym chcesz zarządzać.
- Dotknij *menu z trzema kropkami* w prawym górnym rogu, aby otworzyć menu działań folderu.

***Działania w menu folderu:***

- [Wybierz](#selection-mode) — Dotknij wymaganych folderów i tras, aby zastosować działania z menu w *trybie wyboru*.
- [Sortuj podfoldery](#sort-by) — Zastosuj porządek sortowania (np. według nazwy, daty) do wszystkich podfolderów i tras na każdym poziomie.
- [Dodaj folder inteligentny](../tracks/smart-folder.md#how-to-create-smart-folder) — Automatycznie sortuj trasy i ślady na podstawie ustawionych przez Ciebie kryteriów.
- [Importuj](#import) — Prześlij pliki GPX lub inne pliki tras z urządzenia do OsmAnd do użytku offline.
- **Dodaj nowy folder** — Aby uporządkować swoje trasy i ślady w logiczne kategorie, umieść je w różnych folderach. Pomaga to w strukturyzacji informacji nawigacyjnych.


### Usuń folder {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *zakładka <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Moje miejsca z trasami w systemie Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *zakładka <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Menu kontekstowe trasy w systemie iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Możesz usunąć folder ze wszystkimi trasami, które zawiera. Aby to zrobić:

- Dotknij *menu z trzema kropkami* w polu folderu do usunięcia.
- Na dole menu znajdź opcję **Usuń folder**.
- ***UWAGA: Ta akcja jest nieodwracalna.***


## Importuj / Eksportuj trasę {#import--export-track}

### Importuj {#import}

Narzędzie importu pozwala na dodawanie tras z zewnętrznych plików do nawigacji offline i analizy. Metody importowania tras:

1. **Bezpośredni import plików:**

    - Dotknij pliku GPX, KML lub KMZ z aplikacji do przesyłania wiadomości, e-maila, Dysku Google lub menedżerów plików.
    - Po wyświetleniu monitu wybierz Otwórz w OsmAnd.
    - Zaimportowana trasa jest zapisywana w folderze **Import** w *Moich miejscach*.
    - Kroki: Dotknij pliku GPX → Otwórz w OsmAnd.

2. **Import za pomocą menu *Moje miejsca*:**

    - Otwórz *Menu Moje miejsca → Trasy*.
    - Wybierz plik GPX do zaimportowania.

    *Dodatkowe opcje:*

    - **Pliki GPX z jedną trasą** - importuj całą trasę bezpośrednio.
    - **Pliki GPX z wieloma trasami** - wybierz import pojedynczego pliku GPX lub wybierz określone trasy.

***UWAGA:*** *Trasy ręcznie dodane do folderu OsmAnd na Twoim urządzeniu są automatycznie importowane bez ponownego uruchamiania aplikacji.*  


### Eksportuj {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![import multitrack](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Eksportuj | Importuj |
|:------------|:---------------|
| ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Eksportuj </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Eksportuj </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

<!--
<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_1.png').default} alt="gpx"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_2.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_3.png').default} alt="gpx"/></td>
    </tr>
</table>
-->

</TabItem>

</Tabs>

Istnieje kilka sposobów na wyeksportowanie jednego lub więcej plików tras do dowolnego komunikatora, e-maila, menedżera plików lub aplikacji.  

1. Poprzez [*Menu kontekstowe trasy → Udostępnij*](../../map/tracks/track-context-menu.md#options).

2. Poprzez *Menu Moje miejsca → Trasy → Menu folderu / trasy*:

    - Aby [**wyeksportować pojedynczą trasę**](#track-menu), wybierz menu trasy.
    - Aby [**wyeksportować wiele tras**](#track-folder), wybierz menu wymaganego folderu.

3. Poprzez [Lokalny plik kopii zapasowej](../../personal/import-export.md#export). Eksportowanie tras GPX jako plików `.osf`.


## Powiązane artykuły {#related-articles}

- [Pokaż trasę na mapie](../../map/tracks/index.md)
- [Analizuj na mapie](../../map/tracks/index.md#analyze-track-on-map)
- [Menu kontekstowe trasy](../../map/tracks/track-context-menu.md)
- [Nawigacja po trasie](../../navigation/setup/gpx-navigation.md)
- [Nagrywanie podróży](../../plugins/trip-recording.md)