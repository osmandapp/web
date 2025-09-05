---
source-hash: 0c3b5e8e7cf6ef6e151b2af4c26f3e274170841399bcaf73871ab607bf13fd43
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

OsmAnd'deki **Popüler Yerler** özelliği, [Wikidata](https://www.wikidata.org) ve [Wikipedia](https://www.wikipedia.org/) açık yapılandırılmış verilerini kullanarak önemli yer işaretlerini ve ilgi çekici yerleri vurgular. Çok dilli açıklamalar ve fotoğraflarla iyi bilinen yerleri keşfetmelerine yardımcı olur.

Bu özelliğe dahil edilen her yer, OsmAnd'in doğrulanmış adları, önizleme görüntülerini ve Wikipedia makalelerine bağlantıları görüntülemesini sağlayan bir **Wikidata Kimliği** ile bağlantılıdır. Bu araç tüm OpenStreetMap (OSM) noktalarını göstermez. Wikidata referansları olan POI'lerle sınırlıdır.

Şu anda, derlenmiş veritabanı, 1 milyondan fazla Wikidata + OSM nesnesinden seçilen dünya genelinde yaklaşık **50.000 ila 150.000 en beğenilen yeri** içermektedir.

:::note
*Bu, Popüler Yerler özelliğinin ilk sürümüdür. [GitHub](https://github.com/osmandapp/OsmAnd) üzerinden geri bildirimler memnuniyetle karşılanır*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Popüler yerler](@site/static/img/map/popular_places/popular_places.png) ![Popüler yerler](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Veri Kaynakları

**Popüler Yerler**, [Wikidata](https://www.wikidata.org) ve [Wikipedia](https://www.wikipedia.org/) adresindeki yapılandırılmış içeriğe dayanmaktadır.

Yalnızca bağlantılı bir **Wikidata Kimliği** olan POI'ler görüntülenir. Bu Kimlikler, harita nesnelerini doğrulanmış adlara, açıklamalara ve görüntülere bağlar.

Wikidata bağlantısını doğrudan [Harita Bağlam Menüsü](../map/map-context-menu.md) içinde görüntüleyebilirsiniz. Wikidata etiketine dokunmak, Wikidata web sitesindeki tam nesne sayfasını açar.

Wikidata Kimliği nasıl bulunur öğrenin: [Wikipedia: Wikidata Kimliği Bulma](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Nasıl Kullanılır {#how-to-use}

<InfoAndroidOnly/>

**Popüler Yerler** özelliği, hem yakındaki önemli yerlerin derlenmiş bir listesini hem de harita üzerinde Wikipedia tabanlı POI'lerin bir katmanını içerir.

Bu özelliğe erişmenin iki ana yolu vardır:

- **Ücretsiz sürüm**
  Yakındaki yerleri liste görünümünde keşfetmek için [Arama](#explore-in-search) aracılığıyla erişin.
  *<Translate android="true" ids="android_button_seq"/>*. Şuraya gidin: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Ücretli sürümler** *(Maps+ ve OsmAnd Pro)*
  [Haritayı Yapılandır](#enable-layer) bölümünde görsel katmanı etkinleştirin.
  *<Translate android="true" ids="android_button_seq"/>*. Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

  Bu modda, popüler POI'ler doğrudan harita üzerinde küçük resim önizlemeleri ve Wikipedia içeriğiyle görünür.

  Katman ayarlarında **çevrimiçi** ve **çevrimdışı** Wikipedia kaynakları arasında geçiş yapabilirsiniz. Daha fazla bilgi için [Katmanı Etkinleştir](#enable-layer) bölümüne bakın.


## Aramada Keşfet {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Keşfet Modu](@site/static/img/map/popular_places/popular_places_search.png)
![Keşfet Modu](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="popular_places_nearby"/>** bölümü, mevcut konumunuza yakın en beğenilen yer işaretlerinin kaydırılabilir bir listesini görüntüler. Her öğe şunları içerir:

- Yerin adı.
- Kısa açıklama.
- POI kategori etiketi.
- Mesafe ve yön.
- Küçük resim (varsa).

Tam listeyi görüntülemek için **Tümünü Göster**'e veya listelenen tüm POI'leri haritada görüntülemek için **Haritada Göster**'e dokunun.

Herhangi bir yere dokunmak, [POI bağlam menüsünü](./map-context-menu.md) açar; burada fotoğrafları önizleyebilir ve ilgili [Wikipedia içeriğine](../plugins/wikipedia.md) erişebilirsiniz.

:::tip
Arama tabanlı Keşfet Modu, ücretsiz sürümde **yalnızca çevrimiçi** çalışır.
**Çevrimdışı** kullanmak için [Maps+ veya OsmAnd Pro](../purchases/android.md) aboneliğine ve indirilmiş [Wikipedia haritalarına](../plugins/wikipedia.md) ihtiyacınız vardır.
:::


## Katmanı Etkinleştir {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Popüler yerler menüsü](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

**Popüler Yerler (Wikipedia)** özelliği [Haritayı Yapılandır menüsünde](./configure-map-menu.md) mevcuttur. Popüler yerleri doğrudan haritada görüntülemek için, Wikidata görüntülerini kullanarak Wikipedia'dan gelen verilerle POI katmanını etkinleştirin.

Bu özelliği kullanmadan önce:

- [Wikipedia Eklentisinin](../plugins/wikipedia.md) etkinleştirildiğinden emin olun.
- Çevrimdışı kullanmak istiyorsanız bölgeniz için Wikipedia verilerini indirin.

### Katman Seçenekleri

Etkinleştirildiğinde, aşağıdaki seçenekler kullanılabilir hale gelir:

- **<Translate android="true" ids="poi_osmwiki"/>** – Haritadaki Wikipedia POI'lerini açıp kapatın.

- **POI Kaynağı** – Şunlar arasında geçiş yapın:
  - *Çevrimdışı mod* (Wikipedia makaleleri indirilmelidir).
  - *Yalnızca çevrimiçi* mod (canlı veri ve görüntüler kullanır).

- **<Translate android="true" ids="shared_string_language"/>** – Wikipedia açıklamaları için dili seçin.

- **<Translate android="true" ids="show_image_previews"/>** – POI'lerin yanında Wikidata'dan küçük resim önizlemelerini göster.

Haritadaki bir POI'ye dokunmak, [POI bağlam menüsünü](./map-context-menu.md) açar; burada [çevrimiçi fotoğrafları](#online-photos) görüntüleyebilir ve bağlantılı [Wikipedia makalelerine](../plugins/wikipedia.md) erişebilirsiniz.


## Çevrimiçi Fotoğraflar {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimiçi Fotoğraflar bağlam menüsü Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Çevrimiçi Fotoğraflar bağlam menüsü iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Bu, seçilen Popüler Yer'in (Wikipedia) fotoğraf önizlemesini görüntüleyen [POI bağlam menüsü](./map-context-menu.md) içindeki bir bölümdür. Mevcut fotoğraflara göz atmak için yatay olarak kaydırabilir veya herhangi bir görüntüye dokunarak [tam ekran modunda](#gallery) açabilirsiniz.

[Eylemler](#actions) bölümündeki ve [Galeri](#gallery) bölümündeki ek seçenekler hakkında daha fazla bilgi edinin.


<!--

Haritada veya listeden bir Popüler Yere dokunduğunuzda, [POI bağlam menüsü](./map-context-menu.md) görüntülerden yatay bir önizleme içeren bir **Çevrimiçi Fotoğraflar** bölümü içerir.

- Tam ekranda görüntülemek için herhangi bir fotoğrafa dokunun.
- Daha fazla görüntüye göz atmak için kaydırın.

Paylaşma, meta verileri görüntüleme veya indirme gibi daha fazla eylem için [Galeri](#gallery) bölümüne bakın.

-->

### Eylemler {#actions}

Harita Bağlam menüsünde nasıl erişilir:

- Seçilen konum için mevcut tüm fotoğrafları kaydırabileceğiniz [galeriyi](#gallery) tam ekran modunda açmak için **Tümünü Göster** (Android) / **Tümünü Görüntüle** (iOS) düğmesine dokunun.

- [Tam ekranda](#gallery) görüntülemek ve mevcut eylemlere erişmek için herhangi bir fotoğrafa dokunun:
  **Paylaş**, **Ayrıntılar**, **Tarayıcıda aç** ve **İndir**.


### Galeri {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Galeri Menüsü – Android](@site/static/img/map/gallery_menu_android.png)
![Galeri Menüsü – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Galeri Menüsü – iOS](@site/static/img/map/gallery_menu_ios.png)
![Galeri Menüsü – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


**Galeri Menüsü**, seçilen ilgi çekici noktayla ilgili **100 adede kadar görüntü** görüntüleyebilir. Mevcut tüm fotoğraflar arasında kaydırabilirsiniz. Bir fotoğrafa dokunmak, kısa bir süre için ayrıntılı bir görünüm açar ve şunları gösterir: *Ad*, *Eklenme tarihi*, *Yazar*, *Lisans*

Her fotoğraf üzerinde aşağıdaki eylemleri de gerçekleştirebilirsiniz:

- **Paylaş**
  Seçilen görüntüyü cihazınızda yüklü herhangi bir uyumlu uygulama (örneğin, mesajlaşma, e-posta veya sosyal medya) kullanarak paylaşın. Paylaşılan içerik, görüntüyü ve kaynak bağlantısını (varsa) içerir.

- **Ayrıntılar**
  Görüntü hakkında meta verileri gösteren ayrıntılı bir görünüm açın: *Ad*, *Eklenme tarihi*, *Yazar*, *Lisans*, *Kaynak* ve *Doğrudan bağlantı*

- **Tarayıcıda aç**
  Görüntünün kaynak sayfasını (genellikle [Wikimedia Commons](https://commons.wikimedia.org/) üzerinde) varsayılan tarayıcınızda başlatın. Bu, tam görüntüyü, lisans bilgilerini ve ilgili içeriği görüntülemenizi sağlar.

- **İndir**
  Görüntüyü cihazınızın depolama alanına kaydedin. İndirilen görüntü, cihazınızın varsayılan İndirilenler klasöründe bulunabilir ve çevrimdışı erişilebilir.


<Tabs groupId="operating-systems" queryString="current-os">

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

- **Paylaş** düğmesi, seçilen görüntüyü hızlı bir şekilde paylaşmanızı sağlar.
- **Üç nokta menüsü**, ayrıntıları görüntüleme, kaynağı bir tarayıcıda açma veya görüntüyü indirme gibi ek eylemlere erişim sağlar.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="current-os">

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
### Çevrimiçi Fotoğraflar 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimiçi Fotoğraflar bağlam menüsü Android](@site/static/img/map/images_nearby_1_andr.png) ![Sokak Seviyesi Görüntüleme Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Çevrimiçi Fotoğraflar bağlam menüsü iOS](@site/static/img/map/online_photo_ios.png) ![Sokak Seviyesi Görüntüleme iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Fotoğraflarla Eylemler

Nasıl erişilir:

- Tam ekran modunda [galeriyi](#gallery-menu) açmak için **Tümünü Göster**(Android) / **Tümünü Görüntüle**(iOS) düğmesine dokunun. Orada seçilen konumla ilgili tüm görüntüler arasında kaydırabilirsiniz.

- *Paylaş*, *Ayrıntılar*, *Tarayıcıda aç* ve *İndir* gibi eylemlere erişmek için bir fotoğrafa dokunun.

- Harita üzerinde sokak seviyesi görüntüleri de [göz atabilirsiniz](../map/point-layers-on-map.md#-street-level-imagery).

Harita bağlam menüsünün **Çevrimiçi fotoğraflar** bölümünde, OpenStreetMap'ten `image` veya `wikimedia` ile etiketlenmiş medya dosyalarını sunan [Wikimedia](https://www.wikimedia.org/)'dan nesnelerin fotoğraflarına erişebilirsiniz.

#### Galeri Menüsü 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimiçi Fotoğraflar bağlam menüsü Android](@site/static/img/map/gallery_menu_android.png) ![Sokak Seviyesi Görüntüleme Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Çevrimiçi Fotoğraflar bağlam menüsü iOS](@site/static/img/map/gallery_menu_ios.png) ![Sokak Seviyesi Görüntüleme iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


Galeri 100 adede kadar öğe görüntüleyebilir. Tüm fotoğraflar arasında gezinebilirsiniz ve herhangi bir fotoğrafa kısa dokunuşla ek ayrıntıları (*Ad*, *Tarih*, *Yazar*, *Lisans*) görüntülemek ve çeşitli eylemleri (*Paylaş*, *Ayrıntılar*, *Tarayıcıda aç* ve *İndir* seçenekleri) gerçekleştirmek için açılır.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

![Çevrimiçi Fotoğraflar bağlam menüsü iOS](@site/static/img/map/gallery_menu_ios_3.png)

</TabItem>

</Tabs>



iOS'ta, herhangi bir fotoğrafa uzun dokunmak, *Ayrıntılar*, *Tarayıcıda aç* ve *İndir* gibi eylemlerle ek bir menü açar.

Düğmeler:

- **Paylaş** düğmesi, seçilen öğeyi paylaşmanızı sağlar.
- **Üç nokta** düğmesi, *Ayrıntılar*, *Tarayıcıda aç* ve *İndir* gibi seçeneklerle bir menü açar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimiçi Fotoğraflar bağlam menüsü Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Çevrimiçi Fotoğraflar bağlam menüsü iOS](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>


Ayrıntılar ekranı, seçilen öğenin *Ad*, *Eklenme Tarihi*, *Yazar*, *Lisans*, *Kaynak* ve *Bağlantı* gibi bilgilerini sağlar.

-->