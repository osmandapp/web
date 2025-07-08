---
source-hash: 751ce0d01399c5201cf9fd9a85ce2e3a31e3f473f43bd4237e02b1fda097d4dd
sidebar_position: 2
sidebar_label: OsmAnd Cloud
title: OsmAnd Cloud no Site
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

O [Portal de Mapas OsmAnd](https://osmand.net/map) é um serviço baseado em navegador fornecido pela OsmAnd, permitindo aos usuários explorar mapas, gerenciar seus dados, planejar e criar viagens, ou simplesmente navegar pelo mapa.

#### Acessos de Assinatura {#subscription-accesses}

O Portal de Mapas pode ser usado sem registro; no entanto, algumas funcionalidades estão exclusivamente disponíveis para usuários OsmAnd Pro e OsmAnd Start:

| Funcionalidades | Versões |
|--- |--- |
| [Rota de Navegação](./planner.md) | Gratuito |
| [Criar trilha](./planner.md) | Gratuito |
| [Clima](./web-map.md) | Gratuito |
| [Favoritos](./web-map.md) | [Osmand Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Sincronização OsmAnd Cloud](./web-cloud.md) | [Osmand Start](https://osmand.net/blog/start) ou <ProFeature/> |
| [Pesquisa Web](./web-search.md)|[Osmand Start](https://osmand.net/blog/start) ou <ProFeature/>|
| [Trilhas](./web-map.md) | <ProFeature/> |


## Como Começar {#how-to-start}

Se você tem uma conta [OsmAnd Pro](../personal/osmand-cloud.md#login) ou deseja criar uma conta [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), você precisa seguir os próximos passos:

- Vá para o [*Portal de Mapas OsmAnd*](https://osmand.net/map).
- Abra o menu **Conta**.
  - *Fazer login*. Digite o e-mail que você usou para criar sua conta. Para assinaturas Pro ou Start.
  - *Criar conta*. Para OsmAnd Start.


## Como Mudar o Idioma {#how-to-change-language}

Se você deseja mudar o idioma de exibição:

- A versão Web do OsmAnd usa o idioma das configurações do navegador.
- Para o Chrome, a prioridade é `chrome://settings/languages`.
- Você pode mudar o idioma do sistema (menu) manualmente selecionando:
    *Menu →* ⚙ *→ Desativar idioma*.


## Gerenciando a Conta {#managing-account}

*Menu Geral → Conta*

Após o registro na web, os usuários podem acessar as informações de sua conta, baixar backups, fazer logout, excluir sua conta ou mudar seu endereço de e-mail.

#### Acessar Conta {#access-account}

#### Backups {#backups}

#### Sair e Excluir {#log-out-and-delete}

#### Mudar Endereço de E-mail {#change-email-address}


## Sincronização OsmAnd Pro e OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** é uma [assinatura paga multiplataforma](../troubleshooting/setup.md#cross-platform).
- **OsmAnd Start** é um [registro gratuito no OsmAnd Cloud](https://osmand.net/blog/start).

A capacidade multiplataforma permite que você use o OsmAnd Pro em todas as plataformas *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Para isso, você precisa:

1. Assinar o **OsmAnd Pro**. Leia mais sobre como fazer isso para [Android aqui](../purchases/android.md#how-to-buy), e para [iOS aqui](../purchases/ios.md#how-to-buy).
2. Como criar uma conta **OsmAnd Start**, leia mais [aqui](https://osmand.net/blog/start#how-to-create-an-account).
3. Registre sua conta [Pro ou Start](../troubleshooting/setup.md#cross-platform) no servidor OsmAnd dentro do aplicativo OsmAnd.
4. O e-mail registrado será seu login para ativar o OsmAnd Pro na plataforma web. Na primeira vez, será necessário escolher uma senha para futuros acessos ao portal web (por favor, use as instruções no portal web).

- Digite seu *e-mail* e *senha* para [osmand.net/map](https://osmand.net/map/).

![Ver ativação do OsmAnd Web](@site/static/img/web/web_pro_activation.png)

- Seus dados, como trilhas (OsmAnd Pro) e favoritos (OsmAnd Pro e OsmAnd Start), aparecerão no menu depois que você fizer login. Eles estão disponíveis para exibição no mapa. Mas você precisa [sincronizar esses dados](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) de seus dispositivos.

![Ver dados do OsmAnd Web](@site/static/img/web/web_data.png)

- Para *BAIXAR BACKUP* do [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), clique no campo de login. No campo de login, você pode ver informações sobre os arquivos (número total de arquivos, tamanho total dos arquivos, armazenamento em nuvem usado) e informações da conta (tipo de assinatura, hora de início e hora de expiração da sua assinatura).

![Ver arquivo de backup do OsmAnd Web](@site/static/img/web/web_backup_file.png)

Escolha os arquivos necessários para download, o formato `.zip` ou `.osf` dos arquivos baixados e clique no botão *BAIXAR BACKUP*:

![Ver arquivo de backup do OsmAnd Web](@site/static/img/web/web_backup_file_1.png)

Há também um botão para *sair* da conta.

- *SAIR*, *EXCLUIR SUA CONTA* ou *Mudar e-mail* você também encontra no campo de login. Para abrir *EXCLUIR SUA CONTA* ou *Mudar e-mail*, você precisa clicar em *Área perigosa*.

![Ver arquivo de backup do OsmAnd Web](@site/static/img/web/web_backup_file_2.png)


## Dados da Nuvem {#cloud-data}

[Trilhas e Favoritos](web-map.md#tracks).
<!--
## Estilo do mapa {#map-style}

Nesta seção do menu, você pode mudar o estilo do mapa. Você pode ler mais sobre como fazer isso no artigo [Mapas Vetoriais (Estilos de Mapa)](../map/vector-maps.md) para o aplicativo OsmAnd. As configurações na versão web não são diferentes.
**Alguns exemplos:**

- Estilo de mapa náutico

![Estilo de Mapa Web OsmAnd](@site/static/img/web/web_map_style_nautical.png)

- Estilo de mapa Topo

![Adicionar Favoritos Web OsmAnd](@site/static/img/web/web_map_style_topo.png)
-->



> *Última atualização: Setembro de 2024*