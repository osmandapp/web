---
source-hash: 72c443553f19a954e1e225c0a8053d174db652de6cd02e9719c8c87174e281ad
sidebar_position: 6
title: Wyszukiwanie współrzędnych
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

**Wyszukiwanie współrzędnych w OsmAnd** umożliwia znalezienie konkretnej lokalizacji za pomocą szerokości i długości geograficznej. Ten typ wyszukiwania pomaga dokładnie zidentyfikować lokalizację. Jest to szczególnie przydatne w obszarach, które nie mają dokładnych adresów, lub do konkretnych zadań geograficznych, takich jak tworzenie geostref lub precyzyjne pozycjonowanie w otwartej przestrzeni.

OsmAnd oferuje kilka sposobów dotarcia do **narzędzia wyszukiwania → [zakładka wyszukiwania adresu](../search/search-address.md)**, gdzie znajduje się **wyszukiwanie współrzędnych**.

- Przycisk [Szukaj](../widgets/map-buttons.md#search) na ekranie aplikacji mapy.
- Przejdź do głównego menu Androida *Menu → Szukaj → zakładka Adres → Wyszukiwanie współrzędnych*.
- Przygotowując się do rozpoczęcia trasy, dotknij *Nawigacja → Ustaw cel → Pole wyszukiwania → zakładka Adres → Wyszukiwanie współrzędnych*.

## Jak używać {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie współrzędnych Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie współrzędnych iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Współrzędne mogą być wprowadzane w dowolnym dostępnym formacie, ale znaleziona lokalizacja jest wyświetlana w formacie określonym w *Konfiguruj profil → Ustawienia ogólne → Jednostki i formaty*.

- Aby skorzystać z wyszukiwania współrzędnych, możesz wpisać je w każdym odpowiednim polu indywidualnie, lub wkleić wcześniej skopiowane współrzędne do pola wyszukiwania lub wprowadzić je w nim. Aplikacja poprosi o wybranie odpowiedniej lokalizacji.
- Wyszukiwanie współrzędnych automatycznie konwertuje jeden format współrzędnych na inny, gdy zmieniony zostanie określony format w polu z ich listą.
- Dotknij sugerowanej lokalizacji, a otworzy się [menu kontekstowe mapy](../map/map-context-menu.md#select-any-point-long-tap).
- Więcej informacji można znaleźć tutaj: [Współrzędne geograficzne](https://en.wikipedia.org/wiki/Geographic_coordinate_system).

**Zakres funkcji wyszukiwania współrzędnych**:

- *Precyzyjna lokalizacja*. Wyszukiwanie współrzędnych zapewnia dokładną lokalizację. Możesz wprowadzić precyzyjne współrzędne uzyskane, na przykład, z innych źródeł, takich jak mapa, urządzenie GPS lub usługi online.
- *Miejsca bez adresu*. Współrzędne są szczególnie przydatne, gdy chodzi o miejsca, które nie mają dokładnego adresu, lub gdy adres jest nieznany. Na przykład, może to być odległy obszar, punkt na morzu lub szczyt góry. Wprowadzając współrzędne, możesz znaleźć i nawigować do takich lokalizacji bez konieczności znajomości adresu.
- *Udostępnianie lokalizacji*. Wyszukiwanie według współrzędnych zapewnia wygodny sposób wprowadzania informacji. Możesz wprowadzić współrzędne ręcznie lub skopiować je z innych źródeł. Może to być przydatne podczas udostępniania lokalizacji innym osobom lub korzystania z wcześniej uzyskanych współrzędnych.

## Format współrzędnych {#coordinate-format}

Istnieje kilka sposobów wprowadzania współrzędnych do wyszukiwania. Aby użyć każdego z nich, bardzo ważne jest przestrzeganie zasad wprowadzania, w przeciwnym razie aplikacja nie będzie w stanie znaleźć lokalizacji.

1. **<Translate android="true" ids="navigate_point_format_D"/>**

    ![Wyszukiwanie współrzędnych Android](@site/static/img/search/coordinates_search_degrees_andr.png)

    **Współrzędne dziesiętne (stopnie)**. W tym formacie współrzędne szerokości i długości geograficznej są zapisywane w formacie dziesiętnym, na przykład 52.37022° szerokości geograficznej i 4.89517° długości geograficznej dla Amsterdamu. Ta metoda wprowadzania jest łatwa w użyciu i jest najczęściej spotykana. Więcej o formacie współrzędnych dziesiętnych można przeczytać [tutaj](https://en.wikipedia.org/wiki/Decimal_degrees).

    - *Zasady wprowadzania*. Współrzędne szerokości i długości geograficznej są zapisywane w formacie dziesiętnym, gdzie szerokość geograficzna mieści się w zakresie od -90 do 90, a długość geograficzna od -180 do 180.
    - *Najczęściej używane*. Współrzędne dziesiętne są szeroko stosowane w aplikacjach nawigacyjnych, urządzeniach GPS, mapach internetowych i innych usługach geopozycjonowania.

2. **<Translate android="true" ids="navigate_point_format_DM"/>**

    ![Wyszukiwanie współrzędnych Android](@site/static/img/search/coordinates_search_DM_andr.png)

    **Stopnie i minuty (DM)**. W tym formacie współrzędne szerokości i długości geograficznej są zapisywane przy użyciu stopni i minut. Na przykład 37:46.29 szerokości geograficznej i -122:25.10 długości geograficznej dla San Francisco. Ten format może być mniej dokładny i może wymagać więcej czasu na wprowadzenie.
    - *Zasady wprowadzania*. Współrzędne szerokości i długości geograficznej są zapisywane w formacie, który używa stopni (:) i minut (:).
    - *Najczęściej używane*. Format DM jest często spotykany w nawigacji morskiej, lotnictwie, astronomii i systemach mapowania topograficznego.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**

    ![Wyszukiwanie współrzędnych Android](@site/static/img/search/coordinates_search_DMS_andr.png)

    **Stopnie, minuty i sekundy (DMS)**. Format współrzędnych DMS rejestruje współrzędne geograficzne, gdzie wartości podane są w stopniach, minutach i sekundach. Stopnie (DDD) mogą przyjmować wartości od 0 do 180 dla długości geograficznej i od 0 do 90 dla szerokości geograficznej. Wartości dodatnie wskazują długość geograficzną wschodnią i szerokość geograficzną północną, a wartości ujemne wskazują długość geograficzną zachodnią i szerokość geograficzną południową. Minuty (MM) mogą przyjmować wartości od 0 do 59. Sekundy (SS.S) reprezentują ułamek dziesiętny sekundy i również mogą mieścić się w zakresie od 0 do 59.9.
    - *Zasady wprowadzania*. Współrzędne szerokości i długości geograficznej są zapisywane w formacie, który używa stopni (:), minut (:) i sekund (.).
    - *Najczęściej używane*. Format DMS jest szeroko stosowany w geodezji, aplikacjach nawigacyjnych, kartografii, astronomii i innych dziedzinach, gdzie wymagane jest bardziej szczegółowe wyrażenie współrzędnych lokalizacji.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**

    ![Wyszukiwanie współrzędnych Android](@site/static/img/search/coordinates_search_UTM_andr.png)

    **UTM (Uniwersalny Poprzeczny Układ Mercatora)**. W tym formacie współrzędne są określane za pomocą strefy UTM, kierunku wschodniego i północnego. Na przykład, dla Amsterdamu, współrzędne mogą być w przybliżeniu następujące: strefa 31, kierunek wschodni 581000, kierunek północny 5809000. Wprowadzanie współrzędnych w formacie UTM może wymagać pewnej znajomości systemu i być bardziej złożone niż inne formaty, ale zapewnia dobrą dokładność i spełnia globalne standardy geopozycjonowania. Więcej o formacie UTM można przeczytać [tutaj](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system).
    - *Zasady wprowadzania*. Współrzędne są zapisywane w formacie, który używa strefy UTM oraz przesunięć wschodnich i północnych.
    - *Najczęściej używane*. Format UTM jest często używany w geodezji, kartografii i systemach informacji geograficznej do pomiarów i nawigacji.

5. **<Translate android="true" ids="navigate_point_format_olc"/>** ((OLC) - 9F2X4WFJ+7W (Open Location Code reprezentuje obszar 9m x 14m))

    ![Wyszukiwanie współrzędnych Android](@site/static/img/search/coordinates_search_OLC_andr.png)

    **Open Location Code (OLC)**, znany również jako **Plus Code**, to globalny system kodowania lokalizacji. Jest to kombinacja liter i cyfr wskazująca szerokość i długość geograficzną dowolnej lokalizacji na planecie. Przykład kodu OLC dla Amsterdamu: 9F3WCVWG+FP. W tym przykładzie "9F3WCVWG" wskazuje na ogólną siatkę, a "+FP" określa lokalizację w tym obszarze. Więcej informacji [tutaj](https://en.wikipedia.org/wiki/Open_Location_Code).
    - *Zasady wprowadzania*.
        - Kod OLC składa się z 4 do 14 znaków, które mogą być literami od "C" do "Z" (z wyjątkiem "I" i "O") oraz cyframi od "2" do "9".
        - Kod zaczyna się od globalnego prefiksu, który wskazuje kontynent lub obszar.
        - Następnie występują grupy znaków oddzielone kropkami. Każda grupa reprezentuje węższy obszar.
        - Aby wyjaśnić lokalizację, litery i cyfry są uzupełniane innymi znakami w kodzie OLC.
    - *Najczęściej używane*. OLC jest często używany w obszarach, gdzie dokładne adresy nie są dostępne lub są trudne do określenia, takich jak odległe obszary, pustynie lub oceany. Jest również szeroko stosowany w aplikacjach i usługach związanych z geopozycjonowaniem, dostawami, służbami ratunkowymi i innymi obszarami, gdzie wymagana jest precyzyjna lokalizacja bez użycia tradycyjnych adresów.

6. **<Translate android="true" ids="navigate_point_mgrs"/>**

    ![Wyszukiwanie współrzędnych Android](@site/static/img/search/coordinates_search_MGRS_andr.png)

    **MGRS (Wojskowy System Odniesienia Siatkowego)**. Jest to system współrzędnych często używany w zastosowaniach wojskowych. Bazuje na systemie UTM i jest uzupełniony dodatkową siatką kwadratów. Przykład współrzędnych w formacie MGRS dla lokalizacji w Australii może być następujący: 55HBE1234567890. W tym przykładzie "55H" reprezentuje strefę MGRS, a "BE" reprezentuje kwadrat, w którym znajduje się lokalizacja. "123456" reprezentuje przesunięcie wschodnie, a "7890" reprezentuje przesunięcie północne w obrębie tego kwadratu. MGRS są szeroko stosowane w obszarach wymagających wysokiej dokładności i georeferencji. Są szczególnie przydatne w środowiskach, gdzie adresy mogą być niejasne lub niedostępne, takich jak operacje wojskowe lub ekspedycje w odległych obszarach. Więcej o formacie MGRS można przeczytać [tutaj](https://en.wikipedia.org/wiki/Military_Grid_Reference_System).
    - *Zasady wprowadzania*. Współrzędne składają się ze strefy MGRS, kwadratu i dwóch dodatkowych cyfr wskazujących przesunięcia wschodnie i północne.
    - *Najczęściej używane*. Format MGRS jest szeroko stosowany w nawigacji i komunikacji wojskowej, a także może być przydatny dla entuzjastów outdooru i turystów.

7. **Szwajcarska Siatka** (CH1903) i **Szwajcarska Siatka** (CH1903+)

    ![Wyszukiwanie współrzędnych Android](@site/static/img/search/coordinates_search_Swiss_andr.png)

    **Szwajcarski system współrzędnych**. Szwajcarska Siatka (CH1903) i Szwajcarska Siatka (CH1903+) to systemy współrzędnych szeroko stosowane w Szwajcarii do pozycjonowania. Oba formaty bazują na systemie CH1903, który został wprowadzony w 1903 roku i bazuje na projekcji Szwajcarskiej Międzynarodowej Siatki. Przykładowe współrzędne w formacie Szwajcarskiej Siatki (CH1903) — Wschodnie: 600000; Północne: 200000. W formacie Szwajcarskiej Siatki (CH1903+) — Wschodnie: 600300; Północne: 200400. Więcej o szwajcarskim systemie współrzędnych geograficznych można przeczytać [tutaj](https://en.wikipedia.org/wiki/Swiss_coordinate_system).
    - *Zasady wprowadzania*.
        - Współrzędne w formacie CH1903 składają się z dwóch komponentów: wschodniego i północnego.
        - Wschodnie jest w metrach od punktu zwanego Osią Lucerny (zero Wschodnie).
        - Północne jest podane w metrach od równika.
        - Format CH1903+ używa tych samych zasad wprowadzania co CH1903, ale z bardziej precyzyjnymi wartościami.
        - CH1903+ zawiera korekty uwzględniające przesunięcia współrzędnych spowodowane zmianami ruchów tektonicznych w Szwajcarii.
    - *Najczęściej używane*. Szwajcarska Siatka (CH1903) i Szwajcarska Siatka (CH1903+) są używane w Szwajcarii do pomiarów geodezyjnych, kartografii, systemów informacji geograficznej oraz budownictwa i inżynierii. Te formaty zapewniają lokalny system współrzędnych specyficzny dla Szwajcarii.

> Dla każdego profilu osobno można ustawić inny format współrzędnych. Aby to zrobić, przejdź do *Ustawienia ogólne → [Format współrzędnych](../personal/profiles.md#units--formats)*.

<!--

## Rozwiązywanie problemów {#troubleshooting}

https://github.com/osmandapp/OsmAnd/issues/14081

https://github.com/osmandapp/OsmAnd/issues/16114

https://github.com/osmandapp/OsmAnd/issues/14081

-->

## Powiązane artykuły {#related-articles}

- [Wyszukaj wszystko](./search-all.md)
- [Wyszukaj adres](./search-address.md)
- [Historia wyszukiwania](./search-history.md)
- [Wyszukaj POI](./search-poi.md)

> *Ostatnia aktualizacja: lipiec 2024*