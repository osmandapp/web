---
source-hash: c08c6419ce4eb37eaeeedc1186f95e9b81ac6219dcfadc6455d0a16f81b7bdd4
sidebar_position: 10
title:  Öffentlicher Nahverkehr
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Übersicht {#overview}

Der öffentliche Nahverkehr ist eine zusätzliche Ebene, die es Ihnen ermöglicht, ÖPNV-Routen und -Haltestellen auf der Karte anzuzeigen, detaillierte Informationen darüber abzurufen und zu navigieren.

## Haltestellen (Ebene) {#transport-stops-layer}

Ebene "Öffentlicher Nahverkehr" aktivieren/deaktivieren:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Ebene Öffentlicher Nahverkehr Android](@site/static/img/map/pt_layer_android.png) ![Ebene Öffentlicher Nahverkehr iOS](@site/static/img/map/pt_layer_ios.png)

Wählen Sie eine oder mehrere ÖPNV-Kategorien zur Anzeige aus:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[Lesen Sie mehr](../map/vector-maps.md#transport) darüber, wie der öffentliche Nahverkehr auf der Karte dargestellt wird.


## ÖPNV-Routen (Kontextmenü) {#transport-routes-context-menu}

![Menü ÖPNV-Route Android](@site/static/img/map/pt_routemenu_android.png) ![Menü ÖPNV-Route iOS](@site/static/img/map/pt_routemenu_ios.png)

Um das ÖPNV-Menü zu öffnen, können Sie auf das Verkehrsmittelsymbol tippen. Es zeigt an:

- Farbige Schilder des öffentlichen Nahverkehrs (**anklickbar**)
- [Liste der Routen](#routes), die an dieser Haltestelle oder in der Nähe (innerhalb von 150 m) halten
- Name der Haltestelle und andere [Details](#transport-stop-details)

### Details zur Haltestelle {#transport-stop-details}

![Details Menü ÖPNV-Route Android](@site/static/img/map/pt_routemenu_details_android.png) ![Details Menü ÖPNV-Route iOS](@site/static/img/map/pt_routemenu_details_ios.png)

Eine Haltestelle des öffentlichen Nahverkehrs bietet im Vergleich zum Standardmenü für [OpenStreetMap-Objekte](../map/map-context-menu.md#details) zusätzliche Details:

- Sitzbank vorhanden
- Überdachung vorhanden
- Rollstuhlgerecht
- Name des Betreibers

**Hinweis**: Sie können Haltestellen nach bestimmten Kriterien filtern. Erweitern Sie zum Beispiel und tippen Sie auf "Sitzbank" / "Ja", um eine Liste der Haltestellen mit Sitzbänken anzuzeigen. Diese können auch [auf der Karte angezeigt werden](../map/point-layers-on-map.md#points-of-interest-pois).


### Routen {#routes}

![Routen des öffentlichen Nahverkehrs Android](@site/static/img/map/pt_routes_android.png) ![Routen des öffentlichen Nahverkehrs iOS](@site/static/img/map/pt_routes_ios.png)

ÖPNV-Routen sind alle Routen des öffentlichen Nahverkehrs, die über die ausgewählte Haltestelle und nahegelegene Routen (innerhalb von 150 m) führen. Die Routeninformationen stammen aus [OpenStreetMap-Daten](https://wiki.openstreetmap.org/wiki/Public_transport), wie z.B. Referenz, Name, Farbe und Typ.

**Farbe des Schildes**:

- U-Bahn - eigene Linienfarbe
- Eisenbahn - braun
- Bus und andere - rot
- Straßenbahn - blau
- Trolleybus - lila

### Route durchsuchen {#browse-route}

![Liste der ÖPNV-Routen Android](@site/static/img/map/pt_route_list_android.png)  ![Liste der ÖPNV-Routen Android](@site/static/img/map/pt_route_list_ios.png)

Sie können das Menü "Route durchsuchen" aufrufen, indem Sie **auf ein Schild klicken** oder **eine Route aus der Routenliste auswählen**. Danach können Sie zwischen den Haltestellen wechseln, indem Sie auf '<Translate android="true" ids="shared_string_previous"/>' und '<Translate android="true" ids="shared_string_next"/>' klicken. Die Haltestelleninformationen werden im Menü aktualisiert und die Haltestelle wird auf der Karte angezeigt.

Sie können die vollständige Liste der Haltestellen sehen, indem Sie auf <Translate android="true" ids="rendering_category_details"/> klicken. Die aktuell ausgewählte Haltestelle ist in der Routenliste mit einem "Standort"-Symbol markiert.

> **HINWEIS**: *Wenn Sie auf die Schaltfläche <Translate android="true" ids="get_directions"/> tippen, erhalten Sie eine Route von Ihrem aktuellen Standort zur ausgewählten Haltestelle des öffentlichen Nahverkehrs.*


## Verwandte Artikel {#related-articles}

- [Vektorkarten](../map/vector-maps.md)
- [Navigation mit öffentlichen Verkehrsmitteln](../navigation/routing/public-transport-navigation.md)