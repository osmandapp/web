---
source-hash: 691bcbb90edd834e73f1ffc6ba4260189199bb0919291ba488372bdec72e2792
sidebar_position: 1
title: Rota Hazırlığı
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

OsmAnd'daki **Rota hazırlığı** özelliği, [sürüş](./../routing/car-based-routing.md), [yürüme](./../routing/pedestrian-routing.md), bisiklete binme, [ata binme](./../routing/horse-routing.md) ve [kayak](./../routing/ski-routing.md) dahil olmak üzere çeşitli [rota türleri](./../routing/osmand-routing.md#routing-types) için adım adım navigasyon rehberliği sağlar. Kullanıcılar navigasyon ayarlarını özelleştirebilir, varış noktaları ekleyebilir ve verimlilik için rotaları optimize edebilir.

:::tip

- **Çevrimdışı navigasyon** varsayılan olarak etkindir. Ancak, [çevrimiçi rota motorlarını](./../routing/online-routing.md) da kullanabilirsiniz.

- **OsmAnd'ın doğru navigasyon için** [hassas konuma](../../start-with/first-steps.md#permission-to-access-the-location) erişim iznine ihtiyacı vardır. Gerekirse bunu cihaz ayarlarında etkinleştirin.

:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Navigasyon ekranı Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Navigasyon ekranı Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon ekranı iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Navigasyon ekranı iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Varış Noktalarını Ayarla {#set-destinations}

**Adım 1: Haritaları indirin.**

Çevrimdışı navigasyonu kullanmadan önce, gerekli [haritaların indirildiğinden](../../start-with/download-maps.md) emin olun. Bölgeniz için haritaları yüklemek üzere *Menü → Haritalar ve Kaynaklar → Haritaları İndir*'e gidin.

**Adım 2: Navigasyon profillerini yapılandırın.**

Kullanmayı düşündüğünüz [profilleri yapılandırın](../../personal/profiles.md):

- [Araç parametrelerini](../guidance/vehicle-parameters.md#size-parameters) ayarlayın (*kamyon sürücüleri için önemlidir*), [motor tipini](../guidance/vehicle-parameters.md#fuel-used-by-motor) seçin (*isteğe bağlı*).

- [Rota çizgisi görünümünü](../guidance/map-during-navigation#route-line-appearance) yapılandırın (*isteğe bağlı*, Pro kullanıcıları için mevcuttur ([Android](../../purchases/android.md#pro-features) / [iOS](../../purchases/ios.md#pro-features))).

- [Sesli komutları](../guidance/voice-navigation.md) yapılandırın.

**Adım 3: Varış noktalarını ayarlayın.**

1. [*Navigasyon menüsünü*](#navigation-menu) açın:

    - [Hedef noktayı](#set-target-point) belirtin.
    - Rota hesaplanana kadar bekleyin. Bundan sonra, rotanız hakkında ek bilgileri *[Ayrıntılar bölümünde](./route-details.md#overview)* edinebileceksiniz.
    - En iyi sonucu elde etmek için farklı [rota türleri](./../routing/osmand-routing.md#routing-types) (profiller) arasında geçiş yapabilirsiniz.
    - [Ara varış noktaları](#intermediate-destinations) ekleyin (isteğe bağlı).
    - Kalkış noktasını da [mevcut konumdan](../../map/interact-with-map.md#my-location-and-zoom) gerekli olana değiştirebilirsiniz.

2. Ek [*Navigasyon ayarları*](#settings) amaçlarınıza bağlı olarak kullanılabilir (hangi yollardan kaçınılacağını veya tercih edileceğini yapılandırabilir, yakıt tasarrufu yapabilir veya en hızlı rotayı seçebilirsiniz vb.).

3. Navigasyonu [başlatın](#start--stop-navigation) veya önce [simüle edilmiş navigasyonu](#simulated-navigation) yapın (bu fonksiyonla rotanızı gerçekten seyahat etmeden önce test edebilirsiniz).

4. Rota üzerindeyken navigasyonu [*Duraklat/Devam Ettir*](#pause--resume-navigation) ve [*Durdur*](#start--stop-navigation) yapabilirsiniz.


:::note

**Harita kaynağı olarak *[Çevrimiçi harita](../../map/raster-maps.md#select-raster-maps)* seçildiğinde rota oluşturulamaz.**

:::


### Navigasyon Menüsü {#navigation-menu}

Navigasyon menüsüne ulaşmanın 3 yolu vardır:

- Harita ekranındaki [*Navigasyon düğmesi*](../../widgets/map-buttons.md#directions).  
- Bir [*harita bağlam menüsünde*](../../map/map-context-menu.md#directions-to--from) *Yönlendirme/Yönlendirme*.  
- [*Ana Menüdeki*](../../start-with/main-menu.md) Navigasyon bölümü *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon menüsü Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon menüsü iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)  

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Başlangıç konumunu ayarla (varsayılan: [*Mevcut Konumum*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - [Hedef noktanızı ayarlamak](#set-target-point) için kullanın.
- **Ekle** &nbsp;&#43; - Rota boyunca [ara noktalar](../../widgets/nav-widgets.md#distance-to-intermediate) ekleyin.
- **Değiştir** &nbsp;&#8595;&#8593; - *Başlangıç* ve *Bitiş* noktalarını tersine çevirin.
- **Ses düğmesi** - [Sesli komutları](../guidance/voice-navigation.md) sessize alın.
- **<Translate android="true" ids="shared_string_settings"/>** – Rota tercihlerini ve yol kısıtlamalarını [ayarlayın](#settings).

Navigasyon menüsünde hedefinizi kullanarak ayarlayın:

- Özel favori noktalar [Ev / İş](#use-home-or-work-points).
- Önceki rota veya [Geçmiş](../../personal/global-settings.md#history).
- **İptal** düğmesi ana ekrana geri döner.
- [Başlat düğmesi](#start--stop-navigation) rota hesaplaması bittikten sonra navigasyonu başlatır.
  
### Başlangıç Noktası Seç {#select-start-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Haritada seç Android](@site/static/img/navigation/route/select_on_map.png)

Başlangıç noktası için mevcut konumunuzu, bir [Favori noktanın](../../map/point-layers-on-map.md#favorites) konumunu seçebilir, harita üzerinde bir nokta seçebilir veya [Ara](../../search/index.md) özelliğini kullanabilirsiniz. Harita üzerinde bir nokta seçtiğinizde bir iletişim kutusu açılır. Harita bir işaretçi ile merkezlenir, harita merkezinin koordinatları görüntülenir ve doğrudan bir noktaya dokunmak yerine işaretçi altında haritayı hareket ettirirsiniz. Onaylamak için *Seç* düğmesine basın. Ayrıca [harita bağlam menüsünde](../../map/map-context-menu.md) [Yönlendirme'den](../../map/map-context-menu.md#directions-to--from) işlevini seçerek bir başlangıç noktası ayarlayabilirsiniz.  
</TabItem>

<TabItem value="ios" label="iOS">

![Haritada seç iOS](@site/static/img/navigation/route/select_on_map_ios.png)

Başlangıç noktası için mevcut konumunuzu, bir [Favori noktanın](../../map/point-layers-on-map.md#favorites) konumunu seçebilir, harita üzerinde bir nokta seçebilir veya [Ara](../../search/index.md) özelliğini kullanabilirsiniz. Harita üzerinde bir nokta seçerken haritayı serbestçe hareket ettirebilir ve yakınlaştırabilirsiniz, ardından istenen konuma dokunabilirsiniz. Seçilen noktada bir bayrak görünür. Ayrıca [harita bağlam menüsünde](../../map/map-context-menu.md) [Yönlendirme'den](../../map/map-context-menu.md#directions-to--from) işlevini seçerek bir başlangıç noktası ayarlayabilirsiniz. 
</TabItem>

</Tabs>

### Hedef Noktası Ayarla {#set-target-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon menüsü Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)

Navigasyonu başlatmak için en önemli şey varış noktanızı belirlemektir. Varış noktası bir [*Arama*](../../search/index.md#overview) işlevi kullanılarak veya basitçe bir harita üzerinde bulunabilir. Ayrıca [*Navigasyon menüsünde*](#navigation-menu) hedef noktayı ayarlayabilirsiniz:  

- **<Translate android="true" ids="search_button"/>** - [Arama menüsünü](../../search/index.md) açar.
- **<Translate android="true" ids="shared_string_address"/>** - [Adres arama menüsünü](../../search/search-address.md) açar.
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Haritayı bir işaretçi ile merkezleyen bir iletişim kutusu açar. Harita merkezinin koordinatları gösterilir, işaretçi altında haritayı hareket ettirirsiniz ve *Seç* düğmesine basarak seçimi onaylarsınız.
- **<Translate android="true" ids="shared_string_favorites"/>** - [Favori](../../personal/favorites.md) olarak bir varış noktası kullanılmasına izin verir.
- **<Translate android="true" ids="shared_string_markers"/>** - [Harita işaretçilerinden](../../personal/markers.md) birini varış noktası olarak seçmeye izin verir.
- **Başlangıç noktasını ve Varış noktasını değiştir** &nbsp;&#8595;&#8593; - *Başlangıç* ve *Bitiş* noktalarını değiştirmeye izin verir.
</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon menüsü iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

Navigasyonu başlatmak için en önemli şey varış noktanızı belirlemektir. Varış noktası bir [*Arama*](../../search/index.md#overview) işlevi kullanılarak veya basitçe bir harita üzerinde bulunabilir. Ayrıca [*Navigasyon menüsünde*](#navigation-menu) hedef noktayı ayarlayabilirsiniz:  

- **<Translate android="true" ids="search_button"/>** - [Arama menüsünü](../../search/index.md) açar.
- **<Translate android="true" ids="shared_string_address"/>** - [Adres arama menüsünü](../../search/search-address.md) açar.
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Haritayı hareket ettirmenize ve yakınlaştırmanıza izin verir, ardından istenen konuma dokunabilirsiniz. Seçilen noktada bir bayrak görünür ve varış noktasını işaretler.
- **<Translate android="true" ids="shared_string_favorites"/>** - [Favori](../../personal/favorites.md) olarak bir varış noktası kullanılmasına izin verir.
- **<Translate android="true" ids="shared_string_markers"/>** - [Harita işaretçilerinden](../../personal/markers.md) birini varış noktası olarak seçmeye izin verir.
- **Başlangıç noktasını ve Varış noktasını değiştir** &nbsp;&#8595;&#8593; - *Başlangıç* ve *Bitiş* noktalarını değiştirmeye izin verir.
</TabItem>

</Tabs>


### Ara Varış Noktaları {#intermediate-destinations}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon ara Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Navigasyon ara Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon ara iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigasyon ara iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - değişiklik yapmak için varış noktaları listesini açmaya izin verir.
- **&nbsp;&#8592;** - Navigasyon menüsü ekranına geçer.
- **&nbsp;&#10005;** - varış noktasını noktalar listesinden silmeye izin verir.
- **&nbsp;&#61;** - noktalar listesindeki nokta sırasını değiştirmeye izin verir.
- *&nbsp;&#43; Ekle* - *Ara ekle* bağlam menüsünü açar.
- *&nbsp;&#9776; Tümünü temizle* - tüm ara noktaları temizlemeye izin verir.

Varış noktaları listesinde **Sırala** (*Android*) veya **Seçenekler** (*iOS*) seçeneğini belirlerseniz, ara noktalara navigasyon sırasını ayarlamak için özel seçeneklere ulaşırsınız.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon ara Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon ara iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

Bu menüde, varış noktalarını yönetmek için ek seçenekler bulabilirsiniz:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - OsmAnd, tüm varış noktalarınız arasındaki en kısa rotayı sunacaktır, ancak ziyaret sırası düzenlenebilir. Başlangıç noktası ve son varış noktası değiştirilmeyecektir.

- **<Translate android="true" ids="switch_start_finish"/>** - Başlangıç noktası ve son varış noktası değiştirilecektir.

- **<Translate android="true" ids="reverse_all_points"/>** (*Yalnızca Android*) - Tüm noktalar ters yönde yerleştirilecektir.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Bu menüden ara varış noktaları ekleyebilirsiniz. Harita üzerinde ara varış noktası seçme işlemi, başlangıç ve hedef noktaları için aynıdır.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Tüm ara varış noktaları haritadan kaldırılacaktır.

### Ev veya İş Noktalarını Kullan {#use-home-or-work-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Özel favoriler Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Özel favoriler iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

**Ev** ve **İş** sekmeleri (veya Favoriler için [Özel noktalar](../../personal/favorites.md#special-favorites-personal)) navigasyon menüsünde varış noktalarını hızlıca ayarlamak için kullanılabilir. Özel favorilerin adreslerini girmediyseniz, bu hücreler boş kalacaktır. Bu alana dokunursanız, bu POI'leri oluşturmanız istenecektir.  


### Önceki Rotaların Geçmişi {#history-of-previous-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Önceki rota Android](@site/static/img/navigation/route/previous_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Önceki rota iOS](@site/static/img/navigation/route/previous_ios.png)  

</TabItem>

</Tabs>

[Navigasyon Geçmişi](../../personal/global-settings.md#history) kaydı etkinleştirilmişse, navigasyon için geçmiş listesindeki önceki rotaları veya varış noktalarını kullanabilirsiniz. Bu seçenek, sık kullanılan rotalara hızlı erişim için faydalı olabilir. Geçmiş listesindeki öğeler, en yeni olandan başlayarak en son kullanıma göre sıralanır.  

:::note

- [Geçmiş](../../personal/global-settings.md#history) verilerinin kaydı devre dışı bırakıldığında, navigasyon için önceki rotaları kullanmanız istenmeyecektir.
- Önceki rotalarınızla ilgili bazı veya tüm geçmiş kayıtlarını silebilirsiniz. Bu, Geçmiş seçeneğinin (*Menü → Ayarlar → OsmAnd ayarları → Geçmiş*) *[Navigasyon geçmişi](../../personal/global-settings.md#history)* sekmesinde yapılabilir.

:::


## Navigasyonu Başlat / Durdur {#start--stop-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon ekranı başlat Android](@site/static/img/navigation/route/navigation_start_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon ekranı iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Başlangıç ve bitiş noktaları seçildikten sonra, uygulama aktif bir profil kullanarak aralarında bir rota oluşturacaktır. [Uygulama profili](../../personal/profiles.md) ve [widget'lar](../../widgets/index.md) seti, yalnızca navigasyonun *Başlat* düğmesine dokunduğunuzda değişecektir.

- Navigasyonu başlatmak için **Başlat**'a dokunun.
- Mola verirken navigasyonu [Duraklatın](#pause--resume-navigation). (*Yalnızca Android*)
- **Durdur** (*Android*) veya **İptal** (*iOS*) seçeneğini belirleyerek navigasyonu **Durdurun**.

:::note Rota Detayları
Rakım, adım adım talimatlar, analiz aracı ve diğerleri gibi oluşturulan rota hakkındaki ek bilgiler [**Detaylar**](../setup/route-details.md) bölümünde bulunabilir.
:::

### Rota Yeniden Hesaplama {#route-recalculation}

Rotadan sapma durumunda rota otomatik olarak yeniden hesaplanabilir. Yeniden hesaplama parametrelerini [Navigasyon ayarları](../guidance/navigation-settings.md#recalculate-route) bölümünde değiştirebilirsiniz. Ayrıca [Sesli komutlar](../guidance/voice-navigation.md#voice-settings) ayarlarında rota yeniden hesaplama bildirimini devre dışı bırakabilirsiniz.

### Navigasyonu Duraklat / Devam Ettir {#pause--resume-navigation}

<InfoAndroidOnly/>

Kısa bir mola vermek ve rotadan sapmak isterseniz, sesli komutları duraklatmak ve rotayı yeniden hesaplamayı durdurmak için *Duraklat/Devam Ettir* navigasyon işlevini kullanabilirsiniz.  
Bu seçenek, uygulamanın Android sürümünde *[Bildirim listesi](../guidance/voice-navigation.md#text-notifications)* veya *[Hızlı eylemler menüsü](../../widgets/quick-action.md)* aracılığıyla kullanılabilir.

![Bildirim ekranı Android](@site/static/img/navigation/route/navigation_pause_android.png)

Navigasyona devam etmek için:

- Bildirim çubuğundaki OsmAnd mesajını kullanın.
- *Hızlı eylemler menüsünü* veya *[Navigasyon düğmesine](../../widgets/map-buttons.md#directions)* dokunduğunuzda görünen iletişim kutusunu kullanın (ekran görüntüsüne bakın).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyona devam et Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyona devam et ios](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Rotanızdayken **Navigasyon düğmesine dokunduğunuzda**, navigasyon **durmaz ve sesli komutlar seslendirilmeye devam eder**, ancak önerilen Devam Et veya Başlat seçenekleri kafa karıştırıcı olabilir.
:::


### Güç Tasarrufu İpuçları {#power-saving-tips}

Navigasyon, GPS ve arka plan işlemeyi kullanır, bu da pilin bitmesine neden olabilir. Güç kullanımını optimize etmek için:

- Sesli komutlara güvenirken **ekranı kapatın**.  
- *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*'da [Ekran kontrolünü](../guidance/voice-navigation.md#screen-control) etkinleştirin (*Yalnızca Android*).


## Ayarlar {#settings}

![Rota hazırlığı Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Navigasyon Ayarları {#navigation-settings}

Navigasyon ayarlarına erişmek için aşağıdaki adımlardan birini izleyin:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.  
- *Navigasyon düğmesi → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.  
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
*Haritaya Göz At* profilinde navigasyon ayarları yoktur.  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiller Navigasyon Ayarları iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** rotaların nasıl hesaplandığını belirler. Örneğin, bisiklet profiliniz, rota kurallarını belirleyen Bisiklet navigasyon türüne sahiptir. Bu kuralları (routing.xml dosyası olarak) OsmAnd'a aktarabilirsiniz. Rota hakkında daha fazla bilgiyi [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing) sayfamızda okuyabilirsiniz.&nbsp;  

- &nbsp;**<Translate android="true" ids="route_parameters"/>** rota sırasında hangi parametrelerin kullanılacağını kontrol eder (bu, navigasyon için bir rota seçme sürecidir).

Lütfen ilgili navigasyon türü için rota parametreleri hakkında bilgi edinin.

[Rota türünü](../routing/osmand-routing.md#routing-types) ve [rota parametrelerini](../guidance/navigation-settings.md#route-parameters) nasıl yapılandıracağınızı [Navigasyon ayarları makalesinde](../guidance/navigation-settings.md) veya [Rota Parametreleri bölümündeki](../routing/osmand-routing.md#routing-types) belirli rota türleri hakkındaki makalelerde okuyabilirsiniz.  


## Simüle Edilmiş Navigasyon {#simulated-navigation}

**Simüle edilmiş navigasyon** aracı, seyahat etmeden önce bir rotayı önizlemenizi sağlar. Bu, planlama, tanıma ve OsmAnd'ın navigasyon sistemini test etme konusunda yardımcı olur.

### Simülasyonu Başlat / Durdur {#start--stop-simulation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Simüle navigasyon Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Simüle navigasyon ios](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Bir navigasyon rotası oluşturulduğunda, **<Translate android="true" ids="simulate_navigation"/>** seçeneğini kullanarak navigasyonu simüle etmeye başlayabilirsiniz.  

- [Navigasyon menüsünde](#navigation-menu) *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*'a gidin.
- Seçeneği etkinleştirmek için anahtarı açın.
- Simülasyonu başlatmak için [Başlat](#start--stop-navigation) navigasyon düğmesine dokunun.
- Navigasyon simülasyonunu [Durdurmak](#start--stop-navigation) için **Durdur** (*Android*) veya **İptal** (*iOS*) düğmesine dokunun.


### Hız Modu {#speed-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simüle navigasyon Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simüle navigasyon ios](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Düz yollarda simülasyonu hızlandırır, kavşaklarda yavaşlar.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Sabit hızda çalışır.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - Yolun **düz bölümlerinde** hız, izin verilen maksimum hıza yakın olacaktır.
    - **Kavşaklarda**, simülatör hızı azaltacaktır.
    - Trafik ışıklarında, dur işaretlerinde ve diğer benzer engellerde **ek cezalar** uygulanacaktır.


## Haritalar Eksik veya Senkronize Değil {#maps-missing-or-not-synchronized}

Bir rota oluşturmak için tüm **gerekli haritaların** indirilmiş ve aynı yayın tarihine sahip olması gerekir. Bazı durumlarda eksik haritalar mesajının rota hazırlık menüsünde gizlenebileceğini lütfen unutmayın. Navigasyon menüsünü yukarı çekerseniz, rotanızın neden hesaplanamadığına dair olası nedenleri göreceksiniz.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon Android oluşturulurken harita yok mesajı 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon iOS oluşturulurken harita yok mesajı](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

### Gerekli Haritalar {#required-maps}

Gerekli haritalar iletişim kutusunda, indirilecek veya güncellenecek haritalar için öneriler göreceksiniz. Kullanılan haritaların listesi çok temel bir rota hesapladığı için kesin olmayabilir, kesin harita listesini almak için **Çevrimiçi hesapla**'ya tıklayabilirsiniz. **İndirilen haritaları kullan** seçeneğini seçerseniz, rota hesaplaması zaten indirilmiş haritaları kullanmaya çalışacak ve uyarı mesajını atlayacaktır.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon Android oluşturulurken harita yok mesajı](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon iOS oluşturulurken harita yok mesajı](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Yaygın Sorunlar ve Çözümler {#common-issues-and-solutions}

1. [Yavaş rota hesaplamasının olası nedenleri.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [Rota uzunluğu 250 kilometreyi aşarsa ne yapılmalı.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [Önerilen rota yanlış görünüyorsa ne yapılmalı.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Gerekli haritaların eksikliği nedeniyle navigasyonun mümkün olmadığı durum nasıl çözülür.](#maps-missing-or-not-synchronized)

Daha fazla sorun giderme adımı için [navigasyon sorunlarına](../../troubleshooting/navigation.md) bakın.


## İlgili Makaleler {#related-articles}

- [Rota parametreleri](../routing/osmand-routing.md#routing-types)
- [Rota detayları](./route-details.md)
- [İz ile navigasyon](./gpx-navigation.md)
- [İşaretleyicilerle navigasyon](./markers-navigation.md)
- [Navigasyon ayarları](../guidance/navigation-settings.md)
- [Navigasyon sırasında harita ekranı](../guidance/map-during-navigation.md)
- [Sesli komutlar / Bildirimler](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)