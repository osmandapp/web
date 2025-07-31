---
source-hash: e005142473200bc1f9ed4e7e38e90fe7a2db323071277cbdb521ac266234d560
sidebar_position: 7
title: Punkty na mapie
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Przegląd {#overview}

Mapa może wyświetlać punkty, takie jak [Ulubione](#favorites), [Punkty POI](#points-of-interest-pois), [Markery](#markers), [Wikipedia](#-wikipedia--wikipedia), [Wyniki wyszukiwania](#search-results-poi), [Notatki audio i wideo](#-audio--video-points-android--audio--video-points-android) oraz [Edycja OSM](#-osm-edit-points--osm-edit-points).


## Ulubione {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Warstwa ulubionych Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Warstwa ulubionych iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

[Ulubione](../personal/favorites.md) to specjalne punkty oznaczone przez użytkowników. Domyślnie pojawiają się na mapie jako żółte gwiazdki, choć można je dostosować za pomocą dowolnego koloru, kształtu i ikony. Stają się widoczne na mapie od poziomu powiększenia 6.

:::info
W wersji OsmAnd na Androida możesz wyświetlać na mapie i podczas wyszukiwania tylko niektóre ulubione grupy. Przejdź do *Menu → Moje miejsca → Ulubione*, dotknij &#8942; i wybierz *Pokaż na mapie* lub nie.
:::


## Nazwy ulubionych i POI {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Warstwa etykiet ulubionych](@site/static/img/map/favorite_labels_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Warstwa etykiet ulubionych](@site/static/img/map/favorite_labels_layer.png)

</TabItem>

</Tabs>

Domyślnie Ulubione i punkty POI są wyświetlane bez nazw, aby nie zaśmiecać mapy tekstem. Nazwy można włączyć w menu Konfiguruj mapę.


## Punkty POI {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![Nakładka POI Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![Nakładka POI iOS](@site/static/img/map/poi_overlay_ios.png)

</TabItem>

</Tabs>

[Punkty POI](https://wiki.openstreetmap.org/wiki/Points_of_interest) to określone lokalizacje oznaczone symbolem na mapie. Wskazują interesujące lub użyteczne miejsca i obiekty i są częścią [Map wektorowych](../map/vector-maps.md).

Najważniejsze POI są wyświetlane na mapie automatycznie. Możesz jednak wybrać określony typ POI (np. *Restauracje*), a wszystkie zostaną podświetlone na mapie **pomarańczowym okręgiem** (począwszy od poziomu powiększenia 9).

Szczegółowe informacje o punkcie POI można znaleźć w [menu kontekstowym](../map/map-context-menu.md), które pojawia się po [dotknięciu](../map/map-context-menu.md#select-an-object-single-tap) punktu.


### Typy POI {#poi-types}

![Wybór pojedynczego POI](@site/static/img/map/single_selection_android.png) ![Wybór wielu POI](@site/static/img/map/multiple_selection_android.png)

Możesz wybrać jeden lub wiele ze standardowych typów POI OsmAnd lub utworzyć własny [filtr POI](../search/search-poi.md) i wybrać go, aby wyświetlić POI na mapie.

**Android**. Dotknij lewego dolnego przycisku, aby przełączać się między wyborem jednego lub wielu punktów POI.


### Styl mapy POI {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![POI w stylu mapy](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI w stylu topo](@site/static/img/map/poi_layer_topo_style.png)

</TabItem>

</Tabs>

Każdy typ POI w OsmAnd ma przypisaną określoną ikonę i kolor. [Poziom powiększenia](../map/vector-maps.md#details) i wygląd POI mogą się różnić w niektórych [stylach mapy](../map/vector-maps.md#default-map-styles).

[Przeczytaj więcej](../map/vector-maps.md#hide).


## Markery {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Markery mapy Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Markery mapy iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

[Markery mapy](../personal/markers.md) to tymczasowe punkty oznaczone na mapie jako flagi. Ich wygląd można dostosować za pomocą **strzałek** (Strzałki na mapie) i **wskazania odległości** (Linie kierunkowe).

Więcej o wyglądzie markerów można przeczytać w tym [artykule](../personal/markers#appearance-on-the-map).


## Punkty trasy {#track-waypoints}

![Ścieżka na mapie](@site/static/img/map/track_point_on_map.png)

Punkty trasy (punkty pośrednie) są częścią plików ścieżek (GPX). Punkty te są wyświetlane automatycznie, jeśli ścieżka znajduje się na mapie. Wyglądają i mogą być konfigurowane podobnie do [Ulubionych](#favorites) - ikona, nazwy, kolor, kształt. Jak utworzyć i dodać punkt pośredni, przeczytaj w [artykule](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).

[Przeczytaj więcej](../map/tracks/index.md) o ścieżkach na mapie.


## Wyniki wyszukiwania (POI) {#search-results-poi}

![Wyszukiwanie POI](@site/static/img/map/poi_search.png) ![Wynik wyszukiwania POI](@site/static/img/map/poi_search_result.png)

Wyniki wyszukiwania mogą być wyświetlane na mapie jako specjalna warstwa POI. Podczas wyszukiwania dotknij specjalnego wiersza (**<Translate android="true" ids="shared_string_show_on_map"/>**), aby wyświetlić POI na mapie.

Aby wyłączyć POI, naciśnij **X** w prawym górnym rogu.

Przeczytaj więcej o [wyszukiwaniu](../search/index.md).


## * Obrazy na poziomie ulicy {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Filtr Mapillary](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Widok ulicy Mapillary](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

[Obrazy na poziomie ulicy (Mapillary)](../plugins/mapillary.md) są wyświetlane jako zielone kropki na mapie. Do tych kropek dołączone są zdjęcia widoku ulicy. Możesz utworzyć [filtr](../plugins/mapillary.md#data-filtering) i wybrać zdjęcia, które chcesz wyświetlić na mapie. Aby otworzyć zdjęcie widoku ulicy, dotknij zielonej kropki.

Wymaga [wtyczki Mapillary](../plugins/mapillary.md).


## * Punkt parkingowy {#-parking-point}

![Ograniczone parkowanie](@site/static/img/map/context_menu_limited_parking.png) ![Nieograniczone parkowanie](@site/static/img/map/context_menu_unlimited_parking.png)

[Punkt parkingowy](../plugins/parking.md) to punkt oznaczony przez użytkowników na mapie w celu przechowywania informacji o dokładnej lokalizacji pojazdu. Można go podzielić na strefy parkowania bez ograniczeń i z ograniczeniami.

Wymaga [wtyczki Pozycja parkowania](../plugins/parking.md).


## * Wikipedia {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Wikipedia na mapie](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![Język Wikipedii - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

OsmAnd ma specjalne punkty POI oznaczone logo „W” i połączone z artykułami Wikipedii. Punkty te mogą być wyświetlane tak jak każdy inny typ POI, poprzez wyszukiwanie lub przechodząc do <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. Istnieje jednak specjalny sposób filtrowania artykułów Wikipedii według **dostępnych języków**.

[Przeczytaj więcej](../plugins/wikipedia.md) o tym, jak pobrać i używać funkcji Wikipedii w OsmAnd.


## * Punkty audio/wideo (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![AV POI](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Notatki audio/wideo to punkty z danymi audio, zdjęciami i wideo na mapie utworzone przez użytkowników.

Wymaga [wtyczki Notatki audio/wideo](../plugins/audio-video-notes.md).


## * Punkty edycji OSM {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![POI edycji OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![POI edycji OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

Punkty edycji OSM to POI utworzone przez użytkowników w celu dodania do [projektu OpenStreetMap](https://www.openstreetmap.org/).

Wymaga [wtyczki Edycja OSM](../plugins/osm-editing.md).


## * Notatki OSM {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Notatki OSM](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![Notatki OSM](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

Notatki OSM to tworzone przez użytkowników POI służące do zgłaszania problemów z danymi mapowymi w [OpenStreetMap](https://www.openstreetmap.org/). Nowe notatki (jeszcze nie przesłane do OpenStreetMap) są oznaczone na zielono znakiem **+**, zamknięte notatki są oznaczone na zielono znakiem „V”, a otwarte notatki są oznaczone na czerwono. Możesz dostosować poziom powiększenia do wyświetlania notatek i wybrać, czy pokazywać, czy ukrywać zamknięte notatki.

Wymaga [wtyczki Edycja OSM](../plugins/osm-editing.md).


## Punkty wzdłuż trasy {#points-along-the-route}

Punkty pośrednie, POI, punkty ulubione oraz notatki audio/wideo odnoszą się do koncepcji zapisywania lokalizacji i tras w [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Możesz użyć [tych samych tagów](../map/tracks/track-context-menu.md#display-custom-gpx-tags) do ich opisu i edycji.

[Punkty pośrednie](#track-waypoints) to pojedyncze punkty na mapie lub trasie. Mogą być używane do oznaczania określonych miejsc, które mogą być ważne dla nawigacji lub rejestrowania podróży. Na przykład, możesz utworzyć punkt pośredni na mapie, aby wskazać ważne skrzyżowanie lub zmianę kierunku.

[Punkty POI](#points-of-interest-pois) to miejsca o szczególnym znaczeniu dla użytkowników. Mogą to być punkty orientacyjne, restauracje, hotele, stacje benzynowe i inne interesujące miejsca, które możesz chcieć zanotować lub odwiedzić.

[Punkty ulubione](#favorites) to miejsca, które użytkownicy uważają za szczególnie ważne lub interesujące i zapisują na swojej liście ulubionych miejsc. Miejsca te mogą obejmować dowolną lokalizację, którą możesz chcieć znaleźć i wrócić do niej później.

[Notatki audio/wideo](#-audio--video-points-android--audio--video-points-android). W formacie GPX możesz zapisywać nagrania audio i wideo jako punkty pośrednie. Pozwala to na powiązanie plików multimedialnych z określonymi lokalizacjami na mapie lub trasie.

Wszystkie te typy punktów mogą być zapisywane w formacie GPX, aby dostarczyć informacji o lokalizacji i pomóc w nawigacji i planowaniu trasy. Służą one różnym celom, ale ogólna idea polega na przechowywaniu i przesyłaniu informacji geograficznych, abyś mógł ich używać w swoich zadaniach nawigacyjnych.


## Powiązane artykuły {#related-articles}

- [Menu konfiguracji mapy](../map/configure-map-menu.md)
- [Mapy wektorowe (Style mapy)](./vector-maps.md)
- [Mapy rastrowe (Online / Offline)](./raster-maps.md)

> *Ostatnia aktualizacja: czerwiec 2025*