---
source-hash: 2e10650d0eee32138985228898ac7ac712a0a70a1f315f227a751d0c2f14ae10
sidebar_position: 6
title:  Widżety znaczników
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

Znaczniki to tymczasowe punkty wskazane na mapie w postaci flag. Widżety pokazują *Kierunek*, *Odległość*, *Adres* i *Szacowany czas przybycia* do znacznika. Pozwalają szybko znaleźć znaczniki na mapie, a także zmienić ich pozycję. Więcej o znacznikach można przeczytać w tym [artykule](../personal/markers).  


## Widżet górnego paska {#top-bar-widget}

Widżet **Pasek znaczników mapy** (Android) / **Wskazanie odległości - Górny pasek** (iOS) wyświetla:

- Odległość od bieżącej lokalizacji (lub środkowego punktu mapy / początkowego punktu dotknięcia mapy, gdy lokalizacja jest wyłączona) do wybranego punktu wskazanego przez znacznik na mapie ([Jednostki długości](../personal/profiles/#general-settings) można wybrać w ustawieniach profilu).
- Strzałka w tym samym kolorze co znacznik wskazuje kierunek od bieżącej lokalizacji (lub środkowego punktu mapy / początkowego punktu dotknięcia mapy, gdy lokalizacja jest wyłączona) i orientację w przestrzeni urządzenia (kurs) w kierunku znacznika.
- Adres lokalizacji.
- Ikona menu prowadząca do [Listy znaczników mapy](../navigation/setup/markers-navigation.md#itinerary-list).

Można również wybrać wyświetlanie jednego lub dwóch znaczników. Więcej o ustawieniach widżetu można przeczytać w tym [artykule](https://osmand.net/docs/user/personal/markers#appearance-on-the-map).
:::info
*Odległość do znacznika* to długość prostej linii między Twoją pozycją (lub środkowym punktem mapy / początkowym punktem dotknięcia mapy, gdy lokalizacja jest wyłączona) a znacznikiem.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Znaczniki mapy w widżecie górnego paska](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Włącz | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="map_markers_bar"/>* |
| Poprzez dotknięcie | Widoczna część mapy przesuwa się do lokalizacji znacznika. |
| Długie dotknięcie + przesunięcie | Aby zmierzyć odległość i zobaczyć kierunek od określonego punktu na mapie do śledzonego znacznika, należy wykonać długie dotknięcie i natychmiast lekko przesunąć pozycję mapy (menu kontekstowe nie powinno się pojawić). |
| Zbliżenie do znacznika | W przypadku, gdy Twoja lokalizacja znajduje się w niewielkim promieniu od znacznika mapy (**< 50 m**), w polu widżetu pojawi się przycisk z haczykiem do szybkiego usunięcia znacznika mapy (oznaczenia jako minięty). Zaznaczony znacznik jest zastępowany przez następny znacznik na liście znaczników.  |
| Format odległości | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Znaczniki mapy w widżecie górnego paska](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Włącz | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="map_markers_bar"/>*|
| Poprzez dotknięcie | Widoczna część mapy przesuwa się do lokalizacji znacznika. |
| Poprzez dotknięcie | Zmiana między "Odległością" a "Szacowanym czasem przybycia" (Tryb przełączania). |
| Zbliżenie do znacznika | W przypadku, gdy Twoja lokalizacja znajduje się w niewielkim promieniu od znacznika mapy (**< 50 m**), w polu widżetu pojawi się przycisk z haczykiem do szybkiego usunięcia znacznika mapy (oznaczenia jako minięty). Zaznaczony znacznik jest zastępowany przez następny znacznik na liście znaczników.  |
| Format odległości  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |  

</TabItem>

</Tabs>


## Widżety panelu {#panel-widgets}

Widżet **Znaczniki mapy** *(dla Androida)* i **Wskazanie odległości - Widżety** *(dla iOS)* wyświetla:

- *Odległość od bieżącej lokalizacji* do wybranego punktu wskazanego przez znacznik na mapie ([Jednostki długości](../personal/profiles/#general-settings) można wybrać w ustawieniach profilu).
- *Szacowany czas przybycia lub ETA*.  
Jest to czas (gg:mm), o którym pojazd lub osoba powinna dotrzeć do celu. Oblicza się go jako odległość do znacznika podzieloną przez średnią prędkość.
Średnia prędkość jest obliczana jako średnia wszystkich wartości prędkości otrzymanych z punktów lokalizacji dla wybranego przedziału czasowego od 15 sekund do 60 minut.

Można również wybrać wyświetlanie jednego lub dwóch znaczników. Więcej o ustawieniach widżetu można przeczytać w tym [artykule](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*Odległość do znacznika* to długość prostej linii między Twoją pozycją (lub określonym punktem na mapie) a znacznikiem.
:::  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widżety panelu](@site/static/img/widgets/map_markers_widget-02.png)  

| | |
|------------|------------|
| Włącz | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>*  |
| Poprzez dotknięcie 1 | Zmiana między "Odległością" a "Szacowanym czasem przybycia" (Tryb przełączania). |
| Poprzez dotknięcie 2 | Widoczna część mapy przesuwa się do lokalizacji znacznika (Tryb przejścia do lokalizacji znacznika) |
| Długie dotknięcie + przesunięcie | Aby zmierzyć odległość i zobaczyć kierunek od określonego punktu na mapie do śledzonego znacznika, należy wykonać długie dotknięcie i natychmiast lekko przesunąć pozycję mapy (menu kontekstowe nie powinno się pojawić). |
| Format odległości | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Widżety panelu](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Włącz | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="map_markers_bar"/>*  |
| Poprzez dotknięcie | Widoczna część mapy przesuwa się do lokalizacji znacznika. |
| Poprzez dotknięcie | Zmiana między "Odległością" a "Szacowanym czasem przybycia" (Tryb przełączania). |
| Format odległości  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |

</TabItem>

</Tabs>


## Konfiguracja widżetów znaczników {#configure-marker-widgets}

Ogólne informacje o ustawieniach widżetu znaczników mapy można znaleźć na tej [stronie](../personal/markers#appearance-on-the-map).  

### Pasek znaczników mapy {#map-markers-bar}
Widżet na górnym pasku wyświetla odległość i kierunek do następnego znacznika mapy od bieżącej lokalizacji. W ustawieniach można wybrać, czy na górze ekranu będzie wyświetlany jeden czy dwa znaczniki.

![wygląd_na_mapie](@site/static/img/widgets/configure-marker-wid-02.png)  

### Znaczniki mapy {#map-markers} 
Widżet pokazuje odległość lub szacowany czas przybycia (ETA) dla pierwszego lub drugiego znacznika na liście znaczników mapy. Można wybrać: jeden znacznik, pierwszy lub drugi, do wyświetlenia na ekranie lub oba.

![wygląd_na_mapie](@site/static/img/widgets/configure-marker-wid-01.png)  ![wygląd_na_mapie](@site/static/img/widgets/settings-marker-wid-first-01.png)  

|    |     |  
| :------------- | :------------- |
| Pokazuje | Ten tryb pozwala wybrać, jakie informacje będzie wyświetlał widżet: *Odległość* lub *Szacowany czas przybycia*. |
| Interwał | Jeśli w 'Pokazuje' wybrano *Szacowany czas przybycia*, pojawia się ta opcja z wyborem czasu (od 15 sekund do 60 minut) do obliczenia ETA. |
| Kliknięcie na widżet |  To ustawienie pozwala wybrać, jaka akcja zostanie wykonana po kliknięciu widżetu: *Przełącz tryb* lub *Przejdź do lokalizacji znacznika*. |


## Wygląd na mapie {#appearance-on-the-map}

Konfiguracja wyglądu znaczników mapy jest dostępna zarówno w wersji OsmAnd na Androida, jak i na iOS. Menu "Wygląd na mapie" jest ogólnym ustawieniem dla znaczników mapy i ma zastosowanie niezależnie od tego, czy widżety są włączone, czy nie. Szczegółowe informacje można znaleźć na tej [stronie](../personal/markers.md#appearance-on-the-map).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![wygląd_na_mapie](@site/static/img/widgets/appearence_on_the_map-02.png)  

|    |    |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Pokazuje informacje o pierwszym lub dwóch pierwszych znacznikach na liście znaczników mapy. |
|  <Translate android="true" ids="show_arrows_on_the_map"/> |  Wskazuje kierunek do śledzonego znacznika (jednego lub dwóch) jako strzałkę na mapie. Jeśli znacznik znajduje się w widocznej części mapy, strzałka nie jest wyświetlana. |
| <Translate android="true" ids="show_guide_line"/> | Pokazuje kierunek, w postaci linii przerywanej, od określonego punktu na mapie do śledzonego znacznika w linii prostej.  |
| <Translate android="true" ids="one_tap_active"/> |  Jedno dotknięcie wymaganego znacznika na mapie przenosi go na górę listy aktywnych znaczników mapy bez otwierania menu kontekstowego. |  
| <Translate android="true" ids="keep_passed_markers"/> | Znaczniki dodane jako grupa Ulubionych lub punkty trasy GPX oznaczone jako minięte pozostaną na mapie. Jeśli grupa nie jest aktywna, znaczniki znikną z mapy. |

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Wygląd znaczników mapy iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)  

|    |     |  
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Pokazuje informacje o pierwszym lub dwóch pierwszych znacznikach na liście znaczników mapy. |
|  <Translate android="true" ids="show_direction"/> | Pozwala wybrać, czy wyświetlać widżety i jak będą się pojawiać: nad mapą (<Translate android="true" ids="shared_string_topbar"/>) lub po prawej stronie ekranu (<Translate android="true" ids="shared_string_widgets"/>). |
|  Strzałki na mapie |  Wskazuje kierunek do śledzonego znacznika (jednego lub dwóch) jako strzałkę na mapie. Jeśli znacznik znajduje się w widocznej części mapy, strzałka nie jest wyświetlana. |
| Linia kierunku | Pokazuje kierunek, w postaci linii przerywanej, od określonego punktu na mapie do śledzonego znacznika w linii prostej.  |

</TabItem>

</Tabs>


## Powiązane artykuły {#related-articles}

- [Konfiguracja ekranu](./configure-screen.md)
- [Przyciski mapy](./map-buttons.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Linijka i linijka promienia](./radius-ruler.md)
- [Szybka akcja](./quick-action.md)