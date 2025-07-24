---
source-hash: f1b6ce88c16188825c1c750fdab6393efc13e796dac9b76318385c1908db3134
sidebar_position: 3
title: Nawigacja za pomocą znaczników
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




## Przegląd {#overview}

[Znaczniki mapy](../../personal/markers.md) to punkty na mapie oznaczone flagami. Mogą być używane do różnych celów, takich jak wskazywanie miejsca, które chcesz odwiedzić, punktu zainteresowania, który chcesz zapamiętać, lub do tworzenia niestandardowej trasy.

Mogą być szczególnie pomocne dla turystów, rowerzystów lub każdego, kto eksploruje nowy obszar i chce zaznaczyć interesujące miejsca lub punkty odniesienia na mapie. Główna różnica w stosunku do [punktów ulubionych](../../personal/favorites.md) polega na tym, że znaczniki są szybsze w tworzeniu, ponieważ nie wymagają nazwy.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation marker Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation marker iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Używanie znaczników w nawigacji {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

 ![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Difference marker navigation iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Difference marker navigation iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Znaczniki mapy* mogą służyć jako [punkty docelowe](./route-navigation#set-destinations) podczas tworzenia trasy. Są szczególnie wygodne, gdy trzeba wyznaczyć trasę z punktami pośrednimi.

Jednak *znaczniki mapy* zapewniają również różne funkcje, takie jak [widżety](../../widgets/markers.md), kierunek ruchu, linie na mapie, dzięki czemu można używać tych narzędzi do nawigacji bez tworzenia linii trasy i włączania pełnej nawigacji głosowej.

W przypadku, gdy potrzebujesz prostej nawigacji punkt-punkt wyświetlanej jako linie proste, możesz zbudować i posortować ***listę trasy*** składającą się ze znaczników jako punktów pośrednich i użyć widżetów do prostej nawigacji.


#### Zalecenia {#recommendations}

Oto proste zalecenia dotyczące *nawigacji za pomocą znaczników*:

1. Twórz znaczniki. Znajdź żądany obiekt(y) na mapie, dotknij go i wybierz *[przycisk znacznika](../../personal/markers.md#add--edit-markers)* w *[menu kontekstowym mapy](../../map/map-context-menu.md#add--edit-marker)*. Możesz również tworzyć znaczniki z [ulubionych](#add-group-of-favorite) lub [ścieżek GPX](#add-group-of-track-waypoints).
2. [*Sortuj znaczniki*](#sort-markers) w preferowany sposób, w jaki chcesz je przechodzić.
3. Dostosuj *widok znaczników mapy*, jeśli chcesz używać znaczników bez uruchamiania nawigacji. Włącz opcje **Strzałki na mapie** i **Linia kierunku** w sekcji *[Wygląd](../../personal/markers.md#appearance-on-the-map)* w *[menu znaczników mapy](../../personal/markers.md#actions)*.
4. Dodaj *[widżety znaczników](../../personal/markers.md#markers)* w *[menu konfiguracji ekranu](../../widgets/configure-screen.md)* (opcjonalnie).
5. [*Oznacz jako przebyte*](#pass-markers) już odwiedzone znaczniki lub przywróć je z historii, jeśli chcesz je ponownie przejść.

:::note
Gdy opcje **Strzałki na mapie** i **Linia kierunku** są włączone w sekcji *Wygląd* w [menu znaczników mapy](../../personal/markers.md#appearance-on-the-map), zobaczysz strzałkę lub linię przerywaną na mapie. Strzałka pokazuje kierunek do aktywnego znacznika, gdy znajduje się on poza bieżącym ekranem mapy. Linia kierunku jest rysowana, gdy Twoja geolokalizacja i znacznik znajdują się na tym samym ekranie.
:::


## Lista trasy {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Markers list Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markers list iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


Lista trasy przedstawia uporządkowaną listę *przechodnich* znaczników, które są widoczne na mapie. Możesz dodawać i usuwać punkty pojedynczo lub zbiorczo, używając wcześniej przygotowanego [pliku GPX](#add-group-of-track-waypoints) lub [grupy ulubionych](#add-group-of-favorite). W przypadku lokalnych zawodów lub przygód może być przydatne utworzenie listy punktów z współrzędnych za pomocą [narzędzia do wprowadzania współrzędnych](../../plan-route/coordinate-input.md).


### Dodaj pojedyncze znaczniki {#add-single-markers}

*Znaczniki* można dodawać lub usuwać z mapy, pojedynczo dotykając ekranu w wybranym miejscu. Następnie należy postępować zgodnie z instrukcjami z artykułu *[menu kontekstowego mapy](../../map/map-context-menu.md#add--edit-marker)*.


### Dodaj grupę ulubionych {#add-group-of-favorite}

<InfoAndroidOnly />

![Favorites to markers 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorites to markers 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Możesz tworzyć *znaczniki mapy* z *[ulubionych](../../personal/favorites.md)* za pomocą:

- *[Menu grup ulubionych](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Moje ulubione)*.
- Ikony &#128681; w menu Ulubione na stronie *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Moje ulubione→&#128681;)*.
- Opcji **'+'** (dodaj) w *[zakładce Grupy](../../personal/markers.md#marker-groups)* w menu znaczników mapy *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Dodaj grupę punktów trasy {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX to markers 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Ścieżki GPX z punktami trasy mogą być używane jako *znaczniki mapy* i szybko wyłączane:

- Użyj opcji **'+'** (dodaj) w *[zakładce Grupy](../../personal/markers.md#marker-groups)* w menu znaczników mapy *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Włącz przełącznik obok ścieżki w *[zakładce Grupy](../../personal/markers.md#marker-groups)* w menu znaczników mapy *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Tylko ścieżki z punktami trasy mogą być dodawane do *listy znaczników mapy*. Ścieżka, którą zamierzasz dodać, powinna być również widoczna (aktywna) na mapie.
:::

![GPX to markers 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX to markers 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Możesz również tworzyć *znaczniki* ze ścieżki z punktami trasy, używając *[menu kontekstowego ścieżki](../../map/tracks/track-context-menu.md#points--waypoints)*: *Dotknij widocznej ścieżki na mapie → w menu kontekstowym ścieżki wybierz Punkty → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Sortuj znaczniki {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sort Markers in a list Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sort Markers in a list iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Naciskając na lewy róg (*Android*) lub prawy róg (*iOS*) karty *znacznika mapy* w *[liście znaczników mapy](../../personal/markers.md#itinerary-list)* i przesuwając ją w górę lub w dół, możesz zmienić jej kolejność w *liście nawigacji* (podczas przesuwania karty znacznika zobaczysz linię wskazującą, gdzie znacznik zostanie umieszczony).

W wersji Android aplikacji OsmAnd dostępne są inne opcje sortowania *znaczników mapy* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Sortuj według* lub *Zaplanuj trasę*).


### Sortuj według atrybutów {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Alternative Markers sorting Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternative Markers sorting Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Możesz sortować *znaczniki* według:

- **Nazwy** (*alfabetycznie*) — Jeśli znaczniki mają opisowe nazwy, może to być przydatny sposób na szybkie znalezienie szukanego znacznika.
- **Odległości** (*najbliżej lub najdalej najpierw*) - Ta opcja posortuje znaczniki według ich odległości od Twojej bieżącej lokalizacji.
- **Daty** (*ostatnio lub dawno temu*) - To posortuje znaczniki według daty ich dodania. Jeśli dodałeś wiele znaczników w czasie, może to być przydatny sposób, aby zobaczyć, które z nich są najnowsze.


### Zmień kolejność za pomocą narzędzia Planuj trasę {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternative Markers sorting Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternative Markers sorting Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Korzystając z funkcji Planuj trasę w narzędziu listy znaczników, możesz sortować *znaczniki* *od drzwi do drzwi*, ustawić je w odwrotnej kolejności lub utworzyć *trasę okrężną*. Jeśli wybierzesz opcję *Nawigacja*, *znaczniki* zostaną użyte jako [punkty pośrednie](../setup/route-navigation.md#intermediate-destinations).


## Przechodzenie znaczników {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pass Marker Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Pass Marker Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pass Marker iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Pass Marker iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

*Znacznik* może zostać oznaczony jako przebyty (*Android*) lub odrzucony (*iOS*).

- Poprzez *[menu kontekstowe mapy](../../map/map-context-menu.md#add--edit-marker)*.
- Gdy zbliżysz się do *znacznika* na odległość mniejszą niż 40 metrów (*Android*) lub 50 metrów (*iOS*), przełącznik w pasku *[widżetów znaczników](../../widgets/markers.md#top-bar-widget)* staje się aktywny.

Po przejściu *znacznika* przenosi się on do folderu [Historia](../../personal/markers.md#history), skąd można go przywrócić w razie potrzeby. Następny znacznik na [liście](#itinerary-list) staje się aktywny. W zależności od Twoich [ustawień](#use-markers-in-navigation), możesz być do niego prowadzony strzałką lub przerywaną linią.


## Powiązane artykuły {#related-articles}

- [Informacje o znacznikach mapy](../../personal/markers.md).
- [Widżet znacznika](../../widgets/markers.md).
__
- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Przygotowanie trasy](./route-navigation.md)
- [Szczegóły trasy](./route-details.md)
- [Nawigacja po śladzie](./gpx-navigation.md)
- [Ustawienia nawigacji](../guidance/navigation-settings.md)
- [Ekran mapy podczas nawigacji](../guidance/map-during-navigation.md)
- [Komunikaty głosowe / Powiadomienia](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ostatnia aktualizacja: czerwiec 2025*