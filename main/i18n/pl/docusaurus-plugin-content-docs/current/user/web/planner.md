---
source-hash: 8126842666c1b2fbd00d6cdb9fb5d9a688401ea2ca74976ccf168038defc6772
sidebar_position: 5
sidebar_label:  Planowanie trasy
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


## Przegląd {#overview}

Narzędzie do planowania tras OsmAnd Web pozwala tworzyć trasy nawigacyjne, planować ślady i zarządzać lokalnymi plikami bezpośrednio z przeglądarki. To narzędzie internetowe jest przydatne do tworzenia szczegółowych tras podróży, które można zsynchronizować z aplikacją lub udostępnić innym.


## Trasa nawigacyjna {#navigation-route}

Aby utworzyć trasę nawigacyjną, wykonaj następujące kroki:

- **Kliknij prawym przyciskiem myszy** na mapie, aby dodać punkty trasy:

  - *Nawiguj z*. Ustaw punkt początkowy.
  - *Nawiguj do*. Ustaw miejsce docelowe.
  - *Nawiguj przez*. W razie potrzeby dodaj punkty pośrednie.

- Po ustawieniu punktów początkowego i końcowego trasa zostanie wyświetlona na mapie.

- W bloku **Trasa**:

  - W razie potrzeby przesuń punkty początkowy i końcowy.
  - Edytuj punkty trasy i wybierz pożądany typ trasy (np. samochód, rower, pieszo).

  ![Tworzenie trasy w OsmAnd Web](@site/static/img/web/navigation.png)

- Wybierz odpowiedni **Profil trasy** dla różnych opcji nawigacji.

  ![Tworzenie trasy w OsmAnd Web](@site/static/img/web/profile_type.png)

- Kliknij pomarańczowe kółka wzdłuż trasy, aby wyświetlić szczegółowe instrukcje nawigacyjne.

  ![Tworzenie trasy w OsmAnd Web](@site/static/img/web/nav_instr.png)

- Aby udostępnić trasę, skopiuj adres URL. Przykład: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Tworzenie śladu i pliki lokalne {#create-track-and-local-files}

Narzędzie **Planowanie trasy** w OsmAnd Web pozwala na tworzenie i edytowanie śladów w podobny sposób jak w aplikacji mobilnej. Oto jak można tworzyć i zarządzać śladami:


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