---
source-hash: 4f96a8e9fe2039b52000ce52f1a94177338192fe1d90ceb5161a41d19e94cfea
sidebar_position: 11
title: Online-Routing
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

<InfoAndroidOnly />

Online-Routing ist ein leistungsfähiges Werkzeug, das Benutzern helfen kann, Zeit zu sparen und effizienter zu navigieren. Es ist jedoch wichtig zu beachten, dass Online-Routing auf eine Internetverbindung angewiesen ist und in Gebieten mit schlechter Netzabdeckung möglicherweise nicht verfügbar ist. Darüber hinaus sollten Benutzer immer Vorsicht walten lassen und ihr Urteilsvermögen einsetzen, wenn sie einer von einem Online-Routing-Dienst vorgeschlagenen Route folgen.

![Online-Routing Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Routenparameter - Online-Routing {#route-parameters---online-routing}

*Online-Routing* kann im Abschnitt [Navigationstyp](../guidance/navigation-settings.md#overview) der Navigationseinstellungen des ausgewählten *Profils* aktiviert werden. In OsmAnd gibt es zwei vordefinierte *Online-Routing-Engines* ([ZLZK](https://zlzk.biz/) und [OSM DE](https://routing.openstreetmap.de)), die drei *Online-Routing*-Typen anbieten: *Fahrrad, Auto und Zu Fuß*.

:::note
Online-Routing-Typen sind für die Profile *Fahren, Radfahren und Gehen* konzipiert, obwohl sie auch mit anderen OsmAnd-Profilen (LKW, Motorrad, Skifahren, Reiten) verwendet werden können. Sie werden "wie besehen" bereitgestellt, sodass Sie sie nicht mit verschiedenen Navigationsoptionen an Ihre Bedürfnisse anpassen können.
:::

### Benutzerdefiniertes Online-Routing {#custom-online-routing}

Zusätzlich zu den voreingestellten Online-Routing-Typen können Sie weitere Online-Routing-Mechanismen konfigurieren.
Tippen Sie auf die Schaltfläche **+ Online-Routing-Engine hinzufügen** und wählen Sie einen der vorgeschlagenen Online-Routing-Typen ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Wählen Sie das entsprechende Fahrzeug aus und tippen Sie auf *Routing testen*, bevor Sie Ihre Änderungen speichern.

![Benutzerdefiniertes Online-Routing Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Benutzerdefiniertes Online-Routing Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
Sie können die Unterschiede zwischen Online-Routing-Engines in [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers) nachlesen.
:::

### Benutzerdefiniertes Online-GPX-Routing {#custom-online-gpx-routing}

Der Online-Server erstellt eine Route anhand Ihres Startpunkts und Ihres Ziels. Nach Erhalt der Strecke vom Server erstellt OsmAnd eine Route unter Verwendung der Funktion *[An Straßen anbinden](../setup/gpx-navigation.md#attach-to-the-roads)*. So werden alle benötigten Routing-Informationen aus unseren Offline-Karten entnommen, und es wird eine präzisere Führung entlang der Route bereitgestellt.

![Benutzerdefiniertes GPX-Routing Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Benutzerdefiniertes GPX-Routing Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Online-Routing-Einstellung {#online-routing-setting}

Wenn Online-Routing für die Navigation ausgewählt ist, erscheint eine zusätzliche Option in den Einstellungen.

![Einstellungen Online-Routing Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Ermöglicht die Verwendung des OsmAnd Offline-Routings, wenn Online-Routing in den Navigationseinstellungen ausgewählt ist. Diese Option kann hilfreich sein, wenn eine Route bereits online erstellt wurde, es aber dann zu einer Abweichung von der Route kam und gleichzeitig die Internetverbindung verloren ging. In diesem Fall wird das Offline-Routing verwendet, um zur zuvor online berechneten Route zurückzukehren.

> *Zuletzt aktualisiert: Juni 2024*