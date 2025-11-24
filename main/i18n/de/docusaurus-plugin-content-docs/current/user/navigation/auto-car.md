---
source-hash: a2a9e792ab8ee0f2ff158933800298acc210697912d8f514205a33fe11063fb8
sidebar_position: 9
title:  Android Auto
ios: false
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

![Android Auto-Bildschirm](@site/static/img/navigation/auto-car/android_auto_overview.png)  

[**Android Auto**](https://www.android.com/auto) ist eine von Google entwickelte Software, die es Nutzern ermöglicht, ihre Android-Geräte mit kompatiblen Multimedia-Systemen von Fahrzeugen zu verbinden. *Android Auto* bietet eine angepasste und optimierte Version der OsmAnd-App für die sichere Nutzung während der Fahrt, was den Zugriff auf die Navigationsfunktionen der App einfacher und sicherer macht.  

Die **Android Auto**-Funktion wird nur bei Verwendung der OsmAnd-App unterstützt, die im [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023) erhältlich ist.

> **HINWEIS**: *Android Auto ist keine direkte Kopie der mobilen OsmAnd-App. Es hat eine vereinfachte Benutzeroberfläche, die sich auf wesentliche Navigationsfunktionen konzentriert, um eine sichere Fahrt zu gewährleisten. Einige erweiterte Funktionen werden aufgrund von Plattformbeschränkungen nicht unterstützt.*


### Verbindungsbildschirm {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)  

Während Ihr Gerät mit *Android Auto* verbunden ist, ist die Karte auf dem App-Bildschirm gesperrt. Dies ist eine beabsichtigte Sicherheitsfunktion, um sicherzustellen, dass die Navigation ausschließlich über das Autodisplay gesteuert wird, um Ablenkungen während der Fahrt zu minimieren. Lesen Sie die [häufig gestellten Fragen](#common-issues-and-solutions) zum Verbindungsbildschirm.


### Startbildschirm {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Wenn Sie die Anwendung öffnen, wird eine Liste von Kategorien angezeigt. Zur einfacheren Navigation können Sie diese ausblenden, indem Sie auf die Schaltfläche in der oberen rechten Ecke des Bildschirms tippen.  

- Tippen Sie auf die Menüschaltfläche, um die Liste der Kategorien auszublenden.
- Tippen Sie in der oberen rechten Ecke des Bildschirms auf die Schaltfläche neben den Funktionsschaltflächen, wenn Sie zur Liste zurückkehren möchten.


### Interaktion mit der Karte {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto* zeigt die an den Bildschirm des Fahrzeug-Multimediasystems angepasste OsmAnd-Oberfläche an. Die Interaktion mit der Karte ist auf Schaltflächen beschränkt, wie zum Beispiel:  

- [OsmAnd-Menü](#destination-points). Enthält eine Liste der verfügbaren Optionen zur Festlegung eines Routenendpunkts oder für eine freie Fahrt.
- [Einstellungen](#voice-prompts). Diese Schaltfläche ist verantwortlich für: 1. den Zugriff zum Ein-/Ausschalten von *Sprachansagen*, wenn Sie auf der ausgewählten Route navigieren; 2. die Anzeige von Routendetails (Zeit und Entfernung) für den nächsten Halt.
- [Suche](#search). Durch Tippen auf die Schaltfläche wird ein Bildschirm mit Zugriff auf die Suchfunktionen geöffnet.
- [Mein Standort](../widgets/map-buttons.md#my-location-and-zoom). Verschiebt den sichtbaren Teil der Karte, sodass Ihr aktueller Standort in der Mitte des Bildschirms liegt.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Ermöglicht das Vergrößern und Verkleinern des sichtbaren Teils der Karte. Die Pinch-to-Zoom-Geste ist für die Kartenvergrößerung verfügbar. Wenn sie vom Head Unit nicht unterstützt wird, erfolgt die Zoom-Anpassung durch Doppel-Tipp und Wischgeste.
- [Kompass](../widgets/map-buttons.md#compass). Zeigt an, welcher der vier verfügbaren Kartenausrichtungsmodi auf dem Bildschirm Ihres Geräts ausgewählt ist.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

### Navigation starten {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

Damit OsmAnd in *Android Auto* funktioniert, müssen Sie Ihr Android-Gerät mit dem Multimediasystem Ihres Fahrzeugs [verbinden](#connection-screen). Das Android-Betriebssystem muss auf Version 6.0 oder höher aktualisiert sein.

- Um herauszufinden, wie Sie Ihr Gerät verbinden und einrichten, besuchen Sie die [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en) Webseiten.  

- Nicht alle Fahrzeuge unterstützen die Geräteverbindung. Überprüfen Sie die [Liste für *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).  

- Sie müssen eine **kostenpflichtige Version** der App erwerben oder ein [Abonnement](../purchases/android.md#free-and-paid-features) abschließen. Überprüfen Sie Ihr aktuelles Abonnement hier: *Menü → Einstellungen → Käufe*.  

- *Android Auto* verwendet das erste [OsmAnd-Fahrprofil](#profile-first) in der Profilliste für die Navigation. Setzen Sie das bevorzugte Profil an die erste Stelle, mit Ausnahme des Profils *Karte ansehen*, da dieses von *Android Auto* nicht gelesen wird. Gehen Sie dazu zu OsmAnd *Menü → Einstellungen → App-Profile → Profilliste bearbeiten* → verschieben Sie Ihr [**Fahrprofil**](#profile-first) an die erste Stelle oder nach dem Profil *Karte ansehen*.  

- Es ist wichtig zu bedenken, dass *Android Auto* eine datenintensive Anwendung ist, einschließlich mobiler Daten, und die Qualität des Systems von der Qualität Ihrer Verbindung und der Geschwindigkeit Ihres Internetzugangs abhängen kann.

### Erstes Profil {#profile-first}

Sie können ein Profil nicht direkt in *Android Auto* auf dem Fahrzeugbildschirm auswählen.  
Wenn Sie auf Ihrem Gerät bereits ein Profil ausgewählt haben, das dem Fahrzeugtyp entspricht, wie z. B. *Fahren*, *LKW*, *Auto*, *Motorrad*, *Moped*, **aktiviert die App automatisch** das entsprechende Profil, wenn Sie sich mit Android Auto verbinden. Wenn Sie beispielsweise ein *LKW*-Profil ausgewählt haben und Ihr Gerät sich mit **Android Auto** verbindet, aktiviert die App dieses Profil.

Wenn Sie auf Ihrem Gerät kein *Fahrprofil* ausgewählt haben, das Ihrem Fahrzeugtyp entspricht, wechselt OsmAnd automatisch zum *Fahren*-Profil. Dies geschieht, um eine grundlegende Navigation zu gewährleisten und mögliche Probleme durch die Verwendung des falschen Profils für einen bestimmten Fahrzeugtyp zu vermeiden.

**Warum das wichtig ist:**

1. **Fahrsicherheit.** Verschiedene Transportmittel erfordern unterschiedliche Informationen und Einstellungen während der Fahrt. LKW-Fahrer können beispielsweise in Höhe, Gewicht und Breite ihrer Fahrzeuge eingeschränkt sein, daher bietet ihnen das *LKW*-Profil entsprechende Einschränkungen und Richtlinien. Radfahrer und Motorradfahrer benötigen hingegen Informationen über Radwege und Routen, ohne Daten für LKWs.

2. **Nützlichkeit und Effizienz.** Die Navigation sollte an die Bedürfnisse eines bestimmten Verkehrsmittels angepasst werden. Dies ermöglicht es den Nutzern, die Zeit für die Suche nach optimalen Routen zu verkürzen und unnötige Verkehrsbeschränkungen zu vermeiden.

3. **Fehlervermeidung.** Das Umschalten auf das *Fahren*-Profil, wenn kein spezifisches Profil für das ausgewählte Verkehrsmittel vorhanden ist, bietet Ihnen ständigen Zugriff auf die minimal notwendigen Einstellungen und Informationen und vermeidet so mögliche Fehler und Missverständnisse während der Fahrt.  


## Zielpunkte {#destination-points}

![Android Auto-Bildschirm](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

Sie können zuvor voreingestellte und hinzugefügte [POIs](../map/point-layers-on-map.md#points-of-interest-pois), [Favoriten](../personal/favorites.md) oder [Markierungen](../personal/markers.md) als Zielpunkt auswählen. Es ist auch möglich, einen aufgezeichneten oder heruntergeladenen [Track](../personal/tracks/manage-tracks.md) für die Route auszuwählen, die [Suche](../search/index.md) zu verwenden, ein Ziel aus dem Routen-[Verlauf](../search/search-history.md) auszuwählen oder eine *freie Fahrt* zu unternehmen.

1. Wenn Sie einen bestimmten Ort auf der Karte als Endpunkt wünschen, wählen Sie die entsprechende Kategorie von Punkten aus der Liste aus: [POIs](#poi-categories), [Favoriten](#favorites) oder [Kartenmarkierungen](#map-markers).  
  
    - Alle Kategorien können nicht mehr Listeneinträge enthalten, als von Ihrem Fahrzeug-Multimediasystem vorgesehen sind. Das bedeutet, dass die Liste in *Android Auto* unvollständig sein könnte und alle anderen Ordner nur in der OsmAnd-App auf Ihrem Gerät verfügbar sind.
    - Der Ordner [Zuletzt geändert](#folder-last-modified) enthält eine Liste der letzten Ziele, sortiert nach dem Datum des Hinzufügens oder Änderns.
    - Die Liste aller anderen Ordner ist nach der letzten Aktualisierung sortiert, neue Ordner stehen ganz oben in der Liste. Es ist nicht möglich, ihre Reihenfolge manuell zu ändern.
    - Die Liste der Punkte innerhalb der Ordner ist nach der Entfernung zu ihnen sortiert, beginnend mit dem nächstgelegenen. Jeder Punkt hat einen Namen oder Koordinaten, ein geformtes Symbol (Farbe und Symbol sind standardmäßig festgelegt oder von Ihnen in der OsmAnd-Anwendung gewählt) und die Entfernung vom Punkt des aktuellen Standorts zu ihm.  

2. Wählen Sie die Kategorie [Verlauf](#history), um eines der letzten Ziele zu finden, die im Speicher des Geräts gespeichert sind.  

3. Wählen Sie [Suche](#search), um ein Ziel aus den verfügbaren Suchkategorien einzugeben.  

4. Wählen Sie **Freie Fahrt**, um eine Reise ohne angegebenen Endpunkt zu unternehmen.

:::note
Während der Fahrt können ausgewählte Punkte [angesagt](#voice-prompts) werden, wenn Sie sich ihnen nähern oder sie passieren. Sehen Sie sich die Einstellungen für [Sprachansagen](../navigation/guidance/voice-navigation.md) im entsprechenden Artikel an, um Sprachbenachrichtigungen einzurichten.
:::  


### Verlauf {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)  

In der Kategorie Verlauf können Sie ein Ziel aus einer Liste von Endpunkten auswählen. Sie sind nach der letzten Verwendung sortiert, beginnend mit der neuesten. Dies kann für den schnellen Zugriff auf häufig verwendete Routen praktisch sein. Um zu erfahren, wie man ein Ziel verwendet oder löscht, lesen Sie den Artikel [Suchverlauf](../search/search-history.md).  


### POI-Kategorien {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

POIs (Points of Interest) sind eine Art von Punkten, die Orte oder Objekte auf der Karte kennzeichnen, die für Benutzer wichtig oder von Interesse sind. Sie werden durch spezielle Symbole hervorgehoben, die in den [OsmAnd-Einstellungen](../map/point-layers-on-map.md#poi-types) bereitgestellt und in Gruppen sortiert sind.  

Um eine Route zu einem POI in *Android Auto* zu erstellen, folgen Sie diesen Schritten:

1. Wählen Sie den benötigten POI aus der Liste der verfügbaren Kategorien aus oder geben Sie den Namen des POI über die [Suche](#search) ein.
2. Durch Tippen auf eine Kategorie wird der folgende Bildschirm mit einer Liste von POIs geöffnet.
3. Durch Tippen auf einen Eintrag in der Liste wird der Navigationsbildschirm geöffnet.
4. OsmAnd berechnet die Route und zeigt sie auf dem *Android Auto*-Bildschirm an. Tippen Sie auf die **Start**-Schaltfläche, um die Navigation zu diesem Ort zu beginnen.
5. Abhängig von den [Einstellungen](../navigation/guidance/navigation-settings.md) Ihrer OsmAnd-App und Ihrem Fahrzeug erhalten Sie möglicherweise [Sprachansagen](#voice-prompts), die Sie zu einem Ziel führen.  


### Favoriten {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>  

*Favoriten* ist eine der Funktionen von OsmAnd, mit der Sie eine Art Lesezeichen (Notizen) auf der Karte erstellen können. Während der Nutzung von *Android Auto* können Sie keine Favoriten hinzufügen oder ändern, sondern nur vorhandene verwenden. Die Liste der [Favoriten](../personal/favorites.md#manage-favorites) finden Sie in der OsmAnd-App unter *Menü → Meine Orte → Favoriten*. Wenn Sie sie für die Navigation verwenden möchten, fügen Sie die erforderlichen Orte zu den Favoriten hinzu, bevor Sie das Gerät mit dem Multimediasystem Ihres Fahrzeugs verbinden.  

Um eine Route zu einem Favoritenpunkt in *Android Auto* zu erstellen, folgen Sie den nachstehenden Schritten:  

1. Durch Tippen auf einen Ordner wird der nächste Bildschirm mit einer Liste von Favoritenordnern geöffnet.
2. Durch Tippen auf einen Eintrag in der Liste wird die Navigation geöffnet.


### Kartenmarkierungen {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Um Ihr endgültiges Ziel als Kartenmarkierung zu definieren, müssen Sie zunächst die erforderliche Anzahl von Markierungen in der OsmAnd-App auf Ihrem Gerät erstellen, bevor Sie es mit dem System verbinden. Die Markierungen müssen in der Liste *Menü → Kartenmarkierung* verfügbar sein. Dies wird im Artikel [Markierungen](../personal/markers.md) ausführlicher beschrieben.


### Tracks {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)  

Um eine Route zu einem Ziel zu erstellen, können Sie einen vorhanden Track auswählen, der in der OsmAnd-App verfügbar ist. Der Track kann im Voraus [heruntergeladen](../personal/tracks/manage-tracks.md#import), als [aufgezeichnet](../plugins/trip-recording.md) verwendet oder in [Route planen](../plan-route/create-route.md) erstellt werden.  

Wählen Sie aus der Liste der Tracks unter *Menü → Meine Orte → [Tracks](../personal/tracks/manage-tracks.md)* den gewünschten aus, bevor Sie sich mit dem Multimediasystem des Fahrzeugs verbinden, und die Route wird entweder bis zum Start des Tracks aufgebaut oder die aktuelle Richtung entlang des Tracks angezeigt.

Tracks können auch direkt auf dem Fahrzeugbildschirm in *Android Auto* ausgewählt werden. Sie sind in von Ihnen erstellten Ordnern organisiert, und für einen einfachen und schnellen Zugriff auf kürzlich geöffnete Tracks gibt es einen speziellen Ordner [Zuletzt geändert](#folder-last-modified).  


### Suche {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Der Übergang zur Suche bietet Ihnen schnellen Zugriff auf eine Liste des letzten [Zielverlaufs](#history). Ähnlich wie im [Navigationsmenü](../navigation/setup/route-navigation.md#navigation-menu), in dem alle OsmAnd-Zielmethoden wie Adresse, POIs oder Koordinaten gesammelt sind.

Sie können das Suchwerkzeug verwenden, um den gewünschten Ort auf der Karte für die Routenplanung aus jeder verfügbaren Suchkategorie zu finden.

- [Adresse](../search/search-address.md) - beginnen Sie, die Adresse in das Suchfeld einzugeben.
- [POI](../search/search-poi.md) und [Benutzerdefinierte POI](../search/search-poi.md) - die Liste der nahegelegenen ähnlichen Namen zeigt auch POIs oder deren Kategorien an.
- [Koordinatensuche](../search/search-address#coordinates-search) - geben Sie die Koordinaten ein, um den Punkt auf der Karte zu finden.  


### Ordner "Zuletzt geändert" {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)  


Die Kategorien Favoriten und Tracks haben einen speziellen Ordner *Zuletzt geändert*. Da die Liste in diesen Kategorien sehr groß sein kann, da sie alle Ihre vorhandenen Favoriten oder Tracks enthält, ist dieser Ordner für einen einfachen und schnellen Zugriff auf Ihre letzten Ziele notwendig.


## Navigationsfunktionen {#navigation-features}

Zusätzlich zu den Grundfunktionen der OsmAnd-App in *Android Auto*, die eine bequeme Navigation in Ihrem Fahrzeug ermöglichen, gibt es eine Reihe von zusätzlichen Funktionen, die Ihr Erlebnis verbessern und die Navigation persönlicher, komfortabler und effizienter machen.  


### Nächste Abbiegung {#next-turn}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

Das Widget **Nächste Abbiegung** zeigt die Entfernung und Art des [nächsten Abbiegemanövers](../widgets/nav-widgets.md#next-turn) und den [Straßennamen](../widgets/nav-widgets.md#street-name) an.

### Routeninformationen {#route-info}

Routeninformationen bestehen aus:

- [Geschätzte Reisezeit](../widgets/nav-widgets.md#time-to-destination),
- [Geschätzte Ankunftszeit](../widgets/nav-widgets.md#time-to-destination),
- [Reiseentfernung](../widgets/nav-widgets.md#distance-to-destination).

Wenn aktiviert, zeigt **[die Widget-Einstellung](#eta-next-stop)** (Routeninformationen) Routendetails für den nächsten Halt ([den Zwischenpunkt](../navigation/setup/route-navigation.md#intermediate-destinations)) an.


### Navigationswarnungen {#navigation-alerts}

![Fehlende Warnung](@site/static/img/navigation/auto-car/missing_alert.png) ![Private Warnung](@site/static/img/navigation/auto-car/private_alert.png)

Hilfreiche Warnungen werden automatisch angezeigt, bevor die Navigation gestartet wird, wenn die Route nicht normal erstellt werden kann. Dies verhindert, dass die Route beim Laden hängen bleibt, und ermöglicht es Ihnen, schnell zu wählen, wie Sie fortfahren möchten.

**Fehlende oder veraltete Karten**

Wenn sich Ihr Ziel außerhalb der heruntergeladenen Kartenbereiche befindet, wird eine Meldung angezeigt und Sie können eine der folgenden Aktionen wählen:
- **Heruntergeladene Karten verwenden**. Die Route wird nur mit den bereits auf Ihrem Gerät gespeicherten Karten erstellt. (Die Route kann unvollständig sein, wenn die erforderlichen Kartendaten nicht verfügbar sind.)
- **Auf dem Telefon anzeigen**. Der Bildschirm zum Herunterladen von Karten wird auf Ihrem Smartphone geöffnet, wo die notwendigen Regionen heruntergeladen werden können. Nach dem Herunterladen wird die Routenberechnung automatisch neu gestartet.

Diese Warnung wird direkt auf dem Fahrzeugbildschirm angezeigt, genau wie in der mobilen App.

**Warnung vor privatem Zugang**

Wenn sich Ihr Ziel in einem privaten oder eingeschränkt zugänglichen Bereich befindet, wird eine Warnung angezeigt und Sie können wählen:
- **Erlauben**. Die Navigation wird fortgesetzt, unter Verwendung privater Straßen, wenn dies erlaubt ist oder Sie Zugang haben.
- **Abbrechen**. Die Navigationsanfrage wird verworfen und der vorherige Bildschirm wiederhergestellt.


### Bildschirm-Warnhinweis-Widget {#screen-alert-widget}

Dieses Informations-Widget kombiniert Warnungstypen wie **Fußgängerüberwege** und **Geschwindigkeitsbegrenzung**.

- Die Arten von Warnungen haben ein unterschiedliches Aussehen, das von der **<Translate android="true" ids="driving_region"/>** abhängt und in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* konfiguriert werden kann.
- In *Android Auto* ist es nicht möglich, die Anzeige von Warnungen einzustellen. Sie müssen das Widget in der Anwendung konfigurieren, bevor Sie die Navigation starten und Ihr Gerät mit dem Fahrzeug verbinden.
- Eine detaillierte Beschreibung der Warnungstypen finden Sie in [diesem Artikel](../widgets/nav-widgets.md#alert-types).
- Informationen zum Einrichten von Bildschirmwarnungen für verfügbare Profile finden Sie im Artikel [Navigationseinstellungen](../navigation/guidance/navigation-settings.md#screen-alerts).  


### Tachometer {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

Das **Tachometer**-Widget ist ein integriertes Oberflächenelement, das die *aktuelle Geschwindigkeit* mithilfe von GPS-Daten und die *Geschwindigkeitsbegrenzung* aus der [OSM-Datenbank](https://wiki.openstreetmap.org/wiki/Key:maxspeed) und den [OsmAnd-Einstellungen](../navigation/guidance/voice-navigation.md#speed-limit) auf dem Multimediabildschirm des Fahrzeugs anzeigt.

- Das **Tachometer-Widget** ist [*profilabhängig*](../personal/profiles.md), d. h. wenn Sie die Einstellungen für ein Profil ändern, werden sie nicht auf ein anderes angewendet.
- Es gibt keine Möglichkeit, die Anzeige des **Tachometer-Widgets** direkt in *Android Auto* anzupassen. Sie müssen es in der OsmAnd-App konfigurieren, bevor Sie die Navigation starten und Ihr Gerät mit dem Fahrzeug verbinden.
- Weitere Informationen zum Hinzufügen und Konfigurieren des *Tachometer*-Widgets auf dem Display finden Sie im Artikel [Informations-Widgets](../widgets/info-widgets.md#speedometer).


### Kartendarstellung (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

Die OsmAnd-App ermöglicht es Ihnen, die 3D-Kartenansicht auf dem *Android Auto*-Bildschirm zu verwenden, um Ihre Route und Navigation anzuzeigen.

- Um diese Funktion zu aktivieren, müssen Sie [Karten-Rendering Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) auswählen.
- Öffnen Sie das Hauptmenü *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* direkt in der OsmAnd-App.
- Nach der Konfiguration der Einstellungen wird die **3D-Schaltfläche** auf dem *Android Auto*-Bildschirm angezeigt, wenn die Kategorienliste für Ziele geschlossen ist.
- Sie können durch Tippen auf diese Schaltfläche zwischen den 3D- und 2D-Kartenmodi wechseln.

### Navigation beenden {#finish-navigation}

![Navigation beenden](@site/static/img/navigation/auto-car/finish_navigation.png)

Wenn die Navigation in Android Auto abgeschlossen ist, erscheint ein spezielles Dialogfeld „Navigation beenden“ auf dem Fahrzeugbildschirm. Es verwendet denselben Ankunftsdetektionsalgorithmus wie die mobile App und hilft Ihnen, Ihre Fahrt schnell abzuschließen oder einen Parkplatz in der Nähe zu finden.

Verfügbare Optionen:
- **Als Parkort markieren**. Speichert Ihre aktuelle Position als Parkort und platziert einen Parkmarker auf der Karte.
- **Parken suchen**. Öffnet den Suchbildschirm mit der vorausgewählten Kategorie Parken, so können Sie leicht nahegelegene Parkbereiche finden.
- **Route neu berechnen**. Erstellt eine neue Route zu Ihrem ursprünglichen Ziel, wenn Sie früher angehalten haben oder weiterfahren möchten.
- **Navigation beenden**. Beendet die Navigation vollständig und kehrt zu der Standardkartenansicht von OsmAnd zurück.

Verhalten beim Trennen von Android Auto:
- Wenn Ihr Telefon sich trennt, wenn das Fahrzeug bereits innerhalb von 100 m vom Ziel ist, stoppt OsmAnd die Navigation automatisch, wechselt zum Standardprofil zurück und es erscheint keine Ankunftsbenachrichtigung auf dem Telefonsbildschirm.
- Wenn die Trennung erfolgt, während Sie stillstehen oder sich langsamer als 1 m/s bewegen (z. B. an einer Tankstelle), pausiert OsmAnd die Navigation vorübergehend. Sie wird automatisch fortgesetzt, wenn das Gerät wieder mit Android Auto verbunden wird.

Dieses Update stellt auch sicher, dass Android Auto-Sitzungen nun korrekt geschlossen werden, unnötigen Akkuverbrauch verhindern und „Fahrt im Gange“-Benachrichtigungen stoppen, sobald die Navigation endet.


## Einstellungen {#settings}

### Sprachansagen {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Sprachansagen sind eine der nützlichsten Funktionen von OsmAnd während der Navigation für *Android Auto*. Sie geben Ihnen Echtzeit-Anweisungen und ermöglichen es dem Fahrer, sich auf die Straße zu konzentrieren. Sprachansagen liefern klare Anweisungen zu Abbiegungen, Richtungen und anderen Navigationsanweisungen und sorgen so für eine sicherere und komfortablere Nutzung des Navigationssystems.  

Um [Sprachansagen](../navigation/guidance/voice-navigation.md) entsprechend dem ausgewählten Profil zu konfigurieren, müssen Sie dies tun, bevor Sie eine Route in der OsmAnd-App auf Ihrem Gerät starten. In *Android Auto* ist nur die Einstellung verfügbar, um alle ausgewählten Sprachansagen gleichzeitig aus- oder einzuschalten (*Einstellungsschaltfläche → Sprachansagen (ein/aus)*).  


### ETA nächster Halt {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

In der OsmAnd-App können Sie einen oder mehrere [Zwischenpunkte](../navigation/setup/route-navigation.md#intermediate-destinations) für die Navigationsroute auswählen.

Um die [**Routeninformationen** für einen Zwischenpunkt (nächster Halt)](#next-turn) zu aktivieren oder zu deaktivieren, gehen Sie zu *Android Auto (OsmAnd) → Einstellungsschaltfläche → Routendetails für den nächsten Halt anzeigen → Ein/Aus*. Diese Option zeigt die Zeit und die Entfernung zum nächsten Halt im [*Routeninfo*-Widget](#route-info) an.


### Kartenmodus {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* und OsmAnd bieten die Möglichkeit, die Karte an die Lichtverhältnisse anzupassen. Im *Tag-Kartenmodus* bleibt das Farbschema hell und kontrastreich, was das Ablesen auch bei hellem Sonnenlicht erleichtert. Im *Nachtmodus* werden die Karten dunkler, was dem Fahrer hilft, sich bei Dunkelheit besser zu orientieren.  

OsmAnd verfügt über [Kartenmodus](../map/vector-maps.md#map-mode)-Optionen, aber wenn Sie die App in *Android Auto* verwenden, werden diese Optionen ignoriert. Stattdessen wird der Modus verwendet, den Sie in den *Android Auto*-Systemeinstellungen für Karten ausgewählt haben.

- Wählen Sie den Tag-Modus oder den Nacht-Modus, um die Kartendarstellung unverändert zu lassen.
- Wenn Sie möchten, dass der Kartenanzeigemodus je nach Tageszeit wechselt, wählen Sie den Automatikmodus.  

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->


### Geteilter Bildschirm {#split-screen}

![Android Auto-Bildschirm](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

Die OsmAnd-App kann in *Android Auto* auf dem Multimediabildschirm des Fahrzeugs gleichzeitig mit Musik-, Nachrichten- oder anderen Benachrichtigungs-Apps geöffnet und zur Navigation verwendet werden. Richten Sie die geteilte Bildschirmanzeige auf einem mit *Android Auto* verbundenen Telefon oder auf dem Bildschirm in Ihrem Fahrzeugsystem ein.  

1. Tippen Sie vom Startbildschirm auf Apps.
2. Tippen Sie auf Einstellungen.
3. Suchen Sie nach Multi-Window und wählen Sie den Schalter.
4. Kehren Sie zum Startbildschirm zurück.  

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->


In den Android Auto-Einstellungen können Sie die Position der Taskleiste und das Layout des Startbildschirms ändern:

- **Position der Taskleiste:**  
  Gehen Sie zu *Android Auto-Einstellungen → Schnellsteuerung für Apps anzeigen* und schalten Sie den Schalter aus. Dadurch wird die Taskleiste von unten an die Seite des Bildschirms verschoben.

- **Layout des Startbildschirms:**  
  Gehen Sie zu *Android Auto-Einstellungen → Layout ändern → Fahrersitzposition ändern*, um das Layout an die Position des Fahrersitzes anzupassen.


## Häufige Probleme und Lösungen {#common-issues-and-solutions}

1. [Problem mit der Kartenausrichtung.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Problem mit der Lautstärkeregelung.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Standortverzögerungen (ANR-Abstürze).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Häufige Fragen zum Verbindungsbildschirm:
    - *Warum kann ich die App nicht von meinem Telefon aus steuern, wenn sie mit Android Auto verbunden ist?*  
        Aus Sicherheitsgründen ist der Bildschirm der OsmAnd-App auf Ihrem Telefon gesperrt, während es mit Android Auto verbunden ist. Sie können nur über das Autodisplay mit der App interagieren.
    - *Kann ich den gesperrten Bildschirm deaktivieren und die App auf meinem Telefon verwenden?*  
        Nein, Android Auto erzwingt diese Einschränkung, um Ablenkungen während der Fahrt zu vermeiden.
    - *Was soll ich tun, wenn mein Telefon und das Autodisplay getrennt zu sein scheinen?*  
        Stellen Sie sicher, dass Ihr Gerät ordnungsgemäß über USB oder Bluetooth verbunden ist.  
        Starten Sie das Infotainmentsystem Ihres Autos und die OsmAnd-App neu, wenn die Verbindung instabil ist.