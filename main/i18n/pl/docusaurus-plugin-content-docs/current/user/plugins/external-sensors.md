---
source-hash: 9d1531d9555eb2840386ca7a59c86b6aaea01e503c8115d6bb52a5af5ac3dfed
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

:::info Funkcja płatna
Wtyczka Czujniki zewnętrzne to [płatna funkcja](../purchases/index.md) aplikacji OsmAnd.
:::

**Wtyczka Czujniki zewnętrzne** umożliwia odczytywanie i rejestrowanie danych z [bezprzewodowych czujników zewnętrznych](https://en.wikipedia.org/wiki/Wireless_sensor_network) działających w technologiach [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) i [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) oraz wyświetlanie tych danych za pomocą [widżetów](#widgets) w aplikacji OsmAnd. Ta zarządzana sieć jest zdolna do zbierania, przesyłania i przechowywania danych z czujników.

> *UWAGA: iPhone'y i iPady nie obsługują ANT+ ze względu na ograniczenia sprzętowe.*

**Wtyczka Czujniki zewnętrzne** uzyskuje dostęp do czujników zewnętrznych i może odczytywać dane takie jak:

- *Tętno*
- *Moc roweru*
- *Kadencja roweru*
- *Prędkość roweru*
- *Dystans roweru*
- *Temperatura*

Aby korzystać z wtyczki, upewnij się, że Twoje urządzenie jest [kompatybilne](#pair-new-sensor), wtyczka jest [włączona](../plugins/#enable--disable), a Twoje czujniki zewnętrzne są podłączone przez Bluetooth (BLE).


## Wymagane parametry konfiguracji {#required-setup-parameters}

Aby rozpocząć korzystanie z danych z czujników zewnętrznych, wykonaj następujące kroki:

1. [Kup](../purchases/) **subskrypcję OsmAnd Pro**, aby odblokować wtyczkę Czujniki zewnętrzne.
2. [Włącz](../plugins/#enable--disable) wtyczkę w *Menu → Wtyczki*.
3. **Włącz Bluetooth** na swoim urządzeniu, aby umożliwić połączenie z **czujnikami BLE**.
4. [Sparuj i skonfiguruj](#pair-new-sensor) czujniki zewnętrzne za pomocą menu wtyczki.
5. (Opcjonalnie) [Dodaj](#widgets) **widżety Czujników zewnętrznych** do ekranu mapy, aby wyświetlać dane w czasie rzeczywistym, takie jak tętno, kadencja lub poziom baterii.
6. (Opcjonalnie) Użyj [wtyczki Nagrywanie trasy](../plugins/trip-recording.md), aby rejestrować dane z czujników w śladach GPX.
7. (Opcjonalnie, tylko Android) Postępuj zgodnie z [tymi wskazówkami](https://www.thisisant.com/consumer/ant-101/ant-in-phones), aby podłączyć czujniki ANT+, jeśli Twoje urządzenie je obsługuje.


### Parowanie nowego czujnika {#pair-new-sensor}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Aby sparować nowy czujnik, wykonaj następujące kroki:

1. Upewnij się, że **Bluetooth jest włączony** na Twoim urządzeniu.
2. Przejdź do *Menu → Wtyczki → Czujniki zewnętrzne → Ustawienia*.
3. Dotknij **Sparuj nowy czujnik**.
4. OsmAnd przeskanuje dostępne czujniki **Bluetooth LE** lub **ANT+** (w zależności od Twojej platformy).
5. Dotknij przycisku **+** obok czujnika, który chcesz sparować.
6. Po podłączeniu czujnik pojawi się na liście **Podłączonych urządzeń**.

***Uwagi:***

- Na **iOS** obsługiwane są tylko czujniki **Bluetooth Low Energy (BLE)** ze względu na ograniczenia sprzętowe. Czujniki ANT+ nie są dostępne.
- Na **Androidzie** mogą być obsługiwane zarówno czujniki BLE, jak i ANT+, w zależności od Twojego urządzenia. Więcej szczegółów znajdziesz w [przewodniku kompatybilności ANT+](https://www.thisisant.com/consumer/ant-101/ant-in-phones).
- **Powiadomienie pop-up** pojawi się za każdym razem, gdy czujnik połączy się lub rozłączy.
- **Czujniki mocy roweru** są dostępne tylko na Androidzie przez ANT+.


## Ustawienia czujnika {#sensor-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Użyj jednej z poniższych ścieżek, aby otworzyć ustawienia czujnika:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Dostępne urządzenie → Ustawienia*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Dostępne urządzenie → Ustawienia*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Użyj jednej z poniższych ścieżek, aby otworzyć ustawienia czujnika:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)

</TabItem>

</Tabs>

Każdy sparowany czujnik zewnętrzny wymieniony w OsmAnd ma swój własny ekran konfiguracji z następującymi opcjami:

- **Połącz / Rozłącz** – przełącz stan połączenia.
- **Zmień nazwę** – przypisz niestandardową nazwę czujnikowi.
- **Zapomnij czujnik** – usuń czujnik z listy (można go ponownie sparować później).
- **Ustawienia** – otwórz ekran szczegółów czujnika (typ czujnika, wartości, poziom baterii, ustawienie obwodu koła).

***Uwagi:***

- Na **iOS** możesz wyświetlić **poziom baterii** podłączonych czujników BLE bezpośrednio w [widżecie](#widgets) mapy. Aby to włączyć, przejdź do: *Menu → Konfiguruj ekran → Wybierz panel → Dodaj widżet → Czujnik zewnętrzny → Ustawienia → Pokaż → Poziom baterii*
- Pojawi się powiadomienie pop-up, gdy poziom baterii **sparowanego czujnika spadnie poniżej 15%**.


## Nagrywanie trasy {#trip-recording}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)

</TabItem>

</Tabs>

Aby rejestrować dane z czujników za pomocą [wtyczki Nagrywanie trasy](../plugins/trip-recording.md#recording-settings) podczas podróży:

1. Upewnij się, że **wtyczka Czujniki zewnętrzne** jest włączona.
2. Przejdź do *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Wybierz typy czujników, które chcesz rejestrować (np. kadencja, tętno, prędkość).
4. Rozpocznij nagrywanie trasy. OsmAnd zapisze wybrane dane z czujników w śladzie GPX.

***Uwagi:***

- Lista dostępnych typów czujników jest wyświetlana nawet jeśli żadne czujniki nie są podłączone.
- Jeśli żadne czujniki nie są jeszcze sparowane, użyj przycisku [Sparuj nowy czujnik](#pair-new-sensor) w ustawieniach wtyczki.
- Dane poziomu baterii **nie są** rejestrowane w plikach GPX i nie są dostępne do analizy na mapie.

:::note Kompatybilność formatu
OsmAnd używa [nagrywania śladu](../plugins/trip-recording.md#recorded-gpx-file) do osadzania danych z czujników w plikach GPX. Ten format jest kompatybilny z wieloma aplikacjami sportowymi i treningowymi (np. Strava, Runkeeper).
:::


### Analiza danych {#data-analyze}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Po nagraniu trasy za pomocą [wtyczki Nagrywanie trasy](../plugins/trip-recording.md#recording-settings), możesz przeglądać dane z czujników w interfejsie analizy śladu.

Aby analizować dane:

1. Zakończ nagrywanie trasy.
2. Otwórz nagrany ślad z *Moje miejsca → Ślady* lub dotknij śladu na mapie.
3. Wybierz *Opcje → Analizuj na mapie* z menu kontekstowego śladu.

Spowoduje to wyświetlenie wykresów dla zarejestrowanych danych: *Tętno*, *Prędkość*, *Kadencja*, *Moc roweru* i *Temperatura*.

> *Poziom baterii i Dystans nie są dostępne w funkcji [Analizuj na mapie](../map/tracks/index.md#analyze-track-on-map).*


## Widżety {#widgets}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="external_sensor_widgets"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)

</TabItem>

</Tabs>

[Widżet Czujniki zewnętrzne](../widgets/info-widgets.md#external-sensors-widgets) umożliwia wyświetlanie danych w czasie rzeczywistym z podłączonych czujników bezpośrednio na ekranie mapy.

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
7. **Poziom baterii** (*tylko iOS*) – procent pozostałej baterii w podłączonym czujniku BLE.


### Ustawienia widżetu {#widget-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="external_sensor_widgets"/> → Wybierz widżet → <Translate android="true" ids="shared_string_settings"/>*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → Czujnik zewnętrzny → Wybierz widżet → Ustawienia*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Domyślnie widżet pokazuje pierwszy aktualnie podłączony czujnik tego typu. Jeśli chcesz użyć konkretnego czujnika, dotknij **Źródło danych** i wybierz z listy podłączonych czujników.

Na **iOS** możesz wybrać, jaką wartość wyświetlić w widżecie:

- **Dane z czujnika** (np. kadencja, prędkość).
- **Poziom baterii** – procent baterii w czasie rzeczywistym wybranego czujnika.

> *Jest to przydatne, gdy chcesz monitorować poziom naładowania baterii podczas długich podróży, aby uniknąć rozłączeń.*


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style mapy)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: maj 2025*