---
source-hash: 27722eb18550cf9d93cb885bccf878c6d53e33daba1748a270790fa1cca1066e
sidebar_position: 3
title: Notatki audio/wideo
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

<InfoAndroidOnly />

## Przegląd {#overview}

Twoje nagrania audio i wideo mogą być przydatne w przyszłości, np. jako wspomnienia z miejsc, w których byłeś. Są one dostępne w menu [Moje miejsca](../personal/myplaces.md) i są widoczne, gdy włączona jest wtyczka Notatki audio/wideo.

Wtyczka Notatki audio/wideo rozszerza funkcjonalność OsmAnd, umożliwiając tworzenie własnych notatek w różnych formatach, takich jak zdjęcia, wideo lub audio, i kojarzenie ich z ich położeniem geograficznym lub bieżącą lokalizacją. Nagrania można wykonywać tylko wtedy, gdy wtyczka jest włączona, za pomocą [widżetu Notatki audio/wideo](../widgets/info-widgets.md#-audio-video-notes-widget) i/lub [menu kontekstowego mapy](../map/map-context-menu.md#-audiovideo-note). Otrzymane dane są automatycznie zapisywane w [Moich miejscach](../personal/myplaces.md), skąd można nimi wygodnie zarządzać i udostępniać je.

Wszystkie utworzone notatki audio i wideo tworzą warstwę Nagrania. Po włączeniu na mapie zmienia ona widok nagranych danych i pojawia się więcej ustawień do zarządzania nagraniami. W warstwie Nagrania notatki audio i wideo są umieszczane jako POI na mapie, tworząc w ten sposób narrację użytkownika widoczną tylko dla właściciela urządzenia.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wprowadzenie do notatek audio-wideo](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>

## Wymagane parametry konfiguracji {#required-setup-parameters}

Notatki audio/wideo są dostarczane z wtyczką Notatki audio/wideo i wymagają następującej konfiguracji:

1. Włącz [wtyczkę Notatki audio/wideo](../plugins/index.md#enable--disable) w sekcji Wtyczki w *Menu głównym*.
2. Dodaj [widżet](../widgets/info-widgets.md#-audio-video-notes-widget) do ekranu mapy, aby zapewnić najwygodniejsze użytkowanie.
3. W razie potrzeby dostosuj [ustawienia nagrywania](#plugin-settings) dla każdego profilu.

## Ustawienia wtyczki {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Ustawienia wtyczki audio-wideo Zdjęcie Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Dla każdego profilu można skonfigurować *opcje nagrywania audio i wideo*.

| Parametr | Opis |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | Możesz wybrać, czy do robienia <Translate android="true" ids="photo_notes"/> używać aplikacji systemowej, czy aparatu OsmAnd. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Ustawia rozmiar zdjęć do wykonania. Możliwości aparatu urządzenia określają liczbę dostępnych opcji. Jeśli nie wybrano żadnej opcji, aplikacja używa rozmiaru z ustawień systemowych aparatu urządzenia. |
| **<Translate android="true" ids="av_camera_focus"/>** | Określa metodę ustawiania ostrości aparatu. Liczba dostępnych opcji jest określana przez możliwości aparatu urządzenia. Zasadniczo istnieją trzy następujące opcje: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; i *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Autofokus** jest najpopularniejszy i ustawia tryb automatyczny dla aparatu; **ciągły** sprawia, że aparat wykrywa ruchy i odpowiednio ponownie ustawia ostrość; a opcja **nieskończoność** sprawia, że obiektyw ustawia ostrość na odległość i w ten sposób utrzymuje obiekty w ostrości niezależnie od odległości. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Jeśli włączone, dźwięk jest odtwarzany, gdy aparat robi zdjęcie. Należy pamiętać, że zgodnie z wymogami prawa o ochronie prywatności, **w niektórych krajach urządzenia nie będą miały przełącznika wyciszania migawki aparatu**. Jeśli używasz aplikacji systemowej, dźwięk powinien być wyłączony w aplikacji aparatu. |
| **<Translate android="true" ids="av_audio_format"/>** | Zapewnia wybór formatów dla pliku audio. Liczba dostępnych opcji i która z nich jest używana domyślnie, jest określana przez parametry konkretnego urządzenia. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Ta opcja zapewnia wybór opcji bitrate dla tworzonego pliku audio. Dostępne opcje bitrate wahają się od 16 kbps do 128 kbps lub opcja Domyślna. Parametr Domyślny jest określany przez "domyślne" ustawienia mikrofonu urządzenia. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Jeśli włączone, OsmAnd używa aplikacji systemowej do nagrywania wideo w <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Zapewnia wybór opcji, które określają format obrazu wyjściowego. Zakres dostępnych opcji jest określany przez parametry konkretnego urządzenia. Domyślną opcją jest opcja *Najwyższa jakość*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Jeśli włączone, stare nagrania wideo będą automatycznie nadpisywane i zastępowane nowymi nagraniami wideo, jeśli rozmiar pamięci osiągnie limit rozmiaru. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Określa górny limit czasu dla nagranych klipów wideo. Dostępne są opcje z zakresu od 1 minuty do 30 minut. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Określa rozmiar pamięci przeznaczonej na nagrane wideo. Dostępne są opcje z zakresu od 1024 MB do 62 GB. Konkretny zakres opcji i opcja domyślna są określane przez parametry konkretnego urządzenia. Komunikat systemowy przypomni o osiągnięciu ustalonego limitu rozmiaru pamięci. |
| **<Translate android="true" ids="notes"/>** | Ta opcja przekierowuje do [Notatek audio/wideo w Moich miejscach](../personal/myplaces.md) - centralnego magazynu wszystkich notatek audio/wideo kiedykolwiek wykonanych w aplikacji. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Możesz ustawić wartości domyślne dla wszystkich ustawień notatek A/V. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Otwiera okno dialogowe, aby wybrać profil, z którego ma zostać skopiowana konfiguracja nagrywania notatek audio/wideo, i zastosować ją dla bieżącego profilu. |

## Zarządzanie pojedynczą notatką {#manage-a-single-note}

Możesz zarządzać swoimi informacjami, myślami, pomysłami itp. związanymi z miejscem geograficznym w następujący sposób:

- Utwórz notatkę.
- Wyświetl wszystkie notatki jako listę w [Moich miejscach](../personal/myplaces.md).
- Pokaż konkretną notatkę na mapie.
- Zmień nazwę notatki w Moich miejscach.
- Pokaż wszystkie notatki [na mapie](../map/configure-map-menu.md#map-data-layers).
- Odtwórz notatkę.
- Utwórz punkty trasy w [śladzie](../plugins/trip-recording.md#gpx-file-details).
- Eksportuj do [JOSM](https://josm.openstreetmap.de/).

### Tworzenie {#create}

Możesz utworzyć notatkę zdjęciową, wideo i audio w jeden z następujących sposobów:

- Za pomocą [widżetu](../widgets/info-widgets.md#-audio-video-notes-widget-android). Jeśli notatka ma być powiązana z Twoją bieżącą pozycją geograficzną.
- Za pomocą [menu kontekstowego](../map/map-context-menu.md#-record-av-note-android) punktu na mapie. Jeśli notatka ma być powiązana z wybranym punktem na mapie.

#### 1. Tworzenie i powiązanie z bieżącą pozycją {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet wtyczki audio-wideo Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

Widżet <Translate android="true" ids="map_widget_av_notes"/> służy do tworzenia notatki powiązanej z Twoją bieżącą pozycją, a tym samym do uniknięcia wyszukiwania odpowiedniego punktu dla notatki na mapie. Wystarczy dotknąć widżetu i utworzyć notatkę.

Funkcje udostępniane przez widżet <Translate android="true" ids="map_widget_av_notes"/> zależą od tego, jak jest on skonfigurowany w menu [Konfiguruj ekran](../widgets/info-widgets.md#-audio-video-notes-widget-android). Widżet albo natychmiast otwiera aparat, aby utworzyć notatkę, zgodnie z ustalonymi ustawieniami, albo najpierw pyta, w jakim formacie utworzyć notatkę, a następnie otwiera odpowiednie okno dialogowe rejestratora.

#### 2. Tworzenie i powiązanie z wybraną geolokalizacją {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wtyczka audio-wideo Menu kontekstowe zrób notatkę](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Aby utworzyć notatkę powiązaną z wybranym punktem na mapie, użyj [menu kontekstowego](../map/map-context-menu.md#-record-av-note-android) punktu:

1. Długo dotknij punktu na mapie, a otworzy się [menu kontekstowe](../map/map-context-menu.md).
2. Dotknij **Akcje** i wybierz jedną z dostępnych opcji z listy:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - aby utworzyć notatkę audio i powiązać ją z wybranym punktem na mapie;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - aby utworzyć notatkę wideo i powiązać ją z wybranym punktem na mapie;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - aby utworzyć notatkę zdjęciową i powiązać ją z wybranym punktem na mapie.

3. W zależności od wybranego formatu notatki otwiera się odpowiednie okno dialogowe rejestratora.

#### Okno dialogowe rejestratora {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rejestrator notatek wideo](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Dla *notatek audio i wideo* wyświetlany jest odpowiednio rejestrator audio lub wideo. Możesz:

- Zatrzymać nagrywanie ikoną *Stop*.
- Wyświetlić czas trwania nagrania.
- Pokazać lub ukryć ekran wideo.

Możliwe jest zatrzymanie nagrywania dotknięciem widżetu <Translate android="true" ids="map_widget_av_notes"/>, niezależnie od tego, czy nagrywanie zostało rozpoczęte z menu kontekstowego, czy z widżetu. Dla *notatki zdjęciowej* pojawia się funkcja aparatu, i możesz zrobić zdjęcie, wyświetlić wynik, zaakceptować i zapisać go, lub zrobić nowe zdjęcie.

:::info Uwaga
Automatycznie wszystkie nagrania zdjęć, audio i wideo są zapisywane w: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> zakładka.
:::

### Wyświetl w Moich miejscach {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Menu Moje miejsca wtyczki audio-wideo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Moje miejsca](../personal/myplaces.md) to centralne repozytorium wszystkich Twoich notatek. Umożliwia ono przeglądanie wszystkich notatek w posortowanej liście, wyświetlanie konkretnej notatki na mapie oraz zarządzanie całą listą notatek.

### Pokaż na mapie {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu Moje miejsca wtyczki audio-wideo Kontekst](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Aby wyświetlić konkretną notatkę na mapie, użyj listy notatek w Moich miejscach, znajdź potrzebną i dotknij jej. W rezultacie pojawi się mapa, podświetli lokalizację notatki i otworzy [menu kontekstowe](../plugins/audio-video-notes.md#actions-in-map-context-menu). Możliwa jest praca z notatką poprzez wybieranie opcji w menu kontekstowym.

### Odtwórz {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wtyczka audio-wideo Menu kontekstowe](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![Wtyczka audio-wideo Akcje menu Moje miejsca](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Aby odtworzyć notatkę, użyj odpowiedniej opcji w [menu kontekstowym](../map/map-context-menu#-audiovideo-note-android) otwartym dla notatki:

- na mapie;
- w Moich miejscach.

Sekcja [Szczegóły](../map/map-context-menu#-audiovideo-note-android) zawiera więcej danych o notatkach, takich jak szerokość i długość geograficzna, data i godzina notatki oraz zdjęcia.

### Zmień nazwę, usuń, udostępnij {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wtyczka audio-wideo Akcje menu Moje miejsca](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Aby zarządzać notatką w Moich miejscach, dotknij pionowych trzech kropek notatki na liście, a pojawią się dostępne opcje, takie jak:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Otwórz i wyświetl wybrane wideo lub odtwórz notatkę audio.
- **<Translate android="true" ids="shared_string_share"/>**. Łatwo udostępniaj wybraną notatkę innym za pośrednictwem różnych platform.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Pokazuje dokładną lokalizację i [menu kontekstowe](../plugins/audio-video-notes#actions-in-map-context-menu) notatki na mapie.
- **<Translate android="true" ids="shared_string_rename"/>**. Zmień nazwę notatki w celu łatwiejszej identyfikacji.
- **<Translate android="true" ids="shared_string_delete"/>**. Trwale usuwa notatki z aplikacji.

## Widżet nagrywania {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

[Widżet Notatki audio/wideo](../widgets/info-widgets.md#audiovideo-notes-widget) tworzy notatki, zdjęcia, pliki audio i wideo oraz łączy je z Twoją bieżącą pozycją. Widżet ma kilka opcji, które można ustawić jako domyślną akcję wykonywaną przez widżet po dotknięciu ekranu.

Dodanie widżetu do ekranu jest konieczne, jeśli wolisz uniknąć wyszukiwania geolokalizacji na mapie i łączenia notatek z Twoją bieżącą domyślną lokalizacją. Aby dodać lub dostosować widżet, wykonaj poniższe kroki:

1. Przejdź do:
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Wybierz **<Translate android="true" ids="map_widget_left"/>** lub **<Translate android="true" ids="map_widget_right"/>**.

3. Dotknij **<Translate android="true" ids="map_widget_av_notes"/>**, a otworzy się menu kontekstowe widżetu.

4. Wybierz opcję, którą wolisz używać domyślnie, dotykając widżetu:

    - **<Translate android="true" ids="av_def_action_choose"/>** - otwórz wybór opcji.

    - **<Translate android="true" ids="av_def_action_audio"/>** - rozpocznij nagrywanie wiadomości audio.

    - **<Translate android="true" ids="av_def_action_video"/>** - rozpocznij nagrywanie wideo.

    - **<Translate android="true" ids="av_def_action_picture"/>** - rozpocznij robienie zdjęć.

    ![Widżet](@site/static/img/plugins/audio-video-notes/widget.png)

## Zarządzanie wieloma notatkami {#manage-multiple-notes}

### Zarządzanie w Moich miejscach {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wtyczka audio-wideo Menu Moje miejsca Trzy akcje](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Opcje na dolnym pasku mogą być używane do zarządzania listą notatek w menu [Moje miejsca](../personal/myplaces.md#audiovideo-notes).

### Udostępnianie z punktami trasy GPX {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Udostępnij](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Możesz udostępnić wszystkie notatki, w tym [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes), które mają wybrane notatki jako punkty trasy na ekranie [Moje miejsca](../personal/myplaces.md#audiovideo-notes), klikając przycisk udostępniania w dolnym menu. Obok każdej notatki pojawi się pole wyboru, aby wybrać konkretne notatki. Nad notatkami znajdują się dwa pola wyboru: *Notatki A/V według daty*, aby wybrać wszystkie notatki, oraz pole wyboru *Lokalizacje*. Pole wyboru *Lokalizacje* umożliwia dodanie oddzielnego pliku GPX z współrzędnymi i danymi.

Każda notatka zawiera czas jej utworzenia, ilość danych, a jeśli jest to nagranie, czas nagrania i dane lokalizacji, możesz dodać dane GPX.
Obsługiwane formaty plików: audio - **3gp**, wideo - **mp4**, zdjęcie - **jpg**.

### Pokaż wszystko na mapie {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Pokaż notatki na mapie](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Wyświetlane na mapie notatki mogą opowiedzieć Twoją historię, gdzie zauważyłeś znaki, jakie drzwi musiałeś otworzyć, gdzie jest wyjście, optymalną ścieżkę i wiele więcej. Możesz wyświetlać notatki [pojedynczo](#show-on-the-map) lub wszystkie naraz.

Użyj warstwy mapy [Nagrywanie](../map/point-layers-on-map#-audio--video-points-android), aby pokazać lub ukryć wszystkie notatki. Jeśli włączysz ją w menu [Konfiguruj mapę](../map/configure-map-menu), warstwa Nagrywanie pokaże wszystkie notatki na mapie.

![Brak notatek na mapie](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notatki są na mapie](@site/static/img/plugins/audio-video-notes/notes_on_map.png)

## Punkty trasy utworzone z notatek {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Notatki i punkty trasy na mapie](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![Punkty trasy na śladzie](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Punkt trasy jest tworzony, gdy notatka audio, wideo lub zdjęciowa jest dodawana do śladu. Punkty trasy istnieją w ramach śladu. Jeśli ślad jest widoczny, jego punkty trasy są również widoczne. W ten sposób te notatki mogą być widoczne na mapie wszystkie naraz lub tylko na konkretnym widocznym śladzie. W tym drugim przypadku notatki są wyświetlane jako punkty trasy śladu.

:::note
Jeśli ślad zostanie wyeksportowany, punkty trasy nie mogą być przeglądane ani odtwarzane, ponieważ notatki audio/wideo/zdjęciowe są przechowywane tylko na urządzeniu i dostępne tylko dla Ciebie na tym urządzeniu.
:::

### Tworzenie punktów trasy {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ręczne dodawanie punktu trasy do śladu](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Istnieją dwa sposoby tworzenia punktu trasy: automatycznie i ręcznie.

1. **Automatycznie**, punkt trasy jest tworzony, w przypadku gdy robisz notatkę audio/wideo/zdjęciową, gdy trwa [nagrywanie podróży](../plugins/trip-recording), niezależnie od geolokalizacji, jeśli jest ona powiązana z bieżącą pozycją lub dowolnym miejscem, a zatem niezależnie od użytych do tego środków: czy jest to [widżet](../widgets/info-widgets#-audio-video-notes-widget-android), czy [menu kontekstowe](../map/map-context-menu#-audiovideo-note-android).

    Wszystkie punkty trasy dodane automatycznie otrzymują automatycznie przypisaną nazwę. Nazwa jest tworzona zgodnie z formatem określonym poniżej dla pliku audio/wideo/zdjęciowego i ma [krótki link](https://wiki.openstreetmap.org/wiki/Shortlink). Przykład punktów trasy na powyższym rysunku pokazuje punkty trasy utworzone automatycznie i ręcznie, gdzie pierwsze cztery zostały utworzone automatycznie, a ostatni - ręcznie.

2. **Ręcznie**, punkt trasy jest tworzony za pomocą [menu kontekstowego](../map/map-context-menu#-audiovideo-note-android), w następujący sposób:

    - Wybierz wymaganą notatkę audio/wideo/zdjęciową na mapie.
    - Dotknij **Akcje**, a następnie dotknij **Dodaj ślad**.
    - Wybierz ślad, do którego zamierzasz dodać punkt trasy.
    - Otworzy się okno dialogowe *<Translate android="true" ids="quick_action_add_gpx"/>*, które umożliwia ustawienie niektórych właściwości, takich jak nazwa punktu trasy, ikona, kolor i inne. Po zakończeniu dotknij **Zapisz**.

:::info Uwaga
Możesz określić nazwy dla każdego punktu trasy utworzonego ręcznie.
:::

### Wyświetlanie punktów trasy {#view-waypoints}

- Punkt trasy jest dostępny do przeglądania jako punkt trasy na mapie i na liście [punktów trasy konkretnego śladu](../map/tracks/track-context-menu.md#points--waypoints). Usunięcie punktu trasy nie usuwa odpowiedniej notatki audio/wideo/zdjęciowej.

- Notatka audio, wideo lub zdjęciowa jest dostępna do przeglądania na mapie i na liście notatek A/V w [Moich miejscach](../plugins/audio-video-notes#view-in-my-places). Usunięcie notatki audio, wideo lub zdjęciowej nie usuwa odpowiedniego punktu trasy.

- Na mapie punkt trasy i notatka audio, wideo lub zdjęciowa mogą być widoczne lub niewidoczne na mapie. Jest to określane przez to, która warstwa jest aktualnie włączona dla profilu.

- Gdy ani warstwa Ślady, ani warstwa Nagrywanie nie są włączone, zarówno punkty trasy, jak i notatki mogą być wyświetlane poprzez dotknięcie ich w Moich miejscach. W tym przypadku mapa pokazuje lokalizacje dotkniętej notatki lub odpowiednio lokalizacje wszystkich punktów trasy dotkniętego śladu.

| Widoczne | Warstwa włączona |
| --- | --- |
| Tylko punkty trasy | Warstwa Ślady |
| Punkty trasy i notatki | Warstwa Ślady i Nagrywanie |
| Tylko notatki | Warstwa Nagrywanie |
| Brak | Ani warstwa Ślady, ani warstwa Nagrywanie. |

### Plik GPX z punktami trasy {#gpx-file-with-waypoints}

![Punkt trasy w pliku GPX](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Jeśli przeglądasz plik GPX śladu dodanego z punktem trasy z notatki audio/wideo/zdjęciowej, punkt trasy będzie wyglądał jak w poniższym przykładzie, zawierając współrzędne, znacznik czasu, nazwę odpowiedniej notatki i krótki link.

## Różne {#miscellaneous}

### Szczegóły nazwy pliku {#file-name-details}

Wtyczka <Translate android="true" ids="audionotes_plugin_name"/> generuje pliki audio/wideo/zdjęciowe w następującym formacie:

    `{SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}`

gdzie `SHORTLINK_LOCATION` określa szerokość i długość geograficzną lokalizacji, z którą plik jest powiązany. `SHORTLINK_LOCATION` jest kodowany zgodnie ze specyfikacją [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).

### Eksport do JOSM {#export-to-josm}

![Notatki audio-wideo w Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Aby później wszystko przeglądać, możesz wyeksportować ślad wraz ze wszystkimi plikami multimedialnymi i przeglądać je w [edytorze JOSM](https://josm.openstreetmap.de/). Należy pamiętać, że pliki multimedialne muszą być umieszczone w odpowiednim folderze. Możesz dowiedzieć się, który to folder, klikając wideo. Pojawi się powiadomienie, że plik jest niedostępny, umieść poprawny plik w określonym folderze.

## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style map)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: maj 2023*