---
source-hash: 7c8272dbf6899f4214dddc8dd2957ce245f83752b109660a6880724a955deb10
sidebar_position: 0
title:  O routingu w OsmAnd
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Przegląd {#overview}

Routing offline w OsmAnd opiera się na danych OpenStreetMap i zapewnia różnorodne trasy do różnych celów. Jest to lista predefiniowanych typów routingu, którą można rozszerzyć. Reguły nawigacji zawarte są w pliku [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) i są używane do routingu offline. Typ trasy zmienia się automatycznie po zmianie profilu.  


## Typy routingu {#routing-types}

W OsmAnd dostępne są następujące profile z predefiniowanymi typami routingu: *Samochód, Rower, Pieszy, Ciężarówka, Motocykl, Motorower, Transport publiczny, Łódź, Samolot, Narty, Pociąg, Jazda konna*. Oprócz tego można tworzyć własne profile z określonymi regułami routingu lub [modyfikować algorytm routingu OsmAnd](../routing/osmand-routing.md#customize-offline-routing).  

:::note

- Profile [**Ciężarówka, Motocykl, Motorower, Pociąg, Samolot, Łódź i Jazda konna**](./osmand-routing.md) są domyślnie wyłączone. Aby korzystać z tych profili, należy je aktywować w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.  

- Typ nawigacji [**Bezpośrednio do punktu**](./direct-to-point-routing.md) nie ma własnego profilu i może być używany z dowolnym włączonym profilem.  

- Routing offline w OsmAnd można **skonfigurować, modyfikując [plik .xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. Więcej informacji można znaleźć w artykule [*Dostosuj routing offline*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Kategoria | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *Routing offline OsmAnd*  |  Mechanizm routingu offline OsmAnd wykorzystuje pobrane wcześniej mapy jako źródło danych do obliczania trasy. |  Typy nawigacji: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md),  [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Motorower](./moped-routing.md), [Motocykl](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Ciężarówka](car-based-routing#route-parameters---truck), [Pociąg](./train-routing.md).            |
| *Routing bezpośrednio do punktu* |  Również wykorzystuje mapy offline i zapewnia wyznaczanie trasy w linii prostej (lub nawigację *od punktu do punktu*).  | Typy nawigacji: *[Linia prosta](./straight-line-routing.md)*,  *[Bezpośrednio do punktu](./direct-to-point-routing.md)*.  |
| [*BRouter* *(offline)*](./brouter.md)  |  Routing offline zapewniany przez [aplikację BRouter](https://brouter.de/).  | Dostępne **tylko na Androida**. Pełny opis przeczytaj [tutaj](./brouter.md).   |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) |  Routing online buduje trasę, korzystając z zasobów serwerów online przez połączenie internetowe. | Dostępne **tylko na Androida**. Możesz skonfigurować [routing online](./online-routing.md) do budowania trasy z różnych silników routingu online, takich jak [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX.  |

- *[Routing samochodowy (Ciężarówka, Motocykl)](./car-based-routing.md)* - OsmAnd dostarcza wskazówek dla kierowców samochodów, ciężarówek i motocykli.  
- *[Routing rowerowy (MTB)](./bicycle-based-routing.md)* - Routing rowerowy dostarcza wskazówek nawigacyjnych specjalnie dla rowerzystów i entuzjastów MTB. Może być również używany przez kierowców motorowerów (skuterów).  
- *[Routing pieszy](./pedestrian-routing.md)* - może być używany nie tylko do spacerów po mieście, ale także podczas wycieczek pieszych.
- *[Routing dla motorowerów](./moped-routing.md)* - opiera się na routingu rowerowym, chociaż ma swoje własne cechy.
- *[Routing transportem publicznym](./public-transport-navigation.md)* - może pomóc podczas podróży po mieście.
- *[Routing konny](./horse-routing.md)* - zapewnia jeźdźcom narzędzia potrzebne do planowania i cieszenia się jazdą konną.  
- *[Routing narciarski](./ski-routing.md)* - pozwala użytkownikom planować i nawigować podczas wycieczek narciarskich i innych aktywności sportów zimowych za pomocą aplikacji mobilnej OsmAnd.  
- *[Routing kolejowy](./train-routing.md)* - daje możliwość wykorzystania torów kolejowych do nawigacji.
- *[Routing dla łodzi](./boat-navigation.md)* - może być używany do budowania trasy na rzekach, kanałach, małych jeziorach i na otwartym morzu, ale tylko wtedy, gdy szlaki wodne są oznaczone w OpenStreetMap.
- *[Routing w linii prostej](./straight-line-routing.md)* - zapewnia wyznaczanie trasy w linii prostej (lub nawigację "od punktu do punktu"), która jest przeliczana ponownie, gdy zmienia się Twoja lokalizacja.  
- *[Routing bezpośrednio do punktu](./direct-to-point-routing.md)* - zapewnia wyznaczanie trasy w linii prostej (lub nawigację "od punktu do punktu"), która pozostaje stała przez całą nawigację w przeciwieństwie do routingu w **linii prostej** (przeliczanie trasy jest wyłączone).


## Dostosuj routing offline {#customize-offline-routing}

Możesz także utworzyć **własny plik routing.xml** lub zmodyfikować domyślny **routing.xml** i używać go do nawigacji (tylko dla zaawansowanych użytkowników OsmAnd).

- Skopiuj plik [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) na swoje urządzenie. Uważnie przeczytaj [informacje pomocnicze](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25). Jako przykład zobacz plik [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) użytkownika OsmAnd.
- Po dokonaniu zmian nowy plik *routing.xml* można dodać do OsmAnd, dotykając go i wybierając opcję otwarcia w aplikacji OsmAnd.
- Wybierz zmodyfikowany [Typ nawigacji](../../navigation/guidance/navigation-settings.md#navigation-type) dla swojego profilu.

Więcej informacji na temat tej funkcji można znaleźć w [*Dokumentacji technicznej*](../../../technical/osmand-file-formats/osmand-routing-xml.md) oraz na [*stronie GitHub OsmAnd*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).  


## Unikaj określonych dróg {#avoid-specific-roads}

:::caution
Funkcja unikania dróg jest globalna i wpływa na wszystkie **[Typy routingu](#routing-types)** z wyjątkiem *[Routingu online](../routing/online-routing.md)* i *[BRouter](../routing/brouter.md)*.  
:::

Istnieją dwa możliwe sposoby wyboru dróg, których należy unikać podczas obliczania trasy:

- Wybierz typ drogi w sekcji [Parametry trasy](../guidance/navigation-settings.md#route-parameters) w [Ustawieniach nawigacji](../guidance/navigation-settings.md). Opis tego ustawienia znajduje się w artykułach o ustawieniach [Typów routingu](#routing-types). Jako przykład zobacz opis typu routingu [Samochód / Ciężarówka / Motocykl](../routing/car-based-routing.md#route-parameters---car).
- Możesz także wybrać określone drogi, które nie będą używane do wyznaczania trasy, za pomocą opcji *[Unikaj drogi](../../map/map-context-menu.md#avoid-road)* w *menu kontekstowym mapy* lub za pomocą *[menu Unikaj dróg](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- Droga musi być oznaczona przy maksymalnym powiększeniu, ponieważ OsmAnd może błędnie zinterpretować dotknięcie i zablokować na przykład niewłaściwą stronę drogi dwujezdniowej lub chodnik.
- Funkcja Unikaj określonych dróg działa nieprawidłowo z opcją [Nawigacja po trasie GPX](../setup/gpx-navigation.md) i nie ma wpływu na uproszczoną [Nawigację po znacznikach](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Menu Unikaj dróg {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *Przycisk Nawigacja → Ustawienia → Unikaj dróg...*

![Menu Unikaj dróg Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Przycisk Nawigacja → Ustawienia → Unikaj dróg*

![Menu Unikaj dróg iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

W tym menu możesz anulować poprzedni wybór drogi, której należy unikać. Aby to zrobić, dotknij krzyżyka (Android) lub czerwonego **"-"** naprzeciwko drogi, której zamierzasz użyć do obliczenia trasy.

Korzystając z opcji *Wybierz na mapie*, możesz kontynuować oznaczanie dróg jako nieprawidłowych dla routingu na mapie OsmAnd.

Gdy wybierzesz drogę do uniknięcia za pomocą *menu kontekstowego mapy* lub *menu Unikaj dróg*, lista dróg zostanie wyświetlona nad ekranem mapy.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Lista dróg do uniknięcia na mapie Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista dróg do uniknięcia na mapie iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Eksport / Import {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*  

![Eksport dróg do uniknięcia na mapie Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Eksport dróg do uniknięcia na mapie Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*  

![Eksport dróg do uniknięcia na mapie iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Eksport dróg do uniknięcia na mapie iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

W zależności od ustawień urządzenia i dostępnych aplikacji, cała lista dróg do uniknięcia lub tylko jedna z nich może zostać [wyeksportowana](../../personal/import-export.md#export) jako plik `.osf` do różnych lokalizacji. Wybierz drogi, które chcesz wyeksportować, na sugerowanej liście.

Możesz [importować](../../personal/import-export.md#import) drogi do uniknięcia podczas obliczania trasy z innych źródeł w formacie pliku `.osf`. Można to również zrobić za pomocą opcji *Importuj* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). Możesz zaimportować wszystkie dane lub tylko kilka dróg do uniknięcia (zaznaczając drogę na liście).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Import dróg do uniknięcia na mapie Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Import dróg do uniknięcia na mapie iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
Najwygodniejszym sposobem synchronizacji dróg do uniknięcia między urządzeniami jest użycie [OsmAnd Cloud](../../personal/osmand-cloud.md) (wymagana subskrypcja Pro).
:::


## Uwzględnij tymczasowe ograniczenia {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

Opcja *Uwzględnij tymczasowe ograniczenia* pozwala na uwzględnienie tymczasowych ograniczeń drogowych podczas obliczania tras. Mogą to być takie rzeczy jak budowa drogi lub zamknięcie drogi z jakiegoś powodu (wypadek, remonty, klęski żywiołowe). Włączenie tej opcji może pomóc uniknąć nieoczekiwanych objazdów lub opóźnień. Należy pamiętać, że czasami te informacje mogą być nieaktualne.
W OpenStreetMap informacje te są zwykle oznaczane tagiem [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).  


## Sekcja deweloperska {#development-section}

**Sekcja deweloperska** w ustawieniach *Parametrów trasy* (*Menu → Ustawienia → profil aplikacji → Ustawienia nawigacji → Parametry trasy → Deweloperskie*) jest widoczna tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md). Obejmuje ona ustawienia takie jak *Typ routingu (Android) / Algorytm routingu (iOS), Aproksymacja GPX (tylko Android), Automatyczne powiększanie i Dane aktualizacji na żywo (tylko Android)*. Szczegółowy opis znajduje się w artykule [Ustawienia nawigacji](../../navigation/guidance/navigation-settings.md#development-settings).