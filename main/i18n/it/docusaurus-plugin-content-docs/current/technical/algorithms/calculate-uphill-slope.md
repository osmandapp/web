---
source-hash: 6f725a1fadd0a2c5cd2626f8424f87e2e54b060d0b683fd33a90f9426413a826
sidebar_position: 5
---

# Calcolo di salita/discesa/pendenza {#calculation-of-uphill--downhill--slope}

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

Alcune tracce contengono molti dati rumorosi che devono essere filtrati per primi. Per ora applichiamo il filtro a tutte le tracce, ma le tracce preparate come quelle costruite da
Strumento Pianifica percorso, strumento Navigazione o dopo la correzione SRTM, il filtro non dovrebbe avere alcun effetto.


### Filtra pendenza 70% {#filter-70-slope}

Il filtraggio si basa sulla ricerca di **punti estremi** che sono significativamente più alti o più bassi di 1 punto vicino a sinistra e 1 punto vicino a destra sul grafico.
Questi **punti estremi** vengono esclusi da ulteriori calcoli. La ```soglia``` è [70% di pendenza](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L11) - [codice](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L72).

**Esempio 1**. (tutti i punti distribuiti per 10 m), elevazione - [5, 3, 10, 3, 5]. 10 è un punto estremo: perché è 10 > 3 (pendenza 70%).

**Esempio 2**. (tutti i punti distribuiti per 10 m), elevazione - [5, 3, 10, 13, 15]. 10 non è un punto estremo: perché 10 > 3 ma 10 < 13, quindi è un picco locale.

### Filtra punti saltellanti {#filter-jumping-points}

I punti che rappresentano colline locali ```/\``` vengono filtrati, ciò porta al problema che il punto più alto e quello più basso verranno sempre filtrati, ma consente di gestire tracce rumorose in cui la registrazione non era frequente, quindi il primo controllo con pendenza estrema non funziona. Riferimento al [codice](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L49).

**Esempio 1**. Elevazione - [5, 3, 10, 3, 5] -> [5, 5].

**Esempio 2**. Elevazione - [5, 6, 10, 7, 5] -> [5, 6, 7, 5].

**Esempio 3**. Elevazione - [5, 2, 3, 4, 5] -> [5, 3, 4, 5].


### Trovare gli estremi {#finding-extremums}

Per trovare gli estremi viene utilizzato l'algoritmo [Rames-Dougals-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm). Non è assolutamente buono per trovare esattamente gli estremi su un grafico casuale, ma nel calcolo dell'altitudine evita molti piccoli picchi casuali che potrebbero verificarsi durante una lunga salita e alcune discese brevi e impercettibili nel mezzo.

Lo scopo principale dell'algoritmo è trovare il numero minimo di linee rette che potrebbero rappresentare il grafico dell'altitudine. La ```soglia``` è **[7 metri](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationDiffsCalculator.java#L13)**. Quindi tutti i picchi più alti di 7 metri di differenza verranno rilevati su superfici piane e non verranno rilevati se sono inferiori.

Gli estremi vengono visualizzati sul grafico come punti blu con il plugin di sviluppo OsmAnd abilitato.

**Esempio 1**. Elevazione - [0, 0, 10, 0, 0]. L'**estremo** è 10.

**Esempio 2**. Elevazione - [0, 1, 5, 4, -3, -2, -1, 0]. **Nessun estremo** - tutti con differenza inferiore a 7 metri.


### Calcola salita/discesa tra gli estremi {#calculate-uphill--downhill-between-extremums}

Ad esempio, se hai una traccia semplice che sale e scende, hai solo 1 massimo sul tuo percorso, quindi la
  ```
  Differenza di elevazione iniziale = <elevazione iniziale> - <elevazione estrema> :
  Differenza di elevazione finale = <elevazione estrema> - <elevazione finale> : se positiva - **salita**, se negativa - **discesa**
  ```

1. Se *Differenza di elevazione iniziale* > 0
  - **salita** = *differenza di elevazione iniziale*
  - **discesa** = *differenza di elevazione finale*

2. Se *Differenza di elevazione finale* > 0
  - **salita** = *differenza di elevazione finale*
  - **discesa** = *differenza di elevazione iniziale*


Verranno aggiunti altri esempi.


## Correzione altitudine SRTM {#altitude-srtm-correction}

Ci sono 2 alternative che è possibile utilizzare in OsmAnd per ottenere la correzione dell'altitudine.

1. Apri la traccia in OsmAnd Android e trova, *Modifica traccia → Opzioni → Correzione altitudine*
1.1 **Online** elaborerà la traccia tramite il server e i dati di OsmAnd.
1.2 **Offline** elaborerà la traccia sul dispositivo se sono stati scaricati i file geotiff 3D.
2. Apri il sito web https://osmand.net/map e carica la traccia e visualizza l'elevazione SRTM.


## Pendenza {#slope}

Il grafico verde viene calcolato in modo diverso rispetto a salita/discesa e potrebbe presentare lievi variazioni. In teoria, in tutti gli **estremi** il grafico verde dovrebbe **attraversare la linea 0**, anche se tutti i punti con pendenza 0 sono estremi.

Per calcolare la pendenza, l'intero dato viene suddiviso in passi uguali di 20 metri. Per ogni punto di questa griglia viene calcolata l'altitudine media intorno al punto (raggio di 10 metri). Quindi viene calcolata la derivata discreta utilizzando la [differenza centrale finita](https://en.wikipedia.org/wiki/Finite_difference).