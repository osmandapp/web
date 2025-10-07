---
source-hash: d09d9fde432bbd3f15aeedfac72c431ed251bae0335e90e06119b3673629070b
sidebar_position: 3
title:  Navigasyon
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

### Rota hesaplaması yavaş {#route-calculation-is-slow}

*Android*. OsmAnd iki farklı **çevrimdışı yönlendirme motoru** kullanır: bir *Java tabanlı motor* ve bir *Yerel (C++) motor*.

- *Java tabanlı motor* [Güvenli Mod'da](../plugins/development.md#overview) kullanılır, ancak yerel motordan yaklaşık 10 kat daha yavaştır. Ayrıca, *Hesaplamak için yeterli bellek yok* gibi hatalara yol açabilecek katı bellek sınırlamaları vardır. Bu sorunla karşılaşırsanız, *Eklentiler → OsmAnd geliştirme → Ayarlar →* [*Güvenli Mod'a*](../plugins/development.md#overview) gidin ve bu seçeneğin devre dışı bırakıldığından emin olun.
- *Yerel (C++) motor* daha iyi performans sunar, ancak verimliliği cihazınızın belleğine ve işlemci yeteneklerine bağlıdır. Genellikle, yerel yönlendirme 300 km'nin altındaki rotalar için iyi performans gösterir ve rota hesaplama süreleri 15 saniyeden 4 dakikaya kadar değişir. İşlem 4 dakikadan uzun sürerse, uygulamanın çökebileceği için durdurulması tavsiye edilir.


### 250 km'den uzun rotalar nasıl hesaplanır? {#how-to-calculate-routes-longer-than-250km}

1. Uygulama 7-8 dakikalık hesaplama süresinden sonra bir rota göstermezse, [ara noktalar yerleştirmeyi](../navigation/setup/route-navigation.md#route-recalculation) düşünün (örneğin otoyollardaki yerleri seçin). 3-4 ara nokta, 1000 km'lik rotaları bile hesaplamak için yeterli olacaktır.

2. Üst düzey cihazlar için belleği 512 MB veya 1024 MB'a kadar artırabilirsiniz - [Bellek ayrılmış cihazlar](../plugins/development.md#memory-settings).

3. Android sürümü için Çevrimiçi veya Üçüncü taraf yönlendirme (BRouter) ile bir Navigasyon Profili oluşturabilirsiniz. Daha fazla bilgiyi [burada](../navigation/routing/brouter.md) okuyun.

### Yayalar için 50 km'lik rotaların hesaplanması {#calculation-of-50-km-routes-for-pedestrians}

OsmAnd'da **Yürüme** profilini kullanıyorsanız, uygulama 50 km'den uzun rotaları hesaplarken çökebilir. Bu sorun, navigasyon ayarlarında [**Standart Yönlendirme A***](../navigation/guidance/navigation-settings.md#development-settings) seçildiğinde özellikle ortaya çıkar. Bu soruna çeşitli faktörler katkıda bulunabilir:

- Rota uzunluğu 50 km'yi aşıyor.
- Rotadaki doğrudan nokta sayısı 1 milyondan fazla.
- Rotayı hesaplamak için mobil bir cihaz kullanıyorsunuz, bu uzunluktaki rotalar için önerilmez. Daha iyi performans için web sürümünü kullanmayı düşünün.

Benzer mesafelerdeki rotalarda çökmeleri önlemek için **Bisiklet** gibi diğer profil türlerine geçmek isteyebilirsiniz.


## Hesaplanan Rota Doğru Görünmüyor {#the-calculated-route-does-not-seem-correct}

Yanlış veya optimum olmayan rotalarla ilgili sorunları takip etmek için lütfen [Github tartışmalarında](https://github.com/osmandapp/OsmAnd/discussions) veya [Github sorununda](https://github.com/osmandapp/Osmand/issues) yeni bir gönderi açın ve aşağıdaki bilgileri mümkün olduğunca ayrıntılı belirtin:

- Hangi OsmAnd sürümünü kullanıyorsunuz, hangi cihazda?
- OsmAnd uygulamasında indirmek için sunulan çevrimdışı haritaları mı, yoksa çevrimiçi (döşeme / raster) haritaları mı kullanıyorsunuz?
- Çevrimdışı haritalar kullanıyorsanız, yönlendirme sorununun meydana geldiği harita dosyasının tam adını ve düzenleme tarihini bize bildirin.
- OsmAnd'ın uygulama içi çevrimdışı yönlendirmesini mi, yoksa YOURS, OpenRouteService veya OSRM gibi herhangi bir çevrimiçi yönlendirme sağlayıcısını mı kullandığınızı bize bildirin.
- OsmAnd uygulamasında hangi yönlendirme profili seçili (araba, bisiklet veya yaya)?
- Rotanızın başlangıç ve bitiş noktasını mümkün olduğunca kesin olarak belirtin. Mümkünse, her biri için şehir adını ve sokak adını bize bildirin. Ayrıca openstreetmap.org'dan bir [Kalıcı Bağlantı](https://wiki.openstreetmap.org/wiki/Permalink) da yardımcı olabilir.
- Beklediğiniz yönlendirmeyi ve OsmAnd'ın nasıl yönlendirdiğini bize bildirin.

## Yol Bilgileri {#road-information}

### OsmAnd sadece bazı hız kameralarını gösteriyor {#osmand-only-shows-some-speed-cams}

OpenStreetMap projesinden alınan coğrafi veriler nedeniyle, hız kameralarının ham OSM verilerine entegre edildiği şu anda iki yöntem vardır:

- Bir yolun bir noktası (OSM terminolojisinde "düğüm" olarak adlandırılır) "highway=speed_camera" ile etiketlenir, bkz. OSM wiki'de [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Bir grup OSM veri öğesi, hız tuzağının kapsadığı yönü açıklamak için tek bir düğümden daha fazla öğe içeren "ilişki" adı verilen bir yapıda birleştirilir. Bkz. [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Şu anda OsmAnd, yalnızca tek bir düğümden oluşan öğeleri kullanabilir. İlişkilerin analizi gelecekteki bir sürümde gelecektir.


## Sesli Navigasyon {#voice-navigation}

### Neden kaydedilmiş bir ses yerine bir TTS sesi kullanmalıyım? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

**Metin Okuma (TTS)** sesleri, konuşulan komutları dinamik olarak oluşturarak sokak adlarını, yer adlarını ve otoyol numaralarını telaffuz etmelerine olanak tanır. Buna karşılık, **kaydedilmiş sesler** önceden kaydedilmiş ifadelere sınırlıdır ve belirli adları veya numaraları telaffuz edemez.

*TTS'nin kaydedilmiş seslere göre avantajları:*

- Sokak adlarını ve dinamik bilgileri telaffuz eder.
- Düzenli olarak yeni özelliklerle güncellenir.
- Navigasyon için daha iyi esneklik sunar.

OsmAnd'da TTS kullanmak için cihazınızda bir **TTS motoru** yüklü olmalıdır. Birçok cihazda önceden yüklenmiş bir TTS motoru bulunur, ancak gerekirse ek motorlar manuel olarak yüklenebilir. [Android için desteklenen TTS motorları ve dillerinin listesi](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Sesli Komutları ayarlama ve düzenleme hakkında ayrıntılı talimatlar için bkz: [Sesli Navigasyon Kurulum Kılavuzu](../navigation/guidance/voice-navigation.md).

### TTS düzgün çalışmıyor mu? Düzeltmek için şu adımları izleyin {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

**Metin Okuma (TTS)** ile ilgili sorunlar genellikle OsmAnd uygulamasının kendisiyle değil, **Android sistem ayarlarıyla** ilgilidir.

1. Bir TTS motorunun yüklü olduğundan emin olun.

    - *Cihaz Ayarları → Dil ve Giriş → Metin Okuma Seçenekleri*'ni açın.
    - Bir **TTS motorunun** yüklü olup olmadığını kontrol edin (örn. Google TTS, Samsung TTS, Pico).
    - Hiçbir motor yüklü değilse, *“Daha fazla yükle…”* seçeneğini seçin ve uyumlu bir tane indirin.
    - [Desteklenen TTS motorları ve dillerinin listesi.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. TTS dil ayarlarını doğrulayın.

    - *Android Ayarları → Metin Okuma Seçenekleri*'nde kullanmak istediğiniz dili seçin.
    - TTS motorunun çalışıp çalışmadığını test etmek için *“Bir örnek dinle”*'ye dokunun.
    - Hiçbir şey duymuyorsanız, TTS motorunu güncelleyin veya yeniden yükleyin.

3. OsmAnd sesli navigasyon ayarlarını yapın.

    - *OsmAnd → Menü → Profili Yapılandır → Navigasyon Ayarları → Sesli Komutlar*'ı açın.
    - Uyumlu bir *Dil → TTS* seçin.
    - *Menü → Eklentiler → OsmAnd Geliştirmeyi Etkinleştir → Ayarlar → Sesli Komutları Test Et*'e giderek sesli komutları test edin.

#### Ek Adımlar {#additional-steps}

- *Google TTS'yi güncelleyin*. Google Play Store'u açın, **Google Metin Okuma**'yı arayın ve güncelleyin.
- *Navigasyonu Simüle Et*. Sesli rehberliğin çalıp çalmadığını kontrol etmek için *Navigasyon düğmesi → Ayarlar → Navigasyonu Simüle Et*'e dokunun.
- *OsmAnd'ı yeniden yükleyin*:
   - **Ayarları yedekleyin:** *Menü → Ayarlar → Dosyaya Aktar*.
   - OsmAnd'ı kaldırın, ardından uygulama mağazasından yeniden yükleyin.
   - Ayarları geri yükleyin: *Menü → Ayarlar → Dosyayı İçe Aktar*.

Ek sorun giderme için ziyaret edin:

- [Sesli Navigasyon Kılavuzu](../navigation/guidance/voice-navigation.md)
- [Ayarları İçe/Dışa Aktar](../personal/import-export.md)


## Diğer {#other}

### Ekran kapalıyken navigasyon duruyor {#navigation-stops-while-screen-is-off}

- [Aynı sorun](../troubleshooting/track-recording-issues.md#overview) arka planda iz kaydı ile.