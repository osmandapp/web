---
source-hash: eb93726e0592003532df793f15601aaea57aea0d308a2e16a1bc45bfd0e949d8
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


## Recorded Tracks are Noisy {#recorded-tracks-are-noisy}

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

- **Google Services API or Android API**. Android cihazlarda OsmAnd'ın konum verilerini nasıl alacağını daha fazla değiştirebilirsiniz. [OsmAnd Settings → Location Source](../personal/global-settings.md#location-source) bölümünde **Google Play Services** ve **Android API** arasında seçim yapın, çoğu durumda **Android API**'ye geçmek kaydedilen rotaları iyileştirmeye ve daha az gürültülü hale getirmeye yardımcı olur.


## Recorded Tracks Have Gaps {#recorded-tracks-have-gaps}

### Configuring OsmAnd for Track Recording {#configuring-osmand-for-track-recording}

- **Prevent Standalone Logging**. OsmAnd'ın ekran kapalıyken rota kaydetmesine izin vermek için Eklentiler/Seyahat Kaydı altındaki *Bağımsız kaydı engelle* ayarının devre dışı bırakıldığından emin olun.
- **Update OsmAnd**. Android versions use different strategies to reduce power consumption by [killing applications running in the background](https://dontkillmyapp.com/). Version 3.9 or higher uses a Foreground service, visible in the notification bar, [to keep the app running in the background](https://dontkillmyapp.com/) on most Android versions. This is particularly effective on Android 8+ ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255), [Issue #5587](https://github.com/osmandapp/Osmand/issues/5587)).

### Optimizing Android for Track Recording {#optimizing-android-for-track-recording}

Android 4.4'ten itibaren, güç tasarrufu özellikleri CPU kullanımını sınırlayabilir, ekran parlaklığını azaltabilir ve ekran kapalıyken arka plan uygulamalarını sonlandırabilir. Bu, OsmAnd’ın dış mekan kullanımı, harita oluşturma ve rota kaydı performansı üzerinde etkili olabilir. Android'in sonraki sürümleri, **Otomatik pil** ve **Otomatik güç tasarrufu** gibi yapay zeka tabanlı güç tasarrufu davranışları ekleyerek dinamik ve daha az tahmin edilebilir davranışlar sunmuştur. Kayıt sorunlarını önlemek için, en azından başlangıçta veya hata ayıklama için, **güç tasarrufu özelliklerini tamamen devre dışı bırakmayı düşünün**. Kullanıcılar, çoğu cihaz için pil ömrü üzerindeki etkinin kabul edilebilir olduğunu bildirmektedir.

- **Exclude OsmAnd from *Battery optimization*.** Android cihazınızın *Settings* bölümünde, OsmAnd'ı *Apps*, *Applications* veya *App Manager* altında bulun. *Battery*, *Power Savings* veya *Power Consumption* bölümünü bulun ve OsmAnd'ı pil optimizasyonundan hariç tutun. ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Disable the *Power saving* Mode.** Bu modun, OsmAnd'ın seyahat kaydı gibi ön plan hizmetlerini bile etkileme/sonlandırma olasılığı yüksektir.

- **Disable *Adaptive power saving*.** Bu ayarın 'açık' olması, yukarıdaki 'güç tasarrufu' modunu devre dışı bırakmak/etkinleştirmek için sistem genelinde, kullanım desenine dayalı politikalar uygulayacaktır.

- **Disable *Adaptive battery* unless you use the OsmAnd app regularly.** *Uyarlanabilir pil*, uygulama bazında çalışır ve kullanım desenine dayalıdır. Belirli bir uygulama üzerindeki etkisi, o uygulamanın *Battery optimization*'dan muaf tutulmasıyla (örneğin *Not optimized* olarak ayarlanarak) azaltılabilir. Ancak, *Uyarlanabilir pil* yine de OsmAnd'ın seyahat kaydı gibi ön plan hizmetlerini sonlandırabilir, eğer cihaz OsmAnd'ı 'nadiren kullanılan' uygulamalar havuzunuzda değerlendirirse.

### Tested Power Settings for Android 9, 10, and 11 (Hardy, 2020-08-25) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Aşağıdaki Güç ayarları, Android 9, 10 ve daha sonra 11 (Samsung cihazlarda) altında OsmAnd'ın boşluksuz rotaları kaydetmesini sağlamak için başarıyla test edilmiştir. Lütfen bu **10 ayarı** gözden geçirin ve buna göre ayarlayın:

- (1) **Power saving (mode)** = OFF (or *Optimized* in Android 10)
- (2) **Adaptive power saving** = OFF (When ON, power saving mode may sometimes be activated, which prevents OsmAnd from logging.)
- (3) **Adaptive battery** = ON (Does not affect apps exempted from battery optimization anyway, see (9) below, **unless the app is used rarely**. To be safe, set to OFF.)
- (4) **Put unused apps to sleep** = ON (But OsmAnd from battery optimization, see (9) below!)
- (5) **Auto disable unused apps** = OFF (Seems only present in Android 9.)
- (6) **Optimize settings** = OFF (In Android 10 under *Device care / Advanced*, in Android 11 seems gone.)
- (7) **Auto optimize (daily)** = ON (Has no effect here.)
- (8) **Auto restart (at set times)** = OFF (Has no effect here.)
- (9) **Optimize Battery Usage** (Under Android *Settings / Apps / OsmAnd / Battery* or *Settings / Apps / 3-dots / Special access / Optimize battery usage / All / OsmAnd*) = Exempt OsmAnd from battery optimization (very advisable, although not necessary if the app is user-started frequently).
- (10) **Allow background activity** = ON for OsmAnd under *Apps / OsmAnd / Battery* for Android 11

Some of these settings interact, so be accurate. The best search for the above settings by name (with and without the expressions in parentheses). Depending on your version of Android, they may be scattered over these various *Android Settings screens*:

- *Device care*
- *Device care / 3-dots / Automation*
- *Device care / Advanced*
- *Device care / Battery*
- *Device care / Battery / Settings*
- *Device care / Battery / App Power Management*
- *Device care / Battery / More battery settings*

### Control the Behavior of iOS Background Apps {#control-the-behavior-of-ios-background-apps}

iOS, sistem kaynakları yeniden tahsis edildiğinde arka plan uygulamalarını otomatik olarak askıya alabilir veya durdurabilir. OsmAnd bu davranışı geçersiz kılamaz. Cihaz kilitliyken rota kaydı kesilirse, bu kayıtta boşluklar bırakabilir. Bu boşlukları [Plan a Route](https://docs.osmand.net/docs/user/plan-route/create-route) aracını kullanarak düzenleyebilirsiniz.

iOS'un konum takibini nasıl ele aldığı hakkında daha fazla bilgi için Apple'ın belgelerini [here](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1) kontrol edin.


## How to Track Traveled Distance {#how-to-track-traveled-distance}

OsmAnd'ın bir kilometre sayacına benzer özel bir widget'ı yoktur, kat ettiğiniz mesafeyi takip etmek ve gerektiğinde sıfırlamak için [Trip Recording plugin](../plugins/trip-recording.md#new-track-recording)'i kullanabilirsiniz.  


## OsmAnd 3.9: Altitude issues when using Google Play Services {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play has changed its policy, and to comply, OsmAnd, as of version 3.9 (excluding Nightly, F-Droid, and Huawei builds) is required to use Google Play Services to obtain location fixes while running in the background (that is, in Android terminology, as a foreground service with a visible system notification).

Bu değişiklikten sonra, yükseklik kaydıyla ilgili bir sorun olduğu görülüyor: Görünüşe göre, Google Play Services yükseklik ölçümünü çok agresif bir şekilde enterpolasyon yapıyor, see [GitHub issue #10864](https://github.com/osmandapp/OsmAnd/issues/10864). This issue affects Android 10, possibly not Android 11. The [issue](https://issuetracker.google.com/issues/180218747) has already been reported on Google's website, and will probably be fixed on 09-03-2021.  

As a workaround, in [*OsmAnd Settings → Location Source*](../personal/global-settings.md#location-source) you can switch the location source from **Google Play Services** to **Android API**.


## OsmAnd 3.9: GPS wake-up now replaced by continuous foreground service (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

3.9 sürümünden itibaren, rota kaydı veya navigasyon gerektiğinde, OsmAnd GPX'i *Android* arka plan hizmeti aracılığıyla sürekli olarak destekler ve bu, bir *Android* sistem bildirimi olarak görünür.

The prior strategy of using a doze mode and periodic GPS Wake-Up has been removed from our code (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), as required by new Google Play restrictions on Background location access. As a result, the following sections (A) and (B) apply only to versions of OsmAnd before 3.9:

**<del> (A) GPS Wake-up Strategy</del>**

- (A1) While OsmAnd is used, e.g. Navigation. We keep the system's GPS module on all the time, as continuous location information is key here. Effect on battery use (order of magnitude) seems about 5% per hour on older systems up to Android 4.4, and 2-3% for newer systems.
- (A2) For *background* track recording without simultaneous navigation. For recording with up to 15-second intervals, we also keep GPS on, other strategies will not save much battery power.
- (A3) For intervals \>=30sec, we turn GPS on only for each sampling point. This has some noticeable effect on the accuracy of the points recorded but reduces battery usage to an order of magnitude 1.2% per hour for 30-second track recording.

**<del> (B) GPS Wake-up Issues</del>**

To achieve the GPS wake-up, so far we use the Android Alarm Manager to wake up the device periodically (also from Doze mode, which was introduced in Android 6). New Android versions introduced the following issues:

- **(B1) Alarm Manager's setRepeating() became inexact starting with Android 4.4:**  
Mitigation: We now use *setRepeating()* only up to Android 4.2, the new *setExact()* method starting with Android 4.4, and *setExactAndAllowWhileIdle()* for Android 8+. ([Issue #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Starting from Android 4.4, systems limit the number of times *setExact()* is executed repeatedly** to e.g. once per 5 or even 15 minutes. (The actual value seems wildly device-specific.)  
No good solution found for now. Current mitigation is we do not use Alarm Manager wake-up, instead keep GPS always on for background track logging on devices with Android 5+ for all recording intervals shorter than 5 minutes. This produces reliable and precise tracks at the cost of higher battery use. ([Issue #5632](https://github.com/osmandapp/Osmand/issues/5632))