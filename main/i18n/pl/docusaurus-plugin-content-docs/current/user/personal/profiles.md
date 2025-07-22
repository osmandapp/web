---
source-hash: 0d53a22616cf8e2e6cbef10c62b91267fdc834a708913b0ff57e3e2d168a7e90
sidebar_position: 4
title: Profile (Ustawienia)
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

OsmAnd oferuje różnorodne domyślne profile dostosowane do różnych aktywności, w tym jazdy samochodem, jazdy na rowerze, spacerów i bardziej wyspecjalizowanych aktywności, takich jak jazda na nartach i pływanie łodzią. Profile te zostały zaprojektowane w celu poprawy komfortu nawigacji w zależności od wykonywanej aktywności. Każdy profil zawiera konfigurowalne opcje, umożliwiające dostosowanie ustawień i włączenie dodatkowych wtyczek w celu dopasowania do preferencji użytkownika.

- Niektóre profile, takie jak *Narciarstwo* i *Łódź*, mają **dodatkowe funkcje**, które stają się dostępne tylko po włączeniu odpowiednich wtyczek.

     - Wtyczki można aktywować, przechodząc do *Menu → Wtyczki → Widok mapy narciarskiej* lub *Widok mapy morskiej*.
     - Włączenie wtyczek zapewnia profilom niezbędne funkcje spełniające specyficzne wymagania tych aktywności.

- Należy pamiętać, że niektóre profile, takie jak **Ciężarówka**, **Motocykl**, **Motorower**, **Pociąg**, **Samolot**, **Łódź** i **Jazda konna**, nie są aktywowane domyślnie.

     - Aby uzyskać dostęp do tych profili i korzystać z nich, należy je ręcznie włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - Ta metoda pomaga utrzymać uporządkowaną i odpowiednią listę profili, aktywując tylko te, które są wymagane dla określonych aktywności.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Przeglądaj mapę lub dowolny inny profil)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Konfiguracja profilu {#profile-configuration}

:::caution Stosowanie ustawień tylko do określonego profilu
Wszystkie ustawienia mają zastosowanie wyłącznie do aktualnie wybranego profilu aplikacji.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png) ![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

Ta sekcja zawiera wszystkie ustawienia związane z wyglądem, opcjami nawigacji, wyświetlaniem mapy, menu ustawień i ekranem profilu.


### Darmowa kopia zapasowa w chmurze {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Favorites folder functions android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Favorites actions ios](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

OsmAnd umożliwia [tworzenie kopii zapasowych](../personal/osmand-cloud.md#osmand-start) ustawień profilu aplikacji w OsmAnd Cloud, zapewniając bezpieczne przechowywanie i łatwe przywracanie konfiguracji w wersjach na Androida, iOS i Web. Ta funkcja tworzenia kopii zapasowych chroni ustawienia w przypadku awarii urządzenia lub ponownej instalacji aplikacji. Możesz skorzystać z tego specjalnego planu, korzystając z [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).

Aby korzystać z *Darmowej kopii zapasowej ustawień*, musisz mieć konto [OsmAnd Cloud](../personal/osmand-cloud.md#login). Jeśli masz subskrypcję *OsmAnd Pro* lub aktywne konto *OsmAnd Cloud*, baner promocyjny nie będzie wyświetlany.


## Ustawienia ogólne {#general-settings}

Ta sekcja zawiera ustawienia motywu aplikacji i przycisku kompasu, jednostek i formatów danych mapy i profilu, zewnętrznych urządzeń wejściowych oraz wiele innych ustawień w celu stworzenia optymalnej konfiguracji dla wybranego profilu.

### Wygląd {#appearance}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Umożliwia ustawienie dziennego i nocnego motywu dla aplikacji, który może być zastosowany do jednego profilu lub do wszystkich jednocześnie. Ta opcja nie zmienia ustawień [trybu mapy](../map/vector-maps.md#map-mode).
  - *<Translate android="true" ids="dark_theme"/> motyw*
  - *<Translate android="true" ids="light_theme"/> motyw*
  - *<Translate android="true" ids="system_default_theme"/>*
      Stosuje motyw systemowy. Domyślnie i dla wszystkich nowych użytkowników styl mapy odpowiada jasnemu lub ciemnemu motywowi wybranemu w ustawieniach systemowych urządzenia.
- **<Translate android="true" ids="rotate_map_to"/>**. Umożliwia wybranie [trybu orientacji mapy](../map/interact-with-map.md#map-orientation-modes) dla wybranego profilu.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Ustawia i blokuje pozycję ekranu w aplikacji OsmAnd. Ta funkcja nie jest obsługiwana na iPadzie.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Tylko Android*). Otwiera menu sterowania ekranem, w którym można wybrać opcje dla ekranu urządzenia podczas nawigacji, aby oszczędzić zużycie baterii urządzenia.


### Jednostki i formaty {#units--formats}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/profiles_units_formats_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/profile_unitsformats_3_ios.png)

</TabItem>

</Tabs>

W sekcji **Jednostki i formaty** możesz dostosować jednostki miary i formaty, aby dopasować je do swoich osobistych preferencji i standardów regionalnych, zapewniając wygodne i znajome wyświetlanie wszystkich danych.


<!--

<table>
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Format</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4 align="left">**<Translate android="true" ids="driving_region"/>**</td>
            <td rowspan=2 align="left"><Translate android="true" ids="shared_string_automatic"/></td>
            <td align="left">According to the device location.</td>
        </tr>
        <tr>
            <td rowspan=2 align="left"><Translate android="true" ids="driving_region_europe_asia"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/></td>
        </tr>
        <tr>
            <td align="left"><Translate android="true" ids="driving_region_us"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/></td>
        </tr>
    </tbody>
</table>

-->

|  |  |  |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="driving_region"/>** | <Translate android="true" ids="shared_string_automatic"/> | <ul><li>Zgodnie z lokalizacją urządzenia</li></ul> |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_mi_feet"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_uk"/>  |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_mi_meters"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_india"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|  |  |  |
| **<Translate android="true" ids="unit_of_length"/>** | <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0.62 ml / 3281 ft (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 ya / 0.62 ml (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0.54 nmi / 3280.84 ft / 1000 m |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Przykład: 50.12333° 19.93233° (Szer. Dł.) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Przykład: 50°7.393′ 19°55.941′ (Szer. Dł.)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Przykład: 50°7′23.6″ 19°55′56.4″ (Szer. Dł.) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Strefa Północ Wschód) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Przykład: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Przykład:  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) reprezentuje obszar 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (Tylko wersja Android) | Przykład: 2 215 227.87, 830 915.9 ([Szwajcarski system współrzędnych](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (Tylko wersja Android) | Przykład: 4 215 227.87, 1 830 915.9 ([Szwajcarski system współrzędnych](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).))) |
|  |  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*Android*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| Stopnie 180° | Wszystkie wartości kątowe mają odczyty od 0° do 180° i od 0° do -180°.  |
|          | Stopnie 360° | Wszystkie wartości kątowe mają odczyty od 0° do 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | Wszystkie wartości kątowe mają [wartość miliradianów](https://en.wikipedia.org/wiki/Milliradian).  |
|  |  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*Android*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 kn |
|  |  |  |
| **<Translate android="true" ids="unit_of_volume"/>** | <Translate android="true" ids="litres"/> | Europa, Azja, Ameryka Łacińska, Kanada, Japonia, Indie, Australia |
|  | <Translate android="true" ids="imperial_gallons"/> | Wielka Brytania i podobne |
|  | <Translate android="true" ids="us_gallons"/> | Stany Zjednoczone |
|  |  |  |
| **<Translate android="true" ids="shared_string_temperature"/>** (*Tylko Android*)| <Translate android="true" ids="system_default_theme"/> |  |
|  | <Translate android="true" ids="weather_temperature_celsius"/> |  |
|  | <Translate android="true" ids="weather_temperature_fahrenheit"/> |  |
|  |  |  |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *Dla precyzyjnych pomiarów*, wybierz sposób wyświetlania informacji o odległości w widżetach nawigacyjnych, takich jak odległość do punktu, następny zakręt lub konkretny pas ruchu. |
|          | <Translate android="true" ids="round_up"/> | *Dla lepszej czytelności*, liczby wyświetlane w widżetach nawigacyjnych (odległość do punktu, następny zakręt lub pas ruchu) zostaną zaokrąglone w dół, aby miały mniej cyfr. <br/> Na przykład: 3672 m *→* 3.6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


### Inne {#other}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_general_settings_other_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Profiles General Settings Other iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)

</TabItem>

</Tabs>

Sekcja **Inne** zawiera dodatkowe ustawienia profilu, aby dostosować interfejs i elementy sterujące OsmAnd. Ustawienia te umożliwiają konfigurację urządzeń zewnętrznych, dostosowanie preferencji animacji i przełączanie trybu pełnoekranowego.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – Podłącz zewnętrzne kontrolery, takie jak *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*, *<Translate ios="true" ids="sett_generic_ext_input"/>* lub *<Translate android="true" ids="sett_parrot_ext_input"/>*, aby obsługiwać OsmAnd za pomocą fizycznych przycisków.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*Tylko Android*) – Włącz lub wyłącz możliwość używania przycisków głośności urządzenia do [powiększania](../map/interact-with-map.md#my-location-and-zoom) i pomniejszania mapy.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*Tylko Android*) – Wygładza obrót mapy dzięki [stopniowemu ruchowi](https://en.wikipedia.org/wiki/Kalman_filter), redukując nagłe zmiany pozycji. Wprowadza to niewielkie opóźnienie (*mniej niż 1 sekundę*).

- [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*Tylko Android*) – Wykorzystuje [czujnik magnetyczny](https://en.wikipedia.org/wiki/Kalman_filter) urządzenia do stabilizacji obrotu mapy, redukując nagłe zmiany. Wprowadza to również niewielkie opóźnienie.

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*Tylko Android*) – Dotknij pustego miejsca na mapie, aby ukryć przyciski sterujące i widżety, maksymalizując widoczność mapy.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (*Tylko Android*) – Wyłącz animacje w trybie nawigacji, aby przyspieszyć przejścia ekranu.

- **<Translate android="true" ids="position_animation"/>** (*Tylko Android*) – Ikona [pozycji](../map/interact-with-map.md#my-location-and-zoom) animuje się z każdym odebranym punktem GPS (raz na sekundę). Może być zauważalne niewielkie opóźnienie w jej ruchu, zwłaszcza podczas szybkiego ruchu lub wahań sygnału GPS. Możesz dostosować ten efekt za pomocą ustawienia *Czas predykcji*: wyższe wartości zwiększają płynność, ale dodają opóźnienie, niższe wartości zmniejszają opóźnienie, ale mogą sprawić, że ruch będzie mniej płynny.


## Ustawienia nawigacji {#navigation-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

Szczegółowy przegląd opcji nawigacji znajduje się w artykule [Ustawienia nawigacji](../navigation/guidance/navigation-settings.md), który wyjaśnia, jak skonfigurować OsmAnd w celu uzyskania optymalnego doświadczenia nawigacyjnego.

- [Typ nawigacji](../navigation/guidance/navigation-settings.md#navigation-type) - Wybierz odpowiedni tryb nawigacji w oparciu o metodę podróży i dostępność Internetu.

- [Parametry trasy](../navigation/guidance/navigation-settings.md#route-parameters) - Zdefiniuj, jak OsmAnd oblicza trasy, w tym preferencje dotyczące unikania niektórych dróg lub wybierania typów tras.

- [Alerty ekranowe](../navigation/guidance/navigation-settings.md#screen-alerts) - Włącz *Widżet alertów*, aby wyświetlać powiadomienia w czasie rzeczywistym o ograniczeniach prędkości, zakrętach i innych ważnych warunkach drogowych.

- [Komunikaty głosowe](../navigation/guidance/navigation-settings.md#voice-prompts) - Włącz wskazówki głosowe, aby otrzymywać mówione instrukcje nawigacyjne podczas jazdy lub spaceru wzdłuż wybranej trasy.

- [Parametry pojazdu](../navigation/guidance/navigation-settings.md#vehicle-parameters) – Skonfiguruj ustawienia specyficzne dla pojazdu, takie jak maksymalna prędkość i wysokość pojazdu, aby zapewnić dokładne wyznaczanie trasy i unikać dróg o ograniczonym dostępie.

- [Dostosuj linię trasy](../navigation/guidance/navigation-settings.md#customize-route-line) – Dostosuj kolor, szerokość i styl linii trasy wyświetlanej na mapie dla lepszej widoczności podczas nawigacji.

- [Mapa podczas nawigacji](../navigation/guidance/navigation-settings.md#map-during-navigation) – Zobacz pozycjonowanie w czasie rzeczywistym na mapie, śledź postępy wzdłuż trasy i popraw orientację za pomocą punktów orientacyjnych.

- [Szczegółowe wskazówki dotyczące trasy](../navigation/guidance/navigation-settings.md) – Popraw nawigację zakręt po zakręcie, dopasowując trasę do dróg na mapie. Dostępne ustawienia: *Pytaj za każdym razem* lub *Zawsze*.

:::info
W profilu *Przeglądaj mapę* nie ma ustawień nawigacji.
:::


## Konfiguracja mapy {#configure-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Konfiguruj mapę*

![Profiles Configure map Settings Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*

![Profiles Configure map Settings iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

Menu [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) umożliwia dostosowanie ustawień wyświetlania mapy dla wybranego profilu, co pozwala na lepszą wizualizację kluczowych elementów mapy.

Za pomocą tego menu możesz:

- **Podświetlić ważne elementy mapy**, w tym [Punkty ulubione](../personal/favorites.md), [Znaczniki nawigacyjne](../personal/markers.md) lub specjalne [Punkty zainteresowania](../map/point-layers-on-map.md#points-of-interest-pois) na mapie.

- **Wyświetlić określone trasy i pliki GPX**, w tym ścieżki innych firm do nawigacji lub analizy.

- **Nałożyć dodatkowe warstwy mapy**, takie jak [informacje o terenie](../plugins/topography.md), **zdjęcia satelitarne** lub inne dostępne [mapy rastrowe](../map/raster-maps.md).

- **Włączyć wizualizację transportu publicznego**, pokazując [trasy i przystanki](../map/public-transport.md) dla lepszego planowania podróży.

- **Dostosować wygląd mapy** poprzez wybranie innego [stylu mapy](../map/vector-maps.md#default-map-styles), aby dopasować go do swoich potrzeb.


## Konfiguracja ekranu {#configure-screen}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

- Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*
- Przejdź do: *Menu → Ustawienia → Profil aplikacji → Konfiguruj ekran*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png) ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png) ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

[<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) to menu, które umożliwia konfigurację widżetów dla wybranego profilu, które mają być wyświetlane na mapie. Na tym ekranie można włączyć i skonfigurować widżety [informacyjne](../widgets/info-widgets.md) i [nawigacyjne](../widgets/nav-widgets.md), a także inne elementy.


## Wygląd profilu {#profile-appearance}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

Ustawienia **Wyglądu profilu** umożliwiają dostosowanie nazwy i wizualnej reprezentacji profilu. Możesz również zmodyfikować wygląd [Mojej lokalizacji](#my-location-appearance) tutaj. Podczas gdy *nazwa profilu* musi być unikalna, *ikony* i *kolory* mogą być takie same w różnych profilach. Zmiany te zostaną zastosowane w różnych częściach aplikacji, takich jak menu [Przygotowanie trasy](../navigation/setup/route-navigation.md).


### Wygląd mojej lokalizacji {#my-location-appearance}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![My location Appearance](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*

![My location Appearance](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

Ustawienia **Wyglądu mojej lokalizacji** umożliwiają dostosowanie sposobu wyświetlania Twojej lokalizacji na mapie, zarówno w spoczynku, jak i w ruchu. Ruch jest wykrywany przez system operacyjny, gdy prędkość urządzenia jest **większa niż zero**.

#### 1. Kąt widzenia i promień lokalizacji {#1-view-angle-and-location-radius}

Możesz dostosować elementy wizualne związane z Twoją lokalizacją i zastosować je oddzielnie lub razem dla pozycji **Spoczynkowej** i **Nawigacyjnej**. Zarówno w trybie 2D, jak i 3D, *Kąt widzenia* i *Promień lokalizacji* są wyświetlane w tym samym kolorze wybranym dla [profilu nawigacyjnego](#profile-appearance), bezpośrednio pod ikoną [Moja lokalizacja](../map/interact-with-map.md#my-location-and-zoom).

- **<Translate android="true" ids="view_angle"/>** – Wyświetla obszar w kształcie **stożka** wskazujący kierunek, w którym aktualnie się znajdujesz.
- **<Translate android="true" ids="location_radius"/>** – Pokazuje **obszar kołowy** wokół ikony, reprezentujący dokładność Twojej aktualnej lokalizacji.


#### 2. Niestandardowe ikony 3D {#2-custom-3d-icons}

Dla bardziej spersonalizowanego doświadczenia możesz tworzyć i dodawać **niestandardowe ikony 3D** do OsmAnd.

***Jak dodać niestandardową ikonę lokalizacji 3D:***

1. **Utwórz model 3D**. Zaprojektuj swoją ikonę w [formatach MTL i OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file).

2. **Zintegruj model z OsmAnd:**
   - Opracuj [niestandardową wtyczkę](../plugins/custom.md) za pomocą dostarczonego [przykładu wtyczki](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf).
   - Umieść pliki ikony 3D w następujących ścieżkach:

     `..osmand/models/icon_folder_name/custom_3d_file.mtl`
     `..osmand/models/icon_folder_name/custom_3d_file.obj`

   - Alternatywnie, skopiuj **pliki MTL i OBJ** bezpośrednio do folderu OsmAnd, używając tej samej struktury katalogów.

#### 3. Tryby orientacji mapy {#3-map-orientation-modes}

Możesz kontrolować zachowanie ikony **Moja lokalizacja** za pomocą różnych [trybów orientacji mapy](../widgets/map-buttons.md#compass).

- Jeśli ikona lokalizacji **drży lub obraca się** w spoczynku, przełącz z **Trybu kierunku ruchu** ([Obróć mapę według kierunku](../map/interact-with-map.md#rotate-map-by-bearing)) na inny tryb.
- Dostosuj dodatkowe ustawienia w *Menu → Ustawienia → Profile aplikacji → Wygląd profilu → Opcje*.
- Dowiedz się więcej o śledzeniu kierunku i namiaru w sekcji [Widżet namiaru](../widgets/nav-widgets#bearing-widget).


## Dostosowanie interfejsu użytkownika {#ui-customization}

<InfoAndroidOnly />

:::note Dla nieużywanych wtyczek
Aby ukryć wszystkie parametry kontrolne nieużywanych [wtyczek](../plugins/index.md#configure-plugin), wyłącz je.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)

Dzięki funkcji dostosowywania interfejsu użytkownika możesz dostosować liczbę elementów w działaniach, takich jak [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android), [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) i [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md). Informacje o liczbie dodanych elementów spośród wszystkich możliwych elementów można znaleźć pod tytułem każdej funkcji.


### Szuflada {#drawer}

![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png) ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)

- **Główne widoczne elementy** - W sekcji *Dostosuj interfejs użytkownika* możesz *zmieniać kolejność, ukrywać i przywracać* elementy z [Szuflady](../start-with/main-menu.md#customize-advanced-use-of-android), aby dopasować je do swoich preferencji.

- **<Translate android="true" ids="reset_to_default"/>** - Przywraca *oryginalną listę elementów* w szufladzie, natychmiast cofając wszelkie dostosowania.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Umożliwia skopiowanie *układu szuflady* z innego profilu OsmAnd w celu utrzymania spójnej konfiguracji w różnych profilach.

### Konfiguracja mapy {#configuring-the-map}

![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Menu konfiguracji mapy** - W sekcji *Dostosuj interfejs użytkownika* możesz *zmieniać kolejność lub ukrywać elementy* z [Konfiguracji mapy](../map/configure-map-menu.md), co umożliwia szybki dostęp do często używanych ustawień.

- **<Translate android="true" ids="reset_to_default"/>** - Przywraca *oryginalną listę elementów* w menu Konfiguracji mapy, usuwając wszelkie zmiany.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Kopiuje *układ menu Konfiguracji mapy* z innego profilu OsmAnd.


### Akcje menu kontekstowego {#context-menu-actions}

![Profile Context menu Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png) ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Menu kontekstowe mapy** - W sekcji Dostosuj interfejs użytkownika możesz zmieniać kolejność lub ukrywać elementy w [menu kontekstowym mapy](../map/map-context-menu.md), aby zoptymalizować dostęp do często używanych funkcji.

- **<Translate android="true" ids="reset_to_default"/>** – Przywraca *domyślną listę elementów* w menu kontekstowym mapy, natychmiast cofając wszelkie modyfikacje.

- **<Translate android="true" ids="copy_from_other_profile"/>** – Kopiuje *układ menu kontekstowego* z innego profilu OsmAnd, aby zachować spójność w różnych profilach.


## Ustawienia wtyczek {#plugin-settings}

:::caution Dostęp do ustawień wtyczek
Aby uzyskać dostęp do ustawień wtyczki, należy najpierw [**włączyć wtyczkę**](../plugins/index.md#enable--disable) w *sekcji Wtyczki w menu głównym*.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*

![Profile Settings Plugins Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Profile Settings Plugins iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

Wtyczki odblokowują dodatkowe funkcje aplikacji i mogą być [płatne lub bezpłatne](../plugins/index.md#purchase). Niektóre wtyczki mają własne [ustawienia](../plugins/index.md#plugin-settings), inne nie. OsmAnd daje możliwość konfiguracji wtyczek dla każdego profilu osobno.


- **Nagrywanie podróży**. Ten element otwiera [ustawienia nagrywania podróży](../plugins/trip-recording.md#recording-settings) dla wybranego profilu, gdzie można wybrać dowolne parametry nagrywania swoich podróży.

- **Pogoda**. Interaktywne [warstwy mapy pogody](../plugins/weather.md#weather-settings) umożliwiają monitorowanie temperatury, ciśnienia powietrza, zachmurzenia, prędkości wiatru i opadów w Twoim mieście lub dowolnej innej lokalizacji na globalnej mapie.

- **Notatki audio/wideo** (*Tylko Android*). Ten element otwiera [ustawienia wtyczki audio-wideo](../plugins/audio-video-notes.md#plugin-settings) dla wybranego profilu. Wtyczka *Notatki audio/wideo* rozszerza funkcjonalność OsmAnd, umożliwiając tworzenie notatek w różnych formatach, takich jak zdjęcia, wideo lub audio, i kojarzenie ich z lokalizacją geograficzną lub bieżącą lokalizacją.

- **Edycja OpenStreetMap**. Ten element otwiera [ustawienia wtyczki edycji OpenStreetMap](../plugins/osm-editing.md#settings) dla wybranego profilu. Dzięki OsmAnd i wtyczce do edycji OSM możesz przyczynić się do OpenStreetMap.org, tworząc lub modyfikując POI, dodając lub komentując notatki oraz przesyłając nagrane ślady GPX.

- **Czujniki zewnętrzne**. Po dotknięciu elementu w sekcji *Ustawienia wtyczek* otwierają się [ustawienia czujników zewnętrznych](../plugins/external-sensors.md#sensors-settings) dla wybranego profilu. Wtyczka Czujniki zewnętrzne umożliwia odczytywanie i rejestrowanie danych z bezprzewodowych czujników zewnętrznych oraz wyświetlanie ich za pomocą widżetów w aplikacji OsmAnd.

- **Dostępność** (*Tylko Android*). Ten element otwiera [ustawienia wtyczki Dostępność](../plugins/accessibility.md#plugin-settings) dla wybranego profilu. Ustawienia wtyczki Dostępność umożliwiają dostosowanie aplikacji do własnych potrzeb. Wszystkie ustawienia dotyczą procesu nawigacji i są ustawiane indywidualnie dla każdego profilu.

- **Rozwój OsmAnd**. To menu otwiera [ustawienia wtyczki rozwoju OsmAnd](../plugins/development.md#plugin-settings), gdzie można skonfigurować aplikację OsmAnd do celów testowych lub odkrywać nadchodzące funkcje. Te ustawienia są przeznaczone dla programistów i nie są wymagane do normalnego użytkowania aplikacji.

  > ***Zmiana ustawień wtyczki rozwoju OsmAnd wpływa na wszystkie profile.***

- **Wikipedia**. To menu otwiera *[ustawienia wtyczki Wikipedia](../plugins/wikipedia.md#wikipedia-settings)*. Możesz wybrać język, w którym będą wyświetlane artykuły, i zdecydować, czy pobierać obrazy z Wikipedii. Posiadanie Wikipedii podczas podróży wzbogaca Twoje doświadczenie, dostarczając informacji o odwiedzanych miejscach. Działa offline i wyświetla odpowiednie artykuły z Wikipedii bezpośrednio na mapie, związane z punktami zainteresowania.


## Akcje {#actions}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)

</TabItem>

</Tabs>

Akcje z wybranym profilem:

- [Eksportuj profil](https://osmand.net/docs/user/personal/import-export#export) - Eksportuj wszystkie ustawienia wybranego profilu w formacie OSF.

- **Kopiuj z innego profilu** - Kopiuje wszystkie ustawienia z innego istniejącego profilu w aplikacji OsmAnd.

- **Przywróć domyślne** - Przywraca wszystkie ustawienia do stanu początkowego.

- **Usuń profil**:
    - Ta akcja jest dostępna tylko dla *Androida* i tylko dla *niestandardowego profilu*.
    - Domyślnych profili nie można usunąć.
    - Aby dodać profil, przejdź do *Menu → Ustawienia → Profile aplikacji → + Nowy profil*.


## Powiązane artykuły {#related-articles}

- [Zarządzaj śladami](../personal/tracks/manage-tracks.md#import--export-track)
- [Historia wyszukiwania](../search/search-history.md#export-and-share)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)

> *Ostatnia aktualizacja: luty 2025*