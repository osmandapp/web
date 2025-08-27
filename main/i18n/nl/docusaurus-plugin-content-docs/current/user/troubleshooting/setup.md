---
source-hash: da8767bf5368b88ca2820e7585237507258e046e1e07f73d6fe233dc66687628
sidebar_position: 1
title:  Instellen
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Eerste installatie {#initial-setup}

### Hoe gegevens te herstellen {#how-to-recover-data}

Om gegevensverlies te voorkomen, moet u ervoor zorgen dat uw persoonlijke gegevens, routes en kaarten zijn geback-upt. OsmAnd biedt opties voor het exporteren van uw gegevens naar verschillende formaten. In geval van gegevensverlies of apparaatwijziging, volgt u [deze stappen](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss) om uw gegevens te herstellen vanuit een back-up.


### Hoe favorieten en tracks over te zetten naar een nieuw apparaat {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- De eenvoudigste methode is om een profiel met de benodigde gegevens te exporteren: *Menu → Instellingen → Exporteren →* selecteer de gegevens die u wilt exporteren.
- Als alternatief kunt u al uw gegevens van het vorige apparaat back-uppen door de map te kopiëren die zich bevindt in *Instellingen → OsmAnd-instellingen → Gegevensopslagmap* (standaardpad: `Android/data/net.osmand.plus`). Plak vervolgens de inhoud van deze map in de gegevensopslagmap op uw nieuwe apparaat.


## Bestanden importeren {#import-files}

### Ik heb een GPX-bestand, hoe importeer ik het in OsmAnd? {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **Android**
    - U kunt het bestand [downloaden en openen](../navigation/setup/gpx-navigation.md) met een bestandsbrowser of cloudservice zoals Dropbox, en OsmAnd selecteren als de doelapplicatie.
    - Als alternatief plaatst u het bestand in de OsmAnd-thuismap: `osmand/tracks/(optionele_submap)/uw_bestand.gpx`.

- **iOS**
    - Om [een GPX-bestand in OsmAnd](../navigation/setup/gpx-navigation.md) te openen, downloadt u het eenvoudigweg en kiest u OsmAnd als de app om het te openen. Het bestand is dan beschikbaar voor gebruik binnen de app.

### Contourlijnen of heuvelschaduwen worden niet weergegeven {#contour-lines-or-hillshades-do-not-show-up}

Lees meer over de [Topografie-plug-in](../plugins/topography.md).


## Hoe systeemlettertypen in te schakelen (Android) {#how-to-enable-system-fonts-android}

Vanaf Android-versie 4.9 integreert OsmAnd het systeemlettertype van uw apparaat in de applicatie-interface, waardoor het ontwerp wordt geoptimaliseerd door het gebruik van gemengde lettertypen te elimineren. Het systeemlettertype wordt automatisch toegepast op alle UI-elementen.

- OsmAnd gebruikt het standaard systeemlettertype van uw apparaat in alle gebruikersinterface-elementen.
- Het overschakelen naar het systeemlettertype gebeurt automatisch. U hoeft hiervoor geen instellingen in de applicatie te configureren.
- Deze functie heeft geen invloed op de lettertypen die op de kaart worden weergegeven.


## OsmAnd 4.4 (iOS) {#osmand-44-ios}

OsmAnd 4.4 voor iOS-apparaten is niet beschikbaar voor iOS-versies ouder dan iOS 15.

Dit betekent dat u om OsmAnd 4.4 te installeren uw besturingssysteem moet upgraden naar minimaal iOS 15 of nieuwer.


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


## Rasterkaartpakket kopiëren dat op pc is gemaakt {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Import sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Import sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)  

</TabItem>

</Tabs>

Kaartpakketten kunnen in twee formaten worden opgeslagen: [SQLite en Metainfo](https://osmand.net/docs/user/map/raster-maps). Nadat u uw kaartpakket hebt gemaakt, volgt u deze stappen om het naar OsmAnd te verplaatsen:

- **Voor Android**. Ga naar de opslag op uw apparaat en kopieer het/de bestand(en) van uw pc naar de map `BASE_OSMAND_STORAGE/tiles_`. U kunt het bestand ook downloaden via uw e-mail, cloud of messenger, en het openen met de OsmAnd-app. Het kaartpakket wordt automatisch toegevoegd aan uw lijst met online kaarten.

- **Voor iOS**. Download het bestand via iTunes of een messenger en open het vervolgens met de OsmAnd-app. Het kaartpakket wordt automatisch toegevoegd aan uw lijst met online kaarten.