---
source-hash: 2f59b1c67bc9886426af5d0c0cd282853675b77154ff95cd42a65f37a70509cb
sidebar_position: 17
title:  Pogoda
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
 <ProFeature/> Wtyczka Pogoda jest [funkcją płatną](../purchases/index.md) aplikacji OsmAnd.
:::

Interaktywne warstwy mapy pogodowej w aplikacji OsmAnd umożliwiają monitorowanie temperatury, ciśnienia atmosferycznego, zachmurzenia, prędkości wiatru i opadów w Twoim mieście lub w dowolnym innym miejscu na interaktywnej mapie globalnej. Wtyczka Pogoda zapewnia godzinowe prognozy pogody na 7 dni z wyprzedzeniem bezpośrednio na mapie OsmAnd. Informacje o pogodzie można również pobrać do użytku offline.

Źródłem danych dla wtyczki Pogoda jest [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) obsługiwany przez United States National Weather Service (NWS) oraz European Centre for Medium-Range Weather Forecasts ([ECMWF](https://www.ecmwf.int/)).


## Wymagane parametry konfiguracji {#required-setup-parameters}

Poniższe ustawienia są *wymagane* do wyświetlania pogody na mapie OsmAnd:

**1.** [Kup **subskrypcję OsmAnd Pro**](../purchases/).

**2.** [Włącz](../plugins/#enable--disable) wtyczkę Pogoda w sekcji *Wtyczki* w *Menu głównym*.

**3.** [Wybierz **jednostki miary**](#weather-settings) dla zjawisk pogodowych.

**4.** [Wyświetl **warstwy pogodowe**](#customize-weather-layers) na mapie, używając pozycji menu Pogoda w menu Konfiguruj mapę (pamiętaj, aby oddalić widok).

**5.** [Wyświetl **prognozę pogody**](#weather-forecast-screen) dla wybranego obszaru (to menu pozwala na to, aby główny ekran mapy OsmAnd nie był zaśmiecony warstwami pogodowymi).

**6.** [Pobierz](#offline-forecast) prognozę pogody, jeśli planujesz używać jej offline.

**7.** [Włącz **widżety pogodowe**](#weather-widgets), jeśli chcesz codziennie widzieć aktualne informacje o pogodzie.

:::caution Wymagane renderowanie
Wtyczka Pogoda jest dostępna tylko z silnikiem renderowania map [Wersja 2](../personal/global-settings/#map-rendering-engine) (OpenGL).
:::


## Wyświetlanie pogody na mapie {#display-weather-on-the-map}

### Ekran prognozy pogody {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *Włączona wtyczka → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Włączona wtyczka → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>

</Tabs>

Główne menu boczne posiada dedykowany element menu **Pogoda**, który zapewnia szybki dostęp do wszystkich narzędzi pogodowych. *Ekran prognozy pogody* wyświetla informacje o *temperaturze*, *ciśnieniu atmosferycznym*, *prędkości wiatru*, *zachmurzeniu* i *opadach*.

Na dole ekranu znajduje się *pasek narzędzi pogodowych*. Możesz użyć przycisków dni i suwaka czasu, aby ustawić dokładny czas, w którym zostanie wyświetlona prognoza pogody.

### Dostosuj warstwy pogodowe {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *Włączona wtyczka → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Włączona wtyczka → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>

</Tabs>

Aby wyświetlić warstwy pogodowe na ekranie mapy OsmAnd, musisz użyć *menu Konfiguruj mapę*. Przejdź do menu, znajdź pozycję *Pogoda* na liście (dostępna tylko po włączeniu wtyczki) i dotknij jej.

W tym menu możesz zmienić **widoczność** i [ustawienia](#weather-settings) dla każdej warstwy, wybrać typ linii konturowych i pobrać [prognozę pogody offline na 7 dni](#offline-forecast) (*dostępne tylko dla Androida tutaj*).


### Ustawienia pogody {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *Menu główne → Wtyczki → Pogoda → Ustawienia*
- *Menu główne → Ustawienia → Profil → Ustawienia wtyczki → Pogoda*

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Menu główne → Ustawienia → Profil → Wtyczki → Pogoda*

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>

Ważne jest, aby zdecydować, w jakich jednostkach miary wygodnie jest widzieć [dane pogodowe](#weather-layers) na mapie i w sekcji [widżetów pogodowych](#weather-widgets) ekranu. Możesz wybrać odpowiednie jednostki miary dla każdego parametru lub użyć wartości domyślnych (*tylko iOS*). W wersji OsmAnd na iOS możesz również włączyć opcję prognozy offline, aby uniknąć używania mobilnego transferu danych podczas podróży.

:::note
W wersji OsmAnd na iOS możesz zmienić jednostki miary i poziom przezroczystości w menu, które otwiera się po długim dotknięciu ikony wymaganej warstwy mapy.
:::

### Warstwy pogodowe {#weather-layers}

Wszystkie dane pogodowe są przedstawione jako oddzielne warstwy mapy. Aby zobaczyć warstwy pogodowe na mapie, musisz oddalić widok; są one dostępne tylko w skalach powiększenia 2-12. Warstwy pogodowe używają [palet pogodowych](../personal/color-palette-schemes.md#weather) do kolorowania mapy, te palety mogą być [zmieniane](../personal/color-palette-schemes.md#edit-palette-file) w razie potrzeby.

| |
|------------|
| **Warstwa opadów** wyświetla informacje o zjawiskach pogodowych, gdy woda w różnych stanach skupienia spada z nieba na ziemię. Opady to deszcz, śnieg, deszcz ze śniegiem lub grad. Skala opadów jest stopniowana w milimetrach (lub calach) wody, która spada na 1 metr kwadratowy w ciągu 24 godzin. 1 mm deszczu odpowiada 1 litrowi wody na 1 metr kwadratowy. |
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|
| **Temperatura** wyraża ilościowe postrzeganie ciepła i zimna. Mierzy się ją w stopniach. W OsmAnd możesz wybrać między skalą Celsjusza a Fahrenheita. |
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|
| **Wiatr** to ruch powietrza spowodowany nierównomiernym nagrzewaniem Ziemi przez słońce i jej własnym obrotem. Wiatry mogą wahać się od lekkich podmuchów do klęsk żywiołowych, takich jak huragany i tornada. W OsmAnd prędkość wiatru może być wyświetlana w metrach na sekundę (m/s), kilometrach na godzinę (km/h), milach na godzinę (mph) i węzłach (kt). |
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|
| **Zachmurzenie** to średnia część nieba pokryta chmurami, obserwowana z określonej lokalizacji. Mierzy się je w %. |
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|
| **Ciśnienie atmosferyczne** jest spowodowane ciężarem powietrza powyżej punktu pomiaru. Maleje wraz ze wzrostem wysokości. Ciśnienie atmosferyczne może być wyświetlane w hektopaskalach (hPa), milimetrach słupa rtęci (mmHg) i calach słupa rtęci (inHg). |
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |
| **Animacja wiatru** obejmuje dynamiczne reprezentacje pokazujące kierunek i prędkość wiatru w regionie. |
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |


### Łączenie map {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)

</TabItem>

</Tabs>

Aby uzyskać kompleksowe informacje o pogodzie, możesz używać warstw mapy oddzielnie lub łatwo je łączyć. Izolinie jednego konkretnego typu mogą być również dodane do warstwy Pogoda. Wystarczy dotknąć przycisku *Warstwy* lub *Izolinie* na ekranie.


### Szybkie akcje dla warstw {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Aby przełączać widoczność warstw pogodowych, możesz użyć przycisków *Szybkich akcji* na ekranie mapy. Ogólne ustawienia pokazywania lub ukrywania warstw można znaleźć w oddzielnej [sekcji Pogoda](#weather-forecast-screen) w *Menu głównym*. W artykule [Szybka akcja](../widgets/quick-action.md#configure-map) znajdziesz listę warstw dostępnych do wyświetlenia. Jeśli potrzebujesz szybkiego dostępu do tej konfiguracji mapy, użyj narzędzia *Przycisk niestandardowy*.

- Przejdź do [Dodaj akcję](../widgets/quick-action.md#custom-buttons): *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybka akcja → Dodaj akcję → Konfiguruj mapę*.
- Dodaj jeden lub więcej przycisków Szybkiej akcji, aby zmienić widoczność konkretnej warstwy pogodowej.


## Prognoza offline {#offline-forecast}

### Pamięć podręczna {#cache}

Gdy zakładka Pogoda jest otwarta, o ile nie określono inaczej, wymagane informacje pogodowe są pobierane z sieci. Możesz użyć wstępnie załadowanej [prognozy pogody](#download-forecast) na swoich urządzeniach. Informacje pogodowe są automatycznie buforowane po pobraniu i mogą być używane offline do momentu wygaśnięcia prognozy.

:::tip
Na urządzeniach z systemem Android możesz sprawdzić, kiedy dane pogodowe zostały pobrane, dotykając *widżetu Pogoda*. Wtyczka OsmAnd Development musi być włączona.
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)
:::

### Pobierz prognozę {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>

Dla każdego kraju możesz pobrać **prognozę offline** (do 7 dni). Im bliżej bieżącej daty, tym dokładniejsza będzie. Jeśli chcesz korzystać z prognozy pogody offline, powinieneś wcześniej pobrać dane pogodowe.

W menu pobierania prognozy możesz uzyskać informacje i ustawić parametry, aby dane pogodowe były aktualne.

- **Utworzono** (*Android*) / **Zaktualizowano** (*iOS*). Pokazuje, kiedy dokonano ostatniej aktualizacji.
- **Następna aktualizacja** (*iOS*). Kiedy będzie dostępna następna aktualizacja.
- **Rozmiar** (*Android*) / **Rozmiar aktualizacji** (*iOS*). Pokazuje rozmiar wszystkich aktualizacji.
- Przycisk **Aktualizuj** (*Android*) / **Aktualizuj teraz** (*iOS*). Gdy aktywny, pozwala ręcznie zaktualizować dane pogodowe bez czekania na automatyczną aktualizację.
- **Częstotliwość aktualizacji** (*iOS*). Można ustawić na 12-godzinną, 24-godzinną lub tygodniową.
- *Aktualizuj tylko przez Wi-Fi* (*iOS*). Włącz tę opcję, jeśli nie chcesz używać danych mobilnych do pobierania.
- Przycisk **Usuń** *kosz na śmieci* (*Android*) / **Usuń prognozę** (*iOS*). Pozwala usunąć wszystkie dane prognozy dla tego regionu.
- Przycisk **Edytuj** *ołówek* (*Android*). Pozwala zmienić nazwę pliku pogodowego.

:::info
OsmAnd generuje nową prognozę co 6 godzin.
:::


## Widżety pogodowe {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)

</TabItem>

</Tabs>

[Widżety pogodowe](../widgets/info-widgets.md#weather-widgets), takie jak Temperatura, Ciśnienie powietrza, Wiatr, Chmury i Opady, pokazują aktualne dane pogodowe dla **centralnego punktu na mapie**.

- Widżety pogodowe są wyświetlane tylko wtedy, gdy włączony jest [ekran Pogody](#weather-forecast-screen).
- Aby aktywować widżety pogodowe, wybierz element menu głównego *Konfiguruj ekran*, panel, na którym mają się znajdować, oraz wymagane widżety z listy.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style mapy)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: listopad 2024*