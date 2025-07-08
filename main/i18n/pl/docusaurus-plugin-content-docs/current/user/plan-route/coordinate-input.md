---
source-hash: 263596e04f0705ae1c8c57f5afa60aa2cbe3498370962ed69729ec73d60d14f6
sidebar_position: 3
title: Wprowadzanie współrzędnych
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



<InfoAndroidOnly />

## Przegląd {#overview}

*Wprowadzanie współrzędnych* to proste i łatwe w użyciu narzędzie do tworzenia punktów trasy poprzez określenie ich położenia geograficznego. Funkcja ta może być przydatna do nawigacji do określonych miejsc, które znasz tylko po ich współrzędnych: dodane punkty mogą być [zapisane](#save-as-track) jako ślad GPX i używane później do [nawigacji GPX](../navigation/setup/gpx-navigation.md) lub [nawigacji po znacznikach](../navigation/setup/markers-navigation.md#add-gpx).

![Przegląd wprowadzania współrzędnych](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## Jak używać {#how-to-use}

Możesz tworzyć punkty trasy z menu *[Znaczniki mapy](../personal/markers.md#actions)* lub z [Moje miejsca](../personal/myplaces.md) (patrz zrzuty ekranu). Aby uzyskać dostęp do opcji wprowadzania współrzędnych, wykonaj następujące kroki:
  - *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Przycisk Ziemia na dole ekranu*
  - *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Wprowadzanie współrzędnych - jak znaleźć](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Wprowadzanie współrzędnych - jak znaleźć](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

Po otwarciu ekranu wprowadzania współrzędnych:

- &nbsp;Upewnij się, że używane są prawidłowe [jednostki miary](#coordinates-format). Jeśli nie, zmień format współrzędnych w menu [Opcje](#options).
- &nbsp;Wprowadź współrzędne punktu, używając [szablonu](#add-a-point). Po naciśnięciu przycisku *[Dodaj](#add-a-point)*, Twój punkt zostanie dodany do *[listy punktów](#points-list)*. W razie potrzeby możesz wprowadzić dodatkowe punkty.
- &nbsp;Zapisz swój punkt(y) jako *[Ślad](../personal/tracks/manage-tracks.md)*, używając *[menu Opcje](#options)* lub &#8592; (przycisk *Wstecz*).

:::note
Wyniki tworzenia punktów za pomocą współrzędnych - *[ślad GPX](../personal/tracks/manage-tracks.md)* z punktami trasy - można znaleźć w menu [Moje miejsca](../personal/myplaces.md) (folder *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## Opcje {#options}

Korzystając z menu opcji, możesz [zapisać](#save-as-track) dodane punkty jako ślad, aktywować zaawansowane opcje wprowadzania (klawiatura systemowa i dwucyfrowa długość geograficzna) lub zmienić format współrzędnych.

![Menu opcji wprowadzania współrzędnych Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - otwiera okno dialogowe, które pozwala zapisać utworzony punkt (lub punkty) jako ślad GPX. Możesz zmienić nazwę śladu lub pozostawić domyślną.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - pozwala używać klawiatury systemowej Android do wprowadzania współrzędnych.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - umożliwia wprowadzanie danych długości geograficznej tylko z dwoma cyframi. Może to być przydatne dla długości geograficznych od 0° do 99° (na przykład w Europie).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - pozwala zmienić format współrzędnych do wprowadzania.

### Format współrzędnych {#coordinates-format}

Podczas wprowadzania współrzędnych ważne jest, aby upewnić się, że używane są odpowiednie jednostki miary. Obsługujemy stopnie dziesiętne (DD), stopnie i minuty lub stopnie, minuty i sekundy (DMS).

|Format współrzędnych| Przykład |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Dodaj punkt {#add-a-point}

Po wybraniu prawidłowych jednostek, możesz wprowadzić współrzędne przyszłych punktów trasy.
Ekran wprowadzania współrzędnych składa się z następujących elementów:

![Menu wprowadzania współrzędnych Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Otwiera menu *[Opcje](#options)* (opisane powyżej).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Służy do wprowadzania danych w wybranym formacie (D - stopnie, M - minuty, S - sekundy). Możesz zmienić format współrzędnych w menu *[<Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;Przyciski półkuli *<Translate android="true" ids="navigate_point_latitude"/> i <Translate android="true" ids="navigate_point_longitude"/>*. Pozwalają zmieniać strony horyzontu: *Południe - Północ* i *Zachód - Wschód*.
- &nbsp;Pole *Nazwa punktu*. Możesz pozostawić domyślną nazwę lub wymyślić własną.
- &nbsp;Przycisk *X*. Czyści pole wprowadzania odpowiedniej linii.

### Krótka klawiatura {#short-keyboard}

Do wprowadzania danych można używać krótkiej klawiatury (domyślnej) lub klawiatury systemowej (Android). Aby zmienić metodę wprowadzania, przejdź do menu *[Opcje](#options)*. Po wprowadzeniu szerokości i długości geograficznej możesz dodać punkt do *[listy](#points-list)* za pomocą przycisku *+Dodaj*.

![Wprowadzanie współrzędnych Dodaj punkt Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- Przycisk *<Translate android="true" ids="shared_string_add"/>* pozwala zapisać punkt w *[Liście punktów](#points-list)*.
- Przycisk *<Translate android="true" ids="shared_string_clear"/>* resetuje wszystkie wprowadzone dane.
- &#9032; pozwala przejść do następnej wartości.
- *Przyciski klawiatury* pozwalają wprowadzać dane, usuwać je, przechodzić do następnej wartości współrzędnej, ukrywać klawiaturę.

### Lista punktów {#points-list}

Pokazuje już utworzone punkty: nazwę, odległość i kierunek do tego punktu.

![Wprowadzanie współrzędnych zapisz punkt Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Wprowadzanie współrzędnych zapisz punkt Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

Przycisk **⁝** otwiera menu akcji do edycji lub usuwania wybranego punktu.
Po dotknięciu punktu, możliwe staje się zmienianie jego współrzędnych. Dotknij przycisku *Zastosuj*, aby zapisać zmiany.

## Zapisz jako ślad {#save-as-track}

Aby zapisać punkty jako ślad, dotknij przycisku *Wstecz* ( &#8592; ) lub użyj menu *[Opcje](#options)*.

![Wprowadzanie współrzędnych zapisz punkt Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Wprowadzanie współrzędnych zapisz punkt Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

W wyskakującym menu możesz wprowadzić własną nazwę śladu lub zapisać go domyślnie. Dotknij <Translate android="true" ids="shared_string_save"/>, aby zapisać dodane punkty jako nowy ślad.
Swój ślad znajdziesz w [menu Moje miejsca](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).