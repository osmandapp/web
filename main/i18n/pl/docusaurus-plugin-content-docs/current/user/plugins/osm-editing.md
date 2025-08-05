---
source-hash: 46f8bd9f97c636e1d4eed0afa1bdf6ebb5963b97004fdc01d9e05197cf654281
sidebar_position: 9
title: Edycja OpenStreetMap
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

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) to globalna społeczność, której celem jest stworzenie szczegółowej, bezpłatnej mapy geograficznej świata i dostarczanie aktualnych danych open-source każdemu użytkownikowi. Wtyczka do edycji OpenStreetMap umożliwia wniesienie wkładu w rozwój społeczności.

Dzięki OsmAnd i wtyczce do edycji OSM możesz łatwo przesyłać własne informacje do OpenStreetMap.org, takie jak tworzenie lub modyfikowanie [POI](#create--modify-poi), dodawanie lub komentowanie [notatek](#create--modify-osm-note) oraz przesyłanie zarejestrowanych [ścieżek](#upload-gps-track) GPX.

## Wymagane parametry konfiguracji {#required-setup-parameters}

Aby użyć wtyczki *Edycja OpenStreetMap*, należy wykonać następujące ustawienia:

1. Włącz [wtyczkę](../plugins/index.md#enable--disable).
2. Ustaw edycję OpenStreetMap w dowolnym [profilu](../personal/profiles.md).
3. Włącz wyświetlanie *notatek OSM (online)* lub *edycji OSM* na mapie w [menu Konfiguruj mapę](../map/configure-map-menu).


## Ustawienia {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

:::note
Ustawienia wtyczki są globalne i dotyczą wszystkich profili.
:::

- [Zaloguj się do OpenStreetMap](#authorization). Zaloguj się, aby przesłać nowe lub zmodyfikowane zmiany. Użyj bezpiecznej metody *OAuth 2.0* lub [zaloguj się na stronie OSM](https://www.openstreetmap.org/login). W przypadku iOS przycisk metody OAuth jest dostępny tylko dla użytkowników z obsługiwaną wersją iOS, 16.4
- **<Translate android="true" ids="offline_edition"/>**. Jeśli to ustawienie jest włączone, zmiany są najpierw zapisywane lokalnie (przycisk *Zapisz*) i przesyłane na żądanie. Jeśli ustawienie jest wyłączone, zmiany są przesyłane natychmiast (przycisk *Prześlij*).
- **<Translate android="true" ids="use_dev_url"/>** *(tylko Android)*. Umożliwia włączenie [dev.openstreetmap.org](https://dev.openstreetmap.org/) zamiast [openstreetmap.org](http://openstreetmap.org/) w celu testowania przesyłania notatek OSM, POI lub śladów GPS. Po włączeniu następuje automatyczne wylogowanie z OpenStreetMap.org. To ustawienie jest dostępne na liście tylko wtedy, gdy włączona jest *wtyczka deweloperska OsmAnd*.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Dotknij, aby otworzyć [*Menu → Moje miejsca → Edycje OSM*](../personal/myplaces.md). Ta karta zawiera listę Twoich nieedytowanych notatek OSM. Dostępne są następujące działania z notatką: *Prześlij*, *Pokaż na mapie*, *Modyfikuj notatkę OSM*, *Usuń*. Przesłane lub usunięte notatki nie są już wyświetlane na liście.

:::note
Jeśli masz subskrypcję [OsmAnd Pro](../purchases/android.md#pro-features), zmiany wprowadzone w OSM pojawią się na Twojej mapie OsmAnd w ciągu jednej godziny. Upewnij się, że [aktualizacje na żywo](../personal/maps-resources.md#osmand-live) są włączone.
:::


### Autoryzacja {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Zaloguj się, aby przesyłać zmiany i pliki GPX.

- Przejdź do [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) i *zaloguj się* lub *zarejestruj*.
- Dotknij pola *Zaloguj się do OpenStreetMap* w aplikacji OsmAnd, a następnie dotknij przycisku *Zaloguj się za pomocą OpenStreetMap*.


### Darmowe aktualizacje map dla mapujących {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_andr.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_ios.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

Ustawienie <Translate android="true" ids="map_updates_for_mappers"/> pozwala włączyć **[OsmAnd live](../personal/maps-resources.md#free-for-osm-mappers)**, jeśli jesteś aktywnym współtwórcą OpenStreetMap. W ten sposób możesz cieszyć się darmowymi godzinowymi aktualizacjami map, w przeciwieństwie do standardowych miesięcznych aktualizacji. Aktywni współtwórcy OpenStreetMap.org mogą być uprawnieni do nieograniczonych godzinowych aktualizacji map. Zaloguj się do OpenStreetMap, aby sprawdzić swoje uprawnienia do nieograniczonych miesięcznych i godzinowych aktualizacji map.


### Warstwa edycji OSM {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM editing layer Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![OSM editing layer Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![OSM editing layer iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Możesz włączyć lub wyłączyć jako osobną warstwę wyświetlanie modyfikacji OSM, takich jak *notatki OSM* (online), *edycje OSM*, *tagi Fixme*, *tagi Notatek*, *Ikony przy niskich zoomach*, w sekcji [Konfiguruj mapę](../map/configure-map-menu.md) w *Menu głównym*.


## Tworzenie / Modyfikowanie POI {#create--modify-poi}

Wtyczka do edycji OpenStreetMap umożliwia tworzenie nowych obiektów na mapie, zwanych [punktami zainteresowania lub POI](../map/point-layers-on-map.md#points-of-interest-pois). Możesz nanieść na mapę nowy sklep, ulubiony punkt orientacyjny, ławkę lub schronienie, aby ludzie mogli je znaleźć.

1. Dotknij mapy, aby umieścić nowy POI, lub dotknij POI, który nie został jeszcze załadowany.2. Dotknij [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
2. Wybierz [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi) i dodaj jego nazwę oraz inne informacje, takie jak godziny otwarcia, strona internetowa itp. Po wybraniu niezaładowanego POI, *Utwórz POI* zmienia się na *Modyfikuj POI*.
3. W zależności od ustawienia [Edycja offline](#settings), możesz zapisać dane lokalnie lub [przesłać je](../map/map-context-menu#-upload-poi--osm-note).


### Dodaj tagi {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add POI tag ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

Możesz łatwo dodawać [tagi](https://wiki.openstreetmap.org/wiki/Tags) OSM do POI. Po wprowadzeniu kilku znaków w pasku wyszukiwania program sugeruje możliwe tagi.

**Modyfikacje offline.**
Możesz przeglądać, przesyłać do OSM lub usuwać POI w *Moje miejsca → Edycje OSM*. Możesz również wyeksportować zmiany POI OSM do pliku [OSC](https://wiki.openstreetmap.org/wiki/OsmChange) i zaimportować je do [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).

### Dodaj nieobsługiwane typy POI {#add-unsupported-poi-types}

W zakładce *Zaawansowane* możesz dodać nieobsługiwane typy POI, które mogą być przydatne do Twojego konkretnego zadania. Ta opcja pozwala na ręczne wprowadzanie danych POI, rozszerzając w ten sposób funkcjonalność aplikacji.

Jednym z przykładów nieobsługiwanych typów POI, które możesz dodać, jest *amenity=freeshops*. Ten typ może być przydatny, jeśli chcesz oznaczyć darmowe sklepy lub miejsca, które oferują darmowe produkty.

Aby dodać nieobsługiwane typy POI, wykonaj następujące kroki:

1. Otwórz zakładkę *Zaawansowane*.
2. Dotknij *Typ POI*.
3. Wprowadź klucz *amenity* i wartość *freeshops* w odpowiednich polach.
4. Wypełnij pozostałe wymagane dane dla tego POI.
5. Dotknij *Dodaj tag*, aby dodać nowy POI do swojej bazy danych.

Pamiętaj, że podczas dodawania nieobsługiwanych typów POI ważne jest, aby upewnić się, że dane są wprowadzone poprawnie, aby zapewnić prawidłowe funkcjonowanie aplikacji i późniejsze przetwarzanie informacji.


## Tworzenie / Modyfikowanie notatki OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png) ![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Aby edytować, komentować lub zamykać notatki OSM, włącz ich wyświetlanie na mapie w [menu Konfiguruj mapę](../map/configure-map-menu.md).

- Funkcja Notatki OSM pozwala dodawać notatki do mapy. W tych notatkach możesz opisywać błędy lub pisać o brakujących informacjach w danych OpenStreetMap. Ty i inni użytkownicy możecie zostawiać komentarze do Twoich notatek.
- Możesz pomóc innym użytkownikom, sprawdzając ich pytania lub problemy, dodając komentarze, a następnie zamykając rozwiązane notatki.
- Więcej o notatkach OpenStreetMap przeczytasz [tutaj](https://wiki.openstreetmap.org/wiki/Notes).

Aby utworzyć notatkę, nie musisz logować się do OpenStreetMap.org, możesz wysłać ją anonimowo.

- Dotknij mapy w miejscu, gdzie ma zostać umieszczona nowa notatka OSM (lub dotknij niezaładowanej notatki) i wybierz [Akcje](../map/map-context-menu.md#actions).
- Jeśli chcesz dodać informacje do istniejącej notatki lub niezaładowanej notatki, edytować komentarz lub zamknąć notatkę, dotknij notatki OSM na mapie i wybierz [wymaganą akcję](../map/map-context-menu.md#-comment--close-osm-note).
- Możesz przesłać zmiany, gdy tylko będziesz dostępny online. Możesz również cofnąć zmiany, zanim zostaną przesłane.

:::info
Przesłane notatki OSM nie są widoczne na mapach OsmAnd w trybie offline.
:::


## Ślad GPS {#gps-track}

Zarejestrowane ślady GPS są przydatne do:

- **Mapujących**. Ślady mogą być używane do mapowania wszelkiego rodzaju ścieżek.
- **Nawigacji**. Na podstawie przesłanych danych pliku GPX, aplikacje nawigacyjne i specjalne urządzenia mogą obliczać ślady.
- **Udostępniania informacji** o zarejestrowanych śladach i trasach na [mapach opartych na OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info UWAGA
Twoje ślady zostaną dodane do [śladów OSM](https://www.openstreetmap.org/traces) w ciągu godziny, gdzie będą dostępne dla Ciebie i innych do przeglądania, wyszukiwania i używania.
:::


### Prześlij ślad GPS {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OpenStretMap editing plugin GPX to OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

Aby [przesłać ślad GPS](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), wykonaj poniższe kroki:

- Znajdź wymagany ślad w [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> zakładce*](../personal/tracks/manage-tracks.md).
- Dotknij *menu z trzema kropkami* obok nazwy śladu i wybierz *Eksportuj*.

**Ustawienia:**

- **<Translate android="true" ids="shared_string_description"/>**. Pozwala dodać opis do śladu. Opis dotyczy wszystkich wybranych śladów. Jeśli nic nie wpiszesz w polu, jako opisy używane są nazwy poszczególnych śladów.
- **<Translate android="true" ids="gpx_tags_txt"/>**. Ten element w sekcji ustawień pozwala dodać tagi do identyfikacji śladu. Domyślnym tagiem jest "osmand", możesz wprowadzić dodatkowe tagi oddzielone przecinkami.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Widoczność śladu dla użytkowników OSM:
   - *Publiczny* oznacza, że ślad jest publicznie dostępny i wyświetlany w surowej formie w Twoich śladach GPS, listach śladów GPS i listach śladów z sygnaturami czasowymi. Dane przesyłane przez API nie są powiązane z Twoją stroną śladu. Sygnatury czasowe punktów śladu są niedostępne za pośrednictwem publicznego API GPS, a punkty śladu nie są uporządkowane chronologicznie.
   - *Identyfikowalny* oznacza, że ślad będzie publicznie wyświetlany w Twoich punktach śladu GPS i publicznych listach śladów GPS, co oznacza, że inni użytkownicy będą mogli pobrać surowy ślad i powiązać go z Twoją nazwą użytkownika. Publiczne dane punktów śladu z sygnaturami czasowymi z API GPS przekazywane przez API punktów śladu będą prowadzić do Twojej oryginalnej strony śladu.
   - *Śledzalny* oznacza, że ślad nie jest wyświetlany na listach publicznych, ale przetworzone punkty śladu z sygnaturami czasowymi z niego (które nie mogą być bezpośrednio z Tobą powiązane) są ładowane z publicznego API GPS.
   - *Prywatny* oznacza, że ślad nie jest wyświetlany na listach publicznych, ale punkty śladu z niego w niechronologicznym porządku są dostępne za pośrednictwem publicznego API GPS bez sygnatur czasowych.
- **<Translate android="true" ids="login_account"/>** - [konto OSM](https://www.openstreetmap.org/login).

:::info
Możesz wybrać więcej niż jeden ślad do przesłania do OSM. Aby to zrobić, dotknij ikony *Prześlij do OpenStreetMap* na dole ekranu, wybierz ślady za pomocą pola wyboru, dotknij *Prześlij*, a następnie *Kontynuuj*.
:::

### Generuj plik OBF {#generate-obf-file}

Możesz utworzyć plik OBF za pomocą [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator), jeśli masz dużą bazę danych śladów GPX. Jest to kolekcja śladów z osmand.net z tagiem 'gpsies', kolekcja pobranych śladów z OpenStreetMap lub Twoja własna kolekcja.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style map)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: maj 2024*