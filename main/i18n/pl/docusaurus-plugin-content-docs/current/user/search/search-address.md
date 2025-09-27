---
source-hash: 677964c6e30a8d9596ffa45395cb1cc593266a07fbfb2b36d1a6384a00432d7d
sidebar_position: 2
title:  Wyszukiwanie adresu
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

*Wyszukiwanie według adresu w OsmAnd* opiera się na danych OpenStreetMap i pozwala znaleźć lokalizację oraz wskazówki dojazdu do określonego adresu z gotowej, posortowanej listy, a także wyszukiwać według kodu pocztowego lub współrzędnych. Narzędzie to pozwala znaleźć wymagane adresy za pomocą kilku dotknięć, co skraca czas wyszukiwania i pomaga w przypadku, gdy nie pamiętasz dokładnego adresu.

OsmAnd zapewnia kilka sposobów dotarcia do *narzędzia Wyszukiwania*, w którym znajduje się sekcja **Wyszukiwanie adresu**.

- [Przycisk Wyszukaj](../widgets/map-buttons.md#search) jest zawsze wyświetlany na mapie, a jego dotknięcie przeniesie Cię do [ekranu głównego](#full-text-search) narzędzia, gdzie można znaleźć kartę *Adres*.
- Przejdź do głównego *Menu → Wyszukaj → karta Adres* w systemie Android.
- Przygotowując się do rozpoczęcia trasy, dotknij *Nawigacja → Ustaw cel → Pole wyszukiwania*.


## Wyszukiwanie pełnotekstowe {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

Wyszukiwanie według adresu upraszcza proces wyszukiwania i nawigacji, zapewnia dokładność i użyteczność oraz skraca czas potrzebny na znalezienie właściwego adresu.

- **Aby skorzystać z funkcji Wyszukiwania adresu**, należy najpierw [pobrać mapę](../start-with/download-maps.md) wymaganego obszaru.
- **Wyszukiwanie opiera się na danych znajdujących się w widocznym obszarze mapy** na ekranie urządzenia. Jeśli nic nie znajdziesz, OsmAnd zaproponuje zwiększenie promienia wyszukiwania.
- Informacje o adresach w OsmAnd zawierają wszystkie [klucze tagów OSM](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Lista zapytań wyszukiwania:

**1.** **Kolejność** elementów na liście:

- **Uporządkowane według nazwy**. Wybranie opcji *Najpierw określ miasto/miejscowość* (Android) lub *Wybierz miasto* (iOS) spowoduje wyświetlenie listy, która zaczyna się od elementów bez nazwy, jeśli takie istnieją, a następnie nazw numerycznych, po których następują nazwy literowe.
- **Rosnąca kolejność numeryczna**. Na następnej liście wyszukiwania numery domów są wyświetlane w porządku rosnącym, po wprowadzeniu miasta i ulicy.

**2.** Każde pole na liście wyszukiwania adresów zawiera **informacje** takie jak:

- Ikona identyfikująca typ miejscowości.
- Część adresu, numer pocztowy lub obszar współrzędnych.
- Odległość od bieżącej lokalizacji lub od centrum miasta.
- Dodatkowe informacje, takie jak dzielnica miasta.


### Wyszukiwanie adresów w USA i dane TIGER {#us-address-search-and-tiger-data}

OsmAnd obsługuje wyszukiwanie adresów przy użyciu danych OpenStreetMap, ale w Stanach Zjednoczonych wyniki wyszukiwania adresów mogą być niekompletne ze względu na wykorzystanie [danych TIGER](https://wiki.openstreetmap.org/wiki/TIGER).

- **Dane TIGER zapewniają zakresy adresów, a nie dokładne lokalizacje**, co oznacza, że niektóre numery domów mogą nie zostać rozpoznane.
- **Jeśli adres nie zostanie znaleziony**, spróbuj wyszukać *według nazwy ulicy* zamiast konkretnego numeru domu.
- Użyj *alternatywnych identyfikatorów lokalizacji*, takich jak pobliskie punkty orientacyjne lub kody pocztowe, aby zawęzić wyniki wyszukiwania.


### Obsługiwane formaty {#supported-formats}

Zobacz artykuł [Wyszukaj wszystko](./search-all.md#basic-queries), aby uzyskać listę dostępnych zapytań i obsługiwanych formatów wyszukiwania.


## Wybierz miasto {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie ulicy Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie ulicy iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Najbliższe miasta**  
    **Wyświetla małą listę miast wokół Twojej lokalizacji** lub miejscowości określonej dla opcji *Wybierz ulicę* lub *Wybierz miasto*. Każde pole zawiera ikonę odpowiadającą wielkości miasta, nazwę miasta, odległość od Ciebie do jego centrum, a dla Androida kierunek kompasu.

Ten sposób wyszukiwania ułatwia znajdowanie określonych lokalizacji w wybranej miejscowości, zapewniając wygodny sposób na dokładne i szybkie znajdowanie adresów. Możesz rozpocząć wyszukiwanie potrzebnego adresu, określając miejscowość.

- Aby to zrobić, dotknij **Najpierw określ miasto/miejscowość** (Android) lub **Wybierz miasto** (iOS).
- Na liście, która się otworzy, wybierz wymaganą miejscowość. [Tutaj](#full-text-search) opisano kolejność wyświetlania zapytań wyszukiwania i informacje dostępne dla każdego elementu.
- Na następnym ekranie można kontynuować zawężanie adresu lub wybrać przycisk *Pokaż na mapie* pod polem wyszukiwania.
- Aby sprecyzować wyszukiwanie, można wprowadzić całą lub tylko część nazwy miasta, miasteczka lub wsi, w której znajduje się szukany adres. Pozwala to zawęzić wyszukiwanie i uzyskać dokładniejszą listę.
- Dotknięcie ostatniego elementu adresu, numeru domu lub nazwy skrzyżowania otwiera [menu kontekstowe mapy](../map/map-context-menu.md#select-an-object-single-tap) obiektu.

**Wyszukiwanie według miasta oferuje następujące korzyści:**

- *Wygoda*. Pozwala szybko wybrać wymagane miasto z listy i określić konkretną ulicę, dom lub skrzyżowanie w wybranym mieście bez konieczności wprowadzania pełnego adresu. Oszczędza to czas i upraszcza proces znajdowania właściwego miejsca.
- *Precyzja*. Możesz wybrać miasto i ulicę z dostępnych opcji, unikając błędów podczas ręcznego wprowadzania adresu.
- *Filtrowanie*. Możliwość wybrania konkretnego domu z listy ułatwia dokładną nawigację do wymaganej lokalizacji, zwłaszcza gdy dokładny adres nie jest znany.

:::note Klucz i wartość
*Wyszukiwanie miasta / miasteczka / wsi* według [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Wynik*: wyświetlanie wszystkich obiektów o tej nazwie.
:::


## Wybierz ulicę {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie ulicy Android](@site/static/img/search/street_search.png) ![Wyszukiwanie ulicy Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie ulicy iOS](@site/static/img/search/address_street_search_3_ios.png) ![Wyszukiwanie ulicy Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Wyszukiwanie ulic odbywa się w miejscowości, w której się znajdujesz, lub w której szukałeś wcześniej, lub która znajduje się w centrum widocznej mapy na ekranie aplikacji.

- Aby skorzystać z tego typu wyszukiwania, dotknij **Wyszukaj ulicę** (*Android*) lub **Wybierz ulicę** (*iOS*).
- W polu wyszukiwania obok nazwy miasta możesz zacząć wpisywać nazwę ulicy, a lista zawęzi się, podając najbardziej odpowiednie wyniki.
- W pozostałych elementach wyszukiwanie ulic jest takie samo jak w [Wybierz miasto](#select-city).

:::note Klucz i wartość
*Wyszukiwanie ulic* według [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Wynik*: wyświetlane są wszystkie ulice o tej nazwie.
:::


## Wyszukiwanie według kodu pocztowego {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie kodu pocztowego Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie kodu pocztowego iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Aby skorzystać z *Wyszukiwania według kodu pocztowego*, wystarczy wpisać numer**, który może składać się nawet z jednej cyfry, a aplikacja zaproponuje listę dostępnych odpowiednich kodów pocztowych.

- Wybierz wymagany kod i dotknij go.
- Możesz użyć funkcji *Pokaż *numer kodu pocztowego* na mapie*. Otworzy to [menu kontekstowe mapy](../map/map-context-menu.md#select-an-object-single-tap) z wybranym kodem pocztowym bez żadnych dodatkowych informacji o lokalizacji.
- Możesz zawęzić wyszukiwanie według tego kodu, wybierając najpierw wymaganą ulicę z listy, a następnie numer.

**Wyszukiwanie według kodu pocztowego może być przydatne w następujących przypadkach:**

- *Znajdowanie adresów*. Po wprowadzeniu kodu pocztowego OsmAnd identyfikuje odpowiedni obszar i sugeruje adresy w tym obszarze. Jest to szczególnie przydatne, jeśli znasz kod pocztowy, ale nie znasz dokładnego adresu.
- *Precyzja nawigacji*. W przypadkach, gdy adres nie jest pewny lub gdy nazwa ulicy może się powtarzać w różnych obszarach, użycie kodu pocztowego może zapewnić najlepszą trasę do danego adresu.
- *Wygoda i szybkość*. Wyszukiwanie według kodu pocztowego pozwala szybko znaleźć informacje, zwłaszcza jeśli znasz kod pocztowy, ale nie masz pewności co do adresu. Zamiast wpisywać pełny adres, można wpisać tylko kod i uzyskać odpowiednie wyniki.

:::note
Więcej informacji można znaleźć w **[Dane kodów pocztowych Wielkiej Brytanii](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Wyszukiwanie według współrzędnych {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie współrzędnych Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie współrzędnych iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Wyszukiwanie według współrzędnych**](../search/search-coordinates.md) pozwala określić współrzędne geograficzne, takie jak szerokość i długość geograficzna, w celu znalezienia określonej lokalizacji. Zapewnia dokładne lokalizacje na mapie w różnych [formatach współrzędnych](../search/search-coordinates.md#coordinate-format) i pozwala uzyskać powiązane informacje. Funkcja ta może być przydatna, gdy nie masz adresu lub dokładnej nazwy lokalizacji i może ułatwić planowanie podróży i nawigację w nieznanych miejscach.


## Powiązane artykuły {#related-articles}

- [Wyszukaj wszystko](./search-all.md)
- [Historia wyszukiwania](./search-history.md)
- [Wyszukaj POI](./search-poi.md)
- [Wyszukiwanie według współrzędnych](./search-coordinates.md)