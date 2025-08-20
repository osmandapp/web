---
source-hash: 8c47a63c8420d1c5228963331f215a7aa5c8808f6c030e2e1fc5ca817821edbb
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

Menu **Konfiguruj mapę** jest ważnym elementem *Menu głównego* OsmAnd, w którym możesz dostosować wyświetlanie mapy do swoich potrzeb. Możesz wyróżnić ulubione punkty, znaczniki nawigacyjne lub specjalne punkty POI na mapie, wyświetlić określone trasy lub pliki GPX innych firm, nałożyć informacje o terenie, zdjęcia satelitarne lub inne dostępne obrazy rastrowe, wyświetlić informacje o transporcie publicznym i zmienić styl mapy.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Sekcja **Pokaż**:

![Konfiguruj mapę Android](@site/static/img/map/configure_map_show1_andr.png) ![Konfiguruj mapę Android](@site/static/img/map/configure_map_show2_andr.png)

Sekcja **Topografia**:

![Konfiguruj mapę Android](@site/static/img/map/configure_map_topography_andr.png)

Sekcja **OpenStreetMap**:

![Konfiguruj mapę Android](@site/static/img/map/configure_map_osm_andr.png)

Sekcje **Trasy i renderowanie mapy**:

![Konfiguruj mapę Android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Konfiguruj mapę iOS](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


Menu **<Translate android="true" ids="configure_map"/>** jest podzielone na dwie kategorie:

- [Parametry stylu mapy](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (lub **<Translate ios="true" ids="map_widget_renderer"/>**) to grupa ustawień, które pozwalają zmienić sposób wyświetlania głównej mapy.
- [Warstwy mapy](#map-layers). Te warstwy pozwalają umieszczać informacje na wierzchu (lub pod spodem) głównej warstwy mapy, ale nie zmieniają wyświetlania samej mapy.

**Uwagi:**

- Aby zmienić informacje na ekranie (widżety, ikony), możesz dokonać ustawień w [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- Ustawienia konfiguracji mapy zależą od Twojego [profilu](../personal/profiles.md).
- Zwróć uwagę - menu Konfiguruj mapę **zamyka się** po dotknięciu pola mapy.

## Warstwy mapy {#map-layers}

- [Warstwa mapy wektorowej](../map/vector-maps.md) - wyświetla wszystkie informacje mapy wektorowej, w tym OpenStreetMap, linie konturowe i dane morskie.
- [Źródła rastrowe mapy](../map/raster-maps.md#select-raster-maps) - pozwala wybrać mapę podkładową / główną / nakładkową z poziomami przezroczystości.
- [Teren](../plugins/topography.md#hillshade-slope-and-altitude-layers) - wyświetla informacje o nachyleniu / cieniowaniu wzgórz, ulgę 3D.
- [Granice pobranych map](../map/vector-maps.md#show-borders) - wyświetla wszystkie granice pobranych map na głównej warstwie mapy.
- [Siatka współrzędnych](../map/vector-maps.md#coordinates-grid) - kontroluje widoczność siatki współrzędnych na mapie.

## Warstwy danych mapy {#map-data-layers}

- [Ulubione](../map/point-layers-on-map.md) - wyświetla ulubione punkty.
- [POI](../map/point-layers-on-map.md) - wyświetla punkty POI wybranych kategorii.
- [Znaczniki mapy](../map/point-layers-on-map.md) - wyświetla znaczniki mapy.
- [Etykiety nakładki](../map/point-layers-on-map.md) - pokazuje nazwy punktów i ulubionych na mapie.
- [Transport](../map/vector-maps.md#transport) - pokazuje przystanki transportu publicznego.
- [Ślady](../map/tracks/index.md) - wyświetla zaimportowane, zaplanowane lub nagrane ślady na mapie.
- [Obrazy na poziomie ulicy](../plugins/mapillary.md#map-layer) - wyświetla punkty z dostępnymi obrazami na poziomie ulicy.
- [Przewodniki turystyczne](../plan-route/travel-guides.md) - wyświetla przewodniki turystyczne na mapie.
- [Wikipedia](../plugins/wikipedia.md) - wyróżnia artykuły z Wikipedii połączone z mapą.
- [Inne warstwy wtyczek](../plugins/index.md#configure-plugin) - wiele wtyczek dodaje swoje warstwy z dodatkowymi informacjami.

## Parametry stylu mapy {#map-style-parameters}

Ustawienia stylu mapy zależą od wyświetlanego głównego stylu mapy. Więcej na ten temat można przeczytać w artykule [Style mapy](../map/vector-maps).

- [Styl mapy](../map/vector-maps.md#default-map-styles) - zawiera OsmAnd (Miasto), Topo, Morską i inne.
- [Tryb mapy](../map/vector-maps.md#map-mode) - pozwala wybrać widok mapy i nawigację w zależności od pory dnia.
- [Lupa mapy](../map/vector-maps.md#map-magnifier) - pozwala zmienić powiększenie mapy.
- [Rozmiar tekstu](../map/vector-maps.md#text-size) - pozwala zwiększyć lub zmniejszyć rozmiar tekstu na mapie.
- [Język mapy](../map/vector-maps.md#map-language) - pozwala wybrać preferowany język wyświetlany na mapie.
- [Szczegóły](../map/vector-maps.md#details) - pokazuje konkretne obiekty.
- [Ukryj](../map/vector-maps.md#hide) - ukrywa konkretne obiekty.
- [Trasy](../map/vector-maps.md#routes) - pozwala wyróżnić trasy i ich symbole.

## Dostosowywanie interfejsu użytkownika (Android) {#ui-customization-android}

Dla każdego wybranego profilu w systemie Android możesz zmienić kolejność elementów menu <Translate android="true" ids="configure_map"/>, ukryć elementy, zresetować ustawienia domyślne lub skopiować je z innego profilu. Pomoże to poprawić interakcję z aplikacją OsmAnd.

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Elementy konfiguracji mapy](@site/static/img/settings/configure-screen-ui-customization.png)


> *Ostatnia aktualizacja: luty 2025*