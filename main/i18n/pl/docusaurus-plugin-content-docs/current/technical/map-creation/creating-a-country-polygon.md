---
source-hash: e0173be6fa81b710afb1b4b52c4268f63865918a50d504364df4f0d772bf2d39
title: Tworzenie wielokąta kraju
versions: '*'
---
**_Ten artykuł wymaga weryfikacji_**

Ten artykuł opisuje, jak utworzyć wielokąt dla brakującego kraju w geofabrik.de i jak dodać ten wielokąt do serwera generowania map OsmAnd.

## Wprowadzenie {#introduction}

OsmAnd zawiera wiele map dla wielu krajów. Większość map jest tworzona z „surowych danych” map pobranych z [geofabrik.de](http://download.geofabrik.de). Geofabrik dostarcza te mapy surowych danych bezpłatnie każdemu i świadczy (komercyjne) usługi i produkty oparte na tych mapach.

Geofabrik.de ma strategię dostarczania map dla krajów, które są żądane przez większą liczbę użytkowników lub przez ich klientów. Oznacza to, że niektóre mapy nigdy nie trafiają do geofabrik, ponieważ po prostu nie ma wystarczającej liczby żądań (lub wcale), jak niektóre egzotyczne kraje, takie jak Seszele czy Burundi itp.

## Proces serwerowy {#server-process}
Ze względu na tę strategiczną decyzję geofabrik, OsmAnd ma opcję generowania map dla tych krajów, a do tego celu używane są narzędzia [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-development.zip) i [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert). Dla OsmAndMapCreator jest to proces trzystopniowy:
- OsmAndMapCreator potrzebuje wielokąta, który otacza zewnętrzną granicę kraju.
- OsmAndMapCreator potrzebuje „mapy surowych danych” z następnego wyższego poziomu, zawierającej ten kraj. Dla Burundi oznacza to, że OsmAndMapCreator potrzebuje mapy Afryki. Dla Nadrenii Północnej-Westfalii oznacza to, że OsmAndMapCreator potrzebuje mapy Niemiec.
- [Osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) utworzy mapę „surowych danych” z wielokąta, wyodrębniając dane mapy z mapy „rodzicielskiej”.
- OsmAndMapCreator utworzy mapę obf OsmAnd na podstawie pośredniej mapy „surowych danych” wygenerowanej przez osmconvert.

## Niezbędne działania {#necessary-actions}
W zależności od złożoności (wygenerowanego) wielokąta, ten kompletny łańcuch działań może zająć od 10 minut do 2 godzin.

### 1. Pobierz relację OpenStreetMap z Nominatim {#1-get-the-openstreetmap-relation-from-nominatim}
- Przejdź do [nominatim.openstreetmap.org](https://nominatim.openstreetmap.org/)
- Wpisz nazwę swojego kraju
- Po znalezieniu kliknij link „(szczegóły)”
- W szczegółach przewiń w dół do „OSM: relacja” i zapisz lub skopiuj numer ID relacji.

### 2. Wygeneruj wielokąt {#2-generate-the-polygon}
- Przejdź do [polygons.openstreetmap.fr](http://polygons.openstreetmap.fr/)
- Wypełnij (lub wklej) numer ID „OSM: relacja”, który pobrałeś z Nominatim dla wybranego kraju, w polu „Id of relation”.
- Spowoduje to utworzenie domyślnego wielokąta, składającego się z 250 do 3500 węzłów (NPoints). Sam wielokąt można znaleźć w kolumnie „poly”.
- W przypadku więcej niż 350 węzłów, będziesz musiał uprościć wielokąt. Im prostszy wielokąt, tym szybciej można utworzyć mapę kraju (oczywiście w zależności od zawartości).

### 3. Uprość wielokąt {#3-simplify-the-polygon}
Liczba punktów węzłowych (NPoints) musi być jak najmniejsza, aby OsmAndMapCreator mógł jak najszybciej utworzyć mapę. Jak wspomniano: w przypadku więcej niż 350 punktów węzłowych spróbuj je zmniejszyć, upraszczając wielokąt.
- W przypadku więcej niż 350 węzłów, spróbuj je zmniejszyć, „bawiąc się” zmienną X (z mojego doświadczenia wynika, że inne nie mają większego znaczenia)
- Czasami uzyskujesz świetne wyniki (90 NPoints, 200 NPoints, 270 NPoints) i wtedy kończysz ten krok. Czasami po prostu nie możesz zejść poniżej 450 NPoints lub coś w tym stylu. Wtedy musisz zastosować dalsze ręczne kroki.
- Zapisz swój ostateczny wielokąt do pliku. Użyj dla niego poprawnej domyślnej nazwy, takiej jak france.poly. Trzymaj się małych liter.

### 4. Dalsza modyfikacja i uproszczenie wielokąta {#4-further-modification-and-simplification-of-the-polygon}
- Otwórz JOSM (pobierz, jeśli to konieczne) i otwórz utworzony plik wielokąta (czy wykonałeś kopię/kopie zapasową oryginalnego zapisanego wielokąta?).
- Dodaj tło z menu „Obrazy” i wybierz domyślne tło „OpenStreetMap (Mapnik)”.
- Ręcznie usuń punkty węzłowe, jeśli to możliwe. \*Uwaga:\* Zachowaj wielokąt jak najbliżej granicy. Potrzebujesz pewnego zachodzenia na siebie, ale staraj się, aby było ono mniejsze niż 2-5 kilometrów. Zachodzenie na siebie w krajach będzie generowane dwukrotnie dla każdego kraju. Mniejsze zachodzenie na siebie oznacza krótszy czas renderowania i mniej błędów renderowania. Na wybrzeżach i wokół wysp staraj się zachować większą odległość (20 kilometrów). Jest to powszechnie akceptowane, a morze i tak jest „puste”.
- Kiedy zrobisz wszystko, co w Twojej mocy, możesz zapisać zaktualizowany, poprawiony wielokąt. Jak już wspomniano: staraj się uzyskać jak najmniej punktów węzłowych, ale czasami granica kraju jest tak skomplikowana, że po prostu potrzebujesz więcej punktów węzłowych, aby ją opisać i utrzymać wielokąt jak najbliżej granicy: niech tak będzie.
- **Nie przesyłaj wielokąta do OSM**. JOSM poprosi Cię o przesłanie Twojej pracy do OpenStreetMap. Nie rób tego dla tych wielokątów, chyba że wiesz dokładnie, co robisz. Prawie każdy kraj na świecie jest już doskonale pokryty w OpenStreetMap (w przeciwnym razie nominatim nie byłby w stanie podać Ci szczegółów dotyczących kraju, a polygons.openstreetmap.fr nie byłby w stanie wygenerować wielokąta na podstawie identyfikatora relacji OSM).

### 5. Dodawanie wielokąta do serwera OsmAnd {#5-adding-the-polygon-to-the-osmand-server}

Aby móc to zrobić, musisz zarejestrować się jako użytkownik.

Aby umożliwić generowanie map, wymagane są dwa kroki:
- Dodanie wielokąta do sekcji danych mapy
- Dodanie kraju do pliku danych używanego do generowania map obf OsmAnd.

Dodawanie wielokąta do sekcji danych mapy
- Przejdź do adresu internetowego serwera deweloperskiego OsmAnd pod adresem [https://github.com/osmandapp/](https://github.com/osmandapp/ "https://github.com/osmandapp/")
- Wybierz sekcję OsmAnd-misc.
- Wybierz „fork”, aby utworzyć własne osobiste repozytorium
- Utwórz nowy plik i skopiuj do niego dane wielokąta. Zapisz plik.
- Utwórz żądanie ściągnięcia.

Dodaj tworzenie mapy do listy zadań wsadowych
- Przejdź do adresu internetowego serwera deweloperskiego OsmAnd pod adresem [github.com/osmandapp](https://github.com/osmandapp/)
- Wybierz sekcję OsmAnd-tools.
- Wybierz „fork”, aby utworzyć własne osobiste repozytorium.
- W swoim osobistym repozytorium przejdź do folderu obf-generation/regions.
- Wybierz plik indexes.xml i kliknij edytuj.
- Dodaj swój kraj w odpowiednim miejscu i zapisz plik.
- Utwórz żądanie ściągnięcia.

## Tworzenie własnych map osobistych z wielokąta {#creating-your-own-personal-maps-from-a-poly}

Możesz na przykład tworzyć wielokąty z krajów, hrabstw/prowincji/stanów, regionów i miast.

Powiedzmy, że Twoja córka jedzie do Paryża na kilka dni z przyjaciółką. Nie interesuje jej nawigacja, chodzenie czy jazda na rowerze (chyba że jest to absolutnie konieczne), ale chce wiedzieć, gdzie jest, dokąd iść i gdzie znaleźć ciekawe miejsca (POI). Poza tym ma mały telefon (niski procesor, mało pamięci) i małą kartę SD (wypchaną muzyką). Więc mapa musi być jak najmniejsza: zarówno pod względem przechowywania, jak i wydajności. Możesz oczywiście pobrać mapę dla france\_ile-de-france.obf zawierającą Paryż, ale możesz też wygenerować „niestandardową” mapę Paryża.
- Niech Twoja córka pobierze OsmAnd, a jeszcze lepiej: niech kupi OsmAnd+
- Pobierz identyfikator relacji OSM dla Paryża z Nominatim.
- Pobierz (uproszczony) wielokąt dla identyfikatora Paryża z polygons.openstreetmap.fr
- pobierz lub skompiluj [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert)
- pobierz mapę „surowych danych” Ile-de-France z geofabrik.de
- utwórz mapę surowych danych Paryża z mapy Ile-de-France i wielokąta Paryża, np.:
<pre>
$ osmconvert ile-de-france.osm.pbf -B=paris.poly --out-pbf > Paris.osm.pbf
</pre>
- Pobierz aplikację OsmAndMapCreator z [download.osmand.net/latest-night-build/](http://download.osmand.net/latest-night-build/ "https://download.osmand.net/latest-night-build/")
- Utwórz swoją mapę obf OsmAnd z danych Paris.osm.pbf za pomocą OsmAndMapCreator.