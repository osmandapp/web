---
source-hash: bf8498069a6041e804c4eedf6c801ea107273f7c61d7843af9fb0326f93c493d
sidebar_position: 16
title: Parametri del Veicolo
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>

<InfoAndroidOnly/>

## Panoramica {#overview}

:::info Funzionalità a pagamento
Il plugin Parametri del Veicolo è una [funzionalità a pagamento](../purchases/index.md) dell'app OsmAnd.
:::

Il **plugin Parametri del Veicolo** consente il monitoraggio dei dati del veicolo in tempo reale tramite il protocollo OBD-II. Gli utenti possono tenere traccia di parametri essenziali come le prestazioni del motore, l'efficienza del carburante e la velocità, consentendo una manutenzione proattiva del veicolo e la risoluzione dei problemi.

Gli scanner OBD-II sono parte integrante della diagnostica automobilistica moderna. Con lo streaming di dati in tempo reale, gli utenti ottengono informazioni istantanee sui sistemi del veicolo, facilitando la manutenzione preventiva e riducendo i costi di riparazione. Questi strumenti sono vitali sia per l'uso personale che per i servizi automobilistici professionali.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

</Tabs>


## Parametri di Configurazione Richiesti {#required-setup-parameters}

Per utilizzare i dati di uno scanner OBD-II:

1. [Acquista](../purchases/) un **abbonamento OsmAnd Pro**. (*Velocità del veicolo* e *Velocità del motore* sono gratuiti.)
2. [Abilita](../plugins/index.md#enable--disable) il plugin Parametri del Veicolo nella sezione Plugin del *Menu Principale*.
3. **Attiva** il Bluetooth sul tuo dispositivo.
4. [Collega](#pair-odb-ii-scanner) lo scanner OBD-II alla porta del tuo veicolo.
5. [Configura](#scanner-settings) le **impostazioni dello scanner**.
6. [Aggiungi](#widgets) i **widget Parametri del Veicolo** per i dati sullo schermo (opzionale).
7. [Usa](#trip-recording) il **plugin Registrazione percorso** per registrare i dati del veicolo.


### Associa Scanner ODB-II {#pair-odb-ii-scanner}

| | |
|--|--|
|![Connessione OBD](@site/static/img/plugins/obd/obd_connect.png)|![Connessione OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

Collega lo scanner alla porta del tuo veicolo e associalo tramite l'app:

- Vai su *Menu → Plugin → Parametri del Veicolo → Impostazioni → Connetti* o **+**.
- Se Parametri del Veicolo è nel *Menu Principale*: *Menu → Parametri del Veicolo → Impostazioni → Connetti* o **+**.

Scegli il tuo dispositivo OBD-II dall'elenco e stabilisci la connessione.


## Impostazioni dello Scanner {#scanner-settings}

**Android.** Vai su: *Menu → Plugin → Parametri del Veicolo → OBD → menu a tre puntini*

| | |
|--|--|
|![Impostazioni OBD](@site/static/img/plugins/obd/obd_settings.png)|![Impostazioni OBD](@site/static/img/plugins/obd/obd_settings_1.png)|

- **Connetti / Disconnetti**. Stabilisce o termina la connessione con il sensore OBD-II.
- **Impostazioni**. Apre la schermata delle impostazioni OBD-II, consentendo la gestione della connessione e l'accesso ai parametri disponibili del veicolo.
- **Rinomina**. Consente di assegnare un nome personalizzato al sensore per una più facile identificazione.
- **Dimentica**. Rimuove il sensore OBD-II precedentemente associato dall'elenco, richiedendo una nuova associazione se necessario in seguito.


## Elenco Parametri {#metrics-list}

I parametri sono classificati per chiarezza. Gli strumenti diagnostici avanzati consentono la manutenzione preventiva interpretando questi parametri:

*Temperatura:*

- **Temperatura di aspirazione**. Visualizza la temperatura dell'aria che entra nel collettore di aspirazione.
- **Temperatura ambiente**. Monitora le condizioni esterne.
- **Temperatura del liquido di raffreddamento**. Traccia l'efficienza di raffreddamento del motore.
- **Temperatura dell'olio motore**. Visualizza le condizioni dell'olio durante il funzionamento.

*Motore:*

- **Velocità del motore**. Monitora i giri al minuto (RPM) del motore.
- **Tempo di funzionamento del motore**. Traccia il tempo di funzionamento del motore.
- **Carico motore calcolato**. Indica la percentuale di carico di lavoro del motore.

*Carburante:*

- **Pressione del carburante**. Indica la pressione del sistema di alimentazione.
- **Consumo di carburante**. Calcola il consumo di carburante del veicolo.
- **Carburante rimanente**. Indica il livello di carburante nel veicolo.

*Altro:*

- **Livello della batteria**. Indica il livello di tensione della batteria del veicolo.
- **Velocità del veicolo**. Visualizza i dati del sensore di velocità del veicolo (VSS).
- **Posizione dell'acceleratore**. Determina l'aspirazione dell'aria del motore tramite l'angolo della farfalla.
- **VIN**. Visualizza il numero di identificazione del veicolo di 17 caratteri.


## Registrazione del Percorso {#trip-recording}

**Android**. Vai su: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![Registrazione OBD](@site/static/img/plugins/obd/obd_recording.png)| ![Registrazione OBD](@site/static/img/plugins/obd/obd_recording_1.png)|

Per includere i dati OBD-II in un file GPX, è necessario selezionare i parametri desiderati per la registrazione utilizzando il [plugin Registrazione percorso](../plugins/trip-recording.md#recording-settings). Ciò consente di analizzare i parametri del veicolo insieme ai dati del percorso.

#### Tag {#tags}

OsmAnd applica nomi di tag personalizzati per i parametri del veicolo nel [file GPX](../plugins/trip-recording.md#recorded-gpx-file). Ad esempio:

- `vm_eotemp`: Temperatura dell'olio motore.
- `vm_fpress`: Pressione del carburante.
- `vm_espeed`: Velocità del motore.

Questi tag rendono più facile identificare e utilizzare dati specifici del veicolo durante la revisione del file GPX registrato.


## Widget {#widgets}

**Android.** Vai su: *Menu → Configura schermo → Widget → Scegli un pannello → Parametri del Veicolo*

| | |
|--|--|
|![Impostazioni OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![Impostazioni OBD](@site/static/img/plugins/obd/obd_widget.png)|

I [widget Parametri del Veicolo](../widgets/info-widgets.md#vehicle-metrics-widgets) vengono inclusi automaticamente quando si abilita il plugin. Se non sono visibili, è possibile aggiungerli manualmente tramite il menu [Configura Schermo](../widgets/configure-screen.md).

### Impostazioni Widget {#widget-settings}

I widget visualizzano i dati chiave dal dispositivo OBD-II connesso in tempo reale, come velocità, parametri del motore e consumo di carburante. Assicurati che siano visibili prima di iniziare il viaggio per tenere traccia dei parametri senza interruzioni.

Alcuni widget offrono opzioni di modalità di visualizzazione:

- **Istante**. Visualizza i dati in tempo reale per il parametro selezionato.
- **Media**. Visualizza i valori mediati su un intervallo di tempo configurabile (da 15 secondi a 60 minuti).


## Articoli correlati {#related-articles}

- [Interagisci con la Mappa](../../user/map/interact-with-map.md)
- [Impostazioni Globali](../../user/personal/global-settings.md)
- [Mappe Vettoriali (Stili Mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: Dicembre 2024*