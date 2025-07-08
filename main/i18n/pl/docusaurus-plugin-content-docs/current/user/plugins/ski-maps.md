---
source-hash: f14066ee1c93315ba000b7389de0d0c6a42230c90308779a1b3a10e9a16d1fc7
sidebar_position: 13
title: Widok mapy narciarskiej
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Przegląd {#overview}

Wtyczka Widok mapy narciarskiej OsmAnd pokazuje słynne i popularne stoki, oficjalnie zatwierdzone tereny narciarskie oraz mapy tras większości ośrodków narciarskich. [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) mapy tras są źródłem danych dla map narciarskich OsmAnd. Połączone mapy wektorowe z mapami rastrowymi, mapa narciarska OsmAnd jest bardzo dokładna i będzie przydatna dla instruktorów, wspinaczy i entuzjastów sportów zimowych.

Mapa narciarska OsmAnd jest częścią map wektorowych i nie wymaga dodatkowych pobrań. Jest domyślnie wyłączona. Mapa narciarska OsmAnd jest jednym ze [Stylów mapy](../map/vector-maps.md), który zapewnia dodatkowe funkcje poprzez podświetlanie niektórych obiektów i uczynienie innych mniej widocznymi.

Poniżej przedstawiono dwa profile: ten po lewej stronie jest do jazdy na nartach, a ten po prawej do jazdy samochodem. Profil narciarski podświetla szlaki, drogi powietrzne, zimowe kolory i wszystkie obiekty mapy przydatne do nawigacji po terenie narciarskim.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapy narciarskie w Androidzie](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Brak map narciarskich w Androidzie](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapy narciarskie w iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Brak map narciarskich w iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Wymagane parametry konfiguracji {#required-setup-parameters}

Poniższe ustawienie sprawia, że mapa narciarska OsmAnd pojawia się na ekranie:

1. Włącz [wtyczkę Widok mapy narciarskiej](../plugins/index.md#enable--disable).
2. Ustaw styl mapy [Zima i Narty](#set-winter-and-ski-map-style) dla wymaganego [profilu](../personal/profiles.md).
3. W razie potrzeby [połącz mapy](#combine-maps).


### Ustaw styl mapy Zima i Narty {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*

![Włącz styl zimowy w Androidzie](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Styl mapy wtyczki map narciarskich Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*

![Włącz styl zimowy w iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Styl mapy wtyczki map narciarskich iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Styl mapy Zima i Narty podświetla szlaki, trasy narciarskie, trasy saneczkowe oraz informacje związane z zimą i narciarstwem. Aby wyświetlić styl na mapie, należy dokonać następujących ustawień:

1. Wybierz wymagany [profil](../personal/profiles.md).
2. Otwórz [Konfiguruj mapę](../map/configure-map-menu.md).
3. Przewiń w dół do Styl mapy/Typ mapy, otwórz go i zaznacz **Zima i Narty**.

:::tip konfiguracje
Profil narciarski jest przeznaczony do użytku w połączeniu ze stylami Zima i Narty. Jednakże typ nawigacji dla każdego konkretnego profilu może być zmieniany i ustawiany indywidualnie, więc ostateczna konfiguracja profilu, stylu mapy i nawigacji całkowicie zależy od Twoich ustawień.
:::


### Połącz mapy {#combine-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Brak kombinacji map w Androidzie](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![Z kombinacją map w Androidzie](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Brak kombinacji map w iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![Z kombinacją map w iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

[Mapa wektorowa](../map/vector-maps.md) ze stylem mapy [Zima i Narty](../map/vector-maps.md#winter-and-ski) może być uzupełniona o [Linie konturowe](../plugins/topography.md#show-contour-linesterrain) i [Cieniowanie wzgórz](../plugins/topography.md#hillshade-map). Poniżej przedstawiono dwa przykłady. Ścieżki na domyślnej mapie wektorowej są pokazane po lewej stronie, a ścieżki na mapie wektorowej połączonej z rastrową mapą *Linii konturowych* i *Cieniowania wzgórz* są pokazane po prawej stronie. W drugim przypadku mapa pokazuje więcej danych wysokościowych, aby pomóc w ocenie trudności, ryzyka i odległości.


### Wyłącz styl mapy narciarskiej {#disable-ski-map-style}

Jeśli preferowane jest usunięcie szlaków i zimowych kolorów z mapy, lub sezon narciarski się skończył, wykonaj jedną z następujących czynności:

- Odznacz styl mapy [Zima i Narty](#set-winter-and-ski-map-style) dla wymaganego profilu.
- Zmień [profil narciarski](../personal/profiles.md) na dowolny inny profil.
- Wyłącz [wtyczkę Widok mapy narciarskiej](../plugins/index.md#enable--disable).


:::info odinstaluj wtyczkę
Wtyczka Przeglądarka map narciarskich jest osobną aplikacją, a wyłączenie jej wyświetlania nie usuwa jej. Jeśli chcesz ją odinstalować, przejdź do ustawień Androida, używając *Otwórz ustawienia* w menu wtyczki.
:::


## Profil narciarski {#skiing-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Kontury głębokości morskiej w Androidzie](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Kontury głębokości w iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Style map Zima i Narty można włączyć w dowolnym profilu. Ale jest to najbardziej wartościowe w [profilu narciarskim](../personal/profiles.md), gdzie jest domyślnie ustawione. Profil narciarski jest bardzo wygodny do [nawigacji narciarskiej](../navigation/routing/ski-routing.md).


## Styl mapy narciarskiej {#ski-map-style}

Użyj [legendy mapy narciarskiej](../../user/map-legend/ski-map.md) jako odniesienia. Pomaga ona zidentyfikować typy tras na mapie, a także typy dróg powietrznych i inne cechy, które można odczytać z mapy.

Czytając mapę, możesz dowiedzieć się o szczegółach, które są dla Ciebie ważne, takich jak trudność danej trasy, typ trasy, czy jest ona przygotowywana, i czy trasa jest oświetlona w nocy.

Opcje opisane tutaj są dostępne w [Nawigacji narciarskiej](../navigation/setup/route-navigation.md). **Nawigacja narciarska** ustawia indywidualne opcje trasy, które dotyczą tylko jazdy na nartach.


:::info styl renderowania
Mapa narciarska OsmAnd jest zbudowana jako jeden ze stylów renderowania, który określa, które obiekty mają być wyświetlane na mapie i ich wygląd. Wszystkie style renderowania są opisane w pliku [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). Zasady definiujące wewnętrzną strukturę pliku XML znajdują się w [dokumentacji renderowania](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Trasy według trudności {#pistes-by-difficulty}

| Kolor | Opis |
| --- | --- |
| ![Trasa dla początkujących](@site/static/img/plugins/ski-maps/1c_green_1.png) | Zielony - Trasa dla początkujących |
| ![Łatwe wzniesienia](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Niebieski - Łatwe wzniesienia |
| ![Stoki średniozaawansowane](@site/static/img/plugins/ski-maps/3c_red_1.png) | Czerwony - Stoki średniozaawansowane |
| ![Zaawansowany poziom trudności](@site/static/img/plugins/ski-maps/4c_black_1.png) | Szary - Stoki o zaawansowanym poziomie trudności |
| ![Ekspert poziom trudności](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Żółty - Stoki o eksperckim poziomie trudności |

Trudność tras jest zazwyczaj oznaczana konkretnymi kolorami. Kolory mogą się różnić w zależności od kraju i ośrodka. Poniżej przedstawiono kilka praktycznych wskazówek.

:::tip wskazówki
Więcej szczegółowych wskazówek dotyczących każdego typu trudności trasy można znaleźć w [referencjach trudności tras OSM](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) lub w innym źródle, które uwzględnia również stoki, przeszkody i zagrożenia.
:::


### Trasa według typów {#piste-by-types}

Trasy różnią się typem. Typ reprezentuje różne cechy trasy, aby spełnić wymagania różnych aktywności zimowych: narciarstwa alpejskiego, klasycznego łyżwiarstwa, snowboardingu, jazdy na sankach, narciarstwa biegowego, skitouringu, narciarstwa na muldach, narciarstwa nocnego itp. Zrozumienie [typu trasy](https://wiki.openstreetmap.org/wiki/Key:piste:type) na mapie pomaga zbudować optymalną trasę nawigacyjną.

- **Trasa zjazdowa/alpejska.**
Używana do nawigacji narciarskiej. Ten [typ trasy](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) ma kierunek i trudność, i najczęściej jest otoczony granicami ośrodka narciarskiego. Gdy trasa zjazdowa jest wybrana do nawigacji narciarskiej, uwzględniany jest kierunek trasy. Jeśli punkty początkowy i docelowy są ustalone przeciwnie do kierunku trasy, nawigacja odbywa się wzdłuż najbliższej drogi powietrznej.

- **Trasa narciarstwa biegowego/backcountry.**
Również używana do nawigacji narciarskiej. Ten [typ trasy](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) nie ma trudności, może mieć lub nie mieć kierunku, i najczęściej wykracza poza granice ośrodka narciarskiego. Podczas nawigacji wzdłuż tego typu tras, punkty początkowy i docelowy często mogą być zamienione.

- **Trasa skitouringu.**
Często używana przez narciarzy do podejścia nordyckiego i zjazdu. Trudność trasy skitouringu jest często oznaczana odpowiednim kolorem. Nawigacja narciarska może zbudować trasę wzdłuż tego typu trasy, co pozwala na łączenie typów tras.

- **Inna trasa narciarska.**
Typy tras, takie jak *Szlaki turystyczne* lub *Szlaki saneczkowe*, mogą być używane do profili narciarskich lub turystycznych.


### Trasy przygotowane {#grooming-trails}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Włącz przygotowanie w Androidzie](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Przygotowanie wyświetlone w Androidzie](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Włącz przygotowanie w iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Przygotowanie wyświetlone w iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Aby sprawdzić na mapie, czy dana trasa jest przygotowana, należy włączyć opcję **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** na liście **<Translate android="true" ids="rendering_category_details"/>** otwartej z menu [Konfiguruj mapę](../map/configure-map-menu.md). Specjalne maszyny przygotowują trasy, aby były odpowiednie do danej aktywności, takiej jak klasyczne łyżwiarstwo, łyżwiarstwo figurowe i inne. Ta sama trasa może być przygotowywana inaczej w różnych obszarach.

### Trasy narciarskie {#ski-slope-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Trasy wyłączone w Androidzie](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Trasy włączone w Androidzie](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Trasy wyłączone w iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Trasy włączone w iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Aby dowiedzieć się, które trasy poza ośrodkiem narciarskim można nawigować, należy włączyć opcję **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** na liście **<Translate android="true" ids="rendering_category_routes"/>**, otwartej z menu [Konfiguruj mapę](../map/configure-map-menu.md).

Z włączonym profilem narciarskim, nawigacją narciarską i stylem mapy [Zima i Narty](../map/vector-maps.md#winter-and-ski), trasy [Stoków narciarskich](../map/vector-maps.md#routes) pokazują wszystkie typy tras, które nawigacja narciarska może wykorzystać do budowania tras nawigacyjnych. Takie trasy narciarskie, jeśli są włączone, są obrysowane kolorem fioletowym, głównie poza granicami ośrodka narciarskiego.


### Noc i oświetlenie {#night-and-lighting}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Włącz tryb nocny i oświetlenie w Androidzie](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Noc i oświetlenie w Androidzie](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Włączanie trybu nocnego i oświetlenia w iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Noc i oświetlenie w iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

Styl **Zima i narty** może być używany z [trybem nocnym lub wschodu/zachodu słońca](../map/vector-maps.md#map-mode). Wygodny wybór dla tych, którzy preferują ciemne kolory lub przyciemnianie ekranu w nocy, a także dla tych, którzy uprawiają narciarstwo nocne. Wraz z trybem nocnym, mapy narciarskie OsmAnd mogą również pokazywać, które trasy mają oświetlenie, za pomocą opcji [Oświetlenie uliczne](../map/vector-maps.md#details).

Obie opcje znajdują się w menu [Konfiguruj mapę](../map/configure-map-menu.md).

- Aby włączyć opcję ***Tryb nocny***, przewiń listę w dół:
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*

- Aby włączyć opcję ***Oświetlenie uliczne***, otwórz listę **<Translate android="true" ids="rendering_category_details"/>** i włącz opcję:
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: grudzień 2024*