---
source-hash: 7a908eb0d049f610343ddbeb81ac84c7f787f549729ffd82f824c9c2f9bd25d6
sidebar_position: 3
title: Histórico de Pesquisa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Visão Geral {#overview}

O *Histórico de Pesquisa* é um registro de todas as pesquisas e localizações que você inseriu ou pesquisou no aplicativo durante o período de uso. Esta ferramenta permite que você encontre e acesse facilmente localizações pesquisadas anteriormente, o que facilita a navegação e economiza seu tempo.

O OsmAnd oferece várias maneiras de visualizar seu histórico de pesquisa.

- O [botão Pesquisar](../widgets/map-buttons.md#search) é sempre exibido no mapa, e tocá-lo o levará para a [tela geral](#how-to-use) da ferramenta.
- Vá para o *Menu* principal do Android *→ Pesquisar → Aba Histórico*.
- Ao se preparar para iniciar uma rota, toque em *Navegação → Definir destino → Campo de pesquisa*.
- O bloco de informações no menu de navegação da [preparação da rota](../navigation/setup/route-navigation.md#navigation-menu) exibe uma lista de pontos de destino recentes, que também fazem parte do histórico de pesquisa.
- O histórico de pesquisa está disponível no [Android Auto](../navigation/auto-car.md#search) e no [CarPlay](../navigation/car-play.md#search).


## Como Usar {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Histórico de pesquisa](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Histórico de pesquisa](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

O histórico de pesquisa serve para fornecer informações relevantes sobre suas ações anteriores.

- *Pesquisar novamente*. Você pode usar o histórico de pesquisa para pesquisar novamente lugares ou endereços pesquisados anteriormente sem precisar reinserir a consulta.

- *Acesso rápido a lugares visitados com frequência*. Se você visita certos lugares com frequência, como sua casa, trabalho ou lugares favoritos, o Histórico de Pesquisa salva esses lugares, proporcionando acesso rápido a eles.

- *Rastrear viagens anteriores*. O histórico de pesquisa pode ser útil para rastrear viagens e rotas anteriores. Você pode rastrear rotas que você já fez antes, ou [planejar sua próxima rota](../plan-route/create-route.md) com base nas anteriores.

- *Pesquisar lugares em um determinado período de tempo*. Para o aplicativo Android, você precisa usar um toque longo, depois encontrar o mês em que fez a viagem, sair do menu de exclusão e definir o nome no campo de pesquisa. Para o aplicativo iOS, a lista de histórico de pesquisa já está dividida em blocos por mês.

- *Excluir entradas*. O Histórico de Pesquisa oferece a capacidade de [excluir](#delete) entradas anteriores, o que pode ser útil para confidencialidade ou para manter seu histórico organizado.


## Itens do Histórico {#history-items}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Histórico de pesquisa](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Histórico de pesquisa](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Cada campo na lista do Histórico de Pesquisa contém algumas das **informações** disponíveis para o aplicativo.

- Um ícone que identifica o tipo ou categoria do objeto encontrado.
- O nome do objeto, localização, endereço ou consulta de tipo. Para trilhas, são exibidas informações sobre a distância, número de pontos de passagem e tempo.
- Distância da sua localização atual até o ponto e direção pela bússola.


### Ordem dos Itens {#order-of-items}

- **Itens Recentes**. As solicitações ou localizações mais recentes são exibidas no topo da lista. Isso permite acesso rápido aos itens usados recentemente.
- **Ordem cronológica**. Os itens na lista do Histórico de Pesquisa são organizados em ordem cronológica, começando com as entradas mais antigas e terminando com as mais recentes. Itens antigos gradualmente descem na lista à medida que novas entradas são adicionadas, a menos que itens antigos no histórico de pesquisa tenham sido usados, caso em que serão movidos para o topo da lista.
- No iOS, a lista é classificada por mês.

### Tipo de Objetos {#type-of-objects}

Os seguintes **tipos de objetos** entram na lista do Histórico de Pesquisa:

- **Localizações**. Isso pode ser um endereço, nome de empresa, número de rota, coordenadas, marcadores, pontos de interesse, notas OSM ou lugares que você tocou no mapa.
- **Trilhas e Pontos de Passagem**. A lista inclui trilhas que você criou, gravou ou baixou que você usou em rotas anteriores, e pontos de passagem se você navegou para eles separadamente.


## Ações {#actions}

Na ferramenta Histórico de Pesquisa, você pode [excluir](#delete) consultas desnecessárias, todas de uma vez ou por itens individuais. Você pode usar o Histórico [exportar](#export-and-share). O aplicativo Android oferece uma ação adicional de [compartilhar](#share-android) itens de pesquisa como um arquivo [GPX](../../technical/osmand-file-formats/osmand-gpx.md).

Você pode **desativar ou ativar** a exibição de todo o histórico de pesquisa. Neste caso, as consultas não são excluídas do dispositivo. No Android, o interruptor está localizado na tela principal da ferramenta na [aba Histórico](#overview). No iOS, está localizado em *Menu → Configurações → Configurações do OsmAnd → Histórico → Histórico de Pesquisa*.


### Excluir {#delete}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Histórico de pesquisa](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Histórico de pesquisa](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Após usar o OsmAnd por um longo tempo, a lista *Histórico de Pesquisa* pode ficar muito longa, então a exclusão de consultas de pesquisa ajuda a limpar a lista. Você pode excluir consultas que não são mais relevantes ou que você não pretende mais usar no futuro, o que facilita a pesquisa na lista, especialmente quando você precisa encontrar consultas de pesquisa específicas rapidamente.

Você precisa **tocar e segurar qualquer um dos itens de consulta na lista** para abrir a tela Excluir.

- *Selecionar ou desmarcar itens aleatórios* - toque no item desejado na lista.
- *Selecione o período disponível para exclusão*, como dia, últimos 7 dias ou mês - marque a caixa com o subtítulo na lista.
- *Você pode excluir todo o histórico* de uma vez tocando no botão *Selecionar Tudo* na parte inferior da tela.
- *Menu → Configurações → Configurações do OsmAnd → Histórico → Ações*. Esta seção contém o botão **Excluir todo o histórico**.


### Exportar e Compartilhar {#export-and-share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Histórico de Configurações Gerais Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Histórico de Configurações Gerais iOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Existem várias opções disponíveis para exportar o histórico de pesquisa. Todos os arquivos são exportados no formato `.osf` (Arquivo de Configurações do OsmAnd).

1. *Menu → Configurações → Configurações do OsmAnd → Histórico → Histórico de pesquisa*.
    A exportação está disponível usando o menu de configurações do OsmAnd. Para Android, seguir este caminho leva você para a tela de exclusão, onde [Compartilhar histórico](#share-android) está disponível. No caso do iOS, você pode selecionar itens individuais ou todo o histórico na tela, e após tocar no botão *Exportar*, ir para o menu *Backup Local*.

2. *Menu → Configurações → Configurações do OsmAnd → Histórico → Ações → Fazer backup como arquivo* (Android).
    *Menu → Configurações → Configurações do OsmAnd → Histórico → Ações → Exportar* (iOS).
    Tocar nesses itens leva você para o menu *Importar/Exportar* (Android) ou *Backup Local* (iOS). Expanda a lista *Meus Lugares* e encontre *Histórico de Pesquisa*. Todas as consultas são exportadas em um único arquivo de uma vez.

3. *Menu → Configurações → Importar/Exportar → Exportar para arquivo* (Android).
    *Menu → Configurações → Backup Local → Fazer backup como arquivo* (iOS).
    Você pode ler mais detalhes no artigo [Importar/Exportar](../personal/import-export.md#export).

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    Você pode usar a Nuvem para fazer backup do seu histórico de pesquisa. No menu *Alterações Locais* ou *Configurações → Fazer backup de dados → Meus Lugares → Histórico de Pesquisa*.

![Histórico de Configurações](@site/static/img/search/history_search_share_andr.png)

A exportação de itens ou de todo o histórico de pesquisa pode ser útil nos seguintes casos:

- *Backup*. Você pode fazer backup do seu histórico de pesquisa para salvar as informações antes de excluí-las e restaurá-las se necessário.
- *Transferência para outro dispositivo*. Ao trocar de dispositivo, você pode usar a função de exportação ou a Nuvem para transferir seu histórico de pesquisa para um novo dispositivo sem precisar pesquisar e inserir dados novamente.
- *Analisar e processar dados*. Você pode exportar seu histórico de pesquisa para análise de dados ou usá-lo em outros aplicativos.
- [Compartilhar](#share-android) histórico de pesquisa com outros usuários do OsmAnd.


#### Compartilhar (Android) {#share-android}

![Histórico de Configurações](@site/static/img/search/history_search_share_andr.png)

As etapas para compartilhar itens do histórico de pesquisa são semelhantes à [exportação](#export-and-share), com a diferença de que você exporta todo o histórico de uma vez como um arquivo [osf](../../technical/osmand-file-formats/osmand-osf.md), enquanto você pode compartilhar arquivos individuais selecionados no formato gpx.

Na tela de [exclusão](#delete), selecione os itens desejados na lista Histórico de Pesquisa. No canto superior direito da tela, há um ícone indicando compartilhamento. Selecione um aplicativo ou ação disponível na lista para compartilhar.


## Artigos Relacionados {#related-articles}

- [Pesquisar Tudo](./search-all.md)
- [Pesquisar Endereço](./search-address.md)
- [Pesquisar POI](./search-poi.md)
- [Pesquisar Coordenadas](./search-coordinates.md)


> *Última atualização: Julho de 2024*