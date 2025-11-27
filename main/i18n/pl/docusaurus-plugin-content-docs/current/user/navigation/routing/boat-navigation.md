---
source-hash: 23c4f778402ca496deaebdf1d6a07d760d1d6b0418031a36f35310e5644277da
sidebar_position: 8
title:  Boat routing
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

Nawigacja dla łodzi może być cennym narzędziem dla każdego, kto lubi pływać łodzią lub żeglować po kanałach, rzekach lub torach wodnych. Ze względu na brak większości torów wodnych w danych OpenStreetMap, nawigacja dla łodzi *nie jest zalecana* do **nawigacji na wodach otwartych**, zamiast tego sugeruje się użycie **[Bezpośrednio do punktu](#direct-to-point-routing-for-boat)**. Włączenie warstwicy głębokości może pomóc w zachowaniu bezpieczeństwa na wodzie poprzez unikanie zagrożeń, takich jak płytkie wody, skały lub inne przeszkody.  
Silnik nawigacji dla łodzi OsmAnd uwzględnia również charakterystykę dróg wodnych i samych łodzi.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ekran nawigacji dla łodzi Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ekran nawigacji dla łodzi iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)  

</TabItem>

</Tabs>  

## Parametry trasy - Łódź {#route-parameters---boat}

:::note
Domyślnie *Profil Łódź* jest wyłączony. Aby użyć tego profilu do wyznaczania tras, należy go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Nawigację dla łodzi można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../../navigation/guidance/navigation-settings.md#route-parameters) w Ustawieniach nawigacji.  

Zwykle *Nawigacja dla łodzi* jest używana z profilem łodzi (ostatni włączony wraz z [wtyczką map morskich](../../plugins/nautical-charts.md)).  Możliwe jest jednak użycie nawigacji dla łodzi również z innymi profilami, a różne [typy tras](#other-routing-types-for-boat) można również zastosować w profilu łodzi.  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Ustawienia nawigacji dla łodzi Android](@site/static/img/navigation/routing/boat_route_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia nawigacji dla łodzi iOS](@site/static/img/navigation/routing/boat_route_ios.png)  

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Umożliwia korzystanie ze strumieni i kanałów odwadniających do nawigacji łodzią. Włączenie tej opcji może być przydatne dla małych łodzi, takich jak canoe, kajaki, tratwy, łodzie wiosłowe. |  [Strumienie](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) to naturalnie uformowane drogi wodne, które są zbyt wąskie, aby nazwać je rzeką. [Kanały odwadniające](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) to sztuczne drogi wodne, zazwyczaj wyłożone betonem lub podobnym materiałem, używane do odprowadzania nadmiaru wody, takiej jak woda deszczowa lub szara woda.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* |  Włączenie tej opcji pozwala na korzystanie z okresowych dróg wodnych do nawigacji łodzią.   | Tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) służy do oznaczania dróg wodnych, które nie zawierają wody na stałe.  |
| *Zezwalaj na promy* | Włącza wyznaczanie tras przez trasy promowe. | Używa `route=ferry` tam, gdzie jest obecne w OSM. Nie wymaga nowych map. |

:::note Nawigacja wodna i ograniczenia

1. Profil Łódź jest przeznaczony do wyznaczania tras wzdłuż rzek, jezior i innych dróg wodnych. Obsługuje tagi OSM, takie jak:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water` itp.

2. Profil Łódź obsługuje również **trasy promowe (`route=ferry`)**, gdy opcja **Zezwalaj na promy** jest włączona. Oznacza to, że jeśli trasy promowe są obecne na mapie, będą używane podczas obliczania tras dla łodzi.

3. Jeśli w OSM nie są zmapowane odpowiednie drogi wodne lub trasy promowe, silnik nawigacji może nie być w stanie skonstruować właściwej trasy. W takich przypadkach możesz użyć narzędzia [Zaplanuj trasę](../../plan-route/create-route.md) i umieścić punkty trasy ręcznie.

:::

## Inne typy tras dla łodzi {#other-routing-types-for-boat}

Typ trasy [Nawigacja dla łodzi](#route-parameters---boat) jest domyślnym algorytmem wyznaczania tras dla profilu Łódź. Można jednak wybrać inny typ trasy, który jest również odpowiedni do nawigacji łodzią:  

 - [Wyznaczanie tras bezpośrednio do punktu dla łodzi](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Wyznaczanie tras w linii prostej dla łodzi](./boat-navigation.md#straight-line-routing-for-boat)

Należy pamiętać, że typy tras *Bezpośrednio do punktu* i *W linii prostej* powinny być używane tylko na wodach otwartych, gdzie nie ma przeszkód ani zagrożeń dla nawigacji. Jeśli nawigujesz po drodze wodnej z określonym kanałem lub trasą, powinieneś użyć typu nawigacji dla łodzi w OsmAnd, który poprowadzi Cię przez właściwe kanały nawigacyjne i pozwoli uniknąć płytkich obszarów lub innych zagrożeń. Niektóre zmapowane zagrożenia oparte na tagach OSM hazard=* mogą być wyświetlane na mapie jako ikony POI zagrożeń lub etykiety tekstowe.  

Te typy tras dla profilu łodzi można aktywować, korzystając z następującej ścieżki: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> lub inny) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Wyznaczanie tras bezpośrednio do punktu dla łodzi {#direct-to-point-routing-for-boat}

:::note
Podczas korzystania z typów nawigacji Bezpośrednio do punktu i Łódź, potrzebne będą [dane o warstwach głębokości](../../plugins/nautical-charts.md#nautical-map-style), które można włączyć i ustawić w *Konfiguruj mapę*.
:::

Typ trasy [Bezpośrednio do punktu](./direct-to-point-routing.md) może być używany z profilem łodzi, gdy chcesz nawigować łodzią na otwartej wodzie bez podążania określoną trasą lub drogą wodną. Ten typ trasy pozwala ustawić punkt docelowy, a OsmAnd obliczy bezpośrednią ścieżkę do tego punktu z bieżącej lokalizacji. Ten typ wyznaczania tras nie uwzględnia charakterystyki łodzi, takiej jak minimalna i maksymalna prędkość, wysokość i szerokość. Trasa nie zostanie przeliczona w przypadku zboczenia z niej.

![Typ nawigacji Bezpośrednio do punktu Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Wyznaczanie tras w linii prostej dla łodzi {#straight-line-routing-for-boat}

Typ trasy [W linii prostej](./straight-line-routing) może być używany z profilem łodzi, gdy chcesz nawigować łodzią na otwartej wodzie, ale wolisz podążać prostą linią, a nie zakrzywioną trasą do punktu docelowego. Może to być przydatne na przykład podczas nawigacji do odległego punktu, który jest widoczny na horyzoncie.

![Typ nawigacji W linii prostej Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)