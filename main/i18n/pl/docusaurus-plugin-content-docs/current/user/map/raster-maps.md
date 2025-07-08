---
source-hash: 6440fdee359258c90a307e6a849f0a56cb8aff804825ed546cc7fe715c717ae7
sidebar_position: 6
title: Mapy rastrowe (online / offline)
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


<InfoIncompleteArticle/>

## Przegląd {#overview}

Mapy rastrowe są istotnym i użytecznym uzupełnieniem map wektorowych OsmAnd. Umożliwiają one łączenie różnych źródeł map z mapami wektorowymi. Na przykład informacje o wzniesieniach i zboczach są wyświetlane jako warstwa rastrowa. Możesz wyświetlić nakładkę szlaków turystycznych, map deszczu, danych o ruchu drogowym w czasie rzeczywistym oraz nakładkę zdjęć satelitarnych na półprzezroczystej bazowej mapie wektorowej. Możesz także przełączyć domyślne mapy na kafelki rastrowe w sieci.


## Przypadki użycia {#use-cases}

Mapy rastrowe mają szeroki zakres zastosowań. Oto niektóre z najpopularniejszych:

- Zdjęcia satelitarne jako podkład.
- Informacje o ruchu drogowym w czasie rzeczywistym.
- Prognoza deszczu jako nakładka.
- Mapy topograficzne z cieniowaniem wzgórz i zboczy.
- Aktywne trasy rowerowe i biegowe jako nakładka.
- Informacje o statkach w czasie rzeczywistym.
- Kafelki OpenStreetMap online do edycji OSM.

![Online maps overview](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
Możesz również zmienić główne źródło map z map wektorowych na kafelki online.
:::


## Mapy rastrowe {#raster-maps}

Mapy online w OsmAnd składają się z danych rastrowych, które składają się z pikseli (nazywanych również komórkami siatki) – zasadniczo zestawu małych obrazów znanych jako kafelki. W przeciwieństwie do map wektorowych, które reprezentują dane takie jak drogi, punkty i poligony za pomocą informacji binarnych, kafelki map rastrowych są ułożone w siatkę i mogą wydawać się pikselowane przy wysokich poziomach powiększenia, ponieważ każdy piksel ma stałą wartość lub klasę.

#### Porównanie z domyślnymi mapami wektorowymi {#comparison-to-default-vector-maps}

**Zalety:**

- Ponieważ mapy rastrowe są wstępnie renderowane, ładują się szybciej, eliminując potrzebę przetwarzania i renderowania danych w czasie rzeczywistym przez urządzenie.
- Mapy rastrowe mogą być ładowane dynamicznie podczas przeglądania.
- Możesz utworzyć pamięć podręczną offline i pobierać tylko brakujące kafelki w razie potrzeby.
- Możesz używać nieograniczonej liczby zewnętrznych źródeł internetowych dla map rastrowych, co czyni je elastycznymi dla różnych typów map, takich jak widoki satelitarne lub mapy specjalistyczne.
- Dane rastrowe, takie jak informacje o ruchu drogowym, mogą być regularnie aktualizowane po wygaśnięciu (np. co 20-30 minut, w zależności od konfiguracji).

**Wady:**

- Mapy rastrowe zajmują znacznie więcej miejsca niż mapy wektorowe. Na przykład mapa miasta może mieć 15 MB jako mapa wektorowa, ale wzrosnąć do 50 MB przy poziomie powiększenia 15, 200 MB przy poziomie powiększenia 16 i do 800 MB przy poziomie powiększenia 17.
- Nie można dotknąć konkretnych miejsc lub obiektów na mapach rastrowych, aby uzyskać więcej informacji.
- Mapy rastrowe nie mogą być stylizowane ani modyfikowane w celu wykluczenia konkretnych obiektów.
- Zbyt duże powiększenie może spowodować, że obraz będzie wyglądał na pikselowany, zwłaszcza jeśli nie są dostępne kafelki o wysokiej rozdzielczości.
- Nie można obracać mapy bez obracania tekstu, co może utrudniać czytanie etykiet.


## Jak używać map rastrowych {#how-to-use-raster-maps}

**Włącz wtyczkę**.

- **iOS**. W przypadku *iOS* ta funkcja działa domyślnie.
- **Android**. W przypadku *Androida*, aby używać map rastrowych w OsmAnd, musisz włączyć [wtyczkę map online](../plugins/online-map.md). Wykonaj następujące kroki: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Zmień parametry warstwy**. Aby poprawić widoczność i mieszanie warstw map rastrowych, możesz dostosować przezroczystość warstwy za pomocą suwaka ekranowego. Dodatkowo możesz zmodyfikować styl mapy wektorowej, ukrywając poligony, dzięki czemu warstwy podkładowe będą bardziej widoczne. Jest to szczególnie przydatne podczas przeglądania zdjęć satelitarnych.


## Wybierz mapy rastrowe {#select-raster-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

W OsmAnd mapy rastrowe mogą służyć jako dodatkowe źródło mapy obok domyślnych map wektorowych, które są zoptymalizowane do użytku offline.

Masz możliwość dodania jednej lub dwóch warstw kafelków online, aby uzupełnić swoją mapę bazową. Pozwala to na jednoczesne wyświetlanie do trzech warstw mapy na ekranie. Na przykład, możesz mieć mapę wektorową offline OsmAnd jako bazę, nałożyć na nią widok satelitarny i umieścić mapę ścieżek rowerowych jako podkład dla dodatkowych szczegółów.

Możesz również dostosować przezroczystość mapy bazowej, aby połączyć ją z warstwami. W razie potrzeby możesz włączyć suwak przezroczystości na ekranie głównym, aby szybko dokonać regulacji.


### Główne {#main}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Możesz wybrać styl mapy z listy lub [dodać](#add-new-online-raster-map-source) własny.


### Warstwa nakładki {#overlay-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. *Włącz/wyłącz* mapę podkładową.
2. *Przezroczystość nakładki* (*Android*)/ *Przezroczystość* mapy nakładki (*iOS*).
3. *Pokaż suwak przezroczystości* (*Android*) / *Pokaż suwak na mapie* (*iOS*). Szybki dostęp do ustawienia przezroczystości.
4. *Źródło mapy nakładki* (*Android*) / *Dostępne warstwy* (*iOS*). Możesz wybrać mapę kafelkową do zainstalowania lub zaktualizowania.
5. *Pokaż symbole mapy* - takie jak tekst, znaki drogowe i inne.
6. *Dodaj źródło online* (*iOS*).
7. *Importuj z dokumentów* (*iOS*).


### Warstwa podkładowa {#underlay-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. *Włącz/wyłącz* mapę podkładową.
2. *Przezroczystość mapy bazowej*.
3. *Pokaż suwak przezroczystości* (*Android*) / *Pokaż suwak na mapie* (*iOS*). Szybki dostęp do ustawienia przezroczystości.
4. *Źródło mapy podkładowej* (*Android*) / *Dostępne warstwy* (*iOS*). Możesz wybrać mapę kafelkową do zainstalowania lub zaktualizowania.
5. *Pokaż/Ukryj poligony*.
6. *Dodaj źródło online* (*iOS*).
7. *Importuj z dokumentów* (*iOS*).


## Cieniowanie / Nachylenie {#hillshade--slope}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Cieniowanie** i **Nachylenie** to mapy rastrowe offline, które pokazują rzeźbę terenu. Są one wyświetlane jako specjalna warstwa mapy, druga nakładka na mapie bazowej. Mapy zawierają dodatkowe informacje o wysokości, aby pomóc dokładniej zrozumieć nachylenie i cienie krajobrazu. Informacje o *Cieniowaniu* i *Nachyleniu* opierają się na danych z jednego źródła, pliku *Global planet*, i są podzielone na regiony.

Nie musisz przełączać się między warstwami Cieniowania i Nachylenia, ponieważ są one automatycznie łączone. Możesz wybrać tylko jedną z tych warstw do wyświetlenia na mapie, ale masz również możliwość połączenia ich obu [jako podkładu lub nakładki](#select-raster-maps) na inne warstwy, aby uzyskać bardziej wizualną reprezentację terenu.

Aby rozpocząć korzystanie z Cieniowania i Nachylenia, musisz:

1. Zakupić wtyczkę Topografia:
    - [Zakupy Android](../purchases/android.md)
    - [Zakupy iOS](../purchases/ios.md)
2. Włącz wtyczkę [Topografia](../plugins/topography.md):
    *Menu → Wtyczki → ︙ → Włącz*
3. Wybierz wymagany region i pobierz **Mapę terenu (3D)**.
4. Proces pobierania może zająć trochę czasu, w zależności od rozmiaru wybranego regionu i szybkości połączenia internetowego.


### Cieniowanie i rzeźba 3D {#hillshade-and-3d-relief}

| Cieniowanie | Rzeźba 3D |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

Różnica w wyświetlaniu rzeźby na mapie przy zastosowaniu tych ustawień jest opisana w artykule **Topografia** w odpowiedniej sekcji [Cieniowanie i rzeźba 3D](../plugins/topography.md#hillshade-and-3d-relief).


### Konfiguruj opcje wyświetlania {#configure-display-options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terrain layers](@site/static/img/plugins/online-maps/terrain_layers.png)

Możesz dostosować poziom powiększenia do wyświetlania oraz przezroczystość dla Cieniowania i Nachylenia. Więcej informacji znajdziesz w artykule [Topografia](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## Rzeźba 3D {#3d-relief}

:::note
[Rzeźba 3D](../plugins/topography.md#3d-relief) to płatna funkcja [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Terrain layers](@site/static/img/plugins/online-maps/raster_maps_3d.png)

Funkcja [**Rzeźba 3D**](../plugins/topography.md#3d-relief) to technologia mapowania, która umożliwia wizualizację terenu na mapie za pomocą trójwymiarowych modeli. Ta funkcja dodaje informacje o wysokości do normalnej dwuwymiarowej mapy, co tworzy efekt 3D i głębi oraz pozwala lepiej wizualizować teren.

*Aby rozpocząć korzystanie z Rzeźby 3D*:
Musisz wykupić [plan zakupu OsmAnd Pro](../plugins/index.md#purchase), włączyć [wtyczkę Topografia](../plugins/topography.md) i włączyć element [Rzeźba 3D](../plugins/topography.md#3d-relief) w *Menu → Konfiguruj mapę*.


*Jak działa funkcja Rzeźba 3D*:
*1.* Aby stworzyć rzeźbę 3D, OsmAnd otrzymuje informacje o wysokości terenu.
*2.* Na podstawie danych o wysokości tworzony jest model 3D do wyświetlania gór, wzgórz, dolin i innych elementów terenu na mapie.
*3.* OsmAnd następnie wyświetla te trójwymiarowe modele na płaskiej mapie. Mapę można powiększać, pomniejszać i obracać, aby oglądać teren z różnych kątów i perspektyw.
*4.* Wyświetlanie linii konturowych na mapie nie zależy od tego, czy źródło mapy jest online, czy offline.


## Przygotuj/skopiuj mapy rastrowe na urządzenie {#preparecopy-raster-maps-to-device}

Istnieje wiele sposobów dodawania nowej mapy rastrowej, kopiowania jej z innego urządzenia, przygotowywania jej na komputerze i wstępnego pobierania kafelków do użytku offline. Na przykład, możesz utworzyć swój pakiet map na komputerze za pomocą specjalnego oprogramowania, takiego jak [MOBAC, OsmAndMapCreator itp](../../technical/map-creation/index.md). Zazwyczaj mapy rastrowe są rozpowszechniane jako pliki z rozszerzeniem `.sqlitedb`.

Oto główne metody dodawania nowego źródła map rastrowych, które nie jest jeszcze zdefiniowane w OsmAnd:

- Otwórz gotowy plik `.sqlitedb` za pomocą OsmAnd.
- Importuj pakiet z przygotowanymi mapami online z innej aplikacji OsmAnd jako specjalny **pakiet** `.osf` za pośrednictwem [funkcji importu/eksportu](../personal/import-export.md).
- Utwórz nowe źródło mapy online na samym urządzeniu mobilnym.
- Przygotuj magiczny URL z parametrami źródła mapy online i otwórz go za pomocą OsmAnd.


### Dodaj nowe źródło mapy rastrowej online {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Add online source](@site/static/img/plugins/online-maps/add-online-source-2.png)

Aby utworzyć źródło mapy rastrowej, musisz znać **URL kafelka**, który jest specyficznym adresem URL rozpowszechniającym kafelki map w projekcji Mercatora. Na przykład, URL kafelka może wyglądać tak: `https://tile.osmand.net/hd/6/55/25.png`, gdzie `tile.osmand.net/hd/` jest podstawowym adresem URL.

Oto kluczowe parametry do skonfigurowania podczas ustawiania nowego źródła mapy online:

| Parametr | Opis |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Podaj nazwę nowego źródła mapy online. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Wprowadź lub wklej adres URL źródła kafelków online. Upewnij się, że jest zgodny z formatem URL kafelka. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Ten parametr wpływa na sposób wyświetlania mapy. <br/><ul><li>Jako *typ mapy*, mapa będzie ograniczona do wybranych poziomów powiększenia.</li><li>Jako *nakładka/podkład*, mapa pojawi się na wybranych poziomach powiększenia, z zastosowaniem skalowania w górę lub w dół poza tymi poziomami.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Ustaw czas trwania (w minutach), po którym buforowane kafelki zostaną odświeżone. Możesz pozostawić to pole puste, jeśli nie chcesz, aby kafelki ładowały się automatycznie. <br/><ul><li>1 dzień = 1440 minut</li><li>1 tydzień = 10 080 minut</li><li>30 dni = 43 200 minut</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Wybierz między *projekcją Pseudo-Mercatora* a *projekcją eliptyczną Mercatora*, w zależności od źródła. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Wybierz sposób przechowywania kafelków: albo w *pliku SQLiteDB* albo jako *jeden plik obrazu na kafelek*. |


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

Dodana mapa online znajduje się na liście menu [Główne / Podkład / Nakładka](#select-raster-maps).


## Zarządzaj mapami rastrowymi {#manage-raster-maps}

Mapy rastrowe mogą zajmować znaczną ilość miejsca na dysku, więc może być konieczne regularne sprawdzanie tego. W przypadku dużych zbiorów danych zaleca się użycie *źródła rastrowego SQLite*, ponieważ będzie ono przechowywać wszystkie kafelki w 1 dużym pliku (bazie danych SQLite).

- [**Format SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Format metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

Aby zmienić format kafelków, możesz wybrać <Translate android="true" ids="storage_format"/> w menu edycji map online:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → wybierz mapy online →
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Wyczyść pamięć podręczną mapy rastrowej {#clear-raster-map-cache}

![Online sources list](@site/static/img/plugins/online-maps/online-sources-list.png)

Kafelki są przechowywane w pamięci podręcznej podczas korzystania z map rastrowych online jako warstwy głównej / nakładki / podkładu. Rozmiar pliku SQ Lite można zobaczyć pod nazwą mapy online na liście. Czasami wymagane jest regularne czyszczenie, aby przyspieszyć wyświetlanie kafelków lub zaktualizować dane.

Aby wyczyścić pamięć podręczną kafelków mapy, należy wykonać następujące czynności:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → wybierz mapy online →
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Pobierz / Zaktualizuj kafelki {#download--update-tiles}

Jeśli chcesz uzyskać dostęp do map rastrowych offline, może być konieczne wstępne załadowanie kafelków. Można to zrobić na urządzeniu mobilnym, ale należy pamiętać, że niektóre usługi mogą blokować pobieranie dużych pakietów. Możesz również użyć tej samej funkcji do aktualizacji już pobranych kafelków dla wybranych obszarów, w przeciwnym razie OsmAnd będzie nadal wyświetlać kafelki, które są już przechowywane w pamięci podręcznej.

Aby mapy automatycznie aktualizowały kafelki po pewnym czasie, możesz ustawić [czas wygaśnięcia](#add-new-online-raster-map-source), a następnie OsmAnd ponownie załaduje kafelki, gdy tylko zostaną wyświetlone.

<Tabs groupId="operating-systems">

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

![Download tiles iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Aby pobrać lub zaktualizować kafelki rastrowe, należy wybrać źródło mapy online jako [główne źródło mapy](#select-raster-maps). Można również wybrać kafelki online oddzielnie dla mapy [nakładki](#overlay-layer) lub dla mapy [podkładu](#underlay-layer).

- W przypadku wersji **Android** aplikacji OsmAnd należy wybrać obszar odpowiadający rozmiarowi ekranu urządzenia i długo nacisnąć mapę. Następnie wybrać [Akcje](../map/map-context-menu.md#customize) w menu kontekstowym mapy i opcję *Pobierz mapę* lub *Zaktualizuj mapę*. Na ekranie Pobierz mapę wprowadzić zmiany w niezbędnych ustawieniach i nacisnąć Pobierz.

- W wersji iOS aplikacji OsmAnd należy długo nacisnąć mapę, a następnie wybrać *Akcje* i opcję *Pobierz mapę* lub *Zaktualizuj mapę* z menu kontekstowego mapy. Na ekranie Pobierz mapę można wybrać wymagany obszar i zmodyfikować niezbędne ustawienia. Po ustawieniu wszystkich parametrów można zobaczyć liczbę kafelków i rozmiar pobierania.


### Zmień parametry mapy rastrowej {#change-raster-map-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → wybierz mapy online → &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Mapy rastrowe mogą być używane w istniejącej formie, jeśli kafelki są już zmapowane. Jeśli mapy rastrowe są dostarczane online, zawsze istnieje podstawowy adres URL, który należy skonfigurować. Istnieje kilka innych podstawowych parametrów, które można zmienić dla map rastrowych, o czym można przeczytać w [tej sekcji](#add-new-online-raster-map-source) artykułu. Bardziej złożone parametry są zakodowane w wewnętrznych komponentach [formatu SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## Powiązane artykuły {#related-articles}

- [Import / Eksport](../personal/import-export.md)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)

> *Ostatnia aktualizacja: październik 2024*