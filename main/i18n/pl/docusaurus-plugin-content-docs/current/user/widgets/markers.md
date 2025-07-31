---
source-hash: 9e178d46c34474107d426605f944341538b486f2bc4997dab4e5643b50cb3990
sidebar_position: 6
title: Widżety znaczników
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

Znaczniki to tymczasowe punkty wskazane na mapie w postaci flag. Widżety pokazują *kierunek*, *odległość*, *adres* i *szacowany czas przybycia* do znacznika. Pozwalają szybko znaleźć znaczniki na mapie, a także zmienić ich położenie. Więcej o znacznikach można przeczytać w tym [artykule](../personal/markers).


## Widżet górnego paska {#top-bar-widget}

Widżet **Pasek znaczników mapy** (Android) / **Wskazanie odległości — górny pasek** (iOS) wyświetla:

- Odległość od bieżącej lokalizacji (lub środkowego punktu mapy / początkowego punktu dotknięcia mapy, gdy lokalizacja jest wyłączona) do wybranego punktu wskazanego przez znacznik na mapie ([jednostki długości](../personal/profiles/#general-settings) można wybrać w ustawieniach profilu).
- Strzałka w tym samym kolorze co znacznik wskazuje kierunek z bieżącej lokalizacji (lub środkowego punktu mapy / początkowego punktu dotknięcia mapy, gdy lokalizacja jest wyłączona) i orientację urządzenia w przestrzeni (kierunek) w stronę znacznika.
- Adres lokalizacji.
- Ikona menu prowadząca do [listy znaczników mapy](../personal/markers/#map-markers-menu).

Możesz również wybrać wyświetlanie jednego lub dwóch znaczników. Więcej o ustawieniach widżetu przeczytasz w tym [artykule](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*Odległość do znacznika* to długość linii prostej między Twoją pozycją (lub środkowym punktem mapy / początkowym punktem dotknięcia mapy, gdy lokalizacja jest wyłączona) a znacznikiem.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Znaczniki mapy na widżecie górnego paska](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Włącz | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="map_markers_bar"/>* |
| Dotknięcie | Widoczna część mapy przesuwa się do lokalizacji znacznika. |
| Długie dotknięcie + przesunięcie | Aby zmierzyć odległość i zobaczyć kierunek z określonego punktu na mapie do śledzonego znacznika, należy długo dotknąć i natychmiast lekko przesunąć położenie mapy (menu kontekstowe nie powinno się pojawić). |
| Podejdź do znacznika | Jeśli Twoja lokalizacja znajduje się w małym promieniu znacznika mapy (**< 50 m**), w polu widżetu możesz zobaczyć przycisk zaznaczenia, aby szybko usunąć znacznik mapy (oznaczyć jako przekroczony). Zaznaczony znacznik jest zastępowany przez następny znacznik na liście znaczników. |
| Format odległości | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Znaczniki mapy na widżecie górnego paska](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Włącz | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="map_markers_bar"/>*|
| Dotknięcie | Widoczna część mapy przesuwa się do lokalizacji znacznika. |
| Dotknięcie | Przełączanie między "Odległością" / "Szacowanym czasem przybycia" (tryb przełączania). |
| Podejdź do znacznika | Jeśli Twoja lokalizacja znajduje się w małym promieniu znacznika mapy (**< 50 m**), w polu widżetu możesz zobaczyć przycisk zaznaczenia, aby szybko usunąć znacznik mapy (oznaczyć jako przekroczony). Zaznaczony znacznik jest zastępowany przez następny znacznik na liście znaczników. |
| Format odległości | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Widżety panelu {#panel-widgets}

Widżet **Znaczniki mapy** *(dla Androida)* i **Wskazanie odległości - Widżety** *(dla iOS)* wyświetlają:

- *Odległość od bieżącej lokalizacji* do wybranego punktu wskazanego przez znacznik na mapie ([jednostki długości](../personal/profiles/#general-settings) można wybrać w ustawieniach profilu).
- *Szacowany czas przybycia lub ETA*.
Jest to czas (gg:mm), w którym pojazd lub osoba powinna dotrzeć do celu. Jest obliczany jako odległość do znacznika podzielona przez średnią prędkość.
Średnia prędkość jest obliczana jako średnia wszystkich wartości prędkości otrzymanych z punktów lokalizacji dla wybranego interwału czasowego od 15 sekund do 60 minut.

Możesz również wybrać wyświetlanie jednego lub dwóch znaczników. Więcej o ustawieniach widżetu przeczytasz w tym [artykule](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*Odległość do znacznika* to długość linii prostej między Twoją pozycją (lub określonym punktem na mapie) a znacznikiem.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżety panelu](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| Włącz | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| Dotknięcie 1 | Przełączanie między "Odległością" / "Szacowanym czasem przybycia" (tryb przełączania). |
| Dotknięcie 2 | Widoczna część mapy przesuwa się do lokalizacji znacznika (tryb przejścia do lokalizacji znacznika) |
| Długie dotknięcie + przesunięcie | Aby zmierzyć odległość i zobaczyć kierunek z określonego punktu na mapie do śledzonego znacznika, należy długo dotknąć i natychmiast lekko przesunąć położenie mapy (menu kontekstowe nie powinno się pojawić). |
| Format odległości | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Widżety panelu](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Włącz | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="map_markers_bar"/>* |
| Dotknięcie | Widoczna część mapy przesuwa się do lokalizacji znacznika. |
| Dotknięcie | Przełączanie między "Odległością" / "Szacowanym czasem przybycia" (tryb przełączania). |
| Format odległości | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Konfiguracja widżetów znaczników {#configure-marker-widgets}

Ogólne informacje o ustawieniach widżetu znaczników mapy można znaleźć na tej [stronie](../personal/markers#map-markers-widgets).

**Pasek znaczników mapy**
Widżet górnego paska wyświetla odległość i kierunek do następnego znacznika mapy z bieżącej lokalizacji. W ustawieniach można wybrać, czy na górze ekranu będzie wyświetlany jeden czy dwa znaczniki.

![wygląd_na_mapie](@site/static/img/widgets/configure-marker-wid-02.png)

**Znaczniki mapy**
Widżet pokazuje odległość lub szacowany czas przybycia (ETA) dla pierwszego lub drugiego znacznika na liście znaczników mapy. Możesz wybrać: jeden znacznik, pierwszy lub drugi, do wyświetlenia na ekranie lub oba.

![wygląd_na_mapie](@site/static/img/widgets/configure-marker-wid-01.png) ![wygląd_na_mapie](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| Pokazuje | Ten tryb pozwala wybrać, jakie informacje będzie wyświetlał widżet: *Odległość* lub *Szacowany czas przybycia*. |
| Interwał | Jeśli w opcji „Pokaż” wybrano *Szacowany czas przybycia*, ta opcja pojawia się z wyborem czasu (od 15 sekund do 60 minut) dla obliczenia ETA. |
| Kliknij na widżet | To ustawienie pozwala wybrać, która akcja zostanie wykonana po kliknięciu na widżet: *Przełącz tryb* lub *Przejdź do lokalizacji znacznika*. |


## Wygląd na mapie {#appearance-on-the-map}

Konfiguracja wyglądu znaczników mapy jest dostępna zarówno w wersji OsmAnd na Androida, jak i na iOS. Menu „Wygląd na mapie” to ogólne ustawienie dla znaczników mapy i ma zastosowanie niezależnie od tego, czy widżety są włączone, czy nie. Szczegółowe informacje można znaleźć na tej [stronie](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![wygląd_na_mapie](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Pokazuje informacje o pierwszym lub dwóch znacznikach na liście znaczników mapy. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | Wskazuje kierunek do śledzonego znacznika (jednego lub dwóch) jako strzałkę na mapie. Jeśli znacznik znajduje się w widocznej części mapy, strzałka nie jest wyświetlana. |
| <Translate android="true" ids="show_guide_line"/> | Pokazuje kierunek, jako przerywaną linię, z określonego punktu na mapie do śledzonego znacznika w linii prostej. |
| <Translate android="true" ids="one_tap_active"/> | Jednym dotknięciem wymaganego znacznika na mapie, znacznik ten przesuwa się na początek listy aktywnych znaczników mapy bez otwierania menu kontekstowego. |
| <Translate android="true" ids="keep_passed_markers"/> | Znaczniki dodane jako grupa Ulubionych lub punkty trasy GPX oznaczone jako Przekroczone pozostaną na mapie. Jeśli grupa nie jest aktywna, znaczniki znikną z mapy. |

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Wygląd znaczników mapy iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Pokazuje informacje o pierwszym lub dwóch znacznikach na liście znaczników mapy. |
| <Translate android="true" ids="show_direction"/> | Pozwala wybrać, czy widżety mają być wyświetlane i jak mają się pojawiać: nad mapą (<Translate android="true" ids="shared_string_topbar"/>) lub po prawej stronie ekranu (<Translate android="true" ids="shared_string_widgets"/>). |
| Strzałki na mapie | Wskazuje kierunek do śledzonego znacznika (jednego lub dwóch) jako strzałkę na mapie. Jeśli znacznik znajduje się w widocznej części mapy, strzałka nie jest wyświetlana. |
| Linia kierunku | Pokazuje kierunek, jako przerywaną linię, z określonego punktu na mapie do śledzonego znacznika w linii prostej. |

</TabItem>

</Tabs>


## Powiązane artykuły {#related-articles}

- [Konfiguracja ekranu](./configure-screen.md)
- [Przyciski mapy](./map-buttons.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Linijka promienia i linijka](./radius-ruler.md)
- [Szybka akcja](./quick-action.md)


> *Ostatnia aktualizacja: październik 2023*