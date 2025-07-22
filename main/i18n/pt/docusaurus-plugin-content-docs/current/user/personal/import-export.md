---
source-hash: 449ba8486f8036d2bbad4837dd278ab4b240f56f3282ba8c8550a0e6a1d7cc6b
sidebar_position: 10
title: Importar / Exportar
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Visão geral {#overview}

As ferramentas de **Importação** e **Exportação** no OsmAnd permitem gerenciar seus dados. Você pode mover seus perfis, favoritos, trilhas e outras configurações usando um formato especial através dos aplicativos em seu dispositivo. Esse processo simplifica o salvamento e a transferência de dados entre dispositivos e permite que você os compartilhe com outros usuários do OsmAnd.

:::note Tamanho grande
*Se o tamanho dos dados selecionados for significativo, o aplicativo levará tempo para preparar o arquivo `.osf`.*
:::


## Exportar / Importar dados {#export--import-data}

A *Importação* e a *Exportação* permitem salvar dados de **arquivos** `.osf` gerados ou usar [fontes online](../map/raster-maps.md), possibilitando a restauração de informações após a reinstalação.

**Tipos de dados** disponíveis para importação/exportação:

- **Configurações:**  
        [Perfis](../personal/profiles.md#actions), &nbsp;[OsmAnd/Configurações Gerais](../personal/global-settings.md), &nbsp;[Cores](../personal/color-palette-schemes.md), &nbsp;[Ação rápida](../widgets/quick-action.md), &nbsp;[Tipo de POI](../map/point-layers-on-map.md#poi-types), &nbsp;[Evitar estrada](../map/map-context-menu.md#avoid-road).
- **Meus Lugares:**  
        [Favoritos](../personal/favorites.md#export--import), &nbsp;[Trilhas](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[Notas OSM*, *Edições OSM](../plugins/osm-editing.md#create--modify-poi), &nbsp;[Notas A/V](../plugins/audio-video-notes.md), &nbsp;[Marcadores de mapa](../personal/markers.md), &nbsp;[Histórico de marcadores*, *Histórico de pesquisa*, *Histórico de navegação](../personal/global-settings.md#history), &nbsp;*Itinerário*.
- **Recursos:**  
        [Estilo de renderização](../map/vector-maps.md#custom-map-style), &nbsp;[Roteamento](../navigation/routing/osmand-routing.md), &nbsp;[Mecanismos de roteamento online](../navigation/routing/online-routing.md), &nbsp;[Fontes de mapa*, *Mapas Padrão/Offline](../map/raster-maps.md), &nbsp;[Mapas da Wikipedia e de Viagem](../plan-route/travel-guides.md), &nbsp;[Mapas náuticos](../plugins/nautical-charts.md), &nbsp;[Mapas rodoviários](../map/vector-maps.md#road-style), &nbsp;[Mapas topográficos](../plugins/topography.md), &nbsp;[Comandos de voz (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Comandos de voz (gravados)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Backup de favoritos](../personal/favorites.md#automatic-favorites-backup).


### Exportar {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Todos os dados que você configurou e criou podem ser exportados usando o ***menu Exportar***. O menu consiste em três grupos: **Configurações**, **Meus Lugares** e **Recursos**, que contêm todas as pastas de arquivos disponíveis. Você pode selecionar os arquivos que deseja exportar em cada pasta, um de cada vez ou todos de uma vez. **Todos os arquivos exportados são salvos no formato `.osf`**.  


### Importar {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

| |
| --- | --- | --- |
| ![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) | ![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) | ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  

| |
| --- | --- | --- |
| ![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) | ![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) | ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) |

</TabItem>

</Tabs>

Abre e restaura arquivos `.osf`. Toque no arquivo no gerenciador de arquivos do dispositivo ou use o botão de ação.

- *Alguns itens já existem*. Você pode usar esse recurso para salvar ambos os arquivos ou substituí-los todos.
- *Reiniciar*. Após importar os arquivos, o aplicativo deve ser reiniciado.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) é o recurso alternativo de que você precisa para salvar suas configurações pessoais e dados do aplicativo. Você pode usar esses dados em qualquer dispositivo disponível para instalar o aplicativo OsmAnd ou ao usar o aplicativo de desktop. Quaisquer alterações que você fizer podem ser sincronizadas.


## Prevenção de Perda de Dados {#preventing-data-loss}

Nas versões *Android* e *iOS* do OsmAnd, se você **desinstalar** completamente o aplicativo ou selecionar **Limpar Dados** em seu dispositivo no menu Configurações, informações do aplicativo, a pasta de dados também será excluída do gerenciador de arquivos do dispositivo. Se você não tomar precauções, isso resultará na **perda de todos os mapas baixados para dados do OsmAnd, todos os Favoritos salvos, trilhas GPX, comandos de voz (TTS) e [outros dados](#export--import-data).**

Existem duas maneiras de salvar seus dados antes de reinstalar o aplicativo OsmAnd:

- Use [OsmAnd Cloud](#osmand-cloud). Você pode fazer backup de seus dados usando recursos do OsmAnd, como [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), como uma versão gratuita, ou [OsmAnd Pro](../purchases/index.md), uma assinatura paga com mais recursos.
- [Exportar arquivo OSF](#export) com seus dados. Copie o arquivo `.osf` para uma pasta em seu dispositivo ou no OsmAnd Cloud. Após reinstalar o OsmAnd, [importe este arquivo `.osf`](#import) para o aplicativo OsmAnd.


## Artigos Relacionados {#related-articles}

- [Perfis (Configurações)](./profiles.md)
- [Gerenciar Trilhas](../personal/tracks/manage-tracks.md#import--export-track)
- [Histórico de Pesquisa](../search/search-history.md#export-and-share)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)

### Problemas Comuns e Soluções {#common-issues-and-solutions}

1. Como transferir Favoritos e Trilhas para um novo dispositivo. [(verificar)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. Tenho um arquivo GPX, como importá-lo para o OsmAnd? [(verificar)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Excluir dados do mapa após a atualização do aplicativo (se "Armazenamento multiusuário 1" estiver selecionado). [(verificar)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)

> *Última atualização: janeiro de 2025*