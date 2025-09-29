---
source-hash: 1505593576ed8b4e4ca8274ad047f82a70181f3fcafd8e9ca6d60e795b2f0724
sidebar_position: 3
title:  Wprowadzanie współrzędnych
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

*Wprowadzanie współrzędnych* to proste i łatwe w użyciu narzędzie do tworzenia punktów trasy poprzez określenie ich położenia geograficznego. Ta funkcja może być przydatna do nawigacji do określonych miejsc, które znasz tylko po ich współrzędnych: dodane punkty można [zapisać](#save-as-track) jako trasę GPX i wykorzystać później do [nawigacji GPX](../navigation/setup/gpx-navigation.md) lub [nawigacji według znaczników](../navigation/setup/markers-navigation.md#overview).

![Przegląd wprowadzania współrzędnych](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## Jak używać {#how-to-use}

Możesz tworzyć punkty trasy z menu *[Znaczniki na mapie](../personal/markers.md#actions)* lub z [Moje miejsca](../personal/myplaces.md) (zobacz zrzuty ekranu). Aby dotrzeć do opcji wprowadzania współrzędnych, postępuj zgodnie z poniższymi ścieżkami:
  - *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Przycisk Ziemi na dole ekranu*
  - *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Jak znaleźć wprowadzanie współrzędnych](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Jak znaleźć wprowadzanie współrzędnych](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

Po otwarciu ekranu wprowadzania współrzędnych:

- &nbsp;Upewnij się, że używane są prawidłowe [jednostki miary](#coordinates-format). Jeśli nie, zmień format współrzędnych w menu [Opcje](#options).
- &nbsp;Wprowadź współrzędne punktu za pomocą [szablonu](#add-a-point). Po naciśnięciu przycisku *[Dodaj](#add-a-point)*, punkt zostanie dodany do *[listy punktów](#points-list)*. W razie potrzeby możesz wprowadzić dodatkowe punkty.
- &nbsp;Zapisz swój punkt (lub punkty) jako *[Trasę](../personal/tracks/manage-tracks.md)* za pomocą *[menu Opcje](#options)* lub przycisku &#8592; *(Wstecz)*.

:::note
Wyniki tworzenia punktów według współrzędnych - *[trasa GPX](../personal/tracks/manage-tracks.md)* z punktami trasy - można znaleźć w menu [Moje miejsca](../personal/myplaces.md) (*folder <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## Opcje {#options}

Korzystając z menu opcji, możesz [zapisać](#save-as-track) dodany punkt (lub punkty) jako trasę, aktywować zaawansowane opcje wprowadzania (klawiatura systemowa i dwucyfrowa długość geograficzna) lub zmienić format współrzędnych.

![Menu Opcje wprowadzania współrzędnych na Androidzie](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - otwiera okno dialogowe, które pozwala zapisać utworzony punkt (lub punkty) jako trasę GPX. Możesz zmienić nazwę trasy lub pozostawić ją jako domyślną.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - pozwala na użycie klawiatury systemowej Androida do wprowadzania współrzędnych.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - umożliwia wprowadzanie danych o długości geograficznej za pomocą tylko dwóch cyfr. Może to być przydatne dla długości geograficznych od 0° do 99° (na przykład w Europie).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - pozwala na zmianę formatu wprowadzania współrzędnych.

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

Po wybraniu prawidłowych jednostek możesz przystąpić do wprowadzania współrzędnych przyszłych punktów trasy.
Ekran wprowadzania współrzędnych składa się z następujących elementów:

![Menu wprowadzania współrzędnych na Androidzie](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Otwiera menu *[Opcje](#options)* (opisane powyżej).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Służy do wprowadzania danych w wybranym formacie (D - stopnie, M - minuty, S - sekundy). Możesz zmienić format współrzędnych w *[menu <Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;Przyciski półkul *<Translate android="true" ids="navigate_point_latitude"/> i <Translate android="true" ids="navigate_point_longitude"/>*. Pozwalają na zmianę stron horyzontu: *Południe - Północ* i *Zachód - Wschód*.
- &nbsp;Pole *Nazwa punktu*. Możesz pozostawić domyślną nazwę lub wymyślić własną.
- &nbsp;Przycisk *X*. Czyści pole wprowadzania odpowiedniej linii.

### Skrócona klawiatura {#short-keyboard}

Do wprowadzania danych można użyć skróconej klawiatury (domyślnie) lub klawiatury systemowej (Android). Aby zmienić metodę wprowadzania, przejdź do menu *[Opcje](#options)*. Po wprowadzeniu szerokości i długości geograficznej możesz dodać punkt do *[listy](#points-list)* za pomocą przycisku *+Dodaj*.

![Dodawanie punktu przez wprowadzanie współrzędnych na Androidzie](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- Przycisk *<Translate android="true" ids="shared_string_add"/>* pozwala zapisać punkt na *[Liście punktów](#points-list)*.
- Przycisk *<Translate android="true" ids="shared_string_clear"/>* resetuje wszystkie wprowadzone dane.
- &#9032; pozwala przeskoczyć do następnej wartości.
- *Przyciski klawiatury* pozwalają na wprowadzanie danych, ich usuwanie, przeskakiwanie do następnej wartości współrzędnych, ukrywanie klawiatury.

### Lista punktów {#points-list}

Pokazuje już utworzone punkty: nazwę, odległość i kierunek do tego punktu.

![Zapisywanie punktu przez wprowadzanie współrzędnych na Androidzie 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Zapisywanie punktu przez wprowadzanie współrzędnych na Androidzie 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

Przycisk **⁝** otwiera menu akcji do edycji lub usuwania wybranego punktu.
Po dotknięciu punktu staje się możliwe zmienienie jego współrzędnych. Dotknij przycisku *Zastosuj*, aby zapisać zmiany.

## Zapisz jako trasę {#save-as-track}

Aby zapisać swoje punkty jako trasę, dotknij przycisku *Wstecz* ( &#8592; ) lub użyj menu *[Opcje](#options)*.

![Zapisywanie punktu przez wprowadzanie współrzędnych na Androidzie 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Zapisywanie punktu przez wprowadzanie współrzędnych na Androidzie 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

W wyskakującym menu możesz wprowadzić własną nazwę trasy lub zapisać ją jako domyślną. Dotknij <Translate android="true" ids="shared_string_save"/>, aby zapisać dodane punkty jako nową trasę.
Swoją trasę znajdziesz w menu [Moje miejsca](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).