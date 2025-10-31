---
source-hash: 22db732c5f66852486fa2129937bfba2c697d211dccbcef555621bf176facb12
sidebar_position: 1
title:  Pierwsze kroki
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

Witaj w OsmAnd (OpenStreetMap Automated Navigation Directions)!  

Dowiedz się, jak pobierać mapy, konfigurować aplikację, korzystać z mapy i budować trasę, rozpoczynać nawigację oraz wyszukiwać interesujące miejsca. Zapoznaj się z kluczowymi punktami polityki prywatności OsmAnd i wymaganymi uprawnieniami.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nawigacja offline Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nawigacja offline iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## Zainstaluj OsmAnd {#install-osmand}

OsmAnd to aplikacja mobilna do map i nawigacji dostępna na **Androida** i **iOS**. Możesz ją pobrać z najpopularniejszych sklepów z aplikacjami.

**Sklepy na Androida**: [Google play store](https://play.google.com/store/apps/details?id=net.osmand) i [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Czytaj więcej](../purchases/index.md) o wersjach OsmAnd i zakupach.  


## Witaj w OsmAnd {#welcome-to-osmand}

Naszym celem jest stworzenie w pełni funkcjonalnej aplikacji zorientowanej na mapy, która może być używana do różnych celów w trybie offline i online. Aplikacja ma wiele funkcji, dzięki czemu nie musisz przełączać się między różnymi aplikacjami, a wszystko będzie na wyciągnięcie ręki.

- Przeglądaj mapę świata z wieloma szczegółami wyświetlanymi w [różnych stylach mapy](../map/vector-maps.md).
- Wyświetlaj, [wyszukuj](../search/search-poi.md) i zapisuj różne [interesujące miejsca](../map/point-layers-on-map.md).
- [Zaplanuj trasę](../plan-route/create-route.md) samochodem, rowerem, pieszo i łącz je w trasy multimodalne.
- Rozpocznij [nawigację z przewodnikiem głosowym](../navigation/guidance/voice-navigation.md) przy włączonym i wyłączonym ekranie.
- Wzbogać swoją podróż turystyczną dzięki offline'owej [Wikipedii](../plugins/wikipedia.md) i [Wikivoyage](../plan-route/travel-guides.md).
- W pełni dostosuj sposób [wyświetlania mapy](../map/configure-map-menu.md) i to, jakie [widżety](../widgets/index.md) są na niej wyświetlane.
- Nawiguj [po trasie](../navigation/setup/route-navigation.md), [po danym śladzie](../navigation/setup/gpx-navigation.md), [transportem publicznym](../navigation/routing/public-transport-navigation.md) i [w terenie](../navigation/setup/markers-navigation.md).
- Wszystko działa w trybie **offline**.
- I nie zapomnij wnosić wkładu w [OpenStreetMap](https://www.openstreetmap.org/) za pomocą [wtyczki do edycji OSM](../plugins/osm-editing.md).


## Przewodnik po działaniach {#actions-guide}

### Zgoda na dostęp do lokalizacji {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dokładna lokalizacja Android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dokładna lokalizacja iOS](@site/static/img/steps/first_start_ios.png) ![Dokładna lokalizacja iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Zalecamy udzielenie OsmAnd zgody na otrzymywanie informacji o dokładnej lokalizacji urządzenia. Nie zbieramy, nie wykorzystujemy ani nie udostępniamy Twoich prywatnych informacji, więc dostęp do precyzyjnej geolokalizacji jest potrzebny do poprawnego działania w trybie offline wyszukiwania, nawigacji i innych funkcji OsmAnd.  


### Jak pobierać mapy {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pokaż na mapie](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pokaż na mapie](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

Aplikacja OsmAnd działa z różnymi typami map, ale może w pełni funkcjonować tylko z pobranymi mapami offline, więc po ekranie *<Translate android="true" ids="get_started"/>* zostaniesz poproszony o [*pobranie mapy*](../start-with/download-maps.md#initial-setup-screen) swojego regionu. Możesz wybrać inny region, przywrócić dane z [OsmAnd Cloud](../personal/osmand-cloud.md) lub pominąć ten krok i pobrać mapy później.  
Inne dostępne opcje pobierania map znajdziesz w artykule [Pobieranie map](../start-with/download-maps.md).

:::note Rozpocznij pracę z mapami offline
OsmAnd nie może działać poprawnie bez pobranych map offline. Chociaż aplikacja obsługuje mapy [wektorowe](../map/vector-maps.md) i [rastrowe](../map/raster-maps.md), zdecydowanie zaleca się rozpoczęcie pracy z wektorowymi mapami offline, aby wszystkie funkcje, takie jak [wyszukiwanie](../search/index.md), [nawigacja](../navigation/index.md) i [menu kontekstowe](../map/map-context-menu.md), działały prawidłowo.
:::


### Jak pobrać mapy dla całego świata {#how-download-maps-for-the-whole-world}

Chociaż OsmAnd pozwala na pobieranie map dla wszystkich dostępnych regionów, nie ma jednego pakietu do pobrania całego świata naraz. Zamiast tego można pobierać mapy poszczególnych krajów lub regionów w zależności od potrzeb.

***Kluczowe punkty:***

- **OsmAnd Pro** i **Maps+** zapewniają **nieograniczone pobieranie map**, ale nadal trzeba pobierać mapy po jednym regionie na raz.
- **Ograniczenia pamięci.** Upewnij się, że urządzenie ma wystarczająco dużo miejsca przed pobraniem wielu regionów.
- **Automatyczne aktualizacje.** Po pobraniu mapy można aktualizować poprzez *Menu → Mapy i zasoby → Aktualizacje.*


### Jak zmienić język aplikacji {#how-to-change-app-language}

Opcja *Język wyświetlania* służy do zmiany języka całej aplikacji, w tym wyskakujących okienek, tekstu wewnętrznego, wiadomości i innych. Do wersji Android 12 OsmAnd pozwalał na dostosowanie języka wyświetlania zgodnie z preferencjami bezpośrednio w aplikacji. Począwszy od Androida 13 i na urządzeniach z systemem iOS, język wyświetlania można zmienić tylko w ustawieniach systemowych (zobacz, jak zmienić preferencje językowe dla poszczególnych aplikacji w systemie [Android](https://developer.android.com/guide/topics/resources/app-languages) i [iOS](https://developer.apple.com/news/?id=u2cfuj88)).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *Ustawienia → Aplikacje → OsmAnd → Język*

![Ogólne ustawienia języka Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Ustawienia → OsmAnd Maps → Język*

![Ogólne ustawienia języka iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Brak opcji ustawienia języków aplikacji
Na niektórych urządzeniach z Androidem (Xiaomi z Muiu 14) nie ma opcji indywidualnego ustawiania języków aplikacji w ustawieniach systemowych, więc język OsmAnd można zmienić tylko wraz z językiem całego systemu. Możesz sprawdzić dyskusję na [GitHubie](https://github.com/osmandapp/OsmAnd/issues/16990), aby uzyskać dodatkowe informacje.
:::


### Jak zarządzać ustawieniami {#how-to-manage-your-settings}

Możesz zarządzać ustawieniami aplikacji jako [Ustawieniami globalnymi](../personal/global-settings.md) lub jako [Konfiguracją profilu](../personal/profiles.md) poprzez [Menu główne](../start-with/main-menu.md). Aplikacja jest dostarczana z predefiniowaną listą profili, które można później modyfikować. Każdy profil można uznać za dostosowaną aplikację mapową do określonych celów. Domyślnie profile służą jedynie jako różne tryby nawigacji.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zarządzaj profilem Android](@site/static/img/settings/manage_profile_android.png) ![Konfiguruj profil Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zarządzaj profilem iOS](@site/static/img/settings/manage_profile_ios.png) ![Konfiguruj profil iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Czytaj więcej](../personal/global-settings.md) o ustawieniach globalnych.
[Czytaj więcej](../personal/profiles.md) o ustawieniach profilu.


### Jak konfigurować wtyczki {#how-to-configure-plugins}

[Wtyczki](../plugins/index.md#configure-plugin) znacznie rozszerzają funkcjonalność aplikacji. Prawie wszystkie wtyczki mają własne [akcje mapy](../map/map-context-menu.md), [warstwy mapy](../map/configure-map-menu.md), [pobieranie map](../start-with/download-maps.md) i [ustawienia](../plugins/#plugin-settings).  

Możesz włączać/wyłączać wtyczki poprzez [Menu główne](../start-with/main-menu.md) → [Wtyczki](../plugins/index.md#configure-plugin).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Włącz wtyczki Android](@site/static/img/settings/plugins_enable_android.png) ![Przykład wtyczki Android](@site/static/img/settings/plugin_example_android.png)

Aby włączyć/wyłączyć wtyczki, przejdź do:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Enable

</TabItem>

<TabItem value="ios" label="iOS">

![Włącz wtyczki iOS](@site/static/img/settings/plugins_enable_ios.png) ![Przykład wtyczki iOS](@site/static/img/settings/plugin_example_ios.png)

Aby włączyć/wyłączyć wtyczki, przejdź do:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Czytaj więcej](../plugins/index.md#configure-plugin) o wtyczkach OsmAnd.


### Jak korzystać z mapy {#how-to-use-a-map}

Mapa jest podstawowym elementem OsmAnd i ważne jest, aby wiedzieć, [jak z niej korzystać](../map/interact-with-map.md) (gesty, przyciski itp.). Możesz [skonfigurować mapę](../map/configure-map-menu.md) do swoich potrzeb: [zmienić styl mapy](../map/configure-map-menu.md#map-style-parameters), skonfigurować różne [warstwy mapy](../map/configure-map-menu.md#map-layers), takie jak ulubione, POI, transport publiczny, ślady, linie konturowe, cieniowanie wzgórz i inne.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Konfiguruj mapę Android](@site/static/img/settings/configure_map_menu_android.png) ![Przykład konfiguracji mapy Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Konfiguruj mapę iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Przykład konfiguracji mapy iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Czytaj więcej](../map/configure-map-menu.md) o konfiguracji mapy.


### Jak skonfigurować ekran {#how-to-configure-screen}

[Konfiguracja ekranu](../widgets/configure-screen.md) pozwala włączyć widżety [informacyjne](../widgets/info-widgets.md) (wysokość, prędkość, aktualny czas itp.) i [nawigacyjne](../widgets/nav-widgets.md) (cel, namiar, czas przybycia itp.), [szybkie akcje](../widgets/quick-action.md) i inne elementy, które będą wyświetlane na mapie.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Konfiguruj ekran Android](@site/static/img/widgets/configure_screen_android.png) ![Przykład konfiguracji ekranu Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Konfiguruj ekran iOS](@site/static/img/settings/configure_screen_ios.png) ![Przykład konfiguracji ekranu iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Czytaj więcej](../widgets/configure-screen.md) o konfiguracji ekranu.


### Jak dodawać dane osobiste do map {#how-to-add-personal-data-to-maps}

OsmAnd pozwala na umieszczanie różnych oznaczeń na mapie dla własnych potrzeb. Na przykład [ulubione punkty](../personal/favorites.md) - osobiste punkty z nazwą, ikoną i kategorią, [znaczniki](../personal/markers.md) - szybko dodawane punkty jako cel, [notatki audio/wideo](../plugins/audio-video-notes.md) - notatki multimedialne nagrane w określonym punkcie, [ślady](../personal/tracks/manage-tracks.md) - nagrane i zaimportowane ślady i wycieczki.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dodaj dane osobiste Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dodaj dane osobiste iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Czytaj więcej](../map/point-layers-on-map.md) o punktach na mapie.


### Jak przeglądać i znajdować interesujące miejsca {#how-to-browse--find-point-of-interest}

[Interesujące miejsca (POI)](../map/point-layers-on-map.md#points-of-interest-pois) to udogodnienia, które można wyszukiwać lub podświetlać na mapie. Reprezentują one interesujące lub użyteczne miejsca i są dystrybuowane jako część [map wektorowych](../map/vector-maps.md). Możesz ich używać do [wyświetlania na mapie](../map/point-layers-on-map.md#points-of-interest-pois), [nawigacji](../navigation/index.md) i [wyszukiwania](../search/search-poi.md) interesujących miejsc na mapie.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wybór wielu POI](@site/static/img/map/multiple_selection_android.png) ![Wyszukaj i wyświetl POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wybór wielu POI](@site/static/img/settings/multiple_selection_iOS.png) ![Wyszukaj i wyświetl POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Czytaj więcej](../search/search-poi.md) o wyszukiwaniu POI.


### Jak zaplanować trasę {#how-to-plan-a-route}

[Planowanie trasy](../plan-route/create-route.md) to potężne narzędzie, które pozwala tworzyć wycieczki, edytować istniejące ślady i mierzyć odległość na miejscu. Możesz szybko umieszczać punkty pośrednie i łączyć je różnymi liniami nawigacyjnymi (rowerowa, piesza, linia prosta itp.). Wyniki można zapisać w pliku GPX, dzięki czemu można je później [udostępnić](../personal/tracks/index.md) lub [użyć do nawigacji](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planuj trasę Android](@site/static/img/settings/plan_route_android.png) ![Wykres trasy Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planuj trasę iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Czytaj więcej](../plan-route/create-route.md) o funkcji planowania trasy.


### Jak wyszukiwać według adresu {#how-to-search-by-address}

OsmAnd zapewnia wiele możliwości wyszukiwania, w tym wyszukiwanie adresów. Domyślnie używa danych [OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) i powinien być w stanie znaleźć wszystkie adresy za pomocą pola szybkiego wyszukiwania. Możesz także [wyszukiwać](../search/search-address.md) według miasta, ulicy, kodu pocztowego i współrzędnych.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie adresu Android](@site/static/img/settings/address_search_android.png) ![Wynik wyszukiwania Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie adresu iOS](@site/static/img/settings/address_search_ios.png) ![Wynik wyszukiwania iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Musisz pobrać mapę przed wyszukaniem na niej adresu. Ponadto, jeśli Twoja bieżąca lokalizacja jest zbyt daleko od wyszukiwanego adresu, może być konieczne zwiększenie promienia wyszukiwania.
:::

[Czytaj więcej](../search/search-address.md) o wyszukiwaniu adresów.


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

[Czytaj więcej](../navigation/index.md) o nawigacji.


### Jak nagrać swoją podróż {#how-to-record-your-trip}

[Nagrywanie podróży](../plugins/trip-recording.md) to specjalne narzędzie w postaci wtyczki OsmAnd, która pozwala na rejestrowanie wszystkich ruchów na śladzie za pomocą GPS urządzenia.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nagrywanie podróży Android](@site/static/img/settings/trip_recording_android.png) ![Przegląd nagrywania podróży Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rozpocznij nagrywanie podróży iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Menu nagrywania podróży iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Czytaj więcej](../plugins/trip-recording.md) o nagrywaniu podróży.


### Jak edytować mapy {#how-to-edit-maps}

OsmAnd jest zasilany danymi [OpenStreetMap](https://www.openstreetmap.org/). Mapy są tworzone przez wolontariuszy, więc mogą mieć więcej lub mniej szczegółów w zależności od tego, ile pracy włożono w dany fragment mapy. Każdy może zarejestrować się jako współtwórca i dodawać lub edytować mapy OSM. OsmAnd udostępnia wtyczkę do edycji, która pomaga ulepszać OpenStreetMap.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Notatka OSM Android](@site/static/img/settings/osm_note_android.png) ![Utwórz POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Notatka OSM iOS](@site/static/img/settings/osm_note_ios.png) ![Utwórz POI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Czytaj więcej](../plugins/osm-editing.md) o edycji OSM.


### Jak zamknąć aplikację {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Istnieją dwa dostępne warianty zamknięcia OsmAnd.

1. Zamknij aplikację, przesuwając ją w górę i poza ekran. W przypadku pionowej listy aplikacji przesuń palcem w lewo lub w prawo.  

2. Może być konieczne wykonanie następujących czynności przed zamknięciem, w przeciwnym razie OsmAnd będzie działać w tle:
    - [Zakończ nawigację](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Zatrzymaj pobieranie i aktualizowanie map](../start-with/download-maps.md)
    - [Zatrzymaj nagrywanie podróży](../plugins/trip-recording.md#new-track-recording)
    - [Zatrzymaj nagrywanie notatek audio/wideo](../plugins/audio-video-notes.md)

3. Funkcja *Wymuś zatrzymanie*:
    - Długie naciśnięcie *ikony OsmAnd → przycisk **i** → Wymuś zatrzymanie*.
    - Otwórz ustawienia i dotknij *Aplikacje i powiadomienia → OsmAnd → Wymuś zatrzymanie*.

</TabItem>

<TabItem value="ios" label="iOS">

Zamknij aplikację, przesuwając ją w górę i poza ekran. W przypadku pionowej listy aplikacji przesuń palcem w lewo lub w prawo.  

Może być konieczne wykonanie następujących czynności przed zamknięciem, w przeciwnym razie OsmAnd będzie działać w tle:

- [Anuluj nawigację](../navigation/setup/route-navigation.md)
- [Zatrzymaj pobieranie i aktualizowanie map](../start-with/download-maps.md)
- [Zatrzymaj nagrywanie podróży](../plugins/trip-recording.md#new-track-recording)
- [Zatrzymaj nagrywanie notatek audio/wideo](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Skróty aplikacji {#app-shortcuts}

<InfoAndroidOnly/>

[Skróty aplikacji](https://support.google.com/android/answer/9450271) są dostępne dla ikony OsmAnd. Wystarczy długo nacisnąć ikonę OsmAnd na ekranie urządzenia, aby otworzyć menu skrótów aplikacji. Tutaj można krótko nacisnąć, aby wybrać następujące akcje: *Nawiguj do domu*, *Nawiguj do pracy*, *Rozpocznij nagrywanie*, *Szukaj*, *Moje miejsca*, *Nawiguj do*. Długie naciśnięcie akcji pozwala dodać nową ikonę akcji na ekranie urządzenia.

Dotknij ikony akcji, aby natychmiast uruchomić aplikację z wybraną akcją.

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

W *Menu Pomocy* można znaleźć artykuły z naszej strony [www.osmand.net/docs](https://osmand.net/docs/intro/). Po pierwszym pobraniu (wymagane połączenie z internetem) artykuły pomocy są dostępne w trybie offline.  
Pierwsza podsekcja, *Pomoc offline*, zawiera **Najczęściej oglądane** (lub popularne) artykuły wśród naszych użytkowników. Te artykuły są wyświetlane w języku ustawionym dla aplikacji, jeśli ten język jest obsługiwany na naszej stronie dokumentacji. Obecnie obsługiwane języki to: *<Translate android="true" ids="lang_en"/>, <Translate android="true" ids="lang_ar"/>, <Translate android="true" ids="lang_de"/>, <Translate android="true" ids="lang_es"/>, <Translate android="true" ids="lang_fr"/>, <Translate android="true" ids="lang_it"/>, <Translate android="true" ids="lang_nl"/>, <Translate android="true" ids="lang_pl"/>, <Translate android="true" ids="lang_pt"/>, <Translate android="true" ids="lang_tr"/>* oraz *<Translate android="true" ids="lang_uk"/>*. Jeśli zmienisz język aplikacji, uruchom ponownie OsmAnd, aby dokumentacja otworzyła się w wybranym języku. Gdy tłumaczenie nie jest dostępne, automatycznie wyświetlona zostanie wersja angielska strony. Sekcje **Podręcznik użytkownika** i **Rozwiązywanie problemów** mają taką samą strukturę jak na stronie internetowej.  
W *Menu Pomocy* można również znaleźć przydatne linki do sieci społecznościowych OsmAnd, informacje o wersji aplikacji, informacje o wydaniu i kontakty do wsparcia. Za pośrednictwem Pomocy można również wysyłać [logi logcat i awarii](../troubleshooting/crash-logs.md#crash-and-logcat-logs).  

### Menu {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>  

- **Wyślij log awarii** (*dla Androida*). Umożliwia użytkownikom wysyłanie raportów o awariach aplikacji do deweloperów, co pomaga w identyfikacji i rozwiązywaniu problemów.
- **Wyślij log logcat** (*dla Androida*). Zapewnia użytkownikom możliwość wysyłania szczegółowych logów awarii aplikacji do deweloperów, ułatwiając głębszą analizę i rozwiązywanie problemów.
- **Wyślij log** (*dla iOS*). Pełni podobną funkcję do funkcji *Wyślij log awarii* dla Androida, umożliwiając użytkownikom urządzeń z systemem iOS zgłaszanie awarii aplikacji deweloperom w celach debugowania.
- **Kopiuj wersję kompilacji**. Umożliwia użytkownikom szybkie i dokładne przekazanie aktualnej wersji aplikacji deweloperom podczas zgłaszania problemów, upraszczając proces diagnostyki i rozwiązywania problemów.


### Najczęściej oglądane {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Najczęściej oglądane artykuły wśród naszych użytkowników odnoszą się do artykułów w aplikacji lub na stronie, które zebrały najwięcej wyświetleń lub interakcji użytkowników. Ta metryka pomaga zidentyfikować treści, które są szczególnie interesujące lub przydatne dla użytkowników. Może dostarczyć cennych informacji na temat preferencji i zainteresowań użytkowników, umożliwiając deweloperom i twórcom treści lepsze dostosowanie przyszłych treści do potrzeb odbiorców. Dodatkowo, wyróżnianie popularnych artykułów może pomóc nowym użytkownikom znaleźć cenne zasoby w aplikacji.


### Podręcznik użytkownika {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

Sekcja **Podręcznik użytkownika** w menu Pomocy to kompletny podręcznik, który jest zgodny ze strukturą strony internetowej OsmAnd, zapewniając spójność informacji i łatwość nawigacji na różnych platformach. Korzystając z Pomocy, można łatwo przechodzić z aplikacji na stronę internetową, znajdując te same treści zorganizowane w znajomy sposób. Ta spójność zwiększa użyteczność, zapewniając jedno źródło wsparcia, w którym można szybko znaleźć odpowiedzi na pytania i rozwiązać problemy.


### Rozwiązywanie problemów {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Rozwiązania i wskazówki dotyczące rozwiązywania typowych problemów. Jeśli masz konkretne pytanie, sprawdź sekcję [Rozwiązywanie problemów](../troubleshooting/index.md), aby znaleźć odpowiedź.

- [Konfiguracja](../troubleshooting/setup.md). Podczas konfigurowania aplikacji najczęściej pojawiają się te problemy.
- [Mapy i dane](../troubleshooting/maps-data.md). Problemy związane z mapami, wyszukiwaniem i resztą danych.
- [Nawigacja](../troubleshooting/navigation.md). Najczęstsze problemy występujące w trybie nawigacji.
- [Nagrywanie śladu](../troubleshooting/track-recording-issues.md). Typowe problemy związane z nagrywaniem śladu, takie jak szumy, przerwy i niedokładności.
- [Ogólne](../troubleshooting/general.md). Typowe problemy związane z różnymi funkcjami OsmAnd.
- [Logi awarii](../troubleshooting/crash-logs.md). Jak wysyłać logi awarii do zespołu OsmAnd.
- [Android Auto](../troubleshooting/android_auto.md) (*tylko dla Androida*). Problemy z nawigacją w trybie Auto.

### Kontakt {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Umożliwia zadawanie pytań lub zgłaszanie sugestii.

### Zgłoś problemy {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zrzut ekranu pomocy offline Android](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Otwórz zgłoszenie na GitHubie**. [Wersja Android na GitHubie](https://github.com/osmandapp/OsmAnd-Issues/issues), [wersja iOS na GitHubie](https://github.com/osmandapp/OsmAnd-iOS/issues): zadawaj pytania, pisz o błędach i proponuj funkcje.
- **Wyślij log awarii** (*dla Androida*). Zawiera tylko informacje o awariach.
- [Wyślij log logcat](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Wyślij log](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Szczegółowy plik logu.

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

Jest to aplikacja [open source](https://github.com/osmandapp/osmand), wolna od reklam i trackerów, skoncentrowana na prywatności. Aby zachować maksymalną prywatność, OsmAnd oferuje w pierwszej kolejności mapy offline, dzięki czemu żadne interakcje ani informacje geograficzne nie wyciekają z Twojego urządzenia. Jesteśmy bardzo uważni na to, jakie dane są zbierane i jakie dane są przesyłane przez sieć, więcej na ten temat można przeczytać w naszej [Polityce prywatności](https://osmand.net/help-online/privacy-policy).  


## Uprawnienia {#permissions}

OsmAnd nie ma żadnych wymaganych uprawnień w wersji na iOS / Androida.

**Niezbędne**:

- **Internet**. Początkowe pobieranie / aktualizacja map offline. Może być również potrzebny do uzyskania dostępu do funkcji online, takich jak [zdjęcia na poziomie ulicy](../map/point-layers-on-map.md#-street-level-imagery), [zdjęcia online](../map/map-context-menu.md#online-photos) lub [mapy online](../map/raster-maps.md).
- **GPS** / **Sieć GSM**. Określanie Twojej lokalizacji, śledzenie Cię w trybie nawigacji i nagrywanie Twojej podróży (opcjonalnie). O to uprawnienie aplikacja prosi po kliknięciu [przycisku mojej lokalizacji](../widgets/map-buttons.md#my-location-and-zoom) lub po [rozpoczęciu nawigacji](../navigation/setup/route-navigation.md#start--stop-navigation).

**Opcjonalne**:

- **Aparat/nagrywanie głosu** (*Android*). Używane tylko przez [notatki audio/wideo](../plugins/audio-video-notes.md). Ta funkcja jest spakowana jako wtyczka i domyślnie wyłączona. Pozwala na szybkie tworzenie notatek audio/wideo związanych z lokalizacją podczas podróży.