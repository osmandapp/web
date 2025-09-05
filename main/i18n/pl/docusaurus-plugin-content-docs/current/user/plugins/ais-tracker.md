---
source-hash: eafb2c57934c3fbb3a094db82d063658f9ebd6dc575f16b51dfce4826f7df701
sidebar_position: 2
title: AIS Vessel Tracker
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

<InfoAndroidOnly />

## Przegląd {#overview}

Wtyczka **AIS Vessel Tracker** wyświetla pozycje [Automatycznego Systemu Identyfikacji (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) i szczegółowe informacje o pobliskich statkach. Dane AIS są odbierane przez połączenie sieciowe z zewnętrznego odbiornika AIS.

:::caution OSTRZEŻENIE
**Ta wtyczka jest projektem hobbystycznym i nie jest przeznaczona do zapewnienia niezawodności ani dokładności. NIE NALEŻY polegać na tym oprogramowaniu w celach nawigacyjnych ani dla bezpieczeństwa życia.**
:::


## Wymagane parametry konfiguracji {#required-setup-parameters}

Możliwość korzystania z map online jest automatycznie włączona w wersji OsmAnd na iOS. Aby wyświetlać mapy online w systemie Android, należy dokonać następujących ustawień:

1. [Włącz](../plugins/index.md#enable--disable) wtyczkę **AIS vessel tracker** w *Menu głównym → Wtyczki → AIS vessel tracker*.
2. Skonfiguruj [ustawienia AIS](../map/raster-maps.md#select-raster-maps).
3. Skonfiguruj **połączenie z serwerem AIS** lub podłącz **zewnętrzny odbiornik AIS**.
4. Sprawdź, czy statki są wyświetlane na mapie OsmAnd.

## Statki na mapie {#vessels-on-the-map}

AIS działa na *częstotliwościach VHF* (161,975 MHz i 162,025 MHz) i ma ograniczony zasięg sygnału ze względu na propagację w linii wzroku.

***Typowy zasięg odbioru AIS:***

- 15–20 mil morskich (28–37 km)
- Zależy od wysokości anteny, warunków środowiskowych i przeszkód

***Wyświetlanie AIS na mapie:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS vessel tracker](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Po prawidłowej konfiguracji, pozycje statków pojawią się na mapie. Kluczowe cechy:

- Statki poruszają się w oparciu o prędkość i kurs w czasie rzeczywistym.
- Nowe statki dynamicznie wchodzą i wychodzą z widocznego obszaru.
- Dotknięcie statku otwiera szczegółowe informacje.


### Informacje o statku AIS {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS vessel tracker](@site/static/img/plugins/ais/ais_menu.png)  
![AIS vessel tracker](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

Statki AIS przesyłają trzy typy danych:

1. Informacje statyczne (niezmienne dane).  
    *Wysyłane co **6 minut** lub na żądanie.*

    - **Nazwa statku** (*jeśli ustawiona*)  
    - **MMSI (Maritime Mobile Service Identity)** (*Unikalny 9-cyfrowy identyfikator statku*)
    - **Numer IMO** (*jeśli dostępny*)  
    - **Znak wywoławczy**  
    - **Typ statku** (*np. statek towarowy, pasażerski, rybacki*)  
    - **Wymiary statku** (*Długość i szerokość*)  
    - **Pozycja anteny AIS** (*Względem kadłuba statku*)  

2. Informacje dynamiczne (dane w czasie rzeczywistym).  
    *Wysyłane w różnych odstępach czasu w zależności od prędkości i manewrowania.*

    - **Współrzędne statku (szerokość i długość geograficzna)**  
    - **Kurs nad dnem (COG)**  
    - **Prędkość nad dnem (SOG)**  
    - **Kurs** (*Kierunek, w którym skierowany jest dziób*)
    - **Status statku** (*W drodze, zakotwiczony, manewrujący itp.*)  
    - **Szybkość obrotu (ROT)** (*Szybkość zmiany kursu*)  
    - **Czas ostatniej aktualizacji**  

3. Informacje o podróży (ustawiane ręcznie przez załogę).  
    *Wysyłane co **6 minut**, ustawiane ręcznie przez załogę*

    - **Port docelowy**
    - **Szacowany czas przybycia (ETA)**  
    - **Zanurzenie** (*Głębokość statku pod powierzchnią wody*)  
    - **Typ ładunku** (*jeśli przesłany*)
    - **Liczba osób na pokładzie** (*opcjonalnie*)  

### Symbole i legendy AIS {#ais-symbols-and-legends}

[Wytyczne dotyczące prezentacji symboli AIS](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Symbole             | Opis   |
|---------------------|---------------|
| | |
| **Symbole typów statków** |    |
| *Zielony trójkąt*    | Statek towarowy    |
| *Niebieski trójkąt*     | Statek pasażerski |
| *Czarny trójkąt*    | Statek rybacki |
| *Żółty trójkąt*   | Holownik       |
| *Czerwony trójkąt*      | Tankowiec        |
| *Biały trójkąt*    | Statek wojskowy |
| *Pomarańczowy trójkąt*   | Jednostka specjalna (np. pilot, lodołamacz) |
| *Migający czerwony trójkąt* | Statek w niebezpieczeństwie |
| | |
| **Symbole pomocy nawigacyjnych** |    |
| *Zielona boja*              | Oznakowanie prawej burty (prawa strona kanału) |
| *Czerwona boja*                | Oznakowanie lewej burty (lewa strona kanału) |
| *Symbol kotwicy*           | Obszar kotwiczenia |
| *Symbol statku (SS)*        | Terminal promowy lub pasażerski |
| *Symbol dźwigu portowego*       | Port towarowy |
| *Czarne koło*            | Platforma morska |
| | |
| **Wskaźniki statusu** |    |
| *Pełny trójkąt*  | Poruszający się statek |
| *Pusty trójkąt* | Zakotwiczony lub zacumowany |
| *Obracająca się strzałka*  | Wykonuje manewr |
| *Czerwona migająca ikona* | Alarm awaryjny |
| *Pomarańczowy wykrzyknik* | Wiadomość bezpieczeństwa AIS |
| | |
| **Wskaźniki trasy i prędkości** |    |
| *Cienka niebieska linia*  | Planowana trasa |
| *Linia przerywana*     | Poprzedni tor |
| *Ikona zegara*      | Szacowany czas przybycia (ETA) |
| *Ikona fali*       | Prędkość nad wodą |

## Ustawienia wtyczki {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![AIS settings](@site/static/img/plugins/ais/ais_settings_2.png)  

</TabItem>

</Tabs>

Wtyczka *AIS vessel tracker* oferuje różne ustawienia, aby spersonalizować nawigację i interakcję dla użytkowników z niepełnosprawnościami. Ustawienia te są stosowane dla wszystkich [profili](../personal/profiles.md) w OsmAnd.

| Ustawienie | Opis | Przykład |
|---|---|---|
| | | |
| **Ustawienia adresu IP** | | |
| Protokół | Wybierz protokół do odbierania danych AIS | `UDP/TCP` |
| Adres IP | Zdefiniuj adres IP źródła danych AIS (jeśli używany jest TCP) | `192.168.200.16` |
| Port TCP | Zdefiniuj numer portu TCP dla danych AIS | `4001` |
| Port UDP | Zdefiniuj port UDP dla odbioru AIS w OsmAnd | `10110` |
| | | |
| **Limit czasu odbioru sygnału AIS** | | |
| Limit czasu dla utraconych obiektów AIS | Statki znikają, jeśli sygnał nie jest odbierany przez określony czas | `3 - 20 min` |
| Limit czasu widoczności statku | Ikony statków zmienią stan, gdy sygnał nie będzie odbierany | `2 - 15 min / Wyłączone` |
| | | |
| **Alerty o najbliższym punkcie zbliżenia (CPA)** | | |
| Czas ostrzeżenia CPA | Statek jest oznaczony na czerwono, jeśli czas do CPA jest poniżej tego limitu | `1 - 60 min / Wyłączone` |
| Odległość ostrzeżenia CPA | Statek jest oznaczony na czerwono, jeśli odległość do CPA jest poniżej tego limitu | `0.02 - 2 mile morskie` |


### Tryb symulacji AIS {#ais-simulation-mode}

> *Możesz symulować pozycje statków AIS za pomocą [wtyczki OsmAnd Development](../plugins/development.md).*

1. **Pobierz pliki tekstowe danych AIS**:

    - [AIS Test 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [AIS Test 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Single 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Załaduj dane AIS do OsmAnd**  
Otwórz *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* i wybierz jeden z pobranych plików.

3. **Wyświetl statki AIS na mapie**  
Ikony statków pojawią się na podstawie symulowanych danych. Dotknij ikony statku, aby wyświetlić szczegółowe informacje.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)
- [Wtyczka morska](../../user/plugins/nautical-charts.md)

> *Ostatnia aktualizacja: marzec 2025*