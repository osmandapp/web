---
source-hash: 37966c34f2ca7cf0b51174feba09ac86bc8ff2c9dbcc286058b56a245ebf5aff
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

Fazer login com uma conta OsmAnd transforma o [OsmAnd Web Planner](https://osmand.net/map) de um simples visualizador de mapas em seu espaço de trabalho pessoal. A mesma conta que você usa no aplicativo móvel conecta o site aos seus dados e compras do **OsmAnd Cloud**, para que você possa acessar seu conteúdo salvo e assinaturas em um único lugar na web.


## Autorização {#authorization}

### Inscrever-se {#sign-up}

Para acessar os recursos do OsmAnd Web, você precisa criar uma conta. Use o fluxo de Inscrição:

- Vá para o [**OsmAnd Map Portal**](https://osmand.net/map).
- Abra o menu **Account**.
- Selecione **Create new account**. A caixa de diálogo Create new account é aberta.
- No campo **Email**, insira o endereço de e-mail que você deseja usar para sua conta OsmAnd e clique em **Continue**.
- Um código de verificação é enviado para este endereço de e-mail. Verifique sua caixa de entrada (e a pasta de spam, se necessário).
- Na próxima caixa de diálogo, insira o Verification code e clique em **Continue** para confirmar seu e-mail. Se você não recebeu o código, use o link **I didn't receive verification code** e siga as instruções.

Após o código ser verificado, sua conta web é criada e você é logado automaticamente.

![Web Sign Up](@site/static/img/web/web_sign_up.png) ![Web Sign Up](@site/static/img/web/web_ver_code.png)


### Login {#login}

Se você já tem uma conta OsmAnd, você pode fazer login no [**OsmAnd Map Portal**](https://osmand.net/map) com o mesmo e-mail e senha. Vá para o **Account menu** e escolha a opção **Log in**. Na caixa de diálogo que se abre, insira o endereço de e-mail vinculado à sua conta OsmAnd, digite sua senha e selecione **Continue**. Após um login bem-sucedido, o painel Conta OsmAnd é aberto e você pode trabalhar com seus dados, compras e configurações.


## Gerenciando a Conta {#managing-account}

### Meus Dados {#my-data}

Você pode baixar backups que foram criados e sincronizados do seu dispositivo móvel via **OsmAnd Cloud**.  
Vá para: *General Menu → Account → My data (OsmAnd Cloud) → Download all*

Esta seção exibe:

- O número de arquivos armazenados na sua nuvem.
- Volume total de armazenamento usado.
- Espaço de armazenamento em nuvem disponível.

> 💡 Apenas backups criados em dispositivos onde o **OsmAnd Cloud** está ativado aparecerão aqui.

Se você quiser salvar uma cópia de todos os seus dados, use **Download all**. Isso abre uma caixa de diálogo onde você pode:

- Selecionar quais dados exportar (por exemplo, *My places, Settings, Resources, Maps*),
- Escolher o formato de exportação (*ZIP or OSF*).
- Ver uma estimativa do tamanho e tempo de download.

Clique em **Download Backup** para iniciar a exportação e salvar o arquivo no seu computador.

![Web Account](@site/static/img/web/web_download_all.png)

### Pagamentos e Compras {#payments-and-purchases}

Esta seção mostra todos os produtos e assinaturas vinculados à sua conta OsmAnd. Para abri-la,  
Vá para: *General Menu → Account → Payments and Purchases*

Aqui você pode ver uma lista de todas as compras associadas ao seu e-mail:
- Free and paid plans (such as OsmAnd Start or **OsmAnd Pro**).
- One-time products (e.g. **Maps+** or special editions).
- Subscriptions that renew monthly or annually.

Para cada item, a lista mostra:
- Product name and icon.
- Type – monthly subscription, annual subscription or one-time payment.
- Status – *Active, Expired or Canceled*.
- Date information.

Se você clicar em um produto na lista, a página de detalhes é aberta. Lá você pode ver onde o produto foi comprado (*Google Play, Apple App Store, Huawei AppGallery, Amazon* or *OsmAnd Web*) e encontrar um link ou instruções sobre como gerenciar ou cancelar a assinatura na loja correspondente. If the product was purchased on OsmAnd Web (FastSpring), the details page shows a **Manage subscription** link that opens the FastSpring account management portal, where you can update your payment method, cancel or re-activate the subscription, change the plan, or download invoices.

Se não houver compras vinculadas à sua conta ainda, esta seção mostra um estado vazio com a mensagem **You don’t have any purchases** e um botão **Learn more** que leva a uma página com planos disponíveis do OsmAnd e opções de upgrade.

Para mais detalhes sobre o uso de suas compras em diferentes plataformas, leia sobre [cross-platform access](../purchases/cross.md).

![Web Account](@site/static/img/web/web_purchases.png)

### Cloud Sync {#cloud-sync}

Cloud Sync permite que você acesse os dados que você sincronizou para o **OsmAnd Cloud** diretamente no [Web Map Portal](https://osmand.net/map/). Assim que você fizer login com sua conta OsmAnd Start ou **OsmAnd Pro**, o site exibe os Favoritos, Rastros e arquivos de backup que você sincronizou anteriormente do seu aplicativo móvel. É uma maneira simples de visualizar seu conteúdo em nuvem em uma tela maior e baixar seus backups sempre que precisar.

Esses itens ficam visíveis no menu logo após você fazer login no site. Para atualizar essas informações, você precisa sincronizar seus dados dos seus dispositivos usando a [Sync now action](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) no aplicativo móvel.

A disponibilidade do Cloud Sync depende do tipo da sua conta:
- [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) – sincroniza [Favorites](../web/web-favorites.md) e os exibe na web.
- **OsmAnd Pro** – sincroniza [Tracks](../web/web-tracks.md), Favorites e [Backups](#my-data), e desbloqueia acesso completo na web aos dados em nuvem.

![Web Track](@site/static/img/web/web_track_start.png) ![Web Track](@site/static/img/web/web_track_pro.png)

### OsmAnd Cloud {#osmand-cloud}

Quando você está logado, a seção **OsmAnd Cloud** aparece em Menu → Settings e inclui Changes e Trash.

A opção **Changes** mostra uma lista cronológica de arquivos armazenados na sua conta **OsmAnd Cloud**. Os itens são agrupados por mês e incluem o nome do arquivo, o tipo de alteração (por exemplo, added, modified or deleted), o horário da última atualização e o dispositivo que o criou. Para cada entrada, você pode abrir o menu de três pontos e escolher *Download* para salvar o arquivo selecionado no seu computador, ou *Delete*.

A opção **Trash** contém arquivos que foram excluídos do **OsmAnd Cloud**. A lista também é agrupada por mês e mostra quando cada arquivo foi removido e de qual dispositivo. Use o menu de três pontos ao lado de um arquivo para *Download* uma cópia, *Restore from trash* (retornar o arquivo para o **OsmAnd Cloud** para que fique disponível novamente nos seus dados), ou *Delete immediately* para removê-lo permanentemente. Isso ajuda a prevenir perda acidental de dados, enquanto ainda permite liberar espaço de armazenamento em nuvem quando você tem certeza de que um arquivo não é mais necessário. Você também pode limpar todos os itens excluídos de uma vez clicando no ícone da Trash no cabeçalho do painel Trash. Isso abre a caixa de diálogo **Empty trash**, onde você confirma a exclusão para remover permanentemente todos os arquivos da Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

### Connected Apps {#connected-apps}

A seção **Connected Apps** permite vincular serviços externos à sua conta OsmAnd. Atualmente, oferece suporte à integração com [Garmin Connect™](https://connect.garmin.com/app/), que permite a sincronização automática de atividades Garmin. Para abri-la, vá para: *OsmAnd Web Map → Account → Connected apps*.

A integração com o Garmin Connect está disponível apenas para usuários do [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/). Se você não tiver uma assinatura Pro ativa, selecionar o item Garmin Connect abrirá a página de Preços.

Para conectar sua conta Garmin Connect™, clique em **Connect**. Você será redirecionado para a página de autorização da Garmin, onde precisará fazer login e conceder acesso aos seus dados do Garmin Connect™. Durante a autorização, você pode ativar a sincronização de atividades recentes para importar dados dos últimos 30 dias. Atividades com mais de 30 dias não podem ser importadas automaticamente.

Após a conexão, o OsmAnd cria uma pasta dedicada do Garmin Connect na [seção Tracks](./web-tracks.md) e começa a importar atividades automaticamente. Novas atividades registradas no Garmin Connect™ são adicionadas a esta pasta sem importação manual. A pasta também é sincronizada com os aplicativos móveis do OsmAnd quando o [OsmAnd Cloud](../personal/osmand-cloud.md) está ativado.

O menu do Garmin Connect contém duas seções: **My data** e **Settings**. Em My data, você pode visualizar o número de atividades sincronizadas, abrir a última atividade recuperada ou abrir a página de Atividades do Garmin Connect™ usando o botão **View on Garmin Connect™**. Em Settings, você pode configurar quais tipos de atividade devem ser sincronizados usando a opção Activities to sync.

As atividades são agrupadas em categorias como Ciclismo, Caminhada e Corrida, Esportes Aquáticos e Esportes de Inverno e Outros. Tipos de atividade individuais podem ser ativados ou desativados. Por padrão, todos os tipos de atividade suportados são selecionados após a conexão.

Para desconectar sua conta Garmin Connect™, vá para *Settings → Disconnect* e confirme a ação. As trilhas importadas anteriormente permanecem na pasta Garmin Connect, mas novas atividades não serão mais sincronizadas.

![Garmin Connect](@site/static/img/web/garmin_connect_new.png) ![Garmin Connect](@site/static/img/web/garmin_connect_2_new.png)


## Solução de Problemas {#troubleshooting}

### Reset Password {#reset-password}

Se você não se lembrar da sua senha, use o link **I don’t have or forgot password** na caixa de diálogo de login. Isso abre o painel **Change or reset password**. Insira o endereço de e-mail que você usou para criar sua conta e clique em **Continue**. Uma mensagem com um código de verificação é enviada para este e-mail. Na próxima tela, digite o código de verificação e sua nova senha, depois selecione **Continue** para confirmar. Quando o código for aceito, sua senha é atualizada e você pode fazer login no OsmAnd Web com as novas credenciais.

![Web Account](@site/static/img/web/web_password.png)

### Change Email Address {#change-email-address}

Para atualizar seu endereço de e-mail,
Vá para *General Menu → Account → Email → ⋮ → Change email*

A caixa de diálogo Change email aparece. Um código de verificação é enviado para o endereço de e-mail atual. Insira este código no campo **Code from Old Email**, especifique o novo endereço em **New Email**, depois selecione **Next**. Por razões de segurança, uma mensagem de confirmação é enviada para seu novo endereço de e-mail informando que o e-mail da conta foi atualizado.

![Web Account](@site/static/img/web/web_email_new.png)

### Logout and Delete Account {#logout-and-delete}

![Web Account](@site/static/img/web/web_logout_new.png)

O painel Conta OsmAnd contém controles para encerrar a sessão web atual e remover permanentemente a conta.

Para sair, abra a Conta OsmAnd e use o botão **Logout** no canto superior direito do painel (ícone com uma seta saindo de um quadrado). Selecionar Logout fecha o painel da conta e encerra a sessão ativa no site.

Para excluir uma conta, selecione **Delete account** na parte inferior do painel Conta OsmAnd. Uma caixa de diálogo de confirmação aparece com a mensagem *“Are you sure you want to do this?”* e uma breve explicação de que todos os dados e detalhes da conta serão removidos do **OsmAnd Cloud** e dispositivos secundários perderão acesso a recursos pagos. Um código de verificação é enviado para o endereço de e-mail da conta. Insira o código no campo Code from Email e escolha **DELETE THIS ACCOUNT** para completar o processo. Esta operação é permanente e não pode ser desfeita.

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

- [Introduction](./web-overview.md)
- [Cross-Platform Purchases](../purchases/cross.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Tracks](./web-tracks.md)