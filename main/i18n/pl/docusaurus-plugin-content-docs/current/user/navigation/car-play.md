---
source-hash: ab1bf0f074bc95cb4e2f827ac1233fdf86d268b226686d37920e9eac0ea746ec
sidebar_position: 10
title: CarPlay
android: false
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

## Przegląd {#overview}

Prowadzenie pojazdu i jednoczesne korzystanie z telefonu lub tabletu jest zazwyczaj zabronione przez prawo ze względów bezpieczeństwa. [***CarPlay***](https://www.apple.com/ios/carplay/) to oprogramowanie, które zapewnia dostosowaną i zoptymalizowaną wersję aplikacji OsmAnd do bezpiecznego użytkowania podczas jazdy, ułatwiając i zabezpieczając dostęp do funkcji nawigacyjnych aplikacji.

Aby korzystać z *CarPlay* na ekranie pojazdu, wykonaj następujące kroki:

1. *CarPlay* nie jest dostępne we wszystkich krajach. Upewnij się, że jest obsługiwane w Twoim [kraju lub regionie](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) oraz że *CarPlay* jest obsługiwane w Twoim [modelu pojazdu](https://www.apple.com/ios/carplay/available-models/).
2. [Podłącz swoje urządzenie](https://support.apple.com/en-gb/HT203412) do systemu multimedialnego pojazdu za pomocą portu USB lub bezprzewodowo przez Wi-Fi lub Bluetooth. Przy pierwszym połączeniu może być wymagane zezwolenie na korzystanie z *CarPlay* na Twoim urządzeniu.
3. Po podłączeniu, *interfejs CarPlay* automatycznie pojawi się na ekranie pojazdu ze wszystkimi dostępnymi aplikacjami. Jeśli *ekran główny CarPlay* się nie pojawi, wybierz *logo CarPlay* na wyświetlaczu pojazdu.

#### Interfejs CarPlay {#carplay-interface}

*CarPlay* **nie jest bezpośrednim odwzorowaniem** aplikacji mobilnej OsmAnd. Ma uproszczony interfejs, skupiający się na podstawowych funkcjach nawigacyjnych, aby zapewnić bezpieczną jazdę. Niektóre zaawansowane funkcje nie są obsługiwane z powodu ograniczeń platformy.

### Ekran połączenia {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Gdy Twoje urządzenie jest podłączone do *CarPlay*, mapa na ekranie aplikacji jest zablokowana. Jest to celowa funkcja bezpieczeństwa, która zapewnia, że nawigacja jest kontrolowana wyłącznie z wyświetlacza samochodu, minimalizując rozpraszanie uwagi podczas jazdy. Sprawdź [często zadawane pytania](#common-issues-and-solutions) dotyczące ekranu połączenia.

### Pozycja lokalizacji w CarPlay {#location-position-in-carplay}

Aplikacja OsmAnd dla *CarPlay* umożliwia dostosowanie pozycji wskaźnika bieżącej lokalizacji na ekranie, aby uniknąć nakładania się na trasę i inne ważne szczegóły mapy.

**Jak zmienić pozycję wskaźnika:**

- Przejdź do *Menu → Konfiguruj ekran → Inne → [Pozycja lokalizacji na ekranie](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- Wybierz preferowane położenie:
    - **Automatycznie (domyślnie)**. Aplikacja automatycznie zmienia pozycję wskaźnika dla trybu nawigacji lub swobodnego ruchu.
    - **Środek**. Wskaźnik jest umieszczony na środku ekranu, odpowiedni do standardowej nawigacji.
    - **Dół**. Wskaźnik jest umieszczony bliżej dolnej części ekranu, co ułatwia obserwację otaczających obiektów i złożonych skrzyżowań.

### Interakcja z mapą {#interaction-with-the-map}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

*CarPlay* wyświetla interfejs OsmAnd dostosowany do ekranu systemu multimedialnego pojazdu. Interakcja z mapą jest ograniczona do:

- [Moja lokalizacja](../widgets/map-buttons.md#my-location-and-zoom). Przesuwa widoczną część mapy tak, aby Twoja bieżąca lokalizacja znajdowała się na środku ekranu.
- [Powiększenie](../widgets/map-buttons.md#my-location-and-zoom). Umożliwia powiększanie i pomniejszanie widocznej części mapy.

## Wymagane parametry konfiguracji {#required-setup-parameters}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- Najpierw musisz wybrać i skonfigurować profil, który będzie używany podczas łączenia się z *CarPlay*. Możesz przeczytać, jak skonfigurować profil w artykule [Profile (Ustawienia)](../personal/profiles).
    - Wygodnym profilem do korzystania z *CarPlay* może być *Jazda*, a typem routingu może być [Routing samochodowy](../navigation/routing/car-based-routing.md).
    - OsmAnd posiada osobną pozycję [Profil CarPlay](#carplay-profile) dla szybkiego dostępu do listy profili dostępnych do połączenia z *CarPlay*.
- Aby OsmAnd działał, [podłącz swoje urządzenie iOS](#overview) do systemu multimedialnego pojazdu. Aby dowiedzieć się więcej o tym, jak podłączyć i skonfigurować swoje urządzenie, możesz odwiedzić stronę [**CarPlay**](https://support.apple.com/en-us/HT205634).
- Musisz posiadać jedną z [płatnych wersji lub subskrypcji OsmAnd](../purchases/ios#free-and-paid-features). Sprawdź to tutaj *Menu → Ustawienia → Zakupy*.
- Po podłączeniu możesz ustawić cel i rozpocząć nawigację OsmAnd w *CarPlay*.

:::note
Może być potrzebne połączenie z Internetem, aby korzystać z OsmAnd w *CarPlay*. Jeśli Twoje urządzenie ma ograniczony dostęp do Internetu, możesz [*wstępnie załadować lub utworzyć trasy*](../personal/tracks/manage-tracks.md) i używać ich bez Internetu.
:::

### Rozpocznij nawigację {#start-navigation}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-start(1).png)

Aby korzystać z wersji iOS aplikacji OsmAnd w *CarPlay*, musisz zakupić [płatną wersję aplikacji lub subskrybować](../purchases/ios#free-and-paid-features).

1. Aby utworzyć trasę, musisz wybrać [punkt końcowy trasy](#select-a-route-endpoint) na *ekranie CarPlay* lub w [aplikacji OsmAnd](../navigation/setup/route-navigation.md).
2. Możesz użyć [komunikatów głosowych](#voice-prompts), aby słuchać wskazówek lub wiadomości o problemach na drodze.
3. Po wybraniu lokalizacji naciśnij **Start**, aby podążać trasą.
4. Podczas jazdy ekran pojazdu będzie wyświetlał informacje OsmAnd o Twojej bieżącej lokalizacji na mapie, wskazówki dojazdu, odległość do następnego zakrętu, linie, czas przybycia i odległość do celu.
    ![Ekran CarPlay](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. Jeśli chcesz zmienić trasę lub wybrać inną lokalizację, możesz nacisnąć odpowiedni przycisk na ekranie.
6. Po zakończeniu trasy możesz dezaktywować *CarPlay*, odłączając urządzenie od systemu multimedialnego pojazdu.

:::note
Wszystkie kategorie do wyboru **punktu końcowego trasy**, *[Historia](#history), [POI](#poi-categories), [Markery](#map-markers), [Szukaj](#search), [Ulubione](#favorites) i [Ślady](#tracks)* mogą zawierać nie więcej elementów listy niż zapewnia system multimedialny Twojego pojazdu. Zazwyczaj w większości pojazdów listy są dynamicznie ograniczone do 12 lub 24 elementów. Oznacza to, że lista w *CarPlay* może nie być kompletna. Całkowita liczba elementów i rzeczywista liczba wyświetlanych elementów jest wskazana pod nazwą folderu.
:::

### Profil CarPlay {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![Ustawienia ogólne Domyślny profil Android](@site/static/img/personal/profiles/CarPlay_ios.png)

**Profil CarPlay** to specyficzny profil w aplikacji OsmAnd do wygodnego korzystania z systemu audio i wideo samochodu w celu dalszego wyświetlania tych danych na telefonie.

Ten profil jest używany tak długo, jak Twoje urządzenie jest podłączone do *CarPlay*. Stuknij pole *Profil CarPlay* w menu *Ustawienia OsmAnd* i z listy [profili włączonych do użycia](../personal/profiles.md) wybierz profil, z którym zostanie aktywowany *CarPlay*.

Nie możesz wybrać profilu bezpośrednio w *CarPlay* z ekranu pojazdu. Najpierw wybierz wymagany profil na swoim urządzeniu i przypisz do niego *profil CarPlay*. Powinieneś wybrać profil, który odpowiada typowi pojazdu, taki jak *Jazda*, *Ciężarówka*, *Samochód*, *Motocykl* lub *Motorower*. **Aplikacja automatycznie aktywuje** *profil CarPlay* po podłączeniu do pojazdu.

**Dlaczego ważne jest, aby wybrać odpowiedni profil dla Twojego typu pojazdu.**

- **Bezpieczeństwo jazdy.** Różne typy transportu wymagają różnych informacji i ustawień podczas jazdy. Na przykład, kierowcy ciężarówek mogą być ograniczeni pod względem wysokości, wagi i szerokości swoich pojazdów, więc profil *Ciężarówka* zapewnia im odpowiednie ograniczenia i wskazówki. Natomiast rowerzyści i motocykliści potrzebują informacji o ścieżkach rowerowych i trasach, bez danych dla ciężarówek.
- **Użyteczność i wydajność.** Nawigacja powinna być dostosowana do potrzeb konkretnego środka transportu. Pozwala to użytkownikom skrócić czas potrzebny na znalezienie optymalnych tras i uniknąć niepotrzebnych ograniczeń ruchu.

## Wybierz punkt końcowy trasy {#select-a-route-endpoint}

Możesz wybrać wcześniej ustawione i dodane [POI](../map/point-layers-on-map.md#points-of-interest-pois), lub [Ulubione](../personal/favorites.md), lub [Markery](../personal/markers.md) jako punkt docelowy. Możliwe jest również wybranie nagranego lub pobranego [Śladu](../personal/tracks/index.md) dla trasy, użycie [Wyszukiwania](../search/index.md) lub wybranie celu z [Historii](../search/search-history.md) trasy.

1. Jeśli chcesz, aby konkretna lokalizacja na mapie była punktem końcowym, wybierz odpowiednią kategorię punktów z listy: [POI](#poi-categories), [Ulubione](#favorites) lub [Markery mapy](#map-markers).

    - Wszystkie kategorie mogą zawierać nie więcej elementów listy niż zapewnia system multimedialny Twojego pojazdu. Oznacza to, że lista w *CarPlay* może być niekompletna, a wszystkie inne foldery są dostępne tylko w aplikacji OsmAnd na Twoim urządzeniu.
    - Folder [Ostatnio modyfikowane](#folder-last-modified) zawiera listę ostatnich celów, posortowanych według daty dodania lub zmiany.
    - Lista wszystkich innych folderów jest posortowana według najnowszej aktualizacji, nowe foldery znajdują się na początku listy. Nie ma możliwości ręcznej zmiany ich kolejności.
    - Lista punktów w folderach jest posortowana według odległości do nich, zaczynając od najbliższego. Każdy punkt ma nazwę lub współrzędne, ikonę w kształcie (kolor i ikona ustawione domyślnie lub wybrane przez Ciebie w aplikacji OsmAnd) oraz odległość od punktu bieżącej lokalizacji do niego.
2. Wybierz kategorię [Historia](#history), aby znaleźć jeden z ostatnich celów, które są przechowywane w pamięci urządzenia.
3. Wybierz [Szukaj](#search), aby wprowadzić cel z dostępnych kategorii wyszukiwania.

:::note
Podczas jazdy wybrane punkty mogą być [ogłaszane](#voice-prompts) po zbliżeniu się do nich lub ich minięciu. Zobacz ustawienia [Komunikatów głosowych](../navigation/guidance/voice-navigation.md) w odpowiednim artykule, aby skonfigurować powiadomienia głosowe.
:::

### Historia {#history}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car_play_history.png)

W **kategorii Historia** możesz wybrać cel z listy punktów końcowych.

- Są one posortowane według najnowszego użycia, zaczynając od najnowszych.
- Może to być wygodne do szybkiego dostępu do często używanych tras.
- Aby dowiedzieć się, jak używać lub usuwać cel, przeczytaj artykuł [Historia wyszukiwania](../search/search-history.md).

### Kategorie POI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

*POI (Punkty Interesu)* to rodzaj punktów, które identyfikują miejsca lub obiekty na mapie, które są ważne lub interesujące dla użytkowników. Są one wyróżnione specjalnymi ikonami dostępnymi w [ustawieniach OsmAnd](../map/point-layers-on-map.md#poi-types) i posortowane w grupy.

Aby zbudować trasę do *POI* w *CarPlay*, wykonaj następujące kroki:

1. Wybierz potrzebny *POI* z listy dostępnych kategorii lub wprowadź nazwę POI za pomocą [Wyszukiwania](#search).
2. OsmAnd oblicza trasę i wyświetla ją na *ekranie CarPlay*. Stuknij przycisk **Start**, aby rozpocząć nawigację do tej lokalizacji.
3. W zależności od ustawień aplikacji OsmAnd i Twojego pojazdu, możesz otrzymywać [komunikaty głosowe](#voice-prompts), które poprowadzą Cię do celu.
4. Po dotarciu do lokalizacji aplikacja powiadomi Cię, że dotarłeś do *POI*.

### Ulubione {#favorites}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**Ulubione** to jedna z funkcji OsmAnd, która pozwala na tworzenie swego rodzaju notatek na mapie.

- Podczas korzystania z **CarPlay** nie możesz dodawać ani modyfikować *Ulubionych*, możesz tylko korzystać z istniejących.
- Listę [Ulubionych](../personal/favorites.md#manage-favorites) można znaleźć w aplikacji OsmAnd *Menu → Moje miejsca → Ulubione*.
- Jeśli chcesz ich użyć do nawigacji, skonfiguruj wszystko, czego potrzebujesz, zanim podłączysz urządzenie do systemu multimedialnego pojazdu.

### Markery mapy {#map-markers}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- Aby zdefiniować swój cel końcowy jako *Marker mapy*, musisz najpierw utworzyć wymaganą liczbę markerów w aplikacji OsmAnd na swoim urządzeniu, zanim podłączysz je do systemu multimedialnego pojazdu.
- *Markery* muszą być dostępne na liście *Menu → Marker mapy*.
- Jest to bardziej szczegółowo opisane w artykule [Markery](../personal/markers.md).

### Ślady {#tracks}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

Aby zbudować trasę do celu, możesz wybrać istniejący ślad dostępny w aplikacji OsmAnd. Ślad może być [pobrany](../personal/tracks/manage-tracks.md#import) z wyprzedzeniem, użyty jako [nagrany](../plugins/trip-recording.md) lub utworzony w [Planuj trasę](../plan-route/create-route.md).

Z listy śladów w *Menu → Moje miejsca → [Ślady](../personal/tracks/manage-tracks.md)*, wybierz wymagany przed podłączeniem do systemu multimedialnego pojazdu, a trasa zostanie zbudowana do początku śladu lub wyświetli aktualny kierunek wzdłuż śladu.

Ślady można również wybrać bezpośrednio na ekranie pojazdu w *CarPlay*. Są one zorganizowane w utworzone przez Ciebie foldery, a dla łatwego i szybkiego dostępu do ostatnio otwieranych śladów, istnieje specjalny folder [Ostatnio modyfikowane](#folder-last-modified).

### Szukaj {#search}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-search(1).png)

Przejście do **Wyszukiwania** daje szybki dostęp do listy ostatniej [historii celów](#history). Podobnie jak w [menu nawigacji](../navigation/setup/route-navigation.md#navigation-menu), gdzie zebrane są wszystkie metody wyboru celu w OsmAnd, takie jak adres, POI lub współrzędne.

Możesz użyć *narzędzia wyszukiwania*, aby znaleźć wymagane miejsce na mapie do planowania trasy z dowolnej dostępnej kategorii wyszukiwania.

- [Adres](../search/search-address.md). Zacznij wpisywać adres w polu wyszukiwania.
- [POI](../search/search-poi.md) i [Niestandardowe POI](../search/search-poi.md). Lista pobliskich podobnych nazw wyświetli również POI lub ich kategorie.
- [Wyszukiwanie współrzędnych](../search/search-address#coordinates-search). Wprowadź współrzędne, aby znaleźć punkt na mapie.

#### Priorytety wyszukiwania adresów {#address-search-priorities}

Funkcja wyszukiwania CarPlay priorytetyzuje ulice i numery budynków podczas **wyszukiwania adresów**.

- Ulice i numery budynków są wyświetlane jako pierwsze podczas wyszukiwania adresu. Zapewnia to wyświetlanie odpowiednich informacji adresowych przed innymi lokalizacjami, takimi jak drogi lub stacje.
- Podczas wyszukiwania miasta, ulice w mieście są wyświetlane jako pierwsze, a następnie numery budynków na tych ulicach.

### Folder Ostatnio modyfikowane {#folder-last-modified}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car_play_last_modified.png)

Kategorie *Ulubione* i *Ślady* mają specjalny folder **Ostatnio modyfikowane**. Ponieważ lista w tych kategoriach może być bardzo długa, ponieważ zawiera wszystkie Twoje istniejące ulubione lub ślady, ten folder jest niezbędny do łatwego i szybkiego dostępu do Twoich najnowszych celów.

## Dodatkowe funkcje {#additional-features}

Oprócz podstawowych funkcji aplikacji OsmAnd w *CarPlay*, które zapewniają wygodną nawigację w Twoim pojeździe, istnieje szereg dodatkowych funkcji, które zwiększają Twoje doświadczenie i sprawiają, że nawigacja jest bardziej spersonalizowana, komfortowa i wydajna.

### Komunikaty głosowe {#voice-prompts}

Wskazówki głosowe dla *CarPlay* to jedna z najbardziej użytecznych funkcji nawigacyjnych OsmAnd, zapewniająca wskazówki w czasie rzeczywistym i pozwalająca kierowcy skupić się na drodze. Komunikaty głosowe wyraźnie wskazują zakręty, kierunki i inne instrukcje nawigacyjne, zapewniając bezpieczniejsze i bardziej komfortowe korzystanie z systemu nawigacyjnego.

Aby skonfigurować komunikaty głosowe zgodnie z wybranym profilem, musisz to zrobić przed rozpoczęciem trasy w aplikacji OsmAnd na swoim urządzeniu. Aby zobaczyć zalecane ustawienia dla *CarPlay*, przejdź do artykułu [Komunikaty głosowe / Powiadomienia](../navigation/guidance/voice-navigation.md).

### Ogłaszanie przychodzących wiadomości tekstowych {#announce-incoming-text-messages}

Możesz zmienić ustawienia powiadomień dla aplikacji OsmAnd w ustawieniach systemowych swojego urządzenia. Stuknij *CarPlay*, a następnie wybierz jedną z następujących pozycji:

- *Ogłaszaj nowe wiadomości*
- *Wycisz nowe wiadomości*
- *Zapamiętaj poprzednie ustawienie*

Możesz również włączyć lub wyłączyć ogłaszanie wiadomości bezpośrednio w *CarPlay*. Przeczytaj o tym, jak zarządzanie powiadomieniami jest zaimplementowane na [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) i [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios).

### Widżet alertów ekranowych {#screen-alert-widget}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

Ten widżet informacyjny łączy typy alertów, takie jak **Przejścia dla pieszych** i **Limit prędkości**.

- Typy alertów mają różny wygląd, który zależy od **<Translate android="true" ids="driving_region"/>** i można go skonfigurować w *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- W *CarPlay* nie ma możliwości ustawienia wyświetlania alertów, należy skonfigurować widżet w aplikacji przed rozpoczęciem nawigacji i podłączeniem urządzenia do pojazdu.
- Szczegółowy opis typów alertów znajduje się w [tym artykule](../widgets/nav-widgets.md#alert-types).
- Aby skonfigurować alerty ekranowe dla dostępnych profili, zobacz artykuł [Ustawienia nawigacji](../navigation/guidance/navigation-settings.md#screen-alerts).

### Prędkościomierz {#speedometer}

![Ekran CarPlay](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

Widżet **Prędkościomierz** to zintegrowany element interfejsu, który wyświetla *aktualną prędkość* za pomocą danych GPS i *limit prędkości* z [bazy danych OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) oraz [ustawień OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) na ekranie systemu multimedialnego pojazdu.

- Widżet **Prędkościomierz** jest [*zależny od profilu*](../personal/profiles.md), więc jeśli zmienisz ustawienia dla jednego profilu, nie zostaną one zastosowane do innego.
- Nie ma opcji ustawienia wyświetlania *Prędkościomierza* bezpośrednio w *CarPlay*. Musisz skonfigurować go dla wybranego [profilu nawigacji](#carplay-profile) w aplikacji OsmAnd przed rozpoczęciem nawigacji i podłączeniem urządzenia do pojazdu.
- Aby uzyskać więcej informacji na temat dodawania i konfigurowania widżetu *Prędkościomierz* do wyświetlacza, przeczytaj artykuł [Widżety informacyjne](../widgets/info-widgets.md#speedometer).

### Wygląd mapy (3D) {#map-appearance-3d}

![CarPlay](@site/static/img/navigation/auto-car/car_play_3.png)

Aplikacja OsmAnd umożliwia korzystanie z widoku mapy 3D na *ekranie CarPlay* do wyświetlania trasy i nawigacji.

- Przycisk **3D / 2D** jest wyświetlany na *ekranie CarPlay*.
- Możesz przełączać się między trybami mapy 3D / 2D, stukając ten przycisk.

### Wielofunkcyjny pulpit nawigacyjny {#multifunction-dashboard}

![CarPlay](@site/static/img/navigation/auto-car/car_play_4.png)

Aplikacja OsmAnd może być otwierana i używana do nawigacji w *CarPlay* na ekranie systemu multimedialnego pojazdu jednocześnie z aplikacjami muzycznymi, wiadomościami lub innymi powiadomieniami.

- Konfiguracja wielofunkcyjnego pulpitu nawigacyjnego na telefonie podłączonym do *CarPlay* lub na ekranie w systemie pojazdu.
- Znajdź przycisk Multi window i przełącz go.

## Problem z kontrolą głośności {#volume-control-issue}

Czasami *CarPlay* nie łączy się, lub po prostu nic nie słychać, mimo że jest podłączony. Innym razem aplikacja OsmAnd nie otwiera się prawidłowo w *CarPlay*. Możliwe rozwiązania:

1. W większości przypadków wszystkie **sygnały** pozostają na stałym, pełnym poziomie głośności, niezależnie od ustawień odtwarzania dźwięku w tym samym czasie. Aby zmienić głośność komunikatów nawigacyjnych OsmAnd podczas korzystania z *CarPlay*, przejdź do *Ustawienia → Głos → Głośność głosu* na ekranie systemu multimedialnego pojazdu.
2. Uruchom ponownie urządzenie.
3. Upewnij się, że *CarPlay* jest włączone na Twoim iPhonie. Aby to zrobić:
   - Przejdź do ustawień telefonu, a następnie do *Ogólne*.
   - Przejdź do *CarPlay* w Ustawieniach ogólnych i wybierz *Moje samochody*. Tutaj możesz dostosować swój samochód, zapominając go lub ponownie się z nim łącząc.
4. Upewnij się, że Bluetooth jest podłączony.
5. Sprawdź kabel USB.
6. Regularnie aktualizuj swój system operacyjny.
7. Sprawdź, czy *CarPlay* jest obsługiwane w Twoim [regionie](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay).
8. Jeśli używasz VPN na swoim iPhonie, może to uniemożliwić działanie *CarPlay*. Spróbuj wyłączyć VPN i sprawdź, czy to pomoże *CarPlay* działać.

## Powiązane artykuły {#related-articles}

- [Profile (Ustawienia)](../personal/profiles.md)
- [Import / Eksport](../personal/import-export.md)

### Częste problemy i rozwiązania {#common-issues-and-solutions}

1. Częste pytania dotyczące ekranu połączenia:
    - *Dlaczego nie mogę sterować aplikacją z telefonu, gdy jestem podłączony do CarPlay?*
        Ze względów bezpieczeństwa ekran aplikacji OsmAnd na Twoim telefonie jest zablokowany, gdy jesteś podłączony do CarPlay. Możesz wchodzić w interakcje z aplikacją tylko za pośrednictwem wyświetlacza samochodu.
    - *Czy mogę wyłączyć zablokowany ekran i używać aplikacji na telefonie?*
        Nie, CarPlay narzuca to ograniczenie, aby zapobiec rozpraszaniu uwagi podczas jazdy.
    - *Co powinienem zrobić, jeśli mój telefon i wyświetlacz samochodu wydają się rozłączone?*
        Upewnij się, że Twoje urządzenie jest prawidłowo podłączone za pomocą USB lub Bluetooth.
        Uruchom ponownie system infotainment samochodu i aplikację OsmAnd, jeśli połączenie jest niestabilne.

> *Ostatnia aktualizacja: styczeń 2025*