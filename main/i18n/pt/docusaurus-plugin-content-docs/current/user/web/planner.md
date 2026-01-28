---
source-hash: efbd8cb409a1e8ef85e36e19d96eeb7a90fa212c810385f1ad6562e2e09d6d40
sidebar_position: 9
sidebar_label:  Planear Rota
title: Planear Rota no Website
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

O Planeador de Rotas Web do OsmAnd permite-lhe criar rotas de navegação, planear percursos e gerir ficheiros locais diretamente a partir do seu navegador. Esta ferramenta web é útil para criar rotas de viagem detalhadas que pode sincronizar com a sua aplicação ou partilhar com outros.


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

Existem duas formas de iniciar uma nova rota no Planear rota. A primeira opção é diretamente do mapa: clique com o botão direito em qualquer lugar do mapa e selecione **Criar nova rota**. A segunda opção é do painel esquerdo: clique no botão **Criar percurso**.

Uma vez criada a rota, adicione pontos diretamente no mapa. Cada clique coloca o próximo ponto, e o planeador constrói a rota entre os pontos.

![OsmAnd Web Criar Nova Rota](@site/static/img/web/create_new_route.png)

### Importar Percurso {#import-track}

Se já tiver um ficheiro de percurso, pode importá-lo para o Planear rota e continuar a trabalhar com ele no Planeador Web. Clique no botão **Importar percurso** e selecione um ficheiro GPX do seu computador. Após o upload, o percurso aparece na sua lista local e abre no planeador, para que possa revê-lo no mapa e prosseguir com a edição e gestão nos painéis de percurso.

### Ficheiros Locais {#local-files}

Todas as rotas e percursos que criar ou importar no Planear rota são adicionados à lista Local no painel esquerdo. Isso facilita manter múltiplos ficheiros GPX num só lugar e alternar entre eles durante o planeamento.

Cada item na lista tem um alternador que lhe permite mostrar ou ocultar rapidamente o percurso no mapa. Selecione um percurso da lista para o abrir no planeador e continuar a trabalhar com ele. 

![OsmAnd Web Criar Nova Rota](@site/static/img/web/local_files.png)


## Gerir Percurso {#manage-track}

Quando cria ou importa uma rota no Planear rota, abre-se um painel vertical de percurso. Use este painel para alterar o perfil de roteamento e gerir a rota. Clique no controlo de perfil para abrir a caixa de diálogo **Alterar perfil**, selecione o perfil de que precisa (por exemplo, Carro, Bicicleta ou Peão), e escolha como aplicá-lo: *Próximos segmentos* aplica o perfil apenas às novas partes adicionadas a partir deste ponto em diante, enquanto *Todos os segmentos* recalcula toda a rota com o perfil selecionado.

Do painel de percurso, também pode realizar ações comuns de ficheiro. Pode **Guardar na Cloud** para manter a rota para uso posterior, **Descarregar GPX** para a exportar como ficheiro, **Fechar percurso** para parar de o editar, ou **Eliminar percurso** para o remover da sua lista local. Estas ações também estão disponíveis a partir dos controlos correspondentes no [Painel de Informação](#info-panel).

![OsmAnd Web Gerir Percurso](@site/static/img/web/manage_track_new.png) ![OsmAnd Web Gerir Percurso](@site/static/img/web/change_profile.png)


## Painéis de Detalhes de Percurso {#track-details-panels}

O menu de percurso local inclui três painéis: **Informação**, **Percurso** e **Pontos de Passagem**. Use-os para visualizar informações de percurso e gerir pontos de rota e pontos de passagem.

### Painel de Informação {#info-panel}

O Painel de Informação resume o percurso selecionado e mostra dados chave de rota e elevação. Inclui uma visão geral rápida das estatísticas da rota, mais gráficos e análise adicional de percurso baseada em dados de mapa disponíveis.

A secção de resumo mostra:

- Pontos — o número de pontos de rota usados para construir a rota.
- Distância — o comprimento total da rota.
- Subida / descida — ascensão total e descida total ao longo da rota.
- Elevação (mín/média/máx) — estatísticas de elevação para a rota.
- Se os dados de elevação estiverem em falta ou precisarem de ser atualizados, use Elevação (Satélite) → recalcular para reconstruir a elevação usando dados de satélite (quando disponível).

Abaixo do resumo, o painel fornece gráficos:

- Elevação — um perfil de elevação da rota.
- Inclinação — um gráfico de inclinação mostrando mudanças de gradiente ao longo do percurso.

Para detalhes adicionais de percurso, abra as secções de análise:

- Superfície — mostra tipos de superfície ao longo da rota baseados em dados OSM.
- Suavidade — mostra a suavidade de segmentos baseada em tags OSM.

Ações comuns de percurso como guardar, descarregar, fechar e eliminar também estão disponíveis neste painel.

![OsmAnd Web Painel de Informação](@site/static/img/web/info_panel.png) ![OsmAnd Web Gerir Percurso](@site/static/img/web/info_panel_2.png)

### Painel de Percurso {#track-panel}

O Painel de Percurso mostra a lista de pontos de rota usados para construir o percurso. Use-o para rever e editar a estrutura da rota: arraste pontos para os reordenar, remova pontos usando o ícone de eliminar, ou use Limpar pontos para remover todos os pontos e começar de novo.

![OsmAnd Web Painel de Percurso](@site/static/img/web/track_panel.png)

### Painel de Pontos de Passagem {#waypoints-panel}

O Painel de Pontos de Passagem é usado para visualizar e gerir pontos de passagem para o percurso selecionado. Os pontos de passagem podem ser adicionados a partir do menu de contexto do mapa — clique com o botão direito no mapa e escolha a opção para **Adicionar ponto de passagem**, depois preencha os detalhes do ponto de passagem (como nome, ícone e cor) e guarde-o.

Na lista de Pontos de Passagem, pode controlar se os pontos de passagem são mostrados no mapa e remover pontos de passagem individuais quando necessário. Para remover todos os pontos de passagem do percurso de uma só vez, use *Limpar todos os pontos de passagem*.

![OsmAnd Web Painel de Pontos de Passagem](@site/static/img/web/waypoints_panel.png)


## Artigos Relacionados {#related-articles}

- [Planear uma Rota](../plan-route/create-route.md)
- [Guias de Viagem](../plan-route/travel-guides.md)
- [Navegação](../web/web-navigation.md)