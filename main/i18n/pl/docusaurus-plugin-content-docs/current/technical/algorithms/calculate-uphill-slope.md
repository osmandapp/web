---
source-hash: d793188a0617dee4c181a2021483255f3e56c64b9e25db7249b0fb0d19923b4d
sidebar_position: 5
---

# Obliczanie podjazdów / zjazdów / nachylenia {#calculation-of-uphill--downhill--slope}

OsmAnd wykorzystuje różne algorytmy do obliczania **nachylenia** i **podjazdów** w oparciu o dane satelitarne SRTM, które są osadzone w mapach offline, oraz w oparciu o zarejestrowane ślady GPX.

Głównym celem obliczania **podjazdów** jest dostarczenie odpowiednich informacji o tym, ile **dodatkowej energii** jest zużywane na wspinaczkę, oczywiście zależy to od wielu czynników, takich jak pojazd lub sposób transportu, nawierzchnia, waga osoby i inne.
Więc ostatecznie **podjazd** powinien być parametrem uwzględnianym przez routing oparty na wysokości, aby zapewnić routing efektywny energetycznie.

Głównym celem obliczania **nachylenia** jest wizualne wskazanie, których stromych dróg należy unikać.


## Podjazdy / Zjazdy {#uphill--downhill}

Istnieje wiele problemów z obliczaniem **podjazdów**, ponieważ nie ma standardu, a ponieważ zależy to od sposobu transportu i wielu innych parametrów, trudno jest zapewnić użytkownikowi rozsądną kontrolę, aby nie było to zbyt skomplikowane. Zazwyczaj podjazdy są porównywane z innymi programami, ale żaden program nie ma złotego standardu.

OsmAnd wykorzystuje algorytm trzystopniowy:

- Filtrowanie zaszumionych danych. 
- Znajdowanie lokalnych ekstremów (minimów i maksimów).
- Obliczanie sumy różnic między minimum a maksimum.

Niektóre ślady zawierają dużo zaszumionych danych, które należy najpierw przefiltrować. Na razie stosujemy filtrowanie do wszystkich śladów, ale w przypadku śladów przygotowanych, takich jak te zbudowane za pomocą narzędzia Planuj trasę, narzędzia Nawigacja lub po korekcji SRTM, filtrowanie nie powinno mieć żadnego wpływu.


### Filtr nachylenia 70% {#filter-70-slope}

Filtrowanie opiera się na znajdowaniu **punktów ekstremalnych**, które są znacznie wyższe lub niższe niż 1 sąsiedni punkt po lewej i 1 sąsiedni punkt po prawej na wykresie. 
Te **punkty ekstremalne** są wykluczane z dalszych obliczeń. ```Próg``` to [nachylenie 70%](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L11) -  [kod](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L72).

**Przykład 1**. (wszystkie punkty rozłożone co 10m), wysokość - [5, 3, 10, 3, 5]. 10 to punkt ekstremalny: ponieważ 10 > 3 (nachylenie 70%).

**Przykład 2**. (wszystkie punkty rozłożone co 10m), wysokość - [5, 3, 10, 13, 15]. 10 nie jest punktem ekstremalnym: ponieważ 10 > 3, ale 10 < 13, więc jest to lokalny szczyt.

### Filtrowanie skaczących punktów {#filter-jumping-points}

Punkty reprezentujące lokalne wzniesienia ```/\``` są filtrowane, co prowadzi do problemu, że najwyższy i najniższy punkt zawsze zostaną odfiltrowane, ale pozwala to radzić sobie z zaszumionymi śladami, gdzie nagrywanie nie było częste, więc pierwsza kontrola z ekstremalnym nachyleniem nie działa. Odniesienie do [kodu](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L49).

**Przykład 1**. Wysokość - [5, 3, 10, 3, 5] -> [5, 5].

**Przykład 2**. Wysokość - [5, 6, 10, 7, 5] -> [5, 6, 7, 5].

**Przykład 3**. Wysokość - [5, 2, 3, 4, 5] -> [5, 3, 4, 5].


### Znajdowanie ekstremów {#finding-extremums}

Do znajdowania ekstremów używany jest algorytm [Rames-Dougals-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm). Nie jest on absolutnie dobry do znajdowania dokładnie ekstremów na losowym wykresie, ale w obliczeniach wysokości pozwala uniknąć wielu losowych małych szczytów, które mogą pojawić się podczas jednego długiego podjazdu i kilku niezauważalnie krótkich zjazdów pomiędzy nimi.

Głównym celem algorytmu jest znalezienie minimalnej liczby prostych linii, które mogłyby reprezentować wykres wysokości. ```Próg``` wynosi **[7 metrów](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationDiffsCalculator.java#L13)**. Tak więc wszystkie szczyty o różnicy większej niż 7 metrów zostaną wykryte na płaskich powierzchniach i nie zostaną wykryte, jeśli są mniejsze.

Ekstrema są wyświetlane na wykresie jako niebieskie kropki z włączoną wtyczką deweloperską OsmAnd.

**Przykład 1**. Wysokość - [0, 0, 10, 0, 0]. **Ekstremum** to 10.

**Przykład 2**. Wysokość - [0, 1, 5, 4, -3, -2, -1, 0]. **Brak ekstremów** - wszystkie różnice mniejsze niż 7 metrów.


### Obliczanie podjazdów / zjazdów między ekstremami {#calculate-uphill--downhill-between-extremums}

Na przykład, jeśli masz prosty ślad, który idzie w górę i w dół, masz tylko 1 maksimum na swojej ścieżce, więc
  ``` 
  Różnica wysokości początkowej = <wysokość początkowa> - <wysokość ekstremum>    : 
  Różnica wysokości końcowej = <wysokość ekstremum> - <wysokość końcowa>      : jeśli dodatnia - **podjazd**, jeśli ujemna - **zjazd**
  ```

1. Jeśli *Różnica wysokości początkowej* > 0
  - **podjazd** = *różnica wysokości początkowej*  
  - **zjazd** = *różnica wysokości końcowej*  

2. Jeśli *Różnica wysokości końcowej* > 0
  - **podjazd** = *różnica wysokości końcowej*   
  - **zjazd** = *różnica wysokości początkowej*  


Zostaną dodane kolejne przykłady.


## Korekcja wysokości {#elevation-correction}

Korekcja wysokości dostosowuje wartości wysokości w śladzie GPX za pomocą zewnętrznych źródeł wysokości. Dostępne są dwa źródła danych wysokościowych:

1. Użyj map terenu (DEM / SRTM / dane wysokości 3D)
- Zastępuje wartości wysokości danymi z pobranych map terenu (pliki DEM/SRTM lub 3D GeoTIFF).
- Działa lokalnie na urządzeniu, jeśli zainstalowano kafelki wysokościowe.
- Ta metoda zachowuje oryginalną geometrię śladu.

2. Użyj pobliskich dróg (Dołącz do dróg)
- Dostosowuje geometrię śladu do sieci dróg.
- Używa danych wysokości dróg do korekcji wysokości.
- Ta metoda może zmodyfikować kształt śladu z powodu dopasowania do dróg.

Dane, które mogą ulec zmianie po zastosowaniu korekcji wysokości:
- Dystans
- Rozmiar
- Wzniesienie
- Zejście
- Średnia prędkość
- Maksymalna prędkość
- Czas trwania
- Czas w ruchu

Znaczniki czasu GPX (data/godzina) są zachowywane przy użyciu obu źródeł wysokości.


## Nachylenie {#slope}

Zielony wykres jest obliczany inaczej niż podjazdy/zjazdy i może mieć niewielkie różnice. Teoretycznie we wszystkich **ekstremach** zielony wykres powinien **przecinać linię 0**, chociaż wszystkie punkty o zerowym nachyleniu są ekstremami.

Aby obliczyć nachylenie, całe dane są dzielone na równe kroki co 20 metrów. Dla każdego punktu tej siatki obliczana jest średnia wysokość wokół punktu (promień 10 metrów). Następnie obliczana jest dyskretna pochodna za pomocą [skończonej różnicy centralnej](https://en.wikipedia.org/wiki/Finite_difference).