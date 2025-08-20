---
source-hash: 7371416328fd739b31ec178647a97d46782b548fb574f29facc0559cdd279011
sidebar_position: 4
title: Wyszukiwanie POI
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


<InfoIncompleteArticle/>


## Przegląd {#overview}

[Funkcja OsmAnd Point of Interest (POI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) w OsmAnd zapewnia dokładność, widoczność i wygodę w znajdowaniu interesujących miejsc, tras i usług w pobliżu bieżącej lokalizacji lub wybranego obszaru na mapie.

Pasek wyszukiwania umożliwia wprowadzanie słów kluczowych związanych z interesującymi miejscami. Wyszukiwanie POI przedstawia również wygodną listę posortowaną według [kategorii](#poi-search-by-categories), aby pomóc szybko znaleźć to, czego szukasz, a [filtr](#save-new-custom-filters) pozwala wybrać określone cechy POI, aby wyświetlić tylko odpowiednie wyniki.

[Wyszukiwanie niestandardowe](#custom-poi-search) zwiększa funkcjonalność wyszukiwania, umożliwiając wybór wielu kategorii i podkategorii. Utworzone filtry można zapisać do wykorzystania w przyszłości, co ułatwia szybkie lokalizowanie POI spełniających określone kryteria lub preferencje. Więcej szczegółów można znaleźć w sekcji dotyczącej zapisywania filtrów niestandardowych [tutaj](#save-new-custom-filters).

OsmAnd oferuje kilka sposobów dotarcia do narzędzia wyszukiwania, w którym znajduje się sekcja **Wyszukiwanie kategorii**.

- [Przycisk wyszukiwania](../widgets/map-buttons.md#search) jest zawsze wyświetlany na mapie, a jego dotknięcie przeniesie Cię do [ogólnego ekranu](#how-to-use) narzędzia, gdzie możesz znaleźć zakładkę *Kategorie*.
- Przejdź do głównego *Menu → Szukaj → zakładka Kategorie*.
- Podczas przygotowywania do rozpoczęcia trasy dotknij [*Nawigacja → Ustaw cel → Pole wyszukiwania → zakładka Kategorie*](../navigation/setup/route-navigation.md#set-target-point).
- Przejdź do głównego [*Menu → Konfiguruj mapę → Nakładka POI → Szukaj*](../map/point-layers-on-map.md#points-of-interest-pois).


## Jak używać {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Wszystkie typy POI w OsmAnd można znaleźć tutaj:* [link do gitHub](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Wyszukiwanie punktów zainteresowania (POI):**
    - Umożliwia wyszukiwanie:
        - pobliskich lub określonych kategorii punktów zainteresowania (POI).
        - [tras OSM](../map/routes.md).
        - [Popularnych miejsc (Wikipedia)](../map/map-context-menu.md#details).

    - Możliwe jest filtrowanie i sortowanie wyników według kategorii, odległości lub oceny.

    - Wyniki wyszukiwania pokazują lokalizację POI, dane kontaktowe, oceny i recenzje.

- **Wyszukiwanie POI według kategorii bezpośrednio na mapie**:
    - Należy wybrać wymagane kategorie z [**listy**](../map/point-layers-on-map.md#points-of-interest-pois) w *Konfiguruj mapę → Pokaż nakładkę POI...* i wyszukiwać według ikon w oczekiwanej lokalizacji.

    - *Android*: Możesz rozpocząć wyszukiwanie POI w *Menu → Szukaj → Kategorie*.

- **Wyszukiwanie marki:**
    - Podczas wprowadzania nazwy firmy lub marki (takiej jak Audi, Starbucks lub Aldi), lista wyników wyszukiwania jest uporządkowana z priorytetem według nazwy POI i posortowana według odległości od odpowiedniej lokalizacji.

    - Nazwa miejscowości jest wyświetlana obok każdego wyniku wyszukiwania, aby pomóc w identyfikacji właściwej lokalizacji wśród innych w podobnej odległości od Ciebie.

    - Ten typ wyszukiwania jest wygodny w użyciu, jeśli punkt sprzedaży detalicznej specjalizuje się w sprzedaży towarów lub usług jednej marki lub jeśli sama marka jest lepiej znana i bardziej rozpoznawalna niż nazwa lub kategoria POI.

    - Aby wykonać wyszukiwanie, tag `brand` i nazwy marek muszą zostać dodane do opisu POI.

    - Przykład sklepu samochodowego: *Typ POI* - Dealer samochodowy, *nazwa* - Octo Automobile, [***nazwa marki***](https://wiki.openstreetmap.org/wiki/Key:brand) - Audi, BMW, Fiat, Jaguar, Land Rover.

    ![Wyszukiwanie POI Android](@site/static/img/search/brand_search_andr.png)


:::note
Aby wykonać niektóre z tych zadań (zlokalizować adresy, POI), musisz mieć plik mapy wektorowej offline. Początkowo wyszukiwanie opiera się na danych znajdujących się na mapie w widocznym obszarze ekranu urządzenia. Jeśli nic nie znajdziesz, OsmAnd proponuje zwiększenie promienia wyszukiwania.
:::


## Wyszukiwanie POI według kategorii {#poi-search-by-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

Narzędzie **Wyszukiwanie według kategorii** pozwala szybko znaleźć obiekty, miejsca i trasy sklasyfikowane w różnych kategoriach. Każda kategoria ma unikalny zestaw cech, a to narzędzie posiada filtry, które pozwalają doprecyzować wyniki wyszukiwania, wybierając różne wartości dla dodatkowych cech.

Jak to działa:

- *Wybór kategorii* - Wybierasz interesującą Cię kategorię, taką jak restauracje, hotele, sklepy, trasy OSM, popularne miejsca w Wikipedii i inne, z sugerowanej listy kategorii.
- *Filtry cech* - Po wybraniu kategorii aplikacja pokazuje dodatkowe cechy, które można wykorzystać do doprecyzowania wyszukiwania. Na przykład dla kategorii Restauracje można wybrać filtry takie jak typ kuchni (włoska, chińska itp.), zakres cen, ocena i dostępność parkingu.
- *Stosowanie filtrów* - Wybierasz wymagane wartości w filtrach, a następnie aplikacja stosuje te filtry do wyników wyszukiwania, aby pokazać tylko te właściwości, które odpowiadają określonym cechom.
- *Wyświetlanie wyników* - Po zastosowaniu filtrów OsmAnd wyświetla listę z krótkimi informacjami odpowiadającymi ustawionej kategorii i cechom.

Korzyści:

- *Dostosowanie przez użytkownika* - Filtry funkcji pozwalają dostosować wyszukiwanie do ich specyficznych potrzeb i preferencji.
- *Dopracowane wyniki* - Filtry pomagają dopracować wyniki wyszukiwania, czyniąc je bardziej trafnymi i dokładnymi.
- *Wiele kategorii* - Baza danych OpenStreetMap posiada obszerny zestaw kategorii POI, co pozwala znaleźć miejsca różnego typu i kategorii.

<!--
Wyszukiwanie kategorii POI pozwala szybko znaleźć i wybrać interesujące miejsca w zależności od potrzeb. Jest to przydatne narzędzie do podróżowania, znajdowania pobliskich usług lub interesujących miejsc oraz planowania tras w oparciu o wybrane kategorie POI.

OsmAnd zaczyna znajdować nazwy i kategorie POI według wprowadzonych słów. Pierwszymi wynikami będą kategorie, drugimi wynikami będą POI z dodatkowymi informacjami, pełną nazwą, nazwą kategorii, kierunkiem i odległością do POI, czasem pracy. Naciśnięcie potrzebnej kategorii otwiera listę POI tej kategorii.

Dotknięcie wybranego POI na liście otwiera [menu kontekstowe mapy](../map/map-context-menu.md#select-an-object-single-tap) POI.
-->

### Rodzaje filtrów {#types-of-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie POI iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

Za pomocą funkcji **Filtr** można wybrać niezbędne cechy, a w rezultacie uzyskać listę zawierającą tylko odpowiednie obiekty. Aby użyć filtra:

- Wybierz interesującą Cię kategorię z listy kategorii.
- Na otwartym ekranie dotknij ikony wyświetlającej filtr. Znajduje się ona poniżej pola wprowadzania, obok *Pokaż na mapie*.
- W filtrze wybierz typ cech.

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_filter_icon_andr.png)

Filtr może składać się z wielu elementów, których obecność zależy od wybranej kategorii. Każda kategoria ma szereg specyficznych dla niej filtrów, zorganizowanych w foldery według typu. Łącznie istnieje *22 domyślne kategorie*. Niektóre z nich są wymienione tutaj:

1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Zakwaterowanie](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) obejmuje obiekty zapewniające tymczasowe zakwaterowanie, takie jak hotele, motele, hostele, pensjonaty i kempingi. Miejsca te zapewniają udogodnienia i usługi zapewniające komfortowy pobyt podczas podróży.
    Zawiera *9* typów filtrów: **Lodówka** (ma *2* wartości), **Ogrzewanie** (ma *7* wartości), **Typ dostępu do Internetu** (ma *3* wartości), **Materac** (ma *2* wartości), **Typ płatności** (ponad *10* wartości), **Prysznic** (ma *1* wartość), **Palenie** (ma *6* wartości), **Ocena w gwiazdkach** (ma *10* wartości), **Dostępność dla wózków inwalidzkich** (ma *4* wartości), Otwarte teraz / Otwarte 24/7.

2. **Kawiarnia i restauracja**. [Kawiarnia](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) i [restauracje](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) reprezentują miejsca usług gastronomicznych.
    Zawiera *16* typów filtrów: **Stolik do przewijania** (ma *3* wartości), **Kawa** (ma *2* wartości), **Kuchnia** (ponad *10* wartości), **Dostawa** (ma *1* wartość), **Dieta** (ma *8* wartości), **Danie** (ponad *10* wartości), **Uzupełnianie wody pitnej** (ma *1* wartość), **Drive-in** (ma *1* wartość), **Typ dostępu do Internetu** (ma *3* wartości), **Mikrobrowar** (ma *1* wartość), **Produkty ekologiczne** (ma *2* wartości), **Miejsca na zewnątrz** (ma *1* wartość), **Typ płatności** (ponad *10* wartości), **Palenie** (ma *6* wartości), **Na wynos** (ma *1* wartość), **Dostępność dla wózków inwalidzkich** (ma *4* wartości), Otwarte teraz / Otwarte 24/7.

3. **Stacja ładowania**. [Stacja ładowania](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) to obiekt infrastrukturalny, w którym właściciele pojazdów elektrycznych mogą ładować swoje samochody, motocykle lub inne pojazdy elektryczne. Punkty te zapewniają ładowarki i odpowiednie połączenia do dostarczania energii do akumulatorów pojazdów.
    Zawiera *35* typów filtrów: **Dostęp dla rowerów** (ma *1* wartość), **Dostęp dla autobusów** (ma *1* wartość), **Dostęp dla ciężarówek** (ma *5* wartości), **Dostęp dla samochodów** (ma *1* wartość), **Dostęp dla skuterów** (ma *1* wartość), **Autoryzacja przez aplikację** (ma *1* wartość), **Autoryzacja przez kartę chipową** (ma *1* wartość), **Autoryzacja bezdotykowa** (ma *1* wartość), **Autoryzacja przez klucz** (ma *1* wartość), **Autoryzacja wymagana** (ma *1* wartość), **Autoryzacja przez połączenie telefoniczne** (ma *1* wartość) **Autoryzacja przez krótką wiadomość** (ma *1* wartość), **Opłata** (ma *2* wartości), **Typ dostępu do Internetu** (ma *3* wartości), **Typ dostępu do Internetu** (ma *3* wartości), **Dostępność dla wózków inwalidzkich** (ma *4* wartości), Otwarte teraz / Otwarte 24/7 i inne.

4. **Sklep spożywczy i supermarket**. [Sklep spożywczy](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) i [supermarket](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) reprezentują obiekty handlu detalicznego.
    Zawiera *13* typów filtrów: **Zakup hurtowy** (ma *2* wartości), **Wypłata gotówki** (ma *5* wartości), **Stolik do przewijania** (ma *3* wartości), **Kawa** (ma *2* wartości), **Dostawa** (ma *1* wartość), **Dieta** (ma *8* wartości), **Lody** (ma *1* wartość), **Produkty ekologiczne** (ma *2* wartości), **Typ płatności** (ponad *10* wartości), **Filtr z drugiej ręki** (ma *2* wartości), **Samoobsługa** (ma *2* wartości), **Dostępność dla wózków inwalidzkich** (ma *4* wartości), Otwarte teraz / Otwarte 24/7.

5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Nagłe wypadki](https://wiki.openstreetmap.org/wiki/Key:emergency) obejmują obiekty i lokalizacje związane z usługami ratunkowymi, takie jak szpitale, posterunki policji, straże pożarne i ośrodki pierwszej pomocy medycznej.
    Nie zawiera żadnych filtrów.

6. **Stacja paliw**. [Stacja paliw](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), znana również jako stacja benzynowa, to obiekt handlu detalicznego, w którym pojazdy silnikowe mogą być tankowane.
    Zawiera *13* typów filtrów: **Myjnia samochodowa** (ma *2* wartości), **Wypłata gotówki** (ma *5* wartości), **Sprężone powietrze** (ma *1* wartość), **Rodzaj paliwa (avia)** (ma ponad *20* wartości), **Karty paliwowe** (ma *5* wartości), **Rodzaj płatności** (ma ponad *20* wartości), **Samoobsługa** (ma *2* wartości), **Dostęp dla skuterów śnieżnych** (ma *3* wartości), **Toaleta** (ponad *1* wartość), **Odkurzacz** (ma *1* wartość), **Automatyczny dystrybutor paliwa** (ma *1* wartość), **Dostępność dla wózków inwalidzkich** (ma *4* wartości), Otwarte teraz / Otwarte 24/7.

7. **Finanse**. [Finanse](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) używane do biur firm z sektora finansowego.
    Zawiera *5* typów filtrów.

8. **Jedzenie**. [Jedzenie](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) obejmuje wszystkie miejsca dostarczające żywność i napoje.
    Zawiera *24* typy filtrów.

9. **Opieka zdrowotna**. [Opieka zdrowotna](https://wiki.openstreetmap.org/wiki/Healthcare) obejmuje usługi świadczone przez różnych specjalistów w różnych typach placówek.
    Zawiera *13* typów filtrów.

10. **Wypoczynek**. [Wypoczynek](https://wiki.openstreetmap.org/wiki/Category:Leisure) obejmuje różne rodzaje miejsc i obiektów rozrywkowych.
    Zawiera *15* typów filtrów.

11. **Nautyka**. Obejmuje POI związane z typami nautycznymi.
    Nie zawiera żadnych filtrów.

12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Obejmuje POI, które są blisko Ciebie.
    Zawiera *216* typów filtrów.

13. **<Translate android="true" ids="poi_filter_parking"/>**. [Parking](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) obejmuje obiekty używane przez społeczeństwo, klientów lub innych upoważnionych użytkowników do parkowania pojazdów, takich jak samochody i ciężarówki, powszechnie znane jako parking (brytyjski angielski) lub parking (amerykański angielski).
    Zawiera *34* typy filtrów.

14. **Transport osobisty**. Wszystkie [rodzaje pojazdów](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) mogą być w Twoim posiadaniu.
    Zawiera *38* typów filtrów.

15. **Popularne miejsca (Wikipedia)**. Aby wyszukać w tej kategorii, musisz pobrać [mapę Wikipedii](../plugins/wikipedia.md#overview) regionu, który Cię interesuje.
    Nie zawiera żadnych filtrów.

16. **Dostęp prywatny**.
    Zawiera *6* typów filtrów.

17. **<Translate android="true" ids="poi_filter_public_transport"/>**. Jest to system transportowy przeznaczony do przewozu osób w celach publicznych, dostępny dla wszystkich mieszkańców i odwiedzających miasto lub region.
    Zawiera *9* typów filtrów.

18. **Trasy**. Obejmuje [trasy OSM](../map/routes.md) dla różnych rodzajów aktywności.
    Zawiera *14* typów filtrów: **Punkt kontrolny**, **Węzeł sieci rowerowej**, **Węzeł sieci pieszej**, **Sieć tras (rowerowa)**, **Sieć tras (piesza)**, **Kategoria punktu trasy**, **Sporty lotnicze**, **Jazda na rowerze**, **Jazda samochodem**, **Pieszo**, **Motocykl**, **Inne trasy**, **Sporty wodne**, **Sporty zimowe**.

19. **Zwiedzanie**. Jest to aktywność, w której ludzie odwiedzają interesujące miejsca lub obiekty, aby się z nimi zapoznać i cieszyć się ich pięknem, historią lub znaczeniem.
    Zawiera *8* typów filtrów.

20. **Sport**. Obejmuje obszary do uprawiania sportu.
    Zawiera *11* typów filtrów.

21. **Sklep**. [Sklep](https://wiki.openstreetmap.org/wiki/Key:shop) odnosi się do różnych placówek i firm oferujących różne towary lub usługi na sprzedaż, takie jak sklepy spożywcze, sklepy odzieżowe, sklepy elektroniczne i inne.
    Zawiera *36* typów filtrów.

22. **Turystyka**. [Turystyka](https://wiki.openstreetmap.org/wiki/Key:tourism) obejmuje miejsca i rzeczy o szczególnym znaczeniu dla turystów, w tym miejsca do zobaczenia, miejsca do zamieszkania oraz rzeczy i miejsca zapewniające informacje i wsparcie turystom.
    Zawiera *32* typy filtrów.

23. **Woda**. Źródła [wody pitnej](https://wiki.openstreetmap.org/wiki/Key:drinking_water) stworzone lub zaaranżowane przez człowieka.
    Nie zawiera żadnych filtrów.


### Zmień kolejność kategorii {#rearrange-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie POI iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

Funkcja Zmień kolejność kategorii pozwala wyświetlić tylko potrzebne kategorie i ułożyć je w kolejności, w której najwygodniej jest z nich korzystać.

Opis i sposób użycia:

- Początkowo *lista jest posortowana alfabetycznie*. Utworzone kategorie są również dodawane w kolejności alfabetycznej.
- Zmiany na liście kategorii są wprowadzane dla każdego profilu osobno.
- Przenieś kategorie, przeciągając je i upuszczając w odpowiednie miejsce na liście.
- *Aby ukryć* niepotrzebne kategorie, dotknij ikony **minus**.
- **Dostępne**. Wcześniej *Ukryte* kategorie można przywrócić do wyświetlanej listy, dotykając ikony **plus**.
- Użyj przycisku **Resetuj** do domyślnych, aby przywrócić listę do stanu początkowego.
- Kategorie utworzone za pomocą [Wyszukiwania niestandardowego](#custom-poi-search) lub [Filtrów](#save-new-custom-filters) można usunąć za pomocą ikony **Usuń**.

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)


### Wyszukiwanie online {#online-search}

<InfoAndroidOnly />

![Wyszukiwanie POI Android](@site/static/img/search/search_online_2_andr.png)

**Wyszukiwanie online** umożliwia znajdowanie lokalizacji, adresów i punktów zainteresowania w czasie rzeczywistym. OsmAnd wykorzystuje [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), geokoder online opracowany przez OpenStreetMap, który tłumaczy zapytania tekstowe użytkowników na współrzędne geograficzne i z powrotem ([*przykład*](#example-of-online-search-query)).

Wyszukiwanie online obejmuje następujące funkcje:

1. **Wyszukiwanie według lokalizacji** - Możesz wprowadzić nazwę miasta, ulicy, dzielnicy lub innej lokalizacji, a OsmAnd dostarczy wyniki odpowiadające zapytaniu.
2. **Geokodowanie** - Wyszukiwanie online konwertuje Twoje zapytania tekstowe na współrzędne geograficzne, umożliwiając precyzyjną lokalizację.
3. **Geokodowanie odwrotne** - Możesz wprowadzić współrzędne geograficzne, a Wyszukiwanie zwróci odpowiadającą im lokalizację jako nazwę miasta, nazwę ulicy lub miejsce na mapie.
4. **Wyszukiwanie według punktów zainteresowania** - Umożliwia wyszukiwanie różnych punktów według nazwy lub kategorii.

Korzystanie z wyszukiwania online:

- Wyszukiwanie online zapewnia aktualność danych i dostępność aktualizacji, ponieważ usługa jest stale aktualizowana i korzysta z otwartych źródeł danych.
- Zapewnia szeroki zasięg miejsc i obiektów, umożliwiając znajdowanie interesujących miejsc w różnych regionach świata.
- Wyszukiwania online odbywają się w czasie rzeczywistym, zapewniając szybki dostęp do wyników wyszukiwania.
- Przydatne w miastach i na autostradach z dobrym zasięgiem Internetu.
- Wyszukiwanie online jest wygodne w użyciu, jeśli nie ma map regionu i jeśli nie można ich pobrać.
- *Wymaga stałego i stabilnego połączenia z Internetem.*

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_online_increase2_andr.png)

Aby poprawić wyniki, przed użyciem narzędzia Wyszukiwanie, powiększ mapę, aby zbliżyć się do miejsca, w którym musisz znaleźć określoną lokalizację. Podczas wyszukiwania możesz **zwiększyć promień wyszukiwania**, aby znaleźć miejsca, które są dalej od Twojej lokalizacji. Podczas wyszukiwania offline, jeśli wymagane wyniki nie są dostępne, OsmAnd sugeruje użycie wyszukiwania online.

Informacje o nawigacji online znajdziesz w artykule [Routing online](../navigation/routing/online-routing.md).

#### Przykład zapytania wyszukiwania online {#example-of-online-search-query}

*Nominatim* w OsmAnd jest używany jako wyszukiwarka danych OpenStreetMap, za pomocą której można wyszukiwać według nazwy (wyszukiwanie według adresu jest obecnie wyłączone). Każdy wynik zawiera link do strony szczegółów, aby zobaczyć, jakie dane o obiekcie są przechowywane w bazie danych.

**Przykładowy plik XML.** Ten plik XML nie zawiera żadnych informacji o stylu z nim związanych. Drzewo dokumentu jest pokazane w [linku](https://nominatim.openstreetmap.org/search?format=xml&addressdetails=0&accept-language=en&q=%D0%9C%D1%96%D0%BD%D1%81%D0%BA+%D0%BD%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96+72+&addressdetails=1&limit=300).


## Niestandardowe wyszukiwanie POI {#custom-poi-search}

Niestandardowe wyszukiwanie POI to zaawansowana funkcja wyszukiwania, która pozwala znaleźć POI z różnych kategorii i połączyć je w celu dokładniejszego i spersonalizowanego wyszukiwania. W przeciwieństwie do standardowego wyszukiwania POI, które jest ograniczone do niektórych predefiniowanych kategorii, niestandardowe wyszukiwanie POI zapewnia elastyczność w wyborze i łączeniu różnych typów POI.

Na przykład, możesz jednocześnie wyszukiwać restauracje i apteki, aby znaleźć najbliższe miejsce do zjedzenia, a następnie wziąć leki. Lub wyszukać najbliższą stację benzynową i serwis samochodowy, gdy masz problem z samochodem.

Ta funkcjonalność jest szczególnie przydatna w różnych przypadkach:

- *Podróże*. Podczas podróży, korzystając z wyszukiwania niestandardowego, możesz szybko znaleźć różne interesujące miejsca i połączyć je, aby stworzyć optymalną trasę.
- *Nagłe wypadki*. Jeśli musisz szybko znaleźć kilka rodzajów usług, możesz użyć niestandardowego wyszukiwania POI, aby uzyskać wszystkie potrzebne informacje.
- *Wyszukiwanie pobliskich usług*. Wyszukiwanie niestandardowe pozwala łączyć różne kategorie POI w celu łatwego wyszukiwania, jeśli musisz znaleźć kilka rodzajów usług w określonej dzielnicy lub na określonym odcinku trasy.

### Niestandardowy filtr POI {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie niestandardowe Android](@site/static/img/search/search_custom_filter_andr.png) ![Wyszukiwanie niestandardowe Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Niestandardowe POI iOS](@site/static/img/search/custom_poi_ios.png) ![Niestandardowe typy POI iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Niestandardowe POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png) ![Niestandardowe typy POI iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>

*Niestandardowy filtr POI* zawiera zestawy kategorii udogodnień składające się z odpowiednich wartości. OsmAnd pozwala zbierać i łączyć wymagane typy POI z jednej lub więcej sugerowanych kategorii.

Aby utworzyć niestandardowe filtry do znajdowania miejsc na mapie, wybierz odpowiednie kategorie i podkategorie. Możesz [zapisać](#save-new-custom-filters) te filtry do późniejszego wykorzystania lub [edytować](#edit-an-existing-filter) je w razie potrzeby. Alternatywnie, możesz przeglądać przefiltrowane dane bez zapisywania, dotykając przycisku *Pokaż*. Pamiętaj jednak, że jeśli nie zapiszesz filtrów, wszystkie zaznaczenia zostaną anulowane po przełączeniu wyszukiwania lub wyjściu z narzędzia wyszukiwania.

- Każda kategoria udogodnień zawiera listę dostępnych ogólnych wartości dla typów POI.
- Masz możliwość zaznaczenia lub odznaczenia ich indywidualnie, dotykając pola interesującego Cię typu.
- *Zaznacz wszystko* - Aby to zrobić, wybierz przycisk przełączania.
- Doprecyzuj listę, wykluczając niepotrzebne - Zacznij wpisywać sugerowaną nazwę w polu *Szukaj typów POI*.

#### Kategorie i ich filtry {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Zawiera 25 typów: *Działki, Atol, Gmina, Miasto, Blok miejski, Kraj, Sąd, Celnicy, Biuro dyplomatyczne, Farma, Rząd, Osada, Wyspa, Wysepka, Izolowane mieszkanie, Miejscowość, Dzielnica, Policja, Więzienie, Kwartał, Obszar mieszkalny, Przedmieście, Miasto, Ratusz, Wieś*.

2. **Boże Narodzenie**. Zawiera 5 typów filtrów:
    *Wydarzenie bożonarodzeniowe, Jarmark bożonarodzeniowy, Piramida bożonarodzeniowa, Sklep bożonarodzeniowy, Choinka*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Zawiera 16 typów: *Działki, Atol, Gmina, Miasto, Blok miejski, Kraj, Sąd, Celnicy, Biuro dyplomatyczne, Farma, Rząd, Osada, Wyspa, Wysepka, Izolowane mieszkanie, Miejscowość, Dzielnica, Policja, Więzienie, Kwartał, Obszar mieszkalny, Przedmieście, Miasto, Ratusz, Wieś*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Zawiera 14 typów filtrów.

5. **Infrastruktura awaryjna**. Zawiera 12 typów filtrów.

6. **<Translate android="true" ids="amenity_type_finance"/>**. Zawiera 12 typów filtrów.

7. **Jedzenie**. Zawiera 12 typów filtrów.

8. **Zagrożenie**. Zawiera 5 typów: *Zagrożenie lawinowe, Zagrożenie erozją, Zagrożenie powodziowe, Zagrożenie nuklearne, Śliska droga*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Zawiera 31 typów filtrów.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Zawiera 148 typów filtrów.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Zawiera 121 typów filtrów.

12. **<Translate android="true" ids="amenity_type_military"/>**. Zawiera 7 typów: *Strefa zagrożenia, Bunkier wojskowy, Baza morska wojskowa, Biuro wojskowe, Poligon wojskowy, Strefa wojskowa, Miejsce wybuchu jądrowego*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. Zawiera 50 typów filtrów.

14. **Nautyka**. Zawiera 41 typów filtrów.

15. **<Translate android="true" ids="amenity_type_office"/>**. Zawiera 39 typów filtrów.

16. **Popularne miejsca (Wikipedia)**. Zawiera 1 typ: *Wikipedia*.

17. **Dostęp prywatny**. Nie zawiera żadnych filtrów.

18. **Trasy**. Zawiera 15 typów filtrów.

19. **Usługa**. Zawiera 111 typów filtrów.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Zawiera 119 typów filtrów.

21. **Sklep**. Zawiera 156 typów filtrów.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Zawiera 103 typy filtrów.

23. **Transport**. Zawiera 97 typów filtrów.

24. **Zdefiniowane przez użytkownika**. Zawiera 1 typ: *Zdefiniowany przez użytkownika Inny kod pocztowy*.

<!--
:::note since OsmAnd 5.0 for Android
Dostępne do wyszukiwania:

- Religijne POI oparte na tagu `amenity=place_of_worship` są podzielone na miejsca specyficzne dla religii, takie jak kościoły, meczety czy synagogi.
- Drobne udogodnienia, takie jak „ławka”, „ławka młodzieżowa” (`amenity=bench`) są dostępne na liście kategorii.
:::
-->

### Zapisz nowe filtry niestandardowe {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Zapisz niestandardowe POI Android](@site/static/img/search/custom_poi_save_android.png) ![Zapisz niestandardowe POI Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zapisz niestandardowe POI iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Aby **zapisać** filtr niestandardowy, wybierz typy filtrów, a następnie:

- Dotknij przycisku *Pokaż* i wybierz przycisk *Zapisz* dla iOS lub przycisk z *ikoną wskazującą akcję zapisu* dla Androida.
- Wprowadź nazwę nowej kategorii.
- Twój filtr pojawi się na liście *zakładki Kategorie* w narzędziu Wyszukiwanie.

Inny sposób **zapisu**:

- Wybierz *[kategorię](#poi-search-by-categories) → [ikonę filtra](#types-of-filters) →* wybierz *typy* cech *→ menu z trzema kropkami → Zapisz filtr*.


### Edytuj istniejący filtr {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Usuń niestandardowe POI Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Usuń niestandardowe POI iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Z ekranu głównego:

- Dotknij przycisku *Lupy* w lewym górnym rogu ekranu urządzenia, aby otworzyć menu *Wyszukiwanie*.
- Wybierz zakładkę *Kategorie*.
- Wybierz zapisaną kategorię niestandardową, a pojawi się ekran wyników wyszukiwania.
- Dotknij ikony *Filtruj* obok *Pokaż na mapie*, aby otworzyć ekran *Filtry*.
- Dotknij *menu z trzema kropkami*.
- W rozwijanym menu wybierz **Edytuj filtr**.
- Aby zapisać niestandardowe wyszukiwanie POI po edycji:
    - Wybierz kategorie POI i typy filtrów dla nich *→* dotknij *Pokaż → menu z trzema kropkami → Zapisz jako →* wprowadź nową nazwę filtra lub *zapisz* zmiany w bieżącym.


### Usuń niestandardowy filtr POI {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Usuń niestandardowe POI Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Usuń niestandardowe POI iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Możesz usunąć tylko kategorie, które zostały utworzone za pomocą filtrów lub wyszukiwania niestandardowego.

- Przejdź do zakładki [Kategorie](#poi-search-by-categories) i wybierz wymaganą.
- W polu obok *Pokaż na mapie* dotknij ikony reprezentującej *filtr*.
- W menu *Filtry* dotknij *menu z trzema kropkami* ( &#8285; ) znajdującego się w prawym górnym rogu ekranu.
- Wybierz **Usuń filtr**.
- ***Nie można cofnąć usunięcia.***


#### Usuń niestandardowe kategorie (iOS) {#delete-custom-categories-ios}

![Usuń niestandardowe POI iOS](@site/static/img/search/custom_poi_delete_3_ios.png)

Dodatkowa opcja tylko dla aplikacji iOS to **Usuń niestandardowe kategorie**.

- Ten element znajduje się na końcu listy *zakładki Kategorie*.
- Wybierz niepotrzebne kategorie pojedynczo lub *Zaznacz wszystko*.
- Dotknij przycisku **Usuń**.


## Powiązane artykuły {#related-articles}

- [Wyszukaj wszystko](./search-all.md)
- [Wyszukaj adres](./search-address.md)
- [Historia wyszukiwania](./search-history.md)
- [Wyszukaj współrzędne](./search-coordinates.md)


> *Ostatnia aktualizacja: maj 2025*