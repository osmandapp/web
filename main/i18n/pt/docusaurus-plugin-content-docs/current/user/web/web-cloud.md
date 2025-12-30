---
source-hash: a869782aa735dab23fcbaeec7b7c95203ee66ac9003a203ce92de965424802d9
sidebar_position: 2
sidebar_label: Conta
title: Conta OsmAnd
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

Fazer login com uma conta OsmAnd transforma o [Planeador Web do OsmAnd](https://osmand.net/map) de um simples visualizador de mapas em seu espaço de trabalho pessoal. A mesma conta que você usa no aplicativo móvel conecta o site aos seus dados e compras do **OsmAnd Cloud**, para que você possa acessar seu conteúdo salvo e assinaturas em um único lugar na web.


## Autorização {#authorization}

### Inscrever-se {#sign-up}

Para acessar os recursos do OsmAnd Web, você precisa criar uma conta. Use o fluxo de Inscrição:

- Vá para o [**Portal de Mapas OsmAnd**](https://osmand.net/map).
- Abra o menu **Conta**.
- Selecione **Criar nova conta**. A caixa de diálogo Criar nova conta é aberta.
- No campo **E-mail**, insira o endereço de e-mail que você deseja usar para sua conta OsmAnd e clique em **Continuar**.
- Um código de verificação é enviado para este endereço de e-mail. Verifique sua caixa de entrada (e a pasta de spam, se necessário).
- Na próxima caixa de diálogo, insira o Código de verificação e clique em **Continuar** para confirmar seu e-mail. Se você não recebeu o código, use o link **Não recebi o código de verificação** e siga as instruções.

Após o código ser verificado, sua conta web é criada e você é logado automaticamente.

![Web Sign Up](@site/static/img/web/web_sign_up.png) ![Web Sign Up](@site/static/img/web/web_ver_code.png)


### Login {#login}

Se você já tem uma conta OsmAnd, você pode fazer login no [**Portal de Mapas OsmAnd**](https://osmand.net/map) com o mesmo e-mail e senha. Vá para o menu **Conta** e escolha a opção **Entrar**. Na caixa de diálogo que se abre, insira o endereço de e-mail vinculado à sua conta OsmAnd, digite sua senha e selecione **Continuar**. Após um login bem-sucedido, o painel Conta OsmAnd é aberto e você pode trabalhar com seus dados, compras e configurações.


## Gerenciando a Conta {#managing-account}

### Meus Dados {#my-data}

Você pode baixar backups que foram criados e sincronizados do seu dispositivo móvel via **OsmAnd Cloud**.  
Vá para: *Menu Geral → Conta → Meus dados (OsmAnd Cloud) → Baixar tudo*

Esta seção exibe:

- O número de arquivos armazenados na sua nuvem.
- Volume total de armazenamento usado.
- Espaço de armazenamento em nuvem disponível.

> 💡 Apenas backups criados em dispositivos onde o **OsmAnd Cloud** está ativado aparecerão aqui.

Se você quiser salvar uma cópia de todos os seus dados, use **Baixar tudo**. Isso abre uma caixa de diálogo onde você pode:

- Selecionar quais dados exportar (por exemplo, *Meus lugares, Configurações, Recursos, Mapas*),
- Escolher o formato de exportação (*ZIP ou OSF*).
- Ver uma estimativa do tamanho e tempo de download.

Clique em **Baixar Backup** para iniciar a exportação e salvar o arquivo no seu computador.

![Web Account](@site/static/img/web/web_download_all.png)

### Pagamentos e Compras {#payments-and-purchases}

Esta seção mostra todos os produtos e assinaturas vinculados à sua conta OsmAnd. Para abri-la,  
Vá para: *Menu Geral → Conta → Pagamentos e Compras*

Aqui você pode ver uma lista de todas as compras associadas ao seu e-mail:
- Planos gratuitos e pagos (como OsmAnd Start ou **OsmAnd Pro**).
- Produtos de compra única (ex.: **Maps+** ou edições especiais).
- Assinaturas que se renovam mensalmente ou anualmente.

Para cada item, a lista mostra:
- Nome do produto e ícone.
- Tipo – assinatura mensal, assinatura anual ou pagamento único.
- Status – *Ativo, Expirado ou Cancelado*.
- Informações de data.

Se você clicar em um produto na lista, a página de detalhes é aberta. Lá você pode ver onde o produto foi comprado (*Google Play, Apple App Store, Huawei AppGallery, Amazon* ou *OsmAnd Web*) e encontrar um link ou instruções sobre como gerenciar ou cancelar a assinatura na loja correspondente. Se o produto foi comprado no OsmAnd Web (FastSpring), a página de detalhes mostra um link **Gerenciar assinatura** que abre o portal de gerenciamento de conta do FastSpring, onde você pode atualizar seu método de pagamento, cancelar ou reativar a assinatura, alterar o plano ou baixar faturas.

Se não houver compras vinculadas à sua conta ainda, esta seção mostra um estado vazio com a mensagem **Você não tem compras** e um botão **Saiba mais** que leva a uma página com planos disponíveis do OsmAnd e opções de upgrade.

Para mais detalhes sobre o uso de suas compras em diferentes plataformas, leia sobre [acesso multiplataforma](../purchases/cross.md).

![Web Account](@site/static/img/web/web_purchases.png)

### Sincronização em Nuvem {#cloud-sync}

A Sincronização em Nuvem permite que você acesse os dados que você sincronizou para o **OsmAnd Cloud** diretamente no [Portal de Mapas Web](https://osmand.net/map/). Assim que você fizer login com sua conta OsmAnd Start ou **OsmAnd Pro**, o site exibe os Favoritos, Rastros e arquivos de backup que você sincronizou anteriormente do seu aplicativo móvel. É uma maneira simples de visualizar seu conteúdo em nuvem em uma tela maior e baixar seus backups sempre que precisar.

Esses itens ficam visíveis no menu logo após você fazer login no site. Para atualizar essas informações, você precisa sincronizar seus dados dos seus dispositivos usando a [ação Sincronizar agora](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) no aplicativo móvel.

A disponibilidade da Sincronização em Nuvem depende do tipo da sua conta:
- OsmAnd Start – sincroniza [Favoritos](../web/web-favorites.md) e os exibe na web.
- **OsmAnd Pro** – sincroniza [Rastros](../web/web-tracks.md), Favoritos e [Backups](#my-data), e desbloqueia acesso completo na web aos dados em nuvem.

![Web Track](@site/static/img/web/web_track_start.png) ![Web Track](@site/static/img/web/web_track_pro.png)

### OsmAnd Cloud {#osmand-cloud}

Quando você está logado, a seção **OsmAnd Cloud** aparece em Menu → Configurações e inclui Alterações e Lixeira.

A opção **Alterações** mostra uma lista cronológica de arquivos armazenados na sua conta **OsmAnd Cloud**. Os itens são agrupados por mês e incluem o nome do arquivo, o tipo de alteração (por exemplo, adicionado, modificado ou excluído), o horário da última atualização e o dispositivo que o criou. Para cada entrada, você pode abrir o menu de três pontos e escolher *Baixar* para salvar o arquivo selecionado no seu computador, ou *Excluir*.

A opção **Lixeira** contém arquivos que foram excluídos do **OsmAnd Cloud**. A lista também é agrupada por mês e mostra quando cada arquivo foi removido e de qual dispositivo. Use o menu de três pontos ao lado de um arquivo para *Baixar* uma cópia, *Restaurar da lixeira* (retornar o arquivo para o **OsmAnd Cloud** para que ele fique disponível novamente nos seus dados), ou *Excluir imediatamente* para removê-lo permanentemente. Isso ajuda a prevenir perda acidental de dados, enquanto ainda permite liberar espaço de armazenamento em nuvem quando você tem certeza de que um arquivo não é mais necessário. Você também pode limpar todos os itens excluídos de uma vez clicando no ícone da Lixeira no cabeçalho do painel Lixeira. Isso abre a caixa de diálogo **Esvaziar lixeira**, onde você confirma a exclusão para remover permanentemente todos os arquivos da Lixeira.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)


## Solução de Problemas {#troubleshooting}

### Redefinir Senha {#reset-password}

Se você não se lembrar da sua senha, use o link **Não tenho ou esqueci a senha** na caixa de diálogo de login. Isso abre o painel **Alterar ou redefinir senha**. Insira o endereço de e-mail que você usou para criar sua conta e clique em **Continuar**. Uma mensagem com um código de verificação é enviada para este e-mail. Na próxima tela, digite o código de verificação e sua nova senha, depois selecione **Continuar** para confirmar. Quando o código for aceito, sua senha é atualizada e você pode fazer login no OsmAnd Web com as novas credenciais.

![Web Account](@site/static/img/web/web_password.png)

### Alterar Endereço de E-mail {#change-email-address}

Para atualizar seu endereço de e-mail,
Vá para *Menu Geral → Conta → E-mail → ⋮ → Alterar e-mail*

A caixa de diálogo Alterar e-mail aparece. Um código de verificação é enviado para o endereço de e-mail atual. Insira este código no campo **Código do E-mail Antigo**, especifique o novo endereço em **Novo E-mail**, depois selecione **Próximo**. Por razões de segurança, uma mensagem de confirmação é enviada para seu novo endereço de e-mail informando que o e-mail da conta foi atualizado.

![Web Account](@site/static/img/web/web_email_new.png)

### Sair e Excluir Conta {#logout-and-delete}

![Web Account](@site/static/img/web/web_logout_new.png)

O painel Conta OsmAnd contém controles para encerrar a sessão web atual e remover permanentemente a conta.

Para sair, abra a Conta OsmAnd e use o botão **Sair** no canto superior direito do painel (ícone com uma seta saindo de um quadrado). Selecionar Sair fecha o painel da conta e encerra a sessão ativa no site.

Para excluir uma conta, selecione **Excluir conta** na parte inferior do painel Conta OsmAnd. Uma caixa de diálogo de confirmação aparece com a mensagem *“Tem certeza de que deseja fazer isso?”* e uma breve explicação de que todos os dados e detalhes da conta serão removidos do **OsmAnd Cloud** e dispositivos secundários perderão acesso a recursos pagos. Um código de verificação é enviado para o endereço de e-mail da conta. Insira o código no campo Código do E-mail e escolha **EXCLUIR ESTA CONTA** para completar o processo. Esta operação é permanente e não pode ser desfeita.

![Web Account](@site/static/img/web/web_delete.png)

<!--
## OsmAnd Pro and OsmAnd Start Sync {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** is a [cross-platform](../troubleshooting/setup.md#initial-setup) paid subscription. 
- **OsmAnd Start** is a [free OsmAnd Cloud registration](https://osmand.net/blog/start).

The cross-platform capability allows you to use OsmAnd Pro on all platforms *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. To do this you need to:

1. Subscribe to **OsmAnd Pro**. Read more about how to do this for [Android here](../purchases/android.md#how-to-buy), and for [iOS here](../purchases/ios.md#how-to-buy).
2. How to create **OsmAnd Start** account read more [here](https://osmand.net/blog/start#how-to-create-an-account).
3. Register your [Pro or Start account](/docs/user/personal/osmand-cloud/#cross-platform) on the OsmAnd server inside OsmAnd app.
4. The registered email will be your login to activate OsmAnd Pro on the web platform. At first, time needed to choose a password for future entering the web portal (please, use the instruction on the web portal).


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

## Artigos Relacionados {#related-articles}

- [Introdução](./web-overview.md)
- [Compras Multiplataforma](../purchases/cross.md)
- [**OsmAnd Cloud**](../personal/osmand-cloud.md)