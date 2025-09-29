---
source-hash: 6cae344524caaf33fb94aa4a15419e9183e99c9b4fa757ffe87fe4fa9acb30b3
sidebar_position: 2
title:  Pobieranie map
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

Przesyłanie map do aplikacji OsmAnd jest kluczowym krokiem zapewniającym płynne działanie i korzystanie z nawigacji offline. Bez map offline aplikacja nie może w pełni funkcjonować. Pobieranie map daje dostęp do map różnych regionów, umożliwiając nawigację bez połączenia z Internetem.  

Masz dwie *główne* metody pobierania map: **1)** zacznij od [początkowego ekranu konfiguracji](#initial-setup-screen) lub [wyświetl listę regionów w *Menu głównym*](#maps-and-resources), lub **2)** [wybierz wymagany region bezpośrednio na mapie](#select-on-the-map). Daje to elastyczność w wyborze regionów i zapewnia, że mapy będą pasować do Twoich planów.  

Chociaż OsmAnd obsługuje zarówno mapy [wektorowe](../map/vector-maps.md), jak i [rastrowe](../map/raster-maps.md), zaleca się rozpoczęcie pracy z mapami wektorowymi w trybie offline. Ten typ mapy (więcej o [typach map OsmAnd](../personal/maps-resources.md#map-types) przeczytasz tutaj) zapewnia niezawodne działanie wszystkich kluczowych funkcji aplikacji, w tym [wyszukiwania](../search/index.md), [nawigacji](../navigation/index.md) i [menu kontekstowego](../map/map-context-menu.md). Jest to szczególnie ważne, jeśli Twoje podróże obejmują wyjazdy do odległych miejsc lub miejsc z ograniczonym dostępem do Internetu.


## Początkowy ekran konfiguracji {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pobieranie mapy Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pobieranie mapy iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Po pierwszym uruchomieniu aplikacji zostaniesz poproszony o pobranie mapy dostosowanej do Twojej bieżącej lokalizacji, określonej na podstawie połączenia z Internetem. Ten krok jest opcjonalny i pozwala pominąć pobieranie i przejść bezpośrednio do interfejsu map lokalnych dla Twojego regionu.  

Jeśli korzystasz z VPN, OsmAnd może zasugerować mapę na podstawie wirtualnej lokalizacji VPN. W takich przypadkach możesz ręcznie wybrać mapę, która lepiej pasuje do Twojego rzeczywistego regionu geograficznego.  


### Menu z trzema kropkami {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pobieranie mapy Android](@site/static/img/steps/start_screen_first_screen_location_andr.png)   ![Pobieranie mapy iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pobieranie mapy Android](@site/static/img/steps/start_screen_first_screen_location_ios.png)   ![Pobieranie mapy iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Menu lokalizacji:**

- *Wybierz inny region.* Otwiera menu [Pobierz mapy](#maps-and-resources).
- *Pozwól nam określić Twoją lokalizację.* [Prosi o pozwolenie](../start-with/first-steps.md#permission-to-access-the-location) na dostęp do lokalizacji i znalezienie wymaganej mapy na podstawie tych danych.

**Inne menu:**

- *Przywróć z OsmAnd Cloud.* Otwiera główny ekran [OsmAnd Cloud](../personal/osmand-cloud.md) lub ekran logowania. Jest to przydatne, jeśli ponownie zainstalowałeś aplikację lub chcesz przywrócić poprzednie ustawienia użytkownika bez ponownego wybierania regionów i ustawień.
- *Przywróć z pliku.* Otwiera menedżer plików urządzenia, aby wybrać i zaimportować plik `.osf`.  


## Mapy i zasoby {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Ogólne menu pobierania map Android](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Ogólne menu pobierania map iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Ekran [Mapy i zasoby](../personal/maps-resources.md) zapewnia dostęp do następujących sekcji:

- [Pobrane](../personal/maps-resources.md#downloads). Oferuje kompleksowy wybór [typów map OsmAnd](../personal/maps-resources.md#map-types).
- [Lokalne](../personal/maps-resources.md#local). Wyświetla wszystkie dane map przechowywane obecnie na urządzeniu, w tym zasoby niestandardowe i importowane.
- [Aktualizacje](../personal/maps-resources.md#updates). Umożliwia comiesięczne odświeżanie map w celu aktualizacji danych.

### Pobieranie map {#downloading-maps}

Aby pobrać określony typ mapy dla kraju lub regionu:

- Przejdź do folderu wymaganego regionu, takiego jak Afryka, Europa lub inny kontynent.
- Wybierz z listy preferowany kraj lub region.
- Na następnym ekranie przejrzyj i wybierz dostępne typy map dla tego obszaru.

Informacje o innych typach map można znaleźć w sekcji [Pobrane](../personal/maps-resources.md#downloads) artykułu **Mapy**.

## Opcje mapy świata {#world-map-options}

OsmAnd zawiera dwie opcje mapy świata:  

1. **Mini mapa świata** (zainstalowana fabrycznie). Lekka mapa, która umożliwia podstawową nawigację i zapewnia przegląd świata.  
2. **Szczegółowa mapa świata** (do pobrania). Globalna mapa zawierająca główne miasta, drogi, rzeki i inne cechy geograficzne.

***Ważne uwagi:***

- **Szczegółowa mapa świata nie zastępuje map poszczególnych krajów ani regionów.** Jest przydatna do przeglądu, ale nie zawiera takiego samego poziomu szczegółowości jak mapy regionalne.  
- Jeśli potrzebujesz szczegółowej nawigacji, **pobierz ręcznie mapy poszczególnych krajów lub regionów** za pomocą *Menu → Mapy i zasoby → Pobierz mapy.*
- Użytkownicy z **OsmAnd Pro lub Maps+** mogą pobrać **nieograniczoną liczbę map**, ale nadal muszą pobierać każdy region osobno.  
- **Nie ma jednej opcji pobrania wszystkich map świata naraz.**


## Wybierz na mapie {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Krótkie dotknięcie mapy świata pozwala pobrać mapę regionu](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Krótkie dotknięcie mapy świata pozwala pobrać mapę regionu](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Jednym ze sposobów pobrania mapy jest pomniejszenie mapy świata i krótkie dotknięcie w celu wybrania regionu do pobrania. Obszar ten zostanie podświetlony na żółto, a na dole pojawi się panel z nazwą regionu i sugestią pobrania go lub wybrania innych map.  

:::tip Kolor mapy  
Na małym ekranie mapa wybrana do pobrania zostanie podświetlona na żółto, mapy, które zostały już pobrane, zostaną podświetlone na zielono, a mapy dezaktywowane zostaną podświetlone na pomarańczowo. **Dezaktywowane** mapy są pomijane w celu przyspieszenia działania programu w przypadku dużej liczby załadowanych map.
:::

## Wyszukiwanie {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funkcja wyszukiwania do pobrania mapy Android](@site/static/img/settings/search_download_map_3_andr.png) ![Funkcja wyszukiwania do pobrania mapy Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Funkcja wyszukiwania do pobrania mapy iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Funkcja wyszukiwania do pobrania mapy iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

Wyszukiwanie ułatwia znalezienie określonej mapy lub regionu, zapewniając wygodny i szybki sposób pobierania potrzebnych danych. Mapę można znaleźć i pobrać za pomocą [funkcji wyszukiwania](../search/index.md).

- Rozpocznij wyszukiwanie, wpisując nazwę kraju lub regionu w polu wyszukiwania. Następnie wybierz wymaganą mapę z wyświetlonej listy.
- Mapy dostępne do pobrania są wyświetlane na szaro z ikoną pobierania, pobrane mapy mają zielony kolor i przycisk menu.
- Dotknij nazwy wymaganego wyniku, a otworzy się lista map dla całego regionu.
- Wybierz [typy map](../personal/maps-resources.md#map-types): *Mapa standardowa, Mapa tylko z drogami, Linie konturowe, Wikipedia*.