---
source-hash: 8fd560586badacfe8252875585749d24294632dc3ef28a49749d309541421b7a
sidebar_position: 14
title:  Star Watcher
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
**Star Watcher** şu anda **beta** sürümünde.
:::

## Genel Bakış {#overview}

Star Watcher eklentisi, harita üzerinde yıldızlar, takımyıldızlar, Güneş, Ay ve gezegenlerle yıldız gökyüzü katmanını gösterir. Güneş, Ay, gezegenler ve ana yıldızların konumları ve yolları haritada gösterilir.


## Gerekli Kurulum Parametreleri {#required-setup-parameters}
  
Star Watcher katmanını görüntülemek için aşağıdaki ayarlar gereklidir:

1. *Ana Menü*'nün *Eklentiler* bölümünden [**Star Watcher** eklentisini](../plugins/index.md#enable--disable) etkinleştirin
2. Yıldız gökyüzü, ayarlar ve zaman kontrolleri ile özel ekranı açmak için **Menü → Yıldız haritası** kullanın
3. Yıldız haritası ekranındaki kaydırıcılar veya düğmelerle **zaman ve tarihi** seçin
4. "Yıldız haritası" menü ayarlarında **görünürlük ve şeffaflığı** ayarlayın.

Eklenti her iki Harita render motoruyla da çalışır ancak OpenGL modunda en iyi performansı sağlar.

## Yıldız Haritası Ekranı

**Git:** *Etkinleştirilmiş eklenti → Menü → Yıldız haritası* 

![Star map screen](@site/static/img/plugins/starwatcher/view.png)

Özel **Yıldız haritası ekranı**, yıldızlar, takımyıldızlar, gezegenler, Güneş ve Ay yollarıyla etkileşimli göksel kubbe gösterir. Altta, zaman/tarih kaydırıcıları, gün düğmeleri ve ufuk çizgisi veya etiketler gibi katmanlar için hızlı geçişler içeren bir **araç çubuğu** bulunur.


- Ekran, konumunuzun üzerindeki tam gökyüzü yarım küresini pusula yönüyle hizalanmış olarak render eder
- Göksel nesneleri ayrıntılar için dokunun, örneğin büyüklük, doğuş/batış zamanları veya yollar



## Göksel Nesne Bilgisi

**Yıldız haritası ekranı** veya **harita katmanı** üzerinde herhangi bir **yıldız, gezegen, takımyıldız veya Güneş/Ay**'a dokunarak ayrıntılı bilgi görüntüleyin.

![Object info popup](@site/static/img/plugins/starwatcher/object-info.png)

**Görüntülenen veriler:**
- **Azimut**: Nesnenin gökyüzünde göründüğü Kuzey'den (0°-360°) yön
- **İrtifa**: Ufuk üzerindeki yükseklik (ufukta 0°, zenitte 90°)
- **Büyüklük**: Parlaklık ölçeği (Güneş için -26'dan sönük yıldızlar için +6'ya; daha düşük = daha parlak)
- **Doğuş/Batış zamanları**: Nesnenin ufuk üzerinde/altında doğuş/batış zamanı
- **Mesafe** (gezegenler): Dünyadan ortalama mesafe AU/km cinsinden

**Wikipedia entegrasyonu**: Bilgi açılır penceresinde **"Wikipedia"**'ya dokunarak nesnenin sayfasını tarayıcınızda açın (örneğin Sirius, Orion, Venüs). Önbelleğe alınmış veriler için çevrimdışı, tam makaleler için çevrimiçi çalışır.

**Uzun basma** göksel nesneleri **harita işaretçisi** olarak sabitleyin, canlı konum güncellemeleriyle veya grup yıldız gözlemi için koordinatları **paylaşın**.

Bu özellik, gerçek gökyüzündeki nesneleri tanımlamaya, gözlemleri planlamaya ve OsmAnd'dan doğrudan astronomi gerçeklerini öğrenmeye yardımcı olur.


## AR Yıldız Bulma (Kamera Modu)

**Git:** *Etkinleştirilmiş eklenti → Menü → Yıldız haritası → Kamera düğmesi* 

**Star Watcher** katmanı, **cihaz kameranız** ile çalışarak **Artırılmış Gerçeklik (AR) yıldız gözlemi**'ni etkinleştirir. Telefon kameranızı gerçek gece gökyüzüne yönlendirin ve yıldızlar, gezegenler, takımyıldızlar, Güneş/Ay gerçek zamanlı olarak katmanlı olarak görün.


**AR Yıldız Bulma nasıl çalışır:**
- **Canlı kamera görünümü**, ufuk/pusula ile hizalanmış şeffaf astronomik katmanlarla gerçek gökyüzünü gösterir
- **Kamerayı hareket ettirerek** gökyüzünü tarayın — nesneler görüş alanınızda göründüklerinde vurgulanır
- **Vurgulanan nesnelere dokunarak** azimut, irtifa, büyüklük, doğuş/batış zamanları ve Wikipedia bağlantısını görün
- **Doğru hizalama** için pusula kalibrasyonu gereklidir (gerekirse telefonu sekiz şeklinde sallayın)

**Mükemmel için:**
- Çıplak gözle görünmeyen sönük yıldız/gezegenleri tanımlama
- Telefonu gökyüzünde hareket ettirerek takımyıldızları bulma
- Yürüyüş veya kamp sırasında gerçek zamanlı gökyüzü navigasyonu


## Star Watcher Ayarları

*Ana Menü → Eklentiler → Yıldız haritası → ⚙️ düğmesi*

Görünür katmanları ve nesneleri seçin

### Yıldız Katmanları

Tüm astronomik veriler, 5-15 yakınlaştırma ölçeklerinde görünür harita katmanları olarak görünür. Katmanlar, göksel küreyi düz haritaya yansıtır.

| Katman | Açıklama |
|--------|----------|
| Yıldızlar | Parlak yıldızlar (büyüklük 4-6'ya kadar) etiketler ve takımyıldız çizgileriyle |
| Takımyıldızlar | Yıldızları Orion veya Büyük Ayı gibi tanıdık desenlere bağlar |
| Gezegenler | Cıva-Venüs-Mars-Jüpiter-Satürn için konumlar ve günlük yollar (renkli simgeler) |
| Güneş & Ay | Doğuş/batış zamanlarını ve aydınlatma evresini gösteren yaylar |
| Ufuk | Görünür gökyüzünü yerden ayıran çizgi, ana yönlerle |


## İlgili Makaleler {#related-articles}

- [Haritayla Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)