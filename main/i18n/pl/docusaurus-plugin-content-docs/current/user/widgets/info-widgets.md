---
source-hash: f1188d09955bc3e6f60dd73a49f429e588c513aea0cfc5bf7e9e38efe46e0dc9
sidebar_position: 3
title: Widżety informacyjne
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

Widżety informacyjne zapewniają szybki dostęp do ważnych danych. Mogą to być dane dotyczące prędkości, pogody, pozycji parkowania, dane z zewnętrznych czujników i wiele innych. Widżety można konfigurować zgodnie z własnymi wymaganiami, umożliwiając ich widoczność na ekranie aplikacji lub wyłączając je w razie potrzeby.

![Widżety informacyjne](@site/static/img/widgets/informational_widgets_all.png)

## Widżety wysokości {#altitude-widgets}

Widżety wysokości wyświetlają wysokość nad poziomem morza bieżącej geolokalizacji oraz wysokość środka mapy.

### Wysokość: bieżąca lokalizacja {#altitude-current-location}

:::note Pobierz korektę wysokości świata
Na niektórych urządzeniach z systemem Android wysokość może być wyświetlana niedokładnie. Aby rozwiązać ten problem, pobierz mapę z korektą wysokości.

- Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Aby uzyskać więcej informacji, odwiedź [Mapy i zasoby](../personal/maps-resources.md#downloads).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet wysokości Android](@site/static/img/widgets/altitude_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet wysokości iOS](@site/static/img/widgets/altitude_widget_ios.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| Po dotknięciu | Brak zmian |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menu → Ustawienia → Profile aplikacji → Ustawienia ogólne → Jednostki i formaty → Jednostki długości* |

### Wysokość: środek mapy {#elevation-map-center}

:::info Funkcja płatna
&nbsp;<ProFeature/> Aby uzyskać dostęp do widżetu *Wysokość: środek mapy*, wykup subskrypcję OsmAnd Pro dla [Androida](../purchases/android.md#pro-features) lub [iOS](../purchases/ios.md#pro-features).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet wysokości Android](@site/static/img/widgets/elevation_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet wysokości iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

Możesz użyć widżetu, aby sprawdzić wysokość środka bieżącej mapy nad poziomem morza. Do wyświetlania informacji w widżecie **Wysokość: środek mapy** potrzebna jest [mapa terenu (cieniowanie wzgórz i nachylenie)](../plugins/topography.md#download-maps) wymaganego obszaru.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| Po dotknięciu | Brak zmian |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menu → Ustawienia → Profile aplikacji → Ustawienia ogólne → Jednostki i formaty → Jednostki długości* |

## Bieżąca godzina {#current-time}

![Widżet bieżącej godziny](@site/static/img/widgets/current_time_widget.png)

Ten widżet wyświetla bieżącą godzinę pobraną z Twojego urządzenia.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_plain_time"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_plain_time"/>* |
| Po dotknięciu | Brak zmian |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | Ustawienia urządzenia konfigurują czas i format. |

## Bieżąca prędkość {#current-speed}

![Widżet prędkości](@site/static/img/widgets/current_speed_widget.png)

Widżet pokazuje bieżącą prędkość wykrytą przez czujnik GPS.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_current_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_current_speed"/>* |
| Po dotknięciu | Brak zmian |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |

## Średnia prędkość {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet średniej prędkości Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet średniej prędkości iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>

Widżet **Średnia prędkość** oblicza i wyświetla średnią prędkość w wybranym przedziale czasowym bez konieczności nawigacji lub rejestrowania trasy. Jest to przydatne do monitorowania zgodności prędkości na autostradach lub śledzenia średniej prędkości w ciągu ostatnich kilku minut jazdy na rowerze.

1. ***Konfigurowanie widżetu.***
   Aby dostosować ustawienia, dotknij przycisku **Ustawienia** (*Android*) lub **pola widżetu** (*iOS*). Dostępne opcje to:

2. ***Przedział czasowy.***

   - Średnia prędkość jest obliczana na podstawie wybranego przedziału czasowego, który może wynosić od **15 sekund do 60 minut**.

   - Obliczenia opierają się na danych GPS przy użyciu wzoru:
   `Średnia prędkość = ŚREDNIA(GPS_LOKALIZACJA.prędkość)`.

3. ***Uwzględnij postoje.***

   **Włączone** — Jeśli zarejestrowana prędkość jest niższa niż 1 jednostka na godzinę, jest ignorowana, co zapobiega niepotrzebnym spadkom średniej prędkości podczas zatrzymywania się na światłach lub krótkich przerw.

   **Wyłączone** — Postoje są uwzględniane w obliczeniach, co oznacza, że długie przerwy zmniejszą ogólną średnią prędkość.

4. ***Zresetuj średnią prędkość.***
   Możesz zresetować obliczenia średniej prędkości na dwa sposoby:

   - Długie dotknięcie widżetu, aby otworzyć [menu kontekstowe](../widgets/configure-screen.md#widget-context-menu), i wybierz *Zresetuj średnią prędkość*.
   - Otwórz *ustawienia widżetu* za pomocą [menu Konfiguruj ekran](../widgets/configure-screen.md#settings) i wybierz opcję resetowania.

Po zresetowaniu średnia prędkość jest ponownie obliczana na podstawie nowych danych GPS. Ta funkcja jest przydatna do monitorowania prędkości w czasie rzeczywistym, np. do śledzenia prędkości w obszarach z **kamerami do pomiaru średniej prędkości**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Średnia prędkość](@site/static/img/widgets/average_speed_widget_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżety średniej prędkości](@site/static/img/widgets/average_speed_widget_ios_1.png) ![Widżety średniej prędkości](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_average_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_average_speed"/>* |
| Po dotknięciu | Brak zmian |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu). <br/> Może być używane do resetowania średniej prędkości. |

## Współczynnik szybowania {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Widżety| Widżety na ekranie|
|:--------|:---------|
|![Współczynnik szybowania](@site/static/img/widgets/glide_ratio_3.png)|![Współczynnik szybowania](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widżety| Widżety na ekranie|
|:--------|:---------|
|![Współczynnik szybowania](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Współczynnik szybowania](@site/static/img/widgets/glide_ratio_widget_ios.png)|

</TabItem>

</Tabs>

[Proste](../widgets/configure-screen.md#widgets-for-all-panels) widżety *Współczynnik szybowania* dostarczają cennych informacji o współczynniku szybowania, pomagając podejmować świadome decyzje podczas planowania tras lotniczych. Widżet *Współczynnik szybowania* w OsmAnd pomaga ocenić efektywność zniżania lub wznoszenia podczas nawigacji do określonej lokalizacji (pozycji [znacznika](../personal/markers.md) na mapie). Oblicza współczynnik szybowania jako stosunek odległości do różnicy wysokości między bieżącą pozycją a zamierzonym celem. Więcej na ten temat można przeczytać [tutaj](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).

**Wykorzystanie widżetów:**

- *Planowanie lotów szybowcowych.* Dla pilotów szybowcowych widżet *Współczynnik szybowania do celu* staje się niezastąpionym narzędziem podczas planowania i wykonywania lotów szybowcowych. Piloci mogą oszacować, jak daleko mogą lecieć do celu, biorąc pod uwagę aktualne warunki i wymagany współczynnik szybowania.
- *Optymalizacja wznoszeń i zniżań.* Średni współczynnik szybowania pozwala pilotom optymalizować wznoszenia i zniżania w oparciu o aktualne warunki. Piloci mogą wybrać optymalny czas na wznoszenia, aby zmaksymalizować czas lotu, lub na zniżania, aby osiągnąć punkt docelowy.
- *Reagowanie na zmieniające się warunki.* Widżet zapewnia ciągłe aktualizacje współczynnika szybowania, umożliwiając pilotom natychmiastową reakcję na zmiany warunków atmosferycznych lub tras. Mogą dostosować swój plan lotu, aby zapewnić bezpieczeństwo i wydajność.
- *Maksymalne wykorzystanie odległości poziomej.* Znajomość współczynnika szybowania pozwala pilotom maksymalnie wykorzystać odległość poziomą do przemieszczenia się do celu, co jest szczególnie ważne przy planowaniu długich lotów.
- *Redukcja ryzyka*. Widżet *Współczynnik szybowania do celu* pomaga pilotom unikać sytuacji, w których osiągnięcie celu staje się niemożliwe z powodu niewystarczającego współczynnika szybowania. Pomaga to zmniejszyć ryzyko i poprawić bezpieczeństwo lotu.

**Wartości dodatnie i ujemne:**

- **Wartości dodatnie** wskazują, że cel znajduje się na niższej wysokości niż Twoja bieżąca pozycja, co wymaga zniżania.
- **Wartości ujemne** wskazują, że cel znajduje się na wyższej wysokości, co wymaga wznoszenia. Na przykład „-90:1” oznacza, że po pokonaniu odległości 90 kilometrów musisz wznieść się o 1 kilometr, aby dotrzeć do celu.

**Zaokrąglanie/formatowanie:**

- Wartość **≤ 0.1**:
  - „0.05” jest wyświetlane jako „0”.
- Wartość **> 0.1 i < 100**:
  - na przykład „50.7643” jest wyświetlane jako „50.8:1”.
- Wartość **> 100:**
  - „102.35” jest wyświetlane jako „102:1”.

### Współczynnik szybowania do celu {#glide-ratio-to-target}

- **Współczynnik szybowania do celu** pokazuje dokładny współczynnik szybowania wymagany do osiągnięcia punktu docelowego.
- **Wysokość celu** pokazuje wysokość punktu docelowego. Jako punkt docelowy należy użyć [znacznika mapy](../personal/markers.md).

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → Współczynnik szybowania* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → Współczynnik szybowania* |
| Po dotknięciu | Zmienia *Współczynnik szybowania do celu* lub *Wysokość celu* |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Średni współczynnik szybowania {#average-glide-ratio}

- **Średni współczynnik szybowania** pokazuje średni współczynnik szybowania dla określonego przedziału czasowego.
- **Średnia prędkość pionowa** wskazuje tempo, w jakim obiekt wznosi się lub opada przez pewien czas. Do oceny brane są pod uwagę tylko pierwszy i ostatni punkt przedziału czasowego. Możesz ustawić przedział czasowy dla tego widżetu od 15 sekund do 60 minut. Jako punkt docelowy należy użyć [znacznika mapy](../personal/markers.md).

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → Współczynnik szybowania* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → Współczynnik szybowania* |
| Po dotknięciu | Zmienia *Średni współczynnik szybowania* lub *Średnią prędkość pionową* |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

## Poziom baterii {#battery-level}

![Widżet poziomu baterii](@site/static/img/widgets/battery_level_widget.png)

Widżet **Poziom baterii** wyświetla procent baterii urządzenia bezpośrednio na ekranie mapy i aktualizuje się automatycznie co najmniej raz na minutę.

- **iOS 17 i nowsze** — Ze względu na **ograniczenia prywatności**, dane dotyczące poziomu baterii są dostępne tylko w odstępach 5% (np. 35%, 60% lub 85%). Jest to systemowe ograniczenie narzucone przez Apple.

- Urządzenia **Android** — Widżet wyświetla dokładny procent baterii, zgodnie z raportem systemu, bez zaokrąglania.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_battery"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_battery"/>* |
| Po dotknięciu | Brak zmian |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

## Widżet współrzędnych {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet współrzędnych Android](@site/static/img/widgets/coordinates_widget_1.png) ![Widżet współrzędnych Android](@site/static/img/widgets/coordinates_widget_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet współrzędnych Android](@site/static/img/widgets/coordinates_widget_ios_2.png)

</TabItem>

</Tabs>

OsmAnd oferuje dwa typy widżetów współrzędnych:

- **Współrzędne: środek mapy** - pokazuje współrzędne geograficzne środka bieżącej mapy.
- **Współrzędne: bieżąca lokalizacja** - pokazuje współrzędne geograficzne bieżącej geolokalizacji.

Widżety współrzędnych są wyświetlane w górnej części ekranu. Ikony z zielonym tłem pokazują szerokość i długość geograficzną punktu w centrum widocznej części mapy, a te z niebieskim tłem pokazują współrzędne Twojej bieżącej lokalizacji. Informacje o obsługiwanych *formatach współrzędnych* można znaleźć w artykule *[Wyszukiwanie współrzędnych](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| Po dotknięciu | Kopiuje współrzędne do schowka. |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) lub <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |

## Informacje GPS {#gps-info}

<InfoAndroidOnly />

![Informacje GPS widżet Android](@site/static/img/widgets/gps_info_widget.png)

Widżet informacji GPS (Global Positioning System) pokazuje liczbę satelitów, które urządzenie aktualnie wykrywa i wykorzystuje. Możesz go użyć do sprawdzenia statusu GPS w przypadku słabego sygnału.

Możesz zresetować bieżącą pamięć podręczną GPS poprzez:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_gps_info"/>* |
| Po dotknięciu | Otwiera menu statusu GPS z narzędziami innych firm do konfiguracji wbudowanego urządzenia GPS. |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

## Pozycja słońca {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżety zachodu i wschodu słońca](@site/static/img/widgets/sun_position.png) ![Widżety zachodu i wschodu słońca](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżety zachodu i wschodu słońca](@site/static/img/widgets/sun_position_4_ios.png) ![Widżety zachodu i wschodu słońca](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>

Widżety pozycji słońca pokazują czasy następnego wschodu i zachodu słońca dla środka mapy. Po dotknięciu wyświetlają czas pozostały do oczekiwanego zachodu lub wschodu słońca. W obu przypadkach czas jest oparty na skonfigurowanym czasie Twojego urządzenia.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| Po dotknięciu | Przełączanie między pozostałym czasem a czasem następnego wschodu/zachodu słońca. |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

## Linijka promienia {#radius-ruler}

:::note
Bardziej szczegółowy opis można znaleźć tutaj: **[Linijka promienia i linijka](../widgets/radius-ruler)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ekran linijki promienia](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Linijka promienia"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Linijka promienia"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Linijka promienia"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

Widżet Linijka promienia pokazuje odległość między Twoją lokalizacją a punktem środkowym Linijki promienia. Promień pierwszego okręgu jest równy [skali mapy](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="radius_ruler_item"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| Po dotknięciu | Zmienia stan widżetu między trybami czarnej skali, skali szarości i niewidocznym. |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

## Prędkościomierz {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Prędkościomierz](@site/static/img/widgets/speedometer_1_andr.png) ![Prędkościomierz](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Prędkościomierz](@site/static/img/widgets/speedometer_1_ios.png) ![Prędkościomierz](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

**Widżet prędkościomierza** to graficzne wyświetlanie bieżącej prędkości pojazdu na podstawie *danych otrzymanych z GPS*. Pozwala monitorować w czasie rzeczywistym zgodność między Twoją prędkością a dopuszczalnym ograniczeniem prędkości. Dopuszczalne ograniczenie prędkości jest dostarczane przez [dane OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) dla danego odcinka drogi i ustawienie [Tolerancja ograniczenia prędkości](../navigation/guidance/voice-navigation.md#speed-limit) w OsmAnd.

- W *ustawieniach prędkościomierza* możesz wybrać rozmiar (**Wysokość**) widżetu na ekranie aplikacji jako *Mały*, *Średni* lub *Duży*.
- Możesz określić, kiedy otrzymywać **ostrzeżenie o ograniczeniu prędkości**, wybierając *Zawsze* lub *Po przekroczeniu*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Prędkościomierz"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Prędkościomierz"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Prędkościomierz* |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>* |

## Widżety wtyczek {#plugin-widgets}

Te widżety są włączone i działają w połączeniu z odpowiadającymi im wtyczkami.

### Widżety rejestracji podróży {#trip-recording-widgets}

:::note
Bardziej szczegółowy opis można znaleźć tutaj: **[Wtyczka <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![widżet_rejestracji_podróży](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![widżet_rejestracji_podróży](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

Widżety rejestracji podróży odnoszą się do [wtyczki <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md#widgets). Możesz używać widżetów do przeglądania krótkich informacji o rejestracji trasy na ekranie. Takich jak *Odległość*, *Czas trwania*, *Pod górę* i *W dół*.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_monitoring"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_monitoring"/>* |
| Po dotknięciu | Rozpoczyna/zatrzymuje rejestrację trasy lub wyświetla wykres. |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Widżety zewnętrznych czujników {#external-sensors-widgets}

:::note
Aby dodać widżety zewnętrznych czujników do ekranu mapy, włącz wtyczkę OsmAnd [Zewnętrzne czujniki](../plugins/external-sensors.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżety zewnętrznych czujników Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![widżet_rejestracji_podróży](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Widżety odnoszą się do [wtyczki Zewnętrzne czujniki](../plugins/external-sensors.md#widgets). Możesz ich używać do przeglądania krótkich informacji z zewnętrznych czujników, takich jak: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*tylko Android*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** i **<Translate android="true" ids="external_device_characteristic_temperature"/>**. *Na iOS* możesz również wybrać **poziom baterii** podłączonych czujników BLE, aby był wyświetlany bezpośrednio w widżecie.

- Aby dodać widżet — [włącz](../plugins/index.md#enable--disable) wtyczkę OsmAnd Zewnętrzne czujniki.

- Aby dodać czujniki, wybierz jedną z opcji:
  - Przejdź do *Menu → Wtyczki → Zewnętrzne czujniki → Ustawienia → Sparuj nowy czujnik*.
  - Przejdź do *Menu → Konfiguruj ekran → Wybierz panel → Dodaj widżet → Zewnętrzne czujniki → Wybierz czujnik → Ustawienia → Sparuj nowy czujnik*.

- Dodaj widżety, nawet jeśli nie jest podłączony żaden zewnętrzny czujnik.

- **Wszystkie dodane widżety są widoczne**, nawet jeśli nie jest podłączony żaden zewnętrzny czujnik.

- Użyj [wtyczki rejestracji podróży](../plugins/trip-recording.md#recording-settings) do rejestrowania danych z czujników.

- Przeczytaj, jak wybrać, który czujnik (tego samego typu) ma być wyświetlany w widżecie [tutaj](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| Po dotknięciu | Brak zmian (*Android*) / Przełącza tryb między danymi czujnika a poziomem baterii (*iOS*). |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Widżety metryk pojazdu {#vehicle-metrics-widgets}

<InfoAndroidOnly />

:::note
Aby dodać widżety metryk pojazdu do ekranu mapy, włącz wtyczkę OsmAnd [Metryki pojazdu](../plugins/vehicle-metrics.md).
:::

![Widżety metryk pojazdu Android](@site/static/img/widgets/vehicle_metrics_1.png)

Widżety należą do [wtyczki Metryki pojazdu](../plugins/vehicle-metrics.md#widgets). Możesz ich używać do przeglądania informacji z podłączonego skanera OBD-II, takich jak (*13 metryk*): **Temperatura wlotu**, &nbsp; **Temperatura otoczenia**, &nbsp; **Temperatura płynu chłodzącego**, &nbsp; **Temperatura oleju silnikowego**, &nbsp; **Prędkość obrotowa silnika** (*bezpłatnie*), &nbsp; **Czas pracy silnika**, &nbsp; **Obliczone obciążenie silnika**, &nbsp; **Ciśnienie paliwa**, &nbsp; **Zużycie paliwa**, &nbsp; **Pozostałe paliwo**, &nbsp; **Poziom baterii**, &nbsp; **Prędkość pojazdu** (*bezpłatnie*) i **Pozycja przepustnicy**.

- Aby dodać widżety metryk pojazdu do ekranu mapy, [włącz](../plugins/index.md#enable--disable) **wtyczkę Metryki pojazdu**.
- Możesz dodawać widżety, nawet jeśli nie jest podłączony żaden skaner OBD-II.
- Wszystkie dodane widżety są widoczne, niezależnie od tego, czy skaner OBD-II jest podłączony, czy nie.
- Aby edytować widżet, dotknij widżetu dodanego do panelu, a następnie dotknij *Ustawienia* lub bezpośrednio dotknij *ikonę Ustawień* w polu widżetu.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="obd_widget_group"/>* |
| Po dotknięciu | Brak zmian |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Widżety pogodowe {#weather-widgets}

:::note
Aby dodać widżety pogodowe do ekranu mapy, włącz wtyczkę OsmAnd [Pogoda](../plugins/weather.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet pogodowy Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet pogodowy iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>

Widżety pogodowe wyświetlają aktualne informacje pogodowe dla centralnego punktu na mapie. Są one automatycznie włączane na ekranie, gdy są przeglądane za pomocą wtyczki (*Menu → Pogoda*), i możesz wybrać, które z nich umieścić na ekranie głównym do codziennego użytku (*Menu → Dostosuj ekran*). Więcej na ten temat można przeczytać w artykule [Wtyczka Pogoda](../plugins/weather.md).

- **Temperatura**. <Translate android="true" ids="temperature_widget_desc"/>
- **Ciśnienie powietrza**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Wiatr**. <Translate android="true" ids="wind_widget_desc"/>
- **Chmury**. <Translate android="true" ids="clouds_widget_desc"/>
- **Opady**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="shared_string_weather"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="shared_string_weather"/>* |
| Po dotknięciu | Pokazuje w wyskakującym oknie dialogowym datę i godzinę, kiedy informacje pogodowe są aktualne. |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menu → Wtyczki → Pogoda → Ustawienia* lub *Menu → Ustawienia → Profil aplikacji → Pogoda* |

### Widżet parkowania {#parking-widget}

:::note
Aby dodać widżety parkowania do ekranu mapy, włącz wtyczkę OsmAnd [Pozycja parkowania](../plugins/parking.md).
:::

![Widżet parkowania](@site/static/img/plugins/parking/parking_widget.png)

Widżet wtyczki Parkowanie pokazuje odległość od środka ekranu do miejsca parkowania. Aby ustawić miejsce parkingowe na mapie, powiększ do wymaganego poziomu, a następnie długo dotknij miejsca na mapie, aby otworzyć menu kontekstowe. Postępuj zgodnie z [tymi ustawieniami](../plugins/parking.md#set-a-spot).

**Uwaga:** Widżet parkowania pojawi się tylko wtedy, gdy na mapie zostanie dodana pozycja parkowania. Bez zapisanej pozycji parkowania widżet nie będzie widoczny.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_parking"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="parking_place"/>* |
| Po dotknięciu | Przenosi widok mapy do pozycji parkowania. |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |

### Widżet Mapillary {#mapillary-widget}

:::note
Aby dodać widżet Mapillary do ekranu mapy, włącz wtyczkę OsmAnd [Mapillary](../plugins/mapillary.md).
:::

![Widżet Mapillary](@site/static/img/widgets/mapillary_widget.png)

Jest to widżet wtyczki Mapillary, który zapewnia szybki dostęp do aplikacji Mapillary, umożliwiającej dodawanie [*obrazów na poziomie ulicy*](../plugins/mapillary.md#enable-layer). Widżet jest automatycznie dodawany do mapy po włączeniu wtyczki.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="mapillary"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="mapillary"/>* |
| Po dotknięciu | Otwiera aplikację [Mapillary](https://www.mapillary.com/). |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Widżet notatek audio/wideo {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Aby dodać widżety notatek audio/wideo do ekranu mapy, włącz wtyczkę OsmAnd [Notatki audio/wideo](../plugins/audio-video-notes.md).
:::

![Widżet notatek audio-wideo](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

Są to widżety wtyczki notatek audio/wideo, które zapewniają szybki dostęp do rozpoczynania/zatrzymywania nagrywania notatek audio, wideo lub zdjęć.

Możesz skonfigurować, która akcja jest domyślnie wybrana:

- *Na żądanie*. Stan domyślny. Za każdym razem wyświetlane jest okno dialogowe wyboru akcji.
- *Nagraj audio* - nagrywa notatkę audio.
- *Nagraj wideo* - pozwala nagrać wideo.
- *Zrób zdjęcie* - pozwala zrobić zdjęcie.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_av_notes"/>* |
| Po dotknięciu | Rozpoczyna / zatrzymuje nagrywanie notatki |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Widżet śledzenia {#tracker-widget}

<InfoAndroidOnly />

:::note
Aby dodać widżet śledzenia do ekranu mapy, włącz wtyczkę OsmAnd [Śledzenie](../plugins/osmand-tracker.md).
:::

Aby wtyczka i widżet działały, musisz zainstalować [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) z Google Play lub innych źródeł.

Ten widżet wtyczki OsmAnd Tracker służy do szybkiego dostępu do aplikacji OsmAnd Tracker i udostępniania informacji o lokalizacji innym użytkownikom. Aplikacja wysyła wiadomości *Lokalizacja na żywo* do wybranych czatów w określonym czasie, wyświetla listę kontaktów i grup oraz sprawdza czaty pod kątem wiadomości z Twoją lokalizacją, które są następnie wyświetlane na mapie w OsmAnd.

![Widżet śledzenia](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="tracker_item"/>* |
| Po dotknięciu | Otwiera aplikację OsmAnd Online GPS Tracker. |

### Widżety dla programistów {#developer-widgets}

:::note
Aby dodać widżety dla programistów do ekranu mapy, włącz wtyczkę OsmAnd [Rozwój OsmAnd](../plugins/development.md).
:::

**Widżety dla programistów** dostarczają informacji o [prędkości renderowania mapy](../plugins/development.md#map-rendering-fps-widget) i parametrach pozycji wirtualnej kamery, w tym [poziomie powiększenia](../plugins/development.md#zoom-level), [odległości](../plugins/development.md#distance-to-target) do środka mapy, [wysokości kamery](../plugins/development.md#camera-elevation) i [kącie nachylenia](../plugins/development.md#camera-tilt).

#### FPS renderowania mapy {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet FPS Android](@site/static/img/widgets/fps_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet FPS iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

[Widżet FPS renderowania mapy](../plugins/development.md#map-rendering-fps-widget) wyświetla prędkość renderowania mapy i jej elementów, mierzoną w klatkach na sekundę (FPS). Wyższa wartość FPS wskazuje na szybsze renderowanie i płynniejszą wydajność wizualną.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_rendering_fps"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| Po dotknięciu | Brak zmian |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

#### Widżety kamery {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżety pozycji kamery](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżety pozycji kamery 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

**Widżety kamery** umożliwiają monitorowanie wyrównania mapy OsmAnd z powierzchnią ziemi.

- [Pochylenie kamery](../plugins/development.md#camera-tilt). Wyświetla kąt pochylenia kamery w trybie perspektywy. Wartość domyślna to 90° (bez pochylenia).
- [Wysokość kamery](../plugins/development.md#camera-elevation). Wskazuje wysokość kamery nad poziomem powierzchni.
- [Poziom powiększenia](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Odległość od kamery do celu](../plugins/development.md#distance-to-target). Mierzy odległość między kamerą a docelową lokalizacją na mapie.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="developer_widgets"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="developer_widgets"/>* |
| Po dotknięciu | Przełączanie między trybami (*Poziom powiększenia*) / Brak zmian (*Inne*) |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

#### Dostępna pamięć RAM {#available-ram}

<InfoAndroidOnly />

![Widżety średniej prędkości](@site/static/img/widgets/available_RAM_2_andr.png)

Widżet **Dostępna pamięć RAM** to narzędzie do monitorowania zużycia pamięci urządzenia w odniesieniu do OsmAnd. Dostarcza szczegółowych danych, które pomagają zoptymalizować wydajność aplikacji.

- **Dostępna pamięć RAM aplikacji.** Wyświetla ilość pamięci RAM dostępnej dla OsmAnd do użycia bez powodowania problemów z wydajnością.

- **Zużycie pamięci RAM aplikacji** — Pokazuje bieżące zużycie pamięci RAM przez OsmAnd.

- **Całkowita pamięć RAM aplikacji** — Wskazuje całkowitą pamięć przydzieloną OsmAnd, w tym zarówno używaną, jak i dostępną pamięć.

> **UWAGA**. *Całkowita dostępna pamięć RAM* może się różnić w zależności od procesów działających w tle i innych aplikacji uruchomionych na urządzeniu. Te wartości są dynamiczne i oferują sposób na śledzenie i zarządzanie zużyciem pamięci w celu zapewnienia spójnej i wydajnej pracy OsmAnd.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="developer_widgets"/> → *Dostępna pamięć RAM* |
| Po dotknięciu | Brak zmian |
| Długie dotknięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

## Powiązane artykuły {#related-articles}

- [Konfiguracja ekranu](./configure-screen.md)
- [Przyciski mapy](./map-buttons.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Linijka promienia i linijka](./radius-ruler.md)
- [Widżety znaczników](./markers.md)
- [Szybka akcja](./quick-action.md)

> *Ostatnia aktualizacja: kwiecień 2025*