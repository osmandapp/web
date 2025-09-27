---
source-hash: e993c17565a6856353f05b6dabe09c469fb505cb96a56e920bca6326fc3eb2e1
sidebar_position: 2
title:  Śledzenie statków AIS
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



<InfoAndroidOnly />

## Przegląd {#overview}

Wtyczka **Śledzenie statków AIS** wyświetla pozycje [Systemu Automatycznej Identyfikacji (AIS)](https://pl.wikipedia.org/wiki/System_Automatycznej_Identyfikacji) oraz szczegółowe informacje o pobliskich jednostkach pływających. Dane AIS są odbierane przez połączenie sieciowe z zewnętrznego odbiornika AIS.

:::caution WYŁĄCZENIE ODPOWIEDZIALNOŚCI
**Ta wtyczka jest projektem hobbystycznym i nie została zaprojektowana z myślą o niezawodności ani dokładności. NIE NALEŻY polegać na tym oprogramowaniu w kwestiach nawigacji lub bezpieczeństwa życia.**
:::


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Możliwość korzystania z map online jest automatycznie włączona w wersji OsmAnd na iOS. Aby wyświetlić mapy online w systemie Android, należy dokonać następujących ustawień:

1. [Włącz](../plugins/index.md#enable--disable) wtyczkę **Śledzenie statków AIS** w *Menu główne → Wtyczki → Śledzenie statków AIS*.
2. Skonfiguruj [ustawienia AIS](../map/raster-maps.md#select-raster-maps).
3. Skonfiguruj **połączenie z serwerem AIS** lub podłącz **zewnętrzny odbiornik AIS**.
4. Sprawdź, czy statki są wyświetlane na mapie OsmAnd.

## Statki na mapie {#vessels-on-the-map}

AIS działa na *częstotliwościach VHF* (161,975 MHz i 162,025 MHz) i ma ograniczony zasięg sygnału ze względu na propagację w linii wzroku.

***Typowy zasięg odbioru AIS:***

- 15–20 mil morskich (28–37 km)
- Zależy od wysokości anteny, warunków otoczenia i przeszkód

***Wyświetlanie AIS na mapie:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Śledzenie statków AIS](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Po prawidłowej konfiguracji pozycje statków pojawią się na mapie. Kluczowe cechy:

- Statki poruszają się w oparciu o prędkość i kurs w czasie rzeczywistym.
- Nowe statki dynamicznie wpływają i wypływają z widocznego obszaru.
- Dotknięcie statku otwiera szczegółowe informacje.


### Informacje o statku AIS {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Śledzenie statków AIS](@site/static/img/plugins/ais/ais_menu.png)  
![Śledzenie statków AIS](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

Statki AIS przesyłają trzy rodzaje danych:

1. Informacje statyczne (dane niezmienne).  
    *Wysyłane co **6 minut** lub na żądanie.*

    - **Nazwa statku** (*jeśli ustawiona*)  
    - **MMSI (Morski Identyfikator Radiowy)** (*Unikalny 9-cyfrowy identyfikator statku*)
    - **Numer IMO** (*jeśli dostępny*)  
    - **Znak wywoławczy**  
    - **Typ statku** (*np. towarowy, pasażerski, rybacki*)  
    - **Wymiary statku** (*długość i szerokość*)  
    - **Pozycja anteny AIS** (*względem kadłuba statku*)  

2. Informacje dynamiczne (dane w czasie rzeczywistym).  
    *Wysyłane w różnych odstępach czasu w zależności od prędkości i manewrowania.*

    - **Współrzędne statku (szerokość i długość geograficzna)**  
    - **Kurs nad dnem (COG)**  
    - **Prędkość nad dnem (SOG)**  
    - **Kurs** (*kierunek, w którym skierowany jest dziób*)
    - **Status statku** (*w drodze, na kotwicy, manewrujący itp.*)  
    - **Prędkość zwrotu (ROT)** (*prędkość zmiany kursu*)  
    - **Czas ostatniej aktualizacji**  

3. Informacje o podróży (ustawiane ręcznie przez załogę).  
    *Wysyłane co **6 minut**, ustawiane ręcznie przez załogę*

    - **Port docelowy**
    - **Szacowany czas przybycia (ETA)**  
    - **Zanurzenie** (*głębokość zanurzenia statku pod powierzchnią wody*)  
    - **Typ ładunku** (*jeśli jest przesyłany*)
    - **Liczba osób na pokładzie** (*opcjonalnie*)  

### Symbole i legendy AIS {#ais-symbols-and-legends}

[Wytyczne dotyczące prezentacji symboli związanych z nawigacją](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Symbole             | Opis   |
|---------------------|---------------|
| | |
| **Symbole typów statków** |    |
| *Zielony trójkąt*    | Statek towarowy    |
| *Niebieski trójkąt*     | Statek pasażerski |
| *Czarny trójkąt*    | Statek rybacki |
| *Żółty trójkąt*   | Holownik       |
| *Czerwony trójkąt*      | Tankowiec        |
| *Biały trójkąt*    | Jednostka wojskowa |
| *Pomarańczowy trójkąt*   | Jednostka specjalna (np. pilot, lodołamacz) |
| *Migający czerwony trójkąt* | Statek w niebezpieczeństwie |
| | |
| **Symbole pomocy nawigacyjnych** |    |
| *Zielona boja*              | Znak prawej strony toru wodnego |
| *Czerwona boja*                | Znak lewej strony toru wodnego |
| *Symbol kotwicy*           | Kotwicowisko |
| *Symbol statku (SS)*        | Terminal promowy lub pasażerski |
| *Symbol dźwigu portowego*       | Port towarowy |
| *Czarny okrąg*            | Platforma morska |
| | |
| **Wskaźniki statusu** |    |
| *Pełny trójkąt*  | Statek w ruchu |
| *Pusty trójkąt* | Na kotwicy lub przycumowany |
| *Obracająca się strzałka*  | W trakcie manewru |
| *Czerwona migająca ikona* | Alert awaryjny |
| *Pomarańczowy wykrzyknik* | Komunikat bezpieczeństwa AIS |
| | |
| **Wskaźniki trasy i prędkości** |    |
| *Cienka niebieska linia*  | Planowana trasa |
| *Linia kropkowana*     | Przebyta trasa |
| *Ikona zegara*      | Szacowany czas przybycia (ETA) |
| *Ikona fali*       | Prędkość względem wody |

## Ustawienia wtyczki {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![Ustawienia AIS](@site/static/img/plugins/ais/ais_settings_2.png)  

</TabItem>

</Tabs>

Wtyczka *Śledzenie statków AIS* oferuje różne ustawienia do personalizacji nawigacji i interakcji dla użytkowników z niepełnosprawnościami. Te ustawienia są stosowane dla wszystkich [profili](../personal/profiles.md) w OsmAnd.

| Ustawienie |  Opis  | Przykład  |
|---------|---------------|----------|
| | | |
| **Ustawienia adresu IP** | | |
| Protokół   | Wybierz protokół do odbierania danych AIS | `UDP/TCP` |
| Adres IP | Zdefiniuj adres IP źródła danych AIS (jeśli używany jest TCP) | `192.168.200.16` |
| Port TCP   | Zdefiniuj numer portu TCP dla danych AIS | `4001` |
| Port UDP   | Zdefiniuj port UDP dla odbioru AIS przez OsmAnd  | `10110` |
| | | |
| **Limit czasu odbioru sygnału AIS** | |  |
| Limit czasu dla utraconych obiektów AIS     | Statki znikają, jeśli sygnał nie zostanie odebrany przez określony czas | `3 - 20 min` |
| Limit czasu widoczności statku      | Ikony statków zmienią stan, gdy sygnał nie zostanie odebrany | `2 - 15 min / Wyłączone` |
| | | |
| **Alerty najbliższego punktu podejścia (CPA)** | | |
| Czas ostrzeżenia CPA | Statek jest oznaczony na czerwono, jeśli czas do CPA jest poniżej tego limitu | `1 - 60 min / Wyłączone` |
| Odległość ostrzeżenia CPA | Statek jest oznaczony na czerwono, jeśli odległość do CPA jest poniżej tego limitu | `0.02 - 2 mile morskie` |


### Tryb symulacji AIS {#ais-simulation-mode}

> *Możesz symulować pozycje statków AIS za pomocą [wtyczki deweloperskiej OsmAnd](../plugins/development.md).*

1. **Pobierz pliki tekstowe z danymi AIS**:

    - [Test AIS 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [Test AIS 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Pojedynczy 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Załaduj dane AIS do OsmAnd**  
Otwórz *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* i wybierz jeden z pobranych plików.

3. **Wyświetl statki AIS na mapie**  
Ikony statków pojawią się na podstawie symulowanych danych. Dotknij ikony statku, aby wyświetlić szczegółowe informacje.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style mapy)](../../user/map/vector-maps.md)
- [Wtyczka map nautycznych](../../user/plugins/nautical-charts.md)