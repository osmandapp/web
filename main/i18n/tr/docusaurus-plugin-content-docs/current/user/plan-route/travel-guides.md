---
source-hash: bd839a5ee6ccc19abd4bedd194ba51bd5ed2b39816629811284b6f76740aeab1
sidebar_position: 2
title:  Seyahat Rehberleri
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



## Genel Bakış {#overview}

:::info Ücretli özellik
Seyahat Rehberleri, OsmAnd uygulamasının [ücretli bir özelliğidir](../purchases/index.md).
:::

OsmAnd'daki sanal seyahat rehberleri, kullanıcılara değerli bilgiler, öneriler ve ipuçları sunar. Ayrıca gezginlerin uygulamadaki ilgi çekici yerler hakkında kapsamlı navigasyon bilgilerine erişmelerini sağlar.

OsmAnd seyahat rehberleri, gönüllü yazarların güncel makaleler oluşturduğu Wikipedia'ya benzer bir topluluk projesi olan [Wikivoyage](https://www.wikivoyage.org/) verilerine dayanmaktadır.
Wikivoyage bilgileri, bir yer hakkındaki ana gerçekleri, ulaşımı, ilgi çekici yerleri, alışverişi ve daha fazlasını içerir.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Seyahat rehberleri görünümü Genel](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritalar menüsü iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Nasıl kullanılır {#how-to-use}

- *Seyahat rehberlerini* [indirin](#download-articles).
- Bir ülke, bölge, şehir, ilgi çekici yer hakkındaki [makalelere](#browse-articles) göz atın.
    - Alternatif olarak, Haritayı Yapılandır menüsünü kullanarak [seyahat rehberleri makalelerini ve/veya noktalarını haritada görüntüleyin](#travel-routes).
    - Haritadaki ilgi çekici yerlere göz atın, bunları *[Harita işaretleyicilerine](../personal/markers.md#add--edit-markers)* veya *[Favorilere](../personal/favorites.md#favorite-group-actions)* ekleyin.
    - *[Tamamını oku](#manage-as-gpx-track)* düğmesini kullanarak *Seyahat rehberleri* içindeki *[makaleye](#travel-article)* gidin.
- Makaleleri daha sonra okumak için [yer imlerine ekleyin](#explore-and-bookmark).
- Makalelerden ziyaret etmek için [noktalar](#points) seçin ve bunları OsmAnd haritasına ekleyin.
- Çevrimdışı [Wikipedia makalelerinden](#combine-with-wikipedia) ziyaret edilecek yerler hakkında daha fazla bilgi edinin.
- Seçilen turistik yerlere veya noktalar arasında serbest bir yürüyüşe [rota oluşturun](../navigation/setup/route-navigation.md#set-destinations).

:::note
*Seyahat rehberleri* makaleleri, OsmAnd içinde Yol Noktaları içeren GPX izleri olarak depolanır. Bu izleri haritaya ekledikten sonra (bu makalenin *[Noktalar](#points)* veya *[Seyahat rotaları](#travel-routes)* bölümlerine bakın), bunları *[Yerlerim](../personal/myplaces.md)* menüsü aracılığıyla yönetebilirsiniz.
:::

### Makaleleri indir {#download-articles}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Seyahat rehberleri indirme menüsü](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Haritalar menüsü iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Seyahat rehberlerini kullanmaya başlamadan önce, bunları [Harita indir menüsü](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*) aracılığıyla indirmeniz gerekir. Makaleler bölgelere göre gruplandırılmıştır: *Afrika, Asya, Avustralya ve Okyanusya, Orta Amerika, Avrupa, Kuzey Amerika, Rusya ve Güney Amerika*, böylece ayrı bir şehir veya ülke için seyahat kitapları indirmenize gerek kalmaz.
Gerekli bölgeleri cihazınıza kaydederek, yurt dışındayken veya mobil ağınızın kapsama alanı dışındayken bile OsmAnd ile makalelere göz atabilirsiniz.

:::note
Ülke, bölge veya şehir rehberlerine ek olarak, filmlerden, kitaplardan, bilgisayar oyunlarından yerlere, büyük insanların anı yerlerine vb. rehberler bulabilirsiniz.
UNESCO Küresel Jeoparklar Ağı listesi veya dünyanın en büyük ve en karmaşık uluslararası havalimanları gibi özel rehberler de bulunmaktadır.
:::

## Makalelere Göz At {#browse-articles}

*Seyahat rehberleri* ekranı iki genel bölümden oluşur: bir [*arama alanı*](#search) ve iki sekmeli bir *seyahat rehberleri* listesi: *[<Translate android="true" ids="shared_string_explore"/> ve <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Tek bir sekme dokunuşuyla aralarında geçiş yapabilirsiniz.
*Seyahat Rehberlerini* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*) açtığınızda, OsmAnd size haritanın mevcut merkezinin coğrafi koordinatlarına yakın ilginç yerler hakkındaki makaleleri gösterecektir. Listedeki öğeye dokunduğunuzda, [Seyahat rehberi makalesi](#travel-article) açılır. Ekranın alt kısmında *Yer İmleri sekmesine* geçiş düğmesi bulunur.

### Keşfet ve Yer İmi Ekle {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Seyahat rehberleri ana ekranı](@site/static/img/guides/travel_guides_main_screen_1.png) ![Seyahat rehberleri ana ekranı 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seyahat rehberleri ana ekranı](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Seyahat rehberleri ana ekranı 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

**Keşfet** veya **<Translate android="true" ids="popular_destinations"/>** sekmesinde, ekranın merkezine bitişik (konum dışı) en iyi 30 destinasyon makalesi listelenir. Başlığı ve makalenin kısa bir açıklamasını içeren listeden bir öğeye dokunarak, o makalenin tam metnini görüntüleyebilirsiniz.
*Yer İmi düğmesine* dokunursanız, makale daha sonra okumak üzere kaydedilecek ve Yer İmleri sekmesinde kullanılabilir olacaktır. *Yer İmleri Eklenmiş Makaleler* sekmesinde, makaleler kaydedildikleri gibi düzenlenir ve en yeni makaleler en üstte yer alır.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. [Seyahat makalesini](#travel-article) açar.
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Seçilen makaleyi <Translate android="true" ids="saved_articles"/>'a taşır.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Seçilen makaleyi <Translate android="true" ids="saved_articles"/>'dan kaldırır.

### Ara {#search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Seyahat rehberleri arama menüsü](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seyahat rehberleri arama menüsü](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Arama alanı <Translate android="true" ids="shared_string_travel_guides"/> ekranının üst kısmında yer alır. Bir ülke, şehir veya ünlü bir yerin ilk harflerini yazmaya başlarsanız, arama alanının altında bir makale listesi görünecektir. İhtiyacınız olana dokunarak okumaya başlayabilirsiniz.
Her arama sonucunun yanında, seçilen makalenin okunabileceği en yaygın kullanılan ilk 3 dil listelenir. Ancak, popüler makaleler listelenen 3 dilden daha fazla dilde mevcuttur.

**Ek özellikler:**

- *Harry Potter turizmi*, *Hayalet şehirler*, *Monarşiler* ve diğerleri gibi özel kültürel cazibe merkezlerini arayabilirsiniz.
- Arama geçmişini silmek için [<Translate android="true" ids="shared_string_options"/> düğmesini](#options) kullanmanız gerekir.

<!--
- Arama, yalnızca kelimenin sonunda &#128269; veya boşluk tuşuna bastığınızda tamamlanır. - olması gerektiği gibi çalışmıyor
-->

### Seçenekler {#options}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Seyahat rehberleri seçenekler menüsü](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seyahat rehberleri arama menüsü](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

Bu menüde, çevrimdışı çalışırken makalelerin görünümünü özelleştirebilirsiniz. NOT, *[indirilen](#download-articles)* seyahat rehberleri resim içermez. Yalnızca aktif bir İnternet bağlantısıyla makaleleri görüntülerken görünürler.
Seçenekler menüsünde, görüntülenen makalelerdeki resimlerin çevrimdışıyken kullanmak üzere kaydedilip kaydedilmeyeceğini seçebilirsiniz. Ayrıca mevcut resim önbelleğini temizleyebilir veya arama geçmişini silebilirsiniz (yalnızca *Seyahat rehberlerinde* arama yaparken çalışır).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Makalelerdeki resimler çevrimdışı kullanım için indirilebilir.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Belleği boşaltmak için resim önbelleğini temizler.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. [Arama geçmişini](#search) temizler.

## Seyahat Makalesi {#travel-article}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Seyahat rehberleri makalesi](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seyahat rehberleri arama menüsü](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Bir makaleyi *[Keşfet sekmesindeki](#explore-and-bookmark)* önerilen seçeneklerden veya *[Arama](#search)* seçeneğini kullanarak açabilirsiniz. Bir *Seyahat rehberi makalesinden* *[Noktalar](#points)* adlı turistik yerleri OsmAnd haritasına eklediğinizde, yol noktasının [açıklama bölümündeki](../map/tracks/track-context-menu.md#description-and-info) *Tamamını oku* düğmesini kullanarak da makaleyi açabilirsiniz.

Ekranın üst kısmında aşağıdaki kontroller bulunur:

- Makalenin dilini değiştirmek için anahtar. Dil, mevcut seçeneklerden seçilebilir. Varsayılan olarak sistem dili kullanılır.
- &#8942; düğmesini kullanarak makaleyi arkadaşlarınızla paylaşabilirsiniz. Bağlantı OsmAnd uygulamasında açılır, uygun seyahat rehberleri dosyasının alıcının cihazına veya alıcının OsmAnd uygulaması yoksa veya iOS cihazlar için [Wikivoyage](https://www.wikivoyage.org/) sitesine indirilmesi gerekir.
- Gezinme çubuğuna dokunmak *[Seyahat rehberleri Gezinme menüsünü](#navigation-menu)* açar.

Ekranın alt kısmında aşağıdaki düğmeler bulunur:

- [İçindekiler](#table-of-contents). Makalenin içindekiler tablosunu açar.
- [Noktalar](#points). Makaleyle ilgili turistik yerleri haritada gösterir.
- [Yer İmi](#explore-and-bookmark). Bir makaleyi daha sonra okumak için yer imlerine eklemenizi sağlar.


### Gezinme menüsü {#navigation-menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Seyahat rehberleri içerik menüsü](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seyahat rehberleri arama menüsü](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

*Seyahat rehberi makalelerinde* bir makaleden diğerine geçmek için **Gezinme menüsünü** kullanın. Görüntünün üzerindeki adres alanına dokunarak erişebilirsiniz. NOT, Seyahat Rehberlerindeki makaleler şu şekilde gruplandırılmıştır: *Kıta → Bölge → Ülke → Eyalet (bölge) → Şehir*.
Ekranın sol üst köşesindeki oka dokunursanız, doğrudan *Keşfet* veya *Yer İmleri Eklenmiş makaleler* sekmesine (hangi sekmeyi daha önce açtığınıza bağlı olarak) gidersiniz.


### İçindekiler tablosu {#table-of-contents}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Seyahat rehberleri içerik menüsü](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seyahat rehberleri arama menüsü](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

Çoğu *Seyahat rehberi makalesi* aynı içerik yapısına sahiptir: *giriş* (turistik yerin resimleri ve açıklaması) ve *sonraki bölümler*.

- &nbsp;*Anla*. Yerel kültür ve alışkanlıklar hakkında detaylar.
- &nbsp;*Giriş*. Bazı yerlere nasıl gidileceği ve bu rotanın ne kadara mal olacağı hakkında detaylar.
- &nbsp;*Gör*. Tam açıklamalarıyla (bilet fiyatları, açılış saatleri, faydalı bağlantılar ve telefon numaraları) ilgi çekici yerlerin (müzeler, tarihi yerler vb.) bir listesi.
- &nbsp;*Yap*. Zaman geçirilecek yerler.
- &nbsp;*Satın Al*. Alışveriş yapılacak yerler.
- &nbsp;*Ye*. Yiyecek içecek tesisleri (bütçeye göre ayrılmış: bütçe, orta sınıf, lüks).
- &nbsp;*İç*. Barlar ve kafeler.
- &nbsp;*Uyu*. Konaklama yerleri bütçeye göre ayrılmıştır (bütçe, orta sınıf, lüks).
- &nbsp;*Sonraki yere git*. Wikivoyage'dan en yakın yerler.

### Noktalar {#points}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Seyahat rehberleri noktalar menüsü](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Seyahat rehberleri noktalar menüsü](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seyahat rehberleri arama menüsü](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Seyahat rehberleri arama menüsü](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

*Seyahat rehberi makaleleri* genellikle konuya göre gruplandırılmış turistik yerler içerir. *[Makalenin](#travel-article)* altındaki *Noktalar* düğmesine bir kez dokunarak, konuyla ilgili tüm ilgi çekici yerler (yemek yeme yerleri, konaklama seçenekleri, havaalanları, mağazalar, tarihi anıtlar vb.) haritaya eklenecek ve *[İz olarak yönetilebilir](#manage-as-gpx-track)*.

Varsayılan olarak, ilgi çekici yer grupları belirli simgelerle işaretlenir: *Yeme ve İçme* kategorileri kırmızı bir daire içinde bıçak ve çatal ile, *Yap ve Gör* yeşil bir daire içinde kamera ile ve diğerleri. &#8942; ile nokta gruplarını bir *[Yol noktası klasörü](../map/tracks/track-context-menu.md#points--waypoints)* gibi yönetebilirsiniz.

:::note
*Seyahat makalelerindeki* noktalar, bir GPX izindeki yol noktalarını ifade eder.
*Haritayı Yapılandır* menüsünde *[haritaya nokta da ekleyebilirsiniz](#travel-routes)*. Bunların hepsini görüntüleyebilir veya belirli bir kategoriyi seçebilirsiniz.
:::


## Seyahat rotaları {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

*Seyahat rehberlerine* göz atmanın alternatif bir yolu, bunları *Haritayı Yapılandır* menüsünü kullanarak haritada görüntülemektir. Bu özellik, OsmAnd tarafından sağlanan Wikivoyage'ı kullanma yeteneği için geçerli değildir, yalnızca izler için geçerlidir. Daha fazlasını [blogumuzda](https://osmand.net/blog/routes#generated-travel-routes) okuyabilirsiniz.

![Seyahat rehberleri noktalar menüsü](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Seyahat rehberleri noktalar menüsü](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Haritadaki seyahat rotaları ve makaleler {#travel-routes-and-articles-on-the-map}

![Seyahat rehberleri noktalar menüsü](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Seyahat rehberleri noktalar menüsü](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

*Haritayı Yapılandır* menüsünde *Seyahat rotaları* ekranını etkinleştirdikten sonra, haritada farklı renklerde daireler belirecektir. Turuncu olanlar rota izlerini, rota makalelerini ve bazı yol noktalarını temsil eder. Belirli bir rotaya, makaleye veya noktaya dokunun ve ardından *İndir* düğmesine (&#9047;) dokunun, bunları [iz olarak yönetebilirsiniz](#manage-as-gpx-track).

### Özel Seyahat Rehberleri {#custom-travel-guides}

Yeni makaleler veya düzenlemeler eklemenizi [Wikivoyage](https://en.wikivoyage.org/) adresine öneririz. Seyahat rehberlerini yaklaşık 6 ayda bir güncelliyoruz ve yeni makaleler indirebilirsiniz. Kendi *Seyahat kitabınızı* da oluşturabilirsiniz. Nasıl yapılacağı teknik belgelerde açıklanmıştır (bkz. *[Özel Seyahat rehberi oluştur](../../technical/map-creation/create_travel_guide.md)* makalesi).

<!--
### İz koleksiyonları {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## GPX İzi Olarak Yönet {#manage-as-gpx-track}

![Seyahat rehberleri noktalar menüsü 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Seyahat rehberleri noktalar menüsü 2](@site/static/img/guides/travel_guides_articles_my_places.png)

*Seyahat rehberlerini* haritaya ekledikten sonra, *Seyahat makaleleri* bir GPX izi olarak kaydedilebilir ve *[Yerlerim](../personal/myplaces.md)* menüsü (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*) aracılığıyla yönetilebilir. Haritada görüntülenebilir, paylaşılabilir, yeniden adlandırılabilir, başka bir klasöre yerleştirilebilir, dışa aktarılabilir veya silinebilir.

- &nbsp;*[Genel Bakış'ta](../map/tracks/track-context-menu.md#overview)* kısa bir açıklama okuyabilir veya *Tamamını oku* düğmesine dokunarak [Seyahat rehberi makalesini](#travel-article) açabilirsiniz. *Düzenle* makaleyi düzeltmenize olanak tanır.
- &nbsp;*[İz](../map/tracks/track-context-menu.md#altitude--speed-graphs)* bölümünde bilgi yoktur, *Seyahat rehberlerinin* GPX dosyaları yalnızca yol noktaları içerir.
- &nbsp;*[Noktalar](../map/tracks/track-context-menu.md#points--waypoints)* altında, ada göre gruplandırılmış klasörleri (Satın Al, Yap, İç vb.) görürsünüz.
- &nbsp;*[Seçenek](../map/tracks/track-context-menu.md#options)* düğmesi, normal izdekiyle aynı işlevleri yerine getirir.

:::info
*Noktalar*, bir [GPX dosyasına](../../technical/osmand-file-formats/osmand-gpx.md) (izler için yaygın olarak kullanılan bir format) [Yol noktaları](../map/point-layers-on-map.md#track-waypoints) olarak kaydedilir. İzdeki nokta (yol noktası) sayısı, iz alanındaki &#128681; simgesinin yanında işaretlenir.
GPX dosyasının *[iz bağlam menüsünde](../map/tracks/track-context-menu.md)*, bu izin ait olduğu makale hakkında genel bilgi bulabilirsiniz.
:::

## Wikipedia ile Birleştir {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Seyahat rehberleri Wikipedia ile birleştir 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Seyahat rehberleri Wikipedia ile birleştir 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seyahat rehberleri arama menüsü](@site/static/img/guides/travel_guides_wikipedia_1_ios.png) ![Seyahat rehberleri arama menüsü](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

*Seyahat rehberi makalelerinde* turistik yerler hakkında faydalı bilgiler (iletişim bilgileri, web bağlantıları, fiyatlar vb.) bulabilirsiniz. Birçok makalede, ilgi çekici yer hakkında bir *[Wikipedia makalesini](../plugins/wikipedia.md)* (çevrimiçi veya çevrimdışı) açmaya olanak tanıyan bir *Wikipedia* düğmesi bulunur.

Bazı durumlarda, OsmAnd'ın *[Yer İmleri sekmesi](#explore-and-bookmark)*, ilgili makalelere çevrimdışı göz atmak için [Wikipedia harita katmanını](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages) indirmenizi isteyecektir.

![Seyahat rehberleri Wikipedia indir](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info NOT
[Wikipedia eklentisi](../plugins/wikipedia.md), OsmAnd uygulamasının [ücretli bir özelliğidir](../purchases/index.md).
:::

## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Küresel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Ocak 2025*