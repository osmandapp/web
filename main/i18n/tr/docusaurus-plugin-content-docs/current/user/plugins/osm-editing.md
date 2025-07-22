---
source-hash: 44618d2a28205f83a5a0d07741bf7f6948d9ca1354f8bc8546bcb8ce70d1114e
sidebar_position: 9
title: OpenStreetMap Düzenleme
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Genel Bakış {#overview}

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM), dünyanın ayrıntılı bir ücretsiz coğrafi haritasını oluşturmayı ve her kullanıcıya güncel açık kaynak verileri sağlamayı amaçlayan küresel bir topluluktur. OpenStreetMap düzenleme eklentisi, topluluğa katkıda bulunmanızı sağlar.

OsmAnd ve OSM düzenleme eklentisi ile OpenStreetMap.org'a kendi bilgilerinizi kolayca katkıda bulunabilirsiniz; örneğin, [POI'ler](#create--modify-poi) oluşturabilir veya değiştirebilir, [notlar](#create--modify-osm-note) ekleyebilir veya yorumlayabilir ve kaydedilmiş GPX [izlerini](#upload-gps-track) yükleyebilirsiniz.

## Gerekli Kurulum Parametreleri {#required-setup-parameters}

*OpenStreetMap düzenleme* eklentisini kullanmak için aşağıdaki ayarları yapmanız gerekir:

1. [Eklentiyi](../plugins/index.md#enable--disable) etkinleştirin.
2. Herhangi bir [profilde](../personal/profiles.md) OpenStreetMap düzenlemeyi ayarlayın.
3. [Haritayı Yapılandır menüsünde](../map/configure-map-menu) *OSM notlarının (çevrimiçi)* veya *OSM düzenlemelerinin* haritada görüntülenmesini etkinleştirin.


## Ayarlar {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![OpenStretMap düzenleme eklentisi Ayarları Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![OpenStretMap düzenleme eklentisi Ayarları Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

:::note
Eklenti ayarları geneldir ve tüm profiller için geçerlidir.
:::

- [OpenStreetMap'e giriş yapın](#authorization). Yeni veya değiştirilmiş değişiklikleri yüklemek için giriş yapın. Güvenli *OAuth 2.0 yöntemini* kullanın veya [OSM sitesinde oturum açın](https://www.openstreetmap.org/login). iOS için, OAuth yöntemi düğmesi yalnızca iOS 16.4'ün desteklenen bir sürümüne sahip kullanıcılar için kullanılabilir.
- **<Translate android="true" ids="offline_edition"/>**. Bu ayar etkinleştirilirse, değişiklikler önce yerel olarak kaydedilir (*Kaydet* düğmesi) ve istek üzerine yüklenir. Ayar devre dışı bırakılırsa, değişiklikler hemen yüklenir (*Yükle* düğmesi).
- **<Translate android="true" ids="use_dev_url"/>** *(Yalnızca Android)*. OSM Notu, POI veya GPS izlerini yüklemeyi test etmek için [openstreetmap.org](http://openstreetmap.org/) yerine [dev.openstreetmap.org](https://dev.openstreetmap.org/) adresini etkinleştirmenizi sağlar. Etkinleştirildiğinde, OpenStreetMap.org'dan otomatik olarak çıkış yaparsınız. Bu ayar, yalnızca *OsmAnd geliştirme eklentisi* etkinleştirildiğinde listede kullanılabilir.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. [*Menü → Yerlerim → OSM düzenlemeleri*](../personal/myplaces.md) öğesini açmak için dokunun. Bu sekme, düzenlenmemiş OSM notlarınızı listeler. Not ile aşağıdaki eylemler kullanılabilir: *Yükle*, *Haritada göster*, *OSM notunu değiştir*, *Sil*. Yüklenen veya silinen notlar artık listede görüntülenmez.

:::note
[OsmAnd Pro](../purchases/android.md#pro-features) aboneliğiniz varsa, OSM'de yapılan değişiklikler bir saat içinde OsmAnd haritanızda görünecektir. [Canlı güncellemelerin](../personal/maps-resources.md#osmand-live) etkinleştirildiğinden emin olun.
:::


### Yetkilendirme {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Haritacılar için OsmAnd canlı](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritacılar için OsmAnd canlı](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Değişiklikleri ve GPX dosyalarını katkıda bulunmak için giriş yapın.

- [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) adresine gidin ve *giriş yapın* veya *kaydolun*.
- OsmAnd uygulamasında *OpenStreetMap'e Giriş Yap* alanına dokunun, ardından *OpenStreetMap ile Oturum Aç* düğmesine dokunun.


### Haritacılar için ücretsiz harita güncellemeleri {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Haritacılar için OsmAnd canlı](@site/static/img/personal/maps/map_updates_mappers_login_andr.png) ![Haritacılar için OsmAnd canlı](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritacılar için OsmAnd canlı](@site/static/img/personal/maps/map_updates_mappers_login_ios.png) ![Haritacılar için OsmAnd canlı](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

<Translate android="true" ids="map_updates_for_mappers"/> ayarı, aktif bir OpenStreetMap katkıda bulunanıysanız **[OsmAnd canlıyı](../personal/maps-resources.md#free-for-osm-mappers)** etkinleştirmenizi sağlar. Bu şekilde, standart aylık güncellemelerin aksine ücretsiz saatlik harita güncellemelerinden yararlanabilirsiniz. OpenStreetMap.org'a aktif katkıda bulunanlar, sınırsız saatlik harita güncellemelerine hak kazanabilirler. Sınırsız aylık ve saatlik harita güncellemelerine uygunluğunuzu kontrol etmek için OpenStreetMap'e giriş yapın.


### OSM Düzenleme Katmanı {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM düzenleme katmanı Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![OSM düzenleme katmanı Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![OSM düzenleme katmanı iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Ana Menü'nün [Haritayı Yapılandır](../map/configure-map-menu.md) bölümünde *OSM notları* (çevrimiçi), *OSM düzenlemeleri*, *Fixme etiketleri*, *Not etiketleri*, *Düşük yakınlaştırmalarda simgeler* gibi OSM değişikliklerinin görüntülenmesini ayrı bir katman olarak etkinleştirebilir veya devre dışı bırakabilirsiniz.


## POI Oluştur / Değiştir {#create--modify-poi}

OpenStreetMap düzenleme eklentisi, haritada [ilgi noktaları veya POI](../map/point-layers-on-map.md#points-of-interest-pois) adı verilen yeni nesneler oluşturmanıza olanak tanır. Yeni bir mağaza, favori bir dönüm noktası, bank veya barınak haritalayarak insanların onları bulmasını sağlayabilirsiniz.

1. Yeni bir POI yerleştirmek için haritaya dokunun veya henüz yüklenmemiş bir POI'ye dokunun.
2. [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions) öğesine dokunun.
3. [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi) öğesini seçin ve adını ve çalışma saatleri, web sitesi vb. diğer bilgileri ekleyin. Yüklenmemiş bir POI seçtiğinizde, *POI Oluştur* *POI Değiştir* olarak değişir.
4. [Çevrimdışı düzenleme](#settings) ayarlarına bağlı olarak, verileri yerel olarak kaydedebilir veya [yükleyebilirsiniz](../map/map-context-menu#-upload-poi--osm-note).


### Etiket Ekle {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI etiketi ekle Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![POI etiketi ekle Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI etiketi ekle ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

POI'ye kolayca OSM [etiketleri](https://wiki.openstreetmap.org/wiki/Tags) ekleyebilirsiniz. Arama çubuğuna birkaç karakter girdiğinizde, program olası etiketleri önerir.

**Çevrimdışı değişiklikler.**
*Yerlerim → OSM Düzenlemeleri* bölümünde POI'leri görüntüleyebilir, OSM'ye yükleyebilir veya silebilirsiniz. Ayrıca OSM POI değişikliklerinizi bir [OSC dosyasına](https://wiki.openstreetmap.org/wiki/OsmChange) aktarabilir ve [JOSM'ye](https://wiki.openstreetmap.org/wiki/JOSM) aktarabilirsiniz.

### Desteklenmeyen POI türleri ekle {#add-unsupported-poi-types}

*Gelişmiş* sekmesinde, belirli göreviniz için yararlı olabilecek desteklenmeyen POI türleri ekleyebilirsiniz. Bu seçenek, POI verilerini manuel olarak girmenize ve böylece uygulamanın işlevselliğini genişletmenize olanak tanır.

Ekleyebileceğiniz desteklenmeyen POI türlerine bir örnek *amenity=freeshops*'tur. Bu tür, ücretsiz mağazaları veya ücretsiz ürünler sağlayan yerleri işaretlemek istiyorsanız yararlı olabilir.

Desteklenmeyen POI türlerini eklemek için şu adımları izleyin:

1. *Gelişmiş* sekmesini açın.
2. *POI Türü*'ne dokunun.
3. Uygun alanlara *amenity* anahtarını ve *freeshops* değerini girin.
4. Bu POI için gerekli diğer verileri doldurun.
5. Yeni POI'yi veritabanınıza eklemek için *Etiket Ekle*'ye dokunun.

Desteklenmeyen POI türlerini eklerken, uygulamanın doğru çalışmasını ve bilgilerin sonraki işlenmesini sağlamak için verilerin doğru girildiğinden emin olmanın önemli olduğunu unutmayın.


## OSM Notu Oluştur / Değiştir {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![OSM Notu Aç Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png) ![OSM Notu Aç Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*

![OSM Notu Aç iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

OSM notlarını düzenlemek, yorumlamak veya kapatmak için, [Haritayı Yapılandır menüsünde](../map/configure-map-menu.md) haritada görüntülenmelerini etkinleştirin.

- OSM Notları özelliği, haritaya notlar eklemenizi sağlar. Bu notlarda, OpenStreetMap verilerindeki hataları açıklayabilir veya eksik bilgiler hakkında yazabilirsiniz. Siz ve diğer kullanıcılar notlarınıza yorum bırakabilirsiniz.
- Diğer kullanıcıların sorularını veya sorunlarını kontrol ederek, yorum yaparak ve ardından çözülen notları kapatarak yardımcı olabilirsiniz.
- OpenStreetMap Notları hakkında daha fazla bilgiyi [buradan](https://wiki.openstreetmap.org/wiki/Notes) okuyun.

Not oluşturmak için OpenStreetMap.org'a giriş yapmanıza gerek yoktur, anonim olarak gönderebilirsiniz.

- Yeni OSM notunun yerleştirileceği haritaya dokunun (veya yüklenmemiş bir nota dokunun) ve [Eylemler](../map/map-context-menu.md#actions) öğesini seçin.
- Mevcut bir nota veya yüklenmemiş bir nota bilgi eklemek, bir yorumu düzenlemek veya bir notu kapatmak isterseniz, haritadaki OSM notuna dokunun ve [gerekli eylemi](../map/map-context-menu.md#-comment--close-osm-note) seçin.
- Çevrimiçi olduğunuz anda değişiklikleri yükleyebilirsiniz. Yüklenmeden önce değişiklikleri geri alabilirsiniz.

:::info
Yüklenen OSM Notları, çevrimdışı modda OsmAnd haritalarında görünmez.
:::


## GPS İzi {#gps-track}

Kaydettiğiniz GPS izleri şunlar için yararlıdır:

- **Haritacılar**. İzler, her türlü yolu haritalamak için kullanılabilir.
- **Navigasyon**. Yüklediğiniz GPX dosya verilerine dayanarak, navigasyon uygulamaları ve özel cihazlar izleri hesaplayabilir.
- [OpenStreetMap tabanlı haritalarda](https://wiki.openstreetmap.org/wiki/Track_drawing_websites) kaydettiğiniz izler ve rotalar hakkında **bilgi paylaşmak**.

:::info NOT
İzleriniz bir saat içinde [OSM izlerine](https://www.openstreetmap.org/traces) eklenecek ve burada sizin ve başkalarının görüntülemesi, araması ve kullanması için kullanılabilir olacaktır.
:::


### GPS izini yükle {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OpenStretMap düzenleme eklentisi GPX'ten OSM'ye Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OpenStretMap düzenleme eklentisi GPX'ten OSM'ye iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

[GPS izini yüklemek](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks) için aşağıdaki adımları izleyin:

- [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesinde*](../personal/tracks/manage-tracks.md) gerekli izi bulun.
- İz adının yanındaki *üç nokta menüsüne* dokunun ve *Dışa Aktar*'ı seçin.

**Ayarlar:**

- **<Translate android="true" ids="shared_string_description"/>**. İze bir açıklama eklemenizi sağlar. Açıklama, seçilen tüm izler için geçerlidir. Alana hiçbir şey girmezseniz, her ayrı iz için iz adları açıklama olarak kullanılır.
- **<Translate android="true" ids="gpx_tags_txt"/>**. Ayarlar bölümündeki bu öğe, izi tanımlamak için etiketler eklemenizi sağlar. Varsayılan etiket "osmand"dır, virgülle ayrılmış ek etiketler girebilirsiniz.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. OSM kullanıcıları için iz görünürlüğü:
   - *Genel*, izin herkese açık olduğu ve GPS izlerinizde, GPS iz listelerinde ve zaman damgalı iz listelerinde ham biçimde görüntülendiği anlamına gelir. API aracılığıyla iletilen veriler, iz sayfanızla referans alınmaz. Genel GPS API aracılığıyla iz noktası zaman damgaları kullanılamaz ve iz noktaları kronolojik olarak sıralanmaz.
   - *Tanımlanabilir*, izin GPS iz noktalarınızda ve genel GPS iz listelerinde herkese açık olarak görüntüleneceği anlamına gelir, bu da diğer kullanıcıların ham izi indirebileceği ve kullanıcı adınızla ilişkilendirebileceği anlamına gelir. GPS API'den iz noktaları API aracılığıyla geçen genel zaman damgalı iz noktaları verileri, orijinal iz sayfanıza bağlanacaktır.
   - *İzlenebilir*, izin genel listelerde görüntülenmediği, ancak ondan işlenmiş zaman damgalı iz noktalarının (doğrudan sizinle bağlantılı olamaz) genel GPS API aracılığıyla yüklendiği anlamına gelir.
   - *Özel*, izin genel listelerde görüntülenmediği, ancak ondan kronolojik olmayan sıradaki iz noktalarının zaman damgası olmadan genel GPS API aracılığıyla kullanılabileceği anlamına gelir.
- **<Translate android="true" ids="login_account"/>** - [OSM hesabı](https://www.openstreetmap.org/login).

:::info
OSM'ye yüklemek için birden fazla iz seçebilirsiniz. Bunu yapmak için ekranın altındaki *OpenStreetMap'e Yükle* simgesine dokunun, onay kutusunu kullanarak izleri seçin, *Yükle*'ye ve ardından *Devam Et*'e dokunun.
:::

### OBF dosyası oluştur {#generate-obf-file}

Büyük bir GPX iz veritabanınız varsa [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) ile bir OBF dosyası oluşturabilirsiniz. Bu, osmand.net'ten 'gpsies' etiketli izlerin bir koleksiyonu, OpenStreetMap'ten indirilen izlerin bir koleksiyonu veya kendi koleksiyonunuzdur.


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Mayıs 2024*