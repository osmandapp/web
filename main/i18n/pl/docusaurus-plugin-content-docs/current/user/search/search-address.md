---
source-hash: cc7b11b19f0261ab3f9cc12de149c6d268cdaa50b3a828cc60f5dd3ebe0ce868
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

## Przegląd {#overview}

*Wyszukiwanie adresu w OsmAnd* opiera się na danych OpenStreetMap i pozwala znaleźć lokalizację oraz wskazówki dojazdu do określonego adresu z gotowej, posortowanej listy, a także wyszukiwać według kodu pocztowego lub współrzędnych. To narzędzie pozwala znaleźć wymagane adresy za pomocą kilku dotknięć, co skraca czas wyszukiwania i pomaga w przypadku, gdy nie pamiętasz dokładnego adresu.

Wyszukiwanie adresu działa offline przy użyciu pobranych map. Upewnij się, że mapa dla regionu, w którym wyszukujesz, jest zainstalowana. Wyniki zależą od danych adresowych dostępnych w OpenStreetMap.

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

OsmAnd obsługuje wyszukiwanie pełnotekstowe adresów. Oznacza to, że możesz wpisać adres bezpośrednio w polu wyszukiwania zamiast wybierać krok po kroku miasto → ulicę → numer domu. Silnik wyszukiwania próbuje rozpoznać komponenty adresu, takie jak:
- miasto;
- ulica;
- numer domu;
- kod pocztowy;
- nazwa miejsca.

Nie musisz wprowadzać ich w ścisłej kolejności. **Przykładowe zapytania**:

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

Jeśli pełny adres nie zostanie znaleziony, OsmAnd automatycznie spróbuje uproszczonych zapytań (na przykład usuwając dodatkowe słowa), aby zwiększyć szanse na znalezienie lokalizacji.

**UWAGA:** Wyszukiwanie adresów działa tylko w ramach pobranych map. Wyniki wyszukiwania opierają się na:
- mapach zainstalowanych na urządzeniu;
- widocznym obszarze mapy;
- bieżącej lokalizacji. 

Jeśli nic nie zostanie znalezione, OsmAnd może zasugerować zwiększenie promienia wyszukiwania.

### Wyszukiwanie adresów w USA i dane TIGER {#us-address-search-and-tiger-data}

OsmAnd obsługuje wyszukiwanie adresów przy użyciu danych OpenStreetMap, ale w Stanach Zjednoczonych wyniki wyszukiwania adresów mogą być niekompletne ze względu na wykorzystanie [danych TIGER](https://wiki.openstreetmap.org/wiki/TIGER).  

- **Dane TIGER zapewniają zakresy adresów, a nie dokładne lokalizacje**, co oznacza, że niektóre numery domów mogą nie zostać rozpoznane.
- **Jeśli adres nie zostanie znaleziony**, spróbuj wyszukać *według nazwy ulicy* zamiast konkretnego numeru domu.
- Użyj *alternatywnych identyfikatorów lokalizacji*, takich jak pobliskie punkty orientacyjne lub kody pocztowe, aby zawęzić wyniki wyszukiwania.  

### Obsługiwane formaty {#supported-formats}

OsmAnd obsługuje kilka powszechnych formatów adresów. Możesz wprowadzać adresy w różnych kolejnościach w zależności od tego, jak znasz adres.

| Format adresu | Przykładowe zapytania |
|---|---|
| Numer domu + ulica | 221B Baker Street<br />10 Downing Street |
| Ulica + numer domu | Baker Street 221B<br />Main Street 101 |
| Miasto + ulica + numer domu | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| Skrzyżowania ulic | Broadway & Wall Street<br />Main Street and High Street |
| Nazwa miasta | Berlin<br />Vienna<br />San Francisco |
| Kod pocztowy + adres | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### Wskazówki wyszukiwania {#search-tips}

Wyszukiwanie adresów w OsmAnd jest tolerancyjne na różne formaty wejściowe. Możesz spróbować:
- zmienić kolejność słów;
- usunąć dodatkowe informacje;
- wyszukać tylko po nazwie ulicy.

Silnik wyszukiwania toleruje również powszechne wariacje w formatowaniu adresów, takie jak różna kolejność słów, różnice w pisowni, skróty lub formaty numerów domów. Poniższa tabela pokazuje typowe wariacje wyszukiwania, które mogą nadal zwracać ten sam adres.

| Wariacja wyszukiwania | Przykładowe zapytania | Powiązana dyskusja |
|---|---|---|
| Wariacje nazw ulic | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [Dyskusja](https://github.com/osmandapp/OsmAnd/issues/23709) |
| Ignorowanie spacji w nazwach | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [Dyskusja](https://github.com/osmandapp/OsmAnd/issues/13783) |
| Numery domów z sufiksami literowymi | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [Dyskusja](https://github.com/osmandapp/OsmAnd/issues/23320) |
| Skróty ulic | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [Dyskusja](https://github.com/osmandapp/OsmAnd/issues/4923) |
| Pełny adres vs uproszczony adres | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [Dyskusja](https://github.com/osmandapp/OsmAnd/issues/19004) |
| Format adresu USA | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [Dyskusja](https://github.com/osmandapp/OsmAnd/issues/6824) |
| Skróty stanów USA | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [Dyskusja](https://github.com/osmandapp/OsmAnd/issues/6824) |


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

**Wyszukiwanie według kodu pocztowego może być przydatne, gdy:**

- Nazwa ulicy istnieje w kilku miastach.
- Znasz kod pocztowy, ale nie dokładny adres.

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