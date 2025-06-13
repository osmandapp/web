---
source-hash: 3be3e0b1234aafa204632357b26d98724820bfbfafe67f7237cda7aae4d48299
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



## Überblick {#overview}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_overview.png)

[**Android Auto**](https://www.android.com/auto) ist eine von Google entwickelte Software, die es Benutzern ermöglicht, ihre Android-Geräte mit kompatiblen Fahrzeug-Multimediasystemen zu verbinden. *Android Auto* bietet eine angepasste und optimierte Version der OsmAnd-App für die sichere Nutzung während der Fahrt, wodurch der Zugriff auf die Navigationsfunktionen der App einfacher und sicherer wird.

Die **Android Auto**-Funktion wird nur unterstützt, wenn die OsmAnd-App aus dem [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023) verwendet wird.

> **HINWEIS**: *Android Auto ist keine direkte Nachbildung der mobilen OsmAnd-App. Es verfügt über eine vereinfachte Benutzeroberfläche, die sich auf wesentliche Navigationsfunktionen konzentriert, um sicheres Fahren zu gewährleisten. Einige erweiterte Funktionen werden aufgrund von Plattformbeschränkungen nicht unterstützt.*


### Verbindungsbildschirm {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)

Während Ihr Gerät mit *Android Auto* verbunden ist, ist die Karte auf dem App-Bildschirm gesperrt. Dies ist eine beabsichtigte Sicherheitsfunktion, um sicherzustellen, dass die Navigation ausschließlich über das Fahrzeugdisplay gesteuert wird, wodurch Ablenkungen während der Fahrt minimiert werden. Lesen Sie die [häufig gestellten Fragen](#common-issues-and-solutions) zum Verbindungsbildschirm.


### Startbildschirm {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Wenn Sie die Anwendung öffnen, wird eine Liste von Kategorien angezeigt. Für eine einfache Navigation können Sie diese ausblenden, indem Sie auf die Schaltfläche in der oberen rechten Ecke des Bildschirms tippen.

- Tippen Sie auf die Menüschaltfläche, um die Liste der Kategorien auszublenden.
- Tippen Sie in der oberen rechten Ecke des Bildschirms auf die Schaltfläche neben den Funktionsschaltflächen, wenn Sie zur Liste zurückkehren möchten.


### Interaktion mit der Karte {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto* zeigt die an das Fahrzeug-Multimediasystem angepasste OsmAnd-Oberfläche an. Die Interaktion mit der Karte ist auf Schaltflächen beschränkt, wie z. B.:

- [OsmAnd Menü](#destination-points). Enthält eine Liste der verfügbaren Optionen zum Festlegen eines Routenendpunkts oder einer freien Fahrt.
- [Einstellungen](#voice-prompts). Diese Schaltfläche ist zuständig für: 1. Zugriff zum Ein-/Ausschalten von *Sprachansagen*, wenn Sie die ausgewählte Route navigieren; 2. Anzeigen von Routendetails (Zeit und Entfernung) für den nächsten Stopp.
- [Suche](#search). Durch Tippen auf die Schaltfläche wird ein Bildschirm mit Zugriff auf die Suchfunktionen geöffnet.
- [Mein Standort](../widgets/map-buttons.md#my-location-and-zoom). Verschiebt den sichtbaren Teil der Karte so, dass Ihr aktueller Standort in der Mitte des Bildschirms liegt.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Ermöglicht das Vergrößern und Verkleinern des sichtbaren Teils der Karte.
- [Kompass](../widgets/map-buttons.md#compass). Zeigt an, welcher der vier verfügbaren Kartenorientierungsmodi auf dem Bildschirm Ihres Geräts ausgewählt ist.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

### Navigation starten {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

Damit OsmAnd in *Android Auto* funktioniert, müssen Sie Ihr Android-Gerät mit Ihrem Fahrzeug-Multimediasystem [verbinden](#connection-screen). Das Android-Betriebssystem muss auf Version 6.0 oder höher aktualisiert sein.

- Informationen zum Verbinden und Einrichten Ihres Geräts finden Sie auf den [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en)-Websites.

- Nicht alle Fahrzeuge unterstützen die Geräteverbindung. Überprüfen Sie die [Liste für *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).

- Sie müssen eine **kostenpflichtige Version** der App erwerben oder ein [Abonnement](../purchases/android.md#free-and-paid-features) abschließen. Überprüfen Sie Ihr aktuelles Abonnement hier: *Menü → Einstellungen → Käufe*.

- *Android Auto* verwendet das erste [OsmAnd-Fahrprofil](#profile-first) in der Profilliste für die Navigation. Stellen Sie das bevorzugte Profil an die erste Stelle, mit Ausnahme des Profils *Karte durchsuchen*, das von *Android Auto* nicht gelesen wird. Gehen Sie dazu in OsmAnd zu *Menü → Einstellungen → App-Profile → Profilliste bearbeiten* → verschieben Sie Ihr [**Fahr**](#profile-first)-Profil an die erste Stelle oder nach dem Profil *Karte durchsuchen*.

- Es ist wichtig zu bedenken, dass *Android Auto* eine datenintensive Anwendung ist, einschließlich mobiler Daten, und die Qualität des Systems von der Qualität Ihrer Verbindung und der Geschwindigkeit Ihres Internetzugangs abhängen kann.

### Profil zuerst {#profile-first}

Sie können ein Profil nicht direkt in *Android Auto* auf dem Fahrzeugbildschirm auswählen.
Wenn Sie auf Ihrem Gerät bereits ein Profil ausgewählt haben, das dem Fahrzeugtyp entspricht, z. B. *Fahren*, *LKW*, *Auto*, *Motorrad*, *Moped*, **aktiviert die App automatisch** das entsprechende Profil, wenn Sie sich mit Android Auto verbinden. Wenn Sie beispielsweise ein *LKW*-Profil ausgewählt haben und Ihr Gerät sich mit **Android Auto** verbindet, aktiviert die App dieses Profil.

Wenn Sie auf Ihrem Gerät kein *Fahr*-Profil ausgewählt haben, das Ihrem Fahrzeugtyp entspricht, wechselt OsmAnd automatisch zum *Fahr*-Profil. Dies geschieht, um eine grundlegende Navigation zu ermöglichen und mögliche Probleme zu vermeiden, die durch die Verwendung des falschen Profils für einen bestimmten Fahrzeugtyp verursacht werden.

**Warum das wichtig ist:**

1. **Fahrsicherheit.** Verschiedene Transportmittel erfordern unterschiedliche Informationen und Einstellungen während der Fahrt. LKW-Fahrer können beispielsweise in Bezug auf Höhe, Gewicht und Breite ihrer Fahrzeuge eingeschränkt sein, sodass das *LKW*-Profil ihnen entsprechende Einschränkungen und Richtlinien bietet. Radfahrer und Motorradfahrer benötigen Informationen über Radwege und Routen, ohne Daten für LKWs.

2. **Nützlichkeit und Effizienz.** Die Navigation sollte an die Bedürfnisse eines bestimmten Transportmittels angepasst werden. Dies ermöglicht es Benutzern, die Zeit für die Suche nach optimalen Routen zu verkürzen und unnötige Verkehrsbeschränkungen zu vermeiden.

3. **Fehlervermeidung.** Das Umschalten auf das *Fahr*-Profil, wenn kein spezifisches Profil für das ausgewählte Transportmittel vorhanden ist, bietet Ihnen ständigen Zugriff auf die minimal notwendigen Einstellungen und Informationen und vermeidet so mögliche Fehler und Missverständnisse während der Fahrt.


## Zielpunkte {#destination-points}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

Sie können zuvor voreingestellte und hinzugefügte [POIs](../map/point-layers-on-map.md#points-of-interest-pois), [Favoriten](../personal/favorites.md) oder [Markierungen](../personal/markers.md) als Zielpunkt auswählen. Es ist auch möglich, eine aufgezeichnete oder heruntergeladene [Route](../personal/tracks/manage-tracks.md) für die Route auszuwählen, die [Suche](../search/index.md) zu verwenden oder ein Ziel aus der Routen-[Historie](../search/search-history.md) auszuwählen oder eine *freie Fahrt* zu unternehmen.

1. Wenn Sie einen bestimmten Ort auf der Karte als Endpunkt wünschen, wählen Sie die entsprechende Kategorie von Punkten aus der Liste, [POIs](#poi-categories), [Favoriten](#favorites) oder [Kartenmarkierungen](#map-markers).

    - Alle Kategorien können nicht mehr Listenelemente enthalten, als von Ihrem Fahrzeug-Multimediasystem bereitgestellt werden. Das bedeutet, dass die Liste in *Android Auto* unvollständig sein könnte und alle anderen Ordner nur in der OsmAnd-App auf Ihrem Gerät verfügbar sind.
    - Der Ordner [Zuletzt geändert](#folder-last-modified) enthält eine Liste der letzten Ziele, sortiert nach Datum der Hinzufügung oder Änderung.
    - Die Liste aller anderen Ordner ist nach der letzten Aktualisierung sortiert, neue Ordner stehen am Anfang der Liste. Es ist nicht möglich, ihre Reihenfolge manuell zu ändern.
    - Die Liste der Punkte innerhalb von Ordnern ist nach der Entfernung zu ihnen sortiert, beginnend mit dem nächsten. Jeder Punkt hat einen Namen oder Koordinaten, ein geformtes Symbol (Farbe und Symbol standardmäßig oder von Ihnen in der OsmAnd-Anwendung ausgewählt) und die Entfernung vom Punkt des aktuellen Standorts zu ihm.

2. Wählen Sie die Kategorie [Historie](#history), um eines der letzten Ziele zu finden, die im Speicher des Geräts gespeichert sind.

3. Wählen Sie [Suche](#search), um ein Ziel aus den verfügbaren Suchkategorien einzugeben.

4. Wählen Sie **Freie Fahrt**, um eine Reise ohne angegebenen Endpunkt zu unternehmen.

:::note
Während der Fahrt können ausgewählte Punkte [angesagt](#voice-prompts) werden, wenn Sie sich ihnen nähern oder sie passieren. Siehe die Einstellungen für [Sprachansagen](../navigation/guidance/voice-navigation.md) im entsprechenden Artikel, um Sprachbenachrichtigungen einzurichten.
:::


### Historie {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)

In der Kategorie Historie können Sie ein Ziel aus einer Liste von Endpunkten auswählen. Sie sind nach der letzten Verwendung sortiert, beginnend mit dem neuesten. Dies kann für den schnellen Zugriff auf häufig verwendete Routen praktisch sein. Um zu erfahren, wie Sie ein Ziel verwenden oder löschen, lesen Sie den Artikel [Suchhistorie](../search/search-history.md).


### POI-Kategorien {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

POIs (Points of Interest) sind eine Art von Punkten, die Orte oder Objekte auf der Karte identifizieren, die für Benutzer wichtig oder interessant sind. Sie werden durch spezielle Symbole hervorgehoben, die in den [OsmAnd Einstellungen](../map/point-layers-on-map.md#poi-types) bereitgestellt und in Gruppen sortiert sind.

Um eine Route zu einem POI in *Android Auto* zu erstellen, gehen Sie wie folgt vor:

1. Wählen Sie den benötigten POI aus der Liste der verfügbaren Kategorien aus oder geben Sie den Namen des POI über die [Suche](#search) ein.
2. Durch Tippen auf eine Kategorie wird der folgende Bildschirm mit einer Liste von POIs geöffnet.
3. Durch Tippen auf ein Element in der Liste wird der Navigationsbildschirm geöffnet.
4. OsmAnd berechnet die Route und zeigt sie auf dem *Android Auto*-Bildschirm an. Tippen Sie auf die Schaltfläche **Start**, um die Navigation zu diesem Ort zu starten.
5. Abhängig von Ihren OsmAnd-App-[Einstellungen](../navigation/guidance/navigation-settings.md) und Ihrem Fahrzeug erhalten Sie möglicherweise [Sprachansagen](#voice-prompts), die Sie zu einem Ziel führen.


### Favoriten {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>

*Favoriten* ist eine der Funktionen von OsmAnd, mit der Sie eine Art Lesezeichen (Notizen) auf der Karte erstellen können. Während Sie *Android Auto* verwenden, können Sie keine Favoriten hinzufügen oder ändern, sondern nur vorhandene verwenden. Die Liste der [Favoriten](../personal/favorites.md#manage-favorites) finden Sie in der OsmAnd-App unter *Menü → Meine Orte → Favoriten*. Wenn Sie sie für die Navigation verwenden möchten, fügen Sie die erforderlichen Orte zu den Favoriten hinzu, bevor Sie das Gerät mit Ihrem Fahrzeug-Multimediasystem verbinden.

Um eine Route zu einem Favoritenpunkt in *Android Auto* zu erstellen, gehen Sie wie folgt vor:

1. Durch Tippen auf einen Ordner wird der nächste Bildschirm mit einer Liste von Favoritenordnern geöffnet.
2. Durch Tippen auf ein Element in der Liste wird die Navigation geöffnet.


### Kartenmarkierungen {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Um Ihr endgültiges Ziel als Kartenmarkierung festzulegen, müssen Sie zunächst die erforderliche Anzahl von Markierungen in der OsmAnd-App auf Ihrem Gerät erstellen, bevor Sie es mit dem System verbinden. Die Markierungen müssen in der Liste *Menü → Kartenmarkierung* verfügbar sein. Dies wird im Artikel [Markierungen](../personal/markers.md) ausführlicher beschrieben.


### Routen {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)

Um eine Route zu einem Ziel zu erstellen, können Sie eine vorhandene Route auswählen, die in der OsmAnd-App verfügbar ist. Die Route kann im Voraus [heruntergeladen](../personal/tracks/manage-tracks.md#import), als [aufgezeichnet](../plugins/trip-recording.md) verwendet oder in [Route planen](../plan-route/create-route.md) erstellt werden.

Wählen Sie aus der Liste der Routen im *Menü → Meine Orte → [Routen](../personal/tracks/manage-tracks.md)* die gewünschte aus, bevor Sie sich mit dem Fahrzeug-Multimediasystem verbinden, und die Route wird entweder bis zum Start der Route aufgebaut oder die aktuelle Richtung entlang der Route angezeigt.

Routen können auch direkt auf dem Fahrzeugbildschirm in *Android Auto* ausgewählt werden. Sie sind in Ordnern organisiert, die Sie erstellt haben, und für einen einfachen und schnellen Zugriff auf zuletzt geöffnete Routen gibt es einen speziellen Ordner [Zuletzt geändert](#folder-last-modified).


### Suche {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Die Suche bietet Ihnen schnellen Zugriff auf eine Liste der letzten [Zielhistorie](#history). Ähnlich wie beim [Navigationsmenü](../navigation/setup/route-navigation.md#navigation-menu), in dem alle OsmAnd-Zielmethoden wie Adresse, POIs oder Koordinaten gesammelt sind.

Sie können das Suchwerkzeug verwenden, um den benötigten Ort auf der Karte für die Routenplanung aus jeder verfügbaren Suchkategorie zu finden.

- [Adresse](../search/search-address.md) - beginnen Sie, die Adresse in das Suchfeld einzugeben.
- [POI](../search/search-poi.md) und [Benutzerdefinierter POI](../search/search-poi.md) - die Liste der ähnlichen Namen in der Nähe zeigt auch POIs oder deren Kategorien an.
- [Koordinatensuche](../search/search-address#coordinates-search) - geben Sie die Koordinaten ein, um den Punkt auf der Karte zu finden.


### Ordner Zuletzt geändert {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)


Die Kategorien Favoriten und Routen haben einen speziellen Ordner *Zuletzt geändert*. Da die Liste in diesen Kategorien sehr groß sein kann, da sie alle Ihre vorhandenen Favoriten oder Routen enthält, ist dieser Ordner für den einfachen und schnellen Zugriff auf Ihre letzten Ziele erforderlich.


## Navigationsfunktionen {#navigation-features}

Zusätzlich zu den grundlegenden Funktionen der OsmAnd-App in *Android Auto*, die eine bequeme Navigation in Ihrem Fahrzeug ermöglichen, gibt es eine Reihe zusätzlicher Funktionen, die Ihr Erlebnis verbessern und die Navigation personalisierter, komfortabler und effizienter gestalten.


### Nächste Abbiegung & Routeninfo {#next-turn--route-info}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

Das Widget **Nächste Abbiegung** zeigt die Entfernung und Art des [nächsten Abbiegemanövers](../widgets/nav-widgets.md#next-turn) und den [Straßennamen](../widgets/nav-widgets.md#street-name) an.

Routeninformationen bestehen aus:

- [geschätzte Fahrzeit](../widgets/nav-widgets.md#time-to-destination),
- [geschätzte Ankunftszeit](../widgets/nav-widgets.md#time-to-destination),
- [Fahrstrecke](../widgets/nav-widgets.md#distance-to-destination).

Wenn aktiviert, zeigt die [Widget-Einstellung](#eta-next-stop) (Routeninformationen) Routendetails für den nächsten Stopp ([den Zwischenpunkt](../navigation/setup/route-navigation.md#intermediate-destinations)) an.


### Bildschirm-Warn-Widget {#screen-alert-widget}

Dieses Informations-Widget kombiniert Warnungstypen wie **Fußgängerüberwege** und **Geschwindigkeitsbegrenzung**.

- Die Arten von Warnungen haben unterschiedliche Erscheinungsbilder, die von der **<Translate android="true" ids="driving_region"/>** abhängen und in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* konfiguriert werden können.
- In *Android Auto* ist es nicht möglich, die Anzeige von Warnungen einzustellen, Sie müssen das Widget in der Anwendung konfigurieren, bevor Sie die Navigation starten und Ihr Gerät mit dem Fahrzeug verbinden.
- Eine detaillierte Beschreibung der Warnungstypen finden Sie in [diesem Artikel](../widgets/nav-widgets.md#alert-types).
- Informationen zum Einrichten von Bildschirmwarnungen für verfügbare Profile finden Sie im Artikel [Navigationseinstellungen](../navigation/guidance/navigation-settings.md#screen-alerts).


### Tachometer {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

Das **Tachometer-Widget** ist ein integriertes Oberflächenelement, das die *aktuelle Geschwindigkeit* anhand von GPS Daten und die *Geschwindigkeitsbegrenzung* aus der [OSM Datenbank](https://wiki.openstreetmap.org/wiki/Key:maxspeed) und den [OsmAnd Einstellungen](../navigation/guidance/voice-navigation.md#speed-limit) auf dem Bildschirm des Fahrzeug-Multimediasystems anzeigt.

- Das **Tachometer-Widget** ist [*profilabhängig*](../personal/profiles.md), sodass Änderungen an den Einstellungen für ein Profil nicht auf ein anderes angewendet werden.
- Es gibt keine Option, die Anzeige des **Tachometer-Widgets** direkt in *Android Auto* anzupassen, Sie müssen es in der OsmAnd-App konfigurieren, bevor Sie die Navigation starten und Ihr Gerät mit dem Fahrzeug verbinden.
- Weitere Informationen zum Hinzufügen und Konfigurieren des *Tachometer*-Widgets zur Anzeige finden Sie im Artikel [Informations-Widgets](../widgets/info-widgets.md#speedometer).


### Kartenansicht (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

Die OsmAnd-App ermöglicht es Ihnen, die 3D Kartenansicht auf dem *Android Auto*-Bildschirm zu verwenden, um Ihre Route und Navigation anzuzeigen.

- Um diese Funktion zu aktivieren, müssen Sie [Kartenrendering Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) auswählen.
- Öffnen Sie das Hauptmenü *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* direkt in der OsmAnd-App.
- Nach der Konfiguration der Einstellungen wird die **3D-Schaltfläche** auf dem *Android Auto*-Bildschirm angezeigt, wenn die Kategorieliste für Ziele geschlossen ist.
- Sie können zwischen 3D-/2D Kartenmodi wechseln, indem Sie auf diese Schaltfläche tippen.


### Sprachansagen {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Sprachansagen sind eine der nützlichsten Funktionen von OsmAnd während der Navigation für *Android Auto*. Sie geben Ihnen Echtzeit-Anweisungen und ermöglichen es dem Fahrer, sich auf die Straße zu konzentrieren. Sprachansagen geben klare Anweisungen zu Abbiegungen, Richtungen und anderen Navigationsanweisungen und sorgen so für eine sicherere und komfortablere Nutzung des Navigationssystems.

Um [Sprachansagen](../navigation/guidance/voice-navigation.md) entsprechend dem ausgewählten Profil zu konfigurieren, müssen Sie dies tun, bevor Sie eine Route in der OsmAnd-App auf Ihrem Gerät starten. In *Android Auto* ist nur die Einstellung verfügbar, um alle ausgewählten Sprachansagen gleichzeitig aus- oder einzuschalten (*Einstellungsschaltfläche → Sprachansagen (ein/aus)*).


### ETA Nächster Stopp {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

In der OsmAnd-App können Sie einen oder mehrere [Zwischenpunkte](../navigation/setup/route-navigation.md#intermediate-destinations) für die Navigationsroute auswählen.

Um die [**Routeninfo** für einen Zwischenpunkt (nächster Stopp)](#next-turn--route-info) zu aktivieren oder zu deaktivieren, gehen Sie zu *Android Auto (OsmAnd) → Einstellungsschaltfläche → Routendetails für den nächsten Stopp anzeigen → Ein/Aus*. Diese Option zeigt die Zeit und Entfernung zum nächsten Stopp im Widget [*Routeninfo*](#next-turn--route-info) an.


### Kartenmodus {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* und OsmAnd bieten die Möglichkeit, die Karte an die Lichtverhältnisse anzupassen. Im *Tageskartenmodus* bleibt das Farbschema hell und kontrastreich, was das Ablesen auch bei hellem Sonnenlicht erleichtert. Im *Nachtmodus* werden die Karten dunkler, was dem Fahrer hilft, sich im Dunkeln besser zurechtzufinden.

OsmAnd verfügt über [Kartenmodus](../map/vector-maps.md#map-mode)-Optionen, aber wenn Sie die App in *Android Auto* verwenden, werden diese Optionen ignoriert. Stattdessen wird der Modus verwendet, den Sie in den *Android Auto*-Systemeinstellungen für Karten ausgewählt haben.

- Wählen Sie den Tagesmodus oder den Nachtmodus, um die Kartenanzeige unverändert zu lassen.
- Wenn Sie möchten, dass der Kartenanzeigemodus je nach Tageszeit wechselt, wählen Sie den Automatikmodus.

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->


### Geteilter Bildschirm {#split-screen}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

Die OsmAnd-App kann in *Android Auto* auf dem Bildschirm des Fahrzeug-Multimediasystems gleichzeitig mit Musik-, Nachrichten- oder anderen Benachrichtigungs-Apps geöffnet und zur Navigation verwendet werden. Einrichten der geteilten Bildschirmansicht auf einem mit *Android Auto* verbundenen Telefon oder auf dem Bildschirm in Ihrem Fahrzeugsystem.

1. Tippen Sie auf dem Startbildschirm auf Apps.
2. Tippen Sie auf Einstellungen.
3. Suchen Sie nach Multi-Fenster und wählen Sie den Schalter.
4. Kehren Sie zum Startbildschirm zurück.

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->


In den Android Auto Einstellungen können Sie die Position der Taskleiste und das Layout des Startbildschirms ändern:

- **Position der Taskleiste:**
  Gehen Sie zu *Android Auto Einstellungen → Schnelle Steuerelemente für Apps anzeigen* und schalten Sie den Schalter aus. Dadurch wird die Taskleiste vom unteren Rand an die Seite des Bildschirms verschoben.

- **Layout des Startbildschirms:**
  Gehen Sie zu *Android Auto Einstellungen → Layout ändern → Position des Fahrersitzes ändern*, um das Layout basierend auf der Position des Fahrersitzes anzupassen.


## Häufige Probleme und Lösungen {#common-issues-and-solutions}

1. [Problem mit der Kartenausrichtung.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Problem mit der Lautstärkeregelung.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Standortverzögerungen (ANR-Abstürze).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Häufige Fragen zum Verbindungsbildschirm:
    - *Warum kann ich die App nicht von meinem Telefon aus steuern, wenn es mit Android Auto verbunden ist?*
        Aus Sicherheitsgründen ist der Bildschirm der OsmAnd-App auf Ihrem Telefon gesperrt, während es mit Android Auto verbunden ist. Sie können nur über das Fahrzeugdisplay mit der App interagieren.
    - *Kann ich den gesperrten Bildschirm deaktivieren und die App auf meinem Telefon verwenden?*
        Nein, Android Auto erzwingt diese Einschränkung, um Ablenkungen während der Fahrt zu vermeiden.
    - *Was soll ich tun, wenn mein Telefon und das Fahrzeugdisplay getrennt zu sein scheinen?*
        Stellen Sie sicher, dass Ihr Gerät ordnungsgemäß über USB oder Bluetooth verbunden ist.
        Starten Sie das Infotainmentsystem Ihres Fahrzeugs und die OsmAnd-App neu, wenn die Verbindung instabil ist.


> *Zuletzt aktualisiert: März 2025*