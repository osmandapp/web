---
source-hash: 49c536aaf8d6f4f285889d13e50c872cab450c0dc30630d0930692ab61fb581c
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


## Kilitlenme ve Uygulama Günlükleri {#crash-and-app-logs}

OsmAnd, geliştiricilere iki tür veri göndermenize olanak tanır:

- **Kilitlenme günlükleri**. OsmAnd uygulaması çökmeye neden olan kritik bir hata veya istisna ile karşılaştığında oluşturulur. Bu günlükler, derleme verileri, yığın izlemeleri, hata mesajları ve diğer ilgili ayrıntılar dahil olmak üzere arıza sırasındaki uygulamanın durumu hakkında ayrıntılı bilgi sağlar.
- **Geçerli oturum/uygulama günlükleri**. Çeşitli olayları ve mesajları yakalayan OsmAnd günlük akışının bir kaydı. Bu günlükler, geliştiricilerin uygulama davranışını izlemesine, yürütme akışını izlemesine, belirli eylemleri izlemesine ve kilitlenmeyle ilgili olmayan sorunları araştırmasına yardımcı olur. Logcat günlükleri genellikle uygulamanın en son başlatıldığı zamandan itibaren etkinlik kayıtlarını içerir.

:::caution Özel bilgileriniz
Uygulama günlüklerini gönderirken dikkatli olun, çünkü cihaz konumu, arama sorguları, rota oluşturma sonuçları ve navigasyon verileri gibi özel bilgiler içerebilir.
:::


### OsmAnd Uygulamasından Günlük Gönderme {#send-logs-from-osmand-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'den kilitlenme günlükleri gönder 1](@site/static/img/troubleshooting/send_logs_andr_5.webp)  ![Android'den kilitlenme günlükleri gönder 2](@site/static/img/troubleshooting/send_logs_andr_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'tan kilitlenme günlükleri gönder](@site/static/img/troubleshooting/send_logs_ios.webp)

</TabItem>

</Tabs>

1. *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/>* veya *<Translate android="true" ids="send_logcat_log"/>* bölümüne gidin (*iOS'ta Geçerli uygulama günlüğünü gönder*). Durumunuza bağlı olarak uygun günlük türünü seçin. Günlük türleri arasındaki farklar için [Kilitlenme ve Uygulama Günlükleri](#crash-and-app-logs) bölümüne başvurabilirsiniz.
2. Açılır menüde Gmail'i veya tercih ettiğiniz e-posta uygulamasını seçin. Günlükleri `support@osmand.net` adresine göndermenizi öneririz.
3. *Gönder* düğmesine dokunun.

<!--
### Send Logs from iOS Devices {#send-logs-from-ios-devices}

1. Logs from iOS devices can be sent:

    - Automatically.
        - Navigate to OsmAnd app *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.  
        - Then, using your email app, we recommend sending the logs to `support@osmand.net`.

    - Manually.
        - Navigate to the iOS system app *Files → On my iPhone (or On my iPad) → OsmAnd Maps → Logs*.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. Send [IPS-format](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) of logs and authorization data:
    - On iOS 15 or older: *Settings → Analytics → Analytics Data → OsmAnd Maps ips-format file*.
    - On iOS 16 or newer:  *Settings → Privacy & Security → Analytics & Improvements → Analytics Data → OsmAnd Maps ips-format file*.
    - Then, using your email app, we recommend sending the logs to `support@osmand.net`.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_log_ios.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/log_1_ios.png)
-->

## Bellek Sorunları için Yığın Histogramı (Android) {#heap-histogram-for-memory-problems-android}

:::caution Yalnızca Android
:::

*Yığın histogramı*, uygulamanın Java belleğini dolduranları gösteren bir tablodur: sınıf adları, nesne sayıları ve boyutlarıyla birlikte. Geliştiricilerin uygulama yavaşladığında, donduğunda veya bir süre sonra kapandığında belleği neyin tükettiğini bulmasına yardımcı olur. Konumlarınızı, parça adlarınızı veya arama sorgularınızı içermez. OsmAnd cihazda tam bir bellek dökümü alır, bunu histograma dönüştürür ve dökümü hemen siler.

Döküm almak uygulamayı **5–10 saniye dondurur**. Bu süre içinde ekrana dokunursanız Android *OsmAnd yanıt vermiyor* uyarısı gösterebilir. Bu nedenle otomatik toplama **varsayılan olarak kapalıdır**.

**Ne zaman açmalısınız:**

- OsmAnd kendi kendine kapanıyor veya *yanıt vermiyor* uyarısı tekrar tekrar gösteriyorsa, özellikle bir süre kullanımdan sonra veya arama, çok sayıda POI içeren harita ya da çok sayıda parça içeren *Yerlerim* açıldığında.
- Uygulama çalıştıkça yavaşlıyor ve yeniden başlatmak işe yarıyorsa.
- Çökme raporu uygulamanın bellek tükettiğini belirtiyorsa (`OutOfMemoryError`).
- OsmAnd desteği sizden bir yığın histogramı toplamanızı istediyse.

**Ne zaman kapalı bırakmalısınız:**

- Uygulama normal çalışırken günlük kullanım ve navigasyon.
- Her başlangıçta hemen oluşan çökmeler veya tek bir dosya açma gibi belirli bir eylemle ilgili çökmeler. Bu durumda normal bir [kilitlenme günlüğü](#send-logs-from-osmand-app) yeterlidir.

**Nasıl toplanır ve gönderilir:**

1. [OsmAnd geliştirme eklentisini](../plugins/development.md) etkinleştirin ve *Ana Menü → Eklentiler → OsmAnd geliştirme → Ayarlar → Bellek → Java belleği* bölümüne gidin.
2. *Yığın dökümü* panelinde aşağıdakilerden birini seçin:
    - **Yüksek kullanımda topla**. Java belleği neredeyse dolduğunda histogram otomatik olarak toplanır, en fazla 30 dakikada bir ve bir sonraki çökme raporuna eklenir. Sorun tekrar oluşana kadar uygulamayı normal şekilde kullanmaya devam edin.
    - **Şimdi topla ve analiz et**. Histogramı hemen toplar ve sonucu gösterir. Uygulama zaten yavaşladığında ve *Java belleği* yüksek kullanım gösteriyorsa kullanın.
3. En son raporu geliştiricilere göndermek için **Raporu paylaş** düğmesine dokunun veya uygulama bir sonraki başladığında çökme iletişim kutusundan gönderin.
4. Rapor gönderildikten sonra *Yüksek kullanımda topla* seçeneğini kapatın.

![Java belleği Android](@site/static/img/troubleshooting/heap_histogram_andr_1.webp)  ![Yığın dökümü paneli Android](@site/static/img/troubleshooting/heap_histogram_andr_2.webp)


## Tombstone Dosyaları Gönderme (Android) {#send-tombstone-files-android}

:::caution Kritik
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
  
Hata raporu hazırlandıktan sonra bir bildirim alacaksınız. Raporu cihazınıza indirmek için bildirim kutusuna dokunun. Dosyayı açın ve tombstone dosyalarını OsmAnd geliştiriciler ekibine gönderin (e-posta: `support@osmand.net`).

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
- *Geliştirici seçeneklerinde*,enable  *USB hata ayıklamasını* etkinleştirin.

Ardından, cihazınızı USB aracılığıyla iş istasyonunuza bağlayın. İlk kez bağlanıyorsanız, hata ayıklamaya izin vermek için bir açılır pencere görünecektir.

#### Hata Raporu Oluştur {#generate-bug-report}

1. Bir komut satırı terminali açın. Mac veya Linux'ta *Terminal* uygulamasını, Windows'ta ise *Komut Satırı*'nı kullanın.
2. *cd* komutunu kullanarak ADB'nin bulunduğu platform-tools klasörüne gidin (örneğin, 'cd /Users/Kullanıcıadı/İndirilenler/Araçlar').
3. Hata raporunu oluşturun:
   - Mac'te: ```adb bugreport```
   - Windows'ta: ```adb.exe bugreport```
4. Raporun oluşturulması için birkaç dakika bekleyin. Ortaya çıkan dosya platform araçları klasörüne kaydedilecektir.
5. Dosyayı açın.
6. *tombstone_00*, *tombstone_01* ve benzeri dosyaları içeren *tombstones* klasörünü bulun.
7. Tombstone dosyalarını `support@osmand.net` adresine gönderin.

<!--
* Open the terminal and call the command:  
```adb bugreport ./output.zip```  
where output.zip is the name of the result file  

* Unzip the result file:  
```unzip file.zip -d destination_folder```  

* Find tombstones folder:  
```cd FS/data/tombstones```
Where you find files like  -->

### Rootlu Cihazları veya Android Studio Emülatörünü Kullanma {#using-rooted-devices-or-android-studio-emulator}

- Cihazınıza root erişimi ile doğrudan */data/tombstones* klasörünü açabilirsiniz.  

- Android Studio'da, *Cihaz Dosya Gezgini*'ne gitmek için emülatörü kullanın ve /data/tombstones klasörünü bulun. İçinde *tombstone_00*, *tombstone_01* ve diğerleri gibi adlandırılmış dosyalar bulacaksınız. Bu dosyaları indirin ve `support@osmand.net` adresine gönderin.

Hata raporları hakkında daha fazla ayrıntı için [Android belgelerine](https://developer.android.com/studio/debug/bug-report) bakın.