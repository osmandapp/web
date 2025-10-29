---
source-hash: 22db732c5f66852486fa2129937bfba2c697d211dccbcef555621bf176facb12
sidebar_position: 1
title: İlk Adımlar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Genel Bakış {#overview}

OsmAnd'a (OpenStreetMap Otomatik Navigasyon Yönlendirmeleri) hoş geldiniz!

Haritaları nasıl indireceğinizi, uygulamayı nasıl yapılandıracağınızı, haritayı nasıl kullanacağınızı ve bir rota oluşturacağınızı, navigasyonu nasıl başlatacağınızı ve ilgi çekici noktaları nasıl arayacağınızı keşfedin. OsmAnd Gizlilik politikası ve gerekli İzinlerin temel noktaları hakkında bilgi edinin.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimdışı navigasyon Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Çevrimdışı navigasyon iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## OsmAnd'ı Yükle {#install-osmand}

OsmAnd, **Android** ve **iOS** için kullanılabilen Haritalar ve Navigasyon için bir mobil uygulamadır. En popüler marketlerden indirebilirsiniz.

**Android marketleri**: [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand) ve [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App Store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

OsmAnd sürümleri ve Satın Almalar hakkında [daha fazla bilgi edinin](../purchases/index.md).


## OsmAnd'a Hoş Geldiniz {#welcome-to-osmand}

Çeşitli amaçlar için çevrimdışı ve çevrimiçi olarak kullanılabilecek tam işlevli, harita odaklı bir uygulama oluşturmayı hedefliyoruz. Uygulama birçok özelliğe sahiptir, böylece farklı uygulamalar arasında geçiş yapmak zorunda kalmazsınız ve her şey parmaklarınızın ucunda olur.

- [Farklı harita stillerinde](../map/vector-maps.md) görüntülenen birçok ayrıntıyla Dünya Çapında bir Haritayı görüntüleyin.
- Çeşitli [İlgi Çekici Noktaları](../map/point-layers-on-map.md) görüntüleyin, [arayın](../search/search-poi.md) ve kaydedin.
- Araba, bisiklet, yaya olarak [bir rota planlayın](../plan-route/create-route.md) ve bunları çok modlu rotalarda birleştirin.
- Ekran açık ve kapalıyken [sesli yönlendirmeli navigasyonu](../navigation/guidance/voice-navigation.md) başlatın.
- Çevrimdışı [Wikipedia](../plugins/wikipedia.md) ve [Wikivoyage](../plan-route/travel-guides.md) ile turistik gezinizi zenginleştirin.
- [Haritanın nasıl görüntülendiğini](../map/configure-map-menu.md) ve üzerinde hangi [widget'ların](../widgets/index.md) görüntülendiğini tamamen özelleştirin.
- [Rota ile](../navigation/setup/route-navigation.md), [belirli bir iz ile](../navigation/setup/gpx-navigation.md), [toplu taşıma ile](../navigation/routing/public-transport-navigation.md) ve [arazi dışı](../navigation/setup/markers-navigation.md) navigasyon yapın.
- Her şey **Çevrimdışı** çalışır.
- Ve [OSM Düzenleme Eklentisi](../plugins/osm-editing.md) ile [OpenStreetMap'e](https://www.openstreetmap.org/) katkıda bulunmayı unutmayın.


## Eylemler Rehberi {#actions-guide}

### Konuma Erişim İzni {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Hassas konum android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Hassas konum iOS](@site/static/img/steps/first_start_ios.png) ![Hassas konum iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

OsmAnd'a cihazınızın hassas konumu hakkında bilgi alma izni vermenizi öneririz. Özel bilgilerinizi toplamıyor, kullanmıyor veya paylaşmıyoruz, bu nedenle arama, navigasyon ve diğer OsmAnd işlevlerinin doğru çevrimdışı çalışması için hassas coğrafi konuma erişim gereklidir.


### Haritalar nasıl indirilir {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Haritada göster](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritada göster](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

OsmAnd uygulaması farklı harita türleriyle çalışır, ancak yalnızca indirilen çevrimdışı haritalarla tam olarak işlev görebilir, bu nedenle *<Translate android="true" ids="get_started"/>* ekranından sonra bölgenizin [*haritasını indirmeniz*](../start-with/download-maps.md#initial-setup-screen) istenir. Farklı bir bölge seçebilir, [OsmAnd Cloud'dan](../personal/osmand-cloud.md) geri yükleyebilir veya bu adımı atlayıp haritaları daha sonra indirebilirsiniz.  
Mevcut diğer harita indirme seçenekleri için [Haritaları İndir](../start-with/download-maps.md) makalesine bakın.

:::note Çevrimdışı haritalarla çalışmaya başlayın
OsmAnd, indirilen çevrimdışı haritalar olmadan doğru şekilde çalışamaz. Uygulama [Vektör](../map/vector-maps.md) ve [Raster](../map/raster-maps.md) haritaları desteklese de, [Arama](../search/index.md), [Navigasyon](../navigation/index.md) ve [Bağlam menüsü](../map/map-context-menu.md) gibi tüm işlevlerin düzgün çalışması için vektör çevrimdışı haritalarla çalışmaya başlamanız şiddetle tavsiye edilir.
:::


### Tüm dünya için haritalar nasıl indirilir {#how-download-maps-for-the-whole-world}

OsmAnd, mevcut tüm bölgeler için haritaları indirmenize izin verirken, tüm dünyayı tek seferde indirmek için tek bir paket yoktur. Bunun yerine, ihtiyaçlarınıza göre tek tek ülke veya bölge haritalarını indirebilirsiniz.

***Ana noktalar:***

- **OsmAnd Pro** ve **Maps+** **sınırsız harita indirme** sağlar, ancak yine de haritaları tek tek indirmeniz gerekir.
- **Depolama sınırlamaları.** Birden fazla bölge indirmeden önce cihazınızda yeterli alan olduğundan emin olun.
- **Otomatik güncellemeler.** İndirildikten sonra haritalar *Menü → Haritalar ve Kaynaklar → Güncellemeler* aracılığıyla güncellenebilir.


### Uygulama dili nasıl değiştirilir {#how-to-change-app-language}

*Görüntüleme dili seçeneği*, açılır pencereler, dahili metin, mesajlar ve daha fazlası dahil olmak üzere tüm uygulamanın dilini değiştirmek için kullanılır. Android 12'ye kadar OsmAnd, görüntüleme dilini doğrudan uygulamada tercihlerinize göre özelleştirmenize olanak tanır. Android 13 ve iOS cihazlardan itibaren, görüntüleme dili yalnızca sistem ayarlarında değiştirilebilir (Android'de [uygulama başına dil tercihlerini](https://developer.android.com/guide/topics/resources/app-languages) ve iOS'ta [nasıl değiştireceğinizi](https://developer.apple.com/news/?id=u2cfuj88) görün).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *Ayarlar → Uygulamalar → OsmAnd → Dil*

![Genel Ayarlar Dil Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *Ayarlar → OsmAnd Haritalar → Dil*

![Genel Ayarlar Dil iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Uygulama dillerini ayarlama seçeneği yok
Bazı Android cihazlarda (Muiu 14'lü Xiaomi), sistem ayarlarında uygulama dillerini ayrı ayrı ayarlama seçeneği yoktur, bu nedenle OsmAnd'ın dili yalnızca tüm sistemin diliyle değiştirilebilir. Ek bilgi için [GitHub tartışmasına](https://github.com/osmandapp/OsmAnd/issues/16990) göz atabilirsiniz.
:::


### Ayarlarınızı nasıl yönetirsiniz {#how-to-manage-your-settings}

Uygulama ayarlarını [Ana Menü](../start-with/main-menu.md) aracılığıyla [Genel ayarlar](../personal/global-settings.md) veya [Profil yapılandırması](../personal/profiles.md) olarak yönetebilirsiniz. Uygulama, daha sonra değiştirilebilecek önceden tanımlanmış bir profil listesiyle birlikte gelir. Her profil, belirli amaçlar için özelleştirilmiş bir harita uygulaması olarak kabul edilebilir. Varsayılan olarak, profiller yalnızca farklı navigasyon modları olarak hizmet vermektedir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profili yönet Android](@site/static/img/settings/manage_profile_android.png) ![Profili yapılandır Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profili yönet iOS](@site/static/img/settings/manage_profile_ios.png) ![Profili yapılandır iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Genel ayarlar](../personal/global-settings.md) hakkında [daha fazla bilgi edinin](https://osmand.net/docs/user/settings/global-settings/).
[Profil ayarları](../personal/profiles.md) hakkında [daha fazla bilgi edinin](https://osmand.net/docs/user/settings/profiles/).


### Eklentiler nasıl yapılandırılır {#how-to-configure-plugins}

[Eklentiler](../plugins/index.md#configure-plugin) uygulama işlevselliğini büyük ölçüde genişletir. Neredeyse tüm eklentilerin kendi [Harita Eylemleri](../map/map-context-menu.md), [Harita Katmanları](../map/configure-map-menu.md), [Harita İndirmeleri](../start-with/download-maps.md) ve [Ayarları](../plugins/#plugin-settings) vardır.  

Eklentileri [Ana Menü](../start-with/main-menu.md) → [Eklentiler](../plugins/index.md#configure-plugin) aracılığıyla etkinleştirebilir/devre dışı bırakabilirsiniz.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Eklentileri etkinleştir Android](@site/static/img/settings/plugins_enable_android.png) ![Eklenti örneği Android](@site/static/img/settings/plugin_example_android.png)

Eklentileri etkinleştirmek/devre dışı bırakmak için şuraya gidin:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Etkinleştir

</TabItem>

<TabItem value="ios" label="iOS">

![Eklentileri etkinleştir iOS](@site/static/img/settings/plugins_enable_ios.png) ![Eklenti örneği iOS](@site/static/img/settings/plugin_example_ios.png)

Eklentileri etkinleştirmek/devre dışı bırakmak için şuraya gidin:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

OsmAnd eklentileri hakkında [daha fazla bilgi edinin](../plugins/index.md#configure-plugin).


### Harita nasıl kullanılır {#how-to-use-a-map}

Harita, OsmAnd'ın temel bir öğesidir ve [nasıl kullanılacağını](../map/interact-with-map.md) (hareketler, düğmeler vb.) bilmek önemlidir. Haritayı ihtiyaçlarınıza göre [yapılandırabilirsiniz](../map/configure-map-menu.md): [harita stilini değiştirin](../map/configure-map-menu.md#map-style-parameters), favoriler, İÇN, toplu taşıma, izler, kontur çizgileri, tepe gölgelendirme ve diğerleri gibi farklı [harita katmanlarını](../map/configure-map-menu.md#map-layers) yapılandırın.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Haritayı yapılandır Android](@site/static/img/settings/configure_map_menu_android.png) ![Harita örneğini yapılandır Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritayı yapılandır iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Harita örneğini yapılandır iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

Harita yapılandırması hakkında [daha fazla bilgi edinin](../map/configure-map-menu.md).


### Ekran nasıl yapılandırılır {#how-to-configure-screen}

[Ekranı yapılandır](../widgets/configure-screen.md), [Bilgilendirici](../widgets/info-widgets.md) (rakım, hız, geçerli saat vb.) ve [Navigasyonel](../widgets/nav-widgets.md) (hedef, yön, varış zamanı vb.) widget'ları, [Hızlı eylem](../widgets/quick-action.md) ve Harita üzerinde görüntülenecek diğer öğeleri etkinleştirmenizi sağlar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ekranı yapılandır Android](@site/static/img/widgets/configure_screen_android.png) ![Ekran örneğini yapılandır Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ekranı yapılandır iOS](@site/static/img/settings/configure_screen_ios.png) ![Ekran örneğini yapılandır iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

Ekran yapılandırması hakkında [daha fazla bilgi edinin](../widgets/configure-screen.md).


### Haritalara kişisel veriler nasıl eklenir {#how-to-add-personal-data-to-maps}

OsmAnd, kişisel ihtiyaçlarınız için Harita üzerinde çeşitli işaretler yapmanıza olanak tanır. Örneğin, [Favori noktalar](../personal/favorites.md) - ad, simge ve kategoriye sahip kişisel noktalar, [İşaretleyiciler](../personal/markers.md) - hedef olarak hızlıca eklenen noktalar, [Sesli/Görüntülü notlar](../plugins/audio-video-notes.md) - belirli bir noktada kaydedilen medya notları, [İzler](../personal/tracks/manage-tracks.md) - kaydedilen ve içe aktarılan izler ve turlar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kişisel veri ekle Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kişisel veri ekle iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

Haritadaki noktalar hakkında [daha fazla bilgi edinin](../map/point-layers-on-map.md).


### İlgi çekici nokta nasıl aranır ve bulunur {#how-to-browse--find-point-of-interest}

[İlgi çekici noktalar (İÇN)](../map/point-layers-on-map.md#points-of-interest-pois), haritada aranabilen veya vurgulanabilen olanaklardır. İlginç veya faydalı yerleri temsil ederler ve [Vektör Haritalarının](../map/vector-maps.md) bir parçası olarak dağıtılırlar. Bunları haritada [görüntülemek](../map/point-layers-on-map.md#points-of-interest-pois), [gezinmek](../navigation/index.md) ve haritadaki ilgi çekici noktaları [aramak](../search/search-poi.md) için kullanabilirsiniz.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çoklu İÇN Seçimi](@site/static/img/map/multiple_selection_android.png) ![İÇN Ara ve Görüntüle Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Çoklu İÇN Seçimi](@site/static/img/settings/multiple_selection_iOS.png) ![İÇN Ara ve Görüntüle iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

İÇN araması hakkında [daha fazla bilgi edinin](../search/search-poi.md).


### Rota nasıl planlanır {#how-to-plan-a-route}

[Rota planlama](../plan-route/create-route.md), bir gezi oluşturmanıza, mevcut bir izi düzenlemenize ve yerinde mesafeyi ölçmenize olanak tanıyan güçlü bir araçtır. Ara noktaları hızlı bir şekilde yerleştirebilir ve bunları çeşitli navigasyon hatlarıyla (bisiklet, yaya, düz çizgi vb.) bağlayabilirsiniz. Sonuçlar bir GPX dosyasına kaydedilebilir, böylece daha sonra [paylaşılabilir](../personal/tracks/index.md) veya [navigasyon tarafından kullanılabilir](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota planla Android](@site/static/img/settings/plan_route_android.png) ![Rota grafiği planla Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

Rota planlama özelliği hakkında [daha fazla bilgi edinin](../plan-route/create-route.md).


### Adrese göre nasıl arama yapılır {#how-to-search-by-address}

OsmAnd, adres araması da dahil olmak üzere birçok arama yeteneği sunar. Varsayılan olarak, [OpenStreetMap verilerini](https://nominatim.openstreetmap.org/ui/search.html) kullanır ve Hızlı Arama girişini kullanarak tüm adresleri bulabilmelidir. Ayrıca, şehir, cadde, posta kodu ve koordinatlara göre [arama yapabilirsiniz](../search/search-address.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Adres ara Android](@site/static/img/settings/address_search_android.png) ![Arama sonucu Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Adres ara iOS](@site/static/img/settings/address_search_ios.png) ![Arama sonucu iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Bir adres aramadan önce haritayı indirmeniz gerekir. Ayrıca, mevcut konumunuz aradığınız adresten çok uzaktaysa, arama yarıçapını artırmanız gerekebilir.
:::

Adres araması hakkında [daha fazla bilgi edinin](../search/search-address.md).


### Navigasyon nasıl başlatılır {#how-to-start-navigation}

[Navigasyon](../navigation/index.md), rotayı görüntüleyerek, adım adım talimatlar, yüzey, düzgünlük vb. hakkında ek yol bilgileri ve isteğe bağlı sesli rehberlik sunarak hedefinize adım adım rehberlik sağlar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyonu başlat Android](@site/static/img/settings/start_navigation_android.png) ![Rota grafiği Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyonu başlat iOS](@site/static/img/settings/start_navigation_ios.png) ![Rota grafiği iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

Navigasyon hakkında [daha fazla bilgi edinin](../navigation/index.md).


### Seyahatinizi nasıl kaydedersiniz {#how-to-record-your-trip}

[Seyahat kaydı](../plugins/trip-recording.md), cihazın GPS'ini kullanarak bir iz üzerindeki tüm hareketleri kaydetmenize olanak tanıyan bir OsmAnd eklentisi olarak paketlenmiş özel bir araçtır.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Seyahat kaydı Android](@site/static/img/settings/trip_recording_android.png) ![Seyahat kaydına genel bakış Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seyahat kaydını başlat iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Seyahat kaydı menüsü iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

Seyahat kaydı hakkında [daha fazla bilgi edinin](../plugins/trip-recording.md).


### Haritalar nasıl düzenlenir {#how-to-edit-maps}

OsmAnd, [OpenStreetMap](https://www.openstreetmap.org/) verileriyle desteklenmektedir. Haritalar gönüllü katkıda bulunanlar tarafından oluşturulur, bu nedenle haritanın belirli bir bölümünde ne kadar çalışma yapıldığına bağlı olarak daha fazla veya daha az ayrıntıya sahip olabilirler. Herkes bir katkıda bulunan olarak kaydolabilir ve OSM haritalarını ekleyebilir veya düzenleyebilir. OsmAnd, OpenStreetMap'i geliştirmeye yardımcı olan bir düzenleme eklentisi sağlar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OSM notu Android](@site/static/img/settings/osm_note_android.png) ![İÇN oluştur Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OSM notu iOS](@site/static/img/settings/osm_note_ios.png) ![İÇN oluştur iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

OSM düzenlemesi hakkında [daha fazla bilgi edinin](../plugins/osm-editing.md).


### Uygulama nasıl kapatılır {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

OsmAnd'ı kapatmanın iki yolu vardır.

1. Uygulamayı yukarı kaydırarak ve ekrandan çıkararak kapatın. Dikey bir uygulama listesi için sola veya sağa kaydırın.  

2. Bunu yapmadan önce aşağıdaki adımları uygulamanız gerekebilir, aksi takdirde OsmAnd arka planda çalışmaya devam eder:
    - [Navigasyonu kapat](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Harita indirme ve güncellemeyi durdur](../start-with/download-maps.md)
    - [Seyahat kaydını durdur](../plugins/trip-recording.md#new-track-recording)
    - [Sesli/görüntülü not kaydını durdur](../plugins/audio-video-notes.md)

3. *Zorla durdur* işlevi:
    - *OsmAnd simgesine uzun dokunun → **i** düğmesi → Zorla durdur*.
    - Ayarları açın ve *Uygulamalar ve bildirimler → OsmAnd → Zorla durdur* öğesine dokunun.

</TabItem>

<TabItem value="ios" label="iOS">

Uygulamayı yukarı kaydırarak ve ekrandan çıkararak kapatın. Dikey bir uygulama listesi için sola veya sağa kaydırın.  

Bunu yapmadan önce aşağıdaki adımları uygulamanız gerekebilir, aksi takdirde OsmAnd arka planda çalışmaya devam eder:

- [Navigasyonu iptal et](../navigation/setup/route-navigation.md)
- [Harita indirme ve güncellemeyi durdur](../start-with/download-maps.md)
- [Seyahat kaydını durdur](../plugins/trip-recording.md#new-track-recording)
- [Sesli/görüntülü not kaydını durdur](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Uygulama Kısayolları {#app-shortcuts}

<InfoAndroidOnly/>

[Uygulama kısayolları](https://support.google.com/android/answer/9450271) OsmAnd simgesi için mevcuttur. Cihazınızın ekranındaki OsmAnd simgesine uzun dokunarak uygulama kısayolları menüsünü açın. Burada, aşağıdaki eylemleri seçmek için kısa basabilirsiniz: *Eve Git*, *İşe Git*, *Kaydı Başlat*, *Ara*, *Yerlerim*, *Git*. Bir eyleme uzun dokunmak, cihazınızın ekranına yeni bir eylem simgesi eklemenizi sağlar.

Seçilen eylemle uygulamayı hemen başlatmak için bir eylem simgesine dokunun.

![Kısayollar](@site/static/img/steps/shortcuts_3_andr.png) ![Kısayollar](@site/static/img/steps/shortcuts_4_andr.png)


## Çevrimdışı Yardım {#offline-help}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimdışı yardım Android ekran görüntüsü](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritalar menüsü iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

*Yardım menüsünde* sitemizdeki [www.osmand.net/docs](https://osmand.net/docs/intro/) makalelerini bulabilirsiniz. İlk indirmeden sonra (İnternet bağlantısı gereklidir), yardım makaleleri çevrimdışı olarak kullanılabilir.  
İlk alt bölüm olan *Çevrimdışı Yardım*, kullanıcılarımız arasında **En çok görüntülenen** (veya popüler) makaleleri içerir. Bu makaleler, uygulama için ayarlanan dilde görüntülenir, eğer bu dil belgemiz web sitesinde destekleniyorsa. Şu anda desteklenen diller: *<Translate android="true" ids="lang_en"/>, <Translate android="true" ids="lang_ar"/>, <Translate android="true" ids="lang_de"/>, <Translate android="true" ids="lang_es"/>, <Translate android="true" ids="lang_fr"/>, <Translate android="true" ids="lang_it"/>, <Translate android="true" ids="lang_nl"/>, <Translate android="true" ids="lang_pl"/>, <Translate android="true" ids="lang_pt"/>, <Translate android="true" ids="lang_tr"/>* ve *<Translate android="true" ids="lang_uk"/>*. Uygulama dilini değiştirdiğinizde, belgelerin seçilen dilde açılması için lütfen OsmAnd'ı yeniden başlatın. Bir çeviri mevcut olmadığında, sayfanın İngilizce sürümü otomatik olarak görüntülenir. **Kullanıcı kılavuzu** ve **Sorun giderme** bölümleri web sitesindekiyle aynı yapıya sahiptir.  
*Yardım menüsünde* ayrıca OsmAnd sosyal ağlarına, uygulamanızın sürüm bilgilerine, sürüm notlarına ve destek iletişim bilgilerine faydalı bağlantılar bulabilirsiniz. Yardım aracılığıyla [logcat ve çökme günlüklerini](../troubleshooting/crash-logs.md#crash-and-logcat-logs) de gönderebilirsiniz.  

### Menü {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimdışı yardım Android ekran görüntüsü](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritalar menüsü iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>  

- **Çökme günlüğü gönder** (*Android için*). Kullanıcıların uygulama çökmeleriyle ilgili raporları geliştiricilere göndermesine olanak tanır, bu da sorunların belirlenmesine ve çözülmesine yardımcı olur.
- **Logcat günlüğü gönder** (*Android için*). Kullanıcılara uygulama çökmelerinin ayrıntılı günlüklerini geliştiricilere gönderme yeteneği sağlar, bu da daha derinlemesine analiz ve sorun gidermeyi kolaylaştırır.
- **Günlük gönder** (*iOS için*). Android için *Çökme günlüğü gönder* özelliğine benzer bir işlev görür, iOS cihazlardaki kullanıcıların hata ayıklama amacıyla uygulama çökmelerini geliştiricilere bildirmesini sağlar.
- **Yapı sürümünü kopyala**. Kullanıcıların sorunları bildirirken uygulamanın mevcut sürümünü geliştiricilere hızlı ve doğru bir şekilde iletmesini sağlar, bu da teşhis ve çözüm sürecini basitleştirir.


### En Çok Görüntülenen {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimdışı yardım Android ekran görüntüsü](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritalar menüsü iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Kullanıcılarımız arasında en çok görüntülenen makaleler, uygulamada veya sitede en çok görüntülenen veya kullanıcı etkileşimi alan makaleleri ifade eder. Bu metrik, kullanıcılarınız için özellikle ilginç veya faydalı olan içeriği belirlemeye yardımcı olur. Kullanıcı tercihlerine ve ilgi alanlarına ilişkin değerli bilgiler sağlayabilir, geliştiricilerin ve içerik oluşturucuların gelecekteki içeriği hedef kitlenin ihtiyaçlarını daha iyi karşılayacak şekilde uyarlamasına olanak tanır. Ayrıca, popüler makaleleri vurgulamak, yeni kullanıcıların uygulama içinde değerli kaynaklar bulmasına yardımcı olabilir.


### Kullanıcı Kılavuzu {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimdışı yardım Android ekran görüntüsü](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritalar menüsü iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

Yardım menüsünün **Kullanıcı Kılavuzu** bölümü, OsmAnd web sitesinin yapısını takip eden, platformlar arasında bilgi tutarlılığı ve gezinme kolaylığı sağlayan eksiksiz bir kılavuzdur. Yardım'ı kullanarak, uygulamadan web sitesine kolayca gezinebilir, aynı içeriği tanıdık bir şekilde düzenlenmiş olarak bulabilirsiniz. Bu tutarlılık, soruların yanıtlarını ve sorun giderme işlemlerini hızlı bir şekilde bulmak için tek bir destek kaynağı sağlayarak kullanılabilirliği artırır.


### Sorun Giderme {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimdışı yardım Android ekran görüntüsü](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritalar menüsü iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Yaygın sorunları çözmek için çözümler ve ipuçları. Belirli bir sorunuz varsa, yanıtını almak için lütfen [Sorun Giderme](../troubleshooting/index.md) bölümünü kontrol edin.

- [Kurulum](../troubleshooting/setup.md). Bir uygulama kurulurken en sık ortaya çıkan sorunlar bunlardır.
- [Haritalar ve veriler](../troubleshooting/maps-data.md). Haritalar, arama ve diğer verilerle ilgili sorunlar.
- [Navigasyon](../troubleshooting/navigation.md). Navigasyon modunda ortaya çıkan en yaygın sorunlar.
- [İz kaydı](../troubleshooting/track-recording-issues.md). Gürültü, boşluklar ve yanlışlıklar gibi iz kaydıyla ilgili yaygın sorunlar.
- [Genel](../troubleshooting/general.md). Çeşitli OsmAnd özellikleriyle ilişkili yaygın sorunlar.
- [Çökme günlükleri](../troubleshooting/crash-logs.md). Çökme günlüklerini OsmAnd ekibine nasıl göndereceğiniz.
- [Android Auto](../troubleshooting/android_auto.md) (*yalnızca Android için*). Otomatik navigasyon sorunları.

### Bize Ulaşın {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimdışı yardım Android ekran görüntüsü](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritalar menüsü iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Soru sormanıza veya önerilerde bulunmanıza olanak tanır.

### Sorunları Bildir {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimdışı yardım Android ekran görüntüsü](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritalar menüsü iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **GitHub'da sorun aç**. [Android sürümü GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [iOS sürümü GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): sorular sorun, hatalar hakkında yazın ve özellikler önerin.
- **Çökme günlüğü gönder** (*Android için*). Yalnızca çökmeler hakkında bilgi içerir.
- [Logcat günlüğü gönder](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Günlük gönder](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Ayrıntılı günlük dosyası.

### OsmAnd Hakkında {#about-osmand}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Çevrimdışı yardım Android ekran görüntüsü](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritalar menüsü iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

Ekibimiz hakkında bilgi edinebilir, uygulamanın güncel sürümünü ve yenilikleri görebilir, uygulamanın beta sürümünü indirebilirsiniz.


## Gizlilik {#privacy}

Bu, [açık kaynaklı](https://github.com/osmandapp/osmand), reklamsız/izleyici içermeyen, gizlilik odaklı bir uygulamadır. Maksimum gizliliği korumak için OsmAnd, çevrimdışı haritaları ilk sıraya koyar, böylece cihazınızdan hiçbir etkileşim veya coğrafi bilgi sızdırılmaz. Hangi verilerin toplandığına ve hangi verilerin ağ tarafından aktarıldığına çok dikkat ediyoruz, daha fazla bilgiyi [Gizlilik politikamızda](https://osmand.net/help-online/privacy-policy) okuyabilirsiniz.


## İzinler {#permissions}

OsmAnd'ın iOS / Android sürümünde herhangi bir zorunlu izni yoktur.

**Temel**:

- **İnternet**. Çevrimdışı haritaları ilk indirme / güncelleme. Ayrıca, [Sokak Seviyesi Görüntüleri](../map/point-layers-on-map.md#-street-level-imagery), [Çevrimiçi fotoğraflar](../map/map-context-menu.md#online-photos) veya [Çevrimiçi haritalar](../map/raster-maps.md) gibi çevrimiçi özelliklere erişmek için de gerekebilir.
- **GPS** / **GSM Ağı**. Konumunuzu belirleyin, navigasyon modunda sizi takip edin ve seyahatinizi kaydedin (isteğe bağlı). Bu izin, [konumum düğmesine](../widgets/map-buttons.md#my-location-and-zoom) tıkladığınızda veya [navigasyonu başlattığınızda](../navigation/setup/route-navigation.md#start--stop-navigation) istenir.

**İsteğe Bağlı**:

- **Kamera/ses kaydı** (*Android*). Yalnızca [Sesli/Görüntülü notlar](../plugins/audio-video-notes.md) tarafından kullanılır. Bu özellik bir eklenti olarak paketlenmiştir ve varsayılan olarak devre dışıdır. Bir gezi sırasında konumla ilgili sesli/görüntülü notları hızlı bir şekilde oluşturmanıza olanak tanır.