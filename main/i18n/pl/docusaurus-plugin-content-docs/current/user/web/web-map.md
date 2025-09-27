---
source-hash: d91382fd90471c35f09518fffca8df6e01494de94a597a6b8006d0c7f62c249d
sidebar_position: 3
sidebar_label: Mapa
title: Globalna mapa na stronie internetowej
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


<InfoIncompleteArticle/>

:::info
Strona *[osmand.net/map](https://osmand.net/map/)* jest obecnie w fazie rozwoju i testów.  
**Dlatego układ i działanie niektórych funkcji na stronie mogą różnić się od opisanych w tym artykule.**

Stworzyliśmy [Wątek dyskusyjny](https://github.com/osmandapp/OsmAnd/discussions/16567) na naszym GitHubie, gdzie można zostawiać opinie.
:::


## Przegląd {#overview}

Mapa internetowa OsmAnd to globalna mapa oparta na danych [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Umożliwia użytkownikom przeglądanie własnych danych, takich jak trasy i ulubione, tworzenie tras nawigacyjnych dla dowolnego profilu oraz dostęp do dodatkowych funkcji, takich jak pogoda, publiczne trasy GPX, POI i obrazy z Wikimedii. Przeglądaj i dostosowuj swoje dane bezpośrednio w przeglądarce.

![OsmAnd Web wszystko](@site/static/img/web/web_map_all.png)


## Menu kontekstowe mapy {#map-context-menu}

Aby je otworzyć, kliknij prawym przyciskiem myszy w dowolnym miejscu na mapie. Menu to zawiera następujące działania:

- **Gdzie jestem** – Szybko znajdź swoją bieżącą lokalizację na mapie. Ta funkcja wyświetla najbliższe adresy do wybranego punktu na mapie.
- **Otwórz pogodę** – Uzyskaj dostęp do [menu Pogoda](#weather-on-the-web), aby wyświetlić szczegóły pogody.
- **Utwórz nową trasę** – Otwiera narzędzie [*Planowanie trasy*](../web/planner.md#navigation-route) z wybraną lokalizacją jako punktem początkowym lub docelowym.
- **Dodaj ulubione** – Umożliwia utworzenie i zapisanie [ulubionego](../web/web-userdata.mdx#add--edit-favorite) w dowolnym punkto na mapie w celu łatwego dostępu.
- **Trasa z** – Ustawia wybrany punkt jako [lokalizację początkową](../web/planner.md#navigation-route) dla nawigacji.
- **Trasa do** – Ustawia wybrany punkt jako [cel nawigacji](../web/planner.md#navigation-route).
- **Kopiuj współrzędne** – Kopiuje współrzędne wybranego punktu do użytku zewnętrznego.
- **Dodaj pinezkę** – Umieszcza pinezkę w celu oznaczenia lokalizacji na mapie. ([Przykład](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Pokaż regiony** – Wyświetla regiony powiązane z wybraną lokalizacją.

![Menu kontekstowe mapy](@site/static/img/web/map_context_menu.png)


## Pogoda w wersji internetowej {#weather-on-the-web}

OsmAnd Web dostarcza informacje o pogodzie z dwóch źródeł prognoz:

- **GFS (domyślnie)**  
- **ECMWF**  

Aby przełączać się między tymi źródłami prognoz, kliknij **przycisk parasola** w menu Pogoda.

***Funkcje menu pogody:***  

- **Aktualne dane pogodowe**: Wyświetla współrzędne wraz z następującymi danymi:

  - Temperatura.
  - Opady.
  - Wiatr.
  - Ciśnienie powietrza.
  - Zachmurzenie.

- **Dostosowanie czasu**: Zmodyfikuj datę i godzinę za pomocą **narzędzia czasu** w menu Pogoda, aby wyświetlić pogodę dla określonego momentu.

***Warstwy pogodowe na mapie:***  

- Użyj **przycisku warstw**, aby wybrać i włączyć warstwy pogodowe, takie jak:

  - Temperatura.
  - Ciśnienie.
  - Wiatr.
  - Zachmurzenie.
  - Opady.

***Przeglądanie prognoz:***  

- Prognozy pogody są dostępne na **7 dni**.
- Aktualizacje prognoz są dostarczane w **3-godzinnych odstępach**, co zapewnia szczegółowe informacje.

Aby uzyskać dostęp do tych funkcji lub je dostosować, użyj menu po lewej lub prawej stronie interfejsu.

  ![Pogoda w OsmAnd Web](@site/static/img/web/web_weather.png)

***Prognoza 7-dniowa***:  

Kliknij dane prognozy w menu, aby wyświetlić **prognozę 7-dniową** dla swojej lokalizacji. Prognoza jest dostępna w:

- **formacie wykresu**  
- **formacie listy**

  ![Pogoda w OsmAnd Web](@site/static/img/web/web_7day.png)


## Menu Konfiguruj mapę {#configure-map-menu}

Menu Konfiguruj mapę umożliwia zarządzanie ustawieniami wyświetlania danych mapy, takich jak warstwy POI, ulubione, trasy i rzeźba terenu. Aby korzystać z tej sekcji menu, zaloguj się na swoje konto OsmAnd.

Aby otworzyć to menu, kliknij przycisk w **lewym górnym rogu** lub uzyskaj do niego dostęp poprzez **Menu**.

- [Nakładka POI...](#poi-overlay-section). Umożliwia wybór i wyświetlanie na mapie potrzebnych kategorii POI.
- [Ulubione](#favorites-section). Przełączanie wyświetlania ulubionych na mapie.
- [Trasy](#tracks-section). Zawiera trasy GPX widoczne na mapie.  
- [Teren](#terrain-section). Włącz lub wyłącz schemat kolorów terenu na mapie.

![Menu POI](@site/static/img/web/configure_map_web.png)


### Sekcja Nakładka POI {#poi-overlay-section}

Aby wyświetlić POI na mapie:

*Menu Konfiguruj mapę → Nakładka POI...*. Tutaj możesz wybrać kategorie do wyświetlenia na mapie.

Alternatywnie możesz użyć [**sekcji Wyszukaj**](web-search.md), aby znaleźć żądane miejsce.

![Menu POI](@site/static/img/web/poi_menu.png)


### Sekcja Ulubione {#favorites-section}

Jednym kliknięciem można włączyć lub wyłączyć ulubione na mapie. Wyświetlane będą jednak tylko ulubione z włączoną opcją [**Pokaż na mapie**](../web/web-userdata.mdx#favorites-on-the-web).


### Sekcja Trasy {#tracks-section}

Ta sekcja zawiera listę [**tras GPX widocznych na mapie**](../web/web-userdata.mdx#visible-on-the-map) oraz trasy **Ostatnio widoczne**.

- Możesz bezpośrednio włączać i wyłączać trasy.  
- Włączaj lub wyłączaj trasy z listy **Ostatnio widoczne**.  

Każda trasa ma **Menu kontekstowe** (dostępne za pomocą przycisku ⋮) z następującymi poleceniami:

- **Ukryj trasę**: Ukrywa aktualnie widoczną trasę na mapie.  
- **Uczyń trasę widoczną**: Wyświetla trasę z listy Ostatnio widoczne na mapie.  
- **Zmień nazwę**: Umożliwia zmianę nazwy trasy w celu łatwiejszej identyfikacji.  
- **Duplikuj**: Tworzy kopię trasy.  
- **Pobierz**: Zapisuje trasę na urządzeniu lokalnym.  
- **Usuń**: Trwale usuwa trasę z listy.

![Menu Konfiguruj mapę Trasy](@site/static/img/web/configure_map_track.png)


### Sekcja Teren {#terrain-section}

Sekcja **Teren** jest funkcją płatną <ProFeature/>. Aby korzystać z tej funkcji, musisz najpierw zalogować się na swoje konto OsmAnd Pro.

W tej sekcji możesz:

- Wybrać **schemat kolorów** dla terenu:
  - **Cieniowanie wzgórz**
  - **Nachylenie**
  - **Wysokość**
- Dostosować widoczność wybranej warstwy terenu od **0% do 100%**.

![Menu Konfiguruj mapę Teren](@site/static/img/web/configure_map_terrain.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## Schematy URL {#url-schemes}

Aby ułatwić korzystanie z serwisu internetowego (i aplikacji) OsmAnd, można skorzystać z bezpośrednich linków. Są to specjalne adresy URL, które umożliwiają przesyłanie danych o lokalizacji i zawierają szczegółowe informacje o pinezkach, trasach, pogodzie i nie tylko.

Te adresy URL można kopiować i udostępniać za pomocą dowolnego nośnika obsługiwanego przez urządzenie i są one zgodne zarówno z wersją OsmAnd na Androida, jak i iOS.

1. **URL z pinezką na mapie:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![Tworzenie trasy w OsmAnd Web](@site/static/img/plan-route/web_url_pin.png)

2. **URL bez pinezki na mapie:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![Tworzenie trasy w OsmAnd Web](@site/static/img/plan-route/web_url_without.png)

3. **URL z nawigacją:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![Tworzenie trasy w OsmAnd Web](@site/static/img/plan-route/web_url_track.png)

W zależności od określonych parametrów, ciągi URL mogą zawierać:

- **latitude**: wartość szerokości geograficznej jako liczba.  
- **longitude**: wartość długości geograficznej jako liczba.  
- **start-finish**: współrzędne do nawigacji.  
- **profile**: profil nawigacji (np. samochód, rower).  
- **zoom**: poziom powiększenia.

4. **Pogoda**&nbsp; – &nbsp;`osmand.net/map/weather`

***Na przykład***, można uzyskać bezpośredni dostęp do strony pogody z określonymi współrzędnymi:  
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Konto**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Konfiguruj mapę**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Trasy**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Ulubione**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Ustawienia**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Planowanie trasy**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Bezpośredni link do bieżącej [**strony Eksploruj**](https://osmand.net/docs/user/web/web-search#explore)&nbsp; - &nbsp;`osmand.net/map/search`