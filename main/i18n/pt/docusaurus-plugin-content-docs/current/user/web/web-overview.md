---
source-hash: 5c0ec057fd60df8e67edea1ef3d5a69cce84edf9177789c1998911043f2d9f81
sidebar_position: 1
sidebar_label: Introdução
title: Introdução ao Planejador Web
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

O **Planejador Web**, também conhecido como o [**Portal de Mapas OsmAnd**](https://osmand.net/map), é uma extensão baseada em navegador do aplicativo móvel OsmAnd. Ele permite aos usuários visualizar mapas globais, planejar rotas, simular navegação, gerenciar dados pessoais e acessar conteúdo sincronizado de seus dispositivos via nuvem.

Projetado como um companheiro multiplataforma para o OsmAnd para Android e iOS, o Portal Web ajuda os usuários a planejar viagens, analisar trilhas, visualizar terrenos e gerenciar arquivos usando qualquer navegador de desktop ou tablet — sem instalar um aplicativo.

O OsmAnd Web se integra perfeitamente com o serviço **OsmAnd Cloud**, que permite sincronizar favoritos, trilhas e backups entre dispositivos e plataformas. Usuários com contas **OsmAnd Start** (gratuita) ou **OsmAnd Pro** (paga) podem aproveitar ao máximo este ecossistema sincronizando dados entre o móvel e a web. Você pode encontrar uma comparação detalhada dos recursos do *Start* e do *Pro* na seção [Acesso por Assinatura](#subscription-accesses) abaixo.

> **Nota:** Mesmo sem fazer login ou verificar sua conta, você ainda pode usar vários recursos principais do Portal de Mapas Web, incluindo: [Rota de Navegação](./web-navigation.md), [Planejador de Rotas](./planner.md), [Sobreposições de Clima](./web-weather.md), e [Configurações](./web-map.md#settings).


## Principais Recursos {#key-features}

O Portal Web oferece as seguintes principais capacidades para trabalhar com mapas e dados pessoais no navegador: 

- [Mapa](./web-map.md) com cobertura global e dados vetoriais de alta qualidade.
- [Planejamento de rotas](./planner.md) usando perfis de pedestre, carro, bicicleta e outros.
- [Navegação](./web-navigation.md) com visualização de instruções virada a virada.
- [Pesquisa](./web-search.md) e [exploração](./web-search.md#explore) de lugares populares próximos.
- Exibição de [Favoritos](./web-map.md#favorites), [Trilhas](./web-map.md#tracks), e [POIs](./web-map.md#poi-overlay) no mapa.
- [Sobreposições de clima](./web-weather.md): vento, temperatura e pressão.
- [Camadas de terreno](./web-map.md#terrain): relevo sombreado, inclinações e visualização de altitude.
- [Analisador de Trilhas](./web-tracks-analyzer.md) para perfis de elevação e velocidade.
- Acesso total a dados sincronizados via [OsmAnd Cloud](./web-cloud#cloud-sync).
- Suporte para importação/exportação de arquivos (GPX: trilhas, favoritos).
- Integração perfeita com **OsmAnd Pro** e **OsmAnd Start**.

### Acesso por Assinatura {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

O Portal de Mapas Web suporta vários níveis de acesso: sem login, com OsmAnd Start e com OsmAnd Pro. A tabela abaixo resume quais recursos estão disponíveis em cada nível para que você possa ver rapidamente o que já tem e o que se torna disponível com uma conta ou upgrade. Esta visão geral tem como objetivo ajudá-lo a decidir se você precisa de uma conta e, se precisar, qual opção melhor se adequa à forma como você usa o OsmAnd.

| Recurso | Disponível Em |
|--------|--------------|
| [Rota de Navegação](./web-navigation.md) | Sem Login |
| [Planejador de Rotas](./planner.md) | Sem Login |
| [Sobreposições de Clima](./web-weather.md) | Sem Login |
| [Configurações](./web-map.md#settings) | Sem Login |
| [Menu Configurar Mapa](./web-map.md#configure-map-menu) ([POIs](./web-map.md#poi-overlay), [Favoritos](./web-map.md#favorites), [Trilhas](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) ou [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Menu Configurar Mapa](./web-map.md#configure-map-menu) ([Terreno](./web-map.md#terrain))| [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Sincronização OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) ou [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Pesquisa Web, Lugares Populares](./web-search.md) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) ou [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Pastas de Trilhas e Camada](./web-tracks.md) | [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |


## Como Começar {#how-to-start}

Para acessar todos os recursos do Portal Web OsmAnd, você precisa fazer login com uma conta OsmAnd Cloud.

- Se você já tem uma assinatura [**OsmAnd Pro**](../personal/osmand-cloud.md#login) ou deseja criar uma conta gratuita [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), siga estes passos:

1. Vá para o [**Portal de Mapas OsmAnd**](https://osmand.net/map).
2. Abra o menu **Conta**:
   - **Fazer login**: Insira o endereço de e-mail vinculado à sua assinatura Pro ou Start, ou
   - **Criar conta**: Registre-se para uma conta gratuita OsmAnd Start. Para um guia detalhado passo a passo para criar uma nova conta, consulte o artigo [Conta OsmAnd](./web-cloud).

![Web Account](@site/static/img/web/web_account.png)


## Artigos Relacionados {#related-articles}

- [Primeiros Passos](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Compras Web](../purchases/web.md)
- [Compras Multiplataforma](../purchases/cross.md)