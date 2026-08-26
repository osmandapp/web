---
source-hash: fdc663d456ec4a461fac3f4ef3baf08d8c7af8e8006a87ec3621c334120d364a
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

Favoritos no Planejador Web permitem que você salve e gerencie lugares importantes diretamente no mapa. Eles podem ser usados para marcar locais aos quais você deseja acesso rápido, organizá-los em pastas e reutilizá-los para navegação ou planejamento de rotas. A interface web fornece ferramentas convenientes para visualizar, editar e trabalhar com favoritos enquanto explora o mapa, com todas as atualizações sincronizadas de forma perfeita em todo o seu [OsmAnd Cloud](../personal/osmand-cloud.md).


## Gerenciar Favoritos {#manage-favorites}

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_1_new.png)

Após registrar um [**OsmAnd Pro**](../personal/osmand-cloud.md#login) e para [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), seus Favoritos no Planejador Web são organizados em pastas. Cada pasta agrupa lugares salvos e fornece um conjunto de ações disponíveis no menu de Favoritos. 
As seguintes ações estão disponíveis:

- *Mostrar no mapa* - mostra os pontos de favoritos da pasta escolhida no mapa.
- *Fixar pasta* - fixa uma pasta no topo da lista de Favoritos para acesso rápido. Pastas fixadas são separadas das outras pastas. Para remover uma pasta da seção superior, selecione *Desfixar pasta*. A pasta Pessoal está fixada por padrão.
- *Renomear* - nome e descrição da pasta de favoritos.
- *Compartilhar* - abre opções de compartilhamento. Você pode escolher quem pode acessar esta pasta.
- *Baixar* - baixa a pasta de favoritos escolhida.
- *Excluir* - exclui a pasta de favoritos escolhida.

Ao selecionar uma pasta de favoritos, o mapa centraliza automaticamente e ajusta o nível de zoom para exibir todos os pontos de favoritos dessa pasta na área visível do mapa.

Você também pode usar o botão **Foco** para ocultar todos os outros favoritos e trilhas no mapa, facilitando a revisão da pasta selecionada. Desative o modo Foco para restaurar a visibilidade de outros objetos do mapa.

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

A visualização de Detalhes fornece informações associadas ao lugar selecionado e depende dos dados disponíveis para esse favorito específico. No mínimo, inclui a localização no mapa e suas coordenadas geográficas. Para lugares vinculados a objetos do OpenStreetMap ou fontes enriquecidas, metadados adicionais podem ser exibidos, como nomes, categorias, identificadores ou links de referência (por exemplo, Wikipedia ou links do Wikidata). 

![Web Favorites Details](@site/static/img/web/favorites_details.png)


## Ações dos Favoritos {#favorites-actions}

[Para adicionar](../personal/favorites.md#manage-favorites) um novo ponto de favorito, clique com o botão direito na tela. 

Para editar um favorito existente, clique no ponto de favorito diretamente no mapa ou selecione-o de uma pasta de favoritos. Isso abre o painel de Detalhes, onde a ação Editar está disponível. A edição também pode ser iniciada do menu de três pontos (⋮) ao lado do favorito na lista de Favoritos.

O painel de edição de favorito permite alterar as principais propriedades de um favorito, incluindo seu nome, endereço, descrição, pasta, ícone, cor e forma. A aparência selecionada é visualizada tanto no painel de edição quanto diretamente no mapa.

### Editar Favoritos {#edit-favorites}

O campo **Endereço** suporta detecção automática de endereço com base na localização selecionada no mapa. O campo pode aparecer em vários estados:

- Pesquisando... — exibido enquanto o endereço está sendo determinado automaticamente.
- Campo vazio — exibido após limpar o endereço. Neste estado, o botão de localização pode ser usado para detectar o endereço novamente automaticamente.
- Campo preenchido — exibe o endereço detectado automaticamente ou o texto inserido manualmente.

O campo de endereço também inclui ações rápidas para limpar ou restaurar o endereço detectado.

A seção **Descrição** permite adicionar notas ou informações adicionais ao favorito. Selecionar Adicionar notas abre o editor de descrição em um painel secundário. Se uma descrição já tiver sido adicionada, uma prévia curta é exibida no painel principal e é limitada a duas linhas de texto. O editor de descrição suporta formatação de texto rico e preserva automaticamente as alterações ao retornar ao painel anterior.

Os favoritos podem ser organizados em pastas para facilitar o gerenciamento e o acesso rápido. Selecionar o item **Pasta** abre um painel secundário onde as pastas disponíveis podem ser selecionadas. A pasta usada anteriormente é selecionada automaticamente por padrão. Cada pasta também exibe o número de pontos de favoritos armazenados nela.

Novas pastas podem ser criadas diretamente do painel de seleção de pastas. Selecionar o botão Adicionar pasta abre um diálogo onde você pode inserir o nome da pasta e escolher sua localização na lista de Favoritos.

O diálogo também inclui uma seção Avançado, onde as configurações de aparência padrão para a pasta podem ser configuradas. Essas configurações incluem a cor padrão, ícone e forma que serão aplicados automaticamente aos pontos de favoritos adicionados a esta pasta.

![Web Edit Folder](@site/static/img/web/edit_folder.png)

### Aparência {#appearance}

A seção **Aparência** permite personalizar como o favorito é exibido no mapa. As seguintes propriedades estão disponíveis: ícone, cor, forma e ícone. 

Selecionar **Ícone** abre um painel secundário com grupos de ícones categorizados.

- Os ícones são agrupados por categorias.
- Ícones usados recentemente são exibidos primeiro.
- O ícone atualmente selecionado é destacado.
- A visualização usa a forma e a cor selecionadas.

Selecionar **Cor** abre o painel da paleta de cores.

- A paleta contém cores predefinidas e definidas pelo usuário.
- Cores personalizadas podem ser adicionadas usando o seletor de cores.
- Cores podem ser editadas, duplicadas ou removidas através do menu de contexto.
- As cores recém-adicionadas são salvas na paleta do usuário e permanecem disponíveis posteriormente.

A opção **Forma** define o formato de fundo usado para o marcador de favorito.  As seguintes formas estão disponíveis: círculo, quadrado e octógono.

A visualização da aparência é atualizada imediatamente tanto no painel de edição quanto no mapa ao alterar o ícone, a cor ou a forma.

![Web Edit Appearance](@site/static/img/web/edit_icon.png)

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