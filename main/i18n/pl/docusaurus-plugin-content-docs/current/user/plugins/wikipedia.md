---
source-hash: 7b2a1da92c73d27cbba97c41e64240a1c3762bed230360041039de13eae2fd73
sidebar_position: 18
title:  Wikipedia
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

:::info Płatna funkcja
Wtyczka Wikipedia jest [płatną funkcją](../purchases/index.md) aplikacji OsmAnd.  
:::

Posiadanie Wikipedii podczas podróży pomaga dowiedzieć się więcej o odwiedzanych miejscach. Jest ona dostępna w trybie offline i pokazuje Popularne Miejsca (Android) / artykuły z Wikipedii (iOS) związane z użytecznymi punktami (POI) bezpośrednio na mapie.  

Wtyczka Wikipedia to oddzielna funkcja, którą można włączać i wyłączać w zależności od potrzeb. Po włączeniu umożliwia przesyłanie danych Wikipedii [pobranych](../personal/maps-resources#maps--resources) dla każdego regionu geograficznego. Mapa zawiera dwa rodzaje wiedzy z Wikipedii: krótkie informacje i pełny artykuł.  


Krótkie informacje są dostarczane przez punkty POI Wikipedii (skrót od "[użyteczny punkt](../map/point-layers-on-map.md)"). Jeśli opcja Wikipedia jest włączona w menu, na mapie pojawia się punkt POI Wikipedii. Po dotknięciu punktu POI, rozwija się on, aby dostarczyć krótkich informacji z Wikipedii, a także możliwość otwarcia pełnego artykułu. Punkt POI Wikipedii, jak również powiązane artykuły, są dostępne w trybie offline. Można je czytać w razie potrzeby, przełączać języki i wyszukiwać inne informacje w Wikipedii.  


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) to darmowa, wielojęzyczna, otwarta encyklopedia internetowa tworzona i utrzymywana przez społeczność redaktorów-wolontariuszy przy użyciu systemu edycji opartego na wiki.  

&nbsp;  
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Aby wyświetlić dane Wikipedii na mapie, należy dokonać następujących ustawień:

1. [Kup](../plugins/index.md#purchase) i [włącz](../plugins/index.md#enable--disable) wtyczkę Wikipedia w sekcji Wtyczki w *Menu głównym*.
2. Pobierz [pakiety Wikipedii](#download-wikipedia-packages) dla wymaganych regionów.  
3. Wyświetl [punkty POI Wikipedii](#display-wikipedia-on-the-map) na mapie dla wymaganego profilu.  
4. Skonfiguruj preferowane [języki](#set-preferred-language) do czytania artykułów.


## Pobieranie pakietów Wikipedii {#download-wikipedia-packages}

Dane Wikipedii są dostępne dla każdego regionu geograficznego. Jeśli są one załadowane dla jednego regionu, a nie załadowane dla innego, w pierwszym przypadku można pracować z informacjami z Wikipedii podczas przeglądania regionu na mapie, a w drugim przypadku region nie będzie miał żadnych informacji z Wikipedii. Po załadowaniu dane Wikipedii stają się dostępne ogólnie, a także w trybie offline.

Aby pobrać dane Wikipedii dla regionu, przejdź do [dostępnych pakietów do pobrania w *Menu głównym*](../start-with/download-maps.md#download), znajdź potrzebny region i otwórz go. Dane Wikipedii będą znajdować się wśród innych pakietów.

Możesz otworzyć dane Wikipedii do pobrania według regionu w następujący sposób:

1. **Android**. Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Wybierz wymagany region. Po otwarciu regionu dane Wikipedii będą znajdować się wśród innych pakietów.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aby zobaczyć, jakie dane zostały już przesłane, przejdź do *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![Pobieranie Wikipedii w systemie Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aby zobaczyć, jakie dane zostały już przesłane, przejdź do *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*  

![Pobieranie Wikipedii w systemie iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Wyświetlanie Wikipedii na mapie {#display-wikipedia-on-the-map}

Ładując dane Wikipedii dla wymaganych regionów, można kontrolować widoczność tych danych na mapie. Widoczność jest kontrolowana przez [Popularne miejsca (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **dla Androida** / [Punkty POI Wikipedii](../map/point-layers-on-map.md#-wikipedia) **dla iOS**, które mogą być pokazywane lub ukrywane dla wszystkich załadowanych regionów przez określony [profil](../personal/profiles.md), na przykład profil do jazdy samochodem, profil do jazdy na rowerze, inny profil do pokazywania transportu publicznego i inne.  

Aby pokazać lub ukryć punkty POI Wikipedii, najpierw wybierz profil, a następnie włącz/wyłącz opcję **Wikipedia**.

Aby pokazać/ukryć punkty POI Wikipedii, wykonaj następujące czynności:

1. Przejdź do: 

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#overview) 

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Wybierz profil i poszukaj sekcji ustawień *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* w menu.  
3. Włącz opcję *<Translate android="true" ids="poi_osmwiki"/>* **dla Androida** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **dla iOS**.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Punkty POI Wikipedii w systemie Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Punkt POI Wikipedii w systemie iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Wyszukiwanie w Wikipedii {#search-wikipedia}

Po załadowaniu danych Wikipedii, niezależnie od trybu widoczności [punktów POI Wikipedii](../map/point-layers-on-map.md#-wikipedia) na mapie, możliwe jest [wyszukiwanie](../search/search-poi.md) dowolnych informacji z Wikipedii.

Po dotknięciu przycisku Wyszukaj pojawia się dodatkowy panel umożliwiający [wyszukiwanie](../search/index.md) w całym tekście i/lub w określonej kategorii. W pierwszym przypadku wyniki wyszukiwania pokażą punkty POI Wikipedii z odpowiednimi artykułami z Wikipedii wśród innych rodzajów informacji. W przypadku [wyszukiwania w kategorii Wikipedii](../search/search-poi.md#poi-search-by-categories), wyniki wyszukiwania pokażą tylko informacje z Wikipedii, posortowane według najbliższej lokalizacji do obszaru mapy, który jest aktualnie wyświetlany na ekranie.  

- W wersji na **Androida** można otworzyć [Wyszukiwanie](../search/index.md), dotykając *ikony Wyszukaj* w lewym górnym rogu ekranu i/lub dotykając *opcji Wyszukaj* w menu.
- W wersji na **iOS**, aby otworzyć [Wyszukiwanie](../search/index.md), ikona Wyszukaj znajduje się w lewym górnym rogu ekranu.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia search on Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia search on iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- Aby wyszukać według [kategorii](../search/search-poi.md#poi-search-by-categories) Wikipedii, wybierz: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kategoria Wikipedii w systemie Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kategoria Wikipedii w systemie iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- W razie potrzeby dotknij opcji **Pokaż Wikipedię na mapie** u góry panelu wyszukiwania, a wyniki wyszukiwania z kategorii Wikipedii pojawią się na mapie.  


## Artykuł z Wikipedii {#wikipedia-article}

Aby otworzyć artykuł z Wikipedii:

1. Włącz [warstwę punktów POI Wikipedii](../map/point-layers-on-map.md#-wikipedia) dla określonego profilu.
2. Dotknij punktu POI na mapie.
3. W [menu kontekstowym](../map/map-context-menu.md) punktu POI dotknij *Szczegóły* (lub po prostu przeciągnij *menu kontekstowe* w górę), aby wyświetlić streszczenie wybranego artykułu z Wikipedii.
4. Jeśli dotkniesz tego tekstu (w wersji na iOS), zostaniesz przekierowany do artykułu z Wikipedii w trybie offline.
5. Użyj przycisku *Czytaj artykuł* lub *Czytaj pełny artykuł*, aby otworzyć pełną wersję artykułu z Wikipedii.



<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Francuski punkt POI Wikipedii w języku angielskim](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Francuski punkt POI Wikipedii w języku angielskim w systemie iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Ustawienia Wikipedii {#wikipedia-settings}

Możesz [ustawić język (języki)](#set-preferred-language), w którym wolisz czytać [artykuły](#wikipedia-article), a także skonfigurować [opcje pobierania obrazów](#download-images) dla każdego [profilu](../personal/profiles.md).

### Ustaw preferowany język {#set-preferred-language}

W wersjach aplikacji OsmAnd na **Androida** i **iOS** można ustawić preferowany język (lub języki) wyświetlania artykułów z Wikipedii za pomocą menu *Konfiguruj mapę*. Jeśli wybierzesz więcej niż jeden język, artykuły *Wikipedii* na mapie będą wyświetlane w dowolnym z nich. Przejdź do:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Wybierz potrzebny profil i w sekcji *<Translate android="true" ids="shared_string_show"/>* wybierz *<Translate android="true" ids="poi_osmwiki"/>* dla Androida / *<Translate ios="true" ids="download_wikipedia_maps"/>* dla iOS.  
3. Wyłącz opcję *<Translate android="true" ids="shared_string_all_languages"/>*.  
4. Wybierz określony język (języki) na otwartej liście.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawianie preferowanego języka w systemie Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawianie preferowanego języka w systemie iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
W wersji na **iOS** można również ustawić preferowany język dla artykułów z Wikipedii, używając:  

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Przełączanie języków wewnątrz artykułu {#switch-languages-inside-the-article}

W przypadku, gdy *artykuł z Wikipedii* jest dostępny w różnych językach, można przełączyć język podczas czytania. Po dotknięciu odpowiedniej ikony w prawym górnym rogu ekranu zostaną wyświetlone opcje do wyboru.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przełączanie języków dla określonego artykułu](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Przełączanie języków dla określonego artykułu](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Pobieranie obrazów {#download-images}

Możesz wybrać, czy chcesz pobierać obrazy z Wikipedii na swoje urządzenie, czy nie, wewnątrz *artykułu z Wikipedii*:

- **Android**. Otwórz *[Artykuł z Wikipedii](#display-wikipedia-on-the-map) → &#8942; → Opcje*
- **iOS**. Otwórz *[Artykuł z Wikipedii](#display-wikipedia-on-the-map) → Ikona obrazu*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przełączanie obrazów](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Przełączanie obrazów](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

W wersji aplikacji na **iOS** można również uzyskać dostęp do opcji pobierania obrazów za pomocą *ustawień wtyczki Wikipedia*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Przełączanie obrazów](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)