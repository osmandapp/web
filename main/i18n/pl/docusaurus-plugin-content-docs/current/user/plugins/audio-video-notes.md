---
source-hash: 6ac96adcb213d50bdd207133aa88655fcf7a8fd4cce381a9589ab72aee5ad2ce
sidebar_position: 3
title:  Notatki audio/wideo
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

Twoje nagrania audio i wideo mogą być przydatne w przyszłości, na przykład jako wspomnienia z miejsc, w których byłeś. Są one dostępne w menu [Moje miejsca](../personal/myplaces.md) i są widoczne, gdy włączona jest wtyczka Notatki audio/wideo.

Wtyczka Notatki audio/wideo rozszerza funkcjonalność OsmAnd, umożliwiając tworzenie własnych notatek w różnych formatach, takich jak zdjęcia, wideo lub audio, i powiązanie ich z lokalizacją geograficzną lub bieżącą pozycją. Nagrania można tworzyć tylko wtedy, gdy wtyczka jest włączona, za pomocą [widżetu Notatki audio/wideo](../widgets/info-widgets.md#audiovideo-notes-widget) i/lub [menu kontekstowego mapy](../map/map-context-menu.md#-audiovideo-note). Otrzymane dane są automatycznie zapisywane w [Moich miejscach](../personal/myplaces.md), skąd można nimi wygodnie zarządzać i je udostępniać.  

Wszystkie utworzone notatki audio i wideo tworzą warstwę Nagrania. Po włączeniu na mapie zmienia ona widok zarejestrowanych danych i pojawia się więcej ustawień do zarządzania nagraniami. W warstwie Nagrania notatki audio i wideo są umieszczane na mapie jako POI, tworząc w ten sposób narrację użytkownika widoczną tylko dla właściciela urządzenia.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wprowadzenie do notatek audio/wideo](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Notatki audio/wideo są dostarczane z wtyczką Notatki audio/wideo i wymagają następującej konfiguracji:

1. Włącz [wtyczkę Notatki audio/wideo](../plugins/index.md#enable--disable) w sekcji Wtyczki *Menu głównego*.  
2. Dodaj [widżet](../widgets/info-widgets.md#audiovideo-notes-widget) do ekranu mapy, aby zapewnić najwygodniejsze użytkowanie.
3. Dostosuj [ustawienia nagrywania](#plugin-settings) dla każdego profilu, jeśli jest to konieczne.  


## Ustawienia wtyczki {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*  

![Ustawienia wtyczki audio/wideo Zdjęcie Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Dla każdego profilu można skonfigurować *opcje nagrywania audio i wideo*.  

| Parametr | Opis |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>**  | Możesz wybrać, czy do robienia <Translate android="true" ids="photo_notes"/> używać aplikacji systemowej, czy aparatu OsmAnd.|
| **<Translate android="true" ids="av_camera_pic_size"/>** | Ustawia rozmiar robionych zdjęć. Możliwości aparatu urządzenia określają liczbę dostępnych opcji. Jeśli żadna opcja nie jest wybrana, aplikacja używa rozmiaru z ustawień systemowych aparatu urządzenia. |
| **<Translate android="true" ids="av_camera_focus"/>** | Określa metodę ustawiania ostrości aparatu. Liczba dostępnych opcji zależy od możliwości aparatu urządzenia. Zasadniczo dostępne są trzy następujące opcje: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; oraz *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Autofokus** jest najpopularniejszy i ustawia tryb automatyczny dla aparatu; **ciągły** sprawia, że aparat wykrywa ruchy i odpowiednio dostosowuje ostrość; a opcja **nieskończoność** sprawia, że obiektyw ustawia ostrość na odległość, dzięki czemu obiekty pozostają ostre bez względu na to, jak daleko się znajdują. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Jeśli ta opcja jest włączona, podczas robienia zdjęcia przez aparat odtwarzany jest dźwięk. Należy pamiętać, że zgodnie z prawem o ochronie prywatności, **w niektórych krajach urządzenia nie będą miały przełącznika wyciszania migawki aparatu**. Jeśli używasz aplikacji systemowej, dźwięk powinien być wyłączony w aplikacji aparatu. |
| **<Translate android="true" ids="av_audio_format"/>** | Umożliwia wybór formatów dla pliku audio. Liczba dostępnych opcji i to, która z nich jest używana domyślnie, zależy od parametrów konkretnego urządzenia. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Ta opcja umożliwia wybór przepływności dla tworzonego pliku audio. Dostępne opcje przepływności wahają się od 16 kb/s do 128 kb/s lub opcja Domyślna. Parametr Domyślny jest określany przez „domyślne” ustawienia mikrofonu urządzenia. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Jeśli ta opcja jest włączona, OsmAnd używa aplikacji systemowej do nagrywania wideo w <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Umożliwia wybór opcji określających format obrazu wyjściowego. Zakres dostępnych opcji zależy od parametrów konkretnego urządzenia. Opcją domyślną jest opcja *Najwyższa jakość*.  |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Jeśli ta opcja jest włączona, stare nagrania wideo będą automatycznie nadpisywane i zastępowane nowymi nagraniami wideo, jeśli rozmiar pamięci osiągnie limit.  |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Określa górny limit czasu dla nagranych klipów wideo. Dostępne są opcje w zakresie od 1 minuty do 30 minut.|
| **<Translate android="true" ids="rec_split_storage_size"/>** | Określa rozmiar pamięci przeznaczonej na nagrane wideo. Dostępne są opcje w zakresie od 1024 MB do 62 GB. Konkretny zakres opcji i opcja domyślna są określane na podstawie parametrów konkretnego urządzenia. Komunikat systemowy przypomni o osiągnięciu ustalonego limitu pamięci. |
| **<Translate android="true" ids="notes"/>** | Ta opcja przekierowuje do [Notatek audio/wideo w Moich miejscach](../personal/myplaces.md) - centralnego magazynu wszystkich notatek audio/wideo kiedykolwiek utworzonych w aplikacji. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Możesz przywrócić domyślne wartości dla wszystkich ustawień notatek audio/wideo.  |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Otwiera okno dialogowe umożliwiające wybranie profilu, z którego ma zostać skopiowana konfiguracja nagrywania notatek audio/wideo, i ustawienie jej dla bieżącego profilu. |


## Tworzenie pojedynczej notatki {#create-a-single-note}

Możesz utworzyć notatkę zdjęciową, wideo i audio na jeden z następujących sposobów:

- Za pomocą [widżetu](../widgets/info-widgets.md#audiovideo-notes-widget). Jeśli notatka ma być powiązana z Twoją bieżącą pozycją geograficzną.
- Za pomocą [menu kontekstowego](../map/map-context-menu.md#overview) punktu na mapie. Jeśli notatka ma być powiązana z wybranym punktem na mapie.


### Utwórz i przypnij bieżącą pozycję {#create-&-pin-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet wtyczki audio/wideo Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

Widżet <Translate android="true" ids="map_widget_av_notes"/> służy do tworzenia notatki powiązanej z bieżącą pozycją, co pozwala uniknąć wyszukiwania odpowiedniego punktu dla notatki na mapie. Wystarczy dotknąć widżetu i utworzyć notatkę.  

Funkcje udostępniane przez widżet <Translate android="true" ids="map_widget_av_notes"/> zależą od jego konfiguracji w menu [Ekran konfiguracji](../widgets/info-widgets.md#audiovideo-notes-widget). Widżet albo natychmiast otwiera aparat, aby zrobić notatkę, zgodnie z ustalonymi ustawieniami, albo najpierw pyta, w jakim formacie utworzyć notatkę, a następnie otwiera odpowiednie okno dialogowe nagrywania.


### Utwórz i przypnij wybraną lokalizację {#create-&-pin-selected-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu kontekstowe wtyczki audio/wideo zrób notatkę](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Aby utworzyć notatkę powiązaną z wybranym punktem na mapie, użyj [menu kontekstowego](../map/map-context-menu.md#-record-av-note) tego punktu:

1. Długo dotknij punktu na mapie, a otworzy się [menu kontekstowe](../map/map-context-menu.md).
2. Dotknij **Akcje**, i wybierz jedną z dostępnych opcji z listy:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - aby zrobić notatkę audio i powiązać ją z wybranym punktem na mapie;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - aby zrobić notatkę wideo i powiązać ją z wybranym punktem na mapie;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - aby zrobić notatkę zdjęciową i powiązać ją z wybranym punktem na mapie.

3. W zależności od wybranego formatu notatki otworzy się odpowiednie okno dialogowe nagrywania.


### Okno dialogowe nagrywania {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rejestrator notatek wideo](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

W przypadku *notatek audio i wideo* wyświetlany jest odpowiednio rejestrator audio lub wideo. Możesz:

- Zatrzymać nagrywanie za pomocą ikony *Stop*.
- Wyświetlić czas trwania nagrania.
- Pokazać lub ukryć ekran wideo.

Możliwe jest zatrzymanie nagrywania poprzez dotknięcie widżetu <Translate android="true" ids="map_widget_av_notes"/>, niezależnie od tego, czy nagrywanie zostało rozpoczęte z menu kontekstowego, czy z widżetu. W przypadku *notatki zdjęciowej* pojawia się funkcja aparatu, za pomocą której można zrobić zdjęcie, wyświetlić wynik, zaakceptować i zapisać je lub zrobić nowe zdjęcie.

:::info Uwaga
Automatycznie wszystkie nagrania zdjęciowe, audio i wideo są zapisywane w zakładce: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>.
:::


## Zarządzanie pojedynczą notatką {#manage-a-single-note}

Możesz zarządzać swoimi informacjami, przemyśleniami, pomysłami itp. powiązanymi z miejscem geograficznym w następujący sposób:

- Wyświetlić wszystkie notatki jako listę w [Moich miejscach](../personal/myplaces.md).
- Pokazać konkretną notatkę na mapie.
- Zmienić nazwę notatki w Moich miejscach.
- Pokazać wszystkie notatki [na mapie](../map/configure-map-menu.md#map-data-layers).
- Odtworzyć notatkę.
- Utworzyć punkty trasy w [śladzie](../plugins/trip-recording.md#new-track-recording).
- Eksportować do [JOSM](https://josm.openstreetmap.de/).


### Wyświetlanie w Moich miejscach {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Menu Moje miejsca wtyczki audio/wideo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Moje miejsca](../personal/myplaces.md) to centralne repozytorium wszystkich Twoich notatek. Pozwala na przeglądanie wszystkich notatek na posortowanej liście, wyświetlanie konkretnej notatki na mapie i zarządzanie całą listą notatek.


### Pokaż na mapie {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kontekst menu Moje miejsca wtyczki audio/wideo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Aby pokazać konkretną notatkę na mapie, użyj listy notatek w Moich miejscach, znajdź potrzebną i dotknij jej. W rezultacie pojawi się mapa, podświetli lokalizację notatki i otworzy menu kontekstowe. Można pracować z notatką, wybierając opcje w menu kontekstowym.


### Odtwórz {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu kontekstowe wtyczki audio/wideo](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)  
![Akcje menu Moje miejsca wtyczki audio/wideo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Aby odtworzyć notatkę, użyj odpowiedniej opcji w [menu kontekstowym](../map/map-context-menu#overview) otwartym dla notatki:

- na mapie;
- w Moich miejscach.

Sekcja [Szczegóły](../map/map-context-menu#details) zawiera więcej danych o notatkach, takich jak szerokość i długość geograficzna, data i godzina notatki oraz zdjęcia.


### Zmień nazwę, usuń, udostępnij {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Akcje menu Moje miejsca wtyczki audio/wideo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Aby zarządzać notatką w Moich miejscach, dotknij trzech pionowych kropek notatki na liście, a pojawią się dostępne opcje:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Otwórz i wyświetl wybrane wideo lub odtwórz notatkę audio.
- **<Translate android="true" ids="shared_string_share"/>**. Łatwo udostępniaj wybraną notatkę innym za pośrednictwem różnych platform.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Pokazuje dokładną lokalizację i menu kontekstowe notatki na mapie.
- **<Translate android="true" ids="shared_string_rename"/>**. Zmień nazwę notatki w celu łatwiejszej identyfikacji.
- **<Translate android="true" ids="shared_string_delete"/>**. Trwale usuwa notatki z aplikacji.


## Widżet nagrywania {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png) ![Widżet](@site/static/img/plugins/audio-video-notes/widget.png) 

</TabItem>

</Tabs>

[Widżet Notatki audio/wideo](../widgets/info-widgets.md#audiovideo-notes-widget) tworzy notatki, zdjęcia, pliki audio i wideo oraz łączy je z bieżącą pozycją. Widżet ma kilka opcji, które można ustawić jako domyślną akcję wykonywaną przez widżet po dotknięciu ekranu.  

Dodanie widżetu do ekranu jest konieczne, jeśli wolisz unikać wyszukiwania geolokalizacji na mapie i łączyć notatki z bieżącą domyślną lokalizacją. Aby dodać lub dostosować widżet, wykonaj poniższe kroki:  

1. Przejdź do:  
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Wybierz  **<Translate android="true" ids="map_widget_left"/>** lub **<Translate android="true" ids="map_widget_right"/>**.

3. Dotknij **<Translate android="true" ids="map_widget_av_notes"/>**, a otworzy się menu kontekstowe widżetu.

4. Wybierz opcję, której chcesz używać domyślnie, dotykając widżetu:

    - **<Translate android="true" ids="av_def_action_choose"/>** - otwórz wybór opcji.

    - **<Translate android="true" ids="av_def_action_audio"/>** - rozpocznij nagrywanie wiadomości audio.

    - **<Translate android="true" ids="av_def_action_video"/>** - rozpocznij nagrywanie wideo.

    - **<Translate android="true" ids="av_def_action_picture"/>** - rozpocznij robienie zdjęć.

### Zewnętrzne urządzenia wejściowe {#external-input-devices}   

Jeśli używasz [zewnętrznego urządzenia wejściowego](https://osmand.net/docs/user/map/interact-with-map#external-input-devices) (*Android*), możesz rozpocząć i zatrzymać Notatki audio/wideo bez dotykania ekranu. Aby to zrobić, przypisz akcję „Dodaj notatkę audio” lub „Dodaj notatkę wideo” do klawisza:<br/>
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

Po przypisaniu klawisz działa jako przełącznik:
- Pierwsze naciśnięcie rozpoczyna nagrywanie notatki audio lub wideo (w zależności od wybranej akcji).
- Drugie naciśnięcie tego samego klawisza zatrzymuje nagrywanie.

Gdy nagrywanie jest zatrzymywane za pomocą zewnętrznego urządzenia wejściowego, menu kontekstowe nie jest wyświetlane, co ułatwia używanie OsmAnd w scenariuszach całkowicie bezdotykowych (na przykład podczas jazdy na motocyklu lub prowadzenia samochodu).


## Zarządzanie wieloma notatkami {#manage-multiple-notes}

### Zarządzanie w Moich miejscach {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trzy akcje menu Moje miejsca wtyczki audio/wideo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

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

Możesz udostępnić wszystkie notatki, w tym [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes), który ma wybrane notatki jako punkty trasy na ekranie [Moje miejsca](../personal/myplaces.md#audiovideo-notes), klikając przycisk udostępniania w dolnym menu. Obok każdej notatki pojawi się pole wyboru, aby wybrać określone notatki. Nad notatkami znajdują się dwa pola wyboru: *Notatki A/V wg daty*, aby zaznaczyć wszystkie notatki, oraz pole wyboru *Lokalizacje*. Pole wyboru *Lokalizacje* umożliwia dodanie osobnego pliku GPX ze współrzędnymi i danymi.  

Każda notatka zawiera czas jej utworzenia, ilość danych, a jeśli jest to nagranie, czas nagrania i dane o lokalizacji, można dodać dane GPX.  
Obsługiwane formaty plików: audio - **3gp**, wideo - **mp4**, zdjęcie -**jpg**.


### Pokaż wszystko na mapie {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Pokaż notatki na mapie](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Wyświetlone na mapie notatki mogą opowiedzieć Twoją historię, gdzie zauważyłeś znaki, które drzwi musiałeś otworzyć, gdzie jest wyjście, optymalna ścieżka i wiele więcej. Możesz pokazywać notatki [pojedynczo](#show-on-the-map) lub wszystkie naraz.

Użyj warstwy mapy [Nagrania](../map/point-layers-on-map#-audio--video-points-android), aby pokazać lub ukryć wszystkie notatki. Jeśli włączysz ją w menu [Konfiguruj mapę](../map/configure-map-menu), warstwa Nagrania pokaże wszystkie notatki na mapie.

![Brak notatek na mapie](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notatki na mapie](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Punkty trasy utworzone z notatek {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Notatki i punkty trasy na mapie](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)  
![Punkty trasy na śladzie](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Punkt trasy jest tworzony, gdy do śladu dodawana jest notatka audio, wideo lub zdjęciowa. Punkty trasy istnieją w obrębie śladu. Jeśli ślad jest widoczny, jego punkty trasy również są widoczne. W ten sposób notatki te mogą być widoczne na mapie wszystkie naraz lub tylko na określonym widocznym śladzie. W tym drugim przypadku notatki są wyświetlane jako punkty trasy śladu.

:::note
Jeśli ślad jest eksportowany, punktów trasy nie można przeglądać ani odtwarzać, ponieważ notatki audio/wideo/zdjęciowe są przechowywane tylko na urządzeniu i dostępne tylko dla Ciebie na tym urządzeniu.
:::


### Tworzenie punktów trasy {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ręczne dodawanie punktu trasy do śladu](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Istnieją dwa sposoby tworzenia punktu trasy: automatyczny i ręczny.

1. **Automatycznie**, punkt trasy jest tworzony, w przypadku gdy robisz notatkę audio/wideo/zdjęciową, gdy trwa [Nagrywanie podróży](../plugins/trip-recording), niezależnie od geolokalizacji, jeśli jest ona powiązana z bieżącą pozycją lub dowolnym miejscem, a zatem niezależnie od użytych do tego środków: czy jest to [widżet](../widgets/info-widgets#audiovideo-notes-widget), czy [menu kontekstowe](../map/map-context-menu#-audiovideo-note).

    Wszystkie punkty trasy dodane automatycznie otrzymują automatycznie przypisaną nazwę. Nazwa jest tworzona zgodnie z formatem określonym poniżej dla pliku audio/wideo/zdjęciowego i ma [krótki link](https://wiki.openstreetmap.org/wiki/Shortlink). Przykład punktów trasy na powyższym rysunku pokazuje automatycznie i ręcznie utworzone punkty trasy, gdzie pierwsze cztery zostały utworzone automatycznie, a ostatni - ręcznie.

2. **Ręcznie**, punkt trasy jest tworzony za pomocą [menu kontekstowego](../map/map-context-menu#-audiovideo-note) w następujący sposób:

    - Wybierz wymaganą notatkę audio/wideo/zdjęciową na mapie.
    - Dotknij **Akcje**, a następnie dotknij **Dodaj ślad**.
    - Wybierz ślad, do którego zamierzasz dodać punkt trasy.
    - Otworzy się okno dialogowe *<Translate android="true" ids="quick_action_add_gpx"/>* , które pozwala ustawić niektóre właściwości, takie jak nazwa punktu trasy, ikona, kolor i inne. Po zakończeniu dotknij **Zapisz**.

:::info Uwaga
Możesz określić nazwy dla każdego ręcznie utworzonego punktu trasy.
:::


### Wyświetlanie punktów trasy {#view-waypoints}

- Punkt trasy jest dostępny do przeglądania jako punkt trasy na mapie oraz na liście [punktów określonego śladu](../map/tracks/track-context-menu.md#points--waypoints). Usunięcie punktu trasy nie usuwa odpowiedniej notatki audio/wideo/zdjęciowej.

- Notatka audio, wideo lub zdjęciowa jest dostępna do przeglądania na mapie i na liście notatek A/V w [Moich miejscach](../plugins/audio-video-notes#view-in-my-places). Usunięcie notatki audio, wideo lub zdjęciowej nie usuwa odpowiedniego punktu trasy.

- Na mapie punkt trasy i notatka audio, wideo lub zdjęciowa mogą być widoczne lub nie. Zależy to od tego, która warstwa jest aktualnie włączona dla profilu.

- Gdy ani warstwa Ślady, ani warstwa Nagrania nie jest włączona, zarówno punkty trasy, jak i notatki można wyświetlić, dotykając ich w Moich miejscach. W takim przypadku mapa pokazuje lokalizacje dotkniętej notatki lub odpowiednio lokalizacje wszystkich punktów trasy dotkniętego śladu.

| Widoczne | Włączona warstwa |
| --- | --- |
| Tylko punkty trasy | Warstwa Ślady |
| Punkty trasy i notatki | Warstwa Ślady i Nagrania |
| Tylko notatki | Warstwa Nagrania |
| Brak | Ani warstwa Ślady, ani Nagrania. |


### Plik GPX z punktami trasy {#gpx-file-with-waypoints}

![Punkt trasy w pliku GPX](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)  

Jeśli przeglądasz plik GPX śladu dodanego z punktem trasy z notatki audio/wideo/zdjęciowej, punkt trasy będzie wyglądał jak w poniższym przykładzie, zawierając współrzędne, znacznik czasu, nazwę odpowiedniej notatki i krótki link.


## Różne {#miscellaneous}

### Szczegóły nazwy pliku {#file-name-details}

Wtyczka <Translate android="true" ids="audionotes_plugin_name"/> generuje pliki audio/wideo/zdjęciowe w następującym formacie:

    `{SHORTLINK_LOCATION}_Opis.{avi,mp3,jpg}`

gdzie `SHORTLINK_LOCATION` określa szerokość i długość geograficzną lokalizacji, z którą plik jest powiązany. `SHORTLINK_LOCATION` jest zakodowany zgodnie ze specyfikacją [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).


### Eksport do JOSM {#export-to-josm}

![Notatki audio/wideo w JOSM](@site/static/img/plugins/audio-video-notes/josm-track-points.png)  

Aby wszystko później obejrzeć, możesz wyeksportować ślad wraz ze wszystkimi plikami multimedialnymi i wyświetlić je w [edytorze JOSM](https://josm.openstreetmap.de/). Pamiętaj, że pliki multimedialne muszą być umieszczone w odpowiednim folderze. Możesz dowiedzieć się, w którym, klikając na wideo. Pojawi się powiadomienie informujące, że plik nie jest dostępny, umieść poprawny plik w określonym folderze.  


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style map)](../../user/map/vector-maps.md)