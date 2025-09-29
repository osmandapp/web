---
source-hash: cc4a39deaa5305aa029009f3f9baff5a545f3a163336fd6ca3c80b085166c351
sidebar_position: 4
title:  Konfiguruj mapę
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Przegląd {#overview}

Menu **Konfiguruj mapę** jest ważnym elementem *Menu głównego* OsmAnd, w którym można dostosować wyświetlanie mapy do własnych potrzeb. Można na niej wyróżnić ulubione punkty, znaczniki nawigacyjne lub specjalne punkty POI, wyświetlać określone trasy lub pliki GPX innych firm, nakładać informacje o rzeźbie terenu, obrazy satelitarne lub inne dostępne obrazy rastrowe, wyświetlać informacje o transporcie publicznym i zmieniać styl mapy.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Sekcja **Pokaż**:

![Konfiguruj mapę android](@site/static/img/map/configure_map_show1_andr.png)  ![Konfiguruj mapę android](@site/static/img/map/configure_map_show2_andr.png)

Sekcja **Topografia**:

![Konfiguruj mapę android](@site/static/img/map/configure_map_topography_andr.png)

Sekcja **OpenStreetMap**:

![Konfiguruj mapę android](@site/static/img/map/configure_map_osm_andr.png)

Sekcje **Trasy i renderowanie mapy**:

![Konfiguruj mapę android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Konfiguruj mapę ios](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


Menu **<Translate android="true" ids="configure_map"/>** jest podzielone na dwie kategorie:

- [Parametry stylu mapy](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (lub **<Translate ios="true" ids="map_widget_renderer"/>**) to grupa ustawień, które pozwalają zmienić sposób wyświetlania mapy głównej.
- [Warstwy mapy](#map-layers). Warstwy te pozwalają na umieszczenie informacji na wierzchu (lub pod spodem) głównej warstwy mapy, ale nie zmieniają sposobu jej wyświetlania.

**Uwagi:**

- Aby zmienić informacje na ekranie (widżety, ikony), można dokonać ustawień w [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- Ustawienia Konfiguruj mapę zależą od twojego [profilu](../personal/profiles.md).
- Zwróć uwagę - menu Konfiguruj mapę **zamyka się** po dotknięciu pola mapy.

## Warstwy mapy {#map-layers}

- [Warstwa mapy wektorowej](../map/vector-maps.md) - wyświetla wszystkie informacje z mapy wektorowej, w tym OpenStreetMap, linie konturowe i dane nautyczne.
- [Źródła map rastrowych](../map/raster-maps.md#select-raster-maps) - pozwala na wybór podkładu / głównego źródła / nakładki mapy z poziomami przezroczystości.
- [Teren](../plugins/topography.md#hillshade-slope-and-altitude-layers) - wyświetla informacje o nachyleniu / cieniowaniu wzgórz, rzeźbę 3D.
- [Granice pobranych map](../map/vector-maps.md#show-borders) - wyświetla wszystkie granice pobranych map na głównej warstwie mapy.
- [Siatka współrzędnych](../map/vector-maps.md#coordinates-grid) - kontroluje widoczność siatki współrzędnych na mapie.

## Warstwy danych mapy {#map-data-layers}

   - [Ulubione](../map/point-layers-on-map.md) - wyświetla ulubione punkty.
   - [POI](../map/point-layers-on-map.md) - wyświetla punkty POI wybranych kategorii.
   - [Znaczniki mapy](../map/point-layers-on-map.md) - wyświetla znaczniki mapy.
   - [Etykiety nakładki](../map/point-layers-on-map.md) - pokazuje nazwy punktów i ulubionych na mapie.
   - [Transport](../map/vector-maps.md#transport) - pokazuje przystanki transportu publicznego.
   - [Trasy](../map/tracks/index.md) - wyświetla zaimportowane, zaplanowane lub nagrane trasy na mapie.
   - [Zdjęcia na poziomie ulicy](../plugins/mapillary.md#map-layer) - wyświetla punkty z dostępnymi zdjęciami na poziomie ulicy.
   - [Przewodniki turystyczne](../plan-route/travel-guides.md) - wyświetla przewodniki turystyczne na mapie.
   - [Wikipedia](../plugins/wikipedia.md) - podświetla artykuły z Wikipedii powiązane z mapą.
   - [Inne warstwy wtyczek](../plugins/index.md#configure-plugin) - wiele wtyczek dodaje swoje warstwy z dodatkowymi informacjami.

## Parametry stylu mapy {#map-style-parameters}

Ustawienia stylu mapy zależą od wyświetlanego głównego stylu mapy. Więcej na ten temat można przeczytać w artykule [Style map](../map/vector-maps).

   - [Styl mapy](../map/vector-maps.md#default-map-styles) - obejmuje OsmAnd (Miasto), Topo, Nautyczny i inne.
   - [Tryb mapy](../map/vector-maps.md#map-mode) - pozwala wybrać widok mapy i nawigację w zależności od pory dnia.
   - [Powiększenie mapy](../map/vector-maps.md#map-magnifier) - pozwala zmienić powiększenie mapy.
   - [Rozmiar tekstu](../map/vector-maps.md#text-size) - pozwala zwiększyć lub zmniejszyć rozmiar tekstu na mapie.
   - [Język mapy](../map/vector-maps.md#map-language) - pozwala wybrać preferowany język wyświetlany na mapie.
   - [Szczegóły](../map/vector-maps.md#details) - pokazuje określone obiekty.
   - [Ukryj](../map/vector-maps.md#hide) - ukrywa określone obiekty.
   - [Trasy](../map/vector-maps.md#routes) - pozwala na podświetlenie tras i ich symboli.


## Dostosowywanie interfejsu (Android) {#ui-customization-android}

Dla każdego wybranego profilu w systemie Android można zmienić kolejność elementów menu <Translate android="true" ids="configure_map"/>, ukryć elementy, zresetować ustawienia domyślne lub skopiować je z innego profilu. Pomoże to poprawić interakcję z aplikacją OsmAnd.

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Elementy Konfiguruj mapę](@site/static/img/settings/configure-screen-ui-customization.png)