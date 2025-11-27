---
source-hash: 98ef3def7d982e4b280e3c2f1201d4c80b83ec88f33f9ec1799e20750ea2d497
sidebar_position: 5
title:  Czujniki zewnętrzne
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
Wtyczka Czujniki zewnętrzne to [płatna funkcja](../purchases/index.md) aplikacji OsmAnd.  
:::

Wtyczka **Czujniki zewnętrzne** umożliwia odczytywanie i zapisywanie danych z [bezprzewodowych czujników zewnętrznych](https://en.wikipedia.org/wiki/Wireless_sensor_network) działających w technologiach [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) i [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) oraz wyświetlanie tych danych za pomocą [widżetów](#widgets) w aplikacji OsmAnd. Ta zarządzana sieć jest w stanie zbierać, przesyłać i przechowywać dane z czujników.

> *UWAGA: iPhone'y i iPady nie obsługują ANT+ ze względu na ograniczenia sprzętowe.*

Wtyczka **Czujniki zewnętrzne** uzyskuje dostęp do czujników zewnętrznych i może odczytywać takie dane jak:

- *Tętno*
- *Moc roweru*
- *Kadencja roweru*
- *Prędkość roweru*
- *Dystans roweru*
- *Temperatura*

Aby korzystać z wtyczki, upewnij się, że Twoje urządzenie jest [kompatybilne](#pair-new-sensor), wtyczka jest [włączona](../plugins/#enable--disable), a czujniki zewnętrzne są podłączone przez Bluetooth (BLE).

## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Aby rozpocząć korzystanie z danych z czujników zewnętrznych, wykonaj następujące kroki:

1. [Kup](../purchases/) subskrypcję **OsmAnd Pro**, aby odblokować wtyczkę Czujniki zewnętrzne.
2. [Włącz](../plugins/#enable--disable) wtyczkę w *Menu → Wtyczki*.
3. **Włącz Bluetooth** na swoim urządzeniu, aby umożliwić połączenie z **czujnikami BLE**.
4. [Sparuj i skonfiguruj](#pair-new-sensor) czujniki zewnętrzne poprzez menu wtyczki.
5. (Opcjonalnie) [Dodaj](#widgets) **widżety czujników zewnętrznych** do ekranu mapy, aby wyświetlać dane w czasie rzeczywistym, takie jak tętno, kadencja czy poziom naładowania baterii.
6. (Opcjonalnie) Użyj [wtyczki Nagrywanie trasy](../plugins/trip-recording.md), aby zapisywać dane z czujników w śladach GPX.
7. (Opcjonalnie, tylko Android) Postępuj zgodnie z [tymi wskazówkami](https://www.thisisant.com/consumer/ant-101/ant-in-phones), aby podłączyć czujniki ANT+, jeśli Twoje urządzenie je obsługuje.

### Sparuj nowy czujnik {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![Wtyczka Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![Wtyczka Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![Wtyczka Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![Wtyczka Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Aby sparować nowy czujnik, wykonaj następujące kroki:

1. Upewnij się, że na urządzeniu **włączony jest Bluetooth**.  
2. Przejdź do *Menu → Wtyczki → Czujniki zewnętrzne → Ustawienia*.  
3. Stuknij **Sparuj nowy czujnik**.
4. OsmAnd przeskanuje w poszukiwaniu dostępnych czujników **Bluetooth LE** lub **ANT+** (w zależności od platformy).
5. Stuknij przycisk **+** obok czujnika, który chcesz sparować.
6. Po podłączeniu czujnik pojawi się na liście **Podłączone urządzenia**.

***Uwagi:***

- W systemie **iOS** obsługiwane są tylko czujniki **Bluetooth Low Energy (BLE)** ze względu na ograniczenia sprzętowe. Czujniki ANT+ nie są dostępne.
- W systemie **Android** mogą być obsługiwane zarówno czujniki BLE, jak i ANT+, w zależności od urządzenia. Więcej szczegółów można znaleźć w [przewodniku zgodności ANT+](https://www.thisisant.com/consumer/ant-101/ant-in-phones).
- **Powiadomienie wyskakujące** pojawi się za każdym razem, gdy czujnik połączy się lub rozłączy.
- **Czujniki mocy roweru** są dostępne tylko na Androidzie przez ANT+.

## Ustawienia czujnika {#sensor-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Użyj jednej z następujących ścieżek, aby otworzyć ustawienia czujnika:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Dostępne urządzenie → Ustawienia*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Dostępne urządzenie → Ustawienia*

![Wtyczka Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Użyj jednej z następujących ścieżek, aby otworzyć ustawienia czujnika:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![Wtyczka Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)  

</TabItem>

</Tabs>

Każdy sparowany czujnik zewnętrzny wymieniony w OsmAnd ma własny ekran konfiguracji z następującymi opcjami:

- **Połącz / Rozłącz** – przełącz stan połączenia.
- **Zmień nazwę** – przypisz niestandardową nazwę do czujnika.
- **Zapomnij czujnik** – usuń czujnik z listy (można go później ponownie sparować).
- **Ustawienia** – otwórz ekran szczegółów czujnika (typ czujnika, wartości, poziom naładowania baterii, ustawienie obwodu koła).

***Uwagi:***

- W systemie **iOS** można wyświetlić **poziom naładowania baterii** podłączonych czujników BLE bezpośrednio w [widżecie](#widgets) na mapie. Aby to włączyć, przejdź do: *Menu → Konfiguruj ekran → Wybierz panel → Dodaj widżet → Czujnik zewnętrzny → Ustawienia → Pokaż → Poziom baterii*
- Powiadomienie wyskakujące pojawia się, gdy **poziom naładowania baterii sparowanego czujnika spadnie poniżej 15%**.

## Nagrywanie trasy {#trip-recording}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![Wtyczka Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![Wtyczka Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)  

</TabItem>

</Tabs>

Aby rejestrować dane z czujników za pomocą [wtyczki Nagrywanie trasy](../plugins/trip-recording.md#recording-settings) podczas podróży:

1. Upewnij się, że wtyczka **Czujniki zewnętrzne** jest włączona.
2. Przejdź do *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Wybierz typy czujników, które chcesz rejestrować (np. kadencja, tętno, prędkość).
4. Rozpocznij nagrywanie podróży. OsmAnd zapisze wybrane dane z czujników w śladzie GPX.

***Uwagi:***

- Lista dostępnych typów czujników jest wyświetlana nawet wtedy, gdy żadne czujniki nie są podłączone.
- Jeśli żadne czujniki nie są jeszcze sparowane, użyj przycisku [Sparuj nowy czujnik](#pair-new-sensor) w ustawieniach wtyczki.
- Dane o poziomie naładowania baterii **nie są** zapisywane w plikach GPX i nie są dostępne do analizy na mapie.

:::note Zgodność formatu
OsmAnd używa [nagrywania śladu](../plugins/trip-recording.md#recorded-gpx-file) do osadzania danych z czujników w plikach GPX. Ten format jest kompatybilny z wieloma aplikacjami sportowymi i treningowymi (np. Strava, Runkeeper).
:::

### Analiza danych {#data-analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![Czujniki zewnętrzne](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Po zarejestrowaniu podróży za pomocą [wtyczki Nagrywanie trasy](../plugins/trip-recording.md#recording-settings) można przejrzeć dane z czujników w interfejsie analizy trasy.

Aby przeanalizować dane:

1. Zakończ nagrywanie podróży.
2. Otwórz nagraną trasę z *Moje miejsca → Trasy* lub stuknij trasę na mapie.
3. Wybierz *Opcje → Analizuj na mapie* z menu kontekstowego trasy.

Spowoduje to wyświetlenie wykresów dla zarejestrowanych danych: *Tętno*, *Prędkość*, *Kadencja*, *Moc roweru* i *Temperatura*.

> *Poziom baterii i Dystans nie są dostępne w funkcji [Analizuj na mapie](../map/tracks/index.md#analyze-track-on-map).*

## Widżety {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="external_sensor_widgets"/>*

![Widżety czujników zewnętrznych Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![Widżety czujników zewnętrznych Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![Widżety czujników zewnętrznych iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![Widżety czujników zewnętrznych iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)  

</TabItem>

</Tabs>

[Widżet Czujniki zewnętrzne](../widgets/info-widgets.md#external-sensors-widgets) umożliwia wyświetlanie danych na żywo z podłączonych czujników bezpośrednio na ekranie mapy.

Przed rozpoczęciem podróży:

- Upewnij się, że wtyczka Czujniki zewnętrzne jest włączona.
- Otwórz *Konfiguruj ekran* i dodaj niezbędne widżety do odpowiedniego panelu.

Obsługiwane typy widżetów:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – wyświetla tętno w czasie rzeczywistym z sparowanego monitora.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*tylko Android*) – pokazuje aktualną moc pedałowania w watach.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – pokazuje liczbę obrotów pedałów na minutę.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – aktualna prędkość jazdy na rowerze.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – całkowity dystans zmierzony przez czujnik.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – aktualna temperatura otoczenia.
7. **Poziom baterii** – procent pozostałej baterii w podłączonym czujniku BLE, przełącz go w **Ustawieniach czujnika**.

**Uwaga:** Jeśli czujnik tymczasowo się rozłączy, stuknij jego widżet na mapie, aby natychmiast spróbować ponownego połączenia — nie trzeba otwierać menu Czujniki zewnętrzne.

### Ustawienia widżetu {#widget-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="external_sensor_widgets"/> → Wybierz widżet → <Translate android="true" ids="shared_string_settings"/>*

![Ustawienia widżetów czujników zewnętrznych Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → Czujnik zewnętrzny → Wybierz widżet → Ustawienia*

![Ustawienia widżetów czujników zewnętrznych iOS](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Domyślnie widżet pokazuje pierwszy aktualnie podłączony czujnik tego typu. Jeśli chcesz użyć określonego czujnika, stuknij **Źródło danych** i wybierz z listy podłączonych czujników.

W systemie **iOS** możesz wybrać, jaka wartość ma być wyświetlana w widżecie:  

- **Dane czujnika** (np. kadencja, prędkość).
- **Poziom baterii** – procent naładowania baterii wybranego czujnika w czasie rzeczywistym.

> *Jest to przydatne, gdy chcesz monitorować poziom naładowania baterii podczas długich podróży, aby uniknąć rozłączeń.*

## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)