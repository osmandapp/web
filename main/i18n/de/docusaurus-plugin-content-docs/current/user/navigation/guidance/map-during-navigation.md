---
source-hash: 647711494d62816fdbd45cf8b18ef90488d2e460f73ad6eb67974d9a0645067f
sidebar_position: 1
title: Kartenbildschirm während der Navigation
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



## Überblick {#overview}

In diesem Artikel wird beschrieben, wie Sie die Darstellung der Karte während der Navigation konfigurieren. Dazu gehören Funktionen wie die Anzeige von [POIs entlang der Route](#show-points-along-the-route), die Verwendung von [Bildschirmwarnungen](#screen-alerts), die [Darstellung der Routenlinie](#route-line-appearance) einschließlich Farbe, Breite und Abbiegepfeilen. Diese Funktionen stehen in engem Zusammenhang mit den [Einstellungen für die Routennavigation](../setup/route-navigation.md#settings).


## Karte während der Navigation {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![Kartenbildschirm während der Navigation](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Kartenbildschirm während der Navigation](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Während der Navigation ist die Karte ein visuelles Hilfsmittel, um Ihre Position zu lokalisieren, Ihr Ziel zu bestimmen, Ihre Route zu planen und Navigationshinweise anzuzeigen. Sie können dazu die Zoomfunktion verwenden und die Karte nach Bedarf ziehen und drehen. Die Karte kann auch Straßeninformationen, Straßennamen, Gebäude und andere Objekte anzeigen, um Ihnen zu helfen, Ihre Route leicht zu bestimmen.  

Während der Navigation passt sich die Darstellung der Karte an das ausgewählte Navigationsprofil an. Bevor Sie mit der Navigation beginnen, stellen Sie sicher, dass die Darstellung der Karte Ihren Präferenzen für die Funktionsweise während der Fahrt entspricht.

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* |  Die Zeit, für die die Kartenansicht nach dem Bewegen mit der aktuellen Position synchronisiert wird.  |  *Wert:* <br /> Nie, 5 Sek., 10 Sek., 15 Sek., 20 Sek., 25 Sek., 30 Sek., 45 Sek., 60 Sek., 50 Sek. |
| *<Translate android="true" ids="auto_zoom_map"/>*  |  Skaliert die Karte automatisch entsprechend Ihrer Geschwindigkeit, solange die Karte mit Ihrer aktuellen Position synchronisiert ist. | *Wert:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - manueller Zoom. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - Zoom ist 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - Zoom ist 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - Zoom ist 5 m. |
| *<Translate android="true" ids="snap_to_road"/>*  | Das aktuelle Positionssymbol wird mit der aktuellen Navigationsroute verknüpft.  | Sie können diese Option deaktivieren, aber alle straßenbezogenen Optionen, wie z. B. die Fahrspuranzeige, sind während der Navigation ebenfalls nicht sichtbar.  |
| *<Translate android="true" ids="approximate_bearing"/>* | Bestimmt die Peilung basierend auf der Navigationsroute, der Sie folgen.  | Die Einstellung ist nur sichtbar, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist. <br /> Diese Einstellungen sollten aktiviert werden, wenn die Ausrichtung der Richtungskarte bei Verwendung von [Android Auto](../auto-car.md#common-issues-and-solutions) umgedreht wird oder wackelt.   |


## Punkte entlang der Route anzeigen {#show-points-along-the-route}

Die Einstellung *Entlang der Route anzeigen* ermöglicht Ihnen, zusätzliche Routenparameter zu konfigurieren, und ist für den Betrieb von Widgets wie dem [Straßennamen](../../widgets/nav-widgets#street-name) und dem [Warnungs-Widget](../../widgets/nav-widgets.md#alert-widget) erforderlich. Zu den Optionen gehören die Anzeige von [**POIs**](#points-of-interest-pois) und [**Meine Favoriten**](#my-favorites) entlang der Route oder deren Verwendung als Ergänzung zu den bereits für das Profil konfigurierten, sowie die Anzeige einer vollständigen Liste von [**Verkehrswarnungen**](#traffic-warnings) entlang der Route.  

- Die Möglichkeit, verschiedene Entfernungen (bis zu 5 km, je nach eingestellter [Längeneinheit](../../personal/profiles.md#units--formats)) von der Route zu nahe gelegenen Punkten einzustellen, ist nützlich bei der Verwendung von Routing-Typen wie [Luftlinien-Routing](../routing/straight-line-routing.md) oder [Direkt-zu-Punkt-Routing](../routing/direct-to-point-routing.md).
- Für die Einstellung *Entlang der Route anzeigen* wird empfohlen, [Sprachansagen](../guidance/voice-navigation.md) für die Navigation zu verwenden.
- *POIs, Favoriten und Verkehrswarnungen* werden in der Liste für eine bereits zurückgelegte Route nicht angezeigt.


### Punkte anzeigen und auswählen {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![Punkte entlang der Route](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Entlang der Route anzeigen*

![Punkte entlang der Route](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

Wenn Sie eine Route erstellen, können Sie im Abschnitt *Navigation* die Arten von Punkten festlegen, die entlang der Route angezeigt werden sollen.


### Points of Interest (POIs) {#points-of-interest-pois}

![POI-Overlay Android](@site/static/img/map/poi_overlay_android.png) ![POI-Overlay iOS](@site/static/img/map/poi_overlay_ios.png)

Die POI-Einstellungen unter [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) sind mit der Einstellung **Entlang der Route anzeigen** verknüpft. Dies ist im Wesentlichen eine zusätzliche Einstellung zur Anzeige von POIs auf der Karte, die direkt mit der erstellten Route zusammenhängt.  

Wenn Sie die Anzeige bestimmter POIs auf der *Karte konfigurieren* festlegen, werden diese alle auf den von Ihnen heruntergeladenen Karten angezeigt, unabhängig davon, ob Sie Kategorien ausgewählt haben oder, wenn Ihnen die Kategorie egal ist, nahe gelegene POIs ausgewählt haben.  

- Die Anzahl und Identifizierung von POIs ist *maßstabsabhängig*.

- Die Einstellung *Entlang der Route anzeigen* zeigt dieselbe Kategorie wie im *POI-Overlay* an, aber Sie sehen die *gesamte Liste* der ausgewählten POIs auf einmal, beginnend am Punkt des aktuellen Standorts in der eingestellten Entfernung innerhalb Ihrer Route.  

- Sie können unnötige POIs aus der Liste entfernen oder sie im [Kontextmenü](../../map/map-context-menu.md) bearbeiten, indem Sie auf einen von ihnen tippen.

- Die Liste enthält die ausgewählten [POI-Typen](../../map/point-layers-on-map.md#poi-types) und kurze Informationen zu jedem von ihnen, wie z. B. das *Typensymbol, den Namen, die Entfernung vom aktuellen Standortpunkt zum POI entlang der Route* und *Angaben, auf welcher Seite der Route in einer geraden Linie und wie weit entfernt der POI ist*.  


### Meine Favoriten {#my-favorites}

Die Liste enthält alle zuvor hinzugefügten [Favoriten](../../personal/favorites.md#favorite-point) in der Nähe der von Ihnen erstellten Route. Wie bei POIs können Sie die Entfernung auswählen, in der sich diese Punkte befinden.  

- Wenn Sie die [Anzeige von Favoriten auf der Karte deaktivieren](../../map/configure-map-menu.md), verschwinden sie nicht aus der Liste und werden weiterhin im [Widget](../../widgets/nav-widgets.md#street-name) angezeigt und angekündigt, wenn Sie sich ihnen nähern.

- Sie können Ihre *Favoriten* nicht nur im Voraus zur Karte hinzufügen, sondern auch während der Navigation auf einer Route.

- *Um die Liste zu aktualisieren*, schalten Sie Meine Favoriten aus und dann wieder ein.

- Jeder Punkt enthält einen Namen oder Koordinaten, eine Gruppe, die Entfernung vom aktuellen Standortpunkt zum *Favoriten* direkt auf der Routenlinie, Informationen darüber, wie weit rechts oder links der Punkt von der Linie entfernt ist, und die Richtung der Route.


### Verkehrswarnungen {#traffic-warnings}

*Verkehrswarnungen* werden nicht wie *POIs* oder *Meine Favoriten* direkt auf der Karte angezeigt.

- **Um diese Option zu aktivieren** und die Warnungen anzuzeigen, müssen Sie zunächst das [Warnungs-Widget](../../widgets/nav-widgets.md#alert-widget) aktivieren und konfigurieren.

- Die Wahl, *Verkehrswarnungen* entlang Ihrer Route anzuzeigen, ermöglicht es Ihnen, die gesamte Liste kurz vor Beginn Ihrer Route einzusehen, was bei der Planung Ihrer Reise nützlich ist.

- Sie können unnötige Warnungen aus der Liste entfernen oder auf den Namen der Warnung tippen, um den [Standort zu bearbeiten](../../map/map-context-menu.md#avoid-road).


## Bildschirmwarnungen {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Benachrichtigungen, wie Verkehrswarnungen oder Geschwindigkeitsbegrenzungen, werden als Widget auf dem Bildschirm angezeigt. Sie erscheinen während der Navigation in der unteren linken Ecke. | [Arten von Warnungs-Widgets](../../widgets/nav-widgets.md#alert-widget)   |


## Darstellung der Routenlinie {#route-line-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Navigationsroute Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigationsroute Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

Sie können das Aussehen der Routenlinie nach Stil auswählen oder manuell Farbe, Breite und Transparenz der Linie festlegen. Zusätzlich können Sie wählen, ob Abbiegepfeile und Richtungspfeile auf der Linie angezeigt werden sollen.

**Erweitert**: Die Einstellung "Routenlinie anpassen" ermöglicht es Ihnen, das Aussehen der Routenlinie anzupassen, um Höhenänderungen, signifikante Steigungen oder Gefälle, Eis auf der Straße, unbefestigte Straßen, Autobahnen und andere mögliche Hindernisse anzuzeigen. Sie können auch benutzerdefinierte [Farbschemata](../../personal/color-palette-schemes.md#routes) auswählen oder erstellen, um sie auf die Routenlinie anzuwenden.


:::note
 <ProFeature/> Einige Parameter können Sie nur mit einem <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro-Abonnement</a> verwenden.
:::


### Farbe {#color}

Die Einstellung **Farbe** ändert die Farbtöne der Routenlinien. Ihre Gesamtfarbe ändert sich je nach ausgewähltem Typ aus der OsmAnd-Sammlung und gemäß der **Kartenlegende**. Alternativ wird ihre Farbe zu der von Ihnen manuell eingestellten Farbe und Transparenz.

- ***<Translate android="true" id="map_widget_renderer"/>***. Wird mit den Standardfarben verwendet. Eine vollständige Beschreibung der Farben finden Sie unter [Standardkartenstile](../../map/vector-maps.md#default-map-styles).  
    ![Kartenstil](@site/static/img/navigation/route/map_st_2.png)

- ***Benutzerdefiniert***. Ermöglicht die Auswahl einer Linie in jeder bevorzugten Farbe und Transparenz. Sie können unterschiedliche Einstellungen für die Tageskarte und separat für die Nachtkarte auswählen.  
    ![Benutzerdefiniert](@site/static/img/navigation/route/custom.png)   ![Benutzerdefiniert](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Zeigt die Höhe des Routenpunkts als **grün-gelb-roten** Farbverlauf an. **Grün** zeigt den niedrigsten Punkt der Route an, **gelb** zeigt die durchschnittliche Höhe des Punktes und **rot** ist der höchste. Wenn der Höhenunterschied der Route < 100 Meter beträgt, wird der Farbverlauf teilweise oder gar nicht angewendet, z.B. bei einem einfachen Anstieg von 100 Metern auf 150 Meter - der Farbverlauf ist **grün-gelb**. Beachten Sie, dass die Farbe nicht den absoluten Wert der Höhe darstellt.  
    ![Höhe](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. Die Routenlinie wird je nach Höhenprofil der Route in verschiedenen Farben eingefärbt. Eine detaillierte Beschreibung finden Sie im Artikel über das *Topographie-Plugin*, Abschnitt [Neigung](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![Höhe](@site/static/img/navigation/route/Slope.png)   ![Höhe](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Färbt eine Route oder eine Spurlinie entsprechend der *Straßenklassifizierung*. Eine detaillierte Beschreibung finden Sie im Artikel über *Vektorkarten*, Abschnitt [Straßenstil](../../map/vector-maps.md#road-style).  
    ![Höhe](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Bietet Informationen über die physische Oberfläche der Straße oder des Weges. Eine detaillierte Beschreibung finden Sie im Artikel *OsmAnd-Kartenstil - [Oberfläche](../../map-legend/osmand.md#surface-smoothness)* im Abschnitt *Kartenlegende*.  
    ![Höhe](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Klassifizierung der Manövrierfähigkeit von Straßen oder Wegen für Radfahrzeuge, insbesondere in Bezug auf die Regelmäßigkeit und Glätte der Oberfläche. Eine detaillierte Beschreibung finden Sie im Artikel *OsmAnd-Kartenstil - [Glätte](../../map-legend/osmand.md#surface-smoothness)* im Abschnitt *Kartenlegende*.  
    ![Höhe](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Färbt eine Route oder eine Spurlinie entsprechend der *Winterstraßenklassifizierung*. Eine detaillierte Beschreibung finden Sie im Artikel über *Vektorkarten*, Abschnitt [Winter- und Eisstraßen](../../map/vector-maps.md#winter-and-ski).  
    ![Höhe](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Färbung einer Route oder Spurlinie nach der Zusammensetzung des Belags. Wird typischerweise verwendet, wenn das Straßennetz weitgehend unbefestigt ist. Eine detaillierte Beschreibung finden Sie im Artikel *OsmAnd-Kartenstil - [Festigkeit der Oberfläche](../../map-legend/osmand.md#surface-smoothness)* im Abschnitt *Kartenlegende*.  
    ![Höhe](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Schwierigkeit von Reitwegen***. Rendert Wege entsprechend der Schwierigkeit von Reitwegen.  
    ![Höhe](@site/static/img/navigation/route/firmness.png)


### Breite {#width}

Sie können die Breite der Routenlinie an die auf der Karte angezeigte Straße oder den Weg anpassen. Für eine klarere visuelle Identifizierung können Sie die Linienbreite manuell nach Bedarf vergrößern oder verkleinern. Weitere Details finden Sie im Artikel *Spuren und Routen — [Aussehen](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Wird mit der von OsmAnd festgelegten Standardbreite verwendet. Eine vollständige Beschreibung finden Sie im Artikel über *Vektorkarten*, Abschnitt [Kartenstil](../../map/vector-maps.md#default-map-styles).  
    ![Kartenstil](@site/static/img/navigation/route/map_st_2.png)

- ***Dünne, Mittlere und Dicke Breiten***. Sie können die Breite der Linie so wählen, dass sie der Breite der Straße entspricht, oder die Routenlinie auf der Karte stärker hervorheben.  
    ![Breite](@site/static/img/navigation/route/width_med.png)

- ***Benutzerdefiniert***. Ermöglicht die Anzeige einer Linie in der von Ihnen gewünschten Breite. Verwenden Sie den Schieberegler, um die Breite auszuwählen.  
    ![Benutzerdefiniert](@site/static/img/navigation/route/custom_2.png)  


### Abbiegepfeile {#turn-arrows}

Mit der Einstellung Abbiegepfeile können Sie auswählen, ob Abbiegepfeile auf der Routenlinie angezeigt werden sollen.  

- ***Auf Karte***  
    ![Höhe](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![Abbiegepfeile iOS Karte](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***In App***  
    ![Höhe](@site/static/img/navigation/route/turn_arr.png)   ![Abbiegepfeile iOS](@site/static/img/navigation/route/turn_arr_ios.png)


## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Routenvorbereitung](../setup/route-navigation.md)
- [Navigation nach Track](../setup/gpx-navigation.md)
- [Navigation nach Markierungen](../setup/markers-navigation.md)
- [Routendetails](../setup/route-details.md)
- [Navigationseinstellungen](./navigation-settings.md)
- [Sprachansagen / Benachrichtigungen](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Zuletzt aktualisiert: Dezember 2024*