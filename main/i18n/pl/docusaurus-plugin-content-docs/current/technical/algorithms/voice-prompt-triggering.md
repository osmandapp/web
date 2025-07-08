---
source-hash: ce62f6fd113ba54378f5dc39e541fa7e711306a641c814ab9db60c61a6c63dd1
sidebar_position: 4
---
import Translate from '@site/src/components/Translate.js';


# Wyzwalanie komunikatów głosowych nawigacji {#navigation-voice-prompt-triggering}

                               
**(Opracowane przez Hardy'ego 2013, przerobione 2023-08)**
## Zasada i powiązane ustawienia {#principle-and-related-settings}
* Komunikaty są wyzwalane na podstawie progu **odległości wyprzedzenia**, wyznaczonego przez konwersję określonego czasu wyprzedzenia za pomocą **_<Translate android="true" ids="default_speed_setting_title" />_** profilu. W przypadku komunikatów z bliska, ta odległość wyprzedzenia może być następnie dostosowana na podstawie rzeczywistej prędkości: zwiększona, aby zapewnić, że ogłoszenie zostanie wyzwolone wystarczająco wcześnie przy wysokich prędkościach, lub zmniejszona dla większej precyzji przy niskich prędkościach.
* **_<Translate android="true" ids="default_speed_setting_title" />_** profilu jest regulowana przez użytkownika, a jej zmiana wpłynie na odległości wyzwalania komunikatów głosowych.
*Uwaga*: _<Translate android="true" ids="default_speed_setting_title" />_ wpływa również na obliczony czas trasy.
* Czas komunikatów głosowych można również dostosować za pomocą ustawienia **_<Translate android="true" ids="arrival_distance" />_**. Sprawdź kolumnę „Ustawienia przyjazdu” poniżej, aby zobaczyć, które komunikaty głosowe zostaną zmienione. Odległość wyzwalania zostanie pomnożona przez następujący współczynnik:

**<Translate android="true" ids="arrival_distance" />** | Mnożnik odległości
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25
* Ponadto istnieje konfigurowalne przez użytkownika ogólne **_Opóźnienie komunikatów głosowych_** (regulowane w _wtyczce deweloperskiej OsmAnd_, _Tekstowe komunikaty głosowe_, przycisk 11.2). Jest to szczególnie potrzebne w przypadku typu wyjścia _Dźwięk połączenia telefonicznego_, gdzie emulujemy połączenie z radiem samochodowym, co powoduje pewne opóźnienie, aby uniknąć obcięcia początku komunikatów. (Wszystkie odległości ogłoszone w komunikatach będą przewidywać wszelkie _Opóźnienia komunikatów głosowych_.)
* Komunikaty są natychmiast wyciszane, gdy odnoszą się do nieaktualnych zdarzeń lub gdy kierunek jazdy nie jest zgodny z bieżącą trasą.

## Domyślne prędkości profilu podstawowego {#base-profile-default-speeds}
Chociaż można je dostosować, domyślne wartości to:
* Jazda: 12,5 m/s (45 km/h)
* Jazda na rowerze: 2,78 m/s (10 km/h)
* Chodzenie: 1,11 m/s (4 km/h)
* Łódź: 1,39 m/s (5 km/h)
* Narty: 1,39 m/s (5 km/h)
* Samolot: 40 m/s (144 km/h)

## Tabela wyzwalaczy {#trigger-table}

Wyzwalacze znajdują się [tutaj w kodzie](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/routing/data/AnnounceTimeDistances.java#L65). Odpowiednie wartości dla domyślnych ustawień OsmAnd to:

Typ komunikatu | Czas wyprzedzenia [s]:<br/>Odpowiadająca<br/>Odległość wyprzedzenia przy domyślnej prędkości [m] | Odległość wyprzedzenia dostosowana do rzeczywistej prędkości? | Regulowane przez ustawienie przyjazdu? | Komentarz |
--- | --- | --- | --- | --- |
Skręć teraz | **6,7 s / 3,2 s / 2 s:**<br/>Jazda: 83 m<br/>Jazda na rowerze: 12(8) m<br/>Chodzenie: 12(2) m | :heavy_check_mark: (Proporcjonalnie do *rzeczywistej prędkości / domyślnej prędkości*) | :heavy_check_mark: | Czas wyprzedzenia (heurystycznie) = _max(8, sqrt(Domyślna prędkość * 3,6))_. Odpowiadająca odległość wyprzedzenia jest zaokrąglana w dół do 12 m, aby uwzględnić niedokładność pozycji. |
Skręć za X m | **22 s:**<br/>Jazda: 275 m<br/>Jazda na rowerze: 61 m<br/>Chodzenie: 24 m | :heavy_check_mark: (Tylko zwiększenie) |  | Pominięte, jeśli < 15 s przed zakrętem |
Przygotuj się do skrętu za X m | **115 s:**<br/>Jazda: 1438 m<br/>Jazda na rowerze: 319 m<br/>Chodzenie: - |  |  | Pominięte, jeśli < 150 m przed „Skręć za”, pominięte dla _Domyślnej prędkości_ < 8 km/h |
Długie przygotowanie do skrętu za X m | **300 s:**<br/>Jazda: -<br/>Jazda na rowerze: -<br/>Chodzenie: - |  |  | Pominięte dla _Domyślnej prędkości_ < 108 km/h |
Jedź prosto | **>300 s:**<br/>Jazda: 3750 m<br/>Jazda na rowerze: 833 m<br/>Chodzenie: 333 m | | | Odtwarzane po obliczeniu trasy, jeśli nie ma innych komunikatów, lub po zakręcie, jeśli następny zakręt jest dalej niż _Długie przygotowanie_ |
Przyjazd do celu lub punktu pośredniego | **5 s:**<br/>Jazda: 63 m<br/>Jazda na rowerze: 14 m<br/>Chodzenie: 6(12) m | |:heavy_check_mark: | Minimum 12 m |
Zbliżanie się do punktu trasy / ulubionego miejsca / POI | **60 s:**<br/>Jazda: 750 m<br/>Jazda na rowerze: 167 m<br/>Chodzenie: 67 m | :heavy_check_mark: (Tylko zwiększenie) | :heavy_check_mark: | Ograniczone do maks. 1 punktu na raz |
Przejazd przez punkt trasy / ulubione miejsce / POI | **15 s:**<br/>Jazda: 188 m<br/>Jazda na rowerze: 42 m<br/>Chodzenie: 17 m | :heavy_check_mark: (Tylko zwiększenie) | :heavy_check_mark: | Ograniczone do maks. 3 punktów na raz |
Standardowy alarm | **12 s:**<br/>Jazda: 150 m<br/>Jazda na rowerze: 33 m<br/>Chodzenie: 13 m | :heavy_check_mark: (Tylko zwiększenie) | :heavy_check_mark: |
Alarm bliskości | **7s:**<br/> Jazda: 88 m<br/>Jazda na rowerze: 20 m<br/>Chodzenie: 8 m | :heavy_check_mark: (Tylko zwiększenie) | :heavy_check_mark: | _Uspokojenie ruchu_ używa alarmu _Przejazd_ dla komunikatu o zbliżaniu się i filtruje duplikaty w tym promieniu |
Komunikat o zboczeniu z trasy | **20 s:**<br/>Jazda: 250m<br/>Jazda na rowerze: 56m<br/>Chodzenie: 22m h| | :heavy_check_mark: | Można wyłączyć |
Utrata sygnału GPS | **20 s** | | | Odtwarzane po utracie sygnału GPS na >= 20 s i nie było to spowodowane działaniem użytkownika. |