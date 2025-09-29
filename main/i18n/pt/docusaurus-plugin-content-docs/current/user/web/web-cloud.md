---
source-hash: 36fa594008d56ae693369164879dccfe01f275c12d52be379ad60b0b9c264d67
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

O [Portal de Mapas OsmAnd](https://osmand.net/map) é um serviço baseado em navegador fornecido pelo OsmAnd, permitindo aos usuários explorar mapas, gerenciar seus dados, planejar e criar viagens, ou simplesmente navegar pelo mapa.



## Como Começar {#how-to-start}

Para acessar os recursos do OsmAnd Web, você precisa de uma conta:

- Se você já tem uma assinatura [**OsmAnd Pro**](../personal/osmand-cloud.md#login) ou deseja criar uma conta gratuita [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), siga estes passos:

  1. Vá para o [**Portal de Mapas OsmAnd**](https://osmand.net/map).
  2. Abra o menu **Conta**.
     - **Entrar**: Digite o endereço de e-mail usado para sua assinatura Pro ou Start.
     - **Criar conta**: Use esta opção para se registrar para uma conta gratuita OsmAnd Start.

![Web Account](@site/static/img/web/web_account.png)

## Gerenciando a Conta {#managing-account}

Para gerenciar sua conta, vá para:
**Menu Geral → Conta**

Após se registrar na web, você pode:

- Visualizar informações da conta
- Baixar backups da nuvem
- Sair da sua conta
- Excluir sua conta
- Alterar seu endereço de e-mail
- Ver seus pagamentos e compras

![Web Account](@site/static/img/web/web_account_2.png)

### Meus Dados {#my-data}

Você pode baixar backups que foram criados e sincronizados do seu dispositivo móvel via **OsmAnd Cloud**.

- Vá para **Menu Geral → Conta → Meus dados (OsmAnd Cloud) → Baixar tudo**.

Esta seção exibe:

- O número de arquivos armazenados na sua nuvem
- Volume total de armazenamento usado
- Espaço de armazenamento em nuvem disponível

> 💡 Apenas backups criados em dispositivos onde o **OsmAnd Cloud** está ativado aparecerão aqui.

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

- Abra **Menu Geral → Conta**.
- Clique no botão **Sair** para encerrar sua sessão atual.

Para excluir permanentemente sua conta:

- Role até o final do menu **Conta**.
- Clique no botão **Excluir conta**.
- Confirme a exclusão. Esta ação é irreversível.


## Sincronização OsmAnd Pro e OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** é uma assinatura paga [multiplataforma](../troubleshooting/setup.md#initial-setup).
- **OsmAnd Start** é um [registro gratuito do OsmAnd Cloud](https://osmand.net/blog/start).

A capacidade multiplataforma permite que você use o OsmAnd Pro em todas as plataformas *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Para fazer isso, você precisa:

1. Assinar o **OsmAnd Pro**. Leia mais sobre como fazer isso para [Android aqui](../purchases/android.md#how-to-buy), e para [iOS aqui](../purchases/ios.md#how-to-buy).
2. Como criar uma conta **OsmAnd Start**, leia mais [aqui](https://osmand.net/blog/start#how-to-create-an-account).
3. Registre sua [conta Pro ou Start](/docs/user/personal/osmand-cloud/#cross-platform) no servidor OsmAnd dentro do aplicativo OsmAnd.
4. O e-mail registrado será seu login para ativar o OsmAnd Pro na plataforma web. Na primeira vez, será necessário escolher uma senha para futuras entradas no portal web (por favor, use as instruções no portal web).


<!--

- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)  

- Your data, such as tracks (OsmAnd Pro) and favorites(OsmAnd Pro and OsmAnd Start), will appear in the menu after you log in. They are available for display on the map. But you need [to sync this data](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) from your devices.

![View OsmAnd Web data](@site/static/img/web/web_data.png)  

- To *DOWNLOAD BACKUP* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. On the login field you can see files info (total files number, total files size, cloud storage used) and account info (subscription type, start time and expire time of your subscription).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)  

Choose needed files for downloading, `.zip` or `.osf` format of downloaded files and click *DOWNLOAD BACKUP* button:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)  

There is also a button to *logout* of the account.  

- *LOGOUT*, *DELETE YOUR ACCOUNT* or *Change email* you find on the login field too. For opening *DELETE YOUR ACCOUNT* or *Change email* you need to click *Dangerous area*.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)  


## Cloud data {#cloud-data}

[Tracks and Favorites](web-map.md#tracks).

## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->