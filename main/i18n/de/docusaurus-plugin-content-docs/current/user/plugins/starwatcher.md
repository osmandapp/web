---
source-hash: 8fd560586badacfe8252875585749d24294632dc3ef28a49749d309541421b7a
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
2. Verwenden Sie **Menü → Sternenkarte**, um den dedizierten Bildschirm mit Sternenhimmel, Einstellungen und Zeitsteuerungen zu öffnen
3. Wählen Sie **Zeit und Datum** mit den Schiebereglern oder Schaltflächen auf dem Sternenkarten-Bildschirm aus
4. Passen Sie **Sichtbarkeit und Transparenz** in den Einstellungen des Menüs „Sternenkarte“ an.

Das Plugin funktioniert mit beiden Kartenrendering-Engines, performt aber am besten im OpenGL-Modus.

## Sternenkarten-Bildschirm

**Zum Gehen:** *Aktiviertes Plugin → Menü → Sternenkarte* 

![Sternenkarten-Bildschirm](@site/static/img/plugins/starwatcher/view.png)

Der dedizierte **Sternenkarten-Bildschirm** zeigt eine interaktive Himmelskuppel mit Sternen, Sternbildern, Planeten, Sonnen- und Mondbahnen. Unten befindet sich eine **Symbolleiste** mit Zeit-/Datums-Schiebereglern, Tages-Schaltflächen und Schnellumschaltern für Ebenen wie Horizontlinie oder Beschriftungen.


- Der Bildschirm rendert die gesamte Himmelskugel über Ihrem Standort, ausgerichtet auf die Kompassrichtung
- Tippen Sie auf Himmelskörper für Details wie Magnitude, Auf- und Untergangszeiten oder Bahnen



## Informationen zu Himmelskörpern

Tippen Sie auf einen beliebigen **Stern, Planeten, Sternbild oder Sonne/Mond** auf dem **Sternenkarten-Bildschirm** oder der **Kartenüberlagerung**, um detaillierte Informationen anzuzeigen.

![Popup mit Objektinformationen](@site/static/img/plugins/starwatcher/object-info.png)

**Angezeigte Daten:**
- **Azimut**: Richtung vom Norden (0°-360°), wo das Objekt am Himmel erscheint
- **Höhe**: Höhe über dem Horizont (0° am Horizont, 90° am Zenit)
- **Magnitude**: Helligkeitsskala (-26 für die Sonne bis +6 für schwache Sterne; niedriger = heller)
- **Auf-/Untergangszeiten**: Wann das Objekt über/unter dem Horizont aufgeht
- **Entfernung** (Planeten): Durchschnittliche Entfernung von der Erde in AE/km

**Wikipedia-Integration**: Tippen Sie auf **„Wikipedia“** im Info-Popup, um die Seite des Objekts in Ihrem Browser zu öffnen (z. B. Sirius, Orion, Venus). Funktioniert offline für zwischengespeicherte Daten, online für vollständige Artikel.

**Langes Drücken** auf Himmelskörper, um sie als Kartenmarkierungen mit Live-Positionsaktualisierungen zu **pinnen**, oder **Koordinaten teilen** für Gruppen-Sternbeobachtungen.

Diese Funktion hilft, Objekte am realen Himmel zu identifizieren, Beobachtungen zu planen und Astronomie-Fakten direkt aus OsmAnd zu lernen.


## AR-Sternensuche (Kamera-Modus)

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


## Star Watcher-Einstellungen

*Hauptmenü → Plugins → Sternenkarte → ⚙️ Schaltfläche*

Wählen Sie sichtbare Ebenen und Objekte aus

### Sternenebenen

Alle astronomischen Daten erscheinen als Kartenüberlagerungen, sichtbar bei Zoom-Skalen 5-15. Ebenen projizieren die Himmelskugel auf die flache Karte.

| Ebene | Beschreibung |
|-------|-------------|
| Sterne | Helle Sterne (bis Magnitude 4-6) mit Beschriftungen und Sternbildlinien |
| Sternbilder | Verbindet Sterne zu bekannten Mustern wie Orion oder Großer Wagen |
| Planeten | Positionen und tägliche Bahnen für Merkur-Venus-Mars-Jupiter-Saturn (farbige Symbole) |
| Sonne & Mond | Bögen, die Auf-/Untergangszeiten und Beleuchtungsphase zeigen |
| Horizont | Linie, die sichtbaren Himmel vom Boden trennt, mit Himmelsrichtungen |


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)
