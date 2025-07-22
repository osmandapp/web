---
source-hash: b74e034d907048857594823cf149189c003eb875c25da16719cff9a3addc6202
sidebar_position: 2
title: Haritaları İndir
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

Haritaları OsmAnd uygulamasına yüklemek, sorunsuz çalışma ve çevrimdışı navigasyon kullanımı için önemli bir adımdır. Çevrimdışı haritalar olmadan uygulama tam olarak işlev göremez. Haritaları indirmek, farklı bölgelerin haritalarına erişmenizi sağlayarak internet bağlantısı olmadan gezinmenize olanak tanır.

Haritaları indirmenin iki *ana* yolu vardır: **1)** [*Ana Menü*'deki bölgeler listesini görüntüleme](#maps-and-resources) veya **2)** [gerekli bölgeyi doğrudan harita üzerinde seçme](#select-on-the-map). Bu, istediğiniz bölgeleri seçme esnekliği sağlar ve haritaların planlarınıza uygun olmasını garanti eder.

OsmAnd hem [Vektör](../map/vector-maps.md) hem de [Raster](../map/raster-maps.md) haritaları desteklese de, çevrimdışı olarak vektör haritalarla çalışmaya başlamanız önerilir. Bu harita türü (daha fazla bilgi için [Harita OsmAnd türleri](../personal/maps-resources.md#map-types) bölümünü okuyun), [Arama](../search/index.md), [Navigasyon](../navigation/index.md) ve [Bağlam menüsü](../map/map-context-menu.md) dahil olmak üzere uygulamanın tüm temel işlevlerinin güvenilir çalışmasını sağlar. Bu, özellikle seyahatleriniz uzak yerlere veya internet erişiminin sınırlı olduğu yerlere gezileri içeriyorsa önemlidir.


## İndir {#download}

Haritaları [ilk kurulum ekranından](#initial-setup-screen) yüklemeye başlayın veya ana *yan menü* *→* [Haritalar ve Kaynaklar](#maps-and-resources) bölümüne gidin ve genel listeden gerekli haritaları seçin veya ihtiyacınız olan bölgeye dokunarak doğrudan harita üzerinde bir [bölge seçin](#select-on-the-map).


### İlk Kurulum Ekranı {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Harita indir Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harita indir iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Uygulamayı ilk kez başlattığınızda, internet bağlantınız tarafından belirlenen mevcut konumunuza göre uyarlanmış bir harita indirmeniz istenir. Bu adım isteğe bağlıdır, indirmeyi atlamanıza ve doğrudan bölgeniz için yerel haritalar arayüzüne geçmenize olanak tanır.

VPN kullanıyorsanız, OsmAnd VPN'in sanal konumuna göre bir harita önerebilir. Bu gibi durumlarda, gerçek coğrafi bölgenizle daha iyi uyumlu bir haritayı manuel olarak seçebilirsiniz.


#### Üç nokta menüsü {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Harita indir Android](@site/static/img/steps/start_screen_first_screen_location_andr.png) ![Harita indir iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harita indir Android](@site/static/img/steps/start_screen_first_screen_location_ios.png) ![Harita indir iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Konum menüsü:**

- *Farklı bir bölge seçin.* [Haritaları İndir](#maps-and-resources) menüsünü açar.
- *Konumunuzu belirlememize izin verin.* Konuma erişim için [izin ister](../start-with/first-steps.md#permission-to-access-the-location) ve bu verileri kullanarak gerekli haritayı bulur.

**Diğer menü:**

- *OsmAnd Cloud'dan geri yükle.* [OsmAnd Cloud](../personal/osmand-cloud.md) ana ekranını veya giriş ekranını açar. Bu, uygulamayı yeniden yüklediyseniz veya bölgeleri ve ayarları yeniden seçmeden önceki kullanıcı deneyimini geri yüklemek istiyorsanız kullanışlıdır.
- *Dosyadan geri yükle.* Bir `.osf` dosyasını seçmek ve içe aktarmak için cihazın dosya yöneticisini açar.


### Haritalar ve Kaynaklar {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Harita indir menüsü genel Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Harita indir menüsü genel iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

[Haritalar ve Kaynaklar](../personal/maps-resources.md) ekranı aşağıdaki bölümlere erişim sağlar:

- [İndirilenler](../personal/maps-resources.md#downloads). Kapsamlı bir [OsmAnd harita türleri](../personal/maps-resources.md#map-types) seçeneği sunar.
- [Yerel](../personal/maps-resources.md#local). Cihazınızda şu anda depolanan tüm harita verilerini, özel ve içe aktarılan kaynaklar dahil olmak üzere görüntüler.
- [Güncellemeler](../personal/maps-resources.md#updates). Verilerinizi güncel tutmak için haritaları aylık olarak yenilemenizi sağlar.

#### Haritaları İndirme {#downloading-maps}

Bir ülke veya bölge için belirli bir harita türünü indirmek için:

- Afrika, Avrupa veya başka bir kıta gibi gerekli bölgenin klasörüne gidin.
- Listeden tercih ettiğiniz ülkeyi veya bölgeyi seçin.
- Sonraki ekranda, o alan için mevcut harita türlerini inceleyin ve seçin.

Diğer harita türleri hakkında bilgiyi **Haritalar** makalesinin [İndirilenler](../personal/maps-resources.md#downloads) bölümünde bulabilirsiniz.

### Dünya Haritası Seçenekleri {#world-map-options}

OsmAnd iki dünya haritası seçeneği içerir:

1. **Mini Dünya Haritası** (önceden yüklenmiş). Temel navigasyonu sağlayan ve dünyanın genel bir görünümünü sunan hafif bir harita.
2. **Ayrıntılı Dünya Haritası** (indirilebilir). Büyük şehirleri, yolları, nehirleri ve diğer coğrafi özellikleri içeren küresel bir harita.

***Önemli notlar:***

- **Ayrıntılı Dünya Haritası, tek tek ülke veya bölge haritalarının yerini almaz.** Genel bir bakış için kullanışlıdır ancak bölgesel haritalarla aynı ayrıntı düzeyini içermez.
- Ayrıntılı navigasyona ihtiyacınız varsa, *Menü → Haritalar ve Kaynaklar → Haritaları İndir* aracılığıyla **belirli ülke veya bölge haritalarını manuel olarak indirin.**
- **OsmAnd Pro veya Maps+** kullanıcıları **sınırsız sayıda harita** indirebilir ancak yine de her bölgeyi ayrı ayrı indirmeleri gerekir.
- **Tüm dünya haritalarını aynı anda indirmek için tek bir seçenek yoktur.**


### Harita üzerinde seç {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Dünya haritasına kısa dokunuş bölge haritasını indirmeye izin verir](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dünya haritasına kısa dokunuş bölge haritasını indirmeye izin verir](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Harita indirme yollarından biri, dünya haritasını yakınlaştırmak ve indirmek istediğiniz bir bölgeyi seçmek için kısa bir dokunuş yapmaktır. Bu alan sarı renkle vurgulanacak ve altta bölgenin adını ve onu indirme veya başka haritalar seçme önerisini içeren bir panel görünecektir.

:::tip Harita rengi
Küçük ekranda, indirilmek üzere seçilen harita sarı renkle, zaten indirilmiş haritalar yeşil renkle ve devre dışı bırakılmış haritalar turuncu renkle vurgulanacaktır. Çok sayıda yüklü haritanız olması durumunda programı hızlandırmak için **devre dışı bırakılmış** haritalar atlanır.
:::

### Arama {#search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Harita indirmek için arama fonksiyonu Android](@site/static/img/settings/search_download_map_3_andr.png) ![Harita indirmek için arama fonksiyonu Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harita indirmek için arama fonksiyonu iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Harita indirmek için arama fonksiyonu iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

Arama, belirli bir haritayı veya bölgeyi bulmayı kolaylaştırır, ihtiyacınız olan verileri indirmenin uygun ve hızlı bir yolunu sunar. [Arama fonksiyonunu](../search/index.md) kullanarak haritayı bulabilir ve indirebilirsiniz.

- Arama alanına bir ülke veya bölge adı girerek aramaya başlayın. Ardından görünen listeden gerekli haritayı seçin.
- İndirilebilecek haritalar gri renkte ve bir indirme simgesiyle görüntülenir, indirilmiş haritalar yeşil renkte ve bir menü düğmesiyle görüntülenir.
- Gerekli sonucun adına dokunun ve Bölge genelinde harita listesi açılacaktır.
- [Harita türlerini](../personal/maps-resources.md#map-types) seçin: *Standart harita, Yalnızca yol haritası, Kontur çizgileri, Wikipedia*.

> *Son güncelleme: Ocak 2025*