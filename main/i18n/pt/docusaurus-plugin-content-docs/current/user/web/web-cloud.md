---
source-hash: aa7b248df7d6116b19b0428376bb9c1f59b764588678067dd00d7ee9bd820a7a
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

O [Portal de Mapas OsmAnd](https://osmand.net/map) é um serviço baseado em navegador fornecido pelo OsmAnd, permitindo que os usuários explorem mapas, gerenciem seus dados, planejem e criem viagens, ou simplesmente naveguem no mapa.



## Como Começar {#how-to-start}

Para acessar os recursos da Web do OsmAnd, você precisa de uma conta:

- Se você já tem uma assinatura [**OsmAnd Pro**](../personal/osmand-cloud.md#login) ou deseja criar uma conta gratuita [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), siga estas etapas:

  1. Vá para o [**Portal de Mapas OsmAnd**](https://osmand.net/map).
  2. Abra o menu **Conta**.
     - **Fazer login**: Digite o endereço de e-mail usado para sua assinatura Pro ou Start.
     - **Criar conta**: Use esta opção para se registrar em uma conta gratuita do OsmAnd Start.

![Conta da Web](@site/static/img/web/web_account.png)

## Gerenciando a Conta {#managing-account}

Para gerenciar sua conta, vá para:
**Menu Geral → Conta**

Após o registro na web, você pode:

- Visualizar informações da conta
- Baixar backups da nuvem
- Sair da sua conta
- Excluir sua conta
- Alterar seu endereço de e-mail
- Ver seus pagamentos e compras

![Conta da Web](@site/static/img/web/web_account_2.png)

### Meus Dados {#my-data}

Você pode baixar backups que foram criados e sincronizados do seu dispositivo móvel via **OsmAnd Cloud**.

- Vá para **Menu Geral → Conta → Meus dados (OsmAnd Cloud) → Baixar tudo**.

Esta seção exibe:

- O número de arquivos armazenados na sua nuvem
- Volume total de armazenamento usado
- Espaço de armazenamento em nuvem disponível

> 💡 Apenas os backups criados em dispositivos onde o **OsmAnd Cloud** está ativado aparecerão aqui.

### Pagamentos e Compras {#payments-and-purchases}

- Vá para **Menu Geral → Conta → Pagamentos e Compras**.

Nesta seção, você pode visualizar todas as compras e assinaturas vinculadas à sua conta.

Para mais detalhes sobre como usar suas compras em diferentes plataformas, leia sobre [acesso multiplataforma](../purchases/cross.md).

### Alterar Endereço de E-mail {#change-email-address}

Para atualizar seu endereço de e-mail:

1. Vá para **Menu Geral → Conta → E-mail → ⋮ → Alterar e-mail**.
2. Digite seu novo endereço de e-mail e confirme.

> 🔒 Um e-mail de verificação será enviado para o novo endereço antes que a alteração seja finalizada.

### Sair e Excluir Conta {#log-out-and-delete}

Para sair da sua conta OsmAnd Web:

- Abra o **Menu Geral → Conta**.
- Clique no botão **Sair** para encerrar sua sessão atual.

Para excluir permanentemente sua conta:

- Role até o final do menu **Conta**.
- Clique no botão **Excluir conta**.
- Confirme a exclusão. Esta ação é irreversível.


## Sincronização OsmAnd Pro e OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** é uma assinatura paga [multiplataforma](../troubleshooting/setup.md#cross-platform).
- **OsmAnd Start** é um [registro gratuito do OsmAnd Cloud](https://osmand.net/blog/start).

A capacidade multiplataforma permite que você use o OsmAnd Pro em todas as plataformas *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Para fazer isso, você precisa:

1. Assinar o **OsmAnd Pro**. Leia mais sobre como fazer isso para [Android aqui](../purchases/android.md#how-to-buy), e para [iOS aqui](../purchases/ios.md#how-to-buy).
2. Como criar uma conta **OsmAnd Start**, leia mais [aqui](https://osmand.net/blog/start#how-to-create-an-account).
3. Registre sua [conta Pro ou Start](../troubleshooting/setup.md#cross-platform) no servidor OsmAnd dentro do aplicativo OsmAnd.
4. O e-mail registrado será seu login para ativar o OsmAnd Pro na plataforma web. Na primeira vez, é necessário escolher uma senha para futuros acessos ao portal web (por favor, use as instruções no portal web).


<!--

- Digite seu *e-mail* e *senha* para [osmand.net/map](https://osmand.net/map/).

![Ver ativação do OsmAnd Web](@site/static/img/web/web_pro_activation.png)

- Seus dados, como trilhas (OsmAnd Pro) e favoritos (OsmAnd Pro e OsmAnd Start), aparecerão no menu após o login. Eles estão disponíveis para exibição no mapa. Mas você precisa [sincronizar esses dados](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) de seus dispositivos.

![Ver dados do OsmAnd Web](@site/static/img/web/web_data.png)

- Para *BAIXAR BACKUP* do [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), clique no campo de login. No campo de login, você pode ver informações dos arquivos (número total de arquivos, tamanho total dos arquivos, armazenamento em nuvem usado) e informações da conta (tipo de assinatura, hora de início e hora de expiração da sua assinatura).

![Ver arquivo de backup do OsmAnd Web](@site/static/img/web/web_backup_file.png)

Escolha os arquivos necessários para download, formato `.zip` ou `.osf` dos arquivos baixados e clique no botão *BAIXAR BACKUP*:

![Ver arquivo de backup do OsmAnd Web](@site/static/img/web/web_backup_file_1.png)

Há também um botão para *sair* da conta.

- *SAIR*, *EXCLUIR SUA CONTA* ou *Alterar e-mail* você encontra também no campo de login. Para abrir *EXCLUIR SUA CONTA* ou *Alterar e-mail*, você precisa clicar em *Área perigosa*.

![Ver arquivo de backup do OsmAnd Web](@site/static/img/web/web_backup_file_2.png)


## Dados da nuvem {#cloud-data}

[Trilhas e Favoritos](web-map.md#tracks).

## Estilo do mapa {#map-style}

Nesta seção do menu, você pode alterar o estilo do mapa. Você pode ler mais sobre como fazer isso no artigo [Mapas Vetoriais (Estilos de Mapa)](../map/vector-maps.md) para o aplicativo OsmAnd. As configurações na versão web não são diferentes.
**Alguns exemplos:**

- Estilo de mapa náutico

![Estilo de Mapa Web OsmAnd](@site/static/img/web/web_map_style_nautical.png)

- Estilo de mapa Topo

![Adicionar Favoritos Web OsmAnd](@site/static/img/web/web_map_style_topo.png)
-->



> *Última atualização: Julho de 2024*