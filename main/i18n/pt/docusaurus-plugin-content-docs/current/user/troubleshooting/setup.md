---
source-hash: 88e4f7fd45f03ba362eef617efece8cbb32eac46a5e30d86a6db12675354fa56
sidebar_position: 1
title: Configuração
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Configuração Inicial {#initial-setup}

### Como recuperar dados {#how-to-recover-data}

Para evitar a perda de dados, certifique-se de que seus dados pessoais, rotas e mapas estejam salvos. O OsmAnd oferece opções para exportar seus dados para vários formatos. Em caso de perda de dados ou troca de dispositivo, siga [estas etapas](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss) para restaurar seus dados a partir de um backup.


### Como transferir Favoritos e Trilhas para um novo dispositivo {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- O método mais simples é exportar um perfil com os dados necessários: *Menu → Configurações → Exportar →* selecione os dados que deseja exportar.
- Alternativamente, você pode fazer backup de todos os seus dados do dispositivo anterior copiando a pasta localizada em *Configurações → Configurações do OsmAnd → Pasta de armazenamento de dados* (caminho padrão: `Android/data/net.osmand.plus`). Em seguida, cole o conteúdo desta pasta na pasta de armazenamento de dados do seu novo dispositivo.


## Importar Arquivos {#import-files}

### Tenho um arquivo GPX, como faço para importá-lo para o OsmAnd? {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **Android**
    - Você pode [baixar e abrir o arquivo](../navigation/setup/gpx-navigation.md) usando um navegador de arquivos ou serviço de nuvem como o Dropbox, e selecionar o OsmAnd como o aplicativo de destino.
    - Alternativamente, coloque o arquivo na pasta inicial do OsmAnd: `osmand/tracks/(subpasta_opcional)/seu_arquivo.gpx`.

- **iOS**
    - Para abrir [um arquivo GPX no OsmAnd](../navigation/setup/gpx-navigation.md), basta baixá-lo e escolher o OsmAnd como o aplicativo para abri-lo. O arquivo estará então disponível para uso dentro do aplicativo.

### Linhas de contorno ou relevos não aparecem {#contour-lines-or-hillshades-do-not-show-up}

Leia mais sobre o [plugin de Topografia](../plugins/topography.md).


## Como habilitar fontes do sistema (Android) {#how-to-enable-system-fonts-android}

A partir da versão Android 4.9, o OsmAnd integra a fonte do sistema do seu dispositivo na interface do aplicativo, otimizando seu design ao eliminar o uso de fontes mistas. A fonte do sistema é aplicada automaticamente a todos os elementos da interface do usuário.

- O OsmAnd usa a fonte padrão do sistema do seu dispositivo em todos os elementos da interface do usuário.
- A mudança para a fonte do sistema é automática. Você não precisa configurar nenhuma configuração no aplicativo para este recurso.
- Este recurso não afeta as fontes exibidas no mapa.


## OsmAnd 4.4 (iOS) {#osmand-44-ios}

O OsmAnd 4.4 para dispositivos iOS não está disponível para versões iOS anteriores ao iOS 15.

Isso significa que para instalar o OsmAnd 4.4 você precisa atualizar seu sistema operacional para pelo menos iOS 15 ou mais recente.


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


### How do I use my SD card with OsmAnd under Android 4.4+ and 5 {#how-do-i-use-my-sd-card-with-osmand-under-android-44-and 5}

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


## Copiar Pacote de Mapa Raster Criado no PC {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Importar sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Importar sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)  

</TabItem>

</Tabs>

Os pacotes de mapas podem ser salvos em dois formatos: [SQLite e Metainfo](https://osmand.net/docs/user/map/raster-maps). Após criar seu pacote de mapas, siga estas etapas para movê-lo para o OsmAnd:

- **Para Android**. Acesse o armazenamento do seu dispositivo e copie o(s) arquivo(s) do seu PC para a pasta `BASE_OSMAND_STORAGE/tiles_`. Alternativamente, você pode baixar o arquivo do seu e-mail, nuvem ou mensageiro, e abri-lo com o aplicativo OsmAnd. O pacote de mapas será adicionado automaticamente à sua lista de mapas online.

- **Para iOS**. Baixe o arquivo do iTunes ou de um mensageiro, e então abra-o com o aplicativo OsmAnd. O pacote de mapas será adicionado automaticamente à sua lista de mapas online.