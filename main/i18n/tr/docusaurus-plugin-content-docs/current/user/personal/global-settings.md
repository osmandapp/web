---
source-hash: 6d1b3b96d03eeb0a709cb35252dd6e33692ccafc93d1375f5cfba33926b39f5a
sidebar_position: 3
title: Global Ayarlar
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

**Global ayarlar**, OsmAnd uygulamasındaki tüm profiller için genel [ayarlardır](../personal/profiles.md). Bunlar OsmAnd sisteminin temel ayarlarıdır ve yapılan tüm değişiklikler uygulamanın tamamını etkiler.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*

![Profiller Genel Ayarlar Android](@site/static/img/personal/profiles/global_sett_1_andr.png) ![Profiller Genel Ayarlar Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*

![Profiller Genel Ayarlar iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Genel {#general}

Bu bölüm, uygulama yüklendiğinde bir [profil](#default-profile) seçme, [harita oluşturma motorunu](#map-rendering-engine) ve verilerin kaydedileceği [klasörü](#data-storage-folder) seçme gibi temel OsmAnd ayarlarını içerir.


### Varsayılan Profil {#default-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Genel Ayarlar Varsayılan profil Android](@site/static/img/personal/profiles/default_profile_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Genel Ayarlar Varsayılan profil Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd, yeni kullanıcılar için ilk profil olarak *Haritaya Göz At* varsayılan profilini kullanır ve bu profil sizin tarafınızdan seçilmişse, uygulama her yeniden başlatıldığında kullanılacaktır. *Son kullanılan* ve *Haritaya Göz At* dahil olmak üzere varsayılan listeden herhangi bir profil seçebilirsiniz.

- **<Translate android="true" ids="shared_string_last_used"/>**. En son kullanılan profili seçmenize olanak tanır.
- **<Translate android="true" ids="settings_preset"/>**. OsmAnd başlatılırken kullanılacak profili seçersiniz. Uygulama [ayarlarında](../personal/profiles.md) değiştirilebilir.


### CarPlay Profili {#carplay-profile}

:::caution YALNIZCA iOS
Bu özellik OsmAnd uygulamasının iOS sürümü için mevcuttur.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*

![Genel Ayarlar Varsayılan profil Android](@site/static/img/personal/profiles/CarPlay_ios.png)

[**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md), aracınızın [CarPlay yazılımına](https://support.apple.com/en-gb/HT205634) bağlandığında kullanılır ve telefonunuzdaki verileri görüntülemek için ses ve video sistemlerini kullanarak OsmAnd uygulamasının optimize edilmiş sürümünden en iyi şekilde yararlanmanıza yardımcı olur.


### Veri Depolama Klasörü {#data-storage-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Profiller Depolama Ayarları Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)

1. **Cihaz belleği**, cihazınızda ne kadar boş alan kaldığını gösterir. OsmAnd verilerinizle ilgili ayrıntılı bilgileri görüntüleyebileceğiniz ve yönetebileceğiniz [*Haritalar ve Kaynaklar*](../personal/maps-resources.md#maps--resources) menüsüne erişmek için bir alana dokunun.

2. **<Translate android="true" ids="change_data_storage_folder"/>** içinde, OsmAnd verilerini cihazınıza kaydetmek için bir klasör seçebilirsiniz.

    - *Dahili uygulama belleği*. Yalnızca OsmAnd uygulaması verilerine erişebilir ve harici uygulamaların hiçbiri erişemez.
    - *Paylaşılan bellek*. Artık mevcut değil.
    - *Harici depolama 1*. Yalnızca 1 OsmAnd uygulaması erişebilir ve Yönetici uygulamaları ve USB.
    - *Çok kullanıcılı depolama*. Yalnızca 1 OsmAnd uygulaması erişebilir, ancak birden çok Android kullanıcısı arasında paylaşılır.
    - *Manuel olarak belirtildi*. Yola bağlıdır.

:::note Android 12+ (depolama klasörünü değiştir)
Android 11-12 sürümlerinde yeni depolama erişim yönergeleri uygulanmıştır. Ayrıntılar için [**Sorun Giderme**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) bölümüne bakın.
:::

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *iOS cihazı → Ayarlar → Genel → iPhone depolama → OsmAnd Haritaları*

![Genel Ayarlar depolama iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)

OsmAnd dosyaları [*Dosyalar*](https://apps.apple.com/us/app/files/id1232058109) uygulamasında görünür. Tüm OsmAnd dosyalarına erişebilirsiniz: [izler](../personal/tracks/manage-tracks.md), [favoriler](../personal/favorites.md), [haritalar](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Bunu yapmak için aşağıdaki yolu izleyin:

Şuraya git: *Dosyalar → Telefonumda → OsmAnd Haritaları*

<!-- ![Dosyalar uygulaması iOS](@site/static/img/personal/storage/files_app_ios.png) ![Dosyalar uygulaması iOS](@site/static/img/personal/storage/files_app_1_ios.png) -->

![Genel Ayarlar depolama iOS](@site/static/img/personal/profiles/files-1.png) ![Genel Ayarlar depolama iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Harita Oluşturma Motoru {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (Yalnızca Android)*

![Genel Ayarlar motor oluşturma Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)

- Uygulamanın **Android** sürümünde, OsmAnd uygulamasında orijinal olarak uygulanan Sürüm 1 harita oluşturma ile iki ve üç boyutlu grafik nesneleri oluşturmak için OpenGL (Açık Grafik Kitaplığı) programlama arayüzünü kullanan Sürüm 2 arasında geçiş yapabilirsiniz.

- **iOS** sürümü harita oluşturma için yalnızca OpenGL kullanır.


| Özellikler | Sürüm 1 | Sürüm 2 (OpenGL) |
|:---|:--- |:--- |
| Çapraz platform | iOS sürümünde kullanılmaz. | Her iki sürüme de uyar. |
| GPU / CPU bağımlı | Düşük performanslı veya eski cihazlar için önerilir. | Güçlü oluşturma motoru. <br /> Yalnızca [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) ve sonraki sürümler için ve [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released) için test modunda kullanılabilir. |
| 3B mod | Haritayı 2B olarak görüntülemek mümkündür ve [3B görünüm](../widgets/map-buttons.md#3d-mode) elde etmek için görüntüleme açısını değiştirebilirsiniz. | Haritayı 2B ve [3B](../widgets/map-buttons.md#3d-mode) olarak görüntüleyebilirsiniz. |
| Harita gösterimi | Haritanın tamamı bir dizi döşeme olarak oluşturulur ve işaretçiler, çizgiler ve metin zaten bu döşemelerin içindedir. | İlk olarak, tüm döşeme paketi oluşturulur ve ardından mevcut semboller haritaya [katman katman](../../technical/algorithms/map-rendering-layers.md) uygulanır. |
| Şeffaf semboller katmanı / alt katmanı | Tüm ayarları destekler. | Vektör metninin üzerinde bir raster katmanı desteklemez. |
| [3B Arazi](../map/raster-maps.md#3d-relief) | Desteklenmiyor. | Bu özellik, normal bir 2B haritaya yükseklik bilgisi ekleyerek harita üzerindeki araziyi görselleştirir, bu da bir 3B ve derinlik efekti oluşturur. |
| [3B İzler](../map/tracks/appearance.md) | Desteklenmiyor. | Bu özellik, izleri deniz seviyesinden yüksekliğe göre görüntülemenizi sağlar. |
| [Çevrimiçi harita](../plugins/online-map.md) | Harita kaynağı herhangi bir çevrimiçi döşeme haritasıysa Kontur çizgilerinin görüntülenmesini desteklemez. | Harita kaynağı çevrimiçi bir harita olduğunda, 3B haritalar da kullanılır ve harita üzerinde Kontur çizgilerinin görüntülenmesi desteklenir. |
| [Hava Durumu eklentisi](../plugins/weather.md) | Bu eklentiyi kullanamazsınız. | Eklenti ile kullanımı kolaydır. |

Haritanın 3B görünümü için görüntü döşeme döşeme yüklenir, ardından tüm semboller yüklenir. Haritanın oluşturma hızı, üzerindeki 2B ve 3B grafik nesnelerinin sayısına ve doğrudan donanımınızın performansına bağlıdır. Bu nedenle, Sürüm 2 (OpenGL) düşük performanslı cihazlarda kullanılamaz.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table>


## Gizlilik ve Güvenlik {#privacy-and-security}

OsmAnd, uygulamada [uygulama içi etkinliğinizi](#analytics) ve [tanımlayıcılarınızı](#identifiers) (*yalnızca Android*) paylaşma, [geçmişinizi](#history) düzenleme ve seçtiğiniz bir [proxy](#proxy) (*yalnızca Android*) kullanma seçeneği sunar.

:::note
Daha fazla bilgi [*OsmAnd Gizlilik ve Güvenlik Politikası*](../../legal/privacy-policy.md) bölümünde bulunabilir.
:::

### Analizler {#analytics}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*

![Genel Ayarlar Analizler Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Genel Ayarlar Anonim veri gönder iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="analytics_pref_title"/>** (*Android*) veya **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) ayarı, *İndirilen Haritalar* ve *Ziyaret Edilen Ekranlar* (*Android*) hakkında anonim veri sağlayıp sağlamayacağınızı seçmenize olanak tanır.

:::note
Konumunuz veya haritada görüntülediğiniz yerler hakkında veri toplanmaz.
:::

### Tanımlayıcılar {#identifiers}

<InfoAndroidOnly />

*Menü → Ayarlar → OsmAnd ayarları → Gizlilik ve güvenlik → Tanımlayıcılar*

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)

Her OsmAnd uygulama yüklemesi için bir **UUID** (*Benzersiz Kullanıcı Tanımlayıcısı*) oluşturulur ve harita yüklemesi sırasında sunuculara gönderilir.

- Sunucu kaynaklarının rasyonel kullanımını kontrol etmek, trafik kullanımını tahmin etmek ve harita indirmeleri hakkında genel aylık raporlar sağlamak için OsmAnd sunucularından çevrimdışı haritaları indirmek için rastgele bir UUID kullanılır.
- UUID her 3 ayda bir değişir.
- OsmAnd sürüm 4.3'ten itibaren, OsmAnd uygulamasını kullanırken kullanıcı verilerinin toplanmasını devre dışı bırakabilirsiniz. O zaman UUID herhangi bir indirme isteğiyle gönderilmeyecektir.
- Daha fazla bilgiyi [Kullanım Koşulları (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier) bölümünde okuyabilirsiniz.


### Geçmiş {#history}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Genel Ayarlar Geçmiş Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Genel Ayarlar Geçmiş Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Genel Ayarlar Geçmiş iOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Genel Ayarlar Geçmiş iOS](@site/static/img/personal/profiles/history_settings_ios_4.png)

</TabItem>

</Tabs>

Uygulama, daha önce girilen verilerin geçmişini (geçmiş) aşağıdaki kategorilerde kaydeder: [Arama](../search/search-history.md), [Navigasyon](../navigation/setup/route-navigation.md#history-of-previous-routes), [Harita işaretçileri](../personal/markers.md#history). İlgili sekmedeki anahtarı kullanarak, belirli giriş kategorileri için günlüğü *Etkinleştir / Devre Dışı Bırak*abilirsiniz. Ayrıca daha önce kaydedilen verileri [yönetebilir](#history) (görüntüleyebilir, silebilir ve paylaşabilirsiniz).

- ***Dosya olarak yedekle*** (*Android*) veya ***Dışa Aktar*** (*iOS*), geçmişinizin [yedek dosyasını](../personal/import-export.md#export) oluşturmak için kullanılır.
- ***Tüm geçmişi temizle*** (*Android*) veya ***Tüm geçmişi sil*** (*iOS*), silme anına kadar kaydedilen tüm geçmiş girişlerini silmek için kullanılır.

<br/>

**Geçmişi paylaş ve sil.**

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Genel Ayarlar Geçmiş Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Genel Ayarlar Geçmiş iOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Genel Ayarlar Geçmiş iOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Geçmiş listesinden bir veya daha fazla öğeyi silebilir veya bunları dosya olarak paylaşabilirsiniz (bu işlevlere *iOS'ta* erişmek için ***Düzenle*** düğmesine dokunun).
- Aynı anda birden fazla kaydı silmek veya dışa aktarmak için, gerekli kayıtların yanındaki onay kutularını seçin ve **Dışa Aktar** veya **Sil** düğmelerine dokunun.


### Proxy {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*

![Genel Ayarlar Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

**<Translate android="true" ids="proxy_pref_title"/>** ayarı, tüm ağ istekleri için bir [HTTP proxy](https://en.wikipedia.org/wiki/Proxy_server) yapılandırmanıza olanak tanır. *Proxy Ana Bilgisayarı* ve *Proxy Bağlantı Noktası* ayarlayabilirsiniz.


## Diğer {#other}

OsmAnd ayarlarının bu bölümünde, aldığınız bildirimleri, konum hizmetini ve uygulama ayarlarınızın nasıl kaydedileceğini yapılandırabilirsiniz.

### Diyaloglar ve bildirimler {#dialogs-and-notifications}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Genel Ayarlar bildirimler Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Genel Ayarlar Diyaloglar iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="dialogs_and_notifications_title"/>** ayarı, açılır pencereleri, diyalogları ve bildirimleri etkinleştirmenize/devre dışı bırakmanıza olanak tanır.

- *Başlangıç mesajı* promosyonları, testleri, etkinlikleri ve daha fazlasını içerir.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) uygulama indirimlerinin ve özel yerel etkinlik mesajlarının görüntülenmesini engeller.
- [*Harita indirme diyaloğu*](../start-with/download-maps.md#download) belirli haritaların indirilebileceğini bildirir.


### Konum Kaynağı {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*Yalnızca Android*)

![Otomatik yedekleme](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd, konumunuzu belirlemek için hizmetler seçeneği sunar. Bu bölüm için [Konum izni](../start-with/first-steps.md#permission-to-access-the-location) ve [Sorun Giderme](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) hakkında daha fazla bilgi okumanız önerilir.

***Android***:

- OsmAnd'ın konumunuzu belirlemek için hangi *Google Play* veya *Android API* hizmetlerini kullanacağını seçebilirsiniz. Bu, *Google Play Hizmetleri* olmayan cihazlar veya izleri kaydederken yanlış konum veya yükseklik verileri durumunda yararlı olabilir.
- OsmAnd, *Google Fused Location Providers* ve *Android GPS ve Ağ Sağlayıcıları* kaynaklarından veri alır. **<Translate android="true" id="location_source" />** ayarını şuradan değiştirebilirsiniz: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- iOS sistemi, konum belirlemek için *iOS API*'yi kullanır.
- OsmAnd Konum için tüm ayarlar iOS cihaz ayarlarında bulunabilir: *Ayarlar → OsmAnd haritaları → Konum*
- Konum hizmetlerinin gizliliği: *Ayarlar → Gizlilik → Konum Hizmetleri*


### Otomatik Yedekleme {#auto-backup}

<InfoAndroidOnly />

![Genel Ayarlar bildirimler Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android veya OsmAnd Cloud, verilerinizi ve uygulama ayarlarınızı kaydedebilir.

- Varsayılan olarak, *OsmAnd ayarlarınız* ve [*Favoriler*](../personal/favorites.md#automatic-favorites-backup) harita işaretçileriniz Android sistemi tarafından otomatik olarak yedeklenir. Bu, bunları yeni cihazlarda veya uygulamayı yeniden yükledikten sonra geri yüklemenizi sağlar.

- Yedekleme boyutunun *25 MB* ile sınırlı olduğunu lütfen unutmayın.

- Yedekleme dosyalarını bulmak için üçüncü taraf bir dosya yöneticisi uygulaması kullanın.
    *NOT: Yedekleme dosyalarını Android dosya yöneticisini kullanarak bulabilirsiniz: Android → data → net.osmand → files → backup, ancak Android'in son sürümlerinde sistem dizinlerine erişimin sınırlı olduğunu unutmayın.*

**[*OsmAnd Cloud*](../personal/osmand-cloud.md) kullanıyorsanız, yeniden yükleme sırasında herhangi bir karışıklığı önlemek için bu varsayılan yedekleme seçeneğini devre dışı bırakmanız önerilir.**


## Yasal {#legal}

OsmAnd sizi [hız kameraları hakkında uyarabilir](../navigation/guidance/navigation-settings.md#screen-alerts), ancak yalnızca ülkenizdeki yasalar buna izin veriyorsa.


### Hız Kameralarını Kaldır {#uninstall-speed-cameras}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*

![Genel Ayarlar Kameralar Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png) ![Genel Ayarlar Kameralar Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*

![Genel Ayarlar Kameralar Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png) ![Genel Ayarlar Kameralar Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Bu ayar, hız kameralarıyla POI'yi etkinleştirmenize veya devre dışı bırakmanıza olanak tanır, değişiklikleri yapmak için OsmAnd uygulamasını yeniden başlatmanız gerekir.

Bazı ülkelerde veya bölgelerde, hız kamerası uyarı uygulamalarını kullanmak yasa dışıdır. Ülkenizdeki yasalara bağlı olarak bir seçim yapmalısınız. **Etkin tut** seçeneğini seçin, hız kamerası uyarıları ve bildirimleri alacaksınız. **Kaldır** seçeneğini seçin ve uyarılar, bildirimler ve POI gibi hız kameralarıyla ilgili tüm veriler, OsmAnd'ı tamamen yeniden yükleyene kadar silinecektir.

Rotanızdaki hız kameraları için uyarılar hakkında bilgiyi Navigasyon widget'ları makalesinin *[Uyarı widget'ı](../widgets/nav-widgets.md#alert-widget)* bölümünde okuyun.


## İlgili Makaleler {#related-articles}

- [Profiller (Ayarlar)](./profiles.md)
- [İçe Aktar / Dışa Aktar](../personal/import-export.md)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)

### Sorun Giderme {#troubleshooting}

- **Android 12+ (depolama klasörünü değiştir)**. Android 11-12 sürümlerinde yeni depolama erişim yönergeleri uygulanmıştır. Bu değişiklikler özellikle SD kartlardaki haritaların depolanmasını etkiler, bu da dosya erişim performansını önemli ölçüde yavaşlatır ve Android 11 ve 12'de SD kart klasörlerine erişim kısıtlamalarını sıkılaştırır. Bu sorunu nasıl çözeceğinizi [**Sorun Giderme**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) bölümüne bakın.

- **Yükseklik sorunları için konum kaynağı**. Google Play politikasını değiştirdi ve uyum sağlamak için OsmAnd, sürüm 3.9'dan itibaren, arka planda çalışırken konum düzeltmeleri almak için Google Play Hizmetlerini kullanmalıdır. Daha fazla bilgiyi [Sorun Giderme](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) bölümünde okuyun.

> *Son güncelleme: Kasım 2024*