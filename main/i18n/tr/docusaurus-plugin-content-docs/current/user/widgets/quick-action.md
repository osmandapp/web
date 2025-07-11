---
source-hash: 5a6d57c30dcc7cffb0562681b9341b0e7b62aafd5fd56183371bd8098893001c
sidebar_position: 7
title: Hızlı Eylem (Özel düğmeler)
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

Hızlı Eylem pencere öğesi, ek ayarları açmaya gerek kalmadan temel işlevlere veya eylemlere hızlı erişim sağlayan etkileşimli bir kullanıcı arayüzü öğesidir. Bu pencere öğesi ana harita ekranına yerleştirilir ve uygulamayla etkileşimi basitleştirip hızlandırmanıza olanak tanıyarak daha kullanışlı ve verimli hale getirir.

![Hızlı eylem pencere öğesi](@site/static/img/widgets/quick_action_widget.png)


## Hızlı Eylem Pencere Öğesi {#quick-action-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Hızlı eylem pencere öğesi_android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Hızlı eylem pencere öğesi_ios](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

Hızlı Eylem düğmesini kullanmak için önce bu pencere öğesini etkinleştirmeniz gerekir.

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### Eylem Ekle ve Sil {#add-and-delete-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Sil'e dokunun (Sağ üst köşedeki Çöp Kutusu simgesi) → Eylemleri seçin*

![Hızlı eylem pencere öğesi_android_add](@site/static/img/widgets/quick_action_widget_andr.png) ![Özel düğme Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Düzenle'ye dokunun (Sağ üst köşedeki Kalem simgesi) → Eylemleri seçin*

![Hızlı eylem pencere öğesi_ios_add](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Özel düğme Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Tüm eylemler **Eylem Ekle** menüsünde düzenlenir ve türe göre gruplandırılır. Eylemlerin ve açıklamalarının tam listesi [Eylem türleri](#action-types) bölümünde bulunabilir.

Hızlı eylem düğmesine bir veya daha fazla [eylem](#action-types) atayabilirsiniz. Eylem eklemenin iki yolu vardır.

- **Yapılandırma ekranında**. Listeden bir düğme seçin ve "**＋**" düğmesine dokunun. Önce [eylem türünü](#action-types) seçmeniz, ardından adını ve [parametrelerini](#actions-in-loop) değiştirmeniz gerekir.
- **Hızlı eylem düğme panelinde**. Harita ekranındaki *Hızlı Eylem düğmesine* dokunun. Listenin sonunda, paneldeki en son ekranda "**＋**" *Eylem Ekle* kutusu bulunur. Buna dokunun ve [türler listesinden](#action-types) bir eylem seçin.


:::note

- Her eylemin benzersiz bir adı olmalıdır.
- Ekran 1, Ekran 2 vb. sayısal olarak etiketlenen ekranlar, listedeki eylem sayısı 6 öğeye yükseldiğinde otomatik olarak oluşturulur.

:::


### Eylem Parametreleri {#action-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Hızlı eylem pencere öğesi_android_order](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Hızlı eylem pencere öğesi_ios_order](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

Hızlı eylem düğmesine atanan eylemler ekranlarda gruplandırılır. Bu eylem grupları, haritadaki düğmeye dokunduğunuzda açılır. Eylem listesi *6 öğeyi* aştığında yeni ekranlar otomatik olarak oluşturulur. Aşağıdaki adımları izleyerek eylemleri tercihlerinize göre yeniden düzenleyebilirsiniz:

**Android için**.

1. Yapılandırma ekranı aracılığıyla:

    - *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>* adresine gidin.
    - Eylemleri yeniden düzenlemek için iki dikey çizgi simgesinde *Basılı Tut ve Sürükle* özelliğini kullanın.

2. Hızlı eylem menüsü aracılığıyla:

    - Hızlı eylem menüsünü açın, ardından *Eylem Ekle* üzerine uzun dokunun.
    - Eylemleri yeniden düzenlemek için iki dikey çizgi simgesinde *Basılı Tut ve Sürükle* özelliğini kullanın.

**iOS için**.

- *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>* adresine gidin.
- *Düzenle*'ye (kalem simgesi) dokunun, ardından eylemleri yeniden düzenlemek için üç dikey çizgi simgesinde *Basılı Tut ve Sürükle* özelliğini kullanın.

#### Döngüdeki Eylemler {#actions-in-loop}

![Özel düğme Android](@site/static/img/widgets/actions_in_loop_andr.png)

Bazı eylemler için, her dokunuşta bir daire içinde değişecek bir katman listesi atayabilirsiniz: *Harita kaynağı*, *Harita stili*, *Katman*, *Alt katman*, *Arazi renk şeması*, *Profil ekle*.

Düğme, tek bir katman veya dokunulduğunda veya ara bir iletişim kutusuyla dairesel olarak değişen bir katman listesi atamanıza olanak tanır.

- **Ara bir iletişim kutusu göster**. Harita listesiyle bir iletişim kutusu görüntüler.
- **Ara bir iletişim kutusu gösterme**. Harita kaynakları tanımlı bir sırayla değişir.


### Haritadaki Konumu Değiştir {#change-position-on-the-map}

*Hızlı Eylem* pencere öğesi, ilk etkinleştirdiğinizde harita ekranının alt köşesinde görünür. Pencere öğesini basılı tutarak ve sürükleyerek ekranın herhangi bir yerine taşıyabilirsiniz. Düğmelerin harita ekranına hassas ve doğru yerleştirilmesi için, sürüklendiğinde otomatik olarak en yakın görünmez ızgara konumuna hizalanırlar.

- **İlk görünüm**. Varsayılan olarak, hızlı eylem pencere öğesi harita arayüzünün sağ alt köşesine yerleştirilir.

    ![Hızlı eylem pencere öğesi_görünüm](@site/static/img/widgets/quick_action_widget_view.png)

- **Pencere öğesini taşı**. Pencere öğesine uzun basıp sürükleyerek, otomatik sütun ve satır hizalamasıyla ekran üzerinde yeniden konumlandırabilirsiniz.

    ![Hızlı eylem pencere öğesi_dokunma](@site/static/img/widgets/quick_action_widget_tap.png)

- **Yeni yerleşim**. Taşındıktan sonra, pencere öğesi manuel olarak tekrar ayarlanana kadar harita ekranındaki yeni konumunda kalacaktır.

    ![Hızlı eylem pencere öğesi_taşı](@site/static/img/widgets/quick_action_widget_move.png)

- **Birden fazla [Özel düğme](#custom-buttons)**. Harita ekranına birden fazla hızlı eylem düğmesi ekleyebilirsiniz. Bu düğmeler de aynı sürükle ve bırak yöntemi kullanılarak ayrı ayrı özelleştirilebilir ve yeniden konumlandırılabilir.

    ![Hızlı eylem pencere öğesi_taşı](@site/static/img/widgets/quick_action_widget_multi.png)


### Özel düğmeler {#custom-buttons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*

![Özel düğme Android](@site/static/img/widgets/custom_button_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*

![Özel düğme Android](@site/static/img/widgets/custom_button_ios.png)

</TabItem>

</Tabs>

**Özel düğmeler**, *Hızlı Eylem* düğmesiyle aynı işlevi gören haritadaki ek düğmelerdir. Bir veya daha fazla eylemle bir düğme oluşturabilir ve bunu harita ekranında görüntüleyebilirsiniz. Özel düğmeler *Yapılandırma ekranı → Düğmeler → Özel düğmeler* listesinde bulunur. Her düğmenin profile bağımsız bir eylem listesi vardır ve benzersiz bir ***Adı*** olmalıdır, ancak bir düğme her **profil** için ayrı ayrı açılıp kapatılabilir.

Mevcut tüm [eylemler](#action-types), varsayılan hızlı eyleme uygulanabileceklerle aynıdır. Özel düğmeler, seçilen eylemi ek bir menüde gezinmeye gerek kalmadan dokunulduğunda hemen uygulayan ***Tek eylemli*** düğmeler olarak yapılandırılabilir.


### Hızlı Eylem Düğmesi Görünümü {#quick-action-button-appearance}

<InfoAndroidOnly/>

![Hızlı eylem düğmesi görünümü](@site/static/img/widgets/qa_button_appearance_andr.png)

Hızlı Eylem düğmelerinin görünümünü şuradan değiştirebilirsiniz: *Menü → Ekranı yapılandır → Özel düğmeler → Hızlı eylem → üç nokta menüsü → Görünüm*. Bu ayar, düğmenin boyutunu, şeklini, simgesini ve arka plan opaklığını kişiselleştirme seçenekleri sunarak düğmelerin ekranınızda nasıl göründüğü üzerinde daha fazla kontrol sağlar.

Ayrıntılı özelleştirme ayarları için, her düğmenin görünümünü tercihlerinize göre nasıl ince ayarlayacağınızı öğrenebileceğiniz [Ekranı Yapılandır](../widgets/configure-screen.md#button-appearance) makalesine bakın.


## Eylem Türleri {#action-types}

### Haritayı Yapılandır {#configure-map}

| Eylem | Açıklama |
|:-------------|:-------------|
| Göster / Gizle <br/> [**Rotalar**](../map/vector-maps.md#routes) | Görüntülerini etkinleştirmek veya devre dışı bırakmak için rota türlerini seçebilirsiniz. <br/> Bazı rotaların ek ayarları vardır. Varsayılan olarak, [Haritayı Yapılandır](../map/configure-map-menu.md) menüsünde hiçbir şey seçmediyseniz, listeden ilk rota türü atanır, aksi takdirde seçtiğiniz bir tür atanır. Daha fazlasını [Rotalar](../map/routes.md) makalesinde okuyabilirsiniz. <br/> - ***Bisiklet rotaları*** &nbsp;(*Rota*, *Düğüm ağları*) <br/> - ***Dağ bisikleti rotaları*** &nbsp;(*MTB ölçeği*, *IMBA*) <br/> - ***Yürüyüş rotaları*** &nbsp;(*OSMC*, *Ağ bağlantısı*, *Düğüm ağları*) <br/> - ***Yürüyüş parkurları zorluk derecesi*** &nbsp;(*SAC ölçeği*, *CAI ölçeği*) <br/> - ***Kayak pistleri*** <br/> - ***At rotaları*** <br/> - ***Akarsu sporları*** <br/> - ***Koşu rotaları*** <br/> - ***Fitness parkurları*** <br/> - ***Seyahat rotaları*** &nbsp;(*Parkurlar*, *Seyahat kitapları*, *Noktalar*) <br/> |
| Göster / Gizle <br/> [**Topografya katmanları**](../plugins/topography.md#overview) | Tüm topografya verileri ayrı harita katmanları olarak sunulur. Bu katmanların görünürlüğünü Hızlı Eylem ile hızlıca değiştirebilirsiniz. <br/> - ***Kontur çizgileri*** <br/> - ***Arazi*** &nbsp;(*[Haritayı Yapılandır](../map/configure-map-menu.md) menüsünde seçilen katmana bağlı olarak*, *Tepe gölgesi*, *Eğim* veya *Rakım* *görüntülenecektir.*) |
| Değiştir <br/> [**Arazi renk şeması**](../plugins/topography.md#modify-color-scheme) | Düğmeye dokunduğunuzda değişecek mevcut paletler listesinden bir veya daha fazla palet seçmenize olanak tanır. |
| Göster / Gizle <br/> [**Hava durumu katmanları**](../plugins/weather.md#weather-layers) | Tüm hava durumu verileri ayrı harita katmanları olarak sunulur. Hızlı Eylem ile bu katmanların haritadaki görünürlüğünü değiştirmek için hızlı erişim sağlayabilirsiniz. <br/> - ***Yağış katmanı*** <br/> - ***Bulut katmanı*** <br/> - ***Basınç katmanı*** <br/> - ***Rüzgar katmanı*** <br/> - ***Sıcaklık katmanı*** |
| Aç <br/> [**Hava durumu ekranı**](../plugins/weather.md) <br /> *Yalnızca Android* | Ayrıntılı bilgi içeren [*Hava durumu* tahmin ekranını](../plugins/weather.md#weather-forecast-screen) açar. |
| Göster / Gizle <br/> [**Favoriler**](../personal/favorites.md#view-on-the-map) | Favori noktaları haritada göster veya gizle. |
| Göster / Gizle <br/> [**Parkurlar**](../personal/tracks/manage-tracks.md#track-menu) | Haritadaki son görünür parkurları göster veya gizle. |
| Göster / Gizle <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Seçilen kategorilerle POI katmanlarının haritada görüntülenmesini etkinleştirin veya devre dışı bırakın.<br/>Birden fazla POI kategorisi seçebilirsiniz. Eylem, Hızlı Eylemler kullanılmadan Yapılandırma Haritası'ndan seçilen POI kategorilerini değiştirir. |
| Değiştir <br/> [**Harita modu**](../map/vector-maps.md#map-mode) | Gündüz ve gece modları arasında geçiş yapmak için hızlı erişim. |
| Değiştir <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | Düğme, tek bir harita kaynağı veya dokunulduğunda veya ara bir iletişim kutusuyla dairesel olarak değişen bir kaynak listesi atamanıza olanak tanır. <br/> - *Ara bir iletişim kutusu göster*. Harita listesiyle bir iletişim kutusu görüntüler. <br/> - *Ara bir iletişim kutusu gösterme*. Harita kaynakları tanımlı bir sırayla değişir. <br/> - *Görüntülenen Ad* - *Harita kaynağı* >. Harita adından sonraki ">" işareti, o anda hangi harita kaynağının seçili olduğunu gösterir. <br/> - *Görüntülenen Ad* - > *Sonraki harita kaynağı*. Harita adından önceki ">" işareti, eylem yürütülürse bir sonraki seçilen harita kaynağının ne olacağını gösterir. <br/> - *Not*. OsmAnd'da harita kaynaklarını değiştirmek için, birden fazla harita kaynağı arasında geçiş yapmanızı sağlayan tek bir hızlı eylem ayarlayabilir veya her biri belirli bir harita kaynağı için birkaç ayrı hızlı eylem oluşturabilirsiniz. |
| Göster / Gizle <br /> [**Toplu taşıma**](../map/vector-maps.md#transport) | Toplu taşıma harita katmanını etkinleştirin veya devre dışı bırakın <br /> - *Taşıma türü*. İlk dokunuşta, *Toplu taşıma durakları*, *Otobüs, troleybüs ve servis güzergahları*, *Tramvay ve tren güzergahları*, *Metro güzergahları* dahil olmak üzere bir veya daha fazla taşıma türü seçebilirsiniz. |
| Değiştir <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Harita katmanı olarak bir harita kaynakları listesi oluşturun ve bunlar arasında geçiş yapın. <br /> - *Not*. OsmAnd'da harita katmanlarını değiştirmek için, birden fazla harita katmanı arasında geçiş yapmanızı sağlayan tek bir hızlı eylem ayarlayabilir veya her biri belirli bir harita katmanı için birkaç ayrı hızlı eylem oluşturabilirsiniz. |
| Değiştir <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Harita alt katmanı olarak bir harita kaynakları listesi oluşturun ve bunlar arasında geçiş yapın. <br /> - *Not*. OsmAnd'da harita katmanlarını değiştirmek için, birden fazla harita alt katmanı arasında geçiş yapmanızı sağlayan tek bir hızlı eylem ayarlayabilir veya her biri belirli bir harita alt katmanı için birkaç ayrı hızlı eylem oluşturabilirsiniz. |
| Değiştir <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Vektör haritaları için bir harita stilleri listesi oluşturun ve bunlar arasında geçiş yapın. <br /> - *Not*. OsmAnd'da harita stillerini değiştirmek için, birden fazla harita katmanı arasında geçiş yapmanızı sağlayan tek bir hızlı eylem ayarlayabilir veya her biri belirli bir harita stili için birkaç ayrı hızlı eylem oluşturabilirsiniz. |
| Göster / Gizle <br/> [**Mapillary katmanı**](../plugins/mapillary.md) | Mapillary tarafından sağlanan sokak seviyesi görüntüleriyle harita katmanlarını görüntülemenizi sağlar. |
| Göster / Gizle <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | Tek bir düğmeye dokunarak haritadaki tüm OSM notlarını görüntülemeyi veya gizlemeyi seçebilirsiniz. |


### Arayüz {#interface}

| Eylem | Açıklama |
|:-------------|:-------------|
| Gezin <br/> **Önceki ekran** | Önceki ekrana gitmek için bir geçiş. |
| Göster / Gizle <br/> [**Navigasyon görünümü**](../navigation/setup/route-navigation.md) | Navigasyon ekranı görünümünün görünürlüğünü değiştirir. |
| Göster / Gizle <br/> [**Arama görünümü**](../search/search-all.md) | Arama görünümünü açar veya kapatır. |
| Göster / Gizle <br/> [**Yan menü**](../start-with/main-menu.md) | Temel özelliklere erişmek için ana yan menünün görünürlüğünü değiştirir. |
| Aç / Kapat <br/> [**Dokunmatik ekran kilidi**](../map/interact-with-map.md#touch-screen-lock) | İstenmeyen ekran etkileşimlerini önlemek için dokunmatik ekran kilidini etkinleştirir veya devre dışı bırakır. |


### Harita Etkileşimleri {#map-interactions}

| Eylem | Açıklama |
|:-------------|:-------------|
| Harita <br/> [**Yakınlaştır**](../map/interact-with-map.md) | Eş zamanlı olarak görüntülenen veri miktarını artırarak haritayı yakınlaştırma. |
| Harita <br/> [**Uzaklaştır**](../map/interact-with-map.md) | Haritayı küçültme. [Geliştirici pencere öğesi - Yakınlaştırma seviyesi](../widgets/info-widgets.md#developer-widgets) ile kullanmak uygundur. |
| Taşı <br/> [**Haritayı aşağı**](../map/interact-with-map.md) | Haritayı aşağı taşımak için hızlı eylem düğmesini kullanabilirsiniz. |
| Taşı <br/> [**Haritayı yukarı**](../map/interact-with-map.md) | Dokunulduğunda, harita ekranı yukarı hareket eder. |
| Taşı <br/> [**Haritayı sola**](../map/interact-with-map.md) | Düğmeye dokunduğunuzda, harita ekranı sola hareket eder. |
| Taşı <br/> [**Haritayı sağa**](../map/interact-with-map.md) | Hızlı eylem düğmesiyle haritayı sağa taşıyabilirsiniz. |
| Taşı <br/> [**Konumuma**](../map/interact-with-map.md#my-location-and-zoom) | Haritayı *Konumum* konumuna taşır. |


### Yerlerim {#my-places}

| Eylem | Açıklama |
|:-------------|:-------------|
| Başlat / Duraklat <br/> [**Gezi kaydı**](../plugins/trip-recording.md#new-track-recording) | Mevcut parkurun bir kayıt oturumunu başlatın veya geziyi tamamlamadan geçici olarak durdurmak için duraklatın. |
| Başlat <br/> [**Yeni gezi segmenti**](../plugins/trip-recording.md#overview-screen) | Genel kaydı durdurmadan gezinin yeni bir segmentini başlatın. |
| Kaydet <br/> [**Kaydedilen Geziyi Kaydet ve Devam Et**](../plugins/trip-recording.md#current-track-recording) | Mevcut gezi kaydını kaydedin ve kesintisiz kayda devam edin. |
| Bitir <br/> [**Gezi kaydı**](../plugins/trip-recording.md#current-track-recording) | Mevcut gezi kayıt oturumunu sonlandırın. |
| Ekle <br/> [**Favori**](../map/configure-map-menu.md#map-layers) | Seçilen (merkezi) harita konumuna bir favori ekler. <br /> - *Ara bir iletişim kutusu göster*. Bir onay iletişim kutusu görüntüler. <br /> - *Grup*. Seçilen gruba bir favori ekler. <br /> - *Renk*. Önceden seçilmiş bir renkle bir favori ekler <br /> - *Ad*. Belirtilen ad önekiyle bir favori ekler. |
| Ekle <br/> [**Parkur ara noktası**](../map/point-layers-on-map.md#track-waypoints) | [Şu anda kaydedilen parkura](../plugins/trip-recording.md) veya [Yerlerim'deki herhangi bir parkura](../personal/tracks/manage-tracks.md) yeni bir Parkur ara noktası ekler. <br /> - *Ara bir iletişim kutusu göster*. Bir onay iletişim kutusu görüntüler. <br /> - *Grup*. Seçilen gruba bir favori ekler. <br /> - *Renk*. Önceden seçilmiş bir renkle bir favori ekler <br /> - *Ad*. Belirtilen ad önekiyle bir favori ekler. |
| Ekle <br/> [**Harita işareti**](../map/configure-map-menu.md#map-layers) | Seçilen (merkez) harita konumuna işaretçi ekler. |
| Ekle <br/> [**Park yeri**](../plugins/parking.md) | Seçilen (merkez) harita konumuna park yeri ekler. Eski park konumu silinir. |
| Ekle <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Seçilen (merkez) harita konumuna POI ekler (bağlam menüsü eylemiyle aynı). <br /> - *Ara bir iletişim kutusu göster*. Bir onay iletişim kutusu görüntüler. <br /> - *POI Türü* (isteğe bağlı). OSM POI türünü önceden seçer. <br /> - *Etiket/Değer* (çoklu). [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) etiketleri/değerleri ekler |
| Ekle <br/> [**OSM Notu**](../plugins/osm-editing.md#create--modify-osm-note) | Bir [OSM notu](https://wiki.openstreetmap.org/wiki/Notes) ekler <br /> - *Ara bir iletişim kutusu göster*. Bir onay iletişim kutusu görüntüler. <br /> - *Mesaj*. Nota varsayılan bir mesaj ekler. |
| Ekle <br/> [**Medya notları**](../plugins/audio-video-notes.md) | Seçilen (merkez) harita konumu için ses/fotoğraf/video notu kaydını başlatır. |
| Oluştur <br/> [**Yeni rota**](../plan-route/create-route.md) <br /> *Yalnızca Android* | [Rota planla](../plan-route/create-route.md) aracını açar ve haritadaki seçilen (merkezi) konum için bir rota oluşturur. |


### Navigasyon {#navigation}

| Eylem | Açıklama |
|:-------------|:-------------|
| Ekle <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | Harita ekranının merkezini ilk ara nokta olarak seçebilirsiniz. Önceki hedef aynı kalır. |
| Aç / Kapat <br/> [**Sesli komutlar**](../navigation/guidance/voice-navigation.md) | Navigasyon sırasında sesli rehberliği sessize alın veya sesini açın. |
| Ayarla <br/> [**Başlangıç noktası**](../navigation/setup/route-navigation.md#set-destinations) | Seçilen (merkez) harita konumunu bir kalkış noktası olarak işaretleyin. |
| Ayarla <br/> [**Hedef**](../navigation/setup/route-navigation.md#set-destinations) | Haritadaki seçilen (merkezi) konumu hedef olarak ekleyin. Önceki hedef son ara nokta olur. |
| Değiştir <br/> [**Hedef**](../navigation/setup/route-navigation.md#intermediate-destinations) | Seçilen (merkez) harita konumunu hedef olarak ayarlayın / değiştirin. Önceki hedef silinir. |
| Aç / Kapat <br/> [**Otomatik yakınlaştırma haritası**](../map/interact-with-map.md) | Navigasyon sırasında harita otomatik yakınlaştırmayı etkinleştirin veya devre dışı bırakın. |
| Başlat/durdur <br/> [**Navigasyon**](../navigation/setup/route-navigation.md#start--stop-navigation) | Navigasyonu başlatın (bir hedef nokta varsa) veya navigasyonu durdurun. |
| Duraklat / Devam Et <br/> [**Navigasyon**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Navigasyonu duraklatın / devam ettirin. |
| Kaldır <br/> [**Sonraki hedef noktası**](../navigation/setup/route-navigation.md#intermediate-destinations) | Varsa bir sonraki ara noktayı kaldırır, aksi takdirde hedefi kaldırır ve navigasyon bitirme iletişim kutusunu görüntüler. Herhangi bir hedefiniz yoksa eylem etkin değildir. |
| Simüle Et <br/> [**GPX ile konum**](../plugins/development.md#gpx-track-simulation) | GPX parkuru kullanarak cihazınızın konumunu ve hareketini simüle eder. |


### Ayarlar {#settings}

| Eylem | Açıklama |
|:-------------|:-------------|
| Değiştir <br/> [**Uygulama profili**](../personal/profiles.md) | Bir uygulama profilleri listesi oluşturun ve bunlar arasında geçiş yapın. <br /> - *Ara bir iletişim kutusu göster*. Profiller listesiyle bir iletişim kutusu görüntüler. <br /> - *Ara bir iletişim kutusu gösterme*. Profiller tanımlı bir sırayla değişir. <br /> - *Not*. Birden fazla profil arasında geçiş yapmanızı sağlayan tek bir eylemi özelleştirebilir veya her biri belirli bir profil için birkaç ayrı eylem oluşturabilirsiniz. |
| Değiştir <br/> [**Uygulama profilini sonrakine**](../personal/profiles.md) | Listedeki bir sonraki profile geçer. |
| Değiştir <br/> [**Uygulama profilini öncekine**](../personal/profiles.md) | Listedeki bir önceki profile geçer. |
| Değiştir <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Yalnızca Android* | *Konumum* imlecinin haritadaki yerleşimini ayarlamanıza olanak tanır. İmlecin her zaman ekranın merkezinde olmasını etkinleştirir veya devre dışı bırakır. |
| Değiştir <br/> [**Ekrandaki konum konumu**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Yalnızca iOS* | Önceden seçilen Konumum imleç konumunun haritada görüntülenmesini etkinleştirmenize veya devre dışı bırakmanıza olanak tanır. |


## Eylemler için Klavye Kullanımı {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Harici cihazlar](@site/static/img/map/external_custom_2_andr.png)

Hızlı Eylem aracının işlevselliğini kullanarak, harici giriş cihazınızın tuşlarına gerekli eylemleri atayabilirsiniz. Açıklamayı [Harita ile Etkileşim](../map/interact-with-map.md#custom-input-device-type) makalesinde bulabilirsiniz.


## İlgili Makaleler {#related-articles}

- [Ekranı Yapılandır](./configure-screen.md)
- [Harita düğmeleri](./map-buttons.md)
- [Bilgi pencere öğeleri](./info-widgets.md)
- [Navigasyon pencere öğeleri](./nav-widgets.md)
- [Yarıçap-cetvel ve Cetvel](./radius-ruler.md)
- [İşaretçi pencere öğeleri](./markers.md)

> *Son güncelleme: Nisan 2025*