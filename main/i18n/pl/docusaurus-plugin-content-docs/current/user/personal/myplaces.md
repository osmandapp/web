---
source-hash: 822817a60d43552808de6f3ba701ff373fc32cdd07367b0d49b825e58a1bdb4e
sidebar_position: 6
title:  Moje miejsca
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

<!--
<InfoIncompleteArticle/>
-->

## Przegląd {#overview}

**Moje miejsca** to centralne miejsce w aplikacji OsmAnd do zarządzania i dostosowywania wszystkich danych osobowych. Możesz użyć tej sekcji do organizowania [punktów ulubionych](#favorites) oznaczonych jako ważne lub często odwiedzane. Zakładka [Trasy](#tracks) pozwala na przeglądanie, importowanie, nagrywanie i tworzenie plików GPX, co pomaga w prowadzeniu szczegółowej historii tras i podróży. Możesz również zarządzać swoimi [edycjami OpenStreetMap](#openstreetmap-edits), co ułatwia wnoszenie wkładu w ulepszanie i aktualizowanie map. Wtyczka [Notatki audio/wideo](#audiovideo-notes) i widżety pozwalają użytkownikom Androida na tworzenie i zapisywanie notatek multimedialnych związanych z konkretnymi lokalizacjami, dodając kontekst do ich podróży.

## Menu Moje miejsca {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu"/> → Moje miejsca*  

![Moje miejsca Android](@site/static/img/personal/my_places_android_new.png) ![Menu Moje miejsca Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu"/> → Moje miejsca*  

![Moje miejsca iOS](@site/static/img/personal/my_places_ios_new.png)  ![Menu Moje miejsca iOS](@site/static/img/personal/my_places_menu_ios_new.png)

</TabItem>

</Tabs>

Moje miejsca są zorganizowane według kategorii. Wybierz zakładkę, aby zarządzać odpowiednimi danymi.

**Uwaga:** Wszystkie dane przechowywane w menu *Moje miejsca* można przenosić za pomocą specjalnego formatu `.osf` za pośrednictwem aplikacji na urządzeniu. Proces ten upraszcza zapisywanie i przesyłanie danych między urządzeniami oraz umożliwia udostępnianie ich innym użytkownikom OsmAnd. 

### Ulubione {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu Ulubione Android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Ulubione iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Ulubione** pozwalają na oznaczanie ważnych lub często odwiedzanych lokalizacji. Te ulubione punkty są zorganizowane w folderach i można je dostosować za pomocą różnych kolorów, kształtów i ikon. Możesz szybko nawigować do dowolnego ulubionego miejsca poprzez menu **Moje miejsca** bez konieczności wielokrotnego wyszukiwania.

Aby uzyskać pełne instrukcje, zapoznaj się z artykułem [Ulubione](../personal/favorites.md).

<!--
1. ***Przyciski akcji***. *Przyciski akcji* na dole ekranu Moje miejsca pozwalają zarządzać listą folderów z ulubionymi:  

    - **Importuj** (przycisk *Dodaj*) — Pozwala na importowanie plików *favorite.gpx* z pamięci urządzenia.

    - **Eksportuj** — Zapisz swoje ulubione punkty jako plik *favorites.gpx* do użytku zewnętrznego lub jako kopię zapasową.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Tylko Android*) — Możesz dodać dowolny ulubiony punkt lub całą listę ulubionych punktów z folderu do [listy znaczników na mapie](../personal/markers.md).

    - **Usuń** (*w systemie iOS opcja ta znajduje się w menu Edycja*) — Usuwa pojedynczo ulubione punkty lub wybrane foldery ulubionych i wszystkie zawarte w nich punkty.

2. ***Menu z trzema kropkami*** (*Android*) i ***długie dotknięcie*** (*iOS*). Użyj menu z *trzema kropkami* obok każdego folderu lub *długo dotknij* folderu, aby zarządzać grupami ulubionych. Zobacz [Akcje grupy ulubionych](../personal/favorites.md#favorite-group-actions), aby uzyskać szczegóły.  
-->

### Trasy {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *zakładka <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![Moje miejsca z trasami w Androidzie](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *zakładka <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Moje miejsca z trasami w iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Trasy** oferują potężne narzędzia do nagrywania, tworzenia i zarządzania trasami w OsmAnd. Mogą być używane do [nawigacji](../navigation/setup/gpx-navigation.md), [nagrywania podróży](../plugins/trip-recording.md) lub [integrowania](../personal/tracks/manage-tracks.md#import) zewnętrznych plików GPX.

Aby uzyskać kompleksowe wskazówki, zobacz artykuł [Zarządzanie trasami](../personal/tracks/manage-tracks.md).

<!--
- **Zakładka Trasy** — Wszystkie kiedykolwiek nagrane, utworzone lub zaimportowane trasy są automatycznie wyświetlane w folderze *Moje miejsca* w zakładce *Trasy*. Są one uporządkowane według folderów lub wyświetlane na liście pod nimi.

- **Utwórz trasę** — Rozpocznij nagrywanie za pomocą **zakładki Trasy** lub [wtyczki Nagrywanie podróży](../plugins/trip-recording.md).

- **Wyświetl i edytuj** — Uzyskaj dostęp do listy tras poprzez *Moje miejsca* i zarządzaj nimi za pomocą *menu z trzema kropkami* dla [folderów](../personal/tracks/manage-tracks.md#track-folder) lub menu [pojedynczej trasy](../personal/tracks/manage-tracks.md#search).

- **Zarządzaj** — Użyj narzędzi [Filtr](../personal/tracks/smart-folder.md#available-filters) i [Folder inteligentny](../personal/tracks/smart-folder.md#smart-folder), aby uporządkować trasy na podstawie określonych parametrów.

- **Wygląd i analiza** — [Dostosuj](../map/tracks/appearance.md) styl wizualny tras i [analizuj](../map/tracks/index.md#analyze-track-on-map) je za pomocą narzędzia OsmAnd [Planowanie trasy](../plan-route/create-route.md).
-->

### Edycje OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Udostępnij](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Udostępnij](@site/static/img/plugins/osm-editing/my_places_osm_ios.png)

</TabItem>

</Tabs>

Funkcja **Edycje OpenStreetMap** w OsmAnd umożliwia wnoszenie wkładu w globalną społeczność mapującą poprzez dodawanie, modyfikowanie lub komentowanie danych mapy.

Zapoznaj się z [wtyczką Edycja OSM](../plugins/osm-editing.md), aby uzyskać instrukcje krok po kroku.

<!--
1. ***Przyciski akcji***. Możesz użyć *przycisków akcji* na ekranie Moje miejsca, aby zarządzać listą notatek:  

    ![Udostępnij](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Prześlij pliki do OSM** — Wyślij swoje notatki i dane do OpenStreetMap, aby wnieść wkład w społeczność.

    - **Eksportuj** (*Tylko Android*) — Zapisz swoje notatki i POI jako pliki do użytku zewnętrznego lub jako kopię zapasową, z opcjami eksportu jako notatki OSM, POI lub wszystkie dane łącznie.

    - **Usuń** — Trwale usuń wybrane elementy z listy.


2. ***Menu z trzema kropkami***. Możesz zarządzać określonymi POI lub notatkami za pomocą *menu z trzema kropkami* obok każdej notatki:  

    ![Menu z trzema kropkami](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Prześlij edycję do OSM** — Prześlij swoje zmiany lub edycje do OpenStreetMap, aby inni mogli je zobaczyć.

    - **Pokaż na mapie** — Wyświetl konkretną lokalizację POI lub notatki na mapie.

    - **Modyfikuj zmianę/notatkę OSM** — Wprowadź dalsze zmiany w POI lub notatce, które zostały już dodane do OpenStreetMap.

    - **Usuń** — Usuń wybrane POI lub notatkę z listy.
    -->

### Notatki audio/wideo {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Menu Moje miejsca wtyczki audio-wideo Trzy akcje](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

Wtyczka **Notatki audio/wideo** umożliwia tworzenie notatek multimedialnych powiązanych z określonymi lokalizacjami na mapie. Notatki te są przechowywane w **Moich miejscach** w zakładce **Notatki A/V**.

Aby uzyskać więcej informacji, odwiedź stronę [wtyczki Notatki audio/wideo](../plugins/audio-video-notes.md).

<!--
1. ***Przyciski akcji***. Możesz użyć *przycisków akcji* na dole ekranu Moje miejsca, aby zarządzać listą notatek:  

    ![Udostępnij](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Otwiera wybór metod sortowania, *Według typu* lub *Według daty*, a po wybraniu sortuje listę odpowiednio.

    - **<Translate android="true" ids="shared_string_share"/>** — Wyświetla listę kontrolną wszystkich notatek, w tym tych dodanych do plików GPX jako punkty trasy. Najpierw zaznaczane są wymagane notatki, następnie ikona *Udostępnij* w prawym górnym rogu ekranu sugeruje dostępne opcje udostępniania, a na koniec notatki te stają się dostępne zgodnie z wybraną opcją.

    - **Udostępnij z punktami trasy GPX** — Możesz udostępnić notatki wybrane jako punkty trasy w menu *Moje miejsca*, dodając do nich [dane GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) za pomocą przycisku **Udostępnij** na dole ekranu zakładki *Notatki A/V*.

    - **<Translate android="true" ids="shared_string_delete"/>** — Wyświetla listę kontrolną tylko notatek audio, foto i wideo. Najpierw zaznacz niepotrzebne notatki, następnie dotknij ikony *Usuń* w prawym górnym rogu ekranu, po potwierdzeniu wybrane notatki zostaną trwale usunięte.


2. ***Menu z trzema kropkami***. Możesz zarządzać określonymi notatkami audio, wideo lub zdjęciami za pomocą *menu z trzema kropkami* obok każdej notatki:  

    ![Menu z trzema kropkami](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Wyświetla lub odsłuchuje wybraną notatkę audio, wideo lub zdjęcie bezpośrednio.

    - **<Translate android="true" ids="shared_string_share"/>** — Udostępnia notatkę innym za pośrednictwem różnych aplikacji lub platform.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Wyświetla powiązaną lokalizację i [menu kontekstowe](../plugins/audio-video-notes#show-on-the-map) notatki na mapie.

    - **<Translate android="true" ids="shared_string_rename"/>** — Zmień nazwę notatki na bardziej opisową lub trafną.

    - **<Translate android="true" ids="shared_string_delete"/>** — Wybrane notatki są trwale usuwane z Twojej kolekcji.


### Zarządzanie magazynem {#manage-storage}

Pozycja *Mapy i zasoby* w *Menu głównym* aplikacji OsmAnd zapewnia dostęp do zarządzania danymi z sekcji *Moje miejsca*. Zakładka [*Lokalne*](../personal/maps-resources.md#local-menu) pokazuje, ile miejsca zajmują wszystkie istniejące dane OsmAnd na urządzeniu, a w szczególności sekcja *Moje miejsca*. Można jej używać do uzyskiwania szczegółowych informacji o danych i dostępu do zarządzania nimi. Sekcja może zawierać tylko te elementy, dla których dane zostały pobrane.  

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Sprawdź i zarządzaj swoimi danymi. Aby uzyskać szczegółowe informacje, zobacz artykuł [Mapy i zasoby](../personal/maps-resources.md).  


### Udostępnij z punktami trasy GPX {#share-with-gpx-waypoints}

![Udostępnij](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

Możesz udostępnić notatki wybrane jako punkty trasy w menu *Moje miejsca*, dodając do nich [dane GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) za pomocą przycisku **Udostępnij** na dole ekranu zakładki *Notatki A/V*.

### Zarządzaj pojedynczą notatką {#manage-single-note}

![Menu z trzema kropkami](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

Możesz zarządzać określonymi notatkami audio, wideo lub zdjęciami za pomocą *menu z trzema kropkami* obok każdej notatki:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Wyświetla lub odsłuchuje wybraną notatkę audio, wideo lub zdjęcie bezpośrednio.
- **<Translate android="true" ids="shared_string_share"/>**. Udostępnia notatkę innym za pośrednictwem różnych aplikacji lub platform.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Wyświetla powiązaną lokalizację i [Menu kontekstowe](../plugins/audio-video-notes#actions-in-map-context-menu) notatki na mapie.
- **<Translate android="true" ids="shared_string_rename"/>**. Zmień nazwę notatki na coś bardziej opisowego lub trafnego.
- **<Translate android="true" ids="shared_string_delete"/>**. Wybrane notatki są trwale usuwane z kolekcji.
-->

## Powiązane artykuły {#related-articles}

- [Zarządzanie trasami](../personal/tracks/manage-tracks.md#import--export-track)
- [Ulubione](../personal/favorites.md)
- [Edycja OpenStreetMap](../plugins/osm-editing.md)
- [Notatki audio/wideo](../plugins/audio-video-notes.md)
- [Historia wyszukiwania](../search/search-history.md#export-and-share)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)