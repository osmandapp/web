---
source-hash: 212ac4c80976038c3369ba42db713fb837385f1080dd80dd1129601cbee0ccec
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

**OsmAnd Pro** e **Maps+** (*Todos os Mapas Mundiais* para iOS) são **assinaturas entre plataformas** disponíveis para Android e iOS a partir do OsmAnd 5.0. Multiplataforma significa que se você comprar uma assinatura, por exemplo, em uma das lojas Android (Google Play, Huawei AppGallery), você também poderá usá-la no iOS e na versão web.

- A assinatura multiplataforma pode ser usada em vários dispositivos e plataformas **se vinculada à mesma conta OsmAnd Cloud**.

- Compras únicas, como **OsmAnd+** (Android) e compras específicas da loja, não são transferíveis entre plataformas.

- Você pode usar o OsmAnd Pro em até 6 dispositivos, mesmo que eles executem sistemas operacionais diferentes.

- Sempre certifique-se de usar a mesma conta OsmAnd Cloud em todos os dispositivos para acessar suas compras.

- Para mais detalhes, consulte: [Compras Android](../purchases/android.md), [Compras iOS](../purchases/ios.md) e [Portal de Mapas OsmAnd](https://www.osmand.net/map).


### Como vincular sua compra à conta OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Se você **não tiver** uma conta OsmAnd Cloud:

    - Abra o aplicativo OsmAnd no dispositivo onde você fez a compra.
    - Vá para *Menu → Configurações → OsmAnd Cloud*.
    - Toque em **Criar nova conta**.
    - Após criar a conta, vá para *Menu OsmAnd → Configurações → Compras*.
    - Toque em **Restaurar compras** para vincular sua compra a uma nova conta.

2. Se você **já tiver** uma conta OsmAnd Cloud:

    - Certifique-se de estar logado na conta OsmAnd Cloud no dispositivo onde você fez a compra.
    - Navegue até *Menu OsmAnd → Configurações → OsmAnd Cloud → Já tenho uma conta*.
    - Após fazer login em sua conta, vá para *Menu OsmAnd → Configurações → Compras*.
    - Toque em **Restaurar compras** para sincronizar a compra com sua conta.


> Para mais informações, leia o artigo [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform).


## Como comprar e restaurar o OsmAnd na Huawei AppGallery sem os Serviços Móveis Huawei {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Comprar OsmAnd**:
   - Primeiro, ative *Instalar de Fontes Desconhecidas* nas configurações do seu dispositivo. Você geralmente pode encontrar esta opção em **Configurações → Segurança**.
   - Instale o [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), que é essencial para a compatibilidade do aplicativo.
   - Em seguida, abra a *Huawei AppGallery* na página [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) e baixe o aplicativo.
   - Apenas a versão gratuita está disponível para download inicialmente. Para fazer uma compra, vá para *Menu OsmAnd → Configurações → Compras* e selecione o tipo desejado.
   - Para mais detalhes, visite [esta página](https://osmand.net/docs/user/purchases/android#install-application).

2. **Restaurar compra**:
   - Para restaurar sua compra, faça login na *Huawei AppGallery* usando a mesma conta associada à sua compra do OsmAnd.
   - Verifique seu histórico de transações no [histórico de pedidos da Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Pode ser necessário atualizar a *Huawei AppGallery* e limpar o cache para evitar problemas.
   - Para restaurar suas compras, siga *Menu → Configurações → Compras → Restaurar Compras* no OsmAnd.
   - Para mais informações, consulte o artigo [Compras Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructions for setting up Huawei Mobile Services.
- How to buy OsmAnd without HMS Core.
- Restore purchases in the Huawei AppGallery.
-->

## A loja Amazon está fechando - o que fazer {#amazon-store-is-closing---what-to-do}

Estamos trabalhando em uma solução para transferir compras feitas através da Amazon para outras plataformas.
Atualmente, [é possível transferir assinaturas e compras no aplicativo](../purchases/cross.md).
A opção de transferir o aplicativo OsmAnd+ ainda está em desenvolvimento.

Em 20 de agosto de 2025, a Amazon fechará a Amazon Appstore para dispositivos Android — detalhes [aqui](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).


## Como restaurar a compra do plugin Topografia (anteriormente Linhas de Contorno) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Para restaurar o [plugin Topografia](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

1. Faça login na mesma conta do Google Play usada para comprar o plugin Topografia e instale [o aplicativo](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Se o botão *Instalar* estiver inativo, certifique-se de que os aplicativos Google Play e OsmAnd estejam atualizados. Limpe o cache, reinicie o dispositivo e tente instalar o plugin novamente.
3. Após a instalação, ative o plugin Topografia no *[menu OsmAnd → Plugins](../plugins/topography.md)*, baixe os arquivos necessários em *[Mapas e Recursos](../start-with/download-maps.md#maps-and-resources)* e ative-o através do *[menu Configurar mapa](../map/configure-map-menu.md)*.


## Como identificar se o OsmAnd Unlimited está ativo {#how-to-identify-if-osmand-unlimited-is-active}

Navegue até *Menu → Baixar mapas* e toque no contador de mapas (o campo rotulado *Versão gratuita. X downloads restantes*). Se o OsmAnd Unlimited estiver ativo, a exibição mostrará o armazenamento restante do dispositivo em vez do número de downloads gratuitos.


## O que significam 5 ou 7 downloads gratuitos? {#what-do-5-or-7-free-downloads-mean}

Você tem permissão para 5 downloads gratuitos no iOS ou 7 no Android. Cada download, seja um mapa, uma atualização (atualizações de mapa contam como downloads), pacotes de voz ou outros itens, reduz a contagem disponível. Observe que remover itens de seus downloads não restaura a contagem de downloads gratuitos.


## Como posso obter downloads de mapas adicionais no OsmAnd Gratuito? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Se você usou todos os 5 (iOS) ou 7 (Android) downloads gratuitos, você pode receber 3 downloads extras ao *assinar a lista de e-mails*. Um banner com a opção de assinatura aparecerá assim que todos os downloads gratuitos forem usados.


## Código de verificação para OsmAnd Cloud não recebido {#verification-code-for-osmand-cloud-not-received}

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
## Purchases & Payments {#purchases--payments}

- Purchase Not Showing
- Purchase Not Restoring
- Payment Issues
- Refund Policy
- Step-by-step solutions to problems with purchases.
- Instructions for clearing the cache of Google Play, Huawei AppGallery.
- What to do if the purchase does not appear or the transaction fails.
- Purchase not showing up - recommendations on how to check your account and restore your purchases.
- Payment issues - instructions for contacting Google Play Support in case of paymentissues.


## FAQ {#faq}

- Can I transfer a purchase between Android and iOS?
- Can I use a purchase on multiple devices?
- Why does the purchase not appear?
- Where can I find payment details?
- Can I transfer OsmAnd+ between Android and iOS?
- How can I restore purchases after reinstalling the app?
- What is OsmAnd Pro and what are its advantages?
- Can I activate my subscription without Google Play?
- Can I share my purchase with my family?
- How do I transfer OsmAnd+ to another phone?
- Why doesn't my purchase appear after reinstalling?
- Why can't I resume my purchase?
- How do I know if my subscription is active?
- Can I use one purchase on multiple devices?
- Can I buy OsmAnd without Google Play?
- Where can I find my payment details?
-->