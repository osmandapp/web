---
source-hash: 652f7e88fdf4d2bae94537d58c7ea9e1d5aa0e57dfb954e058fd661aae10355c
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

OsmAnd Tracker, gerçek zamanlı olarak GPS konumlarıyla mesajları esnek bir şekilde izlemek ve göndermek için oluşturulmuş değiştirilmiş bir Telegram istemcisidir.

[OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram), OsmAnd'da kişilerinizi bir harita üzerinde görmenize yardımcı olur. Sosyal bir yönü vardır, yani kullanmak için OsmAnd'ın seçtiği platform için kişilerinize erişim sağlamanız gerekir.

En açık sosyal platform olarak [Telegram](https://telegram.org/)'ı seçtik çünkü bir [Açık API](https://core.telegram.org/api), Açık SDK'sı var ve dahası, sonunda bir Açık Sunucu uygulamasına (Blockchain) sahip olacak.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Nasıl Çalışır? {#how-it-works}

Önemlisi, uygulamalar arasında yüksek düzeyde uyumluluk vardır. Telegram mobil uygulamasına sahip olmadan kişilerinize konumunuzu kolayca paylaşabilirsiniz (OsmAnd Online GPS Tracker bağımsız bir Telegram istemcisidir) ve tersine, kişilerinize konumunuzu görmek için [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) uygulamasına sahip olmaları gerekmez.

[OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram)'ı, Telegram uygulamasını ve OsmAnd uygulamasını ek kısıtlamalar olmaksızın alışkın olduğunuz şekilde kullanmaya devam edebilmeniz için tasarladık.

Uygulama, belirlediğiniz süre boyunca seçilen sohbetlere Canlı Konum mesajları gönderir, kişilerinizi ve gruplarınızı listeler ve konumunuzla ilgili mesajlar için sohbetleri kontrol eder, bu mesajlar daha sonra OsmAnd'daki haritada görüntülenir.
Uygulama, metin mesajlarınızı göndermez veya görüntülemez.

Aşağıdakileri etkinleştirmek için Telegram'a kayıtlı telefon numaranızı kullanarak giriş yapın:

- Konumunuzu gönderen kişilerin ve grupların listesini yönetin.
- Kişilerin ve grupların konumunu OsmAnd'daki bir harita üzerinde gerçek zamanlı olarak görüntüleyin.
- Her sohbet için konum paylaşım süresini ayrı ayrı ayarlayın.
- Konumunuzun ne sıklıkta güncellendiğini ayarlayın.
- Hareketlerinizin ve kişilerinizi kronolojisini izleyin.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

OsmAnd Online GPS Tracker APK'sını yükleyin:

- [Google Play mağazası](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [OsmAnd sunucusu](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)


## Eklenti Ayarları {#plugin-settings}

Konum paylaşım sıklığını yönetmek ve size gönderilen konumların görüntülenmesini kontrol etmek için çeşitli ayarlar bulunmaktadır.

*Ayarlar* menüsünü açmak için:

*[Konumum](#my-location-screen) ekranı → ekranı aşağı kaydır (kişiler listesi) → ⋮ → Ayarlar*
veya
*[Şimdi Canlı](#live-now-screen) ekranı → ⋮ → Ayarlar*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Konum {#position}

**Konumumu gönder** — konumunuzu saniyede bir (doğruluğu artırmak için) ile 5 dakikada bir (güç tüketimini azaltmak için) arasında bir aralıkta göndermenizi sağlar.

**Hareket etmiyor** — bir kişinin konumunun eski kabul edildiği süreyi (1 dakikadan 1 saate kadar) ayarlamanızı sağlar. Bir konum eski hale gelirse, griye döner.

**Konum geçmişi** — silinen konumdaki kişinin listeden ve OsmAnd haritasından gizleneceği süreyi (5 dakikadan 24 saate kadar) ayarlamanızı sağlar.

**Konumu gönder** - konumunuzla ilgili mesajları Telegram'da göndermek için bir kategori seçmenizi sağlar (3 gönderme türü): metin, harita, metin ve harita.

**Tampon sona erme süresi** - noktaları tamponda kaydetme süresini seçmenizi sağlar.

**Arka plan çalışması** - konum paylaşımını stabilize etmek için pil optimizasyon ayarlarını değiştirmenizi sağlar.

**Konum kaynağı** - konum belirlemek için *Google Play Hizmetleri* (varsayılan olarak) veya *Android API*'yi seçmenizi sağlar.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Birimler ve Biçimler {#units--formats}

Birimler ve biçimler için ayarlar eklemenizi sağlar. Artık konum verilerini paylaşırken Telegram mesajları için rahat değerlerinizi seçebilirsiniz.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Görünüm {#appearance}

Diğer kişilerden alınan GPS noktalarının sayısını ve sizin tarafınızdan gönderilenleri göstermenizi sağlar.


### Gizlilik {#privacy}

OsmAnd Tracker içinde proxy kullanma. Ayarlara gidin ve proxy verilerinizi yazın: *Ayarlar → Gizlilik → Proxy Ayarları*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### GPS Ayarları {#gps-settings}

Konum noktası ayarları. Örneğin, bir süre hareket etmeden tek bir konumda kalırsanız, konum noktası verileriniz gönderilmez ve GPX iziniz daha doğru ve kesin veriler gösterecektir.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Konumu şu şekilde paylaş {#share-location-as}

Bir Telegram hesabına birden fazla cihaz bağlamak isterseniz, "Cihaz ekle"ye tıklamanız ve cihaza bir ad vermeniz gerekir.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### OsmAnd Bağlantısı {#osmand-connect}

Bu ayar, konumları olan kişilerin haritada görüneceği OsmAnd sürümünü seçmenizi sağlar.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Hesap {#account}

Bu ayarı, şu anda hangi Telegram hesabını kullandığınızı kontrol etmek için kullanın. Ayrıca bu menüde, *Çıkış Yap* düğmesine dokunarak OsmAnd Telegram uygulamasından çıkış yapabilirsiniz.


### Logcat Arabelleği {#logcat-buffer}

Burada uygulamanın ayrıntılı günlüklerini kontrol edebilir ve paylaşabilirsiniz.


## Konumum Ekranı {#my-location-screen}

Bu ekranda Telegram kişilerinizi görebilirsiniz. Bunlardan bir veya daha fazlasını seçebilir, paylaşım seçeneklerini ayarlayabilir ve konumunuzu paylaşmaya başlayabilirsiniz.

İlk başlatmadan sonra, Önerilen kişiler listesini göreceksiniz. Bunlar, konumunuzu en son paylaştığınız beş kişidir. Bu kişilerle konum paylaşmaya devam etmek için yalnızca bir kez tıklayabilirsiniz.

Paylaşım Süresi, kişi için seçtiğiniz son paylaşım süresidir.

Paylaşmaya başladığınızda, *Konumum* ekranında Önerilen kişiler listesini ve *OsmAnd'a Dön* düğmesini göreceksiniz.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Şimdi Canlı Ekranı {#live-now-screen}

Bu menüde, sizinle konum paylaşan tüm kişileri görebilirsiniz. Kişiye dokunun ve **OsmAnd haritasında** bakın.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### OsmAnd Haritasındaki Aktif İşaretçi {#active-marker-on-the-osmand-map}

OsmAnd haritasında ve Telegram metninde kişilerinizi mesafe, hız ve açı hareketini izlemenizi sağlar. Kişinizin nereye ve nasıl hareket ettiğini anlayabilirsiniz.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Zaman Çizelgesi Ekranı {#timeline-screen}

Bu, uygulamanın üçüncü sekmesidir. Bu, uygulamanın üçüncü sekmesidir. Burada, sizinle paylaşılan konumların geçmişini görüntülemek için bir gün seçebilirsiniz. Bir gün seçmek, o gün konumlarını gösteren kişileri görüntüler.

İzleme, kişileriniz paylaştığında arka planda bilgi toplamanızı sağlar. Bunu yapmak için etkinleştirmeniz gerekir.

Bir kişinin konumu hakkındaki tüm bilgileri görüntülemek için simgesine dokunun veya OsmAnd'da bir GPX izini açın ve izi daha ayrıntılı olarak keşfedin ([daha fazlasını buradan okuyun](./trip-recording.md)). Ayrıca seçilen bir dönem için GPX izini paylaşabilirsiniz: bir e-postaya veya herhangi bir anlık mesajlaşma uygulamasına göndererek.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

Kişilerinizin çevrimiçi hareketini OsmAnd haritasında çevrimiçi GPS izini kullanarak görebilirsiniz. Bunu yapmak için, *Zaman Çizelgesi*'ndeki kişide *Canlı*'yı etkinleştirmeniz gerekir. Şu anda ortak çok sayıda kişi varsa, OsmAnd uygulaması izlerin rengini rastgele seçer.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

"OsmAnd'da Göster"e veya mini haritaya dokunduğunuzda, OsmAnd uygulamasında kişinizin GPX takibi için özel ayarlar seçebilir ve hareketlerini OsmAnd haritasında gerçek zamanlı olarak görebilirsiniz.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Seçilen tarihte veri toplanmamışsa, ekranda özel bir bildirim görünecektir. İleri veya geri oka dokunarak en yakın tarihe geçebilirsiniz.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## İzleyici Widget'ı {#tracker-widget}

[Widget'ı](../widgets/info-widgets.md#tracker-widget-android) görüntülemek için önce OsmAnd Tracker eklentisini etkinleştirmeniz gerekir. Bundan sonra, OsmAnd ekranının sağ üst köşesinde *Başlat* kelimesiyle bir widget görünecektir.

Devre dışı bırakmak için *Ana Menü → Ekranı Yapılandır*'a gidebilirsiniz.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

Widget'ın birkaç görünümü vardır.

1. Birincisi *Başlat*'tır.
   *Başlat*'a dokunduğunuzda, herhangi bir kişiyi seçebileceğiniz veya Önerilen Kişilere dokunabileceğiniz [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram)'a gidersiniz.
2. İkincisi, konumunuzu paylaşmaya başladığınızda, widget görünümünü değiştirir.

   - Yeşil *Tamam* emoji simgesi, konumunuzun şu anda paylaşıldığı anlamına gelir. Her şey normal, paylaşım hatasız çalışıyor.
   - Turuncu *Tamam* emoji simgesi, konumunuzun gönderilemediği anlamına gelir. İnternet veya GPS bağlantısında bir sorun var.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Uzun süre internet bağlantınız yoksa, konum noktalarınız OsmAnd Tracker arabelleğine kaydedilir. OsmAnd'daki widget görünümünü gri bir emoji simgesine değiştirir. Arabelleğin konum noktalarınızı ne kadar süredir kaydettiğini, arabellek dolum süresini gösterir.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. İnternet bağlantısı geri gelir gelmez, arabellekten konum noktalarını yüklemeye başlayacaktır. OsmAnd widget'ı görünümünü değiştirecek ve içindeki dakika sayısı azalmaya başlayacaktır. Arabellekten tüm konum noktaları Telegram'a yüklendiğinde, widget'ta *Tamam* emoji simgesi görünecektir.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Widget'ı *Tamam* emoji simgesi olarak görüyorsanız, her şeyin yolunda olduğu anlamına gelir. Değişim süreci sorunsuz devam ediyor.


## OsmAnd Asistanı {#osmand-assistant}

OsmAnd uygulamasının, OsmAnd Telegram'ı üçüncü taraf izleyiciler veya API'lerle entegre etmenize yardımcı olan "OsmAnd Asistanı" adlı kendi Telegram botu vardır. Yalnızca konumunuzu değil, aynı zamanda bisikletinizin veya API aracılığıyla erişilebilen bir grup insanın konumunu da paylaşabileceksiniz. OsmAnd Telegram, konumlarınızın OsmAnd'ın kendisinde harita üzerinde güzel bir sunumunu sağlayacaktır.

Bu yeni uygulama hakkındaki düşüncelerinizi [Twitter](https://twitter.com/osmandapp) ve diğer sosyal kanallarda bizimle paylaşın.

Kişilerin GPS konumlarını haritada görüntülemek için [OsmAnd veya OsmAnd+](./../purchases/android.md)'ın en son sürümüne ihtiyacınız vardır. Desteklenen minimum OsmAnd veya OsmAnd+ sürümü 3.0.4'tür.

> *Son güncelleme: Temmuz 2024*