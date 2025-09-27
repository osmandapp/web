---
source-hash: 2428f76d4d2b174f4096091771998583d1804e3fbc62cf63cf7e6bf40e95cc8c
sidebar_position: 6
title:  Wyznaczanie tras narciarskich
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
Wyznaczanie tras narciarskich i profil narciarski są dostępne tylko po aktywacji [wtyczki Widok mapy narciarskiej](../../plugins/ski-maps.md).
:::

*Wyznaczanie tras narciarskich* może być szczególnie przydatne dla narciarzy backcountry, skialpinistów i innych entuzjastów sportów zimowych, którzy chcą odkrywać nowe tereny i planować swoje wycieczki z wyprzedzeniem. Dzięki *wyznaczaniu tras narciarskich* użytkownicy OsmAnd mogą planować trasy i bezpiecznie nawigować, ciesząc się pięknem zimowych krajobrazów.

*Wyznaczanie tras narciarskich* można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../guidance/navigation-settings.md#route-parameters) w ustawieniach nawigacji.

![Trasy na mapie - stoki narciarskie](@site/static/img/navigation/routing/ski_routing_overview.png)


## Parametry trasy - Narty {#route-parameters---ski}

:::note
Domyślnie *profil narciarski* jest wyłączony. Aby używać tego profilu do wyznaczania tras, należy go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Ustawienia *wyznaczania tras narciarskich* pozwalają użytkownikom planować trasy poprzez wybór pożądanego poziomu trudności i rodzaju terenu, który chcą eksplorować. Dostępne są różne opcje bezpiecznego, wygodnego i przyjemnego poruszania się po trasach lub podczas freeride'u.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia tras narciarskich Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Ustawienia tras narciarskich Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia tras narciarskich iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parametr | Pozwala na użycie do wyznaczania tras | Uwaga |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> |  `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type`  |
|*<Translate android="true" ids="app_mode_ski_touring"/>* |   <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Zalecana [trasa skiturowa](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) lub obszar, który jest powszechnie używany przez wielu narciarzy w sezonie do podejścia i zjazdu w terenie. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* |  <Translate android="true" ids="routing_attr_allow_advanced_description"/>  | Do wyznaczania tras będą dozwolone [trudniejsze trasy](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty). |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* |   <details><summary> Wybierz jedną z opcji dla narciarstwa freeride.  </summary>![Off piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |   |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | Korzystanie z [wyciągów narciarskich](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) zostanie włączone |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) |   <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* |   <Translate android="true" ids="routing_attr_allow_classic_only_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* |   <Translate android="true" ids="routing_attr_allow_expert_description"/>|  |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [Sanki](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) to mniejsze pojazdy ciągnięte przez człowieka lub napędzane wyłącznie grawitacją. Po włączeniu tej opcji [trasy saneczkowe](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) będą używane do wyznaczania tras narciarskich |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* |   <Translate android="true" ids="routing_attr_allow_intermediate_description"/>|  |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* |  <details><summary>  <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Off piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |  |