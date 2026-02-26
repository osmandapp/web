---
source-hash: 26ecc10e593a10b425e7d1bc880124a223b29d77fca08040a2c47952e03d4203
sidebar_position: 5
title:  Mapy wektorowe 
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

Mapy wektorowe są przeznaczone do użytku jako domyślne źródło danych map w OsmAnd, więc **musisz je pobrać na swoje urządzenie**. Mapy wektorowe obsługują ogromną liczbę stylów map dla różnych aktywności, takich jak jazda na rowerze, piesze wędrówki, jazda samochodem lub skuterem śnieżnym i inne.  

Każdy styl mapy można dostosować, aby podświetlić lub ukryć określone obiekty oraz przełączać się między trybem dziennym i nocnym. Dane mapy wektorowej można rozszerzyć o dane wektorowe i wyświetlać w domyślnym stylu mapy, takie jak informacje o *liniach konturowych*. Możesz *stworzyć własny styl mapy OsmAnd*, aby wyświetlić wymagane informacje.

Mapy wektorowe reprezentują dane przestrzenne, takie jak drogi, budynki, punkty i wielokąty, za pomocą geometrii matematycznej przechowywanej w formacie binarnym. Każdy element (węzeł, linia lub wielokąt) jest definiowany przez współrzędne i renderowany dynamicznie zgodnie z poziomem powiększenia oraz stylem mapy.

Ponieważ dane wektorowe nie są przechowywane jako stałe obrazy, ich wygląd, w tym kolor, szerokość linii, przezroczystość lub wzór, można łatwo modyfikować. To podejście umożliwia efektywne renderowanie, niskie zużycie pamięci i płynne skalowanie na dowolnym poziomie powiększenia bez utraty jakości.

:::info note
Bardzo małe wielokąty mogą być uproszczone lub zniekształcone podczas generowania danych mapy. Obiekty o powierzchni mniejszej niż około jeden metr kwadratowy mogą nie być wyświetlane. Aby uzyskać poprawną wizualizację, małe elementy powinny być mapowane jako pojedyncze węzły zamiast wielokątów.
:::


## Przypadki użycia {#use-cases}

Konfigurowalne style mapy to jedna z głównych zalet OsmAnd. Możesz dostosować wyświetlanie mapy do siebie i swoich hobby, dostosować wyświetlanie lub ukrywanie niektórych obiektów mapy, rozmiary i kolory tych obiektów oraz zmieniać skalę wyświetlania niektórych obiektów.


## Renderowanie mapy {#map-rendering}

### Style map {#map-styles}

OsmAnd oferuje kilka wbudowanych stylów map wektorowych zoptymalizowanych dla różnych aktywności. Oprócz domyślnych stylów możesz tworzyć i instalować własne niestandardowe style mapy na podstawie reguł renderowania.

Szczegółowy opis dostępnych stylów oraz instrukcje tworzenia niestandardowych stylów znajdziesz w artykule [Style map](../map/map-styles.md).

### Tryb mapy {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![Map Mode](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Map Mode](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

Mapa może być wyświetlana w jasnym lub ciemnym motywie w zależności od trybu wybranego z listy opcji. Domyślnie i dla wszystkich nowych użytkowników [styl mapy](#map-styles) jest zgodny z motywem wybranym w ustawieniach systemowych urządzenia.

- **<Translate android="true" ids="daynight_mode_day"/>**. Zawsze wyświetla mapę w jasnym motywie dla optymalnej widoczności w ciągu dnia.

- **<Translate android="true" ids="daynight_mode_night"/>**. Zawsze pokazuje mapę w ciemnym motywie, idealnym na noc lub w warunkach słabego oświetlenia.

- **Wschód / zachód słońca**. Automatycznie przełącza między motywami dziennym i nocnym zgodnie z lokalnymi czasami wschodu i zachodu słońca, które są szczegółowo opisane w tej zakładce w aplikacji.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Tylko Android*). Wykorzystuje czujnik światła urządzenia do automatycznego przełączania między jasnym i ciemnym motywem w zależności od poziomu oświetlenia otoczenia.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. Wyświetlanie mapy dostosowuje się do ogólnego motywu aplikacji, pokazując tryb dzienny w jasnym motywie i tryb nocny w ciemnym motywie. 

### Styl drogi {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Specjalne ustawienia dla dróg, w których można zmienić kolory, aby pasowały do atlasu drogowego lub dodać drogi o wysokim kontraście lub pogrubione kontury dróg.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Domyślny styl dla autostrad. Spójrz na [Legendę mapy](../map-legend/index.md).  
![Map road style default](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Styl niemieckiego atlasu drogowego.  
![Map road style german](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Styl amerykańskiego atlasu drogowego.  
![Map road style american](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Wysoki kontrast dróg.  
![Map road style high contrast](@site/static/img/map/map-road-style-high-contrast.png)
- **Blady**. Mniej kontrastowe kolory dróg.  
![Map road style bold outline](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Pogrubiony kontur dla dróg.  
![Map road style bold outline](@site/static/img/map/map-road-style-bold-outline.png)

### Szczegóły {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">

  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*  

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Pokazuje wielokąty, szlaki, punkty i znaki na mapie przy małym powiększeniu. Oznacza to, że można zobaczyć więcej szczegółów na mapie przy małym powiększeniu. Należy pamiętać, że renderowanie na urządzeniu może nie być szybkie.  
    ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Pokazuje rodzaj nawierzchni drogi. Kolor drogi pomaga zrozumieć, jaka jest nawierzchnia drogi, na przykład asfalt, trawa lub piasek. Zobacz [Legendę mapy](../map-legend/index.md).  
    ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Wskazuje jakość drogi. Wskazuje gładkość (nachylenie) drogi. Jak gładkie są twoje drogi: dobre, złe, być może okropne itp. Spójrz na [Legendę mapy](../map-legend/index.md), aby określić gładkość drogi.  
    ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**.  Pokazuje dostępność drogi: prywatna lub dozwolona, tylko dla służb ratunkowych lub droga płatna. Zobacz [Legendę mapy](../map-legend/index.md), aby znaleźć dostępne drogi.  
    ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. Funkcja [Strefy Niskiej Emisji (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) wyświetla zielone granice i etykiety "LEZ" na mapach dla obszarów w miastach, gdzie dostęp jest ograniczony dla niektórych zanieczyszczających pojazdów. Strefy LEZ mają na celu poprawę jakości powietrza poprzez ograniczenie wjazdu pojazdów, które spełniają określone normy emisji. Korzystanie z tej funkcji pomaga użytkownikom unikać kar poprzez identyfikację i omijanie tych zielonych stref, zapewniając zgodność z lokalnymi przepisami ochrony środowiska podczas podróży przez centra miast.  

    ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Różne kategorie budynków, takie jak mieszkalne, przemysłowe i handlowe, są oznaczone kolorami. Szczegóły można znaleźć w [Legendzie mapy](../map-legend/index.md).  
    ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Wyświetla oświetlone i nieoświetlone ulice, a także drogi podziemne i tymczasowo oświetlone. Sprawdź [Legendę mapy](../map-legend/index.md) w celu uzyskania szczegółów.  
    ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Zaprojektowana dla maperów, ta funkcja pokazuje odniesienia, uwagi i komentarze innych użytkowników na mapie.  
    ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Pokazuje izobaty. Musisz zainstalować [wtyczkę Morską](../plugins/nautical-charts) i pobrać mapy morskie.  
    ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Pokazuje zieloną ramkę i etykiety "NR" dla [terytorium rezerwatu przyrody](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Podkreśla obszary chronione zieloną granicą i etykietą "NR" dla stref ochrony dzikiej przyrody.  

    &nbsp;&nbsp;&nbsp;![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)

### Ukryj {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Aby poprawić widoczność mapy, może być konieczne ukrycie niektórych obiektów. Na przykład można ukryć wodę podczas korzystania z [map satelitarnych online z warstwą podkładu](../map/raster-maps.md#layers).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Ukryj granice regionalne wewnątrz krajów, ale granice państwowe są widoczne.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Ukryj wszystkie wielokąty obiektów naturalnych, funkcja specjalna dla [warstwy podkładu/nakładki](../map/raster-maps.md#layers).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Ukryj wszystkie wielokąty budynków.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Ukryj wszystkie wielokąty wód (morza, jeziora, zbiorniki itp.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Ukryj numery domów na mapie.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Ukryj obiekty proponowane - te obiekty, które są planowane do budowy, ale mają tylko projekt (projektowane drogi, skrzyżowania, budynki i inne).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Ukryj ikony POI z mapy. Jednak etykiety tych POI nadal będą widoczne na mapie.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Ukryj etykiety POI z mapy. Jednak ikony POI nadal będą widoczne na mapie.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Ukryj wszystkie obiekty podziemne, takie jak tunele, przejścia, piętra itp. Specjalne do czyszczenia map miast z nieużytecznych obiektów.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Ukryj wszystkie obiekty naziemne. Specjalne, aby zobaczyć tylko obiekty podziemne, takie jak tunele, przejścia itp.

### Transport {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>  

Podczas nawigacji po miastach potrzebny jest bardziej kontrastowy widok transportu publicznego i przystanków. Możesz dotknąć przystanku transportu publicznego i wybrać jedną z tras lub przystanków z listy. W tym ustawieniu wyświetlane są również trasy pociągów.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Pokazuje przystanki transportu publicznego.  
    ![Map transport stops](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Pokazuje trasy autobusowe, trolejbusowe i minibusowe.  
    ![Map transport bus](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Pokazuje trasy tramwajowe i kolejowe.  
    ![Map transport tram](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Pokazuje trasy podziemne.  
    ![Map transport subway](@site/static/img/map/map-transport-subway.png)


## Renderowanie tekstu {#text-rendering}

### Powiększenie mapy {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Możesz wybrać to ustawienie przez długie naciśnięcie przycisku "+" lub "-" na ekranie lub:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Możesz wybrać to ustawienie przez długie naciśnięcie przycisku "+" lub "-" na ekranie lub:  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

To ustawienie pomaga zmienić powiększenie mapy. Ma zastosowanie do map rastrowych i wektorowych. W przypadku map rastrowych stosuje efekt powiększenia, dzięki czemu etykiety tekstowe wyglądają na większe lub mniejsze. W przypadku map wektorowych sprawia, że mapa wygląda na bardziej lub mniej szczegółową, jeśli ustawisz ją na niską wartość, mapa będzie wyglądać na zaszumioną/wolną.  

- **75%**  
    ![Map magnifier 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**  
    ![Map magnifier 200%](@site/static/img/map/map-magnifier-200.png)

### Rozmiar tekstu {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>  

- **100%**  
    ![Map text size 100%](@site/static/img/map/map-text-size-100.png)

- **200%**  
    ![Map text size 200%](@site/static/img/map/map-text-size-200.png)

### Język mapy {#map-language}

Opcja **Język mapy** konfiguruje pisownię nazw na mapie OsmAnd dla poziomów powiększenia od 7 do 20 włącznie. Dla poziomów powiększenia od 2 do 6 nazwy są wyświetlane w języku ustawionym dla OsmAnd w menu ustawień systemowych (patrz sekcja *[Jak zmienić język aplikacji](../start-with/first-steps.md#how-to-change-app-language)*).  

Jeśli nazwy na mapie nie są przetłumaczone na wymagany język przez społeczność OSM, można użyć [nazw transliterowanych](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) lub *<Translate ios="true" ids="translit_names"/>* (iOS) przełącznik.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Nazwy lokalne**   
    ![Map language local names](@site/static/img/map/map-language-local-names_2.png)

- **Preferowany język** (ukraiński)   
    ![Map language ukrainian](@site/static/img/map/map-language-urkanian_2.png)

- **Użyj nazwy łacińskiej, jeśli brakuje**   
    ![Map language transliterate](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Nazwy lokalne**    
    ![Map language local names](@site/static/img/map/map-language-local-names_2.png)

- **Preferowany język** (ukraiński)  
    ![Map language ukrainian](@site/static/img/map/map-language-urkanian_2.png)

- **Pokaż nazwy lokalne**  (dodaje drugą etykietę, jeśli nazwa lokalna jest inna)  
    ![Map language local](@site/static/img/map/map-language-show-local_2.png)

- **Transliteruj nazwy**    
    ![Map language transliterate](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

</Tabs>  

### Czcionki mapy (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Map fonts Android version](@site/static/img/map/map_fonts.png) ![Map fonts version](@site/static/img/map/map_fonts_1.png)

W przypadku map w języku chińskim uproszczonym/tradycyjnym, japońskim i koreańskim mogą pojawić się nieprawidłowe znaki lub symbole (takie jak kwadraty), jeśli na urządzeniu brakuje niezbędnych czcionek. Ten problem występuje podczas renderowania nazw lokalnych i można go rozwiązać, pobierając wymagane czcionki za pośrednictwem OsmAnd.  

Niektóre powiązane problemy z czcionkami zostały udokumentowane na GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## Renderowanie topografii {#topography-rendering}

### * Linie konturowe {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Contour lines map style](@site/static/img/map/contour_lines.png)

Linie konturowe w OsmAnd są wyświetlane jako linie wysokości na mapach wektorowych. Aby z nich korzystać, należy najpierw włączyć [wtyczkę Rzeźba terenu](../plugins/topography.md), pobrać niezbędne dane regionalne i skonfigurować wyświetlanie. Ta funkcja nie jest domyślnie włączona i wymaga [zakupu](../purchases/index.md).  

Linie konturowe są kompatybilne ze wszystkimi stylami map i można je dostosować za pomocą menu [Linie konturowe](../plugins/topography.md#contour-lines). Aby uzyskać więcej szczegółów, odwiedź artykuł [Wtyczka Rzeźba terenu](../plugins/topography.md).

### * Głębokość morska {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Linie konturowe głębokości morskiej reprezentują obszary o równej głębokości, pomagając wizualizować zmiany topografii podwodnej. Ta funkcja jest dostępna we wszystkich stylach i trybach mapy i można ją dostosować z włączoną lub bez włączonej wtyczki Widok mapy morskiej.  

Aby uzyskać więcej szczegółów na temat widoku mapy morskiej, odwiedź stronę [wtyczki Mapy morskie](../plugins/nautical-charts).

### Budynki 3D {#3d-buildings}

<InfoAndroidOnly/> 

![3D Buildings](@site/static/img/map/3d_buildings_1_new.png) ![3D Buildings](@site/static/img/map/3d_buildings_2.png) 

Funkcja **Budynki 3D** wyświetla budynki jako objętościowe modele 3D zamiast płaskich kształtów. Budynki są generowane z [danych OpenStreetMap](https://wiki.openstreetmap.org/wiki/Simple_3D_Buildings), używając informacji o wysokości z tagów takich jak `height` i `building:levels`, gdy są dostępne. Budynki 3D są pokazywane tylko na wyższych poziomach powiększenia (widok miasta/ulicy), gdzie indywidualne budynki mogą być wyświetlone.  
Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → 3D buildings*  
Użyj głównego przełącznika, aby włączyć lub wyłączyć renderowanie 3D budynków. Aby oglądać budynki w 3D, pochyl mapę, umieszczając dwa palce na ekranie i przesuwając w górę.

Obecnie ta opcja jest dostępna tylko po włączeniu [wtyczki deweloperskiej OsmAnd](../plugins/development.md).  
Przejdź do: *<Translate android="true" ids="shared_string_menu,plugin_settings,debugging_and_development"/>*

Ustawienia budynków 3D są podzielone na dwie grupy: **Wygląd** i **Wydajność**.

**Wygląd: Kolor**. Kontroluje kolor budynków 3D. Po dotknięciu Koloru OsmAnd otwiera oddzielny ekran podglądu, na którym możesz zobaczyć mapę podczas dostosowywania ustawienia.
- **Styl mapy** — używa domyślnego koloru budynku z aktualnie wybranego stylu mapy.
- **Niestandardowy** — pozwala ustawić niestandardowy kolor budynku oddzielnie dla trybu Dzień / Noc.

:::tip Zakup
Dostosowywanie kolorów budynków 3D to [funkcja płatna](../purchases/index.md).  
:::

Jeśli niestandardowe kolory nie są zakupione, zobaczysz pusty stan z krótkim opisem i przyciskiem Pobierz. Jeśli Niestandardowy jest dostępny, możesz przełączać między Dniem i Nocą, wybrać kolor z palety (lub otworzyć Wszystkie kolory), a następnie dotknąć Zastosuj.

**Wygląd: Widoczność**. Kontroluje przezroczystość (opalescencję) budynków 3D. Użyj suwaka, aby ustawić widoczność jako procent. Niższe wartości czynią budynki bardziej przezroczystymi i pomagają zachować czytelność dróg/etykiet. Wyższe wartości sprawiają, że budynki wyglądają na bardziej solidne i wizualnie dominujące. Dotknięcie Widoczności również otwiera oddzielny ekran podglądu z suwakiem.

Na ekranach podglądu (Kolor / Widoczność) możesz użyć Resetuj do domyślnych z paska aplikacji, aby przywrócić wartość domyślną.

**Wydajność: Poziom szczegółowości**. Kontroluje, jak szczegółowa jest geometria budynku 3D:
- Niski (domyślny) — prostsza geometria.
- Wysoki — bardziej szczegółowa geometria.

**Wydajność: Odległość widoku**. Kontroluje, jak daleko od kamery są renderowane budynki 3D:
- Blisko (domyślny) — renderuje budynki bliżej ciebie.
- Daleko — renderuje budynki z większej odległości.

Obie opcje wydajności używają dwupozycyjnego przełącznika bezpośrednio na ekranie ustawień budynków 3D.


## Dodatkowe ustawienia {#additional-settings}

### Pokaż granice {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Ta funkcja pozwala przełączać widoczność granic dla wcześniej pobranych map z listy dostępnych map. Jej głównym celem jest pomoc w uporządkowaniu głównej mapy poprzez ukrycie konturów pobranych map, co jest szczególnie przydatne, jeśli masz zainstalowanych wiele map.  

Domyślnie granice map pojawią się po powiększeniu do poziomu 7 i znikną na poziomie powiększenia 3 i niższym.

:::tip Kolor Pokaż granice pobranych map
Gdy funkcja *Pokaż granice pobranych map* jest włączona, pobrane mapy są pokolorowane na **zielono** zarówno w wersji OsmAnd na Androida, jak i na iOS.  

Na Androidzie zarchiwizowane mapy są wyświetlane na **pomarańczowo**. W systemie iOS mapy, które można zaktualizować, są również oznaczone na **pomarańczowo**.
:::

### Siatka współrzędnych {#coordinates-grid}

:::tip Zakup
Dostosowywanie kolorów siatki współrzędnych to [funkcja płatna](../purchases/index.md).  
:::

Przejdź do: *Menu → Konfiguruj mapę → Pokaż → Siatka współrzędnych*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Coordinates grid menu](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>

Funkcja **Siatka współrzędnych** nakłada na mapę siatkę odniesienia, umożliwiając wizualizację linii szerokości i długości geograficznej w oparciu o różne systemy współrzędnych. Ta funkcja jest przydatna do precyzyjnego odniesienia lokalizacji i nawigacji geoprzestrzennej. 

Możesz skonfigurować następujące opcje:
- **Poziomy powiększenia:** ustaw minimalny i maksymalny poziom powiększenia (2 - 22), na którym siatka jest widoczna.
- **Pozycja etykiet:** wybierz między *Krawędziami* (domyślnie) lub *Środkiem* dla etykiet siatki.
- **Kolor siatki:** dostępny oddzielnie dla trybu Dzień/Noc. 
- **Format współrzędnych:** wybierz spośród kilku dostępnych formatów (patrz lista poniżej).

***Dostępne formaty współrzędnych:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Stopnie, Minuty, Sekundy)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Stopnie dziesiętne - domyślny format WGS84)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Stopnie, Minuty dziesiętne)
- **UTM** (EPSG:6387, Uniwersalny poprzeczny odwzorowanie Mercatora - system siatki strefowej). Minimalny poziom powiększenia to 9, jednocześnie wyświetlana jest tylko jedna strefa UTM, ponieważ strefy są oddzielone południkami co 6°
- **MGRS** (Wojskowy System Siatki Odniesienia)

Domyślnie aplikacja używa formatu współrzędnych wybranego w [Ustawieniach ogólnych](../personal/profiles.md#units--formats), ale możesz go zmienić bezpośrednio w tym menu.

[Szybka akcja](../widgets/quick-action.md#overview): Możesz również dodać szybki przełącznik *Pokaż/Ukryj siatkę współrzędnych* do grupy [Konfiguruj mapę](../widgets/quick-action.md#configure-map) dla szybkiego dostępu.


## Trasy {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)  ![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

Trasa to ścieżka, która jest z góry określona i należy nią podążać, aby dotrzeć do określonego celu. Trasa może być zoptymalizowana dla różnych rodzajów podróży, takich jak jazda na rowerze, piesze wędrówki, bieganie, transport publiczny i inne. Możesz przeczytać więcej o trasach i ich typach w artykule [Trasy](../map/routes.md).


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../map/interact-with-map.md)
- [Konfiguruj mapę](../map/configure-map-menu.md)
- [Style map](../map/map-styles.md)
- [Trasy](../map/routes.md)
- [Import / Eksport](../personal/import-export.md)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)