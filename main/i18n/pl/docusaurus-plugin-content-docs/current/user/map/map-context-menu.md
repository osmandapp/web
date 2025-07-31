---
source-hash: c406b4c0fcaa397722ffd39164023525d4248abb42fb6a6add45bac6f360f5b8
sidebar_position: 3
title: Menu kontekstowe mapy
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

Menu kontekstowe mapy dostarcza informacji o wybranym obiekcie na mapie. Możesz go również użyć do utworzenia trasy do wybranej lokalizacji. Aby otworzyć menu kontekstowe, najpierw znajdź wymaganą lokalizację na mapie, a następnie wybierz obiekt krótkim dotknięciem lub długim dotknięciem, wybierając dowolny precyzyjny punkt na mapie.


### Wybierz obiekt (pojedyncze dotknięcie) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu kontekstowe Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu kontekstowe iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

**Menu kontekstowe** pojawia się po **jednokrotnym dotknięciu** zaznaczonego obiektu na mapie. To menu kontekstowe wyświetla podstawowe informacje o wybranym obiekcie, w tym jego *nazwę, ikonę* (jak przedstawiono na mapie), *adres, odległość* i *kierunek* od bieżącej pozycji.

Możesz wybrać różne typy obiektów mapy, takie jak *POI*, *ulubione*, *przystanki transportu publicznego*, *znaczniki*, *szczyty górskie* lub inne *obiekty mapy*.

:::note
Wybrane obiekty mapy odpowiadają [**węzłom**](https://wiki.openstreetmap.org/wiki/Node) lub [**drogom**](https://wiki.openstreetmap.org/wiki/Way) OpenStreetMap.
:::

> *Wysokość szczytów górskich jest wyświetlana w metrach lub stopach, w zależności od [jednostek długości](../personal/profiles.md#units--formats) wybranych w ustawieniach profilu.*


### Wybierz dowolny punkt (długie dotknięcie) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu kontekstowe długie dotknięcie Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu kontekstowe długie dotknięcie iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Po **długim dotknięciu** dowolnego miejsca na mapie pojawia się **menu kontekstowe**, zawierające informacje o wybranej lokalizacji. Obejmuje to adres, odległość i kierunek od bieżącej pozycji.

> **UWAGA**. *Długie dotknięcie **numeru budynku** podświetla jego zarys i otwiera menu kontekstowe mapy.*


### Wybierz trasę {#select-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu kontekstowe ścieżki Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ekran statystyk ścieżki iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Dotknięcie [ścieżki GPX](../map/tracks/index.md) na mapie otwiera [menu kontekstowe ścieżki](../map/tracks/track-context-menu.md), gdzie można uzyskać dostęp do dodatkowych opcji związanych ze ścieżką.


### Ukryj menu kontekstowe {#hide-context-menu}

Aby zamknąć **menu kontekstowe**:

- Dotknij dowolnego *pustego obszaru* na mapie, aby uniknąć ponownego otwarcia menu.
- Przeciągnij menu *w dół* od góry.


## Szczegóły {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu kontekstowe Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu kontekstowe iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Aby uzyskać bardziej szczegółowe informacje o obiekcie, dotknij przycisku **Szczegóły** w menu kontekstowym lub przesuń panel w górę, aby go rozwinąć.


### Informacje o obiekcie {#object-info}

Panel **Informacje o obiekcie** zawiera dodatkowe szczegóły dotyczące wybranego obiektu. Możesz dotknąć dowolnego wpisu, aby skopiować informacje do schowka.

Dostępne szczegóły obejmują:

- [Alternatywne nazwy](#alternative-names)
- [Współrzędne](../map/map-context-menu.md#coordinates)
- [Pobliskie POI / Wikipedia](../map/map-context-menu.md#nearby-pois--wikipedia-nearby-pois--wikipedia)
- [Trasy transportu publicznego](../map/map-context-menu.md#public-transport-routes) (dla przystanków transportu)
- [Ulubione / Punkty śladu z tej samej grupy](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [Link OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)
- [Obraz / opis artykułu](../map/map-context-menu.md#article-description-article-description)
- [Zdjęcia online](../map/map-context-menu.md#online-photos)

Dodatkowo panel może zawierać [Szczegóły OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features), takie jak:

- [Strona internetowa](https://wiki.openstreetmap.org/wiki/Key:website)
- [Numer telefonu](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Godziny pracy](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Opłata](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Dostępność](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Szerokość](https://wiki.openstreetmap.org/wiki/Key:width) / [Wysokość](https://wiki.openstreetmap.org/wiki/Key:height)


### Alternatywne nazwy {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Alternatywne nazwy Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Alternatywne nazwy Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Alternatywne nazwy Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Alternatywne nazwy Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd wyświetla **dodatkowe nazwy POI** w *menu kontekstowym mapy*, nadając priorytet nazwie w *języku wyświetlania* lub preferowanej liście języków systemu. Jeśli dostępnych jest wiele tłumaczeń, są one grupowane w skategoryzowane tagi, takie jak *nazwa, marka, operator* lub *pobliskie POI*.

Funkcje wyświetlania alternatywnych nazw:

- Dodatkowe tłumaczenia są dostępne poprzez *listę rozwijaną*.

- Nazwy są kategoryzowane w różne grupy, takie jak *lista nazw w innych językach*, *regionalne*, *lokalne*, *krajowe*, *międzynarodowe*, *krótkie*, *stare*, *oficjalne* i *alternatywne* nazwy.

- Inne kategorie obejmują *tłumaczenie specyficzne dla regionu* lub *ustawienia domyślne*.

- Jeśli konkretne tłumaczenie jest *niedostępne*, OsmAnd domyślnie używa nazwy **lokalnej**, aby zapewnić dokładność i spójność w regionach wielojęzycznych.


### Informacje o wielokącie {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Informacje o wielokącie Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informacje o wielokącie Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

Funkcja **Informacje o wielokącie** dostarcza szczegółowych danych o pobliskich **wielokątach** wyświetlanych na mapie. Obejmuje to cechy geograficzne, granice administracyjne i inne obszary mapowane.

**W sekcji**:

- Wyświetla *listę otaczających wielokątów*, posortowanych *od najmniejszego do największego* na podstawie rozmiaru obszaru.

- Każdy wpis pokazuje *typ i nazwę wielokąta*, co pozwala na łatwą identyfikację regionów i granic.

**Dodatkowe szczegóły**:

- Po wybraniu punktu na mapie lub POI, panel **informacji o wielokącie** wyświetla listę wszystkich wielokątów, które zawierają wybraną lokalizację.

- Wpisy na liście obejmują **podziały administracyjne, obszary użytkowania gruntów, cechy naturalne i inne skategoryzowane regiony**.

- Panel umożliwia użytkownikom **kopiowanie nazwy i szczegółów wielokąta** do celów referencyjnych.

- Aby wyświetlić te informacje, przejdź do *Menu kontekstowego mapy → Szczegóły → Wewnątrz*.

Ta funkcja pomaga zrozumieć *bieżącą lokalizację* w odniesieniu do mapowanych podziałów administracyjnych, obszarów naturalnych lub innych ważnych cech geograficznych.


### Współrzędne {#coordinates}

|Format współrzędnych| |
|:------|:------|
| <ul><li>DDD.DDDDD (Zwykłe stopnie dziesiętne)</li><li>DDD.DDDDD (N/S, E/W przecinek)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[Standard UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Szwajcarska siatka CH1903 i CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[Link do OsmAnd Web](https://osmand.net/map)</li><li>[Link do OpenStreetMap Web](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Współrzędne](@site/static/img/map/map_context_menu_Coordinates.png) |

W menu kontekstowym można znaleźć [współrzędne geograficzne](../search/search-coordinates.md#coordinate-format) punktu w różnych formatach, a także udostępniane linki OsmAnd i [OpenStreetMap](../map/map-context-menu.md#openstreetmap-link) (ostatnia opcja jest dostępna tylko po włączeniu [wtyczki edycji OpenStreetMap](../plugins/osm-editing.md)). Jeśli rozwiniesz sekcję współrzędnych i długo dotkniesz dowolnej linii z listy, jej wartości zostaną automatycznie skopiowane do schowka (**Android**) lub opcja *Kopiuj* stanie się dostępna w wyskakującym komunikacie (**iOS**).

Link OsmAnd Web może być automatycznie rozpoznany przez OsmAnd (przykład: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Zarówno linki OsmAnd, jak i [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) są otwierane na odpowiednich stronach z pinezką wskazującą interesujące miejsce.


### Pobliskie POI / Wikipedia {#nearby-pois--wikipedia}

![Pobliskie artykuły Wikipedii](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Pobliskie artykuły Wikipedii](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Te sekcje wyświetlają pobliskie [artykuły Wikipedii](../plugins/wikipedia.md) lub [Punkty zainteresowania](../map/point-layers-on-map.md#points-of-interest-pois) z *<Translate android="true" ids="shared_string_show_on_map"/>* i *<Translate android="true" ids="search_more"/>*, aby wyświetlić i [wyszukać](../search/search-poi.md) wszystkie inne POI i artykuły Wikipedii.

Dotknięcie *Pobliskie POI / artykuły Wikipedii* otwiera listę punktów (POI lub Wikipedia). Dotknięcie jednego z tych punktów z listy punktów przenosi mapę do tego punktu (POI lub Wikipedia) z otwarciem menu kontekstowego mapy punktu.

> **UWAGA**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) pojawi się tylko wtedy, gdy wcześniej pobrano specjalne mapy z [artykułami Wikipedii dla tego obszaru](../plugins/wikipedia.olugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages)*.


### Trasy transportu publicznego {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Trasy transportu publicznego Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasy transportu publicznego iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Wyświetlono informacje o trasach transportu publicznego dla wybranego przystanku. Informacje o menu kontekstowym transportu publicznego i działaniach z nim związanych, przeczytaj w [artykule](../map/public-transport.md#transport-routes-context-menu).


### Ulubione / Punkty śladu z grupy {#favorites--track-points-from-the-group}

![Lista ulubionych](@site/static/img/map/favorite_list_android.png) ![Pełna lista ulubionych](@site/static/img/map/favorite_list_full_android.png)

Jest to lista wszystkich punktów w jednej grupie dla ulubionego lub punktu trasy. Po dotknięciu rozwija się cała lista punktów jednej grupy, po dotknięciu punktu z listy mapa przenosi się do wybranego punktu.


### Obiekt liniowy {#linear-object}

![Lista ulubionych](@site/static/img/map/linear_object_andr.png)

Dla **obiektów liniowych**, takich jak *bariery, schody, bramy, ławki, pochylnie, jazy, słupki lub przepusty*, menu kontekstowe wyświetla dodatkowe szczegóły. Obejmują one typ POI i związany z nim adres lub typ obiektu, jeśli nie przypisano nazwy.


### Obszar wspinaczkowy i szczegóły skalne {#climbing-area-and-crag-details}

![Lista ulubionych](@site/static/img/map/climbing_andr.png)

Po wybraniu [obszaru wspinaczkowego lub skały](../map/routes.md#climbing-routes), OsmAnd dostarcza szczegółowe podsumowanie miejsca wspinaczki, w tym: nazwę i lokalizację, ocenę trudności wspinaczki (UIAA, francuska, YDS itp.), rodzaj skały, wysokość i długość trasy, jakość wspinaczki i warunki powierzchniowe.


### Trasy narciarskie, trasy MTB i szlaki motocyklowe {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![Trasy narciarskie i MTB](@site/static/img/map/ski_mtb.png) ![Trasy narciarskie i MTB](@site/static/img/map/ski_mtb_2.png)

Możesz dotknąć elementów mapy, takich jak **stoki narciarskie**, **trasy rowerów górskich (MTB)** i **szlaki motocyklowe**, aby otworzyć ich menu kontekstowe ze szczegółowymi informacjami. Dostępne informacje obejmują: nazwę trasy lub stoku (jeśli dostępne w danych OSM), ID obiektu OSM lub ID relacji, poziom trudności, długość szlaku, typ terenu i inne.

**Obsługiwane tagi:** `piste:type=*` (stoki narciarskie), `route=mtb`, `route=atv` lub `route=dirt_bike` (szlaki motocyklowe terenowe)

:::note
Użyj stylów mapy [Zima i narty](../map/vector-maps.md#winter-and-ski) lub [Offroad](../map/vector-maps.md#offroad) dla lepszej widoczności.
:::


### Opis artykułu {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Lista opisów](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Lista opisów](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Ta część zawiera fragment opisu z [artykułu Wikipedii](../plugins/wikipedia.md), [Ulubionych](../personal/favorites.md) lub opisu punktu trasy, po dotknięciu można otworzyć pełny opis.


### Link OpenStreetMap {#openstreetmap-link}

![Link OSM](@site/static/img/map/context_menu_osm_link.png) ![Link OSM](@site/static/img/map/context_menu_osm_link_1.png)

Link OpenStreetMap zapewnia bezpośredni link do obiektu OpenStreetMap, gdzie można znaleźć pełne informacje o nim:
[węzeł](https://wiki.openstreetmap.org/wiki/Node) lub [droga](https://wiki.openstreetmap.org/wiki/Way).


### Zdjęcia online {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Zdjęcia online menu kontekstowe Android](@site/static/img/map/images_nearby_1_andr.png)
![Zdjęcia online menu kontekstowe Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Zdjęcia online menu kontekstowe iOS](@site/static/img/map/online_photo_ios.png)
![Zdjęcia online menu kontekstowe iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Po dotknięciu Popularnego Miejsca na mapie, sekcja **Zdjęcia online** w *menu kontekstowym POI* wyświetla podglądy obrazów pochodzących z [Wikipedii](https://www.wikipedia.org/) i [Wikimedia Commons](https://www.wikimedia.org/).

Dotknięcie zdjęcia otwiera widok **Galerii**, gdzie można:

- Przeglądać do 100 zdjęć na miejsce
- Wyświetlać metadane obrazu (*autor*, *licencja*, *źródło*)
- Wykonywać działania: **Udostępnij**, **Otwórz w przeglądarce**, **Pobierz**

> *Na iOS długie dotknięcie obrazu otwiera menu kontekstowe z szybkimi akcjami.*

Więcej informacji: [Zdjęcia online](https://osmand.net/docs/user/map/popular_places#online-photos) i [Widok galerii](https://osmand.net/docs/user/map/popular_places#gallery)


### Obrazy z poziomu ulicy {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Obrazy z poziomu ulicy Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Obrazy z poziomu ulicy iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd obsługuje integrację z [Mapillary](https://www.mapillary.com/), globalną platformą do crowdsourcingu zdjęć z poziomu ulicy. Ta funkcja pozwala przeglądać i eksplorować sekwencje zdjęć z rzeczywistego świata bezpośrednio na mapie.

Obrazy Mapillary pojawiają się jako kierunkowe ikony zdjęć, wyrównane z drogą lub ścieżką, gdzie zostały wykonane. Mogą one pomóc lepiej zrozumieć otoczenie, zwłaszcza w nieznanych obszarach.

Możesz:

- Użyć przycisku **Eksploruj**, aby otworzyć przeglądarkę Mapillary i przeglądać pobliskie obrazy z poziomu ulicy.
- Dotknąć przycisku **Dodaj zdjęcia**, aby dodać własne zdjęcia do platformy Mapillary.

> *Dowiedz się więcej o tym, jak aktywować i używać tej funkcji w [przewodniku po wtyczce Mapillary](../plugins/mapillary.md).*


### * Notatka audio/wideo {#-audiovideo-note}

<InfoAndroidOnly />

![Lista obrazów](@site/static/img/map/image_list_android.png) ![Lista wideo](@site/static/img/map/video_list_android.png)

Informacje o [notatkach audio/wideo](../plugins/audio-video-notes.md), takie jak data, współrzędne, podgląd i inne, są dostępne w menu **Szczegóły**. Notatki można otwierać w dodatkowym oprogramowaniu, dotykając przycisku **Odtwórz / Pokaż** w menu kontekstowym notatki.


## Akcje {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu akcji Android](@site/static/img/map/actions_menu_android.png) ![Dodatkowe menu akcji Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu akcji iOS](@site/static/img/map/actions_menu_ios.png) ![Dodatkowe menu akcji iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Jest to zestaw specyficznych manipulacji, które można wykonać na punkcie lub obiekcie. To menu jest podzielone na dwie części: widoczna sekcja składa się z maksymalnie 3 akcji, a inne akcje są dostępne za pomocą przycisku *Akcje*. Możesz dostosować (*Android*) kolejność akcji w [Ustawieniach ogólnych](#customize).


### Dodaj / Edytuj ulubione {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Dodaj Edytuj ulubioną akcję Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Dodaj Edytuj ulubioną akcję iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

W menu kontekstowym dostępne są opcje **dodania** lub **edycji** wybranego punktu / obiektu do [listy ulubionych](../personal/myplaces.md).

- Aby **dodać**, należy wybrać punkt / obiekt, dotknąć ikony *Gwiazdki* (z podpisem Dodaj) i wprowadzić wszystkie niezbędne informacje.

- Aby **edytować** informacje o ulubionym punkcie, należy włączyć *Pokaż na mapie* (*Menu → Moje miejsca → Ulubione*), a następnie nacisnąć na niego, a w menu kontekstowym zamiast ikony *Gwiazdki* pojawi się *ikona ołówka* (z podpisem Edytuj).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - dodaje wybrany punkt do listy ulubionych.


### Dodaj / Edytuj znacznik {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Dodaj Edytuj znacznik akcja Android](@site/static/img/map/add_marker_android.png) ![Akcja znacznika przejścia Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Dodaj Edytuj znacznik akcja iOS](@site/static/img/map/add_marker_ios.png) ![Przywróć znacznik akcja Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Istnieje możliwość oznaczenia punktu lub obiektu, aby ułatwić planowanie nawigacji. Wystarczy dotknąć ikonę **flagi** w menu (*Android*), **strzałki** (*iOS*) - wyświetla kierunek i odległość do wybranego punktu od bieżącej lokalizacji.

Akcje:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Umieszcza nowy znacznik w wybranym punkcie.
- **Oznacz jako przekroczony** (*Android*) / *Odrzuć* (*iOS*). Dezaktywuje znacznik i umieszcza go w Historii.
- **Ustaw jako aktywny** (*Android*). Przenosi znacznik na górną pozycję (na górnym panelu).
- **Przywróć znacznik** (*Android*). Przenosi znacznik z Historii do aktywnej listy.

Więcej o [znacznikach tutaj](../personal/markers.md).


### Udostępnij {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Wersje do Androida 14 | 14+ Android |
|:------------|:---------------|
| ![Akcja udostępniania Android](@site/static/img/map/action_share_1_andr.png) | ![Akcja udostępniania Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja udostępniania iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

Aplikacja OsmAnd umożliwia **<Translate android="true" ids="shared_string_share"/>** *Moją lokalizację* lub dowolną wybraną lokalizację na mapie za pomocą komunikatora, poczty e-mail lub mediów społecznościowych.

Dostępne opcje udostępniania lokalizacji:

- ***Wyślij***. Wysyła tekst za pośrednictwem aplikacji dostępnych na Twoim urządzeniu. Zawiera wszystkie informacje o lokalizacji: nazwę Mojej lokalizacji lub nazwę wybranego POI, adres, współrzędne i geolokalizację jako link.
- ***Kopiuj***. Kopiuje wszystkie informacje o lokalizacji (nazwę Mojej lokalizacji lub nazwę wybranego POI, adres, współrzędne i geolokalizację jako link) do schowka.
- ***Kopiuj adres***. Kopiuje tylko informacje o adresie do schowka.
- ***Kopiuj nazwę POI***. Kopiuje tylko nazwę POI lub adres, jeśli nie ma nazwy, do schowka.
- ***Kopiuj współrzędne***. Kopiuje tylko informacje o współrzędnych do schowka.
- ***geo***. Otwiera listę dostępnych aplikacji obsługujących geolokalizację. <!-- (informacje o [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-kod*** (*Android*). Generuje link do wybranej lokalizacji w kodzie QR.

<!--
- ***Zapisz obraz*** (*iOS*) - zapisuje zrzut ekranu z mapą i wybranym punktem w galerii obrazów.
- ***Przypisz do kontaktu*** (*iOS*) - tworzy ikonę dla wybranego kontaktu ze zrzutu ekranu mapy.
- ***Drukuj*** (*iOS*) - otwiera opcje drukarki do drukowania zrzutu ekranu mapy.
- ***Zapisz do plików*** (*iOS*) - zapisuje zrzut ekranu mapy w iCloud Drive lub pamięci urządzenia. -->


### Wskazówki do / z {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Wskazówki Android](@site/static/img/map/action_directions_android.png)

![Wiele wskazówek Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Wskazówki iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Aby rozpocząć nawigację lub planowanie trasy, należy najpierw wybrać cel za pomocą [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). W przypadku, gdy masz już punkt docelowy, menu zasugeruje zastąpienie punktu docelowego lub wstawienie go jako kolejnego punktu pośredniego lub początkowego.

Możliwe jest również wybranie *Z* miejsca docelowego najpierw za pomocą menu kontekstowego mapy (<Translate android="true" ids="context_menu_item_directions_from"/>).

Więcej o [nawigacji tutaj](../navigation/setup/route-navigation.md).

:::note Dotknij Rozpocznij nawigację
Jeśli dotkniesz **Rozpocznij nawigację** - punkt *Od* zostanie odrzucony, ponieważ aplikacja przechodzi w tryb nawigacji. Aby zachować trasę, nie dotykaj *Rozpocznij nawigację* i [**przesuń w dół**](#hide-context-menu) menu *Przygotowanie trasy*.
:::


### Szukaj w pobliżu {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja wyszukiwania Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja wyszukiwania iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Za pomocą tej akcji menu kontekstowego możliwe jest wyszukiwanie w pobliżu określonej lokalizacji na mapie.

Więcej o [funkcji wyszukiwania](../search/index.md).


### Unikaj drogi {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Unikaj drogi na mapie Android](@site/static/img/map/action_avoid_android.png) ![Odrzuć unikniętą drogę Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Unikaj drogi na mapie iOS](@site/static/img/map/avoid_route_ios_1.png) ![Odrzuć unikniętą drogę iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Korzystając z menu kontekstowego mapy, możesz dodać konkretną drogę do listy dróg nieużywanych do wyznaczania tras. Będzie to miało wpływ na [przygotowanie trasy](../navigation/setup/route-navigation.md).
Aby usunąć wcześniej wybrane drogi z *[listy dróg do unikania](../navigation/routing/osmand-routing.md#avoid-roads-menu)*, dotknij znaku, wybierz *Usuń* (**Android**) lub *Odrzuć* (**iOS**).

:::note
Funkcja unikania dróg jest globalna i wpływa na wszystkie *[typy trasowania](../navigation/routing/osmand-routing.md#routing-types)* (z wyjątkiem *[trasowania online](../navigation/routing/online-routing.md)*).
:::


### Zmień położenie obiektu {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Zmień pozycję Android](@site/static/img/map/action_change_position_android.png)

![Akcja Zmień pozycję UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Zmień pozycję iOS](@site/static/img/map/action_change_position_ios.png)

![Akcja Zmień pozycję UI iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Prawie każdy obiekt utworzony przez użytkownika jest ruchomy, tj. znacznik, ulubiony, utworzony POI, notatka audio/wideo lub punkt trasy. Najpierw wybierz obiekt na mapie, a następnie użyj *<Translate android="true" ids="change_markers_position"/>* menu, aby przenieść go w nowe miejsce.


### Zaplanuj trasę {#plan-a-route}

![Akcja Zaplanuj trasę Android](@site/static/img/map/action_plan_route_android.png)

Możesz rozpocząć planowanie trasy z wybranego punktu za pomocą menu kontekstowego obiektu.

Więcej o narzędziu [Planuj trasę](../plan-route/create-route.md).


### Aktualizuj / Pobieraj mapy online {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Pobierz mapę online Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Pobierz mapę online iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Aby zaktualizować lub pobrać mapy online (kafelki) w określonej lokalizacji, możesz użyć menu kontekstowego obiektu:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* i dla *Aktualizuj*, przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* i *<Translate ios="true" ids="update_tile"/>*.

Proszę przeczytać [pełną instrukcję](../map/raster-maps.md#download--update-tiles).


### Aktualizuj / Pobieraj mapy wektorowe {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Pobierz mapę wektorową Android](@site/static/img/map/action_download_vector_map_android.png)

![Wybierz mapę wektorową na całym świecie na Androidzie](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Pobierz mapę wektorową iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Wybierz mapę wektorową na iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

W przypadku braku mapy offline w wybranej lokalizacji, na przykład menu obiektu mapy zostało otwarte za pomocą wyszukiwania lub za pomocą konkretnego ulubionego, zostanie zasugerowane pobranie najmniejszej możliwej mapy offline [pobierz](../start-with/download-maps.md#select-on-the-map).

**iOS**. Jeśli masz już [pobrane](../map/map-context-menu.md) mapy OsmAnd (wektorowe lub terenowe), możesz je zaktualizować za pomocą menu kontekstowego. Najpierw musisz wybrać region na mapie - dotknij dowolnej lokalizacji na mapie świata w skali 3-7.

> **UWAGA**. *Jeśli otworzyłeś menu kontekstowe dla regionu mapy (region jest podświetlony), będziesz mógł zobaczyć ***<Translate android="true" ids="rendering_category_details"/>*** o nim: typ i rozmiar dostępnej mapy, link do strony Wikipedii, język, populacja i inne.*


### * Dodaj / Usuń punkt parkingowy {#-add--delete-parking-point}

:::note
Aby dodać/usunąć punkty parkingowe, włącz wtyczkę OsmAnd [**Pozycja parkowania**](../plugins/parking.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Parkowanie Android](@site/static/img/map/action_parking_android.png)

![Akcja Usuń parkowanie Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Parkowanie iOS](@site/static/img/map/action_parking_ios.png)

![Akcja Usuń parkowanie iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Każda wybrana lokalizacja na mapie może zostać oznaczona jako [pozycja parkingowa](../plugins/parking.md). Aby usunąć pozycję parkingową, możesz otworzyć menu kontekstowe związane z lokalizacją parkingu.


### * Dodaj / Edytuj punkt trasy {#-add--edit-track-waypoint}

:::note
Aby dodać/edytować punkty trasy, włącz wtyczkę OsmAnd [**Nagrywanie podróży**](../plugins/trip-recording.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Punkt trasy Android](@site/static/img/map/action_waypoint_android.png)

![Wybierz ścieżkę, aby dodać punkt trasy Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Punkt trasy iOS](@site/static/img/map/action_waypoint_ios.png)

![Wybierz ścieżkę, aby dodać punkt trasy iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Możesz dodawać punkty trasy do nagranej ścieżki lub do bieżącego nagrania ścieżki za pomocą menu kontekstowego mapy.

- Wybierz lokalizację na mapie za pomocą [długiego dotknięcia](../map/map-context-menu.md#select-any-point-long-tap).
- W otwartym *menu kontekstowym mapy* wybierz *Akcje → Dodaj punkt trasy*.
- Lista wyświetla [ścieżki](../map/tracks/index.md#display-tracks-on-the-map) nagrane i pokazane na mapie, a także [bieżące nagranie ścieżki](../plugins/trip-recording.md), do którego można dodać wybrany punkt trasy.
- Możesz dodawać punkty trasy do ścieżki, która nie jest jeszcze aktywna do nagrywania, w takim przypadku nieaktywna ścieżka przechodzi ze *stanu początkowego* do *stanu wznowienia*.
- [Wypełnij](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) wymagane dane i zapisz punkt trasy.
- Możesz skonfigurować [Szybkie akcje](../widgets/quick-action.md), dodając punkt trasy do *Dodaj punkt trasy*.


### * Utwórz / Modyfikuj POI {#-create--modify-poi}

:::note
Aby dodać/modyfikować POI, włącz wtyczkę OsmAnd [**Edycja OSM**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Dzięki wtyczce do edycji OSM możesz tworzyć i modyfikować większość POI obecnych na [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [tworzy nowy POI](../plugins/osm-editing.md#create--modify-poi) w wybranej lokalizacji.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [modyfikuje wybrany POI](../plugins/osm-editing.md#create--modify-poi).


### * Otwórz notatkę OSM {#-open-osm-note}

:::note
Aby otworzyć notatkę OSM, włącz wtyczkę OsmAnd [**Edycja OSM**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Notatka Android](@site/static/img/map/action_note_android.png)

![Akcja Dodaj notatkę Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Notatka iOS](@site/static/img/map/action_note_ios.png)

![Akcja Dodaj notatkę iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Możesz **zgłaszać** błędy danych mapy w określonej lokalizacji do [społeczności OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Prosimy o przestrzeganie [wytycznych](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) i dodawanie odpowiednich komentarzy do problemu.


### * Komentuj / Zamknij notatkę OSM {#-comment--close-osm-note}

:::note
Aby skomentować/zamknąć notatkę OSM, włącz wtyczkę OsmAnd [**Edycja OSM**](../plugins/osm-editing.md).
:::

![Komentarz do notatki OSM Android](@site/static/img/map/action_comment_note_android.png) ![Ponowne otwarcie notatki OSM Android](@site/static/img/map/action_reopen_note_android.png)

Możesz [komentować](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [rozwiązywać](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) i ponownie otwierać
Notatki OpenStreetMap za pośrednictwem menu kontekstowego obiektu.


### * Prześlij POI / notatkę OSM {#-upload-poi--osm-note}

:::note
Aby przesłać POI / notatkę OSM, włącz wtyczkę OsmAnd [**Edycja OSM**](../plugins/osm-editing.md).
:::

![Prześlij POI Android](@site/static/img/map/action_poi_upload_android.png) ![Prześlij notatkę OSM Android](@site/static/img/map/action_note_upload_android.png)

W przypadku korzystania z *trybu offline* do dodawania/edycji POI lub notatek OSM, będziesz musiał przesłać zmiany do OpenStreetMap. Domyślnie *tryb offline* jest włączony, aby uniknąć przypadkowych zmian w publicznej bazie danych. Możesz przesłać lub usunąć zmianę za pomocą menu kontekstowego utworzonego obiektu.


### * Nagraj notatkę AV {#-record-av-note}

<InfoAndroidOnly />

:::note
Aby nagrywać notatki audio/wideo, włącz wtyczkę OsmAnd [**Notatki audio/wideo**](../plugins/audio-video-notes.md).
:::

![Akcja Audio-Wideo Android](@site/static/img/map/action_av_note_android.png)

Nagrywa lub wykonuje notatkę multimedialną w wybranym punkcie na mapie.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - tworzy [notatkę audio](../map/point-layers-on-map.md#-audio--video-points-android) w wybranym punkcie (tworzy nowy punkt na nakładce z ikoną audio).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - tworzy [notatkę wideo](../map/point-layers-on-map.md#-audio--video-points-android) w wybranym punkcie (tworzy nowy punkt na nakładce z ikoną wideo).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - tworzy [punkt fotograficzny](../map/point-layers-on-map.md#-audio--video-points-android) na mapie.


## Dostosuj {#customize}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Menu kontekstowe mapy Dostosuj](@site/static/img/map/map_context_menu_customize_1.png) <!-- ![Menu kontekstowe mapy Dostosuj](@site/static/img/map/map_context_menu_customize_2.png) --> ![Menu kontekstowe mapy Dostosuj](@site/static/img/map/map_context_menu_customize_3.png)

Możesz zmienić kolejność lub ukryć elementy z menu *Akcje* w *menu kontekstowym mapy*. Sugerowanych jest łącznie 16 akcji.

- Możesz przenieść trzy najbardziej przydatne akcje na początek listy *Główne akcje*.
- Reszta menu może być dostosowana dla każdego profilu oddzielnie w sekcjach *Dodatkowe akcje* i *Ukryte*.

Dostępne typy akcji:

- **<Translate android="true" ids="main_actions"/>**. Sekcja ma tylko 4 przyciski, z których trzy można dostosować, a Akcje pozostają niezmienione.
- **<Translate android="true" ids="additional_actions"/>**. Możesz uzyskać dostęp do tych akcji, dotykając przycisku *Akcje*.
- **<Translate android="true" ids="shared_string_hidden"/>**. Przeniesienie akcji do tej sekcji nie powoduje, że przestają działać. Po prostu nie pojawiają się w menu Akcje.


## Powiązane artykuły {#related-articles}

- [Mapy wektorowe (Style map)](./vector-maps.md)
- [Mapy rastrowe (Online / Offline)](./raster-maps.md)
- [Punkty na mapie](./point-layers-on-map.md)
- [Menu kontekstowe ścieżek](./tracks/track-context-menu.md)
- [Transport publiczny](./public-transport.md)
- [Import / Eksport](../personal/import-export.md)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)

> *Ostatnia aktualizacja: czerwiec 2025*