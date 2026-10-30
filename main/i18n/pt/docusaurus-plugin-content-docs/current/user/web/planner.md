---
source-hash: fe4113db0ceca0de38082d9504ed29de109b51547823235ea2036e5b59e91998
sidebar_position: 9
sidebar_label:  Planejar Rota
title: Planejar Rota no Website
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

<!--
<InfoIncompleteArticle/>
-->


## Visão Geral {#overview}

O Planejador de Rotas Web do OsmAnd permite que você crie rotas de navegação, planeje trilhas e gerencie arquivos locais diretamente a partir do seu navegador. Esta ferramenta web é útil para criar rotas de viagem detalhadas que você pode sincronizar com o seu aplicativo ou compartilhar com outros.


<!--
## Navigation Route {#navigation-route}

To create a navigation route, follow these steps:

- **Right-click** on the map to add waypoints:

  - *Navigate from*. Set the starting point.
  - *Navigate to*. Set the destination.
  - *Navigate via*. Add intermediate points if needed.

- After setting the start and end points, the route will be displayed on the map.

- In the **Route** block:

  - Move the start and end points if needed.
  - Edit the waypoints and choose the desired route type (e.g., car, bicycle, walking).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Select the appropriate **Route Profile** for different navigation options.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Click on the orange circles along the route to view detailed navigation instructions.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- To share the route, copy the URL. Example: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Criar Nova Rota {#create-new-route}

Existem duas formas de iniciar uma nova rota no Planejar rota. A primeira opção é diretamente do mapa: clique com o botão direito em qualquer lugar do mapa e selecione **Criar nova rota**. A segunda opção é do painel esquerdo: clique no botão **Criar trilha**.

Uma vez criada a rota, adicione pontos diretamente no mapa. Cada clique coloca o próximo ponto, e o planejador constrói a rota entre os pontos.

![OsmAnd Web Criar Nova Rota](@site/static/img/web/create_new_route_1.png)

### Importar Trilha {#import-track}

Se você já tiver um arquivo de trilha, você pode importá-lo para o Planejar rota e continuar a trabalhar com ele no Planejador Web. Clique no botão **Importar trilha** e selecione um arquivo GPX do seu computador. Após o upload, a trilha aparece na sua lista local e abre no planejador, para que você possa revê-lo no mapa e prosseguir com a edição e gerenciamento nos painéis de trilha.

### Arquivos Locais {#local-files}

Todas as rotas e trilhas que criar ou importar no Planejar rota são adicionados à lista Local no painel esquerdo. Isso facilita manter múltiplos arquivos GPX em um só lugar e alternar entre eles durante o planejamento.

Cada item na lista tem um alternador que permite que você mostre ou oculte rapidamente a trilha no mapa. Selecione uma trilha da lista para o abrir no planejador e continuar a trabalhar com ele. 

![OsmAnd Web Criar Nova Rota](@site/static/img/web/local_files.png)


## Gerenciar Trilha {#manage-track}

Quando cria ou importa uma rota no Planejar rota, se abre um painel vertical de trilha. Este painel permite que você altere o perfil de roteamento e gerencie a rota.

Clique no controlo de perfil para abrir a caixa de diálogo **Alterar perfil**. Selecione o perfil necessário (por exemplo, Carro, Bicicleta ou Peão), depois escolha como aplicá-lo: *Próximos segmentos* aplica o perfil apenas às novas partes adicionadas a partir deste ponto em diante, enquanto *Todos os segmentos* recalcula toda a rota com o perfil selecionado.

Do painel de trilha, você também pode **Excluir** a trilha da sua lista local.

No [Painel de Visão Geral](#overview-panel), você pode **Salvar na Nuvem** para manter a rota para uso posterior e **Baixar** como arquivo GPX.

![OsmAnd Web Gerenciar Trilha](@site/static/img/web/manage_track_2_new.png) ![OsmAnd Web Gerenciar Trilha](@site/static/img/web/change_profile.png)


## Painéis de Detalhes de Trilha {#track-details-panels}

O menu de trilha local inclui três painéis: **Visão Geral**, **Trilha** e **Pontos**. Use-os para visualizar informações de trilha e gerenciar pontos de rota e pontos de passagem.

### Painel de Visão Geral {#overview-panel}

O Painel de Visão Geral resume a trilha selecionada e mostra dados chave de rota e elevação. Inclui uma visão geral rápida das estatísticas da rota, mais gráficos e análise adicional de trilha baseada em dados de mapa disponíveis.

A seção de resumo mostra:

- Pontos — o número de pontos de rota usados para construir a rota.
- Distância — o comprimento total da rota.
- Subida / descida — ascensão total e descida total ao longo da rota.
- Elevação (mín/média/máx) — estatísticas de elevação para a rota.
- Se os dados de elevação estiverem em falta ou precisarem de ser atualizados, use Elevação (Satélite) → recalcular para reconstruir a elevação usando dados de satélite (quando disponível).

Abaixo do resumo, o painel fornece gráficos:

- Elevação — um perfil de elevação da rota.
- Inclinação — um gráfico de inclinação mostrando mudanças de gradiente ao longo da trilha.
- Velocidade — um gráfico de velocidade ao longo da trilha.

Você você pode ativar ou desativar as seguintes opções:

- Mostrar pontos de trilha — exibe pontos de trilha no mapa.
- Mostrar pontos de passagem — exibe pontos de passagem no mapa.

Para detalhes adicionais de trilha, abra as seções de análise:

- Tipo de estrada — divide a trilha em segmentos por classificação de estrada.
- Superfície — mostra tipos de superfície ao longo da rota baseados em dados OSM.
- Suavidade — mostra a suavidade de segmentos baseada em tags OSM.

![OsmAnd Web Painel de Visão Geral](@site/static/img/web/overview_panel.png) 

### Painel de Trilha {#track-panel}

O Painel de Trilha mostra a lista de pontos de rota usados para construir a trilha. Use-o para rever e editar a estrutura da rota: arraste pontos para os reordenar, remova pontos usando o ícone de excluir, ou use Limpar pontos para remover todos os pontos e começar de novo.

![OsmAnd Web Painel de Trilha](@site/static/img/web/track_panel_new.png)

### Painel de Pontos {#points-panel}

O Painel de Pontos é usado para visualizar e gerenciar pontos de passagem para a trilha selecionada. Os pontos de passagem podem ser adicionados a partir do menu de contexto do mapa — clique com o botão direito no mapa e escolha a opção para **Adicionar ponto de passagem**, depois preencha os detalhes do ponto de passagem (como nome, ícone e cor) e salve-o.

A edição de pontos de passagem usa a mesma interface que a [edição de Favoritos](../web/web-favorites.md#edit-favorites). Você você pode modificar as propriedades dos pontos de passagem, como nome, endereço, descrição, ícone, cor e forma, usando o painel de edição unificado. A aparência selecionada é pré-visualizada tanto no painel de edição como diretamente no mapa.

Na lista de Pontos de Passagem, você pode controlar se os pontos de passagem são mostrados no mapa e remover pontos de passagem individuais quando necessário. Para remover todos os pontos de passagem da trilha de uma só vez, use *Limpar todos os pontos de passagem*.

![OsmAnd Web Painel de Pontos de Passagem](@site/static/img/web/points_panel_new.png)


## Artigos Relacionados {#related-articles}

- [Planejar uma Rota](../plan-route/create-route.md)
- [Guias de Viagem](../plan-route/travel-guides.md)
- [Navegação](../web/web-navigation.md)