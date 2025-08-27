---
source-hash: 6f725a1fadd0a2c5cd2626f8424f87e2e54b060d0b683fd33a90f9426413a826
sidebar_position: 5
---

# Berekening van stijging / daling / helling {#calculation-of-uphill--downhill--slope}

OsmAnd gebruikt verschillende algoritmen om de **helling** en **stijging** te berekenen op basis van SRTM-satellietgegevens die zijn ingebed in offline kaarten en op basis van opgenomen GPX-tracks.

Het hoofddoel van het berekenen van **stijging** is om relevante informatie te geven over hoeveel **extra energie** wordt verbruikt bij het omhooggaan. Dit hangt uiteraard af van meerdere factoren, zoals het voertuig of de manier van transport, het oppervlak, het gewicht van de persoon en andere.
Uiteindelijk moet **stijging** een parameter zijn die in aanmerking wordt genomen bij op hoogte gebaseerde routering, om energiezuinige routering te produceren.

Het hoofddoel van het berekenen van **helling** is om een visuele indicatie te hebben welke steile wegen vermeden moeten worden.

## Stijging / Daling {#uphill--downhill}

Er zijn veel problemen bij het berekenen van **stijging**, omdat er geen standaard is en omdat het afhangt van de manier van transport en vele andere parameters, is het moeilijk om de gebruiker redelijke controle te bieden zonder het te ingewikkeld te maken. Meestal wordt stijging vergeleken met andere programma's, maar er is geen programma dat een gouden standaard heeft.

OsmAnd gebruikt een algoritme in 3 stappen:

- Ruwe gegevens filteren.
- Lokale extremen (minima en maxima) vinden.
- De som van de verschillen tussen min en max berekenen.

Sommige tracks bevatten veel ruwe gegevens die eerst gefilterd moeten worden. Voor nu passen we filtering toe op alle tracks, maar voor voorbereide tracks, zoals die gemaakt zijn met de tool 'Route plannen', de navigatietool of na SRTM-correctie, zou filtering geen effect moeten hebben.

### Filter 70% helling {#filter-70-slope}

Filtering is gebaseerd op het vinden van **extreme punten** die significant hoger of lager zijn dan 1 buurpunt aan de linkerkant en 1 buurpunt aan de rechterkant op de grafiek. Deze **extreme punten** worden uitgesloten van verdere berekening. De ```drempel``` is [70% helling](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L11) - [code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L72).

**Voorbeeld 1**. (alle punten verdeeld over 10m), hoogte - [5, 3, 10, 3, 5]. 10 is een extreem punt: want 10 > 3 (70% helling).

**Voorbeeld 2**. (alle punten verdeeld over 10m), hoogte - [5, 3, 10, 13, 15]. 10 is geen extreem punt: want 10 > 3 maar 10 < 13, dus het is een lokale piek.

### Springende punten filteren {#filter-jumping-points}

Punten die lokale heuvels ```/\``` voorstellen, worden gefilterd. Dit leidt tot het probleem dat het hoogste en laagste punt altijd worden gefilterd, maar het maakt het mogelijk om om te gaan met ruisige tracks waarbij de opname niet frequent was, zodat de eerste controle met extreme helling niet werkt. Referentie naar de [code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L49).

**Voorbeeld 1**. Hoogte - [5, 3, 10, 3, 5] -> [5, 5].

**Voorbeeld 2**. Hoogte - [5, 6, 10, 7, 5] -> [5, 6, 7, 5].

**Voorbeeld 3**. Hoogte - [5, 2, 3, 4, 5] -> [5, 3, 4, 5].

### Extremen vinden {#finding-extremums}

Om extremen te vinden, wordt het [Ramer-Douglas-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) algoritme gebruikt. Het is niet absoluut goed om exact extremen te vinden op een willekeurige grafiek, maar bij hoogteberekening vermijdt het veel willekeurige kleine pieken die kunnen optreden tijdens een lange stijging en enkele onopvallend korte dalingen daartussenin.

Het hoofddoel van het algoritme is om het minimale aantal rechte lijnen te vinden dat de hoogtegrafiek kan voorstellen. De ```drempel``` is **[7 meter](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationDiffsCalculator.java#L13)**. Dus alle pieken die meer dan 7 meter verschil hebben, worden gedetecteerd op vlakke oppervlakken en worden niet gedetecteerd als ze minder zijn.

Extremen worden op de grafiek weergegeven als blauwe stippen met de OsmAnd ontwikkelingsplugin ingeschakeld.

**Voorbeeld 1**. Hoogte - [0, 0, 10, 0, 0]. **Extremum** is 10.

**Voorbeeld 2**. Hoogte - [0, 1, 5, 4, -3, -2, -1, 0]. **Geen extremen** - allemaal minder dan 7 meter verschil.

### Bereken stijging / daling tussen extremen {#calculate-uphill--downhill-between-extremums}

Als u bijvoorbeeld een eenvoudige track hebt die omhoog en omlaag gaat, hebt u slechts 1 maximum op uw pad, dus de
  ```
  Start hoogteverschil = <start hoogte> - <Extremum hoogte>    :
  Eind hoogteverschil = <Extremum hoogte> - <eind hoogte>      : indien positief - **stijging**, indien negatief - **daling**
  ```

1. Als *Start hoogteverschil* > 0
  - **stijging** = *start hoogteverschil*
  - **daling** = *eind hoogteverschil*

2. Als *Eind hoogteverschil* > 0
  - **stijging** = *eind hoogteverschil*
  - **daling** = *start hoogteverschil*

Meer voorbeelden zullen worden toegevoegd.

## Hoogte SRTM-correctie {#altitude-srtm-correction}

Er zijn 2 alternatieven die in OsmAnd kunnen worden gebruikt om hoogtecorrectie te krijgen.

1. Open track in OsmAnd Android en zoek, *Track bewerken → Opties → Hoogtecorrectie*
1.1 **Online** zal de track verwerken via de OsmAnd-server en -gegevens.
1.2 **Offline** zal de track op het apparaat verwerken als 3D geotifs-bestanden zijn gedownload.
2. Open de website https://osmand.net/map en upload de track en bekijk de SRTM-hoogte.

## Helling {#slope}

De groene grafiek wordt anders berekend dan stijging/daling en kan lichte variaties vertonen. In theorie zou in alle **extremen** de groene grafiek de **0-lijn moeten kruisen**, hoewel alle 0-hellingspunten extremen zijn.

Om de helling te berekenen, worden alle gegevens in gelijke stappen van 20 meter verdeeld. Voor elk punt van dat raster wordt de gemiddelde hoogte rond het punt (10 meter straal) berekend. Vervolgens wordt de discrete afgeleide berekend met behulp van [Eindige centrale differentie](https://en.wikipedia.org/wiki/Finite_difference).