---
source-hash: e740340761094d6b6645a876a3fb4bee04f0d077021e1d3c5e6be972b43094f0
sidebar_position: 3
title:  Astronomy
unlistead: true
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

<InfoIncompleteArticle/>

<InfoAndroidOnly/>

:::info
**Astronomi**, şu anda **beta** sürümünde.
:::

## Genel Bakış {#overview}

Astronomi eklentisi, harita üzerinde yıldızlar, takımyıldızlar, Güneş, Ay ve gezegenlerle yıldız gökyüzü katmanını gösterir. Güneş, Ay, gezegenler ve ana yıldızların konumları ve yolları haritada görüntülenir.


## Gerekli Kurulum Parametreleri {#required-setup-parameters}
  
Astronomi katmanını görüntülemek için aşağıdaki ayarlar gereklidir:

1. *Ana Menü*'nün *Eklentiler* bölümünden [**Astronomi** eklentisini](../plugins/index.md#enable--disable) etkinleştirin
2. **Menü → Yıldız haritası**'nı kullanarak yıldız gökyüzü, ayarlar ve zaman kontrolleri içeren özel ekranı açın.
3. Yıldız haritası ekranındaki kontrolleri kullanarak **zaman ve tarihi** seçin.
4. [**Görünümü Yapılandır**](#configure-view) kullanarak Yıldız haritasında gösterilenleri ayarlayın — örneğin, görünür nesneleri ve render yardımcısını açıp kapatın.
5. Yıldız haritası ekranının üst kısmındaki **Kapat (X)** düğmesine dokunarak Yıldız haritasından çıkın ve Dünya haritasına dönün.

Eklenti her iki Harita render motoruyla da çalışır ancak OpenGL modunda en iyi performansı sağlar.

## Yıldız Haritası Ekranı {#star-map-screen}

**Git:** *Etkinleştirilmiş eklenti → Menü → Yıldız haritası* 

![Yıldız haritası ekranı](@site/static/img/plugins/starwatcher/view_new.png)

Özel **Yıldız haritası ekranı**, yıldızlar, takımyıldızlar, gezegenler, Güneş ve Ay yollarıyla etkileşimli göksel kubbe gösterir. Ekranın alt kısmında şu kontroller bulunur: 
- **Arama** — nesne adını yazabileceğiniz bir giriş alanı içeren arama panelini açar. Alanın altında, alfabetik sırayla önerilen nesnelerin listesi vardır. Sıralamayı A–Z ve Z–A arasında değiştirebilirsiniz. 
- **Zaman ve tarih** — gökyüzünü geçmişte veya gelecekte farklı anlarda gözlemlemek için tarihi ve zamanı değiştirmenize olanak tanır. Bu, gözlemleri planlamak, nesne hareketini izlemek veya gökyüzünün zamanla nasıl değiştiğini öğrenmek için faydalıdır. Özel bir tarih/zaman ayarlarsanız, çip tam tarihi ve zamanı gösterir ve yanında mevcut sistem zamanına dönmek için bir sıfırla düğmesi görünür.
- [**Görünümü Yapılandır**](#configure-view).

Ekran, konumunuzun üzerindeki tam gökyüzü yarım küresini pusula yönüyle hizalanmış olarak render eder. Yıldız haritası manuel olarak döndürülebilir. Yıldız haritasının manuel döndürülmesi, Dünya haritasının yönelimini etkilemez. Dünya haritası her zaman ayarlarınızda seçilen [harita yönelim modunu](../map/interact-with-map.md#map-orientation-modes) takip eder. Göksel nesnelere dokunarak büyüklük, doğuş/batış zamanları veya yollar gibi detayları görüntüleyin.


## Göksel Nesne Bilgisi {#celestial-object-info}

![Nesne bilgi açılır penceresi](@site/static/img/plugins/starwatcher/object-info_new.png)

**Yıldız haritası ekranı** veya **harita katmanı** üzerinde herhangi bir **yıldız, gezegen, takımyıldız veya Güneş/Ay**'a dokunarak ayrıntılı bilgi görüntüleyin. Seçilen nesne, Yıldız haritasında kırmızı daire işaretleyiciyle vurgulanır ve günlük hareketi, nesnenin her saat yerel zamanda (00–23) nerede olacağını ve hareket yönünü gösteren bir saat halkasıyla görselleştirilir.

**Görüntülenen veriler:**
- **Azimut**: Nesnenin gökyüzünde kuzeyden (0°-360°) yönü
- **İrtifa**: Ufuk üzerindeki yükseklik (ufukta 0°, zenitte 90°)
- **Büyüklük**: Parlaklık ölçeği (Güneş için -26'dan sönük yıldızlar için +6'ya; daha düşük = daha parlak)
- **Doğuş/Batış zamanları**: Nesnenin ufuk üzerinde/altında doğuş/batış zamanı
- **Mesafe** (gezegenler): Dünyadan ortalama mesafe AU/km cinsinden

**Wikipedia entegrasyonu**: Bilgi açılır penceresindeki **"Wikipedia"**'ya dokunarak nesnenin sayfasını tarayıcınızda açın (ör. Sirius, Orion, Venüs). Önbelleğe alınmış veriler için çevrimdışı, tam makaleler için çevrimiçi çalışır.

**Uzun basma** ile göksel nesneleri **harita işaretleyicisi** olarak sabitleyin, canlı konum güncellemeleriyle veya grup yıldız gözlemi için koordinatları **paylaşın**.

Bu özellik, gerçek gökyüzündeki nesneleri tanımlamaya, gözlemleri planlamaya ve OsmAnd'dan doğrudan astronomi gerçeklerini öğrenmeye yardımcı olur.


## AR Yıldız Bulma (Kamera Modu) {#ar-star-finding}

**Git:** *Etkinleştirilmiş eklenti → Menü → Yıldız haritası → Kamera düğmesi* 

**Astronomi** katmanı, **cihaz kameranız** ile çalışarak **Artırılmış Gerçeklik (AR) yıldız gözlemi**'ni etkinleştirir. Telefon kameranızı gerçek gece gökyüzüne yönlendirin ve yıldızlar, gezegenler, takımyıldızlar, Güneş/Ay gerçek zamanlı olarak katmanlı olarak görüntüleyin.

**AR Yıldız Bulma nasıl çalışır:**
- **Canlı kamera görünümü**, ufuk/pusula ile hizalanmış şeffaf astronomik katmanlarla gerçek gökyüzünü gösterir
- **Kamerayı hareket ettirerek** gökyüzünü tarayın — nesneler görüş alanınıza girdiğinde vurgulanır
- **Vurgulanan nesnelere dokunarak** azimut, irtifa, büyüklük, doğuş/batış zamanları ve Wikipedia bağlantısını görüntüleyin
- **Doğru hizalama** için pusula kalibrasyonu gereklidir (gerekirse telefonu sekiz şeklinde sallayın)

**Mükemmel için:**
- Çıplak gözle görünmeyen sönük yıldız/gezegenleri tanımlamak
- Telefonu gökyüzünde hareket ettirerek takımyıldızları bulmak
- Yürüyüş veya kamp sırasında gerçek zamanlı gökyüzü navigasyonu


## Görünümü Yapılandır {#configure-view}

![Görünümü Yapılandır](@site/static/img/plugins/starwatcher/half_state.png) ![Görünümü Yapılandır](@site/static/img/plugins/starwatcher/full_state.png)

**Görünümü Yapılandır**, Yıldız haritasının nasıl görüntüleneceğini, görsel modları, nesneleri ve render yardımcılarını etkinleştirerek veya devre dışı bırakarak kontrol etmenize olanak tanır.

Görünümü Yapılandırmak için, Yıldız haritası ekranının sağ alt köşesindeki Görünümü Yapılandır düğmesine dokunun. Düğme, katman stili simgesi (yığılmış şekiller) ile temsil edilir ve görüntüleme ile katman ayarlarını belirtir. Görünümü Yapılandır, ana görüntüleme seçeneklerini gösteren *Yarım durumda* açılır. Paneli yukarı kaydırarak *Tam duruma* genişletin ve tüm mevcut ayarlara erişin. Görünümü Yapılandırmayı kapatmak için paneli bir kez aşağı kaydırarak Yarım duruma dönün, bir kez daha aşağı kaydırarak tamamen kapatın veya panelin sağ üst köşesindeki Kapat (X) düğmesine dokunun.

### Modlar ve Eylemler {#modes-and-actions}

![Görünümü Yapılandır](@site/static/img/plugins/starwatcher/view_with_map.png) ![Görünümü Yapılandır](@site/static/img/plugins/starwatcher/red_filter.png)

Bu bölüm, Yıldız haritasının ana görüntüleme modlarını kontrol eder.

- **2D / 3D**. Yıldız haritasını düz (2D) görünüm ve küre benzeri (3D) görünüm arasında değiştirir.
- **Harita**. Yıldız haritasının altında ek Dünya haritası görünümünü etkinleştirir, göksel nesneleri coğrafi konumunuzla ilişkilendirmenize yardımcı olur.
- **Kırmızı filtre**. Karanlık gökyüzü gözlemleri sırasında ışık kirliliğini azaltmak ve gece görüşünü korumak için tüm ekrana kırmızı renk filtresi uygular.

### Görünür Nesneler {#visible-objects}

![Görünümü Yapılandır](@site/static/img/plugins/starwatcher/solar_system.png) ![Görünümü Yapılandır](@site/static/img/plugins/starwatcher/constellations.png)

Bu bölüm, Yıldız haritasında hangi tür göksel nesnelerin gösterileceğini seçmenize olanak tanır.

| Nesne | Açıklama |
|-------|-------------|
| Güneş sistemi | Güneş, Ay ve görünür gezegenleri görüntüler. |
| Takımyıldızlar | Yıldızlar tarafından oluşturulan takımyıldız çizgilerini ve desenlerini gösterir. |
| Yıldızlar | Yıldız haritasında görünür bireysel yıldızları görüntüler. |
| Bulutsular | Mevcut olduğunda bulutsu nesneleri gösterir. |
| Yıldız kümeleri | Yıldız kümelerini ayrı göksel nesneler olarak görüntüler. |
| Derin gökyüzü | Galaksiler, galaksi kümeleri ve kara delikler gibi derin gökyüzü nesnelerini açar/kapatır. |

### Kişisel Görüntüleme Seçenekleri {#personal-display-options}

**Kişisel görüntüleme seçenekleri**, kullanıcı odağı ve gözlemle ilgili ek görsel yardımcıları kontrol eder.

| Seçenek | Açıklama |
|-------|-------------|
| Yön | Görünümünüzü yönlendirmenize yardımcı olan yön göstergesi gösterir. |
| Günlük yol | Seçilen göksel nesnelerin gökyüzünde günlük yolunu görüntüler. |
| Favoriler | Favori olarak işaretlenmiş nesneleri vurgular veya görüntüler. |

### Render Yardımcıları {#rendering-aids}

**Render yardımcıları**, Yıldız haritasını yönlendirmeye yardımcı olmak için referans çizgileri ve ızgaralar ekler.

| Yardımcı | Açıklama |
|-------|-------------|
| Azimutal ızgara | Yatay gökyüzü yönlendirmesi için azimut tabanlı ızgara ekler. |
| Meridyen çizgisi | Gökyüzünü kuzeyden güneye geçen meridyen çizgisini görüntüler. |
| Ekvatoral ızgara | Göksel ekvatoral koordinat ızgarasını gösterir. |
| Ekliptik çizgi | Güneş'in görünür yolunu temsil eden ekliptik çizgiyi görüntüler. |
| Galaksi ekvatoru | Samanyolu galaksisinin ekvatoral düzlemini gösterir. |


<!-- 
## Astronomy Settings

*Main Menu → Plugins → Star map → ⚙️ button*

Choose visible layers and objects

### Star Layers

All astronomical data appears as map overlays, visible at zoom scales 5-15. Layers project the celestial sphere onto the flat map.

| Layer | Description |
|-------|-------------|
| Stars | Bright stars (up to magnitude 4-6) with labels and constellation lines |
| Constellations | Connects stars into familiar patterns like Orion or Big Dipper |
| Planets | Positions and daily paths for Mercury-Venus-Mars-Jupiter-Saturn (colored icons) |
| Sun & Moon | Arcs showing rise/set times and illumination phase |
| Horizon | Line separating visible sky from ground, with cardinal directions |

-->


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar](../../user/map/vector-maps.md)
