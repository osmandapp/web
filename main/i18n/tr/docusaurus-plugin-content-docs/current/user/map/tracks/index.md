---
source-hash: f48138cc59c4ee27ce642e063d856f276b2f56ba4cb068db2cb6e337b797c4c1
title: Rotalar
sidebar_position: 2
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

OsmAnd, harita üzerinde çeşitli rotaları görüntülemek için birçok güçlü özelliğe sahiptir. Rotalar, Navigasyonun bir parçası olarak oluşturulabilir, Rota Planla aracılığıyla oluşturulabilir, GPX rotaları olarak içe aktarılabilir, Gezi Kayıt eklentisi aracılığıyla kaydedilebilir veya OpenStreetMap verilerinden göz atılıp seçilebilir.


## Rota Türleri {#types-of-tracks}

[Rotalar (GPX)](#display-tracks-on-the-map) - kaydedilmiş veya planlanmış bir gezi, [GPX formatında](https://en.wikipedia.org/wiki/GPS_Exchange_Format) kaydedilir. Bu tür bir rota harici bir kaynaktan içe aktarılabilir, uygulama içinde oluşturulabilir veya sizin tarafınızdan kaydedilebilir. GPX, 3 farklı veri türünden birini veya hepsini içerebilir:

- Çizgi olarak Rota (***Geometri***). Dosya, her bir noktanın konumunu ve isteğe bağlı olarak zaman, hız, irtifa ve diğer özelliklerini içeren bir ```<trkpt>``` noktaları dizisine sahiptir. Bu rotalar harita üzerinde düz çizgiler olarak görüntülenir.
- Rota olarak Rota (***Rota***). Dosya, her bir noktanın rotanın ara noktası olarak tanımlandığı bir ```<rtept>``` noktaları dizisine sahiptir. Noktaların bir rota içinde nasıl bağlanması gerektiği, küçük rota segmentleri olarak mı yoksa düz bir çizgiyle mi bağlanacağı, buna bağlıdır. Bu rotalar harita üzerinde kesikli çizgiler olarak görüntülenir.
- Ara Noktalar (***Noktalar***). Dosya, özelliklere sahip ```<wpt>``` noktalarına sahiptir. Ara noktalar harita üzerinde dairesel noktalar olarak görüntülenir. Ek bilgi almak için onlara dokunabilirsiniz.

OsmAnd, 1-3 kombinasyonlu rotalar oluşturabilir. [Rota Planla](../../plan-route/create-route.md) ***Geometri*** ve ***Rota*** ile bir rota oluşturur; eğer bunu ***Basitleştirilmiş Rota*** olarak kaydederseniz, yalnızca ***Geometri*** korunur. [Rota kaydetme](../../plugins/trip-recording.md#new-track-recording) yalnızca ***Geometri*** oluşturur, ancak bağlam menüsü aracılığıyla buna ***Noktalar*** da ekleyebilirsiniz.


## Rotaları Haritada Görüntüleme {#display-tracks-on-the-map}

Rota görünürlüğünü, çeşitli menülerden ( [Yerlerim menüsü](#my-places), [Haritayı Yapılandır menüsü](#configure-map) ve [Rota Bağlam menüsü](#track-context-menu) ) hangi rotaların görüntüleneceğini veya gizleneceğini seçerek yönetebilirsiniz. Bu esneklik, farklı rotalar arasında hızlıca geçiş yapmanızı sağlayarak, herhangi bir zamanda haritanızda yalnızca ilgili rotaların görünür olmasını sağlar.

### Haritayı Yapılandır {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Harita rotalarını yapılandır Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Harita rotalarını yapılandır Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Harita rotalarını yapılandır iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Harita rotalarını yapılandır iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

*Haritayı Yapılandır* seçeneği, son görüntülenen tüm rotaların görünümünü hızlıca yönetmenizi sağlar ve bir rota grubunun görünürlüğünü açıp kapatmanıza olanak tanır. Rota sıralaması, *Yerlerim → Rotalar* sekmesinde yapılandırılan sırayı takip eder. Bir rota öğesine uzun dokunarak [Rota Menüsüne](../../personal/tracks/manage-tracks.md#track-menu) erişebilirsiniz. Ayrıca, bu menüde, aynı anda birden fazla seçili rotanın görünümünü değiştirebilirsiniz.

### Yerlerim {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Android'de rotalarla Yerlerim](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → seçilen GPX rotasına uzun dokunun → Haritada göster*

![iOS'ta bir rotanın bağlam menüsü](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

[Yerlerim *→* Rotalar sekmesinde](../../personal/tracks/manage-tracks.md#manage-tracks) rotayı haritada görüntülemek için şunları yapmanız gerekir:

- *Android* - gerekli rotanın bulunduğu alandaki *üç nokta menüsüne* dokunun.
- *iOS* - listedeki gerekli rotaya uzun dokunun.


### Rota Bağlam Menüsü {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota bağlam menüsü genel bakış Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota bağlam menüsü genel bakış iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Haritada bir rota seçtiğinizde veya bir rotayı kaydettikten veya içe aktardıktan sonra [rota bağlam menüsünü](./track-context-menu.md) açtığınızda, haritadaki görünürlüğünü kontrol edebilirsiniz. Rotayı harita görünümünde göstermek veya kaldırmak için *Göster* veya *Gizle* düğmelerini kullanmanız yeterlidir.


## Haritada Rotayı Analiz Et {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *Rotaya dokunun → Rota sekmesi → <Translate android="true" ids="analyze_on_map"/>*  

![Rota menüsü haritada analiz et Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Rota menüsü haritada analiz et mesafe Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *Rotaya dokunun → Rota sekmesi → <Translate ios="true" ids="analyze_on_map"/>*  

![Rota menüsü haritada analiz et](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Rota menüsü haritada analiz et ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Bu araç, [rota](../../map/tracks/track-context-menu.md#options) verilerinin grafikler ve haritalar kullanarak ayrıntılı bir analizini sağlar.

- **Grafik verileri (Y ekseni)** şunları görüntüler: *Rakım*, *Eğim*, *Hız*, [*Harici sensör verileri*](../../plugins/external-sensors.md) ve rota verilerinde bulunuyorsa en fazla iki seçeneğin kombinasyonları.
- **Grafik boyutu (X ekseni)** şunları temsil eder: *Mesafe*, *Süre* ve *Günün saati*.
- **Dokunma/kaydırma etkileşimi**. Rotadaki belirli bir nokta hakkında bilgi görüntülemek için bir grafiğe dokunun. Grafikte kaydırmak, harita üzerinde uygun konumu vurgular ve bilgi çubuğunda ayrıntıları gösterir.
- **Ölçekleme**. Daha ayrıntılı görüntüleme için grafiği ölçeklendirmek üzere [iki parmak hareketini](../../map/interact-with-map.md#gestures) kullanın.


### Konumumu Takip Et {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota menüsü haritada analiz et 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Rota menüsü haritada analiz et 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota menüsü haritada analiz et](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Rota menüsü haritada analiz et ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Harita görünümünü ve grafiği konumunuzla senkronize etmek için [Konumum](../../map/interact-with-map.md#my-location-and-zoom) düğmesine dokunun.

- **Grafiğin ölçeği** aynı kalır ve **çubuk bilgisi** sol tarafta 1/4 oranında sabitlenir.
- Siz hareket ettikçe, **grafik soldan sağa kayarak** rotanızın ilerisindeki bilgileri görüntüler.
- Bu ekranda başka hiçbir widget görüntülenmez.
- Bu özellik, rotada gezinirken yürüyüş ve bisiklet için kullanışlıdır.  


## İlgili Makaleler {#related-articles}

- [Rota görünümü](./appearance.md)
- [Rota Bağlam menüsü](./track-context-menu.md)
- [Rotaya göre navigasyon](../../navigation/setup/gpx-navigation.md)
- [Haritadaki rotalar](https://docs.osmand.net/blog/routes) blog yazısı
- [Haritayı yapılandır](../../map/configure-map-menu.md)  
- [GPX rotaları](../../personal/tracks/index.md)  
- [Rota planla](../../plan-route/index.md)  
- [Gezi Kaydı](../../plugins/trip-recording.md)

> *Son güncelleme: Kasım 2024*