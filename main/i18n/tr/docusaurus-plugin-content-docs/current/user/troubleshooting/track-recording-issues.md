---
source-hash: 7f2e85f7e22604bcf22bbc6bdb7faf78780ede4bd62e7cd5554ceedacb06dd7d
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

- **Google Hizmetleri API'si veya Android API'si**. Android cihazlarda OsmAnd'ın konum verilerini nasıl alacağını daha fazla değiştirebilirsiniz. [OsmAnd Ayarları → Konum Kaynağı](../personal/global-settings.md#location-source) bölümünde **Google Play Hizmetleri** ve **Android API** arasında seçim yapın, çoğu durumda **Android API**'ye geçmek kaydedilen rotaları iyileştirmeye ve daha az gürültülü hale getirmeye yardımcı olur.


## Kaydedilen Rotalarda Boşluklar Var {#recorded-tracks-have-gaps}

### Rota Kaydı için OsmAnd'ı Yapılandırma {#configuring-osmand-for-track-recording}

- **Bağımsız Kaydı Engelle**. OsmAnd'ın ekran kapalıyken rota kaydetmesine izin vermek için Eklentiler/Seyahat Kaydı altındaki *Bağımsız kaydı engelle* ayarının devre dışı bırakıldığından emin olun.
- **OsmAnd'ı Güncelle**. Android sürümleri, arka planda çalışan uygulamaları [sonlandırarak](https://dontkillmyapp.com/) güç tüketimini azaltmak için farklı stratejiler kullanır. Sürüm 3.9 veya üzeri, çoğu Android sürümünde [uygulamanın arka planda çalışmasını sağlamak için](https://dontkillmyapp.com/) bildirim çubuğunda görünen bir Ön Plan hizmeti kullanır. Bu, özellikle Android 8+ üzerinde etkilidir ([Sorun #5255](https://github.com/osmandapp/Osmand/issues/5255), [Sorun #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Rota Kaydı için Android'i Optimize Etme {#optimizing-android-for-track-recording}

Android 4.4'ten itibaren, güç tasarrufu özellikleri CPU kullanımını sınırlayabilir, ekran parlaklığını azaltabilir ve ekran kapalıyken arka plan uygulamalarını sonlandırabilir. Bu, OsmAnd'ın dış mekan kullanımı, harita oluşturma ve rota kaydı performansı üzerinde etkili olabilir. Android'in sonraki sürümleri, **Otomatik pil** ve **Otomatik güç tasarrufu** gibi yapay zeka tabanlı güç tasarrufu davranışları ekleyerek dinamik ve daha az tahmin edilebilir davranışlar sunmuştur. Kayıt sorunlarını önlemek için, en azından başlangıçta veya hata ayıklama için, **güç tasarrufu özelliklerini tamamen devre dışı bırakmayı düşünün**. Kullanıcılar, çoğu cihaz için pil ömrü üzerindeki etkinin kabul edilebilir olduğunu bildirmektedir.

- **OsmAnd'ı *Pil optimizasyonundan* hariç tutun.** Android cihazınızın *Ayarlar* bölümünde, OsmAnd'ı *Uygulamalar*, *Uygulamalar* veya *Uygulama Yöneticisi* altında bulun. *Pil*, *Güç Tasarrufu* veya *Güç Tüketimi* bölümünü bulun ve OsmAnd'ı pil optimizasyonundan hariç tutun. ([Sorun #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Güç tasarrufu Modunu devre dışı bırakın.** Bu modun, OsmAnd'ın seyahat kaydı gibi ön plan hizmetlerini bile etkileme/sonlandırma olasılığı yüksektir.

- **Uyarlanabilir güç tasarrufunu devre dışı bırakın.** Bu ayarın 'açık' olması, yukarıdaki 'güç tasarrufu' modunu devre dışı bırakmak/etkinleştirmek için sistem genelinde, kullanım desenine dayalı politikalar uygulayacaktır.

- **OsmAnd uygulamasını düzenli olarak kullanmıyorsanız *Uyarlanabilir pil* özelliğini devre dışı bırakın.** *Uyarlanabilir pil*, uygulama bazında çalışır ve kullanım desenine dayalıdır. Belirli bir uygulama üzerindeki etkisi, o uygulamanın *Pil optimizasyonundan* muaf tutulmasıyla (örneğin *Optimize edilmedi* olarak ayarlanarak) azaltılabilir. Ancak, cihaz OsmAnd'ı 'nadiren kullanılan' uygulamalar havuzunuzda değerlendirirse, *Uyarlanabilir pil* yine de OsmAnd'ın seyahat kaydı gibi ön plan hizmetlerini sonlandırabilir.

### iOS Arka Plan Uygulamalarının Davranışını Kontrol Edin {#control-the-behavior-of-ios-background-apps}

iOS, sistem kaynakları yeniden tahsis edildiğinde arka plan uygulamalarını otomatik olarak askıya alabilir veya durdurabilir. OsmAnd bu davranışı geçersiz kılamaz. Cihaz kilitliyken rota kaydı kesilirse, bu kayıtta boşluklar bırakabilir. Bu boşlukları [Rota Planla](https://docs.osmand.net/docs/user/plan-route/create-route) aracını kullanarak düzenleyebilirsiniz.

iOS'un konum takibini nasıl ele aldığı hakkında daha fazla bilgi için Apple'ın belgelerini [buradan](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1) kontrol edin.


### Android 9, 10 ve 11 için Test Edilmiş Güç Ayarları (Hardy, 2020-08-25) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Aşağıdaki Güç ayarları, Android 9, 10 ve daha sonra 11 (Samsung cihazlarda) altında OsmAnd'ın boşluksuz rotaları kaydetmesini sağlamak için başarıyla test edilmiştir. Lütfen bu **10 ayarı** gözden geçirin ve buna göre ayarlayın:

- (1) **Güç tasarrufu (modu)** = KAPALI (veya Android 10'da *Optimize Edilmiş*)
- (2) **Uyarlanabilir güç tasarrufu** = KAPALI (AÇIK olduğunda, güç tasarrufu modu bazen etkinleştirilebilir, bu da OsmAnd'ın kaydı engeller.)
- (3) **Uyarlanabilir pil** = AÇIK (Pil optimizasyonundan muaf tutulan uygulamaları etkilemez, aşağıdaki (9) numaraya bakın, **uygulama nadiren kullanılmadıkça**. Güvenli olmak için KAPALI olarak ayarlayın.)
- (4) **Kullanılmayan uygulamaları uykuya al** = AÇIK (Ancak OsmAnd pil optimizasyonundan muaf tutulmuştur, aşağıdaki (9) numaraya bakın!)
- (5) **Kullanılmayan uygulamaları otomatik devre dışı bırak** = KAPALI (Yalnızca Android 9'da mevcut gibi görünüyor.)
- (6) **Ayarları optimize et** = KAPALI (Android 10'da *Cihaz bakımı / Gelişmiş* altında, Android 11'de kaldırılmış gibi görünüyor.)
- (7) **Otomatik optimize et (günlük)** = AÇIK (Burada etkisi yok.)
- (8) **Otomatik yeniden başlat (belirlenen zamanlarda)** = KAPALI (Burada etkisi yok.)
- (9) **Pil Kullanımını Optimize Et** (Android *Ayarlar / Uygulamalar / OsmAnd / Pil* veya *Ayarlar / Uygulamalar / 3 nokta / Özel erişim / Pil kullanımını optimize et / Tümü / OsmAnd* altında) = OsmAnd'ı pil optimizasyonundan muaf tutun (çok tavsiye edilir, ancak uygulama sık sık kullanıcı tarafından başlatılıyorsa gerekli değildir).
- (10) **Arka plan etkinliğine izin ver** = Android 11 için *Uygulamalar / OsmAnd / Pil* altında OsmAnd için AÇIK

Bu ayarlardan bazıları etkileşimlidir, bu yüzden dikkatli olun. Yukarıdaki ayarları adlarına göre (parantez içindeki ifadelerle ve olmadan) en iyi şekilde arayın. Android sürümünüze bağlı olarak, bu çeşitli *Android Ayarları ekranlarına* dağılmış olabilirler:

- *Cihaz bakımı*
- *Cihaz bakımı / 3 nokta / Otomasyon*
- *Cihaz bakımı / Gelişmiş*
- *Cihaz bakımı / Pil*
- *Cihaz bakımı / Pil / Ayarlar*
- *Cihaz bakımı / Pil / Uygulama Güç Yönetimi*
- *Cihaz bakımı / Pil / Daha fazla pil ayarı*


## Kat Edilen Mesafeyi Nasıl Takip Edebilirsiniz {#how-to-track-traveled-distance}

OsmAnd'ın bir kilometre sayacına benzer özel bir widget'ı yoktur, kat ettiğiniz mesafeyi takip etmek ve gerektiğinde sıfırlamak için [Seyahat Kaydı eklentisini](../plugins/trip-recording.md#new-track-recording) kullanabilirsiniz.


## OsmAnd 3.9: Google Play Hizmetleri kullanılırken yükseklik sorunları {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play politikasını değiştirdi ve buna uymak için OsmAnd'ın 3.9 sürümünden itibaren (Nightly, F-Droid ve Huawei yapıları hariç) arka planda çalışırken (yani, Android terminolojisinde, görünür bir sistem bildirimi olan bir ön plan hizmeti olarak) konum düzeltmeleri almak için Google Play Hizmetlerini kullanması gerekmektedir.

Bu değişiklikten sonra, yükseklik kaydıyla ilgili bir sorun olduğu görülüyor: Görünüşe göre, Google Play Hizmetleri yükseklik ölçümünü çok agresif bir şekilde enterpolasyon yapıyor, bkz. [GitHub sorunu #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Bu sorun Android 10'u etkiliyor, muhtemelen Android 11'i değil. [Sorun](https://issuetracker.google.com/issues/180218747) Google'ın web sitesinde zaten rapor edildi ve muhtemelen 09-03-2021'de düzeltilecek.

Geçici bir çözüm olarak, [*OsmAnd Ayarları → Konum Kaynağı*](../personal/global-settings.md#location-source) bölümünde konum kaynağını **Google Play Hizmetleri**'nden **Android API**'ye geçirebilirsiniz.


## OsmAnd 3.9: GPS uyandırma artık sürekli ön plan hizmetiyle değiştirildi (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

3.9 sürümünden itibaren, rota kaydı veya navigasyon gerektiğinde, OsmAnd GPX'i *Android* arka plan hizmeti aracılığıyla sürekli olarak destekler ve bu, bir *Android* sistem bildirimi olarak görünür.

Daha önceki doze modu ve periyodik GPS Uyandırma stratejisi, Google Play'in Arka Plan konum erişimi üzerindeki yeni kısıtlamaları gereği kodumuzdan kaldırılmıştır (commit [Alarmda uyandırma navigasyon hizmetini bırak](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)). Sonuç olarak, aşağıdaki (A) ve (B) bölümleri yalnızca OsmAnd'ın 3.9 öncesi sürümleri için geçerlidir:

**<del> (A) GPS Uyandırma Stratejisi</del>**

- (A1) OsmAnd kullanılırken, örneğin Navigasyon. Sürekli konum bilgisi burada anahtar olduğundan, sistemin GPS modülünü her zaman açık tutarız. Pil kullanımı üzerindeki etkisi (büyüklük sırası) Android 4.4'e kadar olan eski sistemlerde saatte yaklaşık %5, yeni sistemlerde ise %2-3 civarında görünmektedir.
- (A2) Eş zamanlı navigasyon olmadan *arka plan* rota kaydı için. 15 saniyeye kadar aralıklarla kayıt için GPS'i de açık tutarız, diğer stratejiler pil gücünden pek tasarruf sağlamaz.
- (A3) >=30 saniye aralıklar için, GPS'i yalnızca her örnekleme noktası için açarız. Bu, kaydedilen noktaların doğruluğu üzerinde belirgin bir etkiye sahiptir ancak pil kullanımını 30 saniyelik rota kaydı için saatte %1,2'lik bir büyüklük sırasına düşürür.

**<del> (B) GPS Uyandırma Sorunları</del>**

GPS uyandırmayı sağlamak için şimdiye kadar Android Alarm Yöneticisini cihazı periyodik olarak uyandırmak için kullanıyoruz (Android 6'da tanıtılan Doze modundan da). Yeni Android sürümleri aşağıdaki sorunları ortaya çıkardı:

- **(B1) Alarm Yöneticisi'nin setRepeating() işlevi Android 4.4'ten itibaren kesinliğini yitirdi:**
Azaltma: Artık *setRepeating()* işlevini yalnızca Android 4.2'ye kadar kullanıyoruz, Android 4.4'ten itibaren yeni *setExact()* yöntemini ve Android 8+ için *setExactAndAllowWhileIdle()* işlevini kullanıyoruz. ([Sorun #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Android 4.4'ten itibaren, sistemler *setExact()* işlevinin tekrar tekrar yürütülme sayısını örneğin her 5 veya hatta 15 dakikada bir ile sınırlar.** (Gerçek değer cihazdan cihaza büyük ölçüde değişiyor gibi görünüyor.)
Şimdilik iyi bir çözüm bulunamadı. Mevcut azaltma, Alarm Yöneticisi uyandırmasını kullanmamamız, bunun yerine Android 5+ olan cihazlarda 5 dakikadan kısa tüm kayıt aralıkları için arka plan rota kaydı için GPS'i her zaman açık tutmamızdır. Bu, daha yüksek pil kullanımı pahasına güvenilir ve hassas rotalar üretir. ([Sorun #5632](https://github.com/osmandapp/Osmand/issues/5632))