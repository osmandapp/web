---
source-hash: ab1e41d88d45cf90e8e97f0efc04df7c72257821a9279cc6ccbc4b8571774469
sidebar_position: 2
title:  Mapy i zasoby
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

W sekcji **Mapy i zasoby** można zarządzać mapami *Online* i *Offline* oraz innymi zasobami używanymi w OsmAnd. Można na przykład pobierać, usuwać, zmieniać nazwy, czyścić pamięć podręczną, aktualizować i sprawdzać rozmiar oraz wykonywać różne działania.

OsmAnd działa z dwoma rodzajami map: [mapami wektorowymi](../map/vector-maps.md) i [mapami rastrowymi](../map/raster-maps.md). Zakładka [Lokalne](#local-menu) przechowuje wszystkie mapy i zasoby. Dostępne typy map można pobrać z zakładki [Pobrane](#downloads-menu). W zakładce [Aktualizacje](#updates-menu) można pobrać mapy, które są dostępne do aktualizacji i korzystać z [Aktualizacji na żywo](#live-updates). Można również uzyskać dostęp do funkcji [Dodatkowe mapy](#extra-maps), aby tworzyć własne typy map.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Menu map Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu map iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Typy map {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu pobierania map Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Mapy regionalne Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu pobierania map iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Mapy regionalne iOS](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Pobieranie map do aplikacji OsmAnd jest ważnym krokiem, który decyduje o funkcjonalności i wydajności nawigacji.

### Darmowa zawartość map {#free-map-content}

- **Mapa standardowa**. Zapewnia przegląd obszaru na podstawie źródła [OpenStreetMap](https://www.openstreetmap.org/) i zawiera mapę, trasy, adresy, POI oraz informacje o transporcie publicznym. Dotknięcie otwiera ekran z listą regionów wybranego kraju i informacją o tym, ile miejsca te mapy zajmą na urządzeniu.  
- **Tylko drogi** (*tylko Android*). Mapa zawiera tylko informacje o siatce dróg, aby skupić się na trasach i infrastrukturze drogowej. Dzięki usunięciu szczegółów, takich jak budynki i punkty szczególne, jest mniejsza niż standardowa mapa. Dotknięcie otwiera ekran z listą regionów w wybranym kraju i informacją o tym, ile miejsca te mapy zajmą na urządzeniu.
- **Mapa przeglądowa świata**. Wersje OsmAnd do 3.8 oferowały pobranie mapy świata, aby można ją było przeglądać w skali planetarnej. W nowszych wersjach OsmAnd lekka *Mini mapa świata* jest dołączona do aplikacji. Aplikacja pozwala pobrać większą, przeglądową mapę świata z bardziej szczegółowymi informacjami. 

:::info comiesięczne aktualizacje map
Należy pamiętać, że comiesięczne aktualizacje map są traktowane jako kolejne pobranie mapy i są odejmowane od dostępnej liczby bezpłatnych pobrań map.
:::

### Płatna zawartość map {#paid-map-content}

- [Linie konturowe](../plugins/topography.md#contour-lines). Mapa zawierająca warstwice wysokości w celu wizualizacji terenu.
- [Mapa terenu (cieniowanie i nachylenie)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Mapy z cieniowaniem lub nachyleniem dostarczają dodatkowych informacji o terenie.
- [Mapa terenu (3D)](../plugins/topography.md#3d-relief). Trójwymiarowa reprezentacja terenu dla lepszego zrozumienia otoczenia. Silnik renderowania mapy [Wersja 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) musi być włączony.
- [Głębiny i kontury morskie](../plugins/nautical-charts.md). Morskie mapy żeglugowe pokazujące linie brzegowe, głębokości, pomoce nawigacyjne, porty i zagrożenia dla bezpiecznej żeglugi i żeglarstwa.
- [Wikipedia](../plugins/wikipedia.md). Mapa wektorowa z artykułami [Wikipedii](https://wikipedia.org/) oznaczonymi geograficznie, dotyczącymi punktów orientacyjnych lub dodatkowymi informacjami o miejscach.
- [Wikivoyage](../plan-route/travel-guides.md). Dostarcza mapy wektorowe z wirtualnymi przewodnikami turystycznymi, oferując użytkownikom cenne informacje, rekomendacje i wskazówki.
- [Prognoza pogody](../plugins/weather.md). Informacje o pogodzie na mapie ułatwiające planowanie trasy.


## Menu Pobrane {#downloads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Ogólne menu pobierania map Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Ogólne menu pobierania map iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Zakładka **Pobrane** umożliwia pobieranie różnych typów map z serwerów OsmAnd, co wymaga aktywnego połączenia z Internetem.

***Aby pobrać mapę:***

- **Otwórz zakładkę Pobrane**, zlokalizuj wymaganą sekcję i dotknij odpowiedniego folderu, aby zobaczyć dostępne mapy.

- **Dostępne mapy** wyświetlają ikony pobierania, dla pojedynczej mapy lub dla [wielu map](#multiple-map-loading).

- **Pobrane mapy** pokazują zieloną ikonę z przyciskiem menu:  
    - *Android*: Menu z trzema kropkami.  
    - *iOS*: Ikona informacji (i).

- **Mapy w trakcie ładowania** mają ikonę wizualizującą ten proces. Aby anulować pobieranie, dotknij ikony. Aby wyświetlić listę map w kolejce pobierania i anulować pobieranie, dotknij paska pobierania w obszarze informacji o pamięci urządzenia w zakładkach Pobrane i Aktualizacje.

- **W wersji bezpłatnej** mapy niedostępne do pobrania pokazują ikonę [POBIERZ](../purchases/index.md), prowadzącą do strony zakupu.

***Zakładka Pobrane składa się z grup map:***

- **Informacje o pamięci urządzenia**. Wizualizacja ilości zajętego i wolnego miejsca na urządzeniu.
- **Licznik map** (***Wersja bezpłatna***). Wyświetla, ile map pozostało do pobrania.
- [Dodatkowe mapy](#extra-maps). Wyświetla dane map dla [pakietu niestandardowego](../plugins/custom.md).
- **Regiony**. Lista według kontynentów i regionów świata: *Afryka, Antarktyda, Azja, Australia i Oceania, Ameryka Środkowa, Europa, Ameryka Północna, Rosja i Ameryka Południowa.*
- [Mapy świata](#world-maps). Lista map całego świata: *Korekta wysokości dla świata (tylko Android)*, *Mapa przeglądowa świata*, *Cały świat (Prognoza pogody)*
- [Mapy morskie](../plugins/nautical-charts.md) ([*funkcja płatna*](../purchases/index.md)). Mapy wektorowe z wysokościami w postaci punktów lub linii.
- [Przewodniki turystyczne (Wikivoyage)](../plan-route/travel-guides.md) ([*funkcja płatna*](../purchases/index.md)). Mapy wektorowe z kolekcją artykułów w formacie HTML oraz dodatkowo plikami GPX.
- **Inne mapy**. Mapy, których nie można przypisać do bieżącej hierarchii map, ponieważ nie są obsługiwane lub będą dostępne w przyszłych wersjach.
- [Komunikaty głosowe](../navigation/guidance/voice-navigation.md) (*tylko Android*). Pakiety głosowe do odtwarzania komunikatów nawigacyjnych.
- [Czcionki mapy](../map/vector-maps.md#map-fonts-android) (*tylko Android*). Dodatkowe pliki czcionek wyświetlające tekst na mapie.
- **Wyszukaj miasto lub region** (*tylko Android*). Narzędzie szybkiego wyszukiwania na górze zakładki pobierania (ikona lupy) do znajdowania potrzebnego miasta lub regionu.

### Mapy świata {#world-maps}

W menu Pobierz mapy znajduje się sekcja **Mapy świata**, która zapewnia dostęp do pobierania różnych map świata, uzupełniając funkcjonalność aplikacji.  

- **Korekta wysokości dla świata** (*tylko Android*). Ten plik zawiera korekty wysokości w celu skompensowania krzywizny planety.
- **Mapa przeglądowa świata**. Zapewnia rozległy przegląd powierzchni ziemi, przydatny do długoterminowego planowania tras i swobodnej eksploracji.
- **Cały świat (Prognoza pogody)**. Umożliwia pobranie mapy z informacjami o pogodzie.


### Dodatkowe mapy {#extra-maps}

OsmAnd obsługuje transfer ustawień i danych specyficznych dla profilu, w tym plików renderujących, czcionek, tras, map i niestandardowych wtyczek. Utwórz niestandardowy folder map za pomocą pliku wtyczki `.osf` (skompresowany format `.zip`).

Aby zaimportować plik:

1. Zlokalizuj plik `.osf` w pamięci urządzenia, komunikatorze lub e-mailu.
2. Dotknij, aby otworzyć go za pomocą OsmAnd.
3. Wtyczka pojawi się w sekcji **Lista wtyczek**, gdzie można ją aktywować.
4. Odpowiedni folder pojawi się następnie w sekcji **Dodatkowe mapy** w zakładce [Pobrane](#downloads-menu).

Przeczytaj więcej w artykule [**Pakiet niestandardowy**](../plugins/custom).


### Pobieranie wielu map {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ogólne menu pobierania map Android](@site/static/img/personal/maps/multiple_maps_andr.png) ![Menu odznaczania Android](@site/static/img/personal/maps/multiple_maps_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ogólne menu pobierania map iOS](@site/static/img/personal/maps/multiple_maps_ios.png) ![Menu odznaczania iOS](@site/static/img/personal/maps/multiple_maps_2_ios.png)

</TabItem>

</Tabs>

Dla krajów składających się z **wielu map regionalnych** można użyć masowego ładowania wielu map. Mapy dostępne do tego typu pobierania są wyświetlane z ikonami podwójnej strzałki pobierania i etykietą z liczbą regionów wewnątrz (np. Linie konturowe / Wszystkie regiony: 10). Możesz wybrać, ile map chcesz pobrać.


## Menu Lokalne {#local-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Zakładka Lokalne Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Zakładka Lokalne Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

Zakładka Lokalne zapewnia przegląd wykorzystania pamięci dla wszystkich danych OsmAnd na urządzeniu. Dane są podzielone na trzy sekcje oznaczone kolorami dla przejrzystości, z elementami posortowanymi według rozmiaru od największego do najmniejszego. Każda sekcja wyświetla tylko elementy z pobranymi danymi:

- ***Zasoby*** (*niebieski*).  
    Obejmuje mapy ([Standardowe](../map/vector-maps.md), &nbsp;[Morskie](../plugins/nautical-charts.md), &nbsp;[Topograficzne](../plugins/topography.md), &nbsp;[Pogodowe](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) i [Przewodniki turystyczne](../plan-route/travel-guides.md), &nbsp;[Aktualizacje na żywo](../personal/maps-resources.md#live-updates), &nbsp;**Tylko drogi**,  &nbsp;[Źródła map](../map/raster-maps.md), &nbsp;[Style renderowania](../map/vector-maps.md#default-map-styles), &nbsp;**Czcionki map, &nbsp;Komunikaty głosowe (nagrane i TTS), &nbsp;Pamięć podręczna**.  

- ***Moje miejsca*** (*żółty*).  
    Obejmuje [Ulubione](../personal/favorites.md), &nbsp;[Trasy](../personal/tracks/manage-tracks.md), &nbsp;[Notatki OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[Edycje OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[Notatki A/V](../plugins/audio-video-notes.md), &nbsp;[Znaczniki mapy](../personal/markers.md), &nbsp;[Historia](../personal/global-settings.md#history), &nbsp;*Plan podróży*.  

- ***Ustawienia*** (*zielony*).  
    Obejmuje [Profile](../personal/profiles.md), &nbsp;[Kolory](../personal/color-palette-schemes.md) i **Inne** konfiguracje aplikacji.

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Menu zakładki Lokalne iOS](@site/static/img/personal/maps/local_tab_ios.png)

Zakładka Lokalne zapewnia przegląd wykorzystania pamięci dla danych map i zasobów na urządzeniu. Pasek pamięci na górze wyświetla trzy kategorie:

- ***Zielony***. Całkowita używana pamięć urządzenia.
- ***Pomarańczowy***. Część używanej pamięci zajmowana przez pobrane pliki OsmAnd.
- ***Szary***. Wolna pamięć dostępna na urządzeniu.

Poniżej paska pamięci wyświetlana jest lista wszystkich pobranych map i zasobów OsmAnd, w tym ich typ i rozmiar pliku. Mapy online nie są wliczane do paska pamięci, ponieważ są przesyłane strumieniowo i tylko tymczasowo buforowane.

</TabItem>

</Tabs>


### Przeglądanie danych {#viewing-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Przegląd kategorii lokalnych Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Opcje kategorii lokalnych Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Dotknij dowolnego elementu w zakładce **Lokalne**, aby otworzyć jego szczegółową listę. Na górze tej listy panel wizualny pokazuje, ile miejsca zajmuje wybrany typ danych w stosunku do całkowitej pamięci OsmAnd.

***Dostępne akcje:***

- **Wyszukaj**. Znajdź określone dane według nazwy w wybranym folderze.
- **Menu z trzema kropkami**:  
    ***Wybierz***. Wybierz wiele elementów do wykonania akcji, takich jak *Usuń*, *Dezaktywuj* lub *Aktywuj*.  
    ***Importuj***. Uzyskaj dostęp do pamięci urządzenia, aby importować pliki.
- **Opcja sortowania**. Sortuj elementy według nazwy, kraju, daty lub rozmiaru (dostępność zależy od typu danych).

Każdy element na liście oferuje *menu z trzema kropkami* z opcjami:

- **Informacje**. Wyświetl szczegółowe informacje w sekcji *[akcje](#actions)*.
- **Eksportuj**. Zapisz dane do pliku poprzez *Ustawienia → Eksportuj do pliku*.

***Dodatkowe opcje dla map:***

- **Dezaktywuj**. Wyłącz mapy wektorowe bez ich usuwania. Pozostają one zapisane, ale nie są używane do nawigacji, wyszukiwania ani wyznaczania tras. Zmniejsza to obciążenie urządzenia i przyspiesza działanie OsmAnd.
- **Aktualizuj**. Pobierz najnowszą wersję mapy.
- **Zmień nazwę**. Dostosuj nazwę mapy dla lepszej identyfikacji.
- **Usuń**. Usuń mapę z urządzenia.
- **Edytuj** (dla map online). Zmodyfikuj konfigurację mapy online.

</TabItem>

<TabItem value="ios" label="iOS">  

![Przeglądanie danych](@site/static/img/personal/maps/viewing_data_ios.png)

Dotknij dowolnego elementu offline w zakładce **Lokalne**, aby otworzyć jego szczegółowe dane w następujący sposób:

- **Typ**. Typ elementu danych, taki jak **Mapa standardowa**, **Wikipedia**, **Linie konturowe** itd.
- **Rozmiar**. Rozmiar elementu w MB.
- **Utworzono**. Data dodania elementu.

W przypadku map online wyświetlany jest tylko typ i rozmiar danych z pamięci podręcznej.

</TabItem>

</Tabs>


### Akcje {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu elementów źródła mapy](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Każdy element na liście [Źródło mapy](../map/raster-maps.md) udostępnia ustawienia do zarządzania mapą rastrową online przechowywaną na urządzeniu. Otwórz *menu z trzema kropkami*, aby uzyskać dostęp do dostępnych akcji:

- **Informacje**. Wyświetla ogólne szczegóły dotyczące wybranego źródła mapy, w tym format i datę ostatniej aktualizacji.  
- **Oblicz rozmiar**. Szacuje pamięć zajmowaną przez buforowane kafelki tego źródła mapy. Jeśli pamięć podręczna przekracza *50 MB*, rozmiar może być wyświetlany jako *≥50 MB* zamiast dokładnej liczby.
- **Wyczyść wszystkie kafelki**. Usuwa wszystkie buforowane kafelki dla wybranego źródła mapy, zwalniając pamięć, jednocześnie zachowując źródło mapy do przyszłego użytku.  
- **Eksportuj**. Zapisuje wybraną konfigurację źródła mapy w celu utworzenia kopii zapasowej lub udostępnienia.  
- **Usuń**. Usuwa wybrane źródło mapy. Ta akcja nie wpływa na pobrane mapy offline, ale czyści powiązaną pamięć podręczną.

Podczas przeglądania lokalnego elementu danych widać:

- **Typ**. Typ danych z listy **Lokalne**.
- **Utworzono**. Data dodania elementu.
- **Rozmiar**. Rozmiar elementu w MB.

Dostępne **Akcje** zależą od typu danych i mogą obejmować **Dezaktywuj**, **Aktualizuj**, **Zmień nazwę**, **Eksportuj** i **Usuń**.

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcje iOS](@site/static/img/personal/maps/local_actions_ios.png)

Dostępne **Akcje** zależą od typu danych:

- Dla **elementów offline** dostępna jest tylko opcja **Usuń**.
- Dla **map online** akcje mogą obejmować **Wyczyść pamięć podręczną**, **Edytuj** i **Usuń**.

</TabItem>

</Tabs>

<!--
The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.


#### Viewing Data {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- [Sorting option](#sorting-options). Sort items by name, country, date, or size (availability depends on the data type).


#### Menu for Items from the List {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[data item](#local-data-item-overview)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

#### Map source items menu {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- [Info](#local-data-item-overview). Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.


#### Local Data Item Overview {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

#### Sorting Options {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use sorting options to organize map data:

- **Name (A - Z / Z - A)**. Locate items alphabetically.
- **Country name (A - Z / Z - A)**. Organize maps geographically.
- **Newest date first** / **Oldest date first**. See updates or older versions.
- **Large size first** / **Small size first**. Identify large maps to free storage space.

-->

## Menu Aktualizacje {#updates-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Menu map Aktualizuj mapy Android](@site/static/img/personal/maps/maps_update_andr.png)

Zakładka **Aktualizacje** umożliwia odświeżenie map i zasobów OsmAnd. Mapy standardowe i tylko z drogami są wydawane raz w miesiącu, zwykle między 2 a 5 dniem, i zawierają dane OpenStreetMap do ostatniego dnia poprzedniego miesiąca (na przykład wydanie październikowe zawiera dane do 30 września). Inne dane, takie jak Wikipedia, mapy terenu lub mapy morskie, mogą mieć inne, nieregularne harmonogramy aktualizacji. Prognoza pogody ma swój własny regularny cykl aktualizacji. Aby uzyskać szczegółowe informacje, zobacz [Pobierz prognozę](../plugins/weather.md#download-forecast). 

Użyj przycisku *Aktualizuj wszystko*, aby zaktualizować wszystkie mapy jednocześnie, lub aktualizuj poszczególne mapy w razie potrzeby. Aby uzyskać cogodzinne aktualizacje, sprawdź status subskrypcji [Aktualizacji na żywo](#live-updates). Jeśli jest włączona, sekcja **Aktualizacje na żywo** pojawi się na górze zakładki, pod wskaźnikiem pamięci urządzenia.

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Menu map Aktualizuj mapy iOS](@site/static/img/personal/maps/maps_update_ios.png) ![Prognoza pogody Aktualizuj mapy iOS](@site/static/img/personal/maps/maps_update_2_ios.png)

Zakładka **Aktualizacje** umożliwia odświeżenie map i zasobów OsmAnd. Mapy standardowe i tylko z drogami są wydawane raz w miesiącu, zwykle między 2 a 5 dniem, i zawierają dane OpenStreetMap do ostatniego dnia poprzedniego miesiąca (na przykład wydanie październikowe zawiera dane do 30 września). Inne dane, takie jak Wikipedia, mapy terenu lub mapy morskie, mogą mieć inne, nieregularne harmonogramy aktualizacji. 

Użyj przycisku *Aktualizuj wszystko*, aby zaktualizować wszystkie mapy jednocześnie, lub aktualizuj poszczególne mapy w razie potrzeby. Aby uzyskać cogodzinne aktualizacje, sprawdź status subskrypcji [Aktualizacji na żywo](#live-updates). Jeśli jest włączona, sekcja **Aktualizacje na żywo** pojawi się na górze zakładki, pod wskaźnikiem pamięci urządzenia.

Zakładka **Aktualizacje** zawiera również sekcję Prognoza pogody. Służy ona do zarządzania prognozami offline dla wybranych krajów:

- Jeśli prognoza nie została jeszcze pobrana, zobaczysz monit o wybranie krajów. Dane prognozy są dostępne na okres do 7 dni.
- Po pobraniu prognozy ekran ***Prognoza offline*** wyświetla listę krajów z informacjami o statusie, w tym czasem ostatniej aktualizacji, okresem ważności i całkowitym rozmiarem danych.
- Dotknięcie kraju otwiera szczegółowe informacje, takie jak czas ostatniej aktualizacji, następna aktualizacja, rozmiar danych i dokładność. Opcje obejmują ***Aktualizuj teraz***, włączanie lub wyłączanie ***Automatycznej aktualizacji*** (Prognoza pogody ma swój własny regularny cykl aktualizacji. Aby uzyskać szczegółowe informacje, zobacz [Pobierz prognozę](../plugins/weather.md#download-forecast).) oraz ***Usuń prognozę***.


</TabItem>

</Tabs>

## Aktualizacje na żywo {#live-updates}

:::tip Zakup
Aktualizacje na żywo to funkcja płatna.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Menu map OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Menu map OsmAnd live edycja Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Menu map OsmAnd live iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Menu map OsmAnd live edycja iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**Aktualizacje na żywo** zapewniają częste, przyrostowe aktualizacje map poprzez [subskrypcję](../purchases/index.md) lub są bezpłatne dla [współtwórców OSM](#free-for-osm-mappers). Aktualizacje pojawiają się co 15 minut na serwerach OsmAnd i można je pobierać co godzinę, codziennie lub co tydzień. Te aktualizacje zużywają minimalną ilość pamięci — około 2-4% pełnego rozmiaru mapy miesięcznie.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Kluczowe cechy:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Aktualizacje na żywo**. Zarządzaj za pomocą przełącznika w ustawieniach.
- Przycisk **&#8230; &#124;** (*Android*) / przycisk **&#62;** (*iOS*). Otwórz ustawienia *Aktualizacji na żywo*.
- **Przełącznik**(*Android*) / przycisk **&#43;** (*iOS*). Dodaj mapy do *aktualizacji na żywo*.
- **<Translate android="true" ids="update_frequency"/>**. Wybierz częstotliwość aktualizacji map (co godzinę, codziennie lub co tydzień).
- **<Translate android="true" ids="update_now"/>**. Rozpocznij *aktualizacje na żywo* dla mapy.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Rozmiar *aktualizacji na żywo*.
- **Przycisk kosza**(*Android*). Usuń wszystkie otrzymane *aktualizacje na żywo* dla bieżącej mapy.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Zarządzaj pobieraniem *aktualizacji na żywo* przez połączenie Wi-Fi.


### Znaczniki czasu aktualizacji {#update-timestamps}

- **Najnowsza aktualizacja OSM.**  
    Wskazuje ostatnie przetworzone zmiany w OpenStreetMap.
- **Region zaktualizowany.**  
    Pokazuje, kiedy ostatnio przetworzono aktualizacje dla danego regionu.
- **Następna aktualizacja.**  
    Wyświetla zaplanowany czas następnego sprawdzenia aktualizacji.


### Ograniczenia aktualizacji na żywo {#limitations-of-live-updates}

Zmiany adresów są obsługiwane tylko poprzez comiesięczne aktualizacje.
Zaktualizowane drogi nie zawierają szczegółów dotyczących wysokości, co wpływa na wykresy nachylenia.
Usunięte lub zmienione odniesienia do tras mogą nadal wyświetlać się nieprawidłowo.


### Bezpłatnie dla maperów OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live dla maperów](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live dla maperów](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Współtwórcy [OpenStreetMap](https://openstreetmap.org/) są uprawnieni do bezpłatnych, nieograniczonych pobrań map i aktualizacji na żywo. Aby się zakwalifikować:
Włącz wtyczkę [Edycja OpenStreetMap](../plugins/osm-editing.md).
[Zaloguj się](../plugins/osm-editing.md#settings) przy użyciu swojej nazwy użytkownika OSM.
Utrzymuj co najmniej [**30 edycji**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) w ciągu ostatnich dwóch miesięcy.

## Powiązane artykuły {#related-articles}

- [Profile (Ustawienia)](./profiles.md)
- [Import / Eksport](../personal/import-export.md)

### Częste problemy i rozwiązania {#common-issues-and-solutions}

- Nawigacja głosowa. [(sprawdź)](../troubleshooting/navigation.md#voice-navigation)
- Jak usunąć historię wyszukiwania. [(sprawdź)](../troubleshooting/general.md#how-to-delete-search-history)
- Aby uzyskać dodatkowe informacje dotyczące rozwiązywania problemów, odwiedź: [Mapy i dane](../troubleshooting/maps-data.md)