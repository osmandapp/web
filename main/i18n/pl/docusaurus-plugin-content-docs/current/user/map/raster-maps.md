---
source-hash: 8656c688a740924ceba6f990dbce2cb596b8d6da1d84627c6aa7082b084dadaf
sidebar_position: 6
title:  Mapy rastrowe (online / offline)
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

Mapy rastrowe są znaczącym i użytecznym uzupełnieniem map wektorowych OsmAnd. Pozwalają one na łączenie różnych źródeł map z mapami wektorowymi. Na przykład, informacje o wzgórzach i zboczach są wyświetlane jako warstwa rastrowa. Możesz wyświetlić nakładkę szlaków turystycznych, map deszczu, danych o ruchu drogowym w czasie rzeczywistym oraz nakładkę zdjęć satelitarnych na półprzezroczystej bazowej mapie wektorowej. Możesz również przełączyć domyślne mapy na kafelki rastrowe w sieci.


## Przypadki użycia {#use-cases}

Mapy rastrowe mają szeroki zakres zastosowań. Oto niektóre z najpopularniejszych:

- Zdjęcia satelitarne jako podkład.
- Informacje o ruchu drogowym w czasie rzeczywistym.
- Prognoza deszczu jako nakładka.
- Mapy topograficzne z cieniowaniem wzgórz i zboczy.
- Aktywne trasy rowerowe i biegowe jako nakładka.
- Informacje o statkach w czasie rzeczywistym.
- Kafelki OpenStreetMap online do edycji OSM.

![Przegląd map online](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
Możesz również zmienić główne źródło map z map wektorowych na kafelki online.
:::


## Mapy rastrowe {#raster-maps}

Mapy online w OsmAnd składają się z danych rastrowych, które składają się z pikseli (nazywanych również komórkami siatki) - zasadniczo zestawu małych obrazów znanych jako kafelki. W przeciwieństwie do map wektorowych, które reprezentują dane takie jak drogi, punkty i poligony za pomocą informacji binarnych, kafelki map rastrowych są ułożone w siatkę i mogą wyglądać na pikselowane przy wysokich poziomach powiększenia, ponieważ każdy piksel ma stałą wartość lub klasę.

#### Porównanie z domyślnymi mapami wektorowymi {#comparison-to-default-vector-maps}

**Zalety:**

- Ponieważ mapy rastrowe są wstępnie renderowane, ładują się szybciej, eliminując potrzebę przetwarzania i renderowania danych w czasie rzeczywistym przez urządzenie.
- Mapy rastrowe mogą być ładowane dynamicznie podczas przeglądania.
- Możesz utworzyć pamięć podręczną offline i pobierać tylko brakujące kafelki w razie potrzeby.
- Możesz używać nieograniczonej liczby zewnętrznych źródeł internetowych dla map rastrowych, co czyni je elastycznymi dla różnych typów map, takich jak widoki satelitarne lub mapy specjalistyczne.
- Dane rastrowe, takie jak informacje o ruchu drogowym, mogą być regularnie aktualizowane po wygaśnięciu (np. co 20-30 minut, w zależności od konfiguracji).

**Wady:**

- Mapy rastrowe zajmują znacznie więcej miejsca niż mapy wektorowe. Na przykład, mapa miasta może mieć 15 MB jako mapa wektorowa, ale wzrosnąć do 50 MB przy poziomie powiększenia 15, 200 MB przy poziomie powiększenia 16 i do 800 MB przy poziomie powiększenia 17.
- Nie można dotykać konkretnych miejsc lub obiektów na mapach rastrowych, aby uzyskać więcej informacji.
- Mapy rastrowe nie mogą być stylizowane ani modyfikowane w celu wykluczenia konkretnych obiektów.
- Zbyt duże powiększenie może spowodować, że obraz będzie wyglądał na pikselowany, zwłaszcza jeśli nie są dostępne kafelki o wysokiej rozdzielczości.
- Nie można obracać mapy bez obracania tekstu, co może utrudniać czytanie etykiet.


## Jak używać map rastrowych {#how-to-use-raster-maps}

**Włącz wtyczkę**.

- **iOS**. W przypadku *iOS* ta funkcja działa domyślnie.
- **Android**. W przypadku *Androida*, aby używać map rastrowych w OsmAnd, musisz włączyć [wtyczkę Mapy online](../plugins/online-map.md). Wykonaj następujące kroki: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Zmień parametry warstwy**. Aby poprawić widoczność i mieszanie warstw map rastrowych, możesz dostosować przezroczystość warstwy za pomocą suwaka na ekranie. Dodatkowo możesz zmodyfikować styl mapy wektorowej, ukrywając poligony, co sprawi, że warstwy podkładowe będą bardziej widoczne. Jest to szczególnie przydatne podczas przeglądania zdjęć satelitarnych.


## Wybierz mapy rastrowe {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Pokaż mapy](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Pokaż mapy](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

W OsmAnd mapy rastrowe mogą służyć jako dodatkowe źródło map obok domyślnych map wektorowych, które są zoptymalizowane do użytku offline.

Masz możliwość dodania jednej lub dwóch warstw kafelków online, aby uzupełnić swoją mapę bazową. Pozwala to na jednoczesne wyświetlanie do trzech warstw map na ekranie. Na przykład, możesz mieć mapę wektorową offline OsmAnd jako bazę, nałożyć na nią widok satelitarny i umieścić mapę ścieżek rowerowych jako podkład, aby uzyskać dodatkowe szczegóły.

Możesz również dostosować przezroczystość mapy bazowej, aby połączyć ją z warstwami. W razie potrzeby możesz włączyć suwak przezroczystości na ekranie głównym, aby szybko dokonać regulacji.


### Główne {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Pokaż mapy](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*  

![Pokaż mapy](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Możesz wybrać styl mapy z listy lub [dodać](#add-new-online-raster-map-source) własny.


### Warstwa nakładki {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Konfiguruj podkład / nakładkę Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Konfiguruj podkład / nakładkę iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Konfiguruj podkład / nakładkę Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Konfiguruj podkład / nakładkę iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

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

![Warstwy terenu](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Cieniowanie** i **Nachylenie** to mapy rastrowe offline, które pokazują rzeźbę terenu. Są one wyświetlane jako specjalna warstwa mapy, druga nakładka na mapie bazowej. Mapy zawierają dodatkowe informacje o wysokości, aby pomóc dokładniej zrozumieć nachylenie i cienie krajobrazu. Informacje o *Cieniowaniu* i *Nachyleniu* opierają się na danych z jednego źródła, pliku *Global planet*, i są podzielone na regiony.

Nie musisz przełączać się między warstwami Cieniowania i Nachylenia, ponieważ są one automatycznie łączone. Możesz wybrać tylko jedną z tych warstw do wyświetlenia na mapie, ale masz również możliwość połączenia ich obu [jako podkład lub nakładkę](#select-raster-maps) na inne warstwy, aby uzyskać bardziej wizualne przedstawienie terenu.

Aby rozpocząć korzystanie z Cieniowania i Nachylenia, musisz:

1. Zakupić wtyczkę Topografia:
    - [Zakupy na Androida](../purchases/android.md)
    - [Zakupy na iOS](../purchases/ios.md)
2. Włącz wtyczkę [Topografia](../plugins/topography.md):
    *Menu → Wtyczki → ︙ → Włącz*
3. Wybierz wymagany region i pobierz **Mapę terenu (3D)**.
4. Proces pobierania może zająć trochę czasu, w zależności od rozmiaru wybranego regionu i szybkości połączenia internetowego.


### Cieniowanie i rzeźba 3D {#hillshade-and-3d-relief}

| Cieniowanie | Rzeźba 3D |
|--------|---------|
| ![Warstwy terenu](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Warstwy terenu](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

Różnica w wyświetlaniu rzeźby na mapie przy zastosowaniu tych ustawień jest opisana w artykule **Topografia** w odpowiedniej sekcji [Cieniowanie i rzeźba 3D](../plugins/topography.md#hillshade-and-3d-relief).


### Konfiguruj opcje wyświetlania {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Warstwy terenu](@site/static/img/plugins/online-maps/terrain_layers.png)

Możesz dostosować poziom powiększenia do wyświetlania oraz przezroczystość dla Cieniowania i Nachylenia. Więcej informacji znajdziesz w artykule [Topografia](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## Rzeźba 3D {#3d-relief}

:::note
[Rzeźba 3D](../plugins/topography.md#3d-relief) to płatna funkcja [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Warstwy terenu](@site/static/img/plugins/online-maps/raster_maps_3d.png)

Funkcja [**Rzeźba 3D**](../plugins/topography.md#3d-relief) to technologia mapowania, która umożliwia wizualizację terenu na mapie za pomocą trójwymiarowych modeli. Ta funkcja dodaje informacje o wysokości do normalnej dwuwymiarowej mapy, co tworzy efekt 3D i głębi oraz pozwala lepiej wizualizować teren.

*Aby rozpocząć korzystanie z Rzeźby 3D*:
Musisz zakupić [plan subskrypcji OsmAnd Pro](../plugins/index.md#purchase), włączyć [wtyczkę Topografia](../plugins/topography.md) i włączyć element [Rzeźba 3D](../plugins/topography.md#3d-relief) w *Menu → Konfiguruj mapę*.


*Jak działa funkcja Rzeźba 3D*:
*1.* Aby stworzyć rzeźbę 3D, OsmAnd otrzymuje informacje o wysokości terenu.
*2.* Na podstawie danych o wysokości tworzony jest model 3D do wyświetlania gór, wzgórz, dolin i innych elementów terenu na mapie.
*3.* OsmAnd następnie wyświetla te trójwymiarowe modele na płaskiej mapie. Mapę można powiększać, pomniejszać i obracać, aby oglądać teren z różnych kątów i perspektyw.
*4.* Wyświetlanie linii konturowych na mapie nie zależy od tego, czy źródło mapy jest online, czy offline.


## Przygotuj/Skopiuj mapy rastrowe na urządzenie {#preparecopy-raster-maps-to-device}

Istnieje wiele sposobów dodawania nowej mapy rastrowej, kopiowania jej z innego urządzenia, przygotowywania jej na komputerze i wstępnego pobierania kafelków do użytku offline. Na przykład, możesz utworzyć swój pakiet map na komputerze za pomocą specjalnego oprogramowania, takiego jak [MOBAC, OsmAndMapCreator itp](../../technical/map-creation/index.md). Zazwyczaj mapy rastrowe są rozpowszechniane jako pliki z rozszerzeniem `.sqlitedb`.

Oto główne metody dodawania nowego źródła mapy rastrowej, które nie jest jeszcze zdefiniowane w OsmAnd:

- Otwórz gotowy do użycia plik `.sqlitedb` za pomocą OsmAnd.
- Importuj pakiet z przygotowanymi mapami online z innej aplikacji OsmAnd jako specjalny **pakiet** `.osf` za pośrednictwem [funkcji Import/eksport](../personal/import-export.md).
- Utwórz nowe źródło mapy online na samym urządzeniu mobilnym.
- Przygotuj magiczny URL z parametrami źródła mapy online i otwórz go za pomocą OsmAnd.


### Dodaj nowe źródło mapy rastrowej online {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Dodaj źródło online](@site/static/img/plugins/online-maps/add-online-source-2.png)

Aby utworzyć źródło mapy rastrowej, musisz znać **URL kafelka**, który jest specyficznym URL-em rozpowszechniającym kafelki map w projekcji Mercatora. Na przykład, URL kafelka może wyglądać tak: `https://tile.osmand.net/hd/6/55/25.png`, gdzie `tile.osmand.net/hd/` jest podstawowym URL-em.

Oto kluczowe parametry do skonfigurowania podczas ustawiania nowego źródła mapy online:

| Parametr | Opis |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Podaj nazwę dla nowego źródła mapy online. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Wprowadź lub wklej URL dla źródła kafelków online. Upewnij się, że jest zgodny z formatem URL kafelków. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Ten parametr wpływa na sposób wyświetlania mapy. <br/><ul><li>Jako *typ mapy*, mapa będzie ograniczona do wybranych poziomów powiększenia.</li><li>Jako *nakładka/podkład*, mapa pojawi się na wybranych poziomach powiększenia, z zastosowaniem skalowania w górę lub w dół poza tymi poziomami.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Ustaw czas (w minutach), po którym buforowane kafelki zostaną odświeżone. Możesz pozostawić to pole puste, jeśli nie chcesz, aby kafelki ładowały się automatycznie. <br/><ul><li>1 dzień = 1440 minut</li><li>1 tydzień = 10 080 minut</li><li>30 dni = 43 200 minut</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Wybierz między *projekcją Pseudo-Mercatora* a *projekcją eliptyczną Mercatora*, w zależności od źródła. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Wybierz sposób przechowywania kafelków: albo w *pliku SQLiteDB*, albo jako *jeden plik obrazu na kafelek*. |


### Magiczny URL do instalacji źródła mapy {#magic-url-to-install-map-source}

Mapy online można dodawać za pomocą specjalnego linku do listy map rastrowych OsmAnd. Kliknij ten link i wybierz OsmAnd do otwarcia:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parametr linku|Przykład|
|:--------|:---------------|
| [Część stała]| `http://osmand.net/add-tile-source` |
|[Separatory]| ?   & |
|[Nazwa]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Poziomy powiększenia]|min_zoom=9 / max_zoom=15|

Dodana mapa online znajduje się na liście menu [Głównej / Podkładowej / Nakładkowej warstwy](#select-raster-maps).


## Zarządzaj mapami rastrowymi {#manage-raster-maps}

Mapy rastrowe mogą zajmować znaczną ilość miejsca na dysku, dlatego może być konieczne regularne sprawdzanie tego. W przypadku dużych zbiorów danych zaleca się użycie *źródła rastrowego SQLite*, ponieważ będzie ono przechowywać wszystkie kafelki w 1 dużym pliku (bazie danych SQLite).

- [**Format SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Format metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

Aby zmienić format kafelków, możesz wybrać <Translate android="true" ids="storage_format"/> w menu edycji map online:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → wybierz mapy online →
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Wyczyść pamięć podręczną map rastrowych {#clear-raster-map-cache}

![Lista źródeł online](@site/static/img/plugins/online-maps/online-sources-list.png)

Kafelki są przechowywane w pamięci podręcznej podczas korzystania z map rastrowych online jako warstwy Głównej / Nakładki / Podkładu. Rozmiar pliku SQ Lite można zobaczyć pod nazwą mapy online na liście. Czasami regularne czyszczenie jest wymagane, aby przyspieszyć wyświetlanie kafelków lub zaktualizować dane.

Aby wyczyścić pamięć podręczną kafelków mapy, należy wykonać następujące czynności:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → wybierz mapy online →
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Pobierz / Zaktualizuj kafelki {#download--update-tiles}

Jeśli chcesz uzyskać dostęp do map rastrowych offline, może być konieczne wstępne załadowanie kafelków. Można to zrobić na urządzeniu mobilnym, ale należy pamiętać, że niektóre usługi mogą blokować pobieranie dużych pakietów. Możesz również użyć tej samej funkcji do aktualizacji już pobranych kafelków dla wybranych obszarów, w przeciwnym razie OsmAnd będzie nadal wyświetlać kafelki, które są już przechowywane w pamięci podręcznej.

Aby mapy automatycznie aktualizowały kafelki po pewnym czasie, możesz ustawić [czas wygaśnięcia](#add-new-online-raster-map-source), a następnie OsmAnd ponownie załaduje kafelki, gdy tylko zostaną wyświetlone.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="mapy-rastrowe"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="mapy-rastrowe"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="mapy-rastrowe"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="mapy-rastrowe"/></td>
    </tr>
</table>  

<!--

![Pobierz kafelki Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Pobierz kafelki Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Pobierz kafelki Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Pobierz kafelki Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Pobierz kafelki iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Aby pobrać lub zaktualizować kafelki rastrowe, musisz wybrać źródło mapy online jako [główne źródło mapy](#select-raster-maps) (**Android / iOS**). Możesz również wybrać kafelki online osobno dla mapy [nakładki](#overlay-layer) lub dla [podkładu](#underlay-layer) (tylko dla **Androida**).

- W wersji **Android** aplikacji OsmAnd musisz wybrać obszar zgodnie z rozmiarem ekranu urządzenia i długo nacisnąć mapę. Następnie wybierz [*Akcje*](../map/map-context-menu.md#update--download-online-maps) w menu kontekstowym mapy i opcję *Pobierz mapę* lub *Zaktualizuj mapę*. Na ekranie Pobierz mapę wprowadź zmiany w niezbędnych ustawieniach i naciśnij Pobierz.

- W wersji **iOS** aplikacji OsmAnd musisz długo nacisnąć mapę, a następnie wybrać [*Akcje*](../map/map-context-menu.md#update--download-online-maps) i opcję *Pobierz mapę* lub *Zaktualizuj mapę* z menu kontekstowego mapy. Na ekranie Pobierz mapę możesz wybrać wymagany obszar i zmodyfikować niezbędne ustawienia. Po ustawieniu wszystkich parametrów możesz zobaczyć liczbę kafelków i rozmiar pobierania.


### Zmień parametry mapy rastrowej {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → wybierz mapy online → &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Mapy rastrowe mogą być używane w istniejącej formie, jeśli kafelki są już zmapowane. Jeśli mapy rastrowe są dostarczane online, zawsze istnieje podstawowy URL, który należy skonfigurować. Istnieje kilka innych podstawowych parametrów, które można zmienić dla map rastrowych, o czym można przeczytać w [tej sekcji](#add-new-online-raster-map-source) artykułu. Bardziej złożone parametry są zakodowane w wewnętrznych komponentach [formatu SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## Powiązane artykuły {#related-articles}

- [Import / Eksport](../personal/import-export.md)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)

> *Ostatnia aktualizacja: październik 2024*