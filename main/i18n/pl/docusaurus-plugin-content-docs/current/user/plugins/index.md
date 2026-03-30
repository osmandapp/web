---
source-hash: 486ba412add5b9d4b990309d87b8af70a94ef71e579cdfeb3ce640bc57611e55
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

Wtyczki znacznie rozszerzają funkcjonalność OsmAnd. Każda z nich jest przeznaczona do realizacji określonego zadania lub przypadku użycia, takiego jak nagrywanie podróży, dostęp do artykułów Wikipedii w trybie offline, wizualizacja danych o terenie lub zapewnienie widoku na poziomie ulicy.

Wtyczki mogą być wewnętrzne, aktywowane w aplikacji OsmAnd, lub zewnętrzne, oddzielnie instalowane programy. Wtyczki firm trzecich działają poprzez API OsmAnd i mogą uzyskiwać dostęp do danych OsmAnd.


## Konfiguracja wtyczki {#configure-plugin}

Aby uzyskać dostęp do funkcjonalności wtyczki, należy ją najpierw [włączyć](#enable--disable), a niektóre wtyczki przed użyciem wymagają [zakupu](#purchase). Następnie, w niektórych przypadkach, należy aktywować określoną warstwę mapy lub [skonfigurować](#plugin-settings) profil użytkownika.


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

Większość wtyczek jest dostępna za darmo, tylko wtyczki z poniższej listy wymagają do użycia zakupu licencji [OsmAnd+ lub OsmAnd Pro](../purchases/index.md):  

- [Topografia](../plugins/topography.md)
- [Rzeźba terenu 3D](../plugins/topography.md#3d-relief) (funkcja wtyczki Topografia)
- [Wikipedia](../plugins/wikipedia.md)
- [Widok mapy morskiej](../plugins/nautical-charts.md)
- [Pogoda](../plugins/weather.md)

Szczegółowe informacje na temat zakupu aplikacji można znaleźć w sekcji [Zakup](../purchases/).

### Funkcje wtyczek {#plugin-features}

Wtyczki OsmAnd mogą rozszerzać następujące grupy funkcji: **Warstwy**, **Widżety**, **Akcje menu kontekstowego**, **Akcje szuflady**, **Styl mapy**, **Źródło mapy**, **Profil**.

🤖 *- tylko dla wersji OsmAnd na Androida.*

| Nazwa wtyczki |Funkcje |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Warstwa mapy](../plugins/wikipedia.md#download-wikipedia-packages), [Menu kontekstowe](../plugins/wikipedia.md#wikipedia-settings) |
| [Mapy online](#online-maps) |[Warstwa mapy](../plugins/online-map.md#how-to-prepare-raster-maps) |
| [Nagrywanie trasy](#trip-recording) | [Widżet](../plugins/trip-recording.md#widgets), [Profil](../plugins/trip-recording.md#recording-settings) |
| [Topografia](#topography) | [Warstwa mapy](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [Rzeźba terenu 3D](#topography) 🤖  | [Warstwa mapy](../plugins/topography.md#3d-relief) |
| [Pogoda](../plugins/weather.md) | [Warstwa mapy](../plugins/weather.md#display-weather-on-the-map), [Widżet](../plugins/weather#weather-widgets), [Ekran](../plugins/weather.md#weather-forecast-screen) |
| [Widok mapy morskiej](#nautical-map-view) | [Styl mapy](../plugins/nautical-charts.md#nautical-map-style), [Profil](../plugins/nautical-charts.md#nautical-profile)  |
| [Widok mapy narciarskiej](#ski-map-view) | [Styl mapy](../plugins/ski-maps.md#set-winter-and-ski-map-style), [Profil](../plugins/ski-maps.md#skiing-profile) |
|[Notatki audio/wideo](#audiovideo-notes) 🤖  | [Warstwa mapy](../plugins/audio-video-notes.md#show-all-on-the-map), [Menu kontekstowe](../plugins/audio-video-notes.md#create-a-single-note), [Widżet](../plugins/audio-video-notes.md#recording-widget) |
|[Pozycja parkowania](#parking-position) | [Menu kontekstowe](../plugins/parking.md#set-a-spot), [Widżet](../plugins/parking.md#parking-widget) |
|[Edycja OpenStreetMap](#openstreetmap-editing)| [Warstwa mapy](../plugins/osm-editing.md#authorization) |
|[Mapillary](#mapillary) | [Warstwa mapy](../plugins/mapillary.md#map-layer), [Menu kontekstowe](../plugins/mapillary.md#map-context-menu) , [Widżet](../plugins/mapillary.md#mapillary-widget)|
|[Czujniki zewnętrzne](#external-sensors) 🤖  | [Widżet](../plugins/external-sensors.md#widgets) |
|[Metryki pojazdu](#vehicle-metrics)  | [Ustawienia niestandardowe](../plugins/vehicle-metrics#scanner-settings), [Widżet](../plugins/vehicle-metrics#widgets) |
|[Astronomia](#astronomy)  | [Ekran](../plugins/astronomy.md#star-map-screen), [Menu kontekstowe](../plugins/astronomy.md#context-menu) |
|[Dostępność](#accessibility) 🤖  | [Ustawienia niestandardowe](../plugins/accessibility.md#plugin-settings) |
|[Rozwój OsmAnd](#osmand-development) | [Ustawienia niestandardowe](../plugins/development.md#plugin-settings) |
|[OsmAnd Tracker](#osmand-tracker) 🤖  | [Warstwa mapy](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widżet](../plugins/osmand-tracker.md#tracker-widget), [Menu kontekstowe](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
|[Śledzenie statków AIS](#ais-vessel-tracker) 🤖  |  [Ustawienia niestandardowe](../plugins/ais-tracker.md#plugin-settings) |


### Ustawienia wtyczki {#plugin-settings}

:::caution UWAGA
Tylko wtyczka deweloperska OsmAnd i wtyczka do edycji OSM zmieniają ustawienia dla wszystkich profili. Pozostałe wtyczki są konfigurowane dla każdego profilu osobno.  
:::

Większość wtyczek zapewnia określone ustawienia profilu lub ustawienia globalne, do których można uzyskać dostęp poprzez:

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

Następujące wtyczki zapewniają własne ustawienia:

🤖 *- tylko dla wersji OsmAnd na Androida.*

| Nazwa wtyczki | Ustawienia |
|:------------|:-------|
| [Nagrywanie trasy](#trip-recording) | Skonfiguruj [tryby działania](../plugins/trip-recording.md#required-setup-parameters) nagrywania trasy |
| [Pogoda](#weather) | Skonfiguruj jednostki miary do wyświetlania zdarzeń pogodowych |
|[Notatki audio/wideo](#audiovideo-notes) 🤖  | Wybierz [format wideo, czas przechowywania itp.](../plugins/audio-video-notes.md#plugin-settings) |
|[Edycja OpenStreetMap](#openstreetmap-editing)| Określ [login](../plugins/osm-editing.md#settings) użytkownika  |
|  [Czujniki zewnętrzne](#external-sensors) 🤖  | Połącz z urządzeniem zewnętrznym [Ustawienia](../plugins/external-sensors.md#required-setup-parameters) |
|  [Dostępność](#accessibility) 🤖  | [Ustawienia](../plugins/accessibility.md#plugin-settings) pozwalają na używanie [funkcji Dostępności Androida](https://www.android.com/accessibility/) wewnątrz OsmAnd. |
| [Rozwój OsmAnd](#osmand-development) | [Ustawienia wtyczki](../plugins/development.md#plugin-settings) pozwalają włączyć specjalne funkcje dla deweloperów lub doświadczonych użytkowników |
|  [OsmAnd Tracker](#osmand-tracker) 🤖  | Wszystkie ustawienia można konfigurować w osobnej aplikacji |
| [Śledzenie statków AIS](#ais-vessel-tracker) | [Ustawienia wtyczki](../plugins/ais-tracker.md#plugin-settings) pozwalają włączyć specjalne ustawienia |

### Działania wtyczki {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *używając tej opcji, ustawienia wtyczki można zresetować do wartości domyślnych*.  
**<Translate android="true" ids="copy_from_other_profile"/>** - *ustawienia wtyczki można skopiować z innego profilu*.


## Lista wtyczek {#plugins-list}

### [Wikipedia](./wikipedia.md) {#wikipedia}

Posiadanie Wikipedii podczas podróży pomaga dowiedzieć się więcej o odwiedzanych miejscach. Jest ona dostępna w trybie offline i pokazuje artykuły z Wikipedii związane z punktami POI bezpośrednio na mapie.

### [Mapy online](./online-map.md) {#online-maps}

Mapy online OsmAnd są obszernym dodatkiem do bazy danych OpenStreetMap już obecnej w aplikacji. Dzięki tej wtyczce możesz dodawać do swojej mapy warstwy z informacjami z różnych źródeł.  

### [Nagrywanie trasy](./trip-recording.md) {#trip-recording}

Aby opowiedzieć historię o tym, gdzie byłeś, dane GPS, takie jak szerokość i długość geograficzna Twojej lokalizacji, mogą być rejestrowane i przechowywane w pliku, a następnie ponownie wykorzystywane, ulepszane, wzbogacane o punkty trasy, udostępniane do nawigacji, udostępniane znajomym itp.  

### [Topografia](./topography.md) {#topography}

Informacje topograficzne, takie jak warstwice, cieniowanie wzgórz, nachylenie, rzeźba terenu 3D, pomagają w wizualnej ocenie ukształtowania terenu poprzez pokazanie wysokości, rzeźby, ekstremów, stromości, punktów o równej wysokości itp.  

### [Pogoda](./weather.md) {#weather}

Pokazuje prognozę godzinową na bieżący dzień i na 7 dni naprzód. 

### [Widok mapy morskiej](./nautical-charts.md) {#nautical-map-view}

Widok mapy morskiej zapewnia szczegółową graficzną reprezentację oceanów, mórz, obszarów przybrzeżnych i rzek, aby pomóc w nawigacji na wodzie, zobaczyć popularne szlaki komunikacyjne, przeszkody na drodze wodnej, porty, kotwicowiska i inne istotne punkty odniesienia.

### [Widok mapy narciarskiej](./ski-maps.md) {#ski-map-view}

Widok mapy narciarskiej pokazuje zimowe kolory i trasy zjazdowe lub biegowe, a także kolejki linowe, wyciągi krzesełkowe, obiekty i usługi w pobliżu, co jest przydatne do nawigacji w miejscach takich jak tereny rekreacyjne, ośrodki narciarskie i snowparki.

### [Notatki audio/wideo](./audio-video-notes.md) {#audiovideo-notes}

Twórz notatki audio/wideo do wykorzystania w przyszłości, np. w celu zapamiętania wydarzenia, sceny lub interakcji. Utworzone notatki audio/wideo są dostępne z *Moich miejsc*, a także na mapie jako indywidualna warstwa stworzonych przez użytkownika historii i myśli powiązanych z geolokalizacją. Tylko dla Androida.  

### [Pozycja parkowania](./parking.md) {#parking-position}

Ustaw na mapie punkt, w którym Twój samochód jest pozostawiony na ulicy i powiadom swój kalendarz, kiedy kończy się czas parkowania. Ułatwi Ci to śledzenie czasu i lokalizacji Twojego samochodu.

### [Edycja OpenStreetMap](./osm-editing.md) {#openstreetmap-editing}

Wtyczka do edycji OpenStreetMap pozwala na wnoszenie wkładu w OpenStreetMap, globalną społeczność tworzącą kompleksową mapę świata i dostarczającą publicznie dostępne, aktualne dane open-source.  

### [Mapillary](./mapillary.md) {#mapillary}

Zobacz widoki na poziomie ulicy swoich tras lub interesujących miejsc, dostarczane przez [Mapillary](https://www.mapillary.com/) (wymagane jest połączenie z Internetem).  

### [Czujniki zewnętrzne](./external-sensors.md) {#external-sensors}

Podłącz czujniki zewnętrzne, aby wyświetlać ich dane w OsmAnd i przechowywać informacje w nagraniach tras.  

### [Metryki pojazdu](./vehicle-metrics.md) {#vehicle-metrics}

Podłącz skaner OBD-II, aby wyświetlać dane pojazdu w OsmAnd i przechowywać informacje w nagraniach tras.  

### [Astronomia](./astronomy.md) {#astronomy}

Wtyczka Astronomia wyświetla interaktywną nakładkę nieba z gwiazdami, konstelacjami, Słońcem, Księżycem i planetami. Pomaga identyfikować obiekty niebieskie nad bieżącą lokalizacją, podglądać ich ścieżki na wybraną datę i godzinę oraz planować sesje obserwacji gwiazd za pomocą wbudowanych elementów sterujących czasem i opcji wyświetlania.

### [Dostępność](./accessibility.md) {#accessibility}

Wtyczka Dostępność udostępnia funkcje dostępności urządzenia bezpośrednio w OsmAnd. Tylko dla Androida.  

### [Rozwój OsmAnd](./development.md) {#osmand-development}

Wtyczka deweloperska OsmAnd jest przeznaczona dla programistów i doświadczonych użytkowników. Pozwala na symulowanie tras nawigacyjnych, sprawdzanie wydajności renderowania ekranu itp.  

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker pomaga zobaczyć, gdzie na mapie w OsmAnd znajdują się Twoje kontakty. Tylko dla Androida.  

### [Śledzenie statków AIS](./ais-tracker.md) {#ais-vessel-tracker}

Wyświetlaj pozycje AIS i informacje o otaczających statkach. Dane AIS są odbierane przez sieć z zewnętrznego odbiornika AIS.

## [Utwórz własną wtyczkę](./custom.md) {#create-a-custom-plugin}

Możesz stworzyć własną wtyczkę, postępując zgodnie z artykułem *Pakiet niestandardowy*.


_______