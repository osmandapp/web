---
source-hash: 9e8ffc4e9ad66f08b7e397dce821b6b3045def307beb315cd2a5eb994c70479b
sidebar_position: 18
title:  Wikipedia
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




## Genel Bakış {#overview}

:::info Ücretli özellik
Wikipedia eklentisi, OsmAnd uygulamasının [ücretli bir özelliğidir](../purchases/index.md).
:::

Seyahatinizde Wikipedia'ya sahip olmak, ziyaret ettiğiniz yerler hakkında daha fazla bilgi edinmenize yardımcı olur. Çevrimdışı olarak kullanılabilir ve ilgi çekici noktalarla ilgili Popüler Yerleri (Android) / Wikipedia makalelerini (iOS) doğrudan harita üzerinde gösterir.

Wikipedia eklentisi, gerektiğinde etkinleştirilebilen/devre dışı bırakılabilen ayrı bir özelliktir. Etkinleştirildiğinde, her coğrafi bölge için [indirilen](../personal/maps-resources.md#download-maps-maps) Wikipedia verilerini yüklemenize olanak tanır. Harita, Wikipedia'dan iki tür yüklenmiş bilgiye sahiptir: kısa bilgi ve tam makale.


Kısa bilgiler Wikipedia İÇN'leri (İlgi Çekici Nokta kısaltması) tarafından sağlanır. Wikipedia seçeneği menüde açıksa, haritada bir Wikipedia İÇN'si görünür. Bir ilgi çekici noktaya dokunduğunuzda, Wikipedia'dan kısa bilgiler ve tam bir makaleyi açma yeteneği sunmak üzere genişler. Wikipedia İÇN'si ve ilgili makaleler çevrimdışı olarak mevcuttur. Bunları gerektiğinde okuyabilir, dilleri değiştirebilir ve Wikipedia'da başka bilgiler arayabilirsiniz.


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia), wiki tabanlı bir düzenleme sistemi kullanan gönüllü editörlerden oluşan bir topluluk tarafından oluşturulan ve sürdürülen ücretsiz, çok dilli, açık işbirlikçi bir çevrimiçi ansiklopedidir.

&nbsp;
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Wikipedia verilerini haritada görüntülemek için aşağıdaki ayarları yapmanız gerekir:

1. Ana Menü'nün Eklentiler bölümünde Wikipedia eklentisini [satın alın](../plugins/index.md#purchase) ve [etkinleştirin](../plugins/index.md#enable--disable).
2. Gerekli bölgeler için [Wikipedia paketlerini](#download-wikipedia-packages) indirin.
3. Gerekli profil için [Wikipedia İÇN'lerini](#display-wikipedia-on-the-map) haritada görüntüleyin.
4. Makaleleri okumak için tercih edilen [dilleri](#set-preferred-language) yapılandırın.


## Wikipedia Paketlerini İndir {#download-wikipedia-packages}

Wikipedia verileri her coğrafi bölge için mevcuttur. Bir bölge için yüklü olup da başka bir bölge için yüklü değilse, ilk durumda harita üzerinde bölgeyi görüntülerken Wikipedia bilgileriyle çalışabilirsiniz, diğer durumda ise bölgede herhangi bir Wikipedia bilgisi bulunmayacaktır. Yüklendikten sonra, Wikipedia verileri genel olarak ve çevrimdışı olarak kullanılabilir hale gelir.

Bir bölge için Wikipedia verilerini indirmek için, *Ana Menü*'deki [indirilebilir paketlere](../start-with/download-maps.md#download---main-menu) gidin, gerekli bölgeyi bulun ve açın. Wikipedia verileri diğer paketler arasında olacaktır.

Wikipedia verilerini bölgeye göre indirmek için şu şekilde açabilirsiniz:

1. **Android**. Şuraya gidin: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Gerekli bölgeyi seçin. Bölge açıldığında, Wikipedia verileri diğer paketler arasında olacaktır.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Hangi verilerin zaten yüklendiğini görmek için *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>* adresine gidin.

![Android'de Wikipedia'yı İndir](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Hangi verilerin zaten yüklendiğini görmek için *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>* adresine gidin.

![iOS'ta Wikipedia'yı İndir](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Haritada Wikipedia'yı Görüntüle {#display-wikipedia-on-the-map}

Gerekli bölgeler için Wikipedia verilerini yükleyerek, bu verilerin harita üzerindeki görünürlüğünü kontrol edebilirsiniz. Görünürlük, [Popüler Yerler (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **Android için** / [Wikipedia İÇN'leri](../map/point-layers-on-map.md#-wikipedia) **iOS için** tarafından kontrol edilir ve belirli bir [profil](../personal/profiles.md) (örneğin, sürüş için bir profil, bisiklet için bir profil, toplu taşımayı göstermek için başka bir profil ve diğerleri) tarafından tüm yüklenen bölgeler için gösterilebilir veya gizlenebilir.

Wikipedia İÇN'lerini göstermek veya gizlemek için önce bir profil seçin ve ardından **Wikipedia** seçeneğini açın/kapatın.

Wikipedia İÇN'lerini göstermek/gizlemek için aşağıdakileri yapın:

1. Şuraya gidin:

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#popular-places-wikipedia-menu)

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Bir Profil seçin ve menüdeki ayarların *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* bölümüne bakın.
3. **Android için** *<Translate android="true" ids="poi_osmwiki"/>* / **iOS için** *<Translate ios="true" ids="download_wikipedia_maps"/>* seçeneğini açın.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Android'de Wikipedia İÇN'leri](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Wikipedia İÇN'si](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Wikipedia'da Ara {#search-wikipedia}

Yüklenen Wikipedia verileriyle, [Wikipedia İÇN'lerinin](../map/point-layers-on-map.md#-wikipedia) harita üzerindeki görünürlük modundan bağımsız olarak, Wikipedia'dan herhangi bir bilgiyi [arama](../search/search-poi.md) mümkündür.

Arama düğmesine dokunduğunuzda, tüm metni ve/veya belirli bir kategoriyi [aramanıza](../search/index.md) olanak tanıyan ek bir panel görünür. İlk durumda, arama sonuçları diğer bilgi türlerinin yanı sıra ilgili Wikipedia makaleleriyle birlikte Wikipedia İÇN'lerini gösterecektir. Bir [Wikipedia kategori araması](../search/search-poi.md#poi-search) durumunda, arama sonuçları yalnızca Wikipedia bilgilerini, şu anda ekranda görüntülenen harita alanına en yakın konuma göre sıralanmış olarak gösterecektir.

- **Android** sürümünde, ekranın sol üst köşesindeki *Arama simgesine* dokunarak ve/veya menüdeki *Arama seçeneğine* dokunarak [Arama'yı](../search/index.md) açabilirsiniz.
- **iOS** sürümünde, [Arama'yı](../search/index.md) açmak için Arama simgesi ekranın sol üst köşesindedir.

<!--
<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Android'de Wikipedia araması](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Wikipedia araması](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- Wikipedia [kategorisine](../search/search-poi.md#poi-search) göre arama yapmak için şunları seçin: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Android'de Wikipedia kategorisi](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Wikipedia kategorisi](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Gerekirse, arama panelinin üst kısmındaki **Haritada Wikipedia'yı Göster** seçeneğine dokunun ve Wikipedia kategorisinden arama sonuçları haritada görünecektir.


## Wikipedia Makalesi {#wikipedia-article}

Wikipedia makalesini açmak için:

1. Belirtilen bir profil için [Wikipedia İÇN katmanını](../map/point-layers-on-map.md#-wikipedia) etkinleştirin.
2. Haritada İÇN'ye dokunun.
3. Bir İÇN'nin [bağlam menüsünde](../map/map-context-menu.md) seçilen Wikipedia makalesinin özetini görüntülemek için *Ayrıntılar*'a dokunun (veya sadece *bağlam menüsünü* yukarı çekin).
4. Bu metne dokunursanız (iOS sürümü için), çevrimdışı Wikipedia makalesine yönlendirileceksiniz.
5. Wikipedia makalesinin tam sürümünü açmak için *Makaleyi Oku* veya *Tam Makaleyi Oku* düğmesini kullanın.



<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![İngilizce Fransızca Wikipedia İÇN'si](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta İngilizce Fransızca Wikipedia İÇN'si](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Wikipedia Ayarları {#wikipedia-settings}

[Makaleleri](#wikipedia-article) okumak için tercih ettiğiniz [dili(-lerini)](#set-preferred-language) ayarlayabilir ve ayrıca her [profil](../personal/profiles.md) için [görsel indirme seçeneklerini](#download-images) yapılandırabilirsiniz.

### Tercih Edilen Dili Ayarla {#set-preferred-language}

OsmAnd uygulamasının **Android** ve **iOS** sürümlerinde, *Haritayı Yapılandır menüsünü* kullanarak Wikipedia makalelerini görüntülemek için tercih ettiğiniz dili (veya dilleri) ayarlayabilirsiniz. Birden fazla dil seçerseniz, haritadaki *Wikipedia* makaleleri bunlardan herhangi birinde gösterilecektir. Şuraya gidin:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Gerekli profili seçin ve *<Translate android="true" ids="shared_string_show"/>* bölümünde Android için *<Translate android="true" ids="poi_osmwiki"/>* / iOS için *<Translate ios="true" ids="download_wikipedia_maps"/>* seçeneğini seçin.
3. *<Translate android="true" ids="shared_string_all_languages"/>* seçeneğini devre dışı bırakın.
4. Açılan listeden belirli dili(-leri) seçin.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Android'de tercih edilen bir dil ayarlama](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta tercih edilen bir dil ayarlama](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
**iOS** sürümünde, Wikipedia makaleleri için tercih edilen dili şunları kullanarak da ayarlayabilirsiniz:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Makale İçindeki Dilleri Değiştir {#switch-languages-inside-the-article}

*Wikipedia makalesi* farklı dillerde mevcutsa, okurken dili değiştirebilirsiniz. Ekranın sağ üst köşesindeki ilgili simgeye dokunduktan sonra, aralarından seçim yapabileceğiniz seçenekler sunulacaktır.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Belirli bir makale için dilleri değiştirme](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Belirli bir makale için dilleri değiştirme](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Görselleri İndir {#download-images}

*Wikipedia makalesi* içinde Wikipedia'dan görselleri cihazınıza indirip indirmemeyi seçebilirsiniz:

- **Android**. *[Wikipedia makalesini](#display-wikipedia-on-the-map) açın → &#8942; → Seçenekler*
- **iOS**. *[Wikipedia makalesini](#display-wikipedia-on-the-map) açın → Görsel simgesi*

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Görselleri değiştirme](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Görselleri değiştirme](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

Uygulamanın **iOS** sürümünde, görsel indirme seçeneklerine *Wikipedia eklenti ayarlarını* kullanarak da erişebilirsiniz:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Görselleri değiştirme](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Mayıs 2025*