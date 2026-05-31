---
source-hash: 97e9a342bf78770a793c6914a8b243b2d5b515ca46e61160b3da4e3e167ed8cb
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

<InfoAndroidOnly/>

:::info
**Astronomi** şu anda **beta** sürümünde.
:::

## Overview {#overview}

:::tip Purchase
Astronomi eklentisi [ücretli bir özelliktir](../purchases/index.md).  
:::

Astronomi eklentisi, yıldızlar, takımyıldızlar, Güneş, Ay ve gezegenlerle doğrudan harita üzerinde bir gökyüzü katmanını görüntüler. Mevcut ve gelecekteki göksel nesnelerin konumlarını hesaplamak ve görüntülemek için çevrimdışı bir göksel katalog kullanır. Eklenti ayrıca kullanıcıların gece gökyüzünü keşfetmesine, nesneleri tanımlamasına ve gökyüzü boyunca yollarını görüntüleyerek gözlemleri planlamasına olanak tanır.

Eklenti, yerleşik yıldız kataloglarını kullanarak tamamen çevrimdışı çalışır ve internet bağlantısı olmadan bile gökyüzü keşfini mümkün kılar.


## Required Setup Parameters {#required-setup-parameters}
  
Astronomi katmanını görüntülemek için aşağıdaki ayarlar gereklidir:

1. *Ana Menü*'nün *Eklentiler* bölümünden [**Astronomi** eklentisini](../plugins/index.md#enable--disable) etkinleştirin
2. **Menü → Yıldız haritası**'yı kullanarak yıldız gökyüzü, ayarlar ve zaman kontrolleri içeren özel ekranı açın.
3. Yıldız haritası ekranındaki kontrolleri kullanarak **zaman ve tarihi** seçin.
4. Yıldız haritasında gösterilenleri [**<Translate android="true" ids="astro_configure_view"/>**](#configure-view) kullanarak ayarlayın — örneğin, görünür nesneleri ve render yardımcısını açıp kapatın.
5. Yıldız haritası ekranının üst kısmındaki **Kapat (X)** düğmesine dokunarak Yıldız haritasından çıkın ve Dünya haritasına dönün.

Eklenti her iki Harita render motoruyla da çalışır ancak OpenGL modunda en iyi performansı sağlar.

## Star Map Screen {#star-map-screen}

**Git:** *Etkinleştirilmiş eklenti → <Translate android="true" ids="shared_string_menu,star_map"/>* 

![Star map screen](@site/static/img/plugins/starwatcher/view_new_1.png)

Özel **Yıldız haritası ekranı**, yıldızlar, takımyıldızlar, gezegenler, Güneş ve Ay yollarıyla etkileşimli göksel kubbe gösterir. Ekranın alt kısmında şu kontroller bulunur: 
- [**Arama**](#search) — göksel nesneleri aramanıza ve gökyüzü kataloglarını ve kategorilerini taramanıza olanak tanıyan Arama ekranını açar. 
- **Zaman ve tarih** — gökyüzünü geçmişte veya gelecekte farklı anlarda gözlemlemek için tarihi ve zamanı değiştirmenize olanak tanır. Bu, gözlemleri planlamak, nesne hareketini izlemek veya gökyüzünün zamanla nasıl değiştiğini öğrenmek için faydalıdır. Özel bir tarih/zaman ayarlarsanız, çip tam tarihi ve zamanı gösterir ve yanında mevcut sistem zamanına dönmek için bir sıfırla düğmesi görünür.
- **<Translate android="true" ids="magnitude_filter"/>** — parlaklıklarına göre hangi yıldızların görüntüleneceğini sınırlamanıza olanak tanır. Kaydırıcıyı kullanarak maksimum büyüklük değerini ayarlayın. Düşük değerler yalnızca en parlak yıldızları gösterirken, yüksek değerler daha sönük yıldızları ve derin gökyüzü nesnelerini ortaya çıkarır. Bu, görsel karmaşayı azaltmaya veya çıplak gözle görüneni simüle etmeye yardımcı olur.
- [**<Translate android="true" ids="astro_configure_view"/>**](#configure-view) — nesnelerin, yolların ve referans çizgilerinin Yıldız haritasında nasıl gösterileceğini kontrol eden görüntüleme ayarlarını açar.

Ekran, konumunuzun üzerindeki tam gökyüzü yarım küresini pusula yönüyle hizalanmış olarak render eder. Yıldız haritası manuel olarak döndürülebilir. Yıldız haritasının manuel döndürülmesi, Dünya haritasının yönelimini etkilemez. Dünya haritası her zaman ayarlarınızda seçilen [harita yönelim modunu](../map/interact-with-map.md#map-orientation-modes) takip eder. Göksel nesnelere dokunarak büyüklük, doğuş/batış zamanları veya yollar gibi detayları görüntüleyin.

Yıldız haritası ayrıca pusula modu etkinleştirildiğinde cihaz yöneliminizle hizalanabilir. Bu modda, gökyüzü cihazın ivmeölçer ve pusula sensörlerine göre döner ve telefonunuzu fiziksel olarak hareket ettirerek gökyüzünü keşfetmenize olanak tanır.


## Context Menu {#context-menu}

![Context Menu](@site/static/img/plugins/starwatcher/context_menu_view.png)

**Bağlam Menüsü**, göksel nesneler hakkında ayrıntılı bilgi ve onları gözlemlemek için araçlar sağlar. Yıldız haritasında bir göksel nesneye dokunduğunuzda açılır.

Bir nesne seçildiğinde, Yıldız haritasında kırmızı daire işaretleyiciyle vurgulanır. Günlük hareketi ayrıca bir saat halkasıyla (00–23) görselleştirilir; bu, nesnenin yerel günün her saati gökyüzünde nerede görüneceğini ve hareket yönünü gösterir.

Bağlam Menüsü ekranın alt kısmında görünür ve nesne bilgisi, hızlı eylemler ve nesnenin görünürlüğünü ve gözlem programını keşfetmek için sekmeler içerir.

### Object Information {#object-information}

![Object Information](@site/static/img/plugins/starwatcher/object_view_new.png) ![Object Information](@site/static/img/plugins/starwatcher/object_view_2.png)

Bağlam Menüsü'nün üst bölümü nesnenin adını ve sınıflandırmasını görüntüler. Adın altında, nesne tipi ve üst takımyıldızı veya grubu gösterilir. Örneğin:  
- **Beta Ursae Minoris** — Yıldız • Küçük Ayı
- **<Translate android="true" ids="astro_name_moon"/>** — Uydu • Dünya
- **<Translate android="true" ids="astro_name_jupiter"/>** — Gezegen • Güneş sistemi

Hızlı bilgi blokları ana gözlem parametrelerini görüntüler:  
- <Translate android="true" ids="astro_rise"/> – nesnenin ufuk üzerinde doğuş zamanı.
- <Translate android="true" ids="astro_set"/> – nesnenin ufuk altında batış zamanı.
- <Translate android="true" ids="shared_string_azimuth"/> – kuzeye göre nesnenin yönü (0°–360°).
- <Translate android="true" ids="altitude"/> – ufuk üzerindeki nesnenin yüksekliği.
- <Translate android="true" ids="shared_string_magnitude"/> – Dünya'dan görülen nesnenin parlaklığı. 

Bu değerler, seçilen zamana ve kullanıcının konumuna göre dinamik olarak güncellenir.

Hızlı bilgi bloklarının altında, menü nesne hakkında ek bilgi ve kaynaklar içerebilir:  
- <Translate android="true" ids="astro_offline_knowledge_base_title"/> – Wikipedia makaleleri ve derin gökyüzü katalogları içeren genişletilmiş bir veritabanını çevrimdışı kullanım için indirmenize olanak tanır. İndirdikten sonra, göksel nesneler hakkında ayrıntılı bilgi internet bağlantısı olmadan doğrudan uygulamada görüntülenebilir.
- <Translate android="true" ids="read_on_wiki"/> – Nesnenin Wikipedia makalesini tarayıcıda açar.
- <Translate android="true" ids="astro_designations"/> – Nesne için alternatif isimler ve katalog tanımlayıcılarını gösterir (örneğin, HD, HIP, NGC). Bu bölüm, yıldızlar ve derin gökyüzü nesneleri gibi katalog girdileri olan nesneler için kullanılabilir. Eğer nesnenin yaygın bir adı yoksa, bu tanımlamalardan biri birincil isim olarak kullanılır.
- <Translate android="true" ids="online_photos"/> – Seçilen göksel nesneyle ilgili mevcut fotoğrafları görüntüler.

### Actions {#actions}

Nesne bilgisinin altında, Bağlam Menüsü seçilen göksel nesneyle etkileşim için birkaç eylem sağlar:
- **<Translate android="true" ids="shared_string_save"/>** – Nesneyi hızlı erişim için Favoriler listenize ekler.
- **<Translate android="true" ids="astro_locate"/>** – Seçilen nesneyi Yıldız haritasının merkezine yerleştirir.
- **<Translate android="true" ids="astro_direction"/>** – Gökyüzünü gözlemlerken kendinizi yönlendirmenize yardımcı olmak için nesneye haritada yönü gösterir.
- **<Translate android="true" ids="astro_path"/>** – Nesnenin gökyüzü boyunca günlük yörüngesini görüntüler ve gün boyunca nasıl hareket ettiğini görmenize olanak tanır.

### Visibility Graph {#visibility-graph}

![Visibility Graph](@site/static/img/plugins/starwatcher/visibility_new.png)

**Görünürlük** sekmesi, seçilen nesnenin 24 saatlik bir dönem boyunca gökyüzünde nasıl hareket ettiğini gösterir.

Grafik, nesnenin ufuk üzerindeki irtifasını zaman içinde görüntüler.

- Yatay eksen, 12:00'den ertesi gün 12:00'ye kadar zamanı temsil eder.
- Dikey eksen, −30° ile +90° arasında irtifayı temsil eder.

Renkli eğri, nesnenin gün boyunca irtifasını gösterir.

Grafiğin arka planı, Güneş'in konumuna göre gökyüzü durumunu temsil eder ve bu, gözlemlerin ne zaman mümkün olduğunu belirlemeye yardımcı olur.

Renkler farklı gökyüzü koşullarını temsil eder:  
- açık mavi — gündüz
- daha koyu mavi — alacakaranlık
- koyu mavi / siyah — gece

Nesnenin yörüngesinin rengi ayrıca irtifasını yansıtır:  
- sarı – gökyüzünde yüksek (en iyi görünürlük)
- turuncu – orta irtifa
- kırmızı – ufka yakın
- mor – ufuk altında (görünmez)

Hareket ettirilebilir bir gösterge, nesnenin farklı zamanlardaki konumunu keşfetmenize olanak tanır. Gösterge hareket ettirildiğinde, mevcut zaman, irtifa ve azimut değerleri güncellenir. Azimut değeri ayrıca karşılık gelen pusula yönünü içerir (örneğin, 354° Az (K)).

Grafiğin altında, önemli gözlem olayları görüntülenir: 
- **<Translate android="true" ids="astro_rise"/>** – nesnenin ufuk üzerinde doğuşu.
- **<Translate android="true" ids="astro_culmination"/>** – nesnenin en yüksek irtifaya ulaşması.
- **<Translate android="true" ids="astro_set"/>** – nesnenin ufuk altında batışı. Eğer nesne hiç doğmaz veya hiç batmazsa, karşılık gelen değerler gizlenir.

Grafik, gösterge mevcut sistem zamanında konumlandırılmış olarak açılır. Hesaplamalar için kullanılan konum, grafiğin altında gösterilir. Konum, bir şehir adı olarak görüntülenir.

### Observation Schedule {#observation-schedule}

![Observation Schedule](@site/static/img/plugins/starwatcher/schedule_new.png)

**Program** sekmesi, seçilen nesnenin mevcut hafta için görünürlüğünü görüntüler. Her satır bir günü temsil eder ve şunları içerir:  
- haftanın günü
- tarih
- doğuş zamanı
- batış zamanı. Eğer batış zamanı ertesi gün olursa, ⁺¹ ile işaretlenir
- o gün için küçük bir görünürlük grafiği

Mini grafik, nesnenin gün boyunca ne zaman görünür olduğunu ve irtifa değişikliklerini gösterir. Çubuğun renkli bölümü, nesnenin ufuk üzerinde olduğu dönemi temsil eder. Mini grafik, seçilen gün için 00:00 ile 23:59 arasındaki zaman aralığını temsil eder.

Program başlığındaki ok düğmelerini kullanarak haftalar arasında gezinebilirsiniz. Takvim düğmesi mevcut haftaya dönmenize olanak tanır.

<!--
## Celestial Object Info {#celestial-object-info}

![Object info popup](@site/static/img/plugins/starwatcher/object-info_new.png)

Tap any **star, planet, constellation, or Sun/Moon** on the **Star map screen** or **map overlay** to view detailed information. Selected object  is highlighted on the Star map by a red circle marker, and its daily motion is visualized by an hour ring (00–23) showing where the object will be at each hour local time and the direction of movement.

**Displayed data:**
- **Azimuth**: Direction from North (0°-360°) where the object appears in the sky
- **Altitude**: Height above horizon (0° at horizon, 90° at zenith)
- **Magnitude**: Brightness scale (-26 for Sun to +6 for faint stars; lower = brighter)
- **Rise/Set times**: When the object rises above/sets below horizon
- **Distance** (planets): Average distance from Earth in AU/km

**Wikipedia integration**: Tap **"Wikipedia"** in the info popup to open the object's page in your browser (e.g. Sirius, Orion, Venus). Works offline for cached data, online for full articles.

**Long-press** celestial objects to **pin** them as map markers with live position updates, or **share** coordinates for group stargazing.

This feature helps identify objects in real sky, plan observations, and learn astronomy facts directly from OsmAnd.
-->

## AR Star Finding (Camera Mode) {#ar-star-finding}

**Git:** *Etkinleştirilmiş eklenti → <Translate android="true" ids="shared_string_menu,star_map"/> → Kamera düğmesi* 

**Astronomi** katmanı, **cihaz kameranız** ile çalışarak **Artırılmış Gerçeklik (AR) yıldız gözlemi**'ni etkinleştirir. Telefon kameranızı gerçek gece gökyüzüne yönlendirin ve yıldızlar, gezegenler, takımyıldızlar, Güneş/Ay gerçek zamanlı olarak katmanlı olarak görüntüleyin.

**AR Yıldız Bulma nasıl çalışır:**
- **Canlı kamera görünümü**, ufuk/pusula ile hizalanmış şeffaf astronomik katmanlarla gerçek gökyüzünü gösterir
- **Kamerayı hareket ettirerek** gökyüzünü tarayın — nesneler görüş alanınıza girdiğinde vurgulanır
- **Vurgulanan nesnelere dokunarak** azimut, irtifa, büyüklük, doğuş/batış zamanları ve Wikipedia bağlantısını görüntüleyin
- **Doğru hizalama** için pusula kalibrasyonu gereklidir (gerekirse telefonu sekiz şeklinde sallayın)

AR modu, göksel nesneleri gerçek gökyüzüyle hizalamak için cihaz sensörlerini (jireskop, ivmeölçer ve pusula) kullanır.

**Mükemmel için:**
- Çıplak gözle görünmeyen sönük yıldız/gezegenleri tanımlamak
- Telefonu gökyüzünde hareket ettirerek takımyıldızları bulmak
- Yürüyüş veya kamp sırasında gerçek zamanlı gökyüzü navigasyonu


## Configure View {#configure-view}

![Configure View](@site/static/img/plugins/starwatcher/half_state_new.png) ![Configure View](@site/static/img/plugins/starwatcher/full_state.png)

**<Translate android="true" ids="astro_configure_view"/>**, Yıldız haritasının nasıl görüntüleneceğini, görsel modları, nesneleri ve render yardımcılarını etkinleştirerek veya devre dışı bırakarak kontrol etmenize olanak tanır.

Görünümü Yapılandırmak için, Yıldız haritası ekranının sağ alt köşesindeki <Translate android="true" ids="astro_configure_view"/> düğmesine dokunun. Düğme, katman stili simgesi (yığılmış şekiller) ile temsil edilir ve görüntüleme ile katman ayarlarını belirtir. <Translate android="true" ids="astro_configure_view"/>, ana görüntüleme seçeneklerini gösteren *Yarım durumda* açılır. Paneli yukarı kaydırarak *Tam duruma* genişletin ve tüm mevcut ayarlara erişin. <Translate android="true" ids="astro_configure_view"/> kapatmak için paneli bir kez aşağı kaydırarak Yarım duruma dönün, bir kez daha aşağı kaydırarak tamamen kapatın veya panel dışındaki harita üzerinde herhangi bir yere dokunun. Ayrıca panelin sağ üst köşesindeki Kapat (X) düğmesine dokunabilirsiniz.

### Modes and Actions {#modes-and-actions}

![Configure View](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Configure View](@site/static/img/plugins/starwatcher/red_filter_new.png)

Bu bölüm, Yıldız haritasının ana görüntüleme modlarını kontrol eder.

- **<Translate android="true" ids="map_2d"/> / <Translate android="true" ids="map_3d"/>**. Nesne yollarıyla yansıtılmış kubbe olarak gökyüzünü gösteren göksel yol görünümü (2D) ile göksel küreyi temsil eden küre benzeri gökyüzü görünümü (3D) arasında geçiş yapar.
- **<Translate android="true" ids="shared_string_map"/>**. Yıldız haritasının altında ek Dünya haritası görünümünü etkinleştirir, göksel nesneleri gerçek coğrafi çevrenizle ilişkilendirmenize yardımcı olur.
- **<Translate android="true" ids="red_filter"/>**. Karanlık gökyüzü gözlemleri sırasında ışık kirliliğini azaltmak ve gece görüşünü korumak için tüm ekrana kırmızı renk filtresi uygular.

### Visible Objects {#visible-objects}

![Configure View](@site/static/img/plugins/starwatcher/solar_system.png) ![Configure View](@site/static/img/plugins/starwatcher/constellations.png)

Bu bölüm, Yıldız haritasında hangi tür göksel nesnelerin gösterileceğini seçmenize olanak tanır.

| Nesne | Açıklama |
|-------|-------------|
| <Translate android="true" ids="astro_solar_system"/> | Güneş, Ay ve görünür gezegenleri görüntüler. |
| <Translate android="true" ids="astro_constellations"/> | Yıldızlar tarafından oluşturulan takımyıldız çizgilerini ve desenlerini gösterir. |
| <Translate android="true" ids="astro_stars"/> | Yıldız haritasında görünür bireysel yıldızları görüntüler. |
| <Translate android="true" ids="astro_nebulas"/> | Mevcut olduğunda bulutsu nesneleri gösterir. |
| <Translate android="true" ids="astro_star_clusters"/> | Yıldız kümelerini ayrı göksel nesneler olarak görüntüler. |
| <Translate android="true" ids="astro_deep_sky"/> | Galaksiler, galaksi kümeleri ve kara delikler gibi derin gökyüzü nesnelerini aç/kapatır. |

### Personal Display Options {#personal-display-options}

**Kişisel görüntüleme seçenekleri**, kullanıcı odağı ve gözlemle ilgili ek görsel yardımcıları kontrol eder.

| Seçenek | Açıklama |
|-------|-------------|
| <Translate android="true" ids="astro_direction"/> | Görünümünüzü yönlendirmenize yardımcı olan yön göstergesi gösterir. |
| <Translate android="true" ids="astro_daily_path"/> | Seçilen göksel nesnelerin gökyüzünde günlük yolunu görüntüler. |
| <Translate android="true" ids="shared_string_favorites"/> | Favori olarak işaretlenmiş nesneleri vurgular veya görüntüler. |

### Rendering Aids {#rendering-aids}

**Render yardımcıları**, Yıldız haritasını yönlendirmeye yardımcı olmak için referans çizgileri ve ızgaralar ekler.

| Yardımcı | Açıklama |
|-------|-------------|
| <Translate android="true" ids="azimuthal_grid"/> | Yatay gökyüzü yönlendirmesi için azimut tabanlı ızgara ekler. |
| <Translate android="true" ids="meridian_line"/> | Gökyüzünü kuzeyden güneye geçen meridyen çizgisini görüntüler. |
| <Translate android="true" ids="equatorial_grid"/> | Göksel ekvatoral koordinat ızgarasını gösterir. |
| <Translate android="true" ids="ecliptic_line"/> | Güneş'in görünür yolunu temsil eden ekliptik çizgiyi görüntüler. |
| <Translate android="true" ids="equator_line"/> | Göksel kürede Dünya'nın ekvatoral yansıtmasını görüntüler ve Dünya'nın gökyüzüne göre dönüşünü görselleştirmeye yardımcı olur. |
| <Translate android="true" ids="galactic_line"/> | Gökyüzü boyunca Samanyolu galaksisinin düzlemini gösterir ve galaktik diskin ana yönünü belirtir. |

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

## Search {#search}

![Search](@site/static/img/plugins/starwatcher/explore_screen.png)

Astronomi eklentisindeki **Arama** özelliği, göksel nesneleri bulmanıza, gökyüzü kategorilerini keşfetmenize ve gözlem verilerine erişmenize olanak tanır. Arama'yı açmak için Yıldız haritasındaki Arama düğmesine dokunun. Bu, göksel nesneleri keşfetmek ve düzenlemek için birkaç bölüm sağlayan Arama ekranını açar. Arama ekranı şu bölümleri içerir:

**1. Şimdi İzle**

Şimdi İzle bölümü, şu anda veya bu gece görünür olan göksel nesneleri vurgular. Bu bölüm, mevcut konumunuza ve zamanınıza göre gözlem için en uygun nesneleri gösteren bir öneri aracı olarak çalışır.

**2. Kategoriler**

Kategoriler bölümü, nesneleri tipe göre taramanıza olanak tanır: Güneş sistemi, Takımyıldızlar, Yıldızlar, Bulutsular, Yıldız kümeleri ve Derin gökyüzü. Her kategori, ana bilgiyle nesne listesini açar: nesne adı, tip veya takımyıldız, büyüklük (parlaklık) ve doğuş veya batış zamanı (uygulanırsa).

### Sorting and Filters {#sorting-and-filters}

![Sorting](@site/static/img/plugins/starwatcher/sorting.png) ![Filters](@site/static/img/plugins/starwatcher/filters.png)

Tam arama arayüzünü açmak için arama çubuğuna dokunun. Sonuçları sıralama ve filtreleme seçenekleriyle daraltabilirsiniz.

Nesneleri şu şekilde sıralayabilirsiniz:  
- Ad (A–Z veya Z–A)
- <Translate android="true" ids="astro_sort_brightest_first"/>
- <Translate android="true" ids="astro_sort_faintest_first"/>
- <Translate android="true" ids="astro_sort_rises_soonest"/>
- <Translate android="true" ids="astro_sort_sets_soonest"/>

Filtreler görünür nesneleri daraltmaya yardımcı olur.

**Görünürlük**  
- <Translate android="true" ids="astro_filter_show_all"/> — tüm nesneleri görüntüler
- <Translate android="true" ids="astro_filter_visible_now"/> — şu anda ufuk üzerinde olan nesneler
- <Translate android="true" ids="astro_filter_visible_tonight"/> — gün batımı ve gün doğumu arasında görünür nesneler

**Ek filtreler**  
- <Translate android="true" ids="astro_filter_naked_eye"/> — yalnızca büyüklüğü ≤ 6 olan nesneleri gösterir

**Kategoriler**  
Sonuçları nesne tipine göre filtreleyebilirsiniz. Belirli kategorileri seçmek, Otomatik olarak Tüm seçeneğini devre dışı bırakır.

### My Data {#my-data}

![My Data](@site/static/img/plugins/starwatcher/my_data_new.png)

Verilerim bölümü, kullanıcının etkileşimde bulunduğu nesneleri içerir. Bu bölüm üç liste içerir:

- <Translate android="true" ids="shared_string_favorites"/> — bağlam menüsünden kaydedilen nesneler.
- <Translate android="true" ids="astro_daily_path"/> — günlük hareket yolu etkinleştirilen nesneler.
- <Translate android="true" ids="astro_directions"/> — Yıldız haritasında etkin yön göstergesi olan nesneler.

Bir öğeyi seçmek, nesnenin bağlam menüsünü açar.

### Catalogs {#catalogs}

![Catalogs](@site/static/img/plugins/starwatcher/catalogs_new.png)

Kataloglar bölümü, Astronomi eklentisinde mevcut astronomik kataloglara erişim sağlar.

Kataloglar, yıldızlar, galaksiler, bulutsular ve yıldız kümeleri gibi büyük göksel nesne koleksiyonları içerir. Bir katalogu açmak, o katalogda yer alan nesne listesini görüntüler.

## Related Articles {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar](../../user/map/vector-maps.md)