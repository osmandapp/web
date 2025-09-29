---
source-hash: a6e0323cbd4db8c2fd02e4930fceccaef76a54dd4ddb8b27261785baf14b6d7c
sidebar_position: 7
title:  Punkty na mapie
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Przegląd {#overview}

Mapa może wyświetlać punkty takie jak [Ulubione](#favorites), [Użyteczne Miejsca (POI)](#points-of-interest-pois), [Znaczniki](#markers), [Wikipedia](#-wikipedia), [Wyniki wyszukiwania](#search-results-poi), [Notatki audio i wideo](#-audio--video-points-android) oraz [edycje OSM](#-osm-edit-points).


## Ulubione {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Warstwa Ulubionych Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Warstwa Ulubionych iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

[Ulubione](../personal/favorites.md) to specjalne punkty oznaczone przez użytkowników. Domyślnie pojawiają się na mapie jako żółte gwiazdki, chociaż można je dostosować za pomocą dowolnego koloru, kształtu i ikony. Stają się widoczne na mapie począwszy od 6 poziomu powiększenia.

:::info
W wersji OsmAnd na Androida można wyświetlać na mapie i podczas wyszukiwania tylko ulubione z określonych grup. Przejdź do *Menu → Moje miejsca → Ulubione*, dotknij &#8942; i wybierz *Pokaż na mapie* lub nie.
:::


## Nazwy ulubionych i POI {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Warstwa etykiet Ulubionych](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Warstwa etykiet Ulubionych](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

Domyślnie Ulubione i użyteczne miejsca (POI) są wyświetlane bez nazw, aby nie zaśmiecać mapy tekstem. Możesz włączyć nazwy w menu Konfiguruj mapę.  


## Użyteczne Miejsca (POI) {#points-of-interest-pois}

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

[Użyteczne miejsca (POI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) to określone lokalizacje oznaczone symbolem na mapie. Wskazują interesujące lub użyteczne miejsca i obiekty i są częścią [map wektorowych](../map/vector-maps.md).  

Najważniejsze POI są wyświetlane na mapie automatycznie. Można jednak wybrać określony typ POI (np. *Restauracje*), a wszystkie z nich zostaną podświetlone na mapie **pomarańczowym kółkiem** (począwszy od poziomu powiększenia 9).  

Szczegółowe informacje o użytecznym miejscu można znaleźć w [menu kontekstowym](../map/map-context-menu.md), które pojawia się po [dotknięciu](../map/map-context-menu.md#select-an-object-single-tap) punktu.  


### Typy POI {#poi-types}

![Wybór pojedynczego POI](@site/static/img/map/single_selection_android.png) ![Wybór wielu POI](@site/static/img/map/multiple_selection_android.png)

Możesz wybrać jeden lub wiele standardowych typów POI OsmAnd lub stworzyć własny [filtr POI](../search/search-poi.md) i wybrać go, aby wyświetlić POI na mapie.

**Android**. Dotknij lewego dolnego przycisku, aby przełączać się między wyborem jednego lub więcej użytecznych miejsc.


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

[Czytaj więcej](../map/vector-maps.md#hide).


## Znaczniki {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Znaczniki mapy Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Znaczniki mapy iOS](@site/static/img/map/map_markers_ios.png)  

</TabItem>

</Tabs>

[Znaczniki mapy](../personal/markers.md) to tymczasowe punkty oznaczone na mapie jako flagi. Ich wygląd można dostosować za pomocą **strzałek** (Strzałki na mapie) i **wskazania odległości** (Linie kierunku).  

Więcej o wyglądzie znaczników można przeczytać w tym [artykule](../personal/markers#appearance-on-the-map).


## Punkty trasy {#track-waypoints}

![Ślad na mapie](@site/static/img/map/track_point_on_map.png)

Punkty trasy (waypointy) są częścią plików śladu (GPX). Punkty te są wyświetlane automatycznie, jeśli ślad znajduje się na mapie. Wyglądają i mogą być konfigurowane podobnie do [Ulubionych](#favorites) - ikona, nazwy, kolor, kształt. Jak tworzyć i dodawać punkty trasy, przeczytaj w [artykule](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[Czytaj więcej](../map/tracks/index.md) o śladach na mapie.


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

[Obrazy na poziomie ulicy (Mapillary)](../plugins/mapillary.md) są wyświetlane na mapie jako zielone kropki. Do tych kropek dołączone są zdjęcia z widoku ulicy. Możesz utworzyć [filtr](../plugins/mapillary.md#data-filtering) i wybrać zdjęcia, które chcesz wyświetlić na mapie. Aby otworzyć zdjęcie z widoku ulicy, dotknij zielonej kropki.  

Wymaga [wtyczki Mapillary](../plugins/mapillary.md).


## * Miejsce parkingowe {#-parking-point}

![Parking ograniczony](@site/static/img/map/context_menu_limited_parking.png) ![Parking nieograniczony](@site/static/img/map/context_menu_unlimited_parking.png)

[Miejsce parkingowe](../plugins/parking.md) to punkt oznaczony przez użytkowników na mapie w celu przechowywania informacji o dokładnej lokalizacji pojazdu. Można go podzielić na strefy parkowania bez ograniczeń i z ograniczeniami.  

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

OsmAnd ma specjalne użyteczne miejsca oznaczone logo „W” i połączone z artykułami Wikipedii. Punkty te można wyświetlać tak jak każdy inny typ POI, poprzez wyszukiwanie lub przechodząc do <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. Istnieje jednak specjalny sposób filtrowania artykułów Wikipedii według **dostępnych języków**.  

[Czytaj więcej](../plugins/wikipedia.md), jak pobrać i używać funkcji Wikipedii w OsmAnd.


## * Punkty audio/wideo (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![AV POI](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Notatki audio/wideo to punkty z danymi audio, zdjęciami i wideo na mapie tworzone przez użytkowników.  

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

Punkty edycji OSM to POI tworzone przez użytkowników w celu dodania ich do [projektu OpenStreetMap](https://www.openstreetmap.org/).  

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

Notatki OSM to tworzone przez użytkowników POI do zgłaszania problemów z danymi mapy w [OpenStreetMap](https://www.openstreetmap.org/). Nowe notatki (jeszcze nie przesłane do OpenStreetMap) są oznaczone na zielono znakiem **+**, zamknięte notatki są oznaczone na zielono znakiem „V”, a otwarte notatki są oznaczone na czerwono. Możesz dostosować poziom powiększenia do wyświetlania notatek i wybrać, czy pokazywać, czy ukrywać zamknięte notatki.  

Wymaga [wtyczki Edycja OSM](../plugins/osm-editing.md).


## Punkty na trasie {#points-along-the-route}

Punkty trasy, POI, Ulubione punkty i notatki audio/wideo odnoszą się do koncepcji zapisywania lokalizacji i tras w formacie [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Możesz użyć [tych samych tagów](../map/tracks/track-context-menu.md#display-custom-gpx-tags) do ich opisywania i edytowania.  

[Punkty trasy](#track-waypoints) to pojedyncze punkty na mapie lub trasie. Mogą być używane do oznaczania określonych miejsc, które mogą być ważne podczas nawigacji lub rejestrowania podróży. Na przykład możesz utworzyć punkt trasy na mapie, aby wskazać ważne skrzyżowanie lub zmianę kierunku.  

[Użyteczne miejsca (POI)](#points-of-interest-pois) to miejsca szczególnego zainteresowania użytkowników. Mogą to być punkty orientacyjne, restauracje, hotele, stacje benzynowe i inne interesujące miejsca, które możesz chcieć zanotować lub odwiedzić.  

[Ulubione punkty](#favorites) to miejsca, które użytkownicy uważają za szczególnie ważne lub interesujące i zapisują na swojej liście ulubionych miejsc. Miejsca te mogą obejmować dowolną lokalizację, którą możesz chcieć znaleźć i do której wrócić później.

[Notatki audio/wideo](#-audio--video-points-android). W formacie GPX można zapisywać nagrania audio i wideo jako punkty trasy. Pozwala to na powiązanie plików multimedialnych z określonymi lokalizacjami na mapie lub trasie.  

Wszystkie te typy punktów można zapisać w formacie GPX, aby zapewnić informacje o lokalizacji i pomóc w nawigacji i planowaniu trasy. Służą one różnym celom, ale ogólną ideą jest przechowywanie i przesyłanie informacji geograficznych, aby można było ich używać w zadaniach nawigacyjnych.


## Powiązane artykuły {#related-articles}

- [Menu Konfiguruj mapę](../map/configure-map-menu.md)
- [Mapy wektorowe (Style mapy)](./vector-maps.md)
- [Mapy rastrowe (Online / Offline)](./raster-maps.md)