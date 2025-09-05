---
source-hash: da8767bf5368b88ca2820e7585237507258e046e1e07f73d6fe233dc66687628
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

Para evitar a perda de dados, certifique-se de que seus dados pessoais, rotas e mapas estejam salvos. O OsmAnd oferece opções para exportar seus dados para vários formatos. Em caso de perda de dados ou troca de dispositivo, siga [estas etapas](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss) para restaurar seus dados de um backup.

### Como transferir Favoritos e Trilhas para um novo dispositivo {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- O método mais simples é exportar um perfil com os dados necessários: *Menu → Configurações → Exportar →* selecione os dados que deseja exportar.
- Alternativamente, você pode fazer backup de todos os seus dados do dispositivo anterior copiando a pasta localizada em *Configurações → Configurações do OsmAnd → Pasta de armazenamento de dados* (caminho padrão: `Android/data/net.osmand.plus`). Em seguida, cole o conteúdo desta pasta na pasta de armazenamento de dados do seu novo dispositivo.

## Importar Arquivos {#import-files}

### Tenho um arquivo GPX, como faço para importá-lo para o OsmAnd? {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **Android**
    - Você pode [baixar e abrir o arquivo](../navigation/setup/gpx-navigation.md) usando um navegador de arquivos ou serviço de nuvem como o Dropbox, e selecionar o OsmAnd como o aplicativo de destino.
    - Alternativamente, coloque o arquivo na pasta inicial do OsmAnd: `osmand/tracks/(sub-pasta_opcional)/seu_arquivo.gpx`.

- **iOS**
    - Para abrir [um arquivo GPX no OsmAnd](../navigation/setup/gpx-navigation.md), basta baixá-lo e escolher o OsmAnd como o aplicativo para abri-lo. O arquivo estará então disponível para uso dentro do aplicativo.

### Linhas de contorno ou relevos não aparecem {#contour-lines-or-hillshades-do-not-show-up}

Leia mais sobre o [plugin de Topografia](../plugins/topography.md).

## Como habilitar fontes do sistema (Android) {#how-to-enable-system-fonts-android}

A partir da versão 4.9 do Android, o OsmAnd integra a fonte do sistema do seu dispositivo na interface do aplicativo, otimizando seu design ao eliminar o uso de fontes mistas. A fonte do sistema é aplicada automaticamente a todos os elementos da interface do usuário.

- O OsmAnd usa a fonte padrão do sistema do seu dispositivo em todos os elementos da interface do usuário.
- A mudança para a fonte do sistema é automática. Você não precisa configurar nenhuma definição no aplicativo para este recurso.
- Este recurso não afeta as fontes exibidas no mapa.

## OsmAnd 4.4 (iOS) {#osmand-44-ios}

O OsmAnd 4.4 para dispositivos iOS não está disponível para versões iOS anteriores ao iOS 15.

Isso significa que, para instalar o OsmAnd 4.4, você precisa atualizar seu sistema operacional para pelo menos o iOS 15 ou mais recente.

<!--
## Armazenamento em um cartão SD (Android) {#storage-on-an-sd-card-android}

:::note
Quando você *ativa uma unidade USB para compartilhar arquivos* com um computador ou desconecta o cartão SD através das configurações do sistema, a unidade externa é desconectada do dispositivo e todos os aplicativos em execução na unidade externa são **imediatamente encerrados**. Você pode [ler mais aqui](https://developer.android.com/guide/topics/data/install-location).
:::

### Para mover a pasta inicial do OsmAnd (mapas) para um cartão SD externo: {#to-move-the-osmand-home-maps-folder-to-an-external-sd-card}

- Vá para *Configurações (na tela inicial) → Configurações do OsmAnd → Pasta de armazenamento de dados*
- Altere o valor para um caminho que aponte para o cartão SD externo, em muitos
  sistemas Android pode conter `/storage/extSdCard` ou similar.
  Observe que algumas versões do Android limitam estritamente sua escolha
  de qual caminho será gravável para aplicativos.
- Você será então perguntado se o conteúdo da pasta de dados do OsmAnd deve ser movido da
  memória interna para o cartão SD externo.
  Você também pode fazer isso manualmente usando um aplicativo gerenciador de arquivos embutido no dispositivo ou
  conectando o dispositivo a um computador como armazenamento externo e realizando a movimentação de lá.

### Como uso meu cartão SD com o OsmAnd no Android 4.4+ e 5 {#how-do-i-use-my-sd-card-with-osmand-under-android-44-and-5}

Se você atualizar seu Android para a versão 4.4.x, você experimentará um problema conhecido
do Android com a permissão `WRITE_EXTERNAL_STORAGE`: o Android mudou as regras para que, a partir de agora, nenhum aplicativo possa gravar no
cartão SD externo em qualquer lugar fora de sua nova pasta padrão
`Android/data/[PACKAGE-NAME]`. Se o OsmAnd foi instalado antes de atualizar
seu dispositivo para o Android 4.4.x, ele continuará a funcionar (somente leitura) com
a antiga pasta osmand não padrão, mas não poderá atualizar nenhum mapa
e outros arquivos lá.

Soluções:

- Mova a pasta de dados do OsmAnd para o armazenamento interno. \
  **Desvantagem:** O armazenamento interno pode ser bastante pequeno.
- Mova a pasta de dados do OsmAnd para sua pasta SD padrão, \
  para OsmAnd+: `(extSdCard)/Android/data/net.osmand.plus/files` \
  para OsmAnd: `(extSdCard)/Android/data/net.osmand/files` \
  **Cuidado:** Sempre que você desinstalar o OsmAnd agora, todos os seus dados serão
  apagados também! (A menos que você desmonte seu cartão SD, ou renomeie a
  pasta net.osmand(.plus) antes da desinstalação.)

Se você deseja realizar manualmente as cópias/movimentações necessárias, use um
PC para realizar esta ação no cartão SD, ou no próprio dispositivo use
a ferramenta gerenciador de arquivos **que veio pré-instalada com seu Android**
(somente esses métodos terão a permissão de gravação necessária). Todas as operações de cópia
também podem ser invocadas no próprio OsmAnd via `Menu/Configurações/Geral/Pasta de
armazenamento de dados`, mas as operações de cópia podem levar muito tempo ou resultar em
erros (por exemplo, se o cartão SD estiver muito cheio).
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

Os pacotes de mapas podem ser salvos em dois formatos: [SQLite e Metainfo](https://osmand.net/docs/user/map/raster-maps). Depois de criar seu pacote de mapas, siga estas etapas para movê-lo para o OsmAnd:

- **Para Android**. Acesse o armazenamento do seu dispositivo e copie o(s) arquivo(s) do seu PC para a pasta `BASE_OSMAND_STORAGE/tiles_`. Alternativamente, você pode baixar o arquivo do seu e-mail, nuvem ou mensageiro, e abri-lo com o aplicativo OsmAnd. O pacote de mapas será adicionado automaticamente à sua lista de mapas online.

- **Para iOS**. Baixe o arquivo do iTunes ou de um mensageiro, depois abra-o com o aplicativo OsmAnd. O pacote de mapas será adicionado automaticamente à sua lista de mapas online.