---
source-hash: a52737232a71758590dfdb7cfbb68622999fbec373babd2b56b429093731d394
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

<!--
<InfoIncompleteArticle/>
-->

## Visão Geral {#overview}

O **Planejador Web**, também conhecido como o [**Portal de Mapas OsmAnd**](https://osmand.net/map), é uma extensão baseada em navegador do aplicativo móvel OsmAnd. Ele permite aos usuários visualizar mapas globais, planejar rotas, simular navegação, gerenciar dados pessoais e acessar conteúdo sincronizado de seus dispositivos via nuvem.

Projetado como um companheiro multiplataforma para o OsmAnd para Android e iOS, o Portal Web ajuda os usuários a planejar viagens, analisar trilhas, visualizar terrenos e gerenciar arquivos usando qualquer navegador de desktop ou tablet — sem instalar um aplicativo.

O OsmAnd Web se integra perfeitamente com o serviço **OsmAnd Cloud**, que permite sincronizar favoritos, trilhas e backups entre dispositivos e plataformas. Usuários com contas **OsmAnd Start** (gratuita) ou **OsmAnd Pro** (paga) podem aproveitar ao máximo este ecossistema sincronizando dados entre o móvel e a web. Você pode encontrar uma comparação detalhada dos recursos do *Start* e do *Pro* na seção [Acesso por Assinatura](#subscription-access) abaixo.

> **Nota:** Mesmo sem fazer login ou verificar sua conta, você ainda pode usar vários recursos principais do Portal de Mapas Web, incluindo: [Rota de Navegação](./planner.md), [Planejador de Rotas](./planner.md), [Sobreposições de Clima](./web-map.md#weather-on-the-web) e [Configurações](#settings).

<!--
After the structure of this section is approved, some links should be updated.
-->

## Principais Recursos {#key-features}

O Portal Web oferece as seguintes principais capacidades para trabalhar com mapas e dados pessoais no navegador: 

- [Mapa](./web-map.md) com cobertura global e dados vetoriais de alta qualidade.
- [Planejamento de rotas](./planner.md) usando perfis de pedestre, carro, bicicleta e outros.
- [Navegação](./planner.md) com visualização de instruções virada a virada.
- [Pesquisa](./web-search.md) e [exploração](./web-search.md#explore) de lugares populares próximos.
- Exibição de [Favoritos](./web-map.md#favorites), [Trilhas](./web-map.md#tracks) e [POIs](./web-map.md#poi-overlay) no mapa.
- [Sobreposições de clima](./web-weather.md): vento, temperatura e pressão.
- [Camadas de terreno](./web-map.md#terrain): relevo sombreado, inclinações e visualização de altitude.
- [Analisador de Trilhas](./web-tracks-analyzer.md) para perfis de elevação e velocidade.
- Acesso total a dados sincronizados via [OsmAnd Cloud](./web-cloud#cloud-sync).
- Suporte para importação/exportação de arquivos (GPX: trilhas, favoritos).
- Integração perfeita com **OsmAnd Pro** e **OsmAnd Start**.

<!--
After the structure of this section is approved, some links should be updated.
-->


### Acesso por Assinatura {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

O Portal de Mapas Web suporta vários níveis de acesso: sem login, com OsmAnd Start e com OsmAnd Pro. A tabela abaixo resume quais recursos estão disponíveis em cada nível para que você possa ver rapidamente o que já tem e o que se torna disponível com uma conta ou upgrade. Esta visão geral tem como objetivo ajudá-lo a decidir se você precisa de uma conta e, se precisar, qual opção melhor se adequa à forma como você usa o OsmAnd.

| Recurso | Disponível Em |
|--------|--------------|
| [Rota de Navegação](./planner.md) | Sem Login |
| [Planejador de Rotas](./planner.md) | Sem Login |
| [Sobreposições de Clima](./web-weather.md) | Sem Login |
| [Configurações](./web-map.md#settings) | Sem Login |
| [Menu Configurar Mapa](./web-map.md#configure-map-menu) ([POIs](./web-map.md#poi-overlay), [Favoritos](./web-map.md#favorites), [Trilhas](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Menu Configurar Mapa](./web-map.md#configure-map-menu) ([Terreno](./web-map.md#terrain))| <ProFeature/> |
| [Sincronização OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Pesquisa Web, Lugares Populares](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Pastas de Trilhas e Camada](./web-tracks.md) | <ProFeature/> |

<!--
After the structure of this section is approved, some links should be updated.
-->


## Como Começar {#how-to-start}

Para acessar todos os recursos do Portal Web OsmAnd, você precisa fazer login com uma conta OsmAnd Cloud.

- Se você já tem uma assinatura [**OsmAnd Pro**](../personal/osmand-cloud.md#login) ou deseja criar uma conta gratuita [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), siga estes passos:

1. Vá para o [**Portal de Mapas OsmAnd**](https://osmand.net/map).
2. Abra o menu **Conta**:
   - **Fazer login**: Insira o endereço de e-mail vinculado à sua assinatura Pro ou Start, ou
   - **Criar conta**: Registre-se para uma conta gratuita OsmAnd Start. Para um guia detalhado passo a passo para criar uma nova conta, consulte o artigo [Conta OsmAnd](./web-cloud).

![Web Account](@site/static/img/web/web_account.png)

<!--

## Settings {#settings}

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)

### OsmAnd Cloud {#osmand-cloud}

![Web Cloud](@site/static/img/web/web_without_acc.png) ![Web Cloud](@site/static/img/web/web_with_acc.png)

In the Web Map Portal, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. [OsmAnd Cloud](./web-cloud) connects the web map with your cloud backups so that you can manage data synchronized from your Android or iOS devices directly in the browser.

**Changes** option shows a chronological list of files stored in your OsmAnd Cloud account. Items are grouped by month and include the file name, the type of change (for example, added, modified or deleted), the time of the last update and the device that created it. For each entry, you can open the three-dot menu and choose *Download* to save the selected file to your computer, or *Delete*.

**Trash** option contains files that were deleted from OsmAnd Cloud. The list is also grouped by month and shows when each file was removed and from which device. Use the three-dot menu next to a file to *Download* a copy, *Restore from trash* (return the file to OsmAnd Cloud so it becomes available again in your data), or *Delete immediately* to remove it permanently. This helps prevent accidental data loss while still letting you free up cloud storage when you are sure a file is no longer needed. You can also clear all deleted items at once by clicking the Trash icon in the Trash panel header. This opens the **Empty trash** dialog, where you confirm deletion to permanently remove all files from Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

-->


## Artigos Relacionados {#related-articles}

- [Primeiros Passos](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Compras Web](../purchases/web.md)
- [Compras Multiplataforma](../purchases/cross.md)