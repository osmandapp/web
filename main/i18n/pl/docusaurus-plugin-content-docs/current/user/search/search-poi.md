---
source-hash: 9094d9848d4a4189984a09b06b25dcf3292a6305d128b1bafa1f8794438d04b3
sidebar_position: 4
title:  Wyszukiwanie POI
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

## Przegląd {#overview}

[Funkcjonalność Punktów Użyteczności (POI) w OsmAnd](https://wiki.openstreetmap.org/wiki/Points_of_interest) zapewnia dokładność, widoczność i wygodę w znajdowaniu interesujących miejsc, tras i usług w pobliżu bieżącej lokalizacji lub wybranego obszaru na mapie.  

Pasek wyszukiwania umożliwia wprowadzanie słów kluczowych związanych z interesującymi Cię miejscami. Wyszukiwanie POI prezentuje również wygodną listę posortowaną według [kategorii](#poi-search-by-categories), aby pomóc Ci szybko znaleźć to, czego szukasz, a [filtr](#save-new-custom-filters) pozwala wybrać określone cechy POI, aby wyświetlić tylko odpowiednie wyniki.  

[Wyszukiwanie niestandardowe](#customize-poi-search) rozszerza funkcjonalność wyszukiwania, umożliwiając wybór wielu kategorii i podkategorii. Możesz zapisać utworzone filtry do wykorzystania w przyszłości, co ułatwia szybkie lokalizowanie POI, które spełniają określone kryteria lub preferencje. Więcej szczegółów można znaleźć w sekcji dotyczącej zapisywania filtrów niestandardowych [tutaj](#save-new-custom-filters).  

OsmAnd zapewnia kilka sposobów dotarcia do narzędzia Wyszukiwania, w którym znajduje się sekcja **Wyszukiwanie według kategorii**.

- [Przycisk Wyszukaj](../widgets/map-buttons.md#search) jest zawsze wyświetlany na mapie, a jego dotknięcie przeniesie Cię do [ekranu głównego](#how-to-use) narzędzia, gdzie można znaleźć zakładkę *Kategorie*.
- Przejdź do głównego *Menu → Wyszukaj → zakładka Kategorie*.
- Przygotowując się do rozpoczęcia trasy, dotknij [*Nawigacja → Ustaw cel → Pole wyszukiwania → zakładka Kategorie*](../navigation/setup/route-navigation.md#set-target-point).  
- Przejdź do głównego [*Menu → Konfiguruj mapę → Warstwa POI → Wyszukaj*](../map/point-layers-on-map.md#points-of-interest-pois).


## Jak używać {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI Android](@site/static/img/search/poi_overlay_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Wyszukiwanie POI iOS](@site/static/img/search/poi_overlay_ios_new.png)

</TabItem>

</Tabs>

*Wszystkie typy POI w OsmAnd można znaleźć tutaj:* [link do github](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Wyszukiwanie Punktów Użyteczności (POI) według typu i nazwy**:
    - Umożliwia wyszukiwanie:
       - Pobliskich punktów użyteczności (POI) lub określonych kategorii POI.
       - [Tras OSM](../map/routes.md) według nazwy i numeru referencyjnego.
       - [Popularnych miejsc (Wikipedia)](../map/popular_places.md).
       - Miejsc poprzez połączenie nazwy miasta z nazwą POI lub typem (na przykład: Berlin airport, Bratislava Billa).
    - Możliwe jest filtrowanie i sortowanie wyników według kategorii, odległości lub oceny.

Ikona wyświetlona w wynikach wyszukiwania odpowiada ikonie używanej na mapie i w menu kontekstowym obiektu.

Wyniki wyszukiwania mogą zawierać dodatkowe informacje o lokalizacji, takie jak miasto, w którym znajduje się POI. Pomaga to odróżnić miejsca o tej samej nazwie podczas wyszukiwania marek lub popularnych miejsc.
    
- **Wyszukaj POI na mapie** - Pokaż na mapie:
    1. Możesz wybrać wymagane kategorie z [**listy**](../map/point-layers-on-map.md#points-of-interest-pois) w *Konfiguruj mapę → Pokaż warstwę POI...* i wyszukiwać według ikon w oczekiwanej lokalizacji.
    2. Możesz najpierw wprowadzić zapytanie wyszukiwania lub rozpocząć wyszukiwanie POI w *Menu → Wyszukaj → Kategorie*, a następnie kliknąć **Pokaż na mapie**.

- **Wyszukiwanie według marki**:
    - Wyszukiwanie obiektu biznesowego według nazwy marki (takiej jak Audi, Starbucks czy Aldi) jest bardzo podobne do wyszukiwania różnych POI według typu, główną różnicą jest to, że lista marek jest dostarczana wewnątrz mapy i może ulec zmianie podczas każdej aktualizacji. 
    - Marka jest definiowana przez tag OSM [***brand*** *nazwa*](https://wiki.openstreetmap.org/wiki/Key:brand), a OsmAnd zbiera ograniczone typy marek na mapę, z maksymalnie 1000 marek na mapę, jednak zapewnia, że lista marek jest spójna na sąsiednich mapach.
    - Wyszukiwanie według marki nie jest wrażliwe na wielkość liter. Na przykład, wpisanie `starbucks`, `Starbucks` lub `STARBUCKS` zwróci te same wyniki.
    - Tylko marki uwzględnione w indeksie danych mapy pojawią się w wynikach wyszukiwania.

![Wyszukiwanie POI Android](@site/static/img/search/brand_search_andr.png) ![Wyszukiwanie POI Android](@site/static/img/search/brand_search_2_andr.png)


:::note
Aby wykonać niektóre z tych zadań (zlokalizować adresy, POI), będziesz potrzebować pliku mapy wektorowej offline. Początkowo wyszukiwanie opiera się na danych znajdujących się na mapie w widocznym obszarze ekranu urządzenia. Jeśli nic nie znajdziesz, OsmAnd proponuje zwiększyć promień wyszukiwania.
:::  

### Wskazówki dotyczące wyszukiwania {#search-tips}

Wyszukiwanie POI w OsmAnd obsługuje różne formaty wprowadzania i kombinacje nazw miejsc, marek oraz lokalizacji. Jeśli nie możesz znaleźć oczekiwanego wyniku, spróbuj następujących podejść.

**1. Wyszukiwanie w wybranym mieście**

Jeśli wiele miejsc ma tę samą nazwę, może być łatwiej najpierw wyszukać miasto i otworzyć je na mapie, a następnie wyszukać miejsce w tym obszarze.

Przykładowy przebieg:  
- Wyszukaj **Vienna**.
- Otwórz miasto na mapie.
- Wyszukaj **McDonald's**.

To ogranicza wyniki do wybranego obszaru i pobliskich obiektów.

**2. Używaj bardziej szczegółowych zapytań wyszukiwania**

Bardzo krótkie zapytania lub skróty mogą zwracać wiele wyników, ponieważ pasują do wielu nazw obiektów.

Przykład:  
`St.`  
→ wiele wyników

`St. Volodymyr's Cathedral`  
→ konkretny obiekt

**3. Wyszukiwanie według alternatywnych nazw**

Niektóre miejsca w OpenStreetMap mają dodatkowe tagi nazw, takie jak:  
- `alt_name`
- `short_name`

Wyszukiwanie w OsmAnd uwzględnia te nazwy, więc wyszukiwanie różnych wariantów nazwy może zwrócić ten sam obiekt.

**4. Miejsce może pojawić się w wielu wynikach wyszukiwania**

Niektóre POI mają wiele atrybutów lub kategorii.

Przykład:  
`Sport = soccer; beachvolleyball`

To miejsce może pojawić się podczas wyszukiwania:  
- soccer
- beach volleyball
- sports centre


## Wyszukiwanie POI według kategorii {#poi-search-by-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_categoties_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

Narzędzie **Wyszukiwania według kategorii** pozwala szybko znaleźć obiekty, miejsca i trasy sklasyfikowane w różnych kategoriach. 

Kategorie POI w OsmAnd opierają się na tagach OpenStreetMap. Niektóre miejsca mogą pojawić się pod bardziej ogólną kategorią, jeśli bardziej szczegółowy typ nie jest dostępny w danych mapy (na przykład, kościół może pojawić się pod `Place of worship`).

Każda kategoria ma unikalny zestaw cech, a to narzędzie posiada filtry, które pozwalają zawęzić wyniki wyszukiwania poprzez wybór różnych wartości dla dodatkowych cech.

Jak to działa:

- *Wybór kategorii* - Wybierasz interesującą Cię kategorię, taką jak restauracje, hotele, sklepy, trasy OSM, popularne miejsca z Wikipedii i inne, z sugerowanej listy kategorii.
- *Filtry cech* - Po wybraniu kategorii aplikacja pokazuje dodatkowe cechy, które można wykorzystać do zawężenia wyszukiwania. Na przykład dla kategorii Restauracje można wybrać filtry takie jak rodzaj kuchni (włoska, chińska itp.), przedział cenowy, ocena i dostępność parkingu.
- *Stosowanie filtrów* - Wybierasz wymagane wartości w filtrach, a następnie aplikacja stosuje te filtry do wyników wyszukiwania, aby pokazać tylko te właściwości, które pasują do określonych cech.
- *Wyświetlanie wyników* - Po zastosowaniu filtrów OsmAnd wyświetla listę z krótkimi informacjami pasującymi do ustawionej kategorii i cech.

### Typy filtrów {#types-of-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie POI iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

Dzięki funkcji **Filtruj** możesz wybrać niezbędne cechy i w rezultacie otrzymać listę zawierającą tylko odpowiednie obiekty. Aby użyć filtra:

- Wybierz interesującą Cię kategorię z listy kategorii.
- Na ekranie, który się otworzy, dotknij ikony wyświetlającej filtr. Znajduje się ona pod polem wprowadzania, obok *Pokaż na mapie*.
- W filtrze wybierz typ cech.

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_filter_icon_andr.png)  

Filtr może składać się z dość dużej liczby pozycji, których obecność zależy od wybranej kategorii. Każda kategoria ma szereg specyficznych dla niej filtrów, uporządkowanych w folderach według typu. W sumie istnieją *21 domyślne kategorie*. Są one wymienione tutaj:

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Zakwaterowanie](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) obejmuje obiekty zapewniające tymczasowe zakwaterowanie, takie jak hotele, motele, hostele, pensjonaty i kempingi. Miejsca te zapewniają udogodnienia i usługi zapewniające komfortowy pobyt podczas podróży.  
        Obejmuje *9* typów filtrów: **Lodówka** (ma *2* wartości), **Ogrzewanie** (ma *7* wartości), **Typ dostępu do internetu** (ma *3* wartości), **Materac** (ma *2* wartości), **Typ płatności** (ponad *10* wartości), **Prysznic** (ma *1* wartość), **Palenie** (ma *6* wartości), **Ocena w gwiazdkach** (ma *10* wartości), **Dostępność dla wózków inwalidzkich** (ma *4* wartości), Otwarte teraz / Otwarte 24/7.

 2. **Kawiarnia i restauracja**. [Kawiarnia](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) i [restauracje](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) reprezentują miejsca świadczące usługi gastronomiczne.  
        Obejmuje *16* typów filtrów: **Przewijak** (ma *3* wartości), **Kawa** (ma *2* wartości), **Kuchnia** (ponad *10* wartości), **Dostawa** (ma *1* wartość), **Dieta** (ma *8* wartości), **Danie** (ponad *10* wartości), **Napełnianie wody pitnej** (ma *1* wartość), **Drive-in** (ma *1* wartość), **Typ dostępu do internetu** (ma *3* wartości), **Minibrowar** (ma *1* wartość), **Produkty organiczne** (ma *2* wartości), **Miejsca na zewnątrz** (ma *1* wartość), **Typ płatności** (ponad *10* wartości), **Palenie** (ma *6* wartości), **Na wynos** (ma *1* wartość), **Dostępność dla wózków inwalidzkich** (ma *4* wartości), Otwarte teraz / Otwarte 24/7.

 3. **Stacja ładowania**. [Stacja ładowania](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) to obiekt infrastruktury, w którym właściciele pojazdów elektrycznych mogą ładować swoje samochody, motocykle lub inne pojazdy elektryczne. Punkty te zapewniają ładowarki i odpowiednie złącza do dostarczania energii do akumulatorów pojazdów.
        Obejmuje *35* typów filtrów: **Dostęp dla rowerów** (ma *1* wartość), **Dostęp dla autobusów** (ma *1* wartość), **Dostęp dla pojazdów ciężarowych** (ma *5* wartości), **Dostęp dla samochodów** (ma *1* wartość), **Dostęp dla skuterów** (ma *1* wartość), **Autoryzacja przez aplikację** (ma *1* wartość), **Autoryzacja kartą chipową** (ma *1* wartość), **Autoryzacja zbliżeniowa** (ma *1* wartość), **Autoryzacja kluczem** (ma *1* wartość), **Wymagana autoryzacja** (ma *1* wartość), **Autoryzacja przez połączenie telefoniczne** (ma *1* wartość) **Autoryzacja przez SMS** (ma *1* wartość), **Opłata** (ma *2* wartości), **Typ dostępu do internetu** (ma *3* wartości), **Typ dostępu do internetu** (ma *3* wartości), **Dostępność dla wózków inwalidzkich** (ma *4* wartości), Otwarte teraz / Otwarte 24/7 i inne.  

 4. **Sklep ogólnospożywczy i supermarket**. [Sklep ogólnospożywczy](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) i [supermarket](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) reprezentują obiekty handlu detalicznego.
        Obejmuje *13* typów filtrów: **Zakup hurtowy** (ma *2* wartości), **Wypłata gotówki** (ma *5* wartości), **Przewijak** (ma *3* wartości), **Kawa** (ma *2* wartości), **Dostawa** (ma *1* wartość), **Dieta** (ma *8* wartości), **Lody** (ma *1* wartość), **Produkty organiczne** (ma *2* wartości), **Typ płatności** (ponad *10* wartości), **Filtr rzeczy używanych** (ma *2* wartości), **Kasa samoobsługowa** (ma *2* wartości), **Dostępność dla wózków inwalidzkich** (ma *4* wartości), Otwarte teraz / Otwarte 24/7.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Służby ratunkowe](https://wiki.openstreetmap.org/wiki/Key:emergency) obejmują obiekty i lokalizacje związane z usługami ratunkowymi, takie jak szpitale, posterunki policji, remizy strażackie i ośrodki pierwszej pomocy medycznej.  
        Nie zawiera żadnych filtrów.

 6. **Stacja paliw**. [Stacja paliw](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), znana również jako stacja benzynowa. Jest to obiekt handlu detalicznego, w którym można tankować pojazdy silnikowe.  
        Obejmuje *13* typów filtrów: **Myjnia samochodowa** (ma *2* wartości), **Wypłata gotówki** (ma *5* wartości), **Sprężone powietrze** (ma *1* wartość), **Rodzaj paliwa (lotnicze)** (ponad *20* wartości), **Karty paliwowe** (ma *5* wartości), **Typ płatności** (ponad *20* wartości), **Kasa samoobsługowa** (ma *2* wartość), **Dostęp dla skuterów śnieżnych** (ma *3* wartości), **Toaleta** (ponad *1* wartość), **Odkurzacz** (ma *1* wartość), **Automatyczny dystrybutor paliwa** (ma *1* wartość), **Dostępność dla wózków inwalidzkich** (ma *4* wartości), Otwarte teraz / Otwarte 24/7.  

 7. **Finanse**. [Finanse](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) używane dla biur firm z sektora finansowego.  
        Obejmuje *5* typów filtrów.  

 8. **Żywność**. [Żywność](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) obejmuje wszystkie miejsca dostarczające żywność i napoje.  
        Obejmuje *24* typy filtrów.

 9. **Opieka zdrowotna**. [Opieka zdrowotna](https://wiki.openstreetmap.org/wiki/Healthcare) obejmuje usługi świadczone przez różnych specjalistów w różnych typach placówek.  
        Obejmuje *13* typów filtrów.

 10. **Rozrywka**. [Rozrywka](https://wiki.openstreetmap.org/wiki/Category:Leisure) obejmuje różne rodzaje miejsc i obiektów rozrywkowych.  
        Obejmuje *15* typów filtrów.

 11. **Żegluga**. Obejmuje POI związane z typami żeglarskimi.  
        Nie zawiera żadnych filtrów.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Obejmuje POI, które są blisko Ciebie.  
        Obejmuje *216* typów filtrów.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Parking](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) obejmuje obiekty używane przez publiczność, klientów lub innych upoważnionych użytkowników do parkowania pojazdów, takich jak samochody osobowe i ciężarowe, powszechnie znane jako parking.  
        Obejmuje *34* typy filtrów.

 14. **Transport osobisty**. Wszystkie [typy pojazdów](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) mogą być w Twoim posiadaniu.  
        Obejmuje *38* typów filtrów.

 15. **Popularne miejsca (Wikipedia)**. Aby wyszukiwać w tej kategorii, musisz pobrać [mapę Wikipedii](../plugins/wikipedia.md#overview) interesującego Cię regionu.  
        Nie zawiera żadnych filtrów.

 16. **<Translate android="true" ids="poi_filter_public_transport"/>**. Jest to system transportu przeznaczony do przewozu osób w celach publicznych, dostępny dla wszystkich mieszkańców i gości miasta lub regionu.  
        Obejmuje *9* typów filtrów.

 17. **Trasy**. Obejmuje [Trasy OSM](../map/routes.md) dla różnych rodzajów aktywności.  
        Obejmuje *14* typów filtrów: **Punkt kontrolny**, **Węzeł sieci rowerowej**, **Węzeł sieci pieszej**, **Sieć tras (rowerowych)**, **Sieć tras (pieszych)**, **Kategoria punktu trasy**, **Sporty lotnicze**, **Kolarstwo**, **Jazda samochodem**, **Pieszo**, **Motocyklem**, **Inne trasy**, **Sporty wodne**, **Sporty zimowe**.

 18. **Zwiedzanie**. Jest to działalność, w której ludzie odwiedzają interesujące miejsca, aby zapoznać się z nimi i cieszyć się ich pięknem, historią lub znaczeniem.  
        Obejmuje *8* typów filtrów.

 19. **Sport**. Obejmuje obszary do uprawiania sportu.  
        Obejmuje *11* typów filtrów.

 20. **Sklep**. [Sklep](https://wiki.openstreetmap.org/wiki/Key:shop) odnosi się do różnych placówek i firm, które oferują różne towary lub usługi na sprzedaż, takie jak sklepy spożywcze, odzieżowe, elektroniczne i inne.  
        Obejmuje *36* typów filtrów.

 21. **Turystyka**. [Turystyka](https://wiki.openstreetmap.org/wiki/Key:tourism) obejmuje miejsca i rzeczy o szczególnym znaczeniu dla turystów, w tym miejsca do zobaczenia, miejsca do pobytu oraz rzeczy i miejsca zapewniające informacje i wsparcie dla turystów.  
        Obejmuje *32* typy filtrów.


### Zmień kolejność kategorii {#rearrange-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie POI iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

Funkcja Zmień kolejność kategorii pozwala na wyświetlenie tylko potrzebnych kategorii i ułożenie ich w kolejności, która jest dla Ciebie najwygodniejsza.

Opis i sposób użycia:

- Początkowo *lista jest sortowana alfabetycznie.* Utworzone kategorie są również dodawane w porządku alfabetycznym.
- Zmiany na liście kategorii są dokonywane dla każdego profilu osobno.
- Przesuwaj kategorie, przeciągając i upuszczając je na właściwą pozycję na liście.
- *Aby ukryć* niepotrzebne kategorie, dotknij **ikony minusa**.
- **Dostępne**. Wcześniej *Ukryte* kategorie można przywrócić na wyświetlaną listę, dotykając **ikony plusa**.
- Użyj przycisku **Resetuj do domyślnych**, aby przywrócić listę do stanu domyślnego.
- Kategorie utworzone za pomocą [Wyszukiwania niestandardowego](#customize-poi-search) lub [Filtrów](#save-new-custom-filters) można usunąć za pomocą **ikony Usuń**.  

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)  


### Wyszukiwanie online {#online-search}

<InfoAndroidOnly />

![Wyszukiwanie POI Android](@site/static/img/search/search_online_2_andr_new.png)  

**Wyszukiwanie online** pozwala na znajdowanie lokalizacji, adresów i użytecznych miejsc w czasie rzeczywistym. OsmAnd używa [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), geokodera online opracowanego przez OpenStreetMap, który tłumaczy zapytania tekstowe użytkowników na współrzędne geograficzne i z powrotem.  

Wyszukiwanie online obejmuje następujące funkcje:

1. **Wyszukiwanie według lokalizacji** - Możesz wpisać nazwę miasta, ulicy, dzielnicy lub innej lokalizacji, a OsmAnd dostarczy wyniki pasujące do zapytania.
2. **Geokodowanie** - Wyszukiwanie online konwertuje Twoje zapytania tekstowe na współrzędne geograficzne, umożliwiając precyzyjną lokalizację.
3. **Odwrotne geokodowanie** - Możesz wprowadzić współrzędne geograficzne, a Wyszukiwanie zwróci odpowiednią lokalizację jako nazwę miasta, ulicy lub miejsca na mapie.
4. **Wyszukiwanie według Użytecznych Miejsc** - Pozwala na wyszukiwanie różnych punktów według nazwy lub kategorii.

Korzystanie z wyszukiwania online:

- Wyszukiwanie online zapewnia, że dane są aktualne i dostępne są aktualizacje, ponieważ usługa jest stale aktualizowana i korzysta z otwartych źródeł danych.
- Zapewnia szeroki zasięg miejsc i obiektów, umożliwiając znajdowanie interesujących miejsc w różnych regionach świata.
- Wyszukiwania online odbywają się w czasie rzeczywistym, zapewniając szybki dostęp do wyników wyszukiwania.
- Przydatne w miastach i na autostradach z dobrym zasięgiem internetu.
- Wyszukiwanie online jest wygodne w użyciu, jeśli nie ma map regionu i nie można ich pobrać.
- *Wymaga stałego i stabilnego połączenia z internetem.*  

![Wyszukiwanie POI Android](@site/static/img/search/search_poi_online_increase2_andr.png)  

Aby poprawić wyniki, przed użyciem narzędzia Wyszukaj, powiększ mapę, aby zbliżyć się do miejsca, w którym chcesz znaleźć określoną lokalizację. A podczas wyszukiwania możesz **zwiększyć promień wyszukiwania**, aby znaleźć miejsca, które są dalej od Twojej lokalizacji. Podczas wyszukiwania offline, jeśli wymagane wyniki nie są dostępne, OsmAnd sugeruje użycie wyszukiwania online.  

Informacje na temat routingu online można znaleźć w artykule [Routing online](../navigation/routing/online-routing.md).



## Dostosuj wyszukiwanie POI {#customize-poi-search}

Dostosowywanie wyszukiwania POI to zaawansowana funkcja wyszukiwania, która pozwala na znajdowanie POI z różnych kategorii i łączenie ich w celu uzyskania bardziej dokładnego i spersonalizowanego wyszukiwania. W przeciwieństwie do standardowego wyszukiwania POI, które jest ograniczone do kilku predefiniowanych kategorii, niestandardowe wyszukiwanie POI zapewnia elastyczność wyboru i łączenia różnych typów POI.  

Na przykład, możesz wyszukiwać jednocześnie restauracje i apteki, aby znaleźć najbliższe miejsce do zjedzenia posiłku, a następnie wziąć leki. Lub wyszukać najbliższą stację benzynową i serwis samochodowy, gdy masz problem z samochodem.  

Ta funkcjonalność jest szczególnie przydatna w różnych przypadkach:  

- *Podróże*. Podczas podróży, używając wyszukiwania niestandardowego, można szybko znaleźć różne interesujące miejsca i połączyć je, aby stworzyć optymalną trasę.
- *Sytuacje awaryjne*. Jeśli musisz szybko znaleźć kilka rodzajów usług, możesz użyć niestandardowego wyszukiwania POI, aby uzyskać wszystkie potrzebne informacje.
- *Wyszukiwanie pobliskich usług*. Wyszukiwanie niestandardowe pozwala na łączenie różnych kategorii POI w celu łatwego wyszukiwania, jeśli musisz znaleźć kilka rodzajów usług w określonej okolicy lub na określonym odcinku trasy.

### Niestandardowy filtr POI {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Niestandardowe wyszukiwanie Android](@site/static/img/search/search_custom_filter_andr.png)   ![Niestandardowe wyszukiwanie Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Custom POI iOS](@site/static/img/search/custom_poi_ios.png)   ![Custom POI types iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Niestandardowe POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png)   ![Niestandardowe typy POI iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>  

*Niestandardowy filtr POI* obejmuje zestawy kategorii udogodnień składające się z odpowiednich wartości. OsmAnd pozwala zbierać i łączyć wymagane typy POI z jednej lub więcej sugerowanych kategorii.  

Aby utworzyć niestandardowe filtry do znajdowania miejsc na mapie, wybierz odpowiednie kategorie i podkategorie zainteresowań. Możesz [zapisać](#save-new-custom-filters) te filtry do późniejszego wykorzystania lub [edytować](#edit-an-existing-filter) je w razie potrzeby. Alternatywnie, możesz wyświetlić przefiltrowane dane bez zapisywania, dotykając przycisku *Pokaż*. Pamiętaj jednak, że jeśli nie zapiszesz filtrów, wszystkie wybory zostaną anulowane po przełączeniu wyszukiwania lub wyjściu z narzędzia wyszukiwania.

- Każda kategoria udogodnień zawiera listę dostępnych ogólnych wartości dla typów POI.
- Masz możliwość wybierania lub odznaczania ich pojedynczo, dotykając pola interesującego Cię typu.
- *Zaznacz wszystko* - Aby to zrobić, wybierz przycisk przełącznika.
- Zawęź listę, wykluczając niepotrzebne - Zacznij wpisywać sugerowaną nazwę w polu *Wyszukaj typy POI*.  

### Kategorie i ich filtry {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Obejmuje 25 typów: *Działki, Atol, Dzielnica, Miasto, Kwartał miejski, Kraj, Sąd, Urząd celny, Placówka dyplomatyczna, Gospodarstwo, Rząd, Przysiółek, Wyspa, Wysepka, Odosobnione domostwo, Miejscowość, Sąsiedztwo, Policja, Więzienie, Dzielnica, Obszar mieszkalny, Przedmieście, Miasteczko, Ratusz, Wieś*.  

2. **Boże Narodzenie**. Obejmuje 5 typów filtrów:  
    *Wydarzenie bożonarodzeniowe, Jarmark bożonarodzeniowy, Piramida bożonarodzeniowa, Sklep bożonarodzeniowy, Choinka*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Obejmuje 16 typów: *Działki, Atol, Dzielnica, Miasto, Kwartał miejski, Kraj, Sąd, Urząd celny, Placówka dyplomatyczna, Gospodarstwo, Rząd, Przysiółek, Wyspa, Wysepka, Odosobnione domostwo, Miejscowość, Sąsiedztwo, Policja, Więzienie, Dzielnica, Obszar mieszkalny, Przedmieście, Miasteczko, Ratusz, Wieś*.  

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Obejmuje 26 typów filtrów.  

5. **<Translate android="true" ids="amenity_type_finance"/>**. Obejmuje 12 typów filtrów.

6. **Żywność**. Obejmuje 12 typów filtrów.  

7. **Zagrożenie**. Obejmuje 5 typów: *Zagrożenie lawinowe, Zagrożenie erozją, Zagrożenie powodziowe, Zagrożenie jądrowe, Śliska droga*. Kategoria Zagrożenie obejmuje zarówno POI z tagami hazard=*, jak i segmenty dróg lub ścieżek (ways) oznaczone tym samym tagiem, jeśli są eksportowane jako wyszukiwalne obiekty. Dla wizualnego przeglądu wszystkich ikon zagrożeń używanych na mapie, zobacz sekcję [Zagrożenie](https://osmand.net/docs/user/map-legend/osmand/#hazard).

8. **<Translate android="true" ids="amenity_type_healthcare"/>**. Obejmuje 31 typów filtrów.

9. **<Translate android="true" ids="amenity_type_leisure"/>**. Obejmuje 148 typów filtrów.  

10. **<Translate android="true" ids="amenity_type_man_made"/>**. Obejmuje 121 typów filtrów.  

11. **<Translate android="true" ids="amenity_type_military"/>**. Obejmuje 7 typów: *Strefa niebezpieczna, Bunkier wojskowy, Baza marynarki wojennej, Biuro wojskowe, Poligon wojskowy, Strefa wojskowa, Miejsce wybuchu jądrowego*.  

12. **<Translate android="true" ids="amenity_type_natural"/>**. Obejmuje 50 typów filtrów.  

13. **Żegluga**. Obejmuje 41 typów filtrów.  

14. **<Translate android="true" ids="amenity_type_office"/>**. Obejmuje 39 typów filtrów.

15. **Popularne miejsca (Wikipedia)**. Obejmuje 1 typ: *Wikipedia*.

16. **Trasy**. Obejmuje 15 typów filtrów.  

17. **Usługi**. Obejmuje 111 typów filtrów.

18. **<Translate android="true" ids="amenity_type_sport"/>**. Obejmuje 119 typów filtrów.  

19. **Sklep**. Obejmuje 156 typów filtrów.  

20. **<Translate android="true" ids="amenity_type_tourism"/>**. Obejmuje 103 typy filtrów.

21. **Transport**. Obejmuje 97 typów filtrów. 

22. **Podróże**. Obejmuje 2 typy filtrów.

23. **Zdefiniowane przez użytkownika**. Obejmuje 1 typ: *Zdefiniowany przez użytkownika Inny kod pocztowy*.

### Zapisz nowe filtry niestandardowe {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Zapisywanie niestandardowego POI Android](@site/static/img/search/custom_poi_save_android.png) ![Zapisywanie niestandardowego POI Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zapisywanie niestandardowego POI iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Aby **zapisać** filtr niestandardowy, wybierz typy filtrów, a następnie:

- Dotknij przycisku *Pokaż* i wybierz przycisk *Zapisz* dla iOS lub przycisk z *ikoną oznaczającą akcję zapisu* dla Androida.
- Wprowadź nazwę dla nowej kategorii.
- Twój filtr pojawi się na liście w *zakładce Kategorie* w narzędziu Wyszukaj.  

Inny sposób **zapisu**:

- Wybierz *[kategorię](#poi-search-by-categories) → [ikonę filtra](#types-of-filters) →* wybierz *typy* cech *→ menu z trzema kropkami → Zapisz filtr*.


### Edytuj istniejący filtr {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Usuwanie niestandardowego POI Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Usuwanie niestandardowego POI iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Z ekranu głównego:

- Dotknij przycisku *Lupy* w lewym górnym rogu ekranu urządzenia, aby otworzyć menu *Wyszukaj*.
- Wybierz zakładkę *Kategorie*.
- Wybierz zapisaną kategorię niestandardową, a pojawi się ekran wyników wyszukiwania.
- Dotknij ikony *Filtruj* obok *Pokaż na mapie*, aby otworzyć ekran *Filtry*.
- Dotknij *menu z trzema kropkami*.
- W menu rozwijanym wybierz **Edytuj filtr**.
- Aby zapisać niestandardowe wyszukiwanie POI po edycji:  
    - Wybierz kategorie POI i typy filtrów dla nich *→* dotknij *Pokaż → menu z trzema kropkami → Zapisz jako →* wprowadź nową nazwę filtra lub *zapisz* zmiany w bieżącym.


### Usuń niestandardowy filtr POI {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Usuwanie niestandardowego POI Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Usuwanie niestandardowego POI iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Można usuwać tylko kategorie, które zostały utworzone za pomocą filtrów lub wyszukiwania niestandardowego.

- Przejdź do zakładki [Kategorie](#poi-search-by-categories) i wybierz wymaganą.
- W polu obok *Pokaż na mapie* dotknij ikony reprezentującej *filtr*.
- W menu *Filtry* dotknij *menu z trzema kropkami* ( &#8285; ) znajdującego się w prawym górnym rogu ekranu.
- Wybierz **Usuń filtr**.
- ***Nie można cofnąć usunięcia.***


### Usuń niestandardowe kategorie (iOS) {#delete-custom-categories-ios}

![Usuwanie niestandardowego POI iOS](@site/static/img/search/custom_poi_delete_3_ios.png)  

Dodatkową opcją tylko dla aplikacji na iOS jest **Usuń niestandardowe kategorie**.

- Ta pozycja znajduje się na końcu listy w zakładce *Kategorie*.
- Wybierz niepotrzebne kategorie pojedynczo lub *Zaznacz wszystko*.
- Dotknij przycisku **Usuń**.  


## Powiązane artykuły {#related-articles}

- [Wyszukaj wszystko](./search-all.md)
- [Wyszukaj adres](./search-address.md)
- [Historia wyszukiwania](./search-history.md)
- [Wyszukaj współrzędne](./search-coordinates.md)