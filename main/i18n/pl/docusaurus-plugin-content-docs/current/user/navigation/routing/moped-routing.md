---
source-hash: 75f7c0d57899f1fdc282afb4724e5f3f76160e359fd1c402d5453ff85ce761c8
sidebar_position: 4
title:  Wyznaczanie trasy dla motoroweru
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

*Wyznaczanie trasy dla motoroweru* pozwala kierowcom na zbudowanie optymalnej (najszybszej) trasy, uwzględniając specyfikę prowadzenia pojazdu takiego jak motorower czy skuter. Proces wyznaczania trasy bierze pod uwagę różne czynniki zapewniające bezpieczne, wygodne i zgodne z prawem poruszanie się po drogach lub ścieżkach rowerowych. Profil motoroweru unika dróg o wysokiej prędkości: w szczególności nie korzysta z autostrad i dróg, gdzie ograniczenie prędkości jest wyższe niż 80 km/h podczas obliczania trasy.

:::note
Domyślnie *Profil motoroweru* jest wyłączony. Aby używać tego profilu do wyznaczania tras, należy go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

## Parametry trasy - Motorower {#route-parameters---moped}

*Wyznaczanie trasy dla motoroweru* można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../guidance/navigation-settings.md#route-parameters) w ustawieniach Nawigacji.  

Ustawienia wyznaczania trasy dla motoroweru są bardzo proste i składają się z zaledwie kilku opcji.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ustawienia wyznaczania trasy dla motoroweru Android](@site/static/img/navigation/routing/moped_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia wyznaczania trasy dla motoroweru iOS](@site/static/img/navigation/routing/moped_routing_new_ios.png)  

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wybierz drogi, których chcesz unikać podczas nawigacji.  </summary>![Unikaj dróg Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | Możesz [wybrać drogę na mapie](../../map/map-context-menu/#avoid-road) lub wybrać typ(y) dróg z listy:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (rodzaj transportu wodnego, który przewozi pojazdy przez zbiorniki wodne)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Ograniczenia dostępu prywatnego będą ignorowane podczas obliczania trasy.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* jest używany w OSM do opisywania ograniczeń w korzystaniu z autostrad i innych szlaków transportowych, a także budynków, wejść, udogodnień i obiektów rekreacyjnych.   |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Bierze pod uwagę tymczasowe ograniczenia z OpenStreetMap podczas obliczania trasy (na przykład, sezonowe zamknięcia lub prace budowlane).  | Dane OSM mogą być nieaktualne, więc niektóre tymczasowe ograniczenia mogą nie być już ważne w momencie nawigacji.   |