---
source-hash: 2c18098f94d113417dbc7c36dee6af4769f8e0f98a71713649f8f3d246f92e77
sidebar_position: 2
title: Compras e Pagamentos
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Compras entre plataformas {#cross-platform-purchases}

**OsmAnd Pro** e **Maps+** (*Todos os Mapas do Mundo* para iOS) são **assinaturas entre plataformas** disponíveis para Android e iOS a partir do OsmAnd 5.0. Multiplataforma significa que, se você comprar uma assinatura, por exemplo, em uma das lojas Android (Google Play, Huawei AppGallery), também poderá usá-la no iOS e na versão web.

- A assinatura entre plataformas pode ser usada em vários dispositivos e plataformas **se vinculada à mesma conta OsmAnd Cloud**.

- Compras únicas, como **OsmAnd+** (Android) e compras específicas da loja, não são transferíveis entre plataformas.

- Você pode usar o OsmAnd Pro em até 6 dispositivos, mesmo que eles executem sistemas operacionais diferentes.

- Sempre certifique-se de usar a mesma conta OsmAnd Cloud em todos os dispositivos para acessar suas compras.

- Para mais detalhes, consulte: [Compras Android](../purchases/android.md), [Compras iOS](../purchases/ios.md) e [Portal de Mapas OsmAnd](https://www.osmand.net/map).


### Como vincular sua compra à conta OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Se você **não tem** uma conta OsmAnd Cloud:

    - Abra o aplicativo OsmAnd no dispositivo onde você fez a compra.
    - Vá para *Menu → Configurações → OsmAnd Cloud*.
    - Toque em **Criar nova conta**.
    - Após criar a conta, vá para *Menu OsmAnd → Configurações → Compras*.
    - Toque em **Restaurar compras** para vincular sua compra a uma nova conta.

2. Se você **já tem** uma conta OsmAnd Cloud:

    - Certifique-se de estar logado na conta OsmAnd Cloud no dispositivo onde você fez a compra.
    - Navegue até *Menu OsmAnd → Configurações → OsmAnd Cloud → Já tenho uma conta*.
    - Após fazer login em sua conta, vá para *Menu OsmAnd → Configurações → Compras*.
    - Toque em **Restaurar compras** para sincronizar a compra com sua conta.


> Para mais informações, leia o artigo [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform).


## Como comprar e restaurar o OsmAnd na Huawei AppGallery sem os Serviços Móveis Huawei {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Comprar OsmAnd**:
   - Primeiro, ative a opção *Instalar de Fontes Desconhecidas* nas configurações do seu dispositivo. Geralmente, você pode encontrar essa opção em **Configurações → Segurança**.
   - Instale o [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), que é essencial para a compatibilidade do aplicativo.
   - Em seguida, abra a *Huawei AppGallery* na página do [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) e baixe o aplicativo.
   - Apenas a versão gratuita está disponível para download inicialmente. Para fazer uma compra, vá para *Menu OsmAnd → Configurações → Compras* e selecione o tipo desejado.
   - Para mais detalhes, visite [esta página](https://osmand.net/docs/user/purchases/android#install-application).

2. **Restaurar compra**:
   - Para restaurar sua compra, faça login na *Huawei AppGallery* usando a mesma conta associada à sua compra do OsmAnd.
   - Verifique seu histórico de transações no [histórico de pedidos da Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Pode ser necessário atualizar a *Huawei AppGallery* e limpar o cache para evitar problemas.
   - Para restaurar suas compras, siga *Menu → Configurações → Compras → Restaurar Compras* no OsmAnd.
   - Para mais informações, consulte o artigo [Compras Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instruções para configurar os Serviços Móveis Huawei.
- Como comprar OsmAnd sem HMS Core.
- Restaurar compras na Huawei AppGallery.
-->

## A loja Amazon está fechando - o que fazer {#amazon-store-is-closing---what-to-do}

Em **20 de agosto de 2025**, a Amazon encerrará a Amazon Appstore para dispositivos Android. Você pode ler o anúncio oficial [aqui](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

Se você fez compras via Amazon, precisará **transferir suas assinaturas (Pro, Maps+) ou compras no aplicativo (Maps+)** para outra plataforma.

➡️ Atualmente, [a transferência entre plataformas é possível para assinaturas e compras no aplicativo](../purchases/cross.md).
❗ **OsmAnd+** (aplicativo autônomo) não pode ser transferido entre plataformas via conta OsmAnd Cloud. Para assistência, entre em contato com **support@osmand.net**.

## Como restaurar a compra do plugin Topografia (anteriormente Curvas de Nível) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Para restaurar o [plugin Topografia](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

1. Faça login na mesma conta do Google Play usada para comprar o plugin Topografia e instale [o aplicativo](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Se o botão *Instalar* estiver inativo, certifique-se de que os aplicativos Google Play e OsmAnd estejam atualizados. Limpe o cache, reinicie o dispositivo e tente instalar o plugin novamente.
3. Após a instalação, ative o plugin Topografia no *[menu OsmAnd → Plugins](../plugins/topography.md)*, baixe os arquivos necessários em *[Mapas e Recursos](../start-with/download-maps.md#maps-and-resources)* e ative-o através do *[menu Configurar mapa](../map/configure-map-menu.md)*.


## Como identificar se o OsmAnd Unlimited está ativo {#how-to-identify-if-osmand-unlimited-is-active}

Navegue até *Menu → Baixar mapas* e toque no contador de mapas (o campo rotulado *Versão gratuita. X downloads restantes*). Se o OsmAnd Unlimited estiver ativo, a exibição mostrará o armazenamento restante do dispositivo em vez do número de downloads gratuitos.


## Posso obter a versão completa do OsmAnd como um aplicativo separado para iOS? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Para iOS, existe apenas uma versão do OsmAnd disponível. Para acessar a versão completa, você precisa desbloquear funções adicionais por meio de compras no aplicativo.


## O que significam 5 ou 7 downloads gratuitos? {#what-do-5-or-7-free-downloads-mean}

Você tem permissão para 5 downloads gratuitos no iOS ou 7 no Android. Cada download, seja um mapa, uma atualização (atualizações de mapas contam como downloads), pacotes de voz ou outros itens, reduz a contagem disponível. Observe que a remoção de itens de seus downloads não restaura a contagem de downloads gratuitos.


## Como posso obter downloads de mapas adicionais no OsmAnd Gratuito? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Se você usou todos os 5 (iOS) ou 7 (Android) downloads gratuitos, pode receber 3 downloads extras ao *assinar a lista de e-mails*. Um banner com a opção de assinatura aparecerá assim que todos os downloads gratuitos forem usados.


## Código de Verificação para OsmAnd Cloud Não Recebido {#verification-code-for-osmand-cloud-not-received}

Se você não receber o **código de verificação** ao criar uma conta **OsmAnd Cloud**, siga estas etapas para resolver o problema:

1. Verifique seu endereço de e-mail.
    Certifique-se de ter inserido o **endereço de e-mail correto**. O e-mail deve corresponder ao usado para comprar o **OsmAnd Pro** ou registrar sua conta **OsmAnd Cloud**.

2. Verifique as pastas de spam.
    Às vezes, o e-mail de verificação pode ser filtrado como spam. Procure um e-mail do **OsmAnd** em suas pastas de **Spam**, **Lixo** ou **Promoções**.

3. Aguarde a chegada do código.
    Em alguns casos, o e-mail do código de ativação pode estar **atrasado**. Evite **múltiplas tentativas de ativação** em um curto período, pois isso pode causar atrasos adicionais.

4. Tente reenviar o código.
    Retorne à **tela de login do OsmAnd Cloud** e selecione **Reenviar Código**, se disponível. Aguarde alguns minutos antes de solicitar outro código.

5. Verifique as restrições do servidor de e-mail.
    Se você estiver usando um **domínio de e-mail corporativo ou personalizado**, verifique com seu **provedor de e-mail** para garantir que o e-mail não esteja sendo bloqueado. Considere usar um serviço de e-mail diferente (por exemplo, Gmail, Outlook) se os problemas persistirem.

<!--
## Compras e Pagamentos {#purchases--payments}

- Compra Não Exibida
- Compra Não Restaurando
- Problemas de Pagamento
- Política de Reembolso
- Soluções passo a passo para problemas com compras.
- Instruções para limpar o cache do Google Play, Huawei AppGallery.
- O que fazer se a compra não aparecer ou a transação falhar.
- Compra não aparecendo - recomendações sobre como verificar sua conta e restaurar suas compras.
- Problemas de pagamento - instruções para entrar em contato com o Suporte do Google Play em caso de problemas de pagamento.


## FAQ {#faq}

- Posso transferir uma compra entre Android e iOS?
- Posso usar uma compra em vários dispositivos?
- Por que a compra não aparece?
- Onde posso encontrar detalhes de pagamento?
- Posso transferir o OsmAnd+ entre Android e iOS?
- Como posso restaurar compras após reinstalar o aplicativo?
- O que é o OsmAnd Pro e quais são suas vantagens?
- Posso ativar minha assinatura sem o Google Play?
- Posso compartilhar minha compra com minha família?
- Como transfiro o OsmAnd+ para outro telefone?
- Por que minha compra não aparece após a reinstalação?
- Por que não consigo retomar minha compra?
- Como sei se minha assinatura está ativa?
- Posso usar uma compra em vários dispositivos?
- Posso comprar o OsmAnd sem o Google Play?
- Onde posso encontrar meus detalhes de pagamento?
-->