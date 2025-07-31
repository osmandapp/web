---
source-hash: a37206b0786e0c2a77928c36df15a5b99385e8522ae259e744dfd7222696eb76
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



<InfoIncompleteArticle/>


## Genel Bakış {#overview}

**Arama**, konumları hızlı bir şekilde bulmak için kullanışlı bir araçtır. Bir konumu adres, koordinatlar, ilgi çekici noktalar (POI) veya önceki aramalarla bulmak için Aramayı kullanabilirsiniz. [Adres Ara](#search-address) özelliği, tam bir konum elde etmek istediğiniz adresi girmenizi sağlar. [Koordinat Ara](#search-coordinates) enlem ve boylam gibi coğrafi koordinatlarla çalışır. [POI Ara](#search-poi) ile kafeler, oteller veya benzin istasyonları gibi belirli kategorilerdeki yakındaki yerleri arayabilirsiniz. Arama [Geçmişi](#search-history), daha önce bulunan yerlere hızlı erişim için geçmiş aramaları kaydeder. Arama özelliği, seyahatleri planlamayı, bilinmeyen arazide gezinmeyi ve yakındaki POI'leri bulmayı kolaylaştırır.


## Nasıl Kullanılır {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI listesi ara Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI listesi ara iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Aramanıza başlamak için aşağıdaki adımlardan birini uygulamanız gerekir:

- Harita uygulama ekranındaki [Ara düğmesine](../widgets/map-buttons.md#search) dokunun ve sorgunuzu girin.

- Ana *Menü → Ara → arama sorgunuzu girin*.

- Bir rota başlatmaya hazırlanırken, [*Navigasyon → Hedef belirle → Arama alanı*](../navigation/setup/route-navigation.md#set-target-point) *→ arama sorgusu* öğesine dokunun.  


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
- Ek filtrelerle ada ve kategoriye göre POI arama.
- Ek filtrelerle ada ve kategoriye göre OSM rotaları arama.
- En belirgin zirvelere ve volkanlara göre arama.
- Favoriler ve Ara Noktalarına göre arama.
- POI alt kategori adlarına göre simgeleri arama.
- Parkurlara göre arama.
- İşletme mekanlarına ve marka adlarına göre arama.
- Çevrimiçi arama (Nominatim).
- URL arama (Google ve OsmAnd).
- Arama Geçmişi.

<!--
***Desteklenen formatlar*:**  

***Etiketler*** arama sorgusu olarak kullanılabilir. Bunlar ***bir anahtar ve bir değerden*** oluşur, örneğin:
*addr:street=StreetName*.  
Karışıklığı önlemek için bazen anahtar veya değer tırnak içine alınır: **key="value" veya "key"="value"**. Tırnak işaretleri ve eşittir işareti etiketin içeriğinin bir parçası değildir.
-->

### Arama Sonuçlarını Sıralama {#sorting-search-results}

OsmAnd, arama sonuçlarını otomatik olarak üç ana kritere göre sıralar:

1. **Sorguları Eşleştirme** — Girdiğiniz kelimelerle tam veya kısmi eşleşmeler içeren sonuçlar daha üstte görüntülenir.

2. **Nesne türü** - Ada göre sıralarken, sonuçları görüntülerken şehirler ve caddeler POI'lere göre önceliklidir.

3. **Mesafe** - Sonuçlar benzer eşleşme kriterlerine ve nesne türlerine sahip olduğunda, kullanıcının mevcut konumuna en yakın sonuçlar önce gösterilir.

***Örneğin***, *postane* arama sorgusu, daha uzak mesafelerde benzer isimlere sahip başka öğeler olsa bile, en yakın postaneleri önce gösterecektir.  

***Mevcut sınırlamalar:***

- Arama sonuçlarının sıralama düzenini değiştirmek için manuel bir ayar yoktur.
- Sıralama süreci, yukarıda listelenen kriterlere göre OsmAnd tarafından **otomatik olarak yönetilir**.
- Arama sonuçlarının çok geniş olduğu durumlarda, OsmAnd **görüntülenen sonuçları** en yüksek kelime eşleşme doğruluğuna sahip olanlarla sınırlayabilir.


### Tam Metin Arama {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favori arama Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favori arama iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Bir sorgu girerken görünen noktalar listesinden haritada gerekli konumu bulabilirsiniz.

1. Arama çubuğuna adı veya adresi yazmaya başlayın.

2. Yazdıkça, liste sorguya en yakın noktaları yaklaşık olarak şu sırayla görüntüler:
    - POI Kategorileri
    - Favoriler, POI, Rotalar ve Ara Noktaları
    - Parkurlar
    - Adresler
    - İndirilecek Haritalar

3. Bir [marka adı](../search/search-poi.md#how-to-use) girerseniz, liste bu adla en yakın mesafeye göre sıralanmış sonuçlarla başlayacaktır.

:::note Adres aramalarındaki TIGER veri sınırlamaları
OsmAnd, ABD adresleri hakkında bilgi sağlamak için ABD haritalarına [**TIGER verilerini**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) entegre etmiştir. TIGER veri kümesi **aralık tabanlıdır** ve kesin ev numaralarını içermez, bu nedenle bazı adresler eksik veya yanlış olabilir.
:::


### Haritada Ara {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI ara Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![POI ara iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd, cihazınızın ekranında bir haritada görüntülenen noktaları aramanıza olanak tanır. Bunu yapmak için:

- Arama aracına ulaşmak için [yollardan birini](#how-to-use) kullanın.
- Arama kutusuna adı veya adresi yazmaya başlayın.
- Arama giriş alanının altında *Haritada göster* düğmesi olan bir kutu görünecektir.
- Haritaya gitmek için bu düğmeye dokunun.
- Sorgunuzu ekranın üst kısmına yazmaya devam edebilirsiniz.


### Yakındakileri Ara {#search-nearby}

![Android'de ara](@site/static/img/search/search_all_near_location_andr.png)

Belirli bir konumun yakınında aramayı kullanabilirsiniz. Bunu yapmak için, arama menüsündeki listeden gerekli noktayı [tam metin arama](#full-text-search) ile seçin veya doğrudan harita üzerinde seçin. [Harita bağlam menüsünde](../map/map-context-menu.md#actions), *Eylemler → Yakındakileri ara* öğesini seçin.


## Adres Ara {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de ara](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta ara](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Adres Ara** OpenStreetMap verilerini kullanır. Bu arama türü, hazır sıralanmış bir listeden belirli bir adresin konumunu ve yönünü bulmanızı sağlar. Daha fazla bilgiyi [Adres Ara](./search-address.md) makalesinde okuyun.


## Arama Geçmişi {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geçmiş arama](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş arama](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Daha önce bulunan yerleri, adresleri veya sık ziyaret edilen yerleri sorguyu tekrar girmeden tekrar aramak için **Arama Geçmişi**'ni kullanabilirsiniz. Daha fazla ayrıntı [Arama Geçmişi](./search-history.md) makalesinde bulunabilir.


## POI Ara {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI ara Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI ara iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**POI Ara**, mevcut konumunuzun veya haritada seçilen bir alanın yakınındaki yerleri ve hizmetleri kolayca bulabileceğiniz kategoriye göre sıralanmış bir listedir.

- [Özel POI araması](./search-poi.md#custom-poi-search), aramanızı basitleştirmek ve kişiselleştirmek için farklı POI kategorilerini birleştirmenizi sağlar.  
Örneğin, belirli bir alanda veya bir rotanın belirli bir bölümünde birkaç tür hizmet bulmanız gerekiyorsa.

- OsmAnd, gerçek zamanlı çalışan ve arama sonuçlarına hızlı erişim sağlayan bir [Çevrimiçi arama](./search-poi.md#online-search) sunar.  
Bölgenin haritaları mevcut olmadığında kullanışlıdır, ancak sürekli ve kararlı bir İnternet bağlantısı gereklidir.

- Daha fazla bilgi için [POI Ara](./search-poi.md) makalesini okuyun.


## Koordinat Ara {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Koordinat ara Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinat ara iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Koordinat araması doğru bir konum sağlar. Örneğin, bir harita, GPS cihazı veya çevrimiçi hizmetler gibi diğer kaynaklardan elde edilen kesin koordinatları girebilirsiniz, bu özellikle kesin bir adresi olmayan yerler için kullanışlıdır. Daha fazla bilgi için [Koordinat Ara](./search-coordinates.md) makalesine bakın.


## İlgili Makaleler {#related-articles}

- [Adres Ara](./search-address.md)
- [Arama Geçmişi](./search-history.md)
- [POI Ara](./search-poi.md)
- [Koordinat Ara](./search-coordinates.md)

> *Son güncelleme: Nisan 2025*