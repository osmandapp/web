---
source-hash: ad9c1155352c7c8fc6705861acfb7f006ba101d59528a256c0205ba34b62fd80
sidebar_position: 11
title:  Online-Routenführung
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

Die Online-Routenführung ist ein leistungsstarkes Werkzeug, das Benutzern helfen kann, Zeit zu sparen und effizienter zu navigieren. Es ist jedoch wichtig zu beachten, dass die Online-Routenführung eine Internetverbindung erfordert und in Gebieten mit schlechter Netzabdeckung möglicherweise nicht verfügbar ist. Darüber hinaus sollten Benutzer immer Vorsicht walten lassen und ihr eigenes Urteilsvermögen einsetzen, wenn sie einer von einem Online-Routendienst vorgeschlagenen Route folgen.

![Online-Routenführung Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Routenparameter - Online-Routenführung {#route-parameters---online-routing}

Die *Online-Routenführung* kann im Abschnitt [Navigationstyp](../guidance/navigation-settings.md#overview) der Navigationseinstellungen des ausgewählten *Profils* aktiviert werden. In OsmAnd gibt es zwei vordefinierte *Online-Routing-Engines* ([ZLZK](https://zlzk.biz/) und [OSM DE](https://routing.openstreetmap.de)), die drei *Online-Routenführungs*-Typen anbieten: *Fahrrad, Auto und Zu Fuß*.

:::note
Die Online-Routenführungstypen sind für die Profile *Fahren, Radfahren und Gehen* konzipiert, können aber auch mit anderen OsmAnd-Profilen (LKW, Motorrad, Skifahren, Reiten) verwendet werden. Sie werden "wie besehen" zur Verfügung gestellt, sodass Sie sie nicht mit verschiedenen Navigationsoptionen an Ihre Bedürfnisse anpassen können.
:::

### Benutzerdefinierte Online-Routenführung {#custom-online-routing}

Zusätzlich zu den voreingestellten Online-Routenführungstypen können Sie andere Online-Routenführungsmechanismen konfigurieren.
Tippen Sie auf die Schaltfläche **+ Online-Routing-Engine hinzufügen** und wählen Sie einen der vorgeschlagenen Online-Routenführungstypen ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Wählen Sie das entsprechende Fahrzeug aus und tippen Sie auf *Test-Routing*, bevor Sie Ihre Änderungen speichern.

![Benutzerdefinierte Online-Routenführung Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Benutzerdefinierte Online-Routenführung Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
Informationen zu den Unterschieden zwischen den Online-Routing-Engines finden Sie im [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Benutzerdefinierte Online-GPX-Routenführung {#custom-online-gpx-routing}

Der Online-Server erstellt eine Route anhand Ihres Start- und Zielpunkts. Nachdem der Track vom Server empfangen wurde, erstellt OsmAnd eine Route mit der Funktion *[An Straßen ausrichten](../setup/gpx-navigation.md#attach-to-the-roads)*. So werden alle benötigten Routeninformationen aus unseren Offline-Karten entnommen und eine präzisere Führung entlang der Route ermöglicht.

![Benutzerdefinierte GPX-Routenführung Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Benutzerdefinierte GPX-Routenführung Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Einstellung für Online-Routenführung {#online-routing-setting}

Wenn die Online-Routenführung für die Navigation ausgewählt ist, erscheint eine zusätzliche Option in den Einstellungen.

![Einstellungen Online-Routenführung Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Ermöglicht die Verwendung der Offline-Routenführung von OsmAnd, wenn in den Navigationseinstellungen die Online-Routenführung ausgewählt ist. Diese Option kann hilfreich sein, wenn eine Route bereits online erstellt wurde, es dann aber zu einer Abweichung von der Route kam und gleichzeitig die Internetverbindung unterbrochen wurde. In diesem Fall wird die Offline-Routenführung verwendet, um zur zuvor online berechneten Route zurückzukehren.