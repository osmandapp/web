---
source-hash: 72e0583c731b9fa6013d0075ece872e622be90160d3358a8216e374293cf5f00
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



## Überblick {#overview}

Das Plugin **Parkposition** hilft Ihnen, den Ort zu speichern und zu verwalten, an dem Sie Ihr Auto geparkt haben. Es ermöglicht Ihnen, einen Marker auf der Karte zu platzieren, die Parkdauer zu verfolgen und optional eine Kalendererinnerung für das Ende Ihrer Parkzeit festzulegen.

Dieses Plugin ist kostenlos und funktioniert offline mit heruntergeladenen OsmAnd-Karten. Sie können Ihr geparktes Fahrzeug schnell lokalisieren, die Gehdistanz zurückschätzen und bei Bedarf den Parkort teilen.

- Sie können einen Parkplatz manuell über das Kontextmenü hinzufügen.
- Bei zeitlich begrenztem Parken zeichnet das Plugin sowohl die Start- als auch die Endzeit auf.
- Die Endzeit kann eine Erinnerung im Kalender Ihres Geräts auslösen.
- Parkdetails können später eingesehen oder zur Navigation verwendet werden.

Der Marker ist temporär und leicht zu entfernen, sobald er nicht mehr benötigt wird.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Park-Widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Park-Widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um einen Parkplatz auf der Karte zu nutzen, müssen Sie folgende Einstellungen vornehmen:

1. Aktivieren Sie das [Plugin Parkposition](../plugins/index.md#enable--disable) im *Hauptmenü → Plugins*.
2. Setzen Sie einen [Parkplatz](#set-a-spot) auf der Karte über das Kontextmenü.
3. (Optional) Fügen Sie das [Park-Widget](#parking-widget) zum Bildschirm hinzu, um schnelleren Zugriff zu erhalten.


## Parkplatz auf der Karte {#parking-spot-on-the-map}

Wenn Sie einen Parkplatz markieren, speichert OsmAnd dessen geografische Koordinaten zusammen mit einem Zeitstempel. Bei Bedarf können auch eine Zeitbegrenzung und eine Kalendererinnerung hinzugefügt werden.


### Einen Punkt setzen {#set-a-spot}

Um eine Parkposition auf der Karte zu setzen, zoomen Sie auf die gewünschte Ebene, tippen und halten Sie dann auf die Stelle auf der Karte und nehmen Sie im sich öffnenden [Kontextmenü](../map/map-context-menu.md) die Einstellungen vor.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Parkposition in Android setzen](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Zeitlimits in Android setzen](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parken in Aktionen in iOS auswählen](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Parkposition in iOS setzen](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Um einen Parkmarker zu platzieren, zoomen Sie auf der Karte hinein, tippen und halten Sie auf die gewünschte Position und öffnen Sie das [Kontextmenü](../map/map-context-menu.md). Dann:

1. Tippen Sie auf [Aktionen](../map/map-context-menu#actions).
2. Wählen Sie **Als Parkposition markieren** (*Android*) oder **Parkposition hinzufügen** (*iOS*).
3. Wählen Sie eine der verfügbaren Optionen:
   - **Zeitlich unbegrenzt** – fügt einen einfachen Marker ohne Countdown hinzu.
   - **Zeitlich begrenztes Parken** – ermöglicht Ihnen, eine Endzeit festzulegen und optional eine Erinnerung im Kalender Ihres Geräts zu erstellen.
4. Bestätigen Sie, um den Marker zu platzieren. Die Startzeit wird automatisch gespeichert.

:::info Startzeit
Die Startzeit wird immer automatisch festgelegt. Wenn Sie die Endzeit ändern müssen, müssen Sie den Parkplatz löschen und neu erstellen. Erinnerungen werden nur dann zu Ihrem Kalender hinzugefügt, wenn Sie diese Option während der Einrichtung ausgewählt haben.
:::


### Informiert bleiben {#stay-informed}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Park-Widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Restzeit in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Park-Widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Parkinformationen in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Sobald ein Parkplatz gespeichert ist, hilft Ihnen OsmAnd, dessen Standort und Zeitpunkt über das Kontextmenü oder das optionale [Park-Widget](#parking-widget) zu überwachen.

Sie können den Parkmarker anzeigen, indem Sie auf der Karte herauszoomen oder auf das **Park-Widget** tippen, das die Karte auf Ihren gespeicherten Punkt zentriert. Das Widget zeigt auch die Entfernung von Ihrer aktuellen Position (oder dem Kartenzentrum) zum Parkort an.

Zusätzliche Details werden beim Tippen auf den Parkmarker angezeigt:

- **Startzeit** – der Zeitpunkt, zu dem der Marker gesetzt wurde.
- **Restzeit** oder **Zeit überschritten** – wenn ein Zeitlimit festgelegt wurde, zeigt dies an, wie viel Zeit verbleibt oder seit dem Ablauf vergangen ist.
- Wenn Sie die Kalendererinnerung aktiviert haben, wird sie in der Kalender-App Ihres Geräts angezeigt.


### Navigation zu einem Wegpunkt {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Zum Parkplatz in Android navigieren](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zum Parkplatz in iOS navigieren](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Sie können den Parkplatz als Navigationsziel verwenden, um einfach zu Ihrem Fahrzeug zurückzukehren. OsmAnd bietet zwei Hauptmöglichkeiten, um die Navigation zum gespeicherten Parkort zu starten:

**Über das Navigationsmenü**:

  1. Tippen Sie auf die Schaltfläche **Navigation**.
  2. Wählen Sie ein Profil.
  3. Tippen Sie auf **Ziel festlegen** und wählen Sie **Parken** aus der Liste der gespeicherten Punkte.

**Über das Park-Widget**:

  1. Tippen Sie auf das **Park-Widget**.
  2. Tippen Sie auf den Parkplatzmarker.
  3. Wählen Sie **Navigation** und wählen Sie das Profil, das Sie verwenden möchten.


### Einen Punkt entfernen {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Aktion Parken löschen in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Aktion Parken löschen in Android](@site/static/img/map/context_menu_limited_parking.png) -->

![Aktion Parken löschen in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

So löschen Sie einen Parkmarker:

1. Suchen Sie den Parkplatz auf der Karte oder tippen Sie auf das **Park-Widget**.
2. Tippen Sie auf den Marker, um das Kontextmenü zu öffnen.
3. Wählen Sie **Löschen** oder **Verwerfen**.

Wenn eine Kalendererinnerung festgelegt wurde, wird diese ebenfalls automatisch entfernt.


## Park-Widget {#parking-widget}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_parking"/>*

![Park-Widget in Android hinzufügen](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="parking_place"/>*

![Park-Widget in iOS hinzufügen](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

Das [Park-Widget](../widgets/info-widgets.md#parking-widget) zeigt die Entfernung vom Mittelpunkt des Bildschirms zum gespeicherten Parkort an und ermöglicht es Ihnen, die Karte schnell auf diesen Punkt zu zentrieren.

- Das Widget ist nur sichtbar, nachdem eine Parkposition festgelegt wurde.
- Wenn es noch nicht auf dem Bildschirm angezeigt wird, können Sie es über das Menü [Bildschirm konfigurieren](../widgets/configure-screen.md) hinzufügen.

Weitere Informationen finden Sie unter: [Informations-Widgets – Park-Widget](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Mai 2025*