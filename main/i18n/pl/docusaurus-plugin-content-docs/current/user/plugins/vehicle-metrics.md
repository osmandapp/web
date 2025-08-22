---
source-hash: 7cce24b2cd87bfae38687f74d452a20648b7bb08c58e4e9a6b8489cb8398e2a2
sidebar_position: 16
title: Metryki pojazdu
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


## Przegląd {#overview}

:::info Funkcja płatna
Wtyczka Metryki pojazdu to [płatna funkcja](../purchases/index.md) aplikacji OsmAnd. Informacje o prędkości pojazdu i prędkości obrotowej silnika są dostępne w bezpłatnej wersji OsmAnd.
:::

**Wtyczka Metryki pojazdu** umożliwia monitorowanie danych pojazdu w czasie rzeczywistym za pośrednictwem [protokołu OBD-II](https://en.wikipedia.org/wiki/OBD-II_PIDs). Użytkownicy mogą śledzić kluczowe metryki, takie jak osiągi silnika, zużycie paliwa i prędkość, co pozwala na proaktywną konserwację i rozwiązywanie problemów z pojazdem.

[Skanery OBD-II](https://en.wikipedia.org/wiki/ELM327) są integralną częścią nowoczesnej diagnostyki samochodowej. Dzięki strumieniowaniu danych w czasie rzeczywistym użytkownicy uzyskują natychmiastowy wgląd w systemy pojazdu, co ułatwia konserwację zapobiegawczą i zmniejsza koszty napraw. Narzędzia te są niezbędne zarówno do użytku osobistego, jak i profesjonalnych usług motoryzacyjnych.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OBD settings](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OBD settings](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Wymagane parametry konfiguracji {#required-setup-parameters}

Aby korzystać z danych ze skanera OBD-II:

1. [Kup](../purchases/) **subskrypcję OsmAnd Pro**. (*Prędkość pojazdu* i *Prędkość obrotowa silnika* są bezpłatne.)
2. [Włącz](../plugins/index.md#enable--disable) wtyczkę Metryki pojazdu w sekcji Wtyczki w *Menu głównym*.
3. **Włącz** Bluetooth na swoim urządzeniu.
4. [Podłącz](#pair-odb-ii-scanner) skaner OBD-II do portu pojazdu.
5. [Skonfiguruj](#scanner-settings) **ustawienia skanera**.
6. [Dodaj](#widgets) **widżety Metryki pojazdu** do wyświetlania danych na ekranie (opcjonalnie).
7. [Użyj](#trip-recording) **wtyczki Nagrywanie trasy** do rejestrowania danych pojazdu.


### Parowanie skanera ODB-II {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|  |  |
|--|--|
|![OBD connection](@site/static/img/plugins/obd/obd_connect.png)|![OBD connection](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|  |  |
|--|--|
|![OBD connection](@site/static/img/plugins/obd/obd_connect_ios.png)|![OBD connection](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Podłącz skaner do portu pojazdu i sparuj go za pośrednictwem aplikacji:

- Przejdź do *Menu → Wtyczki → Metryki pojazdu → Ustawienia → Połącz* lub **+**.
- Jeśli Metryki pojazdu są w *Menu głównym*: *Menu → Metryki pojazdu → Ustawienia → Połącz* lub **+**.

Wybierz swoje urządzenie OBD-II z listy i nawiąż połączenie.


## Ustawienia skanera {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Przejdź do: *Menu → Wtyczki → Metryki pojazdu → OBD → menu z trzema kropkami*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Przejdź do: *Menu → Wtyczki → Metryki pojazdu → OBD → menu z trzema kropkami*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings_ios.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Połącz / Rozłącz**. Nawiązuje lub przerywa połączenie z czujnikiem OBD-II.
- **Ustawienia**. Otwiera ekran ustawień OBD-II, umożliwiając zarządzanie połączeniami i dostęp do dostępnych parametrów pojazdu.
- **Zmień nazwę**. Pozwala przypisać niestandardową nazwę czujnikowi w celu łatwiejszej identyfikacji.
- **Zapomnij**. Usuwa wcześniej sparowany czujnik OBD-II z listy, wymagając ponownego parowania, jeśli będzie potrzebny później.


## Lista metryk {#metrics-list}

Metryki są kategoryzowane dla przejrzystości. Zaawansowane narzędzia diagnostyczne umożliwiają konserwację zapobiegawczą poprzez interpretację tych parametrów:

*Temperatura:*

- **Temperatura powietrza dolotowego**. Wyświetla temperaturę powietrza wchodzącego do kolektora dolotowego.
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

- **Poziom naładowania akumulatora**. Wskazuje poziom napięcia akumulatora pojazdu.
- **Prędkość pojazdu**. Wyświetla dane z czujnika prędkości pojazdu (VSS).
- **Położenie przepustnicy**. Określa dopływ powietrza do silnika poprzez kąt otwarcia przepustnicy.
  **VIN**. Wyświetla 17-znakowy numer identyfikacyjny pojazdu.


## Nagrywanie trasy {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android**. Przejdź do: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![OBD recording](@site/static/img/plugins/obd/obd_recording.png)| ![OBD recording](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. Przejdź do: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![OBD recording](@site/static/img/plugins/obd/obd_recording_ios.png)| ![OBD recording](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



Aby uwzględnić dane OBD-II w pliku GPX, należy wybrać żądane parametry do nagrywania za pomocą [wtyczki Nagrywanie trasy](../plugins/trip-recording.md#recording-settings). Pozwala to analizować metryki pojazdu wraz z danymi trasy.

#### Tagi {#tags}

OsmAnd stosuje niestandardowe nazwy tagów dla metryk pojazdu w [pliku GPX](../plugins/trip-recording.md#recorded-gpx-file). Na przykład:

- `vm_eotemp`: Temperatura oleju silnikowego.
- `vm_fpress`: Ciśnienie paliwa.
- `vm_espeed`: Prędkość obrotowa silnika.

Te tagi ułatwiają identyfikację i wykorzystanie konkretnych danych pojazdu podczas przeglądania nagranego pliku GPX.


## Widżety {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Przejdź do: *Menu → Konfiguruj ekran → Widżety → Wybierz panel → Metryki pojazdu*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_1.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Przejdź do: *Menu → Konfiguruj ekran → Widżety → Wybierz panel → Metryki pojazdu*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



[Widżety Metryki pojazdu](../widgets/info-widgets.md#vehicle-metrics-widgets) są automatycznie dołączane po włączeniu wtyczki. Jeśli nie są widoczne, możesz je ręcznie dodać za pośrednictwem menu [Konfiguruj ekran](../widgets/configure-screen.md).

### Ustawienia widżetów {#widget-settings}

Widżety wyświetlają kluczowe dane z podłączonego urządzenia OBD-II w czasie rzeczywistym, takie jak prędkość, metryki silnika i zużycie paliwa. Upewnij się, że są widoczne przed rozpoczęciem podróży, aby bezproblemowo śledzić metryki.

Niektóre widżety oferują opcje trybu wyświetlania:

- **Natychmiastowy**. Wyświetla dane w czasie rzeczywistym dla wybranej metryki.
- **Średnia**. Wyświetla uśrednione wartości w konfigurowalnym przedziale czasowym (od 15 sekund do 60 minut).


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: sierpień 2025*