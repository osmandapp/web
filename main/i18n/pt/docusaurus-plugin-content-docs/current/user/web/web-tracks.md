---
source-hash: 0c19d193401abb84484ff5570c24cad44445840c466f64041a7446ed6afebfa6
sidebar_position: 5
sidebar_label: Trilhas
title: Trilhas
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

O Web Planner oferece uma maneira simples de trabalhar com seus dados pessoais diretamente no navegador. Depois de fazer login, você pode abrir suas trilhas, ajustá-las, criar novas ou carregar arquivos do seu computador. 

Todas as alterações são sincronizadas automaticamente por meio do [OsmAnd Cloud](../personal/osmand-cloud.md), de modo que tudo o que você atualiza na web aparece nos seus dispositivos, e tudo o que você cria no celular também aparece aqui. Isso facilita a troca entre plataformas e mantém seus dados consistentes onde quer que você use o OsmAnd.


## Como usar {#how-to-use}

É um recurso pago <ProFeature/>. Para usá-lo, faça login na sua conta OsmAnd Pro.

![Login de trilhas](@site/static/img/web/track_login.png) ![Login de trilhas](@site/static/img/web/track_login_2.png)

A seção Trilhas contém todas as ferramentas e ações relacionadas a trilhas. Estão disponíveis as seguintes opções:

- Mostrar trilhas do [OsmAnd Cloud](#cloud-tracks).
- Adicionar trilhas ao mapa (pasta **Visível no mapa**).
- Visualizar informações e gráficos da trilha.
- Modificar trilhas e adicioná-las ao Cloud.
- Baixar e excluir trilhas.
- Criar novas pastas ou excluí-las.
- Baixar pastas como coleção OSF ou OBF.


## Importar Trilhas {#import-tracks}

Você pode importar trilhas GPX para o Web Planner usando o botão Importar ou arrastando e soltando arquivos GPX diretamente no mapa.

Para importar uma trilha arrastando e soltando:
- Abra a seção Trilhas.
- Arraste um ou mais arquivos GPX do seu computador.
- Solte os arquivos no mapa ou em uma pasta de trilhas específica.

Quando um arquivo é arrastado sobre o mapa, a área de soltura disponível é destacada. Se você soltar o arquivo diretamente no mapa, ele será importado para a pasta Importar. Se você soltá-lo em uma pasta existente, ele será importado para essa pasta. Sem uma assinatura ativa do [OsmAnd Pro](../purchases/index.md), ao soltar um arquivo é aberta uma caixa de diálogo explicando que a importação de trilhas requer o OsmAnd Pro.

O tamanho máximo do arquivo é de 20 MB para arquivos GPX e KML e de 2 MB para arquivos KMZ. Arquivos maiores não são importados e, em vez disso, aparece um aviso. Ao importar vários arquivos de uma vez, todos os arquivos rejeitados são listados em uma única mensagem. Trilhas maiores que 20 MB que já estão armazenadas no OsmAnd Cloud também não podem ser abertas na web, e uma notificação sugere abri-las no aplicativo OsmAnd.

Após a conclusão da importação, a trilha aparece na lista de trilhas, é sincronizada com o [OsmAnd Cloud](../personal/osmand-cloud.md) e fica disponível em todos os dispositivos conectados à mesma conta.

Se uma trilha não puder ser importada ou salva no OsmAnd Cloud, uma caixa de diálogo de erro mostra o nome do arquivo e, quando disponível, o motivo informado pelo servidor.

![Arrastar e soltar](@site/static/img/web/drag_and_drop.png)


## Visível no Mapa {#visible-on-the-map}

A visualização **Visível no mapa** lista todas as trilhas que estão sendo exibidas no mapa. Qualquer trilha pode ser adicionada a esta lista a partir do painel principal Trilhas, usando a opção **⋮ → Tornar trilha visível**.

As trilhas visíveis no mapa são destacadas em azul, enquanto as trilhas ocultas aparecem em cinza. Um interruptor ao lado de cada trilha permite mostrá-la ou ocultá-la rapidamente. O botão **Ocultar tudo** desativa todas as trilhas visíveis de uma só vez.

Abaixo da lista principal, a seção **Recentemente visível** exibe as trilhas que foram mostradas no mapa anteriormente. Isso facilita reativar uma trilha sem procurá-la novamente em suas pastas ou no OsmAnd Cloud.

![Visível no mapa](@site/static/img/web/visible_new.png) ![Visível no mapa](@site/static/img/web/visible_new_2.png)


## Menu da pasta de trilhas {#track-folder-menu}

![Menu da pasta de trilhas](@site/static/img/web/collection_new.png)

Clique no botão de três pontos (⋮) para abrir o menu *Pasta de Trilhas*. A partir daqui, você pode:

 - Baixar como OSF.
 - Baixar como coleção OBF. Exporte a pasta no OsmAnd Binary Format, escolhendo um [arquivo OBF](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) ou um [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **Arquivo OBF**. Você pode baixar um mapa OBF offline e abri-lo com o OsmAnd no seu dispositivo. É adequado para exibir um grande número de trilhas no mapa.
      -  **Travel OBF**. Você também pode importar um mapa de trilhas como um livro de viagem, o que permite selecionar trilhas individuais no mapa e usá-las como arquivos GPX normais. Um livro de viagem também oferece recursos como exibir trilhas como pontos, filtrar trilhas por tipo de atividade e filtrar pontos de passagem.
 - Renomear. Abre uma caixa de diálogo onde você pode inserir um novo nome para a pasta selecionada. A alteração é sincronizada com o OsmAnd Cloud e aparecerá em todos os dispositivos conectados.
 - Excluir. Abre uma caixa de diálogo de confirmação. Excluir uma pasta a remove permanentemente junto com todas as trilhas que ela contém. Essa ação também é sincronizada por meio do OsmAnd Cloud.

![Menu da pasta de trilhas](@site/static/img/web/collection_rename.png) ![Menu da pasta de trilhas](@site/static/img/web/collection_delete.png)

### Pastas Inteligentes {#smart-folders}

As **Pastas Inteligentes** criadas em dispositivos móveis podem ser sincronizadas e visualizadas na versão web por meio do OsmAnd Cloud. Para garantir que apareçam na web, a sincronização das [Configurações do OsmAnd](../personal/osmand-cloud.md#select-data-to-back-up) deve estar ativada nas configurações do Cloud.  
Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

Atualmente, as Pastas Inteligentes são armazenadas como parte das configurações globais, portanto são enviadas ao Cloud somente quando a sincronização de Configurações está ativa. Após criar ou editar uma Pasta Inteligente, recomenda-se executar uma sincronização manual para atualizar os dados.

Na web, as Pastas Inteligentes são exibidas na lista de trilhas com um ícone de estrela distinto, o que facilita distingui-las das pastas comuns. O nome da pasta é sincronizado primeiro, enquanto a lista de trilhas depende de como a pasta está configurada no dispositivo.

As trilhas são exibidas somente se a configuração da Pasta Inteligente for compatível com a web. Isso inclui tanto as [configurações de filtro](../personal/tracks/smart-folder.md#search-filter) quanto as [opções de agrupamento](../personal/tracks/smart-folder.md#managing-smart-folders). Se forem usados parâmetros não compatíveis (por exemplo, cidade mais próxima), a pasta pode aparecer sem trilhas. Para melhor compatibilidade, use parâmetros comuns, como atividade, data, distância ou duração.

A sincronização das Pastas Inteligentes pode variar de acordo com a plataforma e a configuração de sincronização. Para obter resultados mais consistentes, certifique-se de que a sincronização do Cloud esteja ativada e atualizada em todos os dispositivos.

O menu de três pontos (⋮) oferece ações adicionais para a Pasta Inteligente. Você pode *Baixar como OSF*, *Baixar como coleção OBF*, *Renomear* ou *Excluir* a pasta.

![Pastas Inteligentes](@site/static/img/web/smart_folder_new.png) ![Pastas Inteligentes](@site/static/img/web/smart_folder_menu_new.png)


## Trilhas do Cloud {#cloud-tracks}

As trilhas GPX que você tem no [OsmAnd Cloud](../personal/osmand-cloud.md) estarão disponíveis para exibição e edição após o login. Somente **usuários Pro** <ProFeature/> podem acessá-las. Os usuários do [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) podem baixar seus dados do Cloud mesmo depois que a assinatura Pro expirar.

Ao selecionar uma trilha, o mapa é centralizado automaticamente e o nível de zoom é ajustado para exibir a trilha inteira dentro da área visível do mapa.

Você também pode usar o botão **Foco** para ocultar todos os outros favoritos e trilhas no mapa, facilitando a análise da trilha selecionada. Desative o modo Foco para restaurar a visibilidade dos outros objetos do mapa.

Os seguintes recursos estão disponíveis após escolher uma trilha do Cloud:
- *Informações* - exibe os dados da trilha.
- *Elevação* - gráfico de elevação.
- *Velocidade* - gráfico de velocidade.
- *Inclinação* - gráfico de inclinação.
- *Recalcular elevação (satélite)* - recalcula os valores de elevação da trilha selecionada e os mostra no gráfico de elevação.
- *Tipo de via* - divide a trilha em segmentos pela classificação das vias.
- *Superfície* - mostra os tipos de superfície da trilha ao longo da rota.
- *Suavidade* - exibe a suavidade dos segmentos com base em tags do OSM.

![Edição de GPX do Cloud no OsmAnd Web](@site/static/img/web/cloud_track_new.png) ![Edição de GPX do Cloud no OsmAnd Web](@site/static/img/web/cloud_track_details_new.png)


## Artigos Relacionados {#related-articles}

- [Gerenciar Trilhas](../personal/tracks/manage-tracks.md)
- [Analisador de Trilhas](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)