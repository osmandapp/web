---
source-hash: 2e2bedc5911717de92c663881adf7da2b32d2027a6c8127a8c9d02651753f230
sidebar_position: 10
title:  CarPlay
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

Prowadzenie pojazdu i jednoczesne korzystanie z telefonu lub tabletu jest zwykle zabronione przez prawo ze względów bezpieczeństwa. [***CarPlay***](https://www.apple.com/ios/carplay/) to oprogramowanie, które zapewnia dostosowaną i zoptymalizowaną wersję aplikacji OsmAnd do bezpiecznego użytkowania podczas jazdy, ułatwiając i zwiększając bezpieczeństwo dostępu do funkcji nawigacyjnych aplikacji.

Aby korzystać z *CarPlay* na ekranie pojazdu, wykonaj następujące kroki:

1. *CarPlay* nie jest dostępny we wszystkich krajach. Upewnij się, że jest obsługiwany w Twoim [kraju lub regionie](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) oraz że *CarPlay* jest obsługiwany w Twoim [modelu pojazdu](https://www.apple.com/ios/carplay/available-models/).
2. [Podłącz swoje urządzenie](https://support.apple.com/en-gb/HT203412) do systemu multimedialnego pojazdu za pomocą portu USB lub bezprzewodowo przez Wi-Fi lub Bluetooth. Przy pierwszym podłączeniu może być wymagane zezwolenie na korzystanie z *CarPlay* na Twoim urządzeniu.
3. Po podłączeniu *interfejs CarPlay* automatycznie pojawi się na ekranie pojazdu ze wszystkimi dostępnymi aplikacjami. Jeśli *ekran główny CarPlay* się nie pojawi, wybierz *logo CarPlay* na wyświetlaczu pojazdu.

### Interfejs CarPlay {#carplay-interface}

*CarPlay* **nie jest bezpośrednią replikacją** aplikacji mobilnej OsmAnd. Ma uproszczony interfejs, skupiający się na podstawowych funkcjach nawigacyjnych, aby zapewnić bezpieczną jazdę. Niektóre zaawansowane funkcje nie są obsługiwane ze względu na ograniczenia platformy.

### Ekran połączenia {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Gdy urządzenie jest podłączone do *CarPlay*, mapa na ekranie aplikacji jest zablokowana. Jest to celowa funkcja bezpieczeństwa, która ma na celu zapewnienie, że nawigacja jest kontrolowana wyłącznie z wyświetlacza samochodu, minimalizując rozpraszanie uwagi podczas jazdy. Sprawdź [częste pytania](#common-issues-and-solutions) dotyczące ekranu połączenia.


### Interakcja z mapą {#interaction-with-the-map}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

*CarPlay* wyświetla interfejs OsmAnd dostosowany do ekranu systemu multimedialnego pojazdu. Interakcja z mapą jest ograniczona do:

- [Moja lokalizacja](../widgets/map-buttons.md#my-location-and-zoom). Przesuwa widoczną część mapy tak, aby Twoja bieżąca lokalizacja znalazła się na środku ekranu.
- [Powiększenie](../widgets/map-buttons.md#my-location-and-zoom). Umożliwia powiększanie i pomniejszanie widocznej części mapy.


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- Najpierw musisz wybrać i skonfigurować profil, który będzie używany podczas łączenia z *CarPlay*. O tym, jak skonfigurować profil, możesz przeczytać w artykule [Profile (Ustawienia)](../personal/profiles).
    - Wygodnym profilem do korzystania z *CarPlay* może być *Jazda samochodem*, a typem wyznaczania trasy może być [Nawigacja samochodowa](../navigation/routing/car-based-routing.md).
    - OsmAnd ma osobną pozycję [Profil CarPlay](#carplay-profile) do szybkiego dostępu do listy profili dostępnych do połączenia z *CarPlay*.
- Aby OsmAnd działał, [podłącz swoje urządzenie iOS](#overview) do systemu multimedialnego pojazdu. Aby dowiedzieć się więcej o tym, jak podłączyć i skonfigurować urządzenie, możesz odwiedzić stronę [**CarPlay**](https://support.apple.com/en-us/HT205634).
- Musisz mieć jedną z [płatnych wersji lub subskrypcji OsmAnd](../purchases/ios#free-and-paid-features). Sprawdź to tutaj *Menu → Ustawienia → Zakupy*.
- Po podłączeniu możesz ustawić cel i rozpocząć nawigację OsmAnd w *CarPlay*.

:::note
Do korzystania z OsmAnd w *CarPlay* może być potrzebne połączenie z Internetem. Jeśli Twoje urządzenie ma ograniczony dostęp do Internetu, możesz [*wcześniej załadować lub utworzyć trasy*](../personal/tracks/manage-tracks.md) i używać ich bez Internetu.
:::


### Rozpocznij nawigację {#start-navigation}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-start(1).png)

Aby korzystać z wersji OsmAnd na iOS w *CarPlay*, musisz kupić [płatną wersję aplikacji lub subskrypcję](../purchases/ios#free-and-paid-features).

1. Aby utworzyć trasę, musisz wybrać [punkt końcowy trasy](#select-a-route-endpoint) na *ekranie CarPlay* lub w [aplikacji OsmAnd](../navigation/setup/route-navigation.md).
2. Możesz używać [komunikatów głosowych](#voice-prompts), aby słuchać wskazówek lub komunikatów o problemach na drodze.
3. Po wybraniu lokalizacji naciśnij **Start**, aby podążać trasą.
4. Podczas jazdy na ekranie pojazdu będą wyświetlane informacje OsmAnd o Twojej bieżącej lokalizacji na mapie, wskazówki dojazdu, odległość do następnego zakrętu, pasy ruchu, czas przybycia i odległość do celu.
    ![Ekran CarPlay](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. Jeśli chcesz zmienić trasę lub wybrać inną lokalizację, możesz nacisnąć odpowiedni przycisk na ekranie.
6. Po zakończeniu trasy możesz dezaktywować *CarPlay*, odłączając urządzenie od systemu multimedialnego pojazdu.

:::note
Wszystkie kategorie wyboru **punktu końcowego trasy**, *[Historia](#history), [POI](#poi-categories), [Znaczniki](#map-markers), [Wyszukiwanie](#search), [Ulubione](#favorites) i [Trasy](#tracks)*, mogą zawierać nie więcej elementów listy, niż zapewnia system multimedialny Twojego pojazdu. Zazwyczaj w większości pojazdów listy są dynamicznie ograniczane do 12 lub 24 elementów. Oznacza to, że lista w *CarPlay* może nie być kompletna. Całkowita liczba elementów i rzeczywista liczba wyświetlanych elementów jest wskazana pod nazwą folderu.
:::


### Profil CarPlay {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![Ustawienia ogólne Domyślny profil Android](@site/static/img/personal/profiles/CarPlay_ios.png)

**Profil CarPlay** to specyficzny profil w aplikacji OsmAnd, umożliwiający wygodne korzystanie z systemu audio i wideo samochodu w celu dalszego wyświetlania tych danych na telefonie.

Ten profil jest używany tak długo, jak urządzenie jest podłączone do *CarPlay*. Dotknij pola *Profil CarPlay* w menu *Ustawień OsmAnd* i z listy [profili włączonych do użytku](../personal/profiles.md) wybierz profil, z którym *CarPlay* zostanie aktywowany.

Nie można wybrać profilu bezpośrednio w *CarPlay* z ekranu pojazdu. Najpierw wybierz wymagany profil na swoim urządzeniu i przypisz do niego *profil CarPlay*. Należy wybrać profil odpowiadający typowi pojazdu, taki jak *Jazda samochodem*, *Ciężarówka*, *Samochód*, *Motocykl* lub *Motorower*. **Aplikacja automatycznie aktywuje** *profil CarPlay* po podłączeniu do pojazdu.

**Dlaczego ważne jest, aby wybrać odpowiedni profil dla Twojego typu pojazdu.**

- **Bezpieczeństwo jazdy.** Różne rodzaje transportu wymagają różnych informacji i ustawień podczas jazdy. Na przykład kierowcy ciężarówek mogą być ograniczeni co do wysokości, wagi i szerokości swoich pojazdów, więc profil *Ciężarówka* zapewnia im odpowiednie ograniczenia i wskazówki. Natomiast rowerzyści i motocykliści potrzebują informacji o ścieżkach i trasach rowerowych, bez danych dla ciężarówek.
- **Użyteczność i wydajność.** Nawigacja powinna być dostosowana do potrzeb danego środka transportu. Pozwala to użytkownikom skrócić czas potrzebny na znalezienie optymalnych tras i uniknięcie niepotrzebnych ograniczeń w ruchu.


## Wybierz punkt końcowy trasy {#select-a-route-endpoint}

Jako punkt docelowy można wybrać wcześniej ustawione i dodane [POI](../map/point-layers-on-map.md#points-of-interest-pois), [Ulubione](../personal/favorites.md) lub [Znaczniki](../personal/markers.md). Możliwe jest również wybranie zarejestrowanej lub pobranej [Trasy](../personal/tracks/index.md) dla trasy, skorzystanie z [Wyszukiwania](../search/index.md) lub wybranie celu z [Historii](../search/search-history.md) tras.

1. Jeśli chcesz, aby określona lokalizacja na mapie była punktem końcowym, wybierz odpowiednią kategorię punktów z listy, [POI](#poi-categories), [Ulubione](#favorites) lub [Znaczniki mapy](#map-markers).

    - Wszystkie kategorie mogą zawierać nie więcej elementów listy, niż jest to przewidziane przez system multimedialny Twojego pojazdu. Oznacza to, że lista w *CarPlay* może być niekompletna, a wszystkie inne foldery są dostępne tylko w aplikacji OsmAnd na Twoim urządzeniu.
    - Folder [Ostatnio zmodyfikowane](#folder-last-modified) zawiera listę ostatnich celów, posortowaną według daty dodania lub zmiany.
    - Lista wszystkich pozostałych folderów jest sortowana według najnowszej aktualizacji, nowe foldery znajdują się na górze listy. Nie można ręcznie zmienić ich kolejności.
    - Lista punktów w folderach jest sortowana według odległości do nich, zaczynając od najbliższego. Każdy punkt ma nazwę lub współrzędne, ikonę kształtu (kolor i ikona ustawione domyślnie lub wybrane przez Ciebie w aplikacji OsmAnd) oraz odległość od punktu bieżącej lokalizacji do niego.
2. Wybierz kategorię [Historia](#history), aby znaleźć jeden z ostatnich celów, które są przechowywane w pamięci urządzenia.
3. Wybierz [Wyszukiwanie](#search), aby wprowadzić cel z dostępnych kategorii wyszukiwania.

:::note
Podczas jazdy wybrane punkty mogą być [ogłaszane](#voice-prompts) głosowo, gdy się do nich zbliżasz lub je mijasz. Zobacz ustawienia [Komunikatów głosowych](../navigation/guidance/voice-navigation.md) w odpowiednim artykule, aby skonfigurować powiadomienia głosowe.
:::


### Historia {#history}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car_play_history.png)

W **kategorii Historia** możesz wybrać cel z listy punktów końcowych.

- Są one sortowane według ostatniego użycia, zaczynając od najnowszych.
- Może to być wygodne dla szybkiego dostępu do często używanych tras.
- Aby dowiedzieć się, jak używać lub usuwać cel, przeczytaj artykuł [Historia wyszukiwania](../search/search-history.md).


### Kategorie POI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="Ekran CarPlay"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="Ekran CarPlay"/></td>
    </tr>
</table>

*POI (Punkty Użyteczności Publicznej)* to rodzaj punktów, które identyfikują na mapie miejsca lub obiekty ważne lub interesujące dla użytkowników. Są one wyróżnione specjalnymi ikonami dostępnymi w [ustawieniach OsmAnd](../map/point-layers-on-map.md#poi-types) i posortowane w grupy.

Aby wyznaczyć trasę do *POI* w *CarPlay*, wykonaj następujące kroki:

1. Wybierz potrzebny *POI* z listy dostępnych kategorii lub wprowadź nazwę POI za pomocą [Wyszukiwania](#search).
2. OsmAnd oblicza trasę i wyświetla ją na *ekranie CarPlay*. Dotknij przycisku **Start**, aby rozpocząć nawigację do tej lokalizacji.
3. W zależności od ustawień aplikacji OsmAnd i Twojego pojazdu, możesz otrzymywać [komunikaty głosowe](#voice-prompts), które poprowadzą Cię do celu.
4. Po dotarciu na miejsce aplikacja powiadomi Cię, że dotarłeś do *POI*.


### Ulubione {#favorites}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**Ulubione** to jedna z funkcji OsmAnd, która pozwala na tworzenie swego rodzaju notatek na mapie.

- Podczas korzystania z **CarPlay** nie można dodawać ani modyfikować *Ulubionych*, a jedynie korzystać z istniejących.
- Listę [Ulubionych](../personal/favorites.md#manage-favorites) można znaleźć w aplikacji OsmAnd *Menu → Moje miejsca → Ulubione*.
- Jeśli chcesz ich używać do nawigacji, skonfiguruj wszystko, czego potrzebujesz, przed podłączeniem urządzenia do systemu multimedialnego pojazdu.


### Znaczniki mapy {#map-markers}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- Aby zdefiniować swój ostateczny cel jako *Znacznik mapy*, musisz najpierw utworzyć wymaganą liczbę znaczników w aplikacji OsmAnd na swoim urządzeniu przed podłączeniem go do systemu multimedialnego pojazdu.
- *Znaczniki* muszą być dostępne na liście *Menu → Znacznik mapy*.
- Jest to opisane bardziej szczegółowo w artykule [Znaczniki](../personal/markers.md).


### Trasy {#tracks}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

Aby wyznaczyć trasę do celu, możesz wybrać istniejącą trasę dostępną w aplikacji OsmAnd. Trasa może być [pobrana](../personal/tracks/manage-tracks.md#import) z wyprzedzeniem, użyta jako [zarejestrowana](../plugins/trip-recording.md) lub utworzona w [Zaplanuj trasę](../plan-route/create-route.md).

Z listy tras w *Menu → Moje miejsca → [Trasy](../personal/tracks/manage-tracks.md)* wybierz wymaganą przed podłączeniem do systemu multimedialnego pojazdu, a trasa zostanie wyznaczona do początku śladu lub wyświetli bieżący kierunek wzdłuż śladu.

Trasy można również wybierać bezpośrednio na ekranie pojazdu w *CarPlay*. Są one zorganizowane w utworzonych przez Ciebie folderach, a dla łatwego i szybkiego dostępu do ostatnio otwieranych tras istnieje specjalny folder [Ostatnio zmodyfikowane](#folder-last-modified).


### Wyszukiwanie {#search}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-search(1).png)

Przejście do **Wyszukiwania** daje szybki dostęp do listy ostatniej [historii celów](#history). Podobnie jak w [menu Nawigacji](../navigation/setup/route-navigation.md#navigation-menu), gdzie zebrane są wszystkie metody wyznaczania celu w OsmAnd, takie jak adres, POI czy współrzędne.

Możesz użyć *narzędzia Wyszukiwania*, aby znaleźć wymagane miejsce na mapie do planowania trasy z dowolnej dostępnej kategorii wyszukiwania.

- [Adres](../search/search-address.md). Zacznij wpisywać adres w polu wyszukiwania.
- [POI](../search/search-poi.md) i [Niestandardowe POI](../search/search-poi.md). Lista pobliskich podobnych nazw wyświetli również POI lub ich kategorie.
- [Wyszukiwanie po współrzędnych](../search/search-address#coordinates-search). Wprowadź współrzędne, aby znaleźć punkt na mapie.

:::note
Możesz wybrać konkretny budynek, wyszukując nazwę ulicy i wybierając ją w polu wyszukiwania w *CarPlay*. Pamiętaj, że lista wyników jest ograniczona do 25 pozycji. Jeśli więc oczekiwany budynek nie jest widoczny, musisz wpisać numer budynku.
:::


### Priorytety wyszukiwania adresów {#address-search-priorities}

Funkcja wyszukiwania w CarPlay priorytetowo traktuje ulice i numery budynków podczas **wyszukiwania adresów**.

- Ulice i numery budynków są wyświetlane jako pierwsze podczas wyszukiwania adresu. Zapewnia to, że odpowiednie informacje adresowe są wyświetlane przed innymi lokalizacjami, takimi jak drogi czy stacje.
- Gdy szukasz miasta, najpierw wyświetlane są ulice w tym mieście, a następnie numery budynków na tych ulicach.


### Folder Ostatnio zmodyfikowane {#folder-last-modified}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car_play_last_modified.png)

Kategorie *Ulubione* i *Trasy* mają specjalny folder **Ostatnio zmodyfikowane**. Ponieważ lista w tych kategoriach może być bardzo duża, ponieważ zawiera wszystkie istniejące ulubione lub trasy, ten folder jest niezbędny do łatwego i szybkiego dostępu do najnowszych celów.


## Dodatkowe funkcje {#additional-features}

Oprócz podstawowych funkcji aplikacji OsmAnd w *CarPlay*, które zapewniają wygodną nawigację w pojeździe, istnieje szereg dodatkowych funkcji, które poprawiają wrażenia i sprawiają, że nawigacja jest bardziej spersonalizowana, komfortowa i wydajna.


### Komunikaty głosowe {#voice-prompts}

Wskazówki głosowe dla *CarPlay* to jedna z najbardziej użytecznych funkcji nawigacyjnych OsmAnd, zapewniająca wskazówki w czasie rzeczywistym i pozwalająca kierowcy skupić się na drodze. Komunikaty głosowe wyraźnie wskazują zakręty, kierunki i inne instrukcje nawigacyjne, zapewniając bezpieczniejsze i bardziej komfortowe korzystanie z systemu nawigacji.

Aby skonfigurować komunikaty głosowe zgodnie z wybranym profilem, należy to zrobić przed rozpoczęciem trasy w aplikacji OsmAnd na urządzeniu. Aby zobaczyć zalecane ustawienia dla *CarPlay*, przejdź do artykułu [Komunikaty głosowe / Powiadomienia](../navigation/guidance/voice-navigation.md).



### Widżet alertów ekranowych {#screen-alert-widget}

![Ekran CarPlay](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

Ten widżet informacyjny łączy typy alertów, takie jak **Przejścia dla pieszych** i **Ograniczenie prędkości**.

- Typy alertów mają różny wygląd, który zależy od **<Translate android="true" ids="driving_region"/>** i można je skonfigurować w *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- W *Car Play* nie ma możliwości ustawienia wyświetlania alertów, należy skonfigurować widżet w aplikacji przed rozpoczęciem nawigacji i podłączeniem urządzenia do pojazdu.
- Szczegółowy opis typów alertów znajduje się w [tym artykule](../widgets/nav-widgets.md#alert-types).
- Aby skonfigurować alerty ekranowe dla dostępnych profili, zobacz artykuł [Ustawienia nawigacji](../navigation/guidance/navigation-settings.md#screen-alerts).


### Prędkościomierz {#speedometer}

![Ekran CarPlay](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

Widżet **Prędkościomierz** to zintegrowany element interfejsu, który wyświetla *bieżącą prędkość* na podstawie danych GPS oraz *ograniczenie prędkości* z [bazy danych OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) i [ustawień OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) na ekranie systemu multimedialnego pojazdu.

- **Widżet Prędkościomierz** jest [*zależny od profilu*](../personal/profiles.md), więc jeśli zmienisz ustawienia dla jednego profilu, nie zostaną one zastosowane do innego.
- Nie ma możliwości ustawienia wyświetlania *Prędkościomierza* bezpośrednio w *CarPlay*. Należy go skonfigurować dla wybranego [profilu nawigacji](#carplay-profile) w aplikacji OsmAnd przed rozpoczęciem nawigacji i podłączeniem urządzenia do pojazdu.
- Więcej informacji na temat dodawania i konfigurowania widżetu *Prędkościomierz* na wyświetlaczu można znaleźć w artykule [Widżety informacyjne](../widgets/info-widgets.md#speedometer).


### Wygląd mapy (3D) {#map-appearance-3d}

![CarPlay](@site/static/img/navigation/auto-car/car_play_3.png)

Aplikacja OsmAnd umożliwia korzystanie z widoku mapy 3D na *ekranie CarPlay* w celu wyświetlania trasy i nawigacji.

- Przycisk **3D / 2D** jest wyświetlany na *ekranie CarPlay*.
- Możesz przełączać się między trybami mapy 3D / 2D, dotykając tego przycisku.


### Wielofunkcyjny pulpit {#multifunction-dashboard}

![CarPlay](@site/static/img/navigation/auto-car/car_play_4.png)

Aplikacja OsmAnd może być otwierana i używana do nawigacji w *CarPlay* na ekranie systemu multimedialnego pojazdu jednocześnie z aplikacjami do muzyki, wiadomości lub innych powiadomień.

- Konfiguracja wielofunkcyjnego pulpitu na telefonie podłączonym do *CarPlay* lub na ekranie w systemie pojazdu.
- Znajdź przycisk Wiele okien i przełącz go.

## Ustawienia {#settings}

### Ogłaszaj przychodzące wiadomości tekstowe {#announce-incoming-text-messages}

Możesz zmienić ustawienia powiadomień dla aplikacji OsmAnd w ustawieniach systemowych swojego urządzenia. Dotknij *CarPlay*, a następnie wybierz jedną z następujących opcji:

- *Ogłaszaj nowe wiadomości*
- *Wycisz nowe wiadomości*
- *Zapamiętaj poprzednie ustawienie*

Możesz również włączyć lub wyłączyć ogłaszanie wiadomości bezpośrednio w *CarPlay*. Przeczytaj o tym, jak zarządzanie powiadomieniami jest zaimplementowane w [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) i [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios).

### Pozycja lokalizacji w CarPlay {#location-position-in-carplay}

Aplikacja OsmAnd dla *CarPlay* pozwala dostosować pozycję wskaźnika bieżącej lokalizacji na ekranie, aby uniknąć nakładania się na trasę i inne ważne szczegóły mapy.

**Jak zmienić pozycję wskaźnika:**

- Przejdź do *Menu → Konfiguruj ekran → Inne → [Pozycja lokalizacji na ekranie](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- Wybierz preferowane umiejscowienie:
    - **Automatyczne (domyślne)**. Aplikacja automatycznie przesuwa pozycję wskaźnika w trybie nawigacji lub swobodnego poruszania się.
    - **Środek**. Wskaźnik jest umieszczony na środku ekranu, co jest odpowiednie dla standardowej nawigacji.
    - **Dół**. Wskaźnik jest umieszczony bliżej dolnej części ekranu, co ułatwia obserwację otaczających obiektów i skomplikowanych skrzyżowań.


### Problem z regulacją głośności {#volume-control-issue}

Czasami *CarPlay* nie łączy się lub po prostu nic nie słychać, mimo że jest podłączony. Innym razem aplikacja OsmAnd nie otwiera się poprawnie w *CarPlay*. Możliwe rozwiązania:

1. W większości przypadków wszystkie **sygnały** pozostają na stałym, pełnym poziomie głośności, niezależnie od ustawień odtwarzania dźwięku w tym samym czasie. Aby zmienić głośność komunikatów nawigacyjnych OsmAnd podczas korzystania z *CarPlay*, przejdź do *Ustawienia → Głos → Głośność głosu* na ekranie systemu multimedialnego pojazdu.
2. Uruchom ponownie urządzenie.
3. Upewnij się, że *CarPlay* jest włączony na Twoim iPhonie. Aby to zrobić:
   - Przejdź do ustawień telefonu, a następnie do *Ogólne*.
   - Przejdź do *CarPlay* w Ustawieniach ogólnych i wybierz *Moje samochody*. Tutaj możesz dostosować swój samochód, zapominając go lub ponownie się z nim łącząc.
4. Upewnij się, że Bluetooth jest podłączony.
5. Sprawdź kabel USB.
6. Regularnie aktualizuj system operacyjny.
7. Sprawdź, czy *CarPlay* jest obsługiwany w Twoim [regionie](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay).
8. Jeśli używasz VPN na swoim iPhonie, może to uniemożliwić działanie *CarPlay*. Spróbuj wyłączyć VPN i sprawdź, czy to pomoże *CarPlay* działać.


## Powiązane artykuły {#related-articles}

- [Profile (Ustawienia)](../personal/profiles.md)
- [Import / Eksport](../personal/import-export.md)

### Częste problemy i rozwiązania {#common-issues-and-solutions}

1. Częste pytania dotyczące ekranu połączenia:
    - *Dlaczego nie mogę sterować aplikacją z telefonu, gdy jest podłączony do CarPlay?*
        Ze względów bezpieczeństwa ekran aplikacji OsmAnd na telefonie jest zablokowany podczas połączenia z CarPlay. Możesz wchodzić w interakcję z aplikacją tylko za pośrednictwem wyświetlacza samochodowego.
    - *Czy mogę wyłączyć zablokowany ekran i korzystać z aplikacji na telefonie?*
        Nie, CarPlay wymusza to ograniczenie, aby zapobiec rozpraszaniu uwagi podczas jazdy.
    - *Co powinienem zrobić, jeśli mój telefon i wyświetlacz samochodowy wydają się być rozłączone?*
        Upewnij się, że urządzenie jest prawidłowo podłączone przez USB lub Bluetooth.
        Uruchom ponownie system informacyjno-rozrywkowy samochodu i aplikację OsmAnd, jeśli połączenie jest niestabilne.