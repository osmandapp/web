---
source-hash: 83d4ecf6d84f9f5018413830b5bf57a59206a20ae29a9582bf53a3d68c72d1e2
sidebar_position: 7
title:  Mapy rastrowe (Online / Offline)
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

<!--
<InfoIncompleteArticle/>
-->

## Przegląd {#overview}

Mapy rastrowe są znaczącym i użytecznym dodatkiem do map wektorowych OsmAnd. Pozwalają na łączenie różnych źródeł map z mapami wektorowymi. Na przykład informacje o wzgórzach i zboczach są wyświetlane jako warstwa rastrowa. Możesz wyświetlić nakładkę szlaków turystycznych, mapy opadów, dane o ruchu drogowym w czasie rzeczywistym oraz nakładkę zdjęć satelitarnych na półprzezroczystej mapie wektorowej. Możesz także przełączyć domyślne mapy na kafelki rastrowe w Internecie.

Mapy rastrowe w OsmAnd są zazwyczaj dostarczane jako zestaw małych obrazów (kafelków) ułożonych w siatkę. W przeciwieństwie do map wektorowych, które przechowują obiekty takie jak drogi, punkty i wielokąty jako dane, kafelki rastrowe to wstępnie renderowane obrazy i mogą wydawać się rozpikselizowane przy dużych poziomach powiększenia, ponieważ każdy piksel ma stałą wartość.

**Zalety:**
- Ponieważ mapy rastrowe są wstępnie renderowane, ładują się szybciej, eliminując potrzebę przetwarzania i renderowania danych przez urządzenie w czasie rzeczywistym.
- Mapy rastrowe mogą być ładowane dynamicznie podczas przeglądania.
- Możesz utworzyć pamięć podręczną offline i pobierać tylko brakujące kafelki w razie potrzeby.
- Możesz używać nieograniczonej liczby zewnętrznych źródeł internetowych dla map rastrowych, co czyni je elastycznymi dla różnych typów map, takich jak widoki satelitarne czy mapy specjalistyczne.
- Dane rastrowe, takie jak informacje o ruchu drogowym, mogą być regularnie aktualizowane po wygaśnięciu (np. co 20-30 minut, w zależności od konfiguracji).

**Wady:**
- Mapy rastrowe zajmują znacznie więcej miejsca niż mapy wektorowe. Na przykład mapa miasta może mieć 15 MB jako mapa wektorowa, ale wzrosnąć do 50 MB przy poziomie powiększenia 15, 200 MB przy poziomie 16 i do 800 MB przy poziomie 17.
- Nie można dotykać określonych miejsc ani obiektów na mapach rastrowych, aby uzyskać więcej informacji.
- Mapy rastrowe nie mogą być stylizowane ani modyfikowane w celu wykluczenia określonych obiektów.
- Zbyt duże powiększenie może powodować, że obraz będzie wyglądał na rozpikselowany, zwłaszcza jeśli kafelki o wysokiej rozdzielczości nie są dostępne.
- Nie można obracać mapy bez obracania tekstu, co może utrudniać czytanie etykiet.


## Przypadki użycia {#use-cases}

Mapy rastrowe mają szeroki zakres zastosowań. Oto niektóre z najpopularniejszych:

- Zdjęcia satelitarne jako podkład.
- Informacje o ruchu drogowym w czasie rzeczywistym.
- Prognoza opadów jako nakładka.
- Mapy topograficzne z cieniowaniem wzgórz i stoków.
- Aktywne trasy rowerowe i biegowe jako nakładka.
- Informacje o jednostkach pływających w czasie rzeczywistym.
- Kafelki OpenStreetMap online do edycji OSM.

![Przegląd map online](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
Możesz także zmienić [główne źródło](#main) map z map wektorowych na kafelki online.
:::


## Rozpoczęcie pracy {#getting-started}

**Włącz wtyczkę**.

- **iOS**. W przypadku *iOS* ta funkcja działa domyślnie.
- **Android**. W przypadku *Androida*, aby używać map rastrowych w OsmAnd, musisz włączyć [wtyczkę Mapy online](../plugins/online-map.md). Wykonaj następujące kroki: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**[Zmień parametry warstwy](#layers)**. Aby poprawić widoczność i mieszanie warstw map rastrowych, możesz dostosować przezroczystość warstwy za pomocą suwaka na ekranie. Dodatkowo możesz modyfikować styl mapy wektorowej, ukrywając wielokąty, co sprawia, że warstwy podkładu są bardziej widoczne. Jest to szczególnie przydatne podczas oglądania zdjęć satelitarnych.


## Warstwy {#layers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Pokaż mapy](@site/static/img/plugins/online-maps/show-maps-andr_new.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Pokaż mapy](@site/static/img/plugins/online-maps/show-maps-ios_new.png)  

</TabItem>

</Tabs>

W OsmAnd mapy rastrowe mogą służyć jako dodatkowe źródło map obok domyślnych map wektorowych, które są zoptymalizowane do użytku offline.  

Masz możliwość dodania jednej lub dwóch warstw kafelków online, aby uzupełnić swoją mapę bazową. Pozwala to na jednoczesne wyświetlanie do trzech warstw map na ekranie (plus Teren). Pomyśl o nich jak o cieście: [**Podkład**](#underlay) (rastrowa baza poniżej), [**Główna**](#main) (wektorowa* lub rastrowa rdzeń), [**Nakładka**](#overlay) (rastrowa na wierzchu), z [**Terenem**](#terrain) cieniowaniem nad wszystkim. Na przykład możesz mieć mapę wektorową offline OsmAnd jako główną bazę, nałożyć na nią widok satelitarny i umieścić mapę ścieżek rowerowych jako podkład dla dodatkowych szczegółów.

>[Mapy wektorowe](./vector-maps.md) są dostępne **tylko** w warstwie [Głównej](#main) (i są tam domyślne). Mapy rastrowe mogą być używane we wszystkich trzech warstwach: Głównej, Podkładu i Nakładki.

Jeśli chcesz szybciej przełączać te warstwy ([Główne źródło mapy](#main), [Nakładka](#overlay), [Podkład](#underlay) i [Teren](#terrain)), możesz dodać [Szybką akcję (Niestandardowy przycisk)](../widgets/quick-action.md) na ekran mapy i przypisać do niej odpowiednie akcje map.

Możesz również dostosować przezroczystość mapy bazowej, aby połączyć ją z warstwami. W razie potrzeby możesz włączyć suwak przezroczystości na głównym ekranie, aby szybko dokonywać regulacji.

### Główna {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,gpx_add_track"/>*  

![Pokaż mapy](@site/static/img/plugins/online-maps/map_source_1.png) ![Pokaż mapy](@site/static/img/plugins/online-maps/map_source_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps,map_settings_install_more"/>*  

![Pokaż mapy](@site/static/img/plugins/online-maps/map_type_new.png)

</TabItem>

</Tabs>

Domyślnie główna mapa jest ustawiona na [Mapy wektorowe offline](./vector-maps.md) (mapy OsmAnd), zoptymalizowane do użytku offline. Możesz wybrać inne źródło mapy z listy (_Dodaj więcej_(Android) lub _Zainstaluj więcej_ (iOS)) lub [dodać](#add-new-online-source) własne.

### Nakładka {#overlay}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Konfiguracja podkładu / nakładki Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Konfiguracja podkładu / nakładki iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. *Włącz/wyłącz* warstwę mapy nakładki.
2. *Przezroczystość nakładki* (*Android*) / *Przezroczystość* mapy nakładki (*iOS*).
3. *Pokaż suwak przezroczystości* (*Android*) / *Pokaż suwak na mapie* (*iOS*). Szybki dostęp do ustawienia przezroczystości.
4. *Źródło mapy nakładki* (*Android*) / *Dostępne warstwy* (*iOS*). Wybierz mapę kafelkową online z listy, aby dodać ją bezpośrednio jako warstwę nakładki.
5. *Pokaż symbole mapy* - takie jak tekst, znaki drogowe i inne.  
6. *Dodaj źródło online* (*iOS*). [Dodaj nowe źródło online](#add-new-online-source).
7. *Importuj z dokumentów* (*iOS*).

### Podkład {#underlay}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Konfiguracja podkładu / nakładki Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Konfiguracja podkładu / nakładki iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. *Włącz/wyłącz* mapę podkładu.
2. *Przezroczystość mapy bazowej*.
3. *Pokaż suwak przezroczystości* (*Android*) / *Pokaż suwak na mapie* (*iOS*). Szybki dostęp do ustawienia przezroczystości.
4. *Źródło mapy podkładu* (*Android*) / *Dostępne warstwy* (*iOS*). Wybierz mapę kafelkową online z listy, aby dodać ją bezpośrednio jako warstwę podkładu.
5. *Pokaż/Ukryj wielokąty*.
6. *Dodaj źródło online* (*iOS*). [Dodaj nowe źródło online](#add-new-online-source).
7. *Importuj z dokumentów* (*iOS*).

### Teren {#terrain}

![Warstwy terenu](@site/static/img/plugins/online-maps/terrain_two_layers.png)

W kontekście map rastrowych [Teren](../plugins/topography.md#terrain) odnosi się do warstwy cieniowania rzeźby, która pomaga wizualizować kształt krajobrazu na płaskiej mapie. Ta warstwa opiera się na danych rastrowych terenu i jest wyświetlana na wierzchu mapy bazowej, aby poprawić percepcję nachyleń i form terenu.

Cieniowanie terenu to jedna z warstw rastrowych dostępnych w OsmAnd i reprezentuje kolorową wizualizację rzeźby uzyskaną z danych wysokościowych. 

Aby używać warstwy Teren, musisz:

1. Zakupić wtyczkę Topografia:
    - [Zakupy na Androida](../purchases/android.md)
    - [Zakupy na iOS](../purchases/ios.md)
2. Włączyć [wtyczkę Topografia](../plugins/topography.md):  
    *Menu → Wtyczki → ︙ → Włącz*
3. Wybrać wymagany region i pobrać Cieniowanie lub Nachylenie (dla Maps+) lub Mapę terenu 3D (dla Pro).
4. Proces pobierania może zająć trochę czasu, w zależności od wielkości wybranego regionu i prędkości połączenia internetowego.

Wizualizacja terenu może być łączona z innymi warstwami rastrowymi oraz z domyślną mapą wektorową.

Bardziej zaawansowane funkcje terenu, w tym rzeźba 3D (tylko Pro) i dodatkowe opcje związane z terenem, są opisane w artykule [Topografia](../plugins/topography.md).

<!--
## Hillshade / Slope {#hillshade--slope}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Hillshade** and **Slope** are offline raster maps that show terrain relief. They are displayed as a special map layer, a second overlay on the base map. The maps contain additional elevation information to help you more accurately understand the slope and shadows of the landscape. *Hillshade* and *Slope* information is based on data from a single source, the *Global planet file*, and is divided into regions.  

You don't need to switch between Hillshade and Slope layers, as they are merged automatically. You can select only one of these layers to display on the map, but you also have the option to combine them both [as an underlay or overlay](#layers) on other layers for a more visual representation of the terrain.

To get started with Hillshade and Slope you need to:

1. Purchase the Topography plugin:
    - [Android purchases](../purchases/android.md)
    - [iOS purchases](../purchases/ios.md)
2. Enable the [Topography plugin](../plugins/topography.md):  
    *Menu → Plugins → ︙ → Enable*
3. Select your required region, and download **Terrain map (3D)**.
4. The download process may take some time, depending on the size of the selected region and the speed of your Internet connection.


### Hillshade and 3D Relief {#hillshade-and-3d-relief}

| Hillshade | 3D Relief |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

The difference of relief display on the map when applying these settings is described in the **Topography** article in the corresponding section [Hillshade and 3D Relief](../plugins/topography.md#hillshade-and-3d-relief).


### Configure Display Options {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terrain layers](@site/static/img/plugins/online-maps/terrain_layers.png)

You can customize the zoom level to display and the transparency for Hillshade and Slope. You can read more in the [Topography article](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## 3D Relief {#3d-relief}

:::note
[3D Relief](../plugins/topography.md#3d-relief) is an [**OsmAnd Pro**](../purchases/index.md) paid feature <ProFeature />.
:::

![Terrain layers](@site/static/img/plugins/online-maps/raster_maps_3d.png)

The [**3D Relief** feature](../plugins/topography.md#3d-relief) is a mapping technology that allows the visualization of terrain on a map using three-dimensional models. This feature adds elevation information to a normal two-dimensional map, which creates a 3D and depth effect and allows you to better visualize the terrain.  

*To start using 3D Relief*:  
You need to purchase [OsmAnd Pro purchase plan](../plugins/index.md#purchase), enable the [Topography plugin](../plugins/topography.md), and switch on the [3D Relief](../plugins/topography.md#3d-relief) item in *Menu →  Configure map*.


*How the 3D Relief feature works*:  
*1.* To create a 3D relief, OsmAnd receives information about the terrain elevation.  
*2.* Based on the elevation data, a 3D model is created to display mountains, hills, valleys, and other terrain elements on the map.  
*3.* OsmAnd then displays these three-dimensional models on a flat map. The map can be zoomed in, zoomed out, and rotated to view the terrain from different angles and perspectives.  
*4.* The display of contour lines on the map does not depend on whether the map source is online or offline.
-->


## Przygotuj/Kopiuj mapy {#preparecopy-maps}

Istnieje wiele sposobów dodawania nowej mapy rastrowej, kopiowania jej z innego urządzenia, przygotowywania na komputerze PC i wstępnego pobierania kafelków do użytku offline. Na przykład możesz utworzyć własny pakiet map na komputerze PC za pomocą specjalnego oprogramowania, takiego jak [MOBAC, OsmAndMapCreator itp.](../../technical/map-creation/index.md). Zazwyczaj mapy rastrowe są dystrybuowane jako pliki z rozszerzeniem `.sqlitedb`.

Oto główne metody dodawania nowego źródła map rastrowych, które nie jest jeszcze zdefiniowane w OsmAnd:

- Otwórz gotowy do użycia plik `.sqlitedb` za pomocą OsmAnd.
- Zaimportuj pakiet z przygotowanymi mapami online z innej aplikacji OsmAnd jako specjalny **pakiet** `.osf` za pomocą [funkcji Importu / eksportu](../personal/import-export.md).
- Utwórz nowe źródło map online na samym urządzeniu mobilnym.
- Przygotuj magiczny adres URL z parametrami źródła map online i otwórz go za pomocą OsmAnd.


### Dodaj nowe źródło online {#add-new-online-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add_manually"/>*

![Dodaj źródło online](@site/static/img/plugins/online-maps/add-online-source-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

![Dodaj źródło online](@site/static/img/plugins/online-maps/add-online-source-2_ios.png)

</TabItem>

</Tabs>

Aby utworzyć źródło mapy rastrowej, musisz znać **URL kafelka**, który jest specyficznym adresem URL dystrybuującym kafelki map w odwzorowaniu Mercatora. Na przykład adres URL kafelka może wyglądać tak: `https://tile.osmand.net/hd/6/55/25.png`, gdzie `tile.osmand.net/hd/` to podstawowy adres URL.

Oto kluczowe parametry do skonfigurowania podczas ustawiania nowego źródła map online:

| Parametr | Opis |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Podaj nazwę dla nowego źródła map online. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Wprowadź lub wklej adres URL źródła kafelków online. Upewnij się, że jest zgodny z formatem adresu URL kafelka. Adres URL może zawierać określone symbole zastępcze, które OsmAnd automatycznie zastąpi w zależności od konkretnego potrzebnego kafelka. Najczęściej używane symbole zastępcze opierają się na [konwencji nazw kafelków mapy slippy OpenStreetMap](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames): <ul><li>`{z}` lub `{0}`: Poziom powiększenia</li><li>`{x}` lub `{1}`: Indeks kafelka X</li><li>`{y}` lub `{2}`: Indeks kafelka Y</li></ul> Przykłady mniej powszechnie używanych symboli zastępczych znajdziesz w [predefiniowanych źródłach map rastrowych online](https://github.com/osmandapp/web/blob/main/main/static/tile_sources.xml). |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Ten parametr wpływa na sposób wyświetlania mapy. <br/><ul><li>Jako *typ mapy*, mapa będzie ograniczona do wybranych poziomów powiększenia.</li><li>Jako *nakładka/podkład*, mapa pojawi się na wybranych poziomach powiększenia, z zastosowaniem skalowania w górę lub w dół poza tymi poziomami.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Ustaw czas (w minutach), po którym buforowane kafelki zostaną odświeżone. Możesz pozostawić to pole puste, jeśli nie chcesz, aby kafelki przeładowywały się automatycznie. <br/><ul><li>1 dzień = 1440 minut</li><li>1 tydzień = 10 080 minut</li><li>30 dni = 43 200 minut</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Wybierz między *odwzorowaniem Pseudo-Mercatora* a *odwzorowaniem eliptycznym Mercatora*, w zależności od źródła. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Wybierz sposób przechowywania kafelków: w *pliku SQLiteDB* lub jako *jeden plik obrazu na kafelek*. |


### Magiczny URL do instalacji źródła mapy {#magic-url-to-install-map-source}

Mapy online można dodać za pomocą specjalnego linku do listy map rastrowych OsmAnd. Kliknij ten link i wybierz OsmAnd do otwarcia:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parametr linku|Przykład|
|:--------|:---------------|
| [Część stała]| `http://osmand.net/add-tile-source` |
|[Separatory]| ?   & |
|[Nazwa]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Poziomy powiększenia]|min_zoom=9 / max_zoom=15|

Znajdziesz dodaną mapę online na liście menu [Główna / Podkład / Nakładka](#layers).


## Zarządzaj danymi map {#manage-map-data}

Mapy rastrowe mogą zajmować znaczną ilość miejsca na dysku, więc może być konieczne regularne sprawdzanie tego. W przypadku dużych zbiorów danych zaleca się używanie *źródła rastrowego SQLite*, ponieważ przechowuje ono wszystkie kafelki w jednym dużym pliku (baza danych SQLite).

- [**Format SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Format Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

Aby zmienić format kafelków, możesz wybrać <Translate android="true" ids="storage_format"/> w menu edycji map online:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → wybierz mapę online →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Wyczyść pamięć podręczną kafelków {#clear-tile-cache}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → wybierz mapę online →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*

![Lista źródeł online](@site/static/img/plugins/online-maps/clear_cache_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*

![Lista źródeł online](@site/static/img/plugins/online-maps/clear_cache_ios.png)
</TabItem>

</Tabs>

Kafelki są przechowywane w pamięci podręcznej podczas korzystania z map rastrowych online jako warstwy głównej / nakładki / podkładu. Możesz zobaczyć rozmiar pliku SQ Lite pod nazwą mapy online na liście. Czasami wymagane jest regularne czyszczenie, aby przyspieszyć wyświetlanie kafelków lub zaktualizować dane.  

### Pobierz / Zaktualizuj kafelki {#download--update-tiles}

Jeśli chcesz mieć dostęp do map rastrowych w trybie offline, może być konieczne wstępne załadowanie kafelków. Można to zrobić na urządzeniu mobilnym, ale należy pamiętać, że niektóre usługi mogą blokować pobieranie dużych pakietów. Możesz również użyć tej samej funkcji do aktualizacji już pobranych kafelków dla wybranych obszarów, w przeciwnym razie OsmAnd będzie nadal wyświetlać kafelki, które są już przechowywane w pamięci podręcznej.  

Aby mapy automatycznie aktualizowały kafelki po pewnym czasie, możesz ustawić [Czas wygaśnięcia](#add-new-online-source), wtedy OsmAnd przeładuje kafelki, gdy tylko zostaną wyświetlone.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="raster-maps"/></td>
    </tr>
</table>  

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Pobierz kafelki iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Aby pobrać lub zaktualizować kafelki rastrowe, musisz wybrać źródło mapy online jako [Główne źródło mapy](#layers) (**Android / iOS**). Możesz również wybrać kafelki online osobno dla mapy [Nakładki](#overlay) lub dla [Podkładu](#underlay) (Tylko dla **Androida**).

- W wersji aplikacji OsmAnd na **Androida** musisz wybrać obszar zgodnie z rozmiarem ekranu urządzenia i długo nacisnąć mapę. Następnie wybierz [*Akcje*](../map/map-context-menu.md#update--download-online-maps) w menu kontekstowym mapy i opcję *Pobierz mapę* lub *Zaktualizuj mapę*. Na ekranie Pobierz mapę wprowadź zmiany w niezbędnych ustawieniach i dotknij Pobierz.  

- W wersji aplikacji OsmAnd na **iOS** musisz długo nacisnąć mapę, a następnie wybrać [*Akcje*](../map/map-context-menu.md#update--download-online-maps) i opcję *Pobierz mapę* lub *Zaktualizuj mapę* z menu kontekstowego mapy. Na ekranie Pobierz mapę możesz wybrać wymagany obszar i zmodyfikować niezbędne ustawienia. Po ustawieniu wszystkich parametrów możesz zobaczyć liczbę kafelków i rozmiar pobierania.


### Zmień parametry {#change-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → wybierz mapę online →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Mapy rastrowe mogą być używane w takiej postaci, w jakiej już istnieją, jeśli kafelki są już zmapowane. Jeśli mapy rastrowe są dostarczane online, zawsze istnieje podstawowy adres URL, który należy skonfigurować. Istnieje kilka bardziej podstawowych parametrów, które można zmienić dla map rastrowych, o czym można przeczytać w [tej sekcji](#add-new-online-source) artykułu. Bardziej złożone parametry są zakodowane w wewnętrznych komponentach [formatu SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## Powiązane artykuły {#related-articles}

- [Import / Eksport](../personal/import-export.md)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)
- [Szybka akcja (Niestandardowy przycisk)](../widgets/quick-action.md)
- [Mapy online](../plugins/online-map.md)
- [Topografia](../plugins/topography.md)
- [Tworzenie map rastrowych i wektorowych offline](technical/map-creation/create-offline-maps-yourself.md)