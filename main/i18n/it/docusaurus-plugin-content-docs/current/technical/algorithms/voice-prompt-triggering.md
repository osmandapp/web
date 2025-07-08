---
source-hash: ce62f6fd113ba54378f5dc39e541fa7e711306a641c814ab9db60c61a6c63dd1
sidebar_position: 4
---
import Translate from '@site/src/components/Translate.js';


# Attivazione dei messaggi vocali di navigazione {#navigation-voice-prompt-triggering}

                               
**(Compilato da Hardy 2013, rielaborato 2023-08)**
## Principio e impostazioni correlate {#principle-and-related-settings}
* I messaggi vocali vengono attivati in base a una soglia di **distanza di anticipo**, derivata dalla conversione di un tempo di anticipo specificato tramite la **_<Translate android="true" ids="default_speed_setting_title" />_** del profilo. Per i messaggi vocali ravvicinati, questa distanza di anticipo può essere regolata in base alla velocità effettiva: aumentata per garantire che l'annuncio venga attivato abbastanza presto ad alte velocità, o diminuita per una maggiore precisione a basse velocità.
* La **_<Translate android="true" ids="default_speed_setting_title" />_** del profilo è regolabile dall'utente e la sua modifica influenzerà quindi le distanze di attivazione dei messaggi vocali.
*Nota*: La _<Translate android="true" ids="default_speed_setting_title" />_ influisce anche sul tempo di percorso calcolato.
* La tempistica dei messaggi vocali può essere regolata anche tramite l'impostazione **_<Translate android="true" ids="arrival_distance" />_**. Controlla la colonna 'Impostazione arrivo' più in basso per vedere quali messaggi vocali saranno interessati. La distanza di attivazione verrà moltiplicata per il seguente fattore:

**<Translate android="true" ids="arrival_distance" />** | Moltiplicatore di distanza
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25
* Inoltre, esiste un **_Ritardo messaggio vocale_** generale configurabile dall'utente (regolabile nel _plugin di sviluppo OsmAnd_, _Messaggi vocali di testo_, pulsante 11.2). Questo è particolarmente necessario per il tipo di output _Audio chiamata telefonica_, dove emuliamo una chiamata a un'autoradio che induce un certo ritardo, per evitare che l'inizio dei messaggi vocali venga tagliato. (Tutte le distanze annunciate nei messaggi vocali anticiperanno qualsiasi _Ritardo messaggio vocale_.)
* Disattiviamo immediatamente i messaggi vocali se si riferiscono a eventi obsoleti o se la tua direzione di viaggio non sembra in linea con il percorso corrente.

## Velocità predefinite del profilo base {#base-profile-default-speeds}
Sebbene queste possano essere regolate dall'utente, le impostazioni predefinite sono:
* Guida: 12,5 m/s (45 km/h)
* Ciclismo: 2,78 m/s (10 km/h)
* Camminata: 1,11 m/s (4 km/h)
* Barca: 1,39 m/s (5 km/h)
* Sci: 1,39 m/s (5 km/h)
* Aereo: 40 m/s (144 km/h)

## Tabella di attivazione {#trigger-table}

I trigger si trovano [qui nel codice](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/routing/data/AnnounceTimeDistances.java#L65). I valori corrispondenti per le impostazioni predefinite di OsmAnd sono:

Tipo di messaggio vocale | Tempo di anticipo [s]:<br/>Corrispondente<br/>Distanza di anticipo @ Velocità predefinita [m] | Distanza di anticipo regolata dalla velocità effettiva? | Regolabile dall'impostazione di arrivo? | Commento |
--- | --- | --- | --- | --- |
Svolta ora | **6,7 s / 3,2 s / 2 s:**<br/>Guida: 83 m<br/>Ciclismo: 12(8) m<br/>Camminata: 12(2) m | :heavy_check_mark: (Proporzionale a *velocità effettiva / Velocità predefinita*) | :heavy_check_mark: | Tempo di anticipo (euristico) = _max(8, sqrt(Velocità predefinita \* 3,6))_. La distanza di anticipo corrispondente è arrotondata per difetto a 12 m per consentire l'imprecisione della posizione. |
Svolta tra X m | **22 s:**<br/>Guida: 275 m<br/>Ciclismo: 61 m<br/>Camminata: 24 m | :heavy_check_mark: (Solo aumento) |  | Saltato se < 15 s prima della svolta |
Preparati a svoltare tra X m | **115 s:**<br/>Guida: 1438 m<br/>Ciclismo: 319 m<br/>Camminata: - |  |  | Saltato se < 150 m prima di "Svolta tra", saltato per _Velocità predefinita_ < 8 km/h |
Preparati a svoltare a lungo tra X m | **300 s:**<br/>Guida: -<br/>Ciclismo: -<br/>Camminata: - |  |  | Saltato per _Velocità predefinita_ < 108 km/h |
Prosegui | **>300 s:**<br/>Guida: 3750 m<br/>Ciclismo: 833 m<br/>Camminata: 333 m | | | Riproduce dopo il calcolo del percorso se non sono previsti altri messaggi vocali, o dopo una svolta se la svolta successiva è più lontana di _Preparati a lungo_ |
Arrivo a destinazione o intermedio | **5 s:**<br/>Guida: 63 m<br/>Ciclismo: 14 m<br/>Camminata: 6(12) m | |:heavy_check_mark: | Minimo 12 m |
Avvicinamento a waypoint / preferito / POI | **60 s:**<br/>Guida: 750 m<br/>Ciclismo: 167 m<br/>Camminata: 67 m | :heavy_check_mark: (Solo aumento) | :heavy_check_mark: | Limitato a un massimo di 1 punto alla volta |
Passaggio waypoint / preferito / POI | **15 s:**<br/>Guida: 188 m<br/>Ciclismo: 42 m<br/>Camminata: 17 m | :heavy_check_mark: (Solo aumento) | :heavy_check_mark: | Limitato a un massimo di 3 punti alla volta |
Allarme standard | **12 s:**<br/>Guida: 150 m<br/>Ciclismo: 33 m<br/>Camminata: 13 m | :heavy_check_mark: (Solo aumento) | :heavy_check_mark: |
Allarme ravvicinato | **7 s:**<br/> Guida: 88 m<br/>Ciclismo: 20 m<br/>Camminata: 8 m | :heavy_check_mark: (Solo aumento) | :heavy_check_mark: | _Moderazione del traffico_ utilizza l'allarme _Passaggio_ per il messaggio di avvicinamento e filtra i duplicati all'interno di questo raggio |
Annuncio fuori rotta | **20 s:**<br/>Guida: 250 m<br/>Ciclismo: 56 m<br/>Camminata: 22 m h| | :heavy_check_mark: | Può essere disabilitato |
Segnale GPS perso | **20 s** | | | Viene riprodotto dopo che il segnale GPS è stato perso per >= 20 s e ciò non è stato causato da un'azione dell'utente. |