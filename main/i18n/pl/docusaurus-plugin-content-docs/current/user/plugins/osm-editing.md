---
source-hash: fb4dfa3af12638db8d07636ca58d9e23de9542afc7c2cd66d965f36e2bc93826
sidebar_position: 9
title:  Edycja OpenStreetMap
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

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) to globalna społeczność, której celem jest stworzenie szczegółowej, darmowej mapy geograficznej świata i dostarczanie aktualnych danych open-source każdemu użytkownikowi. Wtyczka do edycji OpenStreetMap pozwala na wnoszenie wkładu w społeczność.  

Dzięki OsmAnd i wtyczce do edycji OSM możesz łatwo dodawać własne informacje do OpenStreetMap.org, takie jak tworzenie lub modyfikowanie [POI](#create--modify-poi), dodawanie lub komentowanie [notatek](#create--modify-osm-note) oraz przesyłanie zarejestrowanych [śladów GPX](#upload-gps-track).

## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Aby korzystać z wtyczki *Edycja OpenStreetMap*, należy dokonać następujących ustawień:

1. Włącz [wtyczkę](../plugins/index.md#enable--disable).  
2. Ustaw edycję OpenStreetMap w dowolnym [profilu](../personal/profiles.md).
3. Włącz wyświetlanie *notatek OSM (online)* lub *edycji OSM* na mapie w menu [Konfiguracja mapy](../map/configure-map-menu).


## Ustawienia {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*  
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![Ustawienia wtyczki edycji OpenStreetMap Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![Ustawienia wtyczki edycji OpenStreetMap iOS](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>  

:::note
Ustawienia wtyczki są globalne i dotyczą wszystkich profili.
:::

- [Zaloguj się do OpenStreetMap](#authorization). Zaloguj się, aby przesłać nowe lub zmodyfikowane zmiany. Użyj bezpiecznej metody *OAuth 2.0* lub [zaloguj się na stronie OSM](https://www.openstreetmap.org/login). W przypadku iOS przycisk metody OAuth jest dostępny tylko dla użytkowników z obsługiwaną wersją iOS 16.4
- **<Translate android="true" ids="offline_edition"/>**. Jeśli to ustawienie jest włączone, zmiany są najpierw zapisywane lokalnie (przycisk *Zapisz*) i przesyłane na żądanie. Jeśli ustawienie jest wyłączone, zmiany są przesyłane natychmiast (przycisk *Prześlij*).
- **<Translate android="true" ids="use_dev_url"/>** *(tylko Android)*. Pozwala włączyć [dev.openstreetmap.org](https://dev.openstreetmap.org/) zamiast [openstreetmap.org](http://openstreetmap.org/) w celu przetestowania przesyłania notatek OSM, POI lub śladów GPS. Po włączeniu następuje automatyczne wylogowanie z OpenStreetMap.org. To ustawienie jest dostępne na liście tylko wtedy, gdy włączona jest *wtyczka deweloperska OsmAnd*.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Dotknij, aby otworzyć [*Menu → Moje miejsca → Edycje OSM*](../personal/myplaces.md). Ta karta zawiera listę nieedytowanych notatek OSM. Dostępne są następujące działania z notatką: *Prześlij*, *Pokaż na mapie*, *Modyfikuj notatkę OSM*, *Usuń*. Przesłane lub usunięte notatki nie są już wyświetlane na liście.  

:::note
Jeśli masz subskrypcję [OsmAnd Pro](../purchases/android.md#pro-features), zmiany wprowadzone w OSM pojawią się na mapie OsmAnd w ciągu godziny. Upewnij się, że [Aktualizacje na żywo](../personal/maps-resources.md#live-updates) są włączone.
:::  


### Autoryzacja {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd Live dla maperów](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd Live dla maperów](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Zaloguj się, aby wnosić zmiany i pliki GPX.  

- Przejdź do [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) i *zaloguj się* lub *zarejestruj*.
- Dotknij pola *Zaloguj się do OpenStreetMap* w aplikacji OsmAnd, a następnie dotknij przycisku *Zaloguj się przez OpenStreetMap*.  


### Darmowe aktualizacje map dla maperów {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd Live dla maperów](@site/static/img/personal/maps/map_updates_mappers_login_andr.png)   ![OsmAnd Live dla maperów](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd Live dla maperów](@site/static/img/personal/maps/map_updates_mappers_login_ios.png)    ![OsmAnd Live dla maperów](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

Ustawienie <Translate android="true" ids="map_updates_for_mappers"/> pozwala włączyć **[aktualizacje na żywo](../personal/maps-resources.md#free-for-osm-mappers)**, jeśli jesteś aktywnym współtwórcą OpenStreetMap. W ten sposób możesz cieszyć się darmowymi cogodzinnymi aktualizacjami map, w przeciwieństwie do standardowych comiesięcznych aktualizacji. Aktywni współtwórcy OpenStreetMap.org mogą być uprawnieni do nieograniczonych cogodzinnych aktualizacji map. Zaloguj się do OpenStreetMap, aby sprawdzić, czy kwalifikujesz się do nieograniczonych miesięcznych i cogodzinnych aktualizacji map.


### Warstwa edycji OSM {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_open_street_map"/>*

![Warstwa edycji OSM Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![Warstwa edycji OSM Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_open_street_map"/>*

![Warstwa edycji OSM iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Możesz włączyć lub wyłączyć jako osobną warstwę wyświetlanie modyfikacji OSM w sekcji [Konfiguracja mapy](../map/configure-map-menu.md) w *Menu głównym*. Modyfikacje OSM obejmują następujące elementy:  
- **Notatki OSM (online)**. Wyświetla publiczne notatki OpenStreetMap utworzone przez użytkowników w celu podkreślenia problemów z mapowaniem lub zgłoszenia prośby o aktualizacje. Notatki są pokazywane jako interaktywne znaczniki, które można przeglądać, otwierać i rozwiązywać przez maperów.  
![Warstwa edycji OSM](@site/static/img/plugins/osm-editing/osm_editing_osm_note.png)  
- **Edycje OSM**. Pokazuje Twoje własne lokalne edycje OSM przechowywane na urządzeniu przed przesłaniem ich na serwer OpenStreetMap. Ta warstwa pomaga w przeglądaniu geometrii i atrybutów obiektów, które zostały zmodyfikowane lub dodane.  
![Warstwa edycji OSM](@site/static/img/plugins/osm-editing/osm_editing_osm_edits.png)  
- **Tagi Fixme**. Podkreśla obiekty oznaczone tagiem fixme=* w OSM. Te elementy zawierają komentarze maperów wskazujące, że informacje są niekompletne, niepewne lub wymagają weryfikacji w terenie.  
![Warstwa edycji OSM](@site/static/img/plugins/osm-editing/osm_editing_fixme_tags.png)  
- **Tagi Note**. Wyświetla obiekty zawierające tagi note=* — komentarze maperów osadzone bezpośrednio w danych OSM. Te tagi zazwyczaj opisują tymczasowe warunki lub dodatkowy kontekst dla przyszłych edycji.  
![Warstwa edycji OSM](@site/static/img/plugins/osm-editing/osm_editing_note_tags.png)  
- **Ikony przy niskim powiększeniu**. Włącza uproszczone, ikona-podobne reprezentacje obiektów OSM za pomocą krótkich skrótów pochodzących z ich głównych kluczy tagów. Ich znaczenie jest opisane [tutaj](https://osmand.net/docs/user/map-legend/osmand#icons-for-low-zooms-option-simplified-icons-). Ta funkcja sprawia, że więcej obiektów jest widocznych przy niskim poziomie powiększenia bez przeciążania mapy lub nakładania się ikon.  
![Warstwa edycji OSM](@site/static/img/plugins/osm-editing/osm_editing_icons_zoom.png)  


## Tworzenie / Modyfikacja POI {#create--modify-poi}

Wtyczka do edycji OpenStreetMap umożliwia tworzenie na mapie nowych obiektów zwanych [punktami użyteczności publicznej lub POI](../map/point-layers-on-map.md#points-of-interest-pois). Możesz zmapować nowy sklep, ulubiony punkt orientacyjny, ławkę lub wiatę, aby ludzie mogli je znaleźć.  

1. Dotknij mapy, aby umieścić nowy POI, lub dotknij POI, który nie został jeszcze załadowany.
2. Dotknij [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
3. Wybierz [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi) i dodaj jego nazwę oraz inne informacje, takie jak godziny otwarcia, strona internetowa itp. Po wybraniu nieprzesłanego POI, opcja *Utwórz POI* zmienia się na *Modyfikuj POI*.
4. W zależności od ustawienia [Edycja offline](#settings), możesz zapisać dane lokalnie lub [przesłać je](../map/map-context-menu#-upload-poi--osm-note).


### Dodaj tagi {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Dodaj tag POI Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Dodaj tag POI Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Dodaj tag POI iOS](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

Możesz łatwo dodawać [tagi](https://wiki.openstreetmap.org/wiki/Tags) OSM do POI. Po wpisaniu kilku znaków w pasku wyszukiwania program sugeruje możliwe tagi.  

**Modyfikacje offline.**  
Możesz przeglądać, przesyłać do OSM lub usuwać POI w *Moje miejsca → Edycje OSM*. Możesz także wyeksportować zmiany POI OSM do [pliku OSC](https://wiki.openstreetmap.org/wiki/OsmChange) i zaimportować go do [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).  

### Dodaj nieobsługiwane typy POI {#add-unsupported-poi-types}

W zakładce *Zaawansowane* można dodawać nieobsługiwane typy POI, które mogą być przydatne do określonego zadania. Opcja ta pozwala na ręczne wprowadzanie danych POI, rozszerzając tym samym funkcjonalność aplikacji.  

Jednym z przykładów nieobsługiwanych typów POI, które można dodać, jest *amenity=freeshops*. Ten typ może być przydatny, jeśli chcesz oznaczyć darmowe sklepy lub miejsca, które zapewniają darmowe produkty.

Aby dodać nieobsługiwane typy POI, wykonaj następujące kroki:

1. Otwórz kartę *Zaawansowane*.
2. Dotknij *Typ POI*.
3. Wprowadź klucz *amenity* i wartość *freeshops* w odpowiednich polach.
4. Wypełnij pozostałe wymagane dane dla tego POI.
5. Dotknij *Dodaj tag*, aby dodać nowy POI do swojej bazy danych.

Pamiętaj, że dodając nieobsługiwane typy POI, należy upewnić się, że dane są wprowadzane poprawnie, aby zapewnić prawidłowe działanie aplikacji i późniejsze przetwarzanie informacji.


## Tworzenie / Modyfikacja notatki OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*  

![Otwórz notatkę OSM Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png)   ![Otwórz notatkę OSM Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*  

![Otwórz notatkę OSM iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Aby edytować, komentować lub zamykać notatki OSM, włącz ich wyświetlanie na mapie w menu [Konfiguracja mapy](../map/configure-map-menu.md).

- Funkcja Notatki OSM pozwala na dodawanie notatek do mapy. W notatkach tych można opisywać błędy lub pisać o brakujących informacjach w danych OpenStreetMap. Ty i inni użytkownicy możecie zostawiać komentarze do swoich notatek.
- Możesz pomóc innym użytkownikom, sprawdzając ich pytania lub problemy, dodając komentarze, a następnie zamykając rozwiązane notatki.
- Przeczytaj więcej o notatkach OpenStreetMap [tutaj](https://wiki.openstreetmap.org/wiki/Notes).

Aby utworzyć notatkę, nie musisz logować się do OpenStreetMap.org, możesz wysłać ją anonimowo.

- Dotknij mapy w miejscu, w którym ma być umieszczona nowa notatka OSM (lub dotknij nieprzesłanej notatki) i wybierz [Akcje](../map/map-context-menu.md#actions).
- Jeśli chcesz dodać informacje do istniejącej lub nieprzesłanej notatki, edytować komentarz lub zamknąć notatkę, dotknij notatki OSM na mapie i wybierz [wymaganą akcję](../map/map-context-menu.md#-comment--close-osm-note).
- Możesz przesłać zmiany, gdy tylko będziesz online. Możesz także cofnąć zmiany przed ich przesłaniem.

:::info
Przesłane notatki OSM nie są widoczne na mapach OsmAnd w trybie offline.
:::


## Ślad GPS {#gps-track}

Zarejestrowane ślady GPS są przydatne dla:

- **Maperów**. Ślady mogą być używane do mapowania wszelkiego rodzaju ścieżek.
- **Nawigacji**. Na podstawie przesłanych danych z plików GPX aplikacje nawigacyjne i specjalne urządzenia mogą obliczać ślady.
- **Do udostępniania informacji** o zarejestrowanych śladach i trasach na [mapach opartych na OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).  

:::info NOTE
Twoje ślady zostaną dodane do [śladów OSM](https://www.openstreetmap.org/traces) w ciągu godziny, gdzie będą dostępne do przeglądania, wyszukiwania i używania przez Ciebie i innych.
:::  


### Prześlij ślad GPS {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wtyczka edycji OpenStreetMap GPX do OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wtyczka edycji OpenStreetMap GPX do OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)  

</TabItem>

</Tabs>

Aby [przesłać ślad GPS](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), wykonaj poniższe kroki:  

- Znajdź wymagany ślad w zakładce *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).  
- Dotknij *menu z trzema kropkami* obok nazwy śladu i wybierz *Eksportuj*.

**Ustawienia:**

- **<Translate android="true" ids="shared_string_description"/>**. Umożliwia dodanie opisu do śladu. Opis dotyczy wszystkich wybranych śladów. Jeśli nic nie wpiszesz w tym polu, jako opisy zostaną użyte nazwy poszczególnych śladów.  
- **<Translate android="true" ids="gpx_tags_txt"/>**. Ta pozycja w sekcji ustawień pozwala na dodanie tagów w celu identyfikacji śladu. Domyślnym tagiem jest "osmand". Jeśli ślad został zarejestrowany z określoną aktywnością na podstawie wybranego profilu, ta aktywność jest również automatycznie dodawana jako tag podczas przesyłania. Dla przesyłanych grup śladów każdy ślad otrzymuje swój własny tag aktywności. Dla niektórych profili (np. Transport publiczny) tag aktywności nie jest dodawany. Możesz wprowadzić dodatkowe tagi ręcznie, oddzielone przecinkami.  
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Widoczność śladu dla użytkowników OSM:  
   - *Publiczny* oznacza, że ślad jest publicznie dostępny i wyświetlany w surowej formie w Twoich śladach GPS, listach śladów GPS i listach śladów ze znacznikami czasu. Dane przesyłane przez API nie są powiązane z Twoją stroną śladu. Znaczniki czasu punktów śladu są niedostępne przez publiczne API GPS, a punkty śladu nie są uporządkowane chronologicznie.
   - *Identyfikowalny* oznacza, że ślad będzie publicznie wyświetlany w Twoich punktach śladów GPS i publicznych listach śladów GPS, co oznacza, że inni użytkownicy będą mogli pobrać surowy ślad i powiązać go z Twoją nazwą użytkownika. Publiczne dane punktów śladu ze znacznikami czasu z API GPS przekazywane przez API punktów śladu będą prowadzić do Twojej oryginalnej strony śladu.
   - *Śledzony* oznacza, że ślad nie jest wyświetlany na publicznych listach, ale przetworzone punkty śladu ze znacznikami czasu (które nie mogą być bezpośrednio z Tobą powiązane) są ładowane z publicznego API GPS.
   - *Prywatny* oznacza, że ślad nie jest wyświetlany na publicznych listach, ale punkty śladu w niechronologicznej kolejności są dostępne przez publiczne API GPS bez znaczników czasu.
- **<Translate android="true" ids="login_account"/>** - [Konto OSM](https://www.openstreetmap.org/login).

:::info
Możesz wybrać więcej niż jeden ślad do przesłania do OSM. Aby to zrobić, dotknij ikony *Prześlij do OpenStreetMap* u dołu ekranu, zaznacz ślady za pomocą pola wyboru, dotknij *Prześlij*, a następnie *Kontynuuj*.
:::

### Generuj plik OBF {#generate-obf-file}

Możesz utworzyć plik OBF za pomocą [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator), jeśli masz dużą bazę danych śladów GPX. Może to być zbiór śladów z osmand.net z tagiem "gpsies", zbiór pobranych śladów z OpenStreetMap lub Twoja własna kolekcja.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)