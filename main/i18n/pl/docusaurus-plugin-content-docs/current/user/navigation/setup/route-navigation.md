---
source-hash: 5614ff96c05b150dc149ccfc7296cdeb953b69993517dcf326e81979e07d4a0f
sidebar_position: 1
title: Przygotowanie trasy
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

Funkcja **Przygotowanie trasy** w OsmAnd zapewnia szczegółowe wskazówki nawigacyjne dla różnych [typów tras](./../routing/osmand-routing.md#routing-types), w tym [jazdy samochodem](./../routing/car-based-routing.md), [chodzenia](./../routing/pedestrian-routing.md), jazdy na rowerze, [jazdy konnej](./../routing/horse-routing.md) i [jazdy na nartach](./../routing/ski-routing.md). Użytkownicy mogą dostosowywać ustawienia nawigacji, dodawać miejsca docelowe i optymalizować trasy pod kątem wydajności.

:::tip

- **Nawigacja offline** jest domyślnie włączona. Możesz jednak również korzystać z [internetowych silników routingu](./../routing/online-routing.md).

- **OsmAnd wymaga pozwolenia** na dostęp do [dokładnej lokalizacji](../../start-with/first-steps.md#permission-to-access-the-location) w celu precyzyjnej nawigacji. Włącz tę opcję w ustawieniach urządzenia, jeśli to konieczne.

:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ekran nawigacji Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Ekran nawigacji Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ekran nawigacji iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Ekran nawigacji iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Ustaw miejsca docelowe {#set-destinations}

**Krok 1: Pobierz mapy.**

Przed użyciem nawigacji offline upewnij się, że wymagane [mapy są pobrane](../../start-with/download-maps.md). Przejdź do *Menu → Mapy i zasoby → Pobierz mapy*, aby zainstalować mapy dla swojego regionu.

**Krok 2: Skonfiguruj profile nawigacji.**

[Skonfiguruj profile](../../personal/profiles.md), których zamierzasz używać:

- Ustaw [parametry pojazdu](../guidance/navigation-settings.md#size-parameters) (*ważne dla kierowców ciężarówek*), wybierz [typ silnika](../guidance/navigation-settings.md#fuel-used-by-motor) (*opcjonalnie*).

- Skonfiguruj [wygląd linii trasy](../guidance/map-during-navigation#route-line-appearance) (*opcjonalnie*, dostępne dla użytkowników Pro ([Android](../../purchases/android.md#pro-features-pro-features) / [iOS](../../purchases/ios.md#pro-features-pro-features))).

- Skonfiguruj [komunikaty głosowe](../guidance/voice-navigation.md).

**Krok 3: Ustaw miejsca docelowe.**

1. Otwórz [*Menu nawigacji*](#navigation-menu):

    - Określ [punkt docelowy](#set-target-point).
    - Poczekaj, aż trasa zostanie obliczona. Następnie będziesz mógł uzyskać dodatkowe informacje o swojej trasie w sekcji *[Szczegóły](./route-details.md#overview)*.
    - Możesz przełączać się między różnymi [typami tras](./../routing/osmand-routing.md#routing-types) (profilami), aby uzyskać najlepszy wynik.
    - Dodaj [punkty pośrednie](#intermediate-destinations) (opcjonalnie).
    - Możesz również zmienić punkt początkowy z [bieżącej lokalizacji](../../map/interact-with-map#my-location-and-zoom) na wymaganą.

2. Dodatkowe [*Ustawienia nawigacji*](#settings) mogą być używane w zależności od Twoich celów (możesz skonfigurować, których dróg unikać lub preferować, oszczędzać paliwo lub wybrać najszybszą trasę itp.).

3. [Rozpocznij](#start--stop-navigation) nawigację lub najpierw [zasymuluj nawigację](#simulated-navigation) (za pomocą tej funkcji możesz przetestować swoją trasę przed faktycznym podróżowaniem nią).

4. Będąc na trasie, możesz [*Wstrzymać/Wznowić*](#pause--resume-navigation) nawigację i [*Zatrzymać*](#start--stop-navigation) ją.


:::note

**Trasa nie może zostać zbudowana, gdy jako źródło mapy wybrano *[Mapę online](../../map/raster-maps.md#select-raster-maps)*.**

:::


### Menu nawigacji {#navigation-menu}

Istnieją 3 sposoby dotarcia do menu nawigacji:

- [*Przycisk nawigacji*](../../widgets/map-buttons.md#directions) na ekranie mapy.
- *Kierunek do/z* w [*menu kontekstowym mapy*](../../map/map-context-menu.md#directions-to--from).
- Sekcja nawigacji w [*Menu głównym*](../../start-with/main-menu.md) *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu nawigacji Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu nawigacji iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Ustaw lokalizację początkową (domyślnie: [*Moja bieżąca lokalizacja*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - Użyj, aby [ustawić punkt docelowy](#set-target-point).
- **Dodaj** &nbsp;&#43; - Wstaw [punkty pośrednie](../../widgets/nav-widgets.md#distance-to-intermediate) wzdłuż trasy.
- **Zamień** &nbsp;&#8595;&#8593; - Odwróć punkty *Start* i *Koniec*.
- **Przycisk dźwięku** - Wycisz [komunikaty głosowe](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [Dostosuj](#settings) preferencje trasy i ograniczenia drogowe.

Ustaw miejsce docelowe w *Menu nawigacji* za pomocą:

- Specjalnych punktów ulubionych [Dom / Praca](#use-home-or-work-points).
- Poprzedniej trasy lub [Historii](../../personal/global-settings.md#history).
- Przycisk **Anuluj** prowadzi z powrotem do ekranu głównego.
- [Przycisk Start](#start--stop-navigation) rozpoczyna nawigację po zakończeniu obliczania trasy.

### Wybierz punkt początkowy {#select-starting-point}

Jako punkt początkowy możesz wybrać swoją bieżącą lokalizację, lokalizację [punktu ulubionego](../../map/point-layers-on-map.md#favorites), wybrać punkt na mapie lub użyć [Wyszukiwania](../../search/index.md). Możesz również ustawić punkt początkowy w [menu kontekstowym mapy](../../map/map-context-menu.md), wybierając funkcję [Kierunki z](../../map/map-context-menu.md#directions-to--from).

### Ustaw punkt docelowy {#set-target-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu nawigacji Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Menu nawigacji iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

Najważniejszą rzeczą do rozpoczęcia nawigacji jest określenie miejsca docelowego. Punkt docelowy można znaleźć za pomocą funkcji [*Wyszukiwania*](../../search/index.md#overview) lub po prostu na mapie. Możesz również ustawić punkt docelowy w [*Menu nawigacji*](#navigation-menu):

- **<Translate android="true" ids="search_button"/>** - Otwiera [menu wyszukiwania](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Otwiera [menu wyszukiwania adresu](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Otwiera mapę, aby wybrać punkt docelowy, dotykając mapy.
- **<Translate android="true" ids="shared_string_favorites"/>** - Umożliwia użycie [Ulubionych](../../personal/favorites.md) jako miejsca docelowego.
- **<Translate android="true" ids="shared_string_markers"/>** - Umożliwia wybranie jednego z [markerów mapy](../../personal/markers.md) jako punktu docelowego.
- **Zamień punkt początkowy i docelowy** &nbsp;&#8595;&#8593; - Umożliwia zamianę punktów *Start* i *Koniec*.


### Punkty pośrednie {#intermediate-destinations}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nawigacja pośrednia Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Nawigacja pośrednia Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nawigacja pośrednia iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Nawigacja pośrednia iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - umożliwia otwarcie listy punktów docelowych w celu wprowadzenia zmian.
- **&nbsp;&#8592;** - przenosi do ekranu menu nawigacji.
- **&nbsp;&#10005;** - umożliwia usunięcie punktu docelowego z listy punktów.
- **&nbsp;&#61;** - umożliwia zmianę kolejności punktów na liście punktów.
- *&nbsp;&#43; Dodaj* - otwiera menu kontekstowe *Dodaj punkt pośredni*.
- *&nbsp;&#9776; Wyczyść wszystko* - umożliwia wyczyszczenie wszystkich punktów pośrednich.

Jeśli wybierzesz **Sortuj** (*Android*) lub **Opcje** (*iOS*) na liście miejsc docelowych, uzyskasz dostęp do specjalnych opcji dostosowywania kolejności nawigacji do punktów pośrednich.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nawigacja pośrednia Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nawigacja pośrednia iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

W tym menu znajdziesz dodatkowe opcje zarządzania punktami docelowymi:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - OsmAnd zaproponuje najkrótszą trasę między wszystkimi miejscami docelowymi, jednak kolejność odwiedzin można edytować. Punkt początkowy i końcowy nie zostaną zmienione.

- **<Translate android="true" ids="switch_start_finish"/>** - Punkt początkowy i końcowy zostaną zamienione.

- **<Translate android="true" ids="reverse_all_points"/>** (*Tylko Android*) - Wszystkie punkty zostaną ustawione w odwrotnym kierunku.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Z tego menu możesz dodawać punkty pośrednie.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Wszystkie punkty pośrednie zostaną usunięte z mapy.

### Użyj punktów domowych lub służbowych {#use-home-or-work-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Specjalne ulubione Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Specjalne ulubione iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

Zakładki **Dom** i **Praca** (lub [Punkty specjalne](../../personal/favorites.md#special-favorites-personal) dla Ulubionych) mogą być używane do szybkiego ustawiania punktów docelowych w menu nawigacji. Jeśli nie wprowadziłeś adresów Ulubionych specjalnych, te komórki pozostaną puste. Jeśli dotkniesz tego pola, zostaniesz poproszony o utworzenie tych POI.

### Historia poprzednich tras {#history-of-previous-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Poprzednia trasa Android](@site/static/img/navigation/route/previous_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Poprzednia trasa iOS](@site/static/img/navigation/route/previous_ios.png)

</TabItem>

</Tabs>

Jeśli włączono rejestrowanie [historii nawigacji](../../personal/global-settings.md#history), możesz użyć poprzednich tras lub miejsc docelowych z listy historii do nawigacji. Ta opcja może być przydatna do szybkiego dostępu do często używanych tras. Elementy na liście historii są sortowane według ostatniego użycia, zaczynając od najnowszych.

:::note

- Gdy rejestrowanie danych [historii](../../personal/global-settings.md#history-options) jest wyłączone, nie zostaniesz poproszony o użycie poprzednich tras do nawigacji.
- Możesz usunąć niektóre lub wszystkie wpisy historii dotyczące poprzednich tras. Można to zrobić na karcie *[Historia nawigacji](../../personal/global-settings.md#history-options)* opcji Historia (*Menu → Ustawienia → Ustawienia OsmAnd → Historia*).

:::


## Rozpocznij / Zatrzymaj nawigację {#start--stop-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ekran nawigacji start Android](@site/static/img/navigation/route/navigation_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ekran nawigacji iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Po wybraniu punktów początkowego i końcowego aplikacja utworzy trasę między nimi, używając aktywnego profilu. [Profil aplikacji](../../personal/profiles.md) i zestaw [widżetów](../../widgets/index.md) przełączą się dopiero po dotknięciu przycisku *Start* nawigacji.

- **Dotknij Start**, aby rozpocząć nawigację.
- [Wstrzymaj](#pause--resume-navigation) nawigację podczas przerwy. (*Tylko Android*)
- **Zatrzymaj** nawigację, wybierając **Zatrzymaj** (*Android*) lub **Anuluj** (*iOS*).

:::note Szczegóły trasy
Dodatkowe informacje o utworzonej trasie, takie jak wysokość, instrukcje zakręt po zakręcie, narzędzie do analizy i inne, można znaleźć w sekcji [**Szczegóły**](../setup/route-details.md).
:::

### Przeliczanie trasy {#route-recalculation}

Trasa może być automatycznie przeliczana w przypadku odchylenia od niej. Parametry przeliczania można zmienić w [Ustawieniach nawigacji](../guidance/navigation-settings.md#recalculate-route). Można również wyłączyć powiadomienia o przeliczaniu trasy w ustawieniach [Komunikatów głosowych](../guidance/voice-navigation.md#voice-settings).

### Wstrzymaj / Wznów nawigację {#pause--resume-navigation}

<InfoAndroidOnly/>

Jeśli chcesz zatrzymać się na przerwę i na krótko zboczyć z trasy, możesz użyć funkcji *Wstrzymaj/Wznów* nawigację, aby wstrzymać komunikaty głosowe i zatrzymać przeliczanie trasy.
Ta opcja jest dostępna w wersji aplikacji na Androida w *[Liście powiadomień](../guidance/voice-navigation.md#text-notifications)* lub z *[Menu szybkich akcji](../../widgets/quick-action.md)*.

![Ekran powiadomień Android](@site/static/img/navigation/route/navigation_pause_android.png)

Aby wznowić nawigację:

- Użyj wiadomości z OsmAnd na pasku powiadomień.
- Użyj *Menu szybkich akcji* lub okna dialogowego, które pojawia się po dotknięciu *[przycisku nawigacji](../../widgets/map-buttons.md#directions)* (patrz zrzut ekranu).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wznów nawigację Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wznów nawigację iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Gdy **dotkniesz przycisku nawigacji** podczas trasy, nawigacja **nie zatrzymuje się, a komunikaty głosowe są nadal odtwarzane**, chociaż proponowane opcje Wznów lub Start mogą być mylące.
:::


### Wskazówki dotyczące oszczędzania energii {#power-saving-tips}

Nawigacja wykorzystuje GPS i przetwarzanie w tle, co może wyczerpywać baterię. Aby zoptymalizować zużycie energii:

- **Wyłącz ekran**, polegając na komunikatach głosowych.
- Włącz [Sterowanie ekranem](../guidance/voice-navigation.md#screen-control) (*tylko Android*) w *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## Ustawienia {#settings}

![Przygotowanie trasy Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Ustawienia nawigacji {#navigation-settings}

Aby uzyskać dostęp do ustawień nawigacji, wykonaj jedną z poniższych czynności:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.
- *Przycisk nawigacji → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
W profilu *Przeglądaj mapę* nie ma ustawień nawigacji.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profile Ustawienia nawigacji iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** określa sposób obliczania tras. Na przykład Twój profil rowerowy ma typ nawigacji Rower, który ustawia zasady routingu. Możesz zaimportować te zasady (jako plik routing.xml) do OsmAnd. Więcej o routingu możesz przeczytać na naszej stronie [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing).&nbsp;

- &nbsp;**<Translate android="true" ids="route_parameters"/>** kontroluje, które parametry będą używane podczas routingu (jest to proces wyboru trasy do nawigacji).

Proszę przeczytać o parametrach trasy dla odpowiedniego typu nawigacji.

Jak skonfigurować [typ routingu](../routing/osmand-routing.md#routing-types) i [parametry trasy](../guidance/navigation-settings.md#route-parameters) można przeczytać w [artykule o ustawieniach nawigacji](../guidance/navigation-settings.md) lub w artykułach o konkretnych typach routingu w sekcji [Parametry trasy](../routing/osmand-routing.md#routing-types).

### Symulowana nawigacja {#simulated-navigation}

Narzędzie **Symulowana nawigacja** pozwala na podgląd trasy przed podróżą. Pomaga to w planowaniu, zapoznawaniu się i testowaniu systemu nawigacji OsmAnd.

#### Rozpocznij / Zatrzymaj symulację {#start--stop-simulation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Symuluj nawigację Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Symuluj nawigację iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Po zbudowaniu trasy nawigacyjnej możesz rozpocząć symulację nawigacji, używając opcji **<Translate android="true" ids="simulate_navigation"/>**.

- W [menu nawigacji](#navigation-menu) przejdź do *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Przełącz przełącznik, aby włączyć opcję.
- Dotknij przycisku [Start](#start--stop-navigation), aby rozpocząć symulację.
- Aby [Zatrzymać](#start--stop-navigation) symulację nawigacji, dotknij **Zatrzymaj** (*Android*) lub **Anuluj** (*iOS*).


#### Tryb prędkości {#speed-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Symuluj nawigację Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Symuluj nawigację iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Przyspiesza symulację na prostych odcinkach, zwalniając na skrzyżowaniach.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Działa ze stałą prędkością.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **Na prostych odcinkach** drogi prędkość będzie zbliżona do maksymalnej dopuszczalnej prędkości.
    - **Na skrzyżowaniach** symulator zmniejszy prędkość.
    - **Dodatkowe kary** zostaną zastosowane na światłach, znakach stopu i innych podobnych przeszkodach.


## Brakujące lub niezsynchronizowane mapy {#maps-missing-or-not-synchronized}

Aby zbudować trasę, wszystkie **niezbędne mapy** muszą być pobrane i mieć tę samą datę wydania. Należy pamiętać, że w niektórych sytuacjach komunikat o brakujących mapach może być ukryty w menu przygotowania trasy. Jeśli wysuniesz menu nawigacji w górę, zobaczysz możliwe przyczyny, dla których Twoja trasa nie mogła zostać obliczona.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Komunikat brak map podczas budowania nawigacji Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Komunikat brak map podczas budowania nawigacji iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### Wymagane mapy {#required-maps}

W oknie dialogowym wymaganych map zobaczysz sugestie map do pobrania lub aktualizacji. Lista używanych map może być niedokładna, ponieważ oblicza bardzo podstawową trasę; aby uzyskać dokładną listę map, możesz kliknąć **Oblicz online**. Jeśli wybierzesz **Użyj pobranych map**, obliczanie trasy spróbuje użyć już pobranych map i pominie komunikat ostrzegawczy.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Komunikat brak map podczas budowania nawigacji Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Komunikat brak map podczas budowania nawigacji iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Typowe problemy i rozwiązania {#common-issues-and-solutions}

1. [Możliwe przyczyny wolnego obliczania trasy.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [Co zrobić, jeśli długość trasy przekracza 250 kilometrów.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [Co zrobić, jeśli sugerowana trasa wydaje się nieprawidłowa.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Jak rozwiązać sytuację, gdy nawigacja nie jest możliwa z powodu braku niezbędnych map.](#maps-missing-or-not-synchronized)

Więcej kroków rozwiązywania problemów znajdziesz w [problemach z nawigacją](../../troubleshooting/navigation.md).


## Powiązane artykuły {#related-articles}

- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Szczegóły trasy](./route-details.md)
- [Nawigacja po śladzie](./gpx-navigation.md)
- [Nawigacja po markerach](./markers-navigation.md)
- [Ustawienia nawigacji](../guidance/navigation-settings.md)
- [Ekran mapy podczas nawigacji](../guidance/map-during-navigation.md)
- [Komunikaty głosowe / Powiadomienia](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ostatnia aktualizacja: luty 2025*