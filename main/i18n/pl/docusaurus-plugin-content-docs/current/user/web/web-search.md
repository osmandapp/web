---
source-hash: 576b2a6ec144f65d9bbd387b7ce25523a8a81f929e1a4c17b8d400a8c97827dd
sidebar_position: 6
sidebar_label: Szukaj
title: Szukaj na stronie
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


## Przegląd {#overview}

**Menu wyszukiwania** jest dostępne z panelu bocznego lub z **lewego rogu 🔍** mapy. Zawiera:

- [Pasek wyszukiwania](#search-bar). Wprowadź słowa kluczowe, aby wyszukać konkretne lokalizacje lub punkty POI.
- [Sekcja kategorii](#categories). Przeglądaj opcje podzielone na kategorie, aby łatwiej wyszukiwać POI.
- [Sekcja Eksploruj](#explore). Odkrywaj pobliskie miejsca i interesujące obszary ze zdjęciami.

![Menu wyszukiwania](@site/static/img/web/search.png)


## Pasek wyszukiwania {#search-bar}

Kliknij **przycisk 🔍**, aby rozpocząć wyszukiwanie. Wprowadź zapytanie w **Linii wyszukiwania** i kliknij POI, aby otworzyć [**Menu kontekstowe POI**](#explore-poi-data), gdzie możesz wyświetlić informacje o tagach.

Jeśli wyszukujesz według **nazwy kategorii**, pierwszy wynik wyświetli kategorię tego POI. Jeśli klikniesz kategorię POI, otworzy się okno [**Wyszukiwanie kategorii**](#categories).

![Menu kontekstowe POI](@site/static/img/web/context_menu_poi.png)


Kliknięcie wybranego POI na mapie lub na liście wyników otwiera **Menu kontekstowe POI**. To menu zawiera następujące dane i linki:

- **Nazwa i ikona**. Wyświetla nazwę i ikonę POI.
- **Przycisk ★ (*Dodaj do ulubionych*)**. Pozwala zapisać wybrany POI jako [ulubiony](../web/web-userdata.mdx#add--edit-favorite).
- **Przycisk 🔍**. Przesuwa mapę do lokalizacji POI.
- **Odległość i kierunek**. Pokazuje odległość i kierunek od Twojej lokalizacji do wybranego POI.
- **Lokalizacja**. Wyświetla współrzędne POI.
- **Zdjęcia online**. Udostępnia dane Wikimedia związane z POI, jeśli są dostępne. Kliknij *Pokaż wszystko*, aby otworzyć [Galerię zdjęć](#photo-gallery).
- **Dane obiektu**. Zawiera szczegóły, takie jak kontakty, linki do mediów społecznościowych, linki do Wikipedii, opisy, inskrypcje itp.
- **ID OSM**. Identyfikator OpenStreetMap POI.
- **Współrzędne**. Kliknięcie współrzędnych pozwala je skopiować.

![Menu kontekstowe POI](@site/static/img/web/context_menu_poi_1.png)

## Kategorie {#categories}

Możesz wybrać i wyświetlić jedną kategorię POI na mapie w **Menu kategorii**:

- Wybierz z **6 najpopularniejszych kategorii**.
- Lub kliknij **Pokaż wszystko**, aby otworzyć pełną listę kategorii POI.

![Kategorie POI](@site/static/img/web/categories_poi.png)

Kliknięcie wybranego POI na mapie lub na liście wyników otwiera **Menu kontekstowe POI**. To menu zawiera następujące dane i linki:

- **Nazwa i ikona**. Wyświetla nazwę i ikonę POI.
- **Przycisk ★ (*Dodaj do ulubionych*)**. Pozwala zapisać wybrany POI jako [ulubiony](../web/web-userdata.mdx#add--edit-favorite).
- **Przycisk 🔍**. Przesuwa mapę do lokalizacji POI.
- **Odległość i kierunek**. Pokazuje odległość i kierunek od Twojej lokalizacji do wybranego POI.
- **Lokalizacja**. Wyświetla współrzędne POI.
- **Zdjęcia online**. Udostępnia dane Wikimedia związane z POI, jeśli są dostępne. Kliknij *Pokaż wszystko*, aby otworzyć [Galerię zdjęć](#photo-gallery).
- **Dane obiektu**. Zawiera szczegóły, takie jak kontakty, linki do mediów społecznościowych, linki do Wikipedii, opisy, inskrypcje itp.
- **ID OSM**. Identyfikator OpenStreetMap POI.
- **Współrzędne**. Kliknięcie współrzędnych pozwala je skopiować.

![Menu kontekstowe POI](@site/static/img/web/categories_poi_1.png)


## Eksploruj {#explore}

Sekcja **Eksploruj** w menu wyszukiwania ułatwia znajdowanie miejsc i przeglądanie punktów POI ze zdjęciami ([źródło Wikidata](https://www.wikidata.org/)) bezpośrednio na mapie.


Aby rozpocząć:

1. Kliknij **ikonę 🔍**, aby otworzyć zakładkę wyszukiwania, która wyświetla popularne kategorie POI i menu **Eksploruj** poniżej.
2. Dane **Eksploruj** zostaną automatycznie wyświetlone na mapie.
3. Wybierz **„Pokaż wszystko”** w sekcji Eksploruj, aby otworzyć pełną listę kategorii z przyciskiem ***Filtruj*** u góry.

   ![Menu Eksploruj](@site/static/img/web/explore.png)

4. Naciśnięcie przycisku ***Filtruj*** otwiera menu Kategorii dla „Eksploruj”. Aby doprecyzować wyszukiwanie, otwórz menu Kategorii i wybierz interesujące Cię elementy.

   ![Menu Eksploruj](@site/static/img/web/explore_cat.png)

### Eksploruj dane POI {#explore-poi-data}

Kliknięcie obrazu POI otwiera nowe menu kontekstowe, które zawiera:

- **Nazwa i tag POI**. Wyświetla nazwę i ogólny tag POI.
- **Przycisk 🔍**. Przesuwa mapę do lokalizacji POI.
- **Odległość i kierunek**. Pokazuje odległość i kierunek od Twojej lokalizacji do wybranego POI.
- **Lokalizacja**. Wyświetla współrzędne POI.
- **Opis**. Zawiera dodatkowe informacje o POI.
- **Zdjęcia online**. Wyświetla dane Wikimedia związane z POI, jeśli są dostępne. Kliknij *Pokaż wszystko*, aby otworzyć [Galerię zdjęć](#photo-gallery).
- **Dane obiektu**. Zawiera szczegóły, takie jak kontakty, linki do mediów społecznościowych, linki do Wikipedii itp.
- **ID OSM**. Wyświetla identyfikator OpenStreetMap POI.
- **Współrzędne**. Klikając na współrzędne, możesz je skopiować.

![Menu Eksploruj](@site/static/img/web/poi_context.png)

### Galeria zdjęć {#photo-gallery}

Jeśli klikniesz ***Pokaż wszystko*** w sekcji **Zdjęcia online** w menu kontekstowym, otworzy się *Galeria zdjęć* wybranego POI.
W *Galerii zdjęć* możesz przewijać wszystkie zdjęcia POI.

Każde zdjęcie zawiera:

- **Datę**. Datę wykonania lub przesłania zdjęcia.
- **Autora**. Imię i nazwisko autora zdjęcia.
- **Informacje o licencji**. Szczegóły dotyczące praw do użytkowania zdjęcia.
- **Opis**. Dodatkowe informacje o zdjęciu.

![Galeria zdjęć](@site/static/img/web/poi_photo.png)


> *Ostatnia aktualizacja: styczeń 2025*