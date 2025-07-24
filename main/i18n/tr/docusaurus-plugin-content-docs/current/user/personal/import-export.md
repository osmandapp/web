---
source-hash: f24f24555f47b3d32f9623bdce45ca173d296caa2e59dbe6073460a5cd95119d
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

OsmAnd'daki **İçe Aktar** ve **Dışa Aktar** araçları verilerinizi yönetmenizi sağlar. Cihazınızdaki uygulamalar aracılığıyla profillerinizi, favorilerinizi, rotalarınızı ve diğer ayarlarınızı özel bir biçim kullanarak taşıyabilirsiniz. Bu işlem, verileri cihazlar arasında kaydetmeyi ve aktarmayı basitleştirir ve diğer OsmAnd kullanıcılarıyla paylaşmanıza olanak tanır.

:::note Büyük boyut
*Seçtiğiniz verilerin boyutu önemliyse, uygulamanın `.osf` dosyasını hazırlaması zaman alacaktır.*
:::


## Verileri Dışa / İçe Aktar {#export--import-data}

*İçe Aktar* ve *Dışa Aktar*, oluşturulan `.osf` **dosyalarından** veri kaydetmenize veya [çevrimiçi kaynakları](../map/raster-maps.md) kullanmanıza olanak tanıyarak yeniden yüklemeden sonra bilgileri geri yüklemeyi mümkün kılar.

İçe/dışa aktarım için kullanılabilen **veri türleri**:

- **Ayarlar:**
        [Profiller](../personal/profiles.md#actions), &nbsp;[OsmAnd/Genel Ayarlar](../personal/global-settings.md), &nbsp;[Renkler](../personal/color-palette-schemes.md), &nbsp;[Hızlı eylem](../widgets/quick-action.md), &nbsp;[POI Türü](../map/point-layers-on-map.md#poi-types), &nbsp;[Yoldan kaçın](../map/map-context-menu.md#avoid-road).
- **Yerlerim:**
        [Favoriler](../personal/favorites.md#export--import), &nbsp;[Rotalar](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[OSM notları*, *OSM düzenlemeleri](../plugins/osm-editing.md#create--modify-poi), &nbsp;[A/V notları](../plugins/audio-video-notes.md), &nbsp;[Harita işaretleyicileri](../personal/markers.md), &nbsp;[İşaretleyici geçmişi*, *Arama geçmişi*, *Navigasyon geçmişi](../personal/global-settings.md#history), &nbsp;*Güzergah*.
- **Kaynaklar:**
        [Render stili](../map/vector-maps.md#custom-map-style), &nbsp;[Yönlendirme](../navigation/routing/osmand-routing.md), &nbsp;[Çevrimiçi yönlendirme motorları](../navigation/routing/online-routing.md), &nbsp;[Harita kaynakları*, *Standart/Çevrimdışı Haritalar](../map/raster-maps.md), &nbsp;[Wikipedia ve Seyahat haritaları](../plan-route/travel-guides.md), &nbsp;[Deniz haritaları](../plugins/nautical-charts.md), &nbsp;[Yol haritaları](../map/vector-maps.md#road-style), &nbsp;[Topografya haritaları](../plugins/topography.md), &nbsp;[Sesli komutlar (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Sesli komutlar (kaydedilmiş)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Favori yedekleme](../personal/favorites.md#automatic-favorites-backup).


### Dışa Aktar {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Profiller Eylemler Dışa Aktar Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Yedekleme yerel Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiller Eylemler Dışa Aktar iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Profiller Eylemler Dışa Aktar iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Yapılandırdığınız ve oluşturduğunuz tüm veriler ***Dışa Aktar menüsü*** kullanılarak dışa aktarılabilir. Menü üç gruptan oluşur: **Ayarlar**, **Yerlerim** ve **Kaynaklar**, bunlar tüm mevcut dosya klasörlerini içerir. Her klasörde dışa aktarmak istediğiniz dosyaları tek tek veya hepsini birden seçebilirsiniz. **Tüm dışa aktarılan dosyalar `.osf` formatında kaydedilir**.


### İçe Aktar {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*

| |
| --- | --- | --- |
| ![Profiller Eylemler İçe Aktar Android](@site/static/img/personal/profiles/profile_actions_import_android.png) | ![Profiller Eylemler İçe Aktar 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) | ![Profiller Eylemler İçe Aktar 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*

| |
| --- | --- | --- |
| ![Profiller Eylemler İçe Aktar iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) | ![Profiller Eylemler İçe Aktar 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) | ![Profiller Eylemler İçe Aktar 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) |

</TabItem>

</Tabs>

`.osf` dosyalarını açar ve geri yükler. Cihazın dosya yöneticisinde dosyaya dokunun veya eylem düğmesini kullanın.

- *Bazı öğeler zaten mevcut*. Hem dosyaları kaydetmek hem de hepsini değiştirmek için bu özelliği kullanabilirsiniz.
- *Yeniden başlatma*. Dosyaları içe aktardıktan sonra uygulamanın yeniden başlatılması gerekir.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md), kişisel ayarlarınızı ve uygulama verilerinizi kaydetmeniz için ihtiyacınız olan alternatif kaynaktır. Bu verileri OsmAnd uygulamasını yüklemek için mevcut herhangi bir cihazda veya masaüstü uygulamasını kullanırken kullanabilirsiniz. Yaptığınız herhangi bir değişiklik senkronize edilebilir.


## Veri Kaybını Önleme {#preventing-data-loss}

OsmAnd'ın *Android* ve *iOS* sürümlerinde, uygulamayı tamamen **kaldırırsanız** veya cihazınızdaki Ayarlar menüsü Uygulama bilgileri'nde **Verileri Temizle**'yi seçerseniz, veri klasörü de cihazın dosya yöneticisinden silinecektir. Önlem almazsanız, bu durum **OsmAnd verileri için indirilen tüm haritaların, kaydedilen tüm Favorilerin, GPX rotalarının, Sesli komutların (TTS) ve [diğer verilerin](#export--import-data) kaybedilmesiyle** sonuçlanacaktır.

OsmAnd uygulamasını yeniden yüklemeden önce verilerinizi kaydetmenin iki yolu vardır:

- [OsmAnd Cloud](#osmand-cloud) kullanın. Verilerinizi, OsmAnd'ın [OsmAnd Başlangıç](../personal/osmand-cloud.md#osmand-start) gibi ücretsiz bir sürümü veya daha fazla özelliğe sahip ücretli bir abonelik olan [OsmAnd Pro](../purchases/index.md) gibi özelliklerini kullanarak yedekleyebilirsiniz.
- Verilerinizle birlikte [OSF dosyasını dışa aktarın](#export). `.osf` dosyasını cihazınızdaki bir klasöre veya OsmAnd Cloud'a kopyalayın. OsmAnd'ı yeniden yükledikten sonra, bu `.osf` dosyasını OsmAnd uygulamasına [içe aktarın](#import).


## İlgili Makaleler {#related-articles}

- [Profiller (Ayarlar)](./profiles.md)
- [Rotaları Yönet](../personal/tracks/manage-tracks.md#import--export-track)
- [Arama Geçmişi](../search/search-history.md#export-and-share)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)

### Yaygın Sorunlar ve Çözümler {#common-issues-and-solutions}

1. Favoriler ve Rotalar yeni bir cihaza nasıl aktarılır. [(kontrol et)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. Bir GPX dosyam var, OsmAnd'a nasıl aktarabilirim? [(kontrol et)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Uygulama güncellemesinden sonra harita verilerini silme ("Çoklu Kullanıcı Depolama 1" seçiliyse). [(kontrol et)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)

> *Son güncelleme: Ocak 2025*