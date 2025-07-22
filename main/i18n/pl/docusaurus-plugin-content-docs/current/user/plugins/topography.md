---
source-hash: cc730e8a24496682e893555771005dbb35c6dfe9f5ce92b2e7fd526bcba461b1
sidebar_position: 14
title: Topografia
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

:::info Funkcja płatna
Wtyczka Topografia jest [płatną funkcją](../purchases/index.md) aplikacji OsmAnd.
:::

Topografia to ważna cecha kartografii, która dostarcza informacji do wizualnej oceny ukształtowania terenu.
Informacje topograficzne, takie jak [warstwice](#contour-lines), [teren](#terrain) (*cieniowanie wzgórz* i *nachylenie*) oraz [ulga 3D](#3d-relief), pomagają w wizualnej ocenie ukształtowania terenu poprzez wyświetlanie wysokości, ukształtowania, ekstremów, stromości lub punktów o równej wysokości.

Każda funkcja dostarczana przez tę wtyczkę jest niezależną warstwą mapy, która po włączeniu może być wyświetlana nad lub pod głównym źródłem mapy, w zależności od [ustawień](../map/raster-maps.md#overlay-layer).

Wtyczka Topografia zapewnia dostęp do następujących typów map:

- [Warstwice](#contour-lines). Jest to [mapa wektorowa](../map/vector-maps.md) przedstawiona w [**metrach** lub **stopach**](#contour-lines-meters-or-feet). Warstwice pokazują poziomy wysokości i pomagają wizualizować teren.
- [Cieniowanie wzgórz](#hillshade-slope-and-altitude-layers). Typy map z cieniowaniem wzgórz i stoków sprawiają, że rzeźba terenu jest bardziej widoczna i pomagają wizualnie interpretować teren.
- [Nachylenie](#hillshade-slope-and-altitude-layers). [Warstwa rastrowa](../map/raster-maps.md), która dostarcza informacji o stromości stoków, co może być ważne dla planowania trasy i bezpieczeństwa.
- [Rzeźba 3D](#3d-relief). Jest to [mapa wektorowa](../map/vector-maps.md), która zapewnia trójwymiarową reprezentację terenu, dostępna tylko z [subskrypcją OsmAnd Pro](../purchases/index.md).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Warstwice | Cieniowanie wzgórz | Nachylenie |
|:---|:---|:---|
| ![Contour_lines_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Hillshade_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Slopes_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Warstwice | Cieniowanie wzgórz | Nachylenie |
|:---|:---|:---|
| ![Contour_lines_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Hillshades_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Slopes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

#### Licencja na dane DEM używane przez OsmAnd do wykrywania terenu {#license-for-dem-data-used-by-osmand-for-terrain-detection}

Dane wysokościowe na mapie (między 70 stopniami szerokości geograficznej północnej a 70 stopniami szerokości geograficznej południowej) zostały uzyskane z pomiarów wykonanych w ramach *Shuttle Radar Topography Mission (SRTM)*. Wykorzystano w niej *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, główne narzędzie obrazowania w *NASA's Earth Observation System*.
Pełne informacje znajdują się w [Licencji](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>Dane DEM (DSM)</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Oryginalne dane użyte do tego produktu zostały dostarczone przez JAXA’s AW3D.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


## Wymagane parametry konfiguracji {#required-setup-parameters}

Aby wyświetlić dane **Warstwic** i **Terenu (Cieniowanie wzgórz, Nachylenie)** na mapie:

1. **Zakup**: [plan zakupu OsmAnd+, OsmAnd Maps+ lub OsmAnd Pro](../plugins/index.md#purchase)
2. [Włącz](../plugins/index.md#enable--disable) wtyczkę Topografia w sekcji Wtyczki w *Menu głównym*.
3. [Pobierz](#download-maps): Warstwice, Cieniowanie wzgórz, Nachylenie lub mapy terenu (3D).
4. **Włącz i dostosuj**: Warstwice, Cieniowanie wzgórz lub Nachylenie dla widoku mapy.
5. Możesz również obejrzeć [samouczek na YouTube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).

Aby wyświetlić [**Rzeźbę 3D**](#3d-relief), musisz wykupić plan *OsmAnd Pro*, który obejmuje dostęp do wtyczki Topografia.


## Pobierz mapy {#download-maps}

Aby rozpocząć pracę z funkcjonalnością wtyczki, należy pobrać interesujące Cię mapy. Niektóre mapy, takie jak Warstwice dla regionów górskich, mogą być dość duże, przekraczając 2 GB, i mogą nie być obsługiwane na przestarzałych urządzeniach.

Dla stabilnej pracy i oszczędności zasobów, możesz pobrać mapę nie całego kraju, ale jego konkretnych regionów, jeśli takie regiony są oferowane w aplikacji. Informacje o rozmiarze każdego typu mapy są wymienione pod ich nazwą.


### Mapy terenu 3D {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Pobieranie warstwic Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png) ![Pobieranie warstwic Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Pobieranie warstwic iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Pobieranie warstwic iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Musisz pobrać mapy **Terenu (3D)**, aby wyświetlić Cieniowanie wzgórz, Nachylenie i Rzeźbę 3D. Po pobraniu map możesz wyświetlić **Warstwice** i **Teren** za pomocą sekcji [Konfiguruj mapę](../map/configure-map-menu.md) w *Menu głównym*.

Jeśli mapa wyświetlana na ekranie nie jest pobrana, to w *Menu → Konfiguruj mapę → Sekcja Topografia → Teren* na dole listy funkcji zostanie wyświetlona sekcja *Pobierz mapy* z sugerowanymi dodatkowymi mapami.


### Warstwice (metry lub stopy) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Okno dialogowe pobierania warstwic Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Okno dialogowe pobierania warstwic iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>

Dla [**Warstwic**](#contour-lines) musisz określić, w jakich [jednostkach](../personal/profiles.md#units--formats) (metry lub stopy) będą one wyświetlane na mapie i pobrać odpowiednią wersję mapy na swoje urządzenie.

**Opcje jednostek nie są wymienne**, więc jeśli chcesz przełączyć się z metrów na stopy lub odwrotnie, musisz odinstalować poprzednią wersję mapy Warstwic, aby pobrać nową wersję.


## Warstwice {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Menu warstwic Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Warstwice*

![Menu warstwic iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>

[Warstwice](../map/vector-maps.md#-contour-lines) to graficzna reprezentacja wysokości na mapie, dostępne jako mapy wektorowe. Tworzą one linie odpowiadające punktom o tej samej wysokości, które tworzą kontury, pozwalające określić, w którym kierunku i o ile powierzchnia się nachyla.

Podczas korzystania z [silnika renderowania map](../personal/global-settings.md#map-rendering-engine):

- **Wersja 2 (OpenGL)**. Warstwice są obsługiwane zarówno w widoku 3D, jak i w trybie rzeźby 3D.
- **Wersja 1**. Warstwice nie są obsługiwane podczas korzystania z map kafelkowych pobranych z Internetu.

**Ustawienia wyglądu**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Włącz lub wyłącz warstwice.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Zdefiniuj [poziomy powiększenia](../map/interact-with-map.md#my-location-and-zoom), na których warstwice są widoczne.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Wybierz kolor wyświetlania warstwic.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Dostosuj szerokość warstwic.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Wybierz gęstość warstwic (Niska, Średnia, Wysoka). Wyższe gęstości mogą wpływać na szybkość ładowania.
- *<Translate android="true" ids="maps_and_resources"/>*. Wyświetl i pobierz mapy warstwic dla bieżącego regionu i pobliskich obszarów.


## Teren {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Menu terenu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png) ![Menu terenu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Menu terenu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png) ![Menu terenu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>

Opcja **Teren** włącza i pozwala dostosować trzy funkcje, takie jak *Cieniowanie wzgórz*, *Nachylenie* i *Wysokość*.
Specyficzne cechy:

- W tym samym czasie może być włączona tylko jedna opcja: Cieniowanie wzgórz, Nachylenie lub Wysokość.
- Jeśli po pobraniu i włączeniu odpowiedniej mapy nie widzisz żadnych zmian, zaleca się ponowne uruchomienie aplikacji.

Menu **Teren** zawiera wybór [schematu kolorów](#default-color-scheme) z opcją [modyfikacji](#modify-color-scheme) (dla [subskrybentów Pro](../../user/purchases/index.md)), możliwość zmiany przezroczystości warstwy na mapie ([widoczność](#visibility)) oraz wybór [poziomu powiększenia](#zoom-levels) dla jej wyświetlania, informacje o rozmiarze [danych buforowanych](#cache-size) oraz listę [map](../../user/personal/maps-resources.md) potrzebnych do wyświetlenia warstwy.


## Cieniowanie wzgórz, nachylenie i warstwy wysokości {#hillshade-slope-and-altitude-layers}

| Cieniowanie wzgórz | Nachylenie | Wysokość |
| ------ | ------- | ------- |
| ![Hillshade](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) |

**Cieniowanie wzgórz** opiera się na symulacji oświetlenia powierzchni za pomocą danych terenowych. Metoda ta polega na tworzeniu cieni i świateł w oparciu o kąt powierzchni względem źródła światła. W rezultacie na mapie widać naturalne wzgórza, doliny i inne szczegóły terenu.

**Nachylenie** określa kąt nachylenia powierzchni na podstawie danych wysokościowych punktów na mapie. Obliczenia kąta nachylenia są wykonywane z uwzględnieniem zmian wysokości i odległości między punktami, a zmiana ta jest przedstawiana jako kąt nachylenia.

**Wysokość** przedstawia wysokość punktów na mapie względem poziomu morza. Pomaga zrozumieć, jak zmienia się teren pod względem wysokości. Ta funkcja jest szczególnie przydatna podczas aktywności takich jak wędrówki czy jazda na rowerze górskim, gdzie znajomość wysokości może pomóc w planowaniu tras i zarządzaniu wysiłkiem fizycznym. Dane wysokościowe pochodzą z modeli wysokościowych i zapewniają wyraźny widok wysokich i niskich punktów, ułatwiając ocenę trudności trasy lub identyfikację szczytów i dolin na trasie.

Mapy rastrowe **Cieniowania wzgórz**, **Nachylenia** i **Wysokości** są tworzone na podstawie rastrowych danych terenowych, takich jak Cyfrowe Modele Terenu (DEM).

**Zastosowanie:**

- *Nawigacja.* Pomaga identyfikować strome zbocza, zarówno w dół, jak i w górę, co może być kluczowe dla bezpiecznej nawigacji.
- *Planowanie tras.* Pomaga wybrać najbardziej odpowiednie trasy, biorąc pod uwagę teren.
- *Ocena terenu.* Jest to wygodne do wizualizacji krajobrazu, zwłaszcza jeśli spacerujesz lub jeździsz na rowerze.


### Domyślny schemat kolorów {#default-color-scheme}

| Cieniowanie wzgórz | Nachylenie | Wysokość |
| ------ | ------- | ------- |
|![Hillshade](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Slope](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Cieniowanie wzgórz* wykorzystuje ciemne odcienie do pokazania stoków, szczytów i nizin. Wirtualne Słońce ma stały azymut (kierunek) 315 stopni.

- *Nachylenie* wykorzystuje kolor do wizualizacji stromości terenu. Więcej na ten temat można przeczytać [tutaj](https://en.wikipedia.org/wiki/Grade_(slope)). Każdy kolor odpowiada kątowi odchylenia od poziomu. Dodatkowy schemat kolorów *Nachylenie*, ***Lawina***, jest dostępny w menu **Modyfikuj**.

- *Wysokość*. Mapa wysokości koloruje każdy piksel zgodnie z obliczoną wysokością mapy, używając gradientu z zdefiniowanego schematu kolorów. Zazwyczaj schematy wysokości są bardzo zależne od lokalizacji. W obszarach górskich preferowane jest rozłożenie kolorów na szerszy zakres wysokości, a na płaskich obszarach należy wybrać schemat kolorów z małym zakresem między minimalną a maksymalną wysokością.

> *Więcej informacji znajdziesz w artykule [Schemat kolorów](../personal/color-palette-schemes.md).*


### Modyfikuj schemat kolorów {#modify-color-scheme}

:::info Funkcja płatna
*Modyfikuj schemat kolorów* to płatna funkcja **OsmAnd Pro** dla [iOS](../purchases/ios.md#pro-features) i [Androida](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Modyfikuj schemat kolorów](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png) ![Modyfikuj schemat kolorów](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modyfikuj schemat kolorów](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png) ![Modyfikuj schemat kolorów](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

Funkcja *Modyfikuj schemat kolorów* umożliwia wybór schematu kolorów:

- Z [predefiniowanej listy](#default-color-scheme).
- Z plików palet kolorów, które utworzyłeś na swoim komputerze. Niestandardowe pliki można dodać do OsmAnd za pomocą narzędzia [import/eksport](../personal/import-export.md).

Możesz [edytować te palety](../personal/color-palette-schemes.md#edit-palette-file), aby spersonalizować wygląd map i tras.


### Widoczność {#visibility}

| Widoczność 31% | Widoczność 74% |
| ------ | ------- |
| ![Widoczność ](../../../blog/2023-08-28-terrain/img/31.png) | ![Widoczność ](../../../blog/2023-08-28-terrain/img/74.png) |

Funkcja *Widoczność* służy do regulacji przezroczystości cieni dla Cieniowania wzgórz i kolorów używanych do reprezentowania kąta w parametrze Nachylenie.

### Poziomy powiększenia {#zoom-levels}

![Powiększenie](../../../blog/2023-08-28-terrain/img/zoom.png)

Funkcja *Poziomy skali* pozwala ustawić minimalne i maksymalne wartości poziomów powiększenia mapy, w zakresie od 4 do 19, na których będą wyświetlane warstwy mapy Cieniowania wzgórz lub Nachylenia.

### Rozmiar pamięci podręcznej {#cache-size}

**Rozmiar pamięci podręcznej** to sekcja informacyjna, która wyświetla ilość pamięci na Twoim urządzeniu aktualnie używanej na dane *Terenu*. Za każdym razem, gdy przeglądasz informacje o *Cieniowaniu wzgórz* lub *Nachyleniu* na mapie, wszystkie te dane są tymczasowo przechowywane w pamięci podręcznej w celu szybkiego dostępu i późniejszego użycia, unikając dodatkowego obciążenia procesora Twojego urządzenia.

**Wyczyszczenie pamięci podręcznej** jest czasami konieczne, aby zwolnić miejsce na urządzeniu lub rozwiązać potencjalne problemy z wydajnością. Aby wyczyścić pamięć podręczną, należy przejść do *Ustawień systemowych* urządzenia, a następnie ścieżka może wyglądać następująco: *Aplikacje → OsmAnd → Pamięć → Wyczyść pamięć podręczną*.


### Silnik renderowania (Android) {#rendering-engine-android}

**Cieniowanie wzgórz** i **Nachylenie** są wyświetlane i dostosowywane w dowolnie wybranym [silniku renderowania map](../personal/global-settings.md#map-rendering-engine).

1. Jeśli używasz **silnika renderowania map w wersji 1**, musisz użyć normalnego [pobierania](../start-with/download-maps.md) rastrowych map Cieniowania wzgórz i Nachylenia.

2. Jeśli używasz **silnika renderowania map w wersji 2 (OpenGL)**:
    - Możesz nadal używać normalnego typu pobierania rastrowych map Cieniowania wzgórz i Nachylenia. Aby to zrobić, musisz jednak aktywować [wtyczkę deweloperską OsmAnd](../plugins/development.md) i włączyć ustawienie [Użyj formatu rastrowego SQLite dla cieniowania wzgórz i nachylenia](../plugins/development.md#terrain).

    - Alternatywnie możesz użyć [pobierania mapy terenu (3D)](../personal/maps-resources.md#paid-features-for-the-selected-location). Pozwala to zaoszczędzić miejsce w pamięci urządzenia, a efekty Cieniowania wzgórz, Nachylenia i Rzeźby 3D będą generowane z nich za pomocą Twojego urządzenia.


### Szybkie akcje {#quick-actions}

![QA dla terenu](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

Możesz użyć przycisków *Szybkie akcje* na ekranie mapy, aby przełączać widoczność [Warstwic](#contour-lines), warstw [Terenu](#terrain) i [schematu kolorów Terenu](#default-color-scheme). W zależności od warstwy wybranej w menu Konfiguruj mapę, przypisanie akcji *Teren* do przycisku spowoduje wyświetlenie *Cieniowania wzgórz*, *Nachylenia* lub *Wysokości*.

Główne ustawienia *Pokaż lub ukryj typy map* znajdują się w sekcji Topografia menu Konfiguruj mapę. W artykule [Szybkie akcje](../widgets/quick-action.md#configure-map) znajdziesz listę warstw dostępnych do wyświetlenia. Jeśli potrzebujesz szybkiego dostępu do tej konfiguracji mapy, użyj narzędzia *Przycisk niestandardowy*.

- Przejdź do [Dodaj akcję](../widgets/quick-action.md#custom-buttons): *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybka akcja → Dodaj akcję → Konfiguruj mapę*.
- Dodaj jeden lub więcej przycisków QA, aby zmienić widoczność konkretnej warstwy topograficznej.


## Rzeźba 3D {#3d-relief}

:::info Funkcja Pro
Rzeźba 3D to płatna funkcja [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![Rzeźba 3D](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![Rzeźba 3D](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>

Funkcja Rzeźba 3D tworzy wypukłą rzeźbę i zapewnia trójwymiarową reprezentację krajobrazu. Rzeźba 3D działa offline i może być używana z [mapami wektorowymi OsmAnd](../map/vector-maps.md) lub dowolnymi [mapami rastrowymi](../map/raster-maps.md#select-raster-maps) jako [źródło mapy](../map/raster-maps.md#main) lub jako [warstwa podkładowa/nakładkowa](../map/raster-maps.md#overlay-layer).

***Jak wyświetlić rzeźbę 3D na mapie.***

- Wykup subskrypcję **OsmAnd Pro** dla [iOS](../purchases/ios.md#pro-features) lub [Androida](../purchases/android.md#pro-features).

- Przejdź do [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: przewiń do sekcji *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: przewiń do sekcji *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- W razie potrzeby pobierz [mapę terenu (3D)](#3d-relief-maps) dla regionów.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Warstwa mapy wektorowej | Warstwa mapy rastrowej |
| ------ | ------- |
| ![Rzeźba 3D](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![Rzeźba 3D](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Warstwa mapy wektorowej | Warstwa mapy rastrowej |
| ------ | ------- |
| ![Rzeźba 3D](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png) | ![Rzeźba 3D](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Przesada pionowa {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Przesada pionowa*

![Przesada pionowa Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Przesada pionowa*

![Przesada pionowa iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*Przesada pionowa* to specjalny współczynnik dla *rzeźby 3D*. Możesz zmienić skalę (*przesadę pionową*) z x1 na x3. Ta funkcja pozwala na oglądanie płynniejszych konturów terenu ze zwiększoną szczegółowością.


### Cieniowanie wzgórz i rzeźba 3D {#hillshade-and-3d-relief}

| Cieniowanie wzgórz | Rzeźba 3D |
|--------|---------|
| ![Warstwy terenu](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Warstwy terenu](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Cieniowanie wzgórz** to rodzaj mapy, która wyświetla teren za pomocą cieni, tworząc wizualną reprezentację nachylenia i kształtu powierzchni ziemi.
**Rzeźba 3D** to funkcja, która dodaje trójwymiarowe efekty do mapy.

Jeśli **wyłączysz** *Cieniowanie wzgórz* i **włączysz** *Rzeźbę 3D*, cienie rzeźby nadal będą widoczne, ponieważ *Cieniowanie wzgórz* i *Rzeźba 3D* to dwa różne sposoby wizualizacji mapy. *Cieniowanie wzgórz* tworzy cienie na podstawie terenu i dodaje je do mapy, podczas gdy *Rzeźba 3D* modeluje elementy 3D, aby pokazać głębię i kształt terenu, a cienie są częścią wizualizacji. Te funkcje mogą działać równolegle, a wyłączenie *Cieniowania wzgórz* nie wpływa na sposób wyświetlania efektów 3D.

Gdy **Cieniowanie wzgórz** jest **włączone**, obraz z cieniami rzeźby wydaje się bardziej szczegółowy, ciemniejszy i bardziej stopniowany niż obraz *Rzeźby 3D*. Wyjaśnienie jest takie, że *Cieniowanie wzgórz* podkreśla gradienty i kontrasty terenu, tworząc ostrzejszy i bardziej szczegółowy obraz. Funkcja *Rzeźba 3D* nadaje mapie bardziej płynny i wygładzony wygląd, zmiękczając teren i potencjalnie zmniejszając widoczność niektórych drobniejszych szczegółów.


## Łączenie typów warstw {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Warstwice połączone z cieniowaniem wzgórz](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Warstwice połączone z nachyleniem](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Warstwice połączone z cieniowaniem wzgórz w iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Warstwice połączone z nachyleniem w iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd pozwala łączyć wiele typów warstw mapy dla bardziej wizualnego wyświetlania.

- Połączenie **Warstwic** i **Cieniowania wzgórz** jest optymalne do wizualnej i numerycznej oceny stromości zboczy górskich.
- Połączenie warstw **Warstwic** i **Nachylenia** jest najlepsze do oceny stromości zboczy i znajdowania punktów o tej samej wysokości.
- Połączenie warstw **Rzeźby 3D** i **Cieniowania wzgórz** pozwala uzyskać bardziej realistyczną i wizualną reprezentację terenu, rzeźby i szczegółów krajobrazu. Ta kombinacja jest szczególnie odpowiednia dla terenów górskich i pagórkowatych.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style map)](../../user/map/vector-maps.md)

### Typowe problemy i rozwiązania {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Jak przywrócić zakup wtyczki Topografia (dawniej Warstwice). [(sprawdź)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Warstwice, dane wysokościowe lub rzeźba 3D nie są wyświetlane. [(sprawdź)](../troubleshooting/setup.md#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. Mapa automatycznie przełącza się w tryb 3D podczas nawigacji:
    - Upewnij się, że przycisk **Tryb 3D** jest wyłączony w **Menu → Konfiguruj ekran → Przyciski → Przyciski domyślne**.
    - Sprawdź, czy w **Menu → Konfiguruj mapę → Topografia** włączono jakieś funkcje terenu, które mogą wywoływać efekt 3D.

> *Ostatnia aktualizacja: styczeń 2025*