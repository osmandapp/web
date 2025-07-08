---
source-hash: 27a4297a5019f248c9db5c74a4569bcd2b0de8e623b0c0ff1053a5740868f8b2
sidebar_position: 5
title:  Mapy wektorowe (Style map)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Przegląd {#overview}

Mapy wektorowe są przeznaczone do używania jako domyślne źródło danych map w OsmAnd, więc **musisz pobrać je na swoje urządzenie**. Mapy wektorowe obsługują ogromną liczbę stylów map dla różnych aktywności, takich jak jazda na rowerze, piesze wędrówki, jazda samochodem lub skuterem śnieżnym i inne.

Każdy styl mapy można dostosować, aby wyróżnić lub ukryć określone obiekty oraz przełączać się między trybem dziennym i nocnym. Dane map wektorowych można uzupełnić danymi wektorowymi i wyświetlić w domyślnym stylu mapy, np. informacjami o *liniach konturowych*. Możesz *utworzyć własny styl mapy OsmAnd*, aby wyświetlić wymagane informacje.


## Przypadki użycia {#use-cases}

Możliwość dostosowania stylów map to jedna z głównych zalet OsmAnd. Możesz dostosować wyświetlanie mapy do siebie i swoich hobby, dostosować wyświetlanie lub ukrywanie niektórych obiektów mapy, rozmiary i kolory tych obiektów oraz zmienić skalę wyświetlania niektórych obiektów.


## Domyślne style map {#default-map-styles}

OsmAnd oferuje wiele stylów map i warstw danych, które są domyślnie dopasowane. Ta sekcja opisuje główne z nich dla trybów dziennego i nocnego.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![Styl mapy OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)

Standardowy styl renderowania mapy OsmAnd równoważy szczegółowość i prostotę, dzięki czemu idealnie nadaje się do eksploracji miast i terenów zewnętrznych. Szczegółowo przedstawia cechy miasta, takie jak ulice, budynki i przystanki komunikacji miejskiej, jednocześnie upraszczając wizualny bałagan, czyniąc mapy bardziej przejrzystymi.

Kluczowe korzyści obejmują mapowanie tras, jakość nawierzchni, ograniczenia dostępu, oznakowanie drogowe, renderowanie ścieżek w skali SAC, obiekty sportowe i szczegóły topograficzne, takie jak linie konturowe.


### Widok turystyczny {#touring-view}

![Styl mapy widoku turystycznego](@site/static/img/map/map-style-touring.png)

Styl turystyczny o wysokim kontraście i maksymalnej szczegółowości. Zawiera wszystkie opcje domyślnego stylu OsmAnd, wyświetlając jednocześnie jak najwięcej szczegółów, w szczególności dróg, ścieżek i innych sposobów podróżowania. Wyraźne rozróżnienie typów dróg w *atlasie turystycznym*. Nadaje się do użytku w dzień, w nocy i na zewnątrz.

### UniRS i LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Style UniRS i LightRS to style autorskie, które renderują podstawowe informacje mapy, ale w różnych schematach kolorystycznych.

- **Styl UniRS**. Ten styl jest zmodyfikowaną wersją domyślnego, aby zwiększyć kontrast dla ścieżek pieszych i rowerowych. Zachowuje klasyczną kolorystykę Mapnik.

    ![Styl mapy LightRS](@site/static/img/map/map-style-lightrs.png)

- **Styl LightRS**. Jest to prosty styl jazdy, który charakteryzuje się delikatnym trybem nocnym. Podkreśla drogi kontrastowym pomarańczowym kolorem, przyciemnia drugorzędne obiekty mapy i wyświetla cechy topograficzne, takie jak linie konturowe.

    ![Styl mapy UniRS](@site/static/img/map/map-style-unirs.png)

### Morskie {#nautical}

![Styl mapy morskiej](@site/static/img/map/map-style-nautical.png)

Jest to styl nawigacji morskiej, zawierający boje, latarnie morskie, trasy rzeczne, szlaki morskie, znaki, porty, znaki nawigacyjne i izobaty. Więcej informacji w artykule [Widok mapy morskiej](../plugins/nautical-charts.md).

### Zima i narty {#winter-and-ski}

![Styl mapy Zima i narty](@site/static/img/map/map-style-winter-ski.png)

Jest to styl dla sportów narciarskich, który opisuje trasy, wyciągi i trasy biegowe, a także zasłania drugorzędne obiekty mapy. **Styl Zima i narty** ma pomóc w nawigacji podczas sportów zimowych.

Możesz zobaczyć stoki narciarskie i inne szczegóły, takie jak trudność stoków i znaczniki wyciągów. Kluczowe korzyści to wygodne wyświetlanie stoków, wyciągów i innych elementów narciarskich. Mniej rozpraszających drugorzędnych obiektów mapy. Więcej informacji w artykule [Mapy narciarskie](../plugins/ski-maps.md).

### Topo {#topo}

![Styl mapy Topo](@site/static/img/map/map-style-topo.png)

Ten styl jest przeznaczony do pieszych wędrówek, biwakowania i jazdy na rowerze w naturze. Charakteryzuje się kontrastującymi drogami i elementami naturalnymi, różnymi typami szlaków, rozszerzonymi opcjami linii konturowych i dodatkowymi szczegółami. Jest czytelny w terenie. Ustawienie *Integralność nawierzchni* pozwala rozróżnić jakość drogi.

### OSM-carto {#osm-carto}

![Styl mapy OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Ten styl naśladuje domyślny [styl internetowy OpenStreetMap](https://www.openstreetmap.org/). Kod źródłowy wersji internetowej jest dostępny na [Githubie](https://github.com/gravitystorm/openstreetmap-carto), kod OsmAnd jest dostępny na [Githubie](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Pustynia {#desert}

![Styl mapy Pustynia](@site/static/img/map/map-style-desert.png)

Zaprojektowany dla pustyń i innych słabo zaludnionych regionów, oferujący bardziej szczegółowe informacje mapy.

### Offroad {#offroad}

![Styl mapy Offroad](@site/static/img/map/map-style-offroad.png)

Zaprojektowany do nawigacji terenowej, ten styl jest oparty na układzie mapy [Topo](#topo) i dobrze współpracuje z obrazami satelitarnymi jako podkładem. Charakteryzuje się cieńszymi głównymi drogami, aby podkreślić ścieżki, szlaki, trasy rowerowe i inne szlaki terenowe, dzięki czemu idealnie nadaje się do eksploracji nieutwardzonych tras w obszarach wiejskich lub odległych.

### Skuter śnieżny {#snowmobile}

![Styl mapy Skuter śnieżny](@site/static/img/map/map-style-snowmobile.png)

Dostosowany do nawigacji skuterem śnieżnym, ten styl podkreśla ścieżki, drogi i szlaki przyjazne dla skuterów śnieżnych. Podkreśla specjalistyczne ścieżki w regionach zaśnieżonych, oferując wyraźną nawigację po zaśnieżonych terenach, gdzie standardowe drogi mogą być niedostępne.


## Legenda mapy {#map-legend}

Legenda mapy służy jako klucz do zrozumienia symboli używanych na mapach OsmAnd. Wyjaśnia znaczenie różnych symboli mapy, w tym punktów, linii i obszarów. Na przykład, symbole takie jak niebieskie kręte linie wskazują rzeki, podczas gdy różne kolory i kształty mogą reprezentować budynki, ścieżki i trasy.

Legenda pomaga użytkownikom interpretować to, co widzą na mapie. Pełna legenda mapy OsmAnd jest dostępna [tutaj](../map-legend/index.md).


## Czcionki mapy (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*

![Czcionki mapy w wersji Android](@site/static/img/map/map_fonts.png) ![Wersja czcionek mapy](@site/static/img/map/map_fonts_1.png)

W przypadku map w uproszczonym/tradycyjnym języku chińskim, japońskim i koreańskim, mogą pojawić się nieprawidłowe znaki lub symbole (takie jak kwadraty), jeśli Twoje urządzenie nie posiada niezbędnych czcionek. Ten problem występuje podczas renderowania nazw lokalnych i można go rozwiązać, pobierając wymagane czcionki za pośrednictwem OsmAnd.

Niektóre powiązane problemy z czcionkami zostały udokumentowane na GitHubie: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Linie konturowe {#-contour-lines}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Styl mapy linii konturowych](@site/static/img/map/contour_lines.png)

Linie konturowe w OsmAnd są wyświetlane jako linie wysokości na mapach wektorowych. Aby ich użyć, musisz najpierw włączyć [wtyczkę Topografia](../plugins/topography.md), pobrać niezbędne dane regionalne i skonfigurować wyświetlanie. Ta funkcja nie jest domyślnie włączona i wymaga [zakupu](../purchases/index.md).

Linie konturowe są kompatybilne ze wszystkimi stylami map i można je dostosować za pomocą [menu Linii konturowych](../plugins/topography.md#contour-lines). Więcej szczegółów znajdziesz w artykule [Wtyczka Topografia](../plugins/topography.md).


## * Głębokość morska {#-nautical-depth}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Linie konturowe głębokości morskiej przedstawiają obszary o równej głębokości, pomagając wizualizować zmiany topografii podwodnej. Ta funkcja jest dostępna we wszystkich stylach i trybach mapy i można ją dostosować z włączoną lub wyłączoną wtyczką widoku mapy morskiej.

Więcej szczegółów na temat widoku mapy morskiej znajdziesz na stronie [wtyczki Mapy morskie](../plugins/nautical-charts).


## Pokaż granice {#show-borders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![pokaż-granice-andr](@site/static/img/map/show-borders-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![pokaż-granice-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Ta funkcja pozwala przełączać widoczność granic dla wcześniej pobranych map z listy dostępnych map. Jej głównym celem jest pomoc w uporządkowaniu głównej mapy poprzez ukrycie obrysów pobranych map, co jest szczególnie przydatne, jeśli masz zainstalowanych wiele map.

Domyślnie granice map pojawią się po powiększeniu do poziomu 7 i znikną na poziomie powiększenia 3 i niższych.

:::tip Kolor Pokaż granice pobranych map
Gdy funkcja *Pokaż granice pobranych map* jest włączona, pobrane mapy są kolorowane na **zielono** zarówno w wersji OsmAnd na Androida, jak i iOS.

Na Androidzie zarchiwizowane mapy są wyświetlane na **pomarańczowo**. W iOS mapy, które można zaktualizować, są również oznaczone na **pomarańczowo**.
:::


## Siatka współrzędnych {#coordinates-grid}

<InfoAndroidOnly />

Przejdź do: *Menu → Konfiguruj mapę → Pokaż → Siatka współrzędnych*

![Menu siatki współrzędnych](@site/static/img/map/coordinates_grid_settings_andr.png)

Funkcja **Siatka współrzędnych** nakłada na mapę siatkę odniesienia, umożliwiając wizualizację linii szerokości i długości geograficznej w oparciu o różne systemy współrzędnych. Ta funkcja jest przydatna do precyzyjnego odniesienia lokalizacji i nawigacji geoprzestrzennej.

***Dostępne formaty współrzędnych:***

- **DD°MM′SS″** (Stopnie, Minuty, Sekundy)
- **DD.DDDDD°** (Stopnie dziesiętne - domyślny format WGS84)
- **DD°MM.MMM′** (Stopnie, Minuty dziesiętne)
- **MGRS** (Wojskowy System Odniesienia Siatkowego)
- **UTM** (Uniwersalny Poprzeczny Merkator - system siatkowy oparty na strefach)

:::note

1. *Ograniczenia siatki UTM:*
    - Minimalny poziom powiększenia do wyświetlania siatki UTM to 9.
    - Wyświetlana jest tylko jedna strefa UTM na raz, ponieważ strefy są oddzielone południkami co 6°.

2. *Siatka WGS84 obsługuje trzy różne tryby:* stopnie dziesiętne, stopnie+minuty i stopnie+minuty+sekundy.

:::

***Obsługiwane systemy współrzędnych:***

OsmAnd obsługuje wiele **projekcji bazowych** do wyświetlania linii siatki geograficznej:

| **Projekcja** | **Kod EPSG** | **Opis** |
|----------------|-------------|----------------|
| **WGS84** | EPSG:4326 | Domyślny system odniesienia szerokości/długości geograficznej, używany globalnie. |
| **Mercator** | EPSG:3857 | Używany do mapowania internetowego (Google Maps, OpenStreetMap itp.). |
| **UTM** | EPSG:6387 | Dzieli świat na **60 stref** dla dokładnego pozycjonowania lokalnego. |
| **MGRS** | - | Wojskowy System Odniesienia Siatkowego (rozszerzenie UTM). |



***Ustawienia poziomu powiększenia:***

- Linie siatki pojawiają się w zależności od poziomu powiększenia, między **2 – 22**.
- Linie dynamicznie dostosowują podziały współrzędnych w zależności od poziomu powiększenia.

**Domyślnie aplikacja używa formatu współrzędnych wybranego w** [Ustawieniach ogólnych](../personal/profiles.md#units--formats).


## Konfiguruj styl mapy {#configure-map-style}

### Tryb mapy {#map-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*

![Tryb mapy](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Tryb mapy](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

Mapa może być wyświetlana w jasnym lub ciemnym motywie w zależności od trybu wybranego z listy opcji. Domyślnie i dla wszystkich nowych użytkowników, [styl mapy](#default-map-styles) jest zgodny z motywem wybranym w ustawieniach systemowych urządzenia.

- **<Translate android="true" ids="daynight_mode_day"/>**. Zawsze wyświetla mapę w jasnym motywie dla optymalnej widoczności w ciągu dnia.

- **<Translate android="true" ids="daynight_mode_night"/>**. Zawsze wyświetla mapę w ciemnym motywie, idealnym do warunków nocnych lub słabego oświetlenia.

- **Wschód / Zachód słońca**. Automatycznie przechodzi między motywami dziennym i nocnym zgodnie z lokalnymi godzinami wschodu i zachodu słońca, które są szczegółowo opisane w tej zakładce w aplikacji.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Tylko Android*). Wykorzystuje czujnik światła urządzenia do automatycznego przełączania między jasnym i ciemnym motywem zgodnie z poziomem światła otoczenia.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. Wyświetlanie mapy dostosowuje się do ogólnego motywu aplikacji, pokazując tryb dzienny w jasnym motywie i tryb nocny w ciemnym motywie.


### Szczegóły {#details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">


*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Pokazuje wielokąty, szlaki, punkty i znaki na mapie przy niskim powiększeniu. Oznacza to, że możesz zobaczyć więcej szczegółów na mapie przy niskim powiększeniu. Należy pamiętać, że renderowanie na Twoim urządzeniu może nie być szybkie.
    ![Parametr mapy - Więcej szczegółów](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Pokazuje typ nawierzchni drogi. Kolor drogi pomaga zrozumieć, jaka jest nawierzchnia drogi, np. asfalt, trawa lub piasek. Zobacz [Legendę mapy](../map-legend/index.md).
    ![Parametr mapy - Nawierzchnia drogi](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Wskazuje jakość drogi. Wskazuje gładkość (nachylenie) drogi. Jak gładkie są Twoje drogi: dobre, złe, być może straszne itp. Spójrz na [Legendę mapy](../map-legend/index.md), aby określić gładkość swojej drogi.
    ![Parametr mapy - Gładkość drogi](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Pokazuje dostępność drogi: prywatna lub dozwolona, tylko dla służb ratunkowych lub płatna. Zobacz [Legendę mapy](../map-legend/index.md), aby znaleźć dostępne drogi.
    ![Parametr mapy - Dostęp do drogi](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. Funkcja [Strefy niskiej emisji (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) wyświetla zielone granice i etykiety „LEZ” na mapach dla obszarów w miastach, gdzie dostęp jest ograniczony dla niektórych pojazdów zanieczyszczających. LEZ mają na celu poprawę jakości powietrza poprzez ograniczenie wjazdu pojazdom spełniającym określone normy emisji. Korzystanie z tej funkcji pomaga użytkownikom uniknąć kar poprzez identyfikowanie i nawigowanie wokół tych zielonych stref, zapewniając zgodność z lokalnymi przepisami środowiskowymi podczas podróży przez centra miast.

    ![Parametr mapy - Strefy niskiej emisji](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Różne kategorie budynków, takie jak mieszkalne, przemysłowe i handlowe, są kodowane kolorami. Szczegóły znajdziesz w [Legendzie mapy](../map-legend/index.md).
    ![Parametr mapy - Kolorowe budynki](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Wyświetla oświetlone i nieoświetlone ulice, a także drogi podziemne i tymczasowo oświetlone. Sprawdź [Legendę mapy](../map-legend/index.md), aby uzyskać szczegółowe informacje.
    ![Parametr mapy - Oświetlenie uliczne](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Zaprojektowana dla kartografów, ta funkcja pokazuje odniesienia, uwagi i komentarze innych użytkowników na mapie.
    ![Parametr mapy - Asystent mapy](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Pokazuje izobaty morskie. Musisz zainstalować [wtyczkę Morską](../plugins/nautical-charts) i pobrać mapy morskie.
    ![Parametr mapy - Izobaty](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Pokazuje zieloną tablicę i etykiety „NR” dla [terytorium rezerwatu przyrody](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Podkreśla obszary chronione zieloną obwódką i etykietą „NR” dla stref ochrony dzikiej przyrody.

    &nbsp;&nbsp;&nbsp;![Parametr mapy - Rezerwat przyrody](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZs aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Designed for mappers, this feature shows references, remarks, and comments from other users on the map. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|
-->

### Trasy {#routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Trasy mapy - trasy rowerowe](@site/static/img/map/map-routes-cycle-routes.png) ![Trasy mapy - sieć piesza](@site/static/img/map/map-routes-hiking-network.png)

Trasa to z góry określona ścieżka, którą należy podążać, aby dotrzeć do określonego celu. Trasę można zoptymalizować pod kątem różnych rodzajów podróży, takich jak jazda na rowerze, piesze wędrówki, bieganie, transport publiczny i inne. Więcej o trasach i ich typach można przeczytać w artykule [Trasy](../map/routes.md).


### Transport {#transport}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>

Podczas nawigacji po miastach potrzebujesz bardziej kontrastowego widoku transportu publicznego i przystanków. Możesz dotknąć przystanku transportu publicznego i wybrać jedną z tras lub przystanków z listy. Trasy pociągów są również wyświetlane w tym ustawieniu.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Pokazuje przystanki transportu publicznego.
    ![Przystanki transportu mapy](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Pokazuje trasy autobusowe, trolejbusowe i wahadłowe.
    ![Autobus transportu mapy](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Pokazuje trasy tramwajowe i kolejowe.
    ![Tramwaj transportu mapy](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Pokazuje trasy metra.
    ![Metro transportu mapy](@site/static/img/map/map-transport-subway.png)

### Ukryj {#hide}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>

Aby poprawić widoczność mapy, może być konieczne ukrycie niektórych obiektów. Na przykład, możesz ukryć wodę podczas korzystania z [internetowych map satelitarnych z warstwą podkładową](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Ukryj granice regionalne wewnątrz krajów, ale granice państw są widoczne.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Ukryj wszystkie wielokąty obiektów naturalnych, specjalna funkcja dla [warstwy podkładowej/nakładkowej](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Ukryj wszystkie wielokąty budynków.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Ukryj wszystkie wielokąty wody (mórz, jezior, zbiorników itp.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Ukryj numery domów na mapie.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Ukryj proponowane obiekty - te obiekty, które są planowane do budowy, ale mają tylko projekt (projektowane drogi, skrzyżowania, budynki i inne).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Ukryj ikony POI z mapy. Jednak etykiety tych POI nadal będą wyświetlane na mapie.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Ukryj etykiety POI z mapy. Jednak ikony POI nadal będą wyświetlane na mapie.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Ukryj wszystkie obiekty podziemne, takie jak tunele, przejścia, piętra itp. Specjalne do czyszczenia map miast z nieużytecznych obiektów.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Ukryj wszystkie obiekty naziemne. Specjalne do oglądania tylko obiektów podziemnych, takich jak tunele, przejścia itp.

### Styl drogi {#road-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Specjalne ustawienia dla dróg, gdzie można zmienić kolory, aby pasowały do atlasu drogowego lub dodać drogi o wysokim kontraście lub pogrubione obrysy dróg.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Domyślny styl dla autostrad. Zobacz [Legendę mapy](../map-legend/index.md).
![Domyślny styl drogi mapy](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Styl niemieckiego atlasu drogowego.
![Niemiecki styl drogi mapy](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Styl amerykańskiego atlasu drogowego.
![Amerykański styl drogi mapy](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Wysoki kontrast dróg.
![Wysoki kontrast stylu drogi mapy](@site/static/img/map/map-road-style-high-contrast.png)
- **Jasny**. Mniej kontrastowe kolory dróg.
![Jasny styl drogi mapy](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Pogrubiony obrys dróg.
![Pogrubiony obrys stylu drogi mapy](@site/static/img/map/map-road-style-bold-outline.png)


### Rozmiar tekstu {#text-size}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>

- **100%**
    ![Rozmiar tekstu mapy 100%](@site/static/img/map/map-text-size-100.png)

- **200%**
    ![Rozmiar tekstu mapy 200%](@site/static/img/map/map-text-size-200.png)


### Lupa mapy {#map-magnifier}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Możesz wybrać to ustawienie, długo naciskając przycisk „+” lub „-” na ekranie lub:
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Możesz wybrać to ustawienie, długo naciskając przycisk „+” lub „-” na ekranie lub:
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

To ustawienie pomaga zmienić powiększenie mapy. Dotyczy map rastrowych i wektorowych. W przypadku map rastrowych stosuje efekt powiększenia, więc etykiety tekstowe wyglądają na większe lub mniejsze. W przypadku map wektorowych sprawia, że mapa wygląda na bardziej lub mniej szczegółową; jeśli ustawisz niską wartość, mapa będzie wyglądać na zaszumioną/wolną.

- **75%**
    ![Lupa mapy 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**
    ![Lupa mapy 200%](@site/static/img/map/map-magnifier-200.png)


### Język mapy {#map-language}

Opcja **Język mapy** konfiguruje pisownię nazw na mapie OsmAnd dla poziomów powiększenia od 7 do 20 włącznie. Dla poziomów powiększenia od 2 do 6 nazwy są wyświetlane w języku ustawionym dla OsmAnd w menu ustawień systemowych (patrz sekcja *[Jak zmienić język aplikacji](../start-with/first-steps.md#how-to-change-app-language)*).

Jeśli nazwy na mapie nie są przetłumaczone na wymagany język przez społeczność OSM, możesz użyć [nazw transliterowanych](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) lub *<Translate ios="true" ids="translit_names"/>* (iOS).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

</TabItem>

</Tabs>

- **Nazwy lokalne**
    ![Język mapy nazwy lokalne](@site/static/img/map/map-language-local-names_2.png)

- **Nazwy ukraińskie**
    ![Język mapy ukraiński](@site/static/img/map/map-language-urkanian_2.png)

- **Pokaż nazwy lokalne**
    ![Język mapy pokaż lokalne](@site/static/img/map/map-language-show-local_2.png)

- **Transliteruj nazwy**
    ![Język mapy transliteruj](@site/static/img/map/map-language-transliterate_2.png)


## Niestandardowy styl mapy {#custom-map-style}

Jeśli masz osobisty lub zewnętrzny niestandardowy styl mapy utworzony zgodnie ze [Specyfikacją](../../technical/osmand-file-formats/osmand-rendering-style.md), możesz zainstalować go na swoim urządzeniu w następujący sposób:

- Skopiuj plik `.render.xml` na swoje urządzenie i otwórz go za pomocą OsmAnd.
- Użyj [standardowych okien dialogowych importu/eksportu](../personal/import-export.md), aby wyeksportować lub zaimportować style renderowania. Jeśli utworzysz pakiet `.osf`, działa on jako wtyczka, którą możesz udostępniać innym.
- Po instalacji możesz wybrać styl mapy z menu.


## Powiązane artykuły {#related-articles}

- [Import / Eksport](../personal/import-export.md)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)

> *Ostatnia aktualizacja: marzec 2025*