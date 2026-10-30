---
source-hash: 0d78b54592f6e7bfbd495c20bbe33ec368ff22532c171a00e0b3b2a5a27c431f
sidebar_position: 6
title:  Rota Kaydı
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Genel Bakış {#overview}

Bu makale, Android ve iOS'un farklı sürümlerinde uzun süredir gözlemlenen GPX rota kaydı sorunlarını ele almaktadır. **Arka Plan** ile, OsmAnd uygulamasının ön planda görünmemesini, özellikle cihaz ekranı kapalıyken (cihazlardaki dahili *arka plan* tanımından farklıdır) kastediyoruz.

**Notlar**:

- Android 11 (2020/12) itibarıyla, arka planda kullanılacak konum erişimi için *Her zaman izin ver* sistem izin seçeneği artık mevcut değildir, ancak bu, OsmAnd rotalarının arka plan kaydını **sınırlamaz**. Google'ın belgelerine göre, bu artık **ön plan kullanımı** olarak kabul edilmektedir, çünkü hizmeti ön planda kullanma izni dahili olarak kullanılmakta ve bir rotanın kaydedildiğini belirten sistem bildirimi her zaman görünür durumdadır.

- Android'in yeni ifadesinin yanıltıcı olabileceğini unutmayın:

  - **Uygulamayı kullanırken izin ver**, uygulama ekranda görüntülendiği veya OsmAnd'ın navigasyon veya seyahat kaydı sırasında olduğu gibi *Android* bildirim çubuğunda görünür bir bildirimi olduğu sürece konum verilerini sürekli olarak alabileceği anlamına gelir. (Teknik olarak buna *ön plan modu* denir).

  - **Her zaman izin ver** ise, uygulamanın prensipte bu koşulların hiçbiri geçerli olmadan konumunuzu 'fark edilmeden' alabileceği anlamına gelir. Ancak *Android*, bu (*arka plan*) modunda konum erişim sıklığını saatte bir gibi bir değere sınırlar, bu da bir navigasyon uygulaması için kesinlikle doğru mod değildir.


## Kaydedilen Rotalar Gürültülü {#recorded-tracks-are-noisy}

*Dağınık* kaydedilmiş bir rotaya yol açan 2 tipik doğruluk sorunu vardır.

- Aynı yerde daha uzun süre durma veya çok sık nokta kaydı (karşılık gelen zikzaklar gerçek değerleri abartır)
- Zayıf GPS sinyali veya ağ sinyaline dayalı konuma geçiş.

Azaltma eylemleri:

- Dururken kayıtlarınızı duraklatın veya Seyahat kaydı eklentisinin *Minimum yer değiştirme* filtresini kullanın.
- Seyahatinizin eğriliğini yakalamak için kaydedilen noktalarınızın zaman veya yer değiştirme aralığını uygun şekilde seçin, ancak çok fazla ekstra nokta oluşturmayın (bunların yayılması gürültü yaratacak ve mesafe ve yükseklik dalgalanmalarını abartacaktır). 
- Bir rotayı daha sonra düzenlemek ve *"gürültülü"* noktaları kaldırmak da mümkündür.
- Veya **deneyimlerinize** ve **kayıt cihazınıza** göre *"gürültülü"* noktaları kaydederken filtrelemek için *Seyahat kaydı Eklentisi* ayarlarını kullanabilirsiniz. Noktaları çeşitli kriterlere göre filtreleyebilirsiniz:
  - Düşük veya sıfır hızlı noktalar.
  - Kötü hassasiyetli noktalar (GPS 'hdop').
  - Metre cinsinden bir eşikten daha yakın noktalar.

- **Google Services API veya Android API**. Android cihazlarda OsmAnd'ın konum verilerini nasıl alacağını daha fazla değiştirebilirsiniz. [OsmAnd Settings → Location Source](../personal/global-settings.md#location-source) bölümünde **Google Play Services** ve **Android API** arasında seçim yapın, çoğu durumda **Android API**'ye geçmek kaydedilen rotaları iyileştirmeye ve daha az gürültülü hale getirmeye yardımcı olur.


## Kaydedilen Rotalarda Boşluklar Var {#recorded-tracks-have-gaps}

### OsmAnd'ı Rota Kaydı için Yapılandırma {#configuring-osmand-for-track-recording}

- **Bağımsız Kaydı Engelle**. OsmAnd'ın ekran kapalıyken rota kaydetmesine izin vermek için Eklentiler/Seyahat Kaydı altındaki *Bağımsız kaydı engelle* ayarının devre dışı bırakıldığından emin olun.
- **OsmAnd'ı Güncelleyin**. Android sürümleri, [arka planda çalışan uygulamaları sonlandırarak](https://dontkillmyapp.com/) güç tüketimini azaltmak için farklı stratejiler kullanır. 3.9 veya üzeri sürümler, çoğu Android sürümünde [uygulamanın arka planda çalışmaya devam etmesi için](https://dontkillmyapp.com/) bildirim çubuğunda görünen bir Ön plan hizmeti kullanır. Bu, özellikle Android 8+ üzerinde etkilidir ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255), [Issue #5587](https://github.com/osmandapp/Osmand/issues/5587)).

### Android'i Rota Kaydı için Optimize Etme {#optimizing-android-for-track-recording}

Android 4.4'ten itibaren, güç tasarrufu özellikleri CPU kullanımını sınırlayabilir, ekran parlaklığını azaltabilir ve ekran kapalıyken arka plan uygulamalarını sonlandırabilir. Bu, OsmAnd’ın dış mekan kullanımı, harita oluşturma ve rota kaydı performansı üzerinde etkili olabilir. Android'in sonraki sürümleri, **Otomatik pil** ve **Otomatik güç tasarrufu** gibi yapay zeka tabanlı güç tasarrufu davranışları ekleyerek dinamik ve daha az tahmin edilebilir davranışlar sunmuştur. Kayıt sorunlarını önlemek için, en azından başlangıçta veya hata ayıklama için, **güç tasarrufu özelliklerini tamamen devre dışı bırakmayı düşünün**. Kullanıcılar, çoğu cihaz için pil ömrü üzerindeki etkinin kabul edilebilir olduğunu bildirmektedir.

- **OsmAnd'ı *Pil optimizasyonu* dışında tutun.** Android cihazınızın *Ayarlar* bölümünde, OsmAnd'ı *Uygulamalar* veya *Uygulama Yöneticisi* altında bulun. *Pil*, *Güç Tasarrufu* veya *Güç Tüketimi* bölümünü bulun ve OsmAnd'ı pil optimizasyonundan hariç tutun. ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- ***Güç tasarrufu* Modunu devre dışı bırakın.** Bu modun, OsmAnd'ın seyahat kaydı gibi ön plan hizmetlerini bile etkileme/sonlandırma olasılığı yüksektir.

- ***Uyarlanabilir güç tasarrufunu* devre dışı bırakın.** Bu ayarın 'açık' olması, yukarıdaki 'güç tasarrufu' modunu devre dışı bırakmak/etkinleştirmek için sistem genelinde, kullanım desenine dayalı politikalar uygulayacaktır.

- **OsmAnd uygulamasını düzenli olarak kullanmıyorsanız *Uyarlanabilir pili* devre dışı bırakın.** *Uyarlanabilir pil*, uygulama bazında çalışır ve kullanım desenine dayalıdır. Belirli bir uygulama üzerindeki etkisi, o uygulamanın *Pil optimizasyonu*'ndan muaf tutulmasıyla (örneğin *Optimize edilmemiş* olarak ayarlanarak) azaltılabilir. Ancak, *Uyarlanabilir pil* yine de OsmAnd'ın seyahat kaydı gibi ön plan hizmetlerini sonlandırabilir, eğer cihaz OsmAnd'ı 'nadiren kullanılan' uygulamalar havuzunuzda değerlendirirse.

### Android 9, 10 ve 11 için Test Edilmiş Güç Ayarları (Hardy, 2020-08-25) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Aşağıdaki Güç ayarları, Android 9, 10 ve daha sonra 11 (Samsung cihazlarda) altında OsmAnd'ın boşluksuz rotaları kaydetmesini sağlamak için başarıyla test edilmiştir. Lütfen bu **10 ayarı** gözden geçirin ve buna göre ayarlayın:

- (1) **Güç tasarrufu (modu)** = KAPALI (veya Android 10'da *Optimize edilmiş*)
- (2) **Uyarlanabilir güç tasarrufu** = KAPALI (AÇIK olduğunda güç tasarrufu modu bazen etkinleşebilir ve bu da OsmAnd'ın kayıt yapmasını engeller.)
- (3) **Uyarlanabilir pil** = AÇIK (Pil optimizasyonundan muaf tutulan uygulamaları zaten etkilemez, aşağıdaki (9)'a bakın, **uygulama nadiren kullanılmadıkça**. Güvenli olmak için KAPALI yapın.)
- (4) **Kullanılmayan uygulamaları uyku moduna al** = AÇIK (Ancak OsmAnd'ı pil optimizasyonundan hariç tutun, aşağıdaki (9)'a bakın!)
- (5) **Kullanılmayan uygulamaları otomatik devre dışı bırak** = KAPALI (Yalnızca Android 9'da bulunuyor gibi görünüyor.)
- (6) **Ayarları optimize et** = KAPALI (Android 10'da *Cihaz bakımı / Gelişmiş* altında, Android 11'de kaldırılmış görünüyor.)
- (7) **Otomatik optimize et (günlük)** = AÇIK (Burada etkisi yoktur.)
- (8) **Otomatik yeniden başlat (belirlenen saatlerde)** = KAPALI (Burada etkisi yoktur.)
- (9) **Pil Kullanımını Optimize Et** (Android *Ayarlar / Uygulamalar / OsmAnd / Pil* altında veya *Ayarlar / Uygulamalar / üç nokta / Özel erişim / Pil kullanımını optimize et / Tümü / OsmAnd* altında) = OsmAnd'ı pil optimizasyonundan muaf tutun (çok önerilir, ancak uygulama kullanıcı tarafından sık başlatılıyorsa gerekli değildir).
- (10) **Arka plan etkinliğine izin ver** = Android 11 için *Uygulamalar / OsmAnd / Pil* altında OsmAnd için AÇIK

Bu ayarlardan bazıları birbiriyle etkileşir, bu yüzden dikkatli olun. Yukarıdaki ayarları ada göre (parantez içindeki ifadelerle ve onlar olmadan) aramak en iyi yöntemdir. Android sürümünüze bağlı olarak, bunlar şu çeşitli *Android Ayarları ekranlarına* dağılmış olabilir:

- *Cihaz bakımı*
- *Cihaz bakımı / üç nokta / Otomasyon*
- *Cihaz bakımı / Gelişmiş*
- *Cihaz bakımı / Pil*
- *Cihaz bakımı / Pil / Ayarlar*
- *Cihaz bakımı / Pil / Uygulama Güç Yönetimi*
- *Cihaz bakımı / Pil / Diğer pil ayarları*

### iOS Arka Plan Uygulamalarının Davranışını Kontrol Etme {#control-the-behavior-of-ios-background-apps}

iOS, sistem kaynakları yeniden tahsis edildiğinde arka plan uygulamalarını otomatik olarak askıya alabilir veya durdurabilir. OsmAnd bu davranışı geçersiz kılamaz. Cihaz kilitliyken rota kaydı kesilirse, bu kayıtta boşluklar bırakabilir. Bu boşlukları [Rota Planla](https://osmand.net/docs/user/plan-route/create-route) aracını kullanarak düzenleyebilirsiniz.

iOS'un konum takibini nasıl ele aldığı hakkında daha fazla bilgi için Apple'ın belgelerini [buradan](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1) kontrol edin.


## Kat Edilen Mesafe Nasıl Takip Edilir {#how-to-track-traveled-distance}

OsmAnd'ın bir kilometre sayacına benzer özel bir widget'ı yoktur, kat ettiğiniz mesafeyi takip etmek ve gerektiğinde sıfırlamak için [Seyahat kaydı eklentisi](../plugins/trip-recording.md#new-track-recording)'i kullanabilirsiniz.  


## OsmAnd 3.9: Google Play Services kullanılırken yükseklik sorunları {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play politikasını değiştirdi ve buna uymak için OsmAnd'ın 3.9 sürümünden itibaren (Nightly, F-Droid ve Huawei derlemeleri hariç) arka planda çalışırken (yani Android terminolojisinde, görünür bir sistem bildirimine sahip bir ön plan hizmeti olarak) konum belirlemek için Google Play Services kullanması gerekmektedir.

Bu değişiklikten sonra, yükseklik kaydıyla ilgili bir sorun olduğu görülüyor: Görünüşe göre, Google Play Services yükseklik ölçümünü çok agresif bir şekilde enterpolasyon yapıyor, bkz. [GitHub sorunu #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Bu sorun Android 10'u etkiliyor, Android 11'i muhtemelen etkilemiyor. [Sorun](https://issuetracker.google.com/issues/180218747) Google'ın web sitesinde zaten bildirildi ve muhtemelen 09-03-2021 tarihinde düzeltilecek.  

Geçici bir çözüm olarak, [*OsmAnd Ayarları → Konum Kaynağı*](../personal/global-settings.md#location-source) bölümünde konum kaynağını **Google Play Services**'ten **Android API**'ye değiştirebilirsiniz.


## OsmAnd 3.9: GPS uyandırma artık sürekli ön plan hizmetiyle değiştirildi (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

3.9 sürümünden itibaren, rota kaydı veya navigasyon gerektiğinde, OsmAnd GPX'i *Android* arka plan hizmeti aracılığıyla sürekli olarak destekler ve bu, bir *Android* sistem bildirimi olarak görünür.

Uyku modu ve periyodik GPS uyandırma kullanma stratejisi, Google Play'in arka plan konum erişimine ilişkin yeni kısıtlamaları gereği kodumuzdan kaldırıldı (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)). Sonuç olarak, aşağıdaki (A) ve (B) bölümleri yalnızca OsmAnd'ın 3.9 öncesi sürümleri için geçerlidir:

**<del> (A) GPS Uyandırma Stratejisi</del>**

- (A1) OsmAnd kullanılırken, örn. Navigasyon. Sürekli konum bilgisi burada kilit önemde olduğu için sistemin GPS modülünü her zaman açık tutuyoruz. Pil kullanımına etkisi (büyüklük sırası) Android 4.4'e kadar olan eski sistemlerde saatte yaklaşık %5, daha yeni sistemlerde ise %2-3 gibi görünmektedir.
- (A2) Eşzamanlı navigasyon olmadan *arka plan* rota kaydı için. 15 saniyeye kadar olan aralıklarla kayıt için GPS'i yine açık tutuyoruz, diğer stratejiler pilden fazla tasarruf sağlamaz.
- (A3) \>=30 sn aralıklar için GPS'i yalnızca her örnekleme noktası için açıyoruz. Bunun kaydedilen noktaların doğruluğu üzerinde belirgin bir etkisi vardır, ancak 30 saniyelik rota kaydı için pil kullanımını saatte yaklaşık %1,2 seviyesine düşürür.

**<del> (B) GPS Uyandırma Sorunları</del>**

GPS uyandırmayı sağlamak için şimdiye kadar cihazı periyodik olarak (Android 6'da getirilen Doze modundan da) uyandırmak üzere Android Alarm Manager'ı kullandık. Yeni Android sürümleri aşağıdaki sorunları getirdi:

- **(B1) Alarm Manager'ın setRepeating() yöntemi Android 4.4'ten itibaren kesin olmaktan çıktı:**  
Azaltma: Artık *setRepeating()* yöntemini yalnızca Android 4.2'ye kadar, yeni *setExact()* yöntemini Android 4.4'ten itibaren ve *setExactAndAllowWhileIdle()* yöntemini Android 8+ için kullanıyoruz. ([Issue #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Android 4.4'ten itibaren sistemler, *setExact()* yönteminin tekrarlı çalıştırılma sayısını** örneğin 5 hatta 15 dakikada bir ile sınırlar. (Gerçek değer cihaza göre çok değişiyor gibi görünüyor.)  
Şimdilik iyi bir çözüm bulunamadı. Mevcut azaltma yöntemi olarak Alarm Manager uyandırmasını kullanmıyoruz, bunun yerine Android 5+ cihazlarda 5 dakikadan kısa tüm kayıt aralıkları için arka plan rota kaydında GPS'i her zaman açık tutuyoruz. Bu, daha yüksek pil kullanımı pahasına güvenilir ve hassas rotalar üretir. ([Issue #5632](https://github.com/osmandapp/Osmand/issues/5632))