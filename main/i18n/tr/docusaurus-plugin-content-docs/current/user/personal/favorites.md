---
source-hash: 6b2c4fa700522da26fcad9168c57a7b9f010154747f3253c53cdd3c3067262a8
sidebar_position: 7
title: Favoriler
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



## Genel Bakış {#overview}

**Favoriler** OsmAnd'ın bir özelliğidir ve harita üzerinde yer imleri (notlar) oluşturmanıza olanak tanır. Bu favori noktalar varsayılan olarak sarı yıldızlar olarak görüntülenir, ancak bunları farklı renkler, şekiller ve simgelerle tamamen özelleştirebilirsiniz. Favoriler, *6. yakınlaştırma seviyesinden* itibaren görünür hale gelen özel bir harita katmanında gruplandırılır.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorilere giriş android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorilere giriş ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Favori Nokta {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoriler katmanı Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriler katmanı iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Favoriler özel bir harita katmanının parçasıdır ve bunları harita üzerinde [adlarıyla](../map/point-layers-on-map.md#favorite-and-poi-names) birlikte [gösterebilir veya gizleyebilirsiniz](../map/point-layers-on-map.md#favorites). Bir favori noktaya dokunmak, ayrıntıları görüntülemenize ve noktayı [düzenlemenize veya silmenize](../map/map-context-menu.md#add--edit-favorite) olanak tanıyan [Bağlam menüsünü](../map/map-context-menu.md#favorites--track-points-from-the-group) açar.


### Oluştur {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favori ekle açıklaması Android](@site/static/img/personal/favorite_add_descr_android.png) ![Favori grup Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favori ekle açıklaması iOS](@site/static/img/personal/favorite_add_descr_ios.png) ![Favori grup iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Favori bir nokta eklemek için:

1. Harita üzerinde bir [İÇN](../map/point-layers-on-map.md#points-of-interest-pois) veya bir yapı seçin.
İÇN için kısa dokunuş veya genel bir harita noktası için uzun dokunuş.
2. Harita bağlam menüsünden [Ekle (☆)](../map/map-context-menu.md#add--edit-favorite) öğesini seçin.

OSM verilerinden bir nokta eklerken, ilgili İÇN bilgileri otomatik olarak dahil edilir. Ayrıca herhangi bir harita konumuna [uzun dokunarak](../map/map-context-menu.md#select-any-point-long-tap) bir favori oluşturabilirsiniz.

***Favori nokta için alanlar:***

- **Ad** — Grup içinde benzersiz bir ad (*Gerekli*).
- **Adres** ve **Açıklama** (*İsteğe bağlı*).
- **Grup** — Mevcut bir [Favori grubundan](#manage-favorites) seçin veya yeni bir tane oluşturun.
- **Görsel özelleştirme** — Simge, renk, şekil varsayılan [grup görünümüne](#change-group-appearance) uyabilir veya ayrı ayrı özelleştirilebilir.


### Düzenle / Değiştir / Sil {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favori düzenle Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favori düzenle iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Favori bir noktayı değiştirmek için:

1. Harita üzerindeki favoriye [dokunun](../map/map-context-menu.md#select-an-object-single-tap) veya [Favorilerim](#manage-favorites) bölümüne gidin.
2. [*Harita bağlam menüsünden*](../map/map-context-menu.md#add--edit-favorite) **Favoriyi düzenle** öğesini seçin.

***Mevcut seçenekler:***

- **Ayrıntıları düzenle** — Ad, simge, grup, adres ve açıklama.
- **Konumu değiştir** — Başka bir noktayı bununla değiştirin. Belirli bir noktayı (örn. *Park ettiğim arabam*) güncellemek veya yeni bir tane oluşturmak için kullanışlıdır.
- **Sil** — Düzenleme menüsü aracılığıyla veya Android'deki silme düğmesi aracılığıyla silme seçeneğini kullanarak favoriyi kaldırın.


### Favori Simgeleri {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Yerlerim favoriler android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![yerlerim_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

OsmAnd'da İÇN'ler ve ara noktalar için geniş bir simge yelpazesi mevcuttur. Şunları yapabilirsiniz:

- [İÇN kategorileri](../search/search-poi.md#categories-and-their-filters) listesinden bir simge seçin.
- [Arama seçeneğini](../search/search-all.md#how-to-use) kullanarak uygun bir simge bulun.


### Özel Favoriler (Kişisel) {#special-favorites-personal}

*Kişisel klasör*, genellikle [navigasyonda](../navigation/setup/route-navigation.md#select-starting-point) kullanılan **<Translate android="true" ids="favorite_home_category"/>** ve **<Translate android="true" ids="work_button"/>** gibi özel noktaları içerir. Bu klasörün *üç nokta menüsü* yoktur ve parametreleri değiştirilemez.


## Favorileri Yönet {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Yerlerim favoriler android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![yerlerim_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

**Favorilerim** bölümü şunları yapmanızı sağlar:

- Belirli favorileri veya grupları [ara](#order--sorting--search).
- [Toplu işlemler](#bulk-edit--delete) — Birden fazla favoriyi aynı anda yeniden adlandır, taşı veya sil.

### Sıralama / Arama {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favori klasörler android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favori klasörler ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Sıralama** — Favori klasörler ve noktalar alfabetik olarak sıralanır, [kişisel klasör](../personal/favorites.md#special-favorites-personal) en üsttedir.
- **Arama** — Favorileri ada göre bulmak için [Genel arama](../search/search-all.md) kullanın. Favoriler, haritanın merkezine olan uzaklığa göre sıralanır.


### Toplu Düzenle / Sil {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favori eylemler android](@site/static/img/personal/favorites_actions_android.png) ![Favori eylem sil android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favori eylemler ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Birden fazla favoriyi yönetmek için **Sil** simgesine (*Android'de çöp kutusu simgesi*) veya **Düzenle** düğmesine (*iOS'ta kalem simgesi*) dokunun.
2. Toplu işlemler için tek tek favorileri veya tüm klasörleri seçin.
3. **Mevcut seçenekler** — Android ve iOS için *Sil*, *Favori Grubuna Taşı*, *Paylaş* ve iOS için *Rengi Değiştir*.

<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Favori Grup Eylemleri {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *Üç nokta menüsü → Varsayılan görünümü değiştir*

![Favori klasör işlevleri android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *Klasöre uzun dokunun → Varsayılan görünüm*

![Favori eylemler ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Her klasörün yanındaki ***Üç nokta menüsünü*** (*Android*) ve klasöre ***uzun dokunmayı*** (*iOS*) kullanarak favori gruplarını yönetin:

- **<Translate android="true" ids="shared_string_rename"/>** — Seçilen klasörün adını değiştirmek için bu seçeneği kullanın.

- **<Translate android="true" ids="change_default_appearance"/>** — Klasördeki favori noktaların haritada nasıl görüneceğini simgelerini, renklerini veya etiketlerini değiştirerek özelleştirin.

- **<Translate android="true" ids="shared_string_show_on_map"/>** veya **Haritada gizle** — Klasördeki favori noktaları haritada göstermek veya gizlemek için bu seçeneği açıp kapatın.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** veya **Harita işaretçilerinden kaldır** (*Yalnızca Android*) — Kolay başvuru için klasördeki tüm favori noktaları *Harita işaretçileri listesine* ekleyin veya gerektiğinde kaldırın.

- **<Translate android="true" ids="shared_string_share"/>** — Klasördeki favori noktaları bir *Favorites.gpx* dosyası olarak dışa aktararak verilerinizi kolayca aktarmanızı veya yedeklemenizi sağlayın.

- **<Translate android="true" ids="shared_string_delete"/>** — Seçilen favori klasörünü ve içindeki tüm noktaları kalıcı olarak silin.

Daha fazla ayrıntı için [Yerlerim](../personal/myplaces.md#favorites) makalesine bakın.



### Grup Görünümünü Değiştir {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favori klasör işlevleri android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favori eylemler ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

*Grup Görünümünü Değiştir* ayarları:

- **Simge, renk, şekil** — Bir gruptaki tüm favoriler için varsayılan bir stil ayarlayın.
- **Tutarlılık** — Gruba eklenen yeni favoriler varsayılan görünümü otomatik olarak devralır.
- **Özelleştirme** — Klasördeki mevcut noktalar, yalnızca yeni favoriler için varsayılan ayarları geçersiz kılın veya hepsine uygulayın.


## Dışa Aktar / İçe Aktar {#export--import}

OsmAnd, favorileri [yedeklemek](./import-export.md) ve [geri yüklemek](./import-export.md#import) için çeşitli yöntemler sunar:

- **Yedekleme konumları** — Yerel depolama, [OsmAnd Cloud](../personal/osmand-cloud.md) (yalnızca [OsmAnd Pro veya OsmAnd Start aboneliği](../purchases/index.md) ile) veya anlık mesajlaşma uygulamaları.

- **Dosya biçimi** — Favoriler `.gpx` dosyaları olarak kaydedilir (favorites.gpx).


### Ücretsiz Bulut Yedekleme {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favori klasör işlevleri android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favori eylemler ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

[Ücretsiz Favori Yedekleme](../personal/osmand-cloud.md#osmand-start), OsmAnd uygulamasında **Android, iOS** veya **Web** sürümleri için favori noktalarınızı (konumlarınızı) yedeklemenize ve bunları OsmAnd Cloud'dan geri yüklemenize olanak tanıyan özel bir satın alma planıdır. Bu plan, [OsmAnd Free veya Maps+](../purchases/index.md) kullanıcıları için mevcuttur.

*Ücretsiz Favori Yedekleme* şu avantajları sunar:

- **Ödeme gerekmez**. Ücretli abonelik satın almadan yedekleme özelliğini kullanın.
- **Favori noktaları kaydet**. Cihazınız çökerse veya uygulama silinirse kaybolmalarını önlemek için OsmAnd'daki favori noktalarınızı düzenli olarak kaydedin.
- **Favori noktaları aktar**. OsmAnd'ı birden fazla cihazda kullanıyorsanız, *Ücretsiz Favori Yedekleme* özelliğiyle favori noktalarınızı yeni bir cihaza aktarın.


#### Yedekleme Nasıl Oluşturulur {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favori klasör işlevleri android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favori eylemler ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

*Ücretsiz Ayar Yedekleme* özelliğini kullanmak için bir OsmAnd Cloud hesabına ihtiyacınız var. *OsmAnd Pro* hesabınız veya aktif bir *OsmAnd Cloud hesabınız* varsa, tanıtım banner'ını görmezsiniz.

- *Ücretsiz Favori Yedekleme banner'ı*. Yedekleme işlemini başlatmak için bu banner'a dokunun.
- Bir OsmAnd Cloud hesabınız yoksa [kayıt kılavuzundaki](../personal/osmand-cloud.md#login) talimatları izleyerek *kayıt adımını tamamlayın*.
- OsmAnd Satın Almalar menüsüne gidin (*Menü → Ayarlar → Satın Almalar*).
- *[OsmAnd Başlangıç paketi](../personal/osmand-cloud.md#osmand-start)*. Ücretsiz Ayar Yedekleme özelliğine erişmek için bu seçeneği seçin.
- Ayarlarınızın *yedeklemesini oluşturun*.


### Tüm Favoriler {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favori eylemler android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favori dışa aktarma içe aktarma ios](@site/static/img/personal/favorites_export_import_3_ios.png)

</TabItem>

</Tabs>

Favorilerinizi Favoriler ekranının altındaki özel düğmeleri kullanarak dışa ve içe aktarabilirsiniz. Bir [.gpx dosyası](../../technical/osmand-file-formats/osmand-gpx.md) (favorites.gpx), Dropbox'a, e-postaya, mesajlaşma uygulamalarına ve cihazınızda bu özelliği destekleyen diğer uygulamalara gönderilebilir.

- **İçe Aktar** düğmesi (*Android*) / **Favoriyi içe aktar** (*iOS*). Cihazınızın depolama alanından bir *GPX* dosyasından (yaygın bir GPS veri biçimi) favori noktaları (*favorites.gpx*) ara noktalar olarak içe aktarmanıza olanak tanır.
- **Paylaş** düğmesi (*Android*) / **Favoriyi dışa aktar** (*iOS*). Tüm favorilerinizi bir *favorites.gpx* dosyası olarak dışa aktarmanıza (paylaşmanıza) olanak tanır.


### Favori Grup {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favori klasör işlevleri android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favori eylemler ios](@site/static/img/personal/favorites_actions_1_ios.png) ![Favori eylemler ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Seçilen favori klasörünün **Üç nokta menüsüne** (*Android*) veya **Düzenle** düğmesine (*iOS'ta kalem simgesi*) veya klasöre **uzun dokunun** (*iOS*).
- *Favorites.gpx* dosyasını cihazınızın belleğine göndermek veya mesajlaşma uygulamaları aracılığıyla paylaşmak için **Paylaş** düğmesini seçin.


### Otomatik Favori Yedekleme {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *Android → data → net.osmand → files → backup*

![Favori yedekleme dışa aktarma Android](@site/static/img/personal/favorites_backup_export_andr.png) ![Favori otomatik yedekleme android](@site/static/img/personal/favorites_autobackup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *Dosyalar → iPhone'umda → OsmAnd Haritaları → favorites_backup*

![Favori otomatik yedekleme ios](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

OsmAnd, favoriler her düzenlendiğinde bir **yedekleme dosyası** oluşturur.

- **Android**: Yedeklemeler *Android → data → net.osmand → files → backup* konumunda depolanır. Bunlara erişmek için üçüncü taraf bir dosya yöneticisi kullanın.

- **iOS**: Dosyalar *Dosyalar → iPhone'umda → OsmAnd Haritaları → favorites_backup* konumunda bulunur.

**Manuel yedekleme dışa aktarma**

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>* konumuna gidin.
- `.osf` dosyasını yerel depolamaya, bulut hizmetlerine aktarın veya doğrudan paylaşın.

:::caution
***Android***'in en son sürümlerinde sistem dizinlerine erişim sınırlıdır. Ancak, favoriler dosyası arşivden çıkarıldıktan sonra, mesajlaşma uygulamalarına veya bulut hizmetlerine vb. iletilmesi hala mümkündür.
:::


### GPX Dosyasındaki Favoriler {#favorites-in-gpx-file}

Bir Favori hakkındaki tüm bilgiler etiketler kullanılarak depolanır ve açıklanır. Bir Favori noktası oluştururken, kendi [açıklamanızı](#favorite-point) yazabilir veya noktanızı oluşturduğunuz OSM [ilgi çekici nokta (İÇN)](../map/point-layers-on-map.md#points-of-interest-pois) verilerinden bilgileri kullanabilirsiniz. Favori noktalar, İÇN'ler ve Ara noktalar, bilgileri depolamak için aynı **etiketleri** kullanır ve **GPX dosya biçiminde** kaydedilir.


```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```


## İlgili Makaleler {#related-articles}

- [Parçaları Yönet](../personal/tracks/manage-tracks.md#import--export-track)
- [Arama Geçmişi](../search/search-history.md#export-and-share)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)

> *Son güncelleme: Nisan 2025*