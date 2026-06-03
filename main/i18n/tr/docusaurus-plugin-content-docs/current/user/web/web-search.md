---
source-hash: e8f044473acdc81152b6ac5081df28b86a07fd654cf5ea4de38da7f569d022b7
sidebar_position: 10
sidebar_label:  Arama
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

<!--
<InfoIncompleteArticle/>
-->


## Genel Bakış {#overview}

**Arama menüsü** yan panelden veya haritadaki 🔍 Arama simgesinden erişilebilir. İçeriği:

- [Arama Çubuğu](#search-bar). Belirli konumları veya ilgi çekici noktaları aramak için anahtar kelimeler girin.  
- [Kategoriler Bölümü](#categories). İÇN aramalarını kolaylaştırmak için kategorize edilmiş seçeneklere göz atın.  
- [Keşfet Bölümü](#explore). Mevcut harita merkezi için popüler İÇN'leri görüntüleyin ve harita üzerinde fotoğraflarla yerleri keşfedin.

![Search menu](@site/static/img/web/search.png)

## Arama Seçenekleri {#search-options}

### Arama Çubuğu {#search-bar}

**Arama Çubuğu**nu, belirli yerleri veya ilgi çekici noktaları adıyla bulmak için kullanın. Arama simgesine tıklayın, sorgunuzu girin ve listeden bir sonuç seçin. Bir İÇN seçmek, [İÇN Bağlam Menüsünü](#poi-context-menu) açar; burada ayrıntıları görüntüleyebilir ve hızlı eylemleri kullanabilirsiniz.

Bir kategori adına göre arama yaparsanız, ilk sonuç ilgili İÇN kategorisini gösterebilir. Kategoriye tıklayarak [Kategoriler araması](#categories) görünümünü açın.

![Search Options](@site/static/img/web/search_bar.png)

### Kategoriler {#categories}

**Kategoriler**i, İÇN'leri türe göre taramak ve harita üzerinde görüntülemek için kullanın. Menü, hızlı erişim için altı popüler kategori gösterir. Daha fazla seçeneğe ihtiyacınız varsa, Tamamını göster'e tıklayarak 18 mevcut kategorinin tam listesini açın. Bir kategori seçmek, eşleşen İÇN'leri haritada görüntüler; bir İÇN seçmek [İÇN Bağlam Menüsünü](#poi-context-menu) açar.

![Search Options](@site/static/img/web/search_categories.png)

### Keşfet {#explore}

**Keşfet** bölümü, fotoğraflarla [popüler yerleri](https://osmand.net/docs/user/map/popular_places) doğrudan harita üzerinde gösterir. Mevcut harita merkezi için (popülerliğe göre sıralanmış) bir İÇN listesi oluşturur ve aynı yerleri harita üzerinde fotoğraf işaretleyicileri olarak görüntüler. Önizleme görüntüleri ve İÇN bilgileri, mevcut olduğunda Wikidata/Wikimedia ve ilgili kaynaklara dayanır.

Keşfet'e erişmek için Arama sekmesini açın — Keşfet sonuçları haritada otomatik olarak görüntülenir. Tam Keşfet kategoriler listesini açmak için Tamamını göster'i kullanın. Listede ve haritada neyin görüneceğini daraltmak için Filtre'yi kullanın; bu, Keşfet kategoriler menüsünü açar. Listeden veya haritadan bir İÇN seçmek [İÇN Bağlam Menüsünü](#poi-context-menu) açar.

![Search Options](@site/static/img/web/search_explore.png) ![Search Options](@site/static/img/web/explore_filters.png)

## İÇN Bağlam Menüsü {#poi-context-menu}

Hangi arama seçeneğini kullanırsanız kullanın (Arama Çubuğu, Kategoriler veya Keşfet), haritada veya sonuç listesinde bir İÇN seçmek İÇN Bağlam Menüsünü açar. Bağlam menüsü, İÇN bilgilerini görüntülemek ve yaygın eylemleri gerçekleştirmek için ana yerdir. İÇN ayrıntılarını (konum ve ilgili veriler gibi) hızlı eylemlerle (örneğin, kaydetme, paylaşma veya rota planlama ve navigasyon başlatma) birleştirir.

### İÇN Ayrıntıları {#poi-details}

**İÇN Bağlam Menüsü**, seçilen yer hakkında temel bilgileri görüntüler ve mevcut OSM ile Wikimedia/Wikidata verilerine dayalı bağlantılar sağlar:
- **Ad ve simge** — İÇN adını ve simgesini gösterir.
- **Mesafe ve yön** — İÇN'ye olan mesafe ve yönü gösterir.
- **Konum** — İÇN koordinatlarını görüntüler.
- **Açılış saatleri** — [OSM verilerinden](https://wiki.openstreetmap.org/wiki/Key:opening_hours) ayrıştırılmış açılış saatlerini gösterir. Mevcut durum, mevcut zamana göre dinamik olarak görüntülenir (örneğin, *Şimdi açık*, *Kapalı* veya *10:00'de açılır*), ve tam program aşağıda gösterilir.
- **Açıklama** — Mevcut olduğunda İÇN hakkında ek bilgi sağlar (örneğin, Wikipedia'dan).
- **Çevrimiçi fotoğraflar** — Mevcut olduğunda İÇN ile ilgili Wikimedia fotoğraflarını gösterir. Fotoğraf Galerisini açmak için Tamamını göster'i seçin. Bir fotoğrafı galeride açmak için seçin (Fotoğrafı Aç modu).
- **Nesne verileri** — Ek İÇN bilgileri, OSM etiketleri ve diğer ayrıntılar gibi bağlantılar, sosyal bağlantılar, Wikipedia ve Wikivoyage bağlantıları, açıklamalar ve yazıtlar (mevcut olduğunda) içerir.
- **OSM Kimliği** — İÇN'nin OpenStreetMap tanımlayıcısı.
- **Koordinatlar** — Koordinatları kopyalamak için seçin.

![POI Context Menu](@site/static/img/web/poi_context_menu_new.png)

### İÇN Eylemleri {#poi-actions}

**İÇN Bağlam Menüsü**, yaygın görevler için eylem düğmeleri içerir. Bir yeri kaydetmek, paylaşmak veya rota planlama ve navigasyonu başlatmak için bu hızlı eylemleri kullanın:
- **Favorilere Ekle** — İÇN'yi [Favoriler](../web/web-favorites.md#favorites-actions)'inize kaydeder.
- **Paylaş** — İÇN'yi doğrudan OsmAnd Web'de açan paylaşılabilir bir bağlantı üretir. Bağlantı, İÇN adı, türü ve koordinatlarını (işaretçi) içerir.
- **Başlangıç Noktası Olarak Yönler** — Seçilen İÇN'yi başlangıç noktası olarak ayarlar ve hedef ile profil seçebilmeniz için rota panelini açar.
- **Navigasyon** — Seçilen İÇN'yi [navigasyon](../web/web-navigation.md#start-a-route) için hedef nokta olarak ayarlar.

<!--
Click the **🔍 button** to start the search. Enter a query in the **Search Line** and click on POI to open the [**POI Context Menu**](#explore-poi-data), where you can view the tags information.

If you search by **Category name**, the first result will display the category of that POI.  If you click on a POI category, the [**Categories Search**](#categories) window opens.

![Context Menu POI](@site/static/img/web/context_menu_poi.png)


Click the chosen POI on the map or in the result list opens the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#favorites-actions).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/context_menu_poi_1.png)

## Categories {#categories}

You can choose and display one POI category on the map in the **Categories Menu**:

- Select from the **6 most popular categories**.  
- Or click **Show All** to open the full list of POI categories.

![Categories POI](@site/static/img/web/categories_poi.png)

Click the selected  POI on the map or in the results list to open the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#favorites-actions).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/categories_poi_1.png)


## Explore {#explore}

The **Explore** section in the Search menu makes it easier to find places and view points of interest (POIs) with their photos ([Wikidata source](https://www.wikidata.org/)) directly on the map.


To get started:

1. Click the **🔍 icon** to open the search tab, which displays popular POI categories and the **Explore** menu below.  
2. The **Explore** data will automatically be displayed on the map.  
3. Select **"Show All"** in the Explore section to open the full categories list with the ***Filter*** button at the top.  

   ![Explore menu](@site/static/img/web/explore.png)

4. Pressing the ***Filter* button** opens the Categories menu for "Explore." To refine your search, open the Categories menu and select the items you are interested in.  

   ![Explore menu](@site/static/img/web/explore_cat.png)

### Explore POI data {#explore-poi-data}

Clicking on an image POI opens a new context menu that includes:

- **Name and POI Tag**. Displays the name and general tag of the POI.  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Description**. Provides additional information about the POI.  
- **Online Photos**. Displays Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).  
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, etc.  
- **OSM ID**. Displays the OpenStreetMap ID of the POI.  
- **Coordinates**. By clicking on the coordinates, you can copy them.

![Explore menu](@site/static/img/web/poi_context.png)
-->

### Fotoğraf Galerisi {#photo-gallery}

İÇN Bağlam Menüsü'nün **Çevrimiçi fotoğraflar** bölümünde ***Tamamını göster***'e tıklayarak seçilen İÇN için *Fotoğraf Galerisi*'ni açın. Galeri, tüm mevcut fotoğrafları taramanıza olanak tanır. Bir fotoğrafı daha büyük görünümde açmak için tıklayın (Fotoğrafı Aç modu). İÇN Bağlam Menüsü'ne dönmek için Geri'yi kullanın.

Fotoğraf ayrıntıları şunları içerir:
- **Tarih**. Fotoğrafın çekildiği veya yüklendiği tarih.  
- **Yazar**. Fotoğrafın yazarının adı.  
- **Lisans Bilgileri**. Fotoğrafın kullanım hakları hakkında ayrıntılar.  
- **Açıklama**. Fotoğraf hakkında ek bilgi.

![Photo Gallery](@site/static/img/web/poi_photo.png)


## İlgili Makaleler {#related-articles}

- [Tümünü Ara](../search/search-all.md)
- [İÇN Ara](../search/search-poi.md)
- [Harita](../web/web-map.md)