---
source-hash: ece3e6010ee14839c5fe53b38593cda3c765a31a9395566df04b16ce2b73c3b4
sidebar_position: 5
sidebar_label: Tracks
title: Tracks
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

O Planejador Web oferece uma maneira simples de trabalhar com seus dados pessoais diretamente no navegador. Após fazer login, você pode abrir suas trilhas, ajustá-las, criar novas ou fazer upload de arquivos do seu computador. 

Todas as alterações são sincronizadas automaticamente através do [OsmAnd Cloud](../personal/osmand-cloud.md), então qualquer coisa que você atualizar na web aparece em seus dispositivos, e qualquer coisa que você criar no telefone aparece aqui também. Isso facilita a movimentação entre plataformas e mantém seus dados consistentes onde quer que você use o OsmAnd.

## Como usar {#how-to-use}

É um recurso pago <ProFeature/>. Para usá-lo, faça login na sua conta OsmAnd Pro.

![Login de trilha](@site/static/img/web/track_login.png) ![Login de trilha](@site/static/img/web/track_login_2.png)

A seção Trilhas contém todas as ferramentas e ações relacionadas às trilhas. As seguintes opções estão disponíveis:

- Mostrar trilhas do [OsmAnd Cloud](#cloud-tracks).
- Adicionar trilhas no mapa (pasta **Visível no mapa**).
- Visualizar todas as informações das trilhas e gráfico
- Modificar trilhas e adicioná-las à Cloud.
- Baixar e excluir trilhas.
- Criar novas pastas ou excluí-las.
- Baixar pastas como coleção OSF ou OBF.

## Visível no Mapa {#visible-on-the-map}

A visualização **Visível no mapa** lista todas as trilhas que estão atualmente exibidas no mapa. Qualquer trilha pode ser adicionada a esta lista a partir do painel principal de Trilhas usando a opção **⋮ → Tornar trilha visível**.

As trilhas que estão visíveis no mapa são destacadas em azul, enquanto as trilhas atualmente ocultas aparecem em cinza. Um interruptor ao lado de cada trilha permite que você a mostre ou oculte rapidamente. O botão **Ocultar todas** desativa todas as trilhas visíveis de uma vez.

Abaixo da lista principal, a seção **Recentemente visível** exibe trilhas que foram mostradas no mapa anteriormente. Isso facilita reativar uma trilha sem procurá-la novamente em suas pastas ou no OsmAnd Cloud.

![Visível no mapa](@site/static/img/web/visible_new.png) ![Visível no mapa](@site/static/img/web/visible_new_2.png)

## Menu da pasta de trilhas {#track-folder-menu}

![Menu da pasta de trilhas](@site/static/img/web/collection_new.png)

Clique no botão de três pontos (⋮) para abrir o menu *Pasta de Trilhas*. A partir daqui, você pode:

 - Baixar como OSF.
 - Baixar como Coleção OBF. Exportar a pasta no Formato Binário OsmAnd, escolhendo um [arquivo OBF](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) ou um [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **Arquivo OBF**. Você pode baixar um mapa OBF offline e abri-lo com o OsmAnd no seu dispositivo. É adequado para exibir um grande número de trilhas no mapa.
      -  **Travel OBF**. Você também pode importar um mapa de trilhas como um livro de viagem, que permite selecionar trilhas individuais no mapa e usá-las como arquivos GPX normais. Um livro de viagem também suporta recursos como exibir trilhas como pontos, filtrar trilhas por tipo de atividade e filtrar waypoints.
 - Renomear. Abre um diálogo onde você pode inserir um novo nome para a pasta selecionada. A alteração é sincronizada com o OsmAnd Cloud e aparecerá em todos os dispositivos conectados.
 - Excluir. Abre um diálogo de confirmação. Excluir uma pasta remove-a permanentemente junto com todas as trilhas que contém. Essa ação também é sincronizada através do OsmAnd Cloud.

![Menu da pasta de trilhas](@site/static/img/web/collection_rename.png) ![Menu da pasta de trilhas](@site/static/img/web/collection_delete.png)

## Trilhas na Nuvem {#cloud-tracks}

As trilhas GPX que você tem no [OsmAnd Cloud](../personal/osmand-cloud.md) estarão disponíveis para exibição e edição após o login. Apenas para usuários **Pro** <ProFeature/> e para usuários [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) (que podem baixar seus dados mesmo após o vencimento da assinatura Pro).

Os seguintes recursos estão disponíveis após escolher uma trilha na nuvem:

![Edição de GPX na nuvem do OsmAnd Web](@site/static/img/web/cloud_track.png)

- Telas de informação:
  - *Informação* - exibindo dados da trilha.
  - *Elevação* - gráfico de elevação.
  - *Velocidade* - gráfico de velocidade.
  - *Inclinação* - gráfico de inclinação.
  - *Configurações* - lista de perfis de navegação para a ferramenta *Criar rota*.
  - *Curvas* - uma lista gerada de instruções aproximadas de curvas baseada na geometria da trilha.
  - *Tipo de estrada* - divide a trilha em segmentos por classificação de estrada.
  - *Superfície* - mostra os tipos de superfícies da trilha ao longo da rota.
  - *Suavidade* - exibe a suavidade do segmento baseada em tags OSM.

![Edição de GPX na nuvem do OsmAnd Web](@site/static/img/web/cloud_track_turns.png) ![Edição de GPX na nuvem do OsmAnd Web](@site/static/img/web/cloud_track_details.png)

- Botões de ação:
  - *Editar trilha* - adicionar trilha na nuvem ao local para edição (botão _Editar localidade_ no painel).
  - *Baixar GPX* - baixa a trilha para o PC.
  - *Recalcular* Elevação (Satélite) - exibe o gráfico de elevação da trilha selecionada.
  - *Excluir Trilha* - exclui a trilha.
  - *Fechar trilha* - fechar a trilha.

## Artigos Relacionados {#related-articles}

- [Gerenciar Trilhas](../personal/tracks/manage-tracks.md)
- [Analisador de Trilhas](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)