---
source-hash: a2c574750d2fad3f5b86fe34399e253d3561dee9bc81b7ec97490f6574b7c609
title:  İzler
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
OsmAnd, harita üzerinde çeşitli rotaları görüntülemek için birçok güçlü özelliğe sahiptir. Rotalar, Navigasyonun bir parçası olarak oluşturulabilir, Rota Planla aracılığıyla oluşturulabilir, GPX izleri olarak içe aktarılabilir, Seyahat Kaydı eklentisi aracılığıyla kaydedilebilir veya OpenStreetMap verilerinden göz atılıp seçilebilir.


## İz Türleri {#types-of-tracks}

[İzler (GPX)](#display-tracks-on-the-map) - kaydedilmiş veya planlanmış seyahat [GPX formatında](https://en.wikipedia.org/wiki/GPS_Exchange_Format) kaydedilir. Bu tür bir rota harici bir kaynaktan içe aktarılabilir, uygulamada oluşturulabilir veya sizin tarafınızdan kaydedilebilir. GPX, 3 farklı veri türünden birini veya hepsini içerebilir:

- Çizgi olarak iz (***Geometri***). Dosya bir ```<trkpt>``` nokta dizisine sahiptir, her noktanın konumu ve isteğe bağlı olarak zaman, hız, irtifa ve diğer nitelikleri vardır. Bu izler haritada düz çizgiler olarak görüntülenir.
- Rota olarak iz (***Rota***). Dosya bir ```<rtept>``` nokta dizisine sahiptir, her nokta rotanın ara noktası olarak tanımlanır. Noktaların bir rota içinde nasıl bağlanması gerektiği, küçük rota segmentleri olarak mı yoksa düz bir çizgiyle mi bağlanacağı buna bağlıdır. Bu izler haritada kesikli çizgiler olarak görüntülenir.
- Yol Noktaları (***Noktalar***). Dosya niteliklere sahip ```<wpt>``` noktalarına sahiptir. Yol noktaları haritada dairesel noktalar olarak görüntülenir. Ek bilgi almak için onlara dokunabilirsiniz.

OsmAnd, 1-3 kombinasyonlu izler oluşturabilir. [Rota Planla](../../plan-route/create-route.md) ***Geometri*** ve ***Rota*** içeren bir iz oluşturur, eğer bunu ***Basitleştirilmiş İz*** olarak kaydederseniz, sadece ***Geometri*** kalır. [İz kaydetme](../../plugins/trip-recording.md#new-track-recording) sadece ***Geometri*** oluşturur, ancak bağlam menüsü aracılığıyla buna ***Noktalar*** da ekleyebilirsiniz.


## Haritada İzleri Görüntüle {#display-tracks-on-the-map}

Harita üzerinde çeşitli rotaları görüntülemek için birçok güçlü özelliğe sahiptir. Rotalar, Navigasyonun bir parçası olarak oluşturulabilir, Rota Planla aracılığıyla oluşturulabilir, GPX izleri olarak içe aktarılabilir, Seyahat Kaydı eklentisi aracılığıyla kaydedilebilir veya OpenStreetMap verilerinden göz atılıp seçilebilir.

### Haritayı Yapılandır {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Harita izlerini yapılandır Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Harita izlerini yapılandır Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Harita izlerini yapılandır iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Harita izlerini yapılandır iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

*Haritayı Yapılandır* seçeneği, yakın zamanda görüntülenen tüm izlerin görüntülenmesini hızlı bir şekilde yönetmenizi sağlar ve bir grup iz için görünürlüğü açıp kapatmanıza olanak tanır. İz sıralaması, *Yerlerim → İzler* sekmesinde yapılandırılan sırayı takip eder. Bir iz öğesine uzun dokunarak [İz Menüsü'ne](../../personal/tracks/manage-tracks.md#track-menu) erişebilirsiniz. Ayrıca, bu menüde, aynı anda birden fazla seçili iz görünümünü değiştirebilirsiniz.

### Yerlerim {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Android'de izlerle Yerlerim](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → seçilen GPX izine uzun dokunun → Haritada göster*

![iOS'ta bir izin bağlam menüsü](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

[Yerlerim *→* İzler sekmesinde](../../personal/tracks/manage-tracks.md#manage-tracks) izi haritada görüntülemek için şunları yapmanız gerekir:

- *Android* - gerekli izi içeren alandaki *üç nokta menüsüne* dokunun.
- *iOS* - listedeki gerekli izi uzun dokunun.


### İz Bağlam Menüsü {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İz bağlam menüsü genel bakış Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz bağlam menüsü genel bakış iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Haritada bir iz seçtiğinizde veya bir izi kaydettikten veya içe aktardıktan sonra [iz bağlam menüsünü](./track-context-menu.md) açtığınızda, harita üzerindeki görünürlüğünü kontrol edebilirsiniz. İzi harita görünümünde görüntülemek veya kaldırmak için *Göster* veya *Gizle* düğmelerini kullanmanız yeterlidir.


## Haritada İzi Analiz Et {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *İze dokunun → İz sekmesi → <Translate android="true" ids="analyze_on_map"/>*  

![İz menüsü haritada analiz et Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![İz menüsü haritada mesafeyi analiz et Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *İze dokunun → İz sekmesi → <Translate ios="true" ids="analyze_on_map"/>*  

![İz menüsü haritada analiz et](@site/static/img/personal/tracks/track_analyze_ios.png)  ![İz menüsü haritada analiz et ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Bu araç, grafikler ve haritalar kullanarak [iz](../../map/tracks/track-context-menu.md#options) verilerinin ayrıntılı bir analizini sağlar.

- **Grafik verileri (Y ekseni)** şunları gösterir: *Rakım*, *Eğim*, *Hız*, [*Harici sensör verileri*](../../plugins/external-sensors.md) ve iz verilerinde bulunuyorsa en fazla iki seçeneğin kombinasyonları.
- **Grafik boyutu (X ekseni)** şunları temsil eder: *Mesafe*, *Zaman* ve *Günün saati*.
- **Dokunma/kaydırma etkileşimi**. İz üzerindeki belirli bir nokta hakkında bilgi görüntülemek için bir grafiğe dokunun. Grafikte kaydırma, harita üzerindeki uygun konumu vurgular ve bilgi çubuğunda ayrıntıları gösterir.
- **Ölçeklendirme**. Daha ayrıntılı görüntüleme için grafiği ölçeklendirmek için [iki parmak hareketi](../../map/interact-with-map.md#gestures) kullanın.


### Konumumu Takip Et {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İz menüsü haritada analiz et 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![İz menüsü haritada analiz et 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz menüsü haritada analiz et](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![İz menüsü haritada analiz et ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Harita görünümünü ve grafiği konumunuzla senkronize etmek için [Konumum](../../map/interact-with-map.md#my-location-and-zoom) düğmesine dokunun.

- **Grafiğin ölçeği** aynı kalır ve **çubuk bilgisi** sol tarafta 1/4 oranında sabitlenir.
- Siz hareket ettikçe, **grafik soldan sağa kayar** ve izinizin önündeki bilgileri görüntüler.
- Bu ekranda başka hiçbir widget görüntülenmez.
- Bu özellik, izde gezinirken yürüyüş ve bisiklet için kullanışlıdır.  


## İlgili Makaleler {#related-articles}

- [İz görünümü](./appearance.md)
- [İz Bağlam menüsü](./track-context-menu.md)
- [İz ile gezinme](../../navigation/setup/gpx-navigation.md)
- [Haritadaki rotalar](https://docs.osmand.net/blog/routes) blog makalesi
- [Haritayı yapılandır](../../map/configure-map-menu.md)  
- [GPX izleri](../../personal/tracks/index.md)  
- [Rota planla](../../plan-route/index.md)  
- [Seyahat Kaydı](../../plugins/trip-recording.md)