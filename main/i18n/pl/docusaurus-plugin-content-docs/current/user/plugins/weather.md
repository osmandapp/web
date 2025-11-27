---
source-hash: e4e558095bec4b84738b88edc8b62c95c94dec6c02803344bb5fccb2d6f00e34
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

:::info Płatna funkcja
 <ProFeature/> Wtyczka Pogoda to [płatna funkcja](../purchases/index.md) aplikacji OsmAnd.  
:::

Interaktywne warstwy mapy pogodowej w aplikacji OsmAnd pozwalają monitorować temperaturę, ciśnienie atmosferyczne, zachmurzenie, prędkość wiatru i opady w Twoim mieście lub dowolnej innej lokalizacji na interaktywnej mapie globalnej. Wtyczka Pogoda dostarcza cogodzinne prognozy pogody na 7 dni naprzód bezpośrednio na mapie OsmAnd. Informacje o pogodzie można również pobrać do użytku w trybie offline.  

Źródłem danych dla wtyczki Pogoda jest [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) obsługiwany przez United States National Weather Service (NWS) oraz European Centre for Medium-Range Weather Forecasts ([ECMWF](https://www.ecmwf.int/)).  


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Następujące ustawienia są *wymagane* do wyświetlania pogody na mapie OsmAnd:

**1.** [Zakup **subskrypcji OsmAnd Pro**](../purchases/).

**2.** [Włącz](../plugins/#enable--disable) wtyczkę Pogoda w sekcji *Wtyczki* w *Menu głównym*.

**3.** [Wybierz **jednostki miary**](#weather-settings) dla zjawisk pogodowych.

**4.** [Wyświetl **warstwy pogodowe**](#customize-weather-layers) na mapie, używając pozycji menu Pogoda w menu Konfiguruj mapę (pamiętaj, aby oddalić widok).

**5.** [Wyświetl **prognozę pogody**](#weather-forecast-screen) dla wybranego obszaru (to menu pozwala uniknąć zaśmiecania głównego ekranu mapy OsmAnd warstwami pogodowymi).

**6.** [Pobierz](#offline-forecast) prognozę pogody, jeśli planujesz korzystać z niej w trybie offline.

**7.** [Włącz **widżety pogodowe**](#weather-widgets), jeśli chcesz codziennie widzieć aktualne informacje o pogodzie.  

:::caution Wymagane renderowanie
Wtyczka Pogoda jest dostępna tylko z silnikiem renderowania mapy [Wersja 2](../personal/global-settings/#map-rendering-engine) (OpenGL).  
:::


## Wyświetlanie pogody na mapie {#display-weather-on-the-map}

### Ekran prognozy pogody {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Przejdź do: *Włączona wtyczka → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Panel pogody Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_new_2.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Przejdź do: *Włączona wtyczka → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Panel pogody w iOS](@site/static/img/plugins/weather/weather_dashbord_ios_new_2.png)

</TabItem>  

</Tabs>

Główne menu boczne ma dedykowaną pozycję **Pogoda**, która zapewnia szybki dostęp do wszystkich narzędzi pogodowych. *Ekran prognozy pogody* wyświetla informacje o *temperaturze*, *ciśnieniu atmosferycznym*, *prędkości wiatru*, *zachmurzeniu* i *opadach*.  

Na dole ekranu znajduje się *pasek narzędzi pogody*. Możesz użyć przycisków dni i suwaka czasu, aby ustawić dokładny czas, w którym będzie wyświetlana prognoza pogody.

### Źródło danych {#data-source}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

![Źródło danych Android](@site/static/img/plugins/weather/weather_source_android.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

![Źródło danych iOS](@site/static/img/plugins/weather/weather_source_ios.png)

</TabItem>  

</Tabs>

Możesz wybrać, z którego dostawcy prognoz pogody OsmAnd korzysta do wyświetlania danych na ekranie Pogoda:<br />
<Translate android="true" ids="shared_string_menu,shared_string_weather"/> → ⚙️ → *Wybierz źródło danych*

Obsługiwane są dwa dostawcy prognoz pogody:

[**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Global Forecast System)** – domyślne źródło obsługiwane przez NOAA/NWS. Zapewnia pełne dane pogodowe, w tym warstwy temperatury, ciśnienia, wilgotności, wiatru i zachmurzenia.

[**ECMWF**](https://www.ecmwf.int/) **(European Centre for Medium-Range Weather Forecasts)** – alternatywne źródło prognoz. Oferuje wysokiej jakości dane dotyczące temperatury, opadów i ciśnienia, ale nie dostarcza informacji o wietrze ani zachmurzeniu. Podczas korzystania z ECMWF niedostępne parametry są wyświetlane jako „–”, a odpowiadające im warstwy pogodowe pojawiają się jako wyłączone.

Jak źródło danych wpływa na wyświetlanie pogody:
- Mapa, wykresy, oś czasu i wartości pogody na ekranie są aktualizowane natychmiast po przełączeniu źródła.
- Wyświetlane są tylko parametry dostępne dla wybranego dostawcy.
- Widżety pogodowe automatycznie odświeżają się, aby korzystać z wybranego źródła.
- Jeśli wcześniej pobrano prognozę pogody, OsmAnd używa danych odpowiadających wybranemu dostawcy.
- GFS i ECMWF korzystają z oddzielnych pamięci podręcznych. Przełączanie źródła ładuje lub aktualizuje odpowiednie kafelki pogodowe.


### Dostosuj warstwy pogodowe {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Przejdź do: *Włączona wtyczka → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Panel pogody Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Przejdź do: *Włączona wtyczka → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Panel pogody w iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>  

</Tabs>

Aby wyświetlić warstwy pogodowe na ekranie mapy OsmAnd, należy użyć menu *Konfiguruj mapę*. Przejdź do menu, znajdź na liście pozycję *Pogoda* (dostępną tylko wtedy, gdy wtyczka jest włączona) i dotknij jej.  

W tym menu można zmienić **widoczność** i [ustawienia](#weather-settings) dla każdej warstwy, wybrać typ izoliniii oraz pobrać [7-dniową prognozę pogody offline](#offline-forecast) (*dostępne tylko dla Androida w tym miejscu*).


### Ustawienia pogody {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *Menu główne → Wtyczki → Pogoda → Ustawienia*
- *Menu główne → Ustawienia → Profil → Ustawienia wtyczek → Pogoda*

![Ustawienia pogody Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Ustawienia pogody 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Menu główne → Ustawienia → Profil → Wtyczki → Pogoda*

![Ustawienia pogody iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Ustawienia pogody iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>  

Ważne jest, aby zdecydować, w jakich jednostkach miary wygodnie jest widzieć [dane pogodowe](#weather-layers) na mapie i w sekcji [Widżety pogodowe](#weather-widgets) na ekranie. Możesz wybrać odpowiednie jednostki miary dla każdego parametru lub użyć wartości domyślnych (*tylko iOS*). W wersji aplikacji OsmAnd na iOS można również włączyć opcję prognozy offline, aby uniknąć korzystania z mobilnego transferu danych podczas podróży.  

:::note
W wersji OsmAnd na iOS można zmienić jednostki miary i poziom przezroczystości w menu, które otwiera się po długim dotknięciu ikony wymaganej warstwy mapy.  
:::

### Warstwy pogodowe {#weather-layers}

Wszystkie dane pogodowe są prezentowane jako oddzielne warstwy mapy. Aby zobaczyć warstwy pogodowe na mapie, należy oddalić widok, są one dostępne tylko w skalach powiększenia 2-12. Warstwy pogodowe używają [palet pogodowych](../personal/color-palette-schemes.md#weather) do kolorowania mapy, palety te można w razie potrzeby [zmienić](../personal/color-palette-schemes.md#edit-palette-file).

| |  
|------------|  
| **Warstwa opadów** wyświetla informacje o zjawiskach pogodowych, w których woda w różnych stanach skupienia spada z nieba na ziemię. Opady to deszcz, śnieg, deszcz ze śniegiem lub grad. Skala opadów jest podawana w milimetrach (lub calach) wody, która spada na 1 metr kwadratowy w ciągu 24 godzin. 1 mm deszczu odpowiada 1 litrowi wody na 1 metr kwadratowy. |  
|![Schemat opadów](@site/static/img/plugins/weather/precipitation.png)|  
| **Temperatura** wyraża ilościowe postrzeganie ciepła i zimna. Mierzona jest w stopniach. W OsmAnd można wybierać między skalą Celsjusza i Fahrenheita. |  
|![Schemat temperatury](@site/static/img/plugins/weather/temperature.png)|  
| **Wiatr** to ruch powietrza spowodowany nierównomiernym ogrzewaniem Ziemi przez słońce i jej własnym obrotem. Wiatry mogą wahać się od lekkiej bryzy do klęsk żywiołowych, takich jak huragany i tornada. W OsmAnd prędkość wiatru może być wyświetlana w metrach na sekundę (m/s), kilometrach na godzinę (km/h), milach na godzinę (mph) i węzłach (kt). |  
|![Schemat wiatru](@site/static/img/plugins/weather/wind.png)|  
| **Zachmurzenie** to średnia część nieba pokryta chmurami obserwowana z określonej lokalizacji. Mierzone jest w %. |  
|![Schemat zachmurzenia](@site/static/img/plugins/weather/clouds.png)|  
| **Ciśnienie atmosferyczne** jest spowodowane ciężarem powietrza nad punktem pomiaru. Zmniejsza się wraz ze wzrostem wysokości. Ciśnienie atmosferyczne może być wyświetlane w hektopaskalach (hPa), milimetrach słupa rtęci (mmHg) i calach słupa rtęci (inHg). |  
| ![Schemat ciśnienia](@site/static/img/plugins/weather/pressure.png) |  
| **Animacja wiatru** obejmuje dynamiczne reprezentacje pokazujące kierunek i prędkość wiatru w całym regionie. |  
| ![Animacja wiatru](@site/static/img/plugins/weather/wind_annimation.gif) |  


### Łączenie map {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Łączenie warstw pogodowych na Androidzie](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Łączenie warstw pogodowych na Androidzie](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Łączenie warstw pogodowych na iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Łączenie warstw pogodowych na iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

Aby uzyskać kompleksowe informacje o pogodzie, można używać warstw mapy osobno lub łatwo je łączyć. Do warstwy pogodowej można również dodać izolinie jednego określonego typu. Wystarczy dotknąć przycisku *Warstwy* lub *Izolinie* na ekranie.


### Szybkie działania dla warstw {#quick-actions-for-layers}

![Szybkie działania dla warstw pogodowych](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Aby przełączać widoczność warstw pogodowych, można użyć przycisków *Szybkie działanie* na ekranie mapy. Ogólne ustawienia pokazywania lub ukrywania warstw można znaleźć w oddzielnej sekcji [Pogoda](#weather-forecast-screen) w *Menu głównym*. W artykule [Szybkie działanie](../widgets/quick-action.md#configure-map) znajduje się lista warstw dostępnych do wyświetlenia. Jeśli potrzebujesz szybkiego dostępu do tej konfiguracji mapy, użyj narzędzia *Przycisk niestandardowy*.

- Przejdź do [Dodaj działanie](../widgets/quick-action.md#custom-buttons): *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybkie działanie → Dodaj działanie → Konfiguruj mapę*.
- Dodaj jeden lub więcej przycisków szybkiego działania, aby zmienić widoczność określonej warstwy pogodowej.


## Prognoza offline {#offline-forecast}

### Pamięć podręczna {#cache}

Gdy karta Pogoda jest otwarta, o ile nie określono inaczej, wymagane informacje o pogodzie są pobierane z sieci. Możesz używać wstępnie załadowanej [prognozy pogody](#download-forecast) na swoich urządzeniach. Informacje o pogodzie są automatycznie zapisywane w pamięci podręcznej po pobraniu i mogą być używane w trybie offline do czasu wygaśnięcia prognozy.  

:::tip
Na urządzeniach z systemem Android można sprawdzić, kiedy dane pogodowe zostały pobrane, dotykając *widżetu Pogoda*. Wtyczka OsmAnd Development musi być włączona.  
![Data pamięci podręcznej pogody Android](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### Pobieranie prognozy {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Wtyczka Pogoda na Androidzie](@site/static/img/plugins/weather/download_weather_android.png) ![Wtyczka Pogoda na Androidzie](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Wtyczka Pogoda na iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Wtyczka Pogoda na iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>  

Dla każdego kraju można pobrać **prognozę offline** (do 7 dni). Im bliżej bieżącej daty, tym będzie ona dokładniejsza. Jeśli chcesz korzystać z prognozy pogody w trybie offline, powinieneś pobrać dane pogodowe z wyprzedzeniem.  

W menu pobierania prognozy można uzyskać informacje i ustawić parametry, aby dane pogodowe były aktualne.  
  
- **Utworzono** (*Android*) / **Zaktualizowano** (*iOS*). Pokazuje, kiedy dokonano ostatniej aktualizacji.  
- **Następna aktualizacja** (*iOS*). Kiedy będzie dostępna następna aktualizacja.  
- **Rozmiar** (*Android*) / **Rozmiar aktualizacji** (*iOS*). Pokazuje rozmiar wszystkich aktualizacji.  
- Przycisk **Aktualizuj** (*Android*) / **Aktualizuj teraz** (*iOS*). Gdy jest aktywny, pozwala na ręczną aktualizację danych pogodowych bez czekania na automatyczną aktualizację.  
- **Częstotliwość aktualizacji** (*iOS*). Może być ustawiona na 12-godzinną, 24-godzinną lub tygodniową.  
- *Aktualizuj tylko przez Wi-Fi* (*iOS*). Włącz tę opcję, jeśli nie chcesz używać danych mobilnych do pobierania.  
- Przycisk **Usuń** *ikona kosza* (*Android*) / **Usuń prognozę** (*iOS*). Umożliwia usunięcie wszystkich danych prognozy dla tego regionu.
- Przycisk **Edytuj** *ikona ołówka* (*Android*). Umożliwia zmianę nazwy pliku pogodowego.

**Uwaga:** Niektóre kraje, takie jak USA i Kanada, korzystają z jednego pliku prognozy offline dla całego kraju. Zmniejsza to liczbę pobrań i upraszcza zarządzanie danymi pogodowymi.

:::info  
Dane pogodowe są aktualizowane co 6 godzin (wszystkie 4 aktualizacje z [GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) i 3 z [ECMWF](https://www.ecmwf.int/)) i stają się dostępne w OsmAnd z niewielkim opóźnieniem, ponieważ proces obliczeniowy trwa kilka godzin przed udostępnieniem (zwykle około 07:00 UTC).  
:::


## Widżety pogodowe {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="shared_string_weather"/>*

![Widżety pogodowe na Androidzie](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Widżety pogodowe na Androidzie](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → <Translate ios="true" ids="shared_string_weather"/>*

![Widżety pogodowe na iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>

[Widżety pogodowe](../widgets/info-widgets.md#weather-widgets), takie jak Temperatura, Ciśnienie powietrza, Wiatr, Zachmurzenie i Opady, pokazują aktualne dane pogodowe dla **centralnego punktu na mapie**.

- Widżety pogodowe są wyświetlane tylko wtedy, gdy włączony jest [ekran Pogoda](#weather-forecast-screen).
- Aby aktywować widżety pogodowe, wybierz pozycję menu głównego *Konfiguruj ekran*, panel, na którym mają być umieszczone, oraz wymagane widżety z listy.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style mapy)](../../user/map/vector-maps.md)