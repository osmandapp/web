---
source-hash: d3abf03ba6407956088e1ed644ced36e7ab7236b5ccbcd41e305f4fac26a3b36
sidebar_position: 6
title:  Marker-Widgets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Überblick {#overview}

Marker sind temporäre Punkte, die auf der Karte in Form von Flaggen angezeigt werden. Die Widgets zeigen die *Richtung*, *Entfernung*, *Adresse* und die *geschätzte Ankunftszeit* zum Marker an. Sie ermöglichen es Ihnen, Marker auf der Karte schnell zu finden und ihre Position zu ändern. Mehr über Marker können Sie in diesem [Artikel](../personal/markers) lesen.  


## Widget in der oberen Leiste {#top-bar-widget}

Das Widget **Kartenmarker-Leiste** (Android) / **Entfernungsanzeige - Obere Leiste** (iOS) zeigt an:

- Entfernung von Ihrem aktuellen Standort (oder dem Mittelpunkt der Karte / dem anfänglichen Berührungspunkt der Karte, wenn der Standort ausgeschaltet ist) zum ausgewählten Punkt, der durch den Marker auf der Karte gekennzeichnet ist ([Längeneinheiten](../personal/profiles/#general-settings) können in den Profileinstellungen ausgewählt werden).
- Ein Pfeil in derselben Farbe wie der Marker zeigt die Richtung vom aktuellen Standort (oder dem Mittelpunkt der Karte / dem anfänglichen Berührungspunkt der Karte, wenn der Standort ausgeschaltet ist) und die räumliche Ausrichtung Ihres Geräts (Kurs) zum Marker an.
- Standortadresse.
- Menüsymbol, das zur [Kartenmarkerliste](../personal/markers/#map-markers-menu) führt.

Sie können auch auswählen, ob ein oder zwei Marker angezeigt werden sollen. Lesen Sie mehr über die Widget Einstellungen in diesem [Artikel](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*Die Entfernung zum Marker* ist die Länge der geraden Linie zwischen Ihrer Position (oder dem Mittelpunkt der Karte / dem anfänglichen Berührungspunkt der Karte, wenn der Standort ausgeschaltet ist) und dem Marker.
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Kartenmarker im Widget der oberen Leiste](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Aktivieren | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Ein Panel auswählen → <Translate android="true" ids="map_markers_bar"/>* |
| Durch Tippen | Der sichtbare Teil der Karte verschiebt sich zum Markerstandort. |
| Langes Tippen + Bewegen | Um die Entfernung zu messen und die Richtung von einem bestimmten Punkt auf der Karte zum verfolgten Marker zu sehen, müssen Sie lange tippen und die Kartenposition sofort leicht verschieben (das Kontextmenü sollte nicht erscheinen). |
| Marker nähern | Wenn sich Ihr Standort in einem kleinen Radius um den Kartenmarker befindet (**< 50 m**), sehen Sie im Widget-Feld eine Schaltfläche mit einem Häkchen, um den Kartenmarker schnell zu löschen (als passiert markieren). Der markierte Marker wird durch den nächsten Marker in der Liste der Marker ersetzt.  |
| Entfernungsformat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Kartenmarker im Widget der oberen Leiste](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Aktivieren | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Ein Panel auswählen → <Translate android="true" ids="map_markers_bar"/>*|
| Durch Tippen | Der sichtbare Teil der Karte verschiebt sich zum Markerstandort. |
| Durch Tippen | Wechseln zwischen "Entfernung" / "Geschätzte Ankunftszeit" (Modus wechseln). |
| Marker nähern | Wenn sich Ihr Standort in einem kleinen Radius um den Kartenmarker befindet (**< 50 m**), sehen Sie im Widget-Feld eine Schaltfläche mit einem Häkchen, um den Kartenmarker schnell zu löschen (als passiert markieren). Der markierte Marker wird durch den nächsten Marker in der Liste der Marker ersetzt.  |
| Entfernungsformat  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |  

</TabItem>

</Tabs>


## Panel-Widgets {#panel-widgets}

Das Widget **Kartenmarker** *(für Android)* und **Entfernungsanzeige - Widgets** *(für iOS)* zeigt an:

- *Entfernung von Ihrem aktuellen Standort* zum ausgewählten Punkt, der durch den Marker auf der Karte gekennzeichnet ist ([Längeneinheiten](../personal/profiles/#general-settings) können in den Profileinstellungen ausgewählt werden).
- *Geschätzte Ankunftszeit oder ETA*.  
Dies ist die Zeit (hh:mm), zu der das Fahrzeug oder die Person am Ziel ankommen soll. Sie wird als Entfernung zum Marker geteilt durch die Durchschnittsgeschwindigkeit berechnet.
Die Durchschnittsgeschwindigkeit wird als Mittelwert aller Geschwindigkeitswerte berechnet, die von den Standortpunkten für das von Ihnen ausgewählte Zeitintervall von 15 Sekunden bis 60 Minuten empfangen wurden.

Sie können auch auswählen, ob ein oder zwei Marker angezeigt werden sollen. Lesen Sie mehr über die Widget Einstellungen in diesem [Artikel](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*Die Entfernung zum Marker* ist die Länge der geraden Linie zwischen Ihrer Position (oder einem bestimmten Punkt auf der Karte) und dem Marker.
:::  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Panel-Widgets](@site/static/img/widgets/map_markers_widget-02.png)  

| | |
|------------|------------|
| Aktivieren | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>*  |
| Durch Tippen 1 | Wechseln zwischen "Entfernung" / "Geschätzte Ankunftszeit" (Modus wechseln). |
| Durch Tippen 2 | Der sichtbare Teil der Karte verschiebt sich zum Markerstandort (Zum Markerstandort gehen). |
| Langes Tippen + Bewegen | Um die Entfernung zu messen und die Richtung von einem bestimmten Punkt auf der Karte zum verfolgten Marker zu sehen, müssen Sie lange tippen und die Kartenposition sofort leicht verschieben (das Kontextmenü sollte nicht erscheinen). |
| Entfernungsformat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Panel-Widgets](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Aktivieren | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Ein Panel auswählen → <Translate android="true" ids="map_markers_bar"/>*  |
| Durch Tippen | Der sichtbare Teil der Karte verschiebt sich zum Markerstandort. |
| Durch Tippen | Wechseln zwischen "Entfernung" / "Geschätzte Ankunftszeit" (Modus wechseln). |
| Entfernungsformat  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |

</TabItem>

</Tabs>


## Marker-Widgets konfigurieren {#configure-marker-widgets}

Allgemeine Informationen zu den Einstellungen des Kartenmarker-Widgets finden Sie auf dieser [Seite](../personal/markers#map-markers-widgets).  

**Kartenmarker-Leiste**  
Das Widget in der oberen Leiste zeigt die Entfernung und Richtung zum nächsten Kartenmarker von Ihrem aktuellen Standort an. In den Einstellungen können Sie wählen, ob ein oder zwei Marker oben auf dem Bildschirm angezeigt werden sollen.

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-02.png)  

**Kartenmarker**  
Das Widget zeigt die Entfernung oder die geschätzte Ankunftszeit (ETA) für den ersten oder zweiten Marker in der Liste der Kartenmarker an. Sie können wählen: ein Marker, der erste oder zweite, der auf dem Bildschirm angezeigt werden soll, oder beide.

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-01.png)  ![appearence_on_the_map](@site/static/img/widgets/settings-marker-wid-first-01.png)  

|    |     |  
| :------------- | :------------- |
| Anzeigen | In diesem Modus können Sie auswählen, welche Informationen das Widget anzeigen soll: *Entfernung* oder *Geschätzte Ankunftszeit*. |
| Intervall | Wenn unter 'Anzeigen' *Geschätzte Ankunftszeit* ausgewählt ist, erscheint diese Option mit einer Auswahl an Zeiten (von 15 Sekunden bis 60 Minuten) für die ETA-Berechnung. |
| Klick auf Widget |  Diese Einstellung ermöglicht es Ihnen, auszuwählen, welche Aktion ausgeführt wird, wenn Sie auf das Widget klicken: *Modus wechseln* oder *Zum Markerstandort gehen*. |


## Darstellung auf der Karte {#appearance-on-the-map}

Die Konfiguration der Darstellung von Kartenmarkern ist sowohl in der Android- als auch in der iOS-Version von OsmAnd verfügbar. Das Menü "Darstellung auf der Karte" ist eine allgemeine Einstellung für Kartenmarker und gilt unabhängig davon, ob die Widgets aktiviert sind oder nicht. Detaillierte Informationen finden Sie auf dieser [Seite](../personal/markers.md#appearance-on-the-map).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-02.png)  

|    |    |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Zeigt Informationen über den ersten oder die ersten beiden Marker in der Kartenmarkerliste an. |
|  <Translate android="true" ids="show_arrows_on_the_map"/> |  Zeigt die Richtung zum verfolgten Marker (einer oder zwei) als Pfeil auf der Karte an. Wenn sich der Marker im sichtbaren Teil der Karte befindet, wird kein Pfeil angezeigt. |
| <Translate android="true" ids="show_guide_line"/> | Zeigt die Richtung als gestrichelte Linie von einem bestimmten Punkt auf der Karte zum verfolgten Marker in einer geraden Linie an.  |
| <Translate android="true" ids="one_tap_active"/> |  Mit einem einzigen Tippen auf den gewünschten Marker auf der Karte wird dieser Marker an den Anfang der Liste der aktiven Kartenmarker verschoben, ohne das Kontextmenü zu öffnen. |  
| <Translate android="true" ids="keep_passed_markers"/> | Marker, die als Gruppe von Favoriten oder GPX-Wegpunkten hinzugefügt und als passiert markiert wurden, bleiben auf der Karte. Wenn die Gruppe nicht aktiv ist, verschwinden die Marker von der Karte. |

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Darstellung der Kartenmarker iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)  

|    |     |  
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Zeigt Informationen über den ersten oder die ersten beiden Marker in der Kartenmarkerliste an. |
|  <Translate android="true" ids="show_direction"/> | Ermöglicht die Auswahl, ob Widgets angezeigt werden sollen und wie sie erscheinen sollen: über der Karte (<Translate android="true" ids="shared_string_topbar"/>) oder auf der rechten Seite des Bildschirms (<Translate android="true" ids="shared_string_widgets"/>). |
|  Pfeile auf der Karte |  Zeigt die Richtung zum verfolgten Marker (einer oder zwei) als Pfeil auf der Karte an. Wenn sich der Marker im sichtbaren Teil der Karte befindet, wird kein Pfeil angezeigt. |
| Richtungslinie | Zeigt die Richtung als gestrichelte Linie von einem bestimmten Punkt auf der Karte zum verfolgten Marker in einer geraden Linie an.  |

</TabItem>

</Tabs>


## Verwandte Artikel {#related-articles}

- [Bildschirm konfigurieren](./configure-screen.md)
- [Kartenschaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radius-Lineal und Lineal](./radius-ruler.md)
- [Schnellaktion](./quick-action.md)


> *Zuletzt aktualisiert: Oktober 2023*