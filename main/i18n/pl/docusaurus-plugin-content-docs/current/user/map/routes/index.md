---
source-hash: f16263db8d987d5d802140c2f60261308cc6e1eb3b436559f0926217fa039b11
title:  Trasy
sidebar_position: 11
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

OsmAnd ma wiele zaawansowanych funkcji do wyświetlania różnych [tras](./types-of-routes.md) na mapie. Domyślnie trasy te są częścią [map wektorowych](../../map/vector-maps.md#routes) (dane OpenStreetMap), jednak podobną funkcjonalność zapewniają [ślady](../../map/tracks/index.md), które można utworzyć za pomocą narzędzia [Zaplanuj trasę](../../plan-route/create-route.md), zaimportować jako [ślady GPX](#save-as-a-track) lub nagrać za pomocą wtyczki [Nagrywanie podróży](../../plugins/trip-recording.md). Legenda map tras znajduje się [tutaj](../../map-legend/osmand.md#routes).


## Wyświetlanie tras na mapie {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) ![Routes Classes](@site/static/img/map/routes_classes_android.png)

- Aby wyświetlić wymagane trasy na mapie, włącz je na *liście Tras* w menu [Konfiguruj mapę](../../map/configure-map-menu.md).
- OsmAnd może wyróżniać [trasy obecne w OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Można je wybrać, dotykając [symbolu na trasie](#save-as-a-track), a jeśli widoczny zestaw tras jest poprawnie skonfigurowany, można podążać za kolorem i ikonami.
- Główne typy tras można również filtrować według klas i podklas, co pozwala wyświetlać tylko określone grupy w ramach każdego typu. Na przykład można wyświetlać trasy piesze według **symboli OSMC** jako klas oraz według sieci *międzynarodowych, krajowych, regionalnych* lub *lokalnych* jako podklas, które są obecnie dostępne po włączeniu wtyczki [OsmAnd Development](../../plugins/development.md).
- Możesz utworzyć ślad na podstawie tras za pomocą narzędzia [Zaplanuj trasę](../../plan-route/create-route.md). 
- Gdy kilka tras przebiega tą samą drogą, każda trasa jest wyświetlana jako oddzielna półprzezroczysta linia umieszczona nad innymi. 
- Po dotknięciu miejsca, w którym nakładają się liczne trasy, wyświetlane jest menu kontekstowe ze wszystkimi trasami przechodzącymi przez ten punkt. 
- Do wyświetlenia wszystkich elementów nowego schematu renderowania tras wymagane są zaktualizowane mapy wektorowe. 

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

- Aby wyświetlić wymagane trasy na mapie, włącz je na *liście Tras* w menu [Konfiguruj mapę](../../map/configure-map-menu.md).
- OsmAnd może wyróżniać [trasy obecne w OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Można je wybrać, dotykając [symbolu na trasie](#save-as-a-track), a jeśli widoczny zestaw tras jest poprawnie skonfigurowany, można podążać za kolorem i ikonami.
- Możesz utworzyć ślad na podstawie tras za pomocą narzędzia [Zaplanuj trasę](../../plan-route/create-route.md). 
- Gdy kilka tras przebiega tą samą drogą, każda trasa jest wyświetlana jako oddzielna półprzezroczysta linia umieszczona nad innymi.   

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Działania na trasach {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios_new.png) ![Route info](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

Na mapie możesz wybrać trasy [piesze, rowerowe, narciarskie, MTB, na motocykl terenowy, podróżnicze i inne](./types-of-routes.md). Tam, gdzie jest to dostępne, trasy piesze wyświetlają swoje oznakowanie za pomocą [symboli OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol); inne typy tras używają własnych oznaczeń.

Po dotknięciu **symbolu trasy** na mapie:

- Wyświetlana jest **lista pobliskich tras** w tym miejscu.
- Po wybraniu trasy z listy otwiera się [menu kontekstowe](../../map/tracks/track-context-menu.md) dla tej trasy, wyświetlające szczegółowe informacje i dostępne działania.
- Wybrana trasa jest otwierana w widoku śladu, umożliwiając interakcję z nią w taki sam sposób jak ze śladem GPX.

W **menu kontekstowym** możesz:

- Wyświetlić [dodatkowe informacje](#route-info-and-elevation) o wybranej trasie.
- [Zapisać trasę](#save-as-a-track) jako **ślad GPX**.
- [Rozpocząć nawigację](#start-navigation) wzdłuż trasy.

### Szczegóły obszaru wspinaczkowego i skały {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

Po wybraniu [obszaru wspinaczkowego lub skały](./types-of-routes.md#climbing-routes) OsmAnd udostępnia szczegółowe podsumowanie lokalizacji wspinaczkowej, w tym: nazwę i lokalizację, ocenę trudności wspinaczki (UIAA, francuska, YDS itp.), rodzaj skały, wysokość i długość trasy, jakość wspinaczki oraz warunki powierzchni.

### Informacje o trasie i profil wysokościowy {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr_new.png) ![Route info](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios_new.png) ![Route info](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

W menu kontekstowym widoczne będą następujące informacje:

- **Informacje o trasie**: nazwa trasy, link OSM (wymagana wtyczka OSM Editing), typ, opis, odległość, kierunek, podjazd/zjazd, zakres wysokości, sieć, operator, stan, kolor, trasa w obie strony, punkty początkowy/końcowy i inne.
- **Ogólne**: rozmiar, lokalizacja, data utworzenia.
- **Dodatkowe informacje**. Wyświetla typ aktywności.
- przyciski akcji: [Zapisz jako](#save-as-a-track) i [Rozpocznij nawigację](#start-navigation).
- [Informacje o wysokości](../../navigation/setup/route-details.md#elevation-info). Wyświetla informacje o danych wysokościowych na trasie.
- [Analizuj ślad na mapie](../../map/tracks/index.md#analyze-track-on-map). Wyświetla szczegółową analizę danych śladu za pomocą wykresów i map.

Aby wyświetlić wykres wysokości, nachylenia lub szczegółów wysokości dla wybranej trasy, po prostu dotknij dowolnej z następujących wartości w menu kontekstowym: **Odległość**, **Podjazd**, **Zjazd** lub **Wysokość**.

Możesz również otworzyć zakładkę *Ślad* i przełączyć się na widok *Wysokość*, aby zobaczyć pełny wykres wysokości trasy.

**Uwaga:** Dane wysokościowe są generowane automatycznie i mogą nieznacznie różnić się w zależności od dostępnych danych.

### Zapisz jako ślad {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Aby zapisać trasę jako *plik GPX*, dotknij przycisku **Zapisz (Pobierz)** w [panelu Informacje](../../map/tracks/track-context-menu.md#info-panel). Spowoduje to otwarcie panelu przycisków [Szybkie działania](../../map/tracks/track-context-menu.md#track-actions), gdzie będziesz mieć dostęp do działań na śladzie, takich jak zmiana [Wyglądu](../../map/tracks/appearance.md), [Nawigacji](../../navigation/setup/route-navigation.md) lub edycji [Zaplanuj trasę](../../plan-route/create-route.md). Zapisane trasy zachowują się tak samo jak inne ślady i są dostępne w Twojej kolekcji śladów.

### Rozpocznij nawigację {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Aby rozpocząć nawigację wzdłuż wybranej trasy OSM, dotknij przycisku **Rozpocznij nawigację** w [**panelu Informacje**](../../map/tracks/track-context-menu.md#info-panel).

Spowoduje to uruchomienie trybu [**Nawigacja po śladzie**](../../navigation/setup/gpx-navigation.md), umożliwiając podążanie trasą z podpowiedziami głosowymi i funkcjami nawigacji.

### Szybkie działania {#quick-actions}

Możesz dostosować, czy trasy są włączone czy wyłączone, za pomocą widżetu [Szybkie działanie](../../widgets/quick-action.md#configure-map).


## Wyszukiwanie tras {#routes-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png) ![Routes on the ground](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png) ![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>  

Znajdź trasy za pomocą funkcji [Wyszukiwania](../../search/index.md) według nazwy lub wybierając „Trasy” w sekcji [Kategorie](../../search/search-poi.md#).

Aby wyszukać, przejdź do menu *<Translate android="true" ids="search_button"/>* lub *<Translate android="true" ids="search_button,search_categories"/>* i wpisz swoją aktywność.

Przejdź do *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* aby znaleźć żądane trasy. Wyniki wyszukiwania tras wyświetlają nazwę trasy, typ aktywności, długość, lokalizację, podjazd/zjazd (na Androidzie) oraz odległość do najbliższego punktu. 

### Filtry tras {#routes-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2_new.png) ![Routes on the ground](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

W wynikach wyszukiwania tras dotknij przycisku **Filtry** w prawym górnym rogu, aby zawęzić listę. Ekran filtrów zawiera pole **Filtruj według nazwy**; blok **Typ** z opcjami *Biuro*, *Aneks pocztowy* i *Partner pocztowy*; oraz **dodatkowe kryteria**, które zależą od wybranej kategorii trasy lub aktywności, ponieważ każda kategoria może udostępniać własne cechy i wartości filtrów.

Możesz włączać lub wyłączać filtry za pomocą przełączników, a niektóre sekcje zawierają opcję *Pokaż wszystko*, aby wyświetlić dodatkowe wartości.


## Powiązane artykuły {#related-articles}

- [Menu kontekstowe mapy](../../map/map-context-menu.md)
- [Konfiguruj mapę](../../map/configure-map-menu.md)
- [Ślady](../../map/tracks/index.md)
- [Menu kontekstowe śladów](../../map/tracks/track-context-menu.md)
- [Transport publiczny](../public-transport.md)
- [Wygląd linii trasy nawigacji](../../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [Wyszukiwanie POI](../../search/search-poi.md#)
- [Typy tras](./types-of-routes.md)