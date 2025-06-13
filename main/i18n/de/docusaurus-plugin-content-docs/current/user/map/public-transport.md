---
source-hash: 1089ba9ce4a9f9d1985bccd4ba5ebfe5e0e35eb8437bb1a83fe1c4859bf5a769
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



## Überblick {#overview}

Der öffentliche Nahverkehr ist eine zusätzliche Ebene, die es Ihnen ermöglicht, Verkehrsrouten und Haltestellen auf der Karte anzuzeigen, detaillierte Informationen über diese zu überprüfen und zu navigieren.

## Verkehrshaltestellen (Ebene) {#transport-stops-layer}

Öffentliche Verkehrsebene aktivieren/deaktivieren:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Öffentliche Verkehrsebene Android](@site/static/img/map/pt_layer_android.png) ![Öffentliche Verkehrsebene iOS](@site/static/img/map/pt_layer_ios.png)

Wählen Sie 1 oder mehr Transportkategorien zur Anzeige:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[Lesen Sie mehr](../map/vector-maps.md#transport) darüber, wie der Nahverkehr auf der Karte angezeigt wird.


## Verkehrsrouten (Kontextmenü) {#transport-routes-context-menu}

![Öffentliche Verkehrsrouten Menü Android](@site/static/img/map/pt_routemenu_android.png) ![Öffentliche Verkehrsrouten Menü iOS](@site/static/img/map/pt_routemenu_ios.png)

Um das Verkehrsmenü zu öffnen, können Sie auf das Verkehrssymbol tippen. Es zeigt an:

- Farbige Schilder des öffentlichen Nahverkehrs (**anklickbar**)
- [Liste der Routen](#routes), die an dieser Haltestelle oder in der Nähe (innerhalb von 150 m) halten
- Name der Haltestelle und weitere [Details](#transport-stop-details)

### Details zur Verkehrshaltestelle {#transport-stop-details}

![Details zum Menü der öffentlichen Verkehrsrouten Android](@site/static/img/map/pt_routemenu_details_android.png) ![Details zum Menü der öffentlichen Verkehrsrouten iOS](@site/static/img/map/pt_routemenu_details_ios.png)

Die Haltestelle des öffentlichen Nahverkehrs bietet zusätzliche Details im Vergleich zum Standard-OpenStreetMap-Objekt [Menü](../map/map-context-menu.md#details):

- Vorhandensein einer Bank
- Vorhandensein einer Überdachung
- Rollstuhlgerechtigkeit
- Name des Betreibers

**Hinweis**: Sie können Haltestellen nach bestimmten Kriterien filtern. Erweitern und tippen Sie zum Beispiel auf "Bank" / "Ja", und Sie sehen die Liste der Haltestellen mit Bänken. Diese können auch [auf der Karte angezeigt werden](../map/point-layers-on-map.md#points-of-interest-pois).


### Routen {#routes}

![Öffentliche Verkehrsrouten Android](@site/static/img/map/pt_routes_android.png) ![Öffentliche Verkehrsrouten iOS](@site/static/img/map/pt_routes_ios.png)

Verkehrsrouten sind alle öffentlichen Verkehrsrouten, die über die ausgewählte Haltestelle und nahegelegene Routen (innerhalb von 150 m) verlaufen. Die Routeninformationen stammen aus [OpenStreetMap Daten](https://wiki.openstreetmap.org/wiki/Public_transport) wie Ref, Name, Farbe und Typ.

**Schildfarbe**:

- U-Bahn - eigene Linienfarbe
- Eisenbahn - braun
- Bus und andere - rot
- Straßenbahn - blau
- Oberleitungsbus - lila

### Route durchsuchen {#browse-route}

![Liste der öffentlichen Verkehrsrouten Android](@site/static/img/map/pt_route_list_android.png)  ![Liste der öffentlichen Verkehrsrouten Android](@site/static/img/map/pt_route_list_ios.png)

Sie können das Menü "Route durchsuchen" aufrufen, indem Sie **auf ein Schild klicken** oder **eine Route** aus der Routenliste **auswählen**. Danach können Sie durch Klicken auf '<Translate android="true" ids="shared_string_previous"/>' und '<Translate android="true" ids="shared_string_next"/>' zwischen den Haltestellen wechseln. Die Haltestelleninformationen werden im Menü aktualisiert und die Haltestelle wird auf der Karte lokalisiert.

Sie können die vollständige Liste der Haltestellen sehen, indem Sie auf <Translate android="true" ids="rendering_category_details"/> klicken. Die aktuell ausgewählte Haltestelle ist in der Routenliste mit einem 'Standort'-Symbol gekennzeichnet.

> **HINWEIS**: *Wenn Sie auf die Schaltfläche <Translate android="true" ids="get_directions"/> tippen, erhalten Sie eine Route von Ihrem aktuellen Standort zur ausgewählten öffentlichen Verkehrsstation.*


## Verwandte Artikel {#related-articles}

- [Vektorkarten](../map/vector-maps.md)
- [Navigation mit öffentlichen Verkehrsmitteln](../navigation/routing/public-transport-navigation.md)

> *Zuletzt aktualisiert: August 2022*