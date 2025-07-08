---
source-hash: 7aa187a96947b5ca65aab12d710ed0867ffb5db9a42f53d9dfb15a99a9107f74
sidebar_position: 2
title: Szukaj adresu
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

*Wyszukiwanie adresów w OsmAnd* opiera się na danych OpenStreetMap i pozwala znaleźć lokalizację i wskazówki dojazdu do konkretnego adresu z gotowej posortowanej listy, a także wyszukiwać według kodu pocztowego lub współrzędnych. To narzędzie pozwala znaleźć wymagane adresy za pomocą kilku dotknięć, co skraca czas wyszukiwania i pomaga w przypadku, gdy nie pamiętasz dokładnego adresu.

OsmAnd oferuje kilka sposobów dotarcia do *narzędzia wyszukiwania*, w którym znajduje się sekcja **Wyszukiwanie adresów**.

- [Przycisk wyszukiwania](../widgets/map-buttons.md#search) jest zawsze wyświetlany na mapie, a dotknięcie go przeniesie Cię do [ogólnego ekranu](#full-text-search) narzędzia, gdzie znajdziesz zakładkę *Adres*.
- Przejdź do głównego menu Androida *Menu → Szukaj → zakładka Adres*.
- Podczas przygotowywania do rozpoczęcia trasy, dotknij *Nawigacja → Ustaw cel → Pole wyszukiwania*.

## Wyszukiwanie pełnotekstowe {#full-text-search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Szukaj Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Szukaj iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

Wyszukiwanie adresów upraszcza proces wyszukiwania i nawigacji, zapewnia dokładność i użyteczność oraz skraca czas potrzebny na znalezienie właściwego adresu.

- **Aby skorzystać z funkcji wyszukiwania adresów,** musisz najpierw [pobrać mapę](../start-with/download-maps.md) wymaganego obszaru.
- **Wyszukiwanie opiera się na danych znajdujących się w widocznym obszarze mapy** na ekranie urządzenia. Jeśli nic nie znajdziesz, OsmAnd oferuje zwiększenie promienia wyszukiwania.
- Informacje adresowe w OsmAnd zawierają wszystkie [klucze tagów OSM](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).

Lista zapytań wyszukiwania:

**1.** **Kolejność** elementów na liście:

- **Posortowane według nazwy**. Wybranie opcji *Najpierw określ miasto/miejscowość/lokalizację* (Android) lub *Wybierz miasto* (iOS) wyświetli listę, która zaczyna się od nienazwanych elementów, jeśli takie istnieją, następnie nazwy numeryczne, a następnie nazwy alfabetyczne.
- **Rosnąca kolejność numeryczna**. Na następnej liście wyszukiwania numery domów są wyświetlane w kolejności rosnącej, po wprowadzeniu miasta i ulicy.

**2.** Każde pole na liście wyszukiwania adresów zawiera **informacje**, takie jak:

- Ikona identyfikująca typ miejscowości.
- Część adresu, numer pocztowy lub obszar współrzędnych.
- Odległość od Twojej bieżącej lokalizacji lub od centrum miasta.
- Dodatkowe informacje, takie jak dzielnica miasta.

#### Wyszukiwanie adresów w USA i dane TIGER {#us-address-search-and-tiger-data}

OsmAnd obsługuje wyszukiwanie adresów za pomocą danych OpenStreetMap, ale w Stanach Zjednoczonych wyniki wyszukiwania adresów mogą być niekompletne z powodu użycia [danych TIGER](https://wiki.openstreetmap.org/wiki/TIGER).

- **Dane TIGER dostarczają zakresy adresów, a nie dokładne lokalizacje**, co oznacza, że niektóre numery domów mogą nie zostać rozpoznane.
- **Jeśli adres nie zostanie znaleziony**, spróbuj wyszukać *według nazwy ulicy* zamiast konkretnego numeru domu.
- Użyj *alternatywnych identyfikatorów lokalizacji*, takich jak pobliskie punkty orientacyjne lub kody pocztowe, aby doprecyzować wyniki wyszukiwania.

### Obsługiwane formaty {#supported-formats}

Zobacz artykuł [Wyszukaj wszystko](./search-all.md#basic-queries), aby zapoznać się z listą dostępnych zapytań i obsługiwanych formatów wyszukiwania.

## Wybierz miasto {#select-city}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Szukaj ulicy Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Szukaj ulicy iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Najbliższe miasta**
    Wyświetla **małą listę miast wokół Twojej lokalizacji** lub miejscowości, którą określiłeś dla *Wybierz ulicę* lub *Wybierz miasto*. Każde pole zawiera ikonę odpowiadającą wielkości miasta, nazwę miasta, odległość od Ciebie do jego centrum, a dla Androida kierunek kompasu.

Ten sposób wyszukiwania ułatwia znajdowanie konkretnych lokalizacji w wybranej miejscowości, zapewniając wygodny sposób dokładnego i szybkiego znajdowania adresów. Możesz rozpocząć wyszukiwanie potrzebnego adresu, określając miejscowość.

- Aby to zrobić, dotknij **Najpierw określ miasto/miejscowość/lokalizację** (Android) lub **Wybierz miasto** (iOS).
- Na otwartej liście wybierz wymaganą miejscowość. [Tutaj](#full-text-search) opisano kolejność wyświetlania zapytań wyszukiwania i jakie informacje są dostępne dla każdego elementu.
- Na następnym ekranie możesz kontynuować doprecyzowywanie adresu lub wybrać przycisk *Pokaż na mapie* poniżej pola wprowadzania wyszukiwania.
- Aby sprecyzować wyszukiwanie, możesz wprowadzić całą lub tylko część nazwy miasta, miasteczka lub wsi, w której znajduje się szukany adres. Pozwala to zawęzić wyszukiwanie i uzyskać dokładniejszą listę.
- Dotknięcie ostatniego elementu w adresie, numerze domu lub nazwie skrzyżowania otwiera [menu kontekstowe mapy](../map/map-context-menu.md#select-an-object-single-tap) obiektu.

**Wyszukiwanie według miasta oferuje następujące korzyści:**

- *Wygoda*. Pozwala szybko wybrać wymagane miasto z listy i określić konkretną ulicę, dom lub skrzyżowanie w wybranym mieście bez konieczności wprowadzania pełnego adresu. Oszczędza to czas i upraszcza proces znajdowania właściwego miejsca.
- *Precyzja.* Możesz wybrać miasto i ulicę z dostępnych opcji, unikając błędów podczas ręcznego wprowadzania adresu.
- *Filtrowanie.* Możliwość wyboru konkretnego domu z listy ułatwia dokładną nawigację do wymaganej lokalizacji, zwłaszcza gdy dokładny adres jest nieznany.

:::note Klucz i wartość
*Wyszukiwanie miast / miasteczek / wsi* według [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Wynik*: wyświetlanie wszystkich obiektów o tej nazwie.
:::

## Wybierz ulicę {#select-street}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Szukaj ulicy Android](@site/static/img/search/street_search.png) ![Szukaj ulicy Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Szukaj ulicy iOS](@site/static/img/search/address_street_search_3_ios.png) ![Szukaj ulicy Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Wyszukiwanie ulic odbywa się w miejscowości, w której się znajdujesz, lub w której wcześniej wyszukiwałeś, lub która znajduje się w centrum widocznej mapy na ekranie aplikacji.

- Aby użyć tego typu wyszukiwania, dotknij **Szukaj ulicy** (*Android*) lub **Wybierz ulicę** (*iOS*).
- W polu wyszukiwania obok nazwy miasta możesz zacząć wpisywać nazwę ulicy, a lista zostanie doprecyzowana, dając Ci najbardziej odpowiednie wyniki.
- W innych elementach wyszukiwanie ulic jest takie samo jak w [Wybierz miasto](#select-city).

:::note Klucz i wartość
*Szukaj ulic* według [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Wynik*: wyświetlane są wszystkie ulice o tej nazwie.
:::

## Wyszukiwanie kodu pocztowego {#postcode-search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Szukaj kodu pocztowego Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Szukaj kodu pocztowego iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Aby użyć *wyszukiwania kodu pocztowego*, wystarczy wprowadzić numer**, który może składać się nawet z jednej cyfry, a aplikacja oferuje listę dostępnych odpowiednich kodów pocztowych.

- Wybierz wymagany kod i dotknij go.
- Możesz użyć funkcji *Pokaż numer kodu pocztowego na mapie*. Otworzy to [menu kontekstowe mapy](../map/map-context-menu.md#select-an-object-single-tap) z wybranym kodem pocztowym bez żadnych dodatkowych informacji o lokalizacji.
- Możesz doprecyzować wyszukiwanie według tego kodu, najpierw wybierając wymaganą ulicę z listy, a następnie numer.

**Wyszukiwanie według kodu pocztowego może być przydatne w następujących przypadkach:**

- *Znajdź adresy*. Po wprowadzeniu kodu pocztowego OsmAnd identyfikuje odpowiedni obszar i sugeruje adresy w tym obszarze. Jest to szczególnie przydatne, jeśli znasz kod pocztowy, ale nie znasz dokładnego adresu.
- *Precyzja nawigacji*. W przypadkach, gdy adres nie jest pewny lub gdy nazwa ulicy może powtarzać się w różnych obszarach, użycie kodu pocztowego może zapewnić najlepszą trasę do danego adresu.
- *Wygoda i szybkość*. Wyszukiwanie według kodu pocztowego pozwala szybko znaleźć informacje, zwłaszcza jeśli znasz kod pocztowy, ale nie jesteś pewien adresu. Zamiast wprowadzać pełny adres, możesz wprowadzić tylko kod i uzyskać odpowiednie wyniki.

:::note
Więcej informacji znajdziesz w **[danych kodów pocztowych Wielkiej Brytanii](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::

## Wyszukiwanie współrzędnych {#coordinates-search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Szukaj współrzędnych Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Szukaj współrzędnych iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Wyszukiwanie współrzędnych**](../search/search-coordinates.md) pozwala określić współrzędne geograficzne, takie jak szerokość i długość geograficzna, aby znaleźć konkretną lokalizację. Zapewnia dokładne lokalizacje na mapie w różnych [formatach współrzędnych](../search/search-coordinates.md#coordinates-search) i pozwala uzyskać powiązane informacje. Ta funkcja może być przydatna, gdy nie masz adresu ani dokładnej nazwy lokalizacji, i może ułatwić planowanie podróży i nawigację w nieznanych miejscach.

## Powiązane artykuły {#related-articles}

- [Wyszukaj wszystko](./search-all.md)
- [Historia wyszukiwania](./search-history.md)
- [Wyszukaj POI](./search-poi.md)
- [Wyszukaj współrzędne](./search-coordinates.md)

> *Ostatnia aktualizacja: lipiec 2024*