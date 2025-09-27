---
source-hash: 6d287ae52b65e96bd3d314e75b2a5de4ebcf7c8de44598bc47d0b69e9c17a99e
sidebar_position: 8
title: Popularne miejsca
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


<InfoIncompleteArticle/>


## Przegląd {#overview}

Funkcja **Popularne miejsca** w OsmAnd podświetla godne uwagi punkty orientacyjne i atrakcje, wykorzystując otwarte dane strukturalne z [Wikidata](https://www.wikidata.org) i [Wikipedii](https://www.wikipedia.org/). Pomaga użytkownikom odkrywać znane miejsca dzięki wielojęzycznym opisom i zdjęciom.

Każde miejsce uwzględnione w tej funkcji jest powiązane z **identyfikatorem Wikidata**, co umożliwia OsmAnd wyświetlanie zweryfikowanych nazw, podglądów obrazów i linków do artykułów w Wikipedii. To narzędzie **nie** pokazuje wszystkich punktów OpenStreetMap (OSM). Jest ograniczone do POI z odniesieniami do Wikidata.

Obecnie wyselekcjonowana baza danych zawiera od **50 000 do 150 000 najwyżej ocenianych miejsc** na całym świecie, wybranych spośród ponad **1 miliona** obiektów Wikidata + OSM.

:::note
*To pierwsza wersja funkcji Popularne miejsca. Opinie są mile widziane na [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Popularne miejsca](@site/static/img/map/popular_places/popular_places.png) ![Popularne miejsca](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Źródła danych

**Popularne miejsca** opierają się na ustrukturyzowanych treściach z [Wikidata](https://www.wikidata.org) i [Wikipedii](https://www.wikipedia.org/).

Wyświetlane są tylko POI z połączonym **identyfikatorem Wikidata**. Te identyfikatory łączą obiekty na mapie ze zweryfikowanymi nazwami, opisami i obrazami.

Możesz wyświetlić link do Wikidata bezpośrednio w [Menu kontekstowym mapy](../map/map-context-menu.md). Dotknięcie tagu Wikidata otwiera pełną stronę obiektu w witrynie Wikidata.

Dowiedz się, jak znaleźć identyfikator Wikidata: [Wikipedia: Finding a Wikidata ID](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Jak używać {#how-to-use}

<InfoAndroidOnly/>

Funkcja **Popularne miejsca** obejmuje zarówno wyselekcjonowaną listę pobliskich punktów orientacyjnych, jak i warstwę POI opartych na Wikipedii na mapie.

Istnieją dwa główne sposoby dostępu do tej funkcji:

- **Wersja bezpłatna**  
  Dostęp przez [Wyszukiwanie](#explore-in-search) w celu przeglądania pobliskich miejsc w widoku listy.  
  *<Translate android="true" ids="android_button_seq"/>*. Przejdź do: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Wersje płatne** *(Maps+ i OsmAnd Pro)*  
  Włącz nakładkę wizualną w [Konfiguracji mapy](#enable-layer).  
  *<Translate android="true" ids="android_button_seq"/>*. Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  W tym trybie popularne POI pojawiają się bezpośrednio na mapie z miniaturami podglądu i treściami z Wikipedii.

  Możesz przełączać się między źródłami Wikipedii **online** i **offline** w ustawieniach nakładki. Dowiedz się więcej w sekcji [Włącz warstwę](#enable-layer).


## Eksploruj w wyszukiwaniu {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Tryb eksploracji](@site/static/img/map/popular_places/popular_places_search.png)  
![Tryb eksploracji](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

Sekcja **<Translate android="true" ids="popular_places_nearby"/>** wyświetla przewijaną listę najwyżej ocenianych punktów orientacyjnych w pobliżu Twojej bieżącej lokalizacji. Każdy element zawiera:

- Nazwa miejsca.
- Krótki opis.
- Tag kategorii POI.
- Odległość i kierunek.
- Miniatura obrazu (jeśli dostępna).

Dotknij **Pokaż wszystko**, aby wyświetlić pełną listę, lub **Pokaż na mapie**, aby wyświetlić wszystkie wymienione POI na mapie.

Dotknięcie dowolnego miejsca otwiera [menu kontekstowe POI](./map-context-menu.md), w którym można przeglądać zdjęcia i uzyskiwać dostęp do powiązanych [treści z Wikipedii](../plugins/wikipedia.md).

:::tip
Tryb eksploracji oparty na wyszukiwaniu działa **tylko online** w wersji bezpłatnej.  
Aby korzystać z niego **offline**, potrzebujesz subskrypcji [Maps+ lub OsmAnd Pro](../purchases/android.md) oraz pobranych [map Wikipedii](../plugins/wikipedia.md).
:::


## Włącz warstwę {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Menu popularnych miejsc](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

Funkcja **Popularne miejsca (Wikipedia)** jest dostępna w menu [Konfiguracja mapy](./configure-map-menu.md). Aby wyświetlać popularne miejsca bezpośrednio na mapie, włącz warstwę POI z danymi z Wikipedii, używając obrazów z Wikidata.

Przed użyciem tej funkcji:

- Upewnij się, że [wtyczka Wikipedia](../plugins/wikipedia.md) jest włączona.
- Pobierz dane Wikipedii dla swojego regionu, jeśli chcesz korzystać z nich w trybie offline.

### Opcje warstwy

Po włączeniu dostępne stają się następujące opcje:

- **<Translate android="true" ids="poi_osmwiki"/>** – Włącz/wyłącz POI z Wikipedii na mapie.

- **Źródło POI** – Przełączaj między:
  - *Tryb offline* (artykuły z Wikipedii muszą być pobrane).
  - *Tylko online* (wykorzystuje dane i obrazy na żywo).

- **<Translate android="true" ids="shared_string_language"/>** – Wybierz język opisów z Wikipedii.

- **<Translate android="true" ids="show_image_previews"/>** – Pokaż miniatury obrazów z Wikidata obok POI.

Dotknięcie POI na mapie otwiera [menu kontekstowe POI](./map-context-menu.md), w którym można przeglądać [zdjęcia online](#online-photos) i uzyskiwać dostęp do powiązanych [artykułów z Wikipedii](../plugins/wikipedia.md).


## Zdjęcia online {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu kontekstowe Zdjęcia online Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu kontekstowe Zdjęcia online iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Jest to sekcja w [menu kontekstowym POI](./map-context-menu.md), która wyświetla podgląd zdjęcia wybranego popularnego miejsca (Wikipedia). Możesz przewijać w poziomie, aby przeglądać dostępne zdjęcia, lub dotknąć dowolnego obrazu, aby otworzyć go w [trybie pełnoekranowym](#gallery).

Dowiedz się więcej o dodatkowych opcjach w sekcjach [Akcje](#actions) i [Galeria](#gallery).


<!-- 

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.  
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### Akcje {#actions}

W menu kontekstowym mapy Jak uzyskać dostęp:

- Dotknij przycisku **Pokaż wszystko** (Android) / **Zobacz wszystko** (iOS), aby otworzyć [galerię](#gallery) w trybie pełnoekranowym, gdzie możesz przesuwać palcem po wszystkich dostępnych zdjęciach dla wybranej lokalizacji.

- Dotknij dowolnego zdjęcia, aby wyświetlić je w [trybie pełnoekranowym](#gallery) i uzyskać dostęp do dostępnych akcji:  
  **Udostępnij**, **Szczegóły**, **Otwórz w przeglądarce** i **Pobierz**.


### Galeria {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Galerii – Android](@site/static/img/map/gallery_menu_android.png)
![Menu Galerii – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Galerii – iOS](@site/static/img/map/gallery_menu_ios.png)
![Menu Galerii – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


**Menu Galerii** może wyświetlić do **100 obrazów** związanych z wybranym punktem POI. Możesz przesuwać palcem po wszystkich dostępnych zdjęciach. Krótkie dotknięcie zdjęcia otwiera szczegółowy widok pokazujący: *Nazwa*, *Data dodania*, *Autor*, *Licencja*  

Możesz także wykonać następujące czynności na każdym zdjęciu:

- **Udostępnij**  
  Udostępnij wybrane zdjęcie za pomocą dowolnej kompatybilnej aplikacji zainstalowanej na urządzeniu (np. komunikatora, e-maila lub mediów społecznościowych). Udostępniona treść zawiera obraz i link do jego źródła (jeśli jest dostępny).

- **Szczegóły**  
  Otwórz szczegółowy widok pokazujący metadane obrazu, w tym: *Nazwa*, *Data dodania*, *Autor*, *Licencja*, *Źródło* i *Link bezpośredni*

- **Otwórz w przeglądarce**  
  Uruchom stronę źródłową obrazu (zwykle na [Wikimedia Commons](https://commons.wikimedia.org/)) w domyślnej przeglądarce. Pozwala to na wyświetlenie pełnego obrazu, informacji o licencji i powiązanych treści.

- **Pobierz**  
  Zapisz obraz w pamięci urządzenia. Pobrany obraz można znaleźć w domyślnym folderze Pobrane na urządzeniu i uzyskać do niego dostęp w trybie offline.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Wersja na Androida nie zawiera dodatkowego menu do akcji na zdjęciach.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - Opcje menu kontekstowego](@site/static/img/map/gallery_menu_ios_3.png)

W systemie **iOS** długie naciśnięcie zdjęcia otwiera menu kontekstowe z dodatkowymi akcjami:

- **Szczegóły**  
- **Otwórz w przeglądarce**  
- **Pobierz**

**Przyciski**:

- Przycisk **Udostępnij** pozwala szybko udostępnić wybrane zdjęcie.  
- **Menu z trzema kropkami** zapewnia dostęp do dodatkowych akcji, w tym przeglądania szczegółów, otwierania źródła w przeglądarce lub pobierania obrazu.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Android – Widok szczegółów](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Widok szczegółów](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

Ekran **Szczegóły** zawiera pełne metadane wybranego zdjęcia, w tym: *Nazwa*, *Data dodania*, *Autor*, *Licencja*, *Źródło* i *Link bezpośredni*


## Powiązane artykuły

- [Menu kontekstowe mapy](./map-context-menu.md)
- [Konfiguracja mapy](./configure-map-menu.md)
- [Wyszukiwanie POI](../search/search-poi.md)
- [Wtyczka Wikipedia](../plugins/wikipedia.md)





<!--
### Online Photos 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.  

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap.

#### Gallery Menu 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_3.png) 

</TabItem>

</Tabs>



On iOS, long tapping on any photo opens an additional menu with actions such as *Details*, *Open in browser*, and *Download*.

Buttons:

- The **Share** button allows you to share the selected item.  
- The **Three dots** button opens a menu with options like *Details*, *Open in browser*, and *Download*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->