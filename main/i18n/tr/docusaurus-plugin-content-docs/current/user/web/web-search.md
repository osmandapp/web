---
source-hash: 576b2a6ec144f65d9bbd387b7ce25523a8a81f929e1a4c17b8d400a8c97827dd
sidebar_position: 6
sidebar_label: Arama
title: Web Sitesinde Arama
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


<InfoIncompleteArticle/>


## Genel Bakış {#overview}

**Arama menüsüne** yan panelden veya haritanın **sol köşesindeki 🔍** simgesinden erişilebilir. İçeriği:

- [Arama Çubuğu](#search-bar). Belirli konumları veya ilgi çekici yerleri aramak için anahtar kelimeler girin.
- [Kategoriler Bölümü](#categories). Daha kolay İÇN aramaları için kategorize edilmiş seçeneklere göz atın.
- [Keşfet Bölümü](#explore). Yakındaki yerleri ve ilgi çekici alanları fotoğraflarla keşfedin.

![Arama menüsü](@site/static/img/web/search.png)


## Arama Çubuğu {#search-bar}

Aramayı başlatmak için **🔍 düğmesine** tıklayın. **Arama Satırına** bir sorgu girin ve etiket bilgilerini görüntüleyebileceğiniz [**İÇN Bağlam Menüsü**](#explore-poi-data) öğesini açmak için İÇN'ye tıklayın.

**Kategori adına** göre arama yaparsanız, ilk sonuç o İÇN'nin kategorisini gösterecektir. Bir İÇN kategorisine tıklarsanız, [**Kategoriler Arama**](#categories) penceresi açılır.

![Bağlam Menüsü İÇN](@site/static/img/web/context_menu_poi.png)


Haritada veya sonuç listesinde seçilen İÇN'ye tıklamak **İÇN Bağlam Menüsü**'nü açar. Bu menü aşağıdaki verileri ve bağlantıları sağlar:

- **Ad ve Simge**. İÇN'nin adını ve simgesini görüntüler.
- **★ Düğmesi (*Favorilere Ekle*)**. Seçilen İÇN'yi [favori](../web/web-userdata.mdx#add--edit-favorite) olarak kaydetmenizi sağlar.
- **🔍 Düğmesi**. Haritayı İÇN'nin konumuna taşır.
- **Mesafe ve Yön**. Konumunuzdan seçilen İÇN'ye olan mesafeyi ve yönü gösterir.
- **Konum**. İÇN'nin koordinatlarını görüntüler.
- **Çevrimiçi Fotoğraflar**. İÇN ile ilgili Wikimedia verilerini, varsa, sağlar. [Fotoğraf Galerisi](#photo-gallery) öğesini açmak için *Tümünü Göster*'e tıklayın.
- **Nesne Verileri**. Kişiler, sosyal medya bağlantıları, Wikipedia bağlantıları, açıklamalar, yazıtlar vb. gibi ayrıntıları içerir.
- **OSM Kimliği**. İÇN'nin OpenStreetMap Kimliği.
- **Koordinatlar**. Koordinatlara tıklamak, bunları kopyalamanızı sağlar.

![Bağlam Menüsü İÇN](@site/static/img/web/context_menu_poi_1.png)

## Kategoriler {#categories}

**Kategoriler Menüsü**'nde haritada bir İÇN kategorisi seçip görüntüleyebilirsiniz:

- **En popüler 6 kategoriden** birini seçin.
- Veya tüm İÇN kategorileri listesini açmak için **Tümünü Göster**'e tıklayın.

![Kategoriler İÇN](@site/static/img/web/categories_poi.png)

Haritada veya sonuç listesinde seçilen İÇN'ye tıklamak **İÇN Bağlam Menüsü**'nü açar. Bu menü aşağıdaki verileri ve bağlantıları sağlar:

- **Ad ve Simge**. İÇN'nin adını ve simgesini görüntüler.
- **★ Düğmesi (*Favorilere Ekle*)**. Seçilen İÇN'yi [favori](../web/web-userdata.mdx#add--edit-favorite) olarak kaydetmenizi sağlar.
- **🔍 Düğmesi**. Haritayı İÇN'nin konumuna taşır.
- **Mesafe ve Yön**. Konumunuzdan seçilen İÇN'ye olan mesafeyi ve yönü gösterir.
- **Konum**. İÇN'nin koordinatlarını görüntüler.
- **Çevrimiçi Fotoğraflar**. İÇN ile ilgili Wikimedia verilerini, varsa, sağlar. [Fotoğraf Galerisi](#photo-gallery) öğesini açmak için *Tümünü Göster*'e tıklayın.
- **Nesne Verileri**. Kişiler, sosyal medya bağlantıları, Wikipedia bağlantıları, açıklamalar, yazıtlar vb. gibi ayrıntıları içerir.
- **OSM Kimliği**. İÇN'nin OpenStreetMap Kimliği.
- **Koordinatlar**. Koordinatlara tıklamak, bunları kopyalamanızı sağlar.

![Bağlam Menüsü İÇN](@site/static/img/web/categories_poi_1.png)


## Keşfet {#explore}

Arama menüsündeki **Keşfet** bölümü, yerleri bulmayı ve ilgi çekici yerleri (İÇN'ler) fotoğraflarıyla ([Wikidata kaynağı](https://www.wikidata.org/)) doğrudan harita üzerinde görüntülemeyi kolaylaştırır.


Başlamak için:

1. Popüler İÇN kategorilerini ve altındaki **Keşfet** menüsünü gösteren arama sekmesini açmak için **🔍 simgesine** tıklayın.
2. **Keşfet** verileri otomatik olarak haritada görüntülenecektir.
3. Keşfet bölümünde **"Tümünü Göster"**i seçerek üstteki ***Filtre*** düğmesiyle birlikte tam kategoriler listesini açın.

   ![Keşfet menüsü](@site/static/img/web/explore.png)

4. ***Filtre* düğmesine** basmak, "Keşfet" için Kategoriler menüsünü açar. Aramanızı daraltmak için Kategoriler menüsünü açın ve ilgilendiğiniz öğeleri seçin.

   ![Keşfet menüsü](@site/static/img/web/explore_cat.png)

### İÇN verilerini keşfet {#explore-poi-data}

Bir resim İÇN'sine tıklamak, aşağıdakileri içeren yeni bir bağlam menüsü açar:

- **Ad ve İÇN Etiketi**. İÇN'nin adını ve genel etiketini görüntüler.
- **🔍 Düğmesi**. Haritayı İÇN'nin konumuna taşır.
- **Mesafe ve Yön**. Konumunuzdan seçilen İÇN'ye olan mesafeyi ve yönü gösterir.
- **Konum**. İÇN'nin koordinatlarını görüntüler.
- **Açıklama**. İÇN hakkında ek bilgi sağlar.
- **Çevrimiçi Fotoğraflar**. İÇN ile ilgili Wikimedia verilerini, varsa, görüntüler. [Fotoğraf Galerisi](#photo-gallery) öğesini açmak için *Tümünü Göster*'e tıklayın.
- **Nesne Verileri**. Kişiler, sosyal medya bağlantıları, Wikipedia bağlantıları vb. gibi ayrıntıları içerir.
- **OSM Kimliği**. İÇN'nin OpenStreetMap Kimliğini görüntüler.
- **Koordinatlar**. Koordinatlara tıklayarak bunları kopyalayabilirsiniz.

![Keşfet menüsü](@site/static/img/web/poi_context.png)

### Fotoğraf Galerisi {#photo-gallery}

Bağlam menüsünün **Çevrimiçi Fotoğraflar** bölümünde ***Tümünü Göster***'e tıklarsanız, seçilen İÇN'nin *Fotoğraf Galerisi* açılır.
*Fotoğraf Galerisi*'nde, İÇN'nin tüm fotoğrafları arasında gezinebilirsiniz.

Her fotoğraf şunları içerir:

- **Tarih**. Fotoğrafın çekildiği veya yüklendiği tarih.
- **Yazar**. Fotoğrafın yazarının adı.
- **Lisans Bilgileri**. Fotoğrafın kullanım hakları hakkında ayrıntılar.
- **Açıklama**. Fotoğraf hakkında ek bilgi.

![Fotoğraf Galerisi](@site/static/img/web/poi_photo.png)


> *Son güncelleme: Ocak 2025*