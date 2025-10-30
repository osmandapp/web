---
source-hash: 3f3910474dc310e83f4d1cc4df08088d8e2216a750483e10f61b5ba8685cc876
sidebar_position: 5
title: Crash Logs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overzicht {#overview}

Crash logs zijn waardevolle diagnostische hulpmiddelen die ontwikkelaars helpen bij het identificeren en oplossen van problemen en bugs die ervoor zorgen dat de applicatie crasht of zich onverwacht gedraagt. Het is mogelijk om logs van uw Android-apparaat te delen met het OsmAnd-ontwikkelteam. Momenteel hebben iOS-gebruikers slechts één type crashlog-optie om te verzenden.


## Crash- en Logcat-logs {#crash-and-logcat-logs}

Met OsmAnd kunt u twee soorten gegevens naar ontwikkelaars sturen:

- **Crash logs**. Worden gegenereerd wanneer de OsmAnd-app een kritieke fout of uitzondering tegenkomt die ervoor zorgt dat deze crasht. Deze logs bieden gedetailleerde informatie over de status van de applicatie tijdens de storing, inclusief buildgegevens, stack traces, foutmeldingen en andere relevante details.
- **Logcat logs**. Een record van de OsmAnd-logstroom die verschillende gebeurtenissen en berichten vastlegt. Deze logs helpen ontwikkelaars het gedrag van de app te monitoren, de uitvoeringsstroom te volgen, specifieke acties te traceren en niet-crashgerelateerde problemen te onderzoeken. Logcat-logs bevatten meestal records van activiteit vanaf het moment dat de app voor het laatst is gestart.

:::caution Uw privé-informatie
Wees voorzichtig bij het verzenden van logcat-logs, aangezien deze privé-informatie kunnen bevatten, zoals apparaatlocatie, zoekopdrachten, routebouwresultaten en navigatiegegevens.
:::


### Logs verzenden vanuit de OsmAnd-app (Android) {#send-logs-from-osmand-app-android}

1. Ga naar *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/> (<Translate android="true" ids="send_logcat_log"/>)*. Afhankelijk van uw situatie, selecteert u het juiste type log. U kunt de sectie [Crash- en Logcat-logs](#crash-and-logcat-logs) raadplegen voor details over de verschillen tussen de logtypen.
2. Kies in het pop-upmenu Gmail of uw favoriete e-mailapp. De e-mail wordt automatisch gegenereerd.
3. Tik op de knop *Verzenden*.

![Send crash logs from Android 1](@site/static/img/troubleshooting/send_logs_andr_5.png)  ![Send crash logs from Android 2](@site/static/img/troubleshooting/send_logs_andr_2.png)


### Logs verzenden vanaf iOS-apparaten {#send-logs-from-ios-devices}

1. Logs van iOS-apparaten kunnen worden verzonden:

    - Automatisch.
        - Navigeer naar de OsmAnd-app *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.  
        - Stuur vervolgens, met behulp van uw e-mailapp, de logs naar `crash@osmand.net`.

    - Handmatig.
        - Navigeer naar de iOS-systeemapp *Bestanden → Op mijn iPhone (of Op mijn iPad) → OsmAnd Maps → Logs*.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. Stuur [IPS-formaat](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) van logs en autorisatiegegevens:
    - Op iOS 15 of ouder: *Instellingen → Analyse → Analysedata → OsmAnd Maps ips-formaat bestand*.
    - Op iOS 16 of nieuwer:  *Instellingen → Privacy & Beveiliging → Analyse & Verbeteringen → Analysedata → OsmAnd Maps ips-formaat bestand*.
    - Stuur vervolgens, met behulp van uw e-mailapp, de logs naar `crash@osmand.net`.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_log_ios.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/log_1_ios.png)


## Tombstone-bestanden verzenden (Android) {#send-tombstone-files-android}

:::caution Cruciaal
Alleen voor gevorderde gebruikers!
:::

In bepaalde complexe of ongebruikelijke gevallen kunnen *[Tombstone-bestanden](https://source.android.com/docs/core/tests/debug)* vereist zijn. Deze bestanden bieden gedetailleerde stack traces voor alle threads in een crashend proces (niet alleen degene die de fout heeft veroorzaakt), een complete geheugenkaart en een lijst van alle open bestandsdescriptors. Tombstone-bestanden zijn essentieel voor het debuggen en diagnosticeren van problemen met native code op het Android-platform.


### Uw apparaat gebruiken {#using-your-device}

Om tombstone-bestanden te exporteren, moet u een bugrapport genereren met behulp van de Android-systeeminstellingen:

1. Schakel *Ontwikkelaarsopties* in (dit scherm is standaard verborgen).
    - Ga naar *Instellingen → Over de telefoon → Software-informatie* (dit pad is geldig voor Samsung-apparaten).
    - Tik zeven keer op *Buildnummer* totdat een pop-up bevestigt dat de ontwikkelaarsmodus actief is.

2. Ga naar *Ontwikkelaarsopties*, meestal onderaan de lijst met instellingen. U kunt ook de zoekfunctie gebruiken.
    - Tik op de optie *Bugrapport maken*.
    - Selecteer het type bugrapport en tik op *Rapporteren*.
  
Nadat het bugrapport klaar is, ontvangt u een melding. Tik op het meldingsvak om het rapport naar uw apparaat te downloaden. Pak het bestand uit en stuur de tombstone-bestanden naar het OsmAnd-ontwikkelaarsteam (e-mail: `crash@osmand.net`).

![Send crash logs from Android 3](@site/static/img/troubleshooting/send_logs_andr_3.png)  ![Send crash logs from Android 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
Houd er rekening mee dat bugrapporten privé-gegevens kunnen bevatten, inclusief app-gebruik of locatie.
:::

### ADB gebruiken {#using-adb}

De Android Debugging Bridge (ADB) is een opdrachtregelprogramma waarmee ontwikkelaars hun applicaties kunnen debuggen. Om ADB te gebruiken voor het exporteren van tombstone-bestanden, moet u het eerst downloaden en installeren. Volg de instructies op de [officiële Android-ontwikkelaarssite](https://developer.android.com/tools/releases/platform-tools).

#### Uw apparaat voorbereiden {#prepare-your-device}

Zorg ervoor dat *Ontwikkelaarsopties* zijn ingeschakeld (dit scherm is standaard verborgen) en *USB-foutopsporing* is ingeschakeld:

- Navigeer naar *Instellingen → Over de telefoon → Software-informatie*.
- Tik zeven keer op *Buildnummer* totdat een pop-up bevestigt dat de ontwikkelaarsmodus actief is.
- Schakel in de *Ontwikkelaarsopties* *USB-foutopsporing* in.

Verbind vervolgens uw apparaat via USB met uw werkstation. Als het de eerste keer is dat u verbinding maakt, verschijnt er een pop-up met de vraag om toestemming voor foutopsporing.

#### Bugrapport genereren {#generate-bug-report}

1. Open een opdrachtregelterminal. Gebruik op Mac of Linux de *Terminal*-app en op Windows de *Opdrachtregel*.
2. Navigeer naar de platform-tools-map waar ADB zich bevindt met behulp van de *cd*-opdracht (bijvoorbeeld 'cd /Users/Gebruikersnaam/Downloads/Tools').
3. Genereer het bugrapport:
   - Op Mac: ```adb bugreport```
   - Op Windows: ```adb.exe bugreport```
4. Wacht een paar minuten totdat het rapport is gegenereerd. Het resulterende bestand wordt opgeslagen in de platform-tools-map.
5. Pak het bestand uit.
6. Zoek de map *tombstones* met bestanden zoals *tombstone_00*, *tombstone_01* en dergelijke.
7. Stuur de tombstone-bestanden naar `crash@osmand.net`.

<!--
* Open the terminal and call the command:  
```adb bugreport ./output.zip```  
where output.zip is the name of the result file  

* Unzip the result file:  
```unzip file.zip -d destination_folder```  

* Find tombstones folder:  
```cd FS/data/tombstones```
Where you find files like  -->

### Geroote apparaten of Android Studio Emulator gebruiken {#using-rooted-devices-or-android-studio-emulator}

- Met roottoegang tot uw apparaat kunt u de map */data/tombstones* direct openen.  

- Gebruik in Android Studio de emulator om naar *Device File Explorer* te navigeren en de map /data/tombstones te vinden. Binnenin vindt u bestanden met namen zoals *tombstone_00*, *tombstone_01* en andere. Download deze bestanden en stuur ze naar `crash@osmand.net`.

Voor meer details over bugrapporten, raadpleeg de [Android-documentatie](https://developer.android.com/studio/debug/bug-report).