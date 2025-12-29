---
source-hash: 6d26b1681e1931a3479eb74332a2f7f850665d9897e0adf66e0c9b317a16b9f3
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

:::info Płatna funkcja
Wtyczka Topografia jest [płatną funkcją](../purchases/index.md) aplikacji OsmAnd.
:::

Topografia jest ważną cechą kartografii, która dostarcza informacji do wizualnej oceny rzeźby terenu.
Informacje topograficzne, takie jak [Linie konturowe](#contour-lines), [Teren](#terrain) (*Cieniowanie wzgórz* i *Nachylenie*), oraz [Rzeźba 3D](#3d-relief), pomagają w wizualnej ocenie ukształtowania terenu poprzez pokazanie wysokości, rzeźby, skrajności, stromości lub punktów o tej samej wysokości.

Każda funkcja udostępniana przez tę wtyczkę jest niezależną warstwą mapy, która po włączeniu może być wyświetlana nad lub pod głównym źródłem mapy, w zależności od [ustawień](../map/raster-maps.md#overlay-layer).  

Wtyczka Topografia zapewnia dostęp do następujących typów map:  

- [Linie konturowe](#contour-lines). Jest to [mapa wektorowa](../map/vector-maps.md) reprezentowana w [**metrach** lub **stopach**](#contour-lines-meters-or-feet). Linie konturowe pokazują poziomy wysokości i pomagają wizualizować teren.
- [Cieniowanie wzgórz](#hillshade-slope-and-altitude-layers). Rodzaje map z cieniowaniem wzgórz i zboczy sprawiają, że rzeźba terenu jest bardziej widoczna i pomaga w wizualnej interpretacji terenu.
- [Nachylenie](#hillshade-slope-and-altitude-layers). [Warstwa rastrowa](../map/raster-maps.md), która dostarcza informacji o stromości zboczy, co może być ważne przy planowaniu trasy i dla bezpieczeństwa.
- [Rzeźba 3D](#3d-relief). Jest to [mapa wektorowa](../map/vector-maps.md), która zapewnia trójwymiarową reprezentację terenu, dostępna tylko z [subskrypcją OsmAnd Pro](../purchases/index.md).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Linie konturowe | Cieniowanie wzgórz | Nachylenie |
|:---|:---|:---|
| ![Linie_konturowe_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Cieniowanie_wzgórz_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Nachylenia_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Linie konturowe | Cieniowanie wzgórz | Nachylenie |
|:---|:---|:---|
| ![Linie_konturowe_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Cieniowanie_wzgórz_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Nachylenia_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

### Licencja na dane DEM używane przez OsmAnd do wykrywania terenu {#license-for-dem-data-used-by-osmand-for-terrain-detection}

Dane o wysokości na mapie (między 70 stopniem szerokości geograficznej północnej a 70 stopniem szerokości geograficznej południowej) zostały uzyskane z pomiarów wykonanych w ramach *Shuttle Radar Topography Mission (SRTM)*. Wykorzystano w niej *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, podstawowe narzędzie obrazowania w *Systemie Obserwacji Ziemi NASA*.  
Pełne informacje można znaleźć w [Licencji](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>DEM (DSM) data</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. The original data used for this product was supplied by JAXA’s AW3D.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Aby wyświetlić dane **Linii konturowych** i **Terenu (Cieniowanie wzgórz, Nachylenie)** na mapie:

1. **Zakup**: [plan zakupów OsmAnd+, OsmAnd Maps+ lub OsmAnd Pro](../plugins/index.md#purchase)
2. [Włącz](../plugins/index.md#enable--disable) wtyczkę Topografia w sekcji Wtyczki w *Menu głównym*.
3. [Pobierz](#download-maps): mapy Linii konturowych, Cieniowania wzgórz, Nachylenia lub mapy Terenu (3D).
4. **Włącz i dostosuj**: Linie konturowe, Cieniowanie wzgórz lub Nachylenie dla widoku mapy.
5. Możesz również obejrzeć [samouczek na YouTube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).  

Aby wyświetlić [**Rzeźbę 3D**](#3d-relief), należy zakupić plan *OsmAnd Pro*, który obejmuje dostęp do wtyczki Topografia.


## Pobierz mapy {#download-maps}

Aby rozpocząć pracę z funkcjonalnością wtyczki, należy pobrać interesujące mapy. Niektóre mapy, takie jak Linie konturowe dla regionów górskich, mogą być dość duże, przekraczając 2 GB, i mogą nie być obsługiwane na przestarzałych urządzeniach.

W celu zapewnienia stabilnej pracy i oszczędności zasobów można pobrać mapę nie całego kraju, ale jego poszczególnych regionów, jeśli takie regiony są oferowane w aplikacji. Informacje o rozmiarze każdego typu mapy są podane pod ich nazwą.


### Mapy rzeźby 3D {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Pobieranie map Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png)  ![Pobieranie map Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>  

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Pobieranie map iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Pobieranie map iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Należy pobrać mapy **Teren (3D)**, aby wyświetlić Cieniowanie wzgórz, Nachylenie i Rzeźbę 3D. Po pobraniu map można wyświetlić **Linie konturowe** i **Teren** za pomocą sekcji [Konfiguruj mapę](../map/configure-map-menu.md) w *Menu głównym*.

Jeśli mapa wyświetlana na ekranie nie została pobrana, to w *Menu → Konfiguruj mapę → sekcja Topografia → Teren* na dole listy funkcji zostanie wyświetlona sekcja *Pobierz mapy* z sugerowanymi dodatkowymi mapami.


### Linie konturowe (metry lub stopy) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Okno dialogowe pobierania linii konturowych Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Okno dialogowe pobierania linii konturowych iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>  

W przypadku [**Linii konturowych**](#contour-lines) należy określić, w jakich [jednostkach](../personal/profiles.md#units--formats) (metry czy stopy) będą one wyświetlane na mapie i pobrać odpowiednią wersję mapy na urządzenie.

**Opcje jednostek nie są wymienne**, więc jeśli chcesz przełączyć się z metrów na stopy lub odwrotnie, musisz odinstalować poprzednią wersję mapy Linii konturowych, aby pobrać nową wersję.


## Linie konturowe {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Menu linii konturowych Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Linie konturowe*

![Menu linii konturowych iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>  

[Linie konturowe](../map/vector-maps.md#-contour-lines) są graficzną reprezentacją wzniesień na mapie i są dostępne jako mapy wektorowe. Tworzą one linie odpowiadające punktom o tej samej wysokości, które tworzą kontury pozwalające określić, w którym kierunku i jak bardzo nachylona jest powierzchnia.

Podczas korzystania z [Silnika renderowania mapy](../personal/global-settings.md#map-rendering-engine):

- **Wersja 2 (OpenGL)**. Linie konturowe są obsługiwane zarówno w widoku 3D, jak i w trybie rzeźby 3D.
- **Wersja 1**. Linie konturowe nie są obsługiwane w przypadku korzystania z map kafelkowych pobieranych z Internetu.

**Ustawienia wyglądu**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Włącz lub wyłącz linie konturowe.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Zdefiniuj [poziomy powiększenia](../map/interact-with-map.md#my-location-and-zoom), przy których widoczne są linie konturowe.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Wybierz kolor wyświetlania linii konturowych.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Dostosuj szerokość linii konturowych.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Wybierz gęstość linii konturowych (Niska, Średnia, Wysoka). Wyższa gęstość może wpłynąć na szybkość ładowania.
- *<Translate android="true" ids="maps_and_resources"/>*. Przeglądaj i pobieraj mapy linii konturowych dla bieżącego regionu i pobliskich obszarów.


## Teren {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Menu Teren Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png)  ![Menu Teren Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Menu Teren iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png)   ![Menu Teren iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>  

Opcja **Teren** włącza i pozwala dostosować trzy funkcje, takie jak *Cieniowanie wzgórz*, *Nachylenie* i *Wysokość*.  
Cechy szczególne:  

- Tylko jedna opcja może być włączona w tym samym czasie: Cieniowanie wzgórz, Nachylenie lub Wysokość.
- Jeśli po pobraniu i włączeniu odpowiedniej mapy nie widać żadnych zmian, zaleca się ponowne uruchomienie aplikacji.

Menu **Teren** zawiera wybór [schematu kolorów](#default-color-scheme) z opcją [modyfikacji](#modify-color-scheme) (dla [subskrybentów Pro](../../user/purchases/index.md)), możliwość zmiany przezroczystości warstwy na mapie ([widoczność](#visibility)) i wyboru [poziomu powiększenia](#zoom-levels) dla jej wyświetlania, informacje o rozmiarze [danych w pamięci podręcznej](#cache-size) oraz listę [map](../../user/personal/maps-resources.md) potrzebnych do wyświetlenia warstwy.


## Warstwy Cieniowanie wzgórz, Nachylenie i Wysokość {#hillshade-slope-and-altitude-layers}

| Cieniowanie wzgórz | Nachylenie | Wysokość |
| ------ | ------- | ------- |
| ![Cieniowanie wzgórz](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Nachylenie](../../../blog/2023-08-28-terrain/img/slope.png) | ![Wysokość](../../../blog/2023-08-28-terrain/img/slope.png) |

**Cieniowanie wzgórz** opiera się na symulacji oświetlenia powierzchni przy użyciu danych o terenie. Metoda ta polega na tworzeniu cieni i podświetleń w oparciu o kąt nachylenia powierzchni względem źródła światła. W rezultacie na mapie widoczne są naturalne wzgórza, doliny i inne szczegóły terenu.  

**Nachylenie** określa kąt nachylenia powierzchni na podstawie danych o wysokości punktów na mapie. Obliczenia kąta nachylenia są wykonywane z uwzględnieniem zmian wysokości i odległości między punktami, a zmiana ta jest przedstawiana jako kąt nachylenia.  

**Wysokość** reprezentuje wysokość punktów na mapie względem poziomu morza. Pomaga zrozumieć, jak zmienia się wysokość terenu. Funkcja ta jest szczególnie przydatna podczas aktywności takich jak turystyka piesza czy kolarstwo górskie, gdzie znajomość wysokości może pomóc w planowaniu tras i zarządzaniu wysiłkiem fizycznym. Dane o wysokości pochodzą z modeli wysokościowych i zapewniają wyraźny widok wysokich i niskich punktów, ułatwiając ocenę trudności trasy lub identyfikację szczytów i dolin na trasie.

Mapy rastrowe **Cieniowanie wzgórz**, **Nachylenie** i **Wysokość** są tworzone na podstawie rastrowych danych o terenie, takich jak Cyfrowe Modele Wysokościowe (DEM).

**Zastosowanie:**

- *Nawigacja.* Pomaga zidentyfikować strome zbocza, zarówno zjazdowe, jak i podjazdowe, co może mieć kluczowe znaczenie dla bezpiecznej nawigacji.
- *Planowanie tras.* Pomaga wybrać najbardziej odpowiednie trasy, biorąc pod uwagę ukształtowanie terenu.
- *Ocena terenu.* Jest to wygodne do wizualizacji krajobrazu, zwłaszcza jeśli spacerujesz lub jeździsz na rowerze.


### Domyślny schemat kolorów {#default-color-scheme}

| Cieniowanie wzgórz | Nachylenie | Wysokość |
| ------ | ------- | ------- |
|![Cieniowanie wzgórz](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Nachylenie](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Cieniowanie wzgórz* wykorzystuje ciemne odcienie do pokazywania zboczy, szczytów i nizin. Wirtualne słońce ma stały azymut (kierunek) 315 stopni.

- *Nachylenie* wykorzystuje kolory do wizualizacji stromości terenu. Więcej na ten temat można przeczytać [tutaj](https://en.wikipedia.org/wiki/Grade_(slope)). Każdy kolor odpowiada kątowi odchylenia od poziomu. Dodatkowy schemat kolorów *Nachylenia*, ***Lawinowy***, jest dostępny w menu **Modyfikuj**.

- *Wysokość*. Mapa wysokości koloruje każdy piksel zgodnie z obliczoną wysokością mapy, używając gradientu z zdefiniowanego schematu kolorów. Zazwyczaj schematy wysokości są bardzo zależne od lokalizacji. W obszarach górskich preferowane jest rozłożenie kolorów na szerszy zakres wysokości, a na terenach płaskich wybiera się schemat kolorów z małym zakresem między minimalną a maksymalną wysokością.

> *Więcej informacji można znaleźć w artykule [Schemat kolorów](../personal/color-palette-schemes.md).*


### Modyfikuj schemat kolorów {#modify-color-scheme}

:::info Płatna funkcja
*[Modyfikuj schemat kolorów](../../user/personal/color-palette-schemes.md#terrain)* to płatna funkcja **OsmAnd Pro** dla [iOS](../purchases/ios.md#pro-features) i [Androida](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Modyfikuj schemat kolorów](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png)   ![Modyfikuj schemat kolorów](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Modyfikuj schemat kolorów](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png)   ![Modyfikuj schemat kolorów](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

Funkcja *Modyfikuj schemat kolorów* pozwala wybrać schemat kolorów:

- Z [predefiniowanej listy](#default-color-scheme).
- Z plików palet kolorów utworzonych na komputerze. Niestandardowe pliki można dodać do OsmAnd za pomocą [narzędzia importu/eksportu](../personal/import-export.md).

Możesz [edytować te palety](../personal/color-palette-schemes.md#palette-modify), aby spersonalizować wygląd map i tras.


### Widoczność {#visibility}

| Widoczność 31% | Widoczność 74% |
| ------ | ------- |
| ![Widoczność ](../../../blog/2023-08-28-terrain/img/31.png) | ![Widoczność ](../../../blog/2023-08-28-terrain/img/74.png) |

Funkcja *Widoczność* służy do regulacji przezroczystości cieni dla Cieniowania wzgórz oraz kolorów używanych do reprezentowania kąta w parametrze Nachylenie.

### Poziomy powiększenia {#zoom-levels}

![Powiększenie](../../../blog/2023-08-28-terrain/img/zoom.png)  

Funkcja *Poziomy powiększenia* pozwala ustawić minimalne i maksymalne wartości poziomów powiększenia mapy, w zakresie od 4 do 19, przy których będą wyświetlane warstwy mapy Cieniowanie wzgórz lub Nachylenie.

### Rozmiar pamięci podręcznej {#cache-size}

**Rozmiar pamięci podręcznej** to sekcja informacyjna, która wyświetla ilość pamięci na urządzeniu aktualnie używanej na dane *Terenu*. Za każdym razem, gdy przeglądasz informacje o *Cieniowaniu wzgórz* lub *Nachyleniu* na mapie, wszystkie te dane są tymczasowo przechowywane w pamięci podręcznej w celu szybkiego dostępu i późniejszego wykorzystania, unikając dodatkowego obciążenia procesora urządzenia.  

**Czyszczenie pamięci podręcznej** jest czasami konieczne, aby zwolnić miejsce na urządzeniu lub rozwiązać potencjalne problemy z wydajnością. Aby wyczyścić pamięć podręczną, należy przejść do *Ustawień systemowych* urządzenia, a następnie ścieżka może być następująca: *Aplikacje → OsmAnd → Pamięć → Wyczyść pamięć podręczną*.


### Silnik renderowania (Android) {#rendering-engine-android}

**Cieniowanie wzgórz** i **Nachylenie** są wyświetlane i dostosowywane w dowolnym wybranym [Silniku renderowania mapy](../personal/global-settings.md#map-rendering-engine).

1. Jeśli używasz **Silnika renderowania mapy w wersji 1**, musisz użyć normalnego [pobierania](../start-with/download-maps.md) map rastrowych Cieniowania wzgórz i Nachylenia.

2. Jeśli używasz **Silnika renderowania mapy w wersji 2 (OpenGL)**:
    - Możesz nadal używać normalnego typu pobierania map rastrowych Cieniowania wzgórz i Nachylenia. Aby to zrobić, musisz jednak aktywować [wtyczkę deweloperską OsmAnd](../plugins/development.md) i włączyć ustawienie [Użyj formatu rastrowego SQLite dla cieniowania wzgórz i nachylenia](../plugins/development.md#terrain).

    - Alternatywnie możesz użyć pobierania [Mapy terenu (3D)](../personal/maps-resources.md#paid-map-content). Oszczędza to miejsce w pamięci urządzenia, a efekty Cieniowania wzgórz, Nachylenia i Rzeźby 3D będą generowane na podstawie tych danych przez Twoje urządzenie.


### Szybkie akcje {#quick-actions}

![Szybka akcja dla Terenu](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

Możesz użyć przycisków *Szybkiej akcji* na ekranie mapy, aby przełączać widoczność warstw [Linii konturowych](#contour-lines), [Terenu](#terrain) oraz [schematu kolorów terenu](../../user/personal/color-palette-schemes.md#quick-actions). W zależności od warstwy wybranej w menu Konfiguruj mapę, przypisanie akcji *Teren* do przycisku spowoduje wyświetlenie *Cieniowania wzgórz*, *Nachylenia* lub *Wysokości*.  

Główne ustawienia *Pokaż lub ukryj typy map* znajdują się w sekcji Topografia w menu Konfiguruj mapę. W artykule [Szybka akcja](../widgets/quick-action.md#configure-map) można znaleźć listę warstw dostępnych do wyświetlenia. Jeśli potrzebujesz szybkiego dostępu do tej konfiguracji mapy, użyj narzędzia *Przycisk niestandardowy*.

- Przejdź do [Dodaj akcję](../widgets/quick-action.md#custom-buttons): *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybka akcja → Dodaj akcję → Konfiguruj mapę*.
- Dodaj jeden lub więcej przycisków Szybkiej akcji, aby zmienić widoczność określonej warstwy topograficznej.


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

Funkcja Rzeźba 3D tworzy wypukłą rzeźbę i zapewnia trójwymiarową reprezentację krajobrazu. Rzeźba 3D działa w trybie offline i może być używana z [mapami wektorowymi OsmAnd](../map/vector-maps.md) lub dowolnymi [mapami rastrowymi](../map/raster-maps.md#select-raster-maps) jako [Źródło mapy](../map/raster-maps.md#main) lub jako [Podkład/Nakładka](../map/raster-maps.md#overlay-layer).

***Jak wyświetlić Rzeźbę 3D na mapie.***

- Zakup subskrypcję **OsmAnd Pro** dla [iOS](../purchases/ios.md#pro-features) lub [Androida](../purchases/android.md#pro-features).

- Przejdź do [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: przewiń do sekcji *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: przewiń do sekcji *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Pobierz [Mapę terenu (3D)](#3d-relief-maps) dla regionów, jeśli jest to konieczne.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Warstwa mapy wektorowej | Warstwa mapy rastrowej |
| ------ | ------- |
| ![Rzeźba 3D](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![Rzeźba 3D](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>  

<TabItem value="ios" label="iOS">

| Warstwa mapy wektorowej | Warstwa mapy rastrowej |
| ------ | ------- |
| ![Rzeźba 3D](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png)  | ![Rzeźba 3D](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Przewyższenie pionowe {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Przewyższenie pionowe*

![Przewyższenie pionowe Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>  

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Przewyższenie pionowe*

![Przewyższenie pionowe iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*Przewyższenie pionowe* to specjalny współczynnik dla *rzeźby 3D*. Można zmieniać skalę (*Przewyższenie pionowe*) od x1 do x3. Funkcja ta pozwala na oglądanie gładszych konturów terenu ze zwiększoną szczegółowością.


### Cieniowanie wzgórz i Rzeźba 3D {#hillshade-and-3d-relief}

| Cieniowanie wzgórz | Rzeźba 3D |
|--------|---------|
| ![Warstwy terenu](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Warstwy terenu](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Cieniowanie wzgórz** to typ mapy, który wyświetla teren za pomocą cieni, tworząc wizualną reprezentację nachylenia i kształtu powierzchni ziemi.  
**Rzeźba 3D** to funkcja, która dodaje do mapy efekty trójwymiarowe.  

Jeśli **wyłączysz** *Cieniowanie wzgórz* i **włączysz** *Rzeźbę 3D*, cienie rzeźby będą nadal widoczne, ponieważ *Cieniowanie wzgórz* i *Rzeźba 3D* to dwa różne sposoby wizualizacji mapy. *Cieniowanie wzgórz* tworzy cienie na podstawie terenu i dodaje je do mapy, podczas gdy *Rzeźba 3D* modeluje elementy 3D, aby pokazać głębię i kształt terenu, a cienie są częścią wizualizacji. Funkcje te mogą działać równolegle, a wyłączenie *Cieniowania wzgórz* nie wpływa na sposób wyświetlania efektów 3D.  

Gdy **Cieniowanie wzgórz** jest **włączone**, obraz z cieniami rzeźby wydaje się bardziej szczegółowy, ciemniejszy i bardziej schodkowy niż obraz *Rzeźby 3D*. Wyjaśnieniem jest to, że *Cieniowanie wzgórz* podkreśla gradienty i kontrasty terenu, tworząc ostrzejszy i bardziej szczegółowy obraz. Funkcja *Rzeźba 3D* nadaje mapie bardziej płynny i wygładzony wygląd, łagodząc teren i potencjalnie zmniejszając widoczność niektórych drobniejszych szczegółów.


## Łączenie typów warstw {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Linie konturowe połączone z Cieniowaniem wzgórz](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Linie konturowe połączone z Nachyleniem](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Linie konturowe połączone z Cieniowaniem wzgórz w iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Linie konturowe połączone z Nachyleniem w iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd pozwala na łączenie wielu typów warstw mapy w celu uzyskania bardziej wizualnego wyświetlania.

- Połączenie **Linii konturowych** i **Cieniowania wzgórz** jest optymalne do wizualnej i numerycznej oceny stromości zboczy górskich.
- Połączenie warstw **Linii konturowych** i **Nachylenia** jest najlepsze do oceny stromości zboczy i znajdowania punktów o tej samej wysokości.
- Połączenie warstw **Rzeźby 3D** i **Cieniowania wzgórz** pozwala uzyskać bardziej realistyczną i wizualną reprezentację terenu, rzeźby i szczegółów krajobrazu. To połączenie jest szczególnie odpowiednie dla terenów górzystych i pagórkowatych.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style mapy)](../../user/map/vector-maps.md)

### Częste problemy i rozwiązania {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Jak przywrócić zakup wtyczki Topografia (dawniej Linie konturowe). [(sprawdź)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Linie konturowe, dane o wysokości lub rzeźba 3D nie są wyświetlane. [(sprawdź)](../troubleshooting/maps-data#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. Mapa automatycznie przełącza się w tryb 3D podczas nawigacji:  
    - Upewnij się, że przycisk **Tryb 3D** jest wyłączony w **Menu → Konfiguruj ekran → Przyciski → Przyciski domyślne**.  
    - Sprawdź, czy w **Menu → Konfiguruj mapę → Topografia** są włączone jakiekolwiek funkcje Terenu, które mogą wywoływać efekt 3D.