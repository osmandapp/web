---
source-hash: 10cbeafd902c636e09520ab4df9f764d8c01529060c7ee38d4e0bf4ae741b6a2
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

**Arama**, konumları hızlı bir şekilde bulmak için kullanışlı bir araçtır. Bir konumu adres, koordinatlar, ilgi çekici noktalar (POI) veya önceki aramalarla bulmak için Aramayı kullanabilirsiniz. [Adres Ara](#search-address), tam bir konum elde etmek istediğiniz adresi girmenizi sağlar. [Koordinat](#search-coordinates) araması enlem ve boylam gibi coğrafi koordinatlarla çalışır. [POI](#search-poi) araması ile kafeler, oteller veya benzin istasyonları gibi belirli kategorilerdeki yakındaki yerleri arayabilirsiniz. Arama aracındaki [Keşfet](#search-explore) sekmesi yakındaki popüler yerleri vurgular ve son ziyaret edilen konumlara hızlı erişim sağlar. Arama özelliği, gezileri planlamayı, bilinmeyen arazide gezinmeyi ve yakındaki POI'leri bulmayı kolaylaştırır.


## Nasıl Kullanılır {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de POI listesi arama](@site/static/img/search/search_online_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta POI listesi arama](@site/static/img/search/poi_list_1_ios.png)  

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

![Android'de arama sonuçlarını sıralama](@site/static/img/search/search_sort_by.webp)

OsmAnd, arama sonuçlarını birkaç kritere göre otomatik olarak sıralar:

1. **Eşleşen sorgular** — Girdiğiniz kelimelerle tam veya kısmi eşleşmeler içeren sonuçlar daha üstte görüntülenir.

2. **İlgililik** — Arama sorgusuyla yakından eşleşen isimli nesneler genellikle sonuçlarda daha üstte gösterilir.

3. **Nesne türü** — Sorguya bağlı olarak, sonuçlar şehirler, caddeler, adresler veya POI'ler gibi farklı nesne türlerini içerebilir.

4. **Mesafe** — Sonuçların benzer eşleşme kriterleri ve nesne türleri olduğunda, kullanıcının mevcut konumuna en yakın sonuçlar önce gösterilir.

5. **Önem** — İyi bilinen simgeler veya sıkça referans verilen yerler, arama sorgusuyla yakından eşleştiğinde sonuçlarda daha üstte görünebilir.

Ayrıca arama sonuçları listesinin üstündeki sıralama çipini kullanarak arama sonuçlarının sıralama düzenini manuel olarak değiştirebilirsiniz. Çip seçili seçeneği gösterir. Çipe dokunun ve *Sırala* menüsünde aşağıdakilerden birini seçin:
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

![Android'de favori arama](@site/static/img/search/favorite_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta favori arama](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Bir sorgu girerken görünen noktalar listesinden harita üzerinde gerekli konumu bulabilirsiniz.

1. Arama çubuğuna adı veya adresi yazmaya başlayın.

2. Siz yazdıkça, liste sorgunuzla eşleşen sonuçları görüntüler. Sonuçlar [Arama Sonuçlarını Sıralama](#sorting-search-results) bölümünde açıklandığı gibi sıralanır.

3. Android'de ada göre arama yaparken OsmAnd, arama sonuçlarında temsil edilen türlere göre POI türü çipleri görüntüler. Sonuçları seçilen POI türüne göre filtrelemek için bir çipe dokunun. Birden fazla POI türü seçebilirsiniz. Seçildikten sonra bir çip listenin ilk konumuna taşınır. Bir çipi tekrar seçmek için dokunarak seçimini kaldırabilir ve tam arama sonuçlarına dönebilirsiniz.

4. Bir [marka adı](../search/search-poi.md#how-to-use) girerseniz, liste bu ada göre, en yakın mesafeye göre sıralanmış sonuçlarla başlayacaktır.

5. Arama sonuçları ayrıca bir [Seyahat rehberi makalesi](../plan-route/travel-guides.md#travel-article) içerebilir. Buna dokunmak, harita üzerinde bir konum göstermek yerine doğrudan makaleyi açar.

:::note Adres aramalarındaki TIGER veri sınırlamaları
OsmAnd, ABD adresleri hakkında bilgi sağlamak için ABD haritalarına [**TIGER verilerini**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) entegre etmiştir. TIGER veri kümesi **aralık tabanlıdır** ve kesin ev numaralarını içermez, bu nedenle bazı adresler eksik veya yanlış olabilir.
:::

### Uzamsal Arama {#spatial-search}

<InfoAndroidOnly/>

![Uzamsal arama](@site/static/img/search/spatial_search.webp)

Uzamsal Arama, yalnızca adların sorgunuzla ne kadar eşleştiğini değil, nesnelerin birbirine göre nerede bulunduğunu da dikkate alan deneysel bir arama motorudur. OsmAnd'ın, bir yer adı ve bir POI kategorisi gibi birkaç bölümü birleştiren sorguları doğru yorumlamasına yardımcı olur.

Uzamsal Arama varsayılan olarak devre dışıdır. Etkinleştirmek için [OsmAnd Geliştirme eklentisi](../plugins/development.md#internal-algorithms) ayarlarına gidin ve *Uzamsal metin aramasını kullan* seçeneğini açın. Etkinleştirildiğinde, Uzamsal Arama POI ve adres sorguları için standart arama motorunun yerini alır.

Uzamsal Arama ile şunları yapabilirsiniz:
- Belirli bir yerdeki POI'yi arayın. Tek bir sorguda bir kategori ve bir yer adı girin, örneğin Hotel Berlin. Yer adı arama alanı olarak kullanılır ve kategori bunun içinde aranır.
- İki koşulla eşleşen yerleri arayın. İkisini de karşılayan yerleri bulmak için iki kategori veya bir kategori ile bir özellik girin, örneğin Fuel Diesel veya Cafe Vegan. Fuel McDonald's gibi bir sorgu, McDonald's yakınında bulunan akaryakıt istasyonlarını bulur. Kelimelerin sırası önemlidir. İlk kelime neyi aradığınızı, ikincisi ise onun neyin yakınında olması gerektiğini belirler. Örneğin, McDonald’s Fuel akaryakıt istasyonlarının yakınında bulunan McDonald’s restoranlarını bulur.
- Bulunan bir yerin çevresinde arayın. Bir kategori ve bir yer adı girin, örneğin *Hotel Berlin*, ardından arama sonuçlarının üstündeki *Hotel near Berlin* öğesine dokunun. Bu yerin adı [Etrafta ara](#search-around) çipine eklenir.
- Sorgularınızda cadde adlarının farklı biçimlerini ve çevrilmiş kategori adlarını kullanın.
- Eczane, otopark veya restoran gibi popüler POI kategorilerine göre arama yaparken daha hızlı sonuç alın.

### Etrafta Ara {#search-around}

<InfoAndroidOnly/>

![Etrafta ara](@site/static/img/search/search_around_berlin.webp)

Harita merkezi konumunuzdan 50 m'den fazla uzaktaysa ve harita konumunuzu takip etmiyorsa, arama harita merkezi çevresinde yapılır ve arama alanında *Arama N km uzakta* yazar. Harita merkezi konumunuzdan 70 km'den fazla uzaktaysa, sıralama çipinin yanında arama alanını gösteren bir çip görünür. Çip seçili seçeneği gösterir. Çipe dokunun ve *Etrafta ara* menüsünde aşağıdakilerden birini seçin:
- **Harita merkezi** — Haritanın mevcut merkezinin etrafında arama yapar. Bu seçenek varsayılan olarak seçilidir.
- **Konumum** — Mevcut konumunuzun etrafında arama yapar.
- **Yer adı** — [Uzamsal Arama](#spatial-search) ile bulduğunuz bir yerin etrafında arama yapar. Örneğin, *Hotel Berlin* girin, ardından arama sonuçlarının üstündeki *Hotel near Berlin* öğesine dokunun. Çipte *Berlin* görünür ve Berlin çevresindeki oteller gösterilir. Bu seçenek yalnızca Uzamsal Arama etkinleştirildiğinde kullanılabilir. 

### Haritada Ara {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de POI arama](@site/static/img/search/poi_overlay_android_new.png) ![Android'de POI arama](@site/static/img/search/poi_overlay_android_new.webp)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS'ta POI arama](@site/static/img/search/poi_overlay_ios_new.png) ![iOS'ta POI arama](@site/static/img/search/poi_overlay_ios_new.webp)

</TabItem>

</Tabs>

OsmAnd, cihazınızın ekranındaki bir haritada görüntülenen noktaları aramanıza olanak tanır. Bunu yapmak için:

- Arama aracına ulaşmak için [yollardan birini](#how-to-use) kullanın.
- Arama kutusuna adı veya adresi yazmaya başlayın.
- Arama giriş alanının altında *Haritada göster* düğmesi olan bir kutu görünecektir. Android'de, arama sonuçları ekranının altında *Haritada göster* Kayan Eylem Düğmesi (FAB) görünür.
- Haritaya gitmek için bu düğmeye dokunun.
- Ekranın üst kısmında sorgunuzu yazmaya devam edebilirsiniz.


### Yakınlarda Ara {#search-nearby}

![Android'de arama](@site/static/img/search/search_all_near_location_andr_new.png)

Belirli bir konumun yakınında aramayı kullanabilirsiniz. Bunu yapmak için, arama menüsündeki listeden gerekli noktayı [seçin](#full-text-search) veya doğrudan harita üzerinde seçin. [Harita bağlam menüsünde](../map/map-context-menu.md#actions), *Eylemler → Yakınlarda ara* seçeneğini seçin.


## Adres Ara {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de arama](@site/static/img/search/search_address_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta arama](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Adres Ara**, OpenStreetMap verilerini kullanır. Bu arama türü, hazır sıralanmış bir listeden belirli bir adresin konumunu ve yol tarifini bulmanızı sağlar. Daha fazla bilgiyi [Adres Ara](./search-address.md) makalesinde okuyun.


## Keşfet Ara {#search-explore}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Keşfet araması](@site/static/img/search/explore_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş araması](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Android'de, Arama aracındaki **Keşfet** sekmesi, mevcut konumunuzun yakınındaki yerleri hızlıca keşfetmenize ve geçmişinize erişmenize yardımcı olur. iOS'ta **Geçmiş** sekmesi, daha önce bulunan yerleri, adresleri veya sık ziyaret edilen yerleri sorguyu tekrar girmeden tekrar aramanızı sağlar. Daha fazla bilgi için [Keşfet Ara](./search-history.md) makalesine bakın.


## POI Ara {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de POI arama](@site/static/img/search/search_poi_categoties_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta POI arama](@site/static/img/search/search_poi_categoties_1_ios.png)

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

![Android'de koordinat arama](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta koordinat arama](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Koordinat araması doğru bir konum sağlar. Örneğin, bir harita, GPS cihazı veya çevrimiçi hizmetler gibi diğer kaynaklardan elde edilen kesin koordinatları girebilirsiniz; bu, tam adresi olmayan yerler söz konusu olduğunda özellikle kullanışlıdır. Daha fazla bilgi için [Koordinat Ara](./search-coordinates.md) makalesine bakın.


## İlgili Makaleler {#related-articles}

- [Adres Ara](./search-address.md)
- [Keşfet Ara](./search-history.md)
- [POI Ara](./search-poi.md)
- [Koordinat Ara](./search-coordinates.md)
- [Popüler Yerler](../map/popular_places.md)