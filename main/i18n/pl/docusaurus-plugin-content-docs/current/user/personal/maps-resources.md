---
source-hash: 7709beb792400753a1f976b6fb02017857a5da0e9d06e235ddb18b6b45b4fb49
sidebar_position: 2
title: Mapy i zasoby
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

W sekcji **Mapy i zasoby** możesz zarządzać mapami *online* i *offline* oraz innymi zasobami używanymi w OsmAnd. Możesz na przykład pobierać, usuwać, zmieniać nazwy, czyścić pamięć podręczną, aktualizować i sprawdzać rozmiar oraz wykonywać różne inne czynności.

OsmAnd działa z dwoma typami map: [mapami wektorowymi](../map/vector-maps.md) i [mapami rastrowymi](../map/raster-maps.md). Zakładka [Lokalne](#localne) przechowuje wszystkie mapy i zasoby. Dostępne typy map można pobrać z zakładki [Pobrane](#pobrane). W zakładce [Aktualizacje](#aktualizacje) możesz pobrać mapy dostępne do aktualizacji i korzystać z [aktualizacji na żywo](#osmand-live). Możesz również uzyskać dostęp do funkcji [Dodatkowe mapy](#dodatkowe-mapy), aby tworzyć własne typy map.

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

![Menu pobierania map iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Mapy regionalne Android](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Pobieranie map do aplikacji OsmAnd jest ważnym krokiem, który decyduje o funkcjonalności i wydajności nawigacji.

#### Bezpłatne funkcje dla wybranej lokalizacji {#free-features-for-the-selected-location}

- **Mapa standardowa**. Zapewnia przegląd obszaru na podstawie źródła [OpenStreetMap](https://www.openstreetmap.org/) i zawiera mapę, trasy, adresy, POI oraz informacje o transporcie publicznym. Dotknięcie otwiera ekran z listą regionów wybranego kraju i informacjami o tym, ile miejsca zajmą te mapy na Twoim urządzeniu.  
- **Tylko drogi** (*tylko Android*). Mapa zawiera tylko informacje o siatce dróg, aby skupić się na trasach i infrastrukturze drogowej. Usuwając szczegóły, takie jak budynki i punkty zainteresowania, jest mniejsza niż mapa standardowa. Dotknięcie otwiera ekran z listą regionów w wybranym kraju i informacjami o tym, ile miejsca zajmą te mapy na Twoim urządzeniu.

#### Płatne funkcje dla wybranej lokalizacji {#paid-features-for-the-selected-location}

- [Warstwice](../plugins/topography.md#contour-lines). Mapa zawierająca warstwice wysokości do wizualizacji terenu.
- [Mapa terenu (Cieniowanie i nachylenie)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Mapy z cieniami lub nachyleniami dostarczają dodatkowych informacji o terenie.
- [Mapa terenu (3D)](../plugins/topography.md#3d-relief). Trójwymiarowa reprezentacja terenu dla lepszego zrozumienia otoczenia. Musi być włączony [silnik renderowania map w wersji 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- [Wikipedia](../plugins/wikipedia.md). Mapa wektorowa z geopozycjonowanymi artykułami [Wikipedii](https://wikipedia.org/) o punktach orientacyjnych lub dodatkowymi informacjami o miejscach.
- [Prognoza pogody](../plugins/weather.md). Informacje o pogodzie na mapie dla łatwego planowania trasy.
- [Mapy rastrowe online](../map/raster-maps.md). Mapy są dostępne do pobrania online i mogą być instalowane jako mapy innych firm lub kafelki OsmAnd.

#### Mapa przeglądowa świata {#world-overview-map}

Wersje OsmAnd do 3.8 oferują pobranie mapy świata, dzięki czemu można ją przeglądać w skali planetarnej. W nowszych wersjach OsmAnd, lekka *Mini Mapa Świata* jest dołączona do aplikacji. Aplikacja umożliwia pobranie większej mapy przeglądowej świata z bardziej szczegółowymi informacjami.


## Mapy i zasoby {#maps--resources}

Sekcja **Mapy i zasoby** w *menu głównym* aplikacji OsmAnd zapewnia dostęp do zarządzania mapami i innymi ważnymi danymi.

- Zakładka [Pobierz](#downloads) mapy umożliwia pobieranie map do użytku offline, zapewniając ich dostępność bez internetu.  
- W zakładce [Lokalne](#local) mapy można znaleźć i zarządzać szczegółowymi informacjami o mapach i miejscach, w tym ulubionymi, śladami, notatkami OSM i innymi elementami, które masz na swoim urządzeniu.  
- Zakładka [Aktualizacje](#updates) umożliwia użytkownikom uzyskanie informacji o dostępnych aktualizacjach map i innych zasobów, zapewniając, że dane są aktualne i dokładne.

***Ogólne działania, które możesz wykonać w Mapach i zasobach***:

- **Odśwież**. Ponownie ładuje listę dostępnych map z serwera OsmAnd.  
- **Szukaj**. Wyszukaj mapy według **kraju**, **prowincji** lub dużego **miasta**.  
- **Pamięć urządzenia**. Pokazuje na wskaźniku, ile pamięci jest dostępnej do pobrania i ile map można pobrać za darmo. W zależności od zakładki, czasami wyświetlane są nieco inne dane.  
- **Licznik map** (*Wersja darmowa* jest widoczna tylko, jeśli nie masz [subskrypcji](../purchases/index.md)). Wskaźnik z podziałkami pokazuje, ile map pozostało do pobrania z *7 dostępnych*.

:::info miesięczne aktualizacje map
Należy pamiętać, że miesięczne aktualizacje map są traktowane jako kolejne pobranie mapy i są odejmowane od dostępnej liczby bezpłatnych pobrań map.
:::


### Pobrane {#downloads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menu pobierania map ogólne Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu pobierania map ogólne iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Zakładka **Pobierz** umożliwia pobieranie różnych typów map z serwerów OsmAnd, wymagając aktywnego połączenia z Internetem.

***Aby pobrać mapę:***

- **Otwórz zakładkę Pobierz**, znajdź wymaganą sekcję i dotknij odpowiedniego folderu, aby zobaczyć dostępne mapy.

- **Dostępne mapy** wyświetlają ikony pobierania, dla pojedynczej mapy lub dla [wielu map](#multiple-map-loading).

- **Pobrane mapy** pokazują zieloną ikonę z przyciskiem menu:  
    - *Android*: Menu z trzema kropkami.  
    - *iOS*: Ikona informacji (I).

- **Mapy w trakcie ładowania** mają ikonę wizualizującą ten proces. Aby anulować pobieranie, dotknij ikony. Aby wyświetlić listę map w kolejce pobierania i anulować pobieranie, dotknij paska pobierania w obszarze informacji o pamięci urządzenia na kartach Pobieranie i Aktualizacje.

- **W wersji darmowej**, mapy niedostępne do pobrania pokazują ikonę [POBIERZ](../purchases/index.md), prowadzącą do strony zakupu.

***Zakładka pobierania składa się z grup map:***

- **Informacje o pamięci urządzenia**. Wizualizuj ilość zajętego i wolnego miejsca na urządzeniu.
- **Licznik map** (***Wersja darmowa***). Wyświetla, ile map pozostało do pobrania.
- [Dodatkowe mapy](#extra-maps). Wyświetla dane mapy dla [pakietu niestandardowego](../plugins/custom.md).
- **Regiony**. Lista według kontynentu i regionu świata: *Afryka, Antarktyda, Azja, Australia i Oceania, Ameryka Środkowa, Europa, Ameryka Północna, Rosja i Ameryka Południowa.*
- [Mapy świata](#world-maps). Lista map całego świata: *Korekta wysokości świata (tylko Android)*, *Mapa przeglądowa świata*, *Cały świat (prognoza pogody)*
- [Mapy morskie](../plugins/nautical-charts.md) ([*funkcja płatna*](../purchases/index.md)). Mapy wektorowe z wysokościami jako punkty lub linie.
- [Przewodniki turystyczne (Wikivoyage)](../plan-route/travel-guides.md) ([*funkcja płatna*](../purchases/index.md)). Mapy wektorowe z kolekcją artykułów w formacie HTML i dodatkowo plikami GPX.
- **Inne mapy**. Mapy, których nie można przypisać do bieżącej hierarchii map, ponieważ nie są obsługiwane lub będą dostępne w przyszłych wersjach.
- [Komunikaty głosowe](../navigation/guidance/voice-navigation.md) (*tylko Android*). Pakiety głosowe do odtwarzania komunikatów nawigacyjnych.
- [Czcionki map](../map/vector-maps.md#map-fonts-android) (*tylko Android*). Dodatkowe pliki czcionek wyświetlają tekst na mapie.

#### Mapy świata {#world-maps}

W menu Pobierz mapy znajduje się sekcja **Mapy świata**, która zapewnia dostęp do pobierania różnych map świata, uzupełniając funkcjonalność aplikacji.  

- **Korekta wysokości świata** (*tylko Android*). Poprawia dokładność nawigacji, zwłaszcza w terenie górskim.
- **Mapa przeglądowa świata**. Zapewnia obszerny przegląd powierzchni ziemi, przydatny do długoterminowego planowania tras i swobodnej eksploracji.
- **Cały świat (prognoza pogody)**. Umożliwia pobranie mapy z informacjami o pogodzie.

Informacje o *menu map* i *działaniach* można znaleźć w artykule [Pobierz mapy](../start-with/download-maps.md).


#### Ładowanie wielu map {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu pobierania map ogólne Android](@site/static/img/personal/maps/multiple_maps_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu pobierania map ogólne iOS](@site/static/img/personal/maps/multiple_maps_ios.png)

</TabItem>

</Tabs>

Dla krajów składających się z **wielu map regionów** można skorzystać z masowego ładowania wielu map. Mapy dostępne do tego typu pobierania są wyświetlane z ikonami podwójnej strzałki pobierania i etykietą z liczbą regionów w środku (np. Warstwice / Wszystkie regiony: 10). Możesz wybrać, ile map chcesz pobrać.


### Lokalne {#local}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Zakładka Lokalne Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Zakładka Lokalne Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Menu zakładki Lokalne iOS](@site/static/img/personal/maps/local_tab_ios.png)

</TabItem>

</Tabs>

Zakładka Lokalne zapewnia przegląd wykorzystania pamięci dla wszystkich danych OsmAnd na Twoim urządzeniu. Dane są podzielone na trzy sekcje oznaczone kolorami dla przejrzystości, a elementy są sortowane według rozmiaru od największego do najmniejszego. Każda sekcja wyświetla tylko elementy z pobranymi danymi:

- ***Zasoby*** (*niebieski*).  
    Obejmuje mapy ([Standardowe](../map/vector-maps.md), &nbsp;[Morskie](../plugins/nautical-charts.md), &nbsp;[Topograficzne](../plugins/topography.md), &nbsp;[Pogodowe](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) i [Przewodniki turystyczne](../plan-route/travel-guides.md), &nbsp;[Aktualizacje na żywo](../personal/maps-resources.md#osmand-live), &nbsp;**Tylko drogi**,  &nbsp;[Źródła map](../map/raster-maps.md), &nbsp;[Style renderowania](../map/vector-maps.md#default-map-styles), &nbsp;**Czcionki map, &nbsp;Komunikaty głosowe (nagrane i TTS), &nbsp;Pamięć podręczna**.  

- ***Moje miejsca*** (*żółty*).  
    Obejmuje [Ulubione](../personal/favorites.md), &nbsp;[Ślady](../personal/tracks/manage-tracks.md), &nbsp;[Notatki OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[Edycje OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[Notatki A/V](../plugins/audio-video-notes.md), &nbsp;[Znaczniki mapy](../personal/markers.md), &nbsp;[Historia](../personal/global-settings.md#history), &nbsp;*Plan podróży*.  

- ***Ustawienia*** (*zielony*).  
    Obejmuje [Profile](../personal/profiles.md), &nbsp;[Kolory](../personal/color-palette-schemes.md) i **inne** konfiguracje aplikacji.


#### Przeglądanie danych {#viewing-data}

![Przegląd kategorii lokalnych Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Opcje kategorii lokalnych Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Dotknij dowolnego elementu w zakładce **Lokalne**, aby otworzyć jego szczegółową listę. U góry tej listy, wizualny panel wyświetla, ile miejsca zajmuje wybrany typ danych w stosunku do całkowitej pamięci OsmAnd.

***Dostępne działania:***

- **Szukaj**. Znajdź konkretne dane według nazwy w wybranym folderze.
- **Menu z trzema kropkami**:  
    ***Wybierz***. Wybierz wiele elementów do działań takich jak *Usuń*, *Dezaktywuj* lub *Aktywuj*.  
    ***Importuj***. Uzyskaj dostęp do pamięci urządzenia, aby importować pliki.
- [Opcja sortowania](#sorting-options). Sortuj elementy według nazwy, kraju, daty lub rozmiaru (dostępność zależy od typu danych).


#### Menu dla elementów z listy {#menu-for-items-from-the-list}

![Działania elementów kategorii lokalnych 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Działania elementów kategorii lokalnych](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Każdy element na liście oferuje *menu z trzema kropkami* z opcjami:

- **Info**. Wyświetl szczegółowe informacje o *[elemencie danych](#local-data-item-overview)*.
- **Eksportuj**. Zapisz dane do pliku za pomocą *Ustawienia → Eksportuj do pliku*.

***Dodatkowe opcje dla map:***

- **Dezaktywuj**. Wyłącz mapy wektorowe bez ich usuwania. Pozostają one przechowywane, ale nie są używane do nawigacji, wyszukiwania ani wyznaczania tras. Zmniejsza to obciążenie urządzenia i przyspiesza działanie OsmAnd.
- **Aktualizuj**. Pobierz najnowszą wersję mapy.
- **Zmień nazwę**. Dostosuj nazwę mapy dla lepszej identyfikacji.
- **Usuń**. Usuń mapę z urządzenia.
- **Edytuj** (dla map online). Modyfikuj konfigurację mapy online.

#### Menu elementów źródła mapy {#map-source-items-menu}

![Menu elementów źródła mapy](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Każdy element na liście [Źródła mapy](../map/raster-maps.md) udostępnia ustawienia do zarządzania rastrową mapą online przechowywaną na Twoim urządzeniu. Otwórz *menu z trzema kropkami*, aby uzyskać dostęp do dostępnych działań:

- [Informacje](#local-data-item-overview). Wyświetla ogólne szczegóły dotyczące wybranego źródła mapy, w tym format i datę ostatniej aktualizacji.  
- **Oblicz rozmiar**. Szacuje miejsce zajmowane przez buforowane kafelki tego źródła mapy. Jeśli pamięć podręczna przekracza *50 MB*, rozmiar może być wyświetlany jako *≥50 MB* zamiast dokładnej liczby.
- **Wyczyść wszystkie kafelki**. Usuwa wszystkie buforowane kafelki dla wybranego źródła mapy, zwalniając miejsce, jednocześnie zachowując źródło mapy dostępne do przyszłego użytku.  
- **Eksportuj**. Zapisuje konfigurację wybranego źródła mapy w celu utworzenia kopii zapasowej lub udostępnienia.  
- **Usuń**. Usuwa wybrane źródło mapy. To działanie nie wpływa na pobrane mapy offline, ale czyści powiązaną pamięć podręczną.


#### Przegląd lokalnych elementów danych {#local-data-item-overview}

![Przegląd lokalnych elementów danych](@site/static/img/settings/local_category_overview_2.png) ![Przegląd lokalnych elementów danych 2](@site/static/img/settings/local_category_overview_1.png)  

Podczas przeglądania lokalnego elementu danych widzisz:

- **Typ**. Typ danych z listy **Lokalne**.
- **Utworzono**. Data dodania elementu.
- **Rozmiar**. Rozmiar elementu w MB.

Dostępne **Działania** zależą od typu danych i mogą obejmować **Dezaktywuj**, **Aktualizuj**, **Zmień nazwę**, **Eksportuj** i **Usuń**.

#### Opcje sortowania {#sorting-options}

![Opcje sortowania danych lokalnych](@site/static/img/settings/local_sorting_options_andr_1.png)

Użyj opcji sortowania, aby uporządkować dane mapy:

- **Nazwa (A - Z / Z - A)**. Znajdź elementy alfabetycznie.
- **Nazwa kraju (A - Z / Z - A)**. Uporządkuj mapy geograficznie.
- **Najnowsza data najpierw** / **Najstarsza data najpierw**. Zobacz aktualizacje lub starsze wersje.
- **Duży rozmiar najpierw** / **Mały rozmiar najpierw**. Zidentyfikuj duże mapy, aby zwolnić miejsce.


### Aktualizacje {#updates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Menu map Aktualizuj mapy Android](@site/static/img/personal/maps/maps_update_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Menu map Aktualizuj mapy iOS](@site/static/img/personal/maps/maps_update_ios.png)

</TabItem>

</Tabs>

Zakładka **Aktualizacje** umożliwia comiesięczne odświeżanie map OsmAnd. Użyj przycisku *Aktualizuj wszystko*, aby zaktualizować wszystkie mapy jednocześnie, lub aktualizuj poszczególne mapy w miarę potrzeb. Mapy standardowe i tylko drogowe są zazwyczaj wydawane dwa tygodnie w każdym miesiącu. Aby uzyskać godzinne aktualizacje, sprawdź status subskrypcji [OsmAnd Live](#osmand-live). Jeśli jest włączona, sekcja **Aktualizacje na żywo** pojawi się u góry zakładki, pod wskaźnikiem pamięci urządzenia.


### Dodatkowe mapy {#extra-maps}

OsmAnd obsługuje transfer ustawień i danych specyficznych dla profilu, w tym plików renderowania, czcionek, tras, map i niestandardowych wtyczek. Utwórz niestandardowy folder mapy za pomocą pliku wtyczki `.osf` (skompresowany format `.zip`).

Aby zaimportować plik:

1. Znajdź plik `.osf` w pamięci urządzenia, komunikatorze lub poczcie e-mail.
2. Dotknij, aby otworzyć go za pomocą OsmAnd.
3. Wtyczka pojawi się w sekcji **Lista wtyczek**, gdzie będzie można ją aktywować.
4. Odpowiedni folder pojawi się następnie w sekcji **Dodatkowe mapy** na karcie [Pobrane](#downloads).

Więcej informacji znajdziesz w artykule [**Niestandardowy pakiet**](../plugins/custom).


## OsmAnd Live {#osmand-live}

:::tip Zakup
OsmAnd Live to funkcja płatna.  
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

**OsmAnd Live** zapewnia częste, przyrostowe aktualizacje map poprzez [subskrypcję](../purchases/index.md) lub jest bezpłatne dla [współpracowników OSM](#free-for-osm-mappers). Aktualizacje odbywają się co 15 minut na serwerach OsmAnd i są dostępne do pobrania co godzinę, codziennie lub co tydzień. Te aktualizacje zużywają minimalną ilość pamięci — około 2-4% pełnego rozmiaru mapy miesięcznie.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Kluczowe cechy:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Aktualizacje na żywo**. Zarządzaj za pomocą przełącznika w ustawieniach.
- Przycisk **&#8230; &#124;** (*Android*) / Przycisk **&#62;** (*iOS*). Otwórz ustawienia *OsmAnd live*.
- **Przełącznik**(*Android*) / Przycisk **&#43;** (*iOS*). Dodaj mapy do *aktualizacji na żywo*.
- **<Translate android="true" ids="update_frequency"/>**. Wybierz częstotliwość aktualizacji mapy (co godzinę, codziennie lub co tydzień).
- **<Translate android="true" ids="update_now"/>**. Rozpocznij aktualizację mapy *OsmAnd live*.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Rozmiar *aktualizacji na żywo*.
- Przycisk **Kosz**(*Android*). Usuń wszystkie otrzymane *aktualizacje na żywo* dla bieżącej mapy.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Zarządzaj pobieraniem *aktualizacji na żywo* przez połączenie Wi-Fi.


### Znaczniki czasu aktualizacji {#update-timestamps}

- **Ostatnia aktualizacja OSM.**  
    Wskazuje ostatnio przetworzone zmiany OpenStreetMap.
- **Region zaktualizowany.**  
    Pokazuje, kiedy ostatnio przetworzono aktualizacje dla danego regionu.
- **Następna aktualizacja.**  
    Wyświetla zaplanowany czas następnego sprawdzenia aktualizacji.


### Ograniczenia OsmAnd Live {#limitations-of-osmand-live}

Zmiany adresów są obsługiwane tylko poprzez miesięczne aktualizacje.
Zaktualizowane drogi nie posiadają szczegółów wysokości, co wpływa na wykresy nachylenia.
Usunięte lub zmienione odniesienia do tras mogą nadal pojawiać się nieprawidłowo.


### Bezpłatne dla mapujących OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live dla mapujących](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live dla mapujących](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Współpracownicy [OpenStreetMap](https://openstreetmap.org/) kwalifikują się do bezpłatnego, nieograniczonego pobierania map i aktualizacji na żywo. Aby się zakwalifikować:
Włącz [wtyczkę edycji OpenStreetMap](../plugins/osm-editing.md).
[Zaloguj się](../plugins/osm-editing.md#settings) za pomocą swojej nazwy użytkownika OSM.
Utrzymaj co najmniej [**30 edycji**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) w ciągu ostatnich dwóch miesięcy.

## Powiązane artykuły {#related-articles}

- [Profile (Ustawienia)](./profiles.md)
- [Import / Eksport](../personal/import-export.md)

### Typowe problemy i rozwiązania {#common-issues-and-solutions}

- Nawigacja głosowa. [(sprawdź)](../troubleshooting/navigation.md#voice-navigation)
- Jak usunąć historię wyszukiwania. [(sprawdź)](../troubleshooting/general.md#how-to-delete-search-history)
- Aby uzyskać dodatkowe rozwiązania problemów, odwiedź: [Mapy i dane](../troubleshooting/maps-data.md)

> *Ostatnia aktualizacja: luty 2025*