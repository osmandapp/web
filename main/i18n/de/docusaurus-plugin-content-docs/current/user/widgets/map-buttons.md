---
source-hash: 27c365e2cc23607b9c9893a7baf13d93386a9e23a925c712b829dec94e7a4355
sidebar_position: 2
title:  Karten-Schaltflächen
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

Karten-Schaltflächen, einschließlich *Zoom*, *Suchen*, *Wegbeschreibung*, *Kompass*, *Mein Standort*, *3D-Modus* und *Menü*, sind die primären Steuerelemente für die Interaktion mit der Karte. Jede Schaltfläche bietet spezifische Funktionen, um Ihre Navigation und Kartennutzung zu verbessern.


## Mein Standort und Zoom {#my-location-and-zoom}

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

Verwenden Sie diese Schaltflächen, um zu steuern, wie die Karte auf dem Bildschirm Ihres Geräts angezeigt wird:

- **Mein Standort**. Zeigt an, ob die Mitte der Karte mit der aktuellen Geolocation Ihres Geräts synchronisiert ist.
- **Zoom**. Ermöglicht Ihnen, den Zoomfaktor der Karte anzupassen, um mehr oder weniger Details anzuzeigen.
Wenn Sie weitere Informationen zur Verwendung dieser Schaltflächen wünschen, lesen Sie den Artikel [Interaktion mit der Karte](../map/interact-with-map.md#my-location-and-zoom).


## Wegbeschreibung {#directions}

![Directions button allows](@site/static/img/widgets/directions_button_allows.png)

Die Schaltfläche **Wegbeschreibung** ist für die Routenplanung und Navigation unerlässlich:

- [Eine Route erstellen](../navigation/index.md). Verwenden Sie diese Schaltfläche, um eine Route zu erstellen.
- [Navigation starten](../navigation/index.md). Starten Sie die Turn-by-Turn-Navigation.
- Im Navigationsmodus ist die Schaltfläche *Wegbeschreibung* standardmäßig nicht sichtbar, erscheint aber nach einem kurzen Tippen auf die Karte.

Anzeigestatus der Schaltfläche *Wegbeschreibung*:

- Das *graue Standardsymbol* zeigt an, dass die Route noch nicht erstellt wurde. Durch Tippen auf dieses Symbol wird die Funktion [Routeneinrichtung](../navigation/setup/route-navigation.md) geöffnet.
- Das *blaue Standardsymbol* zeigt an, dass die Route erstellt wurde, die Navigation aber noch nicht gestartet wurde. Durch Tippen auf dieses Symbol wird die Funktion [Routeneinrichtung](../navigation/setup/route-navigation.md#start--stop-navigation) geöffnet.
- Das *blaue Pfeilsymbol* zeigt an, dass die Navigation aktiv ist. Durch Tippen auf dieses Symbol werden die [Details der aktuellen Route](../navigation/setup/route-details.md) geöffnet.


## Karte konfigurieren {#configure-map}

![Configure Map](@site/static/img/widgets/configure_map.png)

Die Schaltfläche **Karte konfigurieren** bietet Zugriff auf das Menü [Karte konfigurieren](../map/configure-map-menu.md). Das Symbol spiegelt auch das [Aktuelle App-Profil](../personal/profiles.md) wider, sodass Sie verschiedene Profile identifizieren und zwischen ihnen wechseln können.


## Hauptmenü {#main-menu}

![Main menu button](@site/static/img/widgets/main_menu_button.png)

Die Schaltfläche [**Hauptmenü**](../start-with/main-menu.md) öffnet das allgemeine Menü und gewährt Zugriff auf [alle Anwendungsfunktionen](../start-with/main-menu.md). Im Navigationsmodus ist diese Schaltfläche standardmäßig ausgeblendet und wird nach einem kurzen Tippen auf die Karte sichtbar.


## Suche {#search}

![Search button](@site/static/img/widgets/search_button.png)

Die Schaltfläche Suchen bietet schnellen Zugriff auf die [Suchfunktionen](../search/index.md), mit denen Sie Orte, Points of Interest und andere Informationen direkt von der Karte aus finden können.


## Kompass {#compass}

Die Kompass-Schaltfläche zeigt die Ausrichtung der Karte auf dem Bildschirm Ihres Geräts an. Weitere Informationen finden Sie im Artikel [Interaktion mit der Karte](../map/interact-with-map.md#map-orientation--compass).


### Karten-Ausrichtungsmodi {#map-orientation-modes}

- ![Kompass](@site/static/img/widgets/map_butt_manually_ios.png)  
**Manuell gedreht**. In diesem Modus können Sie die Karte mit einer [Zwei-Finger-Geste (Zwei-Finger-Berührung und Drehung)](../map/interact-with-map.md#gestures) nach Ihren Wünschen manuell drehen. Die Ausrichtung der Karte hängt nicht von der Fahrtrichtung oder dem Kompass des Geräts ab, sondern wird von Ihnen bestimmt. Der manuelle Drehmodus ist standardmäßig eingestellt.

- ![Kompass](@site/static/img/widgets/map_butt_movem_dir_ios.png)  
**Bewegungsrichtung**. In diesem Modus wird die Karte entsprechend der Richtung Ihrer Bewegung ausgerichtet, die aus GPS Daten bekannt ist. Wenn Sie sich beispielsweise nach rechts drehen, dreht sich die Karte ebenfalls, sodass die rechte Seite des Bildschirms der Bewegungsrichtung entspricht. Details finden Sie unter [Karte nach Peilung drehen](../map/interact-with-map#rotate-map-by-bearing).

- ![Kompass](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Kompassrichtung**. Das Symbol auf der Schaltfläche zeigt den tatsächlichen Norden an, und die Karte bewegt sich entsprechend der Kompassausrichtung Ihres Geräts. Auf diese Weise entspricht der Norden der Karte dem realen Norden, und Sie können die Ausrichtung der Karte relativ zum umliegenden Gelände sehen. Ihr Gerät sollte sich in einer möglichst horizontalen Position befinden. Wenn Ihr Gerät keinen Kompasssensor hat, bleibt die Ausrichtung der Karte unverändert.

- ![Kompass](@site/static/img/widgets/map_butt_north_up_ios.png)  
**Norden oben**. In diesem Modus ist die Karte fest (mit einer harten Sperre) in Richtung Norden ausgerichtet, was der oberen Kante Ihres Geräts entspricht. Unabhängig von der Bewegungsrichtung des Geräts bleibt die Karte statisch, und Sie können Ihre Position im Verhältnis zu Ihrer Umgebung sehen. Die Karte hat keine automatische oder manuelle Drehung.

### Verhalten beim Tippen auf den Kompass {#compass-tapping-behavior}

Die Kompass-Schaltfläche bietet mehrere Aktionen zur Steuerung der Kartenausrichtung:

- **Einmal tippen**. Ein *einmaliges Tippen* auf die [Kompass-Schaltfläche](../widgets/map-buttons.md#compass) (in der oberen linken Ecke des Bildschirms, wenn [sichtbar](../widgets/map-buttons.md#display-options)) richtet die Kartenausrichtung in allen Kartenausrichtungsmodi sofort *nach Norden* aus. Selbst wenn sich die Karte im Modus *Kompassrichtung* befindet, dreht sie sich für einen Moment und kehrt dann zur dynamischen Ausrichtung dieses Modus zurück.

- **Doppelt tippen**. Um schnell zwischen den Kartenausrichtungsmodi zu wechseln, z. B. der GPS-Richtung zu folgen oder sich mit dem Gerät zu drehen, *tippen Sie doppelt* auf die [Kompass-Schaltfläche](../widgets/map-buttons.md#compass) (wenn [sichtbar](../widgets/map-buttons.md#display-options)).

- **Langes Tippen**. Mit einem *langen Tippen* auf die [Kompass-Schaltfläche](../widgets/map-buttons.md#compass) (wenn [sichtbar](../widgets/map-buttons.md#display-options)) können Sie eine Liste aller Kartenausrichtungsmodi öffnen und den gewünschten auswählen. Diese Liste kann auch in den [Profileinstellungen](../personal/profiles.md#appearance) geöffnet werden.


### Anzeigeoptionen {#display-options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Kompass-Widget](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Kompass-Widget](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs>

Das Kompass-Symbol auf der Schaltfläche zeigt immer nach Norden. Sie können auswählen, wie die Kompass-Schaltfläche auf dem Bildschirm angezeigt wird.

- **Immer sichtbar**. Die Schaltfläche verschwindet nicht vom Bildschirm.
- **Immer ausgeblendet**. In diesem Fall können Sie die Kartenausrichtung nicht schnell ändern, aber die Schaltfläche nimmt keinen Platz auf dem Bildschirm ein.
- **Sichtbar, wenn die Karte gedreht ist**. Die Schaltfläche ist nicht sichtbar, solange der Kompass am oberen Rand Ihres Geräts nach Norden zeigt.  


## 3D-Modus {#3d-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![3D-Modus](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![3D-Modus](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>  

- *<Translate android="true" ids="shared_string_hidden"/>*. Wenn dieser Modus für eine Schaltfläche ausgewählt ist, müssen Sie eine Geste verwenden, um die Kartenansicht zu ändern. Tippen Sie mit zwei Fingern auf die Karte und bewegen Sie sie nach oben und unten, um die Neigung der Karte anzupassen.  
- *<Translate android="true" ids="shared_string_visible"/>*. Die Schaltfläche wird immer auf dem Kartenbildschirm angezeigt.
- *<Translate android="true" ids="visible_in_3d_mode"/>*. Die Schaltfläche wird auf dem Kartenbildschirm angezeigt, wenn Sie die Kartenansicht mit einer [*Zwei-Finger- und Bewegungsgeste*](../map/interact-with-map.md#gestures) ändern.  

### Zusätzliche Einstellungen {#additional-settings}

1. **Schaltfläche anzeigen**. (*Für Android*) Die Einstellung für die Schaltfläche *3D-Modus* wird in der Liste des Konfigurationsbildschirms nur angezeigt, wenn die Karten-Rendering-Engine [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) ausgewählt ist.

2. **Speichert den Winkel**. Nach dem Wechsel in den 3D-Modus und der manuellen Änderung des Winkels mit einer Geste wird der Winkel gespeichert und beim nächsten Aktivieren des 3D-Modus verwendet. Diese Option wird nur für das zu diesem Zeitpunkt ausgewählte Profil gespeichert.

3. **Bewegen**. Sie können die Schaltfläche an einer beliebigen Stelle auf dem Bildschirm Ihres Geräts platzieren. Halten Sie dazu die Schaltfläche gedrückt und ziehen Sie sie, ohne den Finger abzunehmen, an die gewünschte Stelle.

4. **Schaltflächenposition**. Die Position der Schaltfläche auf der Karte auf dem Anwendungsbildschirm wird für jedes Profil separat gespeichert.

5. **Empfehlung**. Es wird empfohlen, die [Schummerungskarte](../plugins/topography.md#hillshade-slope-and-altitude-layers) für die ausgewählte Region herunterzuladen und zu aktivieren.


## Benutzerdefinierte Schaltflächen {#custom-buttons}

Das [Schnellaktions-Widget](./quick-action.md) ist eine konfigurierbare Schaltfläche mit verschiedenen Aktionstypen, die zugewiesen werden können. Es ist auch möglich, mehrere [Benutzerdefinierte Schaltflächen](./quick-action.md#custom-buttons) zu haben.


## Aussehen der Karten-Schaltfläche {#map-button-appearance}

<InfoAndroidOnly/>

| Standardschaltflächen | Benutzerdefinierte Schaltflächen |
| :--- | :--- |
| ![Aussehen der Karten-Schaltfläche](@site/static/img/widgets/map_butt_appearance_default_andr.png) | ![Aussehen der Karten-Schaltfläche](@site/static/img/widgets/map_butt_appearance_custom_andr.png) |

Einstellungen für das Aussehen der Karten-Schaltfläche sind über die folgenden Menüs verfügbar:

- *Menü → Bildschirm konfigurieren → Schaltflächen → Standardschaltflächen*
- *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Drei-Punkte-Menü → Aussehen*

Durch Anpassen des Aussehens von Schaltflächen können Sie Größe, Form, Symbol und Hintergrundtransparenz sowohl für [Schnellaktion (Benutzerdefinierte Schaltflächen)](../widgets/quick-action.md#button-appearance) als auch für [Standardschaltflächen](../widgets/configure-screen.md#button-appearance) anpassen. Diese Flexibilität ermöglicht es Ihnen, die Benutzeroberfläche an Ihre Vorlieben anzupassen und die Benutzerfreundlichkeit zu verbessern.


## Verwandte Artikel {#related-articles}

- [Bildschirm konfigurieren](./configure-screen.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radius-Lineal und Lineal](./radius-ruler.md)
- [Marker-Widgets](./markers.md)
- [Schnellaktion](./quick-action.md)

> *Zuletzt aktualisiert: Februar 2025*