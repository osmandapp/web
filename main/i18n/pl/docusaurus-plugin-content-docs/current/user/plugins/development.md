---
source-hash: b19d759436fe929e58af9dc49b00bc63ab8876769325d48b55875835a8238e15
sidebar_position: 10
title:  Rozszerzenie OsmAnd
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

Funkcje testowe aplikacji są zebrane we wtyczce deweloperskiej OsmAnd. Używaj ich na własne ryzyko.

Wtyczka deweloperska OsmAnd pozwala wypróbować nowe funkcje aplikacji lub skonfigurować OsmAnd do celów testowych: symulować trasy nawigacyjne, sprawdzać wydajność renderowania ekranu itp. Wtyczka jest przeznaczona dla *deweloperów i doświadczonych użytkowników* i nie jest wymagana do codziennego korzystania z aplikacji.


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Aby aktywować specjalne funkcje dla deweloperów i testerów:

1. [Włącz](../plugins/index.md#enable--disable) wtyczkę deweloperską OsmAnd w sekcji Wtyczki w *Menu głównym*.
2. Dokonaj niezbędnych ustawień w [menu Ustawienia](#plugin-settings) wtyczki.
3. W razie potrzeby włącz **widżety deweloperskie**.


## Ustawienia wtyczki {#plugin-settings}

:::info Informacja
Ustawienia wtyczki deweloperskiej OsmAnd są globalne i dotyczą wszystkich profili.
:::

Użyj jednej z następujących ścieżek, aby otworzyć ustawienia wtyczki:

- *Menu główne → Wtyczki → Rozszerzenie OsmAnd → Ustawienia*.
- *Menu główne → [Ustawienia globalne](../personal/global-settings.md) → Profil → Ustawienia wtyczki Rozszerzenie OsmAnd*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia deweloperskie Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Ustawienia deweloperskie 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia deweloperskie iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Teren {#terrain}

- **Użyj rastrowego [formatu SQLIte](../../technical/osmand-file-formats/osmand-sqlite) dla cieniowania wzgórz i nachylenia** (*Android*). Wczytuje mapy rastrowe w starym formacie.


### Rozwiązywanie problemów {#troubleshotting}

- **Symuluj swoją pozycję** (*Android* / *iOS*). [Symuluje](#gpx-track-simulation) lokalizację i ruch przy użyciu śladu GPX.
- **Tryb oszczędzania baterii** (*Android* / *iOS*). To ustawienie zmniejsza [częstotliwość odświeżania ekranu](#map-rendering-fps-widget) o 20 klatek na sekundę, aby pomóc oszczędzać energię baterii podczas korzystania z aplikacji.
- **Użyj ikon pozycji lokalizacji 3D** (*iOS*). Pozwala wybrać ikonę 3D dla [ikony Moja lokalizacja](../personal/profiles.md#my-location-appearance).
- **Symuluj dane OBD** (*Android*). Umożliwia symulację użycia [skanera OBD](./vehicle-metrics.md).
- **Informacje debugowania wydajności** (*Android*). Wyświetla wydajność renderowania i nawigacji.
- **Wyłącz warstwy mapy** (*Android*). Wyłącza wszystkie warstwy mapy nad mapą wektorową (wymagany restart).
- **Bufor Logcat** (*Android*). Sprawdzaj i udostępniaj szczegółowe logi aplikacji.
- **Pokaż komunikat o naciśniętym klawiszu** (*Android*). Wyświetla komunikat o klawiszu.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Namiar to kierunek kompasu od bieżącej pozycji do zamierzonego celu. Wpływa na *[nagrywanie trasy](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. Kurs to kierunek kompasu od bieżącej pozycji w stronę północy geograficznej. Ta opcja jest domyślnie włączona. Wpływa na *[nagrywanie trasy](../plugins/trip-recording.md)*.


### Testowanie aplikacji {#application-testing}

:::caution Tylko Android
:::

- **Symuluj pierwsze uruchomienie aplikacji**. Ustawia flagę wskazującą pierwsze uruchomienie aplikacji, pozostawiając wszystkie inne ustawienia bez zmian.
- **Testuj komunikaty głosowe**. Wybierz głos i przetestuj, odtwarzając komunikaty.
- **Przezroczysty pasek stanu**. Mapa staje się widoczna pod paskiem stanu.
- **Pokaż baner wersji darmowej**. Wyświetla baner wersji darmowej nawet w wersji płatnej.
- **Pokaż informacje debugowania**. Wyświetla informacje graficzne o umiejscowieniu każdego tekstu na mapie.
- **Zezwalaj na wyświetlanie na wierzchu**. Pozwala na wyświetlanie tekstów mapy jeden na drugim.


### Algorytmy wewnętrzne {#internal-algorithms}

:::caution Tylko Android
:::

- **Tryb awaryjny**. Uruchom aplikację w (wolniejszym) trybie awaryjnym.


### Ustawienia pamięci {#memory-settings}

:::caution Tylko Android
:::

- Opcja **Pamięć przydzielona do wyznaczania tras** pozwala określić ilość pamięci przydzielonej do obliczania długich tras. Możesz użyć tej opcji, jeśli w *Ustawieniach nawigacji* wybrano [Standardowe wyznaczanie trasy A*](../navigation/guidance/navigation-settings.md#development-settings).

***Obliczanie bardzo długich tras:***

- Wyższy przydział pamięci może wpłynąć na wydajność innych aplikacji.
- [Obliczanie 50-kilometrowych tras dla pieszych](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Informacje i statystyki {#info-and-statistics}

:::caution Tylko Android
:::

- **Przydzielona pamięć**. Wyświetla przydzieloną pamięć systemową dla aplikacji OsmAnd.
- **Całkowita pamięć natywna**. Wyświetla całkowitą ilość pamięci natywnej przydzielonej aplikacji, w tym pamięć proporcjonalną.
- **Informacje A-GPS**. Wskazuje, kiedy ostatnio pobrano dane A-GPS.
- **Informacje o dniu/nocy**. Wskazuje dzisiejsze godziny wschodu i zachodu słońca.
- **Statystyki zużycia energii (średnia z 1 / 5 / 15 minut)**. Wyświetla poziom naładowania baterii na minutę (%) oraz średnie zużycie energii (mAh) w odstępach 1, 5 i 15 minut.
- **Statystyki renderowania (średnia z 1 / 5 / 15 minut)**. Pokazuje statystyki renderowania, w tym FPS z ostatnich 1000 klatek, średnie użycie procesora (kafelki), procesora (czas bezczynności) i procesora (tryb gotowości) w odstępach 1, 5 i 15 minut.

**Przycisk:**

- **Zresetuj ustawienia wtyczki do domyślnych**. Resetuje wszystkie ustawienia wtyczki do wartości domyślnych.

    ![Ustawienia deweloperskie Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Widżet FPS renderowania mapy {#map-rendering-fps-widget}

:::info Ważne
Widżety deweloperskie OsmAnd można dodać do ekranu tylko wtedy, gdy włączona jest wtyczka deweloperska OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Widżet deweloperski FPS 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Widżet deweloperski FPS 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Widżet deweloperski iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

[Widżet FPS](../widgets/info-widgets.md#map-rendering-fps) pokazuje, jak szybko mapa i jej elementy są wyświetlane i odświeżane. Wartość liczbowa jest podawana w klatkach na sekundę (FPS).


## Widżety pozycji kamery {#camera-position-widgets}

:::info Ważne
Widżety deweloperskie OsmAnd można dodać do ekranu tylko wtedy, gdy włączona jest wtyczka deweloperska OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Widżety pozycji kamery 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Widżety pozycji kamery 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Widżety pozycji kamery 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Widżety pozycji kamery 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

Możesz użyć [widżetów pozycji kamery](../widgets/info-widgets.md#camera-widgets), aby nadać mapie OsmAnd realistyczny wygląd i dopasować ją do zdjęć Ziemi wykonanych zarówno z góry, jak i z kosmosu.


### Pochylenie kamery {#camera-tilt}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet pochylenia kamery Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Widżet pochylenia kamery Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet pochylenia kamery iOS 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Widżet pochylenia kamery iOS 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

Widżet pochylenia kamery wyświetla nachylenie między centralnym wektorem widoku kamery (obserwatora) a wyimaginowanym płaskim gruntem ziemi. Domyślna wartość to 90 stopni (bez pochylenia).

:::note
Pochylenie kamery jest zmieniane przez poruszanie kamerą (obserwatorem), podczas gdy centralny punkt na mapie (na który patrzymy) pozostaje ten sam. Odległość do niego (w rzeczywistości powiększenie) nie zmienia się.
Jednocześnie, z powodu wyimaginowanego ruchu obserwatora, zmienia się odległość od kamery do powierzchni.
:::


### Wysokość kamery {#camera-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet wysokości kamery Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Widżet wysokości kamery Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet wysokości kamery iOS 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Widżet wysokości kamery iOS 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

Widżet wysokości kamery pokazuje wysokość kamery nad poziomem powierzchni. Wysokość kamery jest podawana w metrach / kilometrach.


### Poziom powiększenia {#zoom-level}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet poziomu powiększenia Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Widżet poziomu powiększenia Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet poziomu powiększenia iOS 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Widżet poziomu powiększenia iOS 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

Widżet ma dwa widoki, które przełącza się, dotykając go:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Pokazuje bieżący poziom powiększenia mapy.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Pokazuje bieżący stosunek odległości na mapie do odpowiadającej jej odległości na ziemi. Przykłady: "1 : 3 000", "1 : 3,3 M" "1: 340 K".

:::note

- Początkowy poziom powiększenia (0) to poziom, na którym cała powierzchnia ziemi (pełna mapa) jest wyświetlana na ekranie, a jej rozmiar to 256 na 256 pikseli.
- Każdy kolejny poziom powiększenia zmniejsza wyimaginowaną odległość do ziemi około 2 razy.

:::

### Odległość do celu {#distance-to-target}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet odległości do celu 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Widżet odległości do celu 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet odległości do celu 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Widżet odległości do celu 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

Widżet odległości od kamery do celu pokazuje odległość między kamerą (obserwatorem) a środkiem mapy. Odległość ta jest wyświetlana w metrach / kilometrach.


### Porównanie ze zdjęciem satelitarnym {#comparison-with-a-satellite-imagery}

![Porównanie](@site/static/img/plugins/development/comparison.png)

Porównanie mapy OsmAnd z powierzchnią ziemi ujawnia następujące prawidłowości:

- Maksymalne zniekształcenie obserwuje się przy dużych powiększeniach (powiększenie 6-7 dla nachylenia kamery 90 stopni).
- W miarę zmniejszania się nachylenia kamery (od 90 do 10 stopni) zniekształcenie mapy wzrasta.
- Zniekształcenia zaczynają być obserwowane wcześniej na dużych szerokościach geograficznych.

Poniższa tabela zawiera informacje o nachyleniu kamery oraz odległości do celu i poziomie powiększenia, przy którym zniekształcenia mapy OsmAnd stają się widoczne. Jeśli kamera będzie się nadal oddalać od celu, obserwowane zniekształcenie mapy OsmAnd będzie rosło.

|Nachylenie (90) |Szer. geogr. |Maks. powiększenie |Wysokość, km |Zniekształcenie|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Nachylenie (60)** |**Szer. geogr.** |**Maks. powiększenie** |**Wysokość, km** |**Zniekształcenie**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Nachylenie (45)** |**Szer. geogr.** |**Maks. powiększenie** |**Wysokość, km** |**Zniekształcenie**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Nachylenie (20)** |**Szer. geogr.** |**Maks. powiększenie** |**Wysokość, km** |**Zniekształcenie**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## Widżet dostępnej pamięci RAM {#available-ram-widget}

Ten widżet został zaprojektowany specjalnie dla Ciebie podczas korzystania z OsmAnd, aby zapewnić wygodniejszą i bardziej informacyjną interakcję z dostępną pamięcią RAM na Twoim urządzeniu. Pozwala on łatwo i szybko monitorować dostępną pamięć RAM, co jest szczególnie przydatne podczas korzystania z OsmAnd do nawigacji. Przeczytaj więcej o widżecie w artykule [Widżety informacyjne](../widgets/info-widgets.md#available-ram).


## Symulacja trasy GPX {#gpx-track-simulation}

OsmAnd daje możliwość symulacji lokalizacji i ruchu urządzenia za pomocą śladu GPX. W tym celu użyj opcji *<Translate android="true" ids="simulate_location_by_gpx"/>* w [ustawieniach](#plugin-settings) wtyczki deweloperskiej OsmAnd:

- Dotknij *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- Wybierz ślad, aby symulować lokalizację i ruch urządzenia.
- Wybierz prędkość symulacji ruchu.
- Dotknij przycisku Start.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia deweloperskie Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Ustawienia deweloperskie Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia deweloperskie iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Ustawienia deweloperskie iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Po uruchomieniu symulacji zobaczysz na głównym ekranie aplikacji, że znacznik nawigacji porusza się zgodnie ze śladem GPX. Dotknij [przycisku mojej lokalizacji](../map/interact-with-map.md#my-location-and-zoom), aby zsynchronizować *Moją lokalizację* (symulowaną geolokalizację urządzenia) ze środkiem mapy.
Aby zatrzymać symulację ruchu urządzenia, wróć do [ustawień](#plugin-settings) wtyczki deweloperskiej OsmAnd i dotknij **stop** w opcji **symuluj swoją pozycję**.

- Dostęp do *<Translate android="true" ids="simulate_location_by_gpx"/>* można również uzyskać poprzez **[menu Szybkich akcji](../widgets/quick-action.md#navigation)**.
- Prędkość ruchu podczas symulacji można ustawić jako równą zarejestrowanej prędkości (1) lub szybszą (x2, x3, x4).
- Możesz również symulować ruch wzdłuż śladu GPX z [menu nawigacji](../navigation/setup/route-navigation.md#simulated-navigation) bez włączania wtyczki deweloperskiej OsmAnd. W takim przypadku Twoja lokalizacja nie będzie synchronizowana ze śladem.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)