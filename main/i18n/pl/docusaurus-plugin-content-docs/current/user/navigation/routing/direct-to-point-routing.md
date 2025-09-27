---
source-hash: 13fd1af76a8741fd09464e167ec356fac8a95838f37bb43f0fc4715f11186d0d
sidebar_position: 9
title:  Wyznaczanie trasy prosto do punktu (Łódź)
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

Wyznaczanie trasy prosto do punktu w OsmAnd to przydatna funkcja, która pozwala na nawigację bezpośrednio do określonego punktu na mapie bez konieczności podążania predefiniowaną trasą lub siecią dróg. Funkcja ta może być używana przez sterników łodzi, entuzjastów outdooru lub służby ratownicze podczas akcji ratunkowych. Ogólnie rzecz biorąc, wyznaczanie trasy prosto do punktu jest elastyczną i wszechstronną funkcją, która może być używana w różnych sytuacjach, w których tradycyjne metody wyznaczania trasy mogą nie być odpowiednie lub skuteczne.

![Typ nawigacji prosto do punktu Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Punkt na linii to wirtualny punkt, którego odległość od celu jest taka sama jak odległość od bieżącej lokalizacji, ale nie jest to rzut bieżącej lokalizacji na linię. Ułatwia to pomiar postępu, a do uzyskania prawidłowej odległości można użyć narzędzia pomiarowego.


## Parametry trasy - Prosto do punktu {#route-parameters---direct-to-point}

Typ trasy *Prosto do punktu* nie jest powiązany z żadnym profilem i może być używany z różnymi profilami.
Ten typ wyznaczania trasy nie uwzględnia żadnych przeszkód ani barier, które mogą występować w terenie, takich jak góry, rzeki czy gęste lasy. Nie dostarcza również żadnych informacji o jakości terenu, poziomie trudności trasy ani żadnych innych istotnych czynników, które mogą mieć wpływ na bezpieczeństwo lub wykonalność trasy (sekcja [Szczegóły trasy](../setup/route-details.md) jest pusta).

:::note
Podczas korzystania z typów nawigacji Prosto do punktu i Łódź potrzebne będą [dane o izobatach](../../plugins/nautical-charts.md#nautical-map-style), które można włączyć i ustawić w menu *Konfiguruj mapę*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → dowolny profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Ustawienia wyznaczania trasy prosto do punktu](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → dowolny profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Ustawienia wyznaczania trasy prosto do punktu iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>