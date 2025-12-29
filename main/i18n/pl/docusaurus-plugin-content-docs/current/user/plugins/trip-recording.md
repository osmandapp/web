---
source-hash: 18bffcca1c85af3b09a5ad3aa863211cc3d83cece85301333f5d7e81b878d98a
sidebar_position: 15
title:  Nagrywanie trasy
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

**Wtyczka Nagrywanie trasy** to niezbędne narzędzie do rejestrowania tras, przemieszczania się i treningów. Ta funkcja nie tylko umożliwia nagrywanie podróży, ale także pozwala na łatwe ponowne wykorzystanie, modyfikację, aktualizację i udostępnianie tras innym.  

Dzięki *wtyczce Nagrywanie trasy* można tworzyć nowe trasy, wyświetlać nagrane bezpośrednio na mapie i zarządzać istniejącymi zapisami. Oferuje cenne informacje o podróżach, takie jak prędkość, zmiany wysokości, szczegóły terenu i dane z zewnętrznych czujników. Wtyczka rejestruje trasę, umożliwiając szczegółową analizę i udostępnianie po zakończeniu podróży.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nagrana trasa w systemie Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nagrana trasa w systemie iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Aby rozpocząć nagrywanie tras, należy dokonać następujących ustawień:

1. [Włącz](../plugins/index.md#enable--disable) **wtyczkę Nagrywanie trasy**.  
2. [Skonfiguruj](#recording-settings) **ustawienia nagrywania** dla wymaganego [profilu](../personal/profiles.md).  
3. [Dodaj](#widgets) **widżety Nagrywania trasy** na ekran (opcjonalnie).
4. [Zarządzaj](../map/tracks/appearance.md) trasami na mapie (opcjonalnie).


## Nagrywanie nowej trasy {#new-track-recording}

![Widżet Dystans/Start-Stop w iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Widżet Dystans/Start-Stop w Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Dzięki wtyczce Nagrywanie trasy w OsmAnd można łatwo rozpocząć nagrywanie trasy, korzystając z różnych wygodnych opcji. Oto jak możesz rozpocząć swoją podróż:

- [Widżet Dystans/Start-Stop](#distance-start-stop) — Użyj, aby aktywować nagrywanie.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Stuknij przycisk w zakładce *Główne <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- Przyciski [Szybkiej akcji](../widgets/quick-action.md#add-and-delete-actions) — Aby rozpocząć nagrywanie podróży, przejdź do *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybka akcja → Dodaj akcję → Moje miejsca* i wybierz [Start / Pauza: Nagrywanie trasy](../widgets/quick-action.md#my-places).

- *Tylko Android*:
    - Przejdź do *Główne <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Powiadomienie systemowe](#notifications) — Użyj w obszarze powiadomień urządzenia .

    - [Launcher aplikacji](#launcher-android) — Użyj, aby rozpocząć nagrywanie .  

**Zalecenia:**

- [Dokładna lokalizacja](../start-with/first-steps.md#permission-to-access-the-location) — Aby zapewnić dokładne nagrywanie trasy, upewnij się, że OsmAnd ma to uprawnienie.

- [Rozwiązywanie problemów](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — **Urządzenia z systemem iOS** mogą czasami tymczasowo **zawieszać lub zatrzymywać aplikacje** działające w tle, co może przerwać nagrywanie trasy.

- **Źródło lokalizacji** (*Tylko Android*) — Dostosuj ustawienia w OsmAnd, aby wybrać najbardziej odpowiedniego dostawcę GPS w celu uzyskania dokładnych nagrań. [Dowiedz się więcej tutaj](../personal/global-settings.md#location-source).


### Okno dialogowe Start {#start-a-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Okno dialogowe Start otwiera się, jeśli opcja **<Translate android="true" ids="show_start_dialog"/>** jest włączona w sekcji ustawień okna dialogowego Start.

![Rozpocznij nagrywanie w systemie Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Okno dialogowe Start otwiera się, jeśli opcja **<Translate ios="true" ids="track_interval_remember"/>** nie jest włączona.

![Rozpocznij nagrywanie w systemie iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Interwał rejestrowania** (*Android/iOS*). To ustawienie kontroluje, jak często aplikacja żąda danych z czujnika GPS w celu oznaczenia nowych punktów na trasie. Dostosowanie interwału pozwala zrównoważyć szczegółowość trasy i zużycie baterii. Krótszy interwał zapewni bardziej szczegółowe trasy, ale większe zużycie baterii, podczas gdy dłuższy interwał oszczędza baterię, ale zmniejsza dokładność trasy.

- **Ikona linii** (*Android*). Stuknij tę ikonę, aby uzyskać dostęp do opcji [Wygląd trasy](../map/tracks/appearance.md). Tutaj możesz dostosować wygląd trasy na mapie, w tym kolor, grubość i styl linii. Po zapisaniu trasy z dostosowanym wyglądem ustawienia te zostaną zachowane dla przyszłych nagrań, zapewniając spójność za każdym razem, gdy wyświetlasz lub ponownie włączasz trasę.

- **Menu ustawień** (*Android*). Uzyskaj dostęp do tego menu, aby dostosować preferencje nagrywania. Szczegółowe informacje można znaleźć w sekcji [Ustawienia nagrywania trasy](#recording-settings).

- **Zapamiętaj mój wybór** (*iOS*). Po włączeniu nagrywanie trasy rozpoczyna się automatycznie, bez pytania o dodatkowe ustawienia lub potwierdzenie. Jeśli chcesz zmienić ustawienia nagrywania przed rozpoczęciem nowej trasy, uruchom ponownie wtyczkę Nagrywanie trasy, aby menu ustawień pojawiło się ponownie.


### Launcher (Android) {#launcher-android}

![Menu kontekstowe ikony](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Ikona Rozpocznij nagrywanie](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Możesz szybko rozpocząć nowe nagrywanie trasy bezpośrednio z ekranu urządzenia z systemem Android, korzystając z menu kontekstowego ikony aplikacji OsmAnd.

- **Długie dotknięcie** ikony aplikacji OsmAnd otwiera menu kontekstowe, w którym można znaleźć opcję **Rozpocznij nagrywanie**.

- Stuknij opcję **Rozpocznij nagrywanie**, aby uruchomić aplikację OsmAnd z [ustawieniami nagrywania trasy](#overview-screen) wyświetlonymi na ekranie.

- **Długie dotknięcie** opcji **Rozpocznij nagrywanie** w menu kontekstowym ikony aplikacji, aby dodać skrót w celu szybszego dostępu.

Gdy nagrywanie trasy jest aktywne, w rogu ikony aplikacji OsmAnd pojawi się plakietka powiadomienia, wskazująca, że nagrywanie jest w toku. Więcej informacji na temat zarządzania tym powiadomieniem można znaleźć w sekcji [Powiadomienia](#notifications).


## Bieżące nagrywanie trasy {#current-track-recording}

Dla *Zatrzymaj / Zapisz / Wstrzymaj*:

- Aby **zatrzymać** nagrywanie, stuknij odpowiedni przycisk w oknie dialogowym [widżetu Dystans/Start-Stop](#distance-start-stop).

- (*Tylko Android*) Aby **zatrzymać** nagrywanie, stuknij pozycję menu głównego *Nagrywanie trasy*.

- Aby **zatrzymać** lub **zapisać** nagrywaną trasę, przejdź do *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [zakładka *<Translate android="true" ids="shared_string_gpx_files"/>*](../personal/myplaces.md#tracks) i stuknij odpowiedni przycisk w polu *Aktualnie nagrywana trasa*.

- Aby **zapisać, wstrzymać, rozpocząć** nowy segment lub **zakończyć** nagrywanie, użyj przycisków [Szybkiej akcji](../widgets/quick-action.md#add-and-delete-actions). Przejdź do *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybka akcja → Dodaj akcję → [Moje miejsca](../widgets/quick-action.md#my-places)* i dodaj jeden lub więcej przycisków szybkiej akcji.

- (*Tylko Android*) Aby **wstrzymać** lub **zapisać** nagrywaną trasę, użyj [powiadomienia](#notifications) systemowego w obszarze powiadomień urządzenia.<br/><br/> ![zatrzymaj-zapisz-wstrzymaj](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Ekran przeglądu {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![przegląd](@site/static/img/plugins/trip-recording/overview_screen_graphs_new_andr.png)  ![przegląd](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zakończ nagrywanie w iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png)  ![Zakończ nagrywanie w iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_new_ios.png)

</TabItem>

</Tabs>

W OsmAnd wersje na **Androida** i **iOS** obsługują interfejs nagrywania trasy nieco inaczej. W systemie Android znajdziesz dedykowane menu dla kontekstu *Nagrywanie trasy*, podczas gdy w systemie iOS jest to usprawnione w menu kontekstowym *Aktualnie nagrywana trasa*.

Podczas nagrywania trasy generowane są dynamiczne wykresy, które dostarczają wizualnych danych o podróży w czasie rzeczywistym. Wykresy te mogą odzwierciedlać informacje dla całej trasy lub tylko dla wybranego segmentu, w zależności od poziomu powiększenia.  
Oto, co można na nich znaleźć:

- **Wartości danych**. Po prawej stronie wykresu znajdują się wartości ***najwyższe***, ***najniższe*** i ***średnie*** dla widocznej części trasy.

- **Wykres kluczowych informacji**:
    - ***Android***. Dla ***osi Y*** na wykresie można wybrać *do dwóch parametrów* ze wszystkich dostępnych danych, takich jak *Wysokość*, *Nachylenie*, *Prędkość* i [informacje z czujników zewnętrznych](../plugins/external-sensors.md#trip-recording). Dla ***osi X*** wybierz wyświetlanie *Dystansu*, *Czasu* lub *Pory dnia*.
    - ***iOS***. Parametry są zorganizowane w zakładkach *Przegląd*, *Wysokość* i *Prędkość* z odpowiednimi wartościami dla osi Y i *Dystans* dla osi X.

- **Statystyki**. W systemie Android wyświetlany jest stały zestaw danych statystycznych niezależnie od ustawień wykresu: *Dystans*, *Czas trwania*, *W górę*, *W dół*, *Średnia prędkość*. W systemie iOS każda karta, Przegląd, Wysokość i Prędkość, ma inny zestaw danych.

Aby uzyskać bardziej szczegółowy widok, można **skalować wykres**:

- Użyj [gestu dwoma palcami](../map/interact-with-map.md#gestures), aby powiększyć lub pomniejszyć i skupić się na określonych interwałach.
- Stuknij dowolny punkt na wykresie, aby wyświetlić znacznik pokazujący dokładne wartości dla tej lokalizacji.

| |  
| ------------- |
|**Zakładka Przegląd** w iOS (dla Androida parametry osi Y to *Wysokość*, *Prędkość*, a parametr osi X to *Dystans*). Ta zakładka wyświetla wykres pokazujący zmiany prędkości i wysokości na całej długości trasy oraz kluczowe szczegóły trasy. Dane trasy dla iOS: *Dystans*, *Czas trwania*, *Czas rozpoczęcia* i *Czas zakończenia*. Poniżej można zobaczyć, jak jest to wyświetlane w wersjach na Androida i iOS. |
| ![dane](@site/static/img/plugins/trip-recording/graph_overview_new_andr.png)  ![dane](@site/static/img/plugins/trip-recording/graph_overview_new_ios.png) |
| **Zakładka Wysokość** w iOS (dla Androida parametry osi Y to *Wysokość*, *Nachylenie*, a parametr osi X to *Dystans*). Ta zakładka koncentruje się na profilu wysokościowym zarejestrowanej trasy, dostarczając informacji o zmianach wysokości i nachyleniu terenu. Kluczowe wskaźniki dla systemu iOS obejmują: *Średnia wysokość*, *Zakres wysokości*, *W górę* i *W dół*. Poniższe wykresy ilustrują różnice między interfejsami Androida i iOS. |
| ![dane](@site/static/img/plugins/trip-recording/graph_altitude_new_andr.png)  ![dane](@site/static/img/plugins/trip-recording/graph_altitude_new_ios.png) |
| **Zakładka Prędkość** w iOS (dla Androida parametr osi Y to *Prędkość*, a parametr osi X to *Dystans*). Zakładka Prędkość podświetla dane związane z prędkością na całej trasie. W systemie iOS zawiera takie informacje, jak *Średnia prędkość*, *Maksymalna prędkość*, *Czas w ruchu* i *Skorygowany dystans*. Poniższe zrzuty ekranu pokazują, jak te dane są wyświetlane na obu platformach. |
| ![dane](@site/static/img/plugins/trip-recording/graph_speed_new_andr.png)  ![dane](@site/static/img/plugins/trip-recording/graph_speed_new_ios.png) |
| W systemie **Android** można tworzyć więcej kombinacji dostępnych danych osi Y i wartości osi X. |
| ![dane](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Więcej szczegółów można znaleźć w [**Menu kontekstowym tras**](../map/tracks/track-context-menu.md#options), gdzie można zarządzać różnymi opcjami związanymi z trasami, takimi jak zmiana nazwy, usuwanie lub dodawanie punktów trasy. Aby dostosować wygląd tras na mapie, odwiedź sekcję [**Wygląd**](../map/tracks/appearance.md). Jeśli chcesz dodać określone punkty trasy do bieżącej trasy, zapoznaj się z przewodnikiem [**Punkty trasy**](../map/tracks/track-context-menu.md#points--waypoints). W celu wprowadzenia jakichkolwiek modyfikacji, takich jak zmiana nazwy trasy, użyj zakładki [**Opcje**](https://osmand.net/docs/user/map/track-context-menu#options) w menu kontekstowym tras.
:::


### Pokaż na mapie {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![pokaż_tr_na_mapie_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Konfiguruj trasy na mapie Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![pokaż_tr_na_mapie_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Konfiguruj trasy na mapie iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Zarządzaj widocznością tras na mapie, korzystając z jednej z dwóch opcji. Przejdź do *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [zakładka *<Translate ios="true" ids="shared_string_gpx_tracks"/>*](../map/tracks/index.md#my-places) i włącz opcję *Pokaż na mapie* dla każdej trasy, którą chcesz wyświetlić lub ukryć. Alternatywnie możesz przejść do *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map), aby szybko dostosować widoczność wszystkich tras w jednym miejscu.


### Zarejestrowany plik GPX {#recorded-gpx-file}

OsmAnd rejestruje podróż w ustrukturyzowanym [pliku GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), używając hierarchii *plik > trasa > segmenty > punkty*. Oto jak to działa:

- **Punkty** reprezentują poszczególne momenty zarejestrowanej ścieżki, każdy oznaczony atrybutami, takimi jak współrzędne, prędkość, wysokość i kurs.
- Punkty te są grupowane w **trasy**, które reprezentują całą Twoją trasę.
- Jeśli w nagraniu wystąpi przerwa (na przykład, jeśli śledzenie zostało wstrzymane), następny punkt po przerwie rozpoczyna nowy **segment**, oznaczając rozdzielenie podróży.
- Zarówno **segmenty**, jak i **trasy** są wizualnie reprezentowane za pomocą ikon *Start* i *Koniec* na mapie.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| Parametr  | Opis |
|-----------------|----------------|
| `trkpt` | **Punkt trasy** reprezentuje określoną lokalizację geograficzną wykrytą podczas aktywności. Każdy punkt trasy zawiera współrzędne szerokości i długości geograficznej, tworząc podstawę zarejestrowanej ścieżki. |
| `trkseg`  | **Segment trasy** grupuje kolejne punkty trasy, oddzielone przerwami w aktywności, takimi jak pauzy lub postoje. Pomaga to odróżnić ciągły ruch od okresów bezczynności w ramach jednego nagrania.  |
| `lat` | **Szerokość geograficzna** wskazuje pozycję punktu na powierzchni Ziemi w kierunku północ-południe. Jest to połowa pary współrzędnych używanej do precyzyjnego określenia dokładnej lokalizacji.   |
| `lon` | **Długość geograficzna** określa pozycję wschód-zachód, uzupełniając szerokość geograficzną, aby dokładnie zlokalizować punkt na kuli ziemskiej. Razem szerokość i długość geograficzna określają precyzyjną pozycję geograficzną.    |
| `ele` | **Wysokość** mierzy wysokość punktu trasy nad poziomem morza, zapisaną w metrach. Może to być przydatne do śledzenia zmian wysokości podczas aktywności, takich jak wędrówki piesze lub przejażdżki rowerowe.    |
| `time` | **Znacznik czasu** rejestruje dokładną datę i godzinę zarejestrowania punktu trasy. Pozwala to na precyzyjne śledzenie czasu trwania i harmonogramu aktywności.    |
| `hdop` | **Horyzontalne rozmycie precyzji (HDOP)** to miara dokładności GPS, odzwierciedlająca potencjalny błąd lokalizacji wynikający z pozycji satelitów. W przeciwieństwie do standardowego HDOP, trasy GPX OsmAnd używają tej wartości do reprezentowania dokładności poziomej w metrach. Należy pamiętać, że ta implementacja różni się od typowych standardów HDOP. [Dowiedz się więcej](https://github.com/osmandapp/Osmand/issues/3445).   |
| `speed` | **Prędkość** rejestruje tempo poruszania się w metrach na sekundę. Daje wgląd w tempo podczas różnych segmentów aktywności.  |
| `heading`  | **Kurs** wskazuje kierunek, w którym skierowany jest przód pojazdu lub urządzenia, mierzony w stopniach. Różni się od kierunku ruchu, który jest rzeczywistą ścieżką ruchu. Różnice mogą wynikać z czynników zewnętrznych, takich jak wiatr, prądy lub warunki drogowe. [Więcej o kursie](https://en.wikipedia.org/wiki/Heading_(navigation)).  |
| `speed_sensor` | **Prędkość** z [czujników zewnętrznych](../plugins/external-sensors.md) przechwytuje dane z podłączonych czujników, zapewniając bardziej precyzyjne informacje o prędkości, szczególnie przydatne podczas jazdy na rowerze. Więcej szczegółów można znaleźć w [dokumentacji formatu plików GPX](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `cadence` | **Kadencja** mierzy liczbę obrotów pedałów na minutę, rejestrowaną za pomocą [czujników zewnętrznych](../plugins/external-sensors.md). Jest to szczególnie przydatne dla rowerzystów, którzy chcą monitorować i optymalizować wydajność pedałowania. [Czytaj więcej](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `power` | **Moc rowerowa** określa ilościowo moc generowaną podczas pedałowania, przechwytywaną z [czujników zewnętrznych](../plugins/external-sensors.md). Jest to niezbędny wskaźnik dla poważnych rowerzystów, którzy chcą ocenić swoje wyniki. [Dowiedz się więcej](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `atemp` | **Temperatura powietrza** rejestruje temperaturę otoczenia podczas aktywności, mierzoną za pomocą [czujników zewnętrznych](../plugins/external-sensors.md). Należy pamiętać, że temperatura wody nie jest obsługiwana. [Szczegóły tutaj](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `hr` | **Tętno** monitoruje liczbę uderzeń serca na minutę, wykorzystując dane z podłączonych [czujników](../plugins/external-sensors.md). Informacje te mogą być niezbędne do śledzenia wydolności sercowo-naczyniowej podczas treningów. [Dowiedz się więcej](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |


## Ustawienia nagrywania {#recording-settings}

Przed rozpoczęciem śledzenia podróży należy odpowiednio skonfigurować **wtyczkę Nagrywanie trasy**, aby uzyskać optymalną wydajność.

- **Ustawienia specyficzne dla profilu**. Każdy profil w aplikacji może mieć własne, unikalne ustawienia nagrywania trasy. Pozwala to na precyzyjne dostosowanie zachowania nagrywania w oparciu o aktywność, taką jak jazda samochodem, jazda na rowerze, a nawet nordic walking, które mogą wymagać różnych konfiguracji.

- **Dostosuj parametry nagrywania**. Ustawienia nagrywania mogą się różnić w zależności od sposobu poruszania się. Na przykład jazda na długich dystansach może wymagać niższej częstotliwości nagrywania, podczas gdy wędrówki piesze lub spacery mogą wymagać częstszych aktualizacji.

- **Precyzyjne dane o lokalizacji**. Aby zapewnić płynność i użyteczność nagrań w przyszłości, można dostosować sposób przechwytywania punktów lokalizacji. Może to obejmować dostosowanie częstotliwości nagrywania, formatu danych (np. liczby punktów na jednostkę odległości) lub odstępów między zarejestrowanymi punktami.

- **Ustawienia globalne**. Ustawienia nagrywania trasy są konfigurowane dla każdego profilu, którym można zarządzać w globalnych [ustawieniach](../personal/global-settings.md) aplikacji. Przed dostosowaniem wtyczki Nagrywanie trasy wybierz profil, który chcesz skonfigurować w sekcji [profile](../personal/profiles.md). Stamtąd przejdź do ustawień profilu, aby uzyskać dostęp do opcji nagrywania trasy.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Konfiguracja nagrywania trasy w systemie Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png)  ![Konfiguracja nagrywania trasy w systemie Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Konfiguracja nagrywania trasy w systemie iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png)  ![Konfiguracja nagrywania trasy w systemie iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis |
|---|---|
| **Okno dialogowe optymalizacji baterii** (*Android*) | Otwiera [ustawienia optymalizacji baterii systemu Android](#battery-optimization). Stuknij *Nie pytaj ponownie*, jeśli nie chcesz, aby monit pojawiał się ponownie. |
| **Pokaż okno dialogowe startu** (*Android*) | Włącza okno dialogowe, w którym można skonfigurować ustawienia przed rozpoczęciem nagrywania. Jeśli opcja jest wyłączona, nagrywanie rozpocznie się automatycznie. |
| **Automatyczne nagrywanie trasy podczas nawigacji** | Automatycznie nagrywa trasę podczas nawigacji i zapisuje ją w zakładce *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.<br />*Uwaga*: Nagrywanie trasy zużywa baterię i działa w tle, nawet jeśli ekran jest wyłączony. |
| **Ogólny interwał rejestrowania** | Określa, jak często rejestrowane są punkty lokalizacji. Domyślna wartość to 5 sekund. Jest włączany za pomocą *widżetu Nagrywanie trasy*. |
| **Minimalne przemieszczenie** | Filtr zapobiegający rejestrowaniu punktów, gdy ruch jest niewielki lub nie ma go wcale. Pomaga zredukować szum danych.<ul><li>*Skutki uboczne*: Okresy odpoczynku mogą nie być rejestrowane, a małe ruchy mogą być ignorowane. Może to zredukować dane po przetworzeniu, ale może również uniemożliwić rejestrowanie błędów GPS.</li><li>*Zalecenie*: Ustaw przemieszczenie na 5 metrów, jeśli chcesz mieć mniej drobnych szczegółów w nagraniach.</li></ul> |
| **Minimalna dokładność** | Odfiltrowuje punkty lokalizacji poniżej minimalnego progu dokładności, zgodnie z raportem urządzenia.<ul><li>*Skutki uboczne*: Może brakować punktów w obszarach o słabym sygnale (pod mostami, drzewami, między budynkami lub w niektórych warunkach pogodowych).</li><li>*Zalecenie*: W razie wątpliwości lepiej wyłączyć ten filtr, aby uniknąć utraty danych.</li></ul><details><summary>*Uwaga*</summary>Załóżmy, że GPS został wyłączony tuż przed nagrywaniem. W takim przypadku pierwszy zmierzony punkt może mieć zmniejszoną dokładność, więc lepiej jest odczekać chwilę przed zarejestrowaniem punktu lub zarejestrować najlepszy z 3 kolejnych punktów.</details> |
| **Minimalna prędkość** | Ustawia próg ignorowania punktów zarejestrowanych poniżej określonej prędkości.<ul><li>*Skutki uboczne*: Odcinki, na których prędkość spada poniżej określonego progu, nie będą rejestrowane.</li><li>*Zalecenie*: Zamiast tego użyj filtra *Minimalne przemieszczenie*, ponieważ może on dać lepsze wyniki bez utraty ważnych danych.</li></ul><details><summary>*Uwaga*</summary>Najpierw spróbuj użyć wykrywania ruchu za pomocą filtra minimalnego przemieszczenia (B), może to dać lepsze wyniki i stracisz mniej danych. Jeśli trasy pozostają zaszumione przy niskich prędkościach, spróbuj tutaj wartości niezerowych. Należy pamiętać, że niektóre pomiary mogą w ogóle nie zgłaszać żadnej wartości prędkości (niektóre metody oparte na sieci), w którym to przypadku nic nie zostanie zarejestrowane.<br/><br/>Sprawdzanie prędkości > 0: Większość chipsetów GPS podaje wartość prędkości tylko wtedy, gdy algorytm ustali, że jesteś w ruchu, a żadnej, jeśli nie jesteś. Stąd użycie ustawienia > 0 w tym filtrze w pewnym sensie wykorzystuje wykrywanie ruchu przez chipset GPS. Ale nawet jeśli nie jest to filtrowane tutaj w czasie nagrywania, nadal używamy tej funkcji w naszej analizie GPX do określenia skorygowanego dystansu, tj. wartość wyświetlana w tym polu to odległość zarejestrowana podczas ruchu.</details> |
| **Automatyczne dzielenie nagrań po przerwie** | Automatycznie dzieli trasy na podstawie przerw czasowych między zarejestrowanymi punktami. <ul><li>Nowy segment rozpoczyna się po 6-minutowej przerwie.</li><li>Nowa trasa rozpoczyna się po 2-godzinnej przerwie.</li><li>Nowy plik rozpoczyna się po zmianie daty.</li><li>Przerwy mogą wynikać z utraty sygnału GPS, niskiej prędkości lub ustawień konfiguracyjnych.</li></ul><details><summary>*Uwaga*</summary>Przerwa jest identyfikowana, gdy nie są rejestrowane żadne punkty. Może się to zdarzyć, ponieważ lokalizacja nie jest wykrywana lub jest wykrywana, ale nie jest rejestrowana. Może to być spowodowane kilkoma czynnikami, w tym słabym sygnałem GPS z powodu złych warunków pogodowych lub prędkością ruchu spadającą poniżej skonfigurowanego progu. W takich przypadkach, mimo że urządzenie może wykryć lokalizację, nie rejestruje jej.<br/><br/>Te przerwy w zarejestrowanych danych mogą wywołać utworzenie nowego segmentu w tej samej trasie, nowej trasy w tym samym pliku lub nowego pliku GPX w ramach jednego nagrania. Jest to zarządzane w ramach jednej sesji nagrywania start/stop.</details> |
| **Zapobiegaj samodzielnemu rejestrowaniu** (*Android*) | Wstrzymuje nagrywanie trasy, gdy aplikacja OsmAnd zostanie zamknięta (za pomocą *ostatnich aplikacji*). Wskaźnik działania w tle nie jest wyświetlany w panelu powiadomień systemu Android. |
| **Dołącz kurs** | Rejestruje kurs (kierunek ruchu) dla każdego punktu w pliku GPX. Kurs to kierunek, w którym skierowane jest urządzenie, który może różnić się od kierunku ruchu z powodu czynników zewnętrznych, takich jak wiatr lub poślizg. |
| **Aktywność**  | Opcja pozwala na wstępne wybranie [typu aktywności](../map/tracks/track-context-menu.md#ttrack-activity-type) dla profilu, który jest następnie automatycznie stosowany do wszystkich zarejestrowanych tras. |
| **Czujniki zewnętrzne** <br/> *Wymaga włączonej wtyczki* | Dane z [czujników zewnętrznych](../plugins/external-sensors.md#trip-recording), takie jak *<Translate android="true" ids="map_widget_ant_heart_rate"/>*, lub *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* są zapisywane w pliku GPX. Dane *Dystans* nie są rejestrowane w systemie Android ani iOS. Wyświetlane tylko wtedy, gdy włączona jest [wtyczka Czujniki zewnętrzne](../plugins/external-sensors.md). |
| **Metryki pojazdu** <br/> *Wymaga włączonej wtyczki* | Dane ze [skanera OBD-II](../plugins/vehicle-metrics.md#trip-recording) są zapisywane w pliku GPX. Wyświetlane tylko wtedy, gdy włączona jest [wtyczka Metryki pojazdu](../plugins/vehicle-metrics.md).<br />*Uwaga*: Możesz dodać, które metryki mają być rejestrowane w pliku GPX z listy: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Folder przechowywania tras** (*Android*) | Określa, gdzie w zakładce *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* przechowywane są zarejestrowane trasy. Opcje obejmują przechowywanie wszystkich tras w folderze Rec lub organizowanie ich według miesięcy, np. Rec/rrrr-mm. |
| **Powiadomienie** | Kontroluje wyświetlanie powiadomienia systemowego [nagrywania trasy](#notifications) w obszarze powiadomień urządzenia, które pozwala na rozpoczęcie nagrywania podróży. |
| **Śledzenie online** (*Android*) | Umożliwia śledzenie lokalizacji w czasie rzeczywistym poprzez wysyłanie zarejestrowanych punktów na określony adres URL. Interwał śledzenia określa, jak często wysyłane są punkty, a bufor czasowy przechowuje punkty, gdy nie ma połączenia z Internetem.<details><summary>*Uwaga*</summary>Jeśli ta opcja jest włączona, a nagrywanie trasy jest w toku, widżet Dystans/Start-Stop (REC) zmienia kolor na **zielony** zamiast **czerwonego**, wskazując, że każdy zarejestrowany punkt jest przesyłany na określony adres URL. Pole **Adres internetowy** umożliwia wprowadzenie adresu URL przy użyciu następującego formatu parametrów:<ul><li>`lat={0}`: Szerokość geograficzna</li><li>`lon={1}`: Długość geograficzna</li><li>`timestamp={2}`: Znacznik czasu (czas uniksowy)</li><li>`hdop={3}`: Horyzontalne rozmycie precyzji</li><li>`altitude={4}`: Wysokość</li><li>`speed={5}`: Prędkość</li><li>`bearing={6}`: Namiar (kierunek ruchu)</li><li>`eta={7}`: Szacowany czas przybycia (czas uniksowy)</li><li>`etfa={8}`: Szacowany czas do pierwszego punktu pośredniego lub punktu końcowego (czas uniksowy)</li><li>`eda={9}`: Szacowana odległość do przybycia lub znacznika (w metrach)</li><li>`edfa={10}`: Szacowana odległość do pierwszego punktu pośredniego lub punktu końcowego (w metrach)</li></ul>Można ustawić **Interwał śledzenia**, aby określić, jak często wysyłane są punkty lokalizacji, z opcjami od 0 sekund do 5 minut. Dodatkowo parametr **Bufor czasu** określa, jak długo punkty lokalizacji są przechowywane w przypadku braku połączenia z Internetem, zapewniając zapisanie i przesłanie danych po przywróceniu połączenia.<br />OsmAnd przechowuje niesłane punkty lokalizacji tylko w tymczasowej pamięci aplikacji podczas działania aplikacji. Oznacza to, że bufor nie jest zapisywany na stałym nośniku. Jeśli aplikacja zostanie zamknięta, wymuszona do zatrzymania lub urządzenie zrestartowane, wszystkie buforowane punkty zostaną utracone.<br />Ustawienie Bufor czasu nie określa, jak długo punkty są przechowywane w pamięci — działa tylko jako filtr w momencie przesyłania. Gdy OsmAnd próbuje wysłać buforowane punkty, każdy punkt jest sprawdzany pod kątem limitu Buforu czasu. Punkty starsze niż wybrany limit (np. 24 godziny) są usuwane zamiast być przesłane. W rezultacie bufor może tymczasowo zawierać punkty starsze niż wybrana wartość Buforu czasu, ale te punkty zostaną odrzucone podczas procesu przesyłania.</details> |
| **Trasy** | Szybkie odniesienie do folderu, w którym zapisywane są trasy w zakładce *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Zresetuj ustawienia wtyczki do domyślnych** | Resetuje wszystkie ustawienia nagrywania trasy dla bieżącego profilu do wartości domyślnych. |
| **Kopiuj z innego profilu** (*Android*) | Kopiuje ustawienia nagrywania trasy z jednego profilu do drugiego. |


### Optymalizacja baterii {#battery-optimization}

<InfoAndroidOnly />

![Trasa na mapie iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png)  ![Trasa na mapie iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)  

Ta funkcja pozwala zarządzać ustawieniami optymalizacji baterii dla OsmAnd, aby zapewnić nieprzerwany dostęp do lokalizacji, nawet gdy aplikacja działa w tle podczas nawigacji lub nagrywania trasy.

- **Ustawienia optymalizacji baterii**. Otwiera ustawienia systemu Android, w których można modyfikować preferencje oszczędzania baterii dla OsmAnd. [Więcej szczegółów tutaj](../troubleshooting/general.md#optimizing-battery-consumption).
- **Nie pytaj ponownie**. Trwale odrzuca okno dialogowe, aby nie pojawiło się ponownie.
- **Zamknij**. Tymczasowo zamyka okno dialogowe, które pojawi się ponownie, gdy optymalizacja baterii będzie wymagała uwagi.


### Powiadomienia {#notifications}

![Powiadomienie o nagrywaniu trasy](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)  

Jeśli w ustawieniach wtyczki włączona jest opcja [Powiadomienie](#recording-settings), powiadomienia o nagrywaniu trasy będą zawsze wyświetlane w obszarze powiadomień systemowych, gdy nagrywanie jest aktywne. To powiadomienie zapewnia, że proces nagrywania nie zostanie przerwany przez system i nie można go wyłączyć podczas aktywnego nagrywania.

- Obszar powiadomień otwiera się po przesunięciu palcem w dół od góry ekranu i zamyka po przesunięciu w górę. Komunikaty te powiadamiają o działaniach, takich jak rozpoczynanie/zatrzymywanie nagrywania trasy, zwłaszcza gdy włączone jest automatyczne nagrywanie podczas nawigacji.
- Powiadomienia pozostają widoczne niezależnie od tego, czy aplikacja działa na pierwszym planie, w tle, czy jest zamknięta. Możesz ręcznie wyczyścić stare powiadomienie, jeśli nie jest już potrzebne, ale nie zatrzyma to trwającego nagrywania.

**Ważna uwaga**.

To zachowanie jest wymagane przez system Android dla każdej usługi działającej na pierwszym planie, takiej jak nagrywanie trasy, aby pozostała ona widoczna dla użytkownika.

- Jeśli powiadomienie zostanie usunięte, system Android automatycznie zatrzyma nagrywanie. Można użyć ustawienia [Zapobiegaj samodzielnemu rejestrowaniu](#recording-settings).
- Ustawienie **Powiadomienie** w OsmAnd wpływa na to, czy na pasku powiadomień wyświetlany jest skrót do rozpoczęcia nagrywania, gdy żadne nagrywanie nie jest aktywne. **Nie** kontroluje ono widoczności powiadomienia podczas aktywnego nagrywania.

**Dodatkowe opcje Androida**.

![Powiadomienie o nagrywaniu trasy](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- W ***Ustawienia Androida → Powiadomienia i pasek stanu → Powiadomienia na ekranie blokady*** można usunąć OsmAnd z listy aplikacji, aby zapobiec pojawianiu się powiadomień na ekranie blokady, unikając przypadkowej aktywacji ekranu. Nie wpłynie to na nagrywanie trasy. Powiadomienia będą nadal pojawiać się w zwykłym obszarze powiadomień.
- **OsmAnd** może również pojawić się w sekcji ***Prywatność → Specjalne uprawnienia → Włącz ekran***. Jeśli chcesz zapobiec włączaniu się ekranu po pojawieniu się powiadomienia, spróbuj usunąć OsmAnd z tej listy.

<!--
- OsmAnd is not listed under **Privacy** *→* **Special Permissions** → **Alarms and reminders**.
-->

**Powiadomienie w formie plakietki**.

![Powiadomienie o nagrywaniu trasy](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Plakietka ikony aplikacji pojawia się obok ikony OsmAnd, gdy nagrywanie trasy jest aktywne.

- Ikona ta znika po zakończeniu nagrywania trasy. Aby sprawdzić, czy nagrywanie jest aktywne, można przejść do *Menu → Moje miejsca → zakładka Trasy* lub stuknąć widżet, aby zarządzać nagrywaniem.  
- Jeśli nagrywanie nie jest w toku, a plakietka jest nadal wyświetlana, może to oznaczać, że w panelu powiadomień urządzenia pozostała wiadomość z OsmAnd.  
- Aby wyłączyć plakietki w ustawieniach Androida, przejdź do *Ustawienia urządzenia → Aplikacje → OsmAnd → Powiadomienia* i wyłącz opcję wyświetlania plakietek dla tej aplikacji.


## Widżety {#widgets}

Widżety pozwalają wyświetlać kluczowe informacje o nagrywaniu trasy bezpośrednio na ekranie, takie jak *Dystans*, *Czas trwania*, *W górę* i *W dół*. W systemie Android można również dodać widżety *Maks. prędkość* i *Średnie nachylenie*.

Aby rozpocząć korzystanie z *widżetów Nagrywanie trasy*, należy dokonać wszystkich następujących ustawień:

1. [Włącz wtyczkę](../start-with/first-steps.md#how-to-configure-plugins).
2. Skonfiguruj ustawienia nagrywania trasy dla wymaganego [profilu](../personal/profiles.md).
3. Dodaj niezbędne **widżety Nagrywanie trasy** do ekranu. Należy pamiętać, że ta konfiguracja jest **specyficzna dla każdego profilu**.


### Dodaj widżet nagrywania {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Dodawanie widżetu Dystans/Start-Stop w systemie Android](@site/static/img/plugins/trip-recording/add_widg_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="map_widget_monitoring"/>*  

![Dodawanie widżetu Dystans/Start-Stop w systemie iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios_2_new.png)

</TabItem>

</Tabs>

[Widżet Nagrywanie trasy](../widgets/info-widgets.md#trip-recording-widgets) zapewnia łatwy sposób monitorowania statusu nagrywania i szybkiego dostępu do ustawień i szczegółów nagrywania. Ten widżet jest automatycznie dodawany do ekranu po włączeniu wtyczki Nagrywanie trasy.

Aby dostosować interfejs, można dodać lub usunąć widżet Nagrywanie trasy i [inne widżety](../plugins/trip-recording#duration-uphill-downhill) za pomocą menu Konfiguruj ekran.


### Dystans (Start-Stop) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Zakończ nagrywanie w systemie Android](@site/static/img/plugins/trip-recording/distance_start_rec_new_andr.png)
![Widżet nagrywania trasy](@site/static/img/plugins/trip-recording/trip_rec_widgets_mode.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet nagrywania trasy](@site/static/img/widgets/tr_rec_wid_conf_scr_new.png) ![Widżet nagrywania trasy](@site/static/img/widgets/tr_rec_wid_conf_scr_2_new.png)

</TabItem>

</Tabs>  

Gdy widżety są wyświetlane na mapie, stuknięcie dowolnego z nich ujawnia dodatkowe szczegóły trasy i pozwala na interakcję z nagraniem.
Widżet *Dystans* wyświetla całkowity dystans bieżącej zarejestrowanej podróży i działa jako główny interfejs do zarządzania nagraniami. Stuknięcie go powoduje wyświetlenie [okna dialogowego Nagrywanie trasy](#start-a-dialog), w którym można rozpocząć, zatrzymać i wyświetlić szczegółowe informacje o trasie.

- Widżet jest dodawany automatycznie po włączeniu *wtyczki Nagrywanie trasy*, ale można go ukryć za pomocą [menu Konfiguruj ekran](../widgets/configure-screen.md#overview).
- Jeśli opcja *Pokaż okno dialogowe startu* jest wyłączona w ustawieniach wtyczki Nagrywanie trasy, stuknięcie aktywnego widżetu nadal otworzy okno dialogowe *Nagrywanie trasy*, umożliwiając dostęp do dalszych opcji i informacji.  

Oprócz widżetu *Dystans/Start-Stop*, **wtyczka Nagrywanie trasy** zawiera pięć innych widżetów: *Czas trwania*, *W górę*, *W dół*, *Maks. prędkość* i *Średnie nachylenie*. Zapewniają one dodatkowe informacje o podróży, pomagając śledzić postępy w czasie rzeczywistym.

| |
|-----------|
| **Dystans/Start-Stop**. Ten widżet wyświetla dystans trwającego nagrywania podróży. Jest on dodawany automatycznie po włączeniu wtyczki Nagrywanie trasy, ale można go ukryć za pomocą menu Konfiguruj ekran. Widżet ma trzy różne stany: *Nagrywanie*, *Wstrzymano* i *Nieaktywny*, z których każdy wskazuje bieżący stan nagrywania podróży. |
| ![Widżet nagrywania trasy (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Aby otworzyć [okno dialogowe Nagrywanie trasy](#start-a-dialog) po stuknięciu nieaktywnego widżetu, włącz opcję *Pokaż okno dialogowe uruchamiania* w ustawieniach wtyczki Nagrywanie trasy. Jeśli opcja jest wyłączona, nagrywanie rozpocznie się natychmiast po stuknięciu widżetu bez otwierania okna dialogowego.| 

W systemie Android widżet Dystans obsługuje wiele trybów wyświetlania:
- **Całkowity dystans** – całkowity dystans bieżącego nagrania (domyślnie).
- **Ostatni podjazd** – dystans ostatniego odcinka wzniesienia.
- **Ostatni zjazd** – dystans ostatniego odcinka zejścia.


### Czas trwania, W górę, W dół {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| |
|------------|
|**Czas trwania**. Wyświetla całkowity czas bieżącego nagrania podróży w godzinach i minutach. |
|![widżety](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**W górę**. Pokazuje całkowity wzrost lub ostatni odcinek wzniesienia, w zależności od wybranego trybu. |
|![widżety](@site/static/img/widgets/tr_rec_wid_up.png)|
|**W dół**. Wskazuje całkowity spadek lub ostatni odcinek zejścia, w zależności od wybranego trybu. |
|![widżety](@site/static/img/widgets/tr_rec_wid_dow.png)|

</TabItem>

<TabItem value="ios" label="iOS">  

| |
|------------|
|**Czas trwania**. Wyświetla całkowity czas bieżącego nagrania podróży w godzinach i minutach. |
|![widżety](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**W górę**. Pokazuje całkowity wzrost lub ostatni odcinek wzniesienia, w zależności od wybranego trybu. |
|![widżety](@site/static/img/widgets/tr_rec_wid_up.png)|
|**W dół**. Wskazuje całkowity spadek lub ostatni odcinek zejścia, w zależności od wybranego trybu. |
|![widżety](@site/static/img/widgets/tr_rec_wid_dow.png)|

</TabItem>

</Tabs>

Jeśli wybrano wiele widżetów — *Czas trwania*, *W górę* lub *W dół* — można uzyskać dostęp do tego samego okna dialogowego dla każdego z nich bez konieczności przełączania lub zamykania go. Ten ujednolicony interfejs ułatwia płynne przeglądanie i zarządzanie wszystkimi powiązanymi informacjami.

### Maks. prędkość i Średnie nachylenie {#max-speed--average-slope}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Maks. prędkość Android](@site/static/img/widgets/max_speed_android.png) ![Średnie nachylenie Android](@site/static/img/widgets/average_slope_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Maks. prędkość iOS](@site/static/img/widgets/max_speed_ios.png) ![Średnie nachylenie iOS](@site/static/img/widgets/average_slope_ios.png) 

</TabItem>

</Tabs> 

Widżet **Maks. prędkość** pokazuje maksymalną prędkość dla aktualnie nagrywanego wyjazdu. Stuknij widżet, aby przełączyć się między ogólną maksymalną prędkością a maksymalną prędkością z ostatniego odcinka podjazdu lub zjazdu.

Widżet **Średnie nachylenie** wyświetla średnie nachylenie dla ostatniego odcinka podjazdu lub zjazdu aktualnego wyjazdu. Pomaga oszacować, jak stroma była poprzednia wspinaczka lub zejście, na podstawie wzrostu wysokości i dystansu.


## Powiązane artykuły {#related-articles}

- [Menu kontekstowe mapy](../map/map-context-menu.md)
- [Pokaż trasę na mapie](../map/tracks/index.md)
- [Analizuj na mapie](../map/tracks/index.md#analyze-track-on-map)
- [Menu kontekstowe trasy](../map/tracks/track-context-menu.md)
- [Nawigacja po trasie](../navigation/setup/gpx-navigation.md)

### Częste problemy i rozwiązania {#common-issues-and-solutions}

- Nagrywanie trasy nie rozpoczyna się.
    - Upewnij się, że **wtyczka Nagrywanie trasy** jest włączona: *Menu → Wtyczki → Nagrywanie trasy → Włącz*.
    - Sprawdź, czy ustawienia są prawidłowe: *Menu → Konfiguruj profil → Ustawienia wtyczek → Nagrywanie trasy*.
    - Jeśli nagrywanie nadal się nie rozpoczyna, uruchom ponownie aplikację i spróbuj ponownie.

- Nagrywanie trasy nieoczekiwanie się zatrzymuje.
    - Sprawdź, czy *ustawienia optymalizacji baterii urządzenia* nie zatrzymują nagrywania. Niektóre urządzenia mogą wstrzymywać aktywność w tle w celu oszczędzania energii. Przejdź do *Ustawienia urządzenia → Bateria*.

- Zarejestrowana odległość nie odpowiada rzeczywistej odległości.
    - Sprawdź, czy GPS jest włączony i ma aktywny sygnał.  
    - Zmniejsz próg dokładności GPS: *Menu → Konfiguruj profil → Nagrywanie trasy → Minimalna dokładność*.

- Zarejestrowane trasy są zaszumione. [(sprawdź)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Zarejestrowane trasy mają przerwy. [(sprawdź)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Jak śledzić przebytą odległość. [(sprawdź)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Dodatkowe informacje na temat rozwiązywania problemów można znaleźć na stronie: [Rozwiązywanie problemów z nagrywaniem trasy](https://osmand.net/docs/user/troubleshooting/track-recording-issues).