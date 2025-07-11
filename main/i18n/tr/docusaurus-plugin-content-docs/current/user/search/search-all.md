---
source-hash: b39da87cb283fc3373cd7fc8ea9c535845d2da42231bb2b94d76bc577ea35ed4
sidebar_position: 1
title:  Tümünü Ara
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

**Arama**, konumları hızlı bir şekilde bulmak için kullanışlı bir araçtır. Bir konumu adres, koordinatlar, ilgi çekici noktalar (POI) veya önceki aramalarla bulmak için Aramayı kullanabilirsiniz. [Adres Ara](#search-address) tam bir konum elde etmek istediğiniz adresi girmenizi sağlar. [Koordinat](#search-coordinates) araması enlem ve boylam gibi coğrafi koordinatlarla çalışır. [POI](#search-poi) aramasıyla kafeler, oteller veya benzin istasyonları gibi belirli kategorilerdeki yakındaki yerleri arayabilirsiniz. Arama [Geçmişi](#search-history), daha önce bulunan yerlere hızlı erişim için geçmiş aramaları kaydeder. Arama özelliği, gezileri planlamayı, bilinmeyen arazide gezinmeyi ve yakındaki İÇN'leri bulmayı kolaylaştırır.


## Nasıl Kullanılır {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI listesi ara Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI listesi ara iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Aramanıza başlamak için adımlardan birini izlemeniz gerekir:

- Harita uygulama ekranındaki [Ara düğmesine](../widgets/map-buttons.md#search) dokunun ve sorgunuzu girin.

- Ana *Menü → Ara → arama sorgunuzu girin* bölümüne gidin.

- Bir rota başlatmaya hazırlanırken, [*Navigasyon → Hedef belirle → Arama alanı*](../navigation/setup/route-navigation.md#set-target-point) *→ arama sorgusu*'na dokunun.  


Önemli bilgiler:

- ***OsmAnd ile arama yapmak için indirilmiş çevrimdışı vektör haritaları gereklidir***.

- Başlangıçta, **arama, cihaz ekranının görünür alanındaki haritada bulunan verilere dayanır**, ancak orada hiçbir şey bulunamazsa, OsmAnd arama yarıçapını artırmayı teklif eder.  

### Temel Sorgular {#basic-queries}

***Sorgu listesi*:**

- Tüm mevcut formatlardaki koordinatlar.
- Adres:
    - Cadde, Ev Numarası;
    - Şehir, Cadde;
    - Cadde Kesişimleri;
    - Şehir;
    - Tiger verileri;
    - Posta Kodu, Ev Numarası;
    - Posta Kodu, Cadde, Ev Numarası.
- Ek filtrelerle POI'yi ada ve kategoriye göre ara.
- Ek filtrelerle OSM rotalarını ada ve kategoriye göre ara.
- En belirgin zirvelere ve volkanlara göre ara.
- Favorilere ve Yol Noktalarına göre ara.
- POI alt kategori adlarına göre simgeleri ara.
- İzlere göre ara.
- İş yerlerine ve marka adlarına göre ara.
- Çevrimiçi arama (Nominatim).
- URL araması (Google ve OsmAnd).
- Arama Geçmişi.

<!--
***Desteklenen formatlar*:**  

***Etiketler*** bir arama sorgusu olarak kullanılabilir. Bunlar ***bir anahtar ve bir değerden*** oluşur, örneğin:
*addr:street=SokakAdı*.  
Karışıklığı önlemek için bazen anahtar veya değer tırnak içine alınır: **key="value" veya "key"="value"**. Tırnak işaretleri ve eşittir işareti etiket içeriğinin bir parçası değildir.
-->

### Arama Sonuçlarını Sıralama {#sorting-search-results}

OsmAnd, arama sonuçlarını otomatik olarak üç ana kritere göre sıralar:

1. **Sorguları Eşleştirme** — Girdiğiniz kelimelerle tam veya kısmi eşleşmeler içeren sonuçlar daha üstte görüntülenir.

2. **Nesne Türü** - Ada göre sıralarken, sonuçları görüntülerken şehirler ve caddeler POI'lere göre önceliklidir.

3. **Mesafe** - Sonuçlar benzer eşleşme kriterlerine ve nesne türlerine sahip olduğunda, kullanıcının mevcut konumuna en yakın sonuçlar önce gösterilir.

***Örneğin***, bir arama sorgusu *postane* daha uzak mesafelerde benzer isimlere sahip başka öğeler olsa bile, en yakın postaneleri önce gösterecektir.  

***Mevcut sınırlamalar:***

- Arama sonuçlarının sıralama düzenini değiştirmek için manuel bir ayar yoktur.
- Sıralama süreci, yukarıda listelenen kriterlere göre OsmAnd tarafından **otomatik olarak yönetilir**.
- Arama sonuçlarının çok geniş olduğu durumlarda, OsmAnd **görüntülenen sonuçları** en yüksek kelime eşleşme doğruluğuna sahip olanlarla sınırlayabilir.


### Tam Metin Arama {#full-text-search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favori arama Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favori arama iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Bir sorgu girerken görünen noktalar listesinden harita üzerinde gerekli konumu bulabilirsiniz.

1. Arama çubuğuna adı veya adresi yazmaya başlayın.

2. Siz yazdıkça, liste sorguya en yakın noktaları kabaca şu sırayla görüntüler:
    - POI Kategorileri
    - Favoriler, POI, Rotalar ve Yol Noktaları
    - İzler
    - Adresler
    - İndirilecek Haritalar

3. Bir [marka adı](../search/search-poi.md#how-to-use) girerseniz, liste bu ada göre en yakın mesafeye göre sıralanmış sonuçlarla başlayacaktır.

:::note Adres aramalarında TIGER veri sınırlamaları
OsmAnd, ABD adresleri hakkında bilgi sağlamak için ABD haritalarına [**TIGER verilerini**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) entegre etmiştir. TIGER veri kümesi **aralık tabanlıdır** ve kesin ev numaralarını içermez, bu nedenle bazı adresler eksik veya yanlış olabilir.
:::


### Haritada Ara {#search-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI Ara Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![POI Ara iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd, cihazınızın ekranında bir harita üzerinde görüntülenen noktaları aramanıza olanak tanır. Bunu yapmak için:

- Arama aracına ulaşmak için [yollardan birini](#how-to-use) kullanın.
- Arama kutusuna adı veya adresi yazmaya başlayın.
- Arama giriş alanının altında *Haritada göster* düğmesi olan bir kutu görünecektir.
- Haritaya gitmek için bu düğmeye dokunun.
- Sorgunuzu ekranın üst kısmına yazmaya devam edebilirsiniz.


### Yakındakileri Ara {#search-nearby}

![Android Ara](@site/static/img/search/search_all_near_location_andr.png)

Belirli bir konumun yakınında aramayı kullanabilirsiniz. Bunu yapmak için, arama menüsündeki listeden gerekli noktayı [tam metin araması](#full-text-search) veya doğrudan harita üzerinde seçin. [Harita bağlam menüsünde](../map/map-context-menu.md#actions), *Eylemler → Yakındakileri ara*'yı seçin.


## Adres Ara {#search-address}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Android Ara](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS Ara](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Adres Ara** OpenStreetMap verilerini kullanır. Bu arama türü, hazır sıralanmış bir listeden belirli bir adresin konumunu ve yönünü bulmanızı sağlar. Daha fazla bilgiyi [Adres Ara](./search-address.md) makalesinde okuyun.


## Arama Geçmişi {#search-history}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Geçmiş arama](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş arama](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Daha önce bulunan yerleri, adresleri veya sık ziyaret edilen yerleri sorguyu tekrar girmeden tekrar aramak için **Arama Geçmişi**'ni kullanabilirsiniz. Daha fazla ayrıntı [Arama Geçmişi](./search-history.md) makalesinde bulunabilir.


## POI Ara {#search-poi}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI Ara Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Ara iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**POI Ara**, mevcut konumunuza veya harita üzerinde seçili bir alana yakın yerleri ve hizmetleri kolayca bulabileceğiniz, kategoriye göre sıralanmış bir listedir.

- [Özel POI araması](./search-poi.md#custom-poi-search), aramanızı basitleştirmek ve kişiselleştirmek için farklı POI kategorilerini birleştirmenize olanak tanır.  
Örneğin, belirli bir alanda veya bir rotanın belirli bir bölümünde birkaç hizmet türü bulmanız gerekiyorsa.

- OsmAnd, arama sonuçlarına hızlı erişim sağlayan gerçek zamanlı çalışan bir [Çevrimiçi arama](./search-poi.md#online-search) sunar.  
Bölgenin haritaları mevcut olmadığında kullanışlıdır, ancak sürekli ve istikrarlı bir İnternet bağlantısı gereklidir.

- Daha fazla bilgi için [POI Ara](./search-poi.md) makalesini okuyun.


## Koordinat Ara {#search-coordinates}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Koordinat Ara Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinat Ara iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Koordinat araması doğru bir konum sağlar. Örneğin, bir harita, GPS cihazı veya çevrimiçi hizmetler gibi diğer kaynaklardan elde edilen kesin koordinatları girebilirsiniz; bu, tam adresi olmayan yerler söz konusu olduğunda özellikle kullanışlıdır. Daha fazla bilgi için [Koordinat Ara](./search-coordinates.md) makalesine bakın.


## İlgili Makaleler {#related-articles}

- [Adres Ara](./search-address.md)
- [Arama Geçmişi](./search-history.md)
- [POI Ara](./search-poi.md)
- [Koordinat Ara](./search-coordinates.md)

> *Son güncelleme: Nisan 2025*