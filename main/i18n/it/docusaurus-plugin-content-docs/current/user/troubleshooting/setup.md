---
source-hash: 88e4f7fd45f03ba362eef617efece8cbb32eac46a5e30d86a6db12675354fa56
sidebar_position: 1
title:  Configurazione
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Configurazione iniziale {#initial-setup}

### Come recuperare i dati {#how-to-recover-data}

Per evitare la perdita di dati, assicurati che i tuoi dati personali, i percorsi e le mappe siano sottoposti a backup. OsmAnd offre opzioni per esportare i tuoi dati in vari formati. In caso di perdita di dati o cambio di dispositivo, segui [questi passaggi](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss) per ripristinare i tuoi dati da un backup.


### Come trasferire Preferiti e Tracce su un nuovo dispositivo {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- Il metodo più semplice è esportare un profilo con i dati necessari: *Menu → Impostazioni → Esporta →* seleziona i dati che desideri esportare.
- In alternativa, puoi eseguire il backup di tutti i tuoi dati dal dispositivo precedente copiando la cartella che si trova in *Impostazioni → Impostazioni OsmAnd → Cartella di archiviazione dati* (percorso predefinito: `Android/data/net.osmand.plus`). Quindi, incolla il contenuto di questa cartella nella Cartella di archiviazione dati sul tuo nuovo dispositivo.


## Importa file {#import-files}

### Ho un file GPX, come lo importo in OsmAnd? {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **Android**
    - Puoi [scaricare e aprire il file](../navigation/setup/gpx-navigation.md) utilizzando un file browser o un servizio cloud come Dropbox e selezionare OsmAnd come applicazione di destinazione.
    - In alternativa, posiziona il file nella cartella principale di OsmAnd: `osmand/tracks/(sottocartella_opzionale)/tuo_file.gpx`.

- **iOS**
    - Per aprire [un file GPX in OsmAnd](../navigation/setup/gpx-navigation.md), scaricalo semplicemente e scegli OsmAnd come app per aprirlo. Il file sarà quindi disponibile per l'uso all'interno dell'app.

### Le curve di livello o le ombreggiature non vengono visualizzate {#contour-lines-or-hillshades-do-not-show-up}

Leggi di più sul [plugin Topografia](../plugins/topography.md).


## Come abilitare i font di sistema (Android) {#how-to-enable-system-fonts-android}

A partire dalla versione Android 4.9, OsmAnd integra il font di sistema del tuo dispositivo nell'interfaccia dell'applicazione, ottimizzandone il design eliminando l'uso di font misti. Il font di sistema viene applicato automaticamente a tutti gli elementi dell'interfaccia utente.

- OsmAnd utilizza il font di sistema predefinito del tuo dispositivo in tutti gli elementi dell'interfaccia utente.
- Il passaggio al font di sistema è automatico. Non è necessario configurare alcuna impostazione nell'applicazione per questa funzione.
- Questa funzione non influisce sui font visualizzati sulla mappa.


## OsmAnd 4.4 (iOS) {#osmand-44-ios}

OsmAnd 4.4 per dispositivi iOS non è disponibile per versioni di iOS precedenti a iOS 15.

Ciò significa che per installare OsmAnd 4.4 è necessario aggiornare il sistema operativo ad almeno iOS 15 o versioni successive.


<!--
## Storage on an SD card (Android) {#storage-on-an-sd-card-android}

:::note
When you *turn on a USB drive to share files* with a computer or disconnect the SD card through system settings, the external drive is disconnected from the device and all applications running on the external drive are **immediately terminated**. You can [read more here](https://developer.android.com/guide/topics/data/install-location).
:::

### To move the OsmAnd home (maps) folder to an external SD card: {#to-move-the-osmand-home-maps-folder-to-an-external-sd-card}

-   Go to *Settings (on the start screen) →  OsmAnd Settings → Data storage folder*
-   Change the value to a path pointing to the external SD card, on many
    Android systems may contain `/storage/extSdCard` or similar.
    Please note that some versions of Android strictly limit your choice
    of which path will be write-accessible for apps.
-   You are then asked if the contents of the OsmAnd data folder should be moved from
    internal memory to the external SD card.
    You may also perform this manually using a built-in file manager app on the device or via
    connecting the device to a computer as external storage and performing the move from there.


### How do I use my SD card with OsmAnd under Android 4.4+ and 5 {#how-do-i-use-my-sd-card-with-osmand-under-android-44-and-5}

If you update your Android to version 4.4.x, you will experience a known
Android issue with the `WRITE_EXTERNAL_STORAGE` permission: Android has
changed the rules so that from now on no application can write to the
external SD card anywhere outside its new standard folder
`Android/data/[PACKAGE-NAME]`. If OsmAnd was installed before updating
your device to Android 4.4.x, it will continue to work (read-only) with
the old, non-standard osmand folder, but won't be able to update any map
and other files there.

Solutions:

-   Move OsmAnd's data folder osmand to the internal storage. \
     **Drawback:** Internal storage can be rather small.
-   Move OsmAnd's data folder osmand into its standard SD folder, \
    for OsmAnd+ : `(extSdCard)/Android/data/net.osmand.plus/files` \
    for OsmAnd : `(extSdCard)/Android/data/net.osmand/files` \
     **Caution:** Whenever you uninstall OsmAnd now, all your data will
    be erased as well! (Unless you unmount your SD card, or rename the
    net.osmand(.plus) folder before de-installation.)

If you manually want to perform the necessary copies/moves, either use a
PC to perform this action on the SD card, or on the device itself use
the file manager tool **which came pre-installed with your Android**
(only these methods will have the necessary write permission). All copy operations
may also be invoked in OsmAnd itself via `Menu/Settings/General/Data
storage folder` but the copy operations may take a long time or result in
errors (e.g. if the SD card is too full).
-->


## Copia pacchetto mappa raster creato su PC {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Import sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Import sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)  

</TabItem>

</Tabs>

I pacchetti mappa possono essere salvati in due formati: [SQLite e Metainfo](https://osmand.net/docs/user/map/raster-maps). Dopo aver creato il pacchetto mappa, segui questi passaggi per spostarlo in OsmAnd:

- **Per Android**. Accedi all'archiviazione sul tuo dispositivo e copia i file dal tuo PC nella cartella `BASE_OSMAND_STORAGE/tiles_`. In alternativa, puoi scaricare il file dalla tua email, cloud o messenger e aprirlo con l'app OsmAnd. Il pacchetto mappa verrà aggiunto automaticamente all'elenco delle tue mappe online.

- **Per iOS**. Scarica il file da iTunes o da un messenger, quindi aprilo con l'app OsmAnd. Il pacchetto mappa verrà aggiunto automaticamente all'elenco delle tue mappe online.