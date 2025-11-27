---
source-hash: ed4b1b02f7f55c370674eabb71f00501510288e583e3135341a0905ed0b8ad69
sidebar_position: 11
title:  OsmAnd Tracker
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
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoAndroidOnly />

## Genel Bakış {#overview}

OsmAnd Tracker, esnek izleme ve GPS konumlarıyla gerçek zamanlı mesaj gönderme için oluşturulmuş değiştirilmiş bir Telegram istemcisidir.  

[OsmAnd takipçisi](https://play.google.com/store/apps/details?id=net.osmand.telegram), kişilerinizi OsmAnd'deki bir harita üzerinde görmenize yardımcı olur. Sosyal bir yönü vardır, yani kullanmak için OsmAnd'in seçtiği platform için kişilerinize erişim sağlamanız gerekir.  

En açık sosyal platform olarak [Telegram](https://telegram.org/)'ı seçtik çünkü bir [Açık API](https://core.telegram.org/api), Açık SDK'ya sahip ve dahası, sonunda bir Açık Sunucu uygulamasına (Blockchain) sahip olacak.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Nasıl Çalışır? {#how-it-works}

Önemli olarak, uygulamalar arasında yüksek düzeyde uyumluluk vardır. Telegram mobil uygulamasına sahip olmadan konumunuzu kişilerinizle kolayca paylaşabilirsiniz (OsmAnd Online GPS Tracker bağımsız bir Telegram istemcisidir) ve tersine, kişilerinizin konumunuzu görmek için [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) uygulamasına sahip olmaları gerekmez.  

[OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram)'ı, Telegram uygulamasını ve OsmAnd uygulamasını ek kısıtlamalar olmaksızın alıştığınız şekilde kullanmaya devam edebilmeniz için tasarladık.  

Uygulama, belirlediğiniz süre boyunca seçilen sohbetlere Canlı Konum mesajları gönderir, kişilerinizin ve gruplarınızın bir listesini görüntüler ve sohbetleri konumunuzla ilgili mesajlar için kontrol eder, bunlar daha sonra OsmAnd'deki haritada görüntülenir.
Uygulama metin mesajlarınızı göndermez veya görüntülemez.  

Aşağıdakileri etkinleştirmek için Telegram'a kayıtlı telefon numaranızı kullanarak oturum açın:

- Konumlarını size gönderen kişilerin ve grupların listesini yönetin.
- Kişilerin ve grupların konumunu OsmAnd'deki bir harita üzerinde gerçek zamanlı olarak görüntüleyin.
- Konumu paylaşma süresini her sohbet için ayrı ayrı ayarlayın.
- Konumunuzun ne sıklıkta güncellendiğini ayarlayın.
- Hareketlerinizin ve kişilerinizin kronolojisini izleyin.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

OsmAnd Online GPS Tracker'ı yükleyebilirsiniz:

- [Google Play mağazası](https://play.google.com/store/apps/details?id=net.osmand.telegram)'ndan
- veya [OsmAnd sunucusu](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)'ndan (APK dosyası)


## Eklenti Ayarları {#plugin-settings}

Konum paylaşım sıklığını yönetmek ve size gönderilen konumların görüntülenmesini kontrol etmek için çeşitli ayarlar vardır.

*Ayarlar* menüsünü açmak için:  

*[Konumum](#my-location-screen) ekranı → ekranı aşağı kaydırın (kişiler listesi) → ⋮ → Ayarlar*  
veya  
*[Şimdi Canlı](#live-now-screen) ekranı → ⋮ → Ayarlar*  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Konum {#position}

**Konumumu gönder** — konumunuzu saniyede bir (doğruluğu artırmak için) ile 5 dakikada bir (güç tüketimini azaltmak için) arasında gönderme aralığını ayarlamanıza olanak tanır.

**Hareket etmiyor** — bir kişinin konumunun güncel olmadığı kabul edildikten sonraki süreyi (1 dakikadan 1 saate kadar) ayarlamanıza olanak tanır. Bir konum güncel değilse, griye döner.

**Konum geçmişi** — silinen konumlu kişinin listeden ve OsmAnd haritasından gizleneceği süreyi (5 dakikadan 24 saate kadar) ayarlamanıza olanak tanır.

**Konumu şu şekilde gönder** - Telegram'da konumunuzla ilgili mesajları göndermek için bir kategori seçmenize olanak tanır (3 tür gönderme): metin, harita, metin ve harita.

**Tampon sona erme süresi** - noktaları tamponda kaydetme süresini seçmenize olanak tanır.

**Arka plan çalışması** - konum paylaşımını stabilize etmek için pil optimizasyon ayarlarını değiştirmenize olanak tanır.

**Konum kaynağı** - konum belirlemek için *Google Play Hizmetleri* (varsayılan olarak) veya *Android API*'yi seçmenize olanak tanır.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Birimler ve Biçimler {#units--formats}

Birimler ve biçimler için ayarlar eklemenize olanak tanır. Artık konum verilerini paylaşırken Telegram mesajları için rahat değerlerinizi seçebilirsiniz.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Görünüm {#appearance}

Diğer kişilerden alınan GPS noktalarının sayısını ve sizin tarafınızdan gönderilenleri göstermenize olanak tanır.


### Gizlilik {#privacy}

OsmAnd Tracker içinde proxy kullanma. Ayarlar'a gidin ve proxy verilerinizi yazın: *Ayarlar → Gizlilik → Proxy Ayarları*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### GPS Ayarları {#gps-settings}

Konum noktası ayarları. Örneğin, bir süre hareket etmeden tek bir konumda kalırsanız, konum noktası verileriniz gönderilmez ve GPX iziniz daha doğru ve kesin veriler gösterecektir.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Konumu şu şekilde paylaş {#share-location-as}

Birden fazla cihazı tek bir Telegram hesabına bağlamak istiyorsanız, "Cihaz ekle"ye tıklamanız ve cihaza bir ad vermeniz gerekir.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### OsmAnd Bağlantısı {#osmand-connect}

Bu ayar, konumlarıyla birlikte kişilerinizi haritada görüneceği OsmAnd sürümünü seçmenize olanak tanır.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Hesap {#account}

Hangi Telegram hesabını kullandığınızı kontrol etmek için bu ayarı kullanın. Ayrıca bu menüde, *Çıkış Yap* düğmesine dokunarak OsmAnd Telegram uygulamasından çıkış yapabilirsiniz.  


### Logcat Tamponu {#logcat-buffer}

Burada uygulamanın ayrıntılı günlüklerini kontrol edebilir ve paylaşabilirsiniz.


## Konumum Ekranı {#my-location-screen}

Bu ekranda Telegram kişilerinizi görebilirsiniz. Bir veya daha fazlasını seçebilir, paylaşım seçeneklerini ayarlayabilir ve konumunuzu paylaşmaya başlayabilirsiniz.  

İlk başlatmadan sonra, Önerilen kişiler listesini göreceksiniz. Bunlar, konumunuzu paylaştığınız en son beş kişidir. Bu kişilerle konumunuzu paylaşmaya devam etmek için yalnızca bir kez tıklayabilirsiniz.  

Paylaşım Süresi, kişi için seçtiğiniz son paylaşım süresidir.  

Paylaşmaya başladığınızda, *Konumum* ekranında Önerilen kişiler listesini ve *OsmAnd'e Geri Dön* düğmesini göreceksiniz.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Şimdi Canlı Ekranı {#live-now-screen}

Bu menüde, sizinle konum paylaşan tüm kişileri görebilirsiniz. Kişiye dokunun ve **OsmAnd haritasında** görüntüleyin.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### OsmAnd Haritasında Etkin İşaretleyici {#active-marker-on-the-osmand-map}

Kişilerinizin OsmAnd haritasındaki ve Telegram metnindeki mesafe, hız ve açı hareketini izlemenize olanak tanır. Kişinizin nereye ve nasıl hareket ettiğini anlayabilirsiniz.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Zaman Çizelgesi Ekranı {#timeline-screen}

Bu, uygulamanın üçüncü sekmesidir. Bu, uygulamanın üçüncü sekmesidir. Burada, sizinle paylaşılan konumların geçmişini görüntülemek için bir gün seçebilirsiniz. Bir gün seçmek, o gün konumlarını gösteren kişileri görüntüler.  

İzleme, kişileriniz paylaştığında arka planda bilgi toplamanıza olanak tanır. Bunu yapmak için etkinleştirmeniz gerekir.

Bir kişinin konumu hakkındaki tüm bilgileri görüntülemek için simgesine dokunun veya OsmAnd'de bir GPX izini açın ve izi daha ayrıntılı olarak keşfedin ([buradan daha fazla okuyun](./trip-recording.md)). Ayrıca seçilen bir dönem için GPX izini paylaşabilirsiniz: bir e-postaya veya herhangi bir anlık mesajlaşma uygulamasına göndererek.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

Çevrimiçi GPS izini kullanarak kişilerinizin çevrimiçi hareketini OsmAnd haritasında görebilirsiniz. Bunu yapmak için, *Zaman Çizelgesi*'ndeki kişide *Canlı*'yı etkinleştirmeniz gerekir. Şu anda ortak birçok kişi varsa, OsmAnd uygulaması izlerin rengini rastgele seçer.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

"OsmAnd'de Göster"e veya mini haritaya dokunduğunuzda, OsmAnd uygulamasında kişinizin GPX takibi için özel ayarlar seçebilir ve hareketlerini OsmAnd haritasında gerçek zamanlı olarak görebilirsiniz.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Seçilen tarihte toplanan veri yoksa, ekranda özel bir bildirim görünecektir. İleri veya geri oka dokunarak en yakın tarihe geçebilirsiniz.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Takipçi Pencere Öğesi {#tracker-widget}

[Pencere öğesini](../widgets/info-widgets.md#trip-recording-widgets) görüntülemek için önce OsmAnd Tracker eklentisini etkinleştirmeniz gerekir. Bundan sonra, OsmAnd ekranının sağ üst köşesinde *Başlat* kelimesiyle bir pencere öğesi görünecektir.  

Devre dışı bırakmak için *Ana Menü → Ekranı Yapılandır*'a gidebilirsiniz.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png)   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

Pencere öğesinin birkaç görünümü vardır.  

1. İlki *Başlat*'tır.  
   *Başlat*'a dokunduğunuzda, [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram)'a gidersiniz, burada herhangi bir kişiyi seçebileceğiniz veya Önerilen Kişiler'e dokunabileceğiniz.  
2. İkincisi, konumunuzu paylaşmaya başladığınızda, pencere öğesi görünümünü değiştirir.  

   - Yeşil *Tamam* emoji simgesi, konumunuzun şu anda paylaşıldığı anlamına gelir. Her şey normal, paylaşım hatasız çalışıyor.  
   - Turuncu *Tamam* emoji simgesi, konumunuzun gönderilemediği anlamına gelir. İnternet veya GPS bağlantısında bir sorun var.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Uzun süre İnternet bağlantınız yoksa, konum noktalarınız OsmAnd Tracker tamponunda kaydedilir. OsmAnd'deki pencere öğesi görünümünü gri bir emoji simgesine değiştirir. Tamponun dolum süresini, tamponun konum noktalarınızı ne kadar süredir kaydettiğini gösterir.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. İnternet bağlantısı geri gelir gelmez, tampondan konum noktalarını yüklemeye başlayacaktır. OsmAnd pencere öğesi görünümünü değiştirecek ve içindeki dakika sayısı azalmaya başlayacaktır. Tampondaki tüm konum noktaları Telegram'a yüklendiğinde, pencere öğesinde *Tamam* emoji simgesi görünecektir.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Pencere öğesini *Tamam* emoji simgesi olarak görürseniz, her şeyin yolunda olduğu anlamına gelir. Değişim süreci sorunsuz bir şekilde devam ediyor.  


## OsmAnd Asistanı {#osmand-assistant}

OsmAnd uygulamasının, OsmAnd Telegram'ı üçüncü taraf takipçiler veya API'lerle entegre etmenize yardımcı olan "OsmAnd Asistanı" adlı kendi Telegram botu vardır. Yalnızca konumunuzu değil, aynı zamanda bisikletinizin veya API aracılığıyla erişilebilen yarışan bir grup insanın konumunu da paylaşabileceksiniz. OsmAnd Telegram, konumlarınızın OsmAnd'in kendisindeki haritada güzel bir sunumunu sağlayacaktır.  

Bu yeni uygulama hakkındaki düşüncelerinizi [X](https://x.com/osmandapp) ve diğer sosyal kanallarda bizimle paylaşın.

Kişilerin GPS konumlarını haritada görüntülemek için [OsmAnd veya OsmAnd+](./../purchases/android.md)'ın en son sürümüne ihtiyacınız vardır. Desteklenen minimum OsmAnd veya OsmAnd+ sürümü 3.0.4'tür.