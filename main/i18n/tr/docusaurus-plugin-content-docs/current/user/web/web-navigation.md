---
source-hash: b7357e6a51f940ace21ac3c4ebf732361180dc9c7f5720e449fa9f0856db537a
sidebar_position: 8
sidebar_label:  Navigation
title: Navigation on the Web
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


## Genel Bakış {#overview}

**Web'de Navigasyon**'u kullanarak harita üzerinde bir rota oluşturun ve dönüş dönüş rehberliğini önizleyin. Seçilen seyahat modu için bir rota hesaplar, beklenen mesafe ve süreyi gösterir ve yükseklik değişikliklerini ve yaklaşan dönüşleri kontrol etmenize olanak tanır. Navigasyon ayarlarında rotayı ince ayarlayabilirsiniz (örneğin, belirli yol türlerini izin vererek veya engelleyerek veya araç parametrelerini kullanarak) ve gerektiğinde birden fazla rota noktası kullanabilirsiniz.


## Bir Rota Başlatın {#start-a-route}

Boş durumda, Navigasyon size rota noktaları eklemenizi ister: *Başlangıç ve Hedef noktalarını ayarlamak için haritaya tıklayın*.

Rota noktaları Rota panelinden sağlanabilir. **Başlangıç noktasını ayarla** veya **Hedef noktasını ayarla** seçtiğinizde, alan *Mevcut konum* gibi öneriler ve geçmişten daha önce kullanılan noktalar gösterir. Kaydedilmiş önerileri *Geçmişi Temizle* kullanarak kaldırabilirsiniz.

Navigasyon basit bir akışı takip eder: ilk nokta Başlangıç olur ve sonraki nokta Hedef olur. Her iki nokta da ayarlanır ayarlanmaz, rota hesaplanır ve haritada görüntülenir.

![Web Navigasyon](@site/static/img/web/navigation_start.png)

### Rota Noktalarını Yönetin {#manage-route-points}

Başlangıç → Hedef ötesinde bir rota genişletebilirsiniz ara noktalar ekleyerek. Noktalar listesinin yanındaki artı (+) düğmesini kullanarak bir ara nokta ekleyin (yeni nokta Hedef'in üzerine eklenir). Ara noktalar eksi (–) düğmesi kullanılarak kaldırılabilir.

Başlangıç ve Hedef'i Değiştir — Başlangıç ve Hedef'i değiştirir ara noktaları değiştirmeden. Eylem, zıt yönlerde iki ok gösteren bir simgeyle işaretlenir.

![Web Navigasyon](@site/static/img/web/navigation_points.png)


## Yönlendirme Profili {#routing-profile}

Rota panelinin üst kısmında, rotanız için bir yönlendirme profili seçebilirsiniz. Yaygın kullanılan profiller dört simge olarak gösterilir. Daha fazla seçeneğe erişmek için profil simgelerinin yanındaki üç nokta menüsünü açın. Bu, mevcut profillerin tam listesini genişletir.

Profil değiştirildiğinde, Navigasyon rotayı seçilen seyahat moduna uydurmak için günceller.

![Web Navigasyon](@site/static/img/web/navigation_profile.png)


## Navigasyon Ayarları {#navigation-settings}

Rotaların nasıl hesaplandığını ayarlamak için Rota panelindeki dişli simgesini kullanarak Ayarlar'ı açın. Ayarlar, genişletebileceğiniz/b küçültebileceğiniz bölümlere gruplanmıştır. Bölümler ve seçenekler kümesi seçilen yönlendirme profiline bağlıdır, bu nedenle farklı seyahat modları için farklı parametreler göreceksiniz.

Tipik bölümler şunlardır:

- **Genel** — profil odaklı seçenekler (örneğin, araç profilinde *Yakıt tasarruflu yol* ve *Mal teslimatı* gibi anahtarlar görebilirsiniz).
- **İzin Ver** — yönlendirme sırasında belirli yol veya yol türlerini izin veren seçenekler.
- **Kaçın** — rotadan belirli yol türlerini veya durumları hariç tutan seçenekler (örneğin, ücretli yollar, feribotlar, otoyollar, tüneller vb. kaçınma).
- **[Araç parametreleri](../navigation/guidance/vehicle-parameters.md)** — araç tabanlı profiller için kullanılabilir. Araç kısıtlamalarını (boyutlar/ağırlık gibi) belirtmenize olanak tanır, bu kısıtlı yollarda yönlendirmeyi etkileyebilir.

![Web Navigasyon](@site/static/img/web/navigation_settings.png) ![Web Navigasyon](@site/static/img/web/navigation_settings_2.png)


## İz Ekleme {#attaching-track}

**Yollara Ekle** bloğu, mevcut bir GPX izini navigasyonun temeli olarak kullanmanızı sağlar. OsmAnd Web izi yakındaki yollarla eşleştirir dönüş dönüş rehberliği sağlamak için.

İz Seç'e tıkladığınızda, tarayıcı bilgisayarınızdan bir .gpx dosyası seçebileceğiniz bir dosya seçici açar. Bir iz seçtikten sonra:
- İz haritada görüntülenir ve rotayı hesaplamak için kullanılır.
- Rota özeti (mesafe ve süre) Rota panelinde gösterilir.
- Seçilen dosya Seçilen iz altında görünür (iz dosyasının adıyla).
- Eklenmiş izi Seçilen iz yanındaki eksi (–) düğmesi kullanarak kaldırabilirsiniz.


## Rota Detayları {#route-details}

![Web Navigasyon](@site/static/img/web/navigation_info.png) ![Web Navigasyon](@site/static/img/web/navigation_turns.png)

Bir rota hesaplandığında, panel temel bir özet (mesafe, süre, yokuş yukarı/yokuş aşağı) ve bir **Detaylar** düğmesi gösterir. Detaylar'ı kullanarak İki sekme ile rota görünümünü açın: Bilgi ve Dönüşler.

Bilgi rotayı ve yükseklik verilerini özetler:
- **Noktalar** — rotayı oluşturmak için kullanılan rota noktalarının sayısı.
- **Rota** — mesafe ve süre.
- **Yokuş Yukarı/Yokuş Aşağı** — toplam tırmanış ve iniş.
- **Yükseklik (min/ort/max)** — rota için yükseklik istatistikleri.
- **Yükseklik (Uydu)** — mevcutsa uydu verilerini kullanarak yükseklik yeniden hesapla.

Özetin altında, yükseklik grafiği rota profilini incelemenize yardımcı olur. Yükseklik ve Eğim'i açıp kapatabilirsiniz ve grafiğin altındaki kaydırıcıyı kullanarak rotanın belirli bir kısmına odaklanabilirsiniz.

Dönüşler'i dönüş dönüş rehberliği için kullanın. Rota ayrıca çizgi boyunca turuncu dairelerle işaretlenir. Bir daireye tıklayarak ilgili navigasyon talimatıyla bir açılır pencere açın. Açılır pencere ayrıca şunları içerebilir:
- Kaçın — o belirli segmenti kaçınır.
- Yol Kimliği — rotanın o kısmı için temel OSM yoluna bağlantı.

Rotayı doğrudan harita üzerinde sürükleyerek rota işaretçilerini farklı bir yere sürükleyerek ince ayarlayabilirsiniz. Bir işaretçiye tıklayıp sürükleyip başka bir yola (veya yakındaki bir konuma) sürükleyip bıraktığınızda:
- OsmAnd Web rotayı yeni konumdan geçecek şekilde yeniden hesaplar.
- Taşınan işaretçi yeni bir ara noktaya dönüştürülür.
- Yeni ara nokta Rota panelinde Hedef'in üzerine eklenmiş ek bir nokta olarak görünür ve rota özeti buna göre güncellenir.
- Eklenen geçiş noktasını diğer [ara noktalar](#manage-route-points) gibi yönetebilirsiniz.

![Web Navigasyon](@site/static/img/web/navigation_on_map.png)

### İndir ve Kaydet {#download-and-save}

Rota'yı bir iz olarak dışa aktarmak için *İndir*'i kullanın. İndirme diyaloğu iki seçenek sunar:
Tam iz verisi — tam veri içerir, navigasyon talimatları dahil.
Basitleştirilmiş iz — diğer uygulamalarla kullanım için daha uygun hafif bir sürüm.

Rotayı bir iz olarak kaydetmek için *Buluta Kaydet / OsmAnd Cloud'a Yükle*'yi kullanın. Bu, bulut izlerine kaydetmeyi onaylayabileceğiniz, Adı düzenleyebileceğiniz, isteğe bağlı olarak bir Klasör seçebileceğiniz, ardından Kaydet veya İptal edebileceğiniz bir diyaloğu açar.

### Bir Rota Paylaşın {#share-a-route}

Rotayı paylaşmak için URL'yi kopyalayın. Örnek: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## İlgili Makaleler {#related-articles}

- [Rota Hazırlığı](../navigation/setup/route-navigation.md)
- [Navigasyon Ayarları](../navigation/guidance/navigation-settings.md)
- [Araç Parametreleri](../navigation/guidance/vehicle-parameters.md)
- [Rota Planla](../web/planner.md)