---
source-hash: a8559f43cff19c4a14831feb61c4c3facdea6dab64c9c232c37b5ba47e810958
sidebar_position: 1
title:  Ustawienia nawigacji
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

Aby nawigacja przebiegała pomyślnie, ważne jest, aby odpowiednio skonfigurować ustawienia zgodnie z własnymi potrzebami i sposobem podróżowania - samochodem, pieszo, konno lub na nartach. W tym artykule opisano podstawowe parametry trasy, [Komunikaty głosowe](#voice-prompts), [Alerty ekranowe](#screen-alerts), [Zachowanie mapy podczas nawigacji](#map-during-navigation) oraz [Wygląd linii trasy](#customize-route-line). Szczegółowo opisano również [Ustawienia pojazdu](#vehicle-parameters), takie jak domyślna prędkość, typ silnika do obliczania emisji CO2, pojemność zbiornika paliwa oraz ograniczenia dotyczące wielkości/masy. Dostosowanie tych ustawień pomoże w pełni wykorzystać możliwości OsmAnd i dotrzeć do celu bez niepotrzebnych opóźnień.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia nawigacji iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Jak otworzyć {#how-to-open}

W tej sekcji przedstawiono ustawienia nawigacji niezbędne do obliczania i wyznaczania trasy, które można ustawić dla wybranego profilu. To menu zawiera ustawienia [Przygotowania trasy](../setup/route-navigation.md), [Ekranu mapy podczas nawigacji](../guidance/map-during-navigation.md), a to, co ustawisz w *Ustawieniach nawigacji*, bezpośrednio wpływa na wyświetlanie danych w [Szczegółach trasy](../setup/route-details.md).

Istnieją trzy sposoby uzyskania dostępu do menu ustawień nawigacji.

- Przejdź do głównego *Menu → Ustawienia*, wybierz wymagany *Profil* i dotknij *Ustawienia nawigacji*.

- Dotknij ikony *Nawigacja* na ekranie mapy, a następnie wybierz *ikonę Ustawienia → Ustawienia nawigacji*.

- Przejdź do głównego *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.  

:::info
Domyślny profil *Przeglądaj mapę* nie ma ustawień nawigacji.  
:::


## Typ nawigacji {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia nawigacji iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

Nawigacja jest ważną częścią podróży, a wybór *odpowiedniego typu* nawigacji może znacznie ułatwić podróż. Wybór typu nawigacji może zależeć od sposobu podróżowania i tego, czy masz połączenie z Internetem.  

- **Nawigacja online**
    Wykorzystuje głównie specjalny system wyznaczania tras lub stronę internetową, która pozwala aplikacji OsmAnd wyznaczyć trasę na podstawie aktualnych informacji i innych czynników. O wyborze najlepszej trasy online można przeczytać w artykule [Wyznaczanie tras online](../routing/online-routing.md). Ten typ nawigacji jest dostępny tylko dla *wersji aplikacji na Androida*.  

- **Nawigacja offline**
Nie wymaga dostępu do Internetu i oferuje szerszy wybór [typów nawigacji](../routing/osmand-routing.md#routing-types), które można wykorzystać do obliczenia trasy. Wśród nich są *rower, łódź, samochód, pieszo, narty* i *linia prosta*. Obecnie istnieje 13 podstawowych typów wyznaczania tras, a także zewnętrzny typ wyznaczania tras [BRouter](../routing/brouter.md), który zapewnia dodatkowe możliwości wyznaczania tras.  

Typ nawigacji określa, które reguły są używane do obliczania tras. Jeśli potrzebujesz określonego typu nawigacji, możesz **zaimportować własny zmodyfikowany plik routingu *XML***. Więcej o regułach routingu można przeczytać na naszej [stronie GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). Istnieje również osobny artykuł o formacie XML i sposobie jego użycia, [Styl renderowania mapy](../../../technical/osmand-file-formats/osmand-rendering-style.md), który może pomóc w tworzeniu pliku trasy.  


## Parametry trasy {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia nawigacji iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** to ustawienia, które określają, w jaki sposób aplikacja obliczy trasę do miejsca docelowego, biorąc pod uwagę takie czynniki, jak rodzaj transportu, priorytety wyznaczania trasy, warunki na trasie, złożoność trasy i preferencje użytkownika.  

Dla każdego [profilu](../../personal/global-settings.md#default-profile), z wyjątkiem *Przeglądaj mapę*, OsmAnd domyślnie wybiera optymalny [Typ nawigacji](#navigation-type) i odpowiednie [parametry trasy](../routing/osmand-routing.md#routing-types). Można jednak wybrać dowolny typ i zmienić parametry w zależności od preferencji i warunków zewnętrznych nadchodzącej podróży.  

Wszystkie parametry trasy są szczegółowo opisane w odpowiednich sekcjach dokumentacji:  
*[Trasa samochodowa (ciężarówka, motocykl)](../routing/car-based-routing.md), [Trasa rowerowa (MTB)](../routing/bicycle-based-routing.md), [Trasa motorowerowa](../routing/moped-routing.md), [Trasa piesza](../routing/pedestrian-routing.md), [Nawigacja transportem publicznym](../routing/public-transport-navigation.md), [Trasa konna](../routing/horse-routing.md), [Trasa narciarska](../routing/ski-routing.md), [Trasa kolejowa](../routing/train-routing.md), [Nawigacja łodzią](../routing/boat-navigation.md), [Nawigacja do punktu](../routing/direct-to-point-routing.md), [Nawigacja w linii prostej](../routing/straight-line-routing.md), [Wyznaczanie tras online](../routing/online-routing.md), [Wyznaczanie tras BRouter](../routing/brouter.md)*.  


### Ponowne obliczanie trasy {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia nawigacji iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Ustawienia nawigacji iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>  

Parametr **Obliczanie trasy** automatycznie zmienia obliczoną trasę, gdy z niej zboczysz lub pojedziesz w przeciwnym kierunku. W obu przypadkach to ustawienie pomaga utrzymać kierunek podróży i dotrzeć do celu bez marnowania czasu na ręczne wyszukiwanie nowej trasy.  

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> w przypadku odchylenia*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | Jeśli [Komunikaty głosowe](../guidance/voice-navigation.md#voice-settings) są włączone, OsmAnd ogłasza, że trasa jest ponownie obliczana. |
|  *Przelicz trasę w przypadku jazdy w przeciwnym kierunku*  | Trasa zostanie przeliczona, jeśli poruszasz się w kierunku punktu początkowego.  |  Przy wyłączonym tym ustawieniu ruch w kierunku punktu początkowego nie jest uważany za zboczenie z trasy (o ile odbywa się po obliczonej trasie).  |


### Ustawienia deweloperskie {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *Menu → Ustawienia → profil aplikacji → Ustawienia nawigacji → Parametry trasy → Deweloperskie*

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Menu → Ustawienia → profil aplikacji → Ustawienia nawigacji → Parametry trasy → Deweloperskie*

![Ustawienia nawigacji iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>  

Parametry w sekcji **Deweloperskie** są przeznaczone głównie dla zaawansowanych użytkowników i są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).  

| Parametr | Opis |
|:------------|:---------------|
| *Typ routingu* (*Android*) / *Algorytm routingu* (*iOS*) | <ul><li>**A*** 2-fazowy (*Android*) / **A*** (*iOS*) dodaje dodatkową fazę do domyślnego algorytmu w celu poprawy jakości obliczonej trasy. Ta opcja może być przydatna do znajdowania tras w dużych i złożonych sieciach drogowych, ale obliczanie trasy może potrwać dłużej.</li><li>**A* klasyczny** (*Android*) / **Hierarchie autostrad** (*iOS*) optymalizują planowanie trasy, faworyzując główne drogi i autostrady, minimalizując liczbę zakrętów i skrzyżowań na trasie. Szczególnie skuteczne na długich dystansach.</li><li>**HH (Highway Hierarchies) x Java** (*tylko Android*) opiera się na implementacji hierarchicznych struktur danych w celu optymalizacji wyszukiwania ścieżek na mapie, z uwzględnieniem ograniczeń czasu wykonywania i zużycia zasobów urządzenia, i jest realizowany na platformie Java.</li><li>**HH (Highway Hierarchies) x C++** (*tylko Android*) to algorytm, który wykorzystuje język programowania C++ do wydajnego przetwarzania danych sieci drogowej i budowania optymalnych tras przy użyciu hierarchicznych struktur danych. Jest zoptymalizowany pod kątem szybkiego przetwarzania dużych ilości danych i jest szczególnie skuteczny w nawigacji po mapach z wieloma sieciami drogowymi.</li></ul> |  
| *Aproksymacja GPX* (*tylko Android*)  | <ul><li>Aproksymacja GPX **oparta na routingu** w **C++ i Javie** wykorzystuje dane trasy do aproksymacji śladów GPS z istniejącymi trasami drogowymi, co poprawia dokładność śladu i zmniejsza jego rozmiar.</li><li>Aproksymacje GPX **oparte na geometrii** w **C++ i Javie** działają w oparciu o zasady geometryczne w celu szybkiej i dokładnej aproksymacji śladów GPS, umożliwiając wydajne przetwarzanie dużych ilości danych.</li></ul> |
| *Automatyczne powiększanie* | <ul><li>**Dyskretne** pozwala na powiększenie mapy do określonego poziomu szczegółowości mierzonego w kilku dyskretnych krokach.</li><li>**Płynne** zapewnia stopniową zmianę skali mapy z płynnymi efektami animacji bez szarpnięć i skoków.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*tylko Android*)  | Użyj [Aktualizacji na żywo](../../personal/maps-resources.md#live-updates) podczas wyznaczania trasy. Pamiętaj, że zalecamy używanie tej opcji tylko do celów testowych.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows using [Live updates](../../personal/maps-resources.md#live-updates) while routing. Note, that we recommend using this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## Komunikaty głosowe {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Ustawienia nawigacji głosowej Android](@site/static/img/navigation/voice/voice_promt_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *przycisk <Translate ios="true" ids="routing_settings"/>* *(lub <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Wybierz profil → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Ustawienia nawigacji głosowej iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

Pierwsza część artykułu *[Komunikaty głosowe / Powiadomienia](./voice-navigation.md)* szczegółowo opisuje, jak skonfigurować komunikaty głosowe.  

Instrukcje dźwiękowe podczas nawigacji pomagają kierowcy lub pieszemu dotrzeć do celu podczas [nawigacji po wybranej trasie](../setup/route-navigation.md). Zawierają one informacje o zakrętach, kierunkach jazdy, znakach drogowych, odległościach do celu i innych czynnikach, które mogą mieć wpływ na nawigację.  

Jeśli jako punkt docelowy wybierzesz ślad, musisz użyć opcji [Dołącz do dróg](../setup/gpx-navigation.md#attach-to-the-roads), aby komunikaty głosowe działały poprawnie.

*Komunikaty głosowe* pozwalają skupić się na drodze i nie rozpraszać się mapą lub urządzeniem nawigacyjnym. Poprawiają również bezpieczeństwo jazdy, skracają czas potrzebny na nawigację w nieznanym terenie i mogą być przydatne dla różnych [typów tras](../routing/osmand-routing.md#routing-types).

W sekcji **Ogłaszaj** możesz wybrać, które typy powiadomień powinny być odtwarzane lub wyświetlane podczas nawigacji:

- **Kierunki skręt po skręcie** (tylko Android) – pozwala na włączanie lub wyłączanie standardowych instrukcji nawigacyjnych, takich jak *„Skręć w lewo”*, *„Skręć w prawo”* lub *„Za 200 metrów…”*. Po wyłączeniu tej opcji nie są podawane komunikaty o skrętach i nazwach ulic, natomiast powiadomienia dla punktów trasy, punktów użytkownika i zdarzeń trasy pozostają aktywne. Ten tryb jest przeznaczony dla aktywności takich jak spływy kajakowe, wędrówki lub jazda rowerem po wcześniej nagranych śladach, gdy potrzebne są tylko alerty dla ręcznie dodanych punktów trasy.
- **Nazwy ulic (TTS)** – ogłasza nazwy ulic wzdłuż trasy.
- **Numer zjazdu** – ogłasza numer zjazdu podczas jazdy autostradą.
- **Ostrzeżenia drogowe** – dostarcza alerty o ważnych zdarzeniach drogowych, takich jak korki lub ograniczenia.
- **Przejścia dla pieszych** – ostrzega, gdy zbliżasz się do przejścia dla pieszych.
- **[Fotoradary](https://osmand.net/docs/user/navigation/guidance/voice-navigation#speed-cameras)**  – ostrzega o lokalizacjach fotoradarów (tam, gdzie jest to legalnie dozwolone).
- **Tunele** – informuje, gdy wjeżdżasz do tunelu.


## Alerty ekranowe {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Ustawienia nawigacji](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Ustawienia nawigacji](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>  

Ustawienie nawigacji **Alerty ekranowe** włącza [**Widżet alertów**](../../widgets/nav-widgets.md#alert-widget). *Szczegóły:*

- Gdy zbliżasz się do jednej z obsługiwanych przeszkód na drodze, powiadomienia pojawiają się w lewym dolnym rogu mapy.
- Jeśli skonfigurujesz [*komunikaty głosowe i tekstowe*](../../navigation/guidance/voice-navigation.md) dostępne w aplikacji OsmAnd, podróż będzie bardziej komfortowa i bezpieczniejsza.
- Wygląd i czas wyświetlania monitów zależą od ustawień prędkości. Można je znaleźć [w artykule](../../../technical/algorithms/voice-prompt-triggering.md).  
- Na zachowanie *Alertów ekranowych* ma również wpływ ustawienie [Pokaż punkty na trasie](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

Możesz ***wybrać, które alerty*** chcesz widzieć na ekranie aplikacji podczas nawigacji:

- **Ograniczenie prędkości** ([informacje z OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). W ustawieniach alertów ekranowych *Ograniczenie prędkości* jest wyświetlane na ekranie tylko przy włączonych *Ostrzeżeniach o ruchu drogowym*. Jeśli chcesz widzieć ograniczenia prędkości podczas nawigacji bez innych ostrzeżeń, użyj [widżetu](../../widgets/nav-widgets.md#speed-limit).
- **Ostrzeżenia drogowe** ([informacje z OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Dodatkowe informacje można znaleźć w artykule [Ekran mapy podczas nawigacji](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Przejścia dla pieszych** ([informacje z OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Fotoradary** ([informacje z OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Więcej informacji na temat ustawień fotoradarów w OsmAnd można znaleźć w [Typach alertów](../../widgets/nav-widgets.md#alert-types) oraz w artykule *Ustawienia globalne*, sekcja [Prawne](../../personal/global-settings.md#legal).
- **Tunele** ([informacje z OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Rodzaje ostrzeżeń mają różny wygląd, który zależy od regionu podróży. OsmAnd nie ma na celu prezentowania w 100% identycznych znaków drogowych, ale wskazuje na pewne podobieństwa.  
:::


## Mapa podczas nawigacji {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

</TabItem>

</Tabs>

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

**Mapa jest używana podczas nawigacji** do określania lokalizacji, planowania trasy i orientacji w terenie. Podczas nawigacji można wyświetlać mapę z *automatycznym centrowaniem*, przesuwać ją oraz *przybliżać i oddalać*, aby zobaczyć wymagany obszar. Mapa może również wyświetlać znaczniki wskazujące interesujące miejsca, trasy, warunki pogodowe, znaki drogowe i inne obiekty ułatwiające nawigację. Mapa może być aktualizowana w *czasie rzeczywistym* i wyświetlać *aktualne informacje*, które mogą mieć wpływ na planowanie trasy.

O tym, jak zmienia się zachowanie mapy podczas nawigacji, można dowiedzieć się z artykułu [Ekran mapy podczas nawigacji](../guidance/map-during-navigation.md).  

## Dostosuj linię trasy {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Ustawienia nawigacji](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Ustawienia nawigacji](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

Dzięki ustawieniu **Dostosuj linię trasy** można wybrać wygląd linii trasy, która będzie widoczna na mapie podczas nawigacji. Można wybrać *kolor*, *szerokość linii* i wyświetlanie na niej *strzałek skrętu*. Dla każdego profilu można wybrać inny widok linii. Wszystkie te parametry są szczegółowo opisane w artykule *Ekran mapy podczas nawigacji* w sekcji [Wygląd linii trasy](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Parametry pojazdu {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Aby zapewnić, że OsmAnd obliczy najbardziej optymalną trasę, kluczowe jest skonfigurowanie parametrów pojazdu - w tym jego prędkości, wymiarów, wagi i rodzaju paliwa - co pozwala aplikacji dokładnie oszacować czas podróży, unikać ograniczeń drogowych i śledzić zużycie paliwa, jak wyjaśniono w naszym pełnym przewodniku na temat [Parametrów pojazdu](./vehicle-parameters.md).


## Szczegółowe prowadzenie po śladzie {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Dołącz do dróg 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Ustawienia nawigacji Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Szczegółowe prowadzenie po śladzie*

![Ustawienia nawigacji](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Ustawienia nawigacji](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

Funkcja **Szczegółowe prowadzenie po śladzie** poprawia dokładność nawigacji po trasie podczas korzystania z **tras opartych na śladach**. Po wybraniu śladu jako miejsca docelowego można włączyć ustawienie [Dołącz do dróg](../setup/gpx-navigation.md#attach-to-the-roads) z menu [Podążaj za śladem](../setup/gpx-navigation.md#follow-track-options). Zapewnia to dopasowanie śladu do istniejących dróg, dzięki czemu nawigacja będzie dostarczać precyzyjnych instrukcji na rondach, zakrętach, podawać ograniczenia prędkości, pasy ruchu i nazwy ulic.

Istnieją dwie opcje korzystania z funkcji *Szczegółowe prowadzenie po śladzie*:

- **<Translate android="true" ids="ask_every_time"/>** (*ustawienia domyślne*) – opcja *Dołącz do dróg* będzie pojawiać się w sekcji [Szczegóły trasy](../setup/route-details.md) za każdym razem, gdy obliczana jest trasa oparta na śladzie. Pozwala to zdecydować, czy zastosować dołączanie do dróg dla każdej sesji nawigacyjnej.

- **<Translate android="true" ids="shared_string_always"/>** – proces dołączania do dróg będzie stosowany automatycznie dla każdej trasy *nawigacji po śladzie* bez konieczności ręcznego potwierdzania.

Więcej informacji na temat korzystania z nawigacji opartej na śladach można znaleźć w artykule [Nawigacja po śladzie](../setup/gpx-navigation.md).


## Powiązane artykuły {#related-articles}

- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Przygotowanie trasy](../setup/route-navigation.md)
- [Nawigacja po śladzie](../setup/gpx-navigation.md)
- [Nawigacja według znaczników](../setup/markers-navigation.md)
- [Szczegóły trasy](../setup/route-details.md)
- [Ekran mapy podczas nawigacji](./map-during-navigation.md)
- [Komunikaty głosowe / Powiadomienia](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)