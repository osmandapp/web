---
source-hash: 3633198fddb7fe35a05678692319490fc58e0d27eeeb3150a2ae252eba8bd136
sidebar_position: 4
title: Routing dla motorowerów
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

*Routing dla motorowerów* umożliwia kierowcom zbudowanie optymalnej (najszybszej) trasy, uwzględniającej specyfikę prowadzenia pojazdu, takiego jak motorower lub skuter. Proces routingu uwzględnia różne czynniki zapewniające bezpieczne, komfortowe i zgodne z prawem poruszanie się po drogach lub ścieżkach rowerowych.

:::note
Domyślnie *Profil motoroweru* jest wyłączony. Aby użyć tego profilu do routingu, należy go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Parametry trasy - motorower {#route-parameters---moped}

*Routing dla motorowerów* można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../guidance/navigation-settings.ad#route-parameters) w ustawieniach nawigacji.

Ustawienia routingu dla motorowerów są bardzo proste i składają się z zaledwie kilku opcji.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia routingu dla motorowerów Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia routingu dla motorowerów iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Wybierz drogi, których chcesz unikać podczas nawigacji. </summary>![Unikaj dróg Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details> | Możesz [wybrać drogę na mapie](../../map/map-context-menu/#avoid-road) lub wybrać typ(y) drogi z listy: <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (rodzaj transportu wodnego, który przewozi pojazdy przez akweny)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Ograniczenia dostępu prywatnego zostaną zignorowane podczas obliczania trasy. | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* jest używany w OSM do opisywania ograniczeń w korzystaniu z autostrad i innych dróg transportowych, a także budynków, wejść, udogodnień i obiektów rekreacyjnych. |


## Inne ustawienia routingu {#other-routing-settings}

- Algorytm routingu może również uwzględniać tymczasowe ograniczenia określone w OpenStreetMap. Można to zrobić za pomocą opcji *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Należy pamiętać, że w niektórych przypadkach informacje z OSM mogą być nieaktualne.

- W sekcji [*Przelicz trasę*](../../navigation/guidance/navigation-settings.md#recalculate-route) w *Parametrach trasy* można włączyć i dostosować opcje przeliczania trasy.

- W sekcji [*Rozwój*](../guidance/navigation-settings.md#development-settings) w *Parametrach trasy* można wypróbować nowe funkcje routingu, które są obecnie w fazie testów. Należy pamiętać, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).

- Ustawienie *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* w wersji OsmAnd na *iOS* znajduje się w *Ustawieniach nawigacji → Parametry trasy* (dla *Androida*, w *Parametrach pojazdu → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). To ustawienie jest używane na nieznanych drogach bez ograniczeń prędkości. Najczęściej ma to miejsce podczas nawigacji po ścieżce lub trasie online. Musi być ustawione zgodnie z parametrami pojazdu.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Właściwa konfiguracja ustawień pomoże uniknąć problemów podczas tworzenia trasy. Możesz wybrać najbardziej odpowiednią trasę w zależności od typu pojazdu i ograniczeń drogowych, a także obliczyć czas podróży.

> *Ostatnia aktualizacja: czerwiec 2024*