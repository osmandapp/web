---
source-hash: c31f972d3a691c26a3a583de116eb13a83d2589b7e5d44d3162198717f9b326f
sidebar_position: 12
title:  Parkposition
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Übersicht {#overview}

Das **Parkpositions**-Plugin hilft Ihnen, den Ort zu speichern und zu verwalten, an dem Sie Ihr Auto geparkt haben. Es ermöglicht Ihnen, eine Markierung auf der Karte zu platzieren, die Parkdauer zu verfolgen und optional eine Kalendererinnerung für das Ende Ihrer Parkzeit einzustellen.

Dieses Plugin ist kostenlos und funktioniert offline mit heruntergeladenen OsmAnd-Karten. Sie können Ihr geparktes Fahrzeug schnell finden, die Gehstrecke dorthin schätzen und den Parkplatz bei Bedarf teilen.

- Sie können einen Parkplatz manuell über das Kontextmenü hinzufügen.
- Bei zeitlicher Begrenzung zeichnet das Plugin sowohl die Start- als auch die Endzeit auf.
- Die Endzeit kann eine Erinnerung im Kalender Ihres Geräts auslösen.
- Parkdetails können später eingesehen oder für die Navigation verwendet werden.

Die Markierung ist temporär und lässt sich leicht entfernen, wenn sie nicht mehr benötigt wird.

Parkplätze werden als **Favoritenpunkte** gespeichert. Um sicherzustellen, dass die Parkmarkierung auf der Karte sichtbar ist, muss [Favoriten](../personal/favorites.md) aktiviert sein.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Park-Widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Park-Widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um einen Parkplatz auf der Karte zu verwenden, müssen Sie die folgenden Einstellungen vornehmen:

1. Aktivieren Sie das [Parkpositions-Plugin](../plugins/index.md#enable--disable) über *Hauptmenü → Plugins*.  
2. Legen Sie einen [Parkplatz](#set-a-spot) auf der Karte über das Kontextmenü fest.
3. (Optional) Fügen Sie das [Park-Widget](#parking-widget) für einen schnelleren Zugriff zum Bildschirm hinzu.  


## Parkplatz auf der Karte {#parking-spot-on-the-map}

Wenn Sie einen Parkplatz markieren, speichert OsmAnd dessen geografische Koordinaten zusammen mit einem Zeitstempel. Wenn benötigt, kann auch eine Zeitbegrenzung und eine Kalendererinnerung hinzugefügt werden. Parkplätze werden als **Favoritenpunkte** gespeichert. Um sicherzustellen, dass die Parkmarkierung auf der Karte sichtbar ist, muss [Favoriten](../personal/favorites.md) aktiviert sein.


### Einen Parkplatz festlegen {#set-a-spot}

Um einen Parkplatz auf der Karte festzulegen, zoomen Sie auf die erforderliche Stufe heran, tippen Sie dann lange auf die Stelle auf der Karte und nehmen Sie im sich öffnenden [Kontextmenü](../map/map-context-menu.md) die Einstellungen vor.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parkplatz in Android festlegen](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Zeitlimits in Android festlegen](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parken in Aktionen in iOS auswählen](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Parkplatz in iOS festlegen](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Um eine Parkmarkierung zu platzieren, zoomen Sie auf der Karte heran, tippen Sie lange auf die gewünschte Stelle und öffnen Sie das [Kontextmenü](../map/map-context-menu.md). Dann:

1. Tippen Sie auf [Aktionen](../map/map-context-menu#actions).
2. Wählen Sie **Als Parkplatz markieren** (*Android*) oder **Parkplatz hinzufügen** (*iOS*).
3. Wählen Sie eine der verfügbaren Optionen:
   - **Zeitlich unbegrenzt** – fügt eine einfache Markierung ohne Countdown hinzu.
   - **Zeitlich begrenztes Parken** – ermöglicht es Ihnen, eine Endzeit festzulegen und optional eine Erinnerung im Kalender Ihres Geräts zu erstellen.
4. Bestätigen Sie, um die Markierung zu platzieren. Die Startzeit wird automatisch gespeichert.

:::info Start Time
Die Startzeit wird immer automatisch eingestellt. Wenn Sie die Endzeit ändern müssen, müssen Sie den Parkplatz löschen und neu erstellen. Erinnerungen werden nur dann zu Ihrem Kalender hinzugefügt, wenn Sie diese Option bei der Einrichtung ausgewählt haben.
:::


### Informiert bleiben {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Park-Widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Verbleibende Zeit in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Park-Widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Parkinformationen in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Sobald ein Parkplatz gespeichert ist, hilft Ihnen OsmAnd, dessen Standort und Zeit über das Kontextmenü oder das optionale [Park-Widget](#parking-widget) zu überwachen.

Sie können die Parkmarkierung anzeigen, indem Sie auf der Karte herauszoomen oder auf das **Park-Widget** tippen, wodurch die Karte auf Ihrem gespeicherten Parkplatz zentriert wird. Das Widget zeigt auch die Entfernung von Ihrer aktuellen Position (oder dem Kartenmittelpunkt) zum Parkplatz an.

Zusätzliche Details werden angezeigt, wenn Sie auf die Parkmarkierung tippen:

- **Startzeit** – der Zeitpunkt, zu dem die Markierung platziert wurde.
- **Verbleibende Zeit** oder **Zeit überschritten** – wenn ein Zeitlimit festgelegt wurde, zeigt dies an, wie viel Zeit noch verbleibt oder seit dem Ablauf vergangen ist.
- Wenn Sie die Kalendererinnerung aktiviert haben, wird sie in der Kalender-App Ihres Geräts angezeigt.


### Zu einem Wegpunkt navigieren {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation zum Parkplatz in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation zum Parkplatz in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Sie können den Parkplatz als Navigationsziel verwenden, um einfach zu Ihrem Fahrzeug zurückzukehren. OsmAnd bietet zwei Hauptmöglichkeiten, die Navigation zum gespeicherten Parkplatz zu starten:

**Über das Navigationsmenü**:

  1. Tippen Sie auf die Schaltfläche **Navigation**.  
  2. Wählen Sie ein Profil.  
  3. Tippen Sie auf **Ziel festlegen** und wählen Sie **Parken** aus der Liste der gespeicherten Punkte.

**Über das Park-Widget**:

  1. Tippen Sie auf das **Park-Widget**.  
  2. Tippen Sie auf die Parkplatzmarkierung.  
  3. Wählen Sie **Navigation** und das Profil, das Sie verwenden möchten.


### Einen Parkplatz entfernen {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aktion Parkplatz löschen in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->
  
![Aktion Parkplatz löschen in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

So löschen Sie eine Parkmarkierung:

1. Suchen Sie den Parkplatz auf der Karte oder tippen Sie auf das **Park-Widget**.
2. Tippen Sie auf die Markierung, um das Kontextmenü zu öffnen.
3. Wählen Sie **Löschen** oder **Verwerfen**.

Wenn eine Kalendererinnerung eingestellt war, wird diese ebenfalls automatisch entfernt.


## Park-Widget {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Einen Bereich auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_parking"/>*  

![Park-Widget in Android hinzufügen](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Einen Bereich auswählen → Widget hinzufügen → <Translate ios="true" ids="parking_place"/>*  

![Park-Widget in iOS hinzufügen](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

Das [Park-Widget](../widgets/info-widgets.md#parking-widget) zeigt die Entfernung vom Mittelpunkt des Bildschirms zum gespeicherten Parkplatz an und ermöglicht es Ihnen, die Karte schnell auf diesen Punkt zu zentrieren.

- Das Widget ist nur sichtbar, nachdem eine Parkposition festgelegt wurde.
- Wenn es nicht bereits auf dem Bildschirm angezeigt wird, können Sie es über das Menü [Bildschirm konfigurieren](../widgets/configure-screen.md) hinzufügen.

Um mehr zu erfahren, siehe: [Informations-Widgets – Park-Widget](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)