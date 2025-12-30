---
source-hash: ef13b994168cf04dcf98784cf4ef75aea6eb57a3e4db536a0fa48e3617173008
sidebar_position: 6
sidebar_label: Favorites
title: Favorites
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

Favoritos no Planejador Web permitem que você salve e gerencie lugares importantes diretamente no mapa. Eles podem ser usados para marcar locais aos quais você deseja acesso rápido, organizá-los em pastas e reutilizá-los para navegação ou planejamento de rotas. A interface web fornece ferramentas convenientes para visualizar, editar e trabalhar com favoritos enquanto explora o mapa, com todas as atualizações sincronizadas perfeitamente em todo o seu [OsmAnd Cloud](../personal/osmand-cloud.md).


## Gerenciar Favoritos {#manage-favorites}

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_new.png)

Após registrar um [**OsmAnd Pro**](../personal/osmand-cloud.md#login) e para [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), seus Favoritos no Planejador Web são organizados em pastas. Cada pasta agrupa lugares salvos e fornece um conjunto de ações disponíveis no menu de Favoritos. 
As seguintes ações estão disponíveis:

- *Mostrar no mapa* - mostra os pontos de favoritos da pasta escolhida no mapa.
- *Renomear* - nome e descrição da pasta de favoritos.
- *Compartilhar* - abre opções de compartilhamento. Você pode escolher quem pode acessar esta pasta:
- *Baixar* - baixa a pasta de favoritos escolhida.
- *Excluir* - exclui a pasta de favoritos escolhida.

### Compartilhar {#share}

Selecionando **Compartilhar** abre a tela de compartilhamento, onde o acesso a uma pasta de Favoritos pode ser configurado. Um dos seguintes modos de acesso pode ser selecionado:
- *Privado*. Apenas você pode visualizar a pasta. Mudar para Privado revoga o acesso para todos os usuários aprovados anteriormente. Um diálogo de confirmação é exibido antes que a alteração seja aplicada.
- *Apenas solicitação*. Qualquer pessoa com o link pode solicitar acesso. As solicitações aparecem na lista Pendente, onde podem ser aprovadas, negadas ou bloqueadas.
- *Qualquer um*. Qualquer pessoa com o link pode visualizar a pasta imediatamente, sem aprovação.  
Dependendo do modo de acesso selecionado, o botão **Copiar link** fica disponível. O link pode ser compartilhado para permitir visualização ou para solicitar acesso.

A tela de compartilhamento inclui três listas de usuários:
- Aprovados — usuários que atualmente têm acesso à pasta.
- Pendente — usuários que solicitaram acesso e estão aguardando aprovação ou rejeição.
- Bloqueados — usuários que não têm permissão para acessar ou solicitar acesso.  
Cada entrada de usuário inclui um menu que permite alterar seu status ou remover o acesso.

Durante a configuração de acesso, os seguintes diálogos podem aparecer:
- *Alterar acesso*. Exibido ao mudar a pasta para Privado. O diálogo avisa que todo o acesso de usuário existente será revogado antes de confirmar a alteração.
- *Solicitações de acesso*. Exibido ao gerenciar usuários na lista Pendente, permitindo que as solicitações de acesso sejam aprovadas ou negadas.

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_share.png) ![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_share_2.png)


## Detalhes dos Favoritos {#favorites-details} 

Selecionar um favorito abre o painel **Detalhes**. Este painel aparece quando você clica em um favorito diretamente no mapa ou o seleciona de uma pasta de favoritos.

A visualização de Detalhes fornece informações associadas ao lugar selecionado e depende dos dados disponíveis para esse favorito específico. No mínimo, inclui a localização no mapa e suas coordenadas geográficas. Para lugares vinculados a objetos do OpenStreetMap ou fontes enriquecidas, metadados adicionais podem ser exibidos, como nomes, categorias, identificadores ou links de referência (por exemplo, [Wikipedia](../plugins/wikipedia.md) ou links do Wikidata). 

![Web Favorites Details](@site/static/img/web/favorites_details.png)


## Ações dos Favoritos {#favorites-actions}

### Adicionar / Editar Favorito {#add--edit-favorite}

[Para adicionar](../personal/favorites.md#manage-favorites) um novo ponto de favorito, clique com o botão direito na tela. 

Para editar um favorito existente, clique no ponto de favorito diretamente no mapa ou selecione-o de uma pasta de favoritos. Isso abre o painel de Detalhes, onde a ação Editar está disponível. A edição também pode ser iniciada do menu de três pontos (⋮) ao lado do favorito na lista de Favoritos.

A interface de edição permite modificar as principais propriedades do favorito, como seu nome, ícone, cor e descrição. O layout e os campos disponíveis são consistentes com a experiência de edição no [aplicativo móvel OsmAnd](../personal/favorites.md#create), fornecendo um fluxo de trabalho familiar em plataformas.

![OsmAnd Web Favorites add](@site/static/img/web/web_favorites_add.png)


### Outras Ações {#other-actions}

Além da edição, cada favorito fornece várias outras ações que podem ser acessadas do painel de Detalhes ou do menu de três pontos (⋮) na lista de Favoritos:
- *Excluir* - remove o favorito selecionado permanentemente. Esta ação está disponível tanto do painel de Detalhes quanto do menu de três pontos. A exclusão afeta o favorito em todos os dispositivos após a sincronização.
- *Compartilhar* - esta ação permite compartilhar um link direto para o lugar.
- *Direções de* - define o favorito selecionado como o ponto de partida para o planejamento de rotas. O painel de Rota abre automaticamente, permitindo que você escolha um destino e perfil de navegação.
- *Navegação* - define o favorito selecionado como o ponto de destino. 


## Artigos Relacionados {#related-articles}

- [Favoritos](../personal/favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Menu de Contexto do Mapa](../map/map-context-menu.md)
- [Wikipedia](../plugins/wikipedia.md)