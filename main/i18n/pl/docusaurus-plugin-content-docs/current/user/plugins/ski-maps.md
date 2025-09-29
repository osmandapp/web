---
source-hash: 94e9e19b69bb27ccb319b0f36424500e67142fc93ca193486bb426595f06c638
sidebar_position: 13
title:  Widok mapy narciarskiej
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

Wtyczka Widok mapy narciarskiej OsmAnd pokazuje znane i popularne stoki, oficjalnie zatwierdzone tereny narciarskie oraz mapy tras większości ośrodków narciarskich. Mapy tras [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) są źródłem danych dla map narciarskich OsmAnd. Łącząc mapy wektorowe z mapami rastrowymi, mapa narciarska OsmAnd jest bardzo dokładna i będzie przydatna dla instruktorów, wspinaczy i entuzjastów sportów zimowych.

Mapa narciarska OsmAnd jest częścią map wektorowych i nie wymaga dodatkowego pobierania. Domyślnie jest wyłączona. Mapa narciarska OsmAnd to jeden ze [Styli mapy](../map/vector-maps.md), który zapewnia dodatkowe funkcje, podświetlając niektóre obiekty i czyniąc inne mniej widocznymi.

Poniżej przedstawiono dwa profile: ten po lewej jest przeznaczony do jazdy na nartach, a ten po prawej do jazdy samochodem. Profil narciarski podświetla trasy, kolejki linowe, kolory zimowe i wszystkie obiekty na mapie przydatne do nawigacji po terenie narciarskim.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapy narciarskie w systemie Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Brak map narciarskich w systemie Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapy narciarskie w systemie iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Brak map narciarskich w systemie iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Poniższe ustawienie powoduje wyświetlenie mapy narciarskiej OsmAnd na ekranie:

1. Włącz [wtyczkę Widok mapy narciarskiej](../plugins/index.md#enable--disable).
2. Ustaw styl mapy [Zimowy i narciarski](#set-winter-and-ski-map-style) dla wymaganego [profilu](../personal/profiles.md).
3. W razie potrzeby [połącz mapy](#combine-maps).


### Ustaw styl mapy Zimowy i narciarski {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*

![Włącz styl zimowy w systemie Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Styl mapy wtyczki map narciarskich w systemie Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*

![Włącz styl zimowy w systemie iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Styl mapy wtyczki map narciarskich w systemie iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Styl mapy Zimowy i narciarski podświetla szlaki, trasy skiturowe, tory saneczkowe oraz informacje związane z zimą i narciarstwem. Aby wyświetlić styl na mapie, należy dokonać następujących ustawień:

1. Wybierz wymagany [profil](../personal/profiles.md).
2. Otwórz [Konfiguruj mapę](../map/configure-map-menu.md).
3. Przewiń w dół do Styl mapy/Typ mapy, otwórz i zaznacz **Zimowy i narciarski**.

:::tip konfiguracje
Profil Narciarstwo jest przeznaczony do użytku w połączeniu ze stylami Zimowy i narciarski. Jednak typ nawigacji dla każdego konkretnego profilu można zmieniać i ustawiać indywidualnie, więc ostateczna konfiguracja profilu, stylu mapy i nawigacji zależy całkowicie od Twoich ustawień.
:::


### Połącz mapy {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Brak połączenia map w systemie Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![Z połączeniem map w systemie Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Brak połączenia map w systemie iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![Z połączeniem map w systemie iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

[Mapa wektorowa](../map/vector-maps.md) z dołączonym [stylem mapy Zimowy i narciarski](../map/vector-maps.md#winter-and-ski) może być uzupełniona o [Poziomice](../plugins/topography.md#contour-lines) i [Cieniowanie wzgórz](../plugins/topography.md#hillshade-slope-and-altitude-layers). Poniżej znajdują się dwa przykłady. Po lewej stronie pokazano trasy na domyślnej mapie wektorowej, a po prawej trasy na mapie wektorowej połączonej z mapą rastrową *Poziomice* i *Cieniowanie wzgórz*. W drugim przypadku mapa pokazuje więcej danych o wysokości, co pomaga oszacować trudność, ryzyko i odległość.


### Wyłącz styl mapy narciarskiej {#disable-ski-map-style}

Jeśli wolisz usunąć trasy i kolory zimowe z mapy lub sezon narciarski się skończył, wykonaj jedną z następujących czynności:

- Odznacz styl mapy [Zimowy i narciarski](#set-winter-and-ski-map-style) dla wymaganego profilu.
- Zmień [profil Narciarstwo](../personal/profiles.md) na dowolny inny.
- Wyłącz [wtyczkę Widok mapy narciarskiej](../plugins/index.md#enable--disable).


:::info odinstaluj wtyczkę
Wtyczka Widok mapy narciarskiej jest oddzielną aplikacją, a wyłączenie jej wyświetlania nie powoduje jej usunięcia. Jeśli chcesz ją odinstalować, przejdź do ustawień systemu Android, używając opcji *Otwórz ustawienia* w menu wtyczki.
:::


## Profil Narciarstwo {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profil Narciarstwo w systemie Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Profil Narciarstwo w systemie iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Style mapy Zimowy i narciarski można włączyć w dowolnym profilu. Ale jest on najcenniejszy w [profilu Narciarstwo](../personal/profiles.md), gdzie jest ustawiony domyślnie. Profil Narciarstwo jest bardzo wygodny do [nawigacji narciarskiej](../navigation/routing/ski-routing.md).


## Styl mapy narciarskiej {#ski-map-style}

Skorzystaj z [legendy mapy narciarskiej](../../user/map-legend/ski-map.md) w celu uzyskania wszelkich informacji. Pomaga ona zidentyfikować rodzaje tras na mapie, a także rodzaje kolejek linowych i inne cechy, które można odczytać z mapy.

Czytając mapę, możesz dowiedzieć się ważnych dla siebie szczegółów, takich jak trudność danej trasy, jej rodzaj, czy jest ratrakowana i czy jest oświetlona w nocy.

Opcje opisane tutaj są dostępne w [nawigacji narciarskiej](../navigation/setup/route-navigation.md). **Nawigacja narciarska** ustawia indywidualne opcje trasy, które dotyczą tylko narciarstwa.


:::info styl renderowania
Mapa narciarska OsmAnd jest zbudowana jako jeden ze stylów renderowania, który określa, które obiekty mają być pokazywane na mapie i jak mają wyglądać. Wszystkie style renderowania są opisane w pliku [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). Zasady definiujące wewnętrzną strukturę pliku XML można znaleźć w [dokumentacji renderowania](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Trasy według trudności {#pistes-by-difficulty}

| Kolor | Opis |
| --- | --- |
| ![Trasa dla początkujących](@site/static/img/plugins/ski-maps/1c_green_1.png) | Zielony - Trasa dla początkujących |
| ![Łatwe wzgórza](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Niebieski - Łatwe wzgórza |
| ![Stoki o średnim stopniu trudności](@site/static/img/plugins/ski-maps/3c_red_1.png) | Czerwony - Stoki o średnim stopniu trudności |
| ![Zaawansowany stopień trudności](@site/static/img/plugins/ski-maps/4c_black_1.png) | Szary - Stoki o zaawansowanym stopniu trudności |
| ![Ekspercki stopień trudności](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Żółty - Stoki o eksperckim stopniu trudności |

Trudność tras jest zwykle oznaczona określonymi kolorami. Kolory mogą się różnić w różnych krajach i ośrodkach. Poniżej kilka praktycznych wskazówek.

:::tip wskazówki
Bardziej szczegółowe wskazówki dla każdego rodzaju trudności trasy można znaleźć w [referencji trudności tras OSM](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) lub w innym źródle, które uwzględnia również nachylenie, przeszkody i zagrożenia.
:::


### Trasy według typów {#piste-by-types}

Trasy różnią się typem. Typ reprezentuje różne cechy trasy, aby sprostać wymaganiom różnych aktywności zimowych: narciarstwa alpejskiego, narciarstwa klasycznego, snowboardu, saneczkarstwa, narciarstwa backcountry, skitouringu, jazdy po muldach, narciarstwa nocnego itp. Zrozumienie [typu trasy](https://wiki.openstreetmap.org/wiki/Key:piste:type) na mapie pomaga zbudować optymalną trasę nawigacyjną.

- **Trasa zjazdowa/alpejska.**
Używana do nawigacji narciarskiej. Ten [typ trasy](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) ma kierunek i trudność, i najczęściej jest otoczony granicami ośrodka narciarskiego. Gdy trasa zjazdowa jest wybrana do nawigacji narciarskiej, kierunek trasy jest brany pod uwagę. Jeśli punkty wyjazdu i docelowy są ustalone przeciwnie do kierunku trasy, nawigacja prowadzi wzdłuż najbliższej kolejki linowej.

- **Trasa do narciarstwa biegowego/backcountry.**
Również używana do nawigacji narciarskiej. Ten [typ trasy](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) nie ma stopnia trudności, może mieć lub nie mieć kierunku i najczęściej wykracza poza granice ośrodka narciarskiego. Podczas nawigacji po tego typu trasach punkty wyjazdu i docelowy często można zamieniać.

- **Trasa skiturowa.**
Często używana przez narciarzy do podejścia w stylu klasycznym i zjazdu. Trudność trasy skiturowej jest często oznaczona odpowiednim kolorem. Nawigacja narciarska może zbudować trasę wzdłuż tego typu trasy, co pozwala na łączenie typów tras.

- **Inne trasy narciarskie.**
Typy tras, takie jak *Szlaki piesze* lub *Tory saneczkowe*, mogą być używane w profilach narciarskich lub pieszych.


### Ratrakowanie tras {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Włącz ratrakowanie w systemie Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Wyświetlanie ratrakowania w systemie Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Włącz ratrakowanie w systemie iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Wyświetlanie ratrakowania w systemie iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Aby sprawdzić na mapie, czy dana trasa jest ratrakowana, należy włączyć opcję **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** na liście **<Translate android="true" ids="rendering_category_details"/>** otwartej z menu [Konfiguruj mapę](../map/configure-map-menu.md).
Specjalne maszyny (ratraki) przygotowują trasy do odpowiednich aktywności, takich jak narciarstwo klasyczne, łyżwiarstwo i inne. Ta sama trasa może być ratrakowana w różny sposób na różnych obszarach.

### Trasy narciarskie {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Trasy wyłączone w systemie Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Trasy włączone w systemie Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Trasy wyłączone w systemie iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Trasy włączone w systemie iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Aby dowiedzieć się, po których trasach poza ośrodkiem narciarskim można nawigować, należy włączyć opcję **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** na liście **<Translate android="true" ids="rendering_category_routes"/>**, otwartej z menu [Konfiguruj mapę](../map/configure-map-menu.md).

Przy włączonym profilu Narciarstwo, nawigacji narciarskiej i [stylu mapy Zimowy i narciarski](../map/vector-maps.md#winter-and-ski), trasy [Stoki narciarskie](../map/vector-maps.md#routes) pokazują wszystkie typy tras, których nawigacja narciarska może użyć do budowania tras nawigacyjnych. Takie trasy narciarskie, jeśli są włączone, są zaznaczone fioletowym kolorem, głównie poza granicami ośrodka narciarskiego.


### Noc i oświetlenie {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Włącz tryb nocny i oświetlenie w systemie Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Noc i oświetlenie w systemie Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Włączanie trybu nocnego i oświetlenia w systemie iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Noc i oświetlenie w systemie iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

Styl **Zimowy i narciarski** może być używany z [trybem nocnym lub wschodu/zachodu słońca](../map/vector-maps.md#map-mode). To wygodny wybór dla tych, którzy preferują ciemne kolory lub przyciemnianie ekranu w nocy, a także dla tych, którzy uprawiają narciarstwo nocne. Wraz z trybem nocnym, mapy narciarskie OsmAnd mogą również pokazywać, które trasy mają oświetlenie za pomocą opcji [Oświetlenie uliczne](../map/vector-maps.md#details).

Obie opcje znajdują się w menu [Konfiguruj mapę](../map/configure-map-menu.md).

- Aby włączyć opcję ***Tryb nocny***, przewiń listę w dół:
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*

- Aby włączyć opcję ***Oświetlenie uliczne***, otwórz listę **<Translate android="true" ids="rendering_category_details"/>** i włącz opcję:
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style mapy)](../../user/map/vector-maps.md)