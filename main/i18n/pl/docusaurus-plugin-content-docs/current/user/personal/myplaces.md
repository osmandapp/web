---
source-hash: 566a34a786c324ed799dd4550956785a23a8faec4a926d7a4a840c0d7ef44518
sidebar_position: 6
title: Moje Miejsca
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>

## Przegląd {#overview}

**Moje Miejsca** to centralne centrum w aplikacji OsmAnd do zarządzania i dostosowywania wszystkich danych osobistych. Możesz użyć tej sekcji do organizowania [Ulubionych punktów](#favorites) oznaczonych jako ważne lub często odwiedzane. Zakładka [Ślady](#tracks) umożliwia przeglądanie, importowanie, nagrywanie i tworzenie plików GPX, aby pomóc Ci w prowadzeniu szczegółowej historii tras i podróży. Możesz także zarządzać swoimi [Edycjami OpenStreetMap](#openstreetmap-edits), co ułatwia przyczynianie się do ulepszania i aktualizowania map. Wtyczka i widżety [Notatki audio/wideo](#audiovideo-notes) umożliwiają użytkownikom Androida tworzenie i zapisywanie notatek multimedialnych związanych z określonymi lokalizacjami, dodając kontekst do ich podróży.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu"/> → Moje Miejsca*

![My Places android](@site/static/img/personal/my_places_android.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu"/> → Moje Miejsca*

![My Places ios](@site/static/img/personal/my_places_ios.png) ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Import i eksport danych***](../personal/import-export.md):

    Wszystkie dane przechowywane w menu *Moje Miejsca* mogą być przenoszone za pomocą specjalnego formatu `.osf` poprzez aplikacje na Twoim urządzeniu. Proces ten upraszcza zapisywanie i przesyłanie danych między urządzeniami oraz umożliwia udostępnianie ich innym użytkownikom OsmAnd.

    **Przejdź do** sekcji *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* i wybierz, czy chcesz wyeksportować, czy zaimportować dane. Jeśli wybierzesz *eksport*, będziesz musiał rozwinąć *grupę Moje Miejsca* i zaznaczyć wymagane dane.

- [***Mapy i zasoby***](../personal/maps-resources.md):

    Element *Mapy i zasoby* w *Menu głównym* aplikacji OsmAnd zapewnia dostęp do zarządzania danymi z sekcji *Moje Miejsca*. Zakładka [*Lokalne*](../personal/maps-resources.md#local) pokazuje, ile miejsca zajmują wszystkie istniejące dane OsmAnd na Twoim urządzeniu, a w szczególności sekcja *Moje Miejsca*. Możesz jej użyć, aby uzyskać szczegółowe informacje o swoich danych i dostęp do zarządzania nimi. Sekcja może zawierać tylko elementy, dla których dane zostały pobrane.

    **Przejdź do** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Sprawdź i zarządzaj swoimi danymi.


## Ulubione {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Ulubione** umożliwiają dodawanie zakładek do ważnych lub często odwiedzanych miejsc. Te ulubione punkty są zorganizowane w folderach i mogą być dostosowywane za pomocą różnych kolorów, kształtów i ikon. Możesz szybko nawigować do dowolnego ulubionego miejsca za pośrednictwem menu **Moje Miejsca** bez konieczności wielokrotnego wyszukiwania.


1. ***Przyciski akcji***. *Przyciski akcji* na dole ekranu Moje Miejsca umożliwiają zarządzanie listą folderów z ulubionymi:

    - **Importuj** (przycisk *Dodaj*) — Umożliwia importowanie plików *favorite.gpx* z pamięci urządzenia.

    - **Eksportuj** — Zapisz swoje ulubione punkty jako plik *favorites.gpx* do użytku zewnętrznego lub kopii zapasowej.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Tylko Android*) — Możesz dodać dowolny ulubiony punkt lub całą listę ulubionych punktów w folderze do [listy znaczników mapy](../personal/markers.md).

    - **Usuń** (*na iOS, ta opcja znajduje się w menu Edytuj*) — Usuwa ulubione punkty pojedynczo lub wybrane foldery ulubionych i wszystkie punkty w nich zawarte.

2. ***Menu trzech kropek*** (*Android*) i ***długie naciśnięcie*** (*iOS*). Użyj *menu trzech kropek* obok każdego folderu lub *długo naciśnij* folder, aby zarządzać grupami ulubionych:

    <Tabs groupId="operating-systems" queryString="current-os">

    <TabItem value="android" label="Android">

    ![Three-dot menu](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Favorites menu iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — Użyj tej opcji, aby zmienić nazwę wybranego folderu.

    - **<Translate android="true" ids="change_default_appearance"/>** — Dostosuj sposób wyświetlania ulubionych punktów w folderze na mapie, zmieniając ich ikony, kolory lub etykiety.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** lub **Ukryj na mapie** — Przełącz tę opcję, aby wyświetlić lub ukryć ulubione punkty z folderu na mapie.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** lub **Usuń ze znaczników mapy** (*Tylko Android*) — Dodaj wszystkie ulubione punkty z folderu do *listy znaczników mapy* lub usuń je w razie potrzeby dla łatwego odniesienia.

    - **<Translate android="true" ids="shared_string_share"/>** — Udostępnij ulubione punkty w folderze, eksportując je jako plik *Favorites.gpx*, co ułatwia przesyłanie lub tworzenie kopii zapasowych danych.

    - **<Translate android="true" ids="shared_string_delete"/>** — Trwale usuń wybrany folder ulubionych i wszystkie punkty w nim zawarte.

Więcej szczegółowych instrukcji znajdziesz w artykule [Ulubione](../personal/favorites.md).


## Ślady {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Ślady** oferują potężne narzędzia do nagrywania, tworzenia i zarządzania trasami w OsmAnd. Mogą być używane do [nawigacji](../navigation/setup/gpx-navigation.md), [nagrywania podróży](../plugins/trip-recording.md) lub [integracji](../personal/tracks/manage-tracks.md#import) zewnętrznych plików GPX.

- **Zakładka Ślady** — Wszystkie ślady kiedykolwiek nagrane, utworzone lub zaimportowane są automatycznie wyświetlane w folderze *Moje Miejsca* w zakładce *Ślady*. Są one zorganizowane według folderów lub wyświetlane na liście poniżej nich.

- **Utwórz ślad** — Rozpocznij nagrywanie za pomocą **Zakładki Ślady** lub [wtyczki Nagrywanie podróży](../plugins/trip-recording.md).

- **Wyświetl i edytuj** — Uzyskaj dostęp do listy śladów poprzez *Moje Miejsca* i zarządzaj nimi za pomocą *menu trzech kropek* dla [folderów](../personal/tracks/manage-tracks.md#track-folder) lub menu [pojedynczego śladu](../personal/tracks/manage-tracks.md#single-track-menu).

- **Zarządzaj** — Użyj narzędzi [Filtruj](../personal/tracks/smart-folder.md#filter) i [Inteligentny folder](../personal/tracks/smart-folder.md#smart-folder), aby organizować ślady na podstawie określonych parametrów.

- **Wygląd i analiza** — [Dostosuj](../map/tracks/appearance.md) styl wizualny śladów i [analizuj](../map/tracks/index.md#analyze-track-on-map) je za pomocą narzędzia OsmAnd [Planuj trasę](../plan-route/create-route.md).

Wyczerpujące wskazówki znajdziesz w artykule [Zarządzaj śladami](../personal/tracks/manage-tracks.md).


## Edycje OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

Funkcja **Edycje OpenStreetMap** w OsmAnd umożliwia wkład w globalną społeczność mapowania poprzez dodawanie, modyfikowanie lub komentowanie danych mapowych.

1. ***Przyciski akcji***. Możesz użyć *przycisków akcji* na ekranie Moje Miejsca, aby zarządzać listą notatek:

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Prześlij pliki do OSM** — Wyślij swoje notatki i dane do OpenStreetMap, aby przyczynić się do społeczności.

    - **Eksportuj** (*Tylko Android*) — Zapisz swoje notatki i POI jako pliki do użytku zewnętrznego lub kopii zapasowej, z opcjami eksportu jako notatki OSM, POI lub wszystkie dane razem.

    - **Usuń** — Trwale usuń wybrane elementy z listy.


2. ***Menu trzech kropek***. Możesz zarządzać konkretnymi POI lub notatkami za pomocą *menu trzech kropek* obok każdej notatki:

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Prześlij edycję do OSM** — Prześlij swoje zmiany lub edycje do OpenStreetMap, aby inni mogli je zobaczyć.

    - **Pokaż na mapie** — Wyświetl konkretną lokalizację POI lub notatki na mapie.

    - **Modyfikuj zmianę/notatkę OSM** — Dokonaj dalszych edycji POI lub notatki, które zostały już dodane do OpenStreetMap.

    - **Usuń** — Usuń wybrany POI lub notatkę z listy.

Szczegółowe instrukcje znajdziesz w [wtyczce Edycja OSM](../plugins/osm-editing.md).


## Notatki audio/wideo {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)

**Wtyczka Notatki audio/wideo** umożliwia tworzenie notatek multimedialnych powiązanych z konkretnymi lokalizacjami na mapie. Notatki te są przechowywane w **Moich Miejscach** w zakładce **Notatki A/V**.

1. ***Przyciski akcji***. Możesz użyć *przycisków akcji* na dole ekranu Moje Miejsca, aby zarządzać listą notatek:

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Otwiera wybór metod sortowania, *Według typu* lub *Według daty*, i po wybraniu sortuje listę odpowiednio.

    - **<Translate android="true" ids="shared_string_share"/>** — Wyświetla listę kontrolną wszystkich notatek, w tym tych dodanych do plików GPX jako punkty trasy. Najpierw zaznacza się wymagane notatki, następnie ikona *Udostępnij* w prawym górnym rogu ekranu sugeruje dostępne opcje udostępniania, a na koniec te notatki stają się dostępne zgodnie z wybraną opcją.

    - **Udostępnij z punktami trasy GPX** — Możesz udostępnić notatki wybrane jako punkty trasy w menu *Moje Miejsca*, dodając do nich [dane GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) za pomocą przycisku **Udostępnij** na dole ekranu zakładki *Notatki A/V*.

    - **<Translate android="true" ids="shared_string_delete"/>** — Wyświetla listę kontrolną tylko notatek audio, zdjęć i filmów. Najpierw zaznacz niepotrzebne notatki, następnie dotknij ikony *Usuń* w prawym górnym rogu ekranu, po potwierdzeniu wybrane notatki zostaną trwale usunięte.


2. ***Menu trzech kropek***. Możesz zarządzać konkretnymi notatkami audio, wideo lub zdjęciami za pomocą *menu trzech kropek* obok każdej notatki:

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Wyświetla lub odtwarza wybraną notatkę audio, wideo lub zdjęcie bezpośrednio.

    - **<Translate android="true" ids="shared_string_share"/>** — Udostępnia notatkę innym za pośrednictwem różnych aplikacji lub platform.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Wyświetla powiązaną lokalizację i [menu kontekstowe](../plugins/audio-video-notes#actions-in-map-context-menu) notatki na mapie.

    - **<Translate android="true" ids="shared_string_rename"/>** — Zmień nazwę notatki na bardziej opisową lub istotną.

    - **<Translate android="true" ids="shared_string_delete"/>** — Wybrane notatki są trwale usuwane z Twojej kolekcji.

Więcej informacji znajdziesz na stronie [wtyczki Notatki audio/wideo](../plugins/audio-video-notes.md).


<!--
### Share with GPX Waypoints {#share-with-gpx-waypoints}

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

### Manage Single Note {#manage-single-note}

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

You can manage specific audio, video, or photo notes using the **three-dot menu** next to each note:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Views or listens to the selected audio, video, or photo note directly.
- **<Translate android="true" ids="shared_string_share"/>**. Shares the note with others through various apps or platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note to something more descriptive or relevant.
- **<Translate android="true" ids="shared_string_delete"/>**. Selected notes are permanently deleted from your collection.
-->

## Powiązane artykuły {#related-articles}

- [Zarządzaj śladami](../personal/tracks/manage-tracks.md#import--export-track)
- [Historia wyszukiwania](../search/search-history.md#export-and-share)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)

> *Ostatnia aktualizacja: marzec 2025*