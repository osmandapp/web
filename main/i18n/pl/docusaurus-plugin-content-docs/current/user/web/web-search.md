---
source-hash: 67e24e2d76639e1ba3e1dbe3fc8cff417ee3ff06770c41d09f400cac219c9cdf
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

## Przegląd {#overview}

**Menu Wyszukiwania** można otworzyć z panelu bocznego lub z ikony wyszukiwania 🔍 na mapie. Zawiera ono:

- [Pasek wyszukiwania](#search-bar). Wprowadź słowa kluczowe, aby wyszukać określone lokalizacje, punkty POI, ulubione lub ślady. 
- [Sekcja Kategorie](#categories). Przeglądaj opcje podzielone na kategorie, aby ułatwić wyszukiwanie POI.  
- [Sekcja Eksploruj](#explore). Wyświetlaj popularne POI dla bieżącego centrum mapy i odkrywaj miejsca ze zdjęciami na mapie.

![Menu wyszukiwania](@site/static/img/web/search.png)

## Opcje wyszukiwania {#search-options}

### Pasek wyszukiwania {#search-bar}

Użyj **paska wyszukiwania**, aby znaleźć określone miejsca, punkty POI, [ulubione](../web/web-favorites.md) i [ślady](../web/web-tracks.md) po nazwie. Kliknij ikonę wyszukiwania, wprowadź zapytanie i wybierz wynik z listy. Wybranie POI otwiera [menu kontekstowe POI](#poi-context-menu), natomiast wybranie ulubionego lub śladu otwiera jego szczegóły, w których możesz wyświetlić informacje i korzystać z szybkich akcji.

Możesz także łączyć kilka części w jednym zapytaniu. Wpisz kategorię lub markę razem z nazwą miejsca, na przykład `Hotel Berlin` lub `Billa Bratislava`, aby znaleźć pasujące POI w tym miejscu. Wpisz dwie kategorie albo kategorię i właściwość, na przykład `Fuel Diesel` lub `Cafe Vegan`, aby znaleźć miejsca spełniające oba warunki.

Jeśli wyszukujesz według nazwy kategorii, pierwszy wynik może pokazać odpowiadającą kategorię POI. Nazwy kategorii można wpisywać w różnych językach, na przykład `bank` lub `банк`. Kliknij kategorię, aby otworzyć widok [wyszukiwania w kategoriach](#categories).

![Opcje wyszukiwania](@site/static/img/web/search_bar.png)

### Kategorie {#categories}

Użyj **Kategorii**, aby przeglądać POI według typu i wyświetlać je na mapie. Menu pokazuje sześć popularnych kategorii dla szybkiego dostępu. Jeśli potrzebujesz więcej opcji, kliknij Pokaż wszystko, aby otworzyć pełną listę 18 dostępnych kategorii. Wybranie kategorii wyświetla pasujące POI na mapie; wybranie POI otwiera [menu kontekstowe POI](#poi-context-menu).

![Opcje wyszukiwania](@site/static/img/web/search_categories.png)

### Eksploruj {#explore}

Sekcja **Eksploruj** pokazuje [popularne miejsca](https://osmand.net/docs/user/map/popular_places) ze zdjęciami bezpośrednio na mapie. Tworzy listę POI dla bieżącego centrum mapy (posortowaną według popularności) i wyświetla te same miejsca jako znaczniki ze zdjęciami na mapie. Podgląd obrazów i informacje POI oparte są na Wikidata/Wikimedia i powiązanych źródłach, jeśli są dostępne.

Otwórz kartę Wyszukiwania, aby uzyskać dostęp do Eksploruj — wyniki Eksploruj są wyświetlane na mapie automatycznie. Użyj Pokaż wszystko, aby otworzyć pełną listę kategorii Odkrywaj. Możesz udoskonalić to, co pojawia się na liście i na mapie, używając Filtr, który otwiera menu kategorii Odkrywaj. Wybranie POI z listy lub na mapie otwiera [menu kontekstowe POI](#poi-context-menu).

![Opcje wyszukiwania](@site/static/img/web/search_explore.png) ![Opcje wyszukiwania](@site/static/img/web/explore_filters.png)

## Menu kontekstowe POI {#poi-context-menu}

Bez względu na to, którą opcję wyszukiwania użyjesz (Pasek wyszukiwania, Kategorie lub Eksploruj), wybranie POI na mapie lub na liście wyników otwiera menu kontekstowe POI. Menu kontekstowe to główne miejsce do wyświetlania informacji o POI i wykonywania typowych akcji. Łączy ono szczegóły POI (takie jak lokalizacja i powiązane dane) z szybkimi akcjami (na przykład zapisywanie, udostępnianie lub rozpoczynanie nawigacji).

Aby wrócić do listy wyników, kliknij *Wstecz*. Aby zamknąć menu, kliknij *Zamknij* lub naciśnij Esc. Zamknięcie menu czyści wyszukiwanie, więc przy następnym otwarciu Wyszukiwanie nie zawiera poprzednich wyników. Mapa pozostaje w bieżącym położeniu.

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

![Menu kontekstowe POI](@site/static/img/web/poi_context_menu_new.png)

### Akcje POI {#poi-actions}

**Menu kontekstowe POI** zawiera przyciski akcji dla typowych zadań. Użyj tych szybkich akcji, aby zapisać miejsce, udostępnić je lub rozpocząć planowanie trasy i nawigację:
- **Dodaj do ulubionych** — zapisuje POI w twoich [Ulubionych](../web/web-favorites.md#favorites-actions).
- **Udostępnij** — generuje udostępnialny link, który otwiera POI bezpośrednio w OsmAnd Web. Link zawiera nazwę POI, typ i współrzędne (pin).
- **Trasa z** — ustawia wybrane POI jako punkt startowy i otwiera panel trasy, abyś mógł wybrać cel i profil.
- **Nawigacja** — ustawia wybrane POI jako punkt docelowy dla [nawigacji](../web/web-navigation.md#start-a-route).

### Galeria zdjęć {#photo-gallery}

Kliknij ***Pokaż wszystko*** w sekcji **Zdjęcia online** menu kontekstowego POI, aby otworzyć *Galerię zdjęć* dla wybranego POI. Galeria pozwala przeglądać wszystkie dostępne zdjęcia. Kliknij zdjęcie, aby otworzyć je w większym widoku (tryb Otwórz zdjęcie). Użyj Powrót, aby wrócić do menu kontekstowego POI.

Szczegóły zdjęcia zawierają:
- **Data**. Data wykonania lub przesłania zdjęcia.  
- **Autor**. Nazwisko autora zdjęcia.  
- **Informacje o licencji**. Szczegóły dotyczące praw do użytkowania zdjęcia.  
- **Opis**. Dodatkowe informacje o zdjęciu.

![Galeria zdjęć](@site/static/img/web/poi_photo.png)


## Powiązane artykuły {#related-articles}

- [Wyszukaj wszystko](../search/search-all.md)
- [Wyszukaj POI](../search/search-poi.md)
- [Mapa](../web/web-map.md)