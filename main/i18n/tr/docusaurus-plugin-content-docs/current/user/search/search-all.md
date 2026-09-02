---
source-hash: 425f511859172593fe5402cce5c44974144e585dac7b77bd26c1c5e68a22a8f0
sidebar_position: 1
title: Tümünü Ara
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

**Arama**, konumları hızlı bir şekilde bulmak için kullanışlı bir araçtır. Bir konumu adres, koordinatlar, ilgi çekici noktalar (POI) veya önceki aramalarla bulmak için Aramayı kullanabilirsiniz. [Adres Ara](#search-address), tam bir konum elde etmek istediğiniz adresi girmenizi sağlar. [Koordinat](#search-coordinates) araması enlem ve boylam gibi coğrafi koordinatlarla çalışır. [POI](#search-poi) araması ile kafeler, oteller veya benzin istasyonları gibi belirli kategorilerdeki yakındaki yerleri arayabilirsiniz. Arama aracındaki [Keşfet](#search-explore) sekmesi yakındaki popüler yerleri vurgular ve son ziyaret edilen konumlara hızlı erişim sağlar. Arama [Geçmişi](#search-history) geçmiş aramaları kaydeder. Arama özelliği, gezileri planlamayı, bilinmeyen arazide gezinmeyi ve yakındaki POI'leri bulmayı kolaylaştırır.


## Nasıl Kullanılır {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search POI list Android](@site/static/img/search/search_online_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI list iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Aramanıza başlamak için aşağıdaki adımlardan birini uygulamanız gerekir:

- Harita uygulama ekranındaki [Ara düğmesine](../widgets/map-buttons.md#search) dokunun ve sorgunuzu girin.

- Ana *Menü → Ara → arama sorgunuzu girin*.

- Bir rotaya başlamaya hazırlanırken, [*Navigasyon → Hedef belirle → Arama alanı*](../navigation/setup/route-navigation.md#set-target-point) *→ arama sorgusu* üzerine dokunun.  


Önemli bilgi:

- ***OsmAnd ile arama yapmak için indirilmiş çevrimdışı vektör haritaları gereklidir***.

- Başlangıçta, **arama, cihaz ekranının görünür alanındaki haritada bulunan verilere dayanır**, ancak orada hiçbir şey bulunamazsa, OsmAnd arama yarıçapını artırmayı teklif eder.  

### Temel Sorgular {#basic-queries}

***Sorgu listesi*:**

- Tüm mevcut formatlarda koordinatlar.
- Adres:
    - Cadde, Ev Numarası;
    - Şehir, Cadde;
    - Cadde Kesişimleri;
    - Şehir;
    - Tiger verileri;
    - Posta Kodu, Ev Numarası;
    - Posta Kodu, Cadde, Ev Numarası.
- Ek filtrelerle POI'yi ada ve kategoriye göre arayın.
- Ek filtrelerle OSM rotalarını ada ve kategoriye göre arayın.
- En belirgin zirveleri ve volkanları arayın.
- Seyahat rehberi makalelerine göre arayın (ilgili Seyahat rehberleri dosyasının indirilmesi gerekir).
- Favoriler ve Yol Noktalarına göre arayın.
- POI alt kategori adlarına göre simgeleri arayın.
- Parkurlara göre arayın.
- İşletme mekanlarına ve marka adlarına göre arayın.
- Çevrimiçi arama (Nominatim).
- URL araması (Google ve OsmAnd). OsmAnd, `maps.app.goo.gl` adresinden gelen kısa bağlantılar dahil olmak üzere birçok paylaşılan Google Haritalar bağlantısını tanıyabilir.
- Arama Geçmişi.

<!--
***Desteklenen formatlar*:**  

***Etiketler*** bir arama sorgusu olarak kullanılabilir. Bunlar ***bir anahtar ve bir değerden*** oluşur, örneğin:
*addr:street=StreetName*.  
Karışıklığı önlemek için bazen anahtar veya değer tırnak içine alınır: **key="value" veya "key"="value"**. Tırnak işaretleri ve eşittir işareti etiket içeriğinin bir parçası değildir.
-->

### Arama Sonuçlarını Sıralama {#sorting-search-results}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search POI list Android](@site/static/img/search/search_sort_by.webp)

OsmAnd, arama sonuçlarını birkaç kritere göre otomatik olarak sıralar:

1. **Eşleşen sorgular** — Girdiğiniz kelimelerle tam veya kısmi eşleşmeler içeren sonuçlar daha üstte görüntülenir.

2. **İlgililik** — Arama sorgusuyla yakından eşleşen isimli nesneler genellikle sonuçlarda daha üstte gösterilir.

3. **Nesne türü** — Sorguya bağlı olarak, sonuçlar şehirler, caddeler, adresler veya POI'ler gibi farklı nesne türlerini içerebilir.

4. **Mesafe** — Sonuçların benzer eşleşme kriterleri ve nesne türleri olduğunda, kullanıcının mevcut konumuna en yakın sonuçlar önce gösterilir.

5. **Önem** — İyi bilinen simgeler veya sıkça referans verilen yerler, arama sorgusuyla yakından eşleştiğinde sonuçlarda daha üstte görünebilir.

Ayrıca arama sonuçları listesindeki *Sırala* çipini kullanarak arama sonuçlarının sıralama düzenini manuel olarak değiştirebilirsiniz. *Sırala* öğesine dokunun ve aşağıdaki seçeneklerden birini seçin:
- **İlgililik** — Arama sonuçlarını arama sorgusuna göre sıralar.
- **En yakın** — Arama sonuçlarını mesafeye göre sıralar, en yakın sonuçlar önce gösterilir.

</TabItem>

<TabItem value="ios" label="iOS">

OsmAnd, arama sonuçlarını birkaç kritere göre otomatik olarak sıralar:

1. **Eşleşen sorgular** — Girdiğiniz kelimelerle tam veya kısmi eşleşmeler içeren sonuçlar daha üstte görüntülenir.

2. **İlgililik** — Arama sorgusuyla yakından eşleşen isimli nesneler genellikle sonuçlarda daha üstte gösterilir.

3. **Nesne türü** — Sorguya bağlı olarak, sonuçlar şehirler, caddeler, adresler veya POI'ler gibi farklı nesne türlerini içerebilir.

4. **Mesafe** — Sonuçların benzer eşleşme kriterleri ve nesne türleri olduğunda, kullanıcının mevcut konumuna en yakın sonuçlar önce gösterilir.

5. **Önem** — İyi bilinen simgeler veya sıkça referans verilen yerler, arama sorgusuyla yakından eşleştiğinde sonuçlarda daha üstte görünebilir.

***Örneğin***, *postane* arama sorgusu, daha uzak mesafelerde benzer isimlere sahip başka öğeler olsa bile, en yakın postaneleri önce gösterecektir.  

***Mevcut sınırlamalar:***

- Arama sonuçlarının sıralama düzenini değiştirmek için manuel bir ayar yoktur.
- Sıralama işlemi, yukarıda listelenen kriterlere göre OsmAnd tarafından **otomatik olarak yönetilir**.
- Arama sonuçlarının çok geniş olduğu durumlarda, OsmAnd, en yüksek kelime eşleşme doğruluğuna sahip olanları **görüntülenen sonuçları sınırlayabilir**.

</TabItem>

</Tabs>


### Tam Metin Arama {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorite search Android](@site/static/img/search/favorite_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite search iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Bir sorgu girerken görünen noktalar listesinden harita üzerinde gerekli konumu bulabilirsiniz.

1. Arama çubuğuna adı veya adresi yazmaya başlayın.

2. Siz yazdıkça, liste sorguya en yakın noktaları kabaca şu sırayla görüntüler:
    - POI Kategorileri
    - Favoriler, POI, Rotalar ve Yol Noktaları
    - Parkurlar
    - Adresler
    - İndirilecek haritalar

3. Android'de ada göre arama yaparken OsmAnd, arama sonuçlarında temsil edilen türlere göre POI türü çipleri görüntüler. Sonuçları seçilen POI türüne göre filtrelemek için bir çipe dokunun. Birden fazla POI türü seçebilirsiniz. Seçildikten sonra bir çip listenin ilk konumuna taşınır. Bir çipi tekrar seçmek için dokunarak seçimini kaldırabilir ve tam arama sonuçlarına dönebilirsiniz.

4. Bir [marka adı](../search/search-poi.md#how-to-use) girerseniz, liste bu ada göre, en yakın mesafeye göre sıralanmış sonuçlarla başlayacaktır.

5. Arama sonuçları ayrıca bir [Seyahat rehberi makalesi](../plan-route/travel-guides.md#travel-article) içerebilir. Buna dokunmak, harita üzerinde bir konum göstermek yerine doğrudan makaleyi açar.

:::note Adres aramalarındaki TIGER veri sınırlamaları
OsmAnd, ABD adresleri hakkında bilgi sağlamak için ABD haritalarına [**TIGER verilerini**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) entegre etmiştir. TIGER veri kümesi **aralık tabanlıdır** ve kesin ev numaralarını içermez, bu nedenle bazı adresler eksik veya yanlış olabilir.
:::

### Etrafta Ara (Yalnızca Android) {#search-around}

![Search Around](@site/static/img/search/search_around.webp)

Arama, mevcut konumunuzdan önemli ölçüde uzakta açıldığında, *Etrafta ara* çipi aramanın kullanılacağı alanı seçmenize olanak tanır. Çipe dokunun ve aşağıdaki seçeneklerden birini seçin:
- **Harita merkezi** — Haritanın mevcut merkezinin etrafında arama yapar. Bu seçenek varsayılan olarak seçilidir.
- **Konumum** — Mevcut konumunuzun etrafında arama yapar. 

### Haritada Ara {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/poi_overlay_android_new.png) ![Search POI Android](@site/static/img/search/poi_overlay_android_new.webp)

</TabItem>

<TabItem value="ios" label="iOS">  

![Search POI iOS](@site/static/img/search/poi_overlay_ios_new.png) ![Search POI iOS](@site/static/img/search/poi_overlay_ios_new.webp)

</TabItem>

</Tabs>

OsmAnd, cihazınızın ekranındaki bir haritada görüntülenen noktaları aramanıza olanak tanır. Bunu yapmak için:

- Arama aracına ulaşmak için [yollardan birini](#how-to-use) kullanın.
- Arama kutusuna adı veya adresi yazmaya başlayın.
- Arama giriş alanının altında *Haritada göster* düğmesi olan bir kutu görünecektir. Android'de, arama sonuçları ekranının altında *Haritada göster* Kayan Eylem Düğmesi (FAB) görünür.
- Haritaya gitmek için bu düğmeye dokunun.
- Ekranın üst kısmında sorgunuzu yazmaya devam edebilirsiniz.


### Yakınlarda Ara {#search-nearby}

![Search Android](@site/static/img/search/search_all_near_location_andr_new.png)

Belirli bir konumun yakınında aramayı kullanabilirsiniz. Bunu yapmak için, arama menüsündeki listeden gerekli noktayı [seçin](#full-text-search) veya doğrudan harita üzerinde seçin. [Harita bağlam menüsünde](../map/map-context-menu.md#actions), *Eylemler → Yakınlarda ara* seçeneğini seçin.


## Adres Ara {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_address_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Adres Ara**, OpenStreetMap verilerini kullanır. Bu arama türü, hazır sıralanmış bir listeden belirli bir adresin konumunu ve yol tarifini bulmanızı sağlar. Daha fazla bilgiyi [Adres Ara](./search-address.md) makalesinde okuyun.


## Keşfet Ara {#search-explore}

<InfoAndroidOnly/>

![Explore search](@site/static/img/search/explore_search_android.webp)

Arama aracındaki **Keşfet** sekmesi, mevcut konumunuzun yakınındaki yerleri hızlıca keşfetmenize ve son açılan öğelere erişmenize yardımcı olur. İki ana bölüm içerir: [Yakındaki Popüler Yerler](#popular-places-nearby)
 ve [Geçmiş](#history).

### Yakındaki Popüler Yerler {#popular-places-nearby}

**Yakındaki popüler yerler** bölümü, konumunuzun yakınındaki iyi bilinen simgelerin ve çekiciliklerin kaydırılabilir bir listesini görüntüler. Her öğe, yerin adı, kategorisi, mesafe ve yönü ile varsa önizleme görüntüsünü içerebilir. Tam listeyi açmak için *Tümünü göster* veya bu yerleri haritada görüntülemek için *Haritada göster* üzerine dokunun.

Daha fazla ayrıntı için [buraya](../map/popular_places.md#explore-in-search) bakın.

### Geçmiş {#history}

![History section](@site/static/img/search/history_section_android.webp) ![History section](@site/static/img/search/history_section_2_android.webp)

**Geçmiş** bölümü, son geçmiş öğelerinize hızlı erişim sağlar. En fazla 25 en son öğeyi görüntüler ve genişletilebilir veya daraltılabilir. Tam Geçmiş ekranını açmak için *Tümünü görüntüle* öğesine dokunun.

Tam Geçmiş ekranında, geçmiş öğelerinizi aşağıdaki seçenekleri kullanarak sıralayabilir ve filtreleyebilirsiniz:

1. **Sırala**:
- Son — en son eklenen öğeleri önce görüntüler. Bu seçenek seçildiğinde, öğeler Bugün, Geçen hafta ve daha önceki dönemler gibi zamana göre gruplandırılır.
- En yakın — öğeleri mevcut konumunuza olan mesafeye göre sıralar.
- Harita merkezine en yakın — öğeleri haritanın mevcut merkezine olan mesafeye göre sıralar. Mesafeye dayalı sıralama seçeneklerinden biri seçildiğinde, zamana dayalı gruplar görüntülenmez.

2. **Tür** — geçmiş öğeleri şuna göre filtreler:
- Tümü — tüm mevcut geçmiş öğeleri görüntüler.
- Arama — arama geçmişinizdeki öğeleri görüntüler.
- Navigasyon — navigasyon geçmişinizdeki öğeleri görüntüler.

3. **Kategori filtreleri** — geçmiş öğeleri kategoriye göre filtreler. Mevcut kategori filtreleri, Geçmişinizde bulunan öğe türlerine bağlıdır. Örneğin, POI, Parkur, Konum, Favori veya Adres gibi kategorileri görebilirsiniz.

4. **Ayarlar** — Arama geçmişi, Navigasyon geçmişi ve Harita işaretçileri geçmişini etkinleştirmek veya devre dışı bırakmak, geçmişi bir dosya olarak yedeklemek veya tüm geçmişi temizlemek için sağ üst köşedeki dişli simgesine dokunun.

## Arama Geçmişi {#search-history}

![History search](@site/static/img/search/history_search_ios.png)

iOS'ta Arama Geçmişinize Arama aracındaki özel **Geçmiş** sekmesinden erişebilirsiniz. Daha önce bulunan yerleri, adresleri veya sık ziyaret edilen yerleri sorguyu tekrar girmeden tekrar aramanızı sağlar. Daha fazla bilgi için [Arama Geçmişi](./search-history.md) makalesinin iOS bölümüne bakın.


## POI Ara {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_categoties_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**POI Ara**, kategorilere göre sıralanmış bir listedir ve mevcut konumunuzun veya haritadaki seçili bir alanın yakınındaki yerleri ve hizmetleri kolayca bulmanızı sağlar.

- [Özel POI araması](./search-poi.md#customize-poi-search), aramanızı basitleştirmek ve kişiselleştirmek için farklı POI kategorilerini birleştirmenize olanak tanır.  
Örneğin, belirli bir alanda veya bir rotanın belirli bir bölümünde birkaç tür hizmet bulmanız gerekiyorsa.

- OsmAnd, arama sonuçlarına hızlı erişim sağlayan gerçek zamanlı çalışan bir [Çevrimiçi arama](./search-poi.md#online-search) sunar.  
Bölgenin haritaları mevcut olmadığında kullanışlıdır, ancak sürekli ve istikrarlı bir İnternet bağlantısı gereklidir.

- Daha fazla bilgi için [POI Ara](./search-poi.md) makalesini okuyun.


## Koordinat Ara {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Koordinat araması doğru bir konum sağlar. Örneğin, bir harita, GPS cihazı veya çevrimiçi hizmetler gibi diğer kaynaklardan elde edilen kesin koordinatları girebilirsiniz; bu, tam adresi olmayan yerler söz konusu olduğunda özellikle kullanışlıdır. Daha fazla bilgi için [Koordinat Ara](./search-coordinates.md) makalesine bakın.


## İlgili Makaleler {#related-articles}

- [Adres Ara](./search-address.md)
- [Arama Geçmişi](./search-history.md)
- [POI Ara](./search-poi.md)
- [Koordinat Ara](./search-coordinates.md)
- [Popüler Yerler](../map/popular_places.md)