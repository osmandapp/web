---
source-hash: e9993ea8b8d1473bd9bb8cb2710fc4752a83815a48b1a0393ca624a366172fe9
sidebar_position: 8
title: Popular Places
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<!--
<InfoIncompleteArticle/>
-->

## Genel Bakış {#overview}

:::tip Satın Alma
Popüler Yerler, [ücretli bir özelliktir](../purchases/index.md).  
:::

OsmAnd'daki **Popüler Yerler** özelliği, [Wikidata](https://www.wikidata.org) ve [Wikipedia](https://www.wikipedia.org) kaynaklarındaki açık yapılandırılmış verileri kullanarak önemli yer işaretlerini ve çekici noktaları vurgular. Çok dilli açıklamalar ve fotoğraflarla kullanıcıların iyi bilinen destinasyonları keşfetmelerine yardımcı olur.

Bu özelliğe dahil edilen her yer, OsmAnd'ın doğrulanmış adları, önizleme görüntülerini ve Wikipedia makalelerine bağlantıları görüntülemesini sağlayan bir **Wikidata Kimliği** ile bağlantılıdır. Bu araç tüm OpenStreetMap (OSM) noktalarını **göstermez**. Wikidata referansları olan İÇN'lerle sınırlıdır.

Şu anda, seçilmiş veritabanı dünya genelinde yaklaşık **50.000 ila 150.000 en yüksek puanlı yer** içermektedir ve bu yerler, **1 milyondan fazla** Wikidata + OSM nesnesinden seçilmiştir.

:::note
*Bu, Popüler Yerler özelliğinin ilk sürümüdür. [GitHub](https://github.com/osmandapp/OsmAnd) üzerinde geri bildirim hoş karşılanır*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Popular places](@site/static/img/map/popular_places/popular_places.png) ![Popular places](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


## Veri Kaynakları {#data-sources}

**Popüler Yerler**, [Wikidata](https://www.wikidata.org) ve [Wikipedia](https://www.wikipedia.org) kaynaklarındaki yapılandırılmış içeriğe dayanmaktadır.

Bağlantılı bir **Wikidata Kimliği** olan İÇN'ler yalnızca görüntülenir. Bu kimlikler, harita nesnelerini doğrulanmış adlara, açıklamalara ve görüntülere bağlar.

Wikidata bağlantısını doğrudan [Harita Bağlam Menüsü'nde](../map/map-context-menu.md) görüntüleyebilirsiniz. Wikidata etiketine dokunmak, Wikidata web sitesinde tam nesne sayfasını açar.

Popüler Yerler'deki görüntüler ve diğer Wikidata tabanlı içerikler, Wikidata veya Wikimedia Commons'ta değişikliklerden hemen sonra görünmeyebilecek şekilde zamanlanmış olarak yenilenir. Mevcut yenileme sıklığı: ayda iki kez — **10'unda** ve **20'sinde**.

Wikidata Kimliği nasıl bulunur öğrenin: [Wikipedia: Wikidata Kimliği Bulma](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Nasıl Kullanılır {#how-to-use}

<InfoAndroidOnly/>

**Popüler Yerler** özelliği, hem yakındaki önemli yer işaretlerinin seçilmiş bir listesini hem de harita üzerinde Wikipedia tabanlı İÇN'lerin bir katmanını içerir.

Bu özelliğe erişmenin iki ana yolu vardır:

- **Ücretsiz sürüm**  
  Yakındaki yerleri liste görünümünde keşfetmek için [Arama](#explore-in-search) yoluyla erişin.  
  *<Translate android="true" ids="android_button_seq"/>*. Şuraya gidin: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*
  
  Bu Keşfet listesi, yakınınızdaki popülerlik sıralamasına göre Wikipedia/Wikidata yerlerini gösterir ve çevrimiçi çalışır. En fazla 50 yer görüntüler. Keşfet/Wikipedia sonuçları derecelendirme sıralamasına göre olduğu için, bu sonuçlardaki sıralama düzenli İÇN aramasından farklı olabilir.

- **Ücretli sürümler** *(Maps+ ve OsmAnd Pro)*  
  [Haritayı Yapılandır](#enable-layer) bölümünde görsel katmanı etkinleştirin.  
  *<Translate android="true" ids="android_button_seq"/>*. Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  Bu modda, popüler İÇN'ler harita üzerinde küçük resim önizlemeleri ve Wikipedia içeriğiyle doğrudan görünür.

  Katman ayarlarında **çevrimiçi** ve **çevrimdışı** Wikipedia kaynakları arasında geçiş yapabilirsiniz. Daha fazla bilgi için [Katmanı Etkinleştir](#enable-layer) bölümüne bakın.


## Aramada Keşfet {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Explore Mode](@site/static/img/map/popular_places/popular_places_search.png)  
![Explore Mode](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="popular_places_nearby"/>** bölümü, bulunduğunuz yere yakın en yüksek puanlı yer işaretlerinin kaydırılabilir bir listesini görüntüler. Her öğe şunları içerir:

- Yerin adı.
- Kısa açıklama.
- İÇN kategori etiketi.
- Mesafe ve yön.
- Küçük resim (varsa).

**Tümünü Göster**'e dokunarak tam listeyi görüntüleyin veya listelenen tüm İÇN'leri haritada görüntülemek için **Haritada Göster**'e dokunun.

Herhangi bir yere dokunmak, [İÇN bağlam menüsünü](./map-context-menu.md) açar; burada fotoğrafları önizleyebilir ve ilgili [Wikipedia içeriğine](../plugins/wikipedia.md) erişebilirsiniz.

:::tip
Arama tabanlı Keşfet Modu, ücretsiz sürümde **yalnızca çevrimiçi** çalışır.  
**Çevrimdışı** kullanmak için bir [Maps+ veya OsmAnd Pro](../purchases/android.md) aboneliğine ve indirilmiş [Wikipedia haritalarına](../plugins/wikipedia.md) ihtiyacınız vardır.
:::


## Katmanı Etkinleştir {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Popular places menu](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

**Popüler Yerler (Wikipedia)** özelliği, [Haritayı Yapılandır menüsünde](./configure-map-menu.md) mevcuttur. Popüler yerleri doğrudan haritada görüntülemek için, Wikidata görüntülerini kullanarak Wikipedia'dan gelen verilerle İÇN katmanını etkinleştirin.

Bu özelliği kullanmadan önce:

- [Wikipedia Eklentisinin](../plugins/wikipedia.md) etkinleştirildiğinden emin olun.
- Çevrimdışı kullanmak istiyorsanız bölgeniz için Wikipedia verilerini indirin.

### Katman Seçenekleri {#layer-options}

Etkinleştirildikten sonra aşağıdaki seçenekler kullanılabilir hale gelir:

- **<Translate android="true" ids="poi_osmwiki"/>** – Haritadaki Wikipedia İÇN'lerini açıp kapatın.

- **İÇN Kaynağı** – Şunlar arasında geçiş yapın:
  - *Çevrimdışı Yalnızca* modu — bölgeniz için indirilmiş Wikipedia harita verilerini kullanır. 
  - *Çevrimiçi Yalnızca* modu — yerleri ve görüntü önizlemelerini çevrimiçi yükler. Çevrimiçi sonuçlar seçili dil ayarlarınıza bağlı olabilir.

- **<Translate android="true" ids="shared_string_language"/>** – Wikipedia açıklamaları için dili seçin.

- **<Translate android="true" ids="show_image_previews"/>** – İÇN'lerin yanında Wikidata'dan küçük resim önizlemelerini göster. Eğer görüntü önizlemeleri devre dışı bırakılırsa, Popüler Yerler haritada küçük resimler yerine simgelerle gösterilir. Görüntü önizlemeleri Wikidata/Wikipedia bağlantılı görüntüleri kullanır: *Çevrimdışı Yalnızca* modunda önizlemeler indirilmiş Wikipedia verilerine bağlıdır, *Çevrimiçi Yalnızca* modunda ise önizlemeler çevrimiçi getirilir.

Haritadaki bir İÇN'ye dokunmak, [çevrimiçi fotoğrafları](#online-photos) görüntüleyebileceğiniz ve bağlantılı [Wikipedia makalelerine](../plugins/wikipedia.md) erişebileceğiniz [İÇN bağlam menüsünü](./map-context-menu.md) açar.


## Çevrimiçi Fotoğraflar {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Bu, seçilen Popüler Yer'in (Wikipedia) bir fotoğraf önizlemesini görüntüleyen [İÇN bağlam menüsü](./map-context-menu.md) içindeki bir bölümdür. Mevcut fotoğraflar arasında gezinmek için yatay olarak kaydırabilir veya [tam ekran modunda](#gallery) açmak için herhangi bir görüntüye dokunabilirsiniz.

Çevrimiçi görüntülenen görüntüler, çevrimdışı erişim için otomatik olarak önbelleğe alınır. Önbelleğe alınmış fotoğraflar köşede küçük bir çevrimdışı rozet gösterir. Önizleme ızgarası iPadOS ve macOS'ta ekran boyutuna uyum sağlar ve büyük ekranlarda rahat bir görüntü düzeni sağlar. OsmAnd ayrıca Çevrimiçi Fotoğraflar bölümü kapatıldığında tekrarlanan ağ isteklerini tetiklemeyi önler ve farklı İÇN'ler arasında hızlı geçişlerde önceki istekleri iptal eder.

<!-- 
Learn more about additional options in the [Actions](#actions) section and [Gallery](#gallery).


When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.  
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).


### Actions {#actions}

In the Map Context menu How to access:

- Tap the **Show All** (Android) / **View All** (iOS) button to open the [gallery](#gallery) in full screen mode, where you can swipe through all available photos for the selected location.

- Tap any photo to view it in [full screen](#gallery) and access the available actions:  
  **Share**, **Details**, **Open in browser**, and **Download**.

-->

### Galeri {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Gallery Menu – Android](@site/static/img/map/gallery_menu_android.png)
![Gallery Menu – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Gallery Menu – iOS](@site/static/img/map/gallery_menu_ios.png)
![Gallery Menu – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>

**Galeri Menüsü**, seçilen ilgi çekici noktayla ilgili **100 adede kadar görüntü** görüntüleyebilir. Bu görüntüleri görüntülemek için **Tümünü Göster** (Android) / **Tümünü Görüntüle** (iOS) düğmesine dokunun. Mevcut tüm fotoğraflar arasında gezinebilirsiniz. Bir fotoğrafa kısa dokunmak, *Ad*, *Eklenme tarihi*, *Yazar*, *Lisans* gösteren ayrıntılı bir görünüm açar.

iOS, iPadOS ve macOS'ta, fotoğrafları klavye tuşlarıyla gezinebilirsiniz (←/→ resimler arasında hareket için, Enter/Boşluk açmak için).

Her fotoğraf üzerinde aşağıdaki eylemleri de gerçekleştirebilirsiniz:

- **Paylaş**  
  Seçilen görüntüyü cihazınızda yüklü herhangi bir uyumlu uygulama (örn. mesajlaşma, e-posta veya sosyal medya) kullanarak paylaşın. Paylaşılan içerik, görüntüyü ve kaynak bağlantısını (varsa) içerir.

- **Ayrıntılar**  
  Görüntü hakkında meta verileri gösteren ayrıntılı bir görünüm açın: *Ad*, *Eklenme tarihi*, *Yazar*, *Lisans*, *Kaynak* ve *Doğrudan bağlantı*

- **Tarayıcıda aç**  
  Görüntünün kaynak sayfasını (genellikle [Wikimedia Commons](https://commons.wikimedia.org/)) varsayılan tarayıcınızda başlatın. Bu, tam görüntüyü, lisans bilgilerini ve ilgili içeriği görüntülemenizi sağlar.

- **İndir**  
  Görüntüyü cihazınızın depolama alanına kaydedin. İndirilen görüntü, cihazınızın varsayılan İndirilenler klasöründe bulunabilir ve çevrimdışı erişilebilir.

**Not:** İndir, görüntüyü kalıcı çevrimdışı kullanım için cihazın depolama alanına kaydeder, önbelleğe alınmış fotoğraflar ise otomatik olarak saklanır ve yalnızca uygulama içinde çevrimdışı kullanılabilir.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

The Android version does not include an additional menu for photo actions.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - Context Menu Options](@site/static/img/map/gallery_menu_ios_3.png)

On **iOS**, long-pressing a photo opens a context menu with additional actions:

- **Details**  
- **Open in browser**  
- **Download**

**Buttons**:

- The **Share** button lets you quickly share the selected image.  
- The **three-dot menu** provides access to extra actions, including viewing details, opening the source in a browser, or downloading the image.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Android – Details View](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Details View](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

The **Details** screen provides full metadata for the selected photo, including: *Name*, *Date added*, *Author*, *License*, *Source*, and *Direct link*
-->


## İlgili Makaleler {#related-articles}

- [Harita Bağlam menüsü](./map-context-menu.md)
- [Haritayı Yapılandır](./configure-map-menu.md)
- [İÇN Ara](../search/search-poi.md)
- [Wikipedia eklentisi](../plugins/wikipedia.md)





<!--
### Online Photos 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.  

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap.

#### Gallery Menu 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_3.png) 

</TabItem>

</Tabs>



On iOS, long tapping on any photo opens an additional menu with actions such as *Details*, *Open in browser*, and *Download*.

Buttons:

- The **Share** button allows you to share the selected item.  
- The **Three dots** button opens a menu with options like *Details*, *Open in browser*, and *Download*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->