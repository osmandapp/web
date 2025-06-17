---
source-hash: ab1bf0f074bc95cb4e2f827ac1233fdf86d268b226686d37920e9eac0ea746ec
sidebar_position: 10
title: CarPlay
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



## Überblick {#overview}

Das Fahren eines Fahrzeugs und die gleichzeitige Benutzung Ihres Telefons oder Tablets sind aus Sicherheitsgründen in der Regel gesetzlich verboten. [***CarPlay***](https://www.apple.com/ios/carplay/) ist eine Software, die eine angepasste und optimierte Version der OsmAnd-App für die sichere Nutzung während der Fahrt bereitstellt und den Zugriff auf die Navigationsfunktionen der App einfacher und sicherer macht.

Um *CarPlay* auf Ihrem Fahrzeugbildschirm zu verwenden, folgen Sie diesen Schritten:

1. *CarPlay* ist nicht in allen Ländern verfügbar. Stellen Sie sicher, dass es in Ihrem [Land oder Ihrer Region](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) und dass *CarPlay* in Ihrem [Fahrzeugmodell](https://www.apple.com/ios/carplay/available-models/) unterstützt wird.
2. [Verbinden Sie Ihr Gerät](https://support.apple.com/en-gb/HT203412) über einen USB-Anschluss oder drahtlos mit Wi-Fi oder Bluetooth mit dem Multimediasystem Ihres Fahrzeugs. Bei der ersten Verbindung müssen Sie möglicherweise die Berechtigung zur Nutzung von *CarPlay* auf Ihrem Gerät erteilen.
3. Nach dem Verbinden wird die *CarPlay-Oberfläche* mit allen verfügbaren Apps automatisch auf dem Bildschirm Ihres Fahrzeugs angezeigt. Wenn der *CarPlay-Startbildschirm* nicht angezeigt wird, wählen Sie das *CarPlay-Logo* auf dem Fahrzeugdisplay aus.

#### CarPlay-Oberfläche {#carplay-interface}

*CarPlay* ist **keine direkte Nachbildung** der mobilen OsmAnd-App. Es verfügt über eine vereinfachte Oberfläche, die sich auf die wesentlichen Navigationsfunktionen konzentriert, um sicheres Fahren zu gewährleisten. Einige erweiterte Funktionen werden aufgrund von Plattformbeschränkungen nicht unterstützt.

### Verbindungsbildschirm {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Während Ihr Gerät mit *CarPlay* verbunden ist, ist die Karte auf dem App-Bildschirm gesperrt. Dies ist eine beabsichtigte Sicherheitsfunktion, um sicherzustellen, dass die Navigation ausschließlich vom Fahrzeugdisplay aus gesteuert wird, wodurch Ablenkungen während der Fahrt minimiert werden. Lesen Sie die [Häufig gestellten Fragen](#common-issues-and-solutions) zum Verbindungsbildschirm.


### Position der aktuellen Position in CarPlay {#location-position-in-carplay}

Die OsmAnd-App für *CarPlay* ermöglicht Ihnen, die Position der aktuellen Positionsanzeige auf dem Bildschirm anzupassen, um eine Überlappung der Route und anderer wichtiger Kartendetails zu vermeiden.

**So ändern Sie die Position des Indikators:**

- Gehen Sie zu *Menü → Bildschirm konfigurieren → Andere → [Position auf dem Bildschirm (Position der aktuellen Position)](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- Wählen Sie Ihre bevorzugte Platzierung aus:
    - **Automatisch (Standard)**. Die Anwendung verschiebt die Position des Indikators automatisch für den Navigationsmodus oder die freie Bewegung.
    - **Zentriert**. Der Indikator wird in der Mitte des Bildschirms platziert, geeignet für die Standardnavigation.
    - **Unten**. Der Indikator wird näher am unteren Bildschirmrand positioniert, was die Beobachtung umliegender Objekte und komplexer Kreuzungen erleichtert.

### Interaktion mit der Karte {#interaction-with-the-map}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

*CarPlay* zeigt die an den Bildschirm des Fahrzeug-Multimediasystems angepasste OsmAnd-Oberfläche an. Die Interaktion mit der Karte ist beschränkt auf:

- [Meine Position](../widgets/map-buttons.md#my-location-and-zoom). Verschiebt den sichtbaren Teil der Karte, sodass sich Ihre aktuelle Position in der Mitte des Bildschirms befindet.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Ermöglicht das Vergrößern und Verkleinern des sichtbaren Teils der Karte.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- Zuerst müssen Sie das Profil auswählen und konfigurieren, das beim Verbinden mit *CarPlay* verwendet werden soll. Wie Sie ein Profil konfigurieren, können Sie im Artikel [Profile (Einstellungen)](../personal/profiles) nachlesen.
    - Ein praktisches Profil für die Verwendung von *CarPlay* kann *Fahren* sein, und der Routing-Typ kann [Auto-Routing](../navigation/routing/car-based-routing.md) sein.
    - OsmAnd hat einen separaten Punkt [CarPlay-Profil](#carplay-profile) für den schnellen Zugriff auf die Liste der Profile, die für die Verbindung mit *CarPlay* verfügbar sind.
- Damit OsmAnd funktioniert, [verbinden Sie Ihr iOS-Gerät](#overview) mit dem Multimediasystem des Fahrzeugs. Weitere Informationen zum Verbinden und Einrichten Ihres Geräts finden Sie auf der [**CarPlay**](https://support.apple.com/en-us/HT205634)-Website.
- Sie müssen eine der [kostenpflichtigen Versionen oder ein Abonnement von OsmAnd](../purchases/ios#free-and-paid-features) besitzen. Überprüfen Sie dies hier: *Menü → Einstellungen → Käufe*.
- Nach dem Verbinden können Sie ein Ziel festlegen und die OsmAnd-Navigation in *CarPlay* starten.

:::note
Sie benötigen möglicherweise eine Internetverbindung, um OsmAnd in *CarPlay* zu verwenden. Wenn Ihr Gerät nur eingeschränkten Internetzugang hat, können Sie [*Routen vorladen oder erstellen*](../personal/tracks/manage-tracks.md) und diese ohne Internet nutzen.
:::


### Navigation starten {#start-navigation}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-start(1).png)

Um die iOS-Version der OsmAnd-App in *CarPlay* zu verwenden, müssen Sie eine [kostenpflichtige Version der App kaufen oder abonnieren](../purchases/ios#free-and-paid-features).

1. Um eine Route zu erstellen, müssen Sie den [Route-Endpunkt](#select-a-route-endpoint) auf dem *CarPlay-Bildschirm* oder in der [OsmAnd-App](../navigation/setup/route-navigation.md) auswählen.
2. Sie können [Sprachansagen](#voice-prompts) verwenden, um Richtungen oder Meldungen über Probleme auf der Straße anzuhören.
3. Nachdem Sie einen Ort ausgewählt haben, drücken Sie **Start**, um der Route zu folgen.
4. Während der Fahrt zeigt der Fahrzeugbildschirm OsmAnd-Informationen über Ihre aktuelle Position auf der Karte, Fahrtanweisungen, Entfernung zur nächsten Abbiegung, Linien, Ankunftszeit und Entfernung zu Ihrem Ziel an.
    ![CarPlay screen](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. Wenn Sie Ihre Route ändern oder einen anderen Ort auswählen möchten, können Sie die entsprechende Taste auf dem Bildschirm drücken.
6. Nachdem Sie Ihre Route abgeschlossen haben, können Sie *CarPlay* deaktivieren, indem Sie das Gerät vom Multimediasystem Ihres Fahrzeugs trennen.

:::note
Alle Kategorien für die Auswahl des **Route-Endpunkts**, *[Verlauf](#history), [POIs](#poi-categories), [Markierungen](#map-markers), [Suche](#search), [Favoriten](#favorites) und [Tracks](#tracks)* dürfen nicht mehr Listenelemente enthalten, als das Multimediasystem Ihres Fahrzeugs bereitstellt. Typischerweise sind in den meisten Fahrzeugen Listen dynamisch auf 12 oder 24 Elemente beschränkt. Das bedeutet, dass die Liste in *CarPlay* möglicherweise nicht vollständig ist. Die Gesamtzahl der Elemente und die tatsächlich angezeigte Anzahl der Elemente werden unter dem Ordnernamen angegeben.
:::


### CarPlay-Profil {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![Allgemeine Einstellungen Standardprofil Android](@site/static/img/personal/profiles/CarPlay_ios.png)

**CarPlay-Profil** ist ein spezifisches Profil in der OsmAnd-App zur bequemen Nutzung des Audio- und Videosystems Ihres Autos zur weiteren Anzeige dieser Daten auf Ihrem Telefon.

Dieses Profil wird verwendet, solange Ihr Gerät mit *CarPlay* verbunden ist. Tippen Sie im Menü *OsmAnd-Einstellungen* auf das Feld *CarPlay-Profil* und wählen Sie aus der Liste der [für die Verwendung aktivierten Profile](../personal/profiles.md) das Profil aus, mit dem *CarPlay* aktiviert wird.

Sie können ein Profil nicht direkt in *CarPlay* vom Fahrzeugbildschirm aus auswählen. Wählen Sie zuerst das benötigte Profil auf Ihrem Gerät aus und weisen Sie ihm das *CarPlay-Profil* zu. Sie sollten ein Profil auswählen, das dem Fahrzeugtyp entspricht, z. B. *Fahren*, *Lkw*, *Auto*, *Motorrad* oder *Moped*. **Die App wird das *CarPlay-Profil* automatisch aktivieren**, wenn eine Verbindung zu einem Fahrzeug hergestellt wird.

**Warum es wichtig ist, das passende Profil für Ihren Fahrzeugtyp auszuwählen.**

- **Fahrsicherheit.** Verschiedene Transportarten erfordern unterschiedliche Informationen und Einstellungen während der Fahrt. Lkw-Fahrer können beispielsweise in Bezug auf Höhe, Gewicht und Breite ihrer Fahrzeuge eingeschränkt sein, daher bietet das *Lkw*-Profil entsprechende Einschränkungen und Richtlinien. Während Radfahrer und Motorradfahrer Informationen über Radwege und Routen benötigen, ohne Daten für Lkw.
- **Nützlichkeit und Effizienz.** Die Navigation sollte an die Bedürfnisse einer bestimmten Transportart angepasst werden. Dadurch können Benutzer die Zeit reduzieren, die sie benötigen, um optimale Routen zu finden und unnötige Verkehrsbeschränkungen zu vermeiden.


## Route-Endpunkt auswählen {#select-a-route-endpoint}

Sie können zuvor voreingestellte und hinzugefügte [POIs](../map/point-layers-on-map.md#points-of-interest-pois) oder [Favoriten](../personal/favorites.md) oder [Markierungen](../personal/markers.md) als Zielpunkt auswählen. Es ist auch möglich, einen aufgezeichneten oder heruntergeladenen [Track](../personal/tracks/index.md) für die Route auszuwählen, die [Suche](../search/index.md) zu verwenden oder ein Ziel aus dem Routen-[Verlauf](../search/search-history.md) auszuwählen.

1. Wenn Sie einen bestimmten Ort auf der Karte als Endpunkt festlegen möchten, wählen Sie die entsprechende Kategorie von Punkten aus der Liste aus, [POIs](#poi-categories), [Favoriten](#favorites) oder [Kartenmarkierungen](#map-markers).

    - Alle Kategorien können nicht mehr Listenelemente enthalten, als vom Multimediasystem Ihres Fahrzeugs bereitgestellt werden. Das bedeutet, dass die Liste in *CarPlay* unvollständig sein könnte und alle anderen Ordner nur in der OsmAnd-App auf Ihrem Gerät verfügbar sind.
    - Der Ordner [Zuletzt geändert](#folder-last-modified) enthält eine Liste der letzten Ziele, sortiert nach dem Datum der Hinzufügung oder Änderung.
    - Die Liste aller anderen Ordner ist nach der letzten Aktualisierung sortiert, neue Ordner stehen am Anfang der Liste. Ihre Reihenfolge kann nicht manuell geändert werden.
    - Die Liste der Punkte innerhalb von Ordnern ist nach der Entfernung zu ihnen sortiert, beginnend mit dem nächsten. Jeder Punkt hat einen Namen oder Koordinaten, ein geformtes Symbol (Farbe und Symbol sind standardmäßig eingestellt oder von Ihnen in der OsmAnd-Anwendung ausgewählt) und die Entfernung vom Punkt der aktuellen Position zu ihm.
2. Wählen Sie die Kategorie [Verlauf](#history) aus, um eines der letzten Ziele zu finden, die im Speicher des Geräts gespeichert sind.
3. Wählen Sie [Suche](#search) aus, um ein Ziel aus den verfügbaren Suchkategorien einzugeben.

:::note
Während der Fahrt können ausgewählte Punkte [angesagt](#voice-prompts) werden, wenn Sie sich ihnen nähern oder sie passieren. Siehe die Einstellungen für [Sprachansagen](../navigation/guidance/voice-navigation.md) im entsprechenden Artikel, um Sprachbenachrichtigungen einzurichten.
:::


### Verlauf {#history}

![CarPlay screen](@site/static/img/navigation/auto-car/car_play_history.png)

In der **Verlaufskategorie** können Sie ein Ziel aus einer Liste von Endpunkten auswählen.

- Sie sind nach der letzten Verwendung sortiert, beginnend mit den neuesten.
- Dies kann für den schnellen Zugriff auf häufig verwendete Routen praktisch sein.
- Informationen zur Verwendung oder zum Löschen eines Ziels finden Sie im Artikel [Suchverlauf](../search/search-history.md).


### POI-Kategorien {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

*POIs (Points of Interest)* sind eine Art von Punkten, die Orte oder Objekte auf der Karte identifizieren, die für Benutzer wichtig oder interessant sind. Sie werden durch spezielle Symbole hervorgehoben, die in den [OsmAnd-Einstellungen](../map/point-layers-on-map.md#poi-types) bereitgestellt und in Gruppen sortiert sind.

Um eine Route zu einem *POI* in *CarPlay* zu erstellen, folgen Sie diesen Schritten:

1. Wählen Sie den benötigten *POI* aus der Liste der verfügbaren Kategorien aus oder geben Sie den Namen des POI über die [Suche](#search) ein.
2. OsmAnd berechnet die Route und zeigt sie auf dem *CarPlay-Bildschirm* an. Tippen Sie auf die Schaltfläche **Start**, um die Navigation zu diesem Ort zu starten.
3. Abhängig von Ihren OsmAnd-App-Einstellungen und Ihrem Fahrzeug erhalten Sie möglicherweise [Sprachansagen](#voice-prompts), die Sie zu Ihrem Ziel führen.
4. Wenn Sie den Ort erreichen, benachrichtigt Sie die App, dass Sie den *POI* erreicht haben.


### Favoriten {#favorites}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**Favoriten** ist eine der Funktionen von OsmAnd, mit der Sie eine Art Notizen auf der Karte machen können.

- Während der Verwendung von **CarPlay** können Sie keine *Favoriten* hinzufügen oder ändern, sondern nur vorhandene verwenden.
- Die Liste der [Favoriten](../personal/favorites.md#manage-favorites) finden Sie in der OsmAnd-App unter *Menü → Meine Orte → Favoriten*.
- Wenn Sie sie zur Navigation verwenden möchten, konfigurieren Sie alles Notwendige, bevor Sie das Gerät mit dem Multimediasystem Ihres Fahrzeugs verbinden.


### Kartenmarkierungen {#map-markers}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- Um Ihr endgültiges Ziel als *Kartenmarkierung* zu definieren, müssen Sie zunächst die erforderliche Anzahl von Markierungen in der OsmAnd-App auf Ihrem Gerät erstellen, bevor Sie es mit dem Multimediasystem des Fahrzeugs verbinden.
- *Markierungen* müssen in der Liste *Menü → Kartenmarkierung* verfügbar sein.
- Dies wird im Artikel [Markierungen](../personal/markers.md) ausführlicher beschrieben.


### Tracks {#tracks}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

Um eine Route zu einem Ziel zu erstellen, können Sie einen vorhandenen Track auswählen, der in der OsmAnd-App verfügbar ist. Der Track kann im Voraus [heruntergeladen](../personal/tracks/manage-tracks.md#import), als [aufgezeichnet](../plugins/trip-recording.md) verwendet oder in [Route planen](../plan-route/create-route.md) erstellt werden.

Wählen Sie aus der Liste der Tracks im Menü *Menü → Meine Orte → [Tracks](../personal/tracks/manage-tracks.md)* den gewünschten aus, bevor Sie eine Verbindung zum Multimediasystem des Fahrzeugs herstellen, und die Route wird entweder bis zum Start des Tracks aufgebaut oder zeigt die aktuelle Richtung entlang des Tracks an.

Tracks können auch direkt auf dem Fahrzeugbildschirm in *CarPlay* ausgewählt werden. Sie sind in von Ihnen erstellten Ordnern organisiert, und für den einfachen und schnellen Zugriff auf zuletzt geöffnete Tracks gibt es einen speziellen Ordner [Zuletzt geändert](#folder-last-modified).


### Suche {#search}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-search(1).png)

Der Aufruf von **Suche** ermöglicht Ihnen den schnellen Zugriff auf eine Liste des letzten [Zielverlaufs](#history). Ähnlich wie beim [Navigationsmenü](../navigation/setup/route-navigation.md#navigation-menu), in dem alle OsmAnd-Zielmethoden wie Adresse, POIs oder Koordinaten gesammelt sind.

Sie können das *Suchwerkzeug* verwenden, um den benötigten Ort auf der Karte für die Routenplanung aus jeder verfügbaren Suchkategorie zu finden.

- [Adresse](../search/search-address.md). Beginnen Sie mit der Eingabe der Adresse im Suchfeld.
- [POI](../search/search-poi.md) und [Benutzerdefinierter POI](../search/search-poi.md). Die Liste der ähnlichen Namen in der Nähe zeigt auch POIs oder deren Kategorien an.
- [Koordinatensuche](../search/search-address#coordinates-search). Geben Sie die Koordinaten ein, um den Punkt auf der Karte zu finden.

#### Suchprioritäten für Adressen {#address-search-priorities}

Die CarPlay-Suchfunktion priorisiert Straßen und Hausnummern bei der **Suche nach Adressen**.

- Straßen und Hausnummern werden zuerst angezeigt, wenn Sie nach einer Adresse suchen. Dadurch wird sichergestellt, dass relevante Adressinformationen vor anderen Orten wie Straßen oder Bahnhöfen angezeigt werden.
- Wenn Sie nach einer Stadt suchen, werden zuerst die Straßen innerhalb der Stadt angezeigt, gefolgt von den Hausnummern auf diesen Straßen.


### Ordner zuletzt geändert {#folder-last-modified}

![CarPlay screen](@site/static/img/navigation/auto-car/car_play_last_modified.png)

Die Kategorien *Favoriten* und *Tracks* haben einen speziellen Ordner **Zuletzt geändert**. Da die Liste in diesen Kategorien sehr groß sein kann, da sie alle Ihre vorhandenen Favoriten oder Tracks enthält, ist dieser Ordner für den einfachen und schnellen Zugriff auf Ihre letzten Ziele erforderlich.


## Zusätzliche Funktionen {#additional-features}

Neben den Grundfunktionen der OsmAnd-App in *CarPlay*, die eine bequeme Navigation in Ihrem Fahrzeug ermöglichen, gibt es eine Reihe zusätzlicher Funktionen, die Ihr Erlebnis verbessern und die Navigation personalisierter, komfortabler und effizienter machen.


### Sprachansagen {#voice-prompts}

Die Sprachführung für *CarPlay* ist eine der nützlichsten Navigationsfunktionen von OsmAnd, die Echtzeit-Anleitungen bietet und es dem Fahrer ermöglicht, sich auf die Straße zu konzentrieren. Sprachansagen geben klare Hinweise auf Abbiegungen, Richtungen und andere Navigationsanweisungen und gewährleisten eine sicherere und komfortablere Nutzung des Navigationssystems.

Um Sprachansagen entsprechend dem ausgewählten Profil zu konfigurieren, müssen Sie dies tun, bevor Sie eine Route in der OsmAnd-App auf Ihrem Gerät starten. Informationen zu empfohlenen Einstellungen für *CarPlay* finden Sie im Artikel [Sprachansagen / Benachrichtigungen](../navigation/guidance/voice-navigation.md).


### Eingehende Textnachrichten ansagen {#announce-incoming-text-messages}

Sie können die Benachrichtigungseinstellungen für die OsmAnd-App in den Systemeinstellungen Ihres Geräts ändern. Tippen Sie auf *CarPlay* und wählen Sie dann einen der folgenden Punkte aus:

- *Neue Nachrichten ansagen*
- *Neue Nachrichten stummschalten*
- *Vorherige Einstellung merken*

Sie können Nachrichten auch direkt in *CarPlay* ansagen lassen oder deaktivieren. Lesen Sie, wie die Benachrichtigungsverwaltung unter [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) und [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios) implementiert ist.


### Bildschirm-Warn-Widget {#screen-alert-widget}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

Dieses Informations-Widget kombiniert Warnungstypen wie **Fußgängerüberwege** und **Geschwindigkeitsbegrenzung**.

- Die Arten von Warnungen haben ein unterschiedliches Aussehen, das von der **<Translate android="true" ids="driving_region"/>** abhängt und in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* konfiguriert werden kann.
- In *CarPlay* ist es nicht möglich, die Anzeige von Warnungen einzustellen. Sie müssen das Widget in der Anwendung konfigurieren, bevor Sie die Navigation starten und Ihr Gerät mit dem Fahrzeug verbinden.
- Eine detaillierte Beschreibung der Warnungstypen finden Sie in [diesem Artikel](../widgets/nav-widgets.md#alert-types).
- Informationen zum Einrichten von Bildschirmwarnungen für verfügbare Profile finden Sie im Artikel [Navigationseinstellungen](../navigation/guidance/navigation-settings.md#screen-alerts).


### Tacho {#speedometer}

![CarPlay screen](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

Das **Tacho-Widget** ist ein integriertes Interface-Element, das die *aktuelle Geschwindigkeit* anhand von GPS-Daten und die *Geschwindigkeitsbegrenzung* aus der [OSM-Datenbank](https://wiki.openstreetmap.org/wiki/Key:maxspeed) und den [OsmAnd-Einstellungen](../navigation/guidance/voice-navigation.md#speed-limit) auf dem Bildschirm des Multimediasystems des Fahrzeugs anzeigt.

- Das **Tacho-Widget** ist [*profilabhängig*](../personal/profiles.md), sodass Änderungen der Einstellungen für ein Profil nicht auf ein anderes übertragen werden.
- Es gibt keine Option, die Anzeige des *Tachos* direkt in *CarPlay* einzustellen. Sie müssen ihn für das ausgewählte [Navigationsprofil](#carplay-profile) in der OsmAnd-Anwendung konfigurieren, bevor Sie die Navigation starten und Ihr Gerät mit dem Fahrzeug verbinden.
- Weitere Informationen zum Hinzufügen und Konfigurieren des *Tacho*-Widgets zur Anzeige finden Sie im Artikel [Informations-Widgets](../widgets/info-widgets.md#speedometer).


### Kartenansicht (3D) {#map-appearance-3d}

![Car Play](@site/static/img/navigation/auto-car/car_play_3.png)

Die OsmAnd-App ermöglicht Ihnen die Verwendung der 3D-Kartenansicht auf dem *CarPlay-Bildschirm*, um Ihre Route und Navigation anzuzeigen.

- Die Schaltfläche **3D / 2D** wird auf dem *CarPlay-Bildschirm* angezeigt.
- Sie können durch Tippen auf diese Schaltfläche zwischen den 3D- / 2D-Kartenmodi wechseln.


### Multifunktions-Dashboard {#multifunction-dashboard}

![Car Play](@site/static/img/navigation/auto-car/car_play_4.png)

Die OsmAnd-App kann in *CarPlay* auf dem Bildschirm des Fahrzeug-Multimediasystems gleichzeitig mit Musik-, Nachrichten- oder anderen Benachrichtigungs-Apps geöffnet und verwendet werden.

- Einrichten des Multifunktions-Dashboards auf einem mit *CarPlay* verbundenen Telefon oder auf dem Bildschirm Ihres Fahrzeugsystems.
- Suchen Sie die Schaltfläche für mehrere Fenster und schalten Sie sie um.


## Problem mit der Lautstärkeregelung {#volume-control-issue}

Manchmal verbindet sich *CarPlay* nicht, oder Sie können nichts hören, obwohl es verbunden ist. Manchmal öffnet sich die OsmAnd-App nicht richtig in *CarPlay*. Mögliche Lösungen:

1. In den meisten Fällen bleiben alle **Signale** bei konstanter voller Lautstärke, getrennt von den Audio-Wiedergabeeinstellungen zur gleichen Zeit. Um die Lautstärke der OsmAnd-Navigationsansagen bei Verwendung von *CarPlay* zu ändern, gehen Sie auf dem Bildschirm des Multimediasystems des Fahrzeugs zu *Setup → Stimme → Sprachlautstärke*.
2. Starten Sie das Gerät neu.
3. Stellen Sie sicher, dass *CarPlay* auf Ihrem iPhone aktiviert ist. Gehen Sie dazu wie folgt vor:
   - Gehen Sie in die Einstellungen Ihres Telefons und dann zu *Allgemein*.
   - Gehen Sie in den Allgemeinen Einstellungen zu *CarPlay* und wählen Sie *Meine Autos*. Hier können Sie Ihr Auto anpassen, indem Sie es vergessen oder wieder verbinden.
4. Stellen Sie sicher, dass Ihr Bluetooth verbunden ist.
5. Überprüfen Sie das USB-Kabel.
6. Aktualisieren Sie Ihr Betriebssystem regelmäßig.
7. Überprüfen Sie, ob *CarPlay* in Ihrer [Region](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) unterstützt wird.
8. Wenn Sie ein VPN auf Ihrem iPhone verwenden, kann dies dazu führen, dass *CarPlay* nicht funktioniert. Versuchen Sie, das VPN zu deaktivieren, und prüfen Sie, ob dies dazu beiträgt, dass *CarPlay* funktioniert.


## Verwandte Artikel {#related-articles}

- [Profile (Einstellungen)](../personal/profiles.md)
- [Importieren/Exportieren](../personal/import-export.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

1. Häufige Fragen zum Verbindungsbildschirm:
    - *Warum kann ich die App nicht von meinem Telefon aus steuern, wenn es mit CarPlay verbunden ist?*
        Aus Sicherheitsgründen ist der OsmAnd-App-Bildschirm auf Ihrem Telefon gesperrt, während er mit CarPlay verbunden ist. Sie können nur über das Fahrzeugdisplay mit der App interagieren.
    - *Kann ich den gesperrten Bildschirm deaktivieren und die App auf meinem Telefon verwenden?*
        Nein, CarPlay erzwingt diese Einschränkung, um Ablenkungen während der Fahrt zu vermeiden.
    - *Was soll ich tun, wenn mein Telefon und das Fahrzeugdisplay getrennt zu sein scheinen?*
        Stellen Sie sicher, dass Ihr Gerät ordnungsgemäß über USB oder Bluetooth verbunden ist.
        Starten Sie das Infotainmentsystem Ihres Autos und die OsmAnd-App neu, wenn die Verbindung instabil ist.

> *Zuletzt aktualisiert: Januar 2025*