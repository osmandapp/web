---
source-hash: 58426179267520e49fd40594a65a229ede4b84aecbc82387219ff0e5c619428f
sidebar_position: 14
title:  Star Watcher
unlistead: true
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

<InfoIncompleteArticle/>

<InfoAndroidOnly/>

:::info
**Star Watcher** befindet sich derzeit in der **Beta**.
:::

## Überblick {#overview}

Das Star Watcher-Plugin zeigt eine Sternenhimmel-Überlagerung auf der Karte mit Sternen, Sternbildern, Sonne, Mond und Planeten. Die Positionen und Bahnen von Sonne, Mond, Planeten und großen Sternen werden auf der Karte angezeigt.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}
  
Die folgenden Einstellungen sind erforderlich, um die Star Watcher-Überlagerung anzuzeigen:

1. Aktivieren Sie das [**Star Watcher**-Plugin](../plugins/index.md#enable--disable) im Abschnitt *Plugins* des *Hauptmenüs*
2. Verwenden Sie **Menü → Sternenkarte**, um den dedizierten Bildschirm mit Sternenhimmel, Einstellungen und Zeitsteuerungen zu öffnen.
3. Wählen Sie **Zeit und Datum** mit den Steuerelementen auf dem Sternenkarten-Bildschirm aus.
4. Passen Sie an, was auf der Sternenkarte angezeigt wird, mit [**Configure View**](#configure-view) an — zum Beispiel, sichtbare Objekte und Rendering-Hilfen umschalten.
5. Tippen Sie auf die Schaltfläche **Schließen (X)** oben auf dem Sternenkarten-Bildschirm, um die Sternenkarte zu verlassen und zur Erdkarte zurückzukehren.

Das Plugin funktioniert mit beiden Kartenrendering-Engines, performt aber am besten im OpenGL-Modus.

## Sternenkarten-Bildschirm {#star-map-screen}

**Zum Gehen:** *Aktiviertes Plugin → Menü → Sternenkarte* 

![Sternenkarten-Bildschirm](@site/static/img/plugins/starwatcher/view_new.png)

Der dedizierte **Sternenkarten-Bildschirm** zeigt eine interaktive Himmelskuppel mit Sternen, Sternbildern, Planeten, Sonnen- und Mondbahnen. Am unteren Rand des Bildschirms können Sie auf die folgenden Steuerelemente zugreifen: 
- **Suche** — öffnet ein Suchfeld mit einem Eingabefeld, in das Sie den Namen eines Objekts eingeben können. Unter dem Feld befindet sich eine Liste vorgeschlagener Objekte in alphabetischer Reihenfolge. Sie können die Sortierung zwischen A–Z und Z–A umschalten. 
- **Zeit und Datum** — ermöglicht es Ihnen, das Datum und die Uhrzeit zu ändern, um den Himmel zu verschiedenen Zeitpunkten in der Vergangenheit oder Zukunft zu beobachten. Dies ist nützlich zum Planen von Beobachtungen, Verfolgen der Objektbewegungen oder Lernen, wie sich der Himmel im Laufe der Zeit verändert. Wenn Sie ein benutzerdefiniertes Datum/Uhrzeit festlegen, zeigt der Chip das vollständige Datum und die Uhrzeit an, und neben ihm erscheint eine Zurücksetzen-Schaltfläche, um zur aktuellen Systemzeit zurückzukehren.
- [**Configure View**](#configure-view).

Der Bildschirm rendert die gesamte Himmelskugel über Ihrem Standort, ausgerichtet auf die Kompassrichtung. Die Sternenkarte kann manuell gedreht werden. Die manuelle Drehung der Sternenkarte beeinflusst nicht die Ausrichtung der Erdkarte. Die Erdkarte folgt immer dem [Kartenorientierungsmodus](../map/interact-with-map.md#map-orientation-modes), der in Ihren Einstellungen ausgewählt ist. Tippen Sie auf Himmelskörper für Details wie Magnitude, Auf- und Untergangszeiten oder Bahnen.


## Himmelskörper-Info {#celestial-object-info}

![Popup mit Objektinformationen](@site/static/img/plugins/starwatcher/object-info_new.png)

Tippen Sie auf einen beliebigen **Stern, Planeten, Sternbild oder Sonne/Mond** auf dem **Sternenkarten-Bildschirm** oder der **Kartenüberlagerung**, um detaillierte Informationen anzuzeigen. Das ausgewählte Objekt wird auf der Sternenkarte durch einen roten Kreismarker hervorgehoben, und seine tägliche Bewegung wird durch einen Stundenkreis (00–23) visualisiert, der zeigt, wo sich das Objekt zu jeder Stunde Ortszeit befinden wird und die Bewegungsrichtung.

**Angezeigte Daten:**
- **Azimut**: Richtung vom Norden (0°-360°), wo das Objekt am Himmel erscheint
- **Höhe**: Höhe über dem Horizont (0° am Horizont, 90° am Zenit)
- **Magnitude**: Helligkeitsskala (-26 für die Sonne bis +6 für schwache Sterne; niedriger = heller)
- **Auf-/Untergangszeiten**: Wann das Objekt über/unter dem Horizont aufgeht
- **Entfernung** (Planeten): Durchschnittliche Entfernung von der Erde in AE/km

**Wikipedia-Integration**: Tippen Sie auf **„Wikipedia“** im Info-Popup, um die Seite des Objekts in Ihrem Browser zu öffnen (z. B. Sirius, Orion, Venus). Funktioniert offline für zwischengespeicherte Daten, online für vollständige Artikel.

**Langes Drücken** auf Himmelskörper, um sie als Kartenmarkierungen mit Live-Positionsaktualisierungen zu **pinnen**, oder **Koordinaten teilen** für Gruppen-Sternbeobachtungen.

Diese Funktion hilft, Objekte am realen Himmel zu identifizieren, Beobachtungen zu planen und Astronomie-Fakten direkt aus OsmAnd zu lernen.


## AR-Sternensuche (Kamera-Modus) {#ar-star-finding}

**Zum Gehen:** *Aktiviertes Plugin → Menü → Sternenkarte → Kamera-Schaltfläche* 

Die **Star Watcher**-Ebene funktioniert mit der **Gerätekamera**, um **Augmented Reality (AR) Sternbeobachtung** zu ermöglichen. Richten Sie die Kamera Ihres Handys auf den realen Nachthimmel und sehen Sie Sterne, Planeten, Sternbilder, Sonne/Mond in Echtzeit überlagert.


**So funktioniert die AR-Sternensuche:**
- **Live-Kamerablick** zeigt den realen Himmel mit transparenten astronomischen Überlagerungen, ausgerichtet auf Horizont/Kompass
- **Kamera bewegen**, um den Himmel zu scannen – Objekte werden hervorgehoben, wenn sie in Ihrem Sichtfeld erscheinen
- **Auf hervorgehobene Objekte tippen**, um Azimut, Höhe, Magnitude, Auf-/Untergangszeiten und Wikipedia-Link zu sehen
- **Kompasskalibrierung** erforderlich für genaue Ausrichtung (Handy in Achterform schwenken, falls nötig)

**Perfekt für:**
- Identifizieren schwacher Sterne/Planeten, die mit dem bloßen Auge unsichtbar sind
- Lokalisieren von Sternbildern durch Bewegen des Handys über den Himmel
- Echtzeit-Himmelsnavigation während Wanderungen oder Camping


## Configure View {#configure-view}

![Configure View](@site/static/img/plugins/starwatcher/half_state.png) ![Configure View](@site/static/img/plugins/starwatcher/full_state.png)

**Configure View** ermöglicht es Ihnen, die Anzeige der Sternenkarte zu steuern, indem Sie visuelle Modi, Objekte und Rendering-Hilfen aktivieren oder deaktivieren.

Um Configure View zu öffnen, tippen Sie auf die Configure View-Schaltfläche in der unteren rechten Ecke des Sternenkarten-Bildschirms. Die Schaltfläche wird durch ein Ebenen-Stil-Symbol (gestapelte Formen) dargestellt, das Anzeige- und Ebeneneinstellungen anzeigt. Configure View öffnet sich im *Half state* und zeigt die Hauptanzeigeoptionen. Wischen Sie das Panel nach oben, um es in den *Full state* zu erweitern und auf alle verfügbaren Einstellungen zuzugreifen. Um Configure View zu schließen, wischen Sie das Panel einmal nach unten, um zum Half state zurückzukehren, wischen Sie erneut nach unten, um es vollständig zu schließen, oder tippen Sie auf die Schaltfläche Schließen (X) in der oberen rechten Ecke des Panels.

### Modi und Aktionen {#modes-and-actions}

![Configure View](@site/static/img/plugins/starwatcher/view_with_map.png) ![Configure View](@site/static/img/plugins/starwatcher/red_filter.png)

Dieser Abschnitt steuert die Hauptanzeigemodi der Sternenkarte.

- **2D / 3D**. Schaltet die Sternenkarte zwischen einer flachen (2D)-Ansicht und einer kugelförmigen (3D)-Ansicht um.
- **Karte**. Aktiviert eine zusätzliche Erdkartenansicht unter der Sternenkarte, die hilft, himmlische Objekte mit Ihrem geografischen Standort in Beziehung zu setzen.
- **Roter Filter**. Wendet einen roten Farbfilter auf den gesamten Bildschirm an, um Lichtverschmutzung zu reduzieren und die Nachtsicht während Beobachtungen am dunklen Himmel zu erhalten.

### Sichtbare Objekte {#visible-objects}

![Configure View](@site/static/img/plugins/starwatcher/solar_system.png) ![Configure View](@site/static/img/plugins/starwatcher/constellations.png)

Dieser Abschnitt ermöglicht es Ihnen, auszuwählen, welche Arten von Himmelskörpern auf der Sternenkarte angezeigt werden.

| Objekt | Beschreibung |
|--------|-------------|
| Sonnensystem | Zeigt die Sonne, den Mond und sichtbare Planeten an. |
| Sternbilder | Zeigt Sternbildlinien und Muster, die von Sternen gebildet werden. |
| Sterne | Zeigt einzelne Sterne an, die auf der Sternenkarte sichtbar sind. |
| Nebel | Zeigt Nebel-Objekte, wo verfügbar. |
| Sternhaufen | Zeigt Sternhaufen als separate Himmelskörper an. |
| Deep Sky | Schaltet Deep-Sky-Objekte wie Galaxien, Galaxienhaufen und Schwarze Löcher um. |

### Persönliche Anzeigeoptionen {#personal-display-options}

**Persönliche Anzeigeoptionen** steuern zusätzliche visuelle Hilfsmittel im Zusammenhang mit dem Benutzerfokus und der Beobachtung.

| Option | Beschreibung |
|--------|-------------|
| Richtung | Zeigt einen Richtungsindikator an, um Ihre Ansicht zu orientieren. |
| Tägliche Bahn | Zeigt die tägliche Bahn ausgewählter Himmelskörper über den Himmel an. |
| Favoriten | Hebt Objekte hervor oder zeigt Objekte an, die als Favoriten markiert sind. |

### Rendering-Hilfen {#rendering-aids}

**Rendering-Hilfen** fügen Referenzlinien und Gitter hinzu, um die Orientierung der Sternenkarte zu erleichtern.

| Hilfsmittel | Beschreibung |
|-------------|-------------|
| Azimutales Gitter | Fügt ein azimutbasiertes Gitter für die horizontale Himmelsorientierung hinzu. |
| Meridianlinie | Zeigt die Meridianlinie an, die den Himmel von Nord nach Süd kreuzt. |
| Äquatoriales Gitter | Zeigt das himmlische äquatoriale Koordinatengitter an. |
| Ekliptiklinie | Zeigt die Ekliptiklinie an, die den scheinbaren Pfad der Sonne darstellt. |
| Galaktischer Äquator | Zeigt die Äquatorebene der Milchstraßengalaxie an. |


<!-- 
## Star Watcher Settings

*Main Menu → Plugins → Star map → ⚙️ button*

Choose visible layers and objects

### Star Layers

All astronomical data appears as map overlays, visible at zoom scales 5-15. Layers project the celestial sphere onto the flat map.

| Layer | Description |
|-------|-------------|
| Stars | Bright stars (up to magnitude 4-6) with labels and constellation lines |
| Constellations | Connects stars into familiar patterns like Orion or Big Dipper |
| Planets | Positions and daily paths for Mercury-Venus-Mars-Jupiter-Saturn (colored icons) |
| Sun & Moon | Arcs showing rise/set times and illumination phase |
| Horizon | Line separating visible sky from ground, with cardinal directions |

-->


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)