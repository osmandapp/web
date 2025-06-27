---
source-hash: 00c5daf74a16f214549f0a88cc1cb9258c0e4c09765d41d21306b6e11418fa8c
sidebar_position: 2
---

# Creare un'esperienza utente coerente {#creating-a-consistent-user-experience}

L'usabilità delle nostre complesse funzionalità è decisamente migliorata dalla scelta delle parole e da buone traduzioni, e dalla massima coerenza possibile. Vale la pena riflettere un po' su molte espressioni o frasi. :)

Si prega di notare quanto segue:

## 1. Scelta coerente delle parole {#1-consistent-wording}

Utilizzare solo **un'espressione** per una determinata funzionalità, non mescolare due possibili espressioni. Esempi:

* Controllare le espressioni esistenti e riutilizzarle nelle nuove stringhe
* Utilizzare _"navigazione"_, non _"instradamento"_, in tutto il testo.
* Utilizzare _"tracciamento"_, non _"monitoraggio"_
* Utilizziamo _"posizione"_ per indicare dove ci si trova, mentre _"località"_ si riferisce a punti arbitrari
* Utilizziamo _"destinazione"_, non _"obiettivo"_
* Utilizziamo _"velocità"_, non _"rapidità"_
* Conoscere la differenza tra _"elevazione"_ e _"altitudine"_
* Ora è _"OsmAnd"_, non _"Osmand"_ :)

## 2. Creazione del testo {#2-authoring-text}

* Si prega di cercare di riutilizzare il più possibile le costanti di stringa esistenti, è utile per la memoria e le prestazioni.
* Per stringhe 'XXX' altamente riutilizzabili, spesso abbiamo una `shared_string_XXX`
* Le stringhe vengono spesso riutilizzate! Quando si modificano stringhe esistenti, si prega di ricontrollare _tutte_ le loro occorrenze nel codice
* Il testo non necessario ingombra gli schermi senza essere di grande aiuto. Si prega di essere brevi e precisi, aggiungere solo parole che trasmettano informazioni _necessarie_.
* Si prega di ricontrollare l'aspetto del testo nell'app, in particolare sui dispositivi a bassa densità. Troppe interruzioni di riga, testo tagliato o pulsanti di menu ingranditi possono rendere uno schermo o una finestra di dialogo inutilizzabile.
* In alcuni casi ci sono convenzioni, che potrebbero valere la pena di verificare, piuttosto che "inventare qualcosa". Quindi, se il 99% dei sistemi di navigazione commerciali nella tua lingua annuncia "hai raggiunto la tua destinazione", allora usare "sei arrivato dove volevi andare" potrebbe non essere la scelta migliore... :)
* Contrassegnare chiaramente tutte le funzionalità che richiedono l'accesso a Internet con l'espressione "online".
* La lingua di base per OsmAnd è l'inglese americano. Esiste una cartella di traduzione per l'inglese britannico per tutte le espressioni e l'ortografia che differiscono.

## 3. Rendering {#3-rendering}

* Una nota sul rendering: L'aspetto della mappa dei nostri stili di mappa è stato testato per l'usabilità e la visibilità in una moltitudine di posizioni sulla mappa, con molti dispositivi e tecnologie di schermo, e in diverse condizioni di luce. I _"miglioramenti spontanei"_ al renderer sono quasi sempre discutibili, possono almeno richiedere più indagini e test di quanto si possa pensare... :)