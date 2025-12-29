---
source-hash: f973f145e5f4519df92ee087ead534986bb074b9e858cae169c3d3c6b00b1839
sidebar_position: 9
sidebar_label:  Planuj trasę
title: Planowanie trasy na stronie internetowej
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


## Overview {#overview}

Narzędzie do planowania tras OsmAnd Web pozwala tworzyć trasy nawigacyjne, planować ślady i zarządzać lokalnymi plikami bezpośrednio z przeglądarki. To narzędzie internetowe jest przydatne do tworzenia szczegółowych tras podróży, które można zsynchronizować z aplikacją lub udostępnić innym.


<!--
## Navigation Route {#navigation-route}

To create a navigation route, follow these steps:

- **Right-click** on the map to add waypoints:

  - *Navigate from*. Set the starting point.
  - *Navigate to*. Set the destination.
  - *Navigate via*. Add intermediate points if needed.

- After setting the start and end points, the route will be displayed on the map.

- In the **Route** block:

  - Move the start and end points if needed.
  - Edit the waypoints and choose the desired route type (e.g., car, bicycle, walking).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Select the appropriate **Route Profile** for different navigation options.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Click on the orange circles along the route to view detailed navigation instructions.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- To share the route, copy the URL. Example: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Create Track and Local Files {#create-track-and-local-files}

Narzędzie [**Planuj trasę**](../plan-route/create-route.md) w OsmAnd Web pozwala na tworzenie i edytowanie śladów w podobny sposób jak w aplikacji mobilnej. Oto jak można tworzyć i zarządzać śladami:


***Tworzenie nowej trasy:***

- *Kliknij prawym przyciskiem myszy* na mapie i wybierz **Utwórz nową trasę**.
- Alternatywnie, użyj przycisku **Utwórz ślad** w menu *Lokalne* (znajdującym się po prawej stronie z przyciskami *Ołówek* i *Prześlij*).


***Zarządzanie śladami:***

- **Wybierz profil nawigacji**. Wybierz profil (np. pieszy, samochodowy) dla określonych odcinków trasy (*Nowe segmenty*) lub dla całej trasy (*Wszystkie segmenty*).
- **Dodaj punkty trasy**. Kliknij na mapie, aby dodać nowe punkty.
- **Zapisz trasę**. Zapisz trasę do przyszłego użytku.
- **Wyświetl szczegóły trasy**. Uzyskaj dostęp do szczegółowych informacji o śladzie, w tym długości, czasu trwania i ukształtowania terenu.
  ![Tworzenie śladu w OsmAnd Web](@site/static/img/web/create_route.png)


***Importowanie i tworzenie śladów:***

- **Importuj ślad**. Możesz przesłać dowolny plik GPX do sekcji **Lokalne**, odwiedzając [osmand.net/map](https://osmand.net/map).
- **Utwórz ślad**. Ręcznie utwórz nowy ślad, wybierając punkty trasy.
  ![Tworzenie śladu w OsmAnd Web](@site/static/img/web/create_route_2.png)


***Działania i informacje o śladzie lokalnym:***

Menu **Ślad lokalny** udostępnia trzy panele do edycji: **Informacje**, **Ślad** i **Punkty trasy**.

**Panel Informacje**:

- *Zapisz w chmurze*. Zapisz swój ślad w OsmAnd Cloud, aby mieć do niego dostęp na różnych urządzeniach.
- *Dodaj opis*. Dodaj notatki o śladzie.
- *Zmień nazwę*. Zmień nazwę śladu.
- *Przelicz ponownie*. Dodaj lub zaktualizuj dane o wysokości.
- *Wysokość*. Wyświetl profil wysokości.
- *Wykres prędkości*. Wyświetl dane o prędkości na całej trasie.
- *Wykres nachylenia*. Pokaż zmiany nachylenia wzdłuż trasy.  
- *Szczegóły drogi*. Wyświetl szczegółowe informacje, takie jak typ drogi, nawierzchnia i stromość.
- *Pobierz GPX*. Eksportuj ślad jako plik GPX ([funkcja Pro](../purchases/index.md)).
- *Zamknij ślad*. Zamknij widok edycji śladu.
- *Usuń ślad*. Trwale usuń ślad.
  ![Tworzenie śladu w OsmAnd Web](@site/static/img/web/create_route_3.png)

**Panel Ślad**:

- Wyświetlaj i edytuj punkty śladu.
- W razie potrzeby zmieniaj kolejność lub usuwaj punkty.

**Panel Punkty trasy**:

- Wyświetlaj i zarządzaj punktami trasy.
- Przełączaj widoczność punktów trasy na mapie.
- W razie potrzeby usuwaj pojedyncze punkty trasy.

**Panel Zakręty**:

- Wyświetl szczegółowe informacje o zakrętach na trasie.

  ![Tworzenie śladu w OsmAnd Web](@site/static/img/web/create_route_1.png)


***Dodatkowe funkcje:***

- **Synchronizacja z aplikacją**. Zapisuj trasy w OsmAnd Cloud i uzyskuj do nich dostęp w aplikacji mobilnej.
- **Niestandardowe profile tras**. Dostosuj profile do różnych aktywności, takich jak jazda na rowerze czy piesze wędrówki.
- **Trasy do udostępniania**. Kopiuj i udostępniaj adresy URL tras w celu wspólnego planowania.