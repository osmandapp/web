---
source-hash: dde8250578460772829e966968add9c68eaa6a84529c9781ca298152f25ce984
sidebar_position: 3
sidebar_label: Mapa
title: Mapa globalna na stronie internetowej
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
Strona *[osmand.net/map/](https://osmand.net/map/)* jest obecnie w fazie rozwoju i testów.
**Dlatego układ i działanie niektórych funkcji na stronie mogą różnić się od opisanych w tym artykule.**

Utworzyliśmy [wątek dyskusyjny](https://github.com/osmandapp/OsmAnd/discussions/16567) na naszym GitHubie, gdzie można zostawić swoją opinię.
:::


## Przegląd {#overview}

Mapa internetowa OsmAnd to globalna mapa oparta na danych [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Umożliwia użytkownikom przeglądanie własnych danych, takich jak ślady i ulubione miejsca, tworzenie tras nawigacyjnych dla dowolnego profilu oraz dostęp do dodatkowych funkcji, takich jak pogoda, publiczne ślady GPX, POI i obrazy Wikimedia. Przeglądaj i dostosowuj swoje dane bezpośrednio w przeglądarce.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Menu kontekstowe mapy {#map-context-menu}

Aby je otworzyć, kliknij prawym przyciskiem myszy w dowolnym miejscu na mapie. To menu zawiera następujące działania:

- **Gdzie jestem** – Szybko znajdź swoją aktualną lokalizację na mapie. Ta funkcja wyświetla najbliższe adresy do wybranego punktu na mapie.
- **Otwórz pogodę** – Dostęp do [menu Pogoda](#weather-on-the-web) w celu wyświetlenia szczegółów pogody.
- **Utwórz nową trasę** – Otwiera narzędzie [*Planuj trasę*](../web/planner.md#create-track-and-local) z wybraną lokalizacją jako punktem początkowym lub docelowym.
- **Dodaj ulubione** – Umożliwia utworzenie i zapisanie [ulubionego miejsca](../web/web-userdata.mdx#add--edit-favorite) w dowolnym punkcie na mapie dla łatwego dostępu.
- **Wskazówki dojazdu z** – Ustawia wybrany punkt jako [lokalizację początkową](../web/planner.md#navigation-route) dla nawigacji.
- **Wskazówki dojazdu do** – Ustawia wybrany punkt jako [cel nawigacji](../web/planner.md#navigation-route).
- **Kopiuj współrzędne** – Kopiuje współrzędne wybranego punktu do użytku zewnętrznego.
- **Dodaj pinezkę** – Umieszcza pinezkę w celu oznaczenia lokalizacji na mapie. ([Przykład](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Pokaż regiony** – Wyświetla regiony związane z wybraną lokalizacją.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Pogoda w sieci {#weather-on-the-web}

OsmAnd Web dostarcza informacje pogodowe z dwóch źródeł prognoz:

- **GFS (domyślne)**
- **ECMWF**

Aby przełączać się między tymi źródłami prognoz, kliknij **przycisk z parasolką** w menu Pogoda.

***Funkcje menu pogody:***

- **Aktualne dane pogodowe**: Wyświetla Twoje współrzędne wraz z następującymi danymi:

  - Temperatura.
  - Opady.
  - Wiatr.
  - Ciśnienie powietrza.
  - Zachmurzenie.

- **Korekta czasu**: Zmodyfikuj datę i godzinę za pomocą **narzędzia czasu** w menu Pogoda, aby wyświetlić pogodę dla określonego momentu.

***Warstwy pogodowe na mapie:***

- Użyj **przycisku warstw**, aby wybrać i włączyć warstwy pogodowe, takie jak:

  - Temperatura.
  - Ciśnienie.
  - Wiatr.
  - Zachmurzenie.
  - Opady.

***Wyświetlanie prognoz:***

- Prognozy pogody są dostępne na **7 dni** do przodu.
- Aktualizacje prognoz są dostarczane w **3-godzinnych krokach** dla szczegółowych informacji.

Aby uzyskać dostęp do tych funkcji lub je dostosować, użyj menu po lewej lub prawej stronie interfejsu.

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***7-dniowa prognoza***:

Kliknij dane prognozy w menu, aby wyświetlić **7-dniową prognozę** dla Twojej lokalizacji. Prognoza jest dostępna w:

- **Formacie wykresu**
- **Formacie listy**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## Konfiguruj menu mapy {#configure-map-menu}

Menu Konfiguruj mapę pozwala zarządzać ustawieniami wyświetlania danych mapy, takich jak warstwy POI, Ulubione, ślady i teren. Aby korzystać z tej sekcji menu, musisz zalogować się na swoje konto OsmAnd.

Aby otworzyć to menu, kliknij przycisk w **lewym górnym rogu** lub uzyskaj do niego dostęp poprzez **Menu**.

- [Nakładka POI...](#poi-overlay-section). Pozwala wybrać i wyświetlić potrzebne kategorie POI na mapie.
- [Ulubione](#favorites-section). Przełącz wyświetlanie ulubionych na mapie.
- [Ślady](#tracks-section). Zawiera ślady GPX widoczne na mapie.
- [Teren](#terrain-section). Włącz lub wyłącz schemat kolorów terenu na mapie.

![POIs menu](@site/static/img/web/configure_map_web.png)


### Sekcja nakładki POI {#poi-overlay-section}

Aby wyświetlić POI na mapie:

*Konfiguruj menu mapy → Nakładka POI...*. Tutaj możesz wybrać kategorie do wyświetlenia na mapie.

Alternatywnie, możesz użyć [**sekcji Wyszukiwanie**](web-search.md), aby znaleźć żądane miejsce.

![POIs menu](@site/static/img/web/poi_menu.png)


### Sekcja Ulubione {#favorites-section}

Jednym kliknięciem możesz włączać lub wyłączać ulubione na mapie. Jednak wyświetlane będą tylko ulubione z włączoną opcją [**Pokaż na mapie**](../web/web-userdata.mdx##favorites-on-the-web).


### Sekcja śladów {#tracks-section}

Ta sekcja zawiera listę Twoich [**śladów GPX widocznych na mapie**](../web/web-userdata.mdx#visible-on-the-map) oraz śladów **Ostatnio widocznych**.

- Możesz bezpośrednio włączać lub wyłączać ślady.
- Włączać lub wyłączać ślady z listy **Ostatnio widocznych**.

Każdy ślad ma **Menu kontekstowe** (dostępne za pomocą przycisku ⋮) z następującymi poleceniami:

- **Ukryj ślad**: Ukrywa aktualnie widoczny ślad z mapy.
- **Uczyń ślad widocznym**: Wyświetla ślad z listy Ostatnio widocznych na mapie.
- **Zmień nazwę**: Pozwala zmienić nazwę śladu dla łatwiejszej identyfikacji.
- **Duplikuj**: Tworzy kopię śladu.
- **Pobierz**: Zapisuje ślad na Twoim lokalnym urządzeniu.
- **Usuń**: Trwale usuwa ślad z listy.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Sekcja Teren {#terrain-section}

Sekcja **Teren** to płatna funkcja <ProFeature/>. Aby korzystać z tej funkcji, musisz najpierw zalogować się na swoje konto OsmAnd Pro.

W tej sekcji możesz:

- Wybrać **schemat kolorów** dla terenu:
  - **Cieniowanie wzgórz**
  - **Nachylenie**
  - **Wysokość**
- Dostosować widoczność wybranej warstwy terenu od **0% do 100%**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


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

Dla łatwego korzystania z usługi internetowej OsmAnd (i aplikacji), możesz skorzystać z bezpośrednich linków. Są to specjalne adresy URL, które pozwalają na przesyłanie danych lokalizacyjnych i zawierają szczegóły dotyczące pinezek, śladów, pogody i innych.

Te adresy URL mogą być kopiowane i udostępniane za pomocą dowolnego medium obsługiwanego przez Twoje urządzenie i są kompatybilne zarówno z wersjami OsmAnd na Androida, jak i iOS.

1. **URL z pinezką na mapie:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL bez pinezki na mapie:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL z nawigacją:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

W zależności od określonych parametrów, ciągi URL mogą zawierać:

- **latitude**: wartość szerokości geograficznej jako liczba.
- **longitude**: wartość długości geograficznej jako liczba.
- **start-finish**: współrzędne dla nawigacji.
- **profile**: profil nawigacji (np. samochód, rower).
- **zoom**: poziom powiększenia.

4. **Pogoda**&nbsp; – &nbsp;`osmand.net/map/weather`

***Na przykład***, możesz bezpośrednio uzyskać dostęp do strony pogodowej z określonymi współrzędnymi:
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Konto**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Konfiguruj mapę**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Ślady**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Ulubione**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Ustawienia**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Planuj trasę**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Bezpośredni link do bieżącej [**strony Eksploruj**](https://osmand.net/docs/user/web/web-search#explore)&nbsp; - &nbsp;`osmand.net/map/search`


> *Ostatnia aktualizacja: styczeń 2025*