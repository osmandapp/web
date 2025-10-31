---
source-hash: a7c6f8f7442c4b7f13e5c2dddf666b3c3746573001eeed8e01301d994f46a1d5
sidebar_position: 9
title:  Android Auto
ios: false
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

![Ekran Android Auto](@site/static/img/navigation/auto-car/android_auto_overview.png)  

[**Android Auto**](https://www.android.com/auto) to oprogramowanie opracowane przez Google, które pozwala użytkownikom łączyć ich urządzenia z systemem Android z kompatybilnymi systemami multimedialnymi pojazdów. *Android Auto* zapewnia dostosowaną i zoptymalizowaną wersję aplikacji OsmAnd do bezpiecznego użytkowania podczas jazdy, ułatwiając i zwiększając bezpieczeństwo dostępu do funkcji nawigacyjnych aplikacji.  

Funkcja **Android Auto** jest obsługiwana tylko w przypadku korzystania z aplikacji OsmAnd dostępnej w [sklepie Google Play](https://play.google.com/store/apps/dev?id=8483587772816822023).

> **UWAGA**: *Android Auto nie jest bezpośrednią repliką aplikacji mobilnej OsmAnd. Ma uproszczony interfejs, koncentrując się na podstawowych funkcjach nawigacyjnych w celu zapewnienia bezpiecznej jazdy. Niektóre zaawansowane funkcje nie są obsługiwane ze względu na ograniczenia platformy.*


### Ekran połączenia {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)  

Gdy urządzenie jest podłączone do *Android Auto*, mapa na ekranie aplikacji jest zablokowana. Jest to celowa funkcja bezpieczeństwa, która zapewnia, że nawigacja jest kontrolowana wyłącznie z wyświetlacza samochodowego, minimalizując rozpraszanie uwagi podczas jazdy. Sprawdź [częste pytania](#common-issues-and-solutions) dotyczące ekranu połączenia.


### Ekran startowy {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Po otwarciu aplikacji wyświetlana jest lista kategorii. W celu łatwej nawigacji można ją ukryć, dotykając przycisku w prawym górnym rogu ekranu.  

- Dotknij przycisku menu, aby ukryć listę kategorii.
- W prawym górnym rogu ekranu dotknij przycisku obok przycisków funkcyjnych, jeśli chcesz wrócić do listy.


### Interakcja z mapą {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto* wyświetla interfejs OsmAnd dostosowany do ekranu systemu multimedialnego pojazdu. Interakcja z mapą jest ograniczona do przycisków takich jak:  

- [Menu OsmAnd](#destination-points). Zawiera listę dostępnych opcji przypisania punktu końcowego trasy lub swobodnej jazdy.
- [Ustawienia](#voice-prompts). Ten przycisk odpowiada za: 1. dostęp do włączania/wyłączania *komunikatów głosowych* podczas nawigacji po wybranej trasie; 2. wyświetlanie szczegółów trasy (czas i odległość) do następnego przystanku.
- [Szukaj](#search). Dotknięcie przycisku otwiera ekran z dostępem do funkcji wyszukiwania.
- [Moja lokalizacja](../widgets/map-buttons.md#my-location-and-zoom). Przesuwa widoczną część mapy tak, aby bieżąca lokalizacja znajdowała się na środku ekranu.
- [Powiększenie](../widgets/map-buttons.md#my-location-and-zoom). Umożliwia powiększanie i pomniejszanie widocznej części mapy. Gest szczypnięcia jest dostępny do skalowania mapy. Jeśli nie jest obsługiwany przez jednostkę główną, regulacja powiększenia jest wykonywana gestem podwójnego dotknięcia i przesunięcia.
- [Kompas](../widgets/map-buttons.md#compass). Pokazuje, który z czterech dostępnych trybów orientacji mapy na ekranie urządzenia jest wybrany.


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

### Rozpocznij nawigację {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

Aby OsmAnd działał w *Android Auto*, należy [podłączyć](#connection-screen) urządzenie z systemem Android do systemu multimedialnego pojazdu. System operacyjny Android musi być zaktualizowany do wersji 6.0 lub nowszej.

- Aby dowiedzieć się, jak podłączyć i skonfigurować urządzenie, odwiedź strony internetowe [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en).  

- Nie wszystkie pojazdy obsługują możliwość podłączenia urządzenia. Sprawdź [listę dla *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).  

- Należy zakupić **płatną wersję** aplikacji lub wykupić [subskrypcję](../purchases/android.md#free-and-paid-features). Sprawdź swoją aktualną subskrypcję tutaj *Menu → Ustawienia → Zakupy*.  

- *Android Auto* używa pierwszego [profilu Jazda OsmAnd](#profile-first) z listy Profili do nawigacji. Ustaw preferowany profil jako pierwszy, z wyjątkiem profilu *Przeglądaj mapę*, który nie jest odczytywany przez *Android Auto*. Aby to zrobić, przejdź do OsmAnd *Menu → Ustawienia → Profile aplikacji → Edytuj listę profili* → przesuń swój [**Jazda**](#profile-first) profil na pierwsze miejsce lub za profil *Przeglądaj mapę*.  

- Ważne jest, aby pamiętać, że *Android Auto* to aplikacja intensywnie wykorzystująca dane, w tym dane mobilne, a jakość systemu może zależeć od jakości połączenia i szybkości dostępu do Internetu.

### Pierwszy profil {#profile-first}

Nie można wybrać profilu bezpośrednio w *Android Auto* na ekranie pojazdu.  
Jeśli na urządzeniu wybrano już profil odpowiadający typowi pojazdu, taki jak *Jazda*, *Ciężarówka*, *Samochód*, *Motocykl*, *Motorower*, **aplikacja automatycznie aktywuje** odpowiedni profil po podłączeniu do Android Auto. Na przykład, jeśli jako wybrany masz profil *Ciężarówka*, a urządzenie połączy się z **Android Auto**, aplikacja aktywuje ten profil.

Jeśli na urządzeniu nie wybrano żadnego profilu *Jazda* odpowiadającego typowi pojazdu, OsmAnd automatycznie przełączy się na profil *Jazda*. Ma to na celu zapewnienie podstawowej nawigacji i zapobieganie ewentualnym problemom spowodowanym użyciem niewłaściwego profilu dla danego typu pojazdu.

**Dlaczego to jest ważne:**

1. **Bezpieczeństwo jazdy.** Różne rodzaje transportu wymagają różnych informacji i ustawień podczas jazdy. Na przykład kierowcy ciężarówek mogą mieć ograniczenia dotyczące wysokości, wagi i szerokości swoich pojazdów, więc profil *Ciężarówka* zapewnia im odpowiednie ograniczenia i wskazówki. Z kolei rowerzyści i motocykliści potrzebują informacji o ścieżkach rowerowych i trasach, bez danych dla ciężarówek.

2. **Użyteczność i wydajność.** Nawigacja powinna być dostosowana do potrzeb danego środka transportu. Pozwala to użytkownikom skrócić czas potrzebny na znalezienie optymalnych tras i uniknąć niepotrzebnych ograniczeń w ruchu.

3. **Unikanie błędów.** Przełączenie na profil *Jazda*, gdy nie ma określonego profilu dla wybranego środka transportu, zapewnia stały dostęp do minimalnych niezbędnych ustawień i informacji, unikając w ten sposób możliwych błędów i nieporozumień podczas jazdy.  


## Punkty docelowe {#destination-points}

![Ekran Android Auto](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

Jako punkt docelowy można wybrać wcześniej ustawione i dodane [POI](../map/point-layers-on-map.md#points-of-interest-pois), [Ulubione](../personal/favorites.md) lub [Znaczniki](../personal/markers.md). Możliwe jest również wybranie nagranego lub pobranego [Śladu](../personal/tracks/manage-tracks.md) dla trasy, skorzystanie z [Wyszukiwania](../search/index.md), wybranie miejsca docelowego z [Historii](../search/search-history.md) trasy lub wybranie opcji *Swobodna jazda*.

1. Jeśli chcesz, aby określona lokalizacja na mapie była punktem końcowym, wybierz z listy odpowiednią kategorię punktów: [POI](#poi-categories), [Ulubione](#favorites) lub [Znaczniki mapy](#map-markers).  
  
    - Wszystkie kategorie mogą zawierać nie więcej elementów listy, niż jest to przewidziane przez system multimedialny pojazdu. Oznacza to, że lista w *Android Auto* może być niekompletna, a wszystkie inne foldery są dostępne tylko w aplikacji OsmAnd na urządzeniu.
    - Folder [Ostatnio zmodyfikowane](#folder-last-modified) zawiera listę ostatnich miejsc docelowych, posortowaną według daty dodania lub zmiany.
    - Lista wszystkich pozostałych folderów jest sortowana według ostatniej aktualizacji, nowe foldery znajdują się na górze listy. Nie ma możliwości ręcznej zmiany ich kolejności.
    - Lista punktów w folderach jest sortowana według odległości do nich, zaczynając od najbliższego. Każdy punkt ma nazwę lub współrzędne, ikonę kształtu (kolor i ikona ustawione domyślnie lub wybrane przez użytkownika w aplikacji OsmAnd) oraz odległość od punktu bieżącej lokalizacji do niego.  

2. Wybierz kategorię [Historia](#history), aby znaleźć jedno z ostatnich miejsc docelowych, które są przechowywane w pamięci urządzenia.  

3. Wybierz [Szukaj](#search), aby wprowadzić miejsce docelowe z dostępnych kategorii wyszukiwania.  

4. Wybierz **Swobodna jazda**, aby odbyć podróż bez określonego punktu końcowego.

:::note
Podczas jazdy wybrane punkty mogą być [ogłaszane](#voice-prompts) podczas zbliżania się do nich lub mijania ich. Zobacz ustawienia [Komunikatów głosowych](../navigation/guidance/voice-navigation.md) w odpowiednim artykule, aby skonfigurować powiadomienia głosowe.
:::  


### Historia {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)  

W kategorii Historia można wybrać miejsce docelowe z listy punktów końcowych. Są one sortowane według ostatniego użycia, zaczynając od najnowszego. Może to być wygodne w celu szybkiego dostępu do często używanych tras. Aby dowiedzieć się, jak używać lub usuwać miejsce docelowe, przeczytaj artykuł [Historia wyszukiwania](../search/search-history.md).  


### Kategorie POI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

POI (Punkty zainteresowania) to rodzaj punktów, które identyfikują miejsca lub obiekty na mapie, które są ważne lub interesujące dla użytkowników. Są one wyróżnione specjalnymi ikonami dostępnymi w [ustawieniach OsmAnd](../map/point-layers-on-map.md#poi-types) i posortowane w grupy.  

Aby zbudować trasę do POI w *Android Auto*, wykonaj następujące kroki:

1. Wybierz potrzebne POI z listy dostępnych kategorii lub wprowadź nazwę POI za pomocą [Wyszukiwania](#search).
2. Dotknięcie kategorii otwiera następny ekran z listą POI.
3. Dotknięcie elementu na liście otwiera ekran nawigacji.
4. OsmAnd oblicza trasę i wyświetla ją na ekranie *Android Auto*. Dotknij przycisku **Start**, aby rozpocząć nawigację do tej lokalizacji.
5. W zależności od [ustawień](../navigation/guidance/navigation-settings.md) aplikacji OsmAnd i pojazdu, możesz otrzymywać [komunikaty głosowe](#voice-prompts), które poprowadzą Cię do celu.  


### Ulubione {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>  

*Ulubione* to jedna z funkcji OsmAnd, która pozwala tworzyć na mapie swego rodzaju zakładki (notatki). Podczas korzystania z *Android Auto* nie można dodawać ani modyfikować Ulubionych, a jedynie korzystać z już istniejących. Listę [Ulubionych](../personal/favorites.md#manage-favorites) można znaleźć w aplikacji OsmAnd *Menu → Moje miejsca → Ulubione*. Jeśli chcesz używać ich do nawigacji, dodaj niezbędne miejsca do ulubionych przed podłączeniem urządzenia do systemu multimedialnego pojazdu.  

Aby utworzyć trasę do ulubionego punktu w *Android Auto*, wykonaj poniższe kroki:  

1. Dotknięcie folderu otwiera następny ekran z listą folderów ulubionych.
2. Dotknięcie elementu na liście otwiera nawigację.


### Znaczniki mapy {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Aby zdefiniować ostateczny cel podróży jako Znacznik mapy, należy najpierw utworzyć wymaganą liczbę znaczników w aplikacji OsmAnd na urządzeniu przed podłączeniem go do systemu. Znaczniki muszą być dostępne na liście *Menu → Znacznik mapy*. Zostało to opisane bardziej szczegółowo w artykule [Znaczniki](../personal/markers.md).


### Ślady {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)  

Aby zbudować trasę do miejsca docelowego, można wybrać istniejący ślad dostępny w aplikacji OsmAnd. Ślad może być [pobrany](../personal/tracks/manage-tracks.md#import) z wyprzedzeniem, użyty jako [nagrany](../plugins/trip-recording.md) lub utworzony w [Zaplanuj trasę](../plan-route/create-route.md).  

Z listy śladów w *Menu → Moje miejsca → [Ślady](../personal/tracks/manage-tracks.md)* wybierz wymagany przed podłączeniem do systemu multimedialnego pojazdu, a trasa zostanie zbudowana do początku śladu lub wyświetli bieżący kierunek wzdłuż śladu.

Ślady można również wybierać bezpośrednio na ekranie pojazdu w *Android Auto*. Są one uporządkowane w utworzonych folderach, a dla łatwego i szybkiego dostępu do ostatnio otwieranych śladów istnieje specjalny folder [Ostatnio zmodyfikowane](#folder-last-modified).  


### Szukaj {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Przejście do Wyszukiwania zapewnia szybki dostęp do listy ostatniej [historii miejsc docelowych](#history). Podobnie jak w przypadku [Menu nawigacji](../navigation/setup/route-navigation.md#navigation-menu), w którym zebrane są wszystkie metody wyznaczania celu podróży w OsmAnd, takie jak adres, POI lub współrzędne.

Możesz użyć narzędzia Wyszukaj, aby znaleźć wymagane miejsce na mapie do planowania trasy z dowolnej dostępnej kategorii wyszukiwania.

- [Adres](../search/search-address.md) - zacznij wpisywać adres w polu wyszukiwania.
- [POI](../search/search-poi.md) i [Niestandardowe POI](../search/search-poi.md) - lista pobliskich podobnych nazw wyświetli również POI lub ich kategorie.
- [Wyszukiwanie po współrzędnych](../search/search-address#coordinates-search) - wprowadź współrzędne, aby znaleźć punkt na mapie.  


### Folder Ostatnio zmodyfikowane {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)  


Kategorie Ulubione i Ślady mają specjalny folder *Ostatnio zmodyfikowane*. Ponieważ lista w tych kategoriach może być bardzo duża, ponieważ zawiera wszystkie istniejące ulubione lub ślady, folder ten jest niezbędny do łatwego i szybkiego dostępu do najnowszych miejsc docelowych.


## Funkcje nawigacyjne {#navigation-features}

Oprócz podstawowych funkcji aplikacji OsmAnd w *Android Auto*, które zapewniają wygodną nawigację w pojeździe, istnieje szereg dodatkowych funkcji, które poprawiają wrażenia i sprawiają, że nawigacja jest bardziej spersonalizowana, wygodna i wydajna.  


### Następny zakręt {#next-turn}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

Widżet **Następny zakręt** wyświetla odległość i typ [manewru następnego zakrętu](../widgets/nav-widgets.md#next-turn) oraz [nazwę ulicy](../widgets/nav-widgets.md#street-name).

### Informacje o trasie {#route-info}

Informacje o trasie składają się z:

- [Szacowany czas podróży](../widgets/nav-widgets.md#time-to-destination),
- [Szacowany czas przyjazdu](../widgets/nav-widgets.md#time-to-destination),
- [Dystans podróży](../widgets/nav-widgets.md#distance-to-destination).

Po włączeniu [ustawienie widżetu](#eta-next-stop) (Informacje o trasie) pokaże szczegóły trasy do następnego przystanku ([punkt pośredni](../navigation/setup/route-navigation.md#intermediate-destinations)).


### Widżet ostrzeżeń na ekranie {#screen-alert-widget}

Ten widżet informacyjny łączy typy alertów, takie jak **Przejścia dla pieszych** i **Ograniczenie prędkości**.

- Typy alertów mają różny wygląd, który zależy od **<Translate android="true" ids="driving_region"/>** i można je skonfigurować w *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- W *Android Auto* nie ma możliwości ustawienia wyświetlania alertów, należy skonfigurować widżet w aplikacji przed rozpoczęciem nawigacji i podłączeniem urządzenia do pojazdu.
- Szczegółowy opis typów alertów można znaleźć w [tym artykule](../widgets/nav-widgets.md#alert-types).
- Aby skonfigurować alerty ekranowe dla dostępnych profili, zobacz artykuł [Ustawienia nawigacji](../navigation/guidance/navigation-settings.md#screen-alerts).  


### Prędkościomierz {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

Widżet **Prędkościomierz** to zintegrowany element interfejsu, który wyświetla *bieżącą prędkość* na podstawie danych GPS i *ograniczenie prędkości* z [bazy danych OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) oraz [ustawień OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) na ekranie systemu multimedialnego pojazdu.

- **Widżet Prędkościomierz** jest [*zależny od profilu*](../personal/profiles.md), więc jeśli zmienisz ustawienia dla jednego profilu, nie zostaną one zastosowane do innego.
- Nie ma możliwości dostosowania wyświetlania **widżetu Prędkościomierz** bezpośrednio w *Android Auto*, należy go skonfigurować w aplikacji OsmAnd przed rozpoczęciem nawigacji i podłączeniem urządzenia do pojazdu.
- Więcej informacji na temat dodawania i konfigurowania widżetu *Prędkościomierz* na wyświetlaczu można znaleźć w [artykule o widżetach informacyjnych](../widgets/info-widgets.md#speedometer).


### Wygląd mapy (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

Aplikacja OsmAnd umożliwia korzystanie z widoku mapy 3D na ekranie *Android Auto* w celu wyświetlania trasy i nawigacji.

- Aby włączyć tę funkcję, należy wybrać [Renderowanie mapy Wersja 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- Otwórz główne *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* bezpośrednio w aplikacji OsmAnd.
- Po skonfigurowaniu ustawień przycisk **3D** będzie wyświetlany na ekranie *Android Auto*, gdy lista kategorii dla miejsc docelowych jest zamknięta.
- Możesz przełączać się między trybami mapy 3D / 2D, dotykając tego przycisku.


## Ustawienia {#settings}

### Komunikaty głosowe {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Komunikaty głosowe są jedną z najbardziej przydatnych funkcji OsmAnd podczas nawigacji w *Android Auto*, dając wskazówki w czasie rzeczywistym i pozwalając kierowcy skupić się na drodze. Komunikaty głosowe dostarczają jasnych instrukcji dotyczących zakrętów, kierunków i innych instrukcji nawigacyjnych, zapewniając bezpieczniejsze i bardziej komfortowe korzystanie z systemu nawigacyjnego.  

Aby skonfigurować [komunikaty głosowe](../navigation/guidance/voice-navigation.md) zgodnie z wybranym profilem, należy to zrobić przed rozpoczęciem trasy w aplikacji OsmAnd na urządzeniu. W *Android Auto* dostępne jest tylko ustawienie jednoczesnego wyłączania lub włączania wszystkich wybranych komunikatów głosowych (*Przycisk Ustawienia → Komunikaty głosowe (wł./wył.)*).  


### ETA do następnego przystanku {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

W aplikacji OsmAnd można wybrać jeden lub więcej [punktów pośrednich](../navigation/setup/route-navigation.md#intermediate-destinations) dla trasy nawigacyjnej.

Aby włączyć lub wyłączyć [**Informacje o trasie** dla punktu pośredniego (następnego przystanku)](#next-turn), przejdź do *Android Auto (OsmAnd) → Przycisk Ustawienia → Pokaż szczegóły trasy do następnego przystanku → Wł./Wył.*. Opcja ta wyświetla czas i odległość do następnego przystanku na [widżecie *Informacje o trasie*](#route-info).


### Tryb mapy {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* i OsmAnd oferują możliwość dostosowania mapy do warunków oświetleniowych. W *trybie dziennym mapy* schemat kolorów pozostaje jasny i kontrastowy, co ułatwia odczyt nawet w jasnym świetle słonecznym. W *trybie nocnym* mapy stają się ciemniejsze, co pomaga kierowcy lepiej nawigować w ciemności.  

OsmAnd ma [opcje trybu mapy](../map/vector-maps.md#map-mode), ale gdy używasz aplikacji w *Android Auto*, opcje te są ignorowane. Zamiast tego używany jest tryb wybrany w ustawieniach systemowych *Android Auto* dla map.

- Wybierz tryb Dzień lub Noc, aby wyświetlanie mapy pozostało niezmienione.
- Jeśli chcesz, aby tryb wyświetlania mapy przełączał się w zależności od pory dnia, wybierz tryb Automatyczny.  

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->


### Podzielony ekran {#split-screen}

![Ekran Android Auto](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

Aplikacja OsmAnd może być otwierana i używana do nawigacji w *Android Auto* na ekranie systemu multimedialnego pojazdu jednocześnie z aplikacjami muzycznymi, wiadomościami lub innymi powiadomieniami. Konfiguracja wyświetlania na podzielonym ekranie na telefonie podłączonym do *Android Auto* lub na ekranie w systemie pojazdu.  

1. Na ekranie głównym dotknij Aplikacje.
2. Dotknij Ustawienia.
3. Znajdź Wiele okien i wybierz przełącznik.
4. Wróć do ekranu głównego.  

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->


W ustawieniach Android Auto można zmienić położenie paska zadań i układ ekranu głównego:

- **Pozycja paska zadań:**  
  Przejdź do *Ustawienia Android Auto → Pokaż szybkie sterowanie dla aplikacji* i wyłącz przełącznik. Spowoduje to przeniesienie paska zadań z dołu na bok ekranu.

- **Układ ekranu głównego:**  
  Przejdź do *Ustawienia Android Auto → Zmień układ → Zmień lokalizację fotela kierowcy*, aby dostosować układ w oparciu o pozycję fotela kierowcy.


## Częste problemy i rozwiązania {#common-issues-and-solutions}

1. [Problem z orientacją mapy.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Problem z regulacją głośności.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Opóźnienia w lokalizacji (awarie ANR).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Częste pytania dotyczące ekranu połączenia:
    - *Dlaczego nie mogę sterować aplikacją z telefonu, gdy jest on podłączony do Android Auto?*  
        Ze względów bezpieczeństwa ekran aplikacji OsmAnd na telefonie jest zablokowany po podłączeniu do Android Auto. Możesz wchodzić w interakcję z aplikacją tylko za pośrednictwem wyświetlacza samochodowego.
    - *Czy mogę wyłączyć zablokowany ekran i korzystać z aplikacji na telefonie?*  
        Nie, Android Auto wymusza to ograniczenie, aby zapobiec rozpraszaniu uwagi podczas jazdy.
    - *Co powinienem zrobić, jeśli mój telefon i wyświetlacz samochodowy wydają się być rozłączone?*  
        Upewnij się, że urządzenie jest prawidłowo podłączone przez USB lub Bluetooth.  
        Uruchom ponownie system informacyjno-rozrywkowy samochodu i aplikację OsmAnd, jeśli połączenie jest niestabilne.