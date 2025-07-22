---
source-hash: 0353071eeb4cc978c117068bf19a65442825b1d24cf586249b32ac62e28c929f
sidebar_position: 8
title: Markery
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

Markery to specjalne punkty oznaczone na mapie jako flagi, które można szybko utworzyć jednym dotknięciem, bez podawania nazwy i innych informacji, w przeciwieństwie do [ulubionych punktów](./favorites.md). Markery zapewniają również dodatkową funkcjonalność dzięki [widżetom](../widgets/markers.md), **strzałkom** (<Translate android="true" ids="show_arrows_on_the_map"/>) i **wskazaniu odległości** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Markery mapy Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markery mapy iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Markery {#markers}

### Dodawanie / Edycja Markerów {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Krótko lub długo dotknij mapy i wybierz wymaganą akcję z [menu kontekstowego mapy](../map/map-context-menu.md#add--edit-marker).

![Dodaj akcję edycji markera Android](@site/static/img/map/add_marker_android.png) ![Akcja przekazania markera Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Krótko lub długo dotknij mapy i wybierz wymaganą akcję z [menu kontekstowego mapy](../map/map-context-menu.md#add--edit-marker).

![Dodaj akcję edycji markera iOS](@site/static/img/map/add_marker_ios.png) ![Akcja przywracania markera Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Możliwe jest oznaczenie punktu lub obiektu, aby ułatwić planowanie nawigacji. Wystarczy dotknąć ikony *flagi* (*Android*) lub *strzałki* (*iOS*) w menu, aby wyświetlić kierunek i odległość do wybranego punktu od bieżącej lokalizacji (lub środkowego punktu mapy / początkowego punktu dotknięcia mapy, gdy lokalizacja jest wyłączona).

***Akcje***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Umieszcza nowy marker w wybranym punkcie.
- **Oznacz jako przekroczony** (*Android*) / Odrzuć (iOS). Dezaktywuje marker i przenosi go do Historii.
- **Ustaw jako aktywny** (*Android*). Przenosi marker na najwyższą pozycję (na górnym panelu).
- **Przywróć marker** (*Android*). Przenosi marker z Historii do listy aktywnych.

:::note
Nie można od razu usunąć markera, należy go najpierw dezaktywować (oznaczyć jako przekroczony), aby został przeniesiony do [Historii](#history), a następnie można go trwale usunąć z historii. Po dezaktywacji marker zostanie usunięty z mapy i listy trasy.
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


### Lista trasy {#itinerary-list}

Lista trasy przedstawia uporządkowaną listę markerów, gdzie pierwszy marker jest używany w widżetach do nawigacji. Więcej na ten temat można przeczytać w artykule [Nawigacja za pomocą markerów](../navigation/setup/markers-navigation.md#itinerary-list).

### Grupy markerów {#marker-groups}

<InfoAndroidOnly />

![Grupy markerów mapy Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Markery mogą być dodawane i usuwane jako cała grupa z grupy Ulubionych lub pliku GPX z punktami trasy. To sprawia, że są bardzo wygodne w użyciu w specjalnym trybie nawigacji - [Nawigacja za pomocą markerów](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Historia {#history}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Historia markerów mapy Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historia markerów mapy iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

Historia to lista wszystkich dezaktywowanych (przekroczonych) markerów. Z tej listy można trwale usunąć marker lub go przywrócić.


## Wygląd na mapie {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![wygląd_na_mapie](@site/static/img/widgets/appearence_on_the_map-01.png) ![wygląd_na_mapie](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Wygląd markerów mapy iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Wygląd markerów mapy iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

Menu *Wygląd na mapie* to ogólne ustawienie wyświetlania markerów i dodatkowych wskaźników do nich.
W wersji OsmAnd na iOS, *Wygląd na mapie* jest również ustawieniem wyświetlania widżetów. Istnieją również dodatkowe ustawienia do [konfiguracji widżetów z markerami](../widgets/markers.md#configure-marker-widgets).

- **Aktywne markery**. Pokazuje informacje o jednym lub dwóch pierwszych markerach na liście markerów mapy.
- **Wskazanie odległości** *(dla iOS)*. Pozwala wybrać, czy widżety mają być wyświetlane i jak będą się pojawiać: nad mapą (Górny pasek) czy po prawej stronie ekranu (Widżety).
- **Strzałki na mapie**. Wskazuje kierunek do śledzonego markera (jednego lub dwóch) jako strzałka na mapie. Jeśli marker znajduje się w widocznej części mapy, strzałka nie jest wyświetlana.
- **Linia kierunku**. Pokazuje kierunek, jako przerywaną linię, od konkretnego punktu na mapie do śledzonego markera w linii prostej.
- ***Jedno dotknięcie*** aktywne (*dla Androida*). Jednym dotknięciem wymaganego markera na mapie, ten marker przenosi się na początek listy aktywnych markerów mapy bez otwierania menu kontekstowego.
- **Zachowaj przekroczone markery na mapie** *(dla Androida)*. Markery dodane jako grupa Ulubionych lub punkty trasy GPX oznaczone jako przekroczone pozostaną na mapie. Jeśli grupa nie jest aktywna, markery znikną z mapy.


## Planowanie trasy dla markerów {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Markery mapy Punkty planowania trasy Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Markery mapy Opcje planowania trasy Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Korzystając z funkcji Planowania trasy w narzędziu listy markerów, możesz sortować *Markery* *od drzwi do drzwi*, ustawiać je w odwrotnej kolejności lub tworzyć *podróż w obie strony*. Jeśli wybierzesz opcję *Nawigacja*, *Markery* zostaną użyte jako [punkty pośrednie](../navigation/setup/route-navigation.md#intermediate-destinations).


## Akcje {#actions}

<InfoAndroidOnly />

![Więcej markerów mapy Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Markery można sortować na liście według nazwy, odległości, czasu dodania.
- **<Translate android="true" ids="appearance_on_the_map"/>** lub **<Translate ios="true" ids="shared_string_appearance"/>**. [Ustawienia dla markerów mapy](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Dodaje markery poprzez [wprowadzanie współrzędnych](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. Tworzy trasę [do nawigacji](../navigation/setup/markers-navigation.md) przy użyciu wybranych markerów.
- **<Translate android="true" ids="marker_save_as_track"/>**. Zapisuje aktywne markery w pliku GPX.
- **<Translate android="true" ids="move_all_to_history"/>**. Dezaktywuje wszystkie markery i przenosi je do [Historii](#history).


## Powiązane artykuły {#related-articles}

- [Nawigacja za pomocą markerów](../navigation/setup/markers-navigation.md)
- [Widżety markerów](../widgets/markers.md)

> *Ostatnia aktualizacja: sierpień 2024*