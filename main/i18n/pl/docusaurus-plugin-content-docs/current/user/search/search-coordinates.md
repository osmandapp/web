---
source-hash: b80174a5f1a001efd4636fc6fd6e060794982b6eedf9b33fb15fbb57be056bfd
sidebar_position: 6
title:  Wyszukiwanie według współrzędnych
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

**Wyszukiwanie według współrzędnych w OsmAnd** pozwala znaleźć określoną lokalizację na podstawie szerokości i długości geograficznej. Ten typ wyszukiwania pomaga dokładnie zidentyfikować lokalizację. Jest to szczególnie przydatne w przypadku obszarów, które nie mają dokładnych adresów, lub do określonych zadań geograficznych, takich jak tworzenie geo-ogrodzeń lub precyzyjne pozycjonowanie w otwartej przestrzeni.

OsmAnd zapewnia kilka sposobów dotarcia do *Narzędzia wyszukiwania → [zakładka Wyszukiwanie adresu](../search/search-address.md)*, gdzie znajduje się **Wyszukiwanie według współrzędnych**.

- [Przycisk Wyszukaj](../widgets/map-buttons.md#search) na ekranie mapy aplikacji.
- Przejdź do głównego *Menu Androida → Wyszukaj → zakładka Adres → Wyszukiwanie według współrzędnych*.
- Przygotowując się do rozpoczęcia trasy, dotknij *Nawigacja → Ustaw cel → Pole wyszukiwania → zakładka Adres → Wyszukiwanie według współrzędnych*.  


## Jak używać {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyszukiwanie według współrzędnych Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyszukiwanie według współrzędnych iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Współrzędne można wprowadzać w dowolnym dostępnym formacie, ale znaleziona lokalizacja jest wyświetlana w formacie określonym w *Konfiguruj profil → Ustawienia ogólne → Jednostki i formaty*.

- Aby skorzystać z wyszukiwania współrzędnych, można je wpisać w każdym odpowiednim polu osobno, wkleić wcześniej skopiowane współrzędne w pole wyszukiwania lub wprowadzić je w nim. Aplikacja poprosi o wybranie odpowiedniej lokalizacji.
- Wyszukiwanie według współrzędnych automatycznie konwertuje jeden format współrzędnych na inny, gdy określony format zostanie zmieniony w polu z ich listą.
- Dotknij sugerowanej lokalizacji, a otworzy się [menu kontekstowe mapy](../map/map-context-menu.md#select-any-point-long-tap).
- Więcej informacji można znaleźć tutaj [Współrzędne geograficzne](https://en.wikipedia.org/wiki/Geographic_coordinate_system).


**Zakres funkcji wyszukiwania współrzędnych**:

- *Dokładna lokalizacja*. Wyszukiwanie według współrzędnych zapewnia dokładną lokalizację. Można wprowadzić precyzyjne współrzędne uzyskane na przykład z innych źródeł, takich jak mapa, urządzenie GPS lub usługi online.
- *Miejsca bez adresu*. Współrzędne są szczególnie przydatne, jeśli chodzi o miejsca, które nie mają dokładnego adresu lub gdy adres jest nieznany. Na przykład może to być odległy obszar, punkt na morzu lub szczyt górski. Wprowadzając współrzędne, można znaleźć i nawigować do takich lokalizacji bez konieczności znajomości adresu.
- *Udostępnianie lokalizacji*. Wyszukiwanie według współrzędnych zapewnia wygodny sposób wprowadzania informacji. Można wprowadzać współrzędne ręcznie lub kopiować je z innych źródeł. Może to być przydatne podczas udostępniania lokalizacji innym osobom lub korzystania z wcześniej uzyskanych współrzędnych.


## Format współrzędnych {#coordinate-format}

Istnieje kilka sposobów wprowadzania współrzędnych do wyszukiwania. Aby skorzystać z każdego z nich, bardzo ważne jest przestrzeganie zasad wprowadzania, w przeciwnym razie aplikacja nie będzie w stanie znaleźć lokalizacji.

### Współrzędne dziesiętne {#decimal-coordinates}

![Wyszukiwanie według współrzędnych Android](@site/static/img/search/coordinates_search_degrees_andr.png)  

**<Translate android="true" ids="navigate_point_format_D"/>**. W tym formacie współrzędne szerokości i długości geograficznej są zapisywane w formacie dziesiętnym, na przykład 52.37022° szerokości geograficznej i 4.89517° długości geograficznej dla Amsterdamu. Ta metoda wprowadzania jest łatwa w użyciu i jest najczęstsza. Więcej o formacie współrzędnych dziesiętnych można przeczytać [tutaj](https://en.wikipedia.org/wiki/Decimal_degrees).  

- *Zasady wprowadzania*. Współrzędne szerokości i długości geograficznej są zapisywane w formacie dziesiętnym, gdzie szerokość geograficzna mieści się w zakresie od -90 do 90, a długość geograficzna w zakresie od -180 do 180.
- *Najczęstsze zastosowanie*. Współrzędne dziesiętne są szeroko stosowane w aplikacjach nawigacyjnych, urządzeniach GPS, mapach internetowych i innych usługach geopozycjonowania.  

### Stopnie i minuty {#degrees-and-minutes}

![Wyszukiwanie według współrzędnych Android](@site/static/img/search/coordinates_search_DM_andr.png)  

**<Translate android="true" ids="navigate_point_format_DM"/>**. W tym formacie współrzędne szerokości i długości geograficznej są zapisywane przy użyciu stopni i minut. Na przykład 37:46.29 szerokości geograficznej i -122:25.10 długości geograficznej dla San Francisco. Ten format może być mniej dokładny, a jego wprowadzenie może zająć więcej czasu.
- *Zasady wprowadzania*. Współrzędne szerokości i długości geograficznej są zapisywane w formacie wykorzystującym stopnie (:) i minuty (:).
- *Najczęstsze zastosowanie*. Format DM jest często spotykany w nawigacji morskiej, lotnictwie, astronomii i systemach map topograficznych.

### Stopnie, minuty i sekundy {#degrees-minutes-and-seconds}

![Wyszukiwanie według współrzędnych Android](@site/static/img/search/coordinates_search_DMS_andr.png)  

**<Translate android="true" ids="navigate_point_format_DMS"/>**. Format współrzędnych DMS zapisuje współrzędne geograficzne, w których wartości podawane są w stopniach, minutach i sekundach. Stopnie (DDD) mogą przyjmować wartości od 0 do 180 dla długości geograficznej i od 0 do 90 dla szerokości geograficznej. Wartości dodatnie oznaczają długość geograficzną wschodnią i szerokość geograficzną północną, a wartości ujemne oznaczają długość geograficzną zachodnią i szerokość geograficzną południową. Minuty (MM) mogą przyjmować wartości od 0 do 59. Sekundy (SS.S) reprezentują ułamek dziesiętny sekundy i również mogą wynosić od 0 do 59,9.
- *Zasady wprowadzania*. Współrzędne szerokości i długości geograficznej są zapisywane w formacie wykorzystującym stopnie (:), minuty (:) i sekundy (.).
- *Najczęstsze zastosowanie*. Format DMS jest szeroko stosowany w geodezji, aplikacjach nawigacyjnych, kartografii, astronomii i innych dziedzinach, w których wymagane jest bardziej szczegółowe wyrażenie współrzędnych lokalizacji.

### Uniwersalny poprzeczny układ Mercatora {#universal-transversal-mercator-system}

![Wyszukiwanie według współrzędnych Android](@site/static/img/search/coordinates_search_UTM_andr.png)  

**<Translate android="true" ids="navigate_point_format_utm"/>**. W tym formacie współrzędne są określane za pomocą strefy UTM, kierunków wschodniego i północnego. Na przykład dla Amsterdamu współrzędne mogą wyglądać następująco: strefa 31, kierunek wschodni 581000, kierunek północny 5809000. Wprowadzanie współrzędnych w formacie UTM może wymagać pewnej znajomości systemu i być bardziej złożone niż w przypadku innych formatów, ale zapewnia dobrą dokładność i spełnia światowe standardy geopozycjonowania. Więcej o formacie UTM można przeczytać [tutaj](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system).
- *Zasady wprowadzania*. Współrzędne są zapisywane w formacie wykorzystującym strefę UTM oraz przesunięcia wschodnie i północne.
- *Najczęstsze zastosowanie*. Format UTM jest często używany w geodezji, kartografii i systemach informacji geograficznej do pomiarów i nawigacji.

### Open Location Code {#open-location-code} 

![Wyszukiwanie według współrzędnych Android](@site/static/img/search/coordinates_search_OLC_andr.png)  

**<Translate android="true" ids="navigate_point_format_olc"/>**  ((OLC) - 9F2X4WFJ+7W (Open Location Code represents area 9m x 14m)), znany również jako **Plus Code**, to globalny system kodowania lokalizacji. Jest to kombinacja liter i cyfr wskazująca szerokość i długość geograficzną dowolnej lokalizacji na planecie. Przykład kodu OLC dla Amsterdamu: 9F3WCVWG+FP. W tym przykładzie „9F3WCVWG” oznacza zgrubną siatkę, a „+FP” określa lokalizację w tym obszarze. Przeczytaj więcej [tutaj](https://en.wikipedia.org/wiki/Open_Location_Code).
- *Zasady wprowadzania*.  
     - Kod OLC składa się z 4 do 14 znaków, którymi mogą być litery od „C” do „Z” (z wyjątkiem „I” i „O”) oraz cyfry od „2” do „9”.
     - Kod zaczyna się od globalnego prefiksu wskazującego kontynent lub obszar.
     - Następnie następują grupy znaków oddzielone kropkami. Każda grupa reprezentuje węższy obszar.
    - W celu doprecyzowania lokalizacji, litery i cyfry są uzupełniane innymi znakami w kodzie OLC.  
- *Najczęstsze zastosowanie*. OLC jest często używany na obszarach, gdzie dokładne adresy nie są dostępne lub są trudne do ustalenia, takich jak odległe obszary, pustynie lub oceany. Jest również szeroko stosowany w aplikacjach i usługach związanych z geopozycjonowaniem, dostawami, służbami ratunkowymi i innymi obszarami, w których wymagana jest precyzyjna lokalizacja bez użycia tradycyjnych adresów.

### Wojskowy System Odniesienia Siatki {#military-grid-reference-system}

![Wyszukiwanie według współrzędnych Android](@site/static/img/search/coordinates_search_MGRS_andr.png)  

**<Translate android="true" ids="navigate_point_mgrs"/>**. To system współrzędnych często używany w zastosowaniach wojskowych. Opiera się na systemie UTM i jest uzupełniony dodatkową siatką kwadratów. Przykład współrzędnych w formacie MGRS dla lokalizacji w Australii może wyglądać następująco: 55HBE1234567890. W tym przykładzie „55H” reprezentuje strefę MGRS, a „BE” reprezentuje kwadrat, w którym znajduje się lokalizacja. „123456” reprezentuje przesunięcie na wschód, a „7890” reprezentuje przesunięcie na północ w obrębie tego kwadratu. MGRS są szeroko stosowane w obszarach wymagających dużej dokładności i georeferencji. Są szczególnie przydatne w środowiskach, w których adresy mogą nie być jasne lub dostępne, takich jak operacje wojskowe lub wyprawy w odległe obszary. Więcej o formacie MGRS można przeczytać [tutaj](https://en.wikipedia.org/wiki/Military_Grid_Reference_System).  
- *Zasady wprowadzania*. Współrzędne składają się ze strefy MGRS, kwadratu i dwóch kolejnych cyfr wskazujących przesunięcia na wschód i północ.
- *Najczęstsze zastosowanie*. Format MGRS jest szeroko stosowany w nawigacji i komunikacji wojskowej, a także może być przydatny dla entuzjastów outdooru i turystów pieszych.

### Szwajcarska siatka {#swiss-grid}

![Wyszukiwanie według współrzędnych Android](@site/static/img/search/coordinates_search_Swiss_andr.png)  

**Szwajcarski system współrzędnych**. Swiss Grid (CH1903) i Swiss Grid (CH1903+) to systemy współrzędnych szeroko stosowane w Szwajcarii do pozycjonowania. Oba formaty bazują na systemie CH1903, który został wprowadzony w 1903 roku i opiera się na odwzorowaniu Szwajcarskiej Siatki Międzynarodowej. Przykładowe współrzędne w formacie Swiss Grid (CH1903) — Wschodnia: 600000; Północna: 200000. W formacie Swiss Grid (CH1903+) — Wschodnia: 600300; Północna: 200400. Więcej o szwajcarskim systemie współrzędnych geograficznych można przeczytać [tutaj](https://en.wikipedia.org/wiki/Swiss_coordinate_system).  
 - *Zasady wprowadzania*.  
    - Współrzędne w formacie CH1903 składają się z dwóch składników: wschodniego i północnego.
    - Wschodni jest podawany w metrach od punktu zwanego Osią Lucerny (zero wschodnie).
    - Północny jest podawany w metrach od równika.
    - Format CH1903+ wykorzystuje te same zasady wprowadzania co CH1903, ale z bardziej precyzyjnymi wartościami.
    - CH1903+ zawiera poprawki uwzględniające przesunięcia współrzędnych spowodowane zmianami ruchów tektonicznych w Szwajcarii.
- *Najczęstsze zastosowanie*. Formaty Swiss Grid (CH1903) i Swiss Grid (CH1903+) są używane w Szwajcarii do pomiarów geodezyjnych, kartografii, systemów informacji geograficznej oraz w budownictwie i inżynierii. Formaty te zapewniają lokalny system współrzędnych specyficzny dla Szwajcarii.


Dla każdego profilu można osobno ustawić inny format współrzędnych. Aby to zrobić, przejdź do *Ustawienia ogólne → [Format współrzędnych](../personal/profiles.md#units--formats)*.


<!--

## Troubleshooting {#troubleshooting}

https://github.com/osmandapp/OsmAnd/issues/14081  

https://github.com/osmandapp/OsmAnd/issues/16114  

https://github.com/osmandapp/OsmAnd/issues/14081  

-->


## Powiązane artykuły {#related-articles}

- [Wyszukaj wszystko](./search-all.md)
- [Wyszukiwanie adresu](./search-address.md)
- [Wprowadzanie współrzędnych](../plan-route/coordinate-input.md)
- [Menu kontekstowe mapy](../map/map-context-menu.md)
- [Informacyjne widżety](../widgets/info-widgets.md)
- [Mapy wektorowe](../map/vector-maps.md)