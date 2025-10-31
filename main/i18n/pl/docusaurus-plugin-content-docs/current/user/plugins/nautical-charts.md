---
source-hash: 7ec189e5ebc7bca3eaaa66be6d97617ba61c06de602535da3e7881dac213769a
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

:::info Płatna funkcja
Wtyczka Widok mapy morskiej jest [płatną funkcją](../purchases/index.md) aplikacji OsmAnd.
:::

Widok mapy morskiej to szczegółowe graficzne przedstawienie oceanów, mórz, obszarów przybrzeżnych i rzek, które pomaga w nawigacji po wodzie i poznawaniu popularnych tras, przeszkód na drodze wodnej, najbliższych portów, kotwicowisk i innych ważnych punktów orientacyjnych.

Mapa morska to bardzo szczegółowa mapa topograficzna, która pomaga kapitanom w nawigowaniu statkiem po wyznaczonej trasie na wodzie. Jest podobna do mapy drogowej dla podróżujących samochodem. Często nazywana *'Chart'* z powodów historycznych, jest szczegółowym graficznym przedstawieniem oceanów, mórz, obszarów przybrzeżnych i rzek.

Mapy morskie są ważne dla profesjonalnych żeglarzy i amatorów, którzy wynajmują łódź do rejsów po kanałach miejskich. Mapy dostarczają im różnych informacji, takich jak trasy żeglarskie, światła nawigacyjne, strefy niebezpieczne, strefy, w których dozwolone lub zabronione jest żeglowanie lub dokowanie itp.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapy morskie](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapy morskie](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Dlaczego motyw morski ma znaczenie {#why-the-nautical-theme-matters}

Wszyscy profesjonalni żeglarze są zobowiązani do posiadania na swoich statkach oficjalnych map morskich. Mapy te są publikowane przez upoważnione agencje i są dość drogie. Agencje te inwestują znaczne środki w utrzymanie aktualności map. Wydają regularne aktualizacje map, ale ponieważ weryfikacja informacji i przetwarzanie aktualizacji zajmuje czas, mapy morskie nigdy nie są w pełni aktualne.

Oparte na danych [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), mapy morskie OsmAnd są tworzone przez ludzi, którzy z nich korzystają. Każdy użytkownik mapy może wnieść swój wkład w mapę, dodając informacje, które uważa za ważne i przydatne dla siebie, dzięki czemu mapa staje się bardziej szczegółowa i dokładna, idealna do orientacji w terenie lub planowania trasy.


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Poniższa konfiguracja sprawi, że mapa morska pojawi się na ekranie:

1. [Kup](../plugins/index.md#purchase) i [włącz](../plugins/index.md#enable--disable) wtyczkę Widok mapy morskiej.
2. [Pobierz](#download-nautical-maps) mapy morskie.
3. Ustaw styl mapy [Morski](#set-nautical-map-style) dla wymaganego [profilu](../personal/profiles.md).


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

Skorzystaj z [legendy mapy](../../user/map-legend/nautical-map.md) w celu uzyskania odniesienia do tego, co jest pokazane na mapie morskiej. Wyjaśnia ona symboliczne elementy na mapie morskiej i służy jako odniesienie, aby pomóc w nawigacji w razie wątpliwości. Ustawiając styl mapy Morski, można uzyskać najlepszy widok pobranych i wyświetlanych danych morskich.

Aby zmienić bieżący styl mapy na Morski, należy dokonać następujących ustawień:

1. Wybierz wymagany [profil](../personal/profiles.md).
2. Otwórz [Konfiguruj mapę](../map/configure-map-menu.md).
3. Przewiń w dół do Styl mapy, otwórz go i zaznacz **Morski**.


### Pobierz mapy morskie {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*  

![Widok map wtyczki morskiej na Androidzie](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*  

![Widok map wtyczki morskiej na iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

W celu optymalnej prezentacji mapy można dostosować do bieżących potrzeb: znaki i symbole można dodać z punktami głębokości i, w razie potrzeby, izobatami. Z drugiej strony, standardowe mapy z informacjami o wodach śródlądowych, przybrzeżnych i bliskich brzegu dla danego regionu mogą być dobrym uzupełnieniem informacji o drogach wodnych na mapie morskiej.

Po [pobraniu](../start-with/download-maps.md) mapy morskiej na mapie pojawia się więcej szczegółów związanych z nawigacją *Łodzią*. Niektóre typy [map morskich](../plugins/nautical-charts/#nautical-map-style) zawierają takie szczegóły jak:

- **Znaki i symbole morskie.**  
    Znaki i symbole zawierają wszystkie morskie znaki nawigacyjne zarówno dla żeglugi śródlądowej, jak i przybrzeżnej. Znajomość tych znaków pomoże przewidzieć lokalizację skał, przeszkód, kotwicowisk, boi, prądów, głębokiej i płytkiej wody oraz stron kanału, niezależnie od kierunku itp. Znaki i symbole są pobierane jednorazowo dla całego świata.

- **Punkty głębokości.**  
    Dane morskie z pakietów punktów głębokości są reprezentowane przez liczby wyświetlane na wodzie, które wskazują najmniejszą głębokość w danym miejscu. Punkty głębokości są dostępne dla każdej półkuli i niektórych regionów.

- **Izobaty (linie głębokości).**  
    Pakiety izobat pozwalają zdefiniować obszary o równej głębokości. Mają one na celu wizualizację zmian rzeźby terenu pod powierzchnią wody. Izobaty można pobrać dla określonych obszarów, a następnie wyłączyć, jeśli nie są potrzebne.

:::info Liczby głębokości
Wszystkie liczby głębokości na mapach morskich podane są w metrach.
:::


### Wyłącz styl mapy morskiej {#disable-nautical-map-style}

Aby usunąć styl Morski i wyświetlić jedną z konwencjonalnych map OsmAnd, wykonaj jedną z następujących czynności:

- Wyłącz wtyczkę Morską.
- Zmień styl mapy na dowolny inny niż *Morski*.

:::info UWAGA
Wyłączenie wtyczki Morskiej nie usuwa załadowanych danych morskich, więc nawet jeśli zmienisz metodę renderowania z morskiej na jakąkolwiek inną, gdy dane morskie są pobrane, pozostają one widoczne na mapie.
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

Mapa morska może być zawarta w dowolnym profilu. Jest ona jednak najbardziej wartościowa w [profilu Łódź](../personal/profiles.md), a zwłaszcza w [nawigacji łodzią](../navigation/routing/boat-navigation.md).


## Styl mapy morskiej {#nautical-map-style}

Wtyczka Morska w OsmAnd rozszerza style map warstwy wektorowej o styl mapy Morski. Pozwala on na wyświetlanie danych mapy zgodnie z zasadami map morskich, na przykład: żółte obszary dla lądu i mielizn, jasnoniebieskie obszary dla płytkich wód itp. Więcej informacji można znaleźć w [legendzie mapy](../../user/map-legend/nautical-map.md).


### Szczegóły dna morskiego {#seabed-detail}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*  

![Szczegóły dna morskiego](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *Menu → Konfiguruj mapę → Typ mapy Morski → Szczegóły → Szczegóły dna morskiego*

![Szczegóły dna morskiego](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Dane o dnie morskim zawierają informacje o roślinności i ogólnym materiale powierzchniowym, takim jak skaliste skały, muszle, żwir, koralowce, muł itp. Ze względu na międzynarodową klasyfikację danych o dnie morskim, istnieją opcje wyświetlania takich szczegółów na mapie: *proste*, *kategoria*, *wszystkie* lub *pomiń*. Skorzystaj z [legendy mapy obszaru dna morskiego](../map-legend/nautical-map.md#seabed-area) w celu uzyskania więcej informacji.

- **Proste** (*dla wersji Android*) – pokazuje symbole znaków morskich zgodnie z INT-1 Ref, wskazując charakter powierzchni dna morskiego.
- **Kategoria** – oprócz symbolu znaku morskiego, pokazuje również odpowiedni tag znaku morskiego, wskazujący naturalny materiał lub kategorię wodorostów i trawy morskiej.
- **Wszystkie** – oprócz symbolu znaku morskiego, tagu lub kategorii, pokazuje również kwalifikacje, takie jak drobny, lepki, gruby itp. W przypadku trawy morskiej i wodorostów pokazuje dane oznaczone tagami *takson* i *rodzaj*.
- **Pomiń** – nie pokazuje szczegółów dna morskiego.

:::info UWAGA
Więcej szczegółów na temat klasyfikacji szczegółów powierzchni i opcji renderowania można znaleźć na [wiki OSM o znakach morskich](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::

### Szczegóły świateł {#light-detail}

Android Przejdź do: *Menu → Konfiguruj mapę → Styl mapy Morski → Inne atrybuty mapy → Szczegóły świateł*

iOS Przejdź do: *Menu → Konfiguruj mapę → Typ mapy Morski → Szczegóły → Szczegóły świateł*

Ta opcja wyświetla poziom informacji dla świateł nawigacyjnych. Możesz wybrać, jak szczegółowe są charakterystyki świateł w pobliżu każdego latarni morskiej lub znaku nawigacyjnego.

- **Proste** – pokazuje domyślną nazwę znaku morskiego i charakterystykę światła.
- **Sektory** – wyświetla pełne łuki sektorów i szczegóły dla wszystkich widocznych sektorów świateł.
- **Sektor 1–5** – pokazuje szczegóły tylko dla określonego numeru sektora.
- **Małe** – używa kompaktowego formatu etykiety dla charakterystyk świateł.
- **Tylko nazwa** – pokazuje tylko nazwę znaku morskiego bez danych o świetle.
- **Pomiń** – ukrywa wszystkie informacje o światłach.


## Styl mapy morskiej {#marine-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Morski Android](@site/static/img/plugins/nautical-charts/marine_android.png)

Przejdź do: *Menu* → *Konfiguruj mapę* → *Styl mapy* → *Morski*

</TabItem>

<TabItem value="ios" label="iOS">

![Morski iOS](@site/static/img/plugins/nautical-charts/marine_ios.png)

Przejdź do: *Menu* → *Konfiguruj mapę* → *Typ mapy* → *Morski*

</TabItem>

</Tabs>

Ten styl dodaje elementy wizualne dla nawigacji morskiej, w tym światła nawigacyjne z charakterystykami świateł INT-1, które opisują typ, kolor i rytm sygnału świetlnego (na przykład, czy miga, jego kolor i interwał między migotaniami), oraz kolorowe światła sektorowe, które wskazują kierunek i kolor światła widocznego z morza.

W stylu Morskim sektory świateł są wyświetlane wokół latarni morskich i znaków nawigacyjnych: biały (pokazywany na mapie na żółto) wskazuje bezpieczny kierunek nawigacji, czerwony oznacza obszary niebezpieczne lub ograniczone, a zielony pokazuje kierunki pomocnicze lub boczne.

:::info
Aby wyświetlić te informacje, wtyczka Morska musi być włączona, a mapa World Seamarks (lub World_seamarks_2.obf) musi być pobrana. Informacje nie są przeznaczone do oficjalnego użytku nawigacyjnego.
:::


### Atrybuty mapy {#map-attributes}
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Atrybuty Android](@site/static/img/plugins/nautical-charts/marine_details_android.png)

Przejdź do: *Menu* → *Konfiguruj mapę* → *Styl mapy Morski* → *Inne atrybuty mapy*

</TabItem>

<TabItem value="ios" label="iOS">

![Atrybuty iOS](@site/static/img/plugins/nautical-charts/marine_details_ios.png)

Przejdź do: *Menu* → *Konfiguruj mapę* → *Typ mapy Morski* → *Szczegóły* → *Szczegóły świateł/Szczegóły dna morskiego*

Przejdź do: *Menu* → *Konfiguruj mapę* → *Typ mapy Morski* → Wybierz inne opcje

</TabItem>

</Tabs>

Po włączeniu stylu mapy Morskiej możesz precyzyjnie dostosować dodatkowe elementy wizualne. Te opcje pozwalają kontrolować, jak pomocniki nawigacyjne, izobaty, szczegóły dna morskiego i kolory pojawiają się na mapie.

- **[Szczegóły świateł](../plugins/nautical-charts/#light-detail)**. Definiuje, jak wyświetlane są informacje o światłach znaków morskich. Opcje: **Domyślne** (pełna nazwa z charakterystykami świateł), *Małe* (kompaktowy format), *Tylko nazwa* (tylko nazwa światła) lub *Pomiń* (ukryj etykiety).
- **[Szczegóły dna morskiego](../plugins/nautical-charts/#seabed-detail)**. Kontroluje poziom informacji tekstowych o dnie morskim. Opcje: Proste (podstawowe informacje), Kategoria (typ powierzchni), Wszystkie (pełne dane) lub Pomiń (brak tekstu).
- **Kolor wody**. Ustawia podstawowy kolor dla obszarów wodnych. Opcje: *Domyślny, Niebieski, Biały* lub *Szary* — przydatne do dostosowania widoczności i kontrastu w różnych trybach oświetlenia.
- **Kolor toru wodnego**. Zmień kolor torów nawigacyjnych i kanałów. Opcje: *Biały, Jaśniejszy biały, Szary, Zielony* lub *Żółty*, aby poprawić czytelność w zależności od tła mapy.
- **Styl płycizn pływowych**. Dostosowuje kolor i teksturę używaną dla płycizn pływowych. Opcje: *Jasnozielony, Ciemnozielony, Mokradła* lub *Pływowy* — każdy podkreśla płytkie strefy międzyprzypływowe w inny sposób.
- **Znaczniki ENC**. Przełącz *Włącz/Wyłącz*. Po włączeniu pokazuje znaczniki Elektronicznej Mapy Nawigacyjnej (ENC), takie jak boje, znaki nawigacyjne i inne pomocniki nawigacyjne.
- **Styl muszli**. Definiuje, jak wyglądają muszle lub cechy powierzchni dna. Opcje: *Szary, Skały, Kamienie* lub *Czerwony*, w zależności od preferowanego stylu wizualnego.
- **Przerwywane izobaty**. Przełącz *Włącz/Wyłącz*. Po włączeniu wyświetla linie izobat jako przerywane, poprawiając czytelność w gęstych obszarach.
- **Schemat kolorów głębokości**. Wybiera schemat kolorów dla stref głębokości. Opcje: *PAPER* (tradycyjne kolory map papierowych) lub *ECDIS* (standardowa paleta systemu nawigacji elektronicznej).
- **Rozmiar sondowania punktowego**. Ustawia rozmiar czcionki dla liczb sondowania punktowego (wartości głębokości). Opcje: *Domyślny, 10, 12, 14* lub *16* — większe wartości poprawiają widoczność na ekranach o wysokiej rozdzielczości.
- **Odstęp sondowania punktowego**. Kontroluje, jak często pojawiają się sondowania głębokości na mapie. Opcje: *Domyślny, 0, 5, 10, 15, 30, 60* lub *120*, określając odstęp między wyświetlanymi punktami głębokości.
- **Izobata bezpiecznej głębokości**. Podkreśla linię izobaty oznaczającą próg bezpiecznej głębokości. Opcje: *Wyłącz, 0 m, 1 m, 2 m, 3 m, 4 m, 5 m* lub *10 m*. Przydatne do rozróżniania bezpiecznych obszarów nawigacji od płytkich stref.


## Dodatkowe dane morskie {#additional-nautical-data}

### Punkty głębokości {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapy morskie](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapy morskie](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Pakiety punktów głębokości są dostępne dla Europy, półkuli północnej i południowej i mają charakter informacyjny. Punkty głębokości wskazują zmiany w topografii pod powierzchnią wody, wskazując najpłytszą głębokość. Jest to niezbędne do nawigacji *Łodzią*. Po pobraniu należy włączyć [Izobaty](#depth-contours), aby wyświetlić je na mapie.


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

Gdy na ekranie wyświetlana jest mapa morska, można dostosować to, co jest widoczne:

- Pokaż lub ukryj *Izobaty*.
- Ustawienie poziomu szczegółowości informacji o dnie morskim: [*Szerokość linii* i *Schemat kolorów linii*](../map/vector-maps.md#-nautical-depth).

:::info UWAGA
Możesz pomóc aplikacji OsmAnd w powiększaniu bazy danych izobat, dodając swoje informacje za pomocą [OpenSeaMap](https://map.openseamap.org/)
:::


## Powiązane artykuły {#related-articles}

- [Import / Eksport](../personal/import-export.md)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)