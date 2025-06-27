---
source-hash: 7e3135f97cb0856e50ca46f17778ece558a18d14044f072d10d8739db6285192
sidebar_position: 10
title:  Wyznaczanie trasy w linii prostej (samolot)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>


## Przegląd {#overview}

W przeciwieństwie do tradycyjnych algorytmów wyznaczania tras, które wykorzystują drogi, szlaki lub predefiniowane trasy, wyznaczanie trasy w linii prostej oblicza najkrótszą odległość między dwoma punktami na mapie jako linię prostą. Funkcja ta może być przydatna dla aktywnych turystów, którzy chcą wyznaczać trasy z dala od szlaków lub eksplorować odległe obszary, gdzie tradycyjne trasy mogą być niedostępne. Dla pilotów lekkich samolotów i kapitanów statków, użycie *typu trasy w linii prostej* może być bardzo przydatne w nawigacji.

<!-- ![Przykład nawigacji w linii prostej Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Przykład nawigacji w linii prostej Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png) -->

- *Wyznaczanie trasy w linii prostej* nie uwzględnia żadnych przeszkód ani barier, które mogą występować w terenie, takich jak góry, rzeki czy gęste lasy.
- Nie dostarcza żadnych informacji o jakości terenu, poziomie trudności trasy ani żadnych innych istotnych czynnikach, które mogą wpływać na bezpieczeństwo lub wykonalność trasy (sekcja [Szczegóły trasy](../setup/route-details.md) jest pusta).

![Typ nawigacji w linii prostej Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Parametry trasy - Linia prosta {#route-parameters---straight-line}

:::note
Wyznaczanie trasy w linii prostej jest powiązane z *profilem samolotu*. Domyślnie ten profil jest dezaktywowany. Aby użyć tego profilu do wyznaczania tras, musisz go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

*Wyznaczanie trasy w linii prostej* można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../guidance/navigation-settings.md#route-parameters) w ustawieniach nawigacji.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ustawienia wyznaczania trasy w linii prostej Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia wyznaczania trasy w linii prostej iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* | <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/> </summary>![Ponowne przeliczanie linii prostej Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details> | Gdy kąt między obliczoną trasą a rzeczywistą geolokalizacją jest większy niż ustawiony przez Ciebie, zostanie zbudowana najkrótsza ścieżka z Twojej bieżącej pozycji do obliczonej trasy. Innymi słowy, OsmAnd obliczy dodatkowy segment trasy do wcześniej obliczonej trasy. |


## Inne ustawienia wyznaczania tras {#other-routing-settings}

- W sekcji [*Przelicz trasę*](../../navigation/guidance/navigation-settings.md#recalculate-route) w *Parametrach trasy*, odległość, przy której trasa zostanie przeliczona dla *Wyznaczania trasy w linii prostej*, jest domyślnie ustawiona na 500 metrów.

- W sekcji [*Rozwój*](../guidance/navigation-settings.md#development-settings) w *Parametrach trasy* możesz wypróbować nowe funkcje wyznaczania tras, które są obecnie w fazie testów. Pamiętaj, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).

- Ustawienie *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* w wersji *iOS* OsmAnd znajduje się w *Ustawieniach nawigacji → Parametry trasy* (dla *Androida*, w *Parametrach pojazdu → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ustawienia te można również ustawić dla wyznaczania trasy *Bezpośrednio do punktu*. Służy do obliczania szacowanego czasu przybycia.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Właściwa konfiguracja ustawień pomoże uniknąć problemów podczas tworzenia trasy. Możesz wybrać najbardziej odpowiednią trasę w zależności od typu pojazdu i ograniczeń drogowych, a także obliczyć czas podróży.

> *Ostatnia aktualizacja: czerwiec 2024*