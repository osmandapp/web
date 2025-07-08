---
source-hash: f48138cc59c4ee27ce642e063d856f276b2f56ba4cb068db2cb6e337b797c4c1
title: Ślady
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

OsmAnd ma wiele potężnych funkcji do wyświetlania różnych tras na mapie. Trasy mogą być budowane w ramach nawigacji, tworzone za pomocą funkcji Planuj trasę, importowane jako ślady GPX, nagrywane za pomocą wtyczki Nagrywanie podróży lub przeglądane i wybierane z danych OpenStreetMap.


## Rodzaje śladów {#types-of-tracks}

[Ślady (GPX)](#display-tracks-on-the-map) - nagrana lub zaplanowana podróż zapisana w [formacie GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Ten rodzaj trasy może być importowany z zewnętrznego źródła, tworzony w aplikacji lub nagrywany przez użytkownika. GPX może zawierać jeden z 3 różnych typów danych lub wszystkie z nich:

- Ślad jako linia (***Geometria***). Plik zawiera tablicę punktów ```<trkpt>```, każdy punkt ma lokalizację i opcjonalny czas, prędkość, wysokość i inne atrybuty. Te ślady są wyświetlane na mapie jako linie ciągłe.
- Ślad jako trasa (***Trasa***). Plik zawiera tablicę punktów ```<rtept>```, każdy punkt opisany jako punkt pośredni trasy. Zależy to od tego, jak punkty w trasie powinny być połączone, albo jako małe segmenty trasy, albo za pomocą linii prostej. Te ślady są wyświetlane na mapie jako linie przerywane.
- Punkty trasy (***Punkty***). Plik zawiera punkty ```<wpt>``` z atrybutami. Punkty trasy są wyświetlane jako okrągłe punkty na mapie. Możesz je dotknąć, aby uzyskać dodatkowe informacje.

OsmAnd może tworzyć ślady z 1–3 kombinacjami. [Planuj trasę](../../plan-route/create-route.md) tworzy ślad z ***Geometrią*** i ***Trasą***, jeśli zapiszesz go jako ***Uproszczony ślad***, zostanie zachowana tylko ***Geometria***. [Nagrywanie śladu](../../plugins/trip-recording.md#new-track-recording) tworzy tylko ***Geometrię***, ale możesz również dodać do niego ***Punkty*** za pomocą menu kontekstowego.


## Wyświetlanie śladów na mapie {#display-tracks-on-the-map}

Możesz zarządzać widocznością śladów, wybierając, które z nich mają być wyświetlane lub ukrywane z kilku menu: [menu Moje miejsca](#my-places), [menu Konfiguruj mapę](#configure-map) i [menu kontekstowe śladu](#track-context-menu). Ta elastyczność pozwala szybko przełączać się między różnymi śladami, zapewniając, że tylko odpowiednie ślady są widoczne na mapie w danym momencie.

### Konfiguruj mapę {#configure-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Ślady mapy konfiguracji Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png) ![Ślady mapy konfiguracji Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Ślady mapy konfiguracji iOS](@site/static/img/personal/tracks/follow_track_1_ios.png) ![Ślady mapy konfiguracji iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

Opcja *Konfiguruj mapę* umożliwia szybkie zarządzanie wyświetlaniem wszystkich ostatnio wyświetlanych śladów, pozwalając na przełączanie widoczności dla grupy śladów. Sortowanie śladów odbywa się zgodnie z kolejnością skonfigurowaną w zakładce *Moje miejsca → Ślady*. Możesz uzyskać dostęp do [Menu śladu](../../personal/tracks/manage-tracks.md#track-menu) poprzez długie naciśnięcie elementu śladu. Dodatkowo, w tym menu możesz jednocześnie modyfikować wygląd wielu wybranych śladów.

### Moje miejsca {#my-places}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Moje miejsca ze śladami w Androidzie](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → długie naciśnięcie wybranego śladu GPX → Pokaż na mapie*

![Menu kontekstowe śladu w iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

W [Moje miejsca *→* zakładka Ślady](../../personal/tracks/manage-tracks.md#manage-tracks), aby wyświetlić ślad na mapie, należy:

- *Android* - dotknąć *menu z trzema kropkami* w polu z wymaganym śladem.
- *iOS* - długo dotknąć wymaganego śladu na liście.


### Menu kontekstowe śladu {#track-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Przegląd menu kontekstowego śladu Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Przegląd menu kontekstowego śladu iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Po wybraniu śladu na mapie lub otwarciu [menu kontekstowego śladu](./track-context-menu.md) po nagraniu lub zaimportowaniu śladu, możesz kontrolować jego widoczność na mapie. Wystarczy użyć przycisków *Pokaż* lub *Ukryj*, aby wyświetlić lub usunąć ślad z widoku mapy.


## Analizuj ślad na mapie {#analyze-track-on-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *Dotknij śladu → Zakładka Ślad → <Translate android="true" ids="analyze_on_map"/>*

![Analiza menu śladu na mapie Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png) ![Analiza menu śladu na mapie odległość Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Dotknij śladu → Zakładka Ślad → <Translate ios="true" ids="analyze_on_map"/>*

![Analiza menu śladu na mapie](@site/static/img/personal/tracks/track_analyze_ios.png) ![Analiza menu śladu na mapie ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

To narzędzie zapewnia szczegółową analizę danych [śladu](../../map/tracks/track-context-menu.md#options) za pomocą wykresów i map.

- **Dane wykresu (oś Y)** wyświetlają: *Wysokość*, *Nachylenie*, *Prędkość*, [Dane czujnika zewnętrznego](../../plugins/external-sensors.md) oraz kombinacje do dwóch opcji, jeśli są zawarte w danych śladu.
- **Wymiar wykresu (oś X)** przedstawia: *Dystans*, *Czas* i *Pora dnia*.
- **Interakcja dotyku/przesuwania**. Dotknij wykresu, aby wyświetlić informacje o konkretnym punkcie na śladzie. Przesuwanie po wykresie podświetla odpowiednią lokalizację na mapie i wyświetla szczegóły w pasku informacyjnym.
- **Skalowanie**. Użyj [gestu dwoma palcami](../../map/interact-with-map.md#gestures), aby skalować wykres w celu bardziej szczegółowego podglądu.


### Śledź moją lokalizację {#follow-my-location}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Analiza menu śladu na mapie 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Analiza menu śladu na mapie 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Analiza menu śladu na mapie](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png) ![Analiza menu śladu na mapie ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Dotknij przycisku [Moja lokalizacja](../../map/interact-with-map.md#my-location-and-zoom), aby zsynchronizować widok mapy i wykres z Twoją lokalizacją.

- **Skala wykresu** pozostaje taka sama, a **informacje na pasku** są ustalone na 1/4 lewej strony.
- W miarę poruszania się **wykres będzie przesuwał się** od lewej do prawej, wyświetlając informacje przed Twoim śladem.
- Na tym ekranie nie są wyświetlane żadne inne widżety.
- Ta funkcja jest przydatna podczas wędrówek i jazdy na rowerze, gdy poruszasz się po śladzie.


## Powiązane artykuły {#related-articles}

- [Wygląd śladu](./appearance.md)
- [Menu kontekstowe śladu](./track-context-menu.md)
- [Nawigacja po śladzie](../../navigation/setup/gpx-navigation.md)
- [Trasy na mapie](https://docs.osmand.net/blog/routes) artykuł na blogu
- [Konfiguruj mapę](../../map/configure-map-menu.md)
- [Ślady GPX](../../personal/tracks/index.md)
- [Planuj trasę](../../plan-route/index.md)
- [Nagrywanie podróży](../../plugins/trip-recording.md)

> *Ostatnia aktualizacja: listopad 2024*