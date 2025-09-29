---
source-hash: 803b22736228c5b37a1814163faeb441138781434f1ba2a3069b7668f1ffe213
sidebar_position: 4
title: Compras entre plataformas
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



## Compras entre plataformas suportadas {#supported-cross-platform-purchases}

Os seguintes produtos OsmAnd atualmente suportam o uso em várias plataformas (Android, iOS e Web):

- Assinatura **OsmAnd Pro**
- Assinatura **Maps+**
- Compra única no aplicativo **Maps+**

A partir da **versão 5.1 do OsmAnd**, lançada em comemoração ao nosso **15º aniversário**, o acesso entre plataformas foi estendido ao **Maps+** (anteriormente conhecido como *Ilimitado*). Anteriormente, apenas a assinatura [OsmAnd Pro](../personal/osmand-cloud.md#cross-platform) era multiplataforma.

Para ativar o acesso entre plataformas, as compras devem ser vinculadas à sua conta [OsmAnd Cloud](../personal/osmand-cloud.md#login).
Você pode comparar todos os produtos OsmAnd aqui: [diferença entre compras](https://osmand.net/docs/user/purchases/android/#difference-between-purchases)

| **Tipo de Produto** | **Multiplataforma** | **Notas** |
|:-------------------------------|:--------------------|:--------------------------------------------------------------------------|
| **OsmAnd Pro** (assinatura) | ✔ | Funciona após o login no OsmAnd Cloud no Android, iOS e Web quando vinculado ao Cloud. |
| **Maps+** (assinatura) | ✔ | Utilizável em todas as plataformas, mas deve ser ativado via OsmAnd Cloud **no dispositivo de compra**. |
| **Maps+** (compra única) | ✔ | Utilizável em todas as plataformas, mas deve ser ativado via OsmAnd Cloud **no dispositivo de compra**. |
| **OsmAnd+** (aplicativo autônomo) | ✘ | Não transferível por padrão entre plataformas, requer registro manual da compra na conta OsmAnd Cloud. Para assistência, entre em contato com support@osmand.net. |


## Como funciona {#how-it-works}

Para usar sua compra **OsmAnd Pro**, **Maps+** em diferentes plataformas (Android, iOS ou Web), você precisa **vinculá-la à sua conta OsmAnd Cloud**.

### Vincule sua compra {#link-your-purchase}

![Cloud link](@site/static/img/purchases/cloud_activation.png)

Execute esta etapa no **dispositivo onde você fez a compra** (Android ou iOS, versão 5.0 ou posterior):

1. Vá para sua conta [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   _Menu → Configurações → OsmAnd Cloud → Criar nova conta / Já tenho uma conta_

2. Uma vez logado, sua compra **Pro** ou **Maps+** será automaticamente vinculada à sua **conta Cloud** e marcada como **multiplataforma**, *se não tiver sido vinculada anteriormente a outra conta.*



### Ativar em outro dispositivo ou plataforma {#activate-on-another-device-or-platform}

![Maps+ cross](@site/static/img/purchases/cross_purchase.png)
![Maps+ cross](@site/static/img/purchases/cross_purchase_1.png)

1. Vá para sua conta [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   *Menu → Configurações → OsmAnd Cloud →* ***Entrar com a mesma conta***

2. Em seguida, vá para:
   *Menu → Configurações → Compras*
   Sua compra **Pro ou Maps+** vinculada agora deve estar disponível.


### Solução de problemas {#troubleshooting}

Se você não vir sua compra listada:

1. Toque em *Menu → Configurações → Compras → Restaurar compras*
2. Certifique-se de que você está logado na **mesma conta OsmAnd Cloud** usada no dispositivo original.

Se o problema persistir, entre em contato com **support@osmand.net** e inclua:

- Seu e-mail do OsmAnd Cloud.
- Plataforma(s) e loja(s) de aplicativos usadas.
- Tipo de compra (Pro / Maps+ única / Maps+ assinatura).


### Compras e várias contas {#purchases-and-multiple-accounts}

Uma compra multiplataforma é vinculada à conta OsmAnd Cloud que foi ativada pela última vez no dispositivo que possui o recibo de compra original (da App Store ou Google Play). Se você sair da sua conta principal e entrar em uma nova conta neste dispositivo, o sistema transfere automaticamente a licença para a nova conta. Como resultado, sua conta OsmAnd Cloud original perde seu status de compras em outras plataformas, pois a licença só pode estar ativa em uma conta OsmAnd Cloud por vez. Mais informações estão [aqui](../troubleshooting/purchases_payments.md#purchase-association-with-multiple-osmand-cloud-accounts).


## Exemplo {#example}

Você comprou o **Maps+** como uma compra única no aplicativo na versão gratuita do OsmAnd na [Amazon Appstore](https://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8).
Mais tarde, você decide mudar para um iPhone e quer usar o **Maps+** com a [versão iOS do OsmAnd](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257).

Para ativar sua compra do Maps+ no iOS:

1. Abra a **versão Amazon** do aplicativo OsmAnd em seu dispositivo original.
2. Faça login em sua conta [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   *Menu → Configurações → OsmAnd Cloud → Criar nova conta / Já tenho uma conta*
3. Instale o OsmAnd em seu iPhone na [App Store](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257)
4. Faça login na **mesma conta OsmAnd Cloud** em seu iPhone.
5. Vá para *Menu → Configurações → Compras* e confirme se o **Maps+** está listado como ativo.

Isso conclui a ativação multiplataforma de sua compra. Agora você pode continuar usando o **Maps+** em seu novo dispositivo.

Aproveite o uso do Maps+/Pro em todas as plataformas!


## Artigos relacionados {#related-articles}

- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Solução de problemas de compras](../troubleshooting/purchases_payments.md)
- [Diferença entre compras Android](./android.md#difference-between-purchases-android)
- [Diferença entre compras iOS](./ios.md#difference-between-purchases-ios)