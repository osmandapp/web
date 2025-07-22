---
source-hash: 88e4f7fd45f03ba362eef617efece8cbb32eac46a5e30d86a6db12675354fa56
sidebar_position: 1
title:  Kurulum
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## İlk Kurulum {#initial-setup}

### Veriler nasıl kurtarılır? {#how-to-recover-data}

Veri kaybını önlemek için kişisel verilerinizin, rotalarınızın ve haritalarınızın yedeklendiğinden emin olun. OsmAnd, verilerinizi çeşitli formatlara aktarma seçenekleri sunar. Veri kaybı veya cihaz değişikliği durumunda, verilerinizi bir yedekten geri yüklemek için [bu adımları](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss) izleyin.


### Favoriler ve İzler yeni bir cihaza nasıl aktarılır? {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- En basit yöntem, gerekli verileri içeren bir profili dışa aktarmaktır: *Menü → Ayarlar → Dışa Aktar →* dışa aktarmak istediğiniz verileri seçin.
- Alternatif olarak, önceki cihazınızdaki tüm verilerinizi *Ayarlar → OsmAnd Ayarları → Veri depolama klasörü* (varsayılan yol: `Android/data/net.osmand.plus`) içinde bulunan klasörü kopyalayarak yedekleyebilirsiniz. Ardından, bu klasörün içeriğini yeni cihazınızdaki Veri depolama klasörüne yapıştırın.


## Dosyaları İçe Aktar {#import-files}

### Bir GPX dosyam var, OsmAnd'a nasıl aktarırım? {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **Android**
    - Bir dosya tarayıcısı veya Dropbox gibi bir bulut hizmeti kullanarak [dosyayı indirebilir ve açabilir](..//navigation/setup/gpx-navigation.md) ve hedef uygulama olarak OsmAnd'ı seçebilirsiniz.
    - Alternatif olarak, dosyayı OsmAnd ana klasörüne yerleştirin: `osmand/tracks/(isteğe bağlı_alt-klasör)/dosyanız.gpx`.

- **iOS**
    - [Bir GPX dosyasını OsmAnd'da açmak](..//navigation/setup/gpx-navigation.md) için, dosyayı indirin ve açmak için OsmAnd uygulamasını seçin. Dosya daha sonra uygulama içinde kullanılabilir olacaktır.

### Kontur çizgileri veya gölgeler görünmüyor {#contour-lines-or-hillshades-do-not-show-up}

[Topografi eklentisi](../plugins/topography.md) hakkında daha fazla bilgi edinin.


## Sistem yazı tipleri nasıl etkinleştirilir (Android) {#how-to-enable-system-fonts-android}

Android 4.9 sürümünden itibaren OsmAnd, cihazınızın sistem yazı tipini uygulama arayüzüne entegre ederek, karışık yazı tipi kullanımını ortadan kaldırarak tasarımını optimize eder. Sistem yazı tipi tüm UI öğelerine otomatik olarak uygulanır.

- OsmAnd, tüm kullanıcı arayüzü öğelerinde cihazınızın varsayılan sistem yazı tipini kullanır.
- Sistem yazı tipine geçiş otomatiktir. Bu özellik için uygulamada herhangi bir ayar yapılandırmanıza gerek yoktur.
- Bu özellik, haritada görüntülenen yazı tiplerini etkilemez.


## OsmAnd 4.4 (iOS) {#osmand-44-ios}

iOS 15'ten eski iOS sürümleri için OsmAnd 4.4 mevcut değildir.

Bu, OsmAnd 4.4'ü yüklemek için işletim sisteminizi en az iOS 15 veya daha yeni bir sürüme yükseltmeniz gerektiği anlamına gelir.


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


## PC'de Oluşturulan Raster Harita Paketini Kopyala {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Sqlitedb Android'i İçe Aktar](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sqlitedb iOS'u İçe Aktar](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)  

</TabItem>

</Tabs>

Harita paketleri iki formatta kaydedilebilir: [SQLite ve Metainfo](https://osmand.net/docs/user/map/raster-maps). Harita paketinizi oluşturduktan sonra, OsmAnd'a taşımak için şu adımları izleyin:

- **Android için**. Cihazınızdaki depolama alanına erişin ve dosyaları PC'nizden `BASE_OSMAND_STORAGE/tiles_` klasörüne kopyalayın. Alternatif olarak, dosyayı e-postanızdan, bulutunuzdan veya mesajlaşma uygulamanızdan indirebilir ve OsmAnd uygulamasıyla açabilirsiniz. Harita paketi otomatik olarak çevrimiçi haritalar listenize eklenecektir.

- **iOS için**. Dosyayı iTunes'tan veya bir mesajlaşma uygulamasından indirin, ardından OsmAnd uygulamasıyla açın. Harita paketi otomatik olarak çevrimiçi haritalar listenize eklenecektir.