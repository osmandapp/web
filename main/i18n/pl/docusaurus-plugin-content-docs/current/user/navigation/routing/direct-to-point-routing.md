---
source-hash: 7bb36bac225a4637bd0fd319dba2e8fd27253ed4e7e1a35a1b7cda4be6a24614
sidebar_position: 9
title: Nawigacja bezpośrednia (Łódź)
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

Nawigacja bezpośrednia w OsmAnd to przydatna funkcja, która pozwala na nawigowanie bezpośrednio do określonego punktu na mapie bez konieczności podążania predefiniowaną trasą lub siecią dróg. Funkcja ta może być używana przez sterników łodzi, entuzjastów outdooru lub służby ratunkowe podczas operacji ratunkowych. Ogólnie rzecz biorąc, nawigacja bezpośrednia jest elastyczną i wszechstronną funkcją, którą można wykorzystać w różnych sytuacjach, w których tradycyjne metody nawigacji mogą nie być odpowiednie lub skuteczne.

![Typ nawigacji bezpośredniej Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Punkt na linii to wirtualny punkt, którego odległość do celu jest taka sama jak odległość od Twojej aktualnej lokalizacji, ale nie jest to rzut Twojej aktualnej lokalizacji na linię. Ułatwia to mierzenie postępu, a do uzyskania prawidłowej odległości można użyć narzędzia pomiarowego.

## Parametry trasy - Nawigacja bezpośrednia {#route-parameters---direct-to-point}

Typ nawigacji *bezpośredniej* nie jest powiązany z żadnym profilem i może być używany z różnymi profilami.
Ten typ nawigacji nie uwzględnia żadnych przeszkód ani barier, które mogą występować w terenie, takich jak góry, rzeki czy gęste lasy. Nie dostarcza również żadnych informacji o jakości terenu, poziomie trudności trasy ani żadnych innych istotnych czynnikach, które mogą wpływać na bezpieczeństwo lub wykonalność trasy (sekcja [Szczegóły trasy](../setup/route-details.md) jest pusta).

:::note
Korzystając z typów nawigacji bezpośredniej i łodzi, będziesz potrzebować [danych o izobatach](../../plugins/nautical-charts.md#nautical-map-style), które można włączyć i ustawić w *Konfiguruj mapę*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → dowolny profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Ustawienia nawigacji bezpośredniej](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → dowolny profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Ustawienia nawigacji bezpośredniej iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>

## Inne ustawienia nawigacji {#other-routing-settings}

- W sekcji [*Przelicz trasę*](../../navigation/guidance/navigation-settings.md#recalculate-route) w *Parametrach trasy* można włączyć i dostosować opcje przeliczania trasy. Domyślna wartość to 0 metrów odchylenia, co oznacza, że trasa nie jest przeliczana.

- W sekcji [*Rozwój*](../guidance/navigation-settings.md#development-settings) w *Parametrach trasy* można wypróbować nowe funkcje nawigacji, które są obecnie w fazie testów. Należy pamiętać, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).

- Ustawienie *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* w wersji OsmAnd na *iOS* znajduje się w *Ustawieniach nawigacji → Parametry trasy* (dla *Androida*, w *Parametrach pojazdu → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Te ustawienia można również ustawić dla nawigacji *bezpośredniej*. Służy do obliczania szacowanego czasu przybycia.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Właściwe skonfigurowanie ustawień pomoże uniknąć problemów podczas tworzenia trasy. Możesz wybrać najbardziej odpowiednią trasę w zależności od typu pojazdu i ograniczeń drogowych, a także obliczyć czas podróży.

> *Ostatnia aktualizacja: czerwiec 2024*