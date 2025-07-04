---
source-hash: 4127321256305d47dce48682c4990b76cec1e4db868aa211746d1c49c5418eb3
sidebar_position: 3
---

# Problemi di ricerca indirizzi {#trace-address-search-issues}

## Indirizzo trovato nella città sbagliata {#address-found-in-the-wrong-city}

In alcuni casi, una ricerca di indirizzo in OsmAnd potrebbe restituire risultati per una città diversa da quella prevista. Questi problemi sorgono a causa del modo in cui i confini delle città sono definiti ed elaborati in OpenStreetMap (OSM). Se un utente cerca un **nome di strada** o una **strada con un numero civico** senza specificare una città, l'**algoritmo di ricerca full-text** potrebbe restituire una corrispondenza da un'altra città.

### Problemi correlati {#related-issues}

Casi di assegnazioni errate di città sono stati segnalati nei seguenti problemi di GitHub:
[10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10677](https://github.com/osmandapp/OsmAnd/issues/10677), [10699](https://github.com/osmandapp/OsmAnd/issues/10699), [10921](https://github.com/osmandapp/OsmAnd/issues/10921).


## Come OsmAnd identifica i confini delle città {#how-osmand-identifies-city-boundaries}

OsmAnd determina il confine di una città utilizzando la sua **relazione amministrativa** in OpenStreetMap. Affinché un confine sia considerato valido, deve soddisfare i seguenti criteri:

- La **relazione di confine** deve includere i tag:
  - **boundary** = *administrative* o *postal_code*
  - **place** = *[city, town, village, hamlet, etc.]*

- La relazione di confine deve contenere un **membro della relazione**:
  - **label**
  - **admin_centre** o **admin_center**

- Il **nome della relazione di confine** deve corrispondere esattamente al **nome del nodo del luogo**.

- Se queste condizioni non sono soddisfatte, la relazione di confine non viene riconosciuta come confine di città.

- Tra i confini sovrapposti, OsmAnd seleziona il **confine più grande**.

- Le **vie della relazione** definiscono il confine. OsmAnd supporta sia le vie **interne** che quelle **esterne**.


## Corrispondenza esatta del nome {#exact-name-matching}

Per un'elaborazione accurata degli indirizzi, i **nomi delle strade devono corrispondere esattamente**, inclusi:

- Differenze nei **segni diacritici** (ad esempio, *Rue André Chenier* vs. *Rue André Chénier*).
- Variazioni nei **prefissi e nelle abbreviazioni**.

Se si verifica una mancata corrispondenza, potrebbe sorgere uno dei seguenti problemi:

- La casa è **assegnata alla strada sbagliata**.
- La **stessa strada appare più volte** in diversi confini di città.

Vedere il problema di GitHub [10036](https://github.com/osmandapp/OsmAnd/issues/10036) per un esempio.


## Possibili cause di assegnazioni errate di città {#possible-causes-of-incorrect-city-assignments}

### Problemi in OpenStreetMap {#issues-in-openstreetmap}

1. **Confini di città rotti o mancanti.**

   - Se i confini delle città sono incompleti, errati o mancanti, le assegnazioni degli indirizzi potrebbero essere inaffidabili.
   - **Soluzione:** Seguire la [guida alla correzione dei confini OSM](https://help.openstreetmap.org/questions/1053/how-do-i-fix-inconsistent-boundaries).
   - Esempio: [10699](https://github.com/osmandapp/OsmAnd/issues/10699).

2. **I confini delle città non si sovrappongono correttamente.**

   - Se una strada appartiene a due città ma è mappata in modo errato, OsmAnd potrebbe non riconoscere la sovrapposizione.
   - **Soluzione:** Regolare i confini delle città in OpenStreetMap per garantire che comprendano correttamente le strade condivise.

3. **Tag obbligatori mancanti nella relazione di confine.**

   - Se una relazione manca di tag essenziali come **boundary=administrative** o **place=city**, non verrà utilizzata.
   - Esempi:
     - Problema [10921](https://github.com/osmandapp/OsmAnd/issues/10921) (tag mancanti).
     - Problema [12548](https://github.com/osmandapp/OsmAnd/issues/12548) (problema di confine di *Erfstadt*).

### Problemi in OsmAnd {#issues-in-osmand}

**Indirizzi assegnati a città vicine.**

- Città, paesi, villaggi o sobborghi in prossimità possono **ereditare indirizzi in modo errato** a causa di sovrapposizioni di confini o confini mancanti.
- Questo è comune quando le città sono divise in aree amministrative ma mancano di relazioni OSM chiaramente definite.
- Vedere i rapporti correlati: [10559](https://github.com/osmandapp/OsmAnd/issues/10559), [10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10730](https://github.com/osmandapp/OsmAnd/issues/10730).


## Metodi di verifica {#verification-methods}

Per verificare e risolvere i problemi relativi ai confini delle città, confrontare i risultati di diversi strumenti di mappatura.

### Utilizzo di OpenStreetMap {#using-openstreetmap}

**Esempio:** Indirizzo cercato: *Wolności 223, Zabrze*

1. Aprire OpenStreetMap (OSM).
2. Cercare **Zabrze** e selezionare il risultato associato a un **confine amministrativo**.
3. Visualizzare il confine della città per confermare se l'indirizzo è assegnato correttamente.

### Utilizzo di Nominatim {#using-nominatim}

**Esempio:** Indirizzo cercato: *Wolności 223, Zabrze*

1. Cercare la **strada e il numero civico** senza specificare la città.
2. Se il risultato della ricerca colloca l'indirizzo in un'altra città, annotare il nome della città suggerito.
3. Inserire il **nome della città trovata** in Nominatim.
4. Controllare il valore **Address Rank**:
   - Esempio: *Wolności, Maciejów*
   - Se Maciejów è elencato come *sobborgo/frazione (rank 20)*, è una divisione amministrativa più piccola di un'altra città.

**Importante:** Prestare attenzione quando si selezionano i risultati della ricerca, poiché città con nomi simili possono esistere in regioni o paesi diversi.


## Ricerca indirizzi USA e dati TIGER {#us-address-search-and-tiger-data}

OsmAnd utilizza i dati di OpenStreetMap per le ricerche di indirizzi, con fonti di dati aggiuntive come **TIGER (Topologically Integrated Geographic Encoding and Referencing System)** dal U.S. Census Bureau. Questo set di dati è basato su intervalli e non contiene numeri civici precisi. Alcuni indirizzi potrebbero mancare o essere inaccurati.

Risoluzione dei problemi con gli indirizzi USA:

1. L'indirizzo inserito viene **suddiviso in componenti**: `[Numero civico] [Nome strada]`, `[Città]`, `[Stato]`, `[CAP]`

2. Il sistema **controlla prima OSM** per una corrispondenza esatta con numeri civici e strade.

3. Se **non viene trovata alcuna corrispondenza** in OSM, il sistema cerca nei dati TIGER, che includono:
    - Nomi e classificazioni delle strade.
    - Intervalli di numeri civici interpolati.
    - Confini amministrativi.

4. Se un **numero civico manca**, OsmAnd stima la sua posizione in base ai dati vicini.

5. **Restituzione dei risultati**:
    - Se l'indirizzo esiste in OSM, viene visualizzata una corrispondenza esatta.
    - Se sono disponibili solo dati TIGER, viene fornito un risultato approssimativo.
    - Se nessuna delle due fonti contiene l'indirizzo, la ricerca fallisce.


#### Tipi di dati di indirizzo in TIGER {#types-of-address-data-in-tiger}

| Tipo di dati TIGER         | Utilizzo in OsmAnd |
|----------------------------|--------------------|
| **Nomi delle strade**      | Utilizzati per ricerche basate sul nome. |
| **Intervalli di numeri civici** | Fornisce posizioni approssimative degli indirizzi. |
| **CAP**                    | Aiuta ad associare gli indirizzi alle aree postali corrette. |
| **Confini amministrativi** | Determina le posizioni di città e stato. |

<br/>

#### Quando un indirizzo viene trovato vs. non trovato {#when-an-address-is-found-vs-not-found}

| Scenario di ricerca     | Risultato in OsmAnd |
|---------------------|----------------------|
| L'indirizzo esiste in OSM con numero civico e strada | ✅ Corrispondenza esatta |
| L'indirizzo esiste in TIGER ma mancano i numeri civici | ⚠️ Corrispondenza approssimativa tramite interpolazione |
| L'indirizzo esiste in TIGER ma contiene dati errati | ⚠️ Corrispondenza parziale con errori |
| L'indirizzo manca sia da OSM che da TIGER | ❌ Nessun risultato |


#### Limitazioni dei dati TIGER in OsmAnd {#limitations-of-tiger-data-in-osmand}

Diversi fattori influenzano l'accuratezza delle ricerche di indirizzi nel sistema basato su TIGER:

- **Numeri civici mancanti**. Molti indirizzi in TIGER si basano sull'**interpolazione**, portando a posizioni approssimative.

- **Nomi di strade obsoleti**. I nomi delle strade in TIGER potrebbero non riflettere le attuali convenzioni di denominazione in OSM.

- **Mancate corrispondenze del CAP**. I confini in TIGER potrebbero essere errati, causando assegnazioni errate del CAP.