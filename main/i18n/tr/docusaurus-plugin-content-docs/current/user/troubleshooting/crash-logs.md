---
source-hash: 1a33a1b4a2dedfaff07a0bf3e3e748f9060a255db1a4b2b9c0fb3d363a38cdf0
sidebar_position: 5
title:  Kilitlenme Günlükleri
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Genel Bakış {#overview}

Kilitlenme günlükleri, geliştiricilerin uygulamanın çökmesine veya beklenmedik şekilde davranmasına neden olan sorunları ve hataları belirlemesine ve düzeltmesine yardımcı olan değerli tanılama araçlarıdır. Android cihazınızdan OsmAnd geliştirme ekibiyle günlükleri paylaşmak mümkündür. Şu anda, iOS kullanıcıları göndermek için yalnızca bir tür kilitlenme günlüğü seçeneğine sahiptir.


## Kilitlenme ve Logcat Günlükleri {#crash-and-logcat-logs}

OsmAnd, geliştiricilere iki tür veri göndermenize olanak tanır:

- **Kilitlenme günlükleri**. OsmAnd uygulaması çökmeye neden olan kritik bir hata veya istisna ile karşılaştığında oluşturulur. Bu günlükler, derleme verileri, yığın izlemeleri, hata mesajları ve diğer ilgili ayrıntılar dahil olmak üzere arıza sırasındaki uygulamanın durumu hakkında ayrıntılı bilgi sağlar.
- **Logcat günlükleri**. Çeşitli olayları ve mesajları yakalayan OsmAnd günlük akışının bir kaydı. Bu günlükler, geliştiricilerin uygulama davranışını izlemesine, yürütme akışını izlemesine, belirli eylemleri izlemesine ve kilitlenmeyle ilgili olmayan sorunları araştırmasına yardımcı olur. Logcat günlükleri genellikle uygulamanın en son başlatıldığı zamandan itibaren etkinlik kayıtlarını içerir.

:::caution Özel bilgileriniz
Cihaz konumu, arama sorguları, rota oluşturma sonuçları ve navigasyon verileri gibi özel bilgiler içerebileceğinden logcat günlüklerini gönderirken dikkatli olun.
:::


### OsmAnd Uygulamasından Günlük Gönderme (Android) {#send-logs-from-osmand-app-android}

1. *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/> (<Translate android="true" ids="send_logcat_log"/>)* bölümüne gidin. Durumunuza bağlı olarak uygun günlük türünü seçin. Günlük türleri arasındaki farklar için [Kilitlenme ve Logcat Günlükleri](#crash-and-logcat-logs) bölümüne başvurabilirsiniz.
2. Açılır menüde Gmail'i veya tercih ettiğiniz e-posta uygulamasını seçin. E-posta otomatik olarak oluşturulacaktır.
3. *Gönder* düğmesine dokunun.

![Android'den kilitlenme günlükleri gönder 1](@site/static/img/troubleshooting/send_logs_andr_5.png)  ![Android'den kilitlenme günlükleri gönder 2](@site/static/img/troubleshooting/send_logs_andr_2.png)


### iOS Cihazlardan Günlük Gönderme {#send-logs-from-ios-devices}

1. iOS cihazlardan günlükler gönderilebilir:

    - Otomatik olarak.
        - OsmAnd uygulaması *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)* bölümüne gidin.  
        - Ardından, e-posta uygulamanızı kullanarak günlükleri `crash@osmand.net` adresine göndermenizi öneririz.

    - Manuel olarak.
        - iOS sistem uygulaması *Dosyalar → iPhone'umda (veya iPad'imde) → OsmAnd Haritalar → Günlükler* bölümüne gidin.

    ![iOS kilitlenme günlükleri gönder 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![iOS kilitlenme günlükleri gönder 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. IPS formatında günlükleri ve yetkilendirme verilerini gönderin:
    - iOS *Ayarlar → Analiz → Analiz Verileri → OsmAnd Haritalar ips-format dosyası* bölümüne gidin (iOS 17'ye kadar).
    - iOS *Ayarlar → Gizlilik ve Güvenlik → Analiz ve İyileştirmeler → Analiz Verileri → OsmAnd Haritalar ips-format dosyası* bölümüne gidin (iOS 18'den itibaren).
    - Ardından, e-posta uygulamanızı kullanarak günlükleri `crash@osmand.net` adresine göndermenizi öneririz.

    ![iOS kilitlenme günlükleri gönder 1](@site/static/img/troubleshooting/send_log_ios.png)  ![iOS kilitlenme günlükleri gönder 2](@site/static/img/troubleshooting/log_1_ios.png)


## Tombstone Dosyaları Gönderme (Android) {#send-tombstone-files-android}

:::caution Çok Önemli
Yalnızca ileri düzey kullanıcılar için!
:::

Bazı karmaşık veya olağandışı durumlarda, *[Tombstone dosyaları](https://source.android.com/docs/core/tests/debug)* gerekebilir. Bu dosyalar, çöken bir işlemdeki tüm iş parçacıkları (yalnızca hataya neden olan değil) için ayrıntılı yığın izlemeleri, eksiksiz bir bellek haritası ve tüm açık dosya tanımlayıcılarının bir listesini sağlar. Tombstone dosyaları, Android platformundaki yerel kodla ilgili sorunları ayıklamak ve teşhis etmek için hayati öneme sahiptir.


### Cihazınızı Kullanma {#using-your-device}

Tombstone dosyalarını dışa aktarmak için Android sistem ayarlarını kullanarak bir hata raporu oluşturmanız gerekir:

1. *Geliştirici seçeneklerini* etkinleştirin (bu ekran varsayılan olarak gizlidir).
    - *Ayarlar → Telefon hakkında → Yazılım bilgileri* bölümüne gidin (bu yol Samsung cihazlar için geçerlidir).
    - Geliştirici modunun etkin olduğunu onaylayan bir açılır pencere gelene kadar *Yapı numarasına* yedi kez dokunun.

2. Genellikle ayarlar listesinin en altında bulunan *Geliştirici seçeneklerine* gidin. Arama işlevini de kullanabilirsiniz.
    - *Hata raporu al* seçeneğine dokunun.
    - Hata raporunun türünü seçin ve *Rapor* öğesine dokunun.
  
Hata raporu hazırlandıktan sonra bir bildirim alacaksınız. Raporu cihazınıza indirmek için bildirim kutusuna dokunun. Dosyayı açın ve tombstone dosyalarını OsmAnd geliştiriciler ekibine gönderin (e-posta: `crash@osmand.net`).

![Android'den kilitlenme günlükleri gönder 3](@site/static/img/troubleshooting/send_logs_andr_3.png)  ![Android'den kilitlenme günlükleri gönder 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
Hata raporlarının uygulama kullanımı veya konum dahil olmak üzere özel veriler içerebileceğini lütfen unutmayın.
:::

### ADB Kullanma {#using-adb}

Android Hata Ayıklama Köprüsü (ADB), geliştiricilerin uygulamalarını hata ayıklamasına olanak tanıyan bir komut satırı aracıdır. Tombstone dosyalarını dışa aktarmak için ADB'yi kullanmak üzere önce indirip yüklemeniz gerekir. [Resmi Android geliştirici sitesinde](https://developer.android.com/tools/releases/platform-tools) sağlanan talimatları izleyin.

#### Cihazınızı Hazırlayın {#prepare-your-device}

*Geliştirici seçeneklerinin* etkinleştirildiğinden (bu ekran varsayılan olarak gizlidir) ve *USB hata ayıklamasının* açık olduğundan emin olun:

- *Ayarlar → Telefon hakkında → Yazılım bilgileri* bölümüne gidin.
- Geliştirici modunun etkin olduğunu onaylayan bir açılır pencere gelene kadar *Yapı numarasına* yedi kez dokunun.
- *Geliştirici seçeneklerinde*, *USB hata ayıklamasını* etkinleştirin.

Ardından, cihazınızı USB aracılığıyla iş istasyonunuza bağlayın. İlk kez bağlanıyorsanız, hata ayıklamaya izin vermek için bir açılır pencere görünecektir.

#### Hata Raporu Oluştur {#generate-bug-report}

1. Bir komut satırı terminali açın. Mac veya Linux'ta *Terminal* uygulamasını, Windows'ta ise *Komut İstemi*'ni kullanın.
2. *cd* komutunu kullanarak ADB'nin bulunduğu platform-tools klasörüne gidin (örneğin, 'cd /Users/Kullanıcıadı/İndirilenler/Araçlar').
3. Hata raporunu oluşturun:
   - Mac'te: ```adb bugreport```
   - Windows'ta: ```adb.exe bugreport```
4. Raporun oluşturulması için birkaç dakika bekleyin. Ortaya çıkan dosya platform araçları klasörüne kaydedilecektir.
5. Dosyayı açın.
6. *tombstone_00*, *tombstone_01* ve benzeri dosyaları içeren *tombstones* klasörünü bulun.
7. Tombstone dosyalarını `crash@osmand.net` adresine gönderin.

<!--
* Terminali açın ve komutu çağırın:  
```adb bugreport ./output.zip```  
burada output.zip, sonuç dosyasının adıdır  

* Sonuç dosyasını açın:  
```unzip file.zip -d destination_folder```  

* Tombstones klasörünü bulun:  
```cd FS/data/tombstones```
Burada şuna benzer dosyalar bulursunuz:  -->

### Rootlu Cihazları veya Android Studio Emülatörünü Kullanma {#using-rooted-devices-or-android-studio-emulator}

- Cihazınıza root erişimi ile doğrudan */data/tombstones* klasörünü açabilirsiniz.  

- Android Studio'da, *Cihaz Dosya Gezgini*'ne gitmek için emülatörü kullanın ve /data/tombstones klasörünü bulun. İçinde *tombstone_00*, *tombstone_01* ve diğerleri gibi adlandırılmış dosyalar bulacaksınız. Bu dosyaları indirin ve `crash@osmand.net` adresine gönderin.

Hata raporları hakkında daha fazla ayrıntı için [Android belgelerine](https://developer.android.com/studio/debug/bug-report) bakın.