---
source-hash: 5f3cf642f46def8b297602c9bfd712fe505ad1b49873449f53c2a266a969471b
sidebar_position: 5
title:  Crash Logs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Überblick {#overview}

Absturzprotokolle sind wertvolle Diagnosewerkzeuge, die Entwicklern helfen, Probleme und Fehler zu identifizieren und zu beheben, die dazu führen, dass die Anwendung abstürzt oder sich unerwartet verhält. Es ist möglich, Protokolle von Ihrem Android-Gerät mit dem OsmAnd-Entwicklungsteam zu teilen. Derzeit haben iOS-Benutzer nur eine Art von Absturzprotokolloption zum Senden.


## Absturz- und Logcat-Protokolle {#crash-and-logcat-logs}

OsmAnd ermöglicht Ihnen das Senden von zwei Arten von Daten an Entwickler:

- **Absturzprotokolle**. Werden generiert, wenn die OsmAnd-App auf einen kritischen Fehler oder eine Ausnahme stößt, die zum Absturz führt. Diese Protokolle liefern detaillierte Informationen über den Zustand der Anwendung während des Fehlers, einschließlich Build-Daten, Stack-Traces, Fehlermeldungen und andere relevante Details.
- **Logcat-Protokolle**. Eine Aufzeichnung des OsmAnd-Protokollstreams, der verschiedene Ereignisse und Nachrichten erfasst. Diese Protokolle helfen Entwicklern, das App-Verhalten zu überwachen, den Ausführungsfluss zu verfolgen, spezifische Aktionen zu verfolgen und Probleme zu untersuchen, die nicht mit Abstürzen zusammenhängen. Logcat-Protokolle enthalten normalerweise Aufzeichnungen der Aktivität ab dem letzten Start der App.

:::caution Ihre privaten Informationen
Seien Sie vorsichtig beim Senden von Logcat-Protokollen, da diese private Informationen wie Gerätestandort, Suchanfragen, Routenbauergebnisse und Navigationsdaten enthalten können.
:::


### Protokolle aus der OsmAnd-App senden (Android) {#send-logs-from-osmand-app-android}

1. Gehen Sie zu *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/> (<Translate android="true" ids="send_logcat_log"/>)*. Wählen Sie je nach Situation den geeigneten Protokolltyp aus. Sie können sich auf den Abschnitt [Absturz- und Logcat-Protokolle](#crash-and-logcat-logs) für Details zu den Unterschieden zwischen den Protokolltypen beziehen.
2. Wählen Sie im Pop-up-Menü Gmail oder Ihre bevorzugte E-Mail-App aus. Die E-Mail wird automatisch generiert.
3. Tippen Sie auf die Schaltfläche *Senden*.

![Absturzprotokolle von Android senden 1](@site/static/img/troubleshooting/send_logs_andr_5.png)  ![Absturzprotokolle von Android senden 2](@site/static/img/troubleshooting/send_logs_andr_new_2.png)


### Protokolle von iOS-Geräten senden {#send-logs-from-ios-devices}

1. Protokolle von iOS-Geräten können gesendet werden:

    - Automatisch.
        - Navigieren Sie zur OsmAnd-App *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.  
        - Anschließend empfehlen wir, die Protokolle über Ihre E-Mail-App an `support@osmand.net` zu senden.

    - Manuell.
        - Navigieren Sie zur iOS-System-App *Dateien → Auf meinem iPhone (oder Auf meinem iPad) → OsmAnd Maps → Protokolle*.

    ![Absturzprotokolle iOS senden 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![Absturzprotokolle iOS senden 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. Senden Sie [IPS-Format](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) von Protokollen und Autorisierungsdaten:
    - Auf iOS 15 oder älter: *Einstellungen → Analyse → Analysedaten → OsmAnd Maps ips-Format-Datei*.
    - Auf iOS 16 oder neuer:  *Einstellungen → Datenschutz & Sicherheit → Analyse & Verbesserungen → Analysedaten → OsmAnd Maps ips-Format-Datei*.
    - Anschließend empfehlen wir, die Protokolle über Ihre E-Mail-App an `support@osmand.net` zu senden.

    ![Absturzprotokolle iOS senden 1](@site/static/img/troubleshooting/send_log_ios.png)  ![Absturzprotokolle iOS senden 2](@site/static/img/troubleshooting/log_1_ios.png)


## Tombstone-Dateien senden (Android) {#send-tombstone-files-android}

:::caution Wichtig
Nur für fortgeschrittene Benutzer!
:::

In bestimmten komplexen oder ungewöhnlichen Fällen können *[Tombstone-Dateien](https://source.android.com/docs/core/tests/debug)* erforderlich sein. Diese Dateien liefern detaillierte Stack-Traces für alle Threads in einem abstürzenden Prozess (nicht nur denjenigen, der den Fehler verursacht hat), eine vollständige Speicherkarte und eine Liste aller offenen Dateideskriptoren. Tombstone-Dateien sind für das Debugging und die Diagnose von Problemen im Zusammenhang mit nativem Code auf der Android-Plattform unerlässlich.


### Verwendung des Geräts {#using-your-device}

Um Tombstone-Dateien zu exportieren, müssen Sie einen Fehlerbericht über die Android-Systemeinstellungen erstellen:

1. Aktivieren Sie die *Entwickleroptionen* (dieser Bildschirm ist standardmäßig ausgeblendet).
    - Gehen Sie zu *Einstellungen → Über das Telefon → Softwareinformationen* (dieser Pfad ist für Samsung-Geräte gültig).
    - Tippen Sie siebenmal auf die *Build-Nummer*, bis ein Pop-up bestätigt, dass der Entwicklermodus aktiv ist.

2. Gehen Sie zu den *Entwickleroptionen*, die sich normalerweise am Ende der Einstellungsliste befinden. Sie können auch die Suchfunktion verwenden.
    - Tippen Sie auf die Option *Fehlerbericht erstellen*.
    - Wählen Sie den Typ des Fehlerberichts aus und tippen Sie auf *Bericht*.
  
Nachdem der Fehlerbericht fertig ist, erhalten Sie eine Benachrichtigung. Tippen Sie auf das Benachrichtigungsfeld, um den Bericht auf Ihr Gerät herunterzuladen. Entpacken Sie die Datei und senden Sie die Tombstone-Dateien an das OsmAnd-Entwicklerteam (E-Mail: `support@osmand.net`).

![Absturzprotokolle von Android senden 3](@site/static/img/troubleshooting/send_logs_andr_3.png)  ![Absturzprotokolle von Android senden 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
Bitte beachten Sie, dass Fehlerberichte private Daten enthalten können, einschließlich App-Nutzung oder Standort.
:::

### Verwendung von ADB {#using-adb}

Die Android Debugging Bridge (ADB) ist ein Befehlszeilentool, mit dem Entwickler ihre Anwendungen debuggen können. Um ADB zum Exportieren von Tombstone-Dateien zu verwenden, müssen Sie es zuerst herunterladen und installieren. Befolgen Sie die Anweisungen auf der [offiziellen Android-Entwicklerseite](https://developer.android.com/tools/releases/platform-tools).

#### Gerät vorbereiten {#prepare-your-device}

Stellen Sie sicher, dass die *Entwickleroptionen* aktiviert sind (dieser Bildschirm ist standardmäßig ausgeblendet) und das *USB-Debugging* eingeschaltet ist:

- Navigieren Sie zu *Einstellungen → Über das Telefon → Softwareinformationen*.
- Tippen Sie siebenmal auf die *Build-Nummer*, bis ein Pop-up bestätigt, dass der Entwicklermodus aktiv ist.
- Aktivieren Sie in den *Entwickleroptionen* das *USB-Debugging*.

Verbinden Sie dann Ihr Gerät über USB mit Ihrer Workstation. Wenn dies die erste Verbindung ist, wird ein Pop-up angezeigt, das um Erlaubnis zum Debuggen bittet.

#### Fehlerbericht erstellen {#generate-bug-report}

1. Öffnen Sie ein Befehlszeilenterminal. Verwenden Sie auf Mac oder Linux die App *Terminal* und auf Windows die *Befehlszeile*.
2. Navigieren Sie mit dem Befehl *cd* zum Ordner platform-tools, in dem sich ADB befindet (z. B. „cd /Benutzer/Benutzername/Downloads/Tools“).
3. Erstellen Sie den Fehlerbericht:
   - Auf Mac: ```adb bugreport```
   - Auf Windows: ```adb.exe bugreport```
4. Warten Sie einige Minuten, bis der Bericht generiert ist. Die resultierende Datei wird im Ordner platform tools gespeichert.
5. Entpacken Sie die Datei.
6. Suchen Sie den Ordner *tombstones* mit Dateien wie *tombstone_00*, *tombstone_01* und ähnlichen.
7. Senden Sie die Tombstone-Dateien an `support@osmand.net`.

<!--
* Open the terminal and call the command:  
```adb bugreport ./output.zip```  
where output.zip is the name of the result file  

* Unzip the result file:  
```unzip file.zip -d destination_folder```  

* Find tombstones folder:  
```cd FS/data/tombstones```
Where you find files like  -->

### Verwendung von gerooteten Geräten oder Android Studio Emulator {#using-rooted-devices-or-android-studio-emulator}

- Mit Root-Zugriff auf Ihr Gerät können Sie den Ordner */data/tombstones* direkt öffnen.  

- Verwenden Sie im Android Studio den Emulator, um zum *Geräte-Dateiexplorer* zu navigieren und den Ordner /data/tombstones zu finden. Darin finden Sie Dateien mit Namen wie *tombstone_00*, *tombstone_01* und andere. Laden Sie diese Dateien herunter und senden Sie sie an `support@osmand.net`.

Weitere Informationen zu Fehlerberichten finden Sie in der [Android-Dokumentation](https://developer.android.com/studio/debug/bug-report).