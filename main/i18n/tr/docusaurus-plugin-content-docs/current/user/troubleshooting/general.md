---
source-hash: cab83698857aced02ef3ef257f82a8843950da7227a14609c1fd937c86c5c499
sidebar_position: 2
title:  Genel
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


OsmAnd'ın çeşitli özellikleriyle ilgili genel sorunlar.

## Pil Tüketimi {#battery-consumption}

### OsmAnd çok fazla pil gücü tüketiyor gibi görünüyor {#osmand-seems-to-use-up-too-much-battery-power}

OsmAnd'ın aşırı pil gücü tükettiğine dair kullanıcı raporları var; OsmAnd'ın pil kullanımının %90'ına kadar sorumlu olduğu durumlar da mevcut. Ancak, birçok test yaptık ve bu tür sonuçları yeniden üretemedik.

Normal şartlar altında, OsmAnd yalnızca canlı navigasyon veya rota kaydı gibi aktif işlevler için gerektiğinde güç tüketir. Bu hizmetler aktif olduğunda, Android bildirim alanında görünürler. Böyle bir bildirim görünmüyorsa, OsmAnd arka planda güç tüketmiyor demektir.

Pil tüketimini etkileyen çeşitli faktörler vardır: cihazın yaşı, şarj döngüsü sayısı, pil kapasitesi, sıcaklık ve daha fazlası. Aşağıda, orta seviye bir cihazda yapılan testlere dayanarak tipik pil tüketim oranları verilmiştir:

| Cihaz işlevi | Saat başına pil tüketimi |
| :--- | :--- |
| Yalnızca standart uygulamalar aktifken uyku modundaki tipik cihaz | %0,5 |
| Ekran açık (tipik olarak) | %6 |
| GPS aktif (tipik olarak) | %5 |
| Rota kaydı için arka planda çalışan OsmAnd | %0,5 |
| Arka planda hiçbir hizmet çalıştırmayan OsmAnd | %0 |

#### OsmAnd İşlev Pil Tüketimi {#osmand-function-battery-consumption}

| OsmAnd işlevi | Saat başına pil tüketimi |
| :--- | :--- |
| Ekran kapalıyken rota kaydı | %6 |
| Ekran açıkken navigasyon | %12 |

Genel güç tüketimi, OsmAnd'ı nasıl kullandığınıza bağlı olarak bu bileşenlerin eklenmesiyle ortaya çıkmalıdır. Bu tipik değerlerden önemli sapmalar görürseniz lütfen bildirin.


### Pil tüketimini optimize etme {#optimizing-battery-consumption}

OsmAnd kullanırken, özellikle navigasyon veya rota kaydı gibi etkinlikler sırasında pil tüketimini etkileyebilecek çeşitli özellikler vardır. Pil kullanımını etkili bir şekilde yönetmenize yardımcı olacak bazı ipuçları:

- **Navigasyon sırasında ekran kontrolü** (*Android*). Güç tasarrufu yapmak için, bir dönüş veya önemli bir olay meydana gelmedikçe navigasyon sırasında ekranı kapalı tutmak üzere OsmAnd'ı yapılandırabilirsiniz. Bu, özellikle sesli navigasyon sırasında kullanışlıdır. Daha fazla ayrıntı için *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)* bölümüne bakın.

- **Güç tasarrufu sağlayan navigasyon ayarları**. Harita yeniden çizim sıklığını en aza indirerek ve GPS doğruluğunu sınırlayarak pil tüketimini azaltabilirsiniz. Bu ayarları yapmak için *Navigasyon → Ayarlar → Rota Navigasyonu* bölümüne gidin. Daha fazla bilgi için, [navigasyon sırasında güç tasarrufu](../navigation/setup/route-navigation.md#power-saving-tips) bölümüne bakın.

- **Harita katmanlarını ve ayrıntılarını yönetme**. 3D kabartma, kontur çizgileri veya tepe gölgeleri gibi gereksiz harita özelliklerini devre dışı bırakın. Ayrıca *Haritayı Yapılandır* menüsü aracılığıyla görüntülenen nesnelerin (POI etiketleri, sınırlar, ev numaraları vb.) sayısını da azaltabilirsiniz. Bu katmanları devre dışı bırakmak, harita yeniden çizimlerinin sıklığını azaltmaya yardımcı olur ve bu da güç tüketimini düşürür.

- **Otomatik yakınlaştırmayı devre dışı bırakma**. Navigasyon sırasında otomatik yakınlaştırma, sık harita yeniden çizimlerine neden olabilir ve bu da pil kullanımını artırır. Bu özelliği devre dışı bırakmak, güç tüketimini azaltmaya yardımcı olabilir. Otomatik yakınlaştırmayı kapatmak için *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>* bölümüne gidin. Daha fazla ayrıntı için [Navigasyon Sırasında Harita](../navigation/guidance/map-during-navigation.md) bölümünü ziyaret edin.

- **Rota kaydı ayarlarını optimize etme**. Pil tasarrufu yapmak için rota kaydı sırasında GPS doğruluğunu ve ekran kullanımını ayarladığınızdan emin olun. Daha fazla rehberlik için [Rota kaydı sorun giderme](../troubleshooting/track-recording-issues.md) bölümünü ziyaret edin.


## Gizlilik {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Arama geçmişi nasıl silinir {#how-to-delete-search-history}

OsmAnd'da arama geçmişini silmek için:

1. *Ara* menüsünü açın.
2. Herhangi bir arama sonucuna uzun dokunun.
3. Silmek istediğiniz sonuçları seçin veya tüm sonuçları silmek için sol üst köşedeki *Tümünü Seç* seçeneğini kullanın.
4. Silmeyi onaylamak için sağ üst köşedeki *Çöp Kutusu* simgesine dokunun.

Arama işlevselliği hakkında daha ayrıntılı talimatlar için [bu kılavuza](../search/search-history.md) başvurabilirsiniz.


## Diğer {#other}

### GPS bağlantısıyla ilgili sorun (Android) {#problem-with-the-gps-connection-android}

OsmAnd, Android API aracılığıyla Android cihazınız tarafından sağlanan konum verilerine güvenir.

GPS bağlantı sorunlarını çözmek için şu adımları izleyin:

1. **Konum Kaynağını Değiştirin**. *OsmAnd Ayarları → Konum Kaynağı* bölümünde Google Play Hizmetleri veya Android API gibi farklı seçenekleri deneyin.
2. **Google Hizmet API'sini Güncelleyin**. [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US) adresinden en son sürüme sahip olduğunuzdan emin olun.
3. **Android Konum Ayarlarını Kontrol Edin**. Android Sistem Ayarları'na gidin ve Konum Erişimi'nin açık ve Yüksek Doğruluk olarak ayarlandığından emin olun. Ayrıca önbelleği temizlemeyi ve cihazınızı yeniden başlatmayı da deneyebilirsiniz. Binalar veya büyük nesneler sinyali engellerse GPS sorunları ortaya çıkabilir. GPS performansını test edin ve sinyal zayıfsa, minimum kayıt doğruluğunu 15 metrenin üzerine ayarlayın.
4. **GPS Widget'ını Etkinleştirin**. Uydu bağlantılarını kontrol etmek için GPS bilgi widget'ını kullanın. Uydu bağlantısı yoksa, cihazınız konumu belirleyemez ve uydu sayısı 0 olacaktır. Daha fazla ayrıntı [GPS widget kılavuzunda](../widgets/info-widgets.md#gps-info) bulunabilir.
5. **Yalnızca GPS Sinyali Kullanın**. Cihazınızı yalnızca GPS kullanacak şekilde ayarlayın (Wi-Fi veya Bluetooth tabanlı konumu devre dışı bırakın). Talimatlar [Google Destek](https://support.google.com/android/answer/3467281?hl=en) adresinde mevcuttur.
6. **OsmAnd'ı Yeniden Yükleyin**. Yukarıdaki adımlar işe yaramazsa, kötü verileri temizlemek ve GPS sorunlarını çözmek için OsmAnd uygulamasını yeniden yüklemeyi deneyin. Bunu yapmadan önce tüm kayıtlı verilerinizi dışa aktarın.
7. **Cihaz RAM'ini Kontrol Edin**. Sorun devam ederse, yetersiz bellek nedeniyle olabilir, bu nedenle cihazınızda yeterli RAM olduğundan emin olun.


### OsmAnd Pro satın alımı sırasında e-posta uyuşmazlığı sorunu {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

OsmAnd Pro satın alımınızla ilişkili e-postanın OsmAnd uygulaması e-postasıyla eşleşmediği bir sorunla karşılaşırsanız, sorunu çözmek için şu adımları izleyin:

1. **Google Play ve Ödeme hesaplarını kontrol edin**. Doğru e-postanın Google Play Store ve Ödeme hesaplarınıza bağlı olduğundan emin olun. Ödeme süreci bu hizmetler tarafından yürütülür ve e-posta uyuşmazlığı, ödeme profilinizle hala eski bir e-postanın ilişkili olması nedeniyle ortaya çıkabilir.

2. **OsmAnd uygulama e-postasını doğrulayın**. Mevcut Google Play e-postanızla eşleştiğinden emin olmak için OsmAnd uygulamanızdaki e-posta adresini tekrar kontrol edin. Bu, uygulamayı açıp hesap ayarlarına giderek yapılabilir.

3. **Satın alımları geri yükleyin**. Satın alımınızın kullanılabilirliğini ve uygunluğunu kontrol edin. Bunu yapmak için OsmAnd *Menü → Ayarlar → Satın Alımlar* bölümüne gidin. Görüntülenen veriler beklentilerinizle eşleşmiyorsa, [Huawei Mobil Hizmetleri olmadan Huawei AppGallery'de OsmAnd'ı satın alma ve geri yükleme](./purchases_payments.md#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services) bölümünü deneyin.

4. **Uygulama önbelleğini ve verilerini temizleyin**. Cihazınızın *Ayarlar → Uygulamalar → OsmAnd → Depolama → Önbelleği Temizle ve Verileri Temizle* bölümüne giderek OsmAnd uygulamasının önbelleğini ve verilerini temizleyin. Bu, uygulamayı yenileyecek ve eski hesaptan kaynaklanan tüm kalıntı sorunları giderecektir.

5. **OsmAnd'ı yeniden yükleyin**. Önbelleği temizlemek sorunu çözmezse, uygulamayı kaldırıp yeniden yüklemeyi deneyin. Bunu yapmadan önce, *Menü → Ayarlar → Dosyaya Aktar* bölümüne giderek önemli verileri (rotalar, favoriler) yedeklediğinizden emin olun. Uygulamayı yeniden yüklemek, tüm hesap ayrıntılarının doğru şekilde yenilenmesini sağlayacaktır.

6. **Proxy'yi devre dışı bırakın**. Uygulamanın proxy ayarlarını kontrol edin ve *Menü → Ayarlar → OsmAnd ayarları → Proxy* bölümüne giderek proxy'nin kapalı olduğundan emin olun. Bir proxy veya VPN, hesap senkronizasyonunu engelleyebilir.

7. **Yeniden oturum açın veya hesap yönetimi için Web'i kullanın**. Hala sorun yaşıyorsanız, uygulamanın mevcut hesabınızla bağlantısını yenilemek için oturumu kapatıp tekrar açmayı deneyin. Uygulama içinde eski hesabı silme konusunda herhangi bir sorunla karşılaşırsanız, hesabınızı OsmAnd'ın web sürümü aracılığıyla yönetmeyi düşünün.