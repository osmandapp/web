---
source-hash: a37206b0786e0c2a77928c36df15a5b99385e8522ae259e744dfd7222696eb76
sidebar_position: 1
title: Szukaj wszystko
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

**Wyszukiwanie** to przydatne narzędzie do szybkiego znajdowania lokalizacji. Możesz użyć wyszukiwania, aby znaleźć lokalizację według adresu, współrzędnych, punktów POI (Points of Interest) lub poprzednich wyszukiwań. Wyszukiwanie [adresu](#search-address) pozwala wprowadzić adres, aby uzyskać dokładną lokalizację. Wyszukiwanie [współrzędnych](#search-coordinates) działa z współrzędnymi geograficznymi, takimi jak szerokość i długość geograficzna. Dzięki wyszukiwaniu [POI](#search-poi) możesz wyszukiwać pobliskie miejsca w określonych kategoriach, takich jak kawiarnie, hotele lub stacje paliw. [Historia](#search-history) wyszukiwania zapisuje poprzednie wyszukiwania, co zapewnia szybki dostęp do wcześniej znalezionych miejsc. Funkcja wyszukiwania ułatwia planowanie podróży, nawigację w nieznanym terenie i znajdowanie pobliskich punktów POI.

## Jak używać {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista POI wyszukiwania Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista POI wyszukiwania iOS](@site/static/img/search/poi_list_1_ios.png)

</TabItem>

</Tabs>

Aby rozpocząć wyszukiwanie, należy wykonać jeden z poniższych kroków:

- Dotknij [przycisku Szukaj](../widgets/map-buttons.md#search) na ekranie aplikacji mapy i wprowadź zapytanie.

- Przejdź do głównego *Menu → Szukaj → wprowadź zapytanie*.

- Przygotowując się do rozpoczęcia trasy, dotknij [*Nawigacja → Ustaw cel → Pole wyszukiwania*](../navigation/setup/route-navigation.md#set-target-point) *→ zapytanie*.

Ważne informacje:

- ***Do wyszukiwania w OsmAndzie wymagane są pobrane mapy wektorowe offline***.

- Początkowo **wyszukiwanie opiera się na danych znajdujących się na mapie w widocznym obszarze ekranu urządzenia**, ale jeśli nic tam nie zostanie znalezione, OsmAnd oferuje zwiększenie promienia wyszukiwania.

### Podstawowe zapytania {#basic-queries}

***Lista zapytań***:

- Współrzędne we wszystkich dostępnych formatach.
- Adres:
    - Ulica, numer domu;
    - Miasto, ulica;
    - Skrzyżowania ulic;
    - Miasto;
    - Dane TIGER;
    - Kod pocztowy, numer domu;
    - Kod pocztowy, ulica, numer domu.
- Wyszukiwanie POI według nazwy i kategorii z dodatkowymi filtrami.
- Wyszukiwanie tras OSM według nazwy i kategorii z dodatkowymi filtrami.
- Wyszukiwanie najbardziej znanych szczytów i wulkanów.
- Wyszukiwanie według Ulubionych i Punktów trasy.
- Wyszukiwanie ikon według nazw podkategorii POI.
- Wyszukiwanie według śladów.
- Wyszukiwanie według miejsc biznesowych i nazw marek.
- Wyszukiwanie online (Nominatim).
- Wyszukiwanie URL (Google i OsmAnd).
- Historia wyszukiwania.

<!--
***Obsługiwane formaty*:**

***Tagi*** mogą być używane jako zapytanie wyszukiwania. Składają się z ***klucza i wartości***, na przykład:
*addr:street=StreetName*.
Aby uniknąć pomyłek, czasami klucz lub wartość są ujęte w cudzysłów: **key="value" lub "key"="value"**. Cudzysłowy i znak równości nie są częścią zawartości tagu.
-->

### Sortowanie wyników wyszukiwania {#sorting-search-results}

OsmAnd automatycznie sortuje wyniki wyszukiwania według trzech głównych kryteriów:

1. **Dopasowanie zapytań** — Wyniki zawierające dokładne lub częściowe dopasowania do wprowadzonych słów są wyświetlane wyżej.

2. **Typ obiektu** — Podczas sortowania według nazwy, miasta i ulice są priorytetowo traktowane przed POI podczas wyświetlania wyników.

3. **Odległość** — Gdy wyniki mają podobne kryteria dopasowania i typy obiektów, najpierw wyświetlane są wyniki najbliższe bieżącej lokalizacji użytkownika.

***Na przykład***, zapytanie wyszukiwania *poczta* najpierw pokaże najbliższe poczty, nawet jeśli istnieją inne obiekty o podobnych nazwach w większej odległości.

***Aktualne ograniczenia:***

- Nie ma ręcznego ustawienia do zmiany kolejności sortowania wyników wyszukiwania.
- Proces sortowania jest **automatycznie zarządzany** przez OsmAnd, na podstawie wymienionych powyżej kryteriów.
- W przypadkach, gdy wyniki wyszukiwania są zbyt szerokie, OsmAnd może **ograniczyć wyświetlane wyniki** do tych z najwyższą dokładnością dopasowania słów.

### Wyszukiwanie pełnotekstowe {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie ulubionych Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie ulubionych iOS](@site/static/img/search/favorite_search_ios.png)

</TabItem>

</Tabs>

Możesz znaleźć wymaganą lokalizację na mapie z listy punktów, które pojawiają się podczas wprowadzania zapytania.

1. Zacznij wpisywać nazwę lub adres w pasku wyszukiwania.

2. Podczas pisania lista wyświetla punkty najbliższe zapytaniu, w przybliżeniu w następującej kolejności:
    - Kategorie POI
    - Ulubione, POI, Trasy i Punkty trasy
    - Ślady
    - Adresy
    - Mapy do pobrania

3. Jeśli wpiszesz [nazwę marki](../search/search-poi.md#how-to-use), lista rozpocznie się od wyników z tą nazwą, posortowanych według najbliższej odległości.

:::note Ograniczenia danych TIGER w wyszukiwaniu adresów
OsmAnd zintegrował [**dane TIGER**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) z mapami USA, aby dostarczyć informacji o adresach w USA. Zbiór danych TIGER jest **oparty na zakresach** i nie zawiera precyzyjnych numerów domów, więc niektóre adresy mogą być brakujące lub niedokładne.
:::

### Wyszukiwanie na mapie {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd umożliwia wyszukiwanie punktów wyświetlanych na mapie na ekranie urządzenia. Aby to zrobić:

- Użyj [jednego ze sposobów](#how-to-use), aby przejść do narzędzia Wyszukiwanie.
- Zacznij wpisywać nazwę lub adres w polu wyszukiwania.
- Poniżej pola wprowadzania wyszukiwania pojawi się pole z przyciskiem *Pokaż na mapie*.
- Dotknij tego przycisku, aby przejść do mapy.
- Możesz kontynuować wpisywanie zapytania u góry ekranu.

### Szukaj w pobliżu {#search-nearby}

![Wyszukiwanie Android](@site/static/img/search/search_all_near_location_andr.png)

Możesz użyć wyszukiwania w pobliżu określonej lokalizacji. Aby to zrobić, wybierz wymagany punkt [z listy w menu wyszukiwania](#full-text-search) lub wybierz go bezpośrednio na mapie. W [menu kontekstowym mapy](../map/map-context-menu.md#actions) wybierz *Akcje → Szukaj w pobliżu*.

## Wyszukiwanie adresu {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie adresu Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie adresu iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

**Wyszukiwanie adresu** wykorzystuje dane OpenStreetMap. Ten typ wyszukiwania pozwala znaleźć lokalizację i wskazówki dojazdu do konkretnego adresu z gotowej, posortowanej listy. Więcej informacji znajdziesz w artykule [Wyszukiwanie adresu](./search-address.md).

## Historia wyszukiwania {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historia wyszukiwania](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historia wyszukiwania](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Możesz użyć **Historii wyszukiwania**, aby ponownie wyszukać wcześniej znalezione miejsca, adresy lub często odwiedzane miejsca bez ponownego wprowadzania zapytania. Więcej szczegółów znajdziesz w artykule [Historia wyszukiwania](./search-history.md).

## Wyszukiwanie POI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**Wyszukiwanie POI** to lista posortowana według kategorii, za pomocą której można łatwo znaleźć miejsca i usługi w pobliżu bieżącej lokalizacji lub wybranego obszaru na mapie.

- [Niestandardowe wyszukiwanie POI](./search-poi.md#custom-poi-search) pozwala łączyć różne kategorie POI, aby uprościć i spersonalizować wyszukiwanie.
Na przykład, jeśli musisz znaleźć kilka rodzajów usług w określonym obszarze lub na określonym odcinku trasy.

- OsmAnd zapewnia [wyszukiwanie online](./search-poi.md#online-search), które działa w czasie rzeczywistym, dając szybki dostęp do wyników wyszukiwania.
Jest to wygodne w użyciu, gdy mapy regionu są niedostępne, ale wymagane jest stałe i stabilne połączenie z Internetem.

- Więcej informacji znajdziesz w artykule [Wyszukiwanie POI](./search-poi.md).

## Wyszukiwanie współrzędnych {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie współrzędnych Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie współrzędnych iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Wyszukiwanie współrzędnych zapewnia dokładną lokalizację. Możesz wprowadzić precyzyjne współrzędne uzyskane na przykład z innych źródeł, takich jak mapa, urządzenie GPS lub usługi online, co jest szczególnie przydatne w przypadku miejsc, które nie mają dokładnego adresu. Więcej informacji znajdziesz w artykule [Wyszukiwanie współrzędnych](./search-coordinates.md).

## Powiązane artykuły {#related-articles}

- [Wyszukiwanie adresu](./search-address.md)
- [Historia wyszukiwania](./search-history.md)
- [Wyszukiwanie POI](./search-poi.md)
- [Wyszukiwanie współrzędnych](./search-coordinates.md)

> *Ostatnia aktualizacja: kwiecień 2025*