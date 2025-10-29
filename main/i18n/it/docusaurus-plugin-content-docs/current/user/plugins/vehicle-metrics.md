---
source-hash: 838c0b13bf6e39494baa2e4cf5e8bfdb67c4eda45efa361b82e78a8946dcd35b
sidebar_position: 16
title:  Metriche veicolo
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


## Panoramica {#overview}

:::info Funzionalità a pagamento
Il plugin Metriche veicolo è una [funzionalità a pagamento](../purchases/index.md) dell'app OsmAnd. Le informazioni sulla velocità del veicolo e sulla velocità del motore sono disponibili gratuitamente su OsmAnd.
:::

Il **plugin Metriche veicolo** consente il monitoraggio in tempo reale dei dati del veicolo tramite il [protocollo OBD-II](https://en.wikipedia.org/wiki/OBD-II_PIDs). Gli utenti possono tracciare metriche essenziali come le prestazioni del motore, l'efficienza del carburante e la velocità, consentendo una manutenzione proattiva del veicolo e la risoluzione dei problemi.  

Gli [scanner OBD-II](https://en.wikipedia.org/wiki/ELM327) sono parte integrante della diagnostica automobilistica moderna. Con lo streaming dei dati in tempo reale, gli utenti ottengono informazioni istantanee sui sistemi del veicolo, facilitando la manutenzione preventiva e riducendo i costi di riparazione. Questi strumenti sono fondamentali sia per l'uso personale che per i servizi automobilistici professionali.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni OBD](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Parametri di configurazione richiesti {#required-setup-parameters}

Per utilizzare i dati di uno scanner OBD-II:

1. [Acquista](../purchases/) un **abbonamento OsmAnd Pro**. (*Velocità veicolo* e *Velocità motore* sono gratuiti.)  
2. [Abilita](../plugins/index.md#enable--disable) il plugin Metriche veicolo nella sezione Plugin del *Menu principale*.
3. **Attiva** il Bluetooth sul tuo dispositivo.
4. [Collega](#pair-odb-ii-scanner) lo scanner OBD-II alla porta del tuo veicolo.
5. [Configura](#scanner-settings) le **impostazioni dello scanner**.
6. [Aggiungi](#widgets) i **widget Metriche veicolo** per i dati su schermo (opzionale).
7. [Usa](#trip-recording) il **plugin Registrazione viaggio** per registrare i dati del veicolo.


### Associa scanner ODB-II {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|  |  |
|--|--|
|![Connessione OBD](@site/static/img/plugins/obd/obd_connect.png)|![Connessione OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|  |  |
|--|--|
|![Connessione OBD](@site/static/img/plugins/obd/obd_connect_ios.png)|![Connessione OBD](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Collega lo scanner alla porta del tuo veicolo e associalo tramite l'app:

- Vai su *Menu → Plugin → Metriche veicolo → Impostazioni → Connetti* o **+**.
- Se Metriche veicolo è nel *Menu principale*:  *Menu → Metriche veicolo → Impostazioni → Connetti* o **+**.

Scegli il tuo dispositivo OBD-II dall'elenco e stabilisci la connessione.


## Impostazioni scanner {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Vai su: *Menu → Plugin → Metriche veicolo → OBD → menu a tre punti*

|  |  |
|--|--|
|![Impostazioni OBD](@site/static/img/plugins/obd/obd_settings.png)|![Impostazioni OBD](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Vai su: *Menu → Plugin → Metriche veicolo → OBD → menu a tre punti*

|  |  |
|--|--|
|![Impostazioni OBD](@site/static/img/plugins/obd/obd_settings_ios.png)|![Impostazioni OBD](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Connetti / Disconnetti**. Stabilisce o termina la connessione con il sensore OBD-II.
- **Impostazioni**. Apre la schermata delle impostazioni OBD-II, consentendo la gestione della connessione e l'accesso ai parametri disponibili del veicolo.
- **Rinomina**. Consente di assegnare un nome personalizzato al sensore per una più facile identificazione.
- **Dimentica**. Rimuove il sensore OBD-II precedentemente associato dall'elenco, richiedendo una nuova associazione se necessario in seguito.


## Elenco metriche {#metrics-list}

Le metriche sono classificate per chiarezza. Strumenti diagnostici avanzati consentono la manutenzione preventiva interpretando questi parametri:

*Temperatura:*

- **Temperatura di aspirazione**. Mostra la temperatura dell'aria che entra nel collettore di aspirazione.
- **Temperatura ambiente**. Monitora le condizioni esterne.
- **Temperatura del liquido di raffreddamento**. Traccia l'efficienza del raffreddamento del motore.
- **Temperatura olio motore**. Mostra le condizioni dell'olio durante il funzionamento.

*Motore:*

- **Velocità motore**. Monitora i giri al minuto (RPM) del motore.
- **Tempo di funzionamento del motore**. Traccia il tempo di funzionamento del motore.
- **Carico motore calcolato**. Indica la percentuale di carico di lavoro del motore.

*Carburante:*

- **Pressione carburante**. Indica la pressione del sistema di alimentazione.
- **Consumo di carburante**. Calcola il consumo di carburante del veicolo.
- **Carburante rimanente**. Indica il livello di carburante nel veicolo.

*Altro:*

- **Livello batteria**. Indica il livello di tensione della batteria del veicolo.
- **Tensione adattatore**. Mostra la tensione fornita all'adattatore OBD-II (comando AT RV).
- **Velocità veicolo**. Mostra i dati del sensore di velocità del veicolo (VSS).
- **Posizione acceleratore**. Determina l'aspirazione dell'aria del motore tramite l'angolo della valvola a farfalla.  
  **VIN**. Mostra il numero di identificazione del veicolo a 17 caratteri.


## Registrazione viaggio {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android**. Vai su: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![Registrazione OBD](@site/static/img/plugins/obd/obd_recording.png)| ![Registrazione OBD](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. Vai su: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![Registrazione OBD](@site/static/img/plugins/obd/obd_recording_ios.png)| ![Registrazione OBD](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



Per includere i dati OBD-II in un file GPX, è necessario selezionare i parametri desiderati per la registrazione utilizzando il [plugin Registrazione viaggio](../plugins/trip-recording.md#recording-settings). Ciò consente di analizzare le metriche del veicolo insieme ai dati del viaggio.

### Tag {#tags}

OsmAnd applica nomi di tag personalizzati per le metriche del veicolo nel [file GPX](../plugins/trip-recording.md#recorded-gpx-file). Per esempio:

- `vm_eotemp`: Temperatura olio motore.
- `vm_fpress`: Pressione carburante.
- `vm_espeed`: Velocità motore.

Questi tag facilitano l'identificazione e l'utilizzo di dati specifici del veicolo durante la revisione del file GPX registrato.


## Widget {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Vai su: *Menu → Configura schermata → Widget → Scegli un pannello → Metriche veicolo*

| | |
|--|--|
|![Impostazioni OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![Impostazioni OBD](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Vai su: *Menu → Configura schermata → Widget → Scegli un pannello → Metriche veicolo*

| | |
|--|--|
|![Impostazioni OBD](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![Impostazioni OBD](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



I [widget Metriche veicolo](../widgets/info-widgets.md#vehicle-metrics-widgets) vengono inclusi automaticamente quando si abilita il plugin. Se non sono visibili, è possibile aggiungerli manualmente tramite il menu [Configura schermata](../widgets/configure-screen.md).

### Impostazioni widget {#widget-settings}

I widget mostrano in tempo reale i dati chiave del dispositivo OBD-II collegato, come velocità, metriche del motore e consumo di carburante. Assicurati che siano visibili prima di iniziare il viaggio per tracciare le metriche senza interruzioni.

Alcuni widget offrono opzioni di modalità di visualizzazione:

- **Istantaneo**. Mostra i dati in tempo reale per la metrica selezionata.
- **Medio**. Mostra i valori medi su un intervallo di tempo configurabile (da 15 secondi a 60 minuti).


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)