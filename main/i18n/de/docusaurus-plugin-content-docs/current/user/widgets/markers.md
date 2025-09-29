---
source-hash: 2e10650d0eee32138985228898ac7ac712a0a70a1f315f227a751d0c2f14ae10
sidebar_position: 6
title:  Markierungs-Widgets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Übersicht {#overview}

Markierungen sind temporäre Punkte, die auf der Karte in Form von Flaggen angezeigt werden. Die Widgets zeigen die *Richtung*, *Entfernung*, *Adresse* und die *voraussichtliche Ankunftszeit* zur Markierung an. Sie ermöglichen es Ihnen, Markierungen auf der Karte schnell zu finden sowie deren Position zu ändern. Mehr über Markierungen können Sie in diesem [Artikel](../personal/markers) lesen.  


## Widget in der oberen Leiste {#top-bar-widget}

Das Widget **Kartenmarkierungsleiste** (Android) / **Entfernungsanzeige - Obere Leiste** (iOS) zeigt an:

- Entfernung von Ihrem aktuellen Standort (oder dem Kartenmittelpunkt / dem anfänglichen Berührungspunkt der Karte bei ausgeschaltetem Standort) zum ausgewählten Punkt, der durch die Markierung auf der Karte angezeigt wird ([Längeneinheiten](../personal/profiles/#general-settings) können in den Profileinstellungen ausgewählt werden).
- Ein Pfeil in der gleichen Farbe wie die Markierung zeigt die Richtung von Ihrem aktuellen Standort (oder dem Kartenmittelpunkt / dem anfänglichen Berührungspunkt der Karte bei ausgeschaltetem Standort) und die Ausrichtung Ihres Geräts im Raum (Kurs) zur Markierung an.
- Standortadresse.
- Menüsymbol, das zur [Kartenmarkierungsliste](../navigation/setup/markers-navigation.md#itinerary-list) führt.

Sie können auch auswählen, ob eine oder zwei Markierungen angezeigt werden sollen. Lesen Sie mehr über die Widget-Einstellungen in diesem [Artikel](https://osmand.net/docs/user/personal/markers#appearance-on-the-map).
:::info
*Die Entfernung zur Markierung* ist die Länge der geraden Linie zwischen Ihrer Position (oder dem Kartenmittelpunkt / dem anfänglichen Berührungspunkt der Karte bei ausgeschaltetem Standort) und der Markierung.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Kartenmarkierungen im Widget der oberen Leiste](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Aktivieren | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="map_markers_bar"/>* |
| Durch Tippen | Der sichtbare Teil der Karte verschiebt sich zum Standort der Markierung. |
| Langes Tippen + Verschieben | Um die Entfernung zu messen und die Richtung von einem bestimmten Punkt auf der Karte zur verfolgten Markierung zu sehen, müssen Sie lange tippen und die Kartenposition sofort leicht verschieben (das Kontextmenü sollte nicht erscheinen). |
| Annäherung an Markierung | Falls sich Ihr Standort in einem kleinen Radius um die Kartenmarkierung befindet (**< 50 m**), sehen Sie im Widget-Feld eine Schaltfläche mit einem Häkchen, um die Kartenmarkierung schnell zu löschen (als passiert markieren). Die markierte Markierung wird durch die nächste Markierung in der Liste der Markierungen ersetzt.  |
| Entfernungsformat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Kartenmarkierungen im Widget der oberen Leiste](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Aktivieren | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="map_markers_bar"/>*|
| Durch Tippen | Der sichtbare Teil der Karte verschiebt sich zum Standort der Markierung. |
| Durch Tippen | Wechseln zwischen "Entfernung" / "Voraussichtliche Ankunftszeit" (Modus wechseln). |
| Annäherung an Markierung | Falls sich Ihr Standort in einem kleinen Radius um die Kartenmarkierung befindet (**< 50 m**), sehen Sie im Widget-Feld eine Schaltfläche mit einem Häkchen, um die Kartenmarkierung schnell zu löschen (als passiert markieren). Die markierte Markierung wird durch die nächste Markierung in der Liste der Markierungen ersetzt.  |
| Entfernungsformat  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |  

</TabItem>

</Tabs>


## Panel-Widgets {#panel-widgets}

Das Widget **Kartenmarkierungen** *(für Android)* und **Entfernungsanzeige - Widgets** *(für iOS)* zeigt an:

- *Entfernung von Ihrem aktuellen Standort* zum ausgewählten Punkt, der durch die Markierung auf der Karte angezeigt wird ([Längeneinheiten](../personal/profiles/#general-settings) können in den Profileinstellungen ausgewählt werden).
- *Voraussichtliche Ankunftszeit oder ETA*.  
Dies ist die Zeit (hh:mm), zu der das Fahrzeug oder die Person am Ziel ankommen sollte. Sie wird berechnet als die Entfernung zur Markierung geteilt durch die Durchschnittsgeschwindigkeit.
Die Durchschnittsgeschwindigkeit wird als Mittelwert aller Geschwindigkeitswerte berechnet, die von den Standortpunkten für das von Ihnen gewählte Zeitintervall von 15 Sekunden bis 60 Minuten empfangen wurden.

Sie können auch auswählen, ob eine oder zwei Markierungen angezeigt werden sollen. Lesen Sie mehr über die Widget-Einstellungen in diesem [Artikel](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*Die Entfernung zur Markierung* ist die Länge der geraden Linie zwischen Ihrer Position (oder einem bestimmten Punkt auf der Karte) und der Markierung.
:::  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Panel-Widgets](@site/static/img/widgets/map_markers_widget-02.png)  

| | |
|------------|------------|
| Aktivieren | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>*  |
| Durch Tippen 1 | Wechseln zwischen "Entfernung" / "Voraussichtliche Ankunftszeit" (Modus wechseln). |
| Durch Tippen 2 | Der sichtbare Teil der Karte verschiebt sich zum Standort der Markierung (Zum Standort der Markierung gehen). |
| Langes Tippen + Verschieben | Um die Entfernung zu messen und die Richtung von einem bestimmten Punkt auf der Karte zur verfolgten Markierung zu sehen, müssen Sie lange tippen und die Kartenposition sofort leicht verschieben (das Kontextmenü sollte nicht erscheinen). |
| Entfernungsformat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Panel-Widgets](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Aktivieren | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="map_markers_bar"/>*  |
| Durch Tippen | Der sichtbare Teil der Karte verschiebt sich zum Standort der Markierung. |
| Durch Tippen | Wechseln zwischen "Entfernung" / "Voraussichtliche Ankunftszeit" (Modus wechseln). |
| Entfernungsformat  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |

</TabItem>

</Tabs>


## Markierungs-Widgets konfigurieren {#configure-marker-widgets}

Allgemeine Informationen zu den Einstellungen des Kartenmarkierungs-Widgets finden Sie auf dieser [Seite](../personal/markers#appearance-on-the-map).  

### Kartenmarkierungsleiste {#map-markers-bar}
Das Widget in der oberen Leiste zeigt die Entfernung und Richtung zur nächsten Kartenmarkierung von Ihrem aktuellen Standort an. In den Einstellungen können Sie wählen, ob eine oder zwei Markierungen oben auf dem Bildschirm angezeigt werden sollen.

![Darstellung auf der Karte](@site/static/img/widgets/configure-marker-wid-02.png)  

### Kartenmarkierungen {#map-markers} 
Das Widget zeigt die Entfernung oder die voraussichtliche Ankunftszeit (ETA) für die erste oder zweite Markierung in der Liste der Kartenmarkierungen an. Sie können wählen, ob eine Markierung, die erste oder die zweite, oder beide auf dem Bildschirm angezeigt werden sollen.

![Darstellung auf der Karte](@site/static/img/widgets/configure-marker-wid-01.png)  ![Darstellung auf der Karte](@site/static/img/widgets/settings-marker-wid-first-01.png)  

|    |     |  
| :------------- | :------------- |
| Zeigt an | In diesem Modus können Sie auswählen, welche Informationen das Widget anzeigen soll: *Entfernung* oder *Voraussichtliche Ankunftszeit*. |
| Intervall | Wenn unter 'Anzeigen' die Option *Voraussichtliche Ankunftszeit* ausgewählt ist, erscheint diese Option mit einer Auswahl von Zeiten (von 15 Sekunden bis 60 Minuten) für die ETA-Berechnung. |
| Klick auf Widget | Mit dieser Einstellung können Sie wählen, welche Aktion ausgeführt wird, wenn Sie auf das Widget klicken: *Modus wechseln* oder *Zum Standort der Markierung gehen*. |


## Darstellung auf der Karte {#appearance-on-the-map}

Die Konfiguration der Darstellung von Kartenmarkierungen ist sowohl in der Android- als auch in der iOS-Version von OsmAnd verfügbar. Das Menü "Darstellung auf der Karte" ist eine allgemeine Einstellung für Kartenmarkierungen und gilt unabhängig davon, ob die Widgets aktiviert sind oder nicht. Detaillierte Informationen finden Sie auf dieser [Seite](../personal/markers.md#appearance-on-the-map).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![Darstellung auf der Karte](@site/static/img/widgets/appearence_on_the_map-02.png)  

|    |    |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Zeigt Informationen über die erste oder die ersten beiden Markierungen in der Kartenmarkierungsliste an. |
|  <Translate android="true" ids="show_arrows_on_the_map"/> |  Zeigt die Richtung zur verfolgten Markierung (eine oder zwei) als Pfeil auf der Karte an. Befindet sich die Markierung im sichtbaren Teil der Karte, wird kein Pfeil angezeigt. |
| <Translate android="true" ids="show_guide_line"/> | Zeigt die Richtung als gestrichelte Linie von einem bestimmten Punkt auf der Karte zur verfolgten Markierung in einer geraden Linie an.  |
| <Translate android="true" ids="one_tap_active"/> |  Mit einem einzigen Tippen auf die gewünschte Markierung auf der Karte wird diese Markierung an den Anfang der Liste der aktiven Kartenmarkierungen verschoben, ohne das Kontextmenü zu öffnen. |  
| <Translate android="true" ids="keep_passed_markers"/> | Markierungen, die als Gruppe von Favoriten oder GPX-Wegpunkten hinzugefügt und als "Passiert" markiert wurden, bleiben auf der Karte. Wenn die Gruppe nicht aktiv ist, verschwinden die Markierungen von der Karte. |

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Darstellung der Kartenmarkierungen iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)  

|    |     |  
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Zeigt Informationen über die erste oder die ersten beiden Markierungen in der Kartenmarkierungsliste an. |
|  <Translate android="true" ids="show_direction"/> | Ermöglicht die Auswahl, ob Widgets angezeigt werden sollen oder nicht und wie sie erscheinen: über der Karte (<Translate android="true" ids="shared_string_topbar"/>) oder auf der rechten Seite des Bildschirms (<Translate android="true" ids="shared_string_widgets"/>). |
|  Pfeile auf der Karte |  Zeigt die Richtung zur verfolgten Markierung (eine oder zwei) als Pfeil auf der Karte an. Befindet sich die Markierung im sichtbaren Teil der Karte, wird kein Pfeil angezeigt. |
| Richtungslinie | Zeigt die Richtung als gestrichelte Linie von einem bestimmten Punkt auf der Karte zur verfolgten Markierung in einer geraden Linie an.  |

</TabItem>

</Tabs>


## Verwandte Artikel {#related-articles}

- [Bildschirm konfigurieren](./configure-screen.md)
- [Karten-Schaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radius-Lineal und Lineal](./radius-ruler.md)
- [Schnellaktion](./quick-action.md)