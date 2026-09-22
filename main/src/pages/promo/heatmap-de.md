---
title: OsmAnd Heatmap — wo Menschen wirklich fahren, wandern und unterwegs sind
---

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';

![Logo](@site/static/img/promo/logo_osmand_black.png)

# OsmAnd Heatmap: Millionen echter GPS-Tracks entdecken

**OsmAnd Heatmap** ist ein neues Web-Tool, das zeigt, wo sich Menschen tatsächlich bewegen — zu Fuß, mit dem Rad, mit dem Auto und mehr. Es basiert auf den **öffentlichen GPS-Tracks von OpenStreetMap**: Jeder Track, den OSM-Mitwirkende hochgeladen haben, wird pro Kartenzelle nach Aktivität und Upload-Monat gezählt und als Heatmap gezeichnet. Je heller die Linie, desto mehr Tracks führen durch diese Stelle.

Das Tool basiert vollständig auf offenen Daten — und zeigt Ihnen jeden einzelnen Track hinter dem Bild.

Das Tool befindet sich derzeit im **Test**: [test.osmand.net/map/prototypes/heatmap.html](https://test.osmand.net/map/prototypes/heatmap.html)

Am Ende dieses Artikels finden Sie eine kurze Umfrage. Ihr Feedback bestimmt, wie es weitergeht.

![OsmAnd Heatmap rund um Krakau](@site/static/img/promo/heatmap/overview.webp)

:::note Was steckt drin
Mehr als **8,3 Millionen** OSM-GPX-Tracks sind indexiert. Rund **6,7 Millionen** davon werden standardmäßig angezeigt; der Rest sind sehr kurze, lückenhafte oder unlesbare Tracks, die ausgeblendet bleiben, bis Sie die Gruppe *Ignored* einschalten. Die Tracks sind nach Aktivität gruppiert: Auto, Radfahren (Rennrad, MTB, Gravel, E-Bike …), zu Fuß (Wandern, Laufen, Spazieren …), Motorrad, Wintersport, Wassersport, Luftsport und weitere.
:::

_________________

## Die Oberfläche

Die Karte füllt den Bildschirm, das linke Panel enthält vier Abschnitte. Die Kacheln werden einmal geladen; alle Filter darunter greifen sofort in Ihrem Browser.

### Display

Wie die Heatmap aussieht.

![Display-Einstellungen](@site/static/img/promo/heatmap/display.webp)

- **Algorithm** — *Smooth (Gaussian)* zeichnet weiche Bänder, *Sharp thin lines* hält die Linien bei kleinem Zoom scharf, *Raw cells* zeigt das zugrunde liegende Raster.
- **Colours** — vier Paletten: *Vivid* für die helle Karte, *Turbo*, *Hot* und *Blue* für die dunkle Karte.
- **Width** und **Glow** der Linien.
- **Scale** — *Equalized* verteilt die Farben gleichmäßig über die sichtbaren Tracks (1, 2 und 3 Tracks bekommen so unterschiedliche Farben), *Log* ist die klassische logarithmische Skala. Lassen Sie **Auto** eingeschaltet, passt sich die Skala dem sichtbaren Ausschnitt an; schalten Sie es aus und setzen Sie Ihr eigenes **max**.
- **Opacity** der Heat-Ebene und der **Map**-Stil darunter: *Grey*, *Dark* oder *Colour*.

### Data filter

Welche Tracks gezählt werden.

![Datenfilter](@site/static/img/promo/heatmap/filter.webp)

- **OSM upload month** — zwei Schieberegler begrenzen den Zeitraum: Nur Tracks, die in diesem Zeitraum zu OpenStreetMap hochgeladen wurden, werden gezeichnet. Der volle Bereich beginnt 2005.
- **Hide cells under N tracks** — die Mindestzahl an Tracks, damit eine Linie gezeichnet wird. Bei **1** ist jeder einzelne Track sichtbar; bei **5** erscheinen nur Stellen, an denen sich mindestens fünf Tracks überlagern — die beliebten Routen treten hervor, das Rauschen verschwindet.

### Activities

![Aktivitäten](@site/static/img/promo/heatmap/activities.webp)

Jede Aktivitätsgruppe hat ein Kontrollkästchen und eine Track-Anzahl. Klappen Sie eine Gruppe auf, um einzelne Aktivitäten zu wählen — zum Beispiel nur *Mountain biking* innerhalb von *Cycling*. Die Schnellknöpfe **All**, **None**, **Foot + cycling** und **No motor** schalten typische Kombinationen mit einem Klick um. Die Gruppe *Ignored* (kurze, lückenhafte, unlesbare oder Tracks ohne Zeitangaben) ist standardmäßig aus.

### Review tracks

![Tracks bewerten](@site/static/img/promo/heatmap/review.webp)

**Um eine Bewertung abzugeben, melden Sie sich zuerst an** — mit Ihrem OsmAnd-Konto unter [test.osmand.net/map/account](https://test.osmand.net/map/account) — und kehren Sie dann zur Heatmap zurück. Zum Ansehen der Tracks ist kein Konto nötig.

Die Heatmap ist nicht nur ein Bild — Sie kommen an die Tracks dahinter. Zoomen Sie auf **16 oder näher** und klicken Sie auf eine Linie: Das Panel listet die Tracks, die unter Ihrem Klick verlaufen. Wählen Sie einen, um ihn mit seinen Details auf der Karte zu sehen, die Original-GPX-Datei herunterzuladen oder eine Bewertung abzugeben. Jeder kann die Tracks und ihre Bewertungen ansehen. Der Link **Download reviewed tracks (.csv.gz)** unten im Abschnitt exportiert alle bisher bewerteten Tracks mit ihren Urteilen als eine CSV-Datei.

### Data source

![Datenquelle](@site/static/img/promo/heatmap/datasource.webp)

Wie viele Tracks dem aktuellen Filter entsprechen, wann die Daten erstellt wurden und wie die Farben berechnet werden. Jeder OSM-Nutzer wird pro Zelle, Aktivität und Monat höchstens einmal gezählt — ein einzelner sehr aktiver Uploader kann also keine ganze Region einfärben.

_________________

## Beispiel: Mountainbike-Trails in Oberösterreich

Suchen wir die MTB-Routen rund um Kallham, Österreich (48,38° N, 13,60° O), die in den letzten fünf Jahren gefahren wurden.

**1. Aktivität wählen.** Klicken Sie auf **None**, klappen Sie **Cycling** auf und haken Sie **Mountain biking** an.

**2. Zeitraum setzen.** Schieben Sie den linken Datumsregler auf 2021-09 — ältere Tracks brauchen wir nicht.

**3. Dichte setzen.** Tragen Sie **3** bei *Hide cells under … tracks* ein: Es bleiben nur Trails, die mindestens drei Personen gefahren sind.

![MTB-Filter](@site/static/img/promo/heatmap/example-filter.webp)

Die Karte zeigt jetzt das Netz der Trails, die Mountainbiker wirklich nutzen:

![MTB-Heatmap bei Kallham](@site/static/img/promo/heatmap/example-filter-map.webp)

**4. Hineinzoomen und einen Trail anklicken.** Öffnen Sie [diese Stelle bei Zoom 16](https://test.osmand.net/map/prototypes/heatmap.html#16/48.3388/13.6612) und klicken Sie auf eine der Linien.

![Zoom 16](@site/static/img/promo/heatmap/example-zoom16.webp)

Der Abschnitt **Review tracks** listet die Tracks unter dem Klick, jeweils mit Aktivität, Dateiname, Länge, Datum und Entfernung zum Punkt:

![Tracks unter dem Klick](@site/static/img/promo/heatmap/example-tracks-list.webp)

**5. Einen Track auswählen.** Klicken Sie auf einen Eintrag in der Liste (oder auf die Linie in der Karte): Der Track wird hervorgehoben und seine Karte öffnet sich — ein Link zum OSM-Trace, Aktivität, Länge, Datum, Tags und Beschreibung. **Download GPX** liefert die Originaldatei von OpenStreetMap mit Zeit und Höhe.

![Ausgewählter Track](@site/static/img/promo/heatmap/example-track-selected.webp)

**6. Eine Bewertung abgeben.** Wählen Sie ein Urteil — *Correct*, *Wrong activity*, *Bad quality*, *Wrong line*, *Simulated* oder *Not a track* —, geben Sie optional die richtige Aktivität und einen Kommentar an und klicken Sie auf **Send review**.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/static/img/promo/heatmap/example-verdict.webp').default} alt="Urteil"/></td>
    <td><img src={require('@site/static/img/promo/heatmap/example-saved.webp').default} alt="Bewertung gespeichert"/></td>
  </tr>
</table>

Ihr Urteil wird gespeichert und neben dem Track in der Liste angezeigt. Bewertungen helfen uns, die Aktivitätserkennung zu verbessern und die Daten zu bereinigen.

:::tip Zum Bewerten anmelden
Bewertungen sind an Ihr **OsmAnd Cloud**-Konto gebunden. Aktivieren Sie vor dem Absenden Ihr Konto auf dem Testserver unter [test.osmand.net/map/account](https://test.osmand.net/map/account) — melden Sie sich mit derselben E-Mail an, die Sie für OsmAnd Cloud in der App verwenden — und kehren Sie dann zur Heatmap zurück. Zum Ansehen von Tracks und Bewertungen ist kein Konto nötig.
:::

_________________

## Tipps

- Die URL merkt sich die Kartenposition (`#zoom/lat/lon`) — so können Sie einen Link zu jedem Ort teilen.
- Display-Einstellungen bleiben im Browser gespeichert; Filter werden beim Neuladen der Seite zurückgesetzt.
- Für den klassischen Heatmap-Look nutzen Sie die *Dark*-Karte mit der Palette *Hot* oder *Blue*.
- Auf einer stark befahrenen Straße können sich Tausende Tracks überlagern; die Liste zeigt die 60, die Ihrem Klick am nächsten liegen.

## Sagen Sie uns Ihre Meinung

Die Heatmap ist ein Prototyp, und Ihr Feedback entscheidet, wie es weitergeht.

- **2-Minuten-Umfrage** — wie Sie sie nutzen und was fehlt: [Heatmap-Feedback-Formular](https://docs.google.com/forms/d/e/1FAIpQLSc7SG6TiDbg5QYWRDCLht1Ydbw19sZ89Ajx3nOpWD2Cc7tEJA/viewform)
- **Tracks bewerten** — hineinzoomen, einen Ihnen bekannten Trail anklicken und ein Urteil senden. Das dauert nur Sekunden und verbessert die Daten direkt (zuerst mit Ihrem OsmAnd-Cloud-Konto unter [test.osmand.net/map/account](https://test.osmand.net/map/account) anmelden).

_________________

<LinksSocial/>
<LinksTelegram/>
