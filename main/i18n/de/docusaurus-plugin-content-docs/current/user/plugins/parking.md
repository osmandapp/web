---
source-hash: 500ba2b5b26271c7c71fe60664983abc42fa4483e3831b67196c41ebe60e8fd4
sidebar_position: 12
title: Parkposition
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## Übersicht {#overview}

Das Plugin **Parkposition** hilft Ihnen, den Standort, an dem Sie Ihr Auto geparkt haben, zu speichern und zu verwalten. Es ermöglicht Ihnen, eine Markierung auf der Karte zu setzen, die Parkdauer zu verfolgen und optional eine Kalendererinnerung für das Ende Ihrer Parkzeit einzustellen.

Dieses Plugin ist kostenlos und funktioniert offline mit heruntergeladenen OsmAnd-Karten. Sie können Ihr geparktes Fahrzeug schnell lokalisieren, die Gehdistanz zurück zum Fahrzeug abschätzen und bei Bedarf den Parkstandort teilen.

- Sie können einen Parkplatz manuell über das Kontextmenü hinzufügen.
- Wenn zeitlich begrenzt, zeichnet das Plugin sowohl die Start- als auch die Endzeit auf.
- Die Endzeit kann eine Erinnerung im Kalender Ihres Geräts auslösen.
- Parkdetails können später eingesehen oder zur Navigation verwendet werden.

Die Markierung ist temporär und lässt sich leicht entfernen, sobald sie nicht mehr benötigt wird.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Park-Widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Park-Widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>

## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um einen Parkplatz auf der Karte zu nutzen, müssen Sie die folgenden Einstellungen vornehmen:

1. Aktivieren Sie das [Parkposition-Plugin](../plugins/index.md#enable--disable) über das *Hauptmenü → Plugins*.
2. Setzen Sie einen [Parkplatz](#set-a-spot) auf der Karte über das Kontextmenü.
3. (Optional) Fügen Sie das [Park-Widget](#parking-widget) zum Bildschirm hinzu, um einen schnelleren Zugriff zu erhalten.

## Parkplatz auf der Karte {#parking-spot-on-the-map}

Wenn Sie einen Parkplatz markieren, speichert OsmAnd dessen geografische Koordinaten zusammen mit einem Zeitstempel. Bei Bedarf können auch eine Zeitbegrenzung und eine Kalendererinnerung hinzugefügt werden.

### Einen Punkt setzen {#set-a-spot}

Um einen Parkplatz auf der Karte zu setzen, zoomen Sie auf die gewünschte Ebene, tippen Sie dann lange auf die Stelle auf der Karte und nehmen Sie im sich öffnenden [Kontextmenü](../map/map-context-menu.md) die Einstellungen vor.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parkplatz in Android setzen](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Zeitlimits in Android setzen](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parken in Aktionen in iOS auswählen](@site/static/img/plugins/parking/ios_set_p_point2.png) ![Parkpunkt in iOS setzen](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Um eine Parkmarkierung zu setzen, zoomen Sie auf der Karte, tippen Sie lange auf den gewünschten Ort und öffnen Sie das [Kontextmenü](../map/map-context-menu.md). Dann:

1. Tippen Sie auf [Aktionen](../map/map-context-menu#actions).
2. Wählen Sie **Als Parkplatz markieren** (*Android*) oder **Parkplatz hinzufügen** (*iOS*).
3. Wählen Sie eine der verfügbaren Optionen:
   - **Zeitlich unbegrenzt** – fügt eine einfache Markierung ohne Countdown hinzu.
   - **Zeitlich begrenztes Parken** – ermöglicht es Ihnen, eine Endzeit festzulegen und optional eine Erinnerung im Kalender Ihres Geräts zu erstellen.
4. Bestätigen Sie, um die Markierung zu platzieren. Die Startzeit wird automatisch gespeichert.

:::info Startzeit
Die Startzeit wird immer automatisch festgelegt. Wenn Sie die Endzeit ändern müssen, müssen Sie den Parkplatz löschen und neu erstellen. Erinnerungen werden nur dann zu Ihrem Kalender hinzugefügt, wenn Sie diese Option während der Einrichtung ausgewählt haben.
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

Sobald ein Parkplatz gespeichert ist, hilft Ihnen OsmAnd, dessen Standort und Zeitplanung über das Kontextmenü oder das optionale [Park-Widget](#parking-widget) zu überwachen.

Sie können die Parkmarkierung sehen, indem Sie auf der Karte herauszoomen oder auf das **Park-Widget** tippen, das die Karte auf Ihren gespeicherten Punkt zentriert. Das Widget zeigt auch die Entfernung von Ihrer aktuellen Position (oder dem Kartenzentrum) zum Parkplatz an.

Zusätzliche Details werden beim Tippen auf die Parkmarkierung angezeigt:

- **Startzeit** – der Zeitpunkt, zu dem die Markierung gesetzt wurde.
- **Verbleibende Zeit** oder **Überzogene Zeit** – wenn ein Zeitlimit festgelegt wurde, zeigt dies an, wie viel Zeit noch verbleibt oder seit dem Ablauf vergangen ist.
- Wenn Sie die Kalendererinnerung aktiviert haben, wird sie in der Kalender-App Ihres Geräts angezeigt.

### Navigation zu einem Wegpunkt {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kurs zum Parkpunkt in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kurs zum Parkpunkt in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Sie können den Parkplatz als Navigationsziel verwenden, um einfach zu Ihrem Fahrzeug zurückzukehren. OsmAnd bietet zwei Hauptwege, um die Navigation zum gespeicherten Parkplatz zu starten:

**Über das Navigationsmenü**:

1. Tippen Sie auf die Schaltfläche **Navigation**.
2. Wählen Sie ein Profil.
3. Tippen Sie auf **Ziel setzen** und wählen Sie **Parken** aus der Liste der gespeicherten Punkte.

**Über das Park-Widget**:

1. Tippen Sie auf das **Park-Widget**.
2. Tippen Sie auf die Parkplatzmarkierung.
3. Wählen Sie **Navigation** und wählen Sie das Profil, das Sie verwenden möchten.

### Einen Punkt entfernen {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aktion Parken löschen in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Aktion Parken löschen in Android](@site/static/img/map/context_menu_limited_parking.png) -->

![Aktion Parken löschen in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Um eine Parkmarkierung zu löschen:

1. Suchen Sie den Parkplatz auf der Karte oder tippen Sie auf das **Park-Widget**.
2. Tippen Sie auf die Markierung, um das Kontextmenü zu öffnen.
3. Wählen Sie **Löschen** oder **Verwerfen**.

Wenn eine Kalendererinnerung eingestellt war, wird diese ebenfalls automatisch entfernt.

## Park-Widget {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_parking"/>*

![Park-Widget in Android hinzufügen](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="parking_place"/>*

![Park-Widget in iOS hinzufügen](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

Das [Park-Widget](../widgets/info-widgets.md#parking-widget) zeigt die Entfernung vom Bildschirmmittelpunkt zum gespeicherten Parkplatz an und ermöglicht es Ihnen, die Karte schnell auf diesen Punkt zu zentrieren.

- Das Widget ist nur sichtbar, nachdem eine Parkposition festgelegt wurde.
- Wenn es noch nicht auf dem Bildschirm ist, können Sie es über das Menü [Bildschirm konfigurieren](../widgets/configure-screen.md) hinzufügen.

Weitere Informationen finden Sie unter: [Informations-Widgets – Park-Widget](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)

## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Mai 2025*