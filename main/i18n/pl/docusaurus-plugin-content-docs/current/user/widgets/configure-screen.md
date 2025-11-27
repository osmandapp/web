---
source-hash: fdd12adf291a5cea20dd8e7dbadf1d71cf7c14eada5b2f809e40ee69e559cbd6
sidebar_position: 1
title:  Konfiguracja ekranu
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

Menu **Konfiguracja ekranu** w OsmAnd pozwala dostosować interfejs mapy poprzez dodawanie i rozmieszczanie widżetów, przycisków i szybkich akcji na wielu panelach.

Możesz:

- Dodawać widżety [informacyjne](../widgets/info-widgets.md), [nawigacyjne](../widgets/nav-widgets.md) i [związane ze znacznikami](../widgets/markers.md).
- Dodawać lub edytować [Szybkie akcje](../widgets/quick-action.md), [Przyciski niestandardowe](../widgets/quick-action.md#custom-buttons) i [Przyciski domyślne](../widgets/map-buttons.md).
- Organizować widżety w panelach (górnym, dolnym, lewym, prawym, środkowym).
- Tworzyć wiele **stron** w panelach bocznych, wybierać rozmiar widżetów.
- Wybierać wysokość wiersza i przełączać ikony widżetów.

Wszystkie widżety są [zależne od profilu](../personal/profiles.md) — każdy profil ma swój własny układ, kolejność, widoczność i ustawienia.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## Panele widżetów {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Konfiguracja ekranu](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Konfiguracja ekranu](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd pozwala na organizację interfejsu mapy za pomocą konfigurowalnych paneli widżetów.  
Możesz dodawać, zmieniać kolejność, grupować i usuwać widżety w następujących panelach:

- **Panel górny**
- **Panel dolny**
- **Panel lewy**
- **Panel prawy**

Każdy panel obsługuje różne zachowania układu:

- **Panele górny i dolny** wyświetlają widżety w wierszach. Możesz umieścić jeden lub dwa widżety w wierszu i w razie potrzeby dodać wiele wierszy.
- **Panele lewy i prawy** obsługują wiele stron. Możesz grupować widżety na osobnych stronach i przełączać się między nimi.


### Katalog widżetów {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Widżety nawigacyjne:***  

- [Namiar](../widgets/nav-widgets.md#bearing-widget).  
    Ten zestaw pokazuje bezwzględny lub względny namiar na cel w jednostkach kątowych.  
    Zawiera 3 widżety: *Namiar względny*, *Namiar magnetyczny*, *Namiar rzeczywisty*.

- [Profil wysokości](../widgets/nav-widgets#elevation-widget) (*Tylko góra/dół*, *Tylko Android*).  
    Wyświetla profil wysokości i nachylenie trasy.

- [Pasy ruchu](../widgets/nav-widgets#lanes) (*Tylko góra/dół*).  
    Wizualne prowadzenie po pasach ruchu.

- [Pasek znaczników mapy](../widgets/markers.md#configure-marker-widgets) (*Tylko góra/dół*).  
    Pokazuje odległość/kierunek do zapisanych znaczników.  
    Możliwość konfiguracji dla 1 lub 2 znaczników.

- [Punkt nawigacyjny](../widgets/nav-widgets.md#navigation-points).  
    Zestaw pokazuje pozostałą odległość do celu, punktu pośredniego, czas przybycia do punktu pośredniego lub czas podróży dla obliczonej trasy.  
    Zawiera 4 widżety: [Odległość do celu](../widgets/nav-widgets.md#distance-to-destination), [Odległość do punktu pośredniego](../widgets/nav-widgets.md#distance-to-intermediate), [Czas do punktu pośredniego](../widgets/nav-widgets.md#time-to-intermediate), [Czas do celu](../widgets/nav-widgets.md#time-to-destination).

- [Manewry na trasie](../widgets/nav-widgets.md#next-turn) (*Tylko panel lewy/prawy*).  
    Ten zestaw jest aktywowany podczas nawigacji i pokazuje odległość oraz strzałkę do następnego manewru.  
    Zawiera 3 widżety: *Następny zakręt*, *Następny zakręt (mały)*, *Drugi następny zakręt*.

- [Ograniczenie prędkości](../widgets/nav-widgets.md#speed-limit).  
    Wyświetla aktualne ograniczenie prędkości na drodze.

- [Prędkościomierz](../widgets/info-widgets.md#speedometer).  
    Pokazuje aktualną prędkość na podstawie danych GPS oraz ograniczenie prędkości na podstawie danych z [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Nazwa ulicy](../widgets/nav-widgets#street-name) (*Tylko góra/dół*).  
    Wyświetla bieżącą lub nadchodzącą ulicę.

<br/>

***Widżety informacyjne:***

- [Wysokość](../widgets/info-widgets.md#altitude-widgets).  
    Zestaw wyświetla wysokość nad poziomem morza dla bieżącej lokalizacji lub dla bieżącego centrum mapy.  
    Zawiera 2 widżety: *Wysokość: bieżąca lokalizacja*, *Wysokość: centrum mapy*.

- [Średnia prędkość](../widgets/info-widgets.md#average-speed).  
    Pokazuje średnią prędkość bieżącej podróży.

- [Poziom baterii](../widgets/info-widgets.md#battery-level).  
    Wyświetla poziom naładowania baterii urządzenia.

- [Widżety współrzędnych](../widgets/info-widgets#coordinates-widget) (*Tylko góra/dół*).  
    Ten zestaw wyświetla współrzędne geograficzne bieżącej geolokalizacji.  
    Zawiera 2 widżety: *Współrzędne: centrum mapy*, *Współrzędne: bieżąca lokalizacja*.

- [Bieżąca prędkość](../widgets/info-widgets.md#current-speed).  
    Wyświetla prędkość z czujnika GPS.

- [Bieżący czas](../widgets/info-widgets.md#current-time).  
    Wyświetla bieżący czas systemowy.

- [Współczynnik schodzenia](../widgets/info-widgets.md#glide-ratio).  
    Widżety pokazują współczynnik schodzenia do celu oraz średni współczynnik schodzenia dla bieżącego lotu.  
    Zawiera 2 widżety: *Współczynnik schodzenia do celu*, *Średni współczynnik schodzenia*.

- [Informacje GPS](../widgets/info-widgets.md#gps-info) (*Tylko Android*).  
    Pokazuje liczbę wykrytych satelitów.

- [Znaczniki mapy](../widgets/markers.md).  
    Zestaw pokazuje odległość lub szacowany czas przybycia (ETA) dla pierwszych dwóch znaczników na [liście](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    Zawiera 2 widżety: *Pierwszy znacznik*, *Drugi znacznik*.

- [Linijka promienia](../widgets/info-widgets.md#radius-ruler).  
    Pokazuje odległość między Twoją lokalizacją a punktem na mapie, otoczonym przez narzędzie [Linijka promienia](../widgets/radius-ruler.md).

- [Wschód, zachód słońca](../widgets/info-widgets.md#sun-position).  
    Pokazuje czas następnego wschodu lub zachodu słońca dla centrum mapy.  
    Zawiera 2 widżety: *Wschód słońca*, *Zachód słońca*.

<br/>

***Widżety oparte na wtyczkach:***  

- [Notatki audio/wideo](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Szybki dostęp do nagrywania multimediów.  
    Zawiera 4 widżety: *Na żądanie*, *Nagraj dźwięk*, *Nagraj wideo*, *Zrób zdjęcie*.

- [Widżety deweloperskie](../widgets/info-widgets.md#developer-widgets).  
    Wyświetla opcjonalne informacje.  
    Zawiera 5 widżetów: *FPS renderowania mapy*, *Nachylenie kamery*, *Wysokość kamery*, *Poziom powiększenia*, *Odległość od kamery do celu*, *Dostępna pamięć RAM*.  

- [Widżety czujników zewnętrznych](../widgets/info-widgets.md#external-sensors-widgets).  
    Zestaw pomaga śledzić dane z czujników BLE/ANT+ w czasie rzeczywistym.  
    Zawiera 6 widżetów: *Tętno*, *Moc roweru* (*Tylko Android*), *Kadencja roweru*, *Prędkość roweru*, *Dystans roweru*, *Temperatura*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Otwiera aplikację Mapillary do przeglądania zdjęć na poziomie ulicy.

- [Status OsmAnd Tracker](../widgets/info-widgets.md#tracker-widget).  
    Szybki dostęp do aplikacji [OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Widżet parkowania](../widgets/info-widgets.md#parking-widget).  
    Odległość od środka ekranu do zapisanej lokalizacji parkingu.

- [Nagrywanie trasy](../widgets/info-widgets.md#trip-recording-widgets).  
    Uruchamia i zatrzymuje nagrywanie śladu oraz wyświetla dane nagrywania śladu.  
    Zawiera 4 widżety: *Dystans*, *Czas trwania*, *Podjazd*, *Zjazd*.

- [Pogoda](../widgets/info-widgets.md#weather-widgets).  
    Wyświetla szczegółowe informacje o pogodzie.  
    Zawiera 5 widżetów: *Temperatura*, *Ciśnienie powietrza*, *Wiatr*, *Zachmurzenie*, *Opady*.

:::note Widżety zależne od panelu

- Dostępne tylko w **panelach górnym i dolnym** i muszą być umieszczone w osobnych wierszach: *Widżety współrzędnych, Widżet profilu wysokości, Widżet pasów ruchu, Pasek znaczników mapy, Widżet nazwy ulicy*.
- Dostępne tylko w **panelach lewym i prawym**: *Manewry na trasie*.

:::


### Wiersze {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



Funkcja **Tryb wierszy** pozwala na dodanie dowolnej liczby wierszy do paneli górnego i dolnego. Możesz wyświetlać wiele widżetów w jednym wierszu, zwiększając ilość widocznych informacji.

***Jak konfigurować wiersze:***

- **Dodaj widżety**: Dotknij przycisku *Plus* (Android) lub *Dodaj widżet* (iOS), a następnie wybierz z listy dostępnych widżetów.
- **Zmień kolejność widżetów**: Dotknij przycisku *Ołówek* (Android) lub *Edytuj* (iOS), aby zmienić układ widżetów.
- **Dodaj wiersze**: Dotknij przycisku *Dodaj wiersz*, aby utworzyć nowe wiersze dla swoich widżetów.
- **Przenieś widżety**: Przeciągnij widżety między różnymi wierszami.
- **Dostęp do ustawień widżetu**: Dotknij ikony *"i"* (Android) lub strzałki *">"* (iOS), aby otworzyć ustawienia widżetu.
- **Zapisz zmiany**: Dotknij *Zastosuj* (Android) lub *Gotowe* (iOS), aby zapisać układ.


#### Typy i ograniczenia widżetów {#widget-types-and-restrictions}

Tryb ten pozwala na dodanie **więcej niż jednego widżetu w jednym wierszu** na panelach górnym i dolnym, aby wyświetlić tyle informacji, ile potrzeba.  

- **Widżety złożone**. W jednym wierszu można dodać tylko jeden widżet złożony. Należą do nich:
    - [Pasek znaczników mapy (*Tylko Android*)](../widgets/markers.md#configure-marker-widgets)
    - [Nazwa ulicy](../widgets/nav-widgets#street-name)
    - [Widżety współrzędnych](../widgets/info-widgets#coordinates-widget)
    - [Pasy ruchu](../widgets/nav-widgets#lanes)
    - [Profil wysokości (*Tylko Android*)](../widgets/nav-widgets#elevation-widget)
    - [Manewry na trasie](../widgets/nav-widgets.md#next-turn)

- **Widżety proste**. W jednym wierszu można dodać wiele prostych widżetów. Widżety te mogą wyświetlać *Nazwę*, *Jednostki miary*, *Wartość* i *Ikonę*. Tekst w prostych widżetach jest automatycznie obramowany, aby zapewnić czytelność na tle różnych map w trybie przezroczystego panelu.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Obramowanie widżetu Android](@site/static/img/widgets/simple_widgets_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![Obramowanie widżetu iOS](@site/static/img/widgets/simple_widgets_ios.png) 

</TabItem>

</Tabs>


### Strony {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Edytuj → Dodaj stronę*  

![Strona widżetu](@site/static/img/widgets/widget_page_1_andr.png) ![Strona widżetu](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Edytuj → Dodaj stronę*

![Strona widżetu](@site/static/img/widgets/widget_page_1_ios.png) ![Strona widżetu](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Widżety w prawym i lewym panelu można grupować w **Strony**. Funkcja **Tryb stron** pozwala na dodanie 5 stron do lewego i prawego panelu.

***Jak konfigurować strony:***

- **Dodaj stronę**. Przejdź do ustawień panelu lewego/prawego i dotknij *Edytuj → Dodaj stronę*.
- **Organizuj widżety według stron**. Ta funkcja jest przydatna, gdy potrzebne są różne zestawy widżetów do różnych zadań, takich jak nawigacja w porównaniu z przeglądaniem mapy.
- Strony pozwalają tworzyć **zestawy widżetów** dla określonych scenariuszy, poprawiając przepływ pracy i zmniejszając bałagan.


## Ustawienia widżetu {#widget-settings}

![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Opcje rozmiaru widżetu** (*dla wszystkich paneli*):  
    Możesz dostosować rozmiar **Prostych widżetów** w **panelach górnym, dolnym, lewym i prawym**:

    - **Mały**. Idealny do kompaktowych wyświetlaczy, oszczędzając więcej miejsca na ekranie dla map.
    - **Średni** (*domyślny rozmiar widżetu*). Równoważy widoczność i wykorzystanie przestrzeni.
    - **Duży**. Zapewnia większe, bardziej widoczne informacje w widżecie.  

2. **Ukrywanie ikon widżetów** (*dla paneli górnego i dolnego*):

    - Poprawia czytelność i maksymalizuje przestrzeń na ważne dane.
    - Szczególnie przydatne przy wyświetlaniu wielu widżetów w tym samym **wierszu**.

3. **Ukrywanie etykiet tekstowych widżetów**:

    - Automatycznie ukrywa etykiety tekstowe, aby zachować pełną widoczność informacji liczbowych w kompaktowych układach.
    - Pomaga utrzymać czysty i czytelny układ widżetów, gdy przestrzeń jest ograniczona.   

4. **Indywidualny rozmiar dla różnych wierszy** (*dla wszystkich paneli*):

    - Widżety można indywidualnie dopasowywać, dostosowując rozmiar wiersza i kolumny.
    - **UWAGA:** Zmiana rozmiaru jednego widżetu w wierszu/kolumnie spowoduje zmianę rozmiaru wszystkich widżetów w tym wierszu/kolumnie.

5. **Aby zmienić rozmiar widżetu i widoczność ikony:**

    - Wybierz widżet, który już dodałeś do panelu.  
    - Dotknij ikony *Ustawienia* po prawej stronie pola widżetu.
    - Dotknij ustawienia *Rozmiar* i wybierz jeden z dostępnych rozmiarów.
    - Przełącz na pozycję Wyłączone w polu *Pokaż ikonę*.


## Dostosowywanie paneli {#panels-customization}

### Menu kontekstowe widżetu {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu kontekstowe widżetu](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu kontekstowe widżetu](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

**Menu kontekstowe widżetu** zapewnia szybki sposób zarządzania i konfigurowania widżetów bezpośrednio z ekranu mapy. Możesz uzyskać do niego dostęp poprzez ***długie dotknięcie*** dowolnego widżetu, aby dostosować układ widżetów bez opuszczania mapy.


- **Dodaj widżet po prawej/lewej** (tylko dla *paneli górnego i dolnego*)
    - Wybierz pozycję dla nowego widżetu względem bieżącego.
    - Wybierz widżet z listy [Dostępne widżety](#widgets-catalog).

- **Dodaj widżet powyżej/poniżej** (tylko dla *paneli lewego i prawego*)
    - Wybierz, czy umieścić nowy widżet powyżej, czy poniżej bieżącego widżetu.
    - Dotknij wymaganego widżetu na liście, aby dodać go w określonym miejscu.

- **Ustawienia**
    - Dostęp do ustawień widżetu (jeśli są dostępne), aby dostosować jego wygląd lub zachowanie.

- **Usuń**
    - Usuń widżet z panelu.
    - Monit o potwierdzenie zapewnia, że działanie jest zamierzone.

- **Zresetuj średnią prędkość** (przykład *akcji specyficznych dla widżetu*)
    - Dostępne dla widżetu [Średnia prędkość](../widgets/info-widgets.md#average-speed).
    - Długie dotknięcie, aby natychmiast zresetować wartość prędkości podczas podróży.


### Kopie widżetów {#copies-of-widgets}

*Menu OsmAnd → Konfiguracja ekranu → Widżety → Panel*  

![Duplikat widżetu](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd pozwala na dodawanie wielu instancji tego samego widżetu do różnych paneli lub stron. Ta funkcja jest szczególnie przydatna, gdy potrzebujesz spójnych informacji w różnych widokach lub profilach.  

***Jak duplikować widżety:***

- **Dodaj widżet**. Przejdź do: *Menu OsmAnd → Konfiguracja ekranu → Widżety → Panel →* **Dodaj** *widżet*.
- **Duplikuj za pomocą menu kontekstowego**. Dotknij widżetu i wybierz **Duplikuj** z listy akcji.
- **Metoda alternatywna**. Wybierz ten sam widżet z listy *Dostępne widżety* i dotknij *Dodaj*.


### Przenieś lub usuń {#move-or-delete}

*Menu OsmAnd → Konfiguracja ekranu → Widżety → Panel*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



Możesz zmieniać układ lub usuwać widżety z ekranu aplikacji za pomocą trybu **Edycja**.  

***Jak przenieść widżet:***

- Przejdź do: *Menu OsmAnd → Konfiguracja ekranu → Widżety → Panel → przycisk Edytuj*.
- Długo dotknij **ikony po prawej stronie** widżetu.
- Przeciągnij go na wymaganą pozycję na liście widżetów.

***Jak usunąć widżet:***  

- Postępuj tak samo jak powyżej.
- Dotknij **ikony minusa** po lewej stronie nazwy widżetu.
- Potwierdź usunięcie po wyświetleniu monitu.


## Przyciski {#buttons}

### Przyciski niestandardowe {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Strona widżetu](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Strona widżetu](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Szybka akcja (Przyciski niestandardowe)** pozwala na dodanie listy pojedynczych akcji ze wszystkich dostępnych [Szybkich akcji](../widgets/quick-action.md#custom-buttons). Akcje te mogą być przypisane do jednego lub więcej przycisków widżetów na ekranie mapy. Przyciski niestandardowe zapewniają szybki dostęp do często używanych akcji.

### Przyciski domyślne {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Strona widżetu](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Strona widżetu](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. **Przyciski domyślne** pozwalają dostosować, które predefiniowane przyciski mapy są widoczne na ekranie mapy. Możesz ukryć lub pokazać następujące przyciski:

    - [Tryb 3D](../widgets/map-buttons.md#3d-mode). Dla iOS przycisk jest zawsze dostępny. Dla Androida pojawia się na liście i jest dostępny do ustawienia, jeśli wybrany jest silnik renderowania mapy [Wersja 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

    - [Kompas](../widgets/map-buttons.md#display-options). Wskazuje, jak mapa jest zorientowana na urządzeniu.  
    3 widoki: *Zawsze widoczny*, *Zawsze ukryty*, *Widoczny, jeśli mapa jest obrócona*.

    - [Konfiguruj mapę](../map/configure-map-menu.md). Dostęp do opcji modyfikacji stylu mapy, warstw i dodatkowych ustawień.

    - [Menu](../widgets/map-buttons.md#main-menu). Otwiera główne menu aplikacji, dając dostęp do wszystkich funkcji.

    - [Moja lokalizacja](../widgets/map-buttons.md#my-location-and-zoom). Centruje mapę na Twojej bieżącej pozycji.

    - [Nawigacja](../widgets/map-buttons.md#directions). Niezbędne do planowania trasy i rozpoczynania nawigacji.

    - [Szukaj](../widgets/map-buttons.md#search). Otwiera narzędzie wyszukiwania do znajdowania lokalizacji.

    - [Powiększ / pomniejsz](../widgets/map-buttons.md#my-location-and-zoom). Dostosowuje poziom powiększenia mapy, aby pokazać więcej lub mniej szczegółów.

2. **Menu z trzema kropkami** na ekranie Przycisków domyślnych zawiera takie akcje jak:

    - *Resetuj do domyślnych*. Pozwala przywrócić ustawienia przycisków do ich pierwotnego wyglądu.
    - *Kopiuj z innego profilu*. Wybierz z oferowanej listy profil, z którego chcesz skopiować ustawienia przycisków.

3. **Wygląd przycisku domyślnego** (*tylko Android*) oferuje różnorodne opcje dostosowywania tego typu przycisków. Aby zmodyfikować wygląd przycisku, dotknij wymaganego przycisku z listy i wybierz opcję [Wygląd](#button-appearance).


### Wygląd przycisku {#button-appearance}

<InfoAndroidOnly/>

![Wygląd przycisku](@site/static/img/widgets/button_appearance_settings_andr.png)

Funkcja *Wygląd przycisku* umożliwia pełne dostosowanie wyglądu przycisków w interfejsie mapy. Te opcje dostosowywania są dostępne zarówno dla *Szybkiej akcji (Przyciski niestandardowe)*, jak i *Przycisków domyślnych*, zapewniając kompleksową kontrolę nad wyglądem interfejsu mapy i umożliwiając precyzyjne dostosowanie projektu przycisków.

***Opcje dostosowywania***:

- **Ikona**. Wybierz z listy ikon, które reprezentują już dodane akcje, co ułatwia identyfikację funkcji na pierwszy rzut oka.
- **Promień narożnika**. Dostosuj to ustawienie, aby zmienić kształt przycisku, od ostrych, kwadratowych narożników po gładkie, zaokrąglone krawędzie.
- **Rozmiar**. Wybierz rozmiar przycisku, który najlepiej pasuje do Twojego ekranu i wyróżnia się w razie potrzeby. W przypadku *Przycisków domyślnych* rozmiary są predefiniowane i nie można ich dostosować.
- **Przezroczystość tła**. Kontroluj widoczność tła przycisku. Możesz ustawić je jako w pełni widoczne lub częściowo przezroczyste, lub wyświetlić tylko cień ramki i ikonę.


## Inne {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Strona widżetu](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Inne*

![Strona widżetu](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Odległość po dotknięciu](../widgets/radius-ruler.md#distance-by-tap). Daje możliwość zmierzenia odległości od Twojej pozycji do wybranego punktu.
- [Prędkościomierz](../widgets/info-widgets.md#speedometer). Pokazuje aktualną prędkość na podstawie danych GPS oraz ograniczenie prędkości na podstawie danych z [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). Wyświetlane dane zależą również od ustawienia [Tolerancja ograniczenia prędkości](../navigation/guidance/voice-navigation.md#speed-limit) w OsmAnd.


### Pozycja wyświetlania (Pozycja lokalizacji na ekranie) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Strona widżetu](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Strona widżetu](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Pozycja lokalizacji na ekranie* to nazwa tego ustawienia w wersji OsmAnd na iOS.  

Pozwala ustawić umiejscowienie kursora *[Moja lokalizacja](../map/interact-with-map.md#my-location-and-zoom)* na mapie OsmAnd. Dostępne są trzy opcje:  

- **<Translate android="true" ids="position_on_map_center"/>**. Kursor jest zawsze umieszczony na środku ekranu.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Moja lokalizacja* jest umieszczona nieco poniżej środka ekranu. Ten tryb pozwala zobaczyć więcej informacji na mapie przed tobą, co jest przydatne podczas nawigacji.
- **<Translate android="true" ids="shared_string_automatic"/>**. Umieszcza *Moją lokalizację* w zależności od *[Orientacji mapy](../map/interact-with-map.md#map-orientation-modes)* (*Dół* - dla kierunku ruchu, *Środek* - dla wszystkich pozostałych).


## Akcje {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Strona widżetu](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Dowolny panel*

![Strona widżetu](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Dostęp do dodatkowych akcji na ekranie Konfiguracja ekranu:

- *Android*. Znajduje się na ekranie Konfiguracja ekranu na dole ekranu w sekcji *Akcje*: *Menu → Konfiguracja ekranu → Akcje*.
- *Android / iOS*. Znajduje się na ekranach każdego panelu w *menu z trzema kropkami* w prawym górnym rogu ekranu.

Dostępne akcje:

- **Resetuj do domyślnych**. Ta funkcja pozwala zresetować wszystkie ustawienia do wartości domyślnych, jeśli chcesz zacząć od nowa lub używać tylko predefiniowanych ustawień przy uruchamianiu OsmAnd.
- **Kopiuj z innego profilu**. Ta funkcja pozwala szybko importować ustawienia z innego profilu, wybrać wymagane z listy i skopiować.


## Przełącz profil {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Konfiguracja ekranu](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- W przypadku urządzeń z systemem **Android** można zmieniać profile na górze ekranu głównego Konfiguracji ekranu za pomocą dostępnych ikon profili.  
- Jeśli używasz urządzenia z systemem **iOS**, dotknij ikony profilu w górnym rogu ekranu głównego Konfiguracji ekranu i wybierz z listy wymagany profil, aby go aktywować.  

**Uwaga**: Opcja *Przełącz profil* nie wyświetla wszystkich istniejących profili, a jedynie te, które zostały *włączone* w menu Ustawienia.


## Powiązane artykuły {#related-articles}

- [Przyciski mapy](./map-buttons.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Linijka promienia i Linijka](./radius-ruler.md)
- [Widżety znaczników](./markers.md)
- [Szybka akcja](./quick-action.md)