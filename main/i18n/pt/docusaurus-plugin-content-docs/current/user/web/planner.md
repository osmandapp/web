---
source-hash: 4861815642f39190c1d87fb62206d4b05c6eea3b5d2af97e4dcef2e6834f466c
sidebar_position: 5
sidebar_label: Planear Rota
title: Planear Rota no Site
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


<InfoIncompleteArticle/>


## Visão Geral {#overview}

O Planeador de Rotas Web do OsmAnd permite criar rotas de navegação, planear trilhos e gerir ficheiros locais diretamente do seu navegador. Esta ferramenta web é útil para criar rotas de viagem detalhadas que pode sincronizar com a sua aplicação ou partilhar com outros.


## Rota de Navegação {#navigation-route}

Para criar uma rota de navegação, siga estes passos:

- **Clique com o botão direito** no mapa para adicionar pontos de passagem:

  - *Navegar de*. Defina o ponto de partida.
  - *Navegar para*. Defina o destino.
  - *Navegar via*. Adicione pontos intermédios, se necessário.

- Depois de definir os pontos de início e fim, a rota será exibida no mapa.

- No bloco **Rota**:

  - Mova os pontos de início e fim, se necessário.
  - Edite os pontos de passagem e escolha o tipo de rota desejado (por exemplo, carro, bicicleta, a pé).

  ![OsmAnd Web Criar Rota](@site/static/img/web/navigation.png)

- Selecione o **Perfil de Rota** apropriado para diferentes opções de navegação.

  ![OsmAnd Web Criar Rota](@site/static/img/web/profile_type.png)

- Clique nos círculos laranja ao longo da rota para ver instruções de navegação detalhadas.

  ![OsmAnd Web Criar Rota](@site/static/img/web/nav_instr.png)

- Para partilhar a rota, copie o URL. Exemplo: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Criar Trilho e Ficheiros Locais {#create-track-and-local-files}

A ferramenta [**Planear rota**](../plan-route/create-route.md) do OsmAnd Web permite criar e editar trilhos de forma semelhante à aplicação móvel. Veja como pode criar e gerir trilhos:


***Criar uma nova rota:***

- *Clique com o botão direito* no mapa e selecione **Criar Nova Rota**.
- Em alternativa, use o botão **Criar Trilho** no menu *Local* (localizado no lado direito com os botões *Lápis* e *Carregar*).


***Gerir trilhos:***

- **Selecionar Perfil de Navegação**. Escolha um perfil (por exemplo, caminhada, condução) para secções específicas da rota (*Novos segmentos*) ou para toda a rota (*Todos os segmentos*).
- **Adicionar Pontos de Passagem**. Clique no mapa para adicionar novos pontos.
- **Guardar a Rota**. Guarde a sua rota para uso futuro.
- **Ver Detalhes da Rota**. Aceda a informações detalhadas do trilho, incluindo comprimento, duração e terreno.
  ![OsmAnd Web Criar Trilho](@site/static/img/web/create_route.png)


***Importar e criar trilhos:***

- **Importar Trilho**. Pode carregar qualquer ficheiro GPX para a secção **Local** visitando [osmand.net/map](https://osmand.net/map).
- **Criar Trilho**. Crie manualmente um novo trilho selecionando pontos de passagem.
  ![OsmAnd Web Criar Trilho](@site/static/img/web/create_route_2.png)


***Ações e informações de trilhos locais:***

O menu **Trilho Local** oferece três painéis para edição: **Info**, **Trilho** e **Pontos de Passagem**.

**Painel de Informação**:

- *Guardar na Nuvem*. Guarde o seu trilho no OsmAnd Cloud para acesso entre dispositivos.
- *Adicionar descrição*. Adicione notas sobre o trilho.
- *Renomear*. Altere o nome do trilho.
- *Recalcular*. Adicione ou atualize dados de elevação.
- *Elevação*. Veja o perfil de elevação.
- *Gráfico de velocidade*. Exiba dados de velocidade ao longo do trilho.
- *Gráfico de inclinação*. Mostre as mudanças de inclinação ao longo da rota.
- *Detalhes da estrada*. Veja informações detalhadas como tipo de estrada, superfície e inclinação.
- *Descarregar GPX*. Exporte o trilho como um ficheiro GPX ([Funcionalidade Pro](../purchases/index.md)).
- *Fechar Trilho*. Feche a vista de edição do trilho.
- *Eliminar Trilho*. Elimine permanentemente o trilho.
  ![OsmAnd Web Criar Trilho](@site/static/img/web/create_route_3.png)

**Painel de Trilho**:

- Veja e edite pontos do trilho.
- Reordene ou elimine pontos conforme necessário.

**Painel de Pontos de Passagem**:

- Veja e gira os pontos de passagem do trilho.
- Alterne a visibilidade dos pontos de passagem no mapa.
- Elimine pontos de passagem individualmente, se necessário.

**Painel de Curvas**:

- Veja informações detalhadas sobre as curvas ao longo do trilho.

  ![OsmAnd Web Criar Trilho](@site/static/img/web/create_route_1.png)


***Funcionalidades adicionais:***

- **Sincronizar com a aplicação**. Guarde rotas no OsmAnd Cloud e aceda a elas na sua aplicação móvel.
- **Perfis de rota personalizados**. Ajuste os perfis para se adequarem a diferentes atividades, como ciclismo ou caminhada.
- **Rotas partilháveis**. Copie e partilhe URLs de rotas para planeamento colaborativo.

> *Última atualização: janeiro de 2025*