---
source-hash: 5b1f516001588d13044bc97b434ef0d12f0f32e20295902b3d61ccfb9d49d0f5
sidebar_position: 2
title: Nawigacja po śladzie
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

Opcja *Nawigacja po śladzie* (GPX) pozwala podążać po wcześniej zdefiniowanej trasie lub śladzie na mapie. Może to być szczególnie przydatne podczas aktywności na świeżym powietrzu, takich jak wędrówki, jazda na rowerze czy jazda terenowa, gdzie zaplanowana trasa poprawia bezpieczeństwo i efektywność. Jeśli podróżujesz w zorganizowanej grupie, ta funkcja pomaga Tobie i każdemu członkowi grupy mieć te same informacje o trasie, co inni.

Opcja *Nawigacja po śladzie* może być również używana w życiu codziennym. Możesz użyć wcześniej [nagranego śladu](../../plugins/trip-recording.md) lub [utworzyć ślad](../../personal/tracks/manage-tracks.md#create-a-track) i udostępnić go rodzinie lub znajomym, zamiast wyjaśniać im trasę. Możesz również użyć [tras na mapie OsmAnd](../../../../blog/routes/) do nawigacji. Jak je wyróżnić na mapie i co oznaczają ich kolory, opisano w sekcji [Trasy](../../map/vector-maps.md#routes) artykułu *Mapy wektorowe*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ekran nawigacji po śladzie Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ekran nawigacji po śladzie iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Wybierz ślad {#select-the-track}

Przed użyciem opcji *Nawigacja po śladzie* musisz [wyświetlić ślad na mapie](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd obsługuje ślad jako linię (**Geometria**) i ślad jako trasę (**Trasa**) lub ich kombinację (**OsmAnd** przez [Planowanie trasy](../../plan-route/create-route.md)). Jeśli masz ślad jako kolekcję **Punktów**, możesz użyć [Nawigacji po znacznikach](./markers-navigation.md).


- Ślad **Geometrii** będzie domyślnie miał bardzo podstawową nawigację i nie zapewni dokładnych zakrętów, nazw ulic i pasów ruchu. Aby uzyskać brakujące informacje, należy użyć narzędzia [Dołącz do dróg](#attach-to-the-roads).

- Ślad **Trasy** obliczy trasę między punktami trasy według wybranego profilu. Zasadniczo wszystkie punkty trasy będą traktowane jako punkty pośrednie. Jeśli trasa składa się z ponad 50 punktów, bardzo prawdopodobne jest, że jest to źle skonfigurowany ślad **Geometrii**.

- Ślad **OsmAnd** składa się zarówno z części geometrycznej, jak i trasowej, i nadaje się do zapewnienia dokładnie takich samych wskazówek, jak nawigacja domyślna. Te ślady są tworzone przez [Planowanie trasy](../../plan-route/create-route.md) lub [Wersję internetową](../../web/index.md). Możliwe jest ponowne zapisanie tego śladu do śladu tylko **Geometrii** jako [**Uproszczony**](../../plan-route/create-route.md#save-route) do użycia w programach innych firm.


### Rozpocznij nawigację GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Wybierz ślad do nawigacji Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Wybierz ślad do nawigacji Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wybierz ślad do nawigacji iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Wybierz ślad do nawigacji iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Nawigację po śladzie można rozpocząć za pomocą przycisku szybkiej akcji w [menu kontekstowym śladu](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (otwieranego poprzez wybranie jednego z [podświetlonych śladów](./route-navigation.md#history-of-previous-routes) na mapie lub poprzez dotknięcie pliku śladu w sekcji [Moje miejsca](../../personal/myplaces.md) w *Menu głównym*) lub z menu nawigacji, które otwiera się poprzez dotknięcie:

- [*Przycisku nawigacji*](../../widgets/map-buttons.md#directions) na ekranie mapy.
- *Sekcji nawigacji* w *Menu głównym* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- W [*menu nawigacji*](./route-navigation.md#navigation-menu) przejdź do *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### Wybierz segmenty {#choose-segments}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Segmenty Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmenty iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

W przypadku nawigacji, jeśli wybrany ślad składa się z wielu segmentów lub śladów, możesz wybrać konkretny segment lub cały plik śladu GPX. Podczas **[importowania](../../personal/tracks/manage-tracks.md#import)** możesz wybrać, czy zapisać go w jednym pliku, czy w wielu plikach.


### Opcje śledzenia {#follow-track-options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Ekran nawigacji po śladzie Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Ekran nawigacji po śladzie iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Edytuj** (*ikona ołówka* obok nazwy śladu) — Otwiera ślad w narzędziu [*Planowanie trasy*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Wybierz inny plik GPX do nawigacji.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Jeśli to ustawienie jest włączone, kierunek ruchu wzdłuż śladu jest odwrócony.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Konfiguruje [dołączanie śladu do dróg](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Możesz wybrać sposób nawigacji z mojej lokalizacji do śladu:
do *<Translate android="true" ids="start_of_the_track"/>* lub do *<Translate android="true" ids="nearest_point"/>* na śladzie.
- Wybierz **Typ nawigacji** dla pierwszego i ostatniego segmentu: zbuduj [*linię prostą*](../routing/straight-line-routing.md) lub użyj [*typu routingu*](../routing/osmand-routing.md#routing-types) z bieżącego profilu.


### Dołącz do dróg {#attach-to-the-roads}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Dołącz do dróg 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dołącz do dróg 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

Funkcja **Dołącz do dróg** dopasowuje Twój ślad do najbliższej drogi, zapewniając dokładniejszą nawigację. Dostępna w menu [Śledź trasę](#follow-track-options), funkcja ta zapewnia, że Twoja trasa podąża za odpowiednią siecią dróg w oparciu o wybrany *profil nawigacji* i **odległość progową**. Zwiększa to zarówno [szczegóły trasy](../setup/route-details.md), jak i [instrukcje głosowe](#guidance) podczas nawigacji.

***Jak to działa:***

- OsmAnd dopasowuje każdy punkt śladu do **najbliższej drogi** w ramach ustawionej **odległości progowej** (domyślnie: **50 metrów**).
- **Odległość progowa** definiuje maksymalną dopuszczalną odległość między punktem śladu GPS a drogą dla dołączenia.
- **Automatyczne ponowne dołączanie** — Podczas przełączania **profili nawigacji**, OsmAnd automatycznie ponownie dołącza ślad do dróg, które są odpowiednie dla nowego profilu.
- W przypadku dużych śladów z wieloma punktami, proces dołączania może potrwać nieco dłużej. Zobaczysz **wskaźnik postępu** (*pomarańczowa linia statusu*) pokazujący status dołączania.
- Po zakończeniu dołączania dotknij **Zastosuj**, aby użyć zmodyfikowanego śladu do nawigacji.

#### Automatyczne dołączanie do dróg {#automatic-attachment-to-the-roads}

OsmAnd automatycznie dopasowuje trasy do dróg podczas korzystania z narzędzia **Planuj trasę**:

- **Punkty trasy** automatycznie dopasowują się do najbliższej dostępnej drogi (*z wyjątkiem [Routing po linii prostej](../../navigation/routing/straight-line-routing.md) i [Routing bezpośrednio do punktu](../../navigation/routing/direct-to-point-routing.md)*).
- Jeśli nie wykryto żadnych dróg (np. w środowiskach terenowych), trasa będzie podążać **segmentami linii prostych**.
- Możesz **ręcznie dostosować** trasę, przeciągając punkty trasy do różnych lokalizacji.

Domyślnie funkcja **Dołącz do dróg** działa **automatycznie** po wybraniu śladu do nawigacji. Możesz zmienić to ustawienie w zależności od potrzeb. Aby uzyskać więcej szczegółów, zapoznaj się z [Szczegółowymi wskazówkami dotyczącymi śladu](../guidance/navigation-settings.md#detailed-track-guidance) w artykule *Ustawienia nawigacji*.


## Punkty {#points}

### Punkt początkowy / końcowy {#start--finish-point}

Możesz określić punkt początkowy i końcowy dla trasy inny niż początek/koniec określony w pliku GPX. Wystarczy zmienić go tak samo, jak w przypadku [Nawigacji](../setup/route-navigation.md#select-starting-point).

W [menu Śledź trasę](#follow-track-options) możesz wybrać, czy chcesz nawigować z bieżącej lokalizacji do punktu początkowego śladu, czy do najbliższego punktu na śladzie GPX. Możesz również wybrać [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types), który zostanie użyty dla początkowego i końcowego segmentu Twojej trasy.

### Punkty trasy {#waypoints}

Jeśli ślad ma punkty trasy, możesz użyć [Pokaż wzdłuż trasy](../guidance/map-during-navigation.md#show-points-along-the-route) i [Wskazówki głosowe](../guidance/voice-navigation.md#voice-settings), aby otrzymywać powiadomienia o punktach zainteresowania. Możesz dodać **Punkty trasy** do istniejącego śladu za pomocą [Menu kontekstowego](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint), ślad musi być widoczny na mapie.

### Punkty pośrednie {#intermediate-points}

Podczas przygotowywania lub nawigowania po śladzie GPX nie można dodawać pośrednich miejsc, przez które planujesz przejechać w ramach tego śladu. Możesz jedynie przypisać punkty początkowy i końcowy oprócz śladu lub segmentu, który planujesz śledzić.

## Wskazówki {#guidance}

*Nawigacja po śladzie GPX* zawiera te same [instrukcje głosowe](../guidance/voice-navigation.md), co nawigacja po trasie. Jednak niektóre zakręty lub ronda mogą nie być poprawnie interpretowane, ponieważ w plikach GPX nie ma informacji o skrzyżowaniach dróg, z wyjątkiem plików GPX utworzonych przez OsmAnd. Aby wyeliminować te problemy, należy użyć funkcji [Dołącz do dróg](#attach-to-the-roads).

Podczas nawigacji możesz korzystać z różnych opcji, takich jak powiększanie lub pomniejszanie, przesuwanie mapy lub przełączanie na inny styl mapy. Jeśli zboczysz ze śladu, OsmAnd automatycznie przeliczy trasę, aby sprowadzić Cię z powrotem na właściwą drogę. Możesz również dostosować prędkość śladu i ustawić alarmy dźwiękowe dla zbliżających się punktów lub odchyleń od trasy.


## Powiązane artykuły {#related-articles}

- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Przygotowanie trasy](./route-navigation.md)
- [Szczegóły trasy](./route-details.md)
- [Nawigacja po znacznikach](./markers-navigation.md)
- [Ustawienia nawigacji](../guidance/navigation-settings.md)
- [Ekran mapy podczas nawigacji](../guidance/map-during-navigation.md)
- [Komunikaty głosowe / Powiadomienia](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ostatnia aktualizacja: kwiecień 2025*