---
source-hash: b3628319fe264d1340c71509c8c7c386e2371ca88bd67b6c06961f0a7f2a9726
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

Menu kontekstowe mapy dostarcza informacji o wybranym obiekcie na mapie. Można go również użyć do utworzenia trasy do wybranej lokalizacji. Aby otworzyć menu kontekstowe, najpierw znajdź wymaganą lokalizację na mapie, a następnie wybierz obiekt krótkim dotknięciem lub długim dotknięciem przy wyborze dowolnego precyzyjnego punktu na mapie.


### Wybierz obiekt (pojedyncze dotknięcie) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu kontekstowe Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu kontekstowe iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

**Menu kontekstowe** pojawia się po **jednokrotnym dotknięciu** oznaczonego obiektu na mapie. To menu kontekstowe wyświetla podstawowe informacje o wybranym obiekcie, w tym jego *nazwę*, *ikonę* (tak jak jest reprezentowana na mapie), *adres, odległość*, *granice* i *kierunek* od bieżącej pozycji.  

Możesz wybierać różne typy obiektów na mapie, takie jak *POI*, *ulubione*, *przystanki transportu*, *znaczniki*, *szczyty górskie* lub inne *obiekty mapy*.

:::note
- Wybrane obiekty mapy i ich granice odpowiadają [**węzłom (nodes)**](https://wiki.openstreetmap.org/wiki/Node) lub [**drogom (ways)**](https://wiki.openstreetmap.org/wiki/Way) OpenStreetMap.
- *Wysokość szczytów górskich jest wyświetlana w metrach lub stopach w zależności od [jednostek długości](../personal/profiles.md#units--formats) wybranych w ustawieniach profilu.*
:::



### Wybierz dowolny punkt (długie dotknięcie) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu kontekstowe długie dotknięcie Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu kontekstowe długie dotknięcie iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Gdy **długo dotkniesz** dowolnego miejsca na mapie, pojawi się **menu kontekstowe** z informacjami o wybranej lokalizacji. Obejmuje to adres, odległość i kierunek od bieżącej pozycji.


### Wybierz trasę GPX {#select-gpx-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu kontekstowe śladu Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ekran statystyk śladu iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Dotknięcie [śladu GPX](../map/tracks/index.md) na mapie otwiera [menu kontekstowe śladu](../map/tracks/track-context-menu.md), gdzie można uzyskać dostęp do dodatkowych opcji związanych ze śladem.



### Trasy, stoki narciarskie i szlaki {#routes-and-trails}

![Stoki narciarskie i szlaki MTB](@site/static/img/map/ski_mtb.png)  ![Stoki narciarskie i szlaki MTB](@site/static/img/map/ski_mtb_2.png)

Możesz dotykać elementów mapy, takich jak **stoki narciarskie**, **trasy dla rowerów górskich (MTB)** i **szlaki dla motocykli terenowych**, aby otworzyć ich menu kontekstowe ze szczegółowymi informacjami. Sprawdź artykuł [Trasy](../map/routes.md#actions-with-routes), aby uzyskać więcej informacji.



### Ukryj menu kontekstowe {#hide-context-menu}

Aby zamknąć **menu kontekstowe**:

- Dotknij dowolnego *pustego obszaru* na mapie, aby uniknąć ponownego otwarcia menu.
- Przeciągnij menu *w dół* od góry.


## Szczegóły {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu kontekstowe Android](@site/static/img/map/context_menu_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu kontekstowe iOS](@site/static/img/map/context_menu_2_ios.png)

</TabItem>

</Tabs>

Aby uzyskać bardziej szczegółowe informacje o obiekcie, dotknij przycisku **Szczegóły** w menu kontekstowym lub przesuń panel w górę, aby go rozwinąć.


### Informacje o obiekcie {#object-info}

Panel **Informacje o obiekcie** zawiera dodatkowe szczegóły dotyczące wybranego obiektu. Możesz dotknąć dowolnego wpisu, aby skopiować informacje do schowka.  

Dostępne szczegóły obejmują:

- [Opis artykułu](#article-description)
- [Alternatywne nazwy](#alternative-names)
- [Współrzędne](#coordinates)
- [W obszarach](#polygon-information)
- [Pobliskie POI](#nearby-pois)
- [Pobliskie popularne miejsca](#nearby-popular-places)
- [Trasy transportu publicznego dla przystanków](#public-transport-routes)
- [Ulubione / Punkty trasy z tej samej grupy](#favorites--track-points-from-the-group)
- [Link OpenStreetMap](#openstreetmap-link)
- [Zdjęcia online](#online-photos)

Dodatkowo panel może zawierać [Szczegóły OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features), takie jak:

- [Strona internetowa](https://wiki.openstreetmap.org/wiki/Key:website)
- [Numer telefonu](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Godziny otwarcia](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Opłata](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Dostępność](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Szerokość](https://wiki.openstreetmap.org/wiki/Key:width) / [Wysokość](https://wiki.openstreetmap.org/wiki/Key:height) 

Poza polami wymienionymi powyżej, OsmAnd może również wyświetlać dodatkowe opisowe informacje pobrane z OpenStreetMap. Te atrybuty pomagają lepiej zrozumieć cechy miejsca i mogą obejmować szczegóły takie jak wysokość, kierunek, rok budowy, typ nawierzchni lub pokrycia, poziom wewnątrz budynku, opcje płatności, dostępność dostawy lub na wynos oraz wiele innych. OsmAnd wyświetla te atrybuty z wyraźnymi etykietami i, jeśli to możliwe, ikonami, co ułatwia ich odczytywanie i rozpoznawanie. Dokładny zestaw atrybutów zależy od danych dostępnych w OpenStreetMap dla wybranego obiektu.


### Opis artykułu {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Lista opisów](@site/static/img/map/description_list_new_android.png) ![Lista opisów](@site/static/img/map/description_list_dialog.png)

Ta część zawiera fragment opisu z [artykułu Wikipedii](../plugins/wikipedia.md#wikipedia-article), opisu [Ulubionego](../personal/favorites.md) lub punktu trasy, dotykając możesz otworzyć pełny opis.

Jeśli wybrane miejsce ma artykuł na Wikipedii, w tej sekcji wyświetlany jest krótki podgląd. Gdy pełny artykuł nie jest dostępny offline, pojawia się przycisk *Przeczytaj na Wikipedii*. Dotknięcie go otwiera okno dialogowe z opcjami w zależności od dostępu użytkownika: użytkownicy z zakupionym planem mogą pobrać regionalne dane Wikipedii lub otworzyć artykuł w przeglądarce, podczas gdy darmowi użytkownicy mogą otworzyć artykuł online lub przejść do ekranu oferującego dostęp offline.

</TabItem>

<TabItem value="ios" label="iOS">  

![Lista opisów](@site/static/img/map/description_list_new_ios.png)

Ta część zawiera fragment opisu z [artykułu Wikipedii](../plugins/wikipedia.md), opisu [Ulubionego](../personal/favorites.md) lub punktu trasy, dotykając możesz otworzyć pełny opis.

</TabItem>

</Tabs>


### Alternatywne nazwy {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Alternatywne nazwy Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Alternatywne nazwy Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Alternatywne nazwy iOS 1](@site/static/img/map/alternative_names_1_ios.png) ![Alternatywne nazwy iOS](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd wyświetla **dodatkowe nazwy POI** w *menu kontekstowym mapy*, priorytetowo traktując nazwę w *języku wyświetlania* lub na liście preferowanych języków systemu. Jeśli dostępnych jest wiele tłumaczeń, są one grupowane w skategoryzowane tagi, takie jak *nazwa, marka, operator* lub *pobliskie POI*.  

Cechy wyświetlania alternatywnych nazw:

- Dodatkowe tłumaczenia są dostępne za pośrednictwem *listy rozwijanej*.

- Nazwy są podzielone na różne grupy, takie jak *lista nazw w innych językach*, *Regionalne*, *Lokalne*, *Narodowe*, *Międzynarodowe*, *Krótkie*, *Stare*, *Oficjalne* i *Alternatywne* nazwy.

- Inne kategorie obejmują *tłumaczenie specyficzne dla regionu* lub *ustawienia domyślne*.

- Jeśli określone tłumaczenie *nie jest dostępne*, OsmAnd domyślnie używa nazwy **lokalnej**, aby zapewnić dokładność i spójność w regionach wielojęzycznych.


### W obszarze {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Informacje o poligonie Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informacje o poligonie iOS](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

Funkcja **W obszarze** wyświetla listę **obszarów**, w których znajduje się obiekt. Obejmuje to cechy geograficzne, granice administracyjne, obszary użytkowania gruntów, cechy naturalne i inne skategoryzowane obszary. *Lista otaczających poligonów*, posortowana *od najmniejszego do największego* na podstawie wielkości obszaru.

### Współrzędne {#coordinates}

|Format współrzędnych| |
|:------|:------|
| <ul><li>DDD.DDDDD (Stopnie dziesiętne bez przyrostków)</li><li>DDD.DDDDD (N/S, E/W z przecinkiem)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[Standard UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Szwajcarska siatka CH1903 i CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[Link internetowy OsmAnd](https://osmand.net/map)</li><li>[Link internetowy OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Współrzędne](@site/static/img/map/map_context_menu_Coordinates.png) |

W menu kontekstowym można znaleźć [współrzędne geograficzne](../search/search-coordinates.md#coordinate-format) punktu w różnych formatach, a także udostępniane linki OsmAnd i [OpenStreetMap](../map/map-context-menu.md#openstreetmap-link) (ostatnia opcja jest dostępna tylko wtedy, gdy włączona jest [wtyczka do edycji OpenStreetMap](../plugins/osm-editing.md)). Jeśli rozwiniesz sekcję współrzędnych i długo dotkniesz dowolnej linii z listy, jej wartości zostaną automatycznie skopiowane do schowka (**Android**) lub opcja *Kopiuj* stanie się dostępna w wyskakującym komunikacie (**iOS**).  

Link internetowy OsmAnd może być automatycznie rozpoznawany przez OsmAnd (przykład: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Zarówno linki OsmAnd, jak i [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) otwierają się na odpowiednich stronach z pinezką wskazującą interesujące miejsce.  


### Pobliskie POI {#nearby-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Pobliskie POI Android](@site/static/img/map/nearby_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pobliskie POI iOS](@site/static/img/map/nearby_poi_ios.png)

</TabItem>

</Tabs>

Ta sekcja wyświetla pobliskie [Punkty Użyteczności (POI)](../map/point-layers-on-map.md#points-of-interest-pois) z opcjami *<Translate android="true" ids="shared_string_show_on_map"/>* i *<Translate android="true" ids="search_more"/>* , aby wyświetlić i [wyszukać](../search/search-poi.md) wszystkie inne POI w tej samej kategorii.

Dotknięcie *Pobliskie POI* otwiera listę punktów. Dotknięcie jednego z tych punktów z listy przesuwa mapę do tego punktu z otwarciem menu kontekstowego punktu na mapie.


### Pobliskie popularne miejsca {#nearby-popular-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Pobliskie miejsca Android](@site/static/img/map/nearby_places_android.png)

Ta sekcja podkreśla popularne miejsca, które pomagają odkrywać interesujące miejsca docelowe i punkty orientacyjne wokół bieżącej lokalizacji. Użyj *<Translate android="true" ids="shared_string_show_on_map"/>* i *<Translate android="true" ids="search_more"/>* , aby przeglądać i wyszukiwać wszystkie popularne miejsca. 

Dotknięcie *Pobliskie [Popularne miejsca](https://osmand.net/docs/user/map/popular_places)* otwiera listę pobliskich lokalizacji. Wybranie dowolnego elementu centruje mapę na tym miejscu i otwiera jego menu kontekstowe, gdzie możesz przeczytać krótki opis lub dotknąć ***Przeczytaj pełny artykuł***, aby zobaczyć kompletny przewodnik.

</TabItem>

<TabItem value="ios" label="iOS">

![Pobliskie miejsca iOS](@site/static/img/map/nearby_places_ios.png)

Ta sekcja podkreśla popularne miejsca, które pomagają odkrywać interesujące miejsca docelowe i punkty orientacyjne wokół bieżącej lokalizacji. Użyj *<Translate android="true" ids="shared_string_show_on_map"/>* i *<Translate android="true" ids="search_more"/>* , aby przeglądać i wyszukiwać wszystkie popularne miejsca. 

Dotknięcie *Pobliskie [Popularne miejsca](https://osmand.net/docs/user/plugins/wikipedia#wikipedia-article)* otwiera listę pobliskich lokalizacji. Wybranie dowolnego elementu centruje mapę na tym miejscu i otwiera jego menu kontekstowe, gdzie możesz przeczytać krótki opis lub dotknąć ***Przeczytaj pełny artykuł***, aby zobaczyć kompletny przewodnik.

> **UWAGA**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) pojawi się tylko wtedy, gdy wcześniej pobrałeś specjalne mapy z [artykułami z Wikipedii dla tego obszaru](../plugins/wikipedia.md#download-wikipedia-packages)*.

</TabItem>

</Tabs>


### Trasy transportu publicznego {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Trasy transportu publicznego Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasy transportu publicznego iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Wyświetla informacje o trasach transportu publicznego dla wybranego przystanku. Informacje o menu kontekstowym transportu publicznego i działaniach z nim związanych można znaleźć w [artykule](../map/public-transport.md#transport-routes-context-menu).


### Ulubione / Punkty trasy z grupy {#favorites--track-points-from-the-group}

![Lista ulubionych](@site/static/img/map/favorite_list_android.png) ![Pełna lista ulubionych](@site/static/img/map/favorite_list_full_android.png)

To jest lista wszystkich punktów w jednej grupie dla Ulubionego lub punktu trasy. Po dotknięciu cała lista punktów jednej grupy się rozwija, a po dotknięciu punktu z listy mapa przesuwa się do wybranego punktu.




### Link OpenStreetMap {#openstreetmap-link}

![Link OSM](@site/static/img/map/context_menu_osm_link.png) ![Link OSM](@site/static/img/map/context_menu_osm_link_1.png)

Link OpenStreetMap zapewnia bezpośredni link do obiektu OpenStreetMap, gdzie można znaleźć pełne informacje na jego temat:  
[węzeł (node)](https://wiki.openstreetmap.org/wiki/Node) lub [droga (way)](https://wiki.openstreetmap.org/wiki/Way).


### Zdjęcia online {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu kontekstowe Zdjęcia online Android](@site/static/img/map/images_nearby_1_andr.png)
![Menu kontekstowe Zdjęcia online Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu kontekstowe Zdjęcia online iOS](@site/static/img/map/online_photo_ios.png)
![Menu kontekstowe Zdjęcia online iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Gdy dotkniesz Popularnego Miejsca na mapie, sekcja **Zdjęcia online** w *menu kontekstowym POI* wyświetla podglądy obrazów pochodzących z [Wikipedii](https://www.wikipedia.org/) i [Wikimedia Commons](https://www.wikimedia.org/).

Dotknięcie zdjęcia otwiera widok **Galerii**, gdzie możesz:

- Przeglądać do 100 obrazów na miejsce
- Wyświetlać metadane obrazu (*autor*, *licencja*, *źródło*)
- Wykonywać akcje: **Udostępnij**, **Otwórz w przeglądarce**, **Pobierz**

> *Na iOS długie dotknięcie obrazu otwiera menu kontekstowe z szybkimi akcjami.*

Więcej informacji: [Zdjęcia online](https://osmand.net/docs/user/map/popular_places#online-photos) i [widok Galerii](https://osmand.net/docs/user/map/popular_places#gallery)


### Zdjęcia na poziomie ulicy {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Zdjęcia na poziomie ulicy Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Zdjęcia na poziomie ulicy iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd obsługuje integrację z [Mapillary](https://www.mapillary.com/), globalną platformą do crowdsourcingowych zdjęć na poziomie ulicy. Ta funkcja pozwala na przeglądanie i eksplorowanie sekwencji zdjęć z rzeczywistego świata bezpośrednio na mapie.

Obrazy Mapillary pojawiają się jako ikony zdjęć z kierunkiem, wyrównane z drogą lub ścieżką, na której zostały zrobione. Mogą one pomóc lepiej zrozumieć otoczenie, zwłaszcza w nieznanych obszarach.

Możesz:

- Użyć przycisku **Eksploruj**, aby otworzyć przeglądarkę Mapillary i przeglądać pobliskie zdjęcia na poziomie ulicy.
- Dotknąć przycisku **Dodaj zdjęcia**, aby dodać własne zdjęcia na platformę Mapillary.

> *Dowiedz się więcej o tym, jak aktywować i używać tej funkcji w [przewodniku wtyczki Mapillary](../plugins/mapillary.md).*


### * Notatka audio/wideo {#-audiovideo-note}

<InfoAndroidOnly />

![Lista obrazów](@site/static/img/map/image_list_android.png) ![Lista wideo](@site/static/img/map/video_list_android.png)

Informacje o [notatkach audio/wideo](../plugins/audio-video-notes.md), takie jak data, współrzędne, podgląd i inne, są dostępne w menu **Szczegóły**. Możesz otworzyć notatki w oprogramowaniu dodatkowym, dotykając przycisku **Odtwórz / Pokaż** w menu kontekstowym notatki.


## Akcje {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu akcji Android](@site/static/img/map/actions_menu_android.png) ![Dodatkowe menu akcji Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu akcji iOS](@site/static/img/map/actions_menu_ios.png)  ![Dodatkowe menu akcji iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Jest to zestaw specyficznych operacji, które można wykonać na punkcie lub obiekcie. To menu jest podzielone na dwie części: widoczna sekcja składa się z maksymalnie 3 akcji, a pozostałe akcje są dostępne za pomocą przycisku *Akcje*. Możesz dostosować (*Android*) kolejność akcji w [Ustawieniach ogólnych](#customize).


### Dodaj / Edytuj ulubione {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Dodaj/Edytuj ulubione Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Dodaj/Edytuj ulubione iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

W menu kontekstowym znajdują się opcje **dodawania** lub **edycji** wybranego punktu / obiektu do [listy ulubionych](../personal/myplaces.md).

- Aby **Dodać**, musisz wybrać punkt / obiekt, dotknąć ikony *Gwiazdki* (z podpisem Dodaj) i wprowadzić wszystkie niezbędne informacje.  

- Aby **Edytować** informacje o ulubionym punkcie, musisz włączyć *Pokaż na mapie* (*Menu → Moje miejsca → Ulubione*), a następnie nacisnąć na niego, a w menu kontekstowym zamiast ikony *Gwiazdki* pojawi się ikona *Ołówka* (z podpisem Edytuj).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - dodaje wybrany punkt do listy ulubionych.


### Dodaj / Edytuj znacznik {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Dodaj/Edytuj znacznik Android](@site/static/img/map/add_marker_android.png) ![Akcja Oznacz jako minięty znacznik Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Dodaj/Edytuj znacznik iOS](@site/static/img/map/add_marker_ios.png)  ![Akcja Przywróć znacznik Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Możliwe jest oznaczenie punktu lub obiektu, aby ułatwić planowanie nawigacji. Wystarczy dotknąć ikony **flagi** w menu (*Android*), **strzałki** (*iOS*) - wyświetla kierunek i odległość do wybranego punktu od bieżącej lokalizacji.

Akcje:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Umieszcza nowy znacznik na wybranym punkcie.
- **Oznacz jako minięty** (*Android*) / *Odrzuć* (*iOS*). Dezaktywuje znacznik i przenosi go do Historii.
- **Uaktywnij** (*Android*). Przenosi znacznik na najwyższą pozycję (na górnym panelu).
- **Przywróć znacznik** (*Android*). Przenosi znacznik z Historii do listy aktywnych.

Przeczytaj więcej o [znacznikach tutaj](../personal/markers.md).


### Udostępnij {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Wersje do Android 14 | 14+ Android |
|:------------|:---------------|
| ![Akcja Udostępnij Android](@site/static/img/map/action_share_1_andr.png) | ![Akcja Udostępnij Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Udostępnij iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

Aplikacja OsmAnd pozwala na **<Translate android="true" ids="shared_string_share"/>** *Mojej lokalizacji* lub dowolnej wybranej lokalizacji na mapie za pomocą komunikatorów, e-maili lub mediów społecznościowych.  

Dostępne opcje udostępniania lokalizacji:

- ***Wyślij***. Wysyła tekst za pośrednictwem aplikacji dostępnych na Twoim urządzeniu. Zawiera wszystkie informacje o lokalizacji: nazwę Mojej lokalizacji lub nazwę wybranego POI, adres, współrzędne i geolokalizację jako link.
- ***Kopiuj***. Kopiuje wszystkie informacje o lokalizacji (nazwę Mojej lokalizacji lub nazwę wybranego POI, adres, współrzędne i geolokalizację jako link) do schowka.  
- ***Kopiuj adres***. Kopiuje tylko informacje o adresie do schowka.
- ***Kopiuj nazwę POI***. Kopiuje tylko nazwę POI lub adres, jeśli nie ma nazwy, do schowka.
- ***Kopiuj współrzędne***. Kopiuje tylko informacje o współrzędnych do schowka.
- ***geo***. Otwiera listę dostępnych aplikacji obsługujących geolokalizacje. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***Kod QR*** (*Android*). Generuje link do wybranej lokalizacji w kodzie QR.

<!--
- ***Save Image*** (*iOS*) - saves a screenshot with map and selected point in the image gallery.
- ***Assign to Contact*** (*iOS*) - makes an icon for chosen contact from the map screenshot.
- ***Print*** (*iOS*) - opens Printer Options for printing the map screenshot.
- ***Save to files*** (*iOS*) - saves the map screenshot in iCloud Drive or storage of your device. -->


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

Aby rozpocząć nawigację lub planowanie trasy, musisz najpierw wybrać cel za pomocą [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). Jeśli masz już punkt docelowy, menu zasugeruje zastąpienie punktu docelowego lub wstawienie go jako kolejnego punktu pośredniego lub początkowego.

Możliwe jest również wybranie najpierw celu *Z* za pomocą menu kontekstowego mapy (<Translate android="true" ids="context_menu_item_directions_from"/>).

Przeczytaj więcej o [nawigacji tutaj](../navigation/setup/route-navigation.md).

:::note Dotknij Rozpocznij nawigację
Jeśli dotkniesz **Rozpocznij nawigację** - punkt *Z* zostanie odrzucony, ponieważ aplikacja przejdzie w tryb nawigacji. Aby zachować trasę, nie dotykaj *Rozpocznij nawigację* i [**przesuń w dół**](#hide-context-menu) menu *Przygotowanie trasy*.
:::


### Szukaj w pobliżu {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Szukaj Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Szukaj iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Dzięki tej akcji menu kontekstowego możliwe jest wyszukiwanie wokół określonej lokalizacji na mapie.  

Przeczytaj więcej o funkcjonalności [wyszukiwania](../search/index.md).


### Unikaj drogi {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Unikaj drogi na mapie Android](@site/static/img/map/action_avoid_android.png) ![Odrzuć unikaną drogę Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Unikaj drogi na mapie iOS](@site/static/img/map/avoid_route_ios_1.png) ![Odrzuć unikaną drogę iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Korzystając z menu kontekstowego mapy, możesz dodać określoną drogę do listy dróg nieużywanych do wyznaczania tras. Wpłynie to na [przygotowanie trasy](../navigation/setup/route-navigation.md).  
Aby usunąć wcześniej wybrane drogi z *[listy unikanych dróg](../navigation/routing/osmand-routing.md#avoid-roads-menu)*, dotknij znaku, wybierz *Usuń* (**Android**) lub *Odrzuć* (**iOS**).

:::note
Funkcja unikania dróg jest globalna i wpływa na wszystkie *[typy trasowania](../navigation/routing/osmand-routing.md#routing-types)* (z wyjątkiem *[trasowania online](../navigation/routing/online-routing.md)*).  
:::


### Zmień pozycję obiektu {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Zmień pozycję Android](@site/static/img/map/action_change_position_android.png)

![Interfejs akcji Zmień pozycję Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Zmień pozycję iOS](@site/static/img/map/action_change_position_ios.png)

![Interfejs akcji Zmień pozycję iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Prawie każdy obiekt utworzony przez użytkownika jest ruchomy, tj. Znacznik, Ulubione, Utworzone POI, Notatka audio/wideo lub Punkt trasy. Najpierw wybierz obiekt na mapie, a następnie użyj opcji *<Translate android="true" ids="change_markers_position"/>* w menu, aby przenieść go w nowe miejsce.


### Zaplanuj trasę {#plan-a-route}

![Akcja Zaplanuj trasę Android](@site/static/img/map/action_plan_route_android.png)

Możesz rozpocząć planowanie trasy z wybranego punktu za pomocą menu kontekstowego obiektu.

Przeczytaj więcej o narzędziu [Zaplanuj trasę](../plan-route/create-route.md).


### Zaktualizuj / Pobierz mapy online {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Pobierz mapę online Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Pobierz mapę online iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Aby zaktualizować lub pobrać mapy online (kafelki) w określonej lokalizacji, możesz użyć menu kontekstowego obiektu:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* , a dla *Aktualizacji*, przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* i *<Translate ios="true" ids="update_tile"/>*.  

Proszę przeczytać [pełną instrukcję](../map/raster-maps.md#download--update-tiles).  


### Zaktualizuj / Pobierz mapy wektorowe {#update--download-vector-maps}

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

W przypadku, gdy w wybranej lokalizacji nie ma mapy offline, na przykład menu obiektu mapy zostało otwarte przez Wyszukiwanie lub przez określone Ulubione, zostanie zasugerowane [pobranie](../start-with/download-maps.md#select-on-the-map) najmniejszej możliwej mapy offline.  

**iOS**. Jeśli masz już [pobrane](../map/map-context-menu.md) mapy OsmAnd (wektorowe lub terenowe), możliwe jest ich zaktualizowanie za pomocą menu kontekstowego. Najpierw musisz wybrać region na mapie - dotknij dowolnej lokalizacji na powiększeniu 3-7 na mapie świata.  

> **UWAGA**. *Jeśli otworzyłeś menu kontekstowe dla regionu mapy (region jest podświetlony), będziesz mógł zobaczyć ***<Translate android="true" ids="rendering_category_details"/>*** na jego temat: typ i rozmiar dostępnej mapy, link do strony Wikipedii, język, populację i inne.*


### * Dodaj / Usuń miejsce parkingowe {#-add--delete-parking-point}

:::note
Aby dodać/usunąć miejsca parkingowe, włącz wtyczkę OsmAnd [**Pozycja parkowania**](../plugins/parking.md).
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Parking Android](@site/static/img/map/action_parking_android.png)

![Akcja Usuń Parking Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Parking iOS](@site/static/img/map/action_parking_ios.png)

![Akcja Usuń Parking iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Dowolna wybrana lokalizacja na mapie może być oznaczona jako [pozycja parkowania](../plugins/parking.md). Aby usunąć pozycję parkowania, możesz otworzyć menu kontekstowe powiązane z lokalizacją parkowania.


### * Dodaj / Edytuj punkt trasy {#-add--edit-track-waypoint}

:::note
Aby dodać/edytować punkty trasy, włącz wtyczkę OsmAnd [**Nagrywanie podróży**](../plugins/trip-recording.md).
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Wybierz ślad, aby dodać punkt trasy Android](@site/static/img/map/tracks_tab_android.png) ![Akcja Dodaj punkt trasy Android](@site/static/img/map/add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Punkt trasy iOS](@site/static/img/map/action_waypoint_ios.png)

![Wybierz ślad, aby dodać punkt trasy iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Możesz dodawać punkty trasy do nagranego śladu lub do bieżącego nagrywania śladu za pomocą menu kontekstowego mapy.  

- Wybierz lokalizację na mapie [długim dotknięciem](../map/map-context-menu.md#select-any-point-long-tap).
- W otwartym *menu kontekstowym mapy* wybierz *Akcje → Dodaj punkt trasy*.
- Lista wyświetla [ślady](../map/tracks/index.md#display-tracks-on-the-map) nagrane i pokazane na mapie, a także [bieżące nagrywanie śladu](../plugins/trip-recording.md), do którego możesz dodać wybrany punkt trasy (*na Androidzie* lista jest pogrupowana w zakładki: <Translate android="true" ids="shared_string_on_map"/> / <Translate android="true" ids="rendering_value_all_name"/> / <Translate android="true" ids="shared_string_folders"/>).
- Możesz dodawać punkty trasy do śladu, który nie jest jeszcze aktywny do nagrywania, w takim przypadku nieaktywny ślad przełącza się ze stanu *Start* do stanu *Wznów*.
- [Wypełnij](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) wymagane dane i zapisz punkt trasy.
- Możesz skonfigurować [Szybkie akcje](../widgets/quick-action.md), dodając punkt trasy do *Dodaj punkt trasy*.


### * Utwórz / Modyfikuj POI {#-create--modify-poi}

:::note
Aby tworzyć/modyfikować POI, włącz wtyczkę OsmAnd [**Edycja OSM**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Dzięki wtyczce Edycja OSM możesz tworzyć i modyfikować większość POI obecnych na [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [tworzy nowy POI](../plugins/osm-editing.md#create--modify-poi) w wybranej lokalizacji.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [modyfikuje wybrany POI](../plugins/osm-editing.md#create--modify-poi).


### * Otwórz uwagę OSM {#-open-osm-note}

:::note
Aby otworzyć uwagę OSM, włącz wtyczkę OsmAnd [**Edycja OSM**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Akcja Uwaga Android](@site/static/img/map/action_note_android.png)

![Akcja Dodaj uwagę Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Akcja Uwaga iOS](@site/static/img/map/action_note_ios.png)

![Akcja Dodaj uwagę iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Możesz **zgłaszać** błędy danych mapy w określonej lokalizacji do [społeczności OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Proszę postępować zgodnie z [wytycznymi](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) i dodawać odpowiednie komentarze do problemu.


### * Skomentuj / Zamknij uwagę OSM {#-comment--close-osm-note}

:::note
Aby skomentować/zamknąć uwagę OSM, włącz wtyczkę OsmAnd [**Edycja OSM**](../plugins/osm-editing.md).
:::

![Skomentuj uwagę OSM Android](@site/static/img/map/action_comment_note_android.png) ![Otwórz ponownie uwagę OSM Android](@site/static/img/map/action_reopen_note_android.png)

Możesz [komentować](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [rozwiązywać](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) i ponownie otwierać
Uwagi OpenStreetMap za pomocą menu kontekstowego obiektu.


### * Prześlij POI / Uwagę OSM {#-upload-poi--osm-note}

:::note
Aby przesłać POI / uwagę OSM, włącz wtyczkę OsmAnd [**Edycja OSM**](../plugins/osm-editing.md).
:::

![Prześlij POI Android](@site/static/img/map/action_poi_upload_android.png) ![Prześlij uwagę OSM Android](@site/static/img/map/action_note_upload_android.png)

W przypadku korzystania z *trybu offline* do dodawania / edytowania POI lub uwag OSM, będziesz musiał przesłać zmiany do OpenStreetMap. Domyślnie *tryb offline* jest włączony, aby uniknąć przypadkowych zmian w publicznej bazie danych. Możesz przesłać lub usunąć zmianę za pomocą menu kontekstowego utworzonego obiektu.


### * Nagraj notatkę AV {#-record-av-note}

<InfoAndroidOnly />

:::note
Aby nagrywać notatki audio/wideo, włącz wtyczkę OsmAnd [**Notatki audio/wideo**](../plugins/audio-video-notes.md).
:::

![Akcja Audio-Wideo Android](@site/static/img/map/action_av_note_android.png)

Nagrywa lub robi notatkę multimedialną w wybranym punkcie na mapie.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - tworzy [notatkę audio](../map/point-layers-on-map.md#-audio--video-points-android) w wybranym punkcie (tworzy nowy punkt na nakładce z ikoną audio).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - tworzy [notatkę wideo](../map/point-layers-on-map.md#-audio--video-points-android) w wybranym punkcie (tworzy nowy punkt na nakładce z ikoną wideo).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - tworzy [punkt ze zdjęciem](../map/point-layers-on-map.md#-audio--video-points-android) na mapie.


## Dostosuj {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Dostosuj menu kontekstowe mapy](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Dostosuj menu kontekstowe mapy](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Dostosuj menu kontekstowe mapy](@site/static/img/map/map_context_menu_customize_3.png)

Możesz zmienić kolejność lub ukryć elementy z menu *Akcje* w *menu kontekstowym mapy*. Sugerowanych jest łącznie 16 akcji.  

- Możesz przenieść trzy najbardziej przydatne akcje na górę listy *Główne akcje*.
- Resztę menu można dostosować dla każdego profilu osobno w sekcjach *Dodatkowe akcje* i *Ukryte*.  

Dostępne typy akcji:

- **<Translate android="true" ids="main_actions"/>**. Sekcja ma tylko 4 przyciski, z których trzy można dostosować, a Akcje pozostają niezmienione.  
- **<Translate android="true" ids="additional_actions"/>**. Dostęp do tych akcji można uzyskać, dotykając przycisku *Akcje*.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Przeniesienie akcji do tej sekcji nie powoduje ich wyłączenia. Po prostu nie pojawiają się w menu Akcje.  


## Powiązane artykuły {#related-articles}

- [Mapy wektorowe (Style map)](./vector-maps.md)
- [Mapy rastrowe (Online / Offline)](./raster-maps.md)
- [Punkty na mapie](./point-layers-on-map.md)
- [Menu kontekstowe śladów](./tracks/track-context-menu.md)
- [Transport publiczny](./public-transport.md)
- [Import / Eksport](../personal/import-export.md)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)