---
source-hash: 1cb3cb625144df1fdde1a89546eb0dd6bf2c4217b3e8431939d976cba2b359fb
sidebar_position: 10
title:  İçe / Dışa Aktar
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

OsmAnd'daki **İçe Aktar** ve **Dışa Aktar** araçları, verilerinizi yönetmenizi sağlar. Profillerinizi, favorilerinizi, rotalarınızı ve diğer ayarlarınızı cihazınızdaki uygulamalar aracılığıyla özel bir format kullanarak taşıyabilirsiniz. Bu işlem, verileri cihazlar arasında kaydetmeyi ve aktarmayı basitleştirir ve diğer OsmAnd kullanıcılarıyla paylaşmanıza olanak tanır.

:::note Large size
*If the size of your selected data is significant, it will take time for the application to prepare the `.osf` file.*
:::


## Verileri Dışa / İçe Aktar {#export--import-data}

*İçe Aktar* ve *Dışa Aktar*, oluşturulan `.osf` **dosyalarından** veri kaydetmenize veya [çevrimiçi kaynakları](../map/raster-maps.md) kullanmanıza olanak tanıyarak yeniden yüklemeden sonra bilgileri geri yüklemeyi mümkün kılar.

İçe/dışa aktarım için kullanılabilen **veri türleri**:

- **Ayarlar:**  
        [Profiller](../personal/profiles.md#actions), &nbsp;[OsmAnd/Genel Ayarlar](../personal/global-settings.md), &nbsp;[Renkler](../personal/color-palette-schemes.md), &nbsp;[Hızlı eylem](../widgets/quick-action.md), &nbsp;[POI Türü](../map/point-layers-on-map.md#poi-types), &nbsp;[Yoldan kaçın](../map/map-context-menu.md#avoid-road).
- **Yerlerim:**  
        [Favoriler](../personal/favorites.md#export--import), &nbsp;[Rotalar](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[OSM notları*, *OSM düzenlemeleri](../plugins/osm-editing.md#create--modify-poi), &nbsp;[A/V notları](../plugins/audio-video-notes.md), &nbsp;[Harita işaretleyicileri](../personal/markers.md), &nbsp;[İşaretleyici geçmişi*, *Arama geçmişi*, *Navigasyon geçmişi](../personal/global-settings.md#history), &nbsp;*Güzergah*.
- **Kaynaklar:**  
        [Render stili](../map/vector-maps.md#custom-map-style), &nbsp;[Rota oluşturma](../navigation/routing/osmand-routing.md), &nbsp;[Çevrimiçi rota oluşturma motorları](../navigation/routing/online-routing.md), &nbsp;[Harita kaynakları*, *Standart/Çevrimdışı Haritalar](../map/raster-maps.md), &nbsp;[Wikipedia ve Seyahat haritaları](../plan-route/travel-guides.md), &nbsp;[Deniz haritaları](../plugins/nautical-charts.md), &nbsp;[Yol haritaları](../map/vector-maps.md#road-style), &nbsp;[Topografya haritaları](../plugins/topography.md), &nbsp;[Sesli komutlar (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Sesli komutlar (kaydedilmiş)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Favori yedekleme](../personal/favorites.md#automatic-favorites-backup).


### Dışa Aktar {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Yapılandırdığınız ve oluşturduğunuz tüm veriler ***Dışa Aktar menüsü*** kullanılarak dışa aktarılabilir. Menü, tüm mevcut dosya klasörlerini içeren üç gruptan oluşur: **Ayarlar**, **Yerlerim** ve **Kaynaklar**. Örneğin, Kaynaklar bölümünde haritalar türüne göre *<Translate android="true" ids="standard_maps"/>, <Translate android="true" ids="wikipedia_and_travel_maps"/>, <Translate android="true" ids="nautical_maps"/>*, ve *<Translate android="true" ids="topography_maps"/>* olarak gruplandırılmıştır, böylece daha kolay gezinme ve seçici dışa aktarma sağlanır. Her klasörde dışa aktarmak istediğiniz dosyaları tek tek veya hepsini birden seçebilirsiniz. **Dışa aktarılan tüm dosyalar `.osf` formatında kaydedilir**.  


### İçe Aktar {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) ![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) 

<!-- ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) -->

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  


![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) ![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) 
<!--  ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) -->

</TabItem>

</Tabs>

`.osf` dosyalarını açar ve geri yükler. Cihazın dosya yöneticisindeki dosyaya dokunun veya eylem düğmesini kullanın.

- *Bazı öğeler zaten mevcut*. Bu özelliği hem dosyaları kaydetmek hem de hepsini değiştirmek için kullanabilirsiniz.
- *Yeniden başlatma*. Dosyaları içe aktardıktan sonra uygulamanın yeniden başlatılması gerekir.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md), kişisel ayarlarınızı ve uygulama verilerinizi kaydetmeniz gereken alternatif bir kaynaktır. Bu verileri OsmAnd uygulamasını yüklemek için mevcut herhangi bir cihazda veya masaüstü uygulamasını kullanırken kullanabilirsiniz. Yaptığınız tüm değişiklikler senkronize edilebilir.


## Veri Kaybını Önleme {#preventing-data-loss}

OsmAnd'ın *Android* ve *iOS* sürümlerinde, uygulamayı tamamen **kaldırırsanız** veya cihazınızdaki Ayarlar menüsü Uygulama bilgileri'nde **Verileri Temizle**'yi seçerseniz, veri klasörü de cihazın dosya yöneticisinden silinir. Önlem almazsanız, bu durum **indirilen tüm haritaların, OsmAnd verilerinin, kaydedilen tüm Favorilerin, GPX rotalarının, Sesli komutların (TTS) ve [diğer verilerin](#export--import-data) kaybolmasına** neden olacaktır.

OsmAnd uygulamasını yeniden yüklemeden önce verilerinizi kaydetmenin iki yolu vardır:

- [OsmAnd Cloud](#osmand-cloud) kullanın. Verilerinizi OsmAnd'ın [OsmAnd Start](../personal/osmand-cloud.md#osmand-start) gibi özelliklerini ücretsiz sürüm olarak veya daha fazla özelliğe sahip ücretli bir abonelik olan [OsmAnd Pro](../purchases/index.md) ile yedekleyebilirsiniz.
- Verilerinizle birlikte [OSF dosyasını dışa aktarın](#export). `.osf` dosyasını cihazınızdaki bir klasöre veya OsmAnd Cloud'a kopyalayın. OsmAnd'ı yeniden yükledikten sonra, bu `.osf` dosyasını OsmAnd uygulamasına [içe aktarın](#import).


## İlgili Makaleler {#related-articles}

- [Profiller (Ayarlar)](./profiles.md)
- [Rotaları Yönet](../personal/tracks/manage-tracks.md#import--export-track)
- [Arama Geçmişi](../search/search-history.md#export-and-share)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)

### Sık Karşılaşılan Sorunlar ve Çözümleri {#common-issues-and-solutions}

1. Favorileri ve Rotaları yeni bir cihaza nasıl aktarırım? [(kontrol edin)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. Bir GPX dosyam var, OsmAnd'a nasıl aktarırım? [(kontrol edin)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Uygulama güncellemesinden sonra harita verilerini silme ("Çoklu Kullanıcı Depolama 1" seçiliyse). [(kontrol edin)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)