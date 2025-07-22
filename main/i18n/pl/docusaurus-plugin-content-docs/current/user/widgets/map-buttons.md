---
source-hash: 27c365e2cc23607b9c9893a7baf13d93386a9e23a925c712b829dec94e7a4355
sidebar_position: 2
title: Przyciski mapy
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

Przyciski mapy, w tym *Powiększenie*, *Szukaj*, *Wskazówki dojazdu*, *Kompas*, *Moja lokalizacja*, *Tryb 3D* i *Menu*, to główne elementy sterujące do interakcji z mapą. Każdy przycisk oferuje specyficzne funkcje, które poprawiają nawigację i korzystanie z mapy.


## Moja lokalizacja i powiększenie {#my-location-and-zoom}

![Menu ekranu konfiguracji](@site/static/img/widgets/location_zoom_buttons.png)

Użyj tych przycisków, aby kontrolować sposób wyświetlania mapy na ekranie urządzenia:

- **Moja lokalizacja**. Pokazuje, czy środek mapy jest zsynchronizowany z bieżącą geolokalizacją urządzenia.
- **Powiększenie**. Umożliwia dostosowanie poziomu powiększenia mapy w celu uzyskania większej lub mniejszej liczby szczegółów.
Jeśli chcesz uzyskać więcej informacji na temat korzystania z tych przycisków, możesz zapoznać się z artykułem [Interakcja z mapą](../map/interact-with-map.md#my-location-and-zoom).


## Wskazówki dojazdu {#directions}

![Przycisk Wskazówki dojazdu umożliwia](@site/static/img/widgets/directions_button_allows.png)

Przycisk **Wskazówki dojazdu** jest niezbędny do planowania trasy i nawigacji:

- [Zbuduj trasę](../navigation/index.md). Użyj tego przycisku, aby utworzyć trasę.
- [Rozpocznij nawigację](../navigation/index.md). Rozpocznij nawigację zakręt po zakręcie.
- W trybie nawigacji przycisk *Wskazówki dojazdu* jest domyślnie niewidoczny, ale pojawia się po krótkim dotknięciu mapy.

Orientacyjne stany przycisku *Wskazówki dojazdu*:

- *Szara domyślna ikona* wskazuje, że trasa nie została jeszcze utworzona. Dotknięcie tej ikony otwiera funkcję [konfiguracji trasy](../navigation/setup/route-navigation.md).
- *Niebieska domyślna ikona* wskazuje, że trasa jest zbudowana, ale nawigacja jeszcze się nie rozpoczęła. Dotknięcie tej ikony otwiera funkcję [konfiguracji trasy](../navigation/setup/route-navigation.md#start--stop-navigation).
- *Niebieska ikona strzałki* wskazuje, że nawigacja jest aktywna. Dotknięcie tej ikony otwiera [szczegóły bieżącej trasy](../navigation/setup/route-details.md).


## Konfiguruj mapę {#configure-map}

![Konfiguruj mapę](@site/static/img/widgets/configure_map.png)

Przycisk **Konfiguruj mapę** zapewnia dostęp do [menu Konfiguruj mapę](../map/configure-map-menu.md). Ikona odzwierciedla również [bieżący profil aplikacji](../personal/profiles.md), umożliwiając identyfikację i przełączanie się między różnymi profilami.


## Menu główne {#main-menu}

![Przycisk menu głównego](@site/static/img/widgets/main_menu_button.png)

Przycisk [**Menu główne**](../start-with/main-menu.md) otwiera ogólne menu, zapewniając dostęp do [wszystkich funkcji aplikacji](../start-with/main-menu.md). W trybie nawigacji ten przycisk jest domyślnie ukryty i staje się widoczny po krótkim dotknięciu mapy.


## Szukaj {#search}

![Przycisk Szukaj](@site/static/img/widgets/search_button.png)

Przycisk Szukaj oferuje szybki dostęp do [funkcji wyszukiwania](../search/index.md), umożliwiając wyszukiwanie lokalizacji, punktów POI i innych informacji bezpośrednio z mapy.


## Kompas {#compass}

Przycisk Kompas wskazuje orientację mapy na ekranie urządzenia. Dodatkowe informacje można znaleźć w artykule [Interakcja z mapą](../map/interact-with-map.md#map-orientation--compass).


### Tryby orientacji mapy {#map-orientation-modes}

- ![Kompas](@site/static/img/widgets/map_butt_manually_ios.png)  
**Ręcznie obracana**. W tym trybie można ręcznie obracać mapę za pomocą [gestu dwoma palcami (dotknięcie dwoma palcami i obrót)](../map/interact-with-map.md#gestures) zgodnie z własnymi preferencjami. Orientacja mapy nie zależy od kierunku podróży ani kompasu urządzenia, ale jest określana przez użytkownika. Tryb ręcznego obracania jest ustawiony domyślnie.

- ![Kompas](@site/static/img/widgets/map_butt_movem_dir_ios.png)  
**Kierunek ruchu**. W tym trybie mapa jest zorientowana zgodnie z kierunkiem ruchu znanym z danych GPS. Na przykład, jeśli skręcisz w prawo, mapa również obraca się tak, aby prawa strona ekranu odpowiadała kierunkowi ruchu. Aby uzyskać szczegółowe informacje, przejdź do [Obróć mapę według kierunku](../map/interact-with-map#rotate-map-by-bearing).

- ![Kompas](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Kierunek kompasu**. Ikona na przycisku wskazuje rzeczywistą Północ, a mapa porusza się zgodnie z orientacją kompasu urządzenia. W ten sposób północ mapy odpowiada rzeczywistej północy, a Ty możesz zobaczyć orientację mapy względem otaczającego terenu. Urządzenie powinno znajdować się w jak najbardziej poziomej pozycji. Jeśli urządzenie nie ma czujnika kompasu, orientacja mapy pozostaje niezmieniona.

- ![Kompas](@site/static/img/widgets/map_butt_north_up_ios.png)  
**Północ jest na górze**. W tym trybie mapa jest zablokowana (z twardą blokadą) w kierunku Północy, która jest górną krawędzią urządzenia. Niezależnie od kierunku, w którym porusza się urządzenie, mapa pozostaje statyczna, a Ty możesz zobaczyć swoją pozycję w stosunku do otoczenia. Mapa nie ma automatycznego ani ręcznego obracania.

### Zachowanie przycisku kompasu po dotknięciu {#compass-tapping-behavior}

Przycisk kompasu zapewnia wiele działań do kontrolowania orientacji mapy:

- **Pojedyncze dotknięcie**. *Pojedyncze dotknięcie* [przycisku Kompasu](../widgets/map-buttons.md#compass) (znajdującego się w lewym górnym rogu ekranu, gdy jest [widoczny](../widgets/map-buttons.md#display-options)) natychmiast zmienia orientację mapy *na Północ* we wszystkich trybach orientacji mapy. Nawet jeśli mapa jest w trybie *kierunku Kompasu*, nadal obraca się na chwilę, a następnie wraca do dynamicznej orientacji tego trybu.

- **Podwójne dotknięcie**. Aby szybko przełączać się między trybami orientacji mapy, takimi jak śledzenie kierunku GPS lub obracanie z urządzeniem, *dwukrotnie dotknij* [przycisku Kompasu](../widgets/map-buttons.md#compass) (gdy jest [widoczny](../widgets/map-buttons.md#display-options)).

- **Długie dotknięcie**. *Długie dotknięcie* [przycisku Kompasu](../widgets/map-buttons.md#compass) (gdy jest [widoczny](../widgets/map-buttons.md#display-options)) otwiera listę wszystkich trybów orientacji mapy i umożliwia wybranie wymaganego. Ta lista może być również otwarta w [ustawieniach profilu](../personal/profiles.md#appearance).


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

Ikona kompasu na przycisku zawsze wskazuje Północ. Możesz wybrać sposób wyświetlania przycisku kompasu na ekranie.

- **Zawsze widoczny**. Przycisk nie znika z ekranu.
- **Zawsze ukryty**. W tym przypadku nie można szybko zmienić orientacji mapy, ale przycisk nie zajmie miejsca na ekranie.
- **Widoczny, jeśli mapa jest obrócona**. Przycisk nie jest widoczny, gdy kompas wskazuje Północ na górnej krawędzi urządzenia.  


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
- *<Translate android="true" ids="visible_in_3d_mode"/>*. Przycisk jest wyświetlany na ekranie mapy po zmianie widoku mapy za pomocą gestu [*dwoma palcami i przesunięcie*](../map/interact-with-map.md#gestures).  

### Dodatkowe ustawienia {#additional-settings}

1. **Wyświetl przycisk**. (*Dla Androida*) Ustawienie dla przycisku *Tryb 3D* pojawia się na liście ekranu konfiguracji tylko wtedy, gdy wybrany jest silnik renderowania mapy [Wersja 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

2. **Zapisuje kąt**. Po przełączeniu na tryb 3D i ręcznej zmianie kąta gestem, kąt jest zapisywany i używany przy następnej aktywacji trybu 3D. Ta opcja jest zapisywana tylko dla profilu wybranego w danym momencie.

3. **Przenoszenie**. Przycisk można umieścić w dowolnym miejscu na ekranie urządzenia. Aby to zrobić, przytrzymaj przycisk i nie odrywając palca, przeciągnij go w wymagane miejsce.

4. **Pozycja przycisku**. Pozycja przycisku na mapie na ekranie aplikacji jest zapisywana oddzielnie dla każdego profilu.

5. **Zalecenie**. Zaleca się pobranie i włączenie [mapy cieniowania wzgórz](../plugins/topography.md#hillshade-slope-and-altitude-layers) dla wybranego regionu.


## Przyciski niestandardowe {#custom-buttons}

[Widżet szybkiego działania](./quick-action.md) to konfigurowalny przycisk z różnymi typami akcji, które można przypisać. Możliwe jest również posiadanie wielu [przycisków niestandardowych](./quick-action.md#custom-buttons).


## Wygląd przycisku mapy {#map-button-appearance}

<InfoAndroidOnly/>

| Przyciski domyślne | Przyciski niestandardowe |
| :--- | :--- |
| ![Wygląd przycisku mapy](@site/static/img/widgets/map_butt_appearance_default_andr.png) | ![Wygląd przycisku mapy](@site/static/img/widgets/map_butt_appearance_custom_andr.png) |

Ustawienia wyglądu przycisku mapy są dostępne w następujących menu:

- *Menu → Konfiguruj ekran → Przyciski → Przyciski domyślne*
- *Menu → Konfiguruj ekran → Przyciski niestandardowe → Szybka akcja → menu z trzema kropkami → Wygląd*

Dostosowanie wyglądu przycisków pozwala dostosować rozmiar, kształt, ikonę i przezroczystość tła zarówno dla [Szybkiej akcji (przyciski niestandardowe)](../widgets/quick-action.md#button-appearance), jak i [przycisków domyślnych](../widgets/configure-screen.md#button-appearance). Ta elastyczność pozwala spersonalizować interfejs, aby odpowiadał Twoim preferencjom i poprawiał użyteczność.


## Powiązane artykuły {#related-articles}

- [Konfiguruj ekran](./configure-screen.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Linijka promienia i linijka](./radius-ruler.md)
- [Widżety znaczników](./markers.md)
- [Szybka akcja](./quick-action.md)

> *Ostatnia aktualizacja: luty 2025*