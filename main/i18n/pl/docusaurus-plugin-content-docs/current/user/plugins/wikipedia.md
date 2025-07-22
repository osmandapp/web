---
source-hash: 9e8ffc4e9ad66f08b7e397dce821b6b3045def307beb315cd2a5eb994c70479b
sidebar_position: 18
title: Wikipedia
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




## Przegląd {#overview}

:::info Funkcja płatna
Wtyczka Wikipedia jest [płatną funkcją](../purchases/index.md) aplikacji OsmAnd.
:::

Posiadanie Wikipedii podczas podróży pomaga dowiedzieć się więcej o odwiedzanych miejscach. Jest dostępna offline i pokazuje Popularne Miejsca (Android) / artykuły z Wikipedii (iOS) związane z punktami zainteresowania bezpośrednio na mapie.

Wtyczka Wikipedia to oddzielna funkcja, którą można włączać/wyłączać w zależności od potrzeb. Po włączeniu umożliwia przesyłanie danych z Wikipedii [pobranych](../personal/maps-resources.md#download-maps-maps) dla każdego regionu geograficznego. Mapa zawiera dwa rodzaje przesłanej wiedzy z Wikipedii: krótkie informacje i pełny artykuł.


Krótkie informacje są dostarczane przez POI Wikipedii (skrót od „[punktu zainteresowania](../map/point-layers-on-map.md)”). Jeśli opcja Wikipedia jest włączona w menu, POI Wikipedii pojawia się na mapie. Po dotknięciu punktu zainteresowania, rozszerza się on, aby wyświetlić krótkie informacje z Wikipedii, a także możliwość otwarcia pełnego artykułu. POI Wikipedii, a także powiązane artykuły, są dostępne offline. Możesz je czytać w miarę potrzeb, zmieniać języki i wyszukiwać inne informacje w Wikipedii.


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) to bezpłatna, wielojęzyczna, otwarta encyklopedia internetowa, tworzona i utrzymywana przez społeczność redaktorów-wolontariuszy za pomocą systemu edycji opartego na wiki.

&nbsp;
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Wymagane parametry konfiguracji {#required-setup-parameters}

Aby wyświetlić dane Wikipedii na mapie, należy dokonać następujących ustawień:

1. [Kup](../plugins/index.md#purchase) i [Włącz](../plugins/index.md#enable--disable) wtyczkę Wikipedia w sekcji Wtyczki w *Menu głównym*.
2. Pobierz [pakiety Wikipedii](#download-wikipedia-packages) dla wymaganych regionów.
3. Wyświetl [POI Wikipedii](#display-wikipedia-on-the-map) na mapie dla wymaganego profilu.
4. Skonfiguruj preferowane [języki](#set-preferred-language) do czytania artykułów.


## Pobierz pakiety Wikipedii {#download-wikipedia-packages}

Dane Wikipedii są dostępne dla każdego regionu geograficznego. Jeśli są załadowane dla jednego regionu, a nie załadowane dla innego, w pierwszym przypadku możesz pracować z informacjami z Wikipedii podczas przeglądania regionu na mapie, a w drugim przypadku region nie będzie miał żadnych informacji z Wikipedii. Po załadowaniu dane Wikipedii stają się dostępne ogólnie, a także offline.

Aby pobrać dane Wikipedii dla regionu, przejdź do [dostępnych pakietów do pobrania w *Menu głównym*](../start-with/download-maps.md#download---main-menu), znajdź potrzebny region i otwórz go. Dane Wikipedii będą wśród innych pakietów.

Dane Wikipedii do pobrania według regionu można otworzyć w następujący sposób:

1. **Android**. Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Wybierz wymagany region. Po otwarciu regionu dane Wikipedii będą wśród innych pakietów.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aby zobaczyć, jakie dane zostały już przesłane, przejdź do *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*

![Pobierz Wikipedię na Androidzie](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aby zobaczyć, jakie dane zostały już przesłane, przejdź do *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Pobierz Wikipedię na iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Wyświetl Wikipedię na mapie {#display-wikipedia-on-the-map}

Ładując dane Wikipedii dla wymaganych regionów, możesz kontrolować widoczność tych danych na mapie. Widoczność jest kontrolowana przez [Popularne Miejsca (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **dla Androida** / [POI Wikipedii](../map/point-layers-on-map.md#-wikipedia) **dla iOS**, które mogą być pokazywane lub ukrywane dla wszystkich przesłanych regionów przez określony [profil](../personal/profiles.md), na przykład profil do jazdy samochodem, profil do jazdy na rowerze, inny profil do pokazywania transportu publicznego i inne.

Aby pokazać lub ukryć POI Wikipedii, najpierw wybierz profil, a następnie włącz/wyłącz opcję **Wikipedia**.

Aby pokazać/ukryć POI Wikipedii, wykonaj następujące czynności:

1. Przejdź do:

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#popular-places-wikipedia-menu)

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Wybierz profil i poszukaj sekcji ustawień *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* w menu.
3. Włącz *<Translate android="true" ids="poi_osmwiki"/>* **dla Androida** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **dla iOS**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI Wikipedii na Androidzie](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Wikipedii na iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Szukaj w Wikipedii {#search-wikipedia}

Dzięki przesłanym danym z Wikipedii, niezależnie od trybu widoczności [POI Wikipedii](../map/point-layers-on-map.md#-wikipedia) na mapie, możliwe jest [wyszukiwanie](../search/search-poi.md) wszelkich informacji z Wikipedii.

Po dotknięciu przycisku Szukaj, pojawia się dodatkowy panel umożliwiający [wyszukiwanie](../search/index.md) całego tekstu i/lub konkretnej kategorii. W pierwszym przypadku wyniki wyszukiwania pokażą POI Wikipedii z odpowiadającymi artykułami Wikipedii wśród innych typów informacji. W przypadku [wyszukiwania kategorii Wikipedii](../search/search-poi.md#poi-search), wyniki wyszukiwania pokażą tylko informacje z Wikipedii, posortowane według najbliższej lokalizacji do obszaru mapy, który jest aktualnie wyświetlany na ekranie.

- W wersji **Android** możesz otworzyć [Wyszukiwanie](../search/index.md), dotykając *ikony wyszukiwania* w lewym górnym rogu ekranu i/lub dotykając *opcji wyszukiwania* w menu.
- W wersji **iOS**, aby otworzyć [Wyszukiwanie](../search/index.md), ikona wyszukiwania znajduje się w lewym górnym rogu ekranu.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie w Wikipedii na Androidzie](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie w Wikipedii na iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- Aby wyszukać według [kategorii](../search/search-poi.md#poi-search) Wikipedii, wybierz: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kategoria Wikipedii na Androidzie](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kategoria Wikipedii na iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- W razie potrzeby dotknij opcji **Pokaż Wikipedię na mapie** u góry panelu wyszukiwania, a wyniki wyszukiwania z kategorii Wikipedia pojawią się na mapie.


## Artykuł z Wikipedii {#wikipedia-article}

Aby otworzyć artykuł z Wikipedii:

1. Włącz [warstwę POI Wikipedii](../map/point-layers-on-map.md#-wikipedia) dla określonego profilu.
2. Dotknij POI na mapie.
3. W [menu kontekstowym](../map/map-context-menu.md) POI dotknij *Szczegóły* (lub po prostu przeciągnij *menu kontekstowe* w górę), aby wyświetlić streszczenie wybranego artykułu z Wikipedii.
4. Jeśli dotkniesz tego tekstu (w wersji iOS), zostaniesz przekierowany do artykułu z Wikipedii offline.
5. Użyj przycisku *Czytaj artykuł* lub *Czytaj pełny artykuł*, aby otworzyć pełną wersję artykułu z Wikipedii.



<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Francuski POI Wikipedii w języku angielskim](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Francuski POI Wikipedii w języku angielskim na iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Ustawienia Wikipedii {#wikipedia-settings}

Możesz [ustawić język(-i)](#set-preferred-language), w którym wolisz czytać [artykuły](#wikipedia-article), a także skonfigurować [opcje pobierania obrazów](#download-images) dla każdego [profilu](../personal/profiles.md).

### Ustaw preferowany język {#set-preferred-language}

W wersjach **Android** i **iOS** aplikacji OsmAnd możesz ustawić preferowany język (lub języki) do wyświetlania artykułów z Wikipedii za pomocą *menu Konfiguruj mapę*. Jeśli wybierzesz więcej niż jeden język, artykuły *Wikipedii* na mapie będą wyświetlane w dowolnym z nich. Przejdź do:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Wybierz potrzebny profil i w sekcji *<Translate android="true" ids="shared_string_show"/>* wybierz *<Translate android="true" ids="poi_osmwiki"/>* dla Androida / *<Translate ios="true" ids="download_wikipedia_maps"/>* dla iOS.
3. Wyłącz opcję *<Translate android="true" ids="shared_string_all_languages"/>*.
4. Wybierz konkretny język(-i) z otwartej listy.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawianie preferowanego języka na Androidzie](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawianie preferowanego języka na iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
W wersji **iOS** możesz również ustawić preferowany język dla artykułów z Wikipedii, używając:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Zmień języki w artykule {#switch-languages-inside-the-article}

W przypadku, gdy *artykuł z Wikipedii* jest dostępny w różnych językach, możesz zmienić język podczas czytania. Po dotknięciu odpowiedniej ikony w prawym górnym rogu ekranu zostaną wyświetlone opcje do wyboru.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przełączanie języków dla konkretnego artykułu](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Przełączanie języków dla konkretnego artykułu](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Pobierz obrazy {#download-images}

Możesz wybrać, czy pobierać obrazy z Wikipedii na swoje urządzenie, czy nie, wewnątrz *artykułu z Wikipedii*:

- **Android**. Otwórz *[artykuł z Wikipedii](#display-wikipedia-on-the-map) → &#8942; → Opcje*
- **iOS**. Otwórz *[artykuł z Wikipedii](#display-wikipedia-on-the-map) → Ikona obrazu*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przełączanie obrazów](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Przełączanie obrazów](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

W wersji **iOS** aplikacji możesz również uzyskać dostęp do opcji pobierania obrazów za pomocą *ustawień wtyczki Wikipedia*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Przełączanie obrazów](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style map)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: maj 2025*