---
source-hash: 25c29183922ffa0df481d5ee27894c6a7f4653e20a70b824ecbc3791edaafed7
sidebar_position: 3
---

# Personalizzare il motore di routing {#customize-routing-engine}

In alcuni casi potresti voler estendere o regolare l'esperienza di routing di OsmAnd, in modo da poter aggiungere parametri extra, aggiungere barriere extra o modificare alcune penalità. Dai un'occhiata a [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml). Il routing di OsmAnd utilizza un algoritmo A* bidirezionale basato sul tempo più veloce (= distanza/(velocità*priorità) + penalità). È un formato piuttosto semplice. È diviso in 7 sezioni (gruppi di valutazione):

* access (1 consentito, -1 non consentito)
* speed (numero che rappresenta la velocità in km/h)
* priority (numero tra 0 e 1) - un moltiplicatore della velocità ed è comunque legato a maxSpeed, quindi per A* verrà usato il minimo (velocità * moltiplicatore, maxSpeed)
* oneway (1, -1 o 0) - utilizzato per chiarire l'accesso in base alla direzione del movimento
* penalty_transition (penalità in secondi) - utilizzata per definire una penalità quando l'utente passa da una strada di classe superiore a una strada di classe inferiore. Ad esempio, autostrada - 10, strada principale - 15, se l'utente passa da un'autostrada a una strada principale la penalità sarà di 5 secondi (=10 - 15). Questa penalità verrà utilizzata dall'algoritmo A*. Non c'è penalità se l'utente passa da un'autostrada a una strada principale e non c'è penalità se il percorso continua da un'autostrada a un'autostrada.
* obstacle (penalità in secondi) - definisce una penalità che si aggiunge al tempo di routing
* obstacle_time (penalità in secondi) - definisce una penalità che viene visualizzata all'utente ma che non viene considerata dal motore di routing, ad esempio obstacle_time - 2 ore, obstacle - 1 minuto, sul percorso più breve il motore troverà un percorso utilizzando l'ostacolo di 1 minuto ma l'utente vedrà che il tempo di percorso è di 2 ore.

Per testare [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml), puoi usare [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). Per testare routing.xml sul dispositivo, puoi semplicemente sostituire il routing.xml predefinito nella cartella principale di OsmAnd con quello sulla scheda SD.