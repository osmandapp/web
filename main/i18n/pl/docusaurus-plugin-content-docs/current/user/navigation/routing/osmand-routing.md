---
source-hash: 7021923c986f2cd60c51183c1396e4c59265f7a68edc042e4249ee005d069bf9
sidebar_position: 0
title: O routingu OsmAnd
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

Routing offline w OsmAnd opiera się na danych OpenStreetMap i zapewnia różnorodne trasy do różnych celów. Jest to lista predefiniowanych typów routingu, które można rozszerzyć. Reguły nawigacji zawarte są w pliku [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) i są używane do routingu offline. Typ trasy zmienia się automatycznie po zmianie profilu.

## Typy routingu {#routing-types}

Następujące profile z ich typami routingu są wstępnie ustawione w OsmAnd: *Samochód, Rower, Pieszy, Ciężarówka, Motocykl, Motorower, Transport publiczny, Łódź, Samolot, Narciarstwo, Pociąg, Jazda konna*. Oprócz nich możesz tworzyć własne profile z określonymi regułami routingu lub [modyfikować algorytm routingu OsmAnd](../routing/osmand-routing.md#customize-offline-routing).

:::note

- Profile [**Ciężarówka, Motocykl, Motorower, Pociąg, Samolot, Łódź i Jazda konna**](./osmand-routing.md) są domyślnie wyłączone. Aby użyć tych profili, musisz je aktywować w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- Typ nawigacji [**Bezpośrednio do punktu**](./direct-to-point-routing.md) nie ma własnego profilu i może być używany z dowolnym włączonym profilem.

- Routing offline OsmAnd można **skonfigurować, modyfikując [plik .xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. Więcej informacji można znaleźć w artykule [*Dostosowywanie routingu offline*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Kategoria | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *Routing offline OsmAnd* | Mechanizm routingu offline OsmAnd wykorzystuje wstępnie pobrane mapy jako źródło danych do obliczania trasy. | Typy nawigacji: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md), [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Motorower](./moped-routing.md), [Motocykl](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Ciężarówka](car-based-based-routing#route-parameters---truck), [Pociąg](./train-routing.md). |
| *Routing bezpośrednio do punktu* | Również wykorzystuje mapy offline i zapewnia routing w linii prostej (lub nawigację *punkt-punkt*). | Typy nawigacji: *[Linia prosta](./straight-line-routing.md)*, *[Bezpośrednio do punktu](./direct-to-point-routing.md)*. |
| [*BRouter* *(offline)*](./brouter.md) | Routing offline dostarczany przez [aplikację BRouter](https://brouter.de/). | Dostępne tylko dla **Androida**. Pełny opis przeczytaj [tutaj](./brouter.md). |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | Routing online buduje trasę z zasobów serwerów online za pośrednictwem połączenia internetowego. | Dostępne tylko dla **Androida**. Możesz skonfigurować [routing online](./online-routing.md), aby zbudować trasę z różnych silników routingu online, takich jak [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX. |

- *[Routing samochodowy (Ciężarówka, Motocykl)](./car-based-routing.md)* - OsmAnd zapewnia instrukcje jazdy dla kierowców samochodów, ciężarówek i motocykli.
- *[Routing rowerowy (MTB)](./bicycle-based-routing.md)* - Routing rowerowy zapewnia wskazówki nawigacyjne specjalnie dla rowerzystów i entuzjastów MTB. Może być również używany przez kierowców motorowerów (skuterów).
- *[Routing pieszy](./pedestrian-routing.md)* - może być używany nie tylko do poruszania się po mieście, ale także podczas wędrówek.
- *[Routing motorowerowy](./moped-routing.md)* - opiera się na routingu rowerowym, choć ma swoje własne cechy.
- *[Routing transportu publicznego](./public-transport-navigation.md)* - może pomóc w podróżowaniu po mieście.
- *[Routing konny](./horse-routing.md)* - zapewnia jeźdźcom narzędzia potrzebne do planowania i cieszenia się jazdą konną.
- *[Routing narciarski](./ski-routing.md)* - pozwala użytkownikom planować i nawigować po trasach narciarskich i innych aktywnościach sportów zimowych za pomocą aplikacji mobilnej OsmAnd.
- *[Routing kolejowy](./train-routing.md)* - daje możliwość wykorzystania torów kolejowych do nawigacji.
- *[Routing łodzią](./boat-navigation.md)* - może być używany do budowania trasy na rzekach, kanałach, małych jeziorach i na otwartym morzu, ale tylko wtedy, gdy szlaki wodne są zaznaczone w OpenStreetMap.
- *[Routing w linii prostej](./straight-line-routing.md)* - zapewnia routing w linii prostej (lub nawigację "punkt-punkt"), który jest przeliczany, gdy zmienia się Twoja lokalizacja.
- *[Routing bezpośrednio do punktu](./direct-to-point-routing.md)* - zapewnia routing w linii prostej (lub nawigację "punkt-punkt"), który pozostaje stabilny przez całą nawigację w przeciwieństwie do routingu **w linii prostej** (przeliczanie trasy jest wyłączone).

## Dostosowywanie routingu offline {#customize-offline-routing}

Możesz również stworzyć swój **własny plik routing.xml** lub zmodyfikować domyślny **routing.xml** i użyć go do nawigacji (tylko dla zaawansowanych użytkowników OsmAnd).

- Skopiuj plik [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) na swoje urządzenie. Przeczytaj uważnie [informacje pomocy](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25). Jako przykład, zobacz plik [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) użytkownika OsmAnd.
- Po dokonaniu zmian, nowy plik *routing.xml* można dodać do OsmAnd, dotykając go i wybierając otwarcie go w aplikacji OsmAnd.
- Wybierz zmodyfikowany [typ nawigacji](../../navigation/guidance/navigation-settings.md#navigation-type) dla swojego profilu.

Więcej informacji na temat tej funkcji można znaleźć w [*Dokumentacji technicznej*](../../../technical/osmand-file-formats/osmand-routing-xml.md) oraz na [*stronie OsmAnd na GitHubie*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).

## Unikaj określonych dróg {#avoid-specific-roads}

:::caution
Funkcja unikania dróg jest globalna i wpływa na wszystkie **[typy routingu](#routing-types)** z wyjątkiem *[routingu online](../routing/online-routing.md)* i *[BRoutera](../routing/brouter.md)*.
:::

Istnieją dwa możliwe sposoby wyboru dróg do uniknięcia podczas obliczania trasy:

- Wybierz typ drogi w sekcji [Parametry trasy](../guidance/navigation-settings.md#route-parameters) w [Ustawieniach nawigacji](../guidance/navigation-settings.md). Opis tego ustawienia znajduje się w artykułach o ustawieniach [Typy routingu](#routing-types). Jako przykład, zobacz opis typu routingu [Samochód / Ciężarówka / Motocykl](../routing/car-based-routing.md#route-parameters---car).
- Możesz również wybrać konkretne drogi, które nie będą używane do routingu, korzystając z opcji *[Unikaj dróg](../../map/map-context-menu.md#avoid-road)* poprzez *menu kontekstowe mapy* lub korzystając z *[menu Unikaj dróg](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- Droga musi być zaznaczona przy maksymalnym powiększeniu, ponieważ OsmAnd może błędnie zinterpretować dotknięcie i zablokować, na przykład, niewłaściwą stronę drogi dwujezdniowej lub chodnik.
- Funkcja unikania określonych dróg działa nieprawidłowo z opcją [Nawigacja po śladzie](../setup/gpx-navigation.md) i nie wpływa na uproszczoną [Nawigację po znacznikach](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Menu Unikaj Dróg {#avoid-roads-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *Przycisk nawigacji → Ustawienia → Unikaj dróg...*

![Menu Unikaj dróg Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Przycisk nawigacji → Ustawienia → Unikaj dróg*

![Menu Unikaj dróg iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

W tym menu możesz anulować poprzedni wybór drogi, której należy unikać. Aby to zrobić, dotknij krzyżyka (Android) lub czerwonego **"-"** naprzeciwko drogi, której zamierzasz użyć do obliczenia trasy.

Używając opcji *Wybierz na mapie*, możesz kontynuować oznaczanie dróg jako nieprawidłowych do routingu na mapie OsmAnd.

Po wybraniu drogi do uniknięcia za pomocą *menu kontekstowego mapy* lub *menu Unikaj dróg*, lista dróg zostanie wyświetlona nad ekranem mapy.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Lista dróg do uniknięcia na mapie Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista dróg do uniknięcia na mapie iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>

## Eksport / Import {#export--import}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Eksport dróg do uniknięcia na mapie Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Eksport dróg do uniknięcia na mapie Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Eksport dróg do uniknięcia na mapie iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Eksport dróg do uniknięcia na mapie iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

W zależności od ustawień urządzenia i dostępnych aplikacji, cała lista dróg do uniknięcia lub tylko jedna z nich może zostać [wyeksportowana](../../personal/import-export.md#export) jako plik `.osf` do różnych lokalizacji. Wybierz drogi, które chcesz wyeksportować z sugerowanej listy.

Możesz [importować](../../personal/import-export.md#import) drogi do uniknięcia podczas obliczania trasy z innych źródeł w formacie pliku `.osf`. Można to również zrobić za pomocą opcji *Importuj* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). Możesz wybrać importowanie wszystkich danych lub tylko kilku dróg do uniknięcia (zaznaczając drogę na liście).

<Tabs groupId="operating-systems">

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

Opcja *Uwzględnij tymczasowe ograniczenia* pozwala uwzględnić tymczasowe ograniczenia drogowe podczas obliczania tras. Mogą to być na przykład roboty drogowe lub zamknięcia dróg z jakiegoś powodu (wypadek, remonty dróg, klęski żywiołowe). Włączenie tej opcji może pomóc uniknąć nieoczekiwanych objazdów lub opóźnień. Należy pamiętać, że czasami te informacje mogą być nieaktualne.
W OpenStreetMap informacje te są zazwyczaj oznaczane tagiem [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).

## Sekcja Rozwoju {#development-section}

**Sekcja Rozwoju** ustawień *Parametrów trasy* (*Menu → Ustawienia → profil aplikacji → Ustawienia nawigacji → Parametry trasy → Rozwój*) jest widoczna tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md). Obejmuje ona ustawienia takie jak *Typ routingu (Android) / Algorytm routingu (iOS), Aproksymacja GPX (tylko Android), Autozoom i dane OsmAnd Live (tylko Android)*. Szczegółowy opis znajduje się w artykule [Ustawienia nawigacji](../../navigation/guidance/navigation-settings.md#development-settings).

> *Ostatnia aktualizacja: lipiec 2024*