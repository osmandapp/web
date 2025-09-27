---
source-hash: c8f39d23c520f3d8eb8713729cf8047052d90c32210529157c5a7347608706bb
sidebar_position: 2
title:  Wyznaczanie trasy dla samochodu (ciężarówki, motocykla)
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

Wyznaczanie trasy dla samochodów ma na celu pomóc kierowcom w wydajnym, bezpiecznym i wygodnym poruszaniu się po drogach, dostarczając spersonalizowane wskazówki dostosowane do unikalnych potrzeb i preferencji każdego kierowcy. Odpowiednie ustawienia wyznaczania trasy mogą pomóc kierowcom zaoszczędzić czas i paliwo oraz unikać zagrożeń na drodze. Domyślnie oferowana jest najszybsza trasa.

:::info
Mechanizm wyznaczania trasy dla zmotoryzowanych pojazdów lądowych różni się tylko kilkoma ustawieniami. Wspólne parametry są opisane w sekcji [Samochód](#route-parameters---car) tego artykułu. [Ciężarówka](#route-parameters---truck) i [Motocykl](#route-parameters---motorcycle) mają swoje własne cechy szczególne.
:::

Wyznaczanie trasy można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../../navigation/guidance/navigation-settings.md#route-parameters) w ustawieniach nawigacji odpowiedniego profilu (*Jazda, Ciężarówka, Motocykl*).


## Parametry trasy - Samochód {#route-parameters---car}

Wyznaczanie trasy dla samochodów ma na celu pomóc kierowcom w znalezieniu najbardziej wydajnych i bezpośrednich tras do ich miejsc docelowych. Uwzględnia ono typowe ograniczenia w ruchu drogowym, takie jak ulice jednokierunkowe, zakazy skrętu, strefy dla pieszych, a także pomaga unikać dróg nieodpowiednich dla samochodów, takich jak wąskie drogi lub drogi z ograniczeniami wagowymi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ustawienia wyznaczania trasy dla samochodu Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ustawienia wyznaczania trasy dla samochodu iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wybierz drogi, których chcesz unikać podczas nawigacji. Możesz [wybrać drogę na mapie](../../map/map-context-menu/#avoid-road) lub wybrać typy dróg z listy.  </summary>![Unikaj dróg Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Unikaj przekraczania granicy do innego kraju).</li><li>Unikaj [dróg lodowych](https://wiki.openstreetmap.org/wiki/Key:ice_road) (dróg sezonowych w zimnych regionach, które są wytyczane na zamarzniętej wodzie) i [brodów](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (części drogi, gdzie ciek wodny przepływa nad nią). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (rodzaj transportu wodnego, który przewozi pojazdy przez zbiorniki wodne).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (pociągi przewożące samochody, które łączą dwa miejsca trudno dostępne dla siebie drogą lądową).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (odpowiednie tylko dla pojazdów z napędem na 4 koła).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | W przypadku wyznaczania trasy dla samochodów zakłada się, że nawierzchnia dróg jest [utwardzona](https://wiki.openstreetmap.org/wiki/Key:surface), chyba że określono inaczej. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Ograniczenia dostępu prywatnego będą ignorowane podczas obliczania trasy.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* jest używany w OSM do opisywania ograniczeń w korzystaniu z dróg i innych szlaków transportowych, a także budynków, wejść, udogodnień i obiektów rekreacyjnych.   |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (tylko&nbsp;samochód) |  <details><summary> Drogi, które są zamknięte dla dostaw towarów, będą unikane. </summary>![Dostawa towarów Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Ta opcja dotyczy tylko pojazdów przewożących towary o masie nieprzekraczającej 3,5 tony. Jeśli masa Twojego pojazdu przekracza 3,5 tony, powinieneś użyć [profilu Ciężarówka](#route-parameters---truck).   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Aby obliczyć trasę oszczędną pod względem zużycia paliwa, silnik wyznaczania trasy wewnętrznie ogranicza prędkość do 60 km/h, jednak nie zmienia to szacowanego czasu przybycia. Tak więc w przypadku 2 tras o tym samym początku i końcu: autostrada (120 km/h) i droga podrzędna (60 km/h) - zostanie wybrana krótsza trasa. Dla dróg serwisowych, które mają ograniczenie prędkości < 60 km/h, zostanie wybrana szybsza trasa. |


## Parametry trasy - Ciężarówka {#route-parameters---truck}

:::note
Domyślnie *profil Ciężarówka* jest wyłączony. Aby użyć tego profilu do wyznaczania trasy, musisz go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Wyznaczanie trasy dla ciężarówek jest podobne do wyznaczania trasy dla samochodów, ale jest zaprojektowane specjalnie dla kierowców dużych pojazdów użytkowych. Uwzględnia dodatkowe czynniki, takie jak ograniczenia [wysokości, wagi i szerokości](../guidance/vehicle-parameters.md#size-parameters) pojazdu oraz możliwość transportu materiałów niebezpiecznych (sprawdź tabelę poniżej). Wszystkie inne ustawienia wyznaczania trasy są identyczne z [wyznaczaniem trasy dla samochodów](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ustawienia wyznaczania trasy dla ciężarówki Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ustawienia wyznaczania trasy dla ciężarówki iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (dla **regionu UE**) | <details><summary> Lokalne władze mogą zabronić transportu materiałów niebezpiecznych na niektórych drogach lub w tunelach. </summary> ![Transport materiałów niebezpiecznych Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Po włączeniu, mechanizm wyznaczania trasy dla ciężarówek uwzględnia tag OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Możesz wybrać jedną z pięciu kategorii (*A, B, C, D, E*) materiałów niebezpiecznych zgodnie z **ograniczeniami UE**. |
| *<Translate android="true" ids="dangerous_goods"/>* (tylko jeśli wybrano **region USA**) | <details><summary> Zasady transportu materiałów niebezpiecznych w USA różnią się od tych w UE. Wyświetlane tylko, jeśli regionem jazdy jest USA. Można wybrać wiele klas. </summary> ![Transport materiałów niebezpiecznych Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Wybierz jeden z typów (od 1 do 9) materiałów niebezpiecznych zgodnie z [**ograniczeniami USA**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Transport materiałów niebezpiecznych jest zabroniony na niektórych drogach i w tunelach. <ul><li>1. *Materiały wybuchowe* </li><li> 2. *Gazy* </li><li> 3. *Ciecze łatwopalne* </li><li> 4. *Materiały stałe łatwopalne* </li><li> 5. *Substancje utleniające i nadtlenki organiczne* </li><li> 6. *Substancje toksyczne i zakaźne* </li><li> 7. *Substancje promieniotwórcze* </li><li> 8. *Substancje żrące* </li><li> 9. *Różne* </li></ul> |


## Parametry trasy - Motocykl {#route-parameters---motorcycle}

:::note
Domyślnie *profil Motocykl* jest wyłączony. Aby użyć tego profilu do wyznaczania trasy, musisz go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Wyznaczanie trasy dla motocykli to proces tworzenia trasy specjalnie zoptymalizowanej pod kątem podróży motocyklem. Ten rodzaj wyznaczania trasy uwzględnia unikalne potrzeby i preferencje motocyklistów, zapewniając najlepsze możliwe warunki do jazdy. Trasy są wytyczane z uwzględnieniem szeregu parametrów, takich jak wybór nawierzchni drogi (na przykład można preferować lub unikać dróg o złym stanie), unikanie korków, dostępność infrastruktury czy bezpieczeństwo.