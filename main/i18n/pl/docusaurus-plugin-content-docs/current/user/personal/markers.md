---
source-hash: 4a76625c2bb84dea3475d937395b2dcabeed514e2bbf68736a1f6e8649b066f9
sidebar_position: 8
title:  Znaczniki
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

Znaczniki to specjalne punkty oznaczone na mapie jako flagi, które można szybko utworzyć jednym dotknięciem, bez podawania nazwy i innych informacji, w przeciwieństwie do [punktów Ulubionych](./favorites.md). Znaczniki zapewniają również dodatkową funkcjonalność dzięki [widżetom](../widgets/markers.md), **strzałkom** (<Translate android="true" ids="show_arrows_on_the_map"/>) i **wskazaniom odległości** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Znaczniki mapy Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Znaczniki mapy iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Znaczniki {#markers}

### Dodaj / Edytuj znaczniki {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Krótkie lub długie dotknięcie mapy i wybranie wymaganej akcji z [menu kontekstowego mapy](../map/map-context-menu.md#add--edit-marker).

![Akcja dodawania/edycji znacznika Android](@site/static/img/map/add_marker_android.png) ![Akcja minięcia znacznika Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Krótkie lub długie dotknięcie mapy i wybranie potrzebnej akcji w [menu kontekstowym mapy](../map/map-context-menu.md#add--edit-marker).

![Akcja dodawania/edycji znacznika iOS](@site/static/img/map/add_marker_ios.png) ![Akcja przywrócenia znacznika Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Możliwe jest oznaczenie punktu lub obiektu w celu ułatwienia planowania nawigacji. Wystarczy dotknąć ikony *flagi* (*Android*) lub *strzałki* (*iOS*) w menu, aby wyświetlić kierunek i odległość do wybranego punktu z bieżącej lokalizacji (lub środka mapy / początkowego punktu dotknięcia mapy, gdy lokalizacja jest wyłączona).

***Akcje***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Umieszcza nowy znacznik w wybranym punkcie.
- **Oznacz jako minięty** (*Android*) / Odrzuć (iOS). Dezaktywuje znacznik i umieszcza go w Historii.
- **Uaktywnij** (*Android*). Przenosi znacznik na najwyższą pozycję (na górnym panelu).
- **Przywróć znacznik** (*Android*). Przenosi znacznik z Historii na listę aktywnych.

:::note
Nie można natychmiast usunąć znacznika, należy go najpierw dezaktywować (oznaczyć jako minięty), aby został przeniesiony do [Historii](#history), a następnie można go trwale usunąć z historii. Po dezaktywacji znacznik zostanie usunięty z mapy i listy planu podróży.
:::


<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Lista planu podróży {#itinerary-list}

Lista planu podróży reprezentuje uporządkowaną listę znaczników, gdzie pierwszy znacznik z góry jest używany w widżetach do nawigacji. Przeczytaj więcej na ten temat w artykule [Nawigacja według znaczników](../navigation/setup/markers-navigation.md#itinerary-list).

### Grupy znaczników {#marker-groups}

<InfoAndroidOnly />

![Grupy znaczników mapy Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Znaczniki można dodawać i usuwać jako całą grupę z grupy Ulubionych lub pliku GPX z punktami trasy. To sprawia, że są bardzo wygodne w użyciu w specjalnym trybie nawigacji - [Nawigacja według znaczników](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Historia {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historia znaczników mapy Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historia znaczników mapy iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

Historia to lista wszystkich dezaktywowanych (miniętych) znaczników. Z tej listy można trwale usunąć znacznik lub go przywrócić.


## Wygląd na mapie {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![wygląd_na_mapie](@site/static/img/widgets/appearence_on_the_map-01.png) ![wygląd_na_mapie](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Wygląd znaczników mapy iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Wygląd znaczników mapy iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

Menu *Wygląd na mapie* to ogólne ustawienie wyświetlania znaczników i dodatkowych wskaźników do nich.
W wersji OsmAnd na iOS *Wygląd na mapie* jest również ustawieniem wyświetlania widżetów. Istnieją również dodatkowe ustawienia do [konfiguracji widżetów ze znacznikami](../widgets/markers.md#configure-marker-widgets).

- **Aktywne znaczniki**. Pokazuje informacje o pierwszym lub dwóch pierwszych znacznikach na liście znaczników mapy.
- **Wskazanie odległości** *(dla iOS)*. Pozwala wybrać, czy widżety mają być wyświetlane, a jeśli tak, to w jaki sposób: nad mapą (górny pasek) czy po prawej stronie ekranu (widżety).
- **Strzałki na mapie**. Wskazuje kierunek do śledzonego znacznika (jednego lub dwóch) jako strzałka na mapie. Jeśli znacznik znajduje się w widocznej części mapy, strzałka nie jest wyświetlana.
- **Linia kierunku**. Pokazuje kierunek, jako linia przerywana, od określonego punktu na mapie do śledzonego znacznika w linii prostej.
- ***Jedno dotknięcie*** aktywne (*dla Androida*). Po jednokrotnym dotknięciu wymaganego znacznika na mapie, znacznik ten przesuwa się na górę listy aktywnych znaczników mapy bez otwierania menu kontekstowego.
- **Zachowaj minięte znaczniki na mapie** (*dla Androida*). Znaczniki dodane jako grupa Ulubionych lub punkty trasy GPX oznaczone jako Minięte pozostaną na mapie. Jeśli grupa nie jest aktywna, znaczniki znikną z mapy.


## Planuj trasę dla znaczników {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Punkty trasy planu znaczników mapy Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Opcje trasy planu znaczników mapy Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Korzystając z funkcjonalności narzędzia Planuj trasę na liście znaczników, można sortować *Znaczniki* *Od drzwi do drzwi*, umieszczać je w odwrotnej kolejności lub tworzyć *Podróż okrężną*. Jeśli dotkniesz opcji *Nawigacja*, *Znaczniki* zostaną użyte jako [punkty pośrednie](../navigation/setup/route-navigation.md#intermediate-destinations).


## Akcje {#actions}

<InfoAndroidOnly />

![Więcej opcji znaczników mapy Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Znaczniki na liście można sortować według nazwy, odległości, czasu dodania.
- **<Translate android="true" ids="appearance_on_the_map"/>** lub **<Translate ios="true" ids="shared_string_appearance"/>**. [Ustawienia znaczników mapy](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Dodaje znaczniki poprzez [wprowadzanie współrzędnych](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. Buduje trasę [do nawigacji](../navigation/setup/markers-navigation.md) przy użyciu wybranych znaczników.
- **<Translate android="true" ids="marker_save_as_track"/>**. Zapisuje aktywne znaczniki w pliku GPX.
- **<Translate android="true" ids="move_all_to_history"/>**. Dezaktywuje wszystkie znaczniki i przenosi je do [Historii](#history).


## Powiązane artykuły {#related-articles}

- [Nawigacja według znaczników](../navigation/setup/markers-navigation.md)
- [Widżety znaczników](../widgets/markers.md)