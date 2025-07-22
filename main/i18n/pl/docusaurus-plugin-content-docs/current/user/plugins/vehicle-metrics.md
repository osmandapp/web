---
source-hash: 3285f0c719a8255c35a044a6bccdc05206d01216a9c0d4f8c30f58b3a9122f36
sidebar_position: 16
title:  Dane pojazdu
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>

<InfoAndroidOnly/>

## Przegląd {#overview}

:::info Funkcja płatna
Wtyczka Dane pojazdu to [płatna funkcja](../purchases/index.md) aplikacji OsmAnd.
:::

**Wtyczka Dane pojazdu** umożliwia monitorowanie danych pojazdu w czasie rzeczywistym za pośrednictwem protokołu OBD-II. Użytkownicy mogą śledzić istotne dane, takie jak wydajność silnika, zużycie paliwa i prędkość, co pozwala na proaktywną konserwację i rozwiązywanie problemów z pojazdem.

Skanery OBD-II są integralną częścią nowoczesnej diagnostyki samochodowej. Dzięki strumieniowemu przesyłaniu danych w czasie rzeczywistym, użytkownicy uzyskują natychmiastowy wgląd w systemy pojazdu, co ułatwia konserwację zapobiegawczą i zmniejsza koszty napraw. Narzędzia te są niezbędne zarówno do użytku osobistego, jak i profesjonalnych usług motoryzacyjnych.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

</Tabs>


## Wymagane parametry konfiguracji {#required-setup-parameters}

Aby korzystać z danych ze skanera OBD-II:

1. [Kup](../purchases/) **subskrypcję OsmAnd Pro**. (*Prędkość pojazdu* i *Prędkość obrotowa silnika* są bezpłatne.)
2. [Włącz](../plugins/index.md#enable--disable) wtyczkę Dane pojazdu w sekcji Wtyczki w *Menu głównym*.
3. **Włącz** Bluetooth na swoim urządzeniu.
4. [Podłącz](#pair-odb-ii-scanner) skaner OBD-II do portu pojazdu.
5. [Skonfiguruj](#scanner-settings) **ustawienia skanera**.
6. [Dodaj](#widgets) **widżety Dane pojazdu** do wyświetlania danych na ekranie (opcjonalnie).
7. [Użyj](#trip-recording) **wtyczki Rejestrator podróży** do rejestrowania danych pojazdu.


### Sparuj skaner ODB-II {#pair-odb-ii-scanner}

| | |
|--|--|
|![Połączenie OBD](@site/static/img/plugins/obd/obd_connect.png)|![Połączenie OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

Podłącz skaner do portu pojazdu i sparuj go za pośrednictwem aplikacji:

- Przejdź do *Menu → Wtyczki → Dane pojazdu → Ustawienia → Połącz* lub **+**.
- Jeśli Dane pojazdu są w *Menu głównym*: *Menu → Dane pojazdu → Ustawienia → Połącz* lub **+**.

Wybierz swoje urządzenie OBD-II z listy i nawiąż połączenie.


## Ustawienia skanera {#scanner-settings}

**Android.** Przejdź do: *Menu → Wtyczki → Dane pojazdu → OBD → menu z trzema kropkami*

| | |
|--|--|
|![Ustawienia OBD](@site/static/img/plugins/obd/obd_settings.png)|![Ustawienia OBD](@site/static/img/plugins/obd/obd_settings_1.png)|

- **Połącz / Rozłącz**. Nawiązuje lub kończy połączenie z czujnikiem OBD-II.
- **Ustawienia**. Otwiera ekran ustawień OBD-II, umożliwiając zarządzanie połączeniami i dostęp do dostępnych parametrów pojazdu.
- **Zmień nazwę**. Pozwala przypisać niestandardową nazwę czujnikowi dla łatwiejszej identyfikacji.
- **Zapomnij**. Usuwa wcześniej sparowany czujnik OBD-II z listy, wymagając ponownego sparowania, jeśli będzie potrzebny później.


## Lista danych {#metrics-list}

Dane są kategoryzowane dla przejrzystości. Zaawansowane narzędzia diagnostyczne umożliwiają konserwację zapobiegawczą poprzez interpretację tych parametrów:

*Temperatura:*

- **Temperatura powietrza wlotowego**. Wyświetla temperaturę powietrza wchodzącego do kolektora dolotowego.
- **Temperatura otoczenia**. Monitoruje warunki zewnętrzne.
- **Temperatura płynu chłodzącego**. Śledzi wydajność chłodzenia silnika.
- **Temperatura oleju silnikowego**. Wyświetla stan oleju podczas pracy.

*Silnik:*

- **Prędkość obrotowa silnika**. Monitoruje obroty silnika na minutę (RPM).
- **Czas pracy silnika**. Śledzi czas pracy silnika.
- **Obliczone obciążenie silnika**. Wskazuje procent obciążenia silnika.

*Paliwo:*

- **Ciśnienie paliwa**. Wskazuje ciśnienie w układzie paliwowym.
- **Zużycie paliwa**. Oblicza zużycie paliwa przez pojazd.
- **Pozostałe paliwo**. Wskazuje poziom paliwa w pojeździe.

*Inne:*

- **Poziom baterii**. Wskazuje poziom napięcia akumulatora pojazdu.
- **Prędkość pojazdu**. Wyświetla dane z czujnika prędkości pojazdu (VSS).
- **Położenie przepustnicy**. Określa pobór powietrza przez silnik za pomocą kąta otwarcia przepustnicy.
**VIN**. Wyświetla 17-znakowy numer identyfikacyjny pojazdu.


## Rejestrowanie podróży {#trip-recording}

**Android**. Przejdź do: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![Rejestrowanie OBD](@site/static/img/plugins/obd/obd_recording.png)| ![Rejestrowanie OBD](@site/static/img/plugins/obd/obd_recording_1.png)|

Aby uwzględnić dane OBD-II w pliku GPX, należy wybrać żądane parametry do rejestrowania za pomocą [wtyczki Rejestrator podróży](../plugins/trip-recording.md#recording-settings). Pozwala to na analizę danych pojazdu wraz z danymi podróży.

#### Tagi {#tags}

OsmAnd stosuje niestandardowe nazwy tagów dla danych pojazdu w [pliku GPX](../plugins/trip-recording.md#recorded-gpx-file). Na przykład:

- `vm_eotemp`: Temperatura oleju silnikowego.
- `vm_fpress`: Ciśnienie paliwa.
- `vm_espeed`: Prędkość obrotowa silnika.

Te tagi ułatwiają identyfikację i wykorzystanie konkretnych danych pojazdu podczas przeglądania zarejestrowanego pliku GPX.


## Widżety {#widgets}

**Android.** Przejdź do: *Menu → Konfiguruj ekran → Widżety → Wybierz panel → Dane pojazdu*

| | |
|--|--|
|![Ustawienia OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![Ustawienia OBD](@site/static/img/plugins/obd/obd_widget.png)|

[Widżety Dane pojazdu](../widgets/info-widgets.md#vehicle-metrics-widgets) są automatycznie dołączane po włączeniu wtyczki. Jeśli nie są widoczne, można je ręcznie dodać za pośrednictwem menu [Konfiguruj ekran](../widgets/configure-screen.md).

### Ustawienia widżetów {#widget-settings}

Widżety wyświetlają kluczowe dane z podłączonego urządzenia OBD-II w czasie rzeczywistym, takie jak prędkość, dane silnika i zużycie paliwa. Upewnij się, że są widoczne przed rozpoczęciem podróży, aby bezproblemowo śledzić dane.

Niektóre widżety oferują opcje trybu wyświetlania:

- **Natychmiastowy**. Wyświetla dane w czasie rzeczywistym dla wybranej wartości.
- **Średnia**. Wyświetla uśrednione wartości w konfigurowalnym przedziale czasowym (od 15 sekund do 60 minut).


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: grudzień 2024*