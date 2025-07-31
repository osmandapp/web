---
source-hash: b955b527f4a6288fa803d731df2f410db4fb91c6a6b0ec46ae14193d525bf995
sidebar_position: 7
title:  Widok mapy morskiej
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Przegląd {#overview}

:::info Funkcja płatna
Wtyczka Widok mapy morskiej jest [płatną funkcją](../purchases/index.md) aplikacji OsmAnd.
:::

Widok mapy morskiej to szczegółowa graficzna reprezentacja oceanów, mórz, obszarów przybrzeżnych i rzek, która pomaga nawigować po wodzie i poznawać popularne trasy, przeszkody na drodze wodnej, najbliższe porty, kotwicowiska i inne ważne punkty orientacyjne.

Mapa morska to bardzo szczegółowa mapa topograficzna, która pomaga sternikom nawigować statkiem na wybranym kursie na wodzie. Jest podobna do mapy drogowej dla podróżujących samochodem. Często nazywana „mapą morską” ze względów historycznych, jest szczegółową graficzną reprezentacją oceanów, mórz, obszarów przybrzeżnych i rzek.

Mapy morskie są ważne dla zawodowych żeglarzy i amatorów, którzy wynajmują łódź do rejsów po kanałach miasta. Mapy dostarczają im różnych informacji, takich jak trasy żeglugowe, światła nawigacyjne, strefy niebezpieczne, strefy, w których dozwolone lub zabronione jest żeglowanie lub cumowanie itp.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapy morskie](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapy morskie](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Dlaczego motyw morski ma znaczenie {#why-the-nautical-theme-matters}

Wszyscy zawodowi żeglarze muszą mieć na swoich statkach oficjalne mapy morskie. Mapy te są publikowane przez autoryzowane agencje i są dość drogie. Agencje inwestują dużo w aktualizowanie map. Wydają regularne aktualizacje map, ale ponieważ weryfikacja informacji i przetwarzanie aktualizacji zajmuje czas, mapy morskie nigdy nie są w pełni aktualne.

Oparte na danych [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), mapy morskie OsmAnd są tworzone przez ludzi, którzy ich używają. Każdy użytkownik mapy może przyczynić się do jej tworzenia, dodając informacje, które uważa za ważne i przydatne dla siebie, dzięki czemu mapa staje się bardziej szczegółowa i dokładna, idealna do orientacji lub planowania trasy.


## Wymagane parametry konfiguracji {#required-setup-parameters}

Poniższa konfiguracja sprawia, że mapa morska pojawia się na ekranie:

1. [Kup](../plugins/index.md#purchase) i [Włącz](../plugins/index.md#enable--disable) wtyczkę Widok mapy morskiej.
2. [Pobierz](#download-nautical-maps) mapy morskie.
3. Ustaw [styl mapy morskiej](#set-nautical-map-style) dla wymaganego [profilu](../personal/profiles.md).


### Ustaw styl mapy morskiej {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*

![Typ mapy morskiej w Androidzie](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*

![Typ mapy morskiej w iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Użyj [Legendy mapy](../../user/map-legend/nautical-map.md) do wszelkich odniesień do tego, co jest pokazane na mapie morskiej. Wyjaśnia ona symboliczne elementy na mapie morskiej i służy jako odniesienie, aby pomóc Ci nawigować w razie wątpliwości. Ustawiając styl mapy morskiej, możesz uzyskać najlepszy widok pobranych i wyświetlonych danych morskich.

Aby zmienić bieżący styl mapy na Morski, należy dokonać następujących ustawień:

1. Wybierz wymagany [profil](../personal/profiles.md).
2. Otwórz [Konfiguruj mapę](../map/configure-map-menu.md).
3. Przewiń w dół do Styl mapy, otwórz go i zaznacz **Morski**.


### Pobierz mapy morskie {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Widok map wtyczki morskiej Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![Widok map wtyczki morskiej iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Dla optymalnej prezentacji mapy mogą być dostosowane do aktualnych potrzeb: znaki i symbole mogą być dodawane z punktami głębokości i, w razie potrzeby, konturami. Z drugiej strony, standardowe mapy z informacjami o wodach śródlądowych, przybrzeżnych i bliskich dla danego regionu mogą być dobrym uzupełnieniem informacji o drogach wodnych na mapie morskiej.

Po [pobraniu](../start-with/download-maps.md) mapy morskiej, na mapie pojawiają się więcej szczegółów związanych z nawigacją *Łodzią*. Niektóre typy [map morskich](../start-with/download-maps.md#type-of-maps) zawierają szczegóły, takie jak:

- **Znaki i symbole morskie.**
    Znaki i symbole zawierają wszystkie morskie znaki nawigacyjne zarówno dla nawigacji śródlądowej, jak i przybrzeżnej. Znajomość tych znaków pomoże przewidzieć położenie skał, przeszkód, kotwicowisk, boi, prądów, głębokiej i płytkiej wody oraz stron kanału, niezależnie od kierunku itp. Znaki i symbole są pobierane raz dla całego świata.

- **Punkty głębokości.**
    Dane morskie z pakietów punktów głębokości są reprezentowane przez liczby wyświetlane na wodzie, które wskazują najpłytszą głębokość w danym miejscu. Punkty głębokości są dostępne dla każdej półkuli i niektórych regionów.

- **Izobaty.**
    Pakiety izobat pozwalają zdefiniować obszary o równej głębokości. Mają one na celu wizualizację zmian w rzeźbie pod powierzchnią wody. Izobaty można pobrać dla niektórych obszarów, a następnie wyłączyć, jeśli nie są potrzebne.

:::info Liczby głębokości
Wszystkie liczby głębokości na mapach morskich są podane w metrach.
:::


### Wyłącz styl mapy morskiej {#disable-nautical-map-style}

Aby usunąć mapę morską i wyświetlić jedną z konwencjonalnych map OsmAnd, wykonaj jedną z następujących czynności:

- Wyłącz wtyczkę Morską.
- Zmień styl mapy na inny niż *Morski*.

:::info UWAGA
Wyłączenie wtyczki Morskiej nie usuwa załadowanych danych morskich, więc nawet jeśli zmienisz metodę renderowania z morskiej na dowolną inną, gdy dane morskie zostaną pobrane, pozostaną one widoczne na mapie.
:::


## Profil morski {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Izobaty morskie w Androidzie](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Izobaty w iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

Mapa morska może być włączona do dowolnego profilu. Jednak najbardziej wartościowa jest w [profilu Łodzi](../personal/profiles.md), a zwłaszcza w [nawigacji Łodzią](../navigation/routing/boat-navigation.md).


## Styl mapy morskiej {#nautical-map-style}

Wtyczka Morska w OsmAnd rozszerza style map warstwy wektorowej o styl mapy Morskiej. Pozwala to na wyświetlanie danych mapy zgodnie z zasadami mapy Morskiej, na przykład: żółte obszary dla lądu i mielizn, jasnoniebieskie obszary dla płytkich wód itp. Więcej informacji można znaleźć w [Legendzie mapy](../../user/map-legend/nautical-map.md).


### Punkty głębokości {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapy morskie](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapy morskie](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Pakiety punktów głębokości [pakiety](../start-with/download-maps.md#type-of-maps) są dostępne dla Europy, Półkuli Północnej i Półkuli Południowej i mają charakter informacyjny. Punkty głębokości wskazują zmiany w topografii pod powierzchnią wody, wskazując najpłytszą głębokość. Jest to konieczne do nawigacji *Łodzią*. Po pobraniu należy włączyć [Izobaty](#depth-contours), aby wyświetlić je na mapie.


### Izobaty {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![Izobaty morskie w Androidzie](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Izobaty w iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Gdy mapa morska jest wyświetlana na ekranie, możesz dostosować to, co widzisz:

- Pokaż lub ukryj *Izobaty*.
- Ustawienie poziomu szczegółowości informacji o dnie morskim: [*Szerokość linii* i *Schemat kolorów linii*](../map/vector-maps.md#-nautical-depth).

:::info UWAGA
Możesz pomóc aplikacji OsmAnd zwiększyć bazę danych izobat, dodając swoje informacje za pomocą [OpenSeaMap](https://map.openseamap.org/)
:::


### Szczegóły dna morskiego {#seabed-details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*

![Szczegóły dna morskiego](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Szczegóły dna morskiego](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Dane o dnie morskim zawierają informacje o roślinności i ogólnym materiale powierzchniowym, takim jak skały, muszle, żwir, koral, muł itp. Ze względu na międzynarodową klasyfikację danych o dnie morskim, istnieją opcje wyświetlania takich szczegółów na mapie: *proste*, *kategoria*, *wszystkie* lub *pomijaj*. Więcej informacji można znaleźć w [Legendzie mapy obszaru dna morskiego](../map-legend/nautical-map.md#seabed-area).

- **Proste** (*dla wersji Android*) - pokazuje symbole znaków morskich zgodnie z INT-1 Ref, wskazujące charakter powierzchni dna morskiego.
- **Kategoria** - oprócz symbolu znaku morskiego, pokazuje również odpowiedni tag znaku morskiego, wskazujący naturalny materiał lub kategorię wodorostów i traw morskich.
- **Wszystkie** - oprócz symbolu znaku morskiego, tagu lub kategorii, pokazuje również kwalifikacje, takie jak drobne, lepkie, grube itp. Dla traw morskich i wodorostów pokazuje dane oznaczone tagami *taxon* i *genus*.
- **Pomiń** - nie pokazuje szczegółów dna morskiego.

:::info UWAGA
Więcej szczegółów na temat klasyfikacji szczegółów powierzchni i opcji renderowania można znaleźć w [wiki znaków morskich OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::


## Powiązane artykuły {#related-articles}

- [Import / Eksport](../personal/import-export.md)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)

> *Ostatnia aktualizacja: czerwiec 2023*