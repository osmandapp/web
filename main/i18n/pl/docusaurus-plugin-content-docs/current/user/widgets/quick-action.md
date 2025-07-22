---
source-hash: 5a6d57c30dcc7cffb0562681b9341b0e7b62aafd5fd56183371bd8098893001c
sidebar_position: 7
title: Szybka akcja (przyciski niestandardowe)
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

Widżet Szybka akcja to interaktywny element interfejsu użytkownika, który zapewnia szybki dostęp do kluczowych funkcji lub działań bez otwierania dodatkowych ustawień. Widżet ten jest umieszczony na głównym ekranie mapy i pozwala uprościć oraz przyspieszyć interakcję z aplikacją, czyniąc ją wygodniejszą i bardziej efektywną.

![Widżet Szybka akcja](@site/static/img/widgets/quick_action_widget.png)


## Widżet Szybka akcja {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widżet Szybka akcja_android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widżet Szybka akcja_ios](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

Aby użyć przycisku Szybka akcja, musisz najpierw włączyć ten widżet.

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### Dodawanie i usuwanie akcji {#add-and-delete-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Stuknij Usuń (ikona kosza w prawym górnym rogu) → Wybierz akcje*

![Widżet Szybka akcja_android_add](@site/static/img/widgets/quick_action_widget_andr.png) ![Przycisk niestandardowy Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Stuknij Edytuj (ikona ołówka w prawym górnym rogu) → Wybierz akcje*

![Widżet Szybka akcja_ios_add](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Przycisk niestandardowy Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Wszystkie akcje są zorganizowane w menu **Dodaj akcję** i pogrupowane według typu. Pełną listę akcji i ich opisów można znaleźć w sekcji [Typy akcji](#action-types).

Możesz przypisać jedną lub więcej [akcji](#action-types) do przycisku szybkiej akcji. Istnieją dwa sposoby dodawania akcji.

- **Na ekranie konfiguracji**. Wybierz przycisk z listy i stuknij przycisk &nbsp; "**＋**" &nbsp;. Najpierw musisz wybrać [typ akcji](#action-types), a następnie zmienić jego nazwę i [parametry](#actions-in-loop).
- **W panelu przycisku szybkiej akcji**. Stuknij *przycisk Szybka akcja* na ekranie mapy. Na końcu listy, na ostatnim ekranie w panelu, znajduje się pole &nbsp; "**＋**" &nbsp; *Dodaj akcję*. Stuknij je i wybierz akcję z [listy typów](#action-types).


:::note

- Każda akcja musi mieć unikalną nazwę.
- Ekrany, oznaczone numerycznie jako Ekran 1, Ekran 2 itd., są tworzone automatycznie, gdy liczba akcji na liście wzrasta do 6 elementów.

:::


### Parametry akcji {#action-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet Szybka akcja_android_order](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet Szybka akcja_ios_order](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

Akcje przypisane do przycisku szybkiej akcji są grupowane w ekrany. Te grupy akcji otwierają się po stuknięciu tego przycisku na mapie. Nowe ekrany są automatycznie tworzone, gdy lista akcji przekroczy *6 elementów*. Możesz zmieniać kolejność akcji, aby dopasować je do swoich preferencji, wykonując następujące kroki:

**Dla Androida**.

1. Poprzez ekran konfiguracji:

    - Przejdź do *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Użyj *Przytrzymaj i przeciągnij* na ikonie dwóch pionowych linii, aby zmienić kolejność akcji.

2. Poprzez menu szybkiej akcji:

    - Otwórz menu szybkiej akcji, a następnie długo stuknij *Dodaj akcję*.
    - Użyj *Przytrzymaj i przeciągnij* na ikonie dwóch pionowych linii, aby zmienić kolejność akcji.

**Dla iOS**.

- Przejdź do *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Stuknij *Edytuj* (ikonę ołówka), a następnie *Przytrzymaj i przeciągnij* na ikonie trzech pionowych linii, aby zmienić kolejność akcji.

#### Akcje w pętli {#actions-in-loop}

![Przycisk niestandardowy Android](@site/static/img/widgets/actions_in_loop_andr.png)

Dla niektórych akcji możesz przypisać listę warstw, które będą zmieniać się w kółko z każdym stuknięciem: *Źródło mapy*, *Styl mapy*, *Nakładka*, *Podkładka*, *Schemat kolorów terenu*, *Dodaj profil*.

Przycisk pozwala przypisać pojedynczą warstwę lub listę warstw, które zmieniają się cyklicznie po stuknięciu lub z pośrednim oknem dialogowym.

- **Pokaż pośrednie okno dialogowe**. Wyświetla okno dialogowe z listą map.
- **Nie pokazuj pośredniego okna dialogowego**. Źródła map zmieniają się w określonej kolejności.


### Zmień pozycję na mapie {#change-position-on-the-map}

Widżet *Szybka akcja* pojawia się w dolnym rogu ekranu mapy po pierwszym włączeniu. Możesz przenieść widżet w dowolne miejsce na ekranie, przytrzymując i przeciągając. Aby precyzyjnie i dokładnie umieścić przyciski na ekranie mapy, są one automatycznie wyrównywane do najbliższej niewidocznej pozycji siatki podczas przeciągania.

- **Początkowy wygląd**. Domyślnie widżet szybkiej akcji jest umieszczony w prawym dolnym rogu interfejsu mapy.

    ![Widżet Szybka akcja_widok](@site/static/img/widgets/quick_action_widget_view.png)

- **Przenieś widżet**. Długie naciśnięcie i przeciągnięcie widżetu pozwala na zmianę jego pozycji na ekranie, z automatycznym wyrównaniem kolumn i wierszy.

    ![Widżet Szybka akcja_stuknięcie](@site/static/img/widgets/quick_action_widget_tap.png)

- **Nowe umiejscowienie**. Po przeniesieniu widżet pozostanie w nowej pozycji na ekranie mapy, dopóki nie zostanie ręcznie ponownie dostosowany.

    ![Widżet Szybka akcja_przesunięcie](@site/static/img/widgets/quick_action_widget_move.png)

- **Wiele [przycisków niestandardowych](#custom-buttons)**. Możesz dodać wiele przycisków szybkiej akcji do ekranu mapy. Te przyciski mogą być również dostosowywane i indywidualnie zmieniane ich położenie za pomocą tej samej metody przeciągnij i upuść.

    ![Widżet Szybka akcja_przesunięcie](@site/static/img/widgets/quick_action_widget_multi.png)


### Przyciski niestandardowe {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →* &nbsp; "**＋**" &nbsp; *→ <Translate android="true" ids="add_button"/>*

![Przycisk niestandardowy Android](@site/static/img/widgets/custom_button_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →* &nbsp; "**＋**" &nbsp; *→ <Translate ios="true" ids="add_button"/>*

![Przycisk niestandardowy Android](@site/static/img/widgets/custom_button_ios.png)

</TabItem>

</Tabs>

**Przyciski niestandardowe** to dodatkowe przyciski na mapie, które działają tak samo jak przycisk *Szybka akcja*. Możesz utworzyć przycisk z jedną lub więcej akcjami i wyświetlić go na ekranie mapy. Przyciski niestandardowe znajdują się na liście *Ekran konfiguracji → Przyciski → Przyciski niestandardowe*. Każdy przycisk ma niezależną od profilu listę akcji i powinien mieć unikalną ***Nazwę***, jednak przycisk może być włączany/wyłączany indywidualnie dla każdego **profilu**.

Wszystkie dostępne [akcje](#action-types) są identyczne z tymi, które można zastosować do domyślnej szybkiej akcji. Przyciski niestandardowe można skonfigurować jako przyciski ***jednej akcji***, które natychmiast wykonują wybraną akcję po stuknięciu, bez konieczności przechodzenia przez dodatkowe menu.


### Wygląd przycisku szybkiej akcji {#quick-action-button-appearance}

<InfoAndroidOnly/>

![Wygląd przycisku szybkiej akcji](@site/static/img/widgets/qa_button_appearance_andr.png)

Możesz modyfikować wygląd przycisków Szybkiej Akcji poprzez: *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybka akcja → menu z trzema kropkami → Wygląd*. To ustawienie oferuje opcje personalizacji rozmiaru, kształtu, ikony i przezroczystości tła przycisku, zapewniając większą kontrolę nad tym, jak przyciski wyglądają na ekranie.

Szczegółowe ustawienia dostosowywania można znaleźć w artykule [Konfiguruj ekran](../widgets/configure-screen.md#button-appearance), gdzie dowiesz się, jak precyzyjnie dostosować wygląd każdego przycisku do swoich preferencji.


## Typy akcji {#action-types}

### Konfiguruj mapę {#configure-map}

| Akcja | Opis |
|:-------------|:-------------|
| Pokaż / Ukryj <br/> [**Trasy**](../map/vector-maps.md#routes) | Możesz wybrać typy tras, aby włączyć lub wyłączyć ich wyświetlanie. <br/> Niektóre trasy mają dodatkowe ustawienia. Domyślnie, jeśli nie wybrano nic w menu [Konfiguruj mapę](../map/configure-map-menu.md), zostanie przypisany pierwszy typ trasy z listy, w przeciwnym razie zostanie przypisany wybrany przez Ciebie typ. Więcej informacji znajdziesz w artykule [Trasy](../map/routes.md). <br/> - ***Trasy rowerowe*** &nbsp;(*Trasa*, *Sieci węzłów*) <br/> - ***Trasy rowerów górskich*** &nbsp;(*Skala MTB*, *IMBA*) <br/> - ***Trasy piesze*** &nbsp;(*OSMC*, *Przynależność do sieci*, *Sieci węzłów*) <br/> - ***Stopień trudności szlaków pieszych*** &nbsp;(*Skala SAC*, *Skala CAI*) <br/> - ***Trasy narciarskie*** <br/> - ***Trasy konne*** <br/> - ***Sporty wodne*** <br/> - ***Trasy biegowe*** <br/> - ***Trasy fitness*** <br/> - ***Trasy podróży*** &nbsp;(*Ślady*, *Książki podróży*, *Punkty*) <br/> |
| Pokaż / Ukryj <br/> [**Warstwy topograficzne**](../plugins/topography.md#overview) | Wszystkie dane topograficzne są przedstawione jako oddzielne warstwy mapy. Możesz szybko przełączać widoczność tych warstw za pomocą Szybkiej Akcji. <br/> - ***Linie konturowe*** <br/> - ***Teren*** &nbsp;(*W zależności od warstwy wybranej w menu [Konfiguruj mapę](../map/configure-map-menu.md)*, *Cieniowanie wzgórz*, *Nachylenie* lub *Wysokość* *zostaną wyświetlone.*) |
| Zmień <br/> [**Schemat kolorów terenu**](../plugins/topography.md#modify-color-scheme) | Pozwala wybrać jedną lub więcej palet z listy istniejących, które będą się zmieniać po stuknięciu przycisku. |
| Pokaż / Ukryj <br/> [**Warstwy pogodowe**](../plugins/weather.md#weather-layers) | Wszystkie dane pogodowe są przedstawione jako oddzielne warstwy mapy. Dzięki Szybkiej Akcji możesz szybko przełączać widoczność tych warstw na mapie. <br/> - ***Warstwa opadów*** <br/> - ***Warstwa chmur*** <br/> - ***Warstwa ciśnienia*** <br/> - ***Warstwa wiatru*** <br/> - ***Warstwa temperatury*** |
| Otwórz <br/> [**Ekran pogody**](../plugins/weather.md) <br /> *Tylko Android* | Otwiera ekran prognozy pogody [*Weather*](../plugins/weather.md#weather-forecast-screen) ze szczegółowymi informacjami. |
| Pokaż / Ukryj <br/> [**Ulubione**](../personal/favorites.md#view-on-the-map) | Pokaż lub ukryj ulubione punkty na mapie. |
| Pokaż / Ukryj <br/> [**Ślady**](../personal/tracks/manage-tracks.md#track-menu) | Pokaż lub ukryj ostatnio widoczne ślady na mapie. |
| Pokaż / Ukryj <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Włącz lub wyłącz wyświetlanie warstw POI z wybranymi kategoriami na mapie.<br/>Możesz wybrać wiele kategorii POI. Akcja zastępuje kategorie POI z Konfiguruj Mapę wybrane bez użycia Szybkich Akcji. |
| Zmień <br/> [**Tryb mapy**](../map/vector-maps.md#map-mode) | Szybki dostęp do przełączania między trybem dziennym i nocnym. |
| Zmień <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | Przycisk pozwala przypisać pojedyncze źródło mapy lub listę źródeł, które zmieniają się cyklicznie po stuknięciu lub z pośrednim oknem dialogowym. <br/> - *Pokaż pośrednie okno dialogowe*. Wyświetla okno dialogowe z listą map. <br/> - *Nie pokazuj pośredniego okna dialogowego*. Źródła map zmieniają się w określonej kolejności. <br/> - *Wyświetlana nazwa* - *Źródło mapy* >. ">" po nazwie mapy wskazuje, które źródło mapy jest aktualnie wybrane. <br/> - *Wyświetlana nazwa* - > *Następne źródło mapy*. ">" przed nazwą mapy wskazuje, jakie będzie następne wybrane źródło mapy, jeśli akcja zostanie wykonana. <br/> - *Uwaga*. Aby zmienić źródła map w OsmAnd, możesz ustawić pojedynczą szybką akcję, która pozwala przełączać się między wieloma źródłami map, lub utworzyć kilka oddzielnych szybkich akcji, każdą dla konkretnego źródła mapy. |
| Pokaż / Ukryj <br /> [**Transport publiczny**](../map/vector-maps.md#transport) | Włącz lub wyłącz warstwę mapy transportu publicznego <br /> - *Typ transportu*. Przy pierwszym stuknięciu możesz wybrać jeden lub wiele typów transportu, w tym *Przystanki transportu*, *Trasy autobusowe, trolejbusowe i wahadłowe*, *Trasy tramwajowe i kolejowe*, *Trasy metra*. |
| Zmień <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Utwórz listę źródeł map jako nakładkę mapy i przełączaj się między nimi. <br /> - *Uwaga*. Aby zmienić nakładki map w OsmAnd, możesz ustawić pojedynczą szybką akcję, która pozwala przełączać się między wieloma nakładkami map, lub utworzyć kilka oddzielnych szybkich akcji, każdą dla konkretnej nakładki mapy. |
| Zmień <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Utwórz listę źródeł map jako podkładkę mapy i przełączaj się między nimi. <br /> - *Uwaga*. Aby zmienić nakładki map w OsmAnd, możesz ustawić pojedynczą szybką akcję, która pozwala przełączać się między wieloma podkładkami map, lub utworzyć kilka oddzielnych szybkich akcji, każdą dla konkretnej podkładki mapy. |
| Zmień <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Utwórz listę stylów map dla map wektorowych i przełączaj się między nimi. <br /> - *Uwaga*. Aby zmienić style map w OsmAnd, możesz ustawić pojedynczą szybką akcję, która pozwala przełączać się między wieloma nakładkami map, lub utworzyć kilka oddzielnych szybkich akcji, każdą dla konkretnego stylu mapy. |
| Pokaż / Ukryj <br/> [**Warstwa Mapillary**](../plugins/mapillary.md) | Pozwala przeglądać warstwy map z obrazami na poziomie ulicy dostarczonymi przez Mapillary. |
| Pokaż / Ukryj <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | Możesz wybrać wyświetlanie lub ukrywanie wszystkich notatek OSM na mapie za pomocą jednego stuknięcia przycisku. |


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
| Przesuń <br/> [**Mapę w górę**](../map/interact-with-map.md) | Po stuknięciu ekran mapy przesuwa się w górę. |
| Przesuń <br/> [**Mapę w lewo**](../map/interact-with-map.md) | Po stuknięciu przycisku ekran mapy przesuwa się w lewo. |
| Przesuń <br/> [**Mapę w prawo**](../map/interact-with-map.md) | Za pomocą przycisku szybkiej akcji możesz przesunąć mapę w prawo. |
| Przesuń <br/> [**Do mojej lokalizacji**](../map/interact-with-map.md#my-location-and-zoom) | Przesuwa mapę do pozycji *Moja lokalizacja*. |


### Moje miejsca {#my-places}

| Akcja | Opis |
|:-------------|:-------------|
| Rozpocznij / Wstrzymaj <br/> [**Nagrywanie podróży**](../plugins/trip-recording.md#new-track-recording) | Rozpocznij sesję nagrywania bieżącego śladu lub wstrzymaj, aby tymczasowo zatrzymać bez kończenia podróży. |
| Rozpocznij <br/> [**Nowy segment podróży**](../plugins/trip-recording.md#overview-screen) | Rozpocznij nowy segment podróży bez przerywania ogólnego nagrywania. |
| Zapisz <br/> [**Nagraną podróż i kontynuuj**](../plugins/trip-recording.md#current-track-recording) | Zapisz bieżące nagranie podróży i kontynuuj nagrywanie bez przerwy. |
| Zakończ <br/> [**Nagrywanie podróży**](../plugins/trip-recording.md#current-track-recording) | Zakończ bieżącą sesję nagrywania podróży. |
| Dodaj <br/> [**Ulubione**](../map/configure-map-menu.md#map-layers) | Dodaje ulubione do wybranej (centralnej) lokalizacji na mapie. <br /> - *Pokaż pośrednie okno dialogowe*. Wyświetla okno dialogowe potwierdzenia. <br /> - *Grupa*. Dodaje ulubione do wybranej grupy. <br /> - *Kolor*. Dodaje ulubione z wstępnie wybranym kolorem <br /> - *Nazwa*. Dodaje ulubione z określonym prefiksem nazwy. |
| Dodaj <br/> [**Punkt trasy**](../map/point-layers-on-map.md#track-waypoints) | Dodaje nowy punkt trasy do [aktualnie nagrywanego śladu](../plugins/trip-recording.md) lub [dowolnego śladu w Moich miejscach](../personal/tracks/manage-tracks.md). <br /> - *Pokaż pośrednie okno dialogowe*. Wyświetla okno dialogowe potwierdzenia. <br /> - *Grupa*. Dodaje ulubione do wybranej grupy. <br /> - *Kolor*. Dodaje ulubione z wstępnie wybranym kolorem <br /> - *Nazwa*. Dodaje ulubione z określonym prefiksem nazwy. |
| Dodaj <br/> [**Znacznik mapy**](../map/configure-map-menu.md#map-layers) | Dodaje znacznik do wybranej (środkowej) lokalizacji na mapie. |
| Dodaj <br/> [**Miejsce parkingowe**](../plugins/parking.md) | Dodaje parking do wybranej (środkowej) lokalizacji na mapie. Stara pozycja parkingu jest usuwana. |
| Dodaj <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Dodaje POI do wybranej (środkowej) lokalizacji na mapie (tak samo jak akcja z menu kontekstowego). <br /> - *Pokaż pośrednie okno dialogowe*. Wyświetla okno dialogowe potwierdzenia. <br /> - *Typ POI* (opcjonalnie). Wstępnie wybiera typ POI OSM. <br /> - *Tag/Wartość* (wiele). Dodaje tagi / wartości [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) |
| Dodaj <br/> [**Notatkę OSM**](../plugins/osm-editing.md#create--modify-osm-note) | Dodaje [notatkę OSM](https://wiki.openstreetmap.org/wiki/Notes) <br /> - *Pokaż pośrednie okno dialogowe*. Wyświetla okno dialogowe potwierdzenia. <br /> - *Wiadomość*. Dodaje domyślną wiadomość do notatki. |
| Dodaj <br/> [**Notatki multimedialne**](../plugins/audio-video-notes.md) | Rozpoczyna nagrywanie notatki audio / zdjęciowej / wideo dla wybranej (środkowej) lokalizacji na mapie. |
| Utwórz <br/> [**Nową trasę**](../plan-route/create-route.md) <br /> *Tylko Android* | Otwiera narzędzie [Zaplanuj trasę](../plan-route/create-route.md) i tworzy trasę dla wybranej (centralnej) lokalizacji na mapie. |


### Nawigacja {#navigation}

| Akcja | Opis |
|:-------------|:-------------|
| Dodaj <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | Możesz wybrać środek ekranu mapy jako pierwszy punkt pośredni. Poprzednie miejsce docelowe pozostaje takie samo. |
| Włącz / Wyłącz <br/> [**Komunikaty głosowe**](../navigation/guidance/voice-navigation.md) | Wycisz lub włącz wskazówki głosowe podczas nawigacji. |
| Ustaw <br/> [**Punkt początkowy**](../navigation/setup/route-navigation.md#set-destinations) | Oznacz wybraną (środkową) lokalizację na mapie jako punkt wyjścia. |
| Ustaw <br/> [**Cel**](../navigation/setup/route-navigation.md#set-destinations) | Dodaj wybraną (środkową) lokalizację na mapie jako cel. Poprzedni cel staje się ostatnim punktem pośrednim. |
| Zastąp <br/> [**Cel**](../navigation/setup/route-navigation.md#intermediate-destinations) | Ustaw / Zastąp wybraną (środkową) lokalizację na mapie jako cel. Poprzedni cel jest usuwany. |
| Włącz / Wyłącz <br/> [**Automatyczne powiększanie mapy**](../map/interact-with-map.md) | Włącz lub wyłącz automatyczne powiększanie mapy podczas nawigacji. |
| Rozpocznij/zatrzymaj <br/> [**Nawigację**](../navigation/setup/route-navigation.md#start--stop-navigation) | Rozpocznij nawigację (jeśli jest punkt docelowy) lub zatrzymaj nawigację. |
| Wstrzymaj / Wznów <br/> [**Nawigację**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Wstrzymaj / Wznów nawigację. |
| Usuń <br/> [**Następny punkt docelowy**](../navigation/setup/route-navigation.md#intermediate-destinations) | Usuwa następny punkt pośredni, jeśli istnieje, w przeciwnym razie usuwa cel i wyświetla okno dialogowe zakończenia nawigacji. Akcja jest nieaktywna, jeśli nie masz żadnego celu. |
| Symuluj <br/> [**Lokalizację przez GPX**](../plugins/development.md#gpx-track-simulation) | Symuluje lokalizację i ruch urządzenia za pomocą śladu GPX. |


### Ustawienia {#settings}

| Akcja | Opis |
|:-------------|:-------------|
| Zmień <br/> [**Profil aplikacji**](../personal/profiles.md) | Utwórz listę profili aplikacji i przełączaj się między nimi. <br /> - *Pokaż pośrednie okno dialogowe*. Wyświetla okno dialogowe z listą profili. <br /> - *Nie pokazuj pośredniego okna dialogowego*. Profile zmieniają się w określonej kolejności. <br /> - *Uwaga*. Możesz dostosować pojedynczą akcję, która pozwala przełączać się między wieloma profilami, lub utworzyć kilka oddzielnych akcji, każdą dla konkretnego profilu. |
| Zmień <br/> [**Profil aplikacji na następny**](../personal/profiles.md) | Przełącza na następny profil na liście. |
| Zmień <br/> [**Profil aplikacji na poprzedni**](../personal/profiles.md) | Przełącza na poprzedni profil na liście. |
| Zmień <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Tylko Android* | Pozwala ustawić położenie kursora *Moja lokalizacja* na mapie. Włącza lub wyłącza zawsze centralne położenie kursora na ekranie. |
| Zmień <br/> [**Pozycję lokalizacji na ekranie**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Tylko iOS* | Pozwala włączyć lub wyłączyć wyświetlanie wcześniej wybranej pozycji kursora Mojej lokalizacji na mapie. |


## Użyj klawiatury do akcji {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Urządzenia zewnętrzne](@site/static/img/map/external_custom_2_andr.png)

Korzystając z funkcji narzędzia Szybka akcja, możesz przypisać wymagane akcje do klawiszy zewnętrznego urządzenia wejściowego. Opis znajduje się w artykule [Interakcja z mapą](../map/interact-with-map.md#custom-input-device-type).


## Powiązane artykuły {#related-articles}

- [Konfiguruj ekran](./configure-screen.md)
- [Przyciski mapy](./map-buttons.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Promień-linijka i Linijka](./radius-ruler.md)
- [Widżety znaczników](./markers.md)

> *Ostatnia aktualizacja: kwiecień 2025*