---
source-hash: 4127321256305d47dce48682c4990b76cec1e4db868aa211746d1c49c5418eb3
sidebar_position: 3
---

# Śledzenie problemów z wyszukiwaniem adresów {#trace-address-search-issues}

## Adres znaleziony w niewłaściwym mieście {#address-found-in-the-wrong-city}

W niektórych przypadkach wyszukiwanie adresu w OsmAnd może zwrócić wyniki dla innego miasta niż oczekiwano. Problemy te wynikają ze sposobu definiowania i przetwarzania granic miast w OpenStreetMap (OSM). Jeśli użytkownik wyszukuje **nazwę ulicy** lub **ulicę z numerem domu** bez podawania miasta, **algorytm wyszukiwania pełnotekstowego** może zwrócić dopasowanie z innego miasta.

### Powiązane problemy {#related-issues}

Przypadki nieprawidłowego przypisania miast zostały zgłoszone w następujących problemach na GitHubie:
[10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10677](https://github.com/osmandapp/OsmAnd/issues/10677), [10699](https://github.com/osmandapp/OsmAnd/issues/10699), [10921](https://github.com/osmandapp/OsmAnd/issues/10921).


## Jak OsmAnd identyfikuje granice miast {#how-osmand-identifies-city-boundaries}

OsmAnd określa granice miasta, używając jego **relacji administracyjnej** w OpenStreetMap. Aby granica została uznana za prawidłową, musi spełniać następujące kryteria:

- **Relacja graniczna** musi zawierać tagi:
  - **boundary** = *administrative* lub *postal_code*
  - **place** = *[city, town, village, hamlet, etc.]*

- Relacja graniczna musi zawierać **element relacji**:
  - **label**
  - **admin_centre** lub **admin_center**
  
- **Nazwa relacji granicznej** musi dokładnie odpowiadać **nazwie węzła miejsca**.

- Jeśli te warunki nie są spełnione, relacja graniczna nie jest rozpoznawana jako granica miasta.

- Spośród nakładających się granic, OsmAnd wybiera **największą granicę**.

- **Sposoby relacji** definiują granicę. OsmAnd obsługuje zarówno **wewnętrzne**, jak i **zewnętrzne** sposoby.


## Dokładne dopasowanie nazw {#exact-name-matching}

Dla dokładnego przetwarzania adresów, **nazwy ulic muszą być dokładnie dopasowane**, włączając w to:

- Różnice w **znakach diakrytycznych** (np. *Rue André Chenier* vs. *Rue André Chénier*).
- Różnice w **przedrostkach i skrótach**.

Jeśli wystąpi niezgodność, może pojawić się jeden z następujących problemów:

- Dom jest **przypisany do niewłaściwej ulicy**.
- **Ta sama ulica pojawia się wielokrotnie** w różnych granicach miast.

Przykład znajduje się w problemie na GitHubie [10036](https://github.com/osmandapp/OsmAnd/issues/10036).


## Możliwe przyczyny nieprawidłowego przypisania miast {#possible-causes-of-incorrect-city-assignments}

### Problemy w OpenStreetMap {#issues-in-openstreetmap}

1. **Uszkodzone lub brakujące granice miast.**

   - Jeśli granice miast są niekompletne, nieprawidłowe lub brakujące, przypisania adresów mogą być niewiarygodne.
   - **Rozwiązanie:** Postępuj zgodnie z [przewodnikiem naprawy granic OSM](https://help.openstreetmap.org/questions/1053/how-do-i-fix-inconsistent-boundaries).
   - Przykład: [10699](https://github.com/osmandapp/OsmAnd/issues/10699).

2. **Granice miast nie nakładają się prawidłowo.**

   - Jeśli ulica należy do dwóch miast, ale jest nieprawidłowo zmapowana, OsmAnd może nie rozpoznać nakładania się.
   - **Rozwiązanie:** Dostosuj granice miast w OpenStreetMap, aby upewnić się, że prawidłowo obejmują wspólne ulice.

3. **Brakujące wymagane tagi w relacji granicznej.**

   - Jeśli relacji brakuje podstawowych tagów, takich jak **boundary=administrative** lub **place=city**, nie zostanie ona użyta.
   - Przykłady:
     - Problem [10921](https://github.com/osmandapp/OsmAnd/issues/10921) (brakujące tagi).
     - Problem [12548](https://github.com/osmandapp/OsmAnd/issues/12548) (problem z granicą *Erfstadt*).

### Problemy w OsmAnd {#issues-in-osmand}

**Adresy przypisane do sąsiednich miast.**

- Miasta, miasteczka, wioski lub przedmieścia w pobliżu mogą **nieprawidłowo dziedziczyć adresy** z powodu nakładania się granic lub ich braku.
- Jest to powszechne, gdy miasta są podzielone na obszary administracyjne, ale brakuje im jasno zdefiniowanych relacji OSM.
- Zobacz powiązane raporty: [10559](https://github.com/osmandapp/OsmAnd/issues/10559), [10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10730](https://github.com/osmandapp/OsmAnd/issues/10730).


## Metody weryfikacji {#verification-methods}

Aby zweryfikować i rozwiązać problemy z granicami miast, porównaj wyniki z różnych narzędzi mapowych.

### Korzystanie z OpenStreetMap {#using-openstreetmap}

**Przykład:** Wyszukiwany adres: *Wolności 223, Zabrze*

1. Otwórz OpenStreetMap (OSM).
2. Wyszukaj **Zabrze** i wybierz wynik powiązany z **granicą administracyjną**.
3. Sprawdź granicę miasta, aby potwierdzić, czy adres jest prawidłowo przypisany.

### Korzystanie z Nominatim {#using-nominatim}

**Przykład:** Wyszukiwany adres: *Wolności 223, Zabrze*

1. Wyszukaj **ulicę i numer domu** bez podawania miasta.
2. Jeśli wynik wyszukiwania umieszcza adres w innym mieście, zanotuj sugerowaną nazwę miasta.
3. Wprowadź **znalezioną nazwę miasta** w Nominatim.
4. Sprawdź wartość **Rankingu Adresu**:
   - Przykład: *Wolności, Maciejów*
   - Jeśli Maciejów jest wymieniony jako *przedmieście/osada (ranking 20)*, jest to mniejsza jednostka administracyjna innego miasta.

**Ważne:** Zachowaj ostrożność przy wyborze wyników wyszukiwania, ponieważ miasta o podobnych nazwach mogą istnieć w różnych regionach lub krajach.


## Wyszukiwanie adresów w USA i dane TIGER {#us-address-search-and-tiger-data}

OsmAnd wykorzystuje dane OpenStreetMap do wyszukiwania adresów, z dodatkowymi źródłami danych, takimi jak **TIGER (Topologically Integrated Geographic Encoding and Referencing System)** z U.S. Census Bureau. Ten zbiór danych jest oparty na zakresach i nie zawiera precyzyjnych numerów domów. Niektóre adresy mogą być brakujące lub niedokładne.

Rozwiązywanie problemów z adresami w USA:

1. Wprowadzony adres jest **dzielony na komponenty**: `[Numer Domu] [Nazwa Ulicy]`, `[Miasto]`, `[Stan]`, `[Kod Pocztowy]`

2. System **najpierw sprawdza OSM** pod kątem dokładnego dopasowania numerów domów i ulic.

3. Jeśli **nie znaleziono dopasowania** w OSM, system przeszukuje dane TIGER, które obejmują:
    - Nazwy ulic i klasyfikacje.
    - Interpolowane zakresy numerów domów.
    - Granice administracyjne.

4. Jeśli **brakuje numeru domu**, OsmAnd szacuje jego lokalizację na podstawie pobliskich danych.

5. **Zwracanie wyników**:
    - Jeśli adres istnieje w OSM, wyświetlane jest dokładne dopasowanie.
    - Jeśli dostępne są tylko dane TIGER, podawany jest przybliżony wynik.
    - Jeśli żadne źródło nie zawiera adresu, wyszukiwanie kończy się niepowodzeniem.


#### Rodzaje danych adresowych w TIGER {#types-of-address-data-in-tiger}

| Typ danych TIGER            | Zastosowanie w OsmAnd    |
|----------------------------|--------------------|
| **Nazwy ulic**           | Używane do wyszukiwania opartego na nazwach. |
| **Zakresy numerów domów**    | Zapewnia przybliżone lokalizacje adresów. |
| **Kody pocztowe**              | Pomaga powiązać adresy z prawidłowymi obszarami pocztowymi. |
| **Granice administracyjne** | Określa lokalizacje miast i stanów. |

<br/>

#### Kiedy adres jest znaleziony vs. nie znaleziony {#when-an-address-is-found-vs-not-found}

| Scenariusz wyszukiwania     | Wynik w OsmAnd     |
|---------------------|----------------------|
| Adres istnieje w OSM z numerem domu i ulicą | ✅ Dokładne dopasowanie |
| Adres istnieje w TIGER, ale brakuje numerów domów | ⚠️ Przybliżone dopasowanie za pomocą interpolacji |
| Adres istnieje w TIGER, ale zawiera nieprawidłowe dane | ⚠️ Częściowe dopasowanie z błędami |
| Adres brakuje zarówno w OSM, jak i w TIGER | ❌ Brak wyniku |


#### Ograniczenia danych TIGER w OsmAnd {#limitations-of-tiger-data-in-osmand}

Kilka czynników wpływa na dokładność wyszukiwania adresów w systemie opartym na TIGER:

- **Brakujące numery domów**. Wiele adresów w TIGER opiera się na **interpolacji**, co prowadzi do przybliżonych lokalizacji.
  
- **Przestarzałe nazwy ulic**. Nazwy dróg w TIGER mogą nie odzwierciedlać obecnych konwencji nazewnictwa w OSM.

- **Niezgodności kodów pocztowych**. Granice w TIGER mogą być nieprawidłowe, co powoduje błędne przypisania kodów pocztowych.
