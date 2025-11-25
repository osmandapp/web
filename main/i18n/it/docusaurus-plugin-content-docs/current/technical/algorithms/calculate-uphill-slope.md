---
source-hash: d793188a0617dee4c181a2021483255f3e56c64b9e25db7249b0fb0d19923b4d
sidebar_position: 5
---

# Calcolo di salita / discesa / pendenza {#calculation-of-uphill--downhill--slope}

OsmAnd utilizza diversi algoritmi per calcolare la **pendenza** e la **salita** basandosi sui dati satellitari SRTM incorporati nelle mappe offline e sulle tracce GPX registrate.

L'obiettivo principale del calcolo della **salita** è fornire informazioni rilevanti su quanta **energia extra** viene spesa per salire, ovviamente dipende da
molteplici fattori come il veicolo o il mezzo di trasporto, la superficie, il peso della persona e altri.
Quindi, alla fine, la **salita** dovrebbe essere un parametro preso in considerazione dal routing basato sull'altitudine, per produrre un routing efficiente dal punto di vista energetico.

L'obiettivo principale del calcolo della **pendenza** è avere un'indicazione visiva delle strade ripide da evitare.


## Salita / Discesa {#uphill--downhill}

Ci sono molti problemi nel calcolare la **salita** perché non esiste uno standard e perché dipende dal mezzo di trasporto e da molti altri parametri, è difficile fornire un controllo ragionevole all'utente in modo che non sia troppo complicato. Di solito la salita viene confrontata con altri programmi, ma non esiste un programma che abbia uno standard aureo.

OsmAnd utilizza un algoritmo in 3 passaggi:

- Filtrare i dati rumorosi. 
- Trovare gli estremi locali (minimi e massimi).
- Calcolare la somma delle differenze tra min e max.

Alcune tracce contengono molti dati rumorosi che devono essere filtrati per primi. Per ora applichiamo il filtraggio a tutte le tracce ma le tracce preparate come quelle costruite da 
Strumento Pianifica percorso, strumento Navigazione o dopo la correzione SRTM, il filtraggio non dovrebbe avere alcun effetto.


### Filtra pendenza 70% {#filter-70-slope}

Il filtraggio si basa sulla ricerca di **punti estremi** che sono significativamente più alti o più bassi di 1 punto vicino a sinistra e 1 punto vicino a destra sul grafico. 
Quei **punti estremi** vengono esclusi da ulteriori calcoli. La ```threshold``` è [70% slope](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L11) -  [code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L72).

**Example 1**. (all points distributed by 10m), elevation - [5, 3, 10, 3, 5]. 10 is extreme point: cause it's 10 > 3 (70% slope).

**Example 2**. (all points distributed by 10m), elevation - [5, 3, 10, 13, 15]. 10 is not an extreme point: cause 10 > 3 but 10 < 13, so it's a local peak.

### Filtra punti saltellanti {#filter-jumping-points}

Points that represent local hills ```/\``` are filtered, it leads to an issue that highest and lowest point will be always filtered out but it allows to deal with noisy tracks where recording was not frequent so first check with extreme slope doesn't work. Reference to the [code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L49).

**Example 1**. Elevation - [5, 3, 10, 3, 5] -> [5, 5].

**Example 2**. Elevation - [5, 6, 10, 7, 5] -> [5, 6, 7, 5].

**Example 3**. Elevation - [5, 2, 3, 4, 5] -> [5, 3, 4, 5].


### Finding extremums {#finding-extremums}

To find extremums [Rames-Dougals-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) algorithm is used. It's not absolutely good to find exactly extremums on the random graph, but in altitude calculation it avoids lots of random small peaks that could happen during 1 long uphill and some unnoticeably short downhills in between.

The main purpose of the algorithm is to find minimum number of straight lines that could represent the altitude graph. The ```threshold``` is **[7 meters](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationDiffsCalculator.java#L13)**. So all peaks higher than 7 meters difference will be detected on a flat surfaces and won't be detected if they are less.

Extremums are displayed on the graph as blue dots with еру OsmAnd development plugin enabled.

**Example 1**. Elevation - [0, 0, 10, 0, 0]. **Extremum** is 10.

**Example 2**. Elevation - [0, 1, 5, 4, -3, -2, -1, 0]. **None extremums** - all less than 7 meters difference.


### Calculate uphill / downhill between extremums {#calculate-uphill--downhill-between-extremums}

For example, if you have a simple track that goes up and down, you have only 1 maximum on your path, so the 
  ``` 
  Start ele diff = <start elevation> - <Extremum elevation>    : 
  End   ele diff = <Extremum elevation> - <end elevation>      : if positive - **uphill**, if negative - **downhill**
  ```

1. If *Start ele diff* > 0
  - **uphill** = *start ele diff*  
  - **downhill** = *end ele diff*  

2. If *End ele diff* > 0
  - **uphill** = *end ele diff*   
  - **downhill** = *start ele diff*  


More examples will be added.


## Elevation Correction {#elevation-correction}

Elevation Correction adjusts the altitude values in a GPX track using external elevation sources. Two elevation data sources are available:

1. Use terrain maps (DEM / SRTM / 3D elevation data)
- Replaces altitude values with data from downloaded terrain maps (DEM/SRTM or 3D GeoTIFF files).
- Works locally on the device if elevation tiles are installed.
- This method keeps the original track geometry.

2. Use nearby roads (Attach to roads)
- Adjusts the track geometry to match the road network.
- Uses road elevation data for altitude correction.
- This method may modify the track shape due to road snapping.

Data that may change after applying Elevation Correction:
- Distance
- Size
- Ascent
- Descent
- Average speed
- Maximum speed
- Duration
- Time in motion

GPX timestamps (date/time) are preserved when using both elevation sources.


## Pendenza {#slope}

Il grafico verde viene calcolato in modo diverso rispetto a salita / discesa e potrebbe presentare lievi variazioni. In teoria in tutti gli **estremi** il grafico verde dovrebbe **attraversare la linea 0**, anche se tutti i punti con pendenza 0 sono estremi.

Per calcolare la pendenza, l'intero dato viene suddiviso in passi uguali di 20 metri. Per ogni punto di quella griglia viene calcolata l'altitudine media intorno al punto (raggio di 10 metri). Quindi viene calcolata la derivata discreta utilizzando [Finite central difference](https://en.wikipedia.org/wiki/Finite_difference).