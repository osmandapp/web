---
source-hash: 191954c813f34f798ce26abb0d68f5443817e0370f9497817d385e2fbd80105e
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
Wtyczka Topografia to [płatna funkcja](../purchases/index.md) aplikacji OsmAnd.
:::

Topografia to ważna cecha kartografii, która dostarcza informacji do wizualnej oceny rzeźby terenu.
Informacje topograficzne, takie jak [linie konturowe](#contour-lines), [teren](#terrain) (*cieniowanie wzgórz* i *nachylenie*) oraz [rzeźba 3D](#3d-relief), pomagają w wizualnej ocenie ukształtowania terenu poprzez ukazanie wysokości, rzeźby, ekstremów, stromości lub punktów o równej wysokości.

Każda funkcja dostarczana przez tę wtyczkę jest niezależną warstwą mapy, która po włączeniu może być wyświetlana nad lub pod głównym źródłem mapy, w zależności od [ustawień](../map/raster-maps.md#overlay-layer).

Wtyczka Topografia zapewnia dostęp do następujących typów map:

- [Linie konturowe](#contour-lines). Jest to [mapa wektorowa](../map/vector-maps.md) przedstawiona w [**metrach** lub **stopach**](#contour-lines-meters-or-feet). Linie konturowe pokazują poziomy wysokości i pomagają wizualizować teren.
- [Cieniowanie wzgórz](#hillshade-slope-and-altitude-layers). Typy map z cieniowaniem wzgórz i stoków sprawiają, że rzeźba jest bardziej widoczna i pomagają wizualnie interpretować teren.
- [Nachylenie](#hillshade-slope-and-altitude-layers). Warstwa [rastrowa](../map/raster-maps.md), która dostarcza informacji o stromości stoków, co może być ważne dla planowania tras i bezpieczeństwa.
- [Rzeźba 3D](#3d-relief). Jest to [mapa wektorowa](../map/vector-maps.md), która zapewnia trójwymiarową reprezentację terenu, dostępna tylko z [subskrypcją OsmAnd Pro](../purchases/index.md).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Linie konturowe | Cieniowanie wzgórz | Nachylenie |
|:---|:---|:---|
| ![Contour_lines_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Hillshade_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Slopes_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Linie konturowe | Cieniowanie wzgórz | Nachylenie |
|:---|:---|:---|
| ![Contour_lines_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Hillshades_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Slopes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

#### Licencja na dane DEM używane przez OsmAnd do wykrywania terenu {#license-for-dem-data-used-by-osmand-for-terrain-detection}

Dane wysokościowe na mapie (między 70 stopniem szerokości geograficznej północnej a 70 stopniem szerokości geograficznej południowej) zostały uzyskane z pomiarów wykonanych w ramach *Shuttle Radar Topography Mission (SRTM)*. Wykorzystano w niej *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, główne narzędzie obrazowania w *NASA's Earth Observation System*.
Pełne informacje znajdują się w [Licencji](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>Dane DEM (DSM)</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Oryginalne dane użyte do tego produktu zostały dostarczone przez JAXA AW3D.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


## Wymagane parametry konfiguracji {#required-setup-parameters}

Aby wyświetlić dane **Linii konturowych** i **Terenu (Cieniowanie wzgórz, Nachylenie)** na mapie:

1. **Zakup**: [plan zakupu OsmAnd+, OsmAnd Maps+ lub OsmAnd Pro](../plugins/index.md#purchase)
2. [Włącz](../plugins/index.md#enable--disable) wtyczkę Topografia w sekcji Wtyczki w *Menu głównym*.
3. [Pobierz](#download-maps): Linie konturowe, Cieniowanie wzgórz, Nachylenie lub mapy terenu (3D).
4. **Włącz i dostosuj**: Linie konturowe, Cieniowanie wzgórz lub Nachylenie dla widoku mapy.
5. Możesz również obejrzeć [samouczek na YouTube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).

Aby wyświetlić [**Rzeźbę 3D**](#3d-relief), musisz wykupić plan *OsmAnd Pro*, który obejmuje dostęp do wtyczki Topografia.


## Pobieranie map {#download-maps}

Aby rozpocząć pracę z funkcjonalnością wtyczki, należy pobrać interesujące nas mapy. Niektóre mapy, takie jak Linie konturowe dla regionów górskich, mogą być dość duże, przekraczając 2 GB, i mogą nie być obsługiwane na przestarzałych urządzeniach.

Dla stabilnej pracy i oszczędności zasobów, można pobrać mapę nie całego kraju, ale jego konkretnych regionów, jeśli takie regiony są oferowane w aplikacji. Informacje o rozmiarze każdego typu mapy są podane pod ich nazwą.


### Mapy rzeźby 3D {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png) ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Aby wyświetlić Cieniowanie wzgórz, Nachylenie i Rzeźbę 3D, należy pobrać mapy **Terenu (3D)**. Po pobraniu map można wyświetlić **Linie konturowe** i **Teren** za pomocą sekcji [Konfiguruj mapę](../map/configure-map-menu.md) w *Menu głównym*.

Jeśli mapa wyświetlana na ekranie nie jest pobrana, to w *Menu → Konfiguruj mapę → Sekcja Topografia → Teren* na dole listy funkcji zostanie wyświetlona sekcja *Pobierz mapy* z sugerowanymi dodatkowymi mapami.


### Linie konturowe (metry lub stopy) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>

Dla [**Linii konturowych**](#contour-lines) należy określić, w jakich [jednostkach](../personal/profiles.md#units--formats) (metry lub stopy) będą one wyświetlane na mapie i pobrać odpowiednią wersję mapy na urządzenie.

**Opcje jednostek nie są zamienne**, więc jeśli chcesz przełączyć się z metrów na stopy lub odwrotnie, musisz odinstalować poprzednią wersję mapy linii konturowych, aby pobrać nową wersję.


## Linie konturowe {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Contour lines menu Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Linie konturowe*

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>

[Linie konturowe](../map/vector-maps.md#-contour-lines) to graficzne przedstawienie wysokości na mapie i są dostępne jako mapy wektorowe. Tworzą one linie odpowiadające punktom o tej samej wysokości, które tworzą kontury, pozwalające określić, w jakim kierunku i o ile nachyla się powierzchnia.

Podczas korzystania z [silnika renderowania map](../personal/global-settings.md#map-rendering-engine):

- **Wersja 2 (OpenGL)**. Linie konturowe są obsługiwane zarówno w widoku 3D, jak i w trybie rzeźby 3D.
- **Wersja 1**. Linie konturowe nie są obsługiwane podczas korzystania z map kafelkowych pochodzących z Internetu.

**Ustawienia wyglądu**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Włącz lub wyłącz linie konturowe.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Zdefiniuj [poziomy powiększenia](../map/interact-with-map.md#my-location-and-zoom), na których widoczne są linie konturowe.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Wybierz kolor do wyświetlania linii konturowych.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Dostosuj szerokość linii konturowych.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Wybierz gęstość linii konturowych (Niska, Średnia, Wysoka). Wyższe gęstości mogą wpływać na szybkość ładowania.
- *<Translate android="true" ids="maps_and_resources"/>*. Wyświetl i pobierz mapy linii konturowych dla bieżącego regionu i pobliskich obszarów.


## Teren {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png) ![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png) ![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>

Opcja **Teren** umożliwia i pozwala dostosować trzy funkcje, takie jak *Cieniowanie wzgórz*, *Nachylenie* i *Wysokość*.
Specyficzne cechy:

- W danym momencie można włączyć tylko jedną opcję: Cieniowanie wzgórz, Nachylenie lub Wysokość.
- Jeśli po pobraniu i włączeniu odpowiedniej mapy nie widzisz żadnych zmian, zaleca się ponowne uruchomienie aplikacji.

Menu **Teren** zawiera wybór [schematu kolorów](#default-color-scheme) z opcją [modyfikacji](#modify-color-scheme) (dla [subskrybentów Pro](../../user/purchases/index.md)), możliwość zmiany przezroczystości warstwy na mapie ([widoczność](#visibility)) oraz wybór [poziomu powiększenia](#zoom-levels) do jej wyświetlania, informacje o rozmiarze [danych buforowanych](#cache-size) oraz listę [map](../../user/personal/maps-resources.md) potrzebnych do wyświetlenia warstwy.


## Warstwy cieniowania wzgórz, nachylenia i wysokości {#hillshade-slope-and-altitude-layers}

| Cieniowanie wzgórz | Nachylenie | Wysokość |
| ------ | ------- | ------- |
| ![Hillshade](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) |

**Cieniowanie wzgórz** opiera się na symulacji oświetlenia powierzchni z wykorzystaniem danych terenu. Metoda ta polega na tworzeniu cieni i świateł w oparciu o kąt powierzchni względem źródła światła. W rezultacie na mapie widać naturalne wzgórza, doliny i inne szczegóły terenu.

**Nachylenie** określa kąt nachylenia powierzchni na podstawie danych wysokościowych punktów na mapie. Obliczenia kąta nachylenia są wykonywane z uwzględnieniem zmian wysokości i odległości między punktami, a zmiana ta jest przedstawiana jako kąt nachylenia.

**Wysokość** przedstawia wysokość punktów na mapie względem poziomu morza. Pomaga zrozumieć, jak zmienia się wysokość terenu. Ta funkcja jest szczególnie przydatna do aktywności takich jak wędrówki lub jazda na rowerze górskim, gdzie znajomość wysokości może pomóc w planowaniu tras i zarządzaniu wysiłkiem fizycznym. Dane wysokościowe pochodzą z modeli wysokościowych i zapewniają wyraźny widok wysokich i niskich punktów, ułatwiając ocenę trudności trasy lub identyfikację szczytów i dolin podczas podróży.

Mapy rastrowe **Cieniowania wzgórz**, **Nachylenia** i **Wysokości** są tworzone na podstawie rastrowych danych terenu, takich jak Cyfrowe Modele Wysokości (DEM).

**Zastosowanie:**

- *Nawigacja.* Pomaga zidentyfikować strome zbocza, zarówno w dół, jak i w górę, co może być kluczowe dla bezpiecznej nawigacji.
- *Planowanie tras.* Pomaga wybrać najbardziej odpowiednie trasy, biorąc pod uwagę teren.
- *Ocena terenu.* Jest to wygodne do wizualizacji krajobrazu, zwłaszcza jeśli spacerujesz lub jeździsz na rowerze.


### Domyślny schemat kolorów {#default-color-scheme}

| Cieniowanie wzgórz | Nachylenie | Wysokość |
| ------ | ------- | ------- |
|![Hillshade](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Slope](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Cieniowanie wzgórz* wykorzystuje ciemne odcienie do przedstawiania stoków, szczytów i nizin. Wirtualne Słońce ma stały azymut (kierunek) 315 stopni.

- *Nachylenie* wykorzystuje kolor do wizualizacji stromości terenu. Więcej na ten temat można przeczytać [tutaj](https://en.wikipedia.org/wiki/Grade_(slope)). Każdy kolor odpowiada kątowi odchylenia od poziomu. Dodatkowy schemat kolorów *Nachylenia*, ***Lawinowy***, jest dostępny w menu **Modyfikuj**.

- *Wysokość*. Mapa wysokości koloruje każdy piksel zgodnie z obliczoną wysokością mapy, używając gradientu z zdefiniowanego schematu kolorów. Zazwyczaj schematy wysokości są bardzo zależne od lokalizacji. W obszarach górskich preferuje się rozłożenie kolorów na szerszy zakres wysokości, a na obszarach płaskich wybiera się schemat kolorów z małym zakresem między minimalną/maksymalną wysokością.

> *Więcej informacji znajdziesz w artykule [Schemat kolorów](../personal/color-palette-schemes.md).*


### Modyfikuj schemat kolorów {#modify-color-scheme}

:::info Funkcja płatna
*Modyfikuj schemat kolorów* to płatna funkcja **OsmAnd Pro** dla [iOS](../purchases/ios.md#pro-features) i [Androida](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

Funkcja *Modyfikuj schemat kolorów* pozwala wybrać schemat kolorów:

- Z [predefiniowanej listy](#default-color-scheme).
- Z plików palet kolorów, które utworzyłeś na swoim komputerze. Niestandardowe pliki można dodać do OsmAnd za pomocą [narzędzia importu/eksportu](../personal/import-export.md).

Możesz [edytować te palety](../personal/color-palette-schemes.md#edit-palette-file), aby spersonalizować wygląd map i tras.


### Widoczność {#visibility}

| Widoczność 31% | Widoczność 74% |
| ------ | ------- |
| ![Visibility ](../../../blog/2023-08-28-terrain/img/31.png) | ![Visibility ](../../../blog/2023-08-28-terrain/img/74.png) |

Funkcja *Widoczność* służy do regulacji przezroczystości cieni dla cieniowania wzgórz oraz kolorów używanych do przedstawiania kąta w parametrze Nachylenie.

### Poziomy powiększenia {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)

Funkcja *Poziomy skali* pozwala ustawić minimalne i maksymalne wartości poziomów powiększenia mapy, od 4 do 19, na których będą wyświetlane warstwy mapy cieniowania wzgórz lub nachylenia.

### Rozmiar pamięci podręcznej {#cache-size}

**Rozmiar pamięci podręcznej** to sekcja informacyjna, która wyświetla ilość pamięci na Twoim urządzeniu aktualnie używanej na dane *Terenu*. Za każdym razem, gdy przeglądasz informacje *Cieniowania wzgórz* lub *Nachylenia* na mapie, wszystkie te dane są tymczasowo przechowywane w pamięci podręcznej w celu szybkiego dostępu i późniejszego użycia, unikając dodatkowego obciążenia procesora Twojego urządzenia.

**Wyczyszczenie pamięci podręcznej** jest czasami konieczne, aby zwolnić miejsce na urządzeniu lub rozwiązać potencjalne problemy z wydajnością. Aby wyczyścić pamięć podręczną, należy przejść do *Ustawień systemowych* urządzenia, a następnie ścieżka może wyglądać następująco: *Aplikacje → OsmAnd → Pamięć → Wyczyść pamięć podręczną*.


### Silnik renderowania (Android) {#rendering-engine-android}

**Cieniowanie wzgórz** i **Nachylenie** są wyświetlane i dostosowywane w dowolnym wybranym [silniku renderowania map](../personal/global-settings.md#map-rendering-engine).

1. Jeśli używasz **silnika renderowania map w wersji 1**, musisz użyć normalnego [pobierania](../start-with/download-maps.md) rastrowych map cieniowania wzgórz i nachylenia.

2. Jeśli używasz **silnika renderowania map w wersji 2 (OpenGL)**:
    - Możesz nadal używać normalnego typu pobierania rastrowych map cieniowania wzgórz i nachylenia. Aby to zrobić, musisz jednak aktywować [wtyczkę deweloperską OsmAnd](../plugins/development.md) i włączyć ustawienie [Użyj formatu SQLite dla cieniowania wzgórz i nachylenia](../plugins/development.md#terrain).

    - Alternatywnie możesz użyć [pobierania mapy terenu (3D)](../personal/maps-resources.md#paid-features-for-the-selected-location). Pozwala to zaoszczędzić miejsce w pamięci urządzenia, a efekty cieniowania wzgórz, nachylenia i rzeźby 3D będą generowane z nich za pomocą Twojego urządzenia.


### Szybkie akcje {#quick-actions}

![QA for Terrain](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

Możesz użyć przycisków *Szybkich akcji* na ekranie mapy, aby przełączyć widoczność [Linii konturowych](#contour-lines), warstw [Terenu](#terrain) i [schematu kolorów terenu](#default-color-scheme). W zależności od warstwy wybranej w menu Konfiguruj mapę, przypisanie akcji *Teren* do przycisku wyświetli *Cieniowanie wzgórz*, *Nachylenie* lub *Wysokość*.

Główne ustawienia dla *Pokaż lub ukryj typy map* znajdują się w sekcji Topografia w menu Konfiguruj mapę. W artykule [Szybkie akcje](../widgets/quick-action.md#configure-map) znajdziesz listę warstw dostępnych do wyświetlenia. Jeśli potrzebujesz szybkiego dostępu do tej konfiguracji mapy, użyj narzędzia *Przycisk niestandardowy*.

- Przejdź do [Dodaj akcję](../widgets/quick-action.md#custom-buttons): *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybka akcja → Dodaj akcję → Konfiguruj mapę*.
- Dodaj jeden lub więcej przycisków QA, aby zmienić widoczność konkretnej warstwy topograficznej.


## Rzeźba 3D {#3d-relief}

:::info Funkcja Pro
Rzeźba 3D to płatna funkcja [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>

Funkcja Rzeźba 3D tworzy wypukłą rzeźbę i zapewnia trójwymiarową reprezentację krajobrazu. Rzeźba 3D działa offline i może być używana z [mapami wektorowymi OsmAnd](../map/vector-maps.md) lub dowolnymi [mapami rastrowymi](../map/raster-maps.md#select-raster-maps) jako [Źródło mapy](../map/raster-maps.md#main) lub jako [Podkład/Nakładka](../map/raster-maps.md#overlay-layer).

***Jak wyświetlić rzeźbę 3D na mapie.***

- Kup subskrypcję **OsmAnd Pro** dla [iOS](../purchases/ios.md#pro-features) lub [Androida](../purchases/android.md#pro-features).

- Przejdź do [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: przewiń do sekcji *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: przewiń do sekcji *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- W razie potrzeby pobierz [mapę terenu (3D)](#3d-relief-maps) dla regionów.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Warstwa mapy wektorowej | Warstwa mapy rastrowej |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Warstwa mapy wektorowej | Warstwa mapy rastrowej |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Przesada pionowa {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Przesada pionowa*

![Vertical exaggeration Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Przesada pionowa*

![Vertical exaggeration iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*Przesada pionowa* to specjalny współczynnik dla *rzeźby 3D*. Możesz zmienić skalę (*przesadę pionową*) z x1 na x3. Ta funkcja pozwala na oglądanie płynniejszych konturów terenu ze zwiększoną szczegółowością.


### Cieniowanie wzgórz i rzeźba 3D {#hillshade-and-3d-relief}

| Cieniowanie wzgórz | Rzeźba 3D |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Cieniowanie wzgórz** to rodzaj mapy, która wyświetla teren za pomocą cieni, tworząc wizualną reprezentację nachylenia i kształtu powierzchni ziemi.
**Rzeźba 3D** to funkcja, która dodaje trójwymiarowe efekty do mapy.

Jeśli **wyłączysz** *Cieniowanie wzgórz* i **włączysz** *Rzeźbę 3D*, cienie rzeźby nadal będą widoczne, ponieważ *Cieniowanie wzgórz* i *Rzeźba 3D* to dwa różne sposoby wizualizacji mapy. *Cieniowanie wzgórz* tworzy cienie na podstawie terenu i dodaje je do mapy, podczas gdy *Rzeźba 3D* modeluje elementy 3D, aby pokazać głębię i kształt terenu, a cienie są częścią wizualizacji. Te funkcje mogą działać równolegle, a wyłączenie *Cieniowania wzgórz* nie wpływa na sposób wyświetlania efektów 3D.

Gdy **Cieniowanie wzgórz** jest **włączone**, obraz z cieniami rzeźby wydaje się bardziej szczegółowy, ciemniejszy i bardziej stopniowany niż obraz *Rzeźby 3D*. Wyjaśnienie jest takie, że *Cieniowanie wzgórz* podkreśla gradienty i kontrasty terenu, tworząc ostrzejszy i bardziej szczegółowy obraz. Funkcja *Rzeźby 3D* nadaje mapie bardziej płynny i wygładzony wygląd, zmiękczając teren i potencjalnie zmniejszając widoczność niektórych drobniejszych szczegółów.


## Łączenie typów warstw {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd pozwala łączyć wiele typów warstw mapy w celu bardziej wizualnego wyświetlania.

- Połączenie **Linii konturowych** i **Cieniowania wzgórz** jest optymalne do wizualnej i numerycznej oceny stromości zboczy górskich.
- Połączenie warstw **Linii konturowych** i **Nachylenia** jest najlepsze do oceny stromości zboczy i znajdowania punktów o tej samej wysokości.
- Połączenie warstw **Rzeźby 3D** i **Cieniowania wzgórz** pozwala uzyskać bardziej realistyczną i wizualną reprezentację terenu, rzeźby i szczegółów krajobrazu. Ta kombinacja jest szczególnie odpowiednia dla terenów górskich i pagórkowatych.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style mapy)](../../user/map/vector-maps.md)

### Typowe problemy i rozwiązania {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Jak przywrócić zakup wtyczki Topografia (dawniej Linie konturowe). [(sprawdź)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Linie konturowe, dane wysokościowe lub rzeźba 3D nie są wyświetlane. [(sprawdź)](../troubleshooting/setup.md#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. Mapa automatycznie przełącza się w tryb 3D podczas nawigacji:
    - Upewnij się, że przycisk **Tryb 3D** jest wyłączony w **Menu → Konfiguruj ekran → Przyciski → Przyciski domyślne**.
    - Sprawdź, czy w **Menu → Konfiguruj mapę → Topografia** nie są włączone żadne funkcje terenu, które mogą wywoływać efekt 3D.

> *Ostatnia aktualizacja: styczeń 2025*