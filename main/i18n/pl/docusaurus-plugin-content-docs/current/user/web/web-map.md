---
source-hash: bdb9eac116a28f1d5dfc284cdfe30f108124a7c87fbf05c077f70e32504f6445
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

<!--
<InfoIncompleteArticle/>


:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::
-->


## Przegląd {#overview}

Mapa internetowa OsmAnd to globalna mapa oparta na danych [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Umożliwia użytkownikom przeglądanie własnych danych, takich jak ścieżki i ulubione, tworzenie tras nawigacyjnych dla dowolnego profilu oraz dostęp do dodatkowych funkcji, takich jak pogoda, publiczne ścieżki GPX, POI i obrazy z Wikimedii. Przeglądaj i dostosowuj doświadczenie ze swoimi danymi bezpośrednio w przeglądarce.

![OsmAnd Web wszystko](@site/static/img/web/web_map_all.png)


## Menu kontekstowe mapy {#map-context-menu}

Aby je otworzyć, kliknij prawym przyciskiem myszy w dowolnym miejscu na mapie. Menu to zawiera następujące działania:

- **Gdzie jestem** – Szybko znajdź swoją bieżącą lokalizację na mapie. Ta funkcja wyświetla najbliższe adresy do wybranego punktu na mapie.
- **Otwórz pogodę** – Uzyskaj dostęp do [menu Pogoda](#weather-on-the-web), aby wyświetlić szczegóły pogody.
- **Utwórz nową trasę** – Otwiera narzędzie [*Plan a route* tool](../web/planner.md#navigation-route) z wybraną lokalizacją jako punktem początkowym lub docelowym.
- **Dodaj ulubione** –  Umożliwia utworzenie i zapisanie [ulubionego](../web/web-favorites.md#add--edit-favorite) w dowolnym punkcie na mapie w celu łatwego dostępu.
- **Trasa z** –  Ustawia wybrany punkt jako [lokalizację początkową](../web/planner.md#navigation-route) dla nawigacji.
- **Trasa do** – Ustawia wybrany punkt jako [cel nawigacji](../web/planner.md#navigation-route).
- **Kopiuj współrzędne** – Kopiuje współrzędne wybranego punktu do użytku zewnętrznego.
- **Pokaż regiony** – Wyświetla regiony powiązane z wybraną lokalizacją.

<!--
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))

![Map Context menu](@site/static/img/web/map_context_menu.png)

Add pin option will be added back once it becomes available again.
-->

![Menu kontekstowe mapy](@site/static/img/web/map_context_menu_new.png)


## Menu Konfiguruj mapę {#configure-map-menu}

Menu Konfiguruj mapę umożliwia zarządzanie ustawieniami wyświetlania danych mapy, takich jak warstwy POI, ulubione, ścieżki i rzeźba terenu. To menu jest dostępne po zalogowaniu się na konto OsmAnd. Aby je otworzyć, kliknij przycisk w **lewym górnym rogu** lub uzyskaj dostęp przez **Menu**.

- [Nakładka POI...](#poi-overlay). Umożliwia wybór i wyświetlanie potrzebnych kategorii POI na mapie.
- [Ulubione](#favorites). Przełączanie wyświetlania ulubionych na mapie.
- [Ścieżki](#tracks). Zawiera ścieżki GPX widoczne na mapie.  
- [Teren](#terrain). Włącz lub wyłącz schemat kolorów terenu na mapie.

![Menu POI](@site/static/img/web/configure_map_web.png)


### Nakładka POI {#poi-overlay}

Funkcja nakładki POI umożliwia wyświetlanie punktów zainteresowania (POI) na mapie według wybranych kategorii. Jest to przydatne, gdy chcesz przeglądać miejsca bezpośrednio na mapie.

Aby otworzyć nakładkę: *Menu Konfiguruj mapę → Nakładka POI*...Lista nakładek zawiera 18 kategorii. Możesz włączyć jedną kategorię lub wiele kategorii w dowolnej kombinacji. Gdy co najmniej jedna kategoria jest włączona, nakładka zapewnia działanie **Odznacz wszystko**, aby wyczyścić zaznaczenie naraz.

**Uwaga:** Jeśli szukasz konkretnego miejsca, możesz również użyć [**sekcji Wyszukaj**](web-search.md) na mapie.

Gdy POI są wyświetlane, wybranie znacznika POI na mapie otwiera panel szczegółów, który pokazuje informacje dostępne dla tego obiektu. W zależności od POI, może zawierać: nazwę miejsca i typ, adres, pola kontaktowe, identyfikatory związane z OSM i współrzędne, linki referencyjne (Wikipedia, Wikidata), gdy są dostępne. 

Dla POI z zdjęciami online, panel szczegółów pokazuje blok Zdjęcia online z miniaturkami. Pokaż wszystkie otwiera widok galerii z pełną listą zdjęć. W przeglądarce zdjęć OsmAnd Web wyświetla metadane zdjęcia, gdy są dostępne, w tym: datę, autora, licencję i opis.

W panelu szczegółów POI dostępne są szybkie działania z przycisków akcji:
- *Dodaj do ulubionych* — zapisuje POI do twoich Ulubionych.
- *Udostępnij* — generuje udostępnialny link, który otwiera POI bezpośrednio w OsmAnd Web. Link zawiera nazwę POI, typ i współrzędne (pinezka).
- *Trasa z* — ustawia wybrany POI jako punkt startowy i otwiera panel Trasy, abyś mógł wybrać cel i profil.
- *Nawigacja* — ustawia wybrany POI jako punkt docelowy nawigacji.

![Menu kategorii POI](@site/static/img/web/poi_categories.png) ![Zdjęcia POI w menu](@site/static/img/web/poi_photo_new.png)


### Ulubione {#favorites}

Z jednym kliknięciem możesz przełączać ulubione włączone lub wyłączone na mapie. Jednak wyświetlane będą tylko ulubione z włączoną opcją [**Pokaż na mapie**](../web/web-favorites.md#manage-favorites).


### Ścieżki {#tracks}

Ta sekcja zawiera listę twoich [**ścieżek GPX widocznych na mapie**](../web/web-tracks.md#visible-on-the-map) oraz **Ostatnio widoczne** ścieżki.

- Możesz bezpośrednio włączać i wyłączać ścieżki.  
- Włączaj lub wyłączaj ścieżki z listy **Ostatnio widoczne**.  

Każda ścieżka ma **Menu kontekstowe** (dostępne za pomocą przycisku ⋮) z następującymi poleceniami:

- **Ukryj ścieżkę**: Ukrywa aktualnie widoczną ścieżkę na mapie.  
- **Uczyń ścieżkę widoczną**: Wyświetla ścieżkę z listy Ostatnio widoczne na mapie.  
- **Zmień nazwę**: Umożliwia zmianę nazwy ścieżki w celu łatwiejszej identyfikacji.  
- **Duplikuj**: Tworzy kopię ścieżki.  
- **Pobierz**: Zapisuje ścieżkę na urządzeniu lokalnym.  
- **Usuń**: Trwale usuwa ścieżkę z listy.

![Menu Konfiguruj mapę Ścieżki](@site/static/img/web/configure_map_track.png)


### Teren {#terrain}

Sekcja **Teren** jest funkcją płatną <ProFeature/>. Aby korzystać z tej funkcji, musisz najpierw zalogować się na swoje konto OsmAnd Pro.

W tej sekcji możesz:

- Wybrać **schemat kolorów** dla terenu:
  - **Cieniowanie wzgórz**
  - **Nachylenie**
  - **Wysokość**
- Dostosować widoczność wybranej warstwy terenu od **0% do 100%**.

![Menu Konfiguruj mapę Teren](@site/static/img/web/configure_map_terrain.png)


## Ustawienia {#settings}

W internetowym Planie, ustawienia *Ogólne* (Język wyświetlania, Jednostki długości, Jednostka prędkości) są dostępne dla wszystkich użytkowników, niezależnie od tego, czy jesteś zalogowany, czy nie. Po zalogowaniu się na konto OsmAnd w panelu Ustawień pojawia się dodatkowa sekcja OsmAnd Cloud. Możesz przeczytać o OsmAnd Cloud [tutaj](./web-cloud.md).

### Język {#language}

Aby przełączyć język interfejsu:

*Idź do: Menu → ⚙ Ustawienia → Język wyświetlania*

![Język internetowy](@site/static/img/web/web_language.png)

### Jednostki {#units}

*Idź do: Menu → ⚙ Ustawienia → Jednostki długości*  
*Idź do: Menu → ⚙ Ustawienia → Jednostka prędkości*

Możesz wybrać, które jednostki są używane do wyświetlania odległości, wysokości i prędkości na mapie, w szczegółach trasy i w narzędziach pomiarowych. Pomaga to utrzymać OsmAnd spójny z twoimi zwykłymi nawykami lub standardami regionalnymi.

Opcja **Jednostki długości** określa, jak pokazywana jest pozioma odległość i wysokość:
- Kilometry/metrów.
- Mile/stóp.
- Mile/metrów.
- Mile/jardów.
- Mile morskie/metrów.
- Mile morskie/stóp. 

Na przykład, odległość 10 km będzie pokazana jako około 6,21 mi, jeśli wybierzesz jedną z opcji Mile/..., lub jako około 5,40 mil morskich, gdy wybrana jest Mile morskie/...

Opcja **Jednostka prędkości** kontroluje, jak wyświetlana jest bieżąca prędkość i limity prędkości:
- Kilometry na godzinę.
- Mile na godzinę.
- Metry na sekundę.
- Minuty na milę.
- Minuty na kilometr.
- Mile morskie na godzinę (węzły). 

Na przykład, prędkość 90 km/h odpowiada 25 m/s lub około 55,92 mph.

![Jednostki internetowe](@site/static/img/web/web_units_len.png) ![Jednostki prędkości internetowe](@site/static/img/web/web_units_spe.png)


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

Aby ułatwić korzystanie z serwisu internetowego (i aplikacji) OsmAnd, można skorzystać z bezpośrednich linków. Są to specjalne adresy URL, które umożliwiają przesyłanie danych o lokalizacji i zawierają szczegółowe informacje o pinezkach, ścieżkach, pogodzie i nie tylko.

Te adresy URL można kopiować i udostępniać za pomocą dowolnego nośnika obsługiwanego przez urządzenie i są one zgodne zarówno z wersją OsmAnd na Androida, jak i iOS.

1. **URL z pinezką na mapie:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![Tworzenie ścieżki w OsmAnd Web](@site/static/img/plan-route/web_url_pin.png)

2. **URL bez pinezki na mapie:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![Tworzenie ścieżki w OsmAnd Web](@site/static/img/plan-route/web_url_without.png)

3. **URL z nawigacją:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![Tworzenie ścieżki w OsmAnd Web](@site/static/img/plan-route/web_url_track.png)

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

7. **Ścieżki**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Ulubione**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Ustawienia**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Planuj trasę**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Bezpośredni link do bieżącej [**strony Eksploruj**](https://osmand.net/docs/user/web/web-search#explore)&nbsp; - &nbsp;`osmand.net/map/search`


## Powiązane artykuły {#related-articles}

- [Menu kontekstowe mapy](../map/map-context-menu.md)
- [Konto OsmAnd](./web-cloud.md)
- [Ścieżki](./web-tracks.md)
- [Ulubione](./web-favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)