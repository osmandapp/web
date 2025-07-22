---
source-hash: 6d1b3b96d03eeb0a709cb35252dd6e33692ccafc93d1375f5cfba33926b39f5a
sidebar_position: 3
title: Configurações Globais
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';




## Visão Geral {#overview}

As **Configurações Globais** são [configurações](../personal/profiles.md) gerais para todos os perfis no aplicativo OsmAnd. Estas são as configurações básicas para o sistema OsmAnd, e quaisquer alterações feitas afetarão todo o aplicativo.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Perfis Configurações Gerais Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Perfis Configurações Gerais Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Perfis Configurações Gerais iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Geral {#general}

Esta seção contém as configurações básicas do OsmAnd, como selecionar um [perfil](#default-profile) ao carregar o aplicativo, selecionar o [mecanismo de renderização](#map-rendering-engine) e a [pasta](#data-storage-folder) onde os dados serão salvos.  


### Perfil Padrão {#default-profile}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Configurações Gerais Perfil Padrão Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações Gerais Perfil Padrão Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

O OsmAnd usa o perfil padrão, *Navegar no mapa*, como o primeiro perfil para novos usuários, e se este perfil foi selecionado por você, ele será usado cada vez que o aplicativo for reiniciado. Você pode selecionar qualquer perfil da lista padrão, incluindo *Último usado* e *Navegar no mapa*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Permite selecionar o perfil que foi usado por último.
- **<Translate android="true" ids="settings_preset"/>**. Você seleciona o perfil a ser usado ao iniciar o OsmAnd. Ele pode ser alterado nas [configurações](../personal/profiles.md) do aplicativo.  


### Perfil CarPlay {#carplay-profile}

:::caution SOMENTE iOS
Este recurso está disponível para a versão iOS do aplicativo OsmAnd.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![Configurações Gerais Perfil Padrão Android](@site/static/img/personal/profiles/CarPlay_ios.png)  

O [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) é usado quando conectado ao software [CarPlay](https://support.apple.com/en-gb/HT205634) do seu veículo e ajuda você a aproveitar ao máximo a versão otimizada do aplicativo OsmAnd usando os sistemas de áudio e vídeo para exibir dados em seu telefone.


### Pasta de Armazenamento de Dados {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Perfis Configurações de Armazenamento Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. A **Memória do dispositivo** mostra quanto espaço livre resta em seu dispositivo. Toque em um campo para acessar o menu [*Mapas e Recursos*](../personal/maps-resources.md#maps--resources), onde você pode visualizar e gerenciar informações detalhadas sobre seus dados do OsmAnd.

2. Em **<Translate android="true" ids="change_data_storage_folder"/>**, você pode selecionar uma pasta para salvar os dados do OsmAnd em seu dispositivo.  

    - *Memória interna do aplicativo*. Apenas o aplicativo OsmAnd tem acesso aos seus dados e nenhum dos aplicativos externos.
    - *Memória compartilhada*. Não mais disponível.
    - *Armazenamento externo 1*. Apenas 1 aplicativo OsmAnd tem acesso e aplicativos de administração e USB.
    - *Armazenamento multiusuário*. Apenas 1 aplicativo OsmAnd tem acesso, mas é compartilhado entre vários usuários Android.
    - *Especificado manualmente*. Depende do caminho.

:::note Android 12+ (alterar pasta de armazenamento)
Novas diretrizes de acesso ao armazenamento foram implementadas nas versões 11-12 do Android. Consulte a seção [**Solução de problemas**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) para obter detalhes.
:::

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Dispositivo iOS → Ajustes → Geral → Armazenamento do iPhone → OsmAnd Maps*  

![Configurações Gerais Armazenamento iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

Os arquivos do OsmAnd são visíveis no aplicativo [*Arquivos*](https://apps.apple.com/us/app/files/id1232058109). Você pode acessar todos os arquivos do OsmAnd: [trilhas](../personal/tracks/manage-tracks.md), [favoritos](../personal/favorites.md), [mapas](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Para fazer isso, siga o seguinte caminho:  

Vá para: *Arquivos → No Meu Telefone → OsmAnd Maps*

<!-- ![Aplicativo Arquivos iOS](@site/static/img/personal/storage/files_app_ios.png) ![Aplicativo Arquivos iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![Configurações Gerais Armazenamento iOS](@site/static/img/personal/profiles/files-1.png) ![Configurações Gerais Armazenamento iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Mecanismo de Renderização de Mapa {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (somente Android)*

![Configurações Gerais Mecanismo de Renderização Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- Na versão **Android** do aplicativo, você pode alternar entre a renderização de mapa Versão 1, originalmente implementada no aplicativo OsmAnd, e a Versão 2, que usa a interface de programação OpenGL (Open Graphics Library) para renderizar objetos gráficos bidimensionais e tridimensionais.

- A versão **iOS** usa apenas OpenGL para renderização de mapa.


| Recursos | Versão 1 | Versão 2 (OpenGL) |
|:---|:--- |:--- |
| Multiplataforma | Não usada na versão iOS. | Serve para ambas as versões. |
| Dependente de GPU / CPU | Recomendado para dispositivos de baixo desempenho ou desatualizados. | Poderoso mecanismo de renderização. <br /> Disponível apenas para [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) e versões posteriores, e em modo de teste para [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| Modo 3D | É possível visualizar o mapa em 2D, e você pode alterar o ângulo de visão para obter uma [vista 3D](../widgets/map-buttons.md#3d-mode). | Você pode visualizar o mapa em 2D e [3D](../widgets/map-buttons.md#3d-mode). |
| Exibição do mapa | O mapa inteiro é renderizado como um conjunto de blocos, e marcadores, linhas e texto já estão dentro desses blocos. | Primeiro, todo o pacote de blocos é renderizado, e então os símbolos disponíveis são aplicados ao mapa, [camada por camada](../../technical/algorithms/map-rendering-layers.md). |
| Sobreposição / subjacência de símbolos transparentes | Suporta todas as configurações. | Não suporta uma camada raster sobre texto vetorial. |
| [Terreno 3D](../map/raster-maps.md#3d-relief) | Não suportado. | Este recurso visualiza o terreno no mapa adicionando informações de elevação a um mapa 2D normal, o que cria um efeito 3D e de profundidade. |
| [Trilhas 3D](../map/tracks/appearance.md) | Não suportado. | Este recurso permite exibir trilhas por altitude acima do nível do mar. |
| [Mapa online](../plugins/online-map.md) | Não suporta a exibição de linhas de contorno se a fonte do mapa for qualquer mapa de blocos online. | Quando a fonte do mapa é um mapa online, mapas 3D também são usados, e a exibição de linhas de contorno no mapa é suportada. |
| [Plugin de Clima](../plugins/weather.md) | Você não pode usar este plugin. | Conveniente para usar com o plugin. |  

A imagem para a visualização 3D do mapa é carregada bloco por bloco, depois todos os símbolos. A velocidade de renderização do mapa depende do número de objetos gráficos 2D e 3D nele, e diretamente do desempenho do seu hardware. Portanto, a Versão 2 (OpenGL) não pode ser usada em dispositivos de baixo desempenho.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="renderização"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="renderização"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="renderização"/></td>
    </tr>
</table>


## Privacidade e Segurança {#privacy-and-security}

O OsmAnd permite que você escolha se deseja *[compartilhar sua atividade no aplicativo](#analytics)* e [identificadores](#identifiers) (*somente Android*) no aplicativo, a capacidade de editar seu *[histórico](#history)* e usar um *[proxy](#proxy)* (*somente Android*) de sua escolha.  

:::note
Mais informações podem ser encontradas na [*Política de Privacidade e Segurança do OsmAnd*](../../legal/privacy-policy.md)
:::

### Análise {#analytics}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![Configurações Gerais Análise Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Configurações Gerais Enviar dados anônimos iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

A configuração **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) ou **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) permite que você escolha se deseja fornecer dados anônimos sobre *Mapas Baixados* e *Telas Visitadas* (*Android*).  

:::note
Dados sobre sua localização ou os lugares que você visualiza no mapa não são coletados.
:::  

### Identificadores {#identifiers}

<InfoAndroidOnly />

*Menu → Configurações → Configurações do OsmAnd → Privacidade e segurança → Identificadores*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

Um **UUID** (*Identificador Único de Usuário*) é gerado para cada instalação do aplicativo OsmAnd e enviado aos servidores durante o carregamento do mapa.

- Um UUID aleatório é usado para baixar mapas offline dos servidores OsmAnd para controlar o uso racional dos recursos do servidor, prever o uso de tráfego e fornecer relatórios mensais gerais sobre downloads de mapas.
- O UUID muda a cada 3 meses.  
- A partir da versão 4.3 do OsmAnd, você pode desativar a coleta de dados do usuário ao usar o aplicativo OsmAnd. Então o UUID não será enviado com nenhuma solicitação de download.  
- Você pode ler mais informações nos [Termos de Uso (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Histórico {#history}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Configurações Gerais Histórico Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Configurações Gerais Histórico Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Configurações Gerais Histórico iOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Configurações Gerais Histórico iOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

O aplicativo registra o histórico de dados inseridos anteriormente (histórico) nas seguintes categorias: [Pesquisa](../search/search-history.md), [Navegação](../navigation/setup/route-navigation.md#history-of-previous-routes), [Marcadores de mapa](../personal/markers.md#history). Usando o interruptor na guia apropriada, você pode *Ativar / Desativar* o registro para certas categorias de entradas. Você também pode [gerenciar](#history) (visualizar, excluir e compartilhar) dados registrados anteriormente.  

- ***Backup como arquivo*** (*Android*) ou ***Exportar*** (*iOS*) é usado para fazer [um arquivo de backup](../personal/import-export.md#export) do seu histórico.
- ***Limpar todo o histórico*** (*Android*) ou ***Excluir todo o histórico*** (*iOS*) é usado para excluir todas as entradas do histórico registradas até o momento da exclusão.

<br/>

**Compartilhar e excluir histórico.**

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Configurações Gerais Histórico Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configurações Gerais Histórico iOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Configurações Gerais Histórico iOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Você pode excluir um ou mais itens da lista de histórico ou compartilhá-los como um arquivo (para acessar essas funções *no iOS*, toque no botão ***Editar***).  
- Para excluir ou exportar vários registros simultaneamente, selecione as caixas de seleção ao lado dos registros necessários e toque nos botões **Exportar** ou **Excluir**.  


### Proxy {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![Configurações Gerais Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

A configuração **<Translate android="true" ids="proxy_pref_title"/>** permite configurar um [proxy HTTP](https://en.wikipedia.org/wiki/Proxy_server) para todas as solicitações de rede. Você pode definir o *Host do Proxy* e a *Porta do Proxy*.  


## Outros {#other}

Nesta seção das configurações do OsmAnd, você pode configurar as notificações que recebe, o serviço de localização e como suas configurações de aplicativo são salvas.

### Diálogos e notificações {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Configurações Gerais Notificações Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações Gerais Diálogos iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

A configuração **<Translate android="true" ids="dialogs_and_notifications_title"/>** permite ativar/desativar pop-ups, diálogos e notificações.  

- *Mensagem de inicialização* inclui promoções, questionários, eventos e muito mais.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) suprime a exibição de descontos de aplicativos e mensagens de eventos locais especiais.
- [*Diálogo de download de mapa*](../start-with/download-maps.md#download) informa que mapas específicos podem ser baixados.


### Fonte de Localização {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*somente Android*)

![Backup automático](@site/static/img/personal/profiles/location_source_andr.png)

O OsmAnd oferece uma escolha de serviços para determinar sua localização. É recomendável ler mais informações sobre [Permissão de localização](../start-with/first-steps.md#permission-to-access-the-location) e [Solução de problemas](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) para esta seção.

***Android***:

- Você pode escolher quais serviços do *Google Play* ou *Android API* o OsmAnd usará para determinar sua localização. Isso pode ser útil para dispositivos sem *Google Play Services* ou em caso de localização ou dados de altitude imprecisos ao gravar trilhas.
- O OsmAnd recebe dados dos recursos *Google Fused Location Providers* e *Android GPS and Network Providers*. Você pode alternar **<Translate android="true" id="location_source" />** em: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- O sistema iOS usa a *API do iOS* para determinar a localização.  
- Todas as configurações de localização do OsmAnd podem ser encontradas nas configurações do dispositivo iOS: *Ajustes → OsmAnd Maps → Localização*  
- Privacidade dos serviços de localização: *Ajustes → Privacidade → Serviços de Localização*


### Backup Automático {#auto-backup}

<InfoAndroidOnly />

![Configurações Gerais Notificações Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android ou OsmAnd Cloud podem salvar seus dados e configurações do aplicativo.

- Por padrão, suas *configurações do OsmAnd* e os marcadores de mapa [*Favoritos*](../personal/favorites.md#automatic-favorites-backup) são automaticamente copiados pelo sistema Android. Isso permite que você os restaure em novos dispositivos ou após reinstalar o aplicativo.

- Observe que o tamanho do backup é restrito a *25MB*.

- Para encontrar os arquivos de backup, use um aplicativo gerenciador de arquivos de terceiros.  
    *NOTA: Você pode encontrar os arquivos de backup usando o gerenciador de arquivos do Android: Android → data → net.osmand → files → backup, mas esteja ciente de que nas versões recentes do Android, o acesso aos diretórios do sistema é limitado.*  

**Se você estiver usando o [*OsmAnd Cloud*](../personal/osmand-cloud.md), é recomendável desativar esta opção de backup padrão para evitar qualquer confusão durante a reinstalação.**


## Legal {#legal}

O OsmAnd pode [avisá-lo sobre radares de velocidade](../navigation/guidance/navigation-settings.md#screen-alerts), mas apenas se as leis do seu país permitirem.


### Desinstalar Radares de Velocidade {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Configurações Gerais Câmeras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![Configurações Gerais Câmeras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Configurações Gerais Câmeras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![Configurações Gerais Câmeras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Esta configuração permite ativar ou desativar POIs com radares de velocidade, você precisa reiniciar o aplicativo OsmAnd para que as alterações sejam aplicadas.
  
Em alguns países ou regiões, o uso de aplicativos de alerta de radar de velocidade é ilegal. Você deve fazer uma escolha dependendo das leis do seu país. Selecione **Manter ativo**, e você receberá alertas e notificações de radares de velocidade. Selecione **Desinstalar** e todos os dados relacionados a radares de velocidade, como avisos, notificações e POIs, serão excluídos até que você reinstale completamente o OsmAnd.  

Leia sobre alertas para radares de velocidade em sua rota no artigo Widgets de navegação na seção *[Widget de alerta](../widgets/nav-widgets.md#alert-widget)*.


## Artigos Relacionados {#related-articles}

- [Perfis (Configurações)](./profiles.md)
- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)

### Solução de Problemas {#troubleshooting}

- **Android 12+ (alterar pasta de armazenamento)**. Novas diretrizes de acesso ao armazenamento foram implementadas nas versões 11-12 do Android. Essas alterações afetam particularmente o armazenamento de mapas em cartões SD, resultando em um desempenho de acesso a arquivos significativamente mais lento e limitações de acesso mais rigorosas às pastas do cartão SD no Android 11 e 12. Para saber como resolver esse problema, consulte a seção [**Solução de problemas**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Fonte de localização para problemas de altitude**. O Google Play mudou sua política e, para cumpri-la, o OsmAnd, a partir da versão 3.9, deve usar o Google Play Services para obter correções de localização enquanto é executado em segundo plano. Leia mais informações na seção [Solução de problemas](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).

> *Última atualização: Novembro de 2024*