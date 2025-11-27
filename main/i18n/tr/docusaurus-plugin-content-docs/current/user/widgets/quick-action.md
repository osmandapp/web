---
source-hash: 2577f77348fb868d63648ae2d8c21c5f6d95f6b42bc9152283acbe92a24fd938
sidebar_position: 7
title:  Hızlı Eylem (Özel düğmeler)
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

Hızlı Eylem pencere öğesi, ek ayarları açmaya gerek kalmadan temel işlevlere veya eylemlere hızlı erişim sağlayan etkileşimli bir kullanıcı arayüzü öğesidir. Bu pencere öğesi ana harita ekranına yerleştirilir ve uygulamayla etkileşimi basitleştirmenize ve hızlandırmanıza olanak tanıyarak daha kullanışlı ve verimli hale getirir.  

![Hızlı eylem pencere öğesi](@site/static/img/widgets/quick_action_widget.png)


## Hızlı Eylem Pencere Öğesi {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="current-os">

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Sil'e dokunun (sağ üst köşedeki Çöp Kutusu simgesi) → Eylemleri seçin*

![Hızlı eylem pencere öğesi_android_add](@site/static/img/widgets/quick_action_widget_andr.png)  ![Özel düğme Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>  → Düzenle'ye dokunun (sağ üst köşedeki Kalem simgesi) → Eylemleri seçin*

![Hızlı eylem pencere öğesi_ios_add](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Özel düğme Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Tüm eylemler **Eylem Ekle** menüsünde düzenlenir ve türe göre gruplandırılır. Eylemlerin ve açıklamalarının tam listesi [Eylem türleri](#action-types) bölümünde bulunabilir.

Hızlı eylem düğmesine bir veya daha fazla [eylem](#action-types) atayabilirsiniz. Eylem eklemenin iki yolu vardır.

- **Yapılandırma ekranında**. Listeden bir düğme seçin ve &nbsp; "**＋**" &nbsp; düğmesine dokunun. Önce [eylem türünü](#action-types) seçmeniz, ardından adını ve [parametrelerini](#action-parameters) değiştirmeniz gerekir.
- **Hızlı eylem düğmesi panelinde**. Harita ekranındaki *Hızlı Eylem düğmesine* dokunun. Listenin sonunda, paneldeki son ekranda "**＋**" &nbsp; *Eylem Ekle* kutusu bulunur. Buna dokunun ve [türler listesinden](#action-types) bir eylem seçin.


:::note

- Her eylemin benzersiz bir adı olmalıdır.
- Ekran 1, Ekran 2 vb. olarak sayısal olarak etiketlenen ekranlar, listedeki eylem sayısı 6 öğeye yükseldiğinde otomatik olarak oluşturulur.

:::


### Eylem Parametreleri {#action-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Hızlı eylem pencere öğesi_android_order](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Hızlı eylem pencere öğesi_ios_order](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

Hızlı eylem düğmesine atanan eylemler ekranlarda gruplandırılır. Bu eylem grupları, haritadaki o düğmeye dokunduğunuzda açılır. Eylem listesi *6 öğeyi* aştığında yeni ekranlar otomatik olarak oluşturulur. Aşağıdaki adımları izleyerek eylemleri tercihlerinize göre yeniden düzenleyebilirsiniz:  

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

:::info note
*Harita kaynağı*, *Harita stili*, *Katman*, *Alt katman*, *Arazi renk şeması* ve *Profil ekle* gibi bazı eylemler döngü olarak atanabilir. Düğmeye her dokunuş, seçilen katmanlar arasında döngü yapar. Listeden manuel seçim için ara bir diyalog gösterilebilir veya tanımlı sırayla geçiş için gizlenebilir.
:::


## Ekrandaki Düğmeler {#buttons-on-the-screen}

### Özel düğmeler {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*  

![Özel düğme Android](@site/static/img/widgets/custom_button_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  

![Özel düğme Android](@site/static/img/widgets/custom_button_ios.png)  

</TabItem>

</Tabs>

**Özel düğmeler**, haritada *Hızlı Eylem* düğmesiyle aynı işlevi gören ek düğmelerdir. Bir veya daha fazla eylem içeren bir düğme oluşturabilir ve bunu harita ekranında görüntüleyebilirsiniz.  Özel düğmeler *Ekranı Yapılandır → Düğmeler → Özel düğmeler* listesinde bulunur. Her düğmenin profile bağımsız bir eylem listesi vardır ve benzersiz bir ***Adı*** olmalıdır, ancak bir düğme her **profil** için ayrı ayrı açılıp kapatılabilir.

Mevcut tüm [eylemler](#action-types), varsayılan hızlı eyleme uygulanabilecek eylemlerle aynıdır. Özel düğmeler, dokunulduğunda seçilen eylemi ek bir menüye gitmeye gerek kalmadan hemen uygulayan ***Tek eylemli*** düğmeler olarak yapılandırılabilir.

### Düğme Görünümü {#button-appearance}

<InfoAndroidOnly/>

![Hızlı eylem düğmesi görünümü](@site/static/img/widgets/qa_button_appearance_andr.png)

Hızlı Eylem düğmelerinin görünümünü şuradan değiştirebilirsiniz: *Menü → Ekranı Yapılandır → Özel düğmeler → Hızlı eylem → üç nokta menüsü → Görünüm*. Bu ayar, düğmenin boyutunu, şeklini, simgesini ve arka plan opaklığını kişiselleştirme seçenekleri sunarak düğmelerin ekranınızda nasıl göründüğü üzerinde daha fazla kontrol sağlar.  

Ayrıntılı özelleştirme ayarları için, her düğmenin görünümünü tercihlerinize göre nasıl ayarlayacağınızı öğrenebileceğiniz [Ekranı Yapılandır](../widgets/configure-screen.md#button-appearance) makalesine bakın.

### Düğme Konumunu Değiştir {#change-button-position}

*Hızlı Eylem* pencere öğesi, ilk etkinleştirdiğinizde harita ekranının alt köşesinde görünür. Pencere öğesini basılı tutarak ve sürükleyerek ekranın herhangi bir yerine taşıyabilirsiniz. Düğmelerin harita ekranına hassas ve doğru bir şekilde yerleştirilmesi için, sürüklendiğinde en yakın görünmez ızgara konumuna otomatik olarak hizalanırlar.

- **İlk görünüm**. Varsayılan olarak, hızlı eylem pencere öğesi harita arayüzünün sağ alt köşesine yerleştirilir.

    ![Hızlı eylem pencere öğesi_görünüm](@site/static/img/widgets/quick_action_widget_view.png)

- **Pencere öğesini taşı**. Pencere öğesine uzun basıp sürükleyerek, otomatik sütun ve satır hizalamasıyla ekranda yeniden konumlandırabilirsiniz.  

    ![Hızlı eylem pencere öğesi_dokunma](@site/static/img/widgets/quick_action_widget_tap.png)

- **Yeni yerleşim**. Taşındıktan sonra, pencere öğesi manuel olarak tekrar ayarlanana kadar harita ekranındaki yeni konumunda kalacaktır.

    ![Hızlı eylem pencere öğesi_taşı](@site/static/img/widgets/quick_action_widget_move.png)

- **Birden çok [Özel düğme](#custom-buttons)**. Harita ekranına birden çok hızlı eylem düğmesi ekleyebilirsiniz. Bu düğmeler, aynı sürükle ve bırak yöntemi kullanılarak ayrı ayrı özelleştirilebilir ve yeniden konumlandırılabilir.

    ![Hızlı eylem pencere öğesi_taşı](@site/static/img/widgets/quick_action_widget_multi.png)

### Düğmeler için Izgara Düzeni {#grid-layout-for-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Düğmeler için ızgara_v_android](@site/static/img/widgets/grid_buttons_v_and.png) 

![Düğmeler için ızgara_h_android](@site/static/img/widgets/grid_buttons_h_1_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Düğmeler için ızgara_v_ios](@site/static/img/widgets/grid_buttons_v_ios.png) 

![Düğmeler için ızgara_h_ios](@site/static/img/widgets/grid_buttons_h_1_ios.png)

</TabItem>

</Tabs>

[Harita düğmeleri](../widgets/map-buttons.md#overview) otomatik olarak ızgara düzeni kullanılarak düzenlenir. Her düğme, ekranın dört köşesinden birine (*sol üst*, *sağ üst*, *sol alt*, *sağ alt*) atanır. Atanan köşede yeterli alan yoksa, düğmeler ekran yönüne bağlı olarak yatay veya dikey olarak hizalanır.

Bu düzen, düğmelerin görsel olarak tutarlı kalmasına yardımcı olur ve örtüşmeyi önler. Örneğin, yatay ekranda, sağ köşedeki düğmeler ekranın alt kısmında yatay olarak sıralanır, dikey ekranda ise gerektiğinde yukarı veya aşağı doğru dikey olarak genişler.

Izgara, çevre arayüze uyum sağlar ve gerektiğinde düğmeleri yeniden konumlandırır, böylece görünür kalırlar ve ekran üzerindeki diğer öğelerle etkileşime girmelerini engeller. Pencere öğeleri veya paneller eklendiğinde, kaldırıldığında veya yeniden düzenlendiğinde, düzen buna göre güncellenir, böylece düğme sırası tutarlı kalır ve hiçbir öğe gizlenmez.

Başka bir cihazdan [içe aktarılan profiller](https://osmand.net/docs/user/personal/import-export#export), ızgara düzenine göre ayarlanır ve farklı ekran boyutlarında ve platformlarda düğme konumlarını doğru tutar.


## Eylem Türleri {#action-types}

### Haritayı Yapılandır {#configure-map}

| Eylem | Açıklama |
|:-------------|:-------------|
| Göster / Gizle <br/> [**Rotalar**](../map/vector-maps.md#routes) | Görüntülenmelerini etkinleştirmek veya devre dışı bırakmak için rota türlerini seçebilirsiniz. <br/> Bazı rotaların ek ayarları vardır. Varsayılan olarak, [Haritayı Yapılandır](../map/configure-map-menu.md) menüsünde hiçbir şey seçmediyseniz, listeden ilk rota türü atanır, aksi takdirde seçtiğiniz bir tür atanır. Daha fazlasını [Rotalar](../map/routes.md) makalesinde okuyabilirsiniz. <br/> - ***Bisiklet rotaları***  &nbsp;(*Rota*, *Düğüm ağları*) <br/> - ***Dağ bisikleti rotaları***  &nbsp;(*MTB ölçeği*, *IMBA*) <br/> - ***Yürüyüş rotaları***  &nbsp;(*OSMC*, *Ağ bağlantısı*, *Düğüm ağları*) <br/> - ***Yürüyüş parkurları zorluk derecesi***  &nbsp;(*SAC ölçeği*, *CAI ölçeği*) <br/> - ***Kayak pistleri*** <br/> - ***At rotaları*** <br/> - ***Akarsu sporları*** <br/> - ***Koşu rotaları*** <br/> - ***Fitness parkurları*** <br/> - ***Seyahat rotaları***  &nbsp;(*Parkurlar*, *Seyahat kitapları*, *Noktalar*) <br/> |
| Göster / Gizle <br/> [**Topografya katmanları**](../plugins/topography.md#overview) | Tüm topografya verileri ayrı harita katmanları olarak sunulur. Hızlı Eylem ile bu katmanların görünürlüğünü hızlıca değiştirebilirsiniz. <br/> - ***Kontur çizgileri*** <br/> - ***Arazi***  &nbsp;(*[Haritayı Yapılandır](../map/configure-map-menu.md) menüsünde seçilen katmana bağlı olarak*, *Tepe gölgesi*, *Eğim* veya *Rakım* *görüntülenecektir.*) |
| Değiştir <br/> [**Arazi renk şeması**](../plugins/topography.md#modify-color-scheme) | Düğmeye dokunduğunuzda değişecek mevcut paletler listesinden bir veya daha fazla palet seçmenize olanak tanır. |
| Göster / Gizle <br/> [**Hava durumu katmanları**](../plugins/weather.md#weather-layers) | Tüm hava durumu verileri ayrı harita katmanları olarak sunulur. Hızlı Eylem ile bu katmanların haritadaki görünürlüğünü değiştirmek için hızlı erişim sağlayabilirsiniz. <br/> - ***Yağış katmanı*** <br/> - ***Bulut katmanı*** <br/> - ***Basınç katmanı*** <br/> - ***Rüzgar katmanı*** <br/> - ***Rüzgar animasyon katmanı*** *(Yalnızca Android)* <br/> - ***Sıcaklık katmanı*** <br/> Android'de ayrıca **Hava durumu katmanları** — tüm etkin hava durumu katmanları için bir ana anahtar bulunur. Bir kerede tüm şu anda etkin hava durumu katmanlarını kapatır. Tekrar açıldığında, daha önce etkin olan tam aynı katman kümesini geri yükler. |
| Aç <br/> [**Hava durumu ekranı**](../plugins/weather.md) | Ayrıntılı bilgileri içeren [*Hava durumu* tahmin ekranını](../plugins/weather.md#weather-forecast-screen) açar. |
| Göster / Gizle <br/> [**Favoriler**](../map/point-layers-on-map.md#favorites) | Favori noktaları haritada gösterir veya gizler. |
| Göster / Gizle <br/> [**Parkurlar**](../personal/tracks/manage-tracks.md#track-menu) | Haritadaki son görünür parkurları gösterir veya gizler. |
| Göster / Gizle <br/> [**İÇN**](../map/point-layers-on-map.md#points-of-interest-pois) | Seçilen kategorilerle İÇN katmanlarının haritada görüntülenmesini etkinleştirir veya devre dışı bırakır.<br/>Birden çok İÇN kategorisi seçebilirsiniz. Eylem, Hızlı Eylemler kullanılmadan Haritayı Yapılandır'dan seçilen İÇN kategorilerini değiştirir.  |
| Değiştir <br/> [**Harita modu**](../map/vector-maps.md#map-mode) | Gündüz ve gece modları arasında geçiş yapmak için hızlı erişim. |
| Değiştir <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | Düğme, tek bir harita kaynağı veya dokunulduğunda veya geçici bir iletişim kutusuyla dairesel olarak değişen bir kaynak listesi atamanıza olanak tanır. <br/> - *Geçici bir iletişim kutusu göster*. Haritaların bir listesini içeren bir iletişim kutusu görüntüler. <br/> - *Geçici bir iletişim kutusu gösterme*. Harita kaynakları tanımlanmış bir sırayla değişir. <br/> - *Görüntülenen Ad* - *Harita kaynağı* >. Harita adından sonraki ">" işareti, şu anda hangi harita kaynağının seçili olduğunu gösterir. <br/> - *Görüntülenen Ad* - > *Sonraki harita kaynağı*. Harita adından önceki ">" işareti, eylem yürütülürse bir sonraki seçilen harita kaynağının ne olacağını gösterir. <br/> - *Not*. OsmAnd'da harita kaynaklarını değiştirmek için, birden çok harita kaynağı arasında geçiş yapmanızı sağlayan tek bir hızlı eylem ayarlayabilir veya her biri belirli bir harita kaynağı için birkaç ayrı hızlı eylem oluşturabilirsiniz. |
| Göster / Gizle <br /> [**Toplu taşıma**](../map/vector-maps.md#transport) | Toplu taşıma harita katmanını etkinleştirir veya devre dışı bırakır <br /> - *Ulaşım türü*. İlk dokunuşta, *Ulaşım durakları*, *Otobüs, troleybüs ve servis rotaları*, *Tramvay ve tren rotaları*, *Metro rotaları* dahil olmak üzere bir veya birden çok ulaşım türü seçebilirsiniz. |
| Değiştir <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Harita katmanı olarak bir harita kaynakları listesi oluşturun ve bunlar arasında geçiş yapın. <br /> - *Not*. OsmAnd'da harita katmanlarını değiştirmek için, birden çok harita katmanı arasında geçiş yapmanızı sağlayan tek bir hızlı eylem ayarlayabilir veya her biri belirli bir harita katmanı için birkaç ayrı hızlı eylem oluşturabilirsiniz. |
| Değiştir <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Harita alt katmanı olarak bir harita kaynakları listesi oluşturun ve bunlar arasında geçiş yapın. <br /> - *Not*. OsmAnd'da harita alt katmanlarını değiştirmek için, birden çok harita alt katmanı arasında geçiş yapmanızı sağlayan tek bir hızlı eylem ayarlayabilir veya her biri belirli bir harita alt katmanı için birkaç ayrı hızlı eylem oluşturabilirsiniz.  |
| Değiştir <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Vektör haritaları için bir harita stili listesi oluşturun ve bunlar arasında geçiş yapın. <br /> - *Not*. OsmAnd'da harita stillerini değiştirmek için, birden çok harita katmanı arasında geçiş yapmanızı sağlayan tek bir hızlı eylem ayarlayabilir veya her biri belirli bir harita stili için birkaç ayrı hızlı eylem oluşturabilirsiniz. |
| Göster / Gizle <br/> [**Mapillary katmanı**](../plugins/mapillary.md) | Mapillary tarafından sağlanan sokak seviyesi görüntüleri ile harita katmanlarını görüntülemenizi sağlar. |
| Göster / Gizle <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | Tek bir düğmeye dokunarak haritadaki tüm OSM notlarını görüntülemeyi veya gizlemeyi seçebilirsiniz. |


### Arayüz {#interface}

| Eylem | Açıklama |
|:-------------|:-------------|
| Gezin <br/> **Önceki ekran** | Önceki ekrana gitmek için bir geçiş. |
| Göster / Gizle <br/> [**Navigasyon görünümü**](../navigation/setup/route-navigation.md) | Navigasyon ekranı görünümünün görünürlüğünü değiştirir. |
| Göster / Gizle <br/> [**Arama görünümü**](../search/search-all.md) | Arama görünümünü açar veya kapatır. |
| Göster / Gizle <br/> [**Yan menü**](../start-with/main-menu.md) | Temel özelliklere erişmek için ana yan menünün görünürlüğünü değiştirir. |
| Aç / Kapat <br/> [**Dokunmatik ekran kilidi**](../map/interact-with-map.md#touch-screen-lock) | İstenmeyen ekran etkileşimlerini önlemek için dokunmatik ekran kilidini etkinleştirir veya devre dışı bırakır. |
| Aç <br/> **WunderLINQ Datagrid** | Bağlı cihaz bilgilerini görüntülemek için WunderLINQ veri arayüzünü açar; gerekli WunderLINQ uygulaması yüklü değilse App Store'a yönlendirir. |


### Harita Etkileşimleri {#map-interactions}

| Eylem | Açıklama |
|:-------------|:-------------|
| Harita <br/> [**Yakınlaştır**](../map/interact-with-map.md) | Görüntülenen veri miktarını eş zamanlı olarak artırarak haritayı yakınlaştırma. |
| Harita <br/> [**Uzaklaştır**](../map/interact-with-map.md) | Haritayı küçültme. [Geliştirici pencere öğesi - Yakınlaştırma seviyesi](../widgets/info-widgets.md#developer-widgets) ile kullanmak uygundur. |
| Taşı <br/> [**Haritayı aşağı**](../map/interact-with-map.md) | Haritayı aşağı taşımak için hızlı eylem düğmesini kullanabilirsiniz.  |
| Taşı <br/> [**Haritayı yukarı**](../map/interact-with-map.md) | Dokunulduğunda, harita ekranı yukarı hareket eder. |
| Taşı <br/> [**Haritayı sola**](../map/interact-with-map.md) | Düğmeye dokunduğunuzda, harita ekranı sola hareket eder. |
| Taşı <br/> [**Haritayı sağa**](../map/interact-with-map.md) | Hızlı eylem düğmesiyle haritayı sağa taşıyabilirsiniz. |
| Taşı <br/> [**Konumuma**](../map/interact-with-map.md#my-location-and-zoom) | Haritayı *Konumum* konumuna taşır. |


### Yerlerim {#my-places}

| Eylem | Açıklama |
|:-------------|:-------------|
| Başlat / Duraklat <br/> [**Gezi kaydı**](../plugins/trip-recording.md#new-track-recording) | Mevcut parkurun bir kayıt oturumunu başlatın veya geziyi tamamlamadan geçici olarak durdurmak için duraklatın. |
| Başlat  <br/> [**Yeni gezi segmenti**](../plugins/trip-recording.md#overview-screen) | Genel kaydı durdurmadan gezinin yeni bir segmentini başlatın. |
| Kaydet <br/> [**Kaydedilen Gezi ve Devam Et**](../plugins/trip-recording.md#current-track-recording) | Mevcut gezi kaydını kaydedin ve kesintisiz kayda devam edin. |
| Bitir <br/> [**Gezi kaydı**](../plugins/trip-recording.md#current-track-recording) | Mevcut gezi kayıt oturumunu sonlandırın. |
| Ekle <br/> [**Favori**](../map/configure-map-menu.md#map-layers) | Seçilen (merkezi) harita konumuna bir favori ekler. <br /> - *Geçici bir iletişim kutusu göster*. Bir onay iletişim kutusu görüntüler. <br /> - *Grup*. Seçilen gruba bir favori ekler. <br /> - *Renk*. Önceden seçilmiş bir renkle bir favori ekler <br /> - *Ad*. Belirtilen ad önekiyle bir favori ekler.  |
| Ekle <br/> [**Parkur ara noktası**](../map/point-layers-on-map.md#track-waypoints) | [Şu anda kaydedilen parkura](../plugins/trip-recording.md) veya [Yerlerim'deki herhangi bir parkura](../personal/tracks/manage-tracks.md) yeni bir Parkur ara noktası ekler. <br /> - *Geçici bir iletişim kutusu göster*. Bir onay iletişim kutusu görüntüler. <br /> - *Grup*. Seçilen gruba bir favori ekler. <br /> - *Renk*. Önceden seçilmiş bir renkle bir favori ekler <br /> - *Ad*. Belirtilen ad önekiyle bir favori ekler.  |
| Ekle <br/> [**Harita işareti**](../map/configure-map-menu.md#map-layers) | Seçilen (merkez) harita konumuna işaretçi ekler. |
| Ekle <br/> [**Park yeri**](../plugins/parking.md) | Seçilen (merkez) harita konumuna park yeri ekler. Eski park konumu silinir. |
| Ekle <br/> [**İÇN**](../map/point-layers-on-map.md#points-of-interest-pois) | Seçilen (merkez) harita konumuna İÇN ekler (bağlam menüsü eylemiyle aynı). <br /> - *Geçici bir iletişim kutusu göster*. Bir onay iletişim kutusu görüntüler. <br /> - *İÇN Türü* (isteğe bağlı). OSM İÇN türünü önceden seçer. <br /> - *Etiket/Değer* (birden çok). [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) etiketleri / değerleri ekler |
| Ekle <br/> [**OSM Notu**](../plugins/osm-editing.md#create--modify-osm-note) | Bir [OSM notu](https://wiki.openstreetmap.org/wiki/Notes) ekler  <br /> - *Geçici bir iletişim kutusu göster*. Bir onay iletişim kutusu görüntüler. <br /> - *Mesaj*. Nota varsayılan bir mesaj ekler. |
| Ekle <br/> [**Medya notları**](../plugins/audio-video-notes.md) | Seçilen (merkez) harita konumu için ses / fotoğraf / video notu kaydını başlatır; tekrarlanan bir basış kaydı durdurur. |
| Oluştur <br/> [**Yeni rota**](../plan-route/create-route.md) <br /> *Yalnızca Android* | [Rota planla](../plan-route/create-route.md) aracını açar ve haritadaki seçilen (merkezi) konum için bir rota oluşturur. |


### Navigasyon {#navigation}

| Eylem | Açıklama |
|:-------------|:-------------|
| Ekle <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | Harita ekranının merkezini ilk ara nokta olarak seçebilirsiniz. Önceki hedef aynı kalır. |
| Aç / Kapat <br/> [**Sesli komutlar**](../navigation/guidance/voice-navigation.md) | Navigasyon sırasında sesli rehberliği sessize alır veya sesini açar. |
| Ayarla <br/> [**Başlangıç noktası**](../navigation/setup/route-navigation.md#set-destinations) | Seçilen (merkez) harita konumunu bir kalkış noktası olarak işaretleyin. |
| Ayarla <br/> [**Hedef**](../navigation/setup/route-navigation.md#set-destinations) | Haritadaki seçilen (merkezi) konumu bir hedef olarak ekleyin. Önceki hedef son ara nokta olur.  |
| Değiştir <br/> [**Hedef**](../navigation/setup/route-navigation.md#intermediate-destinations) | Seçilen (merkez) harita konumunu bir hedef olarak ayarla / değiştir. Önceki hedef silinir. |
| Aç / Kapat <br/> [**Otomatik yakınlaştırma haritası**](../map/interact-with-map.md) | Navigasyon sırasında harita otomatik yakınlaştırmayı etkinleştirir veya devre dışı bırakır. |
| Başlat/durdur <br/> [**Navigasyon**](../navigation/setup/route-navigation.md#start--stop-navigation) | Navigasyonu başlat (bir hedef noktası varsa) veya navigasyonu durdur. |
| Duraklat / Devam Et <br/> [**Navigasyon**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Navigasyonu duraklat / devam ettir. |
| Kaldır <br/> [**Sonraki hedef noktası**](../navigation/setup/route-navigation.md#intermediate-destinations) | Varsa sonraki ara noktayı kaldırır, aksi takdirde hedefi kaldırır ve navigasyonu bitirme iletişim kutusunu görüntüler. Herhangi bir hedefiniz yoksa eylem etkin değildir. |
| Simüle Et <br/> [**GPX ile konum**](../plugins/development.md#gpx-track-simulation) | Cihazınızın konumunu ve hareketini bir GPX parkuru kullanarak simüle eder. |


### Ayarlar {#settings}

| Eylem | Açıklama |
|:-------------|:-------------|
| Değiştir <br/> [**Uygulama profili**](../personal/profiles.md) | Bir uygulama profilleri listesi oluşturun ve bunlar arasında geçiş yapın.  <br /> - *Geçici bir iletişim kutusu göster*. Bir profiller listesi içeren bir iletişim kutusu görüntüler. <br /> - *Geçici bir iletişim kutusu gösterme*. Profiller tanımlanmış bir sırayla değişir. <br /> - *Not*. Birden çok profil arasında geçiş yapmanızı sağlayan tek bir eylemi özelleştirebilir veya her biri belirli bir profil için birkaç ayrı eylem oluşturabilirsiniz. |
| Değiştir <br/> [**Uygulama profilini sonraki**](../personal/profiles.md) | Listedeki bir sonraki profile geçer. |
| Değiştir <br/> [**Uygulama profilini önceki**](../personal/profiles.md) | Listedeki önceki profile geçer. |
| Değiştir <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> (iOS **Ekrandaki konum pozisyonu**)  | *Konumum* imlecinin haritadaki yerleşimini ayarlamanıza olanak tanır. İmlecin her zaman ekranın ortasında olmasını etkinleştirir veya devre dışı bırakır. |
| Değiştir <br/> [**Harita yönü**](../map/interact-with-map#map-orientation-modes) | Harita döndürme modunu değiştirmenize ve seçili yönlendirme türleri arasında geçiş yapmanıza olanak tanır. Döngüye hangi modların dahil edileceğini seçebilirsiniz. |


## Eylemler için Klavye Kullanımı {#use-keyboard-for-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Harici cihazlar](@site/static/img/map/external_custom_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/> → Cihaz → Ekle*

![Harici cihazlar](@site/static/img/map/external_custom_2_ios.png)

</TabItem>

</Tabs> 

Hızlı Eylem aracının işlevselliğini kullanarak, gerekli eylemleri harici giriş cihazınızın tuşlarına atayabilirsiniz. Bir açıklama [Harita ile Etkileşim](../map/interact-with-map.md#custom-input-device-type) makalesinde bulunabilir.


## İlgili Makaleler {#related-articles}

- [Ekranı Yapılandır](./configure-screen.md)
- [Harita düğmeleri](./map-buttons.md)
- [Bilgi pencere öğeleri](./info-widgets.md)
- [Navigasyon pencere öğeleri](./nav-widgets.md)
- [Yarıçap-cetvel ve Cetvel](./radius-ruler.md)
- [İşaretçi pencere öğeleri](./markers.md)