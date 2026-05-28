---
source-hash: f16263db8d987d5d802140c2f60261308cc6e1eb3b436559f0926217fa039b11
title: Routen
sidebar_position: 11
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## Übersicht {#overview}

OsmAnd verfügt über viele leistungsstarke Funktionen zur Anzeige verschiedener [Routen](./types-of-routes.md) auf der Karte. Standardmäßig sind diese Routen Teil von [Vektorkarten](../../map/vector-maps.md#routes) (OpenStreetMap-Daten), jedoch wird eine ähnliche Funktionalität durch [Tracks](../../map/tracks/index.md) bereitgestellt, die mit [Route planen](../../plan-route/create-route.md) erstellt, als [GPX-Tracks](#save-as-a-track) importiert oder mit dem [Reiseaufzeichnungs-Plugin](../../plugins/trip-recording.md) aufgezeichnet werden können. Die Routen-Kartenlegende finden Sie [hier](../../map-legend/osmand.md#routes).

## Routen auf der Karte anzeigen {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Routen-Abschnitt „Karte konfigurieren“](@site/static/img/map/configure_map_routes_android.png) ![Routenklassen](@site/static/img/map/routes_classes_android.png)

- Um die gewünschten Routen auf der Karte anzuzeigen, aktivieren Sie diese in der *Routenliste* des Menüs [Karte konfigurieren](../../map/configure-map-menu.md).
- OsmAnd kann [Routen hervorheben, die in OpenStreetMap vorhanden sind](https://wiki.openstreetmap.org/wiki/Relation:route). Diese können durch Tippen auf [das Symbol auf der Route](#save-as-a-track) ausgewählt werden, und wenn die sichtbare Routenmenge korrekt konfiguriert ist, können Sie der Farbe und den Symbolen folgen.
- Die wichtigsten Routentypen können auch nach Klassen und Unterklassen gefiltert werden, sodass Sie nur bestimmte Gruppen innerhalb jedes Typs anzeigen können. Sie können beispielsweise Wanderwege nach **OSMC-Symbolen** als Klassen und nach *internationalen, nationalen, regionalen* oder *lokalen Netzwerken* als Unterklassen anzeigen, die derzeit verfügbar sind, wenn das Plugin [OsmAnd-Entwicklung](../../plugins/development.md) aktiviert ist.
- Sie können mit dem Tool [Route planen](../../plan-route/create-route.md) einen Track über den Routen erstellen.
- Wenn mehrere Routen entlang derselben Straße verlaufen, wird jede Route als separate halbtransparente Linie über den anderen angezeigt.
- Wenn Sie auf eine Stelle tippen, an der mehrere Routen überlappen, wird ein Kontextmenü mit allen Routen angezeigt, die durch diesen Punkt verlaufen.
- Aktualisierte Vektorkarten sind erforderlich, um alle Elemente des neuen Routen-Rendering-Schemas anzuzeigen.

![Kartenrouten – Wandern OSMC](@site/static/img/map/map-routes-hiking-osmc.png)![Kartenrouten – Knotennetzwerke für Radfahrer](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track-Menü iOS](@site/static/img/map/configure_map_routes_ios.png)

- Um die gewünschten Routen auf der Karte anzuzeigen, aktivieren Sie diese in der *Routenliste* des Menüs [Karte konfigurieren](../../map/configure-map-menu.md).
- OsmAnd kann [Routen hervorheben, die in OpenStreetMap vorhanden sind](https://wiki.openstreetmap.org/wiki/Relation:route). Diese können durch Tippen auf [das Symbol auf der Route](#save-as-a-track) ausgewählt werden, und wenn die sichtbare Routenmenge korrekt konfiguriert ist, können Sie der Farbe und den Symbolen folgen.
- Sie können mit dem Tool [Route planen](../../plan-route/create-route.md) einen Track über den Routen erstellen.
- Wenn mehrere Routen entlang derselben Straße verlaufen, wird jede Route als separate halbtransparente Linie über den anderen angezeigt.

![Kartenrouten – Wandern OSMC](@site/static/img/map/map-routes-hiking-osmc.png)![Kartenrouten – Knotennetzwerke für Radfahrer](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>

## Aktionen mit Routen {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routeninfo](@site/static/img/map/routes_osm.png) ![Routeninfo](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routeninfo](@site/static/img/map/routes_osm_ios_new.png) ![Routeninfo](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

Auf der Karte können Sie Routen für [Wandern, Radfahren, Ski, MTB, Dirtbike, Reisen und mehr](./types-of-routes.md) auswählen. Wo verfügbar, zeigen Wanderwege ihre Wegmarkierungen mit [OSMC-Symbolen](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) an; andere Routentypen verwenden ihre eigenen Markierungen.

Wenn Sie auf ein **Routensymbol** auf der Karte tippen:

- Eine **Liste der Routen in der Nähe** an diesem Ort wird angezeigt.
- Nach der Auswahl einer Route aus der Liste öffnet sich ein [Kontextmenü](../../map/tracks/track-context-menu.md) für diese Route, das detaillierte Informationen und verfügbare Aktionen anzeigt.
- Die ausgewählte Route wird in einer Track-Ansicht geöffnet, sodass Sie auf dieselbe Weise damit interagieren können wie mit einem GPX-Track.

Im **Kontextmenü** können Sie:

- [Zusätzliche Informationen](#route-info-and-elevation) über die ausgewählte Route anzeigen.
- Die Route als **GPX-Track** [speichern](#save-as-a-track).
- Die [Navigation](#start-navigation) entlang der Route starten.

### Klettergebiet- und Kletterfelsdetails {#climbing-area-and-crag-details}

![Kletterdetails](@site/static/img/map/climbing_andr.png)

Wenn Sie ein [Klettergebiet oder einen Kletterfels](./types-of-routes.md#climbing-routes) auswählen, bietet OsmAnd eine detaillierte Zusammenfassung des Kletterstandorts, einschließlich: Name und Lage, Schwierigkeitsgrad des Kletterns (UIAA, Französisch, YDS usw.), Gesteinsart, Höhe und Routenlänge, Kletterqualität und Oberflächenbedingungen.

### Routeninfo und Höhenprofil {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routeninfo](@site/static/img/map/route_info_1_andr_new.png) ![Routeninfo](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routeninfo](@site/static/img/map/route_info_1_ios_new.png) ![Routeninfo](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

Die folgenden Informationen sind im Kontextmenü sichtbar:

- **Routeninfo**: Routenname, OSM-Link (OSM-Bearbeitungs-Plugin erforderlich), Typ, Beschreibung, Entfernung, Richtung, Aufstieg/Abstieg, Höhenbereich, Netzwerk, Betreiber, Status, Farbe, Rundtour, Start-/Endpunkte und mehr.
- **Allgemein**: Größe, Standort, Erstellungsdatum.
- **Zusätzliche Info**. Zeigt die Art der Aktivität an.
- Aktionsschaltflächen: [Als Track speichern](#save-as-a-track) und [Navigation starten](#start-navigation).
- [Höheninfo](../../navigation/setup/route-details.md#elevation-info). Zeigt Informationen zu den Höhendaten auf der Route an.
- [Track auf der Karte analysieren](../../map/tracks/index.md#analyze-track-on-map). Zeigt eine detaillierte Analyse der Trackdaten mithilfe von Diagrammen und Karten an.

Um das Diagramm der Höhe, der Steigung oder der Höhenangaben für eine ausgewählte Route anzuzeigen, tippen Sie einfach in dem Kontextmenü auf einen der folgenden Werte: **Entfernung**, **Aufstieg**, **Abstieg** oder **Höhe**.

Sie können auch die Registerkarte *Track* öffnen und zur Ansicht *Höhe* wechseln, um das vollständige Höhenprofil der Route anzuzeigen.

**Hinweis:** Höhenangaben werden automatisch generiert und können je nach verfügbaren Daten geringfügig abweichen.

### Als Track speichern {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routen am Boden](@site/static/img/map/routes-4.png)   ![Routen am Boden](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routen am Boden](@site/static/img/map/hiking.png)   ![Routen am Boden](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>

Um die Route als *GPX-Datei* zu speichern, tippen Sie im [Infopanel](../../map/tracks/track-context-menu.md#info-panel) auf die Schaltfläche **Speichern (Herunterladen)**. Dadurch wird das Bedienfeld mit den [Schnellaktionen](../../map/tracks/track-context-menu.md#track-actions) geöffnet, in dem Sie Zugriff auf Track-Aktionen wie das Ändern des [Aussehens](../../map/tracks/appearance.md), die [Navigation](../../navigation/setup/route-navigation.md) oder das Bearbeiten der [Route planen](../../plan-route/create-route.md) haben. Gespeicherte Routen verhalten sich genauso wie andere Tracks und sind in Ihrer Tracksammlung verfügbar.

### Navigation starten {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routen am Boden](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routen am Boden](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>

Um die Navigation entlang der ausgewählten OSM-Route zu starten, tippen Sie im [**Infopanel**](../../map/tracks/track-context-menu.md#info-panel) auf die Schaltfläche **Navigation starten**.

Dadurch wird der Modus [**Navigation nach Track**](../../navigation/setup/gpx-navigation.md) gestartet, mit dem Sie der Route mit Sprachführung und Navigationsfunktionen folgen können.

### Schnellaktionen {#quick-actions}

Sie können anpassen, ob Routen ein- oder ausgeschaltet werden, indem Sie das Widget [Schnellaktion](../../widgets/quick-action.md#configure-map) verwenden.

## Routensuche {#routes-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routen am Boden](@site/static/img/map/route_search.png) ![Routen am Boden](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routen am Boden](@site/static/img/map/route_search_ios.png) ![Routen am Boden](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Suchen Sie Routen mithilfe der [Suchfunktion](../../search/index.md) nach Namen oder indem Sie „Routen“ im [Kategorienabschnitt](../../search/search-poi.md#) auswählen.

Um zu suchen, gehen Sie zum Menü *<Translate android="true" ids="search_button"/>* oder *<Translate android="true" ids="search_button,search_categories"/>* und geben Sie Ihre Aktivität ein.

Navigieren Sie zu *<Translate android="true" ids="search_button,search_categories,poi_routes"/>*, um die gewünschten Routen zu finden. Die Suchergebnisse für Routen zeigen den Routennamen, den Aktivitätstyp, die Länge, den Standort, Aufstieg/Abstieg (auf Android) und die Entfernung zum nächsten Punkt an.

### Routenfilter {#routes-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routen am Boden](@site/static/img/map/route_search_2_new.png) ![Routen am Boden](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routen am Boden](@site/static/img/map/route_search_2_ios.png) ![Routen am Boden](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

Tippen Sie in den Routensuchergebnissen in der oberen rechten Ecke auf die Schaltfläche **Filter**, um die Liste einzugrenzen. Der Filterbildschirm enthält ein Feld **Nach Namen filtern**; einen Block **Typ** mit *Büro*, *Postfiliale* und *Postpartner*; und **zusätzliche Kriterien**, die von der ausgewählten Routenkategorie oder Aktivität abhängen, da jede Kategorie ihre eigenen Merkmale und Filterwerte anzeigen kann.

Sie können Filter mithilfe der Schalter aktivieren oder deaktivieren, und einige Abschnitte enthalten *Alle anzeigen*, um zusätzliche Werte anzuzeigen.

## Verwandte Artikel {#related-articles}

- [Kartenkontextmenü](../../map/map-context-menu.md)
- [Karte konfigurieren](../../map/configure-map-menu.md)
- [Tracks](../../map/tracks/index.md)
- [Track-Kontextmenü](../../map/tracks/track-context-menu.md)
- [Öffentlicher Verkehr](../public-transport.md)
- [Aussehen der Navigationsroutenlinie](../../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [POI suchen](../../search/search-poi.md#)
- [Routentypen](./types-of-routes.md)