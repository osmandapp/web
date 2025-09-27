---
source-hash: 18d9873a363946b476ae9c98d895b7afc2dcac45571f524bfe437e0a7bba8153
sidebar_position: 3
title:  Nawigacja według znaczników
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

[Znaczniki mapy](../../personal/markers.md) to punkty na mapie oznaczone flagami. Mogą być używane do różnych celów, takich jak wskazanie lokalizacji, którą chcesz odwiedzić, interesującego miejsca, które chcesz zapamiętać, lub do stworzenia niestandardowej trasy.  

Mogą być szczególnie pomocne dla turystów pieszych, rowerzystów lub każdego, kto eksploruje nowy obszar i chce zaznaczyć na mapie interesujące lokalizacje lub punkty odniesienia. Główna różnica w stosunku do [punktów ulubionych](../../personal/favorites.md) polega na tym, że znaczniki tworzy się szybciej, ponieważ nie wymagają one nazwy.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Znacznik nawigacyjny Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Znacznik nawigacyjny iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Używanie znaczników w nawigacji {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![Różnica w nawigacji po znacznikach Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Różnica w nawigacji po znacznikach Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Różnica w nawigacji po znacznikach iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Różnica w nawigacji po znacznikach iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Znaczniki mapy* mogą służyć jako [cele podróży](./route-navigation#set-destinations) podczas tworzenia trasy. Są szczególnie wygodne, gdy trzeba wyznaczyć trasę z punktami pośrednimi.

Jednak *znaczniki mapy* zapewniają również różne funkcje, takie jak [widżety](../../widgets/markers.md), kierunek ruchu, linie na mapie, dzięki czemu można używać tych narzędzi do nawigacji bez tworzenia linii trasy i wchodzenia w pełną nawigację z przewodnikiem głosowym.

W przypadku, gdy potrzebujesz prostej nawigacji od punktu do punktu wyświetlanej jako linie proste, możesz zbudować i posortować ***Listę planu podróży*** składającą się ze znaczników jako punktów pośrednich i użyć widżetów do prostej nawigacji.


### Zalecenia {#recommendations}

Oto proste kroki z zaleceniami, jak *nawigować według znaczników*:

1. Utwórz znaczniki. Znajdź żądany obiekt (obiekty) na mapie, dotknij go i wybierz *[przycisk Znacznik](../../personal/markers.md#add--edit-markers)* w *[menu kontekstowym mapy](../../map/map-context-menu.md#add--edit-marker)*. Możesz także tworzyć znaczniki z [ulubionych](#add-group-of-favorite) lub [tras GPX](#add-group-of-track-waypoints).
2. [*Sortuj znaczniki*](#sort-markers) w preferowany sposób, w jaki chcesz je mijać
3. Dostosuj *widok znaczników mapy*, jeśli chcesz używać znaczników bez uruchamiania nawigacji. Włącz opcje **Strzałki na mapie** i **Linia kierunku** w sekcji *[Wygląd](../../personal/markers.md#appearance-on-the-map)* w *[menu znaczników mapy](../../personal/markers.md#actions)*.
4. Dodaj *[widżety znaczników](../../personal/markers.md#markers)* w *[menu Konfiguruj ekran](../../widgets/configure-screen.md)* (opcjonalnie).
5. [*Oznacz jako minięty*](#pass-markers) już odwiedzone znaczniki lub przywróć je z historii, jeśli chcesz je ponownie minąć.

:::note
Gdy opcje **Strzałki na mapie** i **Linia kierunku** są włączone w sekcji *Wygląd* w [menu znaczników mapy](../../personal/markers.md#appearance-on-the-map), na mapie pojawi się strzałka lub linia przerywana. Strzałka pokazuje kierunek do aktywnego znacznika, gdy znajduje się on poza bieżącym ekranem mapy. Linia kierunku jest rysowana, gdy zarówno Twoja geolokalizacja, jak i znacznik znajdują się na tym samym ekranie.  
:::


## Lista planu podróży {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Lista znaczników Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista znaczników iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


Lista planu podróży reprezentuje uporządkowaną listę *możliwych do minięcia* znaczników, które są widoczne na mapie. Możesz dodawać i usuwać punkty pojedynczo lub robić to wsadowo, używając wcześniej przygotowanego [pliku GPX](#add-group-of-track-waypoints) lub [grupy ulubionych](#add-group-of-favorite). W przypadku lokalnych zawodów lub przygód przydatne może być utworzenie listy punktów na podstawie współrzędnych za pomocą [narzędzia do wprowadzania współrzędnych](../../plan-route/coordinate-input.md).


### Dodawanie pojedynczych znaczników {#add-single-markers}

*Znaczniki* można dodawać lub usuwać z mapy, dotykając ekranu w wybranym miejscu. Następnie należy postępować zgodnie z instrukcjami z artykułu *[menu kontekstowe mapy](../../map/map-context-menu.md#add--edit-marker)*.  


### Dodawanie grupy ulubionych {#add-group-of-favorite}

<InfoAndroidOnly />

![Ulubione do znaczników 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Ulubione do znaczników 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Możesz tworzyć *znaczniki mapy* z *[ulubionych](../../personal/favorites.md)* używając:

- *[Menu grup ulubionych](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Moje ulubione)*.
- Ikona &#128681; w menu na stronie Ulubione *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Moje ulubione→&#128681;)*.
- Opcja **'+'** (dodaj) w *[zakładce Grupy](../../personal/markers.md#marker-groups)* w menu Znaczniki mapy *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.  


### Dodawanie grupy punktów trasy {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX do znaczników 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Trasy GPX z punktami trasy mogą być używane jako *znaczniki mapy* i szybko wyłączane:

- Użyj opcji **'+'** (dodaj) w *[zakładce Grupy](../../personal/markers.md#marker-groups)* w menu Znaczniki mapy *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Włącz przełącznik obok trasy w *[zakładce Grupy](../../personal/markers.md#marker-groups)* w menu Znaczniki mapy *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Do *listy znaczników mapy* można dodawać tylko trasy z punktami trasy. Trasa, którą zamierzasz dodać, powinna być również widoczna (aktywna) na mapie.
:::

![GPX do znaczników 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX do znaczników 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Możesz także tworzyć *znaczniki* z trasy z punktami trasy, korzystając z *[menu kontekstowego trasy](../../map/tracks/track-context-menu.md#points--waypoints)*: *Dotknij widocznej trasy na mapie → w menu kontekstowym trasy wybierz Punkty → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Sortowanie znaczników {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Sortowanie znaczników na liście Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sortowanie znaczników na liście iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Naciskając lewy róg (*Android*) lub prawy róg (*iOS*) zakładki *Znacznik mapy* na *[liście znaczników mapy](../../personal/markers.md#itinerary-list)* i przesuwając ją w górę lub w dół, można zmienić jej kolejność na *liście nawigacyjnej* (podczas przesuwania karty znacznika zobaczysz linię wskazującą, gdzie znacznik zostanie umieszczony).

W wersji aplikacji OsmAnd na Androida dostępne są inne opcje sortowania *znaczników mapy* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Sortuj według* lub *Zaplanuj trasę*).


### Sortowanie według atrybutów {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Alternatywne sortowanie znaczników Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternatywne sortowanie znaczników Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Możesz sortować *znaczniki* według:

- **Nazwy** (*alfabetycznie*) — jeśli znaczniki mają opisowe nazwy, może to być przydatny sposób na szybkie znalezienie szukanego znacznika.
- **Odległości** (*najpierw najbliższe lub najdalsze*) - ta opcja posortuje znaczniki według odległości od bieżącej lokalizacji.
- **Daty** (*ostatnio lub dawno temu*) - ta opcja posortuje znaczniki według daty ich dodania. Jeśli z biegiem czasu dodałeś wiele znaczników, może to być przydatny sposób, aby zobaczyć, które z nich są najnowsze.


### Zmiana kolejności za pomocą narzędzia Plan trasy {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternatywne sortowanie znaczników Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternatywne sortowanie znaczników Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Korzystając z funkcji Plan trasy na liście znaczników, można sortować *znaczniki* *od drzwi do drzwi*, umieszczać je w odwrotnej kolejności lub tworzyć *trasę okrężną*. Jeśli dotkniesz opcji *Nawigacja*, *znaczniki* zostaną użyte jako [pośrednie cele podróży](../setup/route-navigation.md#intermediate-destinations).


## Mijanie znaczników {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Mijanie znacznika Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Mijanie znacznika Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mijanie znacznika iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Mijanie znacznika iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

*Znacznik* można oznaczyć jako minięty (*Android*) lub odrzucony (*iOS*).

- Poprzez *[menu kontekstowe mapy](../../map/map-context-menu.md#add--edit-marker)*.  
- Gdy zbliżysz się do *znacznika* na odległość mniejszą niż 40 metrów (*Android*) lub 50 metrów (*iOS*), przełącznik na pasku *[widżetów znaczników](../../widgets/markers.md#top-bar-widget)* staje się aktywny.  

Po minięciu *znacznika* jest on przenoszony do folderu [Historia](../../personal/markers.md#history), skąd w razie potrzeby można go przywrócić. Następny znacznik na [liście](#itinerary-list) staje się aktywny. W zależności od [ustawień](#use-markers-in-navigation), możesz być do niego prowadzony za pomocą strzałki lub linii przerywanej.


## Powiązane artykuły {#related-articles}

- [O znacznikach mapy](../../personal/markers.md).
- [Widżet znaczników](../../widgets/markers.md).  
__
- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Przygotowanie trasy](./route-navigation.md)
- [Szczegóły trasy](./route-details.md)
- [Nawigacja po trasie GPX](./gpx-navigation.md)
- [Ustawienia nawigacji](../guidance/navigation-settings.md)
- [Ekran mapy podczas nawigacji](../guidance/map-during-navigation.md)
- [Komunikaty głosowe / Powiadomienia](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)