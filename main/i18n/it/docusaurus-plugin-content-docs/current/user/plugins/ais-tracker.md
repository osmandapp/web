---
source-hash: e993c17565a6856353f05b6dabe09c469fb505cb96a56e920bca6326fc3eb2e1
sidebar_position: 2
title:  AIS Vessel Tracker
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoAndroidOnly />

## Panoramica {#overview}

Il plugin **AIS Vessel Tracker** visualizza le posizioni dell'[Automatic Identification System (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) e le informazioni dettagliate sulle imbarcazioni vicine. I dati AIS vengono ricevuti tramite una connessione di rete da un ricevitore AIS esterno.

:::caution AVVISO
**Questo plugin è un progetto amatoriale e non è progettato per garantire affidabilità o precisione. NON fare affidamento su questo software per la navigazione o la sicurezza della vita.**
:::

## Parametri di Configurazione Richiesti {#required-setup-parameters}

La possibilità di utilizzare le mappe online è abilitata automaticamente nella versione iOS di OsmAnd. Per visualizzare le mappe online su Android, è necessario effettuare le seguenti impostazioni:

1. [Abilita](../plugins/index.md#enable--disable) il plugin **AIS vessel tracker** in *Menu principale → Plugin → AIS vessel tracker*.
2. Configura le [impostazioni AIS](../map/raster-maps.md#select-raster-maps)
3. Configura una **connessione al server AIS** o collega un **ricevitore AIS esterno**.
4. Verifica che le imbarcazioni siano visualizzate sulla mappa di OsmAnd.

## Imbarcazioni sulla Mappa {#vessels-on-the-map}

L'AIS opera su *frequenze VHF* (161.975 MHz e 162.025 MHz) e ha un raggio di segnale limitato a causa della propagazione in linea di vista.

***Raggio di ricezione AIS tipico:***

- 15–20 miglia nautiche (28–37 km)
- Dipende dall'altezza dell'antenna, dalle condizioni ambientali e dagli ostacoli

***Visualizzazione AIS sulla mappa:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tracciatore di imbarcazioni AIS](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Se configurato correttamente, le posizioni delle imbarcazioni appariranno sulla mappa. Caratteristiche principali:

- Le imbarcazioni si muovono in base alla velocità e alla rotta in tempo reale.
- Nuove navi entrano ed escono dinamicamente dall'area visibile.
- Toccando un'imbarcazione si aprono informazioni dettagliate.

### Informazioni sull'Imbarcazione AIS {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tracciatore di imbarcazioni AIS](@site/static/img/plugins/ais/ais_menu.png)  
![Tracciatore di imbarcazioni AIS](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

Le imbarcazioni AIS trasmettono tre tipi di dati:

1. Informazioni Statiche (dati immutabili).  
    *Inviate ogni **6 minuti** o su richiesta.*

    - **Nome Nave** (*se impostato*)  
    - **MMSI (Maritime Mobile Service Identity)** (*Identificativo univoco della nave a 9 cifre*)
    - **Numero IMO** (*se disponibile*)  
    - **Nominativo Internazionale**  
    - **Tipo di Nave** (*es. Cargo, Passeggeri, Peschereccio*)  
    - **Dimensioni della Nave** (*Lunghezza e Larghezza*)  
    - **Posizione dell'Antenna AIS** (*Relativa allo scafo della nave*)  

2. Informazioni Dinamiche (dati in tempo reale).  
    *Inviate a intervalli diversi a seconda della velocità e delle manovre.*

    - **Coordinate della Nave (Latitudine e Longitudine)**  
    - **Rotta rispetto al fondo (COG)**  
    - **Velocità rispetto al fondo (SOG)**  
    - **Prora** (*Direzione in cui punta la prua*)
    - **Stato della Nave** (*In navigazione, Ancorata, In manovra, ecc.*)  
    - **Velocità di virata (ROT)** (*Velocità di cambio rotta*)  
    - **Ora dell'ultimo aggiornamento**  

3. Informazioni sul Viaggio (impostate manualmente dall'equipaggio).  
    *Inviate ogni **6 minuti**, impostate manualmente dall'equipaggio*

    - **Porto di Destinazione**
    - **Orario di Arrivo Previsto (ETA)**  
    - **Pescaggio** (*Profondità della nave sotto la superficie dell'acqua*)  
    - **Tipo di Carico** (*se trasmesso*)
    - **Numero di Persone a Bordo** (*opzionale*)  

### Simboli e Legende AIS {#ais-symbols-and-legends}

[Linee guida per la presentazione dei simboli AIS](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Simboli             | Descrizione   |
|---------------------|---------------|
| | |
| **Simboli dei Tipi di Imbarcazione** |    |
| *Triangolo verde*    | Nave da carico    |
| *Triangolo blu*     | Nave passeggeri |
| *Triangolo nero*    | Peschereccio |
| *Triangolo giallo*   | Rimorchiatore       |
| *Triangolo rosso*      | Petroliera        |
| *Triangolo bianco*    | Nave militare |
| *Triangolo arancione*   | Unità speciale (es. pilota, rompighiaccio) |
| *Triangolo rosso lampeggiante* | Imbarcazione in pericolo |
| | |
| **Simboli degli Ausili alla Navigazione** |    |
| *Boa verde*              | Segnale di dritta (lato destro del canale) |
| *Boa rossa*                | Segnale di babordo (lato sinistro del canale) |
| *Simbolo dell'ancora*           | Area di ancoraggio |
| *Simbolo della nave (SS)*        | Terminal traghetti o passeggeri |
| *Simbolo della gru portuale*       | Porto mercantile |
| *Cerchio nero*            | Piattaforma offshore |
| | |
| **Indicatori di Stato** |    |
| *Triangolo pieno*  | Imbarcazione in movimento |
| *Triangolo vuoto* | Ancorata o Ormeggiata |
| *Freccia rotante*  | In manovra |
| *Icona rossa lampeggiante* | Allarme di emergenza |
| *Punto esclamativo arancione* | Messaggio di sicurezza AIS |
| | |
| **Indicatori di Rotta e Velocità** |    |
| *Linea blu sottile*  | Rotta pianificata |
| *Linea punteggiata*     | Traccia passata |
| *Icona dell'orologio*      | Orario di arrivo previsto (ETA) |
| *Icona dell'onda*       | Velocità sull'acqua |

## Impostazioni del Plugin {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![Impostazioni AIS](@site/static/img/plugins/ais/ais_settings_2.png)  

</TabItem>

</Tabs>

Il plugin *AIS vessel tracker* offre varie impostazioni per personalizzare la navigazione e l'interazione per gli utenti con disabilità. Queste impostazioni vengono applicate a tutti i [profili](../personal/profiles.md) in OsmAnd.

| Impostazione |  Descrizione  | Esempio  |
|---------|---------------|----------|
| | | |
| **Impostazioni indirizzo IP** | | |
| Protocollo   | Scegli il protocollo per la ricezione dei dati AIS | `UDP/TCP` |
| Indirizzo IP | Definisci l'IP della fonte dati AIS (se si usa TCP) | `192.168.200.16` |
| Porta TCP   | Definisci il numero di porta TCP per i dati AIS | `4001` |
| Porta UDP   | Definisci la porta UDP per la ricezione AIS di OsmAnd  | `10110` |
| | | |
| **Timeout ricezione segnale AIS** | |  |
| Timeout per oggetti AIS persi     | Le navi scompaiono se non viene ricevuto alcun segnale per un tempo impostato | `3 - 20 min` |
| Timeout per la visibilità della nave      | Le icone delle navi cambieranno stato quando non viene ricevuto alcun segnale | `2 - 15 min / Disabilitato` |
| | | |
| **Avvisi sul Punto di Avvicinamento Minimo (CPA)** | | |
| Tempo di avviso CPA | L'imbarcazione è contrassegnata in rosso se il tempo al CPA è inferiore a questo limite | `1 - 60 min / Disabilitato` |
| Distanza di avviso CPA | L'imbarcazione è contrassegnata in rosso se la distanza dal CPA è inferiore a questo limite | `0.02 - 2 miglia nautiche` |

### Modalità di Simulazione AIS {#ais-simulation-mode}

> *È possibile simulare le posizioni delle imbarcazioni AIS utilizzando il [plugin Sviluppo di OsmAnd](../plugins/development.md).*

1. **Scarica i file di testo dei dati AIS**:

    - [Test AIS 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [Test AIS 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Singolo 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Carica i dati AIS in OsmAnd**  
Apri *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* e seleziona uno dei file scaricati.

3. **Visualizza le imbarcazioni AIS sulla mappa**  
Le icone delle imbarcazioni appariranno in base ai dati simulati. Tocca l'icona dell'imbarcazione per visualizzare informazioni dettagliate.

## Articoli Correlati {#related-articles}

- [Interagire con la Mappa](../../user/map/interact-with-map.md)
- [Impostazioni Globali](../../user/personal/global-settings.md)
- [Mappe Vettoriali (Stili Mappa)](../../user/map/vector-maps.md)
- [Plugin Nautico](../../user/plugins/nautical-charts.md)