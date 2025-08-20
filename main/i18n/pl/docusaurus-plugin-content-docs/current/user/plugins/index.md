---
source-hash: 7e75b5e052216e2fd2c8684ffc936212758b2d1c0efb985a5c0f8ef838440750
sidebar_position: 18
title:  Wtyczki
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

Wtyczki znacznie rozszerzają funkcjonalność OsmAnd. Każda z nich została zaprojektowana do rozwiązania konkretnego zadania lub przypadku użycia, takiego jak nagrywanie podróży, dostęp do artykułów Wikipedii offline, wizualizacja danych terenowych lub zapewnienie widoku ulicy.

Wtyczki mogą być wewnętrzne, aktywowane w aplikacji OsmAnd, lub zewnętrzne, oddzielnie zainstalowane programy. Wtyczki innych firm działają poprzez API OsmAnd i mogą uzyskiwać dostęp do danych OsmAnd.


## Konfiguracja wtyczki {#configure-plugin}

Aby uzyskać dostęp do funkcjonalności wtyczki, należy ją najpierw [włączyć](#enable--disable), a niektóre wtyczki wymagają [zakupu](#purchase) przed użyciem. Następnie, w niektórych przypadkach, należy aktywować określoną warstwę mapy lub [skonfigurować](#plugin-settings) profil użytkownika.


### Włącz / Wyłącz {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Włącz*

![Włącz wtyczki Android](@site/static/img/settings/plugins_enable_android.png) ![Przykład wtyczki Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Włącz wtyczki iOS](@site/static/img/settings/plugins_enable_ios.png) ![Przykład wtyczki iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Zakup {#purchase}

Większość wtyczek jest dostępna za darmo, tylko wtyczki z poniższej listy wymagają zakupu licencji [OsmAnd+ lub OsmAnd Pro](../purchases/index.md) do użytku:

- [Topografia](../plugins/topography.md)
- [3D Relief](../plugins/topography.md#3d-relief) (funkcja wtyczki Topografia)
- [Wikipedia](../plugins/wikipedia.md)
- [Widok mapy morskiej](../plugins/nautical-charts.md)
- [Pogoda](../plugins/weather.md)

Szczegółowe informacje na temat zakupu aplikacji można znaleźć w sekcji [Zakup](../purchases/).

### Funkcje wtyczek {#plugin-features}

Wtyczki OsmAnd mogą rozszerzać następujące grupy funkcji: **Warstwy**, **Widżety**, **Akcje menu kontekstowego**, **Akcje szuflady**, **Styl mapy**, **Źródło mapy**, **Profil**.

🤖 - *tylko dla wersji OsmAnd na Androida.*

| Nazwa wtyczki | Funkcje |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Warstwa mapy](../plugins/wikipedia.md#download-wikipedia-packages), [Menu kontekstowe](../plugins/wikipedia.md#wikipedia-languages) |
| [Mapy online](#online-maps) |[Warstwa mapy](../plugins/online-map.md#configure-map-source) |
| [Nagrywanie podróży](#trip-recording) | [Widżet](../plugins/trip-recording.md#widgets), [Profil](../plugins/trip-recording.md#profile-settings) |
| [Topografia](#topography) | [Warstwa mapy](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [3D Relief](#topography) 🤖 | [Warstwa mapy](../plugins/topography.md#3d-relief) |
| [Pogoda](../plugins/weather.md) | [Warstwa mapy](../plugins/weather.md#display-weather-on-the-map), [Widżet](../plugins/weather#weather-widgets), [Ekran](../plugins/weather.md#configure-screen) |
| [Widok mapy morskiej](#nautical-map-view) | [Styl mapy](../plugins/nautical-charts.md#nautical-map-style), [Profil](../plugins/nautical-charts.md#nautical-options) |
| [Widok mapy narciarskiej](#ski-map-view) | [Styl mapy](../plugins/ski-maps.md#set-winter-style), [Profil](../plugins/ski-maps.md#skiing-profile) |
|[Notatki audio/wideo](#audiovideo-notes) 🤖 | [Warstwa mapy](../plugins/audio-video-notes.md#show-all-on-the-map), [Menu kontekstowe](../plugins/audio-video-notes.md#create), [Widżet](../plugins/audio-video-notes.md#recording-widget) |
|[Edycja OpenStreetMap](#openstreetmap-editing)| [Warstwa mapy](../plugins/osm-editing.md#how-to-use) |
|[Pozycja parkowania](#parking-position) | [Menu kontekstowe](../plugins/parking.md#set-a-point), [Widżet](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Warstwa mapy](../plugins/mapillary.md#map-layer), [Menu kontekstowe](../plugins/mapillary.md#map-context-menu) , [Widżet](../plugins/mapillary.md#mapillary-widget)|
|[Czujniki zewnętrzne](#external-sensors) 🤖 | [Widżet](../plugins/external-sensors.md#widgets) |
|[Dostępność](#accessibility) 🤖 | [Ustawienia niestandardowe](../plugins/accessibility.md#plugin-settings) |
| [Rozwój OsmAnd](#osmand-development) | [Ustawienia niestandardowe](../plugins/development.md#plugin-settings) |
| [OsmAnd Tracker](#osmand-tracker) 🤖 | [Warstwa mapy](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widżet](../plugins/osmand-tracker.md#osmand-tracker-widget), [Menu kontekstowe](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [Śledzenie statków AIS](#ais-vessel-tracker) 🤖 | [Ustawienia niestandardowe](../plugins/ais-tracker.md#plugin-settings) |


### Ustawienia wtyczki {#plugin-settings}

:::caution UWAGA
Tylko wtyczka rozwoju OsmAnd i wtyczka edycji OSM zmieniają ustawienia dla wszystkich profili. Pozostałe wtyczki są konfigurowane dla każdego profilu oddzielnie.
:::

Większość wtyczek udostępnia specyficzne ustawienia profilu lub globalne, do których można uzyskać dostęp poprzez:

- *Menu główne → Wtyczki → Nazwa wtyczki → Ustawienia (&#x2699 dla iOS)* lub
- *Menu główne → Ustawienia → Profil → [Ustawienia wtyczki](../personal/profiles.md#plugin-settings)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia wtyczki Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Ustawienia wtyczki Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia wtyczki iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Ustawienia wtyczki iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

Następujące wtyczki posiadają własne ustawienia:

🤖 - *tylko dla wersji OsmAnd na Androida.*

| Nazwa wtyczki | Ustawienia |
|:------------|:-------|
| [Nagrywanie podróży](#trip-recording) | Konfiguracja [trybów pracy](../plugins/trip-recording.md#recording-parameters) nagrywania podróży |
| [Pogoda](#weather) | Konfiguracja jednostek miary do wyświetlania zdarzeń pogodowych |
|[Notatki audio/wideo](#audiovideo-notes) 🤖 | Wybór [formatu wideo, czasu przechowywania itp.](../plugins/audio-video-notes.md#plugin-settings) |
|[Edycja OpenStreetMap](#openstreetmap-editing)| Określenie [loginu](../plugins/osm-editing.md#plugin-settings) użytkownika |
| [Czujniki zewnętrzne](#external-sensors) 🤖 | Połączenie z urządzeniem zewnętrznym [Ustawienia](../plugins/external-sensors.md#settings) |
| [Dostępność](#accessibility) 🤖 | [Ustawienia](../plugins/accessibility.md#plugin-settings) pozwalają na korzystanie z funkcji dostępności [Androida](https://www.android.com/accessibility/) w OsmAnd. |
| [Rozwój OsmAnd](#osmand-development) | [Ustawienia wtyczki](../plugins/development.md#plugin-settings) pozwalają na włączenie specjalnych funkcji dla programistów lub doświadczonych użytkowników |
| [OsmAnd Tracker](#osmand-tracker) 🤖 | Wszystkie ustawienia są konfigurowalne w oddzielnej aplikacji |
| [Śledzenie statków AIS](#ais-vessel-tracker) | [Ustawienia wtyczki](../plugins/ais-tracker.md#plugin-settings) pozwalają na włączenie specjalnych ustawień |

### Akcje wtyczek {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *za pomocą tej opcji ustawienia wtyczki można zresetować do wartości domyślnych*.
**<Translate android="true" ids="copy_from_other_profile"/>** - *ustawienia wtyczki można skopiować z innego profilu*.


## Lista wtyczek {#plugins-list}


### [Wikipedia](./wikipedia.md) {#wikipedia}

Posiadanie Wikipedii podczas podróży pomaga dowiedzieć się więcej o odwiedzanych miejscach. Jest dostępna offline i pokazuje artykuły z Wikipedii związane z punktami zainteresowania bezpośrednio na mapie.

### [Mapy online](./online-map.md) {#online-maps}

Mapy online OsmAnd to obszerne uzupełnienie bazy danych OpenStreetMap, już obecnej w aplikacji. Dzięki tej wtyczce możesz dodawać warstwy do mapy z informacjami z różnych źródeł.

### [Nagrywanie podróży](./trip-recording.md) {#trip-recording}

Aby opowiedzieć historię o tym, gdzie byłeś, dane GPS, takie jak szerokość i długość geograficzna Twojej lokalizacji, mogą być nagrywane i przechowywane w pliku, a następnie ponownie wykorzystane, ulepszone, wzbogacone o punkty trasy, udostępnione do nawigacji, udostępnione znajomym itp.

### [Topografia](./topography.md) {#topography}

Informacje topograficzne, takie jak linie konturowe, cieniowanie wzgórz, nachylenie, rzeźba 3D, pomagają w wizualnej ocenie ukształtowania terenu poprzez wyświetlanie wysokości, rzeźby, ekstremów, stromości, punktów o równej wysokości itp.

### [Widok mapy morskiej](./nautical-charts.md) {#nautical-map-view}

Widok mapy morskiej zapewnia szczegółowe graficzne przedstawienie oceanów, mórz, obszarów przybrzeżnych i rzek, aby pomóc w nawigacji po wodzie, zobaczyć popularne trasy ruchu, przeszkody na drodze wodnej, porty, kotwicowiska i inne istotne odniesienia.

### [Widok mapy narciarskiej](./ski-maps.md) {#ski-map-view}

Widok mapy narciarskiej pokazuje zimowe kolory i trasy zjazdowe lub biegowe, a także kolejki linowe, wyciągi krzesełkowe, obiekty i usługi w pobliżu, co jest przydatne do nawigacji w miejscach takich jak tereny rekreacyjne, ośrodki narciarskie i parki terenowe.

### [Notatki audio/wideo](./audio-video-notes.md) {#audiovideo-notes}

Twórz notatki audio/wideo do przyszłego wykorzystania, np. aby zapamiętać wydarzenie, scenę lub interakcję. Utworzone notatki audio/wideo są dostępne w *Moich miejscach*, a także na mapie jako indywidualna warstwa historii i myśli użytkownika powiązanych z geolokalizacją. Tylko dla Androida.

### [Pozycja parkowania](./parking.md) {#parking-position}

Ustaw punkt na mapie, gdzie Twój samochód został pozostawiony na ulicy i powiadom swój kalendarz, kiedy kończy się czas parkowania. Ułatwi to śledzenie czasu i lokalizacji Twojego samochodu.

### [Edycja OpenStreetMap](./osm-editing.md) {#openstreetmap-editing}

Wtyczka do edycji OpenStreetMap umożliwia współtworzenie OpenStreetMap, globalnej społeczności tworzącej kompleksową mapę świata i udostępniającej publicznie aktualne, otwarte dane.

### [Mapillary](./mapillary.md) {#mapillary}

Zobacz widoki uliczne swoich tras lub interesujących miejsc, dostarczone przez [Mapillary](https://www.mapillary.com/) (wymagane połączenie z Internetem).

### [Dostępność](./accessibility.md) {#accessibility}

Wtyczka Dostępność udostępnia funkcje dostępności urządzenia bezpośrednio w OsmAnd. Tylko dla Androida.

### [Czujniki zewnętrzne](./external-sensors.md) {#external-sensors}

Podłącz zewnętrzne czujniki, aby wyświetlać ich dane w OsmAnd i przechowywać informacje w nagraniach śladów.

### [Metryki pojazdu](./vehicle-metrics.md) {#vehicle-metrics}

Podłącz skaner OBD-II, aby wyświetlać dane pojazdu w OsmAnd i przechowywać informacje w nagraniach śladów.

### [Pogoda](./weather.md) {#weather}

Pokazuje godzinową prognozę na bieżący dzień i na 7 dni do przodu.

### [Rozwój OsmAnd](./development.md) {#osmand-development}

Wtyczka rozwoju OsmAnd jest przeznaczona dla programistów i doświadczonych użytkowników. Pozwala symulować trasy nawigacyjne, sprawdzać wydajność renderowania ekranu itp.

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker pomaga zobaczyć, gdzie znajdują się Twoje kontakty na mapie w OsmAnd. Tylko dla Androida.

### [Śledzenie statków AIS](./ais-tracker.md) {#ais-vessel-tracker}

Wyświetla pozycje AIS i informacje o otaczających statkach. Dane AIS są odbierane przez sieć z zewnętrznego odbiornika AIS.

## [Utwórz własną wtyczkę](./custom.md) {#create-a-custom-plugin}

Możesz stworzyć własną wtyczkę, postępując zgodnie z artykułem *Pakiet niestandardowy*.


_______

> *Ostatnia aktualizacja: marzec 2025*