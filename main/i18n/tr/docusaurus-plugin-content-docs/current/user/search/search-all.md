---
source-hash: 69c1d2be2f285262958a4bf0b6a3a213aea2bb370e81719084db8dc1847bb1c0
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

**Arama**, konumları hızlı bir şekilde bulmak için kullanışlı bir araçtır. Bir konumu adres, koordinatlar, ilgi çekici noktalar (POI) veya önceki aramalarla bulmak için Aramayı kullanabilirsiniz. [Adres Ara](#search-address), tam bir konum elde etmek istediğiniz adresi girmenizi sağlar. [Koordinat](#search-coordinates) araması enlem ve boylam gibi coğrafi koordinatlarla çalışır. [POI](#search-poi) araması ile kafeler, oteller veya benzin istasyonları gibi belirli kategorilerdeki yakındaki yerleri arayabilirsiniz. Arama aracındaki [Keşfet](#search-explore) sekmesi yakındaki popüler yerleri vurgular ve son ziyaret edilen konumlara hızlı erişim sağlar. Arama [Geçmişi](#search-history-ios), geçmiş aramaları kaydeder. Arama özelliği, gezileri planlamayı, bilinmeyen arazide gezinmeyi ve yakındaki POI'leri bulmayı kolaylaştırır.


## Nasıl Kullanılır {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android POI arama listesi](@site/static/img/search/search_online_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS POI arama listesi](@site/static/img/search/poi_list_1_ios.png)  

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
- Favoriler ve Yol Noktalarına göre arayın.
- POI alt kategori adlarına göre simgeleri arayın.
- Parkurlara göre arayın.
- İşletme mekanlarına ve marka adlarına göre arayın.
- Çevrimiçi arama (Nominatim).
- URL araması (Google ve OsmAnd).
- Arama Geçmişi.

<!--
***Desteklenen formatlar*:**  

***Etiketler*** bir arama sorgusu olarak kullanılabilir. Bunlar ***bir anahtar ve bir değerden*** oluşur, örneğin:
*addr:street=StreetName*.  
Karışıklığı önlemek için bazen anahtar veya değer tırnak içine alınır: **key="value" veya "key"="value"**. Tırnak işaretleri ve eşittir işareti etiket içeriğinin bir parçası değildir.
-->

### Arama Sonuçlarını Sıralama {#sorting-search-results}

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


### Tam Metin Arama {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

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
    - Parkurlar
    - Adresler
    - İndirilecek haritalar

3. Bir [marka adı](../search/search-poi.md#how-to-use) girerseniz, liste bu ada göre, en yakın mesafeye göre sıralanmış sonuçlarla başlayacaktır.

:::note Adres aramalarındaki TIGER veri sınırlamaları
OsmAnd, ABD adresleri hakkında bilgi sağlamak için ABD haritalarına [**TIGER verilerini**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) entegre etmiştir. TIGER veri kümesi **aralık tabanlıdır** ve kesin ev numaralarını içermez, bu nedenle bazı adresler eksik veya yanlış olabilir.
:::


### Haritada Ara {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android POI ara](@site/static/img/search/poi_overlay_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS POI ara](@site/static/img/search/poi_overlay_ios_new.png)

</TabItem>

</Tabs>

OsmAnd, cihazınızın ekranındaki bir haritada görüntülenen noktaları aramanıza olanak tanır. Bunu yapmak için:

- Arama aracına ulaşmak için [yollardan birini](#how-to-use) kullanın.
- Arama kutusuna adı veya adresi yazmaya başlayın.
- Arama giriş alanının altında *Haritada göster* düğmesi olan bir kutu görünecektir.
- Haritaya gitmek için bu düğmeye dokunun.
- Ekranın üst kısmında sorgunuzu yazmaya devam edebilirsiniz.


### Yakınlarda Ara {#search-nearby}

![Android ara](@site/static/img/search/search_all_near_location_andr_new.png)

Belirli bir konumun yakınında aramayı kullanabilirsiniz. Bunu yapmak için, arama menüsündeki listeden gerekli noktayı [seçin](#full-text-search) veya doğrudan harita üzerinde seçin. [Harita bağlam menüsünde](../map/map-context-menu.md#actions), *Eylemler → Yakınlarda ara* seçeneğini seçin.


## Adres Ara {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android ara](@site/static/img/search/search_address_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS ara](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Adres Ara**, OpenStreetMap verilerini kullanır. Bu arama türü, hazır sıralanmış bir listeden belirli bir adresin konumunu ve yol tarifini bulmanızı sağlar. Daha fazla bilgiyi [Adres Ara](./search-address.md) makalesinde okuyun.


## Keşfet Ara {#search-explore}

<InfoAndroidOnly/>

![Keşfet arama](@site/static/img/search/explore_search_android.png)

Arama aracındaki **Keşfet** sekmesi, mevcut konumunuzun yakınındaki yerleri hızlıca keşfetmenize ve son açılan öğelere erişmenize yardımcı olur. İki ana bölüm içerir:  
- Yakındaki popüler yerler – konumunuzun yakınındaki iyi bilinen simgeler ve çekiciliklerin kaydırılabilir bir listesi. Her öğe, yerin adı, kategorisi, mesafe ve yönü ile varsa önizleme görüntüsünü içerebilir. Tam listeyi açmak için *Tümünü göster* veya bu yerleri haritada görüntülemek için *Haritada göster* üzerine dokunun.
- Son ziyaret edilenler – son açtığınız yerler, parkurlar veya diğer nesnelerin bir listesi. Bu, daha önce görüntülediğiniz konumlara hızlıca dönmenizi sağlar.

Daha fazla ayrıntı için [buraya](../map/popular_places.md#explore-in-search) bakın.

## Arama Geçmişi (iOS) {#search-history-ios}

![Geçmiş arama](@site/static/img/search/history_search_ios.png)

Daha önce bulunan yerleri, adresleri veya sık ziyaret edilen yerleri sorguyu tekrar girmeden tekrar aramak için **Arama Geçmişi**'ni kullanabilirsiniz. Daha fazla ayrıntıyı [Arama Geçmişi](./search-history.md) makalesinde bulabilirsiniz.


## POI Ara {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android POI ara](@site/static/img/search/search_poi_categoties_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS POI ara](@site/static/img/search/search_poi_categoties_1_ios.png)

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

![Android Koordinat Ara](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS Koordinat Ara](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Koordinat araması doğru bir konum sağlar. Örneğin, bir harita, GPS cihazı veya çevrimiçi hizmetler gibi diğer kaynaklardan elde edilen kesin koordinatları girebilirsiniz; bu, tam adresi olmayan yerler söz konusu olduğunda özellikle kullanışlıdır. Daha fazla bilgi için [Koordinat Ara](./search-coordinates.md) makalesine bakın.


## İlgili Makaleler {#related-articles}

- [Adres Ara](./search-address.md)
- [Arama Geçmişi](./search-history.md)
- [POI Ara](./search-poi.md)
- [Koordinat Ara](./search-coordinates.md)
- [Popüler Yerler](../map/popular_places.md)