---
source-hash: 7f81c110562bd27c6dfc6fe07b890ebf5cb1758a6fee93796173d681f752db77
sidebar_position: 6
title: Wyznaczanie tras narciarskich
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

:::note
Wyznaczanie tras narciarskich i profil narciarski są dostępne tylko po aktywowaniu [wtyczki widoku mapy narciarskiej](../../plugins/ski-maps.md).
:::

*Wyznaczanie tras narciarskich* może być szczególnie przydatne dla narciarzy backcountry, skialpinistów i innych entuzjastów sportów zimowych, którzy chcą odkrywać nowe obszary i planować swoje wycieczki z wyprzedzeniem. Dzięki *wyznaczaniu tras narciarskich* użytkownicy OsmAnd mogą planować trasy i bezpiecznie nawigować, ciesząc się pięknem zimowych krajobrazów.

*Wyznaczanie tras narciarskich* można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../guidance/navigation-settings.md#route-parameters) w ustawieniach nawigacji.

![Trasy map - stoki narciarskie](@site/static/img/navigation/routing/ski_routing_overview.png)


## Parametry trasy - narty {#route-parameters---ski}

:::note
Domyślnie *profil narciarski* jest dezaktywowany. Aby użyć tego profilu do wyznaczania tras, należy go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Ustawienia *wyznaczania tras narciarskich* pozwalają użytkownikom planować trasy, wybierając pożądany poziom trudności i rodzaj terenu, który chcą eksplorować. Istnieją różne opcje bezpiecznego, wygodnego i przyjemnego poruszania się po stokach lub podczas freeride'u.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia wyznaczania tras narciarskich Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Ustawienia wyznaczania tras narciarskich Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia wyznaczania tras narciarskich iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parametr | Pozwala używać do wyznaczania tras | Uwaga |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Zalecana [trasa skiturowa](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) lub obszar, który jest ogólnie używany przez wielu narciarzy w sezonie w celu nordyckiego podejścia i zjazdu w backcountry. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Bardziej [trudne trasy](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) będą dozwolone do wyznaczania tras. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Wybierz jedną z opcji dla narciarstwa freeride. </summary>![Poza trasą Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | Używanie [wyciągów narciarskich](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) zostanie włączone |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [Sanki](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) to mniejsze pojazdy, które są ciągnięte przez człowieka lub napędzane tylko grawitacją. Po włączeniu, [trasy saneczkowe](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) będą używane do wyznaczania tras narciarskich |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Poza trasą Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |


## Inne ustawienia wyznaczania tras {#other-routing-settings}

- Algorytm wyznaczania tras może również uwzględniać tymczasowe ograniczenia określone w OpenStreetMap. Można to zrobić za pomocą opcji *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Należy pamiętać, że w niektórych przypadkach informacje z OSM mogą być nieaktualne.

- W sekcji [*Przelicz trasę*](../../navigation/guidance/navigation-settings.md#recalculate-route) w *Parametrach trasy* można włączyć i dostosować opcje przeliczania trasy.

- W sekcji [*Rozwój*](../guidance/navigation-settings.md#development-settings) w *Parametrach trasy* można wypróbować nowe funkcje wyznaczania tras, które są obecnie w fazie testów. Należy pamiętać, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).

- Ustawienie *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* w wersji OsmAnd na *iOS* znajduje się w *Ustawieniach nawigacji → Parametry trasy* (dla *Androida*, w *Parametrach pojazdu → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). To ustawienie jest używane na nieznanych drogach bez ograniczeń prędkości. Najczęściej ma to miejsce podczas nawigacji po ścieżce lub trasie online. Musi być ustawione zgodnie z parametrami Twojego pojazdu.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Prawidłowe skonfigurowanie ustawień pomoże uniknąć problemów podczas tworzenia trasy. Możesz wybrać najbardziej odpowiednią trasę w zależności od typu pojazdu i ograniczeń drogowych, a także obliczyć czas podróży.

> *Ostatnia aktualizacja: czerwiec 2024*