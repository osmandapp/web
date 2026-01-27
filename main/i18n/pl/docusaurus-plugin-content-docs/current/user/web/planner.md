---
source-hash: efbd8cb409a1e8ef85e36e19d96eeb7a90fa212c810385f1ad6562e2e09d6d40
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

<!--
<InfoIncompleteArticle/>
-->


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


## Create New Route {#create-new-route}

Istnieją dwa sposoby na rozpoczęcie nowej trasy w narzędziu Planuj trasę. Pierwsza opcja to bezpośrednio z mapy: kliknij prawym przyciskiem myszy w dowolnym miejscu na mapie i wybierz **Utwórz nową trasę**. Druga opcja to z panelu po lewej stronie: kliknij przycisk **Utwórz ślad**.

Po utworzeniu trasy dodawaj punkty bezpośrednio na mapie. Każdy klik umieszcza następny punkt, a planista buduje trasę między punktami.

![Tworzenie nowej trasy w OsmAnd Web](@site/static/img/web/create_new_route.png)

### Import Track {#import-track}

Jeśli masz już plik śladu, możesz zaimportować go do narzędzia Planuj trasę i kontynuować pracę z nim w Planerze internetowym. Kliknij przycisk **Importuj ślad** i wybierz plik GPX z komputera. Po przesłaniu ślad pojawia się na liście lokalnej i otwiera się w planiście, dzięki czemu możesz przejrzeć go na mapie i kontynuować edycję oraz zarządzanie w panelach śladu.

### Local Files {#local-files}

Wszystkie trasy i ślady, które utworzysz lub zaimportujesz w narzędziu Planuj trasę, są dodawane do listy Lokalne w panelu po lewej stronie. Ułatwia to przechowywanie wielu plików GPX w jednym miejscu i przełączanie między nimi podczas planowania.

Każdy element na liście ma przełącznik, który pozwala szybko pokazywać lub ukrywać ślad na mapie. Wybierz ślad z listy, aby otworzyć go w planiście i kontynuować pracę z nim. 

![Tworzenie nowej trasy w OsmAnd Web](@site/static/img/web/local_files.png)


## Manage Track {#manage-track}

Po utworzeniu lub zaimportowaniu trasy w narzędziu Planuj trasę otwiera się pionowy panel śladu. Użyj tego panelu, aby zmienić profil routingu i zarządzać trasą. Kliknij kontrolkę profilu, aby otworzyć okno dialogowe **Zmień profil**, wybierz potrzebny profil (na przykład Samochód, Rower lub Pieszy) i wybierz, jak go zastosować: *Następne segmenty* stosuje profil tylko do nowych części dodanych od tego punktu wzwyż, natomiast *Wszystkie segmenty* przelicza całą trasę z wybranym profilem.

Z panelu śladu możesz również wykonywać typowe akcje na plikach. Możesz **Zapisać w chmurze**, aby zachować trasę do późniejszego użytku, **Pobrać GPX**, aby wyeksportować ją jako plik, **Zamknąć ślad**, aby zakończyć edycję, lub **Usunąć ślad**, aby usunąć go z listy lokalnej. Te akcje są również dostępne z odpowiednich kontrolek w [panelu Informacje](#info-panel).

![Zarządzanie śladem w OsmAnd Web](@site/static/img/web/manage_track_new.png) ![Zarządzanie śladem w OsmAnd Web](@site/static/img/web/change_profile.png)


## Track Details Panels {#track-details-panels}

Menu lokalnego śladu zawiera trzy panele: **Informacje**, **Ślad** i **Punkty trasy**. Użyj ich do wyświetlania informacji o śladzie i zarządzania punktami trasy oraz punktami orientacyjnymi.

### Info Panel {#info-panel}

Panel Informacje podsumowuje wybrany ślad i pokazuje kluczowe dane trasy oraz wysokości. Zawiera szybki przegląd statystyk trasy, a także wykresy i dodatkową analizę śladu na podstawie dostępnych danych mapy.

Sekcja podsumowania pokazuje:

- Punkty — liczba punktów trasy użytych do zbudowania trasy.
- Dystans — całkowita długość trasy.
- Podjazdy / zjazdy — całkowity wzniesienie i całkowite zejście wzdłuż trasy.
- Wysokość (min/śred/max) — statystyki wysokości dla trasy.
- Jeśli dane wysokości są brakujące lub wymagają aktualizacji, użyj Wysokość (satelitarna) → przelicz ponownie, aby odbudować wysokość za pomocą danych satelitarnych (jeśli dostępne).

Pod podsumowaniem panel zapewnia wykresy:

- Wysokość — profil wysokości trasy.
- Nachylenie — wykres nachylenia pokazujący zmiany gradientu wzdłuż śladu.

Aby uzyskać dodatkowe szczegóły śladu, otwórz sekcje analizy:

- Powierzchnia — pokazuje typy nawierzchni wzdłuż trasy na podstawie danych OSM.
- Gładkość — pokazuje gładkość segmentów na podstawie znaczników OSM.

Typowe akcje na śladzie, takie jak zapisywanie, pobieranie, zamykanie i usuwanie, są również dostępne w tym panelu.

![Panel Informacje w OsmAnd Web](@site/static/img/web/info_panel.png) ![Zarządzanie śladem w OsmAnd Web](@site/static/img/web/info_panel_2.png)

### Track Panel {#track-panel}

Panel Ślad pokazuje listę punktów trasy użytych do zbudowania śladu. Użyj go do przeglądu i edycji struktury trasy: przeciągaj punkty, aby zmienić ich kolejność, usuwaj punkty za pomocą ikony usuń lub użyj Wyczyść punkty, aby usunąć wszystkie punkty i zacząć od nowa.

![Panel Ślad w OsmAnd Web](@site/static/img/web/track_panel.png)

### Waypoints Panel {#waypoints-panel}

Panel Punkty trasy służy do wyświetlania i zarządzania punktami orientacyjnymi dla wybranego śladu. Punkty orientacyjne można dodać z menu kontekstowego mapy — kliknij prawym przyciskiem myszy na mapie i wybierz opcję **Dodaj punkt orientacyjny**, a następnie wypełnij szczegóły punktu orientacyjnego (takie jak nazwa, ikona i kolor) i zapisz go.

Na liście Punkty trasy możesz kontrolować, czy punkty orientacyjne są wyświetlane na mapie, oraz usuwać pojedyncze punkty orientacyjne w razie potrzeby. Aby usunąć wszystkie punkty orientacyjne z śladu naraz, użyj *Wyczyść wszystkie punkty orientacyjne*.

![Panel Punkty trasy w OsmAnd Web](@site/static/img/web/waypoints_panel.png)


## Related Articles {#related-articles}

- [Planuj trasę](../plan-route/create-route.md)
- [Przewodniki podróżnicze](../plan-route/travel-guides.md)
- [Nawigacja](../web/web-navigation.md)