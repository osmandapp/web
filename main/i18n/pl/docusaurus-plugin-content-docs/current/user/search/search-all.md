---
source-hash: 10cbeafd902c636e09520ab4df9f764d8c01529060c7ee38d4e0bf4ae741b6a2
sidebar_position: 1
title:  Wyszukaj wszystko
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<!--
<InfoIncompleteArticle/>
-->

## Przegląd {#overview}

**Wyszukiwanie** to przydatne narzędzie do szybkiego znajdowania lokalizacji. Możesz użyć wyszukiwania, aby znaleźć lokalizację według adresu, współrzędnych, punktów użyteczności publicznej (POI) lub poprzednich wyszukiwań. Wyszukiwanie [adresu](#search-address) pozwala wprowadzić adres, aby uzyskać dokładną lokalizację. Wyszukiwanie [współrzędnych](#search-coordinates) działa z współrzędnymi geograficznymi, takimi jak szerokość i długość geograficzna. Dzięki wyszukiwaniu [POI](#search-poi) możesz szukać pobliskich miejsc w określonych kategoriach, takich jak kawiarnie, hotele czy stacje benzynowe. Zakładka [Eksploruj](#search-explore) podkreśla popularne miejsca w pobliżu i zapewnia szybki dostęp do niedawno odwiedzanych lokalizacji. Funkcja wyszukiwania ułatwia planowanie podróży, nawigację w nieznanym terenie i znajdowanie POI w pobliżu.


## Jak używać {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista wyszukiwania POI na Androidzie](@site/static/img/search/search_online_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista wyszukiwania POI na iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Aby rozpocząć wyszukiwanie, należy wykonać jedną z poniższych czynności:

- Dotknij przycisku [Wyszukaj](../widgets/map-buttons.md#search) na ekranie aplikacji mapy i wprowadź zapytanie.

- Przejdź do głównego *Menu → Wyszukaj → wprowadź zapytanie wyszukiwania*.

- Przygotowując się do rozpoczęcia trasy, dotknij [*Nawigacja → Ustaw cel → Pole wyszukiwania*](../navigation/setup/route-navigation.md#set-target-point) *→ zapytanie wyszukiwania*.  


Ważne informacje:

- ***Do wyszukiwania w OsmAnd wymagane są pobrane wektorowe mapy offline***.

- Początkowo **wyszukiwanie opiera się na danych znajdujących się na mapie w widocznym obszarze ekranu urządzenia**, ale jeśli nic tam nie zostanie znalezione, OsmAnd proponuje zwiększenie promienia wyszukiwania.  

### Podstawowe zapytania {#basic-queries}

***Lista zapytań*:**

- Współrzędne we wszystkich dostępnych formatach.
- Adres:
    - Ulica, numer domu;
    - Miasto, ulica;
    - Skrzyżowania ulic;
    - Miasto;
    - Dane Tiger;
    - Kod pocztowy, numer domu;
    - Kod pocztowy, ulica, numer domu.
- Wyszukiwanie POI według nazwy i kategorii z dodatkowymi filtrami.
- Wyszukiwanie tras OSM według nazwy i kategorii z dodatkowymi filtrami.
- Wyszukiwanie według najbardziej znanych szczytów i wulkanów.
- Wyszukiwanie według artykułów Przewodnika turystycznego (wymaga pobrania odpowiedniego pliku Przewodników turystycznych).
- Wyszukiwanie według Ulubionych i Punktów trasy.
- Wyszukiwanie ikon według nazw podkategorii POI.
- Wyszukiwanie według śladów.
- Wyszukiwanie według obiektów biznesowych i nazw marek.
- Wyszukiwanie online (Nominatim).
- Wyszukiwanie URL (Google i OsmAnd). OsmAnd może rozpoznawać wiele udostępnionych linków Google Maps, w tym krótkie linki z `maps.app.goo.gl`.
- Historia wyszukiwania.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Sortowanie wyników wyszukiwania {#sorting-search-results}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista wyszukiwania POI na Androidzie](@site/static/img/search/search_sort_by.webp)

OsmAnd automatycznie sortuje wyniki wyszukiwania według kilku kryteriów:

1. **Pasujące zapytania** — Wyniki zawierające dokładne lub częściowe dopasowania do wprowadzonych słów są wyświetlane wyżej.

2. **Zgodność** — Obiekty, których nazwy blisko pasują do zapytania wyszukiwania, są zazwyczaj wyświetlane wyżej w wynikach.

3. **Typ obiektu** — W zależności od zapytania wyniki mogą zawierać różne typy obiektów, takie jak miasta, ulice, adresy lub POI.

4. **Odległość** — Gdy wyniki mają podobne kryteria dopasowania i typy obiektów, wyniki najbliższe bieżącej lokalizacji użytkownika są wyświetlane jako pierwsze.

5. **Ważność** — Dobrze znane punkty orientacyjne lub często referencyjne miejsca mogą pojawiać się wyżej w wynikach, gdy blisko pasują do zapytania wyszukiwania.

Możesz również ręcznie zmienić kolejność sortowania wyników wyszukiwania za pomocą chipa sortowania u góry listy wyników wyszukiwania. Chip pokazuje wybraną opcję. Dotknij go i wybierz jedną z następujących opcji w menu *Sortuj według*:
- **Zgodność** — Sortuje wyniki wyszukiwania według zgodności z zapytaniem wyszukiwania.
- **Najbliższe** — Sortuje wyniki wyszukiwania według odległości, z najbliższymi wynikami wyświetlanymi jako pierwsze.

</TabItem>

<TabItem value="ios" label="iOS">

OsmAnd automatycznie sortuje wyniki wyszukiwania według kilku kryteriów:

1. **Pasujące zapytania** — Wyniki zawierające dokładne lub częściowe dopasowania do wprowadzonych słów są wyświetlane wyżej.

2. **Zgodność** — Obiekty, których nazwy blisko pasują do zapytania wyszukiwania, są zazwyczaj wyświetlane wyżej w wynikach.

3. **Typ obiektu** — W zależności od zapytania wyniki mogą zawierać różne typy obiektów, takie jak miasta, ulice, adresy lub POI.

4. **Odległość** — Gdy wyniki mają podobne kryteria dopasowania i typy obiektów, wyniki najbliższe bieżącej lokalizacji użytkownika są wyświetlane jako pierwsze.

5. **Ważność** — Dobrze znane punkty orientacyjne lub często referencyjne miejsca mogą pojawiać się wyżej w wynikach, gdy blisko pasują do zapytania wyszukiwania.

***Na przykład***, zapytanie *poczta* pokaże najpierw najbliższe urzędy pocztowe, nawet jeśli w większej odległości znajdują się inne pozycje o podobnych nazwach.  

***Aktualne ograniczenia:***

- Brak ręcznego ustawienia zmiany kolejności sortowania wyników wyszukiwania.
- Proces sortowania jest **automatycznie zarządzany** przez OsmAnd, w oparciu o kryteria wymienione powyżej.
- W przypadkach, gdy wyniki wyszukiwania są zbyt szerokie, OsmAnd może **ograniczyć wyświetlane wyniki** do tych o najwyższej dokładności dopasowania słów.

</TabItem>

</Tabs>


### Wyszukiwanie pełnotekstowe {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie ulubionych na Androidzie](@site/static/img/search/favorite_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie ulubionych na iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Możesz znaleźć wymaganą lokalizację na mapie z listy punktów, które pojawiają się podczas wprowadzania zapytania.

1. Zacznij wpisywać nazwę lub adres w pasku wyszukiwania.

2. W miarę pisania na liście wyświetlane są wyniki pasujące do zapytania. Wyniki są sortowane zgodnie z opisem w sekcji [Sortowanie wyników wyszukiwania](#sorting-search-results).

3. Podczas wyszukiwania według nazwy na Androidzie OsmAnd wyświetla chipy typu POI na podstawie typów reprezentowanych w wynikach wyszukiwania. Dotknij chipa, aby filtrować wyniki według wybranego typu POI. Możesz wybrać wiele typów POI. Po wybraniu chip przenosi się na pierwsze miejsce na liście. Dotknij wybranego chipa ponownie, aby go odznaczyć i powrócić do pełnych wyników wyszukiwania.

4. Jeśli wprowadzisz [nazwę marki](../search/search-poi.md#how-to-use), lista rozpocznie się od wyników o tej nazwie, posortowanych według najbliższej odległości.

5. Wyniki wyszukiwania mogą również zawierać [artykuł Przewodnika turystycznego](../plan-route/travel-guides.md#travel-article). Dotknięcie go otwiera artykuł bezpośrednio, a nie pokazuje lokalizacji na mapie.

:::note Ograniczenia danych TIGER w wyszukiwaniu adresów
OsmAnd zintegrował [**dane TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) z mapami USA w celu dostarczania informacji o adresach w USA. Zestaw danych TIGER jest **oparty na zakresach** i nie zawiera dokładnych numerów domów, więc niektóre adresy mogą być brakujące lub niedokładne.
:::

### Wyszukiwanie przestrzenne {#spatial-search}

<InfoAndroidOnly/>

![Wyszukiwanie przestrzenne](@site/static/img/search/spatial_search.webp)

Wyszukiwanie przestrzenne to eksperymentalny silnik wyszukiwania, który uwzględnia nie tylko zgodność nazw z zapytaniem, ale także wzajemne położenie obiektów. Pomaga OsmAnd poprawnie interpretować zapytania składające się z kilku części, takie jak nazwa miejsca i kategoria POI.

Wyszukiwanie przestrzenne jest domyślnie wyłączone. Aby je włączyć, przejdź do ustawień [wtyczki OsmAnd Development](../plugins/development.md#internal-algorithms) i włącz opcję *Użyj przestrzennego wyszukiwania tekstowego*. Po włączeniu wyszukiwanie przestrzenne zastępuje standardowy silnik wyszukiwania w zapytaniach o POI i adresy.

Dzięki wyszukiwaniu przestrzennemu możesz:
- Wyszukiwać POI w określonym miejscu. Wprowadź kategorię i nazwę miejsca w jednym zapytaniu, na przykład Hotel Berlin. Nazwa miejsca jest używana jako obszar wyszukiwania, a kategoria jest wyszukiwana w jego obrębie.
- Wyszukiwać miejsca spełniające dwa warunki. Wprowadź dwie kategorie lub kategorię i właściwość, na przykład Fuel Diesel lub Cafe Vegan, aby znaleźć miejsca spełniające oba warunki. Zapytanie takie jak Fuel McDonald's znajduje stacje paliw położone w pobliżu McDonald's. Kolejność słów ma znaczenie. Pierwsze słowo określa, czego szukasz, a drugie – w pobliżu czego to ma się znajdować. Na przykład McDonald’s Fuel znajduje restauracje McDonald’s położone w pobliżu stacji paliw.
- Wyszukiwać wokół znalezionego miejsca. Wprowadź kategorię i nazwę miejsca, na przykład *Hotel Berlin*, a następnie dotknij *Hotel w pobliżu Berlin* u góry wyników wyszukiwania. Nazwa tego miejsca zostanie dodana do chipa [Wyszukiwanie w pobliżu](#search-around).
- Używać w zapytaniach różnych formatów nazw ulic i przetłumaczonych nazw kategorii.
- Uzyskiwać szybsze wyniki podczas wyszukiwania według popularnych kategorii POI, takich jak apteka, parking lub restauracja.

### Wyszukiwanie w pobliżu {#search-around}

<InfoAndroidOnly/>

![Wyszukiwanie w pobliżu](@site/static/img/search/search_around_berlin.webp)

Gdy środek mapy znajduje się dalej niż 50 m od Twojej lokalizacji, a mapa nie podąża za Twoją pozycją, wyszukiwanie jest wykonywane wokół środka mapy, a w polu wyszukiwania wyświetlany jest komunikat *Szukaj N km stąd*. Gdy środek mapy znajduje się dalej niż 70 km od Twojej lokalizacji, obok chipa sortowania pojawia się chip z obszarem wyszukiwania. Chip pokazuje wybraną opcję. Dotknij go i wybierz jedną z następujących opcji w menu *Search around*:
- **Centrum mapy** — Wyszukuje wokół bieżącego centrum mapy. Ta opcja jest domyślnie zaznaczona.
- **Moja lokalizacja** — Wyszukuje wokół bieżącej lokalizacji.
- **Nazwa miejsca** — Wyszukuje wokół miejsca znalezionego za pomocą [wyszukiwania przestrzennego](#spatial-search). Na przykład wprowadź *Hotel Berlin*, a następnie dotknij *Hotel w pobliżu Berlin* u góry wyników wyszukiwania. Na chipie pojawi się *Berlin* i zostaną wyświetlone hotele wokół Berlina. Ta opcja jest dostępna tylko wtedy, gdy włączone jest wyszukiwanie przestrzenne. 

### Wyszukiwanie na mapie {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI na Androidzie](@site/static/img/search/poi_overlay_android_new.png) ![Wyszukiwanie POI na Androidzie](@site/static/img/search/poi_overlay_android_new.webp)

</TabItem>

<TabItem value="ios" label="iOS">  

![Wyszukiwanie POI na iOS](@site/static/img/search/poi_overlay_ios_new.png) ![Wyszukiwanie POI na iOS](@site/static/img/search/poi_overlay_ios_new.webp)

</TabItem>

</Tabs>

OsmAnd pozwala na wyszukiwanie punktów wyświetlanych na mapie na ekranie urządzenia. Aby to zrobić:

- Użyj [jednego ze sposobów](#how-to-use), aby przejść do narzędzia Wyszukaj.
- Zacznij wpisywać nazwę lub adres w polu wyszukiwania.
- Pod polem wyszukiwania pojawi się pole z przyciskiem *Pokaż na mapie*. Na Androidzie przycisk akcji pływającej (FAB) *Pokaż na mapie* pojawia się u dołu ekranu wyników wyszukiwania.
- Dotknij tego przycisku, aby przejść do mapy.
- Możesz kontynuować wpisywanie zapytania u góry ekranu.


### Wyszukaj w pobliżu {#search-nearby}

![Wyszukiwanie na Androidzie](@site/static/img/search/search_all_near_location_andr_new.png)

Możesz użyć wyszukiwania w pobliżu określonej lokalizacji. Aby to zrobić, wybierz wymagany punkt [z listy w menu wyszukiwania](#full-text-search) lub wybierz go bezpośrednio na mapie. W [menu kontekstowym mapy](../map/map-context-menu.md#actions) wybierz *Akcje → Wyszukaj w pobliżu*.


## Wyszukaj adres {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie na Androidzie](@site/static/img/search/search_address_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie na iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Wyszukiwanie adresu** wykorzystuje dane OpenStreetMap. Ten typ wyszukiwania pozwala znaleźć lokalizację i kierunek do określonego adresu z gotowej, posortowanej listy. Przeczytaj więcej w artykule [Wyszukaj adres](./search-address.md).


## Eksploruj w wyszukiwaniu {#search-explore}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Eksploruj w wyszukiwaniu](@site/static/img/search/explore_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Historia wyszukiwania](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Na Androidzie zakładka **Eksploruj** w narzędziu Wyszukaj pomaga szybko odkrywać miejsca w pobliżu bieżącej lokalizacji i uzyskiwać dostęp do historii. Na iOS zakładka **Historia** umożliwia ponowne wyszukiwanie wcześniej znalezionych miejsc, adresów lub często odwiedzanych miejsc bez ponownego wprowadzania zapytania. Więcej informacji znajdziesz w artykule [Eksploruj w wyszukiwaniu](./search-history.md).


## Wyszukaj POI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI na Androidzie](@site/static/img/search/search_poi_categoties_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie POI na iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**Wyszukiwanie POI** to lista posortowana według kategorii, za pomocą której można łatwo znaleźć miejsca i usługi w pobliżu bieżącej lokalizacji lub wybranego obszaru na mapie.

- [Niestandardowe wyszukiwanie POI](./search-poi.md#customize-poi-search) pozwala łączyć różne kategorie POI w celu uproszczenia i personalizacji wyszukiwania.  
Na przykład, jeśli chcesz znaleźć kilka rodzajów usług w określonym obszarze lub na określonym odcinku trasy.

- OsmAnd zapewnia [wyszukiwanie online](./search-poi.md#online-search), które działa w czasie rzeczywistym, zapewniając szybki dostęp do wyników wyszukiwania.  
Jest to wygodne w użyciu, gdy mapy regionu są niedostępne, ale wymagane jest stałe i stabilne połączenie z Internetem.

- Przeczytaj artykuł [Wyszukaj POI](./search-poi.md), aby uzyskać więcej informacji.


## Wyszukaj współrzędne {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie współrzędnych na Androidzie](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie współrzędnych na iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Wyszukiwanie współrzędnych zapewnia dokładną lokalizację. Możesz wprowadzić dokładne współrzędne uzyskane na przykład z innych źródeł, takich jak mapa, urządzenie GPS lub usługi online, co jest szczególnie przydatne w przypadku miejsc, które nie mają dokładnego adresu. Aby uzyskać więcej informacji, zobacz artykuł [Wyszukaj współrzędne](./search-coordinates.md).


## Powiązane artykuły {#related-articles}

- [Wyszukaj adres](./search-address.md)
- [Eksploruj w wyszukiwaniu](./search-history.md)
- [Wyszukaj POI](./search-poi.md)
- [Wyszukaj współrzędne](./search-coordinates.md)
- [Popularne miejsca](../map/popular_places.md)