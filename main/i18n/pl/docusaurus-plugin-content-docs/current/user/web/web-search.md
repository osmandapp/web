---
source-hash: 098646f83acbbceecc81138e6c1f095f561c363dd813f1adacc2c3762c0d0865
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

<InfoIncompleteArticle/>


## Przegląd {#overview}

**Menu Wyszukiwania** można otworzyć z panelu bocznego lub z **lewego rogu 🔍** mapy. Zawiera ono:

- [Pasek wyszukiwania](#search-bar). Wprowadź słowa kluczowe, aby wyszukać określone lokalizacje lub punkty POI.  
- [Sekcja Kategorie](#categories). Przeglądaj opcje podzielone na kategorie, aby ułatwić wyszukiwanie POI.  
- [Sekcja Odkrywaj](#explore). Odkrywaj pobliskie miejsca i obszary zainteresowań ze zdjęciami.

![Search menu](@site/static/img/web/search.png)


## Pasek wyszukiwania {#search-bar}

Kliknij **przycisk 🔍**, aby rozpocząć wyszukiwanie. Wprowadź zapytanie w **linii wyszukiwania** i kliknij POI, aby otworzyć [**menu kontekstowe POI**](#explore-poi-data), gdzie można wyświetlić informacje o tagach.

Jeśli wyszukujesz według **nazwy kategorii**, pierwszy wynik wyświetli kategorię tego POI. Jeśli klikniesz kategorię POI, otworzy się okno [**Wyszukiwania w kategoriach**](#categories).

![Context Menu POI](@site/static/img/web/context_menu_poi.png)


Kliknięcie wybranego POI na mapie lub na liście wyników otwiera **menu kontekstowe POI**. To menu dostarcza następujące dane i linki:

- **Nazwa i ikona**. Wyświetla nazwę i ikonę POI.  
- **Przycisk ★ (*Dodaj do ulubionych*)**. Pozwala zapisać wybrane POI jako [ulubione](../web/web-favorites.mdx#add--edit-favorite).  
- **Przycisk 🔍**. Przesuwa mapę do lokalizacji POI.  
- **Odległość i kierunek**. Pokazuje odległość i kierunek od Twojej lokalizacji do wybranego POI.  
- **Lokalizacja**. Wyświetla współrzędne POI.  
- **Zdjęcia online**. Dostarcza dane z Wikimedia związane z POI, jeśli są dostępne. Kliknij *Pokaż wszystko*, aby otworzyć [Galerię zdjęć](#photo-gallery).
- **Dane obiektu**. Zawiera szczegóły, takie jak kontakty, linki do mediów społecznościowych, linki do Wikipedii, opisy, inskrypcje itp.  
- **OSM ID**. Identyfikator OpenStreetMap danego POI.  
- **Współrzędne**. Kliknięcie współrzędnych pozwala je skopiować.

![Context Menu POI](@site/static/img/web/context_menu_poi_1.png)

## Kategorie {#categories}

W **menu Kategorie** możesz wybrać i wyświetlić jedną kategorię POI na mapie:

- Wybierz jedną z **6 najpopularniejszych kategorii**.  
- Lub kliknij **Pokaż wszystko**, aby otworzyć pełną listę kategorii POI.

![Categories POI](@site/static/img/web/categories_poi.png)

Kliknięcie wybranego POI na mapie lub na liście wyników otwiera **menu kontekstowe POI**. To menu dostarcza następujące dane i linki:

- **Nazwa i ikona**. Wyświetla nazwę i ikonę POI.  
- **Przycisk ★ (*Dodaj do ulubionych*)**. Pozwala zapisać wybrane POI jako [ulubione](../web/web-favorites.mdx#add--edit-favorite).  
- **Przycisk 🔍**. Przesuwa mapę do lokalizacji POI.  
- **Odległość i kierunek**. Pokazuje odległość i kierunek od Twojej lokalizacji do wybranego POI.  
- **Lokalizacja**. Wyświetla współrzędne POI.  
- **Zdjęcia online**. Dostarcza dane z Wikimedia związane z POI, jeśli są dostępne. Kliknij *Pokaż wszystko*, aby otworzyć [Galerię zdjęć](#photo-gallery).
- **Dane obiektu**. Zawiera szczegóły, takie jak kontakty, linki do mediów społecznościowych, linki do Wikipedii, opisy, inskrypcje itp.  
- **OSM ID**. Identyfikator OpenStreetMap danego POI.  
- **Współrzędne**. Kliknięcie współrzędnych pozwala je skopiować.

![Context Menu POI](@site/static/img/web/categories_poi_1.png)


## Odkrywaj {#explore}

Sekcja **Odkrywaj** w menu Wyszukiwania ułatwia znajdowanie miejsc i przeglądanie punktów POI wraz z ich zdjęciami ([źródło Wikidata](https://www.wikidata.org/)) bezpośrednio na mapie.


Aby rozpocząć:

1. Kliknij **ikonę 🔍**, aby otworzyć kartę wyszukiwania, która wyświetla popularne kategorie POI i menu **Odkrywaj** poniżej.  
2. Dane z sekcji **Odkrywaj** zostaną automatycznie wyświetlone na mapie.  
3. Wybierz **"Pokaż wszystko"** w sekcji Odkrywaj, aby otworzyć pełną listę kategorii z przyciskiem ***Filtruj*** na górze.  

   ![Explore menu](@site/static/img/web/explore.png)

4. Naciśnięcie przycisku ***Filtruj*** otwiera menu Kategorie dla "Odkrywaj". Aby zawęzić wyszukiwanie, otwórz menu Kategorie i wybierz interesujące Cię pozycje.  

   ![Explore menu](@site/static/img/web/explore_cat.png)

### Dane POI w Odkrywaj {#explore-poi-data}

Kliknięcie na POI ze zdjęciem otwiera nowe menu kontekstowe, które zawiera:

- **Nazwa i tag POI**. Wyświetla nazwę i ogólny tag POI.  
- **Przycisk 🔍**. Przesuwa mapę do lokalizacji POI.  
- **Odległość i kierunek**. Pokazuje odległość i kierunek od Twojej lokalizacji do wybranego POI.  
- **Lokalizacja**. Wyświetla współrzędne POI.  
- **Opis**. Dostarcza dodatkowych informacji o POI.  
- **Zdjęcia online**. Wyświetla dane z Wikimedia związane z POI, jeśli są dostępne. Kliknij *Pokaż wszystko*, aby otworzyć [Galerię zdjęć](#photo-gallery).  
- **Dane obiektu**. Zawiera szczegóły, takie jak kontakty, linki do mediów społecznościowych, linki do Wikipedii itp.  
- **OSM ID**. Wyświetla identyfikator OpenStreetMap danego POI.  
- **Współrzędne**. Klikając na współrzędne, można je skopiować.

![Explore menu](@site/static/img/web/poi_context.png)

### Galeria zdjęć {#photo-gallery}

Jeśli klikniesz ***Pokaż wszystko*** w sekcji **Zdjęcia online** w menu kontekstowym, otworzy się *Galeria zdjęć* wybranego POI.  
W *Galerii zdjęć* możesz przewijać wszystkie zdjęcia POI.  

Każde zdjęcie zawiera:

- **Data**. Data wykonania lub przesłania zdjęcia.  
- **Autor**. Imię i nazwisko autora zdjęcia.  
- **Informacje o licencji**. Szczegóły dotyczące praw do użytkowania zdjęcia.  
- **Opis**. Dodatkowe informacje o zdjęciu.

![Photo Gallery](@site/static/img/web/poi_photo.png)