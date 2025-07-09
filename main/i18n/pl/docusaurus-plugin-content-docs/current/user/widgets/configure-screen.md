---
source-hash: c8ab58e76333d6bb43b100fbf37d1adb3abf342632d71272ce2ebe8566c5ffc3
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

- Dodawać widżety [informacyjne](../widgets/info-widgets.md), [nawigacyjne](../widgets/nav-widgets.md) i [związane z markerami](../widgets/markers.md).
- Dodawać [Szybkie akcje](../widgets/quick-action.md) i [przyciski mapy](../widgets/map-buttons.md).
- Organizować widżety w panelach (górny, dolny, lewy, prawy, środkowy).
- Tworzyć wiele **stron** w panelach bocznych.
- Wybierać wysokość wiersza i przełączać ikony widżetów.

Wszystkie widżety są [zależne od profilu](../personal/profiles.md) — każdy profil ma swój własny układ, kolejność, widoczność i ustawienia.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>


## Panele widżetów {#widget-panels}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Konfiguracja ekranu](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Konfiguracja ekranu](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd pozwala organizować interfejs mapy za pomocą konfigurowalnych paneli widżetów.  
Możesz dodawać, zmieniać kolejność, grupować i usuwać widżety w następujących panelach:

- **Panel górny**
- **Panel dolny**
- **Panel lewy**
- **Panel prawy**

Każdy panel obsługuje różne zachowania układu:

- **Panele górny i dolny** wyświetlają widżety w wierszach. Możesz umieścić jeden lub dwa widżety w wierszu i dodać wiele wierszy, jeśli to konieczne.
- **Panele lewy i prawy** obsługują wiele stron. Możesz grupować widżety w oddzielne strony i przełączać się między nimi.


### Katalog widżetów {#widgets-catalog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Widżety nawigacyjne:***  

- [Namiar](../widgets/nav-widgets.md#bearing).  
    Ten zestaw pokazuje bezwzględny lub względny namiar na cel w jednostkach kątowych.  
    Zawiera 3 widżety: *Namiar względny*, *Namiar magnetyczny*, *Namiar rzeczywisty*.

- [Profil wysokościowy](../widgets/nav-widgets#elevation-widget) (*Tylko góra/dół*, *Tylko Android*).  
    Wyświetla wysokość i nachylenie trasy.

- [Pasy ruchu](../widgets/nav-widgets#lanes) (*Tylko góra/dół*).  
    Wizualne wskazówki dotyczące pasów ruchu.

- [Pasek markerów mapy](../widgets/markers.md#configure-marker-widgets-android) (*Tylko góra/dół*).  
    Pokazuje odległość/kierunek do zapisanych markerów.  
    Konfigurowalny dla 1 lub 2 markerów.

- [Punkt nawigacyjny](../widgets/nav-widgets.md#navigation-points).  
    Zestaw pokazuje pozostałą odległość do celu, punktu pośredniego, czas dotarcia do punktu pośredniego lub czas podróży dla obliczonej trasy.  
    Zawiera 4 widżety: [Odległość do celu](../widgets/nav-widgets.md#distance-to-destination), [Odległość do punktu pośredniego](../widgets/nav-widgets.md#distance-to-intermediate), [Czas do punktu pośredniego](../widgets/nav-widgets.md#time-to-intermediate), [Czas do celu](../widgets/nav-widgets.md#time-to-destination).

- [Manewry na trasie](../widgets/nav-widgets.md#next-turn) (*Tylko panel lewy/prawy*).  
    Ten zestaw jest aktywowany podczas nawigacji i pokazuje odległość oraz strzałkę do następnego manewru.  
    Zawiera 3 widżety: *Następny zakręt*, *Następny zakręt (mały)*, *Drugi następny zakręt*.

- [Ograniczenie prędkości](../widgets/nav-widgets.md#speed-limit).  
    Wyświetla aktualne ograniczenie prędkości dla drogi.

- [Prędkościomierz](../widgets/info-widgets.md#speedometer).  
    Pokazuje aktualną prędkość na podstawie danych GPS i ograniczonej prędkości na podstawie [danych OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Nazwa ulicy](../widgets/nav-widgets#street-name) (*Tylko góra/dół*).  
    Wyświetla aktualną lub nadchodzącą ulicę.

<br/>

***Widżety informacyjne:***

- [Wysokość](../widgets/info-widgets.md#altitude-widgets).  
    Zestaw wyświetla wysokość nad poziomem morza dla bieżącej lokalizacji lub dla bieżącego centrum mapy.  
    Zawiera 2 widżety: *Wysokość: bieżąca lokalizacja*, *Wysokość: centrum mapy*.

- [Średnia prędkość](../widgets/info-widgets.md#average-speed-widget).  
    Pokazuje średnią prędkość bieżącej podróży.

- [Poziom baterii](../widgets/info-widgets.md#battery-level).  
    Wyświetla poziom baterii urządzenia.

- [Widżety współrzędnych](../widgets/info-widgets#coordinates-widget) (*Tylko góra/dół*).  
    Ten zestaw wyświetla współrzędne geograficzne bieżącej geolokalizacji.  
    Zawiera 2 widżety: *Współrzędne: centrum mapy*, *Współrzędne: bieżąca lokalizacja*.

- [Bieżąca prędkość](../widgets/info-widgets.md#speed).  
    Wyświetla prędkość z czujnika GPS.

- [Bieżąca godzina](../widgets/info-widgets.md#current-time).  
    Wyświetla bieżącą godzinę systemową.

- [Współczynnik szybowania](../widgets/info-widgets.md#glide-ratio).  
    Widżety pokazują współczynnik szybowania do celu i średni współczynnik szybowania dla bieżącego lotu.  
    Zawiera 2 widżety: *Współczynnik szybowania do celu*, *Średni współczynnik szybowania*.

- [Informacje GPS](../widgets/info-widgets.md#gps-info) (*Tylko Android*).  
    Pokazuje liczbę wykrytych satelitów.

- [Markery mapy](../widgets/markers.md).  
    Zestaw pokazuje odległość lub szacowany czas przybycia (ETA) dla pierwszych dwóch markerów na [liście](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    Zawiera 2 widżety: *Pierwszy marker*, *Drugi marker*.

- [Linijka promienia](../widgets/info-widgets.md#radius-ruler).  
    Pokazuje odległość między Twoją lokalizacją a punktem na mapie, zakreślonym przez [narzędzie linijki promienia](../widgets/radius-ruler.md).

- [Wschód, zachód słońca](../widgets/info-widgets.md#sunset-and-sunrise).  
    Pokazuje czas następnego wschodu lub zachodu słońca dla centrum mapy.  
    Zawiera 2 widżety: *Wschód słońca*, *Zachód słońca*.

<br/>

***Widżety oparte na wtyczkach:***  

- [Notatki audio/wideo](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Szybki dostęp do przechwytywania mediów.  
    Zawiera 4 widżety: *Na żądanie*, *Nagrywanie audio*, *Nagrywanie wideo*, *Robienie zdjęcia*.

- [Widżety deweloperskie](../widgets/info-widgets.md#developer-widgets).  
    Wyświetla opcjonalne informacje.  
    Zawiera 5 widżetów: *FPS renderowania mapy*, *Pochylenie kamery*, *Wysokość kamery*, *Poziom powiększenia*, *Odległość od kamery do celu*, *Dostępna pamięć RAM*.  

- [Widżety czujników zewnętrznych](../widgets/info-widgets.md#external-sensors-widgets).  
    Zestaw pomaga śledzić dane z czujników BLE/ANT+ w czasie rzeczywistym.  
    Zawiera 6 widżetów: *Tętno*, *Moc roweru* (*Tylko Android*), *Kadencja roweru*, *Prędkość roweru*, *Dystans roweru*, *Temperatura*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Otwiera aplikację Mapillary do zdjęć na poziomie ulicy.

- [Status OsmAnd Tracker](../widgets/info-widgets.md#tracker-widget).  
    Szybki dostęp do [aplikacji OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Widżet parkowania](../widgets/info-widgets.md#parking-widget).  
    Odległość od środka ekranu do zapisanej lokalizacji parkowania.

- [Rejestrowanie podróży](../widgets/info-widgets.md#trip-recording-widgets).  
    Rozpoczyna i zatrzymuje rejestrowanie śladu oraz wyświetla dane rejestrowania śladu.  
    Zawiera 4 widżety: *Dystans*, *Czas trwania*, *Pod górę*, *W dół*.

- [Pogoda](../widgets/info-widgets.md#weather-widgets).  
    Wyświetla szczegółowe informacje pogodowe.  
    Zawiera 5 widżetów: *Temperatura*, *Ciśnienie powietrza*, *Wiatr*, *Chmury*, *Opady*.

:::note Widżety zależne od panelu

- Dostępne tylko w **panelach górnym i dolnym** i muszą być umieszczone w oddzielnych wierszach: *Widżety współrzędnych, Widżet profilu wysokościowego, Widżet pasów ruchu, Pasek markerów mapy, Widżet nazwy ulicy*.
- Dostępne tylko w **panelach lewym i prawym**: *Manewry na trasie*.

:::


### Wiersze {#rows}

![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

Funkcja **Tryb wierszy** pozwala dodawać dowolną liczbę wierszy do paneli górnego i dolnego. Możesz wyświetlać wiele widżetów w jednym wierszu, zwiększając ilość widocznych informacji.

***Jak skonfigurować wiersze:***

- **Dodaj widżety**. Wybierz z listy *Dostępne widżety*.
- **Zmień kolejność.** Dotknij przycisku *Zmień kolejność*, aby uporządkować widżety.
- **Dodaj wiersze.** Użyj przycisku *Dodaj wiersz*, aby utworzyć nowe wiersze dla widżetów.
- **Przenieś widżety**. Przenieś widżety między wierszami.
- **Zastosuj zmiany.** Dotknij przycisku *Zastosuj*, aby zapisać konfigurację.

#### Typy i ograniczenia widżetów {#widget-types-and-restrictions}

Tryb pozwala dodać **więcej niż jeden widżet w jednym wierszu** na panelach górnym i dolnym, aby wyświetlić tyle informacji, ile potrzeba.  

- **Widżety złożone**. W wierszu można dodać tylko jeden złożony widżet. Należą do nich:
    - [Pasek markerów mapy (*Tylko Android*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Nazwa ulicy](../widgets/nav-widgets#street-name)
    - [Widżety współrzędnych](../widgets/info-widgets#coordinates-widget)
    - [Pasy ruchu](../widgets/nav-widgets#lanes)
    - [Profil wysokościowy (*Tylko Android*)](../widgets/nav-widgets#elevation-widget)
    - [Manewry na trasie](../widgets/nav-widgets.md#next-turn)

- **Widżety proste**. Do jednego wiersza można dodać wiele prostych widżetów. Widżety te mogą wyświetlać *Nazwę*, *Jednostki miary*, *Wartość* i *Ikonę*.


### Strony {#pages}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Edytuj → Dodaj stronę*  

![Strona widżetu](@site/static/img/widgets/widget_page_1_andr.png) ![Strona widżetu](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Edytuj → Dodaj stronę*

![Strona widżetu](@site/static/img/widgets/widget_page_1_ios.png) ![Strona widżetu](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Widżety w panelach prawym i lewym mogą być grupowane w **Strony**. Funkcja **Tryb stron** pozwala dodać 5 stron do paneli lewego i prawego.

***Jak skonfigurować wiersze:***

- **Dodaj stronę**. Przejdź do ustawień panelu lewego/prawego i dotknij *Edytuj → Dodaj stronę*.
- **Organizuj widżety według strony**. Ta funkcja jest przydatna, gdy potrzebne są różne zestawy widżetów do różnych zadań, takich jak nawigacja w porównaniu z przeglądaniem mapy.
- Strony pozwalają tworzyć **zestawy widżetów** dla konkretnych scenariuszy, poprawiając przepływ pracy i zmniejszając bałagan.


## Ustawienia widżetów {#widget-settings}

![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Opcje rozmiaru widżetu** (*dla wszystkich paneli*):  
    Możesz dostosować rozmiar **prostych widżetów** w **panelach górnym, dolnym, lewym i prawym**:

    - **Mały**. Idealny do kompaktowych wyświetlaczy, oszczędzający więcej miejsca na mapy.
    - **Średni** (*domyślny rozmiar widżetu*). Równoważy widoczność i wykorzystanie miejsca.
    - **Duży**. Zapewnia większe, bardziej widoczne informacje widżetu.  

2. **Ukrywanie ikon widżetów** (*dla paneli górnego i dolnego*):

    - Poprawia przejrzystość i maksymalizuje przestrzeń dla ważnych danych.
    - Szczególnie przydatne, gdy wyświetlanych jest wiele widżetów w tym samym **wierszu**.

3. **Indywidualny rozmiar dla różnych wierszy** (*dla wszystkich paneli*):

    - Widżety mogą być indywidualnie skalowane poprzez dostosowanie rozmiaru wiersza i kolumny.
    - **UWAGA:** Zmiana rozmiaru jednego widżetu w wierszu/kolumnie spowoduje zmianę rozmiaru wszystkich widżetów w tym wierszu/kolumnie.

4. **Aby zmienić rozmiar widżetu i widoczność ikony:**

    - Wybierz widżet, który został już dodany do panelu.  
    - Dotknij ikony *Ustawienia* po prawej stronie pola widżetu.
    - Dotknij ustawienia *Rozmiar* i wybierz jeden z dostępnych rozmiarów.
    - Przełącz na pozycję Wyłączone w polu *Pokaż ikonę*.


## Dostosowywanie paneli {#panels-customization}

### Menu kontekstowe widżetu {#widget-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Duplikat widżetu](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Duplikat widżetu](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

**Menu kontekstowe widżetu** zapewnia szybki sposób zarządzania i konfigurowania widżetów bezpośrednio z ekranu mapy. Możesz uzyskać do niego dostęp, ***długo dotykając*** dowolnego widżetu, aby dostosować układ widżetów bez opuszczania mapy.

**Dla paneli górnego i dolnego**  

- *Dodaj widżet po prawej/lewej stronie:*

    - Wybierz pozycję dla nowego widżetu względem bieżącego.
    - Wybierz widżet z listy [Dostępne widżety](#widgets-for-all-panels).

**Dla paneli lewego i prawego**  

- *Dodaj widżet powyżej/poniżej:*

    - Wybierz, czy nowy widżet ma być umieszczony powyżej, czy poniżej bieżącego widżetu.
    - Dotknij wymaganego widżetu na liście, aby dodać go do określonej pozycji.

**Ogólne działania dla wszystkich paneli**  

- *Ustawienia*.
    - Dostęp do ustawień widżetu (jeśli są dostępne) w celu dostosowania jego wyglądu lub zachowania.

- *Zresetuj średnią prędkość*.
    - Dostępne dla widżetu [Średnia prędkość](../widgets/info-widgets.md#average-speed).
    - Długie dotknięcie, aby natychmiast zresetować wartość prędkości podczas podróży.

- *Usuń*.
    - Usuń widżet z panelu.
    - Monit o potwierdzenie zapewnia, że działanie jest zamierzone.

### Kopie widżetów {#copies-of-widgets}

*Menu OsmAnd → Konfiguracja ekranu → Widżety → Panel*  

![Duplikat widżetu](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd pozwala dodawać wiele instancji tego samego widżetu do różnych paneli lub stron. Ta funkcja jest szczególnie przydatna, gdy potrzebujesz spójnych informacji w różnych widokach lub profilach.  

***Jak duplikować widżety:***

- **Dodaj widżet**. Przejdź do: *Menu OsmAnd → Konfiguracja ekranu → Widżety → Panel →* **Dodaj** *widżet*.
- **Duplikuj za pomocą menu kontekstowego**. Dotknij widżetu i wybierz **Duplikuj** z listy akcji.
- **Alternatywna metoda**. Wybierz ten sam widżet z listy *Dostępne widżety* i dotknij *Dodaj*.


### Przenieś lub usuń {#move-or-delete}

*Menu OsmAnd → Konfiguracja ekranu → Widżety → Panel*  

![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_remove_andr.png)

Możesz zmieniać kolejność lub usuwać widżety z ekranu aplikacji za pomocą trybu **Edycji**.  

***Jak przenieść widżet:***

- Przejdź do: *Menu OsmAnd → Konfiguracja ekranu → Widżety → Panel → Przycisk Edytuj*.
- Długo dotknij **ikonę po prawej stronie** widżetu.
- Przeciągnij go do wymaganej pozycji na liście widżetów.

***Jak usunąć widżet:***  

- Wykonaj te same kroki, co powyżej.
- Dotknij **ikony minusa** po lewej stronie nazwy widżetu.
- Potwierdź usunięcie, gdy zostaniesz o to poproszony.


## Przyciski {#buttons}

### Przyciski niestandardowe {#custom-buttons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Strona widżetu](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Strona widżetu](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Szybka akcja (przyciski niestandardowe)** pozwala dodać listę pojedynczych akcji ze wszystkich dostępnych [Szybkich akcji](../widgets/quick-action.md#custom-buttons). Te akcje mogą być przypisane do jednego lub więcej przycisków widżetów na ekranie mapy. Przyciski niestandardowe zapewniają szybki dostęp do często używanych akcji.

### Przyciski domyślne {#default-buttons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Strona widżetu](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Strona widżetu](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. **Przyciski domyślne** pozwalają dostosować, które predefiniowane przyciski mapy są widoczne na ekranie mapy. Możesz wybrać ukrycie lub pokazanie następujących przycisków:

    - [Tryb 3D](../widgets/map-buttons.md#3d-mode). Dla iOS przycisk jest zawsze dostępny. Dla Androida pojawia się na liście i jest dostępny do ustawienia, jeśli wybrano silnik renderowania mapy [Wersja 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

    - [Kompas](../widgets/map-buttons.md#display-options). Wskazuje, jak mapa jest zorientowana na urządzeniu.  
    3 widoki: *Zawsze widoczny*, *Zawsze ukryty*, *Widoczny, jeśli mapa jest obrócona*.

    - [Konfiguruj mapę](../map/configure-map-menu.md). Dostęp do opcji modyfikacji stylu mapy, warstw i dodatkowych ustawień.

    - [Menu](../widgets/map-buttons.md#main-menu). Otwiera główne menu aplikacji, aby uzyskać dostęp do wszystkich funkcji.

    - [Moja lokalizacja](../widgets/map-buttons.md#my-location-and-zoom). Centruje mapę na Twojej bieżącej pozycji.

    - [Nawigacja](../widgets/map-buttons.md#directions). Niezbędne do planowania trasy i rozpoczynania nawigacji.

    - [Szukaj](../widgets/map-buttons.md#search). Otwiera narzędzie wyszukiwania do znajdowania lokalizacji.

    - [Powiększ / pomniejsz](../widgets/map-buttons.md#my-location-and-zoom). Dostosowuje poziom powiększenia mapy, aby pokazać więcej lub mniej szczegółów.

2. **Menu z trzema kropkami** na ekranie przycisków domyślnych zawiera takie akcje, jak:

    - *Przywróć domyślne*. Pozwala przywrócić ustawienia przycisków do ich pierwotnego wyglądu.
    - *Kopiuj z innego profilu*. Wybierz, z którego profilu z oferowanej listy chcesz skopiować ustawienia przycisków.

3. **Domyślny wygląd przycisku** (*Tylko Android*) oferuje różnorodne opcje dostosowywania dla tego typu przycisków. Aby zmodyfikować wygląd przycisku, dotknij wymaganego przycisku z listy i wybierz opcję [Wygląd](#button-appearance).


### Wygląd przycisku {#button-appearance}

<InfoAndroidOnly/>

![Wygląd przycisku](@site/static/img/widgets/button_appearance_settings_andr.png)

Funkcja *Wygląd przycisku* umożliwia pełne dostosowanie wyglądu przycisków w interfejsie mapy. Te opcje dostosowywania są dostępne zarówno dla *Szybkich akcji (przycisków niestandardowych)*, jak i *przycisków domyślnych*, zapewniając kompleksową kontrolę nad wyglądem interfejsu mapy i umożliwiając precyzyjne dostosowanie projektu przycisków.

***Opcje dostosowywania***:

- **Ikona**. Wybierz z listy ikon, które reprezentują już dodane akcje, ułatwiając identyfikację funkcji na pierwszy rzut oka.
- **Promień narożnika**. Dostosuj to ustawienie, aby zmienić kształt przycisku, od ostrych, kwadratowych narożników do gładkich, zaokrąglonych krawędzi.
- **Rozmiar**. Wybierz rozmiar przycisku, który najlepiej pasuje do Twojego ekranu i wyróżnia się w razie potrzeby. W przypadku *przycisków domyślnych* rozmiary są predefiniowane i nie można ich regulować.
- **Przezroczystość tła**. Kontroluj widoczność tła przycisku. Możesz ustawić je jako w pełni widoczne, częściowo przezroczyste lub wyświetlać tylko cień ramki i ikonę.


## Inne {#other}

<Tabs groupId="operating-systems">

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
- [Odległość przez dotknięcie](../widgets/radius-ruler.md#distance-by-tap). Daje możliwość zmierzenia odległości od Twojej pozycji do wybranego punktu.
- [Prędkościomierz](../widgets/info-widgets.md#speedometer). Pokazuje aktualną prędkość na podstawie danych GPS i ograniczonej prędkości na podstawie [danych OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). Wyświetlane dane zależą również od ustawienia [Tolerancja ograniczenia prędkości](../navigation/guidance/voice-navigation.md#speed-limit) w OsmAnd.


### Wyświetl pozycję (Pozycja lokalizacji na ekranie) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Strona widżetu](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Strona widżetu](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Pozycja lokalizacji na ekranie* to nazwa tego ustawienia w wersji iOS OsmAnd.  

Pozwala ustawić położenie kursora na *[Moja lokalizacja](../map/interact-with-map.md#my-location-and-zoom)* na mapie OsmAnd. Dostępne są trzy opcje:  

- **<Translate android="true" ids="position_on_map_center"/>**. Kursor jest zawsze umieszczony na środku ekranu.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Moja lokalizacja* jest umieszczona nieco poniżej środka ekranu. Ten tryb pozwala zobaczyć więcej informacji na mapie przed Twoim ruchem, co jest przydatne podczas nawigacji.
- **<Translate android="true" ids="shared_string_automatic"/>**. Umieszcza *Moją lokalizację* w zależności od *[Orientacji mapy](../map/interact-with-map.md#map-orientation-modes)* (*Dół* - dla kierunku ruchu, *Środek* - dla wszystkich innych).


## Akcje {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Strona widżetu](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Dowolny panel*

![Strona widżetu](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Dostęp do dodatkowych akcji w Konfiguracji ekranu:

- *Android*. Znajduje się w Konfiguracji ekranu na dole ekranu w sekcji *Akcje*: *Menu → Konfiguracja ekranu → Akcje*.
- *Android / iOS*. Znajduje się na ekranach każdego panelu w *menu z trzema kropkami* w prawym górnym rogu ekranu.

Dostępne akcje:

- **Przywróć domyślne**. Ta funkcja pozwala zresetować wszystkie ustawienia do wartości domyślnych, jeśli chcesz zacząć od nowa lub użyć tylko predefiniowanych ustawień podczas uruchamiania OsmAnd.
- **Kopiuj z innego profilu**. Ta funkcja pozwala szybko importować ustawienia z innego profilu, wybrać wymagane z listy i skopiować.


## Zmień profil {#switch-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu konfiguracji ekranu](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- W przypadku urządzeń z **Androidem** możesz zmieniać profile na górze ekranu głównego Konfiguracji ekranu, używając dostępnych ikon profili.  
- Jeśli używasz urządzenia z **iOS**, dotknij ikony profilu w górnym rogu ekranu głównego Konfiguracji ekranu i wybierz wymagany profil z listy, aby go aktywować.  

**Zwróć uwagę**. Opcja *Zmień profil* nie wyświetla wszystkich istniejących profili, a jedynie te, które zostały *włączone* w menu Ustawienia.


## Powiązane artykuły {#related-articles}

- [Przyciski mapy](./map-buttons.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Linijka promienia i linijka](./radius-ruler.md)
- [Widżety markerów](./markers.md)
- [Szybka akcja](./quick-action.md)

> *Ostatnia aktualizacja: maj 2025*