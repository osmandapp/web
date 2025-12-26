---
source-hash: 75f7c0d57899f1fdc282afb4724e5f3f76160e359fd1c402d5453ff85ce761c8
sidebar_position: 4
title:  Moped-Routing
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


## Übersicht {#overview}

*Moped-Routing* ermöglicht es Fahrern, eine optimale (schnellste) Route zu erstellen, die die Besonderheiten des Fahrens eines Fahrzeugs wie eines Mopeds oder Rollers berücksichtigt. Der Routenplanungsprozess berücksichtigt verschiedene Faktoren für eine sichere, komfortable und legale Fortbewegung auf Straßen oder Radwegen. Das Moped-Profil vermeidet Hochgeschwindigkeitsstraßen: Insbesondere werden Autobahnen und Straßen, auf denen die Geschwindigkeitsbegrenzung höher als 80 km/h beträgt, bei der Routenberechnung nicht genutzt.

:::note
Standardmäßig ist das *Moped-Profil* deaktiviert. Um dieses Profil für das Routing zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* einschalten.
:::


## Routenparameter - Moped {#route-parameters---moped}

Das *Moped-Routing* kann entsprechend Ihren Bedürfnissen im Abschnitt [Routenparameter-Abschnitt](../guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen konfiguriert werden.  

Die Routeneinstellungen für Mopeds sind sehr einfach und bestehen aus nur wenigen Optionen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Moped-Routeneinstellungen Android](@site/static/img/navigation/routing/moped_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Moped-Routeneinstellungen iOS](@site/static/img/navigation/routing/moped_routing_new_ios.png)  

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wählen Sie Straßen aus, die Sie während der Navigation vermeiden möchten.  </summary>![Straßen vermeiden Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | Sie können entweder [eine Straße auf der Karte auswählen](../../map/map-context-menu/#avoid-road) oder Straßentyp(en) aus der Liste wählen:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (eine Art von Wassertransport, der Fahrzeuge über Gewässer befördert)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private Zugangsbeschränkungen werden bei der Routenberechnung ignoriert.  | Das Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wird in OSM verwendet, um Beschränkungen für die Nutzung von Straßen und anderen Verkehrswegen sowie von Gebäuden, Eingängen, Einrichtungen und Freizeitobjekten zu beschreiben.   |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Berücksichtigt temporäre Einschränkungen aus OpenStreetMap bei der Routenberechnung (z. B. saisonale Schließungen oder Baustellen).  | OSM-Daten können veraltet sein, sodass einige temporäre Einschränkungen zum Zeitpunkt der Navigation nicht mehr gültig sein könnten.   |
