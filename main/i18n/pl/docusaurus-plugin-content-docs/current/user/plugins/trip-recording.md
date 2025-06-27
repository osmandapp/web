---
source-hash: 8826b2eb6a139e524ef632c763796638e85679b9e77950d519cb5b8c87dc9085
sidebar_position: 15
title: Nagrywanie trasy
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

**Wtyczka Nagrywanie trasy** to niezbędne narzędzie do rejestrowania tras, ruchów i treningów. Funkcja ta umożliwia nie tylko nagrywanie podróży, ale także łatwe ponowne wykorzystywanie, modyfikowanie, aktualizowanie i udostępnianie śladów innym.

Dzięki *wtyczce Nagrywanie trasy* możesz tworzyć nowe ślady, wyświetlać nagrane ślady bezpośrednio na mapie i zarządzać istniejącymi nagraniami. Oferuje ona cenne informacje o Twoich podróżach, takie jak prędkość, zmiany wysokości, szczegóły terenu i dane z zewnętrznych czujników. Wtyczka rejestruje Twoją trasę, umożliwiając szczegółową analizę i udostępnianie po podróży.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Nagrana trasa w systemie Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nagrana trasa w systemie iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>

## Wymagane parametry konfiguracji {#required-setup-parameters}

Aby rozpocząć nagrywanie śladów, należy dokonać następujących ustawień:

1. [Włącz](../plugins/index.md#enable--disable) **wtyczkę Nagrywanie trasy**.
2. [Skonfiguruj](#recording-settings) **ustawienia nagrywania** dla wymaganego [profilu](../personal/profiles.md).
3. [Dodaj](#widgets) **widżety Nagrywanie trasy** do ekranu (opcjonalnie).
4. [Zarządzaj](../map/tracks/appearance.md) śladami na mapie (opcjonalnie).

## Nagrywanie nowej trasy {#new-track-recording}

![Widżet Dystans/Start-Stop w systemie iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Widżet Dystans/Start-Stop w systemie Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Dzięki wtyczce Nagrywanie trasy w OsmAnd możesz łatwo rozpocząć nagrywanie śladu, korzystając z wielu wygodnych opcji. Oto jak możesz rozpocząć swoją podróż:

- [Widżet Dystans/Start-Stop](#distance-start-stop) — Służy do aktywacji nagrywania.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Naciśnij przycisk w *głównej zakładce <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- Przyciski [Szybkie działanie](../widgets/quick-action.md#add-and-delete-actions) — Aby rozpocząć nagrywanie trasy, przejdź do *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybkie działanie → Dodaj działanie → Moje miejsca* i wybierz [Start / Pauza: Nagrywanie trasy](../widgets/quick-action.md#my-places).

- *Tylko Android*:
    - Przejdź do *głównego <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Powiadomienie systemowe](#notifications) — Użyj w obszarze powiadomień urządzenia.

    - [Launcher aplikacji](#launcher-android) — Użyj, aby rozpocząć nagrywanie.

**Zalecenia:**

- [Dokładna lokalizacja](../start-with/first-steps.md#permission-to-access-the-location) — Aby zapewnić dokładne nagrywanie śladu, upewnij się, że OsmAnd ma to uprawnienie.

- [Rozwiązywanie problemów](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — **Urządzenia iOS** mogą czasami tymczasowo **zawieszać lub zatrzymywać aplikacje** działające w tle, co może przerwać nagrywanie śladu.

- **Źródło lokalizacji** (*tylko Android*) — Dostosuj ustawienia w OsmAnd, aby wybrać najbardziej odpowiedniego dostawcę GPS do dokładnych nagrań. [Dowiedz się więcej tutaj](../personal/global-settings.md#location-source).

### Rozpocznij dialog {#start-a-dialog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Dialog startowy otwiera się, jeśli opcja **<Translate android="true" ids="show_start_dialog"/>** jest włączona w sekcji ustawień okna dialogowego startowego.

![Rozpocznij nagrywanie w systemie Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Dialog startowy otwiera się, jeśli opcja **<Translate ios="true" ids="track_interval_remember"/>** nie jest włączona.

![Rozpocznij nagrywanie w systemie iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Interwał logowania** (*Android/iOS*). To ustawienie kontroluje, jak często aplikacja żąda danych z czujnika GPS, aby zaznaczyć nowe punkty na Twoim śladzie. Dostosowanie interwału pozwala zrównoważyć szczegółowość śladu i zużycie baterii. Krótszy interwał spowoduje bardziej szczegółowe ślady, ale większe zużycie baterii, podczas gdy dłuższy interwał oszczędza baterię, ale zmniejsza dokładność śladu.

- **Ikona linii** (*Android*). Naciśnij tę ikonę, aby uzyskać dostęp do [opcji wyglądu śladu](../map/tracks/appearance.md). Tutaj możesz dostosować wygląd śladu na mapie, w tym kolor linii, grubość i styl. Po zapisaniu śladu z niestandardowym wyglądem, te ustawienia zostaną zachowane dla przyszłych nagrań, zapewniając spójność za każdym razem, gdy przeglądasz lub ponownie włączasz ślad.

- **Menu ustawień** (*Android*). Uzyskaj dostęp do tego menu, aby dokładnie dostosować preferencje nagrywania. Aby uzyskać szczegółowy przegląd, zapoznaj się z sekcją [Ustawienia nagrywania trasy](#recording-settings).

- **Zapamiętaj mój wybór** (*iOS*). Po włączeniu nagrywanie śladu rozpoczyna się automatycznie, bez monitowania o dodatkowe ustawienia lub potwierdzenie. Jeśli chcesz zmienić ustawienia nagrywania przed rozpoczęciem nowego śladu, uruchom ponownie wtyczkę Nagrywanie trasy, aby menu ustawień pojawiło się ponownie.

### Launcher (Android) {#launcher-android}

![Menu kontekstowe ikony](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Ikona Rozpocznij nagrywanie](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Możesz szybko rozpocząć nagrywanie nowego śladu bezpośrednio z ekranu urządzenia z systemem Android, korzystając z menu kontekstowego ikony aplikacji OsmAnd.

- **Długie naciśnięcie** ikony aplikacji OsmAnd otwiera menu kontekstowe, w którym można znaleźć opcję **Rozpocznij nagrywanie**.

- Naciśnij opcję **Rozpocznij nagrywanie**, aby uruchomić aplikację OsmAnd z [ustawieniami nagrywania śladu](#overview-screen) wyświetlonymi na ekranie.

- **Długie naciśnięcie** opcji **Rozpocznij nagrywanie** w menu kontekstowym ikony aplikacji, aby dodać skrót dla szybszego dostępu.

Gdy nagrywanie śladu jest aktywne, na rogu ikony aplikacji OsmAnd pojawi się plakietka powiadomienia, wskazująca, że nagrywanie jest w toku. Aby uzyskać więcej informacji na temat zarządzania tym powiadomieniem, zobacz sekcję [Powiadomienia](#notifications).

## Bieżące nagrywanie trasy {#current-track-recording}

Dla *Zatrzymaj / Zapisz / Pauza*:

- Aby **zatrzymać** nagrywanie, naciśnij odpowiedni przycisk w oknie dialogowym [Widżetu Dystans/Start-Stop](#distance-start-stop).

- (*Tylko Android*) Aby **zatrzymać** nagrywanie, naciśnij element menu głównego *Nagrywanie trasy*.

- Aby **zatrzymać** lub **zapisać** nagrywany ślad, przejdź do *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> tab*](../personal/myplaces.md#tracks) i naciśnij odpowiedni przycisk w polu *Aktualnie nagrywany ślad*.

- Aby **zapisać, wstrzymać, rozpocząć** nowy segment lub **zakończyć** nagrywanie, użyj przycisków [Szybkie działanie](../widgets/quick-action.md#add-and-delete-actions). Przejdź do *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybkie działanie → Dodaj działanie → [Moje miejsca](../widgets/quick-action.md#my-places)* i dodaj jeden lub więcej przycisków szybkiego działania.

- (*Tylko Android*) Aby **wstrzymać** lub **zapisać** nagrywany ślad, użyj powiadomienia systemowego [powiadomienia](#notifications) w obszarze powiadomień urządzenia.<br/><br/> ![stop-save-pause](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)

### Ekran przeglądu {#overview-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![przegląd](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![przegląd](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zakończ nagrywanie w systemie iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![Zakończ nagrywanie w systemie iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

W OsmAnd, wersje **Android** i **iOS** nieco inaczej obsługują interfejs nagrywania śladów. Na Androidzie znajdziesz dedykowane menu dla kontekstu *Nagrywanie śladu*, podczas gdy na iOS jest to uproszczone do menu kontekstowego *Aktualnie nagrywany ślad*.

Podczas nagrywania śladu generowane są dynamiczne wykresy, dostarczające wizualne dane w czasie rzeczywistym o Twojej podróży. Wykresy te mogą odzwierciedlać informacje dla całej trasy lub tylko dla wybranego segmentu, w zależności od poziomu powiększenia.
Oto, co możesz na nich znaleźć:

- **Wartości danych**. Po prawej stronie wykresu znajdują się wartości ***najwyższe***, ***najniższe*** i ***średnie*** dla widocznej sekcji śladu.

- **Wykres dla kluczowych informacji**:
    - ***Android***. Dla ***osi Y*** na wykresie możesz wybrać *do dwóch parametrów* ze wszystkich dostępnych danych, takich jak *Wysokość*, *Nachylenie*, *Prędkość* i [informacje z zewnętrznych czujników](../plugins/external-sensors.md#trip-recording). Dla ***osi X*** wybierz wyświetlanie *Dystansu*, *Czasu* lub *Pory dnia*.
    - ***iOS***. Parametry są zorganizowane w zakładki *Przegląd*, *Wysokość* i *Prędkość* z odpowiednimi wartościami dla osi Y i *Dystansu* dla osi X.

- **Statystyki**. Dla Androida wyświetla stały zestaw danych statystycznych niezależnie od ustawień wykresu: *Dystans*, *Zakres czasu*, *Pod górę*, *W dół*, *Średnia prędkość*. Dla iOS każda zakładka, Przegląd, Wysokość i Prędkość, ma inny zestaw danych.

Aby uzyskać bardziej szczegółowy widok, możesz **skalować wykres**:

- Użyj [gestu dwoma palcami](../map/interact-with-map.md#gestures), aby powiększyć lub pomniejszyć i skupić się na określonych interwałach.
- Naciśnij dowolny punkt na wykresie, aby wyświetlić znacznik pokazujący dokładne wartości dla tej lokalizacji.

| |
| ------------- |
|**Zakładka Przegląd** iOS (dla Androida, parametry osi Y to *Wysokość*, *Prędkość*, a parametr osi X to *Dystans*). Ta zakładka wyświetla wykres pokazujący zmiany prędkości i wysokości wzdłuż długości śladu oraz kluczowe szczegóły śladu. Dane śladu dla iOS: *Dystans*, *Zakres czasu*, *Czas rozpoczęcia* i *Czas zakończenia*. Możesz zobaczyć, jak to jest wyświetlane w wersjach Android i iOS poniżej. |
| ![dane](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![dane](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Zakładka Wysokość** iOS (dla Androida, parametry osi Y to *Wysokość*, *Nachylenie*, a parametr osi X to *Dystans*). Ta zakładka skupia się na profilu wysokościowym nagranego śladu, dostarczając informacji o zmianach wysokości i nachyleniach terenu. Kluczowe metryki dla iOS obejmują: *Średnia wysokość*, *Zakres wysokości*, *Pod górę* i *W dół*. Wykresy poniżej ilustrują różnice między interfejsami Android i iOS. |
| ![dane](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![dane](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Zakładka Prędkość** iOS (dla Androida, parametr osi Y to *Prędkość*, a parametr osi X to *Dystans*). Zakładka Prędkość podkreśla dane związane z prędkością w całym śladzie. Dla iOS zawiera informacje takie jak *Średnia prędkość*, *Maksymalna prędkość*, *Czas w ruchu* i *Skorygowany dystans*. Poniższe zrzuty ekranu pokazują, jak te dane są wyświetlane na obu platformach. |
| ![dane](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![dane](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Dla **Androida** możesz tworzyć więcej kombinacji dostępnych danych osi Y i wartości osi X. |
| ![dane](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Aby uzyskać więcej szczegółów, możesz zapoznać się z [**Menu kontekstowym śladów**](../map/tracks/track-context-menu.md#options), gdzie możesz zarządzać różnymi opcjami związanymi ze śladami, takimi jak zmiana nazwy, usuwanie lub dodawanie punktów pośrednich. Aby dostosować wygląd śladów na mapie, odwiedź sekcję [**Wygląd**](../map/tracks/appearance.md). Jeśli chcesz dodać konkretne punkty pośrednie do bieżącego śladu, sprawdź przewodnik [**Punkty śladu**](../map/tracks/track-context-menu.md#points--waypoints). W przypadku jakichkolwiek modyfikacji, takich jak zmiana nazwy śladu, użyj zakładki [**Opcje**](https://osmand.net/docs/user/map/track-context-menu#options) w Menu kontekstowym śladów.
:::

### Pokaż na mapie {#show-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Konfiguruj ślady mapy Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Konfiguruj ślady mapy iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Zarządzaj, które ślady są widoczne na Twojej mapie, korzystając z jednej z dwóch opcji. Przejdź do *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> tab*](../map/tracks/index.md#my-places) i włącz opcję *Pokaż na mapie* dla dowolnego śladu, który chcesz wyświetlić lub ukryć. Alternatywnie, możesz przejść do *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map), aby szybko dostosować widoczność wszystkich śladów w jednym miejscu.

### Nagrany plik GPX {#recorded-gpx-file}

OsmAnd rejestruje Twoją podróż w ustrukturyzowanym [pliku GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), używając hierarchii *plik > ślad > segmenty > punkty*. Oto jak to działa:

- **Punkty** reprezentują poszczególne momenty Twojej nagranej ścieżki, każdy oznaczony atrybutami takimi jak współrzędne, prędkość, wysokość i kierunek.
- Te punkty są grupowane, tworząc **ślady**, które reprezentują całą Twoją trasę.
- Jeśli występuje luka w nagrywaniu (na przykład, jeśli śledzenie zostało wstrzymane), następny punkt po przerwie rozpoczyna nowy **segment**, oznaczając oddzielenie w Twojej podróży.
- Zarówno **segmenty**, jak i **ślady** są wizualnie reprezentowane ikonami *Start* i *Koniec* na mapie.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![Plik GPX nagranego śladu](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![Plik GPX nagranego śladu](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png) -->

| Parametr | Opis |
|---|---|
| `trkpt` | **Punkt śladu** reprezentuje konkretną lokalizację geograficzną wykrytą podczas Twojej aktywności. Każdy punkt śladu zawiera współrzędne szerokości i długości geograficznej, tworząc podstawę Twojej nagranej ścieżki. |
| `trkseg` | **Segment śladu** grupuje kolejne punkty śladu, oddzielone przerwami w aktywności, takimi jak pauzy lub zatrzymania. Pomaga to odróżnić ciągły ruch od okresów bezczynności w ramach jednego nagrania. |
| `lat` | **Szerokość geograficzna** wskazuje położenie punktu na powierzchni Ziemi w kierunku północ-południe. Jest to jedna z dwóch współrzędnych używanych do dokładnego określenia Twojej lokalizacji. |
| `lon` | **Długość geograficzna** określa położenie wschód-zachód, uzupełniając szerokość geograficzną, aby dokładnie zlokalizować punkt na globie. Razem szerokość i długość geograficzna definiują Twoją dokładną pozycję geograficzną. |
| `ele` | **Wysokość** mierzy wysokość punktu śladu nad poziomem morza, rejestrowaną w metrach. Może to być przydatne do śledzenia zmian wysokości podczas Twoich aktywności, takich jak wędrówki lub przejażdżki rowerowe. |
| `time` | **Znacznik czasu** rejestruje dokładną datę i godzinę, kiedy punkt śladu jest logowany. Pozwala to na precyzyjne śledzenie czasu trwania i momentu Twojej aktywności. |
| `hdop` | **Poziome rozcieńczenie precyzji (HDOP)** jest miarą dokładności GPS, odzwierciedlającą potencjalny błąd w lokalizacji z powodu pozycji satelitów. W przeciwieństwie do standardowego HDOP, ślady OsmAnd GPX używają tej wartości do reprezentowania dokładności poziomej w metrach. Należy pamiętać, że ta implementacja różni się od typowych standardów HDOP. [Dowiedz się więcej](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **Prędkość** rejestruje Twoją prędkość ruchu w metrach na sekundę. Dostarcza informacji o Twoim tempie podczas różnych segmentów Twojej aktywności. |
| `heading` | **Kierunek** wskazuje kierunek, w którym jest skierowany Twój pojazd lub urządzenie, mierzony w stopniach. Różni się od kursu, który jest rzeczywistą ścieżką ruchu. Różnice mogą występować z powodu czynników zewnętrznych, takich jak wiatr, prądy lub warunki drogowe. [Więcej o kierunku](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | **Prędkość** z [zewnętrznych czujników](../plugins/external-sensors.md) przechwytuje dane z podłączonych czujników, dostarczając bardziej precyzyjnych informacji o prędkości, szczególnie przydatnych podczas jazdy na rowerze. Aby uzyskać więcej szczegółów, zapoznaj się z [dokumentacją formatu pliku GPX](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | **Kadencja** mierzy liczbę obrotów pedałów na minutę, rejestrowaną za pomocą [zewnętrznych czujników](../plugins/external-sensors.md). Jest to szczególnie przydatne dla rowerzystów, którzy chcą monitorować i optymalizować swoją efektywność pedałowania. [Czytaj więcej](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | **Moc roweru** kwantyfikuje moc generowaną podczas pedałowania, przechwytywaną z [zewnętrznych czujników](../plugins/external-sensors.md). Jest to kluczowa metryka dla poważnych rowerzystów, którzy chcą ocenić swoją wydajność. [Dowiedz się więcej](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | **Temperatura powietrza** rejestruje temperaturę otoczenia podczas Twojej aktywności, mierzoną za pomocą [zewnętrznych czujników](../plugins/external-sensors.md). Należy pamiętać, że temperatura wody nie jest obsługiwana. [Szczegóły tutaj](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | **Tętno** monitoruje Twoje uderzenia serca na minutę, wykorzystując dane z podłączonych [czujników](../plugins/external-sensors.md). Informacje te mogą być kluczowe do śledzenia wydolności układu krążenia podczas treningów. [Dowiedz się więcej](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |

## Ustawienia nagrywania {#recording-settings}

Zanim zaczniesz śledzić swoje podróże, musisz odpowiednio skonfigurować **wtyczkę Nagrywanie trasy**, aby zapewnić optymalną wydajność.

- **Ustawienia specyficzne dla profilu**. Każdy profil w aplikacji może mieć własne, unikalne ustawienia nagrywania trasy. Pozwala to na precyzyjne dostosowanie zachowania nagrywania w zależności od Twojej aktywności, takiej jak jazda samochodem, jazda na rowerze, a nawet nordic walking, które mogą wymagać różnych konfiguracji.

- **Dostosuj parametry nagrywania**. Ustawienia nagrywania mogą się różnić w zależności od sposobu poruszania się. Na przykład, długa jazda samochodem może wymagać niższej częstotliwości nagrywania, podczas gdy wędrówki lub spacery mogą skorzystać z częstszych aktualizacji.

- **Precyzyjne dane lokalizacji**. Aby Twoje nagrania były płynne i użyteczne w przyszłości, możesz dostosować sposób przechwytywania punktów lokalizacji. Może to obejmować dostosowanie częstotliwości nagrywania, formatu danych (takich jak liczba punktów na jednostkę odległości) lub odstępów między nagranymi punktami.

- **Ustawienia globalne**. Ustawienia nagrywania trasy są konfigurowane dla każdego profilu, którymi możesz zarządzać w globalnych [ustawieniach](../personal/global-settings.md) aplikacji. Zanim dostosujesz wtyczkę Nagrywanie trasy, wybierz profil, który chcesz skonfigurować z sekcji [profile](../personal/profiles.md). Stamtąd przejdź do ustawień profilu, aby uzyskać dostęp do opcji nagrywania trasy.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Konfiguracja nagrywania trasy w systemie Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Konfiguracja nagrywania trasy w systemie Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Konfiguracja nagrywania trasy w systemie iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![Konfiguracja nagrywania trasy w systemie iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis |
|---|---|
| **Dialog optymalizacji baterii** (*Android*) | Otwiera [ustawienia optymalizacji baterii Androida](#battery-optimization). Naciśnij *Nie pytaj więcej*, jeśli nie chcesz być ponownie pytany. |
| **Pokaż dialog startowy** (*Android*) | Włącza dialog, w którym możesz skonfigurować ustawienia przed rozpoczęciem nagrywania. Jeśli wyłączone, nagrywanie rozpoczyna się automatycznie. |
| **Automatyczne nagrywanie śladu podczas nawigacji** | Automatycznie nagrywa ślad podczas nawigacji i zapisuje go w zakładce *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.<br />*Uwaga*: Nagrywanie śladu zużywa baterię i działa w tle, nawet gdy ekran jest wyłączony. |
| **Ogólny interwał logowania** | Określa, jak często rejestrowane są punkty lokalizacji. Domyślnie jest to 5 sekund. Jest włączony z *widżetem nagrywania trasy*. |
| **Minimalne przemieszczenie** | Filtr, który pozwala uniknąć rejestrowania punktów, gdy ruch jest niewielki lub go nie ma. Pomaga zmniejszyć szum danych.<ul><li>*Skutki uboczne*: Okresy odpoczynku mogą nie być rejestrowane, a małe ruchy mogą być ignorowane. Może to zmniejszyć dane po przetworzeniu, ale może również zapobiec logowaniu błędów GPS.</li><li>*Zalecenie*: Ustaw przemieszczenie na 5 metrów, jeśli chcesz mniej drobnych szczegółów w swoich nagraniach.</li></ul> |
| **Minimalna dokładność** | Filtruje punkty lokalizacji poniżej progu minimalnej dokładności, zgłaszanej przez urządzenie.<ul><li>*Skutki uboczne*: Punkty w obszarach o słabym sygnale (pod mostami, drzewami, między budynkami lub w niektórych warunkach pogodowych) mogą być brakujące.</li><li>*Zalecenie*: Jeśli nie masz pewności, lepiej wyłączyć ten filtr, aby uniknąć utraty danych.</li></ul><details><summary>*Uwaga*</summary>Załóżmy, że GPS został wyłączony tuż przed nagrywaniem. W takim przypadku pierwszy zmierzony punkt może mieć zmniejszoną dokładność, więc lepiej poczekać chwilę przed nagraniem punktu lub nagrać najlepszy z 3 kolejnych punktów.</details> |
| **Minimalna prędkość** | Ustawia próg, aby ignorować punkty rejestrowane poniżej określonej prędkości.<ul><li>*Skutki uboczne*: Sekcje, w których prędkość spada poniżej określonego progu, nie będą rejestrowane.</li><li>*Zalecenie*: Zamiast tego użyj filtra *Minimalne przemieszczenie*, ponieważ może on dać lepsze wyniki bez utraty ważnych danych.</li></ul><details><summary>*Uwaga*</summary>Spróbuj najpierw użyć wykrywania ruchu za pomocą filtra minimalnego przemieszczenia logowania (B), może to dać lepsze wyniki i stracisz mniej danych. Jeśli Twoje ślady pozostają szumne przy niskich prędkościach, spróbuj tutaj wartości niezerowych. Należy pamiętać, że niektóre pomiary mogą w ogóle nie zgłaszać żadnej wartości prędkości (niektóre metody oparte na sieci), w takim przypadku nic nie nagrasz.<br/><br/>Sprawdzenie prędkości > 0: Większość chipsetów GPS zgłasza wartość prędkości tylko wtedy, gdy algorytm określi, że jesteś w ruchu, a żadnej, jeśli nie jesteś. Stąd użycie ustawienia > 0 w tym filtrze w pewnym sensie wykorzystuje wykrywanie ruchu chipsetu GPS. Ale nawet jeśli nie jest filtrowane tutaj w czasie nagrywania, nadal używamy tej funkcji w naszej analizie GPX do określenia skorygowanej odległości, tzn. wartość wyświetlana w tym polu to odległość zarejestrowana w ruchu.</details> |
| **Automatyczne dzielenie nagrań po przerwie** | Automatycznie dzieli ślady na podstawie przerw czasowych między zarejestrowanymi punktami. <ul><li>Nowy segment rozpoczyna się po 6-minutowej przerwie.</li><li>Nowy ślad rozpoczyna się po 2-godzinnej przerwie.</li><li>Nowy plik rozpoczyna się, gdy zmienia się data.</li><li>Przerwy mogą wynikać z utraty sygnału GPS, niskiej prędkości lub ustawień konfiguracji.</li></ul><details><summary>*Uwaga*</summary>Przerwa jest identyfikowana, gdy nie są rejestrowane żadne punkty. Może się to zdarzyć, ponieważ lokalizacja nie jest wykrywana lub ponieważ jest wykrywana, ale nie jest rejestrowana. Może to być spowodowane kilkoma czynnikami, w tym słabymi sygnałami GPS z powodu złych warunków pogodowych lub prędkością ruchu spadającą poniżej skonfigurowanego progu. W takich przypadkach, nawet jeśli urządzenie może wykryć lokalizację, nie rejestruje jej.<br/><br/>Te luki w zarejestrowanych danych mogą wywołać utworzenie nowego segmentu w ramach tego samego śladu, nowego śladu w tym samym pliku lub nowego pliku GPX w ramach jednego nagrania. Jest to zarządzane w ramach jednej sesji nagrywania start/stop.</details> |
| **Zapobiegaj samodzielnemu logowaniu** (*Android*) | Wstrzymuje nagrywanie śladu, gdy aplikacja OsmAnd zostanie zamknięta (za pomocą *ostatnich aplikacji*). Wskaźnik tła nie jest wyświetlany w panelu powiadomień Androida. |
| **Uwzględnij kierunek** | Rejestruje kierunek (kierunek ruchu) dla każdego punktu w pliku GPX. Kierunek to kierunek, w którym urządzenie jest skierowane, co może różnić się od kierunku ruchu z powodu czynników zewnętrznych, takich jak wiatr lub poślizg. |
| **Aktywność** (*Android*) | Opcja pozwala wstępnie wybrać [typ aktywności](../map/tracks/track-context-menu.md#track-information-activity) dla profilu, który jest następnie automatycznie stosowany do wszystkich nagranych śladów. |
| **Czujniki zewnętrzne** <br/> *Wymaga włączonej wtyczki* | Dane z [zewnętrznych czujników](../plugins/external-sensors.md#trip-recording), takich jak *<Translate android="true" ids="map_widget_ant_heart_rate"/>* lub *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>*, są logowane do pliku GPX. Dane *Dystans* nie są rejestrowane na Androidzie ani iOS. Wyświetlane tylko wtedy, gdy włączona jest [wtyczka Czujniki zewnętrzne](../plugins/external-sensors.md). |
| **Metryki pojazdu** (*Android*) <br/> *Wymaga włączonej wtyczki* | Dane ze [skanera OBD-II](../plugins/vehicle-metrics.md#trip-recording) są logowane do pliku GPX. Wyświetlane tylko wtedy, gdy włączona jest [wtyczka Metryki pojazdu](../plugins/vehicle-metrics.md).<br />*Uwaga*: Możesz dodać, które metryki mają być rejestrowane w pliku GPX z listy: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Folder przechowywania śladów** (*Android*) | Określa, gdzie w zakładce *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* przechowywane są nagrane ślady. Opcje obejmują przechowywanie wszystkich śladów w folderze Rec lub organizowanie ich według miesięcy, np. Rec/rrrrr-mm. |
| **Powiadomienie** | Kontroluje wyświetlanie [powiadomienia o nagrywaniu trasy](#notifications) w obszarze powiadomień urządzenia, które pozwala rozpocząć nagrywanie tras. |
| **Śledzenie online** (*Android*) | Umożliwia śledzenie Twojej lokalizacji w czasie rzeczywistym poprzez wysyłanie zarejestrowanych punktów na określony adres URL. Interwał śledzenia określa, jak często punkty są wysyłane, a bufor czasu przechowuje punkty, gdy nie ma połączenia z Internetem.<details><summary>*Uwaga*</summary>Jeśli ta opcja jest włączona, a nagrywanie śladu jest w toku, widżet Dystans/Start-Stop (REC) zmienia kolor na **zielony** zamiast **czerwonego**, wskazując, że każdy zarejestrowany punkt jest przesyłany na określony adres URL. Pole **Adres internetowy** pozwala wprowadzić adres URL, używając następującego formatu parametrów:<ul><li>`lat={0}`: Szerokość geograficzna</li><li>`lon={1}`: Długość geograficzna</li><li>`timestamp={2}`: Znacznik czasu (czas Unix)</li><li>`hdop={3}`: Poziome rozcieńczenie precyzji</li><li>`altitude={4}`: Wysokość</li><li>`speed={5}`: Prędkość</li><li>`bearing={6}`: Kierunek (kierunek ruchu)</li><li>`eta={7}`: Szacowany czas przybycia (czas Unix)</li><li>`etfa={8}`: Szacowany czas do pierwszego punktu pośredniego lub punktu końcowego (czas Unix)</li><li>`eda={9}`: Szacowana odległość do przybycia lub znacznika (w metrach)</li><li>`edfa={10}`: Szacowana odległość do pierwszego punktu pośredniego lub punktu końcowego (w metrach)</li></ul>Możesz ustawić **Interwał śledzenia**, aby określić, jak często punkty lokalizacji są wysyłane, z opcjami od 0 sekund do 5 minut. Dodatkowo parametr **Bufor czasu** określa, jak długo punkty lokalizacji są przechowywane, jeśli nie ma połączenia z Internetem, zapewniając zapisanie i przesłanie danych po przywróceniu połączenia.</details> |
| **Ślady** | Szybkie odniesienie do folderu, w którym zapisywane są ślady w zakładce *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Przywróć domyślne ustawienia wtyczki** | Resetuje wszystkie ustawienia nagrywania trasy dla bieżącego profilu do ich wartości domyślnych. |
| **Kopiuj z innego profilu** (*Android*) | Kopiuje ustawienia nagrywania trasy z jednego profilu do drugiego. |

### Optymalizacja baterii {#battery-optimization}

<InfoAndroidOnly />

![Ślad na mapie iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Ślad na mapie iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Ta funkcja pozwala zarządzać ustawieniami optymalizacji baterii dla OsmAnd, aby zapewnić nieprzerwany dostęp do Twojej lokalizacji, nawet gdy aplikacja działa w tle podczas nawigacji lub nagrywania śladu.

- **Ustawienia optymalizacji baterii**. Otwiera ustawienia Androida, gdzie możesz modyfikować preferencje oszczędzania baterii dla OsmAnd. [Więcej szczegółów tutaj](../troubleshooting/general.md#optimizing-battery-consumption).
- **Nie pytaj więcej**. Trwale zamyka okno dialogowe, więc nie pojawi się ponownie.
- **Zamknij**. Tymczasowo zamyka okno dialogowe, które pojawi się ponownie następnym razem, gdy optymalizacja baterii będzie wymagała uwagi.

### Powiadomienia {#notifications}

![Powiadomienie o nagrywaniu trasy](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Jeśli [Powiadomienie](#recording-settings) jest włączone w ustawieniach wtyczki, powiadomienia o nagrywaniu trasy będą zawsze wyświetlane w obszarze powiadomień systemowych, gdy nagrywanie jest aktywne. To powiadomienie zapewnia, że proces nagrywania nie zostanie przerwany przez system i nie można go wyłączyć podczas aktywnego nagrywania.

- Obszar powiadomień otwiera się po przesunięciu palcem w dół od góry ekranu i zamyka po przesunięciu palcem w górę. Te wiadomości informują o działaniach, takich jak rozpoczęcie/zatrzymanie nagrywania trasy, zwłaszcza gdy automatyczne nagrywanie jest włączone podczas nawigacji.
- Powiadomienia pozostają widoczne niezależnie od tego, czy aplikacja działa na pierwszym planie, w tle, czy jest zamknięta. Możesz ręcznie usunąć stare powiadomienie, jeśli nie jest już potrzebne, ale to nie zatrzyma trwającego nagrywania.

**Ważna uwaga**.

Takie zachowanie jest wymagane przez Androida dla każdej usługi działającej na pierwszym planie, takiej jak nagrywanie trasy, aby pozostała widoczna dla użytkownika.

- Jeśli powiadomienie zostanie usunięte, Android automatycznie zatrzyma nagrywanie. Możesz użyć ustawienia [Zapobiegaj samodzielnemu logowaniu](#recording-settings).
- Ustawienie **Powiadomienie** w OsmAnd wpływa na to, czy pasek powiadomień pokazuje skrót do rozpoczęcia nagrywania, gdy żadne nagrywanie nie jest aktywne. **Nie** kontroluje widoczności powiadomienia podczas aktywnego nagrywania.

**Dodatkowe opcje Androida**.

![Powiadomienie o nagrywaniu trasy](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- W ***Ustawieniach Androida → Powiadomienia i pasek stanu → Powiadomienia na ekranie blokady*** możesz usunąć OsmAnd z listy aplikacji, aby zapobiec wyświetlaniu powiadomień na ekranie blokady, unikając przypadkowej aktywacji ekranu. Nie wpłynie to na nagrywanie śladu. Powiadomienia nadal będą pojawiać się w regularnym obszarze powiadomień.
- **OsmAnd** może również pojawić się w ***Prywatność → Specjalne uprawnienia → Włącz ekran***. Jeśli chcesz zapobiec włączaniu ekranu po pojawieniu się powiadomienia, spróbuj usunąć OsmAnd z tej listy.

<!--
- OsmAnd nie jest wymieniony w **Prywatność** *→* **Specjalne uprawnienia** → **Alarmy i przypomnienia**.
-->

**Powiadomienie z plakietką**.

![Powiadomienie o nagrywaniu trasy](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Plakietka ikony aplikacji pojawia się obok ikony OsmAnd, gdy nagrywanie śladu jest aktywne.

- Ta ikona znika po zakończeniu nagrywania śladu. Aby sprawdzić, czy nagrywanie jest aktywne, możesz przejść do *Menu → Moje miejsca → Zakładka Ślady* lub nacisnąć widżet, aby zarządzać nagrywaniem.
- Jeśli nagrywanie nie jest w toku, a plakietka jest nadal wyświetlana, może to oznaczać, że wiadomość z OsmAnd została pozostawiona w panelu powiadomień urządzenia.
- Aby wyłączyć plakietki w ustawieniach Androida, przejdź do *Ustawień urządzenia → Aplikacje → OsmAnd → Powiadomienia* i wyłącz opcję wyświetlania plakietki dla tej aplikacji.

## Widżety {#widgets}

Widżety pozwalają wyświetlać kluczowe informacje o nagrywaniu trasy bezpośrednio na ekranie, takie jak *Dystans*, *Czas trwania*, *Pod górę* i *W dół*.

Aby rozpocząć korzystanie z *widżetów nagrywania trasy*, musisz dokonać wszystkich następujących ustawień:

1. [Włącz wtyczkę](../start-with/first-steps.md#how-to-configure-plugins).
2. Skonfiguruj ustawienia nagrywania trasy dla wymaganego [profilu](../personal/profiles.md).
3. Dodaj niezbędne **widżety nagrywania trasy** do ekranu. Należy pamiętać, że ta konfiguracja jest **specyficzna dla każdego profilu**.

### Dodaj widżet nagrywania {#add-recording-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Dodawanie widżetu Dystans/Start-Stop w systemie Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Dodawanie widżetu Dystans/Start-Stop w systemie iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

[Widżet nagrywania trasy](../widgets/info-widgets.md#trip-recording-widgets) zapewnia łatwy sposób monitorowania statusu nagrywania i szybkiego dostępu do ustawień i szczegółów nagrywania. Ten widżet jest automatycznie dodawany do ekranu po włączeniu wtyczki Nagrywanie trasy.

Aby dostosować interfejs, możesz dodawać lub usuwać widżet nagrywania trasy i [inne widżety](../plugins/trip-recording#duration-uphill-downhill) za pośrednictwem menu Konfiguruj ekran.

### Dystans (Start-Stop) {#distance-start-stop}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widżet nagrywania trasy](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Zakończ nagrywanie w systemie Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet nagrywania trasy](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Widżet nagrywania trasy](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Gdy widżety są wyświetlane na mapie, dotknięcie któregokolwiek z nich ujawnia dodatkowe szczegóły śladu i umożliwia interakcję z nagraniem.
Widżet *Dystans* wyświetla całkowity dystans aktualnie nagranej trasy i działa jako główny interfejs do zarządzania nagraniami. Dotknięcie go ujawnia [dialog nagrywania trasy](#start-a-dialog), gdzie możesz rozpocząć, zatrzymać i wyświetlić szczegółowe informacje o swoim śladzie.

- Widżet jest dodawany automatycznie po włączeniu *wtyczki nagrywania trasy*, ale można go ukryć za pomocą [menu Konfiguruj ekran](../widgets/configure-screen.md#configure-screen-menu).
- Jeśli opcja *Pokaż dialog startowy* jest wyłączona w ustawieniach wtyczki Nagrywanie trasy, dotknięcie aktywnego widżetu nadal otworzy *okno dialogowe nagrywania trasy*, umożliwiając dostęp do dalszych opcji i informacji.

Oprócz widżetu *Dystans/Start-Stop*, **wtyczka Nagrywanie trasy** zawiera trzy inne widżety: *Czas trwania*, *Pod górę* i *W dół*. Dostarczają one dodatkowych informacji o Twojej podróży, pomagając śledzić postępy w czasie rzeczywistym.

| |
|-----------|
| **Dystans/Start-Stop**. Ten widżet wyświetla dystans aktualnie nagrywanej trasy. Jest automatycznie dodawany po włączeniu wtyczki Nagrywanie trasy, ale można go ukryć za pomocą menu Konfiguruj ekran. Widżet ma trzy różne stany: *Nagrywanie*, *Wstrzymane* i *Nieaktywne*, z których każdy wskazuje aktualny status nagrywania trasy. |
| ![Widżet nagrywania trasy (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Aby otworzyć [dialog nagrywania trasy](#start-a-dialog) po dotknięciu nieaktywnego widżetu, włącz opcję *Pokaż dialog uruchamiania* w ustawieniach wtyczki Nagrywanie trasy. Jeśli opcja jest wyłączona, nagrywanie rozpocznie się natychmiast po dotknięciu widżetu bez otwierania dialogu. |

### Czas trwania, pod górę, w dół {#duration-uphill-downhill}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Czas trwania**. Wyświetla całkowity czas aktualnie nagrywanej trasy w godzinach i minutach. |
|![widżety](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Pod górę**. Pokazuje skumulowany wzrost wysokości dla aktualnie nagrywanej trasy. |
|![widżety](@site/static/img/widgets/tr_rec_wid_up.png)|
|**W dół**. Wskazuje całkowity spadek wysokości zgromadzony podczas aktualnie nagrywanej trasy. |
|![widżety](@site/static/img/widgets/tr_rec_wid_dow.png)|

Jeśli masz wybrane wiele widżetów — *Czas trwania*, *Pod górę* lub *W dół* — możesz uzyskać dostęp do tego samego okna dialogowego dla każdego z nich bez konieczności przełączania lub zamykania. Ten ujednolicony interfejs ułatwia przeglądanie i zarządzanie wszystkimi powiązanymi informacjami.

## Powiązane artykuły {#related-articles}

- [Menu kontekstowe mapy](../map/map-context-menu.md)
- [Pokaż ślad na mapie](../map/tracks/index.md)
- [Analizuj na mapie](../map/tracks/index.md#analyze-track-on-map)
- [Menu kontekstowe śladu](../map/tracks/track-context-menu.md)
- [Nawigacja po śladzie](../navigation/setup/gpx-navigation.md)

### Typowe problemy i rozwiązania {#common-issues-and-solutions}

- Nagrywanie trasy nie uruchamia się.
    - Upewnij się, że **wtyczka Nagrywanie trasy** jest włączona: *Menu → Wtyczki → Nagrywanie trasy → Włącz*.
    - Sprawdź, czy ustawienia są poprawne: *Menu → Konfiguruj profil → Ustawienia wtyczki → Nagrywanie trasy*.
    - Jeśli nagrywanie nadal nie uruchamia się, uruchom ponownie aplikację i spróbuj ponownie.

- Nagrywanie trasy zatrzymuje się niespodziewanie.
    - Sprawdź, czy *ustawienia optymalizacji baterii* urządzenia nie zatrzymują nagrywania. Niektóre urządzenia mogą wstrzymywać aktywność w tle, aby oszczędzać energię. Przejdź do *Ustawienia urządzenia → Bateria*.

- Nagrany dystans nie odpowiada rzeczywistemu dystansowi.
    - Sprawdź, czy GPS jest włączony i ma aktywny sygnał.
    - Zmniejsz próg dokładności GPS: *Menu → Konfiguruj profil → Nagrywanie trasy → Minimalna dokładność*.

- Nagrane ślady są szumne. [(sprawdź)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Nagrane ślady mają luki. [(sprawdź)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Jak śledzić przejechany dystans. [(sprawdź)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Aby uzyskać dodatkowe informacje dotyczące rozwiązywania problemów, odwiedź: [Rozwiązywanie problemów z nagrywaniem śladu](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Ostatnia aktualizacja: styczeń 2025*