---
source-hash: 4279e8b0f36e69d2e860ec2e48cb3a48d0b171f309dc5569b62b8e5d94ae87fa
sidebar_position: 3
title: Navigasyon
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Rota Hesaplama {#route-calculation}

### Rota hesaplama yavaş {#route-calculation-is-slow}

*Android*. OsmAnd iki farklı **çevrimdışı rota motoru** kullanır: *Java tabanlı bir motor* ve *Yerel (C++) bir motor*.

- *Java tabanlı motor* [Güvenli Modda](../plugins/development.md#safe) kullanılır, ancak yerel motordan yaklaşık 10 kat daha yavaştır. Ayrıca, *Hesaplamak için yeterli bellek yok* gibi hatalara yol açabilecek katı bellek sınırlamaları vardır. Bu sorunla karşılaşırsanız, *Eklentiler → OsmAnd geliştirme → Ayarlar →* [*Güvenli Mod*](../plugins/development.md#safe) bölümüne gidin ve bu seçeneğin devre dışı bırakıldığından emin olun.
- *Yerel (C++) motor* daha iyi performans sunar, ancak verimliliği cihazınızın belleğine ve işlemci yeteneklerine bağlıdır. Genel olarak, yerel yönlendirme 300 km'nin altındaki rotalar için iyi performans gösterir ve rota hesaplama süreleri 15 saniyeden 4 dakikaya kadar değişir. İşlem 4 dakikadan uzun sürerse, uygulamanın çökebileceği için durdurulması tavsiye edilir.


### 250 km'den uzun rotalar nasıl hesaplanır? {#how-to-calculate-routes-longer-than-250km}

1. Uygulama 7-8 dakikalık hesaplama süresinden sonra bir rota göstermezse, [ara noktalar yerleştirmeyi](../navigation/setup/route-navigation.md#route-recalculation) düşünün (örneğin otoyollarda yerler seçin). 3-4 ara nokta, 1000 km'lik rotaları bile hesaplamak için yeterli olacaktır.

2. Üst düzey cihazlar için belleği 512 MB veya 1024 MB'a çıkarabilirsiniz - [Rota için ayrılan bellek cihazları](../plugins/development.md#memory-allocated-for-routing).

3. Android sürümü için Çevrimiçi veya Üçüncü taraf yönlendirme (BRouter) ile bir Navigasyon Profili oluşturabilirsiniz. Daha fazla bilgiyi [burada](../navigation/routing/brouter.md) okuyun.

### Yayalar için 50 km'lik rotaların hesaplanması {#calculation-of-50-km-routes-for-pedestrians}

OsmAnd'da **Yürüme** profilini kullanıyorsanız, uygulama 50 km'den uzun rotaları hesaplarken çökebilir. Bu sorun, navigasyon ayarlarında [**Standart Rota A***](../navigation/guidance/navigation-settings.md#development-settings) seçildiğinde özellikle ortaya çıkar. Bu soruna çeşitli faktörler katkıda bulunabilir:

- Rota uzunluğu 50 km'yi aşıyor.
- Rotadaki doğrudan nokta sayısı 1 milyondan fazla.
- Rotayı hesaplamak için bir mobil cihaz kullanıyorsunuz, bu uzunluktaki rotalar için önerilmez. Daha iyi performans için web sürümünü kullanmayı düşünün.

Benzer mesafelerdeki rotalarla çökmeleri önlemek için **Bisiklet** gibi diğer profil türlerine geçmek isteyebilirsiniz.


## Hesaplanan Rota Doğru Görünmüyor {#the-calculated-route-does-not-seem-correct}

Yanlış veya optimum olmayan rotalarla ilgili sorunları takip etmek için lütfen [Github tartışmalarında](https://github.com/osmandapp/OsmAnd/discussions) veya [Github sorununda](https://github.com/osmandapp/Osmand/issues) yeni bir gönderi açın ve aşağıdaki bilgileri mümkün olduğunca ayrıntılı belirtin:

- Hangi OsmAnd sürümünü hangi cihazda kullanıyorsunuz?
- OsmAnd uygulamasında indirmek için sunulan çevrimdışı haritaları mı, yoksa çevrimiçi (döşeme / raster) haritaları mı kullanıyorsunuz?
- Çevrimdışı haritaları kullanıyorsanız, rota sorununun meydana geldiği harita dosyasının tam adını ve düzenleme tarihini bize bildirin.
- OsmAnd'ın uygulama içi çevrimdışı yönlendirmesini mi, yoksa YOURS, OpenRouteService veya OSRM gibi herhangi bir çevrimiçi yönlendirme sağlayıcısını mı kullandığınızı bize bildirin.
- OsmAnd uygulamasında hangi yönlendirme profili seçili (araba, bisiklet veya yaya)?
- Rotanızın başlangıç ve bitiş noktasını mümkün olduğunca tam olarak belirtin. Mümkünse, her biri için şehir adını ve sokak adını bize bildirin. Ayrıca openstreetmap.org'dan bir [Kalıcı Bağlantı](https://wiki.openstreetmap.org/wiki/Permalink) da yardımcı olabilir.
- Beklediğiniz yönlendirmeyi ve OsmAnd'ın nasıl yönlendirdiğini bize bildirin.

## Yol Bilgileri {#road-information}

### OsmAnd sadece bazı hız kameralarını gösteriyor {#osmand-only-shows-some-speed-cams}

OpenStreetMap projesinden alınan coğrafi veriler nedeniyle, hız kameralarının ham OSM verilerine entegre edilmesinin şu anda iki yöntemi vardır:

- Bir yolun bir noktası (OSM terminolojisinde "düğüm" olarak adlandırılır) "highway=speed_camera" ile etiketlenir, OSM wiki'de [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera) adresine bakın.
- Bir grup OSM veri öğesi, hız tuzağının kapsadığı yönü açıklamak için tek bir düğümden daha fazla öğe içeren "ilişki" adı verilen bir yapıda bir araya getirilir. [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement) adresine bakın.

Şu anda OsmAnd, yalnızca tek bir düğümden oluşan öğeleri kullanabilir. İlişkilerin analizi gelecekteki bir sürümde gelecektir.


## Sesli Navigasyon {#voice-navigation}

### Neden kaydedilmiş bir ses yerine bir TTS sesi kullanmalıyım? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

**Metin-Konuşma (TTS)** sesleri, sokak adlarını, yer adlarını ve otoyol numaralarını telaffuz etmelerine olanak tanıyan dinamik olarak konuşulan komutlar üretir. Buna karşılık, **kaydedilmiş sesler** önceden kaydedilmiş ifadelere sınırlıdır ve belirli adları veya numaraları telaffuz edemez.

*Kaydedilmiş seslere göre TTS'nin avantajları:*

- Sokak adlarını ve dinamik bilgileri telaffuz eder.
- Yeni özelliklerle düzenli olarak güncellenir.
- Navigasyon için daha iyi esneklik sunar.

OsmAnd'da TTS kullanmak için cihazınızda bir **TTS motoru** yüklü olmalıdır. Birçok cihazda önceden yüklenmiş bir TTS motoru bulunur, ancak gerekirse ek motorlar manuel olarak yüklenebilir. [Android için desteklenen TTS motorları ve dillerinin listesi](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Sesli Komutları ayarlama ve düzenleme hakkında ayrıntılı talimatlar için şuraya bakın: [Sesli Navigasyon Kurulum Kılavuzu](../navigation/guidance/voice-navigation.md).

### TTS düzgün çalışmıyor mu? Düzeltmek için bu adımları izleyin {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

**Metin-Konuşma (TTS)** ile ilgili sorunlar genellikle OsmAnd uygulamasının kendisiyle değil, **Android sistem ayarlarıyla** ilgilidir.

1. Bir TTS motorunun yüklü olduğundan emin olun.

    - *Cihaz Ayarları → Dil ve Giriş → Metin-Konuşma Seçenekleri* bölümünü açın.
    - Bir **TTS motorunun** yüklü olup olmadığını kontrol edin (örn. Google TTS, Samsung TTS, Pico).
    - Hiçbir motor yüklü değilse, *“Daha fazla yükle…”* seçeneğini seçin ve uyumlu bir tane indirin.
    - [Desteklenen TTS motorları ve dillerinin listesi.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. TTS dil ayarlarını doğrulayın.

    - *Android Ayarları → Metin-Konuşma Seçenekleri* bölümünde kullanmak istediğiniz dili seçin.
    - TTS motorunun çalışıp çalışmadığını test etmek için *“Bir örnek dinle”* seçeneğine dokunun.
    - Hiçbir şey duymuyorsanız, TTS motorunu güncelleyin veya yeniden yükleyin.

3. OsmAnd sesli navigasyon ayarlarını yapın.

    - *OsmAnd → Menü → Profili Yapılandır → Navigasyon Ayarları → Sesli Komutlar* bölümünü açın.
    - Uyumlu bir *Dil → TTS* seçin.
    - *Menü → Eklentiler → OsmAnd Geliştirmeyi Etkinleştir → Ayarlar → Sesli Komutları Test Et* bölümüne giderek sesli komutları test edin.

#### Ek Adımlar {#additional-steps}

- *Google TTS'yi Güncelle*. Google Play Store'u açın, **Google Metin-Konuşma**'yı arayın ve güncelleyin.
- *Navigasyonu Simüle Et*. Sesli rehberliğin çalıp çalmadığını kontrol etmek için *Navigasyon düğmesi → Ayarlar → Navigasyonu Simüle Et* seçeneğine dokunun.
- *OsmAnd'ı Yeniden Yükle*:
   - **Ayarları yedekle:** *Menü → Ayarlar → Dosyaya Aktar*.
   - OsmAnd'ı kaldırın, ardından uygulama mağazasından yeniden yükleyin.
   - Ayarları geri yükle: *Menü → Ayarlar → Dosyayı İçe Aktar*.

Ek sorun giderme için şurayı ziyaret edin:

- [Sesli Navigasyon Kılavuzu](../navigation/guidance/voice-navigation.md)
- [Ayarları İçe/Dışa Aktar](../personal/import-export.md)


## Diğer {#other}

### Ekran kapalıyken navigasyon duruyor {#navigation-stops-while-screen-is-off}

- Arka planda parça kaydıyla [aynı sorun](../troubleshooting/track-recording-issues.md#the-system-may-kill-background-apps-to-save-power).