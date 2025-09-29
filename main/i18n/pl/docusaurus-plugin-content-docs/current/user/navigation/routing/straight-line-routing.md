---
source-hash: 1ca5ebf392132069b1b5beabb8bfe492c629807a3258b756d15d406a2613de59
sidebar_position: 10
title:  Prowadzenie po linii prostej (Samolot)
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

W przeciwieństwie do tradycyjnych algorytmów wyznaczania tras, które wykorzystują drogi, szlaki lub predefiniowane trasy, prowadzenie po linii prostej oblicza najkrótszą odległość między dwoma punktami na mapie jako linię prostą. Ta funkcja może być przydatna dla aktywnych turystów, którzy chcą wyznaczać trasy z dala od szlaków lub odkrywać odległe obszary, gdzie tradycyjne trasy mogą nie być dostępne. Dla pilotów lekkich samolotów i kapitanów statków korzystanie z *Typu prowadzenia po linii prostej* może być bardzo przydatne w nawigacji.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- Prowadzenie po *linii prostej* nie uwzględnia żadnych przeszkód ani barier, które mogą występować w terenie, takich jak góry, rzeki czy gęste lasy.
- Nie dostarcza żadnych informacji o jakości terenu, poziomie trudności trasy ani żadnych innych istotnych czynnikach, które mogą wpływać na bezpieczeństwo lub wykonalność trasy (sekcja [Szczegóły trasy](../setup/route-details.md) jest pusta).

![Typ nawigacji po linii prostej Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Parametry trasy - Linia prosta {#route-parameters---straight-line}

:::note
Prowadzenie po linii prostej jest powiązane z profilem *Samolot*. Domyślnie ten profil jest wyłączony. Aby użyć tego profilu do wyznaczania tras, należy go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Prowadzenie po *linii prostej* można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../guidance/navigation-settings.md#route-parameters) w ustawieniach nawigacji.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia prowadzenia po linii prostej Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia prowadzenia po linii prostej iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Przeliczanie trasy po linii prostej Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | Gdy kąt między obliczoną trasą a rzeczywistą geolokalizacją jest większy niż ustawiony przez Ciebie, zostanie zbudowana najkrótsza ścieżka z Twojej bieżącej pozycji do obliczonej trasy. Innymi słowy, OsmAnd obliczy dodatkowy odcinek trasy do wcześniej obliczonej trasy. |