---
source-hash: aa3fd23b95c957def9ede8e26af7d7b5f4e4f85fb050e7a8c1cfc60a5f8eeb64
sidebar_position: 4
---

# Messaggi vocali di navigazione {#navigation-voice-prompts}


## 1. Alcune nozioni di base {#1-some-basics}

* OsmAnd supporta sia i messaggi vocali sintetizzati Text-to-Speech (TTS) che le voci preregistrate.
* L'uso di una voce TTS è preferibile, è più flessibile e può, ad esempio, pronunciare anche i nomi di luoghi o strade.
* Le voci preregistrate sono consigliate solo come soluzione di ripiego se il tuo dispositivo non è in grado di supportare affatto il TTS nella lingua selezionata.
* Per utilizzare il TTS, il tuo dispositivo deve avere un motore TTS installato che supporti la lingua che desideri ascoltare. La maggior parte dei dispositivi viene fornita con uno o due motori già preinstallati. Solo per le lingue meno comuni potrebbe essere necessario trovare e installare un motore TTS di terze parti.
* Per quale evento vengono offerti i messaggi vocali e la loro tempistica, è regolato dal codice del router vocale di OsmAnd.
* Ma il vocabolario e la costruzione delle frasi per qualsiasi lingua sono specificati in un file di configurazione _xx-yy_tts.js_, dove xx è il codice della lingua ISO 639-1 e yy uno specificatore regionale o simile opzionale. Solo per le voci registrate è richiesta una sottocartella aggiuntiva _voice_ con tutte le espressioni registrate necessarie come file _.ogg_.
* La convenzione cartella/file sul dispositivo è `voice/xx[-yy]-tts/xx[-yy]_tts.js`.

I file di configurazione _tts.js_ dovrebbero contenere un'intestazione come segue, tenendo traccia di quali particolari funzionalità sono state implementate e verificate per il file in questione:

```
// FUNZIONALITÀ IMPLEMENTATE (X) o MANCANTI ( ), (N/A) se non necessarie in questa lingua:
//
// (X) Messaggi di navigazione di base: percorso (ri)calcolato (con supporto distanza e tempo), svolte, rotatorie, inversioni a U, dritto/segui, arrivo
// (X) Annuncia i nomi dei punti vicini (destinazione / intermedia / waypoint GPX / preferiti / POI)
// (X) Messaggi di attenzione: AUTOVELOX; LIMITE DI VELOCITÀ; CONTROLLO DI FRONTIERA; FERROVIA; MODERAZIONE DEL TRAFFICO; CASELLO; STOP; PEDONE; MASSIMO; GALLERIA
// (X) Altri messaggi: GPS perso, fuori rotta, ritorno alla rotta
// (X) Supporto per nomi di strade e preposizioni (su / in / a) e destinazione stradale (verso)
// (X) Supporto per unità di distanza (metri / piedi / iarde)
// (N/A) Grammatica speciale: (specificare quale)
// (X) Supporto per l'annuncio delle uscite autostradali
```

## 2. Lingue e varianti vocali {#2-voice-languages-and-variants}

* Alcuni pacchetti di messaggi vocali in lingue comuni sono preinstallati in OsmAnd, altri richiedono un download una tantum. (Si prega di notare che anche quelli preinstallati appaiono come se fossero un download.)
* Per alcune lingue offriamo diverse varianti regionali. L'ascolto anche della corrispondente pronuncia regionale dipende dalle capacità del tuo dispositivo.
* Per alcune voci offriamo anche varianti aggiuntive con, ad esempio, messaggi più brevi ('casual') o alcuni messaggi disattivati per ridurre la loquacità.

## 3. Test dei messaggi vocali {#3-testing-of-voice-prompts}

Puoi abilitare temporaneamente il plugin di sviluppo di OsmAnd, quindi andare nelle sue impostazioni e utilizzare il pulsante `Testa messaggi vocali`. Fornisce diversi esempi di annunci per ogni tipo di messaggio di OsmAnd, utilizzando un'ampia gamma di numeri per testare la formattazione e la pronuncia di tempo/distanza. La didascalia del pulsante indica il contenuto di base del messaggio, la formulazione esatta è specificata nel file tts.js che stai testando.
C'è anche un pulsante di test che mostra le impostazioni del tuo dispositivo e le capacità linguistiche.

Durante la navigazione, il messaggio vocale corrente può essere sempre attivato toccando il widget della freccia di svolta.

## 4. Creazione di una nuova lingua/variante vocale TTS {#4-creating-a-new-tts-voice-languagevariant}

Alcuni suggerimenti:

- OsmAnd fornisce solo la formulazione, l'ordine delle parole, la grammatica in termini di declinazioni, casi, singolare/plurale, ecc., mentre la pronuncia è eseguita dal motore TTS che utilizzi sul dispositivo (ce ne sono di integrati e di terze parti)
- Questo viene fatto in un singolo file di definizione vocale per lingua. Su github i file si trovano <a href="https://github.com/osmandapp/OsmAnd-resources/tree/master/voice">qui</a>, e si prega di vedere sopra per le convenzioni cartella/file sul dispositivo localmente.
- Il file è ora in js (migrato dal precedente PROLOG per renderlo più mainstream).
- Per creare un nuovo file di configurazione, si prega di iniziare clonando da _en\_tts.js_, ovvero utilizzare quello come modello.
- Può quindi essere utile esaminare i file di configurazione esistenti per lingue grammaticalmente più complesse (ad esempio tedesco, ceco o slovacco) per cercare soluzioni esistenti per grammatica speciale, ordine delle parole, formazione dei numeri, ecc. Guarda in particolare le lingue simili alla tua.
- Puoi testare il tuo file tts (o i tuoi miglioramenti a quelli esistenti) tu stesso localmente, prima di una pull request, basta posizionarlo sul tuo dispositivo con la corretta convenzione file/cartella.