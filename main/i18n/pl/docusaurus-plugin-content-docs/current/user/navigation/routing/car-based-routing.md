---
source-hash: cd7a6be8622eb21754f0737fc6e482333633f7712490b8d2d401bc90d556be56
sidebar_position: 2
title: Wyznaczanie tras dla samochodów (ciężarowych, motocykli)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Przegląd {#overview}

Wyznaczanie tras dla samochodów ma na celu pomóc kierowcom w efektywnym, bezpiecznym i komfortowym poruszaniu się po drogach, poprzez dostarczanie spersonalizowanych wskazówek dostosowanych do unikalnych potrzeb i preferencji każdego kierowcy. Właściwe ustawienia wyznaczania tras mogą pomóc kierowcom zaoszczędzić czas i paliwo oraz uniknąć zagrożeń na drodze. Domyślnie oferowane jest najszybsze wyznaczanie tras.

:::info
Mechanizm wyznaczania tras dla zmotoryzowanych pojazdów naziemnych różni się tylko kilkoma ustawieniami. Wspólne parametry opisano w sekcji [Samochód](#route-parameters---car) tego artykułu. [Ciężarówka](#route-parameters---truck) i [Motocykl](#route-parameters---motorcycle) mają swoje własne specyficzne cechy.
:::

Wyznaczanie tras można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../../navigation/guidance/navigation-settings.md#route-parameters) ustawień nawigacji odpowiedniego profilu (*Jazda, Ciężarówka, Motocykl*).

## Parametry trasy - Samochód {#route-parameters---car}

Wyznaczanie tras dla samochodów ma na celu pomóc kierowcom znaleźć najbardziej efektywne i bezpośrednie trasy do ich celów. Uwzględnia ono typowe ograniczenia ruchu, takie jak ulice jednokierunkowe, zakazy skrętu, strefy dla pieszych, a także pomaga unikać dróg nieodpowiednich dla samochodów, takich jak wąskie drogi lub drogi z ograniczeniami wagowymi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ustawienia wyznaczania tras dla samochodów Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ustawienia wyznaczania tras dla samochodów iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:------------|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Wybierz drogi, których chcesz unikać podczas nawigacji. Możesz [wybrać drogę na mapie](../../map/map-context-menu/#avoid-road) lub wybrać typy dróg z listy. </summary>![Unikaj dróg Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Unikaj przekraczania granicy do innego kraju).</li><li>Unikaj [dróg lodowych](https://wiki.openstreetmap.org/wiki/Key:ice_road) (sezonowe drogi w zimnych regionach, które są położone na zamarzniętej wodzie) i [brodów](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (części drogi, gdzie przepływa przez nią ciek wodny). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (rodzaj transportu wodnego, który przewozi pojazdy przez akweny).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (pociągi przewożące samochody, które łączą dwa miejsca trudno dostępne drogą).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (tylko dla pojazdów z napędem 4x4).</li></ul> |
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Dla wyznaczania tras dla samochodów zakłada się, że nawierzchnia dróg jest [utwardzona](https://wiki.openstreetmap.org/wiki/Key:surface), chyba że określono inaczej.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Ograniczenia dostępu prywatnego zostaną zignorowane podczas obliczania trasy. | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* jest używany w OSM do opisywania ograniczeń w korzystaniu z autostrad i innych dróg transportowych, a także budynków, wejść, udogodnień i obiektów rekreacyjnych.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (tylko&nbsp;samochód) | <details><summary> Drogi, które są zamknięte dla dostaw towarów, zostaną ominięte. </summary>![Dostawa towarów Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Ta opcja dotyczy tylko pojazdów przewożących towary o masie nie większej niż 3,5 tony. Jeśli masa Twojego pojazdu przekracza 3,5 tony, powinieneś użyć [profilu ciężarówki](#route-parameters---truck).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Aby obliczyć trasę oszczędzającą paliwo, silnik routingu wewnętrznie ogranicza prędkość do 60 km/h, nie zmieniając jednak szacowanego czasu przybycia. Tak więc w przypadku 2 takich samych tras początkowo-końcowych: autostrady (120 km/h) i drogi podrzędnej (60 km/h) - zostanie wybrana krótsza trasa. Dla dróg serwisowych, które mają ograniczenie prędkości &lt;60 km/h, zostanie wybrana szybsza trasa.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Parametry trasy - Ciężarówka {#route-parameters---truck}

:::note
Domyślnie *profil ciężarówki* jest dezaktywowany. Aby użyć tego profilu do wyznaczania tras, musisz go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Wyznaczanie tras dla ciężarówek jest podobne do wyznaczania tras dla samochodów, ale zostało zaprojektowane specjalnie dla kierowców dużych pojazdów użytkowych. Uwzględnia dodatkowe czynniki, takie jak [wysokość, waga i szerokość pojazdu](../guidance/navigation-settings.md#size-parameters) oraz możliwość przewozu materiałów niebezpiecznych (patrz tabela poniżej). Wszystkie inne ustawienia wyznaczania tras są identyczne z [wyznaczaniem tras dla samochodów](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ustawienia wyznaczania tras dla ciężarówek Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ustawienia wyznaczania tras dla ciężarówek iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (dla **regionu UE**) | <details><summary> Władze lokalne mogą zabronić transportu materiałów niebezpiecznych na niektórych drogach lub w tunelach. </summary> ![Transport materiałów niebezpiecznych Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Po włączeniu mechanizm wyznaczania tras dla ciężarówek uwzględnia tag OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Możesz wybrać jedną z pięciu kategorii (*A, B, C, D, E*) materiałów niebezpiecznych zgodnie z **ograniczeniami UE**. |
| *<Translate android="true" ids="dangerous_goods"/>* (tylko jeśli wybrano **region USA**) | <details><summary> Zasady transportu materiałów niebezpiecznych w USA różnią się od tych w UE. Wyświetlane tylko, jeśli region jazdy jest ustawiony na USA. Możesz wybrać wiele klas. </summary> ![Transport materiałów niebezpiecznych Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Wybierz jeden z typów (od 1 do 9) materiałów niebezpiecznych zgodnie z [**ograniczeniami USA**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Transport materiałów niebezpiecznych jest zabroniony na niektórych drogach i w tunelach. <ul><li>1. *Materiały wybuchowe* </li><li> 2. *Gazy* </li><li> 3. *Ciecze łatwopalne* </li><li> 4. *Ciała stałe łatwopalne* </li><li> 5. *Utleniacze i nadtlenki organiczne* </li><li> 6. *Substancje toksyczne i zakaźne* </li><li> 7. *Substancje promieniotwórcze* </li><li> 8. *Substancje żrące* </li><li> 9. *Różne* </li></ul> |

## Parametry trasy - Motocykl {#route-parameters---motorcycle}

:::note
Domyślnie *profil motocyklowy* jest dezaktywowany. Aby użyć tego profilu do wyznaczania tras, musisz go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Wyznaczanie tras dla motocykli to proces tworzenia trasy zoptymalizowanej specjalnie pod kątem podróży motocyklowych. Ten typ wyznaczania tras uwzględnia unikalne potrzeby i preferencje motocyklistów, zapewniając najlepsze możliwe warunki jazdy. Trasy są wyznaczane z uwzględnieniem szeregu parametrów, takich jak wybór nawierzchni drogi (na przykład złe warunki drogowe mogą być preferowane lub unikane), unikanie korków, dostępność infrastruktury lub bezpieczeństwo.

## Inne ustawienia wyznaczania tras {#other-routing-settings}

- Algorytm wyznaczania tras może również uwzględniać tymczasowe ograniczenia określone w OpenStreetMap. Można to zrobić za pomocą opcji *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Należy pamiętać, że w niektórych przypadkach informacje z OSM mogą być nieaktualne.

- W sekcji [*Przelicz trasę*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Parametrów trasy* można włączyć i dostosować opcje przeliczania trasy.

- W sekcji [*Ustawienia deweloperskie*](../guidance/navigation-settings.md#development-settings) *Parametrów trasy* można wypróbować nowe funkcje wyznaczania tras, które są obecnie w fazie testów. Należy pamiętać, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).

- Ustawienie *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* w wersji OsmAnd na *iOS* znajduje się w *Ustawieniach nawigacji → Parametry trasy* (dla *Androida*, w *Parametrach pojazdu → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). To ustawienie jest używane na nieznanych drogach bez ograniczeń prędkości. Najczęściej ma to miejsce podczas nawigacji po ścieżce lub trasie online. Musi być ustawione zgodnie z parametrami Twojego pojazdu.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Właściwe skonfigurowanie ustawień pomoże uniknąć problemów podczas tworzenia trasy. Możesz wybrać najbardziej odpowiednią trasę w zależności od typu pojazdu i ograniczeń drogowych, a także obliczyć czas podróży.

> *Ostatnia aktualizacja: lipiec 2024*