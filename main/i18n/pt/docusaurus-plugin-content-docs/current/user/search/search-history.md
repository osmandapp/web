---
source-hash: e750c3ad7de0205a9500f893c56be0ee9d096f570987bbd67c2ad004df8b1816
sidebar_position: 3
title: Explorar na Pesquisa
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## Visão Geral {#overview}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

A aba **Explorar** na ferramenta de Pesquisa ajuda você a descobrir locais populares ao seu redor e a voltar rapidamente a lugares que você pesquisou ou para os quais navegou antes. Ela contém duas seções: [Locais Populares Próximos](#popular-places-nearby) e [Histórico](#history-items).

O *Histórico* é um registro de todas as pesquisas e destinos de navegação que você inseriu ou pesquisou no aplicativo durante o período de uso. Esta ferramenta permite que você encontre e acesse facilmente localizações pesquisadas anteriormente, o que facilita a navegação e economiza seu tempo.

O OsmAnd oferece várias maneiras de visualizar seu histórico.

- O [botão Pesquisar](../widgets/map-buttons.md#search) é sempre exibido no mapa, e tocá-lo o levará à [tela geral](#how-to-use) da ferramenta.
- Vá para o *Menu* principal *→ Pesquisar → aba Explorar*.
- Ao se preparar para iniciar uma rota, toque em *Navegação → Definir destino → Campo de pesquisa*.
- O bloco de informações no menu de navegação de [preparação de rota](../navigation/setup/route-navigation.md#navigation-menu) exibe uma lista de pontos de destino recentes, que também fazem parte do histórico de pesquisa.
- O histórico de pesquisa está disponível no [Android Auto](../navigation/auto-car.md#search).

</TabItem>

<TabItem value="ios" label="iOS">

O *Histórico de Pesquisa* é um registro de todas as pesquisas e localizações que você inseriu ou pesquisou no aplicativo durante o período de uso. Esta ferramenta permite que você encontre e acesse facilmente localizações pesquisadas anteriormente, o que facilita a navegação e economiza seu tempo.

O OsmAnd oferece várias maneiras de visualizar seu histórico de pesquisa.  

- O [botão Pesquisar](../widgets/map-buttons.md#search) é sempre exibido no mapa. Toque nele para abrir a [tela geral](#how-to-use) da ferramenta e, em seguida, selecione a aba *Histórico*.
- Ao se preparar para iniciar uma rota, toque em *Navegação → Definir destino → Campo de pesquisa*.
- O bloco de informações no menu de navegação de [preparação de rota](../navigation/setup/route-navigation.md#navigation-menu) exibe uma lista de pontos de destino recentes, que também fazem parte do histórico de pesquisa.
- O histórico de pesquisa está disponível no [CarPlay](../navigation/car-play.md#search).

</TabItem>

</Tabs>


## Como Usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisa Explorar](@site/static/img/search/explore_search_android.webp)

A aba **Explorar** abre quando você abre a ferramenta de Pesquisa. A aba Explorar serve para fornecer informações relevantes sobre os lugares ao seu redor e suas ações anteriores.

- *Descobrir lugares próximos*. A seção [Locais Populares Próximos](#popular-places-nearby) mostra marcos bem conhecidos e atrações ao seu redor, para que você possa encontrar lugares interessantes sem digitar uma consulta.
- *Repesquisar*. Você pode usar o histórico de pesquisa para pesquisar novamente lugares ou endereços pesquisados anteriormente sem ter que reinserir a consulta.
- *Acesso rápido a lugares frequentemente visitados*. Se você visita certos lugares com frequência, como sua casa, trabalho ou lugares favoritos, o Histórico de Pesquisa salva esses lugares, fornecendo acesso rápido a eles.
- *Rastrear viagens anteriores*. O histórico de pesquisa pode ser útil para rastrear viagens e rotas anteriores. Você pode rastrear rotas que você já fez antes, ou [planejar sua próxima rota](../plan-route/create-route.md) com base nas anteriores.
- *Pesquisar lugares durante um certo período de tempo*. Na tela Histórico, os itens classificados por *Recente* são agrupados por período: *Hoje*, *Ontem*, *Semana passada* e depois por mês. Para encontrar um item específico, toque no título *Histórico* no topo da tela e insira o nome dele.
- *Excluir entradas*. O Histórico de Pesquisa oferece a capacidade de [excluir](#delete) entradas anteriores, o que pode ser útil para confidencialidade ou para manter seu histórico organizado.

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisa de histórico](@site/static/img/search/history_search_ios.png)

O histórico de pesquisa serve para fornecer informações relevantes sobre suas ações anteriores.

- *Repesquisar*. Você pode usar o histórico de pesquisa para pesquisar novamente lugares ou endereços pesquisados anteriormente sem ter que reinserir a consulta.
- *Acesso rápido a lugares frequentemente visitados*. Se você visita certos lugares com frequência, como sua casa, trabalho ou lugares favoritos, o Histórico de Pesquisa salva esses lugares, fornecendo acesso rápido a eles.  
- *Rastrear viagens anteriores*. O histórico de pesquisa pode ser útil para rastrear viagens e rotas anteriores. Você pode rastrear rotas que você já fez antes, ou [planejar sua próxima rota](../plan-route/create-route.md) com base nas anteriores.  
- *Pesquisar lugares durante um certo período de tempo*. A lista de histórico de pesquisa já está dividida em blocos por mês.
- *Excluir entradas*. O Histórico de Pesquisa oferece a capacidade de [excluir](#delete) entradas anteriores, o que pode ser útil para confidencialidade ou para manter seu histórico organizado.

</TabItem>

</Tabs>


## Locais Populares Próximos {#popular-places-nearby}

<InfoAndroidOnly/>

![Locais Populares Próximos](@site/static/img/search/popular_places_nearby.webp)

A seção **Locais populares próximos** exibe uma lista rolável de marcos bem conhecidos e atrações perto da sua localização. Cada item pode incluir o nome do local, sua categoria, distância e direção, e uma imagem de visualização se disponível. Toque em *Mostrar tudo* para abrir a lista completa ou *Mostrar no mapa* para exibir esses locais no mapa.

Para mais detalhes, consulte o artigo [Locais Populares](../map/popular_places.md#explore-in-search).


## Itens do Histórico {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Seção de histórico](@site/static/img/search/history_section_list.webp)

A seção **Histórico** da aba Explorar exibe até 25 itens mais recentes. Toque no título da seção para recolhê-la ou expandi-la. Toque em *Ver tudo* para abrir a tela completa do *Histórico*.

Se *Histórico de pesquisa* e *Histórico de navegação* estiverem desativados, a seção exibe o cartão *O histórico está desativado*. Toque em *Abrir configurações do Histórico* para ativá-los.

Cada campo na lista do Histórico contém algumas das **informações** disponíveis para o aplicativo.

- Um ícone que identifica o tipo ou categoria do objeto encontrado.
- O nome do objeto, localização, endereço ou consulta de tipo. Para trilhas, são exibidas informações sobre a distância, número de pontos de passagem e tempo.

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisa de histórico](@site/static/img/search/history_search_ios.png)

Cada campo na lista do Histórico de Pesquisa contém algumas das **informações** disponíveis para o aplicativo.

- Um ícone que identifica o tipo ou categoria do objeto encontrado.
- O nome do objeto, localização, endereço ou consulta de tipo. Para trilhas, são exibidas informações sobre a distância, número de pontos de passagem e tempo.
- Distância da sua localização atual até o ponto e direção pela bússola.

</TabItem>

</Tabs>


### Classificar e Filtrar {#sort-and-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Seção de histórico](@site/static/img/search/history_section_android.webp) ![Seção de histórico](@site/static/img/search/history_section_2_android.webp)

Na tela completa do *Histórico*, você pode classificar e filtrar seus itens de histórico usando as seguintes opções:

1. **Classificar por**:
    - *Recente* — exibe primeiro os itens adicionados mais recentemente. Quando esta opção é selecionada, os itens são agrupados por tempo, como Hoje, Ontem, Semana passada e períodos anteriores.
    - *Mais próximo* — classifica os itens pela distância de sua localização atual.
    - *Mais próximo do centro do mapa* — classifica os itens pela distância do centro atual do mapa. Quando qualquer uma das opções de classificação baseadas em distância é selecionada, os grupos baseados em tempo não são exibidos.

2. **Tipo** — filtra os itens de histórico por:
    - *Todos* — exibe todos os itens de histórico disponíveis.
    - *Pesquisa* — exibe itens do seu histórico de pesquisa.
    - *Navegação* — exibe itens do seu histórico de navegação.

Se *Histórico de pesquisa* ou *Histórico de navegação* estiver desativado nas configurações do Histórico, o filtro *Tipo* não está disponível.

3. **Filtros de categoria** — filtram os itens de histórico por categoria. Os filtros de categoria disponíveis dependem dos tipos de itens disponíveis no seu Histórico. Por exemplo, você pode ver categorias como POI, Trilha, Localização, Favorito ou Endereço. Você pode selecionar várias categorias ao mesmo tempo.

4. **Configurações** — toque no ícone de engrenagem no canto superior direito para abrir as configurações do Histórico, onde você pode ativar ou desativar o *Histórico de pesquisa*, o *Histórico de navegação* e o *Histórico de marcadores de mapa*, fazer backup do histórico como um arquivo ou limpar todo o histórico.

</TabItem>

<TabItem value="ios" label="iOS">

- **Itens Recentes**. As solicitações ou localizações mais recentes são exibidas no topo da lista. Isso permite acesso rápido aos itens usados recentemente.
- **Ordem cronológica**. Os itens na lista do Histórico de Pesquisa são organizados em ordem cronológica, começando com as entradas mais antigas e terminando com as mais recentes. Itens antigos gradualmente descem na lista à medida que novas entradas são adicionadas, a menos que itens antigos no histórico de pesquisa tenham sido usados, caso em que serão movidos para o topo da lista.
- A lista é classificada por mês.

</TabItem>

</Tabs>

### Tipo de Objetos {#type-of-objects}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Os seguintes **tipos de objetos** entram na lista do Histórico de Pesquisa:

- **Localizações**. Isso pode ser um endereço, nome de empresa, número de rota, coordenadas, marcadores, pontos de interesse, notas OSM ou lugares em que você tocou no mapa.
- **Trilhas e Pontos de Passagem**. A lista inclui trilhas que você criou, gravou ou baixou que você usou em rotas anteriores, e pontos de passagem se você navegou para eles separadamente.
- **Favoritos e Fotos**. Pontos favoritos e notas de foto que você abriu.
- **Destinos**. Pontos para os quais você navegou.

</TabItem>

<TabItem value="ios" label="iOS">

Os seguintes **tipos de objetos** entram na lista do Histórico de Pesquisa:

- **Localizações**. Isso pode ser um endereço, nome de empresa, número de rota, coordenadas, marcadores, pontos de interesse, notas OSM ou lugares em que você tocou no mapa.
- **Trilhas e Pontos de Passagem**. A lista inclui trilhas que você criou, gravou ou baixou que você usou em rotas anteriores, e pontos de passagem se você navegou para eles separadamente.

</TabItem>

</Tabs>


## Ações {#actions}

Na ferramenta Histórico de Pesquisa, você pode [excluir](#delete) consultas desnecessárias, todas de uma vez ou por itens individuais. Você pode usar a [exportação](#export-and-share) do Histórico. O aplicativo Android oferece uma ação adicional de [compartilhamento](#share-android) de itens de pesquisa como um arquivo [GPX](../../technical/osmand-file-formats/osmand-gpx.md).

Você pode **desativar ou ativar** a exibição de todo o histórico de pesquisa. Neste caso, as consultas não são excluídas do dispositivo. No Android, o interruptor está localizado na parte superior da tela de [Exclusão](#delete) e nas configurações do Histórico, que você pode abrir com o ícone de engrenagem na tela de [Histórico](#sort-and-filter). No iOS, ele está localizado em *Menu → Configurações → Configurações do OsmAnd → Histórico → Histórico de Pesquisa*.


### Excluir {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisa de histórico](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisa de histórico](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Após usar o OsmAnd por um longo tempo, a lista do *Histórico de Pesquisa* pode ficar muito longa, então a exclusão de consultas de pesquisa ajuda a limpar a lista. Você pode excluir consultas que não são mais relevantes ou que você não pretende mais usar no futuro, o que facilita a pesquisa na lista, especialmente quando você precisa encontrar consultas de pesquisa específicas rapidamente.

Você precisa **tocar e segurar qualquer um dos itens de consulta na lista** para abrir a tela de Exclusão.

- *Selecionar ou desmarcar itens aleatórios* - toque no item desejado na lista.
- *Selecionar o período disponível para exclusão*, como dia, últimos 7 dias ou mês - marque a caixa com o subtítulo na lista.
- *Você pode excluir todo o histórico* de uma vez tocando no botão *Selecionar Tudo* na parte inferior da tela.
- *Menu → Configurações → Configurações do OsmAnd → Histórico → Ações*. Esta seção contém o botão **Excluir todo o histórico**.


### Exportar e Compartilhar {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Histórico de Configurações Gerais Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Histórico de Configurações Gerais iOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Existem várias opções disponíveis para exportar o histórico de pesquisa. Todos os arquivos são exportados no formato `.osf` (Arquivo de configurações do OsmAnd).

1. *Menu → Configurações → Configurações do OsmAnd → Histórico → Histórico de pesquisa*.
    A exportação está disponível usando o menu de configurações do OsmAnd. Para Android, seguir este caminho leva você à tela de exclusão, onde o [Compartilhar histórico](#share-android) está disponível. No caso do iOS, você pode selecionar itens individuais ou todo o histórico na tela, e após tocar no botão *Exportar*, ir para o menu *Backup Local*.

2. *Menu → Configurações → Configurações do OsmAnd → Histórico → Ações → Fazer backup como arquivo* (Android).
    *Menu → Configurações → Configurações do OsmAnd → Histórico → Ações → Exportar* (iOS).
    Tocar nesses itens leva você ao menu *Importar/Exportar* (Android) ou *Backup Local* (iOS). Expanda a lista *Meus Lugares* e encontre *Histórico de Pesquisa*. Todas as consultas são exportadas em um único arquivo de uma vez.

3. *Menu → Configurações → Importar/Exportar → Exportar para arquivo* (Android).
    *Menu → Configurações → Backup Local → Fazer backup como arquivo* (iOS).
    Você pode ler mais detalhes no artigo [Importar/Exportar](../personal/import-export.md#export).

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    Você pode usar a Nuvem para fazer backup do seu histórico de pesquisa. No menu *Alterações Locais* ou *Configurações → Fazer backup de dados → Meus Lugares → Histórico de Pesquisa*.

![Histórico de Configurações](@site/static/img/search/history_search_share_andr.png)

A exportação de itens ou de todo o histórico de pesquisa pode ser útil nos seguintes casos:

- *Backup*. Você pode fazer backup do seu histórico de pesquisa para salvar as informações antes de excluí-las e restaurá-las, se necessário.
- *Transferência para outro dispositivo*. Ao trocar de dispositivo, você pode usar a função de exportação ou a Nuvem para transferir seu histórico de pesquisa para um novo dispositivo sem ter que pesquisar e inserir dados novamente.
- *Analisar e processar dados*. Você pode exportar seu histórico de pesquisa para análise de dados ou usá-lo em outros aplicativos.
- [Compartilhar](#share-android) histórico de pesquisa com outros usuários do OsmAnd.


### Compartilhar (Android) {#share-android}

![Histórico de Configurações](@site/static/img/search/history_search_share_andr.png)

As etapas para compartilhar itens do histórico de pesquisa são semelhantes à [exportação](#export-and-share), com a diferença de que você exporta todo o histórico de uma vez como um arquivo [osf](../../technical/osmand-file-formats/osmand-osf.md), enquanto você pode compartilhar arquivos individuais selecionados no formato gpx.

Na tela de [exclusão](#delete), selecione os itens desejados na lista do Histórico de Pesquisa. No canto superior direito da tela, há um ícone indicando compartilhamento. Selecione um aplicativo ou ação disponível na lista para compartilhar.


## Artigos Relacionados {#related-articles}

- [Pesquisar Tudo](./search-all.md)
- [Pesquisar Endereço](./search-address.md)
- [Pesquisar POI](./search-poi.md)
- [Pesquisar Coordenadas](./search-coordinates.md)