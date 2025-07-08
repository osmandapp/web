---
source-hash: 3be3e0b1234aafa204632357b26d98724820bfbfafe67f7237cda7aae4d48299
sidebar_position: 9
title: Android Auto
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

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_overview.png)

[**Android Auto**](https://www.android.com/auto) to oprogramowanie stworzone przez Google, które umożliwia użytkownikom podłączenie urządzeń z systemem Android do kompatybilnych systemów multimedialnych pojazdów. *Android Auto* zapewnia dostosowaną i zoptymalizowaną wersję aplikacji OsmAnd do bezpiecznego użytkowania podczas jazdy, ułatwiając i zabezpieczając dostęp do funkcji nawigacyjnych aplikacji.

Funkcja **Android Auto** jest obsługiwana tylko podczas korzystania z aplikacji OsmAnd dostępnej w [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023).

> **UWAGA**: *Android Auto nie jest bezpośrednim odzwierciedleniem aplikacji mobilnej OsmAnd. Ma uproszczony interfejs, skupiający się na podstawowych funkcjach nawigacyjnych, aby zapewnić bezpieczną jazdę. Niektóre zaawansowane funkcje nie są obsługiwane z powodu ograniczeń platformy.*

### Ekran połączenia {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)

Gdy urządzenie jest podłączone do *Android Auto*, mapa na ekranie aplikacji jest zablokowana. Jest to celowa funkcja bezpieczeństwa, mająca na celu zapewnienie, że nawigacja jest kontrolowana wyłącznie z wyświetlacza samochodu, minimalizując rozpraszanie uwagi podczas jazdy. Sprawdź [często zadawane pytania](#common-issues-and-solutions) dotyczące ekranu połączenia.

### Ekran startowy {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Po otwarciu aplikacji wyświetlana jest lista kategorii. Aby ułatwić nawigację, można ją ukryć, dotykając przycisku w prawym górnym rogu ekranu.

- Dotknij przycisku menu, aby ukryć listę kategorii.
- W prawym górnym rogu ekranu dotknij przycisku obok przycisków funkcyjnych, jeśli chcesz wrócić do listy.

### Interakcja z mapą {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto* wyświetla interfejs OsmAnd dostosowany do ekranu systemu multimedialnego pojazdu. Interakcja z mapą jest ograniczona do przycisków takich jak:

- [Menu OsmAnd](#destination-points). Zawiera listę dostępnych opcji przypisywania punktu końcowego trasy lub swobodnej jazdy.
- [Ustawienia](#voice-prompts). Ten przycisk odpowiada za: 1. dostęp do włączania/wyłączania *komunikatów głosowych* podczas nawigacji po wybranej trasie; 2. wyświetlanie szczegółów trasy (czas i odległość) do następnego przystanku.
- [Szukaj](#search). Dotknięcie przycisku otwiera ekran z dostępem do funkcji wyszukiwania.
- [Moja lokalizacja](../widgets/map-buttons.md#my-location-and-zoom). Przesuwa widoczną część mapy tak, aby Twoja bieżąca lokalizacja znajdowała się na środku ekranu.
- [Powiększ](../widgets/map-buttons.md#my-location-and-zoom). Umożliwia powiększanie i pomniejszanie widocznej części mapy.
- [Kompas](../widgets/map-buttons.md#compass). Pokazuje, który z czterech dostępnych trybów orientacji mapy na ekranie urządzenia jest wybrany.

## Wymagane parametry konfiguracji {#required-setup-parameters}

### Rozpocznij nawigację {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

Aby OsmAnd działał w *Android Auto*, musisz [podłączyć](#connection-screen) swoje urządzenie z systemem Android do systemu multimedialnego pojazdu. System operacyjny Android musi być zaktualizowany do wersji 6.0 lub nowszej.

- Aby dowiedzieć się, jak podłączyć i skonfigurować urządzenie, odwiedź strony [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en).

- Nie wszystkie pojazdy obsługują możliwość podłączenia urządzenia. Sprawdź [listę dla *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).

- Musisz zakupić **płatną wersję** aplikacji lub wykupić [subskrypcję](../purchases/android.md#free-and-paid-features). Sprawdź swoją bieżącą subskrypcję tutaj *Menu → Ustawienia → Zakupy*.

- *Android Auto* używa pierwszego [profilu jazdy OsmAnd](#profile-first) na liście profili do nawigacji. Ustaw preferowany profil jako pierwszy, z wyjątkiem profilu *Przeglądaj mapę*, który nie jest odczytywany przez *Android Auto*. Aby to zrobić, przejdź do OsmAnd *Menu → Ustawienia → Profile aplikacji → Edytuj listę profili* → przenieś swój profil [**Jazda**](#profile-first) na pierwsze miejsce lub po profilu *Przeglądaj mapę*.

- Ważne jest, aby pamiętać, że *Android Auto* jest aplikacją intensywnie wykorzystującą dane, w tym dane mobilne, a jakość systemu może zależeć od jakości połączenia i szybkości dostępu do Internetu.

### Profil pierwszy {#profile-first}

Nie można wybrać profilu bezpośrednio w *Android Auto* na ekranie pojazdu.
Jeśli masz już wybrany na swoim urządzeniu profil odpowiadający typowi pojazdu, taki jak *Jazda*, *Ciężarówka*, *Samochód*, *Motocykl*, *Motorower*, **aplikacja automatycznie aktywuje** odpowiedni profil po podłączeniu do Android Auto. Na przykład, jeśli masz wybrany profil *Ciężarówka* i Twoje urządzenie połączy się z **Android Auto**, aplikacja aktywuje ten profil.

Jeśli nie masz wybranego na swoim urządzeniu żadnego profilu *Jazda*, który odpowiada Twojemu typowi pojazdu, OsmAnd automatycznie przełączy się na profil *Jazda*. Ma to na celu zapewnienie podstawowej nawigacji i zapobieżenie możliwym problemom spowodowanym użyciem niewłaściwego profilu dla konkretnego typu pojazdu.

**Dlaczego to jest ważne:**

1. **Bezpieczeństwo jazdy.** Różne rodzaje transportu wymagają różnych informacji i ustawień podczas jazdy. Na przykład, kierowcy ciężarówek mogą mieć ograniczenia dotyczące wysokości, wagi i szerokości swoich pojazdów, więc profil *Ciężarówka* zapewnia im odpowiednie ograniczenia i wskazówki. Natomiast rowerzyści i motocykliści potrzebują informacji o ścieżkach rowerowych i trasach, bez danych dla ciężarówek.

2. **Użyteczność i wydajność.** Nawigacja powinna być dostosowana do potrzeb konkretnego środka transportu. Pozwala to użytkownikom skrócić czas potrzebny na znalezienie optymalnych tras i uniknąć niepotrzebnych ograniczeń ruchu.

3. **Unikanie błędów.** Przełączenie na profil *Jazda*, gdy nie ma konkretnego profilu dla wybranego środka transportu, zapewnia stały dostęp do minimalnych niezbędnych ustawień i informacji, co pozwala uniknąć możliwych błędów i nieporozumień podczas jazdy.

## Punkty docelowe {#destination-points}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

Możesz wybrać wcześniej ustawione i dodane [POI](../map/point-layers-on-map.md#points-of-interest-pois), lub [Ulubione](../personal/favorites.md), lub [Znaczniki](../personal/markers.md) jako punkt docelowy. Możliwe jest również wybranie nagranej lub pobranej [Trasy](../personal/tracks/manage-tracks.md) dla trasy, użycie [Wyszukiwania](../search/index.md), lub wybranie celu z [Historii](../search/search-history.md) trasy lub skorzystanie z opcji *Wolna jazda*.

1. Jeśli chcesz, aby konkretna lokalizacja na mapie była punktem końcowym, wybierz odpowiednią kategorię punktów z listy, [POI](#poi-categories), [Ulubione](#favorites) lub [Znaczniki mapy](#map-markers).

    - Wszystkie kategorie mogą zawierać nie więcej elementów listy niż przewiduje system multimedialny Twojego pojazdu. Oznacza to, że lista w *Android Auto* może być niekompletna, a wszystkie pozostałe foldery są dostępne tylko w aplikacji OsmAnd na Twoim urządzeniu.
    - Folder [Ostatnio modyfikowane](#folder-last-modified) zawiera listę ostatnich celów, posortowanych według daty dodania lub zmiany.
    - Lista wszystkich pozostałych folderów jest posortowana według ostatniej aktualizacji, nowe foldery znajdują się na górze listy. Nie ma możliwości ręcznej zmiany ich kolejności.
    - Lista punktów w folderach jest posortowana według odległości do nich, zaczynając od najbliższego. Każdy punkt ma nazwę lub współrzędne, ikonę (kolor i ikona ustawione domyślnie lub wybrane przez Ciebie w aplikacji OsmAnd) oraz odległość od punktu bieżącej lokalizacji do niego.

2. Wybierz kategorię [Historia](#history), aby znaleźć jeden z ostatnich celów, które są przechowywane w pamięci urządzenia.

3. Wybierz [Szukaj](#search), aby wprowadzić cel z dostępnych kategorii wyszukiwania.

4. Wybierz **Wolna jazda**, aby odbyć podróż bez określonego punktu końcowego.

:::note
Podczas jazdy wybrane punkty mogą być [ogłaszane](#voice-prompts) podczas zbliżania się do nich lub ich mijania. Zobacz ustawienia [Komunikatów głosowych](../navigation/guidance/voice-navigation.md) w odpowiednim artykule, aby skonfigurować powiadomienia głosowe.
:::

### Historia {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)

W kategorii Historia możesz wybrać cel z listy punktów końcowych. Są one posortowane według najnowszego użycia, zaczynając od najnowszego. Może to być wygodne do szybkiego dostępu do często używanych tras. Aby dowiedzieć się, jak używać lub usuwać cel, przeczytaj artykuł [Historia wyszukiwania](../search/search-history.md).

### Kategorie POI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

POI (Punkty Interesu) to rodzaj punktów, które identyfikują miejsca lub obiekty na mapie, które są ważne lub interesujące dla użytkowników. Są one wyróżnione specjalnymi ikonami dostępnymi w [ustawieniach OsmAnd](../map/point-layers-on-map.md#poi-types) i posortowane w grupy.

Aby zbudować trasę do POI w *Android Auto*, wykonaj następujące kroki:

1. Wybierz potrzebny POI z listy dostępnych kategorii lub wprowadź nazwę POI za pomocą [Wyszukiwania](#search).
2. Dotknięcie kategorii otwiera następny ekran z listą POI.
3. Dotknięcie elementu na liście otwiera ekran nawigacji.
4. OsmAnd oblicza trasę i wyświetla ją na ekranie *Android Auto*. Dotknij przycisku **Start**, aby rozpocząć nawigację do tej lokalizacji.
5. W zależności od [ustawień](../navigation/guidance/navigation-settings.md) aplikacji OsmAnd i Twojego pojazdu, możesz otrzymywać [komunikaty głosowe](#voice-prompts), które poprowadzą Cię do celu.

### Ulubione {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>

*Ulubione* to jedna z funkcji OsmAnd, która pozwala tworzyć swego rodzaju zakładki (notatki) na mapie. Podczas korzystania z *Android Auto* nie można dodawać ani modyfikować Ulubionych, można jedynie korzystać z istniejących. Lista [Ulubionych](../personal/favorites.md#manage-favorites) znajduje się w aplikacji OsmAnd *Menu → Moje miejsca → Ulubione*. Jeśli chcesz ich użyć do nawigacji, dodaj niezbędne miejsca do ulubionych przed podłączeniem urządzenia do systemu multimedialnego pojazdu.

Aby utworzyć trasę do ulubionego punktu w *Android Auto*, wykonaj następujące kroki:

1. Dotknięcie folderu otwiera następny ekran z listą folderów ulubionych.
2. Dotknięcie elementu na liście otwiera nawigację.

### Znaczniki mapy {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Aby zdefiniować swój cel podróży jako znacznik mapy, musisz najpierw utworzyć wymaganą liczbę znaczników w aplikacji OsmAnd na swoim urządzeniu przed podłączeniem go do systemu. Znaczniki muszą być dostępne na liście *Menu → Znaczniki mapy*. Jest to szczegółowo opisane w artykule [Znaczniki](../personal/markers.md).

### Trasy {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)

Aby zbudować trasę do celu, możesz wybrać istniejącą trasę dostępną w aplikacji OsmAnd. Trasę można [pobrać](../personal/tracks/manage-tracks.md#import) z wyprzedzeniem, użyć jako [nagraną](../plugins/trip-recording.md) lub utworzyć w [Planowaniu trasy](../plan-route/create-route.md).

Z listy tras w *Menu → Moje miejsca → [Trasy](../personal/tracks/manage-tracks.md)*, wybierz wymaganą przed podłączeniem do systemu multimedialnego pojazdu, a trasa zostanie zbudowana do początku trasy lub wyświetli bieżący kierunek wzdłuż trasy.

Trasy można również wybrać bezpośrednio na ekranie pojazdu w *Android Auto*. Są one zorganizowane w utworzone przez Ciebie foldery, a dla łatwego i szybkiego dostępu do ostatnio otwieranych tras istnieje specjalny folder [Ostatnio modyfikowane](#folder-last-modified).

### Szukaj {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Przejście do wyszukiwania zapewnia szybki dostęp do listy ostatniej [historii celów](#history). Podobnie jak w [menu nawigacji](../navigation/setup/route-navigation.md#navigation-menu), gdzie zebrane są wszystkie metody wyboru celu w OsmAnd, takie jak adres, POI lub współrzędne.

Możesz użyć narzędzia wyszukiwania, aby znaleźć wymagane miejsce na mapie do planowania trasy z dowolnej dostępnej kategorii wyszukiwania.

- [Adres](../search/search-address.md) - zacznij wpisywać adres w polu wyszukiwania.
- [POI](../search/search-poi.md) i [Niestandardowe POI](../search/search-poi.md) - lista pobliskich podobnych nazw wyświetli również POI lub ich kategorie.
- [Wyszukiwanie współrzędnych](../search/search-address#coordinates-search) - wprowadź współrzędne, aby znaleźć punkt na mapie.

### Folder Ostatnio modyfikowane {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)

Kategorie Ulubione i Trasy mają specjalny folder *Ostatnio modyfikowane*. Ponieważ lista w tych kategoriach może być bardzo długa, ponieważ zawiera wszystkie Twoje istniejące ulubione lub trasy, ten folder jest niezbędny do łatwego i szybkiego dostępu do Twoich najnowszych celów.

## Funkcje nawigacji {#navigation-features}

Oprócz podstawowych funkcji aplikacji OsmAnd w *Android Auto*, które zapewniają wygodną nawigację w Twoim pojeździe, istnieje szereg dodatkowych funkcji, które zwiększają komfort użytkowania i sprawiają, że nawigacja jest bardziej spersonalizowana, wygodna i wydajna.

### Następny zakręt i informacje o trasie {#next-turn--route-info}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

Widżet **Następny zakręt** wyświetla odległość i typ [następnego manewru skrętu](../widgets/nav-widgets.md#next-turn) oraz [nazwę ulicy](../widgets/nav-widgets.md#street-name).

Informacje o trasie składają się z:

- [szacowanego czasu podróży](../widgets/nav-widgets.md#time-to-destination),
- [szacowanego czasu przybycia](../widgets/nav-widgets.md#time-to-destination),
- [odległości podróży](../widgets/nav-widgets.md#distance-to-destination).

Po włączeniu [ustawienie widżetu](#eta-next-stop) (Informacje o trasie) pokaże szczegóły trasy do następnego przystanku ([punktu pośredniego](../navigation/setup/route-navigation.md#intermediate-destinations)).

### Widżet alertów ekranowych {#screen-alert-widget}

Ten widżet informacyjny łączy typy alertów, takie jak **Przejścia dla pieszych** i **Ograniczenie prędkości**.

- Rodzaje alertów mają różny wygląd, który zależy od **<Translate android="true" ids="driving_region"/>** i można go skonfigurować w *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- W *Android Auto* nie ma możliwości ustawienia wyświetlania alertów, należy skonfigurować widżet w aplikacji przed rozpoczęciem nawigacji i podłączeniem urządzenia do pojazdu.
- Szczegółowy opis typów alertów znajduje się w [tym artykule](../widgets/nav-widgets.md#alert-types).
- Aby skonfigurować alerty ekranowe dla dostępnych profili, zobacz artykuł [Ustawienia nawigacji](../navigation/guidance/navigation-settings.md#screen-alerts).

### Prędkościomierz {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

Widżet **Prędkościomierz** to zintegrowany element interfejsu, który wyświetla *aktualną prędkość* za pomocą danych GPS oraz *ograniczenie prędkości* z [bazy danych OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) i [ustawień OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) na ekranie systemu multimedialnego pojazdu.

- **Widżet prędkościomierza** jest [*zależny od profilu*](../personal/profiles.md), więc jeśli zmienisz ustawienia dla jednego profilu, nie zostaną one zastosowane do innego.
- Nie ma możliwości dostosowania wyświetlania **widżetu prędkościomierza** bezpośrednio w *Android Auto*, należy go skonfigurować w aplikacji OsmAnd przed rozpoczęciem nawigacji i podłączeniem urządzenia do pojazdu.
- Aby uzyskać więcej informacji na temat dodawania i konfigurowania widżetu *Prędkościomierz* do wyświetlacza, przeczytaj artykuł [Widżety informacyjne](../widgets/info-widgets.md#speedometer).

### Wygląd mapy (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

Aplikacja OsmAnd umożliwia korzystanie z widoku mapy 3D na ekranie *Android Auto* do wyświetlania trasy i nawigacji.

- Aby włączyć tę funkcję, musisz wybrać [Wersję renderowania mapy 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- Otwórz główne *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* bezpośrednio w aplikacji OsmAnd.
- Po skonfigurowaniu ustawień, **przycisk 3D** zostanie wyświetlony na ekranie *Android Auto*, gdy lista kategorii dla celów zostanie zamknięta.
- Możesz przełączać się między trybami mapy 3D / 2D, dotykając tego przycisku.

### Komunikaty głosowe {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Komunikaty głosowe to jedna z najbardziej przydatnych funkcji OsmAnd podczas nawigacji w *Android Auto*, zapewniająca wskazówki w czasie rzeczywistym i pozwalająca kierowcy skupić się na drodze. Komunikaty głosowe dostarczają jasnych instrukcji dotyczących zakrętów, kierunków i innych wskazówek nawigacyjnych, zapewniając bezpieczniejsze i wygodniejsze korzystanie z systemu nawigacyjnego.

Aby skonfigurować [komunikaty głosowe](../navigation/guidance/voice-navigation.md) zgodnie z wybranym profilem, musisz to zrobić przed rozpoczęciem trasy w aplikacji OsmAnd na swoim urządzeniu. W *Android Auto* dostępna jest tylko opcja włączania lub wyłączania wszystkich wybranych komunikatów głosowych jednocześnie (*Przycisk Ustawienia → Komunikaty głosowe (włącz/wyłącz)*).

### ETA następny przystanek {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

W aplikacji OsmAnd możesz wybrać jeden lub więcej [punktów pośrednich](../navigation/setup/route-navigation.md#intermediate-destinations) dla trasy nawigacji.

Aby włączyć lub wyłączyć [**Informacje o trasie** dla punktu pośredniego (następny przystanek)](#next-turn--route-info), przejdź do *Android Auto (OsmAnd)→ Przycisk Ustawienia → Pokaż szczegóły trasy do następnego przystanku → Włącz/Wyłącz*. Ta opcja wyświetla czas i odległość do następnego przystanku na widżecie [*Informacje o trasie*](#next-turn--route-info).

### Tryb mapy {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* i OsmAnd oferują możliwość dostosowania mapy do warunków oświetleniowych. W *Trybie mapy dziennej* schemat kolorów pozostaje jasny i kontrastowy, co ułatwia odczyt nawet w jasnym świetle słonecznym. W *Trybie nocnym* mapy stają się ciemniejsze, co pomaga kierowcy lepiej nawigować w ciemności.

OsmAnd ma opcje [trybu mapy](../map/vector-maps.md#map-mode), ale gdy używasz aplikacji w *Android Auto*, te opcje są ignorowane. Zamiast tego używany jest tryb wybrany w ustawieniach systemu *Android Auto* dla map.

- Wybierz tryb dzienny lub nocny, aby wyświetlanie mapy pozostało niezmienione.
- Jeśli chcesz, aby tryb wyświetlania mapy przełączał się w zależności od pory dnia, wybierz tryb automatyczny.

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->

### Podzielony ekran {#split-screen}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

Aplikacja OsmAnd może być otwierana i używana do nawigacji w *Android Auto* na ekranie systemu multimedialnego pojazdu jednocześnie z aplikacjami muzycznymi, wiadomościami lub innymi powiadomieniami. Konfiguracja wyświetlania podzielonego ekranu na telefonie podłączonym do *Android Auto* lub na ekranie w systemie pojazdu.

1. Na ekranie głównym dotknij Aplikacje.
2. Dotknij Ustawienia.
3. Znajdź Wiele okien i wybierz przełącznik.
4. Wróć do ekranu głównego.

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->

W ustawieniach Android Auto możesz zmienić położenie paska zadań i układu ekranu głównego:

- **Położenie paska zadań:**
  Przejdź do *Ustawień Android Auto → Pokaż szybkie sterowanie dla aplikacji* i wyłącz przełącznik. Spowoduje to przeniesienie paska zadań z dołu na bok ekranu.

- **Układ ekranu głównego:**
  Przejdź do *Ustawień Android Auto → Zmień układ → Zmień położenie siedzenia kierowcy*, aby dostosować układ w zależności od pozycji siedzenia kierowcy.

## Typowe problemy i rozwiązania {#common-issues-and-solutions}

1. [Problem z orientacją mapy.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Problem z regulacją głośności.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Opóźnienia lokalizacji (awarie ANR).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Często zadawane pytania dotyczące ekranu połączenia:
    - *Dlaczego nie mogę sterować aplikacją z telefonu, gdy jest podłączony do Android Auto?*
        Ze względów bezpieczeństwa ekran aplikacji OsmAnd na telefonie jest zablokowany, gdy jest podłączony do Android Auto. Możesz wchodzić w interakcje z aplikacją tylko za pośrednictwem wyświetlacza samochodu.
    - *Czy mogę wyłączyć zablokowany ekran i używać aplikacji na telefonie?*
        Nie, Android Auto narzuca to ograniczenie, aby zapobiec rozpraszaniu uwagi podczas jazdy.
    - *Co powinienem zrobić, jeśli mój telefon i wyświetlacz samochodu wydają się rozłączone?*
        Upewnij się, że urządzenie jest prawidłowo podłączone za pomocą USB lub Bluetooth.
        Uruchom ponownie system infotainment samochodu i aplikację OsmAnd, jeśli połączenie jest niestabilne.

> *Ostatnia aktualizacja: marzec 2025*