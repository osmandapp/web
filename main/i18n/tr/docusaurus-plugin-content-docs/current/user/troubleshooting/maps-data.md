---
source-hash: 5be228574247e03992e3e0ddd030d4377aa5bc7c791ba46b7915c2586ebae9b4
sidebar_position: 4
title: Haritalar ve Veriler
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Haritalar {#maps}

### OsmAnd neden Google Haritalar'a erişim sunmuyor? {#why-does-osmand-not-offer-access-to-google-maps}

OsmAnd, OpenStreetMap'i (OSM) desteklemek üzere tasarlanmıştır ve bu yolu mümkün olduğunca önceliklendirir. Ayrıca, OsmAnd'ın Google Haritalar verileriyle dağıtılmasına izin vermeyen lisans kısıtlamaları da bulunmaktadır.

### Haritalar Android 11, 12'de (SD kart) yavaş yükleniyor {#maps-slowly-loading-on-android-11-12-sd-card}

Android 11 ve 12'de tanıtılan yeni [depolama erişim kuralları](https://www.androidauthority.com/android-12-privacy-features-1225859/) nedeniyle, kullanıcılar SD kartlarda depolanan haritalara erişirken daha yavaş performans yaşayabilirler. Bu değişiklikler ayrıca SD kart klasörlerindeki dosyalar için görünürlük ve erişim kısıtlamalarına neden olabilir. Daha fazla tartışma ve teknik bilgi aşağıdaki bağlantılarda bulunabilir: [Reddit tartışması](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

Şu anda aşağıdaki çözümler mevcuttur:

#### 1. OsmAnd veri depolama klasörünü "Dahili uygulama belleği"ne taşıyın {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- *Menü → Ayarlar → OsmAnd ayarları → Veri depolama klasörü*'nde ***Dahili uygulama belleği*** seçeneğini belirleyerek depolama klasörünü değiştirebilirsiniz.

- Ancak, dahili belleğin genellikle sınırlı olduğunu unutmayın. Geçici bir çözüm olarak, önemli dosyaları dahili belleğe taşıyabilir, nadiren kullanılan haritaları ise SD kartta tutabilirsiniz. Gerekirse bu dosyaları manuel olarak aktarmak için bir dosya yöneticisi kullanın.

Geliştirme ekibi, yeni Android depolama politikaları altında SD kart performansını iyileştirmek için daha verimli çözümler aramaktadır.

#### 2. SD kartın "İndirilenler" Klasörünü kullanın {#2-use-the-sd-cards-download-folder}

Yavaş harita yükleme sorununu, *Menü → Ayarlar → OsmAnd ayarları → Veri depolama klasörü → Manuel olarak belirtilen*'de OsmAnd depolaması için SD kartın **İndirilenler** klasörünü belirterek çözmeyi deneyebilirsiniz. Aşağıdaki yollar mümkündür:

- ***/storage/XXXX-XXXX/Download/osmand***  
   Bu yol, birden fazla dosyaya erişirken hatalara neden olabilir. Örneğin, Dünya Genel Bakış haritasını indirebilirsiniz, ancak diğer bölgeler görünmeyebilir.

- ***/storage/XXXX-XXXX/Download***  
   Bu yol, haritaları ve diğer verileri indirmek için tutarlı bir şekilde çalışmalıdır. Ancak, OsmAnd'ın bu klasöre diğer uygulamalar veya programlar (örn. SasPlanet) tarafından yazılan dosyaları tanımayacağını unutmayın. Daha fazla ayrıntı için [bu kılavuza](../../technical/map-creation/create-offline-maps-yourself.md) bakın.

"XXXX-XXXX", SD kartınızın benzersiz kimlik numarasını temsil eder ve bazen *Harici depolama 2* seçenekleri altındaki klasör yolunda bulunabilir veya başka yöntemler kullanılarak bulunabilir. Bu çözümle ilgili daha fazla araştırma ve ayrıntı [burada](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744) mevcuttur.

#### 3. "Medya" depolama seçeneği {#3-media-storage-option}

Önceki çözümler işe yaramazsa veya sınırlı görünüyorsa, yavaş harita yükleme veya depolama erişim sorunlarını çözmek için "Medya" depolama seçeneğini kullanmayı deneyebilirsiniz. Bu yöntem, özellikle harici veya çıkarılabilir depolama için OsmAnd ve diğer uygulamalar için erişilebilir bir klasör seçmeye olanak tanır.

### "Genel Olarak Erişilebilir" Bir OsmAnd Veri Depolama Klasörü Seçmek için "Medya" Depolama Alanını Kullanma {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android, depolama izinleri konusunda daha katı hale geldi ve özellikle yeni kurulumlar veya sistem yükseltmeleriyle uygulama özel klasörlerine erişimi sık sık kısıtlıyor. OsmAnd'ın varsayılan veri depolama alanı kısıtlanabilir, bu da onu diğer uygulamalar veya hatta dosya yöneticileri için görünmez hale getirebilir. Birçok kullanıcı, yedekleme, senkronizasyon veya manuel dosya yönetimi için haritaları ve verileri erişilebilir harici depolama alanında saklamak ister.

Ancak, OsmAnd'ın *Tüm dosyalara erişim* izni yoktur (Google'ın kısıtlamaları nedeniyle), bu da klasör seçimini sınırlar. Bir geçici çözüm, Android'in genellikle daha geniş okuma/yazma erişimi verdiği "Medya" depolama klasörünü kullanmaktır. Bunu yapmak için:

- *OsmAnd Ayarları → OsmAnd ayarları → Veri depolama klasörü*'ne gidin ve mevcut depolama alanlarını gözden geçirin. Hedef depolamayı belirlemek için boş alan göstergesini kullanın, genellikle *Harici depolama 2* olarak etiketlenir.
- Geçerli klasör yolunu not edin, bu */storage/xxxx-xxxx/Android/data/net.osmand.plus/files* gibi görünebilir.
- *Manuel olarak belirtilen* seçeneğine geçin ve yolu medya erişimine açık bir klasöre değiştirin. Birçok sistemde */Android/data/* öğesini */media/* olarak değiştirmek (örn. ***/storage/xxxx-xxxx/media***) işe yarar. Bazı sistemler farklı yol değişiklikleri gerektirebilir.

Doğru bir yol, OsmAnd'a herhangi bir yazma izni hatası vermeyecektir. Bu değişiklikleri yapmadan önce, OsmAnd'ın Android'in **Uygulamalar** ayarları altında "Medya" depolama izni de dahil olmak üzere uygun depolama izinlerine sahip olduğundan emin olun. Daha yeni Android sürümlerinde, bu izinler gelişmiş veya gizli menülerde bulunabilir.

### Uygulama güncellemesinden sonra harita verilerini silme ("Çoklu Kullanıcı Depolama 1" seçiliyse) {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

OsmAnd'ın Android sürümünde, depolama konumu olarak *Çoklu Kullanıcı Depolama 1*'i seçmek, uygulama otomatik olarak güncellendiğinde (örneğin 4.1.9 sürümünden 4.1.10, 4.1.11 veya daha sonraki sürümlere (**Android 11, 12**)) tüm [yerel haritaların](../personal/maps-resources.md#local-maps) silinmesine yol açabilir. Bu sorun [Github'da](https://github.com/osmandapp/OsmAnd/issues/13404) belgelenmiştir.

Güncellemeler sırasında harita verilerinizi kaybetmemek için şu çözümleri göz önünde bulundurun:

1. *Dosyalarınızı Yedekleyin*. OsmAnd'ı güncellemeden önce, *..Android/obb/net.osmand*'da depolanan haritaların bir [yedeklemesini](../personal/import-export.md) yapın. Güncelledikten sonra, güncellenmiş OsmAnd uygulamasını başlatmadan önce dosyaları geri yükleyin.

2. *Depolama Yolunu Değiştirin*. OsmAnd klasörünü tüm uygulamalar tarafından yazılabilir bir konuma taşıyın (örn. Wi-Fi FTP sunucusu, X-plore veya bir USB kablosuyla bir PC'ye). Klasör yolunu şuradan değiştirin:
   - /storage/emulated/0/Android/**obb**/net.osmand
   şuraya:
   - /storage/emulated/0/Android/**media**/net.osmand.


### Google Pixel cihazlar için harita oluşturma yok {#no-maps-rendering-for-google-pixel-devices}

OsmAnd 4.2 Android sürümleri için, Google Pixel cihazlarda [harita oluşturma başarısız olabilir](https://github.com/osmandapp/OsmAnd/issues/15045), bu da kullanıcıları harita yerine boş beyaz bir ekranla bırakır.

Bu sorunu çözmek için OpenGL oluşturmaya geçin:

- *OsmAnd menüsü → Ayarlar → OsmAnd ayarları → Harita oluşturma motoru → Sürüm 2 (OpenGL)*'e gidin.
- Değişiklikleri uygulamak için OsmAnd'ı yeniden başlatın.


### OsmAnd'da yavaş harita oluşturmayı çözme {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Yavaş harita oluşturma sorununu, özellikle çevrimdışı vektör haritaları kullanırken çözmek için aşağıdaki adımlar atılmalıdır:

1. **Gereksiz harita özelliklerini devre dışı bırakın.** Haritaları oluşturmak için gereken işlem gücünü önemli ölçüde artırabilen 3D rölyef, kontur çizgileri, tepe gölgeleri ve eğimleri kapatın. Bunu *Menü → Haritayı yapılandır*'da yapabilirsiniz.

2. **Harita ayrıntılarını basitleştirin.** Sınırlar, POI'ler, OSM notları, hava durumu katmanları, ek ayrıntılar (*Menü → Haritayı yapılandır → Harita oluşturma*) gibi daha az kritik öğeleri gizleyerek harita görüntüsünü düzenleyin ve hızı artırın.

3. **Görüntülenen POI sayısını sınırlayın.** Yalnızca ana POI'leri görüntüleyin veya navigasyon sırasında görüntülenen kategorileri sınırlayın, bu harita oluşturmayı hızlandırmaya yardımcı olabilir. Bu ayarlara *Menü → Navigasyon → Ayarlar*'dan erişin.

4. **Harita büyütecini ayarlayın.** Harita büyüteci ayarı, haritayı yavaşlatmada önemli bir faktör olabilir. Ekranı optimize etmek için harita ekranındaki **"+"** veya **"-"** düğmesine uzun basarak büyüteci %100'e ayarlayın.

5. **Otomatik yakınlaştırmayı devre dışı bırakın.** Otomatik yakınlaştırma, navigasyon sırasında haritanın sık sık yeniden çizilmesine neden olarak gecikmelere yol açabilir. Otomatik yakınlaştırmayı *Menü → Ayarlar → Profil → Navigasyon ayarları → [Navigasyon sırasında harita](../navigation/guidance/map-during-navigation.md)*'da devre dışı bırakın.

6. **Yalnızca çevrimdışı haritaları kullanın.** Çevrimiçi haritalar, özellikle önceden indirilmemişse, harita yüklemesini yavaşlatabilir. Daha sorunsuz performans için yalnızca çevrimdışı haritaları kullanmaya geçin.

Bu değişiklikler, özellikle navigasyon sırasında haritaları oluşturmak için gereken süreyi azaltmalıdır. Daha ayrıntılı yapılandırma seçenekleri için [Harita Ayarları Kılavuzu](https://osmand.net/docs/user/map/interact-with-map#settings)'na bakın.


## Kontur Çizgileri {#contour-lines}

### Kontur çizgilerini metre yerine fit olarak görüntülemenin bir yolu var mı? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Evet, kontur çizgileri metre yerine fit olarak görüntülenebilir. Kontur çizgisi verilerini indirmeden önce Fit veya Metre arasında seçim yapın: [daha fazla bilgiyi buradan okuyun](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Kontur Çizgileri, Yükseklik verileri veya 3D Rölyef görüntülenmiyor {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Doğru bölgenin verilerinin indirilip indirilmediğini doğrulayın. ***Menü → Haritalar ve Kaynaklar → İndirilenler → Bölgeniz***'e gidin. [Haritalar nasıl indirilir](../start-with/first-steps.md#how-to-download-maps).
- [Eklentinin](../plugins/topography.md#required-setup-parameters) etkinleştirildiğini ve ***Menü → Eklentiler → Topografya***'da görünür olduğunu kontrol edin.
- Topografya bölümündeki öğelerin ***Menü → Haritayı Yapılandır → Topografya → Kontur çizgileri / Arazi / 3D Rölyef***'te etkinleştirildiğini kontrol edin.
- Satın alımlarınızı kontrol edin: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Uygulamayı en son sürüme güncelleyin.
- Bozuk dosya olmadığından emin olmak için gerekli haritaları silin ve yeniden indirin.
- Ayarları ve verileri yenilemek için OsmAnd'ı yeniden başlatın.


## Arama {#search}

### Yapılandırılmış (şehir *→* sokak *→* ev) adres araması evi bulamıyor {#structured-city--street--house-address-search-doesnt-find-the-house}

*Şehir → Sokak → Ev Numarası* yapısını kullanarak bir konum aramaya çalışıyorsanız ve hiçbir sonuç döndürülmüyorsa, aşağıdaki ipuçlarını ve olası nedenleri göz önünde bulundurun:

> **İpucu**: Şehri belirtmeden tam metin araması yapmayı deneyin, çünkü adres farklı bir şehir altında listelenmiş olabilir.

**Olası Sorunlar:**

- **Ev Eksik**. Ev OpenStreetMap'te listelenmemiş olabilir veya mevcut olabilir ancak atanmış numaraları olmayabilir. Bunu bir örnekle [buradan](https://www.openstreetmap.org/#map=19/33.91937/-118.24357) doğrulayabilirsiniz.

- **Yanlış Sokak Adı**. Evle ilişkili sokak adı OpenStreetMap'te yanlış olabilir. Sokak adının sokağın etiketleme bilgilerindekiyle tam olarak eşleştiğinden emin olmak için `addr:street` etiketini kontrol edin.

- **Nominatim ile İlgili Sorun**. Ev OpenStreetMap'te mevcut olabilir ancak Nominatim (OpenStreetMap tarafından kullanılan arama motoru) aracılığıyla bulunamayabilir. Adresle ilgili sorunları nasıl düzelteceğiniz hakkında daha fazla bilgiyi [buradan](https://wiki.openstreetmap.org/wiki/Addresses) edinebilirsiniz.

- **OsmAnd'da Olası Sorun**. Ev Nominatim'de mevcutsa ancak OsmAnd'da hala bulunamıyorsa, sorun OsmAnd'a özgü olabilir. Daha fazla araştırma yaparak bu sorunun çözümüne katkıda bulunabilirsiniz. Daha fazla ayrıntı bu [teknik makalede](../../technical/algorithms/trace-address-search-issues.md) bulunabilir.


## Parkurlar ve Noktalar {#tracks-and-points}

### Haritada farklı yerler nasıl işaretlenir {#how-to-mark-different-places-on-the-map}

Haritada çeşitli biçimlerde notlar bırakabilir ve konumları işaretleyebilirsiniz, her biri farklı amaçlara hizmet eder:

- *[Favoriler](../personal/favorites.md)*. Bunlar, haritada açıklama ekleyebileceğiniz kalıcı noktalardır. Bir Favori oluşturmak için, *uzun dokunun → Ekle'ye dokunun*. Favoriler, sık ziyaret ettiğiniz veya gelecekte başvurmak üzere kaydetmek istediğiniz yerleri işaretlemek için harikadır.

- *[İşaretleyiciler](../personal/markers.md)*. İşaretleyiciler, genellikle navigasyon veya planlama için kullanılan geçici noktalardır. Mevcut konumunuzdan veya başka bir noktadan mesafeyi gösterebilirler ve artık ihtiyaç duyulmadığında hızlıca kaldırılabilirler. Bir İşaretleyici eklemek için, *uzun dokunun → İşaretleyici'ye dokunun*.

- *[Yol Noktaları](../map/tracks/index.md#types-of-tracks)*. Yol noktaları, oluşturduğunuz rotalar boyunca yerleştirilir ve yolculuğunuz boyunca belirli durakları veya konumları işaretlemenize yardımcı olur. Bu noktalara da açıklamalar ekleyebilirsiniz. Bir yol noktası eklemek için, *haritada uzun dokunun → Yol Tarifleri → ara yol noktası olarak ekle*.

- *[Sesli/Görüntülü Notlar](../plugins/audio-video-notes.md)*. Bu notlar, haritadaki belirli konumlara ses, video veya fotoğraf dosyaları eklemenize olanak tanır. Etkinleştirmek için, *OsmAnd menüsü → Eklentiler*'de Sesli/Görüntülü Notlar eklentisini etkinleştirin. Bir tane eklemek için, *uzun dokunun → Eylemler → eklenecek gerekli dosyayı seçin*.

- *[OSM Notları](../plugins/osm-editing.md#create--modify-osm-note)*. Bunlar, OpenStreetMap'teki hataları veya eksik bilgileri vurgulamak için oluşturabileceğiniz raporlardır. *OsmAnd menüsü → Eklentiler*'de OSM düzenleme eklentisini etkinleştirin. Bir OSM Notu eklemek için, *uzun dokunun → Eylemler → OSM notu ekle*.

- *[POI'ler (İlgi Çekici Noktalar)](../map/point-layers-on-map.md#points-of-interest-pois)*. Bunlar, OpenStreetMap'in veri kaynağından gelen restoranlar, parklar veya önemli noktalar gibi önceden tanımlanmış noktalardır. POI'leri *Haritayı Yapılandır* menüsünde POI katmanını etkinleştirerek veya bir kategori seçerek görüntüleyebilirsiniz.

- *[Arama](../search/index.md)*. Haritada yerleri bulmak ve işaretlemek için arama işlevini de kullanabilirsiniz.