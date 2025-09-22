---
source-hash: 2e2bedc5911717de92c663881adf7da2b32d2027a6c8127a8c9d02651753f230
sidebar_position: 10
title:  CarPlay
android: false
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



## Übersicht {#overview}

Das Führen eines Fahrzeugs und die gleichzeitige Benutzung Ihres Telefons oder Tablets ist aus Sicherheitsgründen in der Regel gesetzlich verboten. [***CarPlay***](https://www.apple.com/ios/carplay/) ist eine Software, die eine angepasste und optimierte Version der OsmAnd-App für die sichere Nutzung während der Fahrt bereitstellt und so den Zugriff auf die Navigationsfunktionen der App einfacher und sicherer macht.

Um *CarPlay* auf dem Bildschirm Ihres Fahrzeugs zu verwenden, gehen Sie wie folgt vor:

1. *CarPlay* ist nicht in allen Ländern verfügbar. Vergewissern Sie sich, dass es in Ihrem [Land oder Ihrer Region](https://www.apple.com/de/ios/feature-availability/#applecarplay-applecarplay) unterstützt wird und dass *CarPlay* in Ihrem [Fahrzeugmodell](https://www.apple.com/de/ios/carplay/available-models/) unterstützt wird.
2. [Verbinden Sie Ihr Gerät](https://support.apple.com/de-de/HT203412) über einen USB-Anschluss oder drahtlos über Wi-Fi oder Bluetooth mit dem Multimediasystem Ihres Fahrzeugs. Bei der ersten Verbindung müssen Sie möglicherweise die Erlaubnis zur Nutzung von *CarPlay* auf Ihrem Gerät erteilen.
3. Sobald die Verbindung hergestellt ist, erscheint die *CarPlay-Oberfläche* automatisch auf dem Bildschirm Ihres Fahrzeugs mit allen verfügbaren Apps. Wenn der *CarPlay-Startbildschirm* nicht erscheint, wählen Sie das *CarPlay-Logo* auf dem Fahrzeugdisplay.

### CarPlay-Oberfläche {#carplay-interface}

*CarPlay* ist **keine direkte Nachbildung** der mobilen OsmAnd-App. Es hat eine vereinfachte Benutzeroberfläche, die sich auf die wesentlichen Navigationsfunktionen konzentriert, um eine sichere Fahrt zu gewährleisten. Einige erweiterte Funktionen werden aufgrund von Plattformbeschränkungen nicht unterstützt.

### Verbindungsbildschirm {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Während Ihr Gerät mit *CarPlay* verbunden ist, ist die Karte auf dem App-Bildschirm gesperrt. Dies ist eine beabsichtigte Sicherheitsfunktion, um sicherzustellen, dass die Navigation ausschließlich über das Autodisplay gesteuert wird, um Ablenkungen während der Fahrt zu minimieren. Lesen Sie die [häufig gestellten Fragen](#common-issues-and-solutions) zum Verbindungsbildschirm.


### Interaktion mit der Karte {#interaction-with-the-map}

![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

*CarPlay* zeigt die an den Bildschirm des Fahrzeug-Multimediasystems angepasste OsmAnd-Oberfläche an. Die Interaktion mit der Karte ist beschränkt auf:

- [Mein Standort](../widgets/map-buttons.md#my-location-and-zoom). Verschiebt den sichtbaren Teil der Karte so, dass Ihr aktueller Standort in der Mitte des Bildschirms liegt.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Ermöglicht das Vergrößern und Verkleinern des sichtbaren Teils der Karte.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- Zuerst müssen Sie das Profil auswählen und konfigurieren, das bei der Verbindung mit *CarPlay* verwendet werden soll. Wie Sie ein Profil konfigurieren, können Sie im Artikel [Profile (Einstellungen)](../personal/profiles) nachlesen.
    - Ein praktisches Profil für die Verwendung von *CarPlay* kann *Fahren* sein, und die Art des Routings kann [Auto-Routing](../navigation/routing/car-based-routing.md) sein.
    - OsmAnd hat einen separaten Punkt [CarPlay-Profil](#carplay-profile) für den schnellen Zugriff auf die Liste der für die Verbindung mit *CarPlay* verfügbaren Profile.
- Damit OsmAnd funktioniert, [verbinden Sie Ihr iOS-Gerät](#overview) mit dem Multimediasystem des Fahrzeugs. Um mehr darüber zu erfahren, wie Sie Ihr Gerät anschließen und einrichten, können Sie die [**CarPlay**](https://support.apple.com/de-de/HT205634) Website besuchen.
- Sie benötigen eine der [kostenpflichtigen oder Abonnement-Versionen von OsmAnd](../purchases/ios#free-and-paid-features). Überprüfen Sie dies hier: *Menü → Einstellungen → Käufe*.
- Sobald die Verbindung hergestellt ist, können Sie ein Ziel festlegen und die OsmAnd-Navigation in *CarPlay* starten.

:::note
Möglicherweise benötigen Sie eine Internetverbindung, um OsmAnd in *CarPlay* zu verwenden. Wenn Ihr Gerät nur begrenzten Internetzugang hat, können Sie [*Routen vorladen oder erstellen*](../personal/tracks/manage-tracks.md) und diese ohne Internet nutzen.
:::


### Navigation starten {#start-navigation}

![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/car-play-start(1).png)

Um die iOS-Version der OsmAnd-App in *CarPlay* zu verwenden, müssen Sie eine [kostenpflichtige Version der App erwerben oder ein Abonnement abschließen](../purchases/ios#free-and-paid-features).

1. Um eine Route zu erstellen, müssen Sie den [Routenendpunkt](#select-a-route-endpoint) auf dem *CarPlay-Bildschirm* oder in der [OsmAnd-App](../navigation/setup/route-navigation.md) auswählen.
2. Sie können [Sprachanweisungen](#voice-prompts) verwenden, um Anweisungen oder Meldungen über Probleme auf der Straße zu hören.
3. Nachdem Sie einen Ort ausgewählt haben, drücken Sie **Start**, um der Route zu folgen.
4. Während der Fahrt zeigt der Fahrzeugbildschirm OsmAnd-Informationen über Ihren aktuellen Standort auf der Karte, Fahranweisungen, die Entfernung zur nächsten Abbiegung, Spuren, die Ankunftszeit und die Entfernung zu Ihrem Ziel an.
    ![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. Wenn Sie Ihre Route ändern oder einen anderen Ort auswählen möchten, können Sie die entsprechende Schaltfläche auf dem Bildschirm drücken.
6. Sobald Sie Ihre Route beendet haben, können Sie *CarPlay* deaktivieren, indem Sie das Gerät von Ihrem Fahrzeug-Multimediasystem trennen.

:::note
Alle Kategorien für die Auswahl des **Routenendpunkts**, *[Verlauf](#history), [POIs](#poi-categories), [Markierungen](#map-markers), [Suche](#search), [Favoriten](#favorites) und [Tracks](#tracks)*, dürfen nicht mehr Listeneinträge enthalten, als Ihr Fahrzeug-Multimediasystem vorsieht. Typischerweise sind die Listen in den meisten Fahrzeugen dynamisch auf 12 oder 24 Einträge begrenzt. Das bedeutet, dass die Liste in *CarPlay* möglicherweise nicht vollständig ist. Die Gesamtzahl der Einträge und die tatsächlich angezeigte Anzahl der Einträge wird unter dem Ordnernamen angegeben.
:::


### CarPlay-Profil {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![Allgemeine Einstellungen Standardprofil Android](@site/static/img/personal/profiles/CarPlay_ios.png)

**CarPlay-Profil** ist ein spezifisches Profil in der OsmAnd-App zur bequemen Nutzung des Audio- und Videosystems Ihres Autos zur weiteren Anzeige dieser Daten auf Ihrem Telefon.

Dieses Profil wird verwendet, solange Ihr Gerät mit *CarPlay* verbunden ist. Tippen Sie auf das Feld *CarPlay-Profil* im Menü *OsmAnd-Einstellungen* und wählen Sie aus der Liste der [zur Verwendung aktivierten Profile](../personal/profiles.md) das Profil aus, mit dem *CarPlay* aktiviert werden soll.

Sie können ein Profil nicht direkt in *CarPlay* vom Fahrzeugbildschirm aus auswählen. Wählen Sie zuerst das gewünschte Profil auf Ihrem Gerät aus und weisen Sie ihm das *CarPlay-Profil* zu. Sie sollten ein Profil wählen, das dem Fahrzeugtyp entspricht, wie z. B. *Fahren*, *LKW*, *Auto*, *Motorrad* oder *Moped*. **Die App aktiviert automatisch** das *CarPlay-Profil*, wenn sie mit einem Fahrzeug verbunden wird.

**Warum es wichtig ist, das passende Profil für Ihren Fahrzeugtyp auszuwählen.**

- **Fahrsicherheit.** Verschiedene Transportmittel erfordern unterschiedliche Informationen und Einstellungen während der Fahrt. LKW-Fahrer können beispielsweise in Höhe, Gewicht und Breite ihrer Fahrzeuge eingeschränkt sein, daher bietet ihnen das *LKW*-Profil entsprechende Einschränkungen und Richtlinien. Radfahrer und Motorradfahrer benötigen hingegen Informationen über Radwege und Routen, ohne Daten für LKWs.
- **Nützlichkeit und Effizienz.** Die Navigation sollte an die Bedürfnisse eines bestimmten Verkehrsmittels angepasst sein. Dies ermöglicht es den Nutzern, die Zeit für die Suche nach optimalen Routen zu verkürzen und unnötige Verkehrsbeschränkungen zu vermeiden.


## Einen Routenendpunkt auswählen {#select-a-route-endpoint}

Sie können zuvor voreingestellte und hinzugefügte [POIs](../map/point-layers-on-map.md#points-of-interest-pois), [Favoriten](../personal/favorites.md) oder [Kartenmarkierungen](../personal/markers.md) als Zielpunkt auswählen. Es ist auch möglich, einen aufgezeichneten oder heruntergeladenen [Track](../personal/tracks/index.md) für die Route auszuwählen, die [Suche](../search/index.md) zu verwenden oder ein Ziel aus dem Routen-[Verlauf](../search/search-history.md) auszuwählen.

1. Wenn Sie einen bestimmten Ort auf der Karte als Endpunkt wünschen, wählen Sie die entsprechende Kategorie von Punkten aus der Liste, [POIs](#poi-categories), [Favoriten](#favorites) oder [Kartenmarkierungen](#map-markers).

    - Alle Kategorien dürfen nicht mehr Listeneinträge enthalten, als von Ihrem Fahrzeug-Multimediasystem vorgesehen sind. Das bedeutet, dass die Liste in *CarPlay* unvollständig sein könnte und alle anderen Ordner nur in der OsmAnd-App auf Ihrem Gerät verfügbar sind.
    - Der Ordner [Zuletzt geändert](#folder-last-modified) enthält eine Liste der letzten Ziele, sortiert nach dem Datum des Hinzufügens oder Änderns.
    - Die Liste aller anderen Ordner ist nach der letzten Aktualisierung sortiert, neue Ordner stehen ganz oben in der Liste. Es ist nicht möglich, ihre Reihenfolge manuell zu ändern.
    - Die Liste der Punkte innerhalb der Ordner ist nach der Entfernung zu ihnen sortiert, beginnend mit dem nächstgelegenen. Jeder Punkt hat einen Namen oder Koordinaten, ein geformtes Symbol (Farbe und Symbol sind standardmäßig festgelegt oder von Ihnen in der OsmAnd-Anwendung gewählt) und die Entfernung vom Punkt des aktuellen Standorts zu ihm.
2. Wählen Sie die Kategorie [Verlauf](#history), um eines der letzten Ziele zu finden, die im Speicher des Geräts gespeichert sind.
3. Wählen Sie [Suche](#search), um ein Ziel aus den verfügbaren Suchkategorien einzugeben.

:::note
Während der Fahrt können ausgewählte Punkte [angesagt](#voice-prompts) werden, wenn Sie sich ihnen nähern oder sie passieren. Sehen Sie sich die Einstellungen für [Sprachanweisungen](../navigation/guidance/voice-navigation.md) im entsprechenden Artikel an, um Sprachbenachrichtigungen einzurichten.
:::


### Verlauf {#history}

![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/car_play_history.png)

In der **Kategorie Verlauf** können Sie ein Ziel aus einer Liste von Endpunkten auswählen.

- Sie sind nach der letzten Verwendung sortiert, beginnend mit den neuesten.
- Dies kann für den schnellen Zugriff auf häufig verwendete Routen praktisch sein.
- Um zu erfahren, wie Sie ein Ziel verwenden oder löschen, lesen Sie den Artikel [Suchverlauf](../search/search-history.md).


### POI-Kategorien {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

*POIs (Points of Interest)* sind eine Art von Punkten, die Orte oder Objekte auf der Karte kennzeichnen, die für Benutzer wichtig oder von Interesse sind. Sie werden durch spezielle Symbole hervorgehoben, die in den [OsmAnd-Einstellungen](../map/point-layers-on-map.md#poi-types) bereitgestellt und in Gruppen sortiert sind.

Um eine Route zu einem *POI* in *CarPlay* zu erstellen, gehen Sie wie folgt vor:

1. Wählen Sie den benötigten *POI* aus der Liste der verfügbaren Kategorien aus oder geben Sie den Namen des POI über die [Suche](#search) ein.
2. OsmAnd berechnet die Route und zeigt sie auf dem *CarPlay-Bildschirm* an. Tippen Sie auf die Schaltfläche **Start**, um die Navigation zu diesem Ort zu beginnen.
3. Abhängig von Ihren OsmAnd-App-Einstellungen und Ihrem Fahrzeug erhalten Sie möglicherweise [Sprachanweisungen](#voice-prompts), die Sie zu Ihrem Ziel führen.
4. Wenn Sie am Ort ankommen, benachrichtigt Sie die App, dass Sie den *POI* erreicht haben.


### Favoriten {#favorites}

![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**Favoriten** ist eine der Funktionen von OsmAnd, mit der Sie eine Art Notizen auf der Karte machen können.

- Während der Nutzung von **CarPlay** können Sie keine *Favoriten* hinzufügen oder ändern, sondern nur vorhandene verwenden.
- Die Liste der [Favoriten](../personal/favorites.md#manage-favorites) finden Sie in der OsmAnd-App unter *Menü → Meine Orte → Favoriten*.
- Wenn Sie sie für die Navigation verwenden möchten, konfigurieren Sie alles Notwendige, bevor Sie das Gerät mit dem Multimediasystem Ihres Fahrzeugs verbinden.


### Kartenmarkierungen {#map-markers}

![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- Um Ihr endgültiges Ziel als *Kartenmarkierung* zu definieren, müssen Sie zuerst die erforderliche Anzahl von Markierungen in der OsmAnd-App auf Ihrem Gerät erstellen, bevor Sie es mit dem Multimediasystem des Fahrzeugs verbinden.
- *Markierungen* müssen in der Liste *Menü → Kartenmarkierungen* verfügbar sein.
- Dies wird im Artikel [Kartenmarkierungen](../personal/markers.md) ausführlicher beschrieben.


### Tracks {#tracks}

![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

Um eine Route zu einem Ziel zu erstellen, können Sie einen vorhandenen Track auswählen, der in der OsmAnd-App verfügbar ist. Der Track kann im Voraus [heruntergeladen](../personal/tracks/manage-tracks.md#import), als [aufgezeichnet](../plugins/trip-recording.md) verwendet oder in [Route planen](../plan-route/create-route.md) erstellt werden.

Wählen Sie aus der Liste der Tracks unter *Menü → Meine Orte → [Tracks](../personal/tracks/manage-tracks.md)* den gewünschten aus, bevor Sie sich mit dem Multimediasystem des Fahrzeugs verbinden, und die Route wird entweder bis zum Start des Tracks aufgebaut oder die aktuelle Richtung entlang des Tracks angezeigt.

Tracks können auch direkt auf dem Fahrzeugbildschirm in *CarPlay* ausgewählt werden. Sie sind in von Ihnen erstellten Ordnern organisiert, und für einen einfachen und schnellen Zugriff auf kürzlich geöffnete Tracks gibt es einen speziellen Ordner [Zuletzt geändert](#folder-last-modified).


### Suche {#search}

![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/car-play-search(1).png)

Der Aufruf der **Suche** ermöglicht Ihnen einen schnellen Zugriff auf eine Liste des letzten [Zielverlaufs](#history). Ähnlich wie im [Navigationsmenü](../navigation/setup/route-navigation.md#navigation-menu), wo alle OsmAnd-Zielmethoden wie Adresse, POIs oder Koordinaten gesammelt sind.

Sie können das *Suchwerkzeug* verwenden, um den gewünschten Ort auf der Karte für die Routenplanung aus jeder verfügbaren Suchkategorie zu finden.

- [Adresse](../search/search-address.md). Beginnen Sie, die Adresse in das Suchfeld einzugeben.
- [POI](../search/search-poi.md) und [Benutzerdefinierter POI](../search/search-poi.md). Die Liste der nahegelegenen ähnlichen Namen zeigt auch POIs oder deren Kategorien an.
- [Koordinatensuche](../search/search-address#coordinates-search). Geben Sie die Koordinaten ein, um den Punkt auf der Karte zu finden.

:::note
Sie können ein bestimmtes Gebäude auswählen, indem Sie nach einem Straßennamen suchen und ihn im Suchfeld in *CarPlay* auswählen. Beachten Sie, dass die Ergebnisliste auf 25 Einträge begrenzt ist. Wenn also Ihr erwartetes Gebäude fehlt, müssen Sie die Hausnummer eingeben.
:::


### Prioritäten bei der Adresssuche {#address-search-priorities}

Die CarPlay-Suchfunktion priorisiert Straßen und Hausnummern bei der **Suche nach Adressen**.

- Straßen und Hausnummern werden zuerst angezeigt, wenn Sie nach einer Adresse suchen. Dies stellt sicher, dass relevante Adressinformationen vor anderen Orten wie Straßen oder Bahnhöfen angezeigt werden.
- Wenn Sie nach einer Stadt suchen, werden zuerst die Straßen innerhalb der Stadt angezeigt, gefolgt von den Hausnummern auf diesen Straßen.


### Ordner "Zuletzt geändert" {#folder-last-modified}

![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/car_play_last_modified.png)

Die Kategorien *Favoriten* und *Tracks* haben einen speziellen Ordner **Zuletzt geändert**. Da die Liste in diesen Kategorien sehr groß sein kann, da sie alle Ihre vorhandenen Favoriten oder Tracks enthält, ist dieser Ordner für einen einfachen und schnellen Zugriff auf Ihre letzten Ziele notwendig.


## Zusätzliche Funktionen {#additional-features}

Zusätzlich zu den Grundfunktionen der OsmAnd-App in *CarPlay*, die eine bequeme Navigation in Ihrem Fahrzeug ermöglichen, gibt es eine Reihe von zusätzlichen Funktionen, die Ihr Erlebnis verbessern und die Navigation persönlicher, komfortabler und effizienter machen.


### Sprachanweisungen {#voice-prompts}

Die Sprachführung für *CarPlay* ist eine der nützlichsten Navigationsfunktionen von OsmAnd. Sie gibt Anweisungen in Echtzeit und ermöglicht es dem Fahrer, sich auf die Straße zu konzentrieren. Die Sprachanweisungen geben Abbiegungen, Richtungen und andere Navigationsanweisungen klar an und gewährleisten so eine sicherere und komfortablere Nutzung des Navigationssystems.

Um die Sprachanweisungen entsprechend dem ausgewählten Profil zu konfigurieren, müssen Sie dies vor dem Start einer Route in der OsmAnd-App auf Ihrem Gerät tun. Empfohlene Einstellungen für *CarPlay* finden Sie im Artikel [Sprachanweisungen / Benachrichtigungen](../navigation/guidance/voice-navigation.md).



### Bildschirm-Warnhinweis-Widget {#screen-alert-widget}

![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

Dieses Informations-Widget kombiniert Warnungstypen wie **Fußgängerüberwege** und **Geschwindigkeitsbegrenzung**.

- Die Arten von Warnungen haben ein unterschiedliches Aussehen, das von der **<Translate android="true" ids="driving_region"/>** abhängt und in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* konfiguriert werden kann.
- In *Car Play* ist es nicht möglich, die Anzeige von Warnungen einzustellen. Sie müssen das Widget in der Anwendung konfigurieren, bevor Sie die Navigation starten und Ihr Gerät mit dem Fahrzeug verbinden.
- Eine detaillierte Beschreibung der Warnungstypen finden Sie in [diesem Artikel](../widgets/nav-widgets.md#alert-types).
- Um Bildschirmwarnungen für verfügbare Profile einzurichten, lesen Sie den Artikel [Navigationseinstellungen](../navigation/guidance/navigation-settings.md#screen-alerts).


### Tachometer {#speedometer}

![CarPlay-Bildschirm](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

Das **Tachometer**-Widget ist ein integriertes Oberflächenelement, das die *aktuelle Geschwindigkeit* mithilfe von GPS-Daten und die *Geschwindigkeitsbegrenzung* aus der [OSM-Datenbank](https://wiki.openstreetmap.org/wiki/Key:maxspeed) und den [OsmAnd-Einstellungen](../navigation/guidance/voice-navigation.md#speed-limit) auf dem Bildschirm des Multimediasystems des Fahrzeugs anzeigt.

- Das **Tachometer-Widget** ist [*profilabhängig*](../personal/profiles.md). Wenn Sie also die Einstellungen für ein Profil ändern, werden sie nicht auf ein anderes angewendet.
- Es gibt keine Möglichkeit, die Anzeige des *Tachometers* direkt in *CarPlay* einzustellen. Sie müssen es für das ausgewählte [Navigationsprofil](#carplay-profile) in der OsmAnd-Anwendung konfigurieren, bevor Sie die Navigation starten und Ihr Gerät mit dem Fahrzeug verbinden.
- Weitere Informationen zum Hinzufügen und Konfigurieren des *Tachometer*-Widgets auf dem Display finden Sie im Artikel [Informations-Widgets](../widgets/info-widgets.md#speedometer).


### Kartenansicht (3D) {#map-appearance-3d}

![Car Play](@site/static/img/navigation/auto-car/car_play_3.png)

Die OsmAnd-App ermöglicht es Ihnen, die 3D-Kartenansicht auf dem *CarPlay-Bildschirm* zu verwenden, um Ihre Route und Navigation anzuzeigen.

- Die **3D / 2D-Schaltfläche** wird auf dem *CarPlay-Bildschirm* angezeigt.
- Sie können zwischen den 3D- / 2D-Kartenmodi wechseln, indem Sie auf diese Schaltfläche tippen.


### Multifunktions-Dashboard {#multifunction-dashboard}

![Car Play](@site/static/img/navigation/auto-car/car_play_4.png)

Die OsmAnd-App kann geöffnet und zur Navigation in *CarPlay* auf dem Bildschirm des Fahrzeug-Multimediasystems gleichzeitig mit Musik-, Nachrichten- oder anderen Benachrichtigungs-Apps verwendet werden.

- Richten Sie das Multifunktions-Dashboard auf einem mit *CarPlay* verbundenen Telefon oder auf dem Bildschirm Ihres Fahrzeugsystems ein.
- Suchen Sie die Mehrfenster-Schaltfläche und schalten Sie sie um.

## Einstellungen {#settings}

### Eingehende Textnachrichten ansagen {#announce-incoming-text-messages}

Sie können die Benachrichtigungseinstellungen für die OsmAnd-App in den Systemeinstellungen Ihres Geräts ändern. Tippen Sie auf *CarPlay* und wählen Sie dann einen der folgenden Punkte aus:

- *Neue Nachrichten ansagen*
- *Neue Nachrichten stummschalten*
- *Vorherige Einstellung merken*

Sie können das Ansagen von Nachrichten auch direkt in *CarPlay* aktivieren oder deaktivieren. Lesen Sie, wie die Benachrichtigungsverwaltung auf [iOS](https://support.apple.com/de-de/HT201925#:~:text=Gehe%20zu%20%E2%80%9CEinstellungen%E2%80%9C%20%3E%20%E2%80%9CMitteilungen%E2%80%9D.,in%20der%20geplanten%20Mitteilungs%C3%BCbersicht%20angezeigt.) und [CarPlay](https://support.apple.com/de-de/guide/iphone/iph9c8438165/ios) implementiert ist.

### Position des Standorts in CarPlay {#location-position-in-carplay}

Die OsmAnd-App für *CarPlay* ermöglicht es Ihnen, die Position des aktuellen Standortindikators auf dem Bildschirm anzupassen, um eine Überlappung der Route und anderer wichtiger Kartendetails zu vermeiden.

**So ändern Sie die Position des Indikators:**

- Gehen Sie zu *Menü → Bildschirm konfigurieren → Sonstiges → [Position des Standorts auf dem Bildschirm](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- Wählen Sie Ihre bevorzugte Platzierung:
    - **Automatisch (Standard)**. Die Anwendung verschiebt die Position des Indikators automatisch für den Navigationsmodus oder die freie Bewegung.
    - **Mitte**. Der Indikator wird in der Mitte des Bildschirms platziert, geeignet für die Standardnavigation.
    - **Unten**. Der Indikator wird näher am unteren Bildschirmrand positioniert, was die Beobachtung von umliegenden Objekten und komplexen Kreuzungen erleichtert.


### Problem mit der Lautstärkeregelung {#volume-control-issue}

Manchmal verbindet sich *CarPlay* nicht, oder Sie können einfach nichts hören, obwohl es verbunden ist. In anderen Fällen öffnet sich die OsmAnd-App nicht richtig in *CarPlay*. Mögliche Lösungen:

1. In den meisten Fällen bleiben alle **Signale** auf konstanter voller Lautstärke, getrennt von den gleichzeitigen Audio-Wiedergabeeinstellungen. Um die Lautstärke der OsmAnd-Navigationsansagen bei Verwendung von *CarPlay* zu ändern, gehen Sie auf dem Bildschirm des Fahrzeug-Multimediasystems zu *Setup → Stimme → Lautstärke der Stimme*.
2. Starten Sie das Gerät neu.
3. Stellen Sie sicher, dass *CarPlay* auf Ihrem iPhone aktiviert ist. Gehen Sie dazu wie folgt vor:
   - Gehen Sie zu den Einstellungen Ihres Telefons und dann zu *Allgemein*.
   - Gehen Sie in den Allgemeinen Einstellungen zu *CarPlay* und wählen Sie *Meine Autos*. Hier können Sie Ihr Auto anpassen, indem Sie es vergessen oder sich erneut damit verbinden.
4. Stellen Sie sicher, dass Ihr Bluetooth verbunden ist.
5. Überprüfen Sie das USB-Kabel.
6. Aktualisieren Sie Ihr Betriebssystem regelmäßig.
7. Überprüfen Sie, ob *CarPlay* in Ihrer [Region](https://www.apple.com/de/ios/feature-availability/#applecarplay-applecarplay) unterstützt wird.
8. Wenn Sie ein VPN auf Ihrem iPhone verwenden, kann dies die Funktion von *CarPlay* verhindern. Versuchen Sie, das VPN zu deaktivieren und zu sehen, ob dies *CarPlay* zum Laufen bringt.


## Verwandte Artikel {#related-articles}

- [Profile (Einstellungen)](../personal/profiles.md)
- [Import / Export](../personal/import-export.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

1. Häufige Fragen zum Verbindungsbildschirm:
    - *Warum kann ich die App nicht von meinem Telefon aus steuern, wenn sie mit CarPlay verbunden ist?*
        Aus Sicherheitsgründen ist der Bildschirm der OsmAnd-App auf Ihrem Telefon gesperrt, während es mit CarPlay verbunden ist. Sie können nur über das Autodisplay mit der App interagieren.
    - *Kann ich den gesperrten Bildschirm deaktivieren und die App auf meinem Telefon verwenden?*
        Nein, CarPlay erzwingt diese Einschränkung, um Ablenkungen während der Fahrt zu vermeiden.
    - *Was soll ich tun, wenn mein Telefon und das Autodisplay getrennt zu sein scheinen?*
        Stellen Sie sicher, dass Ihr Gerät ordnungsgemäß über USB oder Bluetooth verbunden ist.
        Starten Sie das Infotainmentsystem Ihres Autos und die OsmAnd-App neu, wenn die Verbindung instabil ist.