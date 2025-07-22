---
source-hash: 3285f0c719a8255c35a044a6bccdc05206d01216a9c0d4f8c30f58b3a9122f36
sidebar_position: 16
title:  Metriche del veicolo
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

:::info Funzione a pagamento
Il plugin Metriche del veicolo è una [funzione a pagamento](../purchases/index.md) dell'app OsmAnd.
:::

Il **plugin Metriche del veicolo** consente il monitoraggio dei dati del veicolo in tempo reale tramite il protocollo OBD-II. Gli utenti possono monitorare metriche essenziali come le prestazioni del motore, l'efficienza del carburante e la velocità, consentendo la manutenzione proattiva del veicolo e la risoluzione dei problemi.

Gli scanner OBD-II sono parte integrante della diagnostica automobilistica moderna. Con lo streaming di dati in tempo reale, gli utenti ottengono informazioni istantanee sui sistemi del veicolo, facilitando la manutenzione preventiva e riducendo i costi di riparazione. Questi strumenti sono vitali sia per uso personale che per servizi automobilistici professionali.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

</Tabs>


## Parametri di configurazione richiesti {#required-setup-parameters}

Per utilizzare i dati di uno scanner OBD-II:

1. [Acquista](../purchases/) un **abbonamento OsmAnd Pro**. (*Velocità del veicolo* e *Velocità del motore* sono gratuiti.)
2. [Abilita](../plugins/index.md#enable--disable) il plugin Metriche del veicolo nella sezione Plugin del *Menu principale*.
3. **Attiva** il Bluetooth sul tuo dispositivo.
4. [Collega](#pair-odb-ii-scanner) lo scanner OBD-II alla porta del tuo veicolo.
5. [Configura](#scanner-settings) le **impostazioni dello scanner**.
6. [Aggiungi](#widgets) i **widget Metriche del veicolo** per i dati sullo schermo (opzionale).
7. [Utilizza](#trip-recording) il **plugin Registrazione viaggio** per registrare i dati del veicolo.


### Associa scanner ODB-II {#pair-odb-ii-scanner}

|  |  |
|--|--|
|![Connessione OBD](@site/static/img/plugins/obd/obd_connect.png)|![Connessione OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

Collega lo scanner alla porta del tuo veicolo e associalo tramite l'app:

- Vai a *Menu → Plugin → Metriche del veicolo → Impostazioni → Connetti* o **+**.
- Se Metriche del veicolo è nel *Menu principale*: *Menu → Metriche del veicolo → Impostazioni → Connetti* o **+**.

Scegli il tuo dispositivo OBD-II dall'elenco e stabilisci la connessione.


## Impostazioni dello scanner {#scanner-settings}

**Android.** Vai a: *Menu → Plugin → Metriche del veicolo → OBD → menu a tre puntini*

|  |  |
|--|--|
|![Impostazioni OBD](@site/static/img/plugins/obd/obd_settings.png)|![Impostazioni OBD](@site/static/img/plugins/obd/obd_settings_1.png)|

- **Connetti / Disconnetti**. Stabilisce o termina la connessione con il sensore OBD-II.
- **Impostazioni**. Apre la schermata delle impostazioni OBD-II, consentendo la gestione della connessione e l'accesso ai parametri del veicolo disponibili.
- **Rinomina**. Consente di assegnare un nome personalizzato al sensore per una più facile identificazione.
- **Dimentica**. Rimuove il sensore OBD-II precedentemente associato dall'elenco, richiedendo una nuova associazione se necessario in seguito.


## Elenco metriche {#metrics-list}

Le metriche sono categorizzate per chiarezza. Gli strumenti diagnostici avanzati consentono la manutenzione preventiva interpretando questi parametri:

*Temperatura:*

- **Temperatura di aspirazione**. Visualizza la temperatura dell'aria che entra nel collettore di aspirazione.
- **Temperatura ambiente**. Monitora le condizioni esterne.
- **Temperatura del liquido di raffreddamento**. Monitora l'efficienza del raffreddamento del motore.
- **Temperatura dell'olio motore**. Visualizza le condizioni dell'olio durante il funzionamento.

*Motore:*

- **Velocità del motore**. Monitora i giri al minuto (RPM) del motore.
- **Tempo di funzionamento del motore**. Monitora il tempo di funzionamento del motore.
- **Carico motore calcolato**. Indica la percentuale di carico di lavoro del motore.

*Carburante:*

- **Pressione del carburante**. Indica la pressione del sistema di alimentazione.
- **Consumo di carburante**. Calcola il consumo di carburante del veicolo.
- **Carburante rimanente**. Indica il livello di carburante nel veicolo.

*Altro:*

- **Livello batteria**. Indica il livello di tensione della batteria del veicolo.
- **Velocità del veicolo**. Visualizza i dati del sensore di velocità del veicolo (VSS).
- **Posizione dell'acceleratore**. Determina l'aspirazione dell'aria del motore tramite l'angolo della farfalla.
  **VIN**. Visualizza il numero di identificazione a 17 caratteri del veicolo.


## Registrazione viaggio {#trip-recording}

**Android**. Vai a: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![Registrazione OBD](@site/static/img/plugins/obd/obd_recording.png)| ![Registrazione OBD](@site/static/img/plugins/obd/obd_recording_1.png)|

Per includere i dati OBD-II in un file GPX, è necessario selezionare i parametri desiderati per la registrazione utilizzando il [plugin Registrazione viaggio](../plugins/trip-recording.md#recording-settings). Ciò consente di analizzare le metriche del veicolo insieme ai dati del viaggio.

#### Tag {#tags}

OsmAnd applica nomi di tag personalizzati per le metriche del veicolo nel [file GPX](../plugins/trip-recording.md#recorded-gpx-file). Ad esempio:

- `vm_eotemp`: Temperatura olio motore.
- `vm_fpress`: Pressione carburante.
- `vm_espeed`: Velocità motore.

Questi tag rendono più facile identificare e utilizzare dati specifici del veicolo durante la revisione del file GPX registrato.


## Widget {#widgets}

**Android.** Vai a: *Menu → Configura schermo → Widget → Scegli un pannello → Metriche del veicolo*

| | |
|--|--|
|![Impostazioni OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![Impostazioni OBD](@site/static/img/plugins/obd/obd_widget.png)|

I [widget Metriche del veicolo](../widgets/info-widgets.md#vehicle-metrics-widgets) sono inclusi automaticamente quando si abilita il plugin. Se non sono visibili, è possibile aggiungerli manualmente tramite il menu [Configura schermo](../widgets/configure-screen.md).

### Impostazioni widget {#widget-settings}

I widget visualizzano i dati chiave dal dispositivo OBD-II connesso in tempo reale, come velocità, metriche del motore e consumo di carburante. Assicurati che siano visibili prima di iniziare il viaggio per monitorare le metriche senza problemi.

Alcuni widget offrono opzioni di modalità di visualizzazione:

- **Istantanea**. Visualizza i dati in tempo reale per la metrica selezionata.
- **Media**. Visualizza i valori medi su un intervallo di tempo configurabile (da 15 secondi a 60 minuti).


## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: dicembre 2024*