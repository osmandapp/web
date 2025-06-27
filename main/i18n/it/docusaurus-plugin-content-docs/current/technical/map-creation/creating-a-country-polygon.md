---
source-hash: e0173be6fa81b710afb1b4b52c4268f63865918a50d504364df4f0d772bf2d39
title: Creazione di un poligono di paese
versions: '*'
---
**_Questo articolo deve essere rivisto_**

Questo articolo descrive come creare un poli(gono) per un paese mancante in geofabrik.de e come aggiungere questo poli al server di generazione mappe di OsmAnd

## Introduzione {#introduction}

OsmAnd viene fornito con molte mappe per molti paesi. La maggior parte delle mappe viene creata da mappe di "dati grezzi" scaricate da [geofabrik.de](http://download.geofabrik.de). Geofabrik fornisce gratuitamente queste mappe di dati grezzi a tutti e offre servizi e prodotti (commerciali) basati su queste mappe.

Geofabrik.de ha la strategia di fornire mappe per i paesi richiesti da un numero maggiore di utenti o dai loro clienti. Ciò significa che alcune mappe non arrivano mai su geofabrik perché semplicemente non ci sono abbastanza richieste (o nessuna), come alcuni paesi esotici come le Seychelles o il Burundi, ecc.

## Processo del server {#server-process}
A causa di questa decisione strategica di geofabrik, OsmAnd ha un'opzione per generare mappe per questi paesi e vengono utilizzati gli strumenti [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-development.zip) e [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert). Per OsmAndMapCreator si tratta di un processo in tre fasi:
- OsmAndMapCreator necessita di un poligono che circondi il confine esterno del paese.
- OsmAndMapCreator necessita della "mappa di dati grezzi" del livello superiore successivo che incorpora questo paese. Per il Burundi significa che OsmAndMapCreator necessita della mappa dell'Africa. Per la Renania Settentrionale-Vestfalia significa che OsmAndMapCreator necessita della mappa della Germania.
- [Osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) creerà una mappa di "dati grezzi" dal poligono estraendo i dati della mappa dalla mappa "genitore".
- OsmAndMapCreator creerà una mappa obf di OsmAnd basata sulla mappa intermedia di "dati grezzi" generata da osmconvert.

## Azioni necessarie {#necessary-actions}
A seconda della complessità del poligono (generato), questa catena completa di azioni può richiedere da 10 minuti a 2 ore in totale.

### 1. Ottenere la relazione OpenStreetMap da Nominatim {#1-get-the-openstreetmap-relation-from-nominatim}
- Vai su [nominatim.openstreetmap.org](https://nominatim.openstreetmap.org/)
- Inserisci il nome del tuo paese
- Una volta trovato, clicca sul link "(dettagli)"
- In Dettagli scorri verso il basso fino a "OSM: relation " e annota o copia il numero ID della relazione.

### 2. Generare il poligono {#2-generate-the-polygon}
- Vai su [polygons.openstreetmap.fr](http://polygons.openstreetmap.fr/)
- Inserisci (o incolla) il numero ID "OSM: relation " che hai recuperato da Nominatim per il paese desiderato nel campo "Id of relation".
- Questo creerà un poligono predefinito, composto da 250 a 3500 nodi (NPoints). Il poligono stesso si trova nella colonna "poly".
- In caso di più di 350 nodi dovrai semplificare il poligono. Più semplice è il poligono, più velocemente può essere creata la mappa del paese (ovviamente a seconda del contenuto)

### 3. Semplificare il poligono {#3-simplify-the-polygon}
Il numero di Node Points (NPoints) deve essere il più basso possibile per la creazione più veloce possibile della mappa da parte di OsmAndMapCreator. Come accennato: in caso di più di 350 punti nodo, prova a ridurli semplificando il poligono.
- In caso di più di 350 nodi, prova a ridurli "giocando" con la variabile X (secondo la mia esperienza le altre non contano molto)
- A volte ottieni ottimi risultati (90 NPoints, 200 NPoints, 270 NPoints) e quindi hai finito con questo passaggio. A volte semplicemente non riesci a scendere sotto i 450 NPoints o giù di lì. Quindi devi applicare ulteriori passaggi manuali.
- Salva il tuo poligono finale su file. Usa il nome predefinito corretto, come france.poly. Usa caratteri minuscoli.

### 4. Ulteriore modifica e semplificazione del poligono {#4-further-modification-and-simplification-of-the-polygon}
- Apri JOSM (scarica se necessario) e apri il file poligono che hai creato (hai fatto una copia/backup del poligono originale che hai salvato?).
- Aggiungi uno sfondo dal menu "Immagini" e seleziona lo sfondo predefinito "OpenStreetMap (Mapnik)".
- Rimuovi manualmente i punti nodo dove possibile. \*Nota:\* Mantieni il poligono il più vicino possibile al confine. Hai bisogno di una certa sovrapposizione ma cerca di mantenerla al di sotto di 2-5 chilometri. La sovrapposizione nei paesi verrà generata due volte per ogni paese. Meno sovrapposizione significa meno tempo di rendering ed errori di rendering. Sulle coste e intorno alle isole cerca di mantenere una maggiore distanza (20 chilometri). Questo è ampiamente accettato e il mare è comunque "vuoto".
- Quando hai fatto del tuo meglio puoi salvare il poligono aggiornato e corretto. Come detto: cerca di ottenere il minor numero possibile di punti nodo, ma a volte un confine di paese è così complicato che hai semplicemente bisogno di più punti nodo per descriverlo e per mantenere il poligono il più vicino possibile al confine: così sia.
- **Non caricare il poligono su OSM**. JOSM ti chiederà di caricare il tuo lavoro su OpenStreetMap. Non farlo per questi poligoni a meno che tu non sappia esattamente cosa stai facendo. Quasi tutti i paesi del mondo sono già perfettamente coperti in OpenStreetMap (altrimenti nominatim non sarebbe in grado di darti i dettagli sul paese, e polygons.openstreetmap.fr non sarebbe in grado di generare il poligono basato sull'ID della relazione OSM).

### 5. Aggiungere il poli(gono) al server OsmAnd {#5-adding-the-polygon-to-the-osmand-server}

Per poterlo fare devi registrarti come utente.

Per rendere possibile la generazione della mappa sono necessari due passaggi:
- Aggiungere il poligono alla sezione dati della mappa
- Aggiungere il paese al file di dati utilizzato per generare le mappe obf di OsmAnd.

Aggiungere il poligono alla sezione dati della mappa
- Vai all'indirizzo web del server di sviluppo OsmAnd all'indirizzo [https://github.com/osmandapp/](https://github.com/osmandapp/ "https://github.com/osmandapp/")
- Seleziona la sezione OsmAnd-misc.
- Seleziona "fork" per creare il tuo repository personale
- Crea un nuovo file e copia i dati del tuo poligono all'interno. Salva il file.
- Crea una pull request.

Aggiungi la creazione della mappa all'elenco batch
- Vai all'indirizzo web del server di sviluppo OsmAnd all'indirizzo [github.com/osmandapp](https://github.com/osmandapp/)
- Seleziona la sezione OsmAnd-tools.
- Seleziona "fork" per creare il tuo repository personale.
- Nel tuo repository personale vai alla cartella obf-generation/regions.
- Seleziona il file indexes.xml e clicca su modifica.
- Aggiungi il tuo paese nella posizione pertinente e salva il file.
- Crea una pull request.

## Creare le tue mappe personali da un poligono {#creating-your-own-personal-maps-from-a-poly}

Puoi creare, ad esempio, poligoni da paesi, contee/province/stati, regioni e città.

Supponiamo che tua figlia vada a Parigi per un paio di giorni con un'amica. Non è interessata alla navigazione, a camminare o andare in bicicletta (a meno che non sia assolutamente necessario), ma vuole sapere dove si trova, dove andare e dove trovare i luoghi interessanti (POI). Inoltre ha un piccolo telefono (CPU di fascia bassa, poca memoria) e una piccola scheda SD (piena di musica). Quindi la mappa deve essere il più piccola possibile: sia per l'archiviazione che per le prestazioni. Puoi ovviamente scaricare la mappa per france\_ile-de-france.obf contenente Parigi, ma puoi anche generare una mappa di Parigi "su misura".
- Fai scaricare OsmAnd a tua figlia, o meglio ancora: falla acquistare OsmAnd+
- Ottieni l'ID della relazione OSM per Parigi da Nominatim.
- Ottieni il poligono (semplificato) per l'ID di Parigi da polygons.openstreetmap.fr
- scarica o compila [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert)
- scarica la mappa "dati grezzi" dell'Ile-de-France da geofabrik.de
- crea la mappa di dati grezzi di Parigi dalla mappa dell'Ile-de-France e dal poligono di Parigi come segue:
<pre>
$ osmconvert ile-de-france.osm.pbf -B=paris.poly --out-pbf > Paris.osm.pbf
</pre>
- Scarica l'applicazione OsmAndMapCreator da [download.osmand.net/latest-night-build/](http://download.osmand.net/latest-night-build/ "https://download.osmand.net/latest-night-build/")
- Crea la tua mappa obf di OsmAnd dai dati della mappa Paris.osm.pbf utilizzando OsmAndMapCreator.