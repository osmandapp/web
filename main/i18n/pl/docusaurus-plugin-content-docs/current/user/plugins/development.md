---
source-hash: 580c8fbd0c79564b0976cee07d1bc9d431e8f4533df5daa052bc1202ccd84564
sidebar_position: 10
title: Rozwój OsmAnd
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




## Przegląd {#overview}

Funkcje testowe aplikacji są zebrane w wtyczce rozwojowej OsmAnd. Używaj ich na własne ryzyko.

Wtyczka rozwojowa OsmAnd pozwala wypróbować nowe funkcje aplikacji lub skonfigurować OsmAnd do testowania: symulować trasy nawigacyjne, sprawdzać wydajność renderowania ekranu itp. Wtyczka jest przeznaczona dla *programistów i doświadczonych użytkowników* i nie jest wymagana do codziennego użytkowania aplikacji.

## Wymagane parametry konfiguracji {#required-setup-parameters}

Aby aktywować specjalne funkcje dla programistów i testerów:

1. [Włącz](../plugins/index.md#enable--disable) wtyczkę rozwojową OsmAnd w sekcji Wtyczki w *Menu głównym*.
2. Dokonaj niezbędnych ustawień w [menu ustawień](#plugin-settings) wtyczki.
3. Włącz **widżety programistyczne** w razie potrzeby.

## Ustawienia wtyczki {#plugin-settings}

:::info info
Ustawienia wtyczki rozwojowej OsmAnd są globalne i mają zastosowanie do wszystkich profili.
:::

Użyj jednej z następujących ścieżek, aby otworzyć ustawienia wtyczki:

- *Menu główne → Wtyczki → Rozwój OsmAnd → Ustawienia*.
- *Menu główne → [Ustawienia globalne](../personal/global-settings.md) → Profil → Ustawienia wtyczki rozwojowej OsmAnd*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>

### Teren {#terrain}

- **Użyj rastrowego [formatu SQLIte](../../technical/osmand-file-formats/osmand-sqlite) dla cieniowania wzgórz i nachylenia** (*Android*). Ładuj rastrowe mapy w starym formacie.

### Rozwiązywanie problemów {#troubleshotting}

- **Symuluj swoją pozycję** (*Android* / *iOS*). [Symuluj](#gpx-track-simulation) lokalizację i ruch za pomocą ścieżki GPX.
- **Tryb oszczędzania baterii** (*Android* / *iOS*). To ustawienie zmniejsza [częstotliwość odświeżania ekranu](#map-rendering-fps-widget) o 20 klatek na sekundę, aby pomóc oszczędzać energię baterii podczas korzystania z aplikacji.
- **Użyj ikon pozycji 3D** (*iOS*). Pozwala wybrać ikonę 3D dla [ikony Moja lokalizacja](../personal/profiles.md#my-location-appearance).
- **Symuluj dane OBD** (*Android*). Umożliwia symulację użycia [skanera OBD](./vehicle-metrics.md).
- **Informacje debugowania wydajności** (*Android*). Wyświetla wydajność renderowania i nawigacji.
- **Wyłącz warstwy mapy** (*Android*). Wyłącza wszystkie warstwy mapy nad mapą wektorową (wymaga ponownego uruchomienia).
- **Bufor Logcat** (*Android*). Sprawdź i udostępnij szczegółowe logi aplikacji.
- **Pokaż powiadomienie o naciśniętym klawiszu** (*Android*). Wyświetla wiadomość o klawiszu.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Kierunek to kierunek kompasu od Twojej aktualnej pozycji do zamierzonego celu. Wpływa na *[nagrywanie ścieżki](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. Kurs to kierunek kompasu od Twojej aktualnej pozycji w kierunku prawdziwej północy. Ta opcja jest domyślnie włączona. Wpływa na *[nagrywanie ścieżki](../plugins/trip-recording.md)*.

### Testowanie aplikacji {#application-testing}

:::caution Tylko Android
:::

- **Symuluj pierwsze uruchomienie aplikacji**. Ustawia flagę wskazującą pierwsze uruchomienie aplikacji, zachowuje wszystkie inne ustawienia bez zmian.
- **Testuj komunikaty głosowe**. Wybierz głos i przetestuj, odtwarzając komunikaty.
- **Przezroczysty pasek stanu**. Mapa staje się widoczna pod paskiem stanu.
- **Pokaż baner darmowej wersji**. Wyświetl baner darmowej wersji nawet w płatnej wersji.
- **Pokaż informacje debugowania**. Wyświetl graficzne informacje o rozmieszczeniu każdego tekstu na mapie.
- **Zezwól na wyświetlanie na wierzchu**. Pozwala na wyświetlanie tekstów mapy jeden na drugim.

### Algorytmy wewnętrzne {#internal-algorithms}

:::caution Tylko Android
:::

- **Tryb bezpieczny**. Uruchom aplikację w (wolniejszym) trybie bezpiecznym.

### Ustawienia pamięci {#memory-settings}

:::caution Tylko Android
:::

- Opcja **Pamięć przydzielona na routing** pozwala określić ilość pamięci przydzielonej na obliczanie długich tras. Możesz użyć tej opcji, jeśli w *Ustawieniach nawigacji* wybrano [Standardowe routowanie A*](../navigation/guidance/navigation-settings.md#development-settings).

***Obliczanie bardzo długich tras:***

- Większa alokacja pamięci może wpłynąć na wydajność innych aplikacji.
- [Obliczanie tras 50 km dla pieszych](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)

### Informacje i statystyki {#info-and-statistics}

:::caution Tylko Android
:::

- **Przydzielona pamięć**. Wyświetla przydzieloną pamięć systemową dla aplikacji OsmAnd.
- **Całkowita pamięć natywna**. Wyświetla całkowitą ilość pamięci natywnej przydzielonej aplikacji, w tym pamięć proporcjonalną.
- **Informacje A-GPS**. Wskazuje, kiedy dane A-GPS zostały ostatnio pobrane.
- **Informacje dzień/noc**. Wskazuje godziny wschodu i zachodu słońca dzisiaj.
- **Statystyki energii (średnia 1 / 5 / 15 minut)**. Wyświetla poziom baterii na minutę (%) i średnie zużycie energii (mAh) w odstępach 1, 5 i 15-minutowych.
- **Statystyki renderowania (średnia 1 / 5 / 15 minut)**. Pokazuje statystyki renderowania, w tym FPS dla ostatnich 1k klatek, CPU (kafelki), CPU (czas bezczynności) i CPU (tryb czuwania) średnie w odstępach 1, 5 i 15-minutowych.

**Przycisk:**

- **Zresetuj ustawienia wtyczki do wartości domyślnych**. Resetuje wszystkie ustawienia wtyczki do ich wartości domyślnych.

![Development Settings Android](@site/static/img/plugins/development/devplugin_stat_and.png)

## Widżet FPS renderowania mapy {#map-rendering-fps-widget}

:::info Ważne
Widżety deweloperskie OsmAnd można dodać do ekranu tylko wtedy, gdy wtyczka deweloperska OsmAnd jest włączona.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Development widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

[Widżet FPS](../widgets/info-widgets.md#map-rendering-fps) pokazuje, jak szybko mapa i elementy mapy są wyświetlane i odświeżane. Wartość liczbowa jest podana w klatkach na sekundę (FPS).

## Widżety pozycji kamery {#camera-position-widgets}

:::info Ważne
Widżety deweloperskie OsmAnd można dodać do ekranu tylko wtedy, gdy wtyczka deweloperska OsmAnd jest włączona.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

Możesz użyć [widżetów pozycji kamery](../widgets/info-widgets.md#camera-widgets), aby nadać mapie OsmAnd realistyczny wygląd i dopasować zdjęcia Ziemi wykonane zarówno z góry, jak i z kosmosu.

### Pochylenie kamery {#camera-tilt}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Camera tilt widget Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Camera tilt widget Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera tilt widget ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Camera tilt widget ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

Widżet pochylenia kamery wyświetla nachylenie między centralnym wektorem widoku kamery (widza) a wyimaginowaną płaską powierzchnią ziemi. Wartość domyślna to 90 stopni (bez pochylenia).

:::note
Pochylenie kamery zmienia się poprzez przesuwanie kamery (widza), podczas gdy punkt centralny na mapie (na który patrzymy) pozostaje ten sam. Odległość do niego (w rzeczywistości zoom) nie zmienia się.
Jednocześnie, z powodu wyimaginowanego ruchu widza, zmienia się odległość od kamery do powierzchni.
:::

### Wysokość kamery {#camera-elevation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Camera elevation widget Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Camera elevation widget Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera elevation widget ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Camera elevation widget ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

Widżet wysokości kamery pokazuje wysokość kamery nad poziomem powierzchni. Wysokość kamery jest podana w metrach / kilometrach.

### Poziom powiększenia {#zoom-level}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Zoom level widget Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Zoom level widget Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoom level widget ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Zoom level widget ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

Widżet ma dwa widoki, które są przełączane przez dotknięcie:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Pokazuje aktualny poziom powiększenia mapy.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Pokazuje aktualny stosunek odległości na mapie do odpowiadającej jej odległości na ziemi. Przykłady: "1 : 3 000", "1 : 3,3 M", "1: 340 K".

:::note

- Początkowy poziom powiększenia (0) to poziom, na którym cała powierzchnia ziemi (cała mapa) jest wyświetlana na ekranie, a jej rozmiar wynosi 256 na 256 pikseli.
- Każdy kolejny poziom powiększenia zmniejsza wyimaginowaną odległość do ziemi o około 2 razy.

:::

### Odległość do celu {#distance-to-target}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Distance to target widget 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Distance to target widget 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Distance to target widget 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Distance to target widget 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

Widżet odległości od kamery do celu pokazuje odległość między kamerą (widzem) a środkiem mapy. Ta odległość jest wyświetlana w metrach / kilometrach.

### Porównanie z obrazem satelitarnym {#comparison-with-a-satellite-imagery}

![Comparison](@site/static/img/plugins/development/comparison.png)

Porównanie mapy OsmAnd z powierzchnią ziemi ujawnia następujące zależności:

- Maksymalne zniekształcenie obserwuje się przy dużych powiększeniach (6-7 zoom dla pochylenia kamery 90 stopni).
- W miarę zmniejszania się pochylenia kamery (od 90 do 10 stopni) zniekształcenie mapy wzrasta.
- Zniekształcenia zaczynają być obserwowane wcześniej na wysokich szerokościach geograficznych.

Poniższa tabela zawiera informacje o pochyleniu kamery oraz odległości do celu i poziomie powiększenia, przy którym zniekształcenia mapy OsmAnd stają się widoczne. Jeśli kamera nadal będzie oddalać się od celu, obserwowane zniekształcenie mapy OsmAnd wzrośnie.

|Pochylenie (90) |Szerokość geograficzna |Maks. powiększenie |Wysokość, km |Zniekształcenie|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Pochylenie (60)** |**Szerokość geograficzna** |**Maks. powiększenie** |**Wysokość, km** |**Zniekształcenie**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Pochylenie (45)** |**Szerokość geograficzna** |**Maks. powiększenie** |**Wysokość, km** |**Zniekształcenie**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Pochylenie (20)** |**Szerokość geograficzna** |**Maks. powiększenie** |**Wysokość, km** |**Zniekształcenie**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|

## Widżet dostępnej pamięci RAM {#available-ram-widget}

Ten widżet został zaprojektowany specjalnie dla Ciebie, aby zapewnić wygodniejszą i bardziej informacyjną interakcję z dostępną pamięcią RAM na Twoim urządzeniu podczas korzystania z OsmAnd. Pozwala on łatwo i szybko monitorować dostępną pamięć RAM, co jest szczególnie przydatne podczas korzystania z OsmAnd do nawigacji. Więcej informacji na temat widżetu znajdziesz w artykule [Widżety informacyjne](../widgets/info-widgets.md#available-ram).

## Symulacja ścieżki GPX {#gpx-track-simulation}

OsmAnd umożliwia symulację lokalizacji i ruchu Twojego urządzenia za pomocą ścieżki GPX. W tym celu użyj opcji *<Translate android="true" ids="simulate_location_by_gpx"/>* w ustawieniach wtyczki rozwojowej OsmAnd [settings](#plugin-settings):

- Dotknij *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- Wybierz ścieżkę, aby symulować lokalizację i ruch urządzenia.
- Wybierz prędkość symulacji ruchu.
- Dotknij przycisku Start.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Po uruchomieniu symulacji zobaczysz na głównym ekranie aplikacji, że znacznik nawigacji porusza się zgodnie ze ścieżką GPX. Dotknij [przycisku mojej lokalizacji](../map/interact-with-map#my-location-and-zoom), aby zsynchronizować *Moją lokalizację* (symulowaną geolokalizację urządzenia) ze środkiem mapy.
Aby zatrzymać symulację ruchu urządzenia, wróć do [ustawień](#plugin-settings) rozwojowych OsmAnd i dotknij **stop** w opcji **symuluj swoją pozycję**.

- *<Translate android="true" ids="simulate_location_by_gpx"/>* można również uzyskać dostęp poprzez **[Menu szybkich akcji](../widgets/quick-action.md#navigation)**.
- Prędkość ruchu lokalizacji podczas symulacji można ustawić równą zarejestrowanej prędkości (1) lub szybszą (x2, x3, x4).
- Możesz również symulować ruch wzdłuż ścieżki GPX z [menu nawigacji](../navigation/setup/route-navigation.md#simulated-navigation) bez włączania wtyczki rozwojowej OsmAnd. W takim przypadku Twoja lokalizacja nie zostanie zsynchronizowana ze ścieżką.

## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style map)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: maj 2023*