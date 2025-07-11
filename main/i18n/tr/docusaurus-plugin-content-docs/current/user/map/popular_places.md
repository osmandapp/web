---
source-hash: 5920278abcfe315d7fbfdbeb177097e48bdb3e0b7a6127b1def7c80cbfc2a59a
sidebar_position: 8
title: Popüler Yerler
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


<InfoIncompleteArticle/>


## Genel Bakış {#overview}

OsmAnd'daki **Popüler Yerler** özelliği, [Wikidata](https://www.wikidata.org) ve [Wikipedia](https://www.wikipedia.org/) adresindeki açık yapılandırılmış verileri kullanarak önemli simge yapıları ve ilgi çekici yerleri vurgular. Çok dilli açıklamalar ve fotoğraflarla iyi bilinen destinasyonları keşfetmelerine yardımcı olur.

Bu özelliğe dahil edilen her yer, OsmAnd'ın doğrulanmış adları, önizleme görüntülerini ve Wikipedia makalelerine bağlantıları görüntülemesini sağlayan bir **Wikidata Kimliği** ile bağlantılıdır. Bu araç tüm OpenStreetMap (OSM) noktalarını göstermez. Wikidata referansları olan POI'lerle sınırlıdır.

Şu anda, derlenmiş veritabanı, dünya genelinde yaklaşık **50.000 ila 150.000 en beğenilen yeri** içermekte olup, **1 milyondan fazla** Wikidata + OSM nesnesinden seçilmiştir.

:::note
*Bu, Popüler Yerler özelliğinin ilk sürümüdür. [GitHub](https://github.com/osmandapp/OsmAnd) adresinden geri bildirimler memnuniyetle karşılanır*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Popüler yerler](@site/static/img/map/popular_places/popular_places.png) ![Popüler yerler](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Veri Kaynakları

**Popüler Yerler**, [Wikidata](https://www.wikidata.org) ve [Wikipedia](https://www.wikipedia.org/) adresindeki yapılandırılmış içeriğe dayanmaktadır.

Yalnızca bağlantılı bir **Wikidata Kimliği** olan POI'ler görüntülenir. Bu Kimlikler, harita nesnelerini doğrulanmış adlara, açıklamalara ve görüntülere bağlar.

Wikidata bağlantısını doğrudan [Harita Bağlam Menüsünde](../map/map-context-menu.md) görüntüleyebilirsiniz. Wikidata etiketine dokunmak, Wikidata web sitesindeki tam nesne sayfasını açar.

Wikidata Kimliği nasıl bulunur öğrenin: [Wikipedia: Wikidata Kimliği Bulma](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Nasıl Kullanılır {#how-to-use}

<InfoAndroidOnly/>

**Popüler Yerler** özelliği, hem yakındaki simge yapıların derlenmiş bir listesini hem de haritada Wikipedia tabanlı POI'lerin bir katmanını içerir.

Bu özelliğe erişmenin iki ana yolu vardır:

- **Ücretsiz sürüm**  
  Yakındaki yerleri liste görünümünde keşfetmek için [Arama](#explore-in-search) aracılığıyla erişin.  
  *<Translate android="true" ids="android_button_seq"/>*. Şuraya gidin: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Ücretli sürümler** *(Maps+ ve OsmAnd Pro)*  
  [Haritayı Yapılandır](#enable-layer) bölümünde görsel katmanı etkinleştirin.  
  *<Translate android="true" ids="android_button_seq"/>*. Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  Bu modda, popüler POI'ler haritada küçük resim önizlemeleri ve Wikipedia içeriğiyle doğrudan görünür.

  Katman ayarlarında **çevrimiçi** ve **çevrimdışı** Wikipedia kaynakları arasında geçiş yapabilirsiniz. Daha fazla bilgi için [Katmanı Etkinleştir](#enable-layer) bölümüne bakın.


## Aramada Keşfet {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Keşif Modu](@site/static/img/map/popular_places/popular_places_search.png)  
![Keşif Modu](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="popular_places_nearby"/>** bölümü, mevcut konumunuza yakın en beğenilen simge yapıların kaydırılabilir bir listesini görüntüler. Her öğe şunları içerir:

- Yerin adı.
- Kısa açıklama.
- POI kategori etiketi.
- Mesafe ve yön.
- Küçük resim (varsa).

Tam listeyi görüntülemek için **Tümünü Göster**'e veya listelenen tüm POI'leri haritada görüntülemek için **Haritada Göster**'e dokunun.

Herhangi bir yere dokunmak, [POI bağlam menüsünü](./map-context-menu.md) açar, burada fotoğrafları önizleyebilir ve ilgili [Wikipedia içeriğine](../plugins/wikipedia.md) erişebilirsiniz.

:::tip
Arama tabanlı Keşif Modu, ücretsiz sürümde **yalnızca çevrimiçi** çalışır.  
**Çevrimdışı** kullanmak için bir [Maps+ veya OsmAnd Pro](../purchases/android.md) aboneliğine ve indirilmiş [Wikipedia haritalarına](../plugins/wikipedia.md) ihtiyacınız vardır.
:::


## Katmanı Etkinleştir {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Popüler yerler menüsü](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

**Popüler Yerler (Wikipedia)** özelliği, [Haritayı Yapılandır menüsünde](./configure-map-menu.md) mevcuttur. Popüler yerleri doğrudan haritada görüntülemek için, Wikidata görüntülerini kullanarak Wikipedia'dan gelen verilerle POI katmanını etkinleştirin.

Bu özelliği kullanmadan önce:

- [Wikipedia Eklentisinin](../plugins/wikipedia.md) etkinleştirildiğinden emin olun.
- Çevrimdışı kullanmak istiyorsanız bölgeniz için Wikipedia verilerini indirin.

### Katman Seçenekleri

Etkinleştirildiğinde, aşağıdaki seçenekler kullanılabilir hale gelir:

- **<Translate android="true" ids="poi_osmwiki"/>** – Haritada Wikipedia POI'lerini açıp kapatın.

- **POI Kaynağı** – Şunlar arasında geçiş yapın:
  - *Çevrimdışı mod* (Wikipedia makaleleri indirilmiş olmalıdır).
  - *Yalnızca çevrimiçi* mod (canlı veri ve görüntüler kullanır).

- **<Translate android="true" ids="shared_string_language"/>** – Wikipedia açıklamaları için dili seçin.

- **<Translate android="true" ids="show_image_previews"/>** – POI'lerin yanında Wikidata'dan küçük resim önizlemelerini gösterin.

Haritadaki bir POI'ye dokunmak, [POI bağlam menüsünü](./map-context-menu.md) açar, burada [çevrimiçi fotoğrafları](#online-photos) görüntüleyebilir ve bağlantılı [Wikipedia makalelerine](../plugins/wikipedia.md) erişebilirsiniz.


## Çevrimiçi Fotoğraflar {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Çevrimiçi Fotoğraflar bağlam menüsü Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Çevrimiçi Fotoğraflar bağlam menüsü iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Bu, seçilen Popüler Yer'in (Wikipedia) fotoğraf önizlemesini görüntüleyen [POI bağlam menüsü](./map-context-menu.md) içindeki bir bölümdür. Mevcut fotoğraflara göz atmak için yatay olarak kaydırabilir veya [tam ekran modunda](#gallery) açmak için herhangi bir görüntüye dokunabilirsiniz.

[Eylemler](#actions) bölümündeki ve [Galeri](#gallery) bölümündeki ek seçenekler hakkında daha fazla bilgi edinin.


<!-- 

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.  
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### Eylemler {#actions}

Harita Bağlam menüsünde Nasıl erişilir:

- Seçilen konum için mevcut tüm fotoğrafları kaydırabileceğiniz [galeriyi](#gallery) tam ekran modunda açmak için **Tümünü Göster** (Android) / **Tümünü Görüntüle** (iOS) düğmesine dokunun.

- [Tam ekran](#gallery) olarak görüntülemek ve mevcut eylemlere erişmek için herhangi bir fotoğrafa dokunun:  
  **Paylaş**, **Ayrıntılar**, **Tarayıcıda aç** ve **İndir**.


### Galeri {#gallery}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Galeri Menüsü – Android](@site/static/img/map/gallery_menu_android.png)
![Galeri Menüsü – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Galeri Menüsü – iOS](@site/static/img/map/gallery_menu_ios.png)
![Galeri Menüsü – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


**Galeri Menüsü**, seçilen ilgi çekici yerle ilgili **100 adede kadar görüntü** görüntüleyebilir. Mevcut tüm fotoğraflar arasında kaydırabilirsiniz. Bir fotoğrafa dokunmak, ayrıntılı bir görünümü kısa süreliğine açar ve şunları gösterir: *Ad*, *Eklenme tarihi*, *Yazar*, *Lisans*  

Her fotoğraf üzerinde aşağıdaki eylemleri de gerçekleştirebilirsiniz:

- **Paylaş**  
  Seçilen görüntüyü cihazınızda yüklü herhangi bir uyumlu uygulama (örn. mesajlaşma, e-posta veya sosyal medya) kullanarak paylaşın. Paylaşılan içerik, görüntüyü ve kaynak bağlantısını (varsa) içerir.

- **Ayrıntılar**  
  Görüntü hakkında meta verileri gösteren ayrıntılı bir görünüm açın: *Ad*, *Eklenme tarihi*, *Yazar*, *Lisans*, *Kaynak* ve *Doğrudan bağlantı*

- **Tarayıcıda aç**  
  Görüntünün kaynak sayfasını (genellikle [Wikimedia Commons](https://commons.wikimedia.org/) üzerinde) varsayılan tarayıcınızda başlatın. Bu, tam görüntüyü, lisans bilgilerini ve ilgili içeriği görüntülemenizi sağlar.

- **İndir**  
  Görüntüyü cihazınızın depolama alanına kaydedin. İndirilen görüntü, cihazınızın varsayılan İndirilenler klasöründe bulunabilir ve çevrimdışı erişilebilir.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Android sürümü, fotoğraf eylemleri için ek bir menü içermez.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - Bağlam Menüsü Seçenekleri](@site/static/img/map/gallery_menu_ios_3.png)

**iOS**'ta, bir fotoğrafa uzun basmak, ek eylemlerle bir bağlam menüsü açar:

- **Ayrıntılar**  
- **Tarayıcıda aç**  
- **İndir**

**Düğmeler**:

- **Paylaş** düğmesi, seçilen görüntüyü hızlıca paylaşmanızı sağlar.  
- **Üç nokta menüsü**, ayrıntıları görüntüleme, kaynağı bir tarayıcıda açma veya görüntüyü indirme gibi ek eylemlere erişim sağlar.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Android – Ayrıntılar Görünümü](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Ayrıntılar Görünümü](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

**Ayrıntılar** ekranı, seçilen fotoğraf için tam meta verileri sağlar: *Ad*, *Eklenme tarihi*, *Yazar*, *Lisans*, *Kaynak* ve *Doğrudan bağlantı*


## İlgili Makaleler

- [Harita Bağlam menüsü](./map-context-menu.md)
- [Haritayı Yapılandır](./configure-map-menu.md)
- [POI Ara](../search/search-poi.md)
- [Wikipedia eklentisi](../plugins/wikipedia.md)


> *Son güncelleme: Temmuz 2025*


<!--
### Online Photos 2

<Tabs groupId="operating-systems">

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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems">

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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->