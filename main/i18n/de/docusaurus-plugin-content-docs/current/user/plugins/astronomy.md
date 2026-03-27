---
source-hash: 586e89c491ebdc9f9d39017e43dfe0ba1044c71a6eddcfcdc4d71787f3703bae
sidebar_position: 3
title: Astronomie
unlisted: true
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
**Astronomie** befindet sich derzeit in der **Beta**-Phase.
:::

## Übersicht {#overview}

:::tip Kauf
Das Astronomy-Plugin ist eine [bezahlte Funktion](../purchases/index.md).  
:::

Das Astronomy-Plugin zeigt eine Himmelsüberlagerung mit Sternen, Sternbildern, der Sonne, dem Mond und Planeten direkt auf der Karte an. Es verwendet einen Offline-Himmelskatalog, um die aktuellen und zukünftigen Positionen von Himmelskörpern zu berechnen und anzuzeigen. Das Plugin ermöglicht es den Nutzern auch, den Nachthimmel zu erkunden, Objekte zu identifizieren und Beobachtungen zu planen, indem sie die Bahnen der Objekte am Himmel betrachten.

Das Plugin funktioniert vollständig offline mit integrierten Sternkatalogen und ermöglicht die Himmelserkundung sogar ohne Internetverbindung.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}
  
Die folgenden Einstellungen sind erforderlich, um die Astronomy-Überlagerung anzuzeigen:

1. Aktivieren Sie das [**Astronomy**-Plugin](../plugins/index.md#enable--disable) im Abschnitt *Plugins* des *Hauptmenüs*
2. Verwenden Sie **Menü → Sternenkarte**, um den dedizierten Bildschirm mit Sternenhimmel, Einstellungen und Zeitsteuerungen zu öffnen.
3. Wählen Sie **Zeit und Datum** mit den Steuerelementen auf dem Sternenkarten-Bildschirm aus.
4. Passen Sie an, was auf der Sternenkarte angezeigt wird, mit [**Ansicht konfigurieren**](#configure-view) — zum Beispiel, schalten Sie sichtbare Objekte und Rendering-Hilfen um.
5. Tippen Sie auf die Schaltfläche **Schließen (X)** oben auf dem Sternenkarten-Bildschirm, um die Sternenkarte zu verlassen und zur Erdkarte zurückzukehren.

Das Plugin funktioniert mit beiden Kartenrendering-Engines, performt aber am besten im OpenGL-Modus.

## Sternenkarten-Bildschirm {#star-map-screen}

**Zum Gehen:** *Aktiviertes Plugin → Menü → Sternenkarte* 

![Sternenkarten-Bildschirm](@site/static/img/plugins/starwatcher/view_new_1.png)

Der dedizierte **Sternenkarten-Bildschirm** zeigt eine interaktive Himmelskuppel mit Sternen, Sternbildern, Planeten, Sonnen- und Mondbahnen. Am unteren Rand des Bildschirms haben Sie Zugriff auf die folgenden Steuerelemente: 
- [**Suche**](#search) — öffnet den Suchbildschirm, auf dem Sie nach Himmelskörpern suchen und Himmelskataloge und Kategorien durchsuchen können. 
- **Zeit und Datum** — ermöglicht es Ihnen, das Datum und die Zeit zu ändern, um den Himmel zu verschiedenen Momenten in der Vergangenheit oder Zukunft zu beobachten. Dies ist nützlich für die Planung von Beobachtungen, das Verfolgen der Objektbewegung oder das Lernen, wie sich der Himmel im Laufe der Zeit verändert. Wenn Sie ein benutzerdefiniertes Datum/Zeit festlegen, zeigt der Chip das vollständige Datum und die Zeit an, und neben ihm erscheint eine Zurücksetzen-Schaltfläche, um zur aktuellen Systemzeit zurückzukehren.
- **Magnitude-Filter** — ermöglicht es Ihnen, zu begrenzen, welche Sterne basierend auf ihrer Helligkeit angezeigt werden. Verwenden Sie den Schieberegler, um den maximalen Magnitude-Wert einzustellen. Niedrigere Werte zeigen nur die hellsten Sterne, während höhere Werte schwächere Sterne und Deep-Sky-Objekte enthüllen. Dies hilft, visuelle Unordnung zu reduzieren oder zu simulieren, was mit dem bloßen Auge sichtbar ist.
- [**Ansicht konfigurieren**](#configure-view) — öffnet Anzeigeeinstellungen, die steuern, wie Objekte, Bahnen und Referenzlinien auf der Sternenkarte angezeigt werden.

Der Bildschirm rendert die volle Himmelshemisphäre über Ihrem Standort, ausgerichtet auf die Kompassrichtung. Die Sternenkarte kann manuell durch Ziehen am Bildschirm rotiert werden. Die manuelle Rotation der Sternenkarte beeinflusst nicht die Ausrichtung der Erdkarte. Die Erdkarte folgt immer dem [Kartenorientierungsmodus](../map/interact-with-map.md#map-orientation-modes), der in Ihren Einstellungen ausgewählt ist. Tippen Sie auf Himmelskörper für Details wie Magnitude, Auf- und Untergangszeiten oder Bahnen.

Die Sternenkarte kann auch mit der Geräteausrichtung ausgerichtet werden, wenn der Kompassmodus aktiviert ist. In diesem Modus rotiert der Himmel entsprechend den Beschleunigungssensor- und Kompasssensoren des Geräts, was es Ihnen ermöglicht, den Himmel zu erkunden, indem Sie Ihr Telefon physisch bewegen.


## Kontextmenü {#context-menu}

![Kontextmenü](@site/static/img/plugins/starwatcher/context_menu_view.png)

Das **Kontextmenü** bietet detaillierte Informationen über Himmelskörper und Tools zur Beobachtung. Es öffnet sich, wenn Sie auf einen Himmelskörper auf der Sternenkarte tippen.

Wenn ein Objekt ausgewählt ist, wird es auf der Sternenkarte mit einem roten Kreis-Markierer hervorgehoben. Seine tägliche Bewegung wird auch durch einen Stundenkreis (00–23) visualisiert, der zeigt, wo das Objekt zu jeder Stunde des lokalen Tages am Himmel erscheinen wird und die Richtung seiner Bewegung.

Das Kontextmenü erscheint am unteren Rand des Bildschirms und enthält Objektinformationen, Schnellaktionen und Registerkarten zur Erkundung der Sichtbarkeit und des Beobachtungsplans des Objekts.

### Objektinformationen {#object-information}

![Objektinformationen](@site/static/img/plugins/starwatcher/object_view.png)

Der obere Abschnitt des Kontextmenüs zeigt den Namen und die Klassifikation des Objekts. Unter dem Namen werden der Objekttyp und sein übergeordnetes Sternbild oder Gruppe angezeigt. Zum Beispiel:  
- **Beta Ursae Minoris** — Stern • Kleiner Bär
- **Jupiter** — Planet • Sonnensystem
- **Andromeda** — Galaxie • Deep Sky

Schnellinformationsblöcke zeigen wichtige Beobachtungsparameter an:  
- Aufgang – die Zeit, zu der das Objekt über dem Horizont aufgeht.
- Untergang – die Zeit, zu der das Objekt unter dem Horizont untergeht.
- Azimut – die Richtung des Objekts relativ zum Norden (0°–360°).
- Höhe – die Höhe des Objekts über dem Horizont.
- Magnitude – die Helligkeit des Objekts, wie sie von der Erde aus gesehen wird. 

Diese Werte werden dynamisch basierend auf der ausgewählten Zeit und dem Standort des Benutzers aktualisiert.

Unter den Schnellinformationsblöcken kann das Menü auch zusätzliche Informationen und Ressourcen über das Objekt enthalten:  
- Auf Wikipedia lesen – Öffnet den Wikipedia-Artikel des Objekts. Wenn Offline-Wikipedia-Daten verfügbar sind, kann der Artikel ohne Internetverbindung geöffnet werden; andernfalls öffnet sich die Seite im Browser.
- Online-Fotos – Zeigt verfügbare Fotos im Zusammenhang mit dem ausgewählten Himmelskörper an.

### Aktionen {#actions}

Unter den Objektinformationen bietet das Kontextmenü mehrere Aktionen zur Interaktion mit dem ausgewählten Himmelskörper:
- **Speichern** – Fügt das Objekt zu Ihrer Favoritenliste für schnellen Zugriff hinzu.
- **Lokalisieren** – Zentriert das ausgewählte Objekt auf der Sternenkarte.
- **Richtung** – Zeigt die Richtung zum Objekt auf der Karte, um Ihnen bei der Orientierung während der Himmelsbeobachtung zu helfen.
- **Bahn** – Zeigt die tägliche Trajektorie des Objekts am Himmel, sodass Sie sehen können, wie es sich während des Tages bewegt.

### Sichtbarkeitsdiagramm {#actions}

![Sichtbarkeitsdiagramm](@site/static/img/plugins/starwatcher/visibility.png)

Die Registerkarte **Sichtbarkeit** zeigt, wie das ausgewählte Objekt während eines 24-Stunden-Zeitraums am Himmel bewegt.

Das Diagramm zeigt die Höhe des Objekts über dem Horizont im Laufe der Zeit.

- Die horizontale Achse stellt die Zeit von 12:00 bis 12:00 am nächsten Tag dar.
- Die vertikale Achse stellt die Höhe von −30° bis +90° dar.

Die farbige Kurve zeigt die Höhe des Objekts den ganzen Tag über.

Der Hintergrund des Diagramms stellt den Zustand des Himmels dar und ändert sich je nach Position der Sonne. Dies hilft zu identifizieren, wann Beobachtungen möglich sind.

Die Farben stellen unterschiedliche Himmelbedingungen dar:  
- hellblau — Tag
- dunkleres Blau — Dämmerung
- dunkelblau / schwarz — Nacht

Die Farbe der Trajektorie des Objekts spiegelt auch seine Höhe wider:  
- gelb – hoch am Himmel (beste Sichtbarkeit)
- orange – mittlere Höhe
- rot – nahe am Horizont
- lila – unter dem Horizont (nicht sichtbar)

Ein beweglicher Indikator ermöglicht es Ihnen, die Position des Objekts zu verschiedenen Zeiten zu erkunden. Wenn der Indikator bewegt wird, werden die aktuelle Zeit, Höhe und Azimut-Werte aktualisiert.

Unter dem Diagramm werden wichtige Beobachtungsereignisse angezeigt: 
- **Aufgang** – wenn das Objekt über dem Horizont aufgeht.
- **Kulmination** – wenn das Objekt seine höchste Höhe erreicht.
- **Untergang** – wenn das Objekt unter dem Horizont untergeht.

Das Diagramm öffnet sich mit dem Indikator an der aktuellen Systemzeit positioniert. Der für die Berechnungen verwendete Standort wird unter dem Diagramm angezeigt.

### Beobachtungsplan {#actions}

![Beobachtungsplan](@site/static/img/plugins/starwatcher/schedule.png)

Die Registerkarte **Plan** zeigt die Sichtbarkeit des ausgewählten Objekts für die aktuelle Woche. Jede Zeile stellt einen Tag dar und enthält:  
- den Tag der Woche
- das Datum
- Aufgangszeit
- Untergangszeit
- ein kleines Sichtbarkeitsdiagramm für diesen Tag

Das Mini-Diagramm zeigt, wann das Objekt während des Tages sichtbar ist und wie sich seine Höhe ändert. Der farbige Abschnitt der Leiste stellt den Zeitraum dar, in dem das Objekt über dem Horizont ist.

Sie können zwischen Wochen mit den Pfeilschaltflächen im Plan-Header navigieren. Die Kalender-Schaltfläche ermöglicht es Ihnen, zur aktuellen Woche zurückzukehren.

<!--
## Celestial Object Info {#celestial-object-info}

![Object info popup](@site/static/img/plugins/starwatcher/object-info_new.png)

Tap any **star, planet, constellation, or Sun/Moon** on the **Star map screen** or **map overlay** to view detailed information. Selected object  is highlighted on the Star map by a red circle marker, and its daily motion is visualized by an hour ring (00–23) showing where the object will be at each hour local time and the direction of movement.

**Displayed data:**
- **Azimuth**: Direction from North (0°-360°) where the object appears in the sky
- **Altitude**: Height above horizon (0° at horizon, 90° at zenith)
- **Magnitude**: Brightness scale (-26 for Sun to +6 for faint stars; lower = brighter)
- **Rise/Set times**: When the object rises above/sets below horizon
- **Distance** (planets): Average distance from Earth in AU/km

**Wikipedia integration**: Tap **"Wikipedia"** in the info popup to open the object's page in your browser (e.g. Sirius, Orion, Venus). Works offline for cached data, online for full articles.

**Long-press** celestial objects to **pin** them as map markers with live position updates, or **share** coordinates for group stargazing.

This feature helps identify objects in real sky, plan observations, and learn astronomy facts directly from OsmAnd.
-->

## AR-Sternensuche (Kamera-Modus) {#ar-star-finding}

**Zum Gehen:** *Aktiviertes Plugin → Menü → Sternenkarte → Kamera-Schaltfläche* 

Die **Astronomy**-Schicht arbeitet mit der **Gerätekamera**, um **Augmented Reality (AR) Sternenbeobachtung** zu ermöglichen. Richten Sie die Kamera Ihres Handys auf den realen Nachthimmel und sehen Sie Sterne, Planeten, Sternbilder, Sonne/Mond in Echtzeit überlagert.

**So funktioniert die AR-Sternensuche:**
- **Live-Kamerablick** zeigt den realen Himmel mit transparenten astronomischen Überlagerungen, ausgerichtet auf Horizont/Kompass.
- **Kamera bewegen**, um den Himmel zu scannen — Objekte werden hervorgehoben, wenn sie in Ihrem Sichtfeld erscheinen.
- **Auf hervorgehobene Objekte tippen**, um Azimut, Höhe, Magnitude, Auf-/Untergangszeiten und Wikipedia-Link zu sehen.
- **Kompasskalibrierung** erforderlich für genaue Ausrichtung (Handy in Achterform schwenken, falls nötig).

Der AR-Modus verwendet Gerätesensoren (Gyroskop, Beschleunigungssensor und Kompass), um Himmelskörper mit dem realen Himmel auszurichten.

**Perfekt für:**
- Das Identifizieren schwacher Sterne/Planeten, die mit dem bloßen Auge unsichtbar sind.
- Das Lokalisieren von Sternbildern durch Bewegen des Handys über den Himmel.
- Echtzeit-Himmelsnavigation während Wanderungen oder Camping.


## Ansicht konfigurieren {#configure-view}

![Ansicht konfigurieren](@site/static/img/plugins/starwatcher/half_state_new.png) ![Ansicht konfigurieren](@site/static/img/plugins/starwatcher/full_state.png)

**Ansicht konfigurieren** ermöglicht es Ihnen, zu steuern, wie die Sternenkarte angezeigt wird, indem Sie visuelle Modi, Objekte und Rendering-Hilfen aktivieren oder deaktivieren.

Um Ansicht konfigurieren zu öffnen, tippen Sie auf die Schaltfläche Ansicht konfigurieren in der unteren rechten Ecke des Sternenkarten-Bildschirms. Die Schaltfläche wird durch ein Layer-ähnliches Symbol (gestapelte Formen) dargestellt, das Anzeige- und Layer-Einstellungen anzeigt. Ansicht konfigurieren öffnet sich im *Halbzustand* und zeigt die Hauptanzeigeoptionen. Wischen Sie das Panel nach oben, um es in den *Vollzustand* zu erweitern und auf alle verfügbaren Einstellungen zuzugreifen. Um Ansicht konfigurieren zu schließen, wischen Sie das Panel einmal nach unten, um zum Halbzustand zurückzukehren, wischen Sie erneut nach unten, um es vollständig zu schließen, oder tippen Sie irgendwo auf die Karte außerhalb des Panels. Sie können auch auf die Schaltfläche Schließen (X) in der oberen rechten Ecke des Panels tippen.

### Modi und Aktionen {#modes-and-actions}

![Ansicht konfigurieren](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Ansicht konfigurieren](@site/static/img/plugins/starwatcher/red_filter_new.png)

Dieser Abschnitt steuert die Hauptanzeigemodi der Sternenkarte.

- **2D / 3D**. Schaltet zwischen einer Himmelsbahn-Ansicht (2D), die den Himmel als projizierte Kuppel mit Objektbahnen zeigt, und einer kugelförmigen Himmelsansicht (3D), die die Himmelskugel darstellt.
- **Karte**. Aktiviert eine zusätzliche Erdkartenansicht unter der Sternenkarte, die es Ihnen ermöglicht, Himmelskörper mit Ihrer realen geografischen Umgebung in Beziehung zu setzen.
- **Roter Filter**. Wendet einen roten Farbfilter auf den gesamten Bildschirm an, um Lichtverschmutzung zu reduzieren und die Nachtsicht während Dark-Sky-Beobachtungen zu erhalten.

### Sichtbare Objekte {#visible-objects}

![Ansicht konfigurieren](@site/static/img/plugins/starwatcher/solar_system.png) ![Ansicht konfigurieren](@site/static/img/plugins/starwatcher/constellations.png)

Dieser Abschnitt ermöglicht es Ihnen, zu wählen, welche Typen von Himmelskörpern auf der Sternenkarte angezeigt werden.

| Objekt | Beschreibung |
|--------|-------------|
| Sonnensystem | Zeigt die Sonne, den Mond und sichtbare Planeten. |
| Sternbilder | Zeigt Sternbildlinien und Muster, die von Sternen gebildet werden. |
| Sterne | Zeigt einzelne Sterne, die auf der Sternenkarte sichtbar sind. |
| Nebel | Zeigt Nebel-Objekte, wo verfügbar. |
| Sternhaufen | Zeigt Sternhaufen als separate Himmelskörper. |
| Deep Sky | Schaltet Deep-Sky-Objekte wie Galaxien, Galaxienhaufen und Schwarze Löcher um. |

### Persönliche Anzeigeoptionen {#personal-display-options}

**Persönliche Anzeigeoptionen** steuern zusätzliche visuelle Hilfsmittel im Zusammenhang mit dem Benutzerfokus und der Beobachtung.

| Option | Beschreibung |
|--------|-------------|
| Richtung | Zeigt einen Richtungsindikator, um Ihre Ansicht zu orientieren. |
| Tägliche Bahn | Zeigt die tägliche Bahn ausgewählter Himmelskörper am Himmel. |
| Favoriten | Hebt Objekte hervor oder zeigt Objekte an, die als Favoriten markiert sind. |

### Rendering-Hilfen {#rendering-aids}

**Rendering-Hilfen** fügen Referenzlinien und Gitter hinzu, um die Orientierung der Sternenkarte zu erleichtern.

| Hilfsmittel | Beschreibung |
|-------------|-------------|
| Azimut-Gitter | Fügt ein azimutbasiertes Gitter für die horizontale Himmelsorientierung hinzu. |
| Meridianlinie | Zeigt die Meridianlinie, die den Himmel von Nord nach Süd kreuzt. |
| Äquatoriales Gitter | Zeigt das himmlische äquatoriale Koordinatengitter. |
| Ekliptiklinie | Zeigt die Ekliptiklinie, die den scheinbaren Pfad der Sonne darstellt. |
| Äquatorlinie | Zeigt die Projektion des Erdaquators auf die Himmelskugel, um die Erdrotation relativ zum Himmel zu visualisieren. |
| Galaktische Linie | Zeigt die Ebene der Milchstraßengalaxie am Himmel, die die Haupt Richtung der galaktischen Scheibe anzeigt. |

<!-- 
## Astronomy Settings

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

## Suche {#search}

![Suche](@site/static/img/plugins/starwatcher/explore_screen.png)

Die **Suchfunktion** im Astronomy-Plugin ermöglicht es Ihnen, Himmelskörper zu finden, Himmelskategorien zu erkunden und Beobachtungsdaten zuzugreifen. Um die Suche zu öffnen, tippen Sie auf die Suchschaltfläche auf der Sternenkarte. Dies öffnet den Suchbildschirm, der mehrere Abschnitte zur Entdeckung und Organisation von Himmelskörpern bietet. Der Suchbildschirm enthält die folgenden Abschnitte:

**1. Jetzt beobachten**

Der Abschnitt Jetzt beobachten hebt Himmelskörper hervor, die jetzt oder heute Nacht sichtbar sind. Dieser Abschnitt dient als Empfehlungstool und zeigt Objekte, die am besten für die Beobachtung geeignet sind, basierend auf Ihrem aktuellen Standort und der Zeit.

**2. Kategorien**

Der Kategorien-Abschnitt ermöglicht es Ihnen, Objekte nach Typ zu durchsuchen: Sonnensystem, Sternbilder, Sterne, Nebel, Sternhaufen und Deep Sky. Jede Kategorie öffnet eine Liste von Objekten mit wichtigen Informationen: Objektname, Typ oder Sternbild, Magnitude (Helligkeit) und Auf- oder Untergangszeit (falls zutreffend).

### Sortierung und Filter {#sorting-and-filters}

![Sortierung](@site/static/img/plugins/starwatcher/sorting.png) ![Filter](@site/static/img/plugins/starwatcher/filters.png)

Tippen Sie auf die Suchleiste, um die vollständige Suchoberfläche zu öffnen. Sie können Ergebnisse mit Sortier- und Filteroptionen verfeinern.

Sie können Objekte sortieren nach:  
- Name (A–Z oder Z–A)
- Hellste zuerst
- Schwächste zuerst
- Geht am frühesten auf
- Geht am frühesten unter

Filter helfen, sichtbare Objekte einzugrenzen.

**Sichtbarkeit**  
- Alle anzeigen — zeigt alle Objekte
- Jetzt sichtbar — Objekte derzeit über dem Horizont
- Heute Nacht sichtbar — Objekte sichtbar zwischen Sonnenuntergang und Sonnenaufgang

**Zusätzliche Filter**  
- Mit bloßen Auge sichtbar — zeigt nur Objekte mit Magnitude ≤ 6

**Kategorien**  
Sie können Ergebnisse nach Objekttyp filtern. Das Auswählen spezifischer Kategorien deaktiviert automatisch die Alle-Option.

### Meine Daten {#my-data}

![Meine Daten](@site/static/img/plugins/starwatcher/my_data.png)

Der Abschnitt Meine Daten enthält Objekte, mit denen der Benutzer interagiert hat. Dieser Abschnitt umfasst drei Listen:

- Favoriten — Objekte, die aus dem Kontextmenü gespeichert wurden.
- Tägliche Bahn — Objekte, für die die tägliche Bewegungsbahn aktiviert ist.
- Richtungen — Objekte mit einem aktiven Richtungsindikator auf der Sternenkarte.

Das Auswählen eines Elements öffnet das Kontextmenü des Objekts.

### Kataloge {#catalogs}

![Kataloge](@site/static/img/plugins/starwatcher/catalogs.png)

Der Kataloge-Abschnitt bietet Zugriff auf astronomische Kataloge, die im Astronomy-Plugin verfügbar sind.

Kataloge enthalten große Sammlungen von Himmelskörpern wie Sternen, Galaxien, Nebeln und Sternhaufen. Das Öffnen eines Katalogs zeigt eine Liste der in diesem Katalog enthaltenen Objekte an.

## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten](../../user/map/vector-maps.md)

