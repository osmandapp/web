---
source-hash: c8d86e0d815539ea1395efc415de2d8d02dbf19117cd20b4d4915ea3473d7023
sidebar_position: 7
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

Aby nawigacja była udana, ważne jest prawidłowe skonfigurowanie odpowiednich ustawień zgodnie z potrzebami i sposobem podróżowania - samochodem, pieszo, konno lub na nartach. Ten artykuł opisuje podstawowe parametry trasy, [komunikaty głosowe](#voice-prompts), [alertów ekranowych](#screen-alerts), [zachowanie mapy podczas nawigacji](#map-during-navigation) oraz [wygląd linii trasy](#customize-route-line). Zawiera również szczegółowe informacje na temat ustawień pojazdu, takich jak [prędkość domyślna](#default-speed) i [prędkość maksymalna/minimalna](#road-speeds), [typ silnika](#fuel-used-by-motor) do obliczania CO2, [pojemność zbiornika paliwa](#fuel-tank-capacity) oraz [rozmiar/waga](#size-parameters), które mogą wpływać na trasę. Dostosowanie tych ustawień pomoże Ci w pełni wykorzystać OsmAnd i osiągnąć cel bez zbędnych opóźnień.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia nawigacji iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Jak otworzyć {#how-to-open}

Ta sekcja przedstawia ustawienia nawigacji niezbędne do obliczania i wytyczania trasy, które można ustawić dla wybranego profilu. To menu zawiera ustawienia dla [przygotowania trasy](../setup/route-navigation.md), [ekranu mapy podczas nawigacji](../guidance/map-during-navigation.md) oraz to, co ustawisz w *Ustawieniach nawigacji*, bezpośrednio wpływa na wyświetlanie danych w [Szczegółach trasy](../setup/route-details.md).

Istnieją trzy sposoby dostępu do menu Ustawień nawigacji.

- Przejdź do głównego *Menu → Ustawienia*, wybierz wymagany *Profil* i dotknij *Ustawienia nawigacji*.

- Dotknij ikonę *Nawigacja* na ekranie mapy, a następnie wybierz *ikonę Ustawienia → Ustawienia nawigacji*.

- Przejdź do głównego *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.  

:::info
Domyślny profil *Przeglądaj mapę* nie ma ustawień nawigacji.  
:::


## Typ nawigacji {#navigation-type}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia nawigacji iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

Nawigacja jest ważną częścią podróży, a wybór *właściwego typu* nawigacji może znacznie ułatwić podróż. Wybrany typ nawigacji może zależeć od sposobu podróżowania i dostępu do Internetu.  

- **Nawigacja online**
    Głównie wykorzystuje specjalny system routingu lub stronę internetową, która umożliwia aplikacji OsmAnd wytyczanie trasy na podstawie bieżących informacji i innych czynników. O wyborze najlepszej trasy online można przeczytać w artykule [Routing online](../routing/online-routing.md). Ten typ nawigacji jest dostępny tylko dla *wersji Android* aplikacji.  

- **Nawigacja offline**
Nie wymaga dostępu do internetu i oferuje szerszy wybór [typów nawigacji](../routing/osmand-routing.md#routing-types), które mogą być używane do obliczania trasy. Wśród nich są *rower, łódź, samochód, pieszo, narty* i *linia prosta*. Obecnie istnieje 13 podstawowych typów routingu, a także zewnętrzny typ routingu [BRouter](../routing/brouter.md), który zapewnia dodatkowe możliwości routingu.  

Typ nawigacji określa, które zasady są używane do obliczania tras. Jeśli potrzebujesz konkretnego typu nawigacji, możesz **zaimportować własny zmodyfikowany plik routingu *XML***. Więcej o zasadach routingu przeczytasz na naszej [stronie GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). Istnieje również osobny artykuł o formacie XML i jego użyciu, [Styl renderowania mapy](../../../technical/osmand-file-formats/osmand-rendering-style.md), który może pomóc w tworzeniu pliku trasy.  


## Parametry trasy {#route-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia nawigacji iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** to ustawienia, które określają, w jaki sposób aplikacja obliczy trasę do celu, biorąc pod uwagę takie czynniki, jak rodzaj transportu, priorytety routingu, warunki trasy, złożoność trasy i preferencje użytkownika.  

Dla każdego [profilu](../../personal/global-settings.md#default-profile), z wyjątkiem *Przeglądaj mapę*, OsmAnd domyślnie wybiera optymalny [typ nawigacji](#navigation-type) i odpowiednie [parametry trasy](../routing/osmand-routing.md#routing-types). Możesz jednak wybrać dowolny typ i zmienić parametry w zależności od swoich preferencji i warunków zewnętrznych nadchodzącej podróży.  

Wszystkie parametry trasy są szczegółowo opisane w odpowiednich sekcjach dokumentacji:  
*[Routing samochodowy (Ciężarówka, Motocykl)](../routing/car-based-routing.md), [Routing rowerowy (MTB)](../routing/bicycle-based-routing.md), [Routing motorowerowy](../routing/moped-routing.md), [Routing pieszy](../routing/pedestrian-routing.md), [Routing transportu publicznego](../routing/public-transport-navigation.md), [Routing konny](../routing/horse-routing.md), [Routing narciarski](../routing/ski-routing.md), [Routing kolejowy](../routing/train-routing.md), [Routing łodziowy](../routing/boat-navigation.md), [Routing bezpośredni do punktu](../routing/direct-to-point-routing.md), [Routing linią prostą](../routing/straight-line-routing.md), [Routing online](../routing/online-routing.md), [Routing BRouter](../routing/brouter.md)*.  


### Przeliczanie trasy {#recalculate-route}

<Tabs groupId="operating-systems">

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
| *<Translate android="true" ids="route_recalculation_dist_title"/> w przypadku odchylenia*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | Jeśli [komunikaty głosowe](../guidance/voice-navigation.md#voice-settings) są włączone, OsmAnd ogłasza, że trasa jest przeliczana. |
|  *Przelicz trasę w przypadku zmiany kierunku*  | Twoja trasa zostanie przeliczona, jeśli wrócisz do punktu początkowego.  |  Przy wyłączonym tym ustawieniu, ruch do punktu początkowego nie jest uważany za odchylenie od ścieżki (o ile jest zgodny z obliczoną trasą).  |


### Ustawienia deweloperskie {#development-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *Menu → Ustawienia → profil aplikacji → Ustawienia nawigacji → Parametry trasy → Rozwój*

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Menu → Ustawienia → profil aplikacji → Ustawienia nawigacji → Parametry trasy → Rozwój*

![Ustawienia nawigacji iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>  

Parametry w sekcji **Rozwój** są przeznaczone głównie dla zaawansowanych użytkowników i są dostępne tylko po włączeniu [wtyczki deweloperskiej OsmAnd](../../plugins/development.md).  

| Parametr | Opis |
|:------------|:---------------|
| *Typ routingu* (*Android*) / *Algorytm routingu* (*iOS*) | <ul><li>**A*** 2-fazowy (*Android*) / **A*** (*iOS*) dodaje dodatkową fazę do domyślnego algorytmu w celu poprawy jakości obliczonej trasy. Ta opcja może być przydatna do znajdowania tras w dużych i złożonych sieciach drogowych, ale obliczanie trasy może trwać dłużej.</li><li>**A* classic** (*Android*) / **Hierarchie autostrad** (*iOS*) optymalizują planowanie trasy, preferując główne drogi i autostrady, minimalizując liczbę zakrętów i skrzyżowań na trasie. Szczególnie skuteczne na długich dystansach.</li><li>**HH (Hierarchie autostrad) x Java** (*tylko Android*) opiera się na implementacji hierarchicznych struktur danych w celu optymalizacji wyszukiwania ścieżek na mapie, biorąc pod uwagę ograniczenia czasu wykonania i zużycie zasobów urządzenia, i jest realizowany na platformie Java.</li><li>**HH (Hierarchie autostrad) x C++** (*tylko Android*) to algorytm, który wykorzystuje język programowania C++ do efektywnego przetwarzania danych sieci drogowej i budowania optymalnych tras przy użyciu hierarchicznych struktur danych. Jest zoptymalizowany pod kątem szybkiego przetwarzania dużych ilości danych i jest szczególnie skuteczny w nawigacji po mapach z wieloma sieciami drogowymi.</li></ul> |  
| *Aproksymacja GPX* (*tylko Android*)  | <ul><li>Aproksymacja GPX **oparta na routingu** w **C++ i Java** wykorzystuje dane trasy do aproksymacji śladów GPS z istniejącymi trasami drogowymi, co poprawia dokładność śladu i zmniejsza jego rozmiar.</li><li>Aproksymacje GPX **oparte na geometrii** w **C++ i Java** działają na podstawie zasad geometrycznych, aby szybko i dokładnie aproksymować ślady GPS, umożliwiając efektywne przetwarzanie dużych ilości danych.</li></ul> |
| *Automatyczne powiększanie* | <ul><li>**Dyskretne** umożliwia powiększanie mapy do określonego poziomu szczegółowości mierzonego w kilku dyskretnych krokach.</li><li>**Płynne** zapewnia stopniową zmianę skali mapy z płynnymi efektami animacji bez szarpnięć i skoków.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*tylko Android*)  | Użyj [aktualizacji OsmAnd Live](../../personal/maps-resources.md#osmand-live) podczas routingu. Zauważ, że zalecamy używanie tej opcji tylko do celów testowych.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows using [OsmAnd Live updates](../../personal/maps-resources.md#osmand-live) while routing. Note, that we recommend using this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## Komunikaty głosowe {#voice-prompts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Ustawienia nawigacji głosowej Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> button* *(or <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Choose profile → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Ustawienia nawigacji głosowej iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

Pierwsza część artykułu *[Komunikaty głosowe / Powiadomienia](./voice-navigation.md)* szczegółowo opisuje, jak skonfigurować komunikaty głosowe.  

Instrukcje audio podczas nawigacji pomagają kierowcy lub pieszemu dotrzeć do celu podczas [nawigowania po wybranej trasie](../setup/route-navigation.md). Zawierają informacje o zakrętach, kierunkach jazdy, znakach drogowych, odległościach do celu i innych czynnikach, które mogą wpływać na nawigację.  

Jeśli wybierzesz ścieżkę jako punkt docelowy, musisz użyć opcji [Dołącz do dróg](../setup/gpx-navigation.md#attach-to-the-roads), aby komunikaty głosowe działały poprawnie.

*Komunikaty głosowe* pozwalają skupić się na drodze i nie rozpraszać się mapą ani urządzeniem nawigacyjnym. Poprawiają również bezpieczeństwo jazdy, skracają czas potrzebny na nawigację w nieznanym terenie i mogą być przydatne dla różnych [typów tras](../routing/osmand-routing.md#routing-types).


## Alerty ekranowe {#screen-alerts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Ustawienia nawigacji](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Ustawienia nawigacji](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>  

Ustawienie nawigacji **Alert ekranowy** włącza [**Widżet alertów**](../../widgets/nav-widgets.md#alert-widget). *Szczegóły:*

- Gdy zbliżasz się do jednej z obsługiwanych przeszkód na drodze, powiadomienia pojawiają się w lewym dolnym rogu mapy.
- Jeśli skonfigurujesz [*komunikaty głosowe i tekstowe*](../../navigation/guidance/voice-navigation.md) dostępne w aplikacji OsmAnd, podróż będzie bardziej komfortowa i bezpieczniejsza.
- Wygląd i czas wyświetlania komunikatów zależą od ustawień prędkości. Można je znaleźć [w artykule](../../../technical/algorithms/voice-prompt-triggering.md).  
- Na zachowanie *alertów ekranowych* wpływa również ustawienie [Pokaż punkty wzdłuż trasy](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

Możesz ***wybrać, które alerty*** chcesz widzieć na ekranie aplikacji podczas nawigacji:

- **Ograniczenie prędkości** ([informacje OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). W ustawieniach alertów ekranowych *Ograniczenie prędkości* jest wyświetlane tylko na ekranie z włączonymi *Ostrzeżeniami o ruchu drogowym*. Jeśli chcesz widzieć ograniczenia prędkości podczas nawigacji bez innych ostrzeżeń, użyj [widżetu](../../widgets/nav-widgets.md#speed-limit).
- **Ostrzeżenia o ruchu drogowym** ([informacje OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Dodatkowe informacje można znaleźć w artykule [Ekran mapy podczas nawigacji](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Przejścia dla pieszych** ([informacje OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Fotoradary** ([informacje OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Więcej informacji o ustawieniu fotoradarów w OsmAnd znajdziesz w [Typach alertów](../../widgets/nav-widgets.md#alert-types) oraz w artykule *Ustawienia globalne*, sekcja [Prawne](../../personal/global-settings.md#legal).
- **Tunele** ([informacje OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Typy ostrzeżeń mają różny wygląd wizualny, który zależy od regionu podróży. OsmAnd nie dąży do przedstawienia w 100% identycznych znaków drogowych, ale wskazuje na pewne podobieństwa.  
:::


## Mapa podczas nawigacji {#map-during-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

</TabItem>

</Tabs>

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

**Mapa jest używana podczas nawigacji** do określania Twojej lokalizacji, planowania trasy i orientacji w terenie. Podczas nawigacji możesz przeglądać mapę z *automatycznym centrowaniem*, przesuwać ją oraz *powiększać i pomniejszać*, aby zobaczyć wymagany obszar. Mapa może również wyświetlać znaczniki wskazujące punkty zainteresowania, trasy, warunki pogodowe, znaki drogowe i inne obiekty, które pomogą Ci w nawigacji. Mapa może być aktualizowana w *czasie rzeczywistym* i wyświetla *aktualne informacje*, które mogą wpływać na planowanie trasy.

Możesz dowiedzieć się, jak zmienia się zachowanie mapy podczas nawigacji w artykule [Ekran mapy podczas nawigacji](../guidance/map-during-navigation.md).  

## Dostosuj linię trasy {#customize-route-line}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Ustawienia nawigacji](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Ustawienia nawigacji](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

Dzięki ustawieniu **Dostosuj linię trasy** możesz wybrać wygląd linii trasy, która będzie widoczna na mapie podczas nawigacji. Możesz wybrać *kolor*, *szerokość linii* oraz wyświetlanie *strzałek kierunkowych* na niej. Dla każdego profilu możesz wybrać inny widok linii. Wszystkie te parametry są szczegółowo opisane w artykule *Ekran mapy podczas nawigacji* w sekcji [Wygląd linii trasy](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Parametry pojazdu {#vehicle-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Dla optymalnego obliczania trasy w OsmAnd, należy wziąć pod uwagę następujące parametry pojazdu:

1. Ustaw [*Domyślną prędkość* lub *Prędkości drogowe*](#default-speed--road-speeds), jako [minimalną i maksymalną prędkość](#road-speeds) pojazdu. Pomoże to aplikacji określić czas potrzebny na pokonanie trasy i pozwoli jej wybrać najlepszą trasę, biorąc pod uwagę ograniczenia prędkości na różnych odcinkach drogi.
2. Określ [*typ*](#fuel-used-by-motor) paliwa używanego przez silnik. Pozwoli to aplikacji oszacować emisję CO2.
3. Wprowadź [*pojemność zbiornika paliwa*](#fuel-tank-capacity), aby dokładnie śledzić poziom paliwa i zużycie.
4. Zdefiniuj [*parametry rozmiaru i wagi*](#size-parameters) pojazdu, co może pomóc aplikacji obliczyć optymalną trasę i uniknąć przeszkód na drodze z powodu ograniczeń.

Prawidłowe ustawienie parametrów w aplikacji OsmAnd pomoże uniknąć problemów podczas nawigacji po trasie, wybrać najbardziej odpowiednią trasę zgodnie z typem pojazdu i ograniczeniami drogowymi oraz obliczyć czas podróży.


### Parametry rozmiaru {#size-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Parametry pojazdu wpływają na nawigację i konstrukcję trasy, ponieważ określają dostępność dróg, mostów, promów, tam i innej infrastruktury. Jeśli wysokość, szerokość, długość lub waga pojazdu przekracza dopuszczalne wartości dla niektórych odcinków drogi, system nawigacji OsmAnd znajdzie alternatywną trasę, aby uniknąć przeszkód na drodze.  

- Jednostki miary będą odpowiadać ustawieniom wybranym w *Ustawieniach ogólnych → [Jednostki i formaty](../../personal/profiles.md#units--formats)*.
- Parametry pojazdu można ustawić ręcznie.
- Jeśli ręcznie wybierzesz parametr pomiaru pojazdu, aplikacja zaproponuje Ci najbliższą wartość z gotowej listy. Jest to konieczne, aby uniknąć błędów i prawidłowo zbudować trasę.
- Możesz wybrać parametry pojazdu z gotowej listy rozmiarów.
- Nie ustawiaj rozmiaru na *Brak*, co oznacza, że dla wybranego parametru nie zostaną zastosowane żadne ograniczenia.  

#### Limity {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Parametr Waga jest dostępny tylko w typach nawigacji, takich jak [*Samochód, Ciężarówka* i *Motocykl*](../../navigation/routing/car-based-routing.md).  

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Parametr Wysokość jest dostępny tylko w typach nawigacji, takich jak *[Samochód, Ciężarówka, Motocykl](../../navigation/routing/car-based-routing.md)* i *[Łódź](../../navigation/routing/boat-navigation.md)*.  

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Parametr Długość jest dostępny tylko w typach nawigacji, takich jak [*Samochód, Ciężarówka* i *Motocykl*](../../navigation/routing/car-based-routing.md).  

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Parametr Szerokość jest dostępny tylko w typach nawigacji, takich jak *[Samochód, Ciężarówka, Motocykl](../../navigation/routing/car-based-routing.md)* i *[Łódź](../../navigation/routing/boat-navigation.md)*.  

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Limity parametrów pojazdu mogą być ważne dla nawigacji i bezpieczeństwa drogowego. Niektóre z tych ograniczeń mogą obejmować:  

1. Ograniczenia dotyczące pojazdów poruszających się w niektórych obszarach miejskich.  
2. Ograniczenia dotyczące ruchu pojazdów na określonych odcinkach dróg, takich jak mosty, tunele o ograniczonej przestrzeni, niskie wiadukty, złożone zakręty lub inne konstrukcje.  
3. Limity wagi na oś pojazdu mogą być szczególnie ważne dla ciężarówek.
4. Ograniczenia dla pojazdów poruszających się w określonych warunkach, takich jak wysokie temperatury, mokre lub zaśnieżone drogi, w nocy lub w warunkach pogodowych o ograniczonej widoczności.

Te ograniczenia mogą być ważne dla nawigacji i należy je wziąć pod uwagę podczas planowania trasy. Jeśli pojazd przekroczy limity, może to skutkować zagrożeniem bezpieczeństwa drogowego, uszkodzeniem infrastruktury, grzywnami za wypadki i innymi konsekwencjami prawnymi. Dlatego kierowcy powinni dokładnie zbadać trasę i upewnić się, że wysokość ich pojazdu spełnia limity.


### Parametry paliwa {#fuel-parameters}

#### Paliwo używane przez silnik {#fuel-used-by-motor}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Trasa nawigacji Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasa nawigacji iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Jeśli wybierzesz typ silnika w parametrach pojazdu, dane o [***śladzie CO2***](../../navigation/setup/route-details.md#elevation-info) zostaną wyświetlone nad wykresem w [Szczegółach trasy](../setup/route-details.md).
Dostępnych jest sześć typów paliwa: ***Benzyna, Diesel, LPG, CNG, Elektryczne*** i ***Hybrydowe***.  

**Zastosowanie:**

Ustawienie **Paliwo używane przez silnik** jest dostępne tylko w nawigacji opartej na pojazdach, takich jak *[Samochód, Motocykl i Ciężarówka](../../navigation/routing/car-based-routing.md)*.


#### Pojemność zbiornika paliwa {#fuel-tank-capacity}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia nawigacji Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>




Parametr **Pojemność zbiornika paliwa** pozwala dokładniej śledzić poziom paliwa i zużycie pojazdu, podając całkowitą objętość zbiornika. Jednostka miary pojemności paliwa jest określana przez ustawienia skonfigurowane w *Menu → Konfiguruj profil → Ustawienia ogólne → Jednostki i formaty → Jednostka objętości*. Szczegółowe wskazówki dotyczące ustawiania jednostek i formatów znajdują się w artykule [Profil (Ustawienia)](https://osmand.net/docs/user/personal/profiles#units--formats).

OsmAnd obsługuje następujące jednostki pojemności:

- Galony - **gal**. Ten skrót jest używany do reprezentowania zarówno **galonów imperialnych**, jak i **galonów amerykańskich**, w zależności od wybranych preferencji jednostek.
- Litry - **l**. Jednostka metryczna pojemności.

**Zastosowanie:**

Ustawienie **Pojemność zbiornika paliwa** jest dostępne tylko w nawigacji opartej na pojazdach. Dla typów nawigacji, takich jak *Rower*, *Jazda konna*, *Pieszo* i *Narty*, ten parametr nie jest wyświetlany w parametrach pojazdu.

Wprowadzając dokładną pojemność zbiornika paliwa, aplikacja może zapewnić bardziej spersonalizowane doświadczenie, w tym:

- Precyzyjne śledzenie pozostałego paliwa na podstawie zużycia.
- Ulepszone planowanie trasy z postojami na tankowanie zoptymalizowanymi pod kątem rozmiaru zbiornika.

Aby zapewnić dokładne obliczenia i sugestie nawigacyjne, sprawdź, czy wybrana jednostka odpowiada standardowi pomiaru Twojego zbiornika.


### Prędkość domyślna / Prędkości drogowe {#default-speed--road-speeds}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ustawienia nawigacji](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia nawigacji](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

Dla wszystkich typów nawigacji minimalna i maksymalna dopuszczalna prędkość, zarówno domyślna, jak i drogowa, mogą być różne, zgodnie z określonymi wartościami ([Domyślne ograniczenia prędkości](https://wiki.openstreetmap.org/wiki/Default_speed_limits)) i ograniczeniami dla pojazdów. Prędkość jest również ustawiana w określonych przyrostach, aby ustawienia aplikacji były maksymalnie użyteczne. Dla profili *Pieszo*, *Jazda konna* i *Rower* w małych przyrostach odpowiadających 0,1 km/h ([Jednostki i formaty](https://osmand.net/docs/user/personal/profiles#units--formats)), a dla pozostałych profili w przyrostach odpowiadających 1 km/h.  
Ustawienia prędkości określają, kiedy aktywowane są [komunikaty głosowe](../guidance/voice-navigation.md).

Te parametry są używane jako prędkość do oszacowania [czasu przybycia](../../widgets/nav-widgets.md#time-to-intermediate), gdy prędkość nie może być określona na podstawie danych mapy:

- dla wybranego profilu;
- jeśli używane drogi nie mają ograniczeń prędkości, co może również wpływać na routing;
- jeśli wybrano ślady wygenerowane przez użytkownika lub zaimportowane.


#### Prędkość domyślna {#default-speed}

**Prędkość domyślna** to wstępnie ustawiona prędkość ruchu. Jest używana do obliczania czasu przybycia i określania optymalnej trasy na podstawie prędkości ruchu, którą aplikacja uważa za typową dla tego trybu transportu. Na przykład samochód, transport publiczny, pieszy lub prędkość ustawiona ręcznie.


#### Prędkości drogowe {#road-speeds}

<InfoAndroidOnly />

![Ustawienia nawigacji](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)


<!--
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_ios.png)

</TabItem>

</Tabs>  

:::note
These settings in iOS are available in *Menu → Settings → app profile → Navigation settings → Route parameters → Road speeds*.
:::

-->

- **Minimalna prędkość**  
    Ustawienie to określa minimalną prędkość jazdy dla wszystkich typów dróg na trasie. Zwiększa priorytet dla dróg z zalecaną prędkością niższą niż minimalna.  
- **Maksymalna prędkość**  
    Ustawienie to określa maksymalną prędkość jazdy i zmniejsza priorytet dla dróg z możliwą prędkością wyższą niż maksymalna.


## Szczegółowe wskazówki dotyczące ścieżki {#detailed-track-guidance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Dołącz do dróg 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Ustawienia nawigacji Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Szczegółowe wskazówki dotyczące ścieżki*

![Ustawienia nawigacji](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Ustawienia nawigacji](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

Funkcja **Szczegółowe wskazówki dotyczące ścieżki** poprawia dokładność nawigacji po trasie podczas korzystania z **tras opartych na ścieżkach**. Po wybraniu ścieżki jako celu, możesz włączyć ustawienie [Dołącz do dróg](../setup/gpx-navigation.md#attach-to-the-roads) z menu [Śledź ścieżkę](../setup/gpx-navigation.md#follow-track-options). Zapewnia to dopasowanie ścieżki do istniejących dróg, co zapewnia płynniejszą i bardziej precyzyjną nawigację.

Istnieją dwie opcje korzystania ze *Szczegółowych wskazówek dotyczących ścieżki*:

- **<Translate android="true" ids="ask_every_time"/>** (*ustawienia domyślne*) – Opcja *Dołącz do dróg* będzie pojawiać się w sekcji [Szczegóły trasy](../setup/route-details.md) za każdym razem, gdy zostanie obliczona trasa oparta na ścieżce. Pozwala to zdecydować, czy zastosować dołączenie do dróg dla każdej sesji nawigacji.

- **<Translate android="true" ids="shared_string_always"/>** – Proces dołączania do dróg zostanie zastosowany automatycznie dla każdej trasy *nawigacji po ścieżce* bez konieczności ręcznego potwierdzenia.

Więcej informacji na temat korzystania z nawigacji opartej na ścieżkach można znaleźć w artykule [Nawigacja po ścieżce](../setup/gpx-navigation.md).


## Powiązane artykuły {#related-articles}

- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Przygotowanie trasy](../setup/route-navigation.md)
- [Nawigacja po ścieżce](../setup/gpx-navigation.md)
- [Nawigacja po znacznikach](../setup/markers-navigation.md)
- [Szczegóły trasy](../setup/route-details.md)
- [Ekran mapy podczas nawigacji](./map-during-navigation.md)
- [Komunikaty głosowe / Powiadomienia](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ostatnia aktualizacja: kwiecień 2025*