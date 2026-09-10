---
source-hash: 425f511859172593fe5402cce5c44974144e585dac7b77bd26c1c5e68a22a8f0
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

**Wyszukiwanie** to przydatne narzędzie do szybkiego znajdowania lokalizacji. Możesz użyć wyszukiwania, aby znaleźć lokalizację według adresu, współrzędnych, punktów użyteczności publicznej (POI) lub poprzednich wyszukiwań. Wyszukiwanie [adresu](#search-address) pozwala wprowadzić adres, aby uzyskać dokładną lokalizację. Wyszukiwanie [współrzędnych](#search-coordinates) działa z współrzędnymi geograficznymi, takimi jak szerokość i długość geograficzna. Dzięki wyszukiwaniu [POI](#search-poi) możesz szukać pobliskich miejsc w określonych kategoriach, takich jak kawiarnie, hotele czy stacje benzynowe. Zakładka [Eksploruj](#search-explore) podkreśla popularne miejsca w pobliżu i zapewnia szybki dostęp do niedawno odwiedzanych lokalizacji. Wyszukiwanie w [historii](#search-history) zapisuje poprzednie wyszukiwania. Funkcja wyszukiwania ułatwia planowanie podróży, nawigację w nieznanym terenie i znajdowanie POI w pobliżu.


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

Możesz również ręcznie zmienić kolejność sortowania wyników wyszukiwania za pomocą chipa *Sortuj według* u góry listy wyników wyszukiwania. Dotknij *Sortuj według* i wybierz jedną z następujących opcji:
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

2. W miarę pisania na liście wyświetlane są punkty najbliższe zapytaniu, w przybliżeniu w następującej kolejności:
    - Kategorie POI
    - Ulubione, POI, Trasy i Punkty trasy
    - Ślady
    - Adresy
    - Mapy do pobrania

3. Podczas wyszukiwania według nazwy na Androidzie OsmAnd wyświetla chipy typu POI na podstawie typów reprezentowanych w wynikach wyszukiwania. Dotknij chipa, aby filtrować wyniki według wybranego typu POI. Możesz wybrać wiele typów POI. Po wybraniu chip przenosi się na pierwsze miejsce na liście. Dotknij wybranego chipa ponownie, aby go odznaczyć i powrócić do pełnych wyników wyszukiwania.

4. Jeśli wprowadzisz [nazwę marki](../search/search-poi.md#how-to-use), lista rozpocznie się od wyników o tej nazwie, posortowanych według najbliższej odległości.

5. Wyniki wyszukiwania mogą również zawierać [artykuł Przewodnika turystycznego](../plan-route/travel-guides.md#travel-article). Dotknięcie go otwiera artykuł bezpośrednio, a nie pokazuje lokalizacji na mapie.

:::note Ograniczenia danych TIGER w wyszukiwaniu adresów
OsmAnd zintegrował [**dane TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) z mapami USA w celu dostarczania informacji o adresach w USA. Zestaw danych TIGER jest **oparty na zakresach** i nie zawiera dokładnych numerów domów, więc niektóre adresy mogą być brakujące lub niedokładne.
:::

### Wyszukiwanie w pobliżu (tylko Android) {#search-around}

![Wyszukiwanie w pobliżu](@site/static/img/search/search_around.webp)

Gdy wyszukiwanie jest otwarte znacznie dalej od bieżącej lokalizacji, chip *Wyszukiwanie w pobliżu* umożliwia wybór obszaru używanego do wyszukiwania. Dotknij chipa i wybierz jedną z następujących opcji:
- **Centrum mapy** — Wyszukuje wokół bieżącego centrum mapy. Ta opcja jest domyślnie zaznaczona.
- **Moja lokalizacja** — Wyszukuje wokół bieżącej lokalizacji. 

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


## Wyszukaj Eksploruj {#search-explore}

<InfoAndroidOnly/>

![Wyszukiwanie Eksploruj](@site/static/img/search/explore_search_android.webp)

Zakładka **Eksploruj** w narzędziu Wyszukaj pomaga szybko odkrywać miejsca w pobliżu bieżącej lokalizacji i uzyskiwać dostęp do niedawno otwartych elementów. Zawiera dwie główne sekcje: [Popularne miejsca w pobliżu](#popular-places-nearby)
 i [Historia](#history).

### Popularne miejsca w pobliżu {#popular-places-nearby}

Sekcja **Popularne miejsca w pobliżu** wyświetla przewijaną listę dobrze znanych punktów orientacyjnych i atrakcji w pobliżu lokalizacji. Każdy element może zawierać nazwę miejsca, jego kategorię, odległość i kierunek oraz obrazek podglądu, jeśli jest dostępny. Dotknij *Pokaż wszystko*, aby otworzyć pełną listę lub *Pokaż na mapie*, aby wyświetlić te miejsca na mapie.

Więcej szczegółów znajdziesz [tutaj](../map/popular_places.md#explore-in-search).

### Historia {#history}

![Sekcja historii](@site/static/img/search/history_section_android.webp) ![Sekcja historii](@site/static/img/search/history_section_2_android.webp)

Sekcja **Historia** zapewnia szybki dostęp do ostatnich elementów historii. Wyświetla do 25 najnowszych elementów i można ją rozwijać lub zwijać. Dotknij *Zobacz wszystko*, aby otworzyć pełny ekran Historii.

Na pełnym ekranie Historii możesz sortować i filtrować elementy historii za pomocą następujących opcji:

1. **Sortuj według**:
- Ostatnie — wyświetla najpierw ostatnio dodane elementy. Po wybraniu tej opcji elementy są grupowane według czasu, np. Dziś, Ostatni tydzień i wcześniejsze okresy.
- Najbliższe — sortuje elementy według odległości od bieżącej lokalizacji.
- Najbliższe do centrum mapy — sortuje elementy według odległości od bieżącego centrum mapy. Gdy wybrana jest jedna z opcji sortowania według odległości, grupy czasowe nie są wyświetlane.

2. **Typ** — filtruje elementy historii według:
- Wszystkie — wyświetla wszystkie dostępne elementy historii.
- Wyszukiwanie — wyświetla elementy z historii wyszukiwania.
- Nawigacja — wyświetla elementy z historii nawigacji.

3. **Filtry kategorii** — filtrują elementy historii według kategorii. Dostępne filtry kategorii zależą od typów elementów dostępnych w Historii. Na przykład możesz zobaczyć kategorie takie jak POI, Ślad, Lokalizacja, Ulubione lub Adres.

4. **Ustawienia** — dotknij ikony koła zębatego w prawym górnym rogu, aby otworzyć ustawienia Historii, gdzie możesz włączyć lub wyłączyć historię wyszukiwania, historię nawigacji i historię znaczników mapy, wykonać kopię zapasową historii jako plik lub wyczyścić całą historię.

## Historia wyszukiwania {#search-history}

![Historia wyszukiwania](@site/static/img/search/history_search_ios.png)

Na iOS możesz uzyskać dostęp do Historii wyszukiwania z dedykowanej zakładki **Historia** w narzędziu Wyszukaj. Umożliwia to ponowne wyszukiwanie wcześniej znalezionych miejsc, adresów lub często odwiedzanych miejsc bez ponownego wprowadzania zapytania. Więcej informacji znajdziesz w sekcji iOS artykułu [Historia wyszukiwania](./search-history.md).


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
- [Historia wyszukiwania](./search-history.md)
- [Wyszukaj POI](./search-poi.md)
- [Wyszukaj współrzędne](./search-coordinates.md)
- [Popularne miejsca](../map/popular_places.md)