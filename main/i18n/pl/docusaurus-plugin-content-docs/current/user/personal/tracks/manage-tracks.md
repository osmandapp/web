---
source-hash: ccc92258ad1865c820ecfed771b07e1d48a441845c435a996fe12367c3ecf9df
sidebar_position: 2
title: Zarządzaj śladami
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

Wszystkie ślady w OsmAnd są przechowywane w zakładce *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd przetwarza plik śladu w [formacie GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), ale [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) i [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) mogą być importowane i konwertowane do GPX. Więcej o różnych typach śladów przeczytasz w artykule [Ślady na mapie](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zarządzaj śladem Przegląd Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zarządzaj śladem Przegląd iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Utwórz ślad {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zaplanuj trasę modyfikuj-ślad-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zaplanuj trasę modyfikuj-ślad-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Możesz dodawać ślady w OsmAnd w następujący sposób:

1. **[Importuj](./manage-tracks.md#import--export-track)** ślad z zewnętrznego źródła.
2. Utwórz nowy ślad w aplikacji za pomocą narzędzia **[Planuj trasę](../../plan-route/create-route.md)**.
3. Nagraj ślad w aplikacji za pomocą wtyczki **[Nagrywanie podróży](../../plugins/trip-recording.md)**.
4. Wprowadź wiele punktów za pomocą współrzędnych i zapisz je jako ślad za pomocą narzędzia **[Wprowadzanie współrzędnych](../../plan-route/coordinate-input.md)**.
5. Możesz również dodać **Punkty trasy** do nowego śladu za pomocą **[Menu kontekstowego](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint)**.


## Zarządzaj śladami {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![Moje miejsca ze śladami w Androidzie](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Moje miejsca ze śladami w iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Wszystkie ślady kiedykolwiek nagrane, utworzone lub zaimportowane są automatycznie wyświetlane w folderze [Moje miejsca](../../personal/myplaces.md) w zakładce *Ślady*. Są one zorganizowane według folderów lub wyświetlane na liście poniżej nich.


### Menu śladu {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Moje miejsca ze śladami w Androidzie](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Menu kontekstowe śladu w iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Każdy ślad, podobnie jak foldery, ma menu, które pozwala efektywnie zarządzać śladami. Oto jak uzyskać do niego dostęp:

- *Android* - dotknij *menu z trzema kropkami* w polu śladu.
- *iOS* - długo dotknij wymaganego śladu na liście.

Menu udostępnia następujące działania:

- **Pokaż/Ukryj na mapie** — Wyświetla lub ukrywa wybrane ślady na mapie, wizualnie przedstawiając ich lokalizację.

- [Otwórz](../../map/tracks/index.md#configure-map) (*iOS*) — To ustawienie jest dostępne w menu Konfiguruj mapę. Znajduje się w *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, pozwala uzyskać dostęp do [menu kontekstowego wybranego śladu](../../map/tracks/track-context-menu.md) po dotknięciu.

- **Wygląd** (*iOS*) — Dostosuj [wygląd śladów](../../map/tracks/appearance.md) do swoich preferencji.

- **Nawigacja** (*iOS*) — Rozpoczyna [nawigację](../../navigation/setup/gpx-navigation.md) wzdłuż wybranego śladu.

- **Analizuj na mapie** (*Android*) / **Analizuj** (*iOS*) — Otwiera narzędzie [Analizuj na mapie](../../navigation/setup/route-details.md#analyze-on-map) w Szczegółach trasy w celu dalszej analizy.

- **Udostępnij** — Umożliwia udostępnianie wybranego śladu innym.

- **Prześlij modyfikacje do OSM** (*iOS*) — [Prześlij zmiany](../../plugins/osm-editing.md#gps-track), które wprowadziłeś do śladu bezpośrednio do *OpenStreetMap*.

- **Edytuj** (*iOS*) — Użyj narzędzia [Planuj trasę](../../plan-route/create-route.md#modify-gpx-track) do modyfikowania śladów.

- **Duplikuj** (*iOS*) — Tworzy kopię wybranego śladu.

- **Zmień nazwę** — Zmień nazwę wybranego śladu w celu lepszej organizacji.

- **Przenieś** — Umożliwia przeniesienie wybranego śladu do innego folderu.

- **Eksportuj** (*Android*) — Przejdź do *Menu → Ustawienia → Zakładka Akcje*, aby wyeksportować wszystkie ślady z folderu.

- **Usuń** — Trwale usuń wybrany ślad, który nie jest już potrzebny.


### Szukaj {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Moje miejsca ślady funkcja wyszukiwania Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Moje miejsca ślady funkcja wyszukiwania iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Dotknij przycisku &#x1F50D; u góry ekranu urządzenia, aby otworzyć menu sortowania listy śladów.  

Dostępne:

- Wyszukiwanie według nazwy śladu.
- [Sortuj według](#sort-by) dla lepszego wyszukiwania, jeśli nie pamiętasz tytułu.
- [Filtruj](./smart-folder.md#search-filter) (*tylko Android*), jeśli potrzebujesz konkretnych cech śladu.


### Tryb wyboru {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Moje miejsca ślady funkcja sortowania Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Moje miejsca ślady iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

Element menu **Wybierz** udostępnia opcje zarządzania folderami i śladami. Ta funkcja pozwala wybrać wiele śladów lub folderów śladów. Możesz również wybrać wszystkie ślady i foldery, dotykając specjalnego przycisku **Wybierz wszystko**.

Po dokonaniu wyboru dostępne są następujące kroki:  

- **Pokaż na mapie** — Dzięki tej funkcji możesz wyświetlić wybrane ślady na mapie, aby lepiej zrozumieć ich lokalizację i wzajemne relacje.

- **Udostępnij** (*Android*) / **Eksportuj** (*iOS*) — Jeśli chcesz udostępnić wybrane dane innym użytkownikom lub zapisać je w usłudze chmurowej, funkcja *Udostępnij/Eksportuj* umożliwia wysyłanie śladów i folderów za pomocą różnych metod udostępniania.

- **Prześlij do OpenStreetMap** — Możesz przesłać wybrane ślady do OpenStreetMap, przyczyniając się do rozwoju i ulepszania danych.

- **Przenieś** — Możesz uporządkować swoje dane, przenosząc wybrane ślady i foldery do innych folderów.

- [Zmień aktywność](../../map/tracks/track-context-menu.md#track-information-activity) — Ta akcja pozwala zmienić typ aktywności, na przykład na *Samochód*, *Sporty motorowe przygodowe*, *Wędrówki z plecakiem* lub inne, dla wybranego śladu.

- [Zmień wygląd](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Ta opcja pozwala dostosować wygląd wybranych śladów, czyniąc je bardziej widocznymi i rozpoznawalnymi na mapie.

- **Usuń** — Jeśli wybrane ślady lub foldery nie są już potrzebne, funkcja Usuń pozwala je usunąć, a aplikacja udostępnia opcje potwierdzenia, aby uniknąć przypadkowego usunięcia.


### Sortuj według {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Moje miejsca ślady funkcja sortowania Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Moje miejsca ślady funkcja sortowania iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd oferuje łatwy sposób sortowania śladów, pomagając zarządzać dużą kolekcją lub szybko znaleźć konkretne funkcje. Aby uzyskać dostęp do menu sortowania, dotknij **Sortuj według** u góry listy śladów.

***Opcje sortowania:***

- **Najbliżej** — Pokazuje ślady najbliżej Twojej aktualnej lokalizacji.

- **Ostatnio modyfikowane** — Wyświetla ślady posortowane według daty ostatniej modyfikacji.

- **Nazwa: A - Z** — Uporządkowuje ślady alfabetycznie od A do Z.

- **Nazwa: Z - A** — Uporządkowuje ślady alfabetycznie od Z do A.

- **Najnowsza data najpierw** — Wyświetla ślady według daty utworzenia, z najnowszymi na górze.

- **Najstarsza data najpierw** — Wyświetla ślady według daty utworzenia, z najstarszymi na górze.

- **Najdłuższy dystans najpierw** — Wyświetla ślady posortowane według długości, z najdłuższymi na górze.

- **Najkrótszy dystans najpierw** — Wyświetla ślady posortowane według długości, z najkrótszymi na górze.

- **Najdłuższy czas trwania najpierw** — Sortuje ślady według czasu trwania, umieszczając najdłuższe na górze.

- **Najkrótszy czas trwania najpierw** — Sortuje ślady według czasu trwania, umieszczając najkrótsze na górze.

#### Sortowanie podfolderów {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Moje miejsca ślady funkcja sortowania Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Moje miejsca ślady funkcja sortowania iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Jeśli chcesz posortować [podfoldery](#folder-actions), przejdź do menu z trzema kropkami w wybranym folderze i wybierz wymagane [opcje](#sort-by).  

Wybrana opcja sortowania jest stosowana nie tylko do bieżącego podfolderu, ale także do wszystkich zagnieżdżonych folderów i śladów na wszystkich poziomach. Zapewnia to spójną strukturę w zapisanych danych.


## Folder śladów {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![import wielu śladów](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu kontekstowe śladu w iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Menu folderu śladów pozwala przeglądać, zmieniać nazwy, eksportować i zarządzać folderami.

Jak otworzyć menu folderu:

- *Android* - dotknij *menu z trzema kropkami* w polu folderu.
- *iOS* - długo dotknij pola folderu.

***Działania z folderem:***

- **Nazwa** — Wyświetla nazwę folderu, datę utworzenia i liczbę śladów, które zawiera.

- **Pokaż wszystkie ślady na mapie** (*tylko Android*) — Wyświetla wszystkie ślady w folderze na mapie —  
    *UWAGA: Jeśli jest wiele śladów, może to spowodować zawieszenie urządzenia.*

- **Edytuj nazwę** (*Android*) / **Zmień nazwę** (*iOS*) — Pozwala zmienić nazwę folderu.

- [Zmień domyślny wygląd](../../map/tracks/appearance.md) (*Android*) / **Wygląd** (*iOS*) — Zmienia wygląd wyświetlania wszystkich śladów w folderze.

- [Eksportuj](../../personal/import-export.md) — Otwiera *Menu → Ustawienia → Zakładka Akcje*, aby wyeksportować wszystkie ślady w folderze jako plik [`.osf`](../../personal/import-export.md#export).

- [Przenieś](#track-folder) — Umożliwia przeniesienie folderu do innego istniejącego folderu lub utworzenie nowego.

- [Usuń folder](#delete-folder) — Usuwa folder po potwierdzeniu.  
    ***UWAGA: Ta akcja jest nieodwracalna.***


### Statystyki folderu {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> tab*

![Moje miejsca ze śladami w Androidzie](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Moje miejsca ze śladami w iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

Na dole listy w zakładce *Ślady* oraz poniżej listy śladów **w każdym z Twoich folderów** znajduje się sekcja informacyjna, która pozwala wyświetlić ogólne statystyki podsumowujące dla śladów w wybranym folderze. Wszystkie wartości są wyświetlane w wybranych [jednostkach](../../personal/profiles.md#units--formats).

- *Liczba **Śladów** w folderze* — Wyświetla liczbę śladów zawartych w wybranym folderze.

- *Całkowita suma* **Dystansów** — Wyświetlana jest całkowita długość wszystkich śladów w wybranym folderze, mierzona w wybranych jednostkach.

- *Suma* **Podjazdów** — Dane wskazują całkowity pionowy wzrost na wszystkich śladach w wybranym folderze.

- *Suma* **Zjazdów** — Ten parametr to suma pionowych zjazdów na wszystkich śladach w wybranym folderze.

- *Suma* **Czasu trwania** — Wyświetla całkowity czas potrzebny na ukończenie wszystkich śladów w wybranym folderze.

- *Całkowity **Rozmiar** pobranych plików w MB* — Całkowity rozmiar pobranych plików w megabajtach pokazuje, ile miejsca zajmują wszystkie ślady w wybranym folderze na Twoim urządzeniu.


### Akcje folderu {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Moje miejsca ślady funkcja sortowania Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Moje miejsca ślady iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Akcje w folderze pomagają organizować, sortować i importować ślady, aby strukturyzować dane nawigacyjne.  

Jak otworzyć akcje folderu:

- Otwórz zakładkę Ślady w Moich miejscach.
- Przejdź do folderu, którym chcesz zarządzać.
- Dotknij *menu z trzema kropkami* w prawym górnym rogu, aby otworzyć menu akcji folderu.

***Akcje w menu folderu:***

- [Wybierz](#selection-mode) — Dotknij wymaganych folderów i śladów, aby zastosować akcje z menu w *trybie wyboru*.

- [Sortuj podfoldery](#sort-by) — Zastosuj kolejność sortowania (np. według nazwy, daty) do wszystkich podfolderów i śladów na każdym poziomie.

- [Dodaj inteligentny folder](../tracks/smart-folder.md#how-to-create-smart-folder) — Automatycznie sortuj trasy i ślady na podstawie ustawionych kryteriów.

- [Importuj](#import) — Prześlij pliki GPX lub inne pliki śladów z urządzenia do OsmAnd do użytku offline.

- **Dodaj nowy folder** — Aby uporządkować trasy i ślady w logiczne kategorie, umieść je w różnych folderach. Pomaga to uporządkować informacje nawigacyjne.


### Usuń folder {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Moje miejsca ze śladami w Androidzie](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Menu kontekstowe śladu w iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Możesz usunąć folder wraz ze wszystkimi zawartymi w nim śladami. Aby to zrobić:

- Dotknij *menu z trzema kropkami* w polu folderu, aby usunąć.
- Na dole menu znajdź opcję **Usuń folder**.
- ***UWAGA: Ta akcja jest nieodwracalna.***


## Importuj / Eksportuj ślad {#import--export-track}

### Importuj {#import}

Narzędzie importu pozwala dodawać ślady z zewnętrznych plików do nawigacji i analizy offline. Metody importowania śladów:

1. **Bezpośredni import pliku:**

    - Dotknij pliku GPX, KML lub KMZ z aplikacji do przesyłania wiadomości, poczty e-mail, Google Drive lub menedżerów plików.
    - Wybierz Otwórz w OsmAnd po wyświetleniu monitu.
    - Zaimportowany ślad jest zapisywany w folderze **Import** w *Moich miejscach*.
    - Kroki: Dotknij pliku GPX → Otwórz w OsmAnd.

2. **Importowanie za pomocą menu *Moje miejsca*:**

    - Otwórz *menu Moje miejsca → Ślady*.
    - Wybierz plik GPX do zaimportowania.

    *Dodatkowe opcje:*

    - **Pliki GPX z pojedynczym śladem** - importuj cały ślad bezpośrednio.
    - **Pliki GPX z wieloma śladami** - wybierz importowanie pojedynczego pliku GPX lub wybierz konkretne ślady.

***UWAGA:*** *Ślady ręcznie dodane do folderu OsmAnd na Twoim urządzeniu są automatycznie importowane bez ponownego uruchamiania aplikacji.*  


### Eksportuj {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![import wielu śladów](@site/static/img/personal/tracks/import_multitrack.png) ![import wielu śladów](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Eksportuj | Importuj |
|:------------|:---------------|
| ![import wielu śladów](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Eksportuj </summary> ![import wielu śladów](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![import wielu śladów](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Eksportuj </summary> ![import wielu śladów](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

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

Istnieje kilka sposobów eksportowania jednego lub więcej plików śladów do dowolnego komunikatora, poczty e-mail, menedżera plików lub aplikacji.  

1. Przez [*Menu kontekstowe śladu → Udostępnij*](../../map/tracks/track-context-menu.md#options).

2. Przez *Menu Moje miejsca → Ślady → Menu folderu / śladu*:

    - Aby [**wyeksportować pojedynczy ślad**](#track-menu), wybierz menu śladu.
    - Aby [**wyeksportować wiele śladów**](#track-folder), wybierz menu wymaganego folderu.

3. Przez [Lokalny plik kopii zapasowej](../../personal/import-export.md#export-to-file). Eksportowanie śladów GPX jako plików `.osf`.


## Powiązane artykuły {#related-articles}

- [Pokaż ślad na mapie](../../map/tracks/index.md)
- [Analizuj na mapie](../../map/tracks/index.md#analyze-track-on-map)
- [Menu kontekstowe śladu](../../map/tracks/track-context-menu.md)
- [Nawigacja po śladzie](../../navigation/setup/gpx-navigation.md)
- [Nagrywanie podróży](../../plugins/trip-recording.md)

> *Ostatnia aktualizacja: kwiecień 2025*