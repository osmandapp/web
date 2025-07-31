---
source-hash: 5622b3c06a619b7597895ee507b9910943c93a7d5ec31ddecd00215481e51e29
sidebar_position: 7
title:  Wyznaczanie trasy dla pociągu
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

:::note
Domyślnie *Profil pociągu* jest wyłączony. Aby użyć tego profilu do wyznaczania tras, należy go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

*Wyznaczanie trasy dla pociągu* w OsmAnd umożliwia użytkownikom korzystanie z linii kolejowych do nawigacji, tak jakby prowadzili pociąg jak samochód. Ta opcja może być przydatna, na przykład, podczas wędrówek, gdy nie ma innych dostępnych dróg. W innych przypadkach lepiej jest użyć *[Wyznaczania trasy transportem publicznym](./public-transport-navigation.md)*.

![Transport tramwajowy na mapie](@site/static/img/navigation/routing/train_routing_overview.png)


## Parametry trasy — pociąg {#route-parameters---train}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia wyznaczania trasy dla pociągu Android](@site/static/img/navigation/routing/train_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia wyznaczania trasy dla pociągu iOS](@site/static/img/navigation/routing/train_routing_ios.png)

</TabItem>

</Tabs>

*Wyznaczanie trasy dla pociągu* można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../guidance/navigation-settings.md#route-parameters) w ustawieniach nawigacji.


## Inne ustawienia wyznaczania trasy {#other-routing-settings}

- Algorytm wyznaczania trasy może również uwzględniać tymczasowe ograniczenia określone w OpenStreetMap. Można to zrobić za pomocą opcji *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Należy pamiętać, że w niektórych przypadkach informacje z OSM mogą być nieaktualne.

- W sekcji [*Przelicz trasę*](../../navigation/guidance/navigation-settings.md#recalculate-route) w *Parametrach trasy* można włączyć i dostosować opcje przeliczania trasy.

- W sekcji [*Rozwój*](../guidance/navigation-settings.md#development-settings) w *Parametrach trasy* można wypróbować nowe funkcje wyznaczania trasy, które są obecnie w fazie testów. Należy pamiętać, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).

- Ustawienie *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* w wersji OsmAnd na *iOS* znajduje się w *Ustawieniach nawigacji → Parametry trasy* (dla *Androida*, w *Parametrach pojazdu → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Te ustawienia można również ustawić dla wyznaczania trasy *Bezpośrednio do punktu*. Służy do obliczania szacowanego czasu przybycia.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Właściwe skonfigurowanie ustawień pomoże uniknąć problemów podczas tworzenia trasy. Możesz wybrać najbardziej odpowiednią trasę w zależności od typu pojazdu i ograniczeń drogowych, a także obliczyć czas podróży.

> *Ostatnia aktualizacja: czerwiec 2024*