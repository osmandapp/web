---
source-hash: 0890149ad782b462cb3c62cceac41b86ca265c6bf722b509b91f1be130761689
sidebar_position: 2
title:  Przewodniki turystyczne
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Przegląd {#overview}

:::info Funkcja płatna
Przewodniki turystyczne to [funkcja płatna](../purchases/index.md) aplikacji OsmAnd.
:::

Wirtualne przewodniki turystyczne w OsmAnd oferują użytkownikom cenne informacje, rekomendacje i wskazówki. Pozwalają również podróżnym na dostęp do kompleksowych informacji nawigacyjnych o atrakcjach w aplikacji.

Przewodniki turystyczne OsmAnd oparte są na danych z [Wikivoyage](https://www.wikivoyage.org/), projektu społecznościowego podobnego do Wikipedii, gdzie autorzy-wolontariusze tworzą aktualne artykuły.
Informacje z Wikivoyage obejmują główne fakty o miejscu, transporcie, atrakcjach, zakupach i wiele innych.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widok przewodników turystycznych Ogólne](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu map iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Jak używać {#how-to-use}

- [Pobierz](#download-articles) *Przewodniki turystyczne*.
- Przeglądaj [artykuły](#browse-articles) o kraju, regionie, mieście, atrakcji.
    - Alternatywnie, [wyświetl artykuły i/lub punkty przewodników turystycznych na mapie](#travel-routes) za pomocą menu Konfiguruj mapę.
    - Przeglądaj atrakcje na mapie, dodawaj je do *[Znaczników mapy](../personal/markers.md#add--edit-markers)* lub *[Ulubionych](../personal/favorites.md#favorite-group-actions)*.
    - Używając przycisku *[Czytaj całość](#manage-as-gpx-track)*, przejdź do *[artykułu](#travel-article)* w *Przewodnikach turystycznych*.
- [Dodaj do zakładek](#explore-and-bookmark) artykuły, aby przeczytać je później.
- Wybierz [punkty](#points) z artykułów do odwiedzenia i dodaj je do mapy OsmAnd.
- Uzyskaj więcej informacji o miejscach do odwiedzenia z artykułów offline [Wikipedii](#combine-with-wikipedia).
- [Zbuduj trasę](../navigation/setup/route-navigation.md#set-destinations) do wybranych atrakcji turystycznych lub swobodny spacer między punktami.

:::note
Artykuły *Przewodników turystycznych* są przechowywane w OsmAnd jako ślady GPX z punktami trasy. Po dodaniu tych śladów do mapy (zobacz sekcje *[Punkty](#points)* lub *[Trasy podróży](#travel-routes)* tego artykułu), możesz nimi zarządzać za pomocą menu *[Moje miejsca](../personal/myplaces.md)*.
:::

### Pobierz artykuły {#download-articles}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Menu pobierania przewodników turystycznych](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Menu map iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Zanim zaczniesz korzystać z przewodników turystycznych, musisz je pobrać za pomocą menu [Pobierz mapę](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Artykuły są pogrupowane według regionów: *Afryka, Azja, Australia i Oceania, Ameryka Środkowa, Europa, Ameryka Północna, Rosja i Ameryka Południowa*, więc nie musisz pobierać przewodników dla osobnego miasta czy kraju.
Zapisując wymagane regiony na swoim urządzeniu, możesz przeglądać artykuły za pomocą OsmAnd nawet, gdy jesteś za granicą lub poza zasięgiem sieci komórkowej.

:::note
Oprócz przewodników po krajach, regionach czy miastach, można znaleźć przewodniki po miejscach z filmów, książek, gier komputerowych, miejscach pamięci wielkich ludzi i tak dalej.
Istnieją również specjalistyczne przewodniki, takie jak lista UNESCO Global Geoparks Network czy największe i najbardziej złożone międzynarodowe lotniska na świecie.
:::

## Przeglądaj artykuły {#browse-articles}

Ekran *Przewodniki turystyczne* składa się z dwóch ogólnych części: *[pola wyszukiwania](#search)* i listy *przewodników turystycznych* z dwoma zakładkami: *[<Translate android="true" ids="shared_string_explore"/> i <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Możesz przełączać się między nimi jednym dotknięciem zakładki.
Po otwarciu *Przewodników turystycznych* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd pokaże Ci artykuły o interesujących miejscach znajdujących się w pobliżu bieżącego środka mapy. Po dotknięciu elementu z listy otwiera się [artykuł Przewodnika turystycznego](#travel-article). Na dole ekranu znajduje się przełącznik do zakładki *Zakładki*.

### Eksploruj i dodaj do zakładek {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Główny ekran przewodników turystycznych](@site/static/img/guides/travel_guides_main_screen_1.png) ![Główny ekran przewodników turystycznych 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Główny ekran przewodników turystycznych](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Główny ekran przewodników turystycznych 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

Na zakładce **Eksploruj** lub **<Translate android="true" ids="popular_destinations"/>** wyświetlanych jest 30 najlepszych artykułów o miejscach docelowych przylegających do środka ekranu (poza lokalizacją). Dotykając elementu z listy z tytułem i krótkim opisem artykułu, możesz wyświetlić pełny tekst tego artykułu.
Jeśli dotkniesz przycisku *Zakładka*, artykuł zostanie zapisany do późniejszego przeczytania i będzie dostępny w zakładce Zakładki. W zakładce *Artykuły w zakładkach* artykuły są ułożone w kolejności ich zapisania, z najnowszymi artykułami na górze.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Otwiera [artykuł podróżniczy](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Przenosi wybrany artykuł do <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Usuwa wybrany artykuł z <Translate android="true" ids="saved_articles"/>.

### Szukaj {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Pole wyszukiwania znajduje się na górze ekranu <Translate android="true" ids="shared_string_travel_guides"/>. Jeśli zaczniesz wpisywać pierwsze litery nazwy kraju, miasta lub słynnego miejsca, pod polem wyszukiwania pojawi się lista artykułów. Dotykając odpowiedniego, możesz rozpocząć czytanie.
Obok każdego wyniku wyszukiwania wyświetlane są 3 najczęściej używane języki, w których można przeczytać wybrany artykuł. Jednak popularne artykuły są dostępne w większej liczbie języków niż te 3 wymienione.

**Dodatkowe funkcje:**

- Możesz wyszukiwać specjalne atrakcje kulturalne, takie jak *turystyka Harry'ego Pottera*, *miasta duchów*, *monarchie* i inne.
- Aby usunąć historię wyszukiwania, należy użyć przycisku [<Translate android="true" ids="shared_string_options"/>](#options).

<!--
- Wyszukiwanie jest kompletne tylko po naciśnięciu &#128269; lub spacji na końcu słowa. - nie działa tak, jak powinno
-->

### Opcje {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu opcji przewodników turystycznych](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

W tym menu możesz dostosować wygląd artykułów podczas pracy offline. ZAUWAŻ, że *[pobrane](#download-articles)* przewodniki turystyczne nie zawierają obrazów. Pojawiają się one tylko wtedy, gdy przeglądasz artykuły z aktywnym połączeniem internetowym.
W menu Opcje możesz wybrać, czy chcesz zapisać obrazy w przeglądanych artykułach, aby używać ich, gdy jesteś offline. Możesz również wyczyścić istniejącą pamięć podręczną obrazów lub usunąć historię wyszukiwania (działa tylko podczas wyszukiwania w *Przewodnikach turystycznych*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Obrazy w artykułach można pobrać do użytku offline.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Czyści pamięć podręczną obrazów, aby zwolnić pamięć.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Czyści [historię wyszukiwania](#search).

## Artykuł podróżniczy {#travel-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Artykuł przewodników turystycznych](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Możesz otworzyć artykuł z sugerowanych opcji na *[zakładce Eksploruj](#explore-and-bookmark)* lub za pomocą opcji *[Szukaj](#search)*. Gdy dodasz atrakcje turystyczne zwane *[Punktami](#points)* z *artykułu Przewodnika turystycznego* do mapy OsmAnd, możesz również otworzyć artykuł za pomocą przycisku *Czytaj całość* w [sekcji opisu](../map/tracks/track-context-menu.md#description-and-info) punktu trasy.

Następujące elementy sterujące znajdują się na górze ekranu:

- Przełącznik do zmiany języka artykułu. Język można wybrać z dostępnych opcji. Domyślnie używany jest język systemowy.
- Za pomocą przycisku &#8942; możesz udostępnić artykuł znajomym. Link otwiera się w aplikacji OsmAnd, odpowiedni plik przewodników turystycznych powinien być pobrany na urządzeniu odbiorcy lub na stronie [Wikivoyage](https://www.wikivoyage.org/), jeśli odbiorca nie ma aplikacji OsmAnd lub dla urządzeń z systemem iOS.
- Dotknięcie paska nawigacyjnego otwiera *[Menu nawigacyjne przewodników turystycznych](#navigation-menu)*.

Na dole ekranu znajdują się przyciski takie jak:

- [Spis treści](#table-of-contents). Otwiera spis treści artykułu.
- [Punkty](#points). Pokazuje atrakcje turystyczne związane z artykułem na mapie.
- [Zakładka](#explore-and-bookmark). Pozwala dodać artykuł do zakładek w celu późniejszego przeczytania.

### Menu nawigacyjne {#navigation-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu zawartości przewodników turystycznych](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Aby przejść z jednego artykułu do drugiego w *Artykułach przewodnika turystycznego*, użyj **Menu nawigacyjnego**. Możesz uzyskać do niego dostęp, dotykając pola adresu nad obrazem. ZAUWAŻ, że artykuły w Przewodnikach turystycznych są pogrupowane w następujący sposób: *Kontynent → Region → Kraj → Prowincja (region) → Miasto*.
Jeśli dotkniesz strzałki w lewym górnym rogu ekranu, przejdziesz bezpośrednio do zakładki *Eksploruj* lub *Artykuły w zakładkach* (w zależności od tego, którą zakładkę otworzyłeś wcześniej).

### Spis treści {#table-of-contents}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu zawartości przewodników turystycznych](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

Większość *artykułów przewodników turystycznych* ma taką samą strukturę treści: *wprowadzenie* (obrazy i opis miejsca turystycznego) oraz *kolejne rozdziały*.

- &nbsp;*Zrozum*. Szczegóły dotyczące lokalnej kultury i zwyczajów.
- &nbsp;*Dojazd*. Szczegóły dotyczące dojazdu do niektórych miejsc i kosztów tej trasy.
- &nbsp;*Zobacz*. Lista atrakcji (muzea, miejsca historyczne itp.) z pełnymi opisami: ceny biletów, godziny otwarcia, przydatne linki i numery telefonów.
- &nbsp;*Zrób*. Miejsca do spędzania czasu.
- &nbsp;*Kup*. Miejsca na zakupy.
- &nbsp;*Jedz*. Obiekty gastronomiczne (podzielone według budżetu: budżetowe, średniej klasy, luksusowe).
- &nbsp;*Pij*. Bary i kawiarnie.
- &nbsp;*Śpij*. Zakwaterowanie podzielone według budżetu (budżetowe, średniej klasy, luksusowe).
- &nbsp;*Jedź dalej*. Najbliższe miejsca z Wikivoyage.

### Punkty {#points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Punkty przewodników turystycznych menu](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Punkty przewodników turystycznych menu](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

*Artykuły przewodników turystycznych* często zawierają atrakcje turystyczne pogrupowane tematycznie. Jednokrotne dotknięcie przycisku *Punkty* na dole *[Artykułu](#travel-article)* spowoduje dodanie wszystkich atrakcji związanych z tematem (miejsca do jedzenia, opcje zakwaterowania, lotniska, sklepy, zabytki historyczne itp.) do mapy i mogą być *[zarządzane jako ślad](#manage-as-gpx-track)*.

Domyślnie grupy atrakcji są oznaczone określonymi ikonami: kategorie *Jedz i Pij* nożem i widelcem w czerwonym kółku, *Rób i Zobacz* aparatem w zielonym kółku i inne. Możesz zarządzać grupami punktów za pomocą &#8942; jak *[folderem punktów trasy](../map/tracks/track-context-menu.md#points--waypoints)*.

:::note
Punkty w *artykułach podróżniczych* odnoszą się do punktów trasy na śladzie GPX.
Możesz również *[dodać punkty do mapy](#travel-routes)* w menu *Konfiguruj mapę*. Możesz wyświetlić je wszystkie lub wybrać konkretną kategorię.
:::


## Trasy podróży {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Alternatywnym sposobem przeglądania *Przewodników turystycznych* jest wyświetlanie ich na mapie za pomocą menu *Konfiguruj mapę*. Ta funkcja nie dotyczy możliwości udostępnianych przez OsmAnd do korzystania z Wikivoyage, dotyczy tylko śladów. Więcej informacji można znaleźć na naszym [blogu](https://osmand.net/blog/routes#generated-travel-routes).

![Menu punktów przewodników turystycznych](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Menu punktów przewodników turystycznych](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Trasy podróży i artykuły na mapie {#travel-routes-and-articles-on-the-map}

![Punkty przewodników turystycznych menu](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Punkty przewodników turystycznych menu](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

Po włączeniu wyświetlania *Tras podróży* w menu *Konfiguruj mapę*, na mapie pojawią się okręgi w różnych kolorach. Pomarańczowe reprezentują ślady tras, artykuły o trasach i niektóre punkty trasy. Dotknij konkretnej trasy, artykułu lub punktu, a następnie dotknij przycisku *Pobierz* (&#9047;), a będziesz mógł [zarządzać nimi jako śladem](#manage-as-gpx-track).

### Niestandardowe przewodniki turystyczne {#custom-travel-guides}

Zalecamy dodawanie nowych artykułów lub edycji do [Wikivoyage](https://en.wikivoyage.org/). Aktualizujemy Przewodniki turystyczne co około 6 miesięcy, a Ty możesz pobierać nowe artykuły. Możesz również stworzyć własny *Przewodnik podróży*. Jak to zrobić, opisano w dokumentacji technicznej (zobacz artykuł *[Utwórz niestandardowy przewodnik turystyczny](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Kolekcje śladów {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Zarządzaj jako ślad GPX {#manage-as-gpx-track}

![Punkty przewodników turystycznych menu 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Punkty przewodników turystycznych menu 2](@site/static/img/guides/travel_guides_articles_my_places.png)

Po dodaniu *Przewodników turystycznych* do mapy, *Artykuły podróżnicze* mogą być zapisane jako ślad GPX i zarządzane za pomocą menu *[Moje miejsca](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Mogą być wyświetlane na mapie, udostępniane, zmieniane nazwy, przenoszone do innego folderu, eksportowane lub usuwane.

- &nbsp;W *[Przeglądzie](../map/tracks/track-context-menu.md#overview)* możesz przeczytać krótki opis lub otworzyć [artykuł Przewodnika turystycznego](#travel-article) dotykając przycisku *Czytaj całość*. *Edytuj* pozwala poprawić artykuł.
- &nbsp;W sekcji *[Ślad](../map/tracks/track-context-menu.md#altitude--speed-graphs)* nie ma informacji, pliki GPX *Przewodników turystycznych* zawierają tylko punkty trasy.
- &nbsp;Pod *[Punktami](../map/tracks/track-context-menu.md#points--waypoints)* widzisz foldery z punktami pogrupowanymi według nazwy (Kup, Zrób, Pij itp.).
- &nbsp;Przycisk *[Opcje](../map/tracks/track-context-menu.md#options)* wykonuje te same funkcje co w zwykłym śladzie.

:::info
*Punkty* są przechowywane w [pliku GPX](../../technical/osmand-file-formats/osmand-gpx.md) (powszechnie używany format dla śladów) jako [punkty trasy](../map/point-layers-on-map.md#track-waypoints). Liczba punktów (punktów trasy) w śladzie jest oznaczona obok ikony &#128681; w polu śladu.
W *[menu kontekstowym śladu](../map/tracks/track-context-menu.md)* pliku GPX można znaleźć ogólne informacje o artykule, do którego należy ten ślad.
:::

## Połącz z Wikipedią {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przewodniki turystyczne połącz z Wikipedią 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Przewodniki turystyczne połącz z Wikipedią 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_wikipedia_1_ios.png) ![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

W *artykułach przewodników turystycznych* można znaleźć przydatne informacje o atrakcjach turystycznych (informacje kontaktowe, linki do stron internetowych, ceny itp.). Wiele artykułów ma przycisk *Wikipedia*, który pozwala otworzyć *[artykuł Wikipedii](../plugins/wikipedia.md)* (online lub offline) o interesującym miejscu.

W niektórych przypadkach zakładka *[Zakładki](#explore-and-bookmark)* w OsmAnd poprosi o pobranie [warstwy mapy Wikipedii](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages), aby przeglądać powiązane artykuły offline.

![Przewodniki turystyczne pobierz Wikipedię](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info UWAGA
[Wtyczka Wikipedia](../plugins/wikipedia.md) to [funkcja płatna](../purchases/index.md) aplikacji OsmAnd.
:::

## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style map)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: styczeń 2025*