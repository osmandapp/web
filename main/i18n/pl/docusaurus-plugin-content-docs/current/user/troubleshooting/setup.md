---
source-hash: 88e4f7fd45f03ba362eef617efece8cbb32eac46a5e30d86a6db12675354fa56
sidebar_position: 1
title: Konfiguracja
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Konfiguracja początkowa {#initial-setup}

### Jak odzyskać dane {#how-to-recover-data}

Aby zapobiec utracie danych, upewnij się, że Twoje dane osobowe, trasy i mapy są zarchiwizowane. OsmAnd oferuje opcje eksportowania danych do różnych formatów. W przypadku utraty danych lub zmiany urządzenia, postępuj zgodnie z [tymi krokami](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss), aby przywrócić dane z kopii zapasowej.


### Jak przenieść Ulubione i Ślady na nowe urządzenie {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- Najprostszą metodą jest wyeksportowanie profilu z niezbędnymi danymi: *Menu → Ustawienia → Eksportuj →* wybierz dane, które chcesz wyeksportować.
- Alternatywnie, możesz wykonać kopię zapasową wszystkich danych z poprzedniego urządzenia, kopiując folder znajdujący się w *Ustawienia → Ustawienia OsmAnd → Folder przechowywania danych* (domyślna ścieżka: `Android/data/net.osmand.plus`). Następnie wklej zawartość tego folderu do folderu przechowywania danych na nowym urządzeniu.


## Importowanie plików {#import-files}

### Mam plik GPX, jak go zaimportować do OsmAnd? {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **Android**
    - Możesz [pobrać i otworzyć plik](../navigation/setup/gpx-navigation.md) za pomocą przeglądarki plików lub usługi w chmurze, takiej jak Dropbox, i wybrać OsmAnd jako aplikację docelową.
    - Alternatywnie, umieść plik w folderze domowym OsmAnd: `osmand/tracks/(opcjonalny_podfolder)/twój_plik.gpx`.

- **iOS**
    - Aby otworzyć [plik GPX w OsmAnd](../navigation/setup/gpx-navigation.md), po prostu pobierz go i wybierz OsmAnd jako aplikację do otwarcia. Plik będzie wtedy dostępny do użytku w aplikacji.

### Linie konturowe lub cieniowanie terenu nie są wyświetlane {#contour-lines-or-hillshades-do-not-show-up}

Przeczytaj więcej o [wtyczce Topografia](../plugins/topography.md).


## Jak włączyć czcionki systemowe (Android) {#how-to-enable-system-fonts-android}

Począwszy od wersji Androida 4.9, OsmAnd integruje czcionkę systemową Twojego urządzenia z interfejsem aplikacji, optymalizując jej wygląd poprzez eliminację mieszanego użycia czcionek. Czcionka systemowa jest automatycznie stosowana do wszystkich elementów interfejsu użytkownika.

- OsmAnd używa domyślnej czcionki systemowej Twojego urządzenia we wszystkich elementach interfejsu użytkownika.
- Przełączanie na czcionkę systemową jest automatyczne. Nie musisz konfigurować żadnych ustawień w aplikacji dla tej funkcji.
- Ta funkcja nie wpływa na czcionki wyświetlane na mapie.


## OsmAnd 4.4 (iOS) {#osmand-44-ios}

OsmAnd 4.4 dla urządzeń iOS nie jest dostępny dla wersji iOS starszych niż iOS 15.

Oznacza to, że aby zainstalować OsmAnd 4.4, musisz zaktualizować swój system operacyjny do co najmniej iOS 15 lub nowszego.


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


## Kopiowanie pakietu map rastrowych utworzonego na komputerze PC {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Import sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Import sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)  

</TabItem>

</Tabs>

Pakiety map można zapisywać w dwóch formatach: [SQLite i Metainfo](https://osmand.net/docs/user/map/raster-maps). Po utworzeniu pakietu map, wykonaj następujące kroki, aby przenieść go do OsmAnd:

- **Dla Androida**. Uzyskaj dostęp do pamięci na swoim urządzeniu i skopiuj plik(i) z komputera PC do folderu `BASE_OSMAND_STORAGE/tiles_`. Alternatywnie, możesz pobrać plik z poczty e-mail, chmury lub komunikatora i otworzyć go za pomocą aplikacji OsmAnd. Pakiet map zostanie automatycznie dodany do Twojej listy map online.

- **Dla iOS**. Pobierz plik z iTunes lub komunikatora, a następnie otwórz go za pomocą aplikacji OsmAnd. Pakiet map zostanie automatycznie dodany do Twojej listy map online.