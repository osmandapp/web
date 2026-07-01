---
source-hash: 2c2da04b9fb150c2b952067bc055c902a59f045bf4f357803361cc55a3be1856
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

![Track login](@site/static/img/web/track_login.png) ![Track login](@site/static/img/web/track_login_2.png)

A seção Trilhas contém todas as ferramentas e ações relacionadas às trilhas. As seguintes opções estão disponíveis:

- Mostrar trilhas do [OsmAnd Cloud](#cloud-tracks).
- Adicionar trilhas no mapa (pasta **Visible on map**).
- Visualizar todas as informações das trilhas e gráfico
- Modificar trilhas e adicioná-las à Cloud.
- Baixar e excluir trilhas.
- Criar novas pastas ou excluí-las.
- Baixar pastas como coleção OSF ou OBF.


## Visível no Mapa {#visible-on-the-map}

A visualização **Visible on map** lista todas as trilhas que estão atualmente exibidas no mapa. Qualquer trilha podem ser adicionada a esta lista a partir do painel principal de Trilhas usando a opção **⋮ → Make track visible**.

As trilhas que estão visíveis no mapa são destacadas em azul, enquanto as trilhas atualmente ocultas aparecem em cinza. Um interruptor ao lado de cada trilha permite que você a mostre ou oculte rapidamente. O botão **Hide all** desativa todas as trilhas visíveis de uma vez.

Abaixo da lista principal, a seção **Recently visible** exibe trilhas que foram mostradas no mapa anteriormente. Isso facilita reativar uma trilha sem procurá-la novamente em suas pastas ou no OsmAnd Cloud.

![Visible on the map](@site/static/img/web/visible_new.png) ![Visible on the map](@site/static/img/web/visible_new_2.png)


## Menu da pasta de trilhas {#track-folder-menu}

![Track folder menu](@site/static/img/web/collection_new.png)

Clique no botão de três pontos (⋮) para abrir o menu *Track Folder*. A partir daqui, você pode:

 - Baixar como OSF.
 - Baixar como Coleção OBF. Exportar a pasta no Formato Binário OsmAnd, escolhendo um [arquivo OBF](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) ou um [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **OBF file**. Você pode baixar um mapa OBF offline e abri-lo com o OsmAnd no seu dispositivo. É adequado para exibir um grande número de trilhas no mapa.
      -  **Travel OBF**. Você também pode importar um mapa de trilhas como um livro de viagem, que permite selecionar trilhas individuais no mapa e usá-las como arquivos GPX normais. Um livro de viagem também suporta recursos como exibir trilhas como pontos, filtrar trilhas por tipo de atividade e filtrar waypoints.
 - Renomear. Abre um diálogo onde você pode inserir um novo nome para a pasta selecionada. A alteração é sincronizada com o OsmAnd Cloud e aparecerá em todos os dispositivos conectados.
 - Excluir. Abre um diálogo de confirmação. Excluir uma pasta remove-a permanentemente junto com todas as trilhas que contém. Essa ação também é sincronizada através do OsmAnd Cloud.

![Track folder menu](@site/static/img/web/collection_rename.png) ![Track folder menu](@site/static/img/web/collection_delete.png)

### Pastas Inteligentes {#smart-folders}

**Pastas Inteligentes** criadas em dispositivos móveis podem ser sincronizadas e visualizadas na versão web via OsmAnd Cloud. Para garantir que apareçam na web, a sincronização de [OsmAnd Settings](../personal/osmand-cloud.md#select-data-to-back-up) deve estar ativada nas configurações da Cloud.  
Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

As Pastas Inteligentes são atualmente armazenadas como parte das configurações globais, portanto são enviadas para a Cloud apenas quando a sincronização de Configurações está ativa. Após criar ou editar uma Pasta Inteligente, recomenda-se executar uma sincronização manual para atualizar os dados.

Na web, as Pastas Inteligentes são exibidas na lista de trilhas com um ícone de estrela distinto, facilitando a distinção em relação às pastas comuns. O nome da pasta é sincronizado primeiro, enquanto a lista de trilhas depende de como a pasta está configurada no dispositivo.

As trilhas são exibidas apenas se a configuração da Pasta Inteligente for suportada na web. Isso inclui tanto as [configurações de filtro](../personal/tracks/smart-folder.md#search-filter) quanto as [opções de agrupamento](../personal/tracks/smart-folder.md#managing-smart-folders). Se forem usados parâmetros não suportados (por exemplo, cidade mais próxima), a pasta pode aparecer sem trilhas. Para melhor compatibilidade, use parâmetros comuns como atividade, data, distância ou duração.

A sincronização de Pastas Inteligentes pode variar dependendo da plataforma e da configuração de sincronização. Para resultados mais consistentes, certifique-se de que a sincronização da Cloud esteja ativada e atualizada em todos os dispositivos.

No menu de três pontos (⋮), você pode baixar a Pasta Inteligente como uma coleção OBF, renomeá-la ou excluí-la.

![Smart Folders](@site/static/img/web/smart_folder_new.png) ![Smart Folders](@site/static/img/web/smart_folder_menu_new.png)


## Trilhas na Nuvem {#cloud-tracks}

As trilhas GPX que você tem no [OsmAnd Cloud](../personal/osmand-cloud.md) estarão disponíveis para exibição e edição após o login. Apenas para usuários **Pro** <ProFeature/> e para usuários [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) (que podem baixar seus dados mesmo após o vencimento da assinatura Pro).

Ao selecionar uma trilha, o mapa centraliza automaticamente e ajusta o nível de zoom para exibir toda a trilha na área visível do mapa.

Você também pode usar o botão **Focus** para ocultar todos os outros favoritos e trilhas no mapa, facilitando a revisão da trilha selecionada. Desative o modo Focus para restaurar a visibilidade de outros objetos do mapa.

Os seguintes recursos estão disponíveis após escolher uma trilha na nuvem:
- *Information* - exibindo dados da trilha.
- *Elevation* - gráfico de elevação.
- *Speed* - gráfico de velocidade.
- *Slope* - gráfico de inclinação.
- *Recalculate Elevation (Satellite)* - recalcula os valores de elevação para a trilha selecionada e os mostra no gráfico de elevação.
- *Road type* - divide a trilha em segmentos por classificação de estrada.
- *Surface* - mostra os tipos de superfícies da trilha ao longo da rota.
- *Smoothness* - exibe a suavidade do segmento baseada em tags OSM.

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_new.png) ![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_details_new.png)


## Artigos Relacionados {#related-articles}

- [Gerenciar Trilhas](../personal/tracks/manage-tracks.md)
- [Tracks Analyzer](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)