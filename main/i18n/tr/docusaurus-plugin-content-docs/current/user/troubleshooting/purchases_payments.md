---
source-hash: fc1b2c0235716aa50473c8f887e1a5bd1752fd011931da9e6726f958a0e3fca9
sidebar_position: 2
title:  Satın Almalar ve Ödemeler
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Çapraz Platform Satın Almaları {#cross-platform-purchases}

**OsmAnd Pro** ve **Maps+** (iOS için *Tüm Dünya Haritaları*), OsmAnd 5.0'dan itibaren Android ve iOS için mevcut olan **çapraz platform abonelikleridir**. Çapraz platform, örneğin Android mağazalarından (Google Play, Huawei AppGallery) birinden bir abonelik satın alırsanız, bunu iOS'ta ve web sürümünde de kullanabileceğiniz anlamına gelir.

- Çapraz platform aboneliği, **aynı OsmAnd Cloud hesabına bağlıysa** birden fazla cihazda ve platformda kullanılabilir.

- **OsmAnd+** (Android) gibi tek seferlik satın almalar ve mağazaya özel satın almalar platformlar arasında aktarılamaz.

- OsmAnd Pro'yu farklı işletim sistemlerinde çalışsalar bile 6 cihaza kadar kullanabilirsiniz.

- Satın alımlarınıza erişmek için her zaman tüm cihazlarda aynı OsmAnd Cloud hesabını kullandığınızdan emin olun.

- Daha fazla ayrıntı için bakınız: [Android satın alımları](../purchases/android.md), [iOS satın alımları](../purchases/ios.md), [Çapraz platform satın alımları](../purchases/cross.md) ve [OsmAnd Harita Portalı](../purchases/web.md).


### Satın alımınızı OsmAnd Cloud hesabına nasıl bağlarsınız {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Bir OsmAnd Cloud hesabınız **yoksa**:

    - Satın alımı yaptığınız cihazda OsmAnd uygulamasını açın.
    - *Menü → Ayarlar → OsmAnd Cloud* yolunu izleyin.
    - **Yeni hesap oluştur**'a dokunun.
    - Hesabı oluşturduktan sonra *OsmAnd Menü → Ayarlar → Satın Almalar* yolunu izleyin.
    - Satın alımınızı yeni bir hesaba bağlamak için **Satın alımları geri yükle**'ye dokunun.

2. Zaten bir OsmAnd Cloud hesabınız **varsa**:

    - Satın alımı yaptığınız cihazda OsmAnd Cloud hesabına giriş yaptığınızdan emin olun.  
    - *OsmAnd Menü → Ayarlar → OsmAnd Cloud → Zaten bir hesabım var* yolunu izleyin.
    - Hesabınıza giriş yaptıktan sonra *OsmAnd Menü → Ayarlar → Satın Almalar* yolunu izleyin.
    - Satın alımı hesabınızla senkronize etmek için **Satın alımları geri yükle**'ye dokunun.


> Daha fazla bilgi için [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform), [Çapraz platform satın alımları](../purchases/cross.md) makalelerini okuyun.


### Satın Alımın Birden Fazla OsmAnd Cloud Hesabıyla İlişkilendirilmesi {#purchase-association-with-multiple-osmand-cloud-accounts}


_Maps+_ ve _Pro_ gibi çapraz platform satın alımları, orijinal satın alma makbuzunu (App Store veya Google Play'den) tutan cihazda en son etkinleştirilen OsmAnd Cloud hesabına bağlanır. Bu cihazdaki bir kullanıcı birincil hesabından (`OsmAnd Cloud hesabı A`) çıkış yapıp yeni bir hesaba (`OsmAnd Cloud hesabı B`) giriş yaparsa, OsmAnd sistemi lisansı otomatik olarak yeni `OsmAnd Cloud hesabı B`'ye aktarır. Sonuç olarak, orijinal OsmAnd Cloud hesabınız diğer platformlarda satın alma durumunu kaybeder, çünkü lisans aynı anda yalnızca bir OsmAnd Cloud hesabında etkin olabilir.

Teknik olarak bu şu şekilde çalışır: satın almanın kendisi bir OsmAnd hesabına değil, Apple Kimliğinize veya Google Hesabınıza aittir. Satın alımın yapıldığı cihazdaki OsmAnd uygulaması, sunucumuza şu anda hangi OsmAnd Cloud hesabının etkin olduğunu bildirir. Sunucu da bu hesaba çapraz platform erişimi sağlar. Bu nedenle, "ana" cihaza en son giriş yapan hesap her zaman lisansın sahibi olur.

Satın alımı doğru hesaba (`OsmAnd Cloud hesabı A`) geri yüklemek için ters işlemi yapmanız gerekir. Satın alımın yapıldığı aynı cihazda, yanlış `OsmAnd Cloud hesabı B`'den çıkış yapmanız ve tekrar `OsmAnd Cloud hesabı A`'ya giriş yapmanız gerekir. Bu işlem, sistemin satın alma makbuzunu yeniden doğrulamasını ve lisansı doğru `OsmAnd Cloud hesabı A`'ya yeniden bağlamasını sağlayarak çapraz platform durumunu geri yükleyecektir.

> Daha fazla bilgi için [Çapraz platform satın alımları](../purchases/cross.md) makalelerini okuyun.

## Huawei Mobil Servisleri Olmadan Huawei AppGallery'de OsmAnd Nasıl Satın Alınır ve Geri Yüklenir {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **OsmAnd Satın Alın**:
   - Öncelikle, cihazınızın ayarlarında *Bilinmeyen Kaynaklardan Yükle* seçeneğini etkinleştirin. Bu seçeneği genellikle **Ayarlar → Güvenlik** bölümünde bulabilirsiniz.
   - Uygulama uyumluluğu için gerekli olan [Huawei Mobil Servisleri (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/) uygulamasını yükleyin.
   - Ardından, [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) sayfasında *Huawei AppGallery*'yi açın ve uygulamayı indirin.
   - Başlangıçta yalnızca ücretsiz sürüm indirilebilir. Satın alma işlemi yapmak için OsmAnd *Menü → Ayarlar → Satın Almalar* yolunu izleyin ve gerekli türü seçin.
   - Daha fazla ayrıntı için [bu sayfayı](https://osmand.net/docs/user/purchases/android#install-application) ziyaret edin.

2. **Satın alımı geri yükle**:
   - Satın alımınızı geri yüklemek için, OsmAnd satın alımınızla ilişkili aynı hesabı kullanarak *Huawei AppGallery*'ye giriş yapın.
   - [Huawei App Gallery sipariş geçmişi](https://consumer.huawei.com/en/support/content/en-us00694318/) bölümündeki işlem geçmişinizi kontrol edin.
   - Sorunları önlemek için *Huawei AppGallery*'yi güncellemeniz ve önbelleği temizlemeniz gerekebilir.
   - Satın alımlarınızı geri yüklemek için OsmAnd'da *Menü → Ayarlar → Satın Almalar → Satın Alımları Geri Yükle* yolunu izleyin.
   - Daha fazla bilgi için [Android Satın Almaları](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app) makalesine bakın.

<!--
- Huawei Mobil Servislerini kurma talimatları.
- HMS Core olmadan OsmAnd nasıl satın alınır.
- Huawei AppGallery'deki satın alımları geri yükleyin.
-->

## Amazon mağazası kapanıyor - ne yapmalı {#amazon-store-is-closing---what-to-do}

**20 Ağustos 2025** tarihinde Amazon, Android cihazlar için Amazon Appstore'u kapatacaktır. Resmi duyuruyu [buradan](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program) okuyabilirsiniz.

Amazon üzerinden satın alma işlemleri yaptıysanız, **aboneliklerinizi (Pro, Maps+) veya uygulama içi (Maps+) satın alımlarınızı** başka bir platforma aktarmanız gerekecektir.

➡️ Şu anda, [abonelikler ve uygulama içi satın alımlar için çapraz platform aktarımı mümkündür](../purchases/cross.md).  
❗ **OsmAnd+** (bağımsız uygulama) OsmAnd Cloud hesabı aracılığıyla platformlar arasında aktarılamaz. Yardım için lütfen **support@osmand.net** adresinden iletişime geçin.

## Topografya (eski adıyla Kontur çizgileri) eklentisi satın alımını nasıl geri yüklerim {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

[Topografya eklentisini](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid) geri yüklemek için:

1. Topografya eklentisini satın almak için kullanılan aynı Google Play hesabına giriş yapın ve [uygulamayı](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid) yükleyin.
2. *Yükle* düğmesi etkin değilse, hem Google Play hem de OsmAnd uygulamalarının güncel olduğundan emin olun. Önbelleklerini temizleyin, cihazınızı yeniden başlatın ve eklentiyi tekrar yüklemeyi deneyin.
3. Kurulumdan sonra, *[OsmAnd menüsü → Eklentiler](../plugins/topography.md)* bölümünde Topografya eklentisini etkinleştirin, gerekli dosyaları *[Haritalar ve Kaynaklar](../start-with/download-maps.md#maps-and-resources)* bölümünden indirin ve *[Harita menüsünü yapılandır](../map/configure-map-menu.md)* aracılığıyla etkinleştirin.


## OsmAnd Unlimited'ın etkin olup olmadığını nasıl anlarım {#how-to-identify-if-osmand-unlimited-is-active}

*Menü → Haritaları indir* yolunu izleyin ve harita sayacına (*Ücretsiz sürüm. X indirme kaldı* etiketli alan) dokunun. OsmAnd Unlimited etkinse, görüntülenen şey ücretsiz indirme sayısı yerine kalan cihaz depolama alanı olacaktır.


## 5 veya 7 ücretsiz indirme ne anlama geliyor? {#what-do-5-or-7-free-downloads-mean}

iOS'ta 5, Android'de ise 7 ücretsiz indirmeye izin verilir. Her indirme, ister bir harita, ister bir güncelleme (harita güncellemeleri indirme olarak sayılır), ister ses paketleri veya diğer öğeler olsun, mevcut sayıyı azaltır. Lütfen, öğeleri indirmelerinizden kaldırmanın ücretsiz indirme sayısını geri getirmediğini unutmayın.


## OsmAnd Free'de ek harita indirmelerini nasıl alabilirim? {#how-can-i-get-additional-map-downloads-in-osmand-free}

5 (iOS) veya 7 (Android) ücretsiz indirmeyi kullandıysanız, *e-posta listesine abone olarak* 3 ek indirme alabilirsiniz. Tüm ücretsiz indirmeler kullanıldıktan sonra abonelik seçeneği içeren bir banner görünecektir.


## OsmAnd Cloud için Doğrulama Kodu Alınamadı {#verification-code-for-osmand-cloud-not-received}

Bir **OsmAnd Cloud** hesabı oluştururken **doğrulama kodunu** almazsanız, sorunu çözmek için aşağıdaki adımları izleyin:  

1. E-posta adresinizi kontrol edin.  
    **Doğru e-posta adresini** girdiğinizden emin olun. E-posta, **OsmAnd Pro** satın almak veya **OsmAnd Cloud** hesabınızı kaydetmek için kullanılan e-posta ile eşleşmelidir.  

2. Spam klasörlerini kontrol edin.  
    Bazen doğrulama e-postası spam olarak filtrelenebilir. **Spam**, **Gereksiz** veya **Promosyonlar** klasörlerinizde **OsmAnd**'dan gelen bir e-posta arayın.  

3. Kodun gelmesini bekleyin.  
    Bazı durumlarda, aktivasyon kodu e-postası **gecikebilir**. Bu, ek gecikmelere neden olabileceğinden, kısa bir süre içinde **birden fazla aktivasyon denemesinden** kaçının.  

4. Kodu yeniden göndermeyi deneyin.  
    **OsmAnd Cloud giriş ekranına** geri dönün ve mevcutsa **Kodu Yeniden Gönder**'i seçin. Başka bir kod istemeden önce birkaç dakika bekleyin.  

5. E-posta sunucusu kısıtlamalarını doğrulayın.  
    Bir **kurumsal veya özel e-posta alanı** kullanıyorsanız, e-postanın engellenmediğinden emin olmak için **e-posta sağlayıcınızla** kontrol edin. Sorunlar devam ederse farklı bir e-posta hizmeti (örneğin, Gmail, Outlook) kullanmayı düşünün.

<!--
## Satın Almalar ve Ödemeler {#purchases--payments}

- Satın Alma Görünmüyor
- Satın Alma Geri Yüklenmiyor
- Ödeme Sorunları
- Geri Ödeme Politikası
- Satın alma sorunlarına adım adım çözümler.
- Google Play, Huawei AppGallery önbelleğini temizleme talimatları.
- Satın alma görünmezse veya işlem başarısız olursa ne yapmalı.
- Satın alma görünmüyor - hesabınızı kontrol etme ve satın alımlarınızı geri yükleme önerileri.
- Ödeme sorunları - ödeme sorunları durumunda Google Play Destek ile iletişime geçme talimatları.


## SSS {#faq}

- Android ve iOS arasında bir satın almayı aktarabilir miyim?
- Bir satın almayı birden fazla cihazda kullanabilir miyim?
- Satın alma neden görünmüyor?
- Ödeme ayrıntılarını nerede bulabilirim?
- OsmAnd+'ı Android ve iOS arasında aktarabilir miyim?
- Uygulamayı yeniden yükledikten sonra satın alımları nasıl geri yüklerim?
- OsmAnd Pro nedir ve avantajları nelerdir?
- Aboneliğimi Google Play olmadan etkinleştirebilir miyim?
- Satın alımımı ailemle paylaşabilir miyim?
- OsmAnd+'ı başka bir telefona nasıl aktarırım?
- Yeniden yükledikten sonra satın alımım neden görünmüyor?
- Satın alımımı neden devam ettiremiyorum?
- Aboneliğimin etkin olup olmadığını nasıl anlarım?
- Bir satın almayı birden fazla cihazda kullanabilir miyim?
- OsmAnd'ı Google Play olmadan satın alabilir miyim?
- Ödeme ayrıntılarımı nerede bulabilirim?
-->