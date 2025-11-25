---
source-hash: 5f3cf642f46def8b297602c9bfd712fe505ad1b49873449f53c2a266a969471b
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


## Log dei crash e Logcat {#crash-and-logcat-logs}

OsmAnd consente di inviare due tipi di dati agli sviluppatori:

- **Log dei crash**. Generati quando l'app OsmAnd incontra un errore critico o un'eccezione che ne causa il crash. Questi log forniscono informazioni dettagliate sullo stato dell'applicazione durante il guasto, inclusi dati di build, stack trace, messaggi di errore e altri dettagli rilevanti.
- **Logcat log**. Un registro del flusso di log di OsmAnd che cattura vari eventi e messaggi. Questi log aiutano gli sviluppatori a monitorare il comportamento dell'app, a tracciare il flusso di esecuzione, a tracciare azioni specifiche e a indagare su problemi non correlati ai crash. I logcat log di solito contengono registrazioni dell'attività dal momento in cui l'app è stata avviata l'ultima volta.

:::caution Le tue informazioni private
Fai attenzione quando invii i logcat log, poiché potrebbero contenere informazioni private come la posizione del dispositivo, le query di ricerca, i risultati della creazione di percorsi e i dati di navigazione.
:::


### Invia log dall'app OsmAnd (Android) {#send-logs-from-osmand-app-android}

1. Vai a *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/> (<Translate android="true" ids="send_logcat_log"/>)*. A seconda della tua situazione, seleziona il tipo di log appropriato. Puoi fare riferimento alla sezione [Log dei crash e Logcat](#crash-and-logcat-logs) per i dettagli sulle differenze tra i tipi di log.
2. Nel menu a comparsa, scegli Gmail o la tua app di posta elettronica preferita. L'email verrà generata automaticamente.
3. Tocca il pulsante *Send*.

![Send crash logs from Android 1](@site/static/img/troubleshooting/send_logs_andr_5.png)  ![Send crash logs from Android 2](@site/static/img/troubleshooting/send_logs_andr_new_2.png)


### Invia log da dispositivi iOS {#send-logs-from-ios-devices}

1. I log dai dispositivi iOS possono essere inviati:

    - Automaticamente.
        - Naviga nell'app OsmAnd *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.  
        - Quindi, utilizzando la tua app di posta elettronica, ti consigliamo di inviare i log a `support@osmand.net`.

    - Manualmente.
        - Naviga nell'app di sistema iOS *File → Sul mio iPhone (o Sul mio iPad) → OsmAnd Maps → Logs*.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. Invia il [formato IPS](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) dei log e dei dati di autorizzazione:
    - Su iOS 15 o precedenti: *Impostazioni → Analisi → Dati di analisi → File in formato ips di OsmAnd Maps*.
    - Su iOS 16 o successive:  *Impostazioni → Privacy e sicurezza → Analisi e miglioramenti → Dati di analisi → File in formato ips di OsmAnd Maps*.
    - Quindi, utilizzando la tua app di posta elettronica, ti consigliamo di inviare i log a `support@osmand.net`.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_log_ios.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/log_1_ios.png)


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