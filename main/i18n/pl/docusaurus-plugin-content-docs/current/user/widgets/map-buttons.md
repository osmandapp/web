---
source-hash: e1e81cd3da376b1fcab706b375ba623796cc2905f6cf2a1df7f838fbb24a9ee3
sidebar_position: 2
title:  Przyciski na mapie
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

Przyciski na mapie, w tym *Powiększenie*, *Wyszukiwanie*, *Wskazówki*, *Kompas*, *Moja lokalizacja*, *Tryb 3D* i *Menu*, są głównymi elementami sterującymi interakcją z mapą. Każdy przycisk oferuje określone funkcje, które poprawiają komfort nawigacji i korzystania z mapy.


## Moja lokalizacja i Powiększenie {#my-location-and-zoom}

![Menu ekranu Konfiguruj](@site/static/img/widgets/location_zoom_buttons.png)

Użyj tych przycisków, aby kontrolować sposób wyświetlania mapy na ekranie urządzenia:

- **Moja lokalizacja**. Pokazuje, czy środek mapy jest zsynchronizowany z bieżącą geolokalizacją urządzenia.
- **Powiększenie**. Umożliwia dostosowanie poziomu powiększenia mapy w celu wyświetlenia większej lub mniejszej liczby szczegółów.
Jeśli chcesz uzyskać więcej informacji na temat korzystania z tych przycisków, zapoznaj się z artykułem [Interakcja z mapą](../map/interact-with-map.md#my-location-and-zoom).


## Wskazówki {#directions}

![Przycisk Wskazówki pozwala](@site/static/img/widgets/directions_button_allows.png)

Przycisk **Wskazówki** jest niezbędny do planowania trasy i nawigacji:

- [Zbuduj trasę](../navigation/index.md). Użyj tego przycisku, aby utworzyć trasę.
- [Rozpocznij nawigację](../navigation/index.md). Rozpocznij nawigację zakręt po zakręcie.
- W trybie nawigacji przycisk *Wskazówki* nie jest domyślnie widoczny, ale pojawia się po krótkim dotknięciu mapy.

Orientacyjne stany przycisku *Wskazówki*:

- *Szara domyślna ikona* wskazuje, że trasa nie została jeszcze utworzona. Dotknięcie tej ikony otwiera funkcję [konfiguracji trasy](../navigation/setup/route-navigation.md).
- *Niebieska domyślna ikona* wskazuje, że trasa jest zbudowana, ale nawigacja jeszcze się nie rozpoczęła. Dotknięcie tej ikony otwiera funkcję [konfiguracji trasy](../navigation/setup/route-navigation.md#start--stop-navigation).
- *Niebieska ikona strzałki* wskazuje, że nawigacja jest aktywna. Dotknięcie tej ikony otwiera [szczegóły bieżącej trasy](../navigation/setup/route-details.md).


## Konfiguruj mapę {#configure-map}

![Konfiguruj mapę](@site/static/img/widgets/configure_map.png)

Przycisk **Konfiguruj mapę** zapewnia dostęp do [menu Konfiguruj mapę](../map/configure-map-menu.md). Ikona odzwierciedla również [Bieżący profil aplikacji](../personal/profiles.md), umożliwiając identyfikację i przełączanie się między różnymi profilami.


## Menu główne {#main-menu}

![Przycisk menu głównego](@site/static/img/widgets/main_menu_button.png)

Przycisk [**Menu główne**](../start-with/main-menu.md) otwiera menu ogólne, zapewniając dostęp do [wszystkich funkcji aplikacji](../start-with/main-menu.md). W trybie nawigacji przycisk ten jest domyślnie ukryty i staje się widoczny po krótkim dotknięciu mapy.


## Wyszukaj {#search}

![Przycisk Wyszukaj](@site/static/img/widgets/search_button.png)

Przycisk Wyszukaj oferuje szybki dostęp do [funkcji wyszukiwania](../search/index.md), umożliwiając znajdowanie lokalizacji, punktów POI i innych informacji bezpośrednio z mapy.


## Kompas {#compass}

Przycisk Kompas wskazuje orientację mapy na ekranie urządzenia. Dodatkowe informacje można znaleźć w artykule [Interakcja z mapą](../map/interact-with-map.md#map-orientation-modes).


### Tryby orientacji mapy {#map-orientation-modes}

- ![Kompas](@site/static/img/widgets/map_butt_manually_ios.png)  
**Obracana ręcznie**. W tym trybie można ręcznie obracać mapę za pomocą [gestu dwoma palcami (dotknij i obróć dwoma palcami)](../map/interact-with-map.md#gestures) zgodnie z własnymi preferencjami. Orientacja mapy nie zależy od kierunku jazdy ani kompasu urządzenia, ale jest określana przez użytkownika. Tryb ręcznego obracania jest ustawiony domyślnie.

- ![Kompas](@site/static/img/widgets/map_butt_movem_dir_ios.png)  
**Kierunek ruchu**. W tym trybie mapa jest zorientowana zgodnie z kierunkiem ruchu znanym z danych GPS. Na przykład, jeśli skręcisz w prawo, mapa również obróci się tak, aby prawa strona ekranu odpowiadała kierunkowi ruchu. Aby uzyskać szczegółowe informacje, przejdź do [Obróć mapę według namiaru](../map/interact-with-map.md#rotate-map-by-bearing).

- ![Kompas](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Kierunek kompasu**. Ikona na przycisku wskazuje rzeczywistą północ, a mapa porusza się zgodnie z orientacją kompasu urządzenia. W ten sposób północ mapy odpowiada rzeczywistej północy i można zobaczyć orientację mapy w stosunku do otaczającego terenu. Urządzenie powinno znajdować się w możliwie najbardziej poziomej pozycji. Jeśli urządzenie nie ma czujnika kompasu, orientacja mapy pozostaje niezmieniona.

- ![Kompas](@site/static/img/widgets/map_butt_north_up_ios.png)  
**Północ na górze**. W tym trybie mapa jest zablokowana w kierunku północnym, który jest górną krawędzią urządzenia. Niezależnie od kierunku, w którym porusza się urządzenie, mapa pozostaje statyczna i można zobaczyć swoją pozycję w odniesieniu do otoczenia. Mapa nie ma automatycznego ani ręcznego obracania.

### Zachowanie przycisku kompasu po dotknięciu {#compass-tapping-behavior}

Przycisk kompasu zapewnia wiele działań do kontrolowania orientacji mapy:

- **Pojedyncze dotknięcie**. *Pojedyncze dotknięcie* [przycisku Kompas](../widgets/map-buttons.md#compass) (znajdującego się w lewym górnym rogu ekranu, gdy jest [widoczny](../widgets/map-buttons.md#display-options)) natychmiast zmienia orientację mapy *na północ* we wszystkich trybach orientacji mapy. Nawet jeśli mapa jest w trybie *Kierunek kompasu*, nadal obraca się na chwilę, a następnie powraca do dynamicznej orientacji tego trybu.

- **Podwójne dotknięcie**. Aby szybko przełączać się między trybami orientacji mapy, takimi jak podążanie za kierunkiem GPS lub obracanie wraz z urządzeniem, *dwukrotnie dotknij* [przycisku Kompas](../widgets/map-buttons.md#compass) (gdy jest [widoczny](../widgets/map-buttons.md#display-options)).

- **Długie dotknięcie**. *Długim dotknięciem* [przycisku Kompas](../widgets/map-buttons.md#compass) (gdy jest [widoczny](../widgets/map-buttons.md#display-options)) można otworzyć listę wszystkich trybów orientacji mapy i wybrać wymagany. Listę tę można również otworzyć w [Ustawieniach profilu](../personal/profiles.md#appearance).


### Opcje wyświetlania {#display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widżet kompasu](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widżet kompasu](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs>

Ikona kompasu na przycisku zawsze wskazuje północ. Można wybrać sposób wyświetlania przycisku kompasu na ekranie.

- **Zawsze widoczny**. Przycisk nie znika z ekranu.
- **Zawsze ukryty**. W tym przypadku nie można szybko zmienić orientacji mapy, ale przycisk nie będzie zajmował miejsca na ekranie.
- **Widoczny, jeśli mapa jest obrócona**. Przycisk nie jest widoczny, gdy kompas wskazuje północ na górnej krawędzi urządzenia.  


## Tryb 3D {#3d-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![Tryb 3D](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![Tryb 3D](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>  

- *<Translate android="true" ids="shared_string_hidden"/>*. Jeśli ten tryb jest wybrany dla przycisku, należy użyć gestu, aby zmienić widok mapy. Dotknij mapy dwoma palcami i przesuń je w górę i w dół, aby dostosować nachylenie mapy.  
- *<Translate android="true" ids="shared_string_visible"/>*. Przycisk jest zawsze wyświetlany na ekranie mapy.
- *<Translate android="true" ids="visible_in_3d_mode"/>*. Przycisk jest wyświetlany na ekranie mapy po zmianie widoku mapy za pomocą gestu [*dwóch palców i przesunięcia*](../map/interact-with-map.md#gestures).  

### Dodatkowe ustawienia {#additional-settings}

1. **Wyświetl przycisk**. (*Dla Androida*) Ustawienie przycisku *Tryb 3D* pojawia się na liście Konfiguruj ekran tylko wtedy, gdy wybrany jest silnik renderowania mapy [Wersja 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

2. **Zapisuje kąt**. Po przełączeniu do trybu 3D i ręcznej zmianie kąta za pomocą gestu, kąt jest zapisywany i używany przy następnej aktywacji trybu 3D. Ta opcja jest zapisywana tylko dla wybranego w danym momencie profilu.

3. **Przesuwanie**. Przycisk można umieścić w dowolnym miejscu na ekranie urządzenia. Aby to zrobić, przytrzymaj przycisk i nie odrywając palca, przeciągnij go w wymagane miejsce.

4. **Pozycja przycisku**. Pozycja przycisku na mapie na ekranie aplikacji jest zapisywana oddzielnie dla każdego profilu.

5. **Zalecenie**. Zaleca się pobranie i włączenie [mapy cieniowania wzgórz](../plugins/topography.md#hillshade-slope-and-altitude-layers) dla wybranego regionu.


## Przyciski niestandardowe {#custom-buttons}

[Widżet Szybka akcja](./quick-action.md) to konfigurowalny przycisk z różnymi typami akcji, które można przypisać. Możliwe jest również posiadanie wielu [Przycisków niestandardowych](./quick-action.md#custom-buttons).


## Wygląd przycisków mapy {#map-button-appearance}

<InfoAndroidOnly/>

| Przyciski domyślne | Przyciski niestandardowe |
| :--- | :--- |
| ![Wygląd przycisków mapy](@site/static/img/widgets/map_butt_appearance_default_andr.png) | ![Wygląd przycisków mapy](@site/static/img/widgets/map_butt_appearance_custom_andr.png) |

Ustawienia wyglądu przycisków mapy są dostępne w następujących menu:

- *Menu → Konfiguruj ekran → Przyciski → Przyciski domyślne*
- *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybka akcja → menu z trzema kropkami → Wygląd*

Dostosowanie wyglądu przycisków pozwala na zmianę rozmiaru, kształtu, ikony i przezroczystości tła zarówno dla [Szybkiej akcji (przyciski niestandardowe)](../widgets/quick-action.md#quick-action-button-appearance), jak i [Przycisków domyślnych](../widgets/configure-screen.md#button-appearance). Ta elastyczność pozwala spersonalizować interfejs zgodnie z własnymi preferencjami i poprawić użyteczność.


## Powiązane artykuły {#related-articles}

- [Konfiguruj ekran](./configure-screen.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Linijka i linijka promienia](./radius-ruler.md)
- [Widżety znaczników](./markers.md)
- [Szybka akcja](./quick-action.md)