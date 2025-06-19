---
source-hash: d5b7054e046a16fa52c2baf86bbe3278c548299ab710161c6f4e85a0c2933ff7
sidebar_position: 7
---

# Mappe binarie di OsmAnd - .obf {#osmand-binary-maps---obf}

## Introduzione {#introduction}
Parliamo di *.travel.obf, *.wiki.obf, *.roads.obf, ...

Molte domande riguardano il contenuto e i problemi relativi ai dati delle mappe nell'applicazione. Questo argomento svela alcuni dettagli tecnici del formato dati interno e dell'elaborazione dei dati. Può essere interessante per i non sviluppatori che hanno familiarità con la struttura dei dati OSM.

I dati delle mappe offline di OsmAnd sono contenuti nei file 'obf'. I file 'obf' hanno una struttura complessa e possono essere costituiti da molte parti. È altamente consigliato mantenere le dimensioni dei file al di sotto dei 2 Gb. Attualmente i file obf possono avere molte parti costituite da più parti POI, più parti di dati di routing, più parti di mappa, più parti di trasporto e più parti di dati di indirizzo. Questo elenco può essere esteso in futuro. Per combinare, dividere o eliminare alcune parti dal file obf, utilizzare lo strumento console 'binary\_inspector' fornito con OsmAndMapCreator.
* Parte POI, Trasporto
* Parte Mappa
* Parte Indirizzo

> D: Come fa mapcreator a generare il suo elenco di tutti i luoghi che appariranno successivamente nella ricerca di indirizzi offline di OsmAnd? Quali oggetti vengono utilizzati in dettaglio per questo? Quali nodi con un tag place sono inclusi e quali sono esclusi?
>
> R: Tutti i luoghi visibili in OsmAnd come Città sono presi dai nodi che hanno il tag "place" [https://wiki.openstreetmap.org/wiki/Place](https://wiki.openstreetmap.org/wiki/Place "https://wiki.openstreetmap.org/wiki/Place"). Attualmente vengono utilizzati city, town, suburb, village, hamlet.
>
> D: Come gestisce mapcreator un poligono di area dato tramite una relazione con boundary=administrative? Come si associa un luogo dato come nodo al suo confine quando è presente nei dati OSM?
>
> R: In parole semplici: attualmente funziona per nome. Mapcreator cerca di visitare tutti i confini e crea un confine chiuso (!) dalla relazione o da strade separate e lo associa a un solo nome. Dopodiché cerca di abbinare \*place\* con \*boundary name\* utilizzando l'algoritmo \*contains of\*. C'è anche un controllo aggiuntivo se quel confine contiene il luogo. Se ci sono molti confini di diverso admin\_level con lo stesso nome (che si contengono a vicenda come distretto/città/regione con lo stesso nome), verrà scelto il più alto admin\_level con corrispondenza esatta. TODO Qui dovrebbero esserci più dettagli (sui distretti della città...) ...
>
> D: Dove si trova la documentazione che descrive quale livello amministrativo è giusto per costruire un'associazione a un determinato nodo luogo? Quali paesi preferiscono quale livello amministrativo?
>
> R: Attualmente l'associazione tra relazione admin\_level e admin\_centre non viene utilizzata. Perché solo poche relazioni forniscono tale informazione.
>
> D: Come fa MapCreator a sapere quale strada appartiene a quale luogo? Ci sono casi diversi quando viene dato un poligono di confine e quando non ce n'è nessuno?
>
> R: Ci sono molte strategie da controllare e sono prioritizzate nel seguente ordine:
> - Le più importanti sono i luoghi e i loro confini. Affinché l'algoritmo di gestione delle strade funzioni correttamente, i confini corrispondenti al luogo dovrebbero essere corretti. Se la strada appartiene a molti confini, verrà registrata in tutti i luoghi appropriati.
> - tag is\_in (è deprecato). Quindi, se una strada ha il tag is\_in, verrà analizzata e divisa per virgola e la strada verrà allegata a tutte le città pertinenti (per corrispondenza esatta del nome). (DA CONTROLLARE: controllo di base se la strada è nel raggio della città?)
> - Se la strada non appartiene a nessun confine (i confini non chiusi correttamente potrebbero essere un problema qui), cerca di trovare la città più vicina/più grande e registrare la strada in quella città (a volte si registra in una città a 1 km di distanza e perde la frazione più vicina a soli 100 m di distanza).
>
> L'ultima parte è molto imprecisa. Ecco perché molte strade vengono allegate a una città vicina.
>
> Nelle preferenze di MapCreator hai altre cinque impostazioni per i suffissi delle strade, lo zoom, la fluidità e il rendering... quali sono gli effetti dettagliati che puoi ottenere con ciascuna di esse? Queste impostazioni vengono effettivamente utilizzate?
>
> Strumenti
>
> - OsmAndMapCreator può visualizzare quali strade sono associate a quale città (menu contestuale -> Mostra indirizzo). I file obf locali dovrebbero essere presenti e configurati nelle Impostazioni.
> - Lo strumento Binary inspector può mostrare un elenco di strade per ogni città. Eseguire lo strumento senza parametri per vedere i possibili parametri.
> - Attualmente tutti i file di indice contengono gen.log. Visualizzando il file di log è possibile trovare errori nel processo di creazione della mappa e questo potrebbe dare una risposta sul perché alcune strade non si trovano nel posto corretto nell'indice degli indirizzi.
>
> Parte Indirizzo - flusso di lavoro
>
> Ci sono queste relazioni:
>
> città -> 0..1 confine
>
> confine -> 0..\*\* città (usato per definire il sobborgo della città)
>
> iterare tutti i NODI Osm e registrare come città se il tag = PLACE è presente:
>
> - estrarre città (TOWN, CITY).
> - estrarre villaggi (tutto il resto).
>
> iterare tutte le RELAZIONI e VIE con type=boundary e registrare tutti i confini:
>
> - il confine è chiamato Entità (via o relazione) con tag 'boundary=administrative' o con tag 'place=...'.
> - il confine dovrebbe essere admin\_level > 4 o non avere un admin\_level.
> - il confine non è sempre associato a una città (o stato, ...).
> - il confine può avere 'admin\_center', 'label' membro che punta a un nodo città.
> - il confine corrisponde esattamente per nome al nodo città e il nodo città rientra nel confine.
> - il confine corrisponde all'inizio, alla fine o alla sottostringa per nome al nodo città e il nodo città rientra nel confine.
>
> Molti confini possono essere associati a una città. Ecco l'ordine su come viene preso il confine più importante e associato alla città:
>
> - Il confine viene abbinato esattamente per nome e ha il tag place.
> - Il confine viene abbinato esattamente per nome e ha admin\_level 8 > 7 > 6 > 9 > 10 > 5... o niente.
> - Il confine ha corrispondenza admin\_id.
> - Tutti gli altri casi, inclusa l'ordinamento di admin\_level.
>
> se la città non ha alcun confine assegnato, verranno controllati tutti i confini che non hanno centri città e contengono quella città e verrà assegnato il confine con admin\_level >=7.
>
> per ogni confine, creare un elenco di città che si trovano al suo interno.
>
> iterare tutte le RELAZIONI e trovare gli indirizzi ([Postal\_Addresses](https://wiki.openstreetmap.org/wiki/Relations/Proposed/Postal_Addresses)):
>
> relazione con tag type "address", ed è "house" o "a6" address\_type.
>
> cercare la relazione Street associata e i membri house.
>
> provare a trovare la città per la strada e la città per l'indirizzo della casa.
>
> cercare le città (dobbiamo averle già trovate nei passaggi precedenti!).
>
> se abbiamo città e strada, registrarla nel database:
>
> per la registrazione della strada, vedere: registrare la strada per una città
>
> se la strada è registrata e stiamo elaborando la strada:
>
> iterare su tutti i membri della relazione:
>
> - trovare la strada -> scrivere i nodi della strada nel db
> - trovare la casa -> scrivere la casa nella strada
>
> se la strada è registrata e stiamo elaborando la casa:
>
> - trovare il numero civico
> - trovare il confine della casa: se trovato, memorizzare: edificio per la strada
>
> registrare la strada (strada, posizione della strada (los), città):
>
> **Nota:** potremmo registrare una strada a più città = questo significa che la strada può trovarsi in aree annidate, sobborgo, città, frazione, ecc... Per ogni area, vogliamo registrare la strada in cui si trova.
>
> per ogni città:
>
> trovare la registrazione della strada esistente all'interno della città:
>
> se la strada esiste:
>
> - se la parte della città è sconosciuta -> aggiornare la parte della città della strada esistente
> - provare a trovare la parte della città per la nostra strada e cercare di nuovo la strada
>
> se la strada non esiste: (potrebbe cambiare dopo la ricerca)
>
> - registrare la strada per città, parte della città, posizione e nome della strada
>
> findOrRegister street
>
> - trovare le città vicine alla strada
> - se la strada si trova nel confine della città, aggiungere la città per la ricerca
> - se non è stata trovata alcuna città, utilizzando il confine, trovare la città più vicina per la strada
> - registrare la strada: per le città trovate
>
> iterare tutti i NODI, quindi le VIE, quindi le RELAZIONI (iterare l'entità principale)
>
> trovare le vie - interpolazioni:
>
> - per ogni interpolazione, findOrRegister una strada con la posizione dell'interpolazione
> - per ogni due nodi creare un edificio che rappresenta l'interpolazione
>
> per qualsiasi entità, trovare addr:housenumber e addr:street tag (possono anche essere di nuovo l'interpolazione di nodi!!!):
>
> - saltare se l'edificio per questa entità esiste già!
> - findOrRegister strade per la strada
> - trovare il numero civico
> - se il numero civico contiene '-', provare a creare un numero civico interpolato (manca latlon2?)
> - se il numero civico contiene '/', provare a cercare la seconda strada addr:street2 --> sembra solo per [RU osm](https://wiki.openstreetmap.org/wiki/RU:Key:addr):
> - ci sono altre variazioni per questo: adr:housenumber2, addr2:street, addr2:housenumber ecc...
> - per ogni strada, memorizzare la casa esistente
>
> per via con tag - name & tag - highway, ma senza addr:housenumber e addr:street:
>
> - **Nota**: queste potrebbero essere vie per auto, con nomi (autostrada, o simili)
> - saltare se tale strada esiste già
> - findOrRegister la strada per città
> - scrivere i nodi per ogni strada trovata in ogni città
>
> Ogni relazione con "postal\_code", memorizzare per uso futuro.
>
> **Nota**: questo non include address:type = pc e addr:postalcode
>
> elaborare i codici postali:
>
> - per ogni relazione postal\_code memorizzata
> - per ogni membro edificio, aggiornare il postal\_code
>
> scrivere l'indice:
>
> dividere le città in: città+paesi, sobborghi (sobborgo con tag is\_in), villaggi (non città o paese)
>
> scrivere città+paesi usando i sobborghi
>
> leggere la strada da città+paesi + sobborghi appropriati per ogni paese
>
> - qui, potrebbero esserci più strade con lo stesso nome per una città, in tal caso proviamo a trovare una parte della città per la strada (sobborgo), dove si trova la strada. Non dovrebbero esserci più strade con lo stesso nome all'interno di una parte della città!
>
> per ogni strada
>
> - per ogni edificio, registrare/creare/trovare il codice postale, registrare la strada
>
> scrivere i villaggi
>
> - come i paesi...
>
> scrivere i codici postali estratti e le loro strade
>