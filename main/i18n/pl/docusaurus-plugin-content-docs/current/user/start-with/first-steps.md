---
source-hash: 0cd7fc222e201abda3ee41c3278fe75817181ab14d975d85f25fdb51e7498eae
sidebar_position: 1
title: Pierwsze kroki
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';




## Przegląd {#overview}

Witamy w OsmAnd (OpenStreetMap Automated Navigation Directions)!

Dowiedz się, jak pobierać mapy, jak konfigurować aplikację, jak korzystać z mapy i budować trasę, jak rozpocząć nawigację i jak wyszukiwać interesujące miejsca. Zapoznaj się z kluczowymi punktami polityki prywatności OsmAnd i wymaganymi uprawnieniami.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nawigacja offline Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nawigacja offline iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## Zainstaluj OsmAnd {#install-osmand}

OsmAnd to mobilna aplikacja do map i nawigacji dostępna na **Androida** i **iOS**. Możesz ją pobrać z najpopularniejszych sklepów.

**Sklepy Android**: [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand) i [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App Store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Przeczytaj więcej](../purchases/index.md) o wersjach OsmAnd i zakupach.


## Witamy w OsmAnd {#welcome-to-osmand}

Naszym celem jest stworzenie w pełni funkcjonalnej aplikacji zorientowanej na mapy, którą można wykorzystywać do różnych celów offline i online. Aplikacja posiada wiele funkcji, dzięki czemu nie będziesz musiał przełączać się między różnymi aplikacjami, a wszystko będzie na wyciągnięcie ręki.

- Wyświetlaj mapę świata z dużą ilością szczegółów, wyświetlaną w [różnych stylach mapy](../map/vector-maps.md).
- Wyświetlaj, [wyszukuj](../search/search-poi.md) i zapisuj różne [punkty POI](../map/point-layers-on-map.md).
- [Planuj trasę](../plan-route/create-route.md) samochodem, rowerem, pieszo i łącz w trasy multimodalne.
- Rozpocznij [nawigację głosową](../navigation/guidance/voice-navigation.md) po włączeniu i wyłączeniu ekranu.
- Wzbogać swoją podróż turystyczną o offline [Wikipedię](../plugins/wikipedia.md) i [Wikivoyage](../plan-route/travel-guides.md).
- W pełni dostosuj sposób [wyświetlania mapy](../map/configure-map-menu.md) i [widżetów](../widgets/index.md) wyświetlanych na niej.
- Nawiguj [po trasie](../navigation/setup/route-navigation.md), [po danym śladzie](../navigation/setup/gpx-navigation.md), [transportem publicznym](../navigation/routing/public-transport-navigation.md) i [poza drogami](../navigation/setup/markers-navigation.md).
- Wszystko działa **offline**.
- I nie zapomnij przyczynić się do [OpenStreetMap](https://www.openstreetmap.org/) za pomocą [wtyczki do edycji OSM](../plugins/osm-editing.md).


## Przewodnik po działaniach {#actions-guide}

### Zezwolenie na dostęp do lokalizacji {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Precyzyjna lokalizacja Android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Precyzyjna lokalizacja iOS](@site/static/img/steps/first_start_ios.png) ![Precyzyjna lokalizacja iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Zalecamy udzielenie OsmAnd pozwolenia na otrzymywanie informacji o dokładnej lokalizacji Twojego urządzenia. Nie zbieramy, nie używamy ani nie udostępniamy Twoich prywatnych informacji, dlatego dostęp do dokładnej geolokalizacji jest potrzebny do prawidłowego działania offline wyszukiwania, nawigacji i innych funkcji OsmAnd.


### Jak pobierać mapy {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pokaż na mapie](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pokaż na mapie](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

Aplikacja OsmAnd działa z różnymi typami map, ale może w pełni funkcjonować tylko z pobranymi mapami offline, więc po ekranie *<Translate android="true" ids="get_started"/>* zostaniesz poproszony o [*pobranie mapy*](../start-with/download-maps.md#initial-setup-screen) swojego regionu. Możesz wybrać inny region, przywrócić z [OsmAnd Cloud](../personal/osmand-cloud.md) lub pominąć ten krok i pobrać mapy później.
Inne dostępne opcje pobierania map znajdziesz w [artykule Pobieranie map](../start-with/download-maps.md).

:::note Rozpocznij pracę z mapami offline
OsmAnd nie może działać prawidłowo bez pobranych map offline. Chociaż aplikacja obsługuje mapy [wektorowe](../map/vector-maps.md) i [rastrowe](../map/raster-maps.md), zdecydowanie zaleca się rozpoczęcie pracy z wektorowymi mapami offline, aby wszystkie funkcje, takie jak [Wyszukiwanie](../search/index.md), [Nawigacja](../navigation/index.md) i [Menu kontekstowe](../map/map-context-menu.md) działały prawidłowo.
:::


### Jak pobrać mapy dla całego świata {#how-download-maps-for-the-whole-world}

Chociaż OsmAnd pozwala pobierać mapy dla wszystkich dostępnych regionów, nie ma pojedynczego pakietu do pobrania całego świata naraz. Zamiast tego możesz pobierać pojedyncze mapy krajów lub regionów w zależności od swoich potrzeb.

***Kluczowe punkty:***

- **OsmAnd Pro** i **Maps+** zapewniają **nieograniczone pobieranie map**, ale nadal musisz pobierać mapy region po regionie.
- **Ograniczenia pamięci.** Upewnij się, że Twoje urządzenie ma wystarczająco dużo miejsca przed pobraniem wielu regionów.
- **Automatyczne aktualizacje.** Po pobraniu mapy można aktualizować poprzez *Menu → Mapy i zasoby → Aktualizacje.*


### Jak zmienić język aplikacji {#how-to-change-app-language}

Opcja *Język wyświetlania* służy do zmiany języka całej aplikacji, w tym komunikatów wyskakujących, tekstu wewnętrznego, wiadomości i innych. Do Androida 12, OsmAnd pozwala dostosować język wyświetlania bezpośrednio w aplikacji. Od Androida 13 i na urządzeniach iOS, język wyświetlania można zmienić tylko w ustawieniach systemowych (zobacz, jak zmienić preferencje języka dla poszczególnych aplikacji w [Androidzie](https://developer.android.com/guide/topics/resources/app-languages) i [iOS](https://developer.apple.com/news/?id=u2cfuj88)).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *Ustawienia → Aplikacje → OsmAnd → Język*

![Ustawienia ogólne Język Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Ustawienia → OsmAnd Maps → Język*

![Ustawienia ogólne Język iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Brak opcji ustawienia języków aplikacji
Na niektórych urządzeniach z systemem Android (Xiaomi z Muiu 14) nie ma możliwości indywidualnego ustawienia języków aplikacji w ustawieniach systemowych, więc język OsmAnd można zmienić tylko wraz z językiem całego systemu. Dodatkowe informacje można znaleźć w dyskusji na [GitHubie](https://github.com/osmandapp/OsmAnd/issues/16990).
:::


### Jak zarządzać ustawieniami {#how-to-manage-your-settings}

Możesz zarządzać ustawieniami aplikacji jako [Ustawienia globalne](../personal/global-settings.md) lub jako [Konfiguracja profilu](../personal/profiles.md) za pośrednictwem [Menu głównego](../start-with/main-menu.md). Aplikacja zawiera predefiniowaną listę profili, które można później modyfikować. Każdy profil można traktować jako dostosowaną aplikację mapową do określonych celów. Domyślnie profile służą tylko jako różne tryby nawigacji.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zarządzaj profilem Android](@site/static/img/settings/manage_profile_android.png) ![Konfiguruj profil Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zarządzaj profilem iOS](@site/static/img/settings/manage_profile_ios.png) ![Konfiguruj profil iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Przeczytaj więcej](../personal/global-settings.md) o ustawieniach globalnych.
[Przeczytaj więcej](../personal/profiles.md) o ustawieniach profilu.


### Jak skonfigurować wtyczki {#how-to-configure-plugins}

[Wtyczki](../plugins/index.md#configure-plugin) znacznie rozszerzają funkcjonalność aplikacji. Prawie wszystkie wtyczki mają własne [Akcje mapy](../map/map-context-menu.md), [Warstwy mapy](../map/configure-map-menu.md), [Pobieranie map](../start-with/download-maps.md) i [Ustawienia](../plugins/#plugin-settings).

Możesz włączyć/wyłączyć wtyczki za pośrednictwem [Menu głównego](../start-with/main-menu.md) → [Wtyczki](../plugins/index.md#configure-plugin).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Włącz wtyczki Android](@site/static/img/settings/plugins_enable_android.png) ![Przykład wtyczki Android](@site/static/img/settings/plugin_example_android.png)

Aby włączyć / wyłączyć wtyczki, przejdź do:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> → &#65049; → Włącz

</TabItem>

<TabItem value="ios" label="iOS">

![Włącz wtyczki iOS](@site/static/img/settings/plugins_enable_ios.png) ![Przykład wtyczki iOS](@site/static/img/settings/plugin_example_ios.png)

Aby włączyć / wyłączyć wtyczki, przejdź do:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Przeczytaj więcej](../plugins/index.md#configure-plugin) o wtyczkach OsmAnd.


### Jak korzystać z mapy {#how-to-use-a-map}

Mapa jest podstawowym elementem OsmAnd i ważne jest, aby wiedzieć, [jak jej używać](../map/interact-with-map.md) (gesty, przyciski itp.). Możesz [skonfigurować mapę](../map/configure-map-menu.md) do swoich potrzeb: [zmienić styl mapy](../map/configure-map-menu.md#map-style-parameters), skonfigurować różne [warstwy mapy](../map/configure-map-menu.md#map-layers), takie jak ulubione, POI, transport publiczny, ślady, linie konturowe, cieniowanie terenu i inne.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Konfiguruj mapę Android](@site/static/img/settings/configure_map_menu_android.png) ![Przykład konfiguracji mapy Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Konfiguruj mapę iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Przykład konfiguracji mapy iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Przeczytaj więcej](../map/configure-map-menu.md) o konfiguracji mapy.


### Jak skonfigurować ekran {#how-to-configure-screen}

[Konfiguracja ekranu](../widgets/configure-screen.md) pozwala włączyć widżety [informacyjne](../widgets/info-widgets.md) (wysokość, prędkość, aktualny czas itp.) i [nawigacyjne](../widgets/nav-widgets.md) (cel, kierunek, czas przybycia itp.), [szybkie akcje](../widgets/quick-action.md) i inne elementy, które będą wyświetlane na mapie.

<Tabs groupId="operating-os" queryString="current-os">

<TabItem value="android" label="Android">

![Konfiguruj ekran Android](@site/static/img/widgets/configure_screen_android.png) ![Przykład konfiguracji ekranu Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Konfiguruj ekran iOS](@site/static/img/settings/configure_screen_ios.png) ![Przykład konfiguracji ekranu iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Przeczytaj więcej](../widgets/configure-screen.md) o konfiguracji ekranu.


### Jak dodawać dane osobowe do map {#how-to-add-personal-data-to-maps}

OsmAnd pozwala na tworzenie różnych oznaczeń na mapie dla Twoich osobistych potrzeb. Na przykład, [Punkty ulubione](../personal/favorites.md) - osobiste punkty z nazwą, ikoną i kategorią, [Markery](../personal/markers.md) - szybko dodane punkty jako cel, [Notatki audio/wideo](../plugins/audio-video-notes.md) - notatki multimedialne nagrane w określonym punkcie, [Ślady](../personal/tracks/manage-tracks.md) - nagrane i zaimportowane ślady i wycieczki.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dodaj dane osobowe Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dodaj dane osobowe iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Przeczytaj więcej](../map/point-layers-on-map.md) o punktach na mapie.


### Jak przeglądać i wyszukiwać interesujące miejsca {#how-to-browse--find-point-of-interest}

[Punkty POI (Points of Interest)](../map/point-layers-on-map.md#points-of-interest-pois) to udogodnienia, które można wyszukiwać lub podświetlać na mapie. Reprezentują one interesujące lub użyteczne miejsca i są rozpowszechniane jako część [map wektorowych](../map/vector-maps.md). Możesz ich używać do [wyświetlania na mapie](../map/point-layers-on-map.md#points-of-interest-pois), [nawigowania](../navigation/index.md) i [wyszukiwania](../search/search-poi.md) punktów POI na mapie.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wielokrotny wybór POI](@site/static/img/map/multiple_selection_android.png) ![Wyszukaj i wyświetl POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wielokrotny wybór POI](@site/static/img/settings/multiple_selection_iOS.png) ![Wyszukaj i wyświetl POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Przeczytaj więcej](../search/search-poi.md) o wyszukiwaniu POI.


### Jak zaplanować trasę {#how-to-plan-a-route}

[Planowanie trasy](../plan-route/create-route.md) to potężne narzędzie, które pozwala tworzyć wycieczki, edytować istniejące ślady i mierzyć odległości na miejscu. Możesz szybko umieszczać punkty pośrednie i łączyć je różnymi liniami nawigacyjnymi (rower, pieszy, linia prosta itp.). Wyniki można zapisać w pliku GPX, aby można je było [udostępnić](../personal/tracks/index.md) lub [wykorzystać w nawigacji](../navigation/setup/gpx-navigation.md) później.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planuj trasę Android](@site/static/img/settings/plan_route_android.png) ![Planuj trasę wykres Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planuj trasę iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Przeczytaj więcej](../plan-route/create-route.md) o funkcji planowania trasy.


### Jak wyszukiwać według adresu {#how-to-search-by-address}

OsmAnd oferuje wiele możliwości wyszukiwania, w tym wyszukiwanie adresów. Domyślnie korzysta z [danych OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) i powinien być w stanie znaleźć wszystkie adresy za pomocą szybkiego wyszukiwania. Możesz również [wyszukiwać](../search/search-address.md) według miasta, ulicy, kodu pocztowego i współrzędnych.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie adresu Android](@site/static/img/settings/address_search_android.png) ![Wynik wyszukiwania Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie adresu iOS](@site/static/img/settings/address_search_ios.png) ![Wynik wyszukiwania iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Musisz pobrać mapę, zanim będziesz mógł wyszukać na niej adres. Ponadto, jeśli Twoja aktualna lokalizacja jest zbyt daleko od wyszukiwanego adresu, może być konieczne zwiększenie promienia wyszukiwania.
:::

[Przeczytaj więcej](../search/search-address.md) o wyszukiwaniu adresów.


### Jak rozpocząć nawigację {#how-to-start-navigation}

[Nawigacja](../navigation/index.md) zapewnia wskazówki krok po kroku do celu, wyświetlając trasę, oferując instrukcje zakręt po zakręcie, dodatkowe informacje o drodze, takie jak nawierzchnia, gładkość itp., oraz opcjonalne wskazówki głosowe.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rozpocznij nawigację Android](@site/static/img/settings/start_navigation_android.png) ![Wykres trasy Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rozpocznij nawigację iOS](@site/static/img/settings/start_navigation_ios.png) ![Wykres trasy iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Przeczytaj więcej](../navigation/index.md) o nawigacji.


### Jak nagrywać swoją podróż {#how-to-record-your-trip}

[Nagrywanie podróży](../plugins/trip-recording.md) to specjalne narzędzie spakowane jako wtyczka OsmAnd, które pozwala nagrywać wszystkie ruchy na ścieżce za pomocą GPS urządzenia.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nagrywanie podróży Android](@site/static/img/settings/trip_recording_android.png) ![Przegląd nagrywania podróży Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rozpocznij nagrywanie podróży iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Menu nagrywania podróży iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Przeczytaj więcej](../plugins/trip-recording.md) o nagrywaniu podróży.


### Jak edytować mapy {#how-to-edit-maps}

OsmAnd jest zasilany danymi [OpenStreetMap](https://www.openstreetmap.org/). Mapy są tworzone przez wolontariuszy, więc mogą mieć więcej lub mniej szczegółów w zależności od tego, ile pracy zostało wykonane w danej części mapy. Każdy może zarejestrować się jako współtwórca i dodawać lub edytować mapy OSM. OsmAnd udostępnia wtyczkę do edycji, która pomaga ulepszać OpenStreetMap.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Notatka OSM Android](@site/static/img/settings/osm_note_android.png) ![Utwórz POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Notatka OSM iOS](@site/static/img/settings/osm_note_ios.png) ![Utwórz POI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Przeczytaj więcej](../plugins/osm-editing.md) o edycji OSM.


### Jak zamknąć aplikację {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Istnieją dwa dostępne warianty zamykania OsmAnd.

1. Zamknij aplikację, przesuwając palcem w górę i poza ekran. W przypadku pionowej listy aplikacji przesuń palcem w lewo lub w prawo.

2. Przed wykonaniem tej czynności może być konieczne wykonanie następujących kroków, w przeciwnym razie OsmAnd będzie działać w tle:
    - [Anuluj nawigację](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Zatrzymaj pobieranie i aktualizowanie map](../start-with/download-maps.md)
    - [Zatrzymaj nagrywanie podróży](../plugins/trip-recording.md#create-new-track)
    - [Zatrzymaj nagrywanie notatek audio/wideo](../plugins/audio-video-notes.md)

3. Funkcja *Wymuś zatrzymanie*:
    - Długie naciśnięcie *ikony OsmAnd → przycisk **i** → Wymuś zatrzymanie*.
    - Otwórz ustawienia i naciśnij *Aplikacje i powiadomienia → OsmAnd → Wymuś zatrzymanie*.

</TabItem>

<TabItem value="ios" label="iOS">

Zamknij aplikację, przesuwając palcem w górę i poza ekran. W przypadku pionowej listy aplikacji przesuń palcem w lewo lub w prawo.

Przed wykonaniem tej czynności może być konieczne wykonanie następujących kroków, w przeciwnym razie OsmAnd będzie działać w tle:

- [Anuluj nawigację](../navigation/setup/route-navigation.md)
- [Zatrzymaj pobieranie i aktualizowanie map](../start-with/download-maps.md)
- [Zatrzymaj nagrywanie podróży](../plugins/trip-recording.md#create-new-track)
- [Zatrzymaj nagrywanie notatek audio/wideo](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Skróty aplikacji {#app-shortcuts}

<InfoAndroidOnly/>

[Skróty aplikacji](https://support.google.com/android/answer/9450271) są dostępne dla ikony OsmAnd. Wystarczy długo nacisnąć ikonę OsmAnd na ekranie urządzenia, aby otworzyć menu skrótów aplikacji. Tutaj możesz krótko nacisnąć, aby wybrać następujące akcje: *Nawiguj do domu*, *Nawiguj do pracy*, *Rozpocznij nagrywanie*, *Szukaj*, *Moje miejsca*, *Nawiguj do*. Długie naciśnięcie akcji pozwala dodać nową ikonę akcji do ekranu urządzenia.

Naciśnij ikonę akcji, aby natychmiast uruchomić aplikację z wybraną akcją.

![Skróty](@site/static/img/steps/shortcuts_3_andr.png) ![Skróty](@site/static/img/steps/shortcuts_4_andr.png)


## Pomoc offline {#offline-help}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

W *Menu pomocy* znajdziesz artykuły z naszej strony [www.osmand.net/docs](https://osmand.net/docs/intro/). Po początkowym pobraniu (wymagane połączenie z Internetem) artykuły pomocy są dostępne offline.
Pierwsza podsekcja, *Pomoc offline*, zawiera **Najczęściej oglądane** (lub popularne) artykuły wśród naszych użytkowników. Sekcje **Podręcznik użytkownika** i **Rozwiązywanie problemów** mają taką samą strukturę jak na stronie internetowej.
W *Menu pomocy* znajdziesz również przydatne linki do sieci społecznościowych OsmAnd, informacje o wersji Twojej aplikacji, uwagi do wydania i kontakty do wsparcia. Za pośrednictwem Pomocy możesz również wysłać [logcat i dzienniki awarii](../troubleshooting/crash-logs.md#crash-and-logcat-logs).

### Menu {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>

- **Wyślij dziennik awarii** (*dla Androida*). Umożliwia użytkownikom wysyłanie raportów o awariach aplikacji do programistów, pomagając w identyfikacji i rozwiązywaniu problemów.
- **Wyślij dziennik logcat** (*dla Androida*). Zapewnia użytkownikom możliwość wysyłania szczegółowych dzienników awarii aplikacji do programistów, ułatwiając głębszą analizę i rozwiązywanie problemów.
- **Wyślij dziennik** (*dla iOS*). Pełni podobną funkcję do funkcji *Wyślij dziennik awarii* dla Androida, umożliwiając użytkownikom urządzeń iOS zgłaszanie awarii aplikacji programistom w celu debugowania.
- **Kopiuj wersję kompilacji**. Umożliwia użytkownikom szybkie i dokładne przekazywanie programistom aktualnej wersji aplikacji podczas zgłaszania problemów, upraszczając proces diagnostyki i rozwiązywania.


### Najczęściej oglądane {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Najczęściej oglądane artykuły wśród naszych użytkowników odnoszą się do artykułów w aplikacji lub na stronie, które zdobyły najwięcej wyświetleń lub interakcji użytkowników. Ta metryka pomaga zidentyfikować treści, które są szczególnie interesujące lub użyteczne dla Twoich użytkowników. Może dostarczyć cennych informacji na temat preferencji i zainteresowań użytkowników, umożliwiając programistom i twórcom treści dostosowanie przyszłych treści do potrzeb odbiorców. Dodatkowo, wyróżnianie popularnych artykułów może pomóc nowym użytkownikom znaleźć cenne zasoby w aplikacji.


### Podręcznik użytkownika {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

Sekcja **Podręcznik użytkownika** w menu Pomoc to kompletna instrukcja, która jest zgodna ze strukturą strony internetowej OsmAnd, zapewniając spójność informacji i łatwość nawigacji między platformami. Korzystając z Pomocy, możesz łatwo przechodzić z aplikacji na stronę internetową, znajdując te same treści zorganizowane w znajomy sposób. Ta spójność zwiększa użyteczność, zapewniając jedno źródło wsparcia do szybkiego znajdowania odpowiedzi na pytania i rozwiązywania problemów.


### Rozwiązywanie problemów {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Rozwiązania i wskazówki dotyczące rozwiązywania typowych problemów. Jeśli masz konkretne pytanie, sprawdź [Rozwiązywanie problemów](../troubleshooting/index.md), aby uzyskać odpowiedź.

- [Ustawienia](../troubleshooting/setup.md). Podczas konfigurowania aplikacji najczęściej pojawiają się te problemy.
- [Mapy i dane](../troubleshooting/maps-data.md). Problemy związane z mapami, wyszukiwaniem i resztą danych.
- [Nawigacja](../troubleshooting/navigation.md). Najczęstsze problemy występujące w trybie nawigacji.
- [Nagrywanie śladu](../troubleshooting/track-recording-issues.md). Typowe problemy związane z nagrywaniem śladu, takie jak szumy, luki i niedokładności.
- [Ogólne](../troubleshooting/general.md). Typowe problemy związane z różnymi funkcjami OsmAnd.
- [Dzienniki awarii](../troubleshooting/crash-logs.md). Jak wysłać dzienniki awarii do zespołu OsmAnd.
- [Android Auto](../troubleshooting/android_auto.md) (*tylko dla Androida*). Problemy z nawigacją samochodową.

### Skontaktuj się z nami {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Pozwala zadawać pytania lub zgłaszać sugestie.

### Zgłoś problemy {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Otwórz zgłoszenie na GitHubie**. [Wersja Android GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [Wersja iOS GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): zadawaj pytania, pisz o błędach i proponuj funkcje.
- **Wyślij dziennik awarii** (*dla Androida*). Zawiera tylko informacje o awariach.
- [Wyślij dziennik logcat](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Wyślij dziennik](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Szczegółowy plik dziennika.

### O OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

Możesz dowiedzieć się o naszym zespole, zobaczyć aktualną wersję aplikacji i co nowego, a także pobrać wersję beta aplikacji.


## Prywatność {#privacy}

Jest to [otwarte źródło](https://github.com/osmandapp/osmand), aplikacja bez reklam/śledzenia, zorientowana na prywatność. Aby zachować maksymalną prywatność, OsmAnd oferuje mapy offline jako pierwsze miejsce, dzięki czemu żadne interakcje ani informacje geograficzne nie wyciekają z Twojego urządzenia. Jesteśmy bardzo uważni na to, jakie dane są zbierane i jakie dane są przesyłane przez sieć, możesz przeczytać więcej w naszej [Polityce prywatności](https://osmand.net/help-online/privacy-policy).


## Uprawnienia {#permissions}

OsmAnd nie wymaga żadnych specjalnych uprawnień w wersji iOS / Android.

**Niezbędne**:

- **Internet**. Początkowe pobieranie / aktualizacja map offline. Może być również potrzebny do dostępu do funkcji online, takich jak [Obrazy na poziomie ulicy](../map/point-layers-on-map.md#-street-level-imagery), [Zdjęcia online](../map/map-context-menu.md#online-photos) lub [Mapy online](../map/raster-maps.md).
- **GPS** / **Sieć GSM**. Określ swoją lokalizację, śledź Cię w trybie nawigacji i nagrywaj swoją podróż (opcjonalnie). To uprawnienie jest wymagane po kliknięciu [przycisku mojej lokalizacji](../widgets/map-buttons.md#my-location-and-zoom) lub po [rozpoczęciu nawigacji](../navigation/setup/route-navigation.md#start--stop-navigation).

**Opcjonalne**:

- **Nagrywanie kamerą/głosem** (*Android*). Używane tylko przez [notatki audio/wideo](../plugins/audio-video-notes.md). Ta funkcja jest spakowana jako wtyczka i domyślnie wyłączona. Pozwala szybko tworzyć notatki audio/wideo związane z lokalizacją podczas podróży.


> *Ostatnia aktualizacja: styczeń 2025*