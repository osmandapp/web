---
source-hash: 803b22736228c5b37a1814163faeb441138781434f1ba2a3069b7668f1ffe213
sidebar_position: 4
title:  Çapraz Platform Satın Alımları
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



## Desteklenen Çapraz Platform Satın Alımları {#supported-cross-platform-purchases}

Aşağıdaki OsmAnd ürünleri şu anda birden fazla platformda (Android, iOS ve Web) kullanımı desteklemektedir:

- **OsmAnd Pro** aboneliği
- **Maps+** aboneliği
- **Maps+** tek seferlik uygulama içi satın alma

**15. yıl dönümümüz** kutlamalarıyla yayınlanan **OsmAnd sürüm 5.1**'den itibaren, çapraz platform erişimi **Maps+**'a (önceden *Sınırsız* olarak biliniyordu) genişletilmiştir. Daha önce, yalnızca [OsmAnd Pro](../personal/osmand-cloud.md#cross-platform) aboneliği çapraz platformdu.

Çapraz platform erişimini etkinleştirmek için satın almalarınızın [OsmAnd Cloud](../personal/osmand-cloud.md#login) hesabınıza bağlı olması gerekir.
Tüm OsmAnd ürünlerini buradan karşılaştırabilirsiniz: [satın alımlar arasındaki fark](https://osmand.net/docs/user/purchases/android/#difference-between-purchases)

| **Ürün Türü**                 | **Çapraz Platform** | **Notlar**                                                                 |
|-------------------------------|--------------------|--------------------------------------------------------------------------|
| **OsmAnd Pro** (abonelik)     | ✔                  | Android, iOS ve Web'de OsmAnd Cloud'a giriş yaptıktan sonra, Cloud'a bağlandığında çalışır. |
| **Maps+** (abonelik)          | ✔                  | Tüm platformlarda kullanılabilir, ancak **satın alma cihazında** OsmAnd Cloud aracılığıyla etkinleştirilmelidir.     |
| **Maps+** (tek seferlik satın alma) | ✔                  | Tüm platformlarda kullanılabilir, ancak **satın alma cihazında** OsmAnd Cloud aracılığıyla etkinleştirilmelidir. |
| **OsmAnd+** (bağımsız uygulama) | ✘                  | Varsayılan olarak platformlar arasında aktarılamaz, OsmAnd Cloud hesabına manuel satın alma kaydı gerektirir. Yardım için support@osmand.net ile iletişime geçin. |


## Nasıl Çalışır {#how-it-works}

**OsmAnd Pro**, **Maps+** satın alımınızı farklı platformlarda (Android, iOS veya Web) kullanmak için, onu **OsmAnd Cloud hesabınıza bağlamanız** gerekir.

### Satın Alımınızı Bağlayın {#link-your-purchase}

![Cloud link](@site/static/img/purchases/cloud_activation.png)

Bu adımı **satın alımı yaptığınız cihazda** (Android veya iOS, sürüm 5.0 veya üzeri) gerçekleştirin:

1. [OsmAnd Cloud hesabınıza](../personal/osmand-cloud.md#login) gidin:
   _Menü → Ayarlar → OsmAnd Cloud → Yeni hesap oluştur / Zaten bir hesabım var_

2. Giriş yaptıktan sonra, **Pro** veya **Maps+** satın alımınız otomatik olarak **Cloud hesabınıza** bağlanacak ve **çapraz platform** olarak işaretlenecektir, *daha önce başka bir hesaba bağlı değilse.*



### Başka Bir Cihazda veya Platformda Etkinleştirin {#activate-on-another-device-or-platform}

![Maps+ cross](@site/static/img/purchases/cross_purchase.png)
![Maps+ cross](@site/static/img/purchases/cross_purchase_1.png)

1. [OsmAnd Cloud hesabınıza](../personal/osmand-cloud.md#login) gidin:
   *Menü → Ayarlar → OsmAnd Cloud →* ***Aynı hesapla giriş yapın***

2. Ardından şuraya gidin:
   *Menü → Ayarlar → Satın Alımlar*
   Bağlı **Pro veya Maps+** satın alımınız artık kullanılabilir olmalıdır.


### Sorun Giderme {#troubleshooting}

Satın alımınız listede görünmüyorsa:

1. *Menü → Ayarlar → Satın Alımlar → Satın alımları geri yükle* öğesine dokunun
2. Orijinal cihazda kullanılan **aynı OsmAnd Cloud hesabına** giriş yaptığınızdan emin olun.

Sorun devam ederse, **support@osmand.net** ile iletişime geçin ve şunları ekleyin:

- OsmAnd Cloud e-postanız.
- Kullanılan platform(lar) ve uygulama mağazası(ları).
- Satın alma türü (Pro / Maps+ tek seferlik / Maps+ aboneliği).


### Satın Alımlar ve Birden Fazla Hesap {#purchases-and-multiple-accounts}

Çapraz platform satın alma, orijinal satın alma makbuzunu (App Store veya Google Play'den) tutan cihazda en son etkinleştirilen OsmAnd Cloud hesabına bağlanır. Birincil hesabınızdan çıkış yapıp bu cihazda yeni bir hesaba giriş yaparsanız, sistem lisansı otomatik olarak yeni hesaba aktarır. Sonuç olarak, orijinal OsmAnd Cloud hesabınız diğer platformlardaki satın alma durumunu kaybeder, çünkü lisans aynı anda yalnızca bir OsmAnd Cloud hesabında etkin olabilir. Daha fazla bilgi [burada](../troubleshooting/purchases_payments.md#purchase-association-with-multiple-osmand-cloud-accounts).


## Örnek {#example}

[Amazon Appstore](https://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8)'dan OsmAnd'ın ücretsiz sürümünde **Maps+**'ı tek seferlik uygulama içi satın alma olarak satın aldınız.
Daha sonra bir iPhone'a geçmeye karar verdiniz ve [OsmAnd iOS sürümü](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257) ile **Maps+**'ı kullanmak istiyorsunuz.

Maps+ satın alımınızı iOS'ta etkinleştirmek için:

1. Orijinal cihazınızda OsmAnd uygulamasının **Amazon sürümünü** açın.
2. [OsmAnd Cloud hesabınıza](../personal/osmand-cloud.md#login) giriş yapın:
   *Menü → Ayarlar → OsmAnd Cloud → Yeni hesap oluştur / Zaten bir hesabım var*
3. iPhone'unuza [App Store](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257)'dan OsmAnd'ı yükleyin
4. iPhone'unuzda **aynı OsmAnd Cloud hesabına** giriş yapın.
5. *Menü → Ayarlar → Satın Alımlar* bölümüne gidin ve **Maps+**'ın etkin olarak listelendiğini onaylayın.

Bu, satın alımınızın çapraz platform etkinleştirmesini tamamlar. Artık yeni cihazınızda **Maps+**'ı kullanmaya devam edebilirsiniz.

Maps+/Pro'yu platformlar arası kullanmanın keyfini çıkarın!


## İlgili Makaleler {#related-articles}

- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Satın alma sorunlarını giderme](../troubleshooting/purchases_payments.md)
- [Android satın alımları arasındaki fark](./android.md#difference-between-purchases-android)
- [iOS satın alımları arasındaki fark](./ios.md#difference-between-purchases-ios)