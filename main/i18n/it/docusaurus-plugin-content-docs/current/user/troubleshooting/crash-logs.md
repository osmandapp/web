---
source-hash: 49c536aaf8d6f4f285889d13e50c872cab450c0dc30630d0930692ab61fb581c
sidebar_position: 5
title:  Log dei crash
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Panoramica {#overview}

I log dei crash sono strumenti diagnostici preziosi che aiutano gli sviluppatori a identificare e correggere problemi e bug che causano il crash o un comportamento inatteso dell'applicazione. È possibile condividere i log dal proprio dispositivo Android con il team di sviluppo di OsmAnd. Attualmente, gli utenti iOS hanno solo un tipo di opzione per l'invio dei log dei crash.


## Log dei crash e Log dell'app {#crash-and-app-logs}

OsmAnd consente di inviare due tipi di dati agli sviluppatori:

- **Log dei crash**. Generati quando l'app OsmAnd incontra un errore critico o un'eccezione che ne causa il crash. Questi log forniscono informazioni dettagliate sullo stato dell'applicazione durante il guasto, inclusi dati di build, stack trace, messaggi di errore e altri dettagli rilevanti.
- **Log della sessione/app corrente**. Un registro del flusso di log di OsmAnd che cattura vari eventi e messaggi. Questi log aiutano gli sviluppatori a monitorare il comportamento dell'app, a tracciare il flusso di esecuzione, a tracciare azioni specifiche e a indagare su problemi non correlati ai crash. I logcat log di solito contengono registrazioni dell'attività dal momento in cui l'app è stata avviata l'ultima volta.

:::caution Le tue informazioni private
Fai attenzione quando invii i log dell'app, poiché potrebbero contenere informazioni private come la posizione del dispositivo, le query di ricerca, i risultati della creazione di percorsi e i dati di navigazione.
:::


### Invia log dall'app OsmAnd {#send-logs-from-osmand-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Send crash logs from Android 1](@site/static/img/troubleshooting/send_logs_andr_5.webp)  ![Send crash logs from Android 2](@site/static/img/troubleshooting/send_logs_andr_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Send crash logs from iOS](@site/static/img/troubleshooting/send_logs_ios.webp)

</TabItem>

</Tabs>

1. Vai a *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/>* o *<Translate android="true" ids="send_logcat_log"/>* (*Invia log dell'app corrente* su iOS). A seconda della tua situazione, seleziona il tipo di log appropriato. Puoi fare riferimento alla sezione [Log dei crash e Log dell'app](#crash-and-app-logs) per i dettagli sulle differenze tra i tipi di log.
2. Nel menu a comparsa, scegli Gmail o la tua app di posta elettronica preferita. Ti consigliamo di inviare i log a `support@osmand.net`.
3. Tocca il pulsante *Send*.

<!--
### Send Logs from iOS Devices {#send-logs-from-ios-devices}

1. Logs from iOS devices can be sent:

    - Automatically.
        - Navigate to OsmAnd app *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.  
        - Then, using your email app, we recommend sending the logs to `support@osmand.net`.

    - Manually.
        - Navigate to the iOS system app *Files → On my iPhone (or On my iPad) → OsmAnd Maps → Logs*.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. Send [IPS-format](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) of logs and authorization data:
    - On iOS 15 or older: *Settings → Analytics → Analytics Data → OsmAnd Maps ips-format file*.
    - On iOS 16 or newer:  *Settings → Privacy & Security → Analytics & Improvements → Analytics Data → OsmAnd Maps ips-format file*.
    - Then, using your email app, we recommend sending the logs to `support@osmand.net`.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_log_ios.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/log_1_ios.png)
-->

## Istogramma dell'heap per problemi di memoria (Android) {#heap-histogram-for-memory-problems-android}

:::caution Solo Android
:::

Un *istogramma dell'heap* è una tabella che mostra cosa occupa la memoria Java dell'app: nomi delle classi con conteggi e dimensioni degli oggetti. Aiuta gli sviluppatori a individuare cosa consuma memoria quando l'app diventa lenta, si blocca o si chiude dopo un po'. Non contiene le tue posizioni, i nomi delle tracce o le query di ricerca. OsmAnd esegue un dump completo della memoria sul dispositivo, lo trasforma in istogramma ed elimina subito il dump.

L'esecuzione del dump **blocca l'app per 5–10 secondi**. Se tocchi lo schermo durante quel tempo, Android potrebbe mostrare *OsmAnd non risponde*. Per questo motivo la raccolta automatica è **disattivata per impostazione predefinita**.

**Quando attivarla:**

- OsmAnd si chiude da solo o mostra ripetutamente *non risponde*, soprattutto dopo un certo tempo di utilizzo o quando apri la ricerca, la mappa con molti POI o *I miei luoghi* con molte tracce.
- L'app diventa più lenta più a lungo rimane in esecuzione e il riavvio la migliora.
- Il report di crash indica che l'app ha esaurito la memoria (`OutOfMemoryError`).
- Il supporto di OsmAnd ti ha chiesto di raccogliere un istogramma dell'heap.

**Quando lasciarla disattivata:**

- Uso quotidiano e navigazione, quando l'app funziona correttamente.
- Crash che si verificano subito a ogni avvio o con un'azione specifica come l'apertura di un file. In questi casi è sufficiente un normale [log dei crash](#send-logs-from-osmand-app).

**Come raccogliere e inviare:**

1. Attiva il [plugin di sviluppo OsmAnd](../plugins/development.md) e vai su *Menu principale → Plugin → Sviluppo OsmAnd → Impostazioni → Memoria → Memoria Java*.
2. Nel pannello *Heap dump*, scegli una delle seguenti opzioni:
    - **Raccogli su utilizzo elevato**. L'istogramma viene raccolto automaticamente quando la memoria Java è quasi piena, al massimo una volta ogni 30 minuti, e viene allegato al successivo report di crash. Continua a usare l'app normalmente finché il problema non si ripresenta.
    - **Raccogli e analizza ora**. Raccoglie subito l'istogramma e mostra il risultato. Usalo quando l'app è già lenta e *Memoria Java* mostra un utilizzo elevato.
3. Tocca **Condividi report** per inviare l'ultimo report agli sviluppatori, oppure invialo dalla finestra di dialogo del crash al prossimo avvio dell'app.
4. Disattiva *Raccogli su utilizzo elevato* una volta inviato il report.

![Java memory Android](@site/static/img/troubleshooting/heap_histogram_andr_1.webp)  ![Heap dump panel Android](@site/static/img/troubleshooting/heap_histogram_andr_2.webp)


## Invia file Tombstone (Android) {#send-tombstone-files-android}

:::caution Cruciale
Solo per utenti avanzati!
:::

In certi casi complessi o insoliti, potrebbero essere richiesti i *[file Tombstone](https://source.android.com/docs/core/tests/debug)*. Questi file forniscono stack trace dettagliate per tutti i thread in un processo che si blocca (non solo quello che ha causato l'errore), una mappa di memoria completa e un elenco di tutti i descrittori di file aperti. I file Tombstone sono vitali per il debug e la diagnosi di problemi relativi al codice nativo sulla piattaforma Android.


### Utilizzo del tuo dispositivo {#using-your-device}

Per esportare i file tombstone, è necessario generare un report di bug utilizzando le impostazioni di sistema Android:

1. Abilita le *Opzioni sviluppatore* (questa schermata è nascosta per impostazione predefinita).
    - Vai a *Impostazioni → Informazioni sul telefono → Informazioni software* (questo percorso è valido per i dispositivi Samsung).
    - Tocca *Numero build* sette volte finché un pop-up non conferma che la modalità sviluppatore è attiva.

2. Vai a *Opzioni sviluppatore*, solitamente situate in fondo all'elenco delle impostazioni. Puoi anche utilizzare la funzione di ricerca.
    - Tocca l'opzione *Acquisisci report bug*.
    - Seleziona il tipo di report bug e tocca *Report*.
  
Dopo che il report bug è pronto, riceverai una notifica. Tocca la casella di notifica per scaricare il report sul tuo dispositivo. Decomprimi il file e invia i file tombstone al team di sviluppatori di OsmAnd (email: `support@osmand.net`).

![Send crash logs from Android 3](@site/static/img/troubleshooting/send_logs_andr_3.png)  ![Send crash logs from Android 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
Si prega di notare che i report bug possono contenere dati privati, inclusi l'utilizzo dell'app o la posizione.
:::

### Utilizzo di ADB {#using-adb}

L'Android Debugging Bridge (ADB) è uno strumento a riga di comando che consente agli sviluppatori di eseguire il debug delle proprie applicazioni. Per utilizzare ADB per esportare i file tombstone, dovrai prima scaricarlo e installarlo. Segui le istruzioni fornite sul [sito ufficiale degli sviluppatori Android](https://developer.android.com/tools/releases/platform-tools).

#### Prepara il tuo dispositivo {#prepare-your-device}

Assicurati che le *Opzioni sviluppatore* siano abilitate (questa schermata è nascosta per impostazione predefinita) e che il *Debug USB* sia attivato:

- Naviga in *Impostazioni → Informazioni sul telefono → Informazioni software*.
- Tocca *Numero build* sette volte finché un pop-up non conferma che la modalità sviluppatore è attiva.
- Nelle *Opzioni sviluppatore*, abilita il *Debug USB*.

Quindi, collega il tuo dispositivo alla tua workstation tramite USB. Se è la prima volta che ti connetti, apparirà un pop-up che chiede il permesso per consentire il debug.

#### Genera report bug {#generate-bug-report}

1. Apri un terminale a riga di comando. Su Mac o Linux, usa l'app *Terminale*, e su Windows, usa la *Riga di comando*.
2. Naviga nella cartella platform-tools dove si trova ADB usando il comando *cd* (ad esempio, ‘cd /Users/Username/Downloads/Tools’).
3. Genera il report bug:
   - Su Mac: ```adb bugreport```
   - Su Windows: ```adb.exe bugreport```
4. Attendi qualche minuto per la generazione del report. Il file risultante verrà salvato nella cartella platform tools.
5. Decomprimi il file.
6. Trova la cartella *tombstones* con file come *tombstone_00*, *tombstone_01* e simili.
7. Invia i file tombstone a `support@osmand.net`.

<!--
* Open the terminal and call the command:  
```adb bugreport ./output.zip```  
where output.zip is the name of the result file  

* Unzip the result file:  
```unzip file.zip -d destination_folder```  

* Find tombstones folder:  
```cd FS/data/tombstones```
Where you find files like  -->

### Utilizzo di dispositivi rootati o Android Studio Emulator {#using-rooted-devices-or-android-studio-emulator}

- Con l'accesso root al tuo dispositivo, puoi aprire direttamente la cartella */data/tombstones*.  

- In Android Studio, usa l'emulatore per navigare in *Device File Explorer* e trovare la cartella /data/tombstones. All'interno, troverai file denominati come *tombstone_00*, *tombstone_01* e altri. Scarica questi file e inviali a `support@osmand.net`.

Per maggiori dettagli sui report bug, fai riferimento alla [documentazione Android](https://developer.android.com/studio/debug/bug-report).