---
source-hash: c693b6d101a1d27afa8ef4aae2115e4338730cd7c671f000edf63199372909f6
sidebar_position: 16
title:  Metryki pojazdu
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


## Przegląd {#overview}

:::info Płatna funkcja
Wtyczka Metryki pojazdu jest [płatną funkcją](../purchases/index.md) aplikacji OsmAnd. Informacje o prędkości pojazdu i prędkości obrotowej silnika są dostępne za darmo w OsmAnd.
:::

**Wtyczka Metryki pojazdu** umożliwia monitorowanie danych pojazdu w czasie rzeczywistym za pośrednictwem [protokołu OBD-II](https://en.wikipedia.org/wiki/OBD-II_PIDs). Użytkownicy mogą śledzić podstawowe wskaźniki, takie jak wydajność silnika, wydajność paliwową i prędkość, co pozwala na proaktywną konserwację i rozwiązywanie problemów z pojazdem.  

[Skanery OBD-II](https://en.wikipedia.org/wiki/ELM327) są integralną częścią nowoczesnej diagnostyki samochodowej. Dzięki strumieniowaniu danych w czasie rzeczywistym użytkownicy uzyskują natychmiastowy wgląd w systemy pojazdu, co ułatwia konserwację zapobiegawczą i obniża koszty napraw. Narzędzia te są niezbędne zarówno do użytku osobistego, jak i w profesjonalnych serwisach samochodowych.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia OBD](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Aby korzystać z danych ze skanera OBD-II:

1. [Kup](../purchases/) subskrypcję **OsmAnd Pro**. (*Prędkość pojazdu* i *Prędkość obrotowa silnika* są bezpłatne.)  
2. [Włącz](../plugins/index.md#enable--disable) wtyczkę Metryki pojazdu w sekcji Wtyczki w *Menu głównym*.
3. **Włącz** Bluetooth na swoim urządzeniu.
4. [Podłącz](#pair-odb-ii-scanner) skaner OBD-II do portu w pojeździe.
5. [Skonfiguruj](#scanner-settings) **ustawienia skanera**.
6. [Dodaj](#widgets) **widżety Metryk pojazdu** w celu wyświetlania danych na ekranie (opcjonalnie).
7. [Użyj](#trip-recording)wtyczki **Zapis trasy**, aby rejestrować dane pojazdu.


### Parowanie skanera ODB-II {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|  |  |
|--|--|
|![Połączenie OBD](@site/static/img/plugins/obd/obd_connect.png)|![Połączenie OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|  |  |
|--|--|
|![Połączenie OBD](@site/static/img/plugins/obd/obd_connect_ios.png)|![Połączenie OBD](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Podłącz skaner do portu w pojeździe i sparuj go za pomocą aplikacji:

- Przejdź do *Menu → Wtyczki → Metryki pojazdu → Ustawienia → Połącz* lub **+**.
- Jeśli Metryki pojazdu znajdują się w *Menu głównym*:  *Menu → Metryki pojazdu → Ustawienia → Połącz* lub **+**.

Wybierz swoje urządzenie OBD-II z listy i nawiąż połączenie.


## Ustawienia skanera {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Przejdź do: *Menu → Wtyczki → Metryki pojazdu → OBD → menu z trzema kropkami*

|  |  |
|--|--|
|![Ustawienia OBD](@site/static/img/plugins/obd/obd_settings.png)|![Ustawienia OBD](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Przejdź do: *Menu → Wtyczki → Metryki pojazdu → OBD → menu z trzema kropkami*

|  |  |
|--|--|
|![Ustawienia OBD](@site/static/img/plugins/obd/obd_settings_ios.png)|![Ustawienia OBD](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Połącz / Rozłącz**. Nawiązuje lub kończy połączenie z czujnikiem OBD-II.
- **Ustawienia**. Otwiera ekran ustawień OBD-II, umożliwiając zarządzanie połączeniem i dostęp do dostępnych parametrów pojazdu.
- **Zmień nazwę**. Pozwala przypisać niestandardową nazwę do czujnika w celu łatwiejszej identyfikacji.
- **Zapomnij**. Usuwa wcześniej sparowany czujnik OBD-II z listy, co wymaga ponownego parowania w razie potrzeby.

**Zachowanie ponownego połączenia:** OsmAnd automatycznie próbuje ponownie połączyć się z adapterem OBD-II po uruchomieniu aplikacji, rozpoczęciu nawigacji lub uruchomieniu Android Auto / CarPlay. Jeśli połączenie jest niedostępne, widżety Metryk pojazdu wyświetlają „–”. Pojedyncze dotknięcie dowolnego widżetu Metryk pojazdu spowoduje próbę ponownego połączenia z czujnikiem. Jeśli czujnik jest już podłączony, dotknięcie przełącza tryby wyświetlania widżetu jak zwykle.


## Lista metryk {#metrics-list}

Metryki są podzielone na kategorie dla przejrzystości. Zaawansowane narzędzia diagnostyczne umożliwiają konserwację zapobiegawczą poprzez interpretację tych parametrów:

*Temperatura:*

- **Temperatura w dolocie**. Wyświetla temperaturę powietrza wchodzącego do kolektora dolotowego.
- **Temperatura otoczenia**. Monitoruje warunki zewnętrzne.
- **Temperatura płynu chłodzącego**. Śledzi wydajność chłodzenia silnika.
- **Temperatura oleju silnikowego**. Wyświetla stan oleju podczas pracy.

*Silnik:*

- **Prędkość obrotowa silnika**. Monitoruje obroty silnika na minutę (RPM).
- **Czas pracy silnika**. Śledzi czas pracy silnika.
- **Obliczone obciążenie silnika**. Wskazuje procentowe obciążenie silnika.

*Paliwo:*

- **Ciśnienie paliwa**. Wskazuje ciśnienie w układzie paliwowym.
- **Zużycie paliwa**. Oblicza zużycie paliwa przez pojazd.
- **Pozostałe paliwo**. Wskazuje poziom paliwa w pojeździe.

*Inne:*

- **Poziom naładowania akumulatora**. Wskazuje poziom napięcia akumulatora pojazdu.
- **Napięcie adaptera**. Wyświetla napięcie dostarczane do adaptera OBD-II (komenda AT RV).
- **Prędkość pojazdu**. Wyświetla dane z czujnika prędkości pojazdu (VSS).
- **Położenie przepustnicy**. Określa dopływ powietrza do silnika poprzez kąt otwarcia przepustnicy.  
- **VIN**. Wyświetla 17-znakowy numer identyfikacyjny pojazdu.


## Zapis trasy {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android**. Przejdź do: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![Nagrywanie OBD](@site/static/img/plugins/obd/obd_recording.png)| ![Nagrywanie OBD](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. Przejdź do: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![Nagrywanie OBD](@site/static/img/plugins/obd/obd_recording_ios.png)| ![Nagrywanie OBD](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



Aby uwzględnić dane OBD-II w pliku GPX, należy wybrać żądane parametry do zapisu za pomocą [wtyczki Zapis trasy](../plugins/trip-recording.md#recording-settings). Pozwala to na analizę metryk pojazdu wraz z danymi z podróży.

### Tagi {#tags}

OsmAnd stosuje niestandardowe nazwy tagów dla metryk pojazdu w [pliku GPX](../plugins/trip-recording.md#recorded-gpx-file). Na przykład:

- `vm_eotemp`: Temperatura oleju silnikowego.
- `vm_fpress`: Ciśnienie paliwa.
- `vm_espeed`: Prędkość obrotowa silnika.

Te tagi ułatwiają identyfikację i wykorzystanie określonych danych pojazdu podczas przeglądania zapisanego pliku GPX.


## Widżety {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Przejdź do: *Menu → Konfiguruj ekran → Widżety → Wybierz panel → Metryki pojazdu*

| | |
|--|--|
|![Ustawienia OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![Ustawienia OBD](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Przejdź do: *Menu → Konfiguruj ekran → Widżety → Wybierz panel → Metryki pojazdu*

| | |
|--|--|
|![Ustawienia OBD](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![Ustawienia OBD](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



[Widżety metryk pojazdu](../widgets/info-widgets.md#vehicle-metrics-widgets) są automatycznie dodawane po włączeniu wtyczki. Jeśli nie są widoczne, można je dodać ręcznie za pomocą menu [Konfiguruj ekran](../widgets/configure-screen.md).

### Ustawienia widżetu {#widget-settings}

Widżety wyświetlają w czasie rzeczywistym kluczowe dane z podłączonego urządzenia OBD-II, takie jak prędkość, parametry silnika i zużycie paliwa. Upewnij się, że są widoczne przed rozpoczęciem podróży, aby płynnie śledzić metryki.

Niektóre widżety oferują opcje trybu wyświetlania:

- **Chwilowe**. Wyświetla dane w czasie rzeczywistym dla wybranej metryki.
- **Średnie**. Wyświetla uśrednione wartości w konfigurowalnym przedziale czasowym (od 15 sekund do 60 minut).

Kilka widżetów, w tym *Zużycie paliwa*, dostosowuje swoje wyświetlanie jednostek i formaty metryczne regionalne na podstawie [Ustawień profilu](https://osmand.net/docs/user/personal/profiles#units--formats). Podczas używania jednostek objętości innych niż litry, Zużycie paliwa obsługuje wyświetlanie wartości jako Mile na galon (MPG). Dokładny typ MPG zależy od wybranej jednostki objętości:

- Galony US → MPG (US)
- Galony imperialne → MPG (UK)

Widżet automatycznie wybiera odpowiedni format zgodnie z wybranymi jednostkami <Translate android="true" ids="routing_attr_length_name"/> i <Translate android="true" ids="shared_string_volume"/> w aktywnym profilu, a wybrany tryb wyświetlania jest zachowywany podczas eksportu i importu profili.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style mapy)](../../user/map/vector-maps.md)