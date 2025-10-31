---
source-hash: 311eeb810fe2be43516fd853b18b9ca3893ce53bd5483c33188259c2bfdf1011
sidebar_position: 7
title:  Szybka akcja (przyciski niestandardowe)
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

Widżet Szybkiej akcji to interaktywny element interfejsu użytkownika, który zapewnia szybki dostęp do kluczowych funkcji lub działań bez otwierania dodatkowych ustawień. Ten widżet jest umieszczony na głównym ekranie mapy i pozwala uprościć i przyspieszyć interakcję z aplikacją, czyniąc ją wygodniejszą i wydajniejszą.

![Widżet Szybkiej akcji](@site/static/img/widgets/quick_action_widget.png)


## Widżet Szybkiej akcji {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widżet Szybkiej akcji Android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widżet Szybkiej akcji iOS](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

Aby użyć przycisku Szybkiej akcji, należy najpierw włączyć ten widżet.

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### Dodawanie i usuwanie akcji {#add-and-delete-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Dotknij Usuń (ikona kosza w prawym górnym rogu) → Wybierz akcje*

![Dodawanie do widżetu Szybkiej akcji Android](@site/static/img/widgets/quick_action_widget_andr.png)  ![Niestandardowy przycisk Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>  → Dotknij Edytuj (ikona ołówka w prawym górnym rogu) → Wybierz akcje*

![Dodawanie do widżetu Szybkiej akcji iOS](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Niestandardowy przycisk iOS](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Wszystkie akcje są zorganizowane w menu **Dodaj akcję** i pogrupowane według typu. Pełna lista akcji i ich opisy znajdują się w sekcji [Typy akcji](#action-types).

Do przycisku szybkiej akcji można przypisać jedną lub więcej [akcji](#action-types). Istnieją dwa sposoby dodawania akcji.

- **Na ekranie Konfiguracji**. Wybierz przycisk z listy i dotknij przycisku&nbsp;  "**＋**"  &nbsp;. Najpierw musisz wybrać [typ akcji](#action-types), a następnie zmienić jego nazwę i [parametry](#action-parameters).
- **W panelu przycisku szybkiej akcji**. Dotknij przycisku *Szybkiej akcji* na ekranie mapy. Na końcu listy, na ostatnim ekranie w panelu, znajduje się pole "**＋**" &nbsp;*Dodaj akcję*. Dotknij go i wybierz akcję z [listy typów](#action-types).


:::note

- Każda akcja musi mieć unikalną nazwę.
- Ekrany, oznaczone numerycznie jako Ekran 1, Ekran 2 itd., są tworzone automatycznie, gdy liczba akcji na liście wzrośnie do 6 pozycji.

:::


### Parametry akcji {#action-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kolejność w widżecie Szybkiej akcji Android](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kolejność w widżecie Szybkiej akcji iOS](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

Akcje przypisane do przycisku szybkiej akcji są pogrupowane w ekrany. Te grupy akcji są otwierane po dotknięciu tego przycisku na mapie. Nowe ekrany są tworzone automatycznie, gdy lista akcji przekroczy *6 pozycji*. Możesz zmienić kolejność akcji zgodnie z własnymi preferencjami, wykonując następujące kroki:

**Dla Androida**.

1. Poprzez ekran konfiguracji:

    - Przejdź do *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Użyj *Przytrzymaj i przeciągnij* na ikonie dwóch pionowych linii, aby zmienić kolejność akcji.

2. Poprzez menu szybkiej akcji:

    - Otwórz menu szybkiej akcji, a następnie długo dotknij *Dodaj akcję*.
    - Użyj *Przytrzymaj i przeciągnij* na ikonie dwóch pionowych linii, aby zmienić kolejność akcji.

**Dla iOS**.

- Przejdź do *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Dotknij *Edytuj* (ikona ołówka), a następnie *Przytrzymaj i przeciągnij* na ikonie trzech pionowych linii, aby zmienić kolejność akcji.

:::info note
Niektóre akcje, takie jak *Źródło mapy*, *Styl mapy*, *Nakładka*, *Podkład*, *Schemat kolorów terenu* i *Dodaj profil*, można przypisać jako pętlę. Każde dotknięcie przycisku cyklicznie przechodzi przez wybrane warstwy. Można wyświetlić pośredni dialog, aby ręcznie wybrać z listy, lub ukryć go, aby przełączać w określonej kolejności.
:::


## Przyciski na ekranie {#buttons-on-the-screen}

### Przyciski niestandardowe {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*

![Niestandardowy przycisk Android](@site/static/img/widgets/custom_button_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*

![Niestandardowy przycisk iOS](@site/static/img/widgets/custom_button_ios.png)

</TabItem>

</Tabs>

**Przyciski niestandardowe** to dodatkowe przyciski na mapie, które działają tak samo jak przycisk *Szybkiej akcji*. Możesz utworzyć przycisk z jedną lub kilkoma akcjami i wyświetlić go na ekranie mapy. Przyciski niestandardowe znajdują się na liście *Konfiguracja ekranu → Przyciski → Przyciski niestandardowe*. Każdy przycisk ma listę akcji niezależną od profilu i powinien mieć unikalną ***Nazwę***, jednak przycisk można włączać/wyłączać indywidualnie dla każdego **profilu**.

Wszystkie dostępne [akcje](#action-types) są identyczne z tymi, które można zastosować do domyślnej szybkiej akcji. Przyciski niestandardowe można skonfigurować jako przyciski ***pojedynczej akcji***, które stosują wybraną akcję natychmiast po dotknięciu, bez konieczności poruszania się po dodatkowym menu.

### Wygląd przycisku {#button-appearance}

<InfoAndroidOnly/>

![Wygląd przycisku Szybkiej akcji](@site/static/img/widgets/qa_button_appearance_andr.png)

Możesz modyfikować wygląd przycisków Szybkiej akcji poprzez: *Menu → Konfiguracja ekranu → Przyciski niestandardowe → Szybka akcja → menu z trzema kropkami → Wygląd*. To ustawienie zapewnia opcje personalizacji rozmiaru, kształtu, ikony i przezroczystości tła przycisku, oferując większą kontrolę nad wyglądem przycisków na ekranie.

Szczegółowe ustawienia dostosowywania można znaleźć w artykule [Konfiguracja ekranu](../widgets/configure-screen.md#button-appearance), gdzie można dowiedzieć się, jak precyzyjnie dostosować wygląd każdego przycisku do własnych preferencji.

### Zmiana pozycji przycisku {#change-button-position}

Widżet *Szybkiej akcji* pojawia się w dolnym rogu ekranu mapy po pierwszym włączeniu. Możesz przenieść widżet w dowolne miejsce na ekranie, przytrzymując go i przeciągając. W celu precyzyjnego i dokładnego umieszczenia przycisków na ekranie mapy, są one automatycznie wyrównywane do najbliższej pozycji niewidocznej siatki podczas przeciągania.

- **Początkowy wygląd**. Domyślnie widżet szybkiej akcji jest umieszczony w prawym dolnym rogu interfejsu mapy.

    ![Widok widżetu Szybkiej akcji](@site/static/img/widgets/quick_action_widget_view.png)

- **Przesuń widżet**. Długie naciśnięcie i przeciągnięcie widżetu pozwala na zmianę jego położenia na ekranie, z automatycznym wyrównaniem do kolumn i wierszy.

    ![Dotknięcie widżetu Szybkiej akcji](@site/static/img/widgets/quick_action_widget_tap.png)

- **Nowe umiejscowienie**. Po przeniesieniu widżet pozostanie w nowej pozycji na ekranie mapy, dopóki nie zostanie ponownie ręcznie dostosowany.

    ![Przesunięcie widżetu Szybkiej akcji](@site/static/img/widgets/quick_action_widget_move.png)

- **Wiele [przycisków niestandardowych](#custom-buttons)**. Możesz dodać wiele przycisków szybkiej akcji do ekranu mapy. Te przyciski można również indywidualnie dostosowywać i zmieniać ich położenie za pomocą tej samej metody przeciągnij i upuść.

    ![Wiele widżetów Szybkiej akcji](@site/static/img/widgets/quick_action_widget_multi.png)

### Układ siatki dla przycisków {#grid-layout-for-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Siatka dla przycisków pionowa Android](@site/static/img/widgets/grid_buttons_v_and.png) ![Siatka dla przycisków pozioma Android](@site/static/img/widgets/grid_buttons_h_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Siatka dla przycisków pionowa iOS](@site/static/img/widgets/grid_buttons_v_ios.png) ![Siatka dla przycisków pozioma iOS](@site/static/img/widgets/grid_buttons_h_ios.png)

</TabItem>

</Tabs>

[Przyciski mapy](../widgets/map-buttons.md#overview) są automatycznie układane za pomocą układu siatki. Każdy przycisk jest przypisany do jednego z czterech rogów ekranu (*lewy górny*, *prawy górny*, *lewy dolny*, *prawy dolny*). Jeśli w przypisanym rogu nie ma wystarczająco dużo miejsca, przyciski są wyrównywane poziomo lub pionowo, w zależności od orientacji ekranu.

Ten układ pomaga zachować wizualną spójność przycisków i unika ich nakładania się. Na przykład, na wyświetlaczu w trybie poziomym, przyciski w prawym rogu ustawią się poziomo na dole ekranu, podczas gdy na wyświetlaczu w trybie pionowym rozciągną się pionowo w górę lub w dół w razie potrzeby.


## Typy akcji {#action-types}

### Konfiguracja mapy {#configure-map}

| Akcja | Opis |
|:-------------|:-------------|
| Pokaż / Ukryj <br/> [**Trasy**](../map/vector-maps.md#routes) | Możesz wybrać typy tras, aby włączyć lub wyłączyć ich wyświetlanie. <br/> Niektóre trasy mają dodatkowe ustawienia. Domyślnie, jeśli nic nie zostało wybrane w menu [Konfiguracja mapy](../map/configure-map-menu.md), zostanie przypisany pierwszy typ trasy z listy, w przeciwnym razie zostanie przypisany wybrany przez Ciebie typ. Więcej informacji można znaleźć w artykule [Trasy](../map/routes.md). <br/> - ***Trasy rowerowe***  &nbsp;(*Trasa*, *Sieci węzłów*) <br/> - ***Trasy dla rowerów górskich***  &nbsp;(*Skala MTB*, *IMBA*) <br/> - ***Szlaki piesze***  &nbsp;(*OSMC*, *Przynależność do sieci*, *Sieci węzłów*) <br/> - ***Stopień trudności szlaków pieszych***  &nbsp;(*Skala SAC*, *Skala CAI*) <br/> - ***Stoki narciarskie*** <br/> - ***Szlaki konne*** <br/> - ***Sporty wodne*** <br/> - ***Trasy biegowe*** <br/> - ***Ścieżki fitness*** <br/> - ***Trasy podróżnicze***  &nbsp;(*Ślady*, *Książki podróżnicze*, *Punkty*) <br/> |
| Pokaż / Ukryj <br/> [**Warstwy topograficzne**](../plugins/topography.md#overview) | Wszystkie dane topograficzne są prezentowane jako oddzielne warstwy mapy. Za pomocą Szybkiej akcji można szybko przełączać widoczność tych warstw. <br/> - ***Linie konturowe*** <br/> - ***Teren***  &nbsp;(*W zależności od warstwy wybranej w menu [Konfiguracja mapy](../map/configure-map-menu.md) wyświetlany będzie *Cieniowanie wzgórz*, *Nachylenie* lub *Wysokość*.*) |
| Zmień <br/> [**Schemat kolorów terenu**](../plugins/topography.md#modify-color-scheme) | Pozwala wybrać jedną lub więcej palet z listy istniejących, które będą się zmieniać po dotknięciu przycisku. |
| Pokaż / Ukryj <br/> [**Warstwy pogodowe**](../plugins/weather.md#weather-layers) | Wszystkie dane pogodowe są prezentowane jako oddzielne warstwy mapy. Dzięki Szybkiej akcji możesz uzyskać szybki dostęp do przełączania widoczności tych warstw na mapie. <br/> - ***Warstwa opadów*** <br/> - ***Warstwa chmur*** <br/> - ***Warstwa ciśnienia*** <br/> - ***Warstwa wiatru*** <br/> - ***Warstwa temperatury*** |
| Otwórz <br/> [**Ekran pogody**](../plugins/weather.md) <br /> *Tylko Android* | Otwiera ekran prognozy [*Pogody*](../plugins/weather.md#weather-forecast-screen) ze szczegółowymi informacjami. |
| Pokaż / Ukryj <br/> [**Ulubione**](../map/point-layers-on-map.md#favorites) | Pokaż lub ukryj ulubione punkty na mapie. |
| Pokaż / Ukryj <br/> [**Ślady**](../personal/tracks/manage-tracks.md#track-menu) | Pokaż lub ukryj ostatnio widoczne ślady na mapie. |
| Pokaż / Ukryj <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Włącz lub wyłącz wyświetlanie warstw POI z wybranymi kategoriami na mapie.<br/>Możesz wybrać wiele kategorii POI. Akcja zastępuje kategorie POI z Konfiguracji mapy wybrane bez użycia Szybkich akcji. |
| Zmień <br/> [**Tryb mapy**](../map/vector-maps.md#map-mode) | Szybki dostęp do przełączania między trybem dziennym i nocnym. |
| Zmień <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | Przycisk pozwala przypisać pojedyncze źródło mapy lub listę źródeł, które zmieniają się cyklicznie po dotknięciu lub za pomocą okna dialogowego. <br/> - *Pokaż okno dialogowe*. Wyświetla okno dialogowe z listą map. <br/> - *Nie pokazuj okna dialogowego*. Źródła map zmieniają się w określonej kolejności. <br/> - *Wyświetlana nazwa* - *Źródło mapy* >. ">" po nazwie mapy wskazuje, które źródło mapy jest aktualnie wybrane. <br/> - *Wyświetlana nazwa* - > *Następne źródło mapy*. ">" przed nazwą mapy wskazuje, jakie będzie następne wybrane źródło mapy, jeśli akcja zostanie wykonana. <br/> - *Uwaga*. Aby zmienić źródła map w OsmAnd, możesz skonfigurować jedną szybką akcję, która pozwala przełączać się między wieloma źródłami map, lub utworzyć kilka oddzielnych szybkich akcji, każdą dla określonego źródła mapy. |
| Pokaż / Ukryj <br /> [**Transport publiczny**](../map/vector-maps.md#transport) | Włącz lub wyłącz warstwę mapy transportu publicznego <br /> - *Rodzaj transportu*. Przy pierwszym dotknięciu można wybrać jeden lub wiele rodzajów transportu, w tym *Przystanki transportu publicznego*, *Trasy autobusowe, trolejbusowe i minibusowe*, *Trasy tramwajowe i kolejowe*, *Trasy metra*. |
| Zmień <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Utwórz listę źródeł map jako nakładkę mapy i przełączaj się między nimi. <br /> - *Uwaga*. Aby zmienić nakładki map w OsmAnd, możesz skonfigurować jedną szybką akcję, która pozwala przełączać się między wieloma nakładkami map, lub utworzyć kilka oddzielnych szybkich akcji, każdą dla określonej nakładki mapy. |
| Zmień <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Utwórz listę źródeł map jako podkład mapy i przełączaj się między nimi. <br /> - *Uwaga*. Aby zmienić podkłady map w OsmAnd, możesz skonfigurować jedną szybką akcję, która pozwala przełączać się między wieloma podkładami map, lub utworzyć kilka oddzielnych szybkich akcji, każdą dla określonego podkładu mapy. |
| Zmień <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Utwórz listę stylów map dla map wektorowych i przełączaj się między nimi. <br /> - *Uwaga*. Aby zmienić style map w OsmAnd, możesz skonfigurować jedną szybką akcję, która pozwala przełączać się między wieloma stylami map, lub utworzyć kilka oddzielnych szybkich akcji, każdą dla określonego stylu mapy. |
| Pokaż / Ukryj <br/> [**Warstwa Mapillary**](../plugins/mapillary.md) | Pozwala przeglądać warstwy mapy ze zdjęciami na poziomie ulicy dostarczanymi przez Mapillary. |
| Pokaż / Ukryj <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | Możesz wybrać wyświetlanie lub ukrywanie wszystkich notatek OSM na mapie jednym dotknięciem przycisku. |


### Interfejs {#interface}

| Akcja | Opis |
|:-------------|:-------------|
| Nawiguj <br/> **Poprzedni ekran** | Przełącznik do nawigacji do poprzedniego ekranu. |
| Pokaż / Ukryj <br/> [**Widok nawigacji**](../navigation/setup/route-navigation.md) | Przełącza widoczność widoku ekranu nawigacji. |
| Pokaż / Ukryj <br/> [**Widok wyszukiwania**](../search/search-all.md) | Otwiera lub zamyka widok wyszukiwania. |
| Pokaż / Ukryj <br/> [**Menu boczne**](../start-with/main-menu.md) | Przełącza widoczność głównego menu bocznego w celu uzyskania dostępu do podstawowych funkcji. |
| Włącz / Wyłącz <br/> [**Blokada ekranu dotykowego**](../map/interact-with-map.md#touch-screen-lock) | Aktywuje lub dezaktywuje blokadę ekranu dotykowego, aby uniknąć niezamierzonych interakcji z ekranem. |


### Interakcje z mapą {#map-interactions}

| Akcja | Opis |
|:-------------|:-------------|
| Mapa <br/> [**Powiększ**](../map/interact-with-map.md) | Powiększanie mapy z jednoczesnym zwiększaniem ilości wyświetlanych danych. |
| Mapa <br/> [**Pomniejsz**](../map/interact-with-map.md) | Zmniejszanie skali mapy. Wygodne w użyciu z [widżetem deweloperskim - Poziom powiększenia](../widgets/info-widgets.md#developer-widgets). |
| Przesuń <br/> [**Mapę w dół**](../map/interact-with-map.md) | Możesz użyć przycisku szybkiej akcji, aby przesunąć mapę w dół. |
| Przesuń <br/> [**Mapę w górę**](../map/interact-with-map.md) | Po dotknięciu ekran mapy przesuwa się w górę. |
| Przesuń <br/> [**Mapę w lewo**](../map/interact-with-map.md) | Po dotknięciu przycisku ekran mapy przesuwa się w lewo. |
| Przesuń <br/> [**Mapę w prawo**](../map/interact-with-map.md) | Za pomocą przycisku szybkiej akcji można przesunąć mapę w prawo. |
| Przesuń <br/> [**Do Mojej lokalizacji**](../map/interact-with-map.md#my-location-and-zoom) | Przesuwa mapę do pozycji *Moja lokalizacja*. |


### Moje miejsca {#my-places}

| Akcja | Opis |
|:-------------|:-------------|
| Rozpocznij / Wstrzymaj <br/> [**Nagrywanie podróży**](../plugins/trip-recording.md#new-track-recording) | Rozpocznij sesję nagrywania bieżącego śladu lub wstrzymaj, aby tymczasowo zatrzymać bez kończenia podróży. |
| Rozpocznij <br/> [**Nowy odcinek podróży**](../plugins/trip-recording.md#overview-screen) | Rozpocznij nowy odcinek podróży bez zatrzymywania całego nagrania. |
| Zapisz <br/> [**Nagraną podróż i kontynuuj**](../plugins/trip-recording.md#current-track-recording) | Zapisz bieżące nagranie podróży i kontynuuj nagrywanie bez przerw. |
| Zakończ <br/> [**Nagrywanie podróży**](../plugins/trip-recording.md#current-track-recording) | Zakończ bieżącą sesję nagrywania podróży. |
| Dodaj <br/> [**Ulubione**](../map/configure-map-menu.md#map-layers) | Dodaje ulubione do wybranej (środkowej) lokalizacji na mapie. <br /> - *Pokaż okno dialogowe*. Wyświetla okno dialogowe potwierdzenia. <br /> - *Grupa*. Dodaje ulubione do wybranej grupy. <br /> - *Kolor*. Dodaje ulubione z wybranym kolorem <br /> - *Nazwa*. Dodaje ulubione z określonym prefiksem nazwy. |
| Dodaj <br/> [**Punkt trasy śladu**](../map/point-layers-on-map.md#track-waypoints) | Dodaje nowy punkt trasy do [aktualnie nagrywanego śladu](../plugins/trip-recording.md) lub [dowolnego śladu w Moich miejscach](../personal/tracks/manage-tracks.md). <br /> - *Pokaż okno dialogowe*. Wyświetla okno dialogowe potwierdzenia. <br /> - *Grupa*. Dodaje ulubione do wybranej grupy. <br /> - *Kolor*. Dodaje ulubione z wybranym kolorem <br /> - *Nazwa*. Dodaje ulubione z określonym prefiksem nazwy. |
| Dodaj <br/> [**Znacznik mapy**](../map/configure-map-menu.md#map-layers) | Dodaje znacznik do wybranej (środkowej) lokalizacji na mapie. |
| Dodaj <br/> [**Miejsce parkingowe**](../plugins/parking.md) | Dodaje miejsce parkingowe do wybranej (środkowej) lokalizacji na mapie. Stara pozycja parkingu jest usuwana. |
| Dodaj <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Dodaje POI do wybranej (środkowej) lokalizacji na mapie (tak samo jak akcja menu kontekstowego). <br /> - *Pokaż okno dialogowe*. Wyświetla okno dialogowe potwierdzenia. <br /> - *Typ POI* (opcjonalnie). Wstępnie wybiera typ POI OSM. <br /> - *Tag/Wartość* (wiele). Dodaje tagi / wartości [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) |
| Dodaj <br/> [**Notatkę OSM**](../plugins/osm-editing.md#create--modify-osm-note) | Dodaje [notatkę OSM](https://wiki.openstreetmap.org/wiki/Notes) <br /> - *Pokaż okno dialogowe*. Wyświetla okno dialogowe potwierdzenia. <br /> - *Wiadomość*. Dodaje domyślną wiadomość do notatki. |
| Dodaj <br/> [**Notatki multimedialne**](../plugins/audio-video-notes.md) | Rozpoczyna nagrywanie notatki audio / foto / wideo dla wybranej (środkowej) lokalizacji na mapie. |
| Utwórz <br/> [**Nową trasę**](../plan-route/create-route.md) <br /> *Tylko Android* | Otwiera narzędzie [Planuj trasę](../plan-route/create-route.md) i tworzy trasę dla wybranej (środkowej) lokalizacji na mapie. |


### Nawigacja {#navigation}

| Akcja | Opis |
|:-------------|:-------------|
| Dodaj <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | Możesz wybrać środek ekranu mapy jako pierwszy punkt pośredni. Poprzedni cel podróży pozostaje bez zmian. |
| Włącz / Wyłącz <br/> [**Komunikaty głosowe**](../navigation/guidance/voice-navigation.md) | Wycisz lub włącz wyciszenie wskazówek głosowych podczas nawigacji. |
| Ustaw <br/> [**Punkt startowy**](../navigation/setup/route-navigation.md#set-destinations) | Oznacz wybraną (środkową) lokalizację na mapie jako punkt początkowy. |
| Ustaw <br/> [**Cel podróży**](../navigation/setup/route-navigation.md#set-destinations) | Dodaj wybraną (środkową) lokalizację na mapie jako cel podróży. Poprzedni cel podróży staje się ostatnim punktem pośrednim. |
| Zastąp <br/> [**Cel podróży**](../navigation/setup/route-navigation.md#intermediate-destinations) | Ustaw / Zastąp wybraną (środkową) lokalizację na mapie jako cel podróży. Poprzedni cel podróży jest usuwany. |
| Włącz / Wyłącz <br/> [**Automatyczne powiększanie mapy**](../map/interact-with-map.md) | Włącz lub wyłącz automatyczne powiększanie mapy podczas nawigacji. |
| Rozpocznij/zatrzymaj <br/> [**Nawigację**](../navigation/setup/route-navigation.md#start--stop-navigation) | Rozpocznij nawigację (jeśli jest obecny punkt docelowy) lub zatrzymaj nawigację. |
| Wstrzymaj / Wznów <br/> [**Nawigację**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Wstrzymaj / Wznów nawigację. |
| Usuń <br/> [**Następny punkt docelowy**](../navigation/setup/route-navigation.md#intermediate-destinations) | Usuwa następny punkt pośredni, jeśli istnieje, w przeciwnym razie usuwa cel podróży i wyświetla okno dialogowe zakończenia nawigacji. Akcja jest nieaktywna, jeśli nie masz żadnego celu podróży. |
| Symuluj <br/> [**Lokalizację wg GPX**](../plugins/development.md#gpx-track-simulation) | Symuluje lokalizację i ruch urządzenia za pomocą śladu GPX. |


### Ustawienia {#settings}

| Akcja | Opis |
|:-------------|:-------------|
| Zmień <br/> [**Profil aplikacji**](../personal/profiles.md) | Utwórz listę profili aplikacji i przełączaj się między nimi. <br /> - *Pokaż okno dialogowe*. Wyświetla okno dialogowe z listą profili. <br /> - *Nie pokazuj okna dialogowego*. Profile zmieniają się w określonej kolejności. <br /> - *Uwaga*. Możesz dostosować jedną akcję, która pozwala przełączać się między wieloma profilami, lub utworzyć kilka oddzielnych akcji, każdą dla określonego profilu. |
| Zmień <br/> [**Profil aplikacji na następny**](../personal/profiles.md) | Przełącza na następny profil na liście. |
| Zmień <br/> [**Profil aplikacji na poprzedni**](../personal/profiles.md) | Przełącza na poprzedni profil na liście. |
| Zmień <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> (iOS **Pozycja lokalizacji na ekranie**) | Pozwala ustawić umiejscowienie kursora *Moja lokalizacja* na mapie. Włącza lub wyłącza, aby kursor zawsze znajdował się na środku ekranu. |
| Zmień <br/> [**Orientację mapy**](../map/interact-with-map#map-orientation-modes) | Pozwala zmienić tryb obrotu mapy i przełączać się między wybranymi typami orientacji. Możesz wybrać, które tryby włączyć do pętli. |


## Używanie klawiatury do akcji {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Urządzenia zewnętrzne](@site/static/img/map/external_custom_2_andr.png)

Korzystając z funkcjonalności narzędzia Szybka akcja, możesz przypisać wymagane akcje do klawiszy zewnętrznego urządzenia wejściowego. Opis można znaleźć w artykule [Interakcja z mapą](../map/interact-with-map.md#custom-input-device-type).


## Powiązane artykuły {#related-articles}

- [Konfiguracja ekranu](./configure-screen.md)
- [Przyciski mapy](./map-buttons.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Linijka i linijka promieniowa](./radius-ruler.md)
- [Widżety znaczników](./markers.md)