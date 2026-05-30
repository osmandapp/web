---
source-hash: e8f044473acdc81152b6ac5081df28b86a07fd654cf5ea4de38da7f569d022b7
sidebar_position: 10
sidebar_label:  Wyszukiwanie
title: Wyszukiwanie na stronie internetowej
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
-->


## Przegląd {#overview}

**Menu Wyszukiwania** można otworzyć z panelu bocznego lub z ikony wyszukiwania 🔍 na mapie. Zawiera ono:

- [Pasek wyszukiwania](#search-bar). Wprowadź słowa kluczowe, aby wyszukać określone lokalizacje lub punkty POI.  
- [Sekcja Kategorie](#categories). Przeglądaj opcje podzielone na kategorie, aby ułatwić wyszukiwanie POI.  
- [Sekcja Odkrywaj](#explore). Wyświetlaj popularne POI dla bieżącego centrum mapy i odkrywaj miejsca ze zdjęciami na mapie.

![Search menu](@site/static/img/web/search.png)

## Opcje wyszukiwania {#search-options}

### Pasek wyszukiwania {#search-bar}

Użyj **paska wyszukiwania**, aby znaleźć określone miejsca lub punkty POI po nazwie. Kliknij ikonę wyszukiwania, wprowadź zapytanie i wybierz wynik z listy. Wybranie POI otwiera [menu kontekstowe POI](#poi-context-menu), w którym możesz wyświetlić szczegóły i użyć szybkich akcji.

Jeśli wyszukujesz według nazwy kategorii, pierwszy wynik może pokazać odpowiadającą kategorię POI. Kliknij kategorię, aby otworzyć widok [wyszukiwania w kategoriach](#categories).

![Search Options](@site/static/img/web/search_bar.png)

### Kategorie {#categories}

Użyj **Kategorii**, aby przeglądać POI według typu i wyświetlać je na mapie. Menu pokazuje sześć popularnych kategorii dla szybkiego dostępu. Jeśli potrzebujesz więcej opcji, kliknij Pokaż wszystko, aby otworzyć pełną listę 18 dostępnych kategorii. Wybranie kategorii wyświetla pasujące POI na mapie; wybranie POI otwiera [menu kontekstowe POI](#poi-context-menu).

![Search Options](@site/static/img/web/search_categories.png)

### Odkrywaj {#explore}

Sekcja **Odkrywaj** pokazuje [popularne miejsca](https://osmand.net/docs/user/map/popular_places) ze zdjęciami bezpośrednio na mapie. Tworzy listę POI dla bieżącego centrum mapy (posortowaną według popularności) i wyświetla te same miejsca jako znaczniki ze zdjęciami na mapie. Podgląd obrazów i informacje POI oparte są na Wikidata/Wikimedia i powiązanych źródłach, jeśli są dostępne.

Otwórz kartę Wyszukiwania, aby uzyskać dostęp do Odkrywaj — wyniki Odkrywaj są wyświetlane na mapie automatycznie. Użyj Pokaż wszystko, aby otworzyć pełną listę kategorii Odkrywaj. Możesz udoskonalić to, co pojawia się na liście i na mapie, używając Filtr, który otwiera menu kategorii Odkrywaj. Wybranie POI z listy lub na mapie otwiera [menu kontekstowe POI](#poi-context-menu).

![Search Options](@site/static/img/web/search_explore.png) ![Search Options](@site/static/img/web/explore_filters.png)

## Menu kontekstowe POI {#poi-context-menu}

Bez względu na to, którą opcję wyszukiwania użyjesz (Pasek wyszukiwania, Kategorie lub Odkrywaj), wybranie POI na mapie lub na liście wyników otwiera menu kontekstowe POI. Menu kontekstowe to główne miejsce do wyświetlania informacji o POI i wykonywania typowych akcji. Łączy ono szczegóły POI (takie jak lokalizacja i powiązane dane) z szybkimi akcjami (na przykład zapisywanie, udostępnianie lub rozpoczynanie planowania trasy i nawigacji).

### Szczegóły POI {#poi-details}

**Menu kontekstowe POI** wyświetla kluczowe informacje o wybranym miejscu i udostępnia linki na podstawie dostępnych danych OSM oraz Wikimedia/Wikidata:
- **Nazwa i ikona** — pokazuje nazwę POI i jego ikonę.
- **Odległość i kierunek** — pokazuje odległość i kierunek do POI.
- **Lokalizacja** — wyświetla współrzędne POI.
- **Godziny otwarcia** — pokazuje sparsowane godziny otwarcia z [danych OSM](https://wiki.openstreetmap.org/wiki/Key:opening_hours). Aktualny status jest wyświetlany dynamicznie w zależności na bieżący czas (na przykład, *Otwarte teraz*, *Zamknięte* lub *Otwiera się o 10:00*), a pełny harmonogram jest pokazany poniżej.
- **Opis** — dostarcza dodatkowych informacji o POI, jeśli są dostępne (na przykład z Wikipedii).
- **Zdjęcia online** — pokazuje zdjęcia Wikimedia związane z POI, jeśli są dostępne. Wybierz Pokaż wszystko, aby otworzyć Galerię zdjęć. Wybierz zdjęcie, aby otworzyć je w galerii (tryb Otwórz zdjęcie).
- **Dane obiektu** — dodatkowe informacje o POI, w tym tagi OSM i inne szczegóły, takie jak kontakty, linki społecznościowe, linki do Wikipedii i Wikivoyage, opisy i inskrypcje (jeśli są dostępne).
- **OSM ID** — identyfikator OpenStreetMap POI.
- **Współrzędne** — wybierz współrzędne, aby je skopiować.

![POI Context Menu](@site/static/img/web/poi_context_menu_new.png)

### Akcje POI {#poi-actions}

**Menu kontekstowe POI** zawiera przyciski akcji dla typowych zadań. Użyj tych szybkich akcji, aby zapisać miejsce, udostępnić je lub rozpocząć planowanie trasy i nawigację:
- **Dodaj do ulubionych** — zapisuje POI w twoich [Ulubionych](../web/web-favorites.md#favorites-actions).
- **Udostępnij** — generuje udostępnialny link, który otwiera POI bezpośrednio w OsmAnd Web. Link zawiera nazwę POI, typ i współrzędne (pin).
- **Trasa z** — ustawia wybrane POI jako punkt startowy i otwiera panel trasy, abyś mógł wybrać cel i profil.
- **Nawigacja** — ustawia wybrane POI jako punkt docelowy dla [nawigacji](../web/web-navigation.md#start-a-route).

<!--
Click the **🔍 button** to start the search. Enter a query in the **Search Line** and click on POI to open the [**POI Context Menu**](#explore-poi-data), where you can view the tags information.

If you search by **Category name**, the first result will display the category of that POI.  If you click on a POI category, the [**Categories Search**](#categories) window opens.

![Context Menu POI](@site/static/img/web/context_menu_poi.png)


Click the chosen POI on the map or in the result list opens the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#favorites-actions).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/context_menu_poi_1.png)

## Categories {#categories}

You can choose and display one POI category on the map in the **Categories Menu**:

- Select from the **6 most popular categories**.  
- Or click **Show All** to open the full list of POI categories.

![Categories POI](@site/static/img/web/categories_poi.png)

Click the selected  POI on the map or in the results list to open the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#favorites-actions).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/categories_poi_1.png)


## Explore {#explore}

The **Explore** section in the Search menu makes it easier to find places and view points of interest (POIs) with their photos ([Wikidata source](https://www.wikidata.org/)) directly on the map.


To get started:

1. Click the **🔍 icon** to open the search tab, which displays popular POI categories and the **Explore** menu below.  
2. The **Explore** data will automatically be displayed on the map.  
3. Select **"Show All"** in the Explore section to open the full categories list with the ***Filter*** button at the top.  

   ![Explore menu](@site/static/img/web/explore.png)

4. Pressing the ***Filter* button** opens the Categories menu for "Explore." To refine your search, open the Categories menu and select the items you are interested in.  

   ![Explore menu](@site/static/img/web/explore_cat.png)

### Explore POI data {#explore-poi-data}

Clicking on an image POI opens a new context menu that includes:

- **Name and POI Tag**. Displays the name and general tag of the POI.  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Description**. Provides additional information about the POI.  
- **Online Photos**. Displays Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).  
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, etc.  
- **OSM ID**. Displays the OpenStreetMap ID of the POI.  
- **Coordinates**. By clicking on the coordinates, you can copy them.

![Explore menu](@site/static/img/web/poi_context.png)
-->

### Galeria zdjęć {#photo-gallery}

Kliknij ***Pokaż wszystko*** w sekcji **Zdjęcia online** menu kontekstowego POI, aby otworzyć *Galerię zdjęć* dla wybranego POI. Galeria pozwala przeglądać wszystkie dostępne zdjęcia. Kliknij zdjęcie, aby otworzyć je w większym widoku (tryb Otwórz zdjęcie). Użyj Powrót, aby wrócić do menu kontekstowego POI.

Szczegóły zdjęcia zawierają:
- **Data**. Data wykonania lub przesłania zdjęcia.  
- **Autor**. Nazwisko autora zdjęcia.  
- **Informacje o licencji**. Szczegóły dotyczące praw do użytkowania zdjęcia.  
- **Opis**. Dodatkowe informacje o zdjęciu.

![Photo Gallery](@site/static/img/web/poi_photo.png)


## Powiązane artykuły {#related-articles}

- [Wyszukaj wszystko](../search/search-all.md)
- [Wyszukaj POI](../search/search-poi.md)
- [Mapa](../web/web-map.md)