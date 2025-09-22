---
source-hash: a2c574750d2fad3f5b86fe34399e253d3561dee9bc81b7ec97490f6574b7c609
title:  Ślady
sidebar_position: 2
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
OsmAnd ma wiele zaawansowanych funkcji do wyświetlania różnych tras na mapie. Trasy mogą być budowane w ramach [Nawigacji](../../navigation/index.md), tworzone za pomocą [Planowania trasy](../../plan-route/index.md), importowane jako [ślady GPX](../../personal/tracks/index.md), nagrywane za pomocą wtyczki [Nagrywanie podróży](../../plugins/trip-recording.md) lub przeglądane i wybierane z danych OpenStreetMap.


## Rodzaje śladów {#types-of-tracks}

[Ślady (GPX)](#display-tracks-on-the-map) - zarejestrowana lub zaplanowana podróż zapisana w [formacie GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Tego rodzaju trasa może być zaimportowana z zewnętrznego źródła, utworzona w aplikacji lub nagrana przez Ciebie. Plik GPX może zawierać jeden z 3 różnych typów danych lub wszystkie z nich:

- Ślad jako linia (***Geometria***). Plik zawiera tablicę punktów ```<trkpt>```, z których każdy ma lokalizację oraz opcjonalnie czas, prędkość, wysokość i inne atrybuty. Takie ślady są wyświetlane na mapie jako ciągłe linie.
- Ślad jako trasa (***Trasa***). Plik zawiera tablicę punktów ```<rtept>```, z których każdy jest opisany jako punkt pośredni trasy. Sposób połączenia punktów w trasie zależy od tego, czy mają być one połączone jako małe segmenty trasy, czy za pomocą linii prostej. Takie ślady są wyświetlane na mapie jako linie przerywane.
- Punkty trasy (***Punkty***). Plik zawiera punkty ```<wpt>``` z atrybutami. Punkty trasy są wyświetlane na mapie jako okrągłe punkty. Możesz je dotknąć, aby uzyskać dodatkowe informacje.

OsmAnd może tworzyć ślady z 1–3 kombinacji. [Planowanie trasy](../../plan-route/create-route.md) tworzy ślad z ***Geometrią*** i ***Trasą***, jeśli zapiszesz go jako ***Uproszczony ślad***, zachowana zostanie tylko ***Geometria***. [Nagrywanie śladu](../../plugins/trip-recording.md#new-track-recording) tworzy tylko ***Geometrię***, ale możesz również dodać do niej ***Punkty*** za pomocą menu kontekstowego.


## Wyświetlanie śladów na mapie {#display-tracks-on-the-map}

Możesz zarządzać widocznością śladów, wybierając, które z nich mają być wyświetlane lub ukryte w kilku menu: [menu Moje miejsca](#my-places), [menu Konfiguruj mapę](#configure-map) oraz [menu kontekstowe Śladu](#track-context-menu). Ta elastyczność pozwala na szybkie przełączanie się między różnymi śladami, zapewniając, że na mapie w danym momencie widoczne są tylko te istotne.

### Konfiguruj mapę {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Konfiguracja mapy śladów Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Konfiguracja mapy śladów Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Konfiguracja mapy śladów iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Konfiguracja mapy śladów iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

Opcja *Konfiguruj mapę* umożliwia szybkie zarządzanie wyświetlaniem wszystkich ostatnio wyświetlanych śladów, pozwalając na przełączanie widoczności dla grupy śladów. Sortowanie śladów odbywa się zgodnie z kolejnością skonfigurowaną w zakładce *Moje miejsca → Ślady*. Możesz uzyskać dostęp do [Menu śladu](../../personal/tracks/manage-tracks.md#track-menu), długo dotykając elementu śladu. Dodatkowo w tym menu można jednocześnie modyfikować wygląd wielu zaznaczonych śladów.

### Moje miejsca {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Moje miejsca ze śladami w Androidzie](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → długie dotknięcie wybranego śladu GPX → Pokaż na mapie*

![Menu kontekstowe śladu w iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

W [Moje miejsca *→* zakładka Ślady](../../personal/tracks/manage-tracks.md#manage-tracks), aby wyświetlić ślad na mapie, należy:

- *Android* - dotknąć *menu z trzema kropkami* w polu z wymaganym śladem.
- *iOS* - długo dotknąć wymaganego śladu na liście.


### Menu kontekstowe śladu {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przegląd menu kontekstowego śladu Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Przegląd menu kontekstowego śladu iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Po wybraniu śladu na mapie lub otwarciu [menu kontekstowego śladu](./track-context-menu.md) po nagraniu lub zaimportowaniu śladu, można kontrolować jego widoczność na mapie. Wystarczy użyć przycisków *Pokaż* lub *Ukryj*, aby wyświetlić lub usunąć ślad z widoku mapy.


## Analiza śladu na mapie {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *Dotknij śladu → zakładka Ślad → <Translate android="true" ids="analyze_on_map"/>*  

![Menu śladu analiza na mapie Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Menu śladu analiza na mapie odległość Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Dotknij śladu → zakładka Ślad → <Translate ios="true" ids="analyze_on_map"/>*  

![Menu śladu analiza na mapie](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Menu śladu analiza na mapie ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

To narzędzie zapewnia szczegółową analizę danych [śladu](../../map/tracks/track-context-menu.md#options) za pomocą wykresów i map.

- **Dane wykresu (oś Y)** wyświetlają: *Wysokość*, *Nachylenie*, *Prędkość*, [*Dane z czujników zewnętrznych*](../../plugins/external-sensors.md) oraz kombinacje do dwóch opcji, jeśli są zawarte w danych śladu.
- **Wymiar wykresu (oś X)** reprezentuje: *Odległość*, *Czas* i *Pora dnia*.
- **Interakcja przez dotknięcie/przesunięcie**. Dotknij wykresu, aby wyświetlić informacje o konkretnym punkcie na śladzie. Przesuwanie po wykresie podświetla odpowiednią lokalizację na mapie i pokazuje szczegóły na pasku informacyjnym.
- **Skalowanie**. Użyj [gestu dwoma palcami](../../map/interact-with-map.md#gestures), aby skalować wykres w celu bardziej szczegółowego widoku.


### Podążaj za moją lokalizacją {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu śladu analiza na mapie 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Menu śladu analiza na mapie 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu śladu analiza na mapie](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Menu śladu analiza na mapie ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Dotknij przycisku [Moja lokalizacja](../../map/interact-with-map.md#my-location-and-zoom), aby zsynchronizować widok mapy i wykres z Twoją lokalizacją.

- **Skala wykresu** pozostaje taka sama, a **pasek informacyjny** jest ustalony na 1/4 po lewej stronie.
- W miarę poruszania się **wykres będzie się przesuwał** od lewej do prawej, wyświetlając informacje przed Tobą na śladzie.
- Na tym ekranie nie są wyświetlane żadne inne widżety.
- Ta funkcja jest przydatna podczas pieszych wędrówek i jazdy na rowerze podczas nawigacji po śladzie.  


## Powiązane artykuły {#related-articles}

- [Wygląd śladu](./appearance.md)
- [Menu kontekstowe śladu](./track-context-menu.md)
- [Nawiguj po śladzie](../../navigation/setup/gpx-navigation.md)
- [Artykuł na blogu: Trasy na mapie](https://docs.osmand.net/blog/routes)
- [Konfiguruj mapę](../../map/configure-map-menu.md)  
- [Ślady GPX](../../personal/tracks/index.md)  
- [Planowanie trasy](../../plan-route/index.md)  
- [Nagrywanie podróży](../../plugins/trip-recording.md)