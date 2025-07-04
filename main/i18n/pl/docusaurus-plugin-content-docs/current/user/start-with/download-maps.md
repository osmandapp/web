---
source-hash: b74e034d907048857594823cf149189c003eb875c25da16719cff9a3addc6202
sidebar_position: 2
title: Pobieranie map
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

Przesyłanie map do aplikacji OsmAnd jest kluczowym krokiem do zapewnienia płynnego działania i korzystania z nawigacji offline. Bez map offline aplikacja nie może w pełni funkcjonować. Pobieranie map zapewnia dostęp do map różnych regionów, umożliwiając nawigację bez połączenia z Internetem.

Istnieją dwa *główne* sposoby pobierania map: **1)** [wyświetlenie listy regionów w *Menu głównym*](#maps-and-resources) lub **2)** [wybranie wymaganego regionu bezpośrednio na mapie](#select-on-the-map). Daje to elastyczność w wyborze żądanych regionów i zapewnia, że mapy będą pasować do Twoich planów.

Chociaż OsmAnd obsługuje zarówno [mapy wektorowe](../map/vector-maps.md), jak i [rastrowe](../map/raster-maps.md), zaleca się rozpoczęcie pracy z mapami wektorowymi offline. Ten typ mapy (więcej o [typach map OsmAnd](../personal/maps-resources.md#map-types) przeczytasz tutaj) zapewnia niezawodne działanie wszystkich kluczowych funkcji aplikacji, w tym [Wyszukiwania](../search/index.md), [Nawigacji](../navigation/index.md) i [Menu kontekstowego](../map/map-context-menu.md). Jest to szczególnie ważne, jeśli Twoje podróże obejmują wyjazdy do odległych miejsc lub miejsc z ograniczonym dostępem do Internetu.

## Pobieranie {#download}

Rozpocznij ładowanie map z [ekranu początkowej konfiguracji](#initial-setup-screen) lub przejdź do głównego *menu bocznego* *→* [Mapy i zasoby](#maps-and-resources) i wybierz wymagane mapy z ogólnej listy, lub [wybierz region](#select-on-the-map) bezpośrednio na mapie, dotykając potrzebnego regionu.

### Ekran początkowej konfiguracji {#initial-setup-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Pobieranie mapy Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pobieranie mapy iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Po pierwszym uruchomieniu aplikacji zostaniesz poproszony o pobranie mapy dostosowanej do Twojej bieżącej lokalizacji, określonej przez połączenie internetowe. Ten krok jest opcjonalny, co pozwala pominąć pobieranie i przejść bezpośrednio do interfejsu map lokalnych dla Twojego regionu.

Jeśli używasz VPN, OsmAnd może zasugerować mapę opartą na wirtualnej lokalizacji VPN. W takich przypadkach możesz ręcznie wybrać mapę, która lepiej odpowiada Twojemu rzeczywistemu regionowi geograficznemu.

#### Menu z trzema kropkami {#three-dot-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Pobieranie mapy Android](@site/static/img/steps/start_screen_first_screen_location_andr.png) ![Pobieranie mapy iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pobieranie mapy Android](@site/static/img/steps/start_screen_first_screen_location_ios.png) ![Pobieranie mapy iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Menu lokalizacji:**

- *Wybierz inny region.* Otwiera menu [Pobierz mapy](#maps-and-resources).
- *Pozwól nam określić Twoją lokalizację.* [Żąda pozwolenia](../start-with/first-steps.md#permission-to-access-the-location) na dostęp do lokalizacji i znalezienie wymaganej mapy za pomocą tych danych.

**Inne menu:**

- *Przywróć z OsmAnd Cloud.* Otwiera główny ekran [OsmAnd Cloud](../personal/osmand-cloud.md) lub ekran logowania. Jest to przydatne, jeśli ponownie zainstalowałeś aplikację lub chcesz przywrócić poprzednie ustawienia użytkownika bez ponownego wybierania regionów i ustawień.
- *Przywróć z pliku.* Otwiera menedżer plików urządzenia, aby wybrać i zaimportować plik `.osf`.

### Mapy i zasoby {#maps-and-resources}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Pobieranie mapy menu ogólne Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Pobieranie mapy menu ogólne iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Ekran [Mapy i zasoby](../personal/maps-resources.md) zapewnia dostęp do następujących sekcji:

- [Pobrane](../personal/maps-resources.md#downloads). Oferuje kompleksowy wybór [typów map OsmAnd](../personal/maps-resources.md#map-types).
- [Lokalne](../personal/maps-resources.md#local). Wyświetla wszystkie dane map aktualnie przechowywane na Twoim urządzeniu, w tym zasoby niestandardowe i importowane.
- [Aktualizacje](../personal/maps-resources.md#updates). Umożliwia comiesięczne odświeżanie map, aby Twoje dane były aktualne.

#### Pobieranie map {#downloading-maps}

Aby pobrać określony typ mapy dla kraju lub regionu:

- Przejdź do folderu dla wymaganego regionu, takiego jak Afryka, Europa lub inny kontynent.
- Wybierz preferowany kraj lub region z listy.
- Na następnym ekranie przejrzyj i wybierz spośród dostępnych typów map dla tego obszaru.

Informacje o innych typach map można znaleźć w sekcji [Pobrane](../personal/maps-resources.md#downloads) artykułu **Mapy**.

### Opcje mapy świata {#world-map-options}

OsmAnd zawiera dwie opcje mapy świata:

1. **Mini mapa świata** (preinstalowana). Lekka mapa, która umożliwia podstawową nawigację i zapewnia ogólny przegląd świata.
2. **Szczegółowa mapa świata** (do pobrania). Globalna mapa przedstawiająca główne miasta, drogi, rzeki i inne cechy geograficzne.

***Ważne uwagi:***

- **Szczegółowa mapa świata nie zastępuje pojedynczych map krajów ani regionów.** Jest przydatna do ogólnego przeglądu, ale nie zawiera takiego samego poziomu szczegółowości jak mapy regionalne.
- Jeśli potrzebujesz szczegółowej nawigacji, **pobierz konkretne mapy krajów lub regionów ręcznie** poprzez *Menu → Mapy i zasoby → Pobierz mapy.*
- Użytkownicy z **OsmAnd Pro lub Maps+** mogą pobierać **nieograniczoną liczbę map**, ale nadal muszą pobierać każdy region osobno.
- **Nie ma jednej opcji, aby pobrać wszystkie mapy świata jednocześnie.**

### Wybierz na mapie {#select-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Krótkie dotknięcie mapy świata pozwala pobrać mapę regionu](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Krótkie dotknięcie mapy świata pozwala pobrać mapę regionu](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Jednym ze sposobów pobrania mapy jest oddalenie widoku na mapie świata i krótkie dotknięcie, aby wybrać region do pobrania. Obszar ten zostanie podświetlony na żółto, a na dole pojawi się panel z nazwą regionu i sugestią pobrania go lub wybrania innych map.

:::tip Kolor mapy
Na małym ekranie mapa wybrana do pobrania zostanie podświetlona na żółto, mapy, które zostały już pobrane, zostaną podświetlone na zielono, a dezaktywowane mapy zostaną podświetlone na pomarańczowo. Mapy **dezaktywowane** są pomijane, aby przyspieszyć działanie programu w przypadku, gdy masz dużo załadowanych map.
:::

### Wyszukiwanie {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Funkcja wyszukiwania do pobierania mapy Android](@site/static/img/settings/search_download_map_3_andr.png) ![Funkcja wyszukiwania do pobierania mapy Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Funkcja wyszukiwania do pobierania mapy iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Funkcja wyszukiwania do pobierania mapy iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

Wyszukiwanie ułatwia znalezienie konkretnej mapy lub regionu, zapewniając wygodny i szybki sposób pobierania potrzebnych danych. Mapę można znaleźć i pobrać za pomocą [funkcji wyszukiwania](../search/index.md).

- Rozpocznij wyszukiwanie, wpisując nazwę kraju lub regionu w polu wyszukiwania. Następnie wybierz wymaganą mapę z wyświetlonej listy.
- Mapy dostępne do pobrania są wyświetlane na szaro z ikoną pobierania, pobrane mapy mają zielony kolor i przycisk menu.
- Dotknij nazwy wymaganego wyniku, a otworzy się lista map regionalnych.
- Wybierz [typy map](../personal/maps-resources.md#map-types): *Mapa standardowa, Mapa tylko z drogami, Linie konturowe, Wikipedia*.

> *Ostatnia aktualizacja: styczeń 2025*