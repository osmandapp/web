---
source-hash: 4d1fd6f77d3485a33ced776546c65769d6a354be721ca6e2b421c4ef414bb7e8
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

:::info Płatna funkcja
Przewodniki turystyczne to [płatna funkcja](../purchases/index.md) aplikacji OsmAnd.
:::

Wirtualne przewodniki turystyczne w OsmAnd oferują użytkownikom cenne informacje, rekomendacje i wskazówki. Pozwalają również podróżnym na dostęp do kompleksowych informacji nawigacyjnych o atrakcjach w aplikacji.

Przewodniki turystyczne OsmAnd opierają się na danych z [Wikivoyage](https://www.wikivoyage.org/), projektu społecznościowego podobnego do Wikipedii, w którym autorzy-wolontariusze tworzą aktualne artykuły.  
Informacje z Wikivoyage obejmują główne fakty o danym miejscu, transporcie, atrakcjach, zakupach i wiele więcej.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widok ogólny przewodników turystycznych](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Mapy iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Jak używać {#how-to-use}

- [Pobierz](#download-articles) *Przewodniki turystyczne*.
- Przeglądaj [artykuły](#browse-articles) o kraju, regionie, mieście, atrakcji.
    - Alternatywnie, [wyświetl artykuły i/lub punkty z przewodników turystycznych na mapie](#travel-routes) za pomocą menu Konfiguruj mapę.
    - Przeglądaj atrakcje na mapie, dodawaj je do *[Znaczników na mapie](../personal/markers.md#add--edit-markers)* lub *[Ulubionych](../personal/favorites.md#favorite-group-actions)*.
    - Używając przycisku *[Czytaj całość](#manage-as-gpx-track)*, przejdź do *[artykułu](#travel-article)* w *Przewodnikach turystycznych*.
- [Dodawaj do zakładek](#explore-and-bookmark) artykuły, aby przeczytać je później.
- Wybieraj [punkty](#points) z artykułów do odwiedzenia i dodawaj je do mapy OsmAnd.
- Uzyskaj więcej informacji o miejscach do odwiedzenia z offline'owych [artykułów Wikipedii](#combine-with-wikipedia).
- [Zbuduj trasę](../navigation/setup/route-navigation.md#set-destinations) do wybranych atrakcji turystycznych lub swobodny spacer między punktami.

:::note
Artykuły *Przewodników turystycznych* są przechowywane w OsmAnd jako ślady GPX z punktami trasy. Po dodaniu tych śladów do mapy (zobacz sekcje *[Punkty](#points)* lub *[Trasy podróży](#travel-routes)* tego artykułu), możesz nimi zarządzać za pomocą menu *[Moje miejsca](../personal/myplaces.md)*.
:::

### Pobieranie artykułów {#download-articles}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Menu pobierania przewodników turystycznych](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Menu Mapy iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Zanim zaczniesz korzystać z przewodników turystycznych, musisz je pobrać za pomocą [menu Pobierz mapy](../start-with/download-maps.md#maps-and-resources) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Artykuły są pogrupowane według regionów: *Afryka, Azja, Australia i Oceania, Ameryka Środkowa, Europa, Ameryka Północna, Rosja i Ameryka Południowa*, więc nie musisz pobierać przewodników dla pojedynczego miasta czy kraju.  
Zapisując wymagane regiony na swoim urządzeniu, możesz przeglądać artykuły w OsmAnd nawet będąc za granicą lub poza zasięgiem sieci komórkowej.

:::note
Oprócz przewodników po krajach, regionach czy miastach, można znaleźć przewodniki po miejscach z filmów, książek, gier komputerowych, miejscach pamięci wielkich ludzi i tak dalej.
Istnieją również specjalistyczne przewodniki, takie jak lista Globalnej Sieci Geoparków UNESCO czy największe i najbardziej złożone międzynarodowe lotniska na świecie.
:::

## Przeglądaj artykuły {#browse-articles}

Ekran *Przewodniki turystyczne* składa się z dwóch głównych części: [*pola wyszukiwania*](#search) oraz listy *przewodników turystycznych* z dwiema zakładkami: *[<Translate android="true" ids="shared_string_explore"/> i <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Możesz przełączać się między nimi jednym dotknięciem zakładki.
Po otwarciu *Przewodników turystycznych* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd pokaże Ci artykuły o interesujących miejscach znajdujących się w pobliżu współrzędnych geograficznych aktualnego centrum mapy. Po dotknięciu elementu z listy, otworzy się [Artykuł podróżniczy](#travel-article). Na dole ekranu znajduje się przełącznik do zakładki *Zakładki*.  

### Odkrywaj i dodawaj do zakładek {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Główny ekran przewodników turystycznych](@site/static/img/guides/travel_guides_main_screen_1.png) ![Główny ekran przewodników turystycznych 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Główny ekran przewodników turystycznych](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Główny ekran przewodników turystycznych 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

Na zakładce **Odkrywaj** lub **<Translate android="true" ids="popular_destinations"/>** znajduje się lista 30 najpopularniejszych artykułów o miejscach docelowych w pobliżu centrum ekranu (niezależnie od lokalizacji). Dotykając elementu z listy z tytułem i krótkim opisem artykułu, możesz wyświetlić pełny tekst tego artykułu.  
Jeśli dotkniesz przycisku *Zakładka*, artykuł zostanie zapisany do późniejszego przeczytania i będzie dostępny w zakładce Zakładki. W zakładce *Artykuły w zakładkach* artykuły są ułożone w kolejności ich zapisywania, z najnowszymi na górze.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Otwiera [Artykuł podróżniczy](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Przenosi wybrany artykuł do <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Usuwa wybrany artykuł z <Translate android="true" ids="saved_articles"/>.

### Wyszukiwanie {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Pole wyszukiwania znajduje się na górze ekranu <Translate android="true" ids="shared_string_travel_guides"/>. Jeśli zaczniesz wpisywać pierwsze litery kraju, miasta lub znanego miejsca, pod polem wyszukiwania pojawi się lista artykułów. Dotykając potrzebnego, możesz zacząć czytać.  
Obok każdego wyniku wyszukiwania wymienione są 3 najczęściej używane języki, w których można przeczytać wybrany artykuł. Jednak popularne artykuły są dostępne w większej liczbie języków niż 3 wymienione.

**Dodatkowe funkcje:**  

- Możesz wyszukiwać specjalne atrakcje kulturalne, takie jak *turystyka śladami Harry'ego Pottera*, *miasta duchów*, *monarchie* i inne.
- Aby usunąć historię wyszukiwania, należy użyć przycisku [<Translate android="true" ids="shared_string_options"/>](#options).

<!-- 
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
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

W tym menu można dostosować wygląd artykułów podczas pracy w trybie offline. UWAGA, że *[pobrane](#download-articles)* przewodniki turystyczne nie zawierają obrazów. Pojawiają się one tylko podczas przeglądania artykułów z aktywnym połączeniem internetowym.  
W menu Opcje można wybrać, czy zapisywać obrazy w przeglądanych artykułach, aby używać ich w trybie offline. Można również wyczyścić istniejącą pamięć podręczną obrazów lub usunąć historię wyszukiwania (działa tylko podczas wyszukiwania w *Przewodnikach turystycznych*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Obrazy w artykułach można pobrać do użytku w trybie offline.  
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Czyści pamięć podręczną obrazów, aby zwolnić pamięć.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Czyści [historię wyszukiwania](#search).

## Artykuł podróżniczy {#travel-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Artykuł przewodnika turystycznego](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Możesz otworzyć artykuł z sugerowanych opcji na karcie *[Odkrywaj](#explore-and-bookmark)* lub za pomocą opcji *[Wyszukaj](#search)*. Po dodaniu atrakcji turystycznych zwanych *[Punktami](#points)* z *Artykułu przewodnika turystycznego* do mapy OsmAnd, możesz również otworzyć artykuł za pomocą przycisku *Czytaj całość* w sekcji [opis](../map/tracks/track-context-menu.md#description-and-info) punktu trasy.

Następujące elementy sterujące znajdują się na górze ekranu:

- Przełącznik do zmiany języka artykułu. Język można wybrać z dostępnych opcji. Domyślnie używany jest język systemowy.
- Za pomocą przycisku &#8942; możesz udostępnić artykuł znajomym. Link otwiera się w aplikacji OsmAnd, odpowiedni plik przewodnika turystycznego powinien być pobrany na urządzeniu odbiorcy lub na stronie [Wikivoyage](https://www.wikivoyage.org/), jeśli odbiorca nie ma aplikacji OsmAnd lub dla urządzeń z systemem iOS.
- Dotknięcie paska nawigacyjnego otwiera *[Menu nawigacji przewodników turystycznych](#navigation-menu)*.

Na dole ekranu znajdują się przyciski takie jak:

- [Spis treści](#table-of-contents). Otwiera spis treści artykułu.
- [Punkty](#points). Pokazuje atrakcje turystyczne związane z artykułem na mapie.
- [Zakładka](#explore-and-bookmark). Pozwala dodać artykuł do zakładek do późniejszego przeczytania.  


### Menu nawigacji {#navigation-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu spisu treści przewodników turystycznych](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Aby przejść z jednego artykułu do drugiego w *Artykułach przewodników turystycznych*, użyj **Menu nawigacji**. Możesz do niego uzyskać dostęp, dotykając pola adresu nad obrazem. UWAGA, że artykuły w Przewodnikach turystycznych są pogrupowane w następujący sposób: *Kontynent → Region → Kraj → Prowincja (region) → Miasto*.
Jeśli dotkniesz strzałki w lewym górnym rogu ekranu, przejdziesz bezpośrednio do karty *Odkrywaj* lub *Artykuły w zakładkach* (w zależności od tego, którą kartę otworzyłeś wcześniej).


### Spis treści {#table-of-contents}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu spisu treści przewodników turystycznych](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

Większość *Artykułów przewodników turystycznych* ma tę samą strukturę treści: *wprowadzenie* (obrazy i opis miejsca turystycznego) oraz *kolejne rozdziały*.

- &nbsp;*Zrozum*. Szczegóły dotyczące lokalnej kultury i zwyczajów.
- &nbsp;*Dojazd*. Szczegóły dotyczące dojazdu do niektórych miejsc i kosztów tej trasy.
- &nbsp;*Zobacz*. Lista atrakcji (muzea, miejsca historyczne itp.) z pełnymi opisami: ceny biletów, godziny otwarcia, przydatne linki i numery telefonów.
- &nbsp;*Zrób*. Miejsca do spędzania czasu.
- &nbsp;*Kup*. Miejsca na zakupy.
- &nbsp;*Jedz*. Obiekty gastronomiczne (podzielone według budżetu: tanio, średnio, drogo).
- &nbsp;*Pij*. Bary i kawiarnie.
- &nbsp;*Śpij*. Noclegi podzielone według budżetu (tanio, średnio, drogo).
- &nbsp;*Dalej*. Najbliższe miejsca z Wikivoyage.

### Punkty {#points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu punktów przewodników turystycznych](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Menu punktów przewodników turystycznych](@site/static/img/guides/travel_guides_articles_three_dots_point.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

*Artykuły przewodników turystycznych* często zawierają atrakcje turystyczne pogrupowane tematycznie. Po jednokrotnym dotknięciu przycisku *Punkty* na dole *[Artykułu](#travel-article)*, wszystkie atrakcje związane z tematem (miejsca do jedzenia, opcje zakwaterowania, lotniska, sklepy, zabytki historyczne itp.) zostaną dodane do mapy i można nimi *[zarządzać jako śladem](#manage-as-gpx-track)*.  

Domyślnie grupy atrakcji są oznaczone określonymi ikonami: kategorie *Jedz i Pij* nożem i widelcem w czerwonym kółku, *Zrób i Zobacz* aparatem w zielonym kółku i inne. Możesz zarządzać grupami punktów za pomocą &#8942; jak *[folderem punktów trasy](../map/tracks/track-context-menu.md#points--waypoints)*.  

:::note
Punkty w *Artykułach podróżniczych* odnoszą się do punktów trasy na śladzie GPX.  
Możesz również *[dodać punkty do mapy](#travel-routes)* w menu *Konfiguruj mapę*. Możesz wyświetlić je wszystkie lub wybrać określoną kategorię.  
:::


## Trasy podróży {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Alternatywnym sposobem przeglądania *Przewodników turystycznych* jest wyświetlanie ich na mapie za pomocą menu *Konfiguruj mapę*. Ta funkcja nie dotyczy możliwości oferowanej przez OsmAnd do korzystania z Wikivoyage, dotyczy ona tylko śladów. Więcej można przeczytać na naszym [blogu](https://osmand.net/blog/routes#generated-travel-routes).

![Menu punktów przewodników turystycznych](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Menu punktów przewodników turystycznych](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Trasy podróży i artykuły na mapie {#travel-routes-and-articles-on-the-map}

![Menu punktów przewodników turystycznych](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Menu punktów przewodników turystycznych](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)  

Po włączeniu wyświetlania *Tras podróży* w menu *Konfiguruj mapę*, na mapie pojawią się okręgi w różnych kolorach. Pomarańczowe reprezentują ślady tras, artykuły o trasach i niektóre punkty trasy. Dotknij określonej trasy, artykułu lub punktu, a następnie dotknij przycisku *Pobierz* (&#9047;), a będziesz mógł [zarządzać nimi jako śladem](#manage-as-gpx-track).

### Niestandardowe przewodniki turystyczne {#custom-travel-guides}

Zalecamy dodawanie nowych artykułów lub edycji do [Wikivoyage](https://en.wikivoyage.org/). Aktualizujemy Przewodniki turystyczne co około 6 miesięcy i można pobrać nowe artykuły. Możesz również stworzyć własny *Przewodnik turystyczny*. Jak to zrobić, opisano w dokumentacji technicznej (zobacz artykuł *[Tworzenie niestandardowego przewodnika turystycznego](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Zarządzaj jako ślad GPX {#manage-as-gpx-track}

![Menu punktów przewodników turystycznych 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Menu punktów przewodników turystycznych 2](@site/static/img/guides/travel_guides_articles_my_places.png)  

Po dodaniu *Przewodników turystycznych* do mapy, *Artykuły podróżnicze* można zapisać jako ślad GPX i zarządzać nimi za pomocą menu *[Moje miejsca](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Można je wyświetlać na mapie, udostępniać, zmieniać nazwę, umieszczać w innym folderze, eksportować lub usuwać.  

- &nbsp;W *[Przeglądzie](../map/tracks/track-context-menu.md#overview)* można przeczytać krótki opis lub otworzyć [Artykuł przewodnika turystycznego](#travel-article), dotykając przycisku *Czytaj całość*. *Edytuj* pozwala na poprawienie artykułu.
- &nbsp;W sekcji *[Ślad](../map/tracks/track-context-menu.md#altitude--speed-graphs)* nie ma informacji, pliki GPX *Przewodników turystycznych* zawierają tylko punkty trasy.  
- &nbsp;W sekcji *[Punkty](../map/tracks/track-context-menu.md#points--waypoints)* widać foldery z punktami pogrupowanymi według nazwy (Kup, Zrób, Pij itd.).
- &nbsp;Przycisk *[Opcje](../map/tracks/track-context-menu.md#options)* pełni te same funkcje, co w przypadku zwykłego śladu.

:::info
*Punkty* są przechowywane w [pliku GPX](../../technical/osmand-file-formats/osmand-gpx.md) (powszechnie używanym formacie dla śladów) jako [Punkty trasy](../map/point-layers-on-map.md#track-waypoints). Liczba punktów (punktów trasy) zawartych w śladzie jest oznaczona obok ikony &#128681; w polu śladu.  
W *[menu kontekstowym śladu](../map/tracks/track-context-menu.md)* pliku GPX można znaleźć ogólne informacje o artykule, do którego należy ten ślad.  
:::

## Połącz z Wikipedią {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Połączenie przewodników turystycznych z Wikipedią 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Połączenie przewodników turystycznych z Wikipedią 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_wikipedia_1_ios.png)  ![Menu wyszukiwania przewodników turystycznych](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

W *Artykułach przewodników turystycznych* można znaleźć przydatne informacje o atrakcjach turystycznych (dane kontaktowe, linki internetowe, ceny itp.). Wiele artykułów ma przycisk *Wikipedia*, który pozwala otworzyć *[artykuł Wikipedii](../plugins/wikipedia.md)* (online lub offline) o danym miejscu.  

W niektórych przypadkach, *[zakładka Zakładki](#explore-and-bookmark)* OsmAnd zaproponuje pobranie [warstwy mapy Wikipedii](../plugins/wikipedia.md#download-wikipedia-packages), aby przeglądać powiązane artykuły w trybie offline.

![Pobieranie Wikipedii dla przewodników turystycznych](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info UWAGA
[Wtyczka Wikipedia](../plugins/wikipedia.md) jest [płatną funkcją](../purchases/index.md) aplikacji OsmAnd.
:::

## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)