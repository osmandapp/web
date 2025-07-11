---
source-hash: b20d566784f9980fe5e20bf7150aed84f093a993d25503654c0a929b88a08bd6
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

- Android 11 (2020/12) itibarıyla, arka planda kullanılmak üzere *Her zaman izin ver* konum erişim sistem izni seçeneği artık mevcut değildir, ancak bu, OsmAnd rotalarının arka plan kaydını **sınırlamaz**. Google'ın belgelerine göre, bu artık **ön plan kullanımı** olarak kabul edilmektedir çünkü hizmeti ön planda kullanma izni dahili olarak kullanılmakta ve bir rotanın kaydedildiğine dair sistem bildirimi her zaman görünür durumdadır.

- Android'in yeni ifadesinin yanıltıcı olabileceğini unutmayın:

  - **Uygulamayı kullanırken izin ver**, uygulamanın ekranda görüntülendiği veya *Android* bildirim çubuğunda görünür bir bildirimi olduğu sürece sürekli olarak konum verilerini alabileceği anlamına gelir, OsmAnd'ın navigasyon veya rota kaydı sırasında olduğu gibi. (Teknik olarak, buna *ön plan modu* denir).

  - **Her zaman izin ver** ise, uygulamanın prensipte bu koşullardan herhangi biri uygulanmadan konumunuzu 'fark edilmeden' alabileceği anlamına gelir. Ancak *Android*, bu (*arka plan*) modunda konum erişim sıklığını saatte bir gibi bir değere sınırlar, bu da bir navigasyon uygulaması için kesinlikle doğru mod değildir.


## Kaydedilen Rotalar Gürültülü {#recorded-tracks-are-noisy}

*Dağınık* kaydedilmiş bir rotaya yol açan 2 tipik doğruluk sorunu vardır.

- Aynı yerde daha uzun süre durmak.
- Kötü GPS sinyali ve ağ sinyaline dayalı konuma geçiş.

Yapabileceğiniz eylemler:

- Bu tür koşullar altında kaydı kesmek için **Duraklat**'ı kullanarak bu tür sorunlardan kaçınabilirsiniz.
- Bir rotayı daha sonra düzenlemek ve *"gürültülü"* noktaları kaldırmak da mümkündür.
- Veya *Rota Kayıt Eklentisi* ayarlarını kullanarak, **deneyimlerinize** ve **kayıt cihazınıza** bağlı olarak, kayıt sırasında zaten *"gürültülü"* noktaları filtreleyebilirsiniz. Çeşitli kriterlere göre noktaları filtreleyebilirsiniz:
  - Düşük veya sıfır hıza sahip noktalar.
  - Kötü hassasiyete sahip noktalar (GPS 'hdop').
  - Metre cinsinden bir eşikten daha yakın noktalar.

- **Google Hizmetleri API'si veya Android API'si**. OsmAnd'ın Android cihazlarda konum verilerini nasıl aldığını daha fazla değiştirebilirsiniz. [OsmAnd Ayarları → Konum Kaynağı](../personal/global-settings.md#location-source) bölümünde **Google Play Hizmetleri** ve **Android API** arasında seçim yapın, çoğu durumda **Android API**'ye geçmek kaydedilen rotaları iyileştirmeye ve daha az gürültülü hale getirmeye yardımcı olur.


## Kaydedilen Rotalarda Boşluklar Var {#recorded-tracks-have-gaps}

Android 4.4'ten itibaren, güç tasarrufu özellikleri CPU kullanımını sınırlayabilir, ekran parlaklığını azaltabilir ve ekran kapalıyken arka plan uygulamalarını sonlandırabilir. Bu, OsmAnd'ın dış mekan kullanımı, harita oluşturma ve rota kaydı performansı üzerinde etkili olabilir. Sorunları önlemek için, güç tasarrufu özelliklerini tamamen devre dışı bırakmayı düşünün. Kullanıcı deneyimine göre, bu, çoğu cihaz için pil ömrü üzerinde çok az etkiye sahiptir.

### Rota Kaydı için OsmAnd'ı Yapılandırma {#configuring-osmand-for-track-recording}

- **Bağımsız Kaydı Önle**. OsmAnd'ın ekran kapalıyken rota kaydetmesine izin vermek için Eklentiler/Rota Kaydı altındaki *Bağımsız kaydı önle* ayarının devre dışı bırakıldığından emin olun.
- **OsmAnd'ı Güncelle**. Android sürümleri, [arka planda çalışan uygulamaları sonlandırarak](https://dontkillmyapp.com/) güç tüketimini azaltmak için farklı stratejiler kullanır. Sürüm 3.9 veya üstü, bildirim çubuğunda görünen bir Ön Plan hizmeti kullanarak [uygulamanın çoğu Android sürümünde arka planda çalışmasını sağlar](https://dontkillmyapp.com/). Bu, özellikle Android 8+ üzerinde etkilidir ([Sorun #5255](https://github.com/osmandapp/Osmand/issues/5255), [Sorun #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Rota Kaydı için Android'i Optimize Etme {#optimizing-android-for-track-recording}

- **OsmAnd'ı Güç Optimizasyonundan Hariç Tut**. Android cihazınızın Güç veya Güç Tasarrufu ayarlarında, *Uygulamalar*, *Uygulamalar* veya *Uygulama Yöneticisi* altında OsmAnd'ı bulun. *Güç Tasarrufu* veya *Güç Tüketimi*'ni bulun ve OsmAnd'ı güç optimizasyonundan hariç tutun. ([Sorun #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Güç Tasarrufu Modunu Devre Dışı Bırak**. Android Güç Tasarrufu'nu tamamen devre dışı bırakmak, özellikle eski Android sürümlerinde yardımcı olabilir. Bu, rota kaydı veya navigasyon sırasında performans sorunlarını çözebilir.

### iOS Arka Plan Uygulamalarının Davranışını Kontrol Etme {#control-the-behavior-of-ios-background-apps}

iOS, sistem kaynakları yeniden tahsis edildiğinde arka plan uygulamalarını otomatik olarak askıya alabilir veya durdurabilir. OsmAnd bu davranışı geçersiz kılamaz. Cihaz kilitliyken rota kaydı kesilirse, bu kayıtta boşluklar bırakabilir. Bu boşlukları [Rota Planla](https://docs.osmand.net/docs/user/plan-route/create-route) aracını kullanarak düzenleyebilirsiniz.

iOS'un konum takibini nasıl ele aldığı hakkında daha fazla bilgi için Apple'ın belgelerine [buradan](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1) bakabilirsiniz.


### Android 9, 10 ve 11 için Test Edilmiş Güç Ayarları (Hardy, 2020-08-25) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Aşağıdaki Güç ayarları, Android 9, 10 ve daha sonra 11 (Samsung cihazlarda) altında OsmAnd'ın boşluksuz rota kaydetmesini sağlamak için başarıyla test edilmiştir. Lütfen bu **10 ayarı** inceleyin ve buna göre ayarlayın:

- (1) **Güç tasarrufu (modu)** = KAPALI (veya Android 10'da *Optimize Edilmiş*)
- (2) **Uyarlanabilir güç tasarrufu** = KAPALI (AÇIK olduğunda, bazen orta güç tasarrufu modu etkinleştirilebilir, bu da OsmAnd'ın kaydetmesini engeller)
- (3) **Uyarlanabilir pil** = AÇIK (pil optimizasyonundan muaf tutulan uygulamaları etkilememelidir, bkz. aşağıdaki (9))
- (4) **Kullanılmayan uygulamaları uykuya al** = KAPALI (AÇIK olsa bile OsmAnd pil optimizasyonundan muaf tutulursa muhtemelen sorun olmaz, bkz. aşağıdaki (9))
- (5) **Kullanılmayan uygulamaları otomatik devre dışı bırak** = KAPALI (yalnızca Android 9'da mevcut gibi görünüyor)
- (6) **Ayarları optimize et** = KAPALI (Android 10'da *Cihaz bakımı / Gelişmiş* altında, Android 11'de gitmiş gibi görünüyor)
- (7) **Otomatik optimize et (günlük)** = AÇIK (muhtemelen ilgili değil)
- (8) **Otomatik yeniden başlat (belirlenen saatlerde)** = KAPALI (muhtemelen ilgili değil)
- (9) **Pil Kullanımını Optimize Et** (*Uygulamalar / OsmAnd / Pil* veya *Uygulamalar / 3 nokta / Özel erişim / Pil kullanımını optimize et / Tümü / OsmAnd* altında) = OsmAnd'ı pil optimizasyonundan muaf tutmak tavsiye edilir (ancak tüm cihazlarda gerekli değildir)
- (10) **Arka plan etkinliğine izin ver** = Android 11 için *Uygulamalar / OsmAnd / Pil* altında OsmAnd için AÇIK

Bu ayarlardan bazıları etkileşimlidir, bu yüzden dikkatli olun. Yukarıdaki ayarları adıyla (parantez içindeki ifadelerle ve onlarsız) en iyi şekilde arayın. Android sürümünüze bağlı olarak, bu çeşitli *Android Ayarları ekranlarına* dağılmış olabilirler:

- *Cihaz bakımı*
- *Cihaz bakımı / 3 nokta / Otomasyon*
- *Cihaz bakımı / Gelişmiş*
- *Cihaz bakımı / Pil*
- *Cihaz bakımı / Pil / Ayarlar*
- *Cihaz bakımı / Pil / Uygulama Güç Yönetimi*
- *Cihaz bakımı / Pil / Daha fazla pil ayarı*


## Kat Edilen Mesafeyi Nasıl Takip Ederim {#how-to-track-traveled-distance}

OsmAnd'ın bir kilometre sayacı gibi özel bir widget'ı yoktur, kat ettiğiniz mesafeyi takip etmek ve gerektiğinde sıfırlamak için [Rota Kayıt eklentisini](../plugins/trip-recording.md#new-track-recording) kullanabilirsiniz.  


## OsmAnd 3.9: Google Play Hizmetlerini Kullanırken Rakım Sorunları {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play politikasını değiştirdi ve buna uymak için OsmAnd, sürüm 3.9'dan itibaren (Nightly, F-Droid ve Huawei sürümleri hariç), arka planda çalışırken (yani, Android terminolojisinde, görünür bir sistem bildirimi ile bir ön plan hizmeti olarak) konum düzeltmeleri almak için Google Play Hizmetlerini kullanmak zorundadır.

Bu değişiklikten sonra, rakım kaydında bir sorun olduğu görülüyor: Görünüşe göre, Google Play Hizmetleri rakım ölçümünü çok agresif bir şekilde enterpole ediyor, bkz. [GitHub sorunu #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Bu sorun Android 10'u etkiliyor, muhtemelen Android 11'i değil. [Sorun](https://issuetracker.google.com/issues/180218747) zaten Google'ın web sitesinde rapor edildi ve muhtemelen 09-03-2021'de düzeltilecek.  

Geçici bir çözüm olarak, [*OsmAnd Ayarları → Konum Kaynağı*](../personal/global-settings.md#location-source) bölümünde konum kaynağını **Google Play Hizmetleri**'nden **Android API**'ye geçirebilirsiniz.


## OsmAnd 3.9: GPS uyandırma şimdi sürekli ön plan hizmetiyle değiştirildi (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

Sürüm 3.9'dan itibaren, rota kaydı veya navigasyon gerektiğinde, OsmAnd GPX'i *Android* arka plan hizmeti aracılığıyla sürekli olarak destekler ve bu, bir *Android* sistem bildirimi olarak görünür.

Daha önceki uyku modu ve periyodik GPS Uyandırma stratejisi, yeni Google Play arka plan konum erişim kısıtlamaları gereği kodumuzdan kaldırılmıştır ([Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34) commit'i). Sonuç olarak, aşağıdaki (A) ve (B) bölümleri yalnızca OsmAnd'ın 3.9 öncesi sürümleri için geçerlidir:

**<del> (A) GPS Uyandırma Stratejisi</del>**

- (A1) OsmAnd kullanılırken, örn. Navigasyon. Sürekli konum bilgisi burada anahtar olduğundan, sistemin GPS modülünü her zaman açık tutarız. Pil kullanımı üzerindeki etkisi (büyüklük sırası) eski sistemlerde Android 4.4'e kadar saatte yaklaşık %5, yeni sistemlerde ise %2-3 civarındadır.
- (A2) Eşzamanlı navigasyon olmadan *arka plan* rota kaydı için. 15 saniyeye kadar aralıklarla kayıt için GPS'i de açık tutarız, diğer stratejiler çok fazla pil gücü tasarrufu sağlamaz.
- (A3) >=30 saniye aralıklar için, GPS'i yalnızca her örnekleme noktası için açarız. Bu, kaydedilen noktaların doğruluğu üzerinde bazı belirgin etkilere sahiptir ancak 30 saniyelik rota kaydı için pil kullanımını saatte %1.2 büyüklük sırasına düşürür.

**<del> (B) GPS Uyandırma Sorunları</del>**

GPS uyandırmayı başarmak için, şimdiye kadar Android Alarm Yöneticisini cihazı periyodik olarak (Android 6'da tanıtılan Doze modundan da) uyandırmak için kullanıyoruz. Yeni Android sürümleri aşağıdaki sorunları ortaya çıkardı:

- **(B1) Alarm Yöneticisi'nin setRepeating() Android 4.4'ten itibaren belirsiz hale geldi:**  
Çözüm: Artık setRepeating()'i yalnızca Android 4.2'ye kadar kullanıyoruz, Android 4.4'ten itibaren yeni setExact() yöntemini ve Android 8+ için setExactAndAllowWhileIdle()'ı kullanıyoruz. ([Sorun #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Android 4.4'ten itibaren sistemler, setExact()'ın tekrar tekrar yürütülme sayısını örn. her 5 veya hatta 15 dakikada bir ile sınırlar.** (Gerçek değer cihazdan cihaza büyük ölçüde değişiyor gibi görünüyor.)  
Şimdilik iyi bir çözüm bulunamadı. Mevcut çözüm, Alarm Yöneticisi uyandırmasını kullanmamamız, bunun yerine Android 5+ yüklü cihazlarda 5 dakikadan kısa tüm kayıt aralıkları için arka plan rota kaydı için GPS'i her zaman açık tutmamızdır. Bu, daha yüksek pil kullanımı pahasına güvenilir ve hassas rotalar üretir. ([Sorun #5632](https://github.com/osmandapp/Osmand/issues/5632))