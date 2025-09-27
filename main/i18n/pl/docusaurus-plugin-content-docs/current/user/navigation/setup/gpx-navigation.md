---
source-hash: 7ffc2f81e01f087845308b0e23b9eaeb8284b235849c71743dcd0c92adb43df9
sidebar_position: 2
title:  Nawiguj po śladzie
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

Opcja *Nawigacja po śladzie* (GPX) pozwala na podążanie po predefiniowanej trasie lub śladzie na mapie. Może być to szczególnie przydatne podczas aktywności na świeżym powietrzu, takich jak piesze wędrówki, jazda na rowerze czy jazda terenowa, gdzie zaplanowana trasa poprawia bezpieczeństwo i wydajność. Jeśli podróżujesz w zorganizowanej grupie, ta funkcja pomaga Tobie i każdemu członkowi grupy mieć te same informacje o trasie co pozostali.  

Opcja *Nawigacja po śladzie* może być również używana w życiu codziennym. Możesz użyć wcześniej [zapisanego śladu](../../plugins/trip-recording.md) lub [utworzyć ślad](../../personal/tracks/manage-tracks.md#create-a-track) i udostępnić go rodzinie lub znajomym, zamiast tłumaczyć im trasę. Możesz również używać [tras na mapie OsmAnd](../../../../blog/routes/) do nawigacji. Jak je podświetlić na mapie i co oznaczają ich kolory, opisano w sekcji [Trasy](../../map/vector-maps.md#routes) artykułu *Mapy wektorowe*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ekran nawigacji po śladzie Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ekran nawigacji po śladzie iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Wybierz ślad {#select-the-track}

Przed użyciem opcji *Nawigacja po śladzie*, musisz [wyświetlić ślad na mapie](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd obsługuje ślad jako linię (**Geometria**) i ślad jako trasę (**Trasa**) lub ich kombinację (**OsmAnd** przez [Planowanie trasy](../../plan-route/create-route.md)). Jeśli masz ślad jako kolekcję **Punktów trasy**, możesz użyć [nawigacji po znacznikach](./markers-navigation.md).


- Ślad typu **Geometria** będzie miał domyślnie bardzo podstawową nawigację i nie zapewni dokładnych skrętów, nazw ulic ani pasów ruchu. Aby uzyskać brakujące informacje, należy użyć narzędzia [Dopasuj do dróg](#attach-to-the-roads).

- Ślad typu **Trasa** obliczy trasę między punktami trasy według wybranego profilu. Zasadniczo wszystkie punkty trasy będą traktowane jako punkty pośrednie. Jeśli trasa składa się z > 50 punktów, jest bardzo prawdopodobne, że jest to źle skonfigurowany ślad typu **Geometria**.

- Ślad typu **OsmAnd** składa się zarówno z części geometrycznej, jak i trasowej, i nadaje się do zapewnienia dokładnie takich samych wskazówek, jak domyślna nawigacja. Te ślady są tworzone przez [Planowanie trasy](../../plan-route/create-route.md) lub [wersję internetową](../../web/index.md). Możliwe jest ponowne zapisanie tego śladu jako śladu tylko typu **Geometria** jako [**Uproszczony**](../../plan-route/create-route.md#save-route), aby można go było używać w programach innych firm.


### Rozpocznij nawigację GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Wybierz ślad do nawigacji Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Wybierz ślad do nawigacji Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wybierz ślad do nawigacji iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Wybierz ślad do nawigacji iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Nawigację po śladzie można rozpocząć za pomocą przycisku szybkiej akcji w [menu kontekstowym śladu](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (otwieranym przez wybranie jednego z [podświetlonych śladów](./route-navigation.md#history-of-previous-routes) na mapie lub przez dotknięcie pliku śladu w sekcji [Moje miejsca](../../personal/myplaces.md) w *Menu głównym*) lub z menu nawigacji, które jest otwierane przez dotknięcie:

- [*Przycisk nawigacji*](../../widgets/map-buttons.md#directions) na ekranie mapy.  
- *Sekcja Nawigacja* w *Menu głównym* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- W [*Menu nawigacji*](./route-navigation.md#navigation-menu) przejdź do *<Translate android="true" ids="shared_string_settings,follow_track"/>*.  

### Wybierz segmenty {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Segmenty Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmenty iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Do nawigacji, jeśli wybrany ślad składa się z wielu segmentów lub śladów, można wybrać konkretny segment lub cały plik śladu GPX. Podczas **[importowania](../../personal/tracks/manage-tracks.md#import)** można wybrać, czy zapisać go w jednym pliku, czy w wielu plikach.


### Opcje podążania za śladem {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

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

- **Edytuj** (*ikona ołówka* obok nazwy śladu) — Otwiera ślad w narzędziu [*Zaplanuj trasę*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Wybierz inny plik GPX do nawigacji.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Jeśli to ustawienie jest włączone, kierunek poruszania się po śladzie jest odwrócony.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Konfiguruje [dopasowanie śladu do dróg](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Możesz wybrać, jak nawigować z mojej lokalizacji do śladu:
do *<Translate android="true" ids="start_of_the_track"/>* lub do *<Translate android="true" ids="nearest_point"/>* na śladzie.
- Wybierz **Typ nawigacji** dla pierwszego i ostatniego segmentu: albo zbuduj [*linię prostą*](../routing/straight-line-routing.md), albo użyj [*typu wyznaczania trasy*](../routing/osmand-routing.md#routing-types) z bieżącego profilu.


### Dopasuj do dróg {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Dopasuj do dróg 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dopasuj do dróg 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

Funkcja **Dopasuj do dróg** dopasowuje ślad do najbliższej drogi, zapewniając dokładniejszą nawigację. Dostępna w menu [Podążaj za śladem](#follow-track-options), funkcja ta zapewnia, że trasa będzie przebiegać po odpowiedniej sieci dróg w oparciu o wybrany *profil nawigacji* i **odległość progową**. Poprawia to zarówno [szczegóły trasy](../setup/route-details.md), jak i [instrukcje głosowe](#guidance) podczas nawigacji.

***Jak to działa:***

- OsmAnd dopasowuje każdy punkt śladu do **najbliższej drogi** w ramach ustawionej **odległości progowej** (domyślnie: **50 metrów**).  
- **Odległość progowa** określa maksymalną dopuszczalną odległość między punktem śladu GPS a drogą do dopasowania.
- **Automatyczne ponowne dopasowanie** — Po przełączeniu **profili nawigacji**, OsmAnd automatycznie ponownie dopasowuje ślad do dróg odpowiednich dla nowego profilu.
- W przypadku dużych śladów z wieloma punktami proces dopasowywania może potrwać nieco dłużej. Zobaczysz **wskaźnik postępu** (*pomarańczowa linia stanu*) pokazujący status dopasowywania.
- Po zakończeniu dopasowywania dotknij **Zastosuj**, aby użyć zmodyfikowanego śladu do nawigacji.

### Automatyczne dopasowanie do dróg {#automatic-attachment-to-the-roads}

OsmAnd automatycznie przyciąga trasy do dróg podczas korzystania z narzędzia **Zaplanuj trasę**:

- **Punkty trasy** automatycznie dopasowują się do najbliższej dostępnej drogi (*z wyjątkiem [Wyznaczania trasy w linii prostej](../../navigation/routing/straight-line-routing.md) i [Wyznaczania trasy bezpośrednio do punktu](../../navigation/routing/direct-to-point-routing.md)*).
- Jeśli nie zostaną wykryte żadne drogi (np. w terenie), trasa będzie przebiegać po **segmentach w linii prostej**.
- Możesz **ręcznie dostosować** trasę, przeciągając punkty trasy w inne miejsca.

Domyślnie funkcja **Dopasuj do dróg** uruchamia się **automatycznie** po wybraniu śladu do nawigacji. W razie potrzeby można zmienić to ustawienie. Więcej szczegółów można znaleźć w sekcji [Szczegółowe wskazówki dotyczące śladu](../guidance/navigation-settings.md#detailed-track-guidance) w artykule *Ustawienia nawigacji*.


## Punkty {#points}

### Punkt początkowy / końcowy {#start--finish-point}

Możesz określić punkt początkowy i końcowy trasy inny niż początek/koniec określony w pliku GPX. Wystarczy go zmienić tak samo, jak w przypadku [Nawigacji](../setup/route-navigation.md#select-starting-point).

W [menu Podążaj za śladem](#follow-track-options) możesz wybrać, czy chcesz nawigować z bieżącej lokalizacji do punktu początkowego śladu, czy do najbliższego punktu na śladzie GPX. Możesz również wybrać [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types), który będzie używany dla początkowego i końcowego segmentu trasy.  

### Punkty trasy {#waypoints}

Jeśli ślad ma punkty trasy, możesz użyć opcji [Pokaż na trasie](../guidance/map-during-navigation.md#show-points-along-the-route) i [Wskazówki głosowe](../guidance/voice-navigation.md#voice-settings), aby otrzymywać powiadomienia o Użytecznych Miejscach (POI). Możesz dodawać **Punkty trasy** do istniejącego śladu za pomocą [Menu kontekstowego](../../map/map-context-menu.md#-add--edit-track-waypoint), ślad musi być widoczny na mapie.

### Punkty pośrednie {#intermediate-points}

Podczas przygotowywania lub nawigacji po śladzie GPX nie można dodawać punktów pośrednich, przez które planuje się przejechać w ramach tego śladu. Można jedynie przypisać punkty początkowe i końcowe oprócz śladu lub segmentu, który planuje się śledzić.

## Wskazówki {#guidance}

*Nawigacja po śladzie GPX* zawiera te same [instrukcje głosowe](../guidance/voice-navigation.md) co nawigacja po trasie. Jednak niektóre zakręty lub ronda mogą nie być interpretowane poprawnie, ponieważ w plikach GPX nie ma informacji o skrzyżowaniach dróg, z wyjątkiem plików GPX utworzonych przez OsmAnd. Aby wyeliminować te problemy, należy użyć funkcji [Dopasuj do dróg](#attach-to-the-roads).  

Podczas nawigacji można korzystać z różnych opcji, takich jak powiększanie lub pomniejszanie, przesuwanie mapy lub przełączanie na inny styl mapy. Jeśli zboczysz ze śladu, OsmAnd automatycznie przeliczy trasę, aby sprowadzić Cię z powrotem na ślad. Można również dostosować prędkość śladu i ustawić alerty dźwiękowe o zbliżaniu się do punktów lub odchyleniach od trasy.  


## Powiązane artykuły {#related-articles}

- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Przygotowanie trasy](./route-navigation.md)
- [Szczegóły trasy](./route-details.md)
- [Nawigacja według znaczników](./markers-navigation.md)
- [Ustawienia nawigacji](../guidance/navigation-settings.md)
- [Ekran mapy podczas nawigacji](../guidance/map-during-navigation.md)
- [Komunikaty głosowe / Powiadomienia](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)