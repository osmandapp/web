---
source-hash: 4861815642f39190c1d87fb62206d4b05c6eea3b5d2af97e4dcef2e6834f466c
sidebar_position: 5
sidebar_label: Planuj trasę
title: Planuj trasę na stronie internetowej
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

Narzędzie OsmAnd Web Route Planner pozwala tworzyć trasy nawigacyjne, planować ścieżki i zarządzać plikami lokalnymi bezpośrednio z przeglądarki. To narzędzie internetowe jest przydatne do tworzenia szczegółowych tras podróży, które można zsynchronizować z aplikacją lub udostępnić innym.


## Trasa nawigacyjna {#navigation-route}

Aby utworzyć trasę nawigacyjną, wykonaj następujące kroki:

- **Kliknij prawym przyciskiem myszy** na mapie, aby dodać punkty trasy:

  - *Nawiguj od*. Ustaw punkt początkowy.
  - *Nawiguj do*. Ustaw punkt docelowy.
  - *Nawiguj przez*. Dodaj punkty pośrednie, jeśli to konieczne.

- Po ustawieniu punktów początkowego i końcowego trasa zostanie wyświetlona na mapie.

- W bloku **Trasa**:

  - Przesuń punkty początkowy i końcowy, jeśli to konieczne.
  - Edytuj punkty trasy i wybierz żądany typ trasy (np. samochód, rower, pieszo).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Wybierz odpowiedni **Profil trasy** dla różnych opcji nawigacji.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Kliknij pomarańczowe kółka wzdłuż trasy, aby wyświetlić szczegółowe instrukcje nawigacyjne.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- Aby udostępnić trasę, skopiuj adres URL. Przykład: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Tworzenie ścieżek i plików lokalnych {#create-track-and-local-files}

Narzędzie OsmAnd Web [**Planuj trasę**](../plan-route/create-route.md) pozwala tworzyć i edytować ścieżki podobnie jak aplikacja mobilna. Oto jak można tworzyć ścieżki i zarządzać nimi:


***Tworzenie nowej trasy:***

- *Kliknij prawym przyciskiem myszy* na mapie i wybierz **Utwórz nową trasę**.
- Alternatywnie, użyj przycisku **Utwórz ścieżkę** w menu *Lokalne* (znajdującego się po prawej stronie z przyciskami *Ołówek* i *Prześlij*).


***Zarządzanie ścieżkami:***

- **Wybierz profil nawigacji**. Wybierz profil (np. pieszy, samochodowy) dla określonych odcinków trasy (*Nowe segmenty*) lub dla całej trasy (*Wszystkie segmenty*).
- **Dodaj punkty trasy**. Kliknij na mapie, aby dodać nowe punkty.
- **Zapisz trasę**. Zapisz trasę do wykorzystania w przyszłości.
- **Wyświetl szczegóły trasy**. Uzyskaj dostęp do szczegółowych informacji o ścieżce, w tym długości, czasu trwania i terenu.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route.png)


***Importowanie i tworzenie ścieżek:***

- **Importuj ścieżkę**. Możesz przesłać dowolny plik GPX do sekcji **Lokalne**, odwiedzając stronę [osmand.net/map](https://osmand.net/map).
- **Utwórz ścieżkę**. Ręcznie utwórz nową ścieżkę, wybierając punkty trasy.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route_2.png)


***Działania i informacje o ścieżkach lokalnych:***

Menu **Ścieżka lokalna** zawiera trzy panele do edycji: **Informacje**, **Ścieżka** i **Punkty trasy**.

**Panel informacji**:

- *Zapisz w chmurze*. Zapisz ścieżkę w OsmAnd Cloud, aby uzyskać do niej dostęp na różnych urządzeniach.
- *Dodaj opis*. Dodaj notatki dotyczące ścieżki.
- *Zmień nazwę*. Zmień nazwę ścieżki.
- *Przelicz*. Dodaj lub zaktualizuj dane wysokościowe.
- *Wysokość*. Wyświetl profil wysokości.
- *Wykres prędkości*. Wyświetl dane prędkości wzdłuż ścieżki.
- *Wykres nachylenia*. Pokaż zmiany nachylenia wzdłuż trasy.
- *Szczegóły drogi*. Wyświetl szczegółowe informacje, takie jak typ drogi, nawierzchnia i stromość.
- *Pobierz GPX*. Eksportuj ścieżkę jako plik GPX ([funkcja Pro](../purchases/index.md)).
- *Zamknij ścieżkę*. Zamknij widok edycji ścieżki.
- *Usuń ścieżkę*. Trwale usuń ścieżkę.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route_3.png)

**Panel ścieżki**:

- Wyświetlaj i edytuj punkty ścieżki.
- Zmieniaj kolejność lub usuwaj punkty w razie potrzeby.

**Panel punktów trasy**:

- Wyświetlaj i zarządzaj punktami trasy.
- Przełącz widoczność punktów trasy na mapie.
- Usuwaj pojedyncze punkty trasy w razie potrzeby.

**Panel zakrętów**:

- Wyświetl szczegółowe informacje o zakrętach wzdłuż ścieżki.

  ![OsmAnd Web Create Track](@site/static/img/web/create_route_1.png)


***Dodatkowe funkcje:***

- **Synchronizacja z aplikacją**. Zapisuj trasy w OsmAnd Cloud i uzyskuj do nich dostęp w aplikacji mobilnej.
- **Niestandardowe profile tras**. Dostosuj profile do różnych aktywności, takich jak jazda na rowerze czy piesze wędrówki.
- **Trasy do udostępniania**. Kopiuj i udostępniaj adresy URL tras do wspólnego planowania.

> *Ostatnia aktualizacja: styczeń 2025*