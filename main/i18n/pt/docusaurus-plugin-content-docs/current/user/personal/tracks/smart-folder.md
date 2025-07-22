---
source-hash: f590f02934d3bbad431f346fc5f01207a37246d4320a4a5025973bb5ff373b63
sidebar_position: 3
title: Pasta Inteligente (Filtro)
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

O recurso **Pasta Inteligente** oferece ferramentas poderosas para organizar e gerenciar suas trilhas. Uma das principais funcionalidades é a capacidade de filtrar arquivos na *guia Trilhas* do menu *Meus Lugares* com base em critérios como duração, comprimento ou velocidade.

Esse recurso permite que você encontre rapidamente trilhas específicas que correspondam aos seus requisitos. Os resultados filtrados podem ser salvos como uma **Pasta Inteligente**, oferecendo acesso conveniente a coleções de trilhas atualizadas dinamicamente.


## Filtro de Busca {#search-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> guia*

![Trilhas dos meus lugares](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> guia*

![Trilhas dos meus lugares](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Como aplicar um filtro:***

- Toque no ícone *Pesquisar*, depois toque em *Filtrar* na linha [*Ordenar por*](./manage-tracks.md#sort-by).

- **Escolha as configurações de filtro necessárias** para refinar sua pesquisa de trilhas.

- Toque em **Mostrar** no canto inferior direito para ver os resultados filtrados. O número de trilhas correspondentes aparece entre parênteses.

- **Para limpar** todos os filtros ativos, toque em **Redefinir tudo**.

- **Para salvar** o conjunto de filtros atual como uma nova **Pasta Inteligente**, toque no ícone de salvar no canto superior direito da tela.


### Filtros Disponíveis {#available-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trilhas dos meus lugares](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trilhas dos meus lugares](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Nome** — Pesquise trilhas por título. Digite um nome completo ou parcial para exibir as trilhas correspondentes.
- **Pasta** — Selecione uma ou mais pastas para filtrar trilhas por seu local de armazenamento.
- **Duração** — Filtre trilhas pela duração registrada, definindo um intervalo em horas e minutos.
- **Tempo em movimento** — Especifique o intervalo de tempo gasto em movimento durante a gravação.
- **Comprimento** — Defina um intervalo específico em quilômetros ou milhas para encontrar trilhas de um comprimento específico.
- **Velocidade média** — Filtre trilhas por [velocidade média](../../widgets/info-widgets.md#average-speed).
- **Grupo de dados do sensor.**
    Aplique filtros com base em dados de sensores externos, incluindo:
    - Velocidade do sensor, média.
    - Velocidade do sensor, máxima.
    - Frequência cardíaca, média.
    - Frequência cardíaca, máxima.
    - Cadência da bicicleta, média.
    - Cadência da bicicleta, máxima.
    - Potência da bicicleta, média.
    - Potência da bicicleta, máxima.
    - Temperatura, média.
    - Temperatura, máxima.
- **Velocidade Máxima** — Selecione trilhas com intervalos de velocidade máxima específicos.
- **Subida** e **Descida** — Filtre trilhas com base em mudanças de elevação positivas ou negativas.
- **Altitude média** e **Altitude máxima** — Encontre trilhas com dados de altitude média ou máxima específicos.
- **Data de criação** — Filtre trilhas criadas dentro de um determinado intervalo de datas.
- **Cidades mais próximas** — Exiba trilhas que passam perto de cidades ou localidades selecionadas.
- **Tipo de atividade** — Filtre trilhas com base no tipo de [atividades](../../map/tracks/track-context-menu.md#track-information-activity) registradas no arquivo GPX (por exemplo, ciclismo, caminhada).
- **País** — Filtre trilhas pelo país ou região onde foram gravadas.
- **Cor** e **Largura** — Selecione trilhas pela cor ou largura da linha atribuída.
- **Outros** — Filtros adicionais para características especiais:
    - *Visível no Mapa*. Mostra apenas as trilhas exibidas no mapa.
    - *Com Pontos de Referência*. Exibe trilhas contendo pontos de referência específicos.


## Pasta Inteligente {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Função de classificação de trilhas dos meus lugares Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trilhas dos meus lugares](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Uma **Pasta Inteligente** é uma coleção dinâmica de trilhas atualizada automaticamente com base em critérios de filtro específicos. Ela oferece ferramentas avançadas para organizar, pesquisar e gerenciar trilhas de forma eficiente.

***Benefícios das Pastas Inteligentes:***

1. **Organização automatizada.**
    Inclui automaticamente trilhas que correspondem a regras predefinidas, como data de criação ou intervalo de duração.
2. **Filtragem e pesquisa.**
    Permite pesquisas rápidas dentro das trilhas usando filtros avançados e palavras-chave.
3. **Atualização dinâmica.**
    Atualiza automaticamente o conteúdo para exibir as trilhas mais recentes que correspondem aos critérios.
4. **Personalizar regras.**
    Crie coleções de trilhas personalizadas definindo regras de filtro personalizadas.


### Como Criar uma Pasta Inteligente {#how-to-create-smart-folder}

Para criar uma **Pasta Inteligente**, siga estes passos:

1. Toque no ícone do ***menu de três pontos*** na guia *Trilhas* do menu *Meus Lugares*.

2. Selecione **Adicionar pasta inteligente** no menu suspenso.

3. Configure as definições:
   - **Nomeie a pasta**. Insira um nome para identificar a pasta.
   - Especifique os **parâmetros de filtro de trilha**. Aplique os filtros necessários usando as opções de [Filtro](#available-filters) disponíveis.

4. **Salve** as configurações.
    - Toque em **Mostrar** para visualizar as trilhas.
    - Selecione o botão **Salvar** para finalizar a *Pasta Inteligente*.

A **Pasta Inteligente** recém-criada atualizará automaticamente seu conteúdo com as trilhas que correspondem aos critérios selecionados.


### Gerenciando Pastas Inteligentes {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Meus lugares Gerenciando Pastas Inteligentes Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![Meus lugares Gerenciando Pastas Inteligentes Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Meus lugares Gerenciando Pastas Inteligentes iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![Meus lugares Gerenciando Pastas Inteligentes iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

A **Pasta inteligente** é exibida com um ícone exclusivo na lista de pastas na guia Trilhas. Para gerenciar a pasta, toque no *menu de três pontos* ao lado dela (*Android*) e *toque longo* (*iOS*) ou abra a pasta e use o ícone no canto superior direito.

***Ações Disponíveis:***

- **Detalhes** — Visualize a lista completa de trilhas contidas na pasta.

- **Mostrar todas as trilhas no mapa** (*somente Android*) — Exiba todas as trilhas da pasta no mapa.
    *NOTA: Carregar muitas trilhas pode afetar o desempenho.*

- **Editar nome** (*Android*) / **Renomear** (*iOS*) — Altere o nome da pasta para facilitar a identificação.

- **Atualizar** — Atualize manualmente o conteúdo da pasta para garantir que ela inclua as trilhas mais recentes.

- **Alterar aparência padrão** (*Android*) — Altera a aparência de exibição de todas as trilhas na pasta.

- **Editar filtro** — Modifique as configurações de filtro de trilha para a Pasta Inteligente atual. Consulte [Filtro de Busca](#search-filter) para obter detalhes.

- **Exportar** — Exporte todas as trilhas na Pasta Inteligente através do recurso [Importar/Exportar](../../personal/import-export.md). Você será redirecionado para *Menu → Configurações → guia Ações*.

- **Excluir pasta** — Remova a Pasta Inteligente sem excluir suas trilhas.
    *AVISO: Esta ação é irreversível e exibirá uma mensagem de confirmação.*

- **Mover** (*iOS*) — Permite mover a pasta para outra pasta existente ou criar uma nova.

- **Selecionar** — Use o [Modo de Seleção](./manage-tracks.md#selection-mode) para ações específicas de trilha dentro da pasta.


## Artigos Relacionados {#related-articles}

- [Mostrar trilha no Mapa](../../map/tracks/index.md)
- [Analisar no Mapa](../../map/tracks/index.md#analyze-track-on-map)
- [Menu de contexto da trilha](../../map/tracks/track-context-menu.md)
- [Navegação por trilha](../../navigation/setup/gpx-navigation.md)
- [Gravação de viagem](../../plugins/trip-recording.md)

> *Última atualização: Março de 2025*