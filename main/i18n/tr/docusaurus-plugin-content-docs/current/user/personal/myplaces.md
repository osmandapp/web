---
source-hash: 566a34a786c324ed799dd4550956785a23a8faec4a926d7a4a840c0d7ef44518
sidebar_position: 6
title: Yerlerim
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


<InfoIncompleteArticle/>

## Genel Bakış {#overview}

**Yerlerim**, OsmAnd uygulamasında tüm kişisel verileri yönetmek ve özelleştirmek için merkezi bir merkezdir. Bu bölümü, önemli veya sık ziyaret edilen olarak işaretlenmiş [Favori noktaları](#favorites) düzenlemek için kullanabilirsiniz. [Parkurlar](#tracks) sekmesi, rotalarınızın ve seyahatlerinizin ayrıntılı bir geçmişini tutmanıza yardımcı olmak için GPX dosyalarını görüntülemenize, içe aktarmanıza, kaydetmenize ve oluşturmanıza olanak tanır. Ayrıca [OpenStreetMap Düzenlemelerinizi](#openstreetmap-edits) yönetebilir, harita iyileştirmelerine ve güncellemelerine katkıda bulunmayı kolaylaştırabilirsiniz. [Sesli / Görüntülü Notlar](#audiovideo-notes) eklentisi ve widget'ları, Android kullanıcılarının belirli konumlarla ilgili multimedya notları oluşturmasına ve kaydetmesine olanak tanıyarak seyahatlerine bağlam ekler.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu"/> → Yerlerim*

![Yerlerim android](@site/static/img/personal/my_places_android.png) ![Yerlerim menüsü Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate android="true" ids="shared_string_menu"/> → Yerlerim*

![Yerlerim ios](@site/static/img/personal/my_places_ios.png) ![Yerlerim menüsü iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Verileri içe ve dışa aktarma***](../personal/import-export.md):

    *Yerlerim* menüsünde depolanan tüm veriler, cihazınızdaki uygulamalar aracılığıyla özel bir `.osf` formatı kullanılarak taşınabilir. Bu işlem, verileri cihazlar arasında kaydetmeyi ve aktarmayı basitleştirir ve diğer OsmAnd kullanıcılarıyla paylaşmanıza olanak tanır.

    **Şuraya git** *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* bölümüne gidin ve verileri dışa veya içe aktarmak isteyip istemediğinizi seçin. *Dışa aktar* seçeneğini seçerseniz, *Yerlerim grubunu* genişletmeniz ve gerekli verileri işaretlemeniz gerekir.

- [***Haritalar ve Kaynaklar***](../personal/maps-resources.md):

    OsmAnd uygulamasının *Haritalar ve Kaynaklar* *Ana Menü* öğesi, *Yerlerim* bölümündeki veri yönetimine erişim sağlar. [*Yerel*](../personal/maps-resources.md#local) sekmesi, cihazınızdaki tüm mevcut OsmAnd verilerinin ne kadar yer kapladığını ve özellikle *Yerlerim* bölümünü gösterir. Verileriniz hakkında ayrıntılı bilgi almak ve yönetimine erişmek için kullanabilirsiniz. Bölüm yalnızca verileri indirilmiş öğeleri içerebilir.

    **Şuraya git** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Verilerinizi kontrol edin ve yönetin.


## Favoriler {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoriler menüsü android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriler menüsü iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Favoriler**, önemli veya sık ziyaret edilen konumları işaretlemenizi sağlar. Bu favori noktalar klasörler halinde düzenlenir ve farklı renkler, şekiller ve simgelerle özelleştirilebilir. **Yerlerim** menüsü aracılığıyla herhangi bir favori yere tekrar tekrar arama yapmaya gerek kalmadan hızlıca gidebilirsiniz.


1. ***Eylem düğmeleri***. Yerlerim ekranının altındaki *Eylem düğmeleri*, favorilerinizle birlikte klasör listesini yönetmenize olanak tanır:

    - **İçe Aktar** (*Ekle* düğmesi) — Cihazınızın depolama alanından *favori.gpx* dosyalarını içe aktarmanıza olanak tanır.

    - **Dışa Aktar** — Favori noktalarınızı harici kullanım veya yedekleme için bir *favorites.gpx* dosyası olarak kaydedin.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Yalnızca Android*) — Herhangi bir favori noktayı veya bir klasördeki tüm favori noktaları [Harita işaretleri listesine](../personal/markers.md) ekleyebilirsiniz.

    - **Sil** (*iOS'ta bu seçenek Düzenle menüsünde bulunur*) — Favori noktaları tek tek veya seçilen favori klasörlerini ve içerdikleri tüm noktaları siler.

2. ***Üç nokta menüsü*** (*Android*) ve ***uzun basma*** (*iOS*). Her klasörün yanındaki *üç nokta* menüsünü veya klasöre *uzun basmayı* kullanarak favori gruplarını yönetin:

    <Tabs groupId="operating-systems" queryString="current-os">

    <TabItem value="android" label="Android">

    ![Üç nokta menüsü](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Favoriler menüsü iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — Seçilen klasörün adını değiştirmek için bu seçeneği kullanın.

    - **<Translate android="true" ids="change_default_appearance"/>** — Klasördeki favori noktaların simgelerini, renklerini veya etiketlerini değiştirerek haritada nasıl göründüklerini özelleştirin.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** veya **Haritada gizle** — Klasördeki favori noktaları haritada göstermek veya gizlemek için bu seçeneği açıp kapatın.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** veya **Harita işaretlerinden kaldır** (*Yalnızca Android*) — Kolay başvuru için klasördeki tüm favori noktaları *Harita işaretleri listesine* ekleyin veya gerektiğinde kaldırın.

    - **<Translate android="true" ids="shared_string_share"/>** — Klasördeki favori noktaları bir *Favorites.gpx* dosyası olarak dışa aktararak paylaşın, böylece verilerinizi kolayca aktarabilir veya yedekleyebilirsiniz.

    - **<Translate android="true" ids="shared_string_delete"/>** — Seçilen favori klasörünü ve içindeki tüm noktaları kalıcı olarak silin.

Daha ayrıntılı talimatlar için [Favoriler](../personal/favorites.md) makalesine bakın.


## Parkurlar {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesi*

![Android'de parkurlarla Yerlerim](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![iOS'ta parkurlarla Yerlerim](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Parkurlar**, OsmAnd içinde rotaları kaydetmek, oluşturmak ve yönetmek için güçlü araçlar sunar. [Navigasyon](../navigation/setup/gpx-navigation.md), [seyahat kaydı](../plugins/trip-recording.md) veya harici GPX dosyalarını [entegre etmek](../personal/tracks/manage-tracks.md#import) için kullanılabilirler.

- **Parkurlar sekmesi** — Kaydedilen, oluşturulan veya içe aktarılan tüm parkurlar, *Yerlerim* klasöründeki *Parkurlar* sekmesinde otomatik olarak görüntülenir. Klasörlere göre düzenlenirler veya altlarında bir listede gösterilirler.

- **Bir parkur oluşturma** — **Parkurlar Sekmesi** veya [Seyahat kaydı eklentisi](../plugins/trip-recording.md) kullanarak kayda başlayın.

- **Görüntüleme ve Düzenleme** — *Yerlerim* aracılığıyla parkur listesine erişin ve [klasörler](../personal/tracks/manage-tracks.md#track-folder) için *üç nokta menüsü* veya [tek parkur](../personal/tracks/manage-tracks.md#single-track-menu) menüsü kullanarak bunları yönetin.

- **Yönetme** — Belirli parametrelere göre parkurları düzenlemek için [Filtre](../personal/tracks/smart-folder.md#filter) ve [Akıllı klasör](../personal/tracks/smart-folder.md#smart-folder) araçlarını kullanın.

- **Görünüm ve Analiz** — Parkurların görsel stilini [özelleştirin](../map/tracks/appearance.md) ve OsmAnd'ın [Rota Planla](../plan-route/create-route.md) aracını kullanarak [analiz edin](../map/tracks/index.md#analyze-track-on-map).

Kapsamlı rehberlik için [Parkurları Yönet](../personal/tracks/manage-tracks.md) makalesine bakın.


## OpenStreetMap Düzenlemeleri {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Paylaş](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Paylaş](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

OsmAnd'ın **OpenStreetMap Düzenlemeleri** özelliği, harita verilerine ekleme, değiştirme veya yorum yapma yoluyla küresel haritalama topluluğuna katkıda bulunmanızı sağlar.

1. ***Eylem düğmeleri***. Notlarınızın listesini yönetmek için Yerlerim ekranındaki *eylem düğmelerini* kullanabilirsiniz:

    ![Paylaş](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Dosyaları OSM'ye yükle** — Notlarınızı ve verilerinizi OpenStreetMap'e göndererek topluluğa katkıda bulunun.

    - **Dışa Aktar** (*Yalnızca Android*) — Notlarınızı ve POI'lerinizi harici kullanım veya yedekleme için dosyalar olarak kaydedin, OSM notları, POI'ler veya tüm veriler birleştirilmiş olarak dışa aktarma seçenekleriyle.

    - **Sil** — Seçilen öğeleri listenizden kalıcı olarak kaldırın.


2. ***Üç nokta menüsü***. Her notun yanındaki *üç nokta menüsünü* kullanarak belirli POI'leri veya notları yönetebilirsiniz:

    ![Üç nokta menüsü](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Düzenlemeyi OSM'ye yükle** — Değişikliklerinizi veya düzenlemelerinizi OpenStreetMap'e göndererek başkalarının görmesini sağlayın.

    - **Haritada göster** — POI'nin veya notun belirli konumunu haritada görüntüleyin.

    - **OSM değişikliğini/notunu değiştir** — OpenStreetMap'e zaten eklenmiş olan POI veya nota daha fazla düzenleme yapın.

    - **Sil** — Seçilen POI'yi veya notu listenizden kaldırın.

Adım adım talimatlar için [OSM Düzenleme eklentisine](../plugins/osm-editing.md) bakın.


## Sesli/Görüntülü Notlar {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Sesli video eklentisi Yerlerim menüsü Üç eylem](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)

**Sesli/Görüntülü Notlar eklentisi**, belirli harita konumlarına bağlı multimedya notları oluşturmanıza olanak tanır. Bu notlar **Yerlerim** altında **A/V Notları Sekmesi** altında depolanır.

1. ***Eylem düğmeleri***. Notlarınızın listesini yönetmek için Yerlerim ekranının altındaki *eylem düğmelerini* kullanabilirsiniz:

    ![Paylaş](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Sıralama yöntemleri seçeneğini açar, *Türe göre* veya *Tarihe göre*, ve seçildiğinde listeyi buna göre sıralar.

    - **<Translate android="true" ids="shared_string_share"/>** — Yol noktaları olarak GPX dosyalarına eklenenler de dahil olmak üzere tüm notların bir kontrol listesini görüntüler. Önce gerekli notlar işaretlenir, ardından ekranın sağ üst köşesindeki *Paylaş* simgesi mevcut paylaşım seçeneklerini önerir ve son olarak bu notlar seçilen seçeneğe göre kullanılabilir hale gelir.

    - **GPX yol noktalarıyla paylaş** — *Yerlerim* menüsünde yol noktaları olarak seçilen notları, *A/V notları* sekmesi ekranının altındaki **Paylaş** düğmesini kullanarak onlara [GPX verileri](../plugins/audio-video-notes.md#share-with-gpx-waypoints) ekleyerek paylaşabilirsiniz.

    - **<Translate android="true" ids="shared_string_delete"/>** — Yalnızca ses, fotoğraf ve video notlarının bir kontrol listesini görüntüler. Önce gereksiz notları işaretleyin, ardından ekranın sağ üst köşesindeki *Sil* simgesine dokunun, onayladıktan sonra seçilen notlar kalıcı olarak silinecektir.


2. ***Üç nokta menüsü***. Her notun yanındaki *üç nokta menüsünü* kullanarak belirli ses, video veya fotoğraf notlarını yönetebilirsiniz:

    ![Üç nokta menüsü](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Seçilen ses, video veya fotoğraf notunu doğrudan görüntüler veya dinler.

    - **<Translate android="true" ids="shared_string_share"/>** — Notu çeşitli uygulamalar veya platformlar aracılığıyla başkalarıyla paylaşır.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Notun ilgili konumunu ve [Bağlam menüsünü](../plugins/audio-video-notes#actions-in-map-context-menu) haritada görüntüler.

    - **<Translate android="true" ids="shared_string_rename"/>** — Notun adını daha açıklayıcı veya ilgili bir şeyle değiştirin.

    - **<Translate android="true" ids="shared_string_delete"/>** — Seçilen notlar koleksiyonunuzdan kalıcı olarak silinir.

Daha fazla bilgi için [Sesli/Görüntülü Notlar eklentisi](../plugins/audio-video-notes.md) sayfasına bakın.


<!--
### GPX Yol Noktalarıyla Paylaş {#share-with-gpx-waypoints}

![Paylaş](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

*Yerlerim* menüsünde yol noktaları olarak seçilen notları, *A/V notları* sekmesi ekranının altındaki **Paylaş** düğmesini kullanarak onlara [GPX verileri](../plugins/audio-video-notes.md#share-with-gpx-waypoints) ekleyerek paylaşabilirsiniz.

### Tek Notu Yönet {#manage-single-note}

![Üç nokta menüsü](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

Her notun yanındaki **üç nokta menüsünü** kullanarak belirli ses, video veya fotoğraf notlarını yönetebilirsiniz:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Seçilen ses, video veya fotoğraf notunu doğrudan görüntüler veya dinler.
- **<Translate android="true" ids="shared_string_share"/>**. Notu çeşitli uygulamalar veya platformlar aracılığıyla başkalarıyla paylaşır.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Notun ilgili konumunu ve [Bağlam menüsünü](../plugins/audio-video-notes#actions-in-map-context-menu) haritada görüntüler.
- **<Translate android="true" ids="shared_string_rename"/>**. Notun adını daha açıklayıcı veya ilgili bir şeyle değiştirin.
- **<Translate android="true" ids="shared_string_delete"/>**. Seçilen notlar koleksiyonunuzdan kalıcı olarak silinir.
-->

## İlgili Makaleler {#related-articles}

- [Parkurları Yönet](../personal/tracks/manage-tracks.md#import--export-track)
- [Arama Geçmişi](../search/search-history.md#export-and-share)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)

> *Son güncelleme: Mart 2025*