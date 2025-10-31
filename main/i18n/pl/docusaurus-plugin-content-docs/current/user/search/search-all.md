---
source-hash: f302135b5464569dccff1ff6830993eddf7ac34c3c389eaa1f26348d90713c54
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


<InfoIncompleteArticle/>


## Przegląd {#overview}

**Wyszukiwanie** to przydatne narzędzie do szybkiego znajdowania lokalizacji. Możesz użyć wyszukiwania, aby znaleźć lokalizację według adresu, współrzędnych, użytecznych miejsc (POI) lub poprzednich wyszukiwań. Wyszukiwanie [adresu](#search-address) pozwala wprowadzić adres, aby uzyskać dokładną lokalizację. Wyszukiwanie [współrzędnych](#search-coordinates) działa z współrzędnymi geograficznymi, takimi jak szerokość i długość geograficzna. Dzięki wyszukiwaniu [POI](#search-poi) możesz szukać pobliskich miejsc w określonych kategoriach, takich jak kawiarnie, hotele czy stacje benzynowe. Wyszukiwanie w [historii](#search-history) zapisuje poprzednie wyszukiwania, aby zapewnić szybki dostęp do wcześniej znalezionych miejsc. Funkcja wyszukiwania ułatwia planowanie podróży, nawigację w nieznanym terenie i znajdowanie POI w pobliżu.


## Jak używać {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista wyszukiwania POI na Androidzie](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista wyszukiwania POI na iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Aby rozpocząć wyszukiwanie, należy wykonać jedną z poniższych czynności:

- Dotknij przycisku [Wyszukaj](../widgets/map-buttons.md#search) na ekranie aplikacji mapy i wprowadź zapytanie.

- Przejdź do głównego *Menu → Wyszukaj → wprowadź zapytanie*.

- Przygotowując się do rozpoczęcia trasy, dotknij [*Nawigacja → Ustaw cel → Pole wyszukiwania*](../navigation/setup/route-navigation.md#set-target-point) *→ zapytanie*.  


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
- Wyszukiwanie według Ulubionych i Punktów trasy.
- Wyszukiwanie ikon według nazw podkategorii POI.
- Wyszukiwanie według śladów.
- Wyszukiwanie według obiektów biznesowych i nazw marek.
- Wyszukiwanie online (Nominatim).
- Wyszukiwanie URL (Google i OsmAnd).
- Historia wyszukiwania.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Sortowanie wyników wyszukiwania {#sorting-search-results}

OsmAnd automatycznie sortuje wyniki wyszukiwania według trzech głównych kryteriów:

1. **Pasujące zapytania** — Wyniki zawierające dokładne lub częściowe dopasowania do wprowadzonych słów są wyświetlane wyżej.

2. **Typ obiektu** - Podczas sortowania według nazwy, miasta i ulice mają pierwszeństwo przed POI przy wyświetlaniu wyników.

3. **Odległość** - Gdy wyniki mają podobne kryteria dopasowania i typy obiektów, wyniki znajdujące się najbliżej bieżącej lokalizacji użytkownika są wyświetlane jako pierwsze.

***Na przykład***, zapytanie *poczta* pokaże najpierw najbliższe urzędy pocztowe, nawet jeśli w większej odległości znajdują się inne pozycje o podobnych nazwach.  

***Aktualne ograniczenia:***

- Brak ręcznego ustawienia zmiany kolejności sortowania wyników wyszukiwania.
- Proces sortowania jest **automatycznie zarządzany** przez OsmAnd, w oparciu o kryteria wymienione powyżej.
- W przypadkach, gdy wyniki wyszukiwania są zbyt szerokie, OsmAnd może **ograniczyć wyświetlane wyniki** do tych o najwyższej dokładności dopasowania słów.


### Wyszukiwanie pełnotekstowe {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie ulubionych na Androidzie](@site/static/img/search/favorite_search_android.png)

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

3. Jeśli wprowadzisz [nazwę marki](../search/search-poi.md#how-to-use), lista rozpocznie się od wyników o tej nazwie, posortowanych według najbliższej odległości.

:::note Ograniczenia danych TIGER w wyszukiwaniu adresów
OsmAnd zintegrował [**dane TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) z mapami USA w celu dostarczania informacji o adresach w USA. Zestaw danych TIGER jest **oparty na zakresach** i nie zawiera dokładnych numerów domów, więc niektóre adresy mogą być brakujące lub niedokładne.
:::


### Wyszukiwanie na mapie {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI na Androidzie](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Wyszukiwanie POI na iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd pozwala na wyszukiwanie punktów wyświetlanych na mapie na ekranie urządzenia. Aby to zrobić:

- Użyj [jednego ze sposobów](#how-to-use), aby przejść do narzędzia Wyszukaj.
- Zacznij wpisywać nazwę lub adres w polu wyszukiwania.
- Pod polem wyszukiwania pojawi się pole z przyciskiem *Pokaż na mapie*.
- Dotknij tego przycisku, aby przejść do mapy.
- Możesz kontynuować wpisywanie zapytania u góry ekranu.


### Wyszukaj w pobliżu {#search-nearby}

![Wyszukiwanie na Androidzie](@site/static/img/search/search_all_near_location_andr.png)

Możesz użyć wyszukiwania w pobliżu określonej lokalizacji. Aby to zrobić, wybierz wymagany punkt [z listy w menu wyszukiwania](#full-text-search) lub wybierz go bezpośrednio na mapie. W [menu kontekstowym mapy](../map/map-context-menu.md#actions) wybierz *Akcje → Wyszukaj w pobliżu*.


## Wyszukaj adres {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie na Androidzie](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie na iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Wyszukiwanie adresu** wykorzystuje dane OpenStreetMap. Ten typ wyszukiwania pozwala znaleźć lokalizację i kierunek do określonego adresu z gotowej, posortowanej listy. Przeczytaj więcej w artykule [Wyszukaj adres](./search-address.md).


## Historia wyszukiwania {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historia wyszukiwania](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historia wyszukiwania](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Możesz użyć **Historii wyszukiwania**, aby ponownie wyszukać wcześniej znalezione miejsca, adresy lub często odwiedzane miejsca bez ponownego wprowadzania zapytania.. Więcej szczegółów można znaleźć w artykule [Historia wyszukiwania](./search-history.md).


## Wyszukaj POI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI na Androidzie](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie POI na iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**Wyszukiwanie POI** to lista posortowana według kategorii, za pomocą której można łatwo znaleźć miejsca i usługi w pobliżu bieżącej lokalizacji lub wybranego obszaru na mapie.

- [Niestandardowe wyszukiwanie POI](./search-poi.md#custom-poi-search) pozwala łączyć różne kategorie POI w celu uproszczenia i personalizacji wyszukiwania.  
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