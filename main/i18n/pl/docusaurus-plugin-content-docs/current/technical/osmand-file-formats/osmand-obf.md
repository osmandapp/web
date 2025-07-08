---
source-hash: d5b7054e046a16fa52c2baf86bbe3278c548299ab710161c6f4e85a0c2933ff7
sidebar_position: 7
---

# Mapy binarne OsmAnd - .obf {#osmand-binary-maps---obf}

## Wprowadzenie {#introduction}
Mowa o *.travel.obf, *.wiki.obf, *.roads.obf, ..

Wiele pytań dotyczy zawartości i problemów z danymi map w aplikacji. Ten temat ujawnia pewne techniczne szczegóły wewnętrznego formatu danych i przetwarzania danych. Może to być interesujące dla osób niebędących programistami, które znają strukturę danych OSM.

Dane map offline OsmAnd są zawarte w plikach „obf”. Pliki „obf” mają złożoną strukturę i mogą składać się z wielu części. Zdecydowanie zaleca się, aby rozmiar plików nie przekraczał 2 GB. Obecnie pliki obf mogą składać się z wielu części, w tym wielu części POI, wielu części danych routingu, wielu części mapy, wielu części transportu i wielu części danych adresowych. Lista ta może zostać rozszerzona w przyszłości. Aby połączyć, podzielić lub usunąć niektóre części z pliku obf, użyj narzędzia konsolowego „binary_inspector” dostarczonego z OsmAndMapCreator.
* Część POI, transport
* Część mapy
* Część adresu

> P: W jaki sposób mapcreator generuje listę wszystkich miejsc, które pojawią się później w wyszukiwaniu adresów offline OsmAnd? Jakie obiekty są szczegółowo wykorzystywane do tego celu? Które węzły z tagiem miejsca są uwzględniane, a które wykluczane?
>
> O: Wszystkie miejsca widoczne w OsmAnd jako miasta są pobierane z węzłów, które mają tag „place” [https://wiki.openstreetmap.org/wiki/Place](https://wiki.openstreetmap.org/wiki/Place "https://wiki.openstreetmap.org/wiki/Place"). Obecnie używane są: miasto, miasteczko, przedmieście, wieś, przysiółek.
>
> P: W jaki sposób mapcreator obsługuje poligon obszaru, który jest podany za pomocą relacji z boundary=administrative? Jak powiązać miejsce podane jako węzeł z jego granicą, gdy jest ono obecne w danych OSM?
>
> O: Mówiąc prosto: obecnie działa to według nazwy. Mapcreator próbuje odwiedzić wszystkie granice i tworzy zamkniętą (!) granicę z relacji lub z oddzielnych dróg i kojarzy ją tylko z jedną nazwą. Następnie próbuje dopasować *miejsce* do *nazwy granicy* za pomocą algorytmu *zawiera*. Istnieje również dodatkowe sprawdzenie, czy ta granica zawiera to miejsce. Jeśli istnieje wiele granic o różnym poziomie administracyjnym z tą samą nazwą (zawierających się nawzajem, np. dzielnica/miasto/region o tej samej nazwie), zostanie wybrany najwyższy poziom administracyjny z dokładnym dopasowaniem. TODO Więcej szczegółów powinno być tutaj (o dzielnicach miasta ...) ...
>
> P: Gdzie jest dokumentacja opisująca, jaki poziom administracyjny jest odpowiedni do zbudowania powiązania z określonym węzłem miejsca? Które kraje preferują jaki poziom administracyjny?
>
> O: Obecnie powiązanie między relacją admin_level a admin_centre nie jest używane. Ponieważ tylko kilka relacji dostarcza tych informacji.
>
> P: Skąd MapCreator wie, która ulica należy do jakiego miejsca? Czy są różne przypadki, gdy podany jest poligon graniczny, a gdy go nie ma?
>
> O: Istnieje wiele strategii sprawdzania i są one priorytetyzowane w następującej kolejności:
> - Najważniejsze są miejsca i ich granice. Aby algorytm zarządzania ulicami działał poprawnie, dopasowanie miejsca do granic powinno być poprawne. Jeśli ulica należy do wielu granic, zostanie zarejestrowana we wszystkich odpowiednich miejscach.
> - tag is_in (jest przestarzały). Więc jeśli ulica ma tag is_in, zostanie on przeanalizowany i podzielony przecinkami, a ulica zostanie przypisana do wszystkich odpowiednich miast (przez dokładne dopasowanie nazwy). (DO SPRAWDZENIA: podstawowe sprawdzenie, czy ulica znajduje się w promieniu miasta?)
> - Jeśli ulica nie należy do żadnej granicy (nieprawidłowo zamknięte granice mogą być tutaj problemem), próbuje znaleźć najbliższe/największe miasto i zarejestrować ulicę w tym mieście (czasami rejestruje w mieście w odległości 1 km i pomija najbliższy przysiółek w odległości zaledwie 100 m).
>
> Ostatnia część jest bardzo niedokładna. Dlatego wiele ulic jest przypisywanych do sąsiedniego miasta.
>
> W preferencjach MapCreatora masz pięć dodatkowych ustawień dla sufiksów ulic, powiększenia, gładkości i renderowania... jakie są szczegółowe efekty, które można osiągnąć za pomocą każdego z nich? Czy te ustawienia są faktycznie używane?
>
> Narzędzia
>
> -   OsmAndMapCreator może wyświetlić, które ulice są przypisane do jakiego miasta (menu kontekstowe -> Pokaż adres). Lokalne pliki obf powinny być obecne i skonfigurowane w Ustawieniach.
> -   Narzędzie Binary Inspector może wyświetlić listę ulic dla każdego miasta. Uruchom narzędzie bez parametrów, aby zobaczyć możliwe parametry.
> -   Obecnie wszystkie pliki indeksowe zawierają gen.log. Przeglądając plik dziennika, można znaleźć błędy w procesie tworzenia mapy, co może dać odpowiedź, dlaczego niektóre ulice nie znajdują się we właściwym miejscu w indeksie adresowym.
>
> Część adresowa - przebieg pracy
>
> Istnieją następujące relacje:
>
> miasto -> 0..1 granica
>
> granica -> 0..** miasto (używane do definiowania przedmieść miasta)
>
> iteruj wszystkie węzły OSM i rejestruj jako miasta, jeśli obecny jest tag = PLACE:
>
> -   ekstrahuj miasta (MIASTO, MIEJSCOWOŚĆ).
> -   ekstrahuj wioski (wszystko inne).
>
> iteruj wszystkie RELACJE i DROGI z typem=granica i rejestruj wszystkie granice:
>
> -   granica to tzw. Encja (droga lub relacja) z tagiem 'boundary=administrative' lub z tagiem 'place=...'.
> -   granica powinna mieć admin_level > 4 lub nie mieć admin_level.
> -   granica nie zawsze jest powiązana z miastem (lub stanem, ...).
> -   granica może mieć 'admin_center', 'label' wskazujące na węzeł miasta.
> -   granica dokładnie pasuje nazwą do węzła miasta, a węzeł miasta znajduje się w granicach.
> -   granica pasuje początkiem, końcem lub podciągiem nazwy do węzła miasta, a węzeł miasta znajduje się w granicach.
>
> Wiele granic może być powiązanych z jednym miastem. Oto kolejność, w jakiej najważniejsza granica jest pobierana i powiązana z miastem:
>
> -   Granica jest dokładnie dopasowana nazwą i ma tag miejsca.
> -   Granica jest dokładnie dopasowana nazwą i ma admin_level 8 > 7 > 6 > 9 > 10 > 5... lub nic.
> -   Granica ma pasujące admin_id.
> -   Wszystkie inne przypadki, w tym sortowanie admin_level.
>
> jeśli miasto nie ma przypisanej granicy, to wszystkie granice, które nie mają centrów miast i zawierają to miasto, zostaną sprawdzone, a granica z admin_level >=7 zostanie przypisana.
>
> dla każdej granicy, utwórz listę miast, które się w niej znajdują.
>
> iteruj wszystkie RELACJE i znajdź adresy ([Postal_Addresses](https://wiki.openstreetmap.org/wiki/Relations/Proposed/Postal_Addresses)):
>
> relacja z tagiem typu "address" i jest typu "house" lub "a6" address_type.
>
> szukaj powiązanej relacji ulicy i członków domu.
>
> spróbuj znaleźć miasto dla ulicy i miasto dla adresu domu.
>
> wyszukaj miasta (musieliśmy je już znaleźć w poprzednich krokach!).
>
> jeśli mamy miasto i ulicę, zarejestruj to w bazie danych:
>
> dla rejestracji ulicy, zobacz: zarejestruj ulicę dla miasta
>
> jeśli ulica jest zarejestrowana, a my przetwarzamy ulicę:
>
> iteruj po wszystkich członkach relacji:
>
> -   znajdź ulicę -> zapisz węzły ulicy do bazy danych
> -   znajdź dom -> zapisz dom do ulicy
>
> jeśli ulica jest zarejestrowana, a my przetwarzamy dom:
>
> -   znajdź numer domu
> -   znajdź granicę domu: jeśli znaleziono, zapisz: budynek dla ulicy
>
> zarejestruj ulicę (ulica, lokalizacja ulicy (los), miasta):
>
> **Uwaga:** możemy zarejestrować ulicę w wielu miastach = oznacza to, że ulica może znajdować się w zagnieżdżonych obszarach, na przedmieściach, w mieście, przysiółku itp. Dla każdego obszaru chcemy zarejestrować ulicę, w której się znajduje.
>
> dla każdego miasta:
>
> znajdź istniejącą rejestrację ulicy w mieście:
>
> jeśli ulica istnieje:
>
> -   jeśli część miasta jest nieznana -> zaktualizuj istniejącą część miasta ulicy
> -   spróbuj znaleźć część miasta dla naszej ulicy i ponownie wyszukaj ulicę
>
> jeśli ulica nie istnieje: (może się zmienić po wyszukiwaniu)
>
> -   zarejestruj ulicę dla miasta, części miasta, lokalizacji i nazwy ulicy
>
> znajdź lub zarejestruj ulicę
>
> -   znajdź bliskie miasta do ulicy
> -   jeśli ulica znajduje się w granicach miasta, dodaj miasto do wyszukiwania
> -   jeśli nie znaleziono miasta za pomocą granicy, znajdź najbliższe miasto dla ulicy
> -   zarejestruj ulicę: dla znalezionych miast
>
> iteruj wszystkie WĘZŁY, następnie DROGI, następnie RELACJE (iteruj główną encję)
>
> znajdź drogi - interpolacje:
>
> -   dla każdej interpolacji, znajdź lub zarejestruj ulicę z lokalizacją interpolacji
> -   dla każdych dwóch węzłów utwórz budynek reprezentujący interpolację
>
> dla każdej encji, znajdź tagi addr:housenumber i addr:street (może to być również interpolacja węzłów!!!):
>
> -   pomiń, jeśli budynek dla tej encji już istnieje!
> -   znajdź lub zarejestruj ulice dla ulicy
> -   znajdź numer domu
> -   jeśli numer domu zawiera '-', spróbuj utworzyć interpolowany numer domu (brakuje latlon2?)
> -   jeśli numer domu zawiera '/', spróbuj wyszukać drugą ulicę addr:street2 --> wydaje się, że tylko dla [RU osm](https://wiki.openstreetmap.org/wiki/RU:Key:addr):
> -   istnieje więcej wariantów tego: adr:housenumber2, addr2:street, addr2:housenumber itp.
> -   dla każdej ulicy, zapisz istniejący dom
>
> dla drogi z tagiem - nazwa i tagiem - highway, ale bez addr:housenumber i addr:street:
>
> -   **Uwaga**: mogą to być drogi dla samochodów, z nazwami (autostrada, czy coś w tym stylu)
> -   pomiń, jeśli taka ulica już istnieje
> -   znajdź lub zarejestruj ulicę dla miasta
> -   zapisz węzły dla każdej znalezionej ulicy w każdym mieście
>
> Każda relacja z "postal_code", zapisz do późniejszego wykorzystania.
>
> **Uwaga**: nie obejmuje to address:type = pc i addr:postalcode
>
> przetwarzanie kodów pocztowych:
>
> -   dla każdej zapisanej relacji postal_code
> -   dla każdego członka budynku, zaktualizuj postal_code
>
> zapisz indeks:
>
> podziel miasta na: miasta+miasteczka, przedmieścia (przedmieścia z tagiem is_in), wioski (nie miasto ani miasteczko)
>
> zapisz miasta+miasteczka używając przedmieść
>
> odczytaj ulicę z miast+miasteczek + odpowiednie przedmieścia dla każdego miasta
>
> -   tutaj może być więcej ulic o tej samej nazwie dla jednego miasta, w takim przypadku próbujemy znaleźć część miasta dla ulicy (przedmieście), w której znajduje się ulica. Nie powinno być więcej ulic o tej samej nazwie w jednej części miasta!
>
> dla każdej ulicy
>
> -   dla każdego budynku, zarejestruj/utwórz/znajdź kod pocztowy, zarejestruj ulicę
>
> zapisz wioski
>
> -   tak samo jak miasta...
>
> zapisz wyodrębnione kody pocztowe i ich ulice
